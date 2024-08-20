import { View, Pressable, Text, Image, Dimensions, TextInput, ScrollView, ActivityIndicator, Modal, Alert, RefreshControl } from "react-native";
import { AntDesign, Ionicons, FontAwesome } from "@expo/vector-icons";
import { SwiperFlatList } from 'react-native-swiper-flatlist';
import { CardField } from "@stripe/stripe-react-native";
import { useEffect, useRef, useState } from "react";
import config from "../../common/config";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useToken } from "../../common/store/user";
import UserAPI from "../../api/UserAPI";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";
import { brand } from "expo-device";
const { width } = Dimensions.get('window');
const visaIcon = require('../../assets/images/visa.png');
const masterIcon = require('../../assets/images/mastercard.png')
export default function Card() {
    const navigation = useNavigation();
    const [index, setIndex] = useState({ index: 0 });
    const [visible, setVisible] = useState(false)
    const [cardInfo, setCardInfo] = useState({});
    const token = useToken();
    const [expire_date, setExpire_data] = useState("");
    const [tips, setTips] = useState({
        number: "",
        holder: "",
        expire: "",
        security: "",
        postal: ""
    })

    const cardList = useQuery({
        queryFn: () => UserAPI.cardList({ token }),
        queryKey: ['cardList']
    })
    const setDefault = useMutation({
        mutationFn: (data) => UserAPI.setDefault({ ...data, token }),
        mutationKey: ['setDefault']
    })
    const AddCard = useMutation({
        mutationFn: () => UserAPI.AddCard({ number: cardInfo.number, date: cardInfo.expiryMonth + "/" + cardInfo.expiryYear, name: cardInfo.brand, token }),
        mutationKey: ['addCard'],
    })
    const DeleteCard = useMutation({
        mutationFn: (data) => UserAPI.DeleteCard({ ...data, token }),
        mutationKey: ['deleteCard'],
    })

    // useEffect(()=>{
    //   ////console.log(id);
    // },[id])
    // useEffect(()=>{
    //     ////console.log(index);
    // },[index])
    const DelAddress = (index) => {
        ////console.log("===========");
        ////console.log(cardList.data);
        DeleteCard.mutate({ id: cardList.data[index].id }, {
            onSuccess: (res) => {
                Toast.show("Successfully deleted");
                cardList.refetch();
            },
            onError: (res) => {
                Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
            }
        })
    }

    function isValidDateFormat(dateString) {
        // 正则表达式匹配日期格式
        const regex = /^(0[1-9]|1[0-2])\/(0[1-9]|[12][0-9]|3[01])$/;
        return regex.test(dateString);
    }



    const AddDefault = () => {
        ////console.log(cardList.data[index.index].id)
        setDefault.mutate({ id: cardList.data[index.index].id }, {
            onSuccess: (res) => {
                Toast.show("Successfully modified");
                cardList.refetch();
            },
            onError: (res) => {
                Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
            }
        })
    }

    const invalidCard = (number) => {
        console.log(number);
        console.log(number[0]);
        if (number[0] == 4) {
            console.log("is visa");
            setCardInfo({ ...cardInfo, brand: "Visa" });
        } else if (number[0] == 5 && Number(number[1]) < 6) {
            console.log("is masterCard");
            setCardInfo({ ...cardInfo, brand: "Mastercard" });
        }
    }

    if (cardList.isLoading) {

        return (
            <ActivityIndicator style={{ alignSelf: 'center', margin: 20 }} size={'larges'} />
        )
    }

    const renderItem = (item, i) => {
        // item={
        //    ...item,
        //    name:'Mastercard'
        // }
        // return (<View key={i} style={{

        //     backgroundColor: item.name == 'Visa' ? '#4d7bc6' : (item.name === 'MasterCard' ? '#939ba2' : '#121e2c'), 
        //     width: width - 32, padding: 10, borderRadius: 10, borderColor: (item.name !== 'Visa' || item.name !== "MasterCard") ? "rgba(0,0,0,0.3)" : null, borderWidth: 1,

        //     shadowColor: 'rgba(0,0,0,0.5)', shadowOffset: { width: 2, height: 2 }, shadowRadius: 20, shadowOpacity: 0.3, marginTop: 10
        // }}>
        //     <View>
        //         <View style={{ marginTop: 10, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexDirection: 'row' }}>
        //             <Text style={{ fontSize: 18, color: item.name !== 'Visa' && item.name !== 'MasterCard' ? '#000' : '#fff' }}>**** **** **** {item?.number?.slice(item.number.length - 4, item.number.length)}</Text>
        //             <Pressable onPress={() => {
        //                 if (item.is_default) return;
        //                 AddDefault();
        //             }}>
        //                 <Text style={{ color: item.name !== 'Visa' && item.name !== 'Mastercard' ? '#000' : '#fff', fontWeight: item.is_default ? 'normal' : 'bold' }}>{item.is_default ? 'Default' : "Use this card"}</Text>
        //             </Pressable>
        //             <View>
        //                 <Pressable style={{ paddingHorizontal: 12, paddingVertical: 5 }} onPress={() => {
        //                     navigation.navigate("UpdateCard", { id: item.id })
        //                 }}>
        //                     <FontAwesome name="pencil" size={18} color={(item.name !== 'Visa' && item.name !== "MasterCard") ? "rgba(0,0,0,0.3)" : "white"} />
        //                 </Pressable>
        //                 <Pressable style={{ paddingHorizontal: 12, paddingVertical: 5, marginTop: 12 }} onPress={() => {
        //                     Alert.alert("Notice", "Are you sure you want to delete this card ?", [
        //                         {
        //                             text: 'Confirm',
        //                             style: "cancel",
        //                             onPress: () => {
        //                                 DelAddress(i);
        //                             }
        //                         },
        //                         {
        //                             text: "Cancel",
        //                             onPress: () => {

        //                             }
        //                         }
        //                     ])
        //                     //
        //                 }}>
        //                     <AntDesign name="delete" size={18} color={(item.name !== 'Visa' && item.name !== "MasterCard") ? "rgba(0,0,0,0.3)" : "white"} />
        //                 </Pressable>
        //             </View>
        //         </View>
        //         <Text style={{ marginTop: 16 }}></Text>
        //         <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 10 }}>
        //             <Text style={{ color: item.name !== 'Visa' && item.name !== 'MasterCard' ? '#000' : '#fff' }}>EXP:{item?.date}</Text>
        //             {
        //                 (item.name === 'Visa' || item.name === 'MasterCard') ? <Image style={{ width: 80, height: 40 }} resizeMode="contain" source={item.name === 'Visa' ? visaIcon : masterIcon} /> : <Text style={{ fontWeight: 'bold', height: 40, fontSize: 25, color: '#fff', lineHeight: 40 }}>{item?.name}</Text>
        //             }
        //         </View>
        //     </View>
        // </View>)

        return (<View key={i} style={{
            width: width - 32, height: (width - 32) / 2, backgroundColor: item.name === 'Visa' ? '#25745B' : item.name === 'MasterCard' ? "#3FAD8A" : "", justifyContent: 'space-between', marginTop: 16, borderRadius: 30, display: 'flex', flexDirection: 'row'
        }}>
            <View style={{ padding: 24, display: 'flex' }}>
                <View>
                    {
                        item.name === 'Visa' ? <Image source={require("../../assets/images/visa.png")} style={{ height: 88 }} /> :
                            (item.name === "MasterCard" ? <Image source={require("../../assets/images/mastercard.png")} style={{ height: 88, objectFit: 'contain' }} /> :
                                <Image source={require("../../assets/images/visa.png")} style={{ height: 88, objectFit: 'contain' }} />)
                    }
                </View>
                <View style={{ marginTop: 'auto' }}>
                    <Text style={{ color: item.name === 'Visa' ? "white" : item.name === "MasterCard" ? "#061423" : "", fontSize: 12, }}>CARD NUMBER</Text>
                    <Text style={{ color: item.name === 'Visa' ? "white" : item.name === "MasterCard" ? "#061423" : "", fontSize: 16, fontWeight: '500', marginTop: 8 }} >{item?.number ?? "xxxx xxxx xxxx xxx"}</Text>
                </View>
            </View>
            <View style={{ width: '30%', backgroundColor: item.name === 'Visa' ? 'rgb(232,244,74)' : item.name === 'MasterCard' ? "rgb(0,71,81)" : "", position: 'relative', borderTopRightRadius: 30, borderBottomRightRadius: 30 }}>
                <Image source={require('../../assets/images/cardbg.png')} style={{ width: '100%', height: '100%', position: 'absolute', left: 0, right: 0, top: 0, bottom: 0, borderTopRightRadius: 30, borderBottomRightRadius: 30 }} />
                <View style={{ padding: 24, display: 'flex', alignItems: 'center', height: '100%' }}>
                    <View>
                        {
                            item.name === 'Visa' ? <Image source={require("../../assets/images/Swipe.png")} style={{ width: 120, height: 120 }} /> :
                                (item.name === "MasterCard" ?
                                    <View style={{ width: 70, height: 70, borderRadius: 50, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Image source={require("../../assets/images/Swap.png")} /></View> :
                                    <Image source={require("../../assets/images/visa.png")} style={{ height: 88, objectFit: 'contain' }} />)
                        }
                    </View>
                    <View style={{ marginTop: 'auto' }}>
                        <Text style={{ color: item.name === 'Visa' ? "#061423" : item.name === "MasterCard" ? "white" : "", fontSize: 12, }}>VAILD</Text>
                        <Text style={{ color: item.name === 'Visa' ? "#061423" : item.name === "MasterCard" ? "white" : "", fontSize: 16, fontWeight: '500', marginTop: 8 }}>{item?.date ?? "xx/xx"}</Text>
                    </View>
                </View>
            </View>
        </View>)
    }

    return (<ScrollView refreshControl={<RefreshControl onRefresh={cardList.refetch} refreshing={cardList.isLoading || cardList.isFetching} />} style={{ paddingHorizontal: 16 }}>



        {/* <Text style={{ textAlign: 'center', marginTop: 18, color: 'rgba(0,0,0,0.4)', marginTop: 50, marginBottom: 10 }}>{cardList?.data?.length ? "OR" : "Please add your card at first"}</Text> */}
        {/* {!cardList?.data?.length} */}
        <Pressable onPress={() => setVisible(true)} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 12, borderWidth: 1, backgroundColor: '#D9D9D9', borderColor: 'rgba(0,0,0,0.3)', borderRadius: 30, padding: 12, marginBottom: 16 }}>
            {/* <Ionicons name="add-circle-outline" size={24} color="black" style={{ marginRight: 12 }} /> */}
            <Text style={{ fontSize: 20, marginRight: 12 }}>+</Text>
            <Text style={{ fontSize: 16 }}>Add Bank Card</Text>
        </Pressable>


        {

            cardList.isSuccess && cardList.data.map((r, i) => {
                return (
                    renderItem(r, i)
                )
            })
        }

        <Modal visible={visible} onRequestClose={() => setVisible(false)} transparent={true}>
            {/* <StatusBar backgroundColor="rgba(0,0,0,0.5)" /> */}
            <View style={{ width: '100%', height: '100%', backgroundColor: '#FEFAF7', paddingHorizontal: 16 }}>
                <View style={{ marginTop: Dimensions.get('screen').height * 0.06, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <Pressable onPress={() => { setVisible(false) }} style={{ width: 50, height: 50, backgroundColor: 'rgba(255,255,255,0.6)', borderRadius: 80, alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name="arrow-back" size={30} color={'black'} />
                    </Pressable>
                    <Text style={{ textAlign: 'center', fontSize: 18, display: 'flex', flex: 1 }}>Payment Card</Text>
                    <View style={{ width: 70, height: 70 }}></View>
                </View>
                <View style={{ padding: 16, backgroundColor: 'white', borderRadius: 30 }}>
                    <Text style={{ fontSize: 20, fontWeight: '500' }}>Card number*</Text>
                    <View style={{ borderWidth:  tips.number !== ""?3:1, borderColor: tips.number !== ""?'red':"rgba(0,0,0,0.4)", borderRadius: 30 }}>
                        {/* <CardField
                            postalCodeEnabled={true}

                            placeholder={{
                                number: ''
                            }}
                            onCardChange={(e) => {
                                console.log(e);
                                if (e.brand && e.complete) {
                                    setCardInfo(e);
                                }
                            }}

                            dangerouslyGetFullCardDetails={true}
                            style={{ height: 40, margin: '2.5%' }}

                        /> */}
                        <TextInput style={{ height: 20, margin: '2.5%' }} maxLength={16} onBlur={() => {
                            if (cardInfo.number.length !== 16) {
                                setTips({ ...tips, number: "Invalid card number" });
                            } else {
                                setTips({ ...tips, number: "" });
                            }
                        }} onChangeText={(e) => {
                            // if (e.brand && e.complete) {
                            //  {
                            //     "brand": "Visa", 
                            //     "complete": false, 
                            //     "cvc": "", 
                            //     "expiryMonth": null, 
                            //     "expiryYear": null, 
                            //     "last4": "", 
                            //     "number": "4413", 
                            //     "postalCode": "", 
                            //     "validCVC": "Incomplete", 
                            //     "validExpiryDate": "Incomplete", 
                            //     "validNumber": "Incomplete"
                            // }
                            invalidCard(e);
                            setCardInfo({ ...cardInfo, number: e });
                            // }
                        }} />
                    </View>
                    {
                        tips.number !== "" && <View style={{ marginTop: 8, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ width: 30, marginRight: 8, height: 30, backgroundColor: 'red', borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>!</Text>
                            </View>
                            <Text style={{ fontSize: 16, color: 'red' }}>{tips.number}</Text>
                        </View>
                    }
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 16 }}>
                        <Image source={require('../../assets/images/Visa(1).png')} style={[{ marginRight: 12, }, cardInfo.brand === "Visa" && { borderColor: 'red', borderWidth: 1 }]} />
                        <Image source={require('../../assets/images/Mastercard(1).png')} style={[{ marginRight: 12, }, cardInfo.brand === "Mastercard" && { borderColor: 'red', borderWidth: 1 }]} />
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 16 }}>Card holder name*</Text>
                    <View style={{ borderWidth: 1, borderColor: 'rgba(0,0,0,0.4)', borderRadius: 30, marginTop: 16 }}>
                        <TextInput onChangeText={(e) => {
                            setCardInfo({ ...cardInfo, holder_name: e });
                        }} style={{ height: 20, margin: '2.5%', }} />
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ display: 'flex', flex: 1, marginRight: 24 }}>
                            <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 16 }}>Expire date*</Text>
                            <View style={{ borderWidth: tips.expire !== "" ? 3:1, borderColor: tips.expire !== "" ? 'red':'rgba(0,0,0,0.4)'  , borderRadius: 30, marginTop: 16 }}>
                                <TextInput value={expire_date} maxLength={5} onBlur={() => {
                                    if (isValidDateFormat(expire_date)) {
                                        setTips({ ...tips, expire: "" })
                                    } else {
                                        setTips({ ...tips, expire: "Invalid expiry date" })
                                    }
                                }} onChangeText={(e) => {
                                    // if(expire_date.length<2){
                                    //     setCardInfo({ ...cardInfo, expiryMonth: e });
                                    // }else if(expire_date.length>2){
                                    //     console.log(expire_date.slice(0,2),expire_date.slice(2,4))
                                    //     setCardInfo({...cardInfo,expireMonth:expire_date.slice(0,2),expire_date:expire_date.slice(2,4)})
                                    // }
                                    // setExpire_data(e);
                                    let res = e.replace("/", "");
                                    if (res.length > 2) {
                                        setExpire_data(res.slice(0, 2) + "/" + res.slice(2, 4));
                                        setCardInfo({ ...cardInfo, expiryMonth: expire_date.slice(0, 2), expiryYear: expire_date.slice(2, 4) })
                                    } else {
                                        setExpire_data(res.slice(0, 2));
                                        setCardInfo({ ...cardInfo, expiryMonth: expire_date.slice(0, 2) })
                                    }

                                }} style={{ height: 20, margin: '5%', }} />
                            </View>
                            {
                                tips.expire !== "" && <View style={{ marginTop: 8, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ width: 30, marginRight: 8, height: 30, backgroundColor: 'red', borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ color: 'white' }}>!</Text>
                                    </View>
                                    <Text style={{ fontSize: 16, color: 'red' }}>{tips.expire}</Text>
                                </View>
                            }
                        </View>
                        <View style={{ display: 'flex', flex: 1, marginLeft: 24 }}>
                            <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 16 }}>security code*</Text>
                            <View style={{ borderWidth: 1, borderColor: 'rgba(0,0,0,0.4)', borderRadius: 30, marginTop: 16 }}>
                                <TextInput onChangeText={(e) => {
                                    setCardInfo({ ...cardInfo, cvc: e })
                                }} style={{ height: 20, margin: '5%', }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row' }}>
                        <View style={{ display: 'flex', flex: 1, marginRight: 24 }}>
                            <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 16 }}>Postal Code*</Text>
                            <View style={{ borderWidth: 1, borderColor: 'rgba(0,0,0,0.4)', borderRadius: 30, marginTop: 16 }}>
                                <TextInput value={expire_date} onBlur={() => {
                                    if (cardInfo.postalCode.length !== 3) {

                                    }
                                }} onChangeText={(e) => {
                                    setCardInfo({ ...cardInfo, postalCode: e })
                                }} style={{ height: 20, margin: '5%', }} />
                            </View>
                        </View>
                        <View style={{ display: 'flex', flex: 1, marginRight: 24 }}>
                            {/* <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 16 }}>Card holder name*</Text>
                            <View style={{ borderWidth: 1, borderColor: 'rgba(0,0,0,0.4)', borderRadius: 30, marginTop: 16 }}>
                                <TextInput onChangeText={(e)=>{
                                    setCardInfo({...cardInfo,cvc:e})
                                }} style={{ height: 20, margin: '5%', }} />
                            </View> */}
                        </View>
                    </View>
                    <View style={{}}>

                    </View>
                    
                </View>
                <Pressable onPress={() => {
                        //////////console.log(1)

                        if (AddCard.isLoading) return;
                        if (cardInfo.brand && cardInfo.complete) {
                            AddCard.mutate(null, {
                                onSuccess: (res) => {
                                    Toast.show("Card successfully added");
                                    cardList.refetch();
                                    // setCardInfo({})
                                    setVisible(false);
                                },
                                onError: (res) => {
                                    Alert.alert("Notice", res instanceof Error ? res.message : JSON.stringify(res))
                                }
                            })
                        } else {
                            Alert.alert("Notice", 'Invalid card!')
                        }

                    }} style={{paddingVertical: 18, marginTop: 32, backgroundColor:'transparent', borderRadius: 30,borderColor:'#25745B',marginHorizontal:72,borderWidth:1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{  fontSize: 18, color: '#25745B' }}>{AddCard.isLoading ? 'Submiting' : 'ADD CARD'}</Text>
                    </Pressable>
            </View>
        </Modal>

    </ScrollView>)
}