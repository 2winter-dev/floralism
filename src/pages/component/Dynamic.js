
import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
const DynamicLazyComponent = dynamic(
    () => import('./Header'),
    { ssr: false }
)
export default function DynamicComponent(props) {
    let router = useRouter();
    return (<DynamicLazyComponent list={props.cateList} login={() => {  
        //////////////////console.log("123");
        if (Cookies.get('token')) {
            // alert("你要退出嗎?")
        } else props.setLogin(true);
    }} />)
}