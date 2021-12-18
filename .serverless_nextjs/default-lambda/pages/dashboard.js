"use strict";
(() => {
var exports = {};
exports.id = 26;
exports.ids = [26];
exports.modules = {

/***/ 53378:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ dashboard)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./components/PrivateRoute/index.js
var PrivateRoute = __webpack_require__(58272);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./contexts/UserContext.js
var UserContext = __webpack_require__(90933);
// EXTERNAL MODULE: ./components/Dashboard/Card/index.js + 1 modules
var Card = __webpack_require__(42432);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(60027);
;// CONCATENATED MODULE: ./styles/dashboard.js

const Container = styled_components_cjs/* default.main.withConfig */.ZP.main.withConfig({
  displayName: "dashboard__Container",
  componentId: "sc-bp2bca-0"
})(["margin-top:16px;padding:0 32px;"]);
const CardContainer = styled_components_cjs/* default.section.withConfig */.ZP.section.withConfig({
  displayName: "dashboard__CardContainer",
  componentId: "sc-bp2bca-1"
})(["font-family:Helvetica,arial,sans-serif;color:#fff;width:100%;.top{width:100%;.top-container{margin-bottom:16px;display:grid;grid-template-columns:1fr 60px;.title{h2{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:24px;font-weight:700;letter-spacing:-0.04em;line-height:28px;text-transform:none;}}}a{text-decoration:none;font-size:12px;font-weight:700;letter-spacing:0.1em;line-height:16px;text-transform:uppercase;color:#fff;}}.card-container{display:flex;gap:24px;flex-wrap:wrap;}"]);
// EXTERNAL MODULE: ./utils/Wrappers.js
var Wrappers = __webpack_require__(43968);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./pages/dashboard/index.js










let Dashboard = ({
  user
}) => {
  const {
    setSession,
    track,
    setTrack
  } = (0,react.useContext)(UserContext/* UserContext */.S);
  const {
    0: recentlyTracks,
    1: setRecentTracks
  } = (0,react.useState)([]);
  const {
    getMyRecentlyPlayedTracks
  } = (0,Wrappers/* default */.Z)();
  (0,react.useEffect)(() => {
    setSession(user === null || user === void 0 ? void 0 : user.session);
  }, [user]);
  (0,react.useEffect)(async () => {
    const data = await getMyRecentlyPlayedTracks();
    setRecentTracks(data);
  }, []);
  (0,react.useEffect)(() => {
    if (recentlyTracks.length > 0 && !track) {
      const tracks = recentlyTracks.map(track => track.uri);
      setTrack(tracks);
    }
  }, [recentlyTracks]);
  return /*#__PURE__*/jsx_runtime.jsx(Container, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(CardContainer, {
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: "top",
        children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
          className: "top-container",
          children: [/*#__PURE__*/jsx_runtime.jsx("div", {
            className: "title",
            children: /*#__PURE__*/jsx_runtime.jsx("h2", {
              children: "Recently played"
            })
          }), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
            href: "#",
            className: "more",
            children: "See All"
          })]
        })
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "card-container",
        children: recentlyTracks.map((el, idx) => /*#__PURE__*/jsx_runtime.jsx(Card/* default */.Z, {
          idx: idx,
          name: el.name,
          image: el.image,
          type: el.type,
          uri: el.uri,
          id: el.id,
          card: recentlyTracks,
          wrapper: "getMyRecentlyPlayedTracks"
        }, idx))
      })]
    })
  });
};

/* harmony default export */ const dashboard = ((0,PrivateRoute/* default */.Z)(Dashboard));

/***/ }),

