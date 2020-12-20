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

    if (e.keyCode == 80) {
      keysDown[e.keyCode] = true;
    }
  });
  window.addEventListener("keyup", function (e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      heldKeys[e.keyCode] = false;
    }

    if (e.keyCode == 80) {
      keysDown[e.keyCode] = false;
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
  var coconut = new PlacedItemStack(1, 1);
  coconut.placeAt(10, 15);
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
    } else if (heldKeys[80]) {
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
            var _sprite = itemTypes[is.type].sprite;
            ctx.drawImage(gametile, _sprite[0].x, _sprite[0].y, _sprite[0].w, _sprite[0].h, camera.offset[0] + _x3 * tileWidth + itemTypes[is.type].offset[0], camera.offset[1] + y * tileHeight + itemTypes[is.type].offset[1], _sprite[0].w, _sprite[0].h);
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
      var _sprite2 = miumiu.sprites[miumiu.direction];
      ctx.drawImage(gametile, _sprite2[0].x, _sprite2[0].y, _sprite2[0].w, _sprite2[0].h, camera.offset[0] + miumiu.position[0], camera.offset[1] + miumiu.position[1], miumiu.dimensions[0], miumiu.dimensions[1]);
    }
  }

  ctx.textAlign = "right";

  for (var i = 0; i < miumiu.inventory.spaces; i++) {
    ctx.fillStyle = "#ffc34a";
    ctx.fillRect(10 + i * 50, 350, 40, 40);

    if (typeof miumiu.inventory.stacks[i] != 'undefined') {
      var it = itemTypes[miumiu.inventory.stacks[i].type];
      var _sprite3 = it.sprite;
      ctx.drawImage(gametile, _sprite3[0].x, _sprite3[0].y, _sprite3[0].w, _sprite3[0].h, 10 + i * 50 + it.offset[0], 350 + it.offset[1], _sprite3[0].w, _sprite3[0].h);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJoZWxkS2V5cyIsImRpcmVjdGlvbnMiLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJmbG9vclR5cGVzIiwic29saWQiLCJwYXRoIiwib2NlYW4iLCJ0aWxlVHlwZXMiLCJjb2xvciIsImZsb29yIiwic3ByaXRlIiwieCIsInkiLCJ3IiwiaCIsImNvbGxpc2lvbnMiLCJub25lIiwib2JqZWN0VHlwZXMiLCJuYW1lIiwib2Zmc2V0IiwiY29sbGlzaW9uIiwiekluZGV4IiwiaXRlbVR5cGVzIiwibWF4U3RhY2siLCJTdGFjayIsImlkIiwicXR5IiwidHlwZSIsIkludmVudG9yeSIsInMiLCJzcGFjZXMiLCJzdGFja3MiLCJwcm90b3R5cGUiLCJhZGRJdGVtcyIsImkiLCJsZW5ndGgiLCJtYXhIZXJlIiwicHVzaCIsIlBsYWNlZEl0ZW1TdGFjayIsInBsYWNlQXQiLCJueCIsIm55IiwibWFwVGlsZURhdGEiLCJtYXAiLCJ0b0luZGV4IiwiaXRlbVN0YWNrIiwiZ2FtZXRpbGUiLCJnYW1ldGlsZVVSTCIsImFydExvYWRlZCIsIm1pdW1pdSIsIk1pdU1pdSIsInRpbGVGcm9tIiwidGlsZVRvIiwidGltZU1vdmVkIiwiZGVsYXlNb3ZlIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwiZGlyZWN0aW9uIiwic3ByaXRlcyIsImludmVudG9yeSIsImxvY2F0aW9uIiwicHJvY2Vzc01vdmVtZW50IiwidCIsImV2ZW50RW50ZXIiLCJkaWZmZXJlbmNlIiwiTWF0aCIsInJvdW5kIiwicGxhY2VzQ2FuR28iLCJvYmplY3QiLCJjYW5Hb1VwIiwiY2FuR29Eb3duIiwiY2FuR29MZWZ0IiwiY2FuR29SaWdodCIsImdvTGVmdCIsImdvUmlnaHQiLCJnb1VwIiwiZ29Eb3duIiwicGlja1VwIiwiaXMiLCJyZW1haW5zIiwiY2FtZXJhIiwic2NyZWVuIiwic3RhcnRpbmdQb2ludCIsImVuZGluZ1BvaW50IiwidXBkYXRlIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0aWxlIiwiY2VpbCIsIlRpbGVNYXAiLCJidWlsZGluZ3NMb2NhdGlvbiIsImRhdGEiLCJUaWxlIiwidGlsZVgiLCJ0aWxlWSIsInRpbGVUeXBlIiwiYnVpbGRpbmciLCJidWlsZGluZ1R5cGUiLCJsZXZlbHMiLCJidWlsZE1hcEZyb21EYXRhIiwidGlsZUlkIiwiYWRkQnVpbGRpbmdzIiwiYnVpbGRpbmdzIiwidGlsZUlkeCIsIkdhbWVPYmplY3RzIiwibnQiLCJnZXRGcmFtZSIsInRpbWVMYXN0IiwidGltZSIsImFuaW1hdGlvbiIsImVuZCIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhd0dhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJrZXlzRG93biIsIndpZHRoIiwiaGVpZ2h0IiwiSW1hZ2UiLCJvbmVycm9yIiwiYWxlcnQiLCJzcmMiLCJjb25zb2xlIiwibG9nIiwiZmVuY2UxIiwiZmxvd2VyMSIsImZsb3dlcjIiLCJmbG93ZXIzIiwidHJlZTEiLCJ0cmVlMiIsInRyZWUzIiwidHJlZTQiLCJtYXNocm9vbTEiLCJtYXNocm9vbTIiLCJwaWdTaG9wMSIsImRvbnV0cyIsImNvb2tpbmciLCJjYXJwZXQiLCJkZXNrIiwiY2hhaXIiLCJjaGFpcjIiLCJ0cmVlUGxhbnQiLCJkcnVtIiwiaW5zdHJ1bWVudHMiLCJib29rU2hlbGYxIiwiYm9va1NoZWxmMiIsInNheG9waG9uZSIsImNvY29udXQiLCJjdXJyZW50RnJhbWVUaW1lIiwiRGF0ZSIsIm5vdyIsInNlYyIsIm1pdW1pdUJ1aWxkaW5nMSIsIm1pdW1pdUJ1aWxkaW5nMiIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwieiIsImRyYXdJbWFnZSIsIm9iamVjdFR5cGUiLCJzcHJpdGV0aW1lTGFzdCIsInRleHRBbGlnbiIsIml0IiwiZmlsbFRleHQiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUdBLElBQUlBLEdBQUcsR0FBRyxJQUFWLEMsQ0FFQTs7QUFDQSxJQUFJQyxPQUFPLEdBQUcsQ0FDYixDQURhLEVBQ1YsQ0FEVSxFQUNQLENBRE8sRUFDSixDQURJLEVBQ0QsQ0FEQyxFQUNFLENBREYsRUFDSyxDQURMLEVBQ1Es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QUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxFQUFUO0FBQVlDLE9BQUMsRUFBQyxFQUFkO0FBQWlCQyxPQUFDLEVBQUM7QUFBbkIsS0FBRDtBQUFwRCxHQXRCTztBQXdCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQXhCTztBQXlCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQXpCTztBQTBCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQTFCTztBQTJCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0UsSUFBdEM7QUFBNENLLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFuRCxHQTNCTztBQTRCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQTVCTztBQTZCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQTdCTztBQStCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQS9CTztBQWdDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQWhDTztBQWlDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQWpDTztBQWtDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQWxDTztBQW1DWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQW5DTztBQW9DWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0UsSUFBdEM7QUFBNENLLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFuRCxHQXBDTztBQXFDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQXJDTztBQXNDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQXRDTztBQXVDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQXZDTztBQXdDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0UsSUFBdEM7QUFBNENLLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFuRCxHQXhDTztBQXlDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0UsSUFBdEM7QUFBNENLLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFuRCxHQXpDTztBQTBDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRDtBQTFDTyxDQUFoQjtBQWdEQSxJQUFJQyxVQUFVLEdBQUc7QUFDaEJDLE1BQUksRUFBSSxDQURRO0FBRWhCWixPQUFLLEVBQUk7QUFGTyxDQUFqQjtBQUtBLElBQUlhLFdBQVcsR0FBRztBQUNqQixLQUFJO0FBQ0hDLFFBQUksRUFBRyxRQURKO0FBRUhSLFVBQU0sRUFBRyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxFQUFIO0FBQU1DLE9BQUMsRUFBQyxHQUFSO0FBQVlDLE9BQUMsRUFBQyxFQUFkO0FBQWlCQyxPQUFDLEVBQUM7QUFBbkIsS0FBRCxDQUZOO0FBR0hLLFVBQU0sRUFBRyxDQUFDLENBQUQsRUFBRyxDQUFILENBSE47QUFJSEMsYUFBUyxFQUFHTCxVQUFVLENBQUNDLElBSnBCO0FBS0hLLFVBQU0sRUFBRztBQUxOLEdBRGE7QUFRakIsS0FBSTtBQUNISCxRQUFJLEVBQUcsT0FESjtBQUVIUixVQUFNLEVBQUcsQ0FBQztBQUFDQyxPQUFDLEVBQUMsRUFBSDtBQUFNQyxPQUFDLEVBQUMsR0FBUjtBQUFZQyxPQUFDLEVBQUMsRUFBZDtBQUFpQkMsT0FBQyxFQUFDO0FBQW5CLEtBQUQsQ0FGTjtBQUdISyxVQUFNLEVBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUhOO0FBSUhDLGFBQVMsRUFBR0wsVUFBVSxDQUFDWCxLQUpwQjtBQUtIaUIsVUFBTSxFQUFHO0FBTE4sR0FSYTtBQWVqQixLQUFJO0FBQ0hILFFBQUksRUFBRyxNQURKO0FBRUhSLFVBQU0sRUFBRyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxFQUFIO0FBQU1DLE9BQUMsRUFBQyxHQUFSO0FBQVlDLE9BQUMsRUFBQyxFQUFkO0FBQWlCQyxPQUFDLEVBQUM7QUFBbkIsS0FBRCxDQUZOO0FBR0hLLFVBQU0sRUFBRyxDQUFDLENBQUMsRUFBRixFQUFLLENBQUMsRUFBTixDQUhOO0FBSUhDLGFBQVMsRUFBR0wsVUFBVSxDQUFDWCxLQUpwQjtBQUtIaUIsVUFBTSxFQUFHO0FBTE4sR0FmYTtBQXNCZCxLQUFJO0FBQ05ILFFBQUksRUFBRyxXQUREO0FBRU5SLFVBQU0sRUFBRyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxFQUFIO0FBQU1DLE9BQUMsRUFBQyxHQUFSO0FBQVlDLE9BQUMsRUFBQyxFQUFkO0FBQWlCQyxPQUFDLEVBQUM7QUFBbkIsS0FBRCxDQUZIO0FBR05LLFVBQU0sRUFBRyxDQUFDLENBQUQsRUFBRyxDQUFILENBSEg7QUFJTkMsYUFBUyxFQUFHTCxVQUFVLENBQUNDLElBSmpCO0FBS05LLFVBQU0sRUFBRztBQUxILEdBdEJVO0FBNkJkLEtBQUk7QUFDTkgsUUFBSSxFQUFHLFVBREQ7QUFFTlIsVUFBTSxFQUFHLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFELENBRkg7QUFHTkssVUFBTSxFQUFHLENBQUMsQ0FBQyxFQUFGLEVBQUssQ0FBQyxFQUFOLENBSEg7QUFJTkMsYUFBUyxFQUFHTCxVQUFVLENBQUNYLEtBSmpCO0FBS05pQixVQUFNLEVBQUc7QUFMSCxHQTdCVTtBQW9DZCxLQUFJO0FBQ05ILFFBQUksRUFBRyxRQUREO0FBRU5SLFVBQU0sRUFBRyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxDQUFUO0FBQVdDLE9BQUMsRUFBQyxFQUFiO0FBQWdCQyxPQUFDLEVBQUM7QUFBbEIsS0FBRCxDQUZIO0FBR05LLFVBQU0sRUFBRyxDQUFDLENBQUQsRUFBRyxDQUFILENBSEg7QUFJTkMsYUFBUyxFQUFHTCxVQUFVLENBQUNDLElBSmpCO0FBS05LLFVBQU0sRUFBRztBQUxILEdBcENVO0FBMkNkLEtBQUk7QUFDTkgsUUFBSSxFQUFHLFNBREQ7QUFFTlIsVUFBTSxFQUFHLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEVBQVQ7QUFBWUMsT0FBQyxFQUFDLEVBQWQ7QUFBaUJDLE9BQUMsRUFBQztBQUFuQixLQUFELENBRkg7QUFHTkssVUFBTSxFQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FISDtBQUlOQyxhQUFTLEVBQUdMLFVBQVUsQ0FBQ0MsSUFKakI7QUFLTkssVUFBTSxFQUFHO0FBTEgsR0EzQ1U7QUFrRGQsS0FBSTtBQUNOSCxRQUFJLEVBQUcsUUFERDtBQUVOUixVQUFNLEVBQUcsQ0FBQztBQUFDQyxPQUFDLEVBQUMsQ0FBSDtBQUFLQyxPQUFDLEVBQUMsRUFBUDtBQUFVQyxPQUFDLEVBQUMsRUFBWjtBQUFlQyxPQUFDLEVBQUM7QUFBakIsS0FBRCxDQUZIO0FBR05LLFVBQU0sRUFBRyxDQUFDLENBQUQsRUFBRyxDQUFILENBSEg7QUFJTkMsYUFBUyxFQUFHTCxVQUFVLENBQUNDLElBSmpCO0FBS05LLFVBQU0sRUFBRztBQUxILEdBbERVO0FBeURkLEtBQUk7QUFDTkgsUUFBSSxFQUFHLE1BREQ7QUFFTlIsVUFBTSxFQUFHLENBQUM7QUFBQ0MsT0FBQyxFQUFDLENBQUg7QUFBS0MsT0FBQyxFQUFDLEVBQVA7QUFBVUMsT0FBQyxFQUFDLEVBQVo7QUFBZUMsT0FBQyxFQUFDO0FBQWpCLEtBQUQsQ0FGSDtBQUdOSyxVQUFNLEVBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUhIO0FBSU5DLGFBQVMsRUFBR0wsVUFBVSxDQUFDWCxLQUpqQjtBQUtOaUIsVUFBTSxFQUFHO0FBTEgsR0F6RFU7QUFnRWQsTUFBSztBQUNQSCxRQUFJLEVBQUcsT0FEQTtBQUVQUixVQUFNLEVBQUcsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsQ0FBVDtBQUFXQyxPQUFDLEVBQUMsRUFBYjtBQUFnQkMsT0FBQyxFQUFDO0FBQWxCLEtBQUQsQ0FGRjtBQUdQSyxVQUFNLEVBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUhGO0FBSVBDLGFBQVMsRUFBR0wsVUFBVSxDQUFDWCxLQUpoQjtBQUtQaUIsVUFBTSxFQUFHO0FBTEYsR0FoRVM7QUF1RWQsTUFBSztBQUNQSCxRQUFJLEVBQUcsWUFEQTtBQUVQUixVQUFNLEVBQUcsQ0FBQztBQUFDQyxPQUFDLEVBQUMsRUFBSDtBQUFNQyxPQUFDLEVBQUMsR0FBUjtBQUFZQyxPQUFDLEVBQUMsRUFBZDtBQUFpQkMsT0FBQyxFQUFDO0FBQW5CLEtBQUQsQ0FGRjtBQUdQSyxVQUFNLEVBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUhGO0FBSVBDLGFBQVMsRUFBR0wsVUFBVSxDQUFDWCxLQUpoQjtBQUtQaUIsVUFBTSxFQUFHO0FBTEYsR0F2RVM7QUE4RWQsTUFBSztBQUNQSCxRQUFJLEVBQUcsTUFEQTtBQUVQUixVQUFNLEVBQUcsQ0FBQztBQUFDQyxPQUFDLEVBQUMsQ0FBSDtBQUFLQyxPQUFDLEVBQUMsR0FBUDtBQUFXQyxPQUFDLEVBQUMsRUFBYjtBQUFnQkMsT0FBQyxFQUFDO0FBQWxCLEtBQUQsQ0FGRjtBQUdQSyxVQUFNLEVBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUhGO0FBSVBDLGFBQVMsRUFBR0wsVUFBVSxDQUFDWCxLQUpoQjtBQUtQaUIsVUFBTSxFQUFHO0FBTEYsR0E5RVM7QUFxRmQsTUFBSztBQUNQSCxRQUFJLEVBQUcsYUFEQTtBQUVQUixVQUFNLEVBQUcsQ0FBQztBQUFDQyxPQUFDLEVBQUMsRUFBSDtBQUFNQyxPQUFDLEVBQUMsR0FBUjtBQUFZQyxPQUFDLEVBQUMsR0FBZDtBQUFrQkMsT0FBQyxFQUFDO0FBQXBCLEtBQUQsQ0FGRjtBQUdQSyxVQUFNLEVBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUhGO0FBSVBDLGFBQVMsRUFBR0wsVUFBVSxDQUFDWCxLQUpoQjtBQUtQaUIsVUFBTSxFQUFHO0FBTEYsR0FyRlM7QUE0RmQsTUFBSztBQUNQSCxRQUFJLEVBQUcsV0FEQTtBQUVQUixVQUFNLEVBQUcsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsR0FBVDtBQUFhQyxPQUFDLEVBQUMsRUFBZjtBQUFrQkMsT0FBQyxFQUFDO0FBQXBCLEtBQUQsQ0FGRjtBQUdQSyxVQUFNLEVBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUhGO0FBSVBDLGFBQVMsRUFBR0wsVUFBVSxDQUFDWCxLQUpoQjtBQUtQaUIsVUFBTSxFQUFHO0FBTEYsR0E1RlM7QUFtR2QsTUFBSztBQUNQSCxRQUFJLEVBQUcsV0FEQTtBQUVQUixVQUFNLEVBQUcsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsR0FBVDtBQUFhQyxPQUFDLEVBQUMsRUFBZjtBQUFrQkMsT0FBQyxFQUFDO0FBQXBCLEtBQUQsQ0FGRjtBQUdQSyxVQUFNLEVBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUhGO0FBSVBDLGFBQVMsRUFBR0wsVUFBVSxDQUFDWCxLQUpoQjtBQUtQaUIsVUFBTSxFQUFHO0FBTEYsR0FuR1M7QUEwR2QsTUFBSztBQUNQSCxRQUFJLEVBQUcsb0JBREE7QUFFUFIsVUFBTSxFQUFHLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFELENBRkY7QUFHUEssVUFBTSxFQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FIRjtBQUlQQyxhQUFTLEVBQUdMLFVBQVUsQ0FBQ1gsS0FKaEI7QUFLUGlCLFVBQU0sRUFBRztBQUxGO0FBMUdTLENBQWxCLEMsQ0FvSEE7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHO0FBQ1osS0FBSTtBQUNOSixRQUFJLEVBQUcsU0FERDtBQUVOSyxZQUFRLEVBQUcsQ0FGTDtBQUdOYixVQUFNLEVBQUcsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsQ0FBVDtBQUFXQyxPQUFDLEVBQUMsRUFBYjtBQUFnQkMsT0FBQyxFQUFDO0FBQWxCLEtBQUQsQ0FISDtBQUlOSyxVQUFNLEVBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSDtBQUpILEdBRFE7QUFPWixLQUFJO0FBQ05ELFFBQUksRUFBRyxZQUREO0FBRU5LLFlBQVEsRUFBRyxDQUZMO0FBR05iLFVBQU0sRUFBRyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxDQUFUO0FBQVdDLE9BQUMsRUFBQyxFQUFiO0FBQWdCQyxPQUFDLEVBQUM7QUFBbEIsS0FBRCxDQUhIO0FBSU5LLFVBQU0sRUFBRyxDQUFDLENBQUQsRUFBRyxDQUFIO0FBSkg7QUFQUSxDQUFoQjs7QUFlQSxTQUFTSyxLQUFULENBQWVDLEVBQWYsRUFBbUJDLEdBQW5CLEVBQ0E7QUFDQyxPQUFLQyxJQUFMLEdBQVlGLEVBQVo7QUFDQSxPQUFLQyxHQUFMLEdBQVdBLEdBQVg7QUFDQTs7QUFFRCxTQUFTRSxTQUFULENBQW1CQyxDQUFuQixFQUNBO0FBQ0MsT0FBS0MsTUFBTCxHQUFlRCxDQUFmO0FBQ0EsT0FBS0UsTUFBTCxHQUFlLEVBQWY7QUFDQTs7QUFFREgsU0FBUyxDQUFDSSxTQUFWLENBQW9CQyxRQUFwQixHQUErQixVQUFTUixFQUFULEVBQWFDLEdBQWIsRUFDL0I7QUFDQyxPQUFJLElBQUlRLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBRyxLQUFLSixNQUF4QixFQUFnQ0ksQ0FBQyxFQUFqQyxFQUNBO0FBQ0MsUUFBRyxLQUFLSCxNQUFMLENBQVlJLE1BQVosSUFBb0JELENBQXZCLEVBQ0E7QUFDQyxVQUFJRSxPQUFPLEdBQUlWLEdBQUcsR0FBR0osU0FBUyxDQUFDRyxFQUFELENBQVQsQ0FBY0YsUUFBcEIsR0FDZEQsU0FBUyxDQUFDRyxFQUFELENBQVQsQ0FBY0YsUUFEQSxHQUNXRyxHQUQxQjtBQUVDLFdBQUtLLE1BQUwsQ0FBWU0sSUFBWixDQUFpQixJQUFJYixLQUFKLENBQVVDLEVBQVYsRUFBY1csT0FBZCxDQUFqQjtBQUVEVixTQUFHLElBQUdVLE9BQU47QUFDQSxLQVBELE1BUUssSUFBRyxLQUFLTCxNQUFMLENBQVlHLENBQVosRUFBZVAsSUFBZixJQUF1QkYsRUFBdkIsSUFDUCxLQUFLTSxNQUFMLENBQVlHLENBQVosRUFBZVIsR0FBZixHQUFxQkosU0FBUyxDQUFDRyxFQUFELENBQVQsQ0FBY0YsUUFEL0IsRUFFTDtBQUNDLFVBQUlhLFFBQU8sR0FBSWQsU0FBUyxDQUFDRyxFQUFELENBQVQsQ0FBY0YsUUFBZCxHQUF5QixLQUFLUSxNQUFMLENBQVlHLENBQVosRUFBZVIsR0FBdkQ7O0FBQ0EsVUFBR1UsUUFBTyxHQUFHVixHQUFiLEVBQWtCO0FBQUVVLGdCQUFPLEdBQUdWLEdBQVY7QUFBZ0I7O0FBRXBDLFdBQUtLLE1BQUwsQ0FBWUcsQ0FBWixFQUFlUixHQUFmLElBQXFCVSxRQUFyQjtBQUNBVixTQUFHLElBQUdVLFFBQU47QUFDQTs7QUFDRCxRQUFHVixHQUFHLElBQUUsQ0FBUixFQUFXO0FBQUUsYUFBTyxDQUFQO0FBQVc7QUFDeEI7O0FBQ0QsU0FBT0EsR0FBUDtBQUNBLENBeEJEOztBQTBCQSxTQUFTWSxlQUFULENBQXlCYixFQUF6QixFQUE2QkMsR0FBN0IsRUFDQTtBQUNDLE9BQUtDLElBQUwsR0FBWUYsRUFBWjtBQUNBLE9BQUtDLEdBQUwsR0FBV0EsR0FBWDtBQUNBLE9BQUtmLENBQUwsR0FBUyxDQUFUO0FBQ0EsT0FBS0MsQ0FBTCxHQUFTLENBQVQ7QUFDQTs7QUFFRDBCLGVBQWUsQ0FBQ04sU0FBaEIsQ0FBMEJPLE9BQTFCLEdBQW9DLFVBQVNDLEVBQVQsRUFBYUMsRUFBYixFQUNwQztBQUNDLE1BQUdDLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQkMsT0FBTyxDQUFDLEtBQUtqQyxDQUFOLEVBQVMsS0FBS0MsQ0FBZCxDQUF2QixFQUF5Q2lDLFNBQXpDLElBQW9ELElBQXZELEVBQ0E7QUFDQ0gsZUFBVyxDQUFDQyxHQUFaLENBQWdCQyxPQUFPLENBQUMsS0FBS2pDLENBQU4sRUFBUyxLQUFLQyxDQUFkLENBQXZCLEVBQXlDaUMsU0FBekMsR0FBcUQsSUFBckQ7QUFDQTs7QUFFRCxPQUFLbEMsQ0FBTCxHQUFTNkIsRUFBVDtBQUNBLE9BQUs1QixDQUFMLEdBQVM2QixFQUFUO0FBRUFDLGFBQVcsQ0FBQ0MsR0FBWixDQUFnQkMsT0FBTyxDQUFDSixFQUFELEVBQUtDLEVBQUwsQ0FBdkIsRUFBaUNJLFNBQWpDLEdBQTZDLElBQTdDO0FBQ0EsQ0FYRDs7QUFnQkEsSUFBSUMsUUFBUSxHQUFHLElBQWY7QUFBQSxJQUFxQkMsV0FBVyxHQUFHLDRCQUFuQztBQUFBLElBQWlFQyxTQUFTLEdBQUcsS0FBN0UsQyxDQUlBOztBQUNBLElBQUlDLE1BQU0sR0FBRyxJQUFJQyxNQUFKLEVBQWIsQyxDQUNBOztBQUNBLFNBQVNBLE1BQVQsR0FBa0I7QUFDZCxPQUFLQyxRQUFMLEdBQWdCLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBaEIsQ0FEYyxDQUVkOztBQUNBLE9BQUtDLE1BQUwsR0FBZSxDQUFDLEVBQUQsRUFBSSxFQUFKLENBQWYsQ0FIYyxDQUlkOztBQUNBLE9BQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLEdBQWpCO0FBQ0gsT0FBS0MsVUFBTCxHQUFrQixDQUFDLEVBQUQsRUFBSSxFQUFKLENBQWxCO0FBQ0csT0FBS0MsUUFBTCxHQUFnQixDQUFDLEVBQUQsRUFBSSxFQUFKLENBQWhCO0FBRUEsT0FBS0MsU0FBTCxHQUFpQjNELFVBQVUsQ0FBQ0MsRUFBNUI7QUFDSCxPQUFLMkQsT0FBTCxHQUFlLEVBQWY7QUFDQSxPQUFLQSxPQUFMLENBQWE1RCxVQUFVLENBQUNDLEVBQXhCLElBQThCLENBQUM7QUFBQ1ksS0FBQyxFQUFDLENBQUg7QUFBS0MsS0FBQyxFQUFDLEdBQVA7QUFBV0MsS0FBQyxFQUFDLEVBQWI7QUFBZ0JDLEtBQUMsRUFBQztBQUFsQixHQUFELENBQTlCO0FBQ0EsT0FBSzRDLE9BQUwsQ0FBYTVELFVBQVUsQ0FBQ0UsS0FBeEIsSUFBaUMsQ0FBQztBQUFDVyxLQUFDLEVBQUMsQ0FBSDtBQUFLQyxLQUFDLEVBQUMsR0FBUDtBQUFXQyxLQUFDLEVBQUMsRUFBYjtBQUFnQkMsS0FBQyxFQUFDO0FBQWxCLEdBQUQsQ0FBakM7QUFDQSxPQUFLNEMsT0FBTCxDQUFhNUQsVUFBVSxDQUFDRyxJQUF4QixJQUFnQyxDQUFDO0FBQUNVLEtBQUMsRUFBQyxDQUFIO0FBQUtDLEtBQUMsRUFBQyxHQUFQO0FBQVdDLEtBQUMsRUFBQyxFQUFiO0FBQWdCQyxLQUFDLEVBQUM7QUFBbEIsR0FBRCxDQUFoQztBQUNBLE9BQUs0QyxPQUFMLENBQWE1RCxVQUFVLENBQUNJLElBQXhCLElBQWdDLENBQUM7QUFBQ1MsS0FBQyxFQUFDLENBQUg7QUFBS0MsS0FBQyxFQUFDLEdBQVA7QUFBV0MsS0FBQyxFQUFDLEVBQWI7QUFBZ0JDLEtBQUMsRUFBQztBQUFsQixHQUFELENBQWhDO0FBQ0EsT0FBSzZDLFNBQUwsR0FBaUIsSUFBSS9CLFNBQUosQ0FBYyxDQUFkLENBQWpCO0FBRUEsQyxDQUdEOzs7QUFDQXNCLE1BQU0sQ0FBQ2xCLFNBQVAsQ0FBaUI0QixRQUFqQixHQUE0QixVQUFTakQsQ0FBVCxFQUFZQyxDQUFaLEVBQWU7QUFDMUMsT0FBS3VDLFFBQUwsR0FBZ0IsQ0FBQ3hDLENBQUQsRUFBR0MsQ0FBSCxDQUFoQjtBQUNHLE9BQUt3QyxNQUFMLEdBQWUsQ0FBQ3pDLENBQUQsRUFBR0MsQ0FBSCxDQUFmLENBRnVDLENBR3ZDO0FBQ0E7O0FBQ0gsT0FBSzRDLFFBQUwsR0FBZ0IsQ0FBSW5FLFNBQVMsR0FBR3NCLENBQWQsR0FBb0IsQ0FBQ3RCLFNBQVMsR0FBRyxLQUFLa0UsVUFBTCxDQUFnQixDQUFoQixDQUFiLElBQW1DLENBQXpELEVBQ1pqRSxVQUFVLEdBQUdzQixDQUFmLEdBQXFCLENBQUN0QixVQUFVLEdBQUcsS0FBS2lFLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBZCxJQUFvQyxDQUQzQyxDQUFoQjtBQUVBLENBUEQsQyxDQVNBOzs7QUFDQUwsTUFBTSxDQUFDbEIsU0FBUCxDQUFpQjZCLGVBQWpCLEdBQW1DLFVBQVNDLENBQVQsRUFBWTtBQUMzQztBQUNILE1BQUksS0FBS1gsUUFBTCxDQUFjLENBQWQsS0FBb0IsS0FBS0MsTUFBTCxDQUFZLENBQVosQ0FBcEIsSUFBc0MsS0FBS0QsUUFBTCxDQUFjLENBQWQsS0FBb0IsS0FBS0MsTUFBTCxDQUFZLENBQVosQ0FBOUQsRUFBOEU7QUFBRSxXQUFPLEtBQVA7QUFBZSxHQUZqRCxDQUczQztBQUNBOzs7QUFDSCxNQUFJVSxDQUFDLEdBQUcsS0FBS1QsU0FBVixJQUF3QixLQUFLQyxTQUFoQyxFQUEyQztBQUNwQyxTQUFLTSxRQUFMLENBQWMsS0FBS1IsTUFBTCxDQUFZLENBQVosQ0FBZCxFQUE4QixLQUFLQSxNQUFMLENBQVksQ0FBWixDQUE5Qjs7QUFDQSxRQUFHVixXQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FBQyxLQUFLUSxNQUFMLENBQVksQ0FBWixDQUFELEVBQWlCLEtBQUtBLE1BQUwsQ0FBWSxDQUFaLENBQWpCLENBQXZCLEVBQXlEVyxVQUF6RCxJQUF1RSxJQUExRSxFQUFnRjtBQUNyRnJCLGlCQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FBQyxLQUFLUSxNQUFMLENBQVksQ0FBWixDQUFELEVBQWlCLEtBQUtBLE1BQUwsQ0FBWSxDQUFaLENBQWpCLENBQXZCLEVBQXlEVyxVQUF6RCxDQUFvRSxJQUFwRTtBQUNNO0FBQ1AsR0FMRCxNQUtPO0FBQ0E7QUFDTixTQUFLUCxRQUFMLENBQWMsQ0FBZCxJQUFvQixLQUFLTCxRQUFMLENBQWMsQ0FBZCxJQUFtQjlELFNBQXBCLEdBQWtDLENBQUNBLFNBQVMsR0FBRyxLQUFLa0UsVUFBTCxDQUFnQixDQUFoQixDQUFiLElBQW1DLENBQXhGO0FBQ0EsU0FBS0MsUUFBTCxDQUFjLENBQWQsSUFBb0IsS0FBS0wsUUFBTCxDQUFjLENBQWQsSUFBbUI3RCxVQUFwQixHQUFtQyxDQUFDQSxVQUFVLEdBQUcsS0FBS2lFLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBZCxJQUFvQyxDQUExRixDQUhNLENBS0E7O0FBQ04sUUFBRyxLQUFLSCxNQUFMLENBQVksQ0FBWixLQUFrQixLQUFLRCxRQUFMLENBQWMsQ0FBZCxDQUFyQixFQUF1QztBQUM3QjtBQUNBO0FBQ1QsVUFBSWEsVUFBVSxHQUFJM0UsU0FBUyxHQUFHLEtBQUtpRSxTQUFsQixJQUFnQ1EsQ0FBQyxHQUFHLEtBQUtULFNBQXpDLENBQWpCO0FBQ0EsV0FBS0csUUFBTCxDQUFjLENBQWQsS0FBb0IsS0FBS0osTUFBTCxDQUFZLENBQVosSUFBaUIsS0FBS0QsUUFBTCxDQUFjLENBQWQsQ0FBakIsR0FBb0MsSUFBSWEsVUFBeEMsR0FBcURBLFVBQXpFO0FBQ0E7O0FBQ0UsUUFBRyxLQUFLWixNQUFMLENBQVksQ0FBWixLQUFrQixLQUFLRCxRQUFMLENBQWMsQ0FBZCxDQUFyQixFQUF1QztBQUN6QyxVQUFJYSxXQUFVLEdBQUkxRSxVQUFVLEdBQUcsS0FBS2dFLFNBQW5CLElBQWlDUSxDQUFDLEdBQUMsS0FBS1QsU0FBeEMsQ0FBakI7O0FBQ0EsV0FBS0csUUFBTCxDQUFjLENBQWQsS0FBb0IsS0FBS0osTUFBTCxDQUFZLENBQVosSUFBZSxLQUFLRCxRQUFMLENBQWMsQ0FBZCxDQUFmLEdBQWtDLElBQUlhLFdBQXRDLEdBQW1EQSxXQUF2RTtBQUNNLEtBZkQsQ0FnQkE7OztBQUNOLFNBQUtSLFFBQUwsQ0FBYyxDQUFkLElBQW1CUyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLVixRQUFMLENBQWMsQ0FBZCxDQUFYLENBQW5CO0FBQ0EsU0FBS0EsUUFBTCxDQUFjLENBQWQsSUFBbUJTLElBQUksQ0FBQ0MsS0FBTCxDQUFXLEtBQUtWLFFBQUwsQ0FBYyxDQUFkLENBQVgsQ0FBbkI7QUFDRyxHQTdCMEMsQ0E4QjNDOzs7QUFDSCxTQUFPLElBQVA7QUFDQSxDQWhDRCxDLENBbUNBOzs7QUFDQU4sTUFBTSxDQUFDbEIsU0FBUCxDQUFpQm1DLFdBQWpCLEdBQStCLFVBQVN4RCxDQUFULEVBQVlDLENBQVosRUFBZTtBQUMxQztBQUNBLE1BQUdELENBQUMsR0FBRyxDQUFKLElBQVNBLENBQUMsSUFBSXBCLFFBQWQsSUFBMEJxQixDQUFDLEdBQUcsQ0FBOUIsSUFBbUNBLENBQUMsSUFBSXBCLFNBQTNDLEVBQXNEO0FBQ3hELFdBQU8sS0FBUDtBQUNBLEdBSjRDLENBSzFDOzs7QUFDSSxNQUFHZSxTQUFTLENBQUNuQixPQUFPLENBQUN3RCxPQUFPLENBQUNqQyxDQUFELEVBQUdDLENBQUgsQ0FBUixDQUFSLENBQVQsQ0FBaUNILEtBQWpDLElBQTBDTixVQUFVLENBQUNFLElBQXhELEVBQThEO0FBQUUsV0FBTyxLQUFQO0FBQWU7O0FBQy9FLE1BQUdxQyxXQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FBQ2pDLENBQUQsRUFBR0MsQ0FBSCxDQUF2QixFQUE4QndELE1BQTlCLElBQXdDLElBQTNDLEVBQWlEO0FBQ3RELFFBQUlBLE1BQU0sR0FBRzFCLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQkMsT0FBTyxDQUFDakMsQ0FBRCxFQUFHQyxDQUFILENBQXZCLEVBQThCd0QsTUFBM0M7O0FBQ0EsUUFBR25ELFdBQVcsQ0FBQ21ELE1BQU0sQ0FBQ3pDLElBQVIsQ0FBWCxDQUF5QlAsU0FBekIsSUFBc0NMLFVBQVUsQ0FBQ1gsS0FBcEQsRUFBMkQ7QUFDMUQsYUFBTyxLQUFQO0FBQ0Q7QUFDRDs7QUFDRCxTQUFPLElBQVA7QUFDQSxDQWREOztBQWVBOEMsTUFBTSxDQUFDbEIsU0FBUCxDQUFpQnFDLE9BQWpCLEdBQTJCLFlBQVc7QUFBRSxTQUFPLEtBQUtGLFdBQUwsQ0FBaUIsS0FBS2hCLFFBQUwsQ0FBYyxDQUFkLENBQWpCLEVBQW1DLEtBQUtBLFFBQUwsQ0FBYyxDQUFkLElBQW1CLENBQXRELENBQVA7QUFBa0UsQ0FBMUc7O0FBQ0FELE1BQU0sQ0FBQ2xCLFNBQVAsQ0FBaUJzQyxTQUFqQixHQUE2QixZQUFXO0FBQUUsU0FBTyxLQUFLSCxXQUFMLENBQWlCLEtBQUtoQixRQUFMLENBQWMsQ0FBZCxDQUFqQixFQUFtQyxLQUFLQSxRQUFMLENBQWMsQ0FBZCxJQUFtQixDQUF0RCxDQUFQO0FBQWtFLENBQTVHOztBQUNBRCxNQUFNLENBQUNsQixTQUFQLENBQWlCdUMsU0FBakIsR0FBNkIsWUFBVztBQUFFLFNBQU8sS0FBS0osV0FBTCxDQUFpQixLQUFLaEIsUUFBTCxDQUFjLENBQWQsSUFBaUIsQ0FBbEMsRUFBcUMsS0FBS0EsUUFBTCxDQUFjLENBQWQsQ0FBckMsQ0FBUDtBQUFnRSxDQUExRzs7QUFDQUQsTUFBTSxDQUFDbEIsU0FBUCxDQUFpQndDLFVBQWpCLEdBQThCLFlBQVc7QUFBRSxTQUFPLEtBQUtMLFdBQUwsQ0FBaUIsS0FBS2hCLFFBQUwsQ0FBYyxDQUFkLElBQWlCLENBQWxDLEVBQXFDLEtBQUtBLFFBQUwsQ0FBYyxDQUFkLENBQXJDLENBQVA7QUFBZ0UsQ0FBM0c7O0FBRUFELE1BQU0sQ0FBQ2xCLFNBQVAsQ0FBaUJ5QyxNQUFqQixHQUEwQixVQUFTWCxDQUFULEVBQVk7QUFBRSxPQUFLVixNQUFMLENBQVksQ0FBWixLQUFpQixDQUFqQjtBQUFvQixPQUFLQyxTQUFMLEdBQWlCUyxDQUFqQjtBQUFvQixPQUFLTCxTQUFMLEdBQWlCM0QsVUFBVSxDQUFDSSxJQUE1QjtBQUFtQyxDQUFuSDs7QUFDQWdELE1BQU0sQ0FBQ2xCLFNBQVAsQ0FBaUIwQyxPQUFqQixHQUEyQixVQUFTWixDQUFULEVBQVk7QUFBRSxPQUFLVixNQUFMLENBQVksQ0FBWixLQUFpQixDQUFqQjtBQUFvQixPQUFLQyxTQUFMLEdBQWlCUyxDQUFqQjtBQUFvQixPQUFLTCxTQUFMLEdBQWlCM0QsVUFBVSxDQUFDRSxLQUE1QjtBQUFvQyxDQUFySDs7QUFDQWtELE1BQU0sQ0FBQ2xCLFNBQVAsQ0FBaUIyQyxJQUFqQixHQUF3QixVQUFTYixDQUFULEVBQVk7QUFBRSxPQUFLVixNQUFMLENBQVksQ0FBWixLQUFpQixDQUFqQjtBQUFvQixPQUFLQyxTQUFMLEdBQWlCUyxDQUFqQjtBQUFvQixPQUFLTCxTQUFMLEdBQWlCM0QsVUFBVSxDQUFDQyxFQUE1QjtBQUFpQyxDQUEvRzs7QUFDQW1ELE1BQU0sQ0FBQ2xCLFNBQVAsQ0FBaUI0QyxNQUFqQixHQUEwQixVQUFTZCxDQUFULEVBQVk7QUFBRSxPQUFLVixNQUFMLENBQVksQ0FBWixLQUFpQixDQUFqQjtBQUFvQixPQUFLQyxTQUFMLEdBQWlCUyxDQUFqQjtBQUFvQixPQUFLTCxTQUFMLEdBQWlCM0QsVUFBVSxDQUFDRyxJQUE1QjtBQUFtQyxDQUFuSCxDLENBRUE7OztBQUNBaUQsTUFBTSxDQUFDbEIsU0FBUCxDQUFpQjZDLE1BQWpCLEdBQTBCLFlBQzFCO0FBQ0MsTUFBRyxLQUFLekIsTUFBTCxDQUFZLENBQVosS0FBZ0IsS0FBS0QsUUFBTCxDQUFjLENBQWQsQ0FBaEIsSUFDRixLQUFLQyxNQUFMLENBQVksQ0FBWixLQUFnQixLQUFLRCxRQUFMLENBQWMsQ0FBZCxDQURqQixFQUVBO0FBQ0MsV0FBTyxLQUFQO0FBQ0E7O0FBRUQsTUFBSTJCLEVBQUUsR0FBR3BDLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQkMsT0FBTyxDQUFDLEtBQUtPLFFBQUwsQ0FBYyxDQUFkLENBQUQsRUFDN0IsS0FBS0EsUUFBTCxDQUFjLENBQWQsQ0FENkIsQ0FBdkIsRUFDYU4sU0FEdEI7O0FBR0EsTUFBR2lDLEVBQUUsSUFBRSxJQUFQLEVBQ0E7QUFDQyxRQUFJQyxPQUFPLEdBQUcsS0FBS3BCLFNBQUwsQ0FBZTFCLFFBQWYsQ0FBd0I2QyxFQUFFLENBQUNuRCxJQUEzQixFQUFpQ21ELEVBQUUsQ0FBQ3BELEdBQXBDLENBQWQ7O0FBRUEsUUFBR3FELE9BQUgsRUFBWTtBQUFFRCxRQUFFLENBQUNwRCxHQUFILEdBQVNxRCxPQUFUO0FBQW1CLEtBQWpDLE1BRUE7QUFDQ3JDLGlCQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FBQyxLQUFLTyxRQUFMLENBQWMsQ0FBZCxDQUFELEVBQ3RCLEtBQUtBLFFBQUwsQ0FBYyxDQUFkLENBRHNCLENBQXZCLEVBQ29CTixTQURwQixHQUNnQyxJQURoQztBQUVBO0FBQ0Q7O0FBRUQsU0FBTyxJQUFQO0FBQ0EsQ0F4QkQsQyxDQTBCQTs7O0FBQ0EsSUFBSW1DLE1BQU0sR0FBRztBQUNUQyxRQUFNLEVBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQURDO0FBRVQ7QUFDQUMsZUFBYSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FITjtBQUlUO0FBQ0FDLGFBQVcsRUFBRSxDQUFDLENBQUQsRUFBRyxDQUFILENBTEo7QUFNVDtBQUNBaEUsUUFBTSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FQQztBQVFUO0FBQ0FpRSxRQUFNLEVBQUUsZ0JBQVNDLE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCO0FBQy9CO0FBQ04sU0FBS25FLE1BQUwsQ0FBWSxDQUFaLElBQWlCOEMsSUFBSSxDQUFDeEQsS0FBTCxDQUFZLEtBQUt3RSxNQUFMLENBQVksQ0FBWixJQUFlLENBQWhCLEdBQXFCSSxPQUFoQyxDQUFqQjtBQUNNLFNBQUtsRSxNQUFMLENBQVksQ0FBWixJQUFpQjhDLElBQUksQ0FBQ3hELEtBQUwsQ0FBWSxLQUFLd0UsTUFBTCxDQUFZLENBQVosSUFBZSxDQUFoQixHQUFxQkssT0FBaEMsQ0FBakIsQ0FIK0IsQ0FLL0I7O0FBQ0EsUUFBSUMsSUFBSSxHQUFHLENBQUV0QixJQUFJLENBQUN4RCxLQUFMLENBQVc0RSxPQUFPLEdBQUdoRyxTQUFyQixDQUFGLEVBQW1DNEUsSUFBSSxDQUFDeEQsS0FBTCxDQUFXNkUsT0FBTyxHQUFHaEcsVUFBckIsQ0FBbkMsQ0FBWCxDQU4rQixDQU8vQjtBQUNBOztBQUNBLFNBQUs0RixhQUFMLENBQW1CLENBQW5CLElBQXdCSyxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVV0QixJQUFJLENBQUN1QixJQUFMLENBQVcsS0FBS1AsTUFBTCxDQUFZLENBQVosSUFBZSxDQUFoQixHQUFxQjVGLFNBQS9CLENBQVYsR0FBdUQsQ0FBL0U7QUFDTixTQUFLNkYsYUFBTCxDQUFtQixDQUFuQixJQUF3QkssSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVdEIsSUFBSSxDQUFDdUIsSUFBTCxDQUFXLEtBQUtQLE1BQUwsQ0FBWSxDQUFaLElBQWUsQ0FBaEIsR0FBcUIzRixVQUEvQixDQUFWLEdBQXdELENBQWhGLENBVnFDLENBWS9COztBQUNBLFFBQUcsS0FBSzRGLGFBQUwsQ0FBbUIsQ0FBbkIsS0FBeUIsQ0FBQyxDQUE3QixFQUFnQztBQUFFLFdBQUtBLGFBQUwsQ0FBbUIsQ0FBbkIsSUFBd0IsQ0FBeEI7QUFBNEI7O0FBQ3BFLFFBQUcsS0FBS0EsYUFBTCxDQUFtQixDQUFuQixLQUF5QixDQUFDLENBQTdCLEVBQWdDO0FBQUUsV0FBS0EsYUFBTCxDQUFtQixDQUFuQixJQUF3QixDQUF4QjtBQUE0Qjs7QUFFeEQsU0FBS0MsV0FBTCxDQUFpQixDQUFqQixJQUFzQkksSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLENBQVYsR0FBY3RCLElBQUksQ0FBQ3VCLElBQUwsQ0FBVyxLQUFLUCxNQUFMLENBQVksQ0FBWixJQUFlLENBQWhCLEdBQXFCNUYsU0FBL0IsQ0FBcEM7QUFDTixTQUFLOEYsV0FBTCxDQUFpQixDQUFqQixJQUFzQkksSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLENBQVYsR0FBY3RCLElBQUksQ0FBQ3VCLElBQUwsQ0FBVyxLQUFLUCxNQUFMLENBQVksQ0FBWixJQUFlLENBQWhCLEdBQXFCM0YsVUFBL0IsQ0FBcEM7O0FBRUEsUUFBRyxLQUFLNkYsV0FBTCxDQUFpQixDQUFqQixLQUF1QjVGLFFBQTFCLEVBQW9DO0FBQUUsV0FBSzRGLFdBQUwsQ0FBaUIsQ0FBakIsSUFBc0I1RixRQUFRLEdBQUUsQ0FBaEM7QUFBb0M7O0FBQzFFLFFBQUcsS0FBSzRGLFdBQUwsQ0FBaUIsQ0FBakIsS0FBdUIzRixTQUExQixFQUFxQztBQUFFLFdBQUsyRixXQUFMLENBQWlCLENBQWpCLElBQXNCM0YsU0FBUyxHQUFHLENBQWxDO0FBQXNDO0FBQ3RFO0FBOUJJLENBQWIsQyxDQWtDQTs7QUFFQSxJQUFJa0QsV0FBVyxHQUFHLElBQUkrQyxPQUFKLEVBQWxCO0FBRUEsSUFBSUMsaUJBQWlCLEdBQUcsQ0FDdkI7QUFBRS9FLEdBQUMsRUFBQyxFQUFKO0FBQVFDLEdBQUMsRUFBQyxDQUFWO0FBQWFDLEdBQUMsRUFBQyxDQUFmO0FBQWtCQyxHQUFDLEVBQUMsQ0FBcEI7QUFBdUI2RSxNQUFJLEVBQUUsQ0FDNUIsRUFENEIsRUFDeEIsRUFEd0IsRUFDcEIsRUFEb0IsRUFDaEIsRUFEZ0IsRUFFdEIsRUFGc0IsRUFFbEIsRUFGa0IsRUFFZCxFQUZjLEVBRVYsRUFGVSxFQUd0QixFQUhzQixFQUdsQixFQUhrQixFQUdkLEVBSGMsRUFHVixFQUhVLEVBSXRCLEVBSnNCLEVBSWxCLEVBSmtCLEVBSWQsRUFKYyxFQUlWLEVBSlUsRUFLdEIsRUFMc0IsRUFLbEIsRUFMa0IsRUFLZCxFQUxjLEVBS1YsRUFMVTtBQUE3QixDQUR1QixFQVF2QjtBQUFFaEYsR0FBQyxFQUFDLEVBQUo7QUFBUUMsR0FBQyxFQUFDLENBQVY7QUFBYUMsR0FBQyxFQUFDLENBQWY7QUFBa0JDLEdBQUMsRUFBQyxDQUFwQjtBQUF1QjZFLE1BQUksRUFBRSxDQUM1QixFQUQ0QixFQUN4QixFQUR3QixFQUNwQixFQURvQixFQUNoQixFQURnQixFQUNaLEVBRFksRUFDUixFQURRLEVBQ0osRUFESSxFQUV0QixFQUZzQixFQUVsQixFQUZrQixFQUVkLEVBRmMsRUFFVixFQUZVLEVBRU4sRUFGTSxFQUVGLEVBRkUsRUFFRSxFQUZGLEVBR3RCLEVBSHNCLEVBR2xCLEVBSGtCLEVBR2QsRUFIYyxFQUdWLEVBSFUsRUFHTixFQUhNLEVBR0YsRUFIRSxFQUdFLEVBSEYsRUFJdEIsRUFKc0IsRUFJbEIsRUFKa0IsRUFJZCxFQUpjLEVBSVYsRUFKVSxFQUlOLEVBSk0sRUFJRixFQUpFLEVBSUUsRUFKRixFQUt0QixFQUxzQixFQUtsQixFQUxrQixFQUtkLEVBTGMsRUFLVixFQUxVLEVBS04sRUFMTSxFQUtGLEVBTEUsRUFLRSxFQUxGO0FBQTdCLENBUnVCLEVBZXZCO0FBQUVoRixHQUFDLEVBQUMsRUFBSjtBQUFRQyxHQUFDLEVBQUMsRUFBVjtBQUFjQyxHQUFDLEVBQUMsQ0FBaEI7QUFBbUJDLEdBQUMsRUFBQyxDQUFyQjtBQUF3QjZFLE1BQUksRUFBRSxDQUN2QixFQUR1QixFQUNuQixFQURtQixFQUNmLEVBRGUsRUFDWCxFQURXLEVBRXZCLEVBRnVCLEVBRW5CLEVBRm1CLEVBRWYsRUFGZSxFQUVYLEVBRlcsRUFHdkIsRUFIdUIsRUFHbkIsRUFIbUIsRUFHZixFQUhlLEVBR1gsRUFIVyxFQUl2QixFQUp1QixFQUluQixFQUptQixFQUlmLEVBSmUsRUFJWCxFQUpXO0FBQTlCLENBZnVCLENBQXhCLEMsQ0F1QkE7O0FBQ0EsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCQyxLQUFyQixFQUE0QkMsUUFBNUIsRUFDQTtBQUNJO0FBQ0gsT0FBS3BGLENBQUwsR0FBV2tGLEtBQVg7QUFDQSxPQUFLakYsQ0FBTCxHQUFXa0YsS0FBWDtBQUNBLE9BQUtuRSxJQUFMLEdBQWFvRSxRQUFiO0FBQ0EsT0FBS0MsUUFBTCxHQUFpQixJQUFqQjtBQUNHLE9BQUtDLFlBQUwsR0FBb0IsQ0FBcEIsQ0FOSixDQU9JOztBQUNBLE9BQUtsQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0gsT0FBS0ssTUFBTCxHQUFlLElBQWY7QUFDQSxPQUFLdkIsU0FBTCxHQUFpQixJQUFqQjtBQUVBLEMsQ0FFRDs7O0FBQ0EsU0FBUzRDLE9BQVQsR0FBbUI7QUFDbEIsT0FBSzlDLEdBQUwsR0FBVyxFQUFYO0FBQ0EsT0FBSzlCLENBQUwsR0FBVSxDQUFWO0FBQ0csT0FBS0MsQ0FBTCxHQUFVLENBQVY7QUFDSCxPQUFLb0YsTUFBTCxHQUFjLENBQWQ7QUFDQTs7QUFFRFQsT0FBTyxDQUFDekQsU0FBUixDQUFrQm1FLGdCQUFsQixHQUFxQyxVQUFTQyxNQUFULEVBQWlCdkYsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCO0FBQzNELE9BQUtELENBQUwsR0FBVUEsQ0FBVjtBQUNHLE9BQUtDLENBQUwsR0FBVUEsQ0FBVjs7QUFFQSxNQUFHc0YsTUFBTSxDQUFDakUsTUFBUCxJQUFnQnRCLENBQUMsR0FBR0MsQ0FBdkIsRUFBMkI7QUFBRSxXQUFPLEtBQVA7QUFBZTs7QUFFNUMsT0FBSzZCLEdBQUwsQ0FBU1IsTUFBVCxHQUFrQixDQUFsQjs7QUFDQyxPQUFJLElBQUl2QixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdFLENBQW5CLEVBQXNCRixDQUFDLEVBQXZCLEVBQTJCO0FBQzFCLFNBQUksSUFBSUQsRUFBQyxHQUFHLENBQVosRUFBZUEsRUFBQyxHQUFHRSxDQUFuQixFQUFzQkYsRUFBQyxFQUF2QixFQUEyQjtBQUM5QixXQUFLZ0MsR0FBTCxDQUFTTixJQUFULENBQWUsSUFBSXVELElBQUosQ0FBU2pGLEVBQVQsRUFBWUMsQ0FBWixFQUFld0YsTUFBTSxDQUFHekYsRUFBQyxHQUFJRSxDQUFDLEdBQUdELENBQVosQ0FBckIsQ0FBZjtBQUNBO0FBQ0U7O0FBQ0QsU0FBTyxJQUFQO0FBQ0gsQ0FiRDs7QUFnQkE2RSxPQUFPLENBQUN6RCxTQUFSLENBQWtCcUUsWUFBbEIsR0FBaUMsVUFBU0MsU0FBVCxFQUFvQjtBQUNwRCxPQUFJLElBQUlwRSxDQUFSLElBQWFvRSxTQUFiLEVBQXdCO0FBQ2pCLFFBQUlOLFFBQVEsR0FBR00sU0FBUyxDQUFDcEUsQ0FBRCxDQUF4Qjs7QUFDQSxRQUFHOEQsUUFBUSxDQUFDckYsQ0FBVCxHQUFhLENBQWIsSUFBa0JxRixRQUFRLENBQUNwRixDQUFULEdBQWEsQ0FBL0IsSUFBb0NvRixRQUFRLENBQUNyRixDQUFULElBQWMsS0FBS0UsQ0FBdkQsSUFBNERtRixRQUFRLENBQUNwRixDQUFULElBQWMsS0FBS0UsQ0FBL0UsSUFBcUZrRixRQUFRLENBQUNyRixDQUFULEdBQVdxRixRQUFRLENBQUNuRixDQUFyQixHQUF3QixLQUFLQSxDQUFqSCxJQUF1SG1GLFFBQVEsQ0FBQ3BGLENBQVQsR0FBV29GLFFBQVEsQ0FBQ2xGLENBQXJCLEdBQXdCLEtBQUtBLENBQW5KLElBQXdKa0YsUUFBUSxDQUFDTCxJQUFULENBQWN4RCxNQUFkLElBQXVCNkQsUUFBUSxDQUFDbkYsQ0FBVCxHQUFXbUYsUUFBUSxDQUFDbEYsQ0FBdE0sRUFBME07QUFDL007QUFDTTs7QUFDRCxTQUFJLElBQUlGLENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR29GLFFBQVEsQ0FBQ2xGLENBQTVCLEVBQStCRixDQUFDLEVBQWhDLEVBQW9DO0FBQ3pDLFdBQUksSUFBSUQsR0FBQyxHQUFHLENBQVosRUFBZUEsR0FBQyxHQUFHcUYsUUFBUSxDQUFDbkYsQ0FBNUIsRUFBK0JGLEdBQUMsRUFBaEMsRUFBb0M7QUFDdkIsWUFBSTRGLE9BQU8sR0FBSyxDQUFDUCxRQUFRLENBQUNwRixDQUFULEdBQWFBLENBQWQsSUFBbUIsS0FBS0MsQ0FBekIsR0FBOEJtRixRQUFRLENBQUNyRixDQUF2QyxHQUEyQ0EsR0FBMUQ7QUFDQSxhQUFLZ0MsR0FBTCxDQUFTNEQsT0FBVCxFQUFrQlAsUUFBbEIsR0FBNkJBLFFBQTdCO0FBQ1osYUFBS3JELEdBQUwsQ0FBUzRELE9BQVQsRUFBa0JOLFlBQWxCLEdBQWlDRCxRQUFRLENBQUNMLElBQVQsQ0FBaUIvRSxDQUFDLEdBQUdvRixRQUFRLENBQUNuRixDQUFkLEdBQW1CRixHQUFuQyxDQUFqQztBQUNBO0FBQ0Q7QUFDRDtBQUNELENBZEQsQyxDQWdCQTs7O0FBQ0EsU0FBUzZGLFdBQVQsQ0FBcUJDLEVBQXJCLEVBQXlCO0FBQ3hCLE9BQUs5RixDQUFMLEdBQVMsQ0FBVDtBQUNBLE9BQUtDLENBQUwsR0FBUyxDQUFUO0FBQ0EsT0FBS2UsSUFBTCxHQUFZOEUsRUFBWjtBQUNBOztBQUVERCxXQUFXLENBQUN4RSxTQUFaLENBQXNCTyxPQUF0QixHQUFnQyxVQUFTQyxFQUFULEVBQWFDLEVBQWIsRUFBaUI7QUFDaEQsTUFBR0MsV0FBVyxDQUFDQyxHQUFaLENBQWdCQyxPQUFPLENBQUMsS0FBS2pDLENBQU4sRUFBUyxLQUFLQyxDQUFkLENBQXZCLEVBQXlDd0QsTUFBekMsSUFBbUQsSUFBdEQsRUFBNEQ7QUFDM0QxQixlQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FBQyxLQUFLakMsQ0FBTixFQUFTLEtBQUtDLENBQWQsQ0FBdkIsRUFBeUN3RCxNQUF6QyxHQUFrRCxJQUFsRDtBQUNHOztBQUNELE9BQUt6RCxDQUFMLEdBQVM2QixFQUFUO0FBQ0gsT0FBSzVCLENBQUwsR0FBUzZCLEVBQVQ7QUFFQUMsYUFBVyxDQUFDQyxHQUFaLENBQWdCQyxPQUFPLENBQUNKLEVBQUQsRUFBS0MsRUFBTCxDQUF2QixFQUFpQzJCLE1BQWpDLEdBQTBDLElBQTFDO0FBQ0EsQ0FSRCxDLENBWUE7OztBQUNBLFNBQVN4QixPQUFULENBQWlCakMsQ0FBakIsRUFBb0JDLENBQXBCLEVBQXVCO0FBQ3RCLFNBQU9ELENBQUMsR0FBSXBCLFFBQVEsR0FBR3FCLENBQXZCO0FBQ0E7O0FBRUQsU0FBUzhGLFFBQVQsQ0FBa0JoRyxNQUFsQixFQUEwQmlHLFFBQTFCLEVBQW9DQyxJQUFwQyxFQUEwQ0MsU0FBMUMsRUFBcUQ7QUFDcEQsTUFBRyxDQUFDQSxTQUFKLEVBQWU7QUFBRSxXQUFPbkcsTUFBTSxDQUFDLENBQUQsQ0FBYjtBQUFtQjs7QUFDcENrRyxNQUFJLEdBQUdBLElBQUksR0FBR0QsUUFBZDs7QUFFQSxPQUFJaEcsQ0FBSixJQUFTRCxNQUFULEVBQWlCO0FBQ2hCLFFBQUdBLE1BQU0sQ0FBQ0MsQ0FBRCxDQUFOLENBQVVtRyxHQUFWLElBQWVGLElBQWxCLEVBQXdCO0FBQUUsYUFBT2xHLE1BQU0sQ0FBQ0MsQ0FBRCxDQUFiO0FBQW1CO0FBQzdDO0FBQ0QsQyxDQUVEOzs7QUFDQW9HLE1BQU0sQ0FBQ0MsTUFBUCxHQUFnQixZQUFXO0FBQzFCN0gsS0FBRyxHQUFHOEgsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDQyxVQUF0QyxDQUFpRCxJQUFqRCxDQUFOO0FBQ0FDLHVCQUFxQixDQUFDQyxRQUFELENBQXJCLENBRjBCLENBSXZCOztBQUNITixRQUFNLENBQUNPLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQVNDLENBQVQsRUFBWTtBQUM5QyxRQUFHQSxDQUFDLENBQUNDLE9BQUYsSUFBYSxFQUFiLElBQW1CRCxDQUFDLENBQUNDLE9BQUYsSUFBWSxFQUFsQyxFQUF1QztBQUFFM0gsY0FBUSxDQUFDMEgsQ0FBQyxDQUFDQyxPQUFILENBQVIsR0FBc0IsSUFBdEI7QUFBNkI7O0FBQ3RFLFFBQUdELENBQUMsQ0FBQ0MsT0FBRixJQUFXLEVBQWQsRUFBa0I7QUFBRUMsY0FBUSxDQUFDRixDQUFDLENBQUNDLE9BQUgsQ0FBUixHQUFzQixJQUF0QjtBQUE2QjtBQUNqRCxHQUhEO0FBSUFULFFBQU0sQ0FBQ08sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBU0MsQ0FBVCxFQUFZO0FBQzVDLFFBQUdBLENBQUMsQ0FBQ0MsT0FBRixJQUFhLEVBQWIsSUFBbUJELENBQUMsQ0FBQ0MsT0FBRixJQUFhLEVBQW5DLEVBQXVDO0FBQUUzSCxjQUFRLENBQUMwSCxDQUFDLENBQUNDLE9BQUgsQ0FBUixHQUFzQixLQUF0QjtBQUE4Qjs7QUFDdkUsUUFBR0QsQ0FBQyxDQUFDQyxPQUFGLElBQVcsRUFBZCxFQUFrQjtBQUFFQyxjQUFRLENBQUNGLENBQUMsQ0FBQ0MsT0FBSCxDQUFSLEdBQXNCLEtBQXRCO0FBQThCO0FBQ2xELEdBSEQsRUFUMEIsQ0FjdkI7O0FBQ0F4QyxRQUFNLENBQUNDLE1BQVAsR0FBZ0IsQ0FBQ2dDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ1EsS0FBdkMsRUFDWlQsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDUyxNQUQxQixDQUFoQjtBQUdBN0UsVUFBUSxHQUFHLElBQUk4RSxLQUFKLEVBQVg7O0FBQ0g5RSxVQUFRLENBQUMrRSxPQUFULEdBQW1CLFlBQVc7QUFDN0IxSSxPQUFHLEdBQUcsSUFBTjtBQUNBMkksU0FBSyxDQUFDLDBCQUFELENBQUw7QUFDQSxHQUhEOztBQUlBaEYsVUFBUSxDQUFDa0UsTUFBVCxHQUFrQixZQUFXO0FBQzVCaEUsYUFBUyxHQUFHLElBQVo7QUFDQSxHQUZEOztBQUdHRixVQUFRLENBQUNpRixHQUFULEdBQWVoRixXQUFmO0FBRUFMLGFBQVcsQ0FBQ3lELGdCQUFaLENBQTZCL0csT0FBN0IsRUFBc0NHLFFBQXRDLEVBQWdEQyxTQUFoRDtBQUNIa0QsYUFBVyxDQUFDMkQsWUFBWixDQUF5QlgsaUJBQXpCOztBQUNBaEQsYUFBVyxDQUFDQyxHQUFaLENBQWtCLElBQUlwRCxRQUFMLEdBQWlCLENBQWxDLEVBQXNDd0UsVUFBdEMsR0FBbUQsWUFBVztBQUM3RGlFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaO0FBQ0EsR0FGRCxDQTlCMEIsQ0FrQzFCOzs7QUFDQSxNQUFJQyxNQUFNLEdBQUcsSUFBSTFCLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBYjtBQUFpQzBCLFFBQU0sQ0FBQzNGLE9BQVAsQ0FBZSxFQUFmLEVBQW1CLENBQW5CO0FBRTlCLE1BQUk0RixPQUFPLEdBQUcsSUFBSTNCLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBZDtBQUFrQzJCLFNBQU8sQ0FBQzVGLE9BQVIsQ0FBZ0IsRUFBaEIsRUFBb0IsRUFBcEI7QUFDbEMsTUFBSTZGLE9BQU8sR0FBRyxJQUFJNUIsV0FBSixDQUFnQixDQUFoQixDQUFkO0FBQWtDNEIsU0FBTyxDQUFDN0YsT0FBUixDQUFnQixFQUFoQixFQUFvQixFQUFwQjtBQUNsQyxNQUFJOEYsT0FBTyxHQUFHLElBQUk3QixXQUFKLENBQWdCLENBQWhCLENBQWQ7QUFBa0M2QixTQUFPLENBQUM5RixPQUFSLENBQWdCLEVBQWhCLEVBQW9CLEVBQXBCO0FBRXJDLE1BQUkrRixLQUFLLEdBQUcsSUFBSTlCLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBWjtBQUFnQzhCLE9BQUssQ0FBQy9GLE9BQU4sQ0FBYyxFQUFkLEVBQWtCLEVBQWxCO0FBQ2hDLE1BQUlnRyxLQUFLLEdBQUcsSUFBSS9CLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBWjtBQUFnQytCLE9BQUssQ0FBQ2hHLE9BQU4sQ0FBYyxFQUFkLEVBQWtCLEVBQWxCO0FBQ2hDLE1BQUlpRyxLQUFLLEdBQUcsSUFBSWhDLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBWjtBQUFnQ2dDLE9BQUssQ0FBQ2pHLE9BQU4sQ0FBYyxFQUFkLEVBQWtCLEVBQWxCO0FBQzdCLE1BQUlrRyxLQUFLLEdBQUcsSUFBSWpDLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBWjtBQUFnQ2lDLE9BQUssQ0FBQ2xHLE9BQU4sQ0FBYyxFQUFkLEVBQWtCLEVBQWxCO0FBRWhDLE1BQUltRyxTQUFTLEdBQUcsSUFBSWxDLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBaEI7QUFBb0NrQyxXQUFTLENBQUNuRyxPQUFWLENBQWtCLENBQWxCLEVBQW9CLENBQXBCO0FBQ3BDLE1BQUlvRyxTQUFTLEdBQUcsSUFBSW5DLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBaEI7QUFBb0NtQyxXQUFTLENBQUNwRyxPQUFWLENBQWtCLEVBQWxCLEVBQXFCLENBQXJCO0FBRXZDLE1BQUlxRyxRQUFRLEdBQUcsSUFBSXBDLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBZjtBQUFtQ29DLFVBQVEsQ0FBQ3JHLE9BQVQsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7QUFHaEMsTUFBSXNHLE1BQU0sR0FBRyxJQUFJckMsV0FBSixDQUFnQixDQUFoQixDQUFiO0FBQWlDcUMsUUFBTSxDQUFDdEcsT0FBUCxDQUFlLEVBQWYsRUFBbUIsQ0FBbkI7QUFFakMsTUFBSXVHLE9BQU8sR0FBRyxJQUFJdEMsV0FBSixDQUFnQixDQUFoQixDQUFkO0FBQWtDc0MsU0FBTyxDQUFDdkcsT0FBUixDQUFnQixFQUFoQixFQUFvQixDQUFwQjtBQUVsQyxNQUFJd0csTUFBTSxHQUFHLElBQUl2QyxXQUFKLENBQWdCLENBQWhCLENBQWI7QUFBaUN1QyxRQUFNLENBQUN4RyxPQUFQLENBQWUsRUFBZixFQUFrQixDQUFsQjtBQUVqQyxNQUFJeUcsSUFBSSxHQUFHLElBQUl4QyxXQUFKLENBQWdCLENBQWhCLENBQVg7QUFBK0J3QyxNQUFJLENBQUN6RyxPQUFMLENBQWEsRUFBYixFQUFnQixDQUFoQjtBQUUvQixNQUFJMEcsS0FBSyxHQUFHLElBQUl6QyxXQUFKLENBQWdCLEVBQWhCLENBQVo7QUFBaUN5QyxPQUFLLENBQUMxRyxPQUFOLENBQWMsRUFBZCxFQUFpQixDQUFqQjtBQUNqQyxNQUFJMkcsTUFBTSxHQUFHLElBQUkxQyxXQUFKLENBQWdCLEVBQWhCLENBQWI7QUFBa0MwQyxRQUFNLENBQUMzRyxPQUFQLENBQWUsRUFBZixFQUFrQixDQUFsQjtBQUVsQyxNQUFJNEcsU0FBUyxHQUFHLElBQUkzQyxXQUFKLENBQWdCLEVBQWhCLENBQWhCO0FBQXFDMkMsV0FBUyxDQUFDNUcsT0FBVixDQUFrQixFQUFsQixFQUFxQixDQUFyQjtBQUVyQyxNQUFJNkcsSUFBSSxHQUFHLElBQUk1QyxXQUFKLENBQWdCLEVBQWhCLENBQVg7QUFBZ0M0QyxNQUFJLENBQUM3RyxPQUFMLENBQWEsRUFBYixFQUFnQixDQUFoQjtBQUVoQyxNQUFJOEcsV0FBVyxHQUFHLElBQUk3QyxXQUFKLENBQWdCLEVBQWhCLENBQWxCO0FBQXVDNkMsYUFBVyxDQUFDOUcsT0FBWixDQUFvQixFQUFwQixFQUF1QixDQUF2QjtBQUV2QyxNQUFJK0csVUFBVSxHQUFHLElBQUk5QyxXQUFKLENBQWdCLEVBQWhCLENBQWpCO0FBQXNDOEMsWUFBVSxDQUFDL0csT0FBWCxDQUFtQixFQUFuQixFQUFzQixDQUF0QjtBQUN0QyxNQUFJZ0gsVUFBVSxHQUFHLElBQUkvQyxXQUFKLENBQWdCLEVBQWhCLENBQWpCO0FBQXNDK0MsWUFBVSxDQUFDaEgsT0FBWCxDQUFtQixFQUFuQixFQUFzQixDQUF0QjtBQUV6QyxNQUFJaUgsU0FBUyxHQUFHLElBQUloRCxXQUFKLENBQWdCLEVBQWhCLENBQWhCO0FBQXFDZ0QsV0FBUyxDQUFDakgsT0FBVixDQUFrQixFQUFsQixFQUFxQixDQUFyQjtBQUdyQyxNQUFJa0gsT0FBTyxHQUFHLElBQUluSCxlQUFKLENBQW9CLENBQXBCLEVBQXVCLENBQXZCLENBQWQ7QUFBeUNtSCxTQUFPLENBQUNsSCxPQUFSLENBQWdCLEVBQWhCLEVBQW9CLEVBQXBCO0FBRXpDLENBN0VELEMsQ0FrRkE7OztBQUNBLFNBQVM4RSxRQUFULEdBQW9CO0FBQ2hCLE1BQUlsSSxHQUFHLElBQUksSUFBWCxFQUFpQjtBQUNuQjtBQUNBOztBQUNFLE1BQUksQ0FBQzZELFNBQUwsRUFBZ0I7QUFDbEJvRSx5QkFBcUIsQ0FBQ0MsUUFBRCxDQUFyQjtBQUFpQztBQUNqQzs7QUFFRCxNQUFJcUMsZ0JBQWdCLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUF2QixDQVJtQixDQVNoQjs7QUFDSCxNQUFJQyxHQUFHLEdBQUc1RixJQUFJLENBQUN4RCxLQUFMLENBQVdrSixJQUFJLENBQUNDLEdBQUwsS0FBYSxJQUF4QixDQUFWOztBQUNBLE1BQUdDLEdBQUcsSUFBSXBLLGFBQVYsRUFBd0I7QUFDdkJBLGlCQUFhLEdBQUdvSyxHQUFoQjtBQUNBbEssb0JBQWdCLEdBQUdELFVBQW5CO0FBQ0FBLGNBQVUsR0FBRyxDQUFiO0FBQ0EsR0FKRCxNQUlPO0FBQ0FBLGNBQVU7QUFDYixHQWpCZSxDQW1CaEI7OztBQUNILE1BQUcsQ0FBQ3VELE1BQU0sQ0FBQ1ksZUFBUCxDQUF1QjZGLGdCQUF2QixDQUFKLEVBQThDO0FBQzdDLFFBQUc3SixRQUFRLENBQUMsRUFBRCxDQUFSLElBQWdCb0QsTUFBTSxDQUFDb0IsT0FBUCxFQUFuQixFQUFvQztBQUMxQnBCLFlBQU0sQ0FBQzBCLElBQVAsQ0FBWStFLGdCQUFaO0FBQ0gsS0FGUCxNQUVhLElBQUk3SixRQUFRLENBQUMsRUFBRCxDQUFSLElBQWdCb0QsTUFBTSxDQUFDcUIsU0FBUCxFQUFwQixFQUF3QztBQUMzQ3JCLFlBQU0sQ0FBQzJCLE1BQVAsQ0FBYzhFLGdCQUFkO0FBQ0gsS0FGTSxNQUVBLElBQUc3SixRQUFRLENBQUMsRUFBRCxDQUFSLElBQWdCb0QsTUFBTSxDQUFDc0IsU0FBUCxFQUFuQixFQUF1QztBQUMxQ3RCLFlBQU0sQ0FBQ3dCLE1BQVAsQ0FBY2lGLGdCQUFkO0FBQ0gsS0FGTSxNQUVBLElBQUc3SixRQUFRLENBQUMsRUFBRCxDQUFSLElBQWdCb0QsTUFBTSxDQUFDdUIsVUFBUCxFQUFuQixFQUF3QztBQUMzQ3ZCLFlBQU0sQ0FBQ3lCLE9BQVAsQ0FBZWdGLGdCQUFmO0FBQ0gsS0FGTSxNQUVBLElBQUc3SixRQUFRLENBQUMsRUFBRCxDQUFYLEVBQWlCO0FBQzdCb0QsWUFBTSxDQUFDNEIsTUFBUDtBQUNBO0FBQ0UsR0FoQ2UsQ0FrQ2hCOzs7QUFDSUcsUUFBTSxDQUFDSSxNQUFQLENBQWNuQyxNQUFNLENBQUNPLFFBQVAsQ0FBZ0IsQ0FBaEIsSUFBc0JQLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixDQUFsQixJQUF1QixDQUEzRCxFQUNJTixNQUFNLENBQUNPLFFBQVAsQ0FBZ0IsQ0FBaEIsSUFBc0JQLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixDQUFsQixJQUF1QixDQURqRDtBQUdILE1BQUl1RyxlQUFlLEdBQUdwSCxXQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FDaERLLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQixDQUFoQixDQURnRCxFQUM1QkYsTUFBTSxDQUFDRSxRQUFQLENBQWdCLENBQWhCLENBRDRCLENBQXZCLEVBQ2dCNkMsUUFEdEM7QUFFQSxNQUFJK0QsZUFBZSxHQUFHckgsV0FBVyxDQUFDQyxHQUFaLENBQWdCQyxPQUFPLENBQ2hESyxNQUFNLENBQUNHLE1BQVAsQ0FBYyxDQUFkLENBRGdELEVBQzlCSCxNQUFNLENBQUNHLE1BQVAsQ0FBYyxDQUFkLENBRDhCLENBQXZCLEVBQ1k0QyxRQURsQyxDQXhDZSxDQTJDWjs7QUFDQTdHLEtBQUcsQ0FBQzZLLFNBQUosR0FBZ0IsU0FBaEI7QUFDQTdLLEtBQUcsQ0FBQzhLLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CakYsTUFBTSxDQUFDQyxNQUFQLENBQWMsQ0FBZCxDQUFuQixFQUFxQ0QsTUFBTSxDQUFDQyxNQUFQLENBQWMsQ0FBZCxDQUFyQzs7QUFHSixPQUFJLElBQUlpRixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUd4SCxXQUFXLENBQUN3RCxNQUEvQixFQUF1Q2dFLENBQUMsRUFBeEMsRUFBNEM7QUFDOUMsU0FBSSxJQUFJdEosQ0FBQyxHQUFHb0UsTUFBTSxDQUFDRSxhQUFQLENBQXFCLENBQXJCLENBQVosRUFBcUN0RSxDQUFDLElBQUlvRSxNQUFNLENBQUNHLFdBQVAsQ0FBbUIsQ0FBbkIsQ0FBMUMsRUFBaUUsRUFBRXZFLENBQW5FLEVBQXNFO0FBQ2xFLFdBQUksSUFBSUQsR0FBQyxHQUFHcUUsTUFBTSxDQUFDRSxhQUFQLENBQXFCLENBQXJCLENBQVosRUFBcUN2RSxHQUFDLElBQUlxRSxNQUFNLENBQUNHLFdBQVAsQ0FBbUIsQ0FBbkIsQ0FBMUMsRUFBaUUsRUFBRXhFLEdBQW5FLEVBQXNFO0FBQzVELFlBQUd1SixDQUFDLElBQUUsQ0FBTixFQUFTO0FBQ3BCLGNBQUkzRSxLQUFJLEdBQUdoRixTQUFTLENBQUNtQyxXQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FBQ2pDLEdBQUQsRUFBR0MsQ0FBSCxDQUF2QixFQUE4QmUsSUFBL0IsQ0FBcEI7QUFFQXhDLGFBQUcsQ0FBQ2dMLFNBQUosQ0FBY3JILFFBQWQsRUFDSXlDLEtBQUksQ0FBQzdFLE1BQUwsQ0FBWSxDQUFaLEVBQWVDLENBRG5CLEVBRUk0RSxLQUFJLENBQUM3RSxNQUFMLENBQVksQ0FBWixFQUFlRSxDQUZuQixFQUdJMkUsS0FBSSxDQUFDN0UsTUFBTCxDQUFZLENBQVosRUFBZUcsQ0FIbkIsRUFJSTBFLEtBQUksQ0FBQzdFLE1BQUwsQ0FBWSxDQUFaLEVBQWVJLENBSm5CLEVBS0lrRSxNQUFNLENBQUM3RCxNQUFQLENBQWMsQ0FBZCxJQUFvQlIsR0FBQyxHQUFHdEIsU0FMNUIsRUFNSTJGLE1BQU0sQ0FBQzdELE1BQVAsQ0FBYyxDQUFkLElBQW9CUCxDQUFDLEdBQUd0QixVQU41QixFQU9JRCxTQVBKLEVBUUlDLFVBUko7QUFVQSxTQWJXLE1BY1AsSUFBRzRLLENBQUMsSUFBRSxDQUFOLEVBQ047QUFDQyxjQUFJcEYsRUFBRSxHQUFHcEMsV0FBVyxDQUFDQyxHQUFaLENBQWdCQyxPQUFPLENBQUNqQyxHQUFELEVBQUdDLENBQUgsQ0FBdkIsRUFBOEJpQyxTQUF2Qzs7QUFDQSxjQUFHaUMsRUFBRSxJQUFFLElBQVAsRUFDQTtBQUNDLGdCQUFJcEUsT0FBTSxHQUFHWSxTQUFTLENBQUN3RCxFQUFFLENBQUNuRCxJQUFKLENBQVQsQ0FBbUJqQixNQUFoQztBQUVBdkIsZUFBRyxDQUFDZ0wsU0FBSixDQUFjckgsUUFBZCxFQUNDcEMsT0FBTSxDQUFDLENBQUQsQ0FBTixDQUFVQyxDQURYLEVBQ2NELE9BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUUsQ0FEeEIsRUFFQ0YsT0FBTSxDQUFDLENBQUQsQ0FBTixDQUFVRyxDQUZYLEVBRWNILE9BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUksQ0FGeEIsRUFHQ2tFLE1BQU0sQ0FBQzdELE1BQVAsQ0FBYyxDQUFkLElBQW9CUixHQUFDLEdBQUN0QixTQUF0QixHQUFtQ2lDLFNBQVMsQ0FBQ3dELEVBQUUsQ0FBQ25ELElBQUosQ0FBVCxDQUFtQlIsTUFBbkIsQ0FBMEIsQ0FBMUIsQ0FIcEMsRUFJQzZELE1BQU0sQ0FBQzdELE1BQVAsQ0FBYyxDQUFkLElBQW9CUCxDQUFDLEdBQUN0QixVQUF0QixHQUFvQ2dDLFNBQVMsQ0FBQ3dELEVBQUUsQ0FBQ25ELElBQUosQ0FBVCxDQUFtQlIsTUFBbkIsQ0FBMEIsQ0FBMUIsQ0FKckMsRUFLQ1QsT0FBTSxDQUFDLENBQUQsQ0FBTixDQUFVRyxDQUxYLEVBS2NILE9BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUksQ0FMeEI7QUFNQTtBQUNEOztBQUNBLFlBQUlzRCxNQUFNLEdBQUcxQixXQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FBQ2pDLEdBQUQsRUFBR0MsQ0FBSCxDQUF2QixFQUE4QndELE1BQTNDOztBQUNBLFlBQUdBLE1BQU0sSUFBSSxJQUFWLElBQWtCbkQsV0FBVyxDQUFDbUQsTUFBTSxDQUFDekMsSUFBUixDQUFYLENBQXlCTixNQUF6QixJQUFtQzZJLENBQXhELEVBQTJEO0FBQzFELGNBQUlFLFVBQVUsR0FBR25KLFdBQVcsQ0FBQ21ELE1BQU0sQ0FBQ3pDLElBQVIsQ0FBNUI7QUFFQXhDLGFBQUcsQ0FBQ2dMLFNBQUosQ0FBY3JILFFBQWQsRUFDR3NILFVBQVUsQ0FBQzFKLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJDLENBRHhCLEVBRUd5SixVQUFVLENBQUMxSixNQUFYLENBQWtCLENBQWxCLEVBQXFCRSxDQUZ4QixFQUdHd0osVUFBVSxDQUFDMUosTUFBWCxDQUFrQixDQUFsQixFQUFxQkcsQ0FIeEIsRUFJR3VKLFVBQVUsQ0FBQzFKLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJJLENBSnhCLEVBS0drRSxNQUFNLENBQUM3RCxNQUFQLENBQWMsQ0FBZCxJQUFvQlIsR0FBQyxHQUFHdEIsU0FBeEIsR0FBcUMrSyxVQUFVLENBQUNqSixNQUFYLENBQWtCLENBQWxCLENBTHhDLEVBTUc2RCxNQUFNLENBQUM3RCxNQUFQLENBQWMsQ0FBZCxJQUFvQlAsQ0FBQyxHQUFHdEIsVUFBeEIsR0FBc0M4SyxVQUFVLENBQUNqSixNQUFYLENBQWtCLENBQWxCLENBTnpDLEVBT0dpSixVQUFVLENBQUMxSixNQUFYLENBQWtCLENBQWxCLEVBQXFCRyxDQVB4QixFQVFHdUosVUFBVSxDQUFDMUosTUFBWCxDQUFrQixDQUFsQixFQUFxQkksQ0FSeEI7QUFVQTs7QUFFVSxZQUFHb0osQ0FBQyxJQUFJLENBQUwsSUFBVXhILFdBQVcsQ0FBQ0MsR0FBWixDQUFnQkMsT0FBTyxDQUFDakMsR0FBRCxFQUFHQyxDQUFILENBQXZCLEVBQThCcUYsWUFBOUIsSUFBOEMsQ0FBeEQsSUFBNkR2RCxXQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FBQ2pDLEdBQUQsRUFBR0MsQ0FBSCxDQUF2QixFQUE4Qm9GLFFBQTlCLElBQTBDOEQsZUFBdkcsSUFBMEhwSCxXQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FBQ2pDLEdBQUQsRUFBR0MsQ0FBSCxDQUF2QixFQUE4Qm9GLFFBQTlCLElBQTBDK0QsZUFBdkssRUFBd0w7QUFDbkx4RSxjQUFJLEdBQUdoRixTQUFTLENBQUNtQyxXQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FBQ2pDLEdBQUQsRUFBR0MsQ0FBSCxDQUF2QixFQUE4QnFGLFlBQS9CLENBQWhCO0FBQ0F2RixnQkFBTSxHQUFHZ0csUUFBUSxDQUFDbkIsSUFBSSxDQUFDN0UsTUFBTixFQUFjNkUsSUFBSSxDQUFDOEUsY0FBbkIsRUFBbUM5RSxJQUFJLENBQUNzQixTQUF4QyxDQUFqQjtBQUNmMUgsYUFBRyxDQUFDZ0wsU0FBSixDQUFjckgsUUFBZCxFQUNJcEMsTUFBTSxDQUFDQyxDQURYLEVBRUlELE1BQU0sQ0FBQ0UsQ0FGWCxFQUdJRixNQUFNLENBQUNHLENBSFgsRUFJSUgsTUFBTSxDQUFDSSxDQUpYLEVBS0lrRSxNQUFNLENBQUM3RCxNQUFQLENBQWMsQ0FBZCxJQUFvQlIsR0FBQyxHQUFHdEIsU0FMNUIsRUFNSTJGLE1BQU0sQ0FBQzdELE1BQVAsQ0FBYyxDQUFkLElBQW9CUCxDQUFDLEdBQUd0QixVQU41QixFQU9JRCxTQVBKLEVBUUlDLFVBUko7QUFTQTtBQUNEO0FBQ0U7O0FBRUosUUFBSTRLLENBQUMsSUFBSSxDQUFULEVBQVk7QUFDVixVQUFJeEosUUFBTSxHQUFHdUMsTUFBTSxDQUFDUyxPQUFQLENBQWVULE1BQU0sQ0FBQ1EsU0FBdEIsQ0FBYjtBQUNBdEUsU0FBRyxDQUFDZ0wsU0FBSixDQUFjckgsUUFBZCxFQUNDcEMsUUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVQyxDQURYLEVBQ2NELFFBQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUUsQ0FEeEIsRUFFQ0YsUUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRyxDQUZYLEVBRWNILFFBQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUksQ0FGeEIsRUFHQ2tFLE1BQU0sQ0FBQzdELE1BQVAsQ0FBYyxDQUFkLElBQW1COEIsTUFBTSxDQUFDTyxRQUFQLENBQWdCLENBQWhCLENBSHBCLEVBSUN3QixNQUFNLENBQUM3RCxNQUFQLENBQWMsQ0FBZCxJQUFtQjhCLE1BQU0sQ0FBQ08sUUFBUCxDQUFnQixDQUFoQixDQUpwQixFQUtDUCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FMRCxFQUt1Qk4sTUFBTSxDQUFDTSxVQUFQLENBQWtCLENBQWxCLENBTHZCO0FBT0U7QUFDSjs7QUFFRHBFLEtBQUcsQ0FBQ21MLFNBQUosR0FBZ0IsT0FBaEI7O0FBRUEsT0FBSSxJQUFJcEksQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHZSxNQUFNLENBQUNVLFNBQVAsQ0FBaUI3QixNQUFwQyxFQUE0Q0ksQ0FBQyxFQUE3QyxFQUNBO0FBQ0MvQyxPQUFHLENBQUM2SyxTQUFKLEdBQWdCLFNBQWhCO0FBQ0E3SyxPQUFHLENBQUM4SyxRQUFKLENBQWEsS0FBTS9ILENBQUMsR0FBRyxFQUF2QixFQUE0QixHQUE1QixFQUNDLEVBREQsRUFDSyxFQURMOztBQUdBLFFBQUcsT0FBT2UsTUFBTSxDQUFDVSxTQUFQLENBQWlCNUIsTUFBakIsQ0FBd0JHLENBQXhCLENBQVAsSUFBbUMsV0FBdEMsRUFDQTtBQUNDLFVBQUlxSSxFQUFFLEdBQUdqSixTQUFTLENBQUMyQixNQUFNLENBQUNVLFNBQVAsQ0FBaUI1QixNQUFqQixDQUF3QkcsQ0FBeEIsRUFBMkJQLElBQTVCLENBQWxCO0FBQ0EsVUFBSWpCLFFBQU0sR0FBRzZKLEVBQUUsQ0FBQzdKLE1BQWhCO0FBRUF2QixTQUFHLENBQUNnTCxTQUFKLENBQWNySCxRQUFkLEVBQ0NwQyxRQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVDLENBRFgsRUFDY0QsUUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRSxDQUR4QixFQUVDRixRQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVHLENBRlgsRUFFY0gsUUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVSSxDQUZ4QixFQUdDLEtBQU1vQixDQUFDLEdBQUcsRUFBVixHQUFnQnFJLEVBQUUsQ0FBQ3BKLE1BQUgsQ0FBVSxDQUFWLENBSGpCLEVBSUMsTUFBTW9KLEVBQUUsQ0FBQ3BKLE1BQUgsQ0FBVSxDQUFWLENBSlAsRUFLQ1QsUUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRyxDQUxYLEVBS2NILFFBQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUksQ0FMeEI7O0FBT0EsVUFBR21DLE1BQU0sQ0FBQ1UsU0FBUCxDQUFpQjVCLE1BQWpCLENBQXdCRyxDQUF4QixFQUEyQlIsR0FBM0IsR0FBK0IsQ0FBbEMsRUFDQTtBQUNDdkMsV0FBRyxDQUFDNkssU0FBSixHQUFnQixTQUFoQjtBQUNBN0ssV0FBRyxDQUFDcUwsUUFBSixDQUFhLEtBQUt2SCxNQUFNLENBQUNVLFNBQVAsQ0FBaUI1QixNQUFqQixDQUF3QkcsQ0FBeEIsRUFBMkJSLEdBQTdDLEVBQ0MsS0FBTVEsQ0FBQyxHQUFDLEVBQVIsR0FBYyxFQURmLEVBRUMsTUFBTSxFQUZQO0FBR0E7QUFDRDtBQUNEOztBQUNEL0MsS0FBRyxDQUFDbUwsU0FBSixHQUFnQixNQUFoQixDQXpKbUIsQ0EySmhCOztBQUNBLE1BQUk1SixNQUFNLEdBQUd1QyxNQUFNLENBQUNTLE9BQVAsQ0FBZVQsTUFBTSxDQUFDUSxTQUF0QixDQUFiO0FBQ0h0RSxLQUFHLENBQUNnTCxTQUFKLENBQWNySCxRQUFkLEVBQ0dwQyxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVDLENBRGIsRUFFR0QsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRSxDQUZiLEVBR0dGLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUcsQ0FIYixFQUlHSCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVJLENBSmIsRUFLR2tFLE1BQU0sQ0FBQzdELE1BQVAsQ0FBYyxDQUFkLElBQW1COEIsTUFBTSxDQUFDTyxRQUFQLENBQWdCLENBQWhCLENBTHRCLEVBTUd3QixNQUFNLENBQUM3RCxNQUFQLENBQWMsQ0FBZCxJQUFtQjhCLE1BQU0sQ0FBQ08sUUFBUCxDQUFnQixDQUFoQixDQU50QixFQU9HUCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FQSCxFQU95Qk4sTUFBTSxDQUFDTSxVQUFQLENBQWtCLENBQWxCLENBUHpCO0FBU0EzRCxlQUFhLEdBQUc4SixnQkFBaEI7QUFDQXRDLHVCQUFxQixDQUFDQyxRQUFELENBQXJCO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNqMkJELHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9tYXBcIjtcblxuXG5cbiIsIi8vIGkgd2FudCBhIGNhbWVyYSBmb2xsb3dpbmcgdGhlIGNoYXIgYXJvdW5kIHRoZSBtYXBcblxuXG5sZXQgY3R4ID0gbnVsbDtcblxuLy8gY3JlYXRlIGEgbWFwIHdpdGggMTAqMTAgdGlsZVxubGV0IGdhbWVNYXAgPSBbXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDAsIDAsIDAsIDAsIDYsIDUsIDUsIDcsIDAsIDI2LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI3LCAwLCAwLCAwLCA0LCA0LCA0LCA0LFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCAwLCAxLCAxLCAxLCAxLCAyMSwgMjAsIDIwLCAyMiwgMSwgMjksIDI4LCAyOCwgMjgsIDI4LCAyOCwgMzAsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDEsIDEsIDEsIDEsIDIxLCAyMCwgMjAsIDIyLCAxLCAyOSwgMjgsIDI4LCAyOCwgMjgsIDI4LCAzMCwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMSwgMSwgMSwgMSwgMjEsIDIwLCAyMCwgMjIsIDEsIDI5LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDMwLCAyLCAyLCAwLCA0LCA0LCA0LCA0LFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCAwLCAxLCAxLCAxLCAxLCAxNiwgMjAsIDE2LCAxOCwgMSwgMTYsIDE4LCAxNiwgMTksIDI4LCAxOCwgMTgsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDMxLCAzMiwgMzMsIDM0LCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLCA0LCA0LCA0LCA0LFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCAwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAzNSwgMzYsIDM3LCAzOCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcbiAgICA0LCA0LCA0LCA0LCA0LCA0LCAwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAzOSwgNDAsIDQxLCA0MiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgMCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMTYsIDM2LCAxNiwgMTgsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5dO1xuXG4vLyDmr4/kuKrlnLDnoJblpJrlsJFwaXhlbFxubGV0IHRpbGVXaWR0aCA9IDQwO1xubGV0IHRpbGVIZWlnaHQgPSA0MDtcbi8vIOWcsOWbvuWkp+Wwj+WwseaYrzIwKjIwXG5sZXQgbWFwV2lkdGggPSAzMDtcbmxldCBtYXBIZWlnaHQgPSAzMDtcbi8vIGZyYW1lcmF0ZVxubGV0IGN1cnJlbnRTZWNvbmQgPSAwO1xubGV0IGZyYW1lQ291bnQgPSAwO1xubGV0IGZyYW1lc0xhc3RTZWNvbmQgPSAwO1xubGV0IGxhc3RGcmFtZVRpbWUgPSAwO1xuXG5cbi8vIGtleUNvZGUgOiBib29sZWFuIHRvIHRlbGwgdXMgd2hpY2ggb25lIGFyZSBwcmVzc2VkXG5sZXQgaGVsZEtleXMgPSB7XG4gICAgLy8gMzc6IGxlZnRcbiAgICAzNyA6IGZhbHNlLFxuICAgIC8vIDM4OiB1cFxuICAgIDM4IDogZmFsc2UsXG4gICAgLy8gMzk6IHJpZ2h0XG4gICAgMzkgOiBmYWxzZSxcbiAgICAvLyA0MDogZG93blxuICAgIDQwIDogZmFsc2VcbiAgICAvLyAzMjogc3BhY2Vcbn07XG5cbmxldCBkaXJlY3Rpb25zID0ge1xuXHR1cFx0OiAwLFxuXHRyaWdodDogMSxcblx0ZG93bjogMixcblx0bGVmdDogM1xufTtcblxuXG4vLyDlnLDmnb/np43nsbtcbmxldCBmbG9vclR5cGVzID0ge1xuICAgIHNvbGlkOiAwLFxuICAgIHBhdGg6IDEsXG4gICAgb2NlYW46IDJcbn07XG5cbi8vIOaVsOWtl++8iGdhbWVNYXDvvInlr7nlupTkuIrpopzoibLlkozlnLDmnb/np43nsbtcbi8vIDA65aKZ5aOBIDE66I2J5ZywIDI66ZmG5ZywICA0OiDmsLQgIFxuLy8gNTrpu4ToibLlhoXpg6jlopnlo4EgNjog6buE6Imy5YaF6YOo5aKZ5aOB5bem6KeSIDc66buE6Imy5YaF6YOo5aKZ5aOB5Y+z6KeSXG4vLyAyMDrpu4ToibLlhoXpg6jlnLDmnb8gMjE66buE6Imy5YaF6YOo5aKZ5bemIDIyOum7hOiJsuWGhemDqOWimeWPs1xuLy8gMjU65qOV6Imy5YaF6YOo5aKZ5aOBIDI2OuajleiJsuWGhemDqOWimeWjgeW3puinkiAyNzog5qOV6Imy5YaF6YOo5aKZ5aOB5Y+z6KeSXG4vLyAyODog5qOV6Imy5YaF6YOo5Zyw5p2/IDI5OiDmo5XoibLlhoXpg6jlopnlt6YgMzA65qOV6Imy5YaF6YOo5aKZ5Y+zXG4vLyAxMC0xOSDmiL/lrZDlpJbop4Jcbi8vIDMxLTQyIG1pdW1pdSByb29tXG5sZXQgdGlsZVR5cGVzID0ge1xuXHQwIDogeyBjb2xvcjogXCIjNzkzZDRjXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjAseTowLHc6NDAsaDo0MH1dIH0sXG5cdDEgOiB7IGNvbG9yOiBcIiM2ZGY3YjFcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo0MCx5OjAsdzo0MCxoOjQwfV0gfSxcblx0MiA6IHsgY29sb3I6IFwiI2M5NzQ2MVwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjgwLHk6MCx3OjQwLGg6NDB9XVx0fSxcbiAgICA0IDogeyBjb2xvcjogXCIjMDA4ZGYwXCIsIGZsb29yOiBmbG9vclR5cGVzLm9jZWFuLCBzcHJpdGU6W3t4OjE2MCx5OjAsdzo0MCxoOjQwfV0gfSxcbiAgICA1IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjEyMCx5OjAsdzo0MCxoOjQwfV0gfSxcbiAgICA2IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjEyMCx5OjQwLHc6NDAsaDo0MH1dIH0sXG4gICAgNyA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDo4MCx5OjQwLHc6NDAsaDo0MH1dIH0sXG4gICAgXG4gICAgMTAgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI0MCx5OjQwLHc6NDAsaDo0MH1dfSxcbiAgICAxMSA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjgwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDEyIDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseTo0MCx3OjQwLGg6NDB9XX0sXG4gICAgMTMgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI0MCx5OjgwLHc6NDAsaDo0MH1dfSxcbiAgICAxNCA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjgwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE1IDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseTo4MCx3OjQwLGg6NDB9XX0sXG4gICAgMTYgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI0MCx5OjEyMCx3OjQwLGg6NDB9XX0sXG4gICAgMTcgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjEyMCx3OjQwLGg6NDB9XX0sXG4gICAgMTggOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjEyMCx3OjQwLGg6NDB9XX0sXG4gICAgMTkgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjM2MCx5OjEyMCx3OjQwLGg6NDB9XX0sXG4gICAgXG4gICAgMjAgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo0MCx5OjQwLHc6NDAsaDo0MH1dfSxcbiAgICAyMSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDo4MCx5OjgwLHc6NDAsaDo0MH1dfSxcbiAgICAyMiA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoxMjAseTo4MCx3OjQwLGg6NDB9XX0sXG5cbiAgICAyNSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseToxNjAsdzo0MCxoOjQwfV19LFxuICAgIDI2IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI0MCx5OjE2MCx3OjQwLGg6NDB9XX0sXG4gICAgMjcgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjgwLHk6MTYwLHc6NDAsaDo0MH1dfSxcbiAgICAyOCA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjI4MCx5OjIwMCx3OjQwLGg6NDB9XX0sXG4gICAgMjkgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzYwLHk6MTYwLHc6NDAsaDo0MH1dfSxcbiAgICAzMCA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyNDAseToyMDAsdzo0MCxoOjQwfV19LFxuXG4gICAgMzEgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6MjAwLHc6NDAsaDo0MH1dfSxcbiAgICAzMiA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozNjAseToyMDAsdzo0MCxoOjQwfV19LFxuICAgIDMzIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjQwMCx5OjIwMCx3OjQwLGg6NDB9XX0sXG4gICAgMzQgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6NDQwLHk6MjAwLHc6NDAsaDo0MH1dfSxcbiAgICAzNSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseToyNDAsdzo0MCxoOjQwfV19LFxuICAgIDM2IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6MzYwLHk6MjQwLHc6NDAsaDo0MH1dfSxcbiAgICAzNyA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDo0MDAseToyNDAsdzo0MCxoOjQwfV19LFxuICAgIDM4IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjQ0MCx5OjI0MCx3OjQwLGg6NDB9XX0sXG4gICAgMzkgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6MjgwLHc6NDAsaDo0MH1dfSxcbiAgICA0MCA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjM2MCx5OjI4MCx3OjQwLGg6NDB9XX0sXG4gICAgNDEgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo0MDAseToyODAsdzo0MCxoOjQwfV19LFxuICAgIDQyIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjQ0MCx5OjI4MCx3OjQwLGg6NDB9XX0sXG5cblxuICAgIFxufTtcblxubGV0IGNvbGxpc2lvbnMgPSB7XG5cdG5vbmVcdFx0OiAwLFxuXHRzb2xpZFx0XHQ6IDFcbn07XG5cbmxldCBvYmplY3RUeXBlcyA9IHtcblx0MSA6IHtcblx0XHRuYW1lIDogXCJGbG93ZXJcIixcblx0XHRzcHJpdGUgOiBbe3g6NDAseToxODAsdzo0MCxoOjIwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5ub25lLFxuXHRcdHpJbmRleCA6IDFcblx0fSxcblx0MiA6IHtcblx0XHRuYW1lIDogXCJmZW5jZVwiLFxuXHRcdHNwcml0ZSA6IFt7eDo0MCx5OjIwMCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcblx0fSxcblx0MyA6IHtcblx0XHRuYW1lIDogXCJUcmVlXCIsXG5cdFx0c3ByaXRlIDogW3t4OjgwLHk6MTYwLHc6ODAsaDo4MH1dLFxuXHRcdG9mZnNldCA6IFstMjAsLTIwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDNcbiAgICB9LFxuICAgIDQgOiB7XG5cdFx0bmFtZSA6IFwibWFzaHJvb21zXCIsXG5cdFx0c3ByaXRlIDogW3t4OjQwLHk6MTYwLHc6NDAsaDoyMH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMubm9uZSxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICA1IDoge1xuXHRcdG5hbWUgOiBcIlBpZyBTaG9wXCIsXG5cdFx0c3ByaXRlIDogW3t4OjE2MCx5OjE2MCx3OjgwLGg6ODB9XSxcblx0XHRvZmZzZXQgOiBbLTIwLC0yMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAzXG4gICAgfSxcbiAgICA2IDoge1xuXHRcdG5hbWUgOiBcImRvbnV0c1wiLFxuXHRcdHNwcml0ZSA6IFt7eDozNjAseTowLHc6ODAsaDoxMTV9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLm5vbmUsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgNyA6IHtcblx0XHRuYW1lIDogXCJjb29raW5nXCIsXG5cdFx0c3ByaXRlIDogW3t4OjE2MCx5OjgwLHc6ODAsaDo4MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMubm9uZSxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICA4IDoge1xuXHRcdG5hbWUgOiBcImNhcnBldFwiLFxuXHRcdHNwcml0ZSA6IFt7eDowLHk6ODAsdzo4MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5ub25lLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDkgOiB7XG5cdFx0bmFtZSA6IFwiZGVza1wiLFxuXHRcdHNwcml0ZSA6IFt7eDowLHk6NDAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxMCA6IHtcblx0XHRuYW1lIDogXCJjaGFpclwiLFxuXHRcdHNwcml0ZSA6IFt7eDozMjAseTowLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTEgOiB7XG5cdFx0bmFtZSA6IFwiVHJlZSBQbGFudFwiLFxuXHRcdHNwcml0ZSA6IFt7eDo0MCx5OjEyMCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDEyIDoge1xuXHRcdG5hbWUgOiBcImRydW1cIixcblx0XHRzcHJpdGUgOiBbe3g6MCx5OjI0MCx3OjgwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDEzIDoge1xuXHRcdG5hbWUgOiBcImluc3RydW1lbnRzXCIsXG5cdFx0c3ByaXRlIDogW3t4OjgwLHk6MjQwLHc6MTIwLGg6ODB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDE0IDoge1xuXHRcdG5hbWUgOiBcIkJvb2tTaGVsZlwiLFxuXHRcdHNwcml0ZSA6IFt7eDoyMDAseToyNDAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxNSA6IHtcblx0XHRuYW1lIDogXCJzYXhvcGhvbmVcIixcblx0XHRzcHJpdGUgOiBbe3g6MjQwLHk6MjQwLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTYgOiB7XG5cdFx0bmFtZSA6IFwiUmlnaHQgRmFjaW5nIENoYWlyXCIsXG5cdFx0c3ByaXRlIDogW3t4OjIwMCx5OjI4MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxufTtcblxuXG4vLyDnianlk4FcbmxldCBpdGVtVHlwZXMgPSB7XG4gICAgMSA6IHtcblx0XHRuYW1lIDogXCJjb2NvbnV0XCIsXG5cdFx0bWF4U3RhY2sgOiA1LFxuXHRcdHNwcml0ZSA6IFt7eDoyNDAseTowLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdXG4gICAgfSxcbiAgICAyIDoge1xuXHRcdG5hbWUgOiBcInN0cmF3YmVycnlcIixcblx0XHRtYXhTdGFjayA6IDUsXG5cdFx0c3ByaXRlIDogW3t4OjI4MCx5OjAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF1cblx0fVxufTtcblxuZnVuY3Rpb24gU3RhY2soaWQsIHF0eSlcbntcblx0dGhpcy50eXBlID0gaWQ7XG5cdHRoaXMucXR5ID0gcXR5O1xufVxuXG5mdW5jdGlvbiBJbnZlbnRvcnkocylcbntcblx0dGhpcy5zcGFjZXNcdFx0PSBzO1xuXHR0aGlzLnN0YWNrc1x0XHQ9IFtdO1xufVxuXG5JbnZlbnRvcnkucHJvdG90eXBlLmFkZEl0ZW1zID0gZnVuY3Rpb24oaWQsIHF0eSlcbntcblx0Zm9yKGxldCBpID0gMDsgaSA8IHRoaXMuc3BhY2VzOyBpKyspXG5cdHsgXG5cdFx0aWYodGhpcy5zdGFja3MubGVuZ3RoPD1pKVxuXHRcdHtcblx0XHRcdGxldCBtYXhIZXJlID0gKHF0eSA+IGl0ZW1UeXBlc1tpZF0ubWF4U3RhY2sgP1xuXHRcdFx0XHRpdGVtVHlwZXNbaWRdLm1heFN0YWNrIDogcXR5KTtcblx0XHRcdFx0dGhpcy5zdGFja3MucHVzaChuZXcgU3RhY2soaWQsIG1heEhlcmUpKTtcblx0XHRcdFxuXHRcdFx0cXR5LT0gbWF4SGVyZTtcblx0XHR9XG5cdFx0ZWxzZSBpZih0aGlzLnN0YWNrc1tpXS50eXBlID09IGlkICYmXG5cdFx0XHR0aGlzLnN0YWNrc1tpXS5xdHkgPCBpdGVtVHlwZXNbaWRdLm1heFN0YWNrKVxuXHRcdHtcblx0XHRcdGxldCBtYXhIZXJlID0gKGl0ZW1UeXBlc1tpZF0ubWF4U3RhY2sgLSB0aGlzLnN0YWNrc1tpXS5xdHkpO1xuXHRcdFx0aWYobWF4SGVyZSA+IHF0eSkgeyBtYXhIZXJlID0gcXR5OyB9XG5cdFx0XHRcblx0XHRcdHRoaXMuc3RhY2tzW2ldLnF0eSs9IG1heEhlcmU7XG5cdFx0XHRxdHktPSBtYXhIZXJlO1xuXHRcdH1cblx0XHRpZihxdHk9PTApIHsgcmV0dXJuIDA7IH1cblx0fVxuXHRyZXR1cm4gcXR5O1xufTtcblxuZnVuY3Rpb24gUGxhY2VkSXRlbVN0YWNrKGlkLCBxdHkpXG57XG5cdHRoaXMudHlwZSA9IGlkO1xuXHR0aGlzLnF0eSA9IHF0eTtcblx0dGhpcy54ID0gMDtcblx0dGhpcy55ID0gMDtcbn1cblxuUGxhY2VkSXRlbVN0YWNrLnByb3RvdHlwZS5wbGFjZUF0ID0gZnVuY3Rpb24obngsIG55KVxue1xuXHRpZihtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLngsIHRoaXMueSldLml0ZW1TdGFjaz09dGhpcylcblx0e1xuXHRcdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMueCwgdGhpcy55KV0uaXRlbVN0YWNrID0gbnVsbDtcblx0fVxuXG5cdHRoaXMueCA9IG54O1xuXHR0aGlzLnkgPSBueTtcblx0XG5cdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KG54LCBueSldLml0ZW1TdGFjayA9IHRoaXM7XG59O1xuXG5cblxuXG5sZXQgZ2FtZXRpbGUgPSBudWxsLCBnYW1ldGlsZVVSTCA9IFwic3JjL2ltYWdlcy90aWxlc2V0ZXN0dC5wbmdcIiwgYXJ0TG9hZGVkID0gZmFsc2U7XG5cblxuXG4vLyDliJvlu7rkuIDkuKrop5LoibIgKG1pdW1pdSlcbmxldCBtaXVtaXUgPSBuZXcgTWl1TWl1KCk7XG4vLyDliqDmm7TlpJrop5LoibLirIdcbmZ1bmN0aW9uIE1pdU1pdSgpIHtcbiAgICB0aGlzLnRpbGVGcm9tXHQ9IFsxLDFdO1xuICAgIC8vIG1pdW1pdeeahOS9jee9rlxuICAgIHRoaXMudGlsZVRvXHRcdD0gWzE1LDE2XTtcbiAgICAvLyB0aW1lIGluIG1pbGxzZWNvbmRzXG4gICAgdGhpcy50aW1lTW92ZWRcdD0gMDtcbiAgICB0aGlzLmRlbGF5TW92ZVx0PSA3MDA7XG5cdHRoaXMuZGltZW5zaW9uc1x0PSBbNDAsNDBdO1xuICAgIHRoaXMucG9zaXRpb25cdD0gWzQ1LDQ1XTtcbiAgICBcbiAgICB0aGlzLmRpcmVjdGlvblx0PSBkaXJlY3Rpb25zLnVwO1xuXHR0aGlzLnNwcml0ZXMgPSB7fTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMudXBdXHQ9IFt7eDowLHk6MTIwLHc6MzAsaDozMH1dO1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy5yaWdodF0gPSBbe3g6MCx5OjE1MCx3OjMwLGg6MzB9XTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMuZG93bl0gPSBbe3g6MCx5OjE4MCx3OjMwLGg6MzB9XTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMubGVmdF0gPSBbe3g6MCx5OjIxMCx3OjMwLGg6MzB9XTtcblx0dGhpcy5pbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KDIpO1xuXG59XG5cblxuLy8g5oqK6KeS6Imy5pS+5Zyo5Zyw56CW5LiKXG5NaXVNaXUucHJvdG90eXBlLmxvY2F0aW9uID0gZnVuY3Rpb24oeCwgeSkge1xuXHR0aGlzLnRpbGVGcm9tXHQ9IFt4LHldO1xuICAgIHRoaXMudGlsZVRvXHRcdD0gW3gseV07XG4gICAgLy8geCBhbmQgeSBwb3NpdGlvbiBvZiB0aGUgdGlsZS4gdXBkYXRlIHRoZSB0aWxlRnJvbSBhbmQgdGlsZVRvIHByb3BlcnRpZXMgdG8gdGhlIG5ldyB0aWxlIGNvb3JkaW5hdGVzXG4gICAgLy8gY2FsY3VsYXRlcyB0aGUgcGl4ZWwgcG9zaXRpb24gb2YgdGhlIGNoYXJhY3llciB1c2UgYmVsb3dcblx0dGhpcy5wb3NpdGlvblx0PSBbKCggdGlsZVdpZHRoICogeCApKyggKHRpbGVXaWR0aCAtIHRoaXMuZGltZW5zaW9uc1swXSkgLyAyICkpLFxuXHRcdCgoIHRpbGVIZWlnaHQgKiB5ICkrKCAodGlsZUhlaWdodCAtIHRoaXMuZGltZW5zaW9uc1sxXSkgLyAyICkpXTtcbn07XG5cbi8vIOagueaNruavj+S4quW4p+aVsOaJvuWIsOinkuiJsuS9jee9rlxuTWl1TWl1LnByb3RvdHlwZS5wcm9jZXNzTW92ZW1lbnQgPSBmdW5jdGlvbih0KSB7XG4gICAgLy8gaWYgY2hhciB0aWxlVG8gPT0gdGlsZUZyb20gY2hhciBpcyBub3QgbW92aW5nLCBzbyByZXR1cm4gZmFsc2Vcblx0aWYoIHRoaXMudGlsZUZyb21bMF0gPT0gdGhpcy50aWxlVG9bMF0gJiYgdGhpcy50aWxlRnJvbVsxXSA9PSB0aGlzLnRpbGVUb1sxXSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAvLyBpZiB0aGUgYW1vdW50IG9mIHRpbWUgcGFzc2VkIHNpbmNlIGNoYXIgYmVnYW4gaXRzIGN1cnJlbnQgbW92ZSA+PSB0aGUgdGltZSBmb3IgY2hhciB0byBtb3ZlIDEgdGlsZS4gd2Ugc2V0IHBvc2l0aW9uIHVzaW5nIGxvY2F0aW9uIGZ1bmN0aW9uXG4gICAgLy8gYWthOiBpZiBjaGFyIHN0aWxsIG1vdmluZ1xuXHRpZigodCAtIHRoaXMudGltZU1vdmVkKSA+PSB0aGlzLmRlbGF5TW92ZSkge1xuICAgICAgICB0aGlzLmxvY2F0aW9uKHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSk7XG4gICAgICAgIGlmKG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSldLmV2ZW50RW50ZXIgIT0gbnVsbCkge1xuXHRcdFx0bWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy50aWxlVG9bMF0sIHRoaXMudGlsZVRvWzFdKV0uZXZlbnRFbnRlcih0aGlzKTtcbiAgICAgICAgfVxuXHR9IGVsc2Uge1xuICAgICAgICAvLyBjdXJyZW50IHBvc2l0aW9uIG9uIGNhbnZhc1xuXHRcdHRoaXMucG9zaXRpb25bMF0gPSAodGhpcy50aWxlRnJvbVswXSAqIHRpbGVXaWR0aCkgKyAoKHRpbGVXaWR0aCAtIHRoaXMuZGltZW5zaW9uc1swXSkgLyAyKTtcblx0XHR0aGlzLnBvc2l0aW9uWzFdID0gKHRoaXMudGlsZUZyb21bMV0gKiB0aWxlSGVpZ2h0KSArICgodGlsZUhlaWdodCAtIHRoaXMuZGltZW5zaW9uc1sxXSkgLyAyKTtcblxuICAgICAgICAvLyBpZiBjaGFyIGlzIG1vdmluZyBvbiB4IGNvb3JkaW5hdGUsIGNhbGN1bGF0ZSBwaXhlbHNcblx0XHRpZih0aGlzLnRpbGVUb1swXSAhPSB0aGlzLnRpbGVGcm9tWzBdKSB7XG4gICAgICAgICAgICAvLyBkaWZmZXJlbmNlID0gZGlzdGFuY2UgbW92ZWRcbiAgICAgICAgICAgIC8vIOWKoOWHj+enu+WKqOeahOWcsOegluWIsOinkuiJsueahOS9jeWtkFxuXHRcdFx0bGV0IGRpZmZlcmVuY2UgPSAodGlsZVdpZHRoIC8gdGhpcy5kZWxheU1vdmUpICogKHQgLSB0aGlzLnRpbWVNb3ZlZCk7XG5cdFx0XHR0aGlzLnBvc2l0aW9uWzBdKz0gKHRoaXMudGlsZVRvWzBdIDwgdGhpcy50aWxlRnJvbVswXSA/IDAgLSBkaWZmZXJlbmNlIDogZGlmZmVyZW5jZSk7XG5cdFx0fVxuXHQgICAgaWYodGhpcy50aWxlVG9bMV0gIT0gdGhpcy50aWxlRnJvbVsxXSkge1xuXHRcdFx0bGV0IGRpZmZlcmVuY2UgPSAodGlsZUhlaWdodCAvIHRoaXMuZGVsYXlNb3ZlKSAqICh0LXRoaXMudGltZU1vdmVkKTtcblx0XHRcdHRoaXMucG9zaXRpb25bMV0rPSAodGhpcy50aWxlVG9bMV08dGhpcy50aWxlRnJvbVsxXSA/IDAgLSBkaWZmZXJlbmNlIDogZGlmZmVyZW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcm91bmQgeCAmIHkgdG8gd2hvbGUgbnVtYmVyIOmcgOimgeaVtOaVsFxuXHRcdHRoaXMucG9zaXRpb25bMF0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMF0pO1xuXHRcdHRoaXMucG9zaXRpb25bMV0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMV0pO1xuICAgIH1cbiAgICAvLyB0cnVlID0gY2hhciBpcyBjdXJyZW50bHkgbW92aW5nXG5cdHJldHVybiB0cnVlO1xufVxuXG5cbi8vIGlmIGNoYXIgY2FuIG1vdmUgaW4gYSBzcGVjaWZpYyBkaXJlY1xuTWl1TWl1LnByb3RvdHlwZS5wbGFjZXNDYW5HbyA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAvLyBpZiB4IGFuZCB5IGlzIGluIG1hcCBib3VuZFxuICAgIGlmKHggPCAwIHx8IHggPj0gbWFwV2lkdGggfHwgeSA8IDAgfHwgeSA+PSBtYXBIZWlnaHQpIHsgXG5cdFx0cmV0dXJuIGZhbHNlOyBcblx0fVxuICAgIC8vIGlmIHRoZSB0aWxlIGlzIHBhdGggdGlsZSAob25seSBtb3ZlIGlmIGl0cyBhIHBhdGgpXG4gICAgICAgIGlmKHRpbGVUeXBlc1tnYW1lTWFwW3RvSW5kZXgoeCx5KV1dLmZsb29yICE9IGZsb29yVHlwZXMucGF0aCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgaWYobWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0ub2JqZWN0ICE9IG51bGwpIHtcblx0XHRcdGxldCBvYmplY3QgPSBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5vYmplY3Q7XG5cdFx0XHRpZihvYmplY3RUeXBlc1tvYmplY3QudHlwZV0uY29sbGlzaW9uID09IGNvbGxpc2lvbnMuc29saWQpIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5NaXVNaXUucHJvdG90eXBlLmNhbkdvVXAgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucGxhY2VzQ2FuR28odGhpcy50aWxlRnJvbVswXSwgdGhpcy50aWxlRnJvbVsxXSAtIDEpOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5jYW5Hb0Rvd24gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucGxhY2VzQ2FuR28odGhpcy50aWxlRnJvbVswXSwgdGhpcy50aWxlRnJvbVsxXSArIDEpOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5jYW5Hb0xlZnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucGxhY2VzQ2FuR28odGhpcy50aWxlRnJvbVswXS0xLCB0aGlzLnRpbGVGcm9tWzFdKTsgfTtcbk1pdU1pdS5wcm90b3R5cGUuY2FuR29SaWdodCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5wbGFjZXNDYW5Hbyh0aGlzLnRpbGVGcm9tWzBdKzEsIHRoaXMudGlsZUZyb21bMV0pOyB9O1xuXG5NaXVNaXUucHJvdG90eXBlLmdvTGVmdCA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMF0tPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5sZWZ0OyB9O1xuTWl1TWl1LnByb3RvdHlwZS5nb1JpZ2h0ID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1swXSs9IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLnJpZ2h0OyB9O1xuTWl1TWl1LnByb3RvdHlwZS5nb1VwID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1sxXS09IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLnVwOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5nb0Rvd24gPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzFdKz0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMuZG93bjsgfTtcblxuLy8gcGljayB1cCBpdGVtXG5NaXVNaXUucHJvdG90eXBlLnBpY2tVcCA9IGZ1bmN0aW9uKClcbntcblx0aWYodGhpcy50aWxlVG9bMF0hPXRoaXMudGlsZUZyb21bMF0gfHxcblx0XHR0aGlzLnRpbGVUb1sxXSE9dGhpcy50aWxlRnJvbVsxXSlcblx0e1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXHRcblx0bGV0IGlzID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy50aWxlRnJvbVswXSxcblx0XHRcdFx0dGhpcy50aWxlRnJvbVsxXSldLml0ZW1TdGFjaztcblx0XG5cdGlmKGlzIT1udWxsKVxuXHR7XG5cdFx0bGV0IHJlbWFpbnMgPSB0aGlzLmludmVudG9yeS5hZGRJdGVtcyhpcy50eXBlLCBpcy5xdHkpO1xuXG5cdFx0aWYocmVtYWlucykgeyBpcy5xdHkgPSByZW1haW5zOyB9XG5cdFx0ZWxzZVxuXHRcdHtcblx0XHRcdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMudGlsZUZyb21bMF0sXG5cdFx0XHRcdHRoaXMudGlsZUZyb21bMV0pXS5pdGVtU3RhY2sgPSBudWxsO1xuXHRcdH1cblx0fVxuXHRcblx0cmV0dXJuIHRydWU7XG59O1xuXG4vLyBjcmVhdGUgYSBjYW1lcmEgb2JqZWN0XG5sZXQgY2FtZXJhID0ge1xuICAgIHNjcmVlbjogWzAsMF0sXG4gICAgLy8g55S76Z2i5bem5LiK6KeSXG4gICAgc3RhcnRpbmdQb2ludDogWzAsMF0sXG4gICAgLy8g55S76Z2i5Y+z5LiL6KeSXG4gICAgZW5kaW5nUG9pbnQ6IFswLDBdLFxuICAgIC8vIOivr+W3rlxuICAgIG9mZnNldDogWzAsMF0sXG4gICAgLy8gdXBkYXRlIGZ1bmN0aW9uLCB4IHkgaXMgb3VyIGNlbnRlciBhcmVhXG4gICAgdXBkYXRlOiBmdW5jdGlvbihvZmZzZXRYLCBvZmZzZXRZKSB7XG4gICAgICAgIC8vIG9mZnNldDogaGFsZiB0aGUgY2FudmFzIHdpZHRoIHx8IGhlaWdodCAocm91bmQgZG93biB0byB3aG9sZSBudW0pXG5cdFx0dGhpcy5vZmZzZXRbMF0gPSBNYXRoLmZsb29yKCh0aGlzLnNjcmVlblswXS8yKSAtIG9mZnNldFgpO1xuICAgICAgICB0aGlzLm9mZnNldFsxXSA9IE1hdGguZmxvb3IoKHRoaXMuc2NyZWVuWzFdLzIpIC0gb2Zmc2V0WSk7XG5cbiAgICAgICAgLy8g5Zyw56CW5Zyo5Zyw5Zu+5LiK55qE5L2N572uXG4gICAgICAgIGxldCB0aWxlID0gWyBNYXRoLmZsb29yKG9mZnNldFggLyB0aWxlV2lkdGgpLCBNYXRoLmZsb29yKG9mZnNldFkgLyB0aWxlSGVpZ2h0KSBdO1xuICAgICAgICAvLyAg6K6h566X56ys5LiA5Liq5Zyw56CW5L2N572u5ZyoeOe6v+S4iu+8miDmnIDlpKflnLDnoJbmlbDph48gLSDlsY/luZXnmoTkuIDljYpcbiAgICAgICAgLy8gIOWkmuWHj+WOuzHov5nmoLflnLDnoJblj6/ku6VzaG935LiA5Y2K5Zyo5bGP5bmV5LiKXG4gICAgICAgIHRoaXMuc3RhcnRpbmdQb2ludFswXSA9IHRpbGVbMF0gLSBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzBdLzIpIC8gdGlsZVdpZHRoKSAgLSAxO1xuXHRcdHRoaXMuc3RhcnRpbmdQb2ludFsxXSA9IHRpbGVbMV0gLSBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzFdLzIpIC8gdGlsZUhlaWdodCkgIC0gMTtcblxuICAgICAgICAvLyDnoa7kv5145ZKMeemDveWkp+S6jjDopoHkuYjkvJrlnKjlnLDlm77lpJZcbiAgICAgICAgaWYodGhpcy5zdGFydGluZ1BvaW50WzBdIDw9IC0xKSB7IHRoaXMuc3RhcnRpbmdQb2ludFswXSA9IDA7IH1cblx0XHRpZih0aGlzLnN0YXJ0aW5nUG9pbnRbMV0gPD0gLTEpIHsgdGhpcy5zdGFydGluZ1BvaW50WzFdID0gMDsgfVxuXG4gICAgICAgIHRoaXMuZW5kaW5nUG9pbnRbMF0gPSB0aWxlWzBdICsgMSArIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMF0vMikgLyB0aWxlV2lkdGgpO1xuXHRcdHRoaXMuZW5kaW5nUG9pbnRbMV0gPSB0aWxlWzFdICsgMSArIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMV0vMikgLyB0aWxlSGVpZ2h0KTtcblxuXHRcdGlmKHRoaXMuZW5kaW5nUG9pbnRbMF0gPj0gbWFwV2lkdGgpIHsgdGhpcy5lbmRpbmdQb2ludFswXSA9IG1hcFdpZHRoIC0xOyB9XG5cdFx0aWYodGhpcy5lbmRpbmdQb2ludFsxXSA+PSBtYXBIZWlnaHQpIHsgdGhpcy5lbmRpbmdQb2ludFsxXSA9IG1hcEhlaWdodCAtIDE7IH1cbiAgICAgICAgfVxufTtcblxuXG4vLyBidWlsZGluZ3NcblxubGV0IG1hcFRpbGVEYXRhID0gbmV3IFRpbGVNYXAoKTtcblxubGV0IGJ1aWxkaW5nc0xvY2F0aW9uID0gW1xuXHR7IHg6MTEsIHk6NSwgdzo0LCBoOjUsIGRhdGE6IFtcblx0XHQxMCwgMTEsIDExLCAxMixcbiAgICAgICAgMTMsIDE0LCAxNCwgMTUsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCxcbiAgICAgICAgMTYsIDE3LCAxNiwgMThcblx0XX0sXG5cdHsgeDoxNiwgeTo1LCB3OjcsIGg6NSwgZGF0YTogW1xuXHRcdDEwLCAxMSwgMTEsIDExLCAxMSwgMTIsIDEyLFxuICAgICAgICAxMywgMTUsIDEzLCAxNCwgMTQsIDE1LCAxNSxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTksIDE5LCAxOCwgMTgsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE5LCAxOSwgMTgsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOSwgMTcsIDE4LCAxOFxuXHRdfSxcblx0eyB4OjE0LCB5OjEzLCB3OjQsIGg6NCwgZGF0YTogW1xuICAgICAgICAxMCwgMTEsIDExLCAxMixcbiAgICAgICAgMTMsIDE0LCAxNCwgMTUsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LFxuICAgICAgICAxNiwgMTcsIDE2LCAxOFxuXHRdfVxuXTtcblxuLy8gc3RvcmVzIGluZm9ybWF0aW9uIGZvciBlYWNoIG1hcCB0aWxlXG5mdW5jdGlvbiBUaWxlKHRpbGVYLCB0aWxlWSwgdGlsZVR5cGUpXG57XG4gICAgLy8gdGlsZVksIHRpbGVYID0gdGhlIHBvc2l0aW9uIG9mIHRoZSB0aWxlIG9uIHRoZSBtYXBcblx0dGhpcy54XHRcdFx0PSB0aWxlWDtcblx0dGhpcy55XHRcdFx0PSB0aWxlWTtcblx0dGhpcy50eXBlXHRcdD0gdGlsZVR5cGU7XG5cdHRoaXMuYnVpbGRpbmdcdFx0PSBudWxsO1xuICAgIHRoaXMuYnVpbGRpbmdUeXBlXHQ9IDA7XG4gICAgLy8gIHBvaW50ZXIgdG8gYSBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gYSBNaXVNaXUgaGFzIGNvbXBsZXRlZCBtb3Zpbmcgb24gdG8gdGhpcyB0aWxlXG4gICAgdGhpcy5ldmVudEVudGVyXHQ9IG51bGw7XG5cdHRoaXMub2JqZWN0XHRcdD0gbnVsbDtcblx0dGhpcy5pdGVtU3RhY2tcdD0gbnVsbDtcblxufVxuXG4vLyDlgqjlrZjnrqHnkIblnLDlm77mlbDmja5cbmZ1bmN0aW9uIFRpbGVNYXAoKSB7XG5cdHRoaXMubWFwXHQ9IFtdO1xuXHR0aGlzLndcdFx0PSAwO1xuICAgIHRoaXMuaFx0XHQ9IDA7XG5cdHRoaXMubGV2ZWxzXHQ9IDQ7XG59XG5cblRpbGVNYXAucHJvdG90eXBlLmJ1aWxkTWFwRnJvbURhdGEgPSBmdW5jdGlvbih0aWxlSWQsIHcsIGgpIHtcblx0dGhpcy53XHRcdD0gdztcbiAgICB0aGlzLmhcdFx0PSBoO1xuXG4gICAgaWYodGlsZUlkLmxlbmd0aCE9KHcgKiBoKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XG4gICAgdGhpcy5tYXAubGVuZ3RoXHQ9IDA7XG4gICAgXHRmb3IobGV0IHkgPSAwOyB5IDwgaDsgeSsrKSB7XG5cdFx0ICAgIGZvcihsZXQgeCA9IDA7IHggPCB3OyB4KyspIHtcblx0XHRcdHRoaXMubWFwLnB1c2goIG5ldyBUaWxlKHgsIHksIHRpbGVJZFsgKHggKyAodyAqIHkpKV0pICk7XG5cdFx0fVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuVGlsZU1hcC5wcm90b3R5cGUuYWRkQnVpbGRpbmdzID0gZnVuY3Rpb24oYnVpbGRpbmdzKSB7XG5cdGZvcihsZXQgaSBpbiBidWlsZGluZ3MpIHtcbiAgICAgICAgbGV0IGJ1aWxkaW5nID0gYnVpbGRpbmdzW2ldO1xuICAgICAgICBpZihidWlsZGluZy54IDwgMCB8fCBidWlsZGluZy55IDwgMCB8fCBidWlsZGluZy54ID49IHRoaXMudyB8fCBidWlsZGluZy55ID49IHRoaXMuaCB8fFx0KGJ1aWxkaW5nLngrYnVpbGRpbmcudyk+dGhpcy53IHx8IChidWlsZGluZy55K2J1aWxkaW5nLmgpPnRoaXMuaCB8fCBidWlsZGluZy5kYXRhLmxlbmd0aCE9KGJ1aWxkaW5nLncqYnVpbGRpbmcuaCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgeSA9IDA7IHkgPCBidWlsZGluZy5oOyB5KyspIHtcblx0XHRcdGZvcihsZXQgeCA9IDA7IHggPCBidWlsZGluZy53OyB4KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZUlkeCA9ICgoKGJ1aWxkaW5nLnkgKyB5KSAqIHRoaXMudykgKyBidWlsZGluZy54ICsgeCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbdGlsZUlkeF0uYnVpbGRpbmcgPSBidWlsZGluZztcblx0XHRcdFx0dGhpcy5tYXBbdGlsZUlkeF0uYnVpbGRpbmdUeXBlID0gYnVpbGRpbmcuZGF0YVsoICh5ICogYnVpbGRpbmcudykgKyB4KV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vLyDnianlk4HmkYbmlL5cbmZ1bmN0aW9uIEdhbWVPYmplY3RzKG50KSB7XG5cdHRoaXMueCA9IDA7XG5cdHRoaXMueSA9IDA7XG5cdHRoaXMudHlwZSA9IG50O1xufVxuXG5HYW1lT2JqZWN0cy5wcm90b3R5cGUucGxhY2VBdCA9IGZ1bmN0aW9uKG54LCBueSkge1xuXHRpZihtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLngsIHRoaXMueSldLm9iamVjdCA9PSB0aGlzKSB7XG5cdFx0bWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy54LCB0aGlzLnkpXS5vYmplY3QgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnggPSBueDtcblx0dGhpcy55ID0gbnk7XG5cdFxuXHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleChueCwgbnkpXS5vYmplY3QgPSB0aGlzO1xufTtcblxuXG5cbi8vIGNvbnZlcnQgeCwgeSBpbnRvIGluZGV4IGluIGdhbWVNYXAgYXJyXG5mdW5jdGlvbiB0b0luZGV4KHgsIHkpIHtcblx0cmV0dXJuKHggKyAobWFwV2lkdGggKiB5KSk7XG59XG5cbmZ1bmN0aW9uIGdldEZyYW1lKHNwcml0ZSwgdGltZUxhc3QsIHRpbWUsIGFuaW1hdGlvbikge1xuXHRpZighYW5pbWF0aW9uKSB7IHJldHVybiBzcHJpdGVbMF07IH1cblx0dGltZSA9IHRpbWUgJSB0aW1lTGFzdDtcblxuXHRmb3IoeCBpbiBzcHJpdGUpIHtcblx0XHRpZihzcHJpdGVbeF0uZW5kPj10aW1lKSB7IHJldHVybiBzcHJpdGVbeF07IH1cblx0fVxufVxuXG4vLyDnlYzpnaJsb2Fk5a6M77yM5byA5aeLbG9vcFxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pdW1pdVRhbGVcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpO1xuICAgIFxuICAgIC8vIGFkZCBldmVudExpc3RlbmVycyBmb3IgdGhlIGtleWRvd25hIGFuZCBrZXl1cFxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuXHRcdGlmKGUua2V5Q29kZSA+PSAzNyAmJiBlLmtleUNvZGUgPD00MCApIHsgaGVsZEtleXNbZS5rZXlDb2RlXSA9IHRydWU7IH1cblx0XHRpZihlLmtleUNvZGU9PTgwKSB7IGtleXNEb3duW2Uua2V5Q29kZV0gPSB0cnVlOyB9XG5cdH0pO1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZihlLmtleUNvZGUgPj0gMzcgJiYgZS5rZXlDb2RlIDw9IDQwKSB7IGhlbGRLZXlzW2Uua2V5Q29kZV0gPSBmYWxzZTsgfVxuXHRcdGlmKGUua2V5Q29kZT09ODApIHsga2V5c0Rvd25bZS5rZXlDb2RlXSA9IGZhbHNlOyB9XG5cdH0pO1xuXG4gICAgLy8gY2FudmFz5bC65a+4IOS/neWtmOWIsCDnm7jmnLpcbiAgICBjYW1lcmEuc2NyZWVuID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWl1bWl1VGFsZVwiKS53aWR0aCxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXVtaXVUYWxlXCIpLmhlaWdodF07XG4gICAgICAgIFxuICAgIGdhbWV0aWxlID0gbmV3IEltYWdlKCk7XG5cdGdhbWV0aWxlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRjdHggPSBudWxsO1xuXHRcdGFsZXJ0KFwiRmFpbGVkIGxvYWRpbmcgZ2FtZXRpbGUuXCIpO1xuXHR9O1xuXHRnYW1ldGlsZS5vbmxvYWQgPSBmdW5jdGlvbigpIHsgXG5cdFx0YXJ0TG9hZGVkID0gdHJ1ZTsgXG5cdH07XG4gICAgZ2FtZXRpbGUuc3JjID0gZ2FtZXRpbGVVUkw7XG4gICAgXG4gICAgbWFwVGlsZURhdGEuYnVpbGRNYXBGcm9tRGF0YShnYW1lTWFwLCBtYXBXaWR0aCwgbWFwSGVpZ2h0KTtcblx0bWFwVGlsZURhdGEuYWRkQnVpbGRpbmdzKGJ1aWxkaW5nc0xvY2F0aW9uKTtcblx0bWFwVGlsZURhdGEubWFwWygoMiAqIG1hcFdpZHRoKSArIDIpXS5ldmVudEVudGVyID0gZnVuY3Rpb24oKSB7IFxuXHRcdGNvbnNvbGUubG9nKFwiRW50ZXJlZCB0aWxlIDIsMlwiKTsgXG5cdH07XG5cdFxuXHQvLyDnianlk4HmkYbmlL7kvY3nva5cblx0bGV0IGZlbmNlMSA9IG5ldyBHYW1lT2JqZWN0cygyKTsgZmVuY2UxLnBsYWNlQXQoMTUsIDYpO1xuICAgIFxuICAgIGxldCBmbG93ZXIxID0gbmV3IEdhbWVPYmplY3RzKDEpOyBmbG93ZXIxLnBsYWNlQXQoMTEsIDEwKTtcbiAgICBsZXQgZmxvd2VyMiA9IG5ldyBHYW1lT2JqZWN0cygxKTsgZmxvd2VyMi5wbGFjZUF0KDEzLCAxMCk7XG4gICAgbGV0IGZsb3dlcjMgPSBuZXcgR2FtZU9iamVjdHMoMSk7IGZsb3dlcjMucGxhY2VBdCgxNCwgMTApO1xuICAgIFxuXHRsZXQgdHJlZTEgPSBuZXcgR2FtZU9iamVjdHMoMyk7IHRyZWUxLnBsYWNlQXQoMTAsIDExKTtcblx0bGV0IHRyZWUyID0gbmV3IEdhbWVPYmplY3RzKDMpOyB0cmVlMi5wbGFjZUF0KDE1LCAxMSk7XG5cdGxldCB0cmVlMyA9IG5ldyBHYW1lT2JqZWN0cygzKTsgdHJlZTMucGxhY2VBdCgxMywgMTEpO1x0XG4gICAgbGV0IHRyZWU0ID0gbmV3IEdhbWVPYmplY3RzKDMpOyB0cmVlNC5wbGFjZUF0KDE4LCAxMSk7XG4gIFxuICAgIGxldCBtYXNocm9vbTEgPSBuZXcgR2FtZU9iamVjdHMoNCk7IG1hc2hyb29tMS5wbGFjZUF0KDgsOSk7XG4gICAgbGV0IG1hc2hyb29tMiA9IG5ldyBHYW1lT2JqZWN0cyg0KTsgbWFzaHJvb20yLnBsYWNlQXQoMTUsNyk7XG5cblx0bGV0IHBpZ1Nob3AxID0gbmV3IEdhbWVPYmplY3RzKDUpOyBwaWdTaG9wMS5wbGFjZUF0KDksIDkpO1xuXG5cbiAgICBsZXQgZG9udXRzID0gbmV3IEdhbWVPYmplY3RzKDYpOyBkb251dHMucGxhY2VBdCgxMSwgNSk7XG5cbiAgICBsZXQgY29va2luZyA9IG5ldyBHYW1lT2JqZWN0cyg3KTsgY29va2luZy5wbGFjZUF0KDEzLCA1KTtcblxuICAgIGxldCBjYXJwZXQgPSBuZXcgR2FtZU9iamVjdHMoOCk7IGNhcnBldC5wbGFjZUF0KDEzLDcpO1xuXG4gICAgbGV0IGRlc2sgPSBuZXcgR2FtZU9iamVjdHMoOSk7IGRlc2sucGxhY2VBdCgxNCw4KTtcblxuICAgIGxldCBjaGFpciA9IG5ldyBHYW1lT2JqZWN0cygxMCk7IGNoYWlyLnBsYWNlQXQoMTQsNyk7XG4gICAgbGV0IGNoYWlyMiA9IG5ldyBHYW1lT2JqZWN0cygxNik7IGNoYWlyMi5wbGFjZUF0KDE4LDcpO1xuXG4gICAgbGV0IHRyZWVQbGFudCA9IG5ldyBHYW1lT2JqZWN0cygxMSk7IHRyZWVQbGFudC5wbGFjZUF0KDExLDgpO1xuXG4gICAgbGV0IGRydW0gPSBuZXcgR2FtZU9iamVjdHMoMTIpOyBkcnVtLnBsYWNlQXQoMjEsNik7XG5cbiAgICBsZXQgaW5zdHJ1bWVudHMgPSBuZXcgR2FtZU9iamVjdHMoMTMpOyBpbnN0cnVtZW50cy5wbGFjZUF0KDE4LDUpO1xuXG4gICAgbGV0IGJvb2tTaGVsZjEgPSBuZXcgR2FtZU9iamVjdHMoMTQpOyBib29rU2hlbGYxLnBsYWNlQXQoMTYsNik7XG4gICAgbGV0IGJvb2tTaGVsZjIgPSBuZXcgR2FtZU9iamVjdHMoMTQpOyBib29rU2hlbGYyLnBsYWNlQXQoMTYsNyk7XG5cblx0bGV0IHNheG9waG9uZSA9IG5ldyBHYW1lT2JqZWN0cygxNSk7IHNheG9waG9uZS5wbGFjZUF0KDE5LDcpO1xuXHRcblx0XG5cdGxldCBjb2NvbnV0ID0gbmV3IFBsYWNlZEl0ZW1TdGFjaygxLCAxKTsgY29jb251dC5wbGFjZUF0KDEwLCAxNSk7XG5cdFxufTtcblxuXG5cblxuLy8gbWFpbiBmdW5jdGlvblxuZnVuY3Rpb24gZHJhd0dhbWUoKSB7XG4gICAgaWYgKGN0eCA9PSBudWxsKSB7IFxuXHRcdHJldHVybjsgXG5cdH1cbiAgICBpZiAoIWFydExvYWRlZCkgeyBcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpOyByZXR1cm47IFxuXHR9XG5cblx0bGV0IGN1cnJlbnRGcmFtZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIC8vIGZyYW1lY291bnQgXG5cdGxldCBzZWMgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcblx0aWYoc2VjICE9IGN1cnJlbnRTZWNvbmQpe1xuXHRcdGN1cnJlbnRTZWNvbmQgPSBzZWM7XG5cdFx0ZnJhbWVzTGFzdFNlY29uZCA9IGZyYW1lQ291bnQ7XG5cdFx0ZnJhbWVDb3VudCA9IDE7XG5cdH0gZWxzZSB7IFxuICAgICAgICBmcmFtZUNvdW50Kys7IFxuICAgIH1cblxuICAgIC8vIG1pdW1pdSBtb3ZlbWVudFxuXHRpZighbWl1bWl1LnByb2Nlc3NNb3ZlbWVudChjdXJyZW50RnJhbWVUaW1lKSkge1xuXHRcdGlmKGhlbGRLZXlzWzM4XSAmJiBtaXVtaXUuY2FuR29VcCgpKXsgXG4gICAgICAgICAgICBtaXVtaXUuZ29VcChjdXJyZW50RnJhbWVUaW1lKTsgXG4gICAgICAgIH0gZWxzZSBpZiAoaGVsZEtleXNbNDBdICYmIG1pdW1pdS5jYW5Hb0Rvd24oKSkgeyBcbiAgICAgICAgICAgIG1pdW1pdS5nb0Rvd24oY3VycmVudEZyYW1lVGltZSk7IFxuICAgICAgICB9IGVsc2UgaWYoaGVsZEtleXNbMzddICYmIG1pdW1pdS5jYW5Hb0xlZnQoKSkgeyBcbiAgICAgICAgICAgIG1pdW1pdS5nb0xlZnQoY3VycmVudEZyYW1lVGltZSk7IFxuICAgICAgICB9IGVsc2UgaWYoaGVsZEtleXNbMzldICYmIG1pdW1pdS5jYW5Hb1JpZ2h0KCkpIHsgXG4gICAgICAgICAgICBtaXVtaXUuZ29SaWdodChjdXJyZW50RnJhbWVUaW1lKTsgXG4gICAgICAgIH0gZWxzZSBpZihoZWxkS2V5c1s4MF0pIHtcblx0XHRcdG1pdW1pdS5waWNrVXAoKVxuXHRcdH1cbiAgICB9XG5cbiAgICAvLyBjYW1lcmHot5/nnYBtaXVtaXXotbBcbiAgICAgICAgY2FtZXJhLnVwZGF0ZShtaXVtaXUucG9zaXRpb25bMF0gKyAobWl1bWl1LmRpbWVuc2lvbnNbMF0gLyAyKSxcbiAgICAgICAgICAgIG1pdW1pdS5wb3NpdGlvblsxXSArIChtaXVtaXUuZGltZW5zaW9uc1sxXSAvIDIpKTtcblxuXHQgICAgbGV0IG1pdW1pdUJ1aWxkaW5nMSA9IG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KFxuXHRcdG1pdW1pdS50aWxlRnJvbVswXSwgbWl1bWl1LnRpbGVGcm9tWzFdKV0uYnVpbGRpbmc7XG5cdCAgICBsZXQgbWl1bWl1QnVpbGRpbmcyID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoXG5cdFx0bWl1bWl1LnRpbGVUb1swXSwgbWl1bWl1LnRpbGVUb1sxXSldLmJ1aWxkaW5nO1xuXG4gICAgICAgIC8vIOa4hemZpGxhc3QgZnJhbWVcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FtZXJhLnNjcmVlblswXSwgY2FtZXJhLnNjcmVlblsxXSk7XG4gICAgXG5cbiAgICBmb3IobGV0IHogPSAwOyB6IDwgbWFwVGlsZURhdGEubGV2ZWxzOyB6KyspIHtcblx0XHRmb3IobGV0IHkgPSBjYW1lcmEuc3RhcnRpbmdQb2ludFsxXTsgeSA8PSBjYW1lcmEuZW5kaW5nUG9pbnRbMV07ICsreSkge1xuXHRcdCAgICBmb3IobGV0IHggPSBjYW1lcmEuc3RhcnRpbmdQb2ludFswXTsgeCA8PSBjYW1lcmEuZW5kaW5nUG9pbnRbMF07ICsreCkge1xuICAgICAgICAgICAgICAgIGlmKHo9PTApIHtcblx0XHRcdFx0XHRsZXQgdGlsZSA9IHRpbGVUeXBlc1ttYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS50eXBlXTtcblxuXHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsIFxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZS5zcHJpdGVbMF0ueCwgXG5cdFx0XHRcdFx0XHRcdFx0XHR0aWxlLnNwcml0ZVswXS55LCBcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGUuc3ByaXRlWzBdLncsIFxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZS5zcHJpdGVbMF0uaCxcblx0XHRcdFx0XHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCksIFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArICh5ICogdGlsZUhlaWdodCksIFxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZVdpZHRoLCBcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGVIZWlnaHRcblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsc2UgaWYoej09MSlcblx0XHRcdHtcblx0XHRcdFx0bGV0IGlzID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uaXRlbVN0YWNrO1xuXHRcdFx0XHRpZihpcyE9bnVsbClcblx0XHRcdFx0e1xuXHRcdFx0XHRcdGxldCBzcHJpdGUgPSBpdGVtVHlwZXNbaXMudHlwZV0uc3ByaXRlO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsXG5cdFx0XHRcdFx0XHRzcHJpdGVbMF0ueCwgc3ByaXRlWzBdLnksXG5cdFx0XHRcdFx0XHRzcHJpdGVbMF0udywgc3ByaXRlWzBdLmgsXG5cdFx0XHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgKHgqdGlsZVdpZHRoKSArIGl0ZW1UeXBlc1tpcy50eXBlXS5vZmZzZXRbMF0sXG5cdFx0XHRcdFx0XHRjYW1lcmEub2Zmc2V0WzFdICsgKHkqdGlsZUhlaWdodCkgKyBpdGVtVHlwZXNbaXMudHlwZV0ub2Zmc2V0WzFdLFxuXHRcdFx0XHRcdFx0c3ByaXRlWzBdLncsIHNwcml0ZVswXS5oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0XHRsZXQgb2JqZWN0ID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0ub2JqZWN0O1xuXHRcdFx0XHRpZihvYmplY3QgIT0gbnVsbCAmJiBvYmplY3RUeXBlc1tvYmplY3QudHlwZV0uekluZGV4ID09IHopIHtcblx0XHRcdFx0XHRsZXQgb2JqZWN0VHlwZSA9IG9iamVjdFR5cGVzW29iamVjdC50eXBlXTtcblx0XHRcdFx0IFxuXHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsXG5cdFx0XHRcdFx0XHRcdFx0b2JqZWN0VHlwZS5zcHJpdGVbMF0ueCwgXG5cdFx0XHRcdFx0XHRcdFx0b2JqZWN0VHlwZS5zcHJpdGVbMF0ueSxcblx0XHRcdFx0XHRcdFx0XHRvYmplY3RUeXBlLnNwcml0ZVswXS53LCBcblx0XHRcdFx0XHRcdFx0XHRvYmplY3RUeXBlLnNwcml0ZVswXS5oLFxuXHRcdFx0XHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCkgKyBvYmplY3RUeXBlLm9mZnNldFswXSxcblx0XHRcdFx0XHRcdFx0XHRjYW1lcmEub2Zmc2V0WzFdICsgKHkgKiB0aWxlSGVpZ2h0KSArIG9iamVjdFR5cGUub2Zmc2V0WzFdLFxuXHRcdFx0XHRcdFx0XHRcdG9iamVjdFR5cGUuc3ByaXRlWzBdLncsIFxuXHRcdFx0XHRcdFx0XHRcdG9iamVjdFR5cGUuc3ByaXRlWzBdLmhcblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cbiAgICAgICAgICAgICAgIGlmKHogPT0gMiAmJiBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5idWlsZGluZ1R5cGUgIT0gMCAmJiBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5idWlsZGluZyAhPSBtaXVtaXVCdWlsZGluZzEgJiYgbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmcgIT0gbWl1bWl1QnVpbGRpbmcyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbGUgPSB0aWxlVHlwZXNbbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmdUeXBlXTtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlID0gZ2V0RnJhbWUodGlsZS5zcHJpdGUsIHRpbGUuc3ByaXRldGltZUxhc3QsIHRpbGUuYW5pbWF0aW9uKTtcblx0XHRcdFx0XHRjdHguZHJhd0ltYWdlKGdhbWV0aWxlLCBcblx0XHRcdFx0XHRcdFx0XHRcdHNwcml0ZS54LCBcblx0XHRcdFx0XHRcdFx0XHRcdHNwcml0ZS55LCBcblx0XHRcdFx0XHRcdFx0XHRcdHNwcml0ZS53LCBcblx0XHRcdFx0XHRcdFx0XHRcdHNwcml0ZS5oLCBcblx0XHRcdFx0XHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCksIFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArICh5ICogdGlsZUhlaWdodCksIFxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZVdpZHRoLCBcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGVIZWlnaHQpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG4gICAgXHR9XG5cblx0XHRpZiAoeiA9PSAxKSB7XG5cdFx0XHRcdGxldCBzcHJpdGUgPSBtaXVtaXUuc3ByaXRlc1ttaXVtaXUuZGlyZWN0aW9uXTtcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZShnYW1ldGlsZSxcblx0XHRcdFx0XHRzcHJpdGVbMF0ueCwgc3ByaXRlWzBdLnksXG5cdFx0XHRcdFx0c3ByaXRlWzBdLncsIHNwcml0ZVswXS5oLFxuXHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyBtaXVtaXUucG9zaXRpb25bMF0sXG5cdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArIG1pdW1pdS5wb3NpdGlvblsxXSxcblx0XHRcdFx0XHRtaXVtaXUuZGltZW5zaW9uc1swXSwgbWl1bWl1LmRpbWVuc2lvbnNbMV1cblx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdH1cblxuXHRjdHgudGV4dEFsaWduID0gXCJyaWdodFwiO1xuXHRcblx0Zm9yKGxldCBpID0gMDsgaSA8IG1pdW1pdS5pbnZlbnRvcnkuc3BhY2VzOyBpKyspXG5cdHtcblx0XHRjdHguZmlsbFN0eWxlID0gXCIjZmZjMzRhXCI7XG5cdFx0Y3R4LmZpbGxSZWN0KDEwICsgKGkgKiA1MCksIDM1MCxcblx0XHRcdDQwLCA0MCk7XG5cdFx0XG5cdFx0aWYodHlwZW9mIG1pdW1pdS5pbnZlbnRvcnkuc3RhY2tzW2ldIT0ndW5kZWZpbmVkJylcblx0XHR7XG5cdFx0XHRsZXQgaXQgPSBpdGVtVHlwZXNbbWl1bWl1LmludmVudG9yeS5zdGFja3NbaV0udHlwZV07XG5cdFx0XHRsZXQgc3ByaXRlID0gaXQuc3ByaXRlO1xuXHRcdFx0XHRcdFxuXHRcdFx0Y3R4LmRyYXdJbWFnZShnYW1ldGlsZSxcblx0XHRcdFx0c3ByaXRlWzBdLngsIHNwcml0ZVswXS55LFxuXHRcdFx0XHRzcHJpdGVbMF0udywgc3ByaXRlWzBdLmgsXG5cdFx0XHRcdDEwICsgKGkgKiA1MCkgKyBpdC5vZmZzZXRbMF0sXG5cdFx0XHRcdDM1MCArIGl0Lm9mZnNldFsxXSxcblx0XHRcdFx0c3ByaXRlWzBdLncsIHNwcml0ZVswXS5oKTtcblx0XHRcdFxuXHRcdFx0aWYobWl1bWl1LmludmVudG9yeS5zdGFja3NbaV0ucXR5PjEpXG5cdFx0XHR7XG5cdFx0XHRcdGN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcblx0XHRcdFx0Y3R4LmZpbGxUZXh0KFwiXCIgKyBtaXVtaXUuaW52ZW50b3J5LnN0YWNrc1tpXS5xdHksXG5cdFx0XHRcdFx0MTAgKyAoaSo1MCkgKyAzOCxcblx0XHRcdFx0XHQzNTAgKyAzOCk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cdGN0eC50ZXh0QWxpZ24gPSBcImxlZnRcIjtcbiAgICBcbiAgICAvLyBkcmF3IHRoZSBtaXVtaXVcbiAgICBsZXQgc3ByaXRlID0gbWl1bWl1LnNwcml0ZXNbbWl1bWl1LmRpcmVjdGlvbl07XG5cdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsIFxuXHRcdFx0XHRzcHJpdGVbMF0ueCwgXG5cdFx0XHRcdHNwcml0ZVswXS55LCBcblx0XHRcdFx0c3ByaXRlWzBdLncsIFxuXHRcdFx0XHRzcHJpdGVbMF0uaCwgXG5cdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyBtaXVtaXUucG9zaXRpb25bMF0sIFxuXHRcdFx0XHRjYW1lcmEub2Zmc2V0WzFdICsgbWl1bWl1LnBvc2l0aW9uWzFdLCBcblx0XHRcdFx0bWl1bWl1LmRpbWVuc2lvbnNbMF0sIG1pdW1pdS5kaW1lbnNpb25zWzFdKTtcblxuXHRsYXN0RnJhbWVUaW1lID0gY3VycmVudEZyYW1lVGltZTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=