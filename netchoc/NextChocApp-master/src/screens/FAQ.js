import { ScrollView, View, Dimensions, Pressable, Text, Image, TextInput } from "react-native"
import { Ionicons, Entypo, Octicons, MaterialIcons } from "@expo/vector-icons"
import { useState } from "react"
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
export default function FAQ() {
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
      <View style={{ marginTop: 32, marginHorizontal: 32 }}>
      <Pressable onPress={()=>navigation.navigate("Account.QuestionDetail",{title:"Account & Registration"})} style={{
          display: 'flex',
          flex: 1,
          backgroundColor: 'white',
          justifyContent:'space-between',
          paddingRight:16,
          flexDirection:'row',
          alignItems:'center',
          borderRadius: 20,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 2,
        }}>
          <Text style={{ paddingHorizontal: 24, paddingVertical: 12, fontSize: 20 }}>Account & Registration</Text>
          <AntDesign name="right" size={24} color="rgba(0,0,0,0.4)" />
        </Pressable>
        <View style={{
          display: 'flex',
          flex: 1,
          marginTop:16,
          backgroundColor: 'white',
          justifyContent:'space-between',
          paddingRight:16,
          flexDirection:'row',
          alignItems:'center',
          borderRadius: 20,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 2,
        }}>
          <Text style={{ paddingHorizontal: 24, paddingVertical: 12, fontSize: 20 }}>Orders & Payments</Text>
          <AntDesign name="right" size={24} color="rgba(0,0,0,0.4)" />
        </View>
        <View style={{
          display: 'flex',
          flex: 1,
          marginTop:16,
          backgroundColor: 'white',
          justifyContent:'space-between',
          flexDirection:'row',
          paddingRight:16,
          alignItems:'center',
          borderRadius: 20,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 2,
        }}>
          <Text style={{ paddingHorizontal: 24, paddingVertical: 12, fontSize: 20 }}>Refunds and Cancellations</Text>
          <AntDesign name="right" size={24} color="rgba(0,0,0,0.4)" />
        </View>

        <View style={{
          display: 'flex',
          flex: 1,
          marginTop:16,
          backgroundColor: 'white',
          justifyContent:'space-between',
          flexDirection:'row',
          paddingRight:16,
          alignItems:'center',
          borderRadius: 20,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 2,
        }}>
          <Text style={{ paddingHorizontal: 24, paddingVertical: 12, fontSize: 20 }}>Merchants & Menus</Text>
          <AntDesign name="right" size={24} color="rgba(0,0,0,0.4)" />
        </View>
        <View style={{
          display: 'flex',
          flex: 1,
          marginTop:16,
          backgroundColor: 'white',
          justifyContent:'space-between',
          flexDirection:'row',
          paddingRight:16,
          alignItems:'center',
          borderRadius: 20,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 2,
        }}>
          <Text style={{ paddingHorizontal: 24, paddingVertical: 12, fontSize: 20 }}>Account Security and Privacy</Text>
          <AntDesign name="right" size={24} color="rgba(0,0,0,0.4)" />
        </View>
        <View style={{
          display: 'flex',
          flex: 1,
          marginTop:16,
          backgroundColor: 'white',
          justifyContent:'space-between',
          flexDirection:'row',
          paddingRight:16,
          alignItems:'center',
          borderRadius: 20,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 2,
        }}>
          <Text style={{ paddingHorizontal: 24, paddingVertical: 12, fontSize: 20 }}>Discounts and Promotions</Text>
          <AntDesign name="right" size={24} color="rgba(0,0,0,0.4)" />
        </View>
        <View style={{
          display: 'flex',
          flex: 1,
          marginTop:16,
          backgroundColor: 'white',
          justifyContent:'space-between',
          flexDirection:'row',
          paddingRight:16,
          alignItems:'center',
          borderRadius: 20,
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.23,
          shadowRadius: 2.62,
          elevation: 2,
        }}>
          <Text style={{ paddingHorizontal: 24, paddingVertical: 12, fontSize: 20 }}>Community and Support</Text>
          <AntDesign name="right" size={24} color="rgba(0,0,0,0.4)" />
        </View>
      </View>
    </ScrollView>
  )
}