exports.id = 8992;
exports.ids = [8992];
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

/***/ 8992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BodyBanner)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_banner_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1139);
/* harmony import */ var _styles_banner_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_banner_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8710);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2__);



function BodyBanner(props) {
    ////console.log("flag为:"+props.flag);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            width: "100%",
            position: "relative"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                src: props.flag === 0 ? props.imgTiny : props.img,
                style: {
                    width: "100%",
                    height: "100%",
                    display: "block"
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_banner_module_css__WEBPACK_IMPORTED_MODULE_1___default().banner_desc),
                style: {},
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        overflow: "hidden",
                        textOverflow: "ellipsis"
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().distance),
                                    style: {
                                        borderBottomWidth: 1,
                                        borderBottomColor: "white"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().title),
                                    style: {
                                        color: "white",
                                        marginRight: 16,
                                        marginLeft: 16
                                    },
                                    children: props.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_2___default().distance),
                                    style: {
                                        borderBottomWidth: 1,
                                        borderBottomColor: "white"
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {},
                            className: (_styles_banner_module_css__WEBPACK_IMPORTED_MODULE_1___default().desc_layout),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    children: props.desc1
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginTop: 12
                                    },
                                    children: props.desc2
                                })
                            ]
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