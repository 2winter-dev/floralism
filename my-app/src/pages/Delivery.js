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
import { ToastContainer, toast } from 'react-toastify';

export default function Delivery(props) {
    const [login, setLogin] = useState(false);
    const router=useRouter();
    return (<div>
        <Head>
            <title>【花店送花服務】 | 送花服務香港 | Floralism</title>
            <meta name='title' content={'【花店送花服務】 | 送花服務香港 | Floralism'} />
            <meta name="description" content={'「Floralism」花店送花服務為客人帶來很多便利和選擇，讓客戶可以輕鬆地為愛人、親戚、朋友或同事送上美麗的花束，表達自己的心意和祝福。'} />
        </Head>
        <DynamicComponent cateList={props.cateList} setLogin={setLogin} />
        <div style={{backgroundColor: 'rgb(240,240,240)'}}>
            <div style={{ padding: '1.5rem 10%' }}> 
                <a onClick={()=>router.push('/')}>首頁</a><span style={{padding:'0 8px'}}>/</span><span>送貨服務</span>
            </div>
            <div className={styles.totalLayout} style={{ backgroundColor: 'rgb(240,240,240)' }}>
                <div style={{ backgroundColor: 'white', padding: 16, borderRadius: 8 }}>
                    <div style={{ width: '100%', textAlign: 'center', fontWeight: 700, fontSize: '1.5rem' }}>送貨服務</div>
                    <div style={{ width: '100%', textAlign: 'center', marginTop: 12, fontSize: '0.8rem' }}>提供門市自取及本地送貨服務。</div>
                    <div style={{ fontSize: 16, marginTop: 28 }}>
                        <div style={{ fontSize: 20, fontWeight: 400 }}>門市自取</div>
                        <div style={{ marginTop: 12 }}>觀塘工作室</div>
                        <div>- 營業時間：週一至週六，09:00-20:00</div>
                        <div>- 客戶可於訂單結帳時選擇取貨日期和時間</div>
                        <br />
                        <br />
                        <div style={{ fontSize: 20, fontWeight: 400 }}>本地送貨</div>
                        <div style={{ marginTop: 12 }}>提供三種本地送貨服務，送貨時間為週一至週日 9am-10pm。特殊時段（如午夜 12 時）請事先洽詢。</div>
                        <br />
                        <div>- 標準時段送貨<sup>(8)(9)</sup><br />

                            由我們的專業車隊送貨，每天提供三個送貨時段：9am-1pm、2pm-6pm 及 6pm-10pm。

                            送貨費用為港幣 80 元。全單購買滿港幣 799 元免運費。</div>
                        <br />
                        <div>- 指定時間送貨<sup>(5)</sup><br />

                            於指定時間（如 3 pm）或少於 60 分鐘（如 2:15pm - 2:30pm）的時間段內安排送貨，需收取港幣 120 元附加費。請於「訂單備註」上填寫指定送貨時間。</div>
                        <br />
                        <div>- 即時送貨<br></br>

                            為緊急訂單而設的特別送貨服務，會於收到訂單後盡快安排專人送貨，需收取附加費港幣 120 元。只有客戶要求的送貨時段落入下訂單後的 2 小時內，才被定義為「即時送貨」；例如客戶下單時為 2pm，並要求於同日 3:30pm - 4:30pm 收到貨品。請先聯繫客服，以確保您需要的產品有現貨。</div>
                    </div>
                    <br />
                    <br />
                    <div style={{ fontSize: 20, fontWeight: 400 }}>訂單資料提供</div>
                    <div style={{ marginTop: 12 }}>為確保送貨順利，客戶下單時所填寫的送貨資料務必詳盡；若送貨地址為： 9am-10pm。特殊時段（如午夜 12 時）請事先洽詢。</div>
                    <br />
                    <div>1. 公司<br />

                        必須提供樓層、室號及公司名稱；若公司規模龐大，則亦須提供部門名稱。</div>
                    <br />
                    <div>2. 住宅<br />

                        必須提供大廈名稱、座數、樓層及室號。</div>
                    <br />
                    <div>3. 酒店<br />

                        必須於訂單備註內填寫有關送貨安排 - 收件人下樓取件／由送貨員交給酒店前台職員，再由職員交上房。若收件人下樓取件，必須提供收件人名稱及電話號碼；若由送貨員交給酒店前台職員，再由職員交上房，則必須提供預訂編號、訂房人名稱及聯絡電話。</div>
                    <br />
                    <div>4. 餐廳<br />

                        必須於訂單備註內填寫有關送貨詳情 - 收件人為餐廰客人／收件人為餐廳職員。若收件人為餐廰客人，必須提供訂枱人名稱及聯絡電話；若收件人為餐廳員工，則須提供該職員（即收件人）名稱及電話號碼。</div>
                    <br />
                    <div>5. 醫院<br />

                        必須於訂單備註內填寫有關送貨詳情 - 收件人為醫院病人／收件人為醫護人員。若收件人為醫院病人，必須提供床位號碼；若收件人為醫護人員，則必須提供其所屬之部門及職位。</div>
                    <br></br>
                    <div>若收件者與購買者並非同一人，下單時必須同時提供收件者及購買者之姓名及聯絡電話。floralism 會確保客戶所提供的任何資料不會透露予收件方。</div>

                    <br />
                    <br />
                    <div style={{ fontSize: 20, fontWeight: 400 }}>訂單資料更改</div>
                    <div style={{ marginTop: 12 }}>選擇送貨的訂單，會於指定送貨日期前一天作出整理，以編排適當的送貨路線。若需於訂單資料上作出任何更改，請不遲於送貨日期前一天向我們提供有關之完整資料。於送貨當天作出任何更改，需收取港幣 100 元行政費用。</div>
                    <br />
                    <div style={{}}>如送貨當天需臨時更改地址、時間或日期，floralism 將按個別情況作出適當安排。若更改後之地址或時間未能配合司機當天之送貨路線，有關訂單將會被安排於該司機當天所派送之全部訂單完成後送出；若更改後之地址或時間仍能配合司機當天之送貨路線，有關訂單將會如常送出。</div>
                    <br />
                    <br />
                    <div style={{ fontSize: 20, fontWeight: 400 }}>特別狀況處理</div>
                    <div style={{ marginTop: 12 }}>如遇路面擠塞、交通意外、特別天氣狀況等，導致訂單有機會未能按時送出，floralism 會立刻聯絡客人告知相關狀況，請求指示，以作出適當安排及處理。</div>
                    <br />
                    <br />
                    <div style={{ fontSize: 20, fontWeight: 400 }}>訂單無法交付</div>
                    <div style={{ marginTop: 12 }}>若收件方拒收物品，或司機無法聯絡收件方，亦找不到任何如接待處或管理處等可代收物品之地方或任何可代收物品之職員，或有關地方或職員拒絕代收物品，或任何其他原因導致訂單無法順利完成交付，司機會立刻聯絡買家，請求指示，以作出適當安排及處理。若司機無法聯絡買家，訂單將被直接退回至本公司。任何情況下，若訂單被退回至本公司，客戶需承擔額外送貨費用。</div>
                    <br />
                    <br />
                    <div style={{ fontSize: 20, fontWeight: 400 }}>拒收貨品</div>
                    <div style={{ marginTop: 12 }}>若收件方拒收貨品，而有關貨品被退回至本公司，floralism 會等待客戶下一步指示。若三個月內仍未收到任何有關指示，floralism 將當作棄件處理。</div>
                    <br />
                    <br />
                    <div style={{ fontSize: 12 }}>
                        <div style={{ fontSize: 14, fontWeight: 700 }}>備註</div>
                        1. 一般情況下均能於預定時間送達，惟實際送達時間受送貨路線、當日出貨量、交通狀況、特殊天氣狀況影響，可能提早或延後，請多見諒。

                        2. 若客人要求的送貨時間既非屬於「標準時段送貨」，亦非屬於「指定時間送貨」；例如 3pm - 5pm，則一律以「指定時間送貨」收費。

                        3. 只要客戶要求的送貨時間屬於「即時送貨」，例如下單時為 2pm，並要求當日 3:30pm 收到貨品，則一律以「即時送貨」收費。

                        4. 送貨至以下離島區需收取港幣 300 元附加費：茶果洲、長洲、喜靈洲、雞翼角、交椅洲、南丫島、坪洲、蒲台群島、石鼓洲和索罟群島。

                        5. 「標準時段送貨」不包括以下地區：大潭道（柴灣段）、鶴咀、畢拉山靶場、飛鵝山、觀音山、大帽山、曹公潭戶外康樂中心、木棉下村、城門水塘、三門仔、大尾篤新娘潭、大埔碗窰路、嘉道理農場、梧桐寨、大埔鳯園路、沙頭角、古洞、和合石墳場、打石湖、蕉徑、鹿頸、烏蛟騰、上水華山、坪輋、打鼓嶺、沙嶺、八仙嶺郊野公園、龍山寺、錦繡花園、加州花園、輞井圍、稔灣、上白泥／下白泥、八鄉、米埔自然保護區、南生圍、荔枝山莊、大棠郊野公園、屯門內河碼頭、龍鼓灘、麥理浩夫人度假村、布袋澳、大坳門、十四鄉、榕樹澳、大網仔、井頭、金山、馬鞍山村、寶福紀念館、道風山、將軍澳墳場、昂坪、貝澳、大澳、塘福、梅窩、東涌道、大浪灣村、馬灣、愉景灣、小蠔灣、邊境禁區、羅湖及文錦渡。 如需送貨至以上地區，請聯繫客服，有機會收取額外送貨費用。
                    </div>


                </div>
            </div>
        </div>

        <Footer />
        {!login&&<ToastContainer />}
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
    // //////////console.log(params);

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