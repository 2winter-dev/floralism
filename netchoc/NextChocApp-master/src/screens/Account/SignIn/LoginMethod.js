import { View, Text, Pressable, Platform, Dimensions, Image } from "react-native";
import LoginButton from "../../../components/LoginButton";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import CountryPicker from 'react-native-country-picker-modal'
export default function LoginMethod() {
    const navigation = useNavigation();
    const [countryCode, setCountryCode] = useState('AU');
    const [visible, setVisible] = useState(false);
    const [withFlag, setWithFlag] = useState(true)
    const [withEmoji, setWithEmoji] = useState(true)
    const [withCountryNameButton, setWithCountryNameButton] = useState(false)
    const [withFilter, setWithFilter] = useState(true)
    const [withAlphaFilter, setWithAlphaFilter] = useState(false)
    const [withCallingCode, setWithCallingCode] = useState(false);
    const [country, setCountry] = useState({ "callingCode": ["61"], "cca2": "AU", "currency": ["AUD"], "flag": "flag-au", "name": "Australia", "region": "Oceania", "subregion": "Australia and New Zealand" })

    const onSelect = (country) => {
        //////////console.log(country);
        setCountryCode(country.cca2)
        setCountry(country)
    }


    return (<LinearGradient colors={['rgb(242,248,231)', '#ffffff', '#ffffff', '#ffffff']} style={{ flex: 1, display: 'flex' }}>
        <View style={{ display: 'flex', marginTop: Dimensions.get("screen").height * 0.06, paddingHorizontal: 16 }}>

            <Pressable onPress={() => navigation.canGoBack() && navigation.goBack()} >
                <Ionicons name="arrow-back" style={{ width: 80 }} size={24} color="black" />
            </Pressable>
            
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 12 }}>
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
                <Text>{country?.name}</Text>
            </View>
            <View style={{display:'flex',width:'100%',justifyContent:'center',alignItems:'center'}}>
                <Image style={{ width: 80, height: 80, marginTop: 70,marginBottom:50 }} source={require('../../../assets/images/icon.png')} />
            </View>
            <Pressable onPress={() => navigation.navigate("SignIn.LoginWithPhone")}>
                <LoginButton first title={'Continue with Phone'} source={require('../../../assets/images/phone.png')} />
            </Pressable>
            <Pressable >
                <LoginButton title={'Continue with Apple'} source={require('../../../assets/images/facebook.png')} />
            </Pressable>
            <Pressable >
                <LoginButton title={'Continue with facebook'} source={require('../../../assets/images/facebook.png')} />
            </Pressable>
            <Pressable>
                <LoginButton title={'Continue with Google'} source={require('../../../assets/images/google.png')} />
            </Pressable>

            <Pressable onPress={() => navigation.navigate("SignIn.LoginWithEmail")}>
                <LoginButton title={'Continue with email'} source={require('../../../assets/images/email.png')} />
            </Pressable>

            <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 16 }}>
                <Pressable>
                    <Text style={{ fontSize: 17, fontWeight: '500' }}>Search nearby</Text>
                </Pressable>
            </View>

            <View style={{ height: 1, width: '100%', backgroundColor: 'rgba(0,0,0,0.1)', marginTop: 16 }}></View>
            <View style={{ marginTop: 22, display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap' }}>

                <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 8, alignItems: 'center', justifyContent: 'center', fontWeight: '500' }}>
                    <Text style={{ lineHeight: 20, textAlign: 'center', fontSize: 12, fontWeight: '500' }}>By signing up agree with Good2Save's </Text>
                    <Pressable onPress={() => Linking.openURL("https://nextchoc.com.au/terms-and-conditions/")}><Text numberOfLines={2} style={{ color: "#3567E7", lineHeight: 20, fontSize: 12, fontWeight: '500' }}>Terms & Conditions</Text></Pressable>
                    <Text style={{ lineHeight: 20, fontSize: 12, fontWeight: '500' }}> and </Text>
                    <View><Pressable onPress={() => Linking.openURL("https://nextchoc.com.au/privacy-policy/")}><Text numberOfLines={2} style={{ color: '#3567E7', lineHeight: 20, fontSize: 12, fontWeight: '500' }}>Privacy policy</Text></Pressable></View>
                </View>

            </View>
        </View>
    </LinearGradient>)
}