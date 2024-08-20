import { View,Text,Image,Pressable } from "react-native"
import config from "../common/config"

export default function UserItem(props){
    return (<View style={{width:'100%',display:'flex',flexDirection:'row',alignItems:'center',marginTop:12}}>
         <Image source={require('../assets/images/last.png')} style={{width:60,height:60,borderRadius:50}} />
         <View style={{marginLeft:12,display:'flex',flex:1}}>
            <Text style={{fontSize:14,fontWeight:'600'}}>little Xing</Text>
            <Text numberOfLines={1} style={{fontSize:14,color:config.text_color_4}}>This is a message++++++++</Text>
         </View>
         <Pressable style={{paddingHorizontal:12,paddingVertical:4,borderRadius:22,borderWidth:1,borderColor:config.text_color_2,marginLeft:'auto'}}>
            <Text>Follow</Text>
         </Pressable>
    </View>)
}