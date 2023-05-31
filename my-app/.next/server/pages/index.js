"use strict";
(() => {
var exports = {};
exports.id = 5405;
exports.ids = [5405,8693,7720,839,6163,8968,1577,9925];
exports.modules = {

/***/ 8733:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* unused harmony export default */
const { useState , useEffect  } = __webpack_require__(6689);
function useBrowserChange() {
    const [height, setHeight] = useState();
    const [width, setWidth] = useState();
    //    ////////////console.log(window);
    const resizeUpdate = (e)=>{
        // ////////////console.log(e.target.innerHeight,e.target.innerWidth);
        setHeight(e.target.innerHeight);
        setWidth(e.target.innerWidth);
    };
    useEffect(()=>{
        window.addEventListener("resize", resizeUpdate);
        return ()=>{
            window.removeEventListener("resize", resizeUpdate);
        };
    }, []);
    return [
        height,
        width
    ];
}


/***/ }),

/***/ 5901:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(8710);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _styles_product_module_css__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(0);
/* harmony import */ var _styles_product_module_css__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_styles_product_module_css__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _component_GoodsItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(751);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3559);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_GoodsScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8890);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4508);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_Contactus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6739);
/* harmony import */ var _component_Dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8932);
/* harmony import */ var _component_Footer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7602);
/* harmony import */ var _hooks_useBrowserChange__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8733);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _method__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3903);
/* harmony import */ var _component_LoginPannel__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(978);
/* harmony import */ var _component_ResgisterPannel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1116);
/* harmony import */ var _component_ForgetPassword__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2852);
/* harmony import */ var _component_BodyBanner__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8992);
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3409);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(9915);
/* harmony import */ var _component_cateScroll__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(6600);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_20__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_GoodsScroll__WEBPACK_IMPORTED_MODULE_4__, _component_Dynamic__WEBPACK_IMPORTED_MODULE_7__, _component_Footer__WEBPACK_IMPORTED_MODULE_8__, _component_LoginPannel__WEBPACK_IMPORTED_MODULE_12__, _component_ResgisterPannel__WEBPACK_IMPORTED_MODULE_13__, _component_ForgetPassword__WEBPACK_IMPORTED_MODULE_14__, js_cookie__WEBPACK_IMPORTED_MODULE_17__]);
([_component_GoodsScroll__WEBPACK_IMPORTED_MODULE_4__, _component_Dynamic__WEBPACK_IMPORTED_MODULE_7__, _component_Footer__WEBPACK_IMPORTED_MODULE_8__, _component_LoginPannel__WEBPACK_IMPORTED_MODULE_12__, _component_ResgisterPannel__WEBPACK_IMPORTED_MODULE_13__, _component_ForgetPassword__WEBPACK_IMPORTED_MODULE_14__, js_cookie__WEBPACK_IMPORTED_MODULE_17__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


// import Image from 'next/image'






// import Carousel from './component/Carousel'
















function Home({ allcate , cateList , GoodsPage , carousel  }) {
    // //////////console.log("====");
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_20__.useRouter)();
    // //////console.log(GoodsPage);
    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(1);
    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]);
    const [categoryPage, setCategoryPage] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(1);
    const [goodsList, setGoodsList] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)([]);
    const [goodsPage, setGoodsPage] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(1);
    const [login, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const [register, setRegister] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const [isShow, setIsShow] = (0,react__WEBPACK_IMPORTED_MODULE_10__.useState)(false);
    const resizeUpdate = (e)=>{
        if (e.target.innerWidth <= 675) {
            ////////////console.log("====", e.target.innerWidth);
            setFlag(0);
        } else if (e.target.innerWidth <= 1100) {
            setFlag(1);
        } else {
            ////////////console.log("-----", e.target.innerWidth);
            setFlag(2);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        window.addEventListener("resize", resizeUpdate);
        if (window.innerWidth <= 675) {
            ////////////console.log("====", e.target.innerWidth);
            setFlag(0);
        } else if (window.innerWidth <= 1100) {
            setFlag(1);
        } else {
            ////////////console.log("-----", e.target.innerWidth);
            setFlag(2);
        }
        return ()=>{
            window.removeEventListener("resize", resizeUpdate);
        };
    }, []);
    const carousel_slice = ()=>{
        let res = [];
        for(let i = 0; i < carousel.length / 4; i++){
            let sli = carousel.slice(4 * i, 4 * (i + 1));
            res.push(sli);
        }
        return res;
    };
    let MySwiper;
    (0,react__WEBPACK_IMPORTED_MODULE_10__.useEffect)(()=>{
        //////////console.log("flag改變", flag);
        setCategory((0,_method__WEBPACK_IMPORTED_MODULE_11__/* .spliceArr */ .e)(allcate, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8, "cat"));
        ////////////console.log(spliceArr(GoodsPage,  !flag ? 4 :flag===1? 6:flag===2&&8))
        setGoodsList((0,_method__WEBPACK_IMPORTED_MODULE_11__/* .spliceArr */ .e)(GoodsPage.data, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8));
        setGoodsPage(1);
        setCategoryPage(1);
    }, [
        flag
    ]);
    // ////////////console.log("=======");
    // ////////////console.log(category[categoryPage]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_19___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "【買花】 | 送花 | 「Floralism」香港花店"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "title",
                        content: "【買花】 | 送花 | 「Floralism」香港花店"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "「Floralism」專業香港花店提供買花及送花服務，如鮮花、盆栽、花籃等，而且還提供網上訂購、送貨上門等一系列買花服務，讓人們能夠方便快捷地為他人表達心意。"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Dynamic__WEBPACK_IMPORTED_MODULE_7__["default"], {
                cateList: cateList,
                setLogin: setLogin
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    width: "100%",
                    position: "relative"
                },
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_21___default().banner),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {},
                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_21___default().top_banner_area),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/homepage/banner-desc.png",
                            width: "100%"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>router.push("/productSearch/3"),
                            style: {
                                border: "none",
                                display: "block",
                                cursor: "pointer"
                            },
                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_21___default().banner_buttom),
                            children: "點擊選購"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {}),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_21___default().main_body)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_21___default().goods_list),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_cateScroll__WEBPACK_IMPORTED_MODULE_18__["default"], {
                            title: "【FLORALISM】 全部分类",
                            list: category,
                            page: categoryPage,
                            type: "category",
                            perPage: !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8,
                            setPage: setCategoryPage,
                            animation: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BodyBanner__WEBPACK_IMPORTED_MODULE_15__["default"], {
                        flag: flag,
                        imgTiny: "/homepage/小段背景-m.png",
                        img: "/homepage/小段背景.png",
                        title: "FLORALISM 情人節定制花束",
                        desc1: "情人節送花通常是表達愛情和浪漫的方法，帶著各種寓意的感情",
                        desc2: "不同的花卉都有著不同的寓意和象徵意義，你可以選擇適合你和你的伴侶的花卉來表達你的愛意和感情。"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_21___default().goods_view),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_GoodsScroll__WEBPACK_IMPORTED_MODULE_4__["default"], {
                            title: allcate[1].categoryname,
                            list: goodsList,
                            page: goodsPage,
                            id: allcate[1].id,
                            setPage: setGoodsPage,
                            perPage: !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8,
                            maxPage: GoodsPage.last_page,
                            setList: setGoodsList,
                            type: "",
                            animation: true
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_21___default().goods_scroll),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_22___default().youMaybeLike),
                            style: {
                                padding: "5%",
                                position: "relative"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_21___default().distance),
                                            style: {
                                                borderBottomWidth: 1,
                                                borderBottomColor: "white"
                                            }
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_21___default().title),
                                            style: {
                                                whiteSpace: "nowrap"
                                            },
                                            children: "情人節禮物 | 最受歡迎的"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_21___default().distance),
                                            style: {
                                                borderBottomWidth: 1,
                                                borderBottomColor: "white"
                                            }
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        position: "relative"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            padding: 8,
                                            marginTop: 24
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_5__.Carousel, {
                                            showThumbs: false,
                                            infiniteLoop: true,
                                            showIndicators: false,
                                            preventMovementUntilSwipeScrollTolerance: true,
                                            swipeScrollTolerance: 50,
                                            showStatus: false,
                                            children: carousel_slice().map((item, index)=>{
                                                //////////console.log(carousel_slice().length);
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        display: "flex",
                                                        flexWrap: "wrap"
                                                    },
                                                    children: item.map((it, ii)=>{
                                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_GoodsItem__WEBPACK_IMPORTED_MODULE_2__["default"], {
                                                            imgTopStyle: {},
                                                            item: it,
                                                            type: "carsouel",
                                                            top_style: {},
                                                            imgStyle: {},
                                                            animation: true
                                                        }, item.id + index.toString() + ii.toString());
                                                    })
                                                }, item.id + index.toString());
                                            })
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_21___default().contactus),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Contactus__WEBPACK_IMPORTED_MODULE_6__["default"], {})
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Footer__WEBPACK_IMPORTED_MODULE_8__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_LoginPannel__WEBPACK_IMPORTED_MODULE_12__["default"], {
                login: login,
                close: ()=>setLogin(false),
                toRegister: ()=>{
                    setLogin(false);
                    setRegister(true);
                },
                toForget: ()=>{
                    setLogin(false);
                    setVisible(true);
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_1___default()), {
                defer: true,
                src: "/swiper/js/idangerous.swiper.min.js",
                onReady: ()=>{
                    MySwiper = new Swiper(".swiper-container", {
                        loop: true,
                        onInit: function(swiper) {
                            swiper.swipeNext();
                        }
                    });
                }
            })
        ]
    });
}
async function getStaticProps({ local  }) {
    //  ////////////console.log(constant.api_url);
    const response = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_16__/* .constant.api_url */ .a.api_url}/api/flowercategory/index`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    const allcate_response = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_16__/* .constant.api_url */ .a.api_url}/api/Flowercategory/allIndex`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    let allcate = await allcate_response.json();
    let data = await response.text();
    // //////////console.log("====================");
    // //////////console.log(allcate);
    const swiper_response = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_16__/* .constant.api_url */ .a.api_url}/api/flowers/getTopicFlower?flower_category_id=${JSON.parse(data).data[0].id}`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    //////console.log(allcate);
    const goods_response = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_16__/* .constant.api_url */ .a.api_url}/api/flowers/index?flower_category_id=${allcate.data[1].id}`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    ////////////console.log(response);
    let swiper_data = await swiper_response.text();
    let goods_data = await goods_response.text();
    //////////console.log("====================");
    //////////console.log(JSON.parse(goods_data).data);
    // //////////console.log(data);
    return {
        props: {
            allcate: allcate.data,
            cateList: JSON.parse(data).data,
            GoodsPage: JSON.parse(goods_data).data,
            carousel: JSON.parse(swiper_data).data.data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 6405:
/***/ ((module) => {

module.exports = require("react-dom");

/***/ }),

/***/ 4508:
/***/ ((module) => {

module.exports = require("react-responsive-carousel");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ }),

/***/ 3602:
/***/ ((module) => {

module.exports = import("zustand/middleware");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5893,5152,29,1271,3555,5829,1116,2852,978,7602,751,8890,6739,6600,5107,8992,0], () => (__webpack_exec__(5901)));
module.exports = __webpack_exports__;

})();