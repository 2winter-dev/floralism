// import { StatusBar } from "expo-status-bar";
import { Dimensions, Pressable, ScrollView, StatusBar, ActivityIndicator, Image } from "react-native";
import { Modal, View, Text } from "react-native";
import RateItem from "./RateItem";

import { Ionicons } from "@expo/vector-icons";
import { useInfiniteQuery, useMutation } from "@tanstack/react-query";
import ShopAPI from "../api/ShopAPI";
import { useState } from "react";
export default function RateModal({ visible, onExit, id, token }) {
    //////////console.log(visible);
    const [page, setPages] = useState(1);
    const previewImg = useState(false);//预览图片
    const [image, setImage] = useState("");
    const [previewImgLoading, setPreviewImgLoading] = useState(true);//预览加载
    const evaluationList = useInfiniteQuery({
        queryFn: () => ShopAPI.fetchEvaluationList({ id: id, token, listRows: 5, page: page }),
        queryKey: ['evaluationList'],
        getNextPageParam: (_d, pages) => {
            return _d.current_page + 1 > _d.last_page ? false : _d.current_page + 1;
        },
        onSuccess: (res) => {
            setPages(page + 1);
            console.log(res);
        },
    })

    return (<Modal visible={visible} onDismiss={onExit} transparent={true}>

        <StatusBar backgroundColor="rgba(0,0,0,0.8)" />
        {
            !previewImg[0] && <View style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.6)', width: "100%", height: '100%', display: 'flex' }}>
                <Pressable style={{ flex: 1, backgroundColor: 'rgba(0,0,0,0.5)' }} onPress={onExit}>

                </Pressable>
                <View style={{ display: 'flex', flex: 1, justifyContent: 'flex-end', backgroundColor: 'rgba(0,0,0,0.5)' }}>
                    <View style={{ padding: 16, backgroundColor: 'white', borderTopLeftRadius: 12, borderTopRightRadius: 12 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Pressable onPress={onExit}>
                                <Ionicons name="arrow-back" size={24} color="black" />
                            </Pressable>
                            <Text style={{ fontSize: 18, fontWeight: '500', marginLeft: 8 }}>Comments</Text>
                        </View>

                        <ScrollView style={{ marginTop: 12, maxHeight: Dimensions.get("screen").height * 0.4 }}>
                            {/* {
                            <RateItem item={{ score: 4 }} />
                        } */}

                            {
                                evaluationList.isSuccess && evaluationList.data.pages.map((item, index) => {
                                    if (!item.data.length) return <Text key={index} style={{ textAlign: 'center' }}>no comments</Text>
                                    return item.data.map((it, idx) => {
                                        return (<RateItem previewImg={previewImg} setImage={setImage} key={idx} item={{ it }} />)
                                    })

                                }


                                )}
                            {
                                evaluationList.isFetchingNextPage && <ActivityIndicator size={'small'} color={config.primaryColor} />
                            }
                        </ScrollView>
                    </View>

                </View>
            </View>
        }
        {
            !!previewImg[0] &&
            <View style={{ "position": "absolute", width: '100%', height: '100%', backgroundColor: '#000', left: 0, bottom: 0, alignItems: 'center', justifyContent: 'center' }}>
                <Pressable onPress={() => {
                    previewImg[1](false);
                    setPreviewImgLoading(true);
                }} style={{ width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>

                    <Image onLoadEnd={() => setPreviewImgLoading(false)} style={{ width: '100%', height: 300, borderRadius: 5, alignSelf: 'center' }} resizeMode="contain" source={{ uri: image }} />
                    {previewImgLoading ? <ActivityIndicator style={{ position: 'absolute', left: '50%', right: '50%', top: '50%', zIndex: 999 }} size={'large'} /> : null}
                </Pressable>
                {previewImgLoading[0] && <View style={{ position: 'relative' }}><ActivityIndicator style={{ position: 'absolute', top: '50%', left: '50%', zIndex: 10 }} size={'large'} /></View>}
            </View>
        }
    </Modal>)
}