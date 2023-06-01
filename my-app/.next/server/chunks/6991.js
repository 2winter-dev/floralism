exports.id = 6991;
exports.ids = [6991];
exports.modules = {

/***/ 9158:
/***/ ((module) => {

// Exports
module.exports = {
	"header_background": "header_header_background__CSmzw",
	"logo_pic": "header_logo_pic__VC6w7",
	"logo": "header_logo__0CHou",
	"header_layout": "header_header_layout__elmxf",
	"drop_item": "header_drop_item__taHmv",
	"header_center_dropdown": "header_header_center_dropdown__AdD18",
	"header_center": "header_header_center__B_amL",
	"header_center_label": "header_header_center_label__jp7bN",
	"header_center_parent": "header_header_center_parent__RXp7c",
	"mine_icon": "header_mine_icon__ExnTv",
	"child_list": "header_child_list__n_G0u",
	"show_list": "header_show_list__6pkZL",
	"drop_label": "header_drop_label__8aU7Y",
	"header_menu": "header_header_menu__SpgaE",
	"header_cate_layout": "header_header_cate_layout__gQhX3",
	"dropdown": "header_dropdown__TG925",
	"show": "header_show__9vWHV",
	"dropdown_btn": "header_dropdown_btn__b7t6F",
	"change": "header_change__Gyo7l"
};


/***/ }),

/***/ 6991:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5893);
/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(9158);
/* harmony import */ var _styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9915);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([js_cookie__WEBPACK_IMPORTED_MODULE_1__]);
js_cookie__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






function Header(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const [navStatus, setNavStatus] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);
    const [index, setIndex] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().header_background)}`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().header_layout)}`,
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo)}`,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                            href: "/",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: "/logo.png",
                                style: {},
                                className: (_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo_pic)
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().header_center)}`,
                        children: [
                            props?.list?.length && props.list.map((item, index)=>{
                                if (index > 2) return null;
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().header_center_label)}`,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().header_center_parent)}`,
                                            children: [
                                                item.categoryname,
                                                !!item.get_child?.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                    className: `iconfont ${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().dropdown_btn)}`,
                                                    style: {
                                                        fontSize: 10
                                                    },
                                                    children: ""
                                                })
                                            ]
                                        }),
                                        !!item.get_child?.length && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().header_center_dropdown)}`,
                                            children: item.get_child.map((it, ii)=>{
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        href: `/category/${it.id}`,
                                                        children: it.categoryname
                                                    })
                                                }, index.toString() + ii.toString());
                                            })
                                        })
                                    ]
                                }, item.id);
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().header_center_label)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/ContactPage`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().header_center_parent)}`,
                                        children: "聯係我們"
                                    })
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().header_center_label)}`,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: `/Aboutus`,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().header_center_parent)}`,
                                        children: "關於我們"
                                    })
                                })
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().header_right)}`,
                        style: {
                            marginLeft: 10
                        },
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            onClick: ()=>{
                                js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("token") ? router.push(`/User`) : props.login();
                            },
                            style: {
                                display: "flex",
                                alignItems: "center",
                                cursor: "pointer"
                            },
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                    style: {},
                                    className: `iconfont ${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().mine_icon)}`,
                                    children: ""
                                }),
                                js_cookie__WEBPACK_IMPORTED_MODULE_1__["default"].get("token") ? " 歡迎" : " 登入"
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().header_menu)}`,
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().header_cate_layout)}`,
                        onClick: ()=>setNavStatus(!navStatus),
                        style: {
                            display: "flex",
                            justifyContent: "space-between"
                        },
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                children: "分類"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                style: {
                                    display: "inline-block",
                                    rotate: navStatus ? "45deg" : "0deg",
                                    fontSize: 20,
                                    transition: "200ms"
                                },
                                children: navStatus ? "+" : "≡"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().dropdown)}`,
                        style: {
                            display: navStatus ? "block" : "none"
                        },
                        children: [
                            props?.list?.length && props.list.map((item, i)=>{
                                return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    onClick: ()=>{
                                        index === i ? setIndex() : setIndex(i);
                                    },
                                    className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().drop_item)}`,
                                    children: [
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().drop_label)}`,
                                            children: item.categoryname
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: index === i ? `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().show_list)}` : `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().child_list)}`,
                                            children: item.get_child && item.get_child.map((it, ii)=>{
                                                if (ii > 3) {
                                                    console.log("123");
                                                    return;
                                                }
                                                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().header_center_dropdown)}`,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                                        href: `/category/${it.id}`,
                                                        children: it.categoryname
                                                    })
                                                }, index + ii.toString());
                                            })
                                        })
                                    ]
                                }, i);
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().drop_item)}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().drop_label)}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/Aboutus",
                                            children: "關於我們"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().drop_label)}`,
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                            href: "/ContactPage",
                                            children: "聯絡我們"
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: `${(_styles_header_module_css__WEBPACK_IMPORTED_MODULE_5___default().child_list)}`
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;