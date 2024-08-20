import { View, Text, Image, Pressable } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function RateItem(props) {
    console.log(props.item)
    return (<View style={{ paddingBottom: 12, borderBottomColor: 'rgba(0,0,0,0.1)', borderBottomWidth: 1, marginVertical: 4 }}>
        <View style={{ display: 'flex', alignItems: 'center', flexDirection: 'row', justifyContent: 'space-between' }}>
            <View style={{ flex: 1 }}>
                <Text style={{ fontSize: 18, fontWeight: '500', width: '100%' }}>{props.item.it.nickname}</Text>
                <Text style={{ fontSize: 14, color: 'rgba(0,0,0,0.3)', marginTop: 4 }}>{props.item.it.create_time_format}</Text>
            </View>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                {
                    [1, 2, 3, 4, 5].map((item, index) => {
                        if (props.item.it.score > index) {
                            return (<AntDesign key={index} name="star" size={18} color="rgb(240,185,55)" style={{ marginRight: 4 }} />)
                        } else return (<AntDesign key={index} name="star" size={18} color="rgba(0,0,0,0.1)" style={{ marginRight: 4 }} />)
                    })
                }
            </View>
        </View>



        {
            props.item.it.content === "" ? <Text style={{ marginTop: 4, color: 'rgba(0,0,0,0.3)' }}>{"This user hasn't provided any comments"}</Text> : <Text numberOfLines={3} style={{ marginTop: 4 }}>{props?.item?.it.content}</Text>
        }
        <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 8 }}>
            {
                props.item.it.images && !!props.item.it.images?.length && props.item.it.images.map((item, index) => {
                    return (<Pressable key={index} onPress={() => {
                        console.log("1");
                        props.setImage(item);
                        props.previewImg[1](true);
                    }} ><Image key={index} source={{ uri: item }} style={{ width: 72, height: 72, borderRadius: 12, marginLeft: index === 0 ? 0 : 8 }} /></Pressable>)
                })
            }
        </View>
    </View>)
}