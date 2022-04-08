/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/MapProviders.js":
/*!********************************!*\
  !*** ./src/js/MapProviders.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  layers: {\n    'OpenStreetMap': window.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'),\n    'GeoPortail Satellite': window.L.tileLayer('https://wxs.ign.fr/{apikey}/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE={style}&TILEMATRIXSET=PM&FORMAT={format}&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}', {\n      apikey: 'choisirgeoportail',\n      format: 'image/jpeg',\n      style: 'normal'\n    }),\n    'ESRI Satellite': window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {\n      attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'\n    }),\n    'Esri Topo': window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}', {\n      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ, TomTom, Intermap, iPC, USGS, FAO, NPS, NRCAN, GeoBase, Kadaster NL, Ordnance Survey, Esri Japan, METI, Esri China (Hong Kong), and the GIS User Community'\n    }),\n    'Esri Gray': window.L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {\n      attribution: 'Tiles &copy; Esri &mdash; Esri, DeLorme, NAVTEQ',\n      maxZoom: 16\n    }),\n    'Toner': window.L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}{r}.{ext}', {\n      subdomains: 'abcd',\n      ext: 'png'\n    }),\n    'CartoDB': window.L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager_nolabels/{z}/{x}/{y}{r}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abcd',\n      maxZoom: 20\n    }),\n    'CartoDB White': window.L.tileLayer('https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abcd',\n      maxZoom: 20\n    }),\n    'CartoDB Dark': window.L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}{r}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abcd',\n      maxZoom: 20\n    }),\n    'Mapiful Asphalt': window.L.tileLayer('https://tiles.mapiful.com/asphalt/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abc',\n      maxZoom: 20\n    }),\n    'Mapiful Blue': window.L.tileLayer('https://tiles.mapiful.com/blue/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abc',\n      maxZoom: 20\n    }),\n    'Mapiful Coral': window.L.tileLayer('https://tiles.mapiful.com/coral/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abc',\n      maxZoom: 20\n    }),\n    'Mapiful Gaia': window.L.tileLayer('https://tiles.mapiful.com/gaia/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abc',\n      maxZoom: 20\n    }),\n    'Mapiful Gold': window.L.tileLayer('https://tiles.mapiful.com/gold/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abc',\n      maxZoom: 20\n    }),\n    'Mapiful Inverted': window.L.tileLayer('https://tiles.mapiful.com/inverted/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abc',\n      maxZoom: 20\n    }),\n    'Mapiful Lagoon': window.L.tileLayer('https://tiles.mapiful.com/lagoon/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abc',\n      maxZoom: 20\n    }),\n    'Mapiful Lavender': window.L.tileLayer('https://tiles.mapiful.com/lavender/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abc',\n      maxZoom: 20\n    }),\n    'Mapiful Mono': window.L.tileLayer('https://tiles.mapiful.com/mono/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abc',\n      maxZoom: 20\n    }),\n    'Mapiful Mother': window.L.tileLayer('https://tiles.mapiful.com/mother/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abc',\n      maxZoom: 20\n    }),\n    'Mapiful Nara': window.L.tileLayer('https://tiles.mapiful.com/nara/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abc',\n      maxZoom: 20\n    }),\n    'Mapiful Oldschool': window.L.tileLayer('https://tiles.mapiful.com/oldschool/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abc',\n      maxZoom: 20\n    }),\n    'Mapiful Pencil': window.L.tileLayer('https://tiles.mapiful.com/pencil/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abc',\n      maxZoom: 20\n    }),\n    'Mapiful Playroom': window.L.tileLayer('https://tiles.mapiful.com/playroom/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abc',\n      maxZoom: 20\n    }),\n    'Mapiful Red': window.L.tileLayer('https://tiles.mapiful.com/red/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abc',\n      maxZoom: 20\n    }),\n    'Mapiful Shade': window.L.tileLayer('https://tiles.mapiful.com/shade/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abc',\n      maxZoom: 20\n    }),\n    'Mapiful Sky': window.L.tileLayer('https://tiles.mapiful.com/sky/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abc',\n      maxZoom: 20\n    }),\n    'Mapiful Valentine': window.L.tileLayer('https://tiles.mapiful.com/valentine/{z}/{x}/{y}.png', {\n      attribution: '&copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors &copy; <a href=\"https://carto.com/attributions\">CARTO</a>',\n      subdomains: 'abc',\n      maxZoom: 20\n    })\n  },\n  overlays: {\n    'Toner Lines': window.L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lines/{z}/{x}/{y}{r}.{ext}', {\n      attribution: 'Map tiles by <a href=\"http://stamen.com\">Stamen Design</a>, <a href=\"http://creativecommons.org/licenses/by/3.0\">CC BY 3.0</a> &mdash; Map data &copy; <a href=\"https://www.openstreetmap.org/copyright\">OpenStreetMap</a> contributors',\n      subdomains: 'abcd',\n      minZoom: 0,\n      maxZoom: 20,\n      ext: 'png'\n    })\n  }\n});\n\n//# sourceURL=webpack://PosterMapMaker/./src/js/MapProviders.js?");

/***/ }),

/***/ "./src/js/PosterMapMaker.js":
/*!**********************************!*\
  !*** ./src/js/PosterMapMaker.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _scss_PosterMapMaker_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scss/PosterMapMaker.scss */ \"./src/scss/PosterMapMaker.scss\");\n/* harmony import */ var _SmoothWheelZoom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SmoothWheelZoom.js */ \"./src/js/SmoothWheelZoom.js\");\n/* harmony import */ var _SmoothWheelZoom_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SmoothWheelZoom_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _MapProviders_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MapProviders.js */ \"./src/js/MapProviders.js\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, \"prototype\", { writable: false }); return Constructor; }\n\n\n\n\n\nvar PosterMapMaker = /*#__PURE__*/function () {\n  function PosterMapMaker() {\n    _classCallCheck(this, PosterMapMaker);\n\n    this._map = null;\n    this._data = null;\n    this._baseLayer = {};\n    this._overlayLayer = {};\n\n    this._initMap().then(this._initEvents.bind(this));\n  }\n\n  _createClass(PosterMapMaker, [{\n    key: \"_initMap\",\n    value: function _initMap() {\n      var _this = this;\n\n      return new Promise(function (resolve) {\n        // Use main div to inject OSM into\n        _this._map = window.L.map('map', {\n          attributionControl: false,\n          scrollWheelZoom: false,\n          // SmoothWheelZoom lib\n          smoothWheelZoom: true,\n          // SmoothWheelZoom lib\n          smoothSensitivity: 1 // SmoothWheelZoom lib\n\n        }).setView([48.038878, -4.736737], 13); // Add layer group to interface\n\n        _MapProviders_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].layers.OpenStreetMap.addTo(_this._map); // Add layer switch radio on bottom right of the map\n\n        window.L.control.layers(_MapProviders_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].layers, _MapProviders_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"].overlays, {\n          position: 'topright'\n        }).addTo(_this._map);\n\n        _this._applyTexts();\n\n        resolve();\n      });\n    }\n  }, {\n    key: \"_initEvents\",\n    value: function _initEvents() {\n      var _this2 = this;\n\n      return new Promise(function (resolve) {\n        // Subscribe to click event on map to react\n        _this2._map.on('click', _this2._mapClicked.bind(_this2)); // Kolor Pick Events\n\n\n        document.getElementById('title-color').addEventListener('click', _this2._colorPicker.bind(_this2));\n        document.getElementById('subtitle-color').addEventListener('click', _this2._colorPicker.bind(_this2));\n        document.getElementById('comment-color').addEventListener('click', _this2._colorPicker.bind(_this2)); // Listening to close modal event\n\n        document.getElementById('modal-overlay').addEventListener('click', _this2._closeModal.bind(_this2));\n        document.getElementById('apply-coordinates').addEventListener('click', _this2._applyCoordinates.bind(_this2));\n        document.getElementById('apply-text').addEventListener('click', _this2._applyTexts.bind(_this2));\n        document.getElementById('map-save').addEventListener('click', _this2._download.bind(_this2));\n        resolve();\n      });\n    }\n    /* Event interaction */\n\n  }, {\n    key: \"_mapClicked\",\n    value: function _mapClicked(opts) {\n      console.log(opts);\n    }\n  }, {\n    key: \"_colorPicker\",\n    value: function _colorPicker(e) {\n      var _this3 = this;\n\n      this._fetchModal('colorpick').then(function (dom) {\n        var picker = new window.KolorPick({\n          renderTo: dom.querySelector('#picker-container'),\n          type: 'linear',\n          // Either linear or radial\n          style: {\n            bg: 'transparent',\n            border: 'black',\n            picking: 'white',\n            padding: 20\n          },\n          onColorChange: function onColorChange(data) {\n            // Callback method called on each color modification\n            if (document.getElementById('applied-color')) {\n              e.target.style.backgroundColor = document.getElementById('applied-color').style.backgroundColor;\n              document.getElementById('applied-color').style.backgroundColor = data.hex;\n            }\n          }\n        });\n        dom.querySelector('#confirm').addEventListener('click', function () {\n          e.target.style.backgroundColor = document.getElementById('applied-color').style.backgroundColor;\n          document.getElementById(e.target.dataset.type).style.color = document.getElementById('applied-color').style.backgroundColor;\n          picker.destroy();\n\n          _this3._closeModal(null, true);\n        });\n        document.getElementById('modal-overlay').appendChild(dom);\n        document.getElementById('modal-overlay').style.display = 'flex';\n        setTimeout(function () {\n          return document.getElementById('modal-overlay').style.opacity = 1;\n        }, 50);\n      });\n    }\n  }, {\n    key: \"_applyCoordinates\",\n    value: function _applyCoordinates() {\n      var lat = document.getElementById('user-lat');\n      var lng = document.getElementById('user-lng');\n\n      if (lat.value !== '' && lng.value !== '') {\n        this._map.setView([lat.value, lng.value]);\n      }\n    }\n  }, {\n    key: \"_applyTexts\",\n    value: function _applyTexts() {\n      document.getElementById('title').innerHTML = document.getElementById('user-title').value;\n      document.getElementById('subtitle').innerHTML = document.getElementById('user-subtitle').value;\n      document.getElementById('comment').innerHTML = document.getElementById('user-comment').value;\n    }\n  }, {\n    key: \"_download\",\n    value: function _download() {\n      document.querySelector('.leaflet-top.leaflet-left').style.display = 'none';\n      document.querySelector('.leaflet-top.leaflet-right').style.display = 'none'; // Execute html2canvas with output div\n\n      window.html2canvas(document.getElementById('map-output'), {\n        logging: true,\n        useCORS: true,\n        allowTaint: true,\n        width: document.getElementById('map-output').offsetWidth,\n        height: document.getElementById('map-output').offsetHeight,\n        scale: 8 // Ensure a good output resolution\n\n      }).then(function (canvas) {\n        var link = document.createElement('A');\n        link.download = 'orly-generator.png';\n        link.href = canvas.toDataURL('image/png');\n        link.click();\n        document.querySelector('.leaflet-top.leaflet-left').style.display = 'inherit';\n        document.querySelector('.leaflet-top.leaflet-right').style.display = 'inherit';\n      });\n    }\n    /* Modal methods */\n\n  }, {\n    key: \"_fetchModal\",\n    value: function _fetchModal(url) {\n      return new Promise(function (resolve) {\n        fetch(\"assets/html/\".concat(url, \".html\")).then(function (data) {\n          data.text().then(function (html) {\n            resolve(document.createRange().createContextualFragment(html));\n          });\n        });\n      });\n    }\n  }, {\n    key: \"_closeModal\",\n    value: function _closeModal(event, force) {\n      if (force === true || event.target.id === 'modal-overlay' || event.target.id.indexOf('close') !== -1) {\n        document.getElementById('modal-overlay').style.opacity = 0;\n        setTimeout(function () {\n          document.getElementById('modal-overlay').style.display = 'none';\n          document.getElementById('modal-overlay').innerHTML = '';\n        }, 300);\n      }\n    }\n  }]);\n\n  return PosterMapMaker;\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (PosterMapMaker);\n\n//# sourceURL=webpack://PosterMapMaker/./src/js/PosterMapMaker.js?");

/***/ }),

/***/ "./src/js/SmoothWheelZoom.js":
/*!***********************************!*\
  !*** ./src/js/SmoothWheelZoom.js ***!
  \***********************************/
/***/ (() => {

eval("// Thanks buddy https://github.com/mutsuyuki/Leaflet.SmoothWheelZoom\nwindow.L.Map.mergeOptions({\n  // @section Mousewheel options\n  // @option smoothWheelZoom: Boolean|String = true\n  // Whether the map can be zoomed by using the mouse wheel. If passed `'center'`,\n  // it will zoom to the center of the view regardless of where the mouse was.\n  smoothWheelZoom: true,\n  // @option smoothWheelZoom: number = 1\n  // setting zoom speed\n  smoothSensitivity: 1\n});\nwindow.L.Map.SmoothWheelZoom = window.L.Handler.extend({\n  addHooks: function addHooks() {\n    window.L.DomEvent.on(this._map._container, 'wheel', this._onWheelScroll, this);\n  },\n  removeHooks: function removeHooks() {\n    window.L.DomEvent.off(this._map._container, 'wheel', this._onWheelScroll, this);\n  },\n  _onWheelScroll: function _onWheelScroll(e) {\n    if (!this._isWheeling) {\n      this._onWheelStart(e);\n    }\n\n    this._onWheeling(e);\n  },\n  _onWheelStart: function _onWheelStart(e) {\n    var map = this._map;\n    this._isWheeling = true;\n    this._wheelMousePosition = map.mouseEventToContainerPoint(e);\n    this._centerPoint = map.getSize()._divideBy(2);\n    this._startLatLng = map.containerPointToLatLng(this._centerPoint);\n    this._wheelStartLatLng = map.containerPointToLatLng(this._wheelMousePosition);\n    this._startZoom = map.getZoom();\n    this._moved = false;\n    this._zooming = true;\n\n    map._stop();\n\n    if (map._panAnim) {\n      map._panAnim.stop();\n    }\n\n    this._goalZoom = map.getZoom();\n    this._prevCenter = map.getCenter();\n    this._prevZoom = map.getZoom();\n    this._zoomAnimationId = requestAnimationFrame(this._updateWheelZoom.bind(this));\n  },\n  _onWheeling: function _onWheeling(e) {\n    var map = this._map;\n    this._goalZoom = this._goalZoom + window.L.DomEvent.getWheelDelta(e) * 0.003 * map.options.smoothSensitivity;\n\n    if (this._goalZoom < map.getMinZoom() || this._goalZoom > map.getMaxZoom()) {\n      this._goalZoom = map._limitZoom(this._goalZoom);\n    }\n\n    this._wheelMousePosition = this._map.mouseEventToContainerPoint(e);\n    clearTimeout(this._timeoutId);\n    this._timeoutId = setTimeout(this._onWheelEnd.bind(this), 200);\n    window.L.DomEvent.preventDefault(e);\n    window.L.DomEvent.stopPropagation(e);\n  },\n  _onWheelEnd: function _onWheelEnd() {\n    this._isWheeling = false;\n    cancelAnimationFrame(this._zoomAnimationId);\n\n    this._map._moveEnd(true);\n  },\n  _updateWheelZoom: function _updateWheelZoom() {\n    var map = this._map;\n\n    if (!map.getCenter().equals(this._prevCenter) || map.getZoom() != this._prevZoom) {\n      return;\n    }\n\n    this._zoom = map.getZoom() + (this._goalZoom - map.getZoom()) * 0.3;\n    this._zoom = Math.floor(this._zoom * 100) / 100;\n\n    var delta = this._wheelMousePosition.subtract(this._centerPoint);\n\n    if (delta.x === 0 && delta.y === 0) {\n      return;\n    }\n\n    if (map.options.smoothWheelZoom === 'center') {\n      this._center = this._startLatLng;\n    } else {\n      this._center = map.unproject(map.project(this._wheelStartLatLng, this._zoom).subtract(delta), this._zoom);\n    }\n\n    if (!this._moved) {\n      map._moveStart(true, false);\n\n      this._moved = true;\n    }\n\n    map._move(this._center, this._zoom);\n\n    this._prevCenter = map.getCenter();\n    this._prevZoom = map.getZoom();\n    this._zoomAnimationId = requestAnimationFrame(this._updateWheelZoom.bind(this));\n  }\n});\nwindow.L.Map.addInitHook('addHandler', 'smoothWheelZoom', window.L.Map.SmoothWheelZoom);\n\n//# sourceURL=webpack://PosterMapMaker/./src/js/SmoothWheelZoom.js?");

/***/ }),

/***/ "./src/scss/PosterMapMaker.scss":
/*!**************************************!*\
  !*** ./src/scss/PosterMapMaker.scss ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://PosterMapMaker/./src/scss/PosterMapMaker.scss?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/PosterMapMaker.js");
/******/ 	window.PosterMapMaker = __webpack_exports__["default"];
/******/ 	
/******/ })()
;