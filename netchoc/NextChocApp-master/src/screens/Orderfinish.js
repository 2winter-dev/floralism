import { View, Text, ScrollView, ActivityIndicator, Image, Pressable, Modal, TextInput, KeyboardAvoidingView, Platform, Dimensions, Keyboard } from "react-native"
import config from "../common/config"
import { useMutation, useQuery } from "@tanstack/react-query"
import OrderAPI from "../api/OrderAPI"
import { useToken } from "../common/store/user"
import { useState, useRef, useEffect } from "react"
import { FontAwesome, AntDesign, Ionicons } from "@expo/vector-icons"
import * as ImagePicker from "expo-image-picker";

import { nanoid } from "nanoid";
import { EvilIcons, Entypo } from "@expo/vector-icons"
import * as FileSystem from "expo-file-system";
import { API_URL } from "../common/api/API_URL"
export default function OrderFinish({ route }) {
    const token = useToken();
    const [imgsStatus, setImgStatus] = useState(false);
    const [visible, setVisible] = useState(false);
    const [fees, setFees] = useState(false);
    const scroll = useRef();
    const [height, setHeight] = useState(0);
    const [score, setScore] = useState(0);
    const [Input, setInput] = useState("");
    const [images, setImages] = useState("");
    const [imageList, setImageList] = useState([]);
    const [success, setSuccess] = useState(false);
    const mText = useRef();
    const orderStatus = useQuery({
        queryFn: () => OrderAPI.fetchOrderDetail({ order_id: route.params.id, token }),
        queryKey: ['orderFinish', route.params.id],
        onSuccess: (res) => {
            console.log(res);
        },
        onError: (res) => {
            Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
        }
    })



    //移除圖片
    const onDel = (_index) => {

        const newData = [...imageList];

        newData.splice(_index, 1);

        setImageList(newData);


    }

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsMultipleSelection: true,
            allowsEditing: false,
            selectionLimit: 2,
            quality: 1,
            copyToCacheDirection: true,
            //@ts-ignore
        }).catch((e) => {
            Toast.show(e);
        });
        console.log(result);
        try {
            setImgStatus(true);
            if (result && !result.canceled && result.assets) {
                for (let i = 0; i < result.assets.length; i++) {
                    let response = await FileSystem.uploadAsync(
                        `${API_URL}/api/common/upload`,
                        result.assets[i].uri,
                        {
                            fieldName: "file",
                            httpMethod: "POST",
                            uploadType: FileSystem.FileSystemUploadType.MULTIPART,
                            headers: {
                                "Authorization": `Bearer ${token}`
                            },
                        }
                    );
                    let d = JSON.parse(response.body);
                    console.log(d);
                    if (d.code === 1) {
                        console.log("1")
                        // d.data.id = nanoid();
                        let im = imageList;
                        console.log("2")
                        im.push(d.data.fullurl)
                        setImageList([...im]);
                        console.log("3")
                        setImages(imageList + d.data.url + ",");

                    }
                }

                setImgStatus(false);
            }
        } catch (error) {
            setImgStatus(false);
            console.log(error.message);
            Toast.show(error.message);
        }
    };
    const evaluate = useMutation({
        mutationFn: () => OrderAPI.evaluteOrder({ order_id: route.params.id, token, score, content: Input, images: JSON.stringify(imageList) }),
        mutationKey: ['evaluateOrder'],
        onSuccess() {
            orderStatus.refetch();
        }
    })
    const toEnd = () => {
        // ////console.log(scroll.current.scrollTo);
        scroll?.current?.scrollTo({ y: Dimensions.get("screen").height * 2 });
    }
    useEffect(() => {
        Keyboard.addListener("keyboardWillShow", (e) => {
            setHeight(e.endCoordinates.height);

        });
        Keyboard.addListener("keyboardWillHide", (e) => {
            setHeight(0);
        })
        Keyboard.addListener("keyboardDidShow", (e) => {
            scroll?.current?.scrollTo({ y: Dimensions.get("screen").height * 2 + height });
        })

        //    return ()=>{

        //    }
    }, [])


    if (orderStatus.isFetching) {

        return <ActivityIndicator style={{ margin: 20 }} size={'large'} color={config.primaryColor} />
    }

    return (
        <>
            {/* <KeyboardAvoidingView style={{}} keyboardVerticalOffset={20} enabled={true} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}> */}
            <ScrollView style={{ paddingHorizontal: 16 }} contentContainerStyle={{ paddingBottom: height }} ref={scroll}>
                {orderStatus.isFetching ? <ActivityIndicator style={{ margin: 20 }} size={'large'} color={config.primaryColor} /> : (orderStatus.isSuccess ? <View>
                    <Text style={{ fontSize: 24, fontWeight: "500", marginTop: 24 }}>Thank you for your order</Text>
                    <Text style={{ marginTop: 24 }}>Here is your order receipt for {orderStatus.data?.merchant.merchantname}.</Text>
                    <View style={{ marginTop: 24, borderBottomColor: 'rgb(0,0,0)', borderBottomWidth: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingBottom: 16 }}>
                        <Text style={{ fontSize: 18, fontWeight: "500" }}>Total</Text>
                        <Text style={{ fontSize: 18, fontWeight: "500" }}>{config.current}{orderStatus.data?.actual_payment_amount}</Text>
                    </View>
                    <View style={{ marginTop: 12, marginBottom: 12, }}>
                        {orderStatus.data?.goods.map((item, index) => <View key={index} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                <View style={{ marginRight: 12, width: 20, height: 20, borderWidth: 1, borderColor: 'rgba(0,0,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text>x{item.count}</Text>
                                </View>
                                <Text style={{}}>{item.goods_name}</Text>
                            </View>
                            <Text>
                                {config.current}{item.price}
                            </Text>
                        </View>)}
                        {/* <Text style={{ marginTop: 4 }}>Choice of Size {config.current}5</Text>
                <Text style={{ marginTop: 4, fontSize: 13, color: 'rgba(0,0,0,0.3)' }}>Large {config.current}5</Text> */}
                    </View>
                    {/* <View style={{ height: 1, width: '100%', backgroundColor: 'rgba(0,0,0,0.2)', marginBottom: 12 }}></View> */}
                    {/* <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 15 }}>Subtotal</Text>
                        <Text style={{ fontSize: 15, fontWeight: '500' }}>{config.current}{orderStatus.data.payment_amount}</Text>
                    </View> */}
                    <View style={{ marginTop: 4, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={{ fontSize: 15, color: 'rgba(0,0,0,0.8)' }}>Fees</Text>
                            <Pressable onPress={() => setFees(true)}>
                                <AntDesign name="questioncircleo" style={{ marginLeft: 4 }} size={12} color="black" />
                            </Pressable>
                        </View>
                        <Text style={{ fontSize: 13, color: 'rgba(0,0,0,0.8)' }}>{config.current}{orderStatus.data.fees}</Text>
                    </View>
                    <View style={{ marginTop: 24, height: 1, width: '100%', backgroundColor: 'rgba(0,0,0,0.2)', marginBottom: 12 }}></View>
                    <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                        <Text style={{ fontSize: 18, fontWeight: '500', }}>Total:</Text>
                        <Text style={{ fontSize: 16, fontWeight: '500' }}>{config.current}{orderStatus.data.actual_payment_amount}</Text>
                    </View>
                    {/* <View style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end', marginTop: 24 }}>
                        <Pressable onPress={() => setVisible(true)} style={{ backgroundColor: config.primaryColor, borderRadius: 24 }}>
                            <Text style={{ paddingHorizontal: 36, paddingVertical: 8, fontSize: 16, color: 'white' }}>Evaluate</Text>
                        </Pressable>
                    </View> */}
                    {!orderStatus?.data?.order_evaluate_info ? <View style={{ marginTop: 24 }}>
                        {
                            (<View style={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'flex-start' }}>
                                {
                                    evaluate.isLoading ? <View style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%' }}><ActivityIndicator size={'large'} style={{}} color={config.primaryColor} /></View> : (
                                        <View style={{ backgroundColor: 'white', borderRadius: 16, width: '100%' }}>
                                            <View style={{}}>

                                                <Text style={{ fontSize: 18, fontWeight: 500, marginBottom: 16 }}>Comments:</Text>
                                                <Pressable onPress={() => {
                                                    mText.current.focus();
                                                }} style={{ height: 100, padding: 8, borderColor: 'black', borderWidth: 1, borderRadius: 12, marginBottom: 16 }}>
                                                    <TextInput ref={mText} multiline={true} placeholder="Please give us your feedback" style={{ width: '100%' }} value={Input} onChangeText={(text) => {
                                                        if (text.length > 500) {
                                                            Toast.show("Maximum  500 words");
                                                            return;
                                                        }
                                                        setInput(text);
                                                    }} />
                                                </Pressable>
                                                <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Text>Rate:</Text>
                                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                        {
                                                            [1, 1, 1, 1, 1].map((item, index) => {
                                                                // if (item) return (<FontAwesome name="star-o" size={24} color="black" />)

                                                                // else return <FontAwesome name="star" size={24} color="#FFC500" />
                                                                if (score > index) return <Pressable key={index} onPress={() => setScore(index + 1)} style={{ marginRight: 8 }}><FontAwesome name="star" size={36} color={config.primaryColor} /></Pressable>
                                                                else return <Pressable key={index} onPress={() => setScore(index + 1)} style={{ marginRight: 8 }}><FontAwesome name="star-o" size={36} color="black" /></Pressable>
                                                            })
                                                        }
                                                    </View>
                                                </View>

                                            </View>
                                        </View>)
                                }
                            </View>)}
                    </View>
                        : <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18, fontWeight: 500, marginBottom: 16, marginTop: 24 }}>Rata us:</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                {
                                    [0, 0, 0, 0, 0].map((item, index) => {
                                        ////console.log(orderStatus.data?.order_evaluate_info?.score)
                                        if (index < orderStatus.data?.order_evaluate_info?.score) {
                                            return <FontAwesome key={index} name="star" size={24} style={{ marginRight: 8 }} color={config.primaryColor} />
                                        } else return <FontAwesome key={index} name="star-o" style={{ marginRight: 8 }} size={24} color="black" />
                                    })

                                    // fetchOrderDetail.data?.order_evaluate_info?.status
                                }
                            </View>
                        </View>}
                </View> : null)}

                {(
                    <ScrollView
                        style={{ marginTop: 16 }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ alignItems: 'center' }}
                    >
                        {!!imageList.length && imageList.map((im, index) => {
                            return (
                                <View key={index} style={{ marginRight: 8 }}>
                                    <Image
                                        style={{
                                            width: 72,
                                            height: 72,
                                            borderRadius: 12,
                                        }}
                                        source={{ uri: im }}
                                    />
                                    {!orderStatus?.data?.order_evaluate_info && <Pressable
                                        style={{
                                            position: "absolute",
                                            left: "70%",
                                        }}
                                        onPress={() => onDel(index)}
                                    >
                                        <Entypo name="circle-with-cross" size={20} color="red" />
                                    </Pressable>}
                                </View>
                            );
                        })}
                        {imageList.length < 2 && !imgsStatus && !orderStatus?.data?.order_evaluate_info ? (
                            <Pressable onPress={pickImage}>
                                <View
                                    style={{
                                        flexDirection: "row",
                                        alignItems: "center",
                                        width: 72,
                                        height: 72,
                                        borderWidth: 1,
                                        borderColor: 'black',
                                        backgroundColor: "white",
                                        borderRadius: 12,

                                        justifyContent: 'center'
                                    }}
                                >
                                    <EvilIcons name="plus" size={24} color="black" />
                                </View>
                            </Pressable>
                        ) : null}

                    </ScrollView>


                )}
                {imgsStatus ? <Pressable style={{ justifyContent: "flex-start", flexDirection: 'row', marginTop: 8 }}>
                    <ActivityIndicator size={'small'} />
                    <Text style={{ color: 'gray', marginLeft: 8 }}>Uploading...</Text>
                </Pressable> : null}
                {!orderStatus?.data?.order_evaluate_info ? <View style={{ display: 'flex', alignItems: 'flex-end', marginTop: 16 }}>
                    <Pressable onPress={() => {
                        if (score === 0) {
                            return;
                        }

                        evaluate.mutate(null, {
                            onSuccess: (res) => {
                                ////console.log(res);
                                setVisible(false);
                                Toast.show("Thanks for your feedback!");
                            },
                            onError: (res) => {
                                Toast.show(res instanceof Error ? res.message : JSON.stringify(res));
                                setVisible(false);
                            }
                        })
                    }} style={{ backgroundColor: config.primaryColor, borderRadius: 24 }}>
                        <Text style={{ paddingHorizontal: 36, paddingVertical: 8, fontSize: 16, color: 'white' }}>Rata us</Text>
                    </Pressable>
                </View> : null}
            </ScrollView>
            <Modal visible={fees} onRequestClose={() => setFees(false)} transparent={true}>
                <View style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', justifyContent: 'flex-end' }}>
                    <Pressable onPress={() => setFees(false)} style={{ flex: 1 }}>

                    </Pressable>
                    <View style={{ backgroundColor: 'white', paddingTop: 24, paddingHorizontal: 16, borderTopLeftRadius: 24, borderTopRightRadius: 24 }}>
                        <Text style={{ marginTop: 12, marginBottom: 24, fontSize: 24, fontWeight: 'bold' }}>Service Fee</Text>
                        <Text style={{}}>The service fee covers costs related to your order and supports NextChoc operations.</Text>
                        <Pressable onPress={() => setFees(false)} style={{ width: '100%', borderRadius: 24, alignItems: 'center', paddingVertical: 12, marginTop: 16, marginBottom: 24, backgroundColor: 'red' }}>
                            <Text style={{ fontSize: 16, color: 'white', }}>OK</Text>
                        </Pressable>
                    </View>

                </View>
            </Modal>
            {/* </KeyboardAvoidingView>  */}
        </>)
}
