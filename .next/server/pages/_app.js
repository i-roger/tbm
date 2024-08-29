/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./src/contexts/AuthContext.tsx":
/*!**************************************!*\
  !*** ./src/contexts/AuthContext.tsx ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api */ \"./src/services/api.ts\");\n/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/services/auth */ \"./src/services/auth.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_auth__WEBPACK_IMPORTED_MODULE_5__]);\n_services_auth__WEBPACK_IMPORTED_MODULE_5__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// ESSE ARQUIVO EXECUTA DO LADO DO BROWSER \n\n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const isAuthenticated = !!user;\n    // ver se tem um token salvo nos cookies\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"2you.token\": token } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)();\n        if (token) {\n            (0,_services_auth__WEBPACK_IMPORTED_MODULE_5__.recoverUserInformation)().then((response)=>{\n                setUser(response.user);\n            });\n        }\n    }, []);\n    async function signIn({ email, password }) {\n        const { token, user } = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_5__.signInRequest)({\n            email,\n            password\n        });\n        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(undefined, \"2you.token\", token, {\n            //è obrigatório informar por quanto tempo esse cookie vai existir :maxAge:\n            maxAge: 60 * 60 * 1 // 1 hora isso é igual a ==> 60segundos * 60minutos * 1hora\n        });\n        _services_api__WEBPACK_IMPORTED_MODULE_4__.api.defaults.headers[\"Authorization\"] = `Bearer ${token}`;\n        setUser(user);\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/dashboard\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn\n        },\n        children: [\n            children,\n            \" \"\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mrnascimento\\\\Documents\\\\Developer\\\\natalia website\\\\2you\\\\src\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 69,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUEyQzs7QUFDZ0I7QUFDVDtBQUNqQjtBQUNLO0FBRWtDO0FBdUJqRSxNQUFNUyw0QkFBY1Qsb0RBQWFBLENBQUMsQ0FBQyxHQUFxQjtBQUV4RCxTQUFTVSxhQUFhLEVBQUNDLFFBQVEsRUFBZ0M7SUFFbEUsTUFBTSxDQUFDQyxNQUFNQyxRQUFRLEdBQUdaLCtDQUFRQSxDQUFjO0lBRTlDLE1BQU1hLGtCQUFrQixDQUFDLENBQUNGO0lBRTFCLHdDQUF3QztJQUN4Q1YsZ0RBQVNBLENBQUM7UUFDTixNQUFNLEVBQUUsY0FBY2EsS0FBSyxFQUFFLEdBQUdYLHFEQUFZQTtRQUU1QyxJQUFJVyxPQUFPO1lBQ1BSLHNFQUFzQkEsR0FBR1MsSUFBSSxDQUFDQyxDQUFBQTtnQkFDMUJKLFFBQVFJLFNBQVNMLElBQUk7WUFDekI7UUFDSjtJQUVKLEdBQUcsRUFBRTtJQUVMLGVBQWdCTSxPQUFPLEVBQUVDLEtBQUssRUFBRUMsUUFBUSxFQUFjO1FBQ2xELE1BQU0sRUFBRUwsS0FBSyxFQUFFSCxJQUFJLEVBQUUsR0FBRyxNQUFNSiw2REFBYUEsQ0FBQztZQUN4Q1c7WUFDQUM7UUFDSjtRQUVBakIsa0RBQVNBLENBQUNrQixXQUFXLGNBQWNOLE9BQU87WUFDdEMsMEVBQTBFO1lBQzFFTyxRQUFRLEtBQUssS0FBSyxFQUFFLDJEQUEyRDtRQUNuRjtRQUVBaEIsOENBQUdBLENBQUNpQixRQUFRLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLE9BQU8sRUFBRVQsTUFBTSxDQUFDO1FBRXpERixRQUFRRDtRQUVSUCx1REFBVyxDQUFDO0lBQ2hCO0lBRUEscUJBQ0ksOERBQUNJLFlBQVlpQixRQUFRO1FBQUNDLE9BQU87WUFBRWY7WUFBTUU7WUFBaUJJO1FBQU87O1lBQ3hEUDtZQUFTOzs7Ozs7O0FBR3RCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMnlvdS8uL3NyYy9jb250ZXh0cy9BdXRoQ29udGV4dC50c3g/MWZhMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFU1NFIEFSUVVJVk8gRVhFQ1VUQSBETyBMQURPIERPIEJST1dTRVIgXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2V0Q29va2llLCBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5pbXBvcnQgeyBhcGkgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XHJcblxyXG5pbXBvcnQgeyByZWNvdmVyVXNlckluZm9ybWF0aW9uLCBzaWduSW5SZXF1ZXN0IH0gZnJvbSBcIkAvc2VydmljZXMvYXV0aFwiO1xyXG4vLyBDb25maWd1cmHDp8OjbyBwYXJhIGF1dGVudGljYcOnw6NvIGVtIHRvZG8gYXBwLiBhYnN0cmHDp8OjbyBkZSBfYXBwLnRzeFxyXG5cclxuLy9QYXJhIGRlc2NvYnJpciBxdWUgdGlwbyBkZSBkYWRvcyB2YWkgdGVyIGVtIGF1dGhlbnRpY2F0ZWRcclxudHlwZSBVc2VyID0ge1xyXG4gICAgbmFtZTogc3RyaW5nO1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIGF2YXRhcl91cmw6IHN0cmluZztcclxuXHJcbn1cclxuXHJcbnR5cGUgU2lnbkluRGF0YSA9IHtcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBwYXNzd29yZDogc3RyaW5nO1xyXG59XHJcblxyXG50eXBlIEF1dGhDb250ZXh0VHlwZSA9IHtcclxuICAgIGlzQXV0aGVudGljYXRlZDogYm9vbGVhbjtcclxuICAgIHVzZXI6IFVzZXIgfCBudWxsO1xyXG4gICAgc2lnbkluOiAoZGF0YTogU2lnbkluRGF0YSkgPT4gUHJvbWlzZTx2b2lkPlxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhDb250ZXh0ID0gY3JlYXRlQ29udGV4dCh7fSBhcyBBdXRoQ29udGV4dFR5cGUpXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gQXV0aFByb3ZpZGVyKHtjaGlsZHJlbn06IHsgY2hpbGRyZW46IFJlYWN0LlJlYWN0Tm9kZSB9KSB7XHJcblxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpXHJcblxyXG4gICAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gISF1c2VyO1xyXG5cclxuICAgIC8vIHZlciBzZSB0ZW0gdW0gdG9rZW4gc2Fsdm8gbm9zIGNvb2tpZXNcclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBjb25zdCB7ICcyeW91LnRva2VuJzogdG9rZW4gfSA9IHBhcnNlQ29va2llcygpXHJcblxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICByZWNvdmVyVXNlckluZm9ybWF0aW9uKCkudGhlbihyZXNwb25zZT0+IHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gIHNpZ25Jbih7IGVtYWlsLCBwYXNzd29yZCB9OiBTaWduSW5EYXRhKSB7XHJcbiAgICAgICAgY29uc3QgeyB0b2tlbiwgdXNlciB9ID0gYXdhaXQgc2lnbkluUmVxdWVzdCh7XHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkLCAnMnlvdS50b2tlbicsIHRva2VuLCB7XHJcbiAgICAgICAgICAgIC8vw6ggb2JyaWdhdMOzcmlvIGluZm9ybWFyIHBvciBxdWFudG8gdGVtcG8gZXNzZSBjb29raWUgdmFpIGV4aXN0aXIgOm1heEFnZTpcclxuICAgICAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMSAvLyAxIGhvcmEgaXNzbyDDqSBpZ3VhbCBhID09PiA2MHNlZ3VuZG9zICogNjBtaW51dG9zICogMWhvcmFcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBhcGkuZGVmYXVsdHMuaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gYEJlYXJlciAke3Rva2VufWA7XHJcblxyXG4gICAgICAgIHNldFVzZXIodXNlcilcclxuXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBzaWduSW4gfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn0gey8qIFFVQUwgRVJSTyBFU1TDgCBEQU5ETyBBUVVJISAqL31cclxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2V0Q29va2llIiwicGFyc2VDb29raWVzIiwiUm91dGVyIiwiYXBpIiwicmVjb3ZlclVzZXJJbmZvcm1hdGlvbiIsInNpZ25JblJlcXVlc3QiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ0b2tlbiIsInRoZW4iLCJyZXNwb25zZSIsInNpZ25JbiIsImVtYWlsIiwicGFzc3dvcmQiLCJ1bmRlZmluZWQiLCJtYXhBZ2UiLCJkZWZhdWx0cyIsImhlYWRlcnMiLCJwdXNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);\n_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mrnascimento\\\\Documents\\\\Developer\\\\natalia website\\\\2you\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mrnascimento\\\\Documents\\\\Developer\\\\natalia website\\\\2you\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErQjtBQUN3QjtBQUd4QyxTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELHFCQUNFLDhEQUFDSCwrREFBWUE7a0JBQ1gsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yeW91Ly4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvQXV0aENvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var _axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./axios */ \"./src/services/axios.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_axios__WEBPACK_IMPORTED_MODULE_0__]);\n_axios__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n// Inicializando Axios\n// Enviar os tokens em toda requisição para ter authentication.\n// Chamadas que não são server side rendering.. usando \"api\"\nconst api = (0,_axios__WEBPACK_IMPORTED_MODULE_0__.getAPIClient)();\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXBpLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXVDO0FBQ3ZDLHNCQUFzQjtBQUN0QiwrREFBK0Q7QUFFL0QsNERBQTREO0FBQ3JELE1BQU1DLE1BQU1ELG9EQUFZQSxHQUFHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMnlvdS8uL3NyYy9zZXJ2aWNlcy9hcGkudHM/OTU2ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXRBUElDbGllbnQgfSBmcm9tICcuL2F4aW9zJztcclxuLy8gSW5pY2lhbGl6YW5kbyBBeGlvc1xyXG4vLyBFbnZpYXIgb3MgdG9rZW5zIGVtIHRvZGEgcmVxdWlzacOnw6NvIHBhcmEgdGVyIGF1dGhlbnRpY2F0aW9uLlxyXG5cclxuLy8gQ2hhbWFkYXMgcXVlIG7Do28gc8OjbyBzZXJ2ZXIgc2lkZSByZW5kZXJpbmcuLiB1c2FuZG8gXCJhcGlcIlxyXG5leHBvcnQgY29uc3QgYXBpID0gZ2V0QVBJQ2xpZW50KCk7Il0sIm5hbWVzIjpbImdldEFQSUNsaWVudCIsImFwaSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/api.ts\n");

