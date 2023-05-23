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
export default function ShopCar({ cateList, shopCar }) {
    // console.log(Cookies.get('token'));
    console.log(shopCar.data);
    const [sc, setSc] = useState(shopCar.data);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [visible, setVisible] = useState(false);
    const [total_money, setTotal_money] = useState(0);

    if (shopCar.code === 401) {
        Cookies.remove('token');
    }

    useEffect(() => {
        if (Cookies.get('token')) {
            // location.reload();
        }
    }, [login])
    return <div>
        <Header list={cateList} login={() => {
            if (Cookies.get('token')) {
                alert("你先退出登陆吗")
            } else {
                setLogin(true);
                // location.reload()
            }
        }} />
        <main style={{ paddingLeft: '10%', paddingRight: '10%' }}>
            <div>
                <div style={{ marginTop: 32, display: 'flex' }}>
                    <Link style={{ cursor: 'pointer' }} href={'/'}>首頁</Link><span className={style.separator}>/</span><a>{'我的賬單'}</a>
                </div>

                <div className={style.total_boder} style={{ marginTop: 24, marginBottom: 24 }}>
                    <div style={{}}>
                        <div style={{ display: 'flex', paddingLeft: 10, paddingRight: 10 }}>
                            <div style={{ width: '15%' }}><input type='checkbox' style={{ width: 15, height: 15 }} /><span>全選</span></div>
                            <div style={{ width: '45%' }}><span>貨物</span></div>
                            <div style={{ width: '10%' }}><span>數量</span></div>
                            <div style={{ width: '10%' }}><span>價格</span></div>
                            <div style={{ width: '10%' }}><span>優惠價</span></div>
                            <div style={{ width: '10%' }}><span>金額</span></div>
                        </div>
                        <div style={{ height: 700, overflow: 'auto', marginTop: 20 }}>
                            {/* {
                                <div style={{ padding: 10, marginBottom: 10 }} className={style.goodsItem}>
                                    <div>【FLORALISM】玫瑰/繆斯女神，卡羅拉紅玫瑰....</div>
                                    <div style={{ marginTop: 10, display: 'flex' }}>
                                        <div style={{ width: '15%' }}>
                                            <img src='/homepage/圖2.png' style={{ width: '90%', borderRadius: 8 }} />
                                        </div>
                                        {
                                            <div style={{ flex: 1, flexDirection: 'column' }}>
                                                <div style={{ width: '100%' }}>
                                                    繆斯女神，卡羅拉紅玫瑰+紅豆+粉色桔梗+銀葉菊
                                                </div>
                                                <div style={{ width: '100%', marginTop: 24, display: 'flex', alignItems: 'center' }}>
                                                    <div style={{ width: '50%' }}>
                                                        <div style={{ width: '97%', display: 'flex', alignItems: 'flex-start' }}>
                                                            <input type='checkbox' style={{ width: 15, height: 15, marginRight: 12 }} />
                                                            <img src='/心意卡.png' style={{ width: '15%', marginRight: 12 }} />
                                                            <select style={{ flex: 1, paddingLeft: 8, paddingRight: 8, paddingTop: 4, paddingBottom: 4, backgroundColor: 'rgb(224,224,224)' }}>
                                                                <option>玫瑰16支</option>
                                                                <option>禮盒包裝</option>
                                                            </select>
                                                        </div>

                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                                                            <button className={style.decrease}>-</button>
                                                            <input type="text" style={{ border: 'none' }} onChange={() => 1} className={style.number} value={1} />
                                                            <button className={style.increase}>+</button>
                                                        </div>
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ fontSize: 14 }}>HK$ 799.00</div>
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ fontSize: 14 }}>無</div>
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ fontSize: 14, color: 'red' }}>hk$ 799.00</div>
                                                    </div>
                                                </div>
                                                <div style={{ display: 'flex', justifyContent: 'flex-end', cursor: 'pointer', marginRight: '6%', alignItems: 'flex-end', marginTop: 28 }}>
                                                    刪除
                                                </div>
                                            </div>
                                        }
                                        {

                                        }
                                    </div>
                                </div>
                            } */}
                            {
                                sc ? sc.map((item, index) => {
                                    return <div key={index} style={{ padding: 18, marginBottom: 10 }} className={style.goodsItem}>
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
                                                                <input type='checkbox' style={{ width: 15, height: 15, marginRight: 12 }} />
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
                                                            <div style={{ fontSize: 14, color: 'red' }}>hk$ {item.couponprice ? (parseFloat(item.price) - parseFloat(item.couponprice)).toFixed(2) : item.price}</div>
                                                        </div>
                                                    </div>

                                                </div>
                                            }
                                            {

                                            }
                                        </div>
                                    </div>
                                }) : shopCar.code === 401 ? <div style={{ textAlign: 'center' }}>用戶信息已過期，請重新登陸</div> : <div style={{ textAlign: 'center' }}>購物車為空</div>
                            }
                        </div>
                    </div>
                </div>

                <div style={{ display: 'flex', alignItems: 'flex-start' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', flex: 1,marginRight:12 }}>
                        訂單備注:
                        <textarea style={{ resize: 'none', paddingLeft: 10,width:'90%',height:100,borderRadius:8,marginTop:12 }} placeholder='給賣家備注的信息'>

                        </textarea>
                    </div>
                    <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                            <div>數量總件數 8 件</div>
                            <div>合計 hk$ {total_money}</div>
                        </div>
                        <div style={{display:'flex',justifyContent:'space-between',marginTop:12}}>
                            <div className={style.button_icon} style={{display:'flex',flexDirection:'column',alignItems:'center',width:'45%'}}>
                                <img src={'/本地送貨.png'} ></img>
                                本地送貨
                            </div>
                            <div  className={style.button_icon} style={{display:'flex',flexDirection:'column',alignItems:'center',width:'45%'}}>
                                <img src={'/門店自取.png'} ></img>
                                門店自取
                            </div>
                        </div>
                        <div style={{marginTop:24}}>
                            <input style={{width:'100%',borderRadius:6,paddingLeft:8,paddingTop:5,paddingBottom:5}} />
                        </div>
                        <div style={{marginBottom:24,marginTop:24,display:'flex',justifyContent:'space-around'}}>
                            <button style={{width:'30%',paddingTop:12,paddingBottom:12,backgroundColor:'red',color:'white',border:'none'}}>確認訂單</button>
                            <button style={{width:'30%',paddingTop:12,paddingBottom:12,border:'none',backgroundColor:'rgb(187,187,187)',color:'white'}}>取消訂單</button>
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
    if (context.req.headers.cookie) {
        let res = context.req.headers.cookie.split("=");
        console.log(res);


        let sc_res = await fetch(
            `${constant.api_url}/api/cart/index`,
            {
                headers: {
                    Authorization: `Bearer ${context.req.headers.cookie.split('=')[1]}`
                }
            }
        )

        sc = await sc_res.json()
    } else {
        sc = { code: 401, data: null }
    }


    // console.log(await sc_res.text())

    return {
        props: {
            cateList: data.data,
            shopCar: sc,
        },
    };
}


