
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
// import { ToastContainer, toast } from 'react-toastify';
import toast, { Toaster } from "react-hot-toast";
import DynamicButton from './component/DynamicButton';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home({ allcate, cateList, GoodsPage, carousel }) {
  // //////////////////////////////console.log("====");
  // ////////////console.log(GoodsPage);
  const router = useRouter();
  // //////////////////////////console.log(GoodsPage);
  const [bannerSize, setBannerSize] = useState(false);
  const [flag, setFlag] = useState(1);
  const [category, setCategory] = useState([]);
  const [categoryPage, setCategoryPage] = useState(1);
  const [goodsList, setGoodsList] = useState([]);
  const [goodsPage, setGoodsPage] = useState(1);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isShow, setIsShow] = useState(false);
  // //////console.log(GoodsPage)
  const resizeUpdate = (e) => {
    if (e.target.innerWidth <= 750) {
      ////////////////////////////////console.log("====", e.target.innerWidth);
      setFlag(0);
    } else if (e.target.innerWidth <= 1100) {
      setFlag(1)
    } else {
      ////////////////////////////////console.log("-----", e.target.innerWidth);
      setFlag(2);
    }
    setBannerSize(window.innerWidth <= 750 ? true : false);
  }
  useEffect(() => {
    window.addEventListener("resize", resizeUpdate);
    if (window.innerWidth <= 750) {
      ////////////////////////////////console.log("====", e.target.innerWidth);
      setFlag(0);
    } else if (window.innerWidth <= 1100) {
      setFlag(1)
    } else {
      ////////////////////////////////console.log("-----", e.target.innerWidth);
      setFlag(2);
    }
    setBannerSize(window.innerWidth <= 750 ? true : false);
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
    //////////////////////////////console.log("flag改變", flag);
    setCategory(spliceArr(allcate, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8, 'cat'));
    ////////////////////////////////console.log(spliceArr(GoodsPage,  !flag ? 4 :flag===1? 6:flag===2&&8))
    setGoodsList(spliceArr(GoodsPage.data, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8));
    setGoodsPage(1);
    setCategoryPage(1);
  }, [flag])
  // ////////////////////////////////console.log("=======");
  // ////////////////////////////////console.log(category[categoryPage]);
  return (
    <div style={{ position: 'relative' }}>
      <Head>
        <title>{'【買花】 | 送花 | 「Floralism」香港花店'}</title>
        <meta name='description' content={'「Floralism」專業香港花店提供買花及送花服務，如鮮花、盆栽、花籃等，而且還提供網上訂購、送貨上門等一系列買花服務，讓人們能夠方便快捷地為他人表達心意。'} />
        <meta name='keywords' content={'買花,送花,香港花店'} />
        <meta name="google-site-verification" content="TASYD5-Zc0N3VmsQCYv7GjkdAJN6uRcPCbBh6QCPrwg" />
      </Head>


      <DynamicComponent cateList={cateList} setLogin={setLogin} />
      <div style={{ width: '100%', position: 'relative', backgroundPosition: 'revert', display: 'flex', backgroundImage: `url(${bannerSize ? "/homepage/tiny-top-banner.jpg" : "/homepage/top-banner.jpg"})` }} className={styles.banner}>
        {/* <Image priority src="/homepage/top-banner.png" width={1920} height={700} style={{width:'100%'}}/> */}
        <div style={{ display: 'flex', flexDirection: 'column', color: 'white' }} className={styles.top_banner_area}>
          <img alt="home top banner description" src={"/homepage/banner-desc.png"} width={'100%'} />
          <Link href='/productSearch/2' style={{ border: 'none', display: 'block', cursor: 'pointer' }} className={styles.banner_buttom} >點擊選購</Link>
        </div>
      </div>
      <div>

      </div>
      <main className={`${styles.main_body}`}>
        <div className="c1 container" >
          <div className={`row`} style={{ margin: '2.5rem 0' }}>
            <div style={{ padding: '0 2%' }} >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {flag !== 0 && <div className={styles.distance}></div>}
                <div className={styles.title} style={{ whiteSpace: 'nowrap', flex: 1 }}>{'【FLORALISM】 全部分類'}</div>
                {flag !== 0 && <div className={styles.distance}></div>}
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {
                  allcate.map((item, index) => {
                    return <GoodsItem key={index} src={item.src} item={item} title={item.categoryname} price={item.price} type={'category'} animation={'animation'} />
                  })
                }
              </div>
            </div>
          </div>
        </div>
        <BodyBanner
          flag={flag}
          imgTiny={"/homepage/小段背景-m.png"}
          img={"/homepage/小段背景.png"}
          title={'FLORALISM 情人節定制花束'}
          desc1={'情人節送花通常是表達愛情和浪漫的方法，帶著各種寓意的感情'}
          desc2={'不同的花卉都有著不同的寓意和象徵意義，你可以選擇適合你和你的伴侶的花卉來表達你的愛意和感情。'}
        />
        <div className="c1 container" >
          <div className={`row  py-4`} style={{ marginTop: 24 }}>
            {/* <GoodsScoll /> */}
            <GoodsScoll
              title={GoodsPage.category_name}
              list={goodsList}
              page={goodsPage}
              id={'花籃'}
              setPage={setGoodsPage}
              perPage={!flag ? 4 : flag === 1 ? 6 : flag === 2 && 8}
              maxPage={GoodsPage.last_page}
              setList={setGoodsList}
              type={''}
              animation
            />
          </div>
        </div>
        <div className="c1 container" >
          <div className={`row  py-4`} style={{ marginTop: 24, padding: '2%' }}>
            <div className={style.youMaybeLike} style={{ padding: '5%', position: 'relative' }}>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div className={styles.distance} style={{ borderBottomWidth: 1, borderBottomColor: 'white' }}></div>
                <div className={styles.title} style={{ whiteSpace: "nowrap", letterSpacing: 1.2 }}>Floralism | 最受歡迎产品</div>
                <div className={styles.distance} style={{ borderBottomWidth: 1, borderBottomColor: 'white' }}></div>
              </div>
              <div style={{ position: "relative" }}>

                <div style={{ padding: 8, marginTop: 24 }}>

                  <Carousel showThumbs={false} infiniteLoop showIndicators={false} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50} showStatus={false}>
                    {
                      carousel_slice().map((item, index) => {
                        //////////////////////////////console.log(carousel_slice().length);
                        return (<div key={item.id + index.toString()} style={{ display: 'flex', flexWrap: 'wrap', width: '95%', margin: '0 2.5%' }}>
                          {
                            item.map((it, ii) => {
                              return (<GoodsItem imgTopStyle={{}} key={item.id + index.toString() + ii.toString()} item={it} type={'carsouel'} top_style={{}} imgStyle={{}} animation />)
                            })
                          }
                        </div>)
                      })
                    }
                  </Carousel>
                  {/* <div class="swiper">

                  <div class="swiper-wrapper">

                    <div class="swiper-slide">Slide 1</div>
                    <div class="swiper-slide">Slide 2</div>
                    <div class="swiper-slide">Slide 3</div>
                  </div>


                  <div class="swiper-button-prev"></div>
                  <div class="swiper-button-next"></div>


                </div> */}
                </div>
              </div>

            </div>
          </div>
        </div>
        <div className="c1 container" >
          <div className={`row  py-4`} style={{ marginTop: 24, padding: '2%' }}>
            <Contactus />
          </div>
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
      {!login && <DynamicButton />}
      <Script defer src="/swiper/js/idangerous.swiper.min.js" onReady={() => {
        MySwiper = new Swiper('.swiper-container', {
          loop: true,
          onInit: function (swiper) {
            swiper.swipeNext()
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
        })
      }}></Script>
    </div>

  )
}


