import Header from "../component/Header";
import Footer from "../component/Footer";
import styles from '@/styles/Home.module.css'
import style from '@/styles/productSearch.module.css'
import SearchInput from "../component/SearchInput";
import GoodsItem from "../component/GoodsItem";
import { useEffect, useRef, useState } from "react";
import { spliceArr } from "@/method";
import { constant } from "../../constant";
import GoodsScoll from "../component/GoodsScroll";
import DynamicComponent from "@/pages/component/Dynamic";
import { useMutation } from "@tanstack/react-query";
import m_api from "../../m_api";
import { useRouter } from "next/router";

export default function ProductSearch({ cateList, data }) {
  console.log(data);
  const router = useRouter();
  const [flag, setFlag] = useState(false);
  const [page, setPage] = useState(1);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [visible, setVisible] = useState(false);
  const [goodsList, setGoodsList] = useState([]);
  const input = useRef();
  const [keyword, setKeyWord] = useState("")
  const fetchGoods = useMutation({
    mutationKey: ['fetchGoods'],
    mutationFn: async (data) => await m_api.fetchGoods(data),
  })

  const ToSearch = () => {
    fetchGoods.mutate({ keyword, flower_category_id: "", listRows: 16, page: page }, {
      onSuccess: (res) => {
        console.log(res);
      },
      onError: (res) => {
        console.log(res);
      }
    })
  }
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
    setGoodsList(spliceArr(data.data, 16))
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
        <div className={`${styles.search_area}`}>
          <span className="iconfont" style={{ marginLeft: 8, fontSize: 20 }}>&#xe82e;</span>
          <input
            ref={input}
            type='text'
            value={keyword}
            onInput={(e) => setKeyWord(e.target.value)}
            placeholder='Search....'
            className={`${styles.input}`}
            style={{ flex: 1, padding: 1, marginLeft: 10, border: "none", outline: "none", backgroundColor: 'transparent' }}
          />
        </div>
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
                 click={(data) => {
                    //console.log(data);
                    
                  }}
                 /> */}
      <GoodsScoll
        title={data.category_name}
        list={goodsList}
        page={page}
        id={data.data[0].flower_category_id}
        setPage={setPage}
        perPage={16}
        maxPage={data.last_page}
        setList={setGoodsList}
        animation
        type={''}
      />
    </div>
    <Footer />
  </div>)
}


export async function getStaticPaths() {
  const response = await fetch(
    `${constant.api_url}/api/Flowercategory/allIndex`, {
    mode: 'cors',
    headers: {
      // "Authorization": `Bearer ${data.cookie}`,
      "Content-Type": "application/json",
      "Access-Control-Request-Method": "GET,POST",
      "Access-Control-Request-Headers": "Content-Type",
    }
  }
  );
  const data = await response.json()
  let res = [];
  data.data.map((item, index) => {
    res.push({ params: { ProductSearchId: item.id.toString() } });

  })

  return {
    paths: res,
    fallback: false,
  };
}


export async function getStaticProps(context) {

  const { params } = context;
  console.log(params);
  const response = await fetch(
    `${constant.api_url}/api/flowers/index?keyword=&flower_category_id=${params.ProductSearchId}&listRows=16`, {
    headers: {
      // "Authorization": `Bearer ${data.cookie}`,
      "Content-Type": "application/json",
      "Access-Control-Request-Method": "GET,POST",
      "Access-Control-Request-Headers": "Content-Type",
    }
  }
  );
  const tt_response = await fetch(
    `${constant.api_url}/api/flowercategory/index`, {
    headers: {
      // "Authorization": `Bearer ${data.cookie}`,
      "Content-Type": "application/json",
      "Access-Control-Request-Method": "GET,POST",
      "Access-Control-Request-Headers": "Content-Type",
    }
  }
  );
  const tt_data = await tt_response.text()
  const data = await response.text()
  console.log("------======-----")
  console.log(data);
  return {
    props: {
      cateList: JSON.parse(tt_data).data,
      data: JSON.parse(data).data,
    },
  };
}