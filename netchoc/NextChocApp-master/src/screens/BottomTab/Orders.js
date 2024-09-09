import OrderItem from "../../components/orderItem"
import { useInfiniteQuery, useQuery } from "@tanstack/react-query"
import OrderAPI from "../../api/OrderAPI"
import { useToken } from "../../common/store/user"
import config from "../../common/config"
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { useState, useRef } from "react"
import { View, Image, Dimensions, RefreshControl, Pressable, Text, Animated, ScrollView } from "react-native";


export default function Orders({ navigation }) {
  const token = useToken();
  // ////////console.log(token)
  
  const [status, setStatus] = useState(0)
  const [orderList, setOrderList] = useState({ pages: [], pageParams: [] });
  const scroll = useRef(new Animated.Value(0)).current;
  const fetchOrderList = useInfiniteQuery({
    enabled: !!token,
    queryFn: ({ pageParam = 1, ...data }) => OrderAPI.fetchOrderList({ ...data, page: pageParam, token, status: status > 5 ? 0 : status }),
    queryKey: ['fetchOrderList', status],
    onSuccess: (res) => {
      ////console.log(res);
      setOrderList(res);
    },
    onError: (res) => {
      // Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
    },
  })
  const changeIndex = (index) => {
    Animated.timing(scroll, {
      toValue: index === 0 ? 0 : index === 4 ? (Dimensions.get("screen").width - 32) / 4 : (index === 5 ? (Dimensions.get("screen").width - 32) * 2 / 4 : (Dimensions.get("screen").width - 32) * 3 / 4),
      duration: 300,
      useNativeDriver: true,
    }).start();
    setStatus(index);
  }
  const _onMomentumScrollEnd = ({ nativeEvent }) => {
    const isCloseToBottom =
      nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >
      nativeEvent.contentSize.height - 30;

    if (isCloseToBottom) {
      if (fetchOrderList.isFetchingNextPage || !fetchOrderList.hasNextPage) return;
      ////////////console.log("123");
      useThrottle(fetchOrderList.fetchNextPage(), 3000)

    }
  }

  return (<View style={{ flex: 1 }}>
    <View style={{ height: 45 }}>
      {/* <Pressable style={{ position: 'relative' }} onPress={() => setStatus(0)}>
        <Text style={{ paddingVertical: 12, paddingHorizontal: 12, marginRight: 12, fontSize: 15, fontWeight: '500' }}>All</Text>
        {
          <View style={{ width: '30%', left: '30%', transform: [{ translateX: -3 }], bottom: 10, height: 5, borderRadius: 24, backgroundColor: status === 0 ? config.primaryColor : 'transparent' }}></View>
        }
      </Pressable>
      <Pressable style={{ position: 'relative' }} onPress={() => setStatus(4)}>
        <Text style={{ paddingVertical: 12, marginRight: 12, fontSize: 15, fontWeight: '500' }}>Pending Order</Text>
        {
          <View style={{ width: '30%', left: '30%', bottom: 10, height: 5, borderRadius: 24, backgroundColor: status === 4 ? config.primaryColor : 'transparent' }}></View>
        }
      </Pressable>
      <Pressable style={{ position: 'relative' }} onPress={() => setStatus(5)}>
        <Text style={{ paddingVertical: 12, marginRight: 12, fontSize: 15, fontWeight: '500' }}>Pending Review</Text>
        {
          <View style={{ width: '30%', left: '30%', bottom: 10, height: 5, borderRadius: 24, backgroundColor: status === 5 ? config.primaryColor : "transparent" }}></View>
        }
      </Pressable>
      <Pressable style={{ position: 'relative' }} onPress={() => setStatus(2)}>
        <Text style={{ paddingVertical: 12, marginRight: 12, fontSize: 15, fontWeight: '500' }}>Refund/Expired</Text>

        {
          <View style={{ width: '30%', left: '30%', bottom: 10, height: 5, borderRadius: 24, backgroundColor: status === 2 ? config.primaryColor : 'transparent' }}></View>
        }

      </Pressable> */}

      <View style={{ marginHorizontal: 16, flex: 1, position: 'relative', backgroundColor: '#E2E9E6', paddingHorizontal: 16, borderRadius: 40, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
        <Pressable style={{ flex: 1, display: 'flex', textAlign: 'center', fontSize: 18, fontWeight: '500' }} onPress={() => changeIndex(0)}>
          <Text style={{ textAlign: 'center' }}>All</Text>
        </Pressable>
        <Pressable style={{ flex: 1, display: 'flex', textAlign: 'center', fontSize: 18, fontWeight: '500' }} onPress={() => changeIndex(4)}>
          <Text style={{ textAlign: 'center' }}>Pending Order</Text>
        </Pressable>
        <Pressable style={{ flex: 1, display: 'flex', textAlign: 'center', fontSize: 18, fontWeight: '500' }} onPress={() => changeIndex(5)}>
          <Text style={{ textAlign: 'center' }}>Pending Review</Text>
        </Pressable>
        <Pressable style={{ flex: 1, display: 'flex', textAlign: 'center', fontSize: 18, fontWeight: '500' }} onPress={() => changeIndex(2)}>
          <Text style={{ textAlign: 'center' }}>Refund/Expired</Text>
        </Pressable>
        <Animated.View style={{ position: 'absolute', transform: [{ translateX: scroll }], top: 0, bottom: 0, backgroundColor: '#25745B', width: '25%', borderRadius: 40, zIndex: 0 }}>
          <Text style={[{ flex: 1, display: 'flex', textAlign: 'center', lineHeight: 45, fontSize: 18, fontWeight: '500', color: 'white' }]}>{status === 0 ? "All" : status === 4 ? "Pending Order" : status === 5 ? "Pending Review" : "Refund/Expired"}</Text>
        </Animated.View>
      </View>

    </View>
    <Pressable onPress={()=>navigation.navigate("Bussiness.orderfinish", { id: 0 })} style={{}}><Text>前往评价</Text></Pressable>
    <Pressable onPress={()=>navigation.navigate("InviteShop")} style={{}}><Text>InviteShop</Text></Pressable>
    <ScrollView style={{ paddingLeft: 16, marginRight: 16, flex: 1 }} showsVerticalScrollIndicator={false} refreshControl={<RefreshControl onRefresh={fetchOrderList.refetch} refreshing={fetchOrderList.isFetching || fetchOrderList.isLoading} />} onMomentumScrollEnd={_onMomentumScrollEnd}>

      <View style={{ marginTop: 18 }}></View>
      {/* <OrderItem status={"Pending"}></OrderItem>
      <OrderItem status={"Pending"}></OrderItem>
      <OrderItem status={"Completed"r}></OrderItem>
      <OrderItem status={"Completed"}></OrderItem> */}
      {/* <OrderItem func={{
          refetch:()=>{

          }
      }} key={0} item={{
         goods_count:1,
         payment_amount:1,
         title:"a1qa2ea3r",
         create_time_format:"2023-10-23",
         description:"123",
         payment_status:0,
         status:1,
         is_allow_cancel:true
      }} token={token}></OrderItem> */}

   
      {
        !!token && (fetchOrderList.isSuccess &&
          fetchOrderList.data.pages.map((item, index) => {

            if (index === 0 && item.data.length === 0) {
              if (status === 0) {
                return <View key={index} style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: Dimensions.get("screen").height * 0.7 }}>
                  <Image source={require('../../assets/images/no_order_yet.png')} style={{ width: 125, height: 125 }} />
                  <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 24 }}>No Order</Text>
                </View>
              }else if(status===4){
                return <View key={index} style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: Dimensions.get("screen").height * 0.7 }}>
                <Image source={require('../../assets/images/PendingOrder.png')} style={{ width: 125, height: 125 }} />
                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 24 }}>No Pending Order</Text>
              </View>
              }else if(status===5){
                return <View key={index} style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: Dimensions.get("screen").height * 0.7 }}>
                <Image source={require('../../assets/images/PendingReview.png')} style={{ width: 125, height: 125 }} />
                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 24 }}>No Pending Review</Text>
              </View>
              }else if(status===2){
               
                return <View key={index} style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: Dimensions.get("screen").height * 0.7 }}>
                <Image source={require('../../assets/images/cancel.png')} style={{ width: 125, height: 125 }} />
                <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 24 }}>No  Refund/Expired</Text>
              </View>
              }
              
            }

            return item.data.map((it, idx) => {
              // if (it.payment_status === 0) return;
              const time = it.create_time_format.split(" ")[0].split("-");
              let expire_time = time[0] + "-" + time[1] + "-" + (Number(time[2]) + 1) + " 00:00:00";
              if (status === 4 && (new Date() - new Date(expire_time)) / 86400000 > 0) {
                return null;
              }
              // if (status === 7) {
              //   if ((new Date() - new Date(expire_time)) / 86400000 < 0 && it.payment_status !== 2) {
              //     return null;
              //   }
              //   if (it.status === 3) {
              //     return null;
              //   }
              // }
              return (<OrderItem func={fetchOrderList} key={idx} item={it} token={token}></OrderItem>)
            })
          }))

      }
      {/* {
      !!token && !fetchOrderList.isLoading && (!!fetchOrderList.isSuccess ?
        (!!fetchOrderList.data.pages.length ?
          fetchOrderList.data.pages.map((item, index) => {
            return item.data.map((it, idx) => {
              if (it.payment_status === 0) return;
              return (<OrderItem func={fetchOrderList} key={idx} item={it} token={token}></OrderItem>)
            })
          }) 
          : <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Ionicons name="md-cart-outline" size={80} color="black" />
            <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 24 }}>No order yet</Text>
          </View>) : <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <MaterialIcons name="error" size={48} color="black" />
          <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 24 }}>Fetch data error,please try again</Text>
        </View>)
    } */}





      {
        !token && <View style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Ionicons name="md-cart-outline" size={80} color="black" />
          <Text style={{ fontSize: 18, fontWeight: '500', marginTop: 24 }}>Not logged in</Text>
        </View>
      }


    </ScrollView>
  </View>)
}