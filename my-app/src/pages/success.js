import { useRouter } from "next/router"

export default function SuccessPage(){
    const { success,fail,cancel } = useRouter().query;
    console.log(success,fail,cancel);
    return (<div>
       
    </div>)
}