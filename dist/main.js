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
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_index_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _scripts_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/map */ "./src/scripts/map.js");
/* harmony import */ var _scripts_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_map__WEBPACK_IMPORTED_MODULE_1__);



/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// i want a camera following the char around the map
var ctx = null; // create a map with 10*10 tile

var gameMap = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 6, 5, 5, 7, 0, 26, 25, 25, 25, 25, 25, 27, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 29, 28, 28, 28, 28, 28, 30, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 29, 28, 28, 28, 28, 28, 30, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 29, 28, 28, 28, 28, 28, 30, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 16, 20, 16, 18, 1, 16, 18, 16, 19, 28, 18, 18, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 31, 32, 33, 34, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 35, 36, 37, 38, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 39, 40, 41, 42, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 16, 36, 16, 18, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 8, 8, 8, 8, 8, 9, 8, 8, 8, 8, 8, 8, 8, 9, 8, 8, 8, 8, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 8, 8, 8, 8, 8, 8, 8, 8, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]; // 每个地砖多少pixel

var tileWidth = 40;
var tileHeight = 40; // 地图大小就是20*20

var mapWidth = 30;
var mapHeight = 30; // framerate

var currentSecond = 0;
var frameCount = 0;
var framesLastSecond = 0;
var lastFrameTime = 0; // keyCode : boolean to tell us which one are pressed

var heldKeys = {
  // 37: left
  37: false,
  // 38: up
  38: false,
  // 39: right
  39: false,
  // 40: down
  40: false,
  // 32: space
  32: false
};
var directions = {
  up: 0,
  right: 1,
  down: 2,
  left: 3
}; // 地板种类

var floorTypes = {
  solid: 0,
  path: 1,
  ocean: 2
}; // 数字（gameMap）对应上颜色和地板种类
// 0:墙壁 1:草地 2:陆地  4: 水  
// 5:黄色内部墙壁 6: 黄色内部墙壁左角 7:黄色内部墙壁右角
// 8: 沙滩 9:沙滩2
// 20:黄色内部地板 21:黄色内部墙左 22:黄色内部墙右
// 25:棕色内部墙壁 26:棕色内部墙壁左角 27: 棕色内部墙壁右角
// 28: 棕色内部地板 29: 棕色内部墙左 30:棕色内部墙右
// 10-19 房子外观
// 31-42 miumiu room

var tileTypes = {
  0: {
    color: "#793d4c",
    floor: floorTypes.solid,
    sprite: [{
      x: 0,
      y: 0,
      w: 40,
      h: 40
    }]
  },
  1: {
    color: "#6df7b1",
    floor: floorTypes.path,
    sprite: [{
      x: 40,
      y: 0,
      w: 40,
      h: 40
    }]
  },
  2: {
    color: "#c97461",
    floor: floorTypes.path,
    sprite: [{
      x: 80,
      y: 0,
      w: 40,
      h: 40
    }]
  },
  4: {
    color: "#008df0",
    floor: floorTypes.ocean,
    sprite: [{
      x: 160,
      y: 0,
      w: 40,
      h: 40
    }]
  },
  5: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 120,
      y: 0,
      w: 40,
      h: 40
    }]
  },
  6: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 120,
      y: 40,
      w: 40,
      h: 40
    }]
  },
  7: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 80,
      y: 40,
      w: 40,
      h: 40
    }]
  },
  8: {
    color: "#d77c4b",
    floor: floorTypes.path,
    sprite: [{
      x: 200,
      y: 0,
      w: 40,
      h: 40
    }]
  },
  9: {
    color: "#d77c4b",
    floor: floorTypes.path,
    sprite: [{
      x: 200,
      y: 40,
      w: 40,
      h: 40
    }]
  },
  10: {
    color: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 240,
      y: 40,
      w: 40,
      h: 40
    }]
  },
  11: {
    color: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 280,
      y: 40,
      w: 40,
      h: 40
    }]
  },
  12: {
    color: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 320,
      y: 40,
      w: 40,
      h: 40
    }]
  },
  13: {
    color: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 240,
      y: 80,
      w: 40,
      h: 40
    }]
  },
  14: {
    color: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 280,
      y: 80,
      w: 40,
      h: 40
    }]
  },
  15: {
    color: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 320,
      y: 80,
      w: 40,
      h: 40
    }]
  },
  16: {
    color: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 240,
      y: 120,
      w: 40,
      h: 40
    }]
  },
  17: {
    color: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 280,
      y: 120,
      w: 40,
      h: 40
    }]
  },
  18: {
    color: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 320,
      y: 120,
      w: 40,
      h: 40
    }]
  },
  19: {
    color: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 360,
      y: 120,
      w: 40,
      h: 40
    }]
  },
  20: {
    color: "#d77c4b",
    floor: floorTypes.path,
    sprite: [{
      x: 40,
      y: 40,
      w: 40,
      h: 40
    }]
  },
  21: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 80,
      y: 80,
      w: 40,
      h: 40
    }]
  },
  22: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 120,
      y: 80,
      w: 40,
      h: 40
    }]
  },
  25: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 320,
      y: 160,
      w: 40,
      h: 40
    }]
  },
  26: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 240,
      y: 160,
      w: 40,
      h: 40
    }]
  },
  27: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 280,
      y: 160,
      w: 40,
      h: 40
    }]
  },
  28: {
    color: "#d77c4b",
    floor: floorTypes.path,
    sprite: [{
      x: 280,
      y: 200,
      w: 40,
      h: 40
    }]
  },
  29: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 360,
      y: 160,
      w: 40,
      h: 40
    }]
  },
  30: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 240,
      y: 200,
      w: 40,
      h: 40
    }]
  },
  31: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 320,
      y: 200,
      w: 40,
      h: 40
    }]
  },
  32: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 360,
      y: 200,
      w: 40,
      h: 40
    }]
  },
  33: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 400,
      y: 200,
      w: 40,
      h: 40
    }]
  },
  34: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 440,
      y: 200,
      w: 40,
      h: 40
    }]
  },
  35: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 320,
      y: 240,
      w: 40,
      h: 40
    }]
  },
  36: {
    color: "#d77c4b",
    floor: floorTypes.path,
    sprite: [{
      x: 360,
      y: 240,
      w: 40,
      h: 40
    }]
  },
  37: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 400,
      y: 240,
      w: 40,
      h: 40
    }]
  },
  38: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 440,
      y: 240,
      w: 40,
      h: 40
    }]
  },
  39: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 320,
      y: 280,
      w: 40,
      h: 40
    }]
  },
  40: {
    color: "#d77c4b",
    floor: floorTypes.path,
    sprite: [{
      x: 360,
      y: 280,
      w: 40,
      h: 40
    }]
  },
  41: {
    color: "#d77c4b",
    floor: floorTypes.path,
    sprite: [{
      x: 400,
      y: 280,
      w: 40,
      h: 40
    }]
  },
  42: {
    color: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 440,
      y: 280,
      w: 40,
      h: 40
    }]
  }
};
var collisions = {
  none: 0,
  solid: 1
};
var objectTypes = {
  1: {
    name: "Flower",
    sprite: [{
      x: 40,
      y: 180,
      w: 40,
      h: 20
    }],
    offset: [0, 0],
    collision: collisions.none,
    zIndex: 1
  },
  2: {
    name: "fence",
    sprite: [{
      x: 40,
      y: 200,
      w: 40,
      h: 40
    }],
    offset: [0, 0],
    collision: collisions.solid,
    zIndex: 1
  },
  3: {
    name: "Tree",
    sprite: [{
      x: 80,
      y: 160,
      w: 80,
      h: 80
    }],
    offset: [-20, -20],
    collision: collisions.solid,
    zIndex: 3
  },
  4: {
    name: "mashrooms",
    sprite: [{
      x: 40,
      y: 160,
      w: 40,
      h: 20
    }],
    offset: [0, 0],
    collision: collisions.none,
    zIndex: 1
  },
  5: {
    name: "Pig Shop",
    sprite: [{
      x: 160,
      y: 160,
      w: 80,
      h: 80
    }],
    offset: [-20, -20],
    collision: collisions.solid,
    zIndex: 3
  },
  6: {
    name: "donuts",
    sprite: [{
      x: 360,
      y: 0,
      w: 80,
      h: 115
    }],
    offset: [0, 0],
    collision: collisions.none,
    zIndex: 1
  },
  7: {
    name: "cooking",
    sprite: [{
      x: 160,
      y: 80,
      w: 80,
      h: 80
    }],
    offset: [0, 0],
    collision: collisions.none,
    zIndex: 1
  },
  8: {
    name: "carpet",
    sprite: [{
      x: 0,
      y: 80,
      w: 80,
      h: 40
    }],
    offset: [0, 0],
    collision: collisions.none,
    zIndex: 1
  },
  9: {
    name: "desk",
    sprite: [{
      x: 0,
      y: 40,
      w: 40,
      h: 40
    }],
    offset: [0, 0],
    collision: collisions.solid,
    zIndex: 1
  },
  10: {
    name: "chair",
    sprite: [{
      x: 320,
      y: 0,
      w: 40,
      h: 40
    }],
    offset: [0, 0],
    collision: collisions.solid,
    zIndex: 1
  },
  11: {
    name: "Tree Plant",
    sprite: [{
      x: 40,
      y: 120,
      w: 40,
      h: 40
    }],
    offset: [0, 0],
    collision: collisions.solid,
    zIndex: 1
  },
  12: {
    name: "drum",
    sprite: [{
      x: 0,
      y: 240,
      w: 80,
      h: 40
    }],
    offset: [0, 0],
    collision: collisions.solid,
    zIndex: 1
  },
  13: {
    name: "instruments",
    sprite: [{
      x: 80,
      y: 240,
      w: 120,
      h: 80
    }],
    offset: [0, 0],
    collision: collisions.solid,
    zIndex: 1
  },
  14: {
    name: "BookShelf",
    sprite: [{
      x: 200,
      y: 240,
      w: 40,
      h: 40
    }],
    offset: [0, 0],
    collision: collisions.solid,
    zIndex: 1
  },
  15: {
    name: "saxophone",
    sprite: [{
      x: 240,
      y: 240,
      w: 40,
      h: 40
    }],
    offset: [0, 0],
    collision: collisions.solid,
    zIndex: 1
  },
  16: {
    name: "Right Facing Chair",
    sprite: [{
      x: 200,
      y: 280,
      w: 40,
      h: 40
    }],
    offset: [0, 0],
    collision: collisions.solid,
    zIndex: 1
  }
}; // 物品

var itemTypes = {
  1: {
    name: "coconut",
    maxStack: 5,
    sprite: [{
      x: 240,
      y: 0,
      w: 40,
      h: 40
    }],
    offset: [0, 0]
  },
  2: {
    name: "strawberry",
    maxStack: 5,
    sprite: [{
      x: 280,
      y: 0,
      w: 40,
      h: 40
    }],
    offset: [0, 0]
  }
};

function Stack(id, qty) {
  this.type = id;
  this.qty = qty;
}

function Inventory(s) {
  this.spaces = s;
  this.stacks = [];
}

Inventory.prototype.addItems = function (id, qty) {
  for (var i = 0; i < this.spaces; i++) {
    if (this.stacks.length <= i) {
      var maxHere = qty > itemTypes[id].maxStack ? itemTypes[id].maxStack : qty;
      this.stacks.push(new Stack(id, maxHere));
      qty -= maxHere;
    } else if (this.stacks[i].type == id && this.stacks[i].qty < itemTypes[id].maxStack) {
      var _maxHere = itemTypes[id].maxStack - this.stacks[i].qty;

      if (_maxHere > qty) {
        _maxHere = qty;
      }

      this.stacks[i].qty += _maxHere;
      qty -= _maxHere;
    }

    if (qty == 0) {
      return 0;
    }
  }

  return qty;
};

function PlacedItemStack(id, qty) {
  this.type = id;
  this.qty = qty;
  this.x = 0;
  this.y = 0;
}

PlacedItemStack.prototype.placeAt = function (nx, ny) {
  if (mapTileData.map[toIndex(this.x, this.y)].itemStack == this) {
    mapTileData.map[toIndex(this.x, this.y)].itemStack = null;
  }

  this.x = nx;
  this.y = ny;
  mapTileData.map[toIndex(nx, ny)].itemStack = this;
};

var gametile = null,
    gametileURL = "src/images/tilesetestt.png",
    artLoaded = false; // 创建一个角色 (miumiu)

var miumiu = new MiuMiu(); // 加更多角色⬇

function MiuMiu() {
  this.tileFrom = [1, 1]; // miumiu的位置

  this.tileTo = [15, 16]; // time in millseconds

  this.timeMoved = 0;
  this.delayMove = 700;
  this.dimensions = [40, 40];
  this.position = [45, 45];
  this.direction = directions.up;
  this.sprites = {};
  this.sprites[directions.up] = [{
    x: 0,
    y: 120,
    w: 30,
    h: 30
  }];
  this.sprites[directions.right] = [{
    x: 0,
    y: 150,
    w: 30,
    h: 30
  }];
  this.sprites[directions.down] = [{
    x: 0,
    y: 180,
    w: 30,
    h: 30
  }];
  this.sprites[directions.left] = [{
    x: 0,
    y: 210,
    w: 30,
    h: 30
  }];
  this.inventory = new Inventory(2);
} // 把角色放在地砖上


MiuMiu.prototype.location = function (x, y) {
  this.tileFrom = [x, y];
  this.tileTo = [x, y]; // x and y position of the tile. update the tileFrom and tileTo properties to the new tile coordinates
  // calculates the pixel position of the characyer use below

  this.position = [tileWidth * x + (tileWidth - this.dimensions[0]) / 2, tileHeight * y + (tileHeight - this.dimensions[1]) / 2];
}; // 根据每个帧数找到角色位置


MiuMiu.prototype.processMovement = function (t) {
  // if char tileTo == tileFrom char is not moving, so return false
  if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) {
    return false;
  } // if the amount of time passed since char began its current move >= the time for char to move 1 tile. we set position using location function
  // aka: if char still moving


  if (t - this.timeMoved >= this.delayMove) {
    this.location(this.tileTo[0], this.tileTo[1]);

    if (mapTileData.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter != null) {
      mapTileData.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter(this);
    }
  } else {
    // current position on canvas
    this.position[0] = this.tileFrom[0] * tileWidth + (tileWidth - this.dimensions[0]) / 2;
    this.position[1] = this.tileFrom[1] * tileHeight + (tileHeight - this.dimensions[1]) / 2; // if char is moving on x coordinate, calculate pixels

    if (this.tileTo[0] != this.tileFrom[0]) {
      // difference = distance moved
      // 加减移动的地砖到角色的位子
      var difference = tileWidth / this.delayMove * (t - this.timeMoved);
      this.position[0] += this.tileTo[0] < this.tileFrom[0] ? 0 - difference : difference;
    }

    if (this.tileTo[1] != this.tileFrom[1]) {
      var _difference = tileHeight / this.delayMove * (t - this.timeMoved);

      this.position[1] += this.tileTo[1] < this.tileFrom[1] ? 0 - _difference : _difference;
    } // round x & y to whole number 需要整数


    this.position[0] = Math.round(this.position[0]);
    this.position[1] = Math.round(this.position[1]);
  } // true = char is currently moving


  return true;
}; // if char can move in a specific direc


MiuMiu.prototype.placesCanGo = function (x, y) {
  // if x and y is in map bound
  if (x < 0 || x >= mapWidth || y < 0 || y >= mapHeight) {
    return false;
  } // if the tile is path tile (only move if its a path)


  if (tileTypes[gameMap[toIndex(x, y)]].floor != floorTypes.path) {
    return false;
  }

  if (mapTileData.map[toIndex(x, y)].object != null) {
    var object = mapTileData.map[toIndex(x, y)].object;

    if (objectTypes[object.type].collision == collisions.solid) {
      return false;
    }
  }

  return true;
};

MiuMiu.prototype.canGoUp = function () {
  return this.placesCanGo(this.tileFrom[0], this.tileFrom[1] - 1);
};

MiuMiu.prototype.canGoDown = function () {
  return this.placesCanGo(this.tileFrom[0], this.tileFrom[1] + 1);
};

MiuMiu.prototype.canGoLeft = function () {
  return this.placesCanGo(this.tileFrom[0] - 1, this.tileFrom[1]);
};

MiuMiu.prototype.canGoRight = function () {
  return this.placesCanGo(this.tileFrom[0] + 1, this.tileFrom[1]);
};

MiuMiu.prototype.goLeft = function (t) {
  this.tileTo[0] -= 1;
  this.timeMoved = t;
  this.direction = directions.left;
};

MiuMiu.prototype.goRight = function (t) {
  this.tileTo[0] += 1;
  this.timeMoved = t;
  this.direction = directions.right;
};

MiuMiu.prototype.goUp = function (t) {
  this.tileTo[1] -= 1;
  this.timeMoved = t;
  this.direction = directions.up;
};

MiuMiu.prototype.goDown = function (t) {
  this.tileTo[1] += 1;
  this.timeMoved = t;
  this.direction = directions.down;
}; // pick up item


MiuMiu.prototype.pickUp = function () {
  if (this.tileTo[0] != this.tileFrom[0] || this.tileTo[1] != this.tileFrom[1]) {
    return false;
  }

  var is = mapTileData.map[toIndex(this.tileFrom[0], this.tileFrom[1])].itemStack;

  if (is != null) {
    var remains = this.inventory.addItems(is.type, is.qty);

    if (remains) {
      is.qty = remains;
    } else {
      mapTileData.map[toIndex(this.tileFrom[0], this.tileFrom[1])].itemStack = null;
    }
  }

  return true;
}; // create a camera object


var camera = {
  screen: [0, 0],
  // 画面左上角
  startingPoint: [0, 0],
  // 画面右下角
  endingPoint: [0, 0],
  // 误差
  offset: [0, 0],
  // update function, x y is our center area
  update: function update(offsetX, offsetY) {
    // offset: half the canvas width || height (round down to whole num)
    this.offset[0] = Math.floor(this.screen[0] / 2 - offsetX);
    this.offset[1] = Math.floor(this.screen[1] / 2 - offsetY); // 地砖在地图上的位置

    var tile = [Math.floor(offsetX / tileWidth), Math.floor(offsetY / tileHeight)]; //  计算第一个地砖位置在x线上： 最大地砖数量 - 屏幕的一半
    //  多减去1这样地砖可以show一半在屏幕上

    this.startingPoint[0] = tile[0] - Math.ceil(this.screen[0] / 2 / tileWidth) - 1;
    this.startingPoint[1] = tile[1] - Math.ceil(this.screen[1] / 2 / tileHeight) - 1; // 确保x和y都大于0要么会在地图外

    if (this.startingPoint[0] <= -1) {
      this.startingPoint[0] = 0;
    }

    if (this.startingPoint[1] <= -1) {
      this.startingPoint[1] = 0;
    }

    this.endingPoint[0] = tile[0] + 1 + Math.ceil(this.screen[0] / 2 / tileWidth);
    this.endingPoint[1] = tile[1] + 1 + Math.ceil(this.screen[1] / 2 / tileHeight);

    if (this.endingPoint[0] >= mapWidth) {
      this.endingPoint[0] = mapWidth - 1;
    }

    if (this.endingPoint[1] >= mapHeight) {
      this.endingPoint[1] = mapHeight - 1;
    }
  }
}; // buildings

var mapTileData = new TileMap();
var buildingsLocation = [{
  x: 11,
  y: 5,
  w: 4,
  h: 5,
  data: [10, 11, 11, 12, 13, 14, 14, 15, 16, 18, 16, 18, 16, 18, 16, 18, 16, 17, 16, 18]
}, {
  x: 16,
  y: 5,
  w: 7,
  h: 5,
  data: [10, 11, 11, 11, 11, 12, 12, 13, 15, 13, 14, 14, 15, 15, 16, 18, 16, 19, 19, 18, 18, 16, 18, 16, 19, 19, 18, 18, 16, 18, 16, 19, 17, 18, 18]
}, {
  x: 14,
  y: 13,
  w: 4,
  h: 4,
  data: [10, 11, 11, 12, 13, 14, 14, 15, 16, 18, 16, 18, 16, 17, 16, 18]
}]; // stores information for each map tile

function Tile(tileX, tileY, tileType) {
  // tileY, tileX = the position of the tile on the map
  this.x = tileX;
  this.y = tileY;
  this.type = tileType;
  this.building = null;
  this.buildingType = 0; //  pointer to a function to execute when a MiuMiu has completed moving on to this tile

  this.eventEnter = null;
  this.object = null;
  this.itemStack = null;
} // 储存管理地图数据


function TileMap() {
  this.map = [];
  this.w = 0;
  this.h = 0;
  this.levels = 4;
}

TileMap.prototype.buildMapFromData = function (tileId, w, h) {
  this.w = w;
  this.h = h;

  if (tileId.length != w * h) {
    return false;
  }

  this.map.length = 0;

  for (var y = 0; y < h; y++) {
    for (var _x = 0; _x < w; _x++) {
      this.map.push(new Tile(_x, y, tileId[_x + w * y]));
    }
  }

  return true;
};

TileMap.prototype.addBuildings = function (buildings) {
  for (var i in buildings) {
    var building = buildings[i];

    if (building.x < 0 || building.y < 0 || building.x >= this.w || building.y >= this.h || building.x + building.w > this.w || building.y + building.h > this.h || building.data.length != building.w * building.h) {
      continue;
    }

    for (var y = 0; y < building.h; y++) {
      for (var _x2 = 0; _x2 < building.w; _x2++) {
        var tileIdx = (building.y + y) * this.w + building.x + _x2;
        this.map[tileIdx].building = building;
        this.map[tileIdx].buildingType = building.data[y * building.w + _x2];
      }
    }
  }
}; // 物品摆放


function GameObjects(nt) {
  this.x = 0;
  this.y = 0;
  this.type = nt;
}

GameObjects.prototype.placeAt = function (nx, ny) {
  if (mapTileData.map[toIndex(this.x, this.y)].object == this) {
    mapTileData.map[toIndex(this.x, this.y)].object = null;
  }

  this.x = nx;
  this.y = ny;
  mapTileData.map[toIndex(nx, ny)].object = this;
}; // convert x, y into index in gameMap arr


function toIndex(x, y) {
  return x + mapWidth * y;
}

function getFrame(sprite, timeLast, time, animation) {
  if (!animation) {
    return sprite[0];
  }

  time = time % timeLast;

  for (x in sprite) {
    if (sprite[x].end >= time) {
      return sprite[x];
    }
  }
} // 界面load完，开始loop


window.onload = function () {
  ctx = document.getElementById("miumiuTale").getContext("2d");
  requestAnimationFrame(drawGame); // add eventListeners for the keydowna and keyup

  window.addEventListener("keydown", function (e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      heldKeys[e.keyCode] = true;
    }

    if (e.keyCode == 32) {
      heldKeys[e.keyCode] = true;
    }
  });
  window.addEventListener("keyup", function (e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      heldKeys[e.keyCode] = false;
    }

    if (e.keyCode == 32) {
      heldKeys[e.keyCode] = false;
    }
  }); // canvas尺寸 保存到 相机

  camera.screen = [document.getElementById("miumiuTale").width, document.getElementById("miumiuTale").height];
  gametile = new Image();

  gametile.onerror = function () {
    ctx = null;
    alert("Failed loading gametile.");
  };

  gametile.onload = function () {
    artLoaded = true;
  };

  gametile.src = gametileURL;
  mapTileData.buildMapFromData(gameMap, mapWidth, mapHeight);
  mapTileData.addBuildings(buildingsLocation);

  mapTileData.map[2 * mapWidth + 2].eventEnter = function () {
    console.log("Entered tile 2,2");
  }; // 物品摆放位置


  var fence1 = new GameObjects(2);
  fence1.placeAt(15, 6);
  var flower1 = new GameObjects(1);
  flower1.placeAt(11, 10);
  var flower2 = new GameObjects(1);
  flower2.placeAt(13, 10);
  var flower3 = new GameObjects(1);
  flower3.placeAt(14, 10);
  var tree1 = new GameObjects(3);
  tree1.placeAt(10, 11);
  var tree2 = new GameObjects(3);
  tree2.placeAt(15, 11);
  var tree3 = new GameObjects(3);
  tree3.placeAt(13, 11);
  var tree4 = new GameObjects(3);
  tree4.placeAt(18, 11);
  var mashroom1 = new GameObjects(4);
  mashroom1.placeAt(8, 9);
  var mashroom2 = new GameObjects(4);
  mashroom2.placeAt(15, 7);
  var pigShop1 = new GameObjects(5);
  pigShop1.placeAt(9, 9);
  var donuts = new GameObjects(6);
  donuts.placeAt(11, 5);
  var cooking = new GameObjects(7);
  cooking.placeAt(13, 5);
  var carpet = new GameObjects(8);
  carpet.placeAt(13, 7);
  var desk = new GameObjects(9);
  desk.placeAt(14, 8);
  var chair = new GameObjects(10);
  chair.placeAt(14, 7);
  var chair2 = new GameObjects(16);
  chair2.placeAt(18, 7);
  var treePlant = new GameObjects(11);
  treePlant.placeAt(11, 8);
  var drum = new GameObjects(12);
  drum.placeAt(21, 6);
  var instruments = new GameObjects(13);
  instruments.placeAt(18, 5);
  var bookShelf1 = new GameObjects(14);
  bookShelf1.placeAt(16, 6);
  var bookShelf2 = new GameObjects(14);
  bookShelf2.placeAt(16, 7);
  var saxophone = new GameObjects(15);
  saxophone.placeAt(19, 7);
  var coconut1 = new PlacedItemStack(1, 1);
  coconut1.placeAt(10, 20);
  var coconut2 = new PlacedItemStack(1, 1);
  coconut2.placeAt(15, 21);
  var coconut3 = new PlacedItemStack(1, 1);
  coconut3.placeAt(13, 20);
  var strawberry1 = new PlacedItemStack(2, 1);
  strawberry1.placeAt(18, 21);
}; // main function


function drawGame() {
  if (ctx == null) {
    return;
  }

  if (!artLoaded) {
    requestAnimationFrame(drawGame);
    return;
  }

  var currentFrameTime = Date.now(); // framecount 

  var sec = Math.floor(Date.now() / 1000);

  if (sec != currentSecond) {
    currentSecond = sec;
    framesLastSecond = frameCount;
    frameCount = 1;
  } else {
    frameCount++;
  } // miumiu movement


  if (!miumiu.processMovement(currentFrameTime)) {
    if (heldKeys[38] && miumiu.canGoUp()) {
      miumiu.goUp(currentFrameTime);
    } else if (heldKeys[40] && miumiu.canGoDown()) {
      miumiu.goDown(currentFrameTime);
    } else if (heldKeys[37] && miumiu.canGoLeft()) {
      miumiu.goLeft(currentFrameTime);
    } else if (heldKeys[39] && miumiu.canGoRight()) {
      miumiu.goRight(currentFrameTime);
    } else if (heldKeys[32]) {
      miumiu.pickUp();
    }
  } // camera跟着miumiu走


  camera.update(miumiu.position[0] + miumiu.dimensions[0] / 2, miumiu.position[1] + miumiu.dimensions[1] / 2);
  var miumiuBuilding1 = mapTileData.map[toIndex(miumiu.tileFrom[0], miumiu.tileFrom[1])].building;
  var miumiuBuilding2 = mapTileData.map[toIndex(miumiu.tileTo[0], miumiu.tileTo[1])].building; // 清除last frame

  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, camera.screen[0], camera.screen[1]);

  for (var z = 0; z < mapTileData.levels; z++) {
    for (var y = camera.startingPoint[1]; y <= camera.endingPoint[1]; ++y) {
      for (var _x3 = camera.startingPoint[0]; _x3 <= camera.endingPoint[0]; ++_x3) {
        if (z == 0) {
          var _tile = tileTypes[mapTileData.map[toIndex(_x3, y)].type];
          ctx.drawImage(gametile, _tile.sprite[0].x, _tile.sprite[0].y, _tile.sprite[0].w, _tile.sprite[0].h, camera.offset[0] + _x3 * tileWidth, camera.offset[1] + y * tileHeight, tileWidth, tileHeight);
        } else if (z == 1) {
          var is = mapTileData.map[toIndex(_x3, y)].itemStack;

          if (is != null) {
            var objectSprite = itemTypes[is.type].sprite;
            ctx.drawImage(gametile, objectSprite[0].x, objectSprite[0].y, objectSprite[0].w, objectSprite[0].h, camera.offset[0] + _x3 * tileWidth + itemTypes[is.type].offset[0], camera.offset[1] + y * tileHeight + itemTypes[is.type].offset[1], objectSprite[0].w, objectSprite[0].h);
          }
        }

        var object = mapTileData.map[toIndex(_x3, y)].object;

        if (object != null && objectTypes[object.type].zIndex == z) {
          var objectType = objectTypes[object.type];
          ctx.drawImage(gametile, objectType.sprite[0].x, objectType.sprite[0].y, objectType.sprite[0].w, objectType.sprite[0].h, camera.offset[0] + _x3 * tileWidth + objectType.offset[0], camera.offset[1] + y * tileHeight + objectType.offset[1], objectType.sprite[0].w, objectType.sprite[0].h);
        }

        if (z == 2 && mapTileData.map[toIndex(_x3, y)].buildingType != 0 && mapTileData.map[toIndex(_x3, y)].building != miumiuBuilding1 && mapTileData.map[toIndex(_x3, y)].building != miumiuBuilding2) {
          tile = tileTypes[mapTileData.map[toIndex(_x3, y)].buildingType];
          sprite = getFrame(tile.sprite, tile.spritetimeLast, tile.animation);
          ctx.drawImage(gametile, sprite.x, sprite.y, sprite.w, sprite.h, camera.offset[0] + _x3 * tileWidth, camera.offset[1] + y * tileHeight, tileWidth, tileHeight);
        }
      }
    }

    if (z == 1) {
      var _sprite = miumiu.sprites[miumiu.direction];
      ctx.drawImage(gametile, _sprite[0].x, _sprite[0].y, _sprite[0].w, _sprite[0].h, camera.offset[0] + miumiu.position[0], camera.offset[1] + miumiu.position[1], miumiu.dimensions[0], miumiu.dimensions[1]);
    }
  }

  ctx.textAlign = "right";

  for (var i = 0; i < miumiu.inventory.spaces; i++) {
    ctx.fillStyle = "#ffc34a";
    ctx.fillRect(10 + i * 50, 350, 40, 40);

    if (typeof miumiu.inventory.stacks[i] != 'undefined') {
      var it = itemTypes[miumiu.inventory.stacks[i].type];
      var _sprite2 = it.sprite;
      ctx.drawImage(gametile, _sprite2[0].x, _sprite2[0].y, _sprite2[0].w, _sprite2[0].h, 10 + i * 50 + it.offset[0], 350 + it.offset[1], _sprite2[0].w, _sprite2[0].h);

      if (miumiu.inventory.stacks[i].qty > 1) {
        ctx.fillStyle = "#000000";
        ctx.fillText("" + miumiu.inventory.stacks[i].qty, 10 + i * 50 + 38, 350 + 38);
      }
    }
  }

  ctx.textAlign = "left"; // draw the miumiu

  var sprite = miumiu.sprites[miumiu.direction];
  ctx.drawImage(gametile, sprite[0].x, sprite[0].y, sprite[0].w, sprite[0].h, camera.offset[0] + miumiu.position[0], camera.offset[1] + miumiu.position[1], miumiu.dimensions[0], miumiu.dimensions[1]);
  lastFrameTime = currentFrameTime;
  requestAnimationFrame(drawGame);
}

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJoZWxkS2V5cyIsImRpcmVjdGlvbnMiLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJmbG9vclR5cGVzIiwic29saWQiLCJwYXRoIiwib2NlYW4iLCJ0aWxlVHlwZXMiLCJjb2xvciIsImZsb29yIiwic3ByaXRlIiwieCIsInkiLCJ3IiwiaCIsImNvbGxpc2lvbnMiLCJub25lIiwib2JqZWN0VHlwZXMiLCJuYW1lIiwib2Zmc2V0IiwiY29sbGlzaW9uIiwiekluZGV4IiwiaXRlbVR5cGVzIiwibWF4U3RhY2siLCJTdGFjayIsImlkIiwicXR5IiwidHlwZSIsIkludmVudG9yeSIsInMiLCJzcGFjZXMiLCJzdGFja3MiLCJwcm90b3R5cGUiLCJhZGRJdGVtcyIsImkiLCJsZW5ndGgiLCJtYXhIZXJlIiwicHVzaCIsIlBsYWNlZEl0ZW1TdGFjayIsInBsYWNlQXQiLCJueCIsIm55IiwibWFwVGlsZURhdGEiLCJtYXAiLCJ0b0luZGV4IiwiaXRlbVN0YWNrIiwiZ2FtZXRpbGUiLCJnYW1ldGlsZVVSTCIsImFydExvYWRlZCIsIm1pdW1pdSIsIk1pdU1pdSIsInRpbGVGcm9tIiwidGlsZVRvIiwidGltZU1vdmVkIiwiZGVsYXlNb3ZlIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwiZGlyZWN0aW9uIiwic3ByaXRlcyIsImludmVudG9yeSIsImxvY2F0aW9uIiwicHJvY2Vzc01vdmVtZW50IiwidCIsImV2ZW50RW50ZXIiLCJkaWZmZXJlbmNlIiwiTWF0aCIsInJvdW5kIiwicGxhY2VzQ2FuR28iLCJvYmplY3QiLCJjYW5Hb1VwIiwiY2FuR29Eb3duIiwiY2FuR29MZWZ0IiwiY2FuR29SaWdodCIsImdvTGVmdCIsImdvUmlnaHQiLCJnb1VwIiwiZ29Eb3duIiwicGlja1VwIiwiaXMiLCJyZW1haW5zIiwiY2FtZXJhIiwic2NyZWVuIiwic3RhcnRpbmdQb2ludCIsImVuZGluZ1BvaW50IiwidXBkYXRlIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0aWxlIiwiY2VpbCIsIlRpbGVNYXAiLCJidWlsZGluZ3NMb2NhdGlvbiIsImRhdGEiLCJUaWxlIiwidGlsZVgiLCJ0aWxlWSIsInRpbGVUeXBlIiwiYnVpbGRpbmciLCJidWlsZGluZ1R5cGUiLCJsZXZlbHMiLCJidWlsZE1hcEZyb21EYXRhIiwidGlsZUlkIiwiYWRkQnVpbGRpbmdzIiwiYnVpbGRpbmdzIiwidGlsZUlkeCIsIkdhbWVPYmplY3RzIiwibnQiLCJnZXRGcmFtZSIsInRpbWVMYXN0IiwidGltZSIsImFuaW1hdGlvbiIsImVuZCIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhd0dhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJ3aWR0aCIsImhlaWdodCIsIkltYWdlIiwib25lcnJvciIsImFsZXJ0Iiwic3JjIiwiY29uc29sZSIsImxvZyIsImZlbmNlMSIsImZsb3dlcjEiLCJmbG93ZXIyIiwiZmxvd2VyMyIsInRyZWUxIiwidHJlZTIiLCJ0cmVlMyIsInRyZWU0IiwibWFzaHJvb20xIiwibWFzaHJvb20yIiwicGlnU2hvcDEiLCJkb251dHMiLCJjb29raW5nIiwiY2FycGV0IiwiZGVzayIsImNoYWlyIiwiY2hhaXIyIiwidHJlZVBsYW50IiwiZHJ1bSIsImluc3RydW1lbnRzIiwiYm9va1NoZWxmMSIsImJvb2tTaGVsZjIiLCJzYXhvcGhvbmUiLCJjb2NvbnV0MSIsImNvY29udXQyIiwiY29jb251dDMiLCJzdHJhd2JlcnJ5MSIsImN1cnJlbnRGcmFtZVRpbWUiLCJEYXRlIiwibm93Iiwic2VjIiwibWl1bWl1QnVpbGRpbmcxIiwibWl1bWl1QnVpbGRpbmcyIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiLCJ6IiwiZHJhd0ltYWdlIiwib2JqZWN0U3ByaXRlIiwib2JqZWN0VHlwZSIsInNwcml0ZXRpbWVMYXN0IiwidGV4dEFsaWduIiwiaXQiLCJmaWxsVGV4dCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0FBO0FBR0EsSUFBSUEsR0FBRyxHQUFHLElBQVYsQyxDQUVBOztBQUNBLElBQUlDLE9BQU8sR0FBRyxDQUNiLENBRGEsRUFDVixDQURVLEVBQ1AsQ0FETyxFQUNKLENBREksRUFDRCxDQURDLEVBQ0UsQ0FERixFQUNLLENBREwsRUFDUSxDQURSLEVBQ1csQ0FEWCxFQUNjLENBRGQsRUFDaUIsQ0FEakIsRUFDb0IsQ0FEcEIsRUFDdUIsQ0FEdkIsRUFDMEIsQ0FEMUIsRUFDNkIsQ0FEN0IsRUFDZ0MsQ0FEaEMsRUFDbUMsQ0FEbkMsRUFDc0MsQ0FEdEMsRUFDeUMsQ0FEekMsRUFDNEMsQ0FENUMsRUFDK0MsQ0FEL0MsRUFDa0QsQ0FEbEQsRUFDcUQsQ0FEckQsRUFDd0QsQ0FEeEQsRUFDMkQsQ0FEM0QsRUFDOEQsQ0FEOUQsRUFDaUUsQ0FEakUsRUFDb0UsQ0FEcEUsRUFDdUUsQ0FEdkUsRUFDMEUsQ0FEMUUsRUFFYixDQUZhLEVBRVYsQ0FGVSxFQUVQLENBRk8sRUFFSixDQUZJLEVBRUQsQ0FGQyxFQUVFLENBRkYsRUFFSyxDQUZMLEVBRVEsQ0FGUixFQUVXLENBRlgsRUFFYyxDQUZkLEVBRWlCLENBRmpCLEVBRW9CLENBRnBCLEVBRXVCLENBRnZCLEVBRTBCLENBRjFCLEVBRTZCLENBRjdCLEVBRWdDLENBRmhDLEVBRW1DLENBRm5DLEVBRXNDLENBRnRDLEVBRXlDLENBRnpDLEVBRTRDLENBRjVDLEVBRStDLENBRi9DLEVBRWtELENBRmxELEVBRXFELENBRnJELEVBRXdELENBRnhELEVBRTJELENBRjNELEVBRThELENBRjlELEVBRWlFLENBRmpFLEVBRW9FLENBRnBFLEVBRXVFLENBRnZFLEVBRTBFLENBRjFFLEVBR2IsQ0FIYSxFQUdWLENBSFUsRUFHUCxDQUhPLEVBR0osQ0FISSxFQUdELENBSEMsRUFHRSxDQUhGLEVBR0ssQ0FITCxFQUdRLENBSFIsRUFHVyxDQUhYLEVBR2MsQ0FIZCxFQUdpQixDQUhqQixFQUdvQixDQUhwQixFQUd1QixDQUh2QixFQUcwQixDQUgxQixFQUc2QixDQUg3QixFQUdnQyxDQUhoQyxFQUdtQyxDQUhuQyxFQUdzQyxDQUh0QyxFQUd5QyxDQUh6QyxFQUc0QyxDQUg1QyxFQUcrQyxDQUgvQyxFQUdrRCxDQUhsRCxFQUdxRCxDQUhyRCxFQUd3RCxDQUh4RCxFQUcyRCxDQUgzRCxFQUc4RCxDQUg5RCxFQUdpRSxDQUhqRSxFQUdvRSxDQUhwRSxFQUd1RSxDQUh2RSxFQUcwRSxDQUgxRSxFQUliLENBSmEsRUFJVixDQUpVLEVBSVAsQ0FKTyxFQUlKLENBSkksRUFJRCxDQUpDLEVBSUUsQ0FKRixFQUlLLENBSkwsRUFJUSxDQUpSLEVBSVcsQ0FKWCxFQUljLENBSmQsRUFJaUIsQ0FKakIsRUFJb0IsQ0FKcEIsRUFJdUIsQ0FKdkIsRUFJMEIsQ0FKMUIsRUFJNkIsQ0FKN0IsRUFJZ0MsQ0FKaEMsRUFJbUMsQ0FKbkMsRUFJc0MsQ0FKdEMsRUFJeUMsQ0FKekMsRUFJNEMsQ0FKNUMsRUFJK0MsQ0FKL0MsRUFJa0QsQ0FKbEQsRUFJcUQsQ0FKckQsRUFJd0QsQ0FKeEQsRUFJMkQsQ0FKM0QsRUFJOEQsQ0FKOUQsRUFJaUUsQ0FKakUsRUFJb0UsQ0FKcEUsRUFJdUUsQ0FKdkUsRUFJMEUsQ0FKMUUsRUFLYixDQUxhLEVBS1YsQ0FMVSxFQUtQLENBTE8sRUFLSixDQUxJLEVBS0QsQ0FMQyxFQUtFLENBTEYsRUFLSyxDQUxMLEVBS1EsQ0FMUixFQUtXLENBTFgsRUFLYyxDQUxkLEVBS2lCLENBTGpCLEVBS29CLENBTHBCLEVBS3VCLENBTHZCLEVBSzBCLENBTDFCLEVBSzZCLENBTDdCLEVBS2dDLENBTGhDLEVBS21DLENBTG5DLEVBS3NDLENBTHRDLEVBS3lDLENBTHpDLEVBSzRDLENBTDVDLEVBSytDLENBTC9DLEVBS2tELENBTGxELEVBS3FELENBTHJELEVBS3dELENBTHhELEVBSzJELENBTDNELEVBSzhELENBTDlELEVBS2lFLENBTGpFLEVBS29FLENBTHBFLEVBS3VFLENBTHZFLEVBSzBFLENBTDFFLEVBTWIsQ0FOYSxFQU1WLENBTlUsRUFNUCxDQU5PLEVBTUosQ0FOSSxFQU1ELENBTkMsRUFNRSxDQU5GLEVBTUssQ0FOTCxFQU1RLENBTlIsRUFNVyxDQU5YLEVBTWMsQ0FOZCxFQU1pQixDQU5qQixFQU1vQixDQU5wQixFQU11QixDQU52QixFQU0wQixDQU4xQixFQU02QixDQU43QixFQU1nQyxDQU5oQyxFQU1tQyxFQU5uQyxFQU11QyxFQU52QyxFQU0yQyxFQU4zQyxFQU0rQyxFQU4vQyxFQU1tRCxFQU5uRCxFQU11RCxFQU52RCxFQU0yRCxFQU4zRCxFQU0rRCxDQU4vRCxFQU1rRSxDQU5sRSxFQU1xRSxDQU5yRSxFQU13RSxDQU54RSxFQU0yRSxDQU4zRSxFQU04RSxDQU45RSxFQU1pRixDQU5qRixFQU9iLENBUGEsRUFPVixDQVBVLEVBT1AsQ0FQTyxFQU9KLENBUEksRUFPRCxDQVBDLEVBT0UsQ0FQRixFQU9LLENBUEwsRUFPUSxDQVBSLEVBT1csQ0FQWCxFQU9jLENBUGQsRUFPaUIsQ0FQakIsRUFPb0IsRUFQcEIsRUFPd0IsRUFQeEIsRUFPNEIsRUFQNUIsRUFPZ0MsRUFQaEMsRUFPb0MsQ0FQcEMsRUFPdUMsRUFQdkMsRUFPMkMsRUFQM0MsRUFPK0MsRUFQL0MsRUFPbUQsRUFQbkQsRUFPdUQsRUFQdkQsRUFPMkQsRUFQM0QsRUFPK0QsRUFQL0QsRUFPbUUsQ0FQbkUsRUFPc0UsQ0FQdEUsRUFPeUUsQ0FQekUsRUFPNEUsQ0FQNUUsRUFPK0UsQ0FQL0UsRUFPa0YsQ0FQbEYsRUFPcUYsQ0FQckYsRUFRYixDQVJhLEVBUVYsQ0FSVSxFQVFQLENBUk8sRUFRSixDQVJJLEVBUUQsQ0FSQyxFQVFFLENBUkYsRUFRSyxDQVJMLEVBUVEsQ0FSUixFQVFXLENBUlgsRUFRYyxDQVJkLEVBUWlCLENBUmpCLEVBUW9CLEVBUnBCLEVBUXdCLEVBUnhCLEVBUTRCLEVBUjVCLEVBUWdDLEVBUmhDLEVBUW9DLENBUnBDLEVBUXVDLEVBUnZDLEVBUTJDLEVBUjNDLEVBUStDLEVBUi9DLEVBUW1ELEVBUm5ELEVBUXVELEVBUnZELEVBUTJELEVBUjNELEVBUStELEVBUi9ELEVBUW1FLENBUm5FLEVBUXNFLENBUnRFLEVBUXlFLENBUnpFLEVBUTRFLENBUjVFLEVBUStFLENBUi9FLEVBUWtGLENBUmxGLEVBUXFGLENBUnJGLEVBU2IsQ0FUYSxFQVNWLENBVFUsRUFTUCxDQVRPLEVBU0osQ0FUSSxFQVNELENBVEMsRUFTRSxDQVRGLEVBU0ssQ0FUTCxFQVNRLENBVFIsRUFTVyxDQVRYLEVBU2MsQ0FUZCxFQVNpQixDQVRqQixFQVNvQixFQVRwQixFQVN3QixFQVR4QixFQVM0QixFQVQ1QixFQVNnQyxFQVRoQyxFQVNvQyxDQVRwQyxFQVN1QyxFQVR2QyxFQVMyQyxFQVQzQyxFQVMrQyxFQVQvQyxFQVNtRCxFQVRuRCxFQVN1RCxFQVR2RCxFQVMyRCxFQVQzRCxFQVMrRCxFQVQvRCxFQVNtRSxDQVRuRSxFQVNzRSxDQVR0RSxFQVN5RSxDQVR6RSxFQVM0RSxDQVQ1RSxFQVMrRSxDQVQvRSxFQVNrRixDQVRsRixFQVNxRixDQVRyRixFQVViLENBVmEsRUFVVixDQVZVLEVBVVAsQ0FWTyxFQVVKLENBVkksRUFVRCxDQVZDLEVBVUUsQ0FWRixFQVVLLENBVkwsRUFVUSxDQVZSLEVBVVcsQ0FWWCxFQVVjLENBVmQsRUFVaUIsQ0FWakIsRUFVb0IsRUFWcEIsRUFVd0IsRUFWeEIsRUFVNEIsRUFWNUIsRUFVZ0MsRUFWaEMsRUFVb0MsQ0FWcEMsRUFVdUMsRUFWdkMsRUFVMkMsRUFWM0MsRUFVK0MsRUFWL0MsRUFVbUQsRUFWbkQsRUFVdUQsRUFWdkQsRUFVMkQsRUFWM0QsRUFVK0QsRUFWL0QsRUFVbUUsQ0FWbkUsRUFVc0UsQ0FWdEUsRUFVeUUsQ0FWekUsRUFVNEUsQ0FWNUUsRUFVK0UsQ0FWL0UsRUFVa0YsQ0FWbEYsRUFVcUYsQ0FWckYsRUFXYixDQVhhLEVBV1YsQ0FYVSxFQVdQLENBWE8sRUFXSixDQVhJLEVBV0QsQ0FYQyxFQVdFLENBWEYsRUFXSyxDQVhMLEVBV1EsQ0FYUixFQVdXLENBWFgsRUFXYyxDQVhkLEVBV2lCLENBWGpCLEVBV29CLENBWHBCLEVBV3VCLENBWHZCLEVBVzBCLENBWDFCLEVBVzZCLENBWDdCLEVBV2dDLENBWGhDLEVBV21DLENBWG5DLEVBV3NDLENBWHRDLEVBV3lDLENBWHpDLEVBVzRDLENBWDVDLEVBVytDLENBWC9DLEVBV2tELENBWGxELEVBV3FELENBWHJELEVBV3dELENBWHhELEVBVzJELENBWDNELEVBVzhELENBWDlELEVBV2lFLENBWGpFLEVBV29FLENBWHBFLEVBV3VFLENBWHZFLEVBVzBFLENBWDFFLEVBWWIsQ0FaYSxFQVlWLENBWlUsRUFZUCxDQVpPLEVBWUosQ0FaSSxFQVlELENBWkMsRUFZRSxDQVpGLEVBWUssQ0FaTCxFQVlRLENBWlIsRUFZVyxDQVpYLEVBWWMsQ0FaZCxFQVlpQixDQVpqQixFQVlvQixDQVpwQixFQVl1QixDQVp2QixFQVkwQixDQVoxQixFQVk2QixDQVo3QixFQVlnQyxDQVpoQyxFQVltQyxDQVpuQyxFQVlzQyxDQVp0QyxFQVl5QyxDQVp6QyxFQVk0QyxDQVo1QyxFQVkrQyxDQVovQyxFQVlrRCxDQVpsRCxFQVlxRCxDQVpyRCxFQVl3RCxDQVp4RCxFQVkyRCxDQVozRCxFQVk4RCxDQVo5RCxFQVlpRSxDQVpqRSxFQVlvRSxDQVpwRSxFQVl1RSxDQVp2RSxFQVkwRSxDQVoxRSxFQWFiLENBYmEsRUFhVixDQWJVLEVBYVAsQ0FiTyxFQWFKLENBYkksRUFhRCxDQWJDLEVBYUUsQ0FiRixFQWFLLENBYkwsRUFhUSxDQWJSLEVBYVcsQ0FiWCxFQWFjLENBYmQsRUFhaUIsQ0FiakIsRUFhb0IsQ0FicEIsRUFhdUIsQ0FidkIsRUFhMEIsQ0FiMUIsRUFhNkIsQ0FiN0IsRUFhZ0MsQ0FiaEMsRUFhbUMsQ0FibkMsRUFhc0MsQ0FidEMsRUFheUMsQ0FiekMsRUFhNEMsQ0FiNUMsRUFhK0MsQ0FiL0MsRUFha0QsQ0FibEQsRUFhcUQsQ0FickQsRUFhd0QsQ0FieEQsRUFhMkQsQ0FiM0QsRUFhOEQsQ0FiOUQsRUFhaUUsQ0FiakUsRUFhb0UsQ0FicEUsRUFhdUUsQ0FidkUsRUFhMEUsQ0FiMUUsRUFjYixDQWRhLEVBY1YsQ0FkVSxFQWNQLENBZE8sRUFjSixDQWRJLEVBY0QsQ0FkQyxFQWNFLENBZEYsRUFjSyxDQWRMLEVBY1EsQ0FkUixFQWNXLENBZFgsRUFjYyxDQWRkLEVBY2lCLENBZGpCLEVBY29CLENBZHBCLEVBY3VCLENBZHZCLEVBYzBCLENBZDFCLEVBYzZCLEVBZDdCLEVBY2lDLEVBZGpDLEVBY3FDLEVBZHJDLEVBY3lDLEVBZHpDLEVBYzZDLENBZDdDLEVBY2dELENBZGhELEVBY21ELENBZG5ELEVBY3NELENBZHRELEVBY3lELENBZHpELEVBYzRELENBZDVELEVBYytELENBZC9ELEVBY2tFLENBZGxFLEVBY3FFLENBZHJFLEVBY3dFLENBZHhFLEVBYzJFLENBZDNFLEVBYzhFLENBZDlFLEVBZWIsQ0FmYSxFQWVWLENBZlUsRUFlUCxDQWZPLEVBZUosQ0FmSSxFQWVELENBZkMsRUFlRSxDQWZGLEVBZUssQ0FmTCxFQWVRLENBZlIsRUFlVyxDQWZYLEVBZWMsQ0FmZCxFQWVpQixDQWZqQixFQWVvQixDQWZwQixFQWV1QixDQWZ2QixFQWUwQixDQWYxQixFQWU2QixFQWY3QixFQWVpQyxFQWZqQyxFQWVxQyxFQWZyQyxFQWV5QyxFQWZ6QyxFQWU2QyxDQWY3QyxFQWVnRCxDQWZoRCxFQWVtRCxDQWZuRCxFQWVzRCxDQWZ0RCxFQWV5RCxDQWZ6RCxFQWU0RCxDQWY1RCxFQWUrRCxDQWYvRCxFQWVrRSxDQWZsRSxFQWVxRSxDQWZyRSxFQWV3RSxDQWZ4RSxFQWUyRSxDQWYzRSxFQWU4RSxDQWY5RSxFQWdCVixDQWhCVSxFQWdCUCxDQWhCTyxFQWdCSixDQWhCSSxFQWdCRCxDQWhCQyxFQWdCRSxDQWhCRixFQWdCSyxDQWhCTCxFQWdCUSxDQWhCUixFQWdCVyxDQWhCWCxFQWdCYyxDQWhCZCxFQWdCaUIsQ0FoQmpCLEVBZ0JvQixDQWhCcEIsRUFnQnVCLENBaEJ2QixFQWdCMEIsQ0FoQjFCLEVBZ0I2QixDQWhCN0IsRUFnQmdDLEVBaEJoQyxFQWdCb0MsRUFoQnBDLEVBZ0J3QyxFQWhCeEMsRUFnQjRDLEVBaEI1QyxFQWdCZ0QsQ0FoQmhELEVBZ0JtRCxDQWhCbkQsRUFnQnNELENBaEJ0RCxFQWdCeUQsQ0FoQnpELEVBZ0I0RCxDQWhCNUQsRUFnQitELENBaEIvRCxFQWdCa0UsQ0FoQmxFLEVBZ0JxRSxDQWhCckUsRUFnQndFLENBaEJ4RSxFQWdCMkUsQ0FoQjNFLEVBZ0I4RSxDQWhCOUUsRUFnQmlGLENBaEJqRixFQWlCYixDQWpCYSxFQWlCVixDQWpCVSxFQWlCUCxDQWpCTyxFQWlCSixDQWpCSSxFQWlCRCxDQWpCQyxFQWlCRSxDQWpCRixFQWlCSyxDQWpCTCxFQWlCUSxDQWpCUixFQWlCVyxDQWpCWCxFQWlCYyxDQWpCZCxFQWlCaUIsQ0FqQmpCLEVBaUJvQixDQWpCcEIsRUFpQnVCLENBakJ2QixFQWlCMEIsQ0FqQjFCLEVBaUI2QixFQWpCN0IsRUFpQmlDLEVBakJqQyxFQWlCcUMsRUFqQnJDLEVBaUJ5QyxFQWpCekMsRUFpQjZDLENBakI3QyxFQWlCZ0QsQ0FqQmhELEVBaUJtRCxDQWpCbkQsRUFpQnNELENBakJ0RCxFQWlCeUQsQ0FqQnpELEVBaUI0RCxDQWpCNUQsRUFpQitELENBakIvRCxFQWlCa0UsQ0FqQmxFLEVBaUJxRSxDQWpCckUsRUFpQndFLENBakJ4RSxFQWlCMkUsQ0FqQjNFLEVBaUI4RSxDQWpCOUUsRUFrQmIsQ0FsQmEsRUFrQlYsQ0FsQlUsRUFrQlAsQ0FsQk8sRUFrQkosQ0FsQkksRUFrQkQsQ0FsQkMsRUFrQkUsQ0FsQkYsRUFrQkssQ0FsQkwsRUFrQlEsQ0FsQlIsRUFrQlcsQ0FsQlgsRUFrQmMsQ0FsQmQsRUFrQmlCLENBbEJqQixFQWtCb0IsQ0FsQnBCLEVBa0J1QixDQWxCdkIsRUFrQjBCLENBbEIxQixFQWtCNkIsQ0FsQjdCLEVBa0JnQyxDQWxCaEMsRUFrQm1DLENBbEJuQyxFQWtCc0MsQ0FsQnRDLEVBa0J5QyxDQWxCekMsRUFrQjRDLENBbEI1QyxFQWtCK0MsQ0FsQi9DLEVBa0JrRCxDQWxCbEQsRUFrQnFELENBbEJyRCxFQWtCd0QsQ0FsQnhELEVBa0IyRCxDQWxCM0QsRUFrQjhELENBbEI5RCxFQWtCaUUsQ0FsQmpFLEVBa0JvRSxDQWxCcEUsRUFrQnVFLENBbEJ2RSxFQWtCMEUsQ0FsQjFFLEVBbUJiLENBbkJhLEVBbUJWLENBbkJVLEVBbUJQLENBbkJPLEVBbUJKLENBbkJJLEVBbUJELENBbkJDLEVBbUJFLENBbkJGLEVBbUJLLENBbkJMLEVBbUJRLENBbkJSLEVBbUJXLENBbkJYLEVBbUJjLENBbkJkLEVBbUJpQixDQW5CakIsRUFtQm9CLENBbkJwQixFQW1CdUIsQ0FuQnZCLEVBbUIwQixDQW5CMUIsRUFtQjZCLENBbkI3QixFQW1CZ0MsQ0FuQmhDLEVBbUJtQyxDQW5CbkMsRUFtQnNDLENBbkJ0QyxFQW1CeUMsQ0FuQnpDLEVBbUI0QyxDQW5CNUMsRUFtQitDLENBbkIvQyxFQW1Ca0QsQ0FuQmxELEVBbUJxRCxDQW5CckQsRUFtQndELENBbkJ4RCxFQW1CMkQsQ0FuQjNELEVBbUI4RCxDQW5COUQsRUFtQmlFLENBbkJqRSxFQW1Cb0UsQ0FuQnBFLEVBbUJ1RSxDQW5CdkUsRUFtQjBFLENBbkIxRSxFQW9CYixDQXBCYSxFQW9CVixDQXBCVSxFQW9CUCxDQXBCTyxFQW9CSixDQXBCSSxFQW9CRCxDQXBCQyxFQW9CRSxDQXBCRixFQW9CSyxDQXBCTCxFQW9CUSxDQXBCUixFQW9CVyxDQXBCWCxFQW9CYyxDQXBCZCxFQW9CaUIsQ0FwQmpCLEVBb0JvQixDQXBCcEIsRUFvQnVCLENBcEJ2QixFQW9CMEIsQ0FwQjFCLEVBb0I2QixDQXBCN0IsRUFvQmdDLENBcEJoQyxFQW9CbUMsQ0FwQm5DLEVBb0JzQyxDQXBCdEMsRUFvQnlDLENBcEJ6QyxFQW9CNEMsQ0FwQjVDLEVBb0IrQyxDQXBCL0MsRUFvQmtELENBcEJsRCxFQW9CcUQsQ0FwQnJELEVBb0J3RCxDQXBCeEQsRUFvQjJELENBcEIzRCxFQW9COEQsQ0FwQjlELEVBb0JpRSxDQXBCakUsRUFvQm9FLENBcEJwRSxFQW9CdUUsQ0FwQnZFLEVBb0IwRSxDQXBCMUUsRUFxQmIsQ0FyQmEsRUFxQlYsQ0FyQlUsRUFxQlAsQ0FyQk8sRUFxQkosQ0FyQkksRUFxQkQsQ0FyQkMsRUFxQkUsQ0FyQkYsRUFxQkssQ0FyQkwsRUFxQlEsQ0FyQlIsRUFxQlcsQ0FyQlgsRUFxQmMsQ0FyQmQsRUFxQmlCLENBckJqQixFQXFCb0IsQ0FyQnBCLEVBcUJ1QixDQXJCdkIsRUFxQjBCLENBckIxQixFQXFCNkIsQ0FyQjdCLEVBcUJnQyxDQXJCaEMsRUFxQm1DLENBckJuQyxFQXFCc0MsQ0FyQnRDLEVBcUJ5QyxDQXJCekMsRUFxQjRDLENBckI1QyxFQXFCK0MsQ0FyQi9DLEVBcUJrRCxDQXJCbEQsRUFxQnFELENBckJyRCxFQXFCd0QsQ0FyQnhELEVBcUIyRCxDQXJCM0QsRUFxQjhELENBckI5RCxFQXFCaUUsQ0FyQmpFLEVBcUJvRSxDQXJCcEUsRUFxQnVFLENBckJ2RSxFQXFCMEUsQ0FyQjFFLEVBc0JiLENBdEJhLEVBc0JWLENBdEJVLEVBc0JQLENBdEJPLEVBc0JKLENBdEJJLEVBc0JELENBdEJDLEVBc0JFLENBdEJGLEVBc0JLLENBdEJMLEVBc0JRLENBdEJSLEVBc0JXLENBdEJYLEVBc0JjLENBdEJkLEVBc0JpQixDQXRCakIsRUFzQm9CLENBdEJwQixFQXNCdUIsQ0F0QnZCLEVBc0IwQixDQXRCMUIsRUFzQjZCLENBdEI3QixFQXNCZ0MsQ0F0QmhDLEVBc0JtQyxDQXRCbkMsRUFzQnNDLENBdEJ0QyxFQXNCeUMsQ0F0QnpDLEVBc0I0QyxDQXRCNUMsRUFzQitDLENBdEIvQyxFQXNCa0QsQ0F0QmxELEVBc0JxRCxDQXRCckQsRUFzQndELENBdEJ4RCxFQXNCMkQsQ0F0QjNELEVBc0I4RCxDQXRCOUQsRUFzQmlFLENBdEJqRSxFQXNCb0UsQ0F0QnBFLEVBc0J1RSxDQXRCdkUsRUFzQjBFLENBdEIxRSxFQXVCYixDQXZCYSxFQXVCVixDQXZCVSxFQXVCUCxDQXZCTyxFQXVCSixDQXZCSSxFQXVCRCxDQXZCQyxFQXVCRSxDQXZCRixFQXVCSyxDQXZCTCxFQXVCUSxDQXZCUixFQXVCVyxDQXZCWCxFQXVCYyxDQXZCZCxFQXVCaUIsQ0F2QmpCLEVBdUJvQixDQXZCcEIsRUF1QnVCLENBdkJ2QixFQXVCMEIsQ0F2QjFCLEVBdUI2QixDQXZCN0IsRUF1QmdDLENBdkJoQyxFQXVCbUMsQ0F2Qm5DLEVBdUJzQyxDQXZCdEMsRUF1QnlDLENBdkJ6QyxFQXVCNEMsQ0F2QjVDLEVBdUIrQyxDQXZCL0MsRUF1QmtELENBdkJsRCxFQXVCcUQsQ0F2QnJELEVBdUJ3RCxDQXZCeEQsRUF1QjJELENBdkIzRCxFQXVCOEQsQ0F2QjlELEVBdUJpRSxDQXZCakUsRUF1Qm9FLENBdkJwRSxFQXVCdUUsQ0F2QnZFLEVBdUIwRSxDQXZCMUUsRUF3QmIsQ0F4QmEsRUF3QlYsQ0F4QlUsRUF3QlAsQ0F4Qk8sRUF3QkosQ0F4QkksRUF3QkQsQ0F4QkMsRUF3QkUsQ0F4QkYsRUF3QkssQ0F4QkwsRUF3QlEsQ0F4QlIsRUF3QlcsQ0F4QlgsRUF3QmMsQ0F4QmQsRUF3QmlCLENBeEJqQixFQXdCb0IsQ0F4QnBCLEVBd0J1QixDQXhCdkIsRUF3QjBCLENBeEIxQixFQXdCNkIsQ0F4QjdCLEVBd0JnQyxDQXhCaEMsRUF3Qm1DLENBeEJuQyxFQXdCc0MsQ0F4QnRDLEVBd0J5QyxDQXhCekMsRUF3QjRDLENBeEI1QyxFQXdCK0MsQ0F4Qi9DLEVBd0JrRCxDQXhCbEQsRUF3QnFELENBeEJyRCxFQXdCd0QsQ0F4QnhELEVBd0IyRCxDQXhCM0QsRUF3QjhELENBeEI5RCxFQXdCaUUsQ0F4QmpFLEVBd0JvRSxDQXhCcEUsRUF3QnVFLENBeEJ2RSxFQXdCMEUsQ0F4QjFFLEVBeUJiLENBekJhLEVBeUJWLENBekJVLEVBeUJQLENBekJPLEVBeUJKLENBekJJLEVBeUJELENBekJDLEVBeUJFLENBekJGLEVBeUJLLENBekJMLEVBeUJRLENBekJSLEVBeUJXLENBekJYLEVBeUJjLENBekJkLEVBeUJpQixDQXpCakIsRUF5Qm9CLENBekJwQixFQXlCdUIsQ0F6QnZCLEVBeUIwQixDQXpCMUIsRUF5QjZCLENBekI3QixFQXlCZ0MsQ0F6QmhDLEVBeUJtQyxDQXpCbkMsRUF5QnNDLENBekJ0QyxFQXlCeUMsQ0F6QnpDLEVBeUI0QyxDQXpCNUMsRUF5QitDLENBekIvQyxFQXlCa0QsQ0F6QmxELEVBeUJxRCxDQXpCckQsRUF5QndELENBekJ4RCxFQXlCMkQsQ0F6QjNELEVBeUI4RCxDQXpCOUQsRUF5QmlFLENBekJqRSxFQXlCb0UsQ0F6QnBFLEVBeUJ1RSxDQXpCdkUsRUF5QjBFLENBekIxRSxFQTBCYixDQTFCYSxFQTBCVixDQTFCVSxFQTBCUCxDQTFCTyxFQTBCSixDQTFCSSxFQTBCRCxDQTFCQyxFQTBCRSxDQTFCRixFQTBCSyxDQTFCTCxFQTBCUSxDQTFCUixFQTBCVyxDQTFCWCxFQTBCYyxDQTFCZCxFQTBCaUIsQ0ExQmpCLEVBMEJvQixDQTFCcEIsRUEwQnVCLENBMUJ2QixFQTBCMEIsQ0ExQjFCLEVBMEI2QixDQTFCN0IsRUEwQmdDLENBMUJoQyxFQTBCbUMsQ0ExQm5DLEVBMEJzQyxDQTFCdEMsRUEwQnlDLENBMUJ6QyxFQTBCNEMsQ0ExQjVDLEVBMEIrQyxDQTFCL0MsRUEwQmtELENBMUJsRCxFQTBCcUQsQ0ExQnJELEVBMEJ3RCxDQTFCeEQsRUEwQjJELENBMUIzRCxFQTBCOEQsQ0ExQjlELEVBMEJpRSxDQTFCakUsRUEwQm9FLENBMUJwRSxFQTBCdUUsQ0ExQnZFLEVBMEIwRSxDQTFCMUUsRUEyQmIsQ0EzQmEsRUEyQlYsQ0EzQlUsRUEyQlAsQ0EzQk8sRUEyQkosQ0EzQkksRUEyQkQsQ0EzQkMsRUEyQkUsQ0EzQkYsRUEyQkssQ0EzQkwsRUEyQlEsQ0EzQlIsRUEyQlcsQ0EzQlgsRUEyQmMsQ0EzQmQsRUEyQmlCLENBM0JqQixFQTJCb0IsQ0EzQnBCLEVBMkJ1QixDQTNCdkIsRUEyQjBCLENBM0IxQixFQTJCNkIsQ0EzQjdCLEVBMkJnQyxDQTNCaEMsRUEyQm1DLENBM0JuQyxFQTJCc0MsQ0EzQnRDLEVBMkJ5QyxDQTNCekMsRUEyQjRDLENBM0I1QyxFQTJCK0MsQ0EzQi9DLEVBMkJrRCxDQTNCbEQsRUEyQnFELENBM0JyRCxFQTJCd0QsQ0EzQnhELEVBMkIyRCxDQTNCM0QsRUEyQjhELENBM0I5RCxFQTJCaUUsQ0EzQmpFLEVBMkJvRSxDQTNCcEUsRUEyQnVFLENBM0J2RSxFQTJCMEUsQ0EzQjFFLEVBNEJiLENBNUJhLEVBNEJWLENBNUJVLEVBNEJQLENBNUJPLEVBNEJKLENBNUJJLEVBNEJELENBNUJDLEVBNEJFLENBNUJGLEVBNEJLLENBNUJMLEVBNEJRLENBNUJSLEVBNEJXLENBNUJYLEVBNEJjLENBNUJkLEVBNEJpQixDQTVCakIsRUE0Qm9CLENBNUJwQixFQTRCdUIsQ0E1QnZCLEVBNEIwQixDQTVCMUIsRUE0QjZCLENBNUI3QixFQTRCZ0MsQ0E1QmhDLEVBNEJtQyxDQTVCbkMsRUE0QnNDLENBNUJ0QyxFQTRCeUMsQ0E1QnpDLEVBNEI0QyxDQTVCNUMsRUE0QitDLENBNUIvQyxFQTRCa0QsQ0E1QmxELEVBNEJxRCxDQTVCckQsRUE0QndELENBNUJ4RCxFQTRCMkQsQ0E1QjNELEVBNEI4RCxDQTVCOUQsRUE0QmlFLENBNUJqRSxFQTRCb0UsQ0E1QnBFLEVBNEJ1RSxDQTVCdkUsRUE0QjBFLENBNUIxRSxFQTZCYixDQTdCYSxFQTZCVixDQTdCVSxFQTZCUCxDQTdCTyxFQTZCSixDQTdCSSxFQTZCRCxDQTdCQyxFQTZCRSxDQTdCRixFQTZCSyxDQTdCTCxFQTZCUSxDQTdCUixFQTZCVyxDQTdCWCxFQTZCYyxDQTdCZCxFQTZCaUIsQ0E3QmpCLEVBNkJvQixDQTdCcEIsRUE2QnVCLENBN0J2QixFQTZCMEIsQ0E3QjFCLEVBNkI2QixDQTdCN0IsRUE2QmdDLENBN0JoQyxFQTZCbUMsQ0E3Qm5DLEVBNkJzQyxDQTdCdEMsRUE2QnlDLENBN0J6QyxFQTZCNEMsQ0E3QjVDLEVBNkIrQyxDQTdCL0MsRUE2QmtELENBN0JsRCxFQTZCcUQsQ0E3QnJELEVBNkJ3RCxDQTdCeEQsRUE2QjJELENBN0IzRCxFQTZCOEQsQ0E3QjlELEVBNkJpRSxDQTdCakUsRUE2Qm9FLENBN0JwRSxFQTZCdUUsQ0E3QnZFLEVBNkIwRSxDQTdCMUUsRUE4QmIsQ0E5QmEsRUE4QlYsQ0E5QlUsRUE4QlAsQ0E5Qk8sRUE4QkosQ0E5QkksRUE4QkQsQ0E5QkMsRUE4QkUsQ0E5QkYsRUE4QkssQ0E5QkwsRUE4QlEsQ0E5QlIsRUE4QlcsQ0E5QlgsRUE4QmMsQ0E5QmQsRUE4QmlCLENBOUJqQixFQThCb0IsQ0E5QnBCLEVBOEJ1QixDQTlCdkIsRUE4QjBCLENBOUIxQixFQThCNkIsQ0E5QjdCLEVBOEJnQyxDQTlCaEMsRUE4Qm1DLENBOUJuQyxFQThCc0MsQ0E5QnRDLEVBOEJ5QyxDQTlCekMsRUE4QjRDLENBOUI1QyxFQThCK0MsQ0E5Qi9DLEVBOEJrRCxDQTlCbEQsRUE4QnFELENBOUJyRCxFQThCd0QsQ0E5QnhELEVBOEIyRCxDQTlCM0QsRUE4QjhELENBOUI5RCxFQThCaUUsQ0E5QmpFLEVBOEJvRSxDQTlCcEUsRUE4QnVFLENBOUJ2RSxFQThCMEUsQ0E5QjFFLENBQWQsQyxDQWlDQTs7QUFDQSxJQUFJQyxTQUFTLEdBQUcsRUFBaEI7QUFDQSxJQUFJQyxVQUFVLEdBQUcsRUFBakIsQyxDQUNBOztBQUNBLElBQUlDLFFBQVEsR0FBRyxFQUFmO0FBQ0EsSUFBSUMsU0FBUyxHQUFHLEVBQWhCLEMsQ0FDQTs7QUFDQSxJQUFJQyxhQUFhLEdBQUcsQ0FBcEI7QUFDQSxJQUFJQyxVQUFVLEdBQUcsQ0FBakI7QUFDQSxJQUFJQyxnQkFBZ0IsR0FBRyxDQUF2QjtBQUNBLElBQUlDLGFBQWEsR0FBRyxDQUFwQixDLENBR0E7O0FBQ0EsSUFBSUMsUUFBUSxHQUFHO0FBQ1g7QUFDQSxNQUFLLEtBRk07QUFHWDtBQUNBLE1BQUssS0FKTTtBQUtYO0FBQ0EsTUFBSyxLQU5NO0FBT1g7QUFDQSxNQUFLLEtBUk07QUFTZDtBQUNBLE1BQUs7QUFWUyxDQUFmO0FBYUEsSUFBSUMsVUFBVSxHQUFHO0FBQ2hCQyxJQUFFLEVBQUcsQ0FEVztBQUVoQkMsT0FBSyxFQUFFLENBRlM7QUFHaEJDLE1BQUksRUFBRSxDQUhVO0FBSWhCQyxNQUFJLEVBQUU7QUFKVSxDQUFqQixDLENBUUE7O0FBQ0EsSUFBSUMsVUFBVSxHQUFHO0FBQ2JDLE9BQUssRUFBRSxDQURNO0FBRWJDLE1BQUksRUFBRSxDQUZPO0FBR2JDLE9BQUssRUFBRTtBQUhNLENBQWpCLEMsQ0FNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHO0FBQ2YsS0FBSTtBQUFFQyxTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNDLEtBQXRDO0FBQTZDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsQ0FBSDtBQUFLQyxPQUFDLEVBQUMsQ0FBUDtBQUFTQyxPQUFDLEVBQUMsRUFBWDtBQUFjQyxPQUFDLEVBQUM7QUFBaEIsS0FBRDtBQUFwRCxHQURXO0FBRWYsS0FBSTtBQUFFTixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNFLElBQXRDO0FBQTRDSyxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsRUFBSDtBQUFNQyxPQUFDLEVBQUMsQ0FBUjtBQUFVQyxPQUFDLEVBQUMsRUFBWjtBQUFlQyxPQUFDLEVBQUM7QUFBakIsS0FBRDtBQUFuRCxHQUZXO0FBR2YsS0FBSTtBQUFFTixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNFLElBQXRDO0FBQTRDSyxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsRUFBSDtBQUFNQyxPQUFDLEVBQUMsQ0FBUjtBQUFVQyxPQUFDLEVBQUMsRUFBWjtBQUFlQyxPQUFDLEVBQUM7QUFBakIsS0FBRDtBQUFuRCxHQUhXO0FBSVosS0FBSTtBQUFFTixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNHLEtBQXRDO0FBQTZDSSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsQ0FBVDtBQUFXQyxPQUFDLEVBQUMsRUFBYjtBQUFnQkMsT0FBQyxFQUFDO0FBQWxCLEtBQUQ7QUFBcEQsR0FKUTtBQUtaLEtBQUk7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLENBQVQ7QUFBV0MsT0FBQyxFQUFDLEVBQWI7QUFBZ0JDLE9BQUMsRUFBQztBQUFsQixLQUFEO0FBQXBELEdBTFE7QUFNWixLQUFJO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxFQUFUO0FBQVlDLE9BQUMsRUFBQyxFQUFkO0FBQWlCQyxPQUFDLEVBQUM7QUFBbkIsS0FBRDtBQUFwRCxHQU5RO0FBT1osS0FBSTtBQUFFTixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNDLEtBQXRDO0FBQTZDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsRUFBSDtBQUFNQyxPQUFDLEVBQUMsRUFBUjtBQUFXQyxPQUFDLEVBQUMsRUFBYjtBQUFnQkMsT0FBQyxFQUFDO0FBQWxCLEtBQUQ7QUFBcEQsR0FQUTtBQVFaLEtBQUk7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDRSxJQUF0QztBQUE0Q0ssVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLENBQVQ7QUFBV0MsT0FBQyxFQUFDLEVBQWI7QUFBZ0JDLE9BQUMsRUFBQztBQUFsQixLQUFEO0FBQW5ELEdBUlE7QUFTWixLQUFJO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0UsSUFBdEM7QUFBNENLLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxFQUFUO0FBQVlDLE9BQUMsRUFBQyxFQUFkO0FBQWlCQyxPQUFDLEVBQUM7QUFBbkIsS0FBRDtBQUFuRCxHQVRRO0FBWVosTUFBSztBQUFFTixTQUFLLEVBQUMsU0FBUjtBQUFtQkMsU0FBSyxFQUFDTixVQUFVLENBQUNDLEtBQXBDO0FBQTJDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsRUFBVDtBQUFZQyxPQUFDLEVBQUMsRUFBZDtBQUFpQkMsT0FBQyxFQUFDO0FBQW5CLEtBQUQ7QUFBbEQsR0FaTztBQWFaLE1BQUs7QUFBRU4sU0FBSyxFQUFDLFNBQVI7QUFBbUJDLFNBQUssRUFBQ04sVUFBVSxDQUFDQyxLQUFwQztBQUEyQ00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEVBQVQ7QUFBWUMsT0FBQyxFQUFDLEVBQWQ7QUFBaUJDLE9BQUMsRUFBQztBQUFuQixLQUFEO0FBQWxELEdBYk87QUFjWixNQUFLO0FBQUVOLFNBQUssRUFBQyxTQUFSO0FBQW1CQyxTQUFLLEVBQUNOLFVBQVUsQ0FBQ0MsS0FBcEM7QUFBMkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxFQUFUO0FBQVlDLE9BQUMsRUFBQyxFQUFkO0FBQWlCQyxPQUFDLEVBQUM7QUFBbkIsS0FBRDtBQUFsRCxHQWRPO0FBZVosTUFBSztBQUFFTixTQUFLLEVBQUMsU0FBUjtBQUFtQkMsU0FBSyxFQUFDTixVQUFVLENBQUNDLEtBQXBDO0FBQTJDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsRUFBVDtBQUFZQyxPQUFDLEVBQUMsRUFBZDtBQUFpQkMsT0FBQyxFQUFDO0FBQW5CLEtBQUQ7QUFBbEQsR0FmTztBQWdCWixNQUFLO0FBQUVOLFNBQUssRUFBQyxTQUFSO0FBQW1CQyxTQUFLLEVBQUNOLFVBQVUsQ0FBQ0MsS0FBcEM7QUFBMkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxFQUFUO0FBQVlDLE9BQUMsRUFBQyxFQUFkO0FBQWlCQyxPQUFDLEVBQUM7QUFBbkIsS0FBRDtBQUFsRCxHQWhCTztBQWlCWixNQUFLO0FBQUVOLFNBQUssRUFBQyxTQUFSO0FBQW1CQyxTQUFLLEVBQUNOLFVBQVUsQ0FBQ0MsS0FBcEM7QUFBMkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxFQUFUO0FBQVlDLE9BQUMsRUFBQyxFQUFkO0FBQWlCQyxPQUFDLEVBQUM7QUFBbkIsS0FBRDtBQUFsRCxHQWpCTztBQWtCWixNQUFLO0FBQUVOLFNBQUssRUFBQyxTQUFSO0FBQW1CQyxTQUFLLEVBQUNOLFVBQVUsQ0FBQ0MsS0FBcEM7QUFBMkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFsRCxHQWxCTztBQW1CWixNQUFLO0FBQUVOLFNBQUssRUFBQyxTQUFSO0FBQW1CQyxTQUFLLEVBQUNOLFVBQVUsQ0FBQ0MsS0FBcEM7QUFBMkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFsRCxHQW5CTztBQW9CWixNQUFLO0FBQUVOLFNBQUssRUFBQyxTQUFSO0FBQW1CQyxTQUFLLEVBQUNOLFVBQVUsQ0FBQ0MsS0FBcEM7QUFBMkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFsRCxHQXBCTztBQXFCWixNQUFLO0FBQUVOLFNBQUssRUFBQyxTQUFSO0FBQW1CQyxTQUFLLEVBQUNOLFVBQVUsQ0FBQ0MsS0FBcEM7QUFBMkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFsRCxHQXJCTztBQXVCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0UsSUFBdEM7QUFBNENLLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxFQUFIO0FBQU1DLE9BQUMsRUFBQyxFQUFSO0FBQVdDLE9BQUMsRUFBQyxFQUFiO0FBQWdCQyxPQUFDLEVBQUM7QUFBbEIsS0FBRDtBQUFuRCxHQXZCTztBQXdCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxFQUFIO0FBQU1DLE9BQUMsRUFBQyxFQUFSO0FBQVdDLE9BQUMsRUFBQyxFQUFiO0FBQWdCQyxPQUFDLEVBQUM7QUFBbEIsS0FBRDtBQUFwRCxHQXhCTztBQXlCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxFQUFUO0FBQVlDLE9BQUMsRUFBQyxFQUFkO0FBQWlCQyxPQUFDLEVBQUM7QUFBbkIsS0FBRDtBQUFwRCxHQXpCTztBQTJCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQTNCTztBQTRCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQTVCTztBQTZCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQTdCTztBQThCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0UsSUFBdEM7QUFBNENLLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFuRCxHQTlCTztBQStCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQS9CTztBQWdDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQWhDTztBQWtDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQWxDTztBQW1DWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQW5DTztBQW9DWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQXBDTztBQXFDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQXJDTztBQXNDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FB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N0MsRUFDQyxLQUFNUSxDQUFDLEdBQUMsRUFBUixHQUFjLEVBRGYsRUFFQyxNQUFNLEVBRlA7QUFHQTtBQUNEO0FBQ0Q7O0FBQ0QvQyxLQUFHLENBQUNzTCxTQUFKLEdBQWdCLE1BQWhCLENBekptQixDQTJKaEI7O0FBQ0EsTUFBSS9KLE1BQU0sR0FBR3VDLE1BQU0sQ0FBQ1MsT0FBUCxDQUFlVCxNQUFNLENBQUNRLFNBQXRCLENBQWI7QUFDSHRFLEtBQUcsQ0FBQ2tMLFNBQUosQ0FBY3ZILFFBQWQsRUFDR3BDLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUMsQ0FEYixFQUVHRCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVFLENBRmIsRUFHR0YsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRyxDQUhiLEVBSUdILE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUksQ0FKYixFQUtHa0UsTUFBTSxDQUFDN0QsTUFBUCxDQUFjLENBQWQsSUFBbUI4QixNQUFNLENBQUNPLFFBQVAsQ0FBZ0IsQ0FBaEIsQ0FMdEIsRUFNR3dCLE1BQU0sQ0FBQzdELE1BQVAsQ0FBYyxDQUFkLElBQW1COEIsTUFBTSxDQUFDTyxRQUFQLENBQWdCLENBQWhCLENBTnRCLEVBT0dQLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixDQUFsQixDQVBILEVBT3lCTixNQUFNLENBQUNNLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FQekI7QUFTQTNELGVBQWEsR0FBR2dLLGdCQUFoQjtBQUNBeEMsdUJBQXFCLENBQUNDLFFBQUQsQ0FBckI7QUFDQSxDOzs7Ozs7Ozs7OztBQzEyQkQsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL21hcFwiO1xuXG5cblxuIiwiLy8gaSB3YW50IGEgY2FtZXJhIGZvbGxvd2luZyB0aGUgY2hhciBhcm91bmQgdGhlIG1hcFxuXG5cbmxldCBjdHggPSBudWxsO1xuXG4vLyBjcmVhdGUgYSBtYXAgd2l0aCAxMCoxMCB0aWxlXG5sZXQgZ2FtZU1hcCA9IFtcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMCwgMCwgMCwgMCwgNiwgNSwgNSwgNywgMCwgMjYsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjcsIDAsIDAsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDEsIDEsIDEsIDEsIDIxLCAyMCwgMjAsIDIyLCAxLCAyOSwgMjgsIDI4LCAyOCwgMjgsIDI4LCAzMCwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMSwgMSwgMSwgMSwgMjEsIDIwLCAyMCwgMjIsIDEsIDI5LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDMwLCAyLCAyLCAwLCA0LCA0LCA0LCA0LFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCAwLCAxLCAxLCAxLCAxLCAyMSwgMjAsIDIwLCAyMiwgMSwgMjksIDI4LCAyOCwgMjgsIDI4LCAyOCwgMzAsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDEsIDEsIDEsIDEsIDE2LCAyMCwgMTYsIDE4LCAxLCAxNiwgMTgsIDE2LCAxOSwgMjgsIDE4LCAxOCwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMiwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMiwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMiwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMzEsIDMyLCAzMywgMzQsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDM1LCAzNiwgMzcsIDM4LCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLCA0LCA0LCA0LCA0LFxuICAgIDQsIDQsIDQsIDQsIDQsIDQsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDM5LCA0MCwgNDEsIDQyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLCA0LCA0LCA0LCA0LFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCAwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxNiwgMzYsIDE2LCAxOCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgOCwgOCwgOCwgOCwgOCwgOSwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOSwgOCwgOCwgOCwgOCwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOSwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcbl07XG5cbi8vIOavj+S4quWcsOegluWkmuWwkXBpeGVsXG5sZXQgdGlsZVdpZHRoID0gNDA7XG5sZXQgdGlsZUhlaWdodCA9IDQwO1xuLy8g5Zyw5Zu+5aSn5bCP5bCx5pivMjAqMjBcbmxldCBtYXBXaWR0aCA9IDMwO1xubGV0IG1hcEhlaWdodCA9IDMwO1xuLy8gZnJhbWVyYXRlXG5sZXQgY3VycmVudFNlY29uZCA9IDA7XG5sZXQgZnJhbWVDb3VudCA9IDA7XG5sZXQgZnJhbWVzTGFzdFNlY29uZCA9IDA7XG5sZXQgbGFzdEZyYW1lVGltZSA9IDA7XG5cblxuLy8ga2V5Q29kZSA6IGJvb2xlYW4gdG8gdGVsbCB1cyB3aGljaCBvbmUgYXJlIHByZXNzZWRcbmxldCBoZWxkS2V5cyA9IHtcbiAgICAvLyAzNzogbGVmdFxuICAgIDM3IDogZmFsc2UsXG4gICAgLy8gMzg6IHVwXG4gICAgMzggOiBmYWxzZSxcbiAgICAvLyAzOTogcmlnaHRcbiAgICAzOSA6IGZhbHNlLFxuICAgIC8vIDQwOiBkb3duXG4gICAgNDAgOiBmYWxzZSxcblx0Ly8gMzI6IHNwYWNlXG5cdDMyIDogZmFsc2Vcbn07XG5cbmxldCBkaXJlY3Rpb25zID0ge1xuXHR1cFx0OiAwLFxuXHRyaWdodDogMSxcblx0ZG93bjogMixcblx0bGVmdDogM1xufTtcblxuXG4vLyDlnLDmnb/np43nsbtcbmxldCBmbG9vclR5cGVzID0ge1xuICAgIHNvbGlkOiAwLFxuICAgIHBhdGg6IDEsXG4gICAgb2NlYW46IDJcbn07XG5cbi8vIOaVsOWtl++8iGdhbWVNYXDvvInlr7nlupTkuIrpopzoibLlkozlnLDmnb/np43nsbtcbi8vIDA65aKZ5aOBIDE66I2J5ZywIDI66ZmG5ZywICA0OiDmsLQgIFxuLy8gNTrpu4ToibLlhoXpg6jlopnlo4EgNjog6buE6Imy5YaF6YOo5aKZ5aOB5bem6KeSIDc66buE6Imy5YaF6YOo5aKZ5aOB5Y+z6KeSXG4vLyA4OiDmspnmu6kgOTrmspnmu6kyXG4vLyAyMDrpu4ToibLlhoXpg6jlnLDmnb8gMjE66buE6Imy5YaF6YOo5aKZ5bemIDIyOum7hOiJsuWGhemDqOWimeWPs1xuLy8gMjU65qOV6Imy5YaF6YOo5aKZ5aOBIDI2OuajleiJsuWGhemDqOWimeWjgeW3puinkiAyNzog5qOV6Imy5YaF6YOo5aKZ5aOB5Y+z6KeSXG4vLyAyODog5qOV6Imy5YaF6YOo5Zyw5p2/IDI5OiDmo5XoibLlhoXpg6jlopnlt6YgMzA65qOV6Imy5YaF6YOo5aKZ5Y+zXG4vLyAxMC0xOSDmiL/lrZDlpJbop4Jcbi8vIDMxLTQyIG1pdW1pdSByb29tXG5sZXQgdGlsZVR5cGVzID0ge1xuXHQwIDogeyBjb2xvcjogXCIjNzkzZDRjXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjAseTowLHc6NDAsaDo0MH1dIH0sXG5cdDEgOiB7IGNvbG9yOiBcIiM2ZGY3YjFcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo0MCx5OjAsdzo0MCxoOjQwfV0gfSxcblx0MiA6IHsgY29sb3I6IFwiI2M5NzQ2MVwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjgwLHk6MCx3OjQwLGg6NDB9XVx0fSxcbiAgICA0IDogeyBjb2xvcjogXCIjMDA4ZGYwXCIsIGZsb29yOiBmbG9vclR5cGVzLm9jZWFuLCBzcHJpdGU6W3t4OjE2MCx5OjAsdzo0MCxoOjQwfV0gfSxcbiAgICA1IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjEyMCx5OjAsdzo0MCxoOjQwfV0gfSxcbiAgICA2IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjEyMCx5OjQwLHc6NDAsaDo0MH1dIH0sXG4gICAgNyA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDo4MCx5OjQwLHc6NDAsaDo0MH1dIH0sXG4gICAgOCA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjIwMCx5OjAsdzo0MCxoOjQwfV0gfSxcbiAgICA5IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6MjAwLHk6NDAsdzo0MCxoOjQwfV0gfSxcblxuXHRcbiAgICAxMCA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDExIDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyODAseTo0MCx3OjQwLGg6NDB9XX0sXG4gICAgMTIgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjQwLHc6NDAsaDo0MH1dfSxcbiAgICAxMyA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE0IDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyODAseTo4MCx3OjQwLGg6NDB9XX0sXG4gICAgMTUgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjgwLHc6NDAsaDo0MH1dfSxcbiAgICAxNiA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6MTIwLHc6NDAsaDo0MH1dfSxcbiAgICAxNyA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjgwLHk6MTIwLHc6NDAsaDo0MH1dfSxcbiAgICAxOCA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6MTIwLHc6NDAsaDo0MH1dfSxcbiAgICAxOSA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzYwLHk6MTIwLHc6NDAsaDo0MH1dfSxcbiAgICBcbiAgICAyMCA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjQwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDIxIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjgwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDIyIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjEyMCx5OjgwLHc6NDAsaDo0MH1dfSxcblxuICAgIDI1IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjE2MCx3OjQwLGg6NDB9XX0sXG4gICAgMjYgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6MTYwLHc6NDAsaDo0MH1dfSxcbiAgICAyNyA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyODAseToxNjAsdzo0MCxoOjQwfV19LFxuICAgIDI4IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6MjgwLHk6MjAwLHc6NDAsaDo0MH1dfSxcbiAgICAyOSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozNjAseToxNjAsdzo0MCxoOjQwfV19LFxuICAgIDMwIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI0MCx5OjIwMCx3OjQwLGg6NDB9XX0sXG5cbiAgICAzMSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseToyMDAsdzo0MCxoOjQwfV19LFxuICAgIDMyIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjM2MCx5OjIwMCx3OjQwLGg6NDB9XX0sXG4gICAgMzMgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6NDAwLHk6MjAwLHc6NDAsaDo0MH1dfSxcbiAgICAzNCA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDo0NDAseToyMDAsdzo0MCxoOjQwfV19LFxuICAgIDM1IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjI0MCx3OjQwLGg6NDB9XX0sXG4gICAgMzYgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDozNjAseToyNDAsdzo0MCxoOjQwfV19LFxuICAgIDM3IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjQwMCx5OjI0MCx3OjQwLGg6NDB9XX0sXG4gICAgMzggOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6NDQwLHk6MjQwLHc6NDAsaDo0MH1dfSxcbiAgICAzOSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseToyODAsdzo0MCxoOjQwfV19LFxuICAgIDQwIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6MzYwLHk6MjgwLHc6NDAsaDo0MH1dfSxcbiAgICA0MSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjQwMCx5OjI4MCx3OjQwLGg6NDB9XX0sXG4gICAgNDIgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6NDQwLHk6MjgwLHc6NDAsaDo0MH1dfSxcblxuXG4gICAgXG59O1xuXG5sZXQgY29sbGlzaW9ucyA9IHtcblx0bm9uZVx0XHQ6IDAsXG5cdHNvbGlkXHRcdDogMVxufTtcblxubGV0IG9iamVjdFR5cGVzID0ge1xuXHQxIDoge1xuXHRcdG5hbWUgOiBcIkZsb3dlclwiLFxuXHRcdHNwcml0ZSA6IFt7eDo0MCx5OjE4MCx3OjQwLGg6MjB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLm5vbmUsXG5cdFx0ekluZGV4IDogMVxuXHR9LFxuXHQyIDoge1xuXHRcdG5hbWUgOiBcImZlbmNlXCIsXG5cdFx0c3ByaXRlIDogW3t4OjQwLHk6MjAwLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuXHR9LFxuXHQzIDoge1xuXHRcdG5hbWUgOiBcIlRyZWVcIixcblx0XHRzcHJpdGUgOiBbe3g6ODAseToxNjAsdzo4MCxoOjgwfV0sXG5cdFx0b2Zmc2V0IDogWy0yMCwtMjBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogM1xuICAgIH0sXG4gICAgNCA6IHtcblx0XHRuYW1lIDogXCJtYXNocm9vbXNcIixcblx0XHRzcHJpdGUgOiBbe3g6NDAseToxNjAsdzo0MCxoOjIwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5ub25lLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDUgOiB7XG5cdFx0bmFtZSA6IFwiUGlnIFNob3BcIixcblx0XHRzcHJpdGUgOiBbe3g6MTYwLHk6MTYwLHc6ODAsaDo4MH1dLFxuXHRcdG9mZnNldCA6IFstMjAsLTIwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDNcbiAgICB9LFxuICAgIDYgOiB7XG5cdFx0bmFtZSA6IFwiZG9udXRzXCIsXG5cdFx0c3ByaXRlIDogW3t4OjM2MCx5OjAsdzo4MCxoOjExNX1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMubm9uZSxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICA3IDoge1xuXHRcdG5hbWUgOiBcImNvb2tpbmdcIixcblx0XHRzcHJpdGUgOiBbe3g6MTYwLHk6ODAsdzo4MCxoOjgwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5ub25lLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDggOiB7XG5cdFx0bmFtZSA6IFwiY2FycGV0XCIsXG5cdFx0c3ByaXRlIDogW3t4OjAseTo4MCx3OjgwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLm5vbmUsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgOSA6IHtcblx0XHRuYW1lIDogXCJkZXNrXCIsXG5cdFx0c3ByaXRlIDogW3t4OjAseTo0MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDEwIDoge1xuXHRcdG5hbWUgOiBcImNoYWlyXCIsXG5cdFx0c3ByaXRlIDogW3t4OjMyMCx5OjAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxMSA6IHtcblx0XHRuYW1lIDogXCJUcmVlIFBsYW50XCIsXG5cdFx0c3ByaXRlIDogW3t4OjQwLHk6MTIwLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTIgOiB7XG5cdFx0bmFtZSA6IFwiZHJ1bVwiLFxuXHRcdHNwcml0ZSA6IFt7eDowLHk6MjQwLHc6ODAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTMgOiB7XG5cdFx0bmFtZSA6IFwiaW5zdHJ1bWVudHNcIixcblx0XHRzcHJpdGUgOiBbe3g6ODAseToyNDAsdzoxMjAsaDo4MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTQgOiB7XG5cdFx0bmFtZSA6IFwiQm9va1NoZWxmXCIsXG5cdFx0c3ByaXRlIDogW3t4OjIwMCx5OjI0MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDE1IDoge1xuXHRcdG5hbWUgOiBcInNheG9waG9uZVwiLFxuXHRcdHNwcml0ZSA6IFt7eDoyNDAseToyNDAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxNiA6IHtcblx0XHRuYW1lIDogXCJSaWdodCBGYWNpbmcgQ2hhaXJcIixcblx0XHRzcHJpdGUgOiBbe3g6MjAwLHk6MjgwLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG59O1xuXG5cbi8vIOeJqeWTgVxubGV0IGl0ZW1UeXBlcyA9IHtcbiAgICAxIDoge1xuXHRcdG5hbWUgOiBcImNvY29udXRcIixcblx0XHRtYXhTdGFjayA6IDUsXG5cdFx0c3ByaXRlIDogW3t4OjI0MCx5OjAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF1cbiAgICB9LFxuICAgIDIgOiB7XG5cdFx0bmFtZSA6IFwic3RyYXdiZXJyeVwiLFxuXHRcdG1heFN0YWNrIDogNSxcblx0XHRzcHJpdGUgOiBbe3g6MjgwLHk6MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXVxuXHR9XG59O1xuXG5mdW5jdGlvbiBTdGFjayhpZCwgcXR5KVxue1xuXHR0aGlzLnR5cGUgPSBpZDtcblx0dGhpcy5xdHkgPSBxdHk7XG59XG5cbmZ1bmN0aW9uIEludmVudG9yeShzKVxue1xuXHR0aGlzLnNwYWNlc1x0XHQ9IHM7XG5cdHRoaXMuc3RhY2tzXHRcdD0gW107XG59XG5cbkludmVudG9yeS5wcm90b3R5cGUuYWRkSXRlbXMgPSBmdW5jdGlvbihpZCwgcXR5KVxue1xuXHRmb3IobGV0IGkgPSAwOyBpIDwgdGhpcy5zcGFjZXM7IGkrKylcblx0eyBcblx0XHRpZih0aGlzLnN0YWNrcy5sZW5ndGggPD0gaSlcblx0XHR7XG5cdFx0XHRsZXQgbWF4SGVyZSA9IChxdHkgPiBpdGVtVHlwZXNbaWRdLm1heFN0YWNrID9cblx0XHRcdFx0aXRlbVR5cGVzW2lkXS5tYXhTdGFjayA6IHF0eSk7XG5cdFx0XHRcdHRoaXMuc3RhY2tzLnB1c2gobmV3IFN0YWNrKGlkLCBtYXhIZXJlKSk7XG5cdFx0XHRcblx0XHRcdHF0eS09IG1heEhlcmU7XG5cdFx0fVxuXHRcdGVsc2UgaWYodGhpcy5zdGFja3NbaV0udHlwZSA9PSBpZCAmJlxuXHRcdFx0dGhpcy5zdGFja3NbaV0ucXR5IDwgaXRlbVR5cGVzW2lkXS5tYXhTdGFjaylcblx0XHR7XG5cdFx0XHRsZXQgbWF4SGVyZSA9IChpdGVtVHlwZXNbaWRdLm1heFN0YWNrIC0gdGhpcy5zdGFja3NbaV0ucXR5KTtcblx0XHRcdGlmKG1heEhlcmUgPiBxdHkpIHsgbWF4SGVyZSA9IHF0eTsgfVxuXHRcdFx0XG5cdFx0XHR0aGlzLnN0YWNrc1tpXS5xdHkrPSBtYXhIZXJlO1xuXHRcdFx0cXR5LT0gbWF4SGVyZTtcblx0XHR9XG5cdFx0aWYocXR5PT0wKSB7IHJldHVybiAwOyB9XG5cdH1cblx0cmV0dXJuIHF0eTtcbn07XG5cbmZ1bmN0aW9uIFBsYWNlZEl0ZW1TdGFjayhpZCwgcXR5KVxue1xuXHR0aGlzLnR5cGUgPSBpZDtcblx0dGhpcy5xdHkgPSBxdHk7XG5cdHRoaXMueCA9IDA7XG5cdHRoaXMueSA9IDA7XG59XG5cblBsYWNlZEl0ZW1TdGFjay5wcm90b3R5cGUucGxhY2VBdCA9IGZ1bmN0aW9uKG54LCBueSlcbntcblx0aWYobWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy54LCB0aGlzLnkpXS5pdGVtU3RhY2s9PXRoaXMpXG5cdHtcblx0XHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLngsIHRoaXMueSldLml0ZW1TdGFjayA9IG51bGw7XG5cdH1cblxuXHR0aGlzLnggPSBueDtcblx0dGhpcy55ID0gbnk7XG5cdFxuXHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleChueCwgbnkpXS5pdGVtU3RhY2sgPSB0aGlzO1xufTtcblxuXG5cblxubGV0IGdhbWV0aWxlID0gbnVsbCwgZ2FtZXRpbGVVUkwgPSBcInNyYy9pbWFnZXMvdGlsZXNldGVzdHQucG5nXCIsIGFydExvYWRlZCA9IGZhbHNlO1xuXG5cblxuLy8g5Yib5bu65LiA5Liq6KeS6ImyIChtaXVtaXUpXG5sZXQgbWl1bWl1ID0gbmV3IE1pdU1pdSgpO1xuLy8g5Yqg5pu05aSa6KeS6Imy4qyHXG5mdW5jdGlvbiBNaXVNaXUoKSB7XG4gICAgdGhpcy50aWxlRnJvbVx0PSBbMSwxXTtcbiAgICAvLyBtaXVtaXXnmoTkvY3nva5cbiAgICB0aGlzLnRpbGVUb1x0XHQ9IFsxNSwxNl07XG4gICAgLy8gdGltZSBpbiBtaWxsc2Vjb25kc1xuICAgIHRoaXMudGltZU1vdmVkXHQ9IDA7XG4gICAgdGhpcy5kZWxheU1vdmVcdD0gNzAwO1xuXHR0aGlzLmRpbWVuc2lvbnNcdD0gWzQwLDQwXTtcbiAgICB0aGlzLnBvc2l0aW9uXHQ9IFs0NSw0NV07XG4gICAgXG4gICAgdGhpcy5kaXJlY3Rpb25cdD0gZGlyZWN0aW9ucy51cDtcblx0dGhpcy5zcHJpdGVzID0ge307XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLnVwXVx0PSBbe3g6MCx5OjEyMCx3OjMwLGg6MzB9XTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMucmlnaHRdID0gW3t4OjAseToxNTAsdzozMCxoOjMwfV07XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLmRvd25dID0gW3t4OjAseToxODAsdzozMCxoOjMwfV07XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLmxlZnRdID0gW3t4OjAseToyMTAsdzozMCxoOjMwfV07XG5cdHRoaXMuaW52ZW50b3J5ID0gbmV3IEludmVudG9yeSgyKTtcblxufVxuXG5cbi8vIOaKiuinkuiJsuaUvuWcqOWcsOegluS4ilxuTWl1TWl1LnByb3RvdHlwZS5sb2NhdGlvbiA9IGZ1bmN0aW9uKHgsIHkpIHtcblx0dGhpcy50aWxlRnJvbVx0PSBbeCx5XTtcbiAgICB0aGlzLnRpbGVUb1x0XHQ9IFt4LHldO1xuICAgIC8vIHggYW5kIHkgcG9zaXRpb24gb2YgdGhlIHRpbGUuIHVwZGF0ZSB0aGUgdGlsZUZyb20gYW5kIHRpbGVUbyBwcm9wZXJ0aWVzIHRvIHRoZSBuZXcgdGlsZSBjb29yZGluYXRlc1xuICAgIC8vIGNhbGN1bGF0ZXMgdGhlIHBpeGVsIHBvc2l0aW9uIG9mIHRoZSBjaGFyYWN5ZXIgdXNlIGJlbG93XG5cdHRoaXMucG9zaXRpb25cdD0gWygoIHRpbGVXaWR0aCAqIHggKSsoICh0aWxlV2lkdGggLSB0aGlzLmRpbWVuc2lvbnNbMF0pIC8gMiApKSxcblx0XHQoKCB0aWxlSGVpZ2h0ICogeSApKyggKHRpbGVIZWlnaHQgLSB0aGlzLmRpbWVuc2lvbnNbMV0pIC8gMiApKV07XG59O1xuXG4vLyDmoLnmja7mr4/kuKrluKfmlbDmib7liLDop5LoibLkvY3nva5cbk1pdU1pdS5wcm90b3R5cGUucHJvY2Vzc01vdmVtZW50ID0gZnVuY3Rpb24odCkge1xuICAgIC8vIGlmIGNoYXIgdGlsZVRvID09IHRpbGVGcm9tIGNoYXIgaXMgbm90IG1vdmluZywgc28gcmV0dXJuIGZhbHNlXG5cdGlmKCB0aGlzLnRpbGVGcm9tWzBdID09IHRoaXMudGlsZVRvWzBdICYmIHRoaXMudGlsZUZyb21bMV0gPT0gdGhpcy50aWxlVG9bMV0pIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgLy8gaWYgdGhlIGFtb3VudCBvZiB0aW1lIHBhc3NlZCBzaW5jZSBjaGFyIGJlZ2FuIGl0cyBjdXJyZW50IG1vdmUgPj0gdGhlIHRpbWUgZm9yIGNoYXIgdG8gbW92ZSAxIHRpbGUuIHdlIHNldCBwb3NpdGlvbiB1c2luZyBsb2NhdGlvbiBmdW5jdGlvblxuICAgIC8vIGFrYTogaWYgY2hhciBzdGlsbCBtb3Zpbmdcblx0aWYoKHQgLSB0aGlzLnRpbWVNb3ZlZCkgPj0gdGhpcy5kZWxheU1vdmUpIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbih0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pO1xuICAgICAgICBpZihtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pXS5ldmVudEVudGVyICE9IG51bGwpIHtcblx0XHRcdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSldLmV2ZW50RW50ZXIodGhpcyk7XG4gICAgICAgIH1cblx0fSBlbHNlIHtcbiAgICAgICAgLy8gY3VycmVudCBwb3NpdGlvbiBvbiBjYW52YXNcblx0XHR0aGlzLnBvc2l0aW9uWzBdID0gKHRoaXMudGlsZUZyb21bMF0gKiB0aWxlV2lkdGgpICsgKCh0aWxlV2lkdGggLSB0aGlzLmRpbWVuc2lvbnNbMF0pIC8gMik7XG5cdFx0dGhpcy5wb3NpdGlvblsxXSA9ICh0aGlzLnRpbGVGcm9tWzFdICogdGlsZUhlaWdodCkgKyAoKHRpbGVIZWlnaHQgLSB0aGlzLmRpbWVuc2lvbnNbMV0pIC8gMik7XG5cbiAgICAgICAgLy8gaWYgY2hhciBpcyBtb3Zpbmcgb24geCBjb29yZGluYXRlLCBjYWxjdWxhdGUgcGl4ZWxzXG5cdFx0aWYodGhpcy50aWxlVG9bMF0gIT0gdGhpcy50aWxlRnJvbVswXSkge1xuICAgICAgICAgICAgLy8gZGlmZmVyZW5jZSA9IGRpc3RhbmNlIG1vdmVkXG4gICAgICAgICAgICAvLyDliqDlh4/np7vliqjnmoTlnLDnoJbliLDop5LoibLnmoTkvY3lrZBcblx0XHRcdGxldCBkaWZmZXJlbmNlID0gKHRpbGVXaWR0aCAvIHRoaXMuZGVsYXlNb3ZlKSAqICh0IC0gdGhpcy50aW1lTW92ZWQpO1xuXHRcdFx0dGhpcy5wb3NpdGlvblswXSs9ICh0aGlzLnRpbGVUb1swXSA8IHRoaXMudGlsZUZyb21bMF0gPyAwIC0gZGlmZmVyZW5jZSA6IGRpZmZlcmVuY2UpO1xuXHRcdH1cblx0ICAgIGlmKHRoaXMudGlsZVRvWzFdICE9IHRoaXMudGlsZUZyb21bMV0pIHtcblx0XHRcdGxldCBkaWZmZXJlbmNlID0gKHRpbGVIZWlnaHQgLyB0aGlzLmRlbGF5TW92ZSkgKiAodC10aGlzLnRpbWVNb3ZlZCk7XG5cdFx0XHR0aGlzLnBvc2l0aW9uWzFdKz0gKHRoaXMudGlsZVRvWzFdPHRoaXMudGlsZUZyb21bMV0gPyAwIC0gZGlmZmVyZW5jZSA6IGRpZmZlcmVuY2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJvdW5kIHggJiB5IHRvIHdob2xlIG51bWJlciDpnIDopoHmlbTmlbBcblx0XHR0aGlzLnBvc2l0aW9uWzBdID0gTWF0aC5yb3VuZCh0aGlzLnBvc2l0aW9uWzBdKTtcblx0XHR0aGlzLnBvc2l0aW9uWzFdID0gTWF0aC5yb3VuZCh0aGlzLnBvc2l0aW9uWzFdKTtcbiAgICB9XG4gICAgLy8gdHJ1ZSA9IGNoYXIgaXMgY3VycmVudGx5IG1vdmluZ1xuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuXG4vLyBpZiBjaGFyIGNhbiBtb3ZlIGluIGEgc3BlY2lmaWMgZGlyZWNcbk1pdU1pdS5wcm90b3R5cGUucGxhY2VzQ2FuR28gPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgLy8gaWYgeCBhbmQgeSBpcyBpbiBtYXAgYm91bmRcbiAgICBpZih4IDwgMCB8fCB4ID49IG1hcFdpZHRoIHx8IHkgPCAwIHx8IHkgPj0gbWFwSGVpZ2h0KSB7IFxuXHRcdHJldHVybiBmYWxzZTsgXG5cdH1cbiAgICAvLyBpZiB0aGUgdGlsZSBpcyBwYXRoIHRpbGUgKG9ubHkgbW92ZSBpZiBpdHMgYSBwYXRoKVxuICAgICAgICBpZih0aWxlVHlwZXNbZ2FtZU1hcFt0b0luZGV4KHgseSldXS5mbG9vciAhPSBmbG9vclR5cGVzLnBhdGgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIGlmKG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLm9iamVjdCAhPSBudWxsKSB7XG5cdFx0XHRsZXQgb2JqZWN0ID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0ub2JqZWN0O1xuXHRcdFx0aWYob2JqZWN0VHlwZXNbb2JqZWN0LnR5cGVdLmNvbGxpc2lvbiA9PSBjb2xsaXNpb25zLnNvbGlkKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuTWl1TWl1LnByb3RvdHlwZS5jYW5Hb1VwID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLnBsYWNlc0NhbkdvKHRoaXMudGlsZUZyb21bMF0sIHRoaXMudGlsZUZyb21bMV0gLSAxKTsgfTtcbk1pdU1pdS5wcm90b3R5cGUuY2FuR29Eb3duID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLnBsYWNlc0NhbkdvKHRoaXMudGlsZUZyb21bMF0sIHRoaXMudGlsZUZyb21bMV0gKyAxKTsgfTtcbk1pdU1pdS5wcm90b3R5cGUuY2FuR29MZWZ0ID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLnBsYWNlc0NhbkdvKHRoaXMudGlsZUZyb21bMF0tMSwgdGhpcy50aWxlRnJvbVsxXSk7IH07XG5NaXVNaXUucHJvdG90eXBlLmNhbkdvUmlnaHQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucGxhY2VzQ2FuR28odGhpcy50aWxlRnJvbVswXSsxLCB0aGlzLnRpbGVGcm9tWzFdKTsgfTtcblxuTWl1TWl1LnByb3RvdHlwZS5nb0xlZnQgPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzBdLT0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMubGVmdDsgfTtcbk1pdU1pdS5wcm90b3R5cGUuZ29SaWdodCA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMF0rPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5yaWdodDsgfTtcbk1pdU1pdS5wcm90b3R5cGUuZ29VcCA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMV0tPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy51cDsgfTtcbk1pdU1pdS5wcm90b3R5cGUuZ29Eb3duID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1sxXSs9IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLmRvd247IH07XG5cbi8vIHBpY2sgdXAgaXRlbVxuTWl1TWl1LnByb3RvdHlwZS5waWNrVXAgPSBmdW5jdGlvbigpXG57XG5cdGlmKHRoaXMudGlsZVRvWzBdIT10aGlzLnRpbGVGcm9tWzBdIHx8XG5cdFx0dGhpcy50aWxlVG9bMV0hPXRoaXMudGlsZUZyb21bMV0pXG5cdHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblx0XG5cdGxldCBpcyA9IG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMudGlsZUZyb21bMF0sXG5cdFx0XHRcdHRoaXMudGlsZUZyb21bMV0pXS5pdGVtU3RhY2s7XG5cdFxuXHRpZihpcyE9bnVsbClcblx0e1xuXHRcdGxldCByZW1haW5zID0gdGhpcy5pbnZlbnRvcnkuYWRkSXRlbXMoaXMudHlwZSwgaXMucXR5KTtcblxuXHRcdGlmKHJlbWFpbnMpIHsgaXMucXR5ID0gcmVtYWluczsgfVxuXHRcdGVsc2Vcblx0XHR7XG5cdFx0XHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLnRpbGVGcm9tWzBdLFxuXHRcdFx0XHR0aGlzLnRpbGVGcm9tWzFdKV0uaXRlbVN0YWNrID0gbnVsbDtcblx0XHR9XG5cdH1cblx0XG5cdHJldHVybiB0cnVlO1xufTtcblxuLy8gY3JlYXRlIGEgY2FtZXJhIG9iamVjdFxubGV0IGNhbWVyYSA9IHtcbiAgICBzY3JlZW46IFswLDBdLFxuICAgIC8vIOeUu+mdouW3puS4iuinklxuICAgIHN0YXJ0aW5nUG9pbnQ6IFswLDBdLFxuICAgIC8vIOeUu+mdouWPs+S4i+inklxuICAgIGVuZGluZ1BvaW50OiBbMCwwXSxcbiAgICAvLyDor6/lt65cbiAgICBvZmZzZXQ6IFswLDBdLFxuICAgIC8vIHVwZGF0ZSBmdW5jdGlvbiwgeCB5IGlzIG91ciBjZW50ZXIgYXJlYVxuICAgIHVwZGF0ZTogZnVuY3Rpb24ob2Zmc2V0WCwgb2Zmc2V0WSkge1xuICAgICAgICAvLyBvZmZzZXQ6IGhhbGYgdGhlIGNhbnZhcyB3aWR0aCB8fCBoZWlnaHQgKHJvdW5kIGRvd24gdG8gd2hvbGUgbnVtKVxuXHRcdHRoaXMub2Zmc2V0WzBdID0gTWF0aC5mbG9vcigodGhpcy5zY3JlZW5bMF0vMikgLSBvZmZzZXRYKTtcbiAgICAgICAgdGhpcy5vZmZzZXRbMV0gPSBNYXRoLmZsb29yKCh0aGlzLnNjcmVlblsxXS8yKSAtIG9mZnNldFkpO1xuXG4gICAgICAgIC8vIOWcsOegluWcqOWcsOWbvuS4iueahOS9jee9rlxuICAgICAgICBsZXQgdGlsZSA9IFsgTWF0aC5mbG9vcihvZmZzZXRYIC8gdGlsZVdpZHRoKSwgTWF0aC5mbG9vcihvZmZzZXRZIC8gdGlsZUhlaWdodCkgXTtcbiAgICAgICAgLy8gIOiuoeeul+esrOS4gOS4quWcsOegluS9jee9ruWcqHjnur/kuIrvvJog5pyA5aSn5Zyw56CW5pWw6YePIC0g5bGP5bmV55qE5LiA5Y2KXG4gICAgICAgIC8vICDlpJrlh4/ljrsx6L+Z5qC35Zyw56CW5Y+v5Lulc2hvd+S4gOWNiuWcqOWxj+W5leS4ilxuICAgICAgICB0aGlzLnN0YXJ0aW5nUG9pbnRbMF0gPSB0aWxlWzBdIC0gTWF0aC5jZWlsKCh0aGlzLnNjcmVlblswXS8yKSAvIHRpbGVXaWR0aCkgIC0gMTtcblx0XHR0aGlzLnN0YXJ0aW5nUG9pbnRbMV0gPSB0aWxlWzFdIC0gTWF0aC5jZWlsKCh0aGlzLnNjcmVlblsxXS8yKSAvIHRpbGVIZWlnaHQpICAtIDE7XG5cbiAgICAgICAgLy8g56Gu5L+deOWSjHnpg73lpKfkuo4w6KaB5LmI5Lya5Zyo5Zyw5Zu+5aSWXG4gICAgICAgIGlmKHRoaXMuc3RhcnRpbmdQb2ludFswXSA8PSAtMSkgeyB0aGlzLnN0YXJ0aW5nUG9pbnRbMF0gPSAwOyB9XG5cdFx0aWYodGhpcy5zdGFydGluZ1BvaW50WzFdIDw9IC0xKSB7IHRoaXMuc3RhcnRpbmdQb2ludFsxXSA9IDA7IH1cblxuICAgICAgICB0aGlzLmVuZGluZ1BvaW50WzBdID0gdGlsZVswXSArIDEgKyBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzBdLzIpIC8gdGlsZVdpZHRoKTtcblx0XHR0aGlzLmVuZGluZ1BvaW50WzFdID0gdGlsZVsxXSArIDEgKyBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzFdLzIpIC8gdGlsZUhlaWdodCk7XG5cblx0XHRpZih0aGlzLmVuZGluZ1BvaW50WzBdID49IG1hcFdpZHRoKSB7IHRoaXMuZW5kaW5nUG9pbnRbMF0gPSBtYXBXaWR0aCAtMTsgfVxuXHRcdGlmKHRoaXMuZW5kaW5nUG9pbnRbMV0gPj0gbWFwSGVpZ2h0KSB7IHRoaXMuZW5kaW5nUG9pbnRbMV0gPSBtYXBIZWlnaHQgLSAxOyB9XG4gICAgICAgIH1cbn07XG5cblxuLy8gYnVpbGRpbmdzXG5cbmxldCBtYXBUaWxlRGF0YSA9IG5ldyBUaWxlTWFwKCk7XG5cbmxldCBidWlsZGluZ3NMb2NhdGlvbiA9IFtcblx0eyB4OjExLCB5OjUsIHc6NCwgaDo1LCBkYXRhOiBbXG5cdFx0MTAsIDExLCAxMSwgMTIsXG4gICAgICAgIDEzLCAxNCwgMTQsIDE1LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTgsXG4gICAgICAgIDE2LCAxNywgMTYsIDE4XG5cdF19LFxuXHR7IHg6MTYsIHk6NSwgdzo3LCBoOjUsIGRhdGE6IFtcblx0XHQxMCwgMTEsIDExLCAxMSwgMTEsIDEyLCAxMixcbiAgICAgICAgMTMsIDE1LCAxMywgMTQsIDE0LCAxNSwgMTUsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE5LCAxOSwgMTgsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOSwgMTksIDE4LCAxOCxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTksIDE3LCAxOCwgMThcblx0XX0sXG5cdHsgeDoxNCwgeToxMywgdzo0LCBoOjQsIGRhdGE6IFtcbiAgICAgICAgMTAsIDExLCAxMSwgMTIsXG4gICAgICAgIDEzLCAxNCwgMTQsIDE1LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCxcbiAgICAgICAgMTYsIDE3LCAxNiwgMThcblx0XX1cbl07XG5cbi8vIHN0b3JlcyBpbmZvcm1hdGlvbiBmb3IgZWFjaCBtYXAgdGlsZVxuZnVuY3Rpb24gVGlsZSh0aWxlWCwgdGlsZVksIHRpbGVUeXBlKVxue1xuICAgIC8vIHRpbGVZLCB0aWxlWCA9IHRoZSBwb3NpdGlvbiBvZiB0aGUgdGlsZSBvbiB0aGUgbWFwXG5cdHRoaXMueFx0XHRcdD0gdGlsZVg7XG5cdHRoaXMueVx0XHRcdD0gdGlsZVk7XG5cdHRoaXMudHlwZVx0XHQ9IHRpbGVUeXBlO1xuXHR0aGlzLmJ1aWxkaW5nXHRcdD0gbnVsbDtcbiAgICB0aGlzLmJ1aWxkaW5nVHlwZVx0PSAwO1xuICAgIC8vICBwb2ludGVyIHRvIGEgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIGEgTWl1TWl1IGhhcyBjb21wbGV0ZWQgbW92aW5nIG9uIHRvIHRoaXMgdGlsZVxuICAgIHRoaXMuZXZlbnRFbnRlclx0PSBudWxsO1xuXHR0aGlzLm9iamVjdFx0XHQ9IG51bGw7XG5cdHRoaXMuaXRlbVN0YWNrXHQ9IG51bGw7XG5cbn1cblxuLy8g5YKo5a2Y566h55CG5Zyw5Zu+5pWw5o2uXG5mdW5jdGlvbiBUaWxlTWFwKCkge1xuXHR0aGlzLm1hcFx0PSBbXTtcblx0dGhpcy53XHRcdD0gMDtcbiAgICB0aGlzLmhcdFx0PSAwO1xuXHR0aGlzLmxldmVsc1x0PSA0O1xufVxuXG5UaWxlTWFwLnByb3RvdHlwZS5idWlsZE1hcEZyb21EYXRhID0gZnVuY3Rpb24odGlsZUlkLCB3LCBoKSB7XG5cdHRoaXMud1x0XHQ9IHc7XG4gICAgdGhpcy5oXHRcdD0gaDtcblxuICAgIGlmKHRpbGVJZC5sZW5ndGghPSh3ICogaCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFxuICAgIHRoaXMubWFwLmxlbmd0aFx0PSAwO1xuICAgIFx0Zm9yKGxldCB5ID0gMDsgeSA8IGg7IHkrKykge1xuXHRcdCAgICBmb3IobGV0IHggPSAwOyB4IDwgdzsgeCsrKSB7XG5cdFx0XHR0aGlzLm1hcC5wdXNoKCBuZXcgVGlsZSh4LCB5LCB0aWxlSWRbICh4ICsgKHcgKiB5KSldKSApO1xuXHRcdH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5cblRpbGVNYXAucHJvdG90eXBlLmFkZEJ1aWxkaW5ncyA9IGZ1bmN0aW9uKGJ1aWxkaW5ncykge1xuXHRmb3IobGV0IGkgaW4gYnVpbGRpbmdzKSB7XG4gICAgICAgIGxldCBidWlsZGluZyA9IGJ1aWxkaW5nc1tpXTtcbiAgICAgICAgaWYoYnVpbGRpbmcueCA8IDAgfHwgYnVpbGRpbmcueSA8IDAgfHwgYnVpbGRpbmcueCA+PSB0aGlzLncgfHwgYnVpbGRpbmcueSA+PSB0aGlzLmggfHxcdChidWlsZGluZy54K2J1aWxkaW5nLncpPnRoaXMudyB8fCAoYnVpbGRpbmcueStidWlsZGluZy5oKT50aGlzLmggfHwgYnVpbGRpbmcuZGF0YS5sZW5ndGghPShidWlsZGluZy53KmJ1aWxkaW5nLmgpKSB7XG5cdFx0XHRjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IHkgPSAwOyB5IDwgYnVpbGRpbmcuaDsgeSsrKSB7XG5cdFx0XHRmb3IobGV0IHggPSAwOyB4IDwgYnVpbGRpbmcudzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGVJZHggPSAoKChidWlsZGluZy55ICsgeSkgKiB0aGlzLncpICsgYnVpbGRpbmcueCArIHgpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFwW3RpbGVJZHhdLmJ1aWxkaW5nID0gYnVpbGRpbmc7XG5cdFx0XHRcdHRoaXMubWFwW3RpbGVJZHhdLmJ1aWxkaW5nVHlwZSA9IGJ1aWxkaW5nLmRhdGFbKCAoeSAqIGJ1aWxkaW5nLncpICsgeCldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLy8g54mp5ZOB5pGG5pS+XG5mdW5jdGlvbiBHYW1lT2JqZWN0cyhudCkge1xuXHR0aGlzLnggPSAwO1xuXHR0aGlzLnkgPSAwO1xuXHR0aGlzLnR5cGUgPSBudDtcbn1cblxuR2FtZU9iamVjdHMucHJvdG90eXBlLnBsYWNlQXQgPSBmdW5jdGlvbihueCwgbnkpIHtcblx0aWYobWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy54LCB0aGlzLnkpXS5vYmplY3QgPT0gdGhpcykge1xuXHRcdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMueCwgdGhpcy55KV0ub2JqZWN0ID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy54ID0gbng7XG5cdHRoaXMueSA9IG55O1xuXHRcblx0bWFwVGlsZURhdGEubWFwW3RvSW5kZXgobngsIG55KV0ub2JqZWN0ID0gdGhpcztcbn07XG5cblxuXG4vLyBjb252ZXJ0IHgsIHkgaW50byBpbmRleCBpbiBnYW1lTWFwIGFyclxuZnVuY3Rpb24gdG9JbmRleCh4LCB5KSB7XG5cdHJldHVybih4ICsgKG1hcFdpZHRoICogeSkpO1xufVxuXG5mdW5jdGlvbiBnZXRGcmFtZShzcHJpdGUsIHRpbWVMYXN0LCB0aW1lLCBhbmltYXRpb24pIHtcblx0aWYoIWFuaW1hdGlvbikgeyByZXR1cm4gc3ByaXRlWzBdOyB9XG5cdHRpbWUgPSB0aW1lICUgdGltZUxhc3Q7XG5cblx0Zm9yKHggaW4gc3ByaXRlKSB7XG5cdFx0aWYoc3ByaXRlW3hdLmVuZD49dGltZSkgeyByZXR1cm4gc3ByaXRlW3hdOyB9XG5cdH1cbn1cblxuLy8g55WM6Z2ibG9hZOWujO+8jOW8gOWni2xvb3BcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0Y3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXVtaXVUYWxlXCIpLmdldENvbnRleHQoXCIyZFwiKTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbiAgICBcbiAgICAvLyBhZGQgZXZlbnRMaXN0ZW5lcnMgZm9yIHRoZSBrZXlkb3duYSBhbmQga2V5dXBcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZihlLmtleUNvZGUgPj0gMzcgJiYgZS5rZXlDb2RlIDw9NDAgKSB7IGhlbGRLZXlzW2Uua2V5Q29kZV0gPSB0cnVlOyB9XG5cdFx0aWYoZS5rZXlDb2RlPT0zMikgeyBoZWxkS2V5c1tlLmtleUNvZGVdID0gdHJ1ZTsgfVxuXHR9KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoZS5rZXlDb2RlID49IDM3ICYmIGUua2V5Q29kZSA8PSA0MCkgeyBoZWxkS2V5c1tlLmtleUNvZGVdID0gZmFsc2U7IH1cblx0XHRpZihlLmtleUNvZGU9PTMyKSB7IGhlbGRLZXlzW2Uua2V5Q29kZV0gPSBmYWxzZTsgfVxuXHR9KTtcblxuICAgIC8vIGNhbnZhc+WwuuWvuCDkv53lrZjliLAg55u45py6XG4gICAgY2FtZXJhLnNjcmVlbiA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pdW1pdVRhbGVcIikud2lkdGgsXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWl1bWl1VGFsZVwiKS5oZWlnaHRdO1xuICAgICAgICBcbiAgICBnYW1ldGlsZSA9IG5ldyBJbWFnZSgpO1xuXHRnYW1ldGlsZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0Y3R4ID0gbnVsbDtcblx0XHRhbGVydChcIkZhaWxlZCBsb2FkaW5nIGdhbWV0aWxlLlwiKTtcblx0fTtcblx0Z2FtZXRpbGUub25sb2FkID0gZnVuY3Rpb24oKSB7IFxuXHRcdGFydExvYWRlZCA9IHRydWU7IFxuXHR9O1xuICAgIGdhbWV0aWxlLnNyYyA9IGdhbWV0aWxlVVJMO1xuICAgIFxuICAgIG1hcFRpbGVEYXRhLmJ1aWxkTWFwRnJvbURhdGEoZ2FtZU1hcCwgbWFwV2lkdGgsIG1hcEhlaWdodCk7XG5cdG1hcFRpbGVEYXRhLmFkZEJ1aWxkaW5ncyhidWlsZGluZ3NMb2NhdGlvbik7XG5cdG1hcFRpbGVEYXRhLm1hcFsoKDIgKiBtYXBXaWR0aCkgKyAyKV0uZXZlbnRFbnRlciA9IGZ1bmN0aW9uKCkgeyBcblx0XHRjb25zb2xlLmxvZyhcIkVudGVyZWQgdGlsZSAyLDJcIik7IFxuXHR9O1xuXHRcblx0Ly8g54mp5ZOB5pGG5pS+5L2N572uXG5cdGxldCBmZW5jZTEgPSBuZXcgR2FtZU9iamVjdHMoMik7IGZlbmNlMS5wbGFjZUF0KDE1LCA2KTtcbiAgICBcbiAgICBsZXQgZmxvd2VyMSA9IG5ldyBHYW1lT2JqZWN0cygxKTsgZmxvd2VyMS5wbGFjZUF0KDExLCAxMCk7XG4gICAgbGV0IGZsb3dlcjIgPSBuZXcgR2FtZU9iamVjdHMoMSk7IGZsb3dlcjIucGxhY2VBdCgxMywgMTApO1xuICAgIGxldCBmbG93ZXIzID0gbmV3IEdhbWVPYmplY3RzKDEpOyBmbG93ZXIzLnBsYWNlQXQoMTQsIDEwKTtcbiAgICBcblx0bGV0IHRyZWUxID0gbmV3IEdhbWVPYmplY3RzKDMpOyB0cmVlMS5wbGFjZUF0KDEwLCAxMSk7XG5cdGxldCB0cmVlMiA9IG5ldyBHYW1lT2JqZWN0cygzKTsgdHJlZTIucGxhY2VBdCgxNSwgMTEpO1xuXHRsZXQgdHJlZTMgPSBuZXcgR2FtZU9iamVjdHMoMyk7IHRyZWUzLnBsYWNlQXQoMTMsIDExKTtcdFxuICAgIGxldCB0cmVlNCA9IG5ldyBHYW1lT2JqZWN0cygzKTsgdHJlZTQucGxhY2VBdCgxOCwgMTEpO1xuICBcbiAgICBsZXQgbWFzaHJvb20xID0gbmV3IEdhbWVPYmplY3RzKDQpOyBtYXNocm9vbTEucGxhY2VBdCg4LDkpO1xuICAgIGxldCBtYXNocm9vbTIgPSBuZXcgR2FtZU9iamVjdHMoNCk7IG1hc2hyb29tMi5wbGFjZUF0KDE1LDcpO1xuXG5cdGxldCBwaWdTaG9wMSA9IG5ldyBHYW1lT2JqZWN0cyg1KTsgcGlnU2hvcDEucGxhY2VBdCg5LCA5KTtcblxuXG4gICAgbGV0IGRvbnV0cyA9IG5ldyBHYW1lT2JqZWN0cyg2KTsgZG9udXRzLnBsYWNlQXQoMTEsIDUpO1xuXG4gICAgbGV0IGNvb2tpbmcgPSBuZXcgR2FtZU9iamVjdHMoNyk7IGNvb2tpbmcucGxhY2VBdCgxMywgNSk7XG5cbiAgICBsZXQgY2FycGV0ID0gbmV3IEdhbWVPYmplY3RzKDgpOyBjYXJwZXQucGxhY2VBdCgxMyw3KTtcblxuICAgIGxldCBkZXNrID0gbmV3IEdhbWVPYmplY3RzKDkpOyBkZXNrLnBsYWNlQXQoMTQsOCk7XG5cbiAgICBsZXQgY2hhaXIgPSBuZXcgR2FtZU9iamVjdHMoMTApOyBjaGFpci5wbGFjZUF0KDE0LDcpO1xuICAgIGxldCBjaGFpcjIgPSBuZXcgR2FtZU9iamVjdHMoMTYpOyBjaGFpcjIucGxhY2VBdCgxOCw3KTtcblxuICAgIGxldCB0cmVlUGxhbnQgPSBuZXcgR2FtZU9iamVjdHMoMTEpOyB0cmVlUGxhbnQucGxhY2VBdCgxMSw4KTtcblxuICAgIGxldCBkcnVtID0gbmV3IEdhbWVPYmplY3RzKDEyKTsgZHJ1bS5wbGFjZUF0KDIxLDYpO1xuXG4gICAgbGV0IGluc3RydW1lbnRzID0gbmV3IEdhbWVPYmplY3RzKDEzKTsgaW5zdHJ1bWVudHMucGxhY2VBdCgxOCw1KTtcblxuICAgIGxldCBib29rU2hlbGYxID0gbmV3IEdhbWVPYmplY3RzKDE0KTsgYm9va1NoZWxmMS5wbGFjZUF0KDE2LDYpO1xuICAgIGxldCBib29rU2hlbGYyID0gbmV3IEdhbWVPYmplY3RzKDE0KTsgYm9va1NoZWxmMi5wbGFjZUF0KDE2LDcpO1xuXG5cdGxldCBzYXhvcGhvbmUgPSBuZXcgR2FtZU9iamVjdHMoMTUpOyBzYXhvcGhvbmUucGxhY2VBdCgxOSw3KTtcblx0XG5cdFxuXHRsZXQgY29jb251dDEgPSBuZXcgUGxhY2VkSXRlbVN0YWNrKDEsIDEpOyBjb2NvbnV0MS5wbGFjZUF0KDEwLCAyMCk7XG5cdGxldCBjb2NvbnV0MiA9IG5ldyBQbGFjZWRJdGVtU3RhY2soMSwgMSk7IGNvY29udXQyLnBsYWNlQXQoMTUsIDIxKTtcblx0bGV0IGNvY29udXQzID0gbmV3IFBsYWNlZEl0ZW1TdGFjaygxLCAxKTsgY29jb251dDMucGxhY2VBdCgxMywgMjApO1xuXG5cdGxldCBzdHJhd2JlcnJ5MSA9IG5ldyBQbGFjZWRJdGVtU3RhY2soMiwgMSk7IHN0cmF3YmVycnkxLnBsYWNlQXQoMTgsIDIxKTtcblx0XG59O1xuXG5cblxuXG4vLyBtYWluIGZ1bmN0aW9uXG5mdW5jdGlvbiBkcmF3R2FtZSgpIHtcbiAgICBpZiAoY3R4ID09IG51bGwpIHsgXG5cdFx0cmV0dXJuOyBcblx0fVxuICAgIGlmICghYXJ0TG9hZGVkKSB7IFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7IHJldHVybjsgXG5cdH1cblxuXHRsZXQgY3VycmVudEZyYW1lVGltZSA9IERhdGUubm93KCk7XG4gICAgLy8gZnJhbWVjb3VudCBcblx0bGV0IHNlYyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuXHRpZihzZWMgIT0gY3VycmVudFNlY29uZCl7XG5cdFx0Y3VycmVudFNlY29uZCA9IHNlYztcblx0XHRmcmFtZXNMYXN0U2Vjb25kID0gZnJhbWVDb3VudDtcblx0XHRmcmFtZUNvdW50ID0gMTtcblx0fSBlbHNlIHsgXG4gICAgICAgIGZyYW1lQ291bnQrKzsgXG4gICAgfVxuXG4gICAgLy8gbWl1bWl1IG1vdmVtZW50XG5cdGlmKCFtaXVtaXUucHJvY2Vzc01vdmVtZW50KGN1cnJlbnRGcmFtZVRpbWUpKSB7XG5cdFx0aWYoaGVsZEtleXNbMzhdICYmIG1pdW1pdS5jYW5Hb1VwKCkpeyBcbiAgICAgICAgICAgIG1pdW1pdS5nb1VwKGN1cnJlbnRGcmFtZVRpbWUpOyBcbiAgICAgICAgfSBlbHNlIGlmIChoZWxkS2V5c1s0MF0gJiYgbWl1bWl1LmNhbkdvRG93bigpKSB7IFxuICAgICAgICAgICAgbWl1bWl1LmdvRG93bihjdXJyZW50RnJhbWVUaW1lKTsgXG4gICAgICAgIH0gZWxzZSBpZihoZWxkS2V5c1szN10gJiYgbWl1bWl1LmNhbkdvTGVmdCgpKSB7IFxuICAgICAgICAgICAgbWl1bWl1LmdvTGVmdChjdXJyZW50RnJhbWVUaW1lKTsgXG4gICAgICAgIH0gZWxzZSBpZihoZWxkS2V5c1szOV0gJiYgbWl1bWl1LmNhbkdvUmlnaHQoKSkgeyBcbiAgICAgICAgICAgIG1pdW1pdS5nb1JpZ2h0KGN1cnJlbnRGcmFtZVRpbWUpOyBcbiAgICAgICAgfSBlbHNlIGlmKGhlbGRLZXlzWzMyXSkge1xuXHRcdFx0bWl1bWl1LnBpY2tVcCgpO1xuXHRcdH1cbiAgICB9XG5cbiAgICAvLyBjYW1lcmHot5/nnYBtaXVtaXXotbBcbiAgICAgICAgY2FtZXJhLnVwZGF0ZShtaXVtaXUucG9zaXRpb25bMF0gKyAobWl1bWl1LmRpbWVuc2lvbnNbMF0gLyAyKSxcbiAgICAgICAgICAgIG1pdW1pdS5wb3NpdGlvblsxXSArIChtaXVtaXUuZGltZW5zaW9uc1sxXSAvIDIpKTtcblxuXHQgICAgbGV0IG1pdW1pdUJ1aWxkaW5nMSA9IG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KFxuXHRcdG1pdW1pdS50aWxlRnJvbVswXSwgbWl1bWl1LnRpbGVGcm9tWzFdKV0uYnVpbGRpbmc7XG5cdCAgICBsZXQgbWl1bWl1QnVpbGRpbmcyID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoXG5cdFx0bWl1bWl1LnRpbGVUb1swXSwgbWl1bWl1LnRpbGVUb1sxXSldLmJ1aWxkaW5nO1xuXG4gICAgICAgIC8vIOa4hemZpGxhc3QgZnJhbWVcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FtZXJhLnNjcmVlblswXSwgY2FtZXJhLnNjcmVlblsxXSk7XG4gICAgXG5cbiAgICBmb3IobGV0IHogPSAwOyB6IDwgbWFwVGlsZURhdGEubGV2ZWxzOyB6KyspIHtcblx0XHRmb3IobGV0IHkgPSBjYW1lcmEuc3RhcnRpbmdQb2ludFsxXTsgeSA8PSBjYW1lcmEuZW5kaW5nUG9pbnRbMV07ICsreSkge1xuXHRcdCAgICBmb3IobGV0IHggPSBjYW1lcmEuc3RhcnRpbmdQb2ludFswXTsgeCA8PSBjYW1lcmEuZW5kaW5nUG9pbnRbMF07ICsreCkge1xuICAgICAgICAgICAgICAgIGlmKHo9PTApIHtcblx0XHRcdFx0XHRsZXQgdGlsZSA9IHRpbGVUeXBlc1ttYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS50eXBlXTtcblxuXHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsIFxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZS5zcHJpdGVbMF0ueCwgXG5cdFx0XHRcdFx0XHRcdFx0XHR0aWxlLnNwcml0ZVswXS55LCBcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGUuc3ByaXRlWzBdLncsIFxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZS5zcHJpdGVbMF0uaCxcblx0XHRcdFx0XHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCksIFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArICh5ICogdGlsZUhlaWdodCksIFxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZVdpZHRoLCBcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGVIZWlnaHRcblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYoej09MSlcblx0XHRcdHtcblx0XHRcdFx0bGV0IGlzID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uaXRlbVN0YWNrO1xuXHRcdFx0XHRpZihpcyE9bnVsbClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCBvYmplY3RTcHJpdGUgPSBpdGVtVHlwZXNbaXMudHlwZV0uc3ByaXRlO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsXG5cdFx0XHRcdFx0XHRvYmplY3RTcHJpdGVbMF0ueCwgb2JqZWN0U3ByaXRlWzBdLnksXG5cdFx0XHRcdFx0XHRvYmplY3RTcHJpdGVbMF0udywgb2JqZWN0U3ByaXRlWzBdLmgsXG5cdFx0XHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgKHgqdGlsZVdpZHRoKSArIGl0ZW1UeXBlc1tpcy50eXBlXS5vZmZzZXRbMF0sXG5cdFx0XHRcdFx0XHRjYW1lcmEub2Zmc2V0WzFdICsgKHkqdGlsZUhlaWdodCkgKyBpdGVtVHlwZXNbaXMudHlwZV0ub2Zmc2V0WzFdLFxuXHRcdFx0XHRcdFx0b2JqZWN0U3ByaXRlWzBdLncsIG9iamVjdFNwcml0ZVswXS5oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XHRsZXQgb2JqZWN0ID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0ub2JqZWN0O1xuXHRcdFx0XHRpZihvYmplY3QgIT0gbnVsbCAmJiBvYmplY3RUeXBlc1tvYmplY3QudHlwZV0uekluZGV4ID09IHopIHtcblx0XHRcdFx0XHRsZXQgb2JqZWN0VHlwZSA9IG9iamVjdFR5cGVzW29iamVjdC50eXBlXTtcblx0XHRcdFx0IFxuXHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsXG5cdFx0XHRcdFx0XHRcdFx0b2JqZWN0VHlwZS5zcHJpdGVbMF0ueCwgXG5cdFx0XHRcdFx0XHRcdFx0b2JqZWN0VHlwZS5zcHJpdGVbMF0ueSxcblx0XHRcdFx0XHRcdFx0XHRvYmplY3RUeXBlLnNwcml0ZVswXS53LCBcblx0XHRcdFx0XHRcdFx0XHRvYmplY3RUeXBlLnNwcml0ZVswXS5oLFxuXHRcdFx0XHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCkgKyBvYmplY3RUeXBlLm9mZnNldFswXSxcblx0XHRcdFx0XHRcdFx0XHRjYW1lcmEub2Zmc2V0WzFdICsgKHkgKiB0aWxlSGVpZ2h0KSArIG9iamVjdFR5cGUub2Zmc2V0WzFdLFxuXHRcdFx0XHRcdFx0XHRcdG9iamVjdFR5cGUuc3ByaXRlWzBdLncsIFxuXHRcdFx0XHRcdFx0XHRcdG9iamVjdFR5cGUuc3ByaXRlWzBdLmhcblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cbiAgICAgICAgICAgICAgIGlmKHogPT0gMiAmJiBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5idWlsZGluZ1R5cGUgIT0gMCAmJiBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5idWlsZGluZyAhPSBtaXVtaXVCdWlsZGluZzEgJiYgbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmcgIT0gbWl1bWl1QnVpbGRpbmcyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbGUgPSB0aWxlVHlwZXNbbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmdUeXBlXTtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlID0gZ2V0RnJhbWUodGlsZS5zcHJpdGUsIHRpbGUuc3ByaXRldGltZUxhc3QsIHRpbGUuYW5pbWF0aW9uKTtcblx0XHRcdFx0XHRjdHguZHJhd0ltYWdlKGdhbWV0aWxlLCBcblx0XHRcdFx0XHRcdFx0XHRcdHNwcml0ZS54LCBcblx0XHRcdFx0XHRcdFx0XHRcdHNwcml0ZS55LCBcblx0XHRcdFx0XHRcdFx0XHRcdHNwcml0ZS53LCBcblx0XHRcdFx0XHRcdFx0XHRcdHNwcml0ZS5oLCBcblx0XHRcdFx0XHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCksIFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArICh5ICogdGlsZUhlaWdodCksIFxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZVdpZHRoLCBcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGVIZWlnaHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG4gICAgXHR9XG5cblx0XHRpZiAoeiA9PSAxKSB7XG5cdFx0XHRcdGxldCBzcHJpdGUgPSBtaXVtaXUuc3ByaXRlc1ttaXVtaXUuZGlyZWN0aW9uXTtcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZShnYW1ldGlsZSxcblx0XHRcdFx0XHRzcHJpdGVbMF0ueCwgc3ByaXRlWzBdLnksXG5cdFx0XHRcdFx0c3ByaXRlWzBdLncsIHNwcml0ZVswXS5oLFxuXHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyBtaXVtaXUucG9zaXRpb25bMF0sXG5cdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArIG1pdW1pdS5wb3NpdGlvblsxXSxcblx0XHRcdFx0XHRtaXVtaXUuZGltZW5zaW9uc1swXSwgbWl1bWl1LmRpbWVuc2lvbnNbMV1cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdH1cblxuXHRjdHgudGV4dEFsaWduID0gXCJyaWdodFwiO1xuXHRcblx0Zm9yKGxldCBpID0gMDsgaSA8IG1pdW1pdS5pbnZlbnRvcnkuc3BhY2VzOyBpKyspXG5cdHtcblx0XHRjdHguZmlsbFN0eWxlID0gXCIjZmZjMzRhXCI7XG5cdFx0Y3R4LmZpbGxSZWN0KDEwICsgKGkgKiA1MCksIDM1MCxcblx0XHRcdDQwLCA0MCk7XG5cdFx0XG5cdFx0aWYodHlwZW9mIG1pdW1pdS5pbnZlbnRvcnkuc3RhY2tzW2ldIT0ndW5kZWZpbmVkJylcblx0XHR7XG5cdFx0XHRsZXQgaXQgPSBpdGVtVHlwZXNbbWl1bWl1LmludmVudG9yeS5zdGFja3NbaV0udHlwZV07XG5cdFx0XHRsZXQgc3ByaXRlID0gaXQuc3ByaXRlO1xuXHRcdFx0XHRcdFxuXHRcdFx0Y3R4LmRyYXdJbWFnZShnYW1ldGlsZSxcblx0XHRcdFx0c3ByaXRlWzBdLngsIHNwcml0ZVswXS55LFxuXHRcdFx0XHRzcHJpdGVbMF0udywgc3ByaXRlWzBdLmgsXG5cdFx0XHRcdDEwICsgKGkgKiA1MCkgKyBpdC5vZmZzZXRbMF0sXG5cdFx0XHRcdDM1MCArIGl0Lm9mZnNldFsxXSxcblx0XHRcdFx0c3ByaXRlWzBdLncsIHNwcml0ZVswXS5oKTtcblx0XHRcdFxuXHRcdFx0aWYobWl1bWl1LmludmVudG9yeS5zdGFja3NbaV0ucXR5PjEpXG5cdFx0XHR7XG5cdFx0XHRcdGN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcblx0XHRcdFx0Y3R4LmZpbGxUZXh0KFwiXCIgKyBtaXVtaXUuaW52ZW50b3J5LnN0YWNrc1tpXS5xdHksXG5cdFx0XHRcdFx0MTAgKyAoaSo1MCkgKyAzOCxcblx0XHRcdFx0XHQzNTAgKyAzOCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICBcbiAgICAvLyBkcmF3IHRoZSBtaXVtaXVcbiAgICBsZXQgc3ByaXRlID0gbWl1bWl1LnNwcml0ZXNbbWl1bWl1LmRpcmVjdGlvbl07XG5cdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsIFxuXHRcdFx0XHRzcHJpdGVbMF0ueCwgXG5cdFx0XHRcdHNwcml0ZVswXS55LCBcblx0XHRcdFx0c3ByaXRlWzBdLncsIFxuXHRcdFx0XHRzcHJpdGVbMF0uaCwgXG5cdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyBtaXVtaXUucG9zaXRpb25bMF0sIFxuXHRcdFx0XHRjYW1lcmEub2Zmc2V0WzFdICsgbWl1bWl1LnBvc2l0aW9uWzFdLCBcblx0XHRcdFx0bWl1bWl1LmRpbWVuc2lvbnNbMF0sIG1pdW1pdS5kaW1lbnNpb25zWzFdKTtcblxuXHRsYXN0RnJhbWVUaW1lID0gY3VycmVudEZyYW1lVGltZTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=