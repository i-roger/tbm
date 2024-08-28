"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: function() { return /* binding */ AuthContext; },\n/* harmony export */   AuthProvider: function() { return /* binding */ AuthProvider; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"./node_modules/nookies/dist/index.js\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/services/auth */ \"./src/services/auth.ts\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);\n// ESSE ARQUIVO EXECUTA DO LADO DO BROWSER \n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AuthProvider(param) {\n    let { children } = param;\n    _s();\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const isAuthenticated = !!user;\n    // ver se tem um token salvo nos cookies\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    async function signIn(param) {\n        let { email, password } = param;\n        const { token, user } = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_3__.signInRequest)({\n            email,\n            password\n        });\n        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(undefined, \"2you.token\", token, {\n            //è obrigatório informar por quanto tempo esse cookie vai existir :maxAge:\n            maxAge: 60 * 60 * 1 // 1 hora isso é igual a ==> 60segundos * 60minutos * 1hora\n        });\n        setUser(user);\n        next_router__WEBPACK_IMPORTED_MODULE_4___default().push(\"/dashboard\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mrnascimento\\\\Documents\\\\Developer\\\\natalia website\\\\2you\\\\src\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 58,\n        columnNumber: 9\n    }, this);\n}\n_s(AuthProvider, \"5s2qRsV95gTJBmaaTh11GoxYeGE=\");\n_c = AuthProvider;\nvar _c;\n$RefreshReg$(_c, \"AuthProvider\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJDOzs7QUFDZ0I7QUFDVDtBQUNGO0FBRWhCO0FBdUJ6QixNQUFNTSw0QkFBY04sb0RBQWFBLENBQUMsQ0FBQyxHQUFxQjtBQUV4RCxTQUFTTyxhQUFhLEtBQWdCO1FBQWhCLEVBQUVDLFFBQVEsRUFBTSxHQUFoQjs7SUFFekIsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdULCtDQUFRQSxDQUFjO0lBRTlDLE1BQU1VLGtCQUFrQixDQUFDLENBQUNGO0lBRTFCLHdDQUF3QztJQUN4Q1AsZ0RBQVNBLENBQUMsS0FFVixHQUFHLEVBQUU7SUFFTCxlQUFnQlUsT0FBTyxLQUErQjtZQUEvQixFQUFFQyxLQUFLLEVBQUVDLFFBQVEsRUFBYyxHQUEvQjtRQUNuQixNQUFNLEVBQUVDLEtBQUssRUFBRU4sSUFBSSxFQUFFLEdBQUcsTUFBTUwsNkRBQWFBLENBQUM7WUFDeENTO1lBQ0FDO1FBQ0o7UUFFQVgsa0RBQVNBLENBQUNhLFdBQVcsY0FBY0QsT0FBTztZQUN0QywwRUFBMEU7WUFDMUVFLFFBQVEsS0FBSyxLQUFLLEVBQUUsMkRBQTJEO1FBQ25GO1FBQ0FQLFFBQVFEO1FBRVJKLHVEQUFXLENBQUM7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0MsWUFBWWEsUUFBUTtRQUFDQyxPQUFPO1lBQUVYO1lBQU1FO1lBQWlCQztRQUFPO2tCQUN4REo7Ozs7OztBQUdiO0dBL0JnQkQ7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0F1dGhDb250ZXh0LnRzeD8xZmEyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEVTU0UgQVJRVUlWTyBFWEVDVVRBIERPIExBRE8gRE8gQlJPV1NFUiBcclxuaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBzZXRDb29raWUsIHBhcnNlQ29va2llcyB9IGZyb20gXCJub29raWVzXCI7XHJcbmltcG9ydCB7IHNpZ25JblJlcXVlc3QgfSBmcm9tIFwiQC9zZXJ2aWNlcy9hdXRoXCI7XHJcblxyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiXHJcbi8vIENvbmZpZ3VyYcOnw6NvIHBhcmEgYXV0ZW50aWNhw6fDo28gZW0gdG9kbyBhcHAuIGFic3RyYcOnw6NvIGRlIF9hcHAudHN4XHJcblxyXG4vL1BhcmEgZGVzY29icmlyIHF1ZSB0aXBvIGRlIGRhZG9zIHZhaSB0ZXIgZW0gYXV0aGVudGljYXRlZFxyXG50eXBlIFVzZXIgPSB7XHJcbiAgICBuYW1lOiBzdHJpbmc7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgYXZhdGFyX3VybDogc3RyaW5nO1xyXG5cclxufVxyXG5cclxudHlwZSBTaWduSW5EYXRhID0ge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbnR5cGUgQXV0aENvbnRleHRUeXBlID0ge1xyXG4gICAgaXNBdXRoZW50aWNhdGVkOiBib29sZWFuO1xyXG4gICAgdXNlcjogVXNlciB8IG51bGw7XHJcbiAgICBzaWduSW46IChkYXRhOiBTaWduSW5EYXRhKSA9PiBQcm9taXNlPHZvaWQ+XHJcbn1cclxuXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIEF1dGhDb250ZXh0VHlwZSlcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBBdXRoUHJvdmlkZXIoeyBjaGlsZHJlbiB9OmFueSkge1xyXG5cclxuICAgIGNvbnN0IFt1c2VyLCBzZXRVc2VyXSA9IHVzZVN0YXRlPFVzZXIgfCBudWxsPihudWxsKVxyXG5cclxuICAgIGNvbnN0IGlzQXV0aGVudGljYXRlZCA9ICEhdXNlcjtcclxuXHJcbiAgICAvLyB2ZXIgc2UgdGVtIHVtIHRva2VuIHNhbHZvIG5vcyBjb29raWVzXHJcbiAgICB1c2VFZmZlY3QoKCk9PiB7XHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gIHNpZ25Jbih7IGVtYWlsLCBwYXNzd29yZCB9OiBTaWduSW5EYXRhKSB7XHJcbiAgICAgICAgY29uc3QgeyB0b2tlbiwgdXNlciB9ID0gYXdhaXQgc2lnbkluUmVxdWVzdCh7XHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkLCAnMnlvdS50b2tlbicsIHRva2VuLCB7XHJcbiAgICAgICAgICAgIC8vw6ggb2JyaWdhdMOzcmlvIGluZm9ybWFyIHBvciBxdWFudG8gdGVtcG8gZXNzZSBjb29raWUgdmFpIGV4aXN0aXIgOm1heEFnZTpcclxuICAgICAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMSAvLyAxIGhvcmEgaXNzbyDDqSBpZ3VhbCBhID09PiA2MHNlZ3VuZG9zICogNjBtaW51dG9zICogMWhvcmFcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFVzZXIodXNlcilcclxuXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBzaWduSW4gfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2V0Q29va2llIiwic2lnbkluUmVxdWVzdCIsIlJvdXRlciIsIkF1dGhDb250ZXh0IiwiQXV0aFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VyIiwic2V0VXNlciIsImlzQXV0aGVudGljYXRlZCIsInNpZ25JbiIsImVtYWlsIiwicGFzc3dvcmQiLCJ0b2tlbiIsInVuZGVmaW5lZCIsIm1heEFnZSIsInB1c2giLCJQcm92aWRlciIsInZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n"));

/***/ })

});