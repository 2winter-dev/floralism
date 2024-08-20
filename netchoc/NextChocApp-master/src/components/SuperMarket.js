import { View,Image,Text } from "react-native";
import config from "../common/config";


export default function SuperMarket(props) {

    return (<View style={{
        width: 90,
        height: 90,
        borderRadius: 50,
        backgroundColor: 'white',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        marginHorizontal:4,
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        elevation: 4,
        marginBottom:4,
    }}>
        <Image source={require("../assets/images/shopIcon.png")} style={{width:40,height:40,borderRadius:50}} />
        <Text numberOfLines={1} style={{marginTop:4}}>Coles</Text>
        <Text style={{color:config.text_color_1,fontSize:12}}>1.2km</Text>
    </View>)
}