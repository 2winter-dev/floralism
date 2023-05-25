
import DynamicComponent from "../component/Dynamic";
import { useEffect, useState } from "react";
import LoginPannel from "../component/LoginPannel";
import ForgetPassword from "../component/ForgetPassword";
import RegisterPannerl from "../component/ResgisterPannel";
import Footer from "../component/Footer";
import { constant } from "@/constant";
import { useRouter } from "next/router";
import styles from '@/styles/selectMethod.module.css'
import AddressPannel from "../component/addressPannel";
import { useMutation, useQueries } from "@tanstack/react-query";
import dynamic from 'next/dynamic'
import m_api from "@/m_api";
import Cookies from "js-cookie";
import { Radio } from "@nextui-org/react";


export default function selectMethod(props) {
    const stripe = require('stripe')(props.secretKey);
    console.log("000000000");
    console.log(stripe);      
    const DynamicComponentWithNoSSR = dynamic(
      () => import('./DynamicStripe'),
      { ssr: false }
    )

    const { deliverytype, deliverydate, cart_ids, remark, amount, payment_amount } = useRouter().query
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [visible, setVisible] = useState(false);
    const [page, setPage] = useState(1);//第一頁:選擇地址，第二頁選擇支付方式，第三頁結果。
    const [process, setProcess] = useState(1);//0尚未進行，1進行中，2完成

    const [type, setType] = useState(0);
    const [item, setItem] = useState({});
    const [add_vis, setAdd_vis] = useState(false);
    const [payment, setPayment] = useState("");
    const [add, setAdd] = useState("");
    const [url,setUrl]=useState("")
    // const 

    const setDefault = useMutation({
        mutationKey: ['setDefault'],
        mutationFn: (data) => m_api.setDefaultAddress(data)
    })
    const createOrder = useMutation({
        mutationKey: ['CreateOrder'],
        mutationFn: (data) => m_api.createOrder(data)
    })

    const setPosition = (id) => {
        console.log(id);
        setAdd(id);
        setDefault.mutate({ id, cookie: Cookies.get('token') }, {
            onSuccess: async (res) => {
                let _res = await res.json();
                if (_res.code === 401) {
                    Cookies.remove('token');
                    location.reload();
                } else if (_res.code === 1) {
                    location.reload();
                } else {
                    alert(_res.msg);
                }
            }
        })
    }

    useEffect(() => {
        if (props.addList && Cookies.get("token")) {
            let res = props.addList.data.filter((item) => {
                console.log(item);
                if (item.is_default) {
                    return item;
                }
            })
            setAdd(res[0].id);
        }else{
            alert("addList有问题")
        }
    }, [])



    const ToCreateOrder = () => {

        if (payment !== "" && add !== "") {
            console.log(deliverytype, deliverydate, cart_ids, remark, amount, payment_amount, add)
            createOrder.mutate({
                deliverytype,
                deliverydate,
                cart_ids,
                remark,
                amount,
                payment_amount,
                address_id: add,
                payment_type: payment,
                cookie: Cookies.get('token')
            }, {
                onSuccess: async (res) => {
                    let _res = await res.json();
                    console.log(_res.data);
                    if (_res.code === 401) {
                        Cookies.remove("token");
                        location.reload();
                    } else if (_res.code === 1) {
                        console.log(_res);
                        if(payment==="paypal"){
                            setUrl(_res.data.payment_info.approval_url)
                        }
                        setPage(2);
                    } else {
                        alert(_res.msg);
                    }
                },
                onError: (res) => {
                    alert("上傳失敗");
                }
            })
        }
    }
   useEffect(()=>{
    console.log("==============");
     console.log(createOrder.data);
   },[createOrder])

    return (<div>
        <DynamicComponent cateList={props.cateList} setLogin={setLogin} />
        <div className={styles.total_layout} style={{ backgroundColor: 'rgb(246,248,250)' }}>
            <div>
                <div style={{ display: "flex", justifyContent: 'space-around', marginLeft: '5%', marginRight: '5%' }}>
                    <div style={{ flex: 1 }}></div>
                    <div>選擇地址</div>
                    <div style={{ flex: 1 }}></div>
                    <div>選擇支付方式</div>
                    <div style={{ flex: 1 }}></div>
                    <div>支付結果</div>
                    <div style={{ flex: 1 }}></div>
                </div>
                <div style={{ display: "flex", justifyContent: 'space-around', alignItems: 'center' }}>
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
                        page >= 4 ? styles.complete : styles.wrong
                    } style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: 'red' }}></div>
                    <div className={
                        page >= 4 ? styles.complete : styles.wrong
                    } style={{ height: 4, flex: 1, background: 'red' }}></div>
                </div>
            </div>
            <div style={{ marginTop: 24 }}>
                {
                    page === 1 && deliverytype ?
                        <div className={styles.column_control} style={{ display: 'flex' }}>
                            <div style={{ flex: 1, marginRight: 12, backgroundColor: 'white', padding: '3%', borderRadius: 8, marginRight: 12 }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                                    <div className={styles.title} >選擇地址</div>
                                    <div onClick={() => {
                                        setAdd_vis(true);
                                        setType(0);
                                    }} style={{ cursor: 'pointer' }}>新增地址&gt;&gt;</div>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {
                                        props.addList.data.length ? props.addList.data.map((item, index) => {
                                            return (<div key={item.id} className={styles.addressItem} style={{ height: 180 }}>
                                                <div className={item.is_default ? styles.check : styles.uncheck} style={{ width: '10%' }}>

                                                </div>
                                                <div onClick={() => setPosition(item.id)} className={styles.addressItemDetail} style={{ paddingLeft: 4 }}>
                                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                                        <div style={{ fontSize: 18, fontWeight: 'bold' }}>{item.name}</div>
                                                        <div style={{ marginLeft: 10 }}>收</div>
                                                    </div>
                                                    <div style={{ marginTop: '3%' }}>詳細地址:{item.location}</div>
                                                    <div style={{ marginTop: '3%' }}>聯係電話:{item.mobile}</div>
                                                    <div onClick={(e) => e.stopPropagation()} style={{ position: 'absolute', bottom: 5, display: 'flex', alignItems: 'center', right: 5 }}>
                                                        {
                                                            item.is_default ?
                                                                <span style={{ marginRight: 12 }} className={`iconfont`}>&#xe798;</span> :
                                                                <span onClick={() => setPosition(item.id)} style={{ marginRight: 12 }} className={`iconfont`}>&#xe799;</span>
                                                        }
                                                        <span onClick={(e) => {
                                                            console.log("刪除");

                                                            e.stopPropagation();
                                                        }} style={{ marginRight: 12, fontSize: 14 }} className={`iconfont`} >&#x34b2;</span>
                                                        <span onClick={(e) => {
                                                            setAdd_vis(true);
                                                            setType(1);
                                                            setItem(item);
                                                            e.stopPropagation();
                                                        }} style={{ fontSize: 15 }} className={`iconfont`} >&#xe61e;</span>
                                                    </div>

                                                </div>
                                            </div>)
                                        }) : props.addList.code === 401 ? <div style={{ marginTop: 24, width: '100%', textAlign: 'center' }}>登錄失效，請重新登錄</div> : <div style={{ marginTop: 24, width: '100%', textAlign: 'center' }}>暫無數據，請先添加</div>
                                    }
                                </div>
                                <div>
                                    <div className={styles.title} >支付方式</div>
                                    <div>
                                        <Radio.Group onChange={setPayment} >
                                            <div className={styles.selectPayment} style={{ padding: 8, marginTop: 8 }}>
                                                <Radio value="paypal" >
                                                    <img src="/paypal.png" style={{ height: 80, marginRight: 8 }} /> paypal
                                                </Radio>
                                            </div>
                                            <div className={styles.selectPayment} style={{ padding: 8, marginTop: 8 }}>
                                                <Radio value="stripe" >
                                                    <img src="/stripe.png" style={{ height: 80, marginRight: 8 }} />stripe</Radio>
                                            </div>
                                        </Radio.Group>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.rightContain} style={{ backgroundColor: 'white', padding: '3%', borderRadius: 8 }}>
                                <div className={styles.title}>訂單商品</div>
                                {
                                    props.goodsList && props.goodsList.map((item, index) =>
                                        <div key={item.id} style={{ display: 'flex', alignItems: 'center', marginTop: 24 }}>
                                            <img src={item.coverimage} style={{ width: '30%', marginRight: 12 }} />
                                            <div>
                                                <div style={{ fontSize: 18, height: 40, width: '100%', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.productname}</div>
                                                <div style={{ fontSize: 12, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.cardtype ? "需要心意卡" : "無需心意卡"}</div>
                                            </div>
                                            <div style={{ textAlign: 'center' }}>
                                                <div>${item.price}</div>
                                                <div>×{item.num}</div>
                                            </div>
                                        </div>
                                    )
                                }
                                <div style={{ marginTop: 12 }}>總價:${amount}</div>
                                <div style={{ marginTop: 12 }}>應付價格:${payment_amount}</div>
                                <div style={{ display: 'flex', marginTop: 24, alignItems: 'center', justifyContent: 'center' }}>
                                    <div onClick={() => ToCreateOrder()} className={styles.new_Step}>確認訂單</div>
                                </div>
                            </div>
                        </div>
                        :
                        page === 2 && (payment==="stripe" ?<DynamicComponentWithNoSSR />:
                        <a href={`${url}`} >checkout</a>)
                      
                }


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
        {
            <AddressPannel type={type} item={item} visible={add_vis} close={() => setAdd_vis(false)} />
        }
    </div>)
}


