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
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   AuthProvider: () => (/* binding */ AuthProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! nookies */ \"nookies\");\n/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _services_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/services/auth */ \"./src/services/auth.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_services_auth__WEBPACK_IMPORTED_MODULE_4__]);\n_services_auth__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// ESSE ARQUIVO EXECUTA DO LADO DO BROWSER \n\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction AuthProvider({ children }) {\n    const [user, setUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const isAuthenticated = !!user;\n    // ver se tem um token salvo nos cookies\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const { \"2you.token\": token } = (0,nookies__WEBPACK_IMPORTED_MODULE_2__.parseCookies)();\n        if (token) {\n            (0,_services_auth__WEBPACK_IMPORTED_MODULE_4__.recoverUserInformation)().then((response)=>{\n                setUser(response.user);\n            });\n        }\n    }, []);\n    async function signIn({ email, password }) {\n        const { token, user } = await (0,_services_auth__WEBPACK_IMPORTED_MODULE_4__.signInRequest)({\n            email,\n            password\n        });\n        (0,nookies__WEBPACK_IMPORTED_MODULE_2__.setCookie)(undefined, \"2you.token\", token, {\n            //è obrigatório informar por quanto tempo esse cookie vai existir :maxAge:\n            maxAge: 60 * 60 * 1 // 1 hora isso é igual a ==> 60segundos * 60minutos * 1hora\n        });\n        setUser(user);\n        next_router__WEBPACK_IMPORTED_MODULE_3___default().push(\"/dashboard\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n        value: {\n            user,\n            isAuthenticated,\n            signIn\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mrnascimento\\\\Documents\\\\Developer\\\\natalia website\\\\2you\\\\src\\\\contexts\\\\AuthContext.tsx\",\n        lineNumber: 65,\n        columnNumber: 9\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGV4dHMvQXV0aENvbnRleHQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMkNBQTJDOztBQUNnQjtBQUNUO0FBQ2pCO0FBRXVDO0FBdUJqRSxNQUFNUSw0QkFBY1Isb0RBQWFBLENBQUMsQ0FBQyxHQUFxQjtBQUV4RCxTQUFTUyxhQUFhLEVBQUVDLFFBQVEsRUFBTTtJQUV6QyxNQUFNLENBQUNDLE1BQU1DLFFBQVEsR0FBR1gsK0NBQVFBLENBQWM7SUFFOUMsTUFBTVksa0JBQWtCLENBQUMsQ0FBQ0Y7SUFFMUIsd0NBQXdDO0lBQ3hDVCxnREFBU0EsQ0FBQztRQUNOLE1BQU0sRUFBRSxjQUFjWSxLQUFLLEVBQUUsR0FBR1YscURBQVlBO1FBRTVDLElBQUlVLE9BQU87WUFDUFIsc0VBQXNCQSxHQUFHUyxJQUFJLENBQUNDLENBQUFBO2dCQUMxQkosUUFBUUksU0FBU0wsSUFBSTtZQUN6QjtRQUNKO0lBRUosR0FBRyxFQUFFO0lBRUwsZUFBZ0JNLE9BQU8sRUFBRUMsS0FBSyxFQUFFQyxRQUFRLEVBQWM7UUFDbEQsTUFBTSxFQUFFTCxLQUFLLEVBQUVILElBQUksRUFBRSxHQUFHLE1BQU1KLDZEQUFhQSxDQUFDO1lBQ3hDVztZQUNBQztRQUNKO1FBRUFoQixrREFBU0EsQ0FBQ2lCLFdBQVcsY0FBY04sT0FBTztZQUN0QywwRUFBMEU7WUFDMUVPLFFBQVEsS0FBSyxLQUFLLEVBQUUsMkRBQTJEO1FBQ25GO1FBQ0FULFFBQVFEO1FBRVJOLHVEQUFXLENBQUM7SUFDaEI7SUFFQSxxQkFDSSw4REFBQ0csWUFBWWUsUUFBUTtRQUFDQyxPQUFPO1lBQUViO1lBQU1FO1lBQWlCSTtRQUFPO2tCQUN4RFA7Ozs7OztBQUdiIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMnlvdS8uL3NyYy9jb250ZXh0cy9BdXRoQ29udGV4dC50c3g/MWZhMiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFU1NFIEFSUVVJVk8gRVhFQ1VUQSBETyBMQURPIERPIEJST1dTRVIgXHJcbmltcG9ydCB7IGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgc2V0Q29va2llLCBwYXJzZUNvb2tpZXMgfSBmcm9tIFwibm9va2llc1wiO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gXCJuZXh0L3JvdXRlclwiO1xyXG5cclxuaW1wb3J0IHsgcmVjb3ZlclVzZXJJbmZvcm1hdGlvbiwgc2lnbkluUmVxdWVzdCB9IGZyb20gXCJAL3NlcnZpY2VzL2F1dGhcIjtcclxuLy8gQ29uZmlndXJhw6fDo28gcGFyYSBhdXRlbnRpY2HDp8OjbyBlbSB0b2RvIGFwcC4gYWJzdHJhw6fDo28gZGUgX2FwcC50c3hcclxuXHJcbi8vUGFyYSBkZXNjb2JyaXIgcXVlIHRpcG8gZGUgZGFkb3MgdmFpIHRlciBlbSBhdXRoZW50aWNhdGVkXHJcbnR5cGUgVXNlciA9IHtcclxuICAgIG5hbWU6IHN0cmluZztcclxuICAgIGVtYWlsOiBzdHJpbmc7XHJcbiAgICBhdmF0YXJfdXJsOiBzdHJpbmc7XHJcblxyXG59XHJcblxyXG50eXBlIFNpZ25JbkRhdGEgPSB7XHJcbiAgICBlbWFpbDogc3RyaW5nO1xyXG4gICAgcGFzc3dvcmQ6IHN0cmluZztcclxufVxyXG5cclxudHlwZSBBdXRoQ29udGV4dFR5cGUgPSB7XHJcbiAgICBpc0F1dGhlbnRpY2F0ZWQ6IGJvb2xlYW47XHJcbiAgICB1c2VyOiBVc2VyIHwgbnVsbDtcclxuICAgIHNpZ25JbjogKGRhdGE6IFNpZ25JbkRhdGEpID0+IFByb21pc2U8dm9pZD5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30gYXMgQXV0aENvbnRleHRUeXBlKVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEF1dGhQcm92aWRlcih7IGNoaWxkcmVuIH06YW55KSB7XHJcblxyXG4gICAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGU8VXNlciB8IG51bGw+KG51bGwpXHJcblxyXG4gICAgY29uc3QgaXNBdXRoZW50aWNhdGVkID0gISF1c2VyO1xyXG5cclxuICAgIC8vIHZlciBzZSB0ZW0gdW0gdG9rZW4gc2Fsdm8gbm9zIGNvb2tpZXNcclxuICAgIHVzZUVmZmVjdCgoKT0+IHtcclxuICAgICAgICBjb25zdCB7ICcyeW91LnRva2VuJzogdG9rZW4gfSA9IHBhcnNlQ29va2llcygpXHJcblxyXG4gICAgICAgIGlmICh0b2tlbikge1xyXG4gICAgICAgICAgICByZWNvdmVyVXNlckluZm9ybWF0aW9uKCkudGhlbihyZXNwb25zZT0+IHtcclxuICAgICAgICAgICAgICAgIHNldFVzZXIocmVzcG9uc2UudXNlcilcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgfSwgW10pXHJcblxyXG4gICAgYXN5bmMgZnVuY3Rpb24gIHNpZ25Jbih7IGVtYWlsLCBwYXNzd29yZCB9OiBTaWduSW5EYXRhKSB7XHJcbiAgICAgICAgY29uc3QgeyB0b2tlbiwgdXNlciB9ID0gYXdhaXQgc2lnbkluUmVxdWVzdCh7XHJcbiAgICAgICAgICAgIGVtYWlsLFxyXG4gICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBzZXRDb29raWUodW5kZWZpbmVkLCAnMnlvdS50b2tlbicsIHRva2VuLCB7XHJcbiAgICAgICAgICAgIC8vw6ggb2JyaWdhdMOzcmlvIGluZm9ybWFyIHBvciBxdWFudG8gdGVtcG8gZXNzZSBjb29raWUgdmFpIGV4aXN0aXIgOm1heEFnZTpcclxuICAgICAgICAgICAgbWF4QWdlOiA2MCAqIDYwICogMSAvLyAxIGhvcmEgaXNzbyDDqSBpZ3VhbCBhID09PiA2MHNlZ3VuZG9zICogNjBtaW51dG9zICogMWhvcmFcclxuICAgICAgICB9KVxyXG4gICAgICAgIHNldFVzZXIodXNlcilcclxuXHJcbiAgICAgICAgUm91dGVyLnB1c2goJy9kYXNoYm9hcmQnKTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8QXV0aENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3sgdXNlciwgaXNBdXRoZW50aWNhdGVkLCBzaWduSW4gfX0+XHJcbiAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8L0F1dGhDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG4iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwidXNlRWZmZWN0Iiwic2V0Q29va2llIiwicGFyc2VDb29raWVzIiwiUm91dGVyIiwicmVjb3ZlclVzZXJJbmZvcm1hdGlvbiIsInNpZ25JblJlcXVlc3QiLCJBdXRoQ29udGV4dCIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwidXNlciIsInNldFVzZXIiLCJpc0F1dGhlbnRpY2F0ZWQiLCJ0b2tlbiIsInRoZW4iLCJyZXNwb25zZSIsInNpZ25JbiIsImVtYWlsIiwicGFzc3dvcmQiLCJ1bmRlZmluZWQiLCJtYXhBZ2UiLCJwdXNoIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/contexts/AuthContext.tsx\n");

