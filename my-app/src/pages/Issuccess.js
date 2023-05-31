import { useRouter } from "next/router"
import {useState,useEffect} from 'react'
import { constant } from "../constant";

export default function SuccessPage() {
    const router = useRouter();
    const [statement,setStatement]=useState("")
    // const { url } = router.query;
    // url.splice("?")
    ////////console.log(router.query.url);
    const getState = () => {
        //console.log(router.query.url)
        let res = router.query.url.split("?")[1];
        let _res = res.split("&")[0];
        let statement = _res.split("=")[0];
        ////////console.log(statement);
        return statement;
    }

    useEffect(()=>{
        if(router.query.url){
            setStatement(getState())
        }
    },[router.query.url])

    return (<div style={{height:700}}>
        {
            statement === "success" && <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',textAlign:'center',justifyContent:'center',alignItem:'center'}}>
                <span style={{fontSize:64,color:'green'}} className={"iconfont"}>&#xe633;</span>
                <div style={{marginTop:24,fontSize:28,fontWeight:600}}>付款成功</div>
                <div style={{marginTop:24,paddingLeft:12,paddingRight:12,paddingTop:4,paddingBottom:4,cursor:'pointer'}} onClick={()=>{
                        router.replace(`/selectMethod?page=3&type=success`);
                }} >點擊返回</div>
            </div>
        }
        {
             statement === "fail" && <div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',textAlign:'center',justifyContent:'center',alignItem:'center'}}>
                <span  style={{fontSize:64,color:'red'}} className={"iconfont"}>&#xe618;</span>
                <div style={{marginTop:24,fontSize:28,fontWeight:600}}>付款失敗</div>
                <div style={{marginTop:24,paddingLeft:12,paddingRight:12,paddingTop:4,paddingBottom:4,cursor:'pointer'}} onClick={()=>{
                     router.replace(`/selectMethod?page=3&type=fail`);
                }} >點擊返回</div>
            </div>
        }
        {
             statement === "cancel" &&<div style={{width:'100%',height:'100%',display:'flex',flexDirection:'column',textAlign:'center',justifyContent:'center',alignItem:'center'}}>
                <span  style={{fontSize:64}} className={"iconfont"}>&#xe618;</span>
                <div style={{marginTop:24,fontSize:28,fontWeight:600}}>你已取消支付</div>
                <div style={{marginTop:24,paddingLeft:12,paddingRight:12,paddingTop:4,paddingBottom:4,cursor:'pointer'}} onClick={()=>{
                   router.replace(`/selectMethod?page=3&type=cancel`);
                //    router.replace('/');
                }} >點擊返回</div>
            </div>
        }

    </div>)
}