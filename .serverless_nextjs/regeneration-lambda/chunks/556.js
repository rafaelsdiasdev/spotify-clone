exports.id = 556;
exports.ids = [556];
exports.modules = {

/***/ 1594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ components_Logo)
});

// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(60027);
;// CONCATENATED MODULE: ./components/Logo/styles.js

const Svg = styled_components_cjs/* default.svg.withConfig */.ZP.svg.withConfig({
  displayName: "styles__Svg",
  componentId: "sc-ydsvdm-0"
})(["width:130px;margin-bottom:", ";"], props => props.marginBottom !== '0' ? props.marginBottom : '0');
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/Logo/index.js



const Logo = ({
  fill = '#fff',
  marginBottom = '0'
}) => {
  return /*#__PURE__*/jsx_runtime.jsx(Svg, {
    viewBox: "0 0 63 20",
    xmlns: "http://www.w3.org/2000/svg",
    preserveAspectRatio: "xMidYMin meet",
    marginBottom: marginBottom,
    children: /*#__PURE__*/jsx_runtime.jsx("g", {
      children: /*#__PURE__*/jsx_runtime.jsx("path", {
        fill: fill,
        d: "M61.842 9.506a1.02 1.02 0 0 1-1.023-1.024c0-.562.453-1.03 1.029-1.03a1.02 1.02 0 0 1 1.023 1.024 1.03 1.03 0 0 1-1.029 1.03m.006-1.952a.915.915 0 0 0-.922.928c0 .51.394.921.916.921a.916.916 0 0 0 .922-.927.908.908 0 0 0-.916-.922m.226 1.027l.29.406h-.244l-.26-.372h-.225v.372h-.204V7.912h.48c.249 0 .413.128.413.343 0 .176-.102.284-.25.326m-.172-.485h-.267v.34h.267c.133 0 .212-.065.212-.17 0-.11-.08-.17-.212-.17m-12.804-3.52a1.043 1.043 0 1 0-.001 2.086 1.043 1.043 0 0 0 0-2.087m.72 2.89h-1.454a.107.107 0 0 0-.106.107v6.346c0 .06.047.107.106.107h1.455a.107.107 0 0 0 .107-.107V7.572a.107.107 0 0 0-.107-.107m3.233.006v-.2c0-.592.227-.856.736-.856.303 0 .546.06.82.152a.106.106 0 0 0 .14-.102V5.24a.107.107 0 0 0-.076-.102 3.993 3.993 0 0 0-1.21-.174c-1.343 0-2.053.757-2.053 2.188v.308h-.699a.107.107 0 0 0-.107.106v1.257c0 .059.048.107.107.107h.699v4.99c0 .058.047.106.106.106h1.455a.107.107 0 0 0 .106-.107v-4.99h1.358l2.081 4.99c-.236.523-.468.628-.785.628-.257 0-.527-.077-.803-.228a.109.109 0 0 0-.084-.008.106.106 0 0 0-.063.058l-.493 1.081a.106.106 0 0 0 .045.138c.515.279.98.398 1.554.398 1.074 0 1.668-.5 2.191-1.847L60.6 7.617a.106.106 0 0 0-.099-.146h-1.514a.107.107 0 0 0-.1.072l-1.552 4.431-1.7-4.434a.106.106 0 0 0-.099-.069h-2.485m-5.577-.006h-1.6V5.828a.106.106 0 0 0-.107-.106h-1.455a.107.107 0 0 0-.106.106v1.637h-.7a.106.106 0 0 0-.106.107v1.25c0 .059.048.107.106.107h.7v3.234c0 1.308.65 1.97 1.934 1.97.522 0 .954-.107 1.362-.338a.106.106 0 0 0 .054-.093v-1.19a.106.106 0 0 0-.154-.096c-.28.141-.551.206-.854.206-.467 0-.675-.211-.675-.686V8.929h1.6a.106.106 0 0 0 .107-.107v-1.25a.106.106 0 0 0-.106-.107m-7.671-.133c-1.96 0-3.497 1.51-3.497 3.437 0 1.907 1.526 3.4 3.473 3.4 1.967 0 3.508-1.504 3.508-3.424 0-1.914-1.53-3.413-3.484-3.413m0 5.362c-1.043 0-1.83-.838-1.83-1.95 0-1.115.76-1.924 1.806-1.924 1.05 0 1.84.838 1.84 1.95 0 1.115-.763 1.924-1.816 1.924m-7.014-5.362c-.82 0-1.492.323-2.046.984v-.744a.107.107 0 0 0-.106-.107h-1.455a.107.107 0 0 0-.106.107v8.27c0 .058.048.106.106.106h1.455a.107.107 0 0 0 .106-.106v-2.61c.555.621 1.227.925 2.046.925 1.522 0 3.063-1.172 3.063-3.412s-1.54-3.413-3.063-3.413m1.372 3.413c0 1.14-.703 1.937-1.709 1.937-.995 0-1.745-.833-1.745-1.937s.75-1.937 1.745-1.937c.99 0 1.71.814 1.71 1.937m-8.437-1.81c-1.624-.388-1.913-.66-1.913-1.231 0-.54.508-.903 1.264-.903.732 0 1.459.275 2.22.843a.107.107 0 0 0 .15-.023l.794-1.119a.107.107 0 0 0-.02-.144c-.906-.728-1.927-1.081-3.12-1.081-1.755 0-2.98 1.052-2.98 2.559 0 1.615 1.057 2.187 2.884 2.628 1.554.358 1.817.658 1.817 1.195 0 .594-.53.963-1.385.963-.948 0-1.721-.32-2.587-1.068a.11.11 0 0 0-.078-.026.105.105 0 0 0-.073.038l-.89 1.058a.105.105 0 0 0 .011.148 5.303 5.303 0 0 0 3.581 1.373c1.89 0 3.112-1.033 3.112-2.631 0-1.351-.807-2.098-2.787-2.58M9.507.305a9.41 9.41 0 1 0 0 18.82 9.41 9.41 0 0 0 0-18.82m4.316 13.572a.586.586 0 0 1-.807.195c-2.21-1.35-4.99-1.655-8.266-.907a.586.586 0 1 1-.261-1.143c3.584-.82 6.659-.467 9.139 1.049.276.169.363.53.195.806m1.15-2.562a.734.734 0 0 1-1.008.242c-2.529-1.555-6.385-2.005-9.377-1.097a.735.735 0 0 1-.426-1.404c3.418-1.037 7.666-.534 10.57 1.25a.734.734 0 0 1 .242 1.01m.1-2.669C12.04 6.846 7.036 6.68 4.141 7.56a.88.88 0 1 1-.511-1.684c3.323-1.01 8.849-.814 12.34 1.258a.88.88 0 0 1-.898 1.514"
      })
    })
  });
};

