import { View, Image, Text, Pressable } from "react-native";
import config from "../common/config";


export default function HomeBanner(props) {

    return (
        <View style={{
            display: 'flex',
            borderRadius: 20,
            backgroundColor: 'white',
            overflow: 'hidden',
        }}>
            <Image source={require("../assets/images/bannerImage.png")} style={{ display: 'flex', height: 169, width: '100%', borderRadius: 20, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }} />
            <View style={{ padding: 16,paddingBottom:0, width: '75%' }}>
                <Text style={{ fontSize: 20, color: 'white', fontWeight: '600' }}>How to use Good2Save</Text>
                <Text style={{ fontSize: 16, color: 'white', marginTop: 12 }}>Together， we change the world one bag at a time！</Text>
            </View>
            <View style={{ marginHorizontal:16,marginBottom:16,alignItems:props.right?'flex-end':'flex-start',display: 'flex'}}>
                    <Pressable style={{ paddingHorizontal: 36, paddingVertical: 12,borderRadius:24,marginTop:12, backgroundColor: config.text_color_2, }}>
                        <Text style={{ fontSize: 14, color: 'white' }}>Go</Text>
                    </Pressable>
            </View>
        </View>
    )
}