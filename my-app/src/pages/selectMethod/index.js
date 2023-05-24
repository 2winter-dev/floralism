
import DynamicComponent from "../component/Dynamic";
import { useState } from "react";
import LoginPannel from "../component/LoginPannel";
import ForgetPassword from "../component/ForgetPassword";
import RegisterPannerl from "../component/ResgisterPannel";
import Footer from "../component/Footer";
import { constant } from "@/constant";
import { useRouter } from "next/router";
import styles from '@/styles/selectMethod.module.css'
export default function selectMethod(props) {
    console.log(useRouter().query);
    // console.log(props);
    const { deliverytype } = useRouter().query
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [visible, setVisible] = useState(false);
    const [page,setPage]=useState(1);//第一頁:選擇地址，第二頁選擇支付方式，第三頁結果。
    const [process,setProcess]=useState(1);//0尚未進行，1進行中，2完成
    

    const checkProcess=(index)=>{
        
    }

    return (<div>
        <DynamicComponent cateList={props.cateList} setLogin={setLogin} />
        <div className={styles.total_layout}>
            <div>
                <div style={{ display: "flex", justifyContent: 'space-around',marginLeft:'5%',marginRight:'5%' }}>
                    <div style={{flex:1}}></div>
                    <div>選擇地址</div>
                    <div style={{flex:1}}></div>
                    <div>選擇支付方式</div>
                    <div style={{flex:1}}></div>
                    <div>支付結果</div>
                    <div style={{flex:1}}></div>
                </div>
                <div style={{ display: "flex", justifyContent: 'space-around',alignItems:'center' }}>
                    <div className={
                        process===1? styles.processing:styles.compile                    
                    } style={{height:4,flex:1}}></div>
                    <div style={{width:20,height:20,borderRadius:50,backgroundColor:'red'}}></div>
                    <div style={{height:4,flex:1,background:'red'}}></div>
                    <div style={{width:20,height:20,borderRadius:50,backgroundColor:'red'}}></div>
                    <div style={{height:4,flex:1,background:'red'}}></div>
                    <div style={{width:20,height:20,borderRadius:50,backgroundColor:'red'}}></div>
                    <div style={{height:4,flex:1,background:'red'}}></div>
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


export async function getStaticProps() {
    //  //console.log(constant.api_url);
    const response = await fetch(
        `${constant.api_url}/api/flowercategory/index`
    );
    let data = await response.json();



    return {
        props: {
            cateList: data.data,

        },
    };
}