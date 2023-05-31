(() => {
var exports = {};
exports.id = 980;
exports.ids = [980,8693,839,7720,8968,6163,1577,9925];
exports.modules = {

/***/ 1139:
/***/ ((module) => {

// Exports
module.exports = {
	"banner_desc": "banner_banner_desc__Hb0Hv",
	"desc_layout": "banner_desc_layout__XET2j",
	"main_background": "banner_main_background__K9Ugq",
	"main_contain": "banner_main_contain__OurhM"
};


/***/ }),

/***/ 9382:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Category),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3409);
/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6991);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8710);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _component_Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7602);
/* harmony import */ var _component_Contactus__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6739);
/* harmony import */ var _component_LoginPannel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(978);
/* harmony import */ var _component_ResgisterPannel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1116);
/* harmony import */ var _component_ForgetPassword__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2852);
/* harmony import */ var _styles_banner_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(1139);
/* harmony import */ var _styles_banner_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_banner_module_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _method__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3903);
/* harmony import */ var _component_GoodsScroll__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(8890);
/* harmony import */ var _component_Dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(8932);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _component_cateScroll__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(6600);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_Header__WEBPACK_IMPORTED_MODULE_2__, _component_Footer__WEBPACK_IMPORTED_MODULE_3__, _component_LoginPannel__WEBPACK_IMPORTED_MODULE_5__, _component_ResgisterPannel__WEBPACK_IMPORTED_MODULE_6__, _component_ForgetPassword__WEBPACK_IMPORTED_MODULE_7__, _component_GoodsScroll__WEBPACK_IMPORTED_MODULE_10__, _component_Dynamic__WEBPACK_IMPORTED_MODULE_11__]);
([_component_Header__WEBPACK_IMPORTED_MODULE_2__, _component_Footer__WEBPACK_IMPORTED_MODULE_3__, _component_LoginPannel__WEBPACK_IMPORTED_MODULE_5__, _component_ResgisterPannel__WEBPACK_IMPORTED_MODULE_6__, _component_ForgetPassword__WEBPACK_IMPORTED_MODULE_7__, _component_GoodsScroll__WEBPACK_IMPORTED_MODULE_10__, _component_Dynamic__WEBPACK_IMPORTED_MODULE_11__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















function Category({ allcate , cateList , data , top_banner , middle_banner  }) {
    // //////////console.log("----");
    ////////console.log(data);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_14__.useRouter)();
    const [login, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const [register, setRegister] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(false);
    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(1);
    const [category, setCategory] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
    const [categoryPage, setCategoryPage] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(1);
    const [goodsList, setGoodsList] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)([]);
    const [goodsPage, setGoodsPage] = (0,react__WEBPACK_IMPORTED_MODULE_8__.useState)(1);
    const resizeUpdate = (e)=>{
        if (e.target.innerWidth <= 675) {
            setFlag(0);
        } else if (e.target.innerWidth <= 1100) {
            setFlag(1);
        } else {
            setFlag(2);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
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
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
        ////////////console.log("flag改變", flag);
        setCategory((0,_method__WEBPACK_IMPORTED_MODULE_9__/* .spliceArr */ .e)(allcate, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8, 1));
        ////////////console.log(spliceArr(GoodsPage,  !flag ? 4 :flag===1? 6:flag===2&&8))
        setGoodsList((0,_method__WEBPACK_IMPORTED_MODULE_9__/* .spliceArr */ .e)(data.data, !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8));
        setGoodsPage(1);
        setCategoryPage(1);
    }, [
        flag
    ]);
    // const checkname = () => {
    //     //    //////////console.log(goodsList);
    //     let res = allcate.filter((item) => {
    //         if (item.id === data.data[0].flower_category_id) {
    //             return item;
    //         }
    //     })
    //     return res[0].categoryname;
    // }
    (0,react__WEBPACK_IMPORTED_MODULE_8__.useEffect)(()=>{
    // //////////console.log(goodsList);
    }, [
        goodsList
    ]);
    //////console.log("======");
    //////console.log(data);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_head__WEBPACK_IMPORTED_MODULE_12___default()), {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Dynamic__WEBPACK_IMPORTED_MODULE_11__["default"], {
                cateList: cateList,
                setLogin: setLogin
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    width: "100%",
                    position: "relative",
                    backgroundImage: `url(${top_banner.coverimage})`,
                    marginBottom: 0
                },
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().banner),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().top_banner_area),
                    style: {},
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: `${_constant_index__WEBPACK_IMPORTED_MODULE_1__/* .constant.api_url */ .a.api_url}/uploads/20230523/0c024bf065eaa139d865a7a6af18f7dc.png`,
                            width: "100%"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            onClick: ()=>data.data.length ? router.push(`/productSearch/${data.data[0].flower_category_id}`) : router.push("/"),
                            style: {
                                border: "none",
                                display: "block",
                                cursor: "pointer"
                            },
                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().banner_buttom),
                            children: "點擊選購"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().goods_view),
                style: {
                    marginBottom: 32
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_GoodsScroll__WEBPACK_IMPORTED_MODULE_10__["default"], {
                    title: data.category_name,
                    list: goodsList,
                    page: goodsPage,
                    id: data?.data[0]?.flower_category_id ?? 0,
                    setPage: setGoodsPage,
                    perPage: !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8,
                    maxPage: data.last_page,
                    setList: setGoodsList,
                    animation: true,
                    type: ""
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    width: "100%",
                    position: "relative"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: flag ? `${_constant_index__WEBPACK_IMPORTED_MODULE_1__/* .constant.api_url */ .a.api_url}/uploads/20230523/94430a50cbdf2a5a5a2d10a2af501ec3.png` : `${_constant_index__WEBPACK_IMPORTED_MODULE_1__/* .constant.api_url */ .a.api_url}/uploads/20230523/94430a50cbdf2a5a5a2d10a2af501ec3.png`,
                        style: {
                            width: "100%",
                            height: "100%",
                            display: "block"
                        }
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_banner_module_css__WEBPACK_IMPORTED_MODULE_16___default().banner_desc),
                        style: {},
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                maxHeight: 200,
                                overflow: "hidden",
                                textOverflow: "ellipsis"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                    src: "/小短文-訂製花束.png",
                                    style: {
                                        width: "100%"
                                    }
                                })
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().goods_list),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_cateScroll__WEBPACK_IMPORTED_MODULE_13__["default"], {
                    title: "【FLORALISM】 全部分類",
                    list: category,
                    page: categoryPage,
                    type: "category",
                    perPage: !flag ? 4 : flag === 1 ? 6 : flag === 2 && 8,
                    setPage: setCategoryPage
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().contactus),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Contactus__WEBPACK_IMPORTED_MODULE_4__["default"], {})
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_LoginPannel__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
async function getStaticPaths() {
    const response = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_1__/* .constant.api_url */ .a.api_url}/api/Flowercategory/allIndex`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    const data = await response.json();
    let res = [];
    data.data.map((item, index)=>{
        res.push({
            params: {
                categoryId: item.id.toString()
            }
        });
    });
    // //////////console.log(res);
    // const data=await response.json()
    // TODO get product id to be array
    return {
        paths: res,
        fallback: false
    };
}
async function getStaticProps(context) {
    const { params  } = context;
    // //////////console.log(params);
    const response = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_1__/* .constant.api_url */ .a.api_url}/api/flowers/index?keyword=&flower_category_id=${params.categoryId}`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    const banner = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_1__/* .constant.api_url */ .a.api_url}/api/banner/index`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    const tt_response = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_1__/* .constant.api_url */ .a.api_url}/api/flowercategory/index`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    const allcate_response = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_1__/* .constant.api_url */ .a.api_url}/api/Flowercategory/allIndex`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    let allcate = await allcate_response.json();
    const tt_data = await tt_response.text();
    const data = await response.text();
    const banner_list = await banner.json();
    ////console.log("------------");
    ////console.log(JSON.parse(data).data);
    //////console.log("--------");
    //console.log(banner_list.data);
    //console.log(banner_list.data.top_banner.web);
    //console.log(banner_list.data.middle_banner.web);
    //////console.log(params.categoryId)
    let top_banner = banner_list.data.top_banner.web.filter((item)=>{
        if (item.flower_category_ids.includes(parseInt(params.categoryId))) {
            //////console.log("找到了");
            return item;
        }
    });
    let middle_banner = banner_list.data.middle_banner.web.filter((item)=>{
        if (item.flower_category_ids.includes(parseInt(params.categoryId))) {
            return item;
        }
    // //////console.log(item.flower_category_ids.includes(params.categoryId))
    });
    //////console.log(top_banner,middle_banner);
    return {
        props: {
            allcate: allcate.data,
            cateList: JSON.parse(tt_data).data,
            data: JSON.parse(data).data,
            top_banner: middle_banner.length ? top_banner[0] : {
                coverimage: `${_constant_index__WEBPACK_IMPORTED_MODULE_1__/* .constant.api_url */ .a.api_url}/uploads/20230523/637cfca2255479e7b2fb99f6364b11b4.png)`
            },
            middle_banner: middle_banner.length ? middle_banner[0] : {
                coverimage: `${_constant_index__WEBPACK_IMPORTED_MODULE_1__/* .constant.api_url */ .a.api_url}/uploads/20230523/94430a50cbdf2a5a5a2d10a2af501ec3.png`
            }
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5893,5152,29,1664,5829,1116,2852,978,7602,751,6991,8890,6739,6600,5107], () => (__webpack_exec__(9382)));
module.exports = __webpack_exports__;

})();