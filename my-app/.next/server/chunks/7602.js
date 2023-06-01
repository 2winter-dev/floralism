exports.id = 7602;
exports.ids = [7602];
exports.modules = {

/***/ 9796:
/***/ ((module) => {

// Exports
module.exports = {
	"footer": "footer_footer__uSNcK",
	"footer_column": "footer_footer_column__BHwLV",
	"footer_contactList": "footer_footer_contactList__tOCzW",
	"icon_group": "footer_icon_group__2B7IN",
	"footer_Image": "footer_footer_Image__srQen",
	"footer_three_column": "footer_footer_three_column__69nmD",
	"footer_icon_group": "footer_footer_icon_group__DYK07",
	"special_column": "footer_special_column__9lacd"
};


/***/ }),

/***/ 7602:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9796);
/* harmony import */ var _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3409);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




function Footer() {
    const fetchCate = async ()=>{
        let response = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_1__/* .constant.api_url */ .a.api_url}/api/Flowercategory/allIndex`, {
            mode: "cors",
            headers: {
                // "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "GET,POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
        });
        return await response.json();
    };
    const [cateList, setList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        fetchCate().then((res)=>setList(res)).catch((er)=>{
            console.log("cat_list error:");
            console.log(er);
        });
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer),
        style: {
            width: "100%"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer_three_column),
                style: {
                    display: "flex",
                    justifyContent: "space-between"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer_column),
                        style: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "產品"
                            }),
                            cateList.isSuccess && cateList.data.data.map((item, index)=>{
                                // ////console.log(item);
                                if (index > 5) return null;
                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    href: `/category/${item.id}`,
                                    children: item.categoryname
                                }, index);
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer_column),
                        style: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "幫助"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: "購物指南"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: "訂製服務"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                children: "送貨服務"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                href: "/ContactPage",
                                children: "關於我們"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer_column),
                        style: {
                            display: "flex",
                            flexDirection: "column"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "聯絡我們"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "香港新界葵涌國瑞路116-122號"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginTop: 4
                                },
                                children: "城市工業中心1樓H&J室"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    "T ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "tel:+85265818053",
                                        children: "+852 65818053"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    "F ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "",
                                        children: "+852 65818053"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                children: [
                                    "E ",
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                        href: "mailto:info@floralismhk.com",
                                        children: "info@floralismhk.com"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: "對我們的產品及服務有興趣？"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    marginTop: 4
                                },
                                children: "請聯係我們"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().special_column)}`,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            minWidth: 163
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer_contactList),
                            style: {
                                display: "flex",
                                justifyContent: "center",
                                backgroundColor: "black",
                                flexWrap: "wrap",
                                alignItems: "center",
                                flexDirection: "column",
                                padding: 14
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        flex: 1,
                                        fontSize: 20
                                    },
                                    children: "FOLLOW US"
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().icon_group),
                                    style: {
                                        flex: 1,
                                        display: "flex",
                                        alignItems: "center",
                                        flexWrap: "wrap",
                                        marginTop: 16,
                                        justifyContent: "space-between"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                cursor: "pointer"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/矢量智能对象-3.png",
                                                    className: (_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer_Image)
                                                })
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                cursor: "pointer"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/矢量智能对象-2.png",
                                                className: (_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer_Image)
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                cursor: "pointer"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: "/矢量智能对象-1.png",
                                                className: (_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer_Image)
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                cursor: "pointer"
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                href: "https://wa.me/85263396652",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                    src: "/矢量智能对象.png",
                                                    className: {
                                                        ...(_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_3___default().footer_Image),
                                                        marginRight: 0
                                                    }
                                                })
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                style: {
                    width: "100%",
                    textAlign: "center",
                    marginTop: 16,
                    marginBottom: 16,
                    fontSize: 12,
                    whiteSpace: "nowrap"
                },
                children: "\xa92023 floralismhk Ins All rights reserved"
            })
        ]
    });
}


/***/ })

};
;