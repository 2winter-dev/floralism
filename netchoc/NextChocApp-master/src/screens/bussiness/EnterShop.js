import { View, Image, Dimensions, Pressable, Text, Animated, ScrollView } from "react-native";
import GoogleMapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import config from "../../common/config";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { useQuery } from "@tanstack/react-query";
import { useToken } from "../../common/store/user";
import { useState, useRef } from "react";
import ShopAPI from "../../api/ShopAPI";
import { useNavigation } from "@react-navigation/native";
import HomeCard from "../../components/HomeCard";
export default function Shops({ route }) {
    const token = useToken();
    const [favor, setFavor] = useState(false);
    const navigation = useNavigation();
    const scroll = useRef(new Animated.Value(0)).current;
    const [index, setIndex] = useState(0);
    const fetchShopDetail = useQuery({
        queryFn: () => ShopAPI.fetchShopDetail({ merchant_id: route.params?.id, token }),
        queryKey: ['fetchShopDetail', route.params?.id],
        _onSuccess: (res) => {
            console.log("------");
            console.log(res);
            ////console.log(res?.merchant?.business_hours)
            // setIs_subscribe(!!res.merchant.is_subscribe);
            // setPos({ latitude: res.merchant.lat, longitude: res.merchant.lng });
            // setContent(<View style={{ marginBottom: 48, marginTop: 0, padding: 16 }}>
            //     <Text style={{ width: '100%', textAlign: 'center', fontSize: 24, color: 'rgb(17,77,77)', paddingTop: 24 }}>Allergy warning</Text>
            //     <Text style={{ paddingHorizontal: 12, fontSize: 16, marginTop: 12 }}>{res.merchant.allergy_info}</Text>
            //     {/* <Text style={{ paddingHorizontal: 12, fontSize: 16, marginTop: 12 }}>i am a very very very very very very  very very  very very  very very  very very very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very i am a very very very very very very  very very  very very  very very  very very very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very i am a very very very very very very  very very  very very  very very  very very very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very</Text> */}
            // </View>);
            setFavor(res.merchant.is_favorite);
            let arr = [];
            // res?.categories[0]?.goods.map((item, index) => {
            //     arr.push({ ...item, count: 0 });
            // });
            // //////////////console.log(arr);
            // setGoodsNumber(arr);
        },
        get onSuccess() {
            return this._onSuccess;
        },
        set onSuccess(value) {
            this._onSuccess = value;
        },
        onError: (res) => {
            Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
        }
    })

    const changeIndex = (index) => {
        Animated.timing(scroll, {
            toValue: index === 0 ? 0 : index === 1 ? (Dimensions.get("screen").width - 32) / 3 : (Dimensions.get("screen").width - 32) * 2 / 3 + 10,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setIndex(index);
    }

    return (<ScrollView style={{ display: 'flex', flex: 1, backgroundColor: 'rgb(254,250,247)' }}>
        <View style={{ height: Dimensions.get("screen").height * 0.3, position: 'relative' }}>
            <View style={{ position: 'absolute', top: Dimensions.get("screen").height * 0.04, zIndex: 999, left: 10, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <Pressable onPress={() => navigation.goBack()} >
                    <Ionicons name="chevron-back" size={24} color="black" />
                </Pressable>
                <Text style={{ display: 'flex', flex: 1, textAlign: 'center' }}>{fetchShopDetail.data.merchant.merchant_name ?? "empty"}</Text>
                <View style={{ width: 40, height: 40 }}></View>
            </View>

            <GoogleMapView
                // loadingEnabled={loading[0]}
                initialCamera={{
                    zoom: 3.3, center: { latitude: parseFloat(fetchShopDetail.data.merchant.lat), longitude: parseFloat(fetchShopDetail.data.merchant.lng) }, heading: 1, pitch: 1
                }}
                scrollEnabled={false}
                showsScale={false}
                // onMapLoaded={() => resetPosition(customerPoi[0])}
                provider={PROVIDER_GOOGLE}
                // showsCompass={true}
                zoomControlEnabled={true}
                zoomEnabled={true}
                showsUserLocation={true}
                showsMyLocationButton={true}
                mapType={"standard"}
                zoomTapEnabled={false}
                style={{ flex: 1, width: '100%', marginBottom: 26.2, backgroundColor: 'red' }}
            >
                <Marker
                    pinColor={'blue'}
                    coordinate={{
                        latitude: parseFloat(fetchShopDetail.data.merchant.lat),
                        longitude: parseFloat(fetchShopDetail.data.merchant.lng),
                    }}>

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
                        <Image source={require('../../assets/images/icon.png')} style={{ width: 20, height: 20, borderRadius: 50 }} />
                    </View>
                </Marker>
            </GoogleMapView>
        </View>
        <View style={{ margin: 16, display: 'flex', backgroundColor: 'white', padding: 16, borderRadius: 20 }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: 40, height: 40, backgroundColor: '#EEEEEE', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 20, height: 20 }} source={require("../../assets/images/G2.png")} />
                </View>
                <Text numberOfLines={1} style={{ display: 'flex', flex: 1, marginLeft: 8, fontSize: 16, fontWeight: '500' }}>{fetchShopDetail.data.merchant.merchant_address}</Text>
                <Pressable>
                    <Image style={{ width: 20, height: 20 }} source={require('../../assets/images/share.png')} />
                </Pressable>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
                <View style={{ width: 40, height: 40, backgroundColor: '#EEEEEE', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 20, height: 20 }} source={require("../../assets/images/G3.png")} />
                </View>
                <Text numberOfLines={1} style={{ display: 'flex', flex: 1, marginLeft: 8, fontSize: 16, fontWeight: '500' }}>{fetchShopDetail.data.merchant?.phone ?? "13202760309"}</Text>
                <Pressable>
                    <Image style={{ width: 20, height: 20 }} source={require('../../assets/images/share.png')} />
                </Pressable>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
                <View style={{ width: 40, height: 40, backgroundColor: '#EEEEEE', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 20, height: 20 }} source={require("../../assets/images/G1.png")} />
                </View>
                <Text numberOfLines={1} style={{ display: 'flex', flex: 1, marginLeft: 8, fontSize: 16, fontWeight: '500' }}>{fetchShopDetail.data.merchant?.website ?? "www.baidu.com"}</Text>
                <Pressable>
                    <Image style={{ width: 20, height: 20 }} source={require('../../assets/images/share.png')} />
                </Pressable>
            </View>
        </View>

        <View style={{ marginHorizontal: 16, position: 'relative', backgroundColor: '#E2E9E6', paddingHorizontal: 16, paddingVertical: 16, borderRadius: 40, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
            <Pressable style={{ flex: 1, display: 'flex', textAlign: 'center', fontSize: 18, fontWeight: '500' }} onPress={() => changeIndex(0)}>
                <Text style={{ textAlign: 'center' }}>All Products</Text>
            </Pressable>
            <Pressable style={{ flex: 1, display: 'flex', textAlign: 'center', fontSize: 18, fontWeight: '500' }} onPress={() => changeIndex(1)}>
                <Text style={{ textAlign: 'center' }}>All Reviews</Text>
            </Pressable>
            <Pressable style={{ flex: 1, display: 'flex', textAlign: 'center', fontSize: 18, fontWeight: '500' }} onPress={() => changeIndex(2)}>
                <Text style={{ textAlign: 'center' }}>About</Text>
            </Pressable>
            <Animated.View style={{ position: 'absolute', transform: [{ translateX: scroll }], top: 0, bottom: 0, backgroundColor: '#25745B', width: '33%', borderRadius: 40, zIndex: 0 }}>
                <Text style={[{ flex: 1, display: 'flex', textAlign: 'center', lineHeight: 52, fontSize: 18, fontWeight: '500', color: 'white' }]}>{index === 0 ? "All Products" : index === 1 ? "All Reviews" : "About"}</Text>
            </Animated.View>
        </View>
        {index === 0 && (fetchShopDetail.data.categories[0].goods.length ? <>
            <View style={{ marginHorizontal: 16, marginTop: 16, display: 'flex', marginBottom: 12, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <Text style={{ fontSize: 24, fontWeight: "bold" }}>Recommended for you</Text>
                <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onPress={() => navigate.navigate("SearchPage", { key: "Recommended for you" })}>
                    <Text style={{ fontSize: 12, color: 'rgb(59,84,86)', marginRight: 4 }}>See more</Text>
                    <AntDesign name="right" size={10} color="black" />
                </Pressable>
            </View>
            <View>
                {
                    fetchShopDetail.data.categories[0].goods.map((item, index) => {
                        console.log("==============1111");
                        console.log(item);
                        return (<HomeCard shop={item} key={index} style={{ width: '100%' }} />)
                    })
                }
            </View>
        </> : <View>Empty</View>)}
        {
            index === 1 && <View style={{marginHorizontal:16,marginTop:16}}>
                {[].length ? <View>
                    <View style={{ marginTop: 16, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>User reviews(14)</Text>
                            <Image source={require('../../assets/images/great.png')} style={{ width: 14, height: 14, marginLeft: 8, objectFit: 'contain' }} />
                            <Text style={{ fontSize: 14, color: config.text_color_2, fontWeight: 'bold', marginLeft: 4 }}>94%</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 'auto' }}>
                            <View>
                                <Text style={{ fontSize: 14, color: config.text_color_2 }}>All reviews</Text>
                            </View>
                            <View style={{ marginLeft: 8 }}>
                                <Image source={require('../../assets/images/right.png')} style={{ width: 18, height: 18 }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginTop: 12 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', paddingHorizontal: 6, paddingVertical: 4, borderRadius: 22, marginBottom: 8, backgroundColor: '#00626010', marginRight: 8 }}>
                            <Text>Delicious food</Text>
                            <Text style={{ fontSize: 12 }}>(3)</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', paddingHorizontal: 6, paddingVertical: 4, borderRadius: 22, marginBottom: 8, backgroundColor: '#00626010', marginRight: 8 }}>
                            <Text>Great amout of food</Text>
                            <Text style={{ fontSize: 12 }}>(3)</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', paddingHorizontal: 6, paddingVertical: 4, borderRadius: 22, marginBottom: 8, backgroundColor: '#00626010', marginRight: 8 }}>
                            <Text>Friendly staff</Text>
                            <Text style={{ fontSize: 12 }}>(6)</Text>
                        </View>
                    </View>
                </View> : <View style={{ marginTop: 16, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        {/* <Text style={{ fontSize: 18, fontWeight: 'bold' }}>User reviews(0)</Text> */}
                    </View>
                </View>}
                {[].length ? <View style={{ marginTop: 16, width: '100%', borderRadius: 20, backgroundColor: 'white', padding: 16 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ display: 'flex', flexDirection: 'row' }}>
                                <Image source={require('../../assets/images/shopIcon.png')} style={{ width: 40, height: 40, borderRadius: 50 }} />
                                <View style={{ display: 'flex', flexDirection: 'column', marginLeft: 8 }}>
                                    <Text style={{ fontWeight: 'bold' }}>Nightmare</Text>
                                    <Text style={{ marginTop: 6, color: config.text_color_1, fontSize: 12 }}>2024.10.10 12:99</Text>
                                </View>
                            </View>
                        </View>
                        <View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end' }}>
                                {
                                    [0, 0, 0, 0, 0].map((item, index) => {
                                        if (index < 3) {
                                            return <AntDesign name="star" size={18} color="rgb(240,185,55)" style={{ marginRight: 4 }} />
                                        }
                                    })
                                }
                            </View>
                            <View style={{ marginTop: 6 }}>
                                <Text numberOfLines={2} style={{ fontWeight: '500', fontSize: 12 }}>#Classic Package Magic Bag $11.9</Text>
                            </View>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginTop: 12 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-end', paddingHorizontal: 6, paddingVertical: 4, borderRadius: 22, marginBottom: 8, backgroundColor: '#00626010', marginRight: 8 }}>
                            <Text>Good location</Text>
                        </View>
                    </View>
                    <Text style={{ fontSize: 14, fontWeight: 'bold', marginTop: 4 }}>Very good, the package is super good value, next time continue to</Text>
                    <View style={{ marginTop: 12, display: 'flex', flexDirection: 'row' }}>
                        <Image source={require('../../assets/images/last.png')} style={{ width: Dimensions.get("screen").width * 0.25, height: Dimensions.get("screen").width * 0.15, borderRadius: 22, marginRight: 8 }} />
                        <Image source={require('../../assets/images/last.png')} style={{ width: Dimensions.get("screen").width * 0.25, height: Dimensions.get("screen").width * 0.15, borderRadius: 22, marginRight: 8 }} />
                        <Image source={require('../../assets/images/last.png')} style={{ width: Dimensions.get("screen").width * 0.25, height: Dimensions.get("screen").width * 0.15, borderRadius: 22, marginRight: 8 }} />
                    </View>
                </View> : <View style={{ marginTop: 16, width: '100%', borderRadius: 20, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 16 }}>
                    <Image source={require('../../assets/images/noReview.png')} style={{ width: 100, height: 100 }} />
                    <Text style={{ marginTop: 24,fontSize:24,fontWeight:'500' }}>No Reviews Yet</Text>
                </View>}
            </View>
        }
        {
            index === 2 &&   <View style={{ marginHorizontal: 16,marginTop:16, position: 'relative',display:'flex',flexDirection:'column', backgroundColor: 'white', paddingHorizontal: 16, paddingVertical: 16, borderRadius: 40,  alignItems: 'center' }}>
                  <Text style={{fontSize:20,fontWeight:'600'}}>About our store, We appreciate your contribution to reducing food waste as we join hands in our commitment to champion 'low carbon' practices and change the world, one bag at a time.</Text>
                  <View style={{width:'100%',height:4,backgroundColor:config.backgroundColor_1,marginVertical:16}}></View>
                  <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    <View style={{display:'flex',alignItems:'center',justifyContent:'center',flex:1}}>
                        <Image source={require("../../assets/images/birth.png")} style={{width:55,height:55}} />
                        <Text style={{fontSize:24,fontWeight:'bold',marginTop:8}}>{1}month</Text>
                    </View>
                    <View style={{display:'flex',alignItems:'center',justifyContent:'center',flex:1}}>
                        <Image source={require("../../assets/images/downco2.png")} style={{width:55,height:55}} />
                        <Text style={{fontSize:24,fontWeight:'bold',marginTop:8}}>{12}kg</Text>
                    </View>
                    <View style={{display:'flex',alignItems:'center',justifyContent:'center',flex:1}}>
                        <Image source={require("../../assets/images/pkg.png")} style={{width:55,height:55}} />
                        <Text style={{fontSize:24,fontWeight:'bold',marginTop:8}}>{'20+'}bags</Text>
                    </View>
                  </View>
            </View>

        }
    </ScrollView>)
}