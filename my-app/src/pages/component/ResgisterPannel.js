import style from '@/styles/login.module.css'
import { useState } from 'react';
import { Modal } from "@nextui-org/react";
import { useMutation } from '@tanstack/react-query';
import Api from '../../m_api/index'
import Cookies from 'js-cookie';
export default function RegisterPannerl(props) {
    const [isEmail, setIsEmail] = useState(props.type);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [username, setUsername] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const [time, setTime] = useState(0);
    const [flag, setFlag] = useState(false);
    // useMutation
    const sendEmail = useMutation({
        mutationFn: (data) => Api.sendEmail(data),
        mutationKey: ['sendEmailByRegister'],
    })
    const register = useMutation({
        mutationKey: ['register'],
        mutationFn: (data) => Api.register(data),
    })
    const getEmailCode = () => {
        if (!email.trim()) {
            alert("請填寫郵箱以獲取驗證碼")
            return;
        }
        sendEmail.mutate({ email: email.trim(), type: 'register' }, {
            onSuccess: async (res) => {
                let isSuccess = await res.json()
                if (isSuccess.code) {
                    alert("發送驗證碼成功，請到填寫的郵箱内查看驗證碼");
                } else {
                    alert(isSuccess.msg);
                }
            },
            onError: () => alert("發送驗證碼失敗")
        })
        setTime(60);
        setFlag(true);
    }

    const _submit = () => {
        if (!username.trim()) {
            alert("請填寫姓名");
            return;
        }
        if (!mobile.trim()) {
            alert("請填寫手機號碼");
            return;
        }
        if (!password.trim()) {
            alert("請填寫密碼");
            return;
        }
        if (password.trim() !== repassword.trim()) {
            alert("兩次輸入的密碼不同，請保證一致");
            return;
        }
        if (!code) {
            alert("請填寫收到的驗證碼");
            return;
        }

        register.mutate({
            email: email.trim(),
            code: code.trim(),
            password: password.trim(),
            mobile: mobile.trim(),
            username: username.trim(),
        }, {
            onSuccess: async (res) => {
                let isSuccess = await res.json()
                //////console.log(res);
                if (isSuccess.code === 1) {
                    props.close();
                    Cookies.set('token', isSuccess.data.token, { expires: 1 });
                    Cookies.set('user', JSON.stringify(isSuccess.data.userinfo), { expires: 1 });
                    alert("注冊成功");
                    // props.hasLogin();
                    location.reload();
                    // localStorage.setItem("token",res.data.token);
                } else {
                    alert(isSuccess.msg);
                }
            },
            onError: (res) => {
                //////console.log(res);
                alert("注冊失敗")
            }
        })
    }

    if (time) {
        setTimeout(() => {
            setTime(time - 1);
        }, 1000)
    }

    return (<Modal
        open={props.register}
        onClose={props.close}
        className={style.register_layout}
        width={'80%'}
    >
        <div className={style.register_total} style={{}}>
            <div className={""} >
                <div style={{ width: "100%", cursor: 'pointer', alignItems: 'flex-end', display: 'flex', justifyContent: 'flex-end' }}>
                    <span onClick={props.close} style={{ color: 'white' }} className="iconfont" >&#xe641;</span>
                </div>
                {
                    <div style={{}} className={style.login_pannel}>
                        <div style={{ letterSpacing: 2, fontSize: 24 }}>建立賬戶</div>
                        <div style={{ marginTop: '2.5%' }}>
                            <input type='text' placeholder='姓名' value={username} onChange={(e) => setUsername(e.target.value)} className={style.account_input}></input>
                        </div>
                        <div style={{ marginTop: '2.5%' }}>
                            <input type='text' placeholder='電話' value={mobile} onChange={(e) => setMobile(e.target.value)} className={style.account_input}></input>
                        </div>
                        <div style={{ marginTop: '2.5%' }}>
                            <input type='password' placeholder='密碼' value={password} onChange={(e) => setPassword(e.target.value)} className={style.account_input}></input>
                        </div>
                        <div style={{ marginTop: '2.5%' }}>
                            <input type='password' placeholder='确认密碼' value={repassword} onChange={(e) => setRepassword(e.target.value)} className={style.account_input}></input>
                        </div>
                        <div style={{ marginTop: '2.5%', width: '100%' }}>
                            <input type='text' placeholder='郵箱' className={style.account_input} value={email} onChange={(event) => {
                                setEmail(event.target.value)
                                //////console.log(event)
                            }}></input>
                        </div>
                        <div style={{ marginTop: '2.5%' }}>
                            {<div style={{ display: 'flex', alignItems: 'center' }}>
                                <input type='text' placeholder='請輸入驗證碼' value={code} onChange={(e) => setCode(e.target.value)} style={{ flex: 1, marginRight: 24 }} className={style.account_input}></input>
                                <div className={style.send_btn} style={{ width: '25%', textAlign: 'center' }}>
                                    {

                                        time ? <div>{time}秒后重新發送</div> : flag ? <div>重新發送</div> : <div onClick={getEmailCode}>獲取驗證碼</div>
                                    }
                                </div>
                            </div>}
                        </div>
                        <div style={{ marginTop: '2.5%' }}>
                            <input type='button' style={{ marginRight: 12 }} onClick={_submit} className={style.register_btn} value="建立"></input>
                            <a onClick={props.toLogin} className={style.to_login}>前往登錄</a>
                        </div>

                    </div>
                }
            </div>
        </div>
    </Modal>)

    // return (<div className={style.register_total} style={{}}>
    //     <div className={style.register_layout} style={{ height: window.innerHeight * 0.6, width: window.innerWidth * 0.7 }}>
    //         <div style={{ width: "100%", cursor: 'pointer', alignItems: 'flex-end', display: 'flex', justifyContent: 'flex-end' }}>
    //             <span onClick={props.close} style={{ color: 'white' }} className="iconfont" >&#xe641;</span>
    //         </div>
    //         <div style={{}} className={style.login_pannel}>
    //             <div style={{ letterSpacing: 2, fontSize: 24 }}>建立賬戶</div>
    //             <div style={{ marginTop: '2.5%' }}>
    //                 <input type='text' placeholder='姓名' className={style.account_input}></input>
    //             </div>
    //             <div style={{ marginTop: '2.5%' }}>
    //                 <input type='password' placeholder='電話' className={style.account_input}></input>
    //             </div>
    //             <div style={{ marginTop: '2.5%' }}>
    //                 <input type='text' placeholder='電郵/賬戶' className={style.account_input}></input>
    //             </div>
    //             <div style={{ marginTop: '2.5%' }}>
    //                 <input type='text' placeholder='密碼' className={style.account_input}></input>
    //             </div>

    //             <div style={{ marginTop: '2.5%' }}>
    //                 <input type='button' style={{ marginRight: 12 }} className={style.register_btn} value="建立"></input>
    //                 <a onClick={props.toLogin} className={style.to_login}>前往登錄</a>
    //             </div>

    //         </div>
    //     </div>
    // </div>)
}