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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading_component */ \"./pages/loading_component.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MpesaApi() {\n    var handleFetch = function handleFetch() {\n        _s1();\n        setUpdate(updat);\n        (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n            setLoading(true);\n            fetch(url).then(function(res) {\n                return res.json();\n            }).then(function(response) {\n                console.log(response);\n                setVideos(function(videos) {\n                    return response;\n                });\n                setLoading(false);\n            }).catch(function(err) {\n                return console.log(err);\n            });\n        }, [\n            update\n        ]);\n    };\n    _s();\n    var _s1 = $RefreshSig$();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), videos = ref[0], setVideos = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), update = ref2[0], setUpdate = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), details = ref3[0], setDetails = ref3[1];\n    var handleChange = function(e) {\n        var name = e.target.name;\n        var value = e.target.value;\n        setDetails((0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, details), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, name, value)));\n    };\n    var url = \"https://cashwaytraders.com/x-mpesa-api.php?phone=\".concat(details.phone, \"&amount=\").concat(details.amount);\n    _s1(handleFetch, \"OD7bBpZva5O2jO+Puf00hKivP7c=\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\"\n                }, void 0, false, {\n                    fileName: \"/home/nicco/personal-projects/react-applications/mpesa-api/pages/index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"M-PESA API\"\n                }, void 0, false, {\n                    fileName: \"/home/nicco/personal-projects/react-applications/mpesa-api/pages/index.js\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"exampleInputEmail1\",\n                            children: \"Amount\"\n                        }, void 0, false, {\n                            fileName: \"/home/nicco/personal-projects/react-applications/mpesa-api/pages/index.js\",\n                            lineNumber: 38,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control\",\n                            name: \"amount\",\n                            onChange: handleChange,\n                            id: \"exampleInputEmail1\",\n                            \"aria-describedby\": \"emailHelp\",\n                            placeholder: \"Enter amount\"\n                        }, void 0, false, {\n                            fileName: \"/home/nicco/personal-projects/react-applications/mpesa-api/pages/index.js\",\n                            lineNumber: 39,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                            id: \"emailHelp\",\n                            className: \"form-text text-muted\",\n                            children: \"We accept all denominations\"\n                        }, void 0, false, {\n                            fileName: \"/home/nicco/personal-projects/react-applications/mpesa-api/pages/index.js\",\n                            lineNumber: 48,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/nicco/personal-projects/react-applications/mpesa-api/pages/index.js\",\n                    lineNumber: 37,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mb-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"exampleInputPassword1\",\n                            children: \"Mobile Number\"\n                        }, void 0, false, {\n                            fileName: \"/home/nicco/personal-projects/react-applications/mpesa-api/pages/index.js\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"number\",\n                            onChange: handleChange,\n                            name: \"phone\",\n                            className: \"form-control\",\n                            id: \"exampleInputPassword1\",\n                            placeholder: \"Mobile No.\"\n                        }, void 0, false, {\n                            fileName: \"/home/nicco/personal-projects/react-applications/mpesa-api/pages/index.js\",\n                            lineNumber: 54,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/nicco/personal-projects/react-applications/mpesa-api/pages/index.js\",\n                    lineNumber: 52,\n                    columnNumber: 9\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: handleFetch,\n                    className: \"btn btn-primary\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"/home/nicco/personal-projects/react-applications/mpesa-api/pages/index.js\",\n                    lineNumber: 63,\n                    columnNumber: 9\n                }, this),\n                loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col h-full w-full justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loading_component__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/nicco/personal-projects/react-applications/mpesa-api/pages/index.js\",\n                            lineNumber: 72,\n                            columnNumber: 13\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"py-1 text-xs\",\n                            children: \"Initiating transactions...\"\n                        }, void 0, false, {\n                            fileName: \"/home/nicco/personal-projects/react-applications/mpesa-api/pages/index.js\",\n                            lineNumber: 73,\n                            columnNumber: 13\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/nicco/personal-projects/react-applications/mpesa-api/pages/index.js\",\n                    lineNumber: 71,\n                    columnNumber: 11\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"/home/nicco/personal-projects/react-applications/mpesa-api/pages/index.js\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/nicco/personal-projects/react-applications/mpesa-api/pages/index.js\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, this);\n}\n_s(MpesaApi, \"AjszgfzaSkDquDCt3UKFMeOtUuQ=\");\n_c = MpesaApi;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MpesaApi);\nvar _c;\n$RefreshReg$(_c, \"MpesaApi\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDdkJDLGtCQUFnQixFQUFDLFdBQVc7NEJBQzVCQyxXQUFXLEVBQUMsY0FBYzs7Ozs7Z0NBQzFCO3NDQUNGLDhEQUFDQyxPQUFLOzRCQUFDSCxFQUFFLEVBQUMsV0FBVzs0QkFBQ1AsU0FBUyxFQUFDLHNCQUFzQjtzQ0FBQyw2QkFFdkQ7Ozs7O2dDQUFROzs7Ozs7d0JBQ0o7OEJBQ04sOERBQUNELEtBQUc7b0JBQUNDLFNBQVMsRUFBQyxpQkFBaUI7O3NDQUM5Qiw4REFBQ0UsT0FBSzs0QkFBQ0MsT0FBTyxFQUFDLHVCQUF1QjtzQ0FBQyxlQUFhOzs7OztnQ0FBUTtzQ0FDNUQsOERBQUNDLE9BQUs7NEJBQ0pDLElBQUksRUFBQyxRQUFROzRCQUNiQyxRQUFRLEVBQUVkLFlBQVk7NEJBQ3RCRSxJQUFJLEVBQUMsT0FBTzs0QkFDWk0sU0FBUyxFQUFDLGNBQWM7NEJBQ3hCTyxFQUFFLEVBQUMsdUJBQXVCOzRCQUMxQkUsV0FBVyxFQUFDLFlBQVk7Ozs7O2dDQUN4Qjs7Ozs7O3dCQUNFOzhCQUNOLDhEQUFDRSxRQUFNO29CQUNMTixJQUFJLEVBQUMsUUFBUTtvQkFDYk8sT0FBTyxFQUFFeEMsV0FBVztvQkFDcEI0QixTQUFTLEVBQUMsaUJBQWlCOzhCQUFDLFFBRTlCOzs7Ozt3QkFBUztnQkFFUlgsT0FBTyxrQkFDTiw4REFBQ1UsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLHlEQUF5RDs7c0NBQ3RFLDhEQUFDOUIsMERBQWlCOzs7O2dDQUFHO3NDQUNyQiw4REFBQzJDLEdBQUM7NEJBQUNiLFNBQVMsRUFBQyxjQUFjO3NDQUFDLDRCQUEwQjs7Ozs7Z0NBQUk7Ozs7Ozt3QkFDdEQ7Ozs7OztnQkFFSjs7Ozs7WUFDRixDQUNOO0FBQ0osQ0FBQztHQTNFUTdCLFFBQVE7QUFBUkEsS0FBQUEsUUFBUTtBQTZFakIsK0RBQWVBLFFBQVEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgXCJib290c3RyYXAvZGlzdC9jc3MvYm9vdHN0cmFwLmNzc1wiO1xuaW1wb3J0IExvYWRpbmdfY29tcG9uZW50IGZyb20gXCIuL2xvYWRpbmdfY29tcG9uZW50XCI7XG5mdW5jdGlvbiBNcGVzYUFwaSgpIHtcbiAgY29uc3QgW3ZpZGVvcywgc2V0VmlkZW9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbdXBkYXRlLCBzZXRVcGRhdGVdID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbZGV0YWlscywgc2V0RGV0YWlsc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XG4gICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XG4gICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcbiAgICBzZXREZXRhaWxzKHsgLi4uZGV0YWlscywgW25hbWVdOiB2YWx1ZSB9KTtcbiAgfTtcblxuICBsZXQgdXJsID0gYGh0dHBzOi8vY2FzaHdheXRyYWRlcnMuY29tL3gtbXBlc2EtYXBpLnBocD9waG9uZT0ke2RldGFpbHMucGhvbmV9JmFtb3VudD0ke2RldGFpbHMuYW1vdW50fWA7XG5cbiAgZnVuY3Rpb24gaGFuZGxlRmV0Y2goKSB7XG4gICAgc2V0VXBkYXRlKHVwZGF0KVxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgZmV0Y2godXJsKVxuICAgICAgICAudGhlbigocmVzKSA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XG4gICAgICAgICAgc2V0VmlkZW9zKCh2aWRlb3MpID0+IHJlc3BvbnNlKTtcbiAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xuICAgIH0sIFt1cGRhdGVdKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNVwiPjwvZGl2PlxuICAgICAgICA8aDM+TS1QRVNBIEFQSTwvaDM+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9ybS1ncm91cFwiPlxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0RW1haWwxXCI+QW1vdW50PC9sYWJlbD5cbiAgICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBuYW1lPVwiYW1vdW50XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XG4gICAgICAgICAgICBpZD1cImV4YW1wbGVJbnB1dEVtYWlsMVwiXG4gICAgICAgICAgICBhcmlhLWRlc2NyaWJlZGJ5PVwiZW1haWxIZWxwXCJcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW50ZXIgYW1vdW50XCJcbiAgICAgICAgICAvPlxuICAgICAgICAgIDxzbWFsbCBpZD1cImVtYWlsSGVscFwiIGNsYXNzTmFtZT1cImZvcm0tdGV4dCB0ZXh0LW11dGVkXCI+XG4gICAgICAgICAgICBXZSBhY2NlcHQgYWxsIGRlbm9taW5hdGlvbnNcbiAgICAgICAgICA8L3NtYWxsPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb3JtLWdyb3VwIG1iLTJcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiPk1vYmlsZSBOdW1iZXI8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxuICAgICAgICAgICAgbmFtZT1cInBob25lXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXG4gICAgICAgICAgICBpZD1cImV4YW1wbGVJbnB1dFBhc3N3b3JkMVwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIk1vYmlsZSBOby5cIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlRmV0Y2h9XG4gICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgU3VibWl0XG4gICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgIHtsb2FkaW5nICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaC1mdWxsIHctZnVsbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgIDxMb2FkaW5nX2NvbXBvbmVudCAvPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHktMSB0ZXh0LXhzXCI+SW5pdGlhdGluZyB0cmFuc2FjdGlvbnMuLi48L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXBlc2FBcGk7XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIkxvYWRpbmdfY29tcG9uZW50IiwiTXBlc2FBcGkiLCJoYW5kbGVGZXRjaCIsInNldFVwZGF0ZSIsInVwZGF0Iiwic2V0TG9hZGluZyIsImZldGNoIiwidXJsIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJzZXRWaWRlb3MiLCJ2aWRlb3MiLCJjYXRjaCIsImVyciIsInVwZGF0ZSIsImxvYWRpbmciLCJkZXRhaWxzIiwic2V0RGV0YWlscyIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJwaG9uZSIsImFtb3VudCIsImRpdiIsImNsYXNzTmFtZSIsImgzIiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJ0eXBlIiwib25DaGFuZ2UiLCJpZCIsImFyaWEtZGVzY3JpYmVkYnkiLCJwbGFjZWhvbGRlciIsInNtYWxsIiwiYnV0dG9uIiwib25DbGljayIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});