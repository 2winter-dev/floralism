"use strict";
exports.id = 978;
exports.ids = [978];
exports.modules = {

/***/ 978:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LoginPannel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6027);
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var _m_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5829);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9915);
/* harmony import */ var _zustand__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1272);
/* harmony import */ var _ResgisterPannel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1116);
/* harmony import */ var _ForgetPassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2852);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_5__, _zustand__WEBPACK_IMPORTED_MODULE_6__, _ResgisterPannel__WEBPACK_IMPORTED_MODULE_7__, _ForgetPassword__WEBPACK_IMPORTED_MODULE_8__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_5__, _zustand__WEBPACK_IMPORTED_MODULE_6__, _ResgisterPannel__WEBPACK_IMPORTED_MODULE_7__, _ForgetPassword__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);










function LoginPannel(props) {
    // ////////////console.log(window.innerHeight)
    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0); //0為密碼登錄，1為驗證碼登錄
    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""); //密碼與code
    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [mtype, setMType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("login");
    // const setUser=useBearStore((state)=>state.setUser);
    // const setToken=useBearStore((state)=>state.setToken)
    // const [token,setToken]=useState(localStorage.getItem('token'))
    const sendEmail = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)({
        mutationFn: (data)=>_m_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].sendEmail */ .Z.sendEmail(data),
        mutationKey: [
            "sendEmailByLogin"
        ]
    });
    const loginByEmail = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)({
        // mutationFn:(data)=>m_api
        mutationFn: (data)=>_m_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].loginByCode */ .Z.loginByCode(data),
        mutationKey: [
            "loginByEmail"
        ]
    });
    const loginByPassword = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)({
        // mutationFn:(data)=>m_api
        mutationFn: (data)=>_m_api__WEBPACK_IMPORTED_MODULE_4__/* ["default"].loginByPassword */ .Z.loginByPassword(data),
        mutationKey: [
            "loginByPassword"
        ]
    });
    const getEmailCode = ()=>{
        if (!email.trim()) {
            alert("請填寫郵箱以獲取驗證碼");
            return;
        }
        sendEmail.mutate({
            email: email.trim(),
            event: "emaillogin"
        }, {
            onSuccess: async (res)=>{
                let isSuccess = await res.json();
                if (isSuccess.data) {
                    alert("發送驗證碼成功，請到填寫的郵箱内查看驗證碼");
                } else {
                    alert(isSuccess.msg);
                }
            },
            onError: (res)=>{
                ////////////console.log(res);
                alert("發送驗證碼失敗");
            }
        });
        setTime(60);
        setFlag(true);
    };
    const _submit = ()=>{
        if (!type) {
            loginByPassword.mutate({
                email: email.trim(),
                password: code.trim()
            }, {
                onSuccess: async (res)=>{
                    let isSuccess = await res.json();
                    // ////////////console.log(await res.json());
                    if (isSuccess.code) {
                        // //////////console.log("================");
                        // //////////console.log();
                        js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].set("token", isSuccess.data.token, {
                            expires: 1
                        });
                        // Cookies.set('user',JSON.stringify(isSuccess.data.userinfo),{expires:1});
                        // alert("登陆成功");
                        props.close();
                        // props.hasLogin();
                        location.reload();
                    //token:res.data.token;
                    //userinfo:res.data.userinfo
                    } else {
                        alert(isSuccess.msg);
                    }
                },
                onError: (err)=>{
                    alert("登陸失敗");
                }
            });
        } else {
            loginByEmail.mutate({
                email: email.trim(),
                code: code.trim()
            }, {
                onSuccess: async (res)=>{
                    let body = await res.json();
                    ////////////console.log("====123====")
                    ////////////console.log(body)
                    if (body.code) {
                        // //////////console.log("================");
                        js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].set("token", body.data.token, {
                            expires: 1
                        });
                        // Cookies.set('user',JSON.stringify(body.data.userinfo),{expires:1});
                        // //////////console.log("========");
                        // //////////console.log(Cookies.get('token'));
                        // alert("登陸成功");
                        props.close();
                        // props.hasLogin();
                        location.reload();
                    //token:res.data.token;
                    //userinfo:res.data.userinfo
                    // localStorage.setItem("token",body.data.token);
                    } else {
                        alert(body.msg);
                    }
                },
                onError: (err)=>{
                    alert("登陸失敗");
                }
            });
        }
    };
    if (time) {
        setTimeout(()=>{
            setTime(time - 1);
        }, 1000);
    }
    const clientW = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1200);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        clientW[1](window.innerWidth);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Modal, {
        open: props.login,
        onClose: ()=>{
            props.close();
            setType(0);
            setMType("login");
        },
        className: mtype === "register" ? (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().register_layout) : mtype === "forget" ? (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().login_layout) : (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().login_layout),
        // style={{width:'70%'}}
        width: clientW[0] > 1100 ? "50%" : "90%",
        children: [
            mtype === "login" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().login_total),
                    style: {
                        fontSize: "0.9rem"
                    },
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
                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().login_pannel),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            fontSize: 24,
                                            letterSpacing: 1
                                        },
                                        children: "Welcome"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            marginTop: "0.5%"
                                        },
                                        children: "你好，欢迎登陆！"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            marginTop: "5%"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "text",
                                            placeholder: "電郵/賬戶",
                                            value: email,
                                            onChange: (e)=>setEmail(e.target.value.trim()),
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().account_input)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            marginTop: "5%"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "password",
                                            placeholder: "密码",
                                            value: code,
                                            onChange: (e)=>setCode(e.target.value.trim()),
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().account_input)
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            marginTop: "2.5%",
                                            paddingLeft: "3%"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>setMType("forget"),
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().forget_password),
                                            children: "忘记密码？"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            marginTop: "2.5%"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "button",
                                            onClick: _submit,
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().submit_button),
                                            value: "登錄"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            marginTop: "5%",
                                            paddingLeft: "3%",
                                            display: "flex"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                onClick: ()=>{
                                                    setMType("register");
                                                    setType(0);
                                                },
                                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().to_register),
                                                children: "前往注冊"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>{
                                                    setType(1);
                                                    setCode("");
                                                    setEmail("");
                                                },
                                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().changebtn),
                                                children: "使用驗證碼登錄"
                                            })
                                        ]
                                    })
                                ]
                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    marginTop: "1.5%"
                                },
                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().login_pannel),
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            fontSize: 24,
                                            letterSpacing: 1
                                        },
                                        children: "Welcome"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            marginTop: "0.5%"
                                        },
                                        children: "你好，欢迎登陆！"
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
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().account_input)
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
                                                    onChange: (e)=>setCode(e.target.value),
                                                    style: {
                                                        flex: 1,
                                                        marginRight: 24
                                                    },
                                                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().account_input)
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().send_btn),
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
                                            marginTop: "2.5%",
                                            paddingLeft: "3%"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: ()=>setMType("forget"),
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().forget_password),
                                            children: "忘记密码？"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            marginTop: "2.5%"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                            type: "button",
                                            onClick: _submit,
                                            className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().submit_button),
                                            style: {
                                                fontSize: 18
                                            },
                                            value: "登錄"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            marginTop: "5%",
                                            paddingLeft: "3%",
                                            display: "flex"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                onClick: ()=>{
                                                    setMType("register");
                                                    setType(0);
                                                },
                                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().to_register),
                                                children: "前往注冊"
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>{
                                                    setType(0);
                                                    setCode("");
                                                    setEmail("");
                                                },
                                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_9___default().changebtn),
                                                children: "使用密碼登錄"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            mtype === "register" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ResgisterPannel__WEBPACK_IMPORTED_MODULE_7__["default"], {
                    toLogin: ()=>setMType("login")
                })
            }),
            mtype === "forget" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__.Modal.Body, {
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ForgetPassword__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    toLogin: ()=>setMType("login")
                })
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1272:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var zustand__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6912);
/* harmony import */ var zustand_middleware__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3602);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zustand__WEBPACK_IMPORTED_MODULE_0__, zustand_middleware__WEBPACK_IMPORTED_MODULE_1__]);
([zustand__WEBPACK_IMPORTED_MODULE_0__, zustand_middleware__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const useBearStore = (0,zustand__WEBPACK_IMPORTED_MODULE_0__["default"])((0,zustand_middleware__WEBPACK_IMPORTED_MODULE_1__.persist)((set, get)=>({
        user: {},
        token: "",
        setUser: (user)=>{
            set((state)=>({
                    user: user
                }));
        },
        setToken: (token)=>{
            set((state)=>({
                    token: token
                }));
        }
    }), {
    name: "user"
}));
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (useBearStore)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;