import { Pressable, Text, View, Dimensions, Platform,Image } from "react-native";
import { Feather } from "@expo/vector-icons"
import { useEffect, useRef } from "react";
import { useState } from "react"
import SwiperFlatList from "react-native-swiper-flatlist";
import config from "../common/config";
export default function CategoryComponent(props) {
  const swiper = useRef();
  const [index,setIndex]=useState(0);
  const [list,setList]=useState([]);
  const SplitArray = () => {
    console.log("开始分组");
    let arr = [];
    for (let i = 0; i < props.data.length / 4; i++) {
      console.log("======");
      console.log("第" + i + "组");
      let res = props.data.slice(4 * i, 4 * (i + 1));
      console.log(res);
      arr.push(res);
    }
    // console.log(arr);
    // return arr;

    setList([...arr]);
  }
  
  useEffect(()=>{
    SplitArray()
  },[])

  return (
    <View style={{ flex: 1, borderRadius: 32,position:'relative', backgroundColor: 'white', width: Dimensions.get("screen").width, height: 112.5, position: 'relative', marginVertical: 12 }}>
      <SwiperFlatList
        ref={swiper}
        // autoplayInvertDirection={isScrollEnd}
        onChangeIndex={(res)=>{
          setIndex(res.index);
        }}
        index={0}
      >
        {
          list?.map((item, index) => {
            console.log(item);
            return (
              <View key={index} style={{ display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center' }}>
                <View style={{ width: 16, height: '100%', backgroundColor: config.backgroundColor_1 }}></View>
                <View key={index} style={{ width: Dimensions.get("window").width - 32, flex: 1,flexDirection:'row',alignItems:'center', borderRadius: 12 }}>
                  {
                    item.map((it, idx) => {
                      return <View key={idx} style={{width:'25%',display:'flex',height:'100%',alignItems:'center',justifyContent:'center'}}>
                           <Image source={{uri:it.src}}></Image>
                           <Text>{it.title}</Text>
                      </View>
                    })
                  }
                </View>
                <View style={{ width: 16, height: '100%', backgroundColor: config.backgroundColor_1 }}></View>
              </View>
            )
          })
        }
       
      </SwiperFlatList>
      <View style={{position:'absolute',bottom:5,display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',width:'100%'}}>
        {
           list?.map((_item,_index)=>{
              if(index===_index){
                return (<View key={_index} style={{width:18,height:4,backgroundColor:config.text_color_1,borderRadius:12,marginRight:2}}>
                  </View>)
              }else{
                return (<View key={_index} style={{width:4,height:4,backgroundColor:'#DFDFDF',borderRadius:50,marginRight:2}}></View>)
              }
          })
        }
      </View>
    </View>
  )
}
