import style from '@/styles/login.module.css'
import { useState } from 'react';
import { Modal } from "@nextui-org/react";
import { useMutation } from '@tanstack/react-query';
import { ToastContainer, toast } from 'react-toastify';
import m_api from '@/m_api';
export default function ForgetPassword(props) {
    const [type, setType] = useState(0);
    const [email, setEmail] = useState("");
    const [code, setCode] = useState("");
    const [time, setTime] = useState(0);
    const [flag, setFlag] = useState(false);
    const [password, setPassword] = useState("");
    const [repassword, setRepassword] = useState("");
    const sendEmail = useMutation({
        mutationFn: (data) => m_api.sendEmail(data),
        mutationKey: ['sendEmailByForgot'],
    })

    const verCode = useMutation({
        mutationFn: (data) => m_api.verifyCode(data),
        mutationKey: ['verifyCode'],
    })
    const resetPassword = useMutation({
        mutationFn: (data) => m_api.resetPassword(data),
        mutationKey: ['resetPassword'],
    })

    const getEmailCode = () => {
        if (!email.trim()) {
           toast.error("請填寫郵箱以獲取驗證碼")
            return;
        }
        sendEmail.mutate({ email: email.trim(), event: 'resetpwd' }, {
            onSuccess: () => {
                // alert("發送驗證碼成功，請到填寫的郵箱内查看驗證碼");
                setTime(60);
                setFlag(true);
            },
            onError: (res) => {
                //////////////console.log(res);
                toast.error("發送驗證碼失敗");
            }
        })

    }

    const reset = () => {
        resetPassword.mutate({ email: email.trim(), password: password.trim(), confirmPassword: repassword.trim() }, {
            onSuccess: async (res) => {
                // let res = await res.json()
                if (res.code) {
                    props.toLogin();
                } else {
                    toast.error(res.msg);
                }
            },
            onError: (res) => {
                toast.error("重置失敗")
            }
        })
    }

    const verfyCode = () => {
        verCode.mutate({ email: email.trim(), code: code.trim() }, {
            onSuccess: async (res) => {
                // let res = await res.json()
                if (res.code) {
                    setType(1);
                } else {
                    toast.error(res.msg);
                }
            },
            onError: (res) => {
                toast.error("驗證失敗")
            }
        })
    }
    if (time) {
        setTimeout(() => {
            setTime(time - 1);
        }, 1000)
    }


    return (

        <div className={style.login_total} style={{}}>
            <div className={""}>
                <div style={{ width: "100%", cursor: 'pointer', alignItems: 'flex-end', display: 'flex', justifyContent: 'flex-end' }}>
                    <span onClick={() => { props.close(); setType(0) }} style={{ color: 'white' }} className="iconfont" >&#xe641;</span>
                </div>

                {
                    type === 0 ? <div style={{ marginTop: '1.5%' }} className={style.login_pannel}>
                        <div style={{ letterSpacing: 2, fontSize: 24 }}>找回密碼</div>
                        <div style={{ marginTop: '5%' }}>
                            <input type='text' placeholder='電郵/賬戶' onChange={(e) => setEmail(e.target.value.trim())} value={email} className={style.account_input}></input>
                        </div>
                        <div style={{ marginTop: '5%' }}>
                            {<div style={{ display: 'flex', alignItems: 'center' }}>
                                <input type='text' placeholder='請輸入驗證碼' value={code} onChange={(e) => setCode(e.target.value.trim())} style={{ flex: 1, marginRight: 24 }} className={style.account_input}></input>
                                <div className={style.send_btn} style={{ width: '25%', textAlign: 'center' }}>
                                    {

                                        time ? <div>{time}秒后重新發送</div> : flag ? <div onClick={getEmailCode}>重新發送</div> : <div onClick={getEmailCode}>獲取驗證碼</div>
                                    }
                                </div>
                            </div>}
                        </div>
                        <div style={{ marginTop: '5%' }}>
                            <input type='button' onClick={verfyCode} className={style.submit_button} value="提交"></input>
                        </div>
                        <div style={{ marginTop: '5%', paddingLeft: '3%', display: 'flex' }}>
                            <div onClick={() => {
                                setType(0);
                                setCode("");
                                setEmail("");
                                props.toLogin();
                            }} className={style.changebtn}>前往登錄</div>
                        </div>
                    </div> : <div style={{ marginTop: '1.5%' }} className={style.login_pannel}>
                        <div style={{ letterSpacing: 2, fontSize: 24 }}>重設密碼</div>
                        <div style={{ marginTop: '2.5%' }}>
                            <input type='password' placeholder='密碼' value={password} onChange={(e) => setPassword(e.target.value)} className={style.account_input}></input>
                        </div>
                        <div style={{ marginTop: '2.5%' }}>
                            <input type='password' placeholder='确认密碼' value={repassword} onChange={(e) => setRepassword(e.target.value)} className={style.account_input}></input>
                        </div>
                        <div style={{ marginTop: '2.5%' }}>
                            <input type='button' onClick={reset} className={style.submit_button} value="提交"></input>
                        </div>
                    </div>
                }
            </div>
        </div>

    )
}