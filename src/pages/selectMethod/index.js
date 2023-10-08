
import DynamicComponent from "../component/Dynamic";
import { useEffect, useState } from "react";
import LoginPannel from "../component/LoginPannel";
import ForgetPassword from "../component/ForgetPassword";
import RegisterPannerl from "../component/ResgisterPannel";
import Footer from "../component/Footer";
import { constant } from "@/constant";
import { useRouter } from "next/router";
import styles from '@/styles/selectMethod.module.css'
import style from '@/styles/user.module.css';
import AddressPannel from "../component/addressPannel";
import { useMutation, useQueries } from "@tanstack/react-query";
import dynamic from 'next/dynamic'
import m_api from "@/m_api";
import Cookies from "js-cookie";
import Head from "next/head";
import { Radio } from "@nextui-org/react";
import { redirect } from "next/dist/server/api-utils";
// import { ToastContainer, toast } from 'react-toastify';
import toast, { Toaster } from "react-hot-toast";

export default function selectMethod(props) {
    const stripe = require('stripe')(props.secretKey);
    const router = useRouter();
    // //////////////////////////////////console.log("000000000");
    // //////////////////////////////////console.log(stripe);      
    const DynamicComponentWithNoSSR = dynamic(
        () => import('./DynamicStripe'),
        { ssr: false }
    )

    const { deliverytype, deliverydate, cart_ids, remark, amount, payment_amount } = router.query
    // ////////////////////////////console.log();
    //////////////////////////////console.log("----------");
    //////////////////////////////console.log(deliverytype);
    // //////////////////////////////////console.log(useRouter());
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [visible, setVisible] = useState(false);
    const [shopMess, setShopMess] = useState(props.shopList[0])
    const [addList, setAddList] = useState(props.addList.data)
    const [store, setStore] = useState(-1);
    const [flag, setFlag] = useState(false);
    const [page, setPage] = useState(Number(props.page) ?? 1);//第一頁:選擇地址，第二頁選擇支付方式，第三頁結果。
    const [process, setProcess] = useState(1);//0尚未進行，1進行中，2完成

    const [type, setType] = useState(0);
    const [item, setItem] = useState({});
    const [add_vis, setAdd_vis] = useState(false);
    const [payment, setPayment] = useState("");
    const [add, setAdd] = useState("");
    const [url, setUrl] = useState("");
    const [goodsList, setGoodsList] = useState([]);


    const [order, setOrder] = useState({});
    // const 

    const setDefault = useMutation({
        mutationKey: ['setDefault'],
        mutationFn: (data) => m_api.setDefaultAddress(data)
    })
    const createOrder = useMutation({
        mutationKey: ['CreateOrder'],
        mutationFn: (data) => m_api.createOrder(data)
    })
    const NewCreatOrder = useMutation({
        mutationFn: ['NewCreatOrder'],
        mutationFn: (data) => m_api.addOrder(data)
    })
    const deleteAddress = useMutation({
        mutationFn: (data) => m_api.deleteAddress(data),
        mutationKey: ['deleteAddress'],
    })
    const addOrder = useMutation({
        mutationFn: (data) => m_api.addOrder(data),
        mutationKey: ['addOrder'],
    })
    const toDelte = (item) => {
        deleteAddress.mutate({ id: item, cookie: Cookies.get('token') }, {
            onSuccess: async (res) => {
                // let _res = await res.json();
                if (res.code === 401) {
                    Cookies.remove('token');
                    location.reload();
                } else if (res.code === 1) {
                    location.reload();
                } else {
                    toast.error(res.msg);
                }
            },
            onError: (res) => {
                toast.error("刪除失敗")
            }
        })
    }
    const changeDefault = (id) => {
        let m_list = addList;
        let res = m_list.map((item) => {
            if (item.id === id) {
                item.is_default = true;
            } else item.is_default = false;
        })
        setAddList([...m_list])
    }
    const setPosition = (id) => {
        // //////////////////////////////////console.log(id);
        setAdd(id);
        setDefault.mutate({ id, cookie: Cookies.get('token') }, {
            onSuccess: async (res) => {
                // let _res = await res.json();
                if (res.code === 401) {
                    Cookies.remove('token');
                    location.reload();
                } else if (res.code === 1) {
                    // location.reload();
                    changeDefault(id);
                } else {
                    toast.error(res.msg);
                }
            }
        })
    }

    useEffect(() => {
        if (props?.addList && Cookies.get("token")) {
            let res = props.addList?.data.filter((item) => {
                // //////////////////////////////////console.log(item);
                if (item.is_default) {
                    return item;
                }
            })
            res.length && setAdd(res[0].id);
        } else {
            toast.error("登陸失效");
            router.replace('/');
        }
    }, [])
    const ToCreateOrder = () => {
        setFlag(true);
        let shopcar = JSON.parse(localStorage.getItem("shopcar")) ?? [];
        let res = [];
        if (shopcar.length) {
            shopcar.map((item, index) => {
                if (item.isSelected) {
                    res.push({
                        flower_id: item.flower_id,
                        flower_specs_id: item.id,
                        flower_category_id: item.flower_category_id,
                        productname: item.flowername,
                        coverimage: item.flowerimage,
                        price: item.price,
                        num: item.number,
                        cardtype: item.cardtype,
                        cardcontent: item.cardcontent,
                    })
                }
            })
        }
        // let formData = new FormData();
        // formData.append("deliverytype", deliverytype);
        // formData.append("deliverydate", deliverydate)
        // formData.append("remark", remark);
        // formData.append("amount", amount)
        // formData.append("store_id", deliverytype?.toString() === "1" ? "" : props.shopList[store].id);
        // formData.append("payment_amount", payment_amount)
        // formData.append("address_id", add);
        // formData.append("payment_type", payment)
        // formData.append("flowers",JSON.stringify(res))
        // console.log(formData.get("flowers"));
        if (payment !== "" && add !== "") {
            NewCreatOrder.mutate(
                {
                    deliverytype,
                    deliverydate,
                    remark,
                    amount,
                    store_id: deliverytype?.toString() === "1" ? null : props.shopList[store].id,
                    payment_amount,
                    address_id: add,
                    payment_type: payment,
                    cookie: Cookies.get('token'),
                    flowers: JSON.stringify(res)
                }
                , {
                    onSuccess: async (res) => {

                        // let _res = await res.json();
                        setFlag(!true);
                        // let _res = await res.json();
                        if (res.code === 401) {
                            Cookies.remove("token");
                            location.reload();
                        } else if (res.code === 1) {
                            //////////////////////console.log(res);
                            setFlag(false);
                            if (payment === "paypal") {
                                setUrl(res.data.payment_info.approval_url)
                            }
                            let i=shopcar.filter((item,index)=>{
                                if(!item.isSelected){
                                    return item;
                                }
                            })
                            localStorage.setItem("shopcar",JSON.stringify(i));
                            setPage(2);
                        } else {
                            toast.error(res.msg);
                        }


                    },

                    onError: (res) => {
                        setFlag(false);
                        toast.error("上傳失敗");
                        // setFlag(!true);
                    }

                })
        } else {
            setFlag(false);
        }

    }

    useEffect(() => {
        console.log(localStorage.getItem("shopcar") ?? [])
        let arr = JSON.parse(localStorage.getItem("shopcar"));
        let res = [];
        if (arr.length) {
            res = arr.filter((item, index) => {
                if (item.isSelected) {
                    return item;
                }
            })
        }
        setGoodsList(res ?? [])
    }, [])
    console.log(props.shopList);
    return (<div>
        <Head>
            <meta title="Floralism訂單結算" />
            <title>Floralism 訂單結算</title>
        </Head>
        <DynamicComponent cateList={props.cateList} setLogin={setLogin} />
        <div className={styles.total_layout} style={{ backgroundColor: 'rgb(246,248,250)' }}>
            <div>
                <div style={{ display: "flex", justifyContent: 'space-around', marginLeft: '2%', marginRight: '2%' }}>
                    <div style={{ flex: 1 }}></div>
                    <div>確認訂單</div>
                    <div style={{ flex: 1 }}></div>
                    <div>前往支付</div>
                    <div style={{ flex: 1 }}></div>
                    <div>支付結果</div>
                    <div style={{ flex: 1 }}></div>
                </div>
                <div style={{ display: "flex", justifyContent: 'space-around', alignItems: 'center', marginTop: 12 }}>
                    <div className={
                        page >= 1 ? styles.complete : styles.wrong
                    } style={{ height: 4, flex: 1 }}></div>
                    <div className={
                        page >= 2 ? styles.complete : styles.wrong
                    } style={{ width: 20, height: 20, borderRadius: 50 }}></div>
                    <div className={
                        page >= 2 ? styles.complete : styles.wrong
                    } style={{ height: 4, flex: 1 }}></div>
                    <div className={
                        page >= 3 ? styles.complete : styles.wrong
                    } style={{ width: 20, height: 20, borderRadius: 50 }}></div>
                    <div className={
                        page >= 3 ? styles.complete : styles.wrong
                    } style={{ height: 4, flex: 1 }}></div>
                    <div className={
                        page >= 3 ? styles.complete : styles.wrong
                    } style={{ width: 20, height: 20, borderRadius: 50 }}></div>
                    <div className={
                        page >= 3 ? styles.complete : styles.wrong
                    } style={{ height: 4, flex: 1 }}></div>
                </div>
            </div>
            <div style={{ marginTop: 24 }}>
                {
                    page === 1 &&
                    <div className={styles.column_control} style={{ display: 'flex', alignItems: 'flex-start' }}>
                        <div className={styles.media_control} style={{ flex: 1, backgroundColor: 'white', padding: '3%', borderRadius: 8 }}>
                            {
                                deliverytype?.toString() === "1" ? <div>
                                    <div className={styles.title_area} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                        <div className={styles.title} >選擇地址</div>
                                        {/* <div onClick={() => {
                                        setAdd_vis(true);
                                        setType(0);
                                    }} style={{ cursor: 'pointer' }}>新增地址&gt;&gt;</div> */}
                                        <div onClick={() => {
                                            setAdd_vis(true);
                                            setType(0);
                                        }} className={style.addAddress_btn} style={{}}>+ 添加地址</div>
                                    </div>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: 24, maxHeight: 400, overflow: 'auto' }}>
                                        {
                                            addList.length ? addList.map((item, index) => {
                                                return <div key={item.id} className={styles.addressItem} style={{ padding: 14, marginBottom: 12 }}>
                                                    <div onClick={() => setPosition(item.id)} className={styles.addressItemDetail} style={{ paddingLeft: 4, flex: 1 }}>
                                                        <div style={{ display: 'flex', alignItems: 'baseline' }}>
                                                            <div style={{ fontSize: 18, fontWeight: 'bold' }}>{item?.name}</div>
                                                            <div style={{ marginLeft: 10 }}>收</div>
                                                        </div>
                                                        <div style={{ marginTop: 8 }}>{item?.mobile}</div>
                                                        <div style={{ marginTop: 4 }}>{item?.location}</div>

                                                        <div onClick={(e) => e.stopPropagation()} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 12, justifyContent: 'flex-end' }}>
                                                            {
                                                                item.is_default ?
                                                                    <span style={{ marginRight: 12 }} className={`iconfont`}>&#xe798;</span> :
                                                                    <span onClick={() => setPosition(item.id)} style={{ marginRight: 12 }} className={`iconfont`}>&#xe799;</span>
                                                            }
                                                            <span onClick={(e) => {
                                                                // //////////////////////////////////console.log("刪除");
                                                                toDelte(item.id);
                                                                e.stopPropagation();
                                                            }} style={{ marginRight: 12, fontSize: 14 }} className={`iconfont`} >&#x34b2;</span>
                                                            <span onClick={(e) => {
                                                                setAdd_vis(true);
                                                                setType(1)
                                                                setItem(item);
                                                                e.stopPropagation();
                                                            }} style={{ fontSize: 15 }} className={`iconfont`} >&#xe61e;</span>
                                                        </div>

                                                    </div>
                                                </div>
                                            }) : props.addList.code === 401 ? <div style={{ marginTop: 24, width: '100%', textAlign: 'center' }}>登錄失效，請重新登錄</div> : <div style={{ marginTop: 24, width: '100%', textAlign: 'center' }}>暫無數據，請先添加</div>
                                        }
                                    </div>
                                </div> : <div>
                                    <div className={styles.title_area} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                        <div className={styles.title} >選擇門店地址</div>
                                    </div>
                                    <Radio.Group onChange={setStore}>
                                        <div style={{ marginTop: 12, height: 200, overflow: 'auto' }}>
                                            {
                                                props.shopList.map(item => {
                                                    return (<Radio className={styles.shopItem} value={`${item.id}`} key={item.id}>
                                                        <div style={{ display: 'flex', flexDirection: 'column', marginLeft: 12, fontSize: 12 }}>
                                                            <div style={{ fontSize: 14, fontWeight: 700 }}>{item?.storename}</div>
                                                            <div>地址:{item?.address}</div>
                                                            <div>聯係人:{item?.name} {"電話:" + item?.mobile}</div>
                                                        </div>
                                                    </Radio>)
                                                })
                                            }
                                        </div>
                                    </Radio.Group>
                                </div>}
                            <div className={styles.title_area} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 24 }}>
                                <div className={styles.title} >支付方式</div>
                            </div>
                            <div style={{ marginTop: 24 }}>
                                <Radio.Group onChange={setPayment} >
                                    <div className={styles.selectPayment} style={{ padding: 8, marginTop: 8 }}>
                                        <Radio value="paypal" >
                                            <img alt="" src="/paypal.png" style={{ height: 80, marginRight: 16, marginLeft: 16, borderRadius: 4 }} /> <span style={{ fontWeight: 700, fontSize: 16 }}>使用paypal 支付</span>
                                        </Radio>
                                    </div>
                                    {/* <div className={styles.selectPayment} style={{ padding: 8, marginTop: 8 }}>
                                                <Radio value="stripe" >
                                                    <img alt="" src="/stripe.png" style={{ height: 80, marginRight: 8 }} />stripe</Radio>
                                            </div> */}
                                </Radio.Group>
                            </div>
                        </div>
                        <div className={styles.rightContain} style={{ backgroundColor: 'white', padding: '3%', borderRadius: 8 }}>
                            <div className={styles.title_area}>
                                <div className={styles.title}>訂單商品</div>
                            </div>
                            <div className={styles.title_area}>
                                {
                                    goodsList && goodsList.map((item, index) =>
                                        <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginTop: 24 }}>
                                            <img alt="" src={item.flowerimage} style={{ width: '30%', marginRight: 12 }} />
                                            <div style={{ width: '70%' }}>
                                                <div style={{ fontSize: 14, width: '90%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.flowername}</div>
                                                {/* <div style={{ fontSize: 12, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.cardtype ? "需要心意卡" : "無需心意卡"}</div> */}
                                                <div style={{ fontSize: 12, marginTop: 8 }}>${item.price}</div>
                                                <div>×{item.number}</div>
                                            </div>
                                            {/* <div style={{ textAlign: 'right' }}>
                                                <div style={{ fontSize: 12 }}>${item.price}</div>
                                                <div>×{item.num}</div>
                                            </div> */}
                                        </div>
                                    )
                                }
                            </div>
                            <div className={styles.title_area}>
                                <div style={{ marginTop: 8, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                                    <div>商品總價</div>
                                    <div>${amount}</div>
                                </div>
                                <div style={{ marginTop: 8, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                                    <div>應付價格:</div>
                                    <div>${payment_amount}</div>
                                </div>
                                <div style={{ marginTop: 8, display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>

                                    <div style={{ fontWeight: 700, fontSize: 18 }}>總價:</div>
                                    <div style={{ color: '#dc3545', fontWeight: 700, fontSize: 18 }}>HK${payment_amount}</div>
                                </div>
                            </div>
                            <div style={{ display: 'flex', marginTop: 12, alignItems: 'center', justifyContent: 'center' }}>
                                {flag ? <div className={styles.new_Step} style={{ backgroundColor: 'rgba(0,0,0,0.4)' }} >確認訂單</div> : <div onClick={() => ToCreateOrder()} className={styles.new_Step}>確認訂單</div>}
                            </div>
                        </div>
                    </div>



                }
                {
                    page === 2 && (payment === "stripe" ? <DynamicComponentWithNoSSR /> :
                        <div style={{ display: "flex", flexDirection: 'column', justifyContent: 'center', textAlign: 'center', padding: '5%', borderRadius: 8, backgroundColor: 'white' }}>
                            <div style={{ fontSize: 24, fontWeight: 700 }}>
                                訂單創建成功，請支付
                            </div>
                            <div className={styles.tt_layout} style={{ textAlign: 'center', marginTop: 12, marginBottom: 12, display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: 16, backgroundColor: 'rgb(255,250,240)' }}>
                                <div style={{ display: 'flex', flex: 1, alignItems: 'baseline' }}>
                                    <div>支付方式:</div>
                                    <div style={{ fontSize: 17, fontWeight: 600 }}>paypal</div>
                                </div>
                                <div style={{ display: 'flex', flex: 1, alignItems: 'baseline' }}>
                                    <div>總價:</div>
                                    <div style={{ fontSize: 17, fontWeight: 600 }}>HK${payment_amount}</div>
                                </div>
                                <div style={{ display: 'flex', flex: 1, alignItems: 'baseline' }}>
                                    <div>狀態:</div>
                                    <div style={{ fontSize: 17, fontWeight: 600 }}>等待支付</div>
                                </div>
                            </div>
                            <div
                                style={{
                                    paddingLeft: 24,
                                    paddingRight: 24,
                                    paddingTop: 6,
                                    paddingBottom: 6,
                                    cursor: 'pointer',
                                    marginTop: 12,
                                    width: "50%",
                                    color: '#fff',
                                    margin: '10px 25%',
                                    background: '#1e80ff',
                                    borderRadius: 4
                                }}
                                onClick={() => router.replace(`${url}`)}
                            >
                                <span className={`iconfont`}>&#xea24;</span>點此前往支付
                            </div>
                        </div>)
                }
                {
                    page === 3 && (<div style={{ width: '100%', height: 200, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>{
                        router.query?.type === "success" ? <div style={{ marginTop: 24, fontSize: 28, fontWeight: 600 }}>付款成功</div>
                            :
                            router.query?.type === "fail" ? <div style={{ marginTop: 24, fontSize: 28, fontWeight: 600 }}>付款失敗</div>
                                : <div style={{ marginTop: 24, fontSize: 28, fontWeight: 600 }}>用戶取消支付</div>
                    }
                        <div style={{ marginTop: 24, cursor: 'pointer' }} onClick={() => router.replace("/")}>返回首頁</div>
                    </div>
                    )
                }
            </div>
        </div>
        {/* {(!login || !add_vis) && <ToastContainer />} */}
        {/* {!login && <Toaster
            position="top-center"
        />} */}
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
            <AddressPannel type={type} item={item} visible={add_vis} close={() => setAdd_vis(false)} />
        }
    </div>)
}


export async function getServerSideProps(context) {
    ////////////////////////////console.log(context.query.page);
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
    let data = await response.json();


    // let res;
    let s_list;
    let i, sc, res;
    let add_data;
    let goods_data;


    if (context.req.headers.cookie) {
        res = context.req.headers.cookie.split(';');
        let _res = res.filter(item => {
            //////////////////////////////////console.log(item.trim().split("=")[0]);
            if (item.trim().split("=")[0] === "token")
                return item;
        })
        if (_res.length) {
            i = _res[0].trim().split("=")[1];
        } else i = null;
        //    //////////////////////////////////console.log(_res[0].trim().split("=")[1]);
    }
    if (i) {
        //////////////////////////////////console.log("進來了");
        const add_response = await fetch(
            `${constant.api_url}/api/address/index`, {
            headers: {
                Authorization: `Bearer ${i}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type",
            },
            mode: 'cors',
        }
        )


        const goods_list_response = await fetch(
            `${constant.api_url}/api/cart/detail?ids=${context.query.cart_ids}`, {
            headers: {
                Authorization: `Bearer ${i}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type",
            },
            mode: 'cors',
        }
        );

        if (context.query.deliverytype) {
            const shopList = await fetch(`${constant.api_url}/api/store/index`, {
                headers: {
                    Authorization: `Bearer ${i}`,
                    "Content-Type": "application/json",
                    "Access-Control-Request-Method": "GET,POST",
                    "Access-Control-Request-Headers": "Content-Type",
                },
                mode: 'cors',
            })
            if (shopList.status !== 200) {
                s_list = { data: [], code: 0 }
            } else s_list = await shopList.json();
        }
        if (add_response.status !== 200) {
            add_data = { data: [], code: 0 };
        } else add_data = await add_response.json();
        if (goods_list_response.status != 200) {
            goods_data = { data: [], code: 0 }
        } else goods_data = await goods_list_response.json();
        //////////////////////////////////console.log("=========");

    } else {
        add_data = { data: [], code: 401 };
        goods_data = { data: [], code: 401 };
        s_list = { data: [], code: 401 };
    }



    if (context.query?.page >= "3") {
        ////////////////////////////console.log("不为3");
        if (!goods_data.code) {
            return {
                redirect: {
                    permanent: false,
                    destination: '/shopCar/shopCar',
                }
            }
        }
    }




    //////////////////////////////////console.log(add_data);
    //////////////////////////////console.log(s_list);
    return {
        props: {
            cateList: data.data,
            // cateList: [],
            addList: add_data,
            // goodsList: context.query?.goodsList,
            publishableKey: `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
            secretKey: `${process.env.STRIPE_SECRET_KEY}`,
            shopList: s_list?.data?.length ? s_list?.data : [
            ],
            page: context.query?.page ?? 1,
        },
    };
}