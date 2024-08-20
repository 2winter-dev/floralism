import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons, AntDesign, Octicons,Ionicons } from "@expo/vector-icons";
import { ScrollView, View, RefreshControl, Pressable, Image, Text, Switch } from "react-native"
import config from "../common/config"
import { useState } from "react";
import ShopAPI from "../api/ShopAPI";
import { useMutation } from "@tanstack/react-query";
import { useDevToken, useToken } from "../common/store/user";
export default function FavorItem(props) {
    const navigation = useNavigation();
    const token=useToken();
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [is_subscribe,setIs_subscribe]=useState(props.it.is_subscribe);
    const devToken = useDevToken();
    const describe = useMutation({
        mutationFn: (data) => ShopAPI.describeShop(data),
        mutationKey: ['describe'],
    })
    const undescribe = useMutation({
        mutationFn: (data) => ShopAPI.undescribe(data),
        mutationKey: ['undescribe']
    })
    return ((<View style={{ marginTop: 18 }}>
        <Pressable onPress={() => navigation.navigate("Bussiness.shop", { id: props.it.merchant_id })} style={{ display: 'flex', flexDirection: 'row', alignItems: "flex-start" }}>
            <View style={{ position: 'relative' }}>
                <Image source={{ uri: props.it.logo_format }} style={{ width: 110, height: 110, borderRadius: 12 }} resizeMode="cover" />

            </View>

            <View style={{ flex: 1, marginLeft: 12, display: 'flex' }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                    {props.it.score !== 0 && <View style={{ display: 'flex', flexDirection: 'row',marginRight:8, alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 8, paddingVertical: 4, backgroundColor: config.primaryColor, borderRadius: 8 }}>
                        <AntDesign name="star" size={18} color="rgb(240,185,55)" style={{ marginRight: 4 }} />
                        <Text style={{ fontSize: 16, color: 'white' }}>{props.it.score}</Text>
                    </View>}
                    <Text style={{ fontSize: 18, maxWidth: '70%' }}>{props.it.merchant_name}</Text>
                    <View style={{ marginLeft: 'auto', width: 60, display: 'flex', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 6, paddingVertical: 2, backgroundColor: '#F5C52B', borderRadius: 24, justifyContent: 'center' }}><AntDesign name="star" size={14} color={'white'} style={{ marginRight: 2 }} /><Text style={{ color: '#fff', fontSize: 12 }}>Liked</Text></View>

                </View>
                <Text style={{ color: 'rgba(0,0,0,0.2)', marginTop: 6, marginBottom: 6 }}>{props.it.merchant_address}</Text>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    {/* <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: 8 }}>
                        <Octicons style={{ marginRight: 4 }} name="dot-fill" size={12} color="black" />
                        <Text>{props.it.distance}</Text>
                    </View> */}
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Octicons style={{ marginRight: 4 }} name="dot-fill" size={12} color="black" />
                        <Text style={{ color: 'rgba(0,0,0,0.3)' }}>opening: {props.it.business_hours}</Text>
                    </View>
                </View>
            </View>


        </Pressable>
        <View style={{ display: 'flex', paddingBottom: 18, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', marginTop: 24}}>
{/* 
            <View style={{ marginLeft: 12 }}>
                <Text style={{ fontSize: 16 }}>New Product Notification</Text>
            </View> */}
            <View style={{ marginTop:8}}>
                {<View style={{  display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexDirection: 'row' }}>
                    <Pressable onPress={() => {
                          if (!token) {
                            Toast.show("please login in first!");
                            return;
                        }
                        if (!!is_subscribe) {
                            undescribe.mutate({ token, merchant_id: props.it.merchant_id,exponent_push_token: devToken}, {
                                onSuccess: (res) => {
                                    // //console.log(res);
                                    Toast.show("Unsubscription successful!");
                                    setIs_subscribe(false);
                                    props.StatusUpdate();
                                },
                                onError: (res) => {
                                    Toast.show("Unsubscription failed!");
                                    // //console.log(res);
                                }
                            })
                        }else{
      
                            describe.mutate({ token, merchant_id: props.it.merchant_id,exponent_push_token: devToken}, {
                                onSuccess: (res) => {
                                    // //console.log(res);
                                    Toast.show("Subscription successful!");
                                    setIs_subscribe(true);
                                    props.StatusUpdate();
                                },
                                onError: (res) => {
                                    Toast.show("Subscription failed!");
                                    // //console.log(res);
                                }
                            })
                        }
                
                    }} style={{ paddingVertical: 12, borderRadius: 24, flexDirection: 'row', alignItems: 'center', paddingHorizontal: 16, backgroundColor: is_subscribe ? 'rgba(0,0,0,0.6)' : config.primaryColor }}>
                        <Ionicons name="notifications" size={16} color="white" style={{ marginRight: 8 }} />
                        <Text style={{ color: 'white' }}>{is_subscribe ? 'Subscribed' : 'Sale Notification'}</Text>
                    </Pressable>
                </View>}
            </View>
        </View>

    </View>))
}