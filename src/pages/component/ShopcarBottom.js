
import style from '@/styles/shopcarbtn.module.css'
import Cookies from 'js-cookie'
import Link from 'next/link';
import { useRouter } from 'next/router'
import { useState } from 'react'
export default function ShopcarBottom(props) {
    const router = useRouter();

    const toAddAnimation = (props) => {
        //////////////////////console.log("點擊了");
        Cookies.remove("isAdd");
        router.push('/shopCar/shopCar')
        // location.href='/shopCar/shopCar'
    }
    const toWhats = () => {
        router.push('https://wa.me/85265818053');
    }

    return (
        <div style={{ bottom: 75, position: "fixed", right: '5%', zIndex: 99999 }}>
            {!props.shopCarShown && <div style={{}}>
                <Link href={'/shopCar/shopCar'} style={{ cursor: 'pointer', position: 'relative' }} className={style.button_1}>
                    {/* <div></div> */}
                    <div className={Cookies.get("isAdd") ? style.add_animation : style.common_animation} style={{ width: 8, height: 8, borderRadius: 50, backgroundColor: "red", position: 'absolute', right: 4, top: 8 }}></div>
                    <span className='iconfont' style={{ fontSize: 28 }}>&#xe64d;</span>
                </Link>

            </div>}
            {!props.whatsappShown && <div style={{ marginTop: 24 }}>
                <button onClick={toWhats} style={{ cursor: 'pointer', backgroundColor: '#38fe00' }} className={style.button}>
                    <span className='iconfont1' style={{ color: 'white', fontSize: 28 }} >&#xea07;</span>
                </button>
            </div>}
        </div>

    )
}