(() => {
var exports = {};
exports.id = 603;
exports.ids = [603];
exports.modules = {

/***/ 15617:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ search)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/router.js
var next_router = __webpack_require__(11163);
// EXTERNAL MODULE: ./contexts/UserContext.js
var UserContext = __webpack_require__(90933);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(41664);
// EXTERNAL MODULE: ./components/PrivateRoute/index.js
var PrivateRoute = __webpack_require__(58272);
// EXTERNAL MODULE: ./services/spotifyApi.js
var spotifyApi = __webpack_require__(42658);
// EXTERNAL MODULE: ./utils/Wrappers.js
var Wrappers = __webpack_require__(43968);
// EXTERNAL MODULE: ./components/Dashboard/Card/index.js + 1 modules
var Card = __webpack_require__(42432);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./public/svg/songPause.svg
var songPause = __webpack_require__(30569);
var songPause_default = /*#__PURE__*/__webpack_require__.n(songPause);
// EXTERNAL MODULE: ./public/svg/songPlay.svg
var songPlay = __webpack_require__(76166);
var songPlay_default = /*#__PURE__*/__webpack_require__.n(songPlay);
// EXTERNAL MODULE: ./utils/Play.js
var Play = __webpack_require__(54307);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(60027);
;// CONCATENATED MODULE: ./components/Dashboard/Songs/styles.js

const Container = styled_components_cjs/* default.section.withConfig */.ZP.section.withConfig({
  displayName: "styles__Container",
  componentId: "sc-4e9flo-0"
})(["min-width:400px;font-family:Helvetica,arial,sans-serif;@media (max-width:900px){margin-bottom:180px;}"]);
const Content = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Content",
  componentId: "sc-4e9flo-1"
})(["position:relative;border-radius:4px;&:hover{background-color:rgba(255,255,255,0.1);.tracks__list{.tracks__image{img{filter:brightness(40%);}}}}"]);
const TrackList = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__TrackList",
  componentId: "sc-4e9flo-2"
})(["width:auto;display:grid;grid-template-columns:60px auto 40px;align-items:center;height:56px;padding:0 10px;margin:7px 0;"]);
const TrackImage = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__TrackImage",
  componentId: "sc-4e9flo-3"
})(["display:flex;margin-right:16px;"]);
const TrackTitle = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__TrackTitle",
  componentId: "sc-4e9flo-4"
})(["display:grid;align-items:center;color:#fff;font-size:14px;font-weight:400;letter-spacing:normal;line-height:18px;text-transform:none;span{font-size:14px;color:#b3b3b3;}"]);
const TrackDuration = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__TrackDuration",
  componentId: "sc-4e9flo-5"
})(["color:#b3b3b3;letter-spacing:2px;"]);
const Mask = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Mask",
  componentId: "sc-4e9flo-6"
})(["position:absolute;z-index:0;bottom:0;content:'';cursor:pointer;left:0;overflow:hidden;right:0;text-indent:100%;top:0;white-space:nowrap;&:hover{.btn-play{opacity:1;}}"]);
const BtnPlay = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__BtnPlay",
  componentId: "sc-4e9flo-7"
})(["position:absolute;left:-5px;bottom:18px;opacity:0;z-index:2;transition:all 0.3s ease;button{display:inline-flex;cursor:pointer;background-color:transparent;color:#fff;border:none;}"]);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/Dashboard/Songs/index.js










