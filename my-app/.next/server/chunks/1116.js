exports.id = 1116;
exports.ids = [1116];
exports.modules = {

/***/ 6027:
/***/ ((module) => {

// Exports
module.exports = {
	"register_total": "login_register_total__0tDXn",
	"login_total": "login_login_total__lm3Ff",
	"address_layout": "login_address_layout__t9jHI",
	"login_layout": "login_login_layout__7VdzG",
	"register_layout": "login_register_layout__iMTWw",
	"login_pannel": "login_login_pannel__r20UK",
	"account_input": "login_account_input__lnLIx",
	"forget_password": "login_forget_password__vPv79",
	"submit_button": "login_submit_button__J_G_N",
	"to_register": "login_to_register__IQmmJ",
	"to_login": "login_to_login___ttPg",
	"register_btn": "login_register_btn___U_95",
	"send_btn": "login_send_btn__O1cLJ",
	"changebtn": "login_changebtn__rsIPs"
};


/***/ }),

/***/ 1116:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ RegisterPannerl)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6027);
/* harmony import */ var _styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9752);
/* harmony import */ var _m_api_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5829);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9915);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_5__]);
([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__, js_cookie__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







function RegisterPannerl(props) {
    const [isEmail, setIsEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.type);
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [mobile, setMobile] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [code, setCode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [password, setPassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [repassword, setRepassword] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [time, setTime] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // useMutation
    const sendEmail = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)({
        mutationFn: (data)=>_m_api_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"].sendEmail */ .Z.sendEmail(data),
        mutationKey: [
            "sendEmailByRegister"
        ]
    });
    const register = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_3__.useMutation)({
        mutationKey: [
            "register"
        ],
        mutationFn: (data)=>_m_api_index__WEBPACK_IMPORTED_MODULE_4__/* ["default"].register */ .Z.register(data)
    });
    const getEmailCode = ()=>{
        if (!email.trim()) {
            alert("請填寫郵箱以獲取驗證碼");
            return;
        }
        sendEmail.mutate({
            email: email.trim(),
            type: "register"
        }, {
            onSuccess: async (res)=>{
                let isSuccess = await res.json();
                if (isSuccess.code) {
                    alert("發送驗證碼成功，請到填寫的郵箱内查看驗證碼");
                } else {
                    alert(isSuccess.msg);
                }
            },
            onError: ()=>alert("發送驗證碼失敗")
        });
        setTime(60);
        setFlag(true);
    };
    const _submit = ()=>{
        if (!username.trim()) {
            alert("請填寫姓名");
            return;
        }
        if (!mobile.trim()) {
            alert("請填寫手機號碼");
            return;
        }
        if (!password.trim()) {
            alert("請填寫密碼");
            return;
        }
        if (password.trim() !== repassword.trim()) {
            alert("兩次輸入的密碼不同，請保證一致");
            return;
        }
        if (!code) {
            alert("請填寫收到的驗證碼");
            return;
        }
        register.mutate({
            email: email.trim(),
            code: code.trim(),
            password: password.trim(),
            mobile: mobile.trim(),
            username: username.trim()
        }, {
            onSuccess: async (res)=>{
                let isSuccess = await res.json();
                //////////console.log(res);
                if (isSuccess.code === 1) {
                    props.close();
                    js_cookie__WEBPACK_IMPORTED_MODULE_5__["default"].set("token", isSuccess.data.token, {
                        expires: 1
                    });
                    // Cookies.set('user', JSON.stringify(isSuccess.data.userinfo), { expires: 1 });
                    alert("注冊成功");
                    // props.hasLogin();
                    location.reload();
                // localStorage.setItem("token",res.data.token);
                } else {
                    alert(isSuccess.msg);
                }
            },
            onError: (res)=>{
                //////////console.log(res);
                alert("注冊失敗");
            }
        });
    };
    if (time) {
        setTimeout(()=>{
            setTime(time - 1);
        }, 1000);
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().register_total),
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
                        onClick: props.close,
                        style: {
                            color: "white"
                        },
                        className: "iconfont",
                        children: ""
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    style: {},
                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().login_pannel),
                    children: [
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                letterSpacing: 2,
                                fontSize: 24
                            },
                            children: "建立賬戶"
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                marginTop: "2.5%"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                placeholder: "姓名",
                                value: username,
                                onChange: (e)=>setUsername(e.target.value),
                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().account_input)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                marginTop: "2.5%"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                placeholder: "電話",
                                value: mobile,
                                onChange: (e)=>setMobile(e.target.value),
                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().account_input)
                            })
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
                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().account_input)
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
                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().account_input)
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                marginTop: "2.5%",
                                width: "100%"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                placeholder: "郵箱",
                                className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().account_input),
                                value: email,
                                onChange: (event)=>{
                                    setEmail(event.target.value);
                                //////////console.log(event)
                                }
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                marginTop: "2.5%"
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
                                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().account_input)
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().send_btn),
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
                                            children: "重新發送"
                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            onClick: getEmailCode,
                                            children: "獲取驗證碼"
                                        })
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                marginTop: "2.5%"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                    type: "button",
                                    style: {
                                        marginRight: 12
                                    },
                                    onClick: _submit,
                                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().register_btn),
                                    value: "建立"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    onClick: props.toLogin,
                                    className: (_styles_login_module_css__WEBPACK_IMPORTED_MODULE_6___default().to_login),
                                    children: "前往登錄"
                                })
                            ]
                        })
                    ]
                })
            ]
        })
    });
// return (<div className={style.register_total} style={{}}>
//     <div className={style.register_layout} style={{ height: window.innerHeight * 0.6, width: window.innerWidth * 0.7 }}>
//         <div style={{ width: "100%", cursor: 'pointer', alignItems: 'flex-end', display: 'flex', justifyContent: 'flex-end' }}>
//             <span onClick={props.close} style={{ color: 'white' }} className="iconfont" >&#xe641;</span>
//         </div>
//         <div style={{}} className={style.login_pannel}>
//             <div style={{ letterSpacing: 2, fontSize: 24 }}>建立賬戶</div>
//             <div style={{ marginTop: '2.5%' }}>
//                 <input type='text' placeholder='姓名' className={style.account_input}></input>
//             </div>
//             <div style={{ marginTop: '2.5%' }}>
//                 <input type='password' placeholder='電話' className={style.account_input}></input>
//             </div>
//             <div style={{ marginTop: '2.5%' }}>
//                 <input type='text' placeholder='電郵/賬戶' className={style.account_input}></input>
//             </div>
//             <div style={{ marginTop: '2.5%' }}>
//                 <input type='text' placeholder='密碼' className={style.account_input}></input>
//             </div>
//             <div style={{ marginTop: '2.5%' }}>
//                 <input type='button' style={{ marginRight: 12 }} className={style.register_btn} value="建立"></input>
//                 <a onClick={props.toLogin} className={style.to_login}>前往登錄</a>
//             </div>
//         </div>
//     </div>
// </div>)
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;