
import { View, Text, Pressable, ActivityIndicator, Linking } from 'react-native'
import AccountInput from '../../../components/AccountInput'
import AccountFlowButton from '../../../components/AccountFlowButton'
import { useNavigation } from '@react-navigation/native'
import ForgetHeaders from '../../../components/ForgetHeaders';
import { useMutation } from '@tanstack/react-query';
import LoginAPI from '../../../api/LoginAPI';
import { useState, useEffect } from 'react';
import config from '../../../common/config';
import { LinearGradient } from 'expo-linear-gradient';
export default function ResendLink({ route }) {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const sendCode = useMutation({
    mutationFn: (data) => LoginAPI.sendCode(data),
    mutationKey: ['sendCode']
  })
  const verifyEmailRegister = useMutation({
    mutationFn: (data) => LoginAPI.verifyEmailRegister(data),
    mutationKey: ['verifyEmailRegister'],
  })

  const sendEmail = () => {
    if (email.trim() === "") {
      Toast.show("please enter your email first!")
      return;
    }
    verifyEmailRegister.mutate(email, {
      onSuccess: (res) => {
        // if()

        // if (!res.is_exists && route?.params?.type === "reset") {
        //      
        // } else if(res.is_exists&&route?.params?.type!=="reset"){
        //     
        // }
        if (route?.params?.type === "reset") {
          if (!res.is_exists) {
            send("changeinfo");
          } else {
            Toast.show("This e-mail is already registered");
          }
        } else {
          if (res.is_exists) {
            send("changepwd");
          } else {
            Toast.show("You have not registered an account yet");
          }
        }
      },
      onError: (res) => {
        Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
      }
    })
    const send = (data) => {
      sendCode.mutate({ email, event: data }, {
        onSuccess: (res) => {
          console.log(res);
          navigation.navigate("ForgetPassword.CheckEmail", { account: email, type: route?.params?.type ?? "" })
        },
        onError: (res) => {
          Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
        }
      })
    }


  }
  return (<View style={{ display: 'flex', position: 'relative', flex: 1 }}>
    <LinearGradient colors={['rgb(242,248,231)', '#ffffff', '#ffffff', '#ffffff']} style={{ display: 'flex', flex: 1, position: 'absolute', width: '100%', height: '100%', top: 0, left: 0, right: 0 }}></LinearGradient>
    <View style={{ marginTop: 60, paddingHorizontal: 12, position: 'relative' }}>

      <ForgetHeaders title={route?.params?.type === "reset" ? "Set Email" : "Reset Code"} />
      <Text style={{ fontSize: 32, display: 'flex' }}>{route?.params?.type === "reset" ? "Send Email" : "Resend Code"}</Text>
      <Text style={{ marginTop: 12, color: 'rgba(0,0,0,0.4)', fontSize: 18 }}>Enter your email address</Text>
      <Pressable onPress={() => navigation.navigate("ForgetPassword.telver")}>
        {/* <Text style={{ marginTop: 4 }}>{"use phone number"}</Text> */}
      </Pressable>
      <AccountInput value={email} onInput={setEmail} topStyle={{ marginTop: 48 }} placeholder={'abel@domain.com'} />
      {sendCode.isLoading ? <ActivityIndicator size={'large'} color={config.primaryColor} style={{ marginTop: 16 }} /> : <AccountFlowButton topStyle={{ marginTop: 16 }} title={route?.params?.type === "reset" ? "SET EMAIL" : "RESET PASSWORD"} onClick={sendEmail} />}
      <View style={{ display: 'flex', flexDirection: 'row', marginTop: 12 }}>
        {/* <Text style={{ lineHeight: 20, textAlign: 'center', fontSize: 11, color: 'gray' }}>By logging in you have agreed to our </Text> */}
        {/* <Pressable style={{ marginTop: 12, display: 'flex', textAlign: 'center', flexDirection: 'row', width: '100%', flexWrap: 'wrap' }}> */}
        {/* <Pressable onPress={() => Linking.openURL("https://nextchoc.com.au/terms-and-conditions/")}><Text numberOfLines={2} style={{ color: "#3567E7", lineHeight: 20, fontSize: 11 }}>Terms</Text></Pressable> */}
        {/* <Text style={{ lineHeight: 20, fontSize: 14, color: 'gray' }}> & </Text> */}
        {/* <Pressable onPress={() => Linking.openURL("https://nextchoc.com.au/privacy-policy/")}><Text numberOfLines={2} style={{ color: '#3567E7', lineHeight: 20, fontSize: 11 }}>Privacy policy</Text></Pressable> */}
        {/* </Pressable> */}
      </View>

    </View>
  </View>

  )
}  