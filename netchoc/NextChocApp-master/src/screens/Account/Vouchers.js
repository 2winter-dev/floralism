import { Dimensions, ScrollView, Image, View, Pressable, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
export default function Vouchers() {
    const navigation = useNavigation();
    return (<ScrollView style={{ width: '100%', minHeight: Dimensions.get("screen").height, position: 'relative' }}>
        <Image source={require('../../assets/images/VouchersBackground.png')} style={{ position: 'absolute', zIndex: 10, right: 0, top: 0, width: '100%', height: 400, }} />
        <View style={{ display: 'flex', marginTop: Dimensions.get("screen").height * 0.04, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 32 }}>

            <View style={{ width: 100 }}>
                <Pressable onPress={() => navigation.canGoBack() && navigation.goBack()} style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </Pressable>
            </View>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Vouchers</Text>
            <View style={{ width: 100, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

            </View>
        </View>
        <View style={{ marginTop: 32, display: 'flex', marginHorizontal: 32, alignItems: 'center',display:'flex',flexDirection:'row',justifyContent:'space-between' }}>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                <View style={{ width: 85, height: 50, display: 'flex', alignItems: 'center', marginRight: 12, justifyContent: 'center', borderRadius: 30, backgroundColor: '#25745B', }}>
                    <Text style={{ fontSize: 14, color: 'white' }}>All</Text>
                </View>
                <View style={{ width: 85, height: 50, display: 'flex', alignItems: 'center', marginRight: 12, justifyContent: 'center', borderRadius: 30, backgroundColor: '#25745B', }}>
                    <Text style={{ fontSize: 14, color: 'white' }}>New</Text>
                </View>
                <View style={{ width: 85, height: 50, display: 'flex', alignItems: 'center', marginRight: 12, justifyContent: 'center', borderRadius: 30, backgroundColor: '#25745B', }}>
                    <Text style={{ fontSize: 14, borderRadius: 20, backgroundColor: '#25745B',textAlign:'center', color: 'white',paddingHorizontal:4 }}>Expiring soon</Text>
                </View>
            </View>
            <View>
                <Text style={{backgroundColor:'#DDDDDD',fontSize:14,borderRadius:10,paddingHorizontal:16,paddingVertical:16}}>Redeem</Text>
            </View>
        </View>
        <View style={{ marginTop: 32,marginHorizontal:32,flex:1}}>
             <Image source={require('../../assets/images/bannerImage.png')} style={{width:'100%',height:(Dimensions.get("screen").width-64)*1/3,borderRadius:40}} />
        </View>
    </ScrollView>)
}