const Songs = ({
  trackResults
}) => {
  const {
    setTrack,
    currentMusic,
    play,
    setPlay
  } = (0,react.useContext)(UserContext/* UserContext */.S);
  const {
    0: width,
    1: setWidth
  } = (0,react.useState)(null);

  const handlePlay = async (id, wrapper, index) => {
    if (play) setPlay(false);
    const data = trackResults.filter((track, idx) => idx >= index).map(track => track.uri);
    const tracks = await (0,Play/* default */.Z)(id, wrapper, data);
    setTrack(tracks);
  };

  (0,react.useEffect)(() => {
    setWidth(window.screen.width);

    function handleResize() {
      setWidth(window.screen.width);
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return /*#__PURE__*/jsx_runtime.jsx(Container, {
    children: trackResults.filter((track, idx) => width <= 900 ? idx <= 20 : idx <= 3).map((track, idx) => /*#__PURE__*/(0,jsx_runtime.jsxs)(Content, {
      onClick: () => handlePlay('', 'searchTracks', idx),
      className: "track-container",
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(TrackList, {
        className: "tracks__list",
        children: [/*#__PURE__*/jsx_runtime.jsx(TrackImage, {
          className: "tracks__image",
          children: /*#__PURE__*/jsx_runtime.jsx(next_image["default"], {
            height: 40,
            width: 40,
            src: track.albumUrl[2].url,
            alt: track.title
          })
        }), /*#__PURE__*/(0,jsx_runtime.jsxs)(TrackTitle, {
          children: [track.title, " ", /*#__PURE__*/jsx_runtime.jsx("span", {
            children: track.artist
          })]
        }), /*#__PURE__*/jsx_runtime.jsx(TrackDuration, {
          children: track.duration
        })]
      }), /*#__PURE__*/jsx_runtime.jsx(Mask, {
        children: /*#__PURE__*/jsx_runtime.jsx(BtnPlay, {
          className: "btn-play",
          onClick: () => handlePlay('', 'searchTracks', idx),
          children: /*#__PURE__*/jsx_runtime.jsx("button", {
            children: currentMusic === track.title ? /*#__PURE__*/jsx_runtime.jsx(next_image["default"], {
              src: (songPause_default()),
              width: "16",
              height: "16",
              alt: "pause"
            }) : /*#__PURE__*/jsx_runtime.jsx(next_image["default"], {
              src: (songPlay_default()),
              width: "16",
              height: "16",
              alt: "play"
            })
          })
        })
      })]
    }, idx))
  });
};

Songs.defaultProps = {};
/* harmony default export */ const Dashboard_Songs = (Songs);
// EXTERNAL MODULE: ./public/svg/play.svg
var svg_play = __webpack_require__(33860);
var play_default = /*#__PURE__*/__webpack_require__.n(svg_play);
// EXTERNAL MODULE: ./public/svg/pause.svg
var pause = __webpack_require__(30617);
var pause_default = /*#__PURE__*/__webpack_require__.n(pause);
;// CONCATENATED MODULE: ./components/Dashboard/CardTopResult/styles.js

const styles_Container = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-19o0egt-0"
})(["font-family:Helvetica,arial,sans-serif;display:flex;flex-direction:column;background-color:#181818;max-width:440px;padding:20px;gap:20px;transition:background-color 0.3s ease;position:relative;isolation:isolate;border-radius:4px;@media (max-width:900px){display:none;}&:hover{background-color:#282828;}"]);
const ContentImage = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__ContentImage",
  componentId: "sc-19o0egt-1"
})(["width:92px;height:92px;border-radius:50%;box-shadow:0 8px 24px rgb(0 0 0 / 50%);img{border-radius:50%;}"]);
const ContentArtist = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__ContentArtist",
  componentId: "sc-19o0egt-2"
})(["color:#fff;margin-top:28px;.artist__name{font-size:32px;font-weight:700;letter-spacing:-0.04em;line-height:36px;text-transform:none;}.artist__title{margin-top:4px;span{background-color:rgba(0,0,0,0.2);border-radius:500px;color:#fff;display:inline-block;padding:4px 12px;font-size:12px;font-weight:700;letter-spacing:0.1em;line-height:16px;text-transform:uppercase;}}"]);
const styles_Mask = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Mask",
  componentId: "sc-19o0egt-3"
})(["position:absolute;z-index:0;bottom:0;content:'';cursor:pointer;left:0;overflow:hidden;right:0;text-indent:100%;top:0;white-space:nowrap;&:hover{.button{opacity:1;}}"]);
const Button = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Button",
  componentId: "sc-19o0egt-4"
})(["position:absolute;right:68px;bottom:20px;opacity:0;z-index:2;transition:all 0.3s ease;&:hover{transform:scale(1.06);}button{cursor:pointer;background-color:#1db954;color:#fff;border-radius:500px;height:48px;width:48px;border:none;}"]);
;// CONCATENATED MODULE: ./components/Dashboard/CardTopResult/index.js










