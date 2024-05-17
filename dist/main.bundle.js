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

.form-inputs {
    display: flex;
}

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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,uBAAuB;IACvB,UAAU;IACV,UAAU;IACV,0BAA0B;IAC1B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,uCAAuC;IACvC;;;;uBAImB;AACvB;;AAEA;IACI,iBAAiB;;IAEjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,aAAa;IACb,8BAA8B;AAClC;;AAEA;IACI,0BAA0B;AAC9B;;;AAGA;IACI,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C,yDAAyD;IACzD,mBAAmB;IACnB,QAAQ;IACR,aAAa;AACjB;;;AAGA;IACI,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;AACvB;;;AAGA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;AAChB;;;AAGA;IACI,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,eAAe;EACjB;;;;AAIF;AACA","sourcesContent":["body \n{\n    background-color: black;\n    width: 50%;\n    right: 50%;\n    transform: translateX(50%);\n    color: white;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1.5fr 0.5fr 4fr 1fr;\n    grid-template-areas: \n        \"header header\"\n        \"nav subnav\"\n        \"nav tasklist\"\n        \"footer footer\";\n}\n\n#header {\n    grid-area: header;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 120px;\n    border-style: solid;\n    border-color: white;\n    text-align: center;\n    color: white;\n}\n\n#footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 50px;\n    text-align: center;\n}\n\n#nav {\n    grid-area: nav;\n    border-style: solid;\n    border-color: white;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    gap: 10px;\n}\n\n.nav-item {\n    display: grid;\n    grid-template-columns: 4fr 1fr;\n}\n\n.nav-item:has(.selected) {\n    text-decoration: underline;\n}\n\n\n.new-project {\n    /* text-align: right; */\n}\n\n#subnav {\n    grid-area: subnav;\n    height: 45px;\n    border-style: solid;\n    border-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n}\n\n#tasklist {\n    grid-area: tasklist;\n    border-style: solid;\n    border-color: white;\n    display: flex;\n    flex-direction: column;\n}\n\n.task-due-div, .task-option {\n    text-align: center;\n}\n\n.task {\n    display: grid;\n    grid-template-columns: 1fr 1fr 5fr 2fr 1fr;\n    grid-template-rows: repeat(auto-fill, minmax(30px, auto));\n    align-items: center;\n    gap: 5px;\n    padding: 10px;\n}\n\n\n#footer {\n    grid-area: footer;\n    height: 30px;\n    border-style: solid;\n    border-color: white;\n}\n\n\n#new-project-modal, #new-task-modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 1;\n}\n\n#new-project-modal {\n    display: none;\n}\n\n#new-task-modal {\n    display: none;\n}\n\n.modal-content {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 20px;\n    color: black;\n}\n\n.form-inputs {\n    display: flex;\n}\n\n#project-name {\n    box-sizing: border-box;\n    width: 100%;\n    height: 28px;\n}\n\n\n.modal-buttons {\n    display: flex;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\n.modal-buttons button {\n    margin-right: 10px;\n}\n\n.modal-buttons button + button {\n    margin-right: 10px;\n}\n\n#close-modal-task, #close-modal-project {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    cursor: pointer;\n  }\n  \n\n\n@media (max-width: 500px) {\n}"],"sourceRoot":""}]);
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

function setupModalElements() {
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

    return {
        projectForm,
        projectNameInput,
        btnSaveProject,
        modalTitle
    };
}

function renderNewProjectForm() {

    const { projectForm, projectNameInput, btnSaveProject, modalTitle } = setupModalElements();

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
    const { projectForm, projectNameInput, btnSaveProject, modalTitle } = setupModalElements();


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQzVGQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQsaUVBQWUsTUFBTTs7Ozs7Ozs7Ozs7Ozs7QUNyQnlCOztBQUUvQjtBQUNmOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90YXNrZXIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3Rhc2tlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGFza2VyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGFza2VyLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3Rhc2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90YXNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Rhc2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90YXNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGFza2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGFza2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGFza2VyLy4vc3JjL2Zvcm0tcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90YXNrZXIvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdGFza2VyLy4vc3JjL2xvY2Fsc3RvcmFnZS5qcyIsIndlYnBhY2s6Ly90YXNrZXIvLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90YXNrZXIvLi9zcmMvcHVic3ViLmpzIiwid2VicGFjazovL3Rhc2tlci8uL3NyYy90YXNrLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5IFxue1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcmlnaHQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNjb250ZW50IHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDEuNWZyIDAuNWZyIDRmciAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1hcmVhczogXG4gICAgICAgIFwiaGVhZGVyIGhlYWRlclwiXG4gICAgICAgIFwibmF2IHN1Ym5hdlwiXG4gICAgICAgIFwibmF2IHRhc2tsaXN0XCJcbiAgICAgICAgXCJmb290ZXIgZm9vdGVyXCI7XG59XG5cbiNoZWFkZXIge1xuICAgIGdyaWQtYXJlYTogaGVhZGVyO1xuXG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGhlaWdodDogMTIwcHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG5cbiNmb290ZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuI25hdiB7XG4gICAgZ3JpZC1hcmVhOiBuYXY7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGdhcDogMTBweDtcbn1cblxuLm5hdi1pdGVtIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNGZyIDFmcjtcbn1cblxuLm5hdi1pdGVtOmhhcyguc2VsZWN0ZWQpIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbn1cblxuXG4ubmV3LXByb2plY3Qge1xuICAgIC8qIHRleHQtYWxpZ246IHJpZ2h0OyAqL1xufVxuXG4jc3VibmF2IHtcbiAgICBncmlkLWFyZWE6IHN1Ym5hdjtcbiAgICBoZWlnaHQ6IDQ1cHg7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG4jdGFza2xpc3Qge1xuICAgIGdyaWQtYXJlYTogdGFza2xpc3Q7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLnRhc2stZHVlLWRpdiwgLnRhc2stb3B0aW9uIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi50YXNrIHtcbiAgICBkaXNwbGF5OiBncmlkO1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciA1ZnIgMmZyIDFmcjtcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMHB4LCBhdXRvKSk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBnYXA6IDVweDtcbiAgICBwYWRkaW5nOiAxMHB4O1xufVxuXG5cbiNmb290ZXIge1xuICAgIGdyaWQtYXJlYTogZm9vdGVyO1xuICAgIGhlaWdodDogMzBweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cblxuI25ldy1wcm9qZWN0LW1vZGFsLCAjbmV3LXRhc2stbW9kYWwge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbiNuZXctcHJvamVjdC1tb2RhbCB7XG4gICAgZGlzcGxheTogbm9uZTtcbn1cblxuI25ldy10YXNrLW1vZGFsIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4ubW9kYWwtY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmZvcm0taW5wdXRzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xufVxuXG4jcHJvamVjdC1uYW1lIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjhweDtcbn1cblxuXG4ubW9kYWwtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tb2RhbC1idXR0b25zIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubW9kYWwtYnV0dG9ucyBidXR0b24gKyBidXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuI2Nsb3NlLW1vZGFsLXRhc2ssICNjbG9zZS1tb2RhbC1wcm9qZWN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcblxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHVDQUF1QztJQUN2Qzs7Ozt1QkFJbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7O0lBRWpCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLGFBQWE7SUFDYiw4QkFBOEI7QUFDbEM7O0FBRUE7SUFDSSwwQkFBMEI7QUFDOUI7OztBQUdBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDBDQUEwQztJQUMxQyx5REFBeUQ7SUFDekQsbUJBQW1CO0lBQ25CLFFBQVE7SUFDUixhQUFhO0FBQ2pCOzs7QUFHQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2Qjs7O0FBR0E7SUFDSSxlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxXQUFXO0lBQ1gsWUFBWTtJQUNaLG9DQUFvQztJQUNwQyxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULGdDQUFnQztJQUNoQyx1QkFBdUI7SUFDdkIsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7OztBQUlGO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSBcXG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICByaWdodDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVmciAwLjVmciA0ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcIm5hdiBzdWJuYXZcXFwiXFxuICAgICAgICBcXFwibmF2IHRhc2tsaXN0XFxcIlxcbiAgICAgICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNuYXYge1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubmF2LWl0ZW0ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDRmciAxZnI7XFxufVxcblxcbi5uYXYtaXRlbTpoYXMoLnNlbGVjdGVkKSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG5cXG4ubmV3LXByb2plY3Qge1xcbiAgICAvKiB0ZXh0LWFsaWduOiByaWdodDsgKi9cXG59XFxuXFxuI3N1Ym5hdiB7XFxuICAgIGdyaWQtYXJlYTogc3VibmF2O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jdGFza2xpc3Qge1xcbiAgICBncmlkLWFyZWE6IHRhc2tsaXN0O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzay1kdWUtZGl2LCAudGFzay1vcHRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDVmciAyZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMHB4LCBhdXRvKSk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5cXG4jZm9vdGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuI25ldy1wcm9qZWN0LW1vZGFsLCAjbmV3LXRhc2stbW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtbW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbmV3LXRhc2stbW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5mb3JtLWlucHV0cyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbiNwcm9qZWN0LW5hbWUge1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAyOHB4O1xcbn1cXG5cXG5cXG4ubW9kYWwtYnV0dG9ucyB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XFxufVxcblxcbi5tb2RhbC1idXR0b25zIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuLm1vZGFsLWJ1dHRvbnMgYnV0dG9uICsgYnV0dG9uIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbn1cXG5cXG4jY2xvc2UtbW9kYWwtdGFzaywgI2Nsb3NlLW1vZGFsLXByb2plY3Qge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTBweDtcXG4gICAgcmlnaHQ6IDEwcHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gIH1cXG4gIFxcblxcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1MDBweCkge1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy9UT0RPIFBSRVZFTlQgRFVQTElDQVRFIFBST0pFQ1QgTkFNRVxuXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHB1YnN1YiBmcm9tICcuL3B1YnN1Yi5qcyc7XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93TmV3UHJvamVjdEZvcm0oKSB7XG4gICAgY29uc3QgYnRuTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tbmV3LXByb2plY3QnKTtcbiAgICBidG5OZXdQcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyTmV3UHJvamVjdEZvcm0oJ2NyZWF0ZScpKTtcbn1cblxuZnVuY3Rpb24gY2xvc2VQcm9qZWN0TW9kYWwoKSB7XG4gICAgY29uc3QgbmV3UHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LW1vZGFsJyk7XG4gICAgbmV3UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBjb25zdCBwcm9qZWN0TmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Byb2plY3QtbmFtZScpO1xuICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSAnJztcbn07XG5cbmZ1bmN0aW9uIHNldHVwTW9kYWxFbGVtZW50cygpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtbW9kYWwnKTtcbiAgICBuZXdQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICBjb25zdCBidG5DbG9zZVByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1tb2RhbC1wcm9qZWN0Jyk7XG4gICAgY29uc3QgYnRuQ2FuY2VsUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tY2FuY2VsLXByb2plY3RcIik7XG4gICAgYnRuQ2xvc2VQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVByb2plY3RNb2RhbCk7XG4gICAgYnRuQ2FuY2VsUHJvamVjdE1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2xvc2VQcm9qZWN0TW9kYWwpO1xuICAgIFxuICAgIGNvbnN0IHByb2plY3RGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Zvcm0tYWRkLXByb2plY3QnKTsgICAgXG4gICAgY29uc3QgcHJvamVjdE5hbWVJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcbiAgICBjb25zdCBidG5TYXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tc2F2ZS1wcm9qZWN0Jyk7XG4gICAgY29uc3QgbW9kYWxUaXRsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtb2RhbC1wcm9qZWN0LXRpdGxlJyk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBwcm9qZWN0Rm9ybSxcbiAgICAgICAgcHJvamVjdE5hbWVJbnB1dCxcbiAgICAgICAgYnRuU2F2ZVByb2plY3QsXG4gICAgICAgIG1vZGFsVGl0bGVcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyTmV3UHJvamVjdEZvcm0oKSB7XG5cbiAgICBjb25zdCB7IHByb2plY3RGb3JtLCBwcm9qZWN0TmFtZUlucHV0LCBidG5TYXZlUHJvamVjdCwgbW9kYWxUaXRsZSB9ID0gc2V0dXBNb2RhbEVsZW1lbnRzKCk7XG5cbiAgICBtb2RhbFRpdGxlLnRleHRDb250ZW50ID0gJ0FkZCBuZXcgcHJvamVjdCc7XG4gICAgcHJvamVjdE5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgIGJ0blNhdmVQcm9qZWN0LnRleHRDb250ZW50ID0gJ1NhdmUnO1xuXG4gICAgZnVuY3Rpb24gaGFuZGxlRm9ybVN1Ym1pdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBuZXdOYW1lID0gcHJvamVjdE5hbWVJbnB1dC52YWx1ZS50cmltKCk7XG4gICAgICAgIGFkZE5ld1Byb2plY3QobmV3TmFtZSk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGV2ZW50IGxpc3RlbmVyIGFmdGVyIGZvcm0gc3VibWlzc2lvblxuICAgICAgICBwcm9qZWN0Rm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtU3VibWl0KTtcbiAgICB9XG5cbiAgICBwcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBoYW5kbGVGb3JtU3VibWl0KTtcblxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVuZGVyRWRpdFByb2plY3RGb3JtKHByb2plY3QpIHtcbiAgICBjb25zdCB7IHByb2plY3RGb3JtLCBwcm9qZWN0TmFtZUlucHV0LCBidG5TYXZlUHJvamVjdCwgbW9kYWxUaXRsZSB9ID0gc2V0dXBNb2RhbEVsZW1lbnRzKCk7XG5cblxuICAgIG1vZGFsVGl0bGUudGV4dENvbnRlbnQgPSAnVXBkYXRlIHByb2plY3QnO1xuICAgIHByb2plY3ROYW1lSW5wdXQudmFsdWUgPSBwcm9qZWN0Lm5hbWU7XG4gICAgYnRuU2F2ZVByb2plY3QudGV4dENvbnRlbnQgPSAnVXBkYXRlJztcblxuICAgIGZ1bmN0aW9uIGhhbmRsZUZvcm1TdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgbmV3TmFtZSA9IHByb2plY3ROYW1lSW5wdXQudmFsdWUudHJpbSgpO1xuICAgICAgICB1cGRhdGVQcm9qZWN0KHByb2plY3QsIG5ld05hbWUpO1xuXG4gICAgICAgIC8vIFJlbW92ZSBldmVudCBsaXN0ZW5lciBhZnRlciBmb3JtIHN1Ym1pc3Npb25cbiAgICAgICAgcHJvamVjdEZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgaGFuZGxlRm9ybVN1Ym1pdCk7XG4gICAgfVxuICAgIHByb2plY3RGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGhhbmRsZUZvcm1TdWJtaXQpO1xufVxuXG5mdW5jdGlvbiBhZGROZXdQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgaWYgKHByb2plY3ROYW1lICE9PSAnJykge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICAgICAgICBwcm9qZWN0TmFtZSwgXG4gICAgICAgICAgICBwcm9qZWN0TmFtZSwgXG4gICAgICAgICAgICBmYWxzZSwgLy9ERUZBVUxUIFNUQVRVU1xuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIFtdXG4gICAgICAgICk7XG4gICAgICAgIHB1YnN1Yi5wdWJsaXNoKCdwcm9qZWN0QWRkZWQnLCBuZXdQcm9qZWN0KTtcbiAgICAgICAgY2xvc2VQcm9qZWN0TW9kYWwoKVxuICAgIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlUHJvamVjdChwcm9qZWN0LCBuZXdOYW1lKSB7XG4gICAgY29uc3Qgb2xkTmFtZSA9IHByb2plY3QubmFtZTtcbiAgICBjb25zdCB1cGRhdGVkUHJvamVjdCA9IG5ldyBQcm9qZWN0KFxuICAgICAgICBuZXdOYW1lLCBcbiAgICAgICAgcHJvamVjdC50aXRsZSwgXG4gICAgICAgIHByb2plY3QuZGVmYXVsdCwgXG4gICAgICAgIHByb2plY3QuaXNBY3RpdmUsIFxuICAgICAgICBwcm9qZWN0LnRhc2tcbiAgICApO1xuXG4gICAgcHVic3ViLnB1Ymxpc2goJ3Byb2plY3RVcGRhdGVkJywgeyBvbGROYW1lLCB1cGRhdGVkUHJvamVjdCB9KTtcbiAgICBjbG9zZVByb2plY3RNb2RhbCgpO1xufSIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQgZ2V0UHJvamVjdHMsIHsgbG9hZFRhc2tzLCBzdG9yZVByb2plY3QgfSBmcm9tICcuL2xvY2Fsc3RvcmFnZS5qcyc7XG5pbXBvcnQgeyBzaG93TmV3UHJvamVjdEZvcm0sIHJlbmRlclByb2plY3RGb3JtLCBzYXZlUHJvamVjdEZvcm0gfSBmcm9tICcuL2Zvcm0tcHJvamVjdC5qcyc7XG5pbXBvcnQgUHViU3ViIGZyb20gJy4vcHVic3ViLmpzJztcblxuLy9QT1BVTEFURSBTT01FIERVTU1ZIERBVEFcbmxldCBwcm9qZWN0MSA9IG5ldyBQcm9qZWN0KCdwcm9qZWN0MScsJ0RlZmF1bHQnLCB0cnVlLCB0cnVlLCBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ1Rhc2sgMScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBteSBmaXJzdCB0YXNrJyxcbiAgICAgICAgZHVlRGF0ZTogJzI1LTAzLTIwMjQnLFxuICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGlzSW1wb3J0YW50OiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1Rhc2sgMicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBteSBzZWNvbmQgdGFzaycsXG4gICAgICAgIGR1ZURhdGU6ICcyNS0wMy0yMDI0JyxcbiAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBpc0ltcG9ydGFudDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1Rhc2sgMycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBteSB0aGlyZCB0YXNrJyxcbiAgICAgICAgZHVlRGF0ZTogJzI1LTAzLTIwMjQnLFxuICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGlzSW1wb3J0YW50OiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1Rhc2sgMicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBteSBmb3VydGggdGFzaycsXG4gICAgICAgIGR1ZURhdGU6ICcyNS0wMy0yMDI0JyxcbiAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBpc0ltcG9ydGFudDogZmFsc2VcbiAgICB9XVxuKTtcblxubGV0IHByb2plY3QyID0gbmV3IFByb2plY3QoJ3Byb2plY3QyJywgJ0hvdXNlIENob3JlcycsIGZhbHNlLCB0cnVlLCBbXG4gICAge1xuICAgICAgICB0aXRsZTogJ1Rhc2sgMScsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBteSBmaXJzdCB0YXNrJyxcbiAgICAgICAgZHVlRGF0ZTogJzI1LTAzLTIwMjQnLFxuICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGlzSW1wb3J0YW50OiB0cnVlXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnVGFzayAyJyxcbiAgICAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIG15IHNlY29uZCB0YXNrJyxcbiAgICAgICAgZHVlRGF0ZTogJzI1LTAzLTIwMjQnLFxuICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGlzSW1wb3J0YW50OiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1Rhc2sgMycsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBteSB0aGlyZCB0YXNrJyxcbiAgICAgICAgZHVlRGF0ZTogJzI1LTAzLTIwMjQnLFxuICAgICAgICBpc0NvbXBsZXRlZDogZmFsc2UsXG4gICAgICAgIGlzSW1wb3J0YW50OiBmYWxzZVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1Rhc2sgNCcsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBteSBmb3VydGggdGFzaycsXG4gICAgICAgIGR1ZURhdGU6ICcyNS0wMy0yMDI0JyxcbiAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBpc0ltcG9ydGFudDogdHJ1ZVxuICAgIH1dXG4pO1xuXG5sb2NhbFN0b3JhZ2UuY2xlYXIoKTtcbnN0b3JlUHJvamVjdCgncHJvamVjdDEnLCBwcm9qZWN0MSk7XG5zdG9yZVByb2plY3QoJ3Byb2plY3QyJywgcHJvamVjdDIpO1xuXG4vL0lOSVRJQUxJU0UgVEhFIFBBR0UgQlkgUFJFUE9QVUxBVElORyBEQVRBIEZST00gTE9DQUxTVE9SQUdFXG4vL0JZIENBTExJTkcgVEhFIFJFTkRFUiBNRVRIT0QgV0lUSElOIFBST0pFQ1QgQ0xBU1NcbihmdW5jdGlvbigpIHtcbiAgICBjb25zdCBwcm9qZWN0RGF0YSA9IGdldFByb2plY3RzKCk7XG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBwcm9qZWN0RGF0YS5wcm9qZWN0TGlzdDtcblxuICAgIHByb2plY3RMaXN0LmZvckVhY2gocHJvamVjdERhdGEgPT4ge1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICAgICAgICBwcm9qZWN0RGF0YS5uYW1lLFxuICAgICAgICAgICAgcHJvamVjdERhdGEudGl0bGUsXG4gICAgICAgICAgICBwcm9qZWN0RGF0YS5kZWZhdWx0LFxuICAgICAgICAgICAgcHJvamVjdERhdGEuaXNBY3RpdmUsXG4gICAgICAgICAgICBwcm9qZWN0RGF0YS50YXNrXG4gICAgICAgICk7XG4gICAgICAgIHByb2plY3QuX3JlbmRlclByb2plY3RzKCk7XG4gICAgfSk7XG5cbiAgICAvL0ZJTkQgVEhFIERFRkFVTFQgUFJPSkVDVCBBTkQgQVBQRU5EIE5BVi1JVEVNIENMQVNTIFdJVEggU0VMRUNURURcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdCA9IFByb2plY3QuZ2V0RGVmYXVsdFByb2plY3QocHJvamVjdExpc3QpWzBdO1xuICAgIGNvbnN0IGRlZmF1bHRQcm9qZWN0TmFtZSA9IFByb2plY3QuZ2V0RGVmYXVsdFByb2plY3QocHJvamVjdExpc3QpWzBdLm5hbWU7ICAgIFxuICAgIGNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5hdi1uYW1lJyk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5hdkl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmIChkZWZhdWx0UHJvamVjdE5hbWUgPT09IG5hdkl0ZW1zW2ldLnRleHRDb250ZW50KSB7XG4gICAgICAgICAgICBuYXZJdGVtc1tpXS5jbGFzc05hbWUgPSBgJHtuYXZJdGVtc1tpXS5jbGFzc05hbWV9IHNlbGVjdGVkYDtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vUkVOREVSIFRIRSBERUZBVUxUIFRBU0tTIE9OICNUQVNLIERJVlxuICAgIGNvbnN0IHRhc2tMaXN0ID0gZGVmYXVsdFByb2plY3QudGFzaztcbiAgICB0YXNrTGlzdC5mb3JFYWNoKHRhc2sgPT4ge1xuICAgICAgICBjb25zdCB0YXNrSW5zdGFuY2UgPSBuZXcgVGFzayh0YXNrLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlLCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5pc0NvbXBsZXRlZCwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suaXNJbXBvcnRhbnQpO1xuICAgICAgICB0YXNrSW5zdGFuY2UuX3JlbmRlclRhc2tzKCk7XG4gICAgfSlcbiAgICAvL0lOSVRJQUxJU0UgUFVCU1VCXG4gICAgUHJvamVjdC5zdWJzY3JpYmVUb1Byb2plY3RDaGFuZ2VzKCk7XG5cbiAgICAvL0lOSVRJQUxJU0UgRk9STVNcbiAgICBzaG93TmV3UHJvamVjdEZvcm0oKTtcbn0pKCk7XG5cblxuXG5cbi8vVEVTVElOR1xuLy8gZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4vLyAgICAgbGV0IHByb2plY3RMaXN0ID0gW107XG4vLyAgICAgbGV0IGRlZmF1bHRQcm9qZWN0ID0gJyc7XG4gICAgXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbi8vICAgICAgICAgY29uc3Qgc3RyaW5nT2JqID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbi8vICAgICAgICAgY29uc3QgcGFyc2VkT2JqID0gSlNPTi5wYXJzZShzdHJpbmdPYmopO1xuLy8gICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHBhcnNlZE9iaik7XG4gICAgICAgIFxuLy8gICAgICAgICBpZiAocGFyc2VkT2JqLmRlZmF1bHQpIHtcbi8vICAgICAgICAgICAgIGRlZmF1bHRQcm9qZWN0ID0ga2V5O1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiB7IHByb2plY3RMaXN0XG4vLyAgICAgICAgICAgICAsZGVmYXVsdFByb2plY3QgXG4vLyAgICAgfTtcbi8vIH1cblxuLy8gY29uc3QgcHJvamVjdERhdGEgPSBnZXRQcm9qZWN0cygpO1xuLy8gY29uc3QgcHJvamVjdExpc3QgPSBwcm9qZWN0RGF0YS5wcm9qZWN0TGlzdDtcblxuLy8gZnVuY3Rpb24gZ2V0RGVmYXVsdFByb2plY3QocHJvamVjdHMpIHtcbi8vICAgICByZXR1cm4gcHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5kZWZhdWx0KTsgICAgXG4vLyB9O1xuXG4vLyBnZXREZWZhdWx0UHJvamVjdChwcm9qZWN0TGlzdCk7IiwiaW1wb3J0IHsgYWRkTmV3UHJvamVjdCB9IGZyb20gJy4vZm9ybS1wcm9qZWN0JztcbmltcG9ydCBwdWJzdWIgZnJvbSAnLi9wdWJzdWIuanMnO1xuXG4vLyBwdWJzdWIuc3Vic2NyaWJlKCdwcm9qZWN0QWRkZWQnLCBzdG9yZVByb2plY3QpO1xucHVic3ViLnN1YnNjcmliZSgncHJvamVjdEFkZGVkJywgKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBrZXkgPSBnZW5lcmF0ZUdVSUQoKTtcbiAgICBzdG9yZVByb2plY3Qoa2V5LCBwcm9qZWN0KTtcbiAgfSk7XG5cbnB1YnN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RVcGRhdGVkJywgKHsgb2xkTmFtZSwgdXBkYXRlZFByb2plY3QgfSkgPT4ge1xuICAgIHVwZGF0ZVByb2plY3Qob2xkTmFtZSwgdXBkYXRlZFByb2plY3QpO1xufSk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlR1VJRCgpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHJhbmRvbVBhcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCk7XG4gICAgY29uc3QgZ3VpZCA9IGAke25vdy5nZXRVVENNaWxsaXNlY29uZHMoKX0ke25vdy5nZXRVVENNb250aCgpfSR7bm93LmdldFVUQ0Z1bGxZZWFyKCl9JHtyYW5kb21QYXJ0fWA7XG4gICAgcmV0dXJuIGd1aWQ7XG4gIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlUHJvamVjdChrZXksIG9iaikge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZVByb2plY3Qob2xkTmFtZSwgdXBkYXRlZFByb2plY3QpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICBjb25zdCBwcm9qZWN0ID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpKTtcblxuICAgICAgICBpZiAocHJvamVjdC5uYW1lID09PSBvbGROYW1lKSB7XG4gICAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIEpTT04uc3RyaW5naWZ5KHVwZGF0ZWRQcm9qZWN0KSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBnZXRQcm9qZWN0cygpIHtcbiAgICBsZXQgcHJvamVjdExpc3QgPSBbXTtcbiAgICBsZXQgZGVmYXVsdFByb2plY3QgPSAnJztcbiAgICBcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxvY2FsU3RvcmFnZS5sZW5ndGg7IGkrKykge1xuICAgICAgICBjb25zdCBrZXkgPSBsb2NhbFN0b3JhZ2Uua2V5KGkpO1xuICAgICAgICBjb25zdCBzdHJpbmdPYmogPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShrZXkpO1xuICAgICAgICBjb25zdCBwYXJzZWRPYmogPSBKU09OLnBhcnNlKHN0cmluZ09iaik7XG4gICAgICAgIHByb2plY3RMaXN0LnB1c2gocGFyc2VkT2JqKTtcbiAgICAgICAgXG4gICAgICAgIGlmIChwYXJzZWRPYmouZGVmYXVsdCkge1xuICAgICAgICAgICAgZGVmYXVsdFByb2plY3QgPSBrZXk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHsgcHJvamVjdExpc3RcbiAgICAgICAgICAgICxkZWZhdWx0UHJvamVjdCBcbiAgICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZFRhc2tzKHByb2plY3ROYW1lKSB7XG4gICAgXG4gICAgY29uc3Qgc3RyaW5nT2JqID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0ocHJvamVjdE5hbWUpO1xuICAgIGNvbnN0IHBhcnNlZE9iaiA9IEpTT04ucGFyc2Uoc3RyaW5nT2JqKTtcbiAgICBjb25zdCB0YXNrcyA9IHBhcnNlZE9iai50YXNrO1xuICAgIGNvbnN0IHRhc2tDb3VudCA9IE9iamVjdC5rZXlzKHBhcnNlZE9iai50YXNrKS5sZW5ndGg7XG5cbiAgICByZXR1cm4geyB0YXNrcywgdGFza0NvdW50IH07XG59IiwiaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5pbXBvcnQgVGFzayBmcm9tIFwiLi90YXNrXCI7XG5pbXBvcnQge3Nob3dOZXdQcm9qZWN0Rm9ybSwgcmVuZGVyTmV3UHJvamVjdEZvcm0sIHJlbmRlckVkaXRQcm9qZWN0Rm9ybSwgc2hvd0VkaXRQcm9qZWN0Rm9ybX0gZnJvbSBcIi4vZm9ybS1wcm9qZWN0LmpzXCJcbi8vIGltcG9ydCBnZXRQcm9qZWN0cywgeyBsb2FkVGFza3MsIHN0b3JlUHJvamVjdCB9IGZyb20gJy4vbG9jYWxzdG9yYWdlLmpzJztcbmltcG9ydCBwdWJzdWIgZnJvbSAnLi9wdWJzdWIuanMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9qZWN0IHtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihuYW1lLCB0aXRsZSwgZGVmYXVsdFByb2plY3QsIGlzQWN0aXZlLCB0YXNrRGF0YSkge1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVmYXVsdCA9IGRlZmF1bHRQcm9qZWN0O1xuICAgICAgICB0aGlzLmlzQWN0aXZlID0gaXNBY3RpdmU7XG4gICAgICAgIHRoaXMudGFzayA9ICB0YXNrRGF0YS5tYXAodGFza0RhdGEgPT4gbmV3IFRhc2soXG4gICAgICAgICAgICB0YXNrRGF0YS50aXRsZSwgXG4gICAgICAgICAgICB0YXNrRGF0YS5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICB0YXNrRGF0YS5kdWVEYXRlLCBcbiAgICAgICAgICAgIHRhc2tEYXRhLmlzQ29tcGxldGVkLCBcbiAgICAgICAgICAgIHRhc2tEYXRhLmlzSW1wb3J0YW50XG4gICAgICAgICAgICApKTtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgc3RhdGljIGdldERlZmF1bHRQcm9qZWN0KHByb2plY3RzKSB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0cy5maWx0ZXIocHJvamVjdCA9PiBwcm9qZWN0LmRlZmF1bHQpOyAgICBcbiAgICB9O1xuXG4gICAgc3RhdGljIHN1YnNjcmliZVRvUHJvamVjdENoYW5nZXMoKSB7XG4gICAgICAgIHB1YnN1Yi5zdWJzY3JpYmUoJ3Byb2plY3RBZGRlZCcsIFByb2plY3QuaGFuZGxlUHJvamVjdEFkZGVkKTtcbiAgICAgICAgcHVic3ViLnN1YnNjcmliZSgncHJvamVjdFVwZGF0ZWQnLCBQcm9qZWN0LmhhbmRsZVByb2plY3RVcGRhdGVkKTtcbiAgICAgICAgLy8gcHVic3ViLnN1YnNjcmliZSgncHJvamVjdEFkZGVkJywgcHJvamVjdEluc3RhbmNlLmhhbmRsZVByb2plY3RBZGRlZC5iaW5kKHByb2plY3RJbnN0YW5jZSkpO1xuICAgICAgICAvLyBwdWJzdWIuc3Vic2NyaWJlKCdwcm9qZWN0VXBkYXRlZCcsIHByb2plY3RJbnN0YW5jZS5oYW5kbGVQcm9qZWN0VXBkYXRlZC5iaW5kKHByb2plY3RJbnN0YW5jZSkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVQcm9qZWN0QWRkZWQocHJvamVjdCkge1xuICAgICAgICBwcm9qZWN0Ll9yZW5kZXJQcm9qZWN0cygpO1xuICAgIH1cblxuICAgIC8vVE9ETyBPTEROQU1FIExJTktFRCBUTyBQUkVWSU9VUyBPQkpFQ1QgT04gU1VCU0VRVUVOVCBVUERBVEVcbiAgICAvL1RPRE8gTk9UIFNVUkUgV0hZLCBNSUdIVCBORUVEIFRPIENMRUFSIElUIFNPTUVIT1dcbiAgICAvL1RPRE8gTUlHSFQgQkUgV0hBVCdTIENBVVNJTkcgUFJPQkxFTVxuICAgIHN0YXRpYyBoYW5kbGVQcm9qZWN0VXBkYXRlZCh7IG9sZE5hbWUsIHVwZGF0ZWRQcm9qZWN0IH0pIHtcbiAgICAgICAgY29uc3QgbmF2SXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubmF2LWl0ZW0nKTtcbiAgICAgICAgbmF2SXRlbXMuZm9yRWFjaChuYXZJdGVtID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG5hdk5hbWUgPSBuYXZJdGVtLnF1ZXJ5U2VsZWN0b3IoJy5uYXYtbmFtZScpO1xuICAgICAgICAgICAgaWYgKG5hdk5hbWUudGV4dENvbnRlbnQgPT09IG9sZE5hbWUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnaGFuZGxlUHJvamVjdFVwZGF0ZWQgLyBwcm9qZWN0LmpzIC0gb2xkIG5hbWU6ICcgKyBvbGROYW1lKTtcblxuICAgICAgICAgICAgICAgIG5hdk5hbWUudGV4dENvbnRlbnQgPSB1cGRhdGVkUHJvamVjdC5uYW1lO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYW5kbGVQcm9qZWN0VXBkYXRlZCAvIHByb2plY3QuanMgLSBuZXcgbmFtZTogJyArIG5hdk5hbWUudGV4dENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCctLS0tLS0tLS0tLS0tJyk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIFxuICAgIF9iaW5kUHJvamVjdEV2ZW50cygpIHtcbiAgICAgICAgLy9uZXcgcHJvamVjdCBidXR0b25cbiAgICAgICAgY29uc3QgYnRuTmV3UHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tbmV3LXByb2plY3QnKTtcbiAgICAgICAgYnRuTmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlbmRlck5ld1Byb2plY3RGb3JtKTtcbiAgICAgICAgXG4gICAgICAgIC8vZWRpdCBpbnRlcmFjdGlvbiBmb3IgZWFjaCBwcm9qZWN0IGluIHRoZSBuYXZcbiAgICB9O1xuICAgIFxuICAgIF9yZW5kZXJQcm9qZWN0cygpIHtcbiAgICAgICAgY29uc3QgbmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdicpO1xuICAgICAgICBjb25zdCBuYXZEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgbmF2RGl2LmNsYXNzTmFtZSA9ICduYXYtaXRlbSc7XG4gICAgICAgIG5hdi5hcHBlbmRDaGlsZChuYXZEaXYpO1xuXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0TmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdE5hbWVEaXYuY2xhc3NOYW1lID0gJ25hdi1uYW1lJztcbiAgICAgICAgICAgIHByb2plY3ROYW1lRGl2LnRleHRDb250ZW50ID0gdGhpcy5uYW1lO1xuICAgICAgICAgICAgbmF2RGl2LmFwcGVuZENoaWxkKHByb2plY3ROYW1lRGl2KTtcblxuICAgICAgICAgICAgY29uc3QgcHJvamVjdE9wdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgcHJvamVjdE9wdGlvbkRpdi5jbGFzc05hbWUgPSAnbmF2LW9wdGlvbidcbiAgICAgICAgICAgIG5hdkRpdi5hcHBlbmRDaGlsZChwcm9qZWN0T3B0aW9uRGl2KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IGJ0blByb2plY3RPcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICBidG5Qcm9qZWN0T3B0aW9uLnRleHRDb250ZW50ID0gJy4uLic7XG4gICAgICAgICAgICAgICAgYnRuUHJvamVjdE9wdGlvbi5jbGFzc05hbWUgPSAnYnRuLXByb2plY3QtZWRpdCc7XG4gICAgICAgICAgICAgICAgYnRuUHJvamVjdE9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmVuZGVyRWRpdFByb2plY3RGb3JtKHRoaXMpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZygnX3JlbmRlclByb2plY3RzKCkgLyBwcm9qZWN0LmpzJyk7XG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgcHJvamVjdE9wdGlvbkRpdi5hcHBlbmRDaGlsZChidG5Qcm9qZWN0T3B0aW9uKTtcbiAgICB9O1xuXG4gICAgYXJjaGl2ZVByb2plY3QoKSB7fTtcblxuICAgIGNoYW5nZURlZmF1bHRQcm9qZWN0KCkge307XG59IiwiY29uc3QgcHVic3ViID0gKCgpID0+IHtcbiAgICBjb25zdCBldmVudHMgPSB7fTtcblxuICAgIGZ1bmN0aW9uIHN1YnNjcmliZShldmVudCwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKCFldmVudHNbZXZlbnRdKSB7XG4gICAgICAgICAgICBldmVudHNbZXZlbnRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgZXZlbnRzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBwdWJsaXNoKGV2ZW50LCBkYXRhKSB7XG4gICAgICAgIGlmICghZXZlbnRzW2V2ZW50XSkgcmV0dXJuO1xuICAgICAgICBldmVudHNbZXZlbnRdLmZvckVhY2goY2FsbGJhY2sgPT4gY2FsbGJhY2soZGF0YSkpO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICAgIHN1YnNjcmliZSxcbiAgICAgICAgcHVibGlzaFxuICAgIH07XG59KSgpO1xuXG5leHBvcnQgZGVmYXVsdCBwdWJzdWI7IiwiaW1wb3J0IHsgY29tcGFyZUFzYywgZm9ybWF0IH0gZnJvbSBcImRhdGUtZm5zXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIHN0YXRpYyB0YXNrTGlzdENvbnRhaW5lciA9ICd0YXNrbGlzdCc7XG5cbiAgICBjb25zdHJ1Y3RvciAodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBpc0NvbXBsZXRlZCwgaXNJbXBvcnRhbnQpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuZHVlRGF0ZSA9IGR1ZURhdGU7XG4gICAgICAgIHRoaXMuaXNDb21wbGV0ZWQgPSBpc0NvbXBsZXRlZDtcbiAgICAgICAgdGhpcy5pc0ltcG9ydGFudCA9IGlzSW1wb3J0YW50O1xuICAgIH07XG5cbiAgICBfYmluZFRhc2tFdmVudHMoKSB7fTtcbiAgICBcbiAgICBfcmVuZGVyVGFza3MoKSB7XG4gICAgICAgIC8vUFVCU1VCXG4gICAgICAgIGNvbnN0IHRhc2tMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoVGFzay50YXNrTGlzdENvbnRhaW5lcik7XG5cbiAgICAgICAgY29uc3QgdGFza1BhcmVudERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB0YXNrUGFyZW50RGl2LmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kQ2hpbGQodGFza1BhcmVudERpdik7XG4gICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFza1N0YXR1c0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza1BhcmVudERpdi5hcHBlbmRDaGlsZCh0YXNrU3RhdHVzRGl2KTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrU3RhdHVzQ2hlY2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICAgICAgICAgIHRhc2tTdGF0dXNDaGVjay50eXBlID0gJ2NoZWNrYm94JztcbiAgICAgICAgICAgICAgICB0YXNrU3RhdHVzRGl2LmFwcGVuZENoaWxkKHRhc2tTdGF0dXNDaGVjayk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrVGl0bGVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tUaXRsZURpdi50ZXh0Q29udGVudCA9IHRoaXMudGl0bGU7XG4gICAgICAgICAgICB0YXNrUGFyZW50RGl2LmFwcGVuZENoaWxkKHRhc2tUaXRsZURpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tEZXNjRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrRGVzY0Rpdi50ZXh0Q29udGVudCA9IHRoaXMuZGVzY3JpcHRpb247XG4gICAgICAgICAgICB0YXNrUGFyZW50RGl2LmFwcGVuZENoaWxkKHRhc2tEZXNjRGl2KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3QgdGFza0R1ZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza0R1ZURpdi50ZXh0Q29udGVudCA9IHRoaXMuZHVlRGF0ZTtcbiAgICAgICAgICAgIHRhc2tQYXJlbnREaXYuYXBwZW5kQ2hpbGQodGFza0R1ZURpdik7XG5cbiAgICAgICAgICAgIGNvbnN0IHRhc2tPcHRpb25EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tQYXJlbnREaXYuYXBwZW5kQ2hpbGQodGFza09wdGlvbkRpdik7XG5cbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrT3B0aW9uQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGFza09wdGlvbkJ1dHRvbi50ZXh0Q29udGVudCA9ICcuLi4nO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIHRhc2tPcHRpb25EaXYuYXBwZW5kQ2hpbGQodGFza09wdGlvbkJ1dHRvbik7XG4gICAgfTtcblxuICAgIGFkZFRhc2soKSB7fTtcbiAgICBlZGl0VGFzaygpIHt9O1xuICAgIGRlbGV0ZVRhc2soKSB7fTtcbiAgICByZWFzc2lnblRhc2tQcm9qZWN0KCkge307XG4gICAgY29tcGxldGVUYXNrKCkge307XG4gICAgbWFya0ltcG9ydGFudFRhc2soKSB7fTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=