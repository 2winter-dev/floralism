exports.id = 4759;
exports.ids = [4759];
exports.modules = {

/***/ 8304:
/***/ ((module) => {

// Exports
module.exports = {
	"main_contain": "user_main_contain__8bKOn",
	"left_contain": "user_left_contain__21MHU",
	"border": "user_border__3QlYR",
	"avatar_area": "user_avatar_area__aS6E2",
	"user_btn": "user_user_btn__ZQCgR",
	"changeColor": "user_changeColor__Ic0Ds",
	"order_detail_area": "user_order_detail_area__Q2sIT",
	"avatar": "user_avatar__QtWv8",
	"right_contain_title": "user_right_contain_title__6TDvt",
	"right_contain": "user_right_contain__fywuT",
	"total_contain": "user_total_contain__m51Cx",
	"submit_btn": "user_submit_btn__7UznM",
	"addAddress_btn": "user_addAddress_btn__thxxr",
	"tr_padding": "user_tr_padding__7HEPi",
	"product_img": "user_product_img__I6l7c",
	"choosen": "user_choosen__Ny1L8",
	"first_column": "user_first_column__z9Dbc",
	"second_column": "user_second_column__R2jab",
	"third_column": "user_third_column__gABGg",
	"last_column": "user_last_column__OjqFB",
	"order_desc": "user_order_desc__vhasP",
	"check_btn": "user_check_btn__Gltji",
	"product_title": "user_product_title__BT_dV",
	"m_text_overflow": "user_m_text_overflow__sdkR8",
	"message_contain": "user_message_contain__LN2fg"
};


/***/ }),

/***/ 8932:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DynamicComponent)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9915);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_2__]);
js_cookie__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const DynamicLazyComponent = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "component/Dynamic.js -> " + "./Header"
        ]
    },
    ssr: false
});
function DynamicComponent(props) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicLazyComponent, {
        list: props.cateList,
        login: ()=>{
            ////console.log("123");
            if (js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("token")) {
                alert("你要退出嗎?");
            } else props.setLogin(true);
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;