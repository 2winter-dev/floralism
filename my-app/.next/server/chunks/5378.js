"use strict";
exports.id = 5378;
exports.ids = [5378];
exports.modules = {

/***/ 5378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopcarBottom)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9826);
/* harmony import */ var _styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





function ShopcarBottom(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();
    const toAddAnimation = (props)=>{
        //////////console.log("點擊了");
        js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].remove("isAdd");
        router.push("/shopCar/shopCar");
    // location.href='/shopCar/shopCar'
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        style: {
            position: "fixed",
            right: "5%",
            bottom: 150,
            cursor: "pointer",
            zIndex: 99999
        },
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            onClick: toAddAnimation,
            style: {
                cursor: "pointer"
            },
            className: props.isShow ? `${(_styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_4___default().button)} ${(_styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_4___default().button_hid)}` : (_styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: props.isAdd ? (_styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_4___default().add_animation) : (_styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_4___default().common_animation),
                    style: {
                        width: 8,
                        height: 8,
                        borderRadius: 50,
                        backgroundColor: "red",
                        position: "absolute",
                        right: 16,
                        top: 16
                    }
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                    className: "iconfont",
                    children: ""
                })
            ]
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;