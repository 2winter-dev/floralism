(() => {
var exports = {};
exports.id = 1814;
exports.ids = [1814,9855,8693,839,7720,4846,8968,6163,1577,9925,1709];
exports.modules = {

/***/ 1976:
/***/ ((module) => {

// Exports
module.exports = {
	"ContactusLayout": "Aboutus_ContactusLayout__Abs11",
	"Total_Layout": "Aboutus_Total_Layout__cMNBW",
	"desc1": "Aboutus_desc1__ooadd",
	"desc2": "Aboutus_desc2__u0UcO",
	"description": "Aboutus_description__Kn8hd",
	"desc_contain": "Aboutus_desc_contain___MTyW",
	"banner_background": "Aboutus_banner_background__I7yX7",
	"girls_contain": "Aboutus_girls_contain__nD2xP",
	"desc_small_contain": "Aboutus_desc_small_contain__QhnGQ",
	"girls": "Aboutus_girls__CvSRA",
	"goods_list": "Aboutus_goods_list__R08VM"
};


/***/ }),

/***/ 8710:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "Home_banner__Ehv0A",
	"banner_layout": "Home_banner_layout__2wkb8",
	"banner_buttom": "Home_banner_buttom__ejiXV",
	"search_area": "Home_search_area__REPE_",
	"input": "Home_input__OUvlA",
	"top_banner_area": "Home_top_banner_area__DaFqi",
	"scroll_left": "Home_scroll_left__wJBAa",
	"scroll_right": "Home_scroll_right__TP3yF",
	"main_body": "Home_main_body__I0JZ7",
	"goods_list": "Home_goods_list__wPEwe",
	"contactus": "Home_contactus__c_Yxp",
	"goods_scroll": "Home_goods_scroll__u1eh1",
	"goods_view": "Home_goods_view__zsvaR",
	"distance": "Home_distance__KJyqT",
	"title": "Home_title__FX7xZ",
	"distance_pic": "Home_distance_pic__vMG_s",
	"serach_icon": "Home_serach_icon__Xgk0L",
	"banner_desc": "Home_banner_desc__eIGHc"
};


/***/ }),

/***/ 5037:
/***/ ((module) => {

// Exports
module.exports = {
	"btn_list": "goodsScroll_btn_list__j5Nx4",
	"select": "goodsScroll_select__qCLsK"
};


/***/ }),

/***/ 7358:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AboutUs),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _component_Dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8932);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_LoginPannel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(978);
/* harmony import */ var _component_ResgisterPannel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1116);
/* harmony import */ var _component_ForgetPassword__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2852);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3409);
/* harmony import */ var _component_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7602);
/* harmony import */ var _styles_Aboutus_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1976);
/* harmony import */ var _styles_Aboutus_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_Aboutus_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _component_Contactus__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6739);
/* harmony import */ var _method__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3903);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _component_cateScroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6600);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_Dynamic__WEBPACK_IMPORTED_MODULE_1__, _component_LoginPannel__WEBPACK_IMPORTED_MODULE_3__, _component_ResgisterPannel__WEBPACK_IMPORTED_MODULE_4__, _component_ForgetPassword__WEBPACK_IMPORTED_MODULE_5__, _component_Footer__WEBPACK_IMPORTED_MODULE_7__]);
([_component_Dynamic__WEBPACK_IMPORTED_MODULE_1__, _component_LoginPannel__WEBPACK_IMPORTED_MODULE_3__, _component_ResgisterPannel__WEBPACK_IMPORTED_MODULE_4__, _component_ForgetPassword__WEBPACK_IMPORTED_MODULE_5__, _component_Footer__WEBPACK_IMPORTED_MODULE_7__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













function AboutUs({ cateList , allcate  }) {
    const [login, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [register, setRegister] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    // //////console.log(allcate);
    const [categoryPage, setCategoryPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1);
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
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
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
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        //////console.log("flag改變", flag);
        setCategory((0,_method__WEBPACK_IMPORTED_MODULE_9__/* .spliceArr */ .e)(allcate, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8, "cat"));
        //////console.log(spliceArr(allcate, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8, 'cat'))
        setCategoryPage(1);
    }, [
        flag
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        window.addEventListener("resize", resizeUpdate);
        window.innerWidth < 1100 ? !flag && setFlag(true) : flag && setFlag(false);
        return ()=>{
            window.removeEventListener("resize", resizeUpdate);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_10___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "【訂花】 | 網上訂花 | 「Floralism」網上花店香港"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "title",
                        content: "【訂花】 | 網上訂花 | 「Floralism」網上花店香港"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "description",
                        content: "「Floralism」網上花店香港，網上訂花已經是最常見的訂花途徑。「Floralism」提供最方便的花束訂購系統，讓客人輕鬆地訂購花束及為他人送上美麗的花束，同時也帶來了美好的體驗。"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Dynamic__WEBPACK_IMPORTED_MODULE_1__["default"], {
                cateList: cateList,
                setLogin: setLogin
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    width: "100%",
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        className: (_styles_Aboutus_module_css__WEBPACK_IMPORTED_MODULE_12___default().banner_background),
                        src: flag === 0 ? "/banner-s-背景.png" : "/banner-背景.png",
                        style: {
                            width: "100%",
                            display: "block"
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_Aboutus_module_css__WEBPACK_IMPORTED_MODULE_12___default().description),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Aboutus_module_css__WEBPACK_IMPORTED_MODULE_12___default().girls_contain),
                                style: {
                                    display: "flex",
                                    alignItems: "flex-end",
                                    justifyContent: "center",
                                    flex: 1
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    className: (_styles_Aboutus_module_css__WEBPACK_IMPORTED_MODULE_12___default().girls),
                                    src: "女生.png",
                                    style: {}
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_Aboutus_module_css__WEBPACK_IMPORTED_MODULE_12___default().desc_contain),
                                style: {
                                    flex: 1,
                                    marginRight: "10%",
                                    marginTop: 30,
                                    position: "relative",
                                    justifyContent: "flex-end"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        height: "100%",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-evenly"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                fontSize: 42,
                                                fontWeight: 700,
                                                color: "#d43a43"
                                            },
                                            children: "About us"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Aboutus_module_css__WEBPACK_IMPORTED_MODULE_12___default().desc1),
                                            style: {
                                                marginTop: 10,
                                                lineHeight: "2rem"
                                            },
                                            children: "在Florlism，我們重視花材的品質和選擇，堅持採用最新鮮、最優質的花材，並運用專業的技巧和創意，將它們轉化為獨特的花束和花藝作品。Florlism希望能夠運用花材的色彩、質地和形狀等特性，將它們結合在一起，創造出層次豐富、風格獨特的花藝作品。此外，我們在創作過程中也注重藝術性和創意性，運用不同的創意和技巧，讓花材的形狀和質地在空間中產生獨特的視覺效果，讓每一朵花都散發出自己獨有的魅力。"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_Aboutus_module_css__WEBPACK_IMPORTED_MODULE_12___default().desc2),
                                            style: {
                                                marginTop: 10,
                                                lineHeight: "2rem"
                                            },
                                            children: "在Florlism，我們也深信每一朵花都有其獨特的含義和價值。因此，我們的花藝師會仔細聆聽客戶的需求和意願，並根據不同場合和用途，設計出最適合的花藝作品，以表達客戶的情感和祝福。Florlism的花藝師擁有專業的技能和豐富的經驗，能夠將花材的美學和技術相融合，為客戶打造出高品質、獨特風格的花藝作品，讓每一朵花都能夠傳達出愛和祝福的訊息。"
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Aboutus_module_css__WEBPACK_IMPORTED_MODULE_12___default().desc_small_contain),
                style: {
                    flex: 1,
                    padding: "5%",
                    position: "relative",
                    justifyContent: "flex-end"
                },
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                fontSize: 42,
                                fontWeight: 700,
                                color: "#d43a43"
                            },
                            children: "About us"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Aboutus_module_css__WEBPACK_IMPORTED_MODULE_12___default().desc1),
                            style: {
                                marginTop: 10,
                                lineHeight: "2rem"
                            },
                            children: "在Florlism，我們重視花材的品質和選擇，堅持採用最新鮮、最優質的花材，並運用專業的技巧和創意，將它們轉化為獨特的花束和花藝作品。Florlism希望能夠運用花材的色彩、質地和形狀等特性，將它們結合在一起，創造出層次豐富、風格獨特的花藝作品。此外，我們在創作過程中也注重藝術性和創意性，運用不同的創意和技巧，讓花材的形狀和質地在空間中產生獨特的視覺效果，讓每一朵花都散發出自己獨有的魅力。"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_Aboutus_module_css__WEBPACK_IMPORTED_MODULE_12___default().desc2),
                            style: {
                                marginTop: 10,
                                fontSize: 13,
                                lineHeight: "2rem"
                            },
                            children: "在Florlism，我們也深信每一朵花都有其獨特的含義和價值。因此，我們的花藝師會仔細聆聽客戶的需求和意願，並根據不同場合和用途，設計出最適合的花藝作品，以表達客戶的情感和祝福。Florlism的花藝師擁有專業的技能和豐富的經驗，能夠將花材的美學和技術相融合，為客戶打造出高品質、獨特風格的花藝作品，讓每一朵花都能夠傳達出愛和祝福的訊息。"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Aboutus_module_css__WEBPACK_IMPORTED_MODULE_12___default().goods_list),
                style: {},
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_cateScroll__WEBPACK_IMPORTED_MODULE_11__["default"], {
                    title: "【FLORALISM】 全部分類",
                    list: category,
                    flag: flag,
                    page: categoryPage,
                    type: "category",
                    perPage: !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8,
                    setPage: setCategoryPage,
                    animation: true
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Aboutus_module_css__WEBPACK_IMPORTED_MODULE_12___default().ContactusLayout),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Contactus__WEBPACK_IMPORTED_MODULE_8__["default"], {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_LoginPannel__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
            })
        ]
    });
}
async function getStaticProps({ local  }) {
    //  ////////////console.log(constant.api_url);
    const allcate_response = await fetch(`${_constant__WEBPACK_IMPORTED_MODULE_6__/* .constant.api_url */ .a.api_url}/api/Flowercategory/allIndex`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    let allcate = await allcate_response.json();
    const response = await fetch(`${_constant__WEBPACK_IMPORTED_MODULE_6__/* .constant.api_url */ .a.api_url}/api/flowercategory/index`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    let data = await response.text();
    return {
        props: {
            cateList: JSON.parse(data).data,
            allcate: allcate.data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6735:
/***/ ((module) => {

"use strict";
module.exports = require("@nextui-org/react");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ }),

/***/ 3602:
/***/ ((module) => {

"use strict";
module.exports = import("zustand/middleware");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5893,5152,5829,1116,2852,978,7602,751,6739,6600,5107], () => (__webpack_exec__(7358)));
module.exports = __webpack_exports__;

})();