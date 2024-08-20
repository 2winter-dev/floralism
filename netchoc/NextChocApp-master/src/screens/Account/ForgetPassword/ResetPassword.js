import { View, Text, Pressable, TouchableHighlight, ActivityIndicator } from "react-native";
import AccountInput from "../../../components/AccountInput";
import AccountFlowButton from "../../../components/AccountFlowButton";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import config from "../../../common/config";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import LoginAPI from "../../../api/LoginAPI";

export default function ResetPassword({route}) {
    const navigation = useNavigation();
    const [password,setpassword]=useState({
        password:"",
        confirm_password:"",
    })
    const ResetByTel=useMutation({
        mutationFn:()=>LoginAPI.resetPasswordByMobile({...password,mobile:route.params.account}),
        mutationKey:['resetByTel'],
    })
    const ResetByEmail=useMutation({
        mutationFn:()=>LoginAPI.resetPasswordByEmail({...password,email:route.params.account}),
        mutationKey:['resetByTel'],
    })
    const [time, setTime] = useState(0);
    // const reset = () => {
    //     navigation.pop(3);
    // }
    const _reset=()=>{
        ////console.log(password.password);
        let reg=/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[a-z0-9A-Z]+$/;
        if(password.confirm_password!==password.password){
            // Toast.show("")
            Toast.show("The two entered passwords do not match");
            return;
        }
        if(password.password.trim()===""){
            Toast.show("Password cannot be empty");
            return;
        }
        if(password.password.length<8){
            Toast.show("The password needs to be more than 8 characters and less than 30 characters");
            return;
        }
        if(!password.password.match(reg)){
            Toast.show("Password needs to consist of uppercase and lowercase letters and numbers");
            return;
        }
        route.params.type? ResetByEmail.mutate(null,{
            onSuccess:(res)=>{
                ////console.log(res);
                navigation.pop(3);
            },
            onError:(res)=>{
                Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
            }
        }):ResetByTel.mutate(null,{
            onSuccess:(res)=>{
                ////console.log(res);
                navigation.pop(3);
            },
            onError:(res)=>{
                Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
            }
        })
    }
    useEffect(()=>{
        let timer;
        if(time){
            timer=setTimeout(()=>{
               setTime(time-1);
             },1000)
          }
        return ()=>{
            clearTimeout(timer)
        }
    },[time])

    return (<View style={{position:'relative',display:'flex'}}>
        <LinearGradient colors={['rgb(242,248,231)', '#ffffff', '#ffffff', '#ffffff']} style={{ display:'flex',flex: 1,position:'absolute',width:'100%',height:'100%',top:0,left:0,right:0 }}></LinearGradient>
    <View style={{ marginTop: 60, paddingHorizontal: 12 }}>
        <Pressable onPress={() => navigation.canGoBack && navigation.goBack()}>
            <Ionicons name="arrow-back" style={{ width: 80 }} size={24} color="black" />
        </Pressable>
        <Text style={{ fontSize: 32, display: 'flex', marginTop: 36 }}>Reset password</Text>
        <AccountInput title={'Password'} onInput={(data)=>setpassword({...password,password:data})} value={password.password} topStyle={{ marginTop: 24 }} placeholder={"enter your password"} type={'password'} />
        <AccountInput title={'Confirm Password'} topStyle={{ marginTop: 24 }} onInput={(data)=>setpassword({...password,confirm_password:data})} value={password.confirm_password} placeholder={"enter your password again"} type={'password'} />

        {(ResetByTel.isLoading||ResetByEmail.isLoading)?<ActivityIndicator size={'large'} color={config.primaryColor} style={{marginTop:24}} />:<View style={{ marginTop: 24 }}>
            <AccountFlowButton title={'Reset Password'} onClick={_reset} />
        </View>}
    </View></View>)
}