/* harmony default export */ const components_Logo = (Logo);

/***/ }),

/***/ 58272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11163);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(62286);
/* harmony import */ var nookies__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(nookies__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _services_spotifyApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(42658);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(85893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





const home = '/home';

const checkUserAuthentication = async ctx => {
  const cookies = nookies__WEBPACK_IMPORTED_MODULE_1___default().get(ctx);
  const accessToken = cookies.TOKEN_SPOTIFY;
  let session = {};

  if (accessToken) {
    await _services_spotifyApi__WEBPACK_IMPORTED_MODULE_2__/* ["default"].setAccessToken */ .Z.setAccessToken(cookies.TOKEN_SPOTIFY);
    const response = await _services_spotifyApi__WEBPACK_IMPORTED_MODULE_2__/* ["default"].getMe */ .Z.getMe();
    const {
      display_name,
      images,
      uri,
      id
    } = response.body;
    session = {
      display_name,
      images,
      uri,
      id
    };
  }

  return {
    auth: accessToken && true,
    token: accessToken,
    session
  };
};

const PrivateRoute = WrappedComponent => {
  const hocComponent = _ref => {
    let props = Object.assign({}, _ref);
    return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx(WrappedComponent, _objectSpread({}, props));
  };

  hocComponent.getInitialProps = async context => {
    const user = await checkUserAuthentication(context);

    if (!(user !== null && user !== void 0 && user.auth)) {
      if (context.res) {
        var _context$res, _context$res2;

        (_context$res = context.res) === null || _context$res === void 0 ? void 0 : _context$res.writeHead(302, {
          Location: home
        });
        (_context$res2 = context.res) === null || _context$res2 === void 0 ? void 0 : _context$res2.end();
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_0__["default"].replace(home);
      }
    } else if (WrappedComponent.getInitialProps) {
      const wrappedProps = await WrappedComponent.getInitialProps(_objectSpread(_objectSpread({}, context), {}, {
        auth: user
      }));
      return _objectSpread(_objectSpread({}, wrappedProps), {}, {
        user
      });
    }

    return {
      user
    };
  };

  return hocComponent;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PrivateRoute);

/***/ }),

/***/ 88795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Layout)
/* harmony export */ });
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9008);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);




function Layout({
  children
}) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(next_head__WEBPACK_IMPORTED_MODULE_0__["default"], {
      children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("title", {
        children: "Spotify Clone"
      })
    }), /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: children
    })]
  });
}

/***/ }),

/***/ 90933:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ UserContext),
/* harmony export */   "J": () => (/* binding */ UserStorage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67294);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);


const UserContext = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const UserStorage = ({
  children
}) => {
  const {
    0: code,
    1: setCode
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: logged,
    1: setLogged
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: isMenuOpen,
    1: setIsMenuOpen
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: trackResults,
    1: setTrackResults
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: artistsResults,
    1: setArtistsResults
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: accessToken,
    1: setAccessToken
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: track,
    1: setTrack
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: search,
    1: setSearch
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  const {
    0: session,
    1: setSession
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: initialTracks,
    1: setInitialTracks
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: currentMusic,
    1: setCurrentMusic
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
  const {
    0: musicTitle,
    1: setMusicTitle
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: currentArtist,
    1: setCurrentArtist
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
  const {
    0: play,
    1: setPlay
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(UserContext.Provider, {
    value: {
      code,
      setCode,
      logged,
      setLogged,
      isMenuOpen,
      setIsMenuOpen,
      trackResults,
      setTrackResults,
      artistsResults,
      setArtistsResults,
      accessToken,
      setAccessToken,
      track,
      setTrack,
      search,
      setSearch,
      session,
      setSession,
      initialTracks,
      setInitialTracks,
      currentMusic,
      setCurrentMusic,
      play,
      setPlay,
      musicTitle,
      setMusicTitle,
      currentArtist,
      setCurrentArtist
    },
    children: children
  });
};

/***/ }),

/***/ 25528:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: ./node_modules/next/head.js
var head = __webpack_require__(9008);
// EXTERNAL MODULE: ./services/spotifyApi.js
var spotifyApi = __webpack_require__(42658);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(60027);
;// CONCATENATED MODULE: ./components/Loading/styles.js

const Container = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1mnkict-0"
})(["background:#121212;height:100vh;display:flex;justify-content:center;align-items:center;"]);
const Content = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-1mnkict-1"
})(["width:100px;height:100px;border-radius:50%;border-top:4px solid;border-color:#fff transparent;animation:spin 0.6s linear infinite;@keyframes spin{0%{transform:rotate(0deg);}100%{transform:rotate(359deg);}}"]);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/Loading/index.js




const Loading = () => {
  return /*#__PURE__*/jsx_runtime.jsx(Container, {
    children: /*#__PURE__*/jsx_runtime.jsx(Content, {})
  });
};

/* harmony default export */ const components_Loading = (Loading);
;// CONCATENATED MODULE: ./components/Dashboard/Playing/styles.js

const styles_Container = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-djsr85-0"
})(["position:fixed;bottom:0;background-color:#181818;grid-area:now-playing-bar;width:100%;z-index:4;@media (max-width:900px){height:", ";}"], props => props.isActive ? '145px' : '96px');
// EXTERNAL MODULE: ./node_modules/react-spotify-web-playback/lib/index.js
var lib = __webpack_require__(88954);
var lib_default = /*#__PURE__*/__webpack_require__.n(lib);
// EXTERNAL MODULE: ./contexts/UserContext.js
var UserContext = __webpack_require__(90933);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./components/PrivateRoute/index.js
var PrivateRoute = __webpack_require__(58272);
;// CONCATENATED MODULE: ./components/Dashboard/Playing/index.js
const _excluded = ["type"];

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }









