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
import Head from "next/head";
import CateScroll from "../component/cateScroll";
import { useRouter } from "next/router";
export default function Category({ allcate, cateList, data,top_banner,middle_banner }) {
    // ////////console.log("----");
    //////console.log(data);
    const router = useRouter();
    const [login, setLogin] = useState(false);
    const [register, setRegister] = useState(false);
    const [visible, setVisible] = useState(false);
    const [flag, setFlag] = useState(1);
    const [category, setCategory] = useState([]);
    const [categoryPage, setCategoryPage] = useState(1);
    const [goodsList, setGoodsList] = useState([]);
    const [goodsPage, setGoodsPage] = useState(1);
    const resizeUpdate = (e) => {
        if (e.target.innerWidth <= 675) {
            setFlag(0);
        } else if (e.target.innerWidth <= 1100) {
            setFlag(1)
        } else {
            setFlag(2);
        }
    }
    useEffect(() => {
        window.addEventListener("resize", resizeUpdate);
        if (window.innerWidth <= 675) {
            //////////console.log("====", e.target.innerWidth);
            setFlag(0);
        } else if (window.innerWidth <= 1100) {
            setFlag(1)
        } else {
            //////////console.log("-----", e.target.innerWidth);
            setFlag(2);
        }
        return () => {
            window.removeEventListener("resize", resizeUpdate);
        }
    }, [])
    useEffect(() => {
        //////////console.log("flag改變", flag);
        setCategory(spliceArr(allcate, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8, 1));
        //////////console.log(spliceArr(GoodsPage,  !flag ? 4 :flag===1? 6:flag===2&&8))
        setGoodsList(spliceArr(data.data, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8));
        setGoodsPage(1);
        setCategoryPage(1);
    }, [flag])

    // const checkname = () => {
    //     //    ////////console.log(goodsList);
    //     let res = allcate.filter((item) => {
    //         if (item.id === data.data[0].flower_category_id) {
    //             return item;
    //         }
    //     })

    //     return res[0].categoryname;
    // }

    useEffect(() => {
        // ////////console.log(goodsList);
    }, [goodsList])
    ////console.log("======");
    ////console.log(data);
    return (<div>
        <Head>
            {/* <meta title={}  /> */}
        </Head>
        <DynamicComponent cateList={cateList} setLogin={setLogin} />
        <div style={{ width: '100%', position: 'relative', backgroundImage:`url(${top_banner.coverimage})`,marginBottom:0 }} className={styles.banner} >
            {/* <Image priority src="/homepage/top-banner.png" width={1920} height={700} style={{width:'100%'}}/> */}
            <div className={styles.top_banner_area} style={{}}>
                <img src={`${constant.api_url}/uploads/20230523/0c024bf065eaa139d865a7a6af18f7dc.png`} width={'100%'} />
                <button onClick={() => data.data.length?router.push(`/productSearch/${data.data[0].flower_category_id}`):router.push('/')} style={{ border: 'none', display: 'block', cursor: 'pointer' }} className={styles.banner_buttom} >點擊選購</button>
            </div>
        </div>
        <div className={styles.goods_view} style={{ marginBottom: 32 }}>
            <GoodsScoll
                title={data.category_name}
                list={goodsList}
                page={goodsPage}
                id={data?.data[0]?.flower_category_id ?? 0}
                setPage={setGoodsPage}
                perPage={!flag ? 4 : flag === 1 ? 6 : flag === 2 && 8}
                maxPage={data.last_page}
                setList={setGoodsList}
                animation
                type={''}
            />
        </div>
        <div style={{ width: '100%', position: 'relative' }}>
            {
                <img src={flag ? `${constant.api_url}/uploads/20230523/94430a50cbdf2a5a5a2d10a2af501ec3.png` : `${constant.api_url}/uploads/20230523/94430a50cbdf2a5a5a2d10a2af501ec3.png`} style={{ width: '100%', height: '100%', display: 'block' }}></img>
            }
            <div className={style.banner_desc} style={{}}>
                <div style={{ maxHeight: 200, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img src="/小短文-訂製花束.png" style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.goods_list}>
            <CateScroll
                title={'【FLORALISM】 全部分类'}
                list={category}
                page={categoryPage}
                type={'category'}
                perPage={!flag ? 4 : flag === 1 ? 6 : flag === 2 && 8}
                setPage={setCategoryPage}
            // click={() => //////////console.log("1")}
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

    </div>)
}


export async function getStaticPaths() {
    const response = await fetch(
        `${constant.api_url}/api/Flowercategory/allIndex`, {
        mode: 'cors',
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type",
        }
    }
    );
    const data = await response.json()
    let res = [];
    data.data.map((item, index) => {
        res.push({ params: { categoryId: item.id.toString() } });

    })
    // ////////console.log(res);
    // const data=await response.json()
    // TODO get product id to be array
    return {
        paths: res,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { params } = context;
    // ////////console.log(params);
    
    const response = await fetch(
        `${constant.api_url}/api/flowers/index?keyword=&flower_category_id=${params.categoryId}`, {
        mode: 'cors',
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type",
        }
    }
    );

    const banner = await fetch(`${constant.api_url}/api/banner/index`, {
        mode: 'cors',
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type",
        }
    })

    const tt_response = await fetch(
        `${constant.api_url}/api/flowercategory/index`, {
        mode: 'cors',
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type",
        }
    }
    );
    const allcate_response = await fetch(
        `${constant.api_url}/api/Flowercategory/allIndex`, {
        mode: 'cors',
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type",
        }
    }
    )
    let allcate = await allcate_response.json();
    const tt_data = await tt_response.text()
    const data = await response.text();
    const banner_list=await banner.json();
    //console.log("------------");
    //console.log(JSON.parse(data).data);
    ////console.log("--------");
    ////console.log(banner_list.data);
    ////console.log(banner_list.data.top_banner.web);
    ////console.log(banner_list.data.middle_banner.web);
    ////console.log(params.categoryId)
    let top_banner=banner_list.data.top_banner.web.filter((item)=>{
        if(item.flower_category_ids.includes(parseInt(params.categoryId))){
            ////console.log("找到了");
            return item;
        }
    })
    let middle_banner=banner_list.data.middle_banner.web.filter((item)=>{
        if(item.flower_category_ids.includes(parseInt(params.categoryId))){
            return item;
        }
        // ////console.log(item.flower_category_ids.includes(params.categoryId))
    })
    ////console.log(top_banner,middle_banner);
    return {
        props: {
            allcate: allcate.data,
            cateList: JSON.parse(tt_data).data,
            data: JSON.parse(data).data,
            top_banner:middle_banner.length?top_banner[0]:{coverimage:`${constant.api_url}/uploads/20230523/637cfca2255479e7b2fb99f6364b11b4.png)`},
            middle_banner:middle_banner.length?middle_banner[0]:{coverimage:`${constant.api_url}/uploads/20230523/94430a50cbdf2a5a5a2d10a2af501ec3.png`},
        },
    };
}