
import { Dimensions, ImageBackground, Modal, View, Image, Text, ScrollView, Pressable, ActivityIndicator, RefreshControl } from "react-native"
import React from "react"
import { useInfiniteQuery } from "@tanstack/react-query";
import { useToken } from "../common/store/user";
import OrderAPI from "../api/OrderAPI";
import config from "../common/config";
import { useState } from "react";
import useThrottle from "../common/hooks/useThrottle";
export default function AccountModal({ visible, onExits }) {
    const token = useToken();
    const [lpage,setLPage]=useState(0);
    const [page,setPage]=useState(1);
    const fetchFinishOrderList = useInfiniteQuery({
        queryFn: ({ pageParam = 1, ...data }) => OrderAPI.fetchFinishOrderList({ ...data, page: pageParam, token }),
        queryKey: ['fetchFinishOrderList',token],
        onSuccess: (res) => {
            console.log(res);
            setLPage(res.pages[0].last_page);
            setPage(res.pages[0].current_page);
        },
        onError: (res) => {
            // Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
        },
        enabled: !!token,
    })

    const _onMomentumScrollEnd = ({ nativeEvent }) => {
        const isCloseToBottom =
           nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >
           nativeEvent.contentSize.height - 30;
        if (isCloseToBottom) {
           if (fetchFinishOrderList.isFetchingNextPage || !fetchFinishOrderList.hasNextPage) return;
           //////////////////console.log("123");
           useThrottle(fetchFinishOrderList.fetchNextPage(), 3000)
  
        }
     }
    return (<Modal statusBarTranslucent visible={visible} onRequestClose={onExits} transparent={true} animationType='slide'>
        <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.7)', justifyContent: 'flex-end' }}>
            <Pressable style={{ flex: 1 }} onPress={onExits}>

            </Pressable>
            <View style={{ width: '100%', position: 'relative', height: Dimensions.get("screen").height * 0.6, borderTopLeftRadius: 8, borderTopRightRadius: 8 }}>
                <Image source={require('../assets/images/bg.png')} style={{ width: '100%', position: 'absolute', height: '100%', borderTopLeftRadius: 8, borderTopRightRadius: 8 }} />
                <Image source={require("../assets/images/bg6.png")} style={{ position: 'absolute', width: '50%', left: '50%', top: -85, transform: [{ translateX: -Dimensions.get('screen').width * 0.25 }] }} />
                <Text style={{ textAlign: 'center', fontSize: 16, color: '#1B5025', top: -10, fontWeight: 'bold' }}>Records</Text>

                <View style={{ padding: 16, flex: 1 }}>
                    <ScrollView style={{ backgroundColor: 'white', flex: 1, borderRadius: 8 }} onMomentumScrollEnd={_onMomentumScrollEnd} refreshControl={<RefreshControl refreshing={fetchFinishOrderList.isLoading} onRefresh={fetchFinishOrderList.refetch} />}>
                        {/* <View style={{marginHorizontal:12,marginVertical:16,flexDirection:'row',alignItems:'center'}}>
                               <Image style={{width:50,height:50,borderRadius:12,backgroundColor:'rgb(239,245,233)'}} />
                               <View style={{marginLeft:8}}>
                                  <Text style={{fontSize:18,color:'#4A4A4A',fontWeight:'500'}}>Emma Conner</Text>
                                  <Text style={{color:'#999999',fontSize:12,marginTop:7}}>2023-12-12 12:34</Text>
                                </View>
                                <View style={{marginLeft:'auto',alignItems:'flex-end'}}>
                                     <View style={{flexDirection:'row',alignItems:'center'}}>
                                        <Image source={require("../assets/images/teaicon.png")} style={{marginRight:3}} />
                                        <Text style={{fontWeight:'bold',color:'#548E16',fontSize:18}}>270g</Text>
                                     </View>
                                     <View style={{marginTop:6}}>
                                        <Text style={{color:'#548E16',fontSize:12,fontWeight:'500'}}>300 AU$  | Box 2</Text>
                                     </View>
                                </View>
                           </View> */}
                        {
                            fetchFinishOrderList.isLoading ? <ActivityIndicator size={'large'} color={config.primaryColor} /> :
                                fetchFinishOrderList.isSuccess && fetchFinishOrderList.data.pages.map((item, index) => {
                                    if(!item.data.length&&index===0){
                                        return (<Text style={{textAlign:'center',fontSize:16,marginTop:120}}>There are currently no orders available</Text>)
                                    }
                                    return item.data.map((it, idx) => {
                                        return (<View key={idx} style={{ marginHorizontal: 12, marginVertical: 16, flexDirection: 'row', alignItems: 'center' }}>
                                            <Image source={{ uri: it.image }} style={{ width: 50, height: 50, borderRadius: 12, backgroundColor: 'rgb(239,245,233)' }} />
                                            <View style={{ marginLeft: 8 }}>
                                                <Text style={{ fontSize: 18, color: '#4A4A4A', fontWeight: '500' }}>{it.description}</Text>
                                                <Text style={{ color: '#999999', fontSize: 12, marginTop: 7 }}>{it.create_time_format}</Text>
                                            </View>
                                            <View style={{ marginLeft: 'auto', alignItems: 'flex-end' }}>
                                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                    <Image source={require("../assets/images/teaicon.png")} style={{ marginRight: 3 }} />
                                                    <Text style={{ fontWeight: 'bold', color: '#548E16', fontSize: 18 }}>{it.co2}kg</Text>
                                                </View>
                                                <View style={{ marginTop: 6 }}>
                                                    <Text style={{ color: '#548E16', fontSize: 12, fontWeight: '500' }}>{it.actual_payment_amount} AU$  | Box {it.goods_count}</Text>
                                                </View>
                                            </View>
                                        </View>)
                                    })
                                })
                        }
                    </ScrollView>
                </View>
            </View>
        </View>
    </Modal>)
}