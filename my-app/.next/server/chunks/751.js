exports.id = 751;
exports.ids = [751];
exports.modules = {

/***/ 9134:
/***/ ((module) => {

// Exports
module.exports = {
	"GoodsItem": "goodsItem_GoodsItem__MXINy",
	"goods_img_cover": "goodsItem_goods_img_cover__jEOT9",
	"goods_hover_img": "goodsItem_goods_hover_img__3EVbb",
	"buy_goods_btn": "goodsItem_buy_goods_btn__soAMN",
	"buy_btn": "goodsItem_buy_btn__MHuB_",
	"an_fangda": "goodsItem_an_fangda__4vw9J",
	"fangda": "goodsItem_fangda__3Fzv7",
	"Iscategory": "goodsItem_Iscategory__FPyCL",
	"goods_title": "goodsItem_goods_title__AocWN",
	"littletransition": "goodsItem_littletransition__uOyya",
	"goods_carsouel_price": "goodsItem_goods_carsouel_price___LJ5n",
	"goods_price": "goodsItem_goods_price__vLd1V",
	"goods_img": "goodsItem_goods_img__wvQdu"
};


/***/ }),

/***/ 751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GoodsItem)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9134);
/* harmony import */ var _styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1__);


function GoodsItem(props) {
    if (props.type !== "category" && props.type !== "carsouel") {
        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `${(_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().GoodsItem)}`,
            onClick: ()=>{
                location.href = `/category/${props.item.id}`;
            },
            style: {
                padding: "2%",
                ...props.top_style
            },
            children: [
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: props.animation && (props.type === "category" || props.type === "carsouel") ? (_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().goods_img_cover) : "",
                    style: {
                        position: "relative",
                        ...props.imgTopStyle
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: props?.item?.photoimage,
                            style: {
                                width: "100%",
                                display: "block",
                                ...props.imgStyle
                            },
                            className: props.animation === "toLarge" ? `${(_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().goods_img)} ${(_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().an_fangda)}` : `${(_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().goods_img)}`
                        }),
                        props.item?.photoimages?.length && props.item?.photoimages[0] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: props?.item?.photoimages[0],
                            style: {
                                borderRadius: 16
                            },
                            className: (_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().goods_hover_img)
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                            className: (_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().buy_goods_btn),
                            children: "點擊購買"
                        })
                    ]
                }),
                props.type === "category" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        width: "100%",
                        marginTop: 16,
                        display: "flex"
                    },
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            ...props.style
                        },
                        className: (_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().goods_title),
                        children: props.item.categoryname
                    })
                }) : props.type === "carsouel" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 16,
                        paddingLeft: "10%",
                        paddingRight: "10%",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                width: "100%",
                                textOverflow: "ellipsis",
                                textAlign: "center",
                                overflow: "hidden",
                                whiteSpace: "nowrap"
                            },
                            children: props?.item?.flowername ?? ""
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().goods_carsouel_price),
                            style: {
                                width: "100%",
                                textAlign: "center",
                                whiteSpace: "nowrap"
                            },
                            children: ("HK$ " + props?.item?.price) ?? ""
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        marginTop: 16,
                        paddingLeft: "10%",
                        paddingRight: "10%",
                        alignItems: "center"
                    },
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                width: "100%",
                                textOverflow: "ellipsis",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                overflow: "hidden"
                            },
                            children: props?.item?.flowername ?? ""
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().goods_price),
                            style: {
                                width: "100%",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                overflow: "hidden"
                            },
                            children: ("HK$ " + props?.item?.price) ?? ""
                        })
                    ]
                })
            ]
        });
    }
    // props.type !== "category"&&////console.log(props.item,props.type)
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().GoodsItem)} ${props.type === "category" && (_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().Iscategory)}`,
        onClick: ()=>{
            if (props.type !== "category") {
                location.href = `/production/${props.item.id}`;
            } else {
                location.href = `/category/${props.item.id}`;
            }
        },
        style: {
            padding: "2%",
            ...props.top_style
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: props.type === "category" || props.type === "carsouel" ? (_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().goods_img_cover) : "",
                style: {
                    position: "relative",
                    ...props.imgTopStyle
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: props?.item?.photoimage,
                        style: {
                            width: "100%",
                            display: "block",
                            ...props.imgStyle
                        },
                        className: props.animation === "toLarge" ? `${(_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().goods_img)} ${(_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().an_fangda)}` : `${(_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().goods_img)}`
                    }),
                    props.type !== "category" && props.type !== "carsouel" && props.item?.photoimages?.length && props.item?.photoimages[0] && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: props?.item?.photoimages[0],
                        style: {
                            borderRadius: 16
                        },
                        className: (_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().goods_hover_img)
                    }),
                    props.type === "carsouel" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        className: (_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().buy_btn),
                        children: "點擊購買"
                    })
                ]
            }),
            props.type === "category" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    width: "100%",
                    marginTop: 16,
                    display: "flex"
                },
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    style: {
                        ...props.style
                    },
                    className: (_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().goods_title),
                    children: props.item.categoryname
                })
            }) : props.type === "carsouel" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 16,
                    paddingLeft: "10%",
                    paddingRight: "10%",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            width: "100%",
                            textOverflow: "ellipsis",
                            textAlign: "center",
                            overflow: "hidden",
                            whiteSpace: "nowrap"
                        },
                        children: props?.item?.flowername ?? ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().goods_carsouel_price),
                        style: {
                            width: "100%",
                            textAlign: "center",
                            whiteSpace: "nowrap"
                        },
                        children: ("HK$ " + props?.item?.price) ?? ""
                    })
                ]
            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    display: "flex",
                    flexDirection: "column",
                    marginTop: 16,
                    paddingLeft: "10%",
                    paddingRight: "10%",
                    alignItems: "center"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            width: "100%",
                            textOverflow: "ellipsis",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                            overflow: "hidden"
                        },
                        children: props?.item?.flowername ?? ""
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_goodsItem_module_css__WEBPACK_IMPORTED_MODULE_1___default().goods_price),
                        style: {
                            width: "100%",
                            textAlign: "center",
                            whiteSpace: "nowrap",
                            overflow: "hidden"
                        },
                        children: ("HK$ " + props?.item?.price) ?? ""
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;