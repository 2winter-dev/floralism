import { ScrollView, View, Dimensions, Pressable, Text, Image, TextInput } from "react-native"
import { Ionicons, Entypo, Octicons, MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
export default function InviteFriend() {
    const [selected, setSelected] = useState(0);
    const navigation=useNavigation();
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
            <Text style={{ fontSize: 44, fontWeight: '700', color: '#25745B', textAlign: 'center' }}>Invite friends to </Text>
            <Text style={{ fontSize: 56, fontWeight: '700', color: '#25745B', textAlign: 'center' }}>GOOD2SAVE</Text>
        </View>

        <View style={{ marginTop: 46, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../assets/images/InviteFriend.png')} resizeMode="contain" style={{ width: Dimensions.get("screen").width - 32, height: Dimensions.get("screen").width * 3 / 4 }} />
        </View>

        {/* 邀请好友 */}
        <View>
            <View style={{
                marginHorizontal: 32, borderWidth: 1, borderTopLeftRadius: 49, borderTopRightRadius: 49, borderColor: '#C2D6BA', shadowOffset: {
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
                    <Pressable onPress={() => setSelected(0)} style={[{ display: 'flex', flex: 1, alignItems: 'center', position: 'relative', borderRightWidth: 1, paddingVertical: 12, borderRightColor: '#C2D6BA', borderTopLeftRadius: 49, justifyContent: 'center' }, selected === 0 && { backgroundColor: '#D6F2CD' }]}>
                        <Text style={[{ fontSize: 24, }, selected === 0 && { fontWeight: '700', }]}>Giving gift</Text>
                        {selected === 0 && <View style={{ position: 'absolute', bottom: 14, height: 6, width: 90, backgroundColor: '#25745B', opacity: 0.4, borderRadius: 20 }}></View>}
                    </Pressable>
                    <Image source={require('../../assets/images/nIcon.png')} style={{ width: 40, height: 40, zIndex: 20, position: 'absolute', left: '50%', transform: [{ translateX: -20 }], top: 10 }} />
                    <Pressable onPress={() => setSelected(1)} style={[{ display: 'flex', flex: 1, alignItems: 'center', paddingVertical: 12, justifyContent: 'center', position: 'relative', borderTopRightRadius: 49 }, selected === 1 && { backgroundColor: '#D6F2CD' }]}>
                        <Text style={[{ fontSize: 24, }, selected === 1 && { fontWeight: '700', backgroundColor: '#D6F2CD' }]}>Invite Friends</Text>
                        {selected === 1 && <View style={{ position: 'absolute', bottom: 14, height: 6, width: 90, backgroundColor: '#25745B', opacity: 0.4, borderRadius: 20 }}></View>}
                    </Pressable>
                </View>
            </View>
            {selected === 0 && <View style={{
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
                        <Text style={{ fontSize: 12, fontWeight: '500', marginRight: 8 }}>Give your friend a gift voucher</Text>
                        {/* <FontAwesome6 name="question-circle" size={12} color="black" /> */}
                        <Octicons name="question" size={14} color="black" />
                    </View>
                    <Pressable onPress={()=>navigation.navigate("InviteHistory")} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, color: '#25745B' }}>History</Text>
                        <Entypo name="chevron-small-right" size={12} color="#25745B" />
                    </Pressable>
                </View>

                <View style={{ marginTop: 48, flex: 1, position: 'relative' }}>
                    <View style={{ position: 'absolute', display: 'flex', flexDirection: 'row', top: -20, zIndex: 10, left: 20, width: Dimensions.get("screen").width / 4, borderRadius: 10, borderTopRightRadius: 0, height: Dimensions.get("screen").width / 15 }}>
                        <LinearGradient start={{ x: 0.1, y: 0.2 }} colors={['#FD9A02', '#FC6401']} style={{ height: '100%', width: '95%', borderRadius: 10, borderTopRightRadius: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }} >
                            <Text style={{ fontSize: 16, color: 'white', textAlign: 'center' }}>No-threshold</Text>
                        </LinearGradient>
                        <Image source={require('../../assets/images/tang.png')} style={{ width: '5%', height: 20 }} />
                    </View>

                    <Image source={require('../../assets/images/ticketBG.png')} resizeMode="contain" style={{ width: '100%', height: (Dimensions.get("screen").width - 64) / 4, position: 'absolute' }} />
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ color: '#FCBF13', fontSize: 16, paddingHorizontal: 32, marginTop: 48, marginBottom: 24 }}>AU$<Text style={{ fontSize: 46, fontWeight: '500' }}>1.99</Text></Text>
                        <Image source={require('../../assets/images/line3.png')} style={{ height: '70%', width: 3, marginHorizontal: 36 }} />
                        <View style={{ display: 'flex', alignItems: 'center' }}>
                            <Text style={{ fontWeight: '700', fontSize: 24 }}>New user</Text>
                            <Text style={{ paddingHorizontal: 14, paddingVertical: 6, borderRadius: 20, backgroundColor: 'white', marginTop: 12, color: '#EDBF8F' }}>Valid for 15 days</Text>
                        </View>
                    </View>

                </View>

                <Text style={{ marginTop: 24, textAlign: 'center', color: '#FC8C08', fontSize: 14 }}>Change the world , one bag at a time!</Text>

                <LinearGradient start={{ x: 0.1, y: 0.2 }} colors={['#FD9A02', '#FC6401']} style={{ marginTop: 46, paddingVertical: 12, borderRadius: 50 }}>
                    <Pressable >
                        <Text style={{ textAlign: 'center', fontSize: 30, color: 'white' }}>Send gift to friend</Text>
                    </Pressable>
                </LinearGradient>

                <Text style={{ marginTop: 12, textAlign: 'center', color: '#979797', fontSize: 14 }}>Available in-app only. See terms and condtions</Text>


            </View>}
        </View>
        {/**获取优惠券 */}
        <View>
            {/* <View style={{
                marginHorizontal: 32, borderWidth: 1, borderTopLeftRadius: 49, borderTopRightRadius: 49, borderColor: '#C2D6BA', shadowOffset: {
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
                    <View style={[{ display: 'flex', flex: 1, alignItems: 'center', position: 'relative', borderRightWidth: 1, paddingVertical: 12, borderRightColor: '#C2D6BA', borderTopLeftRadius: 49, justifyContent: 'center' }, selected === 0 && { backgroundColor: '#D6F2CD' }]}>
                        <Text style={[{ fontSize: 24, }, selected === 0 && { fontWeight: '700', }]}>Giving gift</Text>
                        {selected === 0 && <View style={{ position: 'absolute', bottom: 14, height: 6, width: 90, backgroundColor: '#25745B', opacity: 0.4, borderRadius: 20 }}></View>}
                    </View>
                    <Image source={require('../../assets/images/nIcon.png')} style={{ width: 40, height: 40, position: 'absolute', left: '50%', transform: [{ translateX: -20 }], top: 10 }} />
                    <View style={[{ display: 'flex', flex: 1, alignItems: 'center', paddingVertical: 12, justifyContent: 'center', position: 'relative', borderRadius: 49 }, selected === 1 && { backgroundColor: '#D6F2CD' }]}>
                        <Text style={[{ fontSize: 24, }, selected === 1 && { fontWeight: '700', backgroundColor: '#D6F2CD' }]}>Invite Friends</Text>
                        {selected === 1 && <View style={{ position: 'absolute', bottom: 12, height: 6, width: '100%', backgroundColor: '#25745B', opacity: 0.4, borderRadius: 20 }}></View>}
                    </View>
                </View>
            </View> */}
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
                    <Pressable onPress={()=>navigation.navigate("InviteHistory")} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={{ fontSize: 12, color: '#25745B' }}>History</Text>
                        <Entypo name="chevron-small-right" size={12} color="#25745B" />
                    </Pressable>
                </View>

                <LinearGradient start={{ x: 0.1, y: 0.2 }} colors={['#ECFAED', '#F7FDF9']} style={{ marginTop: 16, padding: 16, borderRadius: 24, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }}>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <View style={{ width: 50, height: 50, backgroundColor: '#25745B', borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../assets/images/ngift.png')} style={{ width: 32, height: 32 }} />
                        </View>
                        <Text style={{ marginTop: 12, fontSize: 12 }}>Select Reward</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <View style={{ width: 50, height: 50, backgroundColor: '#25745B', borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../assets/images/nsocial.png')} style={{ width: 32, height: 32 }} />
                        </View>
                        <Text style={{ marginTop: 12, fontSize: 12 }}>Invite Friends</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <View style={{ width: 50, height: 50, backgroundColor: '#25745B', borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../assets/images/nticket.png')} style={{ width: 32, height: 32 }} />
                        </View>
                        <Text style={{ marginTop: 12, fontSize: 12 }}>Access to benefits</Text>
                    </View>
                    <View style={{ display: 'flex', alignItems: 'center' }}>
                        <View style={{ width: 50, height: 50, backgroundColor: '#25745B', borderRadius: 50, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={require('../../assets/images/nshare.png')} style={{ width: 32, height: 32 }} />
                        </View>
                        <Text style={{ marginTop: 12, fontSize: 12 }}>Place an order</Text>
                    </View>
                </LinearGradient>

                <View style={{ marginTop: 24, display: 'flex', flexDirection: 'row' }}>
                    <View style={{ flex: 1, borderRadius: 30, backgroundColor: '#EBEBEB', borderColor: '#DEDEDE', borderWidth: 1, marginRight: 12 }}>
                        <TextInput style={{ color: "#9F9F9F", marginHorizontal: 16, paddingVertical: 12 }} placeholder="Enter your invitation code here" />
                    </View>
                    <Pressable>
                        <Image source={require('../../assets/images/right3.png')} style={{ width: 60, height: 60 }} />
                    </Pressable>
                </View>

                <View style={{ display: 'flex', flexDirection: 'row', marginTop: 24, backgroundColor: '#FDF6EB', padding: 16, borderRadius: 24 }}>
                    <View style={{ width: 120, height: 120, marginRight: 12, backgroundColor: 'red' }}></View>
                    <View style={{ flex: 1 }}>
                        <Text>Team of 2 , AU$ 3.99 reward for everyone</Text>
                        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
                            <View style={{ backgroundColor: '#FFEDD0', borderRadius: 40 }}>
                                <Text style={{ paddingHorizontal: 8, paddingVertical: 4, color: '#FC981A', }}>{'2,222'} participants</Text>
                            </View>
                            <LinearGradient start={{ x: 0.1, y: 0.2 }} colors={['#FD9A02', '#FC6401']} style={{ paddingVertical: 8, paddingHorizontal: 16, borderRadius: 50 }}>
                                <Pressable >
                                    <Text style={{ textAlign: 'center', fontSize: 16, color: 'white' }}>Get</Text>
                                </Pressable>
                            </LinearGradient>
                        </View>
                        <Text style={{ fontSize: 12, color: '#37332E', marginTop: 16 }}>1 new users need to order and collect successfully.</Text>
                    </View>
                </View>

                <Text style={{ marginTop: 12, textAlign: 'center', color: '#979797', fontSize: 14 }}>Available in-app only. See terms and condtions</Text>
            </View>
        </View>

        {selected === 0 && <View style={{
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
            <LinearGradient colors={['#ECFAED', '#F7FDF9']} style={{ display: 'flex', marginTop: 24, position: 'relative', padding: 16, borderRadius: 24 }}>
                <View style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: 16, justifyContent: 'space-between' }}>
                    <View>
                        <Text style={{ fontSize: 18 }}>Share your invite code</Text>
                        <Text style={{ fontSize: 18, color: '#979797', marginTop: 8, fontWeight: '600' }}>GOOD2SAVE-D65XBN</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: 16 }}>
                        <LinearGradient start={{ x: 0.1, y: 0.2 }} colors={['#FD9A02', '#FC6401']} style={{ paddingVertical: 8, paddingHorizontal: 16, borderRadius: 50 }}>
                            <Pressable >
                                <Text style={{ textAlign: 'center', fontSize: 16, color: 'white' }}>Copy</Text>
                            </Pressable>
                        </LinearGradient>

                    </View>
                </View>
                <Image source={require('../../assets/images/line.png')} style={{ width: '100%', height: 3 }} />
                <View style={{ marginVertical: 24, display: 'flex', alignItems: 'flex-start', flexDirection: 'row', justifyContent: 'center' }}>
                    <View style={{ display: 'flex', alignItems: 'center', marginRight: 16 }}>
                        <Image source={require('../../assets/images/nIcon.png')} style={{ width: 80, height: 80, borderRadius: 50 }} />
                        <Text style={{ marginTop: 4, fontSize: 18, fontWeight: '500' }}>Tome</Text>
                        <Text style={{ fontSize: 18, fontWeight: '500', color: '#25745B' }}>AU$3.99</Text>
                    </View>
                    <Pressable style={{ width: 80, height: 80, borderRadius: 50, marginRight: 16, backgroundColor: '#DDDDDD', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Image source={require('../../assets/images/plus.png')} style={{ width: 60, height: 60 }} />
                    </Pressable>
                </View>
                <View style={{ position: 'absolute', top: 80, left: -10, width: 20, height: 20, borderRadius: 50, backgroundColor: 'white' }}></View>
                <View style={{ position: 'absolute', top: 80, right: -10, width: 20, height: 20, borderRadius: 50, backgroundColor: 'white' }}></View>
            </LinearGradient>

            <LinearGradient start={{ x: 0.1, y: 0.2 }} colors={['#FD9A02', '#FC6401']} style={{ marginTop: 46, paddingVertical: 12, borderRadius: 50 }}>
                <Pressable >
                    <Text style={{ textAlign: 'center', fontSize: 30, color: 'white' }}>Invite teammates</Text>
                </Pressable>
            </LinearGradient>
        </View>}
    </ScrollView>)
}