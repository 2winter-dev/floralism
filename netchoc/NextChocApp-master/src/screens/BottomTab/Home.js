import { useNavigation } from "@react-navigation/native";
import { useEffect, useRef, useState } from "react";
import { Text, View, Image, ScrollView, Dimensions, Pressable, RefreshControl, PanResponder, ActivityIndicator, Platform, TextInput, Animated } from "react-native";
import { AntDesign, FontAwesome, Ionicons, EvilIcons } from "@expo/vector-icons";
import { useCommonActions, useIsIntro, useIsUpdate, useLocal, useToken } from "../../common/store/user";
import useThrottle from "../../common/hooks/useThrottle";
import { registerForPushNotificationsAsync } from "../../../NoticeUtils";
import * as Location from 'expo-location';
import analytics from '@react-native-firebase/analytics';
// import Swiper frrom 'react-native-swiper'
import * as Linking from 'expo-linking'
import * as Splash from 'expo-splash-screen'
import SwiperFlatList from "react-native-swiper-flatlist";
import { useInfiniteQuery, useMutation, useQuery } from "@tanstack/react-query";
import config from "../../common/config";
import HomeApi from '../../api/HomeAPI';
import * as Notifications from 'expo-notifications'
import { API_URL } from "../../common/api/API_URL";
import MapAPI from "../../api/MapAPI";
import CategoryComponent from "../../components/CategoryComponent";
import HomeCard from "../../components/HomeCard";
import DescBanner from "../../components/DescBanner";
import SuperMarket from "../../components/SuperMarket";
import HomeBanner from "../../components/HomeBanner";
import HomeSearchPage from "../../components/HomeSearchPage";
import WrongPage from "../../components/WrongPage";

const { width } = Dimensions.get('window');

