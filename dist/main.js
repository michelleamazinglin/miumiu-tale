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
  65: false,
  // 38: up
  87: false,
  // 39: right
  68: false,
  // 40: down
  83: false,
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
  },
  17: {
    name: "coconut tree",
    sprite: [{
      x: 440,
      y: 0,
      w: 80,
      h: 80
    }],
    offset: [-20, -20],
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
    if (e.keyCode >= 65 && e.keyCode <= 87) {
      heldKeys[e.keyCode] = true;
    }

    if (e.keyCode == 32) {
      heldKeys[e.keyCode] = true;
    }
  });
  window.addEventListener("keyup", function (e) {
    if (e.keyCode >= 65 && e.keyCode <= 87) {
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
  var coconutTree1 = new GameObjects(17);
  coconutTree1.placeAt(10, 18);
  var coconutTree2 = new GameObjects(17);
  coconutTree2.placeAt(14, 19);
  var coconutTree3 = new GameObjects(17);
  coconutTree3.placeAt(18, 18);
  var coconutTree4 = new GameObjects(17);
  coconutTree4.placeAt(22, 19);
  var coconut1 = new PlacedItemStack(1, 1);
  coconut1.placeAt(10, 20);
  var coconut2 = new PlacedItemStack(1, 1);
  coconut2.placeAt(15, 20);
  var coconut3 = new PlacedItemStack(1, 1);
  coconut3.placeAt(23, 20);
  var coconut4 = new PlacedItemStack(1, 1);
  coconut4.placeAt(14, 21);
  var strawberry1 = new PlacedItemStack(2, 1);
  strawberry1.placeAt(18, 22);
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
    if (heldKeys[87] && miumiu.canGoUp()) {
      miumiu.goUp(currentFrameTime);
    } else if (heldKeys[83] && miumiu.canGoDown()) {
      miumiu.goDown(currentFrameTime);
    } else if (heldKeys[65] && miumiu.canGoLeft()) {
      miumiu.goLeft(currentFrameTime);
    } else if (heldKeys[68] && miumiu.canGoRight()) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJoZWxkS2V5cyIsImRpcmVjdGlvbnMiLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJmbG9vclR5cGVzIiwic29saWQiLCJwYXRoIiwib2NlYW4iLCJ0aWxlVHlwZXMiLCJjb2xvciIsImZsb29yIiwic3ByaXRlIiwieCIsInkiLCJ3IiwiaCIsImNvbGxpc2lvbnMiLCJub25lIiwib2JqZWN0VHlwZXMiLCJuYW1lIiwib2Zmc2V0IiwiY29sbGlzaW9uIiwiekluZGV4IiwiaXRlbVR5cGVzIiwibWF4U3RhY2siLCJTdGFjayIsImlkIiwicXR5IiwidHlwZSIsIkludmVudG9yeSIsInMiLCJzcGFjZXMiLCJzdGFja3MiLCJwcm90b3R5cGUiLCJhZGRJdGVtcyIsImkiLCJsZW5ndGgiLCJtYXhIZXJlIiwicHVzaCIsIlBsYWNlZEl0ZW1TdGFjayIsInBsYWNlQXQiLCJueCIsIm55IiwibWFwVGlsZURhdGEiLCJtYXAiLCJ0b0luZGV4IiwiaXRlbVN0YWNrIiwiZ2FtZXRpbGUiLCJnYW1ldGlsZVVSTCIsImFydExvYWRlZCIsIm1pdW1pdSIsIk1pdU1pdSIsInRpbGVGcm9tIiwidGlsZVRvIiwidGltZU1vdmVkIiwiZGVsYXlNb3ZlIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwiZGlyZWN0aW9uIiwic3ByaXRlcyIsImludmVudG9yeSIsImxvY2F0aW9uIiwicHJvY2Vzc01vdmVtZW50IiwidCIsImV2ZW50RW50ZXIiLCJkaWZmZXJlbmNlIiwiTWF0aCIsInJvdW5kIiwicGxhY2VzQ2FuR28iLCJvYmplY3QiLCJjYW5Hb1VwIiwiY2FuR29Eb3duIiwiY2FuR29MZWZ0IiwiY2FuR29SaWdodCIsImdvTGVmdCIsImdvUmlnaHQiLCJnb1VwIiwiZ29Eb3duIiwicGlja1VwIiwiaXMiLCJyZW1haW5zIiwiY2FtZXJhIiwic2NyZWVuIiwic3RhcnRpbmdQb2ludCIsImVuZGluZ1BvaW50IiwidXBkYXRlIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0aWxlIiwiY2VpbCIsIlRpbGVNYXAiLCJidWlsZGluZ3NMb2NhdGlvbiIsImRhdGEiLCJUaWxlIiwidGlsZVgiLCJ0aWxlWSIsInRpbGVUeXBlIiwiYnVpbGRpbmciLCJidWlsZGluZ1R5cGUiLCJsZXZlbHMiLCJidWlsZE1hcEZyb21EYXRhIiwidGlsZUlkIiwiYWRkQnVpbGRpbmdzIiwiYnVpbGRpbmdzIiwidGlsZUlkeCIsIkdhbWVPYmplY3RzIiwibnQiLCJnZXRGcmFtZSIsInRpbWVMYXN0IiwidGltZSIsImFuaW1hdGlvbiIsImVuZCIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhd0dhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJ3aWR0aCIsImhlaWdodCIsIkltYWdlIiwib25lcnJvciIsImFsZXJ0Iiwic3JjIiwiY29uc29sZSIsImxvZyIsImZlbmNlMSIsImZsb3dlcjEiLCJmbG93ZXIyIiwiZmxvd2VyMyIsInRyZWUxIiwidHJlZTIiLCJ0cmVlMyIsInRyZWU0IiwibWFzaHJvb20xIiwibWFzaHJvb20yIiwicGlnU2hvcDEiLCJkb251dHMiLCJjb29raW5nIiwiY2FycGV0IiwiZGVzayIsImNoYWlyIiwiY2hhaXIyIiwidHJlZVBsYW50IiwiZHJ1bSIsImluc3RydW1lbnRzIiwiYm9va1NoZWxmMSIsImJvb2tTaGVsZjIiLCJzYXhvcGhvbmUiLCJjb2NvbnV0VHJlZTEiLCJjb2NvbnV0VHJlZTIiLCJjb2NvbnV0VHJlZTMiLCJjb2NvbnV0VHJlZTQiLCJjb2NvbnV0MSIsImNvY29udXQyIiwiY29jb251dDMiLCJjb2NvbnV0NCIsInN0cmF3YmVycnkxIiwiY3VycmVudEZyYW1lVGltZSIsIkRhdGUiLCJub3ciLCJzZWMiLCJtaXVtaXVCdWlsZGluZzEiLCJtaXVtaXVCdWlsZGluZzIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInoiLCJkcmF3SW1hZ2UiLCJvYmplY3RTcHJpdGUiLCJvYmplY3RUeXBlIiwic3ByaXRldGltZUxhc3QiLCJ0ZXh0QWxpZ24iLCJpdCIsImZpbGxUZXh0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFHQSxJQUFJQSxHQUFHLEdB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QUFBWUMsT0FBQyxFQUFDLEVBQWQ7QUFBaUJDLE9BQUMsRUFBQztBQUFuQixLQUFEO0FBQWxELEdBaEJPO0FBaUJaLE1BQUs7QUFBRU4sU0FBSyxFQUFDLFNBQVI7QUFBbUJDLFNBQUssRUFBQ04sVUFBVSxDQUFDQyxLQUFwQztBQUEyQ00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEVBQVQ7QUFBWUMsT0FBQyxFQUFDLEVBQWQ7QUFBaUJDLE9BQUMsRUFBQztBQUFuQixLQUFEO0FBQWxELEdBakJPO0FBa0JaLE1BQUs7QUFBRU4sU0FBSyxFQUFDLFNBQVI7QUFBbUJDLFNBQUssRUFBQ04sVUFBVSxDQUFDQyxLQUFwQztBQUEyQ00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQWxELEdBbEJPO0FBbUJaLE1BQUs7QUFBRU4sU0FBSyxFQUFDLFNBQVI7QUFBbUJDLFNBQUssRUFBQ04sVUFBVSxDQUFDQyxLQUFwQztBQUEyQ00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQWxELEdBbkJPO0FBb0JaLE1BQUs7QUFBRU4sU0FBSyxFQUFDLFNBQVI7QUFBbUJDLFNBQUssRUFBQ04sVUFBVSxDQUFDQyxLQUFwQztBQUEyQ00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQWxELEdBcEJPO0FBcUJaLE1BQUs7QUFBRU4sU0FBSyxFQUFDLFNBQVI7QUFBbUJDLFNBQUssRUFBQ04sVUFBVSxDQUFDQyxLQUFwQztBQUEy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QUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBaENPO0FBa0NaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBbENPO0FBbUNaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBbkNPO0FBb0NaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBcENPO0FBcUNaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBckNPO0FBc0NaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBdENPO0FBdUNaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDRSxJQUF0QztBQUE0Q0ssVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQW5ELEdBdkNPO0FBd0NaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBeENPO0FBeUNaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBekNPO0FBMENaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBMUNPO0FBMkNaLE1BQUs7QUFBRU4sU0FBSyxF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QUFNLEVBRlA7QUFHQTtBQUNEO0FBQ0Q7O0FBQ0QvQyxLQUFHLENBQUMyTCxTQUFKLEdBQWdCLE1BQWhCLENBekptQixDQTJKaEI7O0FBQ0EsTUFBSXBLLE1BQU0sR0FBR3VDLE1BQU0sQ0FBQ1MsT0FBUCxDQUFlVCxNQUFNLENBQUNRLFNBQXRCLENBQWI7QUFDSHRFLEtBQUcsQ0FBQ3VMLFNBQUosQ0FBYzVILFFBQWQsRUFDR3BDLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUMsQ0FEYixFQUVHRCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVFLENBRmIsRUFHR0YsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRyxDQUhiLEVBSUdILE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUksQ0FKYixFQUtHa0UsTUFBTSxDQUFDN0QsTUFBUCxDQUFjLENBQWQsSUFBbUI4QixNQUFNLENBQUNPLFFBQVAsQ0FBZ0IsQ0FBaEIsQ0FMdEIsRUFNR3dCLE1BQU0sQ0FBQzdELE1BQVAsQ0FBYyxDQUFkLElBQW1COEIsTUFBTSxDQUFDTyxRQUFQLENBQWdCLENBQWhCLENBTnRCLEVBT0dQLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixDQUFsQixDQVBILEVBT3lCTixNQUFNLENBQUNNLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FQekI7QUFTQTNELGVBQWEsR0FBR3FLLGdCQUFoQjtBQUNBN0MsdUJBQXFCLENBQUNDLFFBQUQsQ0FBckI7QUFDQSxDOzs7Ozs7Ozs7OztBQ3YzQkQsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL21hcFwiO1xuXG5cblxuIiwiLy8gaSB3YW50IGEgY2FtZXJhIGZvbGxvd2luZyB0aGUgY2hhciBhcm91bmQgdGhlIG1hcFxuXG5cbmxldCBjdHggPSBudWxsO1xuXG4vLyBjcmVhdGUgYSBtYXAgd2l0aCAxMCoxMCB0aWxlXG5sZXQgZ2FtZU1hcCA9IFtcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMCwgMCwgMCwgMCwgNiwgNSwgNSwgNywgMCwgMjYsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjcsIDAsIDAsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDEsIDEsIDEsIDEsIDIxLCAyMCwgMjAsIDIyLCAxLCAyOSwgMjgsIDI4LCAyOCwgMjgsIDI4LCAzMCwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMSwgMSwgMSwgMSwgMjEsIDIwLCAyMCwgMjIsIDEsIDI5LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDMwLCAyLCAyLCAwLCA0LCA0LCA0LCA0LFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCAwLCAxLCAxLCAxLCAxLCAyMSwgMjAsIDIwLCAyMiwgMSwgMjksIDI4LCAyOCwgMjgsIDI4LCAyOCwgMzAsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDEsIDEsIDEsIDEsIDE2LCAyMCwgMTYsIDE4LCAxLCAxNiwgMTgsIDE2LCAxOSwgMjgsIDE4LCAxOCwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMiwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMiwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMiwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMzEsIDMyLCAzMywgMzQsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDM1LCAzNiwgMzcsIDM4LCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLCA0LCA0LCA0LCA0LFxuICAgIDQsIDQsIDQsIDQsIDQsIDQsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDM5LCA0MCwgNDEsIDQyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLCA0LCA0LCA0LCA0LFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCAwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxNiwgMzYsIDE2LCAxOCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgOCwgOCwgOCwgOCwgOCwgOSwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOSwgOCwgOCwgOCwgOCwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOSwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgOCwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcbl07XG5cbi8vIOavj+S4quWcsOegluWkmuWwkXBpeGVsXG5sZXQgdGlsZVdpZHRoID0gNDA7XG5sZXQgdGlsZUhlaWdodCA9IDQwO1xuLy8g5Zyw5Zu+5aSn5bCP5bCx5pivMjAqMjBcbmxldCBtYXBXaWR0aCA9IDMwO1xubGV0IG1hcEhlaWdodCA9IDMwO1xuLy8gZnJhbWVyYXRlXG5sZXQgY3VycmVudFNlY29uZCA9IDA7XG5sZXQgZnJhbWVDb3VudCA9IDA7XG5sZXQgZnJhbWVzTGFzdFNlY29uZCA9IDA7XG5sZXQgbGFzdEZyYW1lVGltZSA9IDA7XG5cblxuLy8ga2V5Q29kZSA6IGJvb2xlYW4gdG8gdGVsbCB1cyB3aGljaCBvbmUgYXJlIHByZXNzZWRcbmxldCBoZWxkS2V5cyA9IHtcbiAgICAvLyAzNzogbGVmdFxuICAgIDY1IDogZmFsc2UsXG4gICAgLy8gMzg6IHVwXG4gICAgODcgOiBmYWxzZSxcbiAgICAvLyAzOTogcmlnaHRcbiAgICA2OCA6IGZhbHNlLFxuICAgIC8vIDQwOiBkb3duXG4gICAgODMgOiBmYWxzZSxcblx0Ly8gMzI6IHNwYWNlXG5cdDMyIDogZmFsc2Vcbn07XG5cbmxldCBkaXJlY3Rpb25zID0ge1xuXHR1cFx0OiAwLFxuXHRyaWdodDogMSxcblx0ZG93bjogMixcblx0bGVmdDogM1xufTtcblxuXG4vLyDlnLDmnb/np43nsbtcbmxldCBmbG9vclR5cGVzID0ge1xuICAgIHNvbGlkOiAwLFxuICAgIHBhdGg6IDEsXG4gICAgb2NlYW46IDJcbn07XG5cbi8vIOaVsOWtl++8iGdhbWVNYXDvvInlr7nlupTkuIrpopzoibLlkozlnLDmnb/np43nsbtcbi8vIDA65aKZ5aOBIDE66I2J5ZywIDI66ZmG5ZywICA0OiDmsLQgIFxuLy8gNTrpu4ToibLlhoXpg6jlopnlo4EgNjog6buE6Imy5YaF6YOo5aKZ5aOB5bem6KeSIDc66buE6Imy5YaF6YOo5aKZ5aOB5Y+z6KeSXG4vLyA4OiDmspnmu6kgOTrmspnmu6kyXG4vLyAyMDrpu4ToibLlhoXpg6jlnLDmnb8gMjE66buE6Imy5YaF6YOo5aKZ5bemIDIyOum7hOiJsuWGhemDqOWimeWPs1xuLy8gMjU65qOV6Imy5YaF6YOo5aKZ5aOBIDI2OuajleiJsuWGhemDqOWimeWjgeW3puinkiAyNzog5qOV6Imy5YaF6YOo5aKZ5aOB5Y+z6KeSXG4vLyAyODog5qOV6Imy5YaF6YOo5Zyw5p2/IDI5OiDmo5XoibLlhoXpg6jlopnlt6YgMzA65qOV6Imy5YaF6YOo5aKZ5Y+zXG4vLyAxMC0xOSDmiL/lrZDlpJbop4Jcbi8vIDMxLTQyIG1pdW1pdSByb29tXG5sZXQgdGlsZVR5cGVzID0ge1xuXHQwIDogeyBjb2xvcjogXCIjNzkzZDRjXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjAseTowLHc6NDAsaDo0MH1dIH0sXG5cdDEgOiB7IGNvbG9yOiBcIiM2ZGY3YjFcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo0MCx5OjAsdzo0MCxoOjQwfV0gfSxcblx0MiA6IHsgY29sb3I6IFwiI2M5NzQ2MVwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjgwLHk6MCx3OjQwLGg6NDB9XVx0fSxcbiAgICA0IDogeyBjb2xvcjogXCIjMDA4ZGYwXCIsIGZsb29yOiBmbG9vclR5cGVzLm9jZWFuLCBzcHJpdGU6W3t4OjE2MCx5OjAsdzo0MCxoOjQwfV0gfSxcbiAgICA1IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjEyMCx5OjAsdzo0MCxoOjQwfV0gfSxcbiAgICA2IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjEyMCx5OjQwLHc6NDAsaDo0MH1dIH0sXG4gICAgNyA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDo4MCx5OjQwLHc6NDAsaDo0MH1dIH0sXG4gICAgOCA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjIwMCx5OjAsdzo0MCxoOjQwfV0gfSxcbiAgICA5IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6MjAwLHk6NDAsdzo0MCxoOjQwfV0gfSxcblxuXHRcbiAgICAxMCA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDExIDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyODAseTo0MCx3OjQwLGg6NDB9XX0sXG4gICAgMTIgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjQwLHc6NDAsaDo0MH1dfSxcbiAgICAxMyA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE0IDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyODAseTo4MCx3OjQwLGg6NDB9XX0sXG4gICAgMTUgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjgwLHc6NDAsaDo0MH1dfSxcbiAgICAxNiA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6MTIwLHc6NDAsaDo0MH1dfSxcbiAgICAxNyA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjgwLHk6MTIwLHc6NDAsaDo0MH1dfSxcbiAgICAxOCA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6MTIwLHc6NDAsaDo0MH1dfSxcbiAgICAxOSA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzYwLHk6MTIwLHc6NDAsaDo0MH1dfSxcbiAgICBcbiAgICAyMCA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjQwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDIxIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjgwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDIyIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjEyMCx5OjgwLHc6NDAsaDo0MH1dfSxcblxuICAgIDI1IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjE2MCx3OjQwLGg6NDB9XX0sXG4gICAgMjYgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6MTYwLHc6NDAsaDo0MH1dfSxcbiAgICAyNyA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyODAseToxNjAsdzo0MCxoOjQwfV19LFxuICAgIDI4IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6MjgwLHk6MjAwLHc6NDAsaDo0MH1dfSxcbiAgICAyOSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozNjAseToxNjAsdzo0MCxoOjQwfV19LFxuICAgIDMwIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI0MCx5OjIwMCx3OjQwLGg6NDB9XX0sXG5cbiAgICAzMSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseToyMDAsdzo0MCxoOjQwfV19LFxuICAgIDMyIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjM2MCx5OjIwMCx3OjQwLGg6NDB9XX0sXG4gICAgMzMgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6NDAwLHk6MjAwLHc6NDAsaDo0MH1dfSxcbiAgICAzNCA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDo0NDAseToyMDAsdzo0MCxoOjQwfV19LFxuICAgIDM1IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjI0MCx3OjQwLGg6NDB9XX0sXG4gICAgMzYgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDozNjAseToyNDAsdzo0MCxoOjQwfV19LFxuICAgIDM3IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjQwMCx5OjI0MCx3OjQwLGg6NDB9XX0sXG4gICAgMzggOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6NDQwLHk6MjQwLHc6NDAsaDo0MH1dfSxcbiAgICAzOSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseToyODAsdzo0MCxoOjQwfV19LFxuICAgIDQwIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6MzYwLHk6MjgwLHc6NDAsaDo0MH1dfSxcbiAgICA0MSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjQwMCx5OjI4MCx3OjQwLGg6NDB9XX0sXG4gICAgNDIgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6NDQwLHk6MjgwLHc6NDAsaDo0MH1dfSxcblxuXG4gICAgXG59O1xuXG5sZXQgY29sbGlzaW9ucyA9IHtcblx0bm9uZVx0XHQ6IDAsXG5cdHNvbGlkXHRcdDogMVxufTtcblxubGV0IG9iamVjdFR5cGVzID0ge1xuXHQxIDoge1xuXHRcdG5hbWUgOiBcIkZsb3dlclwiLFxuXHRcdHNwcml0ZSA6IFt7eDo0MCx5OjE4MCx3OjQwLGg6MjB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLm5vbmUsXG5cdFx0ekluZGV4IDogMVxuXHR9LFxuXHQyIDoge1xuXHRcdG5hbWUgOiBcImZlbmNlXCIsXG5cdFx0c3ByaXRlIDogW3t4OjQwLHk6MjAwLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuXHR9LFxuXHQzIDoge1xuXHRcdG5hbWUgOiBcIlRyZWVcIixcblx0XHRzcHJpdGUgOiBbe3g6ODAseToxNjAsdzo4MCxoOjgwfV0sXG5cdFx0b2Zmc2V0IDogWy0yMCwtMjBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogM1xuICAgIH0sXG4gICAgNCA6IHtcblx0XHRuYW1lIDogXCJtYXNocm9vbXNcIixcblx0XHRzcHJpdGUgOiBbe3g6NDAseToxNjAsdzo0MCxoOjIwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5ub25lLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDUgOiB7XG5cdFx0bmFtZSA6IFwiUGlnIFNob3BcIixcblx0XHRzcHJpdGUgOiBbe3g6MTYwLHk6MTYwLHc6ODAsaDo4MH1dLFxuXHRcdG9mZnNldCA6IFstMjAsLTIwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDNcbiAgICB9LFxuICAgIDYgOiB7XG5cdFx0bmFtZSA6IFwiZG9udXRzXCIsXG5cdFx0c3ByaXRlIDogW3t4OjM2MCx5OjAsdzo4MCxoOjExNX1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMubm9uZSxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICA3IDoge1xuXHRcdG5hbWUgOiBcImNvb2tpbmdcIixcblx0XHRzcHJpdGUgOiBbe3g6MTYwLHk6ODAsdzo4MCxoOjgwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5ub25lLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDggOiB7XG5cdFx0bmFtZSA6IFwiY2FycGV0XCIsXG5cdFx0c3ByaXRlIDogW3t4OjAseTo4MCx3OjgwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLm5vbmUsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgOSA6IHtcblx0XHRuYW1lIDogXCJkZXNrXCIsXG5cdFx0c3ByaXRlIDogW3t4OjAseTo0MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDEwIDoge1xuXHRcdG5hbWUgOiBcImNoYWlyXCIsXG5cdFx0c3ByaXRlIDogW3t4OjMyMCx5OjAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxMSA6IHtcblx0XHRuYW1lIDogXCJUcmVlIFBsYW50XCIsXG5cdFx0c3ByaXRlIDogW3t4OjQwLHk6MTIwLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTIgOiB7XG5cdFx0bmFtZSA6IFwiZHJ1bVwiLFxuXHRcdHNwcml0ZSA6IFt7eDowLHk6MjQwLHc6ODAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTMgOiB7XG5cdFx0bmFtZSA6IFwiaW5zdHJ1bWVudHNcIixcblx0XHRzcHJpdGUgOiBbe3g6ODAseToyNDAsdzoxMjAsaDo4MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTQgOiB7XG5cdFx0bmFtZSA6IFwiQm9va1NoZWxmXCIsXG5cdFx0c3ByaXRlIDogW3t4OjIwMCx5OjI0MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDE1IDoge1xuXHRcdG5hbWUgOiBcInNheG9waG9uZVwiLFxuXHRcdHNwcml0ZSA6IFt7eDoyNDAseToyNDAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxNiA6IHtcblx0XHRuYW1lIDogXCJSaWdodCBGYWNpbmcgQ2hhaXJcIixcblx0XHRzcHJpdGUgOiBbe3g6MjAwLHk6MjgwLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuXHR9LFxuXHQxNyA6IHtcblx0XHRuYW1lIDogXCJjb2NvbnV0IHRyZWVcIixcblx0XHRzcHJpdGUgOiBbe3g6NDQwLHk6MCx3OjgwLGg6ODB9XSxcblx0XHRvZmZzZXQgOiBbLTIwLC0yMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbn07XG5cblxuLy8g54mp5ZOBXG5sZXQgaXRlbVR5cGVzID0ge1xuICAgIDEgOiB7XG5cdFx0bmFtZSA6IFwiY29jb251dFwiLFxuXHRcdG1heFN0YWNrIDogNSxcblx0XHRzcHJpdGUgOiBbe3g6MjQwLHk6MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXVxuICAgIH0sXG4gICAgMiA6IHtcblx0XHRuYW1lIDogXCJzdHJhd2JlcnJ5XCIsXG5cdFx0bWF4U3RhY2sgOiA1LFxuXHRcdHNwcml0ZSA6IFt7eDoyODAseTowLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdXG5cdH1cbn07XG5cbmZ1bmN0aW9uIFN0YWNrKGlkLCBxdHkpXG57XG5cdHRoaXMudHlwZSA9IGlkO1xuXHR0aGlzLnF0eSA9IHF0eTtcbn1cblxuZnVuY3Rpb24gSW52ZW50b3J5KHMpXG57XG5cdHRoaXMuc3BhY2VzXHRcdD0gcztcblx0dGhpcy5zdGFja3NcdFx0PSBbXTtcbn1cblxuSW52ZW50b3J5LnByb3RvdHlwZS5hZGRJdGVtcyA9IGZ1bmN0aW9uKGlkLCBxdHkpXG57XG5cdGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLnNwYWNlczsgaSsrKVxuXHR7IFxuXHRcdGlmKHRoaXMuc3RhY2tzLmxlbmd0aCA8PSBpKVxuXHRcdHtcblx0XHRcdGxldCBtYXhIZXJlID0gKHF0eSA+IGl0ZW1UeXBlc1tpZF0ubWF4U3RhY2sgP1xuXHRcdFx0XHRpdGVtVHlwZXNbaWRdLm1heFN0YWNrIDogcXR5KTtcblx0XHRcdFx0dGhpcy5zdGFja3MucHVzaChuZXcgU3RhY2soaWQsIG1heEhlcmUpKTtcblx0XHRcdFxuXHRcdFx0cXR5LT0gbWF4SGVyZTtcblx0XHR9XG5cdFx0ZWxzZSBpZih0aGlzLnN0YWNrc1tpXS50eXBlID09IGlkICYmXG5cdFx0XHR0aGlzLnN0YWNrc1tpXS5xdHkgPCBpdGVtVHlwZXNbaWRdLm1heFN0YWNrKVxuXHRcdHtcblx0XHRcdGxldCBtYXhIZXJlID0gKGl0ZW1UeXBlc1tpZF0ubWF4U3RhY2sgLSB0aGlzLnN0YWNrc1tpXS5xdHkpO1xuXHRcdFx0aWYobWF4SGVyZSA+IHF0eSkgeyBtYXhIZXJlID0gcXR5OyB9XG5cdFx0XHRcblx0XHRcdHRoaXMuc3RhY2tzW2ldLnF0eSs9IG1heEhlcmU7XG5cdFx0XHRxdHktPSBtYXhIZXJlO1xuXHRcdH1cblx0XHRpZihxdHk9PTApIHsgcmV0dXJuIDA7IH1cblx0fVxuXHRyZXR1cm4gcXR5O1xufTtcblxuZnVuY3Rpb24gUGxhY2VkSXRlbVN0YWNrKGlkLCBxdHkpXG57XG5cdHRoaXMudHlwZSA9IGlkO1xuXHR0aGlzLnF0eSA9IHF0eTtcblx0dGhpcy54ID0gMDtcblx0dGhpcy55ID0gMDtcbn1cblxuUGxhY2VkSXRlbVN0YWNrLnByb3RvdHlwZS5wbGFjZUF0ID0gZnVuY3Rpb24obngsIG55KVxue1xuXHRpZihtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLngsIHRoaXMueSldLml0ZW1TdGFjaz09dGhpcylcblx0e1xuXHRcdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMueCwgdGhpcy55KV0uaXRlbVN0YWNrID0gbnVsbDtcblx0fVxuXG5cdHRoaXMueCA9IG54O1xuXHR0aGlzLnkgPSBueTtcblx0XG5cdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KG54LCBueSldLml0ZW1TdGFjayA9IHRoaXM7XG59O1xuXG5cblxuXG5sZXQgZ2FtZXRpbGUgPSBudWxsLCBnYW1ldGlsZVVSTCA9IFwic3JjL2ltYWdlcy90aWxlc2V0ZXN0dC5wbmdcIiwgYXJ0TG9hZGVkID0gZmFsc2U7XG5cblxuXG4vLyDliJvlu7rkuIDkuKrop5LoibIgKG1pdW1pdSlcbmxldCBtaXVtaXUgPSBuZXcgTWl1TWl1KCk7XG4vLyDliqDmm7TlpJrop5LoibLirIdcbmZ1bmN0aW9uIE1pdU1pdSgpIHtcbiAgICB0aGlzLnRpbGVGcm9tXHQ9IFsxLDFdO1xuICAgIC8vIG1pdW1pdeeahOS9jee9rlxuICAgIHRoaXMudGlsZVRvXHRcdD0gWzE1LDE2XTtcbiAgICAvLyB0aW1lIGluIG1pbGxzZWNvbmRzXG4gICAgdGhpcy50aW1lTW92ZWRcdD0gMDtcbiAgICB0aGlzLmRlbGF5TW92ZVx0PSA3MDA7XG5cdHRoaXMuZGltZW5zaW9uc1x0PSBbNDAsNDBdO1xuICAgIHRoaXMucG9zaXRpb25cdD0gWzQ1LDQ1XTtcbiAgICBcbiAgICB0aGlzLmRpcmVjdGlvblx0PSBkaXJlY3Rpb25zLnVwO1xuXHR0aGlzLnNwcml0ZXMgPSB7fTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMudXBdXHQ9IFt7eDowLHk6MTIwLHc6MzAsaDozMH1dO1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy5yaWdodF0gPSBbe3g6MCx5OjE1MCx3OjMwLGg6MzB9XTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMuZG93bl0gPSBbe3g6MCx5OjE4MCx3OjMwLGg6MzB9XTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMubGVmdF0gPSBbe3g6MCx5OjIxMCx3OjMwLGg6MzB9XTtcblx0dGhpcy5pbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KDIpO1xuXG59XG5cblxuLy8g5oqK6KeS6Imy5pS+5Zyo5Zyw56CW5LiKXG5NaXVNaXUucHJvdG90eXBlLmxvY2F0aW9uID0gZnVuY3Rpb24oeCwgeSkge1xuXHR0aGlzLnRpbGVGcm9tXHQ9IFt4LHldO1xuICAgIHRoaXMudGlsZVRvXHRcdD0gW3gseV07XG4gICAgLy8geCBhbmQgeSBwb3NpdGlvbiBvZiB0aGUgdGlsZS4gdXBkYXRlIHRoZSB0aWxlRnJvbSBhbmQgdGlsZVRvIHByb3BlcnRpZXMgdG8gdGhlIG5ldyB0aWxlIGNvb3JkaW5hdGVzXG4gICAgLy8gY2FsY3VsYXRlcyB0aGUgcGl4ZWwgcG9zaXRpb24gb2YgdGhlIGNoYXJhY3llciB1c2UgYmVsb3dcblx0dGhpcy5wb3NpdGlvblx0PSBbKCggdGlsZVdpZHRoICogeCApKyggKHRpbGVXaWR0aCAtIHRoaXMuZGltZW5zaW9uc1swXSkgLyAyICkpLFxuXHRcdCgoIHRpbGVIZWlnaHQgKiB5ICkrKCAodGlsZUhlaWdodCAtIHRoaXMuZGltZW5zaW9uc1sxXSkgLyAyICkpXTtcbn07XG5cbi8vIOagueaNruavj+S4quW4p+aVsOaJvuWIsOinkuiJsuS9jee9rlxuTWl1TWl1LnByb3RvdHlwZS5wcm9jZXNzTW92ZW1lbnQgPSBmdW5jdGlvbih0KSB7XG4gICAgLy8gaWYgY2hhciB0aWxlVG8gPT0gdGlsZUZyb20gY2hhciBpcyBub3QgbW92aW5nLCBzbyByZXR1cm4gZmFsc2Vcblx0aWYoIHRoaXMudGlsZUZyb21bMF0gPT0gdGhpcy50aWxlVG9bMF0gJiYgdGhpcy50aWxlRnJvbVsxXSA9PSB0aGlzLnRpbGVUb1sxXSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAvLyBpZiB0aGUgYW1vdW50IG9mIHRpbWUgcGFzc2VkIHNpbmNlIGNoYXIgYmVnYW4gaXRzIGN1cnJlbnQgbW92ZSA+PSB0aGUgdGltZSBmb3IgY2hhciB0byBtb3ZlIDEgdGlsZS4gd2Ugc2V0IHBvc2l0aW9uIHVzaW5nIGxvY2F0aW9uIGZ1bmN0aW9uXG4gICAgLy8gYWthOiBpZiBjaGFyIHN0aWxsIG1vdmluZ1xuXHRpZigodCAtIHRoaXMudGltZU1vdmVkKSA+PSB0aGlzLmRlbGF5TW92ZSkge1xuICAgICAgICB0aGlzLmxvY2F0aW9uKHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSk7XG4gICAgICAgIGlmKG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSldLmV2ZW50RW50ZXIgIT0gbnVsbCkge1xuXHRcdFx0bWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy50aWxlVG9bMF0sIHRoaXMudGlsZVRvWzFdKV0uZXZlbnRFbnRlcih0aGlzKTtcbiAgICAgICAgfVxuXHR9IGVsc2Uge1xuICAgICAgICAvLyBjdXJyZW50IHBvc2l0aW9uIG9uIGNhbnZhc1xuXHRcdHRoaXMucG9zaXRpb25bMF0gPSAodGhpcy50aWxlRnJvbVswXSAqIHRpbGVXaWR0aCkgKyAoKHRpbGVXaWR0aCAtIHRoaXMuZGltZW5zaW9uc1swXSkgLyAyKTtcblx0XHR0aGlzLnBvc2l0aW9uWzFdID0gKHRoaXMudGlsZUZyb21bMV0gKiB0aWxlSGVpZ2h0KSArICgodGlsZUhlaWdodCAtIHRoaXMuZGltZW5zaW9uc1sxXSkgLyAyKTtcblxuICAgICAgICAvLyBpZiBjaGFyIGlzIG1vdmluZyBvbiB4IGNvb3JkaW5hdGUsIGNhbGN1bGF0ZSBwaXhlbHNcblx0XHRpZih0aGlzLnRpbGVUb1swXSAhPSB0aGlzLnRpbGVGcm9tWzBdKSB7XG4gICAgICAgICAgICAvLyBkaWZmZXJlbmNlID0gZGlzdGFuY2UgbW92ZWRcbiAgICAgICAgICAgIC8vIOWKoOWHj+enu+WKqOeahOWcsOegluWIsOinkuiJsueahOS9jeWtkFxuXHRcdFx0bGV0IGRpZmZlcmVuY2UgPSAodGlsZVdpZHRoIC8gdGhpcy5kZWxheU1vdmUpICogKHQgLSB0aGlzLnRpbWVNb3ZlZCk7XG5cdFx0XHR0aGlzLnBvc2l0aW9uWzBdKz0gKHRoaXMudGlsZVRvWzBdIDwgdGhpcy50aWxlRnJvbVswXSA/IDAgLSBkaWZmZXJlbmNlIDogZGlmZmVyZW5jZSk7XG5cdFx0fVxuXHQgICAgaWYodGhpcy50aWxlVG9bMV0gIT0gdGhpcy50aWxlRnJvbVsxXSkge1xuXHRcdFx0bGV0IGRpZmZlcmVuY2UgPSAodGlsZUhlaWdodCAvIHRoaXMuZGVsYXlNb3ZlKSAqICh0LXRoaXMudGltZU1vdmVkKTtcblx0XHRcdHRoaXMucG9zaXRpb25bMV0rPSAodGhpcy50aWxlVG9bMV08dGhpcy50aWxlRnJvbVsxXSA/IDAgLSBkaWZmZXJlbmNlIDogZGlmZmVyZW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcm91bmQgeCAmIHkgdG8gd2hvbGUgbnVtYmVyIOmcgOimgeaVtOaVsFxuXHRcdHRoaXMucG9zaXRpb25bMF0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMF0pO1xuXHRcdHRoaXMucG9zaXRpb25bMV0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMV0pO1xuICAgIH1cbiAgICAvLyB0cnVlID0gY2hhciBpcyBjdXJyZW50bHkgbW92aW5nXG5cdHJldHVybiB0cnVlO1xufVxuXG5cbi8vIGlmIGNoYXIgY2FuIG1vdmUgaW4gYSBzcGVjaWZpYyBkaXJlY1xuTWl1TWl1LnByb3RvdHlwZS5wbGFjZXNDYW5HbyA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAvLyBpZiB4IGFuZCB5IGlzIGluIG1hcCBib3VuZFxuICAgIGlmKHggPCAwIHx8IHggPj0gbWFwV2lkdGggfHwgeSA8IDAgfHwgeSA+PSBtYXBIZWlnaHQpIHsgXG5cdFx0cmV0dXJuIGZhbHNlOyBcblx0fVxuICAgIC8vIGlmIHRoZSB0aWxlIGlzIHBhdGggdGlsZSAob25seSBtb3ZlIGlmIGl0cyBhIHBhdGgpXG4gICAgICAgIGlmKHRpbGVUeXBlc1tnYW1lTWFwW3RvSW5kZXgoeCx5KV1dLmZsb29yICE9IGZsb29yVHlwZXMucGF0aCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgaWYobWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0ub2JqZWN0ICE9IG51bGwpIHtcblx0XHRcdGxldCBvYmplY3QgPSBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5vYmplY3Q7XG5cdFx0XHRpZihvYmplY3RUeXBlc1tvYmplY3QudHlwZV0uY29sbGlzaW9uID09IGNvbGxpc2lvbnMuc29saWQpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5NaXVNaXUucHJvdG90eXBlLmNhbkdvVXAgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucGxhY2VzQ2FuR28odGhpcy50aWxlRnJvbVswXSwgdGhpcy50aWxlRnJvbVsxXSAtIDEpOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5jYW5Hb0Rvd24gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucGxhY2VzQ2FuR28odGhpcy50aWxlRnJvbVswXSwgdGhpcy50aWxlRnJvbVsxXSArIDEpOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5jYW5Hb0xlZnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucGxhY2VzQ2FuR28odGhpcy50aWxlRnJvbVswXS0xLCB0aGlzLnRpbGVGcm9tWzFdKTsgfTtcbk1pdU1pdS5wcm90b3R5cGUuY2FuR29SaWdodCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5wbGFjZXNDYW5Hbyh0aGlzLnRpbGVGcm9tWzBdKzEsIHRoaXMudGlsZUZyb21bMV0pOyB9O1xuXG5NaXVNaXUucHJvdG90eXBlLmdvTGVmdCA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMF0tPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5sZWZ0OyB9O1xuTWl1TWl1LnByb3RvdHlwZS5nb1JpZ2h0ID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1swXSs9IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLnJpZ2h0OyB9O1xuTWl1TWl1LnByb3RvdHlwZS5nb1VwID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1sxXS09IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLnVwOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5nb0Rvd24gPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzFdKz0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMuZG93bjsgfTtcblxuLy8gcGljayB1cCBpdGVtXG5NaXVNaXUucHJvdG90eXBlLnBpY2tVcCA9IGZ1bmN0aW9uKClcbntcblx0aWYodGhpcy50aWxlVG9bMF0hPXRoaXMudGlsZUZyb21bMF0gfHxcblx0XHR0aGlzLnRpbGVUb1sxXSE9dGhpcy50aWxlRnJvbVsxXSlcblx0e1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRcblx0bGV0IGlzID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy50aWxlRnJvbVswXSxcblx0XHRcdFx0dGhpcy50aWxlRnJvbVsxXSldLml0ZW1TdGFjaztcblx0XG5cdGlmKGlzIT1udWxsKVxuXHR7XG5cdFx0bGV0IHJlbWFpbnMgPSB0aGlzLmludmVudG9yeS5hZGRJdGVtcyhpcy50eXBlLCBpcy5xdHkpO1xuXG5cdFx0aWYocmVtYWlucykgeyBpcy5xdHkgPSByZW1haW5zOyB9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMudGlsZUZyb21bMF0sXG5cdFx0XHRcdHRoaXMudGlsZUZyb21bMV0pXS5pdGVtU3RhY2sgPSBudWxsO1xuXHRcdH1cblx0fVxuXHRcblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyBjcmVhdGUgYSBjYW1lcmEgb2JqZWN0XG5sZXQgY2FtZXJhID0ge1xuICAgIHNjcmVlbjogWzAsMF0sXG4gICAgLy8g55S76Z2i5bem5LiK6KeSXG4gICAgc3RhcnRpbmdQb2ludDogWzAsMF0sXG4gICAgLy8g55S76Z2i5Y+z5LiL6KeSXG4gICAgZW5kaW5nUG9pbnQ6IFswLDBdLFxuICAgIC8vIOivr+W3rlxuICAgIG9mZnNldDogWzAsMF0sXG4gICAgLy8gdXBkYXRlIGZ1bmN0aW9uLCB4IHkgaXMgb3VyIGNlbnRlciBhcmVhXG4gICAgdXBkYXRlOiBmdW5jdGlvbihvZmZzZXRYLCBvZmZzZXRZKSB7XG4gICAgICAgIC8vIG9mZnNldDogaGFsZiB0aGUgY2FudmFzIHdpZHRoIHx8IGhlaWdodCAocm91bmQgZG93biB0byB3aG9sZSBudW0pXG5cdFx0dGhpcy5vZmZzZXRbMF0gPSBNYXRoLmZsb29yKCh0aGlzLnNjcmVlblswXS8yKSAtIG9mZnNldFgpO1xuICAgICAgICB0aGlzLm9mZnNldFsxXSA9IE1hdGguZmxvb3IoKHRoaXMuc2NyZWVuWzFdLzIpIC0gb2Zmc2V0WSk7XG5cbiAgICAgICAgLy8g5Zyw56CW5Zyo5Zyw5Zu+5LiK55qE5L2N572uXG4gICAgICAgIGxldCB0aWxlID0gWyBNYXRoLmZsb29yKG9mZnNldFggLyB0aWxlV2lkdGgpLCBNYXRoLmZsb29yKG9mZnNldFkgLyB0aWxlSGVpZ2h0KSBdO1xuICAgICAgICAvLyAg6K6h566X56ys5LiA5Liq5Zyw56CW5L2N572u5ZyoeOe6v+S4iu+8miDmnIDlpKflnLDnoJbmlbDph48gLSDlsY/luZXnmoTkuIDljYpcbiAgICAgICAgLy8gIOWkmuWHj+WOuzHov5nmoLflnLDnoJblj6/ku6VzaG935LiA5Y2K5Zyo5bGP5bmV5LiKXG4gICAgICAgIHRoaXMuc3RhcnRpbmdQb2ludFswXSA9IHRpbGVbMF0gLSBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzBdLzIpIC8gdGlsZVdpZHRoKSAgLSAxO1xuXHRcdHRoaXMuc3RhcnRpbmdQb2ludFsxXSA9IHRpbGVbMV0gLSBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzFdLzIpIC8gdGlsZUhlaWdodCkgIC0gMTtcblxuICAgICAgICAvLyDnoa7kv5145ZKMeemDveWkp+S6jjDopoHkuYjkvJrlnKjlnLDlm77lpJZcbiAgICAgICAgaWYodGhpcy5zdGFydGluZ1BvaW50WzBdIDw9IC0xKSB7IHRoaXMuc3RhcnRpbmdQb2ludFswXSA9IDA7IH1cblx0XHRpZih0aGlzLnN0YXJ0aW5nUG9pbnRbMV0gPD0gLTEpIHsgdGhpcy5zdGFydGluZ1BvaW50WzFdID0gMDsgfVxuXG4gICAgICAgIHRoaXMuZW5kaW5nUG9pbnRbMF0gPSB0aWxlWzBdICsgMSArIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMF0vMikgLyB0aWxlV2lkdGgpO1xuXHRcdHRoaXMuZW5kaW5nUG9pbnRbMV0gPSB0aWxlWzFdICsgMSArIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMV0vMikgLyB0aWxlSGVpZ2h0KTtcblxuXHRcdGlmKHRoaXMuZW5kaW5nUG9pbnRbMF0gPj0gbWFwV2lkdGgpIHsgdGhpcy5lbmRpbmdQb2ludFswXSA9IG1hcFdpZHRoIC0xOyB9XG5cdFx0aWYodGhpcy5lbmRpbmdQb2ludFsxXSA+PSBtYXBIZWlnaHQpIHsgdGhpcy5lbmRpbmdQb2ludFsxXSA9IG1hcEhlaWdodCAtIDE7IH1cbiAgICAgICAgfVxufTtcblxuXG4vLyBidWlsZGluZ3NcblxubGV0IG1hcFRpbGVEYXRhID0gbmV3IFRpbGVNYXAoKTtcblxubGV0IGJ1aWxkaW5nc0xvY2F0aW9uID0gW1xuXHR7IHg6MTEsIHk6NSwgdzo0LCBoOjUsIGRhdGE6IFtcblx0XHQxMCwgMTEsIDExLCAxMixcbiAgICAgICAgMTMsIDE0LCAxNCwgMTUsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCxcbiAgICAgICAgMTYsIDE3LCAxNiwgMThcblx0XX0sXG5cdHsgeDoxNiwgeTo1LCB3OjcsIGg6NSwgZGF0YTogW1xuXHRcdDEwLCAxMSwgMTEsIDExLCAxMSwgMTIsIDEyLFxuICAgICAgICAxMywgMTUsIDEzLCAxNCwgMTQsIDE1LCAxNSxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTksIDE5LCAxOCwgMTgsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE5LCAxOSwgMTgsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOSwgMTcsIDE4LCAxOFxuXHRdfSxcblx0eyB4OjE0LCB5OjEzLCB3OjQsIGg6NCwgZGF0YTogW1xuICAgICAgICAxMCwgMTEsIDExLCAxMixcbiAgICAgICAgMTMsIDE0LCAxNCwgMTUsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LFxuICAgICAgICAxNiwgMTcsIDE2LCAxOFxuXHRdfVxuXTtcblxuLy8gc3RvcmVzIGluZm9ybWF0aW9uIGZvciBlYWNoIG1hcCB0aWxlXG5mdW5jdGlvbiBUaWxlKHRpbGVYLCB0aWxlWSwgdGlsZVR5cGUpXG57XG4gICAgLy8gdGlsZVksIHRpbGVYID0gdGhlIHBvc2l0aW9uIG9mIHRoZSB0aWxlIG9uIHRoZSBtYXBcblx0dGhpcy54XHRcdFx0PSB0aWxlWDtcblx0dGhpcy55XHRcdFx0PSB0aWxlWTtcblx0dGhpcy50eXBlXHRcdD0gdGlsZVR5cGU7XG5cdHRoaXMuYnVpbGRpbmdcdFx0PSBudWxsO1xuICAgIHRoaXMuYnVpbGRpbmdUeXBlXHQ9IDA7XG4gICAgLy8gIHBvaW50ZXIgdG8gYSBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gYSBNaXVNaXUgaGFzIGNvbXBsZXRlZCBtb3Zpbmcgb24gdG8gdGhpcyB0aWxlXG4gICAgdGhpcy5ldmVudEVudGVyXHQ9IG51bGw7XG5cdHRoaXMub2JqZWN0XHRcdD0gbnVsbDtcblx0dGhpcy5pdGVtU3RhY2tcdD0gbnVsbDtcblxufVxuXG4vLyDlgqjlrZjnrqHnkIblnLDlm77mlbDmja5cbmZ1bmN0aW9uIFRpbGVNYXAoKSB7XG5cdHRoaXMubWFwXHQ9IFtdO1xuXHR0aGlzLndcdFx0PSAwO1xuICAgIHRoaXMuaFx0XHQ9IDA7XG5cdHRoaXMubGV2ZWxzXHQ9IDQ7XG59XG5cblRpbGVNYXAucHJvdG90eXBlLmJ1aWxkTWFwRnJvbURhdGEgPSBmdW5jdGlvbih0aWxlSWQsIHcsIGgpIHtcblx0dGhpcy53XHRcdD0gdztcbiAgICB0aGlzLmhcdFx0PSBoO1xuXG4gICAgaWYodGlsZUlkLmxlbmd0aCE9KHcgKiBoKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XG4gICAgdGhpcy5tYXAubGVuZ3RoXHQ9IDA7XG4gICAgXHRmb3IobGV0IHkgPSAwOyB5IDwgaDsgeSsrKSB7XG5cdFx0ICAgIGZvcihsZXQgeCA9IDA7IHggPCB3OyB4KyspIHtcblx0XHRcdHRoaXMubWFwLnB1c2goIG5ldyBUaWxlKHgsIHksIHRpbGVJZFsgKHggKyAodyAqIHkpKV0pICk7XG5cdFx0fVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuVGlsZU1hcC5wcm90b3R5cGUuYWRkQnVpbGRpbmdzID0gZnVuY3Rpb24oYnVpbGRpbmdzKSB7XG5cdGZvcihsZXQgaSBpbiBidWlsZGluZ3MpIHtcbiAgICAgICAgbGV0IGJ1aWxkaW5nID0gYnVpbGRpbmdzW2ldO1xuICAgICAgICBpZihidWlsZGluZy54IDwgMCB8fCBidWlsZGluZy55IDwgMCB8fCBidWlsZGluZy54ID49IHRoaXMudyB8fCBidWlsZGluZy55ID49IHRoaXMuaCB8fFx0KGJ1aWxkaW5nLngrYnVpbGRpbmcudyk+dGhpcy53IHx8IChidWlsZGluZy55K2J1aWxkaW5nLmgpPnRoaXMuaCB8fCBidWlsZGluZy5kYXRhLmxlbmd0aCE9KGJ1aWxkaW5nLncqYnVpbGRpbmcuaCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgeSA9IDA7IHkgPCBidWlsZGluZy5oOyB5KyspIHtcblx0XHRcdGZvcihsZXQgeCA9IDA7IHggPCBidWlsZGluZy53OyB4KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZUlkeCA9ICgoKGJ1aWxkaW5nLnkgKyB5KSAqIHRoaXMudykgKyBidWlsZGluZy54ICsgeCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbdGlsZUlkeF0uYnVpbGRpbmcgPSBidWlsZGluZztcblx0XHRcdFx0dGhpcy5tYXBbdGlsZUlkeF0uYnVpbGRpbmdUeXBlID0gYnVpbGRpbmcuZGF0YVsoICh5ICogYnVpbGRpbmcudykgKyB4KV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vLyDnianlk4HmkYbmlL5cbmZ1bmN0aW9uIEdhbWVPYmplY3RzKG50KSB7XG5cdHRoaXMueCA9IDA7XG5cdHRoaXMueSA9IDA7XG5cdHRoaXMudHlwZSA9IG50O1xufVxuXG5HYW1lT2JqZWN0cy5wcm90b3R5cGUucGxhY2VBdCA9IGZ1bmN0aW9uKG54LCBueSkge1xuXHRpZihtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLngsIHRoaXMueSldLm9iamVjdCA9PSB0aGlzKSB7XG5cdFx0bWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy54LCB0aGlzLnkpXS5vYmplY3QgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnggPSBueDtcblx0dGhpcy55ID0gbnk7XG5cdFxuXHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleChueCwgbnkpXS5vYmplY3QgPSB0aGlzO1xufTtcblxuXG5cbi8vIGNvbnZlcnQgeCwgeSBpbnRvIGluZGV4IGluIGdhbWVNYXAgYXJyXG5mdW5jdGlvbiB0b0luZGV4KHgsIHkpIHtcblx0cmV0dXJuKHggKyAobWFwV2lkdGggKiB5KSk7XG59XG5cbmZ1bmN0aW9uIGdldEZyYW1lKHNwcml0ZSwgdGltZUxhc3QsIHRpbWUsIGFuaW1hdGlvbikge1xuXHRpZighYW5pbWF0aW9uKSB7IHJldHVybiBzcHJpdGVbMF07IH1cblx0dGltZSA9IHRpbWUgJSB0aW1lTGFzdDtcblxuXHRmb3IoeCBpbiBzcHJpdGUpIHtcblx0XHRpZihzcHJpdGVbeF0uZW5kPj10aW1lKSB7IHJldHVybiBzcHJpdGVbeF07IH1cblx0fVxufVxuXG4vLyDnlYzpnaJsb2Fk5a6M77yM5byA5aeLbG9vcFxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pdW1pdVRhbGVcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpO1xuICAgIFxuICAgIC8vIGFkZCBldmVudExpc3RlbmVycyBmb3IgdGhlIGtleWRvd25hIGFuZCBrZXl1cFxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuXHRcdGlmKGUua2V5Q29kZSA+PSA2NSAmJiBlLmtleUNvZGUgPD0gODcgKSB7IGhlbGRLZXlzW2Uua2V5Q29kZV0gPSB0cnVlOyB9XG5cdFx0aWYoZS5rZXlDb2RlPT0zMikgeyBoZWxkS2V5c1tlLmtleUNvZGVdID0gdHJ1ZTsgfVxuXHR9KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoZS5rZXlDb2RlID49IDY1ICYmIGUua2V5Q29kZSA8PSA4NykgeyBoZWxkS2V5c1tlLmtleUNvZGVdID0gZmFsc2U7IH1cblx0XHRpZihlLmtleUNvZGU9PTMyKSB7IGhlbGRLZXlzW2Uua2V5Q29kZV0gPSBmYWxzZTsgfVxuXHR9KTtcblxuICAgIC8vIGNhbnZhc+WwuuWvuCDkv53lrZjliLAg55u45py6XG4gICAgY2FtZXJhLnNjcmVlbiA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pdW1pdVRhbGVcIikud2lkdGgsXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWl1bWl1VGFsZVwiKS5oZWlnaHRdO1xuICAgICAgICBcbiAgICBnYW1ldGlsZSA9IG5ldyBJbWFnZSgpO1xuXHRnYW1ldGlsZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0Y3R4ID0gbnVsbDtcblx0XHRhbGVydChcIkZhaWxlZCBsb2FkaW5nIGdhbWV0aWxlLlwiKTtcblx0fTtcblx0Z2FtZXRpbGUub25sb2FkID0gZnVuY3Rpb24oKSB7IFxuXHRcdGFydExvYWRlZCA9IHRydWU7IFxuXHR9O1xuICAgIGdhbWV0aWxlLnNyYyA9IGdhbWV0aWxlVVJMO1xuICAgIFxuICAgIG1hcFRpbGVEYXRhLmJ1aWxkTWFwRnJvbURhdGEoZ2FtZU1hcCwgbWFwV2lkdGgsIG1hcEhlaWdodCk7XG5cdG1hcFRpbGVEYXRhLmFkZEJ1aWxkaW5ncyhidWlsZGluZ3NMb2NhdGlvbik7XG5cdG1hcFRpbGVEYXRhLm1hcFsoKDIgKiBtYXBXaWR0aCkgKyAyKV0uZXZlbnRFbnRlciA9IGZ1bmN0aW9uKCkgeyBcblx0XHRjb25zb2xlLmxvZyhcIkVudGVyZWQgdGlsZSAyLDJcIik7IFxuXHR9O1xuXHRcblx0Ly8g54mp5ZOB5pGG5pS+5L2N572uXG5cdGxldCBmZW5jZTEgPSBuZXcgR2FtZU9iamVjdHMoMik7IGZlbmNlMS5wbGFjZUF0KDE1LCA2KTtcbiAgICBcbiAgICBsZXQgZmxvd2VyMSA9IG5ldyBHYW1lT2JqZWN0cygxKTsgZmxvd2VyMS5wbGFjZUF0KDExLCAxMCk7XG4gICAgbGV0IGZsb3dlcjIgPSBuZXcgR2FtZU9iamVjdHMoMSk7IGZsb3dlcjIucGxhY2VBdCgxMywgMTApO1xuICAgIGxldCBmbG93ZXIzID0gbmV3IEdhbWVPYmplY3RzKDEpOyBmbG93ZXIzLnBsYWNlQXQoMTQsIDEwKTtcbiAgICBcblx0bGV0IHRyZWUxID0gbmV3IEdhbWVPYmplY3RzKDMpOyB0cmVlMS5wbGFjZUF0KDEwLCAxMSk7XG5cdGxldCB0cmVlMiA9IG5ldyBHYW1lT2JqZWN0cygzKTsgdHJlZTIucGxhY2VBdCgxNSwgMTEpO1xuXHRsZXQgdHJlZTMgPSBuZXcgR2FtZU9iamVjdHMoMyk7IHRyZWUzLnBsYWNlQXQoMTMsIDExKTtcdFxuICAgIGxldCB0cmVlNCA9IG5ldyBHYW1lT2JqZWN0cygzKTsgdHJlZTQucGxhY2VBdCgxOCwgMTEpO1xuICBcbiAgICBsZXQgbWFzaHJvb20xID0gbmV3IEdhbWVPYmplY3RzKDQpOyBtYXNocm9vbTEucGxhY2VBdCg4LDkpO1xuICAgIGxldCBtYXNocm9vbTIgPSBuZXcgR2FtZU9iamVjdHMoNCk7IG1hc2hyb29tMi5wbGFjZUF0KDE1LDcpO1xuXG5cdGxldCBwaWdTaG9wMSA9IG5ldyBHYW1lT2JqZWN0cyg1KTsgcGlnU2hvcDEucGxhY2VBdCg5LCA5KTtcblxuXG4gICAgbGV0IGRvbnV0cyA9IG5ldyBHYW1lT2JqZWN0cyg2KTsgZG9udXRzLnBsYWNlQXQoMTEsIDUpO1xuXG4gICAgbGV0IGNvb2tpbmcgPSBuZXcgR2FtZU9iamVjdHMoNyk7IGNvb2tpbmcucGxhY2VBdCgxMywgNSk7XG5cbiAgICBsZXQgY2FycGV0ID0gbmV3IEdhbWVPYmplY3RzKDgpOyBjYXJwZXQucGxhY2VBdCgxMyw3KTtcblxuICAgIGxldCBkZXNrID0gbmV3IEdhbWVPYmplY3RzKDkpOyBkZXNrLnBsYWNlQXQoMTQsOCk7XG5cbiAgICBsZXQgY2hhaXIgPSBuZXcgR2FtZU9iamVjdHMoMTApOyBjaGFpci5wbGFjZUF0KDE0LDcpO1xuICAgIGxldCBjaGFpcjIgPSBuZXcgR2FtZU9iamVjdHMoMTYpOyBjaGFpcjIucGxhY2VBdCgxOCw3KTtcblxuICAgIGxldCB0cmVlUGxhbnQgPSBuZXcgR2FtZU9iamVjdHMoMTEpOyB0cmVlUGxhbnQucGxhY2VBdCgxMSw4KTtcblxuICAgIGxldCBkcnVtID0gbmV3IEdhbWVPYmplY3RzKDEyKTsgZHJ1bS5wbGFjZUF0KDIxLDYpO1xuXG4gICAgbGV0IGluc3RydW1lbnRzID0gbmV3IEdhbWVPYmplY3RzKDEzKTsgaW5zdHJ1bWVudHMucGxhY2VBdCgxOCw1KTtcblxuICAgIGxldCBib29rU2hlbGYxID0gbmV3IEdhbWVPYmplY3RzKDE0KTsgYm9va1NoZWxmMS5wbGFjZUF0KDE2LDYpO1xuICAgIGxldCBib29rU2hlbGYyID0gbmV3IEdhbWVPYmplY3RzKDE0KTsgYm9va1NoZWxmMi5wbGFjZUF0KDE2LDcpO1xuXG5cdGxldCBzYXhvcGhvbmUgPSBuZXcgR2FtZU9iamVjdHMoMTUpOyBzYXhvcGhvbmUucGxhY2VBdCgxOSw3KTtcblx0XG5cdGxldCBjb2NvbnV0VHJlZTEgPSBuZXcgR2FtZU9iamVjdHMoMTcpOyBjb2NvbnV0VHJlZTEucGxhY2VBdCgxMCwgMTgpO1xuXHRsZXQgY29jb251dFRyZWUyID0gbmV3IEdhbWVPYmplY3RzKDE3KTsgY29jb251dFRyZWUyLnBsYWNlQXQoMTQsIDE5KTtcblx0bGV0IGNvY29udXRUcmVlMyA9IG5ldyBHYW1lT2JqZWN0cygxNyk7IGNvY29udXRUcmVlMy5wbGFjZUF0KDE4LCAxOCk7XG5cdGxldCBjb2NvbnV0VHJlZTQgPSBuZXcgR2FtZU9iamVjdHMoMTcpOyBjb2NvbnV0VHJlZTQucGxhY2VBdCgyMiwgMTkpO1xuXG5cblx0bGV0IGNvY29udXQxID0gbmV3IFBsYWNlZEl0ZW1TdGFjaygxLCAxKTsgY29jb251dDEucGxhY2VBdCgxMCwgMjApO1xuXHRsZXQgY29jb251dDIgPSBuZXcgUGxhY2VkSXRlbVN0YWNrKDEsIDEpOyBjb2NvbnV0Mi5wbGFjZUF0KDE1LCAyMCk7XG5cdGxldCBjb2NvbnV0MyA9IG5ldyBQbGFjZWRJdGVtU3RhY2soMSwgMSk7IGNvY29udXQzLnBsYWNlQXQoMjMsIDIwKTtcblx0bGV0IGNvY29udXQ0ID0gbmV3IFBsYWNlZEl0ZW1TdGFjaygxLCAxKTsgY29jb251dDQucGxhY2VBdCgxNCwgMjEpO1xuXG5cdGxldCBzdHJhd2JlcnJ5MSA9IG5ldyBQbGFjZWRJdGVtU3RhY2soMiwgMSk7IHN0cmF3YmVycnkxLnBsYWNlQXQoMTgsIDIyKTtcblx0XG59O1xuXG5cblxuXG4vLyBtYWluIGZ1bmN0aW9uXG5mdW5jdGlvbiBkcmF3R2FtZSgpIHtcbiAgICBpZiAoY3R4ID09IG51bGwpIHsgXG5cdFx0cmV0dXJuOyBcblx0fVxuICAgIGlmICghYXJ0TG9hZGVkKSB7IFxuXHRcdHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7IHJldHVybjsgXG5cdH1cblxuXHRsZXQgY3VycmVudEZyYW1lVGltZSA9IERhdGUubm93KCk7XG4gICAgLy8gZnJhbWVjb3VudCBcblx0bGV0IHNlYyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuXHRpZihzZWMgIT0gY3VycmVudFNlY29uZCl7XG5cdFx0Y3VycmVudFNlY29uZCA9IHNlYztcblx0XHRmcmFtZXNMYXN0U2Vjb25kID0gZnJhbWVDb3VudDtcblx0XHRmcmFtZUNvdW50ID0gMTtcblx0fSBlbHNlIHsgXG4gICAgICAgIGZyYW1lQ291bnQrKzsgXG4gICAgfVxuXG4gICAgLy8gbWl1bWl1IG1vdmVtZW50XG5cdGlmKCFtaXVtaXUucHJvY2Vzc01vdmVtZW50KGN1cnJlbnRGcmFtZVRpbWUpKSB7XG5cdFx0aWYoaGVsZEtleXNbODddICYmIG1pdW1pdS5jYW5Hb1VwKCkpeyBcbiAgICAgICAgICAgIG1pdW1pdS5nb1VwKGN1cnJlbnRGcmFtZVRpbWUpOyBcbiAgICAgICAgfSBlbHNlIGlmIChoZWxkS2V5c1s4M10gJiYgbWl1bWl1LmNhbkdvRG93bigpKSB7IFxuICAgICAgICAgICAgbWl1bWl1LmdvRG93bihjdXJyZW50RnJhbWVUaW1lKTsgXG4gICAgICAgIH0gZWxzZSBpZihoZWxkS2V5c1s2NV0gJiYgbWl1bWl1LmNhbkdvTGVmdCgpKSB7IFxuICAgICAgICAgICAgbWl1bWl1LmdvTGVmdChjdXJyZW50RnJhbWVUaW1lKTsgXG4gICAgICAgIH0gZWxzZSBpZihoZWxkS2V5c1s2OF0gJiYgbWl1bWl1LmNhbkdvUmlnaHQoKSkgeyBcbiAgICAgICAgICAgIG1pdW1pdS5nb1JpZ2h0KGN1cnJlbnRGcmFtZVRpbWUpOyBcbiAgICAgICAgfSBlbHNlIGlmKGhlbGRLZXlzWzMyXSkge1xuXHRcdFx0bWl1bWl1LnBpY2tVcCgpO1xuXHRcdH1cbiAgICB9XG5cbiAgICAvLyBjYW1lcmHot5/nnYBtaXVtaXXotbBcbiAgICAgICAgY2FtZXJhLnVwZGF0ZShtaXVtaXUucG9zaXRpb25bMF0gKyAobWl1bWl1LmRpbWVuc2lvbnNbMF0gLyAyKSxcbiAgICAgICAgICAgIG1pdW1pdS5wb3NpdGlvblsxXSArIChtaXVtaXUuZGltZW5zaW9uc1sxXSAvIDIpKTtcblxuXHQgICAgbGV0IG1pdW1pdUJ1aWxkaW5nMSA9IG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KFxuXHRcdG1pdW1pdS50aWxlRnJvbVswXSwgbWl1bWl1LnRpbGVGcm9tWzFdKV0uYnVpbGRpbmc7XG5cdCAgICBsZXQgbWl1bWl1QnVpbGRpbmcyID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoXG5cdFx0bWl1bWl1LnRpbGVUb1swXSwgbWl1bWl1LnRpbGVUb1sxXSldLmJ1aWxkaW5nO1xuXG4gICAgICAgIC8vIOa4hemZpGxhc3QgZnJhbWVcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FtZXJhLnNjcmVlblswXSwgY2FtZXJhLnNjcmVlblsxXSk7XG4gICAgXG5cbiAgICBmb3IobGV0IHogPSAwOyB6IDwgbWFwVGlsZURhdGEubGV2ZWxzOyB6KyspIHtcblx0XHRmb3IobGV0IHkgPSBjYW1lcmEuc3RhcnRpbmdQb2ludFsxXTsgeSA8PSBjYW1lcmEuZW5kaW5nUG9pbnRbMV07ICsreSkge1xuXHRcdCAgICBmb3IobGV0IHggPSBjYW1lcmEuc3RhcnRpbmdQb2ludFswXTsgeCA8PSBjYW1lcmEuZW5kaW5nUG9pbnRbMF07ICsreCkge1xuICAgICAgICAgICAgICAgIGlmKHo9PTApIHtcblx0XHRcdFx0XHRsZXQgdGlsZSA9IHRpbGVUeXBlc1ttYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS50eXBlXTtcblxuXHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsIFxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZS5zcHJpdGVbMF0ueCwgXG5cdFx0XHRcdFx0XHRcdFx0XHR0aWxlLnNwcml0ZVswXS55LCBcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGUuc3ByaXRlWzBdLncsIFxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZS5zcHJpdGVbMF0uaCxcblx0XHRcdFx0XHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCksIFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArICh5ICogdGlsZUhlaWdodCksIFxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZVdpZHRoLCBcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGVIZWlnaHRcblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYoej09MSlcblx0XHRcdHtcblx0XHRcdFx0bGV0IGlzID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uaXRlbVN0YWNrO1xuXHRcdFx0XHRpZihpcyE9bnVsbClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCBvYmplY3RTcHJpdGUgPSBpdGVtVHlwZXNbaXMudHlwZV0uc3ByaXRlO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsXG5cdFx0XHRcdFx0XHRvYmplY3RTcHJpdGVbMF0ueCwgb2JqZWN0U3ByaXRlWzBdLnksXG5cdFx0XHRcdFx0XHRvYmplY3RTcHJpdGVbMF0udywgb2JqZWN0U3ByaXRlWzBdLmgsXG5cdFx0XHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgKHgqdGlsZVdpZHRoKSArIGl0ZW1UeXBlc1tpcy50eXBlXS5vZmZzZXRbMF0sXG5cdFx0XHRcdFx0XHRjYW1lcmEub2Zmc2V0WzFdICsgKHkqdGlsZUhlaWdodCkgKyBpdGVtVHlwZXNbaXMudHlwZV0ub2Zmc2V0WzFdLFxuXHRcdFx0XHRcdFx0b2JqZWN0U3ByaXRlWzBdLncsIG9iamVjdFNwcml0ZVswXS5oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XHRsZXQgb2JqZWN0ID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0ub2JqZWN0O1xuXHRcdFx0XHRpZihvYmplY3QgIT0gbnVsbCAmJiBvYmplY3RUeXBlc1tvYmplY3QudHlwZV0uekluZGV4ID09IHopIHtcblx0XHRcdFx0XHRsZXQgb2JqZWN0VHlwZSA9IG9iamVjdFR5cGVzW29iamVjdC50eXBlXTtcblx0XHRcdFx0IFxuXHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsXG5cdFx0XHRcdFx0XHRcdFx0b2JqZWN0VHlwZS5zcHJpdGVbMF0ueCwgXG5cdFx0XHRcdFx0XHRcdFx0b2JqZWN0VHlwZS5zcHJpdGVbMF0ueSxcblx0XHRcdFx0XHRcdFx0XHRvYmplY3RUeXBlLnNwcml0ZVswXS53LCBcblx0XHRcdFx0XHRcdFx0XHRvYmplY3RUeXBlLnNwcml0ZVswXS5oLFxuXHRcdFx0XHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCkgKyBvYmplY3RUeXBlLm9mZnNldFswXSxcblx0XHRcdFx0XHRcdFx0XHRjYW1lcmEub2Zmc2V0WzFdICsgKHkgKiB0aWxlSGVpZ2h0KSArIG9iamVjdFR5cGUub2Zmc2V0WzFdLFxuXHRcdFx0XHRcdFx0XHRcdG9iamVjdFR5cGUuc3ByaXRlWzBdLncsIFxuXHRcdFx0XHRcdFx0XHRcdG9iamVjdFR5cGUuc3ByaXRlWzBdLmhcblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cbiAgICAgICAgICAgICAgIGlmKHogPT0gMiAmJiBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5idWlsZGluZ1R5cGUgIT0gMCAmJiBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5idWlsZGluZyAhPSBtaXVtaXVCdWlsZGluZzEgJiYgbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmcgIT0gbWl1bWl1QnVpbGRpbmcyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbGUgPSB0aWxlVHlwZXNbbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmdUeXBlXTtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlID0gZ2V0RnJhbWUodGlsZS5zcHJpdGUsIHRpbGUuc3ByaXRldGltZUxhc3QsIHRpbGUuYW5pbWF0aW9uKTtcblx0XHRcdFx0XHRjdHguZHJhd0ltYWdlKGdhbWV0aWxlLCBcblx0XHRcdFx0XHRcdFx0XHRcdHNwcml0ZS54LCBcblx0XHRcdFx0XHRcdFx0XHRcdHNwcml0ZS55LCBcblx0XHRcdFx0XHRcdFx0XHRcdHNwcml0ZS53LCBcblx0XHRcdFx0XHRcdFx0XHRcdHNwcml0ZS5oLCBcblx0XHRcdFx0XHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCksIFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArICh5ICogdGlsZUhlaWdodCksIFxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZVdpZHRoLCBcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGVIZWlnaHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG4gICAgXHR9XG5cblx0XHRpZiAoeiA9PSAxKSB7XG5cdFx0XHRcdGxldCBzcHJpdGUgPSBtaXVtaXUuc3ByaXRlc1ttaXVtaXUuZGlyZWN0aW9uXTtcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZShnYW1ldGlsZSxcblx0XHRcdFx0XHRzcHJpdGVbMF0ueCwgc3ByaXRlWzBdLnksXG5cdFx0XHRcdFx0c3ByaXRlWzBdLncsIHNwcml0ZVswXS5oLFxuXHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyBtaXVtaXUucG9zaXRpb25bMF0sXG5cdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArIG1pdW1pdS5wb3NpdGlvblsxXSxcblx0XHRcdFx0XHRtaXVtaXUuZGltZW5zaW9uc1swXSwgbWl1bWl1LmRpbWVuc2lvbnNbMV1cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdH1cblxuXHRjdHgudGV4dEFsaWduID0gXCJyaWdodFwiO1xuXHRcblx0Zm9yKGxldCBpID0gMDsgaSA8IG1pdW1pdS5pbnZlbnRvcnkuc3BhY2VzOyBpKyspXG5cdHtcblx0XHRjdHguZmlsbFN0eWxlID0gXCIjZmZjMzRhXCI7XG5cdFx0Y3R4LmZpbGxSZWN0KDEwICsgKGkgKiA1MCksIDM1MCxcblx0XHRcdDQwLCA0MCk7XG5cdFx0XG5cdFx0aWYodHlwZW9mIG1pdW1pdS5pbnZlbnRvcnkuc3RhY2tzW2ldIT0ndW5kZWZpbmVkJylcblx0XHR7XG5cdFx0XHRsZXQgaXQgPSBpdGVtVHlwZXNbbWl1bWl1LmludmVudG9yeS5zdGFja3NbaV0udHlwZV07XG5cdFx0XHRsZXQgc3ByaXRlID0gaXQuc3ByaXRlO1xuXHRcdFx0XHRcdFxuXHRcdFx0Y3R4LmRyYXdJbWFnZShnYW1ldGlsZSxcblx0XHRcdFx0c3ByaXRlWzBdLngsIHNwcml0ZVswXS55LFxuXHRcdFx0XHRzcHJpdGVbMF0udywgc3ByaXRlWzBdLmgsXG5cdFx0XHRcdDEwICsgKGkgKiA1MCkgKyBpdC5vZmZzZXRbMF0sXG5cdFx0XHRcdDM1MCArIGl0Lm9mZnNldFsxXSxcblx0XHRcdFx0c3ByaXRlWzBdLncsIHNwcml0ZVswXS5oKTtcblx0XHRcdFxuXHRcdFx0aWYobWl1bWl1LmludmVudG9yeS5zdGFja3NbaV0ucXR5PjEpXG5cdFx0XHR7XG5cdFx0XHRcdGN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcblx0XHRcdFx0Y3R4LmZpbGxUZXh0KFwiXCIgKyBtaXVtaXUuaW52ZW50b3J5LnN0YWNrc1tpXS5xdHksXG5cdFx0XHRcdFx0MTAgKyAoaSo1MCkgKyAzOCxcblx0XHRcdFx0XHQzNTAgKyAzOCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICBcbiAgICAvLyBkcmF3IHRoZSBtaXVtaXVcbiAgICBsZXQgc3ByaXRlID0gbWl1bWl1LnNwcml0ZXNbbWl1bWl1LmRpcmVjdGlvbl07XG5cdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsIFxuXHRcdFx0XHRzcHJpdGVbMF0ueCwgXG5cdFx0XHRcdHNwcml0ZVswXS55LCBcblx0XHRcdFx0c3ByaXRlWzBdLncsIFxuXHRcdFx0XHRzcHJpdGVbMF0uaCwgXG5cdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyBtaXVtaXUucG9zaXRpb25bMF0sIFxuXHRcdFx0XHRjYW1lcmEub2Zmc2V0WzFdICsgbWl1bWl1LnBvc2l0aW9uWzFdLCBcblx0XHRcdFx0bWl1bWl1LmRpbWVuc2lvbnNbMF0sIG1pdW1pdS5kaW1lbnNpb25zWzFdKTtcblxuXHRsYXN0RnJhbWVUaW1lID0gY3VycmVudEZyYW1lVGltZTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=