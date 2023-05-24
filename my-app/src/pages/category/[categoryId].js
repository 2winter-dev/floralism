import { constant } from "@/constant/index";
import Header from "../component/Header";
import styles from '@/styles/Home.module.css'
import Footer from "../component/Footer";
import Contactus from "../component/Contactus";
import LoginPannel from "../component/LoginPannel";
import RegisterPannerl from "../component/ResgisterPannel";
import ForgetPassword from "../component/ForgetPassword";
import style from '@/styles/banner.module.css'
import { useState, useEffect } from "react";
import { spliceArr } from "@/method";
import GoodsScoll from "../component/GoodsScroll";
import DynamicComponent from "../component/Dynamic";
export default function Category({ cateList, data }) {
    console.log(data);
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [visible, setVisible] = useState(false);
    const [flag, setFlag] = useState(1);
    const [category, setCategory] = useState([]);
    const [categoryPage, setCategoryPage] = useState(1);
    const [goodsList, setGoodsList] = useState([]);
    const [goodsPage, setGoodsPage] = useState(1);
    console.log(data);
    const resizeUpdate = (e) => {
        if (e.target.innerWidth <= 675) {
            //console.log("====", e.target.innerWidth);
            setFlag(0);
        } else if (e.target.innerWidth <= 1100) {
            setFlag(1)
        } else {
            //console.log("-----", e.target.innerWidth);
            setFlag(2);
        }
    }
    useEffect(() => {
        window.addEventListener("resize", resizeUpdate);
        window.innerWidth < 1100 ? (!flag && setFlag(true)) : (flag && setFlag(false))
        return () => {
            window.removeEventListener("resize", resizeUpdate);
        }
    }, [])
    useEffect(() => {
        //console.log("flag改變", flag);
        setCategory(spliceArr(cateList, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8));
        //console.log(spliceArr(GoodsPage,  !flag ? 4 :flag===1? 6:flag===2&&8))
        setGoodsList(spliceArr(data.data, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8));
        setGoodsPage(1);
        setCategoryPage(1);
    }, [flag])
    return (<div>
          <DynamicComponent cateList={cateList} setLogin={setLogin}/>
        <div style={{ width: '100%', position: 'relative',backgroundImage:`url(http://192.168.1.24:6353/uploads/20230523/637cfca2255479e7b2fb99f6364b11b4.png)` }} className={styles.banner} >
            {/* <Image priority src="/homepage/top-banner.png" width={1920} height={700} style={{width:'100%'}}/> */}
            <div style={{}} className={styles.top_banner_area}>
                <img src="http://192.168.1.24:6353/uploads/20230523/0c024bf065eaa139d865a7a6af18f7dc.png" width={'100%'} />
                <button style={{ border: 'none', display: 'block' }} className={styles.banner_buttom} >點擊選購</button>
            </div>
        </div>
        <div className={styles.goods_view}>
          <GoodsScoll
            title={cateList[0].categoryname}
            list={goodsList}
            page={goodsPage}
            setPage={setGoodsPage}
            type={''}
             
            />
        </div>
        <div style={{ width: '100%', position: 'relative' }}>
        {
            <img src={flag ? "http://192.168.1.24:6353/uploads/20230523/94430a50cbdf2a5a5a2d10a2af501ec3.png" : "http://192.168.1.24:6353/uploads/20230523/94430a50cbdf2a5a5a2d10a2af501ec3.png"} style={{ width: '100%', height: '100%', display: 'block' }}></img>
        }
        <div className={style.banner_desc} style={{}}>
            <div style={{ maxHeight: 200, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <img src="/小短文-訂製花束.png" style={{width:'100%'}} />
                </div>
            </div>
        </div>
    </div>
        <div className={styles.goods_list}>
            <GoodsScoll
                title={'【FLORALISM】 全部分类'}
                list={category}
                page={categoryPage}
                type={'category'}
                setPage={setCategoryPage}
            // click={() => //console.log("1")}
            />
        </div>
        <div className={styles.contactus}>
            <Contactus />
        </div>
        <Footer />
        {
            <LoginPannel login={login} close={() => setLogin(false)} toRegister={() => {
                setLogin(false);
                setRegister(true);
            }} toForget={() => {
                setLogin(false);
                setVisible(true);
            }
            } />
        }
        {
            <RegisterPannerl type={false} register={register} close={() => setRegister(false)} toLogin={() => {
                setLogin(true);
                setRegister(false)
            }} />
        }
        {
            <ForgetPassword type={0} close={() => setVisible(false)} visible={visible} toLogin={() => {
                setVisible(false);
                setLogin(true);
            }} />
        }
    </div>)
}


export async function getStaticPaths() {
    const response = await fetch(
        `${constant.api_url}/api/Flowercategory/allIndex`
    );
    const data = await response.json()
    let res = [];
    data.data.map((item, index) => {
        res.push({ params: { categoryId: item.id.toString() } });
      
    })
    console.log(res);
    // const data=await response.json()
    // TODO get product id to be array
    return {
        paths: res,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { params } = context;
    console.log(params);
    const response = await fetch(
        `${constant.api_url}/api/flowers/index?keyword=&flower_category_id=${params.categoryId}`
    );
    const tt_response = await fetch(
        `${constant.api_url}/api/flowercategory/index`
    );
    const tt_data = await tt_response.text()
    const data = await response.text()

    return {
        props: {
            cateList: JSON.parse(tt_data).data,
            data: JSON.parse(data).data,
        },
    };
}