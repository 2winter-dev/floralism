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
import DynamicButton from "../component/DynamicButton";
import GoodsItem from "../component/GoodsItem";
// import { ToastContainer, toast } from 'react-toastify';
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
export default function Category({ categoryId, allcate, meta, cateList, data, top_banner, middle_banner, tiny_top_banner, tiny_middle_banner }) {
    // ////////////////console.log("----");
    //////////////console.log(data);
    //console.log(tiny_middle_banner.alt)
    // //////console.log(tiny_top_banner,tiny_middle_banner);
    const router = useRouter();
    const [login, setLogin] = useState(false);
    const [bannerSize, setBannerSize] = useState(false);
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
        setBannerSize(window.innerWidth <= 800 ? true : false);
    }
    useEffect(() => {
        window.addEventListener("resize", resizeUpdate);
        if (window.innerWidth <= 675) {
            //////////////////console.log("====", e.target.innerWidth);
            setFlag(0);
        } else if (window.innerWidth <= 1100) {
            setFlag(1)
        } else {
            //////////////////console.log("-----", e.target.innerWidth);
            setFlag(2);
        }
        setBannerSize(window.innerWidth <= 800 ? true : false);
        return () => {
            window.removeEventListener("resize", resizeUpdate);
        }
    }, [])
    useEffect(() => {
        //////////////////console.log("flag改變", flag);
        setCategory(spliceArr(allcate, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8, 1));
        //////////////////console.log(spliceArr(GoodsPage,  !flag ? 4 :flag===1? 6:flag===2&&8))
        setGoodsList(spliceArr(data.data, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8));
        setGoodsPage(1);
        setCategoryPage(1);
    }, [flag])

    // const checkname = () => {
    //     //    ////////////////console.log(goodsList);
    //     let res = allcate.filter((item) => {
    //         if (item.id === data.data[0].flower_category_id) {
    //             return item;
    //         }
    //     })

    //     return res[0].categoryname;
    // }

    useEffect(() => {
        // ////////////////console.log(goodsList);
    }, [goodsList])
    ////////////console.log("======");
    ////////////console.log(data);
    return (<div>
        <Head>
            {/* <meta title={`${meta.title}`}  /> */}
            <title>{`${meta.title !== "" ? meta.title : (data.category_name + " | 「Floralism」香港花店")}`}</title>
            <meta name={'descirption'} content={`${meta.metadescription}`} />
            <meta name={'keywords'} content={`${meta.title !== "" ? meta.title : data.category_name}`} />
        </Head>
        <DynamicComponent cateList={cateList} setLogin={setLogin} />
        <div style={{ width: '100%', position: 'relative', backgroundImage: bannerSize ? `url(${tiny_top_banner.coverimage})` : `url(${top_banner.coverimage})`, marginBottom: 0 }} className={styles.banner} >
            {/* <Image priority src="/homepage/top-banner.png" width={1920} height={700} style={{width:'100%'}}/> */}
            <div className={(categoryId === "9" || categoryId === "10" || categoryId === "11") ? styles.spec_banner : styles.top_banner_area} style={{ display: "flex", flexDirection: 'column', alignItems: 'center' }}>
                <img alt={bannerSize ?(tiny_top_banner?.alt.length?tiny_top_banner.alt[0]:"") : (top_banner.alt?.length?top_banner.alt[0]:"")} src={bannerSize ? tiny_top_banner.descriptionimage : top_banner.descriptionimage} width={'100%'} />
                <button onClick={() => {
                    //console.log(data);
                    data.data.length ?
                        router.push(`/productSearch/${data.data[0].flower_category_id}`)
                        : router.push('/')
                }} style={{ border: 'none', display: 'block', cursor: 'pointer' }} className={styles.banner_buttom} >點擊選購</button>
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
                <img alt={flag < 2 ? (tiny_middle_banner?.alt?.length>2?tiny_middle_banner.alt[2]:"") : (middle_banner?.alt?.length>2?middle_banner.alt[2]:"")} src={flag < 2 ? tiny_middle_banner.coverimage : middle_banner.coverimage} style={{ width: '100%', height: '100%', display: 'block' }}></img>
            }
            <div className={style.banner_desc} style={{}}>
                <div style={{ maxHeight: 200, overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <img alt={flag < 2 ? (tiny_middle_banner?.alt?.length>1?tiny_middle_banner.alt[1]:"") : (middle_banner?.alt?.length>1?middle_banner.alt[1]:"")} src={flag < 2 ? tiny_middle_banner.descriptionimage : middle_banner.descriptionimage} style={{ width: '100%' }} />
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.goods_list}>
            {/* <CateScroll
                title={'【FLORALISM】 全部分類'}
                list={category}
                page={categoryPage}
                type={'category'}
                perPage={!flag ? 4 : flag === 1 ? 6 : flag === 2 && 8}
                setPage={setCategoryPage}
            // click={() => //////////////////console.log("1")}
            /> */}
            <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {flag !== 0 && <div className={styles.distance}></div>}
                    <div className={styles.title} style={{ whiteSpace: 'nowrap', flex: 1 }}>{'【FLORALISM】 全部分類'}</div>
                    {flag !== 0 && <div className={styles.distance}></div>}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                    {
                        allcate.map((item, index) => {
                            return <GoodsItem key={index} src={item.src} item={item} title={item.categoryname} price={item.price} type={'category'} animation={'animation'} />
                        })
                    }
                </div>
            </div>
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
        {/* {!login && <ToastContainer />} */}
        {!login && <DynamicButton />}
        {!login && <Toaster
            position="top-center"
        />}
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
    const data = await response.json();
    ////console.log(data);
    let res = [];
    data.data.map((item, index) => {
        res.push({ params: { categoryId: item.id.toString() } });

    })
    //console.log(res);
    // ////////////////console.log(res);
    // const data=await response.json()
    // TODO get product id to be array
    return {
        paths: res,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { params } = context;
    ////console.log(params);

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
    const banner_list = await banner.json();
    ////console.log("------------");
    //////////console.log(JSON.parse(data).data);
    ////////////console.log("--------");
    ////console.log(banner_list.data.top_banner);
    // //////console.log(banner_list.data.top_banner.web);
    // //////console.log(banner_list.data.middle_banner);
    ////////////console.log(params.categoryId)

    // let list=JSON.parse(tt_data);
    // //////console.log(list);
    //////console.log(allcate.data);
    let res = allcate.data.filter((item, index) => {
        //////console.log("=========");
        //////console.log(params.categoryId);
        //////console.log(item.id);
        if (item.id.toString() === params.categoryId) {
            //////console.log("找到了");
            return item;
        }
    })
    ////console.log(res[0]);
    let meta = {
        keyword: res[0].keywords,
        title: res[0].metatitle ?? "",
        metadescription: res[0].metadescription ?? "",
    }
    ////console.log(meta);

    let top_banner = banner_list.data.top_banner.web.filter((item) => {
        ////console.log(item.flower_category_ids,params.categoryId)
        if (item.flower_category_ids.includes(parseInt(params.categoryId))) {
            ////////////console.log("找到了");
            return item;
        }
    })
    let tiny_top_banner = banner_list.data.top_banner.mobile.filter((item) => {

        if (item.flower_category_ids.includes(parseInt(params.categoryId))) {
            ////////////console.log("找到了");
            return item;
        }
    })
    let middle_banner = banner_list.data.middle_banner.web.filter((item) => {
        if (item.flower_category_ids.includes(parseInt(params.categoryId))) {
            return item;
        }
        // ////////////console.log(item.flower_category_ids.includes(params.categoryId))
    })
    let tiny_middle_banner = banner_list.data.middle_banner.mobile.filter((item) => {
        //////console.log(item.flower_category_ids);
        if (item.flower_category_ids.includes(parseInt(params.categoryId))) {
            ////////////console.log("找到了");
            return item;
        }
    })
    //console.log("======================");
    //console.log(top_banner, middle_banner);
    // ////console.log(tiny_top_banner, tiny_middle_banner);
    // //////console.log(JSON.parse(data).data);
    // //////console.log()
    //////console.log(meta);
    return {
        props: {
            categoryId: params.categoryId,
            allcate: allcate.data,
            cateList: JSON.parse(tt_data).data,
            data: JSON.parse(data).data,
            meta: meta,
            top_banner: top_banner.length ? top_banner[0] : { coverimage: `${constant.api_url}/uploads/20230523/637cfca2255479e7b2fb99f6364b11b4.png)`, descriptionimage: `${constant.api_url}/uploads/20230601/a0175c1d8f3f40eae16a007b632426bd.png` },
            tiny_top_banner: tiny_top_banner.length ? tiny_top_banner[0] : { coverimage: `https://admin.floralismhk.com/uploads/20230531/bc5d6275780e4f4a4d02711d787936dc.png`, descriptionimage: `${constant.api_url}/uploads/20230601/a0175c1d8f3f40eae16a007b632426bd.png` },
            middle_banner: middle_banner.length ? middle_banner[0] : { coverimage: `https://admin.floralismhk.com/uploads/20230531/1932d9f810c34c19f49de7bb8dc47b31.png`,descriptionimage:`${constant.api_url}/uploads/20230531/a73467978f2b41da91b88593d370858a.png` },
            tiny_middle_banner: tiny_middle_banner.length ? tiny_middle_banner[0] : { coverimage: `${constant.api_url}/uploads/20230523/637cfca2255479e7b2fb99f6364b11b4.png`, descriptionimage: `${constant.api_url}/uploads/20230601/a0175c1d8f3f40eae16a007b632426bd.png` },
        },

    };
}