const Playing = ({
  accessToken
}) => {
  const {
    0: active,
    1: setActive
  } = (0,react.useState)(false);
  const {
    track,
    initialTracks,
    setInitialTracks,
    setCurrentMusic,
    play,
    setPlay,
    setMusicTitle,
    setCurrentArtist
  } = (0,react.useContext)(UserContext/* UserContext */.S);
  const router = (0,next_router.useRouter)();
  (0,react.useEffect)(() => {
    if (track) if (track && initialTracks) {
      setInitialTracks(false);
      return;
    } else {
      setPlay(true);
    }
  }, [track]);
  const handleCallback = (0,react.useCallback)(_ref => {
    let {
      type
    } = _ref,
        state = _objectWithoutProperties(_ref, _excluded);

    if (state.error === 'Authentication failed') return router.replace('/home');
    if (state.isActive) setActive(true);else setActive(false);

    if (state.isPlaying) {
      setCurrentMusic(state.track.name);
      setCurrentArtist(state.track.artists[0].name);
      setMusicTitle(`${state.track.name} - ${state.track.artists[0].name}`);
    } else {
      setCurrentMusic(null);
      setMusicTitle(null);
      setCurrentArtist(null);
    }

    setPlay(state.isPlaying);
  }, []);
  return /*#__PURE__*/jsx_runtime.jsx(styles_Container, {
    isActive: active,
    children: /*#__PURE__*/jsx_runtime.jsx((lib_default()), {
      styles: {
        activeColor: '#fff',
        bgColor: '#333',
        color: '#fff',
        loaderColor: '#fff',
        sliderColor: '#1cb954',
        trackArtistColor: '#ccc',
        trackNameColor: '#fff',
        position: 'fixed'
      },
      token: accessToken,
      showSaveIcon: true,
      magnifySliderOnHover: true,
      callback: handleCallback,
      play: play,
      uris: track,
      autoPlay: false
    })
  });
};

/* harmony default export */ const Dashboard_Playing = ((0,PrivateRoute/* default */.Z)(Playing));
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
;// CONCATENATED MODULE: ./components/Dashboard/Sidebar/styles.js

const Sidebar_styles_Container = styled_components_cjs/* default.nav.withConfig */.ZP.nav.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1ur3tyd-0"
})(["background-color:#000;grid-area:nav-bar;width:calc(232px + 9px);z-index:3;@media (max-width:900px){grid-area:now-playing-bar;width:100%;z-index:9999;position:fixed;bottom:0;background-color:rgb(51,51,51);}"]);
const styles_Content = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-1ur3tyd-1"
})(["display:flex;flex:1;flex-direction:column;min-height:0;width:100%;padding-top:24px;@media (max-width:900px){display:inline-flex;flex-direction:row;justify-content:center;padding:0;}.content__logo{padding-top:0;@media (max-width:900px){display:none;}.link{margin-bottom:20px;padding:0 24px;text-decoration:none;@media (max-width:900px){margin-bottom:0;}svg{height:40px;max-width:131px;width:100%;}}}"]);
const List = styled_components_cjs/* default.ul.withConfig */.ZP.ul.withConfig({
  displayName: "styles__List",
  componentId: "sc-1ur3tyd-2"
})(["list-style:none;display:block;@media (max-width:900px){display:flex;justify-content:space-around;width:100%;}"]);
// EXTERNAL MODULE: ./components/Logo/index.js + 1 modules
var Logo = __webpack_require__(1594);
;// CONCATENATED MODULE: ./components/Svg/Home/index.js



const HomeSvg = () => {
  return /*#__PURE__*/jsx_runtime.jsx("svg", {
    role: "img",
    height: "24",
    width: "24",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/jsx_runtime.jsx("path", {
      d: "M9 14h6v7h5V7.8l-8-4.6-8 4.6V21h5v-7zm1 8H3V7.2L12 2l9 5.2V22h-7v-7h-4v7z"
    })
  });
};

/* harmony default export */ const Home = (HomeSvg);
;// CONCATENATED MODULE: ./components/Svg/Search/index.js



const SearchSvg = () => {
  return /*#__PURE__*/jsx_runtime.jsx("svg", {
    role: "img",
    height: "24",
    width: "24",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/jsx_runtime.jsx("path", {
      d: "M16.387 16.623A8.47 8.47 0 0019 10.5a8.5 8.5 0 10-8.5 8.5 8.454 8.454 0 005.125-1.73l4.401 5.153.76-.649-4.399-5.151zM10.5 18C6.364 18 3 14.636 3 10.5S6.364 3 10.5 3 18 6.364 18 10.5 14.636 18 10.5 18z"
    })
  });
};

/* harmony default export */ const Search = (SearchSvg);
;// CONCATENATED MODULE: ./components/Svg/HomeActive/index.js



const HomeActiveSvg = () => {
  return /*#__PURE__*/jsx_runtime.jsx("svg", {
    role: "img",
    height: "24",
    width: "24",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/jsx_runtime.jsx("path", {
      d: "M21 22V7.174l-9.001-5.195L3 7.214V22h7v-7h4v7z"
    })
  });
};

/* harmony default export */ const HomeActive = (HomeActiveSvg);
;// CONCATENATED MODULE: ./components/Svg/SearchActive/index.js



const SearchActiveSvg = () => {
  return /*#__PURE__*/jsx_runtime.jsx("svg", {
    role: "img",
    height: "24",
    width: "24",
    viewBox: "0 0 24 24",
    children: /*#__PURE__*/jsx_runtime.jsx("path", {
      d: "M16.736 16.262A8.457 8.457 0 0019 10.5a8.5 8.5 0 10-3.779 7.067l4.424 5.18 1.521-1.299-4.43-5.186zM10.5 17C6.916 17 4 14.084 4 10.5S6.916 4 10.5 4 17 6.916 17 10.5 14.084 17 10.5 17z"
    })
  });
};

