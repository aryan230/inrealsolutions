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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_firebase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/src/firebase */ \"./src/firebase.js\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/esm/index.esm.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst SideBar = ()=>{\n    _s();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const [name, setName] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [number, setNumber] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [message, setMessage] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)();\n    const [loader, setLoader] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const collRef = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.collection)(_src_firebase__WEBPACK_IMPORTED_MODULE_1__.db, \"form-three\");\n    const formSubmitHandler = async (e)=>{\n        e.preventDefault();\n        setLoader(true);\n        const docRef = await (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_2__.addDoc)(collRef, {\n            name,\n            email,\n            number,\n            message\n        });\n        window.setTimeout(()=>{\n            setLoader(false);\n            localStorage.setItem(\"formId\", docRef.id);\n            localStorage.setItem(\"formName\", name);\n            router.push(\"/thanks\");\n            console.log(\"Document written with ID: \", docRef.id);\n        }, 3000);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_4__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"form-back-drop\"\n            }, void 0, false, {\n                fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"hidden-bar\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"inner-box text-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"cross-icon\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"fa fa-times\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                lineNumber: 37,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                            lineNumber: 36,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"title\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                children: \"Get Appointment\"\n                            }, void 0, false, {\n                                fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                lineNumber: 40,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"appointment-form\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                                onSubmit: (e)=>{\n                                    e.preventDefault();\n                                    document.querySelector(\"body\").classList.remove(\"side-content-visible\");\n                                    formSubmitHandler(e);\n                                },\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"text\",\n                                            name: \"text\",\n                                            placeholder: \"Name\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                            lineNumber: 54,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                        lineNumber: 53,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                            type: \"email\",\n                                            name: \"email\",\n                                            placeholder: \"Email Address\",\n                                            required: true\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                            lineNumber: 57,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                        lineNumber: 56,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                            placeholder: \"Message\",\n                                            rows: 5\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                            lineNumber: 65,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                        lineNumber: 64,\n                                        columnNumber: 15\n                                    }, undefined),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"form-group\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                            type: \"submit\",\n                                            className: \"theme-btn\",\n                                            children: \"Submit now\"\n                                        }, void 0, false, {\n                                            fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                            lineNumber: 68,\n                                            columnNumber: 17\n                                        }, undefined)\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                        lineNumber: 67,\n                                        columnNumber: 15\n                                    }, undefined)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                lineNumber: 44,\n                                columnNumber: 13\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                            lineNumber: 43,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"social-style-one\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fab fa-twitter\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                        lineNumber: 77,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                    lineNumber: 76,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fab fa-facebook-f\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                        lineNumber: 80,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                    lineNumber: 79,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fab fa-instagram\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                        lineNumber: 83,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                    lineNumber: 82,\n                                    columnNumber: 13\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: \"#\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"i\", {\n                                        className: \"fab fa-pinterest-p\"\n                                    }, void 0, false, {\n                                        fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                        lineNumber: 86,\n                                        columnNumber: 15\n                                    }, undefined)\n                                }, void 0, false, {\n                                    fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                                    lineNumber: 85,\n                                    columnNumber: 13\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                            lineNumber: 75,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\inreal\\\\ygencyreact-10\\\\ygencyreact-10\\\\Ygency\\\\React Template\\\\src\\\\layout\\\\header\\\\SideBar.js\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(SideBar, \"CLPSFvAcxwHrbj0R1F3I4ylNk6g=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter\n    ];\n});\n_c = SideBar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SideBar);\nvar _c;\n$RefreshReg$(_c, \"SideBar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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V0gsa0RBQVNBOzs7S0FEcEJHO0FBeUZOLCtEQUFlQSxPQUFPQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9sYXlvdXQvaGVhZGVyL1NpZGVCYXIuanM/Y2M1MiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBkYiB9IGZyb20gXCJAL3NyYy9maXJlYmFzZVwiO1xyXG5pbXBvcnQgeyBhZGREb2MsIGNvbGxlY3Rpb24gfSBmcm9tIFwiZmlyZWJhc2UvZmlyZXN0b3JlXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuY29uc3QgU2lkZUJhciA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbnVtYmVyLCBzZXROdW1iZXJdID0gdXNlU3RhdGUoKTtcclxuICBjb25zdCBbbWVzc2FnZSwgc2V0TWVzc2FnZV0gPSB1c2VTdGF0ZSgpO1xyXG4gIGNvbnN0IFtsb2FkZXIsIHNldExvYWRlcl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgY29uc3QgY29sbFJlZiA9IGNvbGxlY3Rpb24oZGIsIFwiZm9ybS10aHJlZVwiKTtcclxuXHJcbiAgY29uc3QgZm9ybVN1Ym1pdEhhbmRsZXIgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0TG9hZGVyKHRydWUpO1xyXG4gICAgY29uc3QgZG9jUmVmID0gYXdhaXQgYWRkRG9jKGNvbGxSZWYsIHtcclxuICAgICAgbmFtZSxcclxuICAgICAgZW1haWwsXHJcbiAgICAgIG51bWJlcixcclxuICAgICAgbWVzc2FnZSxcclxuICAgIH0pO1xyXG4gICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICBzZXRMb2FkZXIoZmFsc2UpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZvcm1JZFwiLCBkb2NSZWYuaWQpO1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZvcm1OYW1lXCIsIG5hbWUpO1xyXG4gICAgICByb3V0ZXIucHVzaChgL3RoYW5rc2ApO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkRvY3VtZW50IHdyaXR0ZW4gd2l0aCBJRDogXCIsIGRvY1JlZi5pZCk7XHJcbiAgICB9LCAzMDAwKTtcclxuICB9O1xyXG4gIHJldHVybiAoXHJcbiAgICA8RnJhZ21lbnQ+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1iYWNrLWRyb3BcIj48L2Rpdj5cclxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiaGlkZGVuLWJhclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5uZXItYm94IHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyb3NzLWljb25cIj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZmEgZmEtdGltZXNcIiAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XHJcbiAgICAgICAgICAgIDxoND5HZXQgQXBwb2ludG1lbnQ8L2g0PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LypBcHBvaW50bWVudCBGb3JtKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFwcG9pbnRtZW50LWZvcm1cIj5cclxuICAgICAgICAgICAgPGZvcm1cclxuICAgICAgICAgICAgICBvblN1Ym1pdD17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIGRvY3VtZW50XHJcbiAgICAgICAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKFwiYm9keVwiKVxyXG4gICAgICAgICAgICAgICAgICAuY2xhc3NMaXN0LnJlbW92ZShcInNpZGUtY29udGVudC12aXNpYmxlXCIpO1xyXG4gICAgICAgICAgICAgICAgZm9ybVN1Ym1pdEhhbmRsZXIoZSk7XHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cInRleHRcIiBwbGFjZWhvbGRlcj1cIk5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgQWRkcmVzc1wiXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHBsYWNlaG9sZGVyPVwiTWVzc2FnZVwiIHJvd3M9ezV9IC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJ0aGVtZS1idG5cIj5cclxuICAgICAgICAgICAgICAgICAgU3VibWl0IG5vd1xyXG4gICAgICAgICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qU29jaWFsIEljb25zKi99XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNvY2lhbC1zdHlsZS1vbmVcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtdHdpdHRlclwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtZmFjZWJvb2stZlwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIj5cclxuICAgICAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYWIgZmEtaW5zdGFncmFtXCIgLz5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgIDxpIGNsYXNzTmFtZT1cImZhYiBmYS1waW50ZXJlc3QtcFwiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L0ZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IFNpZGVCYXI7XHJcbiJdLCJuYW1lcyI6WyJkYiIsImFkZERvYyIsImNvbGxlY3Rpb24iLCJ1c2VSb3V0ZXIiLCJGcmFnbWVudCIsInVzZVN0YXRlIiwiU2lkZUJhciIsInJvdXRlciIsIm5hbWUiLCJzZXROYW1lIiwiZW1haWwiLCJzZXRFbWFpbCIsIm51bWJlciIsInNldE51bWJlciIsIm1lc3NhZ2UiLCJzZXRNZXNzYWdlIiwibG9hZGVyIiwic2V0TG9hZGVyIiwiY29sbFJlZiIsImZvcm1TdWJtaXRIYW5kbGVyIiwiZSIsInByZXZlbnREZWZhdWx0IiwiZG9jUmVmIiwid2luZG93Iiwic2V0VGltZW91dCIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJpZCIsInB1c2giLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwic2VjdGlvbiIsInNwYW4iLCJoNCIsImZvcm0iLCJvblN1Ym1pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwicmVxdWlyZWQiLCJ0ZXh0YXJlYSIsInJvd3MiLCJidXR0b24iLCJhIiwiaHJlZiIsImkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/layout/header/SideBar.js\n"));

/***/ })

});