import { LinearGradient } from "expo-linear-gradient";
import { Image, View, Text, Dimensions } from "react-native";
export function Intro1(props) {
    return (<View style={{ display: 'flex', flex: 1,  marginTop: 96 }}>
        {/* <View style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', alignItems: "center" }}>
            <Image source={props.uri} style={{ width: Dimensions.get("window").height*0.35, height: Dimensions.get("window").height*0.35, borderRadius: 300 }} resizeMode="contain" />
            <Text style={{ marginTop:  Dimensions.get("window").height*0.03, fontSize: 24,  textShadowColor: 'grey', textShadowRadius: 3, textShadowOffset: { width: 0, height: 2 } }}>{props.title}</Text>
            <Text adjustsFontSizeToFit style={{ marginTop:  Dimensions.get("window").height*0.03, textAlign: 'center', color: 'rgba(0,0,0,0.3)', fontSize:20, paddingHorizontal: 24, height: 100 }}>{props.desc}</Text>
        </View> */}
        <Text style={{ fontSize: 27.5, fontWeight: '600',paddingHorizontal: 32, color: '#25745B'  }}>{props.title}</Text>
        <Text style={{ display: 'flex', flexWrap: 'wrap', marginTop: 24, paddingHorizontal: 32, fontSize: 11.5 }}>{props.desc}</Text>
        <View style={{ width:'100%',height:'100%',paddingHorizontal: 32,marginTop:28 }}>
            <Image source={props.uri} style={{ width: '100%', height: '100%' }} />
        </View>

    </View>)
}

// export function Intro2(){
//     return (<View style={{display:'flex',flex:1}}>
//         <View style={{display:'flex',flex:1,justifyContent:'center',alignItems:"center",marginBottom:72}}>
//               <Image src="" style={{width:300,height:300,backgroundColor:'red',borderRadius:300}} />
//               <Text style={{marginTop:48,fontSize:24,fontWeight:'bold',textShadowColor:'black',textShadowOffset:{width:4,height:5}}}>ECO</Text>
//               <Text style={{marginTop:48,textAlign:'center',color:'rgba(0,0,0,0.3)',fontSize:20,paddingHorizontal:20}}>Fight against hunger,food conservation,environmental protection</Text>
//         </View>
//     </View>)
// }

// export function Intro3(){
//     return (<View style={{display:'flex',flex:1}}>
//         <View style={{display:'flex',flex:1,justifyContent:'center',alignItems:"center",marginBottom:72}}>
//               <Image src="" style={{width:300,height:300,backgroundColor:'red',borderRadius:300}} />
//               <Text style={{marginTop:48,fontSize:24,fontWeight:'bold',textShadowColor:'black',textShadowOffset:{width:4,height:5}}}>ECO</Text>
//               <Text style={{marginTop:48,textAlign:'center',color:'rgba(0,0,0,0.3)',fontSize:20,paddingHorizontal:20}}>Fight against hunger,food conservation,environmental protection</Text>
//         </View>
//     </View>)
// }