/* harmony default export */ const SearchActive = (SearchActiveSvg);
;// CONCATENATED MODULE: ./components/Dashboard/SidebarMenuItem/styles.js

const SidebarMenuItem_styles_Container = styled_components_cjs/* default.li.withConfig */.ZP.li.withConfig({
  displayName: "styles__Container",
  componentId: "sc-6z19dp-0"
})(["display:list-item;padding:0 8px;@media (max-width:900px){display:inline-flex;justify-content:space-around;width:100%;}.link{color:#b3b3b3;align-items:center;border-radius:4px;cursor:pointer;display:flex;gap:16px;height:40px;padding:0 16px;text-decoration:none;fill:#b3b3b3;font-size:14px;font-weight:700;white-space:nowrap;line-height:16px;&.active-menu{color:#fff;fill:#fff;background-color:#282828;@media (max-width:900px){color:#fff;fill:#fff;background-color:rgb(51,51,51);}}@media (max-width:900px){width:100%;justify-content:center;flex-direction:column;height:100%;gap:5px;span{font-size:11px;}}&:hover{color:#fff;fill:#fff;}}"]);
;// CONCATENATED MODULE: ./components/Dashboard/SidebarMenuItem/index.js






const SidebarMenuItem = ({
  label,
  link,
  icon = 'Icon',
  iconActive = 'iconActive',
  active
}) => {
  const {
    0: activeMenu,
    1: setActiveMenu
  } = (0,react.useState)(false);
  const {
    0: handleIcon,
    1: setHandleIcon
  } = (0,react.useState)(null);
  (0,react.useEffect)(() => {
    if (active === link) {
      setActiveMenu(true);
      setHandleIcon(iconActive);
    } else {
      setActiveMenu(false);
      setHandleIcon(icon);
    }
  }, [link, active]);
  return /*#__PURE__*/jsx_runtime.jsx(SidebarMenuItem_styles_Container, {
    children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
      href: link,
      onClick: event => event.preventDefault(),
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("a", {
        className: `link ${activeMenu ? 'active-menu' : ''}`,
        children: [handleIcon, /*#__PURE__*/jsx_runtime.jsx("span", {
          children: label
        })]
      })
    })
  });
};

SidebarMenuItem.defaultProps = {
  active: '/dashboard',
  link: '/dashboard',
  label: 'Home'
};
/* harmony default export */ const Dashboard_SidebarMenuItem = (SidebarMenuItem);
;// CONCATENATED MODULE: ./components/Dashboard/Sidebar/index.js











const Sidebar = ({
  active
}) => {
  return /*#__PURE__*/jsx_runtime.jsx(Sidebar_styles_Container, {
    children: /*#__PURE__*/(0,jsx_runtime.jsxs)(styles_Content, {
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: "content__logo",
        children: /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
          href: "/home",
          children: /*#__PURE__*/jsx_runtime.jsx("a", {
            className: "link",
            children: /*#__PURE__*/jsx_runtime.jsx(Logo/* default */.Z, {
              fill: "#fff",
              marginBottom: '24px'
            })
          })
        })
      }), /*#__PURE__*/(0,jsx_runtime.jsxs)(List, {
        children: [/*#__PURE__*/jsx_runtime.jsx(Dashboard_SidebarMenuItem, {
          label: 'Home',
          active: active,
          link: "/dashboard",
          icon: /*#__PURE__*/jsx_runtime.jsx(Home, {}),
          iconActive: /*#__PURE__*/jsx_runtime.jsx(HomeActive, {})
        }), /*#__PURE__*/jsx_runtime.jsx(Dashboard_SidebarMenuItem, {
          label: 'Search',
          active: active,
          link: "/search",
          icon: /*#__PURE__*/jsx_runtime.jsx(Search, {}),
          iconActive: /*#__PURE__*/jsx_runtime.jsx(SearchActive, {})
        })]
      })]
    })
  });
};

Sidebar.defaultProps = {
  active: '/dashboard'
};
/* harmony default export */ const Dashboard_Sidebar = (Sidebar);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./public/svg/upArrowFull.svg
var upArrowFull = __webpack_require__(71632);
var upArrowFull_default = /*#__PURE__*/__webpack_require__.n(upArrowFull);
// EXTERNAL MODULE: ./public/svg/downArrowFull.svg
var downArrowFull = __webpack_require__(55334);
var downArrowFull_default = /*#__PURE__*/__webpack_require__.n(downArrowFull);
// EXTERNAL MODULE: ./public/svg/back.svg
var back = __webpack_require__(83504);
var back_default = /*#__PURE__*/__webpack_require__.n(back);
// EXTERNAL MODULE: ./public/svg/clear.svg
var clear = __webpack_require__(60042);
var clear_default = /*#__PURE__*/__webpack_require__.n(clear);
// EXTERNAL MODULE: ./node_modules/nookies/dist/index.js
var dist = __webpack_require__(62286);
;// CONCATENATED MODULE: ./components/Dashboard/Topbar/styles.js

const Topbar_styles_Container = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-16xje41-0"
})(["grid-area:main-view;height:80px;min-width:0;background-color:#121212;padding:24px 32px;@media (max-width:900px){display:", ";background-color:rgb(51,51,51);height:48px;padding:0;z-index:9999;position:fixed;}header{display:flex;justify-content:space-between;align-items:center;@media (max-width:900px){display:none;}}"], props => props.search ? 'flex' : 'none');
const Topbar_styles_Content = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-16xje41-1"
})(["display:flex;align-items:center;flex-direction:row;"]);
const Arrows = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Arrows",
  componentId: "sc-16xje41-2"
})(["display:flex;"]);
const MobileTopbar = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__MobileTopbar",
  componentId: "sc-16xje41-3"
})(["display:none;margin-bottom:8px;position:fixed;z-index:1;align-items:center;height:48px;width:100%;flex-direction:row;background-color:rgb(51,51,51);input{background-color:rgb(51,51,51);width:100%;color:#fff;}@media (max-width:900px){display:flex;width:100%;}"]);
const ActionButton = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "styles__ActionButton",
  componentId: "sc-16xje41-4"
})(["padding:10px 12px;background:rgb(51,51,51);border:0px;touch-action:manipulation;svg{fill:'#fff';color:'#fff';}"]);
// EXTERNAL MODULE: ./public/svg/rightArrow.svg
var rightArrow = __webpack_require__(25401);
var rightArrow_default = /*#__PURE__*/__webpack_require__.n(rightArrow);
// EXTERNAL MODULE: ./public/svg/leftArrow.svg
var leftArrow = __webpack_require__(88784);
var leftArrow_default = /*#__PURE__*/__webpack_require__.n(leftArrow);
;// CONCATENATED MODULE: ./components/Dashboard/Arrow/styles.js

