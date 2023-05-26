import Header from "../component/Header";
import Footer from "../component/Footer";
import styles from '@/styles/Home.module.css'
import style from '@/styles/productSearch.module.css'
import SearchInput from "../component/SearchInput";
import GoodsItem from "../component/GoodsItem";
import { useEffect, useState } from "react";
import { spliceArr } from "@/method";
import GoodsScoll from "../component/GoodsScroll";
import DynamicComponent from "@/pages/component/Dynamic";
import { constant } from "@/constant";
import LoginPannel from "../component/LoginPannel";
import RegisterPannerl from "../component/ResgisterPannel";
import ForgetPassword from "../component/ForgetPassword";
import SearchPageGoodsScoll from "../component/SearchPageScroll";
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

export default function ProductSearch1({ cateList, data }) {
  console.log("================");
  console.log(stripe);
  const [flag, setFlag] = useState(false);
  const [page, setPage] = useState(1);
  const [goodsList, setGoodsList] = useState(data.data);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [visible, setVisible] = useState(false);
  const resizeUpdate = (e) => {
    if (e.target.innerWidth <= 1100) {
      //console.log("====", e.target.innerWidth);
      setFlag(true);
    } else {
      //console.log("-----", e.target.innerWidth);
      setFlag(false);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", resizeUpdate);
    window.innerWidth < 1100 ? (!flag && setFlag(true)) : (flag && setFlag(false))
    return () => {
      window.removeEventListener("resize", resizeUpdate);
    }
  }, [])

  useEffect(() => {
    //console.log("flag改變", flag);
    setPage(1);
    setGoodsList(spliceArr(data, flag ? 8 : 16))
    // setCategoryPage(1);
  }, [flag])

  useEffect(() => {
    //console.log(goodsList)
  }, [goodsList])

  return (<div style={{ position: 'relative' }}>
    <DynamicComponent cateList={cateList} setLogin={setLogin} />
    <div style={{ width: '100%', position: 'relative' }}>
      <img src="/banner-搜索背景.png" style={{ width: '100%' }} />
      <div className={style.banner_search} style={{ position: 'absolute' }}>
        <img src="/product-search-desc.png" className={style.banner_desc}
        />
        <SearchInput />
      </div>
    </div>
    <div className={`${style.search_main_body}`} style={{}}>
      {/* <GoodsItem /> */}
      {/* <GoodsScoll
                 list={goodsList}
                 page={page} 
                 type={''} 
                 setPage={setPage} 
                 title={'【FLORALISM】 玫瑰'}
                 top_style={{marginBottom:24}}
                 ButtonGroupStyle={{marginTop:6}}
                 animation
                 /> */}
      <SearchPageGoodsScoll
        list={goodsList}
        page={page}
        type={''}
        setPage={setPage}
        title={'【FLORALISM】 玫瑰'}
        top_style={{ marginBottom: 24 }}
        ButtonGroupStyle={{ marginTop: 6 }}
      />
    </div>
    <Footer />
    {
      <LoginPannel login={login} close={() => setLogin(false)} toRegister={() => {
        setLogin(false);
        setRegister(true);
      }} toForget={() => {
        setLogin(false);
        setVisible(true);
      }
      } />
    }
    {
      <RegisterPannerl type={false} register={register} close={() => setRegister(false)} toLogin={() => {
        setLogin(true);
        setRegister(false)
      }} />
    }
    {
      <ForgetPassword type={0} close={() => setVisible(false)} visible={visible} toLogin={() => {
        setVisible(false);
        setLogin(true);
      }} />
    }
  </div>)
}

export async function getStaticProps(context) {


  const _response = await fetch(
    `${constant.api_url}/api/Flowercategory/allIndex`,{
      mode: 'cors',
      headers: {
          // "Authorization": `Bearer ${data.cookie}`,
          "Content-Type": "application/json",
          "Access-Control-Request-Method": "POST",
          "Access-Control-Request-Headers": "Content-Type",
      }
    }
);
const _data = await _response.json()
let res = [];
_data.data.map((item, index) => {
    res.push({ params: { productSearchId: item.id.toString() } });
  
})
console.log("-----");
console.log(res);
  const response = await fetch(
    `${constant.api_url}/api/flowers/index?keyword=&flower_category_id=${1}`,{
      mode: 'cors',
      headers: {
          // "Authorization": `Bearer ${data.cookie}`,
          "Content-Type": "application/json",
          "Access-Control-Request-Method": "POST",
          "Access-Control-Request-Headers": "Content-Type",
      }
    }
  );
  const tt_response = await fetch(
    `${constant.api_url}/api/flowercategory/index`,{
      mode: 'cors',
      headers: {
          // "Authorization": `Bearer ${data.cookie}`,
          "Content-Type": "application/json",
          "Access-Control-Request-Method": "POST",
          "Access-Control-Request-Headers": "Content-Type",
      }
    }
  );
  const tt_data = await tt_response.json()
  const data = await response.text()
  console.log("---");
  console.log(tt_data);

  return {
    props: {
      cateList: tt_data.data,
      data: JSON.parse(data).data,
    },
  };
}