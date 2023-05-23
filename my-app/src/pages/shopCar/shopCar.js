import style from '@/styles/shopcarbtn.module.css'
import { useEffect, useState,useCallback } from 'react';
import Header from '../component/Header';
import Link from "next/link";
import Footer from '../component/Footer';
import { constant } from '../';
import LoginPannel from '../component/LoginPannel';
import RegisterPannerl from '../component/ResgisterPannel';
import ForgetPassword from '../component/ForgetPassword';
import Cookies from 'js-cookie';
export default function ShopCar({ cateList,shopCar }) {
    // console.log(Cookies.get('token'));
    console.log(shopCar.data);
    const [sc, setSc] = useState(shopCar.data);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [visible, setVisible] = useState(false);
    const lostUser=()=>{
        alert("用戶信息失效，請重新登錄");
    }
    if(shopCar.code===401){
        Cookies.remove('token');
        notify("error","登錄失效，請重新登陸");
        
    }
    return <div>
        <Header list={cateList} />
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
                               sc? sc.map((item,index)=>{
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
                                                <div style={{ width: '100%', marginTop: 24, display: 'flex', alignItems: 'center',textAlign:'center' }}>
                                                    <div style={{ width: '52%' }}>
                                                        <div style={{ width: '97%', display: 'flex', alignItems: 'flex-start' }}>
                                                            <input type='checkbox' style={{ width: 15, height: 15, marginRight: 12 }} />
                                                            <img src='/心意卡.png' style={{ width: '20%', marginRight: 12 }} />
                                                            <div style={{ fontSize:12,flex: 1, paddingLeft: 16, paddingTop: 4, paddingBottom: 4, backgroundColor: 'rgb(224,224,224)' }}>
                                                                {item.flower_specs_name}
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
                                                            <button onClick={()=>{
                                                                if(item.num===1){
                                                                    alert("不能少於1");
                                                                    return;
                                                                }
                                                                setSc([...sc,{
                                                                ...item,
                                                                num:item.num!==1?item.num--:item.num,
                                                            }])}} className={style.decrease}>-</button>
                                                            <input type="text" style={{ border: 'none' }} onChange={() => 1} className={style.number} value={item.num} />
                                                            <button onClick={()=>{
                                                               let res= sc.slice(index,index+1);
                                                               console.log(res);
                                                                setSc([...sc,{
                                                                ...item,
                                                                num:item.num++,
                                                            }])}} className={style.increase}>+</button>
                                                        </div>
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ fontSize: 14 }}>HK$ {item.price}</div>
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ fontSize: 14 }}>{item.couponprice?"HK$"+item.couponprice:"無"}</div>
                                                    </div>
                                                    <div style={{ flex: 1 }}>
                                                        <div style={{ fontSize: 14, color: 'red' }}>hk$ {item.couponprice?(parseFloat(item.price)-parseFloat(item.couponprice)).toFixed(2):item.price}</div>
                                                    </div>
                                                </div>

                                            </div>
                                        }
                                        {

                                        }
                                    </div>
                                </div>
                                }):<div style={{textAlign:'center'}}>購物車為空</div>
                            }
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
    console.log(context.req.headers.cookie.split('=')[1]);

    const response = await fetch(
        `${constant.api_url}/api/flowercategory/index`
    );
    const data = await response.json()
    console.log(data);

    const sc_res = await fetch(
        `${constant.api_url}/api/cart/index`,
        {
            headers: {
                Authorization: `Bearer`
            }
        }
    )
    // console.log(await sc_res.text())
    let sc=await sc_res.json()
    return {
        props: {
            cateList: data.data,
            shopCar:sc,
        },
    };
}


