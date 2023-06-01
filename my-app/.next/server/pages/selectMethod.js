(() => {
var exports = {};
exports.id = 2810;
exports.ids = [2810,8693,839,7720,6163,1577,8968,9925];
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

/***/ 5567:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ selectMethod),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _component_Dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8932);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _component_LoginPannel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(978);
/* harmony import */ var _component_ForgetPassword__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2852);
/* harmony import */ var _component_ResgisterPannel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1116);
/* harmony import */ var _component_Footer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7602);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(3409);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(3788);
/* harmony import */ var _styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _styles_user_module_css__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(8304);
/* harmony import */ var _styles_user_module_css__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _component_addressPannel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(3822);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9752);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _m_api__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(5829);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9915);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6735);
/* harmony import */ var _nextui_org_react__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_nextui_org_react__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8464);
/* harmony import */ var next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_api_utils__WEBPACK_IMPORTED_MODULE_15__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_Dynamic__WEBPACK_IMPORTED_MODULE_1__, _component_LoginPannel__WEBPACK_IMPORTED_MODULE_3__, _component_ForgetPassword__WEBPACK_IMPORTED_MODULE_4__, _component_ResgisterPannel__WEBPACK_IMPORTED_MODULE_5__, _component_addressPannel__WEBPACK_IMPORTED_MODULE_9__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__, js_cookie__WEBPACK_IMPORTED_MODULE_13__]);
([_component_Dynamic__WEBPACK_IMPORTED_MODULE_1__, _component_LoginPannel__WEBPACK_IMPORTED_MODULE_3__, _component_ForgetPassword__WEBPACK_IMPORTED_MODULE_4__, _component_ResgisterPannel__WEBPACK_IMPORTED_MODULE_5__, _component_addressPannel__WEBPACK_IMPORTED_MODULE_9__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__, js_cookie__WEBPACK_IMPORTED_MODULE_13__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


















function selectMethod(props) {
    const stripe = __webpack_require__(8174)(props.secretKey);
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_8__.useRouter)();
    // //////////console.log("000000000");
    // //////////console.log(stripe);      
    const DynamicComponentWithNoSSR = next_dynamic__WEBPACK_IMPORTED_MODULE_11___default()(null, {
        loadableGenerated: {
            modules: [
                "selectMethod/index.js -> " + "./DynamicStripe"
            ]
        },
        ssr: false
    });
    const { deliverytype , deliverydate , cart_ids , remark , amount , payment_amount  } = router.query;
    // ////console.log();
    //////console.log("----------");
    //////console.log(deliverytype);
    // //////////console.log(useRouter());
    const [login, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [register, setRegister] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [shopMess, setShopMess] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.shopList[0]);
    const [addList, setAddList] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(props.addList.data);
    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [page, setPage] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(Number(props.page) ?? 1); //第一頁:選擇地址，第二頁選擇支付方式，第三頁結果。
    const [process1, setProcess] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(1); //0尚未進行，1進行中，2完成
    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);
    const [item, setItem] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    const [add_vis, setAdd_vis] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);
    const [payment, setPayment] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [add, setAdd] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");
    const [order, setOrder] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({});
    // const 
    const setDefault = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useMutation)({
        mutationKey: [
            "setDefault"
        ],
        mutationFn: (data)=>_m_api__WEBPACK_IMPORTED_MODULE_12__/* ["default"].setDefaultAddress */ .Z.setDefaultAddress(data)
    });
    const createOrder = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useMutation)({
        mutationKey: [
            "CreateOrder"
        ],
        mutationFn: (data)=>_m_api__WEBPACK_IMPORTED_MODULE_12__/* ["default"].createOrder */ .Z.createOrder(data)
    });
    const deleteAddress = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useMutation)({
        mutationFn: (data)=>_m_api__WEBPACK_IMPORTED_MODULE_12__/* ["default"].deleteAddress */ .Z.deleteAddress(data),
        mutationKey: [
            "deleteAddress"
        ]
    });
    const toDelte = (item)=>{
        deleteAddress.mutate({
            id: item,
            cookie: js_cookie__WEBPACK_IMPORTED_MODULE_13__["default"].get("token")
        }, {
            onSuccess: async (res)=>{
                let _res = await res.json();
                if (_res.code === 401) {
                    js_cookie__WEBPACK_IMPORTED_MODULE_13__["default"].remove("token");
                    location.reload();
                } else if (_res.code === 1) {
                    location.reload();
                } else {
                    alert(_res.msg);
                }
            },
            onError: (res)=>{
                alert("删除失败");
            }
        });
    };
    const changeDefault = (id)=>{
        let m_list = addList;
        let res = m_list.map((item)=>{
            if (item.id === id) {
                item.is_default = true;
            } else item.is_default = false;
        });
        setAddList([
            ...m_list
        ]);
    };
    const setPosition = (id)=>{
        // //////////console.log(id);
        setAdd(id);
        setDefault.mutate({
            id,
            cookie: js_cookie__WEBPACK_IMPORTED_MODULE_13__["default"].get("token")
        }, {
            onSuccess: async (res)=>{
                let _res = await res.json();
                if (_res.code === 401) {
                    js_cookie__WEBPACK_IMPORTED_MODULE_13__["default"].remove("token");
                    location.reload();
                } else if (_res.code === 1) {
                    // location.reload();
                    changeDefault(id);
                } else {
                    alert(_res.msg);
                }
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
        if (props?.addList && js_cookie__WEBPACK_IMPORTED_MODULE_13__["default"].get("token")) {
            let res = props.addList?.data.filter((item)=>{
                // //////////console.log(item);
                if (item.is_default) {
                    return item;
                }
            });
            setAdd(res[0].id);
        } else {
            alert("登陸失效");
            router.replace("/");
        }
    }, []);
    ////console.log("1111----");
    ////console.log(router.query?.type === "success");
    const ToCreateOrder = ()=>{
        setFlag(true);
        if (payment !== "" && add !== "") {
            // //////////console.log(deliverytype, deliverydate, cart_ids, remark, amount, payment_amount, add)
            createOrder.mutate({
                deliverytype,
                deliverydate,
                cart_ids,
                remark,
                amount,
                payment_amount,
                address_id: add,
                payment_type: payment,
                cookie: js_cookie__WEBPACK_IMPORTED_MODULE_13__["default"].get("token")
            }, {
                onSuccess: async (res)=>{
                    let _res = await res.json();
                    if (_res.code === 401) {
                        js_cookie__WEBPACK_IMPORTED_MODULE_13__["default"].remove("token");
                        location.reload();
                    } else if (_res.code === 1) {
                        // //////////console.log(_res);
                        setFlag(false);
                        if (payment === "paypal") {
                            setUrl(_res.data.payment_info.approval_url);
                        }
                        setPage(2);
                    } else {
                        alert(_res.msg);
                    }
                },
                onError: (res)=>{
                    alert("上傳失敗");
                }
            });
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{
    // //////////console.log("==============");
    //  //////////console.log(createOrder.data);
    }, [
        createOrder
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Dynamic__WEBPACK_IMPORTED_MODULE_1__["default"], {
                cateList: props.cateList,
                setLogin: setLogin
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().total_layout),
                style: {
                    backgroundColor: "rgb(246,248,250)"
                },
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-around",
                                    marginLeft: "5%",
                                    marginRight: "5%"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            flex: 1
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: "選擇地址"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            flex: 1
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: "選擇支付方式"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            flex: 1
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        children: "支付結果"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            flex: 1
                                        }
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: page >= 1 ? (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().complete) : (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().wrong),
                                        style: {
                                            height: 4,
                                            flex: 1
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: page >= 2 ? (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().complete) : (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().wrong),
                                        style: {
                                            width: 20,
                                            height: 20,
                                            borderRadius: 50
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: page >= 2 ? (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().complete) : (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().wrong),
                                        style: {
                                            height: 4,
                                            flex: 1
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: page >= 3 ? (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().complete) : (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().wrong),
                                        style: {
                                            width: 20,
                                            height: 20,
                                            borderRadius: 50
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: page >= 3 ? (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().complete) : (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().wrong),
                                        style: {
                                            height: 4,
                                            flex: 1
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: page >= 3 ? (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().complete) : (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().wrong),
                                        style: {
                                            width: 20,
                                            height: 20,
                                            borderRadius: 50
                                        }
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: page >= 3 ? (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().complete) : (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().wrong),
                                        style: {
                                            height: 4,
                                            flex: 1
                                        }
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        style: {
                            marginTop: 24
                        },
                        children: [
                            page === 1 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().column_control),
                                style: {
                                    display: "flex",
                                    alignItems: "flex-start"
                                },
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            flex: 1,
                                            marginRight: 12,
                                            backgroundColor: "white",
                                            padding: "3%",
                                            borderRadius: 8,
                                            marginRight: 12
                                        },
                                        children: [
                                            deliverytype?.toString() === "1" ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().title_area),
                                                        style: {
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "flex-end"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().title),
                                                                children: "選擇地址"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                onClick: ()=>{
                                                                    setAdd_vis(true);
                                                                    setType(0);
                                                                },
                                                                className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_17___default().addAddress_btn),
                                                                style: {},
                                                                children: "+ 添加地址"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            display: "flex",
                                                            flexWrap: "wrap",
                                                            justifyContent: "space-between",
                                                            marginTop: 24,
                                                            maxHeight: 400,
                                                            overflow: "auto"
                                                        },
                                                        children: addList.length ? addList.map((item, index)=>{
                                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().addressItem),
                                                                style: {
                                                                    padding: 14,
                                                                    marginBottom: 12
                                                                },
                                                                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                    onClick: ()=>setPosition(item.id),
                                                                    className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().addressItemDetail),
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
                                                                                item.is_default ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
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
                                                                                        toDelte(item.id);
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
                                                        }) : props.addList.code === 401 ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            style: {
                                                                marginTop: 24,
                                                                width: "100%",
                                                                textAlign: "center"
                                                            },
                                                            children: "登錄失效，請重新登錄"
                                                        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            style: {
                                                                marginTop: 24,
                                                                width: "100%",
                                                                textAlign: "center"
                                                            },
                                                            children: "暫無數據，請先添加"
                                                        })
                                                    })
                                                ]
                                            }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().title_area),
                                                        style: {
                                                            display: "flex",
                                                            justifyContent: "space-between",
                                                            alignItems: "flex-end"
                                                        },
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().title),
                                                            children: "選擇門店地址"
                                                        })
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_14__.Radio.Group, {
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            style: {
                                                                marginTop: 12,
                                                                height: 200,
                                                                overflow: "auto"
                                                            },
                                                            children: props.shopList.map((item)=>{
                                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_14__.Radio, {
                                                                    className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().shopItem),
                                                                    value: `${item.id}`,
                                                                    children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        style: {
                                                                            display: "flex",
                                                                            flexDirection: "column",
                                                                            marginLeft: 12,
                                                                            fontSize: 12
                                                                        },
                                                                        children: [
                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                style: {
                                                                                    fontSize: 14,
                                                                                    fontWeight: 700
                                                                                },
                                                                                children: item?.storename
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                children: [
                                                                                    "地址:",
                                                                                    item?.address
                                                                                ]
                                                                            }),
                                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                children: [
                                                                                    "聯係人:",
                                                                                    item?.name,
                                                                                    " ",
                                                                                    "電話:" + item?.mobile
                                                                                ]
                                                                            })
                                                                        ]
                                                                    })
                                                                }, item.id);
                                                            })
                                                        })
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().title_area),
                                                style: {
                                                    display: "flex",
                                                    justifyContent: "space-between",
                                                    alignItems: "flex-end",
                                                    marginTop: 24
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().title),
                                                    children: "支付方式"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    marginTop: 24
                                                },
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_nextui_org_react__WEBPACK_IMPORTED_MODULE_14__.Radio.Group, {
                                                    onChange: setPayment,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().selectPayment),
                                                        style: {
                                                            padding: 8,
                                                            marginTop: 8
                                                        },
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_nextui_org_react__WEBPACK_IMPORTED_MODULE_14__.Radio, {
                                                            value: "paypal",
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/paypal.png",
                                                                    style: {
                                                                        height: 80,
                                                                        marginRight: 16,
                                                                        marginLeft: 16,
                                                                        borderRadius: 4
                                                                    }
                                                                }),
                                                                " ",
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                    style: {
                                                                        fontWeight: 700,
                                                                        fontSize: 16
                                                                    },
                                                                    children: "使用paypal 支付"
                                                                })
                                                            ]
                                                        })
                                                    })
                                                })
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().rightContain),
                                        style: {
                                            backgroundColor: "white",
                                            padding: "3%",
                                            borderRadius: 8
                                        },
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().title_area),
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().title),
                                                    children: "訂單商品"
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().title_area),
                                                children: props.goodsList && props.goodsList.map((item, index)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        style: {
                                                            display: "flex",
                                                            alignItems: "center",
                                                            marginTop: 24
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                src: item.coverimage,
                                                                style: {
                                                                    width: "30%",
                                                                    marginRight: 12
                                                                }
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    flex: 1
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        style: {
                                                                            fontSize: 18,
                                                                            height: 40,
                                                                            width: "100%",
                                                                            overflow: "hidden",
                                                                            textOverflow: "ellipsis",
                                                                            whiteSpace: "nowrap"
                                                                        },
                                                                        children: item.productname
                                                                    }),
                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                        style: {
                                                                            fontSize: 12,
                                                                            overflow: "hidden",
                                                                            textOverflow: "ellipsis",
                                                                            whiteSpace: "nowrap"
                                                                        },
                                                                        children: item.cardtype ? "需要心意卡" : "無需心意卡"
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    textAlign: "right"
                                                                },
                                                                children: [
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        style: {
                                                                            fontSize: 12
                                                                        },
                                                                        children: [
                                                                            "$",
                                                                            item.price
                                                                        ]
                                                                    }),
                                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                        children: [
                                                                            "\xd7",
                                                                            item.num
                                                                        ]
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    }, item.id))
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().title_area),
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        style: {
                                                            marginTop: 8,
                                                            display: "flex",
                                                            flexDirection: "row",
                                                            justifyContent: "space-between"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: "商品總價"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    "$",
                                                                    amount
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        style: {
                                                            marginTop: 8,
                                                            display: "flex",
                                                            flexDirection: "row",
                                                            justifyContent: "space-between"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                children: "應付價格:"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                children: [
                                                                    "$",
                                                                    payment_amount
                                                                ]
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                        style: {
                                                            marginTop: 8,
                                                            display: "flex",
                                                            flexDirection: "row",
                                                            justifyContent: "space-between"
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                style: {
                                                                    fontWeight: 700,
                                                                    fontSize: 18
                                                                },
                                                                children: "總價:"
                                                            }),
                                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                style: {
                                                                    color: "#dc3545",
                                                                    fontWeight: 700,
                                                                    fontSize: 18
                                                                },
                                                                children: [
                                                                    "HK$",
                                                                    payment_amount
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                style: {
                                                    display: "flex",
                                                    marginTop: 12,
                                                    alignItems: "center",
                                                    justifyContent: "center"
                                                },
                                                children: flag ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().new_Step),
                                                    style: {
                                                        backgroundColor: "rgba(0,0,0,0.4)"
                                                    },
                                                    children: "確認訂單"
                                                }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    onClick: ()=>ToCreateOrder(),
                                                    className: (_styles_selectMethod_module_css__WEBPACK_IMPORTED_MODULE_16___default().new_Step),
                                                    children: "確認訂單"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            page === 2 && (payment === "stripe" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicComponentWithNoSSR, {}) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    textAlign: "center",
                                    padding: "5%",
                                    borderRadius: 8,
                                    backgroundColor: "white"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            fontSize: 24,
                                            fontWeight: 700
                                        },
                                        children: "訂單創建成功，請支付"
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            textAlign: "center",
                                            marginTop: 12,
                                            marginBottom: 12,
                                            display: "flex",
                                            flexWrap: "wrap",
                                            justifyContent: "space-between",
                                            padding: 16,
                                            backgroundColor: "rgb(255,250,240)"
                                        },
                                        children: [
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    flex: 1,
                                                    alignItems: "baseline"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: "支付方式:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            fontSize: 17,
                                                            fontWeight: 600
                                                        },
                                                        children: "paypal"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    flex: 1,
                                                    alignItems: "baseline"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: "總價:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            fontSize: 17,
                                                            fontWeight: 600
                                                        },
                                                        children: "HK$123"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                style: {
                                                    display: "flex",
                                                    flex: 1,
                                                    alignItems: "baseline"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        children: "狀態:"
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {
                                                            fontSize: 17,
                                                            fontWeight: 600
                                                        },
                                                        children: "等待支付"
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        style: {
                                            paddingLeft: 24,
                                            paddingRight: 24,
                                            paddingTop: 6,
                                            paddingBottom: 6,
                                            cursor: "pointer",
                                            marginTop: 12,
                                            // background: 'rgb(255,196,57)',
                                            borderRadius: 4
                                        },
                                        onClick: ()=>router.replace(`${url}`),
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                className: `iconfont`,
                                                children: ""
                                            }),
                                            "點此前往支付"
                                        ]
                                    })
                                ]
                            })),
                            page === 3 && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                style: {
                                    width: "100%",
                                    height: 200,
                                    display: "flex",
                                    flexDirection: "column",
                                    justifyContent: "center",
                                    alignItems: "center"
                                },
                                children: [
                                    router.query?.type === "success" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            marginTop: 24,
                                            fontSize: 28,
                                            fontWeight: 600
                                        },
                                        children: "付款成功"
                                    }) : router.query?.type === "fail" ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            marginTop: 24,
                                            fontSize: 28,
                                            fontWeight: 600
                                        },
                                        children: "付款失敗"
                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            marginTop: 24,
                                            fontSize: 28,
                                            fontWeight: 600
                                        },
                                        children: "用戶取消支付"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        style: {
                                            marginTop: 24,
                                            cursor: "pointer"
                                        },
                                        onClick: ()=>router.replace("/"),
                                        children: "返回首頁"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Footer__WEBPACK_IMPORTED_MODULE_6__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_LoginPannel__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_addressPannel__WEBPACK_IMPORTED_MODULE_9__["default"], {
                type: type,
                item: item,
                visible: add_vis,
                close: ()=>setAdd_vis(false)
            })
        ]
    });
}
async function getServerSideProps(context) {
    ////console.log(context.query.page);
    const response = await fetch(`${_constant__WEBPACK_IMPORTED_MODULE_7__/* .constant.api_url */ .a.api_url}/api/flowercategory/index`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    let data = await response.json();
    // let res;
    let s_list;
    let i, sc, res;
    let add_data;
    let goods_data;
    if (context.req.headers.cookie) {
        res = context.req.headers.cookie.split(";");
        let _res = res.filter((item)=>{
            //////////console.log(item.trim().split("=")[0]);
            if (item.trim().split("=")[0] === "token") return item;
        });
        if (_res.length) {
            i = _res[0].trim().split("=")[1];
        } else i = null;
    //    //////////console.log(_res[0].trim().split("=")[1]);
    }
    if (i) {
        //////////console.log("進來了");
        const add_response = await fetch(`${_constant__WEBPACK_IMPORTED_MODULE_7__/* .constant.api_url */ .a.api_url}/api/address/index`, {
            headers: {
                Authorization: `Bearer ${i}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            },
            mode: "cors"
        });
        const goods_list_response = await fetch(`${_constant__WEBPACK_IMPORTED_MODULE_7__/* .constant.api_url */ .a.api_url}/api/cart/detail?ids=${context.query.cart_ids}`, {
            headers: {
                Authorization: `Bearer ${i}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            },
            mode: "cors"
        });
        if (context.query.deliverytype) {
            const shopList = await fetch(`${_constant__WEBPACK_IMPORTED_MODULE_7__/* .constant.api_url */ .a.api_url}/api/store/index`, {
                headers: {
                    Authorization: `Bearer ${i}`,
                    "Content-Type": "application/json",
                    "Access-Control-Request-Method": "GET,POST",
                    "Access-Control-Request-Headers": "Content-Type"
                },
                mode: "cors"
            });
            s_list = await shopList.json();
        }
        goods_data = await goods_list_response.json();
        //////////console.log("=========");
        add_data = await add_response.json();
    } else {
        add_data = {
            data: [],
            code: 401
        };
        goods_data = {
            data: [],
            code: 401
        };
        s_list = {
            data: [],
            code: 401
        };
    }
    //////////console.log(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
    ////console.log("============");
    ////console.log(add_data);
    if (context.query.page !== "3") {
        ////console.log("不为3");
        if (!goods_data.code) {
            return {
                redirect: {
                    permanent: false,
                    destination: "/shopCar/shopCar"
                }
            };
        }
    }
    //////////console.log(add_data);
    //////console.log(s_list);
    return {
        props: {
            cateList: data.data,
            // cateList: [],
            addList: add_data,
            goodsList: goods_data.data,
            publishableKey: `${"pk_test_51MZ9eKLvi7RvipiDZ4iXhmew7HBzFPQIglOdGcTxoksq7Ccwt6acbuAvtC5wy9KO4phLEY1xuYaue3hK88GLLHgd00MkJOMczW"}`,
            secretKey: `${process.env.STRIPE_SECRET_KEY}`,
            shopList: s_list?.data ?? [],
            page: context.query.page ?? undefined
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

/***/ 5832:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/loadable.js");

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

/***/ 8174:
/***/ ((module) => {

"use strict";
module.exports = require("stripe");

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
var __webpack_exports__ = __webpack_require__.X(0, [5893,5152,8464,5829,1116,2852,978,7602,3822,4759], () => (__webpack_exec__(5567)));
module.exports = __webpack_exports__;

})();