export default function Home({ navigation }) {
   const isIntro = useIsIntro();
   const setLocal = useCommonActions().setLocal;
   const navigate = useNavigation();
   const setIsUpdate = useCommonActions().setIsUpdate;
   const isUpdate = useIsUpdate();
   const token = useToken();
   const swiper = useRef();
   const lc = useLocal();
   const [visible, setVisible] = useState(false);
   const scroll = useRef(new Animated.Value(Dimensions.get('screen').height * 0.15)).current
   const [currentPositionPane, setCurrentPositionPane] = useState(Dimensions.get('screen').height * 0.15);
   const range = 80;//滑动范围
   const [s_height, setSHeight] = useState(Dimensions.get('screen').height * 0.59);
   //通知事件监听器
   const [notification, setNotification] = useState(false);
   const notificationListener = useRef();
   const responseListener = useRef();

   const lastNotificationResponse = Notifications.useLastNotificationResponse();
   const defaultPosition = Dimensions.get('screen').height * 0.90;//默认面板高度

   const [isScrollEnd, setIsScrollEnd] = useState(false);
   const [location, setLocation] = useState();
   const [d_location, setD_location] = useState();
   const [page, setPages] = useState(1);


   const [IsSearching, setIsSearching] = useState(false);
   const fetchHomepage = useQuery({
      queryFn: () => HomeApi.fetchHomepage({ token }),
      queryKey: ['fetchHomepage', token],
      onSuccess: (res) => {
         console.log(res);
         //////////console.log("铲车人变形");
      },
      onError: (res) => {
         Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
      },

   })

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

   useEffect(() => {
      //清除状态
      navigation.addListener("blur", () => {
         setIsSearching(false);
         // setNotification(false)
      })
   }, [])
   const fetchPos = useMutation({
      mutationFn: (data) => MapAPI.NLatitude2placeId(data),
      mutationKey: ['fetchPos']
   })
   const uploadLocal = useMutation({
      mutationFn: (data) => HomeApi.uploadLocation(data),
      mutationKey: ['uploadLocal'],
   })
   const fetchShopList = useInfiniteQuery({
      queryFn: ({ pageParam = 1, ...data }) => HomeApi.fetchShopList({ ...data, listRows: 5, page: pageParam, token }),
      queryKey: ['HomefetchShopList', token],
      getNextPageParam: (_d, pages) => {
         return _d.current_page + 1 > _d.last_page ? false : _d.current_page + 1;
      },
      onSuccess: (res) => {
         // //////console.log(res.pages[0].data);
         // setPages(page + 1);
      },
      onError: (res) => {
         Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
      }
   })



   const _onMomentumScrollEnd = ({ nativeEvent }) => {
      const isCloseToBottom =
         nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >
         nativeEvent.contentSize.height - 30;
      if (isCloseToBottom) {
         if (fetchShopList.isFetchingNextPage || !fetchShopList.hasNextPage) return;
         //////////////////console.log("123");
         useThrottle(fetchShopList.fetchNextPage(), 3000)

      }
   }

   const setDevToken = useCommonActions().setDevToken;


   useEffect(() => {

      const fetchPushNotificationToken = async () => {
         let res = await registerForPushNotificationsAsync()
            .catch((er) => {
               console.warn('通知服务注册失败');
               // alert('Test Mode:' + (e instanceof Error) ? e.message : JSON.stringify(e))
               console.warn(er.message)
            })
         if (res) {
            setDevToken(res)
            ////////console.log(res);
            // alert(JSON.stringify(res))
         } else {
            // alert('Test Mode:'+(e instanceof Error )? e.message:JSON.stringify(e))
            console.warn("Push Token get Failed!");
         }
      }

      fetchPushNotificationToken();

      if (isIntro == "open") {
         navigate.navigate("openPage");
      } else {
         Splash.hideAsync();

         if (isUpdate === "0") {
            ////////////console.log("获取地址中");
            fetchPosition();
         }

      }

      fetchShopList.refetch();
   }, [])

   const fetchPosition = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      //console.log(status);
      if (status !== 'granted') {
         setErrorMsg('Permission to access location was denied');
         return;
      }
      console.log("1");
      let pos = await Location.getCurrentPositionAsync({}).catch(e => console.log(e));
      // console.log("2");
      // const lc = await Location.reverseGeocodeAsync({ latitude: pos.coords.latitude, longitude: pos.coords.longitude })
      // setD_location(lc);
      // console.log("獲取地址成功");
      // console.log(lc)

      // setLocal({ ...lc[0], ...pos });
      // setIsUpdate("1");
      // if (!token) {
      //    //////////console.log('token 不存在！')
      //    //  return;
      // }
      // token && uploadLocal.mutate({ lng: pos.coords.longitude, lat: pos.coords.latitude, location: lc[0]?.name ?? "", token }, {
      //    onSuccess: (res) => {
      //       //////////////////console.log(res);
      //       ////////////console.log("上传成功")
      //    },
      //    onError: (res) => {

      //    }
      // })
      fetchPos.mutate({ lng: pos.coords.longitude, lat: pos.coords.latitude }, {
         onSuccess: (res) => {
            console.log("-11-")
            ////console.log(res.addressComponent);
            console.log(res);
            setLocal({ ...pos, name: res?.formatted_address_short && res?.formatted_address_short !== "" ? res.formatted_address_short : "Unknow Area" })
            // navigation.canGoBack && navigation.goBack();
            //////console.log(res);
            token && uploadLocal.mutate({ lng: pos.coords.longitude, lat: pos.coords.latitude, location: res?.formatted_address_short, token }, {
               onSuccess: (res) => {
                  ////////////////console.log(res);
                  ////////console.log("上传成功")
               },
               onError: (res) => {

               }
            })
         },
         onError: (res) => {
            ////console.log(res)
            Toast.show(res instanceof Error ? res.msg : JSON.stringify(res));
         }
      });
      // //////////console.log(lc[0]);


   }

   //banner跳转
   const bannerTarget = (type, url) => {

      console.log(type, url)
      if (type === 1) return;
      if (type === 2) navigate.navigate('Account.WebPage', { type: "NextChoc", url });
      if (type === 3) Linking.openURL("nextchoc://" + url)

   }


   useEffect(() => {



      if (lastNotificationResponse) {

         //////////console.log('通知res:')
         //////////console.log(lastNotificationResponse.notification.request);
         const noticeReq = lastNotificationResponse;
         if (
            noticeReq &&
            // noticeReq.notification.request.content.data &&
            noticeReq.actionIdentifier === Notifications.DEFAULT_ACTION_IDENTIFIER
         ) {

            const noticeRes = noticeReq.notification.request.content.data;
            //console.log(noticeRes)
            if (!noticeReq) return;
            if (noticeRes.type == "2") {
               //打开内置webview

               navigate.navigate("Account.WebPage", { type: noticeReq.notification.request.content.title, url: noticeRes.url })
            }

            if (noticeRes.type == "1") {
               ////console.log("2222");
               //内部链接,前往订单页面
               console.log(noticeRes);
               if (noticeRes.url === 'order') {
                  Linking.openURL('nextchoc://Order')
               } else {
                  Linking.openURL('nextchoc://' + noticeRes.url)
               }


            }


         }
      }



   }, [lastNotificationResponse]);




   //刷新首页数据
   const updatePageData = () => {
      fetchHomepage.refetch();

      fetchShopList.refetch();
      fetchPosition();
   }




   // if(fetchHomepage.isFetching){
   //    return <ActivityIndicator size={"large"} style={{marginTop:24}} color={config.primaryColor} />
   // }
   if (fetchHomepage.isError) {
      return (<><Text style={{ marginTop: 24, textAlign: 'center', fontSize: 18, color: 'rgba(0,0,0,0.4)' }}>{
         fetchHomepage.error.message
      }</Text><Pressable style={{ marginTop: 12 }} onPress={updatePageData}><Text style={{ textAlign: 'center', textDecorationLine: 'underline', fontSize: 16, fontWeight: 500, color: config.primaryColor }}>Reload</Text></Pressable></>)
   }

   return (
      // <SafeAreaView>
      <View>
         {!IsSearching && <View style={{ position: 'relative' }}><ScrollView style={{ backgroundColor: config.backgroundColor_1, position: 'relative' }} refreshControl={<RefreshControl refreshing={fetchHomepage.isFetching} onRefresh={updatePageData} />} onMomentumScrollEnd={_onMomentumScrollEnd} >
            <View style={{ marginTop: Dimensions.get("window").height * 0.04 }}>
               {
                  fetchHomepage.isSuccess && <>
                     <View style={{ marginTop: 14 }}>
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
                           <Pressable onPress={() => navigation.navigate("Notices")} style={{ width: 60, height: 60, borderRadius: 12, display: 'flex', justifyContent: 'center' }}>
                              <EvilIcons name="bell" size={36} color="black" />
                           </Pressable>
                        </View>

                        {/**
             * 搜索栏
             */}
                        {
                           <View style={{ marginHorizontal: 16, display: 'flex', alignItems: 'center', flexDirection: 'row', backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 12, borderWidth: 1, borderColor: '#fff', borderRadius: 22, marginTop: 16 }}>
                              <Image source={require("../../assets/images/search.png")} style={{ width: 15, height: 15 }} />
                              <Pressable onPress={() => setIsSearching(true)} style={{ display: 'flex', flex: 1, marginLeft: 8 }}>
                                 <Text style={{ color: 'rgba(0,0,0,0.4)' }}>Search Good2save</Text>
                              </Pressable>
                           </View>
                        }
                        {/**
             * 分类
             */}
                        {fetchHomepage.isSuccess && <View>
                           {
                              <CategoryComponent data={[{
                                 title: "Baking",
                                 src: "../../assets/images/Baking.png"
                              }, {
                                 title: "Meals",
                                 src: "../../assets/images/Meals.png"
                              }, {
                                 title: "Drinks",
                                 src: "../../assets/images/Drinks.png"
                              }, {
                                 title: "Groceries",
                                 src: "../../assets/images/Groceries.png"
                              }, {
                                 title: "Pet food",
                                 src: "../assets/images/petFood.png"
                              }, {
                                 title: "Baking",
                                 src: "../../assets/images/Baking.png"
                              }, {
                                 title: "Baking",
                                 src: "../../assets/images/Baking.png"
                              }]} ></CategoryComponent>
                           }

                           {
                              (token && fetchHomepage.data.pending_order) && <View style={{ marginHorizontal: 16, display: 'flex', flexDirection: 'row', flex: 1, backgroundColor: config.text_color_2, borderRadius: 20, paddingHorizontal: 16, paddingVertical: 18 }}>
                                 <View style={{ width: 60, height: 60, marginRight: 16 }}>
                                    <Image source={require("../../assets/images/packageIcon.png")} style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                 </View>
                                 <View>
                                    <Text numberOfLines={1} style={{ fontSize: 14, color: 'white' }}>Hello Kitchen The Glen</Text>
                                    <Text numberOfLines={1} style={{ fontSize: 16, color: 'white', marginTop: 12, fontWeight: '500' }}>Collect today at 20:00-90:00</Text>
                                 </View>
                              </View>
                           }
                           <View style={{ marginTop: 24 }}>
                              <View style={{ paddingHorizontal: 16, width: '100%', display: 'flex', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                 <Text style={{ fontSize: 18, fontWeight: "bold" }}>Recommended for you</Text>
                                 <Pressable onPress={() => navigate.navigate("SearchPage", { key: "Recommended for you" })}>
                                    <Text style={{ fontSize: 12, color: 'rgb(59,84,86)' }}>See more</Text>
                                 </Pressable>
                              </View>
                              <ScrollView horizontal={true}>
                                 {

                                    fetchHomepage.data.related_merchant.map((item, index) => {
                                       // //////console.log(item);
                                       return (
                                          <HomeCard shop={item} key={index} />
                                       )
                                    })}
                              </ScrollView>
                           </View>



                           <View style={{ marginTop: 24, marginBottom: 12 }}>
                              <View style={{ paddingHorizontal: 16, width: '100%', display: 'flex', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                 <Text style={{ fontSize: 18, fontWeight: "bold" }}>Nearby</Text>
                                 <Pressable onPress={() => navigate.navigate("SearchPage", { key: "Nearby" })}>
                                    <Text style={{ fontSize: 16, color: 'rgb(59,84,86)' }}>See More</Text>
                                 </Pressable>
                              </View>
                              <ScrollView horizontal={true}>
                                 {
                                    fetchHomepage.data.near_by_merchant.map((item, index) => {
                                       // //////console.log(item);
                                       return (
                                          <HomeCard shop={item} key={index} />
                                       )
                                    })}
                              </ScrollView>
                           </View>
                        </View>}
                     </View>

                     {fetchHomepage.isSuccess ? <View>
                        <View style={{ marginHorizontal: 16, marginVertical: 16 }}>
                           <DescBanner />
                        </View>

                        <View style={{ marginTop: 24, marginBottom: 12, marginHorizontal: 16 }}>
                           <View style={{ width: '100%', display: 'flex', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Supermarket</Text>
                              <Pressable onPress={() => navigate.navigate("SearchPage", { key: "Supermarket" })}>
                                 <Text style={{ fontSize: 16, color: 'rgb(59,84,86)' }}>See More</Text>
                              </Pressable>
                           </View>
                           <ScrollView horizontal={true}>
                              {
                                 fetchHomepage.data.near_by_merchant.map((item, index) => {
                                    // //////console.log(item);
                                    return (
                                       <SuperMarket key={index} />
                                    )
                                 })}
                           </ScrollView>
                        </View>

                        <View style={{ marginTop: 24, marginBottom: 12 }}>
                           <View style={{ paddingHorizontal: 16, width: '100%', display: 'flex', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                              <Text style={{ fontSize: 18, fontWeight: "bold" }}>For Lunch</Text>
                              <Pressable onPress={() => navigate.navigate("SearchPage", { key: "Nearby" })}>
                                 <Text style={{ fontSize: 16, color: 'rgb(59,84,86)' }}>See More</Text>
                              </Pressable>
                           </View>
                           <ScrollView horizontal={true}>
                              {
                                 fetchHomepage.data.near_by_merchant.map((item, index) => {
                                    // //////console.log(item);
                                    return (
                                       <HomeCard shop={item} key={index} />
                                    )
                                 })}
                           </ScrollView>
                        </View>

                        <View style={{ marginHorizontal: 16, marginVertical: 16, display: 'flex', flex: 1 }}>
                           <HomeBanner />
                        </View>

                        <View style={{ marginTop: 24, marginBottom: 12 }}>
                           <View style={{ paddingHorizontal: 16, width: '100%', display: 'flex', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                              <Text style={{ fontSize: 18, fontWeight: "bold" }}>For dinner</Text>
                              <Pressable onPress={() => navigate.navigate("SearchPage", { key: "Nearby" })}>
                                 <Text style={{ fontSize: 16, color: 'rgb(59,84,86)' }}>See More</Text>
                              </Pressable>
                           </View>
                           <ScrollView horizontal={true}>
                              {
                                 fetchHomepage.data.near_by_merchant.map((item, index) => {
                                    // //////console.log(item);
                                    return (
                                       <HomeCard shop={item} key={index} />
                                    )
                                 })}
                           </ScrollView>
                        </View>

                        <View style={{ marginTop: 24, marginBottom: 12 }}>
                           <View style={{ paddingHorizontal: 16, width: '100%', display: 'flex', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                              <Text style={{ fontSize: 18, fontWeight: "bold" }}>Your favourite</Text>
                              <Pressable onPress={() => navigate.navigate("SearchPage", { key: "Favorite" })}>
                                 <Text style={{ fontSize: 16, color: 'rgb(59,84,86)' }}>See More</Text>
                              </Pressable>
                           </View>
                           <ScrollView horizontal={true}>
                              {
                                 fetchHomepage.data.near_by_merchant.map((item, index) => {
                                    // //////console.log(item);
                                    return (
                                       <HomeCard shop={item} key={index} />
                                    )
                                 })}
                           </ScrollView>
                        </View>


                        <View style={{ marginHorizontal: 16, marginVertical: 16, display: 'flex', flex: 1 }}>
                           <HomeBanner right />
                        </View>


                        <View style={{ height: 12, backgroundColor: 'rgba(0,0,0,0.05)', width: '100%' }}></View>
                     </View> : <WrongPage type={'wlan'} />}
                  </>
               }
            </View>

         </ScrollView >
            <View style={{
               height: Dimensions.get('screen').height * 1, borderTopLeftRadius: 20,
               borderTopRightRadius: 20, display: visible ? 'flex' : 'none', position: 'absolute', bottom: 0, left: 0, right: 0, width: '100%', backgroundColor: 'rgba(0,0,0,0.4)'
            }}>
               <Animated.View style={{
                  height: Dimensions.get('screen').height * 1,
                  transform: [{ translateY: scroll }],
                  backgroundColor: '#FEFAF7', paddingVertical: 8,
                  borderTopLeftRadius: 20,
                  borderTopRightRadius: 20,
               }}>

                  <View
                     {...panResponder.panHandlers}

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
                     <Text style={{ fontSize: 18, fontWeight: '600', flex: 1, textAlign: 'center' }}>Addresses</Text>
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
         </View>}
         {
            IsSearching && <ScrollView style={{ backgroundColor: config.backgroundColor_1, paddingHorizontal: 16 }}>
               <View style={{ marginTop: Dimensions.get("window").height * 0.04, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                  <Ionicons onPress={() => setIsSearching(false)} name="chevron-back" size={24} color="black" />
                  <View style={{ display: 'flex', flex: 1, alignItems: 'center', flexDirection: 'row', backgroundColor: 'white', borderColor: 'white', paddingHorizontal: 16, paddingVertical: 4, borderWidth: 1, borderColor: '#fff', borderRadius: 22 }}>
                     <Image source={require("../../assets/images/search.png")} style={{ width: 15, height: 15 }} />
                     <TextInput style={{ display: 'flex', flex: 1, marginLeft: 8, }} placeholder="Search Good2save" />
                  </View>
               </View>
               <HomeSearchPage />
            </ScrollView>
         }




      </View>
      // </SafeAreaView>
   )
}