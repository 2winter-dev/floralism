import { ScrollView, View, Dimensions, Pressable, Text, Image, TextInput } from "react-native"
import { Ionicons, Entypo, Octicons, MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
export default function InviteShop() {
    const [selected, setSelected] = useState(0);
    const navigation = useNavigation();
    return (<ScrollView>
        <View style={{ display: 'flex', marginTop: Dimensions.get("screen").height * 0.04, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 32 }}>

            <View style={{ width: 100 }}>
                <Pressable onPress={() => navigation.canGoBack() && navigation.goBack()} style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Ionicons name="chevron-back" size={24} color="black" />
                </Pressable>
            </View>
            <Text style={{ fontSize: 20, fontWeight: '600' }}></Text>
            <View style={{ width: 100, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

            </View>
        </View>
        <View style={{ marginTop: 36 }}>
            <Text style={{ fontSize: 44, fontWeight: '700', color: '#25745B', textAlign: 'center' }}>Invite a store to
            </Text>
            <Text style={{ fontSize: 56, fontWeight: '700', color: '#25745B', textAlign: 'center' }}>GOOD2SAVE</Text>
        </View>

        <View style={{ marginTop: 46, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../assets/images/shopPic.png')} resizeMode="contain" style={{ width: Dimensions.get("screen").width - 32, height: Dimensions.get("screen").width * 3 / 4 }} />
        </View>

        {/* 邀请好友 */}
        <View>
            <View style={{
                marginHorizontal: 32, marginTop: 48, borderWidth: 1, borderTopLeftRadius: 49, borderTopRightRadius: 49, borderColor: '#C2D6BA', shadowOffset: {
                    width: 0,
                    height: 2,
                },
                backgroundColor: 'white',
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                shadowColor: '#C2D6BA',
                elevation: 4,
            }}>
                <View style={{ display: 'flex', flexDirection: 'row', borderBottomColor: '#C2D6BA', borderBottomWidth: 1, position: 'relative' }}>
                    <Pressable onPress={() => setSelected(0)} style={[{ display: 'flex', flex: 1, alignItems: 'center', position: 'relative', borderRightWidth: 1, paddingVertical: 12, borderRightColor: '#C2D6BA', borderTopLeftRadius: 49, borderTopRightRadius: 49, justifyContent: 'center' }, selected === 0 && { backgroundColor: '#D6F2CD' }]}>
                        <Text style={[{ fontSize: 24, }, selected === 0 && { fontWeight: '700', }]}>Invite a store</Text>
                        <View style={{ position: 'absolute', bottom: 14, height: 6, width: 140, backgroundColor: '#25745B', opacity: 0.4, borderRadius: 20 }}></View>
                    </Pressable>
                </View>
            </View>
        </View>
        <View>
            <View style={{
                marginHorizontal: 32, borderWidth: 1, borderBottomLeftRadius: 49, borderBottomRightRadius: 49, borderColor: '#C2D6BA', shadowOffset: {
                    width: 0,
                    height: 2,
                },
                backgroundColor: 'white',
                shadowOpacity: 0.23,
                shadowRadius: 2.62,
                shadowColor: '#C2D6BA',
                elevation: 4,
                padding: 16,
                marginBottom: 46
            }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, fontWeight: '500', marginRight: 8 }}>How it works</Text>
                        {/* <FontAwesome6 name="question-circle" size={12} color="black" /> */}
                        <Octicons name="question" size={14} color="black" />
                    </View>
                    <Pressable onPress={() => navigation.navigate("InviteHistory")} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, color: '#25745B' }}>History</Text>
                        <Entypo name="chevron-small-right" size={12} color="#25745B" />
                    </Pressable>
                </View>

                <LinearGradient start={{ x: 0.1, y: 0.2 }} colors={['#ECFAED', '#F7FDF9']} style={{ marginTop: 16, padding: 16, borderRadius: 24, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <View style={{ width: 50, height: 50, backgroundColor: '#25745B', borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../assets/images/ngift.png')} style={{ width: 32, height: 32 }} />
                        </View>
                        <Text style={{ marginTop: 12, fontSize: 12 }}>Go to store</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <View style={{ width: 50, height: 50, backgroundColor: '#25745B', borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../assets/images/nsocial.png')} style={{ width: 32, height: 32 }} />
                        </View>
                        <Text style={{ marginTop: 12, fontSize: 12 }}>Invite a store</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <View style={{ width: 50, height: 50, backgroundColor: '#25745B', borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../assets/images/nticket.png')} style={{ width: 32, height: 32 }} />
                        </View>
                        <Text style={{ marginTop: 12, fontSize: 12 }}>Store sell first meal</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <View style={{ width: 50, height: 50, backgroundColor: '#25745B', borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../assets/images/nshare.png')} style={{ width: 32, height: 32 }} />
                        </View>
                        <Text style={{ marginTop: 12, fontSize: 12 }}>Get AU$50</Text>
                    </View>
                </LinearGradient>

                {/* <View style={{ marginTop: 24, display: 'flex', flexDirection: 'row' }}>
                    <View style={{ flex: 1, borderRadius: 30, backgroundColor: '#EBEBEB', borderColor: '#DEDEDE', borderWidth: 1, marginRight: 12 }}>
                        <TextInput style={{ color: "#9F9F9F", marginHorizontal: 16, paddingVertical: 12 }} placeholder="Enter your invitation code here" />
                    </View>
                    <Pressable>
                        <Image source={require('../../assets/images/right3.png')} style={{ width: 60, height: 60 }} />
                    </Pressable>
                </View> */}

                <LinearGradient start={{ x: 0.1, y: 0.2 }} colors={['#ECFAED', '#F7FDF9']} style={{ marginTop: 16, padding: 32, borderRadius: 24, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{fontSize:18}}>Your invite code</Text>
                        <Text style={{fontWeight:'600',color:'#979797',marginTop:12}}>GOOD2SAVE-D65XBN</Text>
                    </View>
                    <Pressable>
                        <MaterialIcons name="ios-share" size={36} color="black" />
                    </Pressable>
                </LinearGradient>

                <Text style={{marginTop:36,fontSize:12,color:'#979797',textAlign:'center'}}>Available in-app only. See terms and condtions</Text>
            </View>
        </View>
    </ScrollView>)
}