/***/ }),

/***/ "./src/services/auth.ts":
/*!******************************!*\
  !*** ./src/services/auth.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   recoverUserInformation: () => (/* binding */ recoverUserInformation),\n/* harmony export */   signInRequest: () => (/* binding */ signInRequest)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_0__]);\nuuid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// ISTO É PARA SIMULAR O BACKEND!!!!!!!\n\n// Simular demora! Apenas para desenvolvimento LOCALHOST\nconst delay = (amount = 750)=>new Promise((resolve)=>setTimeout(resolve, amount));\n//Apenas para local\nasync function signInRequest(data) {\n    await delay();\n    return {\n        token: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),\n        user: {\n            name: \"Matheus Roger\",\n            email: \"roger@x.com.br\",\n            avatar_url: \"https://github.com/i-roger.png\"\n        }\n    };\n}\nasync function recoverUserInformation() {\n    await delay();\n    return {\n        user: {\n            name: \"Matheus Roger\",\n            email: \"roger@x.com.br\",\n            avatar_url: \"https://github.com/i-roger.png\"\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Q0FBdUM7QUFDTDtBQU9sQyx3REFBd0Q7QUFDeEQsTUFBTUUsUUFBUSxDQUFDQyxTQUFTLEdBQUcsR0FBSyxJQUFJQyxRQUFRQyxDQUFBQSxVQUFXQyxXQUFXRCxTQUFTRjtBQUMzRSxtQkFBbUI7QUFDWixlQUFlSSxjQUFjQyxJQUF1QjtJQUN2RCxNQUFNTjtJQUVOLE9BQU87UUFDSE8sT0FBT1Isd0NBQUlBO1FBQ1hTLE1BQU07WUFDRkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLFlBQVk7UUFDaEI7SUFFSjtBQUNKO0FBRU8sZUFBZUM7SUFDbEIsTUFBTVo7SUFFTixPQUFPO1FBQ0hRLE1BQU07WUFDRkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLFlBQVk7UUFDaEI7SUFDSjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMnlvdS8uL3NyYy9zZXJ2aWNlcy9hdXRoLnRzP2I4MGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSVNUTyDDiSBQQVJBIFNJTVVMQVIgTyBCQUNLRU5EISEhISEhIVxyXG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XHJcblxyXG50eXBlIFNpZ25JblJlcXVlc3REYXRhID0ge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIFNpbXVsYXIgZGVtb3JhISBBcGVuYXMgcGFyYSBkZXNlbnZvbHZpbWVudG8gTE9DQUxIT1NUXHJcbmNvbnN0IGRlbGF5ID0gKGFtb3VudCA9IDc1MCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGFtb3VudCkpXHJcbi8vQXBlbmFzIHBhcmEgbG9jYWxcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25JblJlcXVlc3QoZGF0YTogU2lnbkluUmVxdWVzdERhdGEpIHtcclxuICAgIGF3YWl0IGRlbGF5KClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRva2VuOiB1dWlkKCksXHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICBuYW1lOiAnTWF0aGV1cyBSb2dlcicsXHJcbiAgICAgICAgICAgIGVtYWlsOiAncm9nZXJAeC5jb20uYnInLFxyXG4gICAgICAgICAgICBhdmF0YXJfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2ktcm9nZXIucG5nJ1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWNvdmVyVXNlckluZm9ybWF0aW9uKCkge1xyXG4gICAgYXdhaXQgZGVsYXkoKVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICBuYW1lOiAnTWF0aGV1cyBSb2dlcicsXHJcbiAgICAgICAgICAgIGVtYWlsOiAncm9nZXJAeC5jb20uYnInLFxyXG4gICAgICAgICAgICBhdmF0YXJfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2ktcm9nZXIucG5nJ1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdLCJuYW1lcyI6WyJ2NCIsInV1aWQiLCJkZWxheSIsImFtb3VudCIsIlByb21pc2UiLCJyZXNvbHZlIiwic2V0VGltZW91dCIsInNpZ25JblJlcXVlc3QiLCJkYXRhIiwidG9rZW4iLCJ1c2VyIiwibmFtZSIsImVtYWlsIiwiYXZhdGFyX3VybCIsInJlY292ZXJVc2VySW5mb3JtYXRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/services/auth.ts\n");

