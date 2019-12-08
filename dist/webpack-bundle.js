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

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/header.less":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/header.less ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".header {\n  display: flex;\n  padding: 3px 5px;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/menu.less":
/*!********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/menu.less ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".menu-droplist {\n  width: 100px;\n  margin-top: 5px;\n  border: 1px solid #2e2e2e;\n  box-shadow: 1px 1px 2px 1px #000;\n}\n", ""]);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/style.less":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/style.less ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "body {\n  margin: 0;\n  background-color: #4e4e4e;\n  color: #fff;\n  cursor: default;\n}\ncanvas {\n  background-color: transparent;\n}\n.hide {\n  display: none;\n}\n.absolute {\n  position: absolute;\n}\n.vertical-align {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.top {\n  top: 0;\n}\n.left {\n  left: 0;\n}\n.flex {\n  display: flex;\n  align-items: center;\n}\n.header {\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  height: 28px;\n  border-bottom: 1px solid #000;\n  box-sizing: border-box;\n}\n.main {\n  position: absolute;\n  top: 28px;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  z-index: -1;\n  right: 200px;\n}\n.main .drawing-board {\n  font-size: 0;\n  box-shadow: 0 0 5px 1px #000;\n}\n.info {\n  position: absolute;\n  top: 28px;\n  bottom: 0;\n  right: 0;\n  width: 200px;\n  border-left: 1px solid #000;\n}\n.info .layer-info {\n  height: 500px;\n  overflow-y: auto;\n}\n.info .layer-info .layer-item {\n  margin: 10px 0 10px 5px;\n}\n.info .layer-info .layer-item__title {\n  flex: 1;\n  padding-left: 10px;\n  height: 20px;\n  line-height: 20px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n", ""]);


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
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util/util */ "./src/util/util.js");
/* harmony import */ var _css_style_less__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./css/style.less */ "./src/css/style.less");
/* harmony import */ var _css_style_less__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_css_style_less__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _css_header_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./css/header.less */ "./src/css/header.less");
/* harmony import */ var _css_header_less__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_css_header_less__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _container_Info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./container/Info */ "./src/container/Info.js");






class App {
    constructor() {
        let header = new _container_Header__WEBPACK_IMPORTED_MODULE_0__["default"]();
        let main = new _container_Main__WEBPACK_IMPORTED_MODULE_1__["default"]();
        let info = new _container_Info__WEBPACK_IMPORTED_MODULE_5__["default"]();
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
                }
            ]
        }
        this.ref = _util_util__WEBPACK_IMPORTED_MODULE_2__["default"].generateDOM(template).root;
    }
}

/***/ }),

/***/ "./src/components/FileMenu.js":
/*!************************************!*\
  !*** ./src/components/FileMenu.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FileMenu; });
/* harmony import */ var _util_Base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/Base */ "./src/util/Base.js");
/* harmony import */ var _container_Menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../container/Menu */ "./src/container/Menu.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../store/index */ "./src/store/index.js");
/* harmony import */ var _store_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store/action */ "./src/store/action.js");
/* harmony import */ var _util_util__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/util */ "./src/util/util.js");







class FileMenu extends _util_Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor() {
        super();
        let input = document.createElement('input');
        input.type = 'file';
        input.onchange = function () {
            let file = this.files[0];
            let url = URL.createObjectURL(file);
            let image = new Image();
            image.onload = function () {
                URL.revokeObjectURL(url);
                let layer = {
                    width: image.width,
                    height: image.height,
                    image: image,
                    name: _util_util__WEBPACK_IMPORTED_MODULE_4__["default"].deletePostfix(file.name),
                };
                let zoomX = image.width / (window.innerWidth - 100);
                let zoomY = image.height / (window.innerHeight - 100);
                let zoom = Math.max(zoomX, zoomY);
                if (!_store_index__WEBPACK_IMPORTED_MODULE_2__["default"].state.layers.length) {
                    _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_store_action__WEBPACK_IMPORTED_MODULE_3__["openFile"])(layer));
                    _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_store_action__WEBPACK_IMPORTED_MODULE_3__["changeZoom"])(zoom));
                } else {
                    _store_index__WEBPACK_IMPORTED_MODULE_2__["default"].dispatch(Object(_store_action__WEBPACK_IMPORTED_MODULE_3__["openFile"])(layer));
                    // store.dispatch(changeZoom(zoom));
                }
                input.value = null;
            }
            image.src = url;;
        }

        let menu = new _container_Menu__WEBPACK_IMPORTED_MODULE_1__["default"]([
            {
                name: '打开文件',
                callback: function () {
                    input.click();
                }
            },
            {
                name: '保存',
                callback: function () {
                    console.log('save')
                }
            },
            {
                name: '另存为',
                callback: function () {
                    console.log('save as');
                }
            }
        ], 'file-menu');
        this.ref = menu.ref;
    }
}

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





class Item {
    constructor(layer) {
        this.layer = layer;
        this.ref = this.render();
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
                    text: this.layer.layer.name,
                    title: this.layer.layer.name
                }
            ]
        }
        let {root, stamp} = _util_util__WEBPACK_IMPORTED_MODULE_2__["default"].generateDOM(template);
        stamp.src = _util_util__WEBPACK_IMPORTED_MODULE_2__["default"].generateStamp(this.layer.layer.image);
        return root;
    }
}

class LayerInfo extends _util_Base__WEBPACK_IMPORTED_MODULE_0__["default"]{
    constructor() {
        super();
        this.ref = this.render();    
    }

    render() {
        let template = {
            tagName: 'div',
            classList: ['layer-info'],
            children: []
        }
        // for (let i = 0; i < store.state.layers.length; i++) {
        //     template.push({
        //         component: new Item(store.state.layers[i])
        //     })
        // }
        return _util_util__WEBPACK_IMPORTED_MODULE_2__["default"].generateDOM(template).root;
    }

    addLayer(layer) {
        let item = new Item(layer);
        this.ref.appendChild(item.ref);
    }


}


/* harmony default export */ __webpack_exports__["default"] = (_util_util__WEBPACK_IMPORTED_MODULE_2__["default"].getSingleton(LayerInfo));

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





class DrawingBoard extends _util_Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor () {
        super();
        this.ref = this.render();
        this.layers = [];
    }

    render() {
        let template = {
            tagName: 'div',
            classList: ['drawing-board', 'absolute', 'vertical-align'],
        };
        return _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].generateDOM(template).root;
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
        this.layers.push({
            layer: layer,
            canvas: canvas
        });
        canvas.render(layer);
        this.ref.appendChild(canvas.ref);
    } 

    changeZoom(zoom) {
        
        let width = ~~(_store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.width / zoom);
        let height = ~~(_store_index__WEBPACK_IMPORTED_MODULE_3__["default"].state.height / zoom);
        this.ref.style.width = width + 'px';
        this.ref.style.height = height + 'px'
        this.layers.forEach(layer => {
            layer.canvas.ref.style.width = width + 'px';
            layer.canvas.ref.style.height = height + 'px';
        })
    }

    draw(layer) {
        let item = this.layers.find(item => item.layer = layer);
        if (item) {
            let canvas = item.canvas;
            canvas.render(layer);
        }
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
/* harmony import */ var _components_FileMenu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/FileMenu */ "./src/components/FileMenu.js");





