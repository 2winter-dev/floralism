import { View, Text, ScrollView, Pressable, Dimensions, Image, KeyboardAvoidingView, TextInput, Linking, Platform, AppState } from "react-native";
import AccountInput from "../../../components/AccountInput";
import { Entypo, AntDesign, FontAwesome } from "@expo/vector-icons";
import AccountFlowButton from "../../../components/AccountFlowButton";
import { useNavigation } from "@react-navigation/native";
import CountryPicker from 'react-native-country-picker-modal'
import { Ionicons } from "@expo/vector-icons";
import config from "../../../common/config";
import { useState, useEffect, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import LoginAPI from '../../../api/LoginAPI';
import { useCommonActions, useDevToken, useTimer } from "../../../common/store/user";
import LoginHorizontalMethod from "../../../components/LoginHorizontalMethod";
import { ActivityIndicator } from "react-native";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import * as Haptics from 'expo-haptics';
import { LinearGradient } from "expo-linear-gradient";
export default function LoginWithPhone() {

    const navigation = useNavigation();
    const devToken = useDevToken();
    const logout = useCommonActions().logout;
    const setToken = useCommonActions().setToken;
    const setUser = useCommonActions().setUser;
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);
    // const mtimer = useTimer();
    const [mtimer, setTimer] = useState(-1);//触发时间戳
    const [time, setTime] = useState(0);//倒计时文字
    // const setTimer = useCommonActions().setTimer;
    const setLoginMethod = useCommonActions().setLoginMethod;
    // const [account, setPhone] = useState("");
    const [account, setAccount] = useState("");
    const [haccount, setHAccount] = useState("");
    const [selectedId, setSelectedId] = useState(false);
    const [password, setPassword] = useState("");
    const [method, setMethod] = useState(1);
    const [loading, setLoading] = useState(false);
    const [flag, setFlag] = useState(0);
    const [wrong, setWrong] = useState("");
    const [countryCode, setCountryCode] = useState('AU')
    const [country, setCountry] = useState({ "callingCode": ["61"], "cca2": "AU", "currency": ["AUD"], "flag": "flag-au", "name": "Australia", "region": "Oceania", "subregion": "Australia and New Zealand" })
    const [visible, setVisible] = useState(false);
    const [withCountryNameButton, setWithCountryNameButton] = useState(false)
    const [withFlag, setWithFlag] = useState(true)
    const [withEmoji, setWithEmoji] = useState(true)
    const [withFilter, setWithFilter] = useState(true)
    const [withAlphaFilter, setWithAlphaFilter] = useState(false)
    const [withCallingCode, setWithCallingCode] = useState(false);
    const [confirm, setConfirm] = useState(false);
    // const logout=useCommonActions().logout;
    // //////////console.log(route.params.flag);
    // ////console.log("========");
    // ////console.log(devToken);
    const onSelect = (country) => {
        //////////console.log(country);
        setCountryCode(country.cca2)
        setCountry(country)
    }
    const sendPhoneMess = useMutation({
        mutationFn: (data) => LoginAPI.sendPhoneMess({ mobile: account, area_code: country?.callingCode[0], event: "emaillogin" }),
        mutationKey: ['sendPhoneMess'],
    })


    // Handle the button press
    async function signInWithPhoneNumber() {
        if (sendPhoneMess.isLoading) return;
        if (account === wrong) {
            // Toast.show("invalid phone number");
            return;
        }
        console.log("11");
        sendPhoneMess.mutate(null, {
            onSuccess: (res) => {
                setTime(60);
                ////console.log("===");
                ////console.log(res);
                setTimer(Date.now());
                // setTimeout(()=>{

                // },300)
                let d = new Date();
                ////console.log(d.getTime()+60000);
                ////console.log(new Date(d.getTime()+60000));

            },
            onError: (error) => {
                setWrong(account);
                if (error instanceof Error) {
                    Toast.show(error.message);
                } else {
                    Toast.show(JSON.stringify(error));
                }
                // setLoading(false);
            }
        })
    }


    const googleLogin = useMutation({
        mutationFn: (data) => LoginAPI.googleLogin(data),
        mutationKey: ['googleLogin'],
    })
    //Verify the code
    async function confirmCode() {
        if (password.length !== 6) {
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
            setLoading(false);
            Toast.show("Verification Code is incorrect")
            return;
        }
        toLogin();
        //
    }


    const toLogin = () => {
        //////console.log("====================");
        // //////console.log(res.user.uid);
        // setLoading(true)
        ////console.log("2")
        LoginByTelWithCode.mutate(
            { account: `${account}`, area_code: `${country.callingCode[0]}`, exponent_push_token: devToken, validation_type: "firebase_validation", expo_token: "", code: password, device: Platform.OS },
            {
                onError(error, variables, context) {

                    if (error instanceof Error) {
                        Toast.show(error.message);
                    } else {
                        Toast.show(JSON.stringify(error));
                    }
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                    setLoading(false);
                },
                onSuccess(data, variables, context) {
                    ////console.log(data);
                    setUser(data.userinfo);
                    setToken(data.token);
                    setLoginMethod("phone");
                    navigation.popToTop();
                    setLoading(false);
                },
            }
        );
        //API Response
    };

    const Login = () => {
        ////console.log(selectedId);
        ////console.log(account, password)
        // if (confirm) {
        //     // Toast.show("");
        //     return;
        // }


        if (account === "" || password === "") {
            if (account === "") {
                return Toast.show("Please enter your account");
            }
            if (!method) {
                Toast.show("Please enter your mobile or password");
                return;
            } else {
                Toast.show("Please enter the verification code");
                return
            }
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        }

        console.log("1");

        // if (!selectedId) {
        //     Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        //     Toast.show("Please agree to our terms and privacy policy");
        //     return;
        // }
        setLoading(true);
        ////console.log(method)
        method ?
            confirmCode()
            :
            LoginByTelWithPassword.mutate({ account, password, exponent_push_token: devToken, device: Platform.OS }, {
                onSuccess: (res) => {
                    //////////console.log(res);
                    setUser(res.userinfo);
                    setToken(res.token);
                    setLoading(false);
                    setLoginMethod("phone");
                    navigation.popToTop();
                },
                onError: (res) => {
                    Toast.hide("tips");
                    Toast.show(res instanceof Error ? res.message : JSON.stringify(res), {
                        id: 'tips',
                    });
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                    setLoading(false);
                }
            })
        // navigation.navigate("Home");
        // setLoading(false);
    }
    // const Login=()=>{
    //     navigation.popToTop();
    // }
    useEffect(() => {
        ////console.log(account);
    }, [account])
    useEffect(() => {
        logout();
        GoogleSignin.signOut();
        return () => {
            setAccount("");
            setPassword("");
        }
    }, [])


    const LoginByTelWithPassword = useMutation({
        mutationKey: ['LoginByTelWithPassword'],
        mutationFn: (data) => LoginAPI.loginByPassword(data),
    })
    const LoginByTelWithCode = useMutation({
        mutationKey: ['LoginByTelWithCode'],
        mutationFn: (data) => LoginAPI.loginByCode(data),
    })

    useEffect(() => {

        let listener = AppState.addEventListener("change", () => {
            // //console.log(mtimer);
            // //console.log("1===");
            setTime((60 - (Date.now() - mtimer) / 1000).toFixed(0));
        })
        return () => {

            listener && listener.remove();
        }
    }, [mtimer])


    const timerTaskRef = useRef();

    useEffect(() => {
        // //console.log(mtimer, time);
        if (mtimer === -1) return;//stop初始化执行
        setTime(60);
    }, [mtimer])

    useEffect(() => {
        if (time === -1) return;
        if (timerTaskRef.current) clearInterval(timerTaskRef.current);
        timerTaskRef.current = setInterval(() => {
            //停止计时器
            if (time === 0) {
                clearInterval(timerTaskRef.current)
                timerTaskRef.current = null;
                return;
            }
            setTime(time - 1);
        }, 1000)

        return () => timerTaskRef.current && clearInterval(timerTaskRef.current)
    }, [time])

    return (
        // <KeyboardAvoidingView
        //     style={{ flex: 1, width: "100%" }}
        //     keyboardVerticalOffset={Dimensions.get("screen").height < 700 ? 18 : 0}
        //     enabled={true}
        //     behavior={Platform.OS === "ios" ? "padding" : "height"}
        // >
        //     <ScrollView style={{ marginTop: Dimensions.get("screen").height * 0.06, paddingHorizontal: 18 }}>
        //         <View style={{ flex: 1, height: Dimensions.get("window").height * 0.8 }}>
        //             <Pressable onPress={() => navigation.canGoBack && navigation.goBack()}>
        //                 <Ionicons name="arrow-back" style={{ width: 80 }} size={24} color="black" />

        //             </Pressable>
        //             <Text style={{ fontSize: 32, display: 'flex', marginTop: 36 }}>Welcome to NextChoc</Text>
        //             {/* <Text style={{ fontSize: 32 }}>NextChoc</Text> */}
        //             {/* <Text style={{ marginTop: 12, color: 'rgba(0,0,0,0.4)', fontSize: 18 }}>If you don't have an</Text> */}
        //             {/* <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}><Text style={{ color: 'rgba(0,0,0,0.4)', fontSize: 18 }}>account please </Text><Pressable onPress={() => navigation.navigate('SignUp')}><Text style={{ fontSize: 18, color: config.primaryColor }}>Sign up here</Text></Pressable></View> */}

        //             <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 24 }}>
        //                 Please Enter Your Phone number
        //             </Text>
        //             <View style={{ marginTop: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', height: 50, lineHeight: 50, paddingHorizontal: 12, width: '100%', borderColor: 'rgba(0,0,0,0.2)', borderWidth: 1, backgroundColor: 'rgba(0,0,0,0.06)', borderRadius: 24 }}>
        //                 <CountryPicker
        //                     {...{
        //                         countryCode,
        //                         withFilter,
        //                         withFlag,
        //                         withCountryNameButton,
        //                         withAlphaFilter,
        //                         withCallingCode,
        //                         withEmoji,
        //                         onSelect,
        //                     }}
        //                     visible={visible}
        //                 />
        //                 <Pressable style={{ marginRight: 12 }} onPress={() => {
        //                     // <Pressable style={{ marginRight: 12 }} onPress={() => {
        //                     //////console.log("1");
        //                     setVisible(true);

        //                 }}>
        //                     <Entypo name="chevron-down" size={16} style={{}} color="black" />
        //                 </Pressable>
        //                 <Text style={{ fontSize: 16, fontWeight: '600', marginRight: 12 }}>{"+" + country.callingCode[0]}</Text>
        //                 <TextInput style={{ flex: 1, paddingVertical: 12 }} value={haccount} onChangeText={(res) => {
        //                     ////console.log(num);
        //                     let num = res.trim();
        //                     setHAccount(res);
        //                     if (num[0] === "0") {
        //                         ////console.log(num.replace())
        //                         ////console.log("第一個是0");
        //                         setAccount(num.replace("0", ""))
        //                     } else setAccount(num);
        //                 }} placeholder="please enter your phone number"></TextInput>
        //             </View>
        //             {
        //                 flag !== 0 && <View style={{ marginTop: 16 }}>
        //                     {
        //                         (!method ?
        //                             <AccountInput title={''} input={password} onInput={setPassword} topStyle={{}} placeholder={"password"} type={'password'} />
        //                             : <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        //                                 <AccountInput title={''} maxLength={6} input={password} onInput={setPassword} topStyle={{ display: 'flex', flex: 1, marginRight: 12 }} placeholder={"code"} />
        //                                 {
        //                                     time
        //                                         <= 0
        //                                         ?
        //                                         <Pressable onPress={signInWithPhoneNumber} style={{ height: 45, width: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        //                                             <Text style={{ fontSize: 16 }}>Resend</Text>
        //                                         </Pressable>
        //                                         :
        //                                         <Text style={{ height: 45, width: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', lineHeight: 45 }}>{time}</Text>
        //                                 }
        //                             </View>)
        //                     }
        //                 </View>
        //             }

        //             {/* <AccountInput title={'Password'} topStyle={{ marginTop: 24 }} placeholder={"password"} type={'password'} /> */}


        //             <View style={{ marginTop: 16 }}>
        //                 {loading ? <ActivityIndicator size={'large'} color={config.primaryColor} /> : (flag === 0 ? <View style={{}}>
        //                     <AccountFlowButton title={'Continue'} onClick={() => {
        //                         ////console.log(1)
        //                         if (account) {
        //                             ////console.log(2)
        //                             ////console.log(method)
        //                             if (!selectedId) {
        //                                 Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        //                                 Toast.show("Please agree to our terms and privacy policy");
        //                                 return;
        //                             }
        //                             setFlag(1);
        //                             method && signInWithPhoneNumber();

        //                         } else {
        //                             Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        //                             Toast.show("please enter your phone first!");
        //                         }
        //                     }} />
        //                 </View> : <View style={{}}>
        //                     <AccountFlowButton title={'SIGN IN'} onClick={Login} />
        //                 </View>)}
        //             </View>
        //             {
        //                 <View style={{ width: '100%', marginTop: 16, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        //                     {
        //                         !method ? <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onPress={() => setMethod(1)}>
        //                             <FontAwesome name="exchange" style={{ marginRight: 8 }} size={16} color="black" />
        //                             <Text>switch to code</Text>
        //                         </Pressable> : <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onPress={() => setMethod(0)}>
        //                             <FontAwesome name="exchange" size={16} color="black" style={{ marginRight: 8 }} />
        //                             <Text>switch to password</Text>
        //                         </Pressable>
        //                     }
        //                     {!method && <Pressable style={{}} onPress={() => navigation.navigate("ForgetPassword.telver")}>
        //                         <Text>Forget password?</Text>
        //                     </Pressable>}
        //                 </View>
        //             }
        //             <View style={{ marginTop: 16, display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center', flexWrap: 'wrap' }}>

        //                 <View style={{ display: 'flex', flexDirection: 'row' }}>
        //                     <Pressable onPress={() => setSelectedId(!selectedId)} style={{ width: 16, height: 16, borderColor: 'black', borderWidth: 1, marginRight: 8, borderRadius: 4, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2, backgroundColor: selectedId ? config.primaryColor : '#fff' }}>
        //                         {selectedId && <AntDesign name="check" size={16} color={selectedId ? '#fff' : '#000'} style={{}} />}
        //                     </Pressable>
        //                     <Text style={{ lineHeight: 20, textAlign: 'center', fontSize: 11, color: 'gray' }}>By logging in you have agreed to our </Text>
        //                     {/* <Pressable style={{ marginTop: 12, display: 'flex', textAlign: 'center', flexDirection: 'row', width: '100%', flexWrap: 'wrap' }}> */}
        //                     <Pressable onPress={() => Linking.openURL("https://nextchoc.com.au/terms-and-conditions/")}><Text numberOfLines={2} style={{ color: "#3567E7", lineHeight: 20, fontSize: 11 }}>Terms</Text></Pressable>
        //                     <Text style={{ lineHeight: 20, fontSize: 14, color: 'gray' }}> & </Text>
        //                     <Pressable onPress={() => Linking.openURL("https://nextchoc.com.au/privacy-policy/")}><Text numberOfLines={2} style={{ color: '#3567E7', lineHeight: 20, fontSize: 11 }}>Privacy policy</Text></Pressable>
        //                     {/* </Pressable> */}
        //                 </View>


        //             </View>



        //         </View>

        //         <LoginHorizontalMethod selectedId={selectedId} type="phone" />
        //     </ScrollView>

        // </KeyboardAvoidingView>)
        <KeyboardAvoidingView
            style={{ flex: 1, width: "100%", position: 'relative' }}
            keyboardVerticalOffset={0}
            enabled={true}
            behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
            <LinearGradient colors={['rgb(242,248,231)', '#ffffff', '#ffffff', '#ffffff']} style={{ flex: 1 }}>
                <ScrollView style={{ marginTop: Dimensions.get("screen").height * 0.06, paddingHorizontal: 18, display: 'flex' }} >
                    <View style={{ flex: 1, height: Dimensions.get("window").height * 1 }}>
                        <Pressable onPress={() => navigation.canGoBack() && navigation.goBack()}>
                            <Ionicons name="chevron-back" size={24} color="black" />
                        </Pressable>
                        <Text style={{ fontSize: 32, display: 'flex', marginTop: 36, fontWeight: 700, marginTop: 108 }}>Welcome to </Text>
                        <Text style={{ fontSize: 32, fontWeight: 700 }}>Good2Save</Text>
                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#909090', marginTop: 24, marginVertical: 52 }}>
                            Please Enter Your Email Address
                        </Text>
                        <View style={{ marginTop: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', height: 50, lineHeight: 50, paddingHorizontal: 12, width: '100%', borderColor: 'rgba(0,0,0,0.2)', borderWidth: 1, backgroundColor: 'rgba(0,0,0,0.06)', borderRadius: 24 }}>
                            <CountryPicker
                                {...{
                                    countryCode,
                                    withFilter,
                                    withFlag,
                                    withCountryNameButton,
                                    withAlphaFilter,
                                    withCallingCode,
                                    withEmoji,
                                    onSelect,
                                }}
                                visible={visible}
                            />
                            <Pressable style={{ marginRight: 12, display: 'flex', flexDirection: 'row' }} onPress={() => {
                                // <Pressable style={{ marginRight: 12 }} onPress={() => {
                                //////console.log("1");
                                setVisible(true);

                            }}>
                                <Entypo name="chevron-down" size={16} style={{}} color="black" />

                            </Pressable>
                            <View style={{ width: 1, height: '100%', backgroundColor: 'rgba(0,0,0,0.2)', marginRight: 12 }}></View>
                            <Text style={{ fontSize: 16, fontWeight: '600', marginRight: 12 }}>{"+" + country.callingCode[0]}</Text>
                            <TextInput style={{ flex: 1, paddingVertical: 12 }} value={haccount} onChangeText={(res) => {
                                ////console.log(num);
                                let num = res.trim();
                                setHAccount(res);
                                if (num[0] === "0") {
                                    ////console.log(num.replace())
                                    ////console.log("第一個是0");
                                    setAccount(num.replace("0", ""))
                                } else setAccount(num);
                            }} placeholder="please enter your phone number"></TextInput>
                        </View>
                        {error1 && <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                            <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: 'red', marginRight: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                <Text style={{ color: 'white' }}>!</Text>
                            </View>
                            <Text style={{ color: 'red' }}>Phone number is invalid</Text>
                        </View>}
                        {
                            (!method ?
                                <AccountInput title={'Password'} input={password} onInput={setPassword} topStyle={{ marginTop: error1 ? 8 : 16 }} placeholder={"password"} type={'password'} />
                                : <View style={{ marginTop: 16, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                    <AccountInput title={'Verify Code'} input={password} onInput={setPassword} maxLength={6} topStyle={{ display: 'flex', flex: 1, marginRight: 12 }} placeholder={"Verify Code"} />
                                    {!time ?
                                        <Pressable onPress={signInWithPhoneNumber} style={{ height: 45, width: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Text style={{ fontSize: 16 }}>Resend</Text>
                                        </Pressable>
                                        :
                                        <Text style={{ height: 45, width: 120, display: 'flex', alignItems: 'center', justifyContent: 'center', textAlign: 'center', lineHeight: 45 }}>{time}</Text>
                                    }
                                </View>)
                        }
                        {error2 && <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                            <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: 'red', marginRight: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                <Text style={{ color: 'white' }}>!</Text>
                            </View>
                            <Text style={{ color: 'red' }}>{!method?'Verification code is invalid':'Password is invalid'}</Text>
                        </View>}

                        <View style={{ marginTop: 16 }}>
                            {
                                (loading[0] ? <ActivityIndicator size={'large'} color={config.primaryColor} /> : <AccountFlowButton title={'SIGN IN'} onClick={Login} />)
                            }
                        </View>

                        {!method ? <Pressable style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 16 }} onPress={() => setMethod(1)}>

                            <Text style={{ color: '#909090' }}>Login with verification code</Text>
                        </Pressable> : <Pressable style={{ display: 'flex', justifyContent: 'center', flexDirection: 'row', alignItems: 'center', marginTop: 16 }} onPress={() => setMethod(0)}>

                            <Text style={{ color: '#909090' }}>Login with password</Text>
                        </Pressable>}
                        {
                            <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:16}}>
                                <Text style={{color:'#909090'}}>Forget password?</Text><Pressable onPress={()=>navigation.navigate("ForgetPassword.telver")}><Text style={{color:config.text_color_2}}>Reset</Text></Pressable>
                            </View>
                        }

                        <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 79 }}>
                            <Pressable>
                                <Text style={{ fontSize: 17, fontWeight: '500' }}>Search nearby</Text>
                            </Pressable>
                        </View>


                        <View style={{ height: 1, width: '100%', backgroundColor: 'rgba(0,0,0,0.1)', marginTop: 22 }}></View>

                        <View style={{ marginTop: 22, display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>

                            <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 8, alignItems: 'center', justifyContent: 'center', fontWeight: '500' }}>
                                <Text style={{ lineHeight: 20, textAlign: 'center', fontSize: 12, fontWeight: '500' }}>By signing up agree with Good2Save's </Text>
                                <Pressable onPress={() => Linking.openURL("https://nextchoc.com.au/terms-and-conditions/")}><Text numberOfLines={2} style={{ color: "#3567E7", lineHeight: 20, fontSize: 12, fontWeight: '500' }}>Terms & Conditions</Text></Pressable>
                                <Text style={{ lineHeight: 20, fontSize: 12, fontWeight: '500' }}> and </Text>
                                <View><Pressable onPress={() => Linking.openURL("https://nextchoc.com.au/privacy-policy/")}><Text numberOfLines={2} style={{ color: '#3567E7', lineHeight: 20, fontSize: 12, fontWeight: '500' }}>Privacy policy</Text></Pressable></View>
                            </View>

                        </View>
                    </View>
                    {/* <LoginHorizontalMethod selectedId={selectedId} type="email" /> */}
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>)
}