/***/ }),

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./src/contexts/AuthContext.tsx\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__]);\n_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction App({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_2__.AuthProvider, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\mrnascimento\\\\Documents\\\\Developer\\\\natalia website\\\\2you\\\\src\\\\pages\\\\_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mrnascimento\\\\Documents\\\\Developer\\\\natalia website\\\\2you\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErQjtBQUN3QjtBQUd4QyxTQUFTQyxJQUFJLEVBQUVDLFNBQVMsRUFBRUMsU0FBUyxFQUFZO0lBQzVELHFCQUNFLDhEQUFDSCwrREFBWUE7a0JBQ1gsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFHOUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yeW91Ly4vc3JjL3BhZ2VzL19hcHAudHN4P2Y5ZDYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwiLi4vc3R5bGVzL2dsb2JhbHMuY3NzXCI7XG5pbXBvcnQgeyBBdXRoUHJvdmlkZXIgfSBmcm9tIFwiLi4vY29udGV4dHMvQXV0aENvbnRleHRcIjtcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tIFwibmV4dC9hcHBcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8QXV0aFByb3ZpZGVyPlxuICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvQXV0aFByb3ZpZGVyPlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkF1dGhQcm92aWRlciIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ }),

/***/ "./src/services/auth.ts":
/*!******************************!*\
  !*** ./src/services/auth.ts ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   recoverUserInformation: () => (/* binding */ recoverUserInformation),\n/* harmony export */   signInRequest: () => (/* binding */ signInRequest)\n/* harmony export */ });\n/* harmony import */ var uuid__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! uuid */ \"uuid\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([uuid__WEBPACK_IMPORTED_MODULE_0__]);\nuuid__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n// ISTO É PARA SIMULAR O BACKEND!!!!!!!\n\n// Simular demora! Apenas para desenvolvimento LOCALHOST\nconst delay = (amount = 750)=>new Promise((resolve)=>setTimeout(resolve, amount));\n//Apenas para local\nasync function signInRequest(data) {\n    await delay();\n    return {\n        token: (0,uuid__WEBPACK_IMPORTED_MODULE_0__.v4)(),\n        user: {\n            name: \"Matheus Roger\",\n            email: \"roger@x.com.br\",\n            avatar_url: \"https://github.com/iroger.png\"\n        }\n    };\n}\nasync function recoverUserInformation() {\n    await delay();\n    return {\n        user: {\n            name: \"Matheus Roger\",\n            email: \"roger@x.com.br\",\n            avatar_url: \"https://github.com/iroger.png\"\n        }\n    };\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZXMvYXV0aC50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Q0FBdUM7QUFDTDtBQU9sQyx3REFBd0Q7QUFDeEQsTUFBTUUsUUFBUSxDQUFDQyxTQUFTLEdBQUcsR0FBSyxJQUFJQyxRQUFRQyxDQUFBQSxVQUFXQyxXQUFXRCxTQUFTRjtBQUMzRSxtQkFBbUI7QUFDWixlQUFlSSxjQUFjQyxJQUF1QjtJQUN2RCxNQUFNTjtJQUVOLE9BQU87UUFDSE8sT0FBT1Isd0NBQUlBO1FBQ1hTLE1BQU07WUFDRkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLFlBQVk7UUFDaEI7SUFFSjtBQUNKO0FBRU8sZUFBZUM7SUFDbEIsTUFBTVo7SUFFTixPQUFPO1FBQ0hRLE1BQU07WUFDRkMsTUFBTTtZQUNOQyxPQUFPO1lBQ1BDLFlBQVk7UUFDaEI7SUFDSjtBQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vMnlvdS8uL3NyYy9zZXJ2aWNlcy9hdXRoLnRzP2I4MGQiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSVNUTyDDiSBQQVJBIFNJTVVMQVIgTyBCQUNLRU5EISEhISEhIVxyXG5pbXBvcnQgeyB2NCBhcyB1dWlkIH0gZnJvbSAndXVpZCc7XHJcblxyXG50eXBlIFNpZ25JblJlcXVlc3REYXRhID0ge1xyXG4gICAgZW1haWw6IHN0cmluZztcclxuICAgIHBhc3N3b3JkOiBzdHJpbmc7XHJcbn1cclxuXHJcbi8vIFNpbXVsYXIgZGVtb3JhISBBcGVuYXMgcGFyYSBkZXNlbnZvbHZpbWVudG8gTE9DQUxIT1NUXHJcbmNvbnN0IGRlbGF5ID0gKGFtb3VudCA9IDc1MCkgPT4gbmV3IFByb21pc2UocmVzb2x2ZSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIGFtb3VudCkpXHJcbi8vQXBlbmFzIHBhcmEgbG9jYWxcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25JblJlcXVlc3QoZGF0YTogU2lnbkluUmVxdWVzdERhdGEpIHtcclxuICAgIGF3YWl0IGRlbGF5KClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRva2VuOiB1dWlkKCksXHJcbiAgICAgICAgdXNlcjoge1xyXG4gICAgICAgICAgICBuYW1lOiAnTWF0aGV1cyBSb2dlcicsXHJcbiAgICAgICAgICAgIGVtYWlsOiAncm9nZXJAeC5jb20uYnInLFxyXG4gICAgICAgICAgICBhdmF0YXJfdXJsOiAnaHR0cHM6Ly9naXRodWIuY29tL2lyb2dlci5wbmcnXHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlY292ZXJVc2VySW5mb3JtYXRpb24oKSB7XHJcbiAgICBhd2FpdCBkZWxheSgpXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyOiB7XHJcbiAgICAgICAgICAgIG5hbWU6ICdNYXRoZXVzIFJvZ2VyJyxcclxuICAgICAgICAgICAgZW1haWw6ICdyb2dlckB4LmNvbS5icicsXHJcbiAgICAgICAgICAgIGF2YXRhcl91cmw6ICdodHRwczovL2dpdGh1Yi5jb20vaXJvZ2VyLnBuZydcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXSwibmFtZXMiOlsidjQiLCJ1dWlkIiwiZGVsYXkiLCJhbW91bnQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInNldFRpbWVvdXQiLCJzaWduSW5SZXF1ZXN0IiwiZGF0YSIsInRva2VuIiwidXNlciIsIm5hbWUiLCJlbWFpbCIsImF2YXRhcl91cmwiLCJyZWNvdmVyVXNlckluZm9ybWF0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/services/auth.ts\n");

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