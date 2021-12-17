"use strict";
exports.id = 954;
exports.ids = [954];
exports.modules = {

/***/ 92954:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.destroyCookie = exports.setCookie = exports.parseCookies = void 0;
var cookie = __webpack_require__(70458);
var setCookieParser = __webpack_require__(19236);
var utils_1 = __webpack_require__(38785);
/**
 * Parses cookies.
 *
 * @param ctx NextJS page or API context, express context, null or undefined.
 * @param options Options that we pass down to `cookie` library.
 */
function parseCookies(ctx, options) {
    var _a, _b;
    if ((_b = (_a = ctx === null || ctx === void 0 ? void 0 : ctx.req) === null || _a === void 0 ? void 0 : _a.headers) === null || _b === void 0 ? void 0 : _b.cookie) {
        return cookie.parse(ctx.req.headers.cookie, options);
    }
    if (utils_1.isBrowser()) {
        return cookie.parse(document.cookie, options);
    }
    return {};
}
exports.parseCookies = parseCookies;
/**
 * Sets a cookie.
 *
 * @param ctx NextJS page or API context, express context, null or undefined.
 * @param name The name of your cookie.
 * @param value The value of your cookie.
 * @param options Options that we pass down to `cookie` library.
 */
function setCookie(ctx, name, value, options) {
    var _a, _b;
    if (options === void 0) { options = {}; }
    // SSR
    if (((_a = ctx === null || ctx === void 0 ? void 0 : ctx.res) === null || _a === void 0 ? void 0 : _a.getHeader) && ctx.res.setHeader) {
        // Check if response has finished and warn about it.
        if ((_b = ctx === null || ctx === void 0 ? void 0 : ctx.res) === null || _b === void 0 ? void 0 : _b.finished) {
            console.warn("Not setting \"" + name + "\" cookie. Response has finished.");
            console.warn("You should set cookie before res.send()");
            return {};
        }
        /**
         * Load existing cookies from the header and parse them.
         */
        var cookies = ctx.res.getHeader('Set-Cookie') || [];
        if (typeof cookies === 'string')
            cookies = [cookies];
        if (typeof cookies === 'number')
            cookies = [];
        /**
         * Parse cookies but ignore values - we've already encoded
         * them in the previous call.
         */
        var parsedCookies = setCookieParser.parse(cookies, {
            decodeValues: false,
        });
        /**
         * We create the new cookie and make sure that none of
         * the existing cookies match it.
         */
        var newCookie_1 = utils_1.createCookie(name, value, options);
        var cookiesToSet_1 = [];
        parsedCookies.forEach(function (parsedCookie) {
            if (!utils_1.areCookiesEqual(parsedCookie, newCookie_1)) {
                /**
                 * We serialize the cookie back to the original format
                 * if it isn't the same as the new one.
                 */
                var serializedCookie = cookie.serialize(parsedCookie.name, parsedCookie.value, __assign({ 
                    // we prevent reencoding by default, but you might override it
                    encode: function (val) { return val; } }, parsedCookie));
                cookiesToSet_1.push(serializedCookie);
            }
        });
        cookiesToSet_1.push(cookie.serialize(name, value, options));
        // Update the header.
        ctx.res.setHeader('Set-Cookie', cookiesToSet_1);
    }
    // Browser
    if (utils_1.isBrowser()) {
        if (options && options.httpOnly) {
            throw new Error('Can not set a httpOnly cookie in the browser.');
        }
        document.cookie = cookie.serialize(name, value, options);
    }
    return {};
}
exports.setCookie = setCookie;
/**
 * Destroys a cookie with a particular name.
 *
 * @param ctx NextJS page or API context, express context, null or undefined.
 * @param name Cookie name.
 * @param options Options that we pass down to `cookie` library.
 */
function destroyCookie(ctx, name, options) {
    /**
     * We forward the request destroy to setCookie function
     * as it is the same function with modified maxAge value.
     */
    return setCookie(ctx, name, '', __assign(__assign({}, (options || {})), { maxAge: -1 }));
}
exports.destroyCookie = destroyCookie;
/* Utility Exports */
exports["default"] = {
    set: setCookie,
    get: parseCookies,
    destroy: destroyCookie,
};
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 38785:
/***/ (function(__unused_webpack_module, exports) {


var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.areCookiesEqual = exports.hasSameProperties = exports.createCookie = exports.isBrowser = void 0;
/**
 * Tells whether we are in a browser or server.
 */
function isBrowser() {
    return typeof window !== 'undefined';
}
exports.isBrowser = isBrowser;
/**
 * Create an instance of the Cookie interface
 */
function createCookie(name, value, options) {
    var sameSite = options.sameSite;
    if (sameSite === true) {
        sameSite = 'strict';
    }
    if (sameSite === undefined || sameSite === false) {
        sameSite = 'lax';
    }
    var cookieToSet = __assign(__assign({}, options), { sameSite: sameSite });
    delete cookieToSet.encode;
    return __assign({ name: name, value: value }, cookieToSet);
}
exports.createCookie = createCookie;
/**
 * Tells whether given objects have the same properties.
 */
function hasSameProperties(a, b) {
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);
    if (aProps.length !== bProps.length) {
        return false;
    }
    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];
        if (a[propName] !== b[propName]) {
            return false;
        }
    }
    return true;
}
exports.hasSameProperties = hasSameProperties;
/**
 * Compare the cookie and return true if the cookies have equivalent
 * options and the cookies would be overwritten in the browser storage.
 *
 * @param a first Cookie for comparison
 * @param b second Cookie for comparison
 */
function areCookiesEqual(a, b) {
    var sameSiteSame = a.sameSite === b.sameSite;
    if (typeof a.sameSite === 'string' && typeof b.sameSite === 'string') {
        sameSiteSame = a.sameSite.toLowerCase() === b.sameSite.toLowerCase();
    }
    return (hasSameProperties(__assign(__assign({}, a), { sameSite: undefined }), __assign(__assign({}, b), { sameSite: undefined })) && sameSiteSame);
}
exports.areCookiesEqual = areCookiesEqual;
/* Functions */
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 70458:
/***/ ((__unused_webpack_module, exports) => {

/*!
 * cookie
 * Copyright(c) 2012-2014 Roman Shtylman
 * Copyright(c) 2015 Douglas Christopher Wilson
 * MIT Licensed
 */



/**
 * Module exports.
 * @public
 */

exports.parse = parse;
exports.serialize = serialize;

/**
 * Module variables.
 * @private
 */

var decode = decodeURIComponent;
var encode = encodeURIComponent;
var pairSplitRegExp = /; */;

/**
 * RegExp to match field-content in RFC 7230 sec 3.2
 *
 * field-content = field-vchar [ 1*( SP / HTAB ) field-vchar ]
 * field-vchar   = VCHAR / obs-text
 * obs-text      = %x80-FF
 */

var fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

/**
 * Parse a cookie header.
 *
 * Parse the given cookie header string into an object
 * The object has the various cookies as keys(names) => values
 *
 * @param {string} str
 * @param {object} [options]
 * @return {object}
 * @public
 */

function parse(str, options) {
  if (typeof str !== 'string') {
    throw new TypeError('argument str must be a string');
  }

  var obj = {}
  var opt = options || {};
  var pairs = str.split(pairSplitRegExp);
  var dec = opt.decode || decode;

  for (var i = 0; i < pairs.length; i++) {
    var pair = pairs[i];
    var eq_idx = pair.indexOf('=');

    // skip things that don't look like key=value
    if (eq_idx < 0) {
      continue;
    }

    var key = pair.substr(0, eq_idx).trim()
    var val = pair.substr(++eq_idx, pair.length).trim();

    // quoted values
    if ('"' == val[0]) {
      val = val.slice(1, -1);
    }

    // only assign once
    if (undefined == obj[key]) {
      obj[key] = tryDecode(val, dec);
    }
  }

  return obj;
}

/**
 * Serialize data into a cookie header.
 *
 * Serialize the a name value pair into a cookie string suitable for
 * http headers. An optional options object specified cookie parameters.
 *
 * serialize('foo', 'bar', { httpOnly: true })
 *   => "foo=bar; httpOnly"
 *
 * @param {string} name
 * @param {string} val
 * @param {object} [options]
 * @return {string}
 * @public
 */

function serialize(name, val, options) {
  var opt = options || {};
  var enc = opt.encode || encode;

  if (typeof enc !== 'function') {
    throw new TypeError('option encode is invalid');
  }

  if (!fieldContentRegExp.test(name)) {
    throw new TypeError('argument name is invalid');
  }

  var value = enc(val);

  if (value && !fieldContentRegExp.test(value)) {
    throw new TypeError('argument val is invalid');
  }

  var str = name + '=' + value;

  if (null != opt.maxAge) {
    var maxAge = opt.maxAge - 0;

    if (isNaN(maxAge) || !isFinite(maxAge)) {
      throw new TypeError('option maxAge is invalid')
    }

    str += '; Max-Age=' + Math.floor(maxAge);
  }

  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }

    str += '; Domain=' + opt.domain;
  }

  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }

    str += '; Path=' + opt.path;
  }

  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }

    str += '; Expires=' + opt.expires.toUTCString();
  }

  if (opt.httpOnly) {
    str += '; HttpOnly';
  }

  if (opt.secure) {
    str += '; Secure';
  }

  if (opt.sameSite) {
    var sameSite = typeof opt.sameSite === 'string'
      ? opt.sameSite.toLowerCase() : opt.sameSite;

    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }

  return str;
}

/**
 * Try decoding a string using a decoding function.
 *
 * @param {string} str
 * @param {function} decode
 * @private
 */

function tryDecode(str, decode) {
  try {
    return decode(str);
  } catch (e) {
    return str;
  }
}


/***/ }),

/***/ 19236:
/***/ ((module) => {



var defaultParseOptions = {
  decodeValues: true,
  map: false,
  silent: false,
};

function isNonEmptyString(str) {
  return typeof str === "string" && !!str.trim();
}

function parseString(setCookieValue, options) {
  var parts = setCookieValue.split(";").filter(isNonEmptyString);
  var nameValue = parts.shift().split("=");
  var name = nameValue.shift();
  var value = nameValue.join("="); // everything after the first =, joined by a "=" if there was more than one part

  options = options
    ? Object.assign({}, defaultParseOptions, options)
    : defaultParseOptions;

  try {
    value = options.decodeValues ? decodeURIComponent(value) : value; // decode cookie value
  } catch (e) {
    console.error(
      "set-cookie-parser encountered an error while decoding a cookie with value '" +
        value +
        "'. Set options.decodeValues to false to disable this feature.",
      e
    );
  }

  var cookie = {
    name: name, // grab everything before the first =
    value: value,
  };

  parts.forEach(function (part) {
    var sides = part.split("=");
    var key = sides.shift().trimLeft().toLowerCase();
    var value = sides.join("=");
    if (key === "expires") {
      cookie.expires = new Date(value);
    } else if (key === "max-age") {
      cookie.maxAge = parseInt(value, 10);
    } else if (key === "secure") {
      cookie.secure = true;
    } else if (key === "httponly") {
      cookie.httpOnly = true;
    } else if (key === "samesite") {
      cookie.sameSite = value;
    } else {
      cookie[key] = value;
    }
  });

  return cookie;
}

function parse(input, options) {
  options = options
    ? Object.assign({}, defaultParseOptions, options)
    : defaultParseOptions;

  if (!input) {
    if (!options.map) {
      return [];
    } else {
      return {};
    }
  }

  if (input.headers && input.headers["set-cookie"]) {
    // fast-path for node.js (which automatically normalizes header names to lower-case
    input = input.headers["set-cookie"];
  } else if (input.headers) {
    // slow-path for other environments - see #25
    var sch =
      input.headers[
        Object.keys(input.headers).find(function (key) {
          return key.toLowerCase() === "set-cookie";
        })
      ];
    // warn if called on a request-like object with a cookie header rather than a set-cookie header - see #34, 36
    if (!sch && input.headers.cookie && !options.silent) {
      console.warn(
        "Warning: set-cookie-parser appears to have been called on a request object. It is designed to parse Set-Cookie headers from responses, not Cookie headers from requests. Set the option {silent: true} to suppress this warning."
      );
    }
    input = sch;
  }
  if (!Array.isArray(input)) {
    input = [input];
  }

  options = options
    ? Object.assign({}, defaultParseOptions, options)
    : defaultParseOptions;

  if (!options.map) {
    return input.filter(isNonEmptyString).map(function (str) {
      return parseString(str, options);
    });
  } else {
    var cookies = {};
    return input.filter(isNonEmptyString).reduce(function (cookies, str) {
      var cookie = parseString(str, options);
      cookies[cookie.name] = cookie;
      return cookies;
    }, cookies);
  }
}

/*
  Set-Cookie header field-values are sometimes comma joined in one string. This splits them without choking on commas
  that are within a single set-cookie field-value, such as in the Expires portion.

  This is uncommon, but explicitly allowed - see https://tools.ietf.org/html/rfc2616#section-4.2
  Node.js does this for every header *except* set-cookie - see https://github.com/nodejs/node/blob/d5e363b77ebaf1caf67cd7528224b651c86815c1/lib/_http_incoming.js#L128
  React Native's fetch does this for *every* header, including set-cookie.

  Based on: https://github.com/google/j2objc/commit/16820fdbc8f76ca0c33472810ce0cb03d20efe25
  Credits to: https://github.com/tomball for original and https://github.com/chrusart for JavaScript implementation
*/
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString;
  }
  if (typeof cookiesString !== "string") {
    return [];
  }

  var cookiesStrings = [];
  var pos = 0;
  var start;
  var ch;
  var lastComma;
  var nextStart;
  var cookiesSeparatorFound;

  function skipWhitespace() {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  }

  function notSpecialChar() {
    ch = cookiesString.charAt(pos);

    return ch !== "=" && ch !== ";" && ch !== ",";
  }

  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;

    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        // ',' is a cookie separator if we have later first '=', not ';' or ','
        lastComma = pos;
        pos += 1;

        skipWhitespace();
        nextStart = pos;

        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }

        // currently special character
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          // we found cookies separator
          cookiesSeparatorFound = true;
          // pos is inside the next cookie, so back up and return it.
          pos = nextStart;
          cookiesStrings.push(cookiesString.substring(start, lastComma));
          start = pos;
        } else {
          // in param ',' or param separator ';',
          // we continue from that comma
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }

    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.substring(start, cookiesString.length));
    }
  }

  return cookiesStrings;
}

module.exports = parse;
module.exports.parse = parse;
module.exports.parseString = parseString;
module.exports.splitCookiesString = splitCookiesString;


/***/ })

};
;