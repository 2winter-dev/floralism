import style from '@/styles/footer.module.css'
import { constant } from '@/constant/index';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import { ToastContainer, toast } from 'react-toastify';
export default function Footer() {
    const router = useRouter();
    const fetchCate = async () => {
        let response = await fetch(
            `${constant.api_url}/api/Flowercategory/getKeywords`, {
            mode: 'cors',
            headers: {
                // "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "GET,POST",
                "Access-Control-Request-Headers": "Content-Type",
            }
        }
        )
        if (response.status === 200) {
            return await response.json()
        } else {
            throw new Error(await response.text())
        }
    }


    const [cateList, setList] = useState([])

    useEffect(() => {
        fetchCate().then((res) => setList(res.data)).catch((er) => {
        })
    }, [])
    useEffect(() => {
        //    console.log(cateList);
    }, [cateList])
    ////////console.log(cateList)

    return (<div className={style.footer} style={{ width: '100%' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{display:'flex',flexDirection:'row',flexWrap:'wrap',alignItems:'center',textAlign:'center',justifyContent:'center'}}>
            {
                cateList.map((item, index) => {
                    let res = item.keywords1.split(' | ');
                    return res.map((it, idx) => { 
                        // console.log(it);
                        if(index===cateList.length-1&&idx===res.length-1){
                            return (<Link style={{ color: 'white',fontSize:13 }}  href={`${item.flower_category_id===0? '/first_cate/'+item?.categoryname:'/category/'+item?.categoryname}`} key={idx}>{it}</Link>)
                        }
                        return (<div key={idx}><Link style={{ color: 'white',fontSize:13 }} href={`${item.flower_category_id===0? '/first_cate/'+item?.categoryname:'/category/'+item?.categoryname}`} >{it}</Link> <span style={{padding:'0 8px'}}>|</span></div>)
                    })
                })
            }
            </div>
            <div style={{ display: 'flex', flexDirection: 'row',marginTop:12 }}>
                <Link href="/ShoppingGuide" style={{ cursor: 'pointer', marginRight: 12 }}>購物指南</Link>
                <Link href="/CustomerOrder" style={{ cursor: 'pointer', marginRight: 12 }}>訂製服務</Link>
                <Link href="/Delivery" style={{ cursor: 'pointer', marginRight: 12 }} >送貨服務</Link>
                <Link href="/Aboutus" style={{ cursor: 'pointer' }} >關於我們</Link>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: 24 }}>
                <div>九龍觀塘鴻圖道41號</div>
                <div style={{ marginTop: 4 }}>華鴻工貿中心6樓01A室</div>
                <div style={{ marginTop: 4 }}>T <a href="tel:+85265818053">+852 65818053</a></div>
                {/* <div>F <span style={{fontSize: 14,letterSpacing:'0.05rem'}} href="">+852 65818053</span></div> */}
                <div style={{ marginTop: 4 }}>E <a href="mailto:info@floralismhk.com">info@floralismhk.com</a></div>
                <div style={{ marginTop: 4 }}>對我們的產品及服務有興趣？</div>
                <div style={{ marginTop: 4 }}>請聯係我們</div>
            </div>

            {/* <div style={{ flex: 1, fontSize: 20 }}>FOLLOW US</div> */}
            <div className={style.icon_group} style={{ flex: 1, display: 'flex', alignItems: 'center', flexWrap: 'wrap', marginTop: 16, justifyContent: 'space-between' }}>
                <div style={{ cursor: 'pointer' }}>
                    <a href="https://www.facebook.com/hkfloralism"><img alt="facebook" src='/矢量智能对象-3.png' className={style.footer_Image} /></a>
                </div>
                <div style={{ cursor: 'pointer' }}>
                    <a href="https://www.instagram.com/hkfloralism/"><img alt="instagram" src='/矢量智能对象-2.png' className={style.footer_Image} /></a>
                </div>
                {/* <div style={{ cursor: 'pointer' }}>
                            <a href=''><img alt="" src='/矢量智能对象-1.png' className={style.footer_Image} /></a>
                        </div> */}
                <div style={{ cursor: 'pointer' }}>
                    <a href="https://wa.me/85265818053"><img alt="whatsapp" src='/矢量智能对象.png' className={{ ...style.footer_Image, marginRight: 0 }} /></a>
                </div>
            </div>

        </div>
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