exports.id = 432;
exports.ids = [432];
exports.modules = {

/***/ 42432:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Dashboard_Card)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(67294);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(25675);
// EXTERNAL MODULE: ./contexts/UserContext.js
var UserContext = __webpack_require__(90933);
// EXTERNAL MODULE: ./utils/Play.js
var Play = __webpack_require__(54307);
// EXTERNAL MODULE: ./node_modules/styled-components/dist/styled-components.cjs.js
var styled_components_cjs = __webpack_require__(60027);
;// CONCATENATED MODULE: ./components/Dashboard/Card/styles.js

const Container = styled_components_cjs/* default.section.withConfig */.ZP.section.withConfig({
  displayName: "styles__Container",
  componentId: "sc-1xgctqv-0"
})(["font-family:Helvetica,arial,sans-serif;color:#fff;position:relative;background-color:#181818;padding:16px;border-radius:4px;transition:background-color 0.3s ease;max-width:192px;&:hover{background-color:#282828;}"]);
const CardImage = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__CardImage",
  componentId: "sc-1xgctqv-1"
})(["box-shadow:0 8px 24px rgb(0 0 0 / 50%);border-radius:50%;margin-bottom:20px;width:160px;height:160px;img{border-radius:50%;width:100%;height:100%;}"]);
const CardDetails = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__CardDetails",
  componentId: "sc-1xgctqv-2"
})(["min-height:62px;p{font-size:16px;font-weight:700;letter-spacing:normal;line-height:24px;text-transform:none;display:grid;margin:0;}span{font-size:14px;font-weight:400;letter-spacing:normal;line-height:16px;text-transform:capitalize;}"]);
const CardMask = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__CardMask",
  componentId: "sc-1xgctqv-3"
})(["position:absolute;z-index:0;bottom:0;content:'';cursor:pointer;left:0;overflow:hidden;right:0;text-indent:100%;top:0;white-space:nowrap;&:hover{.card-button{opacity:1;}}.card-button{&:hover{transform:scale(1.06);}}"]);
const CardButton = styled_components_cjs/* default.div.withConfig */.ZP.div.withConfig({
  displayName: "styles__CardButton",
  componentId: "sc-1xgctqv-4"
})(["position:absolute;right:32%;bottom:40%;opacity:0;z-index:2;transition:all 0.3s ease;@media (max-width:900px){opacity:1;}&:hover{transform:scale(1.06);}button{cursor:pointer;background-color:#1db954;color:#fff;border-radius:500px;height:40px;width:40px;border:none;}"]);
// EXTERNAL MODULE: ./public/svg/play.svg
var svg_play = __webpack_require__(33860);
var play_default = /*#__PURE__*/__webpack_require__.n(svg_play);
// EXTERNAL MODULE: ./public/svg/pause.svg
var pause = __webpack_require__(30617);
var pause_default = /*#__PURE__*/__webpack_require__.n(pause);
// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(85893);
;// CONCATENATED MODULE: ./components/Dashboard/Card/index.js













const Card = ({
  id,
  uri,
  idx,
  name,
  image,
  type,
  card,
  wrapper
}) => {
  const {
    setTrack,
    play,
    setPlay,
    currentArtist,
    currentMusic
  } = (0,react.useContext)(UserContext/* UserContext */.S);
  const {
    0: data,
    1: setData
  } = (0,react.useState)([]);
  (0,react.useEffect)(() => {
    if (card) {
      setData(card);
    }
  }, []);

  const handlePlay = async (id, wrapper, track, index) => {
    if (play) setPlay(false);

    if (id) {
      const tracks = await (0,Play/* default */.Z)(id, wrapper, track);
      setTrack(tracks);
    } else {
      const recentlyTracks = data.filter((track, idx) => idx >= index).map(track => track.uri);
      const tracks = await (0,Play/* default */.Z)(id, wrapper, recentlyTracks);
      setTrack(tracks);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime.jsxs)(Container, {
    children: [/*#__PURE__*/jsx_runtime.jsx(CardImage, {
      children: /*#__PURE__*/jsx_runtime.jsx(next_image["default"], {
        src: image,
        alt: name,
        height: 160,
        width: 160
      })
    }), /*#__PURE__*/(0,jsx_runtime.jsxs)(CardDetails, {
      children: [/*#__PURE__*/jsx_runtime.jsx("p", {
        children: name
      }), /*#__PURE__*/jsx_runtime.jsx("span", {
        children: type
      })]
    }), /*#__PURE__*/jsx_runtime.jsx(CardMask, {
      children: /*#__PURE__*/jsx_runtime.jsx(CardButton, {
        className: "card-button",
        children: /*#__PURE__*/jsx_runtime.jsx("button", {
          "aria-label": "Play",
          onClick: () => handlePlay(id, wrapper, uri, idx),
          children: currentArtist === name || currentMusic === name ? /*#__PURE__*/jsx_runtime.jsx(jsx_runtime.Fragment, {
            children: /*#__PURE__*/jsx_runtime.jsx(next_image["default"], {
              src: (pause_default()),
              height: "24",
              width: "24",
              alt: "pause"
            })
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

Card.defaultProps = {
  name: 'Title',
  image: 'https://rsdias-storage.s3.amazonaws.com/fundozinza.jpg',
  type: 'type',
  handlePlay: () => {
    return 'tracks';
  }
};
/* harmony default export */ const Dashboard_Card = (Card);

/***/ }),

/***/ 54307:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Play)
/* harmony export */ });
/* harmony import */ var _utils_Wrappers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(43968);

async function Play(id, wrapper, track) {
  const {
    getArtistTopTracks
  } = (0,_utils_Wrappers__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();

  switch (wrapper) {
    case 'getArtistTopTracks':
      const {
        tracks
      } = await getArtistTopTracks(id);
      const data = tracks.map(track => track.uri);
      return data;

    case 'searchTracks':
      return track;

    case 'getMyRecentlyPlayedTracks':
      return track;

    default:
      return track;
  }
}

/***/ }),

/***/ 43968:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Wrappers)
/* harmony export */ });
/* harmony import */ var _services_spotifyApi__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(42658);

function Wrappers() {
  const getArtistTopTracks = async id => {
    try {
      const response = await _services_spotifyApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getArtistTopTracks */ .Z.getArtistTopTracks(id, 'BR');
      const data = response.body;
      return data;
    } catch (error) {
      console.error('Error!', error);
    }
  };

  const getMyTopArtists = async () => {
    const response = await _services_spotifyApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getMyTopArtists */ .Z.getMyTopArtists();
    const topArtists = await response.body.items.map(artist => {
      return {
        name: artist.name,
        image: artist.images[2].url,
        type: artist.type,
        id: artist.id
      };
    });
    return topArtists;
  };

  const getMyRecentlyPlayedTracks = async () => {
    try {
      const response = await _services_spotifyApi__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getMyRecentlyPlayedTracks */ .Z.getMyRecentlyPlayedTracks({
        limit: 20
      });
      const data = await response.body.items.map(item => {
        return {
          name: item.track.name,
          uri: item.track.uri,
          image: item.track.album.images[1].url,
          type: item.track.type
        };
      }).filter(function (track) {
        return !this[JSON.stringify(track)] && (this[JSON.stringify(track)] = true);
      }, {}).filter((track, idx) => idx <= 4);
      return data;
    } catch (error) {
      console.error('Error!', error);
    }
  };

  return {
    getArtistTopTracks,
    getMyTopArtists,
    getMyRecentlyPlayedTracks
  };
}

/***/ }),

/***/ 30617:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGZpbGw9IiNmZmYiIHJvbGU9ImltZyIgIHZpZXdCb3g9IjAgMCAyNCAyNCIgYXJpYS1oaWRkZW49InRydWUiPgogIDxyZWN0IHg9IjUiIHk9IjMiIHdpZHRoPSI0IiBoZWlnaHQ9IjE4IiBmaWxsPSIjZmZmIj48L3JlY3Q+CiAgPHJlY3QgeD0iMTUiIHk9IjMiIHdpZHRoPSI0IiBoZWlnaHQ9IjE4IiBmaWxsPSIjZmZmIj48L3JlY3Q+Cjwvc3ZnPg=="

/***/ }),

/***/ 33860:
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjQiIHJvbGU9ImltZyIgd2lkdGg9IjI0IiB2aWV3Qm94PSIwIDAgMjQgMjQiPgogIDxwb2x5Z29uIHBvaW50cz0iMjEuNTcgMTIgNS45OCAzIDUuOTggMjEgMjEuNTcgMTIiIGZpbGw9IiNmZmYiPjwvcG9seWdvbj4KPC9zdmc+"

/***/ })

};
;