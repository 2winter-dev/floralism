import style from '@/styles/login.module.css'
import { useState } from 'react';
import { Modal } from "@nextui-org/react";
import { useMutation } from '@tanstack/react-query';
import m_api from '@/m_api';
import Cookies from 'js-cookie';
import { useBearStore } from '@/zustand';
export default function LoginPannel(props) {
    // //console.log(window.innerHeight)
    const [type, setType] = useState(0);//0為密碼登錄，1為驗證碼登錄
    const [time,setTime]=useState(0);
    const [email,setEmail]=useState("");
    const [code, setCode] = useState("");//密碼與code
    const [flag,setFlag]=useState(false);
    // const setUser=useBearStore((state)=>state.setUser);
    // const setToken=useBearStore((state)=>state.setToken)
    // const [token,setToken]=useState(localStorage.getItem('token'))
    const sendEmail = useMutation({
        mutationFn: (data) => m_api.sendEmail(data),
        mutationKey: ['sendEmailByLogin'],
    })
    const loginByEmail=useMutation({
        // mutationFn:(data)=>m_api
        mutationFn:(data)=>m_api.loginByCode(data),
        mutationKey:['loginByEmail'],
    })
    const loginByPassword=useMutation({
        // mutationFn:(data)=>m_api
        mutationFn:(data)=>m_api.loginByPassword(data),
        mutationKey:['loginByPassword'],
    })
    const getEmailCode = () => {
        if(!email.trim()){
            alert("請填寫郵箱以獲取驗證碼")
          return ;
        }
        sendEmail.mutate({ email:email.trim(), event: 'emaillogin' }, {
            onSuccess: async(res) => {
                let isSuccess=await res.json();
                if(isSuccess.data){
                    alert("發送驗證碼成功，請到填寫的郵箱内查看驗證碼");

                }else{
                    alert(isSuccess.msg);
                }
                
            },
            onError: (res) =>{
                //console.log(res);
                alert("發送驗證碼失敗");
            }
        })
        setTime(60);
        setFlag(true);
    }
    
    const _submit=()=>{
        if(!type){
            loginByPassword.mutate({email:email.trim(),password:code.trim()},{
                onSuccess:async(res)=>{
                    let isSuccess=await res.json()
                    // //console.log(await res.json());
                    if(isSuccess.code){
                        console.log("================");
                        console.log();
                        Cookies.set('token',isSuccess.data.token,{expires:1});
                        Cookies.set('user',JSON.stringify(isSuccess.data.userinfo),{expires:1});
                        alert("登陆成功");
                        
                        props.close();
                        // props.hasLogin();
                        location.reload();
                        //token:res.data.token;
                        //userinfo:res.data.userinfo
                    }else{
                        alert(isSuccess.msg);
                    }
                },
                onError:(err)=>{
                    alert("登陸失敗");
                }
            })
        }else{
            loginByEmail.mutate({email:email.trim(),code:code.trim()},{
                onSuccess:async (res)=>{
                  
                    let body=await res.json()
                    //console.log("====123====")
                    //console.log(body)
                    
                      if(body.code){
                        console.log("================");
                        Cookies.set('token',body.data.token,{expires:1});
                        Cookies.set('user',JSON.stringify(body.data.userinfo),{expires:1});
                        console.log("========");
                        console.log(Cookies.get('token'));
                        
                    alert("登陸成功");
                        props.close();
                        // props.hasLogin();
                        location.reload();
                        //token:res.data.token;
                        //userinfo:res.data.userinfo
                        // localStorage.setItem("token",body.data.token);
                    }else{
                        alert(body.msg);
                    }
                },
                onError:(err)=>{
                    alert("登陸失敗");
                }
            })
        }
    }



    if (time) {
        setTimeout(() => {
            setTime(time - 1);
        }, 1000)
    }

    return (<Modal
        open={props.login}
        onClose={()=>{props.close();setType(0);}}
        className={style.login_layout}
        // style={{width:'70%'}}
        width={'80%'}
    // style={{width:window.innerWidth*0.7,height:window.innerHeight*0.6}}

    >
        <Modal.Body>
            <div className={style.login_total} style={{}}>
                <div className={""}>
                    <div style={{ width: "100%", cursor: 'pointer', alignItems: 'flex-end', display: 'flex', justifyContent: 'flex-end' }}>
                        <span onClick={()=>{props.close();setType(0)}} style={{ color: 'white' }} className="iconfont" >&#xe641;</span>
                    </div>
                    {
                      type===0?<div style={{ marginTop: '1.5%' }} className={style.login_pannel}>
                            <div style={{ fontSize: 24, letterSpacing: 1 }}>Welcome</div>
                            <div style={{ marginTop: '0.5%' }}>你好，欢迎登陆！</div>
                            <div style={{ marginTop: '5%' }}>
                                <input type='text' placeholder='電郵/賬戶' value={email} onChange={(e)=>setEmail(e.target.value.trim())} className={style.account_input}></input>
                            </div>
                            <div style={{ marginTop: '5%' }}>
                                <input type='password' placeholder='密码' value={code} onChange={(e)=>setCode(e.target.value.trim())} className={style.account_input}></input>
                            </div>
                            <div style={{ marginTop: '2.5%', paddingLeft: '3%' }}>
                                <div onClick={props.toForget} className={style.forget_password}>忘记密码？</div>
                            </div>
                            <div style={{ marginTop: '2.5%' }}>
                                <input type='button' onClick={_submit} className={style.submit_button} value="登錄"></input>
                            </div>
                            <div style={{ marginTop: '5%', paddingLeft: '3%',display:'flex' }}>
                                需要一個賬戶？ <a onClick={()=>{props.toRegister();setType(0);}} className={style.to_register}>前往注冊</a><div onClick={()=>{
                                    setType(1);
                                    setCode("");
                                    setEmail("");
                                }} className={style.changebtn}>使用驗證碼登錄</div>
                            </div>
                        </div>:<div style={{ marginTop: '1.5%' }} className={style.login_pannel}>
                            <div style={{ fontSize: 24, letterSpacing: 1 }}>Welcome</div>
                            <div style={{ marginTop: '0.5%' }}>你好，欢迎登陆！</div>
                            <div style={{ marginTop: '5%' }}>
                                <input type='text' placeholder='電郵/賬戶' onChange={(e)=>setEmail(e.target.value.trim())} value={email}  className={style.account_input}></input>
                            </div>
                            <div style={{ marginTop: '5%' }}>
                            {<div style={{ display: 'flex', alignItems: 'center' }}>
                                <input type='text' placeholder='請輸入驗證碼' value={code} onChange={(e) => setCode(e.target.value)} style={{ flex: 1, marginRight: 24 }} className={style.account_input}></input>
                                <div className={style.send_btn} style={{width:'25%',textAlign:'center'}}>
                                    {

                                        time ? <div>{time}秒后重新發送</div> : flag ? <div onClick={getEmailCode}>重新發送</div> : <div onClick={getEmailCode}>獲取驗證碼</div>
                                    }
                                </div>
                            </div>}
                        </div>
                            <div style={{ marginTop: '2.5%', paddingLeft: '3%' }}>
                                <div onClick={props.toForget} className={style.forget_password}>忘记密码？</div>
                            </div>
                            <div style={{ marginTop: '2.5%' }}>
                                <input type='button' onClick={_submit} className={style.submit_button} style={{fontSize:18}} value="登錄"></input>
                            </div>
                            <div style={{ marginTop: '5%', paddingLeft: '3%',display:'flex'}}>
                                需要一個賬戶？ <a onClick={()=>{props.toRegister();setType(0);}} className={style.to_register}>前往注冊</a><div  onClick={()=>{
                                    setType(0);
                                    setCode("");
                                    setEmail("");
                                }}  className={style.changebtn}>使用密碼登錄</div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Modal.Body>
    </Modal>)
  
}
