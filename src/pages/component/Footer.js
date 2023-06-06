import style from '@/styles/footer.module.css'
import { constant } from '@/constant/index';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ToastContainer, toast } from 'react-toastify';
export default function Footer() {
    const router = useRouter();
    const fetchCate = async () => {
        let response = await fetch(
            `${constant.api_url}/api/Flowercategory/allIndex`, {
            mode: 'cors',
            headers: {
                // "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "GET,POST",
                "Access-Control-Request-Headers": "Content-Type",
            }
        }
        )
        return await response.json()
    }


    const [cateList, setList] = useState([])

    useEffect(() => {
        fetchCate().then((res) => setList(res.data)).catch((er) => {
            //console.log('cat_list error:')
            //console.log(er)
        })
    }, [])

    //console.log(cateList)

    return (<div className={style.footer} style={{ width: '100%' }}>
        <div className={style.footer_three_column} style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div className={style.footer_column} style={{ display: 'flex', flexDirection: 'column' }}>
                <p>產品</p>
                {
                    cateList.map((item, index) => {
                        // //////console.log(item);
                        if (index > 5) return null;
                        return (<a key={index} href={`/category/${item.id}`}>{item.categoryname}</a>)
                    })
                }
            </div>
            <div className={style.footer_column} style={{ display: 'flex', flexDirection: 'column' }}>
                <p>幫助</p>
                <a onClick={() => router.push('/ShoppingGuide')}>購物指南</a>
                <a onClick={() => router.push('/CustomerOrder')}>訂製服務</a>
                <a onClick={() => router.push('/Delivery')}>送貨服務</a>
                <a onClick={() => router.push('/Aboutus')}>關於我們</a>
            </div>
            <div className={style.footer_column} style={{ display: 'flex', flexDirection: 'column' }}>
                <p>聯絡我們</p>
                <div>九龍觀塘鴻圖道41號</div>
                <div style={{ marginTop: 4 }}>華鴻工貿中心6樓01A室</div>
                <div>T <a href="tel:+85265818053">+852 65818053</a></div>
                <div>F <a href="">+852 65818053</a></div>
                <div>E <a href="mailto:info@floralismhk.com">info@floralismhk.com</a></div>
                <div>對我們的產品及服務有興趣？</div>
                <div style={{ marginTop: 4 }}>請聯係我們</div>
            </div>
            <div className={`${style.special_column}`} style={{ display: 'flex', flexDirection: 'column', minWidth: 163 }}>
                <div className={style.footer_contactList} style={{ display: 'flex', justifyContent: 'center', backgroundColor: 'black', flexWrap: 'wrap', alignItems: 'center', flexDirection: 'column', padding: 14 }}>
                    <div style={{ flex: 1, fontSize: 20 }}>FOLLOW US</div>
                    <div className={style.icon_group} style={{ flex: 1, display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginTop: 16, justifyContent: 'space-between' }}>
                        <div style={{ cursor: 'pointer' }}>
                            <a ><img src='/矢量智能对象-3.png' className={style.footer_Image} /></a>
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <img src='/矢量智能对象-2.png' className={style.footer_Image} />
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <img src='/矢量智能对象-1.png' className={style.footer_Image} />
                        </div>
                        <div style={{ cursor: 'pointer' }}>
                            <a href="https://wa.me/85265818053"><img src='/矢量智能对象.png' className={{ ...style.footer_Image, marginRight: 0 }} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* <div className={style.footer_icon_group} style={{  display: 'flex',  alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ flex: 1, display: 'flex', justifyContent: 'center', backgroundColor: 'black', alignItems: 'center', flexDirection: 'column', padding: '10%' }}>
                <div style={{ flex: 1, fontSize: 20 }}>FOLLOW US</div>
                <div style={{ flex: 1, display: 'flex', alignItems: 'center', marginTop: 16 }}>
                    <a>
                        <img src='/矢量智能对象-3.png' className={style.footer_Image} />
                    </a>
                    <a>
                        <img src='/矢量智能对象-2.png' className={style.footer_Image} />
                    </a>
                    <a>
                        <img src='/矢量智能对象-1.png' className={style.footer_Image} />
                    </a>
                    <a>
                        <img src='/矢量智能对象.png' className={{ ...style.footer_Image, marginRight: 0 }} />
                    </a>
                </div>
            </div>
        </div> */}
        <div style={{ width: '100%', textAlign: 'center', marginTop: 16, marginBottom: 16, fontSize: 12, whiteSpace: 'nowrap' }}>
            ©2023 floralismhk Ins All rights reserved
        </div>
        {/* <ToastContainer
            autoClose={5000}
            // position="bottom-right"
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored" /> */}
    </div>)
}