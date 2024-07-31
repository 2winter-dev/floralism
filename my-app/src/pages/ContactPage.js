import Header from "./component/Header";
import Footer from "./component/Footer";
import styles from '@/styles/Home.module.css'
import style from '@/styles/contactPage.module.css'
import Contactus from "./component/Contactus";
import GoodsScoll from "./component/GoodsScroll";
import { useEffect, useState } from "react";
import { spliceArr } from "@/method";
import BodyBanner from "./component/BodyBanner";
import { constant } from "@/constant/index";
import CateScroll from './component/cateScroll';
import LoginPannel from "./component/LoginPannel";
import DynamicComponent from './component/Dynamic';
import { ToastContainer, toast } from 'react-toastify';
import { useMutation } from "@tanstack/react-query";
export default function ContactPage({ cateList, allcate }) {
    //////////////console.log(cateList)
    // const [flag, setFlag] = useState(1);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [visible, setVisible] = useState(false);


    const [flag, setFlag] = useState(1);
    const [category, setCategory] = useState([]);
    // ////////console.log(allcate);
    const [categoryPage, setCategoryPage] = useState(1);

    const resizeUpdate = (e) => {
        if (e.target.innerWidth <= 675) {
            //////////////console.log("====", e.target.innerWidth);
            setFlag(0);
        } else if (e.target.innerWidth <= 1100) {
            setFlag(1)
        } else {
            //////////////console.log("-----", e.target.innerWidth);
            setFlag(2);
        }
    }
    useEffect(() => {
        window.addEventListener("resize", resizeUpdate);
        if (window.innerWidth <= 675) {
            //////////////console.log("====", e.target.innerWidth);
            setFlag(0);
        } else if (window.innerWidth <= 1100) {
            setFlag(1)
        } else {
            //////////////console.log("-----", e.target.innerWidth);
            setFlag(2);
        }
        return () => {
            window.removeEventListener("resize", resizeUpdate);
        }
    }, [])



    useEffect(() => {
        ////////console.log("flag改變", flag);
        setCategory(spliceArr(allcate, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8, 'cat'));
        ////////console.log(spliceArr(allcate, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8, 'cat'))
        setCategoryPage(1);
    }, [flag])
    useEffect(() => {
        window.addEventListener("resize", resizeUpdate);
        window.innerWidth < 1100 ? (!flag && setFlag(true)) : (flag && setFlag(false))
        return () => {
            window.removeEventListener("resize", resizeUpdate);
        }
    }, [])

    return (<div style={{ position: 'relative' }}>
        <DynamicComponent cateList={cateList} setLogin={setLogin} />
        <BodyBanner
            flag={flag}
            imgTiny={"/contact-banner-m.png"}
            img={"/contactus-banner.png"}
            title={'FLORALISM | 關於我們'}
            desc1={'在FLORALISM，我們重視花材的品質和選擇，堅持采用最新鮮，最優質的花材，注重花束的藝術性和創意性'}
            desc2={'運用不同的創意和技巧，讓花材的形狀和質地在空間中產生獨特的視覺效果，讓每一朵花都散發出自己獨有的魅力'}
        />
        <div className={style.main_layout}>
            <div className={style.main_background}>
                <div className={style.main_contain} style={{ marginBottom: 24 }}>
                    <div className={style.contact_title}>歡迎查詢</div>
                    <div className={style.contact_distance} style={{ lineHeight: '200%', letterSpacing: 2 }}>如果你有任何花藝需求或疑問，歡迎聯係我們的專業花藝師團隊，我們會仔細聆聽您的需求，並根據不同場合和用途，提供最適合的花藝設計方案，您可以通過以下方式聯係我們</div>
                    <div className={`${style.contact_title}`} style={{ marginTop: '15%' }}>客戶熱綫</div>
                    <div className={style.contact_distance} style={{ display: 'flex', alignItems: 'center' }} >
                        <a href="tel:+85265818053" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="/圖標-電話.png" />
                            <div style={{ marginLeft: 16 }}>65818053</div>
                        </a>

                    </div>
                    <div className={style.contact_distance} style={{ display: 'flex', alignItems: 'center' }}>
                        <a href="mailto:info@floralismhk.com" style={{ display: 'flex', alignItems: 'center' }}>
                            <img src="/圖標-郵件.png" />
                            <div style={{ marginLeft: 16 }}>info@floralismhk.com</div>
                        </a>
                    </div>
                </div>
                <div className={style.main_contain} style={{ display: "flex", alignItems: 'flex-end' }}>
                    <img style={{ width: '100%' }} src="/contactus-background.png" />

                </div>
            </div>


        </div>

        <div className={styles.goods_list} style={{}}>
            <CateScroll
                title={'【FLORALISM】 全部分類'}
                list={category}
                page={categoryPage}
                type={'category'}
                perPage={!flag ? 4 : flag === 1 ? 6 : flag === 2 && 8}
                setPage={setCategoryPage}
                animation
            />
        </div>
        <div className={style.ContactusLayout}>
            <Contactus />
        </div>
        {!login && <ToastContainer />}
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


export async function getStaticProps(context) {
    const { params } = context;

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
    const data = await response.text()
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
    ////////console.log(allcate);
    return {
        props: {
            cateList: JSON.parse(data).data,
            allcate: allcate.data,
        },

    };
}