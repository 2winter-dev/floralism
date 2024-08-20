import { View,Image,Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import config from "../common/config";

export default function ProductItem(props){

    return (<View style={{height:140,display:'flex',flexDirection:'row',alignItems:'flex-start',width:'100%',marginTop:16}}>
         <View style={{width:140,height:140,position:'relative'}}>
            <Image style={{width:24,height:24,position:'absolute',top:12,left:12,zIndex:999,objectFit:'contain'}} source={require("../assets/images/isLove.png")}/>
            <Image style={{width:'100%',height:'100%',borderTopLeftRadius:20,borderBottomLeftRadius:20}} source={require("../assets/images/last.png")}  />
         </View>
         <View style={{display:'flex',flex:1,height:140,backgroundColor:'white',padding:12,borderTopRightRadius:20,borderBottomRightRadius:20}}>
             <Text numberOfLines={2} style={{fontSize:16,fontWeight:'bold'}}>Classic Package Magic Bag</Text>
             <View style={{display:'flex',flexDirection:'row',alignItems:'center',marginTop:8}}>
                <Text style={{marginRight:4,color:config.text_color_4}}>4.7</Text>
                 <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                    {
                        [0,0,0,0,0].map((item,index)=>{
                            if(index<4){
                               return <AntDesign name="star" size={15} color="#FCBF13" />
                            }
                        })
                    }
                   
                 </View>
                 <Image source={require('../assets/images/Vector.png')} style={{width:12,height:12,marginLeft:8,objectFit:'contain'}} />
                 <Text style={{fontSize:12,marginLeft:2,color:config.text_color_4}}>(300+)</Text>
                 <View style={{width:1,height:12,marginHorizontal:8,backgroundColor:'rgba(0,0,0,0.2)'}}></View>
                 <Image style={{width:12,height:12,objectFit:'contain'}} source={require("../assets/images/position.png")} />
                 <Text style={{fontSize:12,marginLeft:2,color:config.text_color_4}}>0.4km</Text>
             </View>
             <Text style={{fontSize:13,color:config.text_color_2,marginTop:6}}>Collect: Today 09:00-20:00</Text>
             <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                   <View style={{display:'flex',flexDirection:'row',alignItems:'center'}}>
                      <Text style={{fontSize:20,color:config.text_color_3}}>AU$5.99</Text>
                      <Text style={{fontSize:14,color:config.text_color_4,textDecorationLine:'line-through',marginLeft:4}}>AU$96</Text>
                   </View>
                   <View>
                      <Image source={require('../assets/images/shopIcon.png')} style={{width:45,height:45}} />
                   </View>
             </View>
         </View>
    </View>)
}