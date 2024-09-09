import { Dimensions, ImageBackground, ScrollView, View, Text, Image, Pressable, Modal } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useState } from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from "@react-navigation/native"
export default function CollectionWall() {
    const [visible, setVisible] = useState(false);
    const [modal,setModal]=useState();
    const navigation=useNavigation();
    return (
        <View style={{ width: '100%', position: 'relative', minHeight: Dimensions.get("screen").height }}>
            <Image source={require('../../../assets/images/CollectionBackground2.png')} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, width: '100%', height: '100%' }} />
            <ScrollView style={{ width: '100%', position: 'relative' }}>
                <View style={{ display: 'flex', marginTop: Dimensions.get("screen").height * 0.04, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 32 }}>

                    <View style={{ width: 100 }}>
                        <Pressable onPress={() => navigation.canGoBack() && navigation.goBack()} style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Ionicons name="chevron-back" size={24} color="black" />
                        </Pressable>
                    </View>
                    <Text style={{ fontSize: 20, fontWeight: '600' }}>Collection wall</Text>
                    <View style={{ width: 100, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                    </View>
                </View>

                <View style={{ marginTop: 64, marginHorizontal: 32 }}>
                    <Image source={require('../../../assets/images/nIcon.png')} style={{ width: 80, height: 80, borderRadius: 50 }} />
                    <Text style={{ fontSize: 24, marginTop: 8 }}>Jomrw's</Text>
                    <Text style={{ fontSize: 18, fontWeight: '300', letterSpacing: 0.5 }}>medal wall.</Text>
                </View>
                <View style={{ marginTop: 20, marginHorizontal: 32, display: 'flex', flexDirection: 'row', alignItems: 'center', position: 'relative' }}>
                    <Image source={require('../../../assets/images/bar.png')} style={{ width: 195, height: 6, position: 'absolute', top: 18 }} />
                    <Text style={{ color: '#25745B', fontSize: 16 }}>Accumulated</Text>
                    <Text style={{ color: '#25745B', fontSize: 28, marginLeft: 8, marginRight: 4 }}>341</Text>
                    <Text style={{ color: '#25745B', fontSize: 16 }}>medal</Text>

                </View>

                <View style={{ marginTop: 60 }}></View>
                {
                    <View style={{ marginHorizontal: 32 }}>
                        <Text style={{ fontSize: 20, fontWeight: '500' }}>Recently awarded medals</Text>
                        <View style={{ marginTop: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginTop: 12 }}>
                            {[1, 1, 1].map((item, index) => <Pressable onPress={()=>{
                                setVisible(true);
                                setModal(item);
                            }} key={index} style={{ display: 'flex', alignItems: index % 3 == 0 ? 'flex-start' : (index % 3 === 1 ? 'center' : 'flex-end'), flex: 1 }}>
                                <View style={{ display: 'flex' }}>
                                    <Image source={require('../../../assets/images/nIcon.png')} style={{ width: 100, height: 100, borderRadius: 50 }} />
                                    <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 8, textAlign: 'center' }}>Thrifty Hero</Text>
                                </View>
                            </Pressable>)}
                        </View>
                    </View>
                }
                <View style={{ marginTop: 30 }}></View>
                {
                    <View style={{ marginHorizontal: 32 }}>
                        <Text style={{ fontSize: 20, fontWeight: '500' }}>Recently awarded medals</Text>
                        <View style={{ marginTop: 16, display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: 'wrap', marginTop: 12 }}>
                            {[1, 1, 1].map((item, index) => <Pressable onPress={()=>{
                                setVisible(true);
                                setModal(item);
                            }} key={index} style={{ display: 'flex', alignItems: index % 3 == 0 ? 'flex-start' : (index % 3 === 1 ? 'center' : 'flex-end'), flex: 1 }}>
                                <View style={{ display: 'flex' }}>
                                    <Image source={require('../../../assets/images/nIcon.png')} style={{ width: 100, height: 100, borderRadius: 50 }} />

                                    <Text style={{ fontSize: 14, fontWeight: '500', marginTop: 8, textAlign: 'center' }}>Thrifty Hero</Text>
                                    <View style={{ width: 100, height: 5, borderRadius: 12, backgroundColor: 'rgba(0,0,0,0.2)', marginTop: 5 }}>
                                        <View style={{ width: (5 / 10) * 100, height: '100%', backgroundColor: '#25745B', borderRadius: 12 }}></View>
                                    </View>
                                    <Text style={{ fontSize: 12, fontWeight: '200', marginTop: 4 }}><Text style={{ fontSize: 14, fontWeight: '500' }}>5</Text>/10</Text>
                                </View>
                            </Pressable>)}
                        </View>
                    </View>
                }
            </ScrollView>

            <Modal visible={visible} transparent={true} onRequestClose={() => setVisible(false)}>
                <Pressable onPress={()=>setVisible(false)} style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Pressable onPress={(e)=>e.stopPropagation()} style={{ width: '80%', backgroundColor: 'white', borderRadius: 20, position: 'relative', borderRadius: 50 }}>
                        <Image source={require('../../../assets/images/ModalBackground.png')} style={{ width: '100%', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, height: '100%', borderRadius: 50 }} />
                        <View style={{padding:16,alignItems:'center'}}>
                            <Text style={{fontSize:32,fontWeight:700,color:'white',width:'70%',textAlign:'center'}}>Congratulations on 
                            your medal</Text>
                            <Image  source={require('../../../assets/images/defaultMedal.png')}  style={{width:250,height:250,marginTop:16}} />
                            <Text style={{fontSize:20,color:'#25745B'}}>Buy the leftovers blind box 10 times</Text>
                            <Pressable style={{width:'60%',height:80,borderRadius:50,backgroundColor:'#25745B',marginTop:70,marginBottom:24,display:'flex',alignItems:'center',justifyContent:'center'}}>
                                 <Text style={{fontSize:24,color:'white'}}>Share</Text>
                            </Pressable>
                        </View>
                    </Pressable>
                </Pressable>
            </Modal>
        </View>
    )
}