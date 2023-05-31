
import style from '@/styles/shopcarbtn.module.css'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import { useState } from 'react'
export default function ShopcarBottom(props) {
    const router = useRouter();

    const toAddAnimation = (props) => {
        //////////console.log("點擊了");
        Cookies.remove("isAdd");
        router.push('/shopCar/shopCar')
        // location.href='/shopCar/shopCar'
    }

    return (

        <div style={{ position: "fixed", right: '5%', bottom: 150, cursor: 'pointer', zIndex: 99999 }}>
            <button onClick={toAddAnimation} style={{ cursor: 'pointer' }} className={props.isShow ? `${style.button} ${style.button_hid}` : style.button}>
                {/* <div></div> */}
                <div className={props.isAdd ? style.add_animation : style.common_animation} style={{ width: 8, height: 8, borderRadius: 50, backgroundColor: "red", position: 'absolute', right: 16, top: 16 }}></div>
                <span className='iconfont'>&#xe64d;</span>
            </button>

        </div>
    )
}