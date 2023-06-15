import header from "@/styles/header.module.css";
import Cookies from "js-cookie";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Header(props) {
  const router = useRouter();

  const [navStatus, setNavStatus] = useState(false);
  const [index, setIndex] = useState();

    return (<div className={`${header.header_background}`}>
        <div className={`${header.header_layout}`}>
            <div className={`${header.logo}`}>
                <Link href={'/'}>
                    <img alt="" src="/logo.png" style={{}} className={header.logo_pic} />
                </Link>
            </div>
            <div className={`${header.header_center}`}>
                {
                    props?.list?.length && props.list.map((item, index) => {
                        if(index>2) return null; 
                        return (<div key={item.id} className={`${header.header_center_label}`}>
                            <div onClick={()=>router.push(!!item?.get_child.length&&`/category/${item.get_child[0].id}`)} className={`${header.header_center_parent}`}>{item.categoryname}
                                {
                                    !!item.get_child?.length && <span className={`iconfont ${header.dropdown_btn}`} style={{ fontSize: 10 }}>&#xe645;</span>
                                }
                            </div>
                            {
                                !!item.get_child?.length && <div className={`${header.header_center_dropdown}`}>
                                    {
                                        item.get_child.map((it, ii) => {
                                            return (<div key={index.toString() + ii.toString()}>
                                                <a href={`/category/${it.id}`} >{it.categoryname}</a>
                                                  {/* <Link href={`/category/${it.id}`}>{it.categoryname}</Link> */}
                                                </div>)
                                        })
                                    }
                                </div>}
                        </div>)
                    })
                }
                <div className={`${header.header_center_label}`}>
                    <Link href={`/ContactPage`} >
                        <div className={`${header.header_center_parent}`}>聯絡我們</div>
                    </Link>
                </div>
                <div className={`${header.header_center_label}`}>
                    <Link href={`/Aboutus`} >
                        <div className={`${header.header_center_parent}`}>關於我們</div>
                    </Link>
                </div>
            </div>
            <div className={`${header.header_right}`} style={{ marginLeft: 10 }}>
                <div onClick={() => { Cookies.get("token") ? router.push({pathname:`/User`,query:{page:"message"}}) : props.login() }} style={{ display: 'flex', alignItems: 'center', cursor: "pointer" }}>
                    <span style={{}} className={`iconfont ${header.mine_icon}`}>&#xe70e;</span>
                    {
                        Cookies.get("token") ? " 歡迎" : " 登入"
                    }
                </div>
            </div>
        </div>
        <div className={`${header.header_menu}`} >
            <div className={`${header.header_cate_layout}`} onClick={() => setNavStatus(!navStatus)} style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span >分類</span>
                <span style={{ display: 'inline-block', rotate: navStatus ? '45deg' : '0deg', fontSize: 20, transition: '200ms' }}>{navStatus ? '+' : '≡'}</span>
            </div>
            <div className={`${header.dropdown}`} style={{ display: navStatus ? 'block' : "none" }}>
                {
                    props?.list?.length && props.list.map((item, i) => {
                        if(!item?.get_child?.length) return;
                        return (
                            <div onClick={()=>{
                                index===i?setIndex():setIndex(i)
                            }} key={i} className={`${header.drop_item}`}>
                                <div className={`${header.drop_label}`}>{item.categoryname}</div>
                                <div className={index===i?`${header.show_list}`:`${header.child_list}`}>
                                    {item.get_child &&
                                        item.get_child.map((it, ii) => {
                                            if(ii>3){
                                                ////console.log("123");
                                                return;
                                            }
                                            return (<div key={index + ii.toString()} className={`${header.header_center_dropdown}`}>
                                                {/* <Link href={`/category/${it.id}`} >{it.categoryname}</Link> */}
                                                <a href={`/category/${it.id}`} >{it.categoryname}</a>
                                            </div>)
                                        })

                                    }
                                </div>
                            </div>
                        )
                    })
                }
                <div className={`${header.drop_item}`}>
                    <div className={`${header.drop_label}`}>
                        <Link href={'/Aboutus'} >關於我們</Link>

                    </div>
                    <div className={`${header.drop_label}`}>
                        <Link href={'/ContactPage'} >聯絡我們</Link>

                    </div>
                    <div className={`${header.child_list}`}>
                    </div>
                </div>
            </div>
        </div>
    </div>)
}
