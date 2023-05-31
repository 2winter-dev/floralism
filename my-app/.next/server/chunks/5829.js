"use strict";
exports.id = 5829;
exports.ids = [5829];
exports.modules = {

/***/ 3409:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ constant)
/* harmony export */ });
const constant = {
    // api_url:'http://192.168.1.24:6353'
    // api_url:'http://192.168.31.134:6353'
    api_url: "http://admin.floralismhk.com"
};


/***/ }),

/***/ 5829:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3409);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    sendEmail: (data)=>fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_0__/* .constant.api_url */ .a.api_url}/api/ems/send`, {
            body: JSON.stringify(data),
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
        }),
    register: (data)=>fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_0__/* .constant.api_url */ .a.api_url}/api/user/registerByEmail`, {
            body: JSON.stringify(data),
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
        }),
    loginByCode: (data)=>fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_0__/* .constant.api_url */ .a.api_url}/api/user/loginByCode`, {
            body: JSON.stringify(data),
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
        }),
    loginByPassword: (data)=>fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_0__/* .constant.api_url */ .a.api_url}/api/user/passwordLogin/`, {
            body: JSON.stringify(data),
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
        }),
    verifyCode: (data)=>fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_0__/* .constant.api_url */ .a.api_url}/api/user/verifyCode`, {
            body: JSON.stringify(data),
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
        }),
    resetPassword: (data)=>fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_0__/* .constant.api_url */ .a.api_url}/api/user/resetPassword`, {
            body: JSON.stringify(data),
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
        }),
    AddToCart: (data)=>{
        //////////console.log(data);
        return fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_0__/* .constant.api_url */ .a.api_url}/api/cart/create`, {
            body: JSON.stringify({
                flower_specs_id: data.flower_specs_id,
                num: data.num,
                cardtype: data.cardtype,
                cardcontent: data.cardcontent
            }),
            method: "POST",
            mode: "cors",
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
        });
    },
    changeShopCarNumber: (data)=>{
        //////////console.log(data);
        return fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_0__/* .constant.api_url */ .a.api_url}/api/cart/updateNum`, {
            body: JSON.stringify({
                id: data.id,
                num: data.num
            }),
            method: "POST",
            mode: "cors",
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
        });
    },
    deleteProductionFromShopCar: (data)=>fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_0__/* .constant.api_url */ .a.api_url}/api/cart/delete`, {
            body: JSON.stringify({
                ids: data.ids
            }),
            method: "POST",
            mode: "cors",
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
        }),
    addAddress: (data)=>fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_0__/* .constant.api_url */ .a.api_url}/api/address/create`, {
            body: JSON.stringify({
                mobile: data.mobile,
                name: data.username,
                location: data.address
            }),
            method: "POST",
            mode: "cors",
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
        }),
    updateAddress: (data)=>fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_0__/* .constant.api_url */ .a.api_url}/api/address/update`, {
            body: JSON.stringify({
                id: data.id,
                mobile: data.mobile,
                name: data.username,
                location: data.position
            }),
            method: "POST",
            mode: "cors",
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
        }),
    setDefaultAddress: (data)=>fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_0__/* .constant.api_url */ .a.api_url}/api/address/setDefault`, {
            body: JSON.stringify({
                id: data.id
            }),
            method: "POST",
            mode: "cors",
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
        }),
    createOrder: (data)=>{
        //////////console.log(data);
        return fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_0__/* .constant.api_url */ .a.api_url}/api/order/create`, {
            body: JSON.stringify(data),
            method: "POST",
            // mode: 'cors',
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
        });
    },
    deleteAddress: (data)=>fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_0__/* .constant.api_url */ .a.api_url}/api/address/delete`, {
            body: JSON.stringify({
                id: data.id
            }),
            method: "POST",
            mode: "cors",
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
        }),
    fetchGoods: (data)=>{
        ////////console.log("123");
        return fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_0__/* .constant.api_url */ .a.api_url}/api/flowers/index?keyword=${data.keyword}&flower_category_id=${data.flower_category_id}&listRows=${data.listRows}&page=${data.page}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "GET,POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
        });
    },
    fetchOrderDetail: async (data)=>{
        return await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_0__/* .constant.api_url */ .a.api_url}/api/order/detail?order_id=${data.id}`, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "GET,POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
        });
    },
    updateUserMessage: async (data)=>{
        return await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_0__/* .constant.api_url */ .a.api_url}/api/User/changeUserInfo`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Authorization": `Bearer ${data.cookie}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "GET,POST",
                "Access-Control-Request-Headers": "Content-Type"
            }
        });
    }
});


/***/ })

};
;