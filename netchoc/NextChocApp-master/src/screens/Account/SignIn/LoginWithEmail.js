import { View, Text, Pressable, TouchableHighlight, ScrollView, KeyboardAvoidingView, Platform, Dimensions, ActivityIndicator, Linking, ImageBackground, Image } from "react-native";
import AccountInput from "../../../components/AccountInput";
import AccountFlowButton from "../../../components/AccountFlowButton";
import { useNavigation } from "@react-navigation/native";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import config from "../../../common/config";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import LoginAPI from '../../../api/LoginAPI'
import { useCommonActions, useDevToken } from "../../../common/store/user";
import LoginHorizontalMethod from "../../../components/LoginHorizontalMethod";
import { AntDesign } from "@expo/vector-icons";
import { registerForPushNotificationsAsync } from '../../../../NoticeUtils'
import * as Haptics from 'expo-haptics';
import { LinearGradient } from "expo-linear-gradient";
export default function LoginWithEmail() {
    const navigation = useNavigation();
    const loading = useState(false);
    const setUser = useCommonActions().setUser;
    const errorTips=useState();
    const setLoginMethod = useCommonActions().setLoginMethod;
    const setToken = useCommonActions().setToken;
    const [method, setMethod] = useState(0);//0是密碼登錄，1為驗證碼登錄
    const [account, setAccount] = useState("");
    const [password, setPassword] = useState("");
    const [selectedId, setSelectedId] = useState(false);
    const [flag, setFlag] = useState(0);
    const [time, setTime] = useState(0);
    const [error1, setError1] = useState(false);
    const [error2, setError2] = useState(false);
    // const [devToken,setDevToken]=useState("");
    const devToken = useDevToken();
    // ////console.log("========");
    // ////console.log(devToken);
    const googleLogin = useMutation({
        mutationFn: (data) => LoginAPI.googleLogin(data),
        mutationKey: ['googleLogin'],
    })

    const sendCode = () => {
        if (account.trim() === "") {
            Toast.show("please enter your account");
            return;
        }
        if (TosendCode.isLoading) return;
        TosendCode.mutate({ email: account, event: "emaillogin" }, {
            onSuccess: (res) => {
                setTime(60);
                Toast.show("successful send");
            },
            onError: (res) => {
                Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
            }
        })
    }
    const Login = () => {
        //////console.log(method, password);
        // if (!selectedId) {
        //     Toast.show("Please agree to our terms and privacy policy");
        //     Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
        //     return;
        // }
        if (password === "") {
            Toast.show(`Please enter your ${method ? "code" : "password"} !`);
            Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
            return;
        }

        loading[1](true);

        if (method) {
            if (password.length !== 6) {
                loading[1](false)
                Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                Toast.show("Verification Code is Incorrect")
                return;
            }
            LoginByEmailWithCode.mutate({ account, code: password, exponent_push_token: devToken, device: Platform.OS, validation_type: "email_validation" }, {
                onSuccess: (res) => {
                    //////////console.log(res);
                    setLoginMethod("Email");
                    setUser(res.userinfo);
                    setToken(res.token);
                    navigation.popToTop();
                    loading[1](false)
                },
                onError: (res) => {
                    loading[1](false)
                    Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                }
            })
        } else {
            LoginByEmailWithPassword.mutate({ account, exponent_push_token: devToken, password, device: Platform.OS }, {
                onSuccess: (res) => {
                    //////////console.log(res);
                    loading[1](false)
                    setLoginMethod("Email");
                    setUser(res.userinfo);
                    setToken(res.token);
                    navigation.popToTop();
                },
                onError: (res) => {
                    loading[1](false)
                    Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
                    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium)
                }
            })

        }


    }


    const LoginByEmailWithPassword = useMutation({
        mutationKey: ['LoginByEmailWithPassword'],
        mutationFn: (data) => LoginAPI.loginByPassword(data),
    })
    const LoginByEmailWithCode = useMutation({
        mutationKey: ['LoginByEmailWithCode'],
        mutationFn: (data) => LoginAPI.loginByCode(data),
    })
    const TosendCode = useMutation({
        mutationFn: (data) => LoginAPI.sendCode(data),
        mutationKey: ['sendCode'],
    })

    useEffect(() => {
        let timer;
        if (time>0) {
            timer = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        }else{
            setTime(0);
        }
        return () => {
            clearTimeout(timer)
        }
    }, [time])
    return (
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
                        {/* <Text style={{ fontSize: 32, display: 'flex', marginTop: 24 }}>JUST <Text style={{ color: config.primaryColor }}>Sign in,</Text></Text>
                    <Text style={{ fontSize: 32 }}>we'll do the work</Text> */}
                        <Text style={{ fontSize: 32, display: 'flex', marginTop: 36, fontWeight: 700, marginTop: 108 }}>Welcome to </Text>
                        <Text style={{ fontSize: 32, fontWeight: 700 }}>Good2Save</Text>
                        <Text style={{ fontSize: 14, fontWeight: '400', color: '#909090', marginTop: 24, marginVertical: 52 }}>
                            Please Enter Your Email Address
                        </Text>
                        <AccountInput title={'Email address'} input={account} onInput={setAccount} placeholder={"abel@domain.com"} topStyle={{}} />
                        {error1 && <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
                            <View style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: 'red', marginRight: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                <Text style={{ color: 'white' }}>!</Text>
                            </View>
                            <Text style={{ color: 'red' }}>Phone number is invalid</Text>
                        </View>}
                        {
                            (!method ?
                                <AccountInput title={'Password'} input={password} onInput={setPassword} topStyle={{ marginTop: 24 }} placeholder={"password"} type={'password'} />
                                : <View style={{ marginTop: 24, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                    <AccountInput title={'Verify Code'} input={password} onInput={setPassword} maxLength={6} topStyle={{ display: 'flex', flex: 1, marginRight: 12 }} placeholder={"Verify Code"} />
                                    {!time ?
                                        <Pressable onPress={() => sendCode()} style={{ height: 45, width: 120, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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

                        <View style={{ marginTop: 24 }}>
                            {
                               (loading[0] ? <ActivityIndicator size={'large'} color={config.primaryColor} /> : <AccountFlowButton title={'SIGN IN'} onClick={Login} />)
                            }
                        </View>
                        {/* {
                            (<View style={{ width: '100%', marginTop: 16, display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                {!method ? <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onPress={() => setMethod(1)}>
                                    <FontAwesome name="exchange" style={{ marginRight: 8 }} size={16} color="black" />
                                    <Text>Switch to code</Text>
                                </Pressable> : <Pressable style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} onPress={() => setMethod(0)}>
                                    <FontAwesome name="exchange" style={{ marginRight: 8 }} size={16} color="black" />
                                    <Text>Switch to password</Text>
                                </Pressable>}
                                {
                                    !method && <Pressable onPress={() => navigation.navigate("ForgetPassword.ResentLink")}>
                                        <Text>Forget password?</Text>
                                    </Pressable>
                                }
                            </View>)
                        } */}
                        {!method ? <Pressable style={{ display: 'flex',justifyContent:'center', flexDirection: 'row', alignItems: 'center',marginTop:24 }} onPress={() => setMethod(1)}>

                            <Text style={{color:'#909090'}}>Login with code</Text>
                        </Pressable> : <Pressable style={{ display: 'flex',justifyContent:'center', flexDirection: 'row', alignItems: 'center',marginTop:24 }} onPress={() => setMethod(0)}>

                            <Text style={{color:'#909090'}}>Login with password</Text>
                        </Pressable>}
                        
                        {
                            <View style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center',marginTop:16}}>
                                <Text style={{color:'#909090'}}>Forget password?</Text><Pressable onPress={()=>navigation.navigate("ForgetPassword.ResentLink")}><Text style={{color:config.text_color_2}}>Reset</Text></Pressable>
                            </View>
                        }
                        <View style={{display:'flex',justifyContent:'center',alignItems:'center',marginTop:57}}>
                        <Pressable>
                            <Text style={{fontSize:17,fontWeight:'500'}}>Search nearby</Text>
                        </Pressable>
                        </View>
                      

                        <View style={{height:1,width:'100%',backgroundColor:'rgba(0,0,0,0.1)',marginTop:22}}></View>

                        <View style={{ marginTop:22, display: 'flex', flexDirection: 'row',alignItems: 'center', flexWrap: 'wrap' }}>

                            <View style={{ display: 'flex', flexDirection: 'row',flexWrap:'wrap',paddingHorizontal:8,alignItems:'center',justifyContent:'center',fontWeight:'500' }}>
                                <Text style={{ lineHeight: 20, textAlign: 'center', fontSize: 12,fontWeight:'500'}}>By signing up agree with Good2Save's </Text>
                                <Pressable onPress={() => Linking.openURL("https://nextchoc.com.au/terms-and-conditions/")}><Text numberOfLines={2} style={{ color: "#3567E7", lineHeight: 20, fontSize: 12,fontWeight:'500' }}>Terms & Conditions</Text></Pressable>
                                <Text style={{ lineHeight: 20, fontSize: 12,fontWeight:'500'}}> and </Text>
                                <View><Pressable onPress={() => Linking.openURL("https://nextchoc.com.au/privacy-policy/")}><Text numberOfLines={2} style={{ color: '#3567E7', lineHeight: 20, fontSize: 12,fontWeight:'500' }}>Privacy policy</Text></Pressable></View>                      
                            </View>

                        </View>
                    </View>
                    {/* <LoginHorizontalMethod selectedId={selectedId} type="email" /> */}
                </ScrollView>
            </LinearGradient>
        </KeyboardAvoidingView>)
}