const CardTopResult = ({
  artistsResults,
  trackResults
}) => {
  var _artistsResults$, _trackResults$, _trackResults$2;

  const {
    setTrack,
    currentMusic,
    play,
    setPlay
  } = (0,react.useContext)(UserContext/* UserContext */.S);

  const handlePlay = async (id, wrapper, results = trackResults) => {
    if (play) setPlay(false);
    const data = results.map(track => track.uri);
    const tracks = await (0,Play/* default */.Z)(id, wrapper, data);
    setTrack(tracks);
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(styles_Container, {
    children: [/*#__PURE__*/jsx_runtime.jsx(ContentImage, {
      children: artistsResults[0] && /*#__PURE__*/jsx_runtime.jsx(next_image["default"], {
        src: (_artistsResults$ = artistsResults[0]) === null || _artistsResults$ === void 0 ? void 0 : _artistsResults$.image,
        height: 92,
        width: 92,
        alt: ""
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(ContentArtist, {
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: "artist__name",
        children: (_trackResults$ = trackResults[0]) === null || _trackResults$ === void 0 ? void 0 : _trackResults$.artist
      }), /*#__PURE__*/jsx_runtime.jsx("div", {
        className: "artist__title",
        children: /*#__PURE__*/jsx_runtime.jsx("span", {
          children: "Artist"
        })
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(styles_Mask, {
      children: /*#__PURE__*/jsx_runtime.jsx(Button, {
        className: "button",
        children: /*#__PURE__*/jsx_runtime.jsx("button", {
          "aria-label": "Play",
          onClick: () => handlePlay(),
          children: currentMusic === ((_trackResults$2 = trackResults[0]) === null || _trackResults$2 === void 0 ? void 0 : _trackResults$2.title) ? /*#__PURE__*/jsx_runtime.jsx(next_image["default"], {
            src: (pause_default()),
            width: "24",
            height: "24",
            alt: "pause"
          }) : /*#__PURE__*/jsx_runtime.jsx(next_image["default"], {
            src: (play_default()),
            width: "24",
            height: "24",
            alt: "play"
          })
        })
      })
    })]
  });
};

/* harmony default export */ const Dashboard_CardTopResult = (CardTopResult);
;// CONCATENATED MODULE: ./components/Dashboard/SearchResults/styles.js

const SearchResults_styles_Container = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1f2nzqf-0"
})(["display:grid;grid-template-columns:440px auto;gap:24px;margin-top:16px;padding:0 32px;@media (max-width:900px){grid-template-columns:1fr;}"]);
const Title = styled_components_cjs/* default.section.withConfig */.ZP.section.withConfig({
  displayName: "styles__Title",
  componentId: "sc-1f2nzqf-1"
})(["display:flex;flex-direction:column;min-height:300px;min-width:100%;@media (max-width:900px){display:none;}.content__title{}"]);
const Tracks = styled_components_cjs/* default.section.withConfig */.ZP.section.withConfig({
  displayName: "styles__Tracks",
  componentId: "sc-1f2nzqf-2"
})([".tracks__title{@media (max-width:900px){display:none;}}"]);
const TitleContent = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__TitleContent",
  componentId: "sc-1f2nzqf-3"
})(["margin-bottom:16px;"]);
const TitleText = styled_components_cjs/* default.h2.withConfig */.ZP.h2.withConfig({
  displayName: "styles__TitleText",
  componentId: "sc-1f2nzqf-4"
})(["color:#fff;display:inline-block;font-size:22px;font-weight:700;letter-spacing:-0.04em;line-height:28px;text-transform:none;"]);
;// CONCATENATED MODULE: ./components/Dashboard/SearchResults/index.js







const SearchResults = ({
  trackResults,
  artistsResults
}) => {
  return /*#__PURE__*/(0,jsx_runtime.jsxs)(SearchResults_styles_Container, {
    children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(Title, {
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: "content__title",
        children: /*#__PURE__*/jsx_runtime.jsx(TitleContent, {
          children: /*#__PURE__*/jsx_runtime.jsx(TitleText, {
            children: "Top Result"
          })
        })
      }), /*#__PURE__*/jsx_runtime.jsx(Dashboard_CardTopResult, {
        artistsResults: artistsResults,
        trackResults: trackResults
      })]
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(Tracks, {
      children: [/*#__PURE__*/jsx_runtime.jsx("div", {
        className: "tracks__title ",
        children: /*#__PURE__*/jsx_runtime.jsx(TitleContent, {
          children: /*#__PURE__*/jsx_runtime.jsx(TitleText, {
            children: "Songs"
          })
        })
      }), /*#__PURE__*/jsx_runtime.jsx(Dashboard_Songs, {
        trackResults: trackResults
      })]
    })]
  });
};

/* harmony default export */ const Dashboard_SearchResults = (SearchResults);
;// CONCATENATED MODULE: ./styles/search.js

const ResultsContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "search__ResultsContainer",
  componentId: "sc-1kiljw5-0"
})([""]);
const NoResultsContainer = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "search__NoResultsContainer",
  componentId: "sc-1kiljw5-1"
})(["margin-top:16px;padding:0 32px;"]);
const CardContainer = styled_components_cjs/* default.section.withConfig */.ZP.section.withConfig({
  displayName: "search__CardContainer",
  componentId: "sc-1kiljw5-2"
})(["font-family:Helvetica,arial,sans-serif;color:#fff;width:100%;.top{width:100%;.top-container{margin-bottom:16px;display:grid;grid-template-columns:1fr 60px;.title{h2{display:inline-block;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:24px;font-weight:700;letter-spacing:-0.04em;line-height:28px;text-transform:none;}}}a{text-decoration:none;font-size:12px;font-weight:700;letter-spacing:0.1em;line-height:16px;text-transform:uppercase;color:#fff;}}.card-container{display:flex;gap:24px;flex-wrap:wrap;}"]);
;// CONCATENATED MODULE: ./pages/search/index.js













