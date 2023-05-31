"use strict";
exports.id = 2852;
exports.ids = [2852];
exports.modules = {

/***/ 2852:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ForgetPassword)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6027);
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var _m_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5829);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__]);
_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function ForgetPassword(props) {
    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [repassword, setRepassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const sendEmail = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)({
        mutationFn: (data)=>_m_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].sendEmail */ .Z.sendEmail(data),
        mutationKey: [
            "sendEmailByForgot"
        ]
    });
    const verCode = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)({
        mutationFn: (data)=>_m_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].verifyCode */ .Z.verifyCode(data),
        mutationKey: [
            "verifyCode"
        ]
    });
    const resetPassword = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)({
        mutationFn: (data)=>_m_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].resetPassword */ .Z.resetPassword(data),
        mutationKey: [
            "resetPassword"
        ]
    });
    const getEmailCode = ()=>{
        if (!email.trim()) {
            alert("請填寫郵箱以獲取驗證碼");
            return;
        }
        sendEmail.mutate({
            email: email.trim(),
            event: "resetpwd"
        }, {
            onSuccess: ()=>{
                alert("發送驗證碼成功，請到填寫的郵箱内查看驗證碼");
            },
            onError: (res)=>{
                //////////console.log(res);
                alert("發送驗證碼失敗");
            }
        });
        setTime(60);
        setFlag(true);
    };
    const reset = ()=>{
        resetPassword.mutate({
            email: email.trim(),
            password: password.trim(),
            confirmPassword: repassword.trim()
        }, {
            onSuccess: async (res)=>{
                let isSuccess = await res.json();
                if (isSuccess.code) {
                    alert("重置成功");
                    props.toLogin();
                } else {
                    alert(isSuccess.msg);
                }
            },
            onError: (res)=>{
                alert("重置失敗");
            }
        });
    };
    const verfyCode = ()=>{
        verCode.mutate({
            email: email.trim(),
            code: code.trim()
        }, {
            onSuccess: async (res)=>{
                let isSuccess = await res.json();
                if (isSuccess.code) {
                    setType(1);
                } else {
                    alert(isSuccess.msg);
                }
            },
            onError: (res)=>{
                alert("驗證失敗");
            }
        });
    };
    if (time) {
        setTimeout(()=>{
            setTime(time - 1);
        }, 1000);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().login_total),
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
                            setType(0);
                        },
                        style: {
                            color: "white"
                        },
                        className: "iconfont",
                        children: ""
                    })
                }),
                type === 0 ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        marginTop: "1.5%"
                    },
                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().login_pannel),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                letterSpacing: 2,
                                fontSize: 24
                            },
                            children: "找回密碼"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                marginTop: "5%"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                placeholder: "電郵/賬戶",
                                onChange: (e)=>setEmail(e.target.value.trim()),
                                value: email,
                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().account_input)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                marginTop: "5%"
                            },
                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                        type: "text",
                                        placeholder: "請輸入驗證碼",
                                        value: code,
                                        onChange: (e)=>setCode(e.target.value.trim()),
                                        style: {
                                            flex: 1,
                                            marginRight: 24
                                        },
                                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().account_input)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().send_btn),
                                        style: {
                                            width: "25%",
                                            textAlign: "center"
                                        },
                                        children: time ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            children: [
                                                time,
                                                "秒后重新發送"
                                            ]
                                        }) : flag ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: getEmailCode,
                                            children: "重新發送"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: getEmailCode,
                                            children: "獲取驗證碼"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                marginTop: "5%"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "button",
                                onClick: verfyCode,
                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().submit_button),
                                value: "提交"
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                marginTop: "5%",
                                paddingLeft: "3%",
                                display: "flex"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                onClick: ()=>{
                                    setType(0);
                                    setCode("");
                                    setEmail("");
                                    props.toLogin();
                                },
                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().changebtn),
                                children: "前往登錄"
                            })
                        })
                    ]
                }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {
                        marginTop: "1.5%"
                    },
                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().login_pannel),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                letterSpacing: 2,
                                fontSize: 24
                            },
                            children: "重設密碼"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                marginTop: "2.5%"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "password",
                                placeholder: "密碼",
                                value: password,
                                onChange: (e)=>setPassword(e.target.value),
                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().account_input)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                marginTop: "2.5%"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "password",
                                placeholder: "确认密碼",
                                value: repassword,
                                onChange: (e)=>setRepassword(e.target.value),
                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().account_input)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                marginTop: "2.5%"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "button",
                                onClick: reset,
                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_5___default().submit_button),
                                value: "提交"
                            })
                        })
                    ]
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