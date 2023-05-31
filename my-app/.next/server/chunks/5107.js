"use strict";
exports.id = 5107;
exports.ids = [5107];
exports.modules = {

/***/ 3903:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "e": () => (/* binding */ spliceArr)
/* harmony export */ });
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3409);

const spliceArr = (arr, page_num, type)=>{
    let newArr = [];
    // if (type) {
    for(let i = 0; i < arr.length / page_num; i++){
        let res = arr.slice(page_num * i, page_num * (i + 1));
        newArr.push(res);
    }
    ////console.log(newArr);
    if (type) {
        ////console.log("進來這裏")
        return newArr;
    } else return newArr[0];
} /**
 * Public Utils
 */ ;


/***/ }),

/***/ 8932:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
            "component\\Dynamic.js -> " + "./Header"
        ]
    },
    ssr: false
});
function DynamicComponent(props) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicLazyComponent, {
        list: props.cateList,
        login: ()=>{
            //console.log("123");
            if (js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("token")) {
                alert("你先退出登陆吗");
            } else props.setLogin(true);
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;