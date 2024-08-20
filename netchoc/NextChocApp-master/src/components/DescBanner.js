import { View,Text,Image } from "react-native"
import { colors } from "react-native-swiper-flatlist/src/themes"
import config from "../common/config"

export default function DescBanner(props) {

    return (<View style={{
        display: 'flex', 
        flexDirection: 'row', 
        borderRadius: 20, 
        backgroundColor:'white',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        
        elevation: 4,
    }}>
       <View style={{display:'flex',flex:1,justifyContent:'space-around',marginRight:12,padding:16}}>
          <Text style={{fontSize:18,color:config.text_color_2,fontWeight:'600'}}>Know more about Good2Save</Text>
          <Text style={{color:config.text_color_2,fontSize:13,fontWeight:'500'}}>Together， we change the world one bag at a time！</Text>
       </View>
       <View style={{height:161,height:161}}>
        <Image source={require("../assets/images/last.png")} style={{width:161,height:161,borderRadius:20}} />
       </View>
    </View>)

}