/***/ 31036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps),
/* harmony export */   "getStaticPaths": () => (/* binding */ getStaticPaths),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps),
/* harmony export */   "unstable_getStaticParams": () => (/* binding */ unstable_getStaticParams),
/* harmony export */   "unstable_getStaticProps": () => (/* binding */ unstable_getStaticProps),
/* harmony export */   "unstable_getStaticPaths": () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   "unstable_getServerProps": () => (/* binding */ unstable_getServerProps),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "_app": () => (/* binding */ _app),
/* harmony export */   "renderReqToHTML": () => (/* binding */ renderReqToHTML),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70607);
/* harmony import */ var next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_node_polyfill_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59450);
/* harmony import */ var private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(97020);
/* harmony import */ var private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(73978);
/* harmony import */ var next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(99436);

      
      
      
      

      
      const { processEnv } = __webpack_require__(72333)
      processEnv([{"path":".env.local","contents":"#SPOTIFY\nSPOTIFY_CLIENT_ID=e57f6cd2a1df46fc8d080f45720be116\nSPOTIFY_CLIENT_SECRET=62ae2f6b9e50426588b8ea1ef5102c8a\nSPOTIFY_REDIRECT_URI=http://localhost:3000/api/callback\n\n#GITHUB\nGITHUB_CLIENT_ID=7dbf271eb795af03f56f\nGITHUB_CLIENT_SECRET=7c98c11de6992a8f2d3862d7cd6a1497933485aa"}])
    
      
      const runtimeConfig = {}
      ;

      const documentModule = __webpack_require__(45835)

      const appMod = __webpack_require__(25528)
      let App = appMod.default || appMod.then && appMod.then(mod => mod.default);

      const compMod = __webpack_require__(53378)

      const Component = compMod.default || compMod.then && compMod.then(mod => mod.default)
      /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Component);
      const getStaticProps = compMod['getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['getStaticProp' + 's'])
      const getStaticPaths = compMod['getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['getStaticPath' + 's'])
      const getServerSideProps = compMod['getServerSideProp' + 's'] || compMod.then && compMod.then(mod => mod['getServerSideProp' + 's'])

      // kept for detecting legacy exports
      const unstable_getStaticParams = compMod['unstable_getStaticParam' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticParam' + 's'])
      const unstable_getStaticProps = compMod['unstable_getStaticProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticProp' + 's'])
      const unstable_getStaticPaths = compMod['unstable_getStaticPath' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getStaticPath' + 's'])
      const unstable_getServerProps = compMod['unstable_getServerProp' + 's'] || compMod.then && compMod.then(mod => mod['unstable_getServerProp' + 's'])

      let config = compMod['confi' + 'g'] || (compMod.then && compMod.then(mod => mod['confi' + 'g'])) || {}
      const _app = App

      const combinedRewrites = Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)
        ? private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg
        : []

      if (!Array.isArray(private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites */ .Dg)) {
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.beforeFiles */ .Dg.beforeFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.afterFiles */ .Dg.afterFiles)
        combinedRewrites.push(...private_dot_next_routes_manifest_json__WEBPACK_IMPORTED_MODULE_1__/* .rewrites.fallback */ .Dg.fallback)
      }

      const { renderReqToHTML, render } = (0,next_dist_build_webpack_loaders_next_serverless_loader_page_handler__WEBPACK_IMPORTED_MODULE_4__/* .getPageHandler */ .u)({
        pageModule: compMod,
        pageComponent: Component,
        pageConfig: config,
        appModule: App,
        documentModule: documentModule,
        errorModule: __webpack_require__(99651),
        notFoundModule: undefined,
        pageGetStaticProps: getStaticProps,
        pageGetStaticPaths: getStaticPaths,
        pageGetServerSideProps: getServerSideProps,

        assetPrefix: "",
        canonicalBase: "",
        generateEtags: true,
        poweredByHeader: true,

        runtimeConfig,
        buildManifest: private_dot_next_build_manifest_json__WEBPACK_IMPORTED_MODULE_2__,
        reactLoadableManifest: private_dot_next_react_loadable_manifest_json__WEBPACK_IMPORTED_MODULE_3__,

        rewrites: combinedRewrites,
        i18n: undefined,
        page: "/dashboard",
        buildId: "z4mnsOwri1sCTEKGnjMrc",
        escapedBuildId: "z4mnsOwri1sCTEKGnjMrc",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"c6018184f95382f6386dda6d77917de7",previewModeSigningKey:"08973904ac652986b34961e96b72b9ae5a33c9f6b36925e7aac3c75a42ca4044",previewModeEncryptionKey:"3e9623f089e437e23205c567777f6415205fc87416ffa099649784f70d7cec19"}
      })
      
    

/***/ }),

/***/ 1014:
/***/ ((module) => {

module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 85158:
/***/ ((module) => {

module.exports = require("http2");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

module.exports = require("string_decoder");

/***/ }),

/***/ 24404:
/***/ ((module) => {

module.exports = require("tls");

/***/ }),

/***/ 76224:
/***/ ((module) => {

module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [174,556,432], () => (__webpack_exec__(31036)));
module.exports = __webpack_exports__;

})();