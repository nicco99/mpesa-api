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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_define_property.mjs */ \"./node_modules/@swc/helpers/src/_define_property.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.css */ \"./node_modules/bootstrap/dist/css/bootstrap.css\");\n/* harmony import */ var bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _loading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loading_component */ \"./pages/loading_component.js\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\nfunction MpesaApi() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), videos = ref[0], setVideos = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), loading = ref1[0], setLoading = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), details = ref2[0], setDetails = ref2[1];\n    var handleChange = function(e) {\n        var name = e.target.name;\n        var value = e.target.value;\n        setDetails(function(prev) {\n            return (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_4__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])({}, prev), (0,_swc_helpers_src_define_property_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])({}, name, value));\n        });\n    };\n    console.log(details.phone);\n    var url = \"https://cashwaytraders.com/x-mpesa-api.php?phone=\".concat(details.phone, \"&amount=\").concat(details.amount);\n    var fetchRequest = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        setLoading(true);\n        fetch(url, {\n            method: \"GET\",\n            headers: {\n                \"Content-Type\": \"application/json\"\n            }\n        }).then(function(res) {\n            res.json().then(function(response) {\n                console.log(response);\n                setVideos(response);\n                setLoading(false);\n            });\n        }).catch(function(err) {\n            console.log(err);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"container\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"mt-5\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Davies\\\\Desktop\\\\GITHUB\\\\mpesa-api\\\\pages\\\\index.js\",\n                    lineNumber: 40,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                    children: \"M-PESA API\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Davies\\\\Desktop\\\\GITHUB\\\\mpesa-api\\\\pages\\\\index.js\",\n                    lineNumber: 41,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"exampleInputEmail1\",\n                            children: \"Amount\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Davies\\\\Desktop\\\\GITHUB\\\\mpesa-api\\\\pages\\\\index.js\",\n                            lineNumber: 45,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            className: \"form-control\",\n                            name: \"amount\",\n                            onChange: handleChange,\n                            id: \"exampleInputEmail1\",\n                            \"aria-describedby\": \"emailHelp\",\n                            placeholder: \"Enter amount\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Davies\\\\Desktop\\\\GITHUB\\\\mpesa-api\\\\pages\\\\index.js\",\n                            lineNumber: 46,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"small\", {\n                            id: \"emailHelp\",\n                            className: \"form-text text-muted\",\n                            children: \"We accept all denominations\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Davies\\\\Desktop\\\\GITHUB\\\\mpesa-api\\\\pages\\\\index.js\",\n                            lineNumber: 47,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Davies\\\\Desktop\\\\GITHUB\\\\mpesa-api\\\\pages\\\\index.js\",\n                    lineNumber: 44,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"form-group mb-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                            htmlFor: \"exampleInputPassword1\",\n                            children: \"Mobile Number\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Davies\\\\Desktop\\\\GITHUB\\\\mpesa-api\\\\pages\\\\index.js\",\n                            lineNumber: 50,\n                            columnNumber: 21\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            onChange: handleChange,\n                            name: \"phone\",\n                            className: \"form-control\",\n                            id: \"exampleInputPassword1\",\n                            placeholder: \"Mobile No.\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Davies\\\\Desktop\\\\GITHUB\\\\mpesa-api\\\\pages\\\\index.js\",\n                            lineNumber: 51,\n                            columnNumber: 21\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Davies\\\\Desktop\\\\GITHUB\\\\mpesa-api\\\\pages\\\\index.js\",\n                    lineNumber: 49,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    type: \"button\",\n                    onClick: fetchRequest,\n                    className: \"btn btn-primary\",\n                    children: \"Submit\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Davies\\\\Desktop\\\\GITHUB\\\\mpesa-api\\\\pages\\\\index.js\",\n                    lineNumber: 53,\n                    columnNumber: 17\n                }, this),\n                loading && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex flex-col h-full w-full justify-center items-center\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"loading_component\", {\n                            children: \" \"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Davies\\\\Desktop\\\\GITHUB\\\\mpesa-api\\\\pages\\\\index.js\",\n                            lineNumber: 57,\n                            columnNumber: 25\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"py-1 text-xs\",\n                            children: \"Initiating transactions...\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Davies\\\\Desktop\\\\GITHUB\\\\mpesa-api\\\\pages\\\\index.js\",\n                            lineNumber: 58,\n                            columnNumber: 25\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Davies\\\\Desktop\\\\GITHUB\\\\mpesa-api\\\\pages\\\\index.js\",\n                    lineNumber: 56,\n                    columnNumber: 21\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\Davies\\\\Desktop\\\\GITHUB\\\\mpesa-api\\\\pages\\\\index.js\",\n            lineNumber: 39,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Davies\\\\Desktop\\\\GITHUB\\\\mpesa-api\\\\pages\\\\index.js\",\n        lineNumber: 38,\n        columnNumber: 9\n    }, this);\n}\n_s(MpesaApi, \"Y5EnqT9/gHtUzmeljU4JYKF380U=\");\n_c = MpesaApi;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MpesaApi);\nvar _c;\n$RefreshReg$(_c, \"MpesaApi\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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VyxFQUFDLGNBQWM7Ozs7O2dDQUFHO3NDQUNwSyw4REFBQ0MsT0FBSzs0QkFBQ0gsRUFBRSxFQUFDLFdBQVc7NEJBQUNQLFNBQVMsRUFBQyxzQkFBc0I7c0NBQUMsNkJBQTJCOzs7OztnQ0FBUTs7Ozs7O3dCQUN4Rjs4QkFDTiw4REFBQ0QsS0FBRztvQkFBQ0MsU0FBUyxFQUFDLGlCQUFpQjs7c0NBQzVCLDhEQUFDRSxPQUFLOzRCQUFDQyxPQUFPLEVBQUMsdUJBQXVCO3NDQUFDLGVBQWE7Ozs7O2dDQUFRO3NDQUM1RCw4REFBQ0MsT0FBSzs0QkFBQ0MsSUFBSSxFQUFDLE1BQU07NEJBQUNDLFFBQVEsRUFBRTVCLFlBQVk7NEJBQUVFLElBQUksRUFBQyxPQUFPOzRCQUFDb0IsU0FBUyxFQUFDLGNBQWM7NEJBQUNPLEVBQUUsRUFBQyx1QkFBdUI7NEJBQUNFLFdBQVcsRUFBQyxZQUFZOzs7OztnQ0FBRzs7Ozs7O3dCQUNySTs4QkFDTiw4REFBQ0UsUUFBTTtvQkFBQ04sSUFBSSxFQUFDLFFBQVE7b0JBQUNPLE9BQU8sRUFBRXZCLFlBQVk7b0JBQUVXLFNBQVMsRUFBQyxpQkFBaUI7OEJBQUMsUUFBTTs7Ozs7d0JBQVM7Z0JBRXZGMUIsT0FBTyxrQkFDSiw4REFBQ3lCLEtBQUc7b0JBQUNDLFNBQVMsRUFBQyx5REFBeUQ7O3NDQUNwRSw4REFBQzlCLG1CQUFpQjtzQ0FBQyxHQUFDOzs7OztnQ0FBb0I7c0NBQ3hDLDhEQUFDMkMsR0FBQzs0QkFBQ2IsU0FBUyxFQUFDLGNBQWM7c0NBQUMsNEJBQTBCOzs7OztnQ0FBSTs7Ozs7O3dCQUN4RDs7Ozs7O2dCQUlSOzs7OztZQUNKLENBQ1Q7QUFDTCxDQUFDO0dBOURRN0IsUUFBUTtBQUFSQSxLQUFBQSxRQUFRO0FBZ0VqQiwrREFBZUEsUUFBUSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDYWxsYmFjaywgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgJ2Jvb3RzdHJhcC9kaXN0L2Nzcy9ib290c3RyYXAuY3NzJztcclxuaW1wb3J0IGxvYWRpbmdfY29tcG9uZW50IGZyb20gJy4vbG9hZGluZ19jb21wb25lbnQnO1xyXG5mdW5jdGlvbiBNcGVzYUFwaSgpIHtcclxuICAgIGNvbnN0IFt2aWRlb3MsIHNldFZpZGVvc10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtkZXRhaWxzLCBzZXREZXRhaWxzXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbmFtZSA9IGUudGFyZ2V0Lm5hbWU7XHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgICBzZXREZXRhaWxzKChwcmV2KSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfTtcclxuICAgIGNvbnNvbGUubG9nKGRldGFpbHMucGhvbmUpO1xyXG4gICAgY29uc3QgdXJsID0gYGh0dHBzOi8vY2FzaHdheXRyYWRlcnMuY29tL3gtbXBlc2EtYXBpLnBocD9waG9uZT0ke2RldGFpbHMucGhvbmV9JmFtb3VudD0ke2RldGFpbHMuYW1vdW50fWA7XHJcbiAgICBjb25zdCBmZXRjaFJlcXVlc3QgPSB1c2VDYWxsYmFjaygoKSA9PiB7XHJcbiAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICBmZXRjaCh1cmwsIHtcclxuICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcclxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLCB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKChyZXMpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcy5qc29uKCkudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VmlkZW9zKHJlc3BvbnNlKVxyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfSwgW10pO1xyXG5cclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J210LTUnPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGgzPlxyXG4gICAgICAgICAgICAgICAgICAgIE0tUEVTQSBBUElcclxuICAgICAgICAgICAgICAgIDwvaDM+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImV4YW1wbGVJbnB1dEVtYWlsMVwiPkFtb3VudDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sXCIgbmFtZT0nYW1vdW50JyBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfSBpZD1cImV4YW1wbGVJbnB1dEVtYWlsMVwiIGFyaWEtZGVzY3JpYmVkYnk9XCJlbWFpbEhlbHBcIiBwbGFjZWhvbGRlcj1cIkVudGVyIGFtb3VudFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNtYWxsIGlkPVwiZW1haWxIZWxwXCIgY2xhc3NOYW1lPVwiZm9ybS10ZXh0IHRleHQtbXV0ZWRcIj5XZSBhY2NlcHQgYWxsIGRlbm9taW5hdGlvbnM8L3NtYWxsPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvcm0tZ3JvdXAgbWItMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCI+TW9iaWxlIE51bWJlcjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX0gbmFtZT0ncGhvbmUnIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiIGlkPVwiZXhhbXBsZUlucHV0UGFzc3dvcmQxXCIgcGxhY2Vob2xkZXI9XCJNb2JpbGUgTm8uXCIgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17ZmV0Y2hSZXF1ZXN0fSBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5TdWJtaXQ8L2J1dHRvbj5cclxuXHJcbiAgICAgICAgICAgICAgICB7bG9hZGluZyAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGgtZnVsbCB3LWZ1bGwganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsb2FkaW5nX2NvbXBvbmVudD4gPC9sb2FkaW5nX2NvbXBvbmVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicHktMSB0ZXh0LXhzXCI+SW5pdGlhdGluZyB0cmFuc2FjdGlvbnMuLi48L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNcGVzYUFwaSJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJsb2FkaW5nX2NvbXBvbmVudCIsIk1wZXNhQXBpIiwidmlkZW9zIiwic2V0VmlkZW9zIiwibG9hZGluZyIsInNldExvYWRpbmciLCJkZXRhaWxzIiwic2V0RGV0YWlscyIsImhhbmRsZUNoYW5nZSIsImUiLCJuYW1lIiwidGFyZ2V0IiwidmFsdWUiLCJwcmV2IiwiY29uc29sZSIsImxvZyIsInBob25lIiwidXJsIiwiYW1vdW50IiwiZmV0Y2hSZXF1ZXN0IiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwidGhlbiIsInJlcyIsImpzb24iLCJyZXNwb25zZSIsImNhdGNoIiwiZXJyIiwiZGl2IiwiY2xhc3NOYW1lIiwiaDMiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsInR5cGUiLCJvbkNoYW5nZSIsImlkIiwiYXJpYS1kZXNjcmliZWRieSIsInBsYWNlaG9sZGVyIiwic21hbGwiLCJidXR0b24iLCJvbkNsaWNrIiwicCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});