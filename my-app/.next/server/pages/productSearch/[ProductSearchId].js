(() => {
var exports = {};
exports.id = 7978;
exports.ids = [7978,8693,7720,839,6163,8968,1577,9925];
exports.modules = {

/***/ 2494:
/***/ ((module) => {

// Exports
module.exports = {
	"banner_search": "productSearch_banner_search__sIMsh",
	"banner_desc": "productSearch_banner_desc__Xo4VW",
	"search_main_body": "productSearch_search_main_body__RZ3Gs"
};


/***/ }),

/***/ 9219:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductSearch),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6991);
/* harmony import */ var _component_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7602);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8710);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _styles_productSearch_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(2494);
/* harmony import */ var _styles_productSearch_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_productSearch_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _component_SearchInput__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8114);
/* harmony import */ var _component_GoodsItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _method__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3903);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3409);
/* harmony import */ var _component_GoodsScroll__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(8890);
/* harmony import */ var _pages_component_Dynamic__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8932);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9752);
/* harmony import */ var _m_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5829);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _component_LoginPannel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(978);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_Header__WEBPACK_IMPORTED_MODULE_1__, _component_Footer__WEBPACK_IMPORTED_MODULE_2__, _component_GoodsScroll__WEBPACK_IMPORTED_MODULE_8__, _pages_component_Dynamic__WEBPACK_IMPORTED_MODULE_9__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__, _component_LoginPannel__WEBPACK_IMPORTED_MODULE_13__]);
([_component_Header__WEBPACK_IMPORTED_MODULE_1__, _component_Footer__WEBPACK_IMPORTED_MODULE_2__, _component_GoodsScroll__WEBPACK_IMPORTED_MODULE_8__, _pages_component_Dynamic__WEBPACK_IMPORTED_MODULE_9__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__, _component_LoginPannel__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















function ProductSearch({ cateList , data  }) {
    // //////////console.log(data);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_12__.useRouter)();
    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(1);
    const [login, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [register, setRegister] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [goodsList, setGoodsList] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const [searchResult, setSearchResult] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)([]);
    const input = (0,react__WEBPACK_IMPORTED_MODULE_5__.useRef)();
    const [keyword, setKeyWord] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("");
    const fetchGoods = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useMutation)({
        mutationKey: [
            "fetchGoods"
        ],
        mutationFn: async (data)=>await _m_api__WEBPACK_IMPORTED_MODULE_11__/* ["default"].fetchGoods */ .Z.fetchGoods(data)
    });
    const ToSearch = ()=>{
        ////////console.log("點擊了");
        fetchGoods.mutate({
            keyword,
            flower_category_id: "",
            listRows: 16,
            page: page
        }, {
            onSuccess: async (res)=>{
                let _res = await res.json();
                if (_res.code === 1) {
                    setSearchResult(_res.data.data);
                    ////////console.log(_res);
                    setPage(1);
                } else {
                    alert(_res.msg);
                }
            },
            onError: (res)=>{
            //////////console.log(res);
            }
        });
    };
    const resizeUpdate = (e)=>{
        if (e.target.innerWidth <= 1100) {
            ////////////console.log("====", e.target.innerWidth);
            setFlag(true);
        } else {
            ////////////console.log("-----", e.target.innerWidth);
            setFlag(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        window.addEventListener("resize", resizeUpdate);
        window.innerWidth < 1100 ? !flag && setFlag(true) : flag && setFlag(false);
        window.addEventListener("keypress", (e)=>{
            if (e.key === "Enter") {
                ToSearch();
                if (keyword === "") {
                    setSearchResult([]);
                }
            }
        });
        return ()=>{
            window.removeEventListener("resize", resizeUpdate);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
        ////////////console.log("flag改變", flag);
        setPage(1);
        setGoodsList((0,_method__WEBPACK_IMPORTED_MODULE_6__/* .spliceArr */ .e)(data.data, 16));
    // setCategoryPage(1);
    }, [
        flag
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
    ////////////console.log(goodsList)
    }, [
        goodsList
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_pages_component_Dynamic__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
                        src: "/banner-搜索背景.png",
                        style: {
                            width: "100%"
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_productSearch_module_css__WEBPACK_IMPORTED_MODULE_14___default().banner_search),
                        style: {
                            position: "absolute"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/product-search-desc.png",
                                className: (_styles_productSearch_module_css__WEBPACK_IMPORTED_MODULE_14___default().banner_desc)
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().search_area)}`,
                                style: {
                                    marginBottom: 12
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().serach_icon)} iconfont`,
                                        style: {
                                            marginLeft: 8
                                        },
                                        children: ""
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        ref: input,
                                        type: "text",
                                        value: keyword,
                                        onInput: (e)=>setKeyWord(e.target.value),
                                        placeholder: "Search....",
                                        className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_15___default().input)}`,
                                        style: {
                                            flex: 1,
                                            padding: 1,
                                            marginLeft: 10,
                                            border: "none",
                                            outline: "none",
                                            backgroundColor: "transparent"
                                        }
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: `${(_styles_productSearch_module_css__WEBPACK_IMPORTED_MODULE_14___default().search_main_body)}`,
                style: {
                    marginBottom: 32
                },
                children: searchResult?.length ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_GoodsScroll__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    title: data.category_name,
                    list: searchResult,
                    page: page,
                    id: data?.data[0]?.flower_category_id ?? 0,
                    setPage: setPage,
                    perPage: 16,
                    maxPage: data.last_page,
                    setList: setGoodsList,
                    animation: true,
                    type: ""
                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_GoodsScroll__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    title: data.category_name,
                    list: goodsList,
                    page: page,
                    id: data?.data[0]?.flower_category_id ?? 0,
                    setPage: setPage,
                    perPage: 16,
                    maxPage: data.last_page,
                    setList: setGoodsList,
                    animation: true,
                    type: ""
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_LoginPannel__WEBPACK_IMPORTED_MODULE_13__["default"], {
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
    const response = await fetch(`${_constant__WEBPACK_IMPORTED_MODULE_7__/* .constant.api_url */ .a.api_url}/api/Flowercategory/allIndex`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "GET,POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    const data = await response.json();
    let res = [];
    data.data.map((item, index)=>{
        res.push({
            params: {
                ProductSearchId: item.id.toString()
            }
        });
    });
    return {
        paths: res,
        fallback: false
    };
}
async function getStaticProps(context) {
    const { params  } = context;
    // //////////console.log(params);
    const response = await fetch(`${_constant__WEBPACK_IMPORTED_MODULE_7__/* .constant.api_url */ .a.api_url}/api/flowers/index?keyword=&flower_category_id=${params.ProductSearchId}&listRows=16`, {
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "GET,POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    const tt_response = await fetch(`${_constant__WEBPACK_IMPORTED_MODULE_7__/* .constant.api_url */ .a.api_url}/api/flowercategory/index`, {
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "GET,POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    const tt_data = await tt_response.text();
    const data = await response.text();
    // //////////console.log("------======-----")
    // //////////console.log(data);
    return {
        props: {
            cateList: JSON.parse(tt_data).data,
            data: JSON.parse(data).data
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
var __webpack_exports__ = __webpack_require__.X(0, [5893,5152,29,1664,5829,1116,2852,978,7602,751,6991,8890,5107,8114], () => (__webpack_exec__(9219)));
module.exports = __webpack_exports__;

})();