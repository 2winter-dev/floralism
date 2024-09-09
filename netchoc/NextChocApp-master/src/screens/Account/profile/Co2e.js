import { useNavigation } from "@react-navigation/native";
import { View, Pressable, Text, Dimensions, Image, Modal } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
// import { LineChart } from "react-native-gifted-charts";
// import { LineChart } from "react-native-gifted-charts"
export default function Co2e() {
    const navigation = useNavigation();
    const [visible, setVisible] = useState(false);
    return (<View style={{ display: 'flex', position: 'relative', minHeight: Dimensions.get("screen").height }}>
        <Image source={require('../../../assets/images/AccountBG.png')} style={{ width: '100%', height: '100%', position: 'absolute', left: 0, top: 0, right: 0, bottom: 0 }} />
        <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginTop: Dimensions.get("screen").height * 0.04, marginHorizontal: 32 }}>
            <Pressable onPress={() => { navigation.goBack() }} style={{ width: 30, height: 30, backgroundColor: 'white', borderRadius: 80, alignItems: 'center', justifyContent: 'center' }}>
                <Ionicons name="chevron-back" size={16} color="black" />
            </Pressable>
            <Text style={{ fontSize: 24 }}>CO2e avoided</Text>
            <View style={{ width: 30, height: 30 }}>

            </View>
        </View>
        <View style={{ marginTop: 24, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image source={require('../../../assets/images/Co2pic.png')} style={{ width: 180, height: 170, opacity: 0.5 }} />
        </View>
        <Pressable onPress={() => setVisible(true)} style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-end', marginHorizontal: 32 }}>
            <Image source={require('../../../assets/images/help1.png')} style={{ width: 20, height: 20 }}></Image>
        </Pressable>
        <Text style={{ fontSize: 20, fontWeight: '500', marginTop: 8, color: '#25745B', marginHorizontal: 32 }}>Cumulative reduction of  co2 dioxide emissions</Text>
        <Text style={{ fontSize: 12, fontWeight: '300', marginTop: 8, color: '#25745B', marginHorizontal: 32 }}>Yesterday's Traffic Calculation in Progress</Text>

        <View style={{ marginHorizontal: 32, display: 'flex', flexDirection: 'row', alignItems: 'flex-end', marginTop: 32 }}>
            <Text style={{ paddingHorizontal: 14, fontWeight: '500', paddingVertical: 12, fontSize: 32, color: '#25745B', backgroundColor: 'white', marginRight: 12 }}>1</Text>
            <Text style={{ paddingHorizontal: 14, fontWeight: '500', paddingVertical: 12, fontSize: 32, color: '#25745B', backgroundColor: 'white', marginRight: 12 }}>1</Text>
            <Text style={{ paddingHorizontal: 14, fontWeight: '500', paddingVertical: 12, fontSize: 32, color: '#25745B', backgroundColor: 'white', marginRight: 12 }}>1</Text>
            <Text style={{ paddingHorizontal: 14, fontWeight: '500', paddingVertical: 12, fontSize: 32, color: '#25745B', backgroundColor: 'white', marginRight: 12 }}>1</Text>
            <Text style={{ paddingHorizontal: 14, fontWeight: '500', paddingVertical: 12, fontSize: 32, color: '#25745B', backgroundColor: 'white', marginRight: 12 }}>1</Text>
            <Text style={{ paddingHorizontal: 14, fontWeight: '500', paddingVertical: 12, fontSize: 32, color: '#25745B', backgroundColor: 'white', marginRight: 12 }}>1</Text>
            <Text style={{ fontSize: 32, color: '#25745B', fontWeight: '500', }}>g</Text>
        </View>

        <View style={{ marginHorizontal: 32, display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 24 }}>
            <View style={{ display: 'flex', flex: 1, marginRight: 12, backgroundColor: 'white', borderRadius: 20, padding: 16 }}>
                <Text style={{ fontSize: 12, color: '#484848' }}>Cycle</Text>
                <Text style={{ fontSize: 28, color: '#25745B', fontWeight: '600', marginTop: 18 }}>100h</Text>
            </View>
            <View style={{ display: 'flex', flex: 1, marginRight: 12, backgroundColor: 'white', borderRadius: 20, padding: 16 }}>
                <Text style={{ fontSize: 12, color: '#484848' }}>Walking</Text>
                <Text style={{ fontSize: 28, color: '#25745B', fontWeight: '600', marginTop: 18 }}>100km</Text>
            </View>
            <View style={{ display: 'flex', flex: 1, marginRight: 12, backgroundColor: 'white', borderRadius: 20, padding: 16 }}>
                <Text style={{ fontSize: 12, color: '#484848' }}>Save electricity</Text>
                <Text style={{ fontSize: 28, color: '#25745B', fontWeight: '600', marginTop: 18 }}>100kw</Text>
            </View>
        </View>

        <Text style={{ marginTop: 32, fontSize: 28, marginHorizontal: 32 }}>Personal details</Text>
{/* 
        <View style={{ backgroundColor: '#1A3461' }}>
            <LineChart
                initialSpacing={0}
                data={lineData}
                spacing={30}
                hideDataPoints
                thickness={5}
                hideRules
                hideYAxisText
                yAxisColor="#0BA5A4"
                showVerticalLines
                verticalLinesColor="rgba(14,164,164,0.5)"
                xAxisColor="#0BA5A4"
                color="#0BA5A4"
            />
        </View> */}

        <Modal visible={visible} onRequestClose={() => setVisible(false)} transparent={true}>
            <Pressable onPress={() => setVisible(false)} style={{ width: '100%', height: '100%', backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Pressable onPress={(e) => {
                    e.stopPropagation();
                }} style={{ borderRadius: 50, width: '90%', backgroundColor: 'white', position: 'relative' }}>
                    <View style={{ width: '100%', backgroundColor: '#25745B', display: 'flex', alignItems: 'center', justifyContent: 'center', paddingVertical: 30, borderTopLeftRadius: 50, borderTopRightRadius: 50 }}>
                        <Image source={require('../../../assets/images/tanzuji.png')} style={{ width: 184, height: 50 }} />
                    </View>
                    <View style={{ padding: 32, marginBottom: 64 }}>
                        <View style={{ display: 'flex', flexDirection: 'row' }}>
                            <View style={{ width: 10, height: 10, backgroundColor: '#25745B', borderRadius: 50, marginRight: 12 }}></View>
                            <Text style={{ fontSize: 18, lineHeight: 18, width: '95%' }}>CO2e stands for "carbon dioxide equivalent," a measure that includes carbon dioxide and all other greenhouse gases. </Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 36 }}>
                            <View style={{ width: 10, height: 10, backgroundColor: '#25745B', borderRadius: 50, marginRight: 12 }}></View>
                            <Text style={{ fontSize: 18, lineHeight: 18, width: '95%' }}>While CO2 only includes carbon dioxide, CO2e represents a broader range of gases. </Text>
                        </View>
                        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 36 }}>
                            <View style={{ width: 10, height: 10, backgroundColor: '#25745B', borderRadius: 50, marginRight: 12 }}></View>
                            <Text style={{ fontSize: 18, lineHeight: 18, width: '95%' }}>To help you understand how much CO2e you've avoided releasing, we've teamed up with an organization named Carbonstop.</Text>
                        </View>
                    </View>

                    <Pressable onPress={() => setVisible(false)} style={{ position: 'absolute', backgroundColor: '#25745B', bottom: -32, paddingHorizontal: 48, borderRadius: 50, paddingVertical: 18, left: '50%', transform: [{ translateX: -54 }] }}>
                        <Text style={{ fontSize: 18, color: 'white' }}>OK</Text>
                    </Pressable>
                </Pressable>
            </Pressable>
        </Modal>
    </View>)
}