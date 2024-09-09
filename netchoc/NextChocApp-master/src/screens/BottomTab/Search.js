import { Image, Pressable, Text, TextInput, View, ActivityIndicator, ScrollView, RefreshControl, Animated, Dimensions, PanResponder, Keyboard, Modal } from "react-native"
import { useNavigation } from "@react-navigation/native";
// import MapView from 'react-native-maps'
import { Ionicons } from "@expo/vector-icons";
import analytics from '@react-native-firebase/analytics';
import GoogleMapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { AntDesign, Octicons, FontAwesome5, Entypo, EvilIcons } from "@expo/vector-icons";
import config from "../../common/config";
import { useEffect, useState, useRef } from "react";
import useThrottle from "../../common/hooks/useThrottle";
import { useLocal, useToken } from "../../common/store/user";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import HomeAPI from "../../api/HomeAPI";
import ShopModal from "../../components/ShopModal";
import MapAPI from "../../api/MapAPI";
import { API_URL } from "../../common/api/API_URL";
import ProductItem from "../../components/ProductItem";
export default function Search({ navigation }) {
  // let navigation = useNavigation();
  const loading = useState(false);
  const loading2 = useState(false);
  const token = useToken();
  const [page, setPages] = useState(0);
  const [visible, setVisible] = useState(false);
  const [ModalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState();
  const local = useLocal();
  const [change, setChange] = useState(false);
  const [s_height, setSHeight] = useState(Dimensions.get('screen').height * 0.59);
  const [delta, setDelta] = useState({ latitudeDelta: 0.005 });
  const [pvisible,setPVisible]=useState(false);
  const [shopList, setShopList] = useState([]);
  // const [pos, setPos] = useState({
  //   latitude:
  //     local?.coords?.latitude ??
  //    -29.30725436315374,
  //   longitude:
  //     local?.coords?.longitude ??
  //    137.7287693788147,
  // });
  const lc = useLocal();
  const [currentPositionPane, setCurrentPositionPane] = useState(Dimensions.get('screen').height * 0.60);
  const mRef = useRef();
  const animationRef = useRef(null);
  const mscroll = useRef(new Animated.Value(Dimensions.get('screen').height * 0.15)).current
  const scroll = useRef(new Animated.Value(Dimensions.get('screen').height * 0.60)).current
  const [flag, setFlag] = useState(false);
  const [keywords, setKeywords] = useState("");
  // const mRef = useRef();
  const range = 80;//滑动范围
  const defaultPosition = Dimensions.get('screen').height * 0.60;//默认面板高度

  // const searchAreaShop = useMutation({
  //   mutationFn: (data) => MapAPI.searchAreaShop({...data,keywords}),
  //   mutationKey: ['searchAreaShop',keywords],
  // })
  // const searchAreaShop=useQuery({
  //   queryFn:(data)=> MapAPI.searchAreaShop({...data,keywords}),
  // })

  useEffect(() => {
    Keyboard.addListener("keyboardWillChangeFrame", () => {
      Animated.timing(scroll, {
        toValue: Dimensions.get('screen').height - 32,
        duration: 300,
        useNativeDriver: true,
      }).start();
      setCurrentPositionPane(Dimensions.get('screen').height - 32)
    }),
      Keyboard.addListener("keyboardDidHide", () => {
        Animated.timing(scroll, {
          toValue: defaultPosition,
          duration: 300,
          useNativeDriver: true,
        }).start();
        setCurrentPositionPane(defaultPosition)
      })
  }, [])
  const mpanResponder =
    PanResponder.create({
      onPanResponderGrant: () => {

      },
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
      onPanResponderMove: (evt, gestureState) => {
        // Animated.timing(scroll, {
        //    toValue: currentPositionPane + gestureState.dy,
        //    duration: 1,
        //    useNativeDriver: true,
        // }).start();
      },
      onPanResponderRelease: (evt, gestureState) => {
        //
        console.log(gestureState)

        //中部向下滑动

        if (gestureState.dy >= range) {
          //滑动到最小化
          setVisible(false);
        }



      },
      onPanResponderTerminate: (evt, gestureState) => {
      },
      onShouldBlockNativeResponder: (evt, gestureState) => false,
    });

  const panResponder =
    PanResponder.create({
      onPanResponderGrant: () => {

      },
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,
      onPanResponderMove: (evt, gestureState) => {
        Animated.timing(scroll, {
          toValue: currentPositionPane + gestureState.dy,
          duration: 1,
          useNativeDriver: true,
        }).start();
      },
      onPanResponderRelease: (evt, gestureState) => {
        //中部向下滑动
        if (gestureState.moveY > defaultPosition) {
          if (gestureState.dy >= range) {
            //滑动到最小化
            Animated.timing(scroll, {
              toValue: Dimensions.get('screen').height - 32,
              duration: 300,
              useNativeDriver: true,
            }).start();
            setCurrentPositionPane(Dimensions.get('screen').height - 32)
          } else {
            //回弹
            Animated.timing(scroll, {
              toValue: defaultPosition,
              duration: 300,
              useNativeDriver: true,
            }).start();
            setCurrentPositionPane(defaultPosition)
          }
        } else {
          ////console.log(gestureState)
          //中部向上滑动
          if (gestureState.dy < 0) {
            if (Math.abs(gestureState.dy) >= range) {
              //超出范围，向第一个状态改变
              Animated.timing(scroll, {
                toValue: Dimensions.get("screen").height * 0.28,
                duration: 300,
                useNativeDriver: true,
              }).start();
              setSHeight(Dimensions.get("screen").height * 0.28);
              setCurrentPositionPane(Dimensions.get("screen").height * 0.28)
            } else {
              //回弹
              Animated.timing(scroll, {
                toValue: defaultPosition,
                duration: 300,
                useNativeDriver: true,
              }).start();
              setCurrentPositionPane(defaultPosition)
              // setSHeight(Dimensions.get("screen").height*0.58);
            }
          } else {
            //顶部向下滑动
            if (gestureState.dy >= range) {
              //超出范围，向第一个状态改变
              Animated.timing(scroll, {
                toValue: defaultPosition,
                duration: 300,
                useNativeDriver: true,
              }).start();
              setCurrentPositionPane(defaultPosition)
              setSHeight(Dimensions.get("screen").height * 0.59);
            }
          }

        }


      },
      onPanResponderTerminate: (evt, gestureState) => {
      },
      onShouldBlockNativeResponder: (evt, gestureState) => false,
    });


  const searchAreaShop = useQuery({
    queryFn: (data) => MapAPI.searchAreaShop({ ...data, radius: delta.latitudeDelta * 100, listRows: 50, lng: delta.longitude ?? 131.044, lat: delta.latitude ?? -25.363, page: page, token, keywords }),
    queryKey: ['DiscoverFetchShopList', keywords, local, delta],

    onSuccess: (res) => {
      console.log("000");
      console.log(res);
      setFlag(false);
      //consolelog(res.pages[0]);
      setShopList(res);
      // ////consolelog("===");
      // setPages(page + 1);
      loading2[1](false)
    },
    staleTime: 100,
    onError: (res) => {
      Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
      loading2[1](false)
    },
  })


  const _onMomentumScrollEnd = ({ nativeEvent }) => {
    // const isCloseToBottom =
    //   nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >
    //   nativeEvent.contentSize.height - 40;
    // //////////consolelog(nativeEvent.layoutMeasurement.height, nativeEvent.contentOffset, nativeEvent.contentSize.height);
    // //////////consolelog(1);

    // if (isCloseToBottom) {
    //   //////////consolelog("到底部");
    //   if (fetchShopList.isFetchingNextPage || !fetchShopList.hasNextPage) return;
    //   useThrottle(fetchShopList.fetchNextPage(), 3000)
    // }
  }
  useEffect(() => {
    ////console.log('delta发生变化，准备loading')
    loading2[1](true);

  }, [delta])
  useEffect(() => {

    if (local?.coords) {

      ////console.log('local change...');
      ////console.log('恢复地图到用户中心...');
      // ////console.log(local)
      searchAreaShop.refetch();
      (mRef.current).setCamera({
        center: { latitude: local?.coords?.latitude - 0.01, longitude: local?.coords?.longitude },
        zoom: 14,
      });
    }
  }, [local])




  return (<View style={{ display: 'flex', flex: 1, postion: 'relative' }}>
    {/*  */}
    {/* <View style={{ marginHorizontal: 16, display: 'flex', alignItems: 'center', borderRadius: 24, backgroundColor: 'rgba(0,0,0,0.1)', flexDirection: 'row', marginBottom: 18, marginTop: 18 }}>
      <AntDesign name="search1" style={{ marginLeft: 16 }} size={24} color="rgba(0,0,0,0.4)" />
      <TextInput onChangeText={(e) => {
        setKeywords(e);
      }} value={keywords} style={{ paddingHorizontal: 16, flex: 1, fontSize: 16, paddingVertical: 12 }} />

    </View> */}

    <View style={{ position: 'absolute', top: Dimensions.get("screen").height * 0.04, zIndex: 20, width: '100%' }}>
      <View style={{ marginHorizontal: 16, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
        <View style={{}}>
          <Pressable onPress={() => setVisible(true)} style={{ display: 'flex', borderWidth: 1, paddingHorizontal: 8, borderRadius: 24, paddingVertical: 12, flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
            <EvilIcons name="location" size={24} color="black" />
            <Text numberOfLines={1} style={{ fontSize: 12, maxWidth: 70, textAlign: 'center' }}>
              {/* {d_location && d_location.length ? d_location[0]?.name : null} */}
              {lc && lc?.name ? lc.name : 'Positioning'}

            </Text>
            <AntDesign name="down" style={{ marginLeft: 4 }} size={12} color="black" />
          </Pressable>
        </View>
        <View style={{ width: 60, height: 60, borderRadius: 12, display: 'flex', justifyContent: 'center' }}>
        </View>
      </View>
      <View style={{ marginHorizontal: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
        <View style={{ display: 'flex', flex: 1, alignItems: 'center', shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, marginRight: 8, flexDirection: 'row', backgroundColor: 'white', borderColor: 'white', paddingHorizontal: 16, paddingVertical: 4, borderWidth: 1, borderColor: '#fff', borderRadius: 22 }}>
          <Image source={require("../../assets/images/search.png")} style={{ width: 15, height: 15 }} />
          <TextInput style={{ display: 'flex', flex: 1, marginLeft: 8, }} placeholder="Search Good2save" />
        </View>
        <View style={{ width: 40, height: 40, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 50 }}>
          <Pressable onPress={()=>setModalVisible(true)} style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', shadowColor: "#000", shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 5, }}>
            <Image source={require("../../assets/images/filterIcon.png")} style={{ width: 20, height: 20 }} />
          </Pressable>

        </View>

      </View>
      <View style={{ marginHorizontal: 16, marginTop: 16 }}>
        <Pressable style={{ marginLeft: 'auto' }}><Image source={require("../../assets/images/currentPosition.png")} style={{ width: 40, height: 40 }} /></Pressable>
      </View>
    </View>




    <View style={{ flex: 1, display: 'flex', position: 'relative' }}>
      <GoogleMapView

        loadingEnabled={loading[0]}
        initialCamera={{
          zoom: 3.3, center: { latitude: -25.363 - 19, longitude: 131.044 }, heading: 1, pitch: 1
        }}
        onRegionChangeComplete={(res) => {
          //consolelog("123");
          if (change) return;
          setChange(true);
          setTimeout(() => {
            setChange(false)
            setDelta(res);
          }, 1000);
          // ////console.log(res)

        }}

        scrollEnabled={true}
        showsScale={true}
        // onMapLoaded={() => resetPosition(customerPoi[0])}
        ref={(r) => (mRef.current = r)}
        provider={PROVIDER_GOOGLE}
        // showsCompass={true}
        zoomControlEnabled={true}
        zoomEnabled={true}
        showsUserLocation={true}
        showsMyLocationButton={true}
        mapType={"standard"}
        zoomTapEnabled={false}
        style={{ flex: 1, width: '100%', marginBottom: 26.2 }}
      >
        {
          (searchAreaShop.isSuccess) && !!shopList?.length &&
          shopList.map((item, index) => {
            // console.log(item.icon);
            return (
              <Marker
                title={item.merchantname}
                description={item.merchantaddress}
                key={index}
                pinColor={'blue'}
                onPress={() => {
                  setVisible(true);
                  setMessage(item);
                }}
                coordinate={{
                  latitude: parseFloat(item.lat),
                  longitude: parseFloat(item.lng),
                }}>
                <Pressable onPress={() => { setVisible(true); setMessage(item); }}>
                  <View style={{
                    color: "#fff",
                    width: 30,
                    height: 30,
                    lineHeight: 20,
                    textAlign: "center",
                    backgroundColor: config.primaryColor,
                    alignItems: "center",
                    borderRadius: 30,
                    padding: 5,
                  }}>
                    {/* <Entypo name="shop" size={15} color="#fff" /> */}
                    {(item.icon && item.icon !== "") ? <Image source={{ uri: item.icon }} style={{ width: 20, height: 20, borderRadius: 50 }} />
                      : <Image source={require('../../assets/images/icon.png')} style={{ width: 20, height: 20, borderRadius: 50 }} />}
                  </View>
                </Pressable>
              </Marker>)
          }
          )
        }
      </GoogleMapView>


      <Animated.View style={{
        height: Dimensions.get('screen').height * 1
        , position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%',
        borderTopLeftRadius: 40, borderTopRightRadius: 40,
        transform: [{ translateY: scroll }],
        backgroundColor: 'white', padding: 8
      }}>

        <View
          {...panResponder.panHandlers}

          style={{
            width: '100%', display: 'flex',
            alignItems: 'center', justifyContent: 'center',
            paddingBottom: 14,
            paddingTop: 6
          }}>
          <View style={{ height: 6, width: 50, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 10 }}></View>

        </View>

        <ScrollView style={{ flex: 1 }} refreshControl={<RefreshControl onRefresh={searchAreaShop.refetch}
          refreshing={loading2[0]} />}  >

          {
            // loading2[0] && <ActivityIndicator style={{ margin: 20, alignSelf: 'center' }} size={'large'} />
          }
          {
            // searchAreaShop.isFetching ? <ActivityIndicator size={'large'} color={config.primaryColor} /> : 
            (searchAreaShop.isSuccess) && (!!shopList?.length ? shopList.map((item, index) => {
              //consolelog(item);
              return (
                <View key={index} style={{ marginTop: index === 0 ? 18 : 0, marginBottom: 18 }}>
                  <Pressable onPress={async () => {
                    await analytics().logEvent('enterShop', {
                      id: item.id,
                      item: item.merchantname,
                    })
                    navigation.navigate("Bussiness.shop", { id: item.id })
                  }

                  } style={{ display: 'flex', flexDirection: 'row', alignItems: "flex-start" }}>
                    <ProductItem />
                  </Pressable>
                </View>)


            }


            ) : <Text style={{ textAlign: 'center', marginTop: 24, fontSize: 18 }}>no stores nearby</Text>)

          }

        </ScrollView>
        <View style={{ height: s_height }}></View>
      </Animated.View>

      <View style={{
        height: Dimensions.get('screen').height * 1, borderTopLeftRadius: 20,
        borderTopRightRadius: 20, display: visible ? 'flex' : 'none', position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', backgroundColor: 'rgba(0,0,0,0.4)', zIndex: 20
      }}>
        <Animated.View style={{
          height: Dimensions.get('screen').height * 1,
          transform: [{ translateY: mscroll }],
          backgroundColor: '#FEFAF7', paddingVertical: 8,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
        }}>

          <View
            {...mpanResponder.panHandlers}

            style={{
              display: 'flex',
              alignItems: 'center', justifyContent: 'center',

              // borderBottomColor: 'rgba(0,0,0,0.1)',
              // borderBottomWidth: 0.2,
              marginHorizontal: 16,
              // paddingBottom: 14,
              paddingTop: 6
            }}>
            <View style={{ height: 6, width: 50, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 10 }}></View>
          </View>
          <View style={{ marginHorizontal: 16, display: 'flex', flexDirection: 'row', marginTop: 12 }}>
            <Pressable onPress={() => setVisible(false)}>
              <Image source={require('../../assets/images/close.png')} style={{ width: 30, height: 30 }} />
            </Pressable>
            <Text style={{ fontSize: 20, fontWeight: '600', flex: 1, textAlign: 'center' }}>Addresses</Text>
            <View style={{ width: 30, height: 30 }}></View>
          </View>
          <View style={{ marginHorizontal: 16, marginTop: 8, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ display: 'flex', flex: 1, alignItems: 'center', flexDirection: 'row', backgroundColor: '#EBEBEB', shadowColor: '#9F9F9F', shadowOffset: { width: 0, height: 2, }, shadowOpacity: 0.25, shadowRadius: 3.84, elevation: 6, paddingHorizontal: 16, paddingVertical: 4, borderRadius: 22 }}>
              <Image source={require("../../assets/images/search.png")} style={{ width: 15, height: 15 }} />
              <TextInput style={{ display: 'flex', flex: 1, marginLeft: 8 }} placeholder="Search for an address" />
            </View>
          </View>
          <Text style={{ marginHorizontal: 16, fontSize: 18, fontWeight: '600', marginTop: 12 }}>Explore nearby</Text>
          <View style={{ marginHorizontal: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
            <Image source={require("../../assets/images/currentPosition.png")} style={{ width: 30, height: 30, marginRight: 12 }} />
            <Text style={{ fontSize: 14, fontWeight: '600' }}>Use current location</Text>
          </View>
          <View style={{ width: '100%', height: 1, backgroundColor: '#939393', marginTop: 12 }}></View>
          <Text style={{ marginHorizontal: 16, fontSize: 18, fontWeight: '600', marginTop: 12 }}>Recent addresses</Text>
          <View style={{ marginHorizontal: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
            <Image source={require("../../assets/images/positionIcon.png")} style={{ width: 30, height: 30, marginRight: 12 }} />
            <Text style={{ fontSize: 14, fontWeight: '600' }}>112 Happiness Subdivision Street</Text>
          </View>
        </Animated.View>
      </View>
      {pvisible&&<View style={{ position: 'absolute', bottom: 10, width: '100%', paddingHorizontal: 8 }}>
        <ProductItem />
      </View>}
    </View>
     <ShopModal visible={ModalVisible} onExit={() => setModalVisible(false)} mess={message} />
    {/*  */}
  </View >)
}


