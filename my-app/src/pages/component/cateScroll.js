import styles from '@/styles/Home.module.css'
import G_styles from '@/styles/goodsScroll.module.css'
import GoodsItem from './GoodsItem'
import { useEffect, useState } from 'react'

export default function CateScroll(props) {
  const [goodsList, setGoodsList] = useState(
    props.list
  );
  //////////console.log("0000");
  ////console.log("=====");
  ////console.log(props.list);
  // //////////console.log(props);
  // const [btnList, setBtnList] = useState(props.list.length);
  // const [props.page, setprops.page] = useState(props.page);
  // const [props.list.length, setprops.list.length] = useState(props.list.length);
  //////////console.log(props.list.length)
  const setBtn = () => {
    switch (props.page) {
      case 1: {
        if (props?.list?.length === 3) {
          return [1, 2, 3];
        }
        if (props?.list?.length === 2) {
          return [1, 2];
        }
        if (props?.list?.length === 1) {
          return [];
        }
      }
      case 2: {
        if (props?.list?.length === 3) {
          //////////console.log("是3");
          return ([1, 2, 3]);
        } else if (props?.list?.length === 2) {
          //////////console.log("是2");
          return ([1, 2])
        } else {
          return ([1, 2, 3, 4]);
        }
      }
      // case props.list.length-props.page=2:([props.list.length]];
      case props?.list?.length - 1: return ([props.page - 2, props.page - 1, props.page, props?.list?.length])
      case props?.list?.length: return ([props.page - 2, props.page - 1, props.page])
      default: return ([props.page - 2, props.page - 1, props.page, props.page + 1, props.page + 2]);
    }
  }
  //////////console.log("最大页面发生变化")
  //////////console.log("当前页面发生变化")
  // //////////console.log(props.page,props.page)
  // useEffect(()=>{

  // },[])
  // 大页面为8，小页面为4，当大页面切换至小页面时。
  return (<div style={{ ...props.top_style }}>
    {/* 標題 */}
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {props.flag !== 0 && <div className={styles.distance}></div>}
      <div className={styles.title} style={{ whiteSpace: 'nowrap' }}>{props.title}</div>
      {props.flag !== 0 && <div className={styles.distance}></div>}
    </div>
    <section>
      <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: 12 }}>
        {
          props?.list?.length && props.list[props.page - 1].map((item, index) => {
            return <GoodsItem key={index} src={item.src} item={item} title={item.categoryname} price={item.price} type={props.type} animation={props.animation} />
          })
        }
      </div>
    </section>
    <div className={G_styles.btn_list}>
      <div style={{ display: 'flex', ...props.ButtonGroupStyle, marginTop: 15 }}>
        {
          props.page > 3 && <div>....</div>
        }
        {
          setBtn().map((item, index) => {
            return <div key={index} onClick={() => {
              props.setPage(item);
            }}
              className={
                item === props.page ?
                  G_styles.select
                  :
                  "common"
              }
              style={{ marginLeft: 8, cursor: 'pointer', marginRight: 4, paddingLeft: item >= 10 ? 8 : 12, paddingRight: item >= 10 ? 8 : 12, paddingTop: 4, paddingBottom: 4, borderRadius: 50 }}>{item}</div>
          })
        }
        {
          props?.list?.length - props.page > 2 && <div>....</div>
        }
      </div>
    </div>
  </div>)

}
