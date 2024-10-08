import { useInfiniteQuery, useMutation } from "@tanstack/react-query"
import { ScrollView, View, RefreshControl, Pressable, Image, Text, Switch } from "react-native"
import { Octicons, AntDesign } from "@expo/vector-icons";
import config from "../../common/config";
import ShopAPI from "../../api/ShopAPI"
import useThrottle from "../../common/hooks/useThrottle";
import { useState } from "react";
import { useToken } from "../../common/store/user";
import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons,MaterialIcons } from "@expo/vector-icons";
import FavorItem from "../../components/FavorItem";
export default function FavorList() {
    const navigation = useNavigation();
    const [page, setPages] = useState(1);
    const token = useToken();
    const [isEnabled,setIsEnabled]=useState([]);
    // const navigation = useNavigation()
    const favorlist = useInfiniteQuery({
        queryKey: ['favorlist', token],
        queryFn: (data) => ShopAPI.collectList({ ...data, listRows: 5, page: page, token }),
        getNextPageParam: (_d, pages) => {
            return _d.current_page + 1 > _d.last_page ? false : _d.current_page + 1;
        },
        onSuccess: (res) => {
            setPages(page + 1);
            //////console.log(res.pages[0].data);
        },
        onError: (res) => {
            Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
        }
    })
    const uncollect = useMutation({
        mutationFn: () => ShopAPI.uncollectShop({ token, merchant_id: route.params?.id }),
        mutationKey: ['uncollect'],
    })
    const StatusUpdate=()=>{
        favorlist.refetch();
    }
    const _onMomentumScrollEnd = ({ nativeEvent }) => {
        const isCloseToBottom =
            nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >
            nativeEvent.contentSize.height - 30;
    
        if (isCloseToBottom) {
            if (favorlist.isFetchingNextPage || !favorlist.hasNextPage) return;
            ////////console.log("123");
            useThrottle(favorlist.fetchNextPage(), 3000)

        }
    }
    return (<ScrollView refreshControl={<RefreshControl refreshing={favorlist.isFetching} onRefresh={favorlist.refetch} />} onMomentumScrollEnd={_onMomentumScrollEnd} contentContainerStyle={{ paddingHorizontal: 16,paddingBottom:48}}>
        {
            favorlist.isSuccess && favorlist.data.pages.map((item, index) => {
                return item.data.map((it, idx) => {
                    //console.log(it);
                    // return (<View key={idx} style={{ marginTop: 18 }}>
                    //     <Pressable onPress={() => navigation.navigate("Bussiness.shop", { id: it.merchant_id })} style={{ display: 'flex', flexDirection: 'row', alignItems: "center" }}>
                    //         <View style={{ position: 'relative' }}>
                    //             <Image source={{ uri: it.logo_format }} style={{ width: 105, height: 105, borderRadius: 12 }} resizeMode="cover" />

                    //         </View>

                    //         <View style={{ flex: 1, marginLeft: 12, display: 'flex' }}>
                    //             <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                    //                 {it.score !== 0 && <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', paddingHorizontal: 8, paddingVertical: 4, backgroundColor: config.primaryColor, borderRadius: 8 }}>
                    //                     <AntDesign name="star" size={18} color="rgb(240,185,55)" style={{ marginRight: 4 }} />
                    //                     <Text style={{ fontSize: 16, color: 'white' }}>{it.score}</Text>
                    //                 </View>}
                    //                 <Text style={{ marginLeft: 8, fontSize: 18, maxWidth: '70%' }}>{it.merchant_name}</Text>
                    //                 <View style={{ marginLeft: 'auto', width: 60, display: 'flex', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 6, paddingVertical: 2, backgroundColor: '#F5C52B', borderRadius: 24, justifyContent: 'center' }}><AntDesign name="star" size={14} color={'white'} style={{ marginRight: 2 }} /><Text style={{ color: '#fff', fontSize: 12 }}>Liked</Text></View>

                    //             </View>
                    //             <Text style={{ color: 'rgba(0,0,0,0.2)', marginTop: 8, marginBottom: 12 }}>{it.merchant_address}</Text>
                    //             <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    //                 <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginRight: 8 }}>
                    //                     <Octicons style={{ marginRight: 4 }} name="dot-fill" size={12} color="black" />
                    //                     <Text>{it.distance}</Text>
                    //                 </View>
                    //                 <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    //                     <Octicons style={{ marginRight: 4 }} name="dot-fill" size={12} color="black" />
                    //                     <Text style={{ color: 'rgba(0,0,0,0.3)' }}>opening: {it.business_hours}</Text>
                    //                 </View>
                    //             </View>
                    //         </View>


                    //     </Pressable>
                    //     <View style={{ display: 'flex', paddingBottom: 18, borderBottomWidth: 0.5, borderBottomColor: 'rgba(0,0,0,0.2)', flexDirection: 'row', marginTop: 24, alignItems: 'center' }}>
                    //         <View style={{ width: 36, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    //             <MaterialIcons name="lock" size={24} color="black" />
                    //         </View>
                    //         <View style={{ marginLeft: 12 }}>
                    //             <Text style={{ fontSize: 16 }}>Promotional notifications</Text>
                    //             <Text style={{ fontSize: 16, color: 'rgba(0,0,0,0.4)' }}>For daily update you will get</Text>
                    //         </View>
                    //         <View style={{ marginLeft: 'auto' }}>
                    //             <Switch
                    //                 trackColor={{ false: '#767577', true: 'rgb(98,141,47)' }}
                    //                 thumbColor={isEnabled2 ? 'white' : '#f4f3f4'}
                    //                 ios_backgroundColor="#3e3e3e"
                    //                 onChange={(e) => {
                    //                     e.preventDefault();
                    //                 }}
                    //                 onValueChange={(e) => {
                                       
                    //                 }}
                                   
                    //             />
                    //         </View>
                    //     </View>

                    // </View>)
                    return <FavorItem it={it} key={idx}  StatusUpdate={StatusUpdate} />
                })
            })
        }
    </ScrollView>)
}