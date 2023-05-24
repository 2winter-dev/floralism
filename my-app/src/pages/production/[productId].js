import { useState, useEffect } from "react";
import Script from "next/script";
import style from '@/styles/product.module.css'
import styles from '@/styles/Home.module.css'
import Header from "../component/Header";
import Footer from "../component/Footer";
import Carousel from "../component/Carousel";
import GoodsItem from "../component/GoodsItem";
// import GoodsScoll from "./component/GoodsScroll";
import LoginPannel from '../component/LoginPannel'
import RegisterPannerl from '../component/ResgisterPannel'
import ShopcarBottom from "../component/ShopcarBottom";
import ShopCarPage from "../component/shopCarPage";
import Head from 'next/head'
import { constant } from "@/constant/index";
import ForgetPassword from "../component/ForgetPassword";
import { Cookie } from "next/font/google";
import Cookies from "js-cookie";
import { useMutation } from "@tanstack/react-query";
import m_api from "@/m_api";
import Link from "next/link";
import DynamicComponent from "../component/Dynamic";

export default function ProductDetail({ cateList, product }) {

    // console.log(product);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [flag, setFlag] = useState(false);
    const [visible, setVisible] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const [Image, setImage] = useState(product.flowerDetail[0].flowerimage);
    const [num, setNum] = useState(1);
    const [flower_id, setFlower_id] = useState(product.flowerDetail[0].flower_id)
    const [cardcontent, setCardContent] = useState("");
    const [cardtype, setCardType] = useState(0);
    const addToCart = useMutation({
        mutationKey: ['addToCart'],
        mutationFn: (data) => m_api.AddToCart(data)
    })

    const resizeUpdate = (e) => {
        if (e.target.innerWidth <= 1100) {
            //console.log("====", e.target.innerWidth);
            setFlag(true);
        } else {
            //console.log("-----", e.target.innerWidth);
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
        console.log("==-12312-===");
        console.log(cardtype);
    }, [cardtype])
    const carousel_slice = () => {
        let res = [];
        for (let i = 0; i < product.flowerList.length / 4; i++) {
            let sli = product.flowerList.slice(4 * i, 4 * (i + 1));
            res.push(sli);
        }
        return res;
    }

    const _submit = () => {
        addToCart.mutate({})
    }
    let MySwiper;
    // const MySwiper=new Swiper('')
    const [index, setIndex] = useState(0);
    const [id, setId] = useState(product.flowerDetail[0].id)
    return (<div style={{ position: 'relative' }}>
        <Head>
            <title>商品詳情---production</title>

        </Head>
        <DynamicComponent cateList={cateList} setLogin={setLogin}/>
        <main style={{ paddingLeft: '15%', paddingRight: '15%' }}>
            <div>
                <div style={{ marginTop: 32, display: 'flex' }}>
                    <Link href={'/'} style={{ cursor: 'pointer' }}>首頁</Link><span className={style.separator} style={{ cursor: 'pointer' }}>/</span><Link href={`/category/${product.flowerCategory.id}`}>{product.flowerCategory.categoryname}</Link><span className={style.separator}>/</span><div style={{ overflow: 'hidden', textOverflow: 'ellipsis', display: 'flex', flexWrap: 'nowrap' }}>{product.flowerDetail[index].specs_name}</div>
                </div>
                <div className={style.main_detail} style={{ width: '100%', display: "flex", marginTop: 24, marginBottom: 24 }}>
                    <div className={style.detail_left} style={{}}>
                        <img className={style.img_show} src={Image} style={{ width: '100%' }} />
                        <div style={{ marginTop: 16 }}>
                            <div className={style.img_picker_contain} style={{ width: '100%', position: 'relative' }}>
                                <div className={style.left_button}><span className="iconfont" style={{ fontSize: 24 }}>&#xe628;</span></div>
                                <div className={style.right_button}><span className="iconfont" style={{ fontSize: 24 }}>&#xe642;</span></div>
                                <div className={style.img_picker}>
                                    <div style={{ width: '100%' }}>
                                        <div style={{ width: '100%', display: 'flex', alignItems: 'center' }}>
                                            {
                                                product.flowerDetail[index].flowerimages.map((item, index) => {

                                                    return <img onClick={() => setImage(item)} key={index.toString()} src={item} style={{ width: '17%', marginRight: '3%' }}></img>
                                                })
                                            }
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={style.detail_right} style={{}}>
                        <div style={{ width: '100%', fontSize: 18 }} className={style.product_title}>
                            {product.flowerDetail[0].specs_name}
                        </div>

                        <div className={style.price} style={{ color: 'rgb(206,57,75)' }}>
                            HK$ {(parseFloat(product.flowerDetail[0].price).toFixed(2) * num).toFixed(2)}
                        </div>

                        <div>規格</div>

                        <div className={style.specifications}>
                            {/* <div className={style.choosen}>玫瑰16枝</div>
                            <div>禮品包裝</div> */}
                            {
                                product.flowerDetail.map((item, index) => {
                                    if (item.id === id) {
                                        return (<div key={item.toString() + index.toString()} className={style.choosen}>{item.specs_attr}</div>)
                                    } else return <div key={item.toString() + index.toString()}>{item.specs_attr}</div>
                                })
                            }
                        </div>

                        <div style={{ display: 'flex', marginTop: 16, width: '100%', justifyContent: 'space-between', textAlign: 'center' }}>
                            <div>默認心意卡</div>
                            <select value={cardtype} onChange={(event) =>{
                                setCardType(event.target.value);
                                console.log(event.target.value);
                            }} style={{ borderRadius: 4 }} >
                                <option value={0}>心意卡内容</option>
                                <option value={1}>店家代寫心意卡</option>
                                <option value={2}>留空，自己寫</option>
                                <option value={3}>不需要心意卡</option>
                            </select>
                        </div>

                        <div style={{ marginTop: 12 }}>
                            <div style={{ width: '45%', borderWidth: 2, borderColor: 'black', borderRadius: 8 }}>
                                <img src='/心意卡.png' style={{ width: '100%' }} />
                            </div>
                            {cardtype==="1"&&<input type={'text'} value={cardcontent} onInput={(e)=>setCardContent(e.target.value)} placeholder="请输入心意卡内容" />}
                        </div>

                        <div style={{ marginTop: 32 }}>
                            <div style={{ marginBottom: 12 }}>數量</div>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <button onClick={() => {
                                    if (num === 1) {
                                        alert("商品數量不能小於0")
                                    } else {
                                        setNum(num - 1);
                                    }
                                }} className={style.decrease}>-</button>
                                <input type="text" className={style.product_number} contentEditable={false} value={num} onChange={() => {
                                    //console.log(value)
                                }} />
                                <button onClick={() => {
                                    setNum(num + 1);
                                }} className={style.increase}>+</button>
                            </div>
                        </div>

                        <div style={{ marginTop: 24 }}>
                            <button onClick={() => {
                                if (cardtype) {
                                    console.log(Cookies.get('token'), id, num, cardtype, cardcontent);
                                    addToCart.mutate({ cookie: Cookies.get('token'), flower_specs_id: id, num, cardtype, cardcontent: cardcontent.trim() }, {
                                        onSuccess: async (res) => {
                                            let isSuccess = await res.json()
                                            console.log(isSuccess);
                                            if (isSuccess.code) {
                                                if (isSuccess.code.toString() === '401') {
                                                    Cookies.remove('token');
                                                    alert("登錄失效");
                                                    return;
                                                }
                                                if (isSuccess.code === 1) alert("加入购物车成功");
                                            } else {
                                                alert(isSuccess.msg);
                                            }
                                        },
                                        onError: (err) => {
                                            alert("添加失敗");
                                        }
                                    })
                                } else {
                                    alert("請選擇心意卡類型")
                                }

                            }} className={style.buy_btn} style={{ cursor: 'pointer' }}>點擊購買</button>
                        </div>
                    </div>
                </div>
                {
                    /**轮播图 */
                }


                {/* <div style={{ display: 'flex', position: 'relative', alignItems: 'center' }}> */}
                {/* <div className={style.scroll_left} style={{ marginRight: '2.5%' }}>
                            &lt;
                        </div> */}
                <div>
                    <div className={style.youMaybeLike} style={{ padding: 5, position: 'relative', marginBottom: 24 }}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className={styles.distance} style={{ borderBottomWidth: 1, borderBottomColor: 'white' }}></div>
                            <div className={styles.title} style={{ color: "white", marginRight: 16, marginLeft: 16 }}>FLORALISM 情人節定制花束</div>
                            <div className={styles.distance} style={{ borderBottomWidth: 1, borderBottomColor: 'white' }}></div>
                        </div>
                        <div style={{ position: "relative" }}>

                            <div style={{ padding: 8 }}>
                                <div className='swiper-container' style={{ height:  carousel_slice().length>4&&flag < 2 ? 620 : 320 }}>
                                    <div className="swiper-wrapper" style={{ height: 320 }}>
                                        {
                                            carousel_slice().map((item, index) => {
                                                console.log(carousel_slice().length);
                                                return (<div key={item.id + index.toString()} className="swiper-slide" style={{ height: 320, width: 212, display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap' }}>
                                                    {
                                                        item.map((it, ii) => {
                                                            return (<GoodsItem key={item.id + index.toString() + ii.toString()} item={it} type={'carsouel'} top_style={{ height: 320, width: 200 }} imgStyle={{ height: 200, width: 200 }} />)
                                                        })
                                                    }
                                                </div>)
                                            })
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className={styles.scroll_left} style={{ zIndex: 10 }} onClick={() => MySwiper.swipePrev()} >
                                <span className="iconfont" style={{ fontSize: 24 }}>&#xe628;</span>
                            </div>
                            <div className={styles.scroll_right} style={{ zIndex: 10 }} onClick={() => MySwiper.swipeNext()}>
                                <span className="iconfont" style={{ fontSize: 24 }}>&#xe642;</span>
                            </div>
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
        {
            <RegisterPannerl type={false} register={register} close={() => setRegister(false)} toLogin={() => {
                setLogin(true);
                setRegister(false)
            }} />
        }
        {
            <ForgetPassword type={0} close={() => setVisible(false)} visible={visible} toLogin={() => {
                setVisible(false);
                setLogin(true);
            }} />
        }
        <ShopcarBottom />
        {
            isShow && <ShopCarPage isShow={isShow} setIsShow={setIsShow} />
        }
        {/**public\swiper */}
        <Script defer src="/swiper/js/idangerous.swiper.min.js" onReady={() => {
            MySwiper = new Swiper('.swiper-container', {
                loop: true,
                onInit: function (swiper) {
                    swiper.swipeNext()
                }
            })
        }}></Script>
    </div >)
}

export async function getStaticPaths() {
    const response = await fetch(
        `${constant.api_url}/api/flowers/allList`
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

    //  //console.log(constant.api_url);
    const response = await fetch(
        `${constant.api_url}/api/flowercategory/index`
    );
    const data = await response.text()
    //   //console.log(Cookies.get('token'));

    const detail_response = await fetch(
        `${constant.api_url}/api/flowers/flowerDetail?id=${params.productId}`, {
        Authorization: `Bearer ${Cookies.get('token')}`
    }
    );
    //console.log(Cookies.get("token"));
    const detail = await detail_response.json();
    //   let data=await response.text();
    //   const swiper_response=await fetch(
    //     `${constant.api_url}/api/flowers/getTopicFlower?flower_category_id=${JSON.parse(data).data[0].id}`
    //   )
    //   const goods_response=await fetch(
    //     `${constant.api_url}/api/flowers/index`
    //   )
    //    //console.log(data);
    //   //console.log(detail);

    //   //console.log("====================");
    //   //console.log(detail.data.product.flowerDetail[0]);
    // //console.log(data[1]);
    return {
        props: {
            cateList: JSON.parse(data).data,
            product: detail.data
        },
    };
}