export async function getServerSideProps({ local }) {
  //  ////////////////////////////////console.log(constant.api_url);
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
  // //////////////console.log(await response.text())
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
  // //////////////////////////////console.log("====================");
  // //////////////////////////////console.log(allcate);
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
  //////////////////////////console.log(allcate);

  const goods_response = await fetch(
    `${constant.api_url}/api/flowers/index?keyword=&flower_category_name=${'花籃'}`, {
    mode: 'cors',
    headers: {
      // "Authorization": `Bearer ${data.cookie}`,
      "Content-Type": "application/json",
      "Access-Control-Request-Method": "POST",
      "Access-Control-Request-Headers": "Content-Type",
    }
  }
  );
  ////////////////////////////////console.log(response);

  let swiper_data = await swiper_response.text();
  let goods_data = await goods_response.text();
  //////////////////////////////console.log("====================");
  // //////////////console.log(JSON.parse(goods_data).data);
  // //////////////console.log(JSON.parse(swiper_data).data)
  //////////////////////////////console.log(JSON.parse(goods_data).data);
  // //////////////////////////////console.log(data);

  // //////console.log(JSON.parse(goods_data).data)                                           
  return {
    props: {
      allcate: allcate.data,
      cateList: JSON.parse(data).data,
      GoodsPage: JSON.parse(goods_data).data,
      carousel: JSON.parse(swiper_data).data.data,
    }

  };
}