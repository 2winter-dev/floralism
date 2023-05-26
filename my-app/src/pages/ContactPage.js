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


export default function ContactPage({ cateList }) {
    //////console.log(cateList)
    const [flag, setFlag] = useState(false);
    const [category, setCategory] = useState([]);
    const [categoryPage, setCategoryPage] = useState(1);
    const resizeUpdate = (e) => {
        if (e.target.innerWidth <= 1100) {
            //////console.log("====", e.target.innerWidth);
            setFlag(true);
        } else {
            //////console.log("-----", e.target.innerWidth);
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
        //////console.log("flag改變", flag);
        setCategory(spliceArr(cateList, flag ? 4 : 8));
        setCategoryPage(1);
    }, [flag])
    return (<div style={{ position: 'relative' }}>
        <Header list={cateList} />
        {/* <div style={{ width: '100%', position: 'relative' }}>
            {
              <img src={flag?"/contact-banner-m.png":"/contactus-banner.png"} style={{ width: '100%', height: '100%', display: 'block' }}></img>
            }
            <div className={style.banner_desc} style={{}}>
                <div style={{maxHeight:200,overflow:'hidden',textOverflow:'ellipsis'}}>
                    <div style={{ display: 'flex', alignItems: 'center',justifyContent:'center' }}>
                        {
                           <div className={styles.distance} style={{ borderBottomWidth: 1, borderBottomColor: 'white' }}></div>
                        }
                        <div className={styles.title} style={{ color: "white", marginRight: 16, marginLeft: 16 }}>FLORALISM | 關於我們</div>
                        {
                            <div className={styles.distance} style={{ borderBottomWidth: 1, borderBottomColor: 'white' }}></div>
                        }
                    </div>
                    <div style={{}} className={style.desc_layout}>
                        <div>在FLORALISM，我們重視花材的品質和選擇，堅持采用最新鮮，最優質的花材，注重花束的藝術性和創意性</div>
                        <div style={{ marginTop: 12 }}>運用不同的創意和技巧，讓花材的形狀和質地在空間中產生獨特的視覺效果，讓每一朵花都散發出自己獨有的魅力</div>
                    </div>
                </div>
            </div>
        </div> */}
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
                    <div className={style.contact_distance} style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/圖標-電話.png" />
                        <div style={{ marginLeft: 16 }}>65818053</div>
                    </div>
                    <div className={style.contact_distance} style={{ display: 'flex', alignItems: 'center' }}>
                        <img src="/圖標-郵件.png" />
                        <div style={{ marginLeft: 16 }}>info@floralismhk.com</div>
                    </div>
                </div>
                <div className={style.main_contain} style={{ display: "flex", alignItems: 'flex-end' }}>
                    <img style={{ width: '100%' }} src="/contactus-background.png" />

                </div>
            </div>
            <Contactus topStyle={{ marginTop: 48 }} />

        </div>
        <div className={styles.goods_list} style={{ paddingLeft: '15%', paddingRight: '15%' }}>
            <GoodsScoll
                title={'【FLORALISM】 全部分类'}
                list={category}
                page={categoryPage}
                type={'category'}
                setPage={setCategoryPage}
                // click={() =>////console.log("1")}
            />
        </div>
        <Footer />
    </div>)
}


export async function getStaticProps(context) {
    const { params } = context;

    const response = await fetch(
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
    const data = await response.text()

    return {
        props: {
            cateList: JSON.parse(data).data,
        },
    };
}