/***/ }),

/***/ "./src/services/axios.ts":
/*!*******************************!*\
  !*** ./src/services/axios.ts ***!
  \*******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getAPIClient: () => (/* binding */ getAPIClient)\n/* harmony export */ });\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ \"axios\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_1__]);\naxios__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction getAPIClient(ctx) {\n    const { \"2you.token\": token } = (0,nookies__WEBPACK_IMPORTED_MODULE_0__.parseCookies)(ctx);\n    const api = axios__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create({\n        baseURL: \"http://localhost:3333/\"\n    });\n    // Para que a toda requisição seja feito o console.log\n    api.interceptors.request.use((config)=>{\n        console.log(config);\n        return config;\n    });\n    // Enviando JWT na requisição\n    if (token) {\n        api.defaults.headers[\"Authorization\"] = `Bearer ${token}`;\n    }\n    return api;\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXhpb3MudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUF1QztBQUNiO0FBR25CLFNBQVNFLGFBQWFDLEdBQVE7SUFDbkMsTUFBTSxFQUFFLGNBQWNDLEtBQUssRUFBRSxHQUFHSixxREFBWUEsQ0FBQ0c7SUFFN0MsTUFBTUUsTUFBTUosb0RBQVksQ0FBQztRQUN2Qk0sU0FBUztJQUNYO0lBRUEsc0RBQXNEO0lBQ3RERixJQUFJRyxZQUFZLENBQUNDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxDQUFBQTtRQUMzQkMsUUFBUUMsR0FBRyxDQUFDRjtRQUVaLE9BQU9BO0lBQ1Q7SUFFQSw2QkFBNkI7SUFDN0IsSUFBSVAsT0FBTztRQUNUQyxJQUFJUyxRQUFRLENBQUNDLE9BQU8sQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLE9BQU8sRUFBRVgsTUFBTSxDQUFDO0lBQzNEO0lBRUEsT0FBT0M7QUFDVCIsInNvdXJjZXMiOlsid2VicGFjazovLzJ5b3UvLi9zcmMvc2VydmljZXMvYXhpb3MudHM/MWU4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwYXJzZUNvb2tpZXMgfSBmcm9tICdub29raWVzJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QVBJQ2xpZW50KGN0eD86YW55KSB7XHJcbiAgY29uc3QgeyBcIjJ5b3UudG9rZW5cIjogdG9rZW4gfSA9IHBhcnNlQ29va2llcyhjdHgpO1xyXG5cclxuICBjb25zdCBhcGkgPSBheGlvcy5jcmVhdGUoe1xyXG4gICAgYmFzZVVSTDogXCJodHRwOi8vbG9jYWxob3N0OjMzMzMvXCIsIC8vVVJMIGRvIEJBQ0tFTkQgRklDVElDSU8hXHJcbiAgfSk7XHJcblxyXG4gIC8vIFBhcmEgcXVlIGEgdG9kYSByZXF1aXNpw6fDo28gc2VqYSBmZWl0byBvIGNvbnNvbGUubG9nXHJcbiAgYXBpLmludGVyY2VwdG9ycy5yZXF1ZXN0LnVzZShjb25maWcgPT4ge1xyXG4gICAgY29uc29sZS5sb2coY29uZmlnKTtcclxuXHJcbiAgICByZXR1cm4gY29uZmlnO1xyXG4gIH0pO1xyXG5cclxuICAvLyBFbnZpYW5kbyBKV1QgbmEgcmVxdWlzacOnw6NvXHJcbiAgaWYgKHRva2VuKSB7XHJcbiAgICBhcGkuZGVmYXVsdHMuaGVhZGVyc1tcIkF1dGhvcml6YXRpb25cIl0gPSBgQmVhcmVyICR7dG9rZW59YDtcclxuICB9XHJcblxyXG4gIHJldHVybiBhcGk7XHJcbn0iXSwibmFtZXMiOlsicGFyc2VDb29raWVzIiwiYXhpb3MiLCJnZXRBUElDbGllbnQiLCJjdHgiLCJ0b2tlbiIsImFwaSIsImNyZWF0ZSIsImJhc2VVUkwiLCJpbnRlcmNlcHRvcnMiLCJyZXF1ZXN0IiwidXNlIiwiY29uZmlnIiwiY29uc29sZSIsImxvZyIsImRlZmF1bHRzIiwiaGVhZGVycyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/services/axios.ts\n");

/***/ }),

/***/ "./src/styles/globals.css":
/*!********************************!*\
  !*** ./src/styles/globals.css ***!
  \********************************/
/***/ (() => {



/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "nookies":
/*!**************************!*\
  !*** external "nookies" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("nookies");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-dom");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = import("axios");;

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = import("uuid");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./src/pages/_app.tsx")));
module.exports = __webpack_exports__;

})();