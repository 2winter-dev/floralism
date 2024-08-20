
const IS_DEV = process.env.APP_VARIANT === 'development';



export default {
  name: "NextChoc",
  slug: "NextChoc",
  owner: "yusi-dev",
  backgroundColor: "#ffffff",
  version: "1.1.5",
  orientation: "portrait",
  icon: "./src/assets/images/icon.png",
  scheme: "nextchoc",
  userInterfaceStyle: "light",
  "splash": {
    "image": "./src/assets/images/splash.png",
    "resizeMode": "contain",
    "backgroundColor": "#ffffff"
  },
  "assetBundlePatterns": [
    "**/*"
  ],
  "ios": {

    "appStoreUrsl": "https://apps.apple.com/us/app/nextchoc/id6461417297",
    "infoPlist": {
      "ITSAppUsesNonExemptEncryption": false
    },
    "config": {
      "googleMapsApiKey": "AIzaSyDGN82dH6sdACFmVh0kOcqW9E3SOiu6b0A"
    },
    "usesAppleSignIn": true,
    "googleServicesFile": "./utils/GoogleService-Info.plist",
    "bundleIdentifier": "com.yfd.zh.NextChoc",
    "supportsTablet": false,
    "buildNumber": "217"
  },
  "android": {
    "googleServicesFile": "./utils/google-services.json",
    "versionCode": 217,
    "softwareKeyboardLayoutMode": "pan",
    "package": "com.yfd.zh.NextChoc",
    "permissions": [
      "ACCESS_COARSE_LOCATION",
      "ACCESS_FINE_LOCATION"
    ],
    "config": {
      "googleMaps": {
        "apiKey": "AIzaSyCfZE5Qk_OevP4_GHRFS3q5CDLtB-TET5Y"
      }
    }
  },
  "plugins": [
    "./bin/map.js",
    [
      "@stripe/stripe-react-native",
      {
        "merchantIdentifier": "merchant.com.NextChoc",
        "enableGooglePay": true
      }
    ],
    [
      "expo-location",
      {
        "locationAlwaysPermission": "Get your current location to query nearby stores, your location information will be encrypted and saved",
        "locationWhenInUsePermission": "Get your current location to query nearby stores, your location information will be encrypted and saved",
        "locationAlwaysAndWhenInUsePermission": "Get your current location to query nearby stores, your location information will be encrypted and saved"
      }
    ],
    "@react-native-google-signin/google-signin",
    "@react-native-firebase/app",
    [
      "expo-build-properties",
      {
        "android": {
          "compileSdkVersion": 33,
          "targetSdkVersion": 33,
          "buildToolsVersion": "31.0.0"
        },
        "ios": {
          "useFrameworks": "static",
          "deploymentTarget": "13.0"
        }
      }
    ],
    [
      "react-native-fbsdk-next",
      {
        "appID": "1028386358435133",
        "clientToken": "6b4a93abe28092a3580219000a701ef7",
        "displayName": "NEXTCHOC",
        "scheme": "fb1028386358435133",
        "advertiserIDCollectionEnabled": false,
        "autoLogAppEventsEnabled": false,
        "isAutoInitEnabled": false,
        "iosUserTrackingPermission": false
      }
    ],
    "expo-tracking-transparency",
    "expo-apple-authentication"
  ],
  "runtimeVersion": {
    "policy": "sdkVersion"
  },
  "extra": {
    "eas": {

      "projectId": "2c3e6d98-2445-40a9-b42a-b131247192f1"
    }
  },
  "updates": {

    "url": "https://u.expo.dev/2c3e6d98-2445-40a9-b42a-b131247192f1"
  }

}