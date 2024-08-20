import { useNavigation } from "@react-navigation/native"
import { View, Text, Pressable, Image, Alert } from "react-native"
import config from "../common/config";
import { useMutation } from "@tanstack/react-query";
import ShopAPI from "../api/ShopAPI";

export default function OrderItem(props) {
    const navigation = useNavigation();
    // console.log('props:', props.item)
    // console.log( new Date(props.item.create_time_format).getTime());
    const time = props.item.create_time_format.split(" ")[0].split("-")
    // console.log()
    let expire_time = props.item.create_time_format.split(" ")[0].split("-")[0] + "-" + props.item.create_time_format.split(" ")[0].split("-")[1] + "-" + (Number(props.item.create_time_format.split(" ")[0].split("-")[2]) + 1) + " 00:00:00"
    // console.log((new Date()-new Date(expire_time))/86400000);
    const refund = useMutation({
        mutationFn: () => ShopAPI.cancelOrder({ order_id: props.item.id, token: props.token }),
        mutationKey: ['refund'],
    })
    const canRefund = () => {
        ////console.log();
        ////console.log(new Date(props.item.create_time_format))
        ////console.log("===");
        ////console.log((new Date() - new Date(props.item.create_time_format)) / 1000 / 60);

        return props.item.payment_status === 2 ? false : (props.item.status === 3 ? false : (new Date() - new Date(props.item.create_time_format)) / 1000 / 60 < 60);
    }
    return (<Pressable onPress={() => props.item.status !== 3 ? navigation.navigate("Bussiness.orderStatus", { id: props.item.id }) : navigation.navigate("Bussiness.orderfinish", { id: props.item.id })} style={{ display: 'flex', marginBottom: 24, borderBottomColor: 'rgba(0,0,0,0.2)', borderBottomWidth: 1, paddingBottom: 12, backgroundColor: 'red', borderRadius: 30, padding: 16 }}>
        <View style={{ display: 'flex', flex: 1, flexDirection: 'row', borderBottomColor: 'rgba(0,0,0,0.2)', borderBottomWidth: 1, paddingBottom: 16 }}>
            <View style={{ borderRadius: 12, overflow: "hidden", width: 63, height: 63 }}>
                <Image source={{ uri: props.item?.image }} style={{ width: '100%', height: '100%' }} />
            </View>
            <View style={{ marginLeft: 16, display: 'flex', height: 63, flex: 1, justifyContent: 'space-between' }}>
                <Text numberOfLines={1} style={{ fontSize: 20, width: '100%', width: '60%' }}>{props.item.title}</Text>
                <Text style={{ color: '#5E5E5E' }}>Collect : Today 09:00-20:00</Text>
                {/* <Text numberOfLines={1} style={{ fontSize: 16, color: 'rgba(0,0,0,0.7)', marginTop: 8, width: 200, padding: 0 }}>{props.item?.description.replace(" ", "")}</Text>
            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 4 }}>
                <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.7)' }}>{props.item?.goods_count} suprise box</Text>

            </View>

            <Text style={{ marginTop: 8, fontSize: 12, color: config.primaryColor, fontWeight: "500" }}>{props.item?.create_time_format.slice(0, 16)}</Text> */}


            </View>
            <View style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center' }}>
                <Pressable style={{ width: 23, height: 23, backgroundColor: '' }}>
                    <Image source={require('../assets/images/right2.png')} style={{ width: 33, height: 33 }} />
                </Pressable>
                {/* <Text style={{ paddingHorizontal: 12, marginTop: 4 }}>{
                // props.item.status_mean
                (props.item.payment_status === 2 ? "Refunded" :
                   props.item.status === 3 ? "Completed":((new Date()-new Date(expire_time))/86400000 > 0 ? "Expired" : (props.item.status === 0 ? "Purchased" : props.item.status === 1 ? "Preparing" : props.item.status === 2 ? "Refunded" : props.item.status === 4 ? "Ready" : null)))
            }
            </Text>
            <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.7)', marginTop: 34, textAlign: 'center' }}>{config.current}{props.item?.actual_payment_amount}</Text>
            {!!props.item.is_allow_cancel && <Pressable onPress={() => {
                Alert.alert("Notice", "Are you sure you want to cancel this order?", [
                    {
                        text: 'Cancel',
                        style: 'cancel',
                    },
                    {
                        text: 'Refund', onPress: () => {
                            refund.mutate(null, {
                                onSuccess: (res) => {
                                    ////////console.log(res);
                                    props.func.refetch();
                                },
                                onError: (res) => {
                                    Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
                                }
                            })
                        }
                    },
                ]);
            }} style={{ marginTop: 'auto', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 20, backgroundColor: config.primaryColor, }}>
                <Text style={{ color: 'white' }}>Withdraw</Text>
            </Pressable>} */}
            </View>
        </View>
        <View style={{ paddingTop: 16 }}>
            <Text style={{ color: '#969696' }}>Order time:  {props.item?.create_time_format.slice(0, 16)}</Text>
            <Text style={{ color: '#969696', marginTop: 4 }}>Order number: 2161485941513468416516516</Text>
            <View style={{ marginTop: 16,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'flex-end' }}>

                <Pressable style={{paddingHorizontal:12,paddingVertical:8,marginRight:12,borderColor:'#25745B',borderWidth:1,borderRadius:30}}><Text style={{fontSize:18,color:'#25745B'}}>Pending colleciton</Text></Pressable>
                <Pressable style={{paddingHorizontal:12,paddingVertical:8,marginRight:12,backgroundColor:'#25745B',borderRadius:30}}><Text style={{fontSize:18,color:'white'}}>Save again</Text></Pressable>
            </View>
        </View>
    </Pressable>)
}