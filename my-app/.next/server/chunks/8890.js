exports.id = 8890;
exports.ids = [8890];
exports.modules = {

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

/***/ 8890:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoodsScoll)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(8710);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_goodsScroll_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5037);
/* harmony import */ var _styles_goodsScroll_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_goodsScroll_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _GoodsItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var _m_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5829);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function GoodsScoll(props) {
    const [goodsList, setGoodsList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.list);
    // ////console.log("===============");
    // ////console.log(props.list);
    // //////console.log(props.maxPage);
    // //////////console.log(props.list);
    ////////////console.log(props);
    ////////////console.log("0000");
    // //////////console.log(props.list);
    ////////////console.log(props);
    // const [btnList, setBtnList] = useState(props.list.length);
    // const [props.page, setprops.page] = useState(props.page);
    // const [props.list.length, setprops.list.length] = useState(props.list.length);
    ////////////console.log(props.list.length)
    const setBtn = ()=>{
        switch(props.page){
            case 1:
                {
                    if (props.maxPage === 3) {
                        return [
                            1,
                            2,
                            3
                        ];
                    }
                    if (props.maxPage === 2) {
                        return [
                            1,
                            2
                        ];
                    }
                    if (props.maxPage === 1) {
                        return [];
                    }
                }
            case 2:
                {
                    if (props.maxPage === 3) {
                        //////console.log("是3");
                        return [
                            1,
                            2,
                            3
                        ];
                    } else if (props.maxPage === 2) {
                        //////console.log("是2");
                        return [
                            1,
                            2
                        ];
                    } else {
                        return [
                            1,
                            2,
                            3,
                            4
                        ];
                    }
                }
            // case props.list.length-props.page=2:([props.list.length]];
            case props.maxPage - 1:
                return [
                    props.page - 2,
                    props.page - 1,
                    props.page,
                    props.maxPage
                ];
            case props.maxPage:
                return [
                    props.page - 2,
                    props.page - 1,
                    props.page
                ];
            default:
                return [
                    props.page - 2,
                    props.page - 1,
                    props.page,
                    props.page + 1,
                    props.page + 2
                ];
        }
    };
    //////////////console.log("最大页面发生变化")
    //////////////console.log("当前页面发生变化")
    // //////////////console.log(props.page,props.page)
    // useEffect(()=>{
    // },[])
    // 大页面为8，小页面为4，当大页面切换至小页面时。
    const fetchGoods = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)({
        mutationKey: [
            "PageFetchGoods",
            props.perPage
        ],
        mutationFn: (data)=>_m_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].fetchGoods */ .Z.fetchGoods(data)
    });
    const toFetchGoods = (page)=>{
        ////////////console.log("====");
        ////////////console.log(page);
        fetchGoods.mutate({
            keyword: "",
            flower_category_id: props.id,
            listRows: props.perPage,
            page: page
        }, {
            onSuccess: async (res)=>{
                let _res = await res.json();
                // //////////console.log(_res);
                props.setList(_res.data.data);
            },
            onError: (res)=>{
                // //////////console.log(res);
                Toast.show("獲取失敗");
            }
        });
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            ...props.top_style
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    display: "flex",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().distance)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().title),
                        children: props.title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_5___default().distance)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        display: "flex",
                        flexWrap: "wrap",
                        marginTop: 32
                    },
                    children: !!props?.list?.length ? props.list.map((item, index)=>{
                        ////console.log(item);
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GoodsItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            top_style: {
                                marginTop: 12
                            },
                            src: item.src,
                            item: item,
                            title: item.categoryname,
                            price: item.price,
                            type: props.type,
                            animation: props.animation
                        }, index);
                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            width: "100%",
                            textAlign: "center"
                        },
                        children: "商品列表为空"
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_goodsScroll_module_css__WEBPACK_IMPORTED_MODULE_6___default().btn_list),
                children: props.maxPage > 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        display: "flex",
                        ...props.ButtonGroupStyle
                    },
                    children: [
                        props.page > 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "...."
                        }),
                        setBtn().map((item, index)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>{
                                    props.setPage(item);
                                    toFetchGoods(item);
                                ////////////console.log("Page change");
                                },
                                className: item === props.page ? (_styles_goodsScroll_module_css__WEBPACK_IMPORTED_MODULE_6___default().select) : "common",
                                style: {
                                    marginLeft: 8,
                                    cursor: "pointer",
                                    marginRight: 4,
                                    paddingLeft: props.page >= 10 ? 5 : 12,
                                    paddingRight: props.page >= 10 ? 5 : 12,
                                    paddingTop: 4,
                                    paddingBottom: 4,
                                    borderRadius: 50
                                },
                                children: item
                            }, index);
                        }),
                        props.maxPage - props.page > 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "...."
                        })
                    ]
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;