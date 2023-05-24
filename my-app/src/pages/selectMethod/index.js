
import DynamicComponent from "../component/Dynamic";
import { useState } from "react";
import LoginPannel from "../component/LoginPannel";
import ForgetPassword from "../component/ForgetPassword";
import RegisterPannerl from "../component/ResgisterPannel";
import Footer from "../component/Footer";
import { constant } from "@/constant";
import { useRouter } from "next/router";
import styles from '@/styles/selectMethod.module.css'
import AddressPannel from "../component/addressPannel";
export default function selectMethod(props) {
    console.log(useRouter().query);
    // console.log(props);
    const { deliverytype } = useRouter().query
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [visible, setVisible] = useState(false);
    const [page, setPage] = useState(1);//第一頁:選擇地址，第二頁選擇支付方式，第三頁結果。
    const [process, setProcess] = useState(1);//0尚未進行，1進行中，2完成


    const [index,setIndex]=useState(1);

    const [username,setUsername]=useState("");
    const [address,setAddress]=useState("");
    const [mobile,setMobile]=useState("");
    const [add_vis,setAdd_vis]=useState(false)

    const checkProcess = (index) => {

    }

    return (<div>
        <DynamicComponent cateList={props.cateList} setLogin={setLogin} />
        <div className={styles.total_layout}>
            <div>
                <div style={{ display: "flex", justifyContent: 'space-around', marginLeft: '5%', marginRight: '5%' }}>
                    <div style={{ flex: 1 }}></div>
                    <div>選擇地址</div>
                    <div style={{ flex: 1 }}></div>
                    <div>選擇支付方式</div>
                    <div style={{ flex: 1 }}></div>
                    <div>支付結果</div>
                    <div style={{ flex: 1 }}></div>
                </div>
                <div style={{ display: "flex", justifyContent: 'space-around', alignItems: 'center' }}>
                    <div className={
                        page >= 1 ? styles.complete : styles.wrong
                    } style={{ height: 4, flex: 1 }}></div>
                    <div className={
                        page >= 2 ? styles.complete : styles.wrong
                    } style={{ width: 20, height: 20, borderRadius: 50 }}></div>
                    <div className={
                        page >= 2 ? styles.complete : styles.wrong
                    } style={{ height: 4, flex: 1 }}></div>
                    <div className={
                        page >= 3 ? styles.complete : styles.wrong
                    } style={{ width: 20, height: 20, borderRadius: 50 }}></div>
                    <div className={
                        page >= 3 ? styles.complete : styles.wrong
                    } style={{ height: 4, flex: 1 }}></div>
                    <div className={
                        page >= 4 ? styles.complete : styles.wrong
                    } style={{ width: 20, height: 20, borderRadius: 50, backgroundColor: 'red' }}></div>
                    <div className={
                        page >= 4 ? styles.complete : styles.wrong
                    } style={{ height: 4, flex: 1, background: 'red' }}></div>
                </div>
            </div>
            <div style={{ marginTop: 24 }}>
                {
                    page === 1 && <div>
                        <div style={{display:'flex',justifyContent:'space-between'}}>
                            <div>选择地址</div>
                            <div onClick={()=>setAdd_vis(true)} style={{cursor:'pointer'}}>新增地址&gt;&gt;</div>
                        </div> 
                        <div style={{display:'flex',flexWrap:'wrap'}}>
                            <div className={styles.addressItem} style={{  height: 120 }}>
                                <div className={index===1?styles.check:styles.uncheck} style={{width:'10%'}}>

                                </div>
                                <div className={styles.addressItemDetail} style={{paddingLeft:4}}>
                                    <div>收件人:</div>
                                    <div>地址:</div>
                                    <div>电话号码:</div>
                                </div>
                            </div>
                            <div className={styles.addressItem} style={{  height: 120 }}>
                                <div className={index!==1?styles.check:styles.uncheck} style={{width:'10%'}}>

                                </div>
                                <div className={styles.addressItemDetail} style={{paddingLeft:4}}>
                                    <div>收件人:</div>
                                    <div>地址:</div>
                                    <div>电话号码:</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    //  :<div></div>
                }

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
        {
            <AddressPannel visible={add_vis} close={()=>setAdd_vis(false)}  />
        }
    </div>)
}


export async function getStaticProps() {
    //  //console.log(constant.api_url);
    // const response = await fetch(
    //     `${constant.api_url}/api/flowercategory/index`
    // );
    // let data = await response.json();



    return {
        props: {
            // cateList: data.data,
            cateList: [],
        },
    };
}