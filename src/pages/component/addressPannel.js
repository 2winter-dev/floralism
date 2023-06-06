import { Modal } from "@nextui-org/react";
import style from '@/styles/login.module.css'
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
import m_api from "@/m_api";
import Cookies from "js-cookie";
// import { ToastContainer, toast } from 'react-toastify';
import toast, { Toaster } from "react-hot-toast";

export default function AddressPannel(props) {
    // ////////////console.log(props);
    const [username,setUsername]=useState("");
    const [address,setAddress]=useState("");
    const [mobile,setMobile]=useState("");

    useEffect(()=>{
      setUsername(props.type?props.item.name:"");
      setAddress(props.type?props.item.location:"");
      setMobile(props.type?props.item.mobile:"")
    },[props.type])

    const addAddress=useMutation({
        mutationKey:['addAddress'],
        mutationFn:async(data)=>await m_api.addAddress(data)
    })

    const updateAddress=useMutation({
        mutationKey:['updateAddress'],
        mutationFn:(data)=>m_api.updateAddress(data)
    })

    const submit = () => {
        if(!props.type){
            addAddress.mutate({username:username.trim(),address:address.trim(),mobile:mobile.trim(),cookie:Cookies.get('token')},{
                onSuccess:async(res)=>{
                    // ////////////console.log(res);
                    // let _res=await res.json();
                    if(res.code===401){
                        Cookies.remove("token");
                        location.reload();
                    }else if(res.code===1){
                        // toast(res.msg);
                        location.reload()
                    }else{
                        toast.error(res.msg);
                    }
                },
                onError:(res)=>{
                    // ////////////console.log("error");
                    if(res instanceof Error){
                        toast.error(res.msg);
                    }else toast.error(JSON.stringify(res.msg))

                }
            })
        }else{
            updateAddress.mutate({id:props.item.id,username:username.trim(),address:address.trim(),mobile:mobile.trim(),cookie:Cookies.get('token')},{
                onSuccess:async(res)=>{
                    // let _res=await res.json();
                    if(res.code===401){
                        Cookies.remove("token");
                        location.reload();
                    }else if(res.code===1){
                        // toast(res.msg);
                        location.reload();
                    }else{
                        toast.error(res.msg);
                    }
                },
                onError:(res)=>{
                    // ////////////console.log(res);
                }
            })
        }
    }


    return (<Modal
        open={props.visible}
        onClose={() => { props.close(); }}
        className={style.address_layout}
        // style={{width:'70%'}}
        width={'80%'}
    // style={{width:window.innerWidth*0.7,height:window.innerHeight*0.6}}

    >
        <Modal.Body>
            <div className={style.login_total} style={{}}>
                <div className={""}>
                    <div style={{ width: "100%", cursor: 'pointer', alignItems: 'flex-end', display: 'flex', justifyContent: 'flex-end' }}>
                        <span onClick={() => { props.close() }} style={{ color: 'white' }} className="iconfont" >&#xe641;</span>
                    </div>
                    {
                        <div style={{ marginTop: '1.5%' }} className={style.login_pannel}>
                            <div style={{ marginTop: '0.5%' }}>{!props.type?"添加地址":"修改地址"}</div>
                            <div style={{ marginTop: '5%' }}>
                                <input type='text' placeholder='收件人' value={username} onChange={(e) => setUsername(e.target.value.trim())} className={style.account_input}></input>
                            </div>
                            <div style={{ marginTop: '5%' }}>
                                <input type='text' placeholder='地址' value={address} onChange={(e) => setAddress(e.target.value.trim())} className={style.account_input}></input>
                            </div>   
                            <div style={{ marginTop: '5%' }}>
                                <input type='text' placeholder='電話' value={mobile} onChange={(e) => setMobile(e.target.value.trim())} className={style.account_input}></input>
                            </div>                     
                            <div style={{ marginTop: '5%' }}>
                                <input type='button' onClick={submit} className={style.submit_button} value="提交"></input>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </Modal.Body>
        {/* <ToastContainer /> */}
        {<Toaster
           position="top-center"
        />}
    </Modal>)
}