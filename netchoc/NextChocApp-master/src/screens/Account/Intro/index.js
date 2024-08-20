
import { Intro1 } from "./totalPage";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import { View, useWindowDimensions, Text, StyleSheet, Pressable, Dimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import { useEffect } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useCommonActions, useFlag } from "../../../common/store/user";
import config from "../../../common/config";
import { LinearGradient } from "expo-linear-gradient";
export default function Intro() {
    const Flag = useFlag();
    const setFlag = useCommonActions().setFlag;
    const setIsIntro = useCommonActions().setIsIntro;
    const layout = useWindowDimensions();
    const navigation = useNavigation();
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: "second" },
        { key: "third" },
        { key: "fourth" },
        { key: "fifth" }
    ]);
    //  //////////console.log(setIsIntro("close"));
    useEffect(() => {
        const listener = navigation.addListener('beforeRemove', function (e) {
            if (e.data.action.type === 'GO_BACK') e.preventDefault()
        })
        // setIsIntro("");
        setIsIntro("close")
        return listener;
    }, [])
    const toSignUp = () => {
        setFlag("1");
        navigation.navigate("SignIn.LoginWithPhone")
    }
    const renderScene = React.useMemo(() => SceneMap({
        second: () => (
            <Intro1
                uri={require('../../../assets/images/first.png')}
                title="Discover Local Deals"
                desc="Browse nearby offers on Good2Save to find surplus food deals from local restaurants and stores. Explore various options and choose what suits you best"
                index={1}
            />
        ),
        third: () => (
            <Intro1
                uri={require('../../../assets/images/second.png')}
                title="Reserve a Surprise Bag"
                desc="Select your desired surprise bag within the app. Confirm your reservation to secure it for pickup and later enjoyment"
                index={2}
            />
        ),
        fourth: () => (
            <Intro1
                uri={require('../../../assets/images/last.png')}
                title="Collect Your Order on Time"
                desc="Check the pickup time for each store. Ensure you arrive before the specified time. Show your order details to the staff to collect your bag."
                index={3}
            />
        ),
        fifth: () => {
           return <Intro1
                uri={require('../../../assets/images/last.png')}
                title="Share with Friends, build the Good2Save community"
                desc="Share your Good2Save experience with friends. Invite them to join in reducing food waste and protecting the environment. Spread the word about Good2Save's mission for a better world"
                index={4}
            />
        }
    }), [])
    //////////console.log(Dimensions.get("screen").height,Dimensions.get("window").height);
    return (
        <View style={{ flex: 1, position: 'relative', display: 'flex', justifyContent: 'center', justifyContent: 'center', marginBottom: Dimensions.get("window").height * 0.08 }}>
            <LinearGradient colors={['rgb(242,248,231)', '#ffffff', '#ffffff', '#ffffff']} style={{ flex: 1 }}>
                <TabView
                    navigationState={{ index, routes }}
                    renderScene={renderScene}
                    onIndexChange={setIndex}
                    initialLayout={{ width: layout.width }}
                    renderTabBar={() => null}
                    style={{ marginBottom: Dimensions.get("screen").height * 0.07 }}
                />
                <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 32 }}>
                    <Pressable onPress={() => index!==0&&setIndex(index - 1)}>
                        <Text style={{ color: '#25745B', fontWeight: '600' }}>Back</Text>
                    </Pressable>
                    <Pressable onPress={() => index==3?navigation.navigate("SignIn.Method"):setIndex(index + 1)}>
                        <Text style={{ paddingHorizontal: 24, paddingVertical: 8, fontWeight: '600', backgroundColor: '#25745B', borderRadius: 16, color: 'white' }}>Next</Text>
                    </Pressable>
                </View>
            </LinearGradient>
        </View>
    );
}

const style = StyleSheet.create({
    button_group: { width: 8, height: 8, borderRadius: 50, backgroundColor: 'rgba(0,0,0,0.4)', marginRight: 12 },
    button_group_select: { width: 12, height: 12, borderRadius: 50, backgroundColor: config.primaryColor, marginRight: 12 }
})