const Search = ({
  user
}) => {
  const router = (0,next_router.useRouter)();
  const {
    search,
    track,
    setTrack,
    session,
    setSession
  } = (0,react.useContext)(UserContext/* UserContext */.S);
  const {
    0: topArtists,
    1: setTopArtists
  } = (0,react.useState)([]);
  const {
    0: trackResults,
    1: setTrackResults
  } = (0,react.useState)([]);
  const {
    0: artistsResults,
    1: setArtistsResults
  } = (0,react.useState)([]);
  const {
    0: recentlyTracks,
    1: setRecentTracks
  } = (0,react.useState)([]);
  const {
    getMyTopArtists,
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
  (0,react.useEffect)(async () => {
    if (!search) {
      setTrackResults([]);
      setArtistsResults([]);
      const data = await getMyTopArtists();
      setTopArtists(data);
      return;
    }

    try {
      let cancel = false;
      const searchTracks = await spotifyApi/* default.searchTracks */.Z.searchTracks(search);
      const tracks = await searchTracks.body.tracks.items.map(track => {
        return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: track.album.images,
          duration: (track.duration_ms / 60 / 1000).toFixed(2).replace('.', ':')
        };
      });
      const searchArtists = await spotifyApi/* default.searchArtists */.Z.searchArtists(search);
      const artists = await searchArtists.body.artists.items.map(image => {
        var _image$images$;

        return {
          image: (_image$images$ = image.images[1]) === null || _image$images$ === void 0 ? void 0 : _image$images$.url
        };
      });
      if (cancel) return;
      setTrackResults(tracks);
      setArtistsResults(artists);
    } catch (error) {
      router.replace('/home');
    }

    return () => cancel = true;
  }, [search]);

  if (!search) {
    return /*#__PURE__*/(0,jsx_runtime.jsxs)(NoResultsContainer, {
      children: [/*#__PURE__*/(0,jsx_runtime.jsxs)(CardContainer, {
        children: [/*#__PURE__*/jsx_runtime.jsx("div", {
          className: "top",
          children: /*#__PURE__*/(0,jsx_runtime.jsxs)("div", {
            className: "top-container",
            children: [/*#__PURE__*/jsx_runtime.jsx("div", {
              className: "title",
              children: /*#__PURE__*/jsx_runtime.jsx("h2", {
                children: "Your Top Artists"
              })
            }), /*#__PURE__*/jsx_runtime.jsx(next_link["default"], {
              href: "#",
              className: "more",
              children: "See All"
            })]
          })
        }), /*#__PURE__*/jsx_runtime.jsx("div", {
          className: "card-container",
          children: topArtists.map((el, idx) => /*#__PURE__*/jsx_runtime.jsx(Card/* default */.Z, {
            idx: idx,
            name: el.name,
            image: el.image,
            type: el.type,
            uri: el.uri,
            id: el.id,
            card: topArtists,
            wrapper: 'getArtistTopTracks'
          }, idx))
        })]
      }), ";"]
    });
  }

  return /*#__PURE__*/jsx_runtime.jsx(ResultsContainer, {
    children: /*#__PURE__*/jsx_runtime.jsx(Dashboard_SearchResults, {
      artistsResults: artistsResults,
      trackResults: trackResults
    })
  });
};

/* harmony default export */ const search = ((0,PrivateRoute/* default */.Z)(Search));

/***/ }),

/***/ 85824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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

      const compMod = __webpack_require__(15617)

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
        page: "/search",
        buildId: "f7qlU0knZg_wnjqmUQd90",
        escapedBuildId: "f7qlU0knZg_wnjqmUQd90",
        basePath: "",
        pageIsDynamic: false,
        encodedPreviewProps: {previewModeId:"4e1fef4dbb42313137bdbb18ad3f8285",previewModeSigningKey:"21fbd62ca94a75de84acd8db1a75db0b6a0ef4b520ce623fe92b2442567a0043",previewModeEncryptionKey:"7c3234c6a20bd8da7f45372c5b9b41509c965856fe624e556573d451df7b2ef3"}
      })
      
    

/***/ }),

/***/ 30569:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9ImltZyIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICA8cmVjdCB4PSI1IiB5PSIzIiB3aWR0aD0iNCIgaGVpZ2h0PSIxOCIgZmlsbD0iI2ZmZiI+PC9yZWN0PgogIDxyZWN0IHg9IjE1IiB5PSIzIiB3aWR0aD0iNCIgaGVpZ2h0PSIxOCIgZmlsbD0iI2ZmZiI+PC9yZWN0Pgo8L3N2Zz4="

/***/ }),

/***/ 76166:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMTYiIHJvbGU9ImltZyIgd2lkdGg9IjE2IiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogIDxwb2x5Z29uIHBvaW50cz0iMjEuNTcgMTIgNS45OCAzIDUuOTggMjEgMjEuNTcgMTIiIGZpbGw9IiNmZmYiIGNvbG9yPSIjZmZmIj48L3BvbHlnb24+Cjwvc3ZnPg=="

/***/ }),

/***/ 1014:
/***/ ((module) => {

"use strict";
module.exports = require("critters");

/***/ }),

/***/ 2186:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/@ampproject/toolbox-optimizer");

/***/ }),

/***/ 39491:
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ 57147:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 13685:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 85158:
/***/ ((module) => {

"use strict";
module.exports = require("http2");

/***/ }),

/***/ 95687:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 41808:
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ 22037:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 71017:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 63477:
/***/ ((module) => {

"use strict";
module.exports = require("querystring");

/***/ }),

/***/ 12781:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 71576:
/***/ ((module) => {

"use strict";
module.exports = require("string_decoder");

/***/ }),

/***/ 24404:
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ 76224:
/***/ ((module) => {

"use strict";
module.exports = require("tty");

/***/ }),

/***/ 57310:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ 59796:
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
var __webpack_exports__ = __webpack_require__.X(0, [174,556,432], () => (__webpack_exec__(85824)));
module.exports = __webpack_exports__;

})();