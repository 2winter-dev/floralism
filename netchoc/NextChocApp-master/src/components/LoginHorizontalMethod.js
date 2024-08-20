import { useNavigation } from "@react-navigation/native";
import { View, Image, Pressable, Dimensions, Platform } from "react-native";
import { useMutation } from "@tanstack/react-query";
import { useEffect } from "react";
import LoginAPI from "../api/LoginAPI";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
// import * as FaceBook from 'react-native-fbsdk-next';
// import { AppleButton, appleAuth } from '@invertase/react-native-apple-authentication';
import * as Facebook from "expo-auth-session/providers/facebook";
import * as AppleAuthentication from 'expo-apple-authentication';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import { useCommonActions, useDevToken } from "../common/store/user";
GoogleSignin.configure();



export default function LoginHorizontalMethod(props) {
  const setToken = useCommonActions().setToken;
  const setUser = useCommonActions().setUser;
  const devToken = useDevToken();
  const setLoginMethod = useCommonActions().setLoginMethod;
  const [_, __, fbPromptAsync] = Facebook.useAuthRequest({
    clientId: 1028386358435133,
  });

  const googleLogin = useMutation({
    mutationFn: (data) => LoginAPI.googleLogin(data),
    mutationKey: ['googleLogin'],
  })
  const facebookLogin = useMutation({
    mutationFn: (data) => LoginAPI.faceBookLogin(data),
    mutationKey: ['facebookLogin'],
  })
  const appleLogin = useMutation({
    mutationFn: (data) => LoginAPI.appleLogin(data),
    mutationKey: ['appleLogin'],
  })
  //console.log(props.selectedId);
  const googleSignIn = async () => {
    console.log("google登录");
    if (!props.selectedId) {
      Toast.show("Please agree to our terms and privacy policy");
      return
    }
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log("登錄成功，獲取用戶數據成功，正在上傳")
      const token = await GoogleSignin.getTokens();
      console.log("从服务器中获取...")
      ////console.log(userInfo,token.accessToken);
      googleLogin.mutate({ access_token: token.accessToken, device: Platform.OS, exponent_push_token: devToken }, {
        onSuccess: (res) => {
          setToken(res.token);
          setUser(res.userinfo);
          setLoginMethod("google");
          ////console.log(res);
          navigation.popToTop();
        },
        onError: (res) => {
          ////console.log("失败");
          ////console.log(res);
        }
      })
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        ////console.log("cancel")
      } else if (error.code === statusCodes.IN_PROGRESS) {
        ////console.log("in_progress")
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        ////console.log("play services not avalable")
      } else {
        // some other error happened
        ////console.log(error);
      }
    }
  };

  // const FaceBookSignIn = async () => {
  //   if (!props.selectedId) {
  //     Toast.show("Please agree to our terms and privacy policy");
  //     return
  //   }
  //   try {
  //     let res = await FaceBook.LoginManager.logInWithPermissions(["email","public_profile"])
  //     console.log(res);
  //     // Toast.show(JSON.stringify(res),{
  //     //   duration:10000,
  //     // });
  //     if (res.isCancelled) {
  //       //console.log("Login cancelled");
  //     } else {

  //       console.log(
  //         "Login success with permissions: " +
  //         res.grantedPermissions.toString()
  //       );

  //       if (Platform.OS === 'ios') {
  //         const result = await FaceBook.AuthenticationToken.getAuthenticationTokenIOS();
  //         console.log(result);

  //         fetchFaceBookMess(result?.authenticationToken)
  //       } else {
  //         const result = await FaceBook.AccessToken.getCurrentAccessToken();
  //         // Toast.show(JSON.stringify(result),{
  //         //   duration:10000,
  //         // });
  //         console.log(result);
  //         fetchFaceBookMess(result?.accessToken)
  //       }

  //       // //console.log(res)
  //     }


  //   } catch (er) {
  //     // //console.log(er)
  //   }



  //   // const response = await fbPromptAsync({
  //   //   permissions: ['public_profile', 'email']
  //   // });
  //   // //console.log(response);
  // }
  const FaceBookSignIn = async () => {
    const response = await fbPromptAsync();
    Toast.show(response.type);
    if (response.type === "success") {
      const { access_token } = response.params;
      console.log(access_token);
      console.log("token above");
      fetchFaceBookMess(access_token)
      // return facebookLoginOrRegister.mutateAsync(
      //   {
      //     access_token: access_token,
      //     device: Platform.OS,
      //     exponent_push_token: devToken,
      //   },
      //   {
      //     onSuccess: ({ userinfo, token }) => {
      //       setLoading(false);
      //       updateToken(token);
      //       updateUser(userinfo);
      //       navigation.navigate("Customer.index");
      //     },
      //     onError: (error) => {
      //       setLoading(false);
      //       Toast.show(error instanceof Error ? error.message : "error");
      //     },
      //   }
      // );
    }
    // setLoading(false);
  }

  const fetchFaceBookMess = (data) => {
    facebookLogin.mutate({ access_token: data, device: Platform.OS, exponent_push_token: devToken }, {
      onSuccess: (res) => {
        setLoginMethod("facebook");
        //console.log(res);
        setToken(res.token);
        setUser(res.userinfo);
        navigation.popToTop();
      },
      onError: (res) => {
        // //console.log(res);
        Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
      }
    })
  }
  const rt = () => {

  }

  // useEffect(() => {
  //   // onCredentialRevoked returns a function that will remove the event listener. useEffect will call this function when the component unmounts
  //   return appleAuth.onCredentialRevoked(async () => {
  //     console.warn('If this function executes, User Credentials have been Revoked');
  //   });
  // }, []); // passing in an empty array as the second argument ensures this is only ran once when component mounts initially.
  // async function onAppleButtonPress() {
  //   // performs login request
  //   //console.log("=====");
  //   //console.log("1");
  //   const appleAuthRequestResponse = await appleAuth.performRequest({
  //     requestedOperation: appleAuth.Operation.LOGIN,
  //     // Note: it appears putting FULL_NAME first is important, see issue #293
  //     requestedScopes: [appleAuth.Scope.FULL_NAME, appleAuth.Scope.EMAIL],
  //   });
  //    //console.log("2");
  //   // get current authentication state for user
  //   // /!\ This method must be tested on a real device. On the iOS simulator it always throws an error.
  //   const credentialState = await appleAuth.getCredentialStateForUser(appleAuthRequestResponse.user);

  //   // use credentialState response to ensure the user is authenticated
  //   if (credentialState === appleAuth.State.AUTHORIZED) {
  //     // user is authenticated
  //   }
  // }
  const navigation = useNavigation();
  return (<View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%' }}>
    {
      Date.now() > 1700006400000
      // Date.now() > 1697160365501
      &&
      <Pressable onPress={() => FaceBookSignIn()} style={{ marginRight: 20, width: 50, height: 50, backgroundColor: '#6495ED', borderRadius: 70, justifyContent: 'center', alignItems: 'center' }}>
        <FontAwesome name="facebook" color={'#fff'} size={30} />
      </Pressable>
    }
    {Date.now() > 1699574400000 && <Pressable
      onPress={() => googleSignIn()}
      // onPress={()=>props.google()}
      style={{ marginRight: 20, width: 50, height: 50, backgroundColor: 'rgba(0,0,0,0.1)', borderRadius: 70, justifyContent: 'center', alignItems: 'center' }}>
      {/* <FontAwesome name="google" color={'#fff'} size={25} /> */}
      <Image source={require('../assets/images/google.png')} style={{ width: 25, height: 25 }} />
    </Pressable>}
    {
      props.type === "phone" ? <Pressable style={{ width: 50, height: 50, backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: 70, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate("SignIn.LoginWithEmail")}>

        {/* <Image source={require('../assets/images/email.png')} style={{ marginRight: 16, width: 30, height: 30 }} /> */}
        <FontAwesome name="envelope" color={'#fff'} size={20} />
      </Pressable> :
        <Pressable style={{ width: 50, height: 50, backgroundColor: 'rgba(0,0,0,0.8)', borderRadius: 70, justifyContent: 'center', alignItems: 'center' }} onPress={() => navigation.navigate("SignIn.LoginWithPhone")}>
          <FontAwesome name="phone" color={'#fff'} size={20} />
          {/* <Image source={require('../assets/images/phone.png')} style={{ marginRight: 16, width: 24, height: 24 }} /> */}
        </Pressable>
    }
    {Platform.OS === "ios" && <Pressable onPress={async () => {
        if (!props.selectedId) {
          Toast.show("Please agree to our terms and privacy policy");
          return
        }
        try {
          const credential = await AppleAuthentication.signInAsync({
            requestedScopes: [
              AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
              AppleAuthentication.AppleAuthenticationScope.EMAIL,
            ],
          });
          //console.log(credential);
          if(credential){
            appleLogin.mutate({identity_token:credential.identityToken, exponent_push_token: devToken},{
              onSuccess:(res)=>{
                //console.log(res);
                setToken(res.token);
                setUser(res.userinfo);
                setLoginMethod("apple");
                ////console.log(res);
                navigation.popToTop();
              },
              onError:(res)=>{
                //console.log(res);
              }
            })
          }
          // signed in
        } catch (e) {
          if (e.code === 'ERR_REQUEST_CANCELED') {
            // handle that the user canceled the sign-in flow
          } else {
            // handle other errors
          }
        }
      }} style={{width:50,height:50,borderRadius:50,marginLeft:20,alignItems:'center',justifyContent:'center',borderRadius:50,backgroundColor:'black'}}>
      {/* <AppleAuthentication.AppleAuthenticationButton
      buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
      buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.WHITE}
      cornerRadius={50}
      style={{width:70,height:70,borderWidth:1}}
      onPress={async () => {
        if (!props.selectedId) {
          Toast.show("Please agree to our terms and privacy policy");
          return
        }
        try {
          const credential = await AppleAuthentication.signInAsync({
            requestedScopes: [
              AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
              AppleAuthentication.AppleAuthenticationScope.EMAIL,
            ],
          });
          //console.log(credential);
          if(credential){
            appleLogin.mutate({identity_token:credential.identityToken, exponent_push_token: devToken},{
              onSuccess:(res)=>{
                //console.log(res);
                setToken(res.token);
                setUser(res.userinfo);
                setLoginMethod("apple");
                ////console.log(res);
                navigation.popToTop();
              },
              onError:(res)=>{
                //console.log(res);
              }
            })
          }
          // signed in
        } catch (e) {
          if (e.code === 'ERR_REQUEST_CANCELED') {
            // handle that the user canceled the sign-in flow
          } else {
            // handle other errors
          }
        }
      }}
    /> */}
      <FontAwesome name="apple" size={24} color="white" />
    </Pressable>}

  </View >)
}