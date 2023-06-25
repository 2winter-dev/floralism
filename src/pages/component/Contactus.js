import style from '@/styles/contactComponent.module.css'
import { useMutation } from '@tanstack/react-query';
import { useState } from 'react';
import m_api from '../../m_api';
import useDebounce from '../../hooks/useDebounce';
import { ToastContainer, toast } from 'react-toastify';
export default function Contactus(props) {
    const [email,setEmail]=useState("");
    const [input,setInput] =useState("");

    const description=useMutation({
        mutationFn:(data)=>m_api.description(data),
        mutationKey:['description'],
    })

    const book=()=>{
        //////////console.log("123");
        description.mutate({email},{
            onSuccess:(res)=>{
                toast(res.msg);
            },
            onError:(res)=>{    
                toast.error(res.msg)
            }
        })
    }

    return (<div className={style.contact_total} style={{ display: "flex", flex: 1, backgroundColor: 'black', alignItems: 'center',...props.topStyle }}>
        <div style={{ flex: 1, padding: '5%', alignItems: 'center' }} className={style.contactus_border}>
            <div className={style.contact_img} style={{}}>
                <img alt="" src="/訂製服務.png" width={'100%'} />
            </div>
            <div className={style.max_screen} style={{ flex: 1, flexDirection: 'column', padding: 16, alignItems: 'flex-start' }}>
                <div style={{ color: 'white', fontSize: 16, letterSpacing: 2, width: '100%', textAlign: 'left' }}>接收最新信息和優惠</div>
                <input style={{
                    marginTop: 24,
                    outline: 'none',
                    border:'none',
                    width: '100%',
                    paddingTop: 16,
                    paddingBottom: 16,
                    fontSize: 12,
                    borderRadius: 8,
                    paddingLeft: 8
                }}
                    placeholder="請輸入您的電郵地址"
                    onInput={(e)=>setEmail(e.target.value)}
                />
                <div style={{ width: '100%' }}>
                    <input type={'button'} value={'發送'} style={{cursor:"pointer"}} onClick={()=>{
                       if(email){
                        useDebounce(()=>book(),2000)()
                       }else toast.error("請填寫郵箱")
                    }}
                       className={style.submit_btn} 
                    //    style={{ paddingLeft: 24, paddingRight: 24, letterSpacing: 2, paddingTop: 8, paddingBottom: 8, borderRadius: 8, marginTop: 24, fontSize: 16 }}
                    ></input>
                </div>

            </div>
        </div>

        <div className={style.contact_min_border} style={{width:'100%'}}>
            <div style={{ flex: 1, padding: '5%', alignItems: 'center' }} className={style.contactus_min_border}>
                <div className={style.contact_img} style={{}}>
                    <img alt="訂製服務" src="/訂製服務.png" width={'100%'} />
                </div>
            </div>

            <div className={style.max_screen} style={{ flex: 1, flexDirection: 'column', padding: 16, alignItems: 'flex-start' }}>
                <div style={{ color: 'white', fontSize: 16, letterSpacing: 2, width: '100%', textAlign: 'left' }}>接收最新信息和優惠</div>
                <input style={{
                    marginTop: 24,
                    outline: 'none',
                    width: '100%',
                    paddingTop: 16,
                    paddingBottom: 16,
                    fontSize: 12,
                    borderRadius: 8,
                    paddingLeft: 8
                }}
                    placeholder="請輸入您的電郵地址"
                />
                <div style={{ width: '100%' }}>
                    <input type={'button'} style={{cursor:"pointer"}} value={'發送'}
                    onClick={()=>{
                        if(email){
                         book()
                        }else toast.error("請填寫郵箱")
                     }}
                     className={style.submit_btn}
                    ></input>
                </div>

            </div>
        </div>

    </div>)
}