export async function getServerSideProps(context) {
    console.log(context.query);
    const response = await fetch(
        `${constant.api_url}/api/flowercategory/index`
    );
    let data = await response.json();


    // let res;
    let i, sc, res;
    let add_data;
    let goods_data;
    if (context.req.headers.cookie) {
        res = context.req.headers.cookie.split(';');
        let _res = res.filter(item => {
            console.log(item.trim().split("=")[0]);
            if (item.trim().split("=")[0] === "token")
                return item;
        })
        if (_res.length) {
            i = _res[0].trim().split("=")[1];
        } else i = null;
        //    console.log(_res[0].trim().split("=")[1]);
    }
    if (i) {
        console.log("進來了");
        const add_response = await fetch(
            `${constant.api_url}/api/address/index`, {
            headers: {
                Authorization: `Bearer ${i}`
            }
        }
        )

        const goods_list_response = await fetch(
            `${constant.api_url}/api/cart/detail?ids=${context.query.cart_ids}`, {
            headers: {
                Authorization: `Bearer ${i}`
            }
        }
        );
        goods_data = await goods_list_response.json();
        console.log("=========");

        add_data = await add_response.json();
    } else {
        add_data = { data: [], code: 401 };
        goods_data = { data: [], code: 401 };
    }
    console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    console.log(goods_data);
    console.log(add_data);
    return {
        props: {
            cateList: data.data,
            // cateList: [],
            addList: add_data,
            goodsList: goods_data.data,
            publishableKey: `${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
            secretKey:`${process.env.STRIPE_SECRET_KEY}`
        },
    };
}