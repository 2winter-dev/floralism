import Header from "../pages/component/Header";
import Footer from "../pages/component/Footer";
import styles from '@/styles/Home.module.css'
import style from '@/styles/productSearch.module.css'
import SearchInput from "../pages/component/SearchInput";
import GoodsItem from "../pages/component/GoodsItem";
import { useEffect,useState } from "react";
import { spliceArr } from "@/method";
import GoodsScoll from "../pages/component/GoodsScroll";
import DynamicComponent from "@/pages/component/Dynamic";

export default function ProductSearch({cateList,data}){
    const [flag,setFlag]=useState(false);
    const [page,setPage]=useState(1);
    const [goodsList,setGoodsList]=useState([]);
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
        setGoodsList(spliceArr(data,flag?8:16))
        // setCategoryPage(1);
      }, [flag])

      useEffect(()=>{
        //console.log(goodsList)
      },[goodsList])

    return (<div style={{position:'relative'}}>
         <DynamicComponent cateList={cateList} setLogin={setLogin} />
        <div style={{width:'100%',position:'relative'}}>
            <img src="/banner-搜索背景.png" style={{width:'100%'}} />
            <div className={style.banner_search} style={{position:'absolute'}}>
                <img src="/product-search-desc.png"  className={style.banner_desc}
                />
                <SearchInput />
            </div>
        </div>
        <div  className={`${style.search_main_body}`} style={{}}>
              {/* <GoodsItem /> */}
              <GoodsScoll
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
                 />
        </div>
        <Footer />
    </div>)
}


export async function getStaticPaths() {
  const response = await fetch(
      `${constant.api_url}/api/Flowercategory/allIndex`
  );
  const data = await response.json()
  let res = [];
  data.data.map((item, index) => {
      res.push({ params: { productId: item.id.toString() } });
    
  })

  return {
      paths: res,
      fallback: false,
  };
}

export async function getStaticProps(context){

  const { params } = context;
  console.log(params);
  const response = await fetch(
      `${constant.api_url}/api/flowers/index?keyword=&flower_category_id=${params.category_id}`
  );
  const tt_response = await fetch(
      `${constant.api_url}/api/flowercategory/index`
  );
  const tt_data = await tt_response.text()
  const data = await response.text()

  return {
      props: {
          cateList: JSON.parse(tt_data).data,
          data: JSON.parse(data).data,
      },
  };
}