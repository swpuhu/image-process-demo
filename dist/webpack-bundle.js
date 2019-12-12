/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/App */ "./src/App.js");


let app = new _src_App__WEBPACK_IMPORTED_MODULE_0__["default"]();
document.onselect = function (e) {
    e.preventDefault();
    e.stopPropagation();
}


document.body.appendChild(app.ref);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/style.less":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/style.less ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".toolbox {\n  top: 35px;\n  left: 10px;\n  width: 100px;\n  min-height: 500px;\n  font-size: 12px;\n  border: 1px solid #000;\n  overflow: hidden;\n}\n.toolbox .toolbox-caption {\n  padding: 5px;\n  border-bottom: 1px solid #000;\n}\n.toolbox .toolbox-body {\n  padding: 5px;\n}\n.toolbox .toolbox-icon {\n  width: 40px;\n  height: 40px;\n  line-height: 40px;\n  border-radius: 5px;\n  background-color: #2f2f2f;\n  text-align: center;\n}\n.toolbox .toolbox-icon.active {\n  background-color: #3b97ec;\n}\nbody {\n  margin: 0;\n  background-color: #4e4e4e;\n  color: #fff;\n  cursor: default;\n  overflow: hidden;\n}\ncanvas {\n  background-color: transparent;\n}\n.hide {\n  display: none;\n}\n.absolute {\n  position: absolute;\n}\n.vertical-align {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.top {\n  top: 0;\n}\n.left {\n  left: 0;\n}\n.flex {\n  display: flex;\n  align-items: center;\n}\n.header {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 28px;\n  border-bottom: 1px solid #000;\n  box-sizing: border-box;\n}\n.header .menu-droplist {\n  width: 100px;\n  margin-top: 5px;\n  border: 1px solid #2e2e2e;\n  box-shadow: 1px 1px 2px 1px #000;\n  background-color: #4e4e4e;\n  z-index: 999999;\n}\n.main {\n  position: absolute;\n  top: 28px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: -1;\n  right: 200px;\n}\n.main .drawing-board {\n  font-size: 0;\n  box-shadow: 0 0 5px 1px #000;\n}\n.main .drawing-board .resize-box {\n  position: absolute;\n  border: 1px #fff dashed;\n  transform: translate(0, 0);\n}\n.main .drawing-board .resize-box .resize-point {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #3b97ec;\n}\n.main .drawing-board .resize-box .rotate-point {\n  position: absolute;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  background-color: #ecc33b;\n}\n.main .drawing-board .resize-box .cut-point {\n  position: absolute;\n  width: 30px;\n  height: 2px;\n  background-color: #ecc33b;\n}\n.main .drawing-board .resize-box .resize-lt {\n  top: 0;\n  left: 0;\n  transform: translate(calc(10px / -2), calc(10px / -2));\n  cursor: nwse-resize;\n}\n.main .drawing-board .resize-box .resize-t {\n  top: 0;\n  left: 50%;\n  transform: translate(calc(10px / -2), calc(10px / -2));\n  cursor: ns-resize;\n}\n.main .drawing-board .resize-box .resize-rt {\n  top: 0;\n  right: 0;\n  transform: translate(calc(10px / 2), calc(10px / -2));\n  cursor: nesw-resize;\n}\n.main .drawing-board .resize-box .resize-r {\n  top: 50%;\n  right: 0;\n  transform: translate(calc(10px / 2), calc(10px / -2));\n  cursor: ew-resize;\n}\n.main .drawing-board .resize-box .resize-rd {\n  bottom: 0;\n  right: 0;\n  transform: translate(calc(10px / 2), calc(10px / 2));\n  cursor: nwse-resize;\n}\n.main .drawing-board .resize-box .resize-d {\n  bottom: 0;\n  left: 50%;\n  transform: translate(calc(10px / -2), calc(10px / 2));\n  cursor: ns-resize;\n}\n.main .drawing-board .resize-box .resize-ld {\n  bottom: 0;\n  left: 0;\n  transform: translate(calc(10px / -2), calc(10px / 2));\n  cursor: nesw-resize;\n}\n.main .drawing-board .resize-box .resize-l {\n  top: 50%;\n  left: 0;\n  transform: translate(calc(10px / -2), calc(10px / -2));\n  cursor: ew-resize;\n}\n.main .drawing-board .resize-box .resize-rotate {\n  top: -30px;\n  left: 50%;\n  transform: translate(calc(10px / -2), calc(10px / -2));\n  cursor: cell;\n}\n.main .drawing-board .resize-box .resize-rotate::after {\n  content: '';\n  display: block;\n  width: 1px;\n  height: calc(30px - 10px);\n  background-color: #fff;\n  transform: translate(calc(10px / 2), 10px);\n}\n.main .drawing-board .resize-box .resize-t__cut {\n  top: 0;\n  left: 50%;\n  transform: translate(calc(30px / -2), calc(10px / 2 + 5px));\n}\n.main .drawing-board .resize-box .resize-d__cut {\n  bottom: 0;\n  left: 50%;\n  transform: translate(calc(30px / -2), calc(10px / -2 - 5px));\n}\n.main .drawing-board .resize-box .resize-l__cut {\n  width: 2px;\n  height: 30px;\n  left: 0;\n  top: 50%;\n  transform: translate(calc(10px / 2 + 5px), calc(30px / -2));\n}\n.main .drawing-board .resize-box .resize-r__cut {\n  width: 2px;\n  height: 30px;\n  right: 0;\n  top: 50%;\n  transform: translate(calc(10px / -2 - 5px), calc(30px / -2));\n}\n.info {\n  position: absolute;\n  top: 28px;\n  bottom: 0;\n  right: 0;\n  width: 200px;\n  border-left: 1px solid #000;\n}\n.info .layer-info {\n  height: 500px;\n  overflow-y: auto;\n}\n.info .layer-info .layer-item {\n  margin: 10px 0 10px 5px;\n}\n.info .layer-info .layer-item.active {\n  background-color: #3b97ec;\n}\n.info .layer-info .layer-item__title {\n  flex: 1;\n  padding-left: 10px;\n  height: 20px;\n  line-height: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.context-menu {\n  width: 120px;\n  border: 1px solid #000;\n  padding: 5px;\n  background-color: #2f2f2f;\n  box-shadow: 0 0 3px 1px #000;\n  overflow: hidden;\n  z-index: 99999;\n}\n.context-menu.active {\n  opacity: 1;\n  transition: opacity 0.5s;\n}\n.context-menu.disappear {\n  opacity: 0;\n  transition: opacity 0.2s;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], "{").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      // eslint-disable-next-line prefer-destructuring
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = modules[_i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = "(".concat(item[2], ") and (").concat(mediaQuery, ")");
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot).concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var stylesInDom = {};

var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

function listToStyles(list, options) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

function addStylesToDom(styles, options) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i];
    var domStyle = stylesInDom[item.id];
    var j = 0;

    if (domStyle) {
      domStyle.refs++;

      for (; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j]);
      }

      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j], options));
      }
    } else {
      var parts = [];

      for (; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j], options));
      }

      stylesInDom[item.id] = {
        id: item.id,
        refs: 1,
        parts: parts
      };
    }
  }
}

function insertStyleElement(options) {
  var style = document.createElement('style');

  if (typeof options.attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      options.attributes.nonce = nonce;
    }
  }

  Object.keys(options.attributes).forEach(function (key) {
    style.setAttribute(key, options.attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  options.attributes = typeof options.attributes === 'object' ? options.attributes : {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  var styles = listToStyles(list, options);
  addStylesToDom(styles, options);
  return function update(newList) {
    var mayRemove = [];

    for (var i = 0; i < styles.length; i++) {
      var item = styles[i];
      var domStyle = stylesInDom[item.id];

      if (domStyle) {
        domStyle.refs--;
        mayRemove.push(domStyle);
      }
    }

    if (newList) {
      var newStyles = listToStyles(newList, options);
      addStylesToDom(newStyles, options);
    }

    for (var _i = 0; _i < mayRemove.length; _i++) {
      var _domStyle = mayRemove[_i];

      if (_domStyle.refs === 0) {
        for (var j = 0; j < _domStyle.parts.length; j++) {
          _domStyle.parts[j]();
        }

        delete stylesInDom[_domStyle.id];
      }
    }
  };
};

/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _container_Header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./container/Header */ "./src/container/Header.js");
/* harmony import */ var _container_Main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./container/Main */ "./src/container/Main.js");
/* harmony import */ var _container_Toolbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./container/Toolbox */ "./src/container/Toolbox.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/util */ "./src/util/util.js");
/* harmony import */ var _css_style_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/style.less */ "./src/css/style.less");
/* harmony import */ var _css_style_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_style_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _container_Info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./container/Info */ "./src/container/Info.js");







class App {
    constructor() {
        let header = new _container_Header__WEBPACK_IMPORTED_MODULE_0__["default"]();
        let main = new _container_Main__WEBPACK_IMPORTED_MODULE_1__["default"]();
        let info = new _container_Info__WEBPACK_IMPORTED_MODULE_5__["default"]();
        let toolbox = new _container_Toolbox__WEBPACK_IMPORTED_MODULE_2__["default"]();
        let template = {
            tagName: 'div',
            classList: ['my-app'],
            children: [
                {
                    component: header
                },
                {
                    component: main
                },
                {
                    component: info
                },
                {
                    component: toolbox
                }
            ]
        }

        document.onselectstart = function (e) {
            return false;
        }

        document.oncontextmenu = function (e) {
            e.preventDefault();
        }
        this.ref = _util_util__WEBPACK_IMPORTED_MODULE_3__["default"].generateDOM(template).root;
    }
}

/***/ }),

/***/ "./src/Enum/BlendMode.js":
/*!*******************************!*\
  !*** ./src/Enum/BlendMode.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    NORMAL: 'NORMAL'
});

/***/ }),

/***/ "./src/Enum/Step.js":
/*!**************************!*\
  !*** ./src/Enum/Step.js ***!
  \**************************/
/*! exports provided: MoveStep */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MoveStep", function() { return MoveStep; });
class Step {
    constructor (type) {
        this.type = type;
    }
}


class MoveStep extends Step {
    constructor(type, offsetX = 0, offsetY = 0, scaleX = 1, scaleY = 1, rotate = 0, clipT = 0, clipD = 0, clipL = 0, clipR = 0) {
        super(type);
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.scaleX = scaleX;
        this.scaleY = scaleY;
        this.rotate = rotate;
        this.clipT = clipT;
        this.clipD = clipD;
        this.clipL = clipL;
        this.clipR = clipR;
    }
}




/***/ }),

/***/ "./src/Enum/StepType.js":
/*!******************************!*\
  !*** ./src/Enum/StepType.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    MOVE: 'MOVE'
});

/***/ }),

/***/ "./src/Enum/ToolType.js":
/*!******************************!*\
  !*** ./src/Enum/ToolType.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    MOVE: 'MOVE'
});

/***/ }),

/***/ "./src/components/FileMenu.js":
/*!************************************!*\
  !*** ./src/components/FileMenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Base */ "./src/util/Base.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");
/* harmony import */ var _Enum_Step__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Enum/Step */ "./src/Enum/Step.js");
/* harmony import */ var _Enum_StepType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Enum/StepType */ "./src/Enum/StepType.js");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/action */ "./src/store/action.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");







class Item {
    constructor(text, onclick) {
        let template = {
            tagName: 'div',
            classList: ['menu-item'],
            text: text
        }
        this.ref = _util_util__WEBPACK_IMPORTED_MODULE_5__["default"].generateDOM(template).root;
        this.ref.addEventListener('click', onclick);
    }
}


class FileMenu extends _util_Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        let input = document.createElement('input');
        input.type = 'file';
        input.multiple = true;
        let that = this;
        input.onchange = function () {
            that.openFiles(this.files);
            input.value = null;
        }
        this.input = input;
        this.ref = this.render();
    }

    openFileByClick() {
        this.input.click();
    }


    openFiles(files) {
        for (let file of files) {
            // let file = this.files[0];
            let url = URL.createObjectURL(file);
            let image = new Image();
            image.onload = function () {
                URL.revokeObjectURL(url);
                let layer = {
                    width: image.width,
                    height: image.height,
                    originWidth: image.width,
                    originHeight: image.height,
                    image: image,
                    name: _util_util__WEBPACK_IMPORTED_MODULE_5__["default"].deletePostfix(file.name),
                    steps: [
                        new _Enum_Step__WEBPACK_IMPORTED_MODULE_2__["MoveStep"](_Enum_StepType__WEBPACK_IMPORTED_MODULE_3__["default"].MOVE)
                    ]
                };
                let zoomX = image.width / (window.innerWidth - 500);
                let zoomY = image.height / (window.innerHeight - 100);
                let zoom = Math.max(zoomX, zoomY);
                if (zoom < 1) {
                    zoom = 1;
                }
                if (!_store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.layers.length) {
                    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(Object(_store_action__WEBPACK_IMPORTED_MODULE_4__["openFile"])(layer));
                    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(Object(_store_action__WEBPACK_IMPORTED_MODULE_4__["changeZoom"])(zoom));
                } else {
                    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(Object(_store_action__WEBPACK_IMPORTED_MODULE_4__["openFile"])(layer));
                    // store.dispatch(changeZoom(zoom));
                }
            }
            image.src = url;;
        }

    }

    render() {
        let that = this;
        let openFile = new Item('打开文件', function () {
                that.openFileByClick();
            });
        let saveFile = new Item('保存文件', function () {
            _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(Object(_store_action__WEBPACK_IMPORTED_MODULE_4__["savePicture"])());
        })
        let template = {
            tagName: 'div',
            classList: ['menu-droplist', 'hide', 'absolute'],
            children: [
                {
                    component: openFile
                },
                {
                    component: saveFile
                }
            ]
        }
        let root = _util_util__WEBPACK_IMPORTED_MODULE_5__["default"].generateDOM(template).root;
        return root;
    }

        
}

/* harmony default export */ __webpack_exports__["default"] = (_util_util__WEBPACK_IMPORTED_MODULE_5__["default"].getSingleton(FileMenu));

/***/ }),

/***/ "./src/components/Layer.js":
/*!*********************************!*\
  !*** ./src/components/Layer.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layer; });
/* harmony import */ var _util_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Base */ "./src/util/Base.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");
/* harmony import */ var _webgl_WebGL__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../webgl/WebGL */ "./src/webgl/WebGL.js");




class Layer extends _util_Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(width, height) {
        super();
        let template = {
            tagName: 'canvas',
            classList: ['canvas', 'absolute', 'left', 'top']
        }
        
        this.ref = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].generateDOM(template).root;
        this.ref.width = width;
        this.ref.height = height;
        this.renderContext = new _webgl_WebGL__WEBPACK_IMPORTED_MODULE_2__["default"](this.ref);
    }

    render(layer) {
        this.renderContext.render(layer);
    }

    remove() {
        this.ref.remove();
    }
}

/***/ }),

/***/ "./src/components/LayerContextMenu.js":
/*!********************************************!*\
  !*** ./src/components/LayerContextMenu.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LayerContextMenu; });
/* harmony import */ var _util_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Base */ "./src/util/Base.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/action */ "./src/store/action.js");
/* harmony import */ var _container_ContextMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../container/ContextMenu */ "./src/container/ContextMenu.js");






class LayerContextMenu extends _util_Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        let that = this;
        this.menu = new _container_ContextMenu__WEBPACK_IMPORTED_MODULE_4__["default"]([
            {
                name: '删除',
                callback: function () {
                    console.log('delete');
                    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(Object(_store_action__WEBPACK_IMPORTED_MODULE_3__["deleteLayer"])());
                    that.hide();
                }
            },
            {
                name: '自由变换',
                callback: function () {
                    _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(Object(_store_action__WEBPACK_IMPORTED_MODULE_3__["transformLayer"])())
                }
            }
        ]);
        this.menu.ref.classList.add('disappear');
        this.menu.ref.classList.add('hide');
        document.body.appendChild(this.menu.ref);

        document.addEventListener('mouseup', function () {
            that.hide();
        })

        
        this.menu.ref.addEventListener('transitionend', function () {
            if (!this.classList.contains('active')) {
                this.classList.add('hide');
            }
        });
    }

    /**
     * 
     * @param {MouseEvent} e 
     */
    show(e) {
        this.menu.ref.classList.remove('hide');
        setTimeout(() => {
            
            this.menu.ref.classList.remove('disappear');
        });
        this.menu.ref.classList.add('active');
        let left = e.clientX;
        let top = e.clientY;
        if (left + this.menu.ref.offsetWidth > window.innerWidth) {
            left = window.innerWidth - this.menu.ref.offsetWidth;
        }
        if (top + this.menu.ref.offsetHeight > window.innerHeight) {
            top = window.innerHeight - this.menu.ref.offsetHeight;
        }
        this.menu.ref.style.left =  left + 'px';
        this.menu.ref.style.top = top + 'px';
    }

    hide() {
        this.menu.ref.classList.remove('active');
        this.menu.ref.classList.add('disappear');
        
    }
}

/***/ }),

/***/ "./src/components/LayerInfo.js":
/*!*************************************!*\
  !*** ./src/components/LayerInfo.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Base */ "./src/util/Base.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/action */ "./src/store/action.js");
/* harmony import */ var _LayerContextMenu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./LayerContextMenu */ "./src/components/LayerContextMenu.js");






class Item {
    constructor(layer, clearAllActive, changeLayer) {
        this.layer = layer;
        this.ref = this.render();
        this.isActive = false;
        this.clearAllActive = clearAllActive;
        this.changeLayer = changeLayer;
    }

    render() {
        let template = {
            tagName: 'div',
            classList: ['layer-item', 'flex'],
            children: [
                {
                    tagName: 'img',
                    classList: ['layer-item__stamp'],
                    ref: 'stamp'
                },
                {
                    tagName: 'div',
                    classList: ['layer-item__title'],
                    text: this.layer.name,
                    title: this.layer.name
                }
            ]
        }
        let {root, stamp} = _util_util__WEBPACK_IMPORTED_MODULE_2__["default"].generateDOM(template);
        root.draggable = true;
        let that = this;
        root.addEventListener('click', function () {
            that.clearAllActive();
            that.active();
            _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].dispatch(Object(_store_action__WEBPACK_IMPORTED_MODULE_3__["changeLayer"])(that.layer));
        })


        root.ondragstart = function () {
            console.log('start');
        }

        // root.ondragover = function (e) {
            
        // }

        stamp.src = _util_util__WEBPACK_IMPORTED_MODULE_2__["default"].generateStamp(this.layer.image);
        return root;
    }

    active() {
        this.isActive = true;
        this.ref.classList.add('active');
    }

    disable() {
        this.isActive = false;
        this.ref.classList.remove('active');
    }

    remove() {
        this.ref.remove();
    }
}

class LayerInfo extends _util_Base__WEBPACK_IMPORTED_MODULE_0__["default"]{
    constructor() {
        super();
        this.ref = this.render();    
        this.layerInfoItems = [];
        this.clearAllActive = this.clearAllActive.bind(this);
        this.changeLayer = this.changeLayer.bind(this);
        this.contextMenu = new _LayerContextMenu__WEBPACK_IMPORTED_MODULE_4__["default"]();
    }

    render() {
        let template = {
            tagName: 'div',
            classList: ['layer-info'],
            children: []
        }
        for (let i = 0; i < _store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.layers.length; i++) {
            template.push({
                component: new Item(_store_index__WEBPACK_IMPORTED_MODULE_1__["default"].state.layers[i])
            })
        }
        let root = _util_util__WEBPACK_IMPORTED_MODULE_2__["default"].generateDOM(template).root;
        let that = this;
        root.addEventListener('contextmenu', function (e) {
            that.contextMenu.show(e);
        })

        root.ondragover = function (e) {
            e.preventDefault();
            return false;
        }
        root.ondrop = function (e) {
            e.preventDefault();
            console.log('drop');
        }

        return root;
    }


    clearAllActive() {
        this.layerInfoItems.forEach(item => item.disable());
    }

    addLayer(layer) {
        let item = new Item(layer, this.clearAllActive, this.changeLayer);
        this.clearAllActive();
        item.active();
        this.layerInfoItems.push(item);
        this.ref.appendChild(item.ref);
    }

    deleteLayer(layer) {
        let index = this.layerInfoItems.findIndex(item => item.layer === layer);
        if (index > -1) {
            let deletedLayer = this.layerInfoItems.splice(index, 1)[0];
            deletedLayer.remove();
            deletedLayer = null;
        }
    }

    changeLayer(layer) {
        let item = this.layerInfoItems.find(it => it.layer === layer);
        if (item) {
            this.clearAllActive();
            item.active();
        }
    }


}


/* harmony default export */ __webpack_exports__["default"] = (_util_util__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleton(LayerInfo));

/***/ }),

/***/ "./src/components/ResizeBox.js":
/*!*************************************!*\
  !*** ./src/components/ResizeBox.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ResizeBox; });
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");
/* harmony import */ var _util_Base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/Base */ "./src/util/Base.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");
/* harmony import */ var _webgl_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../webgl/util */ "./src/webgl/util.js");
/* harmony import */ var _Enum_StepType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Enum/StepType */ "./src/Enum/StepType.js");
/* harmony import */ var _util_Vec2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/Vec2 */ "./src/util/Vec2.js");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/action */ "./src/store/action.js");








class ResizeBox extends _util_Base__WEBPACK_IMPORTED_MODULE_1__["default"] {
    constructor(container) {
        super();
        this.container = container;
        this.ref = this.render();
        this.isShow = false;
        this.layer = null;
    }

    render() {
        let template = {
            tagName: 'div',
            classList: ['resize-box'],
            children: [
                {
                    tagName: 'div',
                    classList: ['resize-lt', 'resize-point'],
                    ref: 'lt'
                },
                {
                    tagName: 'div',
                    classList: ['resize-t', 'resize-point'],
                    ref: 't'
                },
                {
                    tagName: 'div',
                    classList: ['resize-rt', 'resize-point'],
                    ref: 'rt'
                },
                {
                    tagName: 'div',
                    classList: ['resize-r', 'resize-point'],
                    ref: 'r'
                },
                {
                    tagName: 'div',
                    classList: ['resize-rd', 'resize-point'],
                    ref: 'rd'
                }, 
                {
                    tagName: 'div',
                    classList: ['resize-d', 'resize-point'],
                    ref: 'd'
                }, 
                {
                    tagName: 'div',
                    classList: ['resize-ld', 'resize-point'],
                    ref: 'ld'
                },
                {
                    tagName: 'div',
                    classList: ['resize-l', 'resize-point'],
                    ref: 'l'
                }, 
                {
                    tagName: 'div',
                    classList: ['resize-rotate', 'rotate-point'],
                    ref: 'rotate'
                },
                {
                    tagName: 'div',
                    classList: ['resize-t__cut', 'cut-point'],
                    ref: 'tCut'
                },
                {
                    tagName: 'div',
                    classList: ['resize-d__cut', 'cut-point'],
                    ref: 'dCut'
                },
                {
                    tagName: 'div',
                    classList: ['resize-l__cut', 'cut-point'],
                    ref: 'lCut'
                }, 
                {
                    tagName: 'div',
                    classList: ['resize-r__cut', 'cut-point'],
                    ref: 'dCut'
                }
            ]
        }

        let {lt, t, rt, r, rd, d, ld, l, rotate, tCut, dCut, lCut, rCut, root} = _util_util__WEBPACK_IMPORTED_MODULE_0__["default"].generateDOM(template);
        let that = this;
        let currentCtrl = null;
        let lastMoveStep = null;
        let currentRotate = 0;
        let startX, startY;
        let initWidth, initHeight;
        let initScaleX, initScaleY;
        let v, angleDiff, offsetX, offsetY, currentWidth, currentHeight;

        lt.addEventListener('mousedown', mouseDown);
        rt.addEventListener('mousedown', mouseDown);
        ld.addEventListener('mousedown', mouseDown);
        rd.addEventListener('mousedown', mouseDown);
        t.addEventListener('mousedown', mouseDown);
        d.addEventListener('mousedown', mouseDown);
        l.addEventListener('mousedown', mouseDown);
        r.addEventListener('mousedown', mouseDown);
        


        function move(e) {
            v = new _util_Vec2__WEBPACK_IMPORTED_MODULE_5__["default"](e.clientX - startX, e.clientY - startY);
            angleDiff = v.angle - currentRotate;
            offsetX = v.m * Math.cos(angleDiff);
            offsetY = v.m * Math.sin(angleDiff);

            currentCtrl && currentCtrl(e);

            lastMoveStep.scaleX = currentWidth / initWidth;
            lastMoveStep.scaleY = currentHeight / initHeight;
            _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_store_action__WEBPACK_IMPORTED_MODULE_6__["drawLayer"])(that.layer));
            that.updatePosition(that.layer);   
        }

        function up () {
            that.layer.currentWidth *= lastMoveStep.scaleX;
            that.layer.currentHeight *= lastMoveStep.scaleY;
            document.removeEventListener('mousemove', move);
            document.removeEventListener('mouseup', up);
        }

        function ltControl (e) {
            currentWidth = initWidth * initScaleX - offsetX * 2 * _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.zoom;
            currentHeight = initHeight * initScaleY - offsetY * 2 * _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.zoom;
        }

        function rtControl(e) {
            currentWidth = initWidth * initScaleX + offsetX * 2 * _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.zoom;
            currentHeight = initHeight * initScaleY - offsetY * 2 * _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.zoom;
        }

        function ldControl (e) {
            currentWidth = initWidth * initScaleX - offsetX * 2 * _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.zoom;
            currentHeight = initHeight * initScaleY + offsetY * 2 * _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.zoom;
        }

        function rdControl(e) {
            currentWidth = initWidth * initScaleX + offsetX * 2 * _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.zoom;
            currentHeight = initHeight * initScaleY + offsetY * 2 * _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.zoom;
        }

        function lControl(e) {
            currentWidth = initWidth * initScaleX - offsetX * 2 * _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.zoom;
        }

        function rControl(e) {
            currentWidth = initWidth * initScaleX + offsetX * 2 * _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.zoom;
        }

        function tControl(e) {
            currentHeight = initHeight * initScaleY - offsetY * 2 * _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.zoom;
        }

        function dControl(e) {
            currentHeight = initHeight * initScaleY + offsetY * 2 * _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.zoom;
        }

        function mouseDown(e) {
            e.stopPropagation();
            if (this.classList.contains('resize-lt')) {
                currentCtrl = ltControl;
            } else if (this.classList.contains('resize-rt')) {
                currentCtrl = rtControl;
            } else if (this.classList.contains('resize-ld')) {
                currentCtrl = ldControl;
            } else if (this.classList.contains('resize-rd')) {
                currentCtrl = rdControl;
            } else if (this.classList.contains('resize-t')) {
                currentCtrl = tControl;
            } else if (this.classList.contains('resize-d')) {
                currentCtrl = dControl;
            } else if (this.classList.contains('resize-l')) {
                currentCtrl = lControl;
            } else if (this.classList.contains('resize-r')) {
                currentCtrl = rControl;
            }
            
            lastMoveStep = that.layer.steps[that.layer.steps.length - 1];
            if (lastMoveStep) {
                currentRotate = lastMoveStep.rotate * Math.PI / 180;
                initWidth = that.layer.originWidth;
                initHeight = that.layer.originHeight;
                initScaleX = lastMoveStep.scaleX;
                initScaleY = lastMoveStep.scaleY;
            }
            startX = e.clientX;
            startY = e.clientY;
            document.addEventListener('mousemove', move);
            document.addEventListener('mouseup', up);
        }

        
        
        return root;
    }

    show(layer) {
        this.layer = layer;
        this.updatePosition(layer);
        this.container.appendChild(this.ref);
        this.isShow = true;

    }

    hide() {
        this.ref.remove();
        this.isShow = false;
    }

    updatePosition(layer) {
        let width = _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.width / _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.zoom;
        let height = _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.height / _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.zoom;
        let currentLayer = layer;
        let x1 = currentLayer.boundary.minX * width;
        let x2 = currentLayer.boundary.maxX * width;
        let y1 = currentLayer.boundary.minY * height;
        let y2 = currentLayer.boundary.maxY * height;
        let centerX = (x1 + x2) / 2;
        let centerY = (y1 + y2) / 2;
        let lastStep = currentLayer.steps[currentLayer.steps.length - 1];
        if (lastStep.type === _Enum_StepType__WEBPACK_IMPORTED_MODULE_4__["default"].MOVE) {
            // let translateMat = glUtil.createTranslateMatrix(lastStep.offsetX, lastStep.offsetY, 0);
            // let scaleMat = glUtil.createScaleMatrix(lastStep.scaleX, lastStep.scaleY, 1, {x: centerX, y: centerY, z: 1});
            // let rotateMat = glUtil.createRotateMatrix({x: centerX, y: centerY, z: 1}, lastStep.rotate);
            // let mat = glUtil.multiply(scaleMat, translateMat);
            x1 = (x1 - centerX) * lastStep.scaleX + centerX + lastStep.offsetX / _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.zoom;
            x2 = (x2 - centerX) * lastStep.scaleX + centerX + lastStep.offsetX / _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.zoom;
            y1 = (y1 - centerY) * lastStep.scaleY + centerY - lastStep.offsetY / _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.zoom;
            y2 = (y2 - centerY) * lastStep.scaleY + centerY - lastStep.offsetY / _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.zoom;
        }
        

        this.ref.style.left = x1 + 'px';
        this.ref.style.top = y1 + 'px';
        this.ref.style.width = x2 - x1 + 'px';
        this.ref.style.height = y2 - y1 + 'px';
        
    }

}

/***/ }),

/***/ "./src/container/ContextMenu.js":
/*!**************************************!*\
  !*** ./src/container/ContextMenu.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ContextMenu; });
/* harmony import */ var _util_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Base */ "./src/util/Base.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");




class ContextMenuItem {
    constructor(text, onclick) {
        let template = {
            tagName: 'div',
            classList: ['contextmenu-item'],
            text: text
        }
        this.ref = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].generateDOM(template).root;
        this.ref.addEventListener('click', function (e) {
            e.preventDefault();
            onclick();
        });
    }
}


class ContextMenu extends _util_Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor (props) {
        super();
        this.props = props;
        this.ref = this.render();
    }

    render() {
        let template = {
            tagName: 'div',
            classList: ['context-menu', 'absolute'],
            children: [

            ]
        }

        for (let prop of this.props) {
            let contextMenuItem = new ContextMenuItem(prop.name, prop.callback)
            template.children.push({
                component: contextMenuItem
            })
        }

        let root = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].generateDOM(template).root;

        return root;
    }
}

/***/ }),

/***/ "./src/container/DrawingBoard.js":
/*!***************************************!*\
  !*** ./src/container/DrawingBoard.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Base */ "./src/util/Base.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");
/* harmony import */ var _components_Layer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layer */ "./src/components/Layer.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");
/* harmony import */ var _Enum_StepType__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Enum/StepType */ "./src/Enum/StepType.js");
/* harmony import */ var _Enum_ToolType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Enum/ToolType */ "./src/Enum/ToolType.js");
/* harmony import */ var _Enum_Step__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Enum/Step */ "./src/Enum/Step.js");
/* harmony import */ var _Enum_BlendMode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Enum/BlendMode */ "./src/Enum/BlendMode.js");
/* harmony import */ var _webgl_OffCanvas__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../webgl/OffCanvas */ "./src/webgl/OffCanvas.js");
/* harmony import */ var _components_ResizeBox__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ResizeBox */ "./src/components/ResizeBox.js");












