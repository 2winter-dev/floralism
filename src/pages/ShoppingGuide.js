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
export default function ShoppingGuide(props) {
    // const [index, setIndex] = useState(-1);
    const router=useRouter();
    const [login, setLogin] = useState(false);
    return (<div>
        <Head>
            {/* <meta charSet='utf-8' /> */}
            <title>【花店購物指南】 | 購物指南香港 | 「Floralism」購物指南</title>
            <meta name="description" content={''} />
            <meta name="keywords" content={'花店購物指南,購物指南香港,「Floralism」購物指南'}/>
        </Head>
        <DynamicComponent cateList={props.cateList} setLogin={setLogin} />
        <div style={{ backgroundColor: 'rgb(240,240,240)' }}>
            <div style={{ padding: '1.5rem 10%' }}>
                <a onClick={() => router.push('/')}>首頁</a><span style={{ padding: '0 8px' }}>/</span><span>購物指南</span>
            </div>
            <div className={styles.totalLayout} style={{ backgroundColor: 'rgb(240,240,240)' }}>
                <div style={{ backgroundColor: 'white', padding: 16, borderRadius: 8 }}>
                    <Grid.Container gap={2}>
                        <Grid>
                            <Collapse.Group shadow>
                                <Collapse title={<div style={{ fontSize: 18, fontWeight: 700 }}>網上購買</div>}>
                                    <Text>
                                        網上購買<br />
                                        <br />
                                        網上選購 {'>'} 加入購物車 {'>'} 填寫訂購資料 {'>'}進行結帳 {'>'} 訂購完成<br />
                                        <br />
                                        WhatsApp / Facebook 訂購<br />
                                        <br />
                                        將您欲訂購的商品、運送資料及聯絡方式，WhatsApp 至 +852 6581 8053 或傳送至「 floralism 」Facebook 專頁。<br />
                                        <br />
                                        網站所展示的產品款式有限，歡迎和我們討論您的需求，客製化花禮<br />
                                    </Text>
                                </Collapse>
                                <Collapse title={<div style={{ fontSize: 18, fontWeight: 700 }}>付款方式</div>}>
                                    <Text>
                                        網上購買<br />
                                        <br />
                                        支持paypal支付<br />
                                        <br />
                                        門市購買<br />
                                        <br />
                                        接受現金、信用卡（AE、VISA、MasterCard）、PayMe、轉數快、雲閃付、Alipay、AlipayHK 及 WeChat Pay。及上述付款方式。
                                    </Text>
                                </Collapse>
                                <Collapse title={<div style={{ fontSize: 18, fontWeight: 700 }}>送貨方式</div>}>
                                    <Text>
                                        我們提供門市自取及本地送貨服務。更多有關送貨詳情，請參閱「送貨服務」。<br />
                                        <br />
                                        門市自取<br />
                                        <br />
                                        ・觀塘工作室<br />
                                        <br />
                                        營業時間為週一至週六 09:00 - 18:00，可於下訂單時選擇取貨日期和時間。<br />
                                        <br />
                                        本地送貨<br />
                                        <br />
                                        ・標準時段送貨<br />
                                        <br />
                                        標準送貨服務，時間為週一至週日 09:00 - 22:00，每天提供三個送貨時段。<br />
                                        <br />
                                        ・指定時間送貨<br />
                                        <br />
                                        於指定時間或少於 60 分鐘的時間段內安排送貨，需收取附加費。請於訂單備註指定送貨時間。<br />
                                        <br />
                                        ・即時送貨<br />
                                        <br />
                                        為緊急訂單而設的特別送貨服務，需收取附加費。請先聯繫客服，以確保您需要的產品有現貨。<br />
                                        <br />
                                        海外運送<br />
                                        <br />
                                        暫時無法運送到香港以外的國家或地區。
                                    </Text>
                                </Collapse>
                                <Collapse title={<div style={{ fontSize: 18, fontWeight: 700 }}>訂單處理流程及須知</div>}>
                                    <Text>
                                        訂單處理時間<br />
                                        <br />
                                        收到訂單後，我們會根據訂單資料，按時送出貨品。<br />
                                        <br />
                                        一般情況下，若產品沒有現貨，客戶將無法於訂單結帳流程中選取兩至三天內送貨（或門市自取）。系統會按不同產品的製作時間，給予客戶可以選擇的最早的送貨（或取貨）日期和時間。<br />
                                        <br />
                                        若系統庫存並未及時更新，或出現任何故障，導致我們無法根據訂單要求按時送出貨品，我們會在收到訂單後盡快通知客戶有關情況，再另作安排。如有需要，我們會退還有關款項，詳情可參閱「退換貨政策」.<br />
                                        <br />
                                        送貨時間<br />
                                        <br />
                                        ・香港地區<br />
                                        <br />
                                        我們提供「標準時段送貨」及「指定時間送貨」兩種不同的送貨方式，送貨時間將取決於客戶指定的送貨方式。客戶也可親臨門市自取。更多有關送貨詳情，請參閱「送貨服務」。<br />
                                        <br />
                                        ・海外地區<br />
                                        <br />
                                        暫不提供海外運送服務。<br />
                                        <br />
                                        備註<br />
                                        <br />
                                        我們會盡力確保製作的產品跟商品圖片相似，但由於花是自然產物，每一朵花的形態都會有所不同，花藝師會因應當下花材的形態而作出相應的設計，在配色及擺位上盡量還原商品圖片上的效果。<br />
                                        <br />
                                        由於部分花材的產量並不穩定，有時候會導致配花缺貨，我們會找類近的配花替代，盡量確保其配搭不影響整體效果。
                                    </Text>
                                </Collapse>
                                <Collapse title={<div style={{ fontSize: 18, fontWeight: 700 }}>禮物包裝及心意卡</div>}>
                                    <Text>
                                        禮物包裝<br />
                                        <br />
                                        禮物盒除了能為收花者製造驚喜，也為花禮提供適當的防撞保護，因此每款 floralism 產品都會附送一個精美禮物盒或花束手提袋。<br />

                                        <br />

                                        不過，如果您的購買是自用或出於任何其他原因而不需要我們附送的禮物盒或花束手提袋，為免造成不必要的浪費，請在下訂單時告知我們，我們會使用其他也能為花禮提供保護的包裝方式取而代之。<br />

                                        <br />

                                        心意卡<br />
                                        <br />
                                        我們每個產品都附送一張精美的心意卡，如有需要，可於下訂單時寫下心意卡內容，我們會為您代寫。<br />


                                        <br />
                                        心意卡字數限制：中文字 50 個或英文字母 120 個。
                                    </Text>
                                </Collapse>
                                <Collapse title={<div style={{ fontSize: 18, fontWeight: 700 }}>花禮客製服務</div>}>
                                    <Text>
                                        我們提供激光刻字服務，也可以根據您的個人喜好，設計您心目中的永生花禮。客製訂單一般需要更多時間製作，價格也會因應不同花材或容器等材料成本而進行調整，歡迎向我們洽詢。如欲了解更多有關詳情，請參閱「客製花禮」。
                                    </Text>
                                </Collapse>
                                <Collapse title={<div style={{ fontSize: 18, fontWeight: 700 }}>更改 / 取消訂單"</div>}>
                                    <Text>
                                        更改送貨資料或心意卡內容 <br />
                                        <br />
                                        須於指定送貨時間兩個工作天前聯絡我們完成更改手續。 <br />


                                        <br />
                                        更改、調整已訂購商品 <br />
                                        <br />
                                        請先聯絡我們討論，如能進行修改，視乎更換花材情況酌收費用。 <br />

                                        <br />

                                        取消訂單 <br />
                                        <br />
                                        為了讓客戶能於最短時間內收到貨品，我們一般會在客戶付款後立刻處理訂單，包括材料訂購、製作、包裝及發貨，因此客戶無法在付款後取消訂單。詳情請參閱退換貨政策。
                                    </Text>
                                </Collapse>
                                <Collapse title={<div style={{ fontSize: 18, fontWeight: 700 }}>產品保養</div>}>
                                    <Text>
                                        保鮮花需要格外用心養護，若保養不當，容易使之潮濕發霉、花瓣褪色及壽命縮短。 <br />
                                        <br />


                                        保鮮花基本保養注意事項： <br />
                                        <br />
                                        ・避免讓花朵沾水或經常以手觸碰 <br />
                                        <br />
                                        ・避免讓花朵受到陽光或強烈的燈光照射 <br />
                                        <br />
                                        ・避免讓花朵直吹冷氣或放進冰箱 <br />
                                        <br />
                                        ・可用吹風機以低風速冷風將灰塵吹走 <br />
                                        <br />
                                        ・存放環境：濕度 40-65％；温度 8-28℃ <br />

                                        <br />

                                        按此了解更多有關保鮮花的保養詳情。
                                    </Text>
                                </Collapse>
                                <Collapse title={<div style={{ fontSize: 18, fontWeight: 700 }}>商品、服務申訴"</div>}>
                                    <Text>
                                        若商品或服務品質有瑕疵，請於商品送達後 24 小時內和我們聯絡，並保持商品原狀。我們將盡快瞭解，並提供您滿意的補救措施。
                                    </Text>
                                </Collapse>
                            </Collapse.Group>
                        </Grid>
                    </Grid.Container>
                </div>

            </div>
        </div>
        {/* {!login&&<ToastContainer />} */}
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
    </div>
    );
}


export async function getStaticProps(context) {
    const { params } = context;
    // ////////////////console.log(params);

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