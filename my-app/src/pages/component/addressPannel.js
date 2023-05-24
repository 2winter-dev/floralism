import { Modal } from "@nextui-org/react";
import style from '@/styles/login.module.css'
export default function AddressPannel(props){
    return (<Modal
       visible={props.visible}
       onClose={props.close}
       className={style.address_layout}
       width="80%"
    >
       <Modal.Body>
       <div style={{ marginTop: '1.5%' }} className={style.login_pannel}>
                        <div style={{ letterSpacing: 2, fontSize: 24 }}>重設密碼</div>
                            <div style={{ marginTop: '2.5%' }}>
                                <input type='text' placeholder='收货人' value={props.username} onChange={(e) => props.setUsername(e.target.value)} className={style.account_input}></input>
                            </div>
                            <div style={{ marginTop: '2.5%' }}>
                                <input type='text' placeholder='地址' value={props.address} onChange={(e) => props.setAddress(e.target.value)} className={style.account_input}></input>
                            </div>
                            <div style={{ marginTop: '2.5%' }}>
                                <input type='text' placeholder='手机号' value={props.mobile} onChange={(e) => props.setMobile(e.target.value)} className={style.account_input}></input>
                            </div>
                            <div style={{ marginTop: '2.5%' }}>
                                <input type='button' onClick={props.submit} className={style.submit_button} value="提交"></input>
                            </div>
                        </div>
        </Modal.Body>            
    </Modal>)
}