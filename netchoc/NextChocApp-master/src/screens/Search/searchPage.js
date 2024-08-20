import { Image, Pressable, Text, TextInput, ScrollView, View, RefreshControl, ActivityIndicator, Platform, Dimensions } from "react-native"
import { useNavigation } from "@react-navigation/native";
import MapView from 'react-native-maps'
import { useEffect, useRef, useState } from "react";
import { AntDesign, Octicons, Ionicons, EvilIcons } from "@expo/vector-icons";
import config from "../../common/config";
import useThrottle from "../../common/hooks/useThrottle";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import ShopAPI from "../../api/ShopAPI";
import * as Linking from 'expo-linking'
import HomeAPI from "../../api/HomeAPI";
import SwiperFlatList from "react-native-swiper-flatlist";
import { useToken } from "../../common/store/user";
import analytics from '@react-native-firebase/analytics';
const type = {
    "Last Minute": "last_minutes",
    "Most popular": "most_popular",
    "Best": "best",
    "Lunch": "lunch",
    "Supermarket": "super_marker",
    "Favorite": "favorite",
    "Recommended for you": "recommended_for_your",
    "Nearby": "near_by",
}
export default function SearchPage({ route }) {
    // let navigation = useNavigation();
    ////////////////console.log(route);
    const token = useToken();
    const [banner, setBanner] = useState(null);
    const [page, setPages] = useState(0);
    const loading = useState(true);
    const navigation = useNavigation();
    const [key, setKey] = useState(route.params.key);
    const [bannerData, setBannerData] = useState();
    const [keywords, setKeywords] = useState("");
    const [last_page, setLast_page] = useState(0);
    const swiper = useRef(null);
    const width = Dimensions.get("window").width;

    const fetchShopList = useInfiniteQuery({
        queryFn: ({ pageParam = 1 }) => HomeAPI.fetchShopList({ sort_type: type[key], keywords, listRows: 5, page: pageParam, token }),
        queryKey: ['fetchShopList', type[key], keywords],
        getNextPageParam: (_d, pages) => {
            return _d.current_page + 1 > _d.last_page ? false : _d.current_page + 1;
        },
        onSuccess: (res) => {
            //////////console.log("===");
            loading[1](false);
            // ////console.log(res.pages[0].last_page);
            setLast_page(res.pages[0].last_page)
            console.log("=====");
            // console.log(res);
            // console.log(res.pages);
            for (let i = 0; i < res.pages.length; i++) {
                console.log(res.pages[i]);
            }
            // setBanner(res.pages[0].banner)
            setBannerData(res.pages[0]?.bannerList)
            setPages(res.pages[0].current_page);
            // setBannerData([{cover_image:"https://app.nextchoc.com.au/uploads/20231121/b4880252444eb73e7436fc13c586b81d.gif"},{cover_image:"https://app.nextchoc.com.au/uploads/20231121/6348713d2a471ae47e6636ce835c921f.png"}])
        },
        onError: (res) => {
            loading[1](false);
            Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
        }
    })
    const urlScheme = () => {
        // const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' });
        // const latLng = `${lat},${lng}`;
        // const label = 'Custom Label';
        // const url = Platform.select({
        //     ios: `${scheme}${label}@${latLng}`,
        //     android: `${scheme}${latLng}(${label})`
        //   });

        //   Linking.openURL(url)
    }



    const _onMomentumScrollEnd = ({ nativeEvent }) => {
        const isCloseToBottom =
            nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >
            nativeEvent.contentSize.height - 30;
        ////////////////console.log(1);
        if (isCloseToBottom) {
            // if (fetchshoplist.hasNextPage) {
            //    useThrottle(fetchshoplist.fetchNextPage().catch, 1000);
            // }
            ////console.log(fetchShopList.hasNextPage);
            ////////////////console.log("到底部");
            if (fetchShopList.isFetchingNextPage || !fetchShopList.hasNextPage || page === last_page) return;
            useThrottle(fetchShopList.fetchNextPage(), 3000);
            // setPages(page+1);
        }
    }


    //banner跳转
    const bannerTarget = (type, url) => {


        // console.log(bannerData)
        // const type = bannerData.type;
        // const url = bannerData.content;
        //////////console.log(type, url)
        if (type === 1) return;
        if (type === 2) navigation.navigate('Account.WebPage', { type: "NextChoc", url });
        if (type === 3) Linking.openURL("nextchoc://" + url)

    }

    useEffect(() => {
        return () => {
            fetchShopList.remove();
        }
    }, [])
    //    merchant_id
    const collect = useMutation({
        mutationFn: () => ShopAPI.collectShop({ token, ...data }),
        mutationKey: ['collect'],
    })
    const uncollect = useMutation({
        mutationFn: (data) => ShopAPI.uncollectShop({ token, ...data }),
        mutationKey: ['uncollect'],
    })

    useEffect(() => {

        loading[1](true)

    }, [keywords])


    return (
        <View style={{ marginTop: 50, display: 'flex', flex: 1 }}>
            <View style={{ display: 'flex', paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center' }}>
                <Pressable onPress={() => { navigation.goBack() }} style={{ marginRight: 12 }}>
                    <Ionicons name="arrow-back" size={24} color="black" />
                </Pressable>
                <Text style={{ fontSize: 20, fontWeight: '500' }}>{key}</Text>
            </View>
            <View style={{ marginHorizontal: 16, display: 'flex', paddingHorizontal: 16, alignItems: 'center', borderRadius: 24, backgroundColor: 'rgba(0,0,0,0.1)', flexDirection: 'row', marginTop: 18 }}>
                <AntDesign name="search1" style={{ marginLeft: 16 }} size={24} color="rgba(0,0,0,0.4)" />
                <TextInput onEndEditing={() => {

                }} onChangeText={(e) => {
                    setKeywords(e);
                }} value={keywords} style={{ paddingHorizontal: 16, flex: 1, fontSize: 16, paddingVertical: 12 }} />

            </View>
            {/* {bannerData && <Pressable onPress={bannerTarget} style={{ width: '100%', marginTop: 10 }}>
                <Image source={{ uri: `${bannerData.cover_image}` }} style={{ width: '100%', borderRadius: 10, height: 120 }} resizeMode="cover" />
            </Pressable>} */}
            {/* {
                    bannerData && !!bannerData?.length && <View style={{ backgroundColor: 'white', position: 'relative', marginBottom: 12 }}>
                        <SwiperFlatList
                            showPagination
                            autoplayLoopKeepAnimation={Platform.OS === "ios" ? false : true}
                            autoplayLoop
                            ref={swiper}

                            autoplayDelay={3}
                            paginationDefaultColor={"white"}
                            paginationActiveColor="rgb(17,77,77)"
                            autoplay
                            index={0}
                        >
                            {
                                bannerData.map((item, index) =>
                                (<View key={index} style={{ display: 'flex', flexDirection: 'row', height: 140, alignItems: 'center' }}>
                                    <View style={{ width: 16, height: '100%', backgroundColor: 'white' }}></View>
                                    <Pressable onPress={() => bannerTarget(item.type, item.content)} style={[{ flex: 1, display: 'flex' }]}>
                                        <Image source={{ uri: item.cover_image }}
                                            onLoadEnd={(e) => {

                                            }}
                                            onError={(e) => {
                                            }}
                                            style={{ width: width - 32, backgroundColor: 'gray', flex: 1, borderRadius: 12, borderWidth: 0.3, borderColor: 'rgba(0,0,0,0.3)' }} resizeMode="cover" />
                                    </Pressable>
                                    <View style={{ width: 16, height: '100%', backgroundColor: 'white' }}></View>
                                </View>))
                            }
                        </SwiperFlatList>
                    </View>
                } */}
            <ScrollView refreshControl={<RefreshControl onRefresh={() => {
                fetchShopList.refetch();
                loading[1](true);
            }} refreshing={loading[0]} />} style={{ flex: 1, marginTop: 18 }} onMomentumScrollEnd={_onMomentumScrollEnd} >
                {
                    bannerData && !!bannerData?.length && <View style={{ width: Dimensions.get("screen").width, height: (Dimensions.get("screen").width) * 1 / 3, position: 'relative', marginBottom: 12, position: 'relative', marginBottom: 12 }}>
                        <SwiperFlatList
                            showPagination
                            autoplayLoopKeepAnimation={Platform.OS === "ios" ? false : true}
                            autoplayLoop
                            ref={swiper}

                            autoplayDelay={3}
                            paginationDefaultColor={"white"}
                            paginationActiveColor="rgb(17,77,77)"
                            autoplay
                            index={0}
                        >
                            {
                                bannerData.map((item, index) =>
                                (<View key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ width: 16, height: '100%', backgroundColor: 'white' }}></View>
                                    <Pressable onPress={() => bannerTarget(item.type, item.content)} style={[{ flex: 1, display: 'flex' }]}>
                                        <Image source={{ uri: item.cover_image }}
                                            onLoadEnd={(e) => {

                                            }}
                                            onError={(e) => {
                                            }}
                                            style={{ width: width - 32, backgroundColor: 'gray', flex: 1, borderRadius: 12, borderWidth: 0.3, borderColor: 'rgba(0,0,0,0.3)' }}
                                            resizeMode={"cover"} />
                                    </Pressable>
                                    <View style={{ width: 16, height: '100%', backgroundColor: 'white' }}></View>
                                </View>))
                            }
                        </SwiperFlatList>
                    </View>
                }
                {/* {

                    bannerData && !!bannerData?.length && <View style={{ backgroundColor: 'white', width: Dimensions.get("screen").width - 32, height: (Dimensions.get("screen").width - 32) * 1 / 3, position: 'relative', marginBottom: 12,backgroundColor:'black' }}>
                        <SwiperFlatList
                            showPagination
                            autoplayLoopKeepAnimation={Platform.OS === "ios" ? false : true}
                            autoplayLoop
                            ref={swiper}
                            autoplayDelay={3}
                            style={{flex:1}}
                            paginationDefaultColor={"white"}
                            paginationActiveColor="rgb(17,77,77)"
                            autoplay
                            index={0}
                        >
                            {
                                bannerData.map((item, index) =>
                                (<View key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ width: 16, height: '100%', backgroundColor: 'red' }}></View>
                                    <Pressable onPress={() => bannerTarget(item.type, item.content)} style={[{ flex: 1, display: 'flex' }]}>
                                        <Image source={{ uri: item.cover_image }}
                                            onLoadEnd={(e) => {

                                            }}
                                            onError={(e) => {
                                            }}
                                            style={{ width:  Dimensions.get("screen").width  - 32, backgroundColor: 'gray', flex: 1, borderRadius: 12, borderWidth: 0.3, borderColor: 'rgba(0,0,0,0.3)' }}
                                            resizeMode="contain" />
                                    </Pressable>
                                    <View style={{ width: 16, height: '100%', backgroundColor: 'green' }}></View>
                                </View>))
                            }
                        </SwiperFlatList>
                    </View>
                } */}
                <View style={{ paddingHorizontal: 16, marginTop: 18, marginBottom: 48 }}>
                    {
                        fetchShopList.isSuccess && fetchShopList.data.pages.map((item, index) => (
                            item.data.map((it, idx) => {
                                return (
                                    <View key={idx} style={{ marginBottom: 18 }}>
                                        <Pressable onPress={async () => {
                                            await analytics().logEvent('enterShop', {
                                                id: item.id,
                                                item: item.merchantname,
                                            })
                                            navigation.navigate("Bussiness.shop", { id: it.merchant_id })
                                        }
                                        } style={{ display: 'flex', flexDirection: 'row', alignItems: "flex-start", justifyContent: 'center' }}>
                                            <View style={{ position: 'relative' }}>
                                                <Image source={{ uri: it.logo_format }} style={{ width: 130, height: 130, borderRadius: 12, borderWidth: 0.3, borderColor: 'rgba(0,0,0,0.3)' }} resizeMode="cover" />

                                            </View>

                                            <View style={{ flex: 1, marginLeft: 8, display: 'flex', alignItems: 'flex-start' }}>
                                                <View style={{ display: 'flex', flexDirection: 'row', marginLeft: 3, alignItems: 'flex-start' }}>
                                                    {
                                                        it.score !== 0 && <View style={{ display: 'flex', flexDirection: 'row', marginRight: 8, alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 8, paddingVertical: 4, backgroundColor: config.primaryColor, borderRadius: 8 }}>
                                                            <AntDesign name="star" size={18} color="rgb(240,185,55)" style={{ marginRight: 4 }} />
                                                            <Text style={{ fontSize: 16, color: 'white' }}>{it.score}</Text>
                                                        </View>
                                                    }
                                                    <Text numberOfLines={2} style={{ fontSize: 18, flex: 1 }}>{it.merchant_name}</Text>
                                                    {it.is_favorite ? <View style={{ marginLeft: 'auto', width: 60, marginTop: 4, display: 'flex', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 6, paddingVertical: 2, backgroundColor: '#F5C52B', borderRadius: 24, justifyContent: 'center' }}><AntDesign name="star" size={14} color={'white'} style={{ marginRight: 2 }} />
                                                        <Text style={{ color: '#fff', fontSize: 12 }}>Liked</Text></View> : null}
                                                </View>
                                                <Text numberOfLines={2} style={{ color: 'rgba(0,0,0,0.2)', marginTop: 4, marginLeft: 4, marginBottom: 12 }}>{it.merchant_address}</Text>
                                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                    {token && <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: 8, marginLeft: 1 }}>
                                                        {/* <Octicons style={{ marginRight: 4 }} name="dot-fill" size={12} color="black" /> */}
                                                        <EvilIcons name="location" size={18} color="gray" />
                                                        <Text style={{ color: 'gray', fontSize: 13 }}>{it.distance}</Text>
                                                    </View>}
                                                    {!it.business_hours2 && <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                        {/* <Octicons style={{ marginRight: 4 }} name="dot-fill" size={12} color="black" />*/}
                                                        <AntDesign style={{ marginRight: 4 }} name="clockcircleo" size={14} color='gray' />
                                                        <Text style={{ color: 'gray', fontSize: 13 }}>{it.business_hours}</Text>
                                                    </View>}
                                                    {/* {!item?.businesshours2&&<View style={{flexDirection:'row',alignItems:'center'}}>
                                                <AntDesign style={{ marginRight: 4 }} name="clockcircleo" size={14} color='rgba(0,0,0,0.5)' />
                                                <View>
                                                   <Text >{item.businesshours}</Text>
                                                </View>
                                             </View>} */}
                                                </View>
                                                {
                                                    !!it?.business_hours2 &&
                                                    <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                                                        <AntDesign style={{ marginRight: 4, marginLeft: 4 }} name="clockcircleo" size={12} color='gray' />
                                                        <Text style={{ color: 'gray', fontSize: 13 }}>{it.business_hours}{" & " + it.business_hours2}</Text>
                                                    </View>
                                                }



                                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                                    {
                                                        it?.category_name !== "" && <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', marginRight: 8 }}>
                                                            <Pressable style={{ borderRadius: 4, paddingVertical: 4, backgroundColor: 'rgb(252,249,236)', paddingHorizontal: 12 }}><Text style={{ color: 'rgb(207,150,128)' }}>{it.category_name}</Text></Pressable>
                                                        </View>
                                                    }
                                                    {
                                                        it?.tag !== "" && <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                                                            <Pressable style={{ borderRadius: 4, paddingVertical: 4, backgroundColor: 'rgb(252,249,236)', paddingHorizontal: 12 }}><Text style={{ color: 'rgb(207,150,128)' }}>{it.tag}</Text></Pressable>
                                                        </View>
                                                    }
                                                </View>
                                            </View>

                                        </Pressable>
                                        {/* <View style={{
                                        position: 'absolute', right: 8, top: -8, width: 50, height: 50, borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center'
                                    }}>
                                        {it.is_favorite ? <Pressable onPress={() => {
                                            uncollect.mutate({ merchant_id: it.merchant_id }, {
                                                onSuccess: (res) => {
                                                    Toast.show("Collection successful")
                                                }
                                            })
                                        }}><AntDesign color={config.primaryColor} name="heart" size={24} /></Pressable> :
                                            <Pressable onPress={() => {
                                                collect.mutate({ merchant_id: it.merchant_id }, {
                                                    onSuccess: (res) => {
                                                        Toast.show("Collection successful")
                                                    }
                                                })
                                            }}><AntDesign name="hearto" size={24} color={config.primaryColor} /></Pressable>}
                                    </View> */}
                                    </View>)
                            })
                            // co?nsole.log(item)
                        )


                        )}
                </View>
                {
                    fetchShopList.isFetchingNextPage && <ActivityIndicator size={'small'} color={config.primaryColor} />
                }
            </ScrollView>
        </View>)
}
