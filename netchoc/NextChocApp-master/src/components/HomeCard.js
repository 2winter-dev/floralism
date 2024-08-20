import { Pressable, Text, View, Dimensions, Platform, Image } from "react-native";
import { Feather } from "@expo/vector-icons"
import { useRef } from "react";
import { useState } from "react"
import SwiperFlatList from "react-native-swiper-flatlist";
import config from "../common/config";
import { AntDesign } from "@expo/vector-icons";
import { BlurView } from 'expo-blur';
import analytics from '@react-native-firebase/analytics';
import { navigate } from "../common/utils";
export default function HomeCard(props) {
    // console.log(props);
    return (
        <View style={{ marginLeft: 16, marginRight: 16, paddingBottom: 10 }}>
            <Pressable onPress={async () => {
                await analytics().logEvent('enterShop', {
                    id: props.shop.id,
                    item: props.shop.merchantname,
                })

                //  console.log(props.shop.id);
                // Navigation.navigate("Bussiness.shop", { id: props.shop.id });
                navigate("Bussiness.shop", { id: props.shop.id })

            }} style={{ display: 'flex', width: props?.width??325,...props.style }}>
                <View style={{ width: '100%', position: 'relative' }}>
                    <View style={{ position: 'relative' }}>
                        <Image source={{ uri: props.shop.logo_format }} resizeMode="contain" style={{ width: '100%', height: 140, borderTopLeftRadius: 16, borderTopRightRadius: 16, backgroundColor: 'rgba(0,0,0,0.1)', borderWidth: 0.3, borderColor: 'rgba(0,0,0,0.3)' }} />
                        <View style={{ position: 'absolute', top: 10, right: 10, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#7DA6A5', paddingHorizontal: 8, borderRadius: 12, paddingVertical: 3 }}>
                            <Image source={require("../assets/images/leftnum.png")} style={{ width: 15, height: 15, marginRight: 8,objectFit:'cover' }} />
                            <Text style={{ color: 'white', fontSize: 15 }}>{props.shop.content}</Text>
                        </View>
                        <BlurView intensity={100} style={{ position: 'absolute', backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', flexDirection: 'row', paddingHorizontal: 16, alignItems: 'center', justifyContent: 'space-between', bottom: 0, width: '100%', height: 35, left: 0, right: 0 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={{ fontWeight: '500', color: 'white', fontSize: 16 }}>4.7</Text>
                                <AntDesign name="star" size={18} style={{ marginLeft: 4 }} color={config.star_color} />
                                <Text style={{ marginLeft: 4, color: 'white', fontSize: 12 }}>(300+)</Text>
                                <View style={{ width: 1, height: 16, backgroundColor: 'white', marginHorizontal: 6 }}></View>
                                <Text style={{ color: 'white', fontWeight: '500' }}>{props.shop.distance !== "" ? props.shop.distance : "0km"}</Text>
                            </View>
                            <View>
                                <Image source={require("../assets/images/isLove.png")} style={{ width: 15, height: 15, objectFit: 'contain' }} />
                            </View>
                        </BlurView>
                    </View>
                    <View style={{ width: '100%',  backgroundColor: 'white', borderBottomLeftRadius: 16, borderBottomRightRadius: 16, padding: 16, display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>
                        <View style={{ display: 'flex', flex: 1, marginRight: 12 }}>
                            <Text numberOfLines={1} style={{ fontSize: 16, fontWeight: '500' }}>{props.shop.merchantname}</Text>
                            <Text style={{ color: config.text_color_2, marginTop:4 }}>Collect:{props.shop.businesshours}</Text>
                            <View style={{display:'flex',flexDirection:'row',alignItems:'baseline',marginTop:12}}>
                                <Text style={{ color: config.star_color}}>AU$</Text>
                                <Text style={{ color: config.star_color,fontWeight:'bold',fontSize:22}}>{props.shop.discount_price}</Text>
                            </View>
                        </View>
                        <View style={{ width: 50, height: 50 }}>
                            <Image source={require("../assets/images/shopIcon.png")} style={{ width: '100%', height: '100%' }} />
                        </View>
                    </View>
                    {/* <Image 
                    <View style={{ position: 'absolute', width: 60, height: 30, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', top: 10, right: 10, borderRadius: 50, borderWidth: 0.5, borderColor: 'rgba(0,0,0,0.1)' }}>
                        <AntDesign name="star" size={18} color="rgb(240,185,55)" style={{ marginRight: 4 }} />
                        <Text>{props.shop?.score !== 0 ? props.shop.score : "4.5"}</Text>
                    </View>
                    <View style={{ position: 'absolute', left: -6, top: 15, paddingRight: 8, borderTopLeftRadius: 4, paddingLeft: 8, borderTopRightRadius: 4, borderBottomRightRadius: 4, paddingVertical: 2, backgroundColor: props.shop.color_bg }}>
                        <Text style={{ fontSize: 12, color: props.shop.color }}>{props.shop.content}</Text>
                    </View>
                    <View style={{
                        position: 'absolute',
                        left: -6,
                        top: Platform.OS === "ios" ? 33 : 35,
                        width: 0,
                        height: 0,
                        borderTopWidth: 3,
                        borderTopColor: props.shop.color,
                        borderRightWidth: 3,
                        borderRightColor: props.shop.color,
                        borderLeftWidth: 3,
                        borderLeftColor: 'transparent',
                        borderBottomWidth: 3,
                        borderBottomColor: 'transparent',
                    }} />
                </View>
                <View style={{ width: '100%' }}>
                    <Text numberOfLines={2} style={{ fontSize: 18, fontWeight: 'bold', marginTop: 8, width: '100%', marginLeft: 4 }}>{props.shop.merchantname}</Text>
                    {!!props.shop?.businesshours2 && <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 4 }}>
                        <AntDesign style={{ marginRight: 4, marginLeft: 4 }} name="clockcircleo" size={12} color='rgba(0,0,0,0.5)' />
                        <Text>{props.shop.businesshours}{" & " + props.shop.businesshours2}</Text>
                    </View>}
                    <View style={{ marginTop: 4, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                        {!props.shop?.businesshours2 && <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <AntDesign style={{ marginRight: 4 }} name="clockcircleo" size={14} color='rgba(0,0,0,0.5)' />
                            <View>
                                <Text >{props.shop.businesshours}</Text>
                            </View>
                        </View>}
                        {token && <EvilIcons name="location" size={18} color="rgba(0,0,0,0.5)" />}
                        {token && <Text style={{ marginRight: 14 }}>{props.shop.distance}</Text>}
                    </View> */}

                </View>
            </Pressable>
        </View>
    )
}
