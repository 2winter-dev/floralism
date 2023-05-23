import Header from "./component/Header";
import Footer from "./component/Footer";
import styles from '@/styles/Home.module.css'
import style from '@/styles/productSearch.module.css'
import SearchInput from "./component/SearchInput";
import GoodsItem from "./component/GoodsItem";
import { useEffect,useState } from "react";
import { spliceArr } from "@/method";
import GoodsScoll from "./component/GoodsScroll";

export default function ProductSearch({data}){
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
        <Header />
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
                    location.href = "/ProductDetail"
                  }}
                 />
        </div>
        <Footer />
    </div>)
}


export async function getStaticProps(props){

    return {
        props:{
           data:[
            { title: '藍色', src: '/homepage/圖1.png', price: '100,00' },
            { title: 'asdjkalsjdakjasdnlandlasdalskdnalasdlknl', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'wqe283123asjd', src: '/homepage/圖2.png', price: '120,00' },
            { title: 'asdjkalsjdakj', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjdasd123kj', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjk123123j', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjdakj', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjda123j', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjda123j', src: '/homepage/圖3.png', price: '200,00' },
            { title: '藍色', src: '/homepage/圖1.png', price: '100,00' },
            { title: 'asdjkalsjdakjasdnlandlasdalskdnalasdlknl', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'wqe283123asjd', src: '/homepage/圖2.png', price: '120,00' },
            { title: 'asdjkalsjdakj', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjdasd123kj', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjk123123j', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjdakj', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjda123j', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjda123j', src: '/homepage/圖3.png', price: '200,00' },
            { title: '藍色', src: '/homepage/圖1.png', price: '100,00' },
            { title: 'asdjkalsjdakjasdnlandlasdalskdnalasdlknl', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'wqe283123asjd', src: '/homepage/圖2.png', price: '120,00' },
            { title: 'asdjkalsjdakj', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjdasd123kj', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjk123123j', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjdakj', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjda123j', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjda123j', src: '/homepage/圖3.png', price: '200,00' },
            { title: '藍色', src: '/homepage/圖1.png', price: '100,00' },
            { title: 'asdjkalsjdakjasdnlandlasdalskdnalasdlknl', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'wqe283123asjd', src: '/homepage/圖2.png', price: '120,00' },
            { title: 'asdjkalsjdakj', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjdasd123kj', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjk123123j', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjdakj', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjda123j', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjda123j', src: '/homepage/圖3.png', price: '200,00' },
            { title: '藍色', src: '/homepage/圖1.png', price: '100,00' },
            { title: 'asdjkalsjdakjasdnlandlasdalskdnalasdlknl', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'wqe283123asjd', src: '/homepage/圖2.png', price: '120,00' },
            { title: 'asdjkalsjdakj', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjdasd123kj', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjk123123j', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjdakj', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjda123j', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjda123j', src: '/homepage/圖3.png', price: '200,00' }, { title: '藍色', src: '/homepage/圖1.png', price: '100,00' },
            { title: 'asdjkalsjdakjasdnlandlasdalskdnalasdlknl', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'wqe283123asjd', src: '/homepage/圖2.png', price: '120,00' },
            { title: 'asdjkalsjdakj', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjdasd123kj', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjk123123j', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjdakj', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjda123j', src: '/homepage/圖3.png', price: '200,00' },
            { title: 'asdjkalsjda123j', src: '/homepage/圖3.png', price: '200,00' },

           ]
        }
    }
}