"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/layout/header/SideBar.js":
/*!**************************************!*\
  !*** ./src/layout/header/SideBar.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/firebase */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SideBar = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const collRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_src_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"form-three\");\n    const formSubmitHandler = async (e)=>{\n        e.preventDefault();\n        setLoader(true);\n        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(collRef, {\n            name,\n            email,\n            number,\n            message\n        });\n        window.setTimeout(()=>{\n            setLoader(false);\n            localStorage.setItem(\"formId\", docRef.id);\n            localStorage.setItem(\"formName\", name);\n            router.push(\"/thanks\");\n            console.log(\"Document written with ID: \", docRef.id);\n        }, 3000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-back-drop\"\n            }, void 0, false, {\n                fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"hidden-bar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inner-box text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cross-icon\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"fa fa-times\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"title\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Get Appointment\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"appointment-form\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: (e)=>{\n                                    e.preventDefault();\n                                    document.querySelector(\"body\").classList.remove(\"side-content-visible\");\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            name: \"text\",\n                                            placeholder: \"Name\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                            lineNumber: 53,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                        lineNumber: 52,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            name: \"email\",\n                                            placeholder: \"Email Address\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                            lineNumber: 56,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                        lineNumber: 55,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            placeholder: \"Message\",\n                                            rows: 5\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                            lineNumber: 64,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                        lineNumber: 63,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"theme-btn\",\n                                            children: \"Submit now\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                            lineNumber: 67,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                        lineNumber: 66,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"social-style-one\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fab fa-twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                        lineNumber: 76,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                    lineNumber: 75,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fab fa-facebook-f\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                        lineNumber: 79,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                    lineNumber: 78,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fab fa-instagram\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                        lineNumber: 82,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                    lineNumber: 81,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fab fa-pinterest-p\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                        lineNumber: 85,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                    lineNumber: 84,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                            lineNumber: 74,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SideBar, \"CLPSFvAcxwHrbj0R1F3I4ylNk6g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SideBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBar);\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztBQXdGTiwrREFBZUEsT0FBT0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvbGF5b3V0L2hlYWRlci9TaWRlQmFyLmpzP2NjNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZGIgfSBmcm9tIFwiQC9zcmMvZmlyZWJhc2VcIjtcclxuaW1wb3J0IHsgYWRkRG9jLCBjb2xsZWN0aW9uIH0gZnJvbSBcImZpcmViYXNlL2ZpcmVzdG9yZVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmNvbnN0IFNpZGVCYXIgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbZW1haWwsIHNldEVtYWlsXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW251bWJlciwgc2V0TnVtYmVyXSA9IHVzZVN0YXRlKCk7XHJcbiAgY29uc3QgW21lc3NhZ2UsIHNldE1lc3NhZ2VdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbG9hZGVyLCBzZXRMb2FkZXJdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGNvbGxSZWYgPSBjb2xsZWN0aW9uKGRiLCBcImZvcm0tdGhyZWVcIik7XHJcblxyXG4gIGNvbnN0IGZvcm1TdWJtaXRIYW5kbGVyID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIHNldExvYWRlcih0cnVlKTtcclxuICAgIGNvbnN0IGRvY1JlZiA9IGF3YWl0IGFkZERvYyhjb2xsUmVmLCB7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIGVtYWlsLFxyXG4gICAgICBudW1iZXIsXHJcbiAgICAgIG1lc3NhZ2UsXHJcbiAgICB9KTtcclxuICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgc2V0TG9hZGVyKGZhbHNlKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmb3JtSWRcIiwgZG9jUmVmLmlkKTtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmb3JtTmFtZVwiLCBuYW1lKTtcclxuICAgICAgcm91dGVyLnB1c2goYC90aGFua3NgKTtcclxuICAgICAgY29uc29sZS5sb2coXCJEb2N1bWVudCB3cml0dGVuIHdpdGggSUQ6IFwiLCBkb2NSZWYuaWQpO1xyXG4gICAgfSwgMzAwMCk7XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPEZyYWdtZW50PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tYmFjay1kcm9wXCI+PC9kaXY+XHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImhpZGRlbi1iYXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlubmVyLWJveCB0ZXh0LWNlbnRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjcm9zcy1pY29uXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImZhIGZhLXRpbWVzXCIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZVwiPlxyXG4gICAgICAgICAgICA8aDQ+R2V0IEFwcG9pbnRtZW50PC9oND5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qQXBwb2ludG1lbnQgRm9ybSovfVxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhcHBvaW50bWVudC1mb3JtXCI+XHJcbiAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgb25TdWJtaXQ9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudFxyXG4gICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcihcImJvZHlcIilcclxuICAgICAgICAgICAgICAgICAgLmNsYXNzTGlzdC5yZW1vdmUoXCJzaWRlLWNvbnRlbnQtdmlzaWJsZVwiKTtcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBuYW1lPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiTmFtZVwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8dGV4dGFyZWEgcGxhY2Vob2xkZXI9XCJNZXNzYWdlXCIgcm93cz17NX0gLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzTmFtZT1cInRoZW1lLWJ0blwiPlxyXG4gICAgICAgICAgICAgICAgICBTdWJtaXQgbm93XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LypTb2NpYWwgSWNvbnMqL31cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic29jaWFsLXN0eWxlLW9uZVwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS10d2l0dGVyXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1mYWNlYm9vay1mXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1pbnN0YWdyYW1cIiAvPlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCIjXCI+XHJcbiAgICAgICAgICAgICAgPGkgY2xhc3NOYW1lPVwiZmFiIGZhLXBpbnRlcmVzdC1wXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvc2VjdGlvbj5cclxuICAgIDwvRnJhZ21lbnQ+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgU2lkZUJhcjtcclxuIl0sIm5hbWVzIjpbImRiIiwiYWRkRG9jIiwiY29sbGVjdGlvbiIsInVzZVJvdXRlciIsIkZyYWdtZW50IiwidXNlU3RhdGUiLCJTaWRlQmFyIiwicm91dGVyIiwibmFtZSIsInNldE5hbWUiLCJlbWFpbCIsInNldEVtYWlsIiwibnVtYmVyIiwic2V0TnVtYmVyIiwibWVzc2FnZSIsInNldE1lc3NhZ2UiLCJsb2FkZXIiLCJzZXRMb2FkZXIiLCJjb2xsUmVmIiwiZm9ybVN1Ym1pdEhhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJkb2NSZWYiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImlkIiwicHVzaCIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIiwic3BhbiIsImg0IiwiZm9ybSIsIm9uU3VibWl0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsInRleHRhcmVhIiwicm93cyIsImJ1dHRvbiIsImEiLCJocmVmIiwiaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/layout/header/SideBar.js\n"));

/***/ })

});