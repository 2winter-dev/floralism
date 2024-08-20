

import * as StoreReview from 'expo-store-review'
import { FontAwesome, MaterialIcons, AntDesign, FontAwesome5, Ionicons, MaterialCommunityIcons, Entypo, Fontisto } from "@expo/vector-icons"
import { useEffect, useState } from "react"
import { Pressable, ScrollView, Text, View, Switch, Linking, Dimensions, Image, Platform, RefreshControl, Alert } from "react-native"
import ProfileSetting from "./ProfileSetting";
import { LinearGradient } from 'expo-linear-gradient';
import LoginSettting from "./LoginSetting";
import { Link, useFocusEffect, useNavigation } from "@react-navigation/native";
import config from '../../common/config';
import { useCommonActions, useToken, useUser } from '../../common/store/user';
import { useMutation, useQuery, useInfiniteQuery } from '@tanstack/react-query';
import LoginAPI from '../../api/LoginAPI';
import Contansts from 'expo-constants';
import { useRefreshOnFocus } from '../../common/hooks/useRefreshOnFocus';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import * as Updates from 'expo-updates';
import AccountModal from '../../components/AccountModal';
import { Feather } from '@expo/vector-icons';
import OrderAPI from '../../api/OrderAPI';
export default function AccountSetting() {

    const [basemess, setBasemess] = useState(false);
    const [isUpdate, setIsUpdate] = useState(true);
    const [visible, setVisible] = useState(false);
    const user = useUser();
    const token = useToken();
    useEffect(() => {
        //console.log("----");

        //console.log(user)
    }, [])
    const setUser = useCommonActions().setUser;
    const logout = useCommonActions().logout;
    //    //////console.log(Contansts.expoConfig.version);
    const fetchBaseMess = useQuery({
        queryFn: () => LoginAPI.fetchBaseMess({ token }),
        queryKey: ['fetchBaseMess', token],
        enabled: !!token,
        onSuccess: (res) => {
            console.log("-=====-");
            console.log(res);
            setUser(res);
        }
    })
    async function onFetchUpdateAsync() {
        try {

            //console.log('检查更新..')
            const update = await Updates.checkForUpdateAsync();

            if (update.isAvailable) {

                ////console.log('有新版！');
                await Updates.fetchUpdateAsync();
                setIsUpdate(false)

            } else {
                ////console.log('当前版本最新')
            }
        } catch (error) {
            ////console.log(error);
        }
    }

    useEffect(() => {
        !__DEV__ && onFetchUpdateAsync();
    }, [])
    const backlogout = useMutation({
        mutationFn: () => LoginAPI.logout({ token }),
        mutationKey: ['backLogout'],
    })
    const toLogout = () => {
        console.log(token);
        backlogout.mutate(null, {
            onSuccess: (res) => {
                ////console.log(res);
                signOut();
                logout();
            },
            onError: (res) => {
                ////console.log(res);
            }
        })
    }
    const signOut = async () => {
        try {
            await GoogleSignin.signOut();
        } catch (error) {
            console.error(error);
        }
    };
    const fetchVersion = useQuery({
        queryFn: () => LoginAPI.fetchVersion({ platform: Platform.OS, version: Contansts.expoConfig.version }),
        queryKey: ['fetchVersion'],
        onSuccess: (res) => {
            ////console.log(res);

        }
    })
    // const fetchFinishOrderList = useInfiniteQuery({
    //     enabled: !!token,
    //     queryFn: ({ pageParam = 1, ...data }) => OrderAPI.fetchFinishOrderList({ ...data, page: pageParam, token }),
    //     queryKey: ['fetchFinishOrderList'],
    //     onSuccess: (res) => {
    //       console.log(res);
    //     },
    //     onError: (res) => {
    //       // Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
    //     },
    //     enabled: !!token,
    //   })
    useEffect(() => {
        //清除状态
        navigation.addListener("blur", () => {
            setBasemess(false);
            // setNotification(false)
        })
    }, [])

    const navigation = useNavigation();
    return (<View style={{ backgroundColor: basemess ? "white" : 'rgb(248,248,248)', position: 'relative' }}>
        <View style={{ position: 'absolute', width: '100%', height: Dimensions.get("screen").height }}>
            <Image source={require('../../assets/images/background.png')} style={{ width: '100%' }} />
        </View>
        {!basemess && <ScrollView refreshControl={<RefreshControl refreshing={false} onRefresh={onFetchUpdateAsync} />} style={{ marginTop: Dimensions.get("screen").height * 0.06, paddingHorizontal: 16, paddingBottom: token ? 50 : 0, height: token ? 'auto' : '100%' }} >

            {
                token ?
                    <>
                        <View style={{ display: 'flex', borderRadius: 12, flexDirection: 'row', alignItems: 'center', marginTop: 20, marginBottom: 10, padding: 10 }}>
                            <Image source={require("../../assets/images/nIcon.png")} style={{ width: 85, height: 85, borderRadius: 50, marginRight: 12 }} />
                            <View style={{ flex: 1, display: 'flex', alignItems: 'flex-start' }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                                    <Text numberOfLines={1} style={{ fontSize: 20, fontWeight: 'bold' }}>
                                        {user.nickname !== "" ? user.nickname : user.email.split("@")[0]}
                                    </Text>
                                    <AntDesign name="right" size={20} color="black" />
                                </View>

                                <View style={{ paddingHorizontal: 12, paddingVertical: 8, display: 'flex', flexDirection: 'row', alignItems: 'center', backgroundColor: '#25745B', marginTop: 16, borderRadius: 30 }}>
                                    <View style={{ width: 23, height: 23, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 50 }}>
                                        <Image source={require('../../assets/images/Carbon.png')} style={{ width: 15, height: 15, objectFit: 'contain' }} />
                                    </View>
                                    <Text style={{ color: 'white', marginLeft: 8, fontSize: 16 }}>Carbon Credit</Text>
                                </View>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', }}>
                                <Pressable onPress={() => navigation.navigate('Account.profile')} style={{ display: 'flex', marginLeft: 4, flexDirection: 'row', alignItems: 'center', marginTop: 8, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20 }}>
                                    <Image source={require('../../assets/images/Customer.png')} style={{ width: 30, height: 30 }} />
                                </Pressable>
                                <Pressable onPress={() => navigation.navigate('Account.profile')} style={{ display: 'flex', marginLeft: 4, flexDirection: 'row', alignItems: 'center', marginTop: 8, paddingHorizontal: 12, paddingVertical: 8, borderRadius: 20 }}>
                                    <Image source={require('../../assets/images/setting.png')} style={{ width: 30, height: 30 }} />
                                </Pressable>
                            </View>

                        </View>
                        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
                            <View style={{ paddingHorizontal: 16 }}>
                                <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>0</Text>
                                <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 12 }}>Following</Text>
                            </View>
                            <View style={{ paddingHorizontal: 16 }}>
                                <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>0</Text>
                                <Text style={{ textAlign: 'center', fontSize: 1, marginTop: 12 }}>Follower</Text>
                            </View>
                            <View style={{ paddingHorizontal: 16 }}>
                                <Text style={{ textAlign: 'center', fontSize: 24, fontWeight: 'bold' }}>0</Text>
                                <Text style={{ textAlign: 'center', fontSize: 18, marginTop: 12 }}>Medals</Text>
                            </View>
                        </View>
                        <View style={{ width: '100%', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white',overflow:'hidden', marginTop: 32, borderRadius: 40 }}>
                            <View style={{ display: 'flex', position: 'relative', width: '40%', display: 'flex' }}>
                                <Image source={require('../../assets/images/Rectangle.png')} style={{ objectFit: 'contain', width:270,height:190,top:-10,left:-10, position: 'absolute' }} />
                                <Image style={{ margin: 24, flex: 1, width: 110, height: 100 }} source={require('../../assets/images/Co2pic.png')} />
                            </View>
                            <View style={{ display: 'flex', width: '40%', margin: 32 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text style={{ fontSize: 28 }}>CO2e avoided</Text>
                                    <View style={{ width: 24, height: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'row', borderWidth: 1, borderColor: 'black', borderRadius: 50, }}>
                                        <Text style={{ fontSize: 16 }}>?</Text>
                                    </View>
                                </View>
                                <View style={{ display: 'flex', marginTop: 12 }}>
                                    <Text style={{ fontSize: 28, fontWeight: 'bold' }}>{fetchBaseMess.data?.co2}kg</Text>
                                </View>

                            </View>
                        </View>
                        <View style={{ marginTop: 24, display: 'flex', width: '100%', flexDirection: 'row' }}>
                            <View style={{ display: 'flex', flex: 1, borderRadius: 30, backgroundColor: '#CFE0DB', padding: 24, paddingLeft: 16, position: 'relative', overflow: 'hidden' }}>
                                <View style={{ position: 'absolute', left: -10, top: 0, borderRadius: 50, display: 'flex' }}>
                                    <Image source={require('../../assets/images/Ellipse181.png')} style={{ height: 136, width: 120, objectFit: 'contain' }} />
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../../assets/images/Packagepic.png')} style={{ width: 60, height: 83 }} />
                                    <View style={{ marginLeft: 'auto' }}>
                                        <Text style={{ fontSize: 20 }}>Bags saved</Text>
                                        <Text style={{ marginTop: 16, fontSize: 20, fontWeight: 'bold' }}>{fetchBaseMess.data?.goods_count}</Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ display: 'flex', marginLeft: 40, flex: 1, borderRadius: 30, backgroundColor: '#CFE0DB', padding: 24, paddingLeft: 16, position: 'relative', overflow: 'hidden' }}>
                                <View style={{ position: 'absolute', left: -10, top: 0, borderRadius: 50, display: 'flex' }}>
                                    <Image source={require('../../assets/images/Ellipse181.png')} style={{ height: 136, width: 120, objectFit: 'contain' }} />
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../../assets/images/moneysaved.png')} style={{ width: 60, height: 83 }} />
                                    <View style={{ marginLeft: 'auto' }}>
                                        <Text style={{ fontSize: 20 }}>Money saved</Text>
                                        <View style={{ marginTop: 16, display: 'flex', flexDirection: 'row', alignItems: 'baseline', }}>
                                            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>AU</Text>
                                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>$100</Text>
                                        </View>

                                    </View>
                                </View>
                            </View>

                        </View>
                        <View style={{ marginTop: 16, padding: 24, backgroundColor: 'white', borderRadius: 30 }}>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Your Savings</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: 24, alignItems: 'center' }}>
                                <View style={{ display: 'flex', alignItems: 'center', width: '15%' }}>
                                    <View style={{ width: 40, height: 46, position: 'relative' }}>
                                        <Image source={require('../../assets/images/order3.png')} style={{ width: '100%', objectFit: 'contain', height: '100%' }} />
                                        <Image source={require('../../assets/images/shipin.png')} style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, width: '100%', height: '100%' }} />
                                    </View>
                                    <Text numberOfLines={2} style={{ fontSize: 18, textAlign: 'center' }}>All savings</Text>
                                </View>

                                <View style={{ display: 'flex', alignItems: 'center', width: '15%' }}>
                                    <View style={{ width: 40, height: 46, position: 'relative' }}>
                                        <Image source={require('../../assets/images/package3.png')} style={{ width: '100%', objectFit: 'contain', height: '100%' }} />
                                        <Image source={require('../../assets/images/shipin.png')} style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, width: '100%', height: '100%' }} />
                                    </View>
                                    <Text numberOfLines={2} style={{ fontSize: 18, textAlign: 'center' }}>Pending collection</Text>
                                </View>
                                <View style={{ display: 'flex', alignItems: 'center', width: '15%' }}>
                                    <View style={{ width: 40, height: 46, position: 'relative' }}>
                                        <Image source={require('../../assets/images/comment3.png')} style={{ width: '100%', objectFit: 'contain', height: '100%' }} />
                                        <Image source={require('../../assets/images/shipin.png')} style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, width: '100%', height: '100%' }} />
                                    </View>
                                    <Text numberOfLines={2} style={{ fontSize: 18, textAlign: 'center' }}>Pending Review</Text>
                                </View>
                                <View style={{ display: 'flex', alignItems: 'center', width: '15%' }}>
                                    <View style={{ width: 40, height: 46, position: 'relative' }}>
                                        <Feather name="shopping-bag" size={40} color="rgba(0,0,0,0.7)" />
                                        <Image source={require('../../assets/images/shipin.png')} style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, width: '100%', height: '100%' }} />
                                    </View>
                                    <Text numberOfLines={2} style={{ fontSize: 18, textAlign: 'center' }}>Cancel/Expired</Text>
                                </View>
                            </View>
                        </View>
                        {/* <View style={{ width: '100%', height: 160, flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
                            <Pressable onPress={() => setVisible(true)} style={{ flex: 1, marginRight: 8, position: 'relative' }}>
                                <LinearGradient style={{ flex: 1, borderRadius: 16, borderTopLeftRadius: 30, alignItems: 'flex-end', justifyContent: 'flex-end' }} start={{ x: 0.2, y: 0 }} colors={['#B4FCAC', '#95F6C0']}>
                                    <Image source={require("../../assets/images/co2.png")} style={{}} />
                                </LinearGradient>
                                <View style={{ position: 'absolute', paddingTop: 24, paddingLeft: 24 }}>
                                    <Text style={{ fontSize: 14, fontWeight: '500' }}>Carbon reduction</Text>
                                    <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#548E16', marginTop: 6 }}>{fetchBaseMess.data?.co2}</Text>
                                </View>
                            </Pressable>
                            <View style={{ flex: 1 }}>
                                <Pressable onPress={() => setVisible(true)} style={{ flex: 1, position: 'relative' }}>
                                    <LinearGradient style={{ flex: 1, borderRadius: 16, borderTopLeftRadius: 30, alignItems: 'flex-end', justifyContent: 'flex-end' }} start={{ x: 0.2, y: 0 }} colors={['#B4FCAC', '#95F6C0']}>
                                        <Image source={require("../../assets/images/wallet.png")} style={{}} />
                                    </LinearGradient>
                                    <View style={{ position: 'absolute', paddingTop: 12, paddingLeft: 24 }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500' }}>Money saved</Text>
                                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#548E16', marginTop: 6 }}>{fetchBaseMess.data?.payment_amount}</Text>
                                    </View>
                                </Pressable>
                                <Pressable onPress={() => setVisible(true)} style={{ flex: 1, position: 'relative', marginTop: 9 }}>
                                    <LinearGradient style={{ flex: 1, borderRadius: 16, borderTopLeftRadius: 30, alignItems: 'flex-end', justifyContent: 'flex-end' }} start={{ x: 0.2, y: 0 }} colors={['#B4FCAC', '#95F6C0']}>
                                        <Image source={require("../../assets/images/wbbox.png")} style={{}} />
                                    </LinearGradient>
                                    <View style={{ position: 'absolute', paddingTop: 12, paddingLeft: 24 }}>
                                        <Text style={{ fontSize: 14, fontWeight: '500' }}>Box rescued</Text>
                                        <Text style={{ fontSize: 24, fontWeight: 'bold', color: '#548E16', marginTop: 6 }}>{fetchBaseMess.data?.goods_count}</Text>
                                    </View>
                                </Pressable>


                            </View>
                        </View> */}
                        {/* <Text style={{ padding: 12, borderRadius: 12, marginTop: 0, color: "rgba(0,0,0,0.7)", fontWeight: 600, }}>User Center</Text> */}
                        {/* <View style={{ backgroundColor: 'white', padding: 12, borderRadius: 12, marginTop: 0, paddingTop: 0 }}>
                            <Pressable onPress={() => token && navigation.navigate("Account.favorlist")} style={{ display: 'flex', paddingVertical: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name="heart-o" size={24} color="rgba(0,0,0,0.7)" />
                                </View>
                                <View style={{ marginLeft: 12 }}>
                                    <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Favorites</Text>
                                    <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.4)' }}>Your favorite list</Text>
                                </View>
                                <View style={{ marginLeft: 'auto' }}>
                                    <MaterialIcons name="navigate-next" size={24} color="rgba(0,0,0,0.7)" />
                                </View>
                            </Pressable>
                            <Pressable onPress={() => token && navigation.navigate("Order")} style={{ display: 'flex', paddingVertical: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <Fontisto name="file-1" size={24} color={'rgba(0,0,0,0.7)'} />
                                </View>
                                <View style={{ marginLeft: 12 }}>
                                    <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Orders</Text>
                                    <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.4)' }}>Your order list</Text>
                                </View>
                                <View style={{ marginLeft: 'auto' }}>
                                    <MaterialIcons name="navigate-next" size={24} color="rgba(0,0,0,0.7)" />
                                </View>
                            </Pressable>
                            <Pressable onPress={() => token && navigation.navigate("Account.Card")} style={{ display: 'flex', paddingVertical: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                   
                                    <AntDesign name="creditcard" size={24} color='rgba(0,0,0,0.7)' />
                                </View>
                                <View style={{ marginLeft: 12 }}>
                                    <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Wallets</Text>
                                    <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.4)' }}>Your card list</Text>
                                </View>
                                <View style={{ marginLeft: 'auto' }}>
                                    <MaterialIcons name="navigate-next" size={24} color="rgba(0,0,0,0.7)" />
                                </View>
                            </Pressable>
                            <Pressable onPress={() => navigation.navigate("Account.WebPage", { type: "Promo Codes", url: "https://nextchoc.com.au/coupons" })}
                                style={{ display: 'flex', paddingVertical: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesome name="gift" size={24} color={'rgba(0,0,0,0.7)'} />
                                </View>
                                <View style={{ marginLeft: 12 }}>
                                    <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Promo Codes</Text>
                                    <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.4)' }}>Unlock exclusive discounts</Text>
                                </View>
                                <View style={{ marginLeft: 'auto' }}>
                                    <MaterialIcons name="navigate-next" size={24} color="rgba(0,0,0,0.7)" />
                                </View>
                            </Pressable>

                            <Pressable onPress={() => {
                                if (token) {
                                    // setNotification(true);
                                    navigation.navigate('Account.push')
                                } else {
                                    navigation.navigate('SignIn.LoginWithPhone');
                                }

                            }} style={{ display: 'flex', paddingTop: 12, flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <MaterialCommunityIcons name="toggle-switch" size={24} color="rgba(0,0,0,0.7)" />
                                </View>
                                <View style={{ marginLeft: 12 }}>
                                    <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.7)' }}>Push Preferences</Text>
                                    <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.4)' }}>Stay updated</Text>
                                </View>
                                <View style={{ marginLeft: 'auto' }}>
                                    <MaterialIcons name="navigate-next" size={24} color="rgba(0,0,0,0.7)" />
                                </View>
                            </Pressable>
                        </View> */}
                        <View style={{marginHorizontal:0,marginTop:24,borderRadius:30,backgroundColor:'white',padding:16}}>
                            <Pressable onPress={() =>token && navigation.navigate("Account.favorlist")} style={{ display: 'flex', paddingVertical: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center',marginHorizontal:16 }}>

                                    <Image source={require('../../assets/images/favorite.png')} style={{width:'100%',height:26,objectFit:'contain'}} />
                                </View>
                                <View style={{ marginLeft: 12 }}>
                                    <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Favourites</Text>

                                </View>

                            </Pressable>
                            <Pressable onPress={() =>token && navigation.navigate("Account.favorlist")} style={{ display: 'flex', paddingVertical: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center',marginHorizontal:16 }}>

                                    <Image source={require('../../assets/images/favorite.png')} style={{width:'100%',height:26,objectFit:'contain'}} />
                                </View>
                                <View style={{ marginLeft: 12 }}>
                                    <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Favourites</Text>

                                </View>

                            </Pressable>
                            <Pressable onPress={() =>token && navigation.navigate("Account.favorlist")} style={{ display: 'flex', paddingVertical: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center',marginHorizontal:16 }}>

                                    <Image source={require('../../assets/images/Vouchers.png')} style={{width:'100%',height:26,objectFit:'contain'}} />
                                </View>
                                <View style={{ marginLeft: 12 }}>
                                    <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Vouchers</Text>

                                </View>

                            </Pressable>
                            <Pressable onPress={() =>token && navigation.navigate("Account.favorlist")} style={{ display: 'flex', paddingVertical: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center',marginHorizontal:16 }}>

                                    <Image source={require('../../assets/images/FAQ.png')} style={{width:'100%',height:26,objectFit:'contain'}} />
                                </View>
                                <View style={{ marginLeft: 12 }}>
                                    <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Q&A</Text>

                                </View>

                            </Pressable>
                            <Pressable onPress={() =>token && navigation.navigate("Account.favorlist")} style={{ display: 'flex', paddingVertical: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center',marginHorizontal:16 }}>

                                    <Image source={require('../../assets/images/signup.png')} style={{width:'100%',height:26,objectFit:'contain'}} />
                                </View>
                                <View style={{ marginLeft: 12 }}>
                                    <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Sign up your store</Text>

                                </View>

                            </Pressable>
                            <Pressable onPress={() =>token && navigation.navigate("Account.favorlist")} style={{ display: 'flex', paddingVertical: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center',marginHorizontal:16 }}>

                                    <Image source={require('../../assets/images/suggest.png')} style={{width:'100%',height:26,objectFit:'contain'}} />
                                </View>
                                <View style={{ marginLeft: 12 }}>
                                    <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Suggest a store</Text>

                                </View>

                            </Pressable>
                            <Pressable onPress={() =>token && navigation.navigate("Account.favorlist")} style={{ display: 'flex', paddingVertical: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center',marginHorizontal:16 }}>

                                    <Image source={require('../../assets/images/share.png')} style={{width:'100%',height:26,objectFit:'contain'}} />
                                </View>
                                <View style={{ marginLeft: 12 }}>
                                    <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Refer a friend</Text>

                                </View>

                            </Pressable>
                            <Pressable onPress={() =>token && navigation.navigate("Account.favorlist")} style={{ display: 'flex', paddingVertical: 12, borderBottomWidth: 0.5,  flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center',marginHorizontal:16 }}>

                                    <Image source={require('../../assets/images/share.png')} style={{width:'100%',height:26,objectFit:'contain'}} />
                                </View>
                                <View style={{ marginLeft: 12 }}>
                                    <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Refer a store</Text>

                                </View>

                            </Pressable>
                        </View>
                    </>
                    : <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }} onPress={() => navigation.navigate("SignIn.Method")}>

                        <View style={{ display: 'flex', flexDirection: 'row', backgroundColor: '#000', paddingVertical: 15, paddingHorizontal: 20, borderRadius: 30, alignItems: 'center', width: '70%', marginLeft: '15%', justifyContent: 'center', marginTop: 40 }}>

                            <Text style={{ fontSize: 16, color: '#fff' }}>Login</Text>
                            <MaterialIcons name="login" size={24} color="#ffffff" style={{ marginLeft: 10 }} />
                        </View></Pressable>
            }
            {/* <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', paddingHorizontal: 8, paddingBottom: 12, borderBottomColor: 'rgba(0,0,0,0.2)', borderBottomWidth: 0.5 }}>
                <Pressable onPress={() => token&&navigation.navigate("Account.favorlist")} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome name="heart-o" size={35} color="black" />
                    </View>
                    <Text style={{ marginTop: 4, fontWeight: 600 }}>Favorites</Text>
                </Pressable>

                <Pressable onPress={() =>  token&&navigation.navigate("Order")} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image style={{ width: 35, height: 35 }} source={require("../../assets/images/order.png")} />
                    <Text style={{ marginTop: 4, fontWeight: 600 }}>Orders</Text>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Account.WebPage", { type: "Suggest a restaurants", url: "https://nextchoc.com.au/suggest-restaurants" })} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 40, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name="shop" size={35} color="black" />
                    </View>
                    <Text style={{ marginTop: 4, fontWeight: 600 }}>Restaurant</Text>
                </Pressable>
                <Pressable onPress={() => Linking.openURL("https://nextchoc.com.au/join-us")} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <View style={{ width: 40, height: 40, borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <FontAwesome name="handshake-o" size={35} color="black" />
                    </View>
                    <Text style={{ marginTop: 4, fontWeight: 600 }}>Join us</Text>
                </Pressable>
            </View> */}
            {/* {token &&} */}

            {/* <Text style={{ padding: 12, borderRadius: 12, marginTop: 6, color: "rgba(0,0,0,0.7)", fontWeight: 600, }}>Give Us Feedback</Text> */}

            {/* <View style={{ marginTop: 0, backgroundColor: 'white', padding: 12, borderRadius: 12 }}>
                <Pressable onPress={() => navigation.navigate("Account.WebPage", { type: "Chat with us", url: "https://nextchoc.com.au/contact-us" })} style={{ display: 'flex', paddingBottom: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Ionicons name="chatbox-ellipses-outline" size={24} color="rgba(0,0,0,0.7)" />
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Chat With Us</Text>
                        <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.4)' }}>Instant Support, always Here!</Text>
                    </View>
                    <View style={{ marginLeft: 'auto' }}>
                        <MaterialIcons name="navigate-next" size={24} color="rgba(0,0,0,0.7)" />
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Account.WebPage", { type: "Customer service", url: "https://tawk.to/nextchoc" })}
                    style={{ display: 'flex', paddingVertical: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign name="customerservice" size={24} color="black" />
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Customer Service</Text>
                        <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.4)' }}>Better customer service</Text>
                    </View>
                    <View style={{ marginLeft: 'auto' }}>
                        <MaterialIcons name="navigate-next" size={24} color="rgba(0,0,0,0.7)" />
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Account.WebPage", { type: "Suggest a restaurants", url: "https://nextchoc.com.au/suggest-restaurants" })} style={{ display: 'flex', paddingBottom: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', flexDirection: 'row', marginTop: 12, alignItems: 'center' }}>
                    <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Entypo name="shop" size={24} color="rgba(0,0,0,0.7)" />
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Suggest a Restaurant</Text>
                        <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.4)' }}>Surprises await</Text>
                    </View>
                    <View style={{ marginLeft: 'auto' }}>
                        <MaterialIcons name="navigate-next" size={24} color="rgba(0,0,0,0.7)" />
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Account.WebPage", { type: "Join Us", url: "https://nextchoc.com.au/join-us" })} style={{ display: 'flex', paddingBottom: 12, flexDirection: 'row', marginTop: 12, alignItems: 'center' }}>
                    <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome name="handshake-o" size={24} color="rgba(0,0,0,0.7)" />
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Join us</Text>
                        <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.4)' }}>Be our ally</Text>
                    </View>
                    <View style={{ marginLeft: 'auto' }}>
                        <MaterialIcons name="navigate-next" size={24} color="rgba(0,0,0,0.7)" />
                    </View>
                </Pressable>



            </View>
            <Text style={{ padding: 12, borderRadius: 12, marginTop: 6, color: "rgba(0,0,0,0.7)", fontWeight: 600, }}>About NextChoc</Text>


            <View style={{ marginTop: 0, backgroundColor: 'white', padding: 12, borderRadius: 12 }}>

                <Pressable onPress={() => navigation.navigate("Account.FAQ")} style={{ display: 'flex', paddingBottom: 12, flexDirection: 'row', marginTop: 12, alignItems: 'center', borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', }}>
                    <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign name="questioncircleo" size={24} color="rgba(0,0,0,0.7)" />
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>F&Q</Text>
                        <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.4)' }}>Frequently asked questions</Text>
                    </View>
                    <View style={{ marginLeft: 'auto' }}>
                        <MaterialIcons name="navigate-next" size={24} color="rgba(0,0,0,0.7)" />
                    </View>
                </Pressable>

                <Pressable onPress={async () => {
                    if (Platform.OS === 'android') {
                        Linking.openURL("https://play.google.com/store/apps/details?id=com.yfd.zh.NextChoc");
                    } else {
                        Linking.openURL("https://apps.apple.com/app/nextchoc/id6461417297");
                    }


                }} style={{ display: 'flex', paddingBottom: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', flexDirection: 'row', marginTop: 12, alignItems: 'center' }}>
                    <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <AntDesign color={'rgba(0,0,0,0.7)'} name="star" size={24} />
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Rate us</Text>
                        <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.4)' }}>Rate us on store</Text>
                    </View>
                    <View style={{ marginLeft: 'auto' }}>
                        <MaterialIcons name="navigate-next" size={24} color="rgba(0,0,0,0.7)" />
                    </View>
                </Pressable>

                <Pressable onPress={() => navigation.navigate("Account.WebPage", { type: "Privacy Policy", url: "https://nextchoc.com.au/privacy-policy/" })} style={{ display: 'flex', paddingBottom: 12, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', flexDirection: 'row', marginTop: 12, alignItems: 'center' }}>
                    <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <MaterialIcons name="policy" size={24} color="rgba(0,0,0,0.7)" />
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Privacy Policy</Text>
                        <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.4)' }}>Your data, you control</Text>
                    </View>
                    <View style={{ marginLeft: 'auto' }}>
                        <MaterialIcons name="navigate-next" size={24} color="rgba(0,0,0,0.7)" />
                    </View>
                </Pressable>
                <Pressable onPress={() => navigation.navigate("Aboutus")} style={{ display: 'flex', paddingTop: 12, flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <FontAwesome5 name="book" size={24} color="rgba(0,0,0,0.7)" />
                    </View>
                    <View style={{ marginLeft: 12 }}>
                        <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>About us</Text>
                        <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.4)' }}>More information about us</Text>
                    </View>
                    <View style={{ marginLeft: 'auto' }}>
                        <MaterialIcons name="navigate-next" size={24} color="rgba(0,0,0,0.7)" />
                    </View>

                </Pressable>
            </View> */}
            {
                token ? <View style={{ backgroundColor: 'white', marginTop: 24, borderRadius: 12, padding: 12 }}>


                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable onPress={() => {
                            Alert.alert("Log out", "Are you sure you want to log out ?", [
                                {
                                    text: "OK",
                                    onPress: () => {
                                        toLogout();

                                    }
                                },
                                {
                                    text: "Cancel",
                                }
                            ])


                        }} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
                            <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <MaterialIcons name="logout" size={24} color="rgba(0,0,0,0.7)" />
                            </View>
                            <View style={{ marginLeft: 12 }}>
                                <Text style={{ fontSize: 16, color: "rgba(0,0,0,0.7)" }}>Logout</Text>
                            </View>
                            <View style={{ marginLeft: 'auto' }}>
                                <MaterialIcons name="navigate-next" size={24} color="rgba(0,0,0,0.7)" />
                            </View></Pressable>
                    </View>

                </View> : null

            }

            <View style={{ marginBottom: 32, marginTop: 12, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ textAlign: 'center', color: 'rgba(0,0,0,0.4)', marginRight: 12 }}>
                    {/* version {Contansts.expoConfig.version} */}
                    version 1.1.5
                </Text>
                {!isUpdate && <Pressable onPress={Updates.reloadAsync} style={{ paddingHorizontal: 12, paddingVertical: 4, backgroundColor: config.primaryColor, borderRadius: 24 }}>
                    <Text style={{ color: 'white', fontSize: 10 }}>New Version</Text>
                </Pressable>}
            </View>
        </ScrollView>}

        <AccountModal visible={visible} onExits={() => setVisible(false)} />
    </View>)
}