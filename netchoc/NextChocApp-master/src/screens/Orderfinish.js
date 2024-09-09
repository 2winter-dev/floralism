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
import { useNavigation } from "@react-navigation/native"
export default function OrderFinish({ route }) {
    const navigation=useNavigation();
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
    const [points, setPoints] = useState(3);
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
            <View style={{ minHeight: Dimensions.get("screen").height, display: 'flex' }}>
                <View style={{ display: 'flex', flex: 1 }}>
                    <ScrollView style={{ paddingHorizontal: 16, position: 'relative', backgroundColor: 'rgb(254,250,247)', minHeight: Dimensions.get("screen").height }} contentContainerStyle={{ paddingBottom: height }} ref={scroll}>
                        <Image source={require('../assets/images/BackgroundImage.png')} style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }} />
                        {orderStatus.isFetching ? <ActivityIndicator style={{ marginTop: Dimensions.get("screen").height * 0.04, }} size={'large'} color={config.primaryColor} /> : (
                            <View style={{ marginTop: Dimensions.get("screen").height * 0.04, }}>
                                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 32 }}>
                                    <View style={{ width: 100 }}>
                                        <Pressable onPress={() => navigation.canGoBack && navigation.goBack()} style={{ width: 50, height: 50, borderRadius: 50, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Ionicons name="arrow-back" size={24} color="black" />
                                        </Pressable>
                                    </View>
                                    <Text style={{ fontSize: 20, fontWeight: '600' }}>Review</Text>
                                    <View style={{ width: 100, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                                    </View>
                                </View>
                                <View style={{ marginHorizontal: 32, marginTop: 56, backgroundColor: 'white', padding: 16 }}>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                        <Image source={require('../assets/images/vegetable.png')} style={{ width: 60, height: 60, borderRadius: 50, marginRight: 12 }} />
                                        <Text style={{ fontSize: 18 }}>Classic Package  Magic Bag</Text>
                                    </View>
                                    <Image source={require('../assets/images/line2.png')} style={{ height: 2, width: '100%', marginVertical: 16 }} />
                                    <Text style={{ fontWeight: '600', fontSize: 20, marginBottom: 16 }}>Are you satisfied with your recent purchase?</Text>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 8, justifyContent: 'space-between' }}>

                                        <View style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                                            {
                                                [0, 0, 0, 0, 0].map((item, index) => {
                                                    ////console.log(orderStatus.data?.order_evaluate_info?.score)
                                                    if (index < points) {
                                                        return <Pressable onPress={() => setPoints(index + 1)}><Image source={require('../assets/images/points.png')} style={{ width: 30, height: 30, marginRight: 12 }} /></Pressable>
                                                    } else return <Pressable onPress={() => setPoints(index + 1)}><Image source={require('../assets/images/unpoints.png')} style={{ width: 30, height: 30, marginRight: 12 }} /></Pressable>
                                                })
                                            }
                                        </View>
                                        <View>
                                            <Text style={{ color: '#FCBF13', fontSize: 16 }}>Very good</Text>
                                        </View>
                                    </View>
                                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginTop: 16, overflow: 'hidden' }}>
                                        <Pressable style={{ marginTop: 16, marginRight: 12 }}><Text style={{ color: '#838383', fontSize: 14, paddingHorizontal: 14, paddingVertical: 14, backgroundColor: '#F6F6F6' }}>Delicious food</Text></Pressable>
                                        <Pressable style={{ marginTop: 16, marginRight: 12 }}><Text style={{ color: '#838383', fontSize: 14, paddingHorizontal: 14, paddingVertical: 14, backgroundColor: '#F6F6F6' }}>Friendly staff</Text></Pressable>
                                        <Pressable style={{ marginTop: 16, marginRight: 12 }}><Text style={{ color: '#838383', fontSize: 14, paddingHorizontal: 14, paddingVertical: 14, backgroundColor: '#F6F6F6' }}>Great value</Text></Pressable>
                                        <Pressable style={{ marginTop: 16, marginRight: 12 }}><Text style={{ color: '#838383', fontSize: 14, paddingHorizontal: 14, paddingVertical: 14, backgroundColor: '#F6F6F6' }}>Quick collection</Text></Pressable>
                                    </View>
                                    <View style={{ marginTop: 16, backgroundColor: 'white' }}>
                                        <TextInput style={{ display: 'flex', flex: 1, padding: 4, fontSize: 20 }} placeholder="Please enter your comments"></TextInput>
                                    </View>
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
                                                                width: 150,
                                                                height: 150,
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
                                                            flexDirection: "column",
                                                            alignItems: "center",
                                                            width: 150,
                                                            height: 150,
                                                            backgroundColor: "#F6F6F6",
                                                            borderRadius: 12,

                                                            justifyContent: 'center'
                                                        }}
                                                    >
                                                        <Image source={require('../assets/images/xiangji-3.png')} style={{ width: 50, height: 50 }} />
                                                        <Text style={{ color: '#25745B', marginTop: 8, fontSize: 14 }}>add</Text>
                                                    </View>
                                                </Pressable>)
                                                : null}

                                        </ScrollView>


                                    )}
                                </View>
                            </View>
                            // : null
                        )}


                        {imgsStatus ? <Pressable style={{ justifyContent: "flex-start", flexDirection: 'row', marginTop: 8 }}>
                            <ActivityIndicator size={'small'} />
                            <Text style={{ color: 'gray', marginLeft: 8 }}>Uploading...</Text>
                        </Pressable> : null}
                        {/* {!orderStatus?.data?.order_evaluate_info ? <View style={{ display: 'flex', alignItems: 'flex-end', marginTop: 16 }}>
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
                </View> : null} */}
                    </ScrollView>
                </View>
                <View style={{ marginBottom: 32, marginHorizontal: 32,paddingVertical:14,alignItems:'center',justifyContent:'center', display: 'flex', borderRadius: 30, backgroundColor: '#25745B' }}>
                    <Text style={{ color: 'white', fontSize: 18,fontWeight:'500' }}>Review</Text>
                </View>
            </View>
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
