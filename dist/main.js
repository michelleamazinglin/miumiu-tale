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

var gameMap = [0, 0, 0, 0, 0, 6, 5, 5, 7, 0, 26, 25, 25, 25, 25, 25, 27, 0, 0, 0, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 29, 28, 28, 28, 28, 28, 30, 2, 2, 0, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 29, 28, 28, 28, 28, 28, 30, 2, 2, 0, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 29, 28, 28, 28, 28, 28, 30, 2, 2, 0, 0, 1, 1, 1, 1, 16, 20, 16, 18, 1, 16, 18, 16, 19, 28, 18, 18, 2, 2, 0, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 31, 32, 33, 34, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 35, 36, 37, 38, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 39, 40, 41, 42, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 16, 36, 16, 18, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]; // 每个地砖多少pixel

var tileWidth = 40;
var tileHeight = 40; // 地图大小就是10*10

var mapWidth = 20;
var mapHeight = 20; // framerate

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

  this.tileTo = [9, 11]; // time in millseconds

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
  x: 5,
  y: 0,
  w: 4,
  h: 5,
  data: [10, 11, 11, 12, 13, 14, 14, 15, 16, 18, 16, 18, 16, 18, 16, 18, 16, 17, 16, 18]
}, {
  x: 10,
  y: 0,
  w: 7,
  h: 5,
  data: [10, 11, 11, 11, 11, 12, 12, 13, 15, 13, 14, 14, 15, 15, 16, 18, 16, 19, 19, 18, 18, 16, 18, 16, 19, 19, 18, 18, 16, 18, 16, 19, 17, 18, 18]
}, {
  x: 8,
  y: 8,
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
  };

  var fence1 = new GameObjects(2);
  fence1.placeAt(9, 1);
  var flower1 = new GameObjects(1);
  flower1.placeAt(5, 5);
  var flower2 = new GameObjects(1);
  flower2.placeAt(7, 5);
  var flower3 = new GameObjects(1);
  flower3.placeAt(8, 5);
  var tree1 = new GameObjects(3);
  tree1.placeAt(4, 6);
  var tree2 = new GameObjects(3);
  tree2.placeAt(9, 6);
  var tree3 = new GameObjects(3);
  tree3.placeAt(7, 6);
  var tree4 = new GameObjects(3);
  tree4.placeAt(12, 6);
  var mashroom1 = new GameObjects(4);
  mashroom1.placeAt(2, 4);
  var mashroom2 = new GameObjects(4);
  mashroom2.placeAt(9, 2);
  var pigShop1 = new GameObjects(5);
  pigShop1.placeAt(3, 4);
  var donuts = new GameObjects(6);
  donuts.placeAt(5, 0);
  var cooking = new GameObjects(7);
  cooking.placeAt(7, 0);
  var carpet = new GameObjects(8);
  carpet.placeAt(7, 2);
  var desk = new GameObjects(9);
  desk.placeAt(8, 3);
  var chair = new GameObjects(10);
  chair.placeAt(8, 2);
  var chair2 = new GameObjects(16);
  chair2.placeAt(12, 2);
  var treePlant = new GameObjects(11);
  treePlant.placeAt(5, 3);
  var drum = new GameObjects(12);
  drum.placeAt(15, 1);
  var instruments = new GameObjects(13);
  instruments.placeAt(12, 0);
  var bookShelf1 = new GameObjects(14);
  bookShelf1.placeAt(10, 1);
  var bookShelf2 = new GameObjects(14);
  bookShelf2.placeAt(10, 2);
  var saxophone = new GameObjects(15);
  saxophone.placeAt(13, 2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/YzgwNyJdLCJuYW1lcyI6WyJjdHgiLCJnYW1lTWFwIiwidGlsZVdpZHRoIiwidGlsZUhlaWdodCIsIm1hcFdpZHRoIiwibWFwSGVpZ2h0IiwiY3VycmVudFNlY29uZCIsImZyYW1lQ291bnQiLCJmcmFtZXNMYXN0U2Vjb25kIiwibGFzdEZyYW1lVGltZSIsImhlbGRLZXlzIiwiZGlyZWN0aW9ucyIsInVwIiwicmlnaHQiLCJkb3duIiwibGVmdCIsImZsb29yVHlwZXMiLCJzb2xpZCIsInBhdGgiLCJvY2VhbiIsInRpbGVUeXBlcyIsImNvbG9yIiwiZmxvb3IiLCJzcHJpdGUiLCJ4IiwieSIsInciLCJoIiwiY29sbGlzaW9ucyIsIm5vbmUiLCJvYmplY3RUeXBlcyIsIm5hbWUiLCJvZmZzZXQiLCJjb2xsaXNpb24iLCJ6SW5kZXgiLCJpdGVtVHlwZXMiLCJtYXhTdGFjayIsImdhbWV0aWxlIiwiZ2FtZXRpbGVVUkwiLCJhcnRMb2FkZWQiLCJtaXVtaXUiLCJNaXVNaXUiLCJ0aWxlRnJvbSIsInRpbGVUbyIsInRpbWVNb3ZlZCIsImRlbGF5TW92ZSIsImRpbWVuc2lvbnMiLCJwb3NpdGlvbiIsImRpcmVjdGlvbiIsInNwcml0ZXMiLCJwcm90b3R5cGUiLCJsb2NhdGlvbiIsInByb2Nlc3NNb3ZlbWVudCIsInQiLCJtYXBUaWxlRGF0YSIsIm1hcCIsInRvSW5kZXgiLCJldmVudEVudGVyIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJyb3VuZCIsInBsYWNlc0NhbkdvIiwib2JqZWN0IiwidHlwZSIsImNhbkdvVXAiLCJjYW5Hb0Rvd24iLCJjYW5Hb0xlZnQiLCJjYW5Hb1JpZ2h0IiwiZ29MZWZ0IiwiZ29SaWdodCIsImdvVXAiLCJnb0Rvd24iLCJjYW1lcmEiLCJzY3JlZW4iLCJzdGFydGluZ1BvaW50IiwiZW5kaW5nUG9pbnQiLCJ1cGRhdGUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInRpbGUiLCJjZWlsIiwiVGlsZU1hcCIsImJ1aWxkaW5nc0xvY2F0aW9uIiwiZGF0YSIsIlRpbGUiLCJ0aWxlWCIsInRpbGVZIiwidGlsZVR5cGUiLCJidWlsZGluZyIsImJ1aWxkaW5nVHlwZSIsImxldmVscyIsImJ1aWxkTWFwRnJvbURhdGEiLCJ0aWxlSWQiLCJsZW5ndGgiLCJwdXNoIiwiYWRkQnVpbGRpbmdzIiwiYnVpbGRpbmdzIiwiaSIsInRpbGVJZHgiLCJHYW1lT2JqZWN0cyIsIm50IiwicGxhY2VBdCIsIm54IiwibnkiLCJnZXRGcmFtZSIsInRpbWVMYXN0IiwidGltZSIsImFuaW1hdGlvbiIsImVuZCIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhd0dhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJ3aWR0aCIsImhlaWdodCIsIkltYWdlIiwib25lcnJvciIsImFsZXJ0Iiwic3JjIiwiY29uc29sZSIsImxvZyIsImZlbmNlMSIsImZsb3dlcjEiLCJmbG93ZXIyIiwiZmxvd2VyMyIsInRyZWUxIiwidHJlZTIiLCJ0cmVlMyIsInRyZWU0IiwibWFzaHJvb20xIiwibWFzaHJvb20yIiwicGlnU2hvcDEiLCJkb251dHMiLCJjb29raW5nIiwiY2FycGV0IiwiZGVzayIsImNoYWlyIiwiY2hhaXIyIiwidHJlZVBsYW50IiwiZHJ1bSIsImluc3RydW1lbnRzIiwiYm9va1NoZWxmMSIsImJvb2tTaGVsZjIiLCJzYXhvcGhvbmUiLCJjdXJyZW50RnJhbWVUaW1lIiwiRGF0ZSIsIm5vdyIsInNlYyIsIm1pdW1pdUJ1aWxkaW5nMSIsIm1pdW1pdUJ1aWxkaW5nMiIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwieiIsImRyYXdJ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O0FBeUJaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBekJPO0FBMEJaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBMUJPO0FBMkJaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDRSxJQUF0QztBQUE0Q0ssVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQW5ELEdBM0JPO0FBNEJaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBNUJPO0FBNkJaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBN0JPO0FBK0JaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBL0JPO0FBZ0NaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBaENPO0FBaUNaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBakNPO0FBa0NaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBbENPO0FBbUNaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBbkNPO0FBb0NaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDRSxJQUF0QztBQUE0Q0ssVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQW5ELEdBcENPO0FBcUNaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBckNPO0FBc0NaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBdENPO0FBdUNaLE1BQUs7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQXBELEdBdkNPO0FBd0NaLE1BQUs7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ZUFBYSxHQUFHNkksZ0JBQWhCO0FBQ0FwQyx1QkFBcUIsQ0FBQ0MsUUFBRCxDQUFyQjtBQUNBLEM7Ozs7Ozs7Ozs7O0FDbnFCRCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3NjcmlwdHMvbWFwXCI7XG5cblxuXG4iLCIvLyBpIHdhbnQgYSBjYW1lcmEgZm9sbG93aW5nIHRoZSBjaGFyIGFyb3VuZCB0aGUgbWFwXG5cblxubGV0IGN0eCA9IG51bGw7XG5cbi8vIGNyZWF0ZSBhIG1hcCB3aXRoIDEwKjEwIHRpbGVcbmxldCBnYW1lTWFwID0gW1xuXHQwLCAwLCAwLCAwLCAwLCA2LCA1LCA1LCA3LCAwLCAyNiwgMjUsIDI1LCAyNSwgMjUsIDI1LCAyNywgMCwgMCwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMjEsIDIwLCAyMCwgMjIsIDEsIDI5LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDMwLCAyLCAyLCAwLFxuXHQwLCAxLCAxLCAxLCAxLCAyMSwgMjAsIDIwLCAyMiwgMSwgMjksIDI4LCAyOCwgMjgsIDI4LCAyOCwgMzAsIDIsIDIsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDIxLCAyMCwgMjAsIDIyLCAxLCAyOSwgMjgsIDI4LCAyOCwgMjgsIDI4LCAzMCwgMiwgMiwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMTYsIDIwLCAxNiwgMTgsIDEsIDE2LCAxOCwgMTYsIDE5LCAyOCwgMTgsIDE4LCAyLCAyLCAwLFxuXHQwLCAxLCAxLCAxLCAxLCAxLCAyLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyLCAxLCAyLCAyLCAyLCAwLFxuXHQwLCAxLCAxLCAxLCAxLCAxLCAyLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyLCAxLCAyLCAyLCAyLCAwLFxuXHQwLCAxLCAxLCAxLCAxLCAxLCAyLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyLCAxLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAzMSwgMzIsIDMzLCAzNCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMzUsIDM2LCAzNywgMzgsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG4gICAgMCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMzksIDQwLCA0MSwgNDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDE2LCAzNiwgMTYsIDE4LCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0XG5dO1xuLy8g5q+P5Liq5Zyw56CW5aSa5bCRcGl4ZWxcbmxldCB0aWxlV2lkdGggPSA0MDtcbmxldCB0aWxlSGVpZ2h0ID0gNDA7XG4vLyDlnLDlm77lpKflsI/lsLHmmK8xMCoxMFxubGV0IG1hcFdpZHRoID0gMjA7XG5sZXQgbWFwSGVpZ2h0ID0gMjA7XG4vLyBmcmFtZXJhdGVcbmxldCBjdXJyZW50U2Vjb25kID0gMDtcbmxldCBmcmFtZUNvdW50ID0gMDtcbmxldCBmcmFtZXNMYXN0U2Vjb25kID0gMDtcbmxldCBsYXN0RnJhbWVUaW1lID0gMDtcblxuXG4vLyBrZXlDb2RlIDogYm9vbGVhbiB0byB0ZWxsIHVzIHdoaWNoIG9uZSBhcmUgcHJlc3NlZFxubGV0IGhlbGRLZXlzID0ge1xuICAgIC8vIDM3OiBsZWZ0XG4gICAgMzcgOiBmYWxzZSxcbiAgICAvLyAzODogdXBcbiAgICAzOCA6IGZhbHNlLFxuICAgIC8vIDM5OiByaWdodFxuICAgIDM5IDogZmFsc2UsXG4gICAgLy8gNDA6IGRvd25cbiAgICA0MCA6IGZhbHNlXG4gICAgLy8gMzI6IHNwYWNlXG59O1xuXG5sZXQgZGlyZWN0aW9ucyA9IHtcblx0dXBcdDogMCxcblx0cmlnaHQ6IDEsXG5cdGRvd246IDIsXG5cdGxlZnQ6IDNcbn07XG5cblxuLy8g5Zyw5p2/56eN57G7XG5sZXQgZmxvb3JUeXBlcyA9IHtcbiAgICBzb2xpZDogMCxcbiAgICBwYXRoOiAxLFxuICAgIG9jZWFuOiAyXG59O1xuXG4vLyDmlbDlrZfvvIhnYW1lTWFw77yJ5a+55bqU5LiK6aKc6Imy5ZKM5Zyw5p2/56eN57G7XG4vLyAwOuWimeWjgSAxOuiNieWcsCAyOumZhuWcsCAgNDog5rC0ICBcbi8vIDU66buE6Imy5YaF6YOo5aKZ5aOBIDY6IOm7hOiJsuWGhemDqOWimeWjgeW3puinkiA3Oum7hOiJsuWGhemDqOWimeWjgeWPs+inklxuLy8gMjA66buE6Imy5YaF6YOo5Zyw5p2/IDIxOum7hOiJsuWGhemDqOWimeW3piAyMjrpu4ToibLlhoXpg6jlopnlj7Ncbi8vIDI1OuajleiJsuWGhemDqOWimeWjgSAyNjrmo5XoibLlhoXpg6jlopnlo4Hlt6bop5IgMjc6IOajleiJsuWGhemDqOWimeWjgeWPs+inklxuLy8gMjg6IOajleiJsuWGhemDqOWcsOadvyAyOTog5qOV6Imy5YaF6YOo5aKZ5bemIDMwOuajleiJsuWGhemDqOWimeWPs1xuLy8gMTAtMTkg5oi/5a2Q5aSW6KeCXG4vLyAzMS00MiBtaXVtaXUgcm9vbVxubGV0IHRpbGVUeXBlcyA9IHtcblx0MCA6IHsgY29sb3I6IFwiIzc5M2Q0Y1wiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDowLHk6MCx3OjQwLGg6NDB9XSB9LFxuXHQxIDogeyBjb2xvcjogXCIjNmRmN2IxXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6NDAseTowLHc6NDAsaDo0MH1dIH0sXG5cdDIgOiB7IGNvbG9yOiBcIiNjOTc0NjFcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo4MCx5OjAsdzo0MCxoOjQwfV1cdH0sXG4gICAgNCA6IHsgY29sb3I6IFwiIzAwOGRmMFwiLCBmbG9vcjogZmxvb3JUeXBlcy5vY2Vhbiwgc3ByaXRlOlt7eDoxNjAseTowLHc6NDAsaDo0MH1dIH0sXG4gICAgNSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoxMjAseTowLHc6NDAsaDo0MH1dIH0sXG4gICAgNiA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoxMjAseTo0MCx3OjQwLGg6NDB9XSB9LFxuICAgIDcgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6ODAseTo0MCx3OjQwLGg6NDB9XSB9LFxuICAgIFxuICAgIDEwIDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyNDAseTo0MCx3OjQwLGg6NDB9XX0sXG4gICAgMTEgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjQwLHc6NDAsaDo0MH1dfSxcbiAgICAxMiA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDEzIDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyNDAseTo4MCx3OjQwLGg6NDB9XX0sXG4gICAgMTQgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjgwLHc6NDAsaDo0MH1dfSxcbiAgICAxNSA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE2IDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyNDAseToxMjAsdzo0MCxoOjQwfV19LFxuICAgIDE3IDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyODAseToxMjAsdzo0MCxoOjQwfV19LFxuICAgIDE4IDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseToxMjAsdzo0MCxoOjQwfV19LFxuICAgIDE5IDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozNjAseToxMjAsdzo0MCxoOjQwfV19LFxuICAgIFxuICAgIDIwIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6NDAseTo0MCx3OjQwLGg6NDB9XX0sXG4gICAgMjEgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6ODAseTo4MCx3OjQwLGg6NDB9XX0sXG4gICAgMjIgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MTIwLHk6ODAsdzo0MCxoOjQwfV19LFxuXG4gICAgMjUgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6MTYwLHc6NDAsaDo0MH1dfSxcbiAgICAyNiA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyNDAseToxNjAsdzo0MCxoOjQwfV19LFxuICAgIDI3IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjE2MCx3OjQwLGg6NDB9XX0sXG4gICAgMjggOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDoyODAseToyMDAsdzo0MCxoOjQwfV19LFxuICAgIDI5IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjM2MCx5OjE2MCx3OjQwLGg6NDB9XX0sXG4gICAgMzAgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6MjAwLHc6NDAsaDo0MH1dfSxcblxuICAgIDMxIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjIwMCx3OjQwLGg6NDB9XX0sXG4gICAgMzIgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzYwLHk6MjAwLHc6NDAsaDo0MH1dfSxcbiAgICAzMyA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDo0MDAseToyMDAsdzo0MCxoOjQwfV19LFxuICAgIDM0IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjQ0MCx5OjIwMCx3OjQwLGg6NDB9XX0sXG4gICAgMzUgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6MjQwLHc6NDAsaDo0MH1dfSxcbiAgICAzNiA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjM2MCx5OjI0MCx3OjQwLGg6NDB9XX0sXG4gICAgMzcgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6NDAwLHk6MjQwLHc6NDAsaDo0MH1dfSxcbiAgICAzOCA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDo0NDAseToyNDAsdzo0MCxoOjQwfV19LFxuICAgIDM5IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjI4MCx3OjQwLGg6NDB9XX0sXG4gICAgNDAgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDozNjAseToyODAsdzo0MCxoOjQwfV19LFxuICAgIDQxIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6NDAwLHk6MjgwLHc6NDAsaDo0MH1dfSxcbiAgICA0MiA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDo0NDAseToyODAsdzo0MCxoOjQwfV19LFxuXG5cbiAgICBcbn07XG5cbmxldCBjb2xsaXNpb25zID0ge1xuXHRub25lXHRcdDogMCxcblx0c29saWRcdFx0OiAxXG59O1xuXG5sZXQgb2JqZWN0VHlwZXMgPSB7XG5cdDEgOiB7XG5cdFx0bmFtZSA6IFwiRmxvd2VyXCIsXG5cdFx0c3ByaXRlIDogW3t4OjQwLHk6MTgwLHc6NDAsaDoyMH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMubm9uZSxcblx0XHR6SW5kZXggOiAxXG5cdH0sXG5cdDIgOiB7XG5cdFx0bmFtZSA6IFwiZmVuY2VcIixcblx0XHRzcHJpdGUgOiBbe3g6NDAseToyMDAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG5cdH0sXG5cdDMgOiB7XG5cdFx0bmFtZSA6IFwiVHJlZVwiLFxuXHRcdHNwcml0ZSA6IFt7eDo4MCx5OjE2MCx3OjgwLGg6ODB9XSxcblx0XHRvZmZzZXQgOiBbLTIwLC0yMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAzXG4gICAgfSxcbiAgICA0IDoge1xuXHRcdG5hbWUgOiBcIm1hc2hyb29tc1wiLFxuXHRcdHNwcml0ZSA6IFt7eDo0MCx5OjE2MCx3OjQwLGg6MjB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLm5vbmUsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgNSA6IHtcblx0XHRuYW1lIDogXCJQaWcgU2hvcFwiLFxuXHRcdHNwcml0ZSA6IFt7eDoxNjAseToxNjAsdzo4MCxoOjgwfV0sXG5cdFx0b2Zmc2V0IDogWy0yMCwtMjBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogM1xuICAgIH0sXG4gICAgNiA6IHtcblx0XHRuYW1lIDogXCJkb251dHNcIixcblx0XHRzcHJpdGUgOiBbe3g6MzYwLHk6MCx3OjgwLGg6MTE1fV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5ub25lLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDcgOiB7XG5cdFx0bmFtZSA6IFwiY29va2luZ1wiLFxuXHRcdHNwcml0ZSA6IFt7eDoxNjAseTo4MCx3OjgwLGg6ODB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLm5vbmUsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgOCA6IHtcblx0XHRuYW1lIDogXCJjYXJwZXRcIixcblx0XHRzcHJpdGUgOiBbe3g6MCx5OjgwLHc6ODAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMubm9uZSxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICA5IDoge1xuXHRcdG5hbWUgOiBcImRlc2tcIixcblx0XHRzcHJpdGUgOiBbe3g6MCx5OjQwLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTAgOiB7XG5cdFx0bmFtZSA6IFwiY2hhaXJcIixcblx0XHRzcHJpdGUgOiBbe3g6MzIwLHk6MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDExIDoge1xuXHRcdG5hbWUgOiBcIlRyZWUgUGxhbnRcIixcblx0XHRzcHJpdGUgOiBbe3g6NDAseToxMjAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxMiA6IHtcblx0XHRuYW1lIDogXCJkcnVtXCIsXG5cdFx0c3ByaXRlIDogW3t4OjAseToyNDAsdzo4MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxMyA6IHtcblx0XHRuYW1lIDogXCJpbnN0cnVtZW50c1wiLFxuXHRcdHNwcml0ZSA6IFt7eDo4MCx5OjI0MCx3OjEyMCxoOjgwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxNCA6IHtcblx0XHRuYW1lIDogXCJCb29rU2hlbGZcIixcblx0XHRzcHJpdGUgOiBbe3g6MjAwLHk6MjQwLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTUgOiB7XG5cdFx0bmFtZSA6IFwic2F4b3Bob25lXCIsXG5cdFx0c3ByaXRlIDogW3t4OjI0MCx5OjI0MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDE2IDoge1xuXHRcdG5hbWUgOiBcIlJpZ2h0IEZhY2luZyBDaGFpclwiLFxuXHRcdHNwcml0ZSA6IFt7eDoyMDAseToyODAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbn07XG5cblxuLy8g54mp5ZOBXG5sZXQgaXRlbVR5cGVzID0ge1xuICAgIDEgOiB7XG5cdFx0bmFtZSA6IFwiY29jb251dFwiLFxuXHRcdG1heFN0YWNrIDogNSxcblx0XHRzcHJpdGUgOiBbe3g6MjQwLHk6MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXVxuICAgIH0sXG4gICAgMiA6IHtcblx0XHRuYW1lIDogXCJzdHJhd2JlcnJ5XCIsXG5cdFx0bWF4U3RhY2sgOiA1LFxuXHRcdHNwcml0ZSA6IFt7eDoyODAseTowLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdXG5cdH1cbn07XG5cblxuXG5sZXQgZ2FtZXRpbGUgPSBudWxsLCBnYW1ldGlsZVVSTCA9IFwic3JjL2ltYWdlcy90aWxlc2V0ZXN0dC5wbmdcIiwgYXJ0TG9hZGVkID0gZmFsc2U7XG5cblxuXG4vLyDliJvlu7rkuIDkuKrop5LoibIgKG1pdW1pdSlcbmxldCBtaXVtaXUgPSBuZXcgTWl1TWl1KCk7XG4vLyDliqDmm7TlpJrop5LoibLirIdcbmZ1bmN0aW9uIE1pdU1pdSgpIHtcbiAgICB0aGlzLnRpbGVGcm9tXHQ9IFsxLDFdO1xuICAgIC8vIG1pdW1pdeeahOS9jee9rlxuICAgIHRoaXMudGlsZVRvXHRcdD0gWzksMTFdO1xuICAgIC8vIHRpbWUgaW4gbWlsbHNlY29uZHNcbiAgICB0aGlzLnRpbWVNb3ZlZFx0PSAwO1xuICAgIHRoaXMuZGVsYXlNb3ZlXHQ9IDcwMDtcblx0dGhpcy5kaW1lbnNpb25zXHQ9IFs0MCw0MF07XG4gICAgdGhpcy5wb3NpdGlvblx0PSBbNDUsNDVdO1xuICAgIFxuICAgIHRoaXMuZGlyZWN0aW9uXHQ9IGRpcmVjdGlvbnMudXA7XG5cdHRoaXMuc3ByaXRlcyA9IHt9O1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy51cF1cdFx0PSBbe3g6MCx5OjEyMCx3OjMwLGg6MzB9XTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMucmlnaHRdXHQ9IFt7eDowLHk6MTUwLHc6MzAsaDozMH1dO1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy5kb3duXVx0PSBbe3g6MCx5OjE4MCx3OjMwLGg6MzB9XTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMubGVmdF1cdD0gW3t4OjAseToyMTAsdzozMCxoOjMwfV07XG59XG5cblxuLy8g5oqK6KeS6Imy5pS+5Zyo5Zyw56CW5LiKXG5NaXVNaXUucHJvdG90eXBlLmxvY2F0aW9uID0gZnVuY3Rpb24oeCwgeSkge1xuXHR0aGlzLnRpbGVGcm9tXHQ9IFt4LHldO1xuICAgIHRoaXMudGlsZVRvXHRcdD0gW3gseV07XG4gICAgLy8geCBhbmQgeSBwb3NpdGlvbiBvZiB0aGUgdGlsZS4gdXBkYXRlIHRoZSB0aWxlRnJvbSBhbmQgdGlsZVRvIHByb3BlcnRpZXMgdG8gdGhlIG5ldyB0aWxlIGNvb3JkaW5hdGVzXG4gICAgLy8gY2FsY3VsYXRlcyB0aGUgcGl4ZWwgcG9zaXRpb24gb2YgdGhlIGNoYXJhY3llciB1c2UgYmVsb3dcblx0dGhpcy5wb3NpdGlvblx0PSBbKCggdGlsZVdpZHRoICogeCApKyggKHRpbGVXaWR0aCAtIHRoaXMuZGltZW5zaW9uc1swXSkgLyAyICkpLFxuXHRcdCgoIHRpbGVIZWlnaHQgKiB5ICkrKCAodGlsZUhlaWdodCAtIHRoaXMuZGltZW5zaW9uc1sxXSkgLyAyICkpXTtcbn07XG5cbi8vIOagueaNruavj+S4quW4p+aVsOaJvuWIsOinkuiJsuS9jee9rlxuTWl1TWl1LnByb3RvdHlwZS5wcm9jZXNzTW92ZW1lbnQgPSBmdW5jdGlvbih0KSB7XG4gICAgLy8gaWYgY2hhciB0aWxlVG8gPT0gdGlsZUZyb20gY2hhciBpcyBub3QgbW92aW5nLCBzbyByZXR1cm4gZmFsc2Vcblx0aWYoIHRoaXMudGlsZUZyb21bMF0gPT0gdGhpcy50aWxlVG9bMF0gJiYgdGhpcy50aWxlRnJvbVsxXSA9PSB0aGlzLnRpbGVUb1sxXSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAvLyBpZiB0aGUgYW1vdW50IG9mIHRpbWUgcGFzc2VkIHNpbmNlIGNoYXIgYmVnYW4gaXRzIGN1cnJlbnQgbW92ZSA+PSB0aGUgdGltZSBmb3IgY2hhciB0byBtb3ZlIDEgdGlsZS4gd2Ugc2V0IHBvc2l0aW9uIHVzaW5nIGxvY2F0aW9uIGZ1bmN0aW9uXG4gICAgLy8gYWthOiBpZiBjaGFyIHN0aWxsIG1vdmluZ1xuXHRpZigodCAtIHRoaXMudGltZU1vdmVkKSA+PSB0aGlzLmRlbGF5TW92ZSkge1xuICAgICAgICB0aGlzLmxvY2F0aW9uKHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSk7XG4gICAgICAgIGlmKG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSldLmV2ZW50RW50ZXIgIT0gbnVsbCkge1xuXHRcdFx0bWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy50aWxlVG9bMF0sIHRoaXMudGlsZVRvWzFdKV0uZXZlbnRFbnRlcih0aGlzKTtcbiAgICAgICAgfVxuXHR9IGVsc2Uge1xuICAgICAgICAvLyBjdXJyZW50IHBvc2l0aW9uIG9uIGNhbnZhc1xuXHRcdHRoaXMucG9zaXRpb25bMF0gPSAodGhpcy50aWxlRnJvbVswXSAqIHRpbGVXaWR0aCkgKyAoKHRpbGVXaWR0aCAtIHRoaXMuZGltZW5zaW9uc1swXSkgLyAyKTtcblx0XHR0aGlzLnBvc2l0aW9uWzFdID0gKHRoaXMudGlsZUZyb21bMV0gKiB0aWxlSGVpZ2h0KSArICgodGlsZUhlaWdodCAtIHRoaXMuZGltZW5zaW9uc1sxXSkgLyAyKTtcblxuICAgICAgICAvLyBpZiBjaGFyIGlzIG1vdmluZyBvbiB4IGNvb3JkaW5hdGUsIGNhbGN1bGF0ZSBwaXhlbHNcblx0XHRpZih0aGlzLnRpbGVUb1swXSAhPSB0aGlzLnRpbGVGcm9tWzBdKSB7XG4gICAgICAgICAgICAvLyBkaWZmZXJlbmNlID0gZGlzdGFuY2UgbW92ZWRcbiAgICAgICAgICAgIC8vIOWKoOWHj+enu+WKqOeahOWcsOegluWIsOinkuiJsueahOS9jeWtkFxuXHRcdFx0bGV0IGRpZmZlcmVuY2UgPSAodGlsZVdpZHRoIC8gdGhpcy5kZWxheU1vdmUpICogKHQgLSB0aGlzLnRpbWVNb3ZlZCk7XG5cdFx0XHR0aGlzLnBvc2l0aW9uWzBdKz0gKHRoaXMudGlsZVRvWzBdIDwgdGhpcy50aWxlRnJvbVswXSA/IDAgLSBkaWZmZXJlbmNlIDogZGlmZmVyZW5jZSk7XG5cdFx0fVxuXHQgICAgaWYodGhpcy50aWxlVG9bMV0gIT0gdGhpcy50aWxlRnJvbVsxXSkge1xuXHRcdFx0bGV0IGRpZmZlcmVuY2UgPSAodGlsZUhlaWdodCAvIHRoaXMuZGVsYXlNb3ZlKSAqICh0LXRoaXMudGltZU1vdmVkKTtcblx0XHRcdHRoaXMucG9zaXRpb25bMV0rPSAodGhpcy50aWxlVG9bMV08dGhpcy50aWxlRnJvbVsxXSA/IDAgLSBkaWZmZXJlbmNlIDogZGlmZmVyZW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcm91bmQgeCAmIHkgdG8gd2hvbGUgbnVtYmVyIOmcgOimgeaVtOaVsFxuXHRcdHRoaXMucG9zaXRpb25bMF0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMF0pO1xuXHRcdHRoaXMucG9zaXRpb25bMV0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMV0pO1xuICAgIH1cbiAgICAvLyB0cnVlID0gY2hhciBpcyBjdXJyZW50bHkgbW92aW5nXG5cdHJldHVybiB0cnVlO1xufVxuXG5cbi8vIGlmIGNoYXIgY2FuIG1vdmUgaW4gYSBzcGVjaWZpYyBkaXJlY1xuTWl1TWl1LnByb3RvdHlwZS5wbGFjZXNDYW5HbyA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAvLyBpZiB4IGFuZCB5IGlzIGluIG1hcCBib3VuZFxuICAgIGlmKHggPCAwIHx8IHggPj0gbWFwV2lkdGggfHwgeSA8IDAgfHwgeSA+PSBtYXBIZWlnaHQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgLy8gaWYgdGhlIHRpbGUgaXMgcGF0aCB0aWxlIChvbmx5IG1vdmUgaWYgaXRzIGEgcGF0aClcbiAgICAgICAgaWYodGlsZVR5cGVzW2dhbWVNYXBbdG9JbmRleCh4LHkpXV0uZmxvb3IgIT0gZmxvb3JUeXBlcy5wYXRoKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICBpZihtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5vYmplY3QgIT0gbnVsbCkge1xuXHRcdGxldCBvYmplY3QgPSBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5vYmplY3Q7XG5cdFx0aWYob2JqZWN0VHlwZXNbb2JqZWN0LnR5cGVdLmNvbGxpc2lvbiA9PSBjb2xsaXNpb25zLnNvbGlkKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcbk1pdU1pdS5wcm90b3R5cGUuY2FuR29VcCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5wbGFjZXNDYW5Hbyh0aGlzLnRpbGVGcm9tWzBdLCB0aGlzLnRpbGVGcm9tWzFdIC0gMSk7IH07XG5NaXVNaXUucHJvdG90eXBlLmNhbkdvRG93biA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5wbGFjZXNDYW5Hbyh0aGlzLnRpbGVGcm9tWzBdLCB0aGlzLnRpbGVGcm9tWzFdICsgMSk7IH07XG5NaXVNaXUucHJvdG90eXBlLmNhbkdvTGVmdCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5wbGFjZXNDYW5Hbyh0aGlzLnRpbGVGcm9tWzBdLTEsIHRoaXMudGlsZUZyb21bMV0pOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5jYW5Hb1JpZ2h0ID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLnBsYWNlc0NhbkdvKHRoaXMudGlsZUZyb21bMF0rMSwgdGhpcy50aWxlRnJvbVsxXSk7IH07XG5cbk1pdU1pdS5wcm90b3R5cGUuZ29MZWZ0ID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1swXS09IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLmxlZnQ7IH07XG5NaXVNaXUucHJvdG90eXBlLmdvUmlnaHQgPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzBdKz0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMucmlnaHQ7IH07XG5NaXVNaXUucHJvdG90eXBlLmdvVXAgPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzFdLT0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMudXA7IH07XG5NaXVNaXUucHJvdG90eXBlLmdvRG93biA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMV0rPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5kb3duOyB9O1xuXG5cblxuLy8gY3JlYXRlIGEgY2FtZXJhIG9iamVjdFxubGV0IGNhbWVyYSA9IHtcbiAgICBzY3JlZW46IFswLDBdLFxuICAgIC8vIOeUu+mdouW3puS4iuinklxuICAgIHN0YXJ0aW5nUG9pbnQ6IFswLDBdLFxuICAgIC8vIOeUu+mdouWPs+S4i+inklxuICAgIGVuZGluZ1BvaW50OiBbMCwwXSxcbiAgICAvLyDor6/lt65cbiAgICBvZmZzZXQ6IFswLDBdLFxuICAgIC8vIHVwZGF0ZSBmdW5jdGlvbiwgeCB5IGlzIG91ciBjZW50ZXIgYXJlYVxuICAgIHVwZGF0ZTogZnVuY3Rpb24ob2Zmc2V0WCwgb2Zmc2V0WSkge1xuICAgICAgICAvLyBvZmZzZXQ6IGhhbGYgdGhlIGNhbnZhcyB3aWR0aCB8fCBoZWlnaHQgKHJvdW5kIGRvd24gdG8gd2hvbGUgbnVtKVxuXHRcdHRoaXMub2Zmc2V0WzBdID0gTWF0aC5mbG9vcigodGhpcy5zY3JlZW5bMF0vMikgLSBvZmZzZXRYKTtcbiAgICAgICAgdGhpcy5vZmZzZXRbMV0gPSBNYXRoLmZsb29yKCh0aGlzLnNjcmVlblsxXS8yKSAtIG9mZnNldFkpO1xuXG4gICAgICAgIC8vIOWcsOegluWcqOWcsOWbvuS4iueahOS9jee9rlxuICAgICAgICBsZXQgdGlsZSA9IFsgTWF0aC5mbG9vcihvZmZzZXRYIC8gdGlsZVdpZHRoKSwgTWF0aC5mbG9vcihvZmZzZXRZIC8gdGlsZUhlaWdodCkgXTtcbiAgICAgICAgLy8gIOiuoeeul+esrOS4gOS4quWcsOegluS9jee9ruWcqHjnur/kuIrvvJog5pyA5aSn5Zyw56CW5pWw6YePIC0g5bGP5bmV55qE5LiA5Y2KXG4gICAgICAgIC8vICDlpJrlh4/ljrsx6L+Z5qC35Zyw56CW5Y+v5Lulc2hvd+S4gOWNiuWcqOWxj+W5leS4ilxuICAgICAgICB0aGlzLnN0YXJ0aW5nUG9pbnRbMF0gPSB0aWxlWzBdIC0gTWF0aC5jZWlsKCh0aGlzLnNjcmVlblswXS8yKSAvIHRpbGVXaWR0aCkgIC0gMTtcblx0XHR0aGlzLnN0YXJ0aW5nUG9pbnRbMV0gPSB0aWxlWzFdIC0gTWF0aC5jZWlsKCh0aGlzLnNjcmVlblsxXS8yKSAvIHRpbGVIZWlnaHQpICAtIDE7XG5cbiAgICAgICAgLy8g56Gu5L+deOWSjHnpg73lpKfkuo4w6KaB5LmI5Lya5Zyo5Zyw5Zu+5aSWXG4gICAgICAgIGlmKHRoaXMuc3RhcnRpbmdQb2ludFswXSA8PSAtMSkgeyB0aGlzLnN0YXJ0aW5nUG9pbnRbMF0gPSAwOyB9XG5cdFx0aWYodGhpcy5zdGFydGluZ1BvaW50WzFdIDw9IC0xKSB7IHRoaXMuc3RhcnRpbmdQb2ludFsxXSA9IDA7IH1cblxuICAgICAgICB0aGlzLmVuZGluZ1BvaW50WzBdID0gdGlsZVswXSArIDEgKyBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzBdLzIpIC8gdGlsZVdpZHRoKTtcblx0XHR0aGlzLmVuZGluZ1BvaW50WzFdID0gdGlsZVsxXSArIDEgKyBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzFdLzIpIC8gdGlsZUhlaWdodCk7XG5cblx0XHRpZih0aGlzLmVuZGluZ1BvaW50WzBdID49IG1hcFdpZHRoKSB7IHRoaXMuZW5kaW5nUG9pbnRbMF0gPSBtYXBXaWR0aCAtMTsgfVxuXHRcdGlmKHRoaXMuZW5kaW5nUG9pbnRbMV0gPj0gbWFwSGVpZ2h0KSB7IHRoaXMuZW5kaW5nUG9pbnRbMV0gPSBtYXBIZWlnaHQgLSAxOyB9XG4gICAgICAgIH1cbn07XG5cblxuLy8gYnVpbGRpbmdzXG5cbmxldCBtYXBUaWxlRGF0YSA9IG5ldyBUaWxlTWFwKCk7XG5cbmxldCBidWlsZGluZ3NMb2NhdGlvbiA9IFtcblx0eyB4OjUsIHk6MCwgdzo0LCBoOjUsIGRhdGE6IFtcblx0XHQxMCwgMTEsIDExLCAxMixcbiAgICAgICAgMTMsIDE0LCAxNCwgMTUsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCxcbiAgICAgICAgMTYsIDE3LCAxNiwgMThcblx0XX0sXG5cdHsgeDoxMCwgeTowLCB3OjcsIGg6NSwgZGF0YTogW1xuXHRcdDEwLCAxMSwgMTEsIDExLCAxMSwgMTIsIDEyLFxuICAgICAgICAxMywgMTUsIDEzLCAxNCwgMTQsIDE1LCAxNSxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTksIDE5LCAxOCwgMTgsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE5LCAxOSwgMTgsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOSwgMTcsIDE4LCAxOFxuXHRdfSxcblx0eyB4OjgsIHk6OCwgdzo0LCBoOjQsIGRhdGE6IFtcbiAgICAgICAgMTAsIDExLCAxMSwgMTIsXG4gICAgICAgIDEzLCAxNCwgMTQsIDE1LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCxcbiAgICAgICAgMTYsIDE3LCAxNiwgMThcblx0XX1cbl07XG5cbi8vIHN0b3JlcyBpbmZvcm1hdGlvbiBmb3IgZWFjaCBtYXAgdGlsZVxuZnVuY3Rpb24gVGlsZSh0aWxlWCwgdGlsZVksIHRpbGVUeXBlKVxue1xuICAgIC8vIHRpbGVZLCB0aWxlWCA9IHRoZSBwb3NpdGlvbiBvZiB0aGUgdGlsZSBvbiB0aGUgbWFwXG5cdHRoaXMueFx0XHRcdD0gdGlsZVg7XG5cdHRoaXMueVx0XHRcdD0gdGlsZVk7XG5cdHRoaXMudHlwZVx0XHQ9IHRpbGVUeXBlO1xuXHR0aGlzLmJ1aWxkaW5nXHRcdD0gbnVsbDtcbiAgICB0aGlzLmJ1aWxkaW5nVHlwZVx0PSAwO1xuICAgIC8vICBwb2ludGVyIHRvIGEgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIGEgTWl1TWl1IGhhcyBjb21wbGV0ZWQgbW92aW5nIG9uIHRvIHRoaXMgdGlsZVxuICAgIHRoaXMuZXZlbnRFbnRlclx0PSBudWxsO1xuICAgIHRoaXMub2JqZWN0XHRcdD0gbnVsbDtcblxufVxuXG4vLyDlgqjlrZjnrqHnkIblnLDlm77mlbDmja5cbmZ1bmN0aW9uIFRpbGVNYXAoKSB7XG5cdHRoaXMubWFwXHQ9IFtdO1xuXHR0aGlzLndcdFx0PSAwO1xuICAgIHRoaXMuaFx0XHQ9IDA7XG5cdHRoaXMubGV2ZWxzXHQ9IDQ7XG59XG5cblRpbGVNYXAucHJvdG90eXBlLmJ1aWxkTWFwRnJvbURhdGEgPSBmdW5jdGlvbih0aWxlSWQsIHcsIGgpIHtcblx0dGhpcy53XHRcdD0gdztcbiAgICB0aGlzLmhcdFx0PSBoO1xuXG4gICAgaWYodGlsZUlkLmxlbmd0aCE9KHcgKiBoKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XG4gICAgdGhpcy5tYXAubGVuZ3RoXHQ9IDA7XG4gICAgXHRmb3IobGV0IHkgPSAwOyB5IDwgaDsgeSsrKSB7XG5cdFx0ICAgIGZvcihsZXQgeCA9IDA7IHggPCB3OyB4KyspIHtcblx0XHRcdHRoaXMubWFwLnB1c2goIG5ldyBUaWxlKHgsIHksIHRpbGVJZFsgKHggKyAodyAqIHkpKV0pICk7XG5cdFx0fVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuVGlsZU1hcC5wcm90b3R5cGUuYWRkQnVpbGRpbmdzID0gZnVuY3Rpb24oYnVpbGRpbmdzKSB7XG5cdGZvcihsZXQgaSBpbiBidWlsZGluZ3MpIHtcbiAgICAgICAgbGV0IGJ1aWxkaW5nID0gYnVpbGRpbmdzW2ldO1xuICAgICAgICBpZihidWlsZGluZy54IDwgMCB8fCBidWlsZGluZy55IDwgMCB8fCBidWlsZGluZy54ID49IHRoaXMudyB8fCBidWlsZGluZy55ID49IHRoaXMuaCB8fFx0KGJ1aWxkaW5nLngrYnVpbGRpbmcudyk+dGhpcy53IHx8IChidWlsZGluZy55K2J1aWxkaW5nLmgpPnRoaXMuaCB8fCBidWlsZGluZy5kYXRhLmxlbmd0aCE9KGJ1aWxkaW5nLncqYnVpbGRpbmcuaCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgeSA9IDA7IHkgPCBidWlsZGluZy5oOyB5KyspIHtcblx0XHRcdGZvcihsZXQgeCA9IDA7IHggPCBidWlsZGluZy53OyB4KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZUlkeCA9ICgoKGJ1aWxkaW5nLnkgKyB5KSAqIHRoaXMudykgKyBidWlsZGluZy54ICsgeCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbdGlsZUlkeF0uYnVpbGRpbmcgPSBidWlsZGluZztcblx0XHRcdFx0dGhpcy5tYXBbdGlsZUlkeF0uYnVpbGRpbmdUeXBlID0gYnVpbGRpbmcuZGF0YVsoICh5ICogYnVpbGRpbmcudykgKyB4KV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vLyDnianlk4HmkYbmlL5cbmZ1bmN0aW9uIEdhbWVPYmplY3RzKG50KSB7XG5cdHRoaXMueCA9IDA7XG5cdHRoaXMueVx0XHQ9IDA7XG5cdHRoaXMudHlwZVx0PSBudDtcbn1cblxuR2FtZU9iamVjdHMucHJvdG90eXBlLnBsYWNlQXQgPSBmdW5jdGlvbihueCwgbnkpIHtcblx0aWYobWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy54LCB0aGlzLnkpXS5vYmplY3QgPT0gdGhpcykge1xuXHRcdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMueCwgdGhpcy55KV0ub2JqZWN0ID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy54ID0gbng7XG5cdHRoaXMueSA9IG55O1xuXHRcblx0bWFwVGlsZURhdGEubWFwW3RvSW5kZXgobngsIG55KV0ub2JqZWN0ID0gdGhpcztcbn07XG5cblxuXG4vLyBjb252ZXJ0IHgsIHkgaW50byBpbmRleCBpbiBnYW1lTWFwIGFyclxuZnVuY3Rpb24gdG9JbmRleCh4LCB5KSB7XG5cdHJldHVybih4ICsgKG1hcFdpZHRoICogeSkpO1xufVxuXG5mdW5jdGlvbiBnZXRGcmFtZShzcHJpdGUsIHRpbWVMYXN0LCB0aW1lLCBhbmltYXRpb24pIHtcblx0aWYoIWFuaW1hdGlvbikgeyByZXR1cm4gc3ByaXRlWzBdOyB9XG5cdHRpbWUgPSB0aW1lICUgdGltZUxhc3Q7XG5cblx0Zm9yKHggaW4gc3ByaXRlKSB7XG5cdFx0aWYoc3ByaXRlW3hdLmVuZD49dGltZSkgeyByZXR1cm4gc3ByaXRlW3hdOyB9XG5cdH1cbn1cblxuLy8g55WM6Z2ibG9hZOWujO+8jOW8gOWni2xvb3BcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0Y3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXVtaXVUYWxlXCIpLmdldENvbnRleHQoXCIyZFwiKTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbiAgICBcbiAgICAvLyBhZGQgZXZlbnRMaXN0ZW5lcnMgZm9yIHRoZSBrZXlkb3duYSBhbmQga2V5dXBcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZihlLmtleUNvZGUgPj0gMzcgJiYgZS5rZXlDb2RlIDw9NDAgKSB7IGhlbGRLZXlzW2Uua2V5Q29kZV0gPSB0cnVlOyB9XG5cdH0pO1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZihlLmtleUNvZGUgPj0gMzcgJiYgZS5rZXlDb2RlIDw9IDQwKSB7IGhlbGRLZXlzW2Uua2V5Q29kZV0gPSBmYWxzZTsgfVxuICAgIH0pO1xuXG4gICAgLy8gY2FudmFz5bC65a+4IOS/neWtmOWIsCDnm7jmnLpcbiAgICBjYW1lcmEuc2NyZWVuID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWl1bWl1VGFsZVwiKS53aWR0aCxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXVtaXVUYWxlXCIpLmhlaWdodF07XG4gICAgICAgIFxuICAgIGdhbWV0aWxlID0gbmV3IEltYWdlKCk7XG5cdGdhbWV0aWxlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRjdHggPSBudWxsO1xuXHRcdGFsZXJ0KFwiRmFpbGVkIGxvYWRpbmcgZ2FtZXRpbGUuXCIpO1xuXHR9O1xuXHRnYW1ldGlsZS5vbmxvYWQgPSBmdW5jdGlvbigpIHsgYXJ0TG9hZGVkID0gdHJ1ZTsgfTtcbiAgICBnYW1ldGlsZS5zcmMgPSBnYW1ldGlsZVVSTDtcbiAgICBcbiAgICBtYXBUaWxlRGF0YS5idWlsZE1hcEZyb21EYXRhKGdhbWVNYXAsIG1hcFdpZHRoLCBtYXBIZWlnaHQpO1xuXHRtYXBUaWxlRGF0YS5hZGRCdWlsZGluZ3MoYnVpbGRpbmdzTG9jYXRpb24pO1xuXHRtYXBUaWxlRGF0YS5tYXBbKCgyICogbWFwV2lkdGgpICsgMildLmV2ZW50RW50ZXIgPSBmdW5jdGlvbigpIHsgY29uc29sZS5sb2coXCJFbnRlcmVkIHRpbGUgMiwyXCIpOyB9O1xuICAgIFxuXHRsZXQgZmVuY2UxID0gbmV3IEdhbWVPYmplY3RzKDIpOyBmZW5jZTEucGxhY2VBdCg5LCAxKTtcbiAgICBcbiAgICBsZXQgZmxvd2VyMSA9IG5ldyBHYW1lT2JqZWN0cygxKTsgZmxvd2VyMS5wbGFjZUF0KDUsIDUpO1xuICAgIGxldCBmbG93ZXIyID0gbmV3IEdhbWVPYmplY3RzKDEpOyBmbG93ZXIyLnBsYWNlQXQoNywgNSk7XG4gICAgbGV0IGZsb3dlcjMgPSBuZXcgR2FtZU9iamVjdHMoMSk7IGZsb3dlcjMucGxhY2VBdCg4LCA1KTtcbiAgICBcblx0bGV0IHRyZWUxID0gbmV3IEdhbWVPYmplY3RzKDMpOyB0cmVlMS5wbGFjZUF0KDQsIDYpO1xuXHRsZXQgdHJlZTIgPSBuZXcgR2FtZU9iamVjdHMoMyk7IHRyZWUyLnBsYWNlQXQoOSwgNik7XG5cdGxldCB0cmVlMyA9IG5ldyBHYW1lT2JqZWN0cygzKTsgdHJlZTMucGxhY2VBdCg3LCA2KTtcdFxuICAgIGxldCB0cmVlNCA9IG5ldyBHYW1lT2JqZWN0cygzKTsgdHJlZTQucGxhY2VBdCgxMiwgNik7XG4gICAgXG4gICAgbGV0IG1hc2hyb29tMSA9IG5ldyBHYW1lT2JqZWN0cyg0KTsgbWFzaHJvb20xLnBsYWNlQXQoMiw0KTtcbiAgICBsZXQgbWFzaHJvb20yID0gbmV3IEdhbWVPYmplY3RzKDQpOyBtYXNocm9vbTIucGxhY2VBdCg5LDIpO1xuICAgIFxuXG4gICAgbGV0IHBpZ1Nob3AxID0gbmV3IEdhbWVPYmplY3RzKDUpOyBwaWdTaG9wMS5wbGFjZUF0KDMsIDQpO1xuXG4gICAgbGV0IGRvbnV0cyA9IG5ldyBHYW1lT2JqZWN0cyg2KTsgZG9udXRzLnBsYWNlQXQoNSwgMCk7XG5cbiAgICBsZXQgY29va2luZyA9IG5ldyBHYW1lT2JqZWN0cyg3KTsgY29va2luZy5wbGFjZUF0KDcsIDApO1xuXG4gICAgbGV0IGNhcnBldCA9IG5ldyBHYW1lT2JqZWN0cyg4KTsgY2FycGV0LnBsYWNlQXQoNywyKTtcblxuICAgIGxldCBkZXNrID0gbmV3IEdhbWVPYmplY3RzKDkpOyBkZXNrLnBsYWNlQXQoOCwzKTtcblxuICAgIGxldCBjaGFpciA9IG5ldyBHYW1lT2JqZWN0cygxMCk7IGNoYWlyLnBsYWNlQXQoOCwyKTtcbiAgICBsZXQgY2hhaXIyID0gbmV3IEdhbWVPYmplY3RzKDE2KTsgY2hhaXIyLnBsYWNlQXQoMTIsMik7XG5cbiAgICBsZXQgdHJlZVBsYW50ID0gbmV3IEdhbWVPYmplY3RzKDExKTsgdHJlZVBsYW50LnBsYWNlQXQoNSwzKTtcblxuICAgIGxldCBkcnVtID0gbmV3IEdhbWVPYmplY3RzKDEyKTsgZHJ1bS5wbGFjZUF0KDE1LDEpO1xuXG4gICAgbGV0IGluc3RydW1lbnRzID0gbmV3IEdhbWVPYmplY3RzKDEzKTsgaW5zdHJ1bWVudHMucGxhY2VBdCgxMiwwKTtcblxuICAgIGxldCBib29rU2hlbGYxID0gbmV3IEdhbWVPYmplY3RzKDE0KTsgYm9va1NoZWxmMS5wbGFjZUF0KDEwLDEpO1xuICAgIGxldCBib29rU2hlbGYyID0gbmV3IEdhbWVPYmplY3RzKDE0KTsgYm9va1NoZWxmMi5wbGFjZUF0KDEwLDIpO1xuXG4gICAgbGV0IHNheG9waG9uZSA9IG5ldyBHYW1lT2JqZWN0cygxNSk7IHNheG9waG9uZS5wbGFjZUF0KDEzLDIpO1xuXG59O1xuXG5cblxuLy8gbWFpbiBmdW5jdGlvblxuZnVuY3Rpb24gZHJhd0dhbWUoKSB7XG4gICAgaWYgKGN0eCA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgIGlmICghYXJ0TG9hZGVkKSB7IHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7IHJldHVybjsgfVxuXG5cdGxldCBjdXJyZW50RnJhbWVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAvLyBmcmFtZWNvdW50IFxuXHRsZXQgc2VjID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5cdGlmKHNlYyAhPSBjdXJyZW50U2Vjb25kKXtcblx0XHRjdXJyZW50U2Vjb25kID0gc2VjO1xuXHRcdGZyYW1lc0xhc3RTZWNvbmQgPSBmcmFtZUNvdW50O1xuXHRcdGZyYW1lQ291bnQgPSAxO1xuXHR9IGVsc2UgeyBcbiAgICAgICAgZnJhbWVDb3VudCsrOyBcbiAgICB9XG5cbiAgICAvLyBtaXVtaXUgbW92ZW1lbnRcblx0aWYoIW1pdW1pdS5wcm9jZXNzTW92ZW1lbnQoY3VycmVudEZyYW1lVGltZSkpIHtcblx0XHRpZihoZWxkS2V5c1szOF0gJiYgbWl1bWl1LmNhbkdvVXAoKSl7IFxuICAgICAgICAgICAgbWl1bWl1LmdvVXAoY3VycmVudEZyYW1lVGltZSk7IFxuICAgICAgICB9IGVsc2UgaWYgKGhlbGRLZXlzWzQwXSAmJiBtaXVtaXUuY2FuR29Eb3duKCkpIHsgXG4gICAgICAgICAgICBtaXVtaXUuZ29Eb3duKGN1cnJlbnRGcmFtZVRpbWUpOyBcbiAgICAgICAgfSBlbHNlIGlmKGhlbGRLZXlzWzM3XSAmJiBtaXVtaXUuY2FuR29MZWZ0KCkpIHsgXG4gICAgICAgICAgICBtaXVtaXUuZ29MZWZ0KGN1cnJlbnRGcmFtZVRpbWUpOyBcbiAgICAgICAgfSBlbHNlIGlmKGhlbGRLZXlzWzM5XSAmJiBtaXVtaXUuY2FuR29SaWdodCgpKSB7IFxuICAgICAgICAgICAgbWl1bWl1LmdvUmlnaHQoY3VycmVudEZyYW1lVGltZSk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2FtZXJh6Lef552AbWl1bWl16LWwXG4gICAgICAgIGNhbWVyYS51cGRhdGUobWl1bWl1LnBvc2l0aW9uWzBdICsgKG1pdW1pdS5kaW1lbnNpb25zWzBdIC8gMiksXG4gICAgICAgICAgICBtaXVtaXUucG9zaXRpb25bMV0gKyAobWl1bWl1LmRpbWVuc2lvbnNbMV0gLyAyKSk7XG5cblx0ICAgIGxldCBtaXVtaXVCdWlsZGluZzEgPSBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleChcblx0XHRtaXVtaXUudGlsZUZyb21bMF0sIG1pdW1pdS50aWxlRnJvbVsxXSldLmJ1aWxkaW5nO1xuXHQgICAgbGV0IG1pdW1pdUJ1aWxkaW5nMiA9IG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KFxuXHRcdG1pdW1pdS50aWxlVG9bMF0sIG1pdW1pdS50aWxlVG9bMV0pXS5idWlsZGluZztcblxuICAgICAgICAvLyDmuIXpmaRsYXN0IGZyYW1lXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbWVyYS5zY3JlZW5bMF0sIGNhbWVyYS5zY3JlZW5bMV0pO1xuICAgIFxuXG4gICAgZm9yKGxldCB6ID0gMDsgeiA8IG1hcFRpbGVEYXRhLmxldmVsczsgeisrKSB7XG5cdFx0Zm9yKGxldCB5ID0gY2FtZXJhLnN0YXJ0aW5nUG9pbnRbMV07IHkgPD0gY2FtZXJhLmVuZGluZ1BvaW50WzFdOyArK3kpIHtcblx0XHQgICAgZm9yKGxldCB4ID0gY2FtZXJhLnN0YXJ0aW5nUG9pbnRbMF07IHggPD0gY2FtZXJhLmVuZGluZ1BvaW50WzBdOyArK3gpIHtcbiAgICAgICAgICAgICAgICBpZih6PT0wKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSB0aWxlVHlwZXNbbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0udHlwZV07XG5cblx0XHRcdCAgICBjdHguZHJhd0ltYWdlKGdhbWV0aWxlLFxuXHRcdFx0XHR0aWxlLnNwcml0ZVswXS54LCB0aWxlLnNwcml0ZVswXS55LCB0aWxlLnNwcml0ZVswXS53LCB0aWxlLnNwcml0ZVswXS5oLFxuXHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgKHggKiB0aWxlV2lkdGgpLCBjYW1lcmEub2Zmc2V0WzFdICsgKHkgKiB0aWxlSGVpZ2h0KSxcbiAgICAgICAgICAgICAgICB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBvYmplY3QgPSBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5vYmplY3Q7XG5cdFx0XHRpZihvYmplY3QgIT0gbnVsbCAmJiBvYmplY3RUeXBlc1tvYmplY3QudHlwZV0uekluZGV4ID09IHopIHtcblx0XHRcdFx0bGV0IG9iamVjdFR5cGUgPSBvYmplY3RUeXBlc1tvYmplY3QudHlwZV07XG5cdFx0XHRcdCBcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZShnYW1ldGlsZSxcblx0XHRcdFx0XHRvYmplY3RUeXBlLnNwcml0ZVswXS54LCBvYmplY3RUeXBlLnNwcml0ZVswXS55LFxuXHRcdFx0XHRcdG9iamVjdFR5cGUuc3ByaXRlWzBdLncsIG9iamVjdFR5cGUuc3ByaXRlWzBdLmgsXG5cdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFswXSArICh4ICogdGlsZVdpZHRoKSArIG9iamVjdFR5cGUub2Zmc2V0WzBdLFxuXHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMV0gKyAoeSAqIHRpbGVIZWlnaHQpICsgb2JqZWN0VHlwZS5vZmZzZXRbMV0sXG5cdFx0XHRcdFx0b2JqZWN0VHlwZS5zcHJpdGVbMF0udywgb2JqZWN0VHlwZS5zcHJpdGVbMF0uaCk7XG5cdFx0XHR9XG5cbiAgICAgICAgICAgICAgIGlmKHogPT0gMiAmJiBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5idWlsZGluZ1R5cGUhPTAgJiYgbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmchPW1pdW1pdUJ1aWxkaW5nMSAmJiBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5idWlsZGluZyE9bWl1bWl1QnVpbGRpbmcyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbGUgPSB0aWxlVHlwZXNbbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmdUeXBlXTtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlID0gZ2V0RnJhbWUodGlsZS5zcHJpdGUsIHRpbGUuc3ByaXRldGltZUxhc3QsIHRpbGUuYW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShnYW1ldGlsZSwgc3ByaXRlLngsIHNwcml0ZS55LCBzcHJpdGUudywgc3ByaXRlLmgsIGNhbWVyYS5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCksIGNhbWVyYS5vZmZzZXRbMV0gKyAoeSAqIHRpbGVIZWlnaHQpLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpO1xuXHRcdFx0fVxuXHRcdH1cbiAgICB9XG5cbiAgICBpZiAoeiA9PSAxKSB7XG5cdFx0XHRsZXQgc3ByaXRlID0gbWl1bWl1LnNwcml0ZXNbbWl1bWl1LmRpcmVjdGlvbl07XG5cdFx0XHRjdHguZHJhd0ltYWdlKGdhbWV0aWxlLFxuXHRcdFx0XHRzcHJpdGVbMF0ueCwgc3ByaXRlWzBdLnksXG5cdFx0XHRcdHNwcml0ZVswXS53LCBzcHJpdGVbMF0uaCxcblx0XHRcdFx0Y2FtZXJhLm9mZnNldFswXSArIG1pdW1pdS5wb3NpdGlvblswXSxcblx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArIG1pdW1pdS5wb3NpdGlvblsxXSxcblx0XHRcdFx0bWl1bWl1LmRpbWVuc2lvbnNbMF0sIG1pdW1pdS5kaW1lbnNpb25zWzFdKTtcblx0XHR9XG5cdH1cbiAgICBcbiAgICAvLyBkcmF3IHRoZSBtaXVtaXVcbiAgICBsZXQgc3ByaXRlID0gbWl1bWl1LnNwcml0ZXNbbWl1bWl1LmRpcmVjdGlvbl07XG5cdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsIHNwcml0ZVswXS54LCBzcHJpdGVbMF0ueSwgc3ByaXRlWzBdLncsIHNwcml0ZVswXS5oLCBjYW1lcmEub2Zmc2V0WzBdICsgbWl1bWl1LnBvc2l0aW9uWzBdLCBjYW1lcmEub2Zmc2V0WzFdICsgbWl1bWl1LnBvc2l0aW9uWzFdLCBtaXVtaXUuZGltZW5zaW9uc1swXSwgbWl1bWl1LmRpbWVuc2lvbnNbMV0pO1xuXG5cdGxhc3RGcmFtZVRpbWUgPSBjdXJyZW50RnJhbWVUaW1lO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==