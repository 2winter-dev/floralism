import styles from '@/styles/goodsItem.module.css'

export default function GoodsItem(props) {
    // //console.log(props)
    // console.log(props.item);
    return (<div className={styles.GoodsItem} onClick={() => {
        
        if (props.type !== "category") {
            location.href = `/production/${props.item.id}`
        } else {
            location.href = `/category/${props.item.id}`
        }
    }} style={{ padding: 12, ...props.top_style }}>
        <div className={props.animation ? styles.goods_img_cover : ""} style={{ position: 'relative' }}>
            <img src={props.item.photoimage} style={{ width: '100%', ...props.imgStyle }} className={styles.goods_img} />
            {
                props.type !== "category" && <button className={styles.buy_btn}>點擊購買</button>
            }
        </div>
        {/* <div>{props.item.id}</div> */}
        {props.type === "category" ?
            <div style={{ width: '100%', marginTop: 16, display: 'flex' }}>
                <div className={styles.goods_title}>{props.item.categoryname}</div>
            </div> :
            props.type === "carsouel" ? <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16, paddingLeft: '10%', paddingRight: '10%', alignItems: 'center' }}>
                <div style={{ width: '100%', textOverflow: 'ellipsis', textAlign: 'center', overflow: 'hidden' }}>{props.item.flowername}</div>
                <div className={styles.goods_carsouel_price}>{'HK$ ' + props.item.price}</div>
            </div> :
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: 16, paddingLeft: '10%', paddingRight: '10%', alignItems: 'center' }}>
                    <div style={{ width: '100%', textOverflow: 'ellipsis', textAlign: 'center', overflow: 'hidden' }}>{props.item.flowername}</div>
                    <div className={styles.goods_price}>{'HK$ ' + props.item.price}</div>
                </div>}
    </div>)

}



