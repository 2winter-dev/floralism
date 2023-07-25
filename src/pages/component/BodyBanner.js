import style from '@/styles/banner.module.css'
import styles from '@/styles/Home.module.css'


export default function BodyBanner(props) {
    //////////////////////////console.log("flag为:"+props.flag);
    return (<div style={{ width: '100%', position: 'relative' }}>
        {
            <img alt={props.flag === 0 ? props.imgTiny : props.img} src={
                // props.flag === 0 ? props.imgTiny :
                props.flag === 0 ? props.imgTiny : props.img} style={{ width: '100%', height: '100%', display: 'block' }}></img>
        }
        <div className={style.banner_desc} style={{}}>
            <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {
                        <div className={styles.distance} style={{ borderBottomWidth: 1, borderBottomColor: 'white',flex:1 }}></div>
                    }
                    <div className={styles.title} style={{ color: "white",fontSize:'1.25vw', marginRight: 16, marginLeft: 16 }}>{props.title}</div>
                    {
                        <div className={styles.distance} style={{ borderBottomWidth: 1, borderBottomColor: 'white',flex:1 }}></div>
                    }
                </div>
                <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column',marginTop:'2%'}} className={style.desc_layout}>
                    <div style={{fontSize:'1.25vw',textAlign:'center'}}>{props.desc1}</div>
                    <div style={{fontSize:'1.25vw',marginTop: '1%',textAlign:'center' }}>{props.desc2}</div>
                </div>
            </div>
        </div>
    </div>)
}