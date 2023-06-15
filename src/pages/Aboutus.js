import DynamicComponent from "./component/Dynamic";
import { useState, useEffect } from "react";
import LoginPannel from "./component/LoginPannel";
import RegisterPannerl from "./component/ResgisterPannel";
import ForgetPassword from "./component/ForgetPassword";
import { constant } from "../constant";
import Footer from "./component/Footer";
import styles from '@/styles/Aboutus.module.css'
import style from '@/styles/Home.module.css'
import Contactus from "./component/Contactus";
import { spliceArr } from "@/method";
import Head from 'next/head';
import GoodsItem from "./component/GoodsItem";
// import { ToastContainer, toast } from 'react-toastify';
import toast, { Toaster } from "react-hot-toast";
import CateScroll from "./component/cateScroll";
import DynamicButton from "./component/DynamicButton";
export default function AboutUs({ cateList, allcate }) {
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [visible, setVisible] = useState(false);

    const [flag, setFlag] = useState(1);
    const [category, setCategory] = useState([]);
    // //////////console.log(allcate);
    const [categoryPage, setCategoryPage] = useState(1);

    const resizeUpdate = (e) => {
        if (e.target.innerWidth <= 675) {
            ////////////////console.log("====", e.target.innerWidth);
            setFlag(0);
        } else if (e.target.innerWidth <= 1100) {
            setFlag(1)
        } else {
            ////////////////console.log("-----", e.target.innerWidth);
            setFlag(2);
        }
    }
    useEffect(() => {
        window.addEventListener("resize", resizeUpdate);
        if (window.innerWidth <= 675) {
            ////////////////console.log("====", e.target.innerWidth);
            setFlag(0);
        } else if (window.innerWidth <= 1100) {
            setFlag(1)
        } else {
            ////////////////console.log("-----", e.target.innerWidth);
            setFlag(2);
        }
        return () => {
            window.removeEventListener("resize", resizeUpdate);
        }
    }, [])
    useEffect(() => {
        //////////console.log("flag改變", flag);
        setCategory(spliceArr(allcate, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8, 'cat'));
        //////////console.log(spliceArr(allcate, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8, 'cat'))
        setCategoryPage(1);
    }, [flag])

    useEffect(() => {
        window.addEventListener("resize", resizeUpdate);
        window.innerWidth < 1100 ? (!flag && setFlag(true)) : (flag && setFlag(false))
        return () => {
            window.removeEventListener("resize", resizeUpdate);
        }
    }, [])
    return (<div>
        <Head>
            <title>【訂花】 | 網上訂花 | 「Floralism」網上花店香港</title>
            <meta name='title' content={'【訂花】 | 網上訂花 | 「Floralism」網上花店香港'} />
            <meta name='description' content={'「Floralism」網上花店香港，網上訂花已經是最常見的訂花途徑。「Floralism」提供最方便的花束訂購系統，讓客人輕鬆地訂購花束及為他人送上美麗的花束，同時也帶來了美好的體驗。'} />
            <meta name='keywords' content={'訂花,網上訂花,網上花店香港'} />
        </Head>
        <DynamicComponent cateList={cateList} setLogin={setLogin} />
        <div style={{ width: '100%', position: 'relative' }}>
            <img alt="" className={styles.banner_background} src={flag === 0 ? '/banner-s-背景.png' : '/banner-背景.png'} style={{ width: '100%', display: 'block' }} />

            {
                <div className={styles.description} >
                    <div className={styles.girls_contain} style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', flex: 1 }}>
                        <img alt="" className={styles.girls} src={'女生.png'} style={{}} />
                    </div>
                    <div className={styles.desc_contain} style={{ flex: 1, marginRight: '10%', marginTop: 30, position: 'relative', justifyContent: 'flex-end' }}>
                        {/* <span className="iconfont" style={{position:'absolute'}}>&#xe67b;</span>  */}
                        <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                            <div style={{ fontSize: 42, fontWeight: 700, color: "#d43a43" }}>About us</div>
                            <div className={styles.desc1} style={{ marginTop: 10, lineHeight: '2rem' }}>在Florlism，我們重視花材的品質和選擇，堅持採用最新鮮、最優質的花材，並運用專業的技巧和創意，將它們轉化為獨特的花束和花藝作品。Florlism希望能夠運用花材的色彩、質地和形狀等特性，將它們結合在一起，創造出層次豐富、風格獨特的花藝作品。此外，我們在創作過程中也注重藝術性和創意性，運用不同的創意和技巧，讓花材的形狀和質地在空間中產生獨特的視覺效果，讓每一朵花都散發出自己獨有的魅力。</div>
                            <div className={styles.desc2} style={{ marginTop: 10, lineHeight: '2rem' }}>在Florlism，我們也深信每一朵花都有其獨特的含義和價值。因此，我們的花藝師會仔細聆聽客戶的需求和意願，並根據不同場合和用途，設計出最適合的花藝作品，以表達客戶的情感和祝福。Florlism的花藝師擁有專業的技能和豐富的經驗，能夠將花材的美學和技術相融合，為客戶打造出高品質、獨特風格的花藝作品，讓每一朵花都能夠傳達出愛和祝福的訊息。</div>
                        </div>
                    </div>
                </div>
            }


        </div>
        <div className={styles.desc_small_contain} style={{ flex: 1, padding: '5%', position: 'relative', justifyContent: 'flex-end' }}>
            {/* <span className="iconfont" style={{position:'absolute'}}>&#xe67b;</span>  */}
            <div>
                <div style={{ fontSize: 42, fontWeight: 700, color: "#d43a43" }}>About us</div>
                <div className={styles.desc1} style={{ marginTop: 10, lineHeight: '2rem' }}>在Florlism，我們重視花材的品質和選擇，堅持採用最新鮮、最優質的花材，並運用專業的技巧和創意，將它們轉化為獨特的花束和花藝作品。Florlism希望能夠運用花材的色彩、質地和形狀等特性，將它們結合在一起，創造出層次豐富、風格獨特的花藝作品。此外，我們在創作過程中也注重藝術性和創意性，運用不同的創意和技巧，讓花材的形狀和質地在空間中產生獨特的視覺效果，讓每一朵花都散發出自己獨有的魅力。</div>
                <div className={styles.desc2} style={{ marginTop: 10, fontSize: 13, lineHeight: '2rem' }}>在Florlism，我們也深信每一朵花都有其獨特的含義和價值。因此，我們的花藝師會仔細聆聽客戶的需求和意願，並根據不同場合和用途，設計出最適合的花藝作品，以表達客戶的情感和祝福。Florlism的花藝師擁有專業的技能和豐富的經驗，能夠將花材的美學和技術相融合，為客戶打造出高品質、獨特風格的花藝作品，讓每一朵花都能夠傳達出愛和祝福的訊息。</div>
            </div>
        </div>
        <div className={styles.goods_list} style={{}}>
    
            <div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                {flag !== 0 && <div className={style.distance}></div>}
                <div className={style.title} style={{ whiteSpace: 'nowrap', flex: 1 }}>{'【FLORALISM】 全部分類'}</div>
                {flag !== 0 && <div className={style.distance}></div>}
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
        <div className={styles.ContactusLayout}>
            <Contactus />

        </div>
        {/* {!login&&<ToastContainer />} */}
        {!login&&<DynamicButton />}
        {!login && <Toaster
           position="top-center"
        />}
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

    </div>)
}


export async function getStaticProps({ local }) {
    //  ////////////////console.log(constant.api_url);
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
    let data = await response.text();

    return {
        props: {
            cateList: JSON.parse(data).data,
            allcate: allcate.data
        },

    };
}