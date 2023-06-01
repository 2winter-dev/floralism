(() => {
var exports = {};
exports.id = 7115;
exports.ids = [7115,8693,839,7720,8968,6163,1577,9925];
exports.modules = {

/***/ 3788:
/***/ ((module) => {

// Exports
module.exports = {
	"total_layout": "selectMethod_total_layout__jWCKi",
	"check": "selectMethod_check__2_Y3Z",
	"new_Step": "selectMethod_new_Step__2JEVB",
	"title": "selectMethod_title__qW2SN",
	"title_area": "selectMethod_title_area__wBCs2",
	"uncheck": "selectMethod_uncheck__BsTHq",
	"wrong": "selectMethod_wrong__24Mp0",
	"complete": "selectMethod_complete__aujPQ",
	"processing": "selectMethod_processing__0dx4e",
	"selectPayment": "selectMethod_selectPayment__Ey7Mr",
	"shopItem": "selectMethod_shopItem__KYwY0",
	"addressItem": "selectMethod_addressItem__Hll2N",
	"addressItemDetail": "selectMethod_addressItemDetail__USffv",
	"rightContain": "selectMethod_rightContain__SMlUg",
	"column_control": "selectMethod_column_control__yx9o5"
};


/***/ }),

/***/ 2629:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ User),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6991);
/* harmony import */ var _component_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7602);
/* harmony import */ var _styles_user_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(8304);
/* harmony import */ var _styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8464);
/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3409);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(3788);
/* harmony import */ var _styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _component_Dynamic__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(8932);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9752);
/* harmony import */ var _m_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(5829);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _component_addressPannel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3822);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9915);
/* harmony import */ var _component_LoginPannel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(978);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_Header__WEBPACK_IMPORTED_MODULE_1__, _component_Dynamic__WEBPACK_IMPORTED_MODULE_7__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__, _component_addressPannel__WEBPACK_IMPORTED_MODULE_11__, js_cookie__WEBPACK_IMPORTED_MODULE_12__, _component_LoginPannel__WEBPACK_IMPORTED_MODULE_13__]);
([_component_Header__WEBPACK_IMPORTED_MODULE_1__, _component_Dynamic__WEBPACK_IMPORTED_MODULE_7__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__, _component_addressPannel__WEBPACK_IMPORTED_MODULE_11__, js_cookie__WEBPACK_IMPORTED_MODULE_12__, _component_LoginPannel__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function User(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_10__.useRouter)();
    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)("message");
    const [item, setItem] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)({});
    const [username, setUsername] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(props.user_data?.username);
    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(props.user_data?.email);
    const [mobile, setMobile] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(props.user_data?.mobile);
    const [addList, setAddList] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(props.addList);
    const [add, setAdd] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    const [add_type, setAdd_type] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    const [add_vis, setAdd_vis] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [login, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(false);
    const [orderList, setOrderList] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)(props.orderList);
    const [orderDetail, setOrderDetail] = (0,react__WEBPACK_IMPORTED_MODULE_5__.useState)();
    const setDefault = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation)({
        mutationKey: [
            "setDefault"
        ],
        mutationFn: (data)=>_m_api__WEBPACK_IMPORTED_MODULE_9__/* ["default"].setDefaultAddress */ .Z.setDefaultAddress(data)
    });
    const deleteAddress = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation)({
        mutationFn: (data)=>_m_api__WEBPACK_IMPORTED_MODULE_9__/* ["default"].deleteAddress */ .Z.deleteAddress(data),
        mutationKey: [
            "deleteAddress"
        ]
    });
    const fetchOrderDetail = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation)({
        mutationFn: (data)=>_m_api__WEBPACK_IMPORTED_MODULE_9__/* ["default"].fetchOrderDetail */ .Z.fetchOrderDetail(data),
        mutationKey: [
            "fetchOrderDetail"
        ]
    });
    const updateUserMess = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_8__.useMutation)({
        mutationFn: (data)=>_m_api__WEBPACK_IMPORTED_MODULE_9__/* ["default"].updateUserMessage */ .Z.updateUserMessage(data),
        mutationKey: [
            "updateUserMess"
        ]
    });
    const delAddress = (id)=>{
        let m_list = addList;
        m_list.splice(m_list.findIndex((it, index)=>item === it.id), 1);
        setAddList([
            ...m_list
        ]);
        alert("刪除成功");
    //////console.log(m_list);
    };
    const changeDefault = (id)=>{
        let m_list = addList;
        ////console.log(m_list);
        let res = m_list.map((item)=>{
            ////console.log(item);
            ////console.log(id);
            ////console.log(typeof item.id, typeof id);
            if (item.id === id) {
                item.is_default = true;
            } else {
                item.is_default = false;
            }
        });
        setAddList([
            ...m_list
        ]);
    };
    const toDelte = (item)=>{
        let res = confirm("你想要刪除這個地址嗎");
        res && deleteAddress.mutate({
            id: item,
            cookie: js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].get("token")
        }, {
            onSuccess: async (res)=>{
                let _res = await res.json();
                if (_res.code === 401) {
                    js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].remove("token");
                    location.reload();
                } else if (_res.code === 1) {
                    delAddress(item);
                } else {
                    alert(_res.msg);
                }
            },
            onError: (res)=>{
                alert("删除失败");
            }
        });
    };
    const setPosition = (id)=>{
        // //////////console.log(id);
        ////console.log("123");
        setAdd(id);
        setDefault.mutate({
            id,
            cookie: js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].get("token")
        }, {
            onSuccess: async (res)=>{
                let _res = await res.json();
                if (_res.code === 401) {
                    js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].remove("token");
                    location.reload();
                } else if (_res.code === 1) {
                    changeDefault(id);
                } else {
                    alert(_res.msg);
                }
            }
        });
    };
    const updateUserMessage = ()=>{
        ////console.log(username, email, mobile);
        updateUserMess.mutate({
            username: username.trim(),
            email: email.trim(),
            mobile: mobile.trim(),
            cookie: js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].get("token")
        }, {
            onSuccess: async (res)=>{
                let _res = await res.json();
                if (_res.code === 1) {
                    location.reload();
                ////console.log(_res);
                // setUsername(_res.data?.username);
                // setMobile(_res.data?.mobile);
                // setEmail(_res.data?.email);
                }
            }
        });
    };
    const OrderDetail = (data)=>{
        fetchOrderDetail.mutate({
            id: data,
            cookie: js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].get("token")
        }, {
            onSuccess: async (res)=>{
                let _res = await res.json();
                if (_res.code === 1) {
                    //////console.log(_res.data);
                    setOrderDetail(_res.data);
                    setType("orderDetail");
                }
            //////console.log(_res);
            // //////console.log(res);
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_5__.useEffect)(()=>{
    //////console.log(orderDetail);
    }, [
        orderDetail
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            backgroundColor: "rgb(244,244,244)"
        },
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Dynamic__WEBPACK_IMPORTED_MODULE_7__["default"], {
                cateList: props.cateList,
                setLogin: setLogin
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().main_contain),
                style: {
                    marginTop: 24,
                    marginBottom: 46,
                    alignItems: "flex-start"
                },
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().left_contain),
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().left_totalPannel),
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().avatar_area),
                                    style: {
                                        display: "flex",
                                        alignItems: "center",
                                        flexDirection: "column",
                                        justifyContent: "center",
                                        padding: 16
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().avatar),
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                src: props.user_data.avatar,
                                                style: {
                                                    width: "100%"
                                                }
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                marginTop: 8,
                                                fontSize: 18,
                                                fontWeight: 700
                                            },
                                            children: username
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                marginTop: 8
                                            },
                                            children: email
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                marginTop: 8
                                            },
                                            children: mobile
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().border),
                                    onClick: ()=>setType("message"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: type === "message" ? `${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().user_btn)} ${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().choosen)}` : `${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().user_btn)}`,
                                        style: {
                                            display: "flex"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: "信息修改"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().border),
                                    onClick: ()=>setType("address"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: type === "address" ? `${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().user_btn)} ${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().choosen)}` : `${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().user_btn)}`,
                                        style: {
                                            display: "flex"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: "地址列表"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().border),
                                    onClick: ()=>setType("order"),
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: type === "order" ? `${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().user_btn)} ${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().choosen)}` : `${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().user_btn)}`,
                                        style: {
                                            display: "flex"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: "訂單列表"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().border),
                                    onClick: ()=>{
                                        let res = confirm("你確定要退出登陸嗎?");
                                        if (res) {
                                            js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].remove("token");
                                            router.replace("/");
                                        }
                                    },
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().user_btn)}`,
                                        style: {
                                            display: "flex"
                                        },
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            children: "退出登錄"
                                        })
                                    })
                                })
                            ]
                        })
                    }),
                    type !== "orderDetail" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().right_contain),
                        children: [
                            type === "message" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    width: "100%",
                                    alignItems: "flex-start",
                                    flexDirection: "column",
                                    minHeight: 500
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().right_contain_title),
                                        children: "信息修改"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().total_contain),
                                        style: {
                                            marginTop: 12,
                                            display: "flex",
                                            flexDirection: "column",
                                            alignItems: "flex-start"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().message_contain),
                                                style: {
                                                    marginTop: 24
                                                },
                                                children: [
                                                    "username ",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        onInput: (e)=>setUsername(e.target.value),
                                                        value: username,
                                                        style: {
                                                            borderRadius: 4,
                                                            outline: "none",
                                                            paddingLeft: 4,
                                                            paddingTop: 4,
                                                            paddingBottom: 4
                                                        },
                                                        type: "text"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().message_contain),
                                                style: {
                                                    marginTop: 24
                                                },
                                                children: [
                                                    "email",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        onInput: (e)=>setEmail(e.target.value),
                                                        value: email,
                                                        style: {
                                                            borderRadius: 4,
                                                            outline: "none",
                                                            paddingLeft: 4,
                                                            paddingTop: 4,
                                                            paddingBottom: 4
                                                        },
                                                        type: "text"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().message_contain),
                                                style: {
                                                    marginTop: 24
                                                },
                                                children: [
                                                    "mobile",
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                        onInput: (e)=>setMobile(e.target.value),
                                                        value: mobile,
                                                        style: {
                                                            borderRadius: 4,
                                                            outline: "none",
                                                            paddingLeft: 4,
                                                            paddingTop: 4,
                                                            paddingBottom: 4
                                                        },
                                                        type: "text"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "center",
                                                    width: "100%",
                                                    alignItems: "center"
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().submit_btn),
                                                    onClick: updateUserMessage,
                                                    style: {
                                                        cursor: "pointer"
                                                    },
                                                    children: "submit"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            type === "address" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "flex-start",
                                    flexDirection: "column",
                                    minHeight: 500
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("h5", {
                                        className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().right_contain_title),
                                        style: {
                                            display: "flex",
                                            width: "100%",
                                            justifyContent: "space-between"
                                        },
                                        children: [
                                            "地址列表",
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                onClick: ()=>{
                                                    setAdd_vis(true);
                                                    setAdd_type(0);
                                                },
                                                className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().addAddress_btn),
                                                style: {
                                                    marginRight: 14
                                                },
                                                children: "+ 添加地址"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            display: "flex",
                                            flexWrap: "wrap",
                                            width: "100%"
                                        },
                                        children: addList.length ? addList.map((item, index)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_15___default().addressItem),
                                                style: {
                                                    padding: 14,
                                                    marginRight: 10,
                                                    marginTop: 10
                                                },
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    onClick: ()=>setPosition(item.id),
                                                    className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_15___default().addressItemDetail),
                                                    style: {
                                                        paddingLeft: 4,
                                                        flex: 1
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "baseline"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    style: {
                                                                        fontSize: 18,
                                                                        fontWeight: "bold"
                                                                    },
                                                                    children: item?.name
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    style: {
                                                                        marginLeft: 10
                                                                    },
                                                                    children: "收"
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            style: {
                                                                marginTop: 8
                                                            },
                                                            children: item?.mobile
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            style: {
                                                                marginTop: 4
                                                            },
                                                            children: item?.location
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            onClick: (e)=>e.stopPropagation(),
                                                            style: {
                                                                display: "flex",
                                                                alignItems: "flex-start",
                                                                marginTop: 12,
                                                                justifyContent: "flex-end"
                                                            },
                                                            children: [
                                                                item?.is_default ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    style: {
                                                                        marginRight: 12
                                                                    },
                                                                    className: `iconfont`,
                                                                    children: ""
                                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    onClick: ()=>setPosition(item.id),
                                                                    style: {
                                                                        marginRight: 12
                                                                    },
                                                                    className: `iconfont`,
                                                                    children: ""
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    onClick: (e)=>{
                                                                        // //////////console.log("刪除");
                                                                        toDelte(item?.id);
                                                                        e.stopPropagation();
                                                                    },
                                                                    style: {
                                                                        marginRight: 12,
                                                                        fontSize: 14
                                                                    },
                                                                    className: `iconfont`,
                                                                    children: "㒲"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    onClick: (e)=>{
                                                                        setAdd_vis(true);
                                                                        setAdd_type(1);
                                                                        setItem(item);
                                                                        e.stopPropagation();
                                                                    },
                                                                    style: {
                                                                        fontSize: 15
                                                                    },
                                                                    className: `iconfont`,
                                                                    children: ""
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                })
                                            }, item.id);
                                        }) : null
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {})
                                ]
                            }),
                            type === "order" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    overflow: "auto",
                                    alignItems: "flex-start",
                                    flexDirection: "column",
                                    minHeight: 500
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                        className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().right_contain_title),
                                        children: "訂單列表"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                        style: {
                                            width: "100%",
                                            minWidth: 440,
                                            marginTop: 24,
                                            textAlign: "left"
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                    style: {
                                                        backgroundColor: "rgb(245,245,245)"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().tr_padding),
                                                            children: "訂單詳情"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().tr_padding),
                                                            width: 120,
                                                            children: "總價"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().tr_padding),
                                                            width: 100,
                                                            children: "狀態"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                            className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().tr_padding),
                                                            width: 100
                                                        })
                                                    ]
                                                })
                                            }),
                                            orderList.map((item, index)=>{
                                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                            className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().tr_padding),
                                                            style: {
                                                                height: 20
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().tr_padding),
                                                                colSpan: 4
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                            className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().tr_padding),
                                                            style: {
                                                                backgroundColor: "rgb(245,245,245)",
                                                                fontSize: 14
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                className: `${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().tr_padding)} ${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().order_desc)}`,
                                                                colSpan: 4,
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    style: {
                                                                        display: "flex"
                                                                    },
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            children: item?.create_time_format
                                                                        }),
                                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            style: {
                                                                                marginLeft: 12
                                                                            },
                                                                            children: [
                                                                                "訂單號:",
                                                                                item?.order_no
                                                                            ]
                                                                        })
                                                                    ]
                                                                })
                                                            })
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    className: `${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().tr_padding)} ${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().first_column)}`,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            wordBreak: "break-all"
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().product_img),
                                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                    src: item?.product_coverimage,
                                                                                    style: {
                                                                                        width: "100%"
                                                                                    }
                                                                                })
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                style: {
                                                                                    flex: 1
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().product_title),
                                                                                        style: {
                                                                                            fontSize: 14,
                                                                                            width: "100%",
                                                                                            overflow: "hidden",
                                                                                            textOverflow: "ellipsis",
                                                                                            whiteSpace: "nowrap"
                                                                                        },
                                                                                        children: item?.product_productname
                                                                                    }),
                                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                        children: [
                                                                                            "✖ ",
                                                                                            item?.product_num
                                                                                        ]
                                                                                    })
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("td", {
                                                                    style: {
                                                                        fontSize: 14
                                                                    },
                                                                    className: `${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().tr_padding)} ${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().second_column)}`,
                                                                    children: [
                                                                        "HD$",
                                                                        item?.amount
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    style: {
                                                                        fontSize: 14
                                                                    },
                                                                    className: `${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().tr_padding)} ${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().third_column)}`,
                                                                    children: item?.payment_status_mean
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                    style: {
                                                                        fontSize: 14
                                                                    },
                                                                    className: `${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().tr_padding)} ${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().last_column)}`,
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            alignItems: "center",
                                                                            cursor: "pointer"
                                                                        },
                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                            onClick: ()=>{
                                                                                // setType("OrderDetail");
                                                                                OrderDetail(item?.id);
                                                                            },
                                                                            className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().check_btn),
                                                                            children: item?.payment_status ? null : "查看訂單"
                                                                        })
                                                                    })
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }, index);
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    type === "orderDetail" && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().right_contain),
                        style: {
                            backgroundColor: "transparent"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().order_detail_area),
                                style: {
                                    overflow: "auto"
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        minWidth: 630,
                                        display: "flex",
                                        alignItems: "flex-start",
                                        flexDirection: "column"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().right_contain_title),
                                            children: "訂單詳情"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                            style: {
                                                marginTop: 24,
                                                width: "100%",
                                                backgroundColor: "rgb(248,249,250)",
                                                padding: 8,
                                                textAlign: "left"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                style: {
                                                                    padding: 8
                                                                },
                                                                children: "訂單編號"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                style: {
                                                                    padding: 8
                                                                },
                                                                children: "訂單日期"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                style: {
                                                                    padding: 8
                                                                },
                                                                children: "狀態"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                style: {
                                                                    padding: 8
                                                                },
                                                                children: "訂單總價"
                                                            })
                                                        ]
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tbody", {
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                style: {
                                                                    padding: 8,
                                                                    fontWeight: 400
                                                                },
                                                                children: orderDetail?.order_info?.order_no
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                style: {
                                                                    padding: 8,
                                                                    fontWeight: 400
                                                                },
                                                                children: orderDetail?.order_info?.create_time_format
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                style: {
                                                                    padding: 8,
                                                                    fontWeight: 400
                                                                },
                                                                children: orderDetail?.order_info?.payment_status_mean
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                                                style: {
                                                                    padding: 8,
                                                                    fontWeight: 400
                                                                },
                                                                children: [
                                                                    "HK$",
                                                                    orderDetail?.order_info?.amount
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().order_detail_area),
                                style: {
                                    marginTop: 24
                                },
                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    style: {
                                        display: "flex",
                                        alignItems: "flex-start",
                                        flexDirection: "column"
                                    },
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h5", {
                                            className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().right_contain_title),
                                            children: "訂單商品列表"
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                width: "100%"
                                            },
                                            children: [
                                                orderDetail.products.map((item, index)=>{
                                                    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            marginTop: 24,
                                                            wordBreak: "break-all"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().product_img),
                                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: item?.coverimage,
                                                                    style: {
                                                                        width: "100%",
                                                                        borderRadius: 8
                                                                    }
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    display: "flex",
                                                                    flexDirection: "column"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_14___default().product_title),
                                                                        style: {
                                                                            overflow: "hidden",
                                                                            textOverflow: "ellipsis",
                                                                            wordWrap: "break-word"
                                                                        },
                                                                        children: item?.productname
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        style: {
                                                                            color: "rgba(0,0,0,0.5)"
                                                                        },
                                                                        children: [
                                                                            "type:",
                                                                            item?.flower_specs_name
                                                                        ]
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    marginLeft: "auto"
                                                                },
                                                                children: [
                                                                    "HK$",
                                                                    item?.price,
                                                                    " ✖ ",
                                                                    item?.num
                                                                ]
                                                            })
                                                        ]
                                                    });
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        flexDirection: "column",
                                                        display: "flex",
                                                        fontSize: 14,
                                                        alignItems: "flex-end",
                                                        marginTop: 24
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            style: {
                                                                marginBottom: 8,
                                                                display: "flex",
                                                                width: 140
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    style: {},
                                                                    children: "總計 "
                                                                }),
                                                                ":HK$",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    style: {
                                                                        marginLeft: 3,
                                                                        color: "#d43a43"
                                                                    },
                                                                    children: " " + orderDetail.order_info.amount
                                                                })
                                                            ]
                                                        }),
                                                        orderDetail?.order_info?.shipping_pirce && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            style: {
                                                                marginBottom: 8,
                                                                display: "flex",
                                                                width: 140
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    style: {},
                                                                    children: "運費 "
                                                                }),
                                                                ":HK$",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    style: {
                                                                        marginLeft: 3,
                                                                        color: "#d43a43"
                                                                    },
                                                                    children: " " + orderDetail?.order_info?.amount
                                                                })
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            style: {
                                                                marginBottom: 8,
                                                                display: "flex",
                                                                width: 140
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    style: {},
                                                                    children: "優惠 "
                                                                }),
                                                                ":HK$",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                    style: {
                                                                        marginLeft: 3,
                                                                        color: "rgb(64,224,208)"
                                                                    },
                                                                    children: " " + orderDetail?.order_info?.coupon_price
                                                                })
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        height: 1,
                                                        width: "100%",
                                                        backgroundColor: "rgba(0,0,0,0.2)",
                                                        marginTop: 12
                                                    }
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        width: "100%",
                                                        display: "flex",
                                                        justifyContent: "flex-end",
                                                        fontSize: 14
                                                    },
                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        style: {
                                                            marginTop: 8,
                                                            display: "flex",
                                                            width: 140,
                                                            alignItems: "center"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                style: {},
                                                                children: "實付 "
                                                            }),
                                                            ":HK$",
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                style: {
                                                                    marginLeft: 3,
                                                                    fontSize: 18,
                                                                    fontWeight: 700
                                                                },
                                                                children: " " + orderDetail?.order_info?.payment_amount
                                                            })
                                                        ]
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                })
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_addressPannel__WEBPACK_IMPORTED_MODULE_11__["default"], {
                type: add_type,
                item: item,
                visible: add_vis,
                close: ()=>setAdd_vis(false)
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_LoginPannel__WEBPACK_IMPORTED_MODULE_13__["default"], {
                login: login,
                close: ()=>setLogin(false),
                toRegister: ()=>{
                    setLogin(false);
                    setRegister(true);
                },
                toForget: ()=>{
                    setLogin(false);
                    setVisible(true);
                }
            })
        ]
    });
}
async function getServerSideProps(context) {
    const response = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_4__/* .constant.api_url */ .a.api_url}/api/flowercategory/index`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "GET,POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    let data = await response.text();
    let sc;
    let res;
    let i;
    let addList, orderList;
    if (context.req.headers.cookie) {
        res = context.req.headers.cookie.split(";");
        let _res = res.filter((item)=>{
            if (item.trim().split("=")[0] === "token") return item;
        });
        if (_res.length) {
            i = _res[0].trim().split("=")[1];
        } else i = null;
    }
    if (i) {
        let sc_res = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_4__/* .constant.api_url */ .a.api_url}/api/user/index`, {
            headers: {
                Authorization: `Bearer ${i}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "GET,POST",
                "Access-Control-Request-Headers": "Content-Type"
            },
            mode: "cors"
        });
        const add_response = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_4__/* .constant.api_url */ .a.api_url}/api/address/index`, {
            headers: {
                Authorization: `Bearer ${i}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "GET,POST",
                "Access-Control-Request-Headers": "Content-Type"
            },
            mode: "cors"
        });
        const order_response = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_4__/* .constant.api_url */ .a.api_url}/api/order/index`, {
            headers: {
                Authorization: `Bearer ${i}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "GET,POST",
                "Access-Control-Request-Headers": "Content-Type"
            },
            mode: "cors"
        });
        addList = await add_response.json();
        sc = await sc_res.json();
        orderList = await order_response.json();
    //////console.log(orderList);
    // if (sc.code === 401) {
    //     sc.data = [];
    // }
    // if(addList.code===401){
    // }
    } else {
        sc = {
            data: [],
            code: 401
        };
        addList = {
            data: [],
            code: 401
        };
    }
    //    //////console.log(sc);
    return {
        props: {
            cateList: JSON.parse(data).data,
            user_data: sc.data,
            addList: addList.data,
            orderList: orderList.data
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6735:
/***/ ((module) => {

"use strict";
module.exports = require("@nextui-org/react");

/***/ }),

/***/ 252:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/cookie");

/***/ }),

/***/ 7507:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/web/spec-extension/adapters/headers.js");

/***/ }),

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 9752:
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

"use strict";
module.exports = import("js-cookie");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

"use strict";
module.exports = import("zustand");;

/***/ }),

/***/ 3602:
/***/ ((module) => {

"use strict";
module.exports = import("zustand/middleware");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5893,5152,29,1664,8464,5829,1116,2852,978,7602,6991,3822,4759], () => (__webpack_exec__(2629)));
module.exports = __webpack_exports__;

})();