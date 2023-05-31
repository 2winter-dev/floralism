"use strict";
(() => {
var exports = {};
exports.id = 4291;
exports.ids = [4291,8693,7720,839,8968,6163,1577,9925];
exports.modules = {

/***/ 8681:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShopCar),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(9826);
/* harmony import */ var _styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_user_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(8304);
/* harmony import */ var _styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6991);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _component_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7602);
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3409);
/* harmony import */ var _component_LoginPannel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(978);
/* harmony import */ var _component_ResgisterPannel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1116);
/* harmony import */ var _component_ForgetPassword__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(2852);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(9915);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(9752);
/* harmony import */ var _m_api__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(5829);
/* harmony import */ var _component_Dynamic__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(8932);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_Header__WEBPACK_IMPORTED_MODULE_2__, _component_Footer__WEBPACK_IMPORTED_MODULE_4__, _component_LoginPannel__WEBPACK_IMPORTED_MODULE_6__, _component_ResgisterPannel__WEBPACK_IMPORTED_MODULE_7__, _component_ForgetPassword__WEBPACK_IMPORTED_MODULE_8__, js_cookie__WEBPACK_IMPORTED_MODULE_9__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__, _component_Dynamic__WEBPACK_IMPORTED_MODULE_12__]);
([_component_Header__WEBPACK_IMPORTED_MODULE_2__, _component_Footer__WEBPACK_IMPORTED_MODULE_4__, _component_LoginPannel__WEBPACK_IMPORTED_MODULE_6__, _component_ResgisterPannel__WEBPACK_IMPORTED_MODULE_7__, _component_ForgetPassword__WEBPACK_IMPORTED_MODULE_8__, js_cookie__WEBPACK_IMPORTED_MODULE_9__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__, _component_Dynamic__WEBPACK_IMPORTED_MODULE_12__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);
















function ShopCar({ cateList , shopCar  }) {
    // //////////console.log(Cookies.get('token'));
    // //////////console.log("============");
    // //////////console.log(shopCar.data);
    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [selAll, setSelAll] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [sc, setSc] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(shopCar.data);
    const [login, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [register, setRegister] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [total_money, setTotal_money] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [total_num, setTotal_num] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [textArea, setTextArea] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [type, setType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [date, setDate] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    // if (shopCar.code === 401) {
    //    Cookies.remove('token');
    // }
    const updateNum = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useMutation)({
        mutationFn: (data)=>_m_api__WEBPACK_IMPORTED_MODULE_11__/* ["default"].changeShopCarNumber */ .Z.changeShopCarNumber(data),
        mutationKey: [
            "updateNumber"
        ]
    });
    const ToUpdate = (item, index, value)=>{
        //////console.log(value);
        if (value <= 0) {
            alert("不能少於1");
            return;
        }
        updateNum.mutate({
            id: item.id,
            num: value,
            cookie: js_cookie__WEBPACK_IMPORTED_MODULE_9__["default"].get("token")
        }, {
            onSuccess: async (res)=>{
                let _res = await res.json();
                if (_res.code === 401) {
                    js_cookie__WEBPACK_IMPORTED_MODULE_9__["default"].remove("token");
                    location.reload();
                } else if (_res.code === 1) {
                    let arr = sc;
                    arr[index].num = value;
                    setSc([
                        ...arr
                    ]);
                } else {
                    alert(_res.msg);
                }
            },
            onError: (res)=>{
                alert("修改失敗");
            }
        });
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (js_cookie__WEBPACK_IMPORTED_MODULE_9__["default"].get("token")) {
        // location.reload();
        }
    }, [
        login
    ]);
    const hasLogin = ()=>{
        setFlag(true);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (flag) {
            location.reload();
        }
    }, [
        flag
    ]);
    let deleteProductionFromShopCar = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_10__.useMutation)({
        mutationFn: (data)=>_m_api__WEBPACK_IMPORTED_MODULE_11__/* ["default"].deleteProductionFromShopCar */ .Z.deleteProductionFromShopCar(data),
        mutationKey: [
            "deleteProductionFromShopCar"
        ]
    });
    const changeStatus = (data)=>{
        let arr = selected;
        let money = total_money;
        let res = selected.findIndex((item, index)=>item === data.id);
        if (res === -1) {
            //////////console.log("未被选中，选中");
            setSelected([
                ...arr,
                data.id
            ]);
            money += data.num * data.price;
            if (arr.length + 1 === sc.length) {
                setSelAll(true);
            }
        } else {
            //////////console.log("已被选中，取消,位置:" + res);
            let _res = arr.splice(res, 1);
            //////////console.log(_res, arr);
            money -= data.num * data.price;
            setSelected([
                ...arr
            ]);
            setSelAll(false);
        }
    //////////console.log(arr.length, sc.length);
    // culTotalPrice();
    };
    const deleteProduct = ()=>{
        //////////console.log(selected);
        deleteProductionFromShopCar.mutate({
            ids: selected.join(","),
            cookie: js_cookie__WEBPACK_IMPORTED_MODULE_9__["default"].get("token")
        }, {
            onSuccess: async (res)=>{
                // //////////console.log(await res.text())
                let _res = await res.json();
                //////////console.log(_res);
                if (_res.code === 1) {
                    let arr = sc;
                    selected.map((item)=>{
                        arr.splice(sc.findIndex((it, index)=>item === it.id), 1);
                    });
                    setSc([
                        ...arr
                    ]);
                    setSelected([]);
                    alert(_res.msg);
                } else if (_res.code === 401) {
                    js_cookie__WEBPACK_IMPORTED_MODULE_9__["default"].remove("token");
                } else if (!_res.code) {
                    alert(_res.msg);
                }
            // let _res=JSON.parse(res)
            // //////////console.log(_res);
            // culTotalPrice();
            },
            onError: (res)=>{
                alert("删除失败");
            }
        });
    };
    const selectedAll = ()=>{
        if (selAll) {
            setSelAll(false);
            setSelected([]);
        } else {
            let m = 0;
            let res = sc.map((item, index)=>{
                m += item.num * item.price;
                return item.id;
            });
            setSelAll(true);
            setSelected([
                ...res
            ]);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        let money = 0;
        let num = 0;
        sc.map((item, index)=>{
            if (selected.findIndex((it, index)=>it === item.id) != -1) {
                money += parseFloat((item?.num * item?.price).toFixed(2));
                //////console.log(money)
                num += parseInt(item.num);
            }
        });
        !sc.length && setSelAll(false);
        setTotal_money(money.toFixed(2));
        setTotal_num(num);
    //  //////////console.log(money);
    }, [
        sc,
        selected
    ]);
    const limitTime = ()=>{
        let date = new Date();
        let year = date.getFullYear();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        //////////console.log(year + '-' + (month < 10 ? "0" + month : month) + "-" + day);
        return year + "-" + (month < 10 ? "0" + month : month) + "-" + day;
    };
    const toCreateOrder = ()=>{
        if (selected.length) {
            if (date !== "") {
                // Cookies.set("shopCar",);
                let res = selected.map((item, index)=>{
                    //////////console.log(item);
                    return sc.filter((it, index)=>{
                        //////////console.log(it);
                        if (it.id === item) {
                            return item;
                        }
                    });
                });
                // //////////console.log();
                // Cookies.set("shopCar",JSON.stringify(res.flat(1)));
                next_router__WEBPACK_IMPORTED_MODULE_13___default().replace({
                    pathname: "/selectMethod",
                    query: {
                        cart_ids: selected.join(","),
                        amount: total_money,
                        payment_amount: total_money,
                        deliverydate: date,
                        deliverytype: type,
                        remark: textArea
                    }
                });
            } else {
                alert("請選擇時間");
            }
        } else {
            alert("請選擇商品");
        }
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Dynamic__WEBPACK_IMPORTED_MODULE_12__["default"], {
                cateList: cateList,
                setLogin: ()=>{
                    setLogin(true);
                }
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: (_styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_14___default().total_container),
                style: {},
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                marginTop: 32,
                                display: "flex",
                                marginBottom: 32
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    style: {
                                        cursor: "pointer"
                                    },
                                    href: "/",
                                    children: "首頁"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_14___default().separator),
                                    style: {
                                        padding: "0 4px"
                                    },
                                    children: "/"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                    children: "我的賬單"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_14___default().mediaArea),
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "flex-start"
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_14___default().right_area),
                                    style: {},
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                width: "100%",
                                                maxHeight: 630,
                                                overflow: "auto"
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("table", {
                                                style: {
                                                    width: "100%",
                                                    minWidth: 478,
                                                    textAlign: "left"
                                                },
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("thead", {
                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                            style: {
                                                                backgroundColor: "rgb(245,245,245)"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("th", {
                                                                    className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().tr_padding),
                                                                    width: 130,
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                            type: "checkbox",
                                                                            checked: selAll,
                                                                            onChange: ()=>null,
                                                                            onClick: selectedAll,
                                                                            style: {
                                                                                width: 15,
                                                                                height: 15
                                                                            }
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            children: "全選"
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                                            onClick: deleteProduct,
                                                                            style: {
                                                                                marginLeft: 8,
                                                                                cursor: "pointer",
                                                                                color: "#d43a43"
                                                                            },
                                                                            children: "删除"
                                                                        })
                                                                    ]
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                    className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().tr_padding),
                                                                    children: "商品"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                    className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().tr_padding),
                                                                    width: 120,
                                                                    children: "總價"
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("th", {
                                                                    className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().tr_padding),
                                                                    width: 100,
                                                                    children: "優惠"
                                                                })
                                                            ]
                                                        })
                                                    }),
                                                    sc.length ? sc.map((item, index)=>{
                                                        return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tbody", {
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                                    className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().tr_padding),
                                                                    style: {
                                                                        height: 20
                                                                    },
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().tr_padding),
                                                                        colSpan: 4
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("tr", {
                                                                    className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().tr_padding),
                                                                    style: {
                                                                        backgroundColor: "rgb(245,245,245)",
                                                                        fontSize: 14
                                                                    },
                                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                        className: `${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().tr_padding)} ${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().order_desc)}`,
                                                                        colSpan: 4,
                                                                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                            style: {
                                                                                display: "flex"
                                                                            },
                                                                            children: [
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    children: item?.flower_category_name
                                                                                }),
                                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                    style: {
                                                                                        marginLeft: 12
                                                                                    },
                                                                                    children: item?.flower_specs_name
                                                                                })
                                                                            ]
                                                                        })
                                                                    })
                                                                }),
                                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("tr", {
                                                                    children: [
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            style: {
                                                                                fontSize: 14
                                                                            },
                                                                            className: `${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().tr_padding)} ${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().first_column)}`,
                                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                type: "checkbox",
                                                                                onClick: ()=>changeStatus(item),
                                                                                onChange: ()=>null,
                                                                                checked: selected.some((it, ii)=>it === item.id),
                                                                                style: {
                                                                                    width: 15,
                                                                                    height: 15,
                                                                                    marginRight: 12
                                                                                }
                                                                            })
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            className: `${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().tr_padding)} ${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().first_column)}`,
                                                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                                                style: {
                                                                                    display: "flex",
                                                                                    alignItems: "center",
                                                                                    wordBreak: "break-all"
                                                                                },
                                                                                children: [
                                                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                                        className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().product_img),
                                                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                                            src: `${item.coverimage}`,
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
                                                                                                className: (_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().product_title),
                                                                                                style: {
                                                                                                    fontSize: 14,
                                                                                                    width: "100%",
                                                                                                    overflow: "hidden",
                                                                                                    textOverflow: "ellipsis",
                                                                                                    wordWrap: "break-word"
                                                                                                },
                                                                                                children: item?.productname
                                                                                            }),
                                                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                                                                type: "number",
                                                                                                style: {
                                                                                                    width: 40,
                                                                                                    textAlign: "center"
                                                                                                },
                                                                                                onChange: (e)=>ToUpdate(item, index, e.target.value),
                                                                                                value: item.num
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
                                                                            className: `${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().tr_padding)} ${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().second_column)}`,
                                                                            children: [
                                                                                "HD$",
                                                                                item?.price
                                                                            ]
                                                                        }),
                                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("td", {
                                                                            style: {
                                                                                fontSize: 14
                                                                            },
                                                                            className: `${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().tr_padding)} ${(_styles_user_module_css__WEBPACK_IMPORTED_MODULE_15___default().last_column)}`,
                                                                            children: item?.couponprice ? "HK$" + item?.couponprice : "無"
                                                                        })
                                                                    ]
                                                                })
                                                            ]
                                                        }, index);
                                                    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        style: {},
                                                        children: "購物車爲空"
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                justifyContent: "space-between",
                                                marginTop: 24
                                            },
                                            children: [
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        "數量總件數 ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            style: {
                                                                fontWeight: 700,
                                                                fontSize: 24
                                                            },
                                                            children: total_num
                                                        }),
                                                        " 件"
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    children: [
                                                        "合計 hk$ ",
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            style: {
                                                                fontWeight: 700,
                                                                fontSize: 24
                                                            },
                                                            children: total_money
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_14___default().left_area),
                                    style: {
                                        flexDirection: "column",
                                        display: "flex",
                                        alignItems: "flex-start"
                                    },
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                display: "flex",
                                                flexDirection: "column",
                                                flex: 1,
                                                width: "100%"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        fontWeight: 700
                                                    },
                                                    children: "訂單備注:"
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                    onInput: (e)=>setTextArea(e.target.value),
                                                    style: {
                                                        width: "100%",
                                                        resize: "none",
                                                        paddingLeft: 10,
                                                        height: 100,
                                                        borderRadius: 8,
                                                        marginTop: 12
                                                    },
                                                    placeholder: "給賣家備注的信息"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                flex: 1,
                                                marginTop: 16,
                                                width: "100%"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        fontWeight: 700
                                                    },
                                                    children: "配送方式"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_14___default().mediaArea_delivery),
                                                    style: {
                                                        display: "flex",
                                                        justifyContent: "space-between",
                                                        marginTop: 12
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            onClick: ()=>setType(1),
                                                            className: (_styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_14___default().button_icon),
                                                            style: {
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                alignItems: "center",
                                                                backgroundColor: type === 1 ? "rgba(0,0,0,0.1)" : "white"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/本地送貨.png"
                                                                }),
                                                                "本地送貨"
                                                            ]
                                                        }),
                                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                            onClick: ()=>setType(2),
                                                            className: (_styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_14___default().button_icon),
                                                            style: {
                                                                display: "flex",
                                                                flexDirection: "column",
                                                                alignItems: "center",
                                                                backgroundColor: type === 2 ? "rgba(0,0,0,0.1)" : "white"
                                                            },
                                                            children: [
                                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                    src: "/門店自取.png"
                                                                }),
                                                                "門店自取"
                                                            ]
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        marginTop: 16
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            style: {
                                                                fontWeight: 700
                                                            },
                                                            children: "配送日期"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "date",
                                                            min: limitTime(),
                                                            style: {
                                                                width: "100%",
                                                                marginTop: 12,
                                                                borderRadius: 6,
                                                                paddingLeft: 8,
                                                                paddingRight: 8,
                                                                paddingTop: 5,
                                                                paddingBottom: 5
                                                            },
                                                            onInput: (e)=>setDate(e.target.value)
                                                        })
                                                    ]
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: (_styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_14___default().mediaArea_btnGroup),
                                                    style: {
                                                        marginBottom: 24,
                                                        marginTop: 24,
                                                        display: "flex",
                                                        justifyContent: "space-between"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            className: (_styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_14___default().check_order),
                                                            onClick: toCreateOrder,
                                                            style: {
                                                                textAlign: "center",
                                                                paddingTop: 12,
                                                                paddingBottom: 12,
                                                                backgroundColor: "#d43a43",
                                                                color: "white",
                                                                border: "none",
                                                                borderRadius: 8
                                                            },
                                                            children: "確認訂單"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                            className: (_styles_shopcarbtn_module_css__WEBPACK_IMPORTED_MODULE_14___default().btn_To_index),
                                                            href: "/",
                                                            style: {
                                                                textAlign: "center",
                                                                paddingTop: 12,
                                                                paddingBottom: 12,
                                                                border: "none",
                                                                backgroundColor: "black",
                                                                color: "white",
                                                                borderRadius: 8
                                                            },
                                                            children: "繼續選購"
                                                        })
                                                    ]
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_LoginPannel__WEBPACK_IMPORTED_MODULE_6__["default"], {
                login: login,
                close: ()=>setLogin(false),
                toRegister: ()=>{
                    setLogin(false);
                    setRegister(true);
                },
                toForget: ()=>{
                    setLogin(false);
                    setVisible(true);
                },
                hasLogin: hasLogin
            })
        ]
    });
}
async function getServerSideProps(context) {
    const cookies = context.req.headers.cookie;
    //////////console.log("-----------");
    // //////////console.log(context.req.headers.cookie.split('=')[1]);
    const response = await fetch(`${_constant__WEBPACK_IMPORTED_MODULE_5__/* .constant.api_url */ .a.api_url}/api/flowercategory/index`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    const data = await response.json();
    let sc;
    let res;
    let i;
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
        let sc_res = await fetch(`${_constant__WEBPACK_IMPORTED_MODULE_5__/* .constant.api_url */ .a.api_url}/api/cart/index`, {
            headers: {
                Authorization: `Bearer ${i}`,
                "Content-Type": "application/json",
                "Access-Control-Request-Method": "POST",
                "Access-Control-Request-Headers": "Content-Type"
            },
            mode: "cors"
        });
        sc = await sc_res.json();
        if (sc.code === 401) {
            sc.data = [];
        }
    } else {
        sc = {
            data: [],
            code: 401
        };
    }
    return {
        props: {
            cateList: data.data,
            shopCar: sc
        }
    };
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6735:
/***/ ((module) => {

module.exports = require("@nextui-org/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 5832:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/loadable.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 1109:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-local-url.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 7782:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-href.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 9752:
/***/ ((module) => {

module.exports = import("@tanstack/react-query");;

/***/ }),

/***/ 9915:
/***/ ((module) => {

module.exports = import("js-cookie");;

/***/ }),

/***/ 6912:
/***/ ((module) => {

module.exports = import("zustand");;

/***/ }),

/***/ 3602:
/***/ ((module) => {

module.exports = import("zustand/middleware");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5893,5152,29,1664,5829,1116,2852,978,7602,6991,9826,4759], () => (__webpack_exec__(8681)));
module.exports = __webpack_exports__;

})();