const Arrow_styles_Container = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "styles__Container",
  componentId: "sc-wln6ti-0"
})(["margin-right:16px;padding:0;width:32px;display:inline-flex;height:32px;justify-content:center;align-items:center;background-color:rgba(0,0,0,0.7);border:none;border-radius:50%;cursor:pointer;touch-action:manipulation;"]);
;// CONCATENATED MODULE: ./components/Dashboard/Arrow/index.js




const Arrow = ({
  arrow
}) => {
  return /*#__PURE__*/jsx_runtime.jsx(Arrow_styles_Container, {
    children: /*#__PURE__*/jsx_runtime.jsx(next_image["default"], {
      src: arrow,
      width: 22,
      height: 22,
      alt: "arrow"
    })
  });
};

/* harmony default export */ const Dashboard_Arrow = (Arrow);
;// CONCATENATED MODULE: ./components/Dashboard/SearchIcon/index.js


const searchIcon = ({
  fill,
  width,
  height
}) => {
  return /*#__PURE__*/jsx_runtime.jsx("svg", {
    role: "img",
    viewBox: "0 0 512 512",
    "aria-hidden": "true",
    fill: fill,
    width: width,
    height: height,
    children: /*#__PURE__*/jsx_runtime.jsx("path", {
      d: "M349.714 347.937l93.714 109.969-16.254 13.969-93.969-109.969q-48.508 36.825-109.207 36.825-36.826 0-70.476-14.349t-57.905-38.603-38.603-57.905-14.349-70.476 14.349-70.476 38.603-57.905 57.905-38.603 70.476-14.349 70.476 14.349 57.905 38.603 38.603 57.905 14.349 70.476q0 37.841-14.73 71.619t-40.889 58.921zM224 377.397q43.428 0 80.254-21.461t58.286-58.286 21.461-80.254-21.461-80.254-58.286-58.285-80.254-21.46-80.254 21.46-58.285 58.285-21.46 80.254 21.46 80.254 58.285 58.286 80.254 21.461z"
    })
  });
};

/* harmony default export */ const SearchIcon = (searchIcon);
;// CONCATENATED MODULE: ./components/Dashboard/Search/styles.js

const Search_styles_Container = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-16xm0z-0"
})(["flex:0 1 364px;position:relative;display:", ";@media (max-width:900px){flex-grow:1;}input{border:0;border-radius:500px;color:#000;height:40px;text-overflow:ellipsis;width:346px;padding:6px 48px;font-weight:400;letter-spacing:normal;line-height:16px;text-transform:none;@media (max-width:900px){color:#fff;width:100%;}}"], props => props.search ? 'flex' : 'none');
const Icon = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Icon",
  componentId: "sc-16xm0z-1"
})(["align-items:center;top:0;bottom:0;right:12px;left:12px;display:flex;pointer-events:none;position:absolute;"]);
;// CONCATENATED MODULE: ./components/Dashboard/Search/index.js







const Search_Search = ({
  placeholder,
  pageSearch,
  fill = '#000'
}) => {
  const {
    search,
    setSearch
  } = (0,react.useContext)(UserContext/* UserContext */.S);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Search_styles_Container, {
    search: pageSearch,
    children: [/*#__PURE__*/jsx_runtime.jsx("input", {
      type: "search",
      maxLength: "80",
      id: "search",
      name: "seatch",
      value: search,
      placeholder: placeholder,
      onChange: event => setSearch(event.target.value)
    }), /*#__PURE__*/jsx_runtime.jsx(Icon, {
      children: /*#__PURE__*/jsx_runtime.jsx("span", {
        children: /*#__PURE__*/jsx_runtime.jsx(SearchIcon, {
          fill: fill,
          width: "24",
          height: "24"
        })
      })
    })]
  });
};

Search_Search.defaultProps = {
  pageSearch: false,
  placeholder: 'Artists and Songs'
};
/* harmony default export */ const Dashboard_Search = (Search_Search);
;// CONCATENATED MODULE: ./components/Dashboard/ProfileMenu/styles.js

const ProfileMenu_styles_Container = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-se9qos-0"
})(["position:relative;"]);
const BtnMenu = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__BtnMenu",
  componentId: "sc-se9qos-1"
})([".button{background-color:", ";border:0;border-radius:23px;color:#fff;cursor:pointer;gap:8px;height:32px;margin-inline-start:16px;padding:2px;padding-right:6px;display:flex;justify-content:center;align-items:center;&:hover{background-color:#282828;}img{border-radius:50%;}span{line-height:28px;max-width:110px;overflow:hidden;pointer-events:none;text-overflow:ellipsis;white-space:nowrap;display:block;font-size:14px;font-weight:700;letter-spacing:normal;text-transform:none;}}"], props => props.isMenuOpen ? '#282828' : 'rgba(0, 0, 0, 0.7)');
const MenuContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__MenuContainer",
  componentId: "sc-se9qos-2"
})(["display:", ";z-index:9999;position:absolute;inset:0px -32px auto auto;margin:0px;transform:translate(-32px,54px);pointer-events:auto;white-space:nowrap;"], props => props.isMenuOpen ? 'block' : 'none');
const MenuContext = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__MenuContext",
  componentId: "sc-se9qos-3"
})(["border:0;margin:0;padding:0;vertical-align:baseline;"]);
const Menu = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Menu",
  componentId: "sc-se9qos-4"
})(["min-width:196px;border:0;margin:0;padding:0;vertical-align:baseline;"]);
const styles_List = styled_components_cjs/* default.ul.withConfig */.ZP.ul.withConfig({
  displayName: "styles__List",
  componentId: "sc-se9qos-5"
})(["list-style:none;background-color:rgb(51,51,51);border-radius:4px;box-shadow:0 16px 24px rgb(0 0 0 / 30%),0 6px 8px rgb(0 0 0 / 20%);max-height:calc(100vh - 24px);max-width:350px;min-width:160px;overflow-y:auto;padding:4px;border:0;vertical-align:baseline;"]);
const ListItem = styled_components_cjs/* default.li.withConfig */.ZP.li.withConfig({
  displayName: "styles__ListItem",
  componentId: "sc-se9qos-6"
})(["border:0;margin:0;padding:0;vertical-align:baseline;pointer-events:auto;white-space:nowrap;"]);
const Button = styled_components_cjs/* default.button.withConfig */.ZP.button.withConfig({
  displayName: "styles__Button",
  componentId: "sc-se9qos-7"
})(["width:100%;font-family:Helvetica,arial,sans-serif;background:rgb(51,51,51);border:0;border-radius:2px;color:rgba(255,255,255,0.9);cursor:default;text-decoration:none;align-items:center;display:flex;gap:8px;height:40px;justify-content:space-between;padding:12px;padding-inline-end:8px;position:relative;text-align:start;user-select:none;span{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px;font-weight:400;letter-spacing:normal;line-height:16px;text-transform:none;}svg{color:#fff;fill:#fff;}&:hover{background-color:rgba(255,255,255,0.1);}"]);
;// CONCATENATED MODULE: ./components/Dashboard/ProfileMenu/index.js









