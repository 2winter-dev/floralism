
import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
const DynamicLazyComponent = dynamic(
    () => import('./Header'),
    { ssr: false }
  )
export default function DynamicComponent(props) {
    let router=useRouter();
    return (<DynamicLazyComponent list={props.cateList} login={() => {
        if (Cookies.get('token')) {
            router.push('/User');
        } else props.setLogin(true);
    }} />)
}