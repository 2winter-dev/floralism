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
    // ////////////////////console.log(Cookies.get('token'));
    // ////////////////////console.log("============");
    // ////////////////////console.log(shopCar.data);
    const [selected, setSelected] = useState([]);
    const [selAll, setSelAll] = useState(false);
    const [sc, setSc] = useState(shopCar.data);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [visible, setVisible] = useState(false);
    const [total_money, setTotal_money] = useState(0);
    const [total_num, setTotal_num] = useState(0);
    const [textArea, setTextArea] = useState("");
    const [type, setType] = useState(1);
    const [flag, setFlag] = useState(false);
    const [date, setDate] = useState("");

    // if (shopCar.code === 401) {
    //    Cookies.remove('token');
    // }
    const updateNum = useMutation({
        mutationFn: (data) => m_api.changeShopCarNumber(data),
        mutationKey: ['updateNumber'],
    })

    const ToUpdate = (item, index, value) => {
        ////////////////console.log(value);
        if (value <= 0) {
            toast.error("不能少於1");
            return;
        }
        updateNum.mutate({ id: item.id, num: value, cookie: Cookies.get("token") }, {
            onSuccess: async (res) => {
                // let _res = await res.json();
                if (res.code === 401) {
                    Cookies.remove("token");
                    location.reload();
                } else if (res.code === 1) {
                    let arr = sc;
                    arr[index].num = value;
                    setSc([...arr]);
                } else {
                    toast.error(res.msg);
                }
            },
            onError: (res) => {
                if (res instanceof Error) {
                    toast.error(res.msg);
                } else toast.error(JSON.stringify(res.msg))
            }
        })
    }

    useEffect(() => {
        if (Cookies.get('token')) {
            // location.reload();
        }
    }, [login])
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
        let arr = selected;
        let money = total_money;
        let res = selected.findIndex((item, index) => item === data.id);
        if (res === -1) {
            ////////////////////console.log("未被选中，选中");
            setSelected([...arr, data.id]);
            money += data.num * data.price;
            if (arr.length + 1 === sc.length) {
                setSelAll(true);
            }
        } else {
            ////////////////////console.log("已被选中，取消,位置:" + res);
            let _res = arr.splice(res, 1)
            ////////////////////console.log(_res, arr);
            money -= data.num * data.price;
            setSelected([...arr]);
            setSelAll(false);
        }
        ////////////////////console.log(arr.length, sc.length);
        // culTotalPrice();
    }
    const deleteProduct = () => {
        ////////////////////console.log(selected);
        deleteProductionFromShopCar.mutate({ ids: selected.join(","), cookie: Cookies.get('token') }, {
            onSuccess: async (res) => {
                // ////////////////////console.log(await res.text())
                // let res = await res.json();
                ////////////////////console.log(_res);
                if (res.code === 1) {
                    let arr = sc;
                    selected.map((item) => {
                        arr.splice(sc.findIndex((it, index) => item === it.id), 1);
                    })
                    setSc([...arr]);
                    setSelected([]);
                    toast.success(res.msg);

                } else if (res.code === 401) {
                    Cookies.remove('token');
                } else if (!res.code) {

                    toast.error(res.msg);
                }

            },
            onError: (res) => {
                toast.error("刪除失敗")
            }
        })

    }
    const selectedAll = () => {
        if (selAll) {
            setSelAll(false);
            setSelected([]);

        } else {
            let m = 0;
            let res = sc.map((item, index) => {
                m += item.num * item.price;
                return item.id;
            })

            setSelAll(true);
            setSelected([...res]);
        }
    }
    useEffect(() => {
        let money = 0;
        let num = 0;
        sc.map((item, index) => {
            if (selected.findIndex((it, index) => it === item.id) != -1) {
                money += parseFloat((item?.num * item?.price).toFixed(2));
                ////////////////console.log(money)
                num += parseInt(item.num);
            }
        })
        !sc.length && setSelAll(false);
        setTotal_money(money.toFixed(2));
        setTotal_num(num);
        //  ////////////////////console.log(money);
    }, [sc, selected])

    const limitTime = () => {
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        ////////////////////console.log(year + '-' + (month < 10 ? "0" + month : month) + "-" + day);
        return year + '-' + (month < 10 ? "0" + month : month) + "-" + day

    }

    const toCreateOrder = () => {
        if (selected.length) {
            if (date !== "") {
                // Cookies.set("shopCar",);
                let res = selected.map((item, index) => {
                    ////////////////////console.log(item);
                    return sc.filter((it, index) => {
                        ////////////////////console.log(it);
                        if (it.id === item) {
                            return item;
                        }
                    })
                })
                // ////////////////////console.log();
                // Cookies.set("shopCar",JSON.stringify(res.flat(1)));
                Router.replace({
                    pathname: '/selectMethod',
                    query: {
                        cart_ids: selected.join(','),
                        amount: total_money,
                        payment_amount: total_money,
                        deliverydate: date,
                        deliverytype: type,
                        remark: textArea
                    }
                })
            } else {
                toast.error("請選擇時間")
            }

        } else {
            toast.error("請選擇商品");
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
                                    sc.length ? sc.map((item, index) => {
                                        return (<tbody key={index}>

                                            <tr className={styles.tr_padding} style={{ height: 20 }}>
                                                <td className={styles.tr_padding} colSpan={4} ></td>
                                            </tr>
                                            <tr className={styles.tr_padding} style={{ backgroundColor: 'rgb(245,245,245)', fontSize: 14 }}>
                                                <td className={`${styles.tr_padding} ${styles.order_desc}`} colSpan={4} >
                                                    <div style={{ display: 'flex' }}>
                                                        <div>
                                                            {item?.flower_category_name}
                                                        </div>
                                                        <div style={{ marginLeft: 12 }}>
                                                            {item?.flower_specs_name}
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td style={{ fontSize: 14 }} className={`${styles.tr_padding} ${styles.first_column}`}>
                                                    <input type='checkbox' onClick={() => changeStatus(item)} onChange={() => null} checked={selected.some((it, ii) => it === item.id)} style={{ width: 15, height: 15, marginRight: 12 }} />
                                                </td>
                                                <td className={`${styles.tr_padding} ${styles.first_column}`} >

                                                    <div style={{ display: 'flex', alignItems: 'center', wordBreak: 'break-all' }}>
                                                        <div className={styles.product_img}>
                                                            <img alt="" src={`${item.coverimage}`} style={{ width: '100%' }} />
                                                        </div>
                                                        <div style={{ flex: 1 }}>
                                                            <div className={styles.product_title} style={{ fontSize: 14, width: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', wordWrap: 'break-word' }}>
                                                                {item?.productname}
                                                            </div>
                                                            {/* <div>×</div> */}
                                                            <div style={{ display: 'flex', alignItems: 'center', textAlign: 'center', width: 60 }}>
                                                                <div onClick={(e) => ToUpdate(item, index, item.num - 1)} style={{ flex: 1, border: "1px solid black", borderRight: 'none', borderTopLeftRadius: 4, cursor: 'pointer', borderBottomLeftRadius: 4 }}>-</div>
                                                                <span style={{ border: "1px solid black", fontSize: 16, width: '40%' }}>{item.num}</span>
                                                                <div onClick={(e) => ToUpdate(item, index, item.num + 1)} style={{ flex: 1, border: "1px solid black", borderLeft: 'none', borderTopRightRadius: 4, cursor: 'pointer', borderBottomRightRadius: 4 }}>+</div>
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
                                            <td colSpan={3} rowSpan={4} style={{ fontSize: 18, fontWeight: 'bold' }}>{Cookies.get("token") ? "購物車爲空" : "请先登录"}</td>
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
                            <textarea onInput={(e) => setTextArea(e.target.value)} style={{ width: '100%', resize: 'none', paddingLeft: 10, height: 100, borderRadius: 8, marginTop: 12 }} placeholder='給賣家備注的信息'>

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
        {!login && <Toaster
            position="top-center"
        />}
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
    ////////////////////console.log("-----------");
    // ////////////////////console.log(context.req.headers.cookie.split('=')[1]);

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


