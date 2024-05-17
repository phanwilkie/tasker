"use strict";
(self["webpackChunktasker"] = self["webpackChunktasker"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body 
{
    background-color: black;
    width: 50%;
    right: 50%;
    transform: translateX(50%);
    color: white;
}

#content {
    display: grid;
    grid-template-columns: 1fr 4fr;
    grid-template-rows: 1.5fr 0.5fr 4fr 1fr;
    grid-template-areas: 
        "header header"
        "nav subnav"
        "nav tasklist"
        "footer footer";
}

#header {
    grid-area: header;

    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 120px;
    border-style: solid;
    border-color: white;
    text-align: center;
    color: white;
}

#footer {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 50px;
    text-align: center;
}

#nav {
    grid-area: nav;
    border-style: solid;
    border-color: white;
    display: flex;
    flex-direction: column;
    padding: 10px;
    gap: 10px;
}

.nav-item {
    display: grid;
    grid-template-columns: 4fr 1fr;
}

.nav-item:has(.selected) {
    text-decoration: underline;
}


.new-project {
    /* text-align: right; */
}

#subnav {
    grid-area: subnav;
    height: 45px;
    border-style: solid;
    border-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
}

#tasklist {
    grid-area: tasklist;
    border-style: solid;
    border-color: white;
    display: flex;
    flex-direction: column;
}

.task-due-div, .task-option {
    text-align: center;
}

.task {
    display: grid;
    grid-template-columns: 1fr 1fr 5fr 2fr 1fr;
    grid-template-rows: repeat(auto-fill, minmax(30px, auto));
    align-items: center;
    gap: 5px;
    padding: 10px;
}


#footer {
    grid-area: footer;
    height: 30px;
    border-style: solid;
    border-color: white;
}


#new-project-modal, #new-task-modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

#new-project-modal {
    display: none;
}

#new-task-modal {
    display: none;
}

.modal-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    color: black;
}

/* .form-inputs {
    width: 100%;
} */

#project-name {
    box-sizing: border-box;
    width: 100%;
    height: 28px;
}


.modal-buttons {
    display: flex;
    margin-top: 20px;
    margin-bottom: 20px;
}

.modal-buttons button {
    margin-right: 10px;
}

.modal-buttons button + button {
    margin-right: 10px;
}

#close-modal-task, #close-modal-project {
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
  }
  


@media (max-width: 500px) {
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,uBAAuB;IACvB,UAAU;IACV,UAAU;IACV,0BAA0B;IAC1B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,uCAAuC;IACvC;;;;uBAImB;AACvB;;AAEA;IACI,iBAAiB;;IAEjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,0BAA0B;AAC9B;;;AAGA;IACI,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C,yDAAyD;IACzD,mBAAmB;IACnB,QAAQ;IACR,aAAa;AACjB;;;AAGA;IACI,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;AACvB;;;AAGA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,aAAa;IACb,YAAY;AAChB;;AAEA;;GAEG;;AAEH;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;AAChB;;;AAGA;IACI,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,eAAe;EACjB;;;;AAIF;AACA","sourcesContent":["body \n{\n    background-color: black;\n    width: 50%;\n    right: 50%;\n    transform: translateX(50%);\n    color: white;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1.5fr 0.5fr 4fr 1fr;\n    grid-template-areas: \n        \"header header\"\n        \"nav subnav\"\n        \"nav tasklist\"\n        \"footer footer\";\n}\n\n#header {\n    grid-area: header;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 120px;\n    border-style: solid;\n    border-color: white;\n    text-align: center;\n    color: white;\n}\n\n#footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 50px;\n    text-align: center;\n}\n\n#nav {\n    grid-area: nav;\n    border-style: solid;\n    border-color: white;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    gap: 10px;\n}\n\n.nav-item {\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n}\n\n.nav-item:has(.selected) {\n    text-decoration: underline;\n}\n\n\n.new-project {\n    /* text-align: right; */\n}\n\n#subnav {\n    grid-area: subnav;\n    height: 45px;\n    border-style: solid;\n    border-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n}\n\n#tasklist {\n    grid-area: tasklist;\n    border-style: solid;\n    border-color: white;\n    display: flex;\n    flex-direction: column;\n}\n\n.task-due-div, .task-option {\n    text-align: center;\n}\n\n.task {\n    display: grid;\n    grid-template-columns: 1fr 1fr 5fr 2fr 1fr;\n    grid-template-rows: repeat(auto-fill, minmax(30px, auto));\n    align-items: center;\n    gap: 5px;\n    padding: 10px;\n}\n\n\n#footer {\n    grid-area: footer;\n    height: 30px;\n    border-style: solid;\n    border-color: white;\n}\n\n\n#new-project-modal, #new-task-modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 1;\n}\n\n#new-project-modal {\n    display: none;\n}\n\n#new-task-modal {\n    display: none;\n}\n\n.modal-content {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 20px;\n    color: black;\n}\n\n/* .form-inputs {\n    width: 100%;\n} */\n\n#project-name {\n    box-sizing: border-box;\n    width: 100%;\n    height: 28px;\n}\n\n\n.modal-buttons {\n    display: flex;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\n.modal-buttons button {\n    margin-right: 10px;\n}\n\n.modal-buttons button + button {\n    margin-right: 10px;\n}\n\n#close-modal-task, #close-modal-project {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    cursor: pointer;\n  }\n  \n\n\n@media (max-width: 500px) {\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/form-project.js":
/*!*****************************!*\
  !*** ./src/form-project.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   renderEditProjectForm: () => (/* binding */ renderEditProjectForm),
/* harmony export */   renderNewProjectForm: () => (/* binding */ renderNewProjectForm),
/* harmony export */   showNewProjectForm: () => (/* binding */ showNewProjectForm)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");
//TODO PREVENT DUPLICATE PROJECT NAME




function showNewProjectForm() {
    const btnNewProject = document.querySelector('#btn-new-project');
    btnNewProject.addEventListener('click', () => renderNewProjectForm('create'));
}

function closeProjectModal() {
    const newProjectModal = document.querySelector('#new-project-modal');
    newProjectModal.style.display = 'none';

    const projectNameInput = document.querySelector('#project-name');
    projectNameInput.value = '';
};


//TODO REMOTE REPETITION OF DOMS VARIABLES

function renderNewProjectForm() {
    //RENDER MODAL
    const newProjectModal = document.querySelector('#new-project-modal');
    newProjectModal.style.display = 'block';

    const btnCloseProjectModal = document.querySelector('#close-modal-project');
    const btnCancelProjectModal = document.querySelector("#btn-cancel-project");
    btnCloseProjectModal.addEventListener('click', closeProjectModal);
    btnCancelProjectModal.addEventListener('click', closeProjectModal);
    
    const projectForm = document.querySelector('#form-add-project');    
    const projectNameInput = document.querySelector('#project-name');

    const btnSaveProject = document.querySelector('#btn-save-project');
    const modalTitle = document.querySelector('#modal-project-title');

    modalTitle.textContent = 'Add new project';
    projectNameInput.value = '';
    btnSaveProject.textContent = 'Save';

    function handleFormSubmit(event) {
        event.preventDefault();
        const newName = projectNameInput.value.trim();
        addNewProject(newName);

        // Remove event listener after form submission
        projectForm.removeEventListener('submit', handleFormSubmit);
    }

    projectForm.addEventListener('submit', handleFormSubmit);

}

function renderEditProjectForm(project) {
    console.log(project);

    const newProjectModal = document.querySelector('#new-project-modal');
    newProjectModal.style.display = 'block';

    const btnCloseProjectModal = document.querySelector('#close-modal-project');
    const btnCancelProjectModal = document.querySelector("#btn-cancel-project");
    btnCloseProjectModal.addEventListener('click', closeProjectModal);
    btnCancelProjectModal.addEventListener('click', closeProjectModal);
    
    const projectForm = document.querySelector('#form-add-project');    
    const projectNameInput = document.querySelector('#project-name');

    const btnSaveProject = document.querySelector('#btn-save-project');
    const modalTitle = document.querySelector('#modal-project-title');

    modalTitle.textContent = 'Update project';
    projectNameInput.value = project.name;
    btnSaveProject.textContent = 'Update';

    function handleFormSubmit(event) {
        event.preventDefault();
        const newName = projectNameInput.value.trim();
        updateProject(project, newName);

        // Remove event listener after form submission
        projectForm.removeEventListener('submit', handleFormSubmit);
    }
    projectForm.addEventListener('submit', handleFormSubmit);
}

function addNewProject(projectName) {
    if (projectName !== '') {
        const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](
            projectName, 
            projectName, 
            false, //DEFAULT STATUS
            true,
            []
        );
        _pubsub_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish('projectAdded', newProject);
        closeProjectModal()
    }
}

function updateProject(project, newName) {
    const oldName = project.name;
    const updatedProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](
        newName, 
        project.title, 
        project.default, 
        project.isActive, 
        project.task
    );

    _pubsub_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish('projectUpdated', { oldName, updatedProject });
    closeProjectModal();
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _localstorage_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./localstorage.js */ "./src/localstorage.js");
/* harmony import */ var _form_project_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./form-project.js */ "./src/form-project.js");
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");









//POPULATE SOME DUMMY DATA
let project1 = new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]('project1','Default', true, true, [
    {
        title: 'Task 1',
        description: 'This is my first task',
        dueDate: '25-03-2024',
        isCompleted: false,
        isImportant: false
    },
    {
        title: 'Task 2',
        description: 'This is my second task',
        dueDate: '25-03-2024',
        isCompleted: false,
        isImportant: true
    },
    {
        title: 'Task 3',
        description: 'This is my third task',
        dueDate: '25-03-2024',
        isCompleted: false,
        isImportant: false
    },
    {
        title: 'Task 2',
        description: 'This is my fourth task',
        dueDate: '25-03-2024',
        isCompleted: false,
        isImportant: false
    }]
);

let project2 = new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"]('project2', 'House Chores', false, true, [
    {
        title: 'Task 1',
        description: 'This is my first task',
        dueDate: '25-03-2024',
        isCompleted: false,
        isImportant: true
    },
    {
        title: 'Task 2',
        description: 'This is my second task',
        dueDate: '25-03-2024',
        isCompleted: false,
        isImportant: false
    },
    {
        title: 'Task 3',
        description: 'This is my third task',
        dueDate: '25-03-2024',
        isCompleted: false,
        isImportant: false
    },
    {
        title: 'Task 4',
        description: 'This is my fourth task',
        dueDate: '25-03-2024',
        isCompleted: false,
        isImportant: true
    }]
);

localStorage.clear();
(0,_localstorage_js__WEBPACK_IMPORTED_MODULE_3__.storeProject)('project1', project1);
(0,_localstorage_js__WEBPACK_IMPORTED_MODULE_3__.storeProject)('project2', project2);

//INITIALISE THE PAGE BY PREPOPULATING DATA FROM LOCALSTORAGE
//BY CALLING THE RENDER METHOD WITHIN PROJECT CLASS
(function() {
    const projectData = (0,_localstorage_js__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const projectList = projectData.projectList;

    projectList.forEach(projectData => {
        const project = new _project_js__WEBPACK_IMPORTED_MODULE_1__["default"](
            projectData.name,
            projectData.title,
            projectData.default,
            projectData.isActive,
            projectData.task
        );
        project._renderProjects();
    });

    //FIND THE DEFAULT PROJECT AND APPEND NAV-ITEM CLASS WITH SELECTED
    const defaultProject = _project_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDefaultProject(projectList)[0];
    const defaultProjectName = _project_js__WEBPACK_IMPORTED_MODULE_1__["default"].getDefaultProject(projectList)[0].name;    
    const navItems = document.querySelectorAll('.nav-name');

    for (let i = 0; i < navItems.length; i++) {
        if (defaultProjectName === navItems[i].textContent) {
            navItems[i].className = `${navItems[i].className} selected`;
        }
    }

    //RENDER THE DEFAULT TASKS ON #TASK DIV
    const taskList = defaultProject.task;
    taskList.forEach(task => {
        const taskInstance = new _task__WEBPACK_IMPORTED_MODULE_2__["default"](task.title,
                                      task.description, 
                                      task.dueDate, 
                                      task.isCompleted, 
                                      task.isImportant);
        taskInstance._renderTasks();
    })
    //INITIALISE PUBSUB
    _project_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribeToProjectChanges();

    //INITIALISE FORMS
    (0,_form_project_js__WEBPACK_IMPORTED_MODULE_4__.showNewProjectForm)();
})();




//TESTING
// function getProjects() {
//     let projectList = [];
//     let defaultProject = '';
    
//     for (let i = 0; i < localStorage.length; i++) {
//         const key = localStorage.key(i);
//         const stringObj = localStorage.getItem(key);
//         const parsedObj = JSON.parse(stringObj);
//         projectList.push(parsedObj);
        
//         if (parsedObj.default) {
//             defaultProject = key;
//         }
//     }
//     return { projectList
//             ,defaultProject 
//     };
// }

// const projectData = getProjects();
// const projectList = projectData.projectList;

// function getDefaultProject(projects) {
//     return projects.filter(project => project.default);    
// };

// getDefaultProject(projectList);

/***/ }),

/***/ "./src/localstorage.js":
/*!*****************************!*\
  !*** ./src/localstorage.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ getProjects),
/* harmony export */   loadTasks: () => (/* binding */ loadTasks),
/* harmony export */   storeProject: () => (/* binding */ storeProject)
/* harmony export */ });
/* harmony import */ var _form_project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./form-project */ "./src/form-project.js");
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");



// pubsub.subscribe('projectAdded', storeProject);
_pubsub_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('projectAdded', (project) => {
    const key = generateGUID();
    storeProject(key, project);
  });

_pubsub_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribe('projectUpdated', ({ oldName, updatedProject }) => {
    updateProject(oldName, updatedProject);
});

function generateGUID() {
    const now = new Date();
    const randomPart = Math.floor(Math.random() * 10000);
    const guid = `${now.getUTCMilliseconds()}${now.getUTCMonth()}${now.getUTCFullYear()}${randomPart}`;
    return guid;
  }

function storeProject(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
}

function updateProject(oldName, updatedProject) {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const project = JSON.parse(localStorage.getItem(key));

        if (project.name === oldName) {
            localStorage.setItem(key, JSON.stringify(updatedProject));
            break;
        }
    }
}


function getProjects() {
    let projectList = [];
    let defaultProject = '';
    
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const stringObj = localStorage.getItem(key);
        const parsedObj = JSON.parse(stringObj);
        projectList.push(parsedObj);
        
        if (parsedObj.default) {
            defaultProject = key;
        }
    }
    return { projectList
            ,defaultProject 
    };
}

function loadTasks(projectName) {
    
    const stringObj = localStorage.getItem(projectName);
    const parsedObj = JSON.parse(stringObj);
    const tasks = parsedObj.task;
    const taskCount = Object.keys(parsedObj.task).length;

    return { tasks, taskCount };
}

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _form_project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./form-project.js */ "./src/form-project.js");
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");



// import getProjects, { loadTasks, storeProject } from './localstorage.js';


class Project {
    
    constructor(name, title, defaultProject, isActive, taskData) {
        this.name = name;
        this.title = title;
        this.default = defaultProject;
        this.isActive = isActive;
        this.task =  taskData.map(taskData => new _task__WEBPACK_IMPORTED_MODULE_0__["default"](
            taskData.title, 
            taskData.description, 
            taskData.dueDate, 
            taskData.isCompleted, 
            taskData.isImportant
            ));
        };
        
    static getDefaultProject(projects) {
        return projects.filter(project => project.default);    
    };

    static subscribeToProjectChanges() {
        _pubsub_js__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('projectAdded', Project.handleProjectAdded);
        _pubsub_js__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('projectUpdated', Project.handleProjectUpdated);
        // pubsub.subscribe('projectAdded', projectInstance.handleProjectAdded.bind(projectInstance));
        // pubsub.subscribe('projectUpdated', projectInstance.handleProjectUpdated.bind(projectInstance));
    }

    static handleProjectAdded(project) {
        project._renderProjects();
    }

    //TODO OLDNAME LINKED TO PREVIOUS OBJECT ON SUBSEQUENT UPDATE
    //TODO NOT SURE WHY, MIGHT NEED TO CLEAR IT SOMEHOW
    //TODO MIGHT BE WHAT'S CAUSING PROBLEM
    static handleProjectUpdated({ oldName, updatedProject }) {
        const navItems = document.querySelectorAll('.nav-item');
        navItems.forEach(navItem => {
            const navName = navItem.querySelector('.nav-name');
            if (navName.textContent === oldName) {
                console.log('handleProjectUpdated / project.js - old name: ' + oldName);

                navName.textContent = updatedProject.name;
                console.log('handleProjectUpdated / project.js - new name: ' + navName.textContent);
                console.log('-------------');

            }
        });
    }
    
    _bindProjectEvents() {
        //new project button
        const btnNewProject = document.querySelector('#btn-new-project');
        btnNewProject.addEventListener('click', _form_project_js__WEBPACK_IMPORTED_MODULE_1__.renderNewProjectForm);
        
        //edit interaction for each project in the nav
    };
    
    _renderProjects() {
        const nav = document.querySelector('#nav');
        const navDiv = document.createElement('div');
        navDiv.className = 'nav-item';
        nav.appendChild(navDiv);

            const projectNameDiv = document.createElement('div');
            projectNameDiv.className = 'nav-name';
            projectNameDiv.textContent = this.name;
            navDiv.appendChild(projectNameDiv);

            const projectOptionDiv = document.createElement('div');
            projectOptionDiv.className = 'nav-option'
            navDiv.appendChild(projectOptionDiv);

                const btnProjectOption = document.createElement('button');
                btnProjectOption.textContent = '...';
                btnProjectOption.className = 'btn-project-edit';
                btnProjectOption.addEventListener('click', () => {
                    (0,_form_project_js__WEBPACK_IMPORTED_MODULE_1__.renderEditProjectForm)(this);
                    // console.log('_renderProjects() / project.js');
                    // console.log(this);
                })
                projectOptionDiv.appendChild(btnProjectOption);
    };

    archiveProject() {};

    changeDefaultProject() {};
}

/***/ }),

/***/ "./src/pubsub.js":
/*!***********************!*\
  !*** ./src/pubsub.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const pubsub = (() => {
    const events = {};

    function subscribe(event, callback) {
        if (!events[event]) {
            events[event] = [];
        }
        events[event].push(callback);
    }

    function publish(event, data) {
        if (!events[event]) return;
        events[event].forEach(callback => callback(data));
    }

    return {
        subscribe,
        publish
    };
})();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (pubsub);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });


class Task {
    static taskListContainer = 'tasklist';

    constructor (title, description, dueDate, isCompleted, isImportant) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.isCompleted = isCompleted;
        this.isImportant = isImportant;
    };

    _bindTaskEvents() {};
    
    _renderTasks() {
        //PUBSUB
        const taskListContainer = document.getElementById(Task.taskListContainer);

        const taskParentDiv = document.createElement('div');
        taskParentDiv.classList.add('task');
        taskListContainer.appendChild(taskParentDiv);
        
            const taskStatusDiv = document.createElement('div');
            taskParentDiv.appendChild(taskStatusDiv);
                
                const taskStatusCheck = document.createElement('input');
                taskStatusCheck.type = 'checkbox';
                taskStatusDiv.appendChild(taskStatusCheck);
                
            const taskTitleDiv = document.createElement('div');
            taskTitleDiv.textContent = this.title;
            taskParentDiv.appendChild(taskTitleDiv);

            const taskDescDiv = document.createElement('div');
            taskDescDiv.textContent = this.description;
            taskParentDiv.appendChild(taskDescDiv);
            
            const taskDueDiv = document.createElement('div');
            taskDueDiv.textContent = this.dueDate;
            taskParentDiv.appendChild(taskDueDiv);

            const taskOptionDiv = document.createElement('div');
            taskParentDiv.appendChild(taskOptionDiv);

                const taskOptionButton = document.createElement('button');
                taskOptionButton.textContent = '...';
                
                taskOptionDiv.appendChild(taskOptionButton);
    };

    addTask() {};
    editTask() {};
    deleteTask() {};
    reassignTaskProject() {};
    completeTask() {};
    markImportantTask() {};
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBOzs7Ozs7Ozs7Ozs7OztBQzVGQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUNyQnlCOztBQUUvQjtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Rhc2tlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGFza2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGFza2VyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Rhc2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90YXNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Rhc2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90YXNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGFza2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGFza2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGFza2VyLy4vc3JjL2Zvcm0tcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90YXNrZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza2VyLy4vc3JjL2xvY2Fsc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90YXNrZXIvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90YXNrZXIvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3Rhc2tlci8uL3NyYy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IFxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcmlnaHQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuNWZyIDAuNWZyIDRmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgIFwiaGVhZGVyIGhlYWRlclwiXG4gICAgICAgIFwibmF2IHN1Ym5hdlwiXG4gICAgICAgIFwibmF2IHRhc2tsaXN0XCJcbiAgICAgICAgXCJmb290ZXIgZm9vdGVyXCI7XG59XG5cbiNoZWFkZXIge1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNmb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI25hdiB7XG4gICAgZ3JpZC1hcmVhOiBuYXY7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGdhcDogMTBweDtcbn1cblxuLm5hdi1pdGVtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcbn1cblxuLm5hdi1pdGVtOmhhcyguc2VsZWN0ZWQpIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuXG4ubmV3LXByb2plY3Qge1xuICAgIC8qIHRleHQtYWxpZ246IHJpZ2h0OyAqL1xufVxuXG4jc3VibmF2IHtcbiAgICBncmlkLWFyZWE6IHN1Ym5hdjtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jdGFza2xpc3Qge1xuICAgIGdyaWQtYXJlYTogdGFza2xpc3Q7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRhc2stZHVlLWRpdiwgLnRhc2stb3B0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YXNrIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA1ZnIgMmZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMHB4LCBhdXRvKSk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5cbiNmb290ZXIge1xuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cblxuI25ldy1wcm9qZWN0LW1vZGFsLCAjbmV3LXRhc2stbW9kYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbiNuZXctcHJvamVjdC1tb2RhbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI25ldy10YXNrLW1vZGFsIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLyogLmZvcm0taW5wdXRzIHtcbiAgICB3aWR0aDogMTAwJTtcbn0gKi9cblxuI3Byb2plY3QtbmFtZSB7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI4cHg7XG59XG5cblxuLm1vZGFsLWJ1dHRvbnMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4ubW9kYWwtYnV0dG9ucyBidXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLm1vZGFsLWJ1dHRvbnMgYnV0dG9uICsgYnV0dG9uIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbiNjbG9zZS1tb2RhbC10YXNrLCAjY2xvc2UtbW9kYWwtcHJvamVjdCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMTBweDtcbiAgICByaWdodDogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgXG5cblxuQG1lZGlhIChtYXgtd2lkdGg6IDUwMHB4KSB7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztJQUVJLHVCQUF1QjtJQUN2QixVQUFVO0lBQ1YsVUFBVTtJQUNWLDBCQUEwQjtJQUMxQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDhCQUE4QjtJQUM5Qix1Q0FBdUM7SUFDdkM7Ozs7dUJBSW1CO0FBQ3ZCOztBQUVBO0lBQ0ksaUJBQWlCOztJQUVqQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixTQUFTO0FBQ2I7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0FBQ2xDOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOzs7QUFHQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMseURBQXlEO0lBQ3pELG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7OztBQUlGO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSBcXG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICByaWdodDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVmciAwLjVmciA0ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcIm5hdiBzdWJuYXZcXFwiXFxuICAgICAgICBcXFwibmF2IHRhc2tsaXN0XFxcIlxcbiAgICAgICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNuYXYge1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubmF2LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxufVxcblxcbi5uYXYtaXRlbTpoYXMoLnNlbGVjdGVkKSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5cXG4ubmV3LXByb2plY3Qge1xcbiAgICAvKiB0ZXh0LWFsaWduOiByaWdodDsgKi9cXG59XFxuXFxuI3N1Ym5hdiB7XFxuICAgIGdyaWQtYXJlYTogc3VibmF2O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jdGFza2xpc3Qge1xcbiAgICBncmlkLWFyZWE6IHRhc2tsaXN0O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzay1kdWUtZGl2LCAudGFzay1vcHRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDVmciAyZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMHB4LCBhdXRvKSk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5cXG4jZm9vdGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuI25ldy1wcm9qZWN0LW1vZGFsLCAjbmV3LXRhc2stbW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtbW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbmV3LXRhc2stbW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIC5mb3JtLWlucHV0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn0gKi9cXG5cXG4jcHJvamVjdC1uYW1lIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjhweDtcXG59XFxuXFxuXFxuLm1vZGFsLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubW9kYWwtYnV0dG9ucyBidXR0b24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5tb2RhbC1idXR0b25zIGJ1dHRvbiArIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuI2Nsb3NlLW1vZGFsLXRhc2ssICNjbG9zZS1tb2RhbC1wcm9qZWN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBcXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vVE9ETyBQUkVWRU5UIERVUExJQ0FURSBQUk9KRUNUIE5BTUVcblxuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9wcm9qZWN0LmpzJztcbmltcG9ydCBwdWJzdWIgZnJvbSAnLi9wdWJzdWIuanMnO1xuXG5leHBvcnQgZnVuY3Rpb24gc2hvd05ld1Byb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IGJ0bk5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLW5ldy1wcm9qZWN0Jyk7XG4gICAgYnRuTmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlck5ld1Byb2plY3RGb3JtKCdjcmVhdGUnKSk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlUHJvamVjdE1vZGFsKCkge1xuICAgIGNvbnN0IG5ld1Byb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuZXctcHJvamVjdC1tb2RhbCcpO1xuICAgIG5ld1Byb2plY3RNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcbiAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJyc7XG59O1xuXG5cbi8vVE9ETyBSRU1PVEUgUkVQRVRJVElPTiBPRiBET01TIFZBUklBQkxFU1xuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTmV3UHJvamVjdEZvcm0oKSB7XG4gICAgLy9SRU5ERVIgTU9EQUxcbiAgICBjb25zdCBuZXdQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtbW9kYWwnKTtcbiAgICBuZXdQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICBjb25zdCBidG5DbG9zZVByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1tb2RhbC1wcm9qZWN0Jyk7XG4gICAgY29uc3QgYnRuQ2FuY2VsUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tY2FuY2VsLXByb2plY3RcIik7XG4gICAgYnRuQ2xvc2VQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVByb2plY3RNb2RhbCk7XG4gICAgYnRuQ2FuY2VsUHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQcm9qZWN0TW9kYWwpO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tYWRkLXByb2plY3QnKTsgICAgXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcblxuICAgIGNvbnN0IGJ0blNhdmVQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bi1zYXZlLXByb2plY3QnKTtcbiAgICBjb25zdCBtb2RhbFRpdGxlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21vZGFsLXByb2plY3QtdGl0bGUnKTtcblxuICAgIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSAnQWRkIG5ldyBwcm9qZWN0JztcbiAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gJyc7XG4gICAgYnRuU2F2ZVByb2plY3QudGV4dENvbnRlbnQgPSAnU2F2ZSc7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVGb3JtU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG5ld05hbWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgYWRkTmV3UHJvamVjdChuZXdOYW1lKTtcblxuICAgICAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgYWZ0ZXIgZm9ybSBzdWJtaXNzaW9uXG4gICAgICAgIHByb2plY3RGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUZvcm1TdWJtaXQpO1xuICAgIH1cblxuICAgIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUZvcm1TdWJtaXQpO1xuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJFZGl0UHJvamVjdEZvcm0ocHJvamVjdCkge1xuICAgIGNvbnNvbGUubG9nKHByb2plY3QpO1xuXG4gICAgY29uc3QgbmV3UHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LW1vZGFsJyk7XG4gICAgbmV3UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgY29uc3QgYnRuQ2xvc2VQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2xvc2UtbW9kYWwtcHJvamVjdCcpO1xuICAgIGNvbnN0IGJ0bkNhbmNlbFByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYnRuLWNhbmNlbC1wcm9qZWN0XCIpO1xuICAgIGJ0bkNsb3NlUHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQcm9qZWN0TW9kYWwpO1xuICAgIGJ0bkNhbmNlbFByb2plY3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUHJvamVjdE1vZGFsKTtcbiAgICBcbiAgICBjb25zdCBwcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmb3JtLWFkZC1wcm9qZWN0Jyk7ICAgIFxuICAgIGNvbnN0IHByb2plY3ROYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1uYW1lJyk7XG5cbiAgICBjb25zdCBidG5TYXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tc2F2ZS1wcm9qZWN0Jyk7XG4gICAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1wcm9qZWN0LXRpdGxlJyk7XG5cbiAgICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gJ1VwZGF0ZSBwcm9qZWN0JztcbiAgICBwcm9qZWN0TmFtZUlucHV0LnZhbHVlID0gcHJvamVjdC5uYW1lO1xuICAgIGJ0blNhdmVQcm9qZWN0LnRleHRDb250ZW50ID0gJ1VwZGF0ZSc7XG5cbiAgICBmdW5jdGlvbiBoYW5kbGVGb3JtU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IG5ld05hbWUgPSBwcm9qZWN0TmFtZUlucHV0LnZhbHVlLnRyaW0oKTtcbiAgICAgICAgdXBkYXRlUHJvamVjdChwcm9qZWN0LCBuZXdOYW1lKTtcblxuICAgICAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgYWZ0ZXIgZm9ybSBzdWJtaXNzaW9uXG4gICAgICAgIHByb2plY3RGb3JtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUZvcm1TdWJtaXQpO1xuICAgIH1cbiAgICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtU3VibWl0KTtcbn1cblxuZnVuY3Rpb24gYWRkTmV3UHJvamVjdChwcm9qZWN0TmFtZSkge1xuICAgIGlmIChwcm9qZWN0TmFtZSAhPT0gJycpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KFxuICAgICAgICAgICAgcHJvamVjdE5hbWUsIFxuICAgICAgICAgICAgcHJvamVjdE5hbWUsIFxuICAgICAgICAgICAgZmFsc2UsIC8vREVGQVVMVCBTVEFUVVNcbiAgICAgICAgICAgIHRydWUsXG4gICAgICAgICAgICBbXVxuICAgICAgICApO1xuICAgICAgICBwdWJzdWIucHVibGlzaCgncHJvamVjdEFkZGVkJywgbmV3UHJvamVjdCk7XG4gICAgICAgIGNsb3NlUHJvamVjdE1vZGFsKClcbiAgICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3QocHJvamVjdCwgbmV3TmFtZSkge1xuICAgIGNvbnN0IG9sZE5hbWUgPSBwcm9qZWN0Lm5hbWU7XG4gICAgY29uc3QgdXBkYXRlZFByb2plY3QgPSBuZXcgUHJvamVjdChcbiAgICAgICAgbmV3TmFtZSwgXG4gICAgICAgIHByb2plY3QudGl0bGUsIFxuICAgICAgICBwcm9qZWN0LmRlZmF1bHQsIFxuICAgICAgICBwcm9qZWN0LmlzQWN0aXZlLCBcbiAgICAgICAgcHJvamVjdC50YXNrXG4gICAgKTtcblxuICAgIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0VXBkYXRlZCcsIHsgb2xkTmFtZSwgdXBkYXRlZFByb2plY3QgfSk7XG4gICAgY2xvc2VQcm9qZWN0TW9kYWwoKTtcbn1cbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgZ2V0UHJvamVjdHMsIHsgbG9hZFRhc2tzLCBzdG9yZVByb2plY3QgfSBmcm9tICcuL2xvY2Fsc3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBzaG93TmV3UHJvamVjdEZvcm0sIHJlbmRlclByb2plY3RGb3JtLCBzYXZlUHJvamVjdEZvcm0gfSBmcm9tICcuL2Zvcm0tcHJvamVjdC5qcyc7XG5pbXBvcnQgUHViU3ViIGZyb20gJy4vcHVic3ViLmpzJztcblxuLy9QT1BVTEFURSBTT01FIERVTU1ZIERBVEFcbmxldCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdwcm9qZWN0MScsJ0RlZmF1bHQnLCB0cnVlLCB0cnVlLCBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ1Rhc2sgMScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBteSBmaXJzdCB0YXNrJyxcbiAgICAgICAgZHVlRGF0ZTogJzI1LTAzLTIwMjQnLFxuICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGlzSW1wb3J0YW50OiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1Rhc2sgMicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBteSBzZWNvbmQgdGFzaycsXG4gICAgICAgIGR1ZURhdGU6ICcyNS0wMy0yMDI0JyxcbiAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBpc0ltcG9ydGFudDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1Rhc2sgMycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBteSB0aGlyZCB0YXNrJyxcbiAgICAgICAgZHVlRGF0ZTogJzI1LTAzLTIwMjQnLFxuICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGlzSW1wb3J0YW50OiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1Rhc2sgMicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBteSBmb3VydGggdGFzaycsXG4gICAgICAgIGR1ZURhdGU6ICcyNS0wMy0yMDI0JyxcbiAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBpc0ltcG9ydGFudDogZmFsc2VcbiAgICB9XVxuKTtcblxubGV0IHByb2plY3QyID0gbmV3IFByb2plY3QoJ3Byb2plY3QyJywgJ0hvdXNlIENob3JlcycsIGZhbHNlLCB0cnVlLCBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ1Rhc2sgMScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBteSBmaXJzdCB0YXNrJyxcbiAgICAgICAgZHVlRGF0ZTogJzI1LTAzLTIwMjQnLFxuICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGlzSW1wb3J0YW50OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnVGFzayAyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIG15IHNlY29uZCB0YXNrJyxcbiAgICAgICAgZHVlRGF0ZTogJzI1LTAzLTIwMjQnLFxuICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGlzSW1wb3J0YW50OiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1Rhc2sgMycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBteSB0aGlyZCB0YXNrJyxcbiAgICAgICAgZHVlRGF0ZTogJzI1LTAzLTIwMjQnLFxuICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGlzSW1wb3J0YW50OiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1Rhc2sgNCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBteSBmb3VydGggdGFzaycsXG4gICAgICAgIGR1ZURhdGU6ICcyNS0wMy0yMDI0JyxcbiAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBpc0ltcG9ydGFudDogdHJ1ZVxuICAgIH1dXG4pO1xuXG5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbnN0b3JlUHJvamVjdCgncHJvamVjdDEnLCBwcm9qZWN0MSk7XG5zdG9yZVByb2plY3QoJ3Byb2plY3QyJywgcHJvamVjdDIpO1xuXG4vL0lOSVRJQUxJU0UgVEhFIFBBR0UgQlkgUFJFUE9QVUxBVElORyBEQVRBIEZST00gTE9DQUxTVE9SQUdFXG4vL0JZIENBTExJTkcgVEhFIFJFTkRFUiBNRVRIT0QgV0lUSElOIFBST0pFQ1QgQ0xBU1NcbihmdW5jdGlvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0RGF0YSA9IGdldFByb2plY3RzKCk7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBwcm9qZWN0RGF0YS5wcm9qZWN0TGlzdDtcblxuICAgIHByb2plY3RMaXN0LmZvckVhY2gocHJvamVjdERhdGEgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICAgICAgICBwcm9qZWN0RGF0YS5uYW1lLFxuICAgICAgICAgICAgcHJvamVjdERhdGEudGl0bGUsXG4gICAgICAgICAgICBwcm9qZWN0RGF0YS5kZWZhdWx0LFxuICAgICAgICAgICAgcHJvamVjdERhdGEuaXNBY3RpdmUsXG4gICAgICAgICAgICBwcm9qZWN0RGF0YS50YXNrXG4gICAgICAgICk7XG4gICAgICAgIHByb2plY3QuX3JlbmRlclByb2plY3RzKCk7XG4gICAgfSk7XG5cbiAgICAvL0ZJTkQgVEhFIERFRkFVTFQgUFJPSkVDVCBBTkQgQVBQRU5EIE5BVi1JVEVNIENMQVNTIFdJVEggU0VMRUNURURcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IFByb2plY3QuZ2V0RGVmYXVsdFByb2plY3QocHJvamVjdExpc3QpWzBdO1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0TmFtZSA9IFByb2plY3QuZ2V0RGVmYXVsdFByb2plY3QocHJvamVjdExpc3QpWzBdLm5hbWU7ICAgIFxuICAgIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1uYW1lJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChkZWZhdWx0UHJvamVjdE5hbWUgPT09IG5hdkl0ZW1zW2ldLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICBuYXZJdGVtc1tpXS5jbGFzc05hbWUgPSBgJHtuYXZJdGVtc1tpXS5jbGFzc05hbWV9IHNlbGVjdGVkYDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vUkVOREVSIFRIRSBERUZBVUxUIFRBU0tTIE9OICNUQVNLIERJVlxuICAgIGNvbnN0IHRhc2tMaXN0ID0gZGVmYXVsdFByb2plY3QudGFzaztcbiAgICB0YXNrTGlzdC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSW5zdGFuY2UgPSBuZXcgVGFzayh0YXNrLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pc0NvbXBsZXRlZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suaXNJbXBvcnRhbnQpO1xuICAgICAgICB0YXNrSW5zdGFuY2UuX3JlbmRlclRhc2tzKCk7XG4gICAgfSlcbiAgICAvL0lOSVRJQUxJU0UgUFVCU1VCXG4gICAgUHJvamVjdC5zdWJzY3JpYmVUb1Byb2plY3RDaGFuZ2VzKCk7XG5cbiAgICAvL0lOSVRJQUxJU0UgRk9STVNcbiAgICBzaG93TmV3UHJvamVjdEZvcm0oKTtcbn0pKCk7XG5cblxuXG5cbi8vVEVTVElOR1xuLy8gZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4vLyAgICAgbGV0IHByb2plY3RMaXN0ID0gW107XG4vLyAgICAgbGV0IGRlZmF1bHRQcm9qZWN0ID0gJyc7XG4gICAgXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbi8vICAgICAgICAgY29uc3Qgc3RyaW5nT2JqID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbi8vICAgICAgICAgY29uc3QgcGFyc2VkT2JqID0gSlNPTi5wYXJzZShzdHJpbmdPYmopO1xuLy8gICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHBhcnNlZE9iaik7XG4gICAgICAgIFxuLy8gICAgICAgICBpZiAocGFyc2VkT2JqLmRlZmF1bHQpIHtcbi8vICAgICAgICAgICAgIGRlZmF1bHRQcm9qZWN0ID0ga2V5O1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiB7IHByb2plY3RMaXN0XG4vLyAgICAgICAgICAgICAsZGVmYXVsdFByb2plY3QgXG4vLyAgICAgfTtcbi8vIH1cblxuLy8gY29uc3QgcHJvamVjdERhdGEgPSBnZXRQcm9qZWN0cygpO1xuLy8gY29uc3QgcHJvamVjdExpc3QgPSBwcm9qZWN0RGF0YS5wcm9qZWN0TGlzdDtcblxuLy8gZnVuY3Rpb24gZ2V0RGVmYXVsdFByb2plY3QocHJvamVjdHMpIHtcbi8vICAgICByZXR1cm4gcHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5kZWZhdWx0KTsgICAgXG4vLyB9O1xuXG4vLyBnZXREZWZhdWx0UHJvamVjdChwcm9qZWN0TGlzdCk7IiwiaW1wb3J0IHsgYWRkTmV3UHJvamVjdCB9IGZyb20gJy4vZm9ybS1wcm9qZWN0JztcbmltcG9ydCBwdWJzdWIgZnJvbSAnLi9wdWJzdWIuanMnO1xuXG4vLyBwdWJzdWIuc3Vic2NyaWJlKCdwcm9qZWN0QWRkZWQnLCBzdG9yZVByb2plY3QpO1xucHVic3ViLnN1YnNjcmliZSgncHJvamVjdEFkZGVkJywgKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBrZXkgPSBnZW5lcmF0ZUdVSUQoKTtcbiAgICBzdG9yZVByb2plY3Qoa2V5LCBwcm9qZWN0KTtcbiAgfSk7XG5cbnB1YnN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RVcGRhdGVkJywgKHsgb2xkTmFtZSwgdXBkYXRlZFByb2plY3QgfSkgPT4ge1xuICAgIHVwZGF0ZVByb2plY3Qob2xkTmFtZSwgdXBkYXRlZFByb2plY3QpO1xufSk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlR1VJRCgpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHJhbmRvbVBhcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCk7XG4gICAgY29uc3QgZ3VpZCA9IGAke25vdy5nZXRVVENNaWxsaXNlY29uZHMoKX0ke25vdy5nZXRVVENNb250aCgpfSR7bm93LmdldFVUQ0Z1bGxZZWFyKCl9JHtyYW5kb21QYXJ0fWA7XG4gICAgcmV0dXJuIGd1aWQ7XG4gIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlUHJvamVjdChrZXksIG9iaikge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3Qob2xkTmFtZSwgdXBkYXRlZFByb2plY3QpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcblxuICAgICAgICBpZiAocHJvamVjdC5uYW1lID09PSBvbGROYW1lKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQcm9qZWN0KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgICBsZXQgcHJvamVjdExpc3QgPSBbXTtcbiAgICBsZXQgZGVmYXVsdFByb2plY3QgPSAnJztcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICBjb25zdCBzdHJpbmdPYmogPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICBjb25zdCBwYXJzZWRPYmogPSBKU09OLnBhcnNlKHN0cmluZ09iaik7XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gocGFyc2VkT2JqKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChwYXJzZWRPYmouZGVmYXVsdCkge1xuICAgICAgICAgICAgZGVmYXVsdFByb2plY3QgPSBrZXk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgcHJvamVjdExpc3RcbiAgICAgICAgICAgICxkZWZhdWx0UHJvamVjdCBcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRhc2tzKHByb2plY3ROYW1lKSB7XG4gICAgXG4gICAgY29uc3Qgc3RyaW5nT2JqID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IHBhcnNlZE9iaiA9IEpTT04ucGFyc2Uoc3RyaW5nT2JqKTtcbiAgICBjb25zdCB0YXNrcyA9IHBhcnNlZE9iai50YXNrO1xuICAgIGNvbnN0IHRhc2tDb3VudCA9IE9iamVjdC5rZXlzKHBhcnNlZE9iai50YXNrKS5sZW5ndGg7XG5cbiAgICByZXR1cm4geyB0YXNrcywgdGFza0NvdW50IH07XG59IiwiaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQge3Nob3dOZXdQcm9qZWN0Rm9ybSwgcmVuZGVyTmV3UHJvamVjdEZvcm0sIHJlbmRlckVkaXRQcm9qZWN0Rm9ybSwgc2hvd0VkaXRQcm9qZWN0Rm9ybX0gZnJvbSBcIi4vZm9ybS1wcm9qZWN0LmpzXCJcbi8vIGltcG9ydCBnZXRQcm9qZWN0cywgeyBsb2FkVGFza3MsIHN0b3JlUHJvamVjdCB9IGZyb20gJy4vbG9jYWxzdG9yYWdlLmpzJztcbmltcG9ydCBwdWJzdWIgZnJvbSAnLi9wdWJzdWIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0aXRsZSwgZGVmYXVsdFByb2plY3QsIGlzQWN0aXZlLCB0YXNrRGF0YSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVmYXVsdCA9IGRlZmF1bHRQcm9qZWN0O1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gaXNBY3RpdmU7XG4gICAgICAgIHRoaXMudGFzayA9ICB0YXNrRGF0YS5tYXAodGFza0RhdGEgPT4gbmV3IFRhc2soXG4gICAgICAgICAgICB0YXNrRGF0YS50aXRsZSwgXG4gICAgICAgICAgICB0YXNrRGF0YS5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICB0YXNrRGF0YS5kdWVEYXRlLCBcbiAgICAgICAgICAgIHRhc2tEYXRhLmlzQ29tcGxldGVkLCBcbiAgICAgICAgICAgIHRhc2tEYXRhLmlzSW1wb3J0YW50XG4gICAgICAgICAgICApKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgc3RhdGljIGdldERlZmF1bHRQcm9qZWN0KHByb2plY3RzKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmRlZmF1bHQpOyAgICBcbiAgICB9O1xuXG4gICAgc3RhdGljIHN1YnNjcmliZVRvUHJvamVjdENoYW5nZXMoKSB7XG4gICAgICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RBZGRlZCcsIFByb2plY3QuaGFuZGxlUHJvamVjdEFkZGVkKTtcbiAgICAgICAgcHVic3ViLnN1YnNjcmliZSgncHJvamVjdFVwZGF0ZWQnLCBQcm9qZWN0LmhhbmRsZVByb2plY3RVcGRhdGVkKTtcbiAgICAgICAgLy8gcHVic3ViLnN1YnNjcmliZSgncHJvamVjdEFkZGVkJywgcHJvamVjdEluc3RhbmNlLmhhbmRsZVByb2plY3RBZGRlZC5iaW5kKHByb2plY3RJbnN0YW5jZSkpO1xuICAgICAgICAvLyBwdWJzdWIuc3Vic2NyaWJlKCdwcm9qZWN0VXBkYXRlZCcsIHByb2plY3RJbnN0YW5jZS5oYW5kbGVQcm9qZWN0VXBkYXRlZC5iaW5kKHByb2plY3RJbnN0YW5jZSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVQcm9qZWN0QWRkZWQocHJvamVjdCkge1xuICAgICAgICBwcm9qZWN0Ll9yZW5kZXJQcm9qZWN0cygpO1xuICAgIH1cblxuICAgIC8vVE9ETyBPTEROQU1FIExJTktFRCBUTyBQUkVWSU9VUyBPQkpFQ1QgT04gU1VCU0VRVUVOVCBVUERBVEVcbiAgICAvL1RPRE8gTk9UIFNVUkUgV0hZLCBNSUdIVCBORUVEIFRPIENMRUFSIElUIFNPTUVIT1dcbiAgICAvL1RPRE8gTUlHSFQgQkUgV0hBVCdTIENBVVNJTkcgUFJPQkxFTVxuICAgIHN0YXRpYyBoYW5kbGVQcm9qZWN0VXBkYXRlZCh7IG9sZE5hbWUsIHVwZGF0ZWRQcm9qZWN0IH0pIHtcbiAgICAgICAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWl0ZW0nKTtcbiAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChuYXZJdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hdk5hbWUgPSBuYXZJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbmFtZScpO1xuICAgICAgICAgICAgaWYgKG5hdk5hbWUudGV4dENvbnRlbnQgPT09IG9sZE5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGFuZGxlUHJvamVjdFVwZGF0ZWQgLyBwcm9qZWN0LmpzIC0gb2xkIG5hbWU6ICcgKyBvbGROYW1lKTtcblxuICAgICAgICAgICAgICAgIG5hdk5hbWUudGV4dENvbnRlbnQgPSB1cGRhdGVkUHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVQcm9qZWN0VXBkYXRlZCAvIHByb2plY3QuanMgLSBuZXcgbmFtZTogJyArIG5hdk5hbWUudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tJyk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIF9iaW5kUHJvamVjdEV2ZW50cygpIHtcbiAgICAgICAgLy9uZXcgcHJvamVjdCBidXR0b25cbiAgICAgICAgY29uc3QgYnRuTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tbmV3LXByb2plY3QnKTtcbiAgICAgICAgYnRuTmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlck5ld1Byb2plY3RGb3JtKTtcbiAgICAgICAgXG4gICAgICAgIC8vZWRpdCBpbnRlcmFjdGlvbiBmb3IgZWFjaCBwcm9qZWN0IGluIHRoZSBuYXZcbiAgICB9O1xuICAgIFxuICAgIF9yZW5kZXJQcm9qZWN0cygpIHtcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdicpO1xuICAgICAgICBjb25zdCBuYXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmF2RGl2LmNsYXNzTmFtZSA9ICduYXYtaXRlbSc7XG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChuYXZEaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWVEaXYuY2xhc3NOYW1lID0gJ25hdi1uYW1lJztcbiAgICAgICAgICAgIHByb2plY3ROYW1lRGl2LnRleHRDb250ZW50ID0gdGhpcy5uYW1lO1xuICAgICAgICAgICAgbmF2RGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lRGl2KTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdE9wdGlvbkRpdi5jbGFzc05hbWUgPSAnbmF2LW9wdGlvbidcbiAgICAgICAgICAgIG5hdkRpdi5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uRGl2KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJ0blByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBidG5Qcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gJy4uLic7XG4gICAgICAgICAgICAgICAgYnRuUHJvamVjdE9wdGlvbi5jbGFzc05hbWUgPSAnYnRuLXByb2plY3QtZWRpdCc7XG4gICAgICAgICAgICAgICAgYnRuUHJvamVjdE9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyRWRpdFByb2plY3RGb3JtKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnX3JlbmRlclByb2plY3RzKCkgLyBwcm9qZWN0LmpzJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbkRpdi5hcHBlbmRDaGlsZChidG5Qcm9qZWN0T3B0aW9uKTtcbiAgICB9O1xuXG4gICAgYXJjaGl2ZVByb2plY3QoKSB7fTtcblxuICAgIGNoYW5nZURlZmF1bHRQcm9qZWN0KCkge307XG59IiwiY29uc3QgcHVic3ViID0gKCgpID0+IHtcbiAgICBjb25zdCBldmVudHMgPSB7fTtcblxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFldmVudHNbZXZlbnRdKSB7XG4gICAgICAgICAgICBldmVudHNbZXZlbnRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIGlmICghZXZlbnRzW2V2ZW50XSkgcmV0dXJuO1xuICAgICAgICBldmVudHNbZXZlbnRdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soZGF0YSkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZSxcbiAgICAgICAgcHVibGlzaFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwdWJzdWI7IiwiaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIHN0YXRpYyB0YXNrTGlzdENvbnRhaW5lciA9ICd0YXNrbGlzdCc7XG5cbiAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpc0NvbXBsZXRlZCwgaXNJbXBvcnRhbnQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBpc0NvbXBsZXRlZDtcbiAgICAgICAgdGhpcy5pc0ltcG9ydGFudCA9IGlzSW1wb3J0YW50O1xuICAgIH07XG5cbiAgICBfYmluZFRhc2tFdmVudHMoKSB7fTtcbiAgICBcbiAgICBfcmVuZGVyVGFza3MoKSB7XG4gICAgICAgIC8vUFVCU1VCXG4gICAgICAgIGNvbnN0IHRhc2tMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoVGFzay50YXNrTGlzdENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgdGFza1BhcmVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrUGFyZW50RGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1BhcmVudERpdik7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFza1N0YXR1c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza1BhcmVudERpdi5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzRGl2KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrU3RhdHVzQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIHRhc2tTdGF0dXNDaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICAgICAgICB0YXNrU3RhdHVzRGl2LmFwcGVuZENoaWxkKHRhc2tTdGF0dXNDaGVjayk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tUaXRsZURpdi50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgICAgICAgICB0YXNrUGFyZW50RGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZURpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrRGVzY0Rpdi50ZXh0Q29udGVudCA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgICAgICB0YXNrUGFyZW50RGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjRGl2KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFza0R1ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0R1ZURpdi50ZXh0Q29udGVudCA9IHRoaXMuZHVlRGF0ZTtcbiAgICAgICAgICAgIHRhc2tQYXJlbnREaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tPcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tQYXJlbnREaXYuYXBwZW5kQ2hpbGQodGFza09wdGlvbkRpdik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrT3B0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGFza09wdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9ICcuLi4nO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRhc2tPcHRpb25EaXYuYXBwZW5kQ2hpbGQodGFza09wdGlvbkJ1dHRvbik7XG4gICAgfTtcblxuICAgIGFkZFRhc2soKSB7fTtcbiAgICBlZGl0VGFzaygpIHt9O1xuICAgIGRlbGV0ZVRhc2soKSB7fTtcbiAgICByZWFzc2lnblRhc2tQcm9qZWN0KCkge307XG4gICAgY29tcGxldGVUYXNrKCkge307XG4gICAgbWFya0ltcG9ydGFudFRhc2soKSB7fTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=