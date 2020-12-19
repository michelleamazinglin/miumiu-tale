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

var gameMap = [4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 6, 5, 5, 7, 0, 26, 25, 25, 25, 25, 25, 27, 0, 0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 29, 28, 28, 28, 28, 28, 30, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 29, 28, 28, 28, 28, 28, 30, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 29, 28, 28, 28, 28, 28, 30, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 16, 20, 16, 18, 1, 16, 18, 16, 19, 28, 18, 18, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 31, 32, 33, 34, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 35, 36, 37, 38, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 39, 40, 41, 42, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 16, 36, 16, 18, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]; // 每个地砖多少pixel

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
  40: false // 32: space

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
  });
  window.addEventListener("keyup", function (e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
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
  } // draw the miumiu


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJoZWxkS2V5cyIsImRpcmVjdGlvbnMiLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJmbG9vclR5cGVzIiwic29saWQiLCJwYXRoIiwib2NlYW4iLCJ0aWxlVHlwZXMiLCJjb2xvciIsImZsb29yIiwic3ByaXRlIiwieCIsInkiLCJ3IiwiaCIsImNvbGxpc2lvbnMiLCJub25lIiwib2JqZWN0VHlwZXMiLCJuYW1lIiwib2Zmc2V0IiwiY29sbGlzaW9uIiwiekluZGV4IiwiaXRlbVR5cGVzIiwibWF4U3RhY2siLCJnYW1ldGlsZSIsImdhbWV0aWxlVVJMIiwiYXJ0TG9hZGVkIiwibWl1bWl1IiwiTWl1TWl1IiwidGlsZUZyb20iLCJ0aWxlVG8iLCJ0aW1lTW92ZWQiLCJkZWxheU1vdmUiLCJkaW1lbnNpb25zIiwicG9zaXRpb24iLCJkaXJlY3Rpb24iLCJzcHJpdGVzIiwicHJvdG90eXBlIiwibG9jYXRpb24iLCJwcm9jZXNzTW92ZW1lbnQiLCJ0IiwibWFwVGlsZURhdGEiLCJtYXAiLCJ0b0luZGV4IiwiZXZlbnRFbnRlciIsImRpZmZlcmVuY2UiLCJNYXRoIiwicm91bmQiLCJwbGFjZXNDYW5HbyIsIm9iamVjdCIsInR5cGUiLCJjYW5Hb1VwIiwiY2FuR29Eb3duIiwiY2FuR29MZWZ0IiwiY2FuR29SaWdodCIsImdvTGVmdCIsImdvUmlnaHQiLCJnb1VwIiwiZ29Eb3duIiwiY2FtZXJhIiwic2NyZWVuIiwic3RhcnRpbmdQb2ludCIsImVuZGluZ1BvaW50IiwidXBkYXRlIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0aWxlIiwiY2VpbCIsIlRpbGVNYXAiLCJidWlsZGluZ3NMb2NhdGlvbiIsImRhdGEiLCJUaWxlIiwidGlsZVgiLCJ0aWxlWSIsInRpbGVUeXBlIiwiYnVpbGRpbmciLCJidWlsZGluZ1R5cGUiLCJsZXZlbHMiLCJidWlsZE1hcEZyb21EYXRhIiwidGlsZUlkIiwibGVuZ3RoIiwicHVzaCIsImFkZEJ1aWxkaW5ncyIsImJ1aWxkaW5ncyIsImkiLCJ0aWxlSWR4IiwiR2FtZU9iamVjdHMiLCJudCIsInBsYWNlQXQiLCJueCIsIm55IiwiZ2V0RnJhbWUiLCJ0aW1lTGFzdCIsInRpbWUiLCJhbmltYXRpb24iLCJlbmQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXdHYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIiwid2lkdGgiLCJoZWlnaHQiLCJJbWFnZSIsIm9uZXJyb3IiLCJhbGVydCIsInNyYyIsImNvbnNvbGUiLCJsb2ciLCJmZW5jZTEiLCJmbG93ZXIxIiwiZmxvd2VyMiIsImZsb3dlcjMiLCJ0cmVlMSIsInRyZWUyIiwidHJlZTMiLCJ0cmVlNCIsIm1hc2hyb29tMSIsIm1hc2hyb29tMiIsInBpZ1Nob3AxIiwiZG9udXRzIiwiY29va2luZyIsImNhcnBldCIsImRlc2siLCJjaGFpciIsImNoYWlyMiIsInRyZWVQbGFudCIsImRydW0iLCJpbnN0cnVtZW50cyIsImJvb2tTaGVsZjEiLCJib29rU2hlbGYyIiwic2F4b3Bob25lIiwiY3VycmVudEZyYW1lVGltZSIsIkRhdGUiLCJub3ciLCJzZWMiLCJtaXVtaXVCdWlsZGluZzEiLCJtaXVtaXVCdWlsZGluZzIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInoiLCJkcmF3SW1hZ2Ui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WixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQXhCTztBQXlCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQXpCTztBQTBCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQTFCTztBQTJCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0UsSUFBdEM7QUFBNENLLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFuRCxHQTNCTztBQTRCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQTVCTztBQTZCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQTdCTztBQStCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQS9CTztBQWdDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQWhDTztBQWlDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQWpDTztBQWtDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQWxDTztBQW1DWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQW5DTztBQW9DWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0UsSUFBdEM7QUFBNENLLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFuRCxHQXBDTztBQXFDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQXJDTztBQXNDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQXRDTztBQXVDWixNQUFLO0FBQUVO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QixDQUFoQixDQUx0QixFQU1HeUIsTUFBTSxDQUFDeEMsTUFBUCxDQUFjLENBQWQsSUFBbUJRLE1BQU0sQ0FBQ08sUUFBUCxDQUFnQixDQUFoQixDQU50QixFQU9HUCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FQSCxFQU95Qk4sTUFBTSxDQUFDTSxVQUFQLENBQWtCLENBQWxCLENBUHpCO0FBU0FyQyxlQUFhLEdBQUc2SSxnQkFBaEI7QUFDQXBDLHVCQUFxQixDQUFDQyxRQUFELENBQXJCO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNwdEJELHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9tYXBcIjtcblxuXG5cbiIsIi8vIGkgd2FudCBhIGNhbWVyYSBmb2xsb3dpbmcgdGhlIGNoYXIgYXJvdW5kIHRoZSBtYXBcblxuXG5sZXQgY3R4ID0gbnVsbDtcblxuLy8gY3JlYXRlIGEgbWFwIHdpdGggMTAqMTAgdGlsZVxubGV0IGdhbWVNYXAgPSBbXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDAsIDAsIDAsIDAsIDYsIDUsIDUsIDcsIDAsIDI2LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI3LCAwLCAwLCAwLCA0LCA0LCA0LCA0LFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCAwLCAxLCAxLCAxLCAxLCAyMSwgMjAsIDIwLCAyMiwgMSwgMjksIDI4LCAyOCwgMjgsIDI4LCAyOCwgMzAsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDEsIDEsIDEsIDEsIDIxLCAyMCwgMjAsIDIyLCAxLCAyOSwgMjgsIDI4LCAyOCwgMjgsIDI4LCAzMCwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMSwgMSwgMSwgMSwgMjEsIDIwLCAyMCwgMjIsIDEsIDI5LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDMwLCAyLCAyLCAwLCA0LCA0LCA0LCA0LFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCAwLCAxLCAxLCAxLCAxLCAxNiwgMjAsIDE2LCAxOCwgMSwgMTYsIDE4LCAxNiwgMTksIDI4LCAxOCwgMTgsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDMxLCAzMiwgMzMsIDM0LCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLCA0LCA0LCA0LCA0LFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCAwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAzNSwgMzYsIDM3LCAzOCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcbiAgICA0LCA0LCA0LCA0LCA0LCA0LCAwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAzOSwgNDAsIDQxLCA0MiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMTYsIDM2LCAxNiwgMTgsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5dO1xuXG4vLyDmr4/kuKrlnLDnoJblpJrlsJFwaXhlbFxubGV0IHRpbGVXaWR0aCA9IDQwO1xubGV0IHRpbGVIZWlnaHQgPSA0MDtcbi8vIOWcsOWbvuWkp+Wwj+WwseaYrzIwKjIwXG5sZXQgbWFwV2lkdGggPSAzMDtcbmxldCBtYXBIZWlnaHQgPSAzMDtcbi8vIGZyYW1lcmF0ZVxubGV0IGN1cnJlbnRTZWNvbmQgPSAwO1xubGV0IGZyYW1lQ291bnQgPSAwO1xubGV0IGZyYW1lc0xhc3RTZWNvbmQgPSAwO1xubGV0IGxhc3RGcmFtZVRpbWUgPSAwO1xuXG5cbi8vIGtleUNvZGUgOiBib29sZWFuIHRvIHRlbGwgdXMgd2hpY2ggb25lIGFyZSBwcmVzc2VkXG5sZXQgaGVsZEtleXMgPSB7XG4gICAgLy8gMzc6IGxlZnRcbiAgICAzNyA6IGZhbHNlLFxuICAgIC8vIDM4OiB1cFxuICAgIDM4IDogZmFsc2UsXG4gICAgLy8gMzk6IHJpZ2h0XG4gICAgMzkgOiBmYWxzZSxcbiAgICAvLyA0MDogZG93blxuICAgIDQwIDogZmFsc2VcbiAgICAvLyAzMjogc3BhY2Vcbn07XG5cbmxldCBkaXJlY3Rpb25zID0ge1xuXHR1cFx0OiAwLFxuXHRyaWdodDogMSxcblx0ZG93bjogMixcblx0bGVmdDogM1xufTtcblxuXG4vLyDlnLDmnb/np43nsbtcbmxldCBmbG9vclR5cGVzID0ge1xuICAgIHNvbGlkOiAwLFxuICAgIHBhdGg6IDEsXG4gICAgb2NlYW46IDJcbn07XG5cbi8vIOaVsOWtl++8iGdhbWVNYXDvvInlr7nlupTkuIrpopzoibLlkozlnLDmnb/np43nsbtcbi8vIDA65aKZ5aOBIDE66I2J5ZywIDI66ZmG5ZywICA0OiDmsLQgIFxuLy8gNTrpu4ToibLlhoXpg6jlopnlo4EgNjog6buE6Imy5YaF6YOo5aKZ5aOB5bem6KeSIDc66buE6Imy5YaF6YOo5aKZ5aOB5Y+z6KeSXG4vLyAyMDrpu4ToibLlhoXpg6jlnLDmnb8gMjE66buE6Imy5YaF6YOo5aKZ5bemIDIyOum7hOiJsuWGhemDqOWimeWPs1xuLy8gMjU65qOV6Imy5YaF6YOo5aKZ5aOBIDI2OuajleiJsuWGhemDqOWimeWjgeW3puinkiAyNzog5qOV6Imy5YaF6YOo5aKZ5aOB5Y+z6KeSXG4vLyAyODog5qOV6Imy5YaF6YOo5Zyw5p2/IDI5OiDmo5XoibLlhoXpg6jlopnlt6YgMzA65qOV6Imy5YaF6YOo5aKZ5Y+zXG4vLyAxMC0xOSDmiL/lrZDlpJbop4Jcbi8vIDMxLTQyIG1pdW1pdSByb29tXG5sZXQgdGlsZVR5cGVzID0ge1xuXHQwIDogeyBjb2xvcjogXCIjNzkzZDRjXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjAseTowLHc6NDAsaDo0MH1dIH0sXG5cdDEgOiB7IGNvbG9yOiBcIiM2ZGY3YjFcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo0MCx5OjAsdzo0MCxoOjQwfV0gfSxcblx0MiA6IHsgY29sb3I6IFwiI2M5NzQ2MVwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjgwLHk6MCx3OjQwLGg6NDB9XVx0fSxcbiAgICA0IDogeyBjb2xvcjogXCIjMDA4ZGYwXCIsIGZsb29yOiBmbG9vclR5cGVzLm9jZWFuLCBzcHJpdGU6W3t4OjE2MCx5OjAsdzo0MCxoOjQwfV0gfSxcbiAgICA1IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjEyMCx5OjAsdzo0MCxoOjQwfV0gfSxcbiAgICA2IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjEyMCx5OjQwLHc6NDAsaDo0MH1dIH0sXG4gICAgNyA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDo4MCx5OjQwLHc6NDAsaDo0MH1dIH0sXG4gICAgXG4gICAgMTAgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI0MCx5OjQwLHc6NDAsaDo0MH1dfSxcbiAgICAxMSA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjgwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDEyIDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseTo0MCx3OjQwLGg6NDB9XX0sXG4gICAgMTMgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI0MCx5OjgwLHc6NDAsaDo0MH1dfSxcbiAgICAxNCA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjgwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE1IDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseTo4MCx3OjQwLGg6NDB9XX0sXG4gICAgMTYgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI0MCx5OjEyMCx3OjQwLGg6NDB9XX0sXG4gICAgMTcgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjEyMCx3OjQwLGg6NDB9XX0sXG4gICAgMTggOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjEyMCx3OjQwLGg6NDB9XX0sXG4gICAgMTkgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjM2MCx5OjEyMCx3OjQwLGg6NDB9XX0sXG4gICAgXG4gICAgMjAgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo0MCx5OjQwLHc6NDAsaDo0MH1dfSxcbiAgICAyMSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDo4MCx5OjgwLHc6NDAsaDo0MH1dfSxcbiAgICAyMiA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoxMjAseTo4MCx3OjQwLGg6NDB9XX0sXG5cbiAgICAyNSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseToxNjAsdzo0MCxoOjQwfV19LFxuICAgIDI2IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI0MCx5OjE2MCx3OjQwLGg6NDB9XX0sXG4gICAgMjcgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjgwLHk6MTYwLHc6NDAsaDo0MH1dfSxcbiAgICAyOCA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjI4MCx5OjIwMCx3OjQwLGg6NDB9XX0sXG4gICAgMjkgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzYwLHk6MTYwLHc6NDAsaDo0MH1dfSxcbiAgICAzMCA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyNDAseToyMDAsdzo0MCxoOjQwfV19LFxuXG4gICAgMzEgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6MjAwLHc6NDAsaDo0MH1dfSxcbiAgICAzMiA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozNjAseToyMDAsdzo0MCxoOjQwfV19LFxuICAgIDMzIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjQwMCx5OjIwMCx3OjQwLGg6NDB9XX0sXG4gICAgMzQgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6NDQwLHk6MjAwLHc6NDAsaDo0MH1dfSxcbiAgICAzNSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseToyNDAsdzo0MCxoOjQwfV19LFxuICAgIDM2IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6MzYwLHk6MjQwLHc6NDAsaDo0MH1dfSxcbiAgICAzNyA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDo0MDAseToyNDAsdzo0MCxoOjQwfV19LFxuICAgIDM4IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjQ0MCx5OjI0MCx3OjQwLGg6NDB9XX0sXG4gICAgMzkgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6MjgwLHc6NDAsaDo0MH1dfSxcbiAgICA0MCA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjM2MCx5OjI4MCx3OjQwLGg6NDB9XX0sXG4gICAgNDEgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo0MDAseToyODAsdzo0MCxoOjQwfV19LFxuICAgIDQyIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjQ0MCx5OjI4MCx3OjQwLGg6NDB9XX0sXG5cblxuICAgIFxufTtcblxubGV0IGNvbGxpc2lvbnMgPSB7XG5cdG5vbmVcdFx0OiAwLFxuXHRzb2xpZFx0XHQ6IDFcbn07XG5cbmxldCBvYmplY3RUeXBlcyA9IHtcblx0MSA6IHtcblx0XHRuYW1lIDogXCJGbG93ZXJcIixcblx0XHRzcHJpdGUgOiBbe3g6NDAseToxODAsdzo0MCxoOjIwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5ub25lLFxuXHRcdHpJbmRleCA6IDFcblx0fSxcblx0MiA6IHtcblx0XHRuYW1lIDogXCJmZW5jZVwiLFxuXHRcdHNwcml0ZSA6IFt7eDo0MCx5OjIwMCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcblx0fSxcblx0MyA6IHtcblx0XHRuYW1lIDogXCJUcmVlXCIsXG5cdFx0c3ByaXRlIDogW3t4OjgwLHk6MTYwLHc6ODAsaDo4MH1dLFxuXHRcdG9mZnNldCA6IFstMjAsLTIwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDNcbiAgICB9LFxuICAgIDQgOiB7XG5cdFx0bmFtZSA6IFwibWFzaHJvb21zXCIsXG5cdFx0c3ByaXRlIDogW3t4OjQwLHk6MTYwLHc6NDAsaDoyMH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMubm9uZSxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICA1IDoge1xuXHRcdG5hbWUgOiBcIlBpZyBTaG9wXCIsXG5cdFx0c3ByaXRlIDogW3t4OjE2MCx5OjE2MCx3OjgwLGg6ODB9XSxcblx0XHRvZmZzZXQgOiBbLTIwLC0yMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAzXG4gICAgfSxcbiAgICA2IDoge1xuXHRcdG5hbWUgOiBcImRvbnV0c1wiLFxuXHRcdHNwcml0ZSA6IFt7eDozNjAseTowLHc6ODAsaDoxMTV9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLm5vbmUsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgNyA6IHtcblx0XHRuYW1lIDogXCJjb29raW5nXCIsXG5cdFx0c3ByaXRlIDogW3t4OjE2MCx5OjgwLHc6ODAsaDo4MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMubm9uZSxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICA4IDoge1xuXHRcdG5hbWUgOiBcImNhcnBldFwiLFxuXHRcdHNwcml0ZSA6IFt7eDowLHk6ODAsdzo4MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5ub25lLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDkgOiB7XG5cdFx0bmFtZSA6IFwiZGVza1wiLFxuXHRcdHNwcml0ZSA6IFt7eDowLHk6NDAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxMCA6IHtcblx0XHRuYW1lIDogXCJjaGFpclwiLFxuXHRcdHNwcml0ZSA6IFt7eDozMjAseTowLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTEgOiB7XG5cdFx0bmFtZSA6IFwiVHJlZSBQbGFudFwiLFxuXHRcdHNwcml0ZSA6IFt7eDo0MCx5OjEyMCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDEyIDoge1xuXHRcdG5hbWUgOiBcImRydW1cIixcblx0XHRzcHJpdGUgOiBbe3g6MCx5OjI0MCx3OjgwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDEzIDoge1xuXHRcdG5hbWUgOiBcImluc3RydW1lbnRzXCIsXG5cdFx0c3ByaXRlIDogW3t4OjgwLHk6MjQwLHc6MTIwLGg6ODB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDE0IDoge1xuXHRcdG5hbWUgOiBcIkJvb2tTaGVsZlwiLFxuXHRcdHNwcml0ZSA6IFt7eDoyMDAseToyNDAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxNSA6IHtcblx0XHRuYW1lIDogXCJzYXhvcGhvbmVcIixcblx0XHRzcHJpdGUgOiBbe3g6MjQwLHk6MjQwLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTYgOiB7XG5cdFx0bmFtZSA6IFwiUmlnaHQgRmFjaW5nIENoYWlyXCIsXG5cdFx0c3ByaXRlIDogW3t4OjIwMCx5OjI4MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxufTtcblxuXG4vLyDnianlk4FcbmxldCBpdGVtVHlwZXMgPSB7XG4gICAgMSA6IHtcblx0XHRuYW1lIDogXCJjb2NvbnV0XCIsXG5cdFx0bWF4U3RhY2sgOiA1LFxuXHRcdHNwcml0ZSA6IFt7eDoyNDAseTowLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdXG4gICAgfSxcbiAgICAyIDoge1xuXHRcdG5hbWUgOiBcInN0cmF3YmVycnlcIixcblx0XHRtYXhTdGFjayA6IDUsXG5cdFx0c3ByaXRlIDogW3t4OjI4MCx5OjAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF1cblx0fVxufTtcblxuXG5cbmxldCBnYW1ldGlsZSA9IG51bGwsIGdhbWV0aWxlVVJMID0gXCJzcmMvaW1hZ2VzL3RpbGVzZXRlc3R0LnBuZ1wiLCBhcnRMb2FkZWQgPSBmYWxzZTtcblxuXG5cbi8vIOWIm+W7uuS4gOS4quinkuiJsiAobWl1bWl1KVxubGV0IG1pdW1pdSA9IG5ldyBNaXVNaXUoKTtcbi8vIOWKoOabtOWkmuinkuiJsuKsh1xuZnVuY3Rpb24gTWl1TWl1KCkge1xuICAgIHRoaXMudGlsZUZyb21cdD0gWzEsMV07XG4gICAgLy8gbWl1bWl155qE5L2N572uXG4gICAgdGhpcy50aWxlVG9cdFx0PSBbMTUsMTZdO1xuICAgIC8vIHRpbWUgaW4gbWlsbHNlY29uZHNcbiAgICB0aGlzLnRpbWVNb3ZlZFx0PSAwO1xuICAgIHRoaXMuZGVsYXlNb3ZlXHQ9IDcwMDtcblx0dGhpcy5kaW1lbnNpb25zXHQ9IFs0MCw0MF07XG4gICAgdGhpcy5wb3NpdGlvblx0PSBbNDUsNDVdO1xuICAgIFxuICAgIHRoaXMuZGlyZWN0aW9uXHQ9IGRpcmVjdGlvbnMudXA7XG5cdHRoaXMuc3ByaXRlcyA9IHt9O1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy51cF1cdD0gW3t4OjAseToxMjAsdzozMCxoOjMwfV07XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLnJpZ2h0XSA9IFt7eDowLHk6MTUwLHc6MzAsaDozMH1dO1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy5kb3duXSA9IFt7eDowLHk6MTgwLHc6MzAsaDozMH1dO1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy5sZWZ0XSA9IFt7eDowLHk6MjEwLHc6MzAsaDozMH1dO1xufVxuXG5cbi8vIOaKiuinkuiJsuaUvuWcqOWcsOegluS4ilxuTWl1TWl1LnByb3RvdHlwZS5sb2NhdGlvbiA9IGZ1bmN0aW9uKHgsIHkpIHtcblx0dGhpcy50aWxlRnJvbVx0PSBbeCx5XTtcbiAgICB0aGlzLnRpbGVUb1x0XHQ9IFt4LHldO1xuICAgIC8vIHggYW5kIHkgcG9zaXRpb24gb2YgdGhlIHRpbGUuIHVwZGF0ZSB0aGUgdGlsZUZyb20gYW5kIHRpbGVUbyBwcm9wZXJ0aWVzIHRvIHRoZSBuZXcgdGlsZSBjb29yZGluYXRlc1xuICAgIC8vIGNhbGN1bGF0ZXMgdGhlIHBpeGVsIHBvc2l0aW9uIG9mIHRoZSBjaGFyYWN5ZXIgdXNlIGJlbG93XG5cdHRoaXMucG9zaXRpb25cdD0gWygoIHRpbGVXaWR0aCAqIHggKSsoICh0aWxlV2lkdGggLSB0aGlzLmRpbWVuc2lvbnNbMF0pIC8gMiApKSxcblx0XHQoKCB0aWxlSGVpZ2h0ICogeSApKyggKHRpbGVIZWlnaHQgLSB0aGlzLmRpbWVuc2lvbnNbMV0pIC8gMiApKV07XG59O1xuXG4vLyDmoLnmja7mr4/kuKrluKfmlbDmib7liLDop5LoibLkvY3nva5cbk1pdU1pdS5wcm90b3R5cGUucHJvY2Vzc01vdmVtZW50ID0gZnVuY3Rpb24odCkge1xuICAgIC8vIGlmIGNoYXIgdGlsZVRvID09IHRpbGVGcm9tIGNoYXIgaXMgbm90IG1vdmluZywgc28gcmV0dXJuIGZhbHNlXG5cdGlmKCB0aGlzLnRpbGVGcm9tWzBdID09IHRoaXMudGlsZVRvWzBdICYmIHRoaXMudGlsZUZyb21bMV0gPT0gdGhpcy50aWxlVG9bMV0pIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgLy8gaWYgdGhlIGFtb3VudCBvZiB0aW1lIHBhc3NlZCBzaW5jZSBjaGFyIGJlZ2FuIGl0cyBjdXJyZW50IG1vdmUgPj0gdGhlIHRpbWUgZm9yIGNoYXIgdG8gbW92ZSAxIHRpbGUuIHdlIHNldCBwb3NpdGlvbiB1c2luZyBsb2NhdGlvbiBmdW5jdGlvblxuICAgIC8vIGFrYTogaWYgY2hhciBzdGlsbCBtb3Zpbmdcblx0aWYoKHQgLSB0aGlzLnRpbWVNb3ZlZCkgPj0gdGhpcy5kZWxheU1vdmUpIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbih0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pO1xuICAgICAgICBpZihtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pXS5ldmVudEVudGVyICE9IG51bGwpIHtcblx0XHRcdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSldLmV2ZW50RW50ZXIodGhpcyk7XG4gICAgICAgIH1cblx0fSBlbHNlIHtcbiAgICAgICAgLy8gY3VycmVudCBwb3NpdGlvbiBvbiBjYW52YXNcblx0XHR0aGlzLnBvc2l0aW9uWzBdID0gKHRoaXMudGlsZUZyb21bMF0gKiB0aWxlV2lkdGgpICsgKCh0aWxlV2lkdGggLSB0aGlzLmRpbWVuc2lvbnNbMF0pIC8gMik7XG5cdFx0dGhpcy5wb3NpdGlvblsxXSA9ICh0aGlzLnRpbGVGcm9tWzFdICogdGlsZUhlaWdodCkgKyAoKHRpbGVIZWlnaHQgLSB0aGlzLmRpbWVuc2lvbnNbMV0pIC8gMik7XG5cbiAgICAgICAgLy8gaWYgY2hhciBpcyBtb3Zpbmcgb24geCBjb29yZGluYXRlLCBjYWxjdWxhdGUgcGl4ZWxzXG5cdFx0aWYodGhpcy50aWxlVG9bMF0gIT0gdGhpcy50aWxlRnJvbVswXSkge1xuICAgICAgICAgICAgLy8gZGlmZmVyZW5jZSA9IGRpc3RhbmNlIG1vdmVkXG4gICAgICAgICAgICAvLyDliqDlh4/np7vliqjnmoTlnLDnoJbliLDop5LoibLnmoTkvY3lrZBcblx0XHRcdGxldCBkaWZmZXJlbmNlID0gKHRpbGVXaWR0aCAvIHRoaXMuZGVsYXlNb3ZlKSAqICh0IC0gdGhpcy50aW1lTW92ZWQpO1xuXHRcdFx0dGhpcy5wb3NpdGlvblswXSs9ICh0aGlzLnRpbGVUb1swXSA8IHRoaXMudGlsZUZyb21bMF0gPyAwIC0gZGlmZmVyZW5jZSA6IGRpZmZlcmVuY2UpO1xuXHRcdH1cblx0ICAgIGlmKHRoaXMudGlsZVRvWzFdICE9IHRoaXMudGlsZUZyb21bMV0pIHtcblx0XHRcdGxldCBkaWZmZXJlbmNlID0gKHRpbGVIZWlnaHQgLyB0aGlzLmRlbGF5TW92ZSkgKiAodC10aGlzLnRpbWVNb3ZlZCk7XG5cdFx0XHR0aGlzLnBvc2l0aW9uWzFdKz0gKHRoaXMudGlsZVRvWzFdPHRoaXMudGlsZUZyb21bMV0gPyAwIC0gZGlmZmVyZW5jZSA6IGRpZmZlcmVuY2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJvdW5kIHggJiB5IHRvIHdob2xlIG51bWJlciDpnIDopoHmlbTmlbBcblx0XHR0aGlzLnBvc2l0aW9uWzBdID0gTWF0aC5yb3VuZCh0aGlzLnBvc2l0aW9uWzBdKTtcblx0XHR0aGlzLnBvc2l0aW9uWzFdID0gTWF0aC5yb3VuZCh0aGlzLnBvc2l0aW9uWzFdKTtcbiAgICB9XG4gICAgLy8gdHJ1ZSA9IGNoYXIgaXMgY3VycmVudGx5IG1vdmluZ1xuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuXG4vLyBpZiBjaGFyIGNhbiBtb3ZlIGluIGEgc3BlY2lmaWMgZGlyZWNcbk1pdU1pdS5wcm90b3R5cGUucGxhY2VzQ2FuR28gPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgLy8gaWYgeCBhbmQgeSBpcyBpbiBtYXAgYm91bmRcbiAgICBpZih4IDwgMCB8fCB4ID49IG1hcFdpZHRoIHx8IHkgPCAwIHx8IHkgPj0gbWFwSGVpZ2h0KSB7IFxuXHRcdHJldHVybiBmYWxzZTsgXG5cdH1cbiAgICAvLyBpZiB0aGUgdGlsZSBpcyBwYXRoIHRpbGUgKG9ubHkgbW92ZSBpZiBpdHMgYSBwYXRoKVxuICAgICAgICBpZih0aWxlVHlwZXNbZ2FtZU1hcFt0b0luZGV4KHgseSldXS5mbG9vciAhPSBmbG9vclR5cGVzLnBhdGgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIGlmKG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLm9iamVjdCAhPSBudWxsKSB7XG5cdFx0XHRsZXQgb2JqZWN0ID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0ub2JqZWN0O1xuXHRcdFx0aWYob2JqZWN0VHlwZXNbb2JqZWN0LnR5cGVdLmNvbGxpc2lvbiA9PSBjb2xsaXNpb25zLnNvbGlkKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuTWl1TWl1LnByb3RvdHlwZS5jYW5Hb1VwID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLnBsYWNlc0NhbkdvKHRoaXMudGlsZUZyb21bMF0sIHRoaXMudGlsZUZyb21bMV0gLSAxKTsgfTtcbk1pdU1pdS5wcm90b3R5cGUuY2FuR29Eb3duID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLnBsYWNlc0NhbkdvKHRoaXMudGlsZUZyb21bMF0sIHRoaXMudGlsZUZyb21bMV0gKyAxKTsgfTtcbk1pdU1pdS5wcm90b3R5cGUuY2FuR29MZWZ0ID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLnBsYWNlc0NhbkdvKHRoaXMudGlsZUZyb21bMF0tMSwgdGhpcy50aWxlRnJvbVsxXSk7IH07XG5NaXVNaXUucHJvdG90eXBlLmNhbkdvUmlnaHQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucGxhY2VzQ2FuR28odGhpcy50aWxlRnJvbVswXSsxLCB0aGlzLnRpbGVGcm9tWzFdKTsgfTtcblxuTWl1TWl1LnByb3RvdHlwZS5nb0xlZnQgPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzBdLT0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMubGVmdDsgfTtcbk1pdU1pdS5wcm90b3R5cGUuZ29SaWdodCA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMF0rPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5yaWdodDsgfTtcbk1pdU1pdS5wcm90b3R5cGUuZ29VcCA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMV0tPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy51cDsgfTtcbk1pdU1pdS5wcm90b3R5cGUuZ29Eb3duID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1sxXSs9IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLmRvd247IH07XG5cblxuXG4vLyBjcmVhdGUgYSBjYW1lcmEgb2JqZWN0XG5sZXQgY2FtZXJhID0ge1xuICAgIHNjcmVlbjogWzAsMF0sXG4gICAgLy8g55S76Z2i5bem5LiK6KeSXG4gICAgc3RhcnRpbmdQb2ludDogWzAsMF0sXG4gICAgLy8g55S76Z2i5Y+z5LiL6KeSXG4gICAgZW5kaW5nUG9pbnQ6IFswLDBdLFxuICAgIC8vIOivr+W3rlxuICAgIG9mZnNldDogWzAsMF0sXG4gICAgLy8gdXBkYXRlIGZ1bmN0aW9uLCB4IHkgaXMgb3VyIGNlbnRlciBhcmVhXG4gICAgdXBkYXRlOiBmdW5jdGlvbihvZmZzZXRYLCBvZmZzZXRZKSB7XG4gICAgICAgIC8vIG9mZnNldDogaGFsZiB0aGUgY2FudmFzIHdpZHRoIHx8IGhlaWdodCAocm91bmQgZG93biB0byB3aG9sZSBudW0pXG5cdFx0dGhpcy5vZmZzZXRbMF0gPSBNYXRoLmZsb29yKCh0aGlzLnNjcmVlblswXS8yKSAtIG9mZnNldFgpO1xuICAgICAgICB0aGlzLm9mZnNldFsxXSA9IE1hdGguZmxvb3IoKHRoaXMuc2NyZWVuWzFdLzIpIC0gb2Zmc2V0WSk7XG5cbiAgICAgICAgLy8g5Zyw56CW5Zyo5Zyw5Zu+5LiK55qE5L2N572uXG4gICAgICAgIGxldCB0aWxlID0gWyBNYXRoLmZsb29yKG9mZnNldFggLyB0aWxlV2lkdGgpLCBNYXRoLmZsb29yKG9mZnNldFkgLyB0aWxlSGVpZ2h0KSBdO1xuICAgICAgICAvLyAg6K6h566X56ys5LiA5Liq5Zyw56CW5L2N572u5ZyoeOe6v+S4iu+8miDmnIDlpKflnLDnoJbmlbDph48gLSDlsY/luZXnmoTkuIDljYpcbiAgICAgICAgLy8gIOWkmuWHj+WOuzHov5nmoLflnLDnoJblj6/ku6VzaG935LiA5Y2K5Zyo5bGP5bmV5LiKXG4gICAgICAgIHRoaXMuc3RhcnRpbmdQb2ludFswXSA9IHRpbGVbMF0gLSBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzBdLzIpIC8gdGlsZVdpZHRoKSAgLSAxO1xuXHRcdHRoaXMuc3RhcnRpbmdQb2ludFsxXSA9IHRpbGVbMV0gLSBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzFdLzIpIC8gdGlsZUhlaWdodCkgIC0gMTtcblxuICAgICAgICAvLyDnoa7kv5145ZKMeemDveWkp+S6jjDopoHkuYjkvJrlnKjlnLDlm77lpJZcbiAgICAgICAgaWYodGhpcy5zdGFydGluZ1BvaW50WzBdIDw9IC0xKSB7IHRoaXMuc3RhcnRpbmdQb2ludFswXSA9IDA7IH1cblx0XHRpZih0aGlzLnN0YXJ0aW5nUG9pbnRbMV0gPD0gLTEpIHsgdGhpcy5zdGFydGluZ1BvaW50WzFdID0gMDsgfVxuXG4gICAgICAgIHRoaXMuZW5kaW5nUG9pbnRbMF0gPSB0aWxlWzBdICsgMSArIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMF0vMikgLyB0aWxlV2lkdGgpO1xuXHRcdHRoaXMuZW5kaW5nUG9pbnRbMV0gPSB0aWxlWzFdICsgMSArIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMV0vMikgLyB0aWxlSGVpZ2h0KTtcblxuXHRcdGlmKHRoaXMuZW5kaW5nUG9pbnRbMF0gPj0gbWFwV2lkdGgpIHsgdGhpcy5lbmRpbmdQb2ludFswXSA9IG1hcFdpZHRoIC0xOyB9XG5cdFx0aWYodGhpcy5lbmRpbmdQb2ludFsxXSA+PSBtYXBIZWlnaHQpIHsgdGhpcy5lbmRpbmdQb2ludFsxXSA9IG1hcEhlaWdodCAtIDE7IH1cbiAgICAgICAgfVxufTtcblxuXG4vLyBidWlsZGluZ3NcblxubGV0IG1hcFRpbGVEYXRhID0gbmV3IFRpbGVNYXAoKTtcblxubGV0IGJ1aWxkaW5nc0xvY2F0aW9uID0gW1xuXHR7IHg6MTEsIHk6NSwgdzo0LCBoOjUsIGRhdGE6IFtcblx0XHQxMCwgMTEsIDExLCAxMixcbiAgICAgICAgMTMsIDE0LCAxNCwgMTUsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCxcbiAgICAgICAgMTYsIDE3LCAxNiwgMThcblx0XX0sXG5cdHsgeDoxNiwgeTo1LCB3OjcsIGg6NSwgZGF0YTogW1xuXHRcdDEwLCAxMSwgMTEsIDExLCAxMSwgMTIsIDEyLFxuICAgICAgICAxMywgMTUsIDEzLCAxNCwgMTQsIDE1LCAxNSxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTksIDE5LCAxOCwgMTgsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE5LCAxOSwgMTgsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOSwgMTcsIDE4LCAxOFxuXHRdfSxcblx0eyB4OjE0LCB5OjEzLCB3OjQsIGg6NCwgZGF0YTogW1xuICAgICAgICAxMCwgMTEsIDExLCAxMixcbiAgICAgICAgMTMsIDE0LCAxNCwgMTUsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LFxuICAgICAgICAxNiwgMTcsIDE2LCAxOFxuXHRdfVxuXTtcblxuLy8gc3RvcmVzIGluZm9ybWF0aW9uIGZvciBlYWNoIG1hcCB0aWxlXG5mdW5jdGlvbiBUaWxlKHRpbGVYLCB0aWxlWSwgdGlsZVR5cGUpXG57XG4gICAgLy8gdGlsZVksIHRpbGVYID0gdGhlIHBvc2l0aW9uIG9mIHRoZSB0aWxlIG9uIHRoZSBtYXBcblx0dGhpcy54XHRcdFx0PSB0aWxlWDtcblx0dGhpcy55XHRcdFx0PSB0aWxlWTtcblx0dGhpcy50eXBlXHRcdD0gdGlsZVR5cGU7XG5cdHRoaXMuYnVpbGRpbmdcdFx0PSBudWxsO1xuICAgIHRoaXMuYnVpbGRpbmdUeXBlXHQ9IDA7XG4gICAgLy8gIHBvaW50ZXIgdG8gYSBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gYSBNaXVNaXUgaGFzIGNvbXBsZXRlZCBtb3Zpbmcgb24gdG8gdGhpcyB0aWxlXG4gICAgdGhpcy5ldmVudEVudGVyXHQ9IG51bGw7XG4gICAgdGhpcy5vYmplY3RcdFx0PSBudWxsO1xuXG59XG5cbi8vIOWCqOWtmOeuoeeQhuWcsOWbvuaVsOaNrlxuZnVuY3Rpb24gVGlsZU1hcCgpIHtcblx0dGhpcy5tYXBcdD0gW107XG5cdHRoaXMud1x0XHQ9IDA7XG4gICAgdGhpcy5oXHRcdD0gMDtcblx0dGhpcy5sZXZlbHNcdD0gNDtcbn1cblxuVGlsZU1hcC5wcm90b3R5cGUuYnVpbGRNYXBGcm9tRGF0YSA9IGZ1bmN0aW9uKHRpbGVJZCwgdywgaCkge1xuXHR0aGlzLndcdFx0PSB3O1xuICAgIHRoaXMuaFx0XHQ9IGg7XG5cbiAgICBpZih0aWxlSWQubGVuZ3RoIT0odyAqIGgpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcbiAgICB0aGlzLm1hcC5sZW5ndGhcdD0gMDtcbiAgICBcdGZvcihsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcblx0XHQgICAgZm9yKGxldCB4ID0gMDsgeCA8IHc7IHgrKykge1xuXHRcdFx0dGhpcy5tYXAucHVzaCggbmV3IFRpbGUoeCwgeSwgdGlsZUlkWyAoeCArICh3ICogeSkpXSkgKTtcblx0XHR9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcblxuXG5UaWxlTWFwLnByb3RvdHlwZS5hZGRCdWlsZGluZ3MgPSBmdW5jdGlvbihidWlsZGluZ3MpIHtcblx0Zm9yKGxldCBpIGluIGJ1aWxkaW5ncykge1xuICAgICAgICBsZXQgYnVpbGRpbmcgPSBidWlsZGluZ3NbaV07XG4gICAgICAgIGlmKGJ1aWxkaW5nLnggPCAwIHx8IGJ1aWxkaW5nLnkgPCAwIHx8IGJ1aWxkaW5nLnggPj0gdGhpcy53IHx8IGJ1aWxkaW5nLnkgPj0gdGhpcy5oIHx8XHQoYnVpbGRpbmcueCtidWlsZGluZy53KT50aGlzLncgfHwgKGJ1aWxkaW5nLnkrYnVpbGRpbmcuaCk+dGhpcy5oIHx8IGJ1aWxkaW5nLmRhdGEubGVuZ3RoIT0oYnVpbGRpbmcudypidWlsZGluZy5oKSkge1xuXHRcdFx0Y29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IGJ1aWxkaW5nLmg7IHkrKykge1xuXHRcdFx0Zm9yKGxldCB4ID0gMDsgeCA8IGJ1aWxkaW5nLnc7IHgrKykge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlSWR4ID0gKCgoYnVpbGRpbmcueSArIHkpICogdGhpcy53KSArIGJ1aWxkaW5nLnggKyB4KTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFt0aWxlSWR4XS5idWlsZGluZyA9IGJ1aWxkaW5nO1xuXHRcdFx0XHR0aGlzLm1hcFt0aWxlSWR4XS5idWlsZGluZ1R5cGUgPSBidWlsZGluZy5kYXRhWyggKHkgKiBidWlsZGluZy53KSArIHgpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbi8vIOeJqeWTgeaRhuaUvlxuZnVuY3Rpb24gR2FtZU9iamVjdHMobnQpIHtcblx0dGhpcy54ID0gMDtcblx0dGhpcy55ID0gMDtcblx0dGhpcy50eXBlID0gbnQ7XG59XG5cbkdhbWVPYmplY3RzLnByb3RvdHlwZS5wbGFjZUF0ID0gZnVuY3Rpb24obngsIG55KSB7XG5cdGlmKG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMueCwgdGhpcy55KV0ub2JqZWN0ID09IHRoaXMpIHtcblx0XHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLngsIHRoaXMueSldLm9iamVjdCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMueCA9IG54O1xuXHR0aGlzLnkgPSBueTtcblx0XG5cdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KG54LCBueSldLm9iamVjdCA9IHRoaXM7XG59O1xuXG5cblxuLy8gY29udmVydCB4LCB5IGludG8gaW5kZXggaW4gZ2FtZU1hcCBhcnJcbmZ1bmN0aW9uIHRvSW5kZXgoeCwgeSkge1xuXHRyZXR1cm4oeCArIChtYXBXaWR0aCAqIHkpKTtcbn1cblxuZnVuY3Rpb24gZ2V0RnJhbWUoc3ByaXRlLCB0aW1lTGFzdCwgdGltZSwgYW5pbWF0aW9uKSB7XG5cdGlmKCFhbmltYXRpb24pIHsgcmV0dXJuIHNwcml0ZVswXTsgfVxuXHR0aW1lID0gdGltZSAlIHRpbWVMYXN0O1xuXG5cdGZvcih4IGluIHNwcml0ZSkge1xuXHRcdGlmKHNwcml0ZVt4XS5lbmQ+PXRpbWUpIHsgcmV0dXJuIHNwcml0ZVt4XTsgfVxuXHR9XG59XG5cbi8vIOeVjOmdomxvYWTlrozvvIzlvIDlp4tsb29wXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWl1bWl1VGFsZVwiKS5nZXRDb250ZXh0KFwiMmRcIik7XG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7XG4gICAgXG4gICAgLy8gYWRkIGV2ZW50TGlzdGVuZXJzIGZvciB0aGUga2V5ZG93bmEgYW5kIGtleXVwXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoZS5rZXlDb2RlID49IDM3ICYmIGUua2V5Q29kZSA8PTQwICkgeyBoZWxkS2V5c1tlLmtleUNvZGVdID0gdHJ1ZTsgfVxuXHR9KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoZS5rZXlDb2RlID49IDM3ICYmIGUua2V5Q29kZSA8PSA0MCkgeyBoZWxkS2V5c1tlLmtleUNvZGVdID0gZmFsc2U7IH1cblx0fSk7XG5cbiAgICAvLyBjYW52YXPlsLrlr7gg5L+d5a2Y5YiwIOebuOaculxuICAgIGNhbWVyYS5zY3JlZW4gPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXVtaXVUYWxlXCIpLndpZHRoLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pdW1pdVRhbGVcIikuaGVpZ2h0XTtcbiAgICAgICAgXG4gICAgZ2FtZXRpbGUgPSBuZXcgSW1hZ2UoKTtcblx0Z2FtZXRpbGUub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdGN0eCA9IG51bGw7XG5cdFx0YWxlcnQoXCJGYWlsZWQgbG9hZGluZyBnYW1ldGlsZS5cIik7XG5cdH07XG5cdGdhbWV0aWxlLm9ubG9hZCA9IGZ1bmN0aW9uKCkgeyBcblx0XHRhcnRMb2FkZWQgPSB0cnVlOyBcblx0fTtcbiAgICBnYW1ldGlsZS5zcmMgPSBnYW1ldGlsZVVSTDtcbiAgICBcbiAgICBtYXBUaWxlRGF0YS5idWlsZE1hcEZyb21EYXRhKGdhbWVNYXAsIG1hcFdpZHRoLCBtYXBIZWlnaHQpO1xuXHRtYXBUaWxlRGF0YS5hZGRCdWlsZGluZ3MoYnVpbGRpbmdzTG9jYXRpb24pO1xuXHRtYXBUaWxlRGF0YS5tYXBbKCgyICogbWFwV2lkdGgpICsgMildLmV2ZW50RW50ZXIgPSBmdW5jdGlvbigpIHsgXG5cdFx0Y29uc29sZS5sb2coXCJFbnRlcmVkIHRpbGUgMiwyXCIpOyBcblx0fTtcblx0XG5cdC8vIOeJqeWTgeaRhuaUvuS9jee9rlxuXHRsZXQgZmVuY2UxID0gbmV3IEdhbWVPYmplY3RzKDIpOyBmZW5jZTEucGxhY2VBdCgxNSwgNik7XG4gICAgXG4gICAgbGV0IGZsb3dlcjEgPSBuZXcgR2FtZU9iamVjdHMoMSk7IGZsb3dlcjEucGxhY2VBdCgxMSwgMTApO1xuICAgIGxldCBmbG93ZXIyID0gbmV3IEdhbWVPYmplY3RzKDEpOyBmbG93ZXIyLnBsYWNlQXQoMTMsIDEwKTtcbiAgICBsZXQgZmxvd2VyMyA9IG5ldyBHYW1lT2JqZWN0cygxKTsgZmxvd2VyMy5wbGFjZUF0KDE0LCAxMCk7XG4gICAgXG5cdGxldCB0cmVlMSA9IG5ldyBHYW1lT2JqZWN0cygzKTsgdHJlZTEucGxhY2VBdCgxMCwgMTEpO1xuXHRsZXQgdHJlZTIgPSBuZXcgR2FtZU9iamVjdHMoMyk7IHRyZWUyLnBsYWNlQXQoMTUsIDExKTtcblx0bGV0IHRyZWUzID0gbmV3IEdhbWVPYmplY3RzKDMpOyB0cmVlMy5wbGFjZUF0KDEzLCAxMSk7XHRcbiAgICBsZXQgdHJlZTQgPSBuZXcgR2FtZU9iamVjdHMoMyk7IHRyZWU0LnBsYWNlQXQoMTgsIDExKTtcbiAgXG4gICAgbGV0IG1hc2hyb29tMSA9IG5ldyBHYW1lT2JqZWN0cyg0KTsgbWFzaHJvb20xLnBsYWNlQXQoOCw5KTtcbiAgICBsZXQgbWFzaHJvb20yID0gbmV3IEdhbWVPYmplY3RzKDQpOyBtYXNocm9vbTIucGxhY2VBdCgxNSw3KTtcblxuXHRsZXQgcGlnU2hvcDEgPSBuZXcgR2FtZU9iamVjdHMoNSk7IHBpZ1Nob3AxLnBsYWNlQXQoOSwgOSk7XG5cblxuICAgIGxldCBkb251dHMgPSBuZXcgR2FtZU9iamVjdHMoNik7IGRvbnV0cy5wbGFjZUF0KDExLCA1KTtcblxuICAgIGxldCBjb29raW5nID0gbmV3IEdhbWVPYmplY3RzKDcpOyBjb29raW5nLnBsYWNlQXQoMTMsIDUpO1xuXG4gICAgbGV0IGNhcnBldCA9IG5ldyBHYW1lT2JqZWN0cyg4KTsgY2FycGV0LnBsYWNlQXQoMTMsNyk7XG5cbiAgICBsZXQgZGVzayA9IG5ldyBHYW1lT2JqZWN0cyg5KTsgZGVzay5wbGFjZUF0KDE0LDgpO1xuXG4gICAgbGV0IGNoYWlyID0gbmV3IEdhbWVPYmplY3RzKDEwKTsgY2hhaXIucGxhY2VBdCgxNCw3KTtcbiAgICBsZXQgY2hhaXIyID0gbmV3IEdhbWVPYmplY3RzKDE2KTsgY2hhaXIyLnBsYWNlQXQoMTgsNyk7XG5cbiAgICBsZXQgdHJlZVBsYW50ID0gbmV3IEdhbWVPYmplY3RzKDExKTsgdHJlZVBsYW50LnBsYWNlQXQoMTEsOCk7XG5cbiAgICBsZXQgZHJ1bSA9IG5ldyBHYW1lT2JqZWN0cygxMik7IGRydW0ucGxhY2VBdCgyMSw2KTtcblxuICAgIGxldCBpbnN0cnVtZW50cyA9IG5ldyBHYW1lT2JqZWN0cygxMyk7IGluc3RydW1lbnRzLnBsYWNlQXQoMTgsNSk7XG5cbiAgICBsZXQgYm9va1NoZWxmMSA9IG5ldyBHYW1lT2JqZWN0cygxNCk7IGJvb2tTaGVsZjEucGxhY2VBdCgxNiw2KTtcbiAgICBsZXQgYm9va1NoZWxmMiA9IG5ldyBHYW1lT2JqZWN0cygxNCk7IGJvb2tTaGVsZjIucGxhY2VBdCgxNiw3KTtcblxuICAgIGxldCBzYXhvcGhvbmUgPSBuZXcgR2FtZU9iamVjdHMoMTUpOyBzYXhvcGhvbmUucGxhY2VBdCgxOSw3KTtcblxufTtcblxuXG5cblxuLy8gbWFpbiBmdW5jdGlvblxuZnVuY3Rpb24gZHJhd0dhbWUoKSB7XG4gICAgaWYgKGN0eCA9PSBudWxsKSB7IFxuXHRcdHJldHVybjsgXG5cdH1cbiAgICBpZiAoIWFydExvYWRlZCkgeyBcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpOyByZXR1cm47IFxuXHR9XG5cblx0bGV0IGN1cnJlbnRGcmFtZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIC8vIGZyYW1lY291bnQgXG5cdGxldCBzZWMgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcblx0aWYoc2VjICE9IGN1cnJlbnRTZWNvbmQpe1xuXHRcdGN1cnJlbnRTZWNvbmQgPSBzZWM7XG5cdFx0ZnJhbWVzTGFzdFNlY29uZCA9IGZyYW1lQ291bnQ7XG5cdFx0ZnJhbWVDb3VudCA9IDE7XG5cdH0gZWxzZSB7IFxuICAgICAgICBmcmFtZUNvdW50Kys7IFxuICAgIH1cblxuICAgIC8vIG1pdW1pdSBtb3ZlbWVudFxuXHRpZighbWl1bWl1LnByb2Nlc3NNb3ZlbWVudChjdXJyZW50RnJhbWVUaW1lKSkge1xuXHRcdGlmKGhlbGRLZXlzWzM4XSAmJiBtaXVtaXUuY2FuR29VcCgpKXsgXG4gICAgICAgICAgICBtaXVtaXUuZ29VcChjdXJyZW50RnJhbWVUaW1lKTsgXG4gICAgICAgIH0gZWxzZSBpZiAoaGVsZEtleXNbNDBdICYmIG1pdW1pdS5jYW5Hb0Rvd24oKSkgeyBcbiAgICAgICAgICAgIG1pdW1pdS5nb0Rvd24oY3VycmVudEZyYW1lVGltZSk7IFxuICAgICAgICB9IGVsc2UgaWYoaGVsZEtleXNbMzddICYmIG1pdW1pdS5jYW5Hb0xlZnQoKSkgeyBcbiAgICAgICAgICAgIG1pdW1pdS5nb0xlZnQoY3VycmVudEZyYW1lVGltZSk7IFxuICAgICAgICB9IGVsc2UgaWYoaGVsZEtleXNbMzldICYmIG1pdW1pdS5jYW5Hb1JpZ2h0KCkpIHsgXG4gICAgICAgICAgICBtaXVtaXUuZ29SaWdodChjdXJyZW50RnJhbWVUaW1lKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjYW1lcmHot5/nnYBtaXVtaXXotbBcbiAgICAgICAgY2FtZXJhLnVwZGF0ZShtaXVtaXUucG9zaXRpb25bMF0gKyAobWl1bWl1LmRpbWVuc2lvbnNbMF0gLyAyKSxcbiAgICAgICAgICAgIG1pdW1pdS5wb3NpdGlvblsxXSArIChtaXVtaXUuZGltZW5zaW9uc1sxXSAvIDIpKTtcblxuXHQgICAgbGV0IG1pdW1pdUJ1aWxkaW5nMSA9IG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KFxuXHRcdG1pdW1pdS50aWxlRnJvbVswXSwgbWl1bWl1LnRpbGVGcm9tWzFdKV0uYnVpbGRpbmc7XG5cdCAgICBsZXQgbWl1bWl1QnVpbGRpbmcyID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoXG5cdFx0bWl1bWl1LnRpbGVUb1swXSwgbWl1bWl1LnRpbGVUb1sxXSldLmJ1aWxkaW5nO1xuXG4gICAgICAgIC8vIOa4hemZpGxhc3QgZnJhbWVcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FtZXJhLnNjcmVlblswXSwgY2FtZXJhLnNjcmVlblsxXSk7XG4gICAgXG5cbiAgICBmb3IobGV0IHogPSAwOyB6IDwgbWFwVGlsZURhdGEubGV2ZWxzOyB6KyspIHtcblx0XHRmb3IobGV0IHkgPSBjYW1lcmEuc3RhcnRpbmdQb2ludFsxXTsgeSA8PSBjYW1lcmEuZW5kaW5nUG9pbnRbMV07ICsreSkge1xuXHRcdCAgICBmb3IobGV0IHggPSBjYW1lcmEuc3RhcnRpbmdQb2ludFswXTsgeCA8PSBjYW1lcmEuZW5kaW5nUG9pbnRbMF07ICsreCkge1xuICAgICAgICAgICAgICAgIGlmKHo9PTApIHtcblx0XHRcdFx0XHRsZXQgdGlsZSA9IHRpbGVUeXBlc1ttYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS50eXBlXTtcblxuXHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsIFxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZS5zcHJpdGVbMF0ueCwgXG5cdFx0XHRcdFx0XHRcdFx0XHR0aWxlLnNwcml0ZVswXS55LCBcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGUuc3ByaXRlWzBdLncsIFxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZS5zcHJpdGVbMF0uaCxcblx0XHRcdFx0XHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCksIFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArICh5ICogdGlsZUhlaWdodCksIFxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZVdpZHRoLCBcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGVIZWlnaHRcblx0XHRcdFx0XHRcdFx0XHQpO1xuICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0bGV0IG9iamVjdCA9IG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLm9iamVjdDtcblx0XHRcdFx0aWYob2JqZWN0ICE9IG51bGwgJiYgb2JqZWN0VHlwZXNbb2JqZWN0LnR5cGVdLnpJbmRleCA9PSB6KSB7XG5cdFx0XHRcdFx0bGV0IG9iamVjdFR5cGUgPSBvYmplY3RUeXBlc1tvYmplY3QudHlwZV07XG5cdFx0XHRcdCBcblx0XHRcdFx0XHRjdHguZHJhd0ltYWdlKGdhbWV0aWxlLFxuXHRcdFx0XHRcdFx0XHRcdG9iamVjdFR5cGUuc3ByaXRlWzBdLngsIFxuXHRcdFx0XHRcdFx0XHRcdG9iamVjdFR5cGUuc3ByaXRlWzBdLnksXG5cdFx0XHRcdFx0XHRcdFx0b2JqZWN0VHlwZS5zcHJpdGVbMF0udywgXG5cdFx0XHRcdFx0XHRcdFx0b2JqZWN0VHlwZS5zcHJpdGVbMF0uaCxcblx0XHRcdFx0XHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgKHggKiB0aWxlV2lkdGgpICsgb2JqZWN0VHlwZS5vZmZzZXRbMF0sXG5cdFx0XHRcdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArICh5ICogdGlsZUhlaWdodCkgKyBvYmplY3RUeXBlLm9mZnNldFsxXSxcblx0XHRcdFx0XHRcdFx0XHRvYmplY3RUeXBlLnNwcml0ZVswXS53LCBcblx0XHRcdFx0XHRcdFx0XHRvYmplY3RUeXBlLnNwcml0ZVswXS5oXG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG4gICAgICAgICAgICAgICBpZih6ID09IDIgJiYgbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmdUeXBlICE9IDAgJiYgbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmcgIT0gbWl1bWl1QnVpbGRpbmcxICYmIG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLmJ1aWxkaW5nICE9IG1pdW1pdUJ1aWxkaW5nMikge1xuICAgICAgICAgICAgICAgICAgICB0aWxlID0gdGlsZVR5cGVzW21hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLmJ1aWxkaW5nVHlwZV07XG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZSA9IGdldEZyYW1lKHRpbGUuc3ByaXRlLCB0aWxlLnNwcml0ZXRpbWVMYXN0LCB0aWxlLmFuaW1hdGlvbik7XG5cdFx0XHRcdFx0Y3R4LmRyYXdJbWFnZShnYW1ldGlsZSwgXG5cdFx0XHRcdFx0XHRcdFx0XHRzcHJpdGUueCwgXG5cdFx0XHRcdFx0XHRcdFx0XHRzcHJpdGUueSwgXG5cdFx0XHRcdFx0XHRcdFx0XHRzcHJpdGUudywgXG5cdFx0XHRcdFx0XHRcdFx0XHRzcHJpdGUuaCwgXG5cdFx0XHRcdFx0XHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgKHggKiB0aWxlV2lkdGgpLCBcblx0XHRcdFx0XHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMV0gKyAoeSAqIHRpbGVIZWlnaHQpLCBcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGVXaWR0aCwgXG5cdFx0XHRcdFx0XHRcdFx0XHR0aWxlSGVpZ2h0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuICAgIFx0fVxuXG5cdFx0aWYgKHogPT0gMSkge1xuXHRcdFx0XHRsZXQgc3ByaXRlID0gbWl1bWl1LnNwcml0ZXNbbWl1bWl1LmRpcmVjdGlvbl07XG5cdFx0XHRcdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsXG5cdFx0XHRcdFx0c3ByaXRlWzBdLngsIHNwcml0ZVswXS55LFxuXHRcdFx0XHRcdHNwcml0ZVswXS53LCBzcHJpdGVbMF0uaCxcblx0XHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgbWl1bWl1LnBvc2l0aW9uWzBdLFxuXHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMV0gKyBtaXVtaXUucG9zaXRpb25bMV0sXG5cdFx0XHRcdFx0bWl1bWl1LmRpbWVuc2lvbnNbMF0sIG1pdW1pdS5kaW1lbnNpb25zWzFdXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHR9XG4gICAgXG4gICAgLy8gZHJhdyB0aGUgbWl1bWl1XG4gICAgbGV0IHNwcml0ZSA9IG1pdW1pdS5zcHJpdGVzW21pdW1pdS5kaXJlY3Rpb25dO1xuXHRjdHguZHJhd0ltYWdlKGdhbWV0aWxlLCBcblx0XHRcdFx0c3ByaXRlWzBdLngsIFxuXHRcdFx0XHRzcHJpdGVbMF0ueSwgXG5cdFx0XHRcdHNwcml0ZVswXS53LCBcblx0XHRcdFx0c3ByaXRlWzBdLmgsIFxuXHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgbWl1bWl1LnBvc2l0aW9uWzBdLCBcblx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArIG1pdW1pdS5wb3NpdGlvblsxXSwgXG5cdFx0XHRcdG1pdW1pdS5kaW1lbnNpb25zWzBdLCBtaXVtaXUuZGltZW5zaW9uc1sxXSk7XG5cblx0bGFzdEZyYW1lVGltZSA9IGN1cnJlbnRGcmFtZVRpbWU7XG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9