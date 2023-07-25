import styles from '@/styles/Home.module.css'
import G_styles from '@/styles/goodsScroll.module.css'
import GoodsItem from './GoodsItem'
import { useEffect, useState } from 'react'
import { useMutation } from '@tanstack/react-query';
import m_api from '../../m_api';
import { ToastContainer, toast } from 'react-toastify';
export default function GoodsScoll(props) {
  const [goodsList, setGoodsList] = useState(
    props.list
  );
  // ////////////////////////console.log("===============");
  // ////////////////////////console.log(props.list);
  // //////////////////////////console.log(props.maxPage);
  // //////////////////////////////console.log(props.list);
  ////////////////////////////////console.log(props);
  ////////////////////////////////console.log("0000");
  // //////////////////////////////console.log(props.list);
  ////////////////////////////////console.log(props);
  // const [btnList, setBtnList] = useState(props.list.length);
  // const [props.page, setprops.page] = useState(props.page);
  // const [props.list.length, setprops.list.length] = useState(props.list.length);
  ////////////////////////////////console.log(props.list.length)
  const setBtn = () => {
    switch (props.page) {
      case 1: {
        if(props.maxPage===3){
          return [1,2,3];
        }
        if(props.maxPage===2){
          return [1,2];
        }
        if(props.maxPage===1){
          return [];
        }
      }
      case 2: {
        if (props.maxPage === 3) {
          //////////////////////////console.log("是3");
          return ([1, 2, 3]);
        } else if(props.maxPage===2){
          //////////////////////////console.log("是2");
          return ([1, 2])
        }else{
          return ([1,2,3,4]);
        }
      }
      // case props.list.length-props.page=2:([props.list.length]];
      case props.maxPage - 1: return ([props.page - 2, props.page - 1, props.page, props.maxPage])
      case props.maxPage: return ([props.page - 2, props.page - 1, props.page])
      default: return ([props.page - 2, props.page - 1, props.page, props.page + 1, props.page + 2]);
    }
  }
  //////////////////////////////////console.log("最大页面发生变化")
  //////////////////////////////////console.log("当前页面发生变化")
  // //////////////////////////////////console.log(props.page,props.page)
  // useEffect(()=>{

  // },[])
  // 大页面为8，小页面为4，当大页面切换至小页面时。
  const fetchGoods=useMutation({
     mutationKey:['PageFetchGoods',props.perPage],
     mutationFn:(data)=>m_api.fetchGoods(data) 
  })
  const toFetchGoods=(page)=>{
    ////////////////////////////////console.log("====");
    ////////////////////////////////console.log(page);
    fetchGoods.mutate({keyword:"",flower_category_name:props.id,listRows:props.perPage,page:page},{
      onSuccess:async(res)=>{
        // let _res=await res.json();
        // //////////////////////////////console.log(_res);
        props.setList(res.data.data);
      },
      onError:(res)=>{
        // //////////////////////////////console.log(res);
        toast.error("獲取失敗");
      }
    })

  }


  return (<div style={{...props.top_style}}>
    {/* 標題 */}
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <div className={styles.distance}></div>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.distance}></div>
    </div>
    <section>
        <div style={{ display: 'flex', flexWrap: 'wrap',  marginTop: 14 }}>
          {
            !!props?.list?.length ? props.list.map((item, index) => {
              ////////////////////////console.log(item);
              return <GoodsItem top_style={{marginTop:12}} key={index} src={item.src} item={item} title={item.categoryname} price={item.price} type={props.type} animation={props.animation} />
            }):<div style={{width:'100%',textAlign:'center'}}>商品列表為空</div>
          }
          {/* <GoodsItem src="/homepage/圖1.png" title={'綠色'} type={'category'} /> */}
        </div>
    </section>
    <div className={G_styles.btn_list}>
      {props.maxPage>1 &&<div style={{ display: 'flex',...props.ButtonGroupStyle }}>
        {
          props.page > 3 && <div>....</div>
        }
        {
          setBtn().map((item, index) => {
            return <div key={index} onClick={() => {
              props.setPage(item);
              toFetchGoods(item);
              ////////////////////////////////console.log("Page change");
            }}
              className={item === props.page ? G_styles.select : "common"}
              style={{ marginLeft: 8, cursor: 'pointer', marginRight: 4, paddingLeft: props.page >= 10 ? 5 : 12, paddingRight: props.page >= 10 ? 5 : 12, paddingTop: 4, paddingBottom: 4, borderRadius: 50 }}>{item}</div>
          })
        }
        {
          props.maxPage - props.page > 2 && <div>....</div>
        }
      </div>}
    </div>
  </div>)

}
