import styles from '@/styles/Home.module.css'
import style from '@/styles/carousel.module.css'
import GoodsItem from './GoodsItem'
import useBrowserChange from '@/hooks/useBrowserChange'
import { useState } from 'react';
// import { Carousel } from 'antd';

export default function Carousel(props) {
    let [height, width] = useBrowserChange();
    const [goodsList, setGoodsList] = useState([]);
    ////////console.log(props);

    return (
    <div style={{ width: '100%',...props.top_div_style }} className={style.carousel_total}>

    </div>)
}