const ProfileMenu = ({
  displayName,
  image,
  logout
}) => {
  const {
    isMenuOpen,
    setIsMenuOpen
  } = (0,react.useContext)(UserContext/* UserContext */.S);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(ProfileMenu_styles_Container, {
    children: [/*#__PURE__*/jsx_runtime.jsx(BtnMenu, {
      children: /*#__PURE__*/(0,jsx_runtime.jsxs)("button", {
        className: "button",
        onClick: handleClick,
        children: [image && /*#__PURE__*/jsx_runtime.jsx(next_image["default"], {
          src: image,
          width: 28,
          height: 28,
          alt: displayName
        }), /*#__PURE__*/jsx_runtime.jsx("span", {
          children: displayName
        }), isMenuOpen ? /*#__PURE__*/jsx_runtime.jsx(next_image["default"], {
          src: (upArrowFull_default()),
          width: "16",
          height: "16",
          alt: "up arrow"
        }) : /*#__PURE__*/jsx_runtime.jsx(next_image["default"], {
          src: (downArrowFull_default()),
          width: "16",
          height: "16",
          alt: "down arrow"
        })]
      })
    }), /*#__PURE__*/jsx_runtime.jsx(MenuContainer, {
      isMenuOpen: isMenuOpen,
      children: /*#__PURE__*/jsx_runtime.jsx(MenuContext, {
        children: /*#__PURE__*/jsx_runtime.jsx(Menu, {
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)(styles_List, {
            children: [/*#__PURE__*/jsx_runtime.jsx(ListItem, {
              children: /*#__PURE__*/jsx_runtime.jsx(Button, {
                children: /*#__PURE__*/jsx_runtime.jsx("a", {
                  children: /*#__PURE__*/jsx_runtime.jsx("span", {
                    children: "Profile"
                  })
                })
              })
            }), /*#__PURE__*/jsx_runtime.jsx(ListItem, {
              children: /*#__PURE__*/jsx_runtime.jsx(Button, {
                children: /*#__PURE__*/jsx_runtime.jsx("span", {
                  onClick: logout,
                  children: "Log out"
                })
              })
            })]
          })
        })
      })
    })]
  });
};

ProfileMenu.defaultProps = {};
/* harmony default export */ const Dashboard_ProfileMenu = (ProfileMenu);
;// CONCATENATED MODULE: ./components/Dashboard/Topbar/index.js



















const Topbar = ({
  displayName,
  image,
  pageSearch
}) => {
  const {
    isMenuOpen,
    setIsMenuOpen,
    setAccessToken,
    setSearch
  } = (0,react.useContext)(UserContext/* UserContext */.S);
  const router = (0,next_router.useRouter)();

  const logout = () => {
    (0,dist.destroyCookie)(null, 'TOKEN_SPOTIFY');
    (0,dist.destroyCookie)(null, 'REFRESH_TOKEN_SPOTIFY');
    setAccessToken(null);
    router.replace('/home');
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Topbar_styles_Container, {
    search: pageSearch,
    isMenuOpen: isMenuOpen,
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)("header", {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Topbar_styles_Content, {
        children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Arrows, {
          children: [/*#__PURE__*/jsx_runtime.jsx(Dashboard_Arrow, {
            arrow: (leftArrow_default())
          }), /*#__PURE__*/jsx_runtime.jsx(Dashboard_Arrow, {
            arrow: (rightArrow_default())
          })]
        }), /*#__PURE__*/jsx_runtime.jsx(Dashboard_Search, {
          pageSearch: pageSearch,
          placeholder: "Artists and Songs"
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(Dashboard_ProfileMenu, {
        displayName: displayName,
        image: image,
        logout: logout
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(MobileTopbar, {
      children: [/*#__PURE__*/jsx_runtime.jsx(ActionButton, {
        onClick: () => router.replace('/dashboard'),
        "aria-label": "Back",
        type: "button",
        children: /*#__PURE__*/jsx_runtime.jsx(next_image["default"], {
          src: (back_default()),
          width: "24",
          height: "24",
          alt: "back"
        })
      }), /*#__PURE__*/jsx_runtime.jsx(Dashboard_Search, {
        pageSearch: pageSearch,
        placeholder: "Search",
        fill: "#fff"
      }), /*#__PURE__*/jsx_runtime.jsx(ActionButton, {
        onClick: () => setSearch(''),
        "aria-label": "Close search",
        children: /*#__PURE__*/jsx_runtime.jsx(next_image["default"], {
          src: (clear_default()),
          width: "24",
          height: "24"
        })
      })]
    })]
  });
};

Topbar.defaultProps = {
  pageSearch: false
};
/* harmony default export */ const Dashboard_Topbar = ((0,PrivateRoute/* default */.Z)(Topbar));
;// CONCATENATED MODULE: ./components/Dashboard/MainView/styles.js

const MainView_styles_Container = styled_components_cjs/* default.main.withConfig */.ZP.main.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1kmnvif-0"
})(["grid-area:main-view;margin-top:80px;width:100%;background-color:#121212;@media (max-width:900px){margin-top:", ";padding-top:1rem;}"], props => props.search ? '48px' : '0');
;// CONCATENATED MODULE: ./components/Dashboard/MainView/index.js




const MainView = ({
  children
}) => {
  const router = (0,next_router.useRouter)();
  const pageSearch = router.pathname === '/search';
  return /*#__PURE__*/jsx_runtime.jsx(MainView_styles_Container, {
    search: pageSearch,
    children: children
  });
};

/* harmony default export */ const Dashboard_MainView = (MainView);
;// CONCATENATED MODULE: ./components/Dashboard/Layout/styles.js

const Layout_styles_Container = styled_components_cjs/* default.main.withConfig */.ZP.main.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1pyzluv-0"
})(["height:100vh;position:relative;isolation:isolate;width:100%;.content{display:grid;grid-template-areas:'nav-bar main-view main-view' 'now-playing-bar now-playing-bar now-playing-bar';grid-template-columns:auto 1fr;grid-template-rows:1fr auto;height:100%;min-height:100%;position:relative;width:100%;}"]);
// EXTERNAL MODULE: ./services/api.js
var api = __webpack_require__(17751);
;// CONCATENATED MODULE: ./hooks/useAuth.js





