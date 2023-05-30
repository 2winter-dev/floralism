import DynamicComponent from "./component/Dynamic";
import { useState } from "react";
import LoginPannel from "./component/LoginPannel";
import RegisterPannerl from "./component/ResgisterPannel";
import ForgetPassword from "./component/ForgetPassword";
import { constant } from "../constant";
import { Head } from "next/head";
import Footer from "./component/Footer";
import styles from '@/styles/Aboutus.module.css'
import Contactus from "./component/Contactus";
export default function AboutUs({ cateList }) {
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [visible, setVisible] = useState(false);
    return (<div>
        {/* <Head>
            <meta charSet='utf-8' />
            <title>【訂花】 | 網上訂花 | 「Floralism」網上花店香港</title>
            <meta name='title' content={'【訂花】 | 網上訂花 | 「Floralism」網上花店香港'} />
            <meta name='description' content={'「Floralism」網上花店香港，網上訂花已經是最常見的訂花途徑。「Floralism」提供最方便的花束訂購系統，讓客人輕鬆地訂購花束及為他人送上美麗的花束，同時也帶來了美好的體驗。'} />
        </Head> */}
        <DynamicComponent cateList={cateList} setLogin={setLogin} />
        <div className={styles.Total_Layout}>
            <div className={styles.left_item}>
                <img src={'/about-us.jpg'} style={{ width: '100%' }} />
            </div>
            <div className={styles.right_item}>
                <div style={{ color: '#d43a43', fontSize: 24, fontWeight: 600, marginBottom: 24 }}>
                    FlORALISM -<br />
                    創造獨特的花藝<br />
                    傳遞愛和祝福
                </div>
                <div style={{ marginBottom: 24 }}>
                    在Florlism，我們重視花材的品質和選擇，堅持採用最新鮮、最優質的花材，並運用專業的技巧和創意，將它們轉化為獨特的花束和花藝作品。Florlism希望能夠運用花材的色彩、質地和形狀等特性，將它們結合在一起，創造出層次豐富、風格獨特的花藝作品。此外，我們在創作過程中也注重藝術性和創意性，運用不同的創意和技巧，讓花材的形狀和質地在空間中產生獨特的視覺效果，讓每一朵花都散發出自己獨有的魅力。
                </div>
                <div style={{ marginBottom: 24 }}>
                    在Florlism，我們也深信每一朵花都有其獨特的含義和價值。因此，我們的花藝師會仔細聆聽客戶的需求和意願，並根據不同場合和用途，設計出最適合的花藝作品，以表達客戶的情感和祝福。Florlism的花藝師擁有專業的技能和豐富的經驗，能夠將花材的美學和技術相融合，為客戶打造出高品質、獨特風格的花藝作品，讓每一朵花都能夠傳達出愛和祝福的訊息。
                </div>
                <div style={{ paddingTop: 24, paddingBottom: 24 }}>

                </div>
                <div style={{ fontSize: 50 }}>
                    <span className="iconfont">&#xe67b;</span>
                </div>
                <div style={{ fontSize: 20, fontWeight: 600 }}>
                    創造獨特的花藝，傳遞愛和祝福
                </div>
                <div style={{ color: '#d43a43', fontSize: 20, fontWeight: 600, lineHeight: 1.8 }}>
                    FLORALISM
                </div>
            </div>
        </div>
        <div className={styles.ContactusLayout}>
            <Contactus />

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


export async function getStaticProps({ local }) {
    //  //////console.log(constant.api_url);
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
    let data = await response.text();

    return {
        props: {
            cateList: JSON.parse(data).data,
        },
    };
}