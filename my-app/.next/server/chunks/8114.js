"use strict";
exports.id = 8114;
exports.ids = [8114];
exports.modules = {

/***/ 8114:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchInput)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8710);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1__);


function SearchInput(props) {
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().search_area)}`,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "iconfont",
                style: {
                    marginLeft: 8,
                    fontSize: 20
                },
                children: ""
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                type: "text",
                value: props.keyword,
                onInput: (e)=>props.s_key(e.target.value),
                placeholder: "Search....",
                className: `${(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_1___default().input)}`,
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
    });
}


/***/ })

};
;