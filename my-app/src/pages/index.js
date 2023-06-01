
import { Inter } from 'next/font/google'
// import Image from 'next/image'
import Script from "next/script";
import styles from '@/styles/Home.module.css'
import style from '@/styles/product.module.css'
import GoodsItem from './component/GoodsItem'
import "react-responsive-carousel/lib/styles/carousel.min.css"
import GoodsScoll from './component/GoodsScroll'
// import Carousel from './component/Carousel'
import { Carousel } from 'react-responsive-carousel';
import Contactus from './component/Contactus'
import DynamicComponent from './component/Dynamic';
import Footer from './component/Footer'
import useBrowserChange from '@/hooks/useBrowserChange'
import { useEffect, useState } from 'react'
import { spliceArr } from '@/method'
import LoginPannel from './component/LoginPannel'
import RegisterPannerl from './component/ResgisterPannel'
import ForgetPassword from "./component/ForgetPassword";
import BodyBanner from './component/BodyBanner'
import { constant } from '@/constant/index';
import Cookies from 'js-cookie';
import CateScroll from './component/cateScroll';
import Head from 'next/head';
import { useRouter } from 'next/router';
const inter = Inter({ subsets: ['latin'] })

export default function Home({ allcate, cateList, GoodsPage, carousel }) {
  // //////////console.log("====");
  const router = useRouter();
  // //////console.log(GoodsPage);
  const [flag, setFlag] = useState(1);
  const [category, setCategory] = useState([]);
  const [categoryPage, setCategoryPage] = useState(1);
  const [goodsList, setGoodsList] = useState([]);
  const [goodsPage, setGoodsPage] = useState(1);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const resizeUpdate = (e) => {
    if (e.target.innerWidth <= 675) {
      ////////////console.log("====", e.target.innerWidth);
      setFlag(0);
    } else if (e.target.innerWidth <= 1100) {
      setFlag(1)
    } else {
      ////////////console.log("-----", e.target.innerWidth);
      setFlag(2);
    }
  }
  useEffect(() => {
    window.addEventListener("resize", resizeUpdate);
    if (window.innerWidth <= 675) {
      ////////////console.log("====", e.target.innerWidth);
      setFlag(0);
    } else if (window.innerWidth <= 1100) {
      setFlag(1)
    } else {
      ////////////console.log("-----", e.target.innerWidth);
      setFlag(2);
    }
    return () => {
      window.removeEventListener("resize", resizeUpdate);
    }
  }, [])

  const carousel_slice = () => {
    let res = [];
    for (let i = 0; i < carousel.length / 4; i++) {
      let sli = carousel.slice(4 * i, 4 * (i + 1));
      res.push(sli);
    }
    return res;
  }


  let MySwiper;
  useEffect(() => {
    //////////console.log("flag改變", flag);
    setCategory(spliceArr(allcate, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8, 'cat'));
    ////////////console.log(spliceArr(GoodsPage,  !flag ? 4 :flag===1? 6:flag===2&&8))
    setGoodsList(spliceArr(GoodsPage.data, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8));
    setGoodsPage(1);
    setCategoryPage(1);
  }, [flag])
  // ////////////console.log("=======");
  // ////////////console.log(category[categoryPage]);
  return (
    <div style={{ position: 'relative' }}>
      <Head>
        {/* <meta charSet='utf-8' /> */}
        <title>【買花】 | 送花 | 「Floralism」香港花店</title>
        <meta name='title' content={'【買花】 | 送花 | 「Floralism」香港花店'} />
        <meta name='description' content={'「Floralism」專業香港花店提供買花及送花服務，如鮮花、盆栽、花籃等，而且還提供網上訂購、送貨上門等一系列買花服務，讓人們能夠方便快捷地為他人表達心意。'} />
      </Head>


      <DynamicComponent cateList={cateList} setLogin={setLogin} />
      <div style={{ width: '100%', position: 'relative' }} className={styles.banner}>
        {/* <Image priority src="/homepage/top-banner.png" width={1920} height={700} style={{width:'100%'}}/> */}
        <div style={{}} className={styles.top_banner_area}>
          <img src="/homepage/banner-desc.png" width={'100%'} />
          <button onClick={() => router.push('/productSearch/3')} style={{ border: 'none', display: 'block', cursor: 'pointer' }} className={styles.banner_buttom} >點擊選購</button>
        </div>
      </div>
      <div>

      </div>
      <main className={`${styles.main_body}`}>
        <div className={styles.goods_list}>
          <CateScroll
            title={'【FLORALISM】 全部分類'}
            list={category}
            page={categoryPage}
            type={'category'}
            perPage={!flag ? 4 : flag === 1 ? 6 : flag === 2 && 8}
            setPage={setCategoryPage}
            animation
          // click={() => ////////////console.log("1")}
          />
        </div>
        <BodyBanner
          flag={flag}
          imgTiny={"/homepage/小段背景-m.png"}
          img={"/homepage/小段背景.png"}
          title={'FLORALISM 情人節定制花束'}
          desc1={'情人節送花通常是表達愛情和浪漫的方法，帶著各種寓意的感情'}
          desc2={'不同的花卉都有著不同的寓意和象徵意義，你可以選擇適合你和你的伴侶的花卉來表達你的愛意和感情。'}
        />
        <div className={styles.goods_view}>
          {/* <GoodsScoll /> */}
          <GoodsScoll
            title={allcate[1].categoryname}
            list={goodsList}
            page={goodsPage}
            id={allcate[1].id}
            setPage={setGoodsPage}
            perPage={!flag ? 4 : flag === 1 ? 6 : flag === 2 && 8}
            maxPage={GoodsPage.last_page}
            setList={setGoodsList}
            type={''}
            animation
          />
        </div>
        <div className={styles.goods_scroll}>
          <div className={style.youMaybeLike} style={{ padding: '5%', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div className={styles.distance} style={{ borderBottomWidth: 1, borderBottomColor: 'white' }}></div>
              <div className={styles.title} style={{ whiteSpace: "nowrap" }}>情人節禮物 | 最受歡迎的</div>
              <div className={styles.distance} style={{ borderBottomWidth: 1, borderBottomColor: 'white' }}></div>
            </div>
            <div style={{ position: "relative" }}>

              <div style={{ padding: 8, marginTop: 24 }}>

                <Carousel showThumbs={false} infiniteLoop showIndicators={false} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50} showStatus={false}>
                  {
                    carousel_slice().map((item, index) => {
                      //////////console.log(carousel_slice().length);
                      return (<div key={item.id + index.toString()} style={{ display: 'flex', flexWrap: 'wrap' }}>
                        {
                          item.map((it, ii) => {
                            return (<GoodsItem imgTopStyle={{}} key={item.id + index.toString() + ii.toString()} item={it} type={'carsouel'} top_style={{}} imgStyle={{}} animation />)
                          })
                        }
                      </div>)
                    })
                  }
                </Carousel>
              </div>
            </div>

          </div>

        </div>
        <div className={styles.contactus}>
          <Contactus />
        </div>
      </main>
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
      <Script defer src="/swiper/js/idangerous.swiper.min.js" onReady={() => {
        MySwiper = new Swiper('.swiper-container', {
          loop: true,
          onInit: function (swiper) {
            swiper.swipeNext()
          }
        })
      }}></Script>
    </div>

  )
}


export async function getStaticProps({ local }) {
  //  ////////////console.log(constant.api_url);
  const response = await fetch(
    `${constant.api_url}/api/flowercategory/index`, {
    mode: 'cors',
    headers: {
      // "Authorization": `Bearer ${data.cookie}`,
      "Content-Type": "application/json",
      "Access-Control-Request-Method": "POST",
      "Access-Control-Request-Headers": "Content-Type",
    }
  }
  );
  const allcate_response = await fetch(
    `${constant.api_url}/api/Flowercategory/allIndex`, {
    mode: 'cors',
    headers: {
      // "Authorization": `Bearer ${data.cookie}`,
      "Content-Type": "application/json",
      "Access-Control-Request-Method": "POST",
      "Access-Control-Request-Headers": "Content-Type",
    }
  }
  )
  let allcate = await allcate_response.json();
  let data = await response.text();
  // //////////console.log("====================");
  // //////////console.log(allcate);
  const swiper_response = await fetch(
    `${constant.api_url}/api/flowers/getTopicFlower?flower_category_id=${JSON.parse(data).data[0].id}`, {
    mode: 'cors',
    headers: {
      // "Authorization": `Bearer ${data.cookie}`,
      "Content-Type": "application/json",
      "Access-Control-Request-Method": "POST",
      "Access-Control-Request-Headers": "Content-Type",
    }
  }
  )
  //////console.log(allcate);
  const goods_response = await fetch(
    `${constant.api_url}/api/flowers/index?flower_category_id=${allcate.data[1].id}`, {
    mode: 'cors',
    headers: {
      // "Authorization": `Bearer ${data.cookie}`,
      "Content-Type": "application/json",
      "Access-Control-Request-Method": "POST",
      "Access-Control-Request-Headers": "Content-Type",
    }
  }
  )

  ////////////console.log(response);

  let swiper_data = await swiper_response.text();
  let goods_data = await goods_response.text();
  //////////console.log("====================");

  //////////console.log(JSON.parse(goods_data).data);
  // //////////console.log(data);


  return {
    props: {
      allcate: allcate.data,
      cateList: JSON.parse(data).data,
      GoodsPage: JSON.parse(goods_data).data,
      carousel: JSON.parse(swiper_data).data.data,
    },
    revalidate: 30, // In seconds
  };
}