import Collapsible from 'react-native-collapsible';
import { ScrollView, View, Dimensions, Pressable, Text, Image, TextInput } from "react-native"
import { Ionicons, Entypo, Octicons, MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
export default function QuestionDetail() {
    const navigation = useNavigation();


    return (
        <ScrollView contentContainerStyle={{ minHeight: Dimensions.get("screen").height }} style={{ display: 'flex', width: '100%', minHeight: Dimensions.get("screen").height, backgroundColor: 'rgb(254,250,247)', position: 'relative' }}>
            {/* <Image  source={require('../../../assets/images/BackgroundImage.png')} style={{position:'absolute',top:0,bottom:0,left:0,right:0,width:'100%',height:'100%'}} /> */}
            <View style={{ display: 'flex', marginTop: Dimensions.get("screen").height * 0.04, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 32 }}>

                <View style={{ width: 100 }}>
                    <Pressable onPress={() => navigation.canGoBack() && navigation.goBack()} style={{ width: 40, height: 40, borderRadius: 50, backgroundColor: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Ionicons name="chevron-back" size={24} color="black" />
                    </Pressable>
                </View>
                <Text style={{ fontSize: 20, fontWeight: '600' }}>Q&A</Text>
                <View style={{ width: 100, display: 'flex', flexDirection: 'row', alignItems: 'center' }}>

                </View>
            </View>
            <Text style={{fontSize:32}}>Account & Registration</Text>
            <View style={{ marginHorizontal: 32, marginTop: 32 }}>
                <Accordion
                    activeSections={[0]}
                    sections={['Section 1', 'Section 2', 'Section 3']}
                    renderSectionTitle={this._renderSectionTitle}
                    renderHeader={this._renderHeader}
                    renderContent={this._renderContent}
                    onChange={this._updateSections}
                />
            </View>
        </ScrollView>
    )
}