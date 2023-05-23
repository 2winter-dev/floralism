import header from "@/styles/header.module.css"
import Link from "next/link"

export default function Header(props) {
    return (<div className={`${header.header_background}`}>
        <div className={`${header.header_layout}`}>
            <div className={`${header.logo}`}>
                <Link href={'/'}>
                <img src="/logo.png" style={{}} className={header.logo_pic} />
                </Link>
            </div>
            <div className={`${header.header_center}`}>
                {/* <div className={`${header.header_center_label}`}>
                    <div className={`${header.header_center_parent}`}>情人節花束 <span className={`iconfont ${header.dropdown_btn}`} style={{ fontSize: 10 }}>&#xe645;</span></div>
                    <div className={`${header.header_center_dropdown}`}>
                        <div>情人節花束</div>
                        <div>情人節禮物</div>
                    </div>
                </div>
                <div className={`${header.header_center_label}`}>
                    <div className={`${header.header_center_parent}`}>玫瑰熊</div>
                </div> */}
                {
                    props.list.length && props.list.map((item, index) => {
                        return (<div key={item.id} className={`${header.header_center_label}`}>
                            <div className={`${header.header_center_parent}`}>{item.categoryname}
                                {
                                    item.get_child && <span className={`iconfont ${header.dropdown_btn}`} style={{ fontSize: 10 }}>&#xe645;</span>
                                }
                            </div>
                            {item.get_child && <div className={`${header.header_center_dropdown}`}>
                                {
                                    item.get_child.map((it, ii) => {
                                        return (<Link href={`/category/${it.id}`} key={index.toString() + ii.toString()}>{it.categoryname}</Link>)
                                    })
                                }
                            </div>}
                        </div>)
                    })
                }

            </div>
            <div className={`${header.header_right}`}>
                <div>
                    <span style={{ cursor: "pointer" }} onClick={props.login} className={`iconfont ${header.mine_icon}`}>&#xe70e;</span>
                </div>
            </div>
        </div>
        <div className={`${header.header_menu}`}>
            <div className={`${header.header_cate_layout}`}>
                <div>分類</div>
            </div>
            <div className={`${header.dropdown}`}>
                {/* <div className={`${header.drop_item}`}>
                    <div className={`${header.drop_label}`}>情人節花束</div>
                    <div className={`${header.child_list}`}>
                        <div>情人節花束</div>
                        <div>情人節禮物</div>
                    </div>
                </div> */}
                {
                    props.list.map((item, index) => {
                        return (
                            <div key={index} className={`${header.drop_item}`}>
                                <div className={`${header.drop_label}`}>{item.categoryname}</div>
                                <div className={`${header.child_list}`}>
                                    {item.get_child && <div className={`${header.header_center_dropdown}`}>
                                        {
                                            item.get_child.map((it, ii) => {
                                                return (<Link href={`/category/${it.id}`} key={index.toString() + ii.toString()}>{it.categoryname}</Link>)
                                            })
                                        }
                                    </div>}
                                </div>
                            </div>
                       )
                    })
                }
                <div className={`${header.drop_item}`}>
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