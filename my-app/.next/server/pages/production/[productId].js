(() => {
var exports = {};
exports.id = 1951;
exports.ids = [1951,9855,5568,839,7720,8693,6163,8968,1577,4846,9925];
exports.modules = {

/***/ 8710:
/***/ ((module) => {

// Exports
module.exports = {
	"banner": "Home_banner__Ehv0A",
	"banner_layout": "Home_banner_layout__2wkb8",
	"banner_buttom": "Home_banner_buttom__ejiXV",
	"search_area": "Home_search_area__REPE_",
	"input": "Home_input__OUvlA",
	"top_banner_area": "Home_top_banner_area__DaFqi",
	"scroll_left": "Home_scroll_left__wJBAa",
	"scroll_right": "Home_scroll_right__TP3yF",
	"main_body": "Home_main_body__I0JZ7",
	"goods_list": "Home_goods_list__wPEwe",
	"contactus": "Home_contactus__c_Yxp",
	"goods_scroll": "Home_goods_scroll__u1eh1",
	"goods_view": "Home_goods_view__zsvaR",
	"distance": "Home_distance__KJyqT",
	"title": "Home_title__FX7xZ",
	"distance_pic": "Home_distance_pic__vMG_s",
	"serach_icon": "Home_serach_icon__Xgk0L",
	"banner_desc": "Home_banner_desc__eIGHc"
};


/***/ }),

/***/ 8932:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
            "component/Dynamic.js -> " + "./Header"
        ]
    },
    ssr: false
});
function DynamicComponent(props) {
    let router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(DynamicLazyComponent, {
        list: props.cateList,
        login: ()=>{
            ////console.log("123");
            if (js_cookie__WEBPACK_IMPORTED_MODULE_2__["default"].get("token")) {
                alert("你要退出嗎?");
            } else props.setLogin(true);
        }
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8732:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ProductDetail),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4298);
/* harmony import */ var next_script__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_script__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _styles_product_module_css__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(0);
/* harmony import */ var _styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(8710);
/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _component_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6991);
/* harmony import */ var _component_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7602);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3559);
/* harmony import */ var react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel_lib_styles_carousel_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _component_GoodsItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(751);
/* harmony import */ var _component_LoginPannel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(978);
/* harmony import */ var _component_ShopcarBottom__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5378);
/* harmony import */ var _component_shopCarPage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(8423);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(3409);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(9915);
/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(9752);
/* harmony import */ var _m_api__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(5829);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _component_Dynamic__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(8932);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(4508);
/* harmony import */ var react_responsive_carousel__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_17__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_component_Header__WEBPACK_IMPORTED_MODULE_3__, _component_Footer__WEBPACK_IMPORTED_MODULE_4__, _component_LoginPannel__WEBPACK_IMPORTED_MODULE_7__, _component_ShopcarBottom__WEBPACK_IMPORTED_MODULE_8__, js_cookie__WEBPACK_IMPORTED_MODULE_12__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_13__, _component_Dynamic__WEBPACK_IMPORTED_MODULE_16__]);
([_component_Header__WEBPACK_IMPORTED_MODULE_3__, _component_Footer__WEBPACK_IMPORTED_MODULE_4__, _component_LoginPannel__WEBPACK_IMPORTED_MODULE_7__, _component_ShopcarBottom__WEBPACK_IMPORTED_MODULE_8__, js_cookie__WEBPACK_IMPORTED_MODULE_12__, _tanstack_react_query__WEBPACK_IMPORTED_MODULE_13__, _component_Dynamic__WEBPACK_IMPORTED_MODULE_16__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









// import GoodsScoll from "./component/GoodsScroll";












function ProductDetail({ cateList , product  }) {
    // //////////console.log(product);
    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [login, setLogin] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [register, setRegister] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [flag, setFlag] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [visible, setVisible] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [isShow, setIsShow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [Image, setImage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(product?.flowerDetail[index].flowerimage);
    const [num, setNum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(1);
    const contain = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();
    const [isAdd, setIsAdd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].get("isAdd"));
    const [id, setId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(product?.flowerDetail[index].id);
    const [cardcontent, setCardContent] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("");
    const [cardtype, setCardType] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const [btnLength, setBtnLength] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);
    const addToCart = (0,_tanstack_react_query__WEBPACK_IMPORTED_MODULE_13__.useMutation)({
        mutationKey: [
            "addToCart"
        ],
        mutationFn: (data)=>_m_api__WEBPACK_IMPORTED_MODULE_14__/* ["default"].AddToCart */ .Z.AddToCart(data)
    });
    // //////////console.log(product);
    const resizeUpdate = (e)=>{
        if (e.target.innerWidth <= 1100) {
            ////////////console.log("====", e.target.innerWidth);
            setFlag(true);
        } else {
            ////////////console.log("-----", e.target.innerWidth);
            setFlag(false);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        window.addEventListener("resize", resizeUpdate);
        window.innerWidth < 1100 ? !flag && setFlag(true) : flag && setFlag(false);
        return ()=>{
            window.removeEventListener("resize", resizeUpdate);
        };
    }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, [
        cardtype
    ]);
    const carousel_slice = (n)=>{
        let res = [];
        if (n === 4) {
            for(let i = 0; i < product.flowerList.length / n; i++){
                let sli = product.flowerList.slice(n * i, n * (i + 1));
                res.push(sli);
            }
        } else {
            for(let i = 0; i < product.flowerDetail[index].flowerimages.length / n; i++){
                let sli = product.flowerDetail[index].flowerimages.slice(n * i, n * (i + 1));
                res.push(sli);
            }
        }
        return res;
    };
    const _submit = ()=>{
        addToCart.mutate({});
    };
    let MySwiper;
    // const MySwiper=new Swiper('')
    if (!product) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_15___default()), {
            style: {
                width: "100%",
                justifyContent: "center"
            },
            href: "/",
            children: "商品不存在,請點擊返回"
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        style: {
            position: "relative"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_10___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "商品詳情"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        title: "title",
                        content: `${product.flowerList[index].metatitle}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        title: "descirption",
                        content: `${product.flowerList[index].metadescription}`
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        title: "keywords",
                        content: `${product.flowerList[index].meta}`
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Dynamic__WEBPACK_IMPORTED_MODULE_16__["default"], {
                cateList: cateList,
                setLogin: setLogin
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().total_container),
                style: {},
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                marginTop: 32
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_15___default()), {
                                    href: "/",
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: "首頁"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().separator),
                                    style: {
                                        cursor: "pointer"
                                    },
                                    children: "/"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_15___default()), {
                                    href: `/category/${product.flowerCategory.id}`,
                                    children: product.flowerCategory.categoryname
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().main_detail),
                            style: {
                                width: "100%",
                                display: "flex",
                                marginTop: 24,
                                marginBottom: 24
                            },
                            children: [
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().detail_left),
                                    style: {},
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                            className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().img_show),
                                            src: Image,
                                            style: {
                                                width: "100%",
                                                borderRadius: 20
                                            }
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                marginTop: 16,
                                                position: "relative"
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().img_picker_contain),
                                                    style: {
                                                        width: "100%",
                                                        position: "relative",
                                                        overflow: "hidden"
                                                    },
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().img_picker),
                                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            ref: contain,
                                                            style: {
                                                                width: "100%",
                                                                position: "relative",
                                                                display: "flex",
                                                                justifyContent: "center"
                                                            },
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                                style: {
                                                                    width: "90%",
                                                                    display: "flex",
                                                                    alignItems: "center"
                                                                },
                                                                children: product.flowerDetail[index].flowerimages.map((item, index)=>{
                                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                                        onClick: ()=>setImage(item),
                                                                        src: item,
                                                                        style: {
                                                                            width: "17%",
                                                                            marginRight: "3%",
                                                                            borderRadius: 5
                                                                        }
                                                                    }, index.toString());
                                                                })
                                                            })
                                                        })
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().left_button),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "iconfont",
                                                        onClick: ()=>{
                                                            // //////////console.log(btnLength);
                                                            if (btnLength) {
                                                                if (product.flowerDetail[index].flowerimages.length < 5) return;
                                                                if (contain.current.style.left) {
                                                                    // //////////console.log(contain.current.style.left)
                                                                    contain.current.style.left = parseInt(contain.current.style.left) - 17 + "%";
                                                                } else {
                                                                    contain.current.style.left = -17 + "%";
                                                                }
                                                            }
                                                        // //////////console.log("------------------");
                                                        },
                                                        style: {
                                                            fontSize: 24
                                                        },
                                                        children: ""
                                                    })
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().right_button),
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                        className: "iconfont",
                                                        onClick: ()=>{
                                                            // //////////console.log(btnLength);
                                                            if (product.flowerDetail[index].flowerimages.length > 5) {
                                                                let l = btnLength;
                                                                if (l + 1 > product.flowerDetail[index].flowerimage.length) return;
                                                                setBtnLength(btnLength + 1);
                                                                if (contain.current.style.left) {
                                                                    // //////////console.log(contain.current.style.left)
                                                                    contain.current.style.left = parseInt(contain.current.style.left) + 17 + "%";
                                                                } else {
                                                                    contain.current.style.left = 17 + "%";
                                                                }
                                                            }
                                                        },
                                                        style: {
                                                            fontSize: 24
                                                        },
                                                        children: ""
                                                    })
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().detail_right),
                                    style: {},
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                width: "100%",
                                                fontSize: 18
                                            },
                                            className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().product_title),
                                            children: product.flowerDetail[index].flowername
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().price),
                                            style: {
                                                color: "rgb(206,57,75)",
                                                fontSize: 24
                                            },
                                            children: [
                                                "HK$ ",
                                                (parseFloat(product.flowerDetail[index].price).toFixed(2) * num).toFixed(2)
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                fontWeight: 600
                                            },
                                            children: "規格"
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().specifications),
                                            children: product.flowerDetail.map((item, index)=>{
                                                if (item.id === id) {
                                                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                        className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().choosen),
                                                        children: item.specs_name
                                                    }, item.toString() + index.toString());
                                                } else return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    onClick: ()=>{
                                                        setIndex(index);
                                                        setId(item.id);
                                                    },
                                                    children: item.specs_name
                                                }, item.toString() + index.toString());
                                            })
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                display: "flex",
                                                marginTop: 32,
                                                width: "100%",
                                                justifyContent: "space-between"
                                            },
                                            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().type_selector),
                                                style: {
                                                    marginRight: 12
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", {
                                                        className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().selector),
                                                        value: cardtype,
                                                        onChange: (event)=>{
                                                            setCardType(event.target.value);
                                                        //////console.log(event.target.value);
                                                        },
                                                        style: {
                                                            borderRadius: 8,
                                                            paddingLeft: 10,
                                                            paddingTop: 4,
                                                            paddingBottom: 4,
                                                            paddingRight: 10
                                                        },
                                                        children: [
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: 0,
                                                                children: "默認心意卡"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: 1,
                                                                children: "店家代寫心意卡"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: 2,
                                                                children: "留空，自己寫"
                                                            }),
                                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("option", {
                                                                value: 3,
                                                                children: "不需要心意卡"
                                                            })
                                                        ]
                                                    }),
                                                    cardtype === "1" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("textarea", {
                                                        type: "text",
                                                        style: {
                                                            resize: "none",
                                                            paddingTop: 4,
                                                            paddingBottom: 4,
                                                            borderRadius: 4,
                                                            marginTop: 12,
                                                            width: "100%",
                                                            paddingLeft: 10,
                                                            paddingRight: 10
                                                        },
                                                        value: cardcontent,
                                                        onInput: (e)=>setCardContent(e.target.value),
                                                        placeholder: "请输入心意卡内容"
                                                    }),
                                                    cardtype === "0" && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                                        src: "/心意卡.png",
                                                        style: {
                                                            width: "100%",
                                                            height: "100%",
                                                            marginTop: 12
                                                        }
                                                    })
                                                ]
                                            })
                                        }),
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            style: {
                                                marginTop: 32
                                            },
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    style: {
                                                        marginBottom: 12,
                                                        fontWeight: 600
                                                    },
                                                    children: "數量"
                                                }),
                                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    style: {
                                                        display: "flex",
                                                        alignItems: "center"
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            onClick: ()=>{
                                                                if (num === 1) {
                                                                    alert("商品數量不能小於0");
                                                                } else {
                                                                    setNum(num - 1);
                                                                }
                                                            },
                                                            className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().decrease),
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            children: "-"
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                                            type: "text",
                                                            className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().product_number),
                                                            style: {
                                                                borderRadius: 0
                                                            },
                                                            contentEditable: false,
                                                            value: num,
                                                            onChange: ()=>{}
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                            onClick: ()=>{
                                                                setNum(num + 1);
                                                            },
                                                            className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().increase),
                                                            style: {
                                                                cursor: "pointer"
                                                            },
                                                            children: "+"
                                                        })
                                                    ]
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                marginTop: 24
                                            },
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>{
                                                    ////console.log("1");
                                                    // //////////console.log(Cookies.get('token'), id, num, cardtype, cardcontent);
                                                    addToCart.mutate({
                                                        cookie: js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].get("token"),
                                                        flower_specs_id: id,
                                                        num,
                                                        cardtype,
                                                        cardcontent: cardcontent.trim()
                                                    }, {
                                                        onSuccess: async (res)=>{
                                                            let isSuccess = await res.json();
                                                            // //////////console.log(isSuccess);
                                                            if (isSuccess.code) {
                                                                if (isSuccess.code.toString() === "401") {
                                                                    js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].remove("token");
                                                                    alert("請先登錄");
                                                                    return;
                                                                }
                                                                if (isSuccess.code === 1) {
                                                                    js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].set("isAdd", true);
                                                                    setIsAdd(true);
                                                                // alert("加入购物车成功");
                                                                }
                                                            } else {
                                                                alert(isSuccess.msg);
                                                            }
                                                        },
                                                        onError: (err)=>{
                                                            alert("添加失敗");
                                                        }
                                                    });
                                                },
                                                className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().buy_btn),
                                                style: {
                                                    cursor: "pointer"
                                                },
                                                children: "點擊購買"
                                            })
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().swiper_margin),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: (_styles_product_module_css__WEBPACK_IMPORTED_MODULE_18___default().youMaybeLike),
                    style: {
                        padding: "2.5%",
                        position: "relative",
                        marginBottom: 24,
                        borderRadius: 20
                    },
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_19___default().distance),
                                    style: {
                                        borderBottomWidth: 1,
                                        borderBottomColor: "white"
                                    }
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_19___default().title),
                                    style: {
                                        marginRight: 16,
                                        marginLeft: 16
                                    },
                                    children: "FLORALISM 情人節定制花束"
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_19___default().distance),
                                    style: {
                                        borderBottomWidth: 1,
                                        borderBottomColor: "white"
                                    }
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            style: {
                                position: "relative"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    padding: 8,
                                    marginTop: 12
                                },
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_responsive_carousel__WEBPACK_IMPORTED_MODULE_17__.Carousel, {
                                    showThumbs: false,
                                    infiniteLoop: true,
                                    showIndicators: false,
                                    preventMovementUntilSwipeScrollTolerance: true,
                                    swipeScrollTolerance: 50,
                                    showStatus: false,
                                    children: carousel_slice(4).map((item, index)=>{
                                        //////////console.log(carousel_slice().length);
                                        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            style: {
                                                display: "flex",
                                                flexWrap: "wrap"
                                            },
                                            children: item.map((it, ii)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_GoodsItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
                                                    imgTopStyle: {},
                                                    item: it,
                                                    type: "carsouel",
                                                    top_style: {},
                                                    imgStyle: {},
                                                    animation: true
                                                }, item.id + index.toString() + ii.toString());
                                            })
                                        }, item.id + index.toString());
                                    })
                                })
                            })
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_LoginPannel__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_ShopcarBottom__WEBPACK_IMPORTED_MODULE_8__["default"], {
                isAdd: isAdd
            }),
            isShow && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_component_shopCarPage__WEBPACK_IMPORTED_MODULE_9__["default"], {
                isShow: isShow,
                setIsShow: setIsShow
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_script__WEBPACK_IMPORTED_MODULE_2___default()), {
                defer: true,
                src: "/swiper/js/idangerous.swiper.min.js",
                onReady: ()=>{
                    MySwiper = new Swiper(".swiper-container", {
                        loop: true,
                        onInit: function(swiper) {
                            swiper.swipeNext();
                        },
                        preventClicksPropagation: false
                    });
                }
            })
        ]
    });
}
async function getStaticPaths() {
    const response = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_11__/* .constant.api_url */ .a.api_url}/api/flowers/allList`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    const data = await response.json();
    let res = [];
    data.data.map((item, index)=>{
        res.push({
            params: {
                productId: item.id.toString()
            }
        });
    });
    // const data=await response.json()
    // TODO get product id to be array
    return {
        paths: res,
        fallback: false
    };
}
async function getStaticProps(context) {
    const { params  } = context;
    //  ////////////console.log(constant.api_url);
    const response = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_11__/* .constant.api_url */ .a.api_url}/api/flowercategory/index`, {
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    const data = await response.text();
    //   ////////////console.log(Cookies.get('token'));
    const detail_response = await fetch(`${_constant_index__WEBPACK_IMPORTED_MODULE_11__/* .constant.api_url */ .a.api_url}/api/flowers/flowerDetail?id=${params.productId}`, {
        Authorization: `Bearer ${js_cookie__WEBPACK_IMPORTED_MODULE_12__["default"].get("token")}`,
        mode: "cors",
        headers: {
            // "Authorization": `Bearer ${data.cookie}`,
            "Content-Type": "application/json",
            "Access-Control-Request-Method": "POST",
            "Access-Control-Request-Headers": "Content-Type"
        }
    });
    ////////////console.log(Cookies.get("token"));
    const detail = await detail_response.json();
    return {
        props: {
            cateList: JSON.parse(data).data,
            product: detail.data
        },
        revalidate: 30
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

/***/ 3280:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head-manager-context.js");

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

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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

/***/ 6405:
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ 4508:
/***/ ((module) => {

"use strict";
module.exports = require("react-responsive-carousel");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [5893,5152,29,1664,1271,3555,5829,1116,2852,978,7602,751,6991,9826,8423,5378,0], () => (__webpack_exec__(8732)));
module.exports = __webpack_exports__;

})();