
import style from '@/styles/shopcarbtn.module.css'
import { useState } from 'react'
export default function ShopcarBottom(props) {


    const toAddAnimation = () => {
        //////console.log("點擊了");
        location.href='/shopCar/shopCar'
    }

    return (

        <div style={{ position: "fixed", right: '5%', bottom: 150,cursor:'pointer' }}>
            <button onClick={toAddAnimation} style={{cursor:'pointer'}} className={props.isShow ? `${style.button} ${style.button_hid}` : style.button}>
                {/* <div></div> */}
                <span className='iconfont'>&#xe64d;</span>
            </button>

        </div>
    )
}