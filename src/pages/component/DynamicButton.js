


import dynamic from 'next/dynamic';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
const DynamicLazyComponent = dynamic(
    () => import('./ShopcarBottom'),
    { ssr: false }
)
export default function DynamicButton(props) {
    let router = useRouter();
    return (<DynamicLazyComponent  />)
}