function useAuth() {
  const {
    0: accessToken,
    1: setAccessToken
  } = (0,react.useState)(null);
  const {
    0: refreshToken,
    1: setRefreshToken
  } = (0,react.useState)(null);
  const {
    0: expiresIn,
    1: setExpiresIn
  } = (0,react.useState)(null);
  const cookies = (0,dist.parseCookies)();
  const router = (0,next_router.useRouter)();

  const createCookie = (type, token) => {
    (0,dist.setCookie)(null, type, token, {
      maxAge: 3600,
      path: '/',
      SameSite: true
    });
  };

  (0,react.useEffect)(() => {
    if (cookies && cookies.TOKEN_SPOTIFY) {
      setAccessToken(cookies.TOKEN_SPOTIFY);
      setRefreshToken(cookies.REFRESH_TOKEN_SPOTIFY);
      setExpiresIn(3600);
    }
  }, []);
  (0,react.useEffect)(() => {
    if (!refreshToken || !expiresIn) return;
    const interval = setInterval(() => {
      api/* api.post */.h.post('refresh', {
        refreshToken
      }).then(res => {
        setAccessToken(res.data.accessToken);
        setExpiresIn(res.data.expiresIn);
        createCookie('TOKEN_SPOTIFY', res.data.accessToken);
      }).catch(() => {
        console.log('erro');
        router.replace('/');
      });
    }, (3600 - 60) * 1000); // expires(segundos) menos 1 minuto(60 seconds) em milesegundos(setinterval)

    return () => clearInterval(interval);
  }, [refreshToken]);
  return accessToken;
}
;// CONCATENATED MODULE: ./components/Dashboard/Layout/index.js
















function DashboardLayout({
  children
}) {
  const router = (0,next_router.useRouter)();
  const accessToken = useAuth();
  const {
    setAccessToken,
    isMenuOpen,
    setIsMenuOpen,
    session,
    musicTitle
  } = (0,react.useContext)(UserContext/* UserContext */.S);
  const {
    0: user,
    1: setUser
  } = (0,react.useState)({});
  const active = router === null || router === void 0 ? void 0 : router.pathname;
  const pageSearch = active === '/search';
  const dropdownMenu = (0,react.useRef)();
  (0,react.useEffect)(() => {
    if (session) {
      const {
        display_name,
        images
      } = session;
      setUser({
        displayName: display_name,
        image: images[0].url
      });
    }
  }, [session]);
  (0,react.useEffect)(() => {
    const checkClickOutside = event => {
      if (isMenuOpen && dropdownMenu.current && dropdownMenu.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', checkClickOutside);
    return () => {
      document.removeEventListener('click', checkClickOutside);
    };
  }, [isMenuOpen, setIsMenuOpen]);
  (0,react.useEffect)(() => {
    if (accessToken) {
      setAccessToken(accessToken);
    }
  }, [accessToken]);
  if (!accessToken) return /*#__PURE__*/jsx_runtime.jsx(components_Loading, {});
  spotifyApi/* default.setAccessToken */.Z.setAccessToken(accessToken);
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(jsx_runtime.Fragment, {
    children: [/*#__PURE__*/jsx_runtime.jsx(head["default"], {
      children: /*#__PURE__*/jsx_runtime.jsx("title", {
        children: musicTitle ? musicTitle : 'Spotify Clone'
      })
    }), /*#__PURE__*/jsx_runtime.jsx(Layout_styles_Container, {
      children: accessToken && /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
        ref: dropdownMenu,
        className: "content",
        children: [/*#__PURE__*/jsx_runtime.jsx(Dashboard_Topbar, {
          pageSearch: pageSearch,
          displayName: user.displayName,
          image: user.image
        }), /*#__PURE__*/jsx_runtime.jsx(Dashboard_Sidebar, {
          active: active
        }), /*#__PURE__*/jsx_runtime.jsx(Dashboard_MainView, {
          children: children
        }), /*#__PURE__*/jsx_runtime.jsx(Dashboard_Playing, {
          accessToken: accessToken
        })]
      })
    })]
  });
}

/* harmony default export */ const Layout = (DashboardLayout);
// EXTERNAL MODULE: ./components/layout.js
var layout = __webpack_require__(88795);
;// CONCATENATED MODULE: ./pages/_app.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }







function MyApp({
  Component,
  pageProps
}) {
  const getLayout = Component.getLayout || (page => /*#__PURE__*/jsx_runtime.jsx(Layout, {
    children: page
  }));

  return /*#__PURE__*/jsx_runtime.jsx(UserContext/* UserStorage */.J, {
    children: getLayout( /*#__PURE__*/jsx_runtime.jsx(Component, _objectSpread({}, pageProps)))
  });
}

/* harmony default export */ const _app = (MyApp);

/***/ }),

/***/ 45835:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyDocument)
/* harmony export */ });
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56859);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(60027);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(85893);
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class MyDocument extends next_document__WEBPACK_IMPORTED_MODULE_0__["default"] {
  static async getInitialProps(ctx) {
    const sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__/* .ServerStyleSheet */ .qH();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () => originalRenderPage({
        enhanceApp: App => props => sheet.collectStyles( /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx(App, _objectSpread({}, props)))
      });

      const initialProps = await next_document__WEBPACK_IMPORTED_MODULE_0__["default"].getInitialProps(ctx);
      return _objectSpread(_objectSpread({}, initialProps), {}, {
        styles: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
          children: [initialProps.styles, sheet.getStyleElement()]
        })
      });
    } finally {
      sheet.seal();
    }
  }

}

/***/ }),

/***/ 17751:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ api)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9669);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const api = axios__WEBPACK_IMPORTED_MODULE_0___default().create({
  baseURL: '/api'
});

/***/ }),

/***/ 42658:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76676);
/* harmony import */ var spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0__);

const spotifyApi = new (spotify_web_api_node__WEBPACK_IMPORTED_MODULE_0___default())({
  clientId: process.env.SPOTIFY_CLIENT_ID
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (spotifyApi);

/***/ }),

/***/ 83504:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9ImltZyIgZm9jdXNhYmxlPSJmYWxzZSIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgYXJpYS1sYWJlbGxlZGJ5PSJiYWNrLWljb24iPgogIDxwb2x5bGluZSBwb2ludHM9IjExLjA3IDE5LjA3IDQgMTIgMTEuMDcgNC45MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIj48L3BvbHlsaW5lPgogIDxsaW5lIHgxPSIyMSIgeTE9IjEyIiB4Mj0iNCIgeTI9IjEyIiBmaWxsPSJub25lIiBzdHJva2U9IiNmZmYiPjwvbGluZT4KPC9zdmc+"

/***/ }),

/***/ 60042:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHJvbGU9ImltZyIgd2lkdGg9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiIGFyaWEtbGFiZWxsZWRieT0ieC1pY29uIj4KICA8dGl0bGUgaWQ9IngtaWNvbiI+Q2xvc2U8L3RpdGxlPgogIDxwYXRoIGQ9Ik00LjkzLDQuOTMsMTkuMDcsMTkuMDdtLTE0LjE0LDBMMTkuMDcsNC45MyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIj48L3BhdGg+Cjwvc3ZnPg=="

/***/ }),

/***/ 55334:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9ImltZyIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiIGNvbG9yPSIjZmZmIiBmaWxsPSIjZmZmIj4KICA8cGF0aCBkPSJNMyA2bDUgNS43OTRMMTMgNnoiPjwvcGF0aD4KPC9zdmc+"

/***/ }),

/***/ 88784:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICByb2xlPSJpbWciCiAgZm9jdXNhYmxlPSJmYWxzZSIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgc3Ryb2tlLXdpZHRoPSIxcHQiCj4KICA8cG9seWxpbmUgcG9pbnRzPSIxNiA0IDcgMTIgMTYgMjAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiI+PC9wb2x5bGluZT4KPC9zdmc+"

/***/ }),

/***/ 25401:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZwogIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIKICByb2xlPSJpbWciCiAgZm9jdXNhYmxlPSJmYWxzZSIKICB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgc3Ryb2tlLXdpZHRoPSIxcHQiCj4KICA8cG9seWxpbmUgcG9pbnRzPSI4IDQgMTcgMTIgOCAyMCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmIj48L3BvbHlsaW5lPgo8L3N2Zz4KCg=="

/***/ }),

/***/ 71632:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9ImltZyIgaGVpZ2h0PSIxNiIgd2lkdGg9IjE2IiB2aWV3Qm94PSIwIDAgMTYgMTYiIGNvbG9yPSIjZmZmIiBmaWxsPSIjZmZmIiAgPgogIDxwYXRoIGQ9Ik0xMyAxMEw4IDQuMjA2IDMgMTB6Ij48L3BhdGg+Cjwvc3ZnPg=="

/***/ }),

/***/ 97020:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"polyfillFiles":["static/chunks/polyfills-a40ef1678bae11e696dba45124eadd70.js"],"devFiles":[],"ampDevFiles":[],"lowPriorityFiles":["static/Mxwj745n7caiCaSuMRqX1/_buildManifest.js","static/Mxwj745n7caiCaSuMRqX1/_ssgManifest.js","static/Mxwj745n7caiCaSuMRqX1/_middlewareManifest.js"],"pages":{"/":["static/chunks/webpack-362a10dbfda6e531.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-174339055802ca46.js","static/chunks/pages/index-920a9c24f7e443ad.js"],"/_app":["static/chunks/webpack-362a10dbfda6e531.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-174339055802ca46.js","static/css/bbcfcbd85646125b.css","static/chunks/pages/_app-b89c5bbfb62edb43.js"],"/_error":["static/chunks/webpack-362a10dbfda6e531.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-174339055802ca46.js","static/chunks/pages/_error-1f95674706ce531a.js"],"/dashboard":["static/chunks/webpack-362a10dbfda6e531.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-174339055802ca46.js","static/chunks/pages/dashboard-c3ff040c141153a8.js"],"/home":["static/chunks/webpack-362a10dbfda6e531.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-174339055802ca46.js","static/chunks/pages/home-1f726581be19c936.js"],"/search":["static/chunks/webpack-362a10dbfda6e531.js","static/chunks/framework-91d7f78b5b4003c8.js","static/chunks/main-174339055802ca46.js","static/chunks/pages/search-2dfb916611f91b37.js"]},"ampFirstPages":[]}');

/***/ }),

/***/ 73978:
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"../node_modules/next/dist/client/index.js -> ../pages/_error":{"id":9651,"files":["static/chunks/651.e7ad805f32a091cd.js"]}}');

/***/ }),

/***/ 59450:
/***/ ((module) => {

"use strict";
module.exports = {"Dg":[]};

/***/ })

};
;