"use strict";
exports.id = 6600;
exports.ids = [6600];
exports.modules = {

/***/ 6600:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CateScroll)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8710);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_goodsScroll_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5037);
/* harmony import */ var _styles_goodsScroll_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_goodsScroll_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _GoodsItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(751);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);





function CateScroll(props) {
    const [goodsList, setGoodsList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.list);
    //////////console.log("0000");
    ////console.log("=====");
    ////console.log(props.list);
    // //////////console.log(props);
    // const [btnList, setBtnList] = useState(props.list.length);
    // const [props.page, setprops.page] = useState(props.page);
    // const [props.list.length, setprops.list.length] = useState(props.list.length);
    //////////console.log(props.list.length)
    const setBtn = ()=>{
        switch(props.page){
            case 1:
                {
                    if (props?.list?.length === 3) {
                        return [
                            1,
                            2,
                            3
                        ];
                    }
                    if (props?.list?.length === 2) {
                        return [
                            1,
                            2
                        ];
                    }
                    if (props?.list?.length === 1) {
                        return [];
                    }
                }
            case 2:
                {
                    if (props?.list?.length === 3) {
                        //////////console.log("是3");
                        return [
                            1,
                            2,
                            3
                        ];
                    } else if (props?.list?.length === 2) {
                        //////////console.log("是2");
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
            case props?.list?.length - 1:
                return [
                    props.page - 2,
                    props.page - 1,
                    props.page,
                    props?.list?.length
                ];
            case props?.list?.length:
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
    //////////console.log("最大页面发生变化")
    //////////console.log("当前页面发生变化")
    // //////////console.log(props.page,props.page)
    // useEffect(()=>{
    // },[])
    // 大页面为8，小页面为4，当大页面切换至小页面时。
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
                    props.flag !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().distance)
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().title),
                        style: {
                            whiteSpace: "nowrap"
                        },
                        children: props.title
                    }),
                    props.flag !== 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().distance)
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        display: "flex",
                        flexWrap: "wrap",
                        marginTop: 12
                    },
                    children: props?.list?.length && props.list[props.page - 1].map((item, index)=>{
                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_GoodsItem__WEBPACK_IMPORTED_MODULE_1__["default"], {
                            src: item.src,
                            item: item,
                            title: item.categoryname,
                            price: item.price,
                            type: props.type,
                            animation: props.animation
                        }, index);
                    })
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_goodsScroll_module_css__WEBPACK_IMPORTED_MODULE_4___default().btn_list),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        display: "flex",
                        ...props.ButtonGroupStyle,
                        marginTop: 15
                    },
                    children: [
                        props.page > 3 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "...."
                        }),
                        setBtn().map((item, index)=>{
                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>{
                                    props.setPage(item);
                                },
                                className: item === props.page ? (_styles_goodsScroll_module_css__WEBPACK_IMPORTED_MODULE_4___default().select) : "common",
                                style: {
                                    marginLeft: 8,
                                    cursor: "pointer",
                                    marginRight: 4,
                                    paddingLeft: item >= 10 ? 8 : 12,
                                    paddingRight: item >= 10 ? 8 : 12,
                                    paddingTop: 4,
                                    paddingBottom: 4,
                                    borderRadius: 50
                                },
                                children: item
                            }, index);
                        }),
                        props?.list?.length - props.page > 2 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            children: "...."
                        })
                    ]
                })
            })
        ]
    });
}


/***/ })

};
;