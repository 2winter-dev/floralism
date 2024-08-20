import { Dimensions, Image, View, Text, Pressable } from "react-native"


export default function WrongPage(props) {

    return (<View style={{ display: 'flex', flex: 1, alignItems: 'center', justifyContent: 'center', height: Dimensions.get('screen').height * 0.7 }}>
        <Image style={{ width: 100, height: 100 }} source={props.type === "wlan" ? require('../assets/images/wlanwrong.png') : props.type === "noshop" ? require('../assets/images/shopwrong.png') : require('../assets/images/otherwrong.png')} />
        <Text style={{ fontSize: 18, fontWeight: '600', marginTop: 32 }}>{props.type === "wlan" ? "Oops, you seems to be offline" : props.type === "noshop" ? "No stores in this area, yet" : "Oops ,something went wrong"}</Text>
        {
            props.type === "noshop" && <>
                <View style={{}}>
                    <Text numberOfLines={2} style={{ fontSize: 14, fontWeight: '600', width: 180, marginTop: 16, textAlign: 'center', marginBottom: 16 }}>Follow us on social media to get the latest updates</Text>
                </View>
                <View style={{ paddingHorizontal: 24, display: 'flex',display:'flex',width:'100%' }}>
                    <View style={{ height: 2, backgroundColor: '#BDDBDB', width: '100%' }}></View>
                </View>
                <View style={{display:'flex',flexDirection:'row',justifyContent:'space-around',alignItems:'center',paddingHorizontal: 24,marginVertical:24,width:'100%'}}>
                     <Image source={require('../assets/images/facebook1.png')} style={{width:60,height:60}} />
                     <Image source={require('../assets/images/youtobe1.png')} style={{width:60,height:60}} />
                     <Image source={require('../assets/images/douyin1.png')} style={{width:60,height:60}} />
                     <Image source={require('../assets/images/insgram1.png')} style={{width:60,height:60}} />
                </View>
            </>
         
        }
        <Pressable >
            <Text style={{paddingHorizontal:60,paddingVertical:14,backgroundColor:'#25745B',color:'white',borderRadius:30,marginTop:24}}>
            {
                props.type === "wlan" ? "Refresh" : props.type === "noshop" ? "Choose location" : "Retry"
            }
            </Text>
        </Pressable>
    </View>)
}