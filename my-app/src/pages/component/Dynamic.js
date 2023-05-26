
import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';
const DynamicLazyComponent = dynamic(
    () => import('./Header'),
    { ssr: false }
  )
export default function DynamicComponent(props) {
    return (<DynamicLazyComponent list={props.cateList} login={() => {
        if (Cookies.get('token')) {
            if(confirm("你先退出登陆吗")){
                Cookies.remove('token');
                Cookies.remove('user');
                location.reload();
            }
        } else props.setLogin(true);
    }} />)
}