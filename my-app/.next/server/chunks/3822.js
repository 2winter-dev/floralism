"use strict";
exports.id = 3822;
exports.ids = [3822];
exports.modules = {

/***/ 3822:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AddressPannel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6027);
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var _m_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5829);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_5__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function AddressPannel(props) {
    // //////////console.log(props);
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [address, setAddress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [mobile, setMobile] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        setUsername(props.type ? props.item.name : "");
        setAddress(props.type ? props.item.location : "");
        setMobile(props.type ? props.item.mobile : "");
    }, [
        props.type
    ]);
    const addAddress = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)({
        mutationKey: [
            "addAddress"
        ],
        mutationFn: async (data)=>await _m_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].addAddress */ .Z.addAddress(data)
    });
    const updateAddress = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)({
        mutationKey: [
            "updateAddress"
        ],
        mutationFn: (data)=>_m_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].updateAddress */ .Z.updateAddress(data)
    });
    const submit = ()=>{
        if (!props.type) {
            addAddress.mutate({
                username: username.trim(),
                address: address.trim(),
                mobile: mobile.trim(),
                cookie: js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].get("token")
            }, {
                onSuccess: async (res)=>{
                    // //////////console.log(res);
                    let _res = await res.json();
                    if (_res.code === 401) {
                        js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].remove("token");
                        location.reload();
                    } else if (_res.code === 1) {
                        alert(_res.msg);
                        location.reload();
                    } else {
                        alert(_res.msg);
                    }
                },
                onError: (res)=>{
                // //////////console.log("error");
                }
            });
        } else {
            updateAddress.mutate({
                id,
                username: username.trim(),
                address: address.trim(),
                mobile: mobile.trim(),
                cookie: js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].get("token")
            }, {
                onSuccess: async (res)=>{
                    let _res = await res.json();
                    if (_res.code === 401) {
                        js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].remove("token");
                        location.reload();
                    } else if (_res.code === 1) {
                        alert(_res.msg);
                        location.reload();
                    } else {
                        alert(_res.msg);
                    }
                },
                onError: (res)=>{
                // //////////console.log(res);
                }
            });
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Modal, {
        open: props.visible,
        onClose: ()=>{
            props.close();
        },
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().address_layout),
        // style={{width:'70%'}}
        width: "80%",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_1__.Modal.Body, {
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().login_total),
                style: {},
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "",
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                width: "100%",
                                cursor: "pointer",
                                alignItems: "flex-end",
                                display: "flex",
                                justifyContent: "flex-end"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                onClick: ()=>{
                                    props.close();
                                },
                                style: {
                                    color: "white"
                                },
                                className: "iconfont",
                                children: ""
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                marginTop: "1.5%"
                            },
                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().login_pannel),
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginTop: "0.5%"
                                    },
                                    children: !props.type ? "添加地址" : "修改地址"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginTop: "5%"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        placeholder: "收件人",
                                        value: username,
                                        onChange: (e)=>setUsername(e.target.value.trim()),
                                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().account_input)
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginTop: "5%"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        placeholder: "地址",
                                        value: address,
                                        onChange: (e)=>setAddress(e.target.value.trim()),
                                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().account_input)
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginTop: "5%"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        placeholder: "電話",
                                        value: mobile,
                                        onChange: (e)=>setMobile(e.target.value.trim()),
                                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().account_input)
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    style: {
                                        marginTop: "5%"
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "button",
                                        onClick: submit,
                                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().submit_button),
                                        value: "提交"
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        })
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;