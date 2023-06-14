import React from 'react';
import { Collapse, Grid, Text } from '@nextui-org/react';
import styles from '@/styles/ShoppingGuide.module.css'
import { useState } from 'react';
import Footer from './component/Footer';
import Header from './component/Header';
import DynamicComponent from './component/Dynamic';
import LoginPannel from './component/LoginPannel';
import { constant } from '../constant';
import Head from 'next/head';
import { useRouter } from 'next/router';
// import { ToastContainer, toast } from 'react-toastify';
import toast, { Toaster } from "react-hot-toast";
import DynamicButton from './component/DynamicButton';
export default function CustomerOrder(props) {
    // const [index, setIndex] = useState(-1);
    const router=useRouter();

    const [login, setLogin] = useState(false);
    return (<div>
        <Head>
            <title>【訂花束】 | 訂製花束 | 「Floralism」花束訂製</title>
            <meta name='title' content={'【訂花束】 | 訂製花束 | 「Floralism」花束訂製'} />
            <meta name="description" content={'「Floralism」花店的時尚花藝師提供花束訂製服務是為客戶提供一個高度定制化的訂花束選擇，這讓客戶可以根據自己的需求和喜好來訂製花束及設計一個獨一無二的花束。'} />
            <meta name="keywords" content={'【訂花束】,訂製花束,「Floralism」花束訂製'}/>
        </Head>
        <DynamicComponent cateList={props.cateList} setLogin={setLogin} />
        <div style={{ backgroundColor: 'rgb(240,240,240)' }}>
            <div style={{ padding: '1.5rem 10%' }}>
                <a onClick={() => router.push('/')}>首頁</a><span style={{ padding: '0 8px' }}>/</span><span>訂製服務</span>
            </div>
            <div className={styles.totalLayout} style={{ }}>
                <div style={{ backgroundColor: 'white', padding: 16, borderRadius: 8 }}>
                    <div style={{ width: '100%', textAlign: 'center', fontWeight: 700, fontSize: '1.5rem' }}>花禮訂製服務</div>
                    <div style={{ width: '100%', textAlign: 'center', marginTop: 12, fontSize: '0.8rem' }}>由花材的顏色及數量，到激光刻字，我們都可以根據您的個人喜好，設計您心目中的永生花禮。</div>
                    <div style={{ fontSize: 14, marginTop: 28 }}>
                        <div style={{ fontSize: 18 }}>訂製化設計</div><br />
                        在原有產品的設計基礎上訂製<br />
                        <br />
                        以下為一般訂製項目：<br />

                        ・花材的顏色、尺寸及數量<br />

                        ・花材的擺放位置<br />

                        ・替換其他花材<br />

                        ・配件（如容器、花束包裝紙、絲帶、花盒等）的顏色或尺寸<br />

                        並非所有產品都能按以上項目進行訂製，歡迎向我們查詢。<br />
                        <br />
                        <br />
                        <div style={{ fontSize: 16 }}>設計全新花禮</div><br />

                        我們尊重不同花藝師的設計。在不涉及抄襲前提下，我們接受客戶訂製全新設計的產品。<br />

                        <br />
                        <br />
                        <div style={{ fontSize: 16, fontWeight: 700 }}>收費</div><br />

                        訂製訂單需要獨立報價。<br />

                        <br />
                        <br />
                        <div style={{ fontSize: 16 }}>注意事項</div><br />

                        如果訂製訂單為全新產品，一般需要更多時間製作。價格也會因不同的花材或容器等材料成本而進行調整，歡迎向我們洽詢。為確保我們能準確地理解並按您的要求訂製花禮，我們建議您給我們展示有類似風格的產品照片，以描述您的需求。<br />
                        <br />
                        <br />
                        <br />
                        <div style={{ fontSize: 18 }}>激光刻字服務</div><br />
                        <div style={{ fontWeight: 700, fontSize: 16 }}>floralism 提供免費刻字服務。</div><br />


                        <div style={{ fontSize: 16 }}>金屬牌刻字</div><br />

                        我們為某些產品提供金屬牌刻字服務，客戶可按個人喜好選擇語言及字體。金屬牌的面積尺寸為 6cm x 2cm，其尺寸會導致一定程度的字數限制。中文字數上限為 24 字（英文字母 50 字），共兩行。在正式安排刻字前，我們會先製作電腦稿給您參考。<br />
                        <br />
                        <br />

                        <div style={{ fontSize: 16 }}>木底座刻字</div><br />

                        底座由木質材料製成的產品，如永生花玻璃罩，可以刻字。中文字數上限為 12 字（英文字母 25 字），共一行。<br />
                        <br />
                        <br />
                        <div style={{ fontSize: 16 }}>備註</div><br />

                        1. 一旦訂製訂單處理流程開始（包括材料訂購），訂製產品便不能更換、退貨或退款。<br />

                        2. 我們不建議您對已完成的訂製花禮作出任何修改，因為修改會導致花材損耗，影響外觀。若必須進行修改，客戶需自行承擔風險。<br />

                        3. 我們會盡可能因應客戶描述的要求去製作，但由於花禮是手工藝品，且每個人的審美都有所不同，客戶需承擔有關風險。
                    </div>
                </div>

            </div>
        </div>
        {/* {!login&&<ToastContainer />} */}
        {!login && <Toaster
           position="top-center"
        />}
        {!login&&<DynamicButton />}
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
    </div>
    );
}


export async function getStaticProps(context) {
    const { params } = context;
    // ////////////console.log(params);

    const tt_response = await fetch(
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
    const tt_data = await tt_response.text()

    return {
        props: {
            allcate: allcate.data,
            cateList: JSON.parse(tt_data).data,
        },

    };
}