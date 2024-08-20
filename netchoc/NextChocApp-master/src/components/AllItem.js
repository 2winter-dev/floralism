import { Image, View, Text } from "react-native"
import config from "../common/config"
import { AntDesign } from "@expo/vector-icons"

export default function AllItem(props) {

    return (<View style={{ width: 180 }}>
        <View style={{ width: 180, display: 'flex', marginTop: 12, justifyContent: 'center', alignItems: 'center' }}>
            <Image source={require("../assets/images/last.png")} style={{ width: 175, height: 160, borderTopLeftRadius: 20, borderTopRightRadius: 20 }} />
        </View>
        <View style={{ padding: 8, display: 'flex', alignItems: 'flex-start', justifyContent: 'flex-start',width:'100%',backgroundColor:'white',borderBottomLeftRadius:20,borderBottomRightRadius:20 }}>
            <Text numberOfLines={2} style={{ fontSize: 13, fontWeight: 'bold' }}>Recommend a restaurant</Text>
            <View style={{ marginTop: 4, display: 'flex', flexDirection: 'row', alignItems: 'center',justifyContent:'space-between',width:'100%' }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Image source={require('../assets/images/last.png')} style={{ width: 30, height: 30, borderRadius: 50 }}></Image>
                    <Text numberOfLines={1} style={{ marginLeft: 8, fontSize: 14, color: '#6B6B6B' }}>Jimmy</Text>
                </View>
                <View style={{display:'flex', flexDirection: 'row', alignItems: 'center'}}>
                    <AntDesign name="hearto" size={14} color="black" />
                    <Text style={{color:'#6B6B6B',fontSize:14,marginLeft:4}}>93</Text>
                </View>
            </View>
        </View>
    </View>)
}