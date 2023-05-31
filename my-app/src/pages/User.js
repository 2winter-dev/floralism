import Header from "./component/Header";
import Footer from './component/Footer';
import styles from '@/styles/user.module.css';
import { redirect } from "next/dist/server/api-utils";
import { constant } from '@/constant/index';
import { useEffect, useState } from "react";
import style from '@/styles/selectMethod.module.css'
import dynamic from "next/dynamic";
import DynamicComponent from "./component/Dynamic";
import { useMutation } from "@tanstack/react-query";
import m_api from "../m_api";
import { useRouter } from "next/router";
import AddressPannel from "./component/addressPannel";
import Cookies from "js-cookie";
import LoginPannel from "./component/LoginPannel";
export default function User(props) {
    const router = useRouter();
    const [type, setType] = useState("message");
    const [item, setItem] = useState({});

    const [username, setUsername] = useState(props.user_data?.username);
    const [email, setEmail] = useState(props.user_data?.email);
    const [mobile, setMobile] = useState(props.user_data?.mobile);

    const [addList, setAddList] = useState(props.addList);
    const [add, setAdd] = useState();
    const [add_type, setAdd_type] = useState();
    const [add_vis, setAdd_vis] = useState(false);
    const [login, setLogin] = useState(false);

    const [orderList, setOrderList] = useState(props.orderList);

    const [orderDetail, setOrderDetail] = useState();
    const setDefault = useMutation({
        mutationKey: ['setDefault'],
        mutationFn: (data) => m_api.setDefaultAddress(data)
    })
    const deleteAddress = useMutation({
        mutationFn: (data) => m_api.deleteAddress(data),
        mutationKey: ['deleteAddress'],
    })
    const fetchOrderDetail = useMutation({
        mutationFn: (data) => m_api.fetchOrderDetail(data),
        mutationKey: ['fetchOrderDetail'],
    })
    const updateUserMess = useMutation({
        mutationFn: (data) => m_api.updateUserMessage(data),
        mutationKey: ['updateUserMess'],
    })


    const delAddress = (id) => {
        let m_list = addList;
        m_list.splice(m_list.findIndex((it, index) => item === it.id), 1);
        setAddList([...m_list]);
        alert("刪除成功");
        //console.log(m_list);
    }

    const changeDefault = (id) => {
        let m_list = addList;
        console.log(m_list);
        let res = m_list.map((item) => {
            console.log(item);
            console.log(id);
            console.log(typeof item.id, typeof id);
            if (item.id === id) {
                item.is_default = true;
            } else {
                item.is_default = false;
            }
        })
        setAddList([...m_list]);
    }

    const toDelte = (item) => {
        let res = confirm('你想要刪除這個地址嗎')
        res && deleteAddress.mutate({ id: item, cookie: Cookies.get('token') }, {
            onSuccess: async (res) => {
                let _res = await res.json();
                if (_res.code === 401) {
                    Cookies.remove('token');
                    location.reload();
                } else if (_res.code === 1) {
                    delAddress(item);
                } else {
                    alert(_res.msg);
                }
            },
            onError: (res) => {
                alert("删除失败")
            }
        })
    }
    const setPosition = (id) => {
        // //////console.log(id);
        console.log("123");
        setAdd(id);
        setDefault.mutate({ id, cookie: Cookies.get('token') }, {
            onSuccess: async (res) => {
                let _res = await res.json();
                if (_res.code === 401) {
                    Cookies.remove('token');
                    location.reload();
                } else if (_res.code === 1) {
                    changeDefault(id);
                } else {
                    alert(_res.msg);
                }
            }
        })
    }

    const updateUserMessage = () => {
        console.log(username, email, mobile);
        updateUserMess.mutate({ username: username.trim(), email: email.trim(), mobile: mobile.trim(), cookie: Cookies.get('token') }, {
            onSuccess: async (res) => {
                let _res = await res.json();
                if (_res.code === 1) {
                    location.reload();
                    console.log(_res);
                    // setUsername(_res.data?.username);
                    // setMobile(_res.data?.mobile);
                    // setEmail(_res.data?.email);
                }
            }
        })
    }

    const OrderDetail = (data) => {
        fetchOrderDetail.mutate({ id: data, cookie: Cookies.get('token') }, {
            onSuccess: async (res) => {
                let _res = await res.json();
                if (_res.code === 1) {
                    //console.log(_res.data);

                    setOrderDetail(_res.data);
                    setType("orderDetail");
                }
                //console.log(_res);
                // //console.log(res);
            },
        })
    }

    useEffect(() => {
        //console.log(orderDetail);
    }, [orderDetail])


    return (<div style={{ backgroundColor: 'rgb(244,244,244)' }}>
         <DynamicComponent cateList={props.cateList} setLogin={setLogin} />
        <div className={styles.main_contain} style={{ marginTop: 24, marginBottom: 46, alignItems: 'flex-start' }}>
            <div className={styles.left_contain}>
                <div className={styles.left_totalPannel}>
                    {/* 头像 */}
                    <div className={styles.avatar_area} style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center', padding: 16 }}>
                        <div className={styles.avatar}>
                            <img src={props.user_data.avatar} style={{ width: '100%' }} />
                        </div>
                        <div style={{ marginTop: 8, fontSize: 18, fontWeight: 700 }}>{username}</div>
                        <div style={{ marginTop: 8 }}>{email}</div>
                        <div style={{ marginTop: 8 }}>{mobile}</div>
                    </div>
                    <div className={styles.border} onClick={() => setType('message')}>
                        <div className={type === 'message' ? `${styles.user_btn} ${styles.choosen}` : `${styles.user_btn}`} style={{ display: 'flex' }}>
                            <div>信息修改</div>
                        </div>
                    </div>
                    <div className={styles.border} onClick={() => setType('address')}>
                        <div className={type === 'address' ? `${styles.user_btn} ${styles.choosen}` : `${styles.user_btn}`} style={{ display: 'flex' }}>
                            <div>地址列表</div>
                        </div>
                    </div>
                    <div className={styles.border} onClick={() => setType('order')}>
                        <div className={type === 'order' ? `${styles.user_btn} ${styles.choosen}` : `${styles.user_btn}`} style={{ display: 'flex' }}>
                            <div>訂單列表</div>
                        </div>
                    </div>
                    <div className={styles.border} onClick={() => {
                        let res = confirm("你確定要退出登陸嗎?");
                        if (res) {
                            Cookies.remove("token");
                            router.replace("/");
                        }

                    }}>
                        <div className={`${styles.user_btn}`} style={{ display: 'flex' }}>
                            <div>退出登錄</div>
                        </div>
                    </div>
                </div>
            </div>
            {
                type !== "orderDetail" && <div className={styles.right_contain}>
                    {
                        type === "message" && <div style={{ display: 'flex',width:'100%', alignItems: 'flex-start', flexDirection: 'column', minHeight: 500 }}>
                            <h5 className={styles.right_contain_title}>信息修改</h5>
                            <div className={styles.total_contain}  style={{ marginTop: 12, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                <div className={styles.message_contain} style={{ marginTop: 24 }}>
                                    username <input onInput={(e) =>setUsername(e.target.value)} value={username} style={{ borderRadius: 4, outline: 'none', paddingLeft: 4, paddingTop: 4, paddingBottom: 4 }} type="text" />
                                </div>
                                <div className={styles.message_contain} style={{ marginTop: 24 }}>
                                    email<input onInput={(e) => setEmail(e.target.value)} value={email} style={{  borderRadius: 4, outline: 'none', paddingLeft: 4, paddingTop: 4, paddingBottom: 4 }} type="text" />
                                </div>
                                <div className={styles.message_contain} style={{ marginTop: 24 }}>
                                    mobile<input onInput={(e) => setMobile(e.target.value)} value={mobile} style={{  borderRadius: 4, outline: 'none', paddingLeft: 4, paddingTop: 4, paddingBottom: 4 }} type="text" />
                                </div>
                                <div style={{display:'flex',justifyContent:'center',width:'100%',alignItems:'center'}}>

                                <div className={styles.submit_btn} onClick={updateUserMessage} style={{ cursor: 'pointer' }}>submit</div>
                                </div>
                            </div>
                        </div>
                    }
                    {
                        type === "address" && <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', minHeight: 500 }}>
                            <h5 className={styles.right_contain_title} style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                                地址列表
                                <div onClick={() => {
                                    setAdd_vis(true);
                                    setAdd_type(0);
                                }} className={styles.addAddress_btn} style={{ marginRight: 14 }}>+ 添加地址</div>
                            </h5>
                            <div style={{ display: 'flex',flexWrap:'wrap', width: '100%' }}>
                                {
                                    addList.length ? addList.map((item, index) => {
                                        return <div key={item.id} className={style.addressItem} style={{ padding: 14, marginRight: 10, marginTop: 10 }}>
                                            {/* <div className={item.is_default ? style.check : style.uncheck} style={{ width: '10%' }}>
                                    </div> */}
                                            <div onClick={() => setPosition(item.id)} className={style.addressItemDetail} style={{ paddingLeft: 4, flex: 1 }}>
                                                <div style={{ display: 'flex', alignItems: 'baseline' }}>
                                                    <div style={{ fontSize: 18, fontWeight: 'bold' }}>{item?.name}</div>
                                                    <div style={{ marginLeft: 10 }}>收</div>
                                                </div>
                                                <div style={{ marginTop: 8 }}>{item?.mobile}</div>
                                                <div style={{ marginTop: 4 }}>{item?.location}</div>

                                                <div onClick={(e) => e.stopPropagation()} style={{ display: 'flex', alignItems: 'flex-start', marginTop: 12, justifyContent: 'flex-end' }}>
                                                    {
                                                        item?.is_default ?
                                                            <span style={{ marginRight: 12 }} className={`iconfont`}>&#xe798;</span> :
                                                            <span onClick={() => setPosition(item.id)} style={{ marginRight: 12 }} className={`iconfont`}>&#xe799;</span>
                                                    }
                                                    <span onClick={(e) => {
                                                        // //////console.log("刪除");
                                                        toDelte(item?.id);
                                                        e.stopPropagation();
                                                    }} style={{ marginRight: 12, fontSize: 14 }} className={`iconfont`} >&#x34b2;</span>
                                                    <span onClick={(e) => {
                                                        setAdd_vis(true);
                                                        setAdd_type(1);
                                                        setItem(item);
                                                        e.stopPropagation();
                                                    }} style={{ fontSize: 15 }} className={`iconfont`} >&#xe61e;</span>
                                                </div>

                                            </div>
                                        </div>
                                    }) : null
                                }
                            </div>

                            {<div>

                            </div>}
                        </div>
                    }
                    {
                        type === "order" && <div style={{ display: 'flex',overflow:'auto', alignItems: 'flex-start', flexDirection: 'column', minHeight: 500 }}>
                            <h5 className={styles.right_contain_title}>訂單列表</h5>
                            <table style={{ width: '100%',minWidth:440, marginTop: 24, textAlign: 'left' }}>
                                <thead>
                                    <tr style={{ backgroundColor: 'rgb(245,245,245)' }}>
                                        <th className={styles.tr_padding}>訂單詳情</th>
                                        <th className={styles.tr_padding} width={120}>總價</th>
                                        <th className={styles.tr_padding} width={100}>狀態</th>
                                        <th className={styles.tr_padding} width={100}></th>
                                    </tr>
                                </thead>
                                {
                                    orderList.map((item, index) => {
                                        return (<tbody key={index}>
                                            <tr className={styles.tr_padding} style={{ height: 20 }}>
                                                <td className={styles.tr_padding} colSpan={4} ></td>
                                            </tr>
                                            <tr className={styles.tr_padding} style={{ backgroundColor: 'rgb(245,245,245)', fontSize: 14 }}>
                                                <td className={`${styles.tr_padding} ${styles.order_desc}`} colSpan={4} >
                                                    <div style={{ display: 'flex' }}>
                                                        <div>
                                                            {item?.create_time_format}
                                                        </div>
                                                        <div style={{ marginLeft: 12 }}>
                                                            訂單號:{item?.order_no}
                                                        </div>
                                                    </div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className={`${styles.tr_padding} ${styles.first_column}`} >
                                                    <div style={{ display: 'flex', alignItems: 'center', wordBreak: 'break-all' }}>
                                                        <div className={styles.product_img}>
                                                            <img src={item?.product_coverimage} style={{ width: '100%' }} />
                                                        </div>
                                                        <div style={{ flex: 1 }}>
                                                            <div className={styles.product_title} style={{ fontSize: 14, width: '100%', overflow: 'hidden', textOverflow: 'ellipsis',whiteSpace:'nowrap' }}>
                                                                {item?.product_productname}
                                                            </div>
                                                            <div>✖ {item?.product_num}</div>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td style={{ fontSize: 14 }} className={`${styles.tr_padding} ${styles.second_column}`}>
                                                    HD${item?.amount}
                                                </td>
                                                <td style={{ fontSize: 14 }} className={`${styles.tr_padding} ${styles.third_column}`}>
                                                    {item?.payment_status_mean}
                                                </td>
                                                <td style={{ fontSize: 14 }} className={`${styles.tr_padding} ${styles.last_column}`}>
                                                    <div style={{ display: "flex", alignItems: 'center', cursor: 'pointer' }}>
                                                        <div onClick={() => {
                                                            // setType("OrderDetail");
                                                            OrderDetail(item?.id);
                                                        }} className={styles.check_btn}>{item?.payment_status ? null : '查看訂單'}</div>
                                                    </div>
                                                </td>
                                            </tr>

                                        </tbody>)
                                    })
                                }


                            </table>
                        </div>
                    }
                </div>
            }
            {
                type === "orderDetail" && <div className={styles.right_contain} style={{ backgroundColor: 'transparent' }} >
                    <div className={styles.order_detail_area} style={{overflow:'auto'}}>
                        <div style={{ minWidth:630,display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                            <h5 className={styles.right_contain_title}>訂單詳情</h5>
                            <table style={{ marginTop: 24, width: '100%', backgroundColor: 'rgb(248,249,250)', padding: 8, textAlign: 'left' }}>
                                <thead>
                                    <tr>
                                        <th style={{ padding: 8 }}>訂單編號</th>
                                        <th style={{ padding: 8 }}>訂單日期</th>
                                        <th style={{ padding: 8 }}>狀態</th>
                                        <th style={{ padding: 8 }}>訂單總價</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th style={{ padding: 8, fontWeight: 400 }}>{orderDetail?.order_info?.order_no}</th>
                                        <th style={{ padding: 8, fontWeight: 400 }}>{orderDetail?.order_info?.create_time_format}</th>
                                        <th style={{ padding: 8, fontWeight: 400 }}>{orderDetail?.order_info?.payment_status_mean}</th>
                                        <th style={{ padding: 8, fontWeight: 400 }}>HK${orderDetail?.order_info?.amount}</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    {/* <div className={styles.order_detail_area} style={{ marginTop: 24 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column', marginTop: 12 }}>
                            <h5 className={styles.right_contain_title}>訂單信息</h5>
                            <div>
                                <div>訂單地址:{ }</div>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                        </div>
                    </div> */}
                    <div className={styles.order_detail_area} style={{ marginTop: 24 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                            <h5 className={styles.right_contain_title}>訂單商品列表</h5>
                            <div style={{ width: '100%' }}>
                                {
                                    orderDetail.products.map((item, index) => {
                                        return (<div style={{ display: 'flex', alignItems: 'center', marginTop: 24, wordBreak: 'break-all' }}>
                                            <div className={styles.product_img}>
                                                <img src={item?.coverimage} style={{ width: '100%', borderRadius: 8 }} />
                                            </div>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <div className={styles.product_title} style={{ overflow: 'hidden', textOverflow: 'ellipsis', wordWrap: 'break-word' }}>
                                                    {item?.productname}
                                                </div>
                                                <div style={{ color: 'rgba(0,0,0,0.5)' }}>
                                                    type:{item?.flower_specs_name}
                                                </div>
                                            </div>
                                            <div style={{ marginLeft: 'auto' }}>
                                                HK${item?.price} ✖ {item?.num}
                                            </div>
                                        </div>)
                                    })
                                }
                                <div style={{ flexDirection: 'column', display: 'flex', fontSize: 14, alignItems: 'flex-end', marginTop: 24 }}>
                                    <div style={{ marginBottom: 8, display: 'flex', width: 140 }}>
                                        <div style={{}}>總計 </div>:HK$<div style={{ marginLeft: 3, color: '#d43a43' }}>{" " + orderDetail.order_info.amount}</div>
                                    </div>
                                    {
                                        orderDetail?.order_info?.shipping_pirce && <div style={{ marginBottom: 8, display: 'flex', width: 140 }}>
                                            <div style={{}}>運費 </div>:HK$<div style={{ marginLeft: 3, color: '#d43a43' }}>{" " + orderDetail?.order_info?.amount}</div>
                                        </div>
                                    }
                                    <div style={{ marginBottom: 8, display: 'flex', width: 140 }}>
                                        <div style={{}}>優惠 </div>:HK$<div style={{ marginLeft: 3, color: 'rgb(64,224,208)' }}>{" " + orderDetail?.order_info?.coupon_price}</div>
                                    </div>
                                </div>
                                <div style={{ height: 1, width: '100%', backgroundColor: 'rgba(0,0,0,0.2)', marginTop: 12 }} />
                                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-end', fontSize: 14 }}>
                                    <div style={{ marginTop: 8, display: 'flex', width: 140, alignItems: 'center' }}>
                                        <div style={{}}>實付 </div>:HK$<div style={{ marginLeft: 3, fontSize: 18, fontWeight: 700 }}>{" " + orderDetail?.order_info?.payment_amount}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className={styles.order_detail_area} style={{ marginTop: 24 }}>
                        <div style={{ display: 'flex', alignItems: 'flex-start', flexDirection: 'column' }}>
                            <h5 className={styles.right_contain_title}>訂單狀態</h5>
                        </div>
                        <div style={{ width: '100%' }}>
                            <table style={{ width: '100%' }}>
                                <thead>
                                    <tr>
                                        <th>

                                        </th>
                                        <th>

                                        </th>
                                        <th>

                                        </th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div> */}
                </div>
            }
        </div>
        <Footer />
        {
            <AddressPannel type={add_type} item={item} visible={add_vis} close={() => setAdd_vis(false)} />
        }
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
    </div>)
}



export async function getServerSideProps(context) {
    const response = await fetch(
        `${constant.api_url}/api/flowercategory/index`, {
        mode: 'cors',
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "GET,POST",
            "Access-Control-Request-Headers": "Content-Type",
        }
    }
    );
    let data = await response.text();
    let sc;
    let res;
    let i;
    let addList, orderList;
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
            `${constant.api_url}/api/user/index`,
            {
                headers: {
                    Authorization: `Bearer ${i}`,
                    "Content-Type": "application/json",
                    "Access-Control-Request-Method": "GET,POST",
                    "Access-Control-Request-Headers": "Content-Type",
                },
                mode: 'cors',
            }
        )
        const add_response = await fetch(
            `${constant.api_url}/api/address/index`, {
            headers: {
                Authorization: `Bearer ${i}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "GET,POST",
                "Access-Control-Request-Headers": "Content-Type",
            },
            mode: 'cors',
        }
        )
        const order_response = await fetch(`${constant.api_url}/api/order/index`, {
            headers: {
                Authorization: `Bearer ${i}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "GET,POST",
                "Access-Control-Request-Headers": "Content-Type",
            },
            mode: 'cors',
        })
        addList = await add_response.json();
        sc = await sc_res.json();
        orderList = await order_response.json();
        //console.log(orderList);
        // if (sc.code === 401) {
        //     sc.data = [];
        // }
        // if(addList.code===401){

        // }
    } else {
        sc = { data: [], code: 401 };
        addList = { data: [], code: 401 };
    }


    //    //console.log(sc);
    return {
        props: {
            cateList: JSON.parse(data).data,
            user_data: sc.data,
            addList: addList.data,
            orderList: orderList.data,
        },
    };
}