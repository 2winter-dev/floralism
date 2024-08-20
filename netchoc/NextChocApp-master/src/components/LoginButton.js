import { Image, View,Text } from "react-native";

export default function LoginButton(props){
    return (<View style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%',borderWidth:1.5,borderRadius:32,borderColor:props.first?'#25745B':'rgba(0,0,0,0.3)',backgroundColor:props.first?'#25745B':'transparent',marginTop:24,paddingVertical:12,}}>
    <View style={{display:'flex',width:200,flexDirection:'row',alignItems:'center'}}>
        <Image source={props.source} style={{marginRight:8 ,width:20,height:20}} />
        <View>
          <Text style={{fontSize:14,fontWeight:'500',color:props.first?'white':'black',letterSpacing:0.3}}>{props.title}</Text>
        </View>
    </View></View>)
}