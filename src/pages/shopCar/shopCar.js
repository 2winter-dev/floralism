import style from '@/styles/shopcarbtn.module.css'
import styles from '@/styles/user.module.css';
import { useEffect, useState, useCallback } from 'react';
import Header from '../component/Header';
import Link from "next/link";
import Footer from '../component/Footer';
import { constant } from '@/constant';
import LoginPannel from '../component/LoginPannel';
import RegisterPannerl from '../component/ResgisterPannel';
import ForgetPassword from '../component/ForgetPassword';
import Cookies from 'js-cookie';
import { useMutation } from '@tanstack/react-query';
import m_api from '@/m_api';
import Head from 'next/head';
import DynamicComponent from '../component/Dynamic';
import Router from 'next/router';
// import { ToastContainer, toast } from 'react-toastify';
import toast, { Toaster } from "react-hot-toast";
export default function ShopCar({ cateList, shopCar }) {
    const [selected, setSelected] = useState([]);

    const [selAll, setSelAll] = useState(false);
    const [sc, setSc] = useState(shopCar.data);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [visible, setVisible] = useState(false);
    const [goodsList, setGoodsList] = useState([])
    const [total_money, setTotal_money] = useState(0);
    const [total_num, setTotal_num] = useState(0);
    const [textArea, setTextArea] = useState("");
    const [type, setType] = useState(1);
    const [flag, setFlag] = useState(false);
    const [date, setDate] = useState("");
    console.log(goodsList);
    // if (shopCar.code === 401) {
    //    Cookies.remove('token');
    // }
    const updateNum = useMutation({
        mutationFn: (data) => m_api.changeShopCarNumber(data),
        mutationKey: ['updateNumber'],
    })




    const ToUpdate = (item, index, value) => {
        console.log(item, index, value);
        const res = goodsList;
        if (value === 0) {
            toast.error("商品數量不得為0")
            return;
        }
        if (value >res[index].totalcount){
            toast.error("購買數量大於庫存數量");
            return;
        }
        res[index].number = value;
        console.log(res);
        setGoodsList([...res]);
        localStorage.setItem("shopcar", JSON.stringify(res));
    }

    useEffect(() => {
        console.log(localStorage.getItem("shopcar") ?? [])
        setGoodsList(JSON.parse(localStorage.getItem("shopcar")) ?? [])
    }, [])
    useEffect(() => {
        Cookies.remove("isAdd");
        ////////////console.log(Cookies.get("isAdd"))
    }, [])
    const hasLogin = () => {
        setFlag(true);
    }
    useEffect(() => {
        if (flag) {
            location.reload();
        }
    }, [flag])
    let deleteProductionFromShopCar = useMutation({
        mutationFn: (data) => m_api.deleteProductionFromShopCar(data),
        mutationKey: ['deleteProductionFromShopCar']
    })


    const changeStatus = (data) => {
        const res = goodsList;
        res[data].isSelected = !res[data].isSelected;
        console.log(res);
        setGoodsList([...res]);
        localStorage.setItem("shopcar", JSON.stringify(res));
    }
    const deleteProduct = () => {
        let res = goodsList.filter((item, index) => {
            if (!item.isSelected) {
                return item;
            }
        })
        console.log(res);
        setGoodsList(res);
        localStorage.setItem("shopcar", JSON.stringify(res));
    }
    const selectedAll = () => {
        if (selAll) {
            console.log("true to false")
            setSelAll(false);

        }
        let res = goodsList;
        for (let i of res) {
            i.isSelected = !i.isSelected;
        }
        console.log(res);
        setGoodsList([...res]);
        localStorage.setItem("shopcar", JSON.stringify(res));
    }
    useEffect(() => {
        console.log("变了");
        let price = 0;
        let num=0;
        let isAllSelected = true;
        goodsList.map((item, index) => {
            if (item.isSelected) {
                price += parseFloat(item.price) * item.number
                num += parseInt(item.number)
            } else {
                isAllSelected = false;
            }
        })
        console.log(num)
        setTotal_money(price.toFixed(2));
        setTotal_num(num??0);
        setSelAll(isAllSelected);
        console.log(price);
        //  //////////////////////////////////console.log(money);
    }, [goodsList])

    const limitTime = () => {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        //////////////////////////////////console.log(year + '-' + (month < 10 ? "0" + month : month) + "-" + day);
        return year + '-' + (month < 10 ? "0" + month : month) + "-" + day

    }

    const toCreateOrder = () => {

        if (date !== "") {
            let res = goodsList.filter((item, index) => {
                if (item.isSelected) {
                    return item;
                }
            })
            console.log(res);
            if (res.length) {
                console.log("選擇了商品")
                if (Cookies.get("token")) {
                    console.log("已登錄");
                    Router.replace({
                        pathname: '/selectMethod',
                        query: {
                            // cart_ids: selected.join(','),
                            amount: total_money,
                            payment_amount: total_money,
                            // goodsList:JSON.stringify(res),
                            deliverydate: date,
                            deliverytype: type,
                            remark: textArea
                        }
                    })
                }else{
                    toast.error("請先登錄");
                }
            } else {
                toast.error("未選擇商品");
            }

        } else {
            toast.error("請選擇時間");
        }
    }

    return <div>
        <Head>
            <title>Floralism 購物車</title>
        </Head>
        <DynamicComponent cateList={cateList} setLogin={() => {
            setLogin(true);
        }} />
        <main className={style.total_container} style={{}}>
            <div>
                <div style={{ marginTop: 32, display: 'flex', marginBottom: 32 }}>
                    <Link style={{ cursor: 'pointer' }} href={'/'}>首頁</Link><span className={style.separator} style={{ padding: '0 4px' }}>/</span><a>{'我的賬單'}</a>
                </div>
                <div className={style.mediaArea} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>

                    <div className={style.right_area} style={{}}>
                        <div style={{ width: '100%', maxHeight: 630, overflow: 'auto' }}>

                            <table style={{ width: '100%', minWidth: 500, textAlign: 'left' }}>
                                <thead>
                                    <tr style={{ backgroundColor: 'rgb(245,245,245)' }}>
                                        <th className={styles.tr_padding} width={130}>
                                            <input type='checkbox' checked={selAll} onChange={() => null} onClick={selectedAll} style={{ width: 15, height: 15 }} />
                                            <span>全選</span>
                                            <span onClick={deleteProduct} style={{ marginLeft: 8, cursor: 'pointer', color: '#d43a43' }}>删除</span>
                                        </th>
                                        <th className={styles.tr_padding}>商品</th>
                                        <th className={styles.tr_padding} width={120}>總價</th>
                                        <th className={styles.tr_padding} width={100}>優惠</th>
                                    </tr>
                                </thead>
                                {
                                    goodsList.length ? goodsList.map((item, index) => {
                                        console.log(item.isSelected);
                                        return (<tbody key={index}>

                                            <tr className={styles.tr_padding} style={{ height: 20 }}>
                                                <td className={styles.tr_padding} colSpan={4} ></td>
                                            </tr>
                                            <tr className={styles.tr_padding} style={{ backgroundColor: 'rgb(245,245,245)', fontSize: 14 }}>
                                                <td className={`${styles.tr_padding} ${styles.order_desc}`} colSpan={4} >
                                                    <div style={{ display: 'flex' }}>
                                                        <div>
                                                            {item?.flowername}
                                                        </div>
                                                        <div style={{ marginLeft: 12 }}>
                                                            {item?.flower_specs_name}
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontSize: 14 }} className={`${styles.tr_padding} ${styles.first_column}`}>
                                                    <input type='checkbox' onClick={() => changeStatus(index)} onChange={() => null} checked={item.isSelected} style={{ width: 15, height: 15, marginRight: 12 }} />
                                                </td>
                                                <td className={`${styles.tr_padding} ${styles.first_column}`} >

                                                    <div style={{ display: 'flex', alignItems: 'center', wordBreak: 'break-all' }}>
                                                        <div className={styles.product_img}>
                                                            <img alt="" src={`${item.flowerimage}`} style={{ width: '100%' }} />
                                                        </div>
                                                        <div style={{ flex: 1 }}>
                                                            <div className={styles.product_title} style={{ fontSize: 14, width: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                                                {item?.flowername}
                                                            </div>
                                                            {/* <div>×</div> */}
                                                            <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', width: 80 }}>
                                                                <div onClick={(e) => ToUpdate(item, index, item.number - 1)} style={{ width:15, border: "1px solid black", borderRight: 'none', borderTopLeftRadius: 4, cursor: 'pointer', borderBottomLeftRadius: 4 }}>-</div>
                                                                <span style={{ border: "1px solid black", fontSize: 16,padding:'0 4px'}}>{item.number}</span>
                                                                <div onClick={(e) => ToUpdate(item, index, item.number + 1)} style={{ width:15, border: "1px solid black", borderLeft: 'none', borderTopRightRadius: 4, cursor: 'pointer', borderBottomRightRadius: 4 }}>+</div>
                                                            </div>
                                                            {/* <input type={'number'} style={{ width: 40, textAlign: 'center' }} onChange={(e) => ToUpdate(item, index, e.target.value)} value={item.num} /> */}
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ fontSize: 14 }} className={`${styles.tr_padding} ${styles.second_column}`}>
                                                    HD${item?.price}
                                                </td>
                                                <td style={{ fontSize: 14 }} className={`${styles.tr_padding} ${styles.last_column}`}>
                                                    {item?.couponprice ? "HK$" + item?.couponprice : "無"}
                                                </td>

                                            </tr>

                                        </tbody>)
                                    }) : <tbody>
                                        <tr >
                                            <td colSpan={3} rowSpan={4} style={{ fontSize: 18, fontWeight: 'bold' }}>{"購物車爲空"}</td>
                                        </tr>
                                        <tr></tr>
                                        <tr></tr><tr></tr>
                                    </tbody>
                                }


                            </table>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24 }}>
                            <div>數量總件數 <span style={{ fontWeight: 700, fontSize: 24 }}>{total_num}</span> 件</div>
                            <div>合計 hk$ <span style={{ fontWeight: 700, fontSize: 24 }}>{total_money}</span></div>
                        </div>
                    </div>
                    <div className={style.left_area} style={{ flexDirection: 'column', display: 'flex', alignItems: 'flex-start' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', flex: 1, width: '100%' }}>
                            <div style={{ fontWeight: 700 }}>訂單備注:</div>
                            <textarea onInput={(e) => setTextArea(e.target.value)} style={{ width: '100%', resize: 'none', paddingLeft: 10, paddingRight: 10, height: 100, backgroundColor: 'white', borderRadius: 8, marginTop: 12 }} placeholder='給賣家備注的信息'>
                            </textarea>
                        </div>
                        <div style={{ flex: 1, marginTop: 16, width: '100%' }}>
                            <div style={{ fontWeight: 700 }}>配送方式</div>
                            <div className={style.mediaArea_delivery} style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
                                <div onClick={() => setType(1)} className={style.button_icon} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: type === 1 ? "rgba(0,0,0,0.1)" : "white" }}>
                                    <img alt="" src={'/本地送貨.png'} ></img>
                                    本地送貨
                                </div>
                                <div onClick={() => setType(2)} className={style.button_icon} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: type === 2 ? "rgba(0,0,0,0.1)" : "white" }}>
                                    <img alt="" src={'/樵店自取.png'} ></img>
                                    門店自取
                                </div>
                            </div>
                            <div style={{ marginTop: 16 }}>
                                <div style={{ fontWeight: 700 }}>配送日期</div>
                                <input type='date' min={limitTime()} style={{ width: '100%', marginTop: 12, borderRadius: 6, paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5 }} onInput={(e) => setDate(e.target.value)} />
                            </div>
                            <div className={style.mediaArea_btnGroup} style={{ marginBottom: 24, marginTop: 24, display: 'flex', justifyContent: 'space-between' }}>
                                <button className={style.check_order} onClick={toCreateOrder} style={{ textAlign: 'center', paddingTop: 12, paddingBottom: 12, backgroundColor: '#d43a43', color: 'white', border: 'none', borderRadius: 8, cursor: 'pointer' }}>確認訂單</button>
                                <Link className={style.btn_To_index} href="/" style={{ textAlign: 'center', paddingTop: 12, paddingBottom: 12, border: 'none', backgroundColor: 'black', color: 'white', borderRadius: 8, cursor: 'pointer' }}>繼續選購</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </main>
        <Footer />
        {/* {!login&&<ToastContainer />} */}
        {/* {!login && <Toaster
            position="top-center"
        />} */}
        {
            <LoginPannel login={login} close={() => setLogin(false)} toRegister={() => {
                setLogin(false);
                setRegister(true);
            }} toForget={() => {
                setLogin(false);
                setVisible(true);
            }
            } hasLogin={hasLogin} />
        }
    </div>
}
export async function getServerSideProps(context) {
    const cookies = context.req.headers.cookie;
    //////////////////////////////////console.log("-----------");
    // //////////////////////////////////console.log(context.req.headers.cookie.split('=')[1]);

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
    const data = await response.json()
    let sc;
    let res;
    let i;
    if (context.req.headers.cookie) {
        res = context.req.headers.cookie.split(';');
        let _res = res.filter(item => {
            if (item.trim().split("=")[0] === "token")
                return item;
        })
        if (_res.length) {
            i = _res[0].trim().split("=")[1];
        } else i = null;
    }
    if (i) {
        let sc_res = await fetch(
            `${constant.api_url}/api/cart/index`,
            {
                headers: {
                    Authorization: `Bearer ${i}`,
                    "Content-Type": "application/json",
                    "Access-Control-Request-Method": "POST",
                    "Access-Control-Request-Headers": "Content-Type",
                },
                mode: 'cors',
            }
        )
        sc = await sc_res.json();
        if (sc.code === 401) {
            sc.data = [];
        }
    } else {
        sc = { data: [], code: 401 };
    }



    return {
        props: {
            cateList: data.data,
            shopCar: sc,
        },
    };
}


