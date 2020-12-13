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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJoZWxkS2V5cyIsImRpcmVjdGlvbnMiLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJmbG9vclR5cGVzIiwic29saWQiLCJwYXRoIiwib2NlYW4iLCJ0aWxlVHlwZXMiLCJjb2xvciIsImZsb29yIiwic3ByaXRlIiwieCIsInkiLCJ3IiwiaCIsImNvbGxpc2lvbnMiLCJub25lIiwib2JqZWN0VHlwZXMiLCJuYW1lIiwib2Zmc2V0IiwiY29sbGlzaW9uIiwiekluZGV4IiwiaXRlbVR5cGVzIiwibWF4U3RhY2siLCJnYW1ldGlsZSIsImdhbWV0aWxlVVJMIiwiYXJ0TG9hZGVkIiwibWl1bWl1IiwiTWl1TWl1IiwidGlsZUZyb20iLCJ0aWxlVG8iLCJ0aW1lTW92ZWQiLCJkZWxheU1vdmUiLCJkaW1lbnNpb25zIiwicG9zaXRpb24iLCJkaXJlY3Rpb24iLCJzcHJpdGVzIiwicHJvdG90eXBlIiwibG9jYXRpb24iLCJwcm9jZXNzTW92ZW1lbnQiLCJ0IiwibWFwVGlsZURhdGEiLCJtYXAiLCJ0b0luZGV4IiwiZXZlbnRFbnRlciIsImRpZmZlcmVuY2UiLCJNYXRoIiwicm91bmQiLCJwbGFjZXNDYW5HbyIsIm9iamVjdCIsInR5cGUiLCJjYW5Hb1VwIiwiY2FuR29Eb3duIiwiY2FuR29MZWZ0IiwiY2FuR29SaWdodCIsImdvTGVmdCIsImdvUmlnaHQiLCJnb1VwIiwiZ29Eb3duIiwiY2FtZXJhIiwic2NyZWVuIiwic3RhcnRpbmdQb2ludCIsImVuZGluZ1BvaW50IiwidXBkYXRlIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0aWxlIiwiY2VpbCIsIlRpbGVNYXAiLCJidWlsZGluZ3NMb2NhdGlvbiIsImRhdGEiLCJUaWxlIiwidGlsZVgiLCJ0aWxlWSIsInRpbGVUeXBlIiwiYnVpbGRpbmciLCJidWlsZGluZ1R5cGUiLCJsZXZlbHMiLCJidWlsZE1hcEZyb21EYXRhIiwidGlsZUlkIiwibGVuZ3RoIiwicHVzaCIsImFkZEJ1aWxkaW5ncyIsImJ1aWxkaW5ncyIsImkiLCJ0aWxlSWR4IiwiR2FtZU9iamVjdHMiLCJudCIsInBsYWNlQXQiLCJueCIsIm55IiwiZ2V0RnJhbWUiLCJ0aW1lTGFzdCIsInRpbWUiLCJhbmltYXRpb24iLCJlbmQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXdHYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIiwid2lkdGgiLCJoZWlnaHQiLCJJbWFnZSIsIm9uZXJyb3IiLCJhbGVydCIsInNyYyIsImNvbnNvbGUiLCJsb2ciLCJmZW5jZTEiLCJmbG93ZXIxIiwiZmxvd2VyMiIsImZsb3dlcjMiLCJ0cmVlMSIsInRyZWUyIiwidHJlZTMiLCJ0cmVlNCIsIm1hc2hyb29tMSIsIm1hc2hyb29tMiIsInBpZ1Nob3AxIiwiZG9udXRzIiwiY29va2luZyIsImNhcnBldCIsImRlc2siLCJjaGFpciIsImNoYWlyMiIsInRyZWVQbGFudCIsImRydW0iLCJpbnN0cnVtZW50cyIsImJvb2tTaGVsZjEiLCJib29rU2hlbGYyIiwic2F4b3Bob25lIiwiY3VycmVudEZyYW1lVGltZSIsIkRhdGUiLCJub3ciLCJzZWMiLCJtaXVtaXVCdWlsZGluZzEiLCJtaXVtaXVCdWlsZGluZzIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInoiLCJkcmF3SW1hZ2Ui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WixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQXpCTztBQTBCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQTFCTztBQTJCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0UsSUFBdEM7QUFBNENLLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFuRCxHQTNCTztBQTRCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQTVCTztBQTZCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQTdCTztBQStCWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQS9CTztBQWdDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQWhDTztBQWlDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQWpDTztBQWtDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQWxDTztBQW1DWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQW5DTztBQW9DWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0UsSUFBdEM7QUFBNENLLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFuRCxHQXBDTztBQXFDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQXJDTztBQXNDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQXRDTztBQXVDWixNQUFLO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFwRCxHQXZDTztBQXdDWixNQUFLO0FBQUVO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R0FBRzZJLGdCQUFoQjtBQUNBcEMsdUJBQXFCLENBQUNDLFFBQUQsQ0FBckI7QUFDQSxDOzs7Ozs7Ozs7OztBQ25xQkQsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL21hcFwiO1xuXG5cblxuIiwiLy8gaSB3YW50IGEgY2FtZXJhIGZvbGxvd2luZyB0aGUgY2hhciBhcm91bmQgdGhlIG1hcFxuXG5cbmxldCBjdHggPSBudWxsO1xuXG4vLyBjcmVhdGUgYSBtYXAgd2l0aCAxMCoxMCB0aWxlXG5sZXQgZ2FtZU1hcCA9IFtcblx0MCwgMCwgMCwgMCwgMCwgNiwgNSwgNSwgNywgMCwgMjYsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjcsIDAsIDAsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDIxLCAyMCwgMjAsIDIyLCAxLCAyOSwgMjgsIDI4LCAyOCwgMjgsIDI4LCAzMCwgMiwgMiwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMjEsIDIwLCAyMCwgMjIsIDEsIDI5LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDMwLCAyLCAyLCAwLFxuXHQwLCAxLCAxLCAxLCAxLCAyMSwgMjAsIDIwLCAyMiwgMSwgMjksIDI4LCAyOCwgMjgsIDI4LCAyOCwgMzAsIDIsIDIsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDE2LCAyMCwgMTYsIDE4LCAxLCAxNiwgMTgsIDE2LCAxOSwgMjgsIDE4LCAxOCwgMiwgMiwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMiwgMiwgMiwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMiwgMiwgMiwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMzEsIDMyLCAzMywgMzQsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDM1LCAzNiwgMzcsIDM4LCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuICAgIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDM5LCA0MCwgNDEsIDQyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxNiwgMzYsIDE2LCAxOCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNFxuXTtcbi8vIOavj+S4quWcsOegluWkmuWwkXBpeGVsXG5sZXQgdGlsZVdpZHRoID0gNDA7XG5sZXQgdGlsZUhlaWdodCA9IDQwO1xuLy8g5Zyw5Zu+5aSn5bCP5bCx5pivMTAqMTBcbmxldCBtYXBXaWR0aCA9IDIwO1xubGV0IG1hcEhlaWdodCA9IDIwO1xuLy8gZnJhbWVyYXRlXG5sZXQgY3VycmVudFNlY29uZCA9IDA7XG5sZXQgZnJhbWVDb3VudCA9IDA7XG5sZXQgZnJhbWVzTGFzdFNlY29uZCA9IDA7XG5sZXQgbGFzdEZyYW1lVGltZSA9IDA7XG5cblxuLy8ga2V5Q29kZSA6IGJvb2xlYW4gdG8gdGVsbCB1cyB3aGljaCBvbmUgYXJlIHByZXNzZWRcbmxldCBoZWxkS2V5cyA9IHtcbiAgICAvLyAzNzogbGVmdFxuICAgIDM3IDogZmFsc2UsXG4gICAgLy8gMzg6IHVwXG4gICAgMzggOiBmYWxzZSxcbiAgICAvLyAzOTogcmlnaHRcbiAgICAzOSA6IGZhbHNlLFxuICAgIC8vIDQwOiBkb3duXG4gICAgNDAgOiBmYWxzZVxuICAgIC8vIDMyOiBzcGFjZVxufTtcblxubGV0IGRpcmVjdGlvbnMgPSB7XG5cdHVwXHQ6IDAsXG5cdHJpZ2h0OiAxLFxuXHRkb3duOiAyLFxuXHRsZWZ0OiAzXG59O1xuXG5cbi8vIOWcsOadv+enjeexu1xubGV0IGZsb29yVHlwZXMgPSB7XG4gICAgc29saWQ6IDAsXG4gICAgcGF0aDogMSxcbiAgICBvY2VhbjogMlxufTtcblxuLy8g5pWw5a2X77yIZ2FtZU1hcO+8ieWvueW6lOS4iuminOiJsuWSjOWcsOadv+enjeexu1xuLy8gMDrlopnlo4EgMTrojYnlnLAgMjrpmYblnLAgIDQ6IOawtCAgXG4vLyA1Oum7hOiJsuWGhemDqOWimeWjgSA2OiDpu4ToibLlhoXpg6jlopnlo4Hlt6bop5IgNzrpu4ToibLlhoXpg6jlopnlo4Hlj7Pop5Jcbi8vIDIwOum7hOiJsuWGhemDqOWcsOadvyAyMTrpu4ToibLlhoXpg6jlopnlt6YgMjI66buE6Imy5YaF6YOo5aKZ5Y+zXG4vLyAyNTrmo5XoibLlhoXpg6jlopnlo4EgMjY65qOV6Imy5YaF6YOo5aKZ5aOB5bem6KeSIDI3OiDmo5XoibLlhoXpg6jlopnlo4Hlj7Pop5Jcbi8vIDI4OiDmo5XoibLlhoXpg6jlnLDmnb8gMjk6IOajleiJsuWGhemDqOWimeW3piAzMDrmo5XoibLlhoXpg6jlopnlj7Ncbi8vIDEwLTE5IOaIv+WtkOWkluinglxuLy8gMzEtNDIgbWl1bWl1IHJvb21cbmxldCB0aWxlVHlwZXMgPSB7XG5cdDAgOiB7IGNvbG9yOiBcIiM3OTNkNGNcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MCx5OjAsdzo0MCxoOjQwfV0gfSxcblx0MSA6IHsgY29sb3I6IFwiIzZkZjdiMVwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjQwLHk6MCx3OjQwLGg6NDB9XSB9LFxuXHQyIDogeyBjb2xvcjogXCIjYzk3NDYxXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6ODAseTowLHc6NDAsaDo0MH1dXHR9LFxuICAgIDQgOiB7IGNvbG9yOiBcIiMwMDhkZjBcIiwgZmxvb3I6IGZsb29yVHlwZXMub2NlYW4sIHNwcml0ZTpbe3g6MTYwLHk6MCx3OjQwLGg6NDB9XSB9LFxuICAgIDUgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MTIwLHk6MCx3OjQwLGg6NDB9XSB9LFxuICAgIDYgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MTIwLHk6NDAsdzo0MCxoOjQwfV0gfSxcbiAgICA3IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjgwLHk6NDAsdzo0MCxoOjQwfV0gfSxcbiAgICBcbiAgICAxMCA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDExIDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyODAseTo0MCx3OjQwLGg6NDB9XX0sXG4gICAgMTIgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjQwLHc6NDAsaDo0MH1dfSxcbiAgICAxMyA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE0IDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyODAseTo4MCx3OjQwLGg6NDB9XX0sXG4gICAgMTUgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjgwLHc6NDAsaDo0MH1dfSxcbiAgICAxNiA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6MTIwLHc6NDAsaDo0MH1dfSxcbiAgICAxNyA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjgwLHk6MTIwLHc6NDAsaDo0MH1dfSxcbiAgICAxOCA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6MTIwLHc6NDAsaDo0MH1dfSxcbiAgICAxOSA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzYwLHk6MTIwLHc6NDAsaDo0MH1dfSxcbiAgICBcbiAgICAyMCA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjQwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDIxIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjgwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDIyIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjEyMCx5OjgwLHc6NDAsaDo0MH1dfSxcblxuICAgIDI1IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjE2MCx3OjQwLGg6NDB9XX0sXG4gICAgMjYgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6MTYwLHc6NDAsaDo0MH1dfSxcbiAgICAyNyA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyODAseToxNjAsdzo0MCxoOjQwfV19LFxuICAgIDI4IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6MjgwLHk6MjAwLHc6NDAsaDo0MH1dfSxcbiAgICAyOSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozNjAseToxNjAsdzo0MCxoOjQwfV19LFxuICAgIDMwIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI0MCx5OjIwMCx3OjQwLGg6NDB9XX0sXG5cbiAgICAzMSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseToyMDAsdzo0MCxoOjQwfV19LFxuICAgIDMyIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjM2MCx5OjIwMCx3OjQwLGg6NDB9XX0sXG4gICAgMzMgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6NDAwLHk6MjAwLHc6NDAsaDo0MH1dfSxcbiAgICAzNCA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDo0NDAseToyMDAsdzo0MCxoOjQwfV19LFxuICAgIDM1IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjI0MCx3OjQwLGg6NDB9XX0sXG4gICAgMzYgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDozNjAseToyNDAsdzo0MCxoOjQwfV19LFxuICAgIDM3IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjQwMCx5OjI0MCx3OjQwLGg6NDB9XX0sXG4gICAgMzggOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6NDQwLHk6MjQwLHc6NDAsaDo0MH1dfSxcbiAgICAzOSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseToyODAsdzo0MCxoOjQwfV19LFxuICAgIDQwIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6MzYwLHk6MjgwLHc6NDAsaDo0MH1dfSxcbiAgICA0MSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjQwMCx5OjI4MCx3OjQwLGg6NDB9XX0sXG4gICAgNDIgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6NDQwLHk6MjgwLHc6NDAsaDo0MH1dfSxcblxuXG4gICAgXG59O1xuXG5sZXQgY29sbGlzaW9ucyA9IHtcblx0bm9uZVx0XHQ6IDAsXG5cdHNvbGlkXHRcdDogMVxufTtcblxubGV0IG9iamVjdFR5cGVzID0ge1xuXHQxIDoge1xuXHRcdG5hbWUgOiBcIkZsb3dlclwiLFxuXHRcdHNwcml0ZSA6IFt7eDo0MCx5OjE4MCx3OjQwLGg6MjB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLm5vbmUsXG5cdFx0ekluZGV4IDogMVxuXHR9LFxuXHQyIDoge1xuXHRcdG5hbWUgOiBcImZlbmNlXCIsXG5cdFx0c3ByaXRlIDogW3t4OjQwLHk6MjAwLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuXHR9LFxuXHQzIDoge1xuXHRcdG5hbWUgOiBcIlRyZWVcIixcblx0XHRzcHJpdGUgOiBbe3g6ODAseToxNjAsdzo4MCxoOjgwfV0sXG5cdFx0b2Zmc2V0IDogWy0yMCwtMjBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogM1xuICAgIH0sXG4gICAgNCA6IHtcblx0XHRuYW1lIDogXCJtYXNocm9vbXNcIixcblx0XHRzcHJpdGUgOiBbe3g6NDAseToxNjAsdzo0MCxoOjIwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5ub25lLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDUgOiB7XG5cdFx0bmFtZSA6IFwiUGlnIFNob3BcIixcblx0XHRzcHJpdGUgOiBbe3g6MTYwLHk6MTYwLHc6ODAsaDo4MH1dLFxuXHRcdG9mZnNldCA6IFstMjAsLTIwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDNcbiAgICB9LFxuICAgIDYgOiB7XG5cdFx0bmFtZSA6IFwiZG9udXRzXCIsXG5cdFx0c3ByaXRlIDogW3t4OjM2MCx5OjAsdzo4MCxoOjExNX1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMubm9uZSxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICA3IDoge1xuXHRcdG5hbWUgOiBcImNvb2tpbmdcIixcblx0XHRzcHJpdGUgOiBbe3g6MTYwLHk6ODAsdzo4MCxoOjgwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5ub25lLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDggOiB7XG5cdFx0bmFtZSA6IFwiY2FycGV0XCIsXG5cdFx0c3ByaXRlIDogW3t4OjAseTo4MCx3OjgwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLm5vbmUsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgOSA6IHtcblx0XHRuYW1lIDogXCJkZXNrXCIsXG5cdFx0c3ByaXRlIDogW3t4OjAseTo0MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDEwIDoge1xuXHRcdG5hbWUgOiBcImNoYWlyXCIsXG5cdFx0c3ByaXRlIDogW3t4OjMyMCx5OjAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxMSA6IHtcblx0XHRuYW1lIDogXCJUcmVlIFBsYW50XCIsXG5cdFx0c3ByaXRlIDogW3t4OjQwLHk6MTIwLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTIgOiB7XG5cdFx0bmFtZSA6IFwiZHJ1bVwiLFxuXHRcdHNwcml0ZSA6IFt7eDowLHk6MjQwLHc6ODAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTMgOiB7XG5cdFx0bmFtZSA6IFwiaW5zdHJ1bWVudHNcIixcblx0XHRzcHJpdGUgOiBbe3g6ODAseToyNDAsdzoxMjAsaDo4MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTQgOiB7XG5cdFx0bmFtZSA6IFwiQm9va1NoZWxmXCIsXG5cdFx0c3ByaXRlIDogW3t4OjIwMCx5OjI0MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDE1IDoge1xuXHRcdG5hbWUgOiBcInNheG9waG9uZVwiLFxuXHRcdHNwcml0ZSA6IFt7eDoyNDAseToyNDAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxNiA6IHtcblx0XHRuYW1lIDogXCJSaWdodCBGYWNpbmcgQ2hhaXJcIixcblx0XHRzcHJpdGUgOiBbe3g6MjAwLHk6MjgwLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG59O1xuXG5cbi8vIOeJqeWTgVxubGV0IGl0ZW1UeXBlcyA9IHtcbiAgICAxIDoge1xuXHRcdG5hbWUgOiBcImNvY29udXRcIixcblx0XHRtYXhTdGFjayA6IDUsXG5cdFx0c3ByaXRlIDogW3t4OjI0MCx5OjAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF1cbiAgICB9LFxuICAgIDIgOiB7XG5cdFx0bmFtZSA6IFwic3RyYXdiZXJyeVwiLFxuXHRcdG1heFN0YWNrIDogNSxcblx0XHRzcHJpdGUgOiBbe3g6MjgwLHk6MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXVxuXHR9XG59O1xuXG5cblxubGV0IGdhbWV0aWxlID0gbnVsbCwgZ2FtZXRpbGVVUkwgPSBcInNyYy9pbWFnZXMvdGlsZXNldGVzdHQucG5nXCIsIGFydExvYWRlZCA9IGZhbHNlO1xuXG5cblxuLy8g5Yib5bu65LiA5Liq6KeS6ImyIChtaXVtaXUpXG5sZXQgbWl1bWl1ID0gbmV3IE1pdU1pdSgpO1xuLy8g5Yqg5pu05aSa6KeS6Imy4qyHXG5mdW5jdGlvbiBNaXVNaXUoKSB7XG4gICAgdGhpcy50aWxlRnJvbVx0PSBbMSwxXTtcbiAgICAvLyBtaXVtaXXnmoTkvY3nva5cbiAgICB0aGlzLnRpbGVUb1x0XHQ9IFs5LDExXTtcbiAgICAvLyB0aW1lIGluIG1pbGxzZWNvbmRzXG4gICAgdGhpcy50aW1lTW92ZWRcdD0gMDtcbiAgICB0aGlzLmRlbGF5TW92ZVx0PSA3MDA7XG5cdHRoaXMuZGltZW5zaW9uc1x0PSBbNDAsNDBdO1xuICAgIHRoaXMucG9zaXRpb25cdD0gWzQ1LDQ1XTtcbiAgICBcbiAgICB0aGlzLmRpcmVjdGlvblx0PSBkaXJlY3Rpb25zLnVwO1xuXHR0aGlzLnNwcml0ZXMgPSB7fTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMudXBdXHRcdD0gW3t4OjAseToxMjAsdzozMCxoOjMwfV07XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLnJpZ2h0XVx0PSBbe3g6MCx5OjE1MCx3OjMwLGg6MzB9XTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMuZG93bl1cdD0gW3t4OjAseToxODAsdzozMCxoOjMwfV07XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLmxlZnRdXHQ9IFt7eDowLHk6MjEwLHc6MzAsaDozMH1dO1xufVxuXG5cbi8vIOaKiuinkuiJsuaUvuWcqOWcsOegluS4ilxuTWl1TWl1LnByb3RvdHlwZS5sb2NhdGlvbiA9IGZ1bmN0aW9uKHgsIHkpIHtcblx0dGhpcy50aWxlRnJvbVx0PSBbeCx5XTtcbiAgICB0aGlzLnRpbGVUb1x0XHQ9IFt4LHldO1xuICAgIC8vIHggYW5kIHkgcG9zaXRpb24gb2YgdGhlIHRpbGUuIHVwZGF0ZSB0aGUgdGlsZUZyb20gYW5kIHRpbGVUbyBwcm9wZXJ0aWVzIHRvIHRoZSBuZXcgdGlsZSBjb29yZGluYXRlc1xuICAgIC8vIGNhbGN1bGF0ZXMgdGhlIHBpeGVsIHBvc2l0aW9uIG9mIHRoZSBjaGFyYWN5ZXIgdXNlIGJlbG93XG5cdHRoaXMucG9zaXRpb25cdD0gWygoIHRpbGVXaWR0aCAqIHggKSsoICh0aWxlV2lkdGggLSB0aGlzLmRpbWVuc2lvbnNbMF0pIC8gMiApKSxcblx0XHQoKCB0aWxlSGVpZ2h0ICogeSApKyggKHRpbGVIZWlnaHQgLSB0aGlzLmRpbWVuc2lvbnNbMV0pIC8gMiApKV07XG59O1xuXG4vLyDmoLnmja7mr4/kuKrluKfmlbDmib7liLDop5LoibLkvY3nva5cbk1pdU1pdS5wcm90b3R5cGUucHJvY2Vzc01vdmVtZW50ID0gZnVuY3Rpb24odCkge1xuICAgIC8vIGlmIGNoYXIgdGlsZVRvID09IHRpbGVGcm9tIGNoYXIgaXMgbm90IG1vdmluZywgc28gcmV0dXJuIGZhbHNlXG5cdGlmKCB0aGlzLnRpbGVGcm9tWzBdID09IHRoaXMudGlsZVRvWzBdICYmIHRoaXMudGlsZUZyb21bMV0gPT0gdGhpcy50aWxlVG9bMV0pIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgLy8gaWYgdGhlIGFtb3VudCBvZiB0aW1lIHBhc3NlZCBzaW5jZSBjaGFyIGJlZ2FuIGl0cyBjdXJyZW50IG1vdmUgPj0gdGhlIHRpbWUgZm9yIGNoYXIgdG8gbW92ZSAxIHRpbGUuIHdlIHNldCBwb3NpdGlvbiB1c2luZyBsb2NhdGlvbiBmdW5jdGlvblxuICAgIC8vIGFrYTogaWYgY2hhciBzdGlsbCBtb3Zpbmdcblx0aWYoKHQgLSB0aGlzLnRpbWVNb3ZlZCkgPj0gdGhpcy5kZWxheU1vdmUpIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbih0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pO1xuICAgICAgICBpZihtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pXS5ldmVudEVudGVyICE9IG51bGwpIHtcblx0XHRcdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSldLmV2ZW50RW50ZXIodGhpcyk7XG4gICAgICAgIH1cblx0fSBlbHNlIHtcbiAgICAgICAgLy8gY3VycmVudCBwb3NpdGlvbiBvbiBjYW52YXNcblx0XHR0aGlzLnBvc2l0aW9uWzBdID0gKHRoaXMudGlsZUZyb21bMF0gKiB0aWxlV2lkdGgpICsgKCh0aWxlV2lkdGggLSB0aGlzLmRpbWVuc2lvbnNbMF0pIC8gMik7XG5cdFx0dGhpcy5wb3NpdGlvblsxXSA9ICh0aGlzLnRpbGVGcm9tWzFdICogdGlsZUhlaWdodCkgKyAoKHRpbGVIZWlnaHQgLSB0aGlzLmRpbWVuc2lvbnNbMV0pIC8gMik7XG5cbiAgICAgICAgLy8gaWYgY2hhciBpcyBtb3Zpbmcgb24geCBjb29yZGluYXRlLCBjYWxjdWxhdGUgcGl4ZWxzXG5cdFx0aWYodGhpcy50aWxlVG9bMF0gIT0gdGhpcy50aWxlRnJvbVswXSkge1xuICAgICAgICAgICAgLy8gZGlmZmVyZW5jZSA9IGRpc3RhbmNlIG1vdmVkXG4gICAgICAgICAgICAvLyDliqDlh4/np7vliqjnmoTlnLDnoJbliLDop5LoibLnmoTkvY3lrZBcblx0XHRcdGxldCBkaWZmZXJlbmNlID0gKHRpbGVXaWR0aCAvIHRoaXMuZGVsYXlNb3ZlKSAqICh0IC0gdGhpcy50aW1lTW92ZWQpO1xuXHRcdFx0dGhpcy5wb3NpdGlvblswXSs9ICh0aGlzLnRpbGVUb1swXSA8IHRoaXMudGlsZUZyb21bMF0gPyAwIC0gZGlmZmVyZW5jZSA6IGRpZmZlcmVuY2UpO1xuXHRcdH1cblx0ICAgIGlmKHRoaXMudGlsZVRvWzFdICE9IHRoaXMudGlsZUZyb21bMV0pIHtcblx0XHRcdGxldCBkaWZmZXJlbmNlID0gKHRpbGVIZWlnaHQgLyB0aGlzLmRlbGF5TW92ZSkgKiAodC10aGlzLnRpbWVNb3ZlZCk7XG5cdFx0XHR0aGlzLnBvc2l0aW9uWzFdKz0gKHRoaXMudGlsZVRvWzFdPHRoaXMudGlsZUZyb21bMV0gPyAwIC0gZGlmZmVyZW5jZSA6IGRpZmZlcmVuY2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJvdW5kIHggJiB5IHRvIHdob2xlIG51bWJlciDpnIDopoHmlbTmlbBcblx0XHR0aGlzLnBvc2l0aW9uWzBdID0gTWF0aC5yb3VuZCh0aGlzLnBvc2l0aW9uWzBdKTtcblx0XHR0aGlzLnBvc2l0aW9uWzFdID0gTWF0aC5yb3VuZCh0aGlzLnBvc2l0aW9uWzFdKTtcbiAgICB9XG4gICAgLy8gdHJ1ZSA9IGNoYXIgaXMgY3VycmVudGx5IG1vdmluZ1xuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuXG4vLyBpZiBjaGFyIGNhbiBtb3ZlIGluIGEgc3BlY2lmaWMgZGlyZWNcbk1pdU1pdS5wcm90b3R5cGUucGxhY2VzQ2FuR28gPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgLy8gaWYgeCBhbmQgeSBpcyBpbiBtYXAgYm91bmRcbiAgICBpZih4IDwgMCB8fCB4ID49IG1hcFdpZHRoIHx8IHkgPCAwIHx8IHkgPj0gbWFwSGVpZ2h0KSB7IHJldHVybiBmYWxzZTsgfVxuICAgIC8vIGlmIHRoZSB0aWxlIGlzIHBhdGggdGlsZSAob25seSBtb3ZlIGlmIGl0cyBhIHBhdGgpXG4gICAgICAgIGlmKHRpbGVUeXBlc1tnYW1lTWFwW3RvSW5kZXgoeCx5KV1dLmZsb29yICE9IGZsb29yVHlwZXMucGF0aCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgaWYobWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0ub2JqZWN0ICE9IG51bGwpIHtcblx0XHRsZXQgb2JqZWN0ID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0ub2JqZWN0O1xuXHRcdGlmKG9iamVjdFR5cGVzW29iamVjdC50eXBlXS5jb2xsaXNpb24gPT0gY29sbGlzaW9ucy5zb2xpZCkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5NaXVNaXUucHJvdG90eXBlLmNhbkdvVXAgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucGxhY2VzQ2FuR28odGhpcy50aWxlRnJvbVswXSwgdGhpcy50aWxlRnJvbVsxXSAtIDEpOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5jYW5Hb0Rvd24gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucGxhY2VzQ2FuR28odGhpcy50aWxlRnJvbVswXSwgdGhpcy50aWxlRnJvbVsxXSArIDEpOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5jYW5Hb0xlZnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucGxhY2VzQ2FuR28odGhpcy50aWxlRnJvbVswXS0xLCB0aGlzLnRpbGVGcm9tWzFdKTsgfTtcbk1pdU1pdS5wcm90b3R5cGUuY2FuR29SaWdodCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5wbGFjZXNDYW5Hbyh0aGlzLnRpbGVGcm9tWzBdKzEsIHRoaXMudGlsZUZyb21bMV0pOyB9O1xuXG5NaXVNaXUucHJvdG90eXBlLmdvTGVmdCA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMF0tPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5sZWZ0OyB9O1xuTWl1TWl1LnByb3RvdHlwZS5nb1JpZ2h0ID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1swXSs9IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLnJpZ2h0OyB9O1xuTWl1TWl1LnByb3RvdHlwZS5nb1VwID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1sxXS09IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLnVwOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5nb0Rvd24gPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzFdKz0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMuZG93bjsgfTtcblxuXG5cbi8vIGNyZWF0ZSBhIGNhbWVyYSBvYmplY3RcbmxldCBjYW1lcmEgPSB7XG4gICAgc2NyZWVuOiBbMCwwXSxcbiAgICAvLyDnlLvpnaLlt6bkuIrop5JcbiAgICBzdGFydGluZ1BvaW50OiBbMCwwXSxcbiAgICAvLyDnlLvpnaLlj7PkuIvop5JcbiAgICBlbmRpbmdQb2ludDogWzAsMF0sXG4gICAgLy8g6K+v5beuXG4gICAgb2Zmc2V0OiBbMCwwXSxcbiAgICAvLyB1cGRhdGUgZnVuY3Rpb24sIHggeSBpcyBvdXIgY2VudGVyIGFyZWFcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKG9mZnNldFgsIG9mZnNldFkpIHtcbiAgICAgICAgLy8gb2Zmc2V0OiBoYWxmIHRoZSBjYW52YXMgd2lkdGggfHwgaGVpZ2h0IChyb3VuZCBkb3duIHRvIHdob2xlIG51bSlcblx0XHR0aGlzLm9mZnNldFswXSA9IE1hdGguZmxvb3IoKHRoaXMuc2NyZWVuWzBdLzIpIC0gb2Zmc2V0WCk7XG4gICAgICAgIHRoaXMub2Zmc2V0WzFdID0gTWF0aC5mbG9vcigodGhpcy5zY3JlZW5bMV0vMikgLSBvZmZzZXRZKTtcblxuICAgICAgICAvLyDlnLDnoJblnKjlnLDlm77kuIrnmoTkvY3nva5cbiAgICAgICAgbGV0IHRpbGUgPSBbIE1hdGguZmxvb3Iob2Zmc2V0WCAvIHRpbGVXaWR0aCksIE1hdGguZmxvb3Iob2Zmc2V0WSAvIHRpbGVIZWlnaHQpIF07XG4gICAgICAgIC8vICDorqHnrpfnrKzkuIDkuKrlnLDnoJbkvY3nva7lnKh457q/5LiK77yaIOacgOWkp+WcsOegluaVsOmHjyAtIOWxj+W5leeahOS4gOWNilxuICAgICAgICAvLyAg5aSa5YeP5Y67Mei/meagt+WcsOegluWPr+S7pXNob3fkuIDljYrlnKjlsY/luZXkuIpcbiAgICAgICAgdGhpcy5zdGFydGluZ1BvaW50WzBdID0gdGlsZVswXSAtIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMF0vMikgLyB0aWxlV2lkdGgpICAtIDE7XG5cdFx0dGhpcy5zdGFydGluZ1BvaW50WzFdID0gdGlsZVsxXSAtIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMV0vMikgLyB0aWxlSGVpZ2h0KSAgLSAxO1xuXG4gICAgICAgIC8vIOehruS/nXjlkox56YO95aSn5LqOMOimgeS5iOS8muWcqOWcsOWbvuWkllxuICAgICAgICBpZih0aGlzLnN0YXJ0aW5nUG9pbnRbMF0gPD0gLTEpIHsgdGhpcy5zdGFydGluZ1BvaW50WzBdID0gMDsgfVxuXHRcdGlmKHRoaXMuc3RhcnRpbmdQb2ludFsxXSA8PSAtMSkgeyB0aGlzLnN0YXJ0aW5nUG9pbnRbMV0gPSAwOyB9XG5cbiAgICAgICAgdGhpcy5lbmRpbmdQb2ludFswXSA9IHRpbGVbMF0gKyAxICsgTWF0aC5jZWlsKCh0aGlzLnNjcmVlblswXS8yKSAvIHRpbGVXaWR0aCk7XG5cdFx0dGhpcy5lbmRpbmdQb2ludFsxXSA9IHRpbGVbMV0gKyAxICsgTWF0aC5jZWlsKCh0aGlzLnNjcmVlblsxXS8yKSAvIHRpbGVIZWlnaHQpO1xuXG5cdFx0aWYodGhpcy5lbmRpbmdQb2ludFswXSA+PSBtYXBXaWR0aCkgeyB0aGlzLmVuZGluZ1BvaW50WzBdID0gbWFwV2lkdGggLTE7IH1cblx0XHRpZih0aGlzLmVuZGluZ1BvaW50WzFdID49IG1hcEhlaWdodCkgeyB0aGlzLmVuZGluZ1BvaW50WzFdID0gbWFwSGVpZ2h0IC0gMTsgfVxuICAgICAgICB9XG59O1xuXG5cbi8vIGJ1aWxkaW5nc1xuXG5sZXQgbWFwVGlsZURhdGEgPSBuZXcgVGlsZU1hcCgpO1xuXG5sZXQgYnVpbGRpbmdzTG9jYXRpb24gPSBbXG5cdHsgeDo1LCB5OjAsIHc6NCwgaDo1LCBkYXRhOiBbXG5cdFx0MTAsIDExLCAxMSwgMTIsXG4gICAgICAgIDEzLCAxNCwgMTQsIDE1LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTgsXG4gICAgICAgIDE2LCAxNywgMTYsIDE4XG5cdF19LFxuXHR7IHg6MTAsIHk6MCwgdzo3LCBoOjUsIGRhdGE6IFtcblx0XHQxMCwgMTEsIDExLCAxMSwgMTEsIDEyLCAxMixcbiAgICAgICAgMTMsIDE1LCAxMywgMTQsIDE0LCAxNSwgMTUsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE5LCAxOSwgMTgsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOSwgMTksIDE4LCAxOCxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTksIDE3LCAxOCwgMThcblx0XX0sXG5cdHsgeDo4LCB5OjgsIHc6NCwgaDo0LCBkYXRhOiBbXG4gICAgICAgIDEwLCAxMSwgMTEsIDEyLFxuICAgICAgICAxMywgMTQsIDE0LCAxNSxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTgsXG4gICAgICAgIDE2LCAxNywgMTYsIDE4XG5cdF19XG5dO1xuXG4vLyBzdG9yZXMgaW5mb3JtYXRpb24gZm9yIGVhY2ggbWFwIHRpbGVcbmZ1bmN0aW9uIFRpbGUodGlsZVgsIHRpbGVZLCB0aWxlVHlwZSlcbntcbiAgICAvLyB0aWxlWSwgdGlsZVggPSB0aGUgcG9zaXRpb24gb2YgdGhlIHRpbGUgb24gdGhlIG1hcFxuXHR0aGlzLnhcdFx0XHQ9IHRpbGVYO1xuXHR0aGlzLnlcdFx0XHQ9IHRpbGVZO1xuXHR0aGlzLnR5cGVcdFx0PSB0aWxlVHlwZTtcblx0dGhpcy5idWlsZGluZ1x0XHQ9IG51bGw7XG4gICAgdGhpcy5idWlsZGluZ1R5cGVcdD0gMDtcbiAgICAvLyAgcG9pbnRlciB0byBhIGZ1bmN0aW9uIHRvIGV4ZWN1dGUgd2hlbiBhIE1pdU1pdSBoYXMgY29tcGxldGVkIG1vdmluZyBvbiB0byB0aGlzIHRpbGVcbiAgICB0aGlzLmV2ZW50RW50ZXJcdD0gbnVsbDtcbiAgICB0aGlzLm9iamVjdFx0XHQ9IG51bGw7XG5cbn1cblxuLy8g5YKo5a2Y566h55CG5Zyw5Zu+5pWw5o2uXG5mdW5jdGlvbiBUaWxlTWFwKCkge1xuXHR0aGlzLm1hcFx0PSBbXTtcblx0dGhpcy53XHRcdD0gMDtcbiAgICB0aGlzLmhcdFx0PSAwO1xuXHR0aGlzLmxldmVsc1x0PSA0O1xufVxuXG5UaWxlTWFwLnByb3RvdHlwZS5idWlsZE1hcEZyb21EYXRhID0gZnVuY3Rpb24odGlsZUlkLCB3LCBoKSB7XG5cdHRoaXMud1x0XHQ9IHc7XG4gICAgdGhpcy5oXHRcdD0gaDtcblxuICAgIGlmKHRpbGVJZC5sZW5ndGghPSh3ICogaCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFxuICAgIHRoaXMubWFwLmxlbmd0aFx0PSAwO1xuICAgIFx0Zm9yKGxldCB5ID0gMDsgeSA8IGg7IHkrKykge1xuXHRcdCAgICBmb3IobGV0IHggPSAwOyB4IDwgdzsgeCsrKSB7XG5cdFx0XHR0aGlzLm1hcC5wdXNoKCBuZXcgVGlsZSh4LCB5LCB0aWxlSWRbICh4ICsgKHcgKiB5KSldKSApO1xuXHRcdH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5cblRpbGVNYXAucHJvdG90eXBlLmFkZEJ1aWxkaW5ncyA9IGZ1bmN0aW9uKGJ1aWxkaW5ncykge1xuXHRmb3IobGV0IGkgaW4gYnVpbGRpbmdzKSB7XG4gICAgICAgIGxldCBidWlsZGluZyA9IGJ1aWxkaW5nc1tpXTtcbiAgICAgICAgaWYoYnVpbGRpbmcueCA8IDAgfHwgYnVpbGRpbmcueSA8IDAgfHwgYnVpbGRpbmcueCA+PSB0aGlzLncgfHwgYnVpbGRpbmcueSA+PSB0aGlzLmggfHxcdChidWlsZGluZy54K2J1aWxkaW5nLncpPnRoaXMudyB8fCAoYnVpbGRpbmcueStidWlsZGluZy5oKT50aGlzLmggfHwgYnVpbGRpbmcuZGF0YS5sZW5ndGghPShidWlsZGluZy53KmJ1aWxkaW5nLmgpKSB7XG5cdFx0XHRjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IHkgPSAwOyB5IDwgYnVpbGRpbmcuaDsgeSsrKSB7XG5cdFx0XHRmb3IobGV0IHggPSAwOyB4IDwgYnVpbGRpbmcudzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGVJZHggPSAoKChidWlsZGluZy55ICsgeSkgKiB0aGlzLncpICsgYnVpbGRpbmcueCArIHgpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFwW3RpbGVJZHhdLmJ1aWxkaW5nID0gYnVpbGRpbmc7XG5cdFx0XHRcdHRoaXMubWFwW3RpbGVJZHhdLmJ1aWxkaW5nVHlwZSA9IGJ1aWxkaW5nLmRhdGFbKCAoeSAqIGJ1aWxkaW5nLncpICsgeCldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLy8g54mp5ZOB5pGG5pS+XG5mdW5jdGlvbiBHYW1lT2JqZWN0cyhudCkge1xuXHR0aGlzLnhcdFx0PSAwO1xuXHR0aGlzLnlcdFx0PSAwO1xuXHR0aGlzLnR5cGVcdD0gbnQ7XG59XG5cbkdhbWVPYmplY3RzLnByb3RvdHlwZS5wbGFjZUF0ID0gZnVuY3Rpb24obngsIG55KSB7XG5cdGlmKG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMueCwgdGhpcy55KV0ub2JqZWN0ID09IHRoaXMpIHtcblx0XHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLngsIHRoaXMueSldLm9iamVjdCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMueCA9IG54O1xuXHR0aGlzLnkgPSBueTtcblx0XG5cdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KG54LCBueSldLm9iamVjdCA9IHRoaXM7XG59O1xuXG5cblxuLy8gY29udmVydCB4LCB5IGludG8gaW5kZXggaW4gZ2FtZU1hcCBhcnJcbmZ1bmN0aW9uIHRvSW5kZXgoeCwgeSkge1xuXHRyZXR1cm4oeCArIChtYXBXaWR0aCAqIHkpKTtcbn1cblxuZnVuY3Rpb24gZ2V0RnJhbWUoc3ByaXRlLCB0aW1lTGFzdCwgdGltZSwgYW5pbWF0aW9uKSB7XG5cdGlmKCFhbmltYXRpb24pIHsgcmV0dXJuIHNwcml0ZVswXTsgfVxuXHR0aW1lID0gdGltZSAlIHRpbWVMYXN0O1xuXG5cdGZvcih4IGluIHNwcml0ZSkge1xuXHRcdGlmKHNwcml0ZVt4XS5lbmQ+PXRpbWUpIHsgcmV0dXJuIHNwcml0ZVt4XTsgfVxuXHR9XG59XG5cbi8vIOeVjOmdomxvYWTlrozvvIzlvIDlp4tsb29wXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWl1bWl1VGFsZVwiKS5nZXRDb250ZXh0KFwiMmRcIik7XG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7XG4gICAgXG4gICAgLy8gYWRkIGV2ZW50TGlzdGVuZXJzIGZvciB0aGUga2V5ZG93bmEgYW5kIGtleXVwXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoZS5rZXlDb2RlID49IDM3ICYmIGUua2V5Q29kZSA8PTQwICkgeyBoZWxkS2V5c1tlLmtleUNvZGVdID0gdHJ1ZTsgfVxuXHR9KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoZS5rZXlDb2RlID49IDM3ICYmIGUua2V5Q29kZSA8PSA0MCkgeyBoZWxkS2V5c1tlLmtleUNvZGVdID0gZmFsc2U7IH1cbiAgICB9KTtcblxuICAgIC8vIGNhbnZhc+WwuuWvuCDkv53lrZjliLAg55u45py6XG4gICAgY2FtZXJhLnNjcmVlbiA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pdW1pdVRhbGVcIikud2lkdGgsXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWl1bWl1VGFsZVwiKS5oZWlnaHRdO1xuICAgICAgICBcbiAgICBnYW1ldGlsZSA9IG5ldyBJbWFnZSgpO1xuXHRnYW1ldGlsZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG5cdFx0Y3R4ID0gbnVsbDtcblx0XHRhbGVydChcIkZhaWxlZCBsb2FkaW5nIGdhbWV0aWxlLlwiKTtcblx0fTtcblx0Z2FtZXRpbGUub25sb2FkID0gZnVuY3Rpb24oKSB7IGFydExvYWRlZCA9IHRydWU7IH07XG4gICAgZ2FtZXRpbGUuc3JjID0gZ2FtZXRpbGVVUkw7XG4gICAgXG4gICAgbWFwVGlsZURhdGEuYnVpbGRNYXBGcm9tRGF0YShnYW1lTWFwLCBtYXBXaWR0aCwgbWFwSGVpZ2h0KTtcblx0bWFwVGlsZURhdGEuYWRkQnVpbGRpbmdzKGJ1aWxkaW5nc0xvY2F0aW9uKTtcblx0bWFwVGlsZURhdGEubWFwWygoMiAqIG1hcFdpZHRoKSArIDIpXS5ldmVudEVudGVyID0gZnVuY3Rpb24oKSB7IGNvbnNvbGUubG9nKFwiRW50ZXJlZCB0aWxlIDIsMlwiKTsgfTtcbiAgICBcblx0bGV0IGZlbmNlMSA9IG5ldyBHYW1lT2JqZWN0cygyKTsgZmVuY2UxLnBsYWNlQXQoOSwgMSk7XG4gICAgXG4gICAgbGV0IGZsb3dlcjEgPSBuZXcgR2FtZU9iamVjdHMoMSk7IGZsb3dlcjEucGxhY2VBdCg1LCA1KTtcbiAgICBsZXQgZmxvd2VyMiA9IG5ldyBHYW1lT2JqZWN0cygxKTsgZmxvd2VyMi5wbGFjZUF0KDcsIDUpO1xuICAgIGxldCBmbG93ZXIzID0gbmV3IEdhbWVPYmplY3RzKDEpOyBmbG93ZXIzLnBsYWNlQXQoOCwgNSk7XG4gICAgXG5cdGxldCB0cmVlMSA9IG5ldyBHYW1lT2JqZWN0cygzKTsgdHJlZTEucGxhY2VBdCg0LCA2KTtcblx0bGV0IHRyZWUyID0gbmV3IEdhbWVPYmplY3RzKDMpOyB0cmVlMi5wbGFjZUF0KDksIDYpO1xuXHRsZXQgdHJlZTMgPSBuZXcgR2FtZU9iamVjdHMoMyk7IHRyZWUzLnBsYWNlQXQoNywgNik7XHRcbiAgICBsZXQgdHJlZTQgPSBuZXcgR2FtZU9iamVjdHMoMyk7IHRyZWU0LnBsYWNlQXQoMTIsIDYpO1xuICAgIFxuICAgIGxldCBtYXNocm9vbTEgPSBuZXcgR2FtZU9iamVjdHMoNCk7IG1hc2hyb29tMS5wbGFjZUF0KDIsNCk7XG4gICAgbGV0IG1hc2hyb29tMiA9IG5ldyBHYW1lT2JqZWN0cyg0KTsgbWFzaHJvb20yLnBsYWNlQXQoOSwyKTtcbiAgICBcblxuICAgIGxldCBwaWdTaG9wMSA9IG5ldyBHYW1lT2JqZWN0cyg1KTsgcGlnU2hvcDEucGxhY2VBdCgzLCA0KTtcblxuICAgIGxldCBkb251dHMgPSBuZXcgR2FtZU9iamVjdHMoNik7IGRvbnV0cy5wbGFjZUF0KDUsIDApO1xuXG4gICAgbGV0IGNvb2tpbmcgPSBuZXcgR2FtZU9iamVjdHMoNyk7IGNvb2tpbmcucGxhY2VBdCg3LCAwKTtcblxuICAgIGxldCBjYXJwZXQgPSBuZXcgR2FtZU9iamVjdHMoOCk7IGNhcnBldC5wbGFjZUF0KDcsMik7XG5cbiAgICBsZXQgZGVzayA9IG5ldyBHYW1lT2JqZWN0cyg5KTsgZGVzay5wbGFjZUF0KDgsMyk7XG5cbiAgICBsZXQgY2hhaXIgPSBuZXcgR2FtZU9iamVjdHMoMTApOyBjaGFpci5wbGFjZUF0KDgsMik7XG4gICAgbGV0IGNoYWlyMiA9IG5ldyBHYW1lT2JqZWN0cygxNik7IGNoYWlyMi5wbGFjZUF0KDEyLDIpO1xuXG4gICAgbGV0IHRyZWVQbGFudCA9IG5ldyBHYW1lT2JqZWN0cygxMSk7IHRyZWVQbGFudC5wbGFjZUF0KDUsMyk7XG5cbiAgICBsZXQgZHJ1bSA9IG5ldyBHYW1lT2JqZWN0cygxMik7IGRydW0ucGxhY2VBdCgxNSwxKTtcblxuICAgIGxldCBpbnN0cnVtZW50cyA9IG5ldyBHYW1lT2JqZWN0cygxMyk7IGluc3RydW1lbnRzLnBsYWNlQXQoMTIsMCk7XG5cbiAgICBsZXQgYm9va1NoZWxmMSA9IG5ldyBHYW1lT2JqZWN0cygxNCk7IGJvb2tTaGVsZjEucGxhY2VBdCgxMCwxKTtcbiAgICBsZXQgYm9va1NoZWxmMiA9IG5ldyBHYW1lT2JqZWN0cygxNCk7IGJvb2tTaGVsZjIucGxhY2VBdCgxMCwyKTtcblxuICAgIGxldCBzYXhvcGhvbmUgPSBuZXcgR2FtZU9iamVjdHMoMTUpOyBzYXhvcGhvbmUucGxhY2VBdCgxMywyKTtcblxufTtcblxuXG5cbi8vIG1haW4gZnVuY3Rpb25cbmZ1bmN0aW9uIGRyYXdHYW1lKCkge1xuICAgIGlmIChjdHggPT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICBpZiAoIWFydExvYWRlZCkgeyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpOyByZXR1cm47IH1cblxuXHRsZXQgY3VycmVudEZyYW1lVGltZSA9IERhdGUubm93KCk7XG4gICAgLy8gZnJhbWVjb3VudCBcblx0bGV0IHNlYyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuXHRpZihzZWMgIT0gY3VycmVudFNlY29uZCl7XG5cdFx0Y3VycmVudFNlY29uZCA9IHNlYztcblx0XHRmcmFtZXNMYXN0U2Vjb25kID0gZnJhbWVDb3VudDtcblx0XHRmcmFtZUNvdW50ID0gMTtcblx0fSBlbHNlIHsgXG4gICAgICAgIGZyYW1lQ291bnQrKzsgXG4gICAgfVxuXG4gICAgLy8gbWl1bWl1IG1vdmVtZW50XG5cdGlmKCFtaXVtaXUucHJvY2Vzc01vdmVtZW50KGN1cnJlbnRGcmFtZVRpbWUpKSB7XG5cdFx0aWYoaGVsZEtleXNbMzhdICYmIG1pdW1pdS5jYW5Hb1VwKCkpeyBcbiAgICAgICAgICAgIG1pdW1pdS5nb1VwKGN1cnJlbnRGcmFtZVRpbWUpOyBcbiAgICAgICAgfSBlbHNlIGlmIChoZWxkS2V5c1s0MF0gJiYgbWl1bWl1LmNhbkdvRG93bigpKSB7IFxuICAgICAgICAgICAgbWl1bWl1LmdvRG93bihjdXJyZW50RnJhbWVUaW1lKTsgXG4gICAgICAgIH0gZWxzZSBpZihoZWxkS2V5c1szN10gJiYgbWl1bWl1LmNhbkdvTGVmdCgpKSB7IFxuICAgICAgICAgICAgbWl1bWl1LmdvTGVmdChjdXJyZW50RnJhbWVUaW1lKTsgXG4gICAgICAgIH0gZWxzZSBpZihoZWxkS2V5c1szOV0gJiYgbWl1bWl1LmNhbkdvUmlnaHQoKSkgeyBcbiAgICAgICAgICAgIG1pdW1pdS5nb1JpZ2h0KGN1cnJlbnRGcmFtZVRpbWUpOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNhbWVyYei3n+edgG1pdW1pdei1sFxuICAgICAgICBjYW1lcmEudXBkYXRlKG1pdW1pdS5wb3NpdGlvblswXSArIChtaXVtaXUuZGltZW5zaW9uc1swXSAvIDIpLFxuICAgICAgICAgICAgbWl1bWl1LnBvc2l0aW9uWzFdICsgKG1pdW1pdS5kaW1lbnNpb25zWzFdIC8gMikpO1xuXG5cdCAgICBsZXQgbWl1bWl1QnVpbGRpbmcxID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoXG5cdFx0bWl1bWl1LnRpbGVGcm9tWzBdLCBtaXVtaXUudGlsZUZyb21bMV0pXS5idWlsZGluZztcblx0ICAgIGxldCBtaXVtaXVCdWlsZGluZzIgPSBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleChcblx0XHRtaXVtaXUudGlsZVRvWzBdLCBtaXVtaXUudGlsZVRvWzFdKV0uYnVpbGRpbmc7XG5cbiAgICAgICAgLy8g5riF6ZmkbGFzdCBmcmFtZVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW1lcmEuc2NyZWVuWzBdLCBjYW1lcmEuc2NyZWVuWzFdKTtcbiAgICBcblxuICAgIGZvcihsZXQgeiA9IDA7IHogPCBtYXBUaWxlRGF0YS5sZXZlbHM7IHorKykge1xuXHRcdGZvcihsZXQgeSA9IGNhbWVyYS5zdGFydGluZ1BvaW50WzFdOyB5IDw9IGNhbWVyYS5lbmRpbmdQb2ludFsxXTsgKyt5KSB7XG5cdFx0ICAgIGZvcihsZXQgeCA9IGNhbWVyYS5zdGFydGluZ1BvaW50WzBdOyB4IDw9IGNhbWVyYS5lbmRpbmdQb2ludFswXTsgKyt4KSB7XG4gICAgICAgICAgICAgICAgaWYoej09MCkge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gdGlsZVR5cGVzW21hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLnR5cGVdO1xuXG5cdFx0XHQgICAgY3R4LmRyYXdJbWFnZShnYW1ldGlsZSxcblx0XHRcdFx0dGlsZS5zcHJpdGVbMF0ueCwgdGlsZS5zcHJpdGVbMF0ueSwgdGlsZS5zcHJpdGVbMF0udywgdGlsZS5zcHJpdGVbMF0uaCxcblx0XHRcdFx0Y2FtZXJhLm9mZnNldFswXSArICh4ICogdGlsZVdpZHRoKSwgY2FtZXJhLm9mZnNldFsxXSArICh5ICogdGlsZUhlaWdodCksXG4gICAgICAgICAgICAgICAgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgb2JqZWN0ID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0ub2JqZWN0O1xuXHRcdFx0aWYob2JqZWN0ICE9IG51bGwgJiYgb2JqZWN0VHlwZXNbb2JqZWN0LnR5cGVdLnpJbmRleCA9PSB6KSB7XG5cdFx0XHRcdGxldCBvYmplY3RUeXBlID0gb2JqZWN0VHlwZXNbb2JqZWN0LnR5cGVdO1xuXHRcdFx0XHQgXG5cdFx0XHRcdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsXG5cdFx0XHRcdFx0b2JqZWN0VHlwZS5zcHJpdGVbMF0ueCwgb2JqZWN0VHlwZS5zcHJpdGVbMF0ueSxcblx0XHRcdFx0XHRvYmplY3RUeXBlLnNwcml0ZVswXS53LCBvYmplY3RUeXBlLnNwcml0ZVswXS5oLFxuXHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCkgKyBvYmplY3RUeXBlLm9mZnNldFswXSxcblx0XHRcdFx0XHRjYW1lcmEub2Zmc2V0WzFdICsgKHkgKiB0aWxlSGVpZ2h0KSArIG9iamVjdFR5cGUub2Zmc2V0WzFdLFxuXHRcdFx0XHRcdG9iamVjdFR5cGUuc3ByaXRlWzBdLncsIG9iamVjdFR5cGUuc3ByaXRlWzBdLmgpO1xuXHRcdFx0fVxuXG4gICAgICAgICAgICAgICBpZih6ID09IDIgJiYgbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmdUeXBlIT0wICYmIG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLmJ1aWxkaW5nIT1taXVtaXVCdWlsZGluZzEgJiYgbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmchPW1pdW1pdUJ1aWxkaW5nMikge1xuICAgICAgICAgICAgICAgICAgICB0aWxlID0gdGlsZVR5cGVzW21hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLmJ1aWxkaW5nVHlwZV07XG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZSA9IGdldEZyYW1lKHRpbGUuc3ByaXRlLCB0aWxlLnNwcml0ZXRpbWVMYXN0LCB0aWxlLmFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsIHNwcml0ZS54LCBzcHJpdGUueSwgc3ByaXRlLncsIHNwcml0ZS5oLCBjYW1lcmEub2Zmc2V0WzBdICsgKHggKiB0aWxlV2lkdGgpLCBjYW1lcmEub2Zmc2V0WzFdICsgKHkgKiB0aWxlSGVpZ2h0KSwgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KTtcblx0XHRcdH1cblx0XHR9XG4gICAgfVxuXG4gICAgaWYgKHogPT0gMSkge1xuXHRcdFx0bGV0IHNwcml0ZSA9IG1pdW1pdS5zcHJpdGVzW21pdW1pdS5kaXJlY3Rpb25dO1xuXHRcdFx0Y3R4LmRyYXdJbWFnZShnYW1ldGlsZSxcblx0XHRcdFx0c3ByaXRlWzBdLngsIHNwcml0ZVswXS55LFxuXHRcdFx0XHRzcHJpdGVbMF0udywgc3ByaXRlWzBdLmgsXG5cdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyBtaXVtaXUucG9zaXRpb25bMF0sXG5cdFx0XHRcdGNhbWVyYS5vZmZzZXRbMV0gKyBtaXVtaXUucG9zaXRpb25bMV0sXG5cdFx0XHRcdG1pdW1pdS5kaW1lbnNpb25zWzBdLCBtaXVtaXUuZGltZW5zaW9uc1sxXSk7XG5cdFx0fVxuXHR9XG4gICAgXG4gICAgLy8gZHJhdyB0aGUgbWl1bWl1XG4gICAgbGV0IHNwcml0ZSA9IG1pdW1pdS5zcHJpdGVzW21pdW1pdS5kaXJlY3Rpb25dO1xuXHRjdHguZHJhd0ltYWdlKGdhbWV0aWxlLCBzcHJpdGVbMF0ueCwgc3ByaXRlWzBdLnksIHNwcml0ZVswXS53LCBzcHJpdGVbMF0uaCwgY2FtZXJhLm9mZnNldFswXSArIG1pdW1pdS5wb3NpdGlvblswXSwgY2FtZXJhLm9mZnNldFsxXSArIG1pdW1pdS5wb3NpdGlvblsxXSwgbWl1bWl1LmRpbWVuc2lvbnNbMF0sIG1pdW1pdS5kaW1lbnNpb25zWzFdKTtcblxuXHRsYXN0RnJhbWVUaW1lID0gY3VycmVudEZyYW1lVGltZTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=