import style from '@/styles/shopcarbtn.module.css'
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
import DynamicComponent from '../component/Dynamic';
import Router from 'next/router';
export default function ShopCar({ cateList, shopCar }) {
    // console.log(Cookies.get('token'));
    // console.log("============");
    // console.log(shopCar.data);
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
    const [flag,setFlag]=useState(false);
    const [date,setDate]=useState("");

    if (shopCar.code === 401) {
        Cookies.remove('token');
    }

    useEffect(() => {
        if (Cookies.get('token')) {
            // location.reload();
        }
    }, [login])
    const hasLogin=()=>{
        setFlag(true);
    }

    useEffect(()=>{
        if(flag){
            location.reload();
        }
    },[flag])
    let deleteProductionFromShopCar = useMutation({
        mutationFn: (data) => m_api.deleteProductionFromShopCar(data),
        mutationKey: ['deleteProductionFromShopCar']
    })

    const changeStatus = (data) => {
        let arr = selected;
        let money = total_money;
        let res = selected.findIndex((item, index) => item === data.id);
        if (res === -1) {
            console.log("未被选中，选中");
            setSelected([...arr, data.id]);
            money += data.num * data.price;
            if (arr.length + 1 === sc.length) {
                setSelAll(true);
            }
        } else {
            console.log("已被选中，取消,位置:" + res);
            let _res = arr.splice(res, 1)
            console.log(_res, arr);
            money -= data.num * data.price;
            setSelected([...arr]);
            setSelAll(false);
        }
        console.log(arr.length, sc.length);
        // culTotalPrice();
    }
    const deleteProduct = () => {
        console.log(selected);
        deleteProductionFromShopCar.mutate({ ids: selected.join(","), cookie: Cookies.get('token') }, {
            onSuccess: async (res) => {
                // console.log(await res.text())
                let _res = await res.json();
                console.log(_res);
                if (_res.code === 1) {
                    let arr = sc;
                    selected.map((item) => {
                        arr.splice(sc.findIndex((it, index) => item === it.id), 1);
                    })
                    setSc([...arr]);
                    setSelected([]);
                    alert(_res.msg);

                } else if (_res.code === 401) {
                    Cookies.remove('token');
                } else if (!_res.code) {

                    alert(_res.msg);
                }
                // let _res=JSON.parse(res)
                // console.log(_res);

                // culTotalPrice();
            },
            onError: (res) => {
                alert("删除失败")
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
                money += item.num * item.price;
                num += item.num;
            }
        })
        !sc.length && setSelAll(false);
        setTotal_money(money);
        setTotal_num(num);
        //  console.log(money);
    }, [sc, selected])

    const limitTime=()=>{
        let date=new Date();
        let year=date.getFullYear();
        let month=date.getMonth()+1;
        let day=date.getDate();
        console.log(year+'-'+(month<10?"0"+month:month)+"-"+day);
        return year+'-'+(month<10?"0"+month:month)+"-"+day
       
    }

    const toCreateOrder=()=>{
         Router.push({
            pathname:'/selectMethod',
            query:{
                cart_ids:selected.join(','),
                amount:total_money,
                payment_amount:total_money,
                deliverydate:date,
                deliverytype:type,
                remark:textArea
            }
         })
    }

    return <div>
      <DynamicComponent cateList={cateList} setLogin={setLogin}/>
        <main style={{ paddingLeft: '10%', paddingRight: '10%' }}>
            <div>
                <div style={{ marginTop: 32, display: 'flex' }}>
                    <Link style={{ cursor: 'pointer' }} href={'/'}>首頁</Link><span className={style.separator}>/</span><a>{'我的賬單'}</a>
                </div>

                <div className={style.total_boder} style={{ marginTop: 24, marginBottom: 24 }}>
                    <div style={{}}>
                        <div style={{ display: 'flex', paddingLeft: 10, paddingRight: 10 }}>
                            <div style={{ width: '15%' }}>
                                <input type='checkbox' checked={selAll} onChange={(e) => console.log(e.currentTarget.value)} onClick={selectedAll} style={{ width: 15, height: 15 }} />
                                <span>全選</span>
                                <span onClick={deleteProduct} style={{ marginLeft: 8, cursor: 'pointer' }}>删除</span>
                            </div>
                            <div style={{ width: '45%' }}><span>貨物</span></div>
                            <div style={{ width: '10%' }}><span>數量</span></div>
                            <div style={{ width: '10%' }}><span>價格</span></div>
                            <div style={{ width: '10%' }}><span>優惠價</span></div>
                            <div style={{ width: '10%' }}><span>金額</span></div>
                        </div>
                        <div style={{ height: 700, overflow: 'auto', marginTop: 20 }}>
                            {
                                sc.length ? sc.map((item, index) => {
                                    return <div key={item.id} style={{ padding: 18, marginBottom: 10 }} className={style.goodsItem}>
                                        <div>{item.flower_category_name}/{item.productname}</div>
                                        <div style={{ marginTop: 10, display: 'flex' }}>
                                            <div style={{ width: '15%' }}>
                                                <img src={`${item.coverimage}`} style={{ width: '90%', borderRadius: 8 }} />
                                            </div>
                                            {
                                                <div style={{ flex: 1, flexDirection: 'column' }}>
                                                    <div style={{ width: '100%' }}>
                                                        {item.productname}
                                                    </div>
                                                    <div style={{ width: '100%', marginTop: 24, display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                                                        <div style={{ width: '52%' }}>
                                                            <div style={{ width: '97%', display: 'flex', alignItems: 'flex-start' }}>
                                                                <input type='checkbox' onChange={(e) => console.log(e.currentTarget.value)} onClick={() => changeStatus(item)} checked={selected.some((it, ii) => it === item.id)} style={{ width: 15, height: 15, marginRight: 12 }} />
                                                                <img src='/心意卡.png' style={{ width: '20%', marginRight: 12 }} />
                                                                <div style={{ fontSize: 12, flex: 1, textAlign: 'left', paddingLeft: 16, paddingTop: 4, paddingBottom: 4, backgroundColor: 'rgb(224,224,224)' }}>
                                                                    {item.flower_specs_name}
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div style={{ flex: 1 }}>
                                                            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                                                                <button onClick={() => {
                                                                    if (item.num === 1) {
                                                                        alert("不能少於1");
                                                                        return;
                                                                    }
                                                                    let res = sc;
                                                                    res[index].num -= 1;
                                                                    console.log(res);
                                                                    setSc([...res]);
                                                                    // culTotalPrice(res);
                                                                    // setSc([...res, {
                                                                    //     ...item,
                                                                    //     num: item.num !== 1 ? item.num-- : item.num,
                                                                    // }])
                                                                }} className={style.decrease}>-</button>
                                                                <input type="text" style={{ border: 'none' }} onChange={() => 1} className={style.number} value={item.num} />
                                                                <button onClick={() => {
                                                                    let res = sc;
                                                                    res[index].num += 1;
                                                                    console.log(res);
                                                                    setSc([...res]);
                                                                    // culTotalPrice(res);
                                                                    // console.log(r);
                                                                    // console.log(res,sc);
                                                                    // setSc([...sc, {
                                                                    //     ...item,
                                                                    //     num: item.num+1,
                                                                    // }])
                                                                }} className={style.increase}>+</button>
                                                            </div>
                                                        </div>
                                                        <div style={{ flex: 1 }}>
                                                            <div style={{ fontSize: 14 }}>HK$ {item.price}</div>
                                                        </div>
                                                        <div style={{ flex: 1 }}>
                                                            <div style={{ fontSize: 14 }}>{item.couponprice ? "HK$" + item.couponprice : "無"}</div>
                                                        </div>
                                                        <div style={{ flex: 1 }}>
                                                            <div style={{ fontSize: 14, color: 'red' }}>hk$ {item.couponprice ? (parseFloat(item.price) - parseFloat(item.couponprice)).toFixed(2) * item.num : item.num * item.price}</div>
                                                        </div>
                                                    </div>

                                                </div>
                                            }
                                            {

                                            }
                                        </div>
                                    </div>
                                }) : (shopCar.code === 401 ? <div style={{ textAlign: 'center' }}>用戶信息已過期，請重新登陸</div> : <div style={{ textAlign: 'center' }}>購物車為空</div>)
                            }
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1, marginRight: 12 }}>
                        訂單備注:
                        <textarea onInput={(e) => setTextArea(e.target.value)} style={{ resize: 'none', paddingLeft: 10, width: '90%', height: 100, borderRadius: 8, marginTop: 12 }} placeholder='給賣家備注的信息'>

                        </textarea>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>數量總件數 {total_num} 件</div>
                            <div>合計 hk$ {total_money}</div>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 12 }}>
                            <div onClick={() => setType(1)} className={style.button_icon} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '45%', backgroundColor: type === 1 ? "rgba(0,0,0,0.1)" : "white" }}>
                                <img src={'/本地送貨.png'} ></img>
                                本地送貨
                            </div>
                            <div onClick={() => setType(2)} className={style.button_icon} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '45%', backgroundColor: type === 2 ? "rgba(0,0,0,0.1)" : "white" }}>
                                <img src={'/門店自取.png'} ></img>
                                門店自取
                            </div>
                        </div>
                        <div style={{ marginTop: 24 }}>
                            <input type='date' min={limitTime()} style={{ width: '100%', borderRadius: 6, paddingLeft: 8, paddingRight: 8, paddingTop: 5, paddingBottom: 5 }} onInput={(e) => setDate(e.target.value)} />
                        </div>
                        <div style={{ marginBottom: 24, marginTop: 24, display: 'flex', justifyContent: 'space-around' }}>
                            <button onClick={toCreateOrder} style={{ width: '30%',textAlign:'center', paddingTop: 12, paddingBottom: 12, backgroundColor: 'red', color: 'white', border: 'none', borderRadius: 8 }}>確認訂單</button>
                            <Link href="/" style={{ width: '30%',textAlign:'center', paddingTop: 12, paddingBottom: 12, border: 'none', backgroundColor: 'rgb(187,187,187)', color: 'white', borderRadius: 8 }}>繼續選購</Link>
                        </div>
                    </div>
                </div>
            </div>
        </main>
        <Footer />
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
        {
            <RegisterPannerl type={false} register={register} close={() => setRegister(false)} toLogin={() => {
                setLogin(true);
                setRegister(false)
            }}  hasLogin={hasLogin}/>
        }
        {
            <ForgetPassword type={0} close={() => setVisible(false)} visible={visible} toLogin={() => {
                setVisible(false);
                setLogin(true);
            }} />
        }
    </div>
}
export async function getServerSideProps(context) {
    const cookies = context.req.headers.cookie;
    console.log("-----------");
    // console.log(context.req.headers.cookie.split('=')[1]);

    const response = await fetch(
        `${constant.api_url}/api/flowercategory/index`
    );
    const data = await response.json()
    console.log(data);
    let sc;
    let res;
    let i;
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
    if(i){
        console.log("進來了");
        let sc_res = await fetch(
            `${constant.api_url}/api/cart/index`,
            {
                headers: {
                    Authorization: `Bearer ${i}`
                }
            }
        )
        sc=await sc_res.json();
    }else{
        sc = { data: [],code:401 };
    }


    // if(i===-1){

    // }else{
        // let sc_res = await fetch(
        //     `${constant.api_url}/api/cart/index`,
        //     {
        //         headers: {
        //             Authorization: `Bearer ${context.req.headers.cookie.split('=')[i+1]}`
        //         }
        //     }
        // )
    // }
    // sc = { data: [] };
    // console.log(await sc_res.text())

    return {
        props: {
            cateList: data.data,
            shopCar: sc,
        },
    };
}


