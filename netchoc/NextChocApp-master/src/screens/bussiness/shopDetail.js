import { AntDesign, Ionicons, Feather, Foundation, MaterialIcons, EvilIcons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import { ImageBackground, Modal, View, Text, Image, ScrollView, Pressable, StatusBar, Dimensions, ActivityIndicator, PanResponder, Animated, Platform, TextInput, KeyboardAvoidingView } from "react-native";
import { useEffect, useState, useRef, useMemo } from "react";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import config from "../../common/config";
import RateModal from "../../components/RateModal";
import { useMutation, useQuery } from "@tanstack/react-query";
import { WebView } from 'react-native-webview';
import ShopAPI from "../../api/ShopAPI";
import { RefreshControl } from "react-native";
import OrderAPI from "../../api/OrderAPI";
// import Toast, { Duration, Position } from 'react-native-mix-toast';
import { ToastProvider } from "react-native-toast-notifications";
import { useDevToken, useToken } from "../../common/store/user";
import StripePayment from "../Payment/StripePayment";
import { PlatformPayButton, PlatformPay, usePlatformPay, initStripe, isPlatformPaySupported } from '@stripe/stripe-react-native'
import { API_URL } from "../../common/api/API_URL";
import { navigationRef } from "../../common/utils";
import { BlurView } from 'expo-blur';
import * as Linking from 'expo-linking';
import LoginAPI from "../../api/LoginAPI";
import analytics from '@react-native-firebase/analytics'; import { Entypo } from "@expo/vector-icons";
import { Share } from "react-native";
import Lottie from 'lottie-react-native';
import * as Haptics from 'expo-haptics';
import { Audio } from 'expo-av';
export default function ShopDetail({ route }) {
    const token = useToken();
    const coupon = useRef();

    const selectStatus = useState(false);//地图选择状态
    const [gvisible, setGVisible] = useState(false);
    const navigation = useNavigation();
    const [url, setUrl] = useState("");
    const [visible, setVisible] = useState(false);
    const [modalItem, setModelItem] = useState({})
    const [bkvisible, setBKVisible] = useState(false);
    const [reverseVisible, setReverseVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [price, setPrice] = useState(0);
    const [p_visible, setP_visible] = useState(false);
    const [type, setType] = useState("");
    const [isUse, setIsUse] = useState(0);
    const height = useRef(new Animated.Value(0)).current;
    const [is_subscribe, setIs_subscribe] = useState(false);
    const [timev, setTimev] = useState(false)
    const [desc, setDesc] = useState(false);
    const [pos, setPos] = useState({
        latitude: -33.88788,
        longitude: 151.18824,
    });
    const [finalprice, setFinalPrice] = useState({
        payment_amount: 0,
        amount: 0,
    })
    const [coupon_code, setCoupon_code] = useState("");
    const [opacity, setOpacity] = useState(1);
    const previewImg = useState(false);//预览图片
    const [image, setImage] = useState("");
    const [previewImgLoading, setPreviewImgLoading] = useState(true);//预览加载
    const [ratevisible, setRatevisible] = useState(false);
    const [goodsNumber, setGoodsNumber] = useState();
    const [favor, setFavor] = useState(false);
    const [content, setContent] = useState("");
    const [flag, setFlag] = useState(true);
    const [isClick, setIsClick] = useState(0);
    const [free, setFree] = useState({});
    const [fees, setFees] = useState(0);
    const devToken = useDevToken();
    const couponCanUse = useMutation({
        mutationFn: (data) => ShopAPI.CouponCanUse(data),
        mutationKey: ['couponCanUse'],
    })
    const describe = useMutation({
        mutationFn: (data) => ShopAPI.describeShop(data),
        mutationKey: ['describe'],
    })
    const undescribe = useMutation({
        mutationFn: (data) => ShopAPI.undescribe(data),
        mutationKey: ['undescribe']
    })
    const useCouponse = (data) => {
        if (coupon_code.trim() === "") return;
        setFlag(false);
        couponCanUse.mutate({ goods: data, token, coupon_code }, {
            onSuccess: (res) => {
                console.log(res);
                setIsUse(1);
                setFlag(false);
                // setPrice(res.amount);
                // setTotalPrice(res.payment_amount);
                setFinalPrice({ payment_amount: res.payment_amount, amount: res.amount });
                // Toast.show("Your have already use the coupon");
            },
            onError: (res) => {
                Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
                setIsUse(2);
                setFlag(true);
            }
        })
    }
    // useEffect(()=>{
    //     console.log(isClick);
    //      if(isClick==1){
    //         //关闭图片modal打开评论modal
    //         console.log("状态改变1")
    //         setRatevisible(false);
    //         previewImg[1](true);
    //      }else if(isClick==2){
    //        //打开图片modal关闭评论modal
    //        console.log("状态改变2")
    //        previewImg[1](false);
    //         setRatevisible(true);

    //      }
    // },[isClick])
    const urlScheme = (mapName) => {
        // const scheme = Platform.select({ ios: 'maps://0,0?q=', android: 'geo:0,0?q=' });

        const scheme = mapName === 'ios' ? 'maps://0,0?q=' : 'geo:0,0?q=';
        const latLng = `${pos.latitude},${pos.longitude}`;
        const label = `${fetchShopDetail?.data?.merchant?.merchant_name}`;
        const url = mapName === 'ios' ? `${scheme}${label}@${latLng}` : (
            Platform.OS === "ios" ? `googleMaps://?center=${latLng}&zoom=14&views=traffic&q=${label}` : `google.navigation:q=${label}&center=${latLng}&zoom=14&views=traffic`
        )
            // `googleMaps://?center=${latLng}&zoom=14&views=traffic&q=${label}`
            // `${scheme}${label}@${latLng}`

            ;

        Linking.openURL(url).catch((er) => {
            //////console.log(er);
            //////console.log(url)
            console.log(er)
        });
        selectStatus[1](false)
    }
    const increase = (index, item) => {
        // if(fetchShopDetail?.data?.merchant?.is_closed){
        //     Toast.show("Store closed");
        //     return;
        // }
        let res = goodsNumber;
        if (!res.length) return;
        //console.log("====")
        //////console.log(item)
        //console.log(res);
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        // //////console.log(res[index].)
        if (res[index].count >= item.count) {
            Toast.show("Sold Out")
            return;
        }
        res[index].count++;
        // //////////////console.log(index);
        setGoodsNumber([...res]);
        culTotalPrice()
    }
    const decrease = (index) => {
        let res = goodsNumber;
        if (!res.length) return;
        res[index].count--;
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        setGoodsNumber([...res]);
        culTotalPrice()
    }
    const modalContent = (props) => {
        setVisible(true);
        setContent(<View style={{}}>
            <View style={{ display: 'flex', alignItems: 'flex-start', paddingTop: 0 }}>
                <Image source={props.src} style={{ width: '100%', height: Dimensions.get('screen').width - 32, marginRight: 12, backgroundColor: 'rgba(0,0,0,0.2)', borderRadius: 15 }} />
                <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{props.title}</Text>
                    <Text style={{ fontSize: 16, marginTop: 12 }}>What's in the Box:</Text>
                    <Text numberOfLines={4} style={{ width: '100%', fontSize: 16, marginTop: 4 }}>{props.desc}</Text>
                </View>
            </View>
        </View>)
    }

    const { confirmPlatformPayPayment } = usePlatformPay();

    const culTotalPrice = () => {
        let totalPrice = 0; let p = 0;
        goodsNumber.map((item, index) => {
            totalPrice += item.count * item.discount_price;
            p += item.count * item.price;
        })
        console.log(totalPrice, p);
        let p_n = (totalPrice * 0.1).toFixed(2);
        let t_n = Math.floor(p * 10) / 100;
        console.log(p_n, t_n);
        console.log(totalPrice * 1 + p_n * 1)
        if (p_n > 5) {
            p_n = 5;
        } else {

        }
        setFees(p_n);
        //////////////console.log(totalPrice);
        setPrice(totalPrice);
        setTotalPrice(totalPrice);
        setFinalPrice({ amount: totalPrice, payment_amount: totalPrice })
    }

    async function playSound() {
        const _sound = new Audio.Sound();
        try {
            console.log('播放音頻')
            await _sound.loadAsync(require('../../assets/sounds/short-success-video.mp3'), { shouldPlay: true });
            await _sound.setPositionAsync(0);
            await _sound.playAsync();

        } catch (error) {
            console.log('播放失敗')
            console.error(error)
        }
    }

    useEffect(() => {

        return () => {

            fetchShopDetail.remove();

        }
    }, [])






    const fetchShopDetail = useQuery({
        queryFn: () => ShopAPI.fetchShopDetail({ merchant_id: route.params?.id, token }),
        queryKey: ['fetchShopDetail', route.params?.id],
        _onSuccess: (res) => {
            console.log("------");
            console.log(res);
            ////console.log(res?.merchant?.business_hours)
            setIs_subscribe(!!res.merchant.is_subscribe);
            setPos({ latitude: res.merchant.lat, longitude: res.merchant.lng });
            setContent(<View style={{ marginBottom: 48, marginTop: 0, padding: 16 }}>
                <Text style={{ width: '100%', textAlign: 'center', fontSize: 24, color: 'rgb(17,77,77)', paddingTop: 24 }}>Allergy warning</Text>
                <Text style={{ paddingHorizontal: 12, fontSize: 16, marginTop: 12 }}>{res.merchant.allergy_info}</Text>
                {/* <Text style={{ paddingHorizontal: 12, fontSize: 16, marginTop: 12 }}>i am a very very very very very very  very very  very very  very very  very very very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very i am a very very very very very very  very very  very very  very very  very very very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very i am a very very very very very very  very very  very very  very very  very very very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very  very very</Text> */}
            </View>);
            setFavor(res.merchant.is_favorite);
            let arr = [];
            res?.categories[0]?.goods.map((item, index) => {
                arr.push({ ...item, count: 0 });
            });
            //////////////console.log(arr);
            setGoodsNumber(arr);
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
    const collect = useMutation({
        mutationFn: () => ShopAPI.collectShop({ token, merchant_id: route.params?.id }),
        mutationKey: ['collect'],
    })
    const uncollect = useMutation({
        mutationFn: () => ShopAPI.uncollectShop({ token, merchant_id: route.params?.id }),
        mutationKey: ['uncollect'],
    })
    const CreateOrder = useMutation({

        mutationFn: (data) => OrderAPI.createOrder(data),
        mutationKey: ['CreateOrder'],
    })

    const clear = () => {
        setIsUse(0);
        setCoupon_code("");
        setFinalPrice({ amount: price.toFixed(2).toString(), payment_amount: totalPrice.toFixed(2).toString() })
        setFlag(true);
    }
    useEffect(() => {
        if (!p_visible) {
            setIsUse(0);
            setCoupon_code("");
            setFinalPrice({ amount: price, payment_amount: totalPrice })
            setFlag(true);
        }
    }, [p_visible])


    //获取支付密钥
    const fetchPaymentIntentClientSecret = async () => {
        // Fetch payment intent created on the server, see above
        //////console.log(totalPrice);
        let formdata = new FormData();
        formdata.append("amount", finalprice.amount);
        formdata.append("goods", JSON.stringify(goodsNumber.filter((item, index) => item.count !== 0)));
        formdata.append("merchant_id", route.params.id);
        formdata.append("payment_type", 'stripe');
        formdata.append("payment_amount", finalprice.payment_amount);
        formdata.append("lang", "en");
        isUse === 1 && formdata.append("coupon_code", coupon_code)
        const response = await fetch(`${API_URL}/api/order/create`, {
            method: 'POST',
            headers: {
                "Content-type": "multipart/form-data",
                "Authorization": `Bearer ${token}`
            },
            body: formdata
        });
        //url.payment_info.client_secret
        const res = (await response.json());
        setUrl(res);
        //////console.log('res ：：：：：：：；')
        //////console.log(res);
        if (res.code === 0) {
            return {
                status: false,
                msg: res.msg

            }
        }
        return {
            publishableKey: res.data.payment_info.publishable_key,
            clientSecret: res.data.payment_info.client_secret,
            status: res.code != 0,
            msg: res.msg,
            id: res.data.order_id
        }
    };

    useEffect(() => {
        ////console.log("0-0")
        ////console.log(finalprice.payment_amount);
    }, [finalprice.payment_amount])
    //支付
    const pay = async (type) => {
        const { clientSecret, publishableKey, status, msg, id } = await fetchPaymentIntentClientSecret();
        ////console.log(clientSecret);
        ////console.log(publishableKey);
        ////console.log(status);
        ////console.log(msg);
        if (!status) {
            alert(msg); return;
        }
        await initStripe({
            publishableKey: publishableKey,
            merchantIdentifier: "merchant.com.NextChoc",

        })
        let arr = goodsNumber.filter((item, index) => item.count !== 0);
        let cartItems = [];
        arr.map((item, index) => {
            cartItems.push({
                paymentType: 'Immediate',
                isPending: false,
                label: item.goods_name + " - NextChoc",
                amount: ((item.count * item.discount_price)).toString()
            })
        })
        if (Platform.OS === "ios") {
            if (isUse === 1) {
                cartItems.push({
                    paymentType: "Immediate",
                    isPending: false,
                    label: 'Preferential',
                    amount: ((finalprice.amount - finalprice.payment_amount).toFixed(2)).toString(),
                })
            }
            cartItems.push({
                paymentType: 'Immediate',
                isPending: false,
                label: "Fees",
                amount: fees,
            })
            cartItems.push({
                paymentType: 'Immediate',
                isPending: false,
                label: "Total",
                amount: finalprice.payment_amount,
            })
        }


        console.log(cartItems);
        const payConfig = {};
        let supportPay = await isPlatformPaySupported();
        //////console.log('是否支持apple pay！')
        //////console.log(supportPay)
        if (!supportPay) {
            setBKVisible(false);
            return Toast.show('Your device not support ' + (Platform.OS === 'android' ? 'GooglePay!' : 'ApplePay!'))
        }

        // paymentType: PaymentType.Deferred;
        // deferredDate: number;
        // label: string;
        // amount: string;

        if (type === 'ios') {
            payConfig.applePay = {
                currencyCode: 'aud',
                requiredShippingAddressFields: [
                    PlatformPay.ContactField.PostalAddress,
                ],
                requiredBillingContactFields: [PlatformPay.ContactField.PhoneNumber],
                merchantCountryCode: "AU",
                // merchant_name
                cartItems: cartItems,
                // cartItems:[{
                //     paymentType:'Immediate',
                //     isPending: false,
                //     label:"surprise box",
                //     amount:totalPrice
                // }]
            };
        } else {
            payConfig.googlePay = {
                merchantCountryCode: "AU",
                currencyCode: 'AUD',
                testEnv: __DEV__,
                billingAddressConfig: {
                    format: PlatformPay.BillingAddressFormat.Full,
                    // isPhoneNumberRequired: true,
                    // isRequired: true,
                },
            }

        }
        // console.warn(payConfig);

        const { error, paymentIntent } = await confirmPlatformPayPayment(
            clientSecret,
            payConfig
        );


        console.warn(paymentIntent)

        // ////console.log(error);
        if (error) {
            //////console.log(payConfig)

            console.warn(error);
            setBKVisible(false);
            clear();
            Toast.show(error.localizedMessage ?? error.message)

            // alert(error?.message);
            // Update UI to prompt user to retry payment (and possibly another payment method)
            return;
        }
        // alert('Success', 'The payment was confirmed successfully.');
        try {
            await playSound();
            console.log('音頻播放...');
            navigation.navigate("Bussiness.orderStatus", { id });
        } catch (e) {
            console.warn('音頻播放異常:');
            console.warn(e);
            navigation.navigate("Bussiness.orderStatus", { id });
        }

    };

    const defaultPosition = Dimensions.get('screen').height * 0.5;//默认面板高度
    const scroll = useRef(new Animated.Value(Dimensions.get('screen').height)).current
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

                if (gestureState.dy < 0) {
                    return;
                }
                Animated.timing(scroll, {
                    toValue: gestureState.dy,
                    duration: 1,
                    useNativeDriver: true,
                }).start();

            },
            onPanResponderRelease: (evt, gestureState) => {
                if (gestureState.dy < 0) return;
                //中部向下滑动
                if (gestureState.moveY > defaultPosition) {
                    //滑动到最小化
                    Animated.timing(scroll, {
                        toValue: Dimensions.get('screen').height,
                        duration: 300,
                        useNativeDriver: true,
                    }).start(() => setVisible(false));

                }

            }, onPanResponderTerminate: (evt, gestureState) => {
            },
            onShouldBlockNativeResponder: (evt, gestureState) => false,
        });
    const changewindow = () => {
        setVisible(true);
        Animated.timing(scroll, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true,
        }).start();
        setOpacity(0);
    }
    // const bt_panResponder =
    //     PanResponder.create({
    //         onPanResponderGrant: () => {

    //         },
    //         onStartShouldSetPanResponder: (evt, gestureState) => true,
    //         onStartShouldSetPanResponderCapture: (evt, gestureState) => false,
    //         onMoveShouldSetPanResponder: (evt, gestureState) => !(gestureState.dx === 0 || gestureState.dy === 0),
    //         // onMoveShouldSetPanResponder: (evt, gestureState) => true,
    //         onPanResponderTerminationRequest: (evt, gestureState) => true,
    //         onMoveShouldSetPanResponderCapture: (evt, gestureState) => false,

    //         onPanResponderMove: (evt, gestureState) => {
    //             // //console.log("===",gestureState.dy)
    //             // if (gestureState.dy < 0) {
    //             //     return;
    //             // }
    //             if (gestureState.dy < 0) {
    //                 changewindow();
    //             }


    //         },
    //         onPanResponderRelease: (evt, gestureState) => {
    //             // if (gestureState.dy < 0) return;
    //             //中部向下滑动
    //             // //console.log("===",gestureState.moveY)
    //             // if (gestureState.moveY < defaultPosition) {
    //             //     //滑动到最小化
    //             //     setVisible(true);
    //             //     Animated.timing(scroll, {
    //             //         toValue: 0,
    //             //         duration: 200,
    //             //         useNativeDriver: true,
    //             //     }).start();

    //             // }

    //         }, onPanResponderTerminate: (evt, gestureState) => {
    //         },
    //         onShouldBlockNativeResponder: (evt, gestureState) => false,
    //     });
    const isContent = () => {
        if (fetchShopDetail.data?.merchant?.content.split(" ")[0] === "Sold") {
            return `This merchant's NextChoc surprise box for the day is already sold out. You can subscribe to receive information about the next available purchase time from the merchant.`
        } else if (fetchShopDetail.data?.merchant?.content.split(" ")[0] === "On") {
            return `"On sale time" means you can purchase our NextChoc surprise box. The items in our 'NextChoc surprise box' are surplus, not sold in regular sales, and some may be close to their expiry date. However, it varies by store. Some stores offer products made that day, while others provide items nearing expiry but still within the shelf life. Rest assured, all products are within their expiry dates.`
        } else if (fetchShopDetail.data?.merchant?.content.split(" ")[0] === "Available") {
            return `"Available for reservation" means you can subscribe to get notified when the merchant lists a new 'NextChoc surprise box'. Once they're online, we'll inform you through a notification. If the merchant hasn't listed any or if they're sold out, it will show as 'Available for reservation'. This is because merchants adjust the stock based on their daily surplus products. We suggest subscribing to your favorite store to stay updated on their availability.`
        }
    }
    return (<View style={{ position: 'relative', flex: 1, overflow: 'hidden', marginTop: fetchShopDetail.isLoading ? 50 : 0 }}>
        {fetchShopDetail.isFetching ? <ActivityIndicator style={{ marignTop: 150 }} size={'large'} color={config.primaryColor} /> :
            (fetchShopDetail.isSuccess && <>

                <ImageBackground source={{ uri: fetchShopDetail.data.merchant.logo_format }} resizeMode={'cover'} style={{ height: Dimensions.get("window").width * 0.51, width: '100%', backgroundColor: 'rgb(0,0,0,0.4)' }} >

                    <View style={{ marginTop: Dimensions.get("window").height * 0.06, paddingHorizontal: 16, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Pressable onPress={() => { navigation.goBack() }} style={{ width: 30, height: 30, backgroundColor: 'rgba(211,211,211,0.6)', borderRadius: 80, alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name="chevron-back" size={16} color="#fff" />
                        </Pressable>
                    </View>
                    <View style={{ display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/shopIcon.png')} style={{ width: 70, height: 70 }} />
                    </View>
                    <View style={{ display: 'flex', width: '100%', alignItems: 'center', flexDirection: 'row', marginTop: 12, marginHorizontal: 12 }}>
                        <Text style={{ fontSize: 14, color: config.text_color_2, paddingHorizontal: 16, paddingVertical: 4, backgroundColor: '#FFE6AE', borderRadius: 20, marginRight: 6 }}>New</Text>
                        <Text style={{ fontSize: 14, color: config.text_color_2, paddingHorizontal: 16, paddingVertical: 4, backgroundColor: '#FFE6AE', borderRadius: 20, marginRight: 6 }}>Sold out</Text>
                    </View>
                    <Pressable onPress={async () => {

                        setImage(fetchShopDetail.data.merchant.logo_format);
                        previewImg[1](true);
                    }} style={{ width: '100%', height: Dimensions.get("window").height * 0.3 }}>

                    </Pressable>
                </ImageBackground>
                <View style={{ position: 'absolute', display: 'flex', width: '100%', backgroundColor: '#FEFAF7', left: 0, right: 0, bottom: 0, height: Dimensions.get("window").height * 0.80, borderColor: 'rgba(0,0,0,0.4)', borderWidth: 0.5, borderBottomWidth: 0, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
                    <ScrollView style={{ display: 'flex', flex: 1 }}>
                        <View style={{ display: 'flex', flex: 1, borderTopLeftRadius: 12, borderTopRightRadius: 12, padding: 16, paddingBottom: 0 }}>
                            <View style={{}}>
                                <View style={{ display: 'flex', width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                    <Text numberOfLines={2} style={{ fontSize: 20, fontWeight: 'bold', flex: 1, display: 'flex', flexWrap: 'wrap' }}>{fetchShopDetail.data.merchant.merchant_name ?? "empty"}</Text>
                                    <Pressable style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                        <Text style={{ fontSize: 10, marginRight: 4, color: config.text_color_1 }}>More info about the store</Text>
                                        <View style={{ width: 15, height: 15, borderRadius: 50, backgroundColor: 'rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                            <Ionicons name="chevron-forward" size={10} color="black" />
                                        </View>
                                    </Pressable>
                                </View>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                                    <Text>4.3</Text>
                                    <View>
                                        <AntDesign name="star" size={18} color="rgb(240,185,55)" style={{ marginRight: 4 }} />
                                    </View>
                                    <Text style={{ marginLeft: 8 }}>(200+rating)</Text>
                                    <View style={{ marginLeft: 4, width: 5, height: 5, borderRadius: 50, backgroundColor: config.text_color_2 }}></View>
                                    <Text style={{ marginLeft: 4 }}>1.4km</Text>
                                </View>
                                <View style={{ backgroundColor: '#E3EEEE', display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, marginVertical: 12, paddingVertical: 4, borderRadius: 22 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../../assets/images/carbonNeutral1.png')} style={{ width: 30, height: 30 }} />
                                        <Text style={{ fontSize: 14, color: '#006260', marginLeft: 6, fontWeight: '500' }}>Totally avoided</Text>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#006260' }}>{fetchShopDetail?.data?.merchant?.co2 ?? 0}</Text>
                                        <Text style={{ fontWeight: '500', marginLeft: 2 }}>kg</Text>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        {/* <Text style={{fontSize:14,fontWeight:'bold',color:'#006260'}}>{fetchShopDetail?.data?.merchant?.co2 ?? 0}</Text> */}
                                        <Text style={{ fontSize: 12 }}>CO2e for our Earth</Text>
                                    </View>
                                </View>
                                <ImageBackground style={{ width: '100%', height: 240 }} source={require('../../assets/images/Subtract.png')}>
                                    <View style={{ height: '40%', display: 'flex', flexDirection: 'row', alignItems: 'flex-start', padding: 12 }}>
                                        <View>
                                            <Image source={require('../../assets/images/vegetable.png')} style={{ width: 60, height: 60 }} />
                                        </View>
                                        <View style={{ display: 'flex', flex: 1, marginLeft: 4 }}>
                                            <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 6, alignItems: 'center' }}>
                                                <Image source={require('../../assets/images/package.png')} style={{ width: 15, height: 15, objectFit: 'contain' }} />
                                                <Text style={{ marginLeft: 4, fontWeight: 'bold', fontSize: 10 }} numberOfLines={2}>1</Text>
                                            </View>
                                            <View style={{ display: 'flex', flexDirection: 'row', marginBottom: 6, alignItems: 'center' }}>
                                                <Image source={require('../../assets/images/clock.png')} style={{ width: 15, height: 15, objectFit: 'contain' }} />
                                                <View style={{ display: 'flex', justifyContent: 'flex-start', marginLeft: 4, flexDirection: fetchShopDetail?.data?.merchant?.business_hours2 ? 'column' : 'row', alignItems: fetchShopDetail?.data?.merchant?.business_hours2 ? 'baseline' : 'center', flex: 1, borderBottomColor: 'black' }}>
                                                    <View style={{ display: 'flex', flexWrap: 'wrap', flexDirection: 'row' }}>
                                                        <Text style={{ fontSize: 10, fontWeight: 'bold', }}>Collect : Today </Text>
                                                        <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>{fetchShopDetail?.data?.merchant?.business_hours ?? "9:00-18:00"}</Text>
                                                        {!!fetchShopDetail?.data?.merchant?.business_hours2 && <Text style={{ fontSize: 10, fontWeight: 'bold', color: 'black' }}>{fetchShopDetail?.data?.merchant?.business_hours2}</Text>}
                                                    </View>
                                                </View>
                                            </View>
                                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <Image source={require('../../assets/images/position2.png')} style={{ width: 15, height: 15, objectFit: 'contain' }} />
                                                <Text style={{ marginLeft: 4, fontWeight: 'bold', fontSize: 10, display: 'flex', flexWrap: 'wrap' }} numberOfLines={2}>{fetchShopDetail?.data?.merchant?.merchant_address ? fetchShopDetail?.data?.merchant?.merchant_address : "No information available"}</Text>
                                            </View>
                                        </View>
                                        <View style={{ marginLeft: 4, display: 'flex', alignItems: 'flex-end' }}>
                                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: 'rgba(0,0,0,0.3)', textDecorationLine: 'line-through' }}>AU$30.33</Text>
                                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline' }}>

                                                <Text style={{ fontSize: 12, fontWeight: '500', color: config.text_color_2 }}>AU$</Text>
                                                <Text style={{ fontSize: 18, fontWeight: 'bold', color: config.text_color_2, letterSpacing: 1 }}>{11.9}</Text>
                                            </View>
                                            <Pressable style={{ paddingHorizontal: 8, borderRadius: 20, backgroundColor: '#25745B', marginTop: 8, paddingVertical: 2 }}><Text style={{ color: 'white', fontSize: 12 }}>Random Packs</Text></Pressable>
                                        </View>
                                    </View>
                                    <View style={{ height: 1, borderStyle: 'dashed', backgroundColor: 'rgba(0,0,0,0.3)', marginTop: 4, marginHorizontal: 12 }}></View>
                                    <View style={{ padding: 12 }}>
                                        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                                            <Text style={{ fontSize: 14, fontWeight: '600' }}>What you could get?</Text>
                                            <Pressable onPress={() => {
                                                setVisible(true);
                                                Animated.timing(scroll, {
                                                    toValue: 0,
                                                    duration: 500,
                                                    useNativeDriver: true,
                                                }).start();
                                            }} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 4, paddingVertical: 2, marginLeft: 8, backgroundColor: 'white', borderRadius: 22 }}>
                                                <Text style={{ fontSize: 12, color: config.text_color_2 }}>Ingredients & allergens</Text>
                                                <AntDesign name="right" size={12} color={config.text_color_2} />
                                            </Pressable>
                                        </View>
                                        <Text numberOfLines={5} style={{ width: '100%', fontSize: 12, lineHeight: 14, marginTop: 4 }}>
                                            Save a Surprise Bag of bagels! Save a Surprise Bag of bagels!Save a Surprise Bag of bagels!Save a Surprise Bag of bagels!Save a Surprise B ag of bagels!Save a Surprise Bag of bagels! Save a Surprise Bag of bagels!Save a Surprise Bag of bagels!Save a Surprise Bag of bagels!Save
                                        </Text>
                                        <View style={{ display: 'flex', alignItems: 'flex-start', marginTop: 8 }}>
                                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, borderRadius: 20, backgroundColor: 'white' }}>
                                                <Image source={require('../../assets/images/bakingIcon.png')} style={{ width: 12, height: 12, objectFit: 'contain' }} />
                                                <Text style={{ fontSize: 12, marginLeft: 4 }}>Baking</Text>
                                            </View>
                                        </View>
                                    </View>
                                </ImageBackground>

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
                                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>User reviews(0)</Text>
                                    </View>
                                </View>}
                            </View>
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
                                <Image source={require('../../assets/images/empty.png')} style={{ width: 40, height: 40 }} />
                                <Text style={{ marginTop: 16 }}>No Reviews Yet</Text>
                            </View>}



                            {/* <Pressable onPress={() => {
                            setVisible(true);
                            Animated.timing(scroll, {
                                toValue: 0,
                                duration: 500,
                                useNativeDriver: true,
                            }).start();
                        }} style={{ backgroundColor: '#FFA07F40', borderRadius: 4, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, paddingVertical: 4, marginTop: 8, width: 150 }}>
                            <Entypo name="warning" size={16} color="tomato" style={{}} />
                            <Text style={{ color: 'tomato', marginLeft: 4, fontWeight: 'bold', textAlign: 'center' }}>Allergy Warning</Text>
                        </Pressable> */}
                        </View>

                    </ScrollView>
                    <View style={{ display: 'flex', height: 80, marginBottom: 48 }}>
                        <Pressable onPress={() => {
                            setReverseVisible(true)
                        }} style={{ marginHorizontal: 16, display: 'flex', flex: 1, paddingVertical: 12, backgroundColor: config.text_color_2, marginTop: 24, borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Reserve</Text>
                        </Pressable>
                    </View>
                </View>
            </>)}
        <Modal statusBarTranslucent visible={bkvisible} onDismiss={() => setBKVisible(false)} transparent={true}>
            <View style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                {/* <StatusBar backgroundColor={'rgba(0,0,0,0.6)'}/> */}
                {/* <KeyboardAvoidingView enabled={true} behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={{ display: 'flex', flex: 1 }}> */}
                {/* <View style={{display:'flex',flex:1}}></View> */}

                <View style={{ backgroundColor: 'rgb(244,243,243)', maxHeight: Dimensions.get("screen").height * 0.8, borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
                    <View style={{ marginTop: 16, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Pressable onPress={() => { setBKVisible(false); clear(); }} style={{ marginLeft: 5, width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name="chevron-back" size={24} color="black" />
                        </Pressable>
                        <Text style={{ display: 'flex', flex: 1, textAlign: 'center', fontSize: 24, fontWeight: '500' }}>Confirmation of order</Text>
                        <View style={{ width: 70, height: 50 }}>

                        </View>
                    </View>

                    {/* <View style={{ backgroundColor: 'rgb(244,243,243)', paddingHorizontal: 16,marginTop:16 }}>
                        <View style={{ backgroundColor: 'white', borderRadius: 12, padding: 12 }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Text style={{ color: 'rgba(0,0,0,0.5)', marginLeft: 6 }}>Subtotal</Text>
                                <Text style={{ color: 'rgba(0,0,0,0.5)' }}>{config.current}{finalprice.payment_amount}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 6 }}>
                                <Text style={{ color: 'rgba(0,0,0,0.5)', marginLeft: 6 }}>Service fee</Text>
                                <Text style={{ color: 'rgba(0,0,0,0.5)' }}>{config.current}{fees}</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 6 }}>
                                <Text style={{ fontSize: 18, fontWeight: 'bold', marginLeft: 6 }}>Total</Text>
                                <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{config.current}{parseFloat(finalprice.payment_amount) + parseFloat(fees)}</Text>
                            </View>
                        </View>
                        <View style={{ backgroundColor: 'white', borderRadius: 12, marginTop: 16 }}>
                            <Pressable onPress={() => pay(Platform.OS)} style={{ marginTop: 12, marginHorizontal: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', borderBottomColor: 'rgba(0,0,0,0.1)', paddingBottom: 16, borderBottomWidth: 0.5 }}>
                                {<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={Platform.OS === "ios" ? require("../../assets/images/apple-pay.png") : require('../../assets/images/G_pay.png')} style={{ height: 30, width: 60, marginRight: 12 }} resizeMode="contain" />

                                </View>}
                                <Text style={{ marginLeft: 6 }}>{Platform.OS === "ios" ? "Apple Pay" : "Google Pay"}</Text>
                                <Ionicons name="arrow-forward" size={16} style={{ lineHeight: 30, marginLeft: 'auto' }} color="black" />
                            </Pressable>
                            <Pressable onPress={() => {
                                if (!token) {
                                    return navigationRef.navigate('SignIn.LoginWithPhone')
                                }
                                setType("paypal");
                                setLoading(true);
                                setBKVisible(false);
                                CreateOrder.mutate({ merchant_id: route.params.id, payment_type: 'paypal', amount: finalprice.amount, payment_amount: finalprice.payment_amount, goods: goodsNumber.filter((item, index) => item.count !== 0), token, coupon_code: isUse === 1 ? coupon_code : "" }, {
                                    onSuccess: (res) => {
                                        setLoading(false);
                                        setUrl(res);
                                        setP_visible(true);
                                    },
                                    onError: (res) => {
                                        //////////////console.log(res);
                                        console.log("123123");
                                        setP_visible(false);
                                        Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
                                    }
                                })
                                // setBKVisible(false);
                            }} style={{ marginTop: 12, marginHorizontal: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: 'rgba(0,0,0,0.1)', paddingBottom: 12, borderBottomWidth: 0.5 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ display: 'flex', width: 80, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                        <FontAwesome5 name="paypal" style={{ marginRight: 12 }} size={30} color='rgba(0,0,0,0.7)' /></View>
                                    <Text>Paypal</Text>
                                </View>
                                <Ionicons name="arrow-forward" size={16} style={{ lineHeight: 30 }} color="black" />
                            </Pressable>
                            <Pressable onPress={() => {
                                if (!token) {
                                    return navigationRef.navigate('SignIn.LoginWithPhone')
                                }
                                setType("stripe");
                                setLoading(true);
                                setBKVisible(false);
                                //console.log("1");
                                //console.log(goodsNumber.filter((item, index) => item.count !== 0));
                                CreateOrder.mutate({ merchant_id: route.params.id, payment_type: 'stripe', amount: finalprice.amount, payment_amount: finalprice.payment_amount, goods: goodsNumber.filter((item, index) => item.count !== 0), token, coupon_code: isUse === 1 ? coupon_code : "" }, {
                                    onSuccess: (res) => {
                                        setLoading(false);
                                        setUrl(res);

                                        setP_visible(true);
                                    },
                                    onError: (res) => {
                                        Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
                                    }
                                })
                            }} style={{ marginTop: 12, marginHorizontal: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', borderBottomColor: 'rgba(0,0,0,0.1)', paddingBottom: 12, borderBottomWidth: 0.5 }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ display: 'flex', width: 80, height: 30, alignItems: 'center', justifyContent: 'center' }}>
                                        <AntDesign name="creditcard" style={{ marginRight: 12 }} size={25} color='rgba(0,0,0,0.7)' />
                                    </View>
                                    <Text>Credit Card</Text>
                                </View>
                                <Ionicons name="arrow-forward" size={16} style={{ lineHeight: 30 }} color="black" />
                            </Pressable>
                        </View>

                    </View> */}
                    <View style={{ marginHorizontal: 24, overflow: 'hidden', marginTop: 32 }}>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/clock.png')} style={{ width: 20, height: 20 }} />
                            <Text style={{ marginLeft: 8, fontSize: 16 }}>Pickup time</Text>
                        </View>
                        <View style={{ marginLeft: 28, marginTop: 8 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>Today {fetchShopDetail?.data?.merchant?.business_hours}</Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 18 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../../assets/images/position3.png')} style={{ width: 20, height: 20, objectFit: 'contain' }} />
                                <Text style={{ marginLeft: 8, fontSize: 16 }}>Pickup address</Text>
                            </View>
                            <View style={{
                                marginLeft: 'auto',
                                paddingHorizontal: 8,
                                paddingVertical: 2,
                                backgroundColor: "#E3EEEE",
                                borderRadius: 30,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,

                                elevation: 5,
                            }}>
                                <Text style={{ color: '#006260', fontSize: 14 }}>{1.4 + "km"}</Text>
                            </View>
                        </View>
                        <View style={{ marginLeft: 28, marginTop: 8 }}>
                            <Text style={{ fontSize: 18, fontWeight: '500' }}>{fetchShopDetail?.data?.merchant?.merchant_address}</Text>
                        </View>
                    </View>

                    <View style={{
                        marginHorizontal: 24,
                        overflow: 'hidden',
                        marginTop: 18,
                        backgroundColor: "#E3EEEE",
                        padding: 16,
                        borderRadius: 30,
                        shadowColor: "#000",
                        shadowOffset: {
                            width: 0,
                            height: 2,
                        },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        marginBottom: 48,
                        elevation: 5,
                    }}
                    >
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginHorizontal: 12 }}>
                            <Text numberOfLines={1} style={{ fontSize: 18, fontWeight: '500', marginRight: 18 }}>Classic Package Magic Bag</Text>
                            <View style={{
                                paddingHorizontal: 8,
                                paddingVertical: 8,
                                backgroundColor: 'rgb(214,224,224)',
                                borderRadius: 30,
                                shadowColor: "#000",
                                shadowOffset: {
                                    width: 0,
                                    height: 2,
                                },
                                marginLeft: 'auto',
                                shadowOpacity: 0.25,
                                shadowRadius: 3.84,
                                elevation: 5,
                            }}
                            >
                                <Text style={{ fontSize: 14, color: 'rgb(255,82,82)', letterSpacing: 0.4 }}>Cancellation rules</Text>
                            </View>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 12, marginHorizontal: 12 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ display: 'flex', marginTop: 12, flexDirection: 'row', alignItems: 'baseline' }}>
                                    <Text style={{ fontSize: 14, color: 'rgb(0,98,96)' }}>AU$</Text>
                                    <Text style={{ fontSize: 28, color: 'rgb(0,98,96)', fontWeight: '500' }}>11.9</Text>
                                </View>
                                <Text style={{ display: 'flex', marginTop: 12, marginLeft: 12, textDecorationLine: 'line-through', flexDirection: 'row', alignItems: 'baseline' }}>
                                    <Text style={{ fontSize: 12, color: 'rgb(192,192,192)' }}>AU$</Text>
                                    <Text style={{ fontSize: 14, color: 'rgb(192,192,192)', fontWeight: '500' }}>11.9</Text>
                                </Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 'auto' }}>
                                <Text style={{
                                    fontSize: 24,
                                    fontWeight: '500',
                                    color: 'rgb(156,156,156)',
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    marginLeft: 'auto',
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                    backgroundColor: 'white',
                                    width: 35,
                                    height: 35,
                                    lineHeight: 35,
                                    borderRadius: 8,
                                    textAlign: 'center',
                                }}><AntDesign name="minus" size={24} color="rgb(196,196,196)" /></Text>
                                <Text style={{ fontSize: 24, width: 50, textAlign: 'center', fontWeight: '500', marginHorizontal: 8 }}>1</Text>
                                <Text style={{
                                    fontSize: 24,
                                    fontWeight: '500',
                                    color: 'rgb(156,156,156)',
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    marginLeft: 'auto',
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                    backgroundColor: 'rgb(0,98,96)',
                                    width: 35,
                                    height: 35,
                                    lineHeight: 35,
                                    borderRadius: 8,
                                    textAlign: 'center',
                                }}
                                ><AntDesign name="plus" size={24} color="black" /></Text>
                            </View>
                        </View>

                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 8, marginHorizontal: 12 }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <Image source={require('../../assets/images/ticket.png')} style={{ width: 20, height: 16, objectFit: 'contain' }} />
                                <Text style={{ fontSize: 14, color: '#006260', marginLeft: 8 }}>Coupon</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 'auto' }}>
                                <Text style={{ fontSize: 14, color: 'rgb(196,196,196)', marginLeft: 8 }}>No Coupon</Text>
                                <Entypo name="chevron-small-right" size={18} color="rgb(196,196,196)" />
                            </View>
                        </View>
                        <View style={{ width: '100%', marginVertical: 12 }}>
                            <Image source={require("../../assets/images/line.png")} style={{ width: '100%', height: 2 }} />
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginHorizontal: 12 }}>
                            <View>
                                <Text style={{ fontSize: 18 }}>Total</Text>
                            </View>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'baseline', marginLeft: 'auto' }}>
                                <Text style={{ fontSize: 14, color: 'rgb(0,98,96)' }}>AU$</Text>
                                <Text style={{ fontSize: 28, color: 'rgb(0,98,96)', fontWeight: '500' }}>11.9</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ display: "flex", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around', marginBottom: 18, marginHorizontal: 24 }}>
                        <View style={{ paddingHorizontal: 16, paddingVertical: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 20 }}>
                            <Image source={require('../../assets/images/apple1.png')} style={{ width: 50, height: 50 }} />
                            <Text style={{ fontSize: 18, marginTop: 8 }}>Apple pay</Text>
                        </View>
                        <View style={{ paddingHorizontal: 16, paddingVertical: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 20 }}>
                            <Image source={require('../../assets/images/apple1.png')} style={{ width: 50, height: 50 }} />
                            <Text style={{ fontSize: 18, marginTop: 8 }}>Apple pay</Text>
                        </View>
                        <View style={{ paddingHorizontal: 16, paddingVertical: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', borderRadius: 20 }}>
                            <Image source={require('../../assets/images/apple1.png')} style={{ width: 50, height: 50 }} />
                            <Text style={{ fontSize: 18, marginTop: 8 }}>Apple pay</Text>
                        </View>
                    </View>
                    <View style={{ display: 'flex', height: 80, marginBottom: 48 }}>
                        <Pressable onPress={() => {
                            
                        }} style={{ marginHorizontal: 16, display: 'flex', flex: 1, paddingVertical: 12, backgroundColor: config.text_color_2, marginTop: 24, borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Reserve</Text>
                        </Pressable>
                    </View>
                    {/* <View style={{ backgroundColor: 'rgb(244,243,243)', width: '100%', height: 10 }}>
                       
                    </View> */}
                    {/* <ScrollView style={{ height: Dimensions.get("screen").height * 0.4, backgroundColor: 'rgb(244,243,243)', width: '100%', marginBottom: 16, paddingHorizontal: 16, marginBottom: 16 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ alignItems: 'center' }}>
                        <View style={{ width: '100%', backgroundColor: 'white', borderRadius: 12, padding: 16, marginVertical: 16 }}>
                            <Text style={{ textAlign: 'center', marginVertical: 8, fontSize: 16, fontWeight: 'bold', color: config.primaryColor }}>- NextChoc-Must-Knows -</Text>
                            <Text style={{ opacity: 0.5 }}>    We rescue close-to-expiry goodies and pack them into surprise boxes for you! </Text>
                            <View style={{ marginTop: 12, position: 'relative' }}>
                                <View style={{ position: 'absolute', width: '20%', left: -5, height: 8, backgroundColor: config.primaryColor, opacity: 0.5, borderRadius: 24, top: 13 }}></View>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, opacity: 0.7 }}>Reservation Notice</Text>

                                <Text style={{ marginTop: 12 }}>Can't predict the exact goodies, it depends on the surplus stock. Let's embrace the mystery!</Text>
                            </View>
                            <View style={{ marginTop: 12, position: 'relative' }}>
                                <View style={{ position: 'absolute', width: '20%', left: -5, height: 8, backgroundColor: config.primaryColor, opacity: 0.5, borderRadius: 24, top: 13 }}></View>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, opacity: 0.7 }}>Pick-up Time</Text>
                                <Text style={{ marginTop: 6 }}>Don't miss out! Grab your box within the designated time. Orders not picked up on time become void, and, sorry, no refunds. Remember, it's all about getting it during the store's pick-up hours.</Text>

                            </View>
                            <View style={{ marginTop: 12, position: 'relative' }}>
                                <View style={{ position: 'absolute', width: '20%', left: -5, height: 8, backgroundColor: config.primaryColor, opacity: 0.5, borderRadius: 24, top: 13 }}></View>
                                <Text style={{ fontWeight: 'bold', fontSize: 15, opacity: 0.7 }}>Refund Policy</Text>
                                <Text style={{ marginTop: 6 }}>Quick decision? Cancel within 30 mins in 'My Orders.' Up to two hours before pick-up, you're good. Last two hours? No cancel, no refund. Stick to the plan!</Text>
                            </View>
                        </View>
                    </ScrollView> */}



                </View>
                {/* </KeyboardAvoidingView> */}
            </View>
        </Modal>
        {/**商品详情 */}
        <Modal statusBarTranslucent visible={gvisible} onDismiss={() => setGVisible(false)} transparent={true}>
            <BlurView tint="dark" intensity={10} style={{ display: 'flex', flex: 1, justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.2)' }} >
                <View style={{ display: 'flex', flex: 1 }}>
                    <Pressable onPress={() => setGVisible(false)} style={{ display: 'flex', flex: 1 }}>
                    </Pressable>
                    <View style={{ display: 'flex', flexDirection: 'row', height: 400 }}>
                        <Pressable onPress={() => setGVisible(false)} style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        </Pressable>
                        <View style={{ width: 300, height: 400, backgroundColor: 'white', borderRadius: 24 }}>
                            <ScrollView showsVerticalScrollIndicator={false}>
                                <Image source={{ uri: modalItem?.cover_image }} style={{ width: '100%', height: 200, borderTopLeftRadius: 24, borderTopRightRadius: 24 }} resizeMode="cover" />
                                <View style={{ padding: 16 }}>
                                    <Text style={{ textAlign: 'center', marginBottom: 12, fontSize: 18, fontWeight: 500 }}>
                                        {modalItem?.goods_name}
                                    </Text>
                                    <Text style={{}}> {modalItem?.description}</Text>
                                    {/* <Text>122222222222222222312412414444444444444434245454252461222222222222222223124124144444444444444342454542524612222222222222222231241241444444444444443424545425246122222222222222222312412414444444444444434245454252461222222222222222223124124144444444444444342454542524612222222222222222231241241444444444444443424545425246122222222222222222312412414444444444444434245454252461222222222222222223124124144444444444444342454542524612222222222222222231241241444444444444443424545425246122222222222222222312412414444444444444434245454252461222222222222222223124124144444444444444342454542524612222222222222222231241241444444444444443424545425246</Text> */}
                                </View>
                            </ScrollView>
                        </View>
                        <Pressable onPress={() => setGVisible(false)} style={{ display: 'flex', flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        </Pressable>
                    </View>
                    <Pressable onPress={() => setGVisible(false)} style={{ display: 'flex', flex: 1 }}>
                    </Pressable>
                </View>

            </BlurView>
        </Modal>

        {/** 过敏信息 */}

        <Modal statusBarTranslucent visible={visible} onRequestClose={() => {
            setVisible(false);
        }} transparent={true}>
            <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ backgroundColor: 'white', marginHorizontal: 16, borderRadius: 20, padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require("../../assets/images/star.png")} style={{ width: 80, height: 80 }} />
                    <Text style={{ marginTop: 16, fontSize: 16, fontWeight: 'bold', color: config.text_color_2 }}>At Good2Save, expect a daily dose of delightful surprises!</Text>
                    <View style={{ padding: 16, position: 'relative', backgroundColor: '#E3EEEE', marginTop: 24, borderRadius: 20 }} >
                        <View style={{ width: 30, height: 30, borderRadius: 50, backgroundColor: 'white', position: 'absolute', left: -15, top: '40%' }}></View>
                        <View style={{ width: 30, height: 30, borderRadius: 50, backgroundColor: 'white', position: 'absolute', right: -15, top: '40%' }}></View>
                        <Text style={{ fontSize: 18, }}>
                            We can't anticipate the specific items of the surprise box, as it depends on the surplus stock available in our stores for the day.
                        </Text>
                        <View style={{ marginVertical: 24, borderTopColor: config.text_color_1, borderTopWidth: 2, borderStyle: 'dashed' }}></View>
                        <Text style={{ fontSize: 18 }}>
                            lf you have dietary restrictions or allergens to consider, kindly get in touch with us before placing your order.
                        </Text>
                        <View style={{ marginVertical: 24, borderTopColor: config.text_color_1, borderTopWidth: 2, borderStyle: 'dashed' }}></View>
                        <Text style={{ fontSize: 18 }}>
                            We appreciate your contribution to reducing food waste as we join hands in our commitment to champion 'low carbon' practices and change the world, one bag at a time.
                        </Text>
                    </View>

                    <View style={{ marginTop: 24, display: 'flex', paddingHorizontal: 32, marginBottom: 24 }}>
                        <Pressable onPress={() => setVisible(false)} style={{
                            width: '100%', width: Dimensions.get("screen").width * 0.6, paddingVertical: 18, borderRadius: 40, backgroundColor: config.text_color_2, shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.29,
                            shadowRadius: 4.65,

                            elevation: 7,
                        }}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Got it!</Text>
                        </Pressable>
                    </View>
                </View>

            </View>
        </Modal>

        <Modal statusBarTranslucent visible={reverseVisible} onRequestClose={() => {
            setReverseVisible(false);
        }} transparent={true}>
            <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <View style={{ backgroundColor: 'white', marginHorizontal: 16, borderRadius: 20, padding: 16, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Image source={require("../../assets/images/mustHave.png")} style={{ width: 80, height: 80 }} />
                    <Text style={{ marginTop: 16, fontSize: 16, fontWeight: 'bold', color: config.text_color_2 }}>Good2Save Must-Knows</Text>
                    <View style={{ padding: 16, position: 'relative', backgroundColor: '#E3EEEE', marginTop: 24, borderRadius: 20 }} >
                        <View style={{ width: 30, height: 30, borderRadius: 50, backgroundColor: 'white', position: 'absolute', left: -15, top: '30%' }}></View>
                        <View style={{ width: 30, height: 30, borderRadius: 50, backgroundColor: 'white', position: 'absolute', right: -15, top: '30%' }}></View>
                        <View style={{ width: 30, height: 30, borderRadius: 50, backgroundColor: 'white', position: 'absolute', left: -15, top: '60%' }}></View>
                        <View style={{ width: 30, height: 30, borderRadius: 50, backgroundColor: 'white', position: 'absolute', right: -15, top: '60%' }}></View>
                        <Text style={{ fontSize: 18, }}>
                            We rescue close-to-expiry goodies and pack them into surprise bags for you!
                        </Text>
                        <View style={{ marginVertical: 8, borderTopColor: config.text_color_1, borderTopWidth: 2, borderStyle: 'dashed' }}></View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/cook.png')} style={{ width: 30, height: 30, marginRight: 4 }} />
                            <Text style={{ fontSize: 18 }}>Reservation Notice:</Text>
                        </View>
                        <Text style={{ fontSize: 18 }}>
                            Can't predict the exact goodies, it depends on the surplus stock.Let's embrace the mystery!
                        </Text>
                        <View style={{ marginVertical: 8, borderTopColor: config.text_color_1, borderTopWidth: 2, borderStyle: 'dashed' }}></View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/clock.png')} style={{ width: 20, height: 20, marginRight: 4 }} />
                            <Text style={{ fontSize: 18 }}>Pick-up Time:</Text>
                        </View>
                        <Text style={{ fontSize: 18 }}>
                            Don't miss out! Grab your bag within the designated time.Orders not picked up on time become void. and sorry, no refunds. Remember, it's all about getting it during the store's pick-up hours.
                        </Text>
                        <View style={{ marginVertical: 8, borderTopColor: config.text_color_1, borderTopWidth: 2, borderStyle: 'dashed' }}></View>
                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../../assets/images/refund.png')} style={{ width: 30, height: 30, marginRight: 4 }} />
                            <Text style={{ fontSize: 18 }}>Refund Policy:</Text>
                        </View>
                        <Text style={{ fontSize: 18 }}>
                            Quick decision? Cancel within 30mins in 'My Orders.Up to two hours before pick-up, you're good. Last two hours? No chance, no refund. Stick to the plan!
                        </Text>
                    </View>

                    <View style={{ marginTop: 24, display: 'flex', paddingHorizontal: 32 }}>
                        <Pressable onPress={() => navigation.navigate("Bussiness.EnterShop", { id: route.params.id })} style={{
                            width: '100%', width: Dimensions.get("screen").width * 0.6, paddingVertical: 18, borderRadius: 40, backgroundColor: config.text_color_2, shadowColor: "#000",
                            shadowOffset: {
                                width: 0,
                                height: 3,
                            },
                            shadowOpacity: 0.29,
                            shadowRadius: 4.65,

                            elevation: 7,
                        }}>
                            <Text style={{ fontSize: 24, fontWeight: 'bold', color: 'white', textAlign: 'center' }}>Got it!</Text>
                        </Pressable>
                    </View>
                    <Pressable onPress={() => setReverseVisible(false)} style={{ marginVertical: 12 }}>
                        <Text style={{ fontSize: 24, color: config.text_color_2, textAlign: 'center' }}>Go Back</Text>
                    </Pressable>
                </View>

            </View>
        </Modal>


        <RateModal visible={ratevisible} setImage={setImage} onOpen={() => setIsClick(1)} onExit={() => setRatevisible(false)} token={token} id={route.params.id} />


        {

            selectStatus[0] && <View style={{
                position: 'absolute', bottom: 0, left: 0,
                alignItems: 'center',
                justifyContent: 'flex-end',
                backgroundColor: 'rgba(0,0,0,0.5)', width: '100%', height: '100%',

            }}>

                <View style={{
                    marginBottom: 10,
                    backgroundColor: '#fff', padding: '5%', width: '90%', marginHorizontal: '5%', borderRadius: 10
                }}>
                    {Platform.OS === "ios" && <Pressable onPress={() => urlScheme('ios')} style={{ padding: 10, paddingBottom: 20, borderRadius: 5, borderBottomColor: 'rgba(0,0,0,1)', borderBottomWidth: 0.3, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}><Text style={{ fontWeight: 'bold' }}>Open Apple Map</Text>
                        <MaterialIcons name="navigate-next" size={24} color="black" />
                    </Pressable>}
                    <Pressable onPress={() => urlScheme('google')} style={{ padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}><Text style={{ fontWeight: 'bold' }}>Open Google Map</Text>
                        <MaterialIcons name="navigate-next" size={24} color="black" /></Pressable>
                </View>


                <Pressable onPress={() => selectStatus[1](false)} style={{ padding: 10, marginBottom: 50, backgroundColor: '#000', padding: '5%', width: '90%', marginHorizontal: '5%', borderRadius: 10 }}><Text style={{ fontWeight: 'bold', color: '#fff', textAlign: 'center' }}>Cancel</Text></Pressable>
            </View>

        }

        {/* 图片放大 */}
        {
            fetchShopDetail.isSuccess && previewImg[0] &&
            <View style={{ "position": "absolute", width: '100%', height: '100%', backgroundColor: '#000', left: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>


                <Pressable onPress={() => {
                    previewImg[1](false);
                    setPreviewImgLoading(true);
                }} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>

                    <Image onLoadEnd={() => setPreviewImgLoading(false)} style={{ width: '100%', height: 300, borderRadius: 5, alignSelf: 'center' }} resizeMode="contain" source={{ uri: image }} />
                    {previewImgLoading ? <ActivityIndicator style={{ position: 'absolute', left: '50%', right: '50%', top: '50%', zIndex: 999 }} size={'large'} /> : null}
                </Pressable>
                {previewImgLoading[0] && <View style={{ position: 'relative' }}><ActivityIndicator style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 10 }} size={'large'} /></View>}
            </View>
        }


        {/**支付 */}
        <Modal visible={p_visible} onRequestClose={() => {
            setP_visible(false)
            clear();
        }} transparent={true} animationType="slide">
            <StatusBar backgroundColor={'rgba(0,0,0,0.6)'} />
            <View style={{ display: 'flex', flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', justifyContent: 'flex-end' }}>
                <View style={{ backgroundColor: 'white', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
                    <Pressable onPress={() => { setP_visible(false); clear(); Toast.show("Payment interruption") }} style={{ marginVertical: 12, width: 50, height: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name="arrow-back" size={24} color="black" />
                    </Pressable>
                    {
                        type === "paypal" && <View style={{ height: 500, display: 'flex' }}>
                            {
                                loading ?
                                    <ActivityIndicator size={'large'} color={config.primaryColor} /> :
                                    <WebView
                                        style={{ flex: 1 }}
                                        source={{ uri: url?.payment_info?.approval_url }}
                                        onNavigationStateChange={async (navState) => {
                                            ////////console.log(navState);
                                            if (navState.url.includes("success=true")) {
                                                setP_visible(false);
                                                clear();
                                                try {
                                                    await playSound();
                                                    navigation.navigate("Bussiness.orderStatus", { id: url.order_id });
                                                } catch (e) {
                                                    console.warn('音頻播放異常 ：')
                                                    console.warn(e)
                                                }

                                            } else if (navState.url.includes("success=false")) {
                                                setP_visible(false);
                                                Toast.show("Payment failed");
                                                clear();
                                            }

                                        }}
                                    >
                                    </WebView>
                                // <Text>{url?.payment_info?.approval_url}</Text>
                            }
                        </View>}
                    {
                        type === "stripe" &&
                        (
                            url?.payment_info?.publishable_key &&
                            <StripePayment
                                payFailed={() => {
                                    setP_visible(false);
                                    // Toast.show("pay fail");
                                    clear();
                                }}
                                payFinish={async () => {
                                    setP_visible(false);
                                    clear();
                                    try {
                                        await playSound();
                                        navigation.navigate("Bussiness.orderStatus", { id: url.order_id });
                                    } catch (e) {
                                        console.warn('音頻播放異常:')
                                        console.warn(e)
                                    }

                                }}
                                data={{
                                    merchant: fetchShopDetail?.data?.merchant,
                                    goods: goodsNumber.filter((item, index) => item.count !== 0),
                                }}
                                client_secret={url.payment_info.client_secret}
                                publishableKey={url.payment_info.publishable_key}
                                payment_amount={finalprice.payment_amount}
                            />
                        )
                    }
                </View>
            </View>
        </Modal>
        {/* <ToastProvider
            renderType={{
                custom_type: (toast) => {
                    return <View style={{ padding: 15, backgroundColor: 'red' }}>
                        <View style={{}}>
                            <Text>{toast.message}</Text>
                        </View>
                    </View>
                }
            }}
        >
        
        </ToastProvider> */}
        <Modal statusBarTranslucent style={{}} visible={timev} onRequestClose={() => setTimev(false)} transparent={true}>
            <Pressable onPress={() => setTimev(false)} style={{ backgroundColor: 'rgba(0,0,0,0.6)', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <Pressable onPress={(e) => {
                    e.preventDefault();
                }} style={{ width: '80%', backgroundColor: 'white', borderRadius: 12, padding: 24 }}>
                    <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Free Gift</Text>
                    <Text style={{ marginTop: 18 }}>This is a limited-time event with only one reservation allowed per person. Please reserve as per your needs and avoid waste.</Text>
                    <Pressable onPress={() => {
                        if (!token) {
                            return navigationRef.navigate('SignIn.LoginWithPhone')
                        }
                        console.log("====");
                        console.log(free);
                        let goods = [{ ...free, count: 1 }]
                        setLoading(true);
                        setBKVisible(false);
                        CreateOrder.mutate({ merchant_id: route.params.id, payment_type: 'free_gift', amount: 0.00, payment_amount: 0.00, goods, token, coupon_code: isUse === 1 ? coupon_code : "" }, {
                            onSuccess: (res) => {
                                setTimev(false);
                                setLoading(false);
                                console.log(res);
                                navigation.navigate("Bussiness.orderStatus", { id: res.order_id });
                            },
                            onError: (res) => {
                                //////////////console.log(res);
                                setTimev(false);
                                console.log("123123");
                                setP_visible(false);
                                Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
                            }
                        })
                    }} style={{ alignItems: 'center', paddingHorizontal: 24, paddingVertical: 8, marginTop: 18, backgroundColor: config.primaryColor, borderRadius: 24 }} >
                        <Text style={{ color: 'white' }}>Reservation</Text>
                    </Pressable>
                </Pressable>
            </Pressable>
        </Modal>
        <Modal statusBarTranslucent style={{}} visible={desc} onRequestClose={() => setDesc(false)} transparent={true}>
            <Pressable onPress={() => setDesc(false)} style={{ backgroundColor: 'rgba(0,0,0,0.6)', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', justifyContent: 'flex-end' }}>
                <Pressable onPress={(e) => {
                    e.preventDefault();
                }} style={{ width: '100%', backgroundColor: 'white', borderRadius: 12, padding: 24 }}>
                    <Text>{isContent()}</Text>
                    <Pressable onPress={() => {
                        setDesc(false);
                    }} style={{ alignItems: 'center', paddingHorizontal: 24, paddingVertical: 8, marginTop: 18, backgroundColor: config.primaryColor, borderRadius: 24 }} >
                        <Text style={{ color: 'white' }}>Ok</Text>
                    </Pressable>
                </Pressable>
            </Pressable>
        </Modal>
    </View>)
}