class DrawingBoard extends _util_Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.ref = this.render();
        this.layers = [];
        this.offCanvas = new _webgl_OffCanvas__WEBPACK_IMPORTED_MODULE_8__["default"](300, 150);
        this.resizeBox = new _components_ResizeBox__WEBPACK_IMPORTED_MODULE_9__["default"](this.ref);
        // document.body.appendChild(this.offCanvas.canvas);
    }


    render() {
        let template = {
            tagName: 'div',
            classList: ['drawing-board', 'absolute', 'vertical-align'],
        };
        let root = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].generateDOM(template).root;
        let that = this;
        let startX, startY;
        let currentWidth, currentHeight;

        function mousedown(e) {
            startX = e.clientX;
            startY = e.clientY;
            document.addEventListener('mousemove', mousemove);
            document.addEventListener('mouseup', mouseup);
        }

        function mousemove(e) {
            let offsetX = e.clientX - startX;
            let offsetY = e.clientY - startY;
            
            let layers = _store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.currentLayer;
            if (_store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.currentTool === _Enum_ToolType__WEBPACK_IMPORTED_MODULE_5__["default"].MOVE) {
                for (let layer of layers) {
                    let lastStep = layer.steps[layer.steps.length - 1];
                    if (lastStep && lastStep.type === _Enum_StepType__WEBPACK_IMPORTED_MODULE_4__["default"].MOVE) {
                        lastStep.offsetX += (e.movementX * _store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.zoom);
                        lastStep.offsetY -= (e.movementY * _store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.zoom);
                    } else {
                        let newStep = new _Enum_Step__WEBPACK_IMPORTED_MODULE_6__["MoveStep"](_Enum_StepType__WEBPACK_IMPORTED_MODULE_4__["default"].MOVE, offsetX, offsetY);
                        layer.steps.push(newStep);
                    }

                    let currentLayer = that.layers.find(item => item.layer === layer);
                    let currentCanvas = currentLayer.canvas;
                    currentCanvas.render(currentLayer.layer);
                }
            }

            that.resizeBox.updatePosition(layers[0]);
            
            


        }

        function mouseup() {
            document.removeEventListener('mousemove', mousemove);
            document.removeEventListener('mouseup', mouseup);
        }
        
        root.addEventListener('mousedown', mousedown);
        return root;
    }

    addCanvas(layer) {
        let width = ~~(_store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.width / _store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.zoom);
        let height = ~~(_store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.height / _store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.zoom);
        let canvas;
        if (_store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.width && _store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.height) {
            canvas = new _components_Layer__WEBPACK_IMPORTED_MODULE_2__["default"](_store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.width, _store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.height);
        } else {
            canvas = new _components_Layer__WEBPACK_IMPORTED_MODULE_2__["default"](layer.width, layer.height);
        }
        canvas.ref.style.width = width + 'px';
        canvas.ref.style.height = height + 'px';
        canvas.name = layer.name;
        this.layers.push({
            layer: layer,
            canvas: canvas
        });
        canvas.render(layer);
        this.ref.appendChild(canvas.ref);
    }

    deleteCanvas(layer) {
        let index = this.layers.findIndex(item => item.layer === layer);
        if (index > -1) {
            let deletedCanvas = this.layers.splice(index, 1)[0];
            deletedCanvas.canvas.remove();
            deletedCanvas.canvas = null;
        }
    }

    changeZoom(zoom) {

        let width = ~~(_store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.width / zoom);
        let height = ~~(_store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.height / zoom);
        this.offCanvas.changeZoom(_store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.width, _store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.height);
        this.ref.style.width = width + 'px';
        this.ref.style.height = height + 'px'
        this.layers.forEach(layer => {
            layer.canvas.ref.style.width = width + 'px';
            layer.canvas.ref.style.height = height + 'px';
        });
    }

    draw(layer) {
        let item = this.layers.find(item => item.layer === layer);
        if (item) {
            let canvas = item.canvas;
            canvas.render(layer);
        }
    }


    loadImage(src) {
        return new Promise((resolve, reject) => {
            let image = new Image();
            image.onload = function () {
                resolve(image);
            };
            image.src = src;
        })
    }

    showResizeBox(layer) {
        this.resizeBox.show(layer);
    }
    
    async savePicture() {
        let images = [];
        for (let layer of this.layers) {
            let canvas = layer.canvas;
            
            canvas.render(layer.layer);
            let image = await this.loadImage(canvas.ref.toDataURL());
            images.push({
                texture: image,
                mode: _Enum_BlendMode__WEBPACK_IMPORTED_MODULE_7__["default"].NORMAL
            })
        }
        this.offCanvas.blendImages(images);
        let src = this.offCanvas.canvas.toDataURL();
        _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].downloadBase64(src, 'test.png');
        this.offCanvas.blendComplete();
    }


}

/* harmony default export */ __webpack_exports__["default"] = (_util_util__WEBPACK_IMPORTED_MODULE_1__["default"].getSingleton(DrawingBoard));

/***/ }),

/***/ "./src/container/Header.js":
/*!*********************************!*\
  !*** ./src/container/Header.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Header; });
/* harmony import */ var _util_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Base */ "./src/util/Base.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");
/* harmony import */ var _container_Menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container/Menu */ "./src/container/Menu.js");





class Header extends _util_Base__WEBPACK_IMPORTED_MODULE_0__["default"]{
    constructor () {
        super();
        let menu = new _container_Menu__WEBPACK_IMPORTED_MODULE_2__["default"]();
        let template = {
            tagName: 'div',
            classList: ['header'],
            children: [
                {
                    component: menu
                }
            ]
        }
        this.ref = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].generateDOM(template).root;
        
    }
}


/***/ }),

/***/ "./src/container/Info.js":
/*!*******************************!*\
  !*** ./src/container/Info.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Info; });
/* harmony import */ var _util_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Base */ "./src/util/Base.js");
/* harmony import */ var _components_LayerInfo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/LayerInfo */ "./src/components/LayerInfo.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");




class Info extends _util_Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.ref = this.render();
    }

    render() {
        let layerInfo = new _components_LayerInfo__WEBPACK_IMPORTED_MODULE_1__["default"]();
        let template = {
            tagName: 'div',
            classList: 'info',
            children: [
                {
                    component: layerInfo
                }
            ]
        }
        return _util_util__WEBPACK_IMPORTED_MODULE_2__["default"].generateDOM(template).root;
    }
}

/***/ }),

/***/ "./src/container/Main.js":
/*!*******************************!*\
  !*** ./src/container/Main.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Main; });
/* harmony import */ var _util_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Base */ "./src/util/Base.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");
/* harmony import */ var _DrawingBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DrawingBoard */ "./src/container/DrawingBoard.js");
/* harmony import */ var _components_FileMenu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/FileMenu */ "./src/components/FileMenu.js");






class Main extends _util_Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor () {
        super();
        this.ref = this.render();
    }

    render() {
        let drawingBoard = new _DrawingBoard__WEBPACK_IMPORTED_MODULE_2__["default"]();
        window.drawingBoard = drawingBoard;
        let fileMenu = new _components_FileMenu__WEBPACK_IMPORTED_MODULE_3__["default"]();
        let template = {
            tagName: 'div',
            classList: ['main'],
            children: [
                {
                    component: drawingBoard
                }
            ]
        }
        let root = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].generateDOM(template).root;


        root.ondragover = function (e) {
            return false;
        }   

        root.ondrop = function (e) {
            e.preventDefault();
            fileMenu.openFiles(e.dataTransfer.files);
        }
        return root;
        
    }
}

/***/ }),

/***/ "./src/container/Menu.js":
/*!*******************************!*\
  !*** ./src/container/Menu.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Menu; });
/* harmony import */ var _util_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Base */ "./src/util/Base.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");
/* harmony import */ var _components_FileMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FileMenu */ "./src/components/FileMenu.js");




class Item {
    constructor(text, onclick) {
        let template = {
            tagName: 'div',
            classList: ['menu-item'],
            text: text
        }
        this.ref = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].generateDOM(template).root;
        this.ref.addEventListener('click', onclick);
    }
}

class Menu extends _util_Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor(props, className) {
        super();
        let template = {
            tagName: 'div',
            classList: ['menu'],
            children: [
                {
                    tagName: 'div',
                    classList: ['file-menu'],
                    children: [
                        {
                            tagName: 'div',
                            classList: ['menu-title'],
                            text: '文件',
                            ref: 'title'
                        },
                        {
                            component: new _components_FileMenu__WEBPACK_IMPORTED_MODULE_2__["default"](),
                            ref: 'dropList'
                        }

                    ]
                }
            ]
        }
        let {root, title, dropList} = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].generateDOM(template);
        this.ref = root;
        let that = this;
        title.onclick = function () {
            that.toggle.call(dropList)
        }
        dropList.onclick = function () {
            that.toggle.call(dropList);
        }

    }

    toggle() {
        if (this.classList.contains('hide')) {
            this.classList.remove('hide');
        } else {
            this.classList.add('hide');
        }
    }
}

/***/ }),

/***/ "./src/container/Toolbox.js":
/*!**********************************!*\
  !*** ./src/container/Toolbox.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toolbox; });
/* harmony import */ var _util_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Base */ "./src/util/Base.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");
/* harmony import */ var _Enum_ToolType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Enum/ToolType */ "./src/Enum/ToolType.js");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/action */ "./src/store/action.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");






let tools = [];
class ToolboxIcon {
    constructor(props) {
        this.props = props;
        this.ref = this.render();
        this.isActive = false;
    }

    render() {
        let template = {
            tagName: 'div',
            classList: ['toolbox-icon', this.props.className],
            text: 'move'
        }
        let root = _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].generateDOM(template).root;
        if (this.props.onClick) {
            root.addEventListener('click', this.props.onClick);
        }
        return root;
    }

    active() {
        this.isActive = true;
        this.ref.classList.add('active');
    }

    disable() {
        this.isActive = false;
        this.ref.classList.remove('active');
    }
}
class Move extends ToolboxIcon {
    constructor() {
        super({
            className: 'toolbox-move',
            onClick: function () {
                tools.forEach(item => item.disable());
                that.active();
            }
        });
        let that = this;
    }

    active() {
        super.active();
        _store_index__WEBPACK_IMPORTED_MODULE_4__["default"].dispatch(Object(_store_action__WEBPACK_IMPORTED_MODULE_3__["changeTool"])(_Enum_ToolType__WEBPACK_IMPORTED_MODULE_2__["default"].MOVE));

    }
}


class Toolbox extends _util_Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        this.ref = this.render();

    }


    render() {
        let move = new Move();
        tools.push(move);
        move.active();
        let template = {
            tagName: 'div',
            classList: ['toolbox', 'absolute'],
            children: [{
                    tagName: 'div',
                    classList: ['toolbox-caption'],
                    text: '工具栏'
                },
                {
                    tagName: 'div',
                    classList: ['toolbox-body'],
                    children: [{
                        component: move
                    }]
                }
            ]
        }
        return _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].generateDOM(template).root;
    }
}

/***/ }),

/***/ "./src/css/style.less":
/*!****************************!*\
  !*** ./src/css/style.less ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./style.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/style.less");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}


/***/ }),

/***/ "./src/store/action.js":
/*!*****************************!*\
  !*** ./src/store/action.js ***!
  \*****************************/
/*! exports provided: ActionType, openFile, changeZoom, changeTool, changeLayer, deleteLayer, transformLayer, drawLayer, savePicture */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return ActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openFile", function() { return openFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeZoom", function() { return changeZoom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeTool", function() { return changeTool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeLayer", function() { return changeLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteLayer", function() { return deleteLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "transformLayer", function() { return transformLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawLayer", function() { return drawLayer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "savePicture", function() { return savePicture; });

const ActionType = {
    OPEN_FILE: 0,
    CHANGE_ZOOM: 1,
    CHANGE_TOOL: 2,
    CHANGE_LAYER: 3,
    DELETE_LAYER: 4,
    SAVE_PICTURE: 5,
    TRANSFORM_LAYER: 6,
    DRAW_LAYER: 7
}

function openFile(layer) {
    return {
        type: ActionType.OPEN_FILE,
        payload: layer
    }
}

function changeZoom(zoom) {
    return {
        type: ActionType.CHANGE_ZOOM,
        payload: zoom
    }
}

function changeTool(toolType) {
    return {
        type: ActionType.CHANGE_TOOL,
        payload: toolType
    }
}

function changeLayer(layer) {
    return {
        type: ActionType.CHANGE_LAYER,
        payload: layer
    }
}


function deleteLayer(layer) {
    return {
        type: ActionType.DELETE_LAYER,
        payload: layer
    }
}


function transformLayer(layer) {
    return {
        type: ActionType.TRANSFORM_LAYER,
        payload: layer
    }
}

function drawLayer(layer) {
    return {
        type: ActionType.DRAW_LAYER,
        payload: layer
    }
}


function savePicture() {
    return {
        type: ActionType.SAVE_PICTURE
    }
}

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/store/state.js");
/* harmony import */ var _reducer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducer */ "./src/store/reducer.js");



function createStore (state, reducer) {
    function dispatch(action) {
        reducer(state, action);
    }
    return {
        state,
        dispatch
    };
}

const store = createStore(_state__WEBPACK_IMPORTED_MODULE_0__["default"], _reducer__WEBPACK_IMPORTED_MODULE_1__["default"]);
window.store = store;
/* harmony default export */ __webpack_exports__["default"] = (store);

/***/ }),

/***/ "./src/store/reducer.js":
/*!******************************!*\
  !*** ./src/store/reducer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./action */ "./src/store/action.js");
/* harmony import */ var _container_DrawingBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/DrawingBoard */ "./src/container/DrawingBoard.js");
/* harmony import */ var _components_LayerInfo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LayerInfo */ "./src/components/LayerInfo.js");
/* harmony import */ var _Enum_ToolType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Enum/ToolType */ "./src/Enum/ToolType.js");





/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
    let drawingBoard = new _container_DrawingBoard__WEBPACK_IMPORTED_MODULE_1__["default"]();
    let layerInfo = new _components_LayerInfo__WEBPACK_IMPORTED_MODULE_2__["default"]();
    switch(action.type) {
        case _action__WEBPACK_IMPORTED_MODULE_0__["ActionType"].OPEN_FILE:
            if (!state.layers.length) {
                state.width = action.payload.width;
                state.height = action.payload.height;

            }
            let style = {};
            style.position_x1 = (state.width - action.payload.width) / 2 / state.width;
            style.position_x2 = style.position_x1 + (action.payload.width) / state.width;
            style.position_y1 = (state.height - action.payload.height) / 2 / state.height;
            style.position_y2 = style.position_y1 + (action.payload.height) / state.height;
            let boundary = {};
            boundary.minX = style.position_x1;
            boundary.minY = style.position_y1;
            boundary.maxX = style.position_x2;
            boundary.maxY = style.position_y2;
            action.payload.style = style;
            action.payload.boundary = boundary;
            state.layers.push(action.payload);
            state.currentLayer = [action.payload];
            drawingBoard.addCanvas(action.payload);
            layerInfo.addLayer(action.payload);
            break;
        case _action__WEBPACK_IMPORTED_MODULE_0__["ActionType"].CHANGE_ZOOM:
            state.zoom = action.payload;
            drawingBoard.changeZoom(action.payload);
            break;
        case _action__WEBPACK_IMPORTED_MODULE_0__["ActionType"].CHANGE_TOOL:
            state.currentTool = _Enum_ToolType__WEBPACK_IMPORTED_MODULE_3__["default"].MOVE;
            break;
        case _action__WEBPACK_IMPORTED_MODULE_0__["ActionType"].CHANGE_LAYER:
            state.currentLayer = [action.payload];
            layerInfo.changeLayer(action.payload);
            break;
        case _action__WEBPACK_IMPORTED_MODULE_0__["ActionType"].DELETE_LAYER:
            let index = state.layers.indexOf(action.payload);
            if (index > -1) {
                state.layers.splice(index, 1);
                state.currentLayer = [];
                drawingBoard.deleteCanvas(action.payload);
                layerInfo.deleteLayer(action.payload);
            } else {
                let deletedLayer = state.currentLayer[0];
                index = state.layers.indexOf(deletedLayer);
                if (index > -1) {
                    state.layers.splice(index, 1);
                    state.currentLayer = [];
                    drawingBoard.deleteCanvas(deletedLayer);
                    layerInfo.deleteLayer(deletedLayer);
                }
            }
            break;
        case _action__WEBPACK_IMPORTED_MODULE_0__["ActionType"].SAVE_PICTURE:
            drawingBoard.savePicture();
            break;
        case _action__WEBPACK_IMPORTED_MODULE_0__["ActionType"].TRANSFORM_LAYER:
            drawingBoard.showResizeBox(state.currentLayer[0]);
            break;
        case _action__WEBPACK_IMPORTED_MODULE_0__["ActionType"].DRAW_LAYER:
            drawingBoard.draw(action.payload);
            break;
        default:
            
    }
});

/***/ }),

/***/ "./src/store/state.js":
/*!****************************!*\
  !*** ./src/store/state.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
    layers: [],
    width: 0,
    height: 0,
    zoom: 1,
    currentTool: null,
    currentLayer: []
});

/***/ }),

/***/ "./src/util/Base.js":
/*!**************************!*\
  !*** ./src/util/Base.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Base; });
class Base {
    constructor () {
        this.eventList = [];
    }

    on(name, fn) {
        if (!this.eventList[name]) {
            this.eventList[name] = [];
        }
        this.eventList[name].push(fn);
    }

    off(name, fn) {
        let arr = this.eventList[name];
        if (!arr) {
            console.warn(name + ' is not exist');
            return;
        }
        let index = arr.indexOf(fn);
        if (index >= 0) {
            arr.splice(index, 1);
        }
    }

    dispatch() {
        let name = Array.prototype.shift.call(arguments);
        let arr = this.eventList[name];
        if (!arr) {
            console.warn(name + ' is not exist');
            return;
        }
        for (let fn of arr) {
            fn.apply(this, arguments);
        }
    }

}

/***/ }),

/***/ "./src/util/Vec2.js":
/*!**************************!*\
  !*** ./src/util/Vec2.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Vec2; });
class Vec2 {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.m = Math.sqrt(this.x ** 2 + this.y ** 2);
        this.angle = Math.atan2(y, x);
    }

    /**
     * 
     * @param {Vec2} vec 
     */
    dot(vec) {
        return this.x * vec.x + this.y + vec.y;
    }

    sub(vec) {
        this.x -= vec.x;
        this.y -= vec.y;
    }

    add(vec) {
        this.x += vec.x;
        this.y += vec.y;
    }
}

/***/ }),

/***/ "./src/util/util.js":
/*!**************************!*\
  !*** ./src/util/util.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function generateDOM(t) {
    function createElement(tagName, isSVG, classList, text, title, attributes) {
        let doc;
        if (isSVG) {
            doc = document.createElementNS('http://www.w3.org/2000/svg', tagName);
            if (attributes) {
                for (let key in attributes) {
                    doc.setAttribute(key, attributes[key]);
                }
            }
        } else {
            doc = document.createElement(tagName);
        }

        if (classList) {

            if (typeof classList === 'string') {
                doc.classList.add(classList);
            } else {
                for (let className of classList) {
                    doc.classList.add(className);
                }
            }

        }
        if (text) {
            doc.textContent = text;
        }


        if (title) {
            doc.title = title;
        }

        return doc;
    }
    let queue = [];
    let parentDOM;
    queue.push({
        parentDOM: null,
        template: t
    });
    let refs = {};
    let isSVG = false;
    if (t.tagName === 'svg') {
        isSVG = true;
    }
    while (queue.length) {
        let current = queue.shift();
        let dom;
        if (current.template.component) {
            dom = current.template.component.ref;
            if (current.template.ref) {
                refs[current.template.ref] = dom;
            }
        } else {
            dom = createElement(current.template.tagName, isSVG, current.template.classList, current.template.text, current.template.title, current.template.attributes);
            if (current.template.ref) {
                refs[current.template.ref] = dom;
            }
        }

        if (current.parentDOM) {
            current.parentDOM.appendChild(dom);
        } else {
            parentDOM = dom;
        }
        if (current.template.children) {
            for (let child of current.template.children) {
                queue.push({
                    parentDOM: dom,
                    template: child
                })
            }
        }

    }
    refs = {
        ...refs,
        root: parentDOM
    }
    return refs;
}


function getSingleton(fn) {
    let ret;
    return function () {
        if (ret) {
            return ret;
        }
        return ret = new fn(arguments);
    }
}


const generateStamp = (function () {
    let canvas = document.createElement('canvas');
    let cacheWidth, cacheHeight;
    let context = canvas.getContext('2d');
    return function (image, width = 80, height = 50) {
        if (width !== cacheWidth || height !== cacheHeight) {
            cacheWidth = width;
            cacheHeight = height;
            canvas.width = cacheWidth;
            canvas.height = cacheHeight;
        }
        context.drawImage(image, 0, 0, width, height);
        return canvas.toDataURL();

    }
}());


function deletePostfix(filename) {
    let arr = filename.split('.');
    return arr[0];
}


function downloadBase64(src, title) {
    let binStr = atob(src.split(',')[1]),
        len = binStr.length,
        arr = new Uint8Array(len);

    for (let i = 0; i < len; i++) {
        arr[i] = binStr.charCodeAt(i);
    }

    let blob = new Blob([arr]);

    let a = document.createElement('a');
    a.download = title;
    a.href = URL.createObjectURL(blob);
    a.onclick = function () {
        requestAnimationFrame(function () {
            URL.revokeObjectURL(a.href);
        })
    }
    a.click();
}

/* harmony default export */ __webpack_exports__["default"] = ({
    generateDOM,
    getSingleton,
    generateStamp,
    deletePostfix,
    downloadBase64
});

/***/ }),

/***/ "./src/webgl/OffCanvas.js":
/*!********************************!*\
  !*** ./src/webgl/OffCanvas.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return OffCanvas; });
/* harmony import */ var _WebGL__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./WebGL */ "./src/webgl/WebGL.js");


class OffCanvas {
    constructor(width, height) {
        let canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        this.renderContext = new _WebGL__WEBPACK_IMPORTED_MODULE_0__["default"](canvas);
        this.canvas = canvas;
        
    }

    blendImages(images) {
        this.renderContext.blendLayers(images);
    }

    changeZoom(width, height) {
        this.canvas.width = width;
        this.canvas.height = height;
        this.renderContext.viewport(0, 0, width, height);
    }

    blendComplete() {
        this.renderContext.destroyBlendLayers();
    }
}

/***/ }),

/***/ "./src/webgl/WebGL.js":
/*!****************************!*\
  !*** ./src/webgl/WebGL.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RenderContext; });
/* harmony import */ var _filter_Normal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filter/Normal */ "./src/webgl/filter/Normal.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/webgl/util.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");
/* harmony import */ var _Enum_StepType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Enum/StepType */ "./src/Enum/StepType.js");
/* harmony import */ var _filter_Blend__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./filter/Blend */ "./src/webgl/filter/Blend.js");







class RenderContext {
    /**
     * 
     * @param {HTMLCanvasElement} canvas 
     */
    constructor(canvas) {
        /**
         * @type {WebGL2RenderingContext | WebGLRenderingContext}
         */
        let gl = canvas.getContext('webgl2', {
            premultipliedAlpha: false
        });
        if (!gl) {
            gl = canvas.getContext('webgl', {
                premultipliedAlpha: false
            });
        }
        if (!gl) {
            alert('您的显卡/浏览器不支持WEBGL！无法使用该应用程序！');
            throw new Error('cannot support webgl!');
        }

        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);
        gl.clearColor(0.0, 0.0, 0.0, 0.0);
        

        let width = canvas.width;
        let height = canvas.height;

        let points = new Float32Array([
            0.0, 0.0, 0.0, 0.0,
            width, 0.0, 1.0, 0.0,
            width, height, 1.0, 1.0,
            width, height, 1.0, 1.0,
            0.0, height, 0.0, 1.0,
            0.0, 0.0, 0.0, 0.0
        ]);


        let buffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, points, gl.STATIC_DRAW);

        let projectionMat = _util__WEBPACK_IMPORTED_MODULE_1__["default"].createProjection(width, height, 1);
        let filters = {
            normal: new _filter_Normal__WEBPACK_IMPORTED_MODULE_0__["default"](gl, projectionMat),
            blend: new _filter_Blend__WEBPACK_IMPORTED_MODULE_4__["default"](gl, projectionMat),
        }

        let originTexture = _util__WEBPACK_IMPORTED_MODULE_1__["default"].createTexture(gl);

        this.filters = filters;
        this.gl = gl;
        this.originTexture = originTexture;
        this.cachedImage = false;
        this.blendTextures = [];
        this.blendFramebuffers = [];
        this.blendTargetTexture = _util__WEBPACK_IMPORTED_MODULE_1__["default"].createTexture(this.gl);

    }
    render(layer) {
        let imageWidth = layer.width;
        let imageHeight = layer.height;
        let offsetX = (_store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.width - imageWidth) / 2;
        let offsetY = (_store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.height - imageHeight) / 2;
        let points = [
            0.0, 0.0, 0.0, 0.0,
            imageWidth, 0.0, 1.0, 0.0,
            imageWidth, imageHeight, 1.0, 1.0,
            imageWidth, imageHeight, 1.0, 1.0,
            0.0, imageHeight, 0.0, 1.0,
            0.0, 0.0, 0.0, 0.0,
        ]
        for (let i = 0; i < points.length; i += 4) {
            points[i] += offsetX;
            points[i + 1] += offsetY;
        }
        points = new Float32Array(points);
        this.gl.clear(this.gl.COLOR_BUFFER_BIT);
        this.gl.useProgram(this.filters.normal.program);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, points, this.gl.STATIC_DRAW);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.originTexture);
        if (!this.cachedImage) {
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, layer.image);
        }
        for (let step of layer.steps) {
            if (step.type === _Enum_StepType__WEBPACK_IMPORTED_MODULE_3__["default"].MOVE) {
                this.filters.normal.setTranslate(step.offsetX, step.offsetY);
                this.filters.normal.setRotate(step.rotate);
                this.filters.normal.setScale(step.scaleX, step.scaleY);
            }
        }

        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
        this.cachedImage = true;
    }


    blendLayers(images) {
        this.gl.useProgram(this.filters.blend.program);
        // let textures = [];
        // let framebuffers = [];
        _util__WEBPACK_IMPORTED_MODULE_1__["default"].createFramebufferTexture(this.gl, 2, this.blendFramebuffers, this.blendTextures, this.gl.canvas.width, this.gl.canvas.height);
        let count = 0;
        let targetImage;
        // let targetTexture = util.createTexture(this.gl);
        for (let image of images) {
            targetImage = image.texture;
            this.gl.activeTexture(this.gl.TEXTURE2);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.blendTargetTexture);
            this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, targetImage);

            this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, this.blendFramebuffers[count % 2]);
            this.gl.clear(this.gl.COLOR_BUFFER_BIT);
            this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);

            this.gl.activeTexture(this.gl.TEXTURE1);
            this.gl.bindTexture(this.gl.TEXTURE_2D, this.blendTextures[count % 2]);
            count++;
        }
        this.gl.bindFramebuffer(this.gl.FRAMEBUFFER, null);
        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
    }

    destroyBlendLayers() {
        for (let texture of this.blendTextures) {
            this.gl.deleteTexture(texture);
        }
        for (let framebuffer of this.blendFramebuffers) {
            this.gl.deleteFramebuffer(framebuffer);
        }
        this.gl.deleteTexture(this.blendTargetTexture);
    }

    viewport(x, y, width, height) {
        this.gl.viewport(x, y, width, height);

        let points = new Float32Array([
            0.0, 0.0, 0.0, 0.0,
            width, 0.0, 1.0, 0.0,
            width, height, 1.0, 1.0,
            width, height, 1.0, 1.0,
            0.0, height, 0.0, 1.0,
            0.0, 0.0, 0.0, 0.0
        ]);


        let projectionMat = _util__WEBPACK_IMPORTED_MODULE_1__["default"].createProjection(width, height, 1);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, points, this.gl.STATIC_DRAW);

        for (let filter in this.filters) {
            this.filters[filter].viewport(projectionMat);
        }

    }
}

/***/ }),

/***/ "./src/webgl/filter/Blend.js":
/*!***********************************!*\
  !*** ./src/webgl/filter/Blend.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return BlendFilter; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/webgl/util.js");
/* harmony import */ var _Enum_BlendMode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Enum/BlendMode */ "./src/Enum/BlendMode.js");



class BlendFilter {
    /**
     * 
     * @param {WebGL2RenderingContext|WebGLRenderingContext} gl 
     */
    constructor (gl, projectionMat) {
        const vertexShader = `
        attribute vec4 a_position;
        attribute vec2 a_texCoord;
        varying vec2 v_texCoord;
        uniform mat4 u_projection;
        void main () {
            gl_Position = u_projection * a_position;
            v_texCoord = a_texCoord;
        }
        `;

        const fragmentShader = `
        precision mediump float;
        uniform sampler2D u_src_texture;
        uniform sampler2D u_dst_texture;
        uniform float u_blend_type;
        varying vec2 v_texCoord;
        void main () {
            vec4 src_color = texture2D(u_src_texture, v_texCoord);
            vec4 dst_color = texture2D(u_dst_texture, v_texCoord);
            if (u_blend_type == 0.0) {
                // 正常混合模式
                gl_FragColor = vec4(dst_color.rgb * dst_color.a + src_color.rgb * (1.0 - dst_color.a), src_color.a + dst_color.a);
            } else if (u_blend_type == 1.0) {
                
            }
            // gl_FragColor = vec4(0.0, 1.0, 1.0, 1.0);

        }
        `;
        let program = _util__WEBPACK_IMPORTED_MODULE_0__["default"].initWebGL(gl, vertexShader, fragmentShader);

        gl.useProgram(program);
        let a_position = gl.getAttribLocation(program, 'a_position');
        let a_texCoord = gl.getAttribLocation(program, 'a_texCoord');

        let u_projection = gl.getUniformLocation(program, 'u_projection');
        gl.uniformMatrix4fv(u_projection, false, projectionMat);

        
        gl.enableVertexAttribArray(a_position);
        gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 4, 0);
        
        gl.enableVertexAttribArray(a_texCoord);
        gl.vertexAttribPointer(a_texCoord, 2, gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 4, Float32Array.BYTES_PER_ELEMENT * 2);

        const u_src_texture = gl.getUniformLocation(program, 'u_src_texture');
        gl.uniform1i(u_src_texture, 1);
        const u_dst_texture = gl.getUniformLocation(program, 'u_dst_texture');
        gl.uniform1i(u_dst_texture, 2);


        const u_blend_type = gl.getUniformLocation(program, 'u_blend_type');
        gl.uniform1f(u_blend_type, 0);
        this.a_position = a_position;
        this.program = program;
        this.u_blend_type = u_blend_type;
        this.u_projection = u_projection;
        this.gl = gl;
    }


    setBlendType(type) {
        if (type === _Enum_BlendMode__WEBPACK_IMPORTED_MODULE_1__["default"].NORMAL) {
            type = 0;
            this.gl.uniform1f(this.u_blend_type, type);
        }
    }



    enableVertexArray(size, stride, offset) {
        this.gl.enableVertexAttribArray(this.a_position);
        this.gl.vertexAttribPointer(this.a_position, size, this.gl.FLOAT, false, stride, offset);
    }

    viewport(projectionMat) {
        this.gl.useProgram(this.program);
        this.gl.uniformMatrix4fv(this.u_projection, false, projectionMat);
    }

} 

/***/ }),

/***/ "./src/webgl/filter/Normal.js":
/*!************************************!*\
  !*** ./src/webgl/filter/Normal.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NormalFilter; });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./src/webgl/util.js");



class NormalFilter {
    /**
     * 
     * @param {WebGL2RenderingContext|WebGLRenderingContext} gl 
     */
    constructor (gl, projectionMat) {
        const vertexShader = `
        attribute vec4 a_position;
        attribute vec2 a_texCoord;
        varying vec2 v_texCoord;
        uniform mat4 u_projection;
        uniform mat4 u_translate;
        uniform mat4 u_scale;
        uniform mat4 u_rotate;
        void main () {
            gl_Position = u_projection * u_translate * u_scale * u_rotate * a_position;
            v_texCoord = a_texCoord;
        }
        `;

        const fragmentShader = `
        precision mediump float;
        uniform sampler2D u_texture;
        varying vec2 v_texCoord;
        void main () {
            gl_FragColor = texture2D(u_texture, v_texCoord);
        }
        `;
        let program = _util__WEBPACK_IMPORTED_MODULE_0__["default"].initWebGL(gl, vertexShader, fragmentShader);

        gl.useProgram(program);
        let a_position = gl.getAttribLocation(program, 'a_position');
        let a_texCoord = gl.getAttribLocation(program, 'a_texCoord');

        let u_projection = gl.getUniformLocation(program, 'u_projection');
        gl.uniformMatrix4fv(u_projection, false, projectionMat);

        let u_translate = gl.getUniformLocation(program, 'u_translate');
        let u_scale = gl.getUniformLocation(program, 'u_scale');
        let u_rotate = gl.getUniformLocation(program, 'u_rotate');


        let translateMat = _util__WEBPACK_IMPORTED_MODULE_0__["default"].createTranslateMatrix(0, 0, 0);
        let scaleMat = _util__WEBPACK_IMPORTED_MODULE_0__["default"].createScaleMatrix(1, 1, 1, {x: gl.canvas.width / 2, y: gl.canvas.height / 2, z: 1});
        let rotateMat = _util__WEBPACK_IMPORTED_MODULE_0__["default"].createRotateMatrix({x: gl.canvas.width / 2, y: gl.canvas.height / 2}, 0);

        gl.uniformMatrix4fv(u_translate, false, translateMat);
        gl.uniformMatrix4fv(u_scale, false, scaleMat);
        gl.uniformMatrix4fv(u_rotate, false, rotateMat);
        
        gl.enableVertexAttribArray(a_position);
        gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 4, 0);
        
        gl.enableVertexAttribArray(a_texCoord);
        gl.vertexAttribPointer(a_texCoord, 2, gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 4, Float32Array.BYTES_PER_ELEMENT * 2);

        this.a_position = a_position;
        this.u_translate = u_translate;
        this.u_scale = u_scale;
        this.u_rotate = u_rotate;
        this.translateMat = translateMat;
        this.u_projection = u_projection;
        this.program = program;
        this.gl = gl;
    }


    enableVertexArray(size, stride, offset) {
        this.gl.enableVertexAttribArray(this.a_position);
        this.gl.vertexAttribPointer(this.a_position, size, this.gl.FLOAT, false, stride, offset);
    }


    setTranslate(x, y) {
        let translateMat = _util__WEBPACK_IMPORTED_MODULE_0__["default"].createTranslateMatrix(x, y, 0);
        this.gl.uniformMatrix4fv(this.u_translate, false, translateMat);
    }

    setRotate(angle, centerX = this.gl.canvas.width / 2, centerY = this.gl.canvas.height / 2) {
        let rotateMat = _util__WEBPACK_IMPORTED_MODULE_0__["default"].createRotateMatrix({x: centerX, y: centerY}, angle);
        this.gl.uniformMatrix4fv(this.u_rotate, false, rotateMat);
    }

    setScale(sx, sy, centerX = this.gl.canvas.width / 2, centerY = this.gl.canvas.height / 2) {
        let scaleMat = _util__WEBPACK_IMPORTED_MODULE_0__["default"].createScaleMatrix(sx, sy, 1, {x: centerX, y: centerY, z: 1});
        this.gl.uniformMatrix4fv(this.u_scale, false, scaleMat);
    }

    viewport(projectionMat) {
        this.gl.useProgram(this.program);
        this.gl.uniformMatrix4fv(this.u_projection, false, projectionMat);
    }



} 

/***/ }),

/***/ "./src/webgl/util.js":
/*!***************************!*\
  !*** ./src/webgl/util.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * 
 * @param {WebGL2RenderingContext} gl 
 * @param {string} type 
 * @param {string} source 
 */
function createShader(gl, type, source) {
    let shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    let success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if (success) {
        return shader;
    }
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
}

/**
 * 
 * @param {WebGL2RenderingContext} gl 
 * @param {WebGLShader} vertexShader 
 * @param {WebGLShader} fragmentShader 
 */
function createProgram(gl, vertexShader, fragmentShader) {
    let program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    let success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
        return program;
    }
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
}

/**
 * 
 * @param {WebGL2RenderingContext} gl 
 * @param {string} vertexSource 
 * @param {string} fragmentSource 
 */
function initWebGL(gl, vertexSource, fragmentSource) {
    let vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexSource);
    let fragmentShader = createShader(gl, gl.FRAGMENT_SHADER, fragmentSource);
    let program = createProgram(gl, vertexShader, fragmentShader);
    return program;
}

function createProjection(width, height, depth) {
    return [
        2 / width, 0, 0, 0,
        0, 2 / height, 0, 0,
        0, 0, 2 / depth, 0,
        -1, -1, 0, 1,
    ];
}

/**
 *
 * @param {Object} center
 * @param {Number} rotate
 */
function createRotateMatrix(center, rotate, axis = 'z') {
    let cos = Math.cos(rotate * Math.PI / 180);
    let sin = Math.sin(rotate * Math.PI / 180);
    if (!center.z) {
        center.z = 0;
    }
    let ret;
    switch (axis) {
        case 'x':
            ret = new Float32Array([
                1.0, 0.0, 0.0, 0.0,
                0.0, cos, sin, 0.0,
                0.0, -sin, cos, 0.0,
                0.0, (1 - cos) * center.y + sin * center.z, (1 - cos) * center.z - sin * center.y, 1.0
            ]);
            break;
        case 'y':
            ret = new Float32Array([
                cos, 0.0, sin, 0.0,
                0.0, 1.0, 0.0, 0.0,
                -sin, 0.0, cos, 0.0,
                (1 - cos) * center.x + sin * center.z, 0.0, (1 - cos) * center.z - sin * center.x, 1.0
            ]);
            break;
        default:
            ret = new Float32Array([
                cos, sin, 0.0, 0.0,
                -sin, cos, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                (1 - cos) * center.x + sin * center.y, (1 - cos) * center.y - sin * center.x, 0.0, 1.0,
            ]);
    }
    return ret;
}

/**
 *
 * @param {Number} tx
 * @param {Number} ty
 */
function createTranslateMatrix(tx = 0, ty = 0, tz = 0) {
    return new Float32Array([
        1.0, 0.0, 0.0, 0.0,
        0.0, 1.0, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        tx, ty, tz, 1.0,
    ]);
}

/**
 *
 * @param {Number} scaleX
 * @param {Number} scaleY
 * @param {Number} scaleZ
 */
function createScaleMatrix(scaleX, scaleY, scaleZ, center = {
    x: 0,
    y: 0,
    z: 0
}) {
    return new Float32Array([
        scaleX, 0.0, 0.0, 0.0,
        0.0, scaleY, 0.0, 0.0,
        0.0, 0.0, 1.0, 0.0,
        -scaleX * center.x + center.x, -scaleY * center.y + center.y, -scaleZ * center.z + center.z, 1.0,
    ]);
}

/**
 * @desc 对比度矩阵
 * @param {Number} value
 */
function createContrastMatrix(value) {
    return new Float32Array([
        value, 0.0, 0.0, 0.0,
        0.0, value, 0.0, 0.0,
        0.0, 0.0, value, 0.0,
        0.5 * (1 - value), 0.5 * (1 - value), 0.5 * (1 - value), 1.0,
    ]);
}


/**
 * @desc 色相旋转矩阵
 * @param {Number} value
 */
function createHueRotateMatrix(value) {
    let sin = Math.sin(value * Math.PI / 180);
    let cos = Math.cos(value * Math.PI / 180);
    return new Float32Array([
        0.213 + cos * 0.787 - sin * 0.213, 0.213 - cos * 0.213 + sin * 0.143, 0.213 - cos * 0.213 - sin * 0.787, 0.0,
        0.715 - cos * 0.715 - sin * 0.715, 0.715 + cos * 0.285 + sin * 0.140, 0.715 - cos * 0.715 + sin * 0.715, 0.0,
        0.072 - cos * 0.072 + sin * 0.928, 0.072 - cos * 0.072 - sin * 0.283, 0.072 + cos * 0.928 + sin * 0.072, 0.0,
        0.0, 0.0, 0.0, 1.0,
    ]);
}

/**
 * @desc 饱和度矩阵
 * @param {Number} value
 */
function createSaturateMatrix(value) {
    return new Float32Array([
        0.3086 * (1 - value) + value, 0.3086 * (1 - value), 0.3086 * (1 - value), 0.0,
        0.6094 * (1 - value), 0.6094 * (1 - value) + value, 0.6094 * (1 - value), 0.0,
        0.0820 * (1 - value), 0.0820 * (1 - value), 0.0820 * (1 - value) + value, 0.0,
        0.0, 0.0, 0.0, 1.0
    ]);
}

/**
 * @param {WebGLRenderingContext} gl
 * @param {Number} x 中心x坐标
 * @param {Number} y 中心y坐标
 * @param {radius} radius 圆弧半径
 * @param {Number} startArc 起始圆弧半径
 * @param {Number} endArc 终止圆弧半径
 * @param {Boolean} clockwise 方向，默认顺时针
 */
function createArcVertex(gl, x, y, radius, startArc, endArc, isInverse = false) {
    let precision = 1;
    let oneArc = Math.PI / 180
    let points = [x, y, x / gl.canvas.width, y / gl.canvas.height];
    for (let i = startArc; i <= endArc; i += precision) {
        if (!isInverse) {
            points.push(
                x + radius * Math.sin(i * oneArc),
                (y - radius * Math.cos(i * oneArc)),
                (x + radius * Math.sin(i * oneArc)) / gl.canvas.width,
                (y - radius * Math.cos(i * oneArc)) / gl.canvas.height);
        } else {
            points.push(
                x - radius * Math.sin(i * oneArc),
                (y - radius * Math.cos(i * oneArc)),
                (x - radius * Math.sin(i * oneArc)) / gl.canvas.width,
                (y - radius * Math.cos(i * oneArc)) / gl.canvas.height);
        }

    }
    return new Float32Array(points);
}

/**
 *
 * @param {WebGLRenderingContext} gl
 */
function createTexture(gl) {
    let texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    // gl.generateMipmap(gl.TEXTURE_2D);
    return texture;
}

function computeKernalWeight(kernal) {
    let weight = kernal.reduce((prev, cur) => {
        return prev + cur;
    }, 0);
    return weight <= 0 ? 1 : weight;
}

/**
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Array} vertX
 * @param {Array} vertY
 */
function checkPointIn(x, y, vertX, vertY) {
    let minX = Math.min(...vertX);
    let minY = Math.min(...vertY);
    let maxX = Math.max(...vertX);
    let maxY = Math.max(...vertY);
    if (x < minX || x > maxX || y < minY || y > maxY) {
        return false;
    } else {
        let i, j, r;
        r = false;
        for (let i = 0, j = vertX.length - 1; i < vertX.length; j = i++) {
            if ((vertY[i] > y) !== (vertY[j] > y) &&
                (x < (y - vertY[i]) * (vertX[j] - vertX[i]) / (vertY[j] - vertY[i]) + vertX[i])) {
                r = !r;
            }
        }
        return r;
    }
}

/**
 *
 * @param {Number} x
 * @param {Number} y
 * @param {Array} vertX
 * @param {Array} vertY
 */
function checkPointIn2(x, y, vertX, vertY) {
    let minX = Math.min(...vertX);
    let minY = Math.min(...vertY);
    let maxX = Math.max(...vertX);
    let maxY = Math.max(...vertY);
    if (x < minX || x > maxX || y < minY || y > maxY) {
        return false;
    } else {
        let i, j, r;
        r = false;
        for (let i = 0, j = vertX.length - 1; i < vertX.length; j = i++) {
            if ((vertY[i] > y) !== (vertY[j] > y) &&
                (x < (y - vertY[i]) * (vertX[j] - vertX[i]) / (vertY[j] - vertY[i]) + vertX[i])) {
                r = !r;
            }
        }
        return r;
    }

}

/**
 *
 * @param {String} hex
 */
function hexToRGB(hex) {
    if (/#[a-f0-9]{6}/i.test(hex)) {
        let r = +('0x' + hex.substr(1, 2));
        let g = +('0x' + hex.substr(3, 2));
        let b = +('0x' + hex.substr(5, 2));
        return [r / 255, g / 255, b / 255];
    }
}

function generateImageByDiv(width, height, html) {
    let svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svg.setAttribute('viewBox', `0 0 ${width} ${height}`);
    svg.setAttribute('width', width);
    svg.setAttribute('height', height);

    let style = document.createElementNS('http://www.w3.org/2000/svg', 'style');
    style.textContent = `
        @font-face {
            font-family: 'ShouJinTi';
            src: url('http://localhost:8081/WebGLTraining/assets/shoujin.ttf');
        }
    `;

    let foreignObject = document.createElementNS('http://www.w3.org/2000/svg', 'foreignObject');
    foreignObject.setAttribute('x', 0);
    foreignObject.setAttribute('y', 0);
    foreignObject.setAttribute('width', width);
    foreignObject.setAttribute('height', height);

    let div = document.createElementNS('http://www.w3.org/1999/xhtml', 'div');
    div.setAttribute('xmlns', 'http://www.w3.org/1999/xhtml');
    div.innerHTML = html;
    foreignObject.appendChild(div);
    svg.appendChild(style);
    svg.appendChild(foreignObject);
    return svg;
}

/**
 * 
 * @param {HTMLCanvasElement} canvas 
 * @param {number} left 
 * @param {number} right 
 * @param {number} _bottom 
 * @param {number} _top 
 */
function createClipPath(canvas, left = 0, right = 0, _bottom = 0, _top = 0, offsetX = 0, offsetY = 0, scaleX = 1, scaleY = 1, rotate = 0) {
    return new Float32Array([
        0 + canvas.width * left, 0 + canvas.height * _top, left, _top,
        canvas.width - canvas.width * right, 0 + canvas.height * _top, 1 - right, _top,
        canvas.width - canvas.width * right, canvas.height - canvas.height * _bottom, 1 - right, 1 - _bottom,
        canvas.width - canvas.width * right, canvas.height - canvas.height * _bottom, 1 - right, 1 - _bottom,
        0 + canvas.width * left, canvas.height - canvas.height * _bottom, left, 1 - _bottom,
        0 + canvas.width * left, 0 + canvas.height * _top, left, _top,
    ])
}

function rotate(center, x, y, rotate) {
    let cos = Math.cos(rotate * Math.PI / 180);
    let sin = Math.sin(rotate * Math.PI / 180);
    return [
        x * cos - y * sin + (1 - cos) * center.x + sin * center.y,
        x * sin + y * cos + (1 - cos) * center.y - sin * center.x,
    ]
}

function pnpoly(number, verX, verY, testX, testY) {
    let i, j, c = false;
    for (i = 0, j = number - 1; i < number; j = i++) {
        if (((verY[i] > testY) !== (verY[j] > testY)) &&
            (testX < (verX[j] - verX[i]) * (testY - verY[i]) / (verY[j] - verY[i]) + verX[i])) {
            c = !c;
        }
    }
    return c;
}

function calcDistance(x1, y1, x2, y2) {
    return Math.sqrt((x1 - x2) ** 2 + (y1 - y2) ** 2)
}

function createTriangleClipPath(canvas, progress, offsetX = 0, offsetY = 0, scaleX = 1, scaleY = 1, rotate = 0) {
    let centerX = canvas.width / 2 + offsetX * canvas.width;
    let centerY = canvas.height / 2 + offsetY * canvas.height;
    let distanceLD = calcDistance(centerX, centerY, 0, 0);
    let distanceLU = calcDistance(centerX, centerY, 0, canvas.height);
    let distanceRD = calcDistance(centerX, centerY, canvas.width, 0);
    let distanceRU = calcDistance(centerX, centerY, canvas.width, canvas.height);
    let r = Math.max(distanceLD, distanceLU, distanceRD, distanceRU) * progress;
    let points = new Float32Array([
        canvas.width / 2, canvas.height / 2 + 2 * r, 0.5, 0.5 + 2 * r / canvas.height,
        canvas.width / 2 - 1.732 * r, canvas.height / 2 - r, 0.5 - 1.732 * r / canvas.width, 0.5 - r / canvas.height,
        canvas.width / 2 + 1.732 * r, canvas.height / 2 - r, 0.5 + 1.732 * r / canvas.width, 0.5 - r / canvas.height
    ]);
    for (let i = 0; i < points.length; i += 4) {
        // points[i + 2] 
        points[i + 1] = canvas.height - points[i + 1];
        points[i + 3] = 1 - points[i + 3];
    }
    return points;
}



function createNoiseImage(width, height, type, factor) {
    let data;
    switch (type) {
        case WebGLRenderingContext.RGBA:
            data = new Uint8Array(width * height * 4);
            for (let i = 0; i < data.length; i += 4) {
                data[i] = 2 * factor * Math.random();
                data[i + 1] = factor * Math.random();
                data[i + 2] = factor * Math.random();
                data[i + 3] = factor * Math.random();
            }
            break;
        case WebGLRenderingContext.RGB:
            data = new Uint8Array(width * height * 3);
            for (let i = 0; i < data.length; i += 3) {
                data[i] = factor * Math.random();
                data[i + 1] = factor * Math.random();
                data[i + 2] = factor * Math.random();
            }
            break;
        case WebGLRenderingContext.LUMINANCE_ALPHA:
            data = new Uint8Array(width * height * 2);
            for (let i = 0; i < data.length; i += 2) {
                data[i] = factor * Math.random();
                data[i + 1] = factor * Math.random();
            }
            break;
        case WebGLRenderingContext.LUMINANCE:
            data = new Uint8Array(width * height * 1);
            for (let i = 0; i < data.length; i++) {
                data[i] = factor * Math.random();
            }
            break;
    }
    return data;
}



function createPerspective(near, far, l, r, t, b) {
    let rangeInv = 1.0 / (far - near);

    let n = near;
    return [
        2 * n / (r - l), 0, 0, 0,
        0, 2 * n / (t - b), 0, 0,
        -(r + l) / (r - l), -(t + b) / (t - b), (near + far) * rangeInv, 1,
        0, 0, -near * far * rangeInv * 2, 0
    ];
}

function createEditor(name, type = 'range', min, max, value, step = 1) {
    let obj = {};
    let oninput = null;
    let wrapper = document.createElement('div');
    let label = document.createElement('label');
    label.innerText = name;
    let input = document.createElement('input');
    input.type = type;
    input.max = max;
    input.min = min;
    input.step = step;
    input.value = value;
    let display = document.createElement('label');
    display.textContent = value;

    input.oninput = function (e) {
        oninput && oninput.call(this, e);
        display.textContent = input.value;
    }

    wrapper.appendChild(label);
    wrapper.appendChild(input);
    wrapper.appendChild(display);
    Object.defineProperties(obj, {
        oninput: {
            set(value) {
                oninput = value;
            },
            get() {
                return oninput;
            }
        },
        ref: {
            get() {
                return wrapper;
            }
        },
        step: {
            set(value) {
                input.step = value;
            }
        },
        value: {
            get() {
                return input.value;
            }
        }
    })
    return obj;
}



function multiply(a, b) {
    var a00 = a[0 * 4 + 0];
    var a01 = a[0 * 4 + 1];
    var a02 = a[0 * 4 + 2];
    var a03 = a[0 * 4 + 3];
    var a10 = a[1 * 4 + 0];
    var a11 = a[1 * 4 + 1];
    var a12 = a[1 * 4 + 2];
    var a13 = a[1 * 4 + 3];
    var a20 = a[2 * 4 + 0];
    var a21 = a[2 * 4 + 1];
    var a22 = a[2 * 4 + 2];
    var a23 = a[2 * 4 + 3];
    var a30 = a[3 * 4 + 0];
    var a31 = a[3 * 4 + 1];
    var a32 = a[3 * 4 + 2];
    var a33 = a[3 * 4 + 3];
    var b00 = b[0 * 4 + 0];
    var b01 = b[0 * 4 + 1];
    var b02 = b[0 * 4 + 2];
    var b03 = b[0 * 4 + 3];
    var b10 = b[1 * 4 + 0];
    var b11 = b[1 * 4 + 1];
    var b12 = b[1 * 4 + 2];
    var b13 = b[1 * 4 + 3];
    var b20 = b[2 * 4 + 0];
    var b21 = b[2 * 4 + 1];
    var b22 = b[2 * 4 + 2];
    var b23 = b[2 * 4 + 3];
    var b30 = b[3 * 4 + 0];
    var b31 = b[3 * 4 + 1];
    var b32 = b[3 * 4 + 2];
    var b33 = b[3 * 4 + 3];
    return [
        b00 * a00 + b01 * a10 + b02 * a20 + b03 * a30,
        b00 * a01 + b01 * a11 + b02 * a21 + b03 * a31,
        b00 * a02 + b01 * a12 + b02 * a22 + b03 * a32,
        b00 * a03 + b01 * a13 + b02 * a23 + b03 * a33,
        b10 * a00 + b11 * a10 + b12 * a20 + b13 * a30,
        b10 * a01 + b11 * a11 + b12 * a21 + b13 * a31,
        b10 * a02 + b11 * a12 + b12 * a22 + b13 * a32,
        b10 * a03 + b11 * a13 + b12 * a23 + b13 * a33,
        b20 * a00 + b21 * a10 + b22 * a20 + b23 * a30,
        b20 * a01 + b21 * a11 + b22 * a21 + b23 * a31,
        b20 * a02 + b21 * a12 + b22 * a22 + b23 * a32,
        b20 * a03 + b21 * a13 + b22 * a23 + b23 * a33,
        b30 * a00 + b31 * a10 + b32 * a20 + b33 * a30,
        b30 * a01 + b31 * a11 + b32 * a21 + b33 * a31,
        b30 * a02 + b31 * a12 + b32 * a22 + b33 * a32,
        b30 * a03 + b31 * a13 + b32 * a23 + b33 * a33,
    ];
};

function vecMultipleMat(v, m) {
    let m00 = m[0 * 4 + 0];
    let m01 = m[0 * 4 + 1];
    let m02 = m[0 * 4 + 2];
    let m03 = m[0 * 4 + 3];
    let m10 = m[1 * 4 + 0];
    let m11 = m[1 * 4 + 1];
    let m12 = m[1 * 4 + 2];
    let m13 = m[1 * 4 + 3];
    let m20 = m[2 * 4 + 0];
    let m21 = m[2 * 4 + 1];
    let m22 = m[2 * 4 + 2];
    let m23 = m[2 * 4 + 3];
    let m30 = m[3 * 4 + 0];
    let m31 = m[3 * 4 + 1];
    let m32 = m[3 * 4 + 2];
    let m33 = m[3 * 4 + 3];
    let v0 = v[0];
    let v1 = v[1];
    let v2 = v[2];
    let v3 = v[3];
    return [
        m00 * v0 + m10 * v1 + m20 * v2 + m30 * v3,
        m01 * v0 + m11 * v1 + m21 * v2 + m31 * v3,
        m02 * v0 + m12 * v1 + m22 * v2 + m32 * v3,
        m03 * v0 + m13 * v1 + m23 * v2 + m33 * v3
    ];
}

function inverse(m) {
    var m00 = m[0 * 4 + 0];
    var m01 = m[0 * 4 + 1];
    var m02 = m[0 * 4 + 2];
    var m03 = m[0 * 4 + 3];
    var m10 = m[1 * 4 + 0];
    var m11 = m[1 * 4 + 1];
    var m12 = m[1 * 4 + 2];
    var m13 = m[1 * 4 + 3];
    var m20 = m[2 * 4 + 0];
    var m21 = m[2 * 4 + 1];
    var m22 = m[2 * 4 + 2];
    var m23 = m[2 * 4 + 3];
    var m30 = m[3 * 4 + 0];
    var m31 = m[3 * 4 + 1];
    var m32 = m[3 * 4 + 2];
    var m33 = m[3 * 4 + 3];
    var tmp_0 = m22 * m33;
    var tmp_1 = m32 * m23;
    var tmp_2 = m12 * m33;
    var tmp_3 = m32 * m13;
    var tmp_4 = m12 * m23;
    var tmp_5 = m22 * m13;
    var tmp_6 = m02 * m33;
    var tmp_7 = m32 * m03;
    var tmp_8 = m02 * m23;
    var tmp_9 = m22 * m03;
    var tmp_10 = m02 * m13;
    var tmp_11 = m12 * m03;
    var tmp_12 = m20 * m31;
    var tmp_13 = m30 * m21;
    var tmp_14 = m10 * m31;
    var tmp_15 = m30 * m11;
    var tmp_16 = m10 * m21;
    var tmp_17 = m20 * m11;
    var tmp_18 = m00 * m31;
    var tmp_19 = m30 * m01;
    var tmp_20 = m00 * m21;
    var tmp_21 = m20 * m01;
    var tmp_22 = m00 * m11;
    var tmp_23 = m10 * m01;

    var t0 = (tmp_0 * m11 + tmp_3 * m21 + tmp_4 * m31) -
        (tmp_1 * m11 + tmp_2 * m21 + tmp_5 * m31);
    var t1 = (tmp_1 * m01 + tmp_6 * m21 + tmp_9 * m31) -
        (tmp_0 * m01 + tmp_7 * m21 + tmp_8 * m31);
    var t2 = (tmp_2 * m01 + tmp_7 * m11 + tmp_10 * m31) -
        (tmp_3 * m01 + tmp_6 * m11 + tmp_11 * m31);
    var t3 = (tmp_5 * m01 + tmp_8 * m11 + tmp_11 * m21) -
        (tmp_4 * m01 + tmp_9 * m11 + tmp_10 * m21);

    var d = 1.0 / (m00 * t0 + m10 * t1 + m20 * t2 + m30 * t3);

    return [
        d * t0,
        d * t1,
        d * t2,
        d * t3,
        d * ((tmp_1 * m10 + tmp_2 * m20 + tmp_5 * m30) -
            (tmp_0 * m10 + tmp_3 * m20 + tmp_4 * m30)),
        d * ((tmp_0 * m00 + tmp_7 * m20 + tmp_8 * m30) -
            (tmp_1 * m00 + tmp_6 * m20 + tmp_9 * m30)),
        d * ((tmp_3 * m00 + tmp_6 * m10 + tmp_11 * m30) -
            (tmp_2 * m00 + tmp_7 * m10 + tmp_10 * m30)),
        d * ((tmp_4 * m00 + tmp_9 * m10 + tmp_10 * m20) -
            (tmp_5 * m00 + tmp_8 * m10 + tmp_11 * m20)),
        d * ((tmp_12 * m13 + tmp_15 * m23 + tmp_16 * m33) -
            (tmp_13 * m13 + tmp_14 * m23 + tmp_17 * m33)),
        d * ((tmp_13 * m03 + tmp_18 * m23 + tmp_21 * m33) -
            (tmp_12 * m03 + tmp_19 * m23 + tmp_20 * m33)),
        d * ((tmp_14 * m03 + tmp_19 * m13 + tmp_22 * m33) -
            (tmp_15 * m03 + tmp_18 * m13 + tmp_23 * m33)),
        d * ((tmp_17 * m03 + tmp_20 * m13 + tmp_23 * m23) -
            (tmp_16 * m03 + tmp_21 * m13 + tmp_22 * m23)),
        d * ((tmp_14 * m22 + tmp_17 * m32 + tmp_13 * m12) -
            (tmp_16 * m32 + tmp_12 * m12 + tmp_15 * m22)),
        d * ((tmp_20 * m32 + tmp_12 * m02 + tmp_19 * m22) -
            (tmp_18 * m22 + tmp_21 * m32 + tmp_13 * m02)),
        d * ((tmp_18 * m12 + tmp_23 * m32 + tmp_15 * m02) -
            (tmp_22 * m32 + tmp_14 * m02 + tmp_19 * m12)),
        d * ((tmp_22 * m22 + tmp_16 * m02 + tmp_21 * m12) -
            (tmp_20 * m12 + tmp_23 * m22 + tmp_17 * m02))
    ];
};


function cross(a, b) {
    return [a[1] * b[2] - a[2] * b[1],
        a[2] * b[0] - a[0] * b[2],
        a[0] * b[1] - a[1] * b[0]
    ];
};

function subtractVectors(a, b) {
    return [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
}


function normalize(v) {
    var length = Math.sqrt(v[0] * v[0] + v[1] * v[1] + v[2] * v[2]);
    // 确定不会除以 0
    if (length > 0.00001) {
        return [v[0] / length, v[1] / length, v[2] / length];
    } else {
        return [0, 0, 0];
    }
}

function lookAt(cameraPosition, target, up) {
    var zAxis = normalize(
        subtractVectors(target, cameraPosition));
    var xAxis = normalize(cross(up, zAxis));
    var yAxis = normalize(cross(zAxis, xAxis));

    return [
        xAxis[0], xAxis[1], xAxis[2], 0,
        yAxis[0], yAxis[1], yAxis[2], 0,
        zAxis[0], zAxis[1], zAxis[2], 0,
        cameraPosition[0],
        cameraPosition[1],
        cameraPosition[2],
        1,
    ];
}


function createFramebufferTexture(gl, number, framebuffers, textures, width, height) {
    for (let i = 0; i < number; i++) {
        let framebuffer = gl.createFramebuffer();
        gl.bindFramebuffer(gl.FRAMEBUFFER, framebuffer);
        let texture = createTexture(gl);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, width, height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
        gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, texture, 0);
        textures.push(texture);
        framebuffers.push(framebuffer);
    }
};


/* harmony default export */ __webpack_exports__["default"] = ({
    initWebGL,
    createProjection,
    createTranslateMatrix,
    createRotateMatrix,
    createScaleMatrix,
    createContrastMatrix,
    createHueRotateMatrix,
    createSaturateMatrix,
    createArcVertex,
    createTexture,
    createClipPath,
    createTriangleClipPath,
    createNoiseImage,
    createPerspective,
    rotate,
    pnpoly,
    createEditor,
    inverse,
    multiply,
    cross,
    subtractVectors,
    lookAt,
    createFramebufferTexture,
    vecMultipleMat
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5sZXNzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9BcHAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VudW0vQmxlbmRNb2RlLmpzIiwid2VicGFjazovLy8uL3NyYy9FbnVtL1N0ZXAuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VudW0vU3RlcFR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0VudW0vVG9vbFR5cGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvRmlsZU1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvTGF5ZXJDb250ZXh0TWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXllckluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvUmVzaXplQm94LmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvQ29udGV4dE1lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9EcmF3aW5nQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9JbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9Ub29sYm94LmpzIiwid2VicGFjazovLy8uL3NyYy9jc3Mvc3R5bGUubGVzcz80ODA4Iiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9yZWR1Y2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdG9yZS9zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9CYXNlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL1ZlYzIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViZ2wvT2ZmQ2FudmFzLmpzIiwid2VicGFjazovLy8uL3NyYy93ZWJnbC9XZWJHTC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViZ2wvZmlsdGVyL0JsZW5kLmpzIiwid2VicGFjazovLy8uL3NyYy93ZWJnbC9maWx0ZXIvTm9ybWFsLmpzIiwid2VicGFjazovLy8uL3NyYy93ZWJnbC91dGlsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FB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QjtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBOzs7QUFHZSxpSEFBSSx3QkFBd0IsRTs7Ozs7Ozs7Ozs7O0FDL0kzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0M7QUFDQTtBQUNHO0FBQ0E7QUFDSztBQUNSO0FBQ1M7O0FBRTFCLHdCQUF3QixrREFBSTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSxpRUFBaUUsR0FBRyxrREFBSTtBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBLG9CQUFvQixrREFBSTtBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksb0RBQUssVUFBVSwrREFBUztBQUNwQyw0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtFQUFrRSxvREFBSztBQUN2RSxvRUFBb0Usb0RBQUs7QUFDekU7O0FBRUE7QUFDQSxrRUFBa0Usb0RBQUs7QUFDdkUsb0VBQW9FLG9EQUFLO0FBQ3pFOztBQUVBO0FBQ0Esa0VBQWtFLG9EQUFLO0FBQ3ZFLG9FQUFvRSxvREFBSztBQUN6RTs7QUFFQTtBQUNBLGtFQUFrRSxvREFBSztBQUN2RSxvRUFBb0Usb0RBQUs7QUFDekU7O0FBRUE7QUFDQSxrRUFBa0Usb0RBQUs7QUFDdkU7O0FBRUE7QUFDQSxrRUFBa0Usb0RBQUs7QUFDdkU7O0FBRUE7QUFDQSxvRUFBb0Usb0RBQUs7QUFDekU7O0FBRUE7QUFDQSxvRUFBb0Usb0RBQUs7QUFDekU7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQSxhQUFhO0FBQ2I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQixvREFBSyxlQUFlLG9EQUFLO0FBQzdDLHFCQUFxQixvREFBSyxnQkFBZ0Isb0RBQUs7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixzREFBUTtBQUN0QztBQUNBLDZGQUE2Riw2QkFBNkI7QUFDMUgsMERBQTBELDZCQUE2QjtBQUN2RjtBQUNBLGlGQUFpRixvREFBSztBQUN0RixpRkFBaUYsb0RBQUs7QUFDdEYsaUZBQWlGLG9EQUFLO0FBQ3RGLGlGQUFpRixvREFBSztBQUN0Rjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsQzs7Ozs7Ozs7Ozs7O0FDMVBBO0FBQUE7QUFBQTtBQUFBO0FBQWdDO0FBQ0E7OztBQUdoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrREFBSTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7O0FBR2UsMEJBQTBCLGtEQUFJO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiOztBQUVBLG1CQUFtQixrREFBSTs7QUFFdkI7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQy9DQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdDO0FBQ0E7QUFDUztBQUNOO0FBQ0s7QUFDQTtBQUNGO0FBQ0k7QUFDQztBQUNLOzs7QUFHaEQsMkJBQTJCLGtEQUFJO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHdEQUFTO0FBQ3RDLDZCQUE2Qiw2REFBUztBQUN0QztBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtEQUFJO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLHlCQUF5QixvREFBSztBQUM5QixnQkFBZ0Isb0RBQUssdUJBQXVCLHNEQUFRO0FBQ3BEO0FBQ0E7QUFDQSxzREFBc0Qsc0RBQVE7QUFDOUQsMkRBQTJELG9EQUFLO0FBQ2hFLDJEQUEyRCxvREFBSztBQUNoRSxxQkFBcUI7QUFDckIsMENBQTBDLG1EQUFRLENBQUMsc0RBQVE7QUFDM0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7OztBQUtBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QixvREFBSyxlQUFlLG9EQUFLO0FBQ2hELHdCQUF3QixvREFBSyxnQkFBZ0Isb0RBQUs7QUFDbEQ7QUFDQSxZQUFZLG9EQUFLLGdCQUFnQixvREFBSztBQUN0Qyx5QkFBeUIseURBQU0sQ0FBQyxvREFBSyxjQUFjLG9EQUFLO0FBQ3hELFNBQVM7QUFDVCx5QkFBeUIseURBQU07QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsdUJBQXVCLG9EQUFLO0FBQzVCLHdCQUF3QixvREFBSztBQUM3QixrQ0FBa0Msb0RBQUssY0FBYyxvREFBSztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsdURBQVM7QUFDL0IsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFFBQVEsa0RBQUk7QUFDWjtBQUNBOzs7QUFHQTs7QUFFZSxpSEFBSSwyQkFBMkIsRTs7Ozs7Ozs7Ozs7O0FDcEs5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdDO0FBQ0E7QUFDSzs7O0FBR3RCLHFCQUFxQixrREFBSTtBQUN4QztBQUNBO0FBQ0EsdUJBQXVCLHVEQUFJO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixrREFBSTs7QUFFdkI7QUFDQTs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdDO0FBQ2dCO0FBQ2hCOztBQUVqQixtQkFBbUIsa0RBQUk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsNkRBQVM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrREFBSTtBQUNuQjtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0M7QUFDQTtBQUNVO0FBQ0k7OztBQUcvQixtQkFBbUIsa0RBQUk7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwrQkFBK0IscURBQVk7QUFDM0M7QUFDQSwyQkFBMkIsNERBQVE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtEQUFJOzs7QUFHdkI7QUFDQTtBQUNBLFM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3ZDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdDO0FBQ0E7QUFDYzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0RBQUk7QUFDdkI7QUFDQTtBQUNBOztBQUVlLG1CQUFtQixrREFBSTtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQSwyQ0FBMkMsNERBQVE7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0JBQXNCLEdBQUcsa0RBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWdDO0FBQ0E7QUFDUTtBQUNlO0FBQ3BCOztBQUVuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsa0RBQUk7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFRLG9EQUFLLFVBQVUsZ0VBQVUsQ0FBQyxzREFBUTs7QUFFMUM7QUFDQTs7O0FBR2Usc0JBQXNCLGtEQUFJO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0RBQUk7QUFDbkI7QUFDQSxDOzs7Ozs7Ozs7OztBQ3hGQSxjQUFjLG1CQUFPLENBQUMsNk1BQXFHOztBQUUzSDtBQUNBLGNBQWMsUUFBUztBQUN2Qjs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLGFBQWEsbUJBQU8sQ0FBQyxzSkFBMkU7O0FBRWhHO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZE87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDcEVBO0FBQUE7QUFBQTtBQUE0QjtBQUNJOztBQUVoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMEJBQTBCLDhDQUFLLEVBQUUsZ0RBQU87QUFDeEM7QUFDZSxvRUFBSyxFOzs7Ozs7Ozs7Ozs7QUNmcEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUE0QztBQUNTO0FBQ0w7QUFDUjs7QUFFekI7QUFDZiwyQkFBMkIsK0RBQVk7QUFDdkMsd0JBQXdCLDZEQUFTO0FBQ2pDO0FBQ0EsYUFBYSxrREFBVTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrREFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtEQUFVO0FBQ3ZCLGdDQUFnQyxzREFBUTtBQUN4QztBQUNBLGFBQWEsa0RBQVU7QUFDdkI7QUFDQTtBQUNBO0FBQ0EsYUFBYSxrREFBVTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGtEQUFVO0FBQ3ZCO0FBQ0E7QUFDQSxhQUFhLGtEQUFVO0FBQ3ZCO0FBQ0E7QUFDQSxhQUFhLGtEQUFVO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3pFQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDUEE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQzs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxLQUFLO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7O0FDekJBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEs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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixZQUFZO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixtQkFBbUI7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixpQkFBaUI7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiJ3ZWJwYWNrLWJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vaW5kZXguanNcIik7XG4iLCJpbXBvcnQgQXBwIGZyb20gJy4vc3JjL0FwcCc7XHJcblxyXG5sZXQgYXBwID0gbmV3IEFwcCgpO1xyXG5kb2N1bWVudC5vbnNlbGVjdCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG59XHJcblxyXG5cclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHAucmVmKTsiLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi50b29sYm94IHtcXG4gIHRvcDogMzVweDtcXG4gIGxlZnQ6IDEwcHg7XFxuICB3aWR0aDogMTAwcHg7XFxuICBtaW4taGVpZ2h0OiA1MDBweDtcXG4gIGZvbnQtc2l6ZTogMTJweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG4udG9vbGJveCAudG9vbGJveC1jYXB0aW9uIHtcXG4gIHBhZGRpbmc6IDVweDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDAwO1xcbn1cXG4udG9vbGJveCAudG9vbGJveC1ib2R5IHtcXG4gIHBhZGRpbmc6IDVweDtcXG59XFxuLnRvb2xib3ggLnRvb2xib3gtaWNvbiB7XFxuICB3aWR0aDogNDBweDtcXG4gIGhlaWdodDogNDBweDtcXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJmMmYyZjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuLnRvb2xib3ggLnRvb2xib3gtaWNvbi5hY3RpdmUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiOTdlYztcXG59XFxuYm9keSB7XFxuICBtYXJnaW46IDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGU0ZTRlO1xcbiAgY29sb3I6ICNmZmY7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbn1cXG5jYW52YXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hYnNvbHV0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi52ZXJ0aWNhbC1hbGlnbiB7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4udG9wIHtcXG4gIHRvcDogMDtcXG59XFxuLmxlZnQge1xcbiAgbGVmdDogMDtcXG59XFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4uaGVhZGVyIC5tZW51LWRyb3BsaXN0IHtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIG1hcmdpbi10b3A6IDVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMyZTJlMmU7XFxuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAxcHggIzAwMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZTRlNGU7XFxuICB6LWluZGV4OiA5OTk5OTk7XFxufVxcbi5tYWluIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjhweDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIHotaW5kZXg6IC0xO1xcbiAgcmlnaHQ6IDIwMHB4O1xcbn1cXG4ubWFpbiAuZHJhd2luZy1ib2FyZCB7XFxuICBmb250LXNpemU6IDA7XFxuICBib3gtc2hhZG93OiAwIDAgNXB4IDFweCAjMDAwO1xcbn1cXG4ubWFpbiAuZHJhd2luZy1ib2FyZCAucmVzaXplLWJveCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3JkZXI6IDFweCAjZmZmIGRhc2hlZDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xcbn1cXG4ubWFpbiAuZHJhd2luZy1ib2FyZCAucmVzaXplLWJveCAucmVzaXplLXBvaW50IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMHB4O1xcbiAgaGVpZ2h0OiAxMHB4O1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNiOTdlYztcXG59XFxuLm1haW4gLmRyYXdpbmctYm9hcmQgLnJlc2l6ZS1ib3ggLnJvdGF0ZS1wb2ludCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB3aWR0aDogMTBweDtcXG4gIGhlaWdodDogMTBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2MzM2I7XFxufVxcbi5tYWluIC5kcmF3aW5nLWJvYXJkIC5yZXNpemUtYm94IC5jdXQtcG9pbnQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDMwcHg7XFxuICBoZWlnaHQ6IDJweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2MzM2I7XFxufVxcbi5tYWluIC5kcmF3aW5nLWJvYXJkIC5yZXNpemUtYm94IC5yZXNpemUtbHQge1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoMTBweCAvIC0yKSwgY2FsYygxMHB4IC8gLTIpKTtcXG4gIGN1cnNvcjogbndzZS1yZXNpemU7XFxufVxcbi5tYWluIC5kcmF3aW5nLWJvYXJkIC5yZXNpemUtYm94IC5yZXNpemUtdCB7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDEwcHggLyAtMiksIGNhbGMoMTBweCAvIC0yKSk7XFxuICBjdXJzb3I6IG5zLXJlc2l6ZTtcXG59XFxuLm1haW4gLmRyYXdpbmctYm9hcmQgLnJlc2l6ZS1ib3ggLnJlc2l6ZS1ydCB7XFxuICB0b3A6IDA7XFxuICByaWdodDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoMTBweCAvIDIpLCBjYWxjKDEwcHggLyAtMikpO1xcbiAgY3Vyc29yOiBuZXN3LXJlc2l6ZTtcXG59XFxuLm1haW4gLmRyYXdpbmctYm9hcmQgLnJlc2l6ZS1ib3ggLnJlc2l6ZS1yIHtcXG4gIHRvcDogNTAlO1xcbiAgcmlnaHQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDEwcHggLyAyKSwgY2FsYygxMHB4IC8gLTIpKTtcXG4gIGN1cnNvcjogZXctcmVzaXplO1xcbn1cXG4ubWFpbiAuZHJhd2luZy1ib2FyZCAucmVzaXplLWJveCAucmVzaXplLXJkIHtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoY2FsYygxMHB4IC8gMiksIGNhbGMoMTBweCAvIDIpKTtcXG4gIGN1cnNvcjogbndzZS1yZXNpemU7XFxufVxcbi5tYWluIC5kcmF3aW5nLWJvYXJkIC5yZXNpemUtYm94IC5yZXNpemUtZCB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDEwcHggLyAtMiksIGNhbGMoMTBweCAvIDIpKTtcXG4gIGN1cnNvcjogbnMtcmVzaXplO1xcbn1cXG4ubWFpbiAuZHJhd2luZy1ib2FyZCAucmVzaXplLWJveCAucmVzaXplLWxkIHtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDEwcHggLyAtMiksIGNhbGMoMTBweCAvIDIpKTtcXG4gIGN1cnNvcjogbmVzdy1yZXNpemU7XFxufVxcbi5tYWluIC5kcmF3aW5nLWJvYXJkIC5yZXNpemUtYm94IC5yZXNpemUtbCB7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDEwcHggLyAtMiksIGNhbGMoMTBweCAvIC0yKSk7XFxuICBjdXJzb3I6IGV3LXJlc2l6ZTtcXG59XFxuLm1haW4gLmRyYXdpbmctYm9hcmQgLnJlc2l6ZS1ib3ggLnJlc2l6ZS1yb3RhdGUge1xcbiAgdG9wOiAtMzBweDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoMTBweCAvIC0yKSwgY2FsYygxMHB4IC8gLTIpKTtcXG4gIGN1cnNvcjogY2VsbDtcXG59XFxuLm1haW4gLmRyYXdpbmctYm9hcmQgLnJlc2l6ZS1ib3ggLnJlc2l6ZS1yb3RhdGU6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMXB4O1xcbiAgaGVpZ2h0OiBjYWxjKDMwcHggLSAxMHB4KTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDEwcHggLyAyKSwgMTBweCk7XFxufVxcbi5tYWluIC5kcmF3aW5nLWJvYXJkIC5yZXNpemUtYm94IC5yZXNpemUtdF9fY3V0IHtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKGNhbGMoMzBweCAvIC0yKSwgY2FsYygxMHB4IC8gMiArIDVweCkpO1xcbn1cXG4ubWFpbiAuZHJhd2luZy1ib2FyZCAucmVzaXplLWJveCAucmVzaXplLWRfX2N1dCB7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDMwcHggLyAtMiksIGNhbGMoMTBweCAvIC0yIC0gNXB4KSk7XFxufVxcbi5tYWluIC5kcmF3aW5nLWJvYXJkIC5yZXNpemUtYm94IC5yZXNpemUtbF9fY3V0IHtcXG4gIHdpZHRoOiAycHg7XFxuICBoZWlnaHQ6IDMwcHg7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDEwcHggLyAyICsgNXB4KSwgY2FsYygzMHB4IC8gLTIpKTtcXG59XFxuLm1haW4gLmRyYXdpbmctYm9hcmQgLnJlc2l6ZS1ib3ggLnJlc2l6ZS1yX19jdXQge1xcbiAgd2lkdGg6IDJweDtcXG4gIGhlaWdodDogMzBweDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiA1MCU7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZShjYWxjKDEwcHggLyAtMiAtIDVweCksIGNhbGMoMzBweCAvIC0yKSk7XFxufVxcbi5pbmZvIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMjhweDtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgd2lkdGg6IDIwMHB4O1xcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjMDAwO1xcbn1cXG4uaW5mbyAubGF5ZXItaW5mbyB7XFxuICBoZWlnaHQ6IDUwMHB4O1xcbiAgb3ZlcmZsb3cteTogYXV0bztcXG59XFxuLmluZm8gLmxheWVyLWluZm8gLmxheWVyLWl0ZW0ge1xcbiAgbWFyZ2luOiAxMHB4IDAgMTBweCA1cHg7XFxufVxcbi5pbmZvIC5sYXllci1pbmZvIC5sYXllci1pdGVtLmFjdGl2ZSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2I5N2VjO1xcbn1cXG4uaW5mbyAubGF5ZXItaW5mbyAubGF5ZXItaXRlbV9fdGl0bGUge1xcbiAgZmxleDogMTtcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXG4gIGhlaWdodDogMjBweDtcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbn1cXG4uY29udGV4dC1tZW51IHtcXG4gIHdpZHRoOiAxMjBweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XFxuICBwYWRkaW5nOiA1cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmYyZjJmO1xcbiAgYm94LXNoYWRvdzogMCAwIDNweCAxcHggIzAwMDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB6LWluZGV4OiA5OTk5OTtcXG59XFxuLmNvbnRleHQtbWVudS5hY3RpdmUge1xcbiAgb3BhY2l0eTogMTtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcXG59XFxuLmNvbnRleHQtbWVudS5kaXNhcHBlYXIge1xcbiAgb3BhY2l0eTogMDtcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycztcXG59XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbnRhaW5lci9IZWFkZXInO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL2NvbnRhaW5lci9NYWluJztcclxuaW1wb3J0IFRvb2xib3ggZnJvbSAnLi9jb250YWluZXIvVG9vbGJveCc7XHJcblxyXG5pbXBvcnQgdXRpbCBmcm9tICcuL3V0aWwvdXRpbCc7XHJcbmltcG9ydCAnLi9jc3Mvc3R5bGUubGVzcyc7XHJcbmltcG9ydCBJbmZvIGZyb20gJy4vY29udGFpbmVyL0luZm8nO1xyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgbGV0IGhlYWRlciA9IG5ldyBIZWFkZXIoKTtcclxuICAgICAgICBsZXQgbWFpbiA9IG5ldyBNYWluKCk7XHJcbiAgICAgICAgbGV0IGluZm8gPSBuZXcgSW5mbygpO1xyXG4gICAgICAgIGxldCB0b29sYm94ID0gbmV3IFRvb2xib3goKTtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxyXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFsnbXktYXBwJ10sXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBoZWFkZXJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBtYWluXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogaW5mb1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IHRvb2xib3hcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZG9jdW1lbnQub25zZWxlY3RzdGFydCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRvY3VtZW50Lm9uY29udGV4dG1lbnUgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVmID0gdXRpbC5nZW5lcmF0ZURPTSh0ZW1wbGF0ZSkucm9vdDtcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIE5PUk1BTDogJ05PUk1BTCdcclxufSIsImNsYXNzIFN0ZXAge1xyXG4gICAgY29uc3RydWN0b3IgKHR5cGUpIHtcclxuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNsYXNzIE1vdmVTdGVwIGV4dGVuZHMgU3RlcCB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0eXBlLCBvZmZzZXRYID0gMCwgb2Zmc2V0WSA9IDAsIHNjYWxlWCA9IDEsIHNjYWxlWSA9IDEsIHJvdGF0ZSA9IDAsIGNsaXBUID0gMCwgY2xpcEQgPSAwLCBjbGlwTCA9IDAsIGNsaXBSID0gMCkge1xyXG4gICAgICAgIHN1cGVyKHR5cGUpO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0WCA9IG9mZnNldFg7XHJcbiAgICAgICAgdGhpcy5vZmZzZXRZID0gb2Zmc2V0WTtcclxuICAgICAgICB0aGlzLnNjYWxlWCA9IHNjYWxlWDtcclxuICAgICAgICB0aGlzLnNjYWxlWSA9IHNjYWxlWTtcclxuICAgICAgICB0aGlzLnJvdGF0ZSA9IHJvdGF0ZTtcclxuICAgICAgICB0aGlzLmNsaXBUID0gY2xpcFQ7XHJcbiAgICAgICAgdGhpcy5jbGlwRCA9IGNsaXBEO1xyXG4gICAgICAgIHRoaXMuY2xpcEwgPSBjbGlwTDtcclxuICAgICAgICB0aGlzLmNsaXBSID0gY2xpcFI7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4iLCJleHBvcnQgZGVmYXVsdCB7XHJcbiAgICBNT1ZFOiAnTU9WRSdcclxufSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIE1PVkU6ICdNT1ZFJ1xyXG59IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vdXRpbC9CYXNlJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcclxuaW1wb3J0IHsgTW92ZVN0ZXAgfSBmcm9tICcuLi9FbnVtL1N0ZXAnO1xyXG5pbXBvcnQgU3RlcFR5cGUgZnJvbSAnLi4vRW51bS9TdGVwVHlwZSc7XHJcbmltcG9ydCB7XHJcbiAgICBvcGVuRmlsZSxcclxuICAgIGNoYW5nZVpvb20sXHJcbiAgICBzYXZlUGljdHVyZVxyXG59IGZyb20gJy4uL3N0b3JlL2FjdGlvbic7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWwvdXRpbCc7XHJcblxyXG5jbGFzcyBJdGVtIHtcclxuICAgIGNvbnN0cnVjdG9yKHRleHQsIG9uY2xpY2spIHtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxyXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFsnbWVudS1pdGVtJ10sXHJcbiAgICAgICAgICAgIHRleHQ6IHRleHRcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZWYgPSB1dGlsLmdlbmVyYXRlRE9NKHRlbXBsYXRlKS5yb290O1xyXG4gICAgICAgIHRoaXMucmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb25jbGljayk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5jbGFzcyBGaWxlTWVudSBleHRlbmRzIEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0LnR5cGUgPSAnZmlsZSc7XHJcbiAgICAgICAgaW5wdXQubXVsdGlwbGUgPSB0cnVlO1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICBpbnB1dC5vbmNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhhdC5vcGVuRmlsZXModGhpcy5maWxlcyk7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xyXG4gICAgICAgIHRoaXMucmVmID0gdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICBvcGVuRmlsZUJ5Q2xpY2soKSB7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5jbGljaygpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBvcGVuRmlsZXMoZmlsZXMpIHtcclxuICAgICAgICBmb3IgKGxldCBmaWxlIG9mIGZpbGVzKSB7XHJcbiAgICAgICAgICAgIC8vIGxldCBmaWxlID0gdGhpcy5maWxlc1swXTtcclxuICAgICAgICAgICAgbGV0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGF5ZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGltYWdlLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbldpZHRoOiBpbWFnZS53aWR0aCxcclxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5IZWlnaHQ6IGltYWdlLmhlaWdodCxcclxuICAgICAgICAgICAgICAgICAgICBpbWFnZTogaW1hZ2UsXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogdXRpbC5kZWxldGVQb3N0Zml4KGZpbGUubmFtZSksXHJcbiAgICAgICAgICAgICAgICAgICAgc3RlcHM6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IE1vdmVTdGVwKFN0ZXBUeXBlLk1PVkUpXHJcbiAgICAgICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIGxldCB6b29tWCA9IGltYWdlLndpZHRoIC8gKHdpbmRvdy5pbm5lcldpZHRoIC0gNTAwKTtcclxuICAgICAgICAgICAgICAgIGxldCB6b29tWSA9IGltYWdlLmhlaWdodCAvICh3aW5kb3cuaW5uZXJIZWlnaHQgLSAxMDApO1xyXG4gICAgICAgICAgICAgICAgbGV0IHpvb20gPSBNYXRoLm1heCh6b29tWCwgem9vbVkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHpvb20gPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgem9vbSA9IDE7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIXN0b3JlLnN0YXRlLmxheWVycy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChvcGVuRmlsZShsYXllcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGNoYW5nZVpvb20oem9vbSkpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChvcGVuRmlsZShsYXllcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHN0b3JlLmRpc3BhdGNoKGNoYW5nZVpvb20oem9vbSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltYWdlLnNyYyA9IHVybDs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIGxldCBvcGVuRmlsZSA9IG5ldyBJdGVtKCfmiZPlvIDmlofku7YnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGF0Lm9wZW5GaWxlQnlDbGljaygpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICBsZXQgc2F2ZUZpbGUgPSBuZXcgSXRlbSgn5L+d5a2Y5paH5Lu2JywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChzYXZlUGljdHVyZSgpKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcclxuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgIGNsYXNzTGlzdDogWydtZW51LWRyb3BsaXN0JywgJ2hpZGUnLCAnYWJzb2x1dGUnXSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IG9wZW5GaWxlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogc2F2ZUZpbGVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcm9vdCA9IHV0aWwuZ2VuZXJhdGVET00odGVtcGxhdGUpLnJvb3Q7XHJcbiAgICAgICAgcmV0dXJuIHJvb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgICAgIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB1dGlsLmdldFNpbmdsZXRvbihGaWxlTWVudSk7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vdXRpbC9CYXNlJztcclxuaW1wb3J0IHV0aWwgZnJvbSAnLi4vdXRpbC91dGlsJztcclxuaW1wb3J0IFJlbmRlckNvbnRleHQgZnJvbSAnLi4vd2ViZ2wvV2ViR0wnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF5ZXIgZXh0ZW5kcyBCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcclxuICAgICAgICAgICAgdGFnTmFtZTogJ2NhbnZhcycsXHJcbiAgICAgICAgICAgIGNsYXNzTGlzdDogWydjYW52YXMnLCAnYWJzb2x1dGUnLCAnbGVmdCcsICd0b3AnXVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICB0aGlzLnJlZiA9IHV0aWwuZ2VuZXJhdGVET00odGVtcGxhdGUpLnJvb3Q7XHJcbiAgICAgICAgdGhpcy5yZWYud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLnJlZi5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb250ZXh0ID0gbmV3IFJlbmRlckNvbnRleHQodGhpcy5yZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcihsYXllcikge1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29udGV4dC5yZW5kZXIobGF5ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgICB0aGlzLnJlZi5yZW1vdmUoKTtcclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlIGZyb20gJy4uL3V0aWwvQmFzZSc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWwvdXRpbCc7XHJcbmltcG9ydCB7IGRlbGV0ZUxheWVyLCB0cmFuc2Zvcm1MYXllcn0gZnJvbSAnLi4vc3RvcmUvYWN0aW9uJztcclxuaW1wb3J0IENvbnRleHRNZW51IGZyb20gJy4uL2NvbnRhaW5lci9Db250ZXh0TWVudSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXllckNvbnRleHRNZW51IGV4dGVuZHMgQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGlzLm1lbnUgPSBuZXcgQ29udGV4dE1lbnUoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5Yig6ZmkJyxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2RlbGV0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGRlbGV0ZUxheWVyKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn6Ieq55Sx5Y+Y5o2iJyxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2godHJhbnNmb3JtTGF5ZXIoKSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pO1xyXG4gICAgICAgIHRoaXMubWVudS5yZWYuY2xhc3NMaXN0LmFkZCgnZGlzYXBwZWFyJyk7XHJcbiAgICAgICAgdGhpcy5tZW51LnJlZi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm1lbnUucmVmKTtcclxuXHJcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhhdC5oaWRlKCk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5tZW51LnJlZi5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtNb3VzZUV2ZW50fSBlIFxyXG4gICAgICovXHJcbiAgICBzaG93KGUpIHtcclxuICAgICAgICB0aGlzLm1lbnUucmVmLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHRoaXMubWVudS5yZWYuY2xhc3NMaXN0LnJlbW92ZSgnZGlzYXBwZWFyJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5tZW51LnJlZi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcclxuICAgICAgICBsZXQgbGVmdCA9IGUuY2xpZW50WDtcclxuICAgICAgICBsZXQgdG9wID0gZS5jbGllbnRZO1xyXG4gICAgICAgIGlmIChsZWZ0ICsgdGhpcy5tZW51LnJlZi5vZmZzZXRXaWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XHJcbiAgICAgICAgICAgIGxlZnQgPSB3aW5kb3cuaW5uZXJXaWR0aCAtIHRoaXMubWVudS5yZWYub2Zmc2V0V2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0b3AgKyB0aGlzLm1lbnUucmVmLm9mZnNldEhlaWdodCA+IHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgICAgICB0b3AgPSB3aW5kb3cuaW5uZXJIZWlnaHQgLSB0aGlzLm1lbnUucmVmLm9mZnNldEhlaWdodDtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5tZW51LnJlZi5zdHlsZS5sZWZ0ID0gIGxlZnQgKyAncHgnO1xyXG4gICAgICAgIHRoaXMubWVudS5yZWYuc3R5bGUudG9wID0gdG9wICsgJ3B4JztcclxuICAgIH1cclxuXHJcbiAgICBoaWRlKCkge1xyXG4gICAgICAgIHRoaXMubWVudS5yZWYuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgdGhpcy5tZW51LnJlZi5jbGFzc0xpc3QuYWRkKCdkaXNhcHBlYXInKTtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlIGZyb20gJy4uL3V0aWwvQmFzZSc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWwvdXRpbCc7XHJcbmltcG9ydCB7IGNoYW5nZUxheWVyIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9uJztcclxuaW1wb3J0IExheWVyQ29udGV4dE1lbnUgZnJvbSAnLi9MYXllckNvbnRleHRNZW51JztcclxuXHJcbmNsYXNzIEl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IobGF5ZXIsIGNsZWFyQWxsQWN0aXZlLCBjaGFuZ2VMYXllcikge1xyXG4gICAgICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcclxuICAgICAgICB0aGlzLnJlZiA9IHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuY2xlYXJBbGxBY3RpdmUgPSBjbGVhckFsbEFjdGl2ZTtcclxuICAgICAgICB0aGlzLmNoYW5nZUxheWVyID0gY2hhbmdlTGF5ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcclxuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgIGNsYXNzTGlzdDogWydsYXllci1pdGVtJywgJ2ZsZXgnXSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiAnaW1nJyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsnbGF5ZXItaXRlbV9fc3RhbXAnXSxcclxuICAgICAgICAgICAgICAgICAgICByZWY6ICdzdGFtcCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ2xheWVyLWl0ZW1fX3RpdGxlJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5sYXllci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmxheWVyLm5hbWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQge3Jvb3QsIHN0YW1wfSA9IHV0aWwuZ2VuZXJhdGVET00odGVtcGxhdGUpO1xyXG4gICAgICAgIHJvb3QuZHJhZ2dhYmxlID0gdHJ1ZTtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgcm9vdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhhdC5jbGVhckFsbEFjdGl2ZSgpO1xyXG4gICAgICAgICAgICB0aGF0LmFjdGl2ZSgpO1xyXG4gICAgICAgICAgICBzdG9yZS5kaXNwYXRjaChjaGFuZ2VMYXllcih0aGF0LmxheWVyKSk7XHJcbiAgICAgICAgfSlcclxuXHJcblxyXG4gICAgICAgIHJvb3Qub25kcmFnc3RhcnQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzdGFydCcpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gcm9vdC5vbmRyYWdvdmVyID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICBzdGFtcC5zcmMgPSB1dGlsLmdlbmVyYXRlU3RhbXAodGhpcy5sYXllci5pbWFnZSk7XHJcbiAgICAgICAgcmV0dXJuIHJvb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZlKCkge1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVmLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVmLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZSgpIHtcclxuICAgICAgICB0aGlzLnJlZi5yZW1vdmUoKTtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTGF5ZXJJbmZvIGV4dGVuZHMgQmFzZXtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZWYgPSB0aGlzLnJlbmRlcigpOyAgICBcclxuICAgICAgICB0aGlzLmxheWVySW5mb0l0ZW1zID0gW107XHJcbiAgICAgICAgdGhpcy5jbGVhckFsbEFjdGl2ZSA9IHRoaXMuY2xlYXJBbGxBY3RpdmUuYmluZCh0aGlzKTtcclxuICAgICAgICB0aGlzLmNoYW5nZUxheWVyID0gdGhpcy5jaGFuZ2VMYXllci5iaW5kKHRoaXMpO1xyXG4gICAgICAgIHRoaXMuY29udGV4dE1lbnUgPSBuZXcgTGF5ZXJDb250ZXh0TWVudSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxyXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFsnbGF5ZXItaW5mbyddLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW11cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdG9yZS5zdGF0ZS5sYXllcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgdGVtcGxhdGUucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IG5ldyBJdGVtKHN0b3JlLnN0YXRlLmxheWVyc1tpXSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHJvb3QgPSB1dGlsLmdlbmVyYXRlRE9NKHRlbXBsYXRlKS5yb290O1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICByb290LmFkZEV2ZW50TGlzdGVuZXIoJ2NvbnRleHRtZW51JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgdGhhdC5jb250ZXh0TWVudS5zaG93KGUpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHJvb3Qub25kcmFnb3ZlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByb290Lm9uZHJvcCA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Ryb3AnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByb290O1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBjbGVhckFsbEFjdGl2ZSgpIHtcclxuICAgICAgICB0aGlzLmxheWVySW5mb0l0ZW1zLmZvckVhY2goaXRlbSA9PiBpdGVtLmRpc2FibGUoKSk7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkTGF5ZXIobGF5ZXIpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IG5ldyBJdGVtKGxheWVyLCB0aGlzLmNsZWFyQWxsQWN0aXZlLCB0aGlzLmNoYW5nZUxheWVyKTtcclxuICAgICAgICB0aGlzLmNsZWFyQWxsQWN0aXZlKCk7XHJcbiAgICAgICAgaXRlbS5hY3RpdmUoKTtcclxuICAgICAgICB0aGlzLmxheWVySW5mb0l0ZW1zLnB1c2goaXRlbSk7XHJcbiAgICAgICAgdGhpcy5yZWYuYXBwZW5kQ2hpbGQoaXRlbS5yZWYpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlbGV0ZUxheWVyKGxheWVyKSB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5sYXllckluZm9JdGVtcy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmxheWVyID09PSBsYXllcik7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGRlbGV0ZWRMYXllciA9IHRoaXMubGF5ZXJJbmZvSXRlbXMuc3BsaWNlKGluZGV4LCAxKVswXTtcclxuICAgICAgICAgICAgZGVsZXRlZExheWVyLnJlbW92ZSgpO1xyXG4gICAgICAgICAgICBkZWxldGVkTGF5ZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2VMYXllcihsYXllcikge1xyXG4gICAgICAgIGxldCBpdGVtID0gdGhpcy5sYXllckluZm9JdGVtcy5maW5kKGl0ID0+IGl0LmxheWVyID09PSBsYXllcik7XHJcbiAgICAgICAgaWYgKGl0ZW0pIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhckFsbEFjdGl2ZSgpO1xyXG4gICAgICAgICAgICBpdGVtLmFjdGl2ZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXRpbC5nZXRTaW5nbGV0b24oTGF5ZXJJbmZvKTsiLCJpbXBvcnQgdXRpbCBmcm9tICcuLi91dGlsL3V0aWwnO1xyXG5pbXBvcnQgQmFzZSBmcm9tICcuLi91dGlsL0Jhc2UnO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xyXG5pbXBvcnQgZ2xVdGlsIGZyb20gJy4uL3dlYmdsL3V0aWwnO1xyXG5pbXBvcnQgU3RlcFR5cGUgZnJvbSAnLi4vRW51bS9TdGVwVHlwZSc7XHJcbmltcG9ydCBWZWMyIGZyb20gJy4uL3V0aWwvVmVjMic7XHJcbmltcG9ydCB7ZHJhd0xheWVyfSBmcm9tICcuLi9zdG9yZS9hY3Rpb24nXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXNpemVCb3ggZXh0ZW5kcyBCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRhaW5lcikge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICAgICAgdGhpcy5yZWYgPSB0aGlzLnJlbmRlcigpO1xyXG4gICAgICAgIHRoaXMuaXNTaG93ID0gZmFsc2U7XHJcbiAgICAgICAgdGhpcy5sYXllciA9IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcclxuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgIGNsYXNzTGlzdDogWydyZXNpemUtYm94J10sXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ3Jlc2l6ZS1sdCcsICdyZXNpemUtcG9pbnQnXSxcclxuICAgICAgICAgICAgICAgICAgICByZWY6ICdsdCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ3Jlc2l6ZS10JywgJ3Jlc2l6ZS1wb2ludCddLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZjogJ3QnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydyZXNpemUtcnQnLCAncmVzaXplLXBvaW50J10sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmOiAncnQnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydyZXNpemUtcicsICdyZXNpemUtcG9pbnQnXSxcclxuICAgICAgICAgICAgICAgICAgICByZWY6ICdyJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsncmVzaXplLXJkJywgJ3Jlc2l6ZS1wb2ludCddLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZjogJ3JkJ1xyXG4gICAgICAgICAgICAgICAgfSwgXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ3Jlc2l6ZS1kJywgJ3Jlc2l6ZS1wb2ludCddLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZjogJ2QnXHJcbiAgICAgICAgICAgICAgICB9LCBcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsncmVzaXplLWxkJywgJ3Jlc2l6ZS1wb2ludCddLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZjogJ2xkJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsncmVzaXplLWwnLCAncmVzaXplLXBvaW50J10sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmOiAnbCdcclxuICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydyZXNpemUtcm90YXRlJywgJ3JvdGF0ZS1wb2ludCddLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZjogJ3JvdGF0ZSdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ3Jlc2l6ZS10X19jdXQnLCAnY3V0LXBvaW50J10sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmOiAndEN1dCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ3Jlc2l6ZS1kX19jdXQnLCAnY3V0LXBvaW50J10sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmOiAnZEN1dCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ3Jlc2l6ZS1sX19jdXQnLCAnY3V0LXBvaW50J10sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmOiAnbEN1dCdcclxuICAgICAgICAgICAgICAgIH0sIFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydyZXNpemUtcl9fY3V0JywgJ2N1dC1wb2ludCddLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlZjogJ2RDdXQnXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB7bHQsIHQsIHJ0LCByLCByZCwgZCwgbGQsIGwsIHJvdGF0ZSwgdEN1dCwgZEN1dCwgbEN1dCwgckN1dCwgcm9vdH0gPSB1dGlsLmdlbmVyYXRlRE9NKHRlbXBsYXRlKTtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRDdHJsID0gbnVsbDtcclxuICAgICAgICBsZXQgbGFzdE1vdmVTdGVwID0gbnVsbDtcclxuICAgICAgICBsZXQgY3VycmVudFJvdGF0ZSA9IDA7XHJcbiAgICAgICAgbGV0IHN0YXJ0WCwgc3RhcnRZO1xyXG4gICAgICAgIGxldCBpbml0V2lkdGgsIGluaXRIZWlnaHQ7XHJcbiAgICAgICAgbGV0IGluaXRTY2FsZVgsIGluaXRTY2FsZVk7XHJcbiAgICAgICAgbGV0IHYsIGFuZ2xlRGlmZiwgb2Zmc2V0WCwgb2Zmc2V0WSwgY3VycmVudFdpZHRoLCBjdXJyZW50SGVpZ2h0O1xyXG5cclxuICAgICAgICBsdC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd24pO1xyXG4gICAgICAgIHJ0LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bik7XHJcbiAgICAgICAgbGQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duKTtcclxuICAgICAgICByZC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd24pO1xyXG4gICAgICAgIHQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duKTtcclxuICAgICAgICBkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIG1vdXNlRG93bik7XHJcbiAgICAgICAgbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBtb3VzZURvd24pO1xyXG4gICAgICAgIHIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2VEb3duKTtcclxuICAgICAgICBcclxuXHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1vdmUoZSkge1xyXG4gICAgICAgICAgICB2ID0gbmV3IFZlYzIoZS5jbGllbnRYIC0gc3RhcnRYLCBlLmNsaWVudFkgLSBzdGFydFkpO1xyXG4gICAgICAgICAgICBhbmdsZURpZmYgPSB2LmFuZ2xlIC0gY3VycmVudFJvdGF0ZTtcclxuICAgICAgICAgICAgb2Zmc2V0WCA9IHYubSAqIE1hdGguY29zKGFuZ2xlRGlmZik7XHJcbiAgICAgICAgICAgIG9mZnNldFkgPSB2Lm0gKiBNYXRoLnNpbihhbmdsZURpZmYpO1xyXG5cclxuICAgICAgICAgICAgY3VycmVudEN0cmwgJiYgY3VycmVudEN0cmwoZSk7XHJcblxyXG4gICAgICAgICAgICBsYXN0TW92ZVN0ZXAuc2NhbGVYID0gY3VycmVudFdpZHRoIC8gaW5pdFdpZHRoO1xyXG4gICAgICAgICAgICBsYXN0TW92ZVN0ZXAuc2NhbGVZID0gY3VycmVudEhlaWdodCAvIGluaXRIZWlnaHQ7XHJcbiAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKGRyYXdMYXllcih0aGF0LmxheWVyKSk7XHJcbiAgICAgICAgICAgIHRoYXQudXBkYXRlUG9zaXRpb24odGhhdC5sYXllcik7ICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiB1cCAoKSB7XHJcbiAgICAgICAgICAgIHRoYXQubGF5ZXIuY3VycmVudFdpZHRoICo9IGxhc3RNb3ZlU3RlcC5zY2FsZVg7XHJcbiAgICAgICAgICAgIHRoYXQubGF5ZXIuY3VycmVudEhlaWdodCAqPSBsYXN0TW92ZVN0ZXAuc2NhbGVZO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHVwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIGx0Q29udHJvbCAoZSkge1xyXG4gICAgICAgICAgICBjdXJyZW50V2lkdGggPSBpbml0V2lkdGggKiBpbml0U2NhbGVYIC0gb2Zmc2V0WCAqIDIgKiBzdG9yZS5zdGF0ZS56b29tO1xyXG4gICAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gaW5pdEhlaWdodCAqIGluaXRTY2FsZVkgLSBvZmZzZXRZICogMiAqIHN0b3JlLnN0YXRlLnpvb207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBydENvbnRyb2woZSkge1xyXG4gICAgICAgICAgICBjdXJyZW50V2lkdGggPSBpbml0V2lkdGggKiBpbml0U2NhbGVYICsgb2Zmc2V0WCAqIDIgKiBzdG9yZS5zdGF0ZS56b29tO1xyXG4gICAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gaW5pdEhlaWdodCAqIGluaXRTY2FsZVkgLSBvZmZzZXRZICogMiAqIHN0b3JlLnN0YXRlLnpvb207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBsZENvbnRyb2wgKGUpIHtcclxuICAgICAgICAgICAgY3VycmVudFdpZHRoID0gaW5pdFdpZHRoICogaW5pdFNjYWxlWCAtIG9mZnNldFggKiAyICogc3RvcmUuc3RhdGUuem9vbTtcclxuICAgICAgICAgICAgY3VycmVudEhlaWdodCA9IGluaXRIZWlnaHQgKiBpbml0U2NhbGVZICsgb2Zmc2V0WSAqIDIgKiBzdG9yZS5zdGF0ZS56b29tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gcmRDb250cm9sKGUpIHtcclxuICAgICAgICAgICAgY3VycmVudFdpZHRoID0gaW5pdFdpZHRoICogaW5pdFNjYWxlWCArIG9mZnNldFggKiAyICogc3RvcmUuc3RhdGUuem9vbTtcclxuICAgICAgICAgICAgY3VycmVudEhlaWdodCA9IGluaXRIZWlnaHQgKiBpbml0U2NhbGVZICsgb2Zmc2V0WSAqIDIgKiBzdG9yZS5zdGF0ZS56b29tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gbENvbnRyb2woZSkge1xyXG4gICAgICAgICAgICBjdXJyZW50V2lkdGggPSBpbml0V2lkdGggKiBpbml0U2NhbGVYIC0gb2Zmc2V0WCAqIDIgKiBzdG9yZS5zdGF0ZS56b29tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gckNvbnRyb2woZSkge1xyXG4gICAgICAgICAgICBjdXJyZW50V2lkdGggPSBpbml0V2lkdGggKiBpbml0U2NhbGVYICsgb2Zmc2V0WCAqIDIgKiBzdG9yZS5zdGF0ZS56b29tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZnVuY3Rpb24gdENvbnRyb2woZSkge1xyXG4gICAgICAgICAgICBjdXJyZW50SGVpZ2h0ID0gaW5pdEhlaWdodCAqIGluaXRTY2FsZVkgLSBvZmZzZXRZICogMiAqIHN0b3JlLnN0YXRlLnpvb207XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBkQ29udHJvbChlKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnRIZWlnaHQgPSBpbml0SGVpZ2h0ICogaW5pdFNjYWxlWSArIG9mZnNldFkgKiAyICogc3RvcmUuc3RhdGUuem9vbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1vdXNlRG93bihlKSB7XHJcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygncmVzaXplLWx0JykpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDdHJsID0gbHRDb250cm9sO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXNpemUtcnQnKSkge1xyXG4gICAgICAgICAgICAgICAgY3VycmVudEN0cmwgPSBydENvbnRyb2w7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jbGFzc0xpc3QuY29udGFpbnMoJ3Jlc2l6ZS1sZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q3RybCA9IGxkQ29udHJvbDtcclxuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygncmVzaXplLXJkJykpIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRDdHJsID0gcmRDb250cm9sO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXNpemUtdCcpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q3RybCA9IHRDb250cm9sO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXNpemUtZCcpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q3RybCA9IGRDb250cm9sO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXNpemUtbCcpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q3RybCA9IGxDb250cm9sO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXNpemUtcicpKSB7XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50Q3RybCA9IHJDb250cm9sO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsYXN0TW92ZVN0ZXAgPSB0aGF0LmxheWVyLnN0ZXBzW3RoYXQubGF5ZXIuc3RlcHMubGVuZ3RoIC0gMV07XHJcbiAgICAgICAgICAgIGlmIChsYXN0TW92ZVN0ZXApIHtcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRSb3RhdGUgPSBsYXN0TW92ZVN0ZXAucm90YXRlICogTWF0aC5QSSAvIDE4MDtcclxuICAgICAgICAgICAgICAgIGluaXRXaWR0aCA9IHRoYXQubGF5ZXIub3JpZ2luV2lkdGg7XHJcbiAgICAgICAgICAgICAgICBpbml0SGVpZ2h0ID0gdGhhdC5sYXllci5vcmlnaW5IZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBpbml0U2NhbGVYID0gbGFzdE1vdmVTdGVwLnNjYWxlWDtcclxuICAgICAgICAgICAgICAgIGluaXRTY2FsZVkgPSBsYXN0TW92ZVN0ZXAuc2NhbGVZO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHN0YXJ0WCA9IGUuY2xpZW50WDtcclxuICAgICAgICAgICAgc3RhcnRZID0gZS5jbGllbnRZO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3ZlKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHVwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiByb290O1xyXG4gICAgfVxyXG5cclxuICAgIHNob3cobGF5ZXIpIHtcclxuICAgICAgICB0aGlzLmxheWVyID0gbGF5ZXI7XHJcbiAgICAgICAgdGhpcy51cGRhdGVQb3NpdGlvbihsYXllcik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYXBwZW5kQ2hpbGQodGhpcy5yZWYpO1xyXG4gICAgICAgIHRoaXMuaXNTaG93ID0gdHJ1ZTtcclxuXHJcbiAgICB9XHJcblxyXG4gICAgaGlkZSgpIHtcclxuICAgICAgICB0aGlzLnJlZi5yZW1vdmUoKTtcclxuICAgICAgICB0aGlzLmlzU2hvdyA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZVBvc2l0aW9uKGxheWVyKSB7XHJcbiAgICAgICAgbGV0IHdpZHRoID0gc3RvcmUuc3RhdGUud2lkdGggLyBzdG9yZS5zdGF0ZS56b29tO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSBzdG9yZS5zdGF0ZS5oZWlnaHQgLyBzdG9yZS5zdGF0ZS56b29tO1xyXG4gICAgICAgIGxldCBjdXJyZW50TGF5ZXIgPSBsYXllcjtcclxuICAgICAgICBsZXQgeDEgPSBjdXJyZW50TGF5ZXIuYm91bmRhcnkubWluWCAqIHdpZHRoO1xyXG4gICAgICAgIGxldCB4MiA9IGN1cnJlbnRMYXllci5ib3VuZGFyeS5tYXhYICogd2lkdGg7XHJcbiAgICAgICAgbGV0IHkxID0gY3VycmVudExheWVyLmJvdW5kYXJ5Lm1pblkgKiBoZWlnaHQ7XHJcbiAgICAgICAgbGV0IHkyID0gY3VycmVudExheWVyLmJvdW5kYXJ5Lm1heFkgKiBoZWlnaHQ7XHJcbiAgICAgICAgbGV0IGNlbnRlclggPSAoeDEgKyB4MikgLyAyO1xyXG4gICAgICAgIGxldCBjZW50ZXJZID0gKHkxICsgeTIpIC8gMjtcclxuICAgICAgICBsZXQgbGFzdFN0ZXAgPSBjdXJyZW50TGF5ZXIuc3RlcHNbY3VycmVudExheWVyLnN0ZXBzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgIGlmIChsYXN0U3RlcC50eXBlID09PSBTdGVwVHlwZS5NT1ZFKSB7XHJcbiAgICAgICAgICAgIC8vIGxldCB0cmFuc2xhdGVNYXQgPSBnbFV0aWwuY3JlYXRlVHJhbnNsYXRlTWF0cml4KGxhc3RTdGVwLm9mZnNldFgsIGxhc3RTdGVwLm9mZnNldFksIDApO1xyXG4gICAgICAgICAgICAvLyBsZXQgc2NhbGVNYXQgPSBnbFV0aWwuY3JlYXRlU2NhbGVNYXRyaXgobGFzdFN0ZXAuc2NhbGVYLCBsYXN0U3RlcC5zY2FsZVksIDEsIHt4OiBjZW50ZXJYLCB5OiBjZW50ZXJZLCB6OiAxfSk7XHJcbiAgICAgICAgICAgIC8vIGxldCByb3RhdGVNYXQgPSBnbFV0aWwuY3JlYXRlUm90YXRlTWF0cml4KHt4OiBjZW50ZXJYLCB5OiBjZW50ZXJZLCB6OiAxfSwgbGFzdFN0ZXAucm90YXRlKTtcclxuICAgICAgICAgICAgLy8gbGV0IG1hdCA9IGdsVXRpbC5tdWx0aXBseShzY2FsZU1hdCwgdHJhbnNsYXRlTWF0KTtcclxuICAgICAgICAgICAgeDEgPSAoeDEgLSBjZW50ZXJYKSAqIGxhc3RTdGVwLnNjYWxlWCArIGNlbnRlclggKyBsYXN0U3RlcC5vZmZzZXRYIC8gc3RvcmUuc3RhdGUuem9vbTtcclxuICAgICAgICAgICAgeDIgPSAoeDIgLSBjZW50ZXJYKSAqIGxhc3RTdGVwLnNjYWxlWCArIGNlbnRlclggKyBsYXN0U3RlcC5vZmZzZXRYIC8gc3RvcmUuc3RhdGUuem9vbTtcclxuICAgICAgICAgICAgeTEgPSAoeTEgLSBjZW50ZXJZKSAqIGxhc3RTdGVwLnNjYWxlWSArIGNlbnRlclkgLSBsYXN0U3RlcC5vZmZzZXRZIC8gc3RvcmUuc3RhdGUuem9vbTtcclxuICAgICAgICAgICAgeTIgPSAoeTIgLSBjZW50ZXJZKSAqIGxhc3RTdGVwLnNjYWxlWSArIGNlbnRlclkgLSBsYXN0U3RlcC5vZmZzZXRZIC8gc3RvcmUuc3RhdGUuem9vbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMucmVmLnN0eWxlLmxlZnQgPSB4MSArICdweCc7XHJcbiAgICAgICAgdGhpcy5yZWYuc3R5bGUudG9wID0geTEgKyAncHgnO1xyXG4gICAgICAgIHRoaXMucmVmLnN0eWxlLndpZHRoID0geDIgLSB4MSArICdweCc7XHJcbiAgICAgICAgdGhpcy5yZWYuc3R5bGUuaGVpZ2h0ID0geTIgLSB5MSArICdweCc7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcblxyXG59IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vdXRpbC9CYXNlJztcclxuaW1wb3J0IHV0aWwgZnJvbSAnLi4vdXRpbC91dGlsJztcclxuXHJcblxyXG5jbGFzcyBDb250ZXh0TWVudUl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IodGV4dCwgb25jbGljaykge1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcclxuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgIGNsYXNzTGlzdDogWydjb250ZXh0bWVudS1pdGVtJ10sXHJcbiAgICAgICAgICAgIHRleHQ6IHRleHRcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZWYgPSB1dGlsLmdlbmVyYXRlRE9NKHRlbXBsYXRlKS5yb290O1xyXG4gICAgICAgIHRoaXMucmVmLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBvbmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb250ZXh0TWVudSBleHRlbmRzIEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IgKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XHJcbiAgICAgICAgdGhpcy5yZWYgPSB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxyXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFsnY29udGV4dC1tZW51JywgJ2Fic29sdXRlJ10sXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcblxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGxldCBwcm9wIG9mIHRoaXMucHJvcHMpIHtcclxuICAgICAgICAgICAgbGV0IGNvbnRleHRNZW51SXRlbSA9IG5ldyBDb250ZXh0TWVudUl0ZW0ocHJvcC5uYW1lLCBwcm9wLmNhbGxiYWNrKVxyXG4gICAgICAgICAgICB0ZW1wbGF0ZS5jaGlsZHJlbi5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogY29udGV4dE1lbnVJdGVtXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgcm9vdCA9IHV0aWwuZ2VuZXJhdGVET00odGVtcGxhdGUpLnJvb3Q7XHJcblxyXG4gICAgICAgIHJldHVybiByb290O1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vdXRpbC9CYXNlJztcclxuaW1wb3J0IHV0aWwgZnJvbSAnLi4vdXRpbC91dGlsJztcclxuaW1wb3J0IENhbnZhcyBmcm9tICcuLi9jb21wb25lbnRzL0xheWVyJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcclxuaW1wb3J0IFN0ZXBUeXBlIGZyb20gJy4uL0VudW0vU3RlcFR5cGUnO1xyXG5pbXBvcnQgVG9vbFR5cGUgZnJvbSAnLi4vRW51bS9Ub29sVHlwZSc7XHJcbmltcG9ydCB7TW92ZVN0ZXB9IGZyb20gJy4uL0VudW0vU3RlcCc7XHJcbmltcG9ydCBCbGVuZE1vZGUgZnJvbSAnLi4vRW51bS9CbGVuZE1vZGUnO1xyXG5pbXBvcnQgT2ZmQ2FudmFzIGZyb20gJy4uL3dlYmdsL09mZkNhbnZhcyc7XHJcbmltcG9ydCBSZXNpemVCb3ggZnJvbSAnLi4vY29tcG9uZW50cy9SZXNpemVCb3gnO1xyXG5cclxuXHJcbmNsYXNzIERyYXdpbmdCb2FyZCBleHRlbmRzIEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnJlZiA9IHRoaXMucmVuZGVyKCk7XHJcbiAgICAgICAgdGhpcy5sYXllcnMgPSBbXTtcclxuICAgICAgICB0aGlzLm9mZkNhbnZhcyA9IG5ldyBPZmZDYW52YXMoMzAwLCAxNTApO1xyXG4gICAgICAgIHRoaXMucmVzaXplQm94ID0gbmV3IFJlc2l6ZUJveCh0aGlzLnJlZik7XHJcbiAgICAgICAgLy8gZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0aGlzLm9mZkNhbnZhcy5jYW52YXMpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xyXG4gICAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcclxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ2RyYXdpbmctYm9hcmQnLCAnYWJzb2x1dGUnLCAndmVydGljYWwtYWxpZ24nXSxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGxldCByb290ID0gdXRpbC5nZW5lcmF0ZURPTSh0ZW1wbGF0ZSkucm9vdDtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgbGV0IHN0YXJ0WCwgc3RhcnRZO1xyXG4gICAgICAgIGxldCBjdXJyZW50V2lkdGgsIGN1cnJlbnRIZWlnaHQ7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIG1vdXNlZG93bihlKSB7XHJcbiAgICAgICAgICAgIHN0YXJ0WCA9IGUuY2xpZW50WDtcclxuICAgICAgICAgICAgc3RhcnRZID0gZS5jbGllbnRZO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2V1cCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtb3VzZW1vdmUoZSkge1xyXG4gICAgICAgICAgICBsZXQgb2Zmc2V0WCA9IGUuY2xpZW50WCAtIHN0YXJ0WDtcclxuICAgICAgICAgICAgbGV0IG9mZnNldFkgPSBlLmNsaWVudFkgLSBzdGFydFk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsZXQgbGF5ZXJzID0gc3RvcmUuc3RhdGUuY3VycmVudExheWVyO1xyXG4gICAgICAgICAgICBpZiAoc3RvcmUuc3RhdGUuY3VycmVudFRvb2wgPT09IFRvb2xUeXBlLk1PVkUpIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGxheWVyIG9mIGxheWVycykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBsYXN0U3RlcCA9IGxheWVyLnN0ZXBzW2xheWVyLnN0ZXBzLmxlbmd0aCAtIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChsYXN0U3RlcCAmJiBsYXN0U3RlcC50eXBlID09PSBTdGVwVHlwZS5NT1ZFKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RTdGVwLm9mZnNldFggKz0gKGUubW92ZW1lbnRYICogc3RvcmUuc3RhdGUuem9vbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhc3RTdGVwLm9mZnNldFkgLT0gKGUubW92ZW1lbnRZICogc3RvcmUuc3RhdGUuem9vbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld1N0ZXAgPSBuZXcgTW92ZVN0ZXAoU3RlcFR5cGUuTU9WRSwgb2Zmc2V0WCwgb2Zmc2V0WSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxheWVyLnN0ZXBzLnB1c2gobmV3U3RlcCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudExheWVyID0gdGhhdC5sYXllcnMuZmluZChpdGVtID0+IGl0ZW0ubGF5ZXIgPT09IGxheWVyKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudENhbnZhcyA9IGN1cnJlbnRMYXllci5jYW52YXM7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudENhbnZhcy5yZW5kZXIoY3VycmVudExheWVyLmxheWVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhhdC5yZXNpemVCb3gudXBkYXRlUG9zaXRpb24obGF5ZXJzWzBdKTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG5cclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmdW5jdGlvbiBtb3VzZXVwKCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBtb3VzZW1vdmUpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2V1cCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJvb3QuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2Vkb3duKTtcclxuICAgICAgICByZXR1cm4gcm9vdDtcclxuICAgIH1cclxuXHJcbiAgICBhZGRDYW52YXMobGF5ZXIpIHtcclxuICAgICAgICBsZXQgd2lkdGggPSB+fihzdG9yZS5zdGF0ZS53aWR0aCAvIHN0b3JlLnN0YXRlLnpvb20pO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSB+fihzdG9yZS5zdGF0ZS5oZWlnaHQgLyBzdG9yZS5zdGF0ZS56b29tKTtcclxuICAgICAgICBsZXQgY2FudmFzO1xyXG4gICAgICAgIGlmIChzdG9yZS5zdGF0ZS53aWR0aCAmJiBzdG9yZS5zdGF0ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgY2FudmFzID0gbmV3IENhbnZhcyhzdG9yZS5zdGF0ZS53aWR0aCwgc3RvcmUuc3RhdGUuaGVpZ2h0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYW52YXMgPSBuZXcgQ2FudmFzKGxheWVyLndpZHRoLCBsYXllci5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYW52YXMucmVmLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xyXG4gICAgICAgIGNhbnZhcy5yZWYuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICBjYW52YXMubmFtZSA9IGxheWVyLm5hbWU7XHJcbiAgICAgICAgdGhpcy5sYXllcnMucHVzaCh7XHJcbiAgICAgICAgICAgIGxheWVyOiBsYXllcixcclxuICAgICAgICAgICAgY2FudmFzOiBjYW52YXNcclxuICAgICAgICB9KTtcclxuICAgICAgICBjYW52YXMucmVuZGVyKGxheWVyKTtcclxuICAgICAgICB0aGlzLnJlZi5hcHBlbmRDaGlsZChjYW52YXMucmVmKTtcclxuICAgIH1cclxuXHJcbiAgICBkZWxldGVDYW52YXMobGF5ZXIpIHtcclxuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmxheWVycy5maW5kSW5kZXgoaXRlbSA9PiBpdGVtLmxheWVyID09PSBsYXllcik7XHJcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcclxuICAgICAgICAgICAgbGV0IGRlbGV0ZWRDYW52YXMgPSB0aGlzLmxheWVycy5zcGxpY2UoaW5kZXgsIDEpWzBdO1xyXG4gICAgICAgICAgICBkZWxldGVkQ2FudmFzLmNhbnZhcy5yZW1vdmUoKTtcclxuICAgICAgICAgICAgZGVsZXRlZENhbnZhcy5jYW52YXMgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2Vab29tKHpvb20pIHtcclxuXHJcbiAgICAgICAgbGV0IHdpZHRoID0gfn4oc3RvcmUuc3RhdGUud2lkdGggLyB6b29tKTtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gfn4oc3RvcmUuc3RhdGUuaGVpZ2h0IC8gem9vbSk7XHJcbiAgICAgICAgdGhpcy5vZmZDYW52YXMuY2hhbmdlWm9vbShzdG9yZS5zdGF0ZS53aWR0aCwgc3RvcmUuc3RhdGUuaGVpZ2h0KTtcclxuICAgICAgICB0aGlzLnJlZi5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcclxuICAgICAgICB0aGlzLnJlZi5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnXHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxheWVyLmNhbnZhcy5yZWYuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIGxheWVyLmNhbnZhcy5yZWYuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGxheWVyKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLmxheWVycy5maW5kKGl0ZW0gPT4gaXRlbS5sYXllciA9PT0gbGF5ZXIpO1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGxldCBjYW52YXMgPSBpdGVtLmNhbnZhcztcclxuICAgICAgICAgICAgY2FudmFzLnJlbmRlcihsYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBsb2FkSW1hZ2Uoc3JjKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgbGV0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIGltYWdlLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1hZ2UpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICBzaG93UmVzaXplQm94KGxheWVyKSB7XHJcbiAgICAgICAgdGhpcy5yZXNpemVCb3guc2hvdyhsYXllcik7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGFzeW5jIHNhdmVQaWN0dXJlKCkge1xyXG4gICAgICAgIGxldCBpbWFnZXMgPSBbXTtcclxuICAgICAgICBmb3IgKGxldCBsYXllciBvZiB0aGlzLmxheWVycykge1xyXG4gICAgICAgICAgICBsZXQgY2FudmFzID0gbGF5ZXIuY2FudmFzO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FudmFzLnJlbmRlcihsYXllci5sYXllcik7XHJcbiAgICAgICAgICAgIGxldCBpbWFnZSA9IGF3YWl0IHRoaXMubG9hZEltYWdlKGNhbnZhcy5yZWYudG9EYXRhVVJMKCkpO1xyXG4gICAgICAgICAgICBpbWFnZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0dXJlOiBpbWFnZSxcclxuICAgICAgICAgICAgICAgIG1vZGU6IEJsZW5kTW9kZS5OT1JNQUxcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5vZmZDYW52YXMuYmxlbmRJbWFnZXMoaW1hZ2VzKTtcclxuICAgICAgICBsZXQgc3JjID0gdGhpcy5vZmZDYW52YXMuY2FudmFzLnRvRGF0YVVSTCgpO1xyXG4gICAgICAgIHV0aWwuZG93bmxvYWRCYXNlNjQoc3JjLCAndGVzdC5wbmcnKTtcclxuICAgICAgICB0aGlzLm9mZkNhbnZhcy5ibGVuZENvbXBsZXRlKCk7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXRpbC5nZXRTaW5nbGV0b24oRHJhd2luZ0JvYXJkKTsiLCJpbXBvcnQgQmFzZSBmcm9tICcuLi91dGlsL0Jhc2UnO1xyXG5pbXBvcnQgdXRpbCBmcm9tICcuLi91dGlsL3V0aWwnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb250YWluZXIvTWVudSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQmFzZXtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIGxldCBtZW51ID0gbmV3IE1lbnUoKTtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxyXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFsnaGVhZGVyJ10sXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBtZW51XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5yZWYgPSB1dGlsLmdlbmVyYXRlRE9NKHRlbXBsYXRlKS5yb290O1xyXG4gICAgICAgIFxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCBCYXNlIGZyb20gJy4uL3V0aWwvQmFzZSc7XHJcbmltcG9ydCBMYXllckluZm8gZnJvbSAnLi4vY29tcG9uZW50cy9MYXllckluZm8nO1xyXG5pbXBvcnQgdXRpbCBmcm9tICcuLi91dGlsL3V0aWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mbyBleHRlbmRzIEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnJlZiA9IHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCBsYXllckluZm8gPSBuZXcgTGF5ZXJJbmZvKCk7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xyXG4gICAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcclxuICAgICAgICAgICAgY2xhc3NMaXN0OiAnaW5mbycsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBsYXllckluZm9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdXRpbC5nZW5lcmF0ZURPTSh0ZW1wbGF0ZSkucm9vdDtcclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlIGZyb20gJy4uL3V0aWwvQmFzZSc7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWwvdXRpbCc7XHJcbmltcG9ydCBEcmF3aW5nQm9hcmQgZnJvbSAnLi9EcmF3aW5nQm9hcmQnO1xyXG5pbXBvcnQgRmlsZU1lbnUgZnJvbSAnLi4vY29tcG9uZW50cy9GaWxlTWVudSc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpbiBleHRlbmRzIEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZWYgPSB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgZHJhd2luZ0JvYXJkID0gbmV3IERyYXdpbmdCb2FyZCgpO1xyXG4gICAgICAgIHdpbmRvdy5kcmF3aW5nQm9hcmQgPSBkcmF3aW5nQm9hcmQ7XHJcbiAgICAgICAgbGV0IGZpbGVNZW51ID0gbmV3IEZpbGVNZW51KCk7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xyXG4gICAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcclxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ21haW4nXSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGRyYXdpbmdCb2FyZFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxldCByb290ID0gdXRpbC5nZW5lcmF0ZURPTSh0ZW1wbGF0ZSkucm9vdDtcclxuXHJcblxyXG4gICAgICAgIHJvb3Qub25kcmFnb3ZlciA9IGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9ICAgXHJcblxyXG4gICAgICAgIHJvb3Qub25kcm9wID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBmaWxlTWVudS5vcGVuRmlsZXMoZS5kYXRhVHJhbnNmZXIuZmlsZXMpO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcm9vdDtcclxuICAgICAgICBcclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlIGZyb20gJy4uL3V0aWwvQmFzZSc7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWwvdXRpbCc7XHJcbmltcG9ydCBGaWxlTWVudSBmcm9tICcuLi9jb21wb25lbnRzL0ZpbGVNZW51JztcclxuXHJcbmNsYXNzIEl0ZW0ge1xyXG4gICAgY29uc3RydWN0b3IodGV4dCwgb25jbGljaykge1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcclxuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgIGNsYXNzTGlzdDogWydtZW51LWl0ZW0nXSxcclxuICAgICAgICAgICAgdGV4dDogdGV4dFxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZiA9IHV0aWwuZ2VuZXJhdGVET00odGVtcGxhdGUpLnJvb3Q7XHJcbiAgICAgICAgdGhpcy5yZWYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBvbmNsaWNrKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWVudSBleHRlbmRzIEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IocHJvcHMsIGNsYXNzTmFtZSkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xyXG4gICAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcclxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ21lbnUnXSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsnZmlsZS1tZW51J10sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsnbWVudS10aXRsZSddLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+aWh+S7ticsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWY6ICd0aXRsZSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBuZXcgRmlsZU1lbnUoKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZjogJ2Ryb3BMaXN0J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQge3Jvb3QsIHRpdGxlLCBkcm9wTGlzdH0gPSB1dGlsLmdlbmVyYXRlRE9NKHRlbXBsYXRlKTtcclxuICAgICAgICB0aGlzLnJlZiA9IHJvb3Q7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRpdGxlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoYXQudG9nZ2xlLmNhbGwoZHJvcExpc3QpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRyb3BMaXN0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoYXQudG9nZ2xlLmNhbGwoZHJvcExpc3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlIGZyb20gJy4uL3V0aWwvQmFzZSc7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWwvdXRpbCc7XHJcbmltcG9ydCBUT09MVFlQRSBmcm9tICcuLi9FbnVtL1Rvb2xUeXBlJztcclxuaW1wb3J0IHtBY3Rpb25UeXBlLCBjaGFuZ2VUb29sfSBmcm9tICcuLi9zdG9yZS9hY3Rpb24nO1xyXG5pbXBvcnQgc3RvcmUgZnJvbSAnLi4vc3RvcmUvaW5kZXgnO1xyXG5cclxubGV0IHRvb2xzID0gW107XHJcbmNsYXNzIFRvb2xib3hJY29uIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xyXG4gICAgICAgIHRoaXMucmVmID0gdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmlzQWN0aXZlID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcclxuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgIGNsYXNzTGlzdDogWyd0b29sYm94LWljb24nLCB0aGlzLnByb3BzLmNsYXNzTmFtZV0sXHJcbiAgICAgICAgICAgIHRleHQ6ICdtb3ZlJ1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgcm9vdCA9IHV0aWwuZ2VuZXJhdGVET00odGVtcGxhdGUpLnJvb3Q7XHJcbiAgICAgICAgaWYgKHRoaXMucHJvcHMub25DbGljaykge1xyXG4gICAgICAgICAgICByb290LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5wcm9wcy5vbkNsaWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJvb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgYWN0aXZlKCkge1xyXG4gICAgICAgIHRoaXMuaXNBY3RpdmUgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMucmVmLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG5cclxuICAgIGRpc2FibGUoKSB7XHJcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMucmVmLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIE1vdmUgZXh0ZW5kcyBUb29sYm94SWNvbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcih7XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZTogJ3Rvb2xib3gtbW92ZScsXHJcbiAgICAgICAgICAgIG9uQ2xpY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHRvb2xzLmZvckVhY2goaXRlbSA9PiBpdGVtLmRpc2FibGUoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGF0LmFjdGl2ZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgfVxyXG5cclxuICAgIGFjdGl2ZSgpIHtcclxuICAgICAgICBzdXBlci5hY3RpdmUoKTtcclxuICAgICAgICBzdG9yZS5kaXNwYXRjaChjaGFuZ2VUb29sKFRPT0xUWVBFLk1PVkUpKTtcclxuXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb29sYm94IGV4dGVuZHMgQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucmVmID0gdGhpcy5yZW5kZXIoKTtcclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgbW92ZSA9IG5ldyBNb3ZlKCk7XHJcbiAgICAgICAgdG9vbHMucHVzaChtb3ZlKTtcclxuICAgICAgICBtb3ZlLmFjdGl2ZSgpO1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcclxuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgIGNsYXNzTGlzdDogWyd0b29sYm94JywgJ2Fic29sdXRlJ10sXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWyd0b29sYm94LWNhcHRpb24nXSxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAn5bel5YW35qCPJ1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsndG9vbGJveC1ib2R5J10sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogbW92ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1dXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHV0aWwuZ2VuZXJhdGVET00odGVtcGxhdGUpLnJvb3Q7XHJcbiAgICB9XHJcbn0iLCJ2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9sZXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmxlc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwiXHJcbmV4cG9ydCBjb25zdCBBY3Rpb25UeXBlID0ge1xyXG4gICAgT1BFTl9GSUxFOiAwLFxyXG4gICAgQ0hBTkdFX1pPT006IDEsXHJcbiAgICBDSEFOR0VfVE9PTDogMixcclxuICAgIENIQU5HRV9MQVlFUjogMyxcclxuICAgIERFTEVURV9MQVlFUjogNCxcclxuICAgIFNBVkVfUElDVFVSRTogNSxcclxuICAgIFRSQU5TRk9STV9MQVlFUjogNixcclxuICAgIERSQVdfTEFZRVI6IDdcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG9wZW5GaWxlKGxheWVyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuT1BFTl9GSUxFLFxyXG4gICAgICAgIHBheWxvYWQ6IGxheWVyXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2Vab29tKHpvb20pIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5DSEFOR0VfWk9PTSxcclxuICAgICAgICBwYXlsb2FkOiB6b29tXHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VUb29sKHRvb2xUeXBlKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuQ0hBTkdFX1RPT0wsXHJcbiAgICAgICAgcGF5bG9hZDogdG9vbFR5cGVcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZUxheWVyKGxheWVyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuQ0hBTkdFX0xBWUVSLFxyXG4gICAgICAgIHBheWxvYWQ6IGxheWVyXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlTGF5ZXIobGF5ZXIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5ERUxFVEVfTEFZRVIsXHJcbiAgICAgICAgcGF5bG9hZDogbGF5ZXJcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2Zvcm1MYXllcihsYXllcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLlRSQU5TRk9STV9MQVlFUixcclxuICAgICAgICBwYXlsb2FkOiBsYXllclxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZHJhd0xheWVyKGxheWVyKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuRFJBV19MQVlFUixcclxuICAgICAgICBwYXlsb2FkOiBsYXllclxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVQaWN0dXJlKCkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLlNBVkVfUElDVFVSRVxyXG4gICAgfVxyXG59IiwiaW1wb3J0IHN0YXRlIGZyb20gJy4vc3RhdGUnO1xyXG5pbXBvcnQgcmVkdWNlciBmcm9tICcuL3JlZHVjZXInO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlU3RvcmUgKHN0YXRlLCByZWR1Y2VyKSB7XHJcbiAgICBmdW5jdGlvbiBkaXNwYXRjaChhY3Rpb24pIHtcclxuICAgICAgICByZWR1Y2VyKHN0YXRlLCBhY3Rpb24pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBzdGF0ZSxcclxuICAgICAgICBkaXNwYXRjaFxyXG4gICAgfTtcclxufVxyXG5cclxuY29uc3Qgc3RvcmUgPSBjcmVhdGVTdG9yZShzdGF0ZSwgcmVkdWNlcik7XHJcbndpbmRvdy5zdG9yZSA9IHN0b3JlO1xyXG5leHBvcnQgZGVmYXVsdCBzdG9yZTsiLCJpbXBvcnQge0FjdGlvblR5cGUsIG9wZW5GaWxlfWZyb20gJy4vYWN0aW9uJ1xyXG5pbXBvcnQgRHJhd2luZ0JvYXJkIGZyb20gJy4uL2NvbnRhaW5lci9EcmF3aW5nQm9hcmQnO1xyXG5pbXBvcnQgTGF5ZXJJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5ZXJJbmZvJztcclxuaW1wb3J0IFRPT0xUWVBFIGZyb20gJy4uL0VudW0vVG9vbFR5cGUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIGxldCBkcmF3aW5nQm9hcmQgPSBuZXcgRHJhd2luZ0JvYXJkKCk7XHJcbiAgICBsZXQgbGF5ZXJJbmZvID0gbmV3IExheWVySW5mbygpO1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25UeXBlLk9QRU5fRklMRTpcclxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5sYXllcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS53aWR0aCA9IGFjdGlvbi5wYXlsb2FkLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuaGVpZ2h0ID0gYWN0aW9uLnBheWxvYWQuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc3R5bGUgPSB7fTtcclxuICAgICAgICAgICAgc3R5bGUucG9zaXRpb25feDEgPSAoc3RhdGUud2lkdGggLSBhY3Rpb24ucGF5bG9hZC53aWR0aCkgLyAyIC8gc3RhdGUud2lkdGg7XHJcbiAgICAgICAgICAgIHN0eWxlLnBvc2l0aW9uX3gyID0gc3R5bGUucG9zaXRpb25feDEgKyAoYWN0aW9uLnBheWxvYWQud2lkdGgpIC8gc3RhdGUud2lkdGg7XHJcbiAgICAgICAgICAgIHN0eWxlLnBvc2l0aW9uX3kxID0gKHN0YXRlLmhlaWdodCAtIGFjdGlvbi5wYXlsb2FkLmhlaWdodCkgLyAyIC8gc3RhdGUuaGVpZ2h0O1xyXG4gICAgICAgICAgICBzdHlsZS5wb3NpdGlvbl95MiA9IHN0eWxlLnBvc2l0aW9uX3kxICsgKGFjdGlvbi5wYXlsb2FkLmhlaWdodCkgLyBzdGF0ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGxldCBib3VuZGFyeSA9IHt9O1xyXG4gICAgICAgICAgICBib3VuZGFyeS5taW5YID0gc3R5bGUucG9zaXRpb25feDE7XHJcbiAgICAgICAgICAgIGJvdW5kYXJ5Lm1pblkgPSBzdHlsZS5wb3NpdGlvbl95MTtcclxuICAgICAgICAgICAgYm91bmRhcnkubWF4WCA9IHN0eWxlLnBvc2l0aW9uX3gyO1xyXG4gICAgICAgICAgICBib3VuZGFyeS5tYXhZID0gc3R5bGUucG9zaXRpb25feTI7XHJcbiAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLnN0eWxlID0gc3R5bGU7XHJcbiAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmJvdW5kYXJ5ID0gYm91bmRhcnk7XHJcbiAgICAgICAgICAgIHN0YXRlLmxheWVycy5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgc3RhdGUuY3VycmVudExheWVyID0gW2FjdGlvbi5wYXlsb2FkXTtcclxuICAgICAgICAgICAgZHJhd2luZ0JvYXJkLmFkZENhbnZhcyhhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGxheWVySW5mby5hZGRMYXllcihhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZS5DSEFOR0VfWk9PTTpcclxuICAgICAgICAgICAgc3RhdGUuem9vbSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBkcmF3aW5nQm9hcmQuY2hhbmdlWm9vbShhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZS5DSEFOR0VfVE9PTDpcclxuICAgICAgICAgICAgc3RhdGUuY3VycmVudFRvb2wgPSBUT09MVFlQRS5NT1ZFO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFjdGlvblR5cGUuQ0hBTkdFX0xBWUVSOlxyXG4gICAgICAgICAgICBzdGF0ZS5jdXJyZW50TGF5ZXIgPSBbYWN0aW9uLnBheWxvYWRdO1xyXG4gICAgICAgICAgICBsYXllckluZm8uY2hhbmdlTGF5ZXIoYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFjdGlvblR5cGUuREVMRVRFX0xBWUVSOlxyXG4gICAgICAgICAgICBsZXQgaW5kZXggPSBzdGF0ZS5sYXllcnMuaW5kZXhPZihhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS5sYXllcnMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgICAgIHN0YXRlLmN1cnJlbnRMYXllciA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZHJhd2luZ0JvYXJkLmRlbGV0ZUNhbnZhcyhhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgICAgICBsYXllckluZm8uZGVsZXRlTGF5ZXIoYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRlbGV0ZWRMYXllciA9IHN0YXRlLmN1cnJlbnRMYXllclswXTtcclxuICAgICAgICAgICAgICAgIGluZGV4ID0gc3RhdGUubGF5ZXJzLmluZGV4T2YoZGVsZXRlZExheWVyKTtcclxuICAgICAgICAgICAgICAgIGlmIChpbmRleCA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUubGF5ZXJzLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUuY3VycmVudExheWVyID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgZHJhd2luZ0JvYXJkLmRlbGV0ZUNhbnZhcyhkZWxldGVkTGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxheWVySW5mby5kZWxldGVMYXllcihkZWxldGVkTGF5ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZS5TQVZFX1BJQ1RVUkU6XHJcbiAgICAgICAgICAgIGRyYXdpbmdCb2FyZC5zYXZlUGljdHVyZSgpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFjdGlvblR5cGUuVFJBTlNGT1JNX0xBWUVSOlxyXG4gICAgICAgICAgICBkcmF3aW5nQm9hcmQuc2hvd1Jlc2l6ZUJveChzdGF0ZS5jdXJyZW50TGF5ZXJbMF0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIEFjdGlvblR5cGUuRFJBV19MQVlFUjpcclxuICAgICAgICAgICAgZHJhd2luZ0JvYXJkLmRyYXcoYWN0aW9uLnBheWxvYWQpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICBcclxuICAgIH1cclxufSIsImV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGxheWVyczogW10sXHJcbiAgICB3aWR0aDogMCxcclxuICAgIGhlaWdodDogMCxcclxuICAgIHpvb206IDEsXHJcbiAgICBjdXJyZW50VG9vbDogbnVsbCxcclxuICAgIGN1cnJlbnRMYXllcjogW11cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0ID0gW107XHJcbiAgICB9XHJcblxyXG4gICAgb24obmFtZSwgZm4pIHtcclxuICAgICAgICBpZiAoIXRoaXMuZXZlbnRMaXN0W25hbWVdKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZXZlbnRMaXN0W25hbWVdID0gW107XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZXZlbnRMaXN0W25hbWVdLnB1c2goZm4pO1xyXG4gICAgfVxyXG5cclxuICAgIG9mZihuYW1lLCBmbikge1xyXG4gICAgICAgIGxldCBhcnIgPSB0aGlzLmV2ZW50TGlzdFtuYW1lXTtcclxuICAgICAgICBpZiAoIWFycikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4obmFtZSArICcgaXMgbm90IGV4aXN0Jyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IGluZGV4ID0gYXJyLmluZGV4T2YoZm4pO1xyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIGFyci5zcGxpY2UoaW5kZXgsIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkaXNwYXRjaCgpIHtcclxuICAgICAgICBsZXQgbmFtZSA9IEFycmF5LnByb3RvdHlwZS5zaGlmdC5jYWxsKGFyZ3VtZW50cyk7XHJcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuZXZlbnRMaXN0W25hbWVdO1xyXG4gICAgICAgIGlmICghYXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihuYW1lICsgJyBpcyBub3QgZXhpc3QnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBmbiBvZiBhcnIpIHtcclxuICAgICAgICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmVjMiB7XHJcbiAgICBjb25zdHJ1Y3Rvcih4LCB5KSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMubSA9IE1hdGguc3FydCh0aGlzLnggKiogMiArIHRoaXMueSAqKiAyKTtcclxuICAgICAgICB0aGlzLmFuZ2xlID0gTWF0aC5hdGFuMih5LCB4KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFxyXG4gICAgICogQHBhcmFtIHtWZWMyfSB2ZWMgXHJcbiAgICAgKi9cclxuICAgIGRvdCh2ZWMpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy54ICogdmVjLnggKyB0aGlzLnkgKyB2ZWMueTtcclxuICAgIH1cclxuXHJcbiAgICBzdWIodmVjKSB7XHJcbiAgICAgICAgdGhpcy54IC09IHZlYy54O1xyXG4gICAgICAgIHRoaXMueSAtPSB2ZWMueTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQodmVjKSB7XHJcbiAgICAgICAgdGhpcy54ICs9IHZlYy54O1xyXG4gICAgICAgIHRoaXMueSArPSB2ZWMueTtcclxuICAgIH1cclxufSIsImZ1bmN0aW9uIGdlbmVyYXRlRE9NKHQpIHtcclxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodGFnTmFtZSwgaXNTVkcsIGNsYXNzTGlzdCwgdGV4dCwgdGl0bGUsIGF0dHJpYnV0ZXMpIHtcclxuICAgICAgICBsZXQgZG9jO1xyXG4gICAgICAgIGlmIChpc1NWRykge1xyXG4gICAgICAgICAgICBkb2MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgdGFnTmFtZSk7XHJcbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzKSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrZXkgaW4gYXR0cmlidXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvYy5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZG9jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChjbGFzc0xpc3QpIHtcclxuXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2xhc3NMaXN0ID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICAgICAgZG9jLmNsYXNzTGlzdC5hZGQoY2xhc3NMaXN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGNsYXNzTmFtZSBvZiBjbGFzc0xpc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBkb2MuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGV4dCkge1xyXG4gICAgICAgICAgICBkb2MudGV4dENvbnRlbnQgPSB0ZXh0O1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIGlmICh0aXRsZSkge1xyXG4gICAgICAgICAgICBkb2MudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkb2M7XHJcbiAgICB9XHJcbiAgICBsZXQgcXVldWUgPSBbXTtcclxuICAgIGxldCBwYXJlbnRET007XHJcbiAgICBxdWV1ZS5wdXNoKHtcclxuICAgICAgICBwYXJlbnRET006IG51bGwsXHJcbiAgICAgICAgdGVtcGxhdGU6IHRcclxuICAgIH0pO1xyXG4gICAgbGV0IHJlZnMgPSB7fTtcclxuICAgIGxldCBpc1NWRyA9IGZhbHNlO1xyXG4gICAgaWYgKHQudGFnTmFtZSA9PT0gJ3N2ZycpIHtcclxuICAgICAgICBpc1NWRyA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB3aGlsZSAocXVldWUubGVuZ3RoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnQgPSBxdWV1ZS5zaGlmdCgpO1xyXG4gICAgICAgIGxldCBkb207XHJcbiAgICAgICAgaWYgKGN1cnJlbnQudGVtcGxhdGUuY29tcG9uZW50KSB7XHJcbiAgICAgICAgICAgIGRvbSA9IGN1cnJlbnQudGVtcGxhdGUuY29tcG9uZW50LnJlZjtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQudGVtcGxhdGUucmVmKSB7XHJcbiAgICAgICAgICAgICAgICByZWZzW2N1cnJlbnQudGVtcGxhdGUucmVmXSA9IGRvbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvbSA9IGNyZWF0ZUVsZW1lbnQoY3VycmVudC50ZW1wbGF0ZS50YWdOYW1lLCBpc1NWRywgY3VycmVudC50ZW1wbGF0ZS5jbGFzc0xpc3QsIGN1cnJlbnQudGVtcGxhdGUudGV4dCwgY3VycmVudC50ZW1wbGF0ZS50aXRsZSwgY3VycmVudC50ZW1wbGF0ZS5hdHRyaWJ1dGVzKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQudGVtcGxhdGUucmVmKSB7XHJcbiAgICAgICAgICAgICAgICByZWZzW2N1cnJlbnQudGVtcGxhdGUucmVmXSA9IGRvbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnQucGFyZW50RE9NKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQucGFyZW50RE9NLmFwcGVuZENoaWxkKGRvbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFyZW50RE9NID0gZG9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudC50ZW1wbGF0ZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjdXJyZW50LnRlbXBsYXRlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRET006IGRvbSxcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogY2hpbGRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmVmcyA9IHtcclxuICAgICAgICAuLi5yZWZzLFxyXG4gICAgICAgIHJvb3Q6IHBhcmVudERPTVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlZnM7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRTaW5nbGV0b24oZm4pIHtcclxuICAgIGxldCByZXQ7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgIGlmIChyZXQpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHJldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHJldCA9IG5ldyBmbihhcmd1bWVudHMpO1xyXG4gICAgfVxyXG59XHJcblxyXG5cclxuY29uc3QgZ2VuZXJhdGVTdGFtcCA9IChmdW5jdGlvbiAoKSB7XHJcbiAgICBsZXQgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBsZXQgY2FjaGVXaWR0aCwgY2FjaGVIZWlnaHQ7XHJcbiAgICBsZXQgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpbWFnZSwgd2lkdGggPSA4MCwgaGVpZ2h0ID0gNTApIHtcclxuICAgICAgICBpZiAod2lkdGggIT09IGNhY2hlV2lkdGggfHwgaGVpZ2h0ICE9PSBjYWNoZUhlaWdodCkge1xyXG4gICAgICAgICAgICBjYWNoZVdpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgICAgIGNhY2hlSGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSBjYWNoZVdpZHRoO1xyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gY2FjaGVIZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgpO1xyXG5cclxuICAgIH1cclxufSgpKTtcclxuXHJcblxyXG5mdW5jdGlvbiBkZWxldGVQb3N0Zml4KGZpbGVuYW1lKSB7XHJcbiAgICBsZXQgYXJyID0gZmlsZW5hbWUuc3BsaXQoJy4nKTtcclxuICAgIHJldHVybiBhcnJbMF07XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBkb3dubG9hZEJhc2U2NChzcmMsIHRpdGxlKSB7XHJcbiAgICBsZXQgYmluU3RyID0gYXRvYihzcmMuc3BsaXQoJywnKVsxXSksXHJcbiAgICAgICAgbGVuID0gYmluU3RyLmxlbmd0aCxcclxuICAgICAgICBhcnIgPSBuZXcgVWludDhBcnJheShsZW4pO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcclxuICAgICAgICBhcnJbaV0gPSBiaW5TdHIuY2hhckNvZGVBdChpKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgYmxvYiA9IG5ldyBCbG9iKFthcnJdKTtcclxuXHJcbiAgICBsZXQgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgIGEuZG93bmxvYWQgPSB0aXRsZTtcclxuICAgIGEuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICBhLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgVVJMLnJldm9rZU9iamVjdFVSTChhLmhyZWYpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgICBhLmNsaWNrKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGdlbmVyYXRlRE9NLFxyXG4gICAgZ2V0U2luZ2xldG9uLFxyXG4gICAgZ2VuZXJhdGVTdGFtcCxcclxuICAgIGRlbGV0ZVBvc3RmaXgsXHJcbiAgICBkb3dubG9hZEJhc2U2NFxyXG59IiwiaW1wb3J0IFJlbmRlckNvbnRleHQgZnJvbSBcIi4vV2ViR0xcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9mZkNhbnZhcyB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5yZW5kZXJDb250ZXh0ID0gbmV3IFJlbmRlckNvbnRleHQoY2FudmFzKTtcclxuICAgICAgICB0aGlzLmNhbnZhcyA9IGNhbnZhcztcclxuICAgICAgICBcclxuICAgIH1cclxuXHJcbiAgICBibGVuZEltYWdlcyhpbWFnZXMpIHtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbnRleHQuYmxlbmRMYXllcnMoaW1hZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFuZ2Vab29tKHdpZHRoLCBoZWlnaHQpIHtcclxuICAgICAgICB0aGlzLmNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbnRleHQudmlld3BvcnQoMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICB9XHJcblxyXG4gICAgYmxlbmRDb21wbGV0ZSgpIHtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbnRleHQuZGVzdHJveUJsZW5kTGF5ZXJzKCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTm9ybWFsRmlsdGVyIGZyb20gJy4vZmlsdGVyL05vcm1hbCc7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4vdXRpbCc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XHJcbmltcG9ydCBTdGVwVHlwZSBmcm9tICcuLi9FbnVtL1N0ZXBUeXBlJztcclxuaW1wb3J0IEJsZW5kRmlsdGVyIGZyb20gJy4vZmlsdGVyL0JsZW5kJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZW5kZXJDb250ZXh0IHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge0hUTUxDYW52YXNFbGVtZW50fSBjYW52YXMgXHJcbiAgICAgKi9cclxuICAgIGNvbnN0cnVjdG9yKGNhbnZhcykge1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIEB0eXBlIHtXZWJHTDJSZW5kZXJpbmdDb250ZXh0IHwgV2ViR0xSZW5kZXJpbmdDb250ZXh0fVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGxldCBnbCA9IGNhbnZhcy5nZXRDb250ZXh0KCd3ZWJnbDInLCB7XHJcbiAgICAgICAgICAgIHByZW11bHRpcGxpZWRBbHBoYTogZmFsc2VcclxuICAgICAgICB9KTtcclxuICAgICAgICBpZiAoIWdsKSB7XHJcbiAgICAgICAgICAgIGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsJywge1xyXG4gICAgICAgICAgICAgICAgcHJlbXVsdGlwbGllZEFscGhhOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFnbCkge1xyXG4gICAgICAgICAgICBhbGVydCgn5oKo55qE5pi+5Y2hL+a1j+iniOWZqOS4jeaUr+aMgVdFQkdM77yB5peg5rOV5L2/55So6K+l5bqU55So56iL5bqP77yBJyk7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IHN1cHBvcnQgd2ViZ2whJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCAxKTtcclxuICAgICAgICBnbC5jbGVhckNvbG9yKDAuMCwgMC4wLCAwLjAsIDAuMCk7XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIGxldCB3aWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgICAgICBsZXQgaGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICAgICAgbGV0IHBvaW50cyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgIHdpZHRoLCAwLjAsIDEuMCwgMC4wLFxyXG4gICAgICAgICAgICB3aWR0aCwgaGVpZ2h0LCAxLjAsIDEuMCxcclxuICAgICAgICAgICAgd2lkdGgsIGhlaWdodCwgMS4wLCAxLjAsXHJcbiAgICAgICAgICAgIDAuMCwgaGVpZ2h0LCAwLjAsIDEuMCxcclxuICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wXHJcbiAgICAgICAgXSk7XHJcblxyXG5cclxuICAgICAgICBsZXQgYnVmZmVyID0gZ2wuY3JlYXRlQnVmZmVyKCk7XHJcbiAgICAgICAgZ2wuYmluZEJ1ZmZlcihnbC5BUlJBWV9CVUZGRVIsIGJ1ZmZlcik7XHJcbiAgICAgICAgZ2wuYnVmZmVyRGF0YShnbC5BUlJBWV9CVUZGRVIsIHBvaW50cywgZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgICAgICBsZXQgcHJvamVjdGlvbk1hdCA9IHV0aWwuY3JlYXRlUHJvamVjdGlvbih3aWR0aCwgaGVpZ2h0LCAxKTtcclxuICAgICAgICBsZXQgZmlsdGVycyA9IHtcclxuICAgICAgICAgICAgbm9ybWFsOiBuZXcgTm9ybWFsRmlsdGVyKGdsLCBwcm9qZWN0aW9uTWF0KSxcclxuICAgICAgICAgICAgYmxlbmQ6IG5ldyBCbGVuZEZpbHRlcihnbCwgcHJvamVjdGlvbk1hdCksXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3JpZ2luVGV4dHVyZSA9IHV0aWwuY3JlYXRlVGV4dHVyZShnbCk7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IGZpbHRlcnM7XHJcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xyXG4gICAgICAgIHRoaXMub3JpZ2luVGV4dHVyZSA9IG9yaWdpblRleHR1cmU7XHJcbiAgICAgICAgdGhpcy5jYWNoZWRJbWFnZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuYmxlbmRUZXh0dXJlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuYmxlbmRGcmFtZWJ1ZmZlcnMgPSBbXTtcclxuICAgICAgICB0aGlzLmJsZW5kVGFyZ2V0VGV4dHVyZSA9IHV0aWwuY3JlYXRlVGV4dHVyZSh0aGlzLmdsKTtcclxuXHJcbiAgICB9XHJcbiAgICByZW5kZXIobGF5ZXIpIHtcclxuICAgICAgICBsZXQgaW1hZ2VXaWR0aCA9IGxheWVyLndpZHRoO1xyXG4gICAgICAgIGxldCBpbWFnZUhlaWdodCA9IGxheWVyLmhlaWdodDtcclxuICAgICAgICBsZXQgb2Zmc2V0WCA9IChzdG9yZS5zdGF0ZS53aWR0aCAtIGltYWdlV2lkdGgpIC8gMjtcclxuICAgICAgICBsZXQgb2Zmc2V0WSA9IChzdG9yZS5zdGF0ZS5oZWlnaHQgLSBpbWFnZUhlaWdodCkgLyAyO1xyXG4gICAgICAgIGxldCBwb2ludHMgPSBbXHJcbiAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMCxcclxuICAgICAgICAgICAgaW1hZ2VXaWR0aCwgMC4wLCAxLjAsIDAuMCxcclxuICAgICAgICAgICAgaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQsIDEuMCwgMS4wLFxyXG4gICAgICAgICAgICBpbWFnZVdpZHRoLCBpbWFnZUhlaWdodCwgMS4wLCAxLjAsXHJcbiAgICAgICAgICAgIDAuMCwgaW1hZ2VIZWlnaHQsIDAuMCwgMS4wLFxyXG4gICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgXVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSArPSA0KSB7XHJcbiAgICAgICAgICAgIHBvaW50c1tpXSArPSBvZmZzZXRYO1xyXG4gICAgICAgICAgICBwb2ludHNbaSArIDFdICs9IG9mZnNldFk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBvaW50cyA9IG5ldyBGbG9hdDMyQXJyYXkocG9pbnRzKTtcclxuICAgICAgICB0aGlzLmdsLmNsZWFyKHRoaXMuZ2wuQ09MT1JfQlVGRkVSX0JJVCk7XHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuZmlsdGVycy5ub3JtYWwucHJvZ3JhbSk7XHJcbiAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBwb2ludHMsIHRoaXMuZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLm9yaWdpblRleHR1cmUpO1xyXG4gICAgICAgIGlmICghdGhpcy5jYWNoZWRJbWFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLmdsLnRleEltYWdlMkQodGhpcy5nbC5URVhUVVJFXzJELCAwLCB0aGlzLmdsLlJHQkEsIHRoaXMuZ2wuUkdCQSwgdGhpcy5nbC5VTlNJR05FRF9CWVRFLCBsYXllci5pbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IHN0ZXAgb2YgbGF5ZXIuc3RlcHMpIHtcclxuICAgICAgICAgICAgaWYgKHN0ZXAudHlwZSA9PT0gU3RlcFR5cGUuTU9WRSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJzLm5vcm1hbC5zZXRUcmFuc2xhdGUoc3RlcC5vZmZzZXRYLCBzdGVwLm9mZnNldFkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJzLm5vcm1hbC5zZXRSb3RhdGUoc3RlcC5yb3RhdGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5maWx0ZXJzLm5vcm1hbC5zZXRTY2FsZShzdGVwLnNjYWxlWCwgc3RlcC5zY2FsZVkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLmdsLmRyYXdBcnJheXModGhpcy5nbC5UUklBTkdMRVMsIDAsIDYpO1xyXG4gICAgICAgIHRoaXMuY2FjaGVkSW1hZ2UgPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBibGVuZExheWVycyhpbWFnZXMpIHtcclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5maWx0ZXJzLmJsZW5kLnByb2dyYW0pO1xyXG4gICAgICAgIC8vIGxldCB0ZXh0dXJlcyA9IFtdO1xyXG4gICAgICAgIC8vIGxldCBmcmFtZWJ1ZmZlcnMgPSBbXTtcclxuICAgICAgICB1dGlsLmNyZWF0ZUZyYW1lYnVmZmVyVGV4dHVyZSh0aGlzLmdsLCAyLCB0aGlzLmJsZW5kRnJhbWVidWZmZXJzLCB0aGlzLmJsZW5kVGV4dHVyZXMsIHRoaXMuZ2wuY2FudmFzLndpZHRoLCB0aGlzLmdsLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGxldCBjb3VudCA9IDA7XHJcbiAgICAgICAgbGV0IHRhcmdldEltYWdlO1xyXG4gICAgICAgIC8vIGxldCB0YXJnZXRUZXh0dXJlID0gdXRpbC5jcmVhdGVUZXh0dXJlKHRoaXMuZ2wpO1xyXG4gICAgICAgIGZvciAobGV0IGltYWdlIG9mIGltYWdlcykge1xyXG4gICAgICAgICAgICB0YXJnZXRJbWFnZSA9IGltYWdlLnRleHR1cmU7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wuYWN0aXZlVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkUyKTtcclxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kVGV4dHVyZSh0aGlzLmdsLlRFWFRVUkVfMkQsIHRoaXMuYmxlbmRUYXJnZXRUZXh0dXJlKTtcclxuICAgICAgICAgICAgdGhpcy5nbC50ZXhJbWFnZTJEKHRoaXMuZ2wuVEVYVFVSRV8yRCwgMCwgdGhpcy5nbC5SR0JBLCB0aGlzLmdsLlJHQkEsIHRoaXMuZ2wuVU5TSUdORURfQllURSwgdGFyZ2V0SW1hZ2UpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nbC5iaW5kRnJhbWVidWZmZXIodGhpcy5nbC5GUkFNRUJVRkZFUiwgdGhpcy5ibGVuZEZyYW1lYnVmZmVyc1tjb3VudCAlIDJdKTtcclxuICAgICAgICAgICAgdGhpcy5nbC5jbGVhcih0aGlzLmdsLkNPTE9SX0JVRkZFUl9CSVQpO1xyXG4gICAgICAgICAgICB0aGlzLmdsLmRyYXdBcnJheXModGhpcy5nbC5UUklBTkdMRVMsIDAsIDYpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nbC5hY3RpdmVUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRTEpO1xyXG4gICAgICAgICAgICB0aGlzLmdsLmJpbmRUZXh0dXJlKHRoaXMuZ2wuVEVYVFVSRV8yRCwgdGhpcy5ibGVuZFRleHR1cmVzW2NvdW50ICUgMl0pO1xyXG4gICAgICAgICAgICBjb3VudCsrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLmdsLmJpbmRGcmFtZWJ1ZmZlcih0aGlzLmdsLkZSQU1FQlVGRkVSLCBudWxsKTtcclxuICAgICAgICB0aGlzLmdsLmRyYXdBcnJheXModGhpcy5nbC5UUklBTkdMRVMsIDAsIDYpO1xyXG4gICAgfVxyXG5cclxuICAgIGRlc3Ryb3lCbGVuZExheWVycygpIHtcclxuICAgICAgICBmb3IgKGxldCB0ZXh0dXJlIG9mIHRoaXMuYmxlbmRUZXh0dXJlcykge1xyXG4gICAgICAgICAgICB0aGlzLmdsLmRlbGV0ZVRleHR1cmUodGV4dHVyZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGZyYW1lYnVmZmVyIG9mIHRoaXMuYmxlbmRGcmFtZWJ1ZmZlcnMpIHtcclxuICAgICAgICAgICAgdGhpcy5nbC5kZWxldGVGcmFtZWJ1ZmZlcihmcmFtZWJ1ZmZlcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMuZ2wuZGVsZXRlVGV4dHVyZSh0aGlzLmJsZW5kVGFyZ2V0VGV4dHVyZSk7XHJcbiAgICB9XHJcblxyXG4gICAgdmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgICAgIHRoaXMuZ2wudmlld3BvcnQoeCwgeSwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGxldCBwb2ludHMgPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wLFxyXG4gICAgICAgICAgICB3aWR0aCwgMC4wLCAxLjAsIDAuMCxcclxuICAgICAgICAgICAgd2lkdGgsIGhlaWdodCwgMS4wLCAxLjAsXHJcbiAgICAgICAgICAgIHdpZHRoLCBoZWlnaHQsIDEuMCwgMS4wLFxyXG4gICAgICAgICAgICAwLjAsIGhlaWdodCwgMC4wLCAxLjAsXHJcbiAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMFxyXG4gICAgICAgIF0pO1xyXG5cclxuXHJcbiAgICAgICAgbGV0IHByb2plY3Rpb25NYXQgPSB1dGlsLmNyZWF0ZVByb2plY3Rpb24od2lkdGgsIGhlaWdodCwgMSk7XHJcbiAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBwb2ludHMsIHRoaXMuZ2wuU1RBVElDX0RSQVcpO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBmaWx0ZXIgaW4gdGhpcy5maWx0ZXJzKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlsdGVyc1tmaWx0ZXJdLnZpZXdwb3J0KHByb2plY3Rpb25NYXQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgZ2xVdGlsIGZyb20gJy4uL3V0aWwnO1xyXG5pbXBvcnQgQmxlbmRNb2RlIGZyb20gJy4uLy4uL0VudW0vQmxlbmRNb2RlJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJsZW5kRmlsdGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge1dlYkdMMlJlbmRlcmluZ0NvbnRleHR8V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IgKGdsLCBwcm9qZWN0aW9uTWF0KSB7XHJcbiAgICAgICAgY29uc3QgdmVydGV4U2hhZGVyID0gYFxyXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0IGFfcG9zaXRpb247XHJcbiAgICAgICAgYXR0cmlidXRlIHZlYzIgYV90ZXhDb29yZDtcclxuICAgICAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgICAgICB1bmlmb3JtIG1hdDQgdV9wcm9qZWN0aW9uO1xyXG4gICAgICAgIHZvaWQgbWFpbiAoKSB7XHJcbiAgICAgICAgICAgIGdsX1Bvc2l0aW9uID0gdV9wcm9qZWN0aW9uICogYV9wb3NpdGlvbjtcclxuICAgICAgICAgICAgdl90ZXhDb29yZCA9IGFfdGV4Q29vcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gYFxyXG4gICAgICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVfc3JjX3RleHR1cmU7XHJcbiAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgdV9kc3RfdGV4dHVyZTtcclxuICAgICAgICB1bmlmb3JtIGZsb2F0IHVfYmxlbmRfdHlwZTtcclxuICAgICAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgICAgICB2b2lkIG1haW4gKCkge1xyXG4gICAgICAgICAgICB2ZWM0IHNyY19jb2xvciA9IHRleHR1cmUyRCh1X3NyY190ZXh0dXJlLCB2X3RleENvb3JkKTtcclxuICAgICAgICAgICAgdmVjNCBkc3RfY29sb3IgPSB0ZXh0dXJlMkQodV9kc3RfdGV4dHVyZSwgdl90ZXhDb29yZCk7XHJcbiAgICAgICAgICAgIGlmICh1X2JsZW5kX3R5cGUgPT0gMC4wKSB7XHJcbiAgICAgICAgICAgICAgICAvLyDmraPluLjmt7flkIjmqKHlvI9cclxuICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoZHN0X2NvbG9yLnJnYiAqIGRzdF9jb2xvci5hICsgc3JjX2NvbG9yLnJnYiAqICgxLjAgLSBkc3RfY29sb3IuYSksIHNyY19jb2xvci5hICsgZHN0X2NvbG9yLmEpO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHVfYmxlbmRfdHlwZSA9PSAxLjApIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGdsX0ZyYWdDb2xvciA9IHZlYzQoMC4wLCAxLjAsIDEuMCwgMS4wKTtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgbGV0IHByb2dyYW0gPSBnbFV0aWwuaW5pdFdlYkdMKGdsLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcclxuXHJcbiAgICAgICAgZ2wudXNlUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgICAgICBsZXQgYV9wb3NpdGlvbiA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICdhX3Bvc2l0aW9uJyk7XHJcbiAgICAgICAgbGV0IGFfdGV4Q29vcmQgPSBnbC5nZXRBdHRyaWJMb2NhdGlvbihwcm9ncmFtLCAnYV90ZXhDb29yZCcpO1xyXG5cclxuICAgICAgICBsZXQgdV9wcm9qZWN0aW9uID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd1X3Byb2plY3Rpb24nKTtcclxuICAgICAgICBnbC51bmlmb3JtTWF0cml4NGZ2KHVfcHJvamVjdGlvbiwgZmFsc2UsIHByb2plY3Rpb25NYXQpO1xyXG5cclxuICAgICAgICBcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhX3Bvc2l0aW9uKTtcclxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGFfcG9zaXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UICogNCwgMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYV90ZXhDb29yZCk7XHJcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihhX3RleENvb3JkLCAyLCBnbC5GTE9BVCwgZmFsc2UsIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIDQsIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIDIpO1xyXG5cclxuICAgICAgICBjb25zdCB1X3NyY190ZXh0dXJlID0gZ2wuZ2V0VW5pZm9ybUxvY2F0aW9uKHByb2dyYW0sICd1X3NyY190ZXh0dXJlJyk7XHJcbiAgICAgICAgZ2wudW5pZm9ybTFpKHVfc3JjX3RleHR1cmUsIDEpO1xyXG4gICAgICAgIGNvbnN0IHVfZHN0X3RleHR1cmUgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VfZHN0X3RleHR1cmUnKTtcclxuICAgICAgICBnbC51bmlmb3JtMWkodV9kc3RfdGV4dHVyZSwgMik7XHJcblxyXG5cclxuICAgICAgICBjb25zdCB1X2JsZW5kX3R5cGUgPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VfYmxlbmRfdHlwZScpO1xyXG4gICAgICAgIGdsLnVuaWZvcm0xZih1X2JsZW5kX3R5cGUsIDApO1xyXG4gICAgICAgIHRoaXMuYV9wb3NpdGlvbiA9IGFfcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy5wcm9ncmFtID0gcHJvZ3JhbTtcclxuICAgICAgICB0aGlzLnVfYmxlbmRfdHlwZSA9IHVfYmxlbmRfdHlwZTtcclxuICAgICAgICB0aGlzLnVfcHJvamVjdGlvbiA9IHVfcHJvamVjdGlvbjtcclxuICAgICAgICB0aGlzLmdsID0gZ2w7XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHNldEJsZW5kVHlwZSh0eXBlKSB7XHJcbiAgICAgICAgaWYgKHR5cGUgPT09IEJsZW5kTW9kZS5OT1JNQUwpIHtcclxuICAgICAgICAgICAgdHlwZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZ2wudW5pZm9ybTFmKHRoaXMudV9ibGVuZF90eXBlLCB0eXBlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBlbmFibGVWZXJ0ZXhBcnJheShzaXplLCBzdHJpZGUsIG9mZnNldCkge1xyXG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hX3Bvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5hX3Bvc2l0aW9uLCBzaXplLCB0aGlzLmdsLkZMT0FULCBmYWxzZSwgc3RyaWRlLCBvZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZpZXdwb3J0KHByb2plY3Rpb25NYXQpIHtcclxuICAgICAgICB0aGlzLmdsLnVzZVByb2dyYW0odGhpcy5wcm9ncmFtKTtcclxuICAgICAgICB0aGlzLmdsLnVuaWZvcm1NYXRyaXg0ZnYodGhpcy51X3Byb2plY3Rpb24sIGZhbHNlLCBwcm9qZWN0aW9uTWF0KTtcclxuICAgIH1cclxuXHJcbn0gIiwiaW1wb3J0IGdsVXRpbCBmcm9tICcuLi91dGlsJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOb3JtYWxGaWx0ZXIge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7V2ViR0wyUmVuZGVyaW5nQ29udGV4dHxXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsIFxyXG4gICAgICovXHJcbiAgICBjb25zdHJ1Y3RvciAoZ2wsIHByb2plY3Rpb25NYXQpIHtcclxuICAgICAgICBjb25zdCB2ZXJ0ZXhTaGFkZXIgPSBgXHJcbiAgICAgICAgYXR0cmlidXRlIHZlYzQgYV9wb3NpdGlvbjtcclxuICAgICAgICBhdHRyaWJ1dGUgdmVjMiBhX3RleENvb3JkO1xyXG4gICAgICAgIHZhcnlpbmcgdmVjMiB2X3RleENvb3JkO1xyXG4gICAgICAgIHVuaWZvcm0gbWF0NCB1X3Byb2plY3Rpb247XHJcbiAgICAgICAgdW5pZm9ybSBtYXQ0IHVfdHJhbnNsYXRlO1xyXG4gICAgICAgIHVuaWZvcm0gbWF0NCB1X3NjYWxlO1xyXG4gICAgICAgIHVuaWZvcm0gbWF0NCB1X3JvdGF0ZTtcclxuICAgICAgICB2b2lkIG1haW4gKCkge1xyXG4gICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHVfcHJvamVjdGlvbiAqIHVfdHJhbnNsYXRlICogdV9zY2FsZSAqIHVfcm90YXRlICogYV9wb3NpdGlvbjtcclxuICAgICAgICAgICAgdl90ZXhDb29yZCA9IGFfdGV4Q29vcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gYFxyXG4gICAgICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVfdGV4dHVyZTtcclxuICAgICAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgICAgICB2b2lkIG1haW4gKCkge1xyXG4gICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodV90ZXh0dXJlLCB2X3RleENvb3JkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYDtcclxuICAgICAgICBsZXQgcHJvZ3JhbSA9IGdsVXRpbC5pbml0V2ViR0woZ2wsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xyXG5cclxuICAgICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgIGxldCBhX3Bvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2FfcG9zaXRpb24nKTtcclxuICAgICAgICBsZXQgYV90ZXhDb29yZCA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICdhX3RleENvb3JkJyk7XHJcblxyXG4gICAgICAgIGxldCB1X3Byb2plY3Rpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VfcHJvamVjdGlvbicpO1xyXG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYodV9wcm9qZWN0aW9uLCBmYWxzZSwgcHJvamVjdGlvbk1hdCk7XHJcblxyXG4gICAgICAgIGxldCB1X3RyYW5zbGF0ZSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAndV90cmFuc2xhdGUnKTtcclxuICAgICAgICBsZXQgdV9zY2FsZSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAndV9zY2FsZScpO1xyXG4gICAgICAgIGxldCB1X3JvdGF0ZSA9IGdsLmdldFVuaWZvcm1Mb2NhdGlvbihwcm9ncmFtLCAndV9yb3RhdGUnKTtcclxuXHJcblxyXG4gICAgICAgIGxldCB0cmFuc2xhdGVNYXQgPSBnbFV0aWwuY3JlYXRlVHJhbnNsYXRlTWF0cml4KDAsIDAsIDApO1xyXG4gICAgICAgIGxldCBzY2FsZU1hdCA9IGdsVXRpbC5jcmVhdGVTY2FsZU1hdHJpeCgxLCAxLCAxLCB7eDogZ2wuY2FudmFzLndpZHRoIC8gMiwgeTogZ2wuY2FudmFzLmhlaWdodCAvIDIsIHo6IDF9KTtcclxuICAgICAgICBsZXQgcm90YXRlTWF0ID0gZ2xVdGlsLmNyZWF0ZVJvdGF0ZU1hdHJpeCh7eDogZ2wuY2FudmFzLndpZHRoIC8gMiwgeTogZ2wuY2FudmFzLmhlaWdodCAvIDJ9LCAwKTtcclxuXHJcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdih1X3RyYW5zbGF0ZSwgZmFsc2UsIHRyYW5zbGF0ZU1hdCk7XHJcbiAgICAgICAgZ2wudW5pZm9ybU1hdHJpeDRmdih1X3NjYWxlLCBmYWxzZSwgc2NhbGVNYXQpO1xyXG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYodV9yb3RhdGUsIGZhbHNlLCByb3RhdGVNYXQpO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGdsLmVuYWJsZVZlcnRleEF0dHJpYkFycmF5KGFfcG9zaXRpb24pO1xyXG4gICAgICAgIGdsLnZlcnRleEF0dHJpYlBvaW50ZXIoYV9wb3NpdGlvbiwgMiwgZ2wuRkxPQVQsIGZhbHNlLCBGbG9hdDMyQXJyYXkuQllURVNfUEVSX0VMRU1FTlQgKiA0LCAwKTtcclxuICAgICAgICBcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhX3RleENvb3JkKTtcclxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGFfdGV4Q29vcmQsIDIsIGdsLkZMT0FULCBmYWxzZSwgRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UICogNCwgRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UICogMik7XHJcblxyXG4gICAgICAgIHRoaXMuYV9wb3NpdGlvbiA9IGFfcG9zaXRpb247XHJcbiAgICAgICAgdGhpcy51X3RyYW5zbGF0ZSA9IHVfdHJhbnNsYXRlO1xyXG4gICAgICAgIHRoaXMudV9zY2FsZSA9IHVfc2NhbGU7XHJcbiAgICAgICAgdGhpcy51X3JvdGF0ZSA9IHVfcm90YXRlO1xyXG4gICAgICAgIHRoaXMudHJhbnNsYXRlTWF0ID0gdHJhbnNsYXRlTWF0O1xyXG4gICAgICAgIHRoaXMudV9wcm9qZWN0aW9uID0gdV9wcm9qZWN0aW9uO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XHJcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBlbmFibGVWZXJ0ZXhBcnJheShzaXplLCBzdHJpZGUsIG9mZnNldCkge1xyXG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hX3Bvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5hX3Bvc2l0aW9uLCBzaXplLCB0aGlzLmdsLkZMT0FULCBmYWxzZSwgc3RyaWRlLCBvZmZzZXQpO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBzZXRUcmFuc2xhdGUoeCwgeSkge1xyXG4gICAgICAgIGxldCB0cmFuc2xhdGVNYXQgPSBnbFV0aWwuY3JlYXRlVHJhbnNsYXRlTWF0cml4KHgsIHksIDApO1xyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDRmdih0aGlzLnVfdHJhbnNsYXRlLCBmYWxzZSwgdHJhbnNsYXRlTWF0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZXRSb3RhdGUoYW5nbGUsIGNlbnRlclggPSB0aGlzLmdsLmNhbnZhcy53aWR0aCAvIDIsIGNlbnRlclkgPSB0aGlzLmdsLmNhbnZhcy5oZWlnaHQgLyAyKSB7XHJcbiAgICAgICAgbGV0IHJvdGF0ZU1hdCA9IGdsVXRpbC5jcmVhdGVSb3RhdGVNYXRyaXgoe3g6IGNlbnRlclgsIHk6IGNlbnRlcll9LCBhbmdsZSk7XHJcbiAgICAgICAgdGhpcy5nbC51bmlmb3JtTWF0cml4NGZ2KHRoaXMudV9yb3RhdGUsIGZhbHNlLCByb3RhdGVNYXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFNjYWxlKHN4LCBzeSwgY2VudGVyWCA9IHRoaXMuZ2wuY2FudmFzLndpZHRoIC8gMiwgY2VudGVyWSA9IHRoaXMuZ2wuY2FudmFzLmhlaWdodCAvIDIpIHtcclxuICAgICAgICBsZXQgc2NhbGVNYXQgPSBnbFV0aWwuY3JlYXRlU2NhbGVNYXRyaXgoc3gsIHN5LCAxLCB7eDogY2VudGVyWCwgeTogY2VudGVyWSwgejogMX0pO1xyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDRmdih0aGlzLnVfc2NhbGUsIGZhbHNlLCBzY2FsZU1hdCk7XHJcbiAgICB9XHJcblxyXG4gICAgdmlld3BvcnQocHJvamVjdGlvbk1hdCkge1xyXG4gICAgICAgIHRoaXMuZ2wudXNlUHJvZ3JhbSh0aGlzLnByb2dyYW0pO1xyXG4gICAgICAgIHRoaXMuZ2wudW5pZm9ybU1hdHJpeDRmdih0aGlzLnVfcHJvamVjdGlvbiwgZmFsc2UsIHByb2plY3Rpb25NYXQpO1xyXG4gICAgfVxyXG5cclxuXHJcblxyXG59ICIsIi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtXZWJHTDJSZW5kZXJpbmdDb250ZXh0fSBnbCBcclxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIoZ2wsIHR5cGUsIHNvdXJjZSkge1xyXG4gICAgbGV0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcclxuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XHJcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcbiAgICBsZXQgc3VjY2VzcyA9IGdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKTtcclxuICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHNoYWRlcjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSk7XHJcbiAgICBnbC5kZWxldGVTaGFkZXIoc2hhZGVyKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge1dlYkdMMlJlbmRlcmluZ0NvbnRleHR9IGdsIFxyXG4gKiBAcGFyYW0ge1dlYkdMU2hhZGVyfSB2ZXJ0ZXhTaGFkZXIgXHJcbiAqIEBwYXJhbSB7V2ViR0xTaGFkZXJ9IGZyYWdtZW50U2hhZGVyIFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbShnbCwgdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcikge1xyXG4gICAgbGV0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XHJcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcclxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XHJcbiAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgIGxldCBzdWNjZXNzID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUyk7XHJcbiAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgIHJldHVybiBwcm9ncmFtO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpO1xyXG4gICAgZ2wuZGVsZXRlUHJvZ3JhbShwcm9ncmFtKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge1dlYkdMMlJlbmRlcmluZ0NvbnRleHR9IGdsIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdmVydGV4U291cmNlIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZnJhZ21lbnRTb3VyY2UgXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0V2ViR0woZ2wsIHZlcnRleFNvdXJjZSwgZnJhZ21lbnRTb3VyY2UpIHtcclxuICAgIGxldCB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIoZ2wsIGdsLlZFUlRFWF9TSEFERVIsIHZlcnRleFNvdXJjZSk7XHJcbiAgICBsZXQgZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVTaGFkZXIoZ2wsIGdsLkZSQUdNRU5UX1NIQURFUiwgZnJhZ21lbnRTb3VyY2UpO1xyXG4gICAgbGV0IHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKGdsLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcclxuICAgIHJldHVybiBwcm9ncmFtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0aW9uKHdpZHRoLCBoZWlnaHQsIGRlcHRoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIDIgLyB3aWR0aCwgMCwgMCwgMCxcclxuICAgICAgICAwLCAyIC8gaGVpZ2h0LCAwLCAwLFxyXG4gICAgICAgIDAsIDAsIDIgLyBkZXB0aCwgMCxcclxuICAgICAgICAtMSwgLTEsIDAsIDEsXHJcbiAgICBdO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IGNlbnRlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gcm90YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVSb3RhdGVNYXRyaXgoY2VudGVyLCByb3RhdGUsIGF4aXMgPSAneicpIHtcclxuICAgIGxldCBjb3MgPSBNYXRoLmNvcyhyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgIGxldCBzaW4gPSBNYXRoLnNpbihyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgIGlmICghY2VudGVyLnopIHtcclxuICAgICAgICBjZW50ZXIueiA9IDA7XHJcbiAgICB9XHJcbiAgICBsZXQgcmV0O1xyXG4gICAgc3dpdGNoIChheGlzKSB7XHJcbiAgICAgICAgY2FzZSAneCc6XHJcbiAgICAgICAgICAgIHJldCA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAgICAgMS4wLCAwLjAsIDAuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgMC4wLCBjb3MsIHNpbiwgMC4wLFxyXG4gICAgICAgICAgICAgICAgMC4wLCAtc2luLCBjb3MsIDAuMCxcclxuICAgICAgICAgICAgICAgIDAuMCwgKDEgLSBjb3MpICogY2VudGVyLnkgKyBzaW4gKiBjZW50ZXIueiwgKDEgLSBjb3MpICogY2VudGVyLnogLSBzaW4gKiBjZW50ZXIueSwgMS4wXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlICd5JzpcclxuICAgICAgICAgICAgcmV0ID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgICAgICBjb3MsIDAuMCwgc2luLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAwLjAsIDEuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAtc2luLCAwLjAsIGNvcywgMC4wLFxyXG4gICAgICAgICAgICAgICAgKDEgLSBjb3MpICogY2VudGVyLnggKyBzaW4gKiBjZW50ZXIueiwgMC4wLCAoMSAtIGNvcykgKiBjZW50ZXIueiAtIHNpbiAqIGNlbnRlci54LCAxLjBcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHJldCA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAgICAgY29zLCBzaW4sIDAuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgLXNpbiwgY29zLCAwLjAsIDAuMCxcclxuICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAxLjAsIDAuMCxcclxuICAgICAgICAgICAgICAgICgxIC0gY29zKSAqIGNlbnRlci54ICsgc2luICogY2VudGVyLnksICgxIC0gY29zKSAqIGNlbnRlci55IC0gc2luICogY2VudGVyLngsIDAuMCwgMS4wLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXQ7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gdHhcclxuICogQHBhcmFtIHtOdW1iZXJ9IHR5XHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVUcmFuc2xhdGVNYXRyaXgodHggPSAwLCB0eSA9IDAsIHR6ID0gMCkge1xyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgIDEuMCwgMC4wLCAwLjAsIDAuMCxcclxuICAgICAgICAwLjAsIDEuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgMC4wLCAwLjAsIDEuMCwgMC4wLFxyXG4gICAgICAgIHR4LCB0eSwgdHosIDEuMCxcclxuICAgIF0pO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlWFxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGVZXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZVpcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVNjYWxlTWF0cml4KHNjYWxlWCwgc2NhbGVZLCBzY2FsZVosIGNlbnRlciA9IHtcclxuICAgIHg6IDAsXHJcbiAgICB5OiAwLFxyXG4gICAgejogMFxyXG59KSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgc2NhbGVYLCAwLjAsIDAuMCwgMC4wLFxyXG4gICAgICAgIDAuMCwgc2NhbGVZLCAwLjAsIDAuMCxcclxuICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsXHJcbiAgICAgICAgLXNjYWxlWCAqIGNlbnRlci54ICsgY2VudGVyLngsIC1zY2FsZVkgKiBjZW50ZXIueSArIGNlbnRlci55LCAtc2NhbGVaICogY2VudGVyLnogKyBjZW50ZXIueiwgMS4wLFxyXG4gICAgXSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBAZGVzYyDlr7nmr5Tluqbnn6npmLVcclxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVDb250cmFzdE1hdHJpeCh2YWx1ZSkge1xyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgIHZhbHVlLCAwLjAsIDAuMCwgMC4wLFxyXG4gICAgICAgIDAuMCwgdmFsdWUsIDAuMCwgMC4wLFxyXG4gICAgICAgIDAuMCwgMC4wLCB2YWx1ZSwgMC4wLFxyXG4gICAgICAgIDAuNSAqICgxIC0gdmFsdWUpLCAwLjUgKiAoMSAtIHZhbHVlKSwgMC41ICogKDEgLSB2YWx1ZSksIDEuMCxcclxuICAgIF0pO1xyXG59XHJcblxyXG5cclxuLyoqXHJcbiAqIEBkZXNjIOiJsuebuOaXi+i9rOefqemYtVxyXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUh1ZVJvdGF0ZU1hdHJpeCh2YWx1ZSkge1xyXG4gICAgbGV0IHNpbiA9IE1hdGguc2luKHZhbHVlICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICBsZXQgY29zID0gTWF0aC5jb3ModmFsdWUgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAwLjIxMyArIGNvcyAqIDAuNzg3IC0gc2luICogMC4yMTMsIDAuMjEzIC0gY29zICogMC4yMTMgKyBzaW4gKiAwLjE0MywgMC4yMTMgLSBjb3MgKiAwLjIxMyAtIHNpbiAqIDAuNzg3LCAwLjAsXHJcbiAgICAgICAgMC43MTUgLSBjb3MgKiAwLjcxNSAtIHNpbiAqIDAuNzE1LCAwLjcxNSArIGNvcyAqIDAuMjg1ICsgc2luICogMC4xNDAsIDAuNzE1IC0gY29zICogMC43MTUgKyBzaW4gKiAwLjcxNSwgMC4wLFxyXG4gICAgICAgIDAuMDcyIC0gY29zICogMC4wNzIgKyBzaW4gKiAwLjkyOCwgMC4wNzIgLSBjb3MgKiAwLjA3MiAtIHNpbiAqIDAuMjgzLCAwLjA3MiArIGNvcyAqIDAuOTI4ICsgc2luICogMC4wNzIsIDAuMCxcclxuICAgICAgICAwLjAsIDAuMCwgMC4wLCAxLjAsXHJcbiAgICBdKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjIOmlseWSjOW6puefqemYtVxyXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVNhdHVyYXRlTWF0cml4KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgMC4zMDg2ICogKDEgLSB2YWx1ZSkgKyB2YWx1ZSwgMC4zMDg2ICogKDEgLSB2YWx1ZSksIDAuMzA4NiAqICgxIC0gdmFsdWUpLCAwLjAsXHJcbiAgICAgICAgMC42MDk0ICogKDEgLSB2YWx1ZSksIDAuNjA5NCAqICgxIC0gdmFsdWUpICsgdmFsdWUsIDAuNjA5NCAqICgxIC0gdmFsdWUpLCAwLjAsXHJcbiAgICAgICAgMC4wODIwICogKDEgLSB2YWx1ZSksIDAuMDgyMCAqICgxIC0gdmFsdWUpLCAwLjA4MjAgKiAoMSAtIHZhbHVlKSArIHZhbHVlLCAwLjAsXHJcbiAgICAgICAgMC4wLCAwLjAsIDAuMCwgMS4wXHJcbiAgICBdKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbFxyXG4gKiBAcGFyYW0ge051bWJlcn0geCDkuK3lv4N45Z2Q5qCHXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB5IOS4reW/g3nlnZDmoIdcclxuICogQHBhcmFtIHtyYWRpdXN9IHJhZGl1cyDlnIblvKfljYrlvoRcclxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0QXJjIOi1t+Wni+WchuW8p+WNiuW+hFxyXG4gKiBAcGFyYW0ge051bWJlcn0gZW5kQXJjIOe7iOatouWchuW8p+WNiuW+hFxyXG4gKiBAcGFyYW0ge0Jvb2xlYW59IGNsb2Nrd2lzZSDmlrnlkJHvvIzpu5jorqTpobrml7bpkohcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUFyY1ZlcnRleChnbCwgeCwgeSwgcmFkaXVzLCBzdGFydEFyYywgZW5kQXJjLCBpc0ludmVyc2UgPSBmYWxzZSkge1xyXG4gICAgbGV0IHByZWNpc2lvbiA9IDE7XHJcbiAgICBsZXQgb25lQXJjID0gTWF0aC5QSSAvIDE4MFxyXG4gICAgbGV0IHBvaW50cyA9IFt4LCB5LCB4IC8gZ2wuY2FudmFzLndpZHRoLCB5IC8gZ2wuY2FudmFzLmhlaWdodF07XHJcbiAgICBmb3IgKGxldCBpID0gc3RhcnRBcmM7IGkgPD0gZW5kQXJjOyBpICs9IHByZWNpc2lvbikge1xyXG4gICAgICAgIGlmICghaXNJbnZlcnNlKSB7XHJcbiAgICAgICAgICAgIHBvaW50cy5wdXNoKFxyXG4gICAgICAgICAgICAgICAgeCArIHJhZGl1cyAqIE1hdGguc2luKGkgKiBvbmVBcmMpLFxyXG4gICAgICAgICAgICAgICAgKHkgLSByYWRpdXMgKiBNYXRoLmNvcyhpICogb25lQXJjKSksXHJcbiAgICAgICAgICAgICAgICAoeCArIHJhZGl1cyAqIE1hdGguc2luKGkgKiBvbmVBcmMpKSAvIGdsLmNhbnZhcy53aWR0aCxcclxuICAgICAgICAgICAgICAgICh5IC0gcmFkaXVzICogTWF0aC5jb3MoaSAqIG9uZUFyYykpIC8gZ2wuY2FudmFzLmhlaWdodCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcG9pbnRzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB4IC0gcmFkaXVzICogTWF0aC5zaW4oaSAqIG9uZUFyYyksXHJcbiAgICAgICAgICAgICAgICAoeSAtIHJhZGl1cyAqIE1hdGguY29zKGkgKiBvbmVBcmMpKSxcclxuICAgICAgICAgICAgICAgICh4IC0gcmFkaXVzICogTWF0aC5zaW4oaSAqIG9uZUFyYykpIC8gZ2wuY2FudmFzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgKHkgLSByYWRpdXMgKiBNYXRoLmNvcyhpICogb25lQXJjKSkgLyBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkocG9pbnRzKTtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlVGV4dHVyZShnbCkge1xyXG4gICAgbGV0IHRleHR1cmUgPSBnbC5jcmVhdGVUZXh0dXJlKCk7XHJcbiAgICBnbC5iaW5kVGV4dHVyZShnbC5URVhUVVJFXzJELCB0ZXh0dXJlKTtcclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9NSU5fRklMVEVSLCBnbC5MSU5FQVIpO1xyXG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01BR19GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfV1JBUF9TLCBnbC5DTEFNUF9UT19FREdFKTtcclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1QsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgLy8gZ2wuZ2VuZXJhdGVNaXBtYXAoZ2wuVEVYVFVSRV8yRCk7XHJcbiAgICByZXR1cm4gdGV4dHVyZTtcclxufVxyXG5cclxuZnVuY3Rpb24gY29tcHV0ZUtlcm5hbFdlaWdodChrZXJuYWwpIHtcclxuICAgIGxldCB3ZWlnaHQgPSBrZXJuYWwucmVkdWNlKChwcmV2LCBjdXIpID0+IHtcclxuICAgICAgICByZXR1cm4gcHJldiArIGN1cjtcclxuICAgIH0sIDApO1xyXG4gICAgcmV0dXJuIHdlaWdodCA8PSAwID8gMSA6IHdlaWdodDtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAqIEBwYXJhbSB7QXJyYXl9IHZlcnRYXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHZlcnRZXHJcbiAqL1xyXG5mdW5jdGlvbiBjaGVja1BvaW50SW4oeCwgeSwgdmVydFgsIHZlcnRZKSB7XHJcbiAgICBsZXQgbWluWCA9IE1hdGgubWluKC4uLnZlcnRYKTtcclxuICAgIGxldCBtaW5ZID0gTWF0aC5taW4oLi4udmVydFkpO1xyXG4gICAgbGV0IG1heFggPSBNYXRoLm1heCguLi52ZXJ0WCk7XHJcbiAgICBsZXQgbWF4WSA9IE1hdGgubWF4KC4uLnZlcnRZKTtcclxuICAgIGlmICh4IDwgbWluWCB8fCB4ID4gbWF4WCB8fCB5IDwgbWluWSB8fCB5ID4gbWF4WSkge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGksIGosIHI7XHJcbiAgICAgICAgciA9IGZhbHNlO1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gdmVydFgubGVuZ3RoIC0gMTsgaSA8IHZlcnRYLmxlbmd0aDsgaiA9IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoKHZlcnRZW2ldID4geSkgIT09ICh2ZXJ0WVtqXSA+IHkpICYmXHJcbiAgICAgICAgICAgICAgICAoeCA8ICh5IC0gdmVydFlbaV0pICogKHZlcnRYW2pdIC0gdmVydFhbaV0pIC8gKHZlcnRZW2pdIC0gdmVydFlbaV0pICsgdmVydFhbaV0pKSB7XHJcbiAgICAgICAgICAgICAgICByID0gIXI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHI7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0geFxyXG4gKiBAcGFyYW0ge051bWJlcn0geVxyXG4gKiBAcGFyYW0ge0FycmF5fSB2ZXJ0WFxyXG4gKiBAcGFyYW0ge0FycmF5fSB2ZXJ0WVxyXG4gKi9cclxuZnVuY3Rpb24gY2hlY2tQb2ludEluMih4LCB5LCB2ZXJ0WCwgdmVydFkpIHtcclxuICAgIGxldCBtaW5YID0gTWF0aC5taW4oLi4udmVydFgpO1xyXG4gICAgbGV0IG1pblkgPSBNYXRoLm1pbiguLi52ZXJ0WSk7XHJcbiAgICBsZXQgbWF4WCA9IE1hdGgubWF4KC4uLnZlcnRYKTtcclxuICAgIGxldCBtYXhZID0gTWF0aC5tYXgoLi4udmVydFkpO1xyXG4gICAgaWYgKHggPCBtaW5YIHx8IHggPiBtYXhYIHx8IHkgPCBtaW5ZIHx8IHkgPiBtYXhZKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgaSwgaiwgcjtcclxuICAgICAgICByID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSB2ZXJ0WC5sZW5ndGggLSAxOyBpIDwgdmVydFgubGVuZ3RoOyBqID0gaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICgodmVydFlbaV0gPiB5KSAhPT0gKHZlcnRZW2pdID4geSkgJiZcclxuICAgICAgICAgICAgICAgICh4IDwgKHkgLSB2ZXJ0WVtpXSkgKiAodmVydFhbal0gLSB2ZXJ0WFtpXSkgLyAodmVydFlbal0gLSB2ZXJ0WVtpXSkgKyB2ZXJ0WFtpXSkpIHtcclxuICAgICAgICAgICAgICAgIHIgPSAhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge1N0cmluZ30gaGV4XHJcbiAqL1xyXG5mdW5jdGlvbiBoZXhUb1JHQihoZXgpIHtcclxuICAgIGlmICgvI1thLWYwLTldezZ9L2kudGVzdChoZXgpKSB7XHJcbiAgICAgICAgbGV0IHIgPSArKCcweCcgKyBoZXguc3Vic3RyKDEsIDIpKTtcclxuICAgICAgICBsZXQgZyA9ICsoJzB4JyArIGhleC5zdWJzdHIoMywgMikpO1xyXG4gICAgICAgIGxldCBiID0gKygnMHgnICsgaGV4LnN1YnN0cig1LCAyKSk7XHJcbiAgICAgICAgcmV0dXJuIFtyIC8gMjU1LCBnIC8gMjU1LCBiIC8gMjU1XTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2VuZXJhdGVJbWFnZUJ5RGl2KHdpZHRoLCBoZWlnaHQsIGh0bWwpIHtcclxuICAgIGxldCBzdmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ3N2ZycpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgneG1sbnMnLCAnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnKTtcclxuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ3ZpZXdCb3gnLCBgMCAwICR7d2lkdGh9ICR7aGVpZ2h0fWApO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgnd2lkdGgnLCB3aWR0aCk7XHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQpO1xyXG5cclxuICAgIGxldCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3R5bGUnKTtcclxuICAgIHN0eWxlLnRleHRDb250ZW50ID0gYFxyXG4gICAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ1Nob3VKaW5UaSc7XHJcbiAgICAgICAgICAgIHNyYzogdXJsKCdodHRwOi8vbG9jYWxob3N0OjgwODEvV2ViR0xUcmFpbmluZy9hc3NldHMvc2hvdWppbi50dGYnKTtcclxuICAgICAgICB9XHJcbiAgICBgO1xyXG5cclxuICAgIGxldCBmb3JlaWduT2JqZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdmb3JlaWduT2JqZWN0Jyk7XHJcbiAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZSgneCcsIDApO1xyXG4gICAgZm9yZWlnbk9iamVjdC5zZXRBdHRyaWJ1dGUoJ3knLCAwKTtcclxuICAgIGZvcmVpZ25PYmplY3Quc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoKTtcclxuICAgIGZvcmVpZ25PYmplY3Quc2V0QXR0cmlidXRlKCdoZWlnaHQnLCBoZWlnaHQpO1xyXG5cclxuICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnLCAnZGl2Jyk7XHJcbiAgICBkaXYuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sJyk7XHJcbiAgICBkaXYuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgIGZvcmVpZ25PYmplY3QuYXBwZW5kQ2hpbGQoZGl2KTtcclxuICAgIHN2Zy5hcHBlbmRDaGlsZChzdHlsZSk7XHJcbiAgICBzdmcuYXBwZW5kQ2hpbGQoZm9yZWlnbk9iamVjdCk7XHJcbiAgICByZXR1cm4gc3ZnO1xyXG59XHJcblxyXG4vKipcclxuICogXHJcbiAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyBcclxuICogQHBhcmFtIHtudW1iZXJ9IGxlZnQgXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSByaWdodCBcclxuICogQHBhcmFtIHtudW1iZXJ9IF9ib3R0b20gXHJcbiAqIEBwYXJhbSB7bnVtYmVyfSBfdG9wIFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlQ2xpcFBhdGgoY2FudmFzLCBsZWZ0ID0gMCwgcmlnaHQgPSAwLCBfYm90dG9tID0gMCwgX3RvcCA9IDAsIG9mZnNldFggPSAwLCBvZmZzZXRZID0gMCwgc2NhbGVYID0gMSwgc2NhbGVZID0gMSwgcm90YXRlID0gMCkge1xyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgIDAgKyBjYW52YXMud2lkdGggKiBsZWZ0LCAwICsgY2FudmFzLmhlaWdodCAqIF90b3AsIGxlZnQsIF90b3AsXHJcbiAgICAgICAgY2FudmFzLndpZHRoIC0gY2FudmFzLndpZHRoICogcmlnaHQsIDAgKyBjYW52YXMuaGVpZ2h0ICogX3RvcCwgMSAtIHJpZ2h0LCBfdG9wLFxyXG4gICAgICAgIGNhbnZhcy53aWR0aCAtIGNhbnZhcy53aWR0aCAqIHJpZ2h0LCBjYW52YXMuaGVpZ2h0IC0gY2FudmFzLmhlaWdodCAqIF9ib3R0b20sIDEgLSByaWdodCwgMSAtIF9ib3R0b20sXHJcbiAgICAgICAgY2FudmFzLndpZHRoIC0gY2FudmFzLndpZHRoICogcmlnaHQsIGNhbnZhcy5oZWlnaHQgLSBjYW52YXMuaGVpZ2h0ICogX2JvdHRvbSwgMSAtIHJpZ2h0LCAxIC0gX2JvdHRvbSxcclxuICAgICAgICAwICsgY2FudmFzLndpZHRoICogbGVmdCwgY2FudmFzLmhlaWdodCAtIGNhbnZhcy5oZWlnaHQgKiBfYm90dG9tLCBsZWZ0LCAxIC0gX2JvdHRvbSxcclxuICAgICAgICAwICsgY2FudmFzLndpZHRoICogbGVmdCwgMCArIGNhbnZhcy5oZWlnaHQgKiBfdG9wLCBsZWZ0LCBfdG9wLFxyXG4gICAgXSlcclxufVxyXG5cclxuZnVuY3Rpb24gcm90YXRlKGNlbnRlciwgeCwgeSwgcm90YXRlKSB7XHJcbiAgICBsZXQgY29zID0gTWF0aC5jb3Mocm90YXRlICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICBsZXQgc2luID0gTWF0aC5zaW4ocm90YXRlICogTWF0aC5QSSAvIDE4MCk7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIHggKiBjb3MgLSB5ICogc2luICsgKDEgLSBjb3MpICogY2VudGVyLnggKyBzaW4gKiBjZW50ZXIueSxcclxuICAgICAgICB4ICogc2luICsgeSAqIGNvcyArICgxIC0gY29zKSAqIGNlbnRlci55IC0gc2luICogY2VudGVyLngsXHJcbiAgICBdXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHBucG9seShudW1iZXIsIHZlclgsIHZlclksIHRlc3RYLCB0ZXN0WSkge1xyXG4gICAgbGV0IGksIGosIGMgPSBmYWxzZTtcclxuICAgIGZvciAoaSA9IDAsIGogPSBudW1iZXIgLSAxOyBpIDwgbnVtYmVyOyBqID0gaSsrKSB7XHJcbiAgICAgICAgaWYgKCgodmVyWVtpXSA+IHRlc3RZKSAhPT0gKHZlcllbal0gPiB0ZXN0WSkpICYmXHJcbiAgICAgICAgICAgICh0ZXN0WCA8ICh2ZXJYW2pdIC0gdmVyWFtpXSkgKiAodGVzdFkgLSB2ZXJZW2ldKSAvICh2ZXJZW2pdIC0gdmVyWVtpXSkgKyB2ZXJYW2ldKSkge1xyXG4gICAgICAgICAgICBjID0gIWM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGNEaXN0YW5jZSh4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCgoeDEgLSB4MikgKiogMiArICh5MSAtIHkyKSAqKiAyKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUcmlhbmdsZUNsaXBQYXRoKGNhbnZhcywgcHJvZ3Jlc3MsIG9mZnNldFggPSAwLCBvZmZzZXRZID0gMCwgc2NhbGVYID0gMSwgc2NhbGVZID0gMSwgcm90YXRlID0gMCkge1xyXG4gICAgbGV0IGNlbnRlclggPSBjYW52YXMud2lkdGggLyAyICsgb2Zmc2V0WCAqIGNhbnZhcy53aWR0aDtcclxuICAgIGxldCBjZW50ZXJZID0gY2FudmFzLmhlaWdodCAvIDIgKyBvZmZzZXRZICogY2FudmFzLmhlaWdodDtcclxuICAgIGxldCBkaXN0YW5jZUxEID0gY2FsY0Rpc3RhbmNlKGNlbnRlclgsIGNlbnRlclksIDAsIDApO1xyXG4gICAgbGV0IGRpc3RhbmNlTFUgPSBjYWxjRGlzdGFuY2UoY2VudGVyWCwgY2VudGVyWSwgMCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBsZXQgZGlzdGFuY2VSRCA9IGNhbGNEaXN0YW5jZShjZW50ZXJYLCBjZW50ZXJZLCBjYW52YXMud2lkdGgsIDApO1xyXG4gICAgbGV0IGRpc3RhbmNlUlUgPSBjYWxjRGlzdGFuY2UoY2VudGVyWCwgY2VudGVyWSwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGxldCByID0gTWF0aC5tYXgoZGlzdGFuY2VMRCwgZGlzdGFuY2VMVSwgZGlzdGFuY2VSRCwgZGlzdGFuY2VSVSkgKiBwcm9ncmVzcztcclxuICAgIGxldCBwb2ludHMgPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICBjYW52YXMud2lkdGggLyAyLCBjYW52YXMuaGVpZ2h0IC8gMiArIDIgKiByLCAwLjUsIDAuNSArIDIgKiByIC8gY2FudmFzLmhlaWdodCxcclxuICAgICAgICBjYW52YXMud2lkdGggLyAyIC0gMS43MzIgKiByLCBjYW52YXMuaGVpZ2h0IC8gMiAtIHIsIDAuNSAtIDEuNzMyICogciAvIGNhbnZhcy53aWR0aCwgMC41IC0gciAvIGNhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgY2FudmFzLndpZHRoIC8gMiArIDEuNzMyICogciwgY2FudmFzLmhlaWdodCAvIDIgLSByLCAwLjUgKyAxLjczMiAqIHIgLyBjYW52YXMud2lkdGgsIDAuNSAtIHIgLyBjYW52YXMuaGVpZ2h0XHJcbiAgICBdKTtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSArPSA0KSB7XHJcbiAgICAgICAgLy8gcG9pbnRzW2kgKyAyXSBcclxuICAgICAgICBwb2ludHNbaSArIDFdID0gY2FudmFzLmhlaWdodCAtIHBvaW50c1tpICsgMV07XHJcbiAgICAgICAgcG9pbnRzW2kgKyAzXSA9IDEgLSBwb2ludHNbaSArIDNdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHBvaW50cztcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVOb2lzZUltYWdlKHdpZHRoLCBoZWlnaHQsIHR5cGUsIGZhY3Rvcikge1xyXG4gICAgbGV0IGRhdGE7XHJcbiAgICBzd2l0Y2ggKHR5cGUpIHtcclxuICAgICAgICBjYXNlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5SR0JBOlxyXG4gICAgICAgICAgICBkYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiA0KTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSA0KSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gMiAqIGZhY3RvciAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICBkYXRhW2kgKyAxXSA9IGZhY3RvciAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICBkYXRhW2kgKyAyXSA9IGZhY3RvciAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICBkYXRhW2kgKyAzXSA9IGZhY3RvciAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuUkdCOlxyXG4gICAgICAgICAgICBkYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiAzKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSArPSAzKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZmFjdG9yICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIGRhdGFbaSArIDFdID0gZmFjdG9yICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIGRhdGFbaSArIDJdID0gZmFjdG9yICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5MVU1JTkFOQ0VfQUxQSEE6XHJcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDIpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDIpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBmYWN0b3IgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgZGF0YVtpICsgMV0gPSBmYWN0b3IgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgV2ViR0xSZW5kZXJpbmdDb250ZXh0LkxVTUlOQU5DRTpcclxuICAgICAgICAgICAgZGF0YSA9IG5ldyBVaW50OEFycmF5KHdpZHRoICogaGVpZ2h0ICogMSk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGZhY3RvciAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZGF0YTtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQZXJzcGVjdGl2ZShuZWFyLCBmYXIsIGwsIHIsIHQsIGIpIHtcclxuICAgIGxldCByYW5nZUludiA9IDEuMCAvIChmYXIgLSBuZWFyKTtcclxuXHJcbiAgICBsZXQgbiA9IG5lYXI7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIDIgKiBuIC8gKHIgLSBsKSwgMCwgMCwgMCxcclxuICAgICAgICAwLCAyICogbiAvICh0IC0gYiksIDAsIDAsXHJcbiAgICAgICAgLShyICsgbCkgLyAociAtIGwpLCAtKHQgKyBiKSAvICh0IC0gYiksIChuZWFyICsgZmFyKSAqIHJhbmdlSW52LCAxLFxyXG4gICAgICAgIDAsIDAsIC1uZWFyICogZmFyICogcmFuZ2VJbnYgKiAyLCAwXHJcbiAgICBdO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVFZGl0b3IobmFtZSwgdHlwZSA9ICdyYW5nZScsIG1pbiwgbWF4LCB2YWx1ZSwgc3RlcCA9IDEpIHtcclxuICAgIGxldCBvYmogPSB7fTtcclxuICAgIGxldCBvbmlucHV0ID0gbnVsbDtcclxuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gbmFtZTtcclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC50eXBlID0gdHlwZTtcclxuICAgIGlucHV0Lm1heCA9IG1heDtcclxuICAgIGlucHV0Lm1pbiA9IG1pbjtcclxuICAgIGlucHV0LnN0ZXAgPSBzdGVwO1xyXG4gICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcclxuICAgIGxldCBkaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuXHJcbiAgICBpbnB1dC5vbmlucHV0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBvbmlucHV0ICYmIG9uaW5wdXQuY2FsbCh0aGlzLCBlKTtcclxuICAgICAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGlzcGxheSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhvYmosIHtcclxuICAgICAgICBvbmlucHV0OiB7XHJcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgb25pbnB1dCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb25pbnB1dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmVmOiB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGVwOiB7XHJcbiAgICAgICAgICAgIHNldCh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQuc3RlcCA9IHZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5wdXQudmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG4gICAgcmV0dXJuIG9iajtcclxufVxyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBtdWx0aXBseShhLCBiKSB7XHJcbiAgICB2YXIgYTAwID0gYVswICogNCArIDBdO1xyXG4gICAgdmFyIGEwMSA9IGFbMCAqIDQgKyAxXTtcclxuICAgIHZhciBhMDIgPSBhWzAgKiA0ICsgMl07XHJcbiAgICB2YXIgYTAzID0gYVswICogNCArIDNdO1xyXG4gICAgdmFyIGExMCA9IGFbMSAqIDQgKyAwXTtcclxuICAgIHZhciBhMTEgPSBhWzEgKiA0ICsgMV07XHJcbiAgICB2YXIgYTEyID0gYVsxICogNCArIDJdO1xyXG4gICAgdmFyIGExMyA9IGFbMSAqIDQgKyAzXTtcclxuICAgIHZhciBhMjAgPSBhWzIgKiA0ICsgMF07XHJcbiAgICB2YXIgYTIxID0gYVsyICogNCArIDFdO1xyXG4gICAgdmFyIGEyMiA9IGFbMiAqIDQgKyAyXTtcclxuICAgIHZhciBhMjMgPSBhWzIgKiA0ICsgM107XHJcbiAgICB2YXIgYTMwID0gYVszICogNCArIDBdO1xyXG4gICAgdmFyIGEzMSA9IGFbMyAqIDQgKyAxXTtcclxuICAgIHZhciBhMzIgPSBhWzMgKiA0ICsgMl07XHJcbiAgICB2YXIgYTMzID0gYVszICogNCArIDNdO1xyXG4gICAgdmFyIGIwMCA9IGJbMCAqIDQgKyAwXTtcclxuICAgIHZhciBiMDEgPSBiWzAgKiA0ICsgMV07XHJcbiAgICB2YXIgYjAyID0gYlswICogNCArIDJdO1xyXG4gICAgdmFyIGIwMyA9IGJbMCAqIDQgKyAzXTtcclxuICAgIHZhciBiMTAgPSBiWzEgKiA0ICsgMF07XHJcbiAgICB2YXIgYjExID0gYlsxICogNCArIDFdO1xyXG4gICAgdmFyIGIxMiA9IGJbMSAqIDQgKyAyXTtcclxuICAgIHZhciBiMTMgPSBiWzEgKiA0ICsgM107XHJcbiAgICB2YXIgYjIwID0gYlsyICogNCArIDBdO1xyXG4gICAgdmFyIGIyMSA9IGJbMiAqIDQgKyAxXTtcclxuICAgIHZhciBiMjIgPSBiWzIgKiA0ICsgMl07XHJcbiAgICB2YXIgYjIzID0gYlsyICogNCArIDNdO1xyXG4gICAgdmFyIGIzMCA9IGJbMyAqIDQgKyAwXTtcclxuICAgIHZhciBiMzEgPSBiWzMgKiA0ICsgMV07XHJcbiAgICB2YXIgYjMyID0gYlszICogNCArIDJdO1xyXG4gICAgdmFyIGIzMyA9IGJbMyAqIDQgKyAzXTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwICsgYjAzICogYTMwLFxyXG4gICAgICAgIGIwMCAqIGEwMSArIGIwMSAqIGExMSArIGIwMiAqIGEyMSArIGIwMyAqIGEzMSxcclxuICAgICAgICBiMDAgKiBhMDIgKyBiMDEgKiBhMTIgKyBiMDIgKiBhMjIgKyBiMDMgKiBhMzIsXHJcbiAgICAgICAgYjAwICogYTAzICsgYjAxICogYTEzICsgYjAyICogYTIzICsgYjAzICogYTMzLFxyXG4gICAgICAgIGIxMCAqIGEwMCArIGIxMSAqIGExMCArIGIxMiAqIGEyMCArIGIxMyAqIGEzMCxcclxuICAgICAgICBiMTAgKiBhMDEgKyBiMTEgKiBhMTEgKyBiMTIgKiBhMjEgKyBiMTMgKiBhMzEsXHJcbiAgICAgICAgYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyICsgYjEzICogYTMyLFxyXG4gICAgICAgIGIxMCAqIGEwMyArIGIxMSAqIGExMyArIGIxMiAqIGEyMyArIGIxMyAqIGEzMyxcclxuICAgICAgICBiMjAgKiBhMDAgKyBiMjEgKiBhMTAgKyBiMjIgKiBhMjAgKyBiMjMgKiBhMzAsXHJcbiAgICAgICAgYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxICsgYjIzICogYTMxLFxyXG4gICAgICAgIGIyMCAqIGEwMiArIGIyMSAqIGExMiArIGIyMiAqIGEyMiArIGIyMyAqIGEzMixcclxuICAgICAgICBiMjAgKiBhMDMgKyBiMjEgKiBhMTMgKyBiMjIgKiBhMjMgKyBiMjMgKiBhMzMsXHJcbiAgICAgICAgYjMwICogYTAwICsgYjMxICogYTEwICsgYjMyICogYTIwICsgYjMzICogYTMwLFxyXG4gICAgICAgIGIzMCAqIGEwMSArIGIzMSAqIGExMSArIGIzMiAqIGEyMSArIGIzMyAqIGEzMSxcclxuICAgICAgICBiMzAgKiBhMDIgKyBiMzEgKiBhMTIgKyBiMzIgKiBhMjIgKyBiMzMgKiBhMzIsXHJcbiAgICAgICAgYjMwICogYTAzICsgYjMxICogYTEzICsgYjMyICogYTIzICsgYjMzICogYTMzLFxyXG4gICAgXTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIHZlY011bHRpcGxlTWF0KHYsIG0pIHtcclxuICAgIGxldCBtMDAgPSBtWzAgKiA0ICsgMF07XHJcbiAgICBsZXQgbTAxID0gbVswICogNCArIDFdO1xyXG4gICAgbGV0IG0wMiA9IG1bMCAqIDQgKyAyXTtcclxuICAgIGxldCBtMDMgPSBtWzAgKiA0ICsgM107XHJcbiAgICBsZXQgbTEwID0gbVsxICogNCArIDBdO1xyXG4gICAgbGV0IG0xMSA9IG1bMSAqIDQgKyAxXTtcclxuICAgIGxldCBtMTIgPSBtWzEgKiA0ICsgMl07XHJcbiAgICBsZXQgbTEzID0gbVsxICogNCArIDNdO1xyXG4gICAgbGV0IG0yMCA9IG1bMiAqIDQgKyAwXTtcclxuICAgIGxldCBtMjEgPSBtWzIgKiA0ICsgMV07XHJcbiAgICBsZXQgbTIyID0gbVsyICogNCArIDJdO1xyXG4gICAgbGV0IG0yMyA9IG1bMiAqIDQgKyAzXTtcclxuICAgIGxldCBtMzAgPSBtWzMgKiA0ICsgMF07XHJcbiAgICBsZXQgbTMxID0gbVszICogNCArIDFdO1xyXG4gICAgbGV0IG0zMiA9IG1bMyAqIDQgKyAyXTtcclxuICAgIGxldCBtMzMgPSBtWzMgKiA0ICsgM107XHJcbiAgICBsZXQgdjAgPSB2WzBdO1xyXG4gICAgbGV0IHYxID0gdlsxXTtcclxuICAgIGxldCB2MiA9IHZbMl07XHJcbiAgICBsZXQgdjMgPSB2WzNdO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBtMDAgKiB2MCArIG0xMCAqIHYxICsgbTIwICogdjIgKyBtMzAgKiB2MyxcclxuICAgICAgICBtMDEgKiB2MCArIG0xMSAqIHYxICsgbTIxICogdjIgKyBtMzEgKiB2MyxcclxuICAgICAgICBtMDIgKiB2MCArIG0xMiAqIHYxICsgbTIyICogdjIgKyBtMzIgKiB2MyxcclxuICAgICAgICBtMDMgKiB2MCArIG0xMyAqIHYxICsgbTIzICogdjIgKyBtMzMgKiB2M1xyXG4gICAgXTtcclxufVxyXG5cclxuZnVuY3Rpb24gaW52ZXJzZShtKSB7XHJcbiAgICB2YXIgbTAwID0gbVswICogNCArIDBdO1xyXG4gICAgdmFyIG0wMSA9IG1bMCAqIDQgKyAxXTtcclxuICAgIHZhciBtMDIgPSBtWzAgKiA0ICsgMl07XHJcbiAgICB2YXIgbTAzID0gbVswICogNCArIDNdO1xyXG4gICAgdmFyIG0xMCA9IG1bMSAqIDQgKyAwXTtcclxuICAgIHZhciBtMTEgPSBtWzEgKiA0ICsgMV07XHJcbiAgICB2YXIgbTEyID0gbVsxICogNCArIDJdO1xyXG4gICAgdmFyIG0xMyA9IG1bMSAqIDQgKyAzXTtcclxuICAgIHZhciBtMjAgPSBtWzIgKiA0ICsgMF07XHJcbiAgICB2YXIgbTIxID0gbVsyICogNCArIDFdO1xyXG4gICAgdmFyIG0yMiA9IG1bMiAqIDQgKyAyXTtcclxuICAgIHZhciBtMjMgPSBtWzIgKiA0ICsgM107XHJcbiAgICB2YXIgbTMwID0gbVszICogNCArIDBdO1xyXG4gICAgdmFyIG0zMSA9IG1bMyAqIDQgKyAxXTtcclxuICAgIHZhciBtMzIgPSBtWzMgKiA0ICsgMl07XHJcbiAgICB2YXIgbTMzID0gbVszICogNCArIDNdO1xyXG4gICAgdmFyIHRtcF8wID0gbTIyICogbTMzO1xyXG4gICAgdmFyIHRtcF8xID0gbTMyICogbTIzO1xyXG4gICAgdmFyIHRtcF8yID0gbTEyICogbTMzO1xyXG4gICAgdmFyIHRtcF8zID0gbTMyICogbTEzO1xyXG4gICAgdmFyIHRtcF80ID0gbTEyICogbTIzO1xyXG4gICAgdmFyIHRtcF81ID0gbTIyICogbTEzO1xyXG4gICAgdmFyIHRtcF82ID0gbTAyICogbTMzO1xyXG4gICAgdmFyIHRtcF83ID0gbTMyICogbTAzO1xyXG4gICAgdmFyIHRtcF84ID0gbTAyICogbTIzO1xyXG4gICAgdmFyIHRtcF85ID0gbTIyICogbTAzO1xyXG4gICAgdmFyIHRtcF8xMCA9IG0wMiAqIG0xMztcclxuICAgIHZhciB0bXBfMTEgPSBtMTIgKiBtMDM7XHJcbiAgICB2YXIgdG1wXzEyID0gbTIwICogbTMxO1xyXG4gICAgdmFyIHRtcF8xMyA9IG0zMCAqIG0yMTtcclxuICAgIHZhciB0bXBfMTQgPSBtMTAgKiBtMzE7XHJcbiAgICB2YXIgdG1wXzE1ID0gbTMwICogbTExO1xyXG4gICAgdmFyIHRtcF8xNiA9IG0xMCAqIG0yMTtcclxuICAgIHZhciB0bXBfMTcgPSBtMjAgKiBtMTE7XHJcbiAgICB2YXIgdG1wXzE4ID0gbTAwICogbTMxO1xyXG4gICAgdmFyIHRtcF8xOSA9IG0zMCAqIG0wMTtcclxuICAgIHZhciB0bXBfMjAgPSBtMDAgKiBtMjE7XHJcbiAgICB2YXIgdG1wXzIxID0gbTIwICogbTAxO1xyXG4gICAgdmFyIHRtcF8yMiA9IG0wMCAqIG0xMTtcclxuICAgIHZhciB0bXBfMjMgPSBtMTAgKiBtMDE7XHJcblxyXG4gICAgdmFyIHQwID0gKHRtcF8wICogbTExICsgdG1wXzMgKiBtMjEgKyB0bXBfNCAqIG0zMSkgLVxyXG4gICAgICAgICh0bXBfMSAqIG0xMSArIHRtcF8yICogbTIxICsgdG1wXzUgKiBtMzEpO1xyXG4gICAgdmFyIHQxID0gKHRtcF8xICogbTAxICsgdG1wXzYgKiBtMjEgKyB0bXBfOSAqIG0zMSkgLVxyXG4gICAgICAgICh0bXBfMCAqIG0wMSArIHRtcF83ICogbTIxICsgdG1wXzggKiBtMzEpO1xyXG4gICAgdmFyIHQyID0gKHRtcF8yICogbTAxICsgdG1wXzcgKiBtMTEgKyB0bXBfMTAgKiBtMzEpIC1cclxuICAgICAgICAodG1wXzMgKiBtMDEgKyB0bXBfNiAqIG0xMSArIHRtcF8xMSAqIG0zMSk7XHJcbiAgICB2YXIgdDMgPSAodG1wXzUgKiBtMDEgKyB0bXBfOCAqIG0xMSArIHRtcF8xMSAqIG0yMSkgLVxyXG4gICAgICAgICh0bXBfNCAqIG0wMSArIHRtcF85ICogbTExICsgdG1wXzEwICogbTIxKTtcclxuXHJcbiAgICB2YXIgZCA9IDEuMCAvIChtMDAgKiB0MCArIG0xMCAqIHQxICsgbTIwICogdDIgKyBtMzAgKiB0Myk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBkICogdDAsXHJcbiAgICAgICAgZCAqIHQxLFxyXG4gICAgICAgIGQgKiB0MixcclxuICAgICAgICBkICogdDMsXHJcbiAgICAgICAgZCAqICgodG1wXzEgKiBtMTAgKyB0bXBfMiAqIG0yMCArIHRtcF81ICogbTMwKSAtXHJcbiAgICAgICAgICAgICh0bXBfMCAqIG0xMCArIHRtcF8zICogbTIwICsgdG1wXzQgKiBtMzApKSxcclxuICAgICAgICBkICogKCh0bXBfMCAqIG0wMCArIHRtcF83ICogbTIwICsgdG1wXzggKiBtMzApIC1cclxuICAgICAgICAgICAgKHRtcF8xICogbTAwICsgdG1wXzYgKiBtMjAgKyB0bXBfOSAqIG0zMCkpLFxyXG4gICAgICAgIGQgKiAoKHRtcF8zICogbTAwICsgdG1wXzYgKiBtMTAgKyB0bXBfMTEgKiBtMzApIC1cclxuICAgICAgICAgICAgKHRtcF8yICogbTAwICsgdG1wXzcgKiBtMTAgKyB0bXBfMTAgKiBtMzApKSxcclxuICAgICAgICBkICogKCh0bXBfNCAqIG0wMCArIHRtcF85ICogbTEwICsgdG1wXzEwICogbTIwKSAtXHJcbiAgICAgICAgICAgICh0bXBfNSAqIG0wMCArIHRtcF84ICogbTEwICsgdG1wXzExICogbTIwKSksXHJcbiAgICAgICAgZCAqICgodG1wXzEyICogbTEzICsgdG1wXzE1ICogbTIzICsgdG1wXzE2ICogbTMzKSAtXHJcbiAgICAgICAgICAgICh0bXBfMTMgKiBtMTMgKyB0bXBfMTQgKiBtMjMgKyB0bXBfMTcgKiBtMzMpKSxcclxuICAgICAgICBkICogKCh0bXBfMTMgKiBtMDMgKyB0bXBfMTggKiBtMjMgKyB0bXBfMjEgKiBtMzMpIC1cclxuICAgICAgICAgICAgKHRtcF8xMiAqIG0wMyArIHRtcF8xOSAqIG0yMyArIHRtcF8yMCAqIG0zMykpLFxyXG4gICAgICAgIGQgKiAoKHRtcF8xNCAqIG0wMyArIHRtcF8xOSAqIG0xMyArIHRtcF8yMiAqIG0zMykgLVxyXG4gICAgICAgICAgICAodG1wXzE1ICogbTAzICsgdG1wXzE4ICogbTEzICsgdG1wXzIzICogbTMzKSksXHJcbiAgICAgICAgZCAqICgodG1wXzE3ICogbTAzICsgdG1wXzIwICogbTEzICsgdG1wXzIzICogbTIzKSAtXHJcbiAgICAgICAgICAgICh0bXBfMTYgKiBtMDMgKyB0bXBfMjEgKiBtMTMgKyB0bXBfMjIgKiBtMjMpKSxcclxuICAgICAgICBkICogKCh0bXBfMTQgKiBtMjIgKyB0bXBfMTcgKiBtMzIgKyB0bXBfMTMgKiBtMTIpIC1cclxuICAgICAgICAgICAgKHRtcF8xNiAqIG0zMiArIHRtcF8xMiAqIG0xMiArIHRtcF8xNSAqIG0yMikpLFxyXG4gICAgICAgIGQgKiAoKHRtcF8yMCAqIG0zMiArIHRtcF8xMiAqIG0wMiArIHRtcF8xOSAqIG0yMikgLVxyXG4gICAgICAgICAgICAodG1wXzE4ICogbTIyICsgdG1wXzIxICogbTMyICsgdG1wXzEzICogbTAyKSksXHJcbiAgICAgICAgZCAqICgodG1wXzE4ICogbTEyICsgdG1wXzIzICogbTMyICsgdG1wXzE1ICogbTAyKSAtXHJcbiAgICAgICAgICAgICh0bXBfMjIgKiBtMzIgKyB0bXBfMTQgKiBtMDIgKyB0bXBfMTkgKiBtMTIpKSxcclxuICAgICAgICBkICogKCh0bXBfMjIgKiBtMjIgKyB0bXBfMTYgKiBtMDIgKyB0bXBfMjEgKiBtMTIpIC1cclxuICAgICAgICAgICAgKHRtcF8yMCAqIG0xMiArIHRtcF8yMyAqIG0yMiArIHRtcF8xNyAqIG0wMikpXHJcbiAgICBdO1xyXG59O1xyXG5cclxuXHJcbmZ1bmN0aW9uIGNyb3NzKGEsIGIpIHtcclxuICAgIHJldHVybiBbYVsxXSAqIGJbMl0gLSBhWzJdICogYlsxXSxcclxuICAgICAgICBhWzJdICogYlswXSAtIGFbMF0gKiBiWzJdLFxyXG4gICAgICAgIGFbMF0gKiBiWzFdIC0gYVsxXSAqIGJbMF1cclxuICAgIF07XHJcbn07XHJcblxyXG5mdW5jdGlvbiBzdWJ0cmFjdFZlY3RvcnMoYSwgYikge1xyXG4gICAgcmV0dXJuIFthWzBdIC0gYlswXSwgYVsxXSAtIGJbMV0sIGFbMl0gLSBiWzJdXTtcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIG5vcm1hbGl6ZSh2KSB7XHJcbiAgICB2YXIgbGVuZ3RoID0gTWF0aC5zcXJ0KHZbMF0gKiB2WzBdICsgdlsxXSAqIHZbMV0gKyB2WzJdICogdlsyXSk7XHJcbiAgICAvLyDnoa7lrprkuI3kvJrpmaTku6UgMFxyXG4gICAgaWYgKGxlbmd0aCA+IDAuMDAwMDEpIHtcclxuICAgICAgICByZXR1cm4gW3ZbMF0gLyBsZW5ndGgsIHZbMV0gLyBsZW5ndGgsIHZbMl0gLyBsZW5ndGhdO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gWzAsIDAsIDBdO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBsb29rQXQoY2FtZXJhUG9zaXRpb24sIHRhcmdldCwgdXApIHtcclxuICAgIHZhciB6QXhpcyA9IG5vcm1hbGl6ZShcclxuICAgICAgICBzdWJ0cmFjdFZlY3RvcnModGFyZ2V0LCBjYW1lcmFQb3NpdGlvbikpO1xyXG4gICAgdmFyIHhBeGlzID0gbm9ybWFsaXplKGNyb3NzKHVwLCB6QXhpcykpO1xyXG4gICAgdmFyIHlBeGlzID0gbm9ybWFsaXplKGNyb3NzKHpBeGlzLCB4QXhpcykpO1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgeEF4aXNbMF0sIHhBeGlzWzFdLCB4QXhpc1syXSwgMCxcclxuICAgICAgICB5QXhpc1swXSwgeUF4aXNbMV0sIHlBeGlzWzJdLCAwLFxyXG4gICAgICAgIHpBeGlzWzBdLCB6QXhpc1sxXSwgekF4aXNbMl0sIDAsXHJcbiAgICAgICAgY2FtZXJhUG9zaXRpb25bMF0sXHJcbiAgICAgICAgY2FtZXJhUG9zaXRpb25bMV0sXHJcbiAgICAgICAgY2FtZXJhUG9zaXRpb25bMl0sXHJcbiAgICAgICAgMSxcclxuICAgIF07XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVGcmFtZWJ1ZmZlclRleHR1cmUoZ2wsIG51bWJlciwgZnJhbWVidWZmZXJzLCB0ZXh0dXJlcywgd2lkdGgsIGhlaWdodCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXI7IGkrKykge1xyXG4gICAgICAgIGxldCBmcmFtZWJ1ZmZlciA9IGdsLmNyZWF0ZUZyYW1lYnVmZmVyKCk7XHJcbiAgICAgICAgZ2wuYmluZEZyYW1lYnVmZmVyKGdsLkZSQU1FQlVGRkVSLCBmcmFtZWJ1ZmZlcik7XHJcbiAgICAgICAgbGV0IHRleHR1cmUgPSBjcmVhdGVUZXh0dXJlKGdsKTtcclxuICAgICAgICBnbC50ZXhJbWFnZTJEKGdsLlRFWFRVUkVfMkQsIDAsIGdsLlJHQkEsIHdpZHRoLCBoZWlnaHQsIDAsIGdsLlJHQkEsIGdsLlVOU0lHTkVEX0JZVEUsIG51bGwpO1xyXG4gICAgICAgIGdsLmZyYW1lYnVmZmVyVGV4dHVyZTJEKGdsLkZSQU1FQlVGRkVSLCBnbC5DT0xPUl9BVFRBQ0hNRU5UMCwgZ2wuVEVYVFVSRV8yRCwgdGV4dHVyZSwgMCk7XHJcbiAgICAgICAgdGV4dHVyZXMucHVzaCh0ZXh0dXJlKTtcclxuICAgICAgICBmcmFtZWJ1ZmZlcnMucHVzaChmcmFtZWJ1ZmZlcik7XHJcbiAgICB9XHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgaW5pdFdlYkdMLFxyXG4gICAgY3JlYXRlUHJvamVjdGlvbixcclxuICAgIGNyZWF0ZVRyYW5zbGF0ZU1hdHJpeCxcclxuICAgIGNyZWF0ZVJvdGF0ZU1hdHJpeCxcclxuICAgIGNyZWF0ZVNjYWxlTWF0cml4LFxyXG4gICAgY3JlYXRlQ29udHJhc3RNYXRyaXgsXHJcbiAgICBjcmVhdGVIdWVSb3RhdGVNYXRyaXgsXHJcbiAgICBjcmVhdGVTYXR1cmF0ZU1hdHJpeCxcclxuICAgIGNyZWF0ZUFyY1ZlcnRleCxcclxuICAgIGNyZWF0ZVRleHR1cmUsXHJcbiAgICBjcmVhdGVDbGlwUGF0aCxcclxuICAgIGNyZWF0ZVRyaWFuZ2xlQ2xpcFBhdGgsXHJcbiAgICBjcmVhdGVOb2lzZUltYWdlLFxyXG4gICAgY3JlYXRlUGVyc3BlY3RpdmUsXHJcbiAgICByb3RhdGUsXHJcbiAgICBwbnBvbHksXHJcbiAgICBjcmVhdGVFZGl0b3IsXHJcbiAgICBpbnZlcnNlLFxyXG4gICAgbXVsdGlwbHksXHJcbiAgICBjcm9zcyxcclxuICAgIHN1YnRyYWN0VmVjdG9ycyxcclxuICAgIGxvb2tBdCxcclxuICAgIGNyZWF0ZUZyYW1lYnVmZmVyVGV4dHVyZSxcclxuICAgIHZlY011bHRpcGxlTWF0XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9