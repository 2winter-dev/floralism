import { useRouter } from "next/router"


export default function ErrorPage(){
    const router=useRouter();
    return (<div style={{width:'100%',height:700,display:'flex',flexDirection:'column',textAlign:'center',justifyContent:'center',alignItem:'center'}}>
        <span className="iconfont" style={{fontSize:56}}>&#xe62a;</span>
        <span >哦豁，網絡開了點小差，請稍後重試</span>
        <div onClick={()=>router.replace('/')} style={{cursor:'pointer'}}>前往首頁</div>
    </div>)
}