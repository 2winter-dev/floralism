import styles from '@/styles/goodsItem.module.css'
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
export default function GoodsItem(props) {
    let router = useRouter();
    // if (props.type !== "category" && props.type !== "carsouel"){
    //     //console.log(props.item);
    // }
    if (props.type !== "category" && props.type !== "carsouel") {
        return (

            <div className={`${styles.GoodsItem}`} onClick={() => {
                // router.push(`/production/${props.item.id}`)
            }} style={{ padding: '2%', ...props.top_style }}>

                <Link href={`/production/${props.item.id}`}>
                    <div className={props.animation && (props.type === "category" || props.type === "carsouel") ? styles.goods_img_cover : ""} style={{ position: 'relative', ...props.imgTopStyle }}>
                        {/* <div>
                   <Image alt="" src={props?.item?.photoimage} style={{ width: '100%', display: 'block', ...props.imgStyle }} fill className={props.animation === "toLarge" ? `${styles.goods_img} ${styles.an_fangda}` : `${styles.goods_img}`} />
                </div> */}
                        <img alt={props?.item?.alt?.length ? props?.item?.alt[0] : (props.item?.categoryname)} src={props?.item?.photoimage} style={{ width: '100%', display: 'block', ...props.imgStyle }} className={props.animation === "toLarge" ? `${styles.goods_img} ${styles.an_fangda}` : `${styles.goods_img}`} />

                        {props.item?.photoimages?.length && props.item?.photoimages[0] && <img alt={props?.item?.alt?.length > 1 ? props?.item?.alt[1] : props.item.flowername + "1"} src={props?.item?.photoimages[0]} style={{ borderRadius: 16 }} className={styles.goods_hover_img} />}
                        {
                            <button className={styles.buy_goods_btn}>點擊購買</button>
                        }
                    </div>
                    {/* <div>{props.item.id}</div> */}
                    {props.type === "category" ?
                        <div style={{ width: '100%', marginTop: 16, display: 'flex' }}>
                            <div style={{ ...props.style }} className={styles.goods_title}>{props.item.categoryname}</div>
                        </div> :
                        props.type === "carsouel" ? <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16, paddingLeft: '10%', paddingRight: '10%', alignItems: 'center' }}>
                            <div style={{ width: '100%', textOverflow: 'ellipsis', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>{props?.item?.flowername ?? ""}</div>
                            <div className={styles.goods_carsouel_price} style={{ width: '100%', textAlign: 'center', whiteSpace: 'nowrap' }}>{'HK$ ' + props?.item?.price ?? ""}</div>
                        </div> :
                            <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16, paddingLeft: '10%', paddingRight: '10%', alignItems: 'center' }}>
                                <div style={{ width: '100%', textOverflow: 'ellipsis', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden' }}>{props?.item?.flowername ?? ""}</div>
                                <div className={styles.goods_price} style={{ width: '100%', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden' }}>{'HK$ ' + props?.item?.price ?? ""}</div>
                            </div>}
                </Link>
            </div>
        )
    }
    // props.type !== "category"&&////////////console.log(props.item,props.type)
    return (


        <div className={`${styles.GoodsItem} ${props.type === "category" && styles.Iscategory}`} onClick={() => {
            // if (props.type !== "category") {
            //     location.href = `/production/${props.item.id}`
            // } else {
            //     location.href = `/category/${props.item.id}`
            // }
        }} style={{ padding: '2%', ...props.top_style }}>
            <a href={`${props.type !== "category" ? "/production/" + props.item.id : "/category/" + props.item.id}`}>
                <div className={props.type === "category" || props.type === "carsouel" ? styles.goods_img_cover : ""} style={{ position: 'relative', ...props.imgTopStyle }}>
                    <img alt={props?.item?.alt && props?.item?.alt?.length ? props.item.alt[0] : (props?.type === "category" ? props?.item?.categoryname : props?.item?.flowername)} src={props?.item?.photoimage} style={{ width: '100%', display: 'block', ...props.imgStyle }} className={props.animation === "toLarge" ? `${styles.goods_img} ${styles.an_fangda}` : `${styles.goods_img}`} />
                    {props.type !== "category" && props.type !== "carsouel" && props.item?.photoimages?.length && props.item?.photoimages[0] && <img alt="" src={props?.item?.photoimages[0]} style={{ borderRadius: 16 }} className={styles.goods_hover_img} />}
                    {
                        props.type === "carsouel" && <button className={styles.buy_btn}>點擊購買</button>
                    }
                </div>
                {props.type === "category" ?
                    <div style={{ width: '100%', marginTop: 16, display: 'flex' }}>
                        <div style={{ ...props.style }} className={styles.goods_title}>{props.item.categoryname}</div>
                    </div> :
                    props.type === "carsouel" ? <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16, paddingLeft: '10%', paddingRight: '10%', alignItems: 'center' }}>
                        <div style={{ width: '100%', textOverflow: 'ellipsis', textAlign: 'center', overflow: 'hidden', whiteSpace: 'nowrap' }}>{props?.item?.flowername ?? ""}</div>
                        <div className={styles.goods_carsouel_price} style={{ width: '100%', textAlign: 'center', whiteSpace: 'nowrap' }}>{'HK$ ' + props?.item?.price ?? ""}</div>
                    </div> :
                        <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16, paddingLeft: '10%', paddingRight: '10%', alignItems: 'center' }}>
                            <div style={{ width: '100%', textOverflow: 'ellipsis', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden' }}>{props?.item?.flowername ?? ""}</div>
                            <div className={styles.goods_price} style={{ width: '100%', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden' }}>{'HK$ ' + props?.item?.price ?? ""}</div>
                        </div>
                }


            </a>
        </div >

    )

}