class Header extends _util_Base__WEBPACK_IMPORTED_MODULE_0__["default"]{
    constructor () {
        super();
        let fileMenu = new _components_FileMenu__WEBPACK_IMPORTED_MODULE_2__["default"]();
        let template = {
            tagName: 'div',
            classList: ['header'],
            children: [
                {
                    component: fileMenu
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




class Main extends _util_Base__WEBPACK_IMPORTED_MODULE_0__["default"] {
    constructor () {
        super();
        this.ref = this.render();
    }

    render() {
        let drawingBoard = new _DrawingBoard__WEBPACK_IMPORTED_MODULE_2__["default"]();
        let template = {
            tagName: 'div',
            classList: ['main'],
            children: [
                {
                    component: drawingBoard
                }
            ]
        }
        return _util_util__WEBPACK_IMPORTED_MODULE_1__["default"].generateDOM(template).root;
        
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
/* harmony import */ var _css_menu_less__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/menu.less */ "./src/css/menu.less");
/* harmony import */ var _css_menu_less__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_css_menu_less__WEBPACK_IMPORTED_MODULE_2__);





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
        let dropListTemplate = {
            tagName: 'div',
            classList: ['menu-droplist', 'absolute', 'hide'],
            children: [],
            ref: 'dropList'
        }
        let template = {
            tagName: 'div',
            classList: ['menu', className],
            children: [
                {
                    tagName: 'div',
                    classList: ['menu-title'],
                    text: '文件',
                    ref: 'title'
                },
                dropListTemplate
            ]
        }
        for (let prop of props) {
            let item = new Item(prop.name, prop.callback);
            dropListTemplate.children.push({
                component: item
            });
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

/***/ "./src/css/header.less":
/*!*****************************!*\
  !*** ./src/css/header.less ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./header.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/header.less");

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

/***/ "./src/css/menu.less":
/*!***************************!*\
  !*** ./src/css/menu.less ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/less-loader/dist/cjs.js!./menu.less */ "./node_modules/css-loader/dist/cjs.js!./node_modules/less-loader/dist/cjs.js!./src/css/menu.less");

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
/*! exports provided: ActionType, openFile, changeZoom */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return ActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openFile", function() { return openFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "changeZoom", function() { return changeZoom; });

const ActionType = {
    OPEN_FILE: 0,
    CHANGE_ZOOM: 1,
}

function openFile(layer) {
    return {
        type: ActionType.OPEN_FILE,
        payload: {
            layer: layer,
            steps: []
        }
    }
}

function changeZoom(zoom) {
    return {
        type: ActionType.CHANGE_ZOOM,
        payload: zoom
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
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./state */ "./src/store/state.js");
/* harmony import */ var _action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./action */ "./src/store/action.js");
/* harmony import */ var _container_DrawingBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../container/DrawingBoard */ "./src/container/DrawingBoard.js");
/* harmony import */ var _components_LayerInfo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/LayerInfo */ "./src/components/LayerInfo.js");






/* harmony default export */ __webpack_exports__["default"] = (function (state, action) {
    let drawingBoard = new _container_DrawingBoard__WEBPACK_IMPORTED_MODULE_2__["default"]();
    let layerInfo = new _components_LayerInfo__WEBPACK_IMPORTED_MODULE_3__["default"]();
    switch(action.type) {
        case _action__WEBPACK_IMPORTED_MODULE_1__["ActionType"].OPEN_FILE:
            if (!state.layers.length) {
                state.width = action.payload.layer.width;
                state.height = action.payload.layer.height;

            }
            let style = {};
            style.position_x1 = (state.width - action.payload.layer.width) / 2 / state.width;
            style.position_x2 = style.position_x1 + (action.payload.layer.width) / state.width;
            style.position_y1 = (state.height - action.payload.layer.height) / 2 / state.height;
            style.position_y2 = style.position_y1 + (action.payload.layer.height) / state.height;
            action.payload.layer.style = style;
            state.layers.push(action.payload);
            drawingBoard.addCanvas(action.payload);
            layerInfo.addLayer(action.payload);
            break;
        case _action__WEBPACK_IMPORTED_MODULE_1__["ActionType"].CHANGE_ZOOM:
            state.zoom = action.payload;
            drawingBoard.changeZoom(action.payload);
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
    zoom: 1
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

/***/ "./src/util/util.js":
/*!**************************!*\
  !*** ./src/util/util.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function generateDOM(t) {
    function createElement(tagName, classList, text, title) {
        let doc = document.createElement(tagName);
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
    while (queue.length) {
        let current = queue.shift();
        let dom;
        if (current.template.component) {
            dom = current.template.component.ref;
        } else {
            dom = createElement(current.template.tagName, current.template.classList, current.template.text, current.template.title);
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


function getSingleton (fn) {
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

/* harmony default export */ __webpack_exports__["default"] = ({
    generateDOM,
    getSingleton,
    generateStamp,
    deletePostfix
});

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




class RenderContext {
    /**
     * 
     * @param {HTMLCanvasElement} canvas 
     */
    constructor(canvas) {
        /**
         * @type {WebGL2RenderingContext | WebGLRenderingContext}
         */
        let gl = canvas.getContext('webgl2');
        if (!gl) {
            gl = canvas.getContext('webgl');
        }
        if (!gl) {
            alert('您的显卡/浏览器不支持WEBGL！无法使用该应用程序！');
            throw new Error('cannot support webgl!');
        }

        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 1);

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
            normal: new _filter_Normal__WEBPACK_IMPORTED_MODULE_0__["default"](gl, projectionMat)
        }

        let originTexture = _util__WEBPACK_IMPORTED_MODULE_1__["default"].createTexture(gl);

        this.filters = filters;
        this.gl = gl;
        this.originTexture = originTexture;
    }

    render(layer) {
        let imageWidth = layer.layer.width;
        let imageHeight = layer.layer.height;
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
        this.gl.useProgram(this.filters.normal.program);
        this.gl.bufferData(this.gl.ARRAY_BUFFER, points, this.gl.STATIC_DRAW);
        this.gl.bindTexture(this.gl.TEXTURE_2D, this.originTexture);
        this.gl.texImage2D(this.gl.TEXTURE_2D, 0, this.gl.RGBA, this.gl.RGBA, this.gl.UNSIGNED_BYTE, layer.layer.image);
        for (let step of layer.steps) {

        }

        this.gl.drawArrays(this.gl.TRIANGLES, 0, 6);
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
        void main () {
            gl_Position = u_projection * a_position;
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

        // let u_resolution = gl.getUniformLocation(program, 'u_resultion');
        // gl.uniform2f(u_resolution, gl.canvas.width, gl.canvas.height);
        
        gl.enableVertexAttribArray(a_position);
        gl.vertexAttribPointer(a_position, 2, gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 4, 0);
        
        gl.enableVertexAttribArray(a_texCoord);
        gl.vertexAttribPointer(a_texCoord, 2, gl.FLOAT, false, Float32Array.BYTES_PER_ELEMENT * 4, Float32Array.BYTES_PER_ELEMENT * 2);

        this.a_position = a_position;
        this.u_projection = u_projection;
        this.program = program;
        this.gl = gl;
    }


    enableVertexArray(size, stride, offset) {
        this.gl.enableVertexAttribArray(this.a_position);
        this.gl.vertexAttribPointer(this.a_position, size, this.gl.FLOAT, false, stride, offset);
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
    switch(axis) {
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
    for(i = 0, j = number - 1; i < number; j = i++) {
        if(((verY[i] > testY) !== (verY[j] > testY)) &&
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
         canvas.width / 2 + 1.732 * r, canvas.height / 2- r, 0.5 + 1.732 * r / canvas.width, 0.5 - r / canvas.height
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



function createPerspective(near, far, l, r, t ,b) {    
    let rangeInv = 1.0 / (far - near);

    let n = near;
    return [
      2 * n / (r - l), 0, 0, 0,
      0, 2 * n / (t - b), 0, 0,
      - (r + l) / (r - l), -(t + b) / (t - b), (near + far) * rangeInv, 1,
      0, 0, -near * far * rangeInv * 2, 0
    ];
}

function createEditor (name, type = 'range', min, max, value, step = 1) {
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
            set (value) {
                oninput = value;
            },
            get () {
                return oninput;
            }
        },
        ref: {
            get () {
                return wrapper;
            }
        },
        step: {
            set (value) {
                input.step = value;
            }
        },
        value: {
            get () {
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
    var tmp_0  = m22 * m33;
    var tmp_1  = m32 * m23;
    var tmp_2  = m12 * m33;
    var tmp_3  = m32 * m13;
    var tmp_4  = m12 * m23;
    var tmp_5  = m22 * m13;
    var tmp_6  = m02 * m33;
    var tmp_7  = m32 * m03;
    var tmp_8  = m02 * m23;
    var tmp_9  = m22 * m03;
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
            a[0] * b[1] - a[1] * b[0]];
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
  
  function lookAt (cameraPosition, target, up) {
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
    lookAt
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9oZWFkZXIubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL21lbnUubGVzcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL3N0eWxlLmxlc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9GaWxlTWVudS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXllci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9MYXllckluZm8uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9EcmF3aW5nQm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9IZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRhaW5lci9JbmZvLmpzIiwid2VicGFjazovLy8uL3NyYy9jb250YWluZXIvTWFpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGFpbmVyL01lbnUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9oZWFkZXIubGVzcz8xNDRkIiwid2VicGFjazovLy8uL3NyYy9jc3MvbWVudS5sZXNzPzZhMTAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9zdHlsZS5sZXNzPzQ4MDgiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL2FjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RvcmUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3JlZHVjZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0b3JlL3N0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlsL0Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvdXRpbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvd2ViZ2wvV2ViR0wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYmdsL2ZpbHRlci9Ob3JtYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3dlYmdsL3V0aWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQTRCOztBQUU1QixjQUFjLGdEQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQSxtQzs7Ozs7Ozs7Ozs7QUNUQSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxjQUFjLFFBQVMsWUFBWSxrQkFBa0IscUJBQXFCLEdBQUc7Ozs7Ozs7Ozs7OztBQ0Y3RSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FB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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2pDQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDOzs7Ozs7Ozs7Ozs7QUNwQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsQ0FBQzs7O0FBR0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTJDO0FBQ2pCO0FBQ1M7O0FBRXBCO0FBQ2Y7QUFDQTtBQUNBLGVBQWUsa0JBQWtCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsaUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7O0FBRUEsNEJBQTRCLDZDQUFJO0FBQ2hDO0FBQ0Esd0JBQXdCLHNEQUFZO0FBQ3BDOztBQUVBLDRCQUE0Qiw2Q0FBSTs7QUFFaEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG9EQUFLO0FBQzVCLHVCQUF1QixvREFBSztBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ2pGQTtBQUFBO0FBQUE7QUFBNkI7OztBQUdkO0FBQ2Y7QUFDQTtBQUNBLGVBQWUsNkNBQTZDO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLDZDQUFNOztBQUU1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQ3pEQTtBQUFBO0FBQ0E7QUFDQSxXQUFXLHVCQUF1QjtBQUNsQyxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEMsV0FBVyxZQUFZO0FBQ3ZCLFdBQVcsWUFBWTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyx1QkFBdUI7QUFDbEMsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEIsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLE9BQU87QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLHNCQUFzQjtBQUNq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Q2I7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEMiLCJmaWxlIjoid2VicGFjay1idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IEFwcCBmcm9tICcuL3NyYy9BcHAnO1xyXG5cclxubGV0IGFwcCA9IG5ldyBBcHAoKTtcclxuZG9jdW1lbnQub25zZWxlY3QgPSBmdW5jdGlvbiAoZSkge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxufVxyXG5cclxuXHJcbmRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoYXBwLnJlZik7IiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIuaGVhZGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBwYWRkaW5nOiAzcHggNXB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIubWVudS1kcm9wbGlzdCB7XFxuICB3aWR0aDogMTAwcHg7XFxuICBtYXJnaW4tdG9wOiA1cHg7XFxuICBib3JkZXI6IDFweCBzb2xpZCAjMmUyZTJlO1xcbiAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMXB4ICMwMDA7XFxufVxcblwiLCBcIlwiXSk7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgbWFyZ2luOiAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRlNGU0ZTtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbn1cXG5jYW52YXMge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxufVxcbi5oaWRlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcbi5hYnNvbHV0ZSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxufVxcbi52ZXJ0aWNhbC1hbGlnbiB7XFxuICB0b3A6IDUwJTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG4udG9wIHtcXG4gIHRvcDogMDtcXG59XFxuLmxlZnQge1xcbiAgbGVmdDogMDtcXG59XFxuLmZsZXgge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcbi5oZWFkZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgbGVmdDogMDtcXG4gIHJpZ2h0OiAwO1xcbiAgdG9wOiAwO1xcbiAgaGVpZ2h0OiAyOHB4O1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4ubWFpbiB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDI4cHg7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB6LWluZGV4OiAtMTtcXG4gIHJpZ2h0OiAyMDBweDtcXG59XFxuLm1haW4gLmRyYXdpbmctYm9hcmQge1xcbiAgZm9udC1zaXplOiAwO1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCAxcHggIzAwMDtcXG59XFxuLmluZm8ge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAyOHB4O1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxuICB3aWR0aDogMjAwcHg7XFxuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICMwMDA7XFxufVxcbi5pbmZvIC5sYXllci1pbmZvIHtcXG4gIGhlaWdodDogNTAwcHg7XFxuICBvdmVyZmxvdy15OiBhdXRvO1xcbn1cXG4uaW5mbyAubGF5ZXItaW5mbyAubGF5ZXItaXRlbSB7XFxuICBtYXJnaW46IDEwcHggMCAxMHB4IDVweDtcXG59XFxuLmluZm8gLmxheWVyLWluZm8gLmxheWVyLWl0ZW1fX3RpdGxlIHtcXG4gIGZsZXg6IDE7XFxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBsaW5lLWhlaWdodDogMjBweDtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXG59XFxuXCIsIFwiXCJdKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwie1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW19pXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCIoXCIuY29uY2F0KGl0ZW1bMl0sIFwiKSBhbmQgKFwiKS5jb25jYXQobWVkaWFRdWVyeSwgXCIpXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlcyA9IFtdO1xuICB2YXIgbmV3U3R5bGVzID0ge307XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjc3MgPSBpdGVtWzFdO1xuICAgIHZhciBtZWRpYSA9IGl0ZW1bMl07XG4gICAgdmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG4gICAgdmFyIHBhcnQgPSB7XG4gICAgICBjc3M6IGNzcyxcbiAgICAgIG1lZGlhOiBtZWRpYSxcbiAgICAgIHNvdXJjZU1hcDogc291cmNlTWFwXG4gICAgfTtcblxuICAgIGlmICghbmV3U3R5bGVzW2lkXSkge1xuICAgICAgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtcbiAgICAgICAgaWQ6IGlkLFxuICAgICAgICBwYXJ0czogW3BhcnRdXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgIHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuICAgIHZhciBqID0gMDtcblxuICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgZG9tU3R5bGUucmVmcysrO1xuXG4gICAgICBmb3IgKDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgIGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuICAgICAgfVxuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBwYXJ0cyA9IFtdO1xuXG4gICAgICBmb3IgKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgcGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG4gICAgICB9XG5cbiAgICAgIHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge1xuICAgICAgICBpZDogaXRlbS5pZCxcbiAgICAgICAgcmVmczogMSxcbiAgICAgICAgcGFydHM6IHBhcnRzXG4gICAgICB9O1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5hdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIG9wdGlvbnMuYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKG9wdGlvbnMuYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgb3B0aW9ucy5hdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIG9wdGlvbnMuYXR0cmlidXRlcyA9IHR5cGVvZiBvcHRpb25zLmF0dHJpYnV0ZXMgPT09ICdvYmplY3QnID8gb3B0aW9ucy5hdHRyaWJ1dGVzIDoge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgdmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcbiAgYWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgdmFyIG1heVJlbW92ZSA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gc3R5bGVzW2ldO1xuICAgICAgdmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cbiAgICAgIGlmIChkb21TdHlsZSkge1xuICAgICAgICBkb21TdHlsZS5yZWZzLS07XG4gICAgICAgIG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAobmV3TGlzdCkge1xuICAgICAgdmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcbiAgICAgIGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1heVJlbW92ZS5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfZG9tU3R5bGUgPSBtYXlSZW1vdmVbX2ldO1xuXG4gICAgICBpZiAoX2RvbVN0eWxlLnJlZnMgPT09IDApIHtcbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBfZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBfZG9tU3R5bGUucGFydHNbal0oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRlbGV0ZSBzdHlsZXNJbkRvbVtfZG9tU3R5bGUuaWRdO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn07IiwiaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbnRhaW5lci9IZWFkZXInO1xyXG5pbXBvcnQgTWFpbiBmcm9tICcuL2NvbnRhaW5lci9NYWluJztcclxuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsL3V0aWwnO1xyXG5pbXBvcnQgJy4vY3NzL3N0eWxlLmxlc3MnO1xyXG5pbXBvcnQgJy4vY3NzL2hlYWRlci5sZXNzJztcclxuaW1wb3J0IEluZm8gZnJvbSAnLi9jb250YWluZXIvSW5mbyc7XHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBsZXQgaGVhZGVyID0gbmV3IEhlYWRlcigpO1xyXG4gICAgICAgIGxldCBtYWluID0gbmV3IE1haW4oKTtcclxuICAgICAgICBsZXQgaW5mbyA9IG5ldyBJbmZvKCk7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xyXG4gICAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcclxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ215LWFwcCddLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogaGVhZGVyXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogbWFpblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IGluZm9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLnJlZiA9IHV0aWwuZ2VuZXJhdGVET00odGVtcGxhdGUpLnJvb3Q7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZSBmcm9tICcuLi91dGlsL0Jhc2UnO1xyXG5pbXBvcnQgTWVudSBmcm9tICcuLi9jb250YWluZXIvTWVudSc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XHJcbmltcG9ydCB7IG9wZW5GaWxlLCBjaGFuZ2Vab29tLCBBY3Rpb25UeXBlIH0gZnJvbSAnLi4vc3RvcmUvYWN0aW9uJztcclxuaW1wb3J0IHV0aWwgZnJvbSAnLi4vdXRpbC91dGlsJztcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGaWxlTWVudSBleHRlbmRzIEJhc2Uge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBsZXQgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgIGlucHV0LnR5cGUgPSAnZmlsZSc7XHJcbiAgICAgICAgaW5wdXQub25jaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxldCBmaWxlID0gdGhpcy5maWxlc1swXTtcclxuICAgICAgICAgICAgbGV0IHVybCA9IFVSTC5jcmVhdGVPYmplY3RVUkwoZmlsZSk7XHJcbiAgICAgICAgICAgIGxldCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWFnZS5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICBVUkwucmV2b2tlT2JqZWN0VVJMKHVybCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGF5ZXIgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IGltYWdlLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogaW1hZ2UuaGVpZ2h0LFxyXG4gICAgICAgICAgICAgICAgICAgIGltYWdlOiBpbWFnZSxcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiB1dGlsLmRlbGV0ZVBvc3RmaXgoZmlsZS5uYW1lKSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICBsZXQgem9vbVggPSBpbWFnZS53aWR0aCAvICh3aW5kb3cuaW5uZXJXaWR0aCAtIDEwMCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgem9vbVkgPSBpbWFnZS5oZWlnaHQgLyAod2luZG93LmlubmVySGVpZ2h0IC0gMTAwKTtcclxuICAgICAgICAgICAgICAgIGxldCB6b29tID0gTWF0aC5tYXgoem9vbVgsIHpvb21ZKTtcclxuICAgICAgICAgICAgICAgIGlmICghc3RvcmUuc3RhdGUubGF5ZXJzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKG9wZW5GaWxlKGxheWVyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RvcmUuZGlzcGF0Y2goY2hhbmdlWm9vbSh6b29tKSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0b3JlLmRpc3BhdGNoKG9wZW5GaWxlKGxheWVyKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3RvcmUuZGlzcGF0Y2goY2hhbmdlWm9vbSh6b29tKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1hZ2Uuc3JjID0gdXJsOztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCBtZW51ID0gbmV3IE1lbnUoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAn5omT5byA5paH5Lu2JyxcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5wdXQuY2xpY2soKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+S/neWtmCcsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlJylcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ+WPpuWtmOS4uicsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzYXZlIGFzJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLCAnZmlsZS1tZW51Jyk7XHJcbiAgICAgICAgdGhpcy5yZWYgPSBtZW51LnJlZjtcclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlIGZyb20gJy4uL3V0aWwvQmFzZSc7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWwvdXRpbCc7XHJcbmltcG9ydCBSZW5kZXJDb250ZXh0IGZyb20gJy4uL3dlYmdsL1dlYkdMJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExheWVyIGV4dGVuZHMgQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih3aWR0aCwgaGVpZ2h0KSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6ICdjYW52YXMnLFxyXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFsnY2FudmFzJywgJ2Fic29sdXRlJywgJ2xlZnQnLCAndG9wJ11cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgdGhpcy5yZWYgPSB1dGlsLmdlbmVyYXRlRE9NKHRlbXBsYXRlKS5yb290O1xyXG4gICAgICAgIHRoaXMucmVmLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5yZWYuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMucmVuZGVyQ29udGV4dCA9IG5ldyBSZW5kZXJDb250ZXh0KHRoaXMucmVmKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIobGF5ZXIpIHtcclxuICAgICAgICB0aGlzLnJlbmRlckNvbnRleHQucmVuZGVyKGxheWVyKTtcclxuICAgIH1cclxufSIsImltcG9ydCBCYXNlIGZyb20gJy4uL3V0aWwvQmFzZSc7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWwvdXRpbCc7XHJcblxyXG5cclxuY2xhc3MgSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3RvcihsYXllcikge1xyXG4gICAgICAgIHRoaXMubGF5ZXIgPSBsYXllcjtcclxuICAgICAgICB0aGlzLnJlZiA9IHRoaXMucmVuZGVyKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcclxuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgIGNsYXNzTGlzdDogWydsYXllci1pdGVtJywgJ2ZsZXgnXSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICB0YWdOYW1lOiAnaW1nJyxcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc0xpc3Q6IFsnbGF5ZXItaXRlbV9fc3RhbXAnXSxcclxuICAgICAgICAgICAgICAgICAgICByZWY6ICdzdGFtcCdcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ2xheWVyLWl0ZW1fX3RpdGxlJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogdGhpcy5sYXllci5sYXllci5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0aGlzLmxheWVyLmxheWVyLm5hbWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQge3Jvb3QsIHN0YW1wfSA9IHV0aWwuZ2VuZXJhdGVET00odGVtcGxhdGUpO1xyXG4gICAgICAgIHN0YW1wLnNyYyA9IHV0aWwuZ2VuZXJhdGVTdGFtcCh0aGlzLmxheWVyLmxheWVyLmltYWdlKTtcclxuICAgICAgICByZXR1cm4gcm9vdDtcclxuICAgIH1cclxufVxyXG5cclxuY2xhc3MgTGF5ZXJJbmZvIGV4dGVuZHMgQmFzZXtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZWYgPSB0aGlzLnJlbmRlcigpOyAgICBcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xyXG4gICAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcclxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ2xheWVyLWluZm8nXSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIGZvciAobGV0IGkgPSAwOyBpIDwgc3RvcmUuc3RhdGUubGF5ZXJzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgLy8gICAgIHRlbXBsYXRlLnB1c2goe1xyXG4gICAgICAgIC8vICAgICAgICAgY29tcG9uZW50OiBuZXcgSXRlbShzdG9yZS5zdGF0ZS5sYXllcnNbaV0pXHJcbiAgICAgICAgLy8gICAgIH0pXHJcbiAgICAgICAgLy8gfVxyXG4gICAgICAgIHJldHVybiB1dGlsLmdlbmVyYXRlRE9NKHRlbXBsYXRlKS5yb290O1xyXG4gICAgfVxyXG5cclxuICAgIGFkZExheWVyKGxheWVyKSB7XHJcbiAgICAgICAgbGV0IGl0ZW0gPSBuZXcgSXRlbShsYXllcik7XHJcbiAgICAgICAgdGhpcy5yZWYuYXBwZW5kQ2hpbGQoaXRlbS5yZWYpO1xyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB1dGlsLmdldFNpbmdsZXRvbihMYXllckluZm8pOyIsImltcG9ydCBCYXNlIGZyb20gJy4uL3V0aWwvQmFzZSc7XHJcbmltcG9ydCB1dGlsIGZyb20gJy4uL3V0aWwvdXRpbCc7XHJcbmltcG9ydCBDYW52YXMgZnJvbSAnLi4vY29tcG9uZW50cy9MYXllcic7XHJcbmltcG9ydCBzdG9yZSBmcm9tICcuLi9zdG9yZS9pbmRleCc7XHJcblxyXG5jbGFzcyBEcmF3aW5nQm9hcmQgZXh0ZW5kcyBCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucmVmID0gdGhpcy5yZW5kZXIoKTtcclxuICAgICAgICB0aGlzLmxheWVycyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxyXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFsnZHJhd2luZy1ib2FyZCcsICdhYnNvbHV0ZScsICd2ZXJ0aWNhbC1hbGlnbiddLFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgcmV0dXJuIHV0aWwuZ2VuZXJhdGVET00odGVtcGxhdGUpLnJvb3Q7XHJcbiAgICB9XHJcblxyXG4gICAgYWRkQ2FudmFzKGxheWVyKSB7ICAgICAgICBcclxuICAgICAgICBsZXQgd2lkdGggPSB+fihzdG9yZS5zdGF0ZS53aWR0aCAvIHN0b3JlLnN0YXRlLnpvb20pO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSB+fihzdG9yZS5zdGF0ZS5oZWlnaHQgLyBzdG9yZS5zdGF0ZS56b29tKTtcclxuICAgICAgICBsZXQgY2FudmFzO1xyXG4gICAgICAgIGlmIChzdG9yZS5zdGF0ZS53aWR0aCAmJiBzdG9yZS5zdGF0ZS5oZWlnaHQpIHtcclxuICAgICAgICAgICAgY2FudmFzID0gbmV3IENhbnZhcyhzdG9yZS5zdGF0ZS53aWR0aCwgc3RvcmUuc3RhdGUuaGVpZ2h0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYW52YXMgPSBuZXcgQ2FudmFzKGxheWVyLndpZHRoLCBsYXllci5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjYW52YXMucmVmLnN0eWxlLndpZHRoID0gd2lkdGggKyAncHgnO1xyXG4gICAgICAgIGNhbnZhcy5yZWYuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB0aGlzLmxheWVycy5wdXNoKHtcclxuICAgICAgICAgICAgbGF5ZXI6IGxheWVyLFxyXG4gICAgICAgICAgICBjYW52YXM6IGNhbnZhc1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIGNhbnZhcy5yZW5kZXIobGF5ZXIpO1xyXG4gICAgICAgIHRoaXMucmVmLmFwcGVuZENoaWxkKGNhbnZhcy5yZWYpO1xyXG4gICAgfSBcclxuXHJcbiAgICBjaGFuZ2Vab29tKHpvb20pIHtcclxuICAgICAgICBcclxuICAgICAgICBsZXQgd2lkdGggPSB+fihzdG9yZS5zdGF0ZS53aWR0aCAvIHpvb20pO1xyXG4gICAgICAgIGxldCBoZWlnaHQgPSB+fihzdG9yZS5zdGF0ZS5oZWlnaHQgLyB6b29tKTtcclxuICAgICAgICB0aGlzLnJlZi5zdHlsZS53aWR0aCA9IHdpZHRoICsgJ3B4JztcclxuICAgICAgICB0aGlzLnJlZi5zdHlsZS5oZWlnaHQgPSBoZWlnaHQgKyAncHgnXHJcbiAgICAgICAgdGhpcy5sYXllcnMuZm9yRWFjaChsYXllciA9PiB7XHJcbiAgICAgICAgICAgIGxheWVyLmNhbnZhcy5yZWYuc3R5bGUud2lkdGggPSB3aWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIGxheWVyLmNhbnZhcy5yZWYuc3R5bGUuaGVpZ2h0ID0gaGVpZ2h0ICsgJ3B4JztcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGRyYXcobGF5ZXIpIHtcclxuICAgICAgICBsZXQgaXRlbSA9IHRoaXMubGF5ZXJzLmZpbmQoaXRlbSA9PiBpdGVtLmxheWVyID0gbGF5ZXIpO1xyXG4gICAgICAgIGlmIChpdGVtKSB7XHJcbiAgICAgICAgICAgIGxldCBjYW52YXMgPSBpdGVtLmNhbnZhcztcclxuICAgICAgICAgICAgY2FudmFzLnJlbmRlcihsYXllcik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHV0aWwuZ2V0U2luZ2xldG9uKERyYXdpbmdCb2FyZCk7IiwiaW1wb3J0IEJhc2UgZnJvbSAnLi4vdXRpbC9CYXNlJztcclxuaW1wb3J0IHV0aWwgZnJvbSAnLi4vdXRpbC91dGlsJztcclxuaW1wb3J0IEZpbGVNZW51IGZyb20gJy4uL2NvbXBvbmVudHMvRmlsZU1lbnUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIEJhc2V7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBsZXQgZmlsZU1lbnUgPSBuZXcgRmlsZU1lbnUoKTtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxyXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFsnaGVhZGVyJ10sXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBmaWxlTWVudVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVmID0gdXRpbC5nZW5lcmF0ZURPTSh0ZW1wbGF0ZSkucm9vdDtcclxuICAgICAgICBcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgQmFzZSBmcm9tICcuLi91dGlsL0Jhc2UnO1xyXG5pbXBvcnQgTGF5ZXJJbmZvIGZyb20gJy4uL2NvbXBvbmVudHMvTGF5ZXJJbmZvJztcclxuaW1wb3J0IHV0aWwgZnJvbSAnLi4vdXRpbC91dGlsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm8gZXh0ZW5kcyBCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5yZWYgPSB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICBsZXQgbGF5ZXJJbmZvID0gbmV3IExheWVySW5mbygpO1xyXG4gICAgICAgIGxldCB0ZW1wbGF0ZSA9IHtcclxuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgIGNsYXNzTGlzdDogJ2luZm8nLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogbGF5ZXJJbmZvXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHV0aWwuZ2VuZXJhdGVET00odGVtcGxhdGUpLnJvb3Q7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZSBmcm9tICcuLi91dGlsL0Jhc2UnO1xyXG5pbXBvcnQgdXRpbCBmcm9tICcuLi91dGlsL3V0aWwnO1xyXG5pbXBvcnQgRHJhd2luZ0JvYXJkIGZyb20gJy4vRHJhd2luZ0JvYXJkJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBCYXNlIHtcclxuICAgIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMucmVmID0gdGhpcy5yZW5kZXIoKTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgbGV0IGRyYXdpbmdCb2FyZCA9IG5ldyBEcmF3aW5nQm9hcmQoKTtcclxuICAgICAgICBsZXQgdGVtcGxhdGUgPSB7XHJcbiAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxyXG4gICAgICAgICAgICBjbGFzc0xpc3Q6IFsnbWFpbiddLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogZHJhd2luZ0JvYXJkXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHV0aWwuZ2VuZXJhdGVET00odGVtcGxhdGUpLnJvb3Q7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgQmFzZSBmcm9tICcuLi91dGlsL0Jhc2UnO1xyXG5pbXBvcnQgdXRpbCBmcm9tICcuLi91dGlsL3V0aWwnO1xyXG5pbXBvcnQgJy4uL2Nzcy9tZW51Lmxlc3MnXHJcblxyXG5cclxuY2xhc3MgSXRlbSB7XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0LCBvbmNsaWNrKSB7XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xyXG4gICAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcclxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ21lbnUtaXRlbSddLFxyXG4gICAgICAgICAgICB0ZXh0OiB0ZXh0XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRoaXMucmVmID0gdXRpbC5nZW5lcmF0ZURPTSh0ZW1wbGF0ZSkucm9vdDtcclxuICAgICAgICB0aGlzLnJlZi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uY2xpY2spO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNZW51IGV4dGVuZHMgQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcywgY2xhc3NOYW1lKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICBsZXQgZHJvcExpc3RUZW1wbGF0ZSA9IHtcclxuICAgICAgICAgICAgdGFnTmFtZTogJ2RpdicsXHJcbiAgICAgICAgICAgIGNsYXNzTGlzdDogWydtZW51LWRyb3BsaXN0JywgJ2Fic29sdXRlJywgJ2hpZGUnXSxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtdLFxyXG4gICAgICAgICAgICByZWY6ICdkcm9wTGlzdCdcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHRlbXBsYXRlID0ge1xyXG4gICAgICAgICAgICB0YWdOYW1lOiAnZGl2JyxcclxuICAgICAgICAgICAgY2xhc3NMaXN0OiBbJ21lbnUnLCBjbGFzc05hbWVdLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhZ05hbWU6ICdkaXYnLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTGlzdDogWydtZW51LXRpdGxlJ10sXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ+aWh+S7ticsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVmOiAndGl0bGUnXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZHJvcExpc3RUZW1wbGF0ZVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IHByb3Agb2YgcHJvcHMpIHtcclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSBuZXcgSXRlbShwcm9wLm5hbWUsIHByb3AuY2FsbGJhY2spO1xyXG4gICAgICAgICAgICBkcm9wTGlzdFRlbXBsYXRlLmNoaWxkcmVuLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBpdGVtXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQge3Jvb3QsIHRpdGxlLCBkcm9wTGlzdH0gPSB1dGlsLmdlbmVyYXRlRE9NKHRlbXBsYXRlKTtcclxuICAgICAgICB0aGlzLnJlZiA9IHJvb3Q7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRpdGxlLm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoYXQudG9nZ2xlLmNhbGwoZHJvcExpc3QpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGRyb3BMaXN0Lm9uY2xpY2sgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHRoYXQudG9nZ2xlLmNhbGwoZHJvcExpc3QpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlKCkge1xyXG4gICAgICAgIGlmICh0aGlzLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsInZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL2xlc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaGVhZGVyLmxlc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tZW51Lmxlc3NcIik7XG5cbmlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xufVxuXG52YXIgb3B0aW9ucyA9IHt9XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmIChjb250ZW50LmxvY2Fscykge1xuICBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xufVxuIiwidmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvbGVzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5sZXNzXCIpO1xuXG5pZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbn1cblxudmFyIG9wdGlvbnMgPSB7fVxuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZiAoY29udGVudC5sb2NhbHMpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2Fscztcbn1cbiIsIlxyXG5leHBvcnQgY29uc3QgQWN0aW9uVHlwZSA9IHtcclxuICAgIE9QRU5fRklMRTogMCxcclxuICAgIENIQU5HRV9aT09NOiAxLFxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gb3BlbkZpbGUobGF5ZXIpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5PUEVOX0ZJTEUsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICBsYXllcjogbGF5ZXIsXHJcbiAgICAgICAgICAgIHN0ZXBzOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZVpvb20oem9vbSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLkNIQU5HRV9aT09NLFxyXG4gICAgICAgIHBheWxvYWQ6IHpvb21cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgc3RhdGUgZnJvbSAnLi9zdGF0ZSc7XHJcbmltcG9ydCByZWR1Y2VyIGZyb20gJy4vcmVkdWNlcic7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVTdG9yZSAoc3RhdGUsIHJlZHVjZXIpIHtcclxuICAgIGZ1bmN0aW9uIGRpc3BhdGNoKGFjdGlvbikge1xyXG4gICAgICAgIHJlZHVjZXIoc3RhdGUsIGFjdGlvbik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHN0YXRlLFxyXG4gICAgICAgIGRpc3BhdGNoXHJcbiAgICB9O1xyXG59XHJcblxyXG5jb25zdCBzdG9yZSA9IGNyZWF0ZVN0b3JlKHN0YXRlLCByZWR1Y2VyKTtcclxud2luZG93LnN0b3JlID0gc3RvcmU7XHJcbmV4cG9ydCBkZWZhdWx0IHN0b3JlOyIsImltcG9ydCBzdGF0ZSBmcm9tICcuL3N0YXRlJztcclxuaW1wb3J0IHtBY3Rpb25UeXBlLCBvcGVuRmlsZX1mcm9tICcuL2FjdGlvbidcclxuaW1wb3J0IERyYXdpbmdCb2FyZCBmcm9tICcuLi9jb250YWluZXIvRHJhd2luZ0JvYXJkJztcclxuaW1wb3J0IExheWVySW5mbyBmcm9tICcuLi9jb21wb25lbnRzL0xheWVySW5mbyc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIGxldCBkcmF3aW5nQm9hcmQgPSBuZXcgRHJhd2luZ0JvYXJkKCk7XHJcbiAgICBsZXQgbGF5ZXJJbmZvID0gbmV3IExheWVySW5mbygpO1xyXG4gICAgc3dpdGNoKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSBBY3Rpb25UeXBlLk9QRU5fRklMRTpcclxuICAgICAgICAgICAgaWYgKCFzdGF0ZS5sYXllcnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0ZS53aWR0aCA9IGFjdGlvbi5wYXlsb2FkLmxheWVyLndpZHRoO1xyXG4gICAgICAgICAgICAgICAgc3RhdGUuaGVpZ2h0ID0gYWN0aW9uLnBheWxvYWQubGF5ZXIuaGVpZ2h0O1xyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgc3R5bGUgPSB7fTtcclxuICAgICAgICAgICAgc3R5bGUucG9zaXRpb25feDEgPSAoc3RhdGUud2lkdGggLSBhY3Rpb24ucGF5bG9hZC5sYXllci53aWR0aCkgLyAyIC8gc3RhdGUud2lkdGg7XHJcbiAgICAgICAgICAgIHN0eWxlLnBvc2l0aW9uX3gyID0gc3R5bGUucG9zaXRpb25feDEgKyAoYWN0aW9uLnBheWxvYWQubGF5ZXIud2lkdGgpIC8gc3RhdGUud2lkdGg7XHJcbiAgICAgICAgICAgIHN0eWxlLnBvc2l0aW9uX3kxID0gKHN0YXRlLmhlaWdodCAtIGFjdGlvbi5wYXlsb2FkLmxheWVyLmhlaWdodCkgLyAyIC8gc3RhdGUuaGVpZ2h0O1xyXG4gICAgICAgICAgICBzdHlsZS5wb3NpdGlvbl95MiA9IHN0eWxlLnBvc2l0aW9uX3kxICsgKGFjdGlvbi5wYXlsb2FkLmxheWVyLmhlaWdodCkgLyBzdGF0ZS5oZWlnaHQ7XHJcbiAgICAgICAgICAgIGFjdGlvbi5wYXlsb2FkLmxheWVyLnN0eWxlID0gc3R5bGU7XHJcbiAgICAgICAgICAgIHN0YXRlLmxheWVycy5wdXNoKGFjdGlvbi5wYXlsb2FkKTtcclxuICAgICAgICAgICAgZHJhd2luZ0JvYXJkLmFkZENhbnZhcyhhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGxheWVySW5mby5hZGRMYXllcihhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgQWN0aW9uVHlwZS5DSEFOR0VfWk9PTTpcclxuICAgICAgICAgICAgc3RhdGUuem9vbSA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICAgICAgICBkcmF3aW5nQm9hcmQuY2hhbmdlWm9vbShhY3Rpb24ucGF5bG9hZCk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIFxyXG4gICAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbGF5ZXJzOiBbXSxcclxuICAgIHdpZHRoOiAwLFxyXG4gICAgaGVpZ2h0OiAwLFxyXG4gICAgem9vbTogMVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQmFzZSB7XHJcbiAgICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICAgICAgdGhpcy5ldmVudExpc3QgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBvbihuYW1lLCBmbikge1xyXG4gICAgICAgIGlmICghdGhpcy5ldmVudExpc3RbbmFtZV0pIHtcclxuICAgICAgICAgICAgdGhpcy5ldmVudExpc3RbbmFtZV0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5ldmVudExpc3RbbmFtZV0ucHVzaChmbik7XHJcbiAgICB9XHJcblxyXG4gICAgb2ZmKG5hbWUsIGZuKSB7XHJcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuZXZlbnRMaXN0W25hbWVdO1xyXG4gICAgICAgIGlmICghYXJyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihuYW1lICsgJyBpcyBub3QgZXhpc3QnKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBsZXQgaW5kZXggPSBhcnIuaW5kZXhPZihmbik7XHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgYXJyLnNwbGljZShpbmRleCwgMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRpc3BhdGNoKCkge1xyXG4gICAgICAgIGxldCBuYW1lID0gQXJyYXkucHJvdG90eXBlLnNoaWZ0LmNhbGwoYXJndW1lbnRzKTtcclxuICAgICAgICBsZXQgYXJyID0gdGhpcy5ldmVudExpc3RbbmFtZV07XHJcbiAgICAgICAgaWYgKCFhcnIpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKG5hbWUgKyAnIGlzIG5vdCBleGlzdCcpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvciAobGV0IGZuIG9mIGFycikge1xyXG4gICAgICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn0iLCJmdW5jdGlvbiBnZW5lcmF0ZURPTSh0KSB7XHJcbiAgICBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KHRhZ05hbWUsIGNsYXNzTGlzdCwgdGV4dCwgdGl0bGUpIHtcclxuICAgICAgICBsZXQgZG9jID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKTtcclxuICAgICAgICBpZiAoY2xhc3NMaXN0KSB7XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNsYXNzTGlzdCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICAgICAgICAgIGRvYy5jbGFzc0xpc3QuYWRkKGNsYXNzTGlzdCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBjbGFzc05hbWUgb2YgY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jLmNsYXNzTGlzdC5hZGQoY2xhc3NOYW1lKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHRleHQpIHtcclxuICAgICAgICAgICAgZG9jLnRleHRDb250ZW50ID0gdGV4dDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmICh0aXRsZSkge1xyXG4gICAgICAgICAgICBkb2MudGl0bGUgPSB0aXRsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkb2M7XHJcbiAgICB9XHJcbiAgICBsZXQgcXVldWUgPSBbXTtcclxuICAgIGxldCBwYXJlbnRET007XHJcbiAgICBxdWV1ZS5wdXNoKHtcclxuICAgICAgICBwYXJlbnRET006IG51bGwsXHJcbiAgICAgICAgdGVtcGxhdGU6IHRcclxuICAgIH0pO1xyXG4gICAgbGV0IHJlZnMgPSB7fTtcclxuICAgIHdoaWxlIChxdWV1ZS5sZW5ndGgpIHtcclxuICAgICAgICBsZXQgY3VycmVudCA9IHF1ZXVlLnNoaWZ0KCk7XHJcbiAgICAgICAgbGV0IGRvbTtcclxuICAgICAgICBpZiAoY3VycmVudC50ZW1wbGF0ZS5jb21wb25lbnQpIHtcclxuICAgICAgICAgICAgZG9tID0gY3VycmVudC50ZW1wbGF0ZS5jb21wb25lbnQucmVmO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvbSA9IGNyZWF0ZUVsZW1lbnQoY3VycmVudC50ZW1wbGF0ZS50YWdOYW1lLCBjdXJyZW50LnRlbXBsYXRlLmNsYXNzTGlzdCwgY3VycmVudC50ZW1wbGF0ZS50ZXh0LCBjdXJyZW50LnRlbXBsYXRlLnRpdGxlKTtcclxuICAgICAgICAgICAgaWYgKGN1cnJlbnQudGVtcGxhdGUucmVmKSB7XHJcbiAgICAgICAgICAgICAgICByZWZzW2N1cnJlbnQudGVtcGxhdGUucmVmXSA9IGRvbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGN1cnJlbnQucGFyZW50RE9NKSB7XHJcbiAgICAgICAgICAgIGN1cnJlbnQucGFyZW50RE9NLmFwcGVuZENoaWxkKGRvbSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcGFyZW50RE9NID0gZG9tO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoY3VycmVudC50ZW1wbGF0ZS5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBjaGlsZCBvZiBjdXJyZW50LnRlbXBsYXRlLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgICAgICBxdWV1ZS5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRET006IGRvbSxcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogY2hpbGRcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgcmVmcyA9IHtcclxuICAgICAgICAuLi5yZWZzLFxyXG4gICAgICAgIHJvb3Q6IHBhcmVudERPTVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlZnM7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRTaW5nbGV0b24gKGZuKSB7XHJcbiAgICBsZXQgcmV0O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICBpZiAocmV0KSB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXQgPSBuZXcgZm4oYXJndW1lbnRzKTtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmNvbnN0IGdlbmVyYXRlU3RhbXAgPSAoZnVuY3Rpb24gKCkge1xyXG4gICAgbGV0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgbGV0IGNhY2hlV2lkdGgsIGNhY2hlSGVpZ2h0O1xyXG4gICAgbGV0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoaW1hZ2UsIHdpZHRoID0gODAsIGhlaWdodCA9IDUwKSB7XHJcbiAgICAgICAgaWYgKHdpZHRoICE9PSBjYWNoZVdpZHRoIHx8IGhlaWdodCAhPT0gY2FjaGVIZWlnaHQpIHtcclxuICAgICAgICAgICAgY2FjaGVXaWR0aCA9IHdpZHRoO1xyXG4gICAgICAgICAgICBjYWNoZUhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gY2FjaGVXaWR0aDtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IGNhY2hlSGVpZ2h0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgcmV0dXJuIGNhbnZhcy50b0RhdGFVUkwoKTtcclxuICAgICAgICBcclxuICAgIH1cclxufSgpKTtcclxuXHJcblxyXG5mdW5jdGlvbiBkZWxldGVQb3N0Zml4KGZpbGVuYW1lKSB7XHJcbiAgICBsZXQgYXJyID0gZmlsZW5hbWUuc3BsaXQoJy4nKTtcclxuICAgIHJldHVybiBhcnJbMF07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGdlbmVyYXRlRE9NLFxyXG4gICAgZ2V0U2luZ2xldG9uLFxyXG4gICAgZ2VuZXJhdGVTdGFtcCxcclxuICAgIGRlbGV0ZVBvc3RmaXhcclxufSIsImltcG9ydCBOb3JtYWxGaWx0ZXIgZnJvbSAnLi9maWx0ZXIvTm9ybWFsJztcclxuaW1wb3J0IHV0aWwgZnJvbSAnLi91dGlsJztcclxuaW1wb3J0IHN0b3JlIGZyb20gJy4uL3N0b3JlL2luZGV4JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlbmRlckNvbnRleHQge1xyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSB7SFRNTENhbnZhc0VsZW1lbnR9IGNhbnZhcyBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IoY2FudmFzKSB7XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICogQHR5cGUge1dlYkdMMlJlbmRlcmluZ0NvbnRleHQgfCBXZWJHTFJlbmRlcmluZ0NvbnRleHR9XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgbGV0IGdsID0gY2FudmFzLmdldENvbnRleHQoJ3dlYmdsMicpO1xyXG4gICAgICAgIGlmICghZ2wpIHtcclxuICAgICAgICAgICAgZ2wgPSBjYW52YXMuZ2V0Q29udGV4dCgnd2ViZ2wnKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFnbCkge1xyXG4gICAgICAgICAgICBhbGVydCgn5oKo55qE5pi+5Y2hL+a1j+iniOWZqOS4jeaUr+aMgVdFQkdM77yB5peg5rOV5L2/55So6K+l5bqU55So56iL5bqP77yBJyk7XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignY2Fubm90IHN1cHBvcnQgd2ViZ2whJyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnbC5waXhlbFN0b3JlaShnbC5VTlBBQ0tfRkxJUF9ZX1dFQkdMLCAxKTtcclxuXHJcbiAgICAgICAgbGV0IHdpZHRoID0gY2FudmFzLndpZHRoOyAgIFxyXG4gICAgICAgIGxldCBoZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG5cclxuICAgICAgICBsZXQgcG9pbnRzID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMCxcclxuICAgICAgICAgICAgd2lkdGgsIDAuMCwgMS4wLCAwLjAsXHJcbiAgICAgICAgICAgIHdpZHRoLCBoZWlnaHQsIDEuMCwgMS4wLFxyXG4gICAgICAgICAgICB3aWR0aCwgaGVpZ2h0LCAxLjAsIDEuMCxcclxuICAgICAgICAgICAgMC4wLCBoZWlnaHQsIDAuMCwgMS4wLFxyXG4gICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjBcclxuICAgICAgICBdKTtcclxuXHJcblxyXG4gICAgICAgIGxldCBidWZmZXIgPSBnbC5jcmVhdGVCdWZmZXIoKTtcclxuICAgICAgICBnbC5iaW5kQnVmZmVyKGdsLkFSUkFZX0JVRkZFUiwgYnVmZmVyKTtcclxuICAgICAgICBnbC5idWZmZXJEYXRhKGdsLkFSUkFZX0JVRkZFUiwgcG9pbnRzLCBnbC5TVEFUSUNfRFJBVyk7XHJcblxyXG4gICAgICAgIGxldCBwcm9qZWN0aW9uTWF0ID0gdXRpbC5jcmVhdGVQcm9qZWN0aW9uKHdpZHRoLCBoZWlnaHQsIDEpO1xyXG4gICAgICAgIGxldCBmaWx0ZXJzID0ge1xyXG4gICAgICAgICAgICBub3JtYWw6IG5ldyBOb3JtYWxGaWx0ZXIoZ2wsIHByb2plY3Rpb25NYXQpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXQgb3JpZ2luVGV4dHVyZSA9IHV0aWwuY3JlYXRlVGV4dHVyZShnbCk7XHJcblxyXG4gICAgICAgIHRoaXMuZmlsdGVycyA9IGZpbHRlcnM7XHJcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xyXG4gICAgICAgIHRoaXMub3JpZ2luVGV4dHVyZSA9IG9yaWdpblRleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgcmVuZGVyKGxheWVyKSB7XHJcbiAgICAgICAgbGV0IGltYWdlV2lkdGggPSBsYXllci5sYXllci53aWR0aDtcclxuICAgICAgICBsZXQgaW1hZ2VIZWlnaHQgPSBsYXllci5sYXllci5oZWlnaHQ7XHJcbiAgICAgICAgbGV0IG9mZnNldFggPSAoc3RvcmUuc3RhdGUud2lkdGggLSBpbWFnZVdpZHRoKSAvIDI7XHJcbiAgICAgICAgbGV0IG9mZnNldFkgPSAoc3RvcmUuc3RhdGUuaGVpZ2h0IC0gaW1hZ2VIZWlnaHQpIC8gMjtcclxuICAgICAgICBsZXQgcG9pbnRzID0gW1xyXG4gICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgIGltYWdlV2lkdGgsIDAuMCwgMS4wLCAwLjAsXHJcbiAgICAgICAgICAgIGltYWdlV2lkdGgsIGltYWdlSGVpZ2h0LCAxLjAsIDEuMCxcclxuICAgICAgICAgICAgaW1hZ2VXaWR0aCwgaW1hZ2VIZWlnaHQsIDEuMCwgMS4wLFxyXG4gICAgICAgICAgICAwLjAsIGltYWdlSGVpZ2h0LCAwLjAsIDEuMCxcclxuICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wLFxyXG4gICAgICAgIF1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBvaW50cy5sZW5ndGg7IGkgKz0gNCkge1xyXG4gICAgICAgICAgICBwb2ludHNbaV0gKz0gb2Zmc2V0WDtcclxuICAgICAgICAgICAgcG9pbnRzW2kgKyAxXSArPSBvZmZzZXRZO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwb2ludHMgPSBuZXcgRmxvYXQzMkFycmF5KHBvaW50cyk7XHJcbiAgICAgICAgdGhpcy5nbC51c2VQcm9ncmFtKHRoaXMuZmlsdGVycy5ub3JtYWwucHJvZ3JhbSk7XHJcbiAgICAgICAgdGhpcy5nbC5idWZmZXJEYXRhKHRoaXMuZ2wuQVJSQVlfQlVGRkVSLCBwb2ludHMsIHRoaXMuZ2wuU1RBVElDX0RSQVcpO1xyXG4gICAgICAgIHRoaXMuZ2wuYmluZFRleHR1cmUodGhpcy5nbC5URVhUVVJFXzJELCB0aGlzLm9yaWdpblRleHR1cmUpO1xyXG4gICAgICAgIHRoaXMuZ2wudGV4SW1hZ2UyRCh0aGlzLmdsLlRFWFRVUkVfMkQsIDAsIHRoaXMuZ2wuUkdCQSwgdGhpcy5nbC5SR0JBLCB0aGlzLmdsLlVOU0lHTkVEX0JZVEUsIGxheWVyLmxheWVyLmltYWdlKTtcclxuICAgICAgICBmb3IgKGxldCBzdGVwIG9mIGxheWVyLnN0ZXBzKSB7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5nbC5kcmF3QXJyYXlzKHRoaXMuZ2wuVFJJQU5HTEVTLCAwLCA2KTtcclxuICAgIH1cclxufSIsImltcG9ydCBnbFV0aWwgZnJvbSAnLi4vdXRpbCc7XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm9ybWFsRmlsdGVyIHtcclxuICAgIC8qKlxyXG4gICAgICogXHJcbiAgICAgKiBAcGFyYW0ge1dlYkdMMlJlbmRlcmluZ0NvbnRleHR8V2ViR0xSZW5kZXJpbmdDb250ZXh0fSBnbCBcclxuICAgICAqL1xyXG4gICAgY29uc3RydWN0b3IgKGdsLCBwcm9qZWN0aW9uTWF0KSB7XHJcbiAgICAgICAgY29uc3QgdmVydGV4U2hhZGVyID0gYFxyXG4gICAgICAgIGF0dHJpYnV0ZSB2ZWM0IGFfcG9zaXRpb247XHJcbiAgICAgICAgYXR0cmlidXRlIHZlYzIgYV90ZXhDb29yZDtcclxuICAgICAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgICAgICB1bmlmb3JtIG1hdDQgdV9wcm9qZWN0aW9uO1xyXG4gICAgICAgIHZvaWQgbWFpbiAoKSB7XHJcbiAgICAgICAgICAgIGdsX1Bvc2l0aW9uID0gdV9wcm9qZWN0aW9uICogYV9wb3NpdGlvbjtcclxuICAgICAgICAgICAgdl90ZXhDb29yZCA9IGFfdGV4Q29vcmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGA7XHJcblxyXG4gICAgICAgIGNvbnN0IGZyYWdtZW50U2hhZGVyID0gYFxyXG4gICAgICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVfdGV4dHVyZTtcclxuICAgICAgICB2YXJ5aW5nIHZlYzIgdl90ZXhDb29yZDtcclxuICAgICAgICB2b2lkIG1haW4gKCkge1xyXG4gICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodV90ZXh0dXJlLCB2X3RleENvb3JkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYDtcclxuICAgICAgICBsZXQgcHJvZ3JhbSA9IGdsVXRpbC5pbml0V2ViR0woZ2wsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xyXG5cclxuICAgICAgICBnbC51c2VQcm9ncmFtKHByb2dyYW0pO1xyXG4gICAgICAgIGxldCBhX3Bvc2l0aW9uID0gZ2wuZ2V0QXR0cmliTG9jYXRpb24ocHJvZ3JhbSwgJ2FfcG9zaXRpb24nKTtcclxuICAgICAgICBsZXQgYV90ZXhDb29yZCA9IGdsLmdldEF0dHJpYkxvY2F0aW9uKHByb2dyYW0sICdhX3RleENvb3JkJyk7XHJcblxyXG4gICAgICAgIGxldCB1X3Byb2plY3Rpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VfcHJvamVjdGlvbicpO1xyXG4gICAgICAgIGdsLnVuaWZvcm1NYXRyaXg0ZnYodV9wcm9qZWN0aW9uLCBmYWxzZSwgcHJvamVjdGlvbk1hdCk7XHJcblxyXG4gICAgICAgIC8vIGxldCB1X3Jlc29sdXRpb24gPSBnbC5nZXRVbmlmb3JtTG9jYXRpb24ocHJvZ3JhbSwgJ3VfcmVzdWx0aW9uJyk7XHJcbiAgICAgICAgLy8gZ2wudW5pZm9ybTJmKHVfcmVzb2x1dGlvbiwgZ2wuY2FudmFzLndpZHRoLCBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBcclxuICAgICAgICBnbC5lbmFibGVWZXJ0ZXhBdHRyaWJBcnJheShhX3Bvc2l0aW9uKTtcclxuICAgICAgICBnbC52ZXJ0ZXhBdHRyaWJQb2ludGVyKGFfcG9zaXRpb24sIDIsIGdsLkZMT0FULCBmYWxzZSwgRmxvYXQzMkFycmF5LkJZVEVTX1BFUl9FTEVNRU5UICogNCwgMCk7XHJcbiAgICAgICAgXHJcbiAgICAgICAgZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkoYV90ZXhDb29yZCk7XHJcbiAgICAgICAgZ2wudmVydGV4QXR0cmliUG9pbnRlcihhX3RleENvb3JkLCAyLCBnbC5GTE9BVCwgZmFsc2UsIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIDQsIEZsb2F0MzJBcnJheS5CWVRFU19QRVJfRUxFTUVOVCAqIDIpO1xyXG5cclxuICAgICAgICB0aGlzLmFfcG9zaXRpb24gPSBhX3Bvc2l0aW9uO1xyXG4gICAgICAgIHRoaXMudV9wcm9qZWN0aW9uID0gdV9wcm9qZWN0aW9uO1xyXG4gICAgICAgIHRoaXMucHJvZ3JhbSA9IHByb2dyYW07XHJcbiAgICAgICAgdGhpcy5nbCA9IGdsO1xyXG4gICAgfVxyXG5cclxuXHJcbiAgICBlbmFibGVWZXJ0ZXhBcnJheShzaXplLCBzdHJpZGUsIG9mZnNldCkge1xyXG4gICAgICAgIHRoaXMuZ2wuZW5hYmxlVmVydGV4QXR0cmliQXJyYXkodGhpcy5hX3Bvc2l0aW9uKTtcclxuICAgICAgICB0aGlzLmdsLnZlcnRleEF0dHJpYlBvaW50ZXIodGhpcy5hX3Bvc2l0aW9uLCBzaXplLCB0aGlzLmdsLkZMT0FULCBmYWxzZSwgc3RyaWRlLCBvZmZzZXQpO1xyXG4gICAgfVxyXG59ICIsIi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtXZWJHTDJSZW5kZXJpbmdDb250ZXh0fSBnbCBcclxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBzb3VyY2UgXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVTaGFkZXIoZ2wsIHR5cGUsIHNvdXJjZSkge1xyXG4gICAgbGV0IHNoYWRlciA9IGdsLmNyZWF0ZVNoYWRlcih0eXBlKTtcclxuICAgIGdsLnNoYWRlclNvdXJjZShzaGFkZXIsIHNvdXJjZSk7XHJcbiAgICBnbC5jb21waWxlU2hhZGVyKHNoYWRlcik7XHJcbiAgICBsZXQgc3VjY2VzcyA9IGdsLmdldFNoYWRlclBhcmFtZXRlcihzaGFkZXIsIGdsLkNPTVBJTEVfU1RBVFVTKTtcclxuICAgIGlmIChzdWNjZXNzKSB7XHJcbiAgICAgICAgcmV0dXJuIHNoYWRlcjtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGdsLmdldFNoYWRlckluZm9Mb2coc2hhZGVyKSk7XHJcbiAgICBnbC5kZWxldGVTaGFkZXIoc2hhZGVyKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge1dlYkdMMlJlbmRlcmluZ0NvbnRleHR9IGdsIFxyXG4gKiBAcGFyYW0ge1dlYkdMU2hhZGVyfSB2ZXJ0ZXhTaGFkZXIgXHJcbiAqIEBwYXJhbSB7V2ViR0xTaGFkZXJ9IGZyYWdtZW50U2hhZGVyIFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlUHJvZ3JhbShnbCwgdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcikge1xyXG4gICAgbGV0IHByb2dyYW0gPSBnbC5jcmVhdGVQcm9ncmFtKCk7XHJcbiAgICBnbC5hdHRhY2hTaGFkZXIocHJvZ3JhbSwgdmVydGV4U2hhZGVyKTtcclxuICAgIGdsLmF0dGFjaFNoYWRlcihwcm9ncmFtLCBmcmFnbWVudFNoYWRlcik7XHJcbiAgICBnbC5saW5rUHJvZ3JhbShwcm9ncmFtKTtcclxuICAgIGxldCBzdWNjZXNzID0gZ2wuZ2V0UHJvZ3JhbVBhcmFtZXRlcihwcm9ncmFtLCBnbC5MSU5LX1NUQVRVUyk7XHJcbiAgICBpZiAoc3VjY2Vzcykge1xyXG4gICAgICAgIHJldHVybiBwcm9ncmFtO1xyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coZ2wuZ2V0UHJvZ3JhbUluZm9Mb2cocHJvZ3JhbSkpO1xyXG4gICAgZ2wuZGVsZXRlUHJvZ3JhbShwcm9ncmFtKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFxyXG4gKiBAcGFyYW0ge1dlYkdMMlJlbmRlcmluZ0NvbnRleHR9IGdsIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gdmVydGV4U291cmNlIFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gZnJhZ21lbnRTb3VyY2UgXHJcbiAqL1xyXG5mdW5jdGlvbiBpbml0V2ViR0woZ2wsIHZlcnRleFNvdXJjZSwgZnJhZ21lbnRTb3VyY2UpIHtcclxuICAgIGxldCB2ZXJ0ZXhTaGFkZXIgPSBjcmVhdGVTaGFkZXIoZ2wsIGdsLlZFUlRFWF9TSEFERVIsIHZlcnRleFNvdXJjZSk7XHJcbiAgICBsZXQgZnJhZ21lbnRTaGFkZXIgPSBjcmVhdGVTaGFkZXIoZ2wsIGdsLkZSQUdNRU5UX1NIQURFUiwgZnJhZ21lbnRTb3VyY2UpO1xyXG4gICAgbGV0IHByb2dyYW0gPSBjcmVhdGVQcm9ncmFtKGdsLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcclxuICAgIHJldHVybiBwcm9ncmFtO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0aW9uKHdpZHRoLCBoZWlnaHQsIGRlcHRoKSB7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAgIDIgLyB3aWR0aCwgMCwgMCwgMCxcclxuICAgICAgICAwLCAyIC8gaGVpZ2h0LCAwLCAwLFxyXG4gICAgICAgIDAsIDAsIDIgLyBkZXB0aCwgMCxcclxuICAgICAgICAtMSwgLTEsIDAsIDEsXHJcbiAgICBdO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtPYmplY3R9IGNlbnRlclxyXG4gKiBAcGFyYW0ge051bWJlcn0gcm90YXRlXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVSb3RhdGVNYXRyaXgoY2VudGVyLCByb3RhdGUsIGF4aXMgPSAneicpIHtcclxuICAgIGxldCBjb3MgPSBNYXRoLmNvcyhyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgIGxldCBzaW4gPSBNYXRoLnNpbihyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgIGlmICghY2VudGVyLnopIHtcclxuICAgICAgICBjZW50ZXIueiA9IDA7XHJcbiAgICB9XHJcbiAgICBsZXQgcmV0O1xyXG4gICAgc3dpdGNoKGF4aXMpIHtcclxuICAgICAgICBjYXNlICd4JzpcclxuICAgICAgICAgICAgcmV0ID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgICAgICAxLjAsIDAuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAwLjAsIGNvcywgc2luLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAwLjAsIC1zaW4sIGNvcywgMC4wLFxyXG4gICAgICAgICAgICAgICAgMC4wLCAoMSAtIGNvcykgKiBjZW50ZXIueSArIHNpbiAqIGNlbnRlci56LCAoMSAtIGNvcykgKiBjZW50ZXIueiAtIHNpbiAqIGNlbnRlci55LCAxLjBcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgJ3knOlxyXG4gICAgICAgICAgICByZXQgPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgICAgICAgIGNvcywgMC4wLCBzaW4sIDAuMCxcclxuICAgICAgICAgICAgICAgIDAuMCwgMS4wLCAwLjAsIDAuMCxcclxuICAgICAgICAgICAgICAgIC1zaW4sIDAuMCwgY29zLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAoMSAtIGNvcykgKiBjZW50ZXIueCArIHNpbiAqIGNlbnRlci56LCAwLjAsICgxIC0gY29zKSAqIGNlbnRlci56IC0gc2luICogY2VudGVyLngsIDEuMFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgcmV0ID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgICAgICBjb3MsIHNpbiwgMC4wLCAwLjAsXHJcbiAgICAgICAgICAgICAgICAtc2luLCBjb3MsIDAuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgMC4wLCAwLjAsIDEuMCwgMC4wLFxyXG4gICAgICAgICAgICAgICAgKDEgLSBjb3MpICogY2VudGVyLnggKyBzaW4gKiBjZW50ZXIueSwgKDEgLSBjb3MpICogY2VudGVyLnkgLSBzaW4gKiBjZW50ZXIueCwgMC4wLCAxLjAsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJldDtcclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB0eFxyXG4gKiBAcGFyYW0ge051bWJlcn0gdHlcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZVRyYW5zbGF0ZU1hdHJpeCh0eCA9IDAsIHR5ID0gMCwgdHogPSAwKSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgMS4wLCAwLjAsIDAuMCwgMC4wLFxyXG4gICAgICAgIDAuMCwgMS4wLCAwLjAsIDAuMCxcclxuICAgICAgICAwLjAsIDAuMCwgMS4wLCAwLjAsXHJcbiAgICAgICAgdHgsIHR5LCB0eiwgMS4wLFxyXG4gICAgXSk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKlxyXG4gKiBAcGFyYW0ge051bWJlcn0gc2NhbGVYXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBzY2FsZVlcclxuICogQHBhcmFtIHtOdW1iZXJ9IHNjYWxlWlxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlU2NhbGVNYXRyaXgoc2NhbGVYLCBzY2FsZVksIHNjYWxlWiwgY2VudGVyID0ge1xyXG4gICAgeDogMCxcclxuICAgIHk6IDAsXHJcbiAgICB6OiAwXHJcbn0pIHtcclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICBzY2FsZVgsIDAuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgMC4wLCBzY2FsZVksIDAuMCwgMC4wLFxyXG4gICAgICAgIDAuMCwgMC4wLCAxLjAsIDAuMCxcclxuICAgICAgICAtc2NhbGVYICogY2VudGVyLnggKyBjZW50ZXIueCwgLXNjYWxlWSAqIGNlbnRlci55ICsgY2VudGVyLnksIC1zY2FsZVogKiBjZW50ZXIueiArIGNlbnRlci56LCAxLjAsXHJcbiAgICBdKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIEBkZXNjIOWvueavlOW6puefqemYtVxyXG4gKiBAcGFyYW0ge051bWJlcn0gdmFsdWVcclxuICovXHJcbmZ1bmN0aW9uIGNyZWF0ZUNvbnRyYXN0TWF0cml4KHZhbHVlKSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgdmFsdWUsIDAuMCwgMC4wLCAwLjAsXHJcbiAgICAgICAgMC4wLCB2YWx1ZSwgMC4wLCAwLjAsXHJcbiAgICAgICAgMC4wLCAwLjAsIHZhbHVlLCAwLjAsXHJcbiAgICAgICAgMC41ICogKDEgLSB2YWx1ZSksIDAuNSAqICgxIC0gdmFsdWUpLCAwLjUgKiAoMSAtIHZhbHVlKSwgMS4wLFxyXG4gICAgXSk7XHJcbn1cclxuXHJcblxyXG4vKipcclxuICogQGRlc2Mg6Imy55u45peL6L2s55+p6Zi1XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlSHVlUm90YXRlTWF0cml4KHZhbHVlKSB7XHJcbiAgICBsZXQgc2luID0gTWF0aC5zaW4odmFsdWUgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgIGxldCBjb3MgPSBNYXRoLmNvcyh2YWx1ZSAqIE1hdGguUEkgLyAxODApO1xyXG4gICAgcmV0dXJuIG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgIDAuMjEzICsgY29zICogMC43ODcgLSBzaW4gKiAwLjIxMywgMC4yMTMgLSBjb3MgKiAwLjIxMyArIHNpbiAqIDAuMTQzLCAwLjIxMyAtIGNvcyAqIDAuMjEzIC0gc2luICogMC43ODcsIDAuMCxcclxuICAgICAgICAwLjcxNSAtIGNvcyAqIDAuNzE1IC0gc2luICogMC43MTUsIDAuNzE1ICsgY29zICogMC4yODUgKyBzaW4gKiAwLjE0MCwgMC43MTUgLSBjb3MgKiAwLjcxNSArIHNpbiAqIDAuNzE1LCAwLjAsXHJcbiAgICAgICAgMC4wNzIgLSBjb3MgKiAwLjA3MiArIHNpbiAqIDAuOTI4LCAwLjA3MiAtIGNvcyAqIDAuMDcyIC0gc2luICogMC4yODMsIDAuMDcyICsgY29zICogMC45MjggKyBzaW4gKiAwLjA3MiwgMC4wLFxyXG4gICAgICAgIDAuMCwgMC4wLCAwLjAsIDEuMCxcclxuICAgIF0pO1xyXG59XHJcblxyXG4vKipcclxuICogQGRlc2Mg6aWx5ZKM5bqm55+p6Zi1XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB2YWx1ZVxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlU2F0dXJhdGVNYXRyaXgodmFsdWUpIHtcclxuICAgIHJldHVybiBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAwLjMwODYgKiAoMSAtIHZhbHVlKSArIHZhbHVlLCAwLjMwODYgKiAoMSAtIHZhbHVlKSwgMC4zMDg2ICogKDEgLSB2YWx1ZSksIDAuMCxcclxuICAgICAgICAwLjYwOTQgKiAoMSAtIHZhbHVlKSwgMC42MDk0ICogKDEgLSB2YWx1ZSkgKyB2YWx1ZSwgMC42MDk0ICogKDEgLSB2YWx1ZSksIDAuMCxcclxuICAgICAgICAwLjA4MjAgKiAoMSAtIHZhbHVlKSwgMC4wODIwICogKDEgLSB2YWx1ZSksIDAuMDgyMCAqICgxIC0gdmFsdWUpICsgdmFsdWUsIDAuMCxcclxuICAgICAgICAwLjAsIDAuMCwgMC4wLCAxLjBcclxuICAgIF0pO1xyXG59XHJcblxyXG4vKipcclxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4IOS4reW/g3jlnZDmoIdcclxuICogQHBhcmFtIHtOdW1iZXJ9IHkg5Lit5b+DeeWdkOagh1xyXG4gKiBAcGFyYW0ge3JhZGl1c30gcmFkaXVzIOWchuW8p+WNiuW+hFxyXG4gKiBAcGFyYW0ge051bWJlcn0gc3RhcnRBcmMg6LW35aeL5ZyG5byn5Y2K5b6EXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSBlbmRBcmMg57uI5q2i5ZyG5byn5Y2K5b6EXHJcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gY2xvY2t3aXNlIOaWueWQke+8jOm7mOiupOmhuuaXtumSiFxyXG4gKi9cclxuZnVuY3Rpb24gY3JlYXRlQXJjVmVydGV4KGdsLCB4LCB5LCByYWRpdXMsIHN0YXJ0QXJjLCBlbmRBcmMsIGlzSW52ZXJzZSA9IGZhbHNlKSB7XHJcbiAgICBsZXQgcHJlY2lzaW9uID0gMTtcclxuICAgIGxldCBvbmVBcmMgPSBNYXRoLlBJIC8gMTgwXHJcbiAgICBsZXQgcG9pbnRzID0gW3gsIHksIHggLyBnbC5jYW52YXMud2lkdGgsIHkgLyBnbC5jYW52YXMuaGVpZ2h0XTtcclxuICAgIGZvciAobGV0IGkgPSBzdGFydEFyYzsgaSA8PSBlbmRBcmM7IGkgKz0gcHJlY2lzaW9uKSB7XHJcbiAgICAgICAgaWYgKCFpc0ludmVyc2UpIHtcclxuICAgICAgICAgICAgcG9pbnRzLnB1c2goXHJcbiAgICAgICAgICAgICAgICB4ICsgcmFkaXVzICogTWF0aC5zaW4oaSAqIG9uZUFyYyksXHJcbiAgICAgICAgICAgICAgICAoeSAtIHJhZGl1cyAqIE1hdGguY29zKGkgKiBvbmVBcmMpKSxcclxuICAgICAgICAgICAgICAgICh4ICsgcmFkaXVzICogTWF0aC5zaW4oaSAqIG9uZUFyYykpIC8gZ2wuY2FudmFzLndpZHRoLFxyXG4gICAgICAgICAgICAgICAgKHkgLSByYWRpdXMgKiBNYXRoLmNvcyhpICogb25lQXJjKSkgLyBnbC5jYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBwb2ludHMucHVzaChcclxuICAgICAgICAgICAgICAgIHggLSByYWRpdXMgKiBNYXRoLnNpbihpICogb25lQXJjKSxcclxuICAgICAgICAgICAgICAgICh5IC0gcmFkaXVzICogTWF0aC5jb3MoaSAqIG9uZUFyYykpLFxyXG4gICAgICAgICAgICAgICAgKHggLSByYWRpdXMgKiBNYXRoLnNpbihpICogb25lQXJjKSkgLyBnbC5jYW52YXMud2lkdGgsXHJcbiAgICAgICAgICAgICAgICAoeSAtIHJhZGl1cyAqIE1hdGguY29zKGkgKiBvbmVBcmMpKSAvIGdsLmNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShwb2ludHMpO1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtXZWJHTFJlbmRlcmluZ0NvbnRleHR9IGdsXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVUZXh0dXJlKGdsKSB7XHJcbiAgICBsZXQgdGV4dHVyZSA9IGdsLmNyZWF0ZVRleHR1cmUoKTtcclxuICAgIGdsLmJpbmRUZXh0dXJlKGdsLlRFWFRVUkVfMkQsIHRleHR1cmUpO1xyXG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX01JTl9GSUxURVIsIGdsLkxJTkVBUik7XHJcbiAgICBnbC50ZXhQYXJhbWV0ZXJpKGdsLlRFWFRVUkVfMkQsIGdsLlRFWFRVUkVfTUFHX0ZJTFRFUiwgZ2wuTElORUFSKTtcclxuICAgIGdsLnRleFBhcmFtZXRlcmkoZ2wuVEVYVFVSRV8yRCwgZ2wuVEVYVFVSRV9XUkFQX1MsIGdsLkNMQU1QX1RPX0VER0UpO1xyXG4gICAgZ2wudGV4UGFyYW1ldGVyaShnbC5URVhUVVJFXzJELCBnbC5URVhUVVJFX1dSQVBfVCwgZ2wuQ0xBTVBfVE9fRURHRSk7XHJcbiAgICAvLyBnbC5nZW5lcmF0ZU1pcG1hcChnbC5URVhUVVJFXzJEKTtcclxuICAgIHJldHVybiB0ZXh0dXJlO1xyXG59XHJcblxyXG5mdW5jdGlvbiBjb21wdXRlS2VybmFsV2VpZ2h0KGtlcm5hbCkge1xyXG4gICAgbGV0IHdlaWdodCA9IGtlcm5hbC5yZWR1Y2UoKHByZXYsIGN1cikgPT4ge1xyXG4gICAgICAgIHJldHVybiBwcmV2ICsgY3VyO1xyXG4gICAgfSwgMCk7XHJcbiAgICByZXR1cm4gd2VpZ2h0IDw9IDAgPyAxIDogd2VpZ2h0O1xyXG59XHJcblxyXG4vKipcclxuICpcclxuICogQHBhcmFtIHtOdW1iZXJ9IHhcclxuICogQHBhcmFtIHtOdW1iZXJ9IHlcclxuICogQHBhcmFtIHtBcnJheX0gdmVydFhcclxuICogQHBhcmFtIHtBcnJheX0gdmVydFlcclxuICovXHJcbmZ1bmN0aW9uIGNoZWNrUG9pbnRJbih4LCB5LCB2ZXJ0WCwgdmVydFkpIHtcclxuICAgIGxldCBtaW5YID0gTWF0aC5taW4oLi4udmVydFgpO1xyXG4gICAgbGV0IG1pblkgPSBNYXRoLm1pbiguLi52ZXJ0WSk7XHJcbiAgICBsZXQgbWF4WCA9IE1hdGgubWF4KC4uLnZlcnRYKTtcclxuICAgIGxldCBtYXhZID0gTWF0aC5tYXgoLi4udmVydFkpO1xyXG4gICAgaWYgKHggPCBtaW5YIHx8IHggPiBtYXhYIHx8IHkgPCBtaW5ZIHx8IHkgPiBtYXhZKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBsZXQgaSwgaiwgcjtcclxuICAgICAgICByID0gZmFsc2U7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSB2ZXJ0WC5sZW5ndGggLSAxOyBpIDwgdmVydFgubGVuZ3RoOyBqID0gaSsrKSB7XHJcbiAgICAgICAgICAgIGlmICgodmVydFlbaV0gPiB5KSAhPT0gKHZlcnRZW2pdID4geSkgJiZcclxuICAgICAgICAgICAgICAgICh4IDwgKHkgLSB2ZXJ0WVtpXSkgKiAodmVydFhbal0gLSB2ZXJ0WFtpXSkgLyAodmVydFlbal0gLSB2ZXJ0WVtpXSkgKyB2ZXJ0WFtpXSkpIHtcclxuICAgICAgICAgICAgICAgIHIgPSAhcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcjtcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB4XHJcbiAqIEBwYXJhbSB7TnVtYmVyfSB5XHJcbiAqIEBwYXJhbSB7QXJyYXl9IHZlcnRYXHJcbiAqIEBwYXJhbSB7QXJyYXl9IHZlcnRZXHJcbiAqL1xyXG5mdW5jdGlvbiBjaGVja1BvaW50SW4yKHgsIHksIHZlcnRYLCB2ZXJ0WSkge1xyXG4gICAgbGV0IG1pblggPSBNYXRoLm1pbiguLi52ZXJ0WCk7XHJcbiAgICBsZXQgbWluWSA9IE1hdGgubWluKC4uLnZlcnRZKTtcclxuICAgIGxldCBtYXhYID0gTWF0aC5tYXgoLi4udmVydFgpO1xyXG4gICAgbGV0IG1heFkgPSBNYXRoLm1heCguLi52ZXJ0WSk7XHJcbiAgICBpZiAoeCA8IG1pblggfHwgeCA+IG1heFggfHwgeSA8IG1pblkgfHwgeSA+IG1heFkpIHtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGxldCBpLCBqLCByO1xyXG4gICAgICAgIHIgPSBmYWxzZTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHZlcnRYLmxlbmd0aCAtIDE7IGkgPCB2ZXJ0WC5sZW5ndGg7IGogPSBpKyspIHtcclxuICAgICAgICAgICAgaWYgKCh2ZXJ0WVtpXSA+IHkpICE9PSAodmVydFlbal0gPiB5KSAmJlxyXG4gICAgICAgICAgICAgICAgKHggPCAoeSAtIHZlcnRZW2ldKSAqICh2ZXJ0WFtqXSAtIHZlcnRYW2ldKSAvICh2ZXJ0WVtqXSAtIHZlcnRZW2ldKSArIHZlcnRYW2ldKSkge1xyXG4gICAgICAgICAgICAgICAgciA9ICFyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBoZXhcclxuICovXHJcbmZ1bmN0aW9uIGhleFRvUkdCKGhleCkge1xyXG4gICAgaWYgKC8jW2EtZjAtOV17Nn0vaS50ZXN0KGhleCkpIHtcclxuICAgICAgICBsZXQgciA9ICsoJzB4JyArIGhleC5zdWJzdHIoMSwgMikpO1xyXG4gICAgICAgIGxldCBnID0gKygnMHgnICsgaGV4LnN1YnN0cigzLCAyKSk7XHJcbiAgICAgICAgbGV0IGIgPSArKCcweCcgKyBoZXguc3Vic3RyKDUsIDIpKTtcclxuICAgICAgICByZXR1cm4gW3IgLyAyNTUsIGcgLyAyNTUsIGIgLyAyNTVdO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZW5lcmF0ZUltYWdlQnlEaXYod2lkdGgsIGhlaWdodCwgaHRtbCkge1xyXG4gICAgbGV0IHN2ZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmcnLCAnc3ZnJyk7XHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxucycsICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycpO1xyXG4gICAgc3ZnLnNldEF0dHJpYnV0ZSgndmlld0JveCcsIGAwIDAgJHt3aWR0aH0gJHtoZWlnaHR9YCk7XHJcbiAgICBzdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIHdpZHRoKTtcclxuICAgIHN2Zy5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCk7XHJcblxyXG4gICAgbGV0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKCdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZycsICdzdHlsZScpO1xyXG4gICAgc3R5bGUudGV4dENvbnRlbnQgPSBgXHJcbiAgICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnU2hvdUppblRpJztcclxuICAgICAgICAgICAgc3JjOiB1cmwoJ2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MS9XZWJHTFRyYWluaW5nL2Fzc2V0cy9zaG91amluLnR0ZicpO1xyXG4gICAgICAgIH1cclxuICAgIGA7XHJcblxyXG4gICAgbGV0IGZvcmVpZ25PYmplY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJywgJ2ZvcmVpZ25PYmplY3QnKTtcclxuICAgIGZvcmVpZ25PYmplY3Quc2V0QXR0cmlidXRlKCd4JywgMCk7XHJcbiAgICBmb3JlaWduT2JqZWN0LnNldEF0dHJpYnV0ZSgneScsIDApO1xyXG4gICAgZm9yZWlnbk9iamVjdC5zZXRBdHRyaWJ1dGUoJ3dpZHRoJywgd2lkdGgpO1xyXG4gICAgZm9yZWlnbk9iamVjdC5zZXRBdHRyaWJ1dGUoJ2hlaWdodCcsIGhlaWdodCk7XHJcblxyXG4gICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUygnaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbCcsICdkaXYnKTtcclxuICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ3htbG5zJywgJ2h0dHA6Ly93d3cudzMub3JnLzE5OTkveGh0bWwnKTtcclxuICAgIGRpdi5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgZm9yZWlnbk9iamVjdC5hcHBlbmRDaGlsZChkaXYpO1xyXG4gICAgc3ZnLmFwcGVuZENoaWxkKHN0eWxlKTtcclxuICAgIHN2Zy5hcHBlbmRDaGlsZChmb3JlaWduT2JqZWN0KTtcclxuICAgIHJldHVybiBzdmc7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBcclxuICogQHBhcmFtIHtIVE1MQ2FudmFzRWxlbWVudH0gY2FudmFzIFxyXG4gKiBAcGFyYW0ge251bWJlcn0gbGVmdCBcclxuICogQHBhcmFtIHtudW1iZXJ9IHJpZ2h0IFxyXG4gKiBAcGFyYW0ge251bWJlcn0gX2JvdHRvbSBcclxuICogQHBhcmFtIHtudW1iZXJ9IF90b3AgXHJcbiAqL1xyXG5mdW5jdGlvbiBjcmVhdGVDbGlwUGF0aChjYW52YXMsIGxlZnQgPSAwLCByaWdodCA9IDAsIF9ib3R0b20gPSAwLCBfdG9wID0gMCwgb2Zmc2V0WCA9IDAsIG9mZnNldFkgPSAwLCBzY2FsZVggPSAxLCBzY2FsZVkgPSAxLCByb3RhdGUgPSAwKSB7XHJcbiAgICByZXR1cm4gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgMCArIGNhbnZhcy53aWR0aCAqIGxlZnQsIDAgKyBjYW52YXMuaGVpZ2h0ICogX3RvcCwgbGVmdCwgX3RvcCxcclxuICAgICAgICBjYW52YXMud2lkdGggLSBjYW52YXMud2lkdGggKiByaWdodCwgMCArIGNhbnZhcy5oZWlnaHQgKiBfdG9wLCAxIC0gcmlnaHQsIF90b3AsXHJcbiAgICAgICAgY2FudmFzLndpZHRoIC0gY2FudmFzLndpZHRoICogcmlnaHQsIGNhbnZhcy5oZWlnaHQgLSBjYW52YXMuaGVpZ2h0ICogX2JvdHRvbSwgMSAtIHJpZ2h0LCAxIC0gX2JvdHRvbSxcclxuICAgICAgICBjYW52YXMud2lkdGggLSBjYW52YXMud2lkdGggKiByaWdodCwgY2FudmFzLmhlaWdodCAtIGNhbnZhcy5oZWlnaHQgKiBfYm90dG9tLCAxIC0gcmlnaHQsIDEgLSBfYm90dG9tLFxyXG4gICAgICAgIDAgKyBjYW52YXMud2lkdGggKiBsZWZ0LCBjYW52YXMuaGVpZ2h0IC0gY2FudmFzLmhlaWdodCAqIF9ib3R0b20sIGxlZnQsIDEgLSBfYm90dG9tLFxyXG4gICAgICAgIDAgKyBjYW52YXMud2lkdGggKiBsZWZ0LCAwICsgY2FudmFzLmhlaWdodCAqIF90b3AsIGxlZnQsIF90b3AsXHJcbiAgICBdKVxyXG59XHJcblxyXG5mdW5jdGlvbiByb3RhdGUoY2VudGVyLCB4LCB5LCByb3RhdGUpIHtcclxuICAgIGxldCBjb3MgPSBNYXRoLmNvcyhyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgIGxldCBzaW4gPSBNYXRoLnNpbihyb3RhdGUgKiBNYXRoLlBJIC8gMTgwKTtcclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgeCAqIGNvcyAtIHkgKiBzaW4gKyAoMSAtIGNvcykgKiBjZW50ZXIueCArIHNpbiAqIGNlbnRlci55LFxyXG4gICAgICAgIHggKiBzaW4gKyB5ICogY29zICsgKDEgLSBjb3MpICogY2VudGVyLnkgLSBzaW4gKiBjZW50ZXIueCxcclxuICAgIF1cclxufVxyXG5cclxuZnVuY3Rpb24gcG5wb2x5KG51bWJlciwgdmVyWCwgdmVyWSwgdGVzdFgsIHRlc3RZKSB7XHJcbiAgICBsZXQgaSwgaiwgYyA9IGZhbHNlO1xyXG4gICAgZm9yKGkgPSAwLCBqID0gbnVtYmVyIC0gMTsgaSA8IG51bWJlcjsgaiA9IGkrKykge1xyXG4gICAgICAgIGlmKCgodmVyWVtpXSA+IHRlc3RZKSAhPT0gKHZlcllbal0gPiB0ZXN0WSkpICYmXHJcbiAgICAgICAgICAgICh0ZXN0WCA8ICh2ZXJYW2pdIC0gdmVyWFtpXSkgKiAodGVzdFkgLSB2ZXJZW2ldKSAvICh2ZXJZW2pdIC0gdmVyWVtpXSkgKyB2ZXJYW2ldKSkge1xyXG4gICAgICAgICAgICBjID0gIWM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGM7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNhbGNEaXN0YW5jZSh4MSwgeTEsIHgyLCB5Mikge1xyXG4gICAgcmV0dXJuIE1hdGguc3FydCgoeDEgLSB4MikgKiogMiArICh5MSAtIHkyKSAqKiAyKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVUcmlhbmdsZUNsaXBQYXRoKGNhbnZhcywgcHJvZ3Jlc3MsIG9mZnNldFggPSAwLCBvZmZzZXRZID0gMCwgc2NhbGVYID0gMSwgc2NhbGVZID0gMSwgcm90YXRlID0gMCkge1xyXG4gICAgbGV0IGNlbnRlclggPSBjYW52YXMud2lkdGggLyAyICsgb2Zmc2V0WCAqIGNhbnZhcy53aWR0aDtcclxuICAgIGxldCBjZW50ZXJZID0gY2FudmFzLmhlaWdodCAvIDIgKyBvZmZzZXRZICogY2FudmFzLmhlaWdodDtcclxuICAgIGxldCBkaXN0YW5jZUxEID0gY2FsY0Rpc3RhbmNlKGNlbnRlclgsIGNlbnRlclksIDAsIDApO1xyXG4gICAgbGV0IGRpc3RhbmNlTFUgPSBjYWxjRGlzdGFuY2UoY2VudGVyWCwgY2VudGVyWSwgMCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICBsZXQgZGlzdGFuY2VSRCA9IGNhbGNEaXN0YW5jZShjZW50ZXJYLCBjZW50ZXJZLCBjYW52YXMud2lkdGgsIDApO1xyXG4gICAgbGV0IGRpc3RhbmNlUlUgPSBjYWxjRGlzdGFuY2UoY2VudGVyWCwgY2VudGVyWSwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGxldCByID0gTWF0aC5tYXgoZGlzdGFuY2VMRCwgZGlzdGFuY2VMVSwgZGlzdGFuY2VSRCwgZGlzdGFuY2VSVSkgKiBwcm9ncmVzcztcclxuICAgIGxldCBwb2ludHMgPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgY2FudmFzLndpZHRoIC8gMiwgY2FudmFzLmhlaWdodCAvIDIgKyAyICogciwgMC41LCAwLjUgKyAyICogciAvIGNhbnZhcy5oZWlnaHQsXHJcbiAgICAgICAgIGNhbnZhcy53aWR0aCAvIDIgLSAxLjczMiAqIHIsIGNhbnZhcy5oZWlnaHQgLyAyIC0gciwgMC41IC0gMS43MzIgKiByIC8gY2FudmFzLndpZHRoLCAwLjUgLSByIC8gY2FudmFzLmhlaWdodCxcclxuICAgICAgICAgY2FudmFzLndpZHRoIC8gMiArIDEuNzMyICogciwgY2FudmFzLmhlaWdodCAvIDItIHIsIDAuNSArIDEuNzMyICogciAvIGNhbnZhcy53aWR0aCwgMC41IC0gciAvIGNhbnZhcy5oZWlnaHRcclxuICAgIF0pO1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwb2ludHMubGVuZ3RoOyBpICs9IDQpIHtcclxuICAgICAgICAvLyBwb2ludHNbaSArIDJdIFxyXG4gICAgICAgIHBvaW50c1tpICsgMV0gPSBjYW52YXMuaGVpZ2h0IC0gcG9pbnRzW2kgKyAxXTtcclxuICAgICAgICBwb2ludHNbaSArIDNdID0gMSAtIHBvaW50c1tpICsgM107XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcG9pbnRzO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZU5vaXNlSW1hZ2Uod2lkdGgsIGhlaWdodCwgdHlwZSwgZmFjdG9yKSB7XHJcbiAgICBsZXQgZGF0YTtcclxuICAgIHN3aXRjaCAodHlwZSkge1xyXG4gICAgICAgIGNhc2UgV2ViR0xSZW5kZXJpbmdDb250ZXh0LlJHQkE6XHJcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDQpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDQpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSAyICogZmFjdG9yICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIGRhdGFbaSArIDFdID0gZmFjdG9yICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIGRhdGFbaSArIDJdID0gZmFjdG9yICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIGRhdGFbaSArIDNdID0gZmFjdG9yICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFdlYkdMUmVuZGVyaW5nQ29udGV4dC5SR0I6XHJcbiAgICAgICAgICAgIGRhdGEgPSBuZXcgVWludDhBcnJheSh3aWR0aCAqIGhlaWdodCAqIDMpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEubGVuZ3RoOyBpICs9IDMpIHtcclxuICAgICAgICAgICAgICAgIGRhdGFbaV0gPSBmYWN0b3IgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgZGF0YVtpICsgMV0gPSBmYWN0b3IgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgZGF0YVtpICsgMl0gPSBmYWN0b3IgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgV2ViR0xSZW5kZXJpbmdDb250ZXh0LkxVTUlOQU5DRV9BTFBIQTpcclxuICAgICAgICAgICAgZGF0YSA9IG5ldyBVaW50OEFycmF5KHdpZHRoICogaGVpZ2h0ICogMik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5sZW5ndGg7IGkgKz0gMikge1xyXG4gICAgICAgICAgICAgICAgZGF0YVtpXSA9IGZhY3RvciAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICBkYXRhW2kgKyAxXSA9IGZhY3RvciAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBXZWJHTFJlbmRlcmluZ0NvbnRleHQuTFVNSU5BTkNFOlxyXG4gICAgICAgICAgICBkYXRhID0gbmV3IFVpbnQ4QXJyYXkod2lkdGggKiBoZWlnaHQgKiAxKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBkYXRhW2ldID0gZmFjdG9yICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBicmVhaztcclxuICAgIH1cclxuICAgIHJldHVybiBkYXRhO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBlcnNwZWN0aXZlKG5lYXIsIGZhciwgbCwgciwgdCAsYikgeyAgICBcclxuICAgIGxldCByYW5nZUludiA9IDEuMCAvIChmYXIgLSBuZWFyKTtcclxuXHJcbiAgICBsZXQgbiA9IG5lYXI7XHJcbiAgICByZXR1cm4gW1xyXG4gICAgICAyICogbiAvIChyIC0gbCksIDAsIDAsIDAsXHJcbiAgICAgIDAsIDIgKiBuIC8gKHQgLSBiKSwgMCwgMCxcclxuICAgICAgLSAociArIGwpIC8gKHIgLSBsKSwgLSh0ICsgYikgLyAodCAtIGIpLCAobmVhciArIGZhcikgKiByYW5nZUludiwgMSxcclxuICAgICAgMCwgMCwgLW5lYXIgKiBmYXIgKiByYW5nZUludiAqIDIsIDBcclxuICAgIF07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZUVkaXRvciAobmFtZSwgdHlwZSA9ICdyYW5nZScsIG1pbiwgbWF4LCB2YWx1ZSwgc3RlcCA9IDEpIHtcclxuICAgIGxldCBvYmogPSB7fTtcclxuICAgIGxldCBvbmlucHV0ID0gbnVsbDtcclxuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBsZXQgbGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGFiZWwuaW5uZXJUZXh0ID0gbmFtZTtcclxuICAgIGxldCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBpbnB1dC50eXBlID0gdHlwZTtcclxuICAgIGlucHV0Lm1heCA9IG1heDtcclxuICAgIGlucHV0Lm1pbiA9IG1pbjtcclxuICAgIGlucHV0LnN0ZXAgPSBzdGVwO1xyXG4gICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcclxuICAgIGxldCBkaXNwbGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGRpc3BsYXkudGV4dENvbnRlbnQgPSB2YWx1ZTtcclxuXHJcbiAgICBpbnB1dC5vbmlucHV0ID0gZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICBvbmlucHV0ICYmIG9uaW5wdXQuY2FsbCh0aGlzLCBlKTtcclxuICAgICAgICBkaXNwbGF5LnRleHRDb250ZW50ID0gaW5wdXQudmFsdWU7XHJcbiAgICB9XHJcblxyXG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChsYWJlbCk7XHJcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGlzcGxheSk7XHJcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhvYmosIHtcclxuICAgICAgICBvbmlucHV0OiB7XHJcbiAgICAgICAgICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIG9uaW5wdXQgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZ2V0ICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvbmlucHV0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICByZWY6IHtcclxuICAgICAgICAgICAgZ2V0ICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB3cmFwcGVyO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzdGVwOiB7XHJcbiAgICAgICAgICAgIHNldCAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlucHV0LnN0ZXAgPSB2YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgZ2V0ICgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpbnB1dC52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICByZXR1cm4gb2JqO1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIG11bHRpcGx5KGEsIGIpIHtcclxuICAgIHZhciBhMDAgPSBhWzAgKiA0ICsgMF07XHJcbiAgICB2YXIgYTAxID0gYVswICogNCArIDFdO1xyXG4gICAgdmFyIGEwMiA9IGFbMCAqIDQgKyAyXTtcclxuICAgIHZhciBhMDMgPSBhWzAgKiA0ICsgM107XHJcbiAgICB2YXIgYTEwID0gYVsxICogNCArIDBdO1xyXG4gICAgdmFyIGExMSA9IGFbMSAqIDQgKyAxXTtcclxuICAgIHZhciBhMTIgPSBhWzEgKiA0ICsgMl07XHJcbiAgICB2YXIgYTEzID0gYVsxICogNCArIDNdO1xyXG4gICAgdmFyIGEyMCA9IGFbMiAqIDQgKyAwXTtcclxuICAgIHZhciBhMjEgPSBhWzIgKiA0ICsgMV07XHJcbiAgICB2YXIgYTIyID0gYVsyICogNCArIDJdO1xyXG4gICAgdmFyIGEyMyA9IGFbMiAqIDQgKyAzXTtcclxuICAgIHZhciBhMzAgPSBhWzMgKiA0ICsgMF07XHJcbiAgICB2YXIgYTMxID0gYVszICogNCArIDFdO1xyXG4gICAgdmFyIGEzMiA9IGFbMyAqIDQgKyAyXTtcclxuICAgIHZhciBhMzMgPSBhWzMgKiA0ICsgM107XHJcbiAgICB2YXIgYjAwID0gYlswICogNCArIDBdO1xyXG4gICAgdmFyIGIwMSA9IGJbMCAqIDQgKyAxXTtcclxuICAgIHZhciBiMDIgPSBiWzAgKiA0ICsgMl07XHJcbiAgICB2YXIgYjAzID0gYlswICogNCArIDNdO1xyXG4gICAgdmFyIGIxMCA9IGJbMSAqIDQgKyAwXTtcclxuICAgIHZhciBiMTEgPSBiWzEgKiA0ICsgMV07XHJcbiAgICB2YXIgYjEyID0gYlsxICogNCArIDJdO1xyXG4gICAgdmFyIGIxMyA9IGJbMSAqIDQgKyAzXTtcclxuICAgIHZhciBiMjAgPSBiWzIgKiA0ICsgMF07XHJcbiAgICB2YXIgYjIxID0gYlsyICogNCArIDFdO1xyXG4gICAgdmFyIGIyMiA9IGJbMiAqIDQgKyAyXTtcclxuICAgIHZhciBiMjMgPSBiWzIgKiA0ICsgM107XHJcbiAgICB2YXIgYjMwID0gYlszICogNCArIDBdO1xyXG4gICAgdmFyIGIzMSA9IGJbMyAqIDQgKyAxXTtcclxuICAgIHZhciBiMzIgPSBiWzMgKiA0ICsgMl07XHJcbiAgICB2YXIgYjMzID0gYlszICogNCArIDNdO1xyXG4gICAgcmV0dXJuIFtcclxuICAgICAgYjAwICogYTAwICsgYjAxICogYTEwICsgYjAyICogYTIwICsgYjAzICogYTMwLFxyXG4gICAgICBiMDAgKiBhMDEgKyBiMDEgKiBhMTEgKyBiMDIgKiBhMjEgKyBiMDMgKiBhMzEsXHJcbiAgICAgIGIwMCAqIGEwMiArIGIwMSAqIGExMiArIGIwMiAqIGEyMiArIGIwMyAqIGEzMixcclxuICAgICAgYjAwICogYTAzICsgYjAxICogYTEzICsgYjAyICogYTIzICsgYjAzICogYTMzLFxyXG4gICAgICBiMTAgKiBhMDAgKyBiMTEgKiBhMTAgKyBiMTIgKiBhMjAgKyBiMTMgKiBhMzAsXHJcbiAgICAgIGIxMCAqIGEwMSArIGIxMSAqIGExMSArIGIxMiAqIGEyMSArIGIxMyAqIGEzMSxcclxuICAgICAgYjEwICogYTAyICsgYjExICogYTEyICsgYjEyICogYTIyICsgYjEzICogYTMyLFxyXG4gICAgICBiMTAgKiBhMDMgKyBiMTEgKiBhMTMgKyBiMTIgKiBhMjMgKyBiMTMgKiBhMzMsXHJcbiAgICAgIGIyMCAqIGEwMCArIGIyMSAqIGExMCArIGIyMiAqIGEyMCArIGIyMyAqIGEzMCxcclxuICAgICAgYjIwICogYTAxICsgYjIxICogYTExICsgYjIyICogYTIxICsgYjIzICogYTMxLFxyXG4gICAgICBiMjAgKiBhMDIgKyBiMjEgKiBhMTIgKyBiMjIgKiBhMjIgKyBiMjMgKiBhMzIsXHJcbiAgICAgIGIyMCAqIGEwMyArIGIyMSAqIGExMyArIGIyMiAqIGEyMyArIGIyMyAqIGEzMyxcclxuICAgICAgYjMwICogYTAwICsgYjMxICogYTEwICsgYjMyICogYTIwICsgYjMzICogYTMwLFxyXG4gICAgICBiMzAgKiBhMDEgKyBiMzEgKiBhMTEgKyBiMzIgKiBhMjEgKyBiMzMgKiBhMzEsXHJcbiAgICAgIGIzMCAqIGEwMiArIGIzMSAqIGExMiArIGIzMiAqIGEyMiArIGIzMyAqIGEzMixcclxuICAgICAgYjMwICogYTAzICsgYjMxICogYTEzICsgYjMyICogYTIzICsgYjMzICogYTMzLFxyXG4gICAgXTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBpbnZlcnNlKG0pIHtcclxuICAgIHZhciBtMDAgPSBtWzAgKiA0ICsgMF07XHJcbiAgICB2YXIgbTAxID0gbVswICogNCArIDFdO1xyXG4gICAgdmFyIG0wMiA9IG1bMCAqIDQgKyAyXTtcclxuICAgIHZhciBtMDMgPSBtWzAgKiA0ICsgM107XHJcbiAgICB2YXIgbTEwID0gbVsxICogNCArIDBdO1xyXG4gICAgdmFyIG0xMSA9IG1bMSAqIDQgKyAxXTtcclxuICAgIHZhciBtMTIgPSBtWzEgKiA0ICsgMl07XHJcbiAgICB2YXIgbTEzID0gbVsxICogNCArIDNdO1xyXG4gICAgdmFyIG0yMCA9IG1bMiAqIDQgKyAwXTtcclxuICAgIHZhciBtMjEgPSBtWzIgKiA0ICsgMV07XHJcbiAgICB2YXIgbTIyID0gbVsyICogNCArIDJdO1xyXG4gICAgdmFyIG0yMyA9IG1bMiAqIDQgKyAzXTtcclxuICAgIHZhciBtMzAgPSBtWzMgKiA0ICsgMF07XHJcbiAgICB2YXIgbTMxID0gbVszICogNCArIDFdO1xyXG4gICAgdmFyIG0zMiA9IG1bMyAqIDQgKyAyXTtcclxuICAgIHZhciBtMzMgPSBtWzMgKiA0ICsgM107XHJcbiAgICB2YXIgdG1wXzAgID0gbTIyICogbTMzO1xyXG4gICAgdmFyIHRtcF8xICA9IG0zMiAqIG0yMztcclxuICAgIHZhciB0bXBfMiAgPSBtMTIgKiBtMzM7XHJcbiAgICB2YXIgdG1wXzMgID0gbTMyICogbTEzO1xyXG4gICAgdmFyIHRtcF80ICA9IG0xMiAqIG0yMztcclxuICAgIHZhciB0bXBfNSAgPSBtMjIgKiBtMTM7XHJcbiAgICB2YXIgdG1wXzYgID0gbTAyICogbTMzO1xyXG4gICAgdmFyIHRtcF83ICA9IG0zMiAqIG0wMztcclxuICAgIHZhciB0bXBfOCAgPSBtMDIgKiBtMjM7XHJcbiAgICB2YXIgdG1wXzkgID0gbTIyICogbTAzO1xyXG4gICAgdmFyIHRtcF8xMCA9IG0wMiAqIG0xMztcclxuICAgIHZhciB0bXBfMTEgPSBtMTIgKiBtMDM7XHJcbiAgICB2YXIgdG1wXzEyID0gbTIwICogbTMxO1xyXG4gICAgdmFyIHRtcF8xMyA9IG0zMCAqIG0yMTtcclxuICAgIHZhciB0bXBfMTQgPSBtMTAgKiBtMzE7XHJcbiAgICB2YXIgdG1wXzE1ID0gbTMwICogbTExO1xyXG4gICAgdmFyIHRtcF8xNiA9IG0xMCAqIG0yMTtcclxuICAgIHZhciB0bXBfMTcgPSBtMjAgKiBtMTE7XHJcbiAgICB2YXIgdG1wXzE4ID0gbTAwICogbTMxO1xyXG4gICAgdmFyIHRtcF8xOSA9IG0zMCAqIG0wMTtcclxuICAgIHZhciB0bXBfMjAgPSBtMDAgKiBtMjE7XHJcbiAgICB2YXIgdG1wXzIxID0gbTIwICogbTAxO1xyXG4gICAgdmFyIHRtcF8yMiA9IG0wMCAqIG0xMTtcclxuICAgIHZhciB0bXBfMjMgPSBtMTAgKiBtMDE7XHJcblxyXG4gICAgdmFyIHQwID0gKHRtcF8wICogbTExICsgdG1wXzMgKiBtMjEgKyB0bXBfNCAqIG0zMSkgLVxyXG4gICAgICAgICh0bXBfMSAqIG0xMSArIHRtcF8yICogbTIxICsgdG1wXzUgKiBtMzEpO1xyXG4gICAgdmFyIHQxID0gKHRtcF8xICogbTAxICsgdG1wXzYgKiBtMjEgKyB0bXBfOSAqIG0zMSkgLVxyXG4gICAgICAgICh0bXBfMCAqIG0wMSArIHRtcF83ICogbTIxICsgdG1wXzggKiBtMzEpO1xyXG4gICAgdmFyIHQyID0gKHRtcF8yICogbTAxICsgdG1wXzcgKiBtMTEgKyB0bXBfMTAgKiBtMzEpIC1cclxuICAgICAgICAodG1wXzMgKiBtMDEgKyB0bXBfNiAqIG0xMSArIHRtcF8xMSAqIG0zMSk7XHJcbiAgICB2YXIgdDMgPSAodG1wXzUgKiBtMDEgKyB0bXBfOCAqIG0xMSArIHRtcF8xMSAqIG0yMSkgLVxyXG4gICAgICAgICh0bXBfNCAqIG0wMSArIHRtcF85ICogbTExICsgdG1wXzEwICogbTIxKTtcclxuXHJcbiAgICB2YXIgZCA9IDEuMCAvIChtMDAgKiB0MCArIG0xMCAqIHQxICsgbTIwICogdDIgKyBtMzAgKiB0Myk7XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgZCAqIHQwLFxyXG4gICAgICBkICogdDEsXHJcbiAgICAgIGQgKiB0MixcclxuICAgICAgZCAqIHQzLFxyXG4gICAgICBkICogKCh0bXBfMSAqIG0xMCArIHRtcF8yICogbTIwICsgdG1wXzUgKiBtMzApIC1cclxuICAgICAgICAgICAgKHRtcF8wICogbTEwICsgdG1wXzMgKiBtMjAgKyB0bXBfNCAqIG0zMCkpLFxyXG4gICAgICBkICogKCh0bXBfMCAqIG0wMCArIHRtcF83ICogbTIwICsgdG1wXzggKiBtMzApIC1cclxuICAgICAgICAgICAgKHRtcF8xICogbTAwICsgdG1wXzYgKiBtMjAgKyB0bXBfOSAqIG0zMCkpLFxyXG4gICAgICBkICogKCh0bXBfMyAqIG0wMCArIHRtcF82ICogbTEwICsgdG1wXzExICogbTMwKSAtXHJcbiAgICAgICAgICAgICh0bXBfMiAqIG0wMCArIHRtcF83ICogbTEwICsgdG1wXzEwICogbTMwKSksXHJcbiAgICAgIGQgKiAoKHRtcF80ICogbTAwICsgdG1wXzkgKiBtMTAgKyB0bXBfMTAgKiBtMjApIC1cclxuICAgICAgICAgICAgKHRtcF81ICogbTAwICsgdG1wXzggKiBtMTAgKyB0bXBfMTEgKiBtMjApKSxcclxuICAgICAgZCAqICgodG1wXzEyICogbTEzICsgdG1wXzE1ICogbTIzICsgdG1wXzE2ICogbTMzKSAtXHJcbiAgICAgICAgICAgICh0bXBfMTMgKiBtMTMgKyB0bXBfMTQgKiBtMjMgKyB0bXBfMTcgKiBtMzMpKSxcclxuICAgICAgZCAqICgodG1wXzEzICogbTAzICsgdG1wXzE4ICogbTIzICsgdG1wXzIxICogbTMzKSAtXHJcbiAgICAgICAgICAgICh0bXBfMTIgKiBtMDMgKyB0bXBfMTkgKiBtMjMgKyB0bXBfMjAgKiBtMzMpKSxcclxuICAgICAgZCAqICgodG1wXzE0ICogbTAzICsgdG1wXzE5ICogbTEzICsgdG1wXzIyICogbTMzKSAtXHJcbiAgICAgICAgICAgICh0bXBfMTUgKiBtMDMgKyB0bXBfMTggKiBtMTMgKyB0bXBfMjMgKiBtMzMpKSxcclxuICAgICAgZCAqICgodG1wXzE3ICogbTAzICsgdG1wXzIwICogbTEzICsgdG1wXzIzICogbTIzKSAtXHJcbiAgICAgICAgICAgICh0bXBfMTYgKiBtMDMgKyB0bXBfMjEgKiBtMTMgKyB0bXBfMjIgKiBtMjMpKSxcclxuICAgICAgZCAqICgodG1wXzE0ICogbTIyICsgdG1wXzE3ICogbTMyICsgdG1wXzEzICogbTEyKSAtXHJcbiAgICAgICAgICAgICh0bXBfMTYgKiBtMzIgKyB0bXBfMTIgKiBtMTIgKyB0bXBfMTUgKiBtMjIpKSxcclxuICAgICAgZCAqICgodG1wXzIwICogbTMyICsgdG1wXzEyICogbTAyICsgdG1wXzE5ICogbTIyKSAtXHJcbiAgICAgICAgICAgICh0bXBfMTggKiBtMjIgKyB0bXBfMjEgKiBtMzIgKyB0bXBfMTMgKiBtMDIpKSxcclxuICAgICAgZCAqICgodG1wXzE4ICogbTEyICsgdG1wXzIzICogbTMyICsgdG1wXzE1ICogbTAyKSAtXHJcbiAgICAgICAgICAgICh0bXBfMjIgKiBtMzIgKyB0bXBfMTQgKiBtMDIgKyB0bXBfMTkgKiBtMTIpKSxcclxuICAgICAgZCAqICgodG1wXzIyICogbTIyICsgdG1wXzE2ICogbTAyICsgdG1wXzIxICogbTEyKSAtXHJcbiAgICAgICAgICAgICh0bXBfMjAgKiBtMTIgKyB0bXBfMjMgKiBtMjIgKyB0bXBfMTcgKiBtMDIpKVxyXG4gICAgXTtcclxuICB9O1xyXG5cclxuXHJcbiAgZnVuY3Rpb24gY3Jvc3MoYSwgYikge1xyXG4gICAgcmV0dXJuIFthWzFdICogYlsyXSAtIGFbMl0gKiBiWzFdLFxyXG4gICAgICAgICAgICBhWzJdICogYlswXSAtIGFbMF0gKiBiWzJdLFxyXG4gICAgICAgICAgICBhWzBdICogYlsxXSAtIGFbMV0gKiBiWzBdXTtcclxuICB9O1xyXG5cclxuICBmdW5jdGlvbiBzdWJ0cmFjdFZlY3RvcnMoYSwgYikge1xyXG4gICAgcmV0dXJuIFthWzBdIC0gYlswXSwgYVsxXSAtIGJbMV0sIGFbMl0gLSBiWzJdXTtcclxuICB9XHJcblxyXG5cclxuICBmdW5jdGlvbiBub3JtYWxpemUodikge1xyXG4gICAgdmFyIGxlbmd0aCA9IE1hdGguc3FydCh2WzBdICogdlswXSArIHZbMV0gKiB2WzFdICsgdlsyXSAqIHZbMl0pO1xyXG4gICAgLy8g56Gu5a6a5LiN5Lya6Zmk5LulIDBcclxuICAgIGlmIChsZW5ndGggPiAwLjAwMDAxKSB7XHJcbiAgICAgIHJldHVybiBbdlswXSAvIGxlbmd0aCwgdlsxXSAvIGxlbmd0aCwgdlsyXSAvIGxlbmd0aF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gWzAsIDAsIDBdO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBmdW5jdGlvbiBsb29rQXQgKGNhbWVyYVBvc2l0aW9uLCB0YXJnZXQsIHVwKSB7XHJcbiAgICB2YXIgekF4aXMgPSBub3JtYWxpemUoXHJcbiAgICAgICAgc3VidHJhY3RWZWN0b3JzKHRhcmdldCwgY2FtZXJhUG9zaXRpb24pKTtcclxuICAgIHZhciB4QXhpcyA9IG5vcm1hbGl6ZShjcm9zcyh1cCwgekF4aXMpKTtcclxuICAgIHZhciB5QXhpcyA9IG5vcm1hbGl6ZShjcm9zcyh6QXhpcywgeEF4aXMpKTtcclxuIFxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgIHhBeGlzWzBdLCB4QXhpc1sxXSwgeEF4aXNbMl0sIDAsXHJcbiAgICAgICB5QXhpc1swXSwgeUF4aXNbMV0sIHlBeGlzWzJdLCAwLFxyXG4gICAgICAgekF4aXNbMF0sIHpBeGlzWzFdLCB6QXhpc1syXSwgMCxcclxuICAgICAgIGNhbWVyYVBvc2l0aW9uWzBdLFxyXG4gICAgICAgY2FtZXJhUG9zaXRpb25bMV0sXHJcbiAgICAgICBjYW1lcmFQb3NpdGlvblsyXSxcclxuICAgICAgIDEsXHJcbiAgICBdO1xyXG4gIH1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGluaXRXZWJHTCxcclxuICAgIGNyZWF0ZVByb2plY3Rpb24sXHJcbiAgICBjcmVhdGVUcmFuc2xhdGVNYXRyaXgsXHJcbiAgICBjcmVhdGVSb3RhdGVNYXRyaXgsXHJcbiAgICBjcmVhdGVTY2FsZU1hdHJpeCxcclxuICAgIGNyZWF0ZUNvbnRyYXN0TWF0cml4LFxyXG4gICAgY3JlYXRlSHVlUm90YXRlTWF0cml4LFxyXG4gICAgY3JlYXRlU2F0dXJhdGVNYXRyaXgsXHJcbiAgICBjcmVhdGVBcmNWZXJ0ZXgsXHJcbiAgICBjcmVhdGVUZXh0dXJlLFxyXG4gICAgY3JlYXRlQ2xpcFBhdGgsXHJcbiAgICBjcmVhdGVUcmlhbmdsZUNsaXBQYXRoLFxyXG4gICAgY3JlYXRlTm9pc2VJbWFnZSxcclxuICAgIGNyZWF0ZVBlcnNwZWN0aXZlLFxyXG4gICAgcm90YXRlLFxyXG4gICAgcG5wb2x5LFxyXG4gICAgY3JlYXRlRWRpdG9yLFxyXG4gICAgaW52ZXJzZSxcclxuICAgIG11bHRpcGx5LFxyXG4gICAgY3Jvc3MsXHJcbiAgICBzdWJ0cmFjdFZlY3RvcnMsXHJcbiAgICBsb29rQXRcclxufSJdLCJzb3VyY2VSb290IjoiIn0=