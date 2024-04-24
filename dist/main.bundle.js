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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;;IAEI,uBAAuB;IACvB,UAAU;IACV,UAAU;IACV,0BAA0B;IAC1B,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,8BAA8B;IAC9B,uCAAuC;IACvC;;;;uBAImB;AACvB;;AAEA;IACI,iBAAiB;;IAEjB,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,aAAa;IACb,mBAAmB;IACnB,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,gBAAgB;IAChB,kBAAkB;AACtB;;AAEA;IACI,cAAc;IACd,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;IACtB,aAAa;IACb,SAAS;AACb;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,aAAa;AACjB;;AAEA;IACI,mBAAmB;IACnB,mBAAmB;IACnB,mBAAmB;IACnB,aAAa;IACb,sBAAsB;AAC1B;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,aAAa;IACb,0CAA0C;IAC1C,yDAAyD;IACzD,mBAAmB;IACnB,QAAQ;IACR,aAAa;AACjB;;;AAGA;IACI,iBAAiB;IACjB,YAAY;IACZ,mBAAmB;IACnB,mBAAmB;AACvB;;;AAGA;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,oCAAoC;IACpC,UAAU;AACd;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,aAAa;AACjB;;AAEA;IACI,kBAAkB;IAClB,QAAQ;IACR,SAAS;IACT,gCAAgC;IAChC,uBAAuB;IACvB,aAAa;IACb,YAAY;AAChB;;AAEA;;GAEG;;AAEH;IACI,sBAAsB;IACtB,WAAW;IACX,YAAY;AAChB;;;AAGA;IACI,aAAa;IACb,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;AACtB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,WAAW;IACX,eAAe;EACjB;;;;AAIF;AACA","sourcesContent":["body \n{\n    background-color: black;\n    width: 50%;\n    right: 50%;\n    transform: translateX(50%);\n    color: white;\n}\n\n#content {\n    display: grid;\n    grid-template-columns: 1fr 4fr;\n    grid-template-rows: 1.5fr 0.5fr 4fr 1fr;\n    grid-template-areas: \n        \"header header\"\n        \"nav subnav\"\n        \"nav tasklist\"\n        \"footer footer\";\n}\n\n#header {\n    grid-area: header;\n\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    height: 120px;\n    border-style: solid;\n    border-color: white;\n    text-align: center;\n    color: white;\n}\n\n#footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    min-height: 50px;\n    text-align: center;\n}\n\n#nav {\n    grid-area: nav;\n    border-style: solid;\n    border-color: white;\n    display: flex;\n    flex-direction: column;\n    padding: 10px;\n    gap: 10px;\n}\n\n.new-project {\n    /* text-align: right; */\n}\n\n#subnav {\n    grid-area: subnav;\n    height: 45px;\n    border-style: solid;\n    border-color: white;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    padding: 10px;\n}\n\n#tasklist {\n    grid-area: tasklist;\n    border-style: solid;\n    border-color: white;\n    display: flex;\n    flex-direction: column;\n}\n\n.task-due-div, .task-option {\n    text-align: center;\n}\n\n.task {\n    display: grid;\n    grid-template-columns: 1fr 1fr 5fr 2fr 1fr;\n    grid-template-rows: repeat(auto-fill, minmax(30px, auto));\n    align-items: center;\n    gap: 5px;\n    padding: 10px;\n}\n\n\n#footer {\n    grid-area: footer;\n    height: 30px;\n    border-style: solid;\n    border-color: white;\n}\n\n\n#new-project-modal, #new-task-modal {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n    z-index: 1;\n}\n\n#new-project-modal {\n    display: none;\n}\n\n#new-task-modal {\n    display: none;\n}\n\n.modal-content {\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    background-color: white;\n    padding: 20px;\n    color: black;\n}\n\n/* .form-inputs {\n    width: 100%;\n} */\n\n#project-name {\n    box-sizing: border-box;\n    width: 100%;\n    height: 28px;\n}\n\n\n.modal-buttons {\n    display: flex;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\n.modal-buttons button {\n    margin-right: 10px;\n}\n\n.modal-buttons button + button {\n    margin-right: 10px;\n}\n\n#close-modal-task, #close-modal-project {\n    position: absolute;\n    top: 10px;\n    right: 10px;\n    cursor: pointer;\n  }\n  \n\n\n@media (max-width: 500px) {\n}"],"sourceRoot":""}]);
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
/* harmony export */   addNewProject: () => (/* binding */ addNewProject),
/* harmony export */   renderProjectForm: () => (/* binding */ renderProjectForm),
/* harmony export */   showNewProjectForm: () => (/* binding */ showNewProjectForm),
/* harmony export */   updateProject: () => (/* binding */ updateProject)
/* harmony export */ });
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ "./src/project.js");
/* harmony import */ var _pubsub_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pubsub.js */ "./src/pubsub.js");
//TODO make it possible to specify default project
//TODO however, need if a default project is changed
//TODO then need to go thru all objects and mark other prj to false





function showNewProjectForm() {
    const btnNewProject = document.querySelector('#btn-new-project');
    btnNewProject.addEventListener('click', addNewProject);
}

function addNewProject() {
    renderProjectForm();
    
    const fieldProject = document.querySelector('#project-name');
    const btnSaveProject = document.querySelector('#btn-save-project');
    btnSaveProject.addEventListener('click', (event) => {
        event.preventDefault();
        if (fieldProject.value.trim() !== '') {
            const newProject = new _project_js__WEBPACK_IMPORTED_MODULE_0__["default"](
                fieldProject.value.trim(), 
                fieldProject.value.trim(), 
                false, //DEFAULT STATUS
                true,
                []
            );
            fieldProject.value = '';
            // newProject._renderProjects();
            _pubsub_js__WEBPACK_IMPORTED_MODULE_1__["default"].publish('projectAdded', newProject);
            //TODO save to local or emit it to pubsub
            // pubsub.publish('newProject', newProject);

            closeProjectModal();
        }
    })


}
//edit project



function closeProjectModal() {
    const newProjectModal = document.querySelector('#new-project-modal');
    newProjectModal.style.display = 'none';
};

function renderProjectForm() {
    //TODO figure out how to make this function load existing using argument

    //RENDER MODAL
    const newProjectModal = document.querySelector('#new-project-modal');
    newProjectModal.style.display = 'block';
    
    //CLOSE MODAL INTERACTION
    const btnCloseProjectModal = document.querySelector('#close-modal-project');
    const btnCancelProjectModal = document.querySelector("#btn-cancel-project");

    
    btnCloseProjectModal.addEventListener('click', closeProjectModal);
    btnCancelProjectModal.addEventListener('click', closeProjectModal);
}


function updateProject() {
    //use class constructor if new
    //save this to local storage

}



//notify pubsub

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
    const navItems = document.querySelectorAll('.nav-item');

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
    _project_js__WEBPACK_IMPORTED_MODULE_1__["default"].subscribeToProjectAdded();

    //INITIALISE FORMS
    (0,_form_project_js__WEBPACK_IMPORTED_MODULE_4__.showNewProjectForm)();
    
    //TODO replace this function with the method of the Project class
    //TODO to initialise the New Project button
    //TODO interface through the Class
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

function generateGUID() {
    const now = new Date();
    const randomPart = Math.floor(Math.random() * 10000);
    const guid = `${now.getUTCMilliseconds()}${now.getUTCMonth()}${now.getUTCFullYear()}${randomPart}`;
    return guid;
  }

function storeProject(key, obj) {
    localStorage.setItem(key, JSON.stringify(obj));
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

    static subscribeToProjectAdded() {
        _pubsub_js__WEBPACK_IMPORTED_MODULE_2__["default"].subscribe('projectAdded', Project.handleProjectAdded);
    }

    static handleProjectAdded(project) {
        project._renderProjects();
    }
    
    _bindProjectEvents() {
        //new project button
        const btnNewProject = document.querySelector('#btn-new-project');
        btnNewProject.addEventListener('click', _form_project_js__WEBPACK_IMPORTED_MODULE_1__.renderProjectForm);
        
        //edit interaction for each project in the nav
    };
    
    _renderProjects() {
        const nav = document.querySelector('#nav');
        const projectNav = document.createElement('div');
        projectNav.textContent = this.name;
        projectNav.className = 'nav-item';        
        nav.appendChild(projectNav);
    };

    renameProject() {
        //TODO have this method call add project form
        //call the projectform with 'this'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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bEI7O0FBRWxCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELDZDQUFJO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxRQUFRLGtEQUFNO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsK0RBQWlCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUMxREE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVELGlFQUFlLE1BQU07Ozs7Ozs7Ozs7Ozs7O0FDckJ5Qjs7QUFFL0I7QUFDZjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGFza2VyLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90YXNrZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Rhc2tlci8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Rhc2tlci8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90YXNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGFza2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90YXNrZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGFza2VyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Rhc2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Rhc2tlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Rhc2tlci8uL3NyYy9mb3JtLXByb2plY3QuanMiLCJ3ZWJwYWNrOi8vdGFza2VyLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3Rhc2tlci8uL3NyYy9sb2NhbHN0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdGFza2VyLy4vc3JjL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vdGFza2VyLy4vc3JjL3B1YnN1Yi5qcyIsIndlYnBhY2s6Ly90YXNrZXIvLi9zcmMvdGFzay5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgYm9keSBcbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICB3aWR0aDogNTAlO1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDUwJSk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jY29udGVudCB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciA0ZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVmciAwLjVmciA0ZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtYXJlYXM6IFxuICAgICAgICBcImhlYWRlciBoZWFkZXJcIlxuICAgICAgICBcIm5hdiBzdWJuYXZcIlxuICAgICAgICBcIm5hdiB0YXNrbGlzdFwiXG4gICAgICAgIFwiZm9vdGVyIGZvb3RlclwiO1xufVxuXG4jaGVhZGVyIHtcbiAgICBncmlkLWFyZWE6IGhlYWRlcjtcblxuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBoZWlnaHQ6IDEyMHB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4jZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWluLWhlaWdodDogNTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiNuYXYge1xuICAgIGdyaWQtYXJlYTogbmF2O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBnYXA6IDEwcHg7XG59XG5cbi5uZXctcHJvamVjdCB7XG4gICAgLyogdGV4dC1hbGlnbjogcmlnaHQ7ICovXG59XG5cbiNzdWJuYXYge1xuICAgIGdyaWQtYXJlYTogc3VibmF2O1xuICAgIGhlaWdodDogNDVweDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cbiN0YXNrbGlzdCB7XG4gICAgZ3JpZC1hcmVhOiB0YXNrbGlzdDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG4udGFzay1kdWUtZGl2LCAudGFzay1vcHRpb24ge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRhc2sge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDVmciAyZnIgMWZyO1xuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDMwcHgsIGF1dG8pKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGdhcDogNXB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG5cblxuI2Zvb3RlciB7XG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcbn1cblxuXG4jbmV3LXByb2plY3QtbW9kYWwsICNuZXctdGFzay1tb2RhbCB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgei1pbmRleDogMTtcbn1cblxuI25ldy1wcm9qZWN0LW1vZGFsIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4jbmV3LXRhc2stbW9kYWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5tb2RhbC1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiA1MCU7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4vKiAuZm9ybS1pbnB1dHMge1xuICAgIHdpZHRoOiAxMDAlO1xufSAqL1xuXG4jcHJvamVjdC1uYW1lIHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMjhweDtcbn1cblxuXG4ubW9kYWwtYnV0dG9ucyB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5tb2RhbC1idXR0b25zIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4ubW9kYWwtYnV0dG9ucyBidXR0b24gKyBidXR0b24ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuI2Nsb3NlLW1vZGFsLXRhc2ssICNjbG9zZS1tb2RhbC1wcm9qZWN0IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHJpZ2h0OiAxMHB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxuICBcblxuXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0lBRUksdUJBQXVCO0lBQ3ZCLFVBQVU7SUFDVixVQUFVO0lBQ1YsMEJBQTBCO0lBQzFCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsOEJBQThCO0lBQzlCLHVDQUF1QztJQUN2Qzs7Ozt1QkFJbUI7QUFDdkI7O0FBRUE7SUFDSSxpQkFBaUI7O0lBRWpCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLHVCQUF1QjtBQUMzQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYiwwQ0FBMEM7SUFDMUMseURBQXlEO0lBQ3pELG1CQUFtQjtJQUNuQixRQUFRO0lBQ1IsYUFBYTtBQUNqQjs7O0FBR0E7SUFDSSxpQkFBaUI7SUFDakIsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixtQkFBbUI7QUFDdkI7OztBQUdBO0lBQ0ksZUFBZTtJQUNmLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWixvQ0FBb0M7SUFDcEMsVUFBVTtBQUNkOztBQUVBO0lBQ0ksYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxnQ0FBZ0M7SUFDaEMsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBOztHQUVHOztBQUVIO0lBQ0ksc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOzs7QUFHQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0lBQ1gsZUFBZTtFQUNqQjs7OztBQUlGO0FBQ0FcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSBcXG57XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgICB3aWR0aDogNTAlO1xcbiAgICByaWdodDogNTAlO1xcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoNTAlKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4jY29udGVudCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDRmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxLjVmciAwLjVmciA0ZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiBcXG4gICAgICAgIFxcXCJoZWFkZXIgaGVhZGVyXFxcIlxcbiAgICAgICAgXFxcIm5hdiBzdWJuYXZcXFwiXFxuICAgICAgICBcXFwibmF2IHRhc2tsaXN0XFxcIlxcbiAgICAgICAgXFxcImZvb3RlciBmb290ZXJcXFwiO1xcbn1cXG5cXG4jaGVhZGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBoZWFkZXI7XFxuXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBoZWlnaHQ6IDEyMHB4O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBtaW4taGVpZ2h0OiA1MHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbiNuYXYge1xcbiAgICBncmlkLWFyZWE6IG5hdjtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgZ2FwOiAxMHB4O1xcbn1cXG5cXG4ubmV3LXByb2plY3Qge1xcbiAgICAvKiB0ZXh0LWFsaWduOiByaWdodDsgKi9cXG59XFxuXFxuI3N1Ym5hdiB7XFxuICAgIGdyaWQtYXJlYTogc3VibmF2O1xcbiAgICBoZWlnaHQ6IDQ1cHg7XFxuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XFxuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG4jdGFza2xpc3Qge1xcbiAgICBncmlkLWFyZWE6IHRhc2tsaXN0O1xcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFzay1kdWUtZGl2LCAudGFzay1vcHRpb24ge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi50YXNrIHtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDVmciAyZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgzMHB4LCBhdXRvKSk7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogNXB4O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbn1cXG5cXG5cXG4jZm9vdGVyIHtcXG4gICAgZ3JpZC1hcmVhOiBmb290ZXI7XFxuICAgIGhlaWdodDogMzBweDtcXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcXG4gICAgYm9yZGVyLWNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuXFxuI25ldy1wcm9qZWN0LW1vZGFsLCAjbmV3LXRhc2stbW9kYWwge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbiAgICB6LWluZGV4OiAxO1xcbn1cXG5cXG4jbmV3LXByb2plY3QtbW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4jbmV3LXRhc2stbW9kYWwge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4ubW9kYWwtY29udGVudCB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiA1MCU7XFxuICAgIGxlZnQ6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi8qIC5mb3JtLWlucHV0cyB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn0gKi9cXG5cXG4jcHJvamVjdC1uYW1lIHtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMjhweDtcXG59XFxuXFxuXFxuLm1vZGFsLWJ1dHRvbnMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xcbn1cXG5cXG4ubW9kYWwtYnV0dG9ucyBidXR0b24ge1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxufVxcblxcbi5tb2RhbC1idXR0b25zIGJ1dHRvbiArIGJ1dHRvbiB7XFxuICAgIG1hcmdpbi1yaWdodDogMTBweDtcXG59XFxuXFxuI2Nsb3NlLW1vZGFsLXRhc2ssICNjbG9zZS1tb2RhbC1wcm9qZWN0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICB0b3A6IDEwcHg7XFxuICAgIHJpZ2h0OiAxMHB4O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBcXG5cXG5cXG5AbWVkaWEgKG1heC13aWR0aDogNTAwcHgpIHtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vVE9ETyBtYWtlIGl0IHBvc3NpYmxlIHRvIHNwZWNpZnkgZGVmYXVsdCBwcm9qZWN0XG4vL1RPRE8gaG93ZXZlciwgbmVlZCBpZiBhIGRlZmF1bHQgcHJvamVjdCBpcyBjaGFuZ2VkXG4vL1RPRE8gdGhlbiBuZWVkIHRvIGdvIHRocnUgYWxsIG9iamVjdHMgYW5kIG1hcmsgb3RoZXIgcHJqIHRvIGZhbHNlXG5cbmltcG9ydCBQcm9qZWN0IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgcHVic3ViIGZyb20gJy4vcHVic3ViLmpzJztcblxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd05ld1Byb2plY3RGb3JtKCkge1xuICAgIGNvbnN0IGJ0bk5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLW5ldy1wcm9qZWN0Jyk7XG4gICAgYnRuTmV3UHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFkZE5ld1Byb2plY3QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTmV3UHJvamVjdCgpIHtcbiAgICByZW5kZXJQcm9qZWN0Rm9ybSgpO1xuICAgIFxuICAgIGNvbnN0IGZpZWxkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LW5hbWUnKTtcbiAgICBjb25zdCBidG5TYXZlUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG4tc2F2ZS1wcm9qZWN0Jyk7XG4gICAgYnRuU2F2ZVByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKGZpZWxkUHJvamVjdC52YWx1ZS50cmltKCkgIT09ICcnKSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0ID0gbmV3IFByb2plY3QoXG4gICAgICAgICAgICAgICAgZmllbGRQcm9qZWN0LnZhbHVlLnRyaW0oKSwgXG4gICAgICAgICAgICAgICAgZmllbGRQcm9qZWN0LnZhbHVlLnRyaW0oKSwgXG4gICAgICAgICAgICAgICAgZmFsc2UsIC8vREVGQVVMVCBTVEFUVVNcbiAgICAgICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgICAgIFtdXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgZmllbGRQcm9qZWN0LnZhbHVlID0gJyc7XG4gICAgICAgICAgICAvLyBuZXdQcm9qZWN0Ll9yZW5kZXJQcm9qZWN0cygpO1xuICAgICAgICAgICAgcHVic3ViLnB1Ymxpc2goJ3Byb2plY3RBZGRlZCcsIG5ld1Byb2plY3QpO1xuICAgICAgICAgICAgLy9UT0RPIHNhdmUgdG8gbG9jYWwgb3IgZW1pdCBpdCB0byBwdWJzdWJcbiAgICAgICAgICAgIC8vIHB1YnN1Yi5wdWJsaXNoKCduZXdQcm9qZWN0JywgbmV3UHJvamVjdCk7XG5cbiAgICAgICAgICAgIGNsb3NlUHJvamVjdE1vZGFsKCk7XG4gICAgICAgIH1cbiAgICB9KVxuXG5cbn1cbi8vZWRpdCBwcm9qZWN0XG5cblxuXG5mdW5jdGlvbiBjbG9zZVByb2plY3RNb2RhbCgpIHtcbiAgICBjb25zdCBuZXdQcm9qZWN0TW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmV3LXByb2plY3QtbW9kYWwnKTtcbiAgICBuZXdQcm9qZWN0TW9kYWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJQcm9qZWN0Rm9ybSgpIHtcbiAgICAvL1RPRE8gZmlndXJlIG91dCBob3cgdG8gbWFrZSB0aGlzIGZ1bmN0aW9uIGxvYWQgZXhpc3RpbmcgdXNpbmcgYXJndW1lbnRcblxuICAgIC8vUkVOREVSIE1PREFMXG4gICAgY29uc3QgbmV3UHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25ldy1wcm9qZWN0LW1vZGFsJyk7XG4gICAgbmV3UHJvamVjdE1vZGFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIFxuICAgIC8vQ0xPU0UgTU9EQUwgSU5URVJBQ1RJT05cbiAgICBjb25zdCBidG5DbG9zZVByb2plY3RNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjbG9zZS1tb2RhbC1wcm9qZWN0Jyk7XG4gICAgY29uc3QgYnRuQ2FuY2VsUHJvamVjdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNidG4tY2FuY2VsLXByb2plY3RcIik7XG5cbiAgICBcbiAgICBidG5DbG9zZVByb2plY3RNb2RhbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGNsb3NlUHJvamVjdE1vZGFsKTtcbiAgICBidG5DYW5jZWxQcm9qZWN0TW9kYWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjbG9zZVByb2plY3RNb2RhbCk7XG59XG5cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3QoKSB7XG4gICAgLy91c2UgY2xhc3MgY29uc3RydWN0b3IgaWYgbmV3XG4gICAgLy9zYXZlIHRoaXMgdG8gbG9jYWwgc3RvcmFnZVxuXG59XG5cblxuXG4vL25vdGlmeSBwdWJzdWIiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuXG5pbXBvcnQgUHJvamVjdCBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IFRhc2sgZnJvbSBcIi4vdGFza1wiO1xuaW1wb3J0IGdldFByb2plY3RzLCB7IGxvYWRUYXNrcywgc3RvcmVQcm9qZWN0IH0gZnJvbSAnLi9sb2NhbHN0b3JhZ2UuanMnO1xuaW1wb3J0IHsgc2hvd05ld1Byb2plY3RGb3JtLCByZW5kZXJQcm9qZWN0Rm9ybSwgc2F2ZVByb2plY3RGb3JtIH0gZnJvbSAnLi9mb3JtLXByb2plY3QuanMnO1xuaW1wb3J0IFB1YlN1YiBmcm9tICcuL3B1YnN1Yi5qcyc7XG5cbi8vUE9QVUxBVEUgU09NRSBEVU1NWSBEQVRBXG5sZXQgcHJvamVjdDEgPSBuZXcgUHJvamVjdCgncHJvamVjdDEnLCdEZWZhdWx0JywgdHJ1ZSwgdHJ1ZSwgW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICdUYXNrIDEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgbXkgZmlyc3QgdGFzaycsXG4gICAgICAgIGR1ZURhdGU6ICcyNS0wMy0yMDI0JyxcbiAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBpc0ltcG9ydGFudDogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdUYXNrIDInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgbXkgc2Vjb25kIHRhc2snLFxuICAgICAgICBkdWVEYXRlOiAnMjUtMDMtMjAyNCcsXG4gICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgaXNJbXBvcnRhbnQ6IHRydWVcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdUYXNrIDMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgbXkgdGhpcmQgdGFzaycsXG4gICAgICAgIGR1ZURhdGU6ICcyNS0wMy0yMDI0JyxcbiAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBpc0ltcG9ydGFudDogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdUYXNrIDInLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgbXkgZm91cnRoIHRhc2snLFxuICAgICAgICBkdWVEYXRlOiAnMjUtMDMtMjAyNCcsXG4gICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgaXNJbXBvcnRhbnQ6IGZhbHNlXG4gICAgfV1cbik7XG5cbmxldCBwcm9qZWN0MiA9IG5ldyBQcm9qZWN0KCdwcm9qZWN0MicsICdIb3VzZSBDaG9yZXMnLCBmYWxzZSwgdHJ1ZSwgW1xuICAgIHtcbiAgICAgICAgdGl0bGU6ICdUYXNrIDEnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgbXkgZmlyc3QgdGFzaycsXG4gICAgICAgIGR1ZURhdGU6ICcyNS0wMy0yMDI0JyxcbiAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBpc0ltcG9ydGFudDogdHJ1ZVxuICAgIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ1Rhc2sgMicsXG4gICAgICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBteSBzZWNvbmQgdGFzaycsXG4gICAgICAgIGR1ZURhdGU6ICcyNS0wMy0yMDI0JyxcbiAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBpc0ltcG9ydGFudDogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdUYXNrIDMnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgbXkgdGhpcmQgdGFzaycsXG4gICAgICAgIGR1ZURhdGU6ICcyNS0wMy0yMDI0JyxcbiAgICAgICAgaXNDb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgICBpc0ltcG9ydGFudDogZmFsc2VcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdUYXNrIDQnLFxuICAgICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgbXkgZm91cnRoIHRhc2snLFxuICAgICAgICBkdWVEYXRlOiAnMjUtMDMtMjAyNCcsXG4gICAgICAgIGlzQ29tcGxldGVkOiBmYWxzZSxcbiAgICAgICAgaXNJbXBvcnRhbnQ6IHRydWVcbiAgICB9XVxuKTtcblxubG9jYWxTdG9yYWdlLmNsZWFyKCk7XG5zdG9yZVByb2plY3QoJ3Byb2plY3QxJywgcHJvamVjdDEpO1xuc3RvcmVQcm9qZWN0KCdwcm9qZWN0MicsIHByb2plY3QyKTtcblxuLy9JTklUSUFMSVNFIFRIRSBQQUdFIEJZIFBSRVBPUFVMQVRJTkcgREFUQSBGUk9NIExPQ0FMU1RPUkFHRVxuLy9CWSBDQUxMSU5HIFRIRSBSRU5ERVIgTUVUSE9EIFdJVEhJTiBQUk9KRUNUIENMQVNTXG4oZnVuY3Rpb24oKSB7XG4gICAgY29uc3QgcHJvamVjdERhdGEgPSBnZXRQcm9qZWN0cygpO1xuICAgIGNvbnN0IHByb2plY3RMaXN0ID0gcHJvamVjdERhdGEucHJvamVjdExpc3Q7XG5cbiAgICBwcm9qZWN0TGlzdC5mb3JFYWNoKHByb2plY3REYXRhID0+IHtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IG5ldyBQcm9qZWN0KFxuICAgICAgICAgICAgcHJvamVjdERhdGEubmFtZSxcbiAgICAgICAgICAgIHByb2plY3REYXRhLnRpdGxlLFxuICAgICAgICAgICAgcHJvamVjdERhdGEuZGVmYXVsdCxcbiAgICAgICAgICAgIHByb2plY3REYXRhLmlzQWN0aXZlLFxuICAgICAgICAgICAgcHJvamVjdERhdGEudGFza1xuICAgICAgICApO1xuICAgICAgICBwcm9qZWN0Ll9yZW5kZXJQcm9qZWN0cygpO1xuICAgIH0pO1xuXG4gICAgLy9GSU5EIFRIRSBERUZBVUxUIFBST0pFQ1QgQU5EIEFQUEVORCBOQVYtSVRFTSBDTEFTUyBXSVRIIFNFTEVDVEVEXG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBQcm9qZWN0LmdldERlZmF1bHRQcm9qZWN0KHByb2plY3RMaXN0KVswXTtcbiAgICBjb25zdCBkZWZhdWx0UHJvamVjdE5hbWUgPSBQcm9qZWN0LmdldERlZmF1bHRQcm9qZWN0KHByb2plY3RMaXN0KVswXS5uYW1lOyAgICBcbiAgICBjb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5uYXYtaXRlbScpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBuYXZJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoZGVmYXVsdFByb2plY3ROYW1lID09PSBuYXZJdGVtc1tpXS50ZXh0Q29udGVudCkge1xuICAgICAgICAgICAgbmF2SXRlbXNbaV0uY2xhc3NOYW1lID0gYCR7bmF2SXRlbXNbaV0uY2xhc3NOYW1lfSBzZWxlY3RlZGA7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL1JFTkRFUiBUSEUgREVGQVVMVCBUQVNLUyBPTiAjVEFTSyBESVZcbiAgICBjb25zdCB0YXNrTGlzdCA9IGRlZmF1bHRQcm9qZWN0LnRhc2s7XG4gICAgdGFza0xpc3QuZm9yRWFjaCh0YXNrID0+IHtcbiAgICAgICAgY29uc3QgdGFza0luc3RhbmNlID0gbmV3IFRhc2sodGFzay50aXRsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kZXNjcmlwdGlvbiwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZHVlRGF0ZSwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suaXNDb21wbGV0ZWQsIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmlzSW1wb3J0YW50KTtcbiAgICAgICAgdGFza0luc3RhbmNlLl9yZW5kZXJUYXNrcygpO1xuICAgIH0pXG4gICAgLy9JTklUSUFMSVNFIFBVQlNVQlxuICAgIFByb2plY3Quc3Vic2NyaWJlVG9Qcm9qZWN0QWRkZWQoKTtcblxuICAgIC8vSU5JVElBTElTRSBGT1JNU1xuICAgIHNob3dOZXdQcm9qZWN0Rm9ybSgpO1xuICAgIFxuICAgIC8vVE9ETyByZXBsYWNlIHRoaXMgZnVuY3Rpb24gd2l0aCB0aGUgbWV0aG9kIG9mIHRoZSBQcm9qZWN0IGNsYXNzXG4gICAgLy9UT0RPIHRvIGluaXRpYWxpc2UgdGhlIE5ldyBQcm9qZWN0IGJ1dHRvblxuICAgIC8vVE9ETyBpbnRlcmZhY2UgdGhyb3VnaCB0aGUgQ2xhc3Ncbn0pKCk7XG5cblxuXG5cbi8vVEVTVElOR1xuLy8gZnVuY3Rpb24gZ2V0UHJvamVjdHMoKSB7XG4vLyAgICAgbGV0IHByb2plY3RMaXN0ID0gW107XG4vLyAgICAgbGV0IGRlZmF1bHRQcm9qZWN0ID0gJyc7XG4gICAgXG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsb2NhbFN0b3JhZ2UubGVuZ3RoOyBpKyspIHtcbi8vICAgICAgICAgY29uc3Qga2V5ID0gbG9jYWxTdG9yYWdlLmtleShpKTtcbi8vICAgICAgICAgY29uc3Qgc3RyaW5nT2JqID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oa2V5KTtcbi8vICAgICAgICAgY29uc3QgcGFyc2VkT2JqID0gSlNPTi5wYXJzZShzdHJpbmdPYmopO1xuLy8gICAgICAgICBwcm9qZWN0TGlzdC5wdXNoKHBhcnNlZE9iaik7XG4gICAgICAgIFxuLy8gICAgICAgICBpZiAocGFyc2VkT2JqLmRlZmF1bHQpIHtcbi8vICAgICAgICAgICAgIGRlZmF1bHRQcm9qZWN0ID0ga2V5O1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gICAgIHJldHVybiB7IHByb2plY3RMaXN0XG4vLyAgICAgICAgICAgICAsZGVmYXVsdFByb2plY3QgXG4vLyAgICAgfTtcbi8vIH1cblxuLy8gY29uc3QgcHJvamVjdERhdGEgPSBnZXRQcm9qZWN0cygpO1xuLy8gY29uc3QgcHJvamVjdExpc3QgPSBwcm9qZWN0RGF0YS5wcm9qZWN0TGlzdDtcblxuLy8gZnVuY3Rpb24gZ2V0RGVmYXVsdFByb2plY3QocHJvamVjdHMpIHtcbi8vICAgICByZXR1cm4gcHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5kZWZhdWx0KTsgICAgXG4vLyB9O1xuXG4vLyBnZXREZWZhdWx0UHJvamVjdChwcm9qZWN0TGlzdCk7IiwiaW1wb3J0IHsgYWRkTmV3UHJvamVjdCB9IGZyb20gJy4vZm9ybS1wcm9qZWN0JztcbmltcG9ydCBwdWJzdWIgZnJvbSAnLi9wdWJzdWIuanMnO1xuXG4vLyBwdWJzdWIuc3Vic2NyaWJlKCdwcm9qZWN0QWRkZWQnLCBzdG9yZVByb2plY3QpO1xucHVic3ViLnN1YnNjcmliZSgncHJvamVjdEFkZGVkJywgKHByb2plY3QpID0+IHtcbiAgICBjb25zdCBrZXkgPSBnZW5lcmF0ZUdVSUQoKTtcbiAgICBzdG9yZVByb2plY3Qoa2V5LCBwcm9qZWN0KTtcbiAgfSk7XG5cbmZ1bmN0aW9uIGdlbmVyYXRlR1VJRCgpIHtcbiAgICBjb25zdCBub3cgPSBuZXcgRGF0ZSgpO1xuICAgIGNvbnN0IHJhbmRvbVBhcnQgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwMCk7XG4gICAgY29uc3QgZ3VpZCA9IGAke25vdy5nZXRVVENNaWxsaXNlY29uZHMoKX0ke25vdy5nZXRVVENNb250aCgpfSR7bm93LmdldFVUQ0Z1bGxZZWFyKCl9JHtyYW5kb21QYXJ0fWA7XG4gICAgcmV0dXJuIGd1aWQ7XG4gIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0b3JlUHJvamVjdChrZXksIG9iaikge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkob2JqKSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFByb2plY3RzKCkge1xuICAgIGxldCBwcm9qZWN0TGlzdCA9IFtdO1xuICAgIGxldCBkZWZhdWx0UHJvamVjdCA9ICcnO1xuICAgIFxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbG9jYWxTdG9yYWdlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGtleSA9IGxvY2FsU3RvcmFnZS5rZXkoaSk7XG4gICAgICAgIGNvbnN0IHN0cmluZ09iaiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGtleSk7XG4gICAgICAgIGNvbnN0IHBhcnNlZE9iaiA9IEpTT04ucGFyc2Uoc3RyaW5nT2JqKTtcbiAgICAgICAgcHJvamVjdExpc3QucHVzaChwYXJzZWRPYmopO1xuICAgICAgICBcbiAgICAgICAgaWYgKHBhcnNlZE9iai5kZWZhdWx0KSB7XG4gICAgICAgICAgICBkZWZhdWx0UHJvamVjdCA9IGtleTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4geyBwcm9qZWN0TGlzdFxuICAgICAgICAgICAgLGRlZmF1bHRQcm9qZWN0IFxuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVGFza3MocHJvamVjdE5hbWUpIHtcbiAgICBcbiAgICBjb25zdCBzdHJpbmdPYmogPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShwcm9qZWN0TmFtZSk7XG4gICAgY29uc3QgcGFyc2VkT2JqID0gSlNPTi5wYXJzZShzdHJpbmdPYmopO1xuICAgIGNvbnN0IHRhc2tzID0gcGFyc2VkT2JqLnRhc2s7XG4gICAgY29uc3QgdGFza0NvdW50ID0gT2JqZWN0LmtleXMocGFyc2VkT2JqLnRhc2spLmxlbmd0aDtcblxuICAgIHJldHVybiB7IHRhc2tzLCB0YXNrQ291bnQgfTtcbn0iLCJpbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcbmltcG9ydCBUYXNrIGZyb20gXCIuL3Rhc2tcIjtcbmltcG9ydCB7c2hvd05ld1Byb2plY3RGb3JtLCByZW5kZXJQcm9qZWN0Rm9ybSB9IGZyb20gXCIuL2Zvcm0tcHJvamVjdC5qc1wiXG4vLyBpbXBvcnQgZ2V0UHJvamVjdHMsIHsgbG9hZFRhc2tzLCBzdG9yZVByb2plY3QgfSBmcm9tICcuL2xvY2Fsc3RvcmFnZS5qcyc7XG5pbXBvcnQgcHVic3ViIGZyb20gJy4vcHVic3ViLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvamVjdCB7XG4gICAgXG4gICAgY29uc3RydWN0b3IobmFtZSwgdGl0bGUsIGRlZmF1bHRQcm9qZWN0LCBpc0FjdGl2ZSwgdGFza0RhdGEpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmRlZmF1bHQgPSBkZWZhdWx0UHJvamVjdDtcbiAgICAgICAgdGhpcy5pc0FjdGl2ZSA9IGlzQWN0aXZlO1xuICAgICAgICB0aGlzLnRhc2sgPSAgdGFza0RhdGEubWFwKHRhc2tEYXRhID0+IG5ldyBUYXNrKFxuICAgICAgICAgICAgdGFza0RhdGEudGl0bGUsIFxuICAgICAgICAgICAgdGFza0RhdGEuZGVzY3JpcHRpb24sIFxuICAgICAgICAgICAgdGFza0RhdGEuZHVlRGF0ZSwgXG4gICAgICAgICAgICB0YXNrRGF0YS5pc0NvbXBsZXRlZCwgXG4gICAgICAgICAgICB0YXNrRGF0YS5pc0ltcG9ydGFudFxuICAgICAgICAgICAgKSk7XG4gICAgICAgIH07XG4gICAgICAgIFxuICAgIHN0YXRpYyBnZXREZWZhdWx0UHJvamVjdChwcm9qZWN0cykge1xuICAgICAgICByZXR1cm4gcHJvamVjdHMuZmlsdGVyKHByb2plY3QgPT4gcHJvamVjdC5kZWZhdWx0KTsgICAgXG4gICAgfTtcblxuICAgIHN0YXRpYyBzdWJzY3JpYmVUb1Byb2plY3RBZGRlZCgpIHtcbiAgICAgICAgcHVic3ViLnN1YnNjcmliZSgncHJvamVjdEFkZGVkJywgUHJvamVjdC5oYW5kbGVQcm9qZWN0QWRkZWQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVQcm9qZWN0QWRkZWQocHJvamVjdCkge1xuICAgICAgICBwcm9qZWN0Ll9yZW5kZXJQcm9qZWN0cygpO1xuICAgIH1cbiAgICBcbiAgICBfYmluZFByb2plY3RFdmVudHMoKSB7XG4gICAgICAgIC8vbmV3IHByb2plY3QgYnV0dG9uXG4gICAgICAgIGNvbnN0IGJ0bk5ld1Byb2plY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuLW5ldy1wcm9qZWN0Jyk7XG4gICAgICAgIGJ0bk5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZW5kZXJQcm9qZWN0Rm9ybSk7XG4gICAgICAgIFxuICAgICAgICAvL2VkaXQgaW50ZXJhY3Rpb24gZm9yIGVhY2ggcHJvamVjdCBpbiB0aGUgbmF2XG4gICAgfTtcbiAgICBcbiAgICBfcmVuZGVyUHJvamVjdHMoKSB7XG4gICAgICAgIGNvbnN0IG5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYnKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBwcm9qZWN0TmF2LnRleHRDb250ZW50ID0gdGhpcy5uYW1lO1xuICAgICAgICBwcm9qZWN0TmF2LmNsYXNzTmFtZSA9ICduYXYtaXRlbSc7ICAgICAgICBcbiAgICAgICAgbmF2LmFwcGVuZENoaWxkKHByb2plY3ROYXYpO1xuICAgIH07XG5cbiAgICByZW5hbWVQcm9qZWN0KCkge1xuICAgICAgICAvL1RPRE8gaGF2ZSB0aGlzIG1ldGhvZCBjYWxsIGFkZCBwcm9qZWN0IGZvcm1cbiAgICAgICAgLy9jYWxsIHRoZSBwcm9qZWN0Zm9ybSB3aXRoICd0aGlzJ1xuICAgIH07XG5cbiAgICBhcmNoaXZlUHJvamVjdCgpIHt9O1xuXG4gICAgY2hhbmdlRGVmYXVsdFByb2plY3QoKSB7fTtcbn0iLCJjb25zdCBwdWJzdWIgPSAoKCkgPT4ge1xuICAgIGNvbnN0IGV2ZW50cyA9IHt9O1xuXG4gICAgZnVuY3Rpb24gc3Vic2NyaWJlKGV2ZW50LCBjYWxsYmFjaykge1xuICAgICAgICBpZiAoIWV2ZW50c1tldmVudF0pIHtcbiAgICAgICAgICAgIGV2ZW50c1tldmVudF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBldmVudHNbZXZlbnRdLnB1c2goY2FsbGJhY2spO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHB1Ymxpc2goZXZlbnQsIGRhdGEpIHtcbiAgICAgICAgaWYgKCFldmVudHNbZXZlbnRdKSByZXR1cm47XG4gICAgICAgIGV2ZW50c1tldmVudF0uZm9yRWFjaChjYWxsYmFjayA9PiBjYWxsYmFjayhkYXRhKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgc3Vic2NyaWJlLFxuICAgICAgICBwdWJsaXNoXG4gICAgfTtcbn0pKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHB1YnN1YjsiLCJpbXBvcnQgeyBjb21wYXJlQXNjLCBmb3JtYXQgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVGFzayB7XG4gICAgc3RhdGljIHRhc2tMaXN0Q29udGFpbmVyID0gJ3Rhc2tsaXN0JztcblxuICAgIGNvbnN0cnVjdG9yICh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIGlzQ29tcGxldGVkLCBpc0ltcG9ydGFudCkge1xuICAgICAgICB0aGlzLnRpdGxlID0gdGl0bGU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5pc0NvbXBsZXRlZCA9IGlzQ29tcGxldGVkO1xuICAgICAgICB0aGlzLmlzSW1wb3J0YW50ID0gaXNJbXBvcnRhbnQ7XG4gICAgfTtcblxuICAgIF9iaW5kVGFza0V2ZW50cygpIHt9O1xuICAgIFxuICAgIF9yZW5kZXJUYXNrcygpIHtcbiAgICAgICAgLy9QVUJTVUJcbiAgICAgICAgY29uc3QgdGFza0xpc3RDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChUYXNrLnRhc2tMaXN0Q29udGFpbmVyKTtcblxuICAgICAgICBjb25zdCB0YXNrUGFyZW50RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tQYXJlbnREaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuICAgICAgICB0YXNrTGlzdENvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrUGFyZW50RGl2KTtcbiAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrU3RhdHVzRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrUGFyZW50RGl2LmFwcGVuZENoaWxkKHRhc2tTdGF0dXNEaXYpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tTdGF0dXNDaGVjayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICAgICAgdGFza1N0YXR1c0NoZWNrLnR5cGUgPSAnY2hlY2tib3gnO1xuICAgICAgICAgICAgICAgIHRhc2tTdGF0dXNEaXYuYXBwZW5kQ2hpbGQodGFza1N0YXR1c0NoZWNrKTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IHRhc2tUaXRsZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza1RpdGxlRGl2LnRleHRDb250ZW50ID0gdGhpcy50aXRsZTtcbiAgICAgICAgICAgIHRhc2tQYXJlbnREaXYuYXBwZW5kQ2hpbGQodGFza1RpdGxlRGl2KTtcblxuICAgICAgICAgICAgY29uc3QgdGFza0Rlc2NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgICAgIHRhc2tEZXNjRGl2LnRleHRDb250ZW50ID0gdGhpcy5kZXNjcmlwdGlvbjtcbiAgICAgICAgICAgIHRhc2tQYXJlbnREaXYuYXBwZW5kQ2hpbGQodGFza0Rlc2NEaXYpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBjb25zdCB0YXNrRHVlRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgICAgICB0YXNrRHVlRGl2LnRleHRDb250ZW50ID0gdGhpcy5kdWVEYXRlO1xuICAgICAgICAgICAgdGFza1BhcmVudERpdi5hcHBlbmRDaGlsZCh0YXNrRHVlRGl2KTtcblxuICAgICAgICAgICAgY29uc3QgdGFza09wdGlvbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAgICAgdGFza1BhcmVudERpdi5hcHBlbmRDaGlsZCh0YXNrT3B0aW9uRGl2KTtcblxuICAgICAgICAgICAgICAgIGNvbnN0IHRhc2tPcHRpb25CdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgICAgICAgICB0YXNrT3B0aW9uQnV0dG9uLnRleHRDb250ZW50ID0gJy4uLic7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgdGFza09wdGlvbkRpdi5hcHBlbmRDaGlsZCh0YXNrT3B0aW9uQnV0dG9uKTtcbiAgICB9O1xuXG4gICAgYWRkVGFzaygpIHt9O1xuICAgIGVkaXRUYXNrKCkge307XG4gICAgZGVsZXRlVGFzaygpIHt9O1xuICAgIHJlYXNzaWduVGFza1Byb2plY3QoKSB7fTtcbiAgICBjb21wbGV0ZVRhc2soKSB7fTtcbiAgICBtYXJrSW1wb3J0YW50VGFzaygpIHt9O1xufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==