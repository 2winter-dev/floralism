import { View, Text, Image, ImageBackground, Pressable, ScrollView, Dimensions, Linking, ActivityIndicator, RefreshControl } from "react-native";
import { Ionicons, AntDesign, Feather, Foundation, FontAwesome5, Entypo, MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import GoogleMapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import config from "../../common/config";
import { useEffect, useState, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useCallback } from "react";
import OrderAPI from "../../api/OrderAPI";
import Accordion from 'react-native-collapsible/Accordion';
// import AnimatedAccordion from "@dev-event/react-native-accordion";
import { useLocal, useToken } from "../../common/store/user";
export default function OrderStatus({ route }) {
    const navigation = useNavigation();
    return (<ScrollView style={{ minHeight: Dimensions.get("screen").height, position: 'relative', backgroundColor: 'rgb(254,250,247)' }}>
        <Image source={require('../../assets/images/BackgroundImage.png')} style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }} />
        <View style={{ marginTop: Dimensions.get("screen").height * 0.04, position: 'relative' }}>

            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 32 }}>
                <View style={{ width: 100 }}>
                    <Pressable onPress={() => navigation.canGoBack() && navigation.goBack()} style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </Pressable>
                </View>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>Your Orders</Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/wenhao.png')} style={{ width: 25, height: 25, marginRight: 16 }} />
                    <Image source={require('../../assets/images/reminder.png')} style={{ width: 40, height: 40 }} />
                </View>
            </View>
            {<View style={{ marginTop: 24, position: 'relative', backgroundColor: 'white', display: 'flex', padding: 16, alignItems: 'center', justifyContent: 'center', marginHorizontal: 32, borderRadius: 24 }}>
                <Text style={{ color: 'rgba(0,0,0,0.4)', fontSize: 16 }}>collect Code</Text>
                <Text style={{ marginTop: 12, color: '#25745B', fontSize: 32, fontWeight: '500' }}>
                    7A8712
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <AntDesign name="questioncircleo" size={16} color="#969696" style={{ marginRight: 12 }} />
                    <Text style={{ color: '#969696' }}>please use your pick-up number or QR code to collect your bag.</Text>
                </View>

                <View style={{ position: 'absolute', paddingHorizontal: 16, borderTopLeftRadius: 20, borderBottomRightRadius: 20, paddingVertical: 8, top: 0, right: 0, backgroundColor: '#25745B', display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../../assets/images/leftnum.png')} style={{ width: 20, height: 20, marginRight: 8 }} />
                    <Text style={{ color: 'white', fontSize: 16, fontWeight: '500' }}>Ask a friend</Text>
                </View>
            </View>}
            {<View style={{ marginTop: 24, position: 'relative', backgroundColor: 'white', display: 'flex', padding: 16, borderColor: '#FF0000', borderWidth: 3, alignItems: 'center', justifyContent: 'center', marginHorizontal: 32, borderRadius: 24 }}>
                <Text style={{ fontSize: 28 }}>Cancellation status</Text>
                <View style={{ marginTop: 16, display: 'flex', alignItem: 'center', justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8 }}>
                        <Image resizeMode="contain" source={require('../../assets/images/cancel1.png')} style={{ width: 80, height: 80, marginRight: 12 }} />
                        <View style={{ width: 90, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                            <View style={{ width: '100%', height: 3, backgroundColor: 'black' }}></View>
                            <Image source={require('../../assets/images/finish1.png')} style={{ width: 24, height: 24, position: 'absolute', top: 0, bottom: 0 }} />
                        </View>
                        <Image resizeMode="contain" source={require('../../assets/images/recycle1.png')} style={{ width: 80, height: 80, marginHorizontal: 12 }} />
                        <View style={{ width: 90, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                            <View style={{ width: '100%', height: 3, backgroundColor: 'black' }}></View>
                            <Image source={require('../../assets/images/finish1.png')} style={{ width: 24, height: 24, position: 'absolute', top: 0, bottom: 0 }} />
                        </View>
                        <Image resizeMode="contain" source={require('../../assets/images/refund1.png')} style={{ width: 80, height: 80, marginLeft: 12 }} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 12, alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ flex: 1, textAlign: 'left', fontSize: 24 }}>Received</Text>
                        <Text style={{ flex: 1, textAlign: 'center', fontSize: 24 }}>Processed</Text>
                        <Text style={{ flex: 1, textAlign: 'right', fontSize: 24 }}>Refunded</Text>
                    </View>
                </View>
            </View>}
            <View style={{ position: 'relative' }}>
                <Image source={require('../../assets/images/Subtract1.png')} resizeMode="stretch" style={{ width: Dimensions.get("screen").width, height: (Dimensions.get("screen").width) / 1.3, }} />
                <View style={{ position: 'absolute', display: 'flex', padding: '6%', alignItems: 'center', top: 0, left: 0, right: 0, bottom: 0, zIndex: 10, width: '100%', height: '100%' }}>
                    <Text style={{ color: 'white', fontSize: 18 }}>Collect in 10:00 mins</Text>
                    <Text style={{ marginTop: '5%', fontSize: 28 }}>Collect：Today 09:00-20:00</Text>
                    <Image source={require('../../assets/images/code.png')} style={{ width: '45%', height: '45%', objectFit: 'contain', marginTop: '7%' }} />
                    <Pressable style={{ paddingHorizontal: '10%', paddingVertical: 16, marginTop: '10%', borderRadius: 30, backgroundColor: '#819796' }}>
                        <Text style={{ color: 'white', fontWeight: '600', fontSize: 18 }}>Cancel</Text>
                    </Pressable>
                </View>
            </View>

            <View style={{ marginTop: 16, marginHorizontal: 32, position: 'relative', backgroundColor: 'white', padding: 16, borderTopLeftRadius: 47, borderTopRightRadius: 47 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ display: 'flex', flex: 1 }}>
                        <Text numberOfLines={1} style={{ fontSize: 24 }}>McDonald’s</Text>
                        <Text numberOfLines={1} style={{ fontSize: 16, color: '#969696' }}>112 Happiness Subdivision Street</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable style={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', marginRight: 16, borderRadius: 47, borderWidth: 1 }}>
                            <Image source={require('../../assets/images/mobile.png')} style={{ width: 35, height: 35 }} />
                        </Pressable>
                        <Pressable style={{ width: 60, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: 47, borderWidth: 1 }}>
                            <Image source={require('../../assets/images/goto.png')} style={{ width: 35, height: 35 }} />
                        </Pressable>
                    </View>
                </View>

                <Image source={require('../../assets/images/line2.png')} style={{ height: 2, width: '100%', marginVertical: 32 }} />
                <View style={{ width: 30, height: 30, backgroundColor: 'rgb(254,250,247)', borderRadius: 50, position: 'absolute', left: -15, top: 95, zIndex: 10 }}></View>
                <View style={{ width: 30, height: 30, backgroundColor: 'rgb(254,250,247)', borderRadius: 50, position: 'absolute', right: -15, top: 95, zIndex: 10 }}></View>

                <View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', width: '100%' }}>
                        <View style={{ marginRight: 12 }}>
                            <Image source={require('../../assets/images/vegetable.png')} style={{ width: 80, height: 80 }} />
                        </View>
                        <View style={{ display: 'flex', flex: 1 }}>
                            <View style={{ display: 'flex', flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <View style={{ display: 'flex', flex: 1, marginRight: 16 }}>
                                    <Text numberOfLines={2} style={{ fontSize: 18, width: '100%' }}>Classic Package Magic Bag</Text>
                                    <Text style={{ fontSize: 14, marginTop: 12 }}>x1</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 14 }}>AU$ <Text style={{ fontSize: 18, fontWeight: '500' }}>5.99</Text></Text>
                                </View>
                            </View>
                            <Image source={require('../../assets/images/line2.png')} style={{ height: 2, width: '100%', marginVertical: 12 }} />
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                                <View style={{ display: 'flex', flex: 1, marginRight: 16 }}>
                                    <Text numberOfLines={1} style={{ fontSize: 18, width: '100%', color: '#525252' }}>Service fee</Text>
                                </View>
                                <Text style={{ fontSize: 14 }}>AU$ <Text style={{ fontSize: 18, fontWeight: '500' }}>5.99</Text></Text>

                            </View>
                            <Image source={require('../../assets/images/line2.png')} style={{ height: 2, width: '100%', marginVertical: 12 }} />
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                                <View style={{ display: 'flex', flex: 1, marginRight: 16 }}>
                                    <Text numberOfLines={1} style={{ fontSize: 24, width: '100%' }}>Total:</Text>
                                </View>
                                <Text style={{ fontSize: 16 }}>AU$ <Text style={{ fontSize: 30, fontWeight: '500' }}>5.99</Text></Text>

                            </View>

                        </View>
                    </View>
                </View>
            </View>
            <View style={{ marginTop: 16, marginHorizontal: 32, height: (Dimensions.get("screen").width - 32) / 3.4, position: 'relative', backgroundColor: 'white', borderBottomLeftRadius: 47, borderBottomRightRadius: 47 }}>
                <Image source={require('../../assets/images/Subtract3.png')} resizeMode="cover" style={{ position: 'absolute', width: '100%', height: '100%', bottom: 0, borderBottomLeftRadius: 47, borderBottomRightRadius: 47 }} />
                <View style={{ padding: 16 }}>
                    <Text style={{ marginTop: 16, color: '#969696', fontSize: 16 }}>Order time:01/02/2023 16:13</Text>
                    <Text style={{ marginTop: 16, color: '#969696', fontSize: 16 }}>Order number: 2161485941513468416516516</Text>
                    <Text style={{ marginTop: 16, color: '#969696', fontSize: 16 }}>Payment method: apple pay</Text>
                </View>

            </View>

            <View style={{
                marginTop: 16, shadowOffset: {
                    width: 0,
                    height: 2,
                },
                shadowOpacity: 0.23,
                shadowRadius: 2.62,

                elevation: 4, marginHorizontal: 32, marginBottom: 46, position: 'relative', backgroundColor: 'white', padding: 16, borderRadius: 47
            }}>
                <Text style={{ fontSize: 28 }}>FAQs</Text>

                <Text style={{ marginTop: 12, fontSize: 20 }}>Frequently asked questions？</Text>
                <Text style={{ marginTop: 12, fontSize: 20 }}>Frequently asked questions？</Text>
                <Text style={{ marginTop: 12, fontSize: 20 }}>Frequently asked questions？</Text>

                {/* <Text style={{marginTop:12,fontSize:20}}>Frequently asked questions？</Text> */}
                <View style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ marginTop: 24, fontSize: 16, color: '#25745B' }}>More</Text>
                </View>
            </View>
        </View>
    </ScrollView>)
}