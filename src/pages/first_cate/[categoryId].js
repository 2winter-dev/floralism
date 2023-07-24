import Head from "next/head";
import { constant } from "../../constant";
import DynamicComponent from "../component/Dynamic";
import { useState, useEffect, useRef } from "react";
import styles from '@/styles/Home.module.css'
import style from '@/styles/banner.module.css'
import Contactus from "../component/Contactus";
import Footer from "../component/Footer";
import GoodsItem from "../component/GoodsItem";
import LoginPannel from "../component/LoginPannel";
import Image from "next/image";
import BodyBanner from "../component/BodyBanner";
export default function Index({ category, cateList, top_banner, tiny_top_banner, middle_banner, tiny_middle_banner }) {
    //console.log(category);
    const [login, setLogin] = useState(false);
    const [bannerSize, setBannerSize] = useState(false);

    const [flag, setFlag] = useState(1);
    const [register, setRegister] = useState(false);
    const resizeUpdate = (e) => {
        if (e.target.innerWidth <= 750) {
            //////////////////////////////console.log("====", e.target.innerWidth);
            setFlag(0);
        } else if (e.target.innerWidth <= 1100) {
            setFlag(1)
        } else {
            //////////////////////////////console.log("-----", e.target.innerWidth);
            setFlag(2);
        }
        setBannerSize(window.innerWidth <= 750 ? true : false);
    }

    useEffect(() => {
        window.addEventListener("resize", resizeUpdate);
        if (window.innerWidth <= 750) {
            //////////////////////////////console.log("====", e.target.innerWidth);
            setFlag(0);
        } else if (window.innerWidth <= 1100) {
            setFlag(1)
        } else {
            //////////////////////////////console.log("-----", e.target.innerWidth);
            setFlag(2);
        }
        setBannerSize(window.innerWidth <= 750 ? true : false);
        return () => {
            window.removeEventListener("resize", resizeUpdate);
        }
    }, [])
    return (<div>
        <Head>
            <title>{`${category.metatitle !== "" ? category.metatitle : (category.categoryname + " | 「Floralism」香港花店")}`}</title>
            <meta name={'descirption'} content={`${category.metadescription}`} />
            <meta name={'keywords'} content={`${category.keywords}`} />
        </Head>
        <DynamicComponent cateList={cateList} setLogin={setLogin} />
        <div style={{ width: '100%', display: 'flex', position: 'relative', backgroundPosition: 'revert', backgroundImage: bannerSize ? `url(${tiny_top_banner.coverimage})` : `url(${top_banner.coverimage})`, marginBottom: 0 }} className={styles.banner} >
            {/* <Image priority src="/homepage/top-banner.png" width={1920} height={700} style={{width:'100%'}}/> */}
            <div className={category.id === 13 ? styles.n_spec_banner :category.id===23?styles.s_spec_banner: styles.top_banner_area} style={{ display: "flex", flexDirection: 'column', alignItems: 'center',margin:category.id===13&&'auto' }}>
                {
                    <img className={category.id === 13 ?styles.n_desc_banner:styles.desc_banner} alt={bannerSize ? tiny_top_banner.descriptionimage : top_banner.descriptionimage} src={bannerSize ? tiny_top_banner.descriptionimage : top_banner.descriptionimage} style={{}} />
                }
            </div>
        </div>
        <main className={`${styles.main_body}`}>
            <div className="c1 container" >
                <div className={`row py-4`} style={{ marginTop:'1.5rem' }}>
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <div className={styles.distance}></div>
                            <div className={styles.title} style={{ whiteSpace: 'nowrap', flex: 1 }}>{`【FLORALISM】 ${category.categoryname}`}</div>
                            <div className={styles.distance}></div>
                        </div>
                        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                            {
                                category.get_child.map((item, index) => {
                                    return <GoodsItem key={index} src={item.src} item={item} title={item.categoryname} price={item.price} type={'category'} animation={'animation'} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div style={{  }}>
                <div className="c1 container" style={{ padding: '2%' }} >
                    <div className={`row  py-4 `}>
                        <div className="col-12 col-lg-5 px-0 mt-2 mt-lg-0">
                            <div
                                className={`image_c ${styles.adapt_pic}`}
                                style={{ width: '100%', height: '100%', position: 'relative' }}
                            >
                                <Image
                                    className={styles.image_border}
                                    src={category.cover_image !== "https://admin.floralismhk.com" ? category.cover_image : "/default-f-cate.png"}
                                    fill
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        objectFit: "cover",
                                        opacity: 1,
                                        objectPosition: "top"
                                    }}
                                />
                            </div>
                        </div>
                        <div
                            className={`col-12 col-lg-7 ${styles.textArea}`}
                            style={{ backgroundColor: category.background_color ? `#${category.background_color}` : "rgb(213, 59, 69)", display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', padding: '4vw', color: 'white' }}
                        >
                            <div style={{ marginLeft:'1rem',width: 20, height: 4, backgroundColor: 'white', borderRadius: 12 }}></div>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: category.category_description,
                                }}
                                style={{ margin: "0 1rem" }}
                            ></div>
                            <div style={{ marginLeft:'1rem',padding: '0.5vw 2vw', border: '1px solid white', marginTop: '3vw', borderRadius: 12 }}>{category.categoryname}</div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <div className={styles.padLayout} style={{ width: '100%', display: 'flex', marginBottom: 24 }}>
                <div className={styles.adapt_pic} style={{display:'flex',justifyContent:'flex',backgroundImage:'linear-gradient(#f1e3dc,#f1e8e0)'}}>
                    <img style={{width:'100%',objectFit:'contain',objectPosition:'bottom'}}  alt={`${category.categoryname}插圖`} src="/default-f-cate.png" />
                </div>
               
                <div className={styles.textArea} style={{ flex: 1, backgroundColor: 'rgb(213, 59, 69)', color: "white", display: 'flex', alignItems: 'flex-start', flexDirection: 'column', justifyContent: 'center' }}>
                
                    <div style={{ width: 20, height: 4, backgroundColor: 'white', borderRadius: 12 }}></div>
                    <div style={{ marginTop: '0.8vw' }}>怎麽樣選擇花束品類?</div>
                    <ul style={{ flex: 1, marginTop: '1.25vw', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                        <li style={{}}>根據送花的場合，選擇相應的花束品類。例如，玫瑰花束通常用於表達愛意或浪漫場合，而百合花束則常用於祝賀或慶祝場合。</li>
                        <li style={{}}>考慮收件人的個人喜好和偏好，選擇相應的花束品類。</li>
                        <li style={{}}>每種花朵都有自己的花語，可以根據花語來選擇花束品類。</li>
                        <li style={{}}>考慮當前的季節，選擇季節性的花束品類，確保花束中的花朵新鮮且容易獲得。</li>
                        <li style={{}}>根據自己的預算，選擇適合的花束品類。</li>
                        <li style={{}}>最重要的是，選擇花束品類時要考慮到收件人的喜好和場合，並選擇一個能夠表達你的心意的花束。</li>
                    </ul>
                    <div style={{ padding: '0.5vw 2vw', border: '1px solid white', marginTop: '3vw', borderRadius: 12 }}>花束品類</div>
                </div>
            </div>  */}
            <div style={{ width: '100%', position: 'relative', marginTop: 24 }}>
                {
                    <img alt={flag === 0 ? tiny_middle_banner.coverimage : middle_banner.coverimage} src={
                        // props.flag === 0 ? props.imgTiny :
                        flag === 0 ? tiny_middle_banner.coverimage : middle_banner.coverimage} style={{ width: '100%', height: '100%', display: 'block' }}></img>
                }
                <div className={style.banner_desc} style={{}}>
                    <div style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {
                            flag === 0 ? <img src={`${tiny_middle_banner.descriptionimage}`} width={'100%'} /> : <img src={`${middle_banner.descriptionimage}`} width={'100%'} />
                        }
                    </div>
                </div>
            </div>
            {category.categoryname === "花束品類" ? <div className={`c1 container `} style={{ marginTop: 24, padding: '2%' }} >
                <div className={`row  py-4 `} style={{ backgroundColor: "rgb(213, 59, 69)", padding: '4vw', color: 'white', borderRadius: 12 }}>
                    <div style={{ width: 30, height: 4, backgroundColor: 'white', borderRadius: 12 }}></div>
                    <div className={styles.flowerDesgin} style={{ marginTop: '0.8vw', padding: 0 }}>花束品類設計</div>
                    <div style={{ display: 'flex', padding: 0, flexWrap: 'wrap', marginTop: 24 }}>
                        <div className={styles.designItem} style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className={styles.IconSize} style={{ position: 'relative' }}>
                                <Image fill alt={"花束"} src={'/flowers.png.png'} style={{ marginRight: 12 }} />
                            </div>
                            <div style={{ fontSize: '0.4vw', flex: 1, marginLeft: 24 }}>
                                <div style={{ fontSize: '1vw' }}>
                                    花束的包裝和裝飾
                                </div>
                                <div style={{ marginTop: '0.4vw' }}>
                                    FLORALISM花束品類設計還註重對花束的包裝和裝飾。設計師會選擇合適的花束包裝材料，如紙張、布料、絲帶等，來增加花束的質感和視覺效果。設計師還可以添加一些裝飾物，如珠子、羽毛、水晶等，來增加花束的華麗感和個性化。
                                </div>
                            </div>
                        </div>
                        <div className={styles.designItem} style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className={`${styles.IconSize} py-4`} style={{ position: 'relative' }}>
                                <Image fill alt="主題" src={'/主题.png.png'} style={{ marginRight: 12 }} />
                            </div>
                            <div style={{ fontSize: '0.4vw', flex: 1, marginLeft: 24 }}>
                                <div style={{ fontSize: '1vw', marginRight: 12 }}>
                                    選擇不同顏色
                                </div>
                                <div style={{ marginTop: '0.4vw' }}>
                                    在FLORALISM花束品類設計中，設計師會選擇不同顔色、形狀和大小的花朵，以及其他植物元素，如葉子、枝條等，來打造出豐富多樣的花束。設計師會根據花束的主題和場合，選擇合適的花材，以達到表達情感、傳遞信息或營造氛圍的目的。
                                </div>
                            </div>
                        </div>
                        <div className={styles.designItem} style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className={styles.IconSize} style={{ position: 'relative' }}>
                                <Image fill alt="花瓶" src={'/花瓶.png.png'} style={{ marginRight: 12 }} />
                            </div>
                            <div style={{ fontSize: '0.4vw', flex: 1, marginLeft: 24 }}>
                                <div style={{ fontSize: '1vw', marginRight: 12 }}>
                                花材的處理和安排 
                                </div>
                                <div style={{ marginTop: '0.4vw' }}>
                                FLORALISM花束品類設計註重對花材的處理和安排。設計師會運用不同的花藝技巧，如插花、編織等，將花材結合在一起，形成獨特的花束形狀和結構。也註重花束的色彩搭配和層次感，使作品更加美觀和有吸引力。
                                </div>
                            </div>
                        </div>
                        <div className={styles.designItem} style={{ display: 'flex', flexDirection: 'row' }}>
                            <div className={styles.IconSize} style={{ position: 'relative' }}>
                                <Image fill alt="鮮花" src={'/鲜花.png.png'} style={{ marginRight: 12 }} />
                            </div>
                            <div style={{ fontSize: '0.4vw', flex: 1, marginLeft: 24 }}>
                                <div style={{ fontSize: '1vw', marginRight: 12 }}>
                                花束的包裝和裝飾
                                </div>
                                <div style={{ marginTop: '0.4vw' }}>
                                FLORALISM花束品類設計還註重對花束的包裝和裝飾。設計師會選擇合適的花束包裝材料，如紙張、布料、絲帶等，來增加花束的質感和視覺效果。設計師還可以添加一些裝飾物，如珠子、羽毛、水晶等，來增加花束的華麗感和個性化。
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> : <div className={`c1 container `} style={{ marginTop: 24, padding: '2%' }} >
                <div className={`row  py-4 `} style={{ borderRadius: 12, display: 'flex', flexWrap: 'wrap', flex: 1 }}>
                    {
                        category?.slider_images?.length ? category.slider_images.map((item, index) => {
                            return (<img className={styles.bannerTwoColumn} style={{ padding: 0 }} src={item} alt={item} key={index} />)
                        }) : ['/test1.png', '/test2.png', '/test3.png', '/test4.png'].map((item, index) => {
                            return (<img className={styles.bannerTwoColumn} style={{ padding: 0 }} src={item} alt={item} key={index} />)
                        })
                    }
                </div>
                {/* <div className={styles.bannerTwoColumn} style={{position:'relative'}}>
                            <Image fill src={'/test1.png'} />
                        </div>
                        <div className={styles.bannerTwoColumn} style={{position:'relative'}}>
                            <Image fill src={'/test2.png'} />
                        </div>
                        <div className={styles.bannerTwoColumn} style={{position:'relative'}}>
                            <Image fill src={'/test3.png'} />
                        </div>
                        <div className={styles.bannerTwoColumn} style={{position:'relative'}}>
                            <Image fill src={'/test4.png'} />
                        </div> */}

                {/* <img className={styles.bannerTwoColumn} style={{ padding: 0 }} src={'/test1.png'} />
                     <img className={styles.bannerTwoColumn} style={{ padding: 0 }} src={'/test2.png'} />
                     <img className={styles.bannerTwoColumn} style={{ padding: 0 }} src={'/test3.png'} />
                    <img className={styles.bannerTwoColumn} style={{ padding: 0 }} src={'/test4.png'} /> */}
            </div>}
        </main>
        <div className="c1 container" >
            <div className={`row  py-4`} style={{ marginBottom:'1.5rem', padding: '2%' }}>
                <Contactus />
            </div>
        </div>
        <div style={{paddingTop:'1.5rem'}}>
        <Footer />

        </div>
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
    let data = await response.json();
    // ////console.log(data.data);
    let arr = [];
    if (data.data.length > 0) {
        data.data.map((item, index) => {
            arr.push({ params: { categoryId: item.categoryname.toString() } });
        })
    }
    return {
        paths: arr,
        fallback: false,
    }
}


export async function getStaticProps(context) {
    const { params } = context;
    const response = await fetch(
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
    const banner = await fetch(`${constant.api_url}/api/banner/index`, {
        mode: 'cors',
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type",
        }
    })
    let data = await response.json();
    let tt_data = await tt_response.json();
    const banner_list = await banner.json();
    // ////console.log("=================");
    // ////console.log(banner_list.data.middle_banner.web,banner_list.data.top_banner.web);
    //data.id

    let item = data.data.filter((item, index) => {
        // ////console.log(item,params.categoryId);
        if (item.categoryname === params.categoryId) {
            return item;
        }
    })
    ////console.log("=================");
    ////console.log(item[0].id);
    let top_banner = banner_list.data.top_banner.web.filter((it) => {
        if (it.flower_category_ids.includes(parseInt(item[0].id))) {
            return item;
        }
    })
    let tiny_top_banner = banner_list.data.top_banner.mobile.filter((it) => {

        if (it.flower_category_ids.includes(parseInt(item[0].id))) {
            return it;
        }
        // ////console.log(item[0]);
    })
    let middle_banner = banner_list.data.middle_banner.web.filter((it) => {
        if (it.flower_category_ids.includes(parseInt(item[0].id))) {
            return it;
        }
    })
    let tiny_middle_banner = banner_list.data.middle_banner.mobile.filter((it) => {
        if (it.flower_category_ids.includes(parseInt(item[0].id))) {
            return it;
        }
    })

    return {
        props: {
            category: item.length && item[0],
            cateList: tt_data.data,
            name: params.categoryId,
            // id:item[0].id,
            top_banner: top_banner.length ? top_banner[0] : { coverimage: `${constant.api_url}/uploads/20230523/637cfca2255479e7b2fb99f6364b11b4.png)`, descriptionimage: `${constant.api_url}/uploads/20230601/a0175c1d8f3f40eae16a007b632426bd.png` },
            tiny_top_banner: tiny_top_banner.length ? tiny_top_banner[0] : { coverimage: `https://admin.floralismhk.com/uploads/20230531/bc5d6275780e4f4a4d02711d787936dc.png`, descriptionimage: `${constant.api_url}/uploads/20230601/a0175c1d8f3f40eae16a007b632426bd.png` },
            middle_banner: middle_banner.length ? middle_banner[0] : { coverimage: `https://admin.floralismhk.com/uploads/20230531/1932d9f810c34c19f49de7bb8dc47b31.png`, descriptionimage: `${constant.api_url}/uploads/20230531/a73467978f2b41da91b88593d370858a.png` },
            tiny_middle_banner: tiny_middle_banner.length ? tiny_middle_banner[0] : { coverimage: `${constant.api_url}/uploads/20230523/637cfca2255479e7b2fb99f6364b11b4.png`, descriptionimage: `${constant.api_url}/uploads/20230601/a0175c1d8f3f40eae16a007b632426bd.png` },
        },
        revalidate: 60 * 60 * 6,
    }
}