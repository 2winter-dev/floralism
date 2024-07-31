import { useState, useEffect } from "react";
import Script from "next/script";
import style from '@/styles/product.module.css'
import styles from '@/styles/Home.module.css'
import Header from "../component/Header";
import Footer from "../component/Footer";
import "react-responsive-carousel/lib/styles/carousel.min.css"
import GoodsItem from "../component/GoodsItem";
// import GoodsScoll from "./component/GoodsScroll";
import LoginPannel from '../component/LoginPannel'
import ShopcarBottom from "../component/ShopcarBottom";
import ShopCarPage from "../component/shopCarPage";
import Head from 'next/head'
import { constant } from "@/constant/index";

import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import m_api from "@/m_api";
import Link from "next/link";
import { useRef } from "react";
import DynamicComponent from "../component/Dynamic";
import { Carousel } from "react-responsive-carousel";
import { ToastContainer, toast } from 'react-toastify';
// import { Toast } from "react-toastify/dist/components";
export default function ProductDetail({ cateList, product }) {

    // ////////////console.log(product);
    const [index, setIndex] = useState(0);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [flag, setFlag] = useState(false);
    const [visible, setVisible] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [Image, setImage] = useState(product?.flowerDetail[index].flowerimage);
    const [num, setNum] = useState(1);
    const contain = useRef();
    const [isAdd, setIsAdd] = useState(Cookies.get("isAdd"));
    const [id, setId] = useState(product?.flowerDetail[index].id)
    const [cardcontent, setCardContent] = useState("");
    const [cardtype, setCardType] = useState(0);
    const [btnLength, setBtnLength] = useState(0);
    const addToCart = useMutation({
        mutationKey: ['addToCart'],
        mutationFn: (data) => m_api.AddToCart(data)
    })
    // ////////////console.log(product);
    const resizeUpdate = (e) => {
        if (e.target.innerWidth <= 1100) {
            //////////////console.log("====", e.target.innerWidth);
            setFlag(true);
        } else {
            //////////////console.log("-----", e.target.innerWidth);
            setFlag(false);
        }
    }
    useEffect(() => {
        window.addEventListener("resize", resizeUpdate);
        window.innerWidth < 1100 ? (!flag && setFlag(true)) : (flag && setFlag(false))
        return () => {
            window.removeEventListener("resize", resizeUpdate);
        }
    }, [])


    useEffect(() => {

    }, [cardtype])
    const carousel_slice = (n) => {
        let res = [];
        if (n === 4) {
            for (let i = 0; i < product.flowerList.length / n; i++) {
                let sli = product.flowerList.slice(n * i, n * (i + 1));
                res.push(sli);
            }
        } else {
            for (let i = 0; i < product.flowerDetail[index].flowerimages.length / n; i++) {
                let sli = product.flowerDetail[index].flowerimages.slice(n * i, n * (i + 1));
                res.push(sli);
            }

        }

        return res;
    }

    const _submit = () => {
        addToCart.mutate({})
    }
    let MySwiper;
    // const MySwiper=new Swiper('')

    if (!product) {
        return (<Link style={{ width: '100%', justifyContent: 'center' }} href="/">商品不存在,請點擊返回</Link>)
    }


    return (<div style={{ position: 'relative' }}>
        <Head>
            <title>商品詳情</title>
            <meta title={'title'} content={`${product.flowerList[index].metatitle}`} />
            <meta title={'descirption'} content={`${product.flowerList[index].metadescription}`} />
            <meta title={'keywords'} content={`${product.flowerList[index].meta}`} />
        </Head>
        <DynamicComponent cateList={cateList} setLogin={setLogin} />
        <main className={style.total_container} style={{}}>
            <div>
                <div style={{ marginTop: 32 }}>
                    <Link href={'/'} style={{ cursor: 'pointer' }}>首頁</Link><span className={style.separator} style={{ cursor: 'pointer' }}>/</span><Link href={`/category/${product.flowerCategory.id}`}>{product.flowerCategory.categoryname}</Link>
                    {/* <span className={style.separator}>/</span> */}
                    {/* <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: 'flex', flexWrap: 'nowrap' }}>{product.flowerDetail[index].flowername}</span> */}
                </div>
                <div className={style.main_detail} style={{ width: '100%', display: "flex", marginTop: 24, marginBottom: 24 }}>
                    <div className={style.detail_left} style={{}}>
                        <img className={style.img_show} src={Image} style={{ width: '100%', borderRadius: 20 }} />
                        <div style={{ marginTop: 16, position: 'relative' }}>
                            <div className={style.img_picker_contain} style={{ width: '100%', position: 'relative', overflow: 'hidden' }}>
                                <div className={style.img_picker}>
                                    <div ref={contain} style={{ width: '100%', position: 'relative', display: 'flex', justifyContent: 'center' }}>
                                        <div style={{ width: '90%', display: 'flex', alignItems: 'center' }}>
                                            <img onClick={() => setImage(product?.flowerDetail[index].flowerimage)} key={index.toString()} src={product?.flowerDetail[index].flowerimage} style={{ width: '17%', marginRight: '3%', borderRadius: 5 }}></img>
                                            {
                                                product.flowerDetail[index].flowerimages.map((item, index) => {
                                                    return <img onClick={() => setImage(item)} key={index.toString()} src={item} style={{ width: '17%', marginRight: '3%', borderRadius: 5 }}></img>
                                                })
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className={style.left_button}><span className="iconfont" onClick={() => {
                                // ////////////console.log(btnLength);
                                if (btnLength) {
                                    if (product.flowerDetail[index].flowerimages.length < 5) return;
                                    if (contain.current.style.left) {
                                        // ////////////console.log(contain.current.style.left)
                                        contain.current.style.left = parseInt(contain.current.style.left) - 17 + "%";
                                    } else {
                                        contain.current.style.left = -17 + '%';
                                    }
                                }
                                // ////////////console.log("------------------");

                            }} style={{ fontSize: 24 }}>&#xe628;</span></div>
                            <div className={style.right_button}><span className="iconfont" onClick={() => {
                                // ////////////console.log(btnLength);

                                if (product.flowerDetail[index].flowerimages.length > 5) {
                                    let l = btnLength;
                                    if (l + 1 > product.flowerDetail[index].flowerimage.length) return;
                                    setBtnLength(btnLength + 1);
                                    if (contain.current.style.left) {
                                        // ////////////console.log(contain.current.style.left)
                                        contain.current.style.left = parseInt(contain.current.style.left) + 17 + "%";
                                    } else {
                                        contain.current.style.left = 17 + '%';
                                    }
                                }

                            }} style={{ fontSize: 24 }}>&#xe642;</span></div>
                        </div>
                    </div>
                    <div className={style.detail_right} style={{}}>
                        <div style={{ width: '100%', fontSize: 18 }} className={style.product_title}>
                            {product.flowerDetail[index].flowername}
                        </div>

                        <div className={style.price} style={{ color: 'rgb(206,57,75)', fontSize: 24 }}>
                            HK$ {(parseFloat(product.flowerDetail[index].price).toFixed(2) * num).toFixed(2)}
                        </div>

                        <div style={{ fontWeight: 600 }}>規格</div>

                        <div className={style.specifications}>
                            {/* <div className={style.choosen}>玫瑰16枝</div>
                            <div>禮品包裝</div> */}
                            {
                                product.flowerDetail.map((item, index) => {
                                    if (item.id === id) {
                                        return (<div key={item.toString() + index.toString()} className={style.choosen}>{item.specs_name}</div>)
                                    } else return <div onClick={() => {
                                        setIndex(index);
                                        setId(item.id);
                                    }} key={item.toString() + index.toString()}>{item.specs_name}</div>
                                })
                            }
                        </div>

                        <div style={{ display: 'flex', marginTop: 32, width: '100%', justifyContent: 'space-between' }}>
                            <div className={style.type_selector} style={{ marginRight: 12 }}>
                                <select className={style.selector} value={cardtype} onChange={(event) => {
                                    setCardType(event.target.value);
                                    ////////console.log(event.target.value);
                                }} style={{ borderRadius: 8, paddingLeft: 10, paddingTop: 4, paddingBottom: 4, paddingRight: 10 }} >
                                    <option value={0}>默認心意卡</option>
                                    <option value={1}>店家代寫心意卡</option>
                                    <option value={2}>留空，自己寫</option>
                                    <option value={3}>不需要心意卡</option>
                                </select>
                                {cardtype === "1" && <textarea type={'text'} style={{ resize: 'none', paddingTop: 4, paddingBottom: 4, borderRadius: 4, marginTop: 12, width: '100%', paddingLeft: 10, paddingRight: 10 }} value={cardcontent} onInput={(e) => setCardContent(e.target.value)} placeholder="请输入心意卡内容" />}
                                {cardtype === "0" && <img src='/心意卡.png' style={{ width: '100%', height: '100%', marginTop: 12 }} />}
                            </div>
                            {/* <div style={{ flex: 1, borderWidth: 2, borderColor: 'black', borderRadius: 8 }}>
                                {cardtype === "1" && <img src='/心意卡.png' style={{ width: '100%',height:'100%' }} />}
                            </div> */}

                        </div>

                        {/* <div style={{ marginTop: 12 }}>
                          
                        </div> */}

                        <div style={{ marginTop: 32 }}>
                            <div style={{ marginBottom: 12, fontWeight: 600 }}>數量</div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <button onClick={() => {
                                    if (num === 1) {
                                        toast.error("商品數量不能小於0")
                                    } else {
                                        setNum(num - 1);
                                    }
                                }} className={style.decrease} style={{ cursor: 'pointer' }}>-</button>
                                <input type="text" className={style.product_number} style={{ borderRadius: 0 }} contentEditable={false} value={num} onChange={() => {
                                }} />
                                <button onClick={() => {
                                    setNum(num + 1);
                                }} className={style.increase} style={{ cursor: 'pointer' }}>+</button>
                            </div>
                        </div>

                        <div style={{ marginTop: 24 }}>
                            <button onClick={() => {
                                //////console.log("1");
                                // ////////////console.log(Cookies.get('token'), id, num, cardtype, cardcontent);
                                addToCart.mutate({ cookie: Cookies.get('token'), flower_specs_id: id, num, cardtype, cardcontent: cardcontent.trim() }, {
                                    onSuccess: async (res) => {
                                        // let res = await res.json()
                                        // ////////////console.log(res);
                                        console.log(res);
                                        if (res.code) {
                                            if (res.code.toString() === '401') {
                                                Cookies.remove('token');
                                                toast.error("請先登錄",{
                                                    position:"bottom-right"
                                                });
                                                return;
                                            }
                                            if (res.code === 1) {
                                                Cookies.set("isAdd", true);
                                                setIsAdd(true);
                                                toast("已加入購物車!");
                                                // alert("加入购物车成功");
                                            }
                                        } else {
                                            toast.error(res.msg);
                                        }
                                    },
                                    onError: (err) => {
                                        toast("添加失敗");
                                    }
                                })


                            }} className={style.buy_btn} style={{ cursor: 'pointer' }}>點擊購買</button>
                        </div>
                    </div>
                </div>

                {/* <div className={style.scroll_right} style={{ marginLeft: '2.5%' }}>
                            &gt;
                        </div> */}
                {/* </div> */}

            </div>

            {/* </div> */}
        </main >
        <div className={style.swiper_margin}>
            <div className={style.youMaybeLike} style={{ padding: '2.5%', position: 'relative', marginBottom: 24, borderRadius: 20 }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div className={styles.distance} style={{ borderBottomWidth: 1, borderBottomColor: 'white' }}></div>
                    <div className={styles.title} style={{ marginRight: 16, marginLeft: 16 }}>FLORALISM 情人節定制花束</div>
                    <div className={styles.distance} style={{ borderBottomWidth: 1, borderBottomColor: 'white' }}></div>
                </div>
                <div style={{ position: "relative", }}>

                    <div style={{ padding: 8, marginTop: 12 }}>

                        <Carousel showThumbs={false} infiniteLoop showIndicators={false} preventMovementUntilSwipeScrollTolerance={true} swipeScrollTolerance={50} showStatus={false}>
                            {
                                carousel_slice(4).map((item, index) => {
                                    ////////////console.log(carousel_slice().length);
                                    return (<div key={item.id + index.toString()} style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        {
                                            item.map((it, ii) => {
                                                return (<GoodsItem imgTopStyle={{}} key={item.id + index.toString() + ii.toString()} item={it} type={'carsouel'} top_style={{}} imgStyle={{}} animation />)
                                            })
                                        }
                                    </div>)
                                })
                            }
                        </Carousel>

                    </div>
                    {/* <div className={styles.scroll_left} style={{ zIndex: 10, cursor: 'pointer' }} onClick={() => MySwiper.swipePrev()} >
                                <span className="iconfont" style={{ fontSize: 24 }}>&#xe628;</span>
                            </div>
                            <div className={styles.scroll_right} style={{ zIndex: 10, cursor: 'pointer' }} onClick={() => MySwiper.swipeNext()}>
                                <span className="iconfont" style={{ fontSize: 24 }}>&#xe642;</span>
                            </div> */}
                </div>

            </div>

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
        {!login&&<ShopcarBottom isAdd={isAdd} />}
        {
            isShow && <ShopCarPage isShow={isShow} setIsShow={setIsShow} />
        }
        {!login&&<ToastContainer />}
        {/**public\swiper */}
        <Script defer src="/swiper/js/idangerous.swiper.min.js" onReady={() => {
            MySwiper = new Swiper('.swiper-container', {
                loop: true,
                onInit: function (swiper) {
                    swiper.swipeNext()
                },
                preventClicksPropagation: false,
            })
        }}></Script>
    </div >)
}

export async function getStaticPaths() {
    const response = await fetch(
        `${constant.api_url}/api/flowers/allList`, {
        mode: 'cors',
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type",
        }
    }
    );
    const data = await response.json();
    let res = [];
    data.data.map((item, index) => {
        res.push({ params: { productId: item.id.toString() } });
    })

    // const data=await response.json()
    // TODO get product id to be array
    return {
        paths: res,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { params } = context;

    //  //////////////console.log(constant.api_url);
    const response = await fetch(
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
    const data = await response.text()
    //   //////////////console.log(Cookies.get('token'));

    const detail_response = await fetch(
        `${constant.api_url}/api/flowers/flowerDetail?id=${params.productId}`, {
        Authorization: `Bearer ${Cookies.get('token')}`,
        mode: 'cors',
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type",
        }
    }
    );
    //////////////console.log(Cookies.get("token"));
    const detail = await detail_response.json();
    return {
        props: {
            cateList: JSON.parse(data).data,
            product: detail.data
        },

    };
}