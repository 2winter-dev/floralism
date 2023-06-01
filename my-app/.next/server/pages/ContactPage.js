(() => {
var exports = {};
exports.id = 8666;
exports.ids = [8666,839,7720,8693,6163,8968,1577,9925];
exports.modules = {

/***/ 9668:
/***/ ((module) => {

// Exports
module.exports = {
	"main_background": "contactPage_main_background__2FzJm",
	"main_layout": "contactPage_main_layout__i5MSt",
	"contact_title": "contactPage_contact_title__4ew7J",
	"contact_distance": "contactPage_contact_distance__pm5RX",
	"main_contain": "contactPage_main_contain__DKzWx",
	"ContactusLayout": "contactPage_ContactusLayout__qpJCy",
	"desc_layout": "contactPage_desc_layout__Qnh_H"
};


/***/ }),

/***/ 2960:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactPage),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6991);
/* harmony import */ var _component_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7602);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(8710);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _styles_contactPage_module_css__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9668);
/* harmony import */ var _styles_contactPage_module_css__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_styles_contactPage_module_css__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _component_Contactus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6739);
/* harmony import */ var _component_GoodsScroll__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8890);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _method__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3903);
/* harmony import */ var _component_BodyBanner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8992);
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(3409);
/* harmony import */ var _component_cateScroll__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6600);
/* harmony import */ var _component_LoginPannel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(978);
/* harmony import */ var _component_Dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8932);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_Header__WEBPACK_IMPORTED_MODULE_1__, _component_Footer__WEBPACK_IMPORTED_MODULE_2__, _component_GoodsScroll__WEBPACK_IMPORTED_MODULE_4__, _component_LoginPannel__WEBPACK_IMPORTED_MODULE_10__, _component_Dynamic__WEBPACK_IMPORTED_MODULE_11__]);
([_component_Header__WEBPACK_IMPORTED_MODULE_1__, _component_Footer__WEBPACK_IMPORTED_MODULE_2__, _component_GoodsScroll__WEBPACK_IMPORTED_MODULE_4__, _component_LoginPannel__WEBPACK_IMPORTED_MODULE_10__, _component_Dynamic__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);














function ContactPage({ cateList , allcate  }) {
    ////////////console.log(cateList)
    // const [flag, setFlag] = useState(1);
    const [login, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [register, setRegister] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(1);
    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    // //////console.log(allcate);
    const [categoryPage, setCategoryPage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(1);
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
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
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
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        //////console.log("flag改變", flag);
        setCategory((0,_method__WEBPACK_IMPORTED_MODULE_6__/* .spliceArr */ .e)(allcate, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8, "cat"));
        //////console.log(spliceArr(allcate, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8, 'cat'))
        setCategoryPage(1);
    }, [
        flag
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        window.addEventListener("resize", resizeUpdate);
        window.innerWidth < 1100 ? !flag && setFlag(true) : flag && setFlag(false);
        return ()=>{
            window.removeEventListener("resize", resizeUpdate);
        };
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Dynamic__WEBPACK_IMPORTED_MODULE_11__["default"], {
                cateList: cateList,
                setLogin: setLogin
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_BodyBanner__WEBPACK_IMPORTED_MODULE_7__["default"], {
                flag: flag,
                imgTiny: "/contact-banner-m.png",
                img: "/contactus-banner.png",
                title: "FLORALISM | 關於我們",
                desc1: "在FLORALISM，我們重視花材的品質和選擇，堅持采用最新鮮，最優質的花材，注重花束的藝術性和創意性",
                desc2: "運用不同的創意和技巧，讓花材的形狀和質地在空間中產生獨特的視覺效果，讓每一朵花都散發出自己獨有的魅力"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_contactPage_module_css__WEBPACK_IMPORTED_MODULE_12___default().main_layout),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_contactPage_module_css__WEBPACK_IMPORTED_MODULE_12___default().main_background),
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_contactPage_module_css__WEBPACK_IMPORTED_MODULE_12___default().main_contain),
                            style: {
                                marginBottom: 24
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_contactPage_module_css__WEBPACK_IMPORTED_MODULE_12___default().contact_title),
                                    children: "歡迎查詢"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_contactPage_module_css__WEBPACK_IMPORTED_MODULE_12___default().contact_distance),
                                    style: {
                                        lineHeight: "200%",
                                        letterSpacing: 2
                                    },
                                    children: "如果你有任何花藝需求或疑問，歡迎聯係我們的專業花藝師團隊，我們會仔細聆聽您的需求，並根據不同場合和用途，提供最適合的花藝設計方案，您可以通過以下方式聯係我們"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: `${(_styles_contactPage_module_css__WEBPACK_IMPORTED_MODULE_12___default().contact_title)}`,
                                    style: {
                                        marginTop: "15%"
                                    },
                                    children: "客戶熱綫"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_contactPage_module_css__WEBPACK_IMPORTED_MODULE_12___default().contact_distance),
                                    style: {
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/圖標-電話.png"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                marginLeft: 16
                                            },
                                            children: "65818053"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_contactPage_module_css__WEBPACK_IMPORTED_MODULE_12___default().contact_distance),
                                    style: {
                                        display: "flex",
                                        alignItems: "center"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            src: "/圖標-郵件.png"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                marginLeft: 16
                                            },
                                            children: "info@floralismhk.com"
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_contactPage_module_css__WEBPACK_IMPORTED_MODULE_12___default().main_contain),
                            style: {
                                display: "flex",
                                alignItems: "flex-end"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                style: {
                                    width: "100%"
                                },
                                src: "/contactus-background.png"
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_13___default().goods_list),
                style: {},
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_cateScroll__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    title: "【FLORALISM】 全部分類",
                    list: category,
                    page: categoryPage,
                    type: "category",
                    perPage: !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8,
                    setPage: setCategoryPage,
                    animation: true
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_contactPage_module_css__WEBPACK_IMPORTED_MODULE_12___default().ContactusLayout),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Contactus__WEBPACK_IMPORTED_MODULE_3__["default"], {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_LoginPannel__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
async function getStaticProps(context) {
    const { params  } = context;
    const response = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_8__/* .constant.api_url */ .a.api_url}/api/flowercategory/index`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    const data = await response.text();
    const allcate_response = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_8__/* .constant.api_url */ .a.api_url}/api/Flowercategory/allIndex`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    let allcate = await allcate_response.json();
    //////console.log(allcate);
    return {
        props: {
            cateList: JSON.parse(data).data,
            allcate: allcate.data
        },
        revalidate: 30
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

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [5893,5152,29,1664,5829,1116,2852,978,7602,751,6991,8890,6739,6600,5107,8992], () => (__webpack_exec__(2960)));
module.exports = __webpack_exports__;

})();