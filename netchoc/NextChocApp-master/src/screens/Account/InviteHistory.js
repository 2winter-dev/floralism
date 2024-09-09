import { ScrollView, View, Dimensions, Pressable, Text, Image, TextInput } from "react-native"
import { Ionicons, Entypo, Octicons, MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
export default function InviteHistory() {
    const navigation = useNavigation();
    return (<ScrollView contentContainerStyle={{ minHeight: Dimensions.get("screen").height }} style={{ display: 'flex', width: '100%', minHeight: Dimensions.get("screen").height,position:'relative'}}>
        <Image  source={require('../../assets/images/BackgroundImage.png')} style={{position:'absolute',top:0,bottom:0,left:0,right:0,width:'100%',height:'100%'}} />
        <View style={{ display: 'flex', marginTop: Dimensions.get("screen").height * 0.04, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 32 }}>

            <View style={{ width: 100 }}>
                <Pressable onPress={() => navigation.canGoBack() && navigation.goBack()} style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </Pressable>
            </View>
            <Text style={{ fontSize: 20, fontWeight: '600' }}>Invite history</Text>
            <View style={{ width: 100, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

            </View>
        </View>
        <View style={{ display: 'flex', flex: 1, marginTop: 24, justifyContent: 'center' }}>
            {
                [1].length ? <View style={{ display: 'flex', flex: 1, marginHorizontal: 16 }}>
                    <View style={{ display: 'flex', flexDirection: 'row', marginTop: 24, backgroundColor: 'white', padding: 16, borderRadius: 20 }}>
                        <View style={{ width: 120, height: 120, marginRight: 12, backgroundColor: 'red' }}></View>
                        <View style={{ flex: 1 }}>
                            <Text>Team of 2 , AU$ 3.99 reward for everyone</Text>
                            <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center',  marginTop:8 }}>
                                <Image source={require('../../assets/images/nIcon.png')} style={{ width: 30, height: 30,marginRight:12, borderRadius: 50 }} />
                                <Pressable style={{ width: 30, height: 30, borderRadius: 50, marginRight: 16,marginRight:12, backgroundColor: '#DDDDDD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../../assets/images/plus.png')} style={{ width: 20, height: 20 }} />
                                </Pressable>
                            </View>
                            <Text style={{ fontSize: 12, color: '#37332E', marginTop: 8 }}>1 new users need to order and collect successfully.</Text>
                            <Text style={{ fontSize: 12, color: '#979797', marginTop: 8,fontWeight:'500' }}>Participation Time: 01/12/2020 22:16</Text>
                            <Text style={{ fontSize: 12, color: '#979797', marginTop: 4,fontWeight:'500' }}>Activity Time: 03/11/2023 to 03/12/2023</Text>
                            {/*  */}
                        </View>
                        <View>
                            <View style={{ width: 70, height: 70, borderRadius: 50, borderColor: 'black', borderWidth: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <View style={{ width: 60, height: 60, borderRadius: 50, borderColor: 'black', borderWidth: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <Image source={require('../../assets/images/Complete_medal.png')} style={{ width: 50, height: 21 }} />
                                </View>
                            </View>
                        </View>
                    </View>

                </View> : <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginHorizontal: 32 }}>
                    <Image source={require('../../assets/images/nohistory.png')} style={{ width: 180, height: 180 }} />
                    <Text style={{ fontSize: 32, marginTop: 16 }}>You haven't invited any new users yet</Text>
                </View>
            }
        </View>
    </ScrollView>)
}