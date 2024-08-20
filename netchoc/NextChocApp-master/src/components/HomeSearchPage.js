import { Animated, ScrollView, View, Dimensions, Text, Pressable } from "react-native"
import { FontAwesome, Ionicons } from "@expo/vector-icons"
import { colors } from "react-native-swiper-flatlist/src/themes"
import { useState, useRef } from "react"
import ProductItem from "./ProductItem";
import AllItem from "./AllItem";
import UserItem from "./UserItem";
export default function HomeSearchPage(props) {
    const [isChoosen, setIsChoosen] = useState(0);
    const scroll = useRef(new Animated.Value(0)).current
    //0:2 1:68 2:148
    // const [transform, setTransform] = useState(2);


    const changeIndex = (index) => {
        console.log("進來了", index);

        Animated.timing(scroll, {
            toValue: index === 0 ? 2 : index === 1 ? 68 : 148,
            duration: 300,
            useNativeDriver: true,
        }).start();
        setIsChoosen(index);
    }


    return (<View style={{ display: 'flex',minHeight:Dimensions.get('screen').height*0.85}}>
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 8, position: 'relative', paddingBottom: 6 }}>
            <Pressable onPress={() => changeIndex(0)}><Text style={[style.font, isChoosen === 0 ? style.choosen : style.unChoosen]}>All</Text></Pressable>
            <Pressable onPress={() => changeIndex(1)}><Text style={[style.font, isChoosen === 1 ? style.choosen : style.unChoosen]}>Products</Text></Pressable>
            <Pressable onPress={() => changeIndex(2)}><Text style={[style.font, isChoosen === 2 ? style.choosen : style.unChoosen]}>Users</Text></Pressable>
            <Animated.View
                style={{ width: 16, height: 4, backgroundColor: '#25745B', position: 'absolute', bottom: 0, left: 0, transform: [{ translateX: scroll }], borderRadius: 20 }}>
            </Animated.View>

        </View>
        {/* <Text>1</Text> */}
        <View style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'flex-start',justifyContent:'space-between',marginBottom:12, flexWrap: 'wrap' }}>
            {
                isChoosen === 0 && [1,1,1,1,1].map((item, index) => {
                    return (<AllItem />)
                })
            }
            {
                isChoosen === 1 &&  [1,1,1,1,1].map((item, index) => {
                    return (<ProductItem />)
                })
            }
            {
                isChoosen === 2 &&  [1,1,1,1,1].map((item, index) => {
                    return (<UserItem />)
                })
            }
        </View>

    </View>)
}


const style = {
    choosen: {
        color: 'black',
    },
    unChoosen: {
        color: '#C1C1C1',
    },
    font: {
        fontWeight: 'bold',
        fontSize: 16,
        marginRight: 24,
    }
}