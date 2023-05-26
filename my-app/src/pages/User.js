
import useBearStore from "@/zustand";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { useEffect, useState } from "react";
import LoginPannel from './component/LoginPannel'
import RegisterPannerl from './component/ResgisterPannel'
import ForgetPassword from "./component/ForgetPassword";
import Cookies from "js-cookie";
import { constant } from "@/constant";
import DynamicComponent from "./component/Dynamic";
import styles from '@/styles/user.module.css'

export default function User({ cateList }) {
    // const User=useBearStore((state)=>state.user);
    // const user=useBearStore((state)=>state.user)
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [visible, setVisible] = useState(false);
    const [] = useState();
    const [type, setType] = useState(1);//1：用户信息，2:地址管理，3：订单管理
    console.log(Cookies.get("user"));
    const [user, setUser] = useState(undefined);

    useEffect(() => {
        if (Cookies.get("user")) {
            setUser(JSON.parse(Cookies.get("user")))
        }
    }, [])
    return (<div style={{ position: 'relative' }}>
        <DynamicComponent cateList={cateList} />
        <div className={styles.contain_layout}>
            <div style={{ padding: 20, fontSize: 24, color: 'white' }}>個人中心</div>
            <div className={styles.page_border} style={{ display: 'flex', marginTop: 24 }} >
                <div className={styles.contain_left} style={{ textAlign: 'center' }}>
                    <div className={type === 1 ? styles.choosen : ""} onClick={() => setType(1)}>用戶信息</div>
                    <div className={type === 2 ? styles.choosen : ""} onClick={() => setType(2)}>地址管理</div>
                    <div className={type === 3 ? styles.choosen : ""} onClick={() => setType(3)}>訂單管理</div>
                </div>
                <div className={styles.contain_right} style={{ flex: 1 }}>
                    {
                        type === 1 && user && <div className={styles.user_box}>
                            <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                                <div >昵称: <input value={user.nickname}></input></div>
                                <div>郵件: <input value={user.email}></input></div>
                                <div>facebook: <input value={user.facebook}></input></div>
                                <div>手機: <input value={user.mobile}></input></div>

                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
                                <img src={user.avatar} style={{ width: '50%', borderRadius: 50 }} />
                                <div>會員ID: <div style={{ width: '100%', textAlign: 'center' }}>{user.member_id}</div></div>
                                <div>積分: {user.score}</div>
                                <button className={styles.sbt_btn} >修改</button>
                            </div>
                        </div>
                    }
                    {
                        type === 2 && <div>
                            <div>
                                {/* <div><input value={}  /></div>
                                <div><input value={}  /></div>
                                <div><input value={}  /></div> */}
                            </div>
                        </div>
                    }
                    {

                        type === 3 && <div>

                        </div>

                    }
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
    </div>)
}


export async function getStaticProps({ }) {
    //  //console.log(constant.api_url);
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
    const address_response = await fetch(
        `${constant.api_url}/api/address/index`, {
        mode: 'cors',
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type",
        }
    }
    )
    return {
        props: {
            cateList: data.data,
        },
    };
}