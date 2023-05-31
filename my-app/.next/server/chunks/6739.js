exports.id = 6739;
exports.ids = [6739];
exports.modules = {

/***/ 1876:
/***/ ((module) => {

// Exports
module.exports = {
	"contactus_border": "contactComponent_contactus_border__sBQko",
	"contactus_min_border": "contactComponent_contactus_min_border__EN_IP",
	"contact_img": "contactComponent_contact_img__mfJZc",
	"contact_min_border": "contactComponent_contact_min_border__zApeg",
	"submit_btn": "contactComponent_submit_btn__RF19X",
	"contact_total": "contactComponent_contact_total__tG4cs"
};


/***/ }),

/***/ 6739:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Contactus)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_contactComponent_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1876);
/* harmony import */ var _styles_contactComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_contactComponent_module_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



function Contactus(props) {
    const [input, setInput] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_styles_contactComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().contact_total),
        style: {
            display: "flex",
            flex: 1,
            backgroundColor: "black",
            alignItems: "center",
            ...props.topStyle
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                style: {
                    flex: 1,
                    padding: "5%",
                    alignItems: "center"
                },
                className: (_styles_contactComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().contactus_border),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_contactComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().contact_img),
                        style: {},
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                            src: "/訂製服務.png",
                            width: "100%"
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_contactComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().max_screen),
                        style: {
                            flex: 1,
                            flexDirection: "column",
                            padding: 16,
                            alignItems: "flex-start"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    color: "white",
                                    fontSize: 16,
                                    letterSpacing: 2,
                                    width: "100%",
                                    textAlign: "left"
                                },
                                children: "接收最新信息和優惠"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                style: {
                                    marginTop: 24,
                                    outline: "none",
                                    border: "none",
                                    width: "100%",
                                    paddingTop: 16,
                                    paddingBottom: 16,
                                    fontSize: 12,
                                    borderRadius: 8,
                                    paddingLeft: 8
                                },
                                placeholder: "請輸入您的電郵地址",
                                onInput: (e)=>setInput(e.target.value)
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    width: "100%",
                                    cursor: "pointer"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "button",
                                    value: "發送",
                                    onClick: ()=>{
                                        if (input) {
                                            alert("發送成功");
                                        } else alert("請填寫郵箱");
                                    },
                                    className: (_styles_contactComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().submit_btn)
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_contactComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().contact_min_border),
                style: {
                    width: "100%"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        style: {
                            flex: 1,
                            padding: "5%",
                            alignItems: "center"
                        },
                        className: (_styles_contactComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().contactus_min_border),
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: (_styles_contactComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().contact_img),
                            style: {},
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/訂製服務.png",
                                width: "100%"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_contactComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().max_screen),
                        style: {
                            flex: 1,
                            flexDirection: "column",
                            padding: 16,
                            alignItems: "flex-start"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    color: "white",
                                    fontSize: 16,
                                    letterSpacing: 2,
                                    width: "100%",
                                    textAlign: "left"
                                },
                                children: "接收最新信息和優惠"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                style: {
                                    marginTop: 24,
                                    outline: "none",
                                    width: "100%",
                                    paddingTop: 16,
                                    paddingBottom: 16,
                                    fontSize: 12,
                                    borderRadius: 8,
                                    paddingLeft: 8
                                },
                                placeholder: "請輸入您的電郵地址"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    width: "100%"
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "button",
                                    value: "發送",
                                    className: (_styles_contactComponent_module_css__WEBPACK_IMPORTED_MODULE_2___default().submit_btn)
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
}


/***/ })

};
;