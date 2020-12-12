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

var gameMap = [0, 0, 0, 0, 0, 6, 5, 5, 7, 0, 26, 25, 25, 25, 25, 25, 27, 0, 0, 0, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 29, 28, 28, 28, 28, 28, 30, 2, 2, 0, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 29, 28, 28, 28, 28, 28, 30, 2, 2, 0, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 29, 28, 28, 28, 28, 28, 30, 2, 2, 0, 0, 1, 1, 1, 1, 16, 20, 16, 18, 1, 16, 18, 16, 19, 28, 18, 18, 2, 2, 0, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 5, 2, 2, 5, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 5, 2, 2, 5, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 5, 2, 5, 5, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]; // 每个地砖多少pixel

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

  this.tileTo = [12, 3]; // time in millseconds

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJoZWxkS2V5cyIsImRpcmVjdGlvbnMiLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJmbG9vclR5cGVzIiwic29saWQiLCJwYXRoIiwib2NlYW4iLCJ0aWxlVHlwZXMiLCJjb2xvciIsImZsb29yIiwic3ByaXRlIiwieCIsInkiLCJ3IiwiaCIsImNvbGxpc2lvbnMiLCJub25lIiwib2JqZWN0VHlwZXMiLCJuYW1lIiwib2Zmc2V0IiwiY29sbGlzaW9uIiwiekluZGV4IiwiaXRlbVR5cGVzIiwibWF4U3RhY2siLCJnYW1ldGlsZSIsImdhbWV0aWxlVVJMIiwiYXJ0TG9hZGVkIiwibWl1bWl1IiwiTWl1TWl1IiwidGlsZUZyb20iLCJ0aWxlVG8iLCJ0aW1lTW92ZWQiLCJkZWxheU1vdmUiLCJkaW1lbnNpb25zIiwicG9zaXRpb24iLCJkaXJlY3Rpb24iLCJzcHJpdGVzIiwicHJvdG90eXBlIiwibG9jYXRpb24iLCJwcm9jZXNzTW92ZW1lbnQiLCJ0IiwibWFwVGlsZURhdGEiLCJtYXAiLCJ0b0luZGV4IiwiZXZlbnRFbnRlciIsImRpZmZlcmVuY2UiLCJNYXRoIiwicm91bmQiLCJwbGFjZXNDYW5HbyIsIm9iamVjdCIsInR5cGUiLCJjYW5Hb1VwIiwiY2FuR29Eb3duIiwiY2FuR29MZWZ0IiwiY2FuR29SaWdodCIsImdvTGVmdCIsImdvUmlnaHQiLCJnb1VwIiwiZ29Eb3duIiwiY2FtZXJhIiwic2NyZWVuIiwic3RhcnRpbmdQb2ludCIsImVuZGluZ1BvaW50IiwidXBkYXRlIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0aWxlIiwiY2VpbCIsIlRpbGVNYXAiLCJidWlsZGluZ3NMb2NhdGlvbiIsImRhdGEiLCJUaWxlIiwidGlsZVgiLCJ0aWxlWSIsInRpbGVUeXBlIiwiYnVpbGRpbmciLCJidWlsZGluZ1R5cGUiLCJsZXZlbHMiLCJidWlsZE1hcEZyb21EYXRhIiwidGlsZUlkIiwibGVuZ3RoIiwicHVzaCIsImFkZEJ1aWxkaW5ncyIsImJ1aWxkaW5ncyIsImkiLCJ0aWxlSWR4IiwiR2FtZU9iamVjdHMiLCJudCIsInBsYWNlQXQiLCJueCIsIm55IiwiZ2V0RnJhbWUiLCJ0aW1lTGFzdCIsInRpbWUiLCJhbmltYXRpb24iLCJlbmQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXdHYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIiwid2lkdGgiLCJoZWlnaHQiLCJJbWFnZSIsIm9uZXJyb3IiLCJhbGVydCIsInNyYyIsImNvbnNvbGUiLCJsb2ciLCJmZW5jZTEiLCJmbG93ZXIxIiwiZmxvd2VyMiIsImZsb3dlcjMiLCJ0cmVlMSIsInRyZWUyIiwidHJlZTMiLCJ0cmVlNCIsIm1hc2hyb29tMSIsIm1hc2hyb29tMiIsInBpZ1Nob3AxIiwiZG9udXRzIiwiY29va2luZyIsImNhcnBldCIsImRlc2siLCJjaGFpciIsImNoYWlyMiIsInRyZWVQbGFudCIsImRydW0iLCJpbnN0cnVtZW50cyIsImJvb2tTaGVsZjEiLCJib29rU2hlbGYyIiwic2F4b3Bob25lIiwiY3VycmVudEZyYW1lVGltZSIsIkRhdGUiLCJub3ciLCJzZWMiLCJtaXVtaXVCdWlsZGluZzEiLCJtaXVtaXVCdWlsZGluZzIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInoiLCJkcmF3SW1hZ2UiLCJvYmplY3RUeXBlIiwic3ByaXRldGltZUxhc3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUdBLElBQUlBLEdBQUcsR0FBRyxJQUFWLEMsQ0FFQTs7QUFDQSxJQUFJQyxPQUFPLEdBQUcsQ0FDYixDQURhLEVBQ1YsQ0FEVSxFQUNQLENBRE8sRUFDSixDQURJLEVBQ0QsQ0FEQyxFQUNFLENBREYsRUFDSyxDQURMLEVBQ1EsQ0FEUixFQUNXLENBRFgsRUFDYyxDQURkLEVBQ2lCLEVBRGpCLEVBQ3FCLEVBRHJCLEVBQ3lCLEVBRHpCLEVBQzZCLEVBRDdCLEVBQ2lDLEVBRGpDLEVBQ3FDLEVBRHJDLEVBQ3lDLEVBRHpDLEVBQzZDLENBRDdDLEVBQ2dELENBRGhELEVBQ21ELENBRG5ELEVBRWIsQ0FGYSxFQUVWLENBRlUsRUFFUCxDQUZPLEVBRUosQ0FGSSxFQUVELENBRkMsRUFFRSxFQUZGLEVBRU0sRUFGTixFQUVVLEVBRlYsRUFFYyxFQUZkLEVBRWtCLENBRmxCLEVBRXFCLEVBRnJCLEVBRXlCLEVBRnpCLEVBRTZCLEVBRjdCLEVBRWlDLEVBRmpDLEVBRXFDLEVBRnJDLEVBRXlDLEVBRnpDLEVBRTZDLEVBRjdDLEVBRWlELENBRmpELEVBRW9ELENBRnBELEVBRXVELENBRnZELEVBR2IsQ0FIYSxFQUdWLENBSFUsRUFHUCxDQUhPLEVBR0osQ0FISSxFQUdELENBSEMsRUFHRSxFQUhGLEVBR00sRUFITixFQUdVLEVBSFYsRUFHYyxFQUhkLEVBR2tCLENBSGxCLEVBR3FCLEVBSHJCLEVBR3lCLEVBSHpCLEVBRzZCLEVBSDdCLEVBR2lDLEVBSGpDLEVBR3FDLEVBSHJDLEVBR3lDLEVBSHpDLEVBRzZDLEVBSDdDLEVBR2lELENBSGpELEVBR29ELENBSHBELEVBR3VELENBSHZELEVBSWIsQ0FKYSxFQUlWLENBSlUsRUFJUCxDQUpPLEVBSUosQ0FKSSxFQUlELENBSkMsRUFJRSxFQUpGLEVBSU0sRUFKTixFQUlVLEVBSlYsRUFJYyxFQUpkLEVBSWtCLENBSmxCLEVBSXFCLEVBSnJCLEVBSXlCLEVBSnpCLEVBSTZCLEVBSjdCLEVBSWlDLEVBSmpDLEVBSXFDLEVBSnJDLEVBSXlDLEVBSnpDLEVBSTZDLEVBSjdDLEVBSWlELENBSmpELEVBSW9ELENBSnBELEVBSXVELENBSnZELEVBS2IsQ0FMYSxFQUtWLENBTFUsRUFLUCxDQUxPLEVBS0osQ0FMSSxFQUtELENBTEMsRUFLRSxFQUxGLEVBS00sRUFMTixFQUtVLEVBTFYsRUFLYyxFQUxkLEVBS2tCLENBTGxCLEVBS3FCLEVBTHJCLEVBS3lCLEVBTHpCLEVBSzZCLEVBTDdCLEVBS2lDLEVBTGpDLEVBS3FDLEVBTHJDLEVBS3lDLEVBTHpDLEVBSzZDLEVBTDdDLEVBS2lELENBTGpELEVBS29ELENBTHBELEVBS3VELENBTHZELEVBTWIsQ0FOYSxFQU1WLENBTlUsRUFNUCxDQU5PLEVBTUosQ0FOSSxFQU1ELENBTkMsRUFNRSxDQU5GLEVBTUssQ0FOTCxFQU1RLENBTlIsRUFNVyxDQU5YLEVBTWMsQ0FOZCxFQU1pQixDQU5qQixFQU1vQixDQU5wQixFQU11QixDQU52QixFQU0wQixDQU4xQixFQU02QixDQU43QixFQU1nQyxDQU5oQyxFQU1tQyxDQU5uQyxFQU1zQyxDQU50QyxFQU15QyxDQU56QyxFQU00QyxDQU41QyxFQU9iLENBUGEsRUFPVixDQVBVLEVBT1AsQ0FQTyxFQU9KLENBUEksRUFPRCxDQVBDLEVBT0UsQ0FQRixFQU9LLENBUEwsRUFPUSxDQVBSLEVBT1csQ0FQWCxFQU9jLENBUGQsRUFPaUIsQ0FQakIsRUFPb0IsQ0FQcEIsRUFPdUIsQ0FQdkIsRUFPMEIsQ0FQMUIsRUFPNkIsQ0FQN0IsRUFPZ0MsQ0FQaEMsRUFPbUMsQ0FQbkMsRUFPc0MsQ0FQdEMsRUFPeUMsQ0FQekMsRUFPNEMsQ0FQNUMsRUFRYixDQVJhLEVBUVYsQ0FSVSxFQVFQLENBUk8sRUFRSixDQVJJLEVBUUQsQ0FSQyxFQVFFLENBUkYsRUFRSyxDQVJMLEVBUVEsQ0FSUixFQVFXLENBUlgsRUFRYyxDQVJkLEVBUWlCLENBUmpCLEVBUW9CLENBUnBCLEVBUXVCLENBUnZCLEVBUTBCLENBUjFCLEVBUTZCLENBUjdCLEVBUWdDLENBUmhDLEVBUW1DLENBUm5DLEVBUXNDLENBUnRDLEVBUXlDLENBUnpDLEVBUTRDLENBUjVDLEVBU2IsQ0FUYSxFQVNWLENBVFUsRUFTUCxDQVRPLEVBU0osQ0FUSSxFQVNELENBVEMsRUFTRSxDQVRGLEVBU0ssQ0FUTCxFQVNRLENBVFIsRUFTVyxDQVRYLEVBU2MsQ0FUZCxFQVNpQixDQVRqQixFQVNvQixDQVRwQixFQVN1QixDQVR2QixFQVMwQixDQVQxQixFQVM2QixDQVQ3QixFQVNnQyxDQVRoQyxFQVNtQyxDQVRuQyxFQVNzQyxDQVR0QyxFQVN5QyxDQVR6QyxFQVM0QyxDQVQ1QyxFQVViLENBVmEsRUFVVixDQVZVLEVBVVAsQ0FWTyxFQVVKLENBVkksRUFVRCxDQVZDLEVBVUUsQ0FWRixFQVVLLENBVkwsRUFVUSxDQVZSLEVBVVcsQ0FWWCxFQVVjLENBVmQsRUFVaUIsQ0FWakIsRUFVb0IsQ0FWcEIsRUFVdUIsQ0FWdkIsRUFVMEIsQ0FWMUIsRUFVNkIsQ0FWN0IsRUFVZ0MsQ0FWaEMsRUFVbUMsQ0FWbkMsRUFVc0MsQ0FWdEMsRUFVeUMsQ0FWekMsRUFVNEMsQ0FWNUMsRUFXVixDQVhVLEVBV1AsQ0FYTyxFQVdKLENBWEksRUFXRCxDQVhDLEVBV0UsQ0FYRixFQVdLLENBWEwsRUFXUSxDQVhSLEVBV1csQ0FYWCxFQVdjLENBWGQsRUFXaUIsQ0FYakIsRUFXb0IsQ0FYcEIsRUFXdUIsQ0FYdkIsRUFXMEIsQ0FYMUIsRUFXNkIsQ0FYN0IsRUFXZ0MsQ0FYaEMsRUFXbUMsQ0FYbkMsRUFXc0MsQ0FYdEMsRUFXeUMsQ0FYekMsRUFXNEMsQ0FYNUMsRUFXK0MsQ0FYL0MsRUFZYixDQVphLEVBWVYsQ0FaVSxFQVlQLENBWk8sRUFZSixDQVpJLEVBWUQsQ0FaQyxFQVlFLENBWkYsRUFZSyxDQVpMLEVBWVEsQ0FaUixFQVlXLENBWlgsRUFZYyxDQVpkLEVBWWlCLENBWmpCLEVBWW9CLENBWnBCLEVBWXVCLENBWnZCLEVBWTBCLENBWjFCLEVBWTZCLENBWjdCLEVBWWdDLENBWmhDLEVBWW1DLENBWm5DLEVBWXNDLENBWnRDLEVBWXlDLENBWnpDLEVBWTRDLENBWjVDLEVBYWIsQ0FiYSxFQWFWLENBYlUsRUFhUCxDQWJPLEVBYUosQ0FiSSxFQWFELENBYkMsRUFhRSxDQWJGLEVBYUssQ0FiTCxFQWFRLENBYlIsRUFhVyxDQWJYLEVBYWMsQ0FiZCxFQWFpQixDQWJqQixFQWFvQixDQWJwQixFQWF1QixDQWJ2QixFQWEwQixDQWIxQixFQWE2QixDQWI3QixFQWFnQyxDQWJoQyxFQWFtQyxDQWJuQyxFQWFzQyxDQWJ0QyxFQWF5QyxDQWJ6QyxFQWE0QyxDQWI1QyxFQWNiLENBZGEsRUFjVixDQWRVLEVBY1AsQ0FkTyxFQWNKLENBZEksRUFjRCxDQWRDLEVBY0UsQ0FkRixFQWNLLENBZEwsRUFjUSxDQWRSLEVBY1csQ0FkWCxFQWNjLENBZGQsRUFjaUIsQ0FkakIsRUFjb0IsQ0FkcEIsRUFjdUIsQ0FkdkIsRUFjMEIsQ0FkMUIsRUFjNkIsQ0FkN0IsRUFjZ0MsQ0FkaEMsRUFjbUMsQ0FkbkMsRUFjc0MsQ0FkdEMsRUFjeUMsQ0FkekMsRUFjNEMsQ0FkNUMsRUFlYixDQWZhLEVBZVYsQ0FmVSxFQWVQLENBZk8sRUFlSixDQWZJLEVBZUQsQ0FmQyxFQWVFLENBZkYsRUFlSyxDQWZMLEVBZVEsQ0FmUixFQWVXLENBZlgsRUFlYyxDQWZkLEVBZWlCLENBZmpCLEVBZW9CLENBZnBCLEVBZXVCLENBZnZCLEVBZTBCLENBZjFCLEVBZTZCLENBZjdCLEVBZWdDLENBZmhDLEVBZW1DLENBZm5DLEVBZXNDLENBZnRDLEVBZXlDLENBZnpDLEVBZTRDLENBZjVDLEVBZ0JiLENBaEJhLEVBZ0JWLENBaEJVLEVBZ0JQLENBaEJPLEVBZ0JKLENBaEJJLEVBZ0JELENBaEJDLEVBZ0JFLENBaEJGLEVBZ0JLLENBaEJMLEVBZ0JRLENBaEJSLEVBZ0JXLENBaEJYLEVBZ0JjLENBaEJkLEVBZ0JpQixDQWhCakIsRUFnQm9CLENBaEJwQixFQWdCdUIsQ0FoQnZCLEVBZ0IwQixDQWhCMUIsRUFnQjZCLENBaEI3QixFQWdCZ0MsQ0FoQmhDLEVBZ0JtQyxDQWhCbkMsRUFnQnNDLENBaEJ0QyxFQWdCeUMsQ0FoQnpDLEVBZ0I0QyxDQWhCNUMsRUFpQmIsQ0FqQmEsRUFpQlYsQ0FqQlUsRUFpQlAsQ0FqQk8sRUFpQkosQ0FqQkksRUFpQkQsQ0FqQkMsRUFpQkUsQ0FqQkYsRUFpQkssQ0FqQkwsRUFpQlEsQ0FqQlIsRUFpQlcsQ0FqQlgsRUFpQmMsQ0FqQmQsRUFpQmlCLENBakJqQixFQWlCb0IsQ0FqQnBCLEVBaUJ1QixDQWpCdkIsRUFpQjBCLENBakIxQixFQWlCNkIsQ0FqQjdCLEVBaUJnQyxDQWpCaEMsRUFpQm1DLENBakJuQyxFQWlCc0MsQ0FqQnRDLEVBaUJ5QyxDQWpCekMsRUFpQjRDLENBakI1QyxFQWtCYixDQWxCYSxFQWtCVixDQWxCVSxFQWtCUCxDQWxCTyxFQWtCSixDQWxCSSxFQWtCRCxDQWxCQyxFQWtCRSxDQWxCRixFQWtCSyxDQWxCTCxFQWtCUSxDQWxCUixFQWtCVyxDQWxCWCxFQWtCYyxDQWxCZCxFQWtCaUIsQ0FsQmpCLEVBa0JvQixDQWxCcEIsRUFrQnVCLENBbEJ2QixFQWtCMEIsQ0FsQjFCLEVBa0I2QixDQWxCN0IsRUFrQmdDLENBbEJoQyxFQWtCbUMsQ0FsQm5DLEVBa0JzQyxDQWxCdEMsRUFrQnlDLENBbEJ6QyxFQWtCNEMsQ0FsQjVDLEVBbUJiLENBbkJhLEVBbUJWLENBbkJVLEVBbUJQLENBbkJPLEVBbUJKLENBbkJJLEVBbUJELENBbkJDLEVBbUJFLENBbkJGLEVBbUJLLENBbkJMLEVBbUJRLENBbkJSLEVBbUJXLENBbkJYLEVBbUJjLENBbkJkLEVBbUJpQixDQW5CakIsRUFtQm9CLENBbkJwQixFQW1CdUIsQ0FuQnZCLEVBbUIwQixDQW5CMUIsRUFtQjZCLENBbkI3QixFQW1CZ0MsQ0FuQmhDLEVBbUJtQyxDQW5CbkMsRUFtQnNDLENBbkJ0QyxFQW1CeUMsQ0FuQnpDLEVBbUI0QyxDQW5CNUMsRUFvQmIsQ0FwQmEsRUFvQlYsQ0FwQlUsRUFvQlAsQ0FwQk8sRUFvQkosQ0FwQkksRUFvQkQsQ0FwQkMsRUFvQkUsQ0FwQkYsRUFvQkssQ0FwQkwsRUFvQlEsQ0FwQlIsRUFvQlcsQ0FwQlgsRUFvQmMsQ0FwQmQsRUFvQmlCLENBcEJqQixFQW9Cb0IsQ0FwQnBCLEVBb0J1QixDQXBCdkIsRUFvQjBCLENBcEIxQixFQW9CNkIsQ0FwQjdCLEVBb0JnQyxDQXBCaEMsRUFvQm1DLENBcEJuQyxFQW9Cc0MsQ0FwQnRDLEVBb0J5QyxDQXBCekMsRUFvQjRDLENBcEI1QyxDQUFkLEMsQ0FzQkE7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHLEVBQWhCO0FBQ0EsSUFBSUMsVUFBVSxHQUFHLEVBQWpCLEMsQ0FDQTs7QUFDQSxJQUFJQyxRQUFRLEdBQUcsRUFBZjtBQUNBLElBQUlDLFNBQVMsR0FBRyxFQUFoQixDLENBQ0E7O0FBQ0EsSUFBSUMsYUFBYSxHQUFHLENBQXBCO0FBQ0EsSUFBSUMsVUFBVSxHQUFHLENBQWpCO0FBQ0EsSUFBSUMsZ0JBQWdCLEdBQUcsQ0FBdkI7QUFDQSxJQUFJQyxhQUFhLEdBQUcsQ0FBcEIsQyxDQUdBOztBQUNBLElBQUlDLFFBQVEsR0FBRztBQUNYO0FBQ0EsTUFBSyxLQUZNO0FBR1g7QUFDQSxNQUFLLEtBSk07QUFLWDtBQUNBLE1BQUssS0FOTTtBQU9YO0FBQ0EsTUFBSyxLQVJNLENBU1g7O0FBVFcsQ0FBZjtBQVlBLElBQUlDLFVBQVUsR0FBRztBQUNoQkMsSUFBRSxFQUFHLENBRFc7QUFFaEJDLE9BQUssRUFBRSxDQUZTO0FBR2hCQyxNQUFJLEVBQUUsQ0FIVTtBQUloQkMsTUFBSSxFQUFFO0FBSlUsQ0FBakIsQyxDQVFBOztBQUNBLElBQUlDLFVBQVUsR0FBRztBQUNiQyxPQUFLLEVBQUUsQ0FETTtBQUViQyxNQUFJLEVBQUUsQ0FGTztBQUdiQyxPQUFLLEVBQUU7QUFITSxDQUFqQixDLENBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHO0FBQ2YsS0FBSTtBQUFFQyxTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNDLEtBQXRDO0FBQTZDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsQ0FBSDtBQUFLQyxPQUFDLEVBQUMsQ0FBUDtBQUFTQyxPQUFDLEVBQUMsRUFBWDtBQUFjQyxPQUFDLEVBQUM7QUFBaEIsS0FBRDtBQUFwRCxHQURXO0FBRWYsS0FBSTtBQUFFTixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNFLElBQXRDO0FBQTRDSyxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsRUFBSDtBQUFNQyxPQUFDLEVBQUMsQ0FBUjtBQUFVQyxPQUFDLEVBQUMsRUFBWjtBQUFlQyxPQUFDLEVBQUM7QUFBakIsS0FBRDtBQUFuRCxHQUZXO0FBR2YsS0FBSTtBQUFFTixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNFLElBQXRDO0FBQTRDSyxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsRUFBSDtBQUFNQyxPQUFDLEVBQUMsQ0FBUjtBQUFVQyxPQUFDLEVBQUMsRUFBWjtBQUFlQyxPQUFDLEVBQUM7QUFBakIsS0FBRDtBQUFuRCxHQUhXO0FBSVosS0FBSTtBQUFFTixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNHLEtBQXRDO0FBQTZDSSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsQ0FBVDtBQUFXQyxPQUFDLEVBQUMsRUFBYjtBQUFnQkMsT0FBQyxFQUFDO0FBQWxCLEtBQUQ7QUFBcEQsR0FKUTtBQUtaLEtBQUk7QUFBRU4sU0FBSyxFQUFFLFNBQVQ7QUFBb0JDLFNBQUssRUFBRU4sVUFBVSxDQUFDQyxLQUF0QztBQUE2Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLENBQVQ7QUFBV0MsT0FBQyxFQUFDLEVBQWI7QUFBZ0JDLE9BQUMsRUFBQztBQUFsQixLQUFEO0FBQXBELEdBTFE7QUFNWixLQUFJO0FBQUVOLFNBQUssRUFBRSxTQUFUO0FBQW9CQyxTQUFLLEVBQUVOLFVBQVUsQ0FBQ0MsS0FBdEM7QUFBNkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxFQUFUO0FBQVlDLE9BQUMsRUFBQyxFQUFkO0FBQWlCQyxPQUFDLEVBQUM7QUFBbkIsS0FBRDtBQUFwRCxHQU5RO0FBT1osS0FBSTtBQUFFTixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNDLEtBQXRDO0FBQTZDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsRUFBSDtBQUFNQyxPQUFDLEVBQUMsRUFBUjtBQUFXQyxPQUFDLEVBQUMsRUFBYjtBQUFnQkMsT0FBQyxFQUFDO0FBQWxCLEtBQUQ7QUFBcEQsR0FQUTtBQVNaLE1BQUs7QUFBRU4sU0FBSyxFQUFDLFNBQVI7QUFBbUJDLFNBQUssRUFBQ04sVUFBVSxDQUFDQyxLQUFwQztBQUEyQ00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEVBQVQ7QUFBWUMsT0FBQyxFQUFDLEVBQWQ7QUFBaUJDLE9BQUMsRUFBQztBQUFuQixLQUFEO0FBQWxELEdBVE87QUFVWixNQUFLO0FBQUVOLFNBQUssRUFBQyxTQUFSO0FBQW1CQyxTQUFLLEVBQUNOLFVBQVUsQ0FBQ0MsS0FBcEM7QUFBMkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxFQUFUO0FBQVlDLE9BQUMsRUFBQyxFQUFkO0FBQWlCQyxPQUFDLEVBQUM7QUFBbkIsS0FBRDtBQUFsRCxHQVZPO0FBV1osTUFBSztBQUFFTixTQUFLLEVBQUMsU0FBUjtBQUFtQkMsU0FBSyxFQUFDTixVQUFVLENBQUNDLEtBQXBDO0FBQTJDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsRUFBVDtBQUFZQyxPQUFDLEVBQUMsRUFBZDtBQUFpQkMsT0FBQyxFQUFDO0FBQW5CLEtBQUQ7QUFBbEQsR0FYTztBQVlaLE1BQUs7QUFBRU4sU0FBSyxFQUFDLFNBQVI7QUFBbUJDLFNBQUssRUFBQ04sVUFBVSxDQUFDQyxLQUFwQztBQUEyQ00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEVBQVQ7QUFBWUMsT0FBQyxFQUFDLEVBQWQ7QUFBaUJDLE9BQUMsRUFBQztBQUFuQixLQUFEO0FBQWxELEdBWk87QUFhWixNQUFLO0FBQUVOLFNBQUssRUFBQyxTQUFSO0FBQW1CQyxTQUFLLEVBQUNOLFVBQVUsQ0FBQ0MsS0FBcEM7QUFBMkNNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxFQUFUO0FBQVlDLE9BQUMsRUFBQyxFQUFkO0FBQWlCQyxPQUFDLEVBQUM7QUFBbkIsS0FBRDtBQUFsRCxHQWJPO0FBY1osTUFBSztBQUFFTixTQUFLLEVBQUMsU0FBUjtBQUFtQkMsU0FBSyxFQUFDTixVQUFVLENBQUNDLEtBQXBDO0FBQTJDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsRUFBVDtBQUFZQyxPQUFDLEVBQUMsRUFBZDtBQUFpQkMsT0FBQyxFQUFDO0FBQW5CLEtBQUQ7QUFBbEQsR0FkTztBQWVaLE1BQUs7QUFBRU4sU0FBSyxFQUFDLFNBQVI7QUFBbUJDLFNBQUssRUFBQ04sVUFBVSxDQUFDQyxLQUFwQztBQUEyQ00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQWxELEdBZk87QUFnQlosTUFBSztBQUFFTixTQUFLLEVBQUMsU0FBUjtBQUFtQkMsU0FBSyxFQUFDTixVQUFVLENBQUNDLEtBQXBDO0FBQTJDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsR0FBVDtBQUFhQyxPQUFDLEVBQUMsRUFBZjtBQUFrQkMsT0FBQyxFQUFDO0FBQXBCLEtBQUQ7QUFBbEQsR0FoQk87QUFpQlosTUFBSztBQUFFTixTQUFLLEVBQUMsU0FBUjtBQUFtQkMsU0FBSyxFQUFDTixVQUFVLENBQUNDLEtBQXBDO0FBQTJDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsR0FBVDtBQUFhQyxPQUFDLEVBQUMsRUFBZjtBQUFrQkMsT0FBQyxFQUFDO0FBQXBCLEtBQUQ7QUFBbEQsR0FqQk87QUFrQlosTUFBSztBQUFFTixTQUFLLEVBQUMsU0FBUjtBQUFtQkMsU0FBSyxFQUFDTixVQUFVLENBQUNDLEtBQXBDO0FBQTJDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsR0FBVDtBQUFhQyxPQUFDLEVBQUMsRUFBZjtBQUFrQkMsT0FBQyxFQUFDO0FBQXBCLEtBQUQ7QUFBbEQsR0FsQk87QUFvQlosTUFBSztBQUFFTixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNFLElBQXRDO0FBQTRDSyxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsRUFBSDtBQUFNQyxPQUFDLEVBQUMsRUFBUjtBQUFXQyxPQUFDLEVBQUMsRUFBYjtBQUFnQkMsT0FBQyxFQUFDO0FBQWxCLEtBQUQ7QUFBbkQsR0FwQk87QUFxQlosTUFBSztBQUFFTixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNDLEtBQXRDO0FBQTZDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsRUFBSDtBQUFNQyxPQUFDLEVBQUMsRUFBUjtBQUFXQyxPQUFDLEVBQUMsRUFBYjtBQUFnQkMsT0FBQyxFQUFDO0FBQWxCLEtBQUQ7QUFBcEQsR0FyQk87QUFzQlosTUFBSztBQUFFTixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNDLEtBQXRDO0FBQTZDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsRUFBVDtBQUFZQyxPQUFDLEVBQUMsRUFBZDtBQUFpQkMsT0FBQyxFQUFDO0FBQW5CLEtBQUQ7QUFBcEQsR0F0Qk87QUF3QlosTUFBSztBQUFFTixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNDLEtBQXRDO0FBQTZDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsR0FBVDtBQUFhQyxPQUFDLEVBQUMsRUFBZjtBQUFrQkMsT0FBQyxFQUFDO0FBQXBCLEtBQUQ7QUFBcEQsR0F4Qk87QUF5QlosTUFBSztBQUFFTixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNDLEtBQXRDO0FBQTZDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsR0FBVDtBQUFhQyxPQUFDLEVBQUMsRUFBZjtBQUFrQkMsT0FBQyxFQUFDO0FBQXBCLEtBQUQ7QUFBcEQsR0F6Qk87QUEwQlosTUFBSztBQUFFTixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNDLEtBQXRDO0FBQTZDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsR0FBVDtBQUFhQyxPQUFDLEVBQUMsRUFBZjtBQUFrQkMsT0FBQyxFQUFDO0FBQXBCLEtBQUQ7QUFBcEQsR0ExQk87QUEyQlosTUFBSztBQUFFTixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNFLElBQXRDO0FBQTRDSyxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsR0FBVDtBQUFhQyxPQUFDLEVBQUMsRUFBZjtBQUFrQkMsT0FBQyxFQUFDO0FBQXBCLEtBQUQ7QUFBbkQsR0EzQk87QUE0QlosTUFBSztBQUFFTixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNDLEtBQXRDO0FBQTZDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsR0FBVDtBQUFhQyxPQUFDLEVBQUMsRUFBZjtBQUFrQkMsT0FBQyxFQUFDO0FBQXBCLEtBQUQ7QUFBcEQsR0E1Qk87QUE2QlosTUFBSztBQUFFTixTQUFLLEVBQUUsU0FBVDtBQUFvQkMsU0FBSyxFQUFFTixVQUFVLENBQUNDLEtBQXRDO0FBQTZDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsR0FBVDtBQUFhQyxPQUFDLEVBQUMsRUFBZjtBQUFrQkMsT0FBQyxFQUFDO0FBQXBCLEtBQUQ7QUFBcEQ7QUE3Qk8sQ0FBaEI7QUFnQ0EsSUFBSUMsVUFBVSxHQUFHO0FBQ2hCQyxNQUFJLEVBQUksQ0FEUTtBQUVoQlosT0FBSyxFQUFJO0FBRk8sQ0FBakI7QUFLQSxJQUFJYSxXQUFXLEdBQUc7QUFDakIsS0FBSTtBQUNIQyxRQUFJLEVBQUcsUUFESjtBQUVIUixVQUFNLEVBQUcsQ0FBQztBQUFDQyxPQUFDLEVBQUMsRUFBSDtBQUFNQyxPQUFDLEVBQUMsR0FBUjtBQUFZQyxPQUFDLEVBQUMsRUFBZDtBQUFpQkMsT0FBQyxFQUFDO0FBQW5CLEtBQUQsQ0FGTjtBQUdISyxVQUFNLEVBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUhOO0FBSUhDLGFBQVMsRUFBR0wsVUFBVSxDQUFDQyxJQUpwQjtBQUtISyxVQUFNLEVBQUc7QUFMTixHQURhO0FBUWpCLEtBQUk7QUFDSEgsUUFBSSxFQUFHLE9BREo7QUFFSFIsVUFBTSxFQUFHLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEVBQUg7QUFBTUMsT0FBQyxFQUFDLEdBQVI7QUFBWUMsT0FBQyxFQUFDLEVBQWQ7QUFBaUJDLE9BQUMsRUFBQztBQUFuQixLQUFELENBRk47QUFHSEssVUFBTSxFQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FITjtBQUlIQyxhQUFTLEVBQUdMLFVBQVUsQ0FBQ1gsS0FKcEI7QUFLSGlCLFVBQU0sRUFBRztBQUxOLEdBUmE7QUFlakIsS0FBSTtBQUNISCxRQUFJLEVBQUcsTUFESjtBQUVIUixVQUFNLEVBQUcsQ0FBQztBQUFDQyxPQUFDLEVBQUMsRUFBSDtBQUFNQyxPQUFDLEVBQUMsR0FBUjtBQUFZQyxPQUFDLEVBQUMsRUFBZDtBQUFpQkMsT0FBQyxFQUFDO0FBQW5CLEtBQUQsQ0FGTjtBQUdISyxVQUFNLEVBQUcsQ0FBQyxDQUFDLEVBQUYsRUFBSyxDQUFDLEVBQU4sQ0FITjtBQUlIQyxhQUFTLEVBQUdMLFVBQVUsQ0FBQ1gsS0FKcEI7QUFLSGlCLFVBQU0sRUFBRztBQUxOLEdBZmE7QUFzQmQsS0FBSTtBQUNOSCxRQUFJLEVBQUcsV0FERDtBQUVOUixVQUFNLEVBQUcsQ0FBQztBQUFDQyxPQUFDLEVBQUMsRUFBSDtBQUFNQyxPQUFDLEVBQUMsR0FBUjtBQUFZQyxPQUFDLEVBQUMsRUFBZDtBQUFpQkMsT0FBQyxFQUFDO0FBQW5CLEtBQUQsQ0FGSDtBQUdOSyxVQUFNLEVBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUhIO0FBSU5DLGFBQVMsRUFBR0wsVUFBVSxDQUFDQyxJQUpqQjtBQUtOSyxVQUFNLEVBQUc7QUFMSCxHQXRCVTtBQTZCZCxLQUFJO0FBQ05ILFFBQUksRUFBRyxVQUREO0FBRU5SLFVBQU0sRUFBRyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRCxDQUZIO0FBR05LLFVBQU0sRUFBRyxDQUFDLENBQUMsRUFBRixFQUFLLENBQUMsRUFBTixDQUhIO0FBSU5DLGFBQVMsRUFBR0wsVUFBVSxDQUFDWCxLQUpqQjtBQUtOaUIsVUFBTSxFQUFHO0FBTEgsR0E3QlU7QUFvQ2QsS0FBSTtBQUNOSCxRQUFJLEVBQUcsUUFERDtBQUVOUixVQUFNLEVBQUcsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsQ0FBVDtBQUFXQyxPQUFDLEVBQUMsRUFBYjtBQUFnQkMsT0FBQyxFQUFDO0FBQWxCLEtBQUQsQ0FGSDtBQUdOSyxVQUFNLEVBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUhIO0FBSU5DLGFBQVMsRUFBR0wsVUFBVSxDQUFDQyxJQUpqQjtBQUtOSyxVQUFNLEVBQUc7QUFMSCxHQXBDVTtBQTJDZCxLQUFJO0FBQ05ILFFBQUksRUFBRyxTQUREO0FBRU5SLFVBQU0sRUFBRyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxFQUFUO0FBQVlDLE9BQUMsRUFBQyxFQUFkO0FBQWlCQyxPQUFDLEVBQUM7QUFBbkIsS0FBRCxDQUZIO0FBR05LLFVBQU0sRUFBRyxDQUFDLENBQUQsRUFBRyxDQUFILENBSEg7QUFJTkMsYUFBUyxFQUFHTCxVQUFVLENBQUNDLElBSmpCO0FBS05LLFVBQU0sRUFBRztBQUxILEdBM0NVO0FBa0RkLEtBQUk7QUFDTkgsUUFBSSxFQUFHLFFBREQ7QUFFTlIsVUFBTSxFQUFHLENBQUM7QUFBQ0MsT0FBQyxFQUFDLENBQUg7QUFBS0MsT0FBQyxFQUFDLEVBQVA7QUFBVUMsT0FBQyxFQUFDLEVBQVo7QUFBZUMsT0FBQyxFQUFDO0FBQWpCLEtBQUQsQ0FGSDtBQUdOSyxVQUFNLEVBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUhIO0FBSU5DLGFBQVMsRUFBR0wsVUFBVSxDQUFDQyxJQUpqQjtBQUtOSyxVQUFNLEVBQUc7QUFMSCxHQWxEVTtBQXlEZCxLQUFJO0FBQ05ILFFBQUksRUFBRyxNQUREO0FBRU5SLFVBQU0sRUFBRyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxDQUFIO0FBQUtDLE9BQUMsRUFBQyxFQUFQO0FBQVVDLE9BQUMsRUFBQyxFQUFaO0FBQWVDLE9BQUMsRUFBQztBQUFqQixLQUFELENBRkg7QUFHTkssVUFBTSxFQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FISDtBQUlOQyxhQUFTLEVBQUdMLFVBQVUsQ0FBQ1gsS0FKakI7QUFLTmlCLFVBQU0sRUFBRztBQUxILEdBekRVO0FBZ0VkLE1BQUs7QUFDUEgsUUFBSSxFQUFHLE9BREE7QUFFUFIsVUFBTSxFQUFHLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLENBQVQ7QUFBV0MsT0FBQyxFQUFDLEVBQWI7QUFBZ0JDLE9BQUMsRUFBQztBQUFsQixLQUFELENBRkY7QUFHUEssVUFBTSxFQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FIRjtBQUlQQyxhQUFTLEVBQUdMLFVBQVUsQ0FBQ1gsS0FKaEI7QUFLUGlCLFVBQU0sRUFBRztBQUxGLEdBaEVTO0FBdUVkLE1BQUs7QUFDUEgsUUFBSSxFQUFHLFlBREE7QUFFUFIsVUFBTSxFQUFHLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEVBQUg7QUFBTUMsT0FBQyxFQUFDLEdBQVI7QUFBWUMsT0FBQyxFQUFDLEVBQWQ7QUFBaUJDLE9BQUMsRUFBQztBQUFuQixLQUFELENBRkY7QUFHUEssVUFBTSxFQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FIRjtBQUlQQyxhQUFTLEVBQUdMLFVBQVUsQ0FBQ1gsS0FKaEI7QUFLUGlCLFVBQU0sRUFBRztBQUxGLEdBdkVTO0FBOEVkLE1BQUs7QUFDUEgsUUFBSSxFQUFHLE1BREE7QUFFUFIsVUFBTSxFQUFHLENBQUM7QUFBQ0MsT0FBQyxFQUFDLENBQUg7QUFBS0MsT0FBQyxFQUFDLEdBQVA7QUFBV0MsT0FBQyxFQUFDLEVBQWI7QUFBZ0JDLE9BQUMsRUFBQztBQUFsQixLQUFELENBRkY7QUFHUEssVUFBTSxFQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FIRjtBQUlQQyxhQUFTLEVBQUdMLFVBQVUsQ0FBQ1gsS0FKaEI7QUFLUGlCLFVBQU0sRUFBRztBQUxGLEdBOUVTO0FBcUZkLE1BQUs7QUFDUEgsUUFBSSxFQUFHLGFBREE7QUFFUFIsVUFBTSxFQUFHLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEVBQUg7QUFBTUMsT0FBQyxFQUFDLEdBQVI7QUFBWUMsT0FBQyxFQUFDLEdBQWQ7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFELENBRkY7QUFHUEssVUFBTSxFQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FIRjtBQUlQQyxhQUFTLEVBQUdMLFVBQVUsQ0FBQ1gsS0FKaEI7QUFLUGlCLFVBQU0sRUFBRztBQUxGLEdBckZTO0FBNEZkLE1BQUs7QUFDUEgsUUFBSSxFQUFHLFdBREE7QUFFUFIsVUFBTSxFQUFHLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFELENBRkY7QUFHUEssVUFBTSxFQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FIRjtBQUlQQyxhQUFTLEVBQUdMLFVBQVUsQ0FBQ1gsS0FKaEI7QUFLUGlCLFVBQU0sRUFBRztBQUxGLEdBNUZTO0FBbUdkLE1BQUs7QUFDUEgsUUFBSSxFQUFHLFdBREE7QUFFUFIsVUFBTSxFQUFHLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFELENBRkY7QUFHUEssVUFBTSxFQUFHLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FIRjtBQUlQQyxhQUFTLEVBQUdMLFVBQVUsQ0FBQ1gsS0FKaEI7QUFLUGlCLFVBQU0sRUFBRztBQUxGLEdBbkdTO0FBMEdkLE1BQUs7QUFDUEgsUUFBSSxFQUFHLG9CQURBO0FBRVBSLFVBQU0sRUFBRyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRCxDQUZGO0FBR1BLLFVBQU0sRUFBRyxDQUFDLENBQUQsRUFBRyxDQUFILENBSEY7QUFJUEMsYUFBUyxFQUFHTCxVQUFVLENBQUNYLEtBSmhCO0FBS1BpQixVQUFNLEVBQUc7QUFMRjtBQTFHUyxDQUFsQixDLENBb0hBOztBQUNBLElBQUlDLFNBQVMsR0FBRztBQUNaLEtBQUk7QUFDTkosUUFBSSxFQUFHLFNBREQ7QUFFTkssWUFBUSxFQUFHLENBRkw7QUFHTmIsVUFBTSxFQUFHLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLENBQVQ7QUFBV0MsT0FBQyxFQUFDLEVBQWI7QUFBZ0JDLE9BQUMsRUFBQztBQUFsQixLQUFELENBSEg7QUFJTkssVUFBTSxFQUFHLENBQUMsQ0FBRCxFQUFHLENBQUg7QUFKSCxHQURRO0FBT1osS0FBSTtBQUNORCxRQUFJLEVBQUcsWUFERDtBQUVOSyxZQUFRLEVBQUcsQ0FGTDtBQUdOYixVQUFNLEVBQUcsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsQ0FBVDtBQUFXQyxPQUFDLEVBQUMsRUFBYjtBQUFnQkMsT0FBQyxFQUFDO0FBQWxCLEtBQUQsQ0FISDtBQUlOSyxVQUFNLEVBQUcsQ0FBQyxDQUFELEVBQUcsQ0FBSDtBQUpIO0FBUFEsQ0FBaEI7QUFpQkEsSUFBSUssUUFBUSxHQUFHLElBQWY7QUFBQSxJQUFxQkMsV0FBVyxHQUFHLDRCQUFuQztBQUFBLElBQWlFQyxTQUFTLEdBQUcsS0FBN0UsQyxDQUlBOztBQUNBLElBQUlDLE1BQU0sR0FBRyxJQUFJQyxNQUFKLEVBQWIsQyxDQUNBOztBQUNBLFNBQVNBLE1BQVQsR0FBa0I7QUFDZCxPQUFLQyxRQUFMLEdBQWdCLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBaEIsQ0FEYyxDQUVkOztBQUNBLE9BQUtDLE1BQUwsR0FBZSxDQUFDLEVBQUQsRUFBSSxDQUFKLENBQWYsQ0FIYyxDQUlkOztBQUNBLE9BQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLEdBQWpCO0FBQ0gsT0FBS0MsVUFBTCxHQUFrQixDQUFDLEVBQUQsRUFBSSxFQUFKLENBQWxCO0FBQ0csT0FBS0MsUUFBTCxHQUFnQixDQUFDLEVBQUQsRUFBSSxFQUFKLENBQWhCO0FBRUEsT0FBS0MsU0FBTCxHQUFpQnJDLFVBQVUsQ0FBQ0MsRUFBNUI7QUFDSCxPQUFLcUMsT0FBTCxHQUFlLEVBQWY7QUFDQSxPQUFLQSxPQUFMLENBQWF0QyxVQUFVLENBQUNDLEVBQXhCLElBQStCLENBQUM7QUFBQ1ksS0FBQyxFQUFDLENBQUg7QUFBS0MsS0FBQyxFQUFDLEdBQVA7QUFBV0MsS0FBQyxFQUFDLEVBQWI7QUFBZ0JDLEtBQUMsRUFBQztBQUFsQixHQUFELENBQS9CO0FBQ0EsT0FBS3NCLE9BQUwsQ0FBYXRDLFVBQVUsQ0FBQ0UsS0FBeEIsSUFBaUMsQ0FBQztBQUFDVyxLQUFDLEVBQUMsQ0FBSDtBQUFLQyxLQUFDLEVBQUMsR0FBUDtBQUFXQyxLQUFDLEVBQUMsRUFBYjtBQUFnQkMsS0FBQyxFQUFDO0FBQWxCLEdBQUQsQ0FBakM7QUFDQSxPQUFLc0IsT0FBTCxDQUFhdEMsVUFBVSxDQUFDRyxJQUF4QixJQUFnQyxDQUFDO0FBQUNVLEtBQUMsRUFBQyxDQUFIO0FBQUtDLEtBQUMsRUFBQyxHQUFQO0FBQVdDLEtBQUMsRUFBQyxFQUFiO0FBQWdCQyxLQUFDLEVBQUM7QUFBbEIsR0FBRCxDQUFoQztBQUNBLE9BQUtzQixPQUFMLENBQWF0QyxVQUFVLENBQUNJLElBQXhCLElBQWdDLENBQUM7QUFBQ1MsS0FBQyxFQUFDLENBQUg7QUFBS0MsS0FBQyxFQUFDLEdBQVA7QUFBV0MsS0FBQyxFQUFDLEVBQWI7QUFBZ0JDLEtBQUMsRUFBQztBQUFsQixHQUFELENBQWhDO0FBQ0EsQyxDQUdEOzs7QUFDQWMsTUFBTSxDQUFDUyxTQUFQLENBQWlCQyxRQUFqQixHQUE0QixVQUFTM0IsQ0FBVCxFQUFZQyxDQUFaLEVBQWU7QUFDMUMsT0FBS2lCLFFBQUwsR0FBZ0IsQ0FBQ2xCLENBQUQsRUFBR0MsQ0FBSCxDQUFoQjtBQUNHLE9BQUtrQixNQUFMLEdBQWUsQ0FBQ25CLENBQUQsRUFBR0MsQ0FBSCxDQUFmLENBRnVDLENBR3ZDO0FBQ0E7O0FBQ0gsT0FBS3NCLFFBQUwsR0FBZ0IsQ0FBSTdDLFNBQVMsR0FBR3NCLENBQWQsR0FBb0IsQ0FBQ3RCLFNBQVMsR0FBRyxLQUFLNEMsVUFBTCxDQUFnQixDQUFoQixDQUFiLElBQW1DLENBQXpELEVBQ1ozQyxVQUFVLEdBQUdzQixDQUFmLEdBQXFCLENBQUN0QixVQUFVLEdBQUcsS0FBSzJDLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBZCxJQUFvQyxDQUQzQyxDQUFoQjtBQUVBLENBUEQsQyxDQVNBOzs7QUFDQUwsTUFBTSxDQUFDUyxTQUFQLENBQWlCRSxlQUFqQixHQUFtQyxVQUFTQyxDQUFULEVBQVk7QUFDM0M7QUFDSCxNQUFJLEtBQUtYLFFBQUwsQ0FBYyxDQUFkLEtBQW9CLEtBQUtDLE1BQUwsQ0FBWSxDQUFaLENBQXBCLElBQXNDLEtBQUtELFFBQUwsQ0FBYyxDQUFkLEtBQW9CLEtBQUtDLE1BQUwsQ0FBWSxDQUFaLENBQTlELEVBQThFO0FBQUUsV0FBTyxLQUFQO0FBQWUsR0FGakQsQ0FHM0M7QUFDQTs7O0FBQ0gsTUFBSVUsQ0FBQyxHQUFHLEtBQUtULFNBQVYsSUFBd0IsS0FBS0MsU0FBaEMsRUFBMkM7QUFDcEMsU0FBS00sUUFBTCxDQUFjLEtBQUtSLE1BQUwsQ0FBWSxDQUFaLENBQWQsRUFBOEIsS0FBS0EsTUFBTCxDQUFZLENBQVosQ0FBOUI7O0FBQ0EsUUFBR1csV0FBVyxDQUFDQyxHQUFaLENBQWdCQyxPQUFPLENBQUMsS0FBS2IsTUFBTCxDQUFZLENBQVosQ0FBRCxFQUFpQixLQUFLQSxNQUFMLENBQVksQ0FBWixDQUFqQixDQUF2QixFQUF5RGMsVUFBekQsSUFBdUUsSUFBMUUsRUFBZ0Y7QUFDckZILGlCQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FBQyxLQUFLYixNQUFMLENBQVksQ0FBWixDQUFELEVBQWlCLEtBQUtBLE1BQUwsQ0FBWSxDQUFaLENBQWpCLENBQXZCLEVBQXlEYyxVQUF6RCxDQUFvRSxJQUFwRTtBQUNNO0FBQ1AsR0FMRCxNQUtPO0FBQ0E7QUFDTixTQUFLVixRQUFMLENBQWMsQ0FBZCxJQUFvQixLQUFLTCxRQUFMLENBQWMsQ0FBZCxJQUFtQnhDLFNBQXBCLEdBQWtDLENBQUNBLFNBQVMsR0FBRyxLQUFLNEMsVUFBTCxDQUFnQixDQUFoQixDQUFiLElBQW1DLENBQXhGO0FBQ0EsU0FBS0MsUUFBTCxDQUFjLENBQWQsSUFBb0IsS0FBS0wsUUFBTCxDQUFjLENBQWQsSUFBbUJ2QyxVQUFwQixHQUFtQyxDQUFDQSxVQUFVLEdBQUcsS0FBSzJDLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBZCxJQUFvQyxDQUExRixDQUhNLENBS0E7O0FBQ04sUUFBRyxLQUFLSCxNQUFMLENBQVksQ0FBWixLQUFrQixLQUFLRCxRQUFMLENBQWMsQ0FBZCxDQUFyQixFQUF1QztBQUM3QjtBQUNBO0FBQ1QsVUFBSWdCLFVBQVUsR0FBSXhELFNBQVMsR0FBRyxLQUFLMkMsU0FBbEIsSUFBZ0NRLENBQUMsR0FBRyxLQUFLVCxTQUF6QyxDQUFqQjtBQUNBLFdBQUtHLFFBQUwsQ0FBYyxDQUFkLEtBQW9CLEtBQUtKLE1BQUwsQ0FBWSxDQUFaLElBQWlCLEtBQUtELFFBQUwsQ0FBYyxDQUFkLENBQWpCLEdBQW9DLElBQUlnQixVQUF4QyxHQUFxREEsVUFBekU7QUFDQTs7QUFDRSxRQUFHLEtBQUtmLE1BQUwsQ0FBWSxDQUFaLEtBQWtCLEtBQUtELFFBQUwsQ0FBYyxDQUFkLENBQXJCLEVBQXVDO0FBQ3pDLFVBQUlnQixXQUFVLEdBQUl2RCxVQUFVLEdBQUcsS0FBSzBDLFNBQW5CLElBQWlDUSxDQUFDLEdBQUMsS0FBS1QsU0FBeEMsQ0FBakI7O0FBQ0EsV0FBS0csUUFBTCxDQUFjLENBQWQsS0FBb0IsS0FBS0osTUFBTCxDQUFZLENBQVosSUFBZSxLQUFLRCxRQUFMLENBQWMsQ0FBZCxDQUFmLEdBQWtDLElBQUlnQixXQUF0QyxHQUFtREEsV0FBdkU7QUFDTSxLQWZELENBZ0JBOzs7QUFDTixTQUFLWCxRQUFMLENBQWMsQ0FBZCxJQUFtQlksSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS2IsUUFBTCxDQUFjLENBQWQsQ0FBWCxDQUFuQjtBQUNBLFNBQUtBLFFBQUwsQ0FBYyxDQUFkLElBQW1CWSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLYixRQUFMLENBQWMsQ0FBZCxDQUFYLENBQW5CO0FBQ0csR0E3QjBDLENBOEIzQzs7O0FBQ0gsU0FBTyxJQUFQO0FBQ0EsQ0FoQ0QsQyxDQW1DQTs7O0FBQ0FOLE1BQU0sQ0FBQ1MsU0FBUCxDQUFpQlcsV0FBakIsR0FBK0IsVUFBU3JDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQzFDO0FBQ0EsTUFBR0QsQ0FBQyxHQUFHLENBQUosSUFBU0EsQ0FBQyxJQUFJcEIsUUFBZCxJQUEwQnFCLENBQUMsR0FBRyxDQUE5QixJQUFtQ0EsQ0FBQyxJQUFJcEIsU0FBM0MsRUFBc0Q7QUFBRSxXQUFPLEtBQVA7QUFBZSxHQUY3QixDQUcxQzs7O0FBQ0ksTUFBR2UsU0FBUyxDQUFDbkIsT0FBTyxDQUFDdUQsT0FBTyxDQUFDaEMsQ0FBRCxFQUFHQyxDQUFILENBQVIsQ0FBUixDQUFULENBQWlDSCxLQUFqQyxJQUEwQ04sVUFBVSxDQUFDRSxJQUF4RCxFQUE4RDtBQUFFLFdBQU8sS0FBUDtBQUFlOztBQUMvRSxNQUFHb0MsV0FBVyxDQUFDQyxHQUFaLENBQWdCQyxPQUFPLENBQUNoQyxDQUFELEVBQUdDLENBQUgsQ0FBdkIsRUFBOEJxQyxNQUE5QixJQUF3QyxJQUEzQyxFQUFpRDtBQUN2RCxRQUFJQSxNQUFNLEdBQUdSLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQkMsT0FBTyxDQUFDaEMsQ0FBRCxFQUFHQyxDQUFILENBQXZCLEVBQThCcUMsTUFBM0M7O0FBQ0EsUUFBR2hDLFdBQVcsQ0FBQ2dDLE1BQU0sQ0FBQ0MsSUFBUixDQUFYLENBQXlCOUIsU0FBekIsSUFBc0NMLFVBQVUsQ0FBQ1gsS0FBcEQsRUFBMkQ7QUFDMUQsYUFBTyxLQUFQO0FBQ0E7QUFDRDs7QUFDRCxTQUFPLElBQVA7QUFDQSxDQVpEOztBQWFBd0IsTUFBTSxDQUFDUyxTQUFQLENBQWlCYyxPQUFqQixHQUEyQixZQUFXO0FBQUUsU0FBTyxLQUFLSCxXQUFMLENBQWlCLEtBQUtuQixRQUFMLENBQWMsQ0FBZCxDQUFqQixFQUFtQyxLQUFLQSxRQUFMLENBQWMsQ0FBZCxJQUFtQixDQUF0RCxDQUFQO0FBQWtFLENBQTFHOztBQUNBRCxNQUFNLENBQUNTLFNBQVAsQ0FBaUJlLFNBQWpCLEdBQTZCLFlBQVc7QUFBRSxTQUFPLEtBQUtKLFdBQUwsQ0FBaUIsS0FBS25CLFFBQUwsQ0FBYyxDQUFkLENBQWpCLEVBQW1DLEtBQUtBLFFBQUwsQ0FBYyxDQUFkLElBQW1CLENBQXRELENBQVA7QUFBa0UsQ0FBNUc7O0FBQ0FELE1BQU0sQ0FBQ1MsU0FBUCxDQUFpQmdCLFNBQWpCLEdBQTZCLFlBQVc7QUFBRSxTQUFPLEtBQUtMLFdBQUwsQ0FBaUIsS0FBS25CLFFBQUwsQ0FBYyxDQUFkLElBQWlCLENBQWxDLEVBQXFDLEtBQUtBLFFBQUwsQ0FBYyxDQUFkLENBQXJDLENBQVA7QUFBZ0UsQ0FBMUc7O0FBQ0FELE1BQU0sQ0FBQ1MsU0FBUCxDQUFpQmlCLFVBQWpCLEdBQThCLFlBQVc7QUFBRSxTQUFPLEtBQUtOLFdBQUwsQ0FBaUIsS0FBS25CLFFBQUwsQ0FBYyxDQUFkLElBQWlCLENBQWxDLEVBQXFDLEtBQUtBLFFBQUwsQ0FBYyxDQUFkLENBQXJDLENBQVA7QUFBZ0UsQ0FBM0c7O0FBRUFELE1BQU0sQ0FBQ1MsU0FBUCxDQUFpQmtCLE1BQWpCLEdBQTBCLFVBQVNmLENBQVQsRUFBWTtBQUFFLE9BQUtWLE1BQUwsQ0FBWSxDQUFaLEtBQWlCLENBQWpCO0FBQW9CLE9BQUtDLFNBQUwsR0FBaUJTLENBQWpCO0FBQW9CLE9BQUtMLFNBQUwsR0FBaUJyQyxVQUFVLENBQUNJLElBQTVCO0FBQW1DLENBQW5IOztBQUNBMEIsTUFBTSxDQUFDUyxTQUFQLENBQWlCbUIsT0FBakIsR0FBMkIsVUFBU2hCLENBQVQsRUFBWTtBQUFFLE9BQUtWLE1BQUwsQ0FBWSxDQUFaLEtBQWlCLENBQWpCO0FBQW9CLE9BQUtDLFNBQUwsR0FBaUJTLENBQWpCO0FBQW9CLE9BQUtMLFNBQUwsR0FBaUJyQyxVQUFVLENBQUNFLEtBQTVCO0FBQW9DLENBQXJIOztBQUNBNEIsTUFBTSxDQUFDUyxTQUFQLENBQWlCb0IsSUFBakIsR0FBd0IsVUFBU2pCLENBQVQsRUFBWTtBQUFFLE9BQUtWLE1BQUwsQ0FBWSxDQUFaLEtBQWlCLENBQWpCO0FBQW9CLE9BQUtDLFNBQUwsR0FBaUJTLENBQWpCO0FBQW9CLE9BQUtMLFNBQUwsR0FBaUJyQyxVQUFVLENBQUNDLEVBQTVCO0FBQWlDLENBQS9HOztBQUNBNkIsTUFBTSxDQUFDUyxTQUFQLENBQWlCcUIsTUFBakIsR0FBMEIsVUFBU2xCLENBQVQsRUFBWTtBQUFFLE9BQUtWLE1BQUwsQ0FBWSxDQUFaLEtBQWlCLENBQWpCO0FBQW9CLE9BQUtDLFNBQUwsR0FBaUJTLENBQWpCO0FBQW9CLE9BQUtMLFNBQUwsR0FBaUJyQyxVQUFVLENBQUNHLElBQTVCO0FBQW1DLENBQW5ILEMsQ0FJQTs7O0FBQ0EsSUFBSTBELE1BQU0sR0FBRztBQUNUQyxRQUFNLEVBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQURDO0FBRVQ7QUFDQUMsZUFBYSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FITjtBQUlUO0FBQ0FDLGFBQVcsRUFBRSxDQUFDLENBQUQsRUFBRyxDQUFILENBTEo7QUFNVDtBQUNBM0MsUUFBTSxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FQQztBQVFUO0FBQ0E0QyxRQUFNLEVBQUUsZ0JBQVNDLE9BQVQsRUFBa0JDLE9BQWxCLEVBQTJCO0FBQy9CO0FBQ04sU0FBSzlDLE1BQUwsQ0FBWSxDQUFaLElBQWlCMkIsSUFBSSxDQUFDckMsS0FBTCxDQUFZLEtBQUttRCxNQUFMLENBQVksQ0FBWixJQUFlLENBQWhCLEdBQXFCSSxPQUFoQyxDQUFqQjtBQUNNLFNBQUs3QyxNQUFMLENBQVksQ0FBWixJQUFpQjJCLElBQUksQ0FBQ3JDLEtBQUwsQ0FBWSxLQUFLbUQsTUFBTCxDQUFZLENBQVosSUFBZSxDQUFoQixHQUFxQkssT0FBaEMsQ0FBakIsQ0FIK0IsQ0FLL0I7O0FBQ0EsUUFBSUMsSUFBSSxHQUFHLENBQUVwQixJQUFJLENBQUNyQyxLQUFMLENBQVd1RCxPQUFPLEdBQUczRSxTQUFyQixDQUFGLEVBQW1DeUQsSUFBSSxDQUFDckMsS0FBTCxDQUFXd0QsT0FBTyxHQUFHM0UsVUFBckIsQ0FBbkMsQ0FBWCxDQU4rQixDQU8vQjtBQUNBOztBQUNBLFNBQUt1RSxhQUFMLENBQW1CLENBQW5CLElBQXdCSyxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVwQixJQUFJLENBQUNxQixJQUFMLENBQVcsS0FBS1AsTUFBTCxDQUFZLENBQVosSUFBZSxDQUFoQixHQUFxQnZFLFNBQS9CLENBQVYsR0FBdUQsQ0FBL0U7QUFDTixTQUFLd0UsYUFBTCxDQUFtQixDQUFuQixJQUF3QkssSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVcEIsSUFBSSxDQUFDcUIsSUFBTCxDQUFXLEtBQUtQLE1BQUwsQ0FBWSxDQUFaLElBQWUsQ0FBaEIsR0FBcUJ0RSxVQUEvQixDQUFWLEdBQXdELENBQWhGLENBVnFDLENBWS9COztBQUNBLFFBQUcsS0FBS3VFLGFBQUwsQ0FBbUIsQ0FBbkIsS0FBeUIsQ0FBQyxDQUE3QixFQUFnQztBQUFFLFdBQUtBLGFBQUwsQ0FBbUIsQ0FBbkIsSUFBd0IsQ0FBeEI7QUFBNEI7O0FBQ3BFLFFBQUcsS0FBS0EsYUFBTCxDQUFtQixDQUFuQixLQUF5QixDQUFDLENBQTdCLEVBQWdDO0FBQUUsV0FBS0EsYUFBTCxDQUFtQixDQUFuQixJQUF3QixDQUF4QjtBQUE0Qjs7QUFFeEQsU0FBS0MsV0FBTCxDQUFpQixDQUFqQixJQUFzQkksSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLENBQVYsR0FBY3BCLElBQUksQ0FBQ3FCLElBQUwsQ0FBVyxLQUFLUCxNQUFMLENBQVksQ0FBWixJQUFlLENBQWhCLEdBQXFCdkUsU0FBL0IsQ0FBcEM7QUFDTixTQUFLeUUsV0FBTCxDQUFpQixDQUFqQixJQUFzQkksSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVLENBQVYsR0FBY3BCLElBQUksQ0FBQ3FCLElBQUwsQ0FBVyxLQUFLUCxNQUFMLENBQVksQ0FBWixJQUFlLENBQWhCLEdBQXFCdEUsVUFBL0IsQ0FBcEM7O0FBRUEsUUFBRyxLQUFLd0UsV0FBTCxDQUFpQixDQUFqQixLQUF1QnZFLFFBQTFCLEVBQW9DO0FBQUUsV0FBS3VFLFdBQUwsQ0FBaUIsQ0FBakIsSUFBc0J2RSxRQUFRLEdBQUUsQ0FBaEM7QUFBb0M7O0FBQzFFLFFBQUcsS0FBS3VFLFdBQUwsQ0FBaUIsQ0FBakIsS0FBdUJ0RSxTQUExQixFQUFxQztBQUFFLFdBQUtzRSxXQUFMLENBQWlCLENBQWpCLElBQXNCdEUsU0FBUyxHQUFHLENBQWxDO0FBQXNDO0FBQ3RFO0FBOUJJLENBQWIsQyxDQWtDQTs7QUFFQSxJQUFJaUQsV0FBVyxHQUFHLElBQUkyQixPQUFKLEVBQWxCO0FBRUEsSUFBSUMsaUJBQWlCLEdBQUcsQ0FDdkI7QUFBRTFELEdBQUMsRUFBQyxDQUFKO0FBQU9DLEdBQUMsRUFBQyxDQUFUO0FBQVlDLEdBQUMsRUFBQyxDQUFkO0FBQWlCQyxHQUFDLEVBQUMsQ0FBbkI7QUFBc0J3RCxNQUFJLEVBQUUsQ0FDM0IsRUFEMkIsRUFDdkIsRUFEdUIsRUFDbkIsRUFEbUIsRUFDZixFQURlLEVBRXJCLEVBRnFCLEVBRWpCLEVBRmlCLEVBRWIsRUFGYSxFQUVULEVBRlMsRUFHckIsRUFIcUIsRUFHakIsRUFIaUIsRUFHYixFQUhhLEVBR1QsRUFIUyxFQUlyQixFQUpxQixFQUlqQixFQUppQixFQUliLEVBSmEsRUFJVCxFQUpTLEVBS3JCLEVBTHFCLEVBS2pCLEVBTGlCLEVBS2IsRUFMYSxFQUtULEVBTFM7QUFBNUIsQ0FEdUIsRUFRdkI7QUFBRTNELEdBQUMsRUFBQyxFQUFKO0FBQVFDLEdBQUMsRUFBQyxDQUFWO0FBQWFDLEdBQUMsRUFBQyxDQUFmO0FBQWtCQyxHQUFDLEVBQUMsQ0FBcEI7QUFBdUJ3RCxNQUFJLEVBQUUsQ0FDNUIsRUFENEIsRUFDeEIsRUFEd0IsRUFDcEIsRUFEb0IsRUFDaEIsRUFEZ0IsRUFDWixFQURZLEVBQ1IsRUFEUSxFQUNKLEVBREksRUFFdEIsRUFGc0IsRUFFbEIsRUFGa0IsRUFFZCxFQUZjLEVBRVYsRUFGVSxFQUVOLEVBRk0sRUFFRixFQUZFLEVBRUUsRUFGRixFQUd0QixFQUhzQixFQUdsQixFQUhrQixFQUdkLEVBSGMsRUFHVixFQUhVLEVBR04sRUFITSxFQUdGLEVBSEUsRUFHRSxFQUhGLEVBSXRCLEVBSnNCLEVBSWxCLEVBSmtCLEVBSWQsRUFKYyxFQUlWLEVBSlUsRUFJTixFQUpNLEVBSUYsRUFKRSxFQUlFLEVBSkYsRUFLdEIsRUFMc0IsRUFLbEIsRUFMa0IsRUFLZCxFQUxjLEVBS1YsRUFMVSxFQUtOLEVBTE0sRUFLRixFQUxFLEVBS0UsRUFMRjtBQUE3QixDQVJ1QixFQWV2QjtBQUFFM0QsR0FBQyxFQUFDLENBQUo7QUFBT0MsR0FBQyxFQUFDLENBQVQ7QUFBWUMsR0FBQyxFQUFDLENBQWQ7QUFBaUJDLEdBQUMsRUFBQyxDQUFuQjtBQUFzQndELE1BQUksRUFBRSxDQUNyQixFQURxQixFQUNqQixFQURpQixFQUNiLEVBRGEsRUFDVCxFQURTLEVBRXJCLEVBRnFCLEVBRWpCLEVBRmlCLEVBRWIsRUFGYSxFQUVULEVBRlMsRUFHckIsRUFIcUIsRUFHakIsRUFIaUIsRUFHYixFQUhhLEVBR1QsRUFIUyxFQUlyQixFQUpxQixFQUlqQixFQUppQixFQUliLEVBSmEsRUFJVCxFQUpTO0FBQTVCLENBZnVCLENBQXhCLEMsQ0F1QkE7O0FBQ0EsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCQyxLQUFyQixFQUE0QkMsUUFBNUIsRUFDQTtBQUNJO0FBQ0gsT0FBSy9ELENBQUwsR0FBVzZELEtBQVg7QUFDQSxPQUFLNUQsQ0FBTCxHQUFXNkQsS0FBWDtBQUNBLE9BQUt2QixJQUFMLEdBQWF3QixRQUFiO0FBQ0EsT0FBS0MsUUFBTCxHQUFpQixJQUFqQjtBQUNHLE9BQUtDLFlBQUwsR0FBb0IsQ0FBcEIsQ0FOSixDQU9JOztBQUNBLE9BQUtoQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsT0FBS0ssTUFBTCxHQUFlLElBQWY7QUFFSCxDLENBRUQ7OztBQUNBLFNBQVNtQixPQUFULEdBQW1CO0FBQ2xCLE9BQUsxQixHQUFMLEdBQVcsRUFBWDtBQUNBLE9BQUs3QixDQUFMLEdBQVUsQ0FBVjtBQUNHLE9BQUtDLENBQUwsR0FBVSxDQUFWO0FBQ0gsT0FBSytELE1BQUwsR0FBYyxDQUFkO0FBQ0E7O0FBRURULE9BQU8sQ0FBQy9CLFNBQVIsQ0FBa0J5QyxnQkFBbEIsR0FBcUMsVUFBU0MsTUFBVCxFQUFpQmxFLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjtBQUMzRCxPQUFLRCxDQUFMLEdBQVVBLENBQVY7QUFDRyxPQUFLQyxDQUFMLEdBQVVBLENBQVY7O0FBRUEsTUFBR2lFLE1BQU0sQ0FBQ0MsTUFBUCxJQUFnQm5FLENBQUMsR0FBR0MsQ0FBdkIsRUFBMkI7QUFBRSxXQUFPLEtBQVA7QUFBZTs7QUFFNUMsT0FBSzRCLEdBQUwsQ0FBU3NDLE1BQVQsR0FBa0IsQ0FBbEI7O0FBQ0MsT0FBSSxJQUFJcEUsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHRSxDQUFuQixFQUFzQkYsQ0FBQyxFQUF2QixFQUEyQjtBQUMxQixTQUFJLElBQUlELEVBQUMsR0FBRyxDQUFaLEVBQWVBLEVBQUMsR0FBR0UsQ0FBbkIsRUFBc0JGLEVBQUMsRUFBdkIsRUFBMkI7QUFDOUIsV0FBSytCLEdBQUwsQ0FBU3VDLElBQVQsQ0FBZSxJQUFJVixJQUFKLENBQVM1RCxFQUFULEVBQVlDLENBQVosRUFBZW1FLE1BQU0sQ0FBR3BFLEVBQUMsR0FBSUUsQ0FBQyxHQUFHRCxDQUFaLENBQXJCLENBQWY7QUFDQTtBQUNFOztBQUNELFNBQU8sSUFBUDtBQUNILENBYkQ7O0FBZ0JBd0QsT0FBTyxDQUFDL0IsU0FBUixDQUFrQjZDLFlBQWxCLEdBQWlDLFVBQVNDLFNBQVQsRUFBb0I7QUFDcEQsT0FBSSxJQUFJQyxDQUFSLElBQWFELFNBQWIsRUFBd0I7QUFDakIsUUFBSVIsUUFBUSxHQUFHUSxTQUFTLENBQUNDLENBQUQsQ0FBeEI7O0FBQ0EsUUFBR1QsUUFBUSxDQUFDaEUsQ0FBVCxHQUFhLENBQWIsSUFBa0JnRSxRQUFRLENBQUMvRCxDQUFULEdBQWEsQ0FBL0IsSUFBb0MrRCxRQUFRLENBQUNoRSxDQUFULElBQWMsS0FBS0UsQ0FBdkQsSUFBNEQ4RCxRQUFRLENBQUMvRCxDQUFULElBQWMsS0FBS0UsQ0FBL0UsSUFBcUY2RCxRQUFRLENBQUNoRSxDQUFULEdBQVdnRSxRQUFRLENBQUM5RCxDQUFyQixHQUF3QixLQUFLQSxDQUFqSCxJQUF1SDhELFFBQVEsQ0FBQy9ELENBQVQsR0FBVytELFFBQVEsQ0FBQzdELENBQXJCLEdBQXdCLEtBQUtBLENBQW5KLElBQXdKNkQsUUFBUSxDQUFDTCxJQUFULENBQWNVLE1BQWQsSUFBdUJMLFFBQVEsQ0FBQzlELENBQVQsR0FBVzhELFFBQVEsQ0FBQzdELENBQXRNLEVBQTBNO0FBQy9NO0FBQ007O0FBQ0QsU0FBSSxJQUFJRixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUcrRCxRQUFRLENBQUM3RCxDQUE1QixFQUErQkYsQ0FBQyxFQUFoQyxFQUFvQztBQUN6QyxXQUFJLElBQUlELEdBQUMsR0FBRyxDQUFaLEVBQWVBLEdBQUMsR0FBR2dFLFFBQVEsQ0FBQzlELENBQTVCLEVBQStCRixHQUFDLEVBQWhDLEVBQW9DO0FBQ3ZCLFlBQUkwRSxPQUFPLEdBQUssQ0FBQ1YsUUFBUSxDQUFDL0QsQ0FBVCxHQUFhQSxDQUFkLElBQW1CLEtBQUtDLENBQXpCLEdBQThCOEQsUUFBUSxDQUFDaEUsQ0FBdkMsR0FBMkNBLEdBQTFEO0FBQ0EsYUFBSytCLEdBQUwsQ0FBUzJDLE9BQVQsRUFBa0JWLFFBQWxCLEdBQTZCQSxRQUE3QjtBQUNaLGFBQUtqQyxHQUFMLENBQVMyQyxPQUFULEVBQWtCVCxZQUFsQixHQUFpQ0QsUUFBUSxDQUFDTCxJQUFULENBQWlCMUQsQ0FBQyxHQUFHK0QsUUFBUSxDQUFDOUQsQ0FBZCxHQUFtQkYsR0FBbkMsQ0FBakM7QUFDQTtBQUNEO0FBQ0Q7QUFDRCxDQWRELEMsQ0FnQkE7OztBQUNBLFNBQVMyRSxXQUFULENBQXFCQyxFQUFyQixFQUF5QjtBQUN4QixPQUFLNUUsQ0FBTCxHQUFVLENBQVY7QUFDQSxPQUFLQyxDQUFMLEdBQVUsQ0FBVjtBQUNBLE9BQUtzQyxJQUFMLEdBQVlxQyxFQUFaO0FBQ0E7O0FBRURELFdBQVcsQ0FBQ2pELFNBQVosQ0FBc0JtRCxPQUF0QixHQUFnQyxVQUFTQyxFQUFULEVBQWFDLEVBQWIsRUFBaUI7QUFDaEQsTUFBR2pELFdBQVcsQ0FBQ0MsR0FBWixDQUFnQkMsT0FBTyxDQUFDLEtBQUtoQyxDQUFOLEVBQVMsS0FBS0MsQ0FBZCxDQUF2QixFQUF5Q3FDLE1BQXpDLElBQW1ELElBQXRELEVBQTREO0FBQzNEUixlQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FBQyxLQUFLaEMsQ0FBTixFQUFTLEtBQUtDLENBQWQsQ0FBdkIsRUFBeUNxQyxNQUF6QyxHQUFrRCxJQUFsRDtBQUNHOztBQUNELE9BQUt0QyxDQUFMLEdBQVM4RSxFQUFUO0FBQ0gsT0FBSzdFLENBQUwsR0FBUzhFLEVBQVQ7QUFFQWpELGFBQVcsQ0FBQ0MsR0FBWixDQUFnQkMsT0FBTyxDQUFDOEMsRUFBRCxFQUFLQyxFQUFMLENBQXZCLEVBQWlDekMsTUFBakMsR0FBMEMsSUFBMUM7QUFDQSxDQVJELEMsQ0FZQTs7O0FBQ0EsU0FBU04sT0FBVCxDQUFpQmhDLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjtBQUN0QixTQUFPRCxDQUFDLEdBQUlwQixRQUFRLEdBQUdxQixDQUF2QjtBQUNBOztBQUVELFNBQVMrRSxRQUFULENBQWtCakYsTUFBbEIsRUFBMEJrRixRQUExQixFQUFvQ0MsSUFBcEMsRUFBMENDLFNBQTFDLEVBQXFEO0FBQ3BELE1BQUcsQ0FBQ0EsU0FBSixFQUFlO0FBQUUsV0FBT3BGLE1BQU0sQ0FBQyxDQUFELENBQWI7QUFBbUI7O0FBQ3BDbUYsTUFBSSxHQUFHQSxJQUFJLEdBQUdELFFBQWQ7O0FBRUEsT0FBSWpGLENBQUosSUFBU0QsTUFBVCxFQUFpQjtBQUNoQixRQUFHQSxNQUFNLENBQUNDLENBQUQsQ0FBTixDQUFVb0YsR0FBVixJQUFlRixJQUFsQixFQUF3QjtBQUFFLGFBQU9uRixNQUFNLENBQUNDLENBQUQsQ0FBYjtBQUFtQjtBQUM3QztBQUNELEMsQ0FFRDs7O0FBQ0FxRixNQUFNLENBQUNDLE1BQVAsR0FBZ0IsWUFBVztBQUMxQjlHLEtBQUcsR0FBRytHLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ0MsVUFBdEMsQ0FBaUQsSUFBakQsQ0FBTjtBQUNBQyx1QkFBcUIsQ0FBQ0MsUUFBRCxDQUFyQixDQUYwQixDQUl2Qjs7QUFDSE4sUUFBTSxDQUFDTyxnQkFBUCxDQUF3QixTQUF4QixFQUFtQyxVQUFTQyxDQUFULEVBQVk7QUFDOUMsUUFBR0EsQ0FBQyxDQUFDQyxPQUFGLElBQWEsRUFBYixJQUFtQkQsQ0FBQyxDQUFDQyxPQUFGLElBQVksRUFBbEMsRUFBdUM7QUFBRTVHLGNBQVEsQ0FBQzJHLENBQUMsQ0FBQ0MsT0FBSCxDQUFSLEdBQXNCLElBQXRCO0FBQTZCO0FBQ3RFLEdBRkQ7QUFHQVQsUUFBTSxDQUFDTyxnQkFBUCxDQUF3QixPQUF4QixFQUFpQyxVQUFTQyxDQUFULEVBQVk7QUFDNUMsUUFBR0EsQ0FBQyxDQUFDQyxPQUFGLElBQWEsRUFBYixJQUFtQkQsQ0FBQyxDQUFDQyxPQUFGLElBQWEsRUFBbkMsRUFBdUM7QUFBRTVHLGNBQVEsQ0FBQzJHLENBQUMsQ0FBQ0MsT0FBSCxDQUFSLEdBQXNCLEtBQXRCO0FBQThCO0FBQ3BFLEdBRkosRUFSMEIsQ0FZdkI7O0FBQ0E5QyxRQUFNLENBQUNDLE1BQVAsR0FBZ0IsQ0FBQ3NDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ08sS0FBdkMsRUFDWlIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFlBQXhCLEVBQXNDUSxNQUQxQixDQUFoQjtBQUdBbkYsVUFBUSxHQUFHLElBQUlvRixLQUFKLEVBQVg7O0FBQ0hwRixVQUFRLENBQUNxRixPQUFULEdBQW1CLFlBQVc7QUFDN0IxSCxPQUFHLEdBQUcsSUFBTjtBQUNBMkgsU0FBSyxDQUFDLDBCQUFELENBQUw7QUFDQSxHQUhEOztBQUlBdEYsVUFBUSxDQUFDeUUsTUFBVCxHQUFrQixZQUFXO0FBQUV2RSxhQUFTLEdBQUcsSUFBWjtBQUFtQixHQUFsRDs7QUFDR0YsVUFBUSxDQUFDdUYsR0FBVCxHQUFldEYsV0FBZjtBQUVBZ0IsYUFBVyxDQUFDcUMsZ0JBQVosQ0FBNkIxRixPQUE3QixFQUFzQ0csUUFBdEMsRUFBZ0RDLFNBQWhEO0FBQ0hpRCxhQUFXLENBQUN5QyxZQUFaLENBQXlCYixpQkFBekI7O0FBQ0E1QixhQUFXLENBQUNDLEdBQVosQ0FBa0IsSUFBSW5ELFFBQUwsR0FBaUIsQ0FBbEMsRUFBc0NxRCxVQUF0QyxHQUFtRCxZQUFXO0FBQUVvRSxXQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWjtBQUFrQyxHQUFsRzs7QUFFQSxNQUFJQyxNQUFNLEdBQUcsSUFBSTVCLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBYjtBQUFpQzRCLFFBQU0sQ0FBQzFCLE9BQVAsQ0FBZSxDQUFmLEVBQWtCLENBQWxCO0FBRTlCLE1BQUkyQixPQUFPLEdBQUcsSUFBSTdCLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBZDtBQUFrQzZCLFNBQU8sQ0FBQzNCLE9BQVIsQ0FBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkI7QUFDbEMsTUFBSTRCLE9BQU8sR0FBRyxJQUFJOUIsV0FBSixDQUFnQixDQUFoQixDQUFkO0FBQWtDOEIsU0FBTyxDQUFDNUIsT0FBUixDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUNsQyxNQUFJNkIsT0FBTyxHQUFHLElBQUkvQixXQUFKLENBQWdCLENBQWhCLENBQWQ7QUFBa0MrQixTQUFPLENBQUM3QixPQUFSLENBQWdCLENBQWhCLEVBQW1CLENBQW5CO0FBRXJDLE1BQUk4QixLQUFLLEdBQUcsSUFBSWhDLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBWjtBQUFnQ2dDLE9BQUssQ0FBQzlCLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCO0FBQ2hDLE1BQUkrQixLQUFLLEdBQUcsSUFBSWpDLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBWjtBQUFnQ2lDLE9BQUssQ0FBQy9CLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCO0FBQ2hDLE1BQUlnQyxLQUFLLEdBQUcsSUFBSWxDLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBWjtBQUFnQ2tDLE9BQUssQ0FBQ2hDLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCO0FBQzdCLE1BQUlpQyxLQUFLLEdBQUcsSUFBSW5DLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBWjtBQUFnQ21DLE9BQUssQ0FBQ2pDLE9BQU4sQ0FBYyxFQUFkLEVBQWtCLENBQWxCO0FBRWhDLE1BQUlrQyxTQUFTLEdBQUcsSUFBSXBDLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBaEI7QUFBb0NvQyxXQUFTLENBQUNsQyxPQUFWLENBQWtCLENBQWxCLEVBQW9CLENBQXBCO0FBQ3BDLE1BQUltQyxTQUFTLEdBQUcsSUFBSXJDLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBaEI7QUFBb0NxQyxXQUFTLENBQUNuQyxPQUFWLENBQWtCLENBQWxCLEVBQW9CLENBQXBCO0FBR3BDLE1BQUlvQyxRQUFRLEdBQUcsSUFBSXRDLFdBQUosQ0FBZ0IsQ0FBaEIsQ0FBZjtBQUFtQ3NDLFVBQVEsQ0FBQ3BDLE9BQVQsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEI7QUFFbkMsTUFBSXFDLE1BQU0sR0FBRyxJQUFJdkMsV0FBSixDQUFnQixDQUFoQixDQUFiO0FBQWlDdUMsUUFBTSxDQUFDckMsT0FBUCxDQUFlLENBQWYsRUFBa0IsQ0FBbEI7QUFFakMsTUFBSXNDLE9BQU8sR0FBRyxJQUFJeEMsV0FBSixDQUFnQixDQUFoQixDQUFkO0FBQWtDd0MsU0FBTyxDQUFDdEMsT0FBUixDQUFnQixDQUFoQixFQUFtQixDQUFuQjtBQUVsQyxNQUFJdUMsTUFBTSxHQUFHLElBQUl6QyxXQUFKLENBQWdCLENBQWhCLENBQWI7QUFBaUN5QyxRQUFNLENBQUN2QyxPQUFQLENBQWUsQ0FBZixFQUFpQixDQUFqQjtBQUVqQyxNQUFJd0MsSUFBSSxHQUFHLElBQUkxQyxXQUFKLENBQWdCLENBQWhCLENBQVg7QUFBK0IwQyxNQUFJLENBQUN4QyxPQUFMLENBQWEsQ0FBYixFQUFlLENBQWY7QUFFL0IsTUFBSXlDLEtBQUssR0FBRyxJQUFJM0MsV0FBSixDQUFnQixFQUFoQixDQUFaO0FBQWlDMkMsT0FBSyxDQUFDekMsT0FBTixDQUFjLENBQWQsRUFBZ0IsQ0FBaEI7QUFDakMsTUFBSTBDLE1BQU0sR0FBRyxJQUFJNUMsV0FBSixDQUFnQixFQUFoQixDQUFiO0FBQWtDNEMsUUFBTSxDQUFDMUMsT0FBUCxDQUFlLEVBQWYsRUFBa0IsQ0FBbEI7QUFFbEMsTUFBSTJDLFNBQVMsR0FBRyxJQUFJN0MsV0FBSixDQUFnQixFQUFoQixDQUFoQjtBQUFxQzZDLFdBQVMsQ0FBQzNDLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBb0IsQ0FBcEI7QUFFckMsTUFBSTRDLElBQUksR0FBRyxJQUFJOUMsV0FBSixDQUFnQixFQUFoQixDQUFYO0FBQWdDOEMsTUFBSSxDQUFDNUMsT0FBTCxDQUFhLEVBQWIsRUFBZ0IsQ0FBaEI7QUFFaEMsTUFBSTZDLFdBQVcsR0FBRyxJQUFJL0MsV0FBSixDQUFnQixFQUFoQixDQUFsQjtBQUF1QytDLGFBQVcsQ0FBQzdDLE9BQVosQ0FBb0IsRUFBcEIsRUFBdUIsQ0FBdkI7QUFFdkMsTUFBSThDLFVBQVUsR0FBRyxJQUFJaEQsV0FBSixDQUFnQixFQUFoQixDQUFqQjtBQUFzQ2dELFlBQVUsQ0FBQzlDLE9BQVgsQ0FBbUIsRUFBbkIsRUFBc0IsQ0FBdEI7QUFDdEMsTUFBSStDLFVBQVUsR0FBRyxJQUFJakQsV0FBSixDQUFnQixFQUFoQixDQUFqQjtBQUFzQ2lELFlBQVUsQ0FBQy9DLE9BQVgsQ0FBbUIsRUFBbkIsRUFBc0IsQ0FBdEI7QUFFdEMsTUFBSWdELFNBQVMsR0FBRyxJQUFJbEQsV0FBSixDQUFnQixFQUFoQixDQUFoQjtBQUFxQ2tELFdBQVMsQ0FBQ2hELE9BQVYsQ0FBa0IsRUFBbEIsRUFBcUIsQ0FBckI7QUFFeEMsQ0FuRUQsQyxDQXVFQTs7O0FBQ0EsU0FBU2MsUUFBVCxHQUFvQjtBQUNoQixNQUFJbkgsR0FBRyxJQUFJLElBQVgsRUFBaUI7QUFBRTtBQUFTOztBQUM1QixNQUFJLENBQUN1QyxTQUFMLEVBQWdCO0FBQUUyRSx5QkFBcUIsQ0FBQ0MsUUFBRCxDQUFyQjtBQUFpQztBQUFTOztBQUUvRCxNQUFJbUMsZ0JBQWdCLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUF2QixDQUptQixDQUtoQjs7QUFDSCxNQUFJQyxHQUFHLEdBQUc5RixJQUFJLENBQUNyQyxLQUFMLENBQVdpSSxJQUFJLENBQUNDLEdBQUwsS0FBYSxJQUF4QixDQUFWOztBQUNBLE1BQUdDLEdBQUcsSUFBSW5KLGFBQVYsRUFBd0I7QUFDdkJBLGlCQUFhLEdBQUdtSixHQUFoQjtBQUNBakosb0JBQWdCLEdBQUdELFVBQW5CO0FBQ0FBLGNBQVUsR0FBRyxDQUFiO0FBQ0EsR0FKRCxNQUlPO0FBQ0FBLGNBQVU7QUFDYixHQWJlLENBZWhCOzs7QUFDSCxNQUFHLENBQUNpQyxNQUFNLENBQUNZLGVBQVAsQ0FBdUJrRyxnQkFBdkIsQ0FBSixFQUE4QztBQUM3QyxRQUFHNUksUUFBUSxDQUFDLEVBQUQsQ0FBUixJQUFnQjhCLE1BQU0sQ0FBQ3dCLE9BQVAsRUFBbkIsRUFBb0M7QUFDMUJ4QixZQUFNLENBQUM4QixJQUFQLENBQVlnRixnQkFBWjtBQUNILEtBRlAsTUFFYSxJQUFJNUksUUFBUSxDQUFDLEVBQUQsQ0FBUixJQUFnQjhCLE1BQU0sQ0FBQ3lCLFNBQVAsRUFBcEIsRUFBd0M7QUFDM0N6QixZQUFNLENBQUMrQixNQUFQLENBQWMrRSxnQkFBZDtBQUNILEtBRk0sTUFFQSxJQUFHNUksUUFBUSxDQUFDLEVBQUQsQ0FBUixJQUFnQjhCLE1BQU0sQ0FBQzBCLFNBQVAsRUFBbkIsRUFBdUM7QUFDMUMxQixZQUFNLENBQUM0QixNQUFQLENBQWNrRixnQkFBZDtBQUNILEtBRk0sTUFFQSxJQUFHNUksUUFBUSxDQUFDLEVBQUQsQ0FBUixJQUFnQjhCLE1BQU0sQ0FBQzJCLFVBQVAsRUFBbkIsRUFBd0M7QUFDM0MzQixZQUFNLENBQUM2QixPQUFQLENBQWVpRixnQkFBZjtBQUNIO0FBQ0osR0ExQmUsQ0E0QmhCOzs7QUFDSTlFLFFBQU0sQ0FBQ0ksTUFBUCxDQUFjcEMsTUFBTSxDQUFDTyxRQUFQLENBQWdCLENBQWhCLElBQXNCUCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsQ0FBbEIsSUFBdUIsQ0FBM0QsRUFDSU4sTUFBTSxDQUFDTyxRQUFQLENBQWdCLENBQWhCLElBQXNCUCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsQ0FBbEIsSUFBdUIsQ0FEakQ7QUFHSCxNQUFJNEcsZUFBZSxHQUFHcEcsV0FBVyxDQUFDQyxHQUFaLENBQWdCQyxPQUFPLENBQ2hEaEIsTUFBTSxDQUFDRSxRQUFQLENBQWdCLENBQWhCLENBRGdELEVBQzVCRixNQUFNLENBQUNFLFFBQVAsQ0FBZ0IsQ0FBaEIsQ0FENEIsQ0FBdkIsRUFDZ0I4QyxRQUR0QztBQUVBLE1BQUltRSxlQUFlLEdBQUdyRyxXQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FDaERoQixNQUFNLENBQUNHLE1BQVAsQ0FBYyxDQUFkLENBRGdELEVBQzlCSCxNQUFNLENBQUNHLE1BQVAsQ0FBYyxDQUFkLENBRDhCLENBQXZCLEVBQ1k2QyxRQURsQyxDQWxDZSxDQXFDWjs7QUFDQXhGLEtBQUcsQ0FBQzRKLFNBQUosR0FBZ0IsU0FBaEI7QUFDQTVKLEtBQUcsQ0FBQzZKLFFBQUosQ0FBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CckYsTUFBTSxDQUFDQyxNQUFQLENBQWMsQ0FBZCxDQUFuQixFQUFxQ0QsTUFBTSxDQUFDQyxNQUFQLENBQWMsQ0FBZCxDQUFyQzs7QUFHSixPQUFJLElBQUlxRixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUd4RyxXQUFXLENBQUNvQyxNQUEvQixFQUF1Q29FLENBQUMsRUFBeEMsRUFBNEM7QUFDOUMsU0FBSSxJQUFJckksQ0FBQyxHQUFHK0MsTUFBTSxDQUFDRSxhQUFQLENBQXFCLENBQXJCLENBQVosRUFBcUNqRCxDQUFDLElBQUkrQyxNQUFNLENBQUNHLFdBQVAsQ0FBbUIsQ0FBbkIsQ0FBMUMsRUFBaUUsRUFBRWxELENBQW5FLEVBQXNFO0FBQ2xFLFdBQUksSUFBSUQsR0FBQyxHQUFHZ0QsTUFBTSxDQUFDRSxhQUFQLENBQXFCLENBQXJCLENBQVosRUFBcUNsRCxHQUFDLElBQUlnRCxNQUFNLENBQUNHLFdBQVAsQ0FBbUIsQ0FBbkIsQ0FBMUMsRUFBaUUsRUFBRW5ELEdBQW5FLEVBQXNFO0FBQzVELFlBQUdzSSxDQUFDLElBQUUsQ0FBTixFQUFTO0FBQ1QsY0FBSS9FLEtBQUksR0FBRzNELFNBQVMsQ0FBQ2tDLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQkMsT0FBTyxDQUFDaEMsR0FBRCxFQUFHQyxDQUFILENBQXZCLEVBQThCc0MsSUFBL0IsQ0FBcEI7QUFFVC9ELGFBQUcsQ0FBQytKLFNBQUosQ0FBYzFILFFBQWQsRUFDSDBDLEtBQUksQ0FBQ3hELE1BQUwsQ0FBWSxDQUFaLEVBQWVDLENBRFosRUFDZXVELEtBQUksQ0FBQ3hELE1BQUwsQ0FBWSxDQUFaLEVBQWVFLENBRDlCLEVBQ2lDc0QsS0FBSSxDQUFDeEQsTUFBTCxDQUFZLENBQVosRUFBZUcsQ0FEaEQsRUFDbURxRCxLQUFJLENBQUN4RCxNQUFMLENBQVksQ0FBWixFQUFlSSxDQURsRSxFQUVINkMsTUFBTSxDQUFDeEMsTUFBUCxDQUFjLENBQWQsSUFBb0JSLEdBQUMsR0FBR3RCLFNBRnJCLEVBRWlDc0UsTUFBTSxDQUFDeEMsTUFBUCxDQUFjLENBQWQsSUFBb0JQLENBQUMsR0FBR3RCLFVBRnpELEVBR1NELFNBSFQsRUFHb0JDLFVBSHBCO0FBSVU7O0FBQ0wsWUFBSTJELE1BQU0sR0FBR1IsV0FBVyxDQUFDQyxHQUFaLENBQWdCQyxPQUFPLENBQUNoQyxHQUFELEVBQUdDLENBQUgsQ0FBdkIsRUFBOEJxQyxNQUEzQzs7QUFDVCxZQUFHQSxNQUFNLElBQUksSUFBVixJQUFrQmhDLFdBQVcsQ0FBQ2dDLE1BQU0sQ0FBQ0MsSUFBUixDQUFYLENBQXlCN0IsTUFBekIsSUFBbUM0SCxDQUF4RCxFQUEyRDtBQUMxRCxjQUFJRSxVQUFVLEdBQUdsSSxXQUFXLENBQUNnQyxNQUFNLENBQUNDLElBQVIsQ0FBNUI7QUFFQS9ELGFBQUcsQ0FBQytKLFNBQUosQ0FBYzFILFFBQWQsRUFDQzJILFVBQVUsQ0FBQ3pJLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJDLENBRHRCLEVBQ3lCd0ksVUFBVSxDQUFDekksTUFBWCxDQUFrQixDQUFsQixFQUFxQkUsQ0FEOUMsRUFFQ3VJLFVBQVUsQ0FBQ3pJLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJHLENBRnRCLEVBRXlCc0ksVUFBVSxDQUFDekksTUFBWCxDQUFrQixDQUFsQixFQUFxQkksQ0FGOUMsRUFHQzZDLE1BQU0sQ0FBQ3hDLE1BQVAsQ0FBYyxDQUFkLElBQW9CUixHQUFDLEdBQUd0QixTQUF4QixHQUFxQzhKLFVBQVUsQ0FBQ2hJLE1BQVgsQ0FBa0IsQ0FBbEIsQ0FIdEMsRUFJQ3dDLE1BQU0sQ0FBQ3hDLE1BQVAsQ0FBYyxDQUFkLElBQW9CUCxDQUFDLEdBQUd0QixVQUF4QixHQUFzQzZKLFVBQVUsQ0FBQ2hJLE1BQVgsQ0FBa0IsQ0FBbEIsQ0FKdkMsRUFLQ2dJLFVBQVUsQ0FBQ3pJLE1BQVgsQ0FBa0IsQ0FBbEIsRUFBcUJHLENBTHRCLEVBS3lCc0ksVUFBVSxDQUFDekksTUFBWCxDQUFrQixDQUFsQixFQUFxQkksQ0FMOUM7QUFNQTs7QUFFVyxZQUFHbUksQ0FBQyxJQUFJLENBQUwsSUFBVXhHLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQkMsT0FBTyxDQUFDaEMsR0FBRCxFQUFHQyxDQUFILENBQXZCLEVBQThCZ0UsWUFBOUIsSUFBNEMsQ0FBdEQsSUFBMkRuQyxXQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FBQ2hDLEdBQUQsRUFBR0MsQ0FBSCxDQUF2QixFQUE4QitELFFBQTlCLElBQXdDa0UsZUFBbkcsSUFBc0hwRyxXQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FBQ2hDLEdBQUQsRUFBR0MsQ0FBSCxDQUF2QixFQUE4QitELFFBQTlCLElBQXdDbUUsZUFBakssRUFBa0w7QUFDN0s1RSxjQUFJLEdBQUczRCxTQUFTLENBQUNrQyxXQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FBQ2hDLEdBQUQsRUFBR0MsQ0FBSCxDQUF2QixFQUE4QmdFLFlBQS9CLENBQWhCO0FBQ0FsRSxnQkFBTSxHQUFHaUYsUUFBUSxDQUFDekIsSUFBSSxDQUFDeEQsTUFBTixFQUFjd0QsSUFBSSxDQUFDa0YsY0FBbkIsRUFBbUNsRixJQUFJLENBQUM0QixTQUF4QyxDQUFqQjtBQUNBM0csYUFBRyxDQUFDK0osU0FBSixDQUFjMUgsUUFBZCxFQUF3QmQsTUFBTSxDQUFDQyxDQUEvQixFQUFrQ0QsTUFBTSxDQUFDRSxDQUF6QyxFQUE0Q0YsTUFBTSxDQUFDRyxDQUFuRCxFQUFzREgsTUFBTSxDQUFDSSxDQUE3RCxFQUFnRTZDLE1BQU0sQ0FBQ3hDLE1BQVAsQ0FBYyxDQUFkLElBQW9CUixHQUFDLEdBQUd0QixTQUF4RixFQUFvR3NFLE1BQU0sQ0FBQ3hDLE1BQVAsQ0FBYyxDQUFkLElBQW9CUCxDQUFDLEdBQUd0QixVQUE1SCxFQUF5SUQsU0FBekksRUFBb0pDLFVBQXBKO0FBQ2hCO0FBQ0Q7QUFDRTs7QUFFRCxRQUFJMkosQ0FBQyxJQUFJLENBQVQsRUFBWTtBQUNiLFVBQUl2SSxPQUFNLEdBQUdpQixNQUFNLENBQUNTLE9BQVAsQ0FBZVQsTUFBTSxDQUFDUSxTQUF0QixDQUFiO0FBQ0FoRCxTQUFHLENBQUMrSixTQUFKLENBQWMxSCxRQUFkLEVBQ0NkLE9BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUMsQ0FEWCxFQUNjRCxPQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVFLENBRHhCLEVBRUNGLE9BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUcsQ0FGWCxFQUVjSCxPQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVJLENBRnhCLEVBR0M2QyxNQUFNLENBQUN4QyxNQUFQLENBQWMsQ0FBZCxJQUFtQlEsTUFBTSxDQUFDTyxRQUFQLENBQWdCLENBQWhCLENBSHBCLEVBSUN5QixNQUFNLENBQUN4QyxNQUFQLENBQWMsQ0FBZCxJQUFtQlEsTUFBTSxDQUFDTyxRQUFQLENBQWdCLENBQWhCLENBSnBCLEVBS0NQLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixDQUFsQixDQUxELEVBS3VCTixNQUFNLENBQUNNLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FMdkI7QUFNQTtBQUNELEdBbEZrQixDQW9GaEI7OztBQUNBLE1BQUl2QixNQUFNLEdBQUdpQixNQUFNLENBQUNTLE9BQVAsQ0FBZVQsTUFBTSxDQUFDUSxTQUF0QixDQUFiO0FBQ0hoRCxLQUFHLENBQUMrSixTQUFKLENBQWMxSCxRQUFkLEVBQXdCZCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVDLENBQWxDLEVBQXFDRCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVFLENBQS9DLEVBQWtERixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVHLENBQTVELEVBQStESCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVJLENBQXpFLEVBQTRFNkMsTUFBTSxDQUFDeEMsTUFBUCxDQUFjLENBQWQsSUFBbUJRLE1BQU0sQ0FBQ08sUUFBUCxDQUFnQixDQUFoQixDQUEvRixFQUFtSHlCLE1BQU0sQ0FBQ3hDLE1BQVAsQ0FBYyxDQUFkLElBQW1CUSxNQUFNLENBQUNPLFFBQVAsQ0FBZ0IsQ0FBaEIsQ0FBdEksRUFBMEpQLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixDQUFsQixDQUExSixFQUFnTE4sTUFBTSxDQUFDTSxVQUFQLENBQWtCLENBQWxCLENBQWhMO0FBRUFyQyxlQUFhLEdBQUc2SSxnQkFBaEI7QUFDQXBDLHVCQUFxQixDQUFDQyxRQUFELENBQXJCO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNscEJELHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9tYXBcIjtcblxuXG5cbiIsIi8vIGkgd2FudCBhIGNhbWVyYSBmb2xsb3dpbmcgdGhlIGNoYXIgYXJvdW5kIHRoZSBtYXBcblxuXG5sZXQgY3R4ID0gbnVsbDtcblxuLy8gY3JlYXRlIGEgbWFwIHdpdGggMTAqMTAgdGlsZVxubGV0IGdhbWVNYXAgPSBbXG5cdDAsIDAsIDAsIDAsIDAsIDYsIDUsIDUsIDcsIDAsIDI2LCAyNSwgMjUsIDI1LCAyNSwgMjUsIDI3LCAwLCAwLCAwLFxuXHQwLCAxLCAxLCAxLCAxLCAyMSwgMjAsIDIwLCAyMiwgMSwgMjksIDI4LCAyOCwgMjgsIDI4LCAyOCwgMzAsIDIsIDIsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDIxLCAyMCwgMjAsIDIyLCAxLCAyOSwgMjgsIDI4LCAyOCwgMjgsIDI4LCAzMCwgMiwgMiwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMjEsIDIwLCAyMCwgMjIsIDEsIDI5LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDMwLCAyLCAyLCAwLFxuXHQwLCAxLCAxLCAxLCAxLCAxNiwgMjAsIDE2LCAxOCwgMSwgMTYsIDE4LCAxNiwgMTksIDI4LCAxOCwgMTgsIDIsIDIsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDIsIDIsIDIsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDIsIDIsIDIsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDUsIDUsIDUsIDUsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDUsIDIsIDIsIDUsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG4gICAgMCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgNSwgMiwgMiwgNSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgNSwgMiwgNSwgNSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNFxuXTtcbi8vIOavj+S4quWcsOegluWkmuWwkXBpeGVsXG5sZXQgdGlsZVdpZHRoID0gNDA7XG5sZXQgdGlsZUhlaWdodCA9IDQwO1xuLy8g5Zyw5Zu+5aSn5bCP5bCx5pivMTAqMTBcbmxldCBtYXBXaWR0aCA9IDIwO1xubGV0IG1hcEhlaWdodCA9IDIwO1xuLy8gZnJhbWVyYXRlXG5sZXQgY3VycmVudFNlY29uZCA9IDA7XG5sZXQgZnJhbWVDb3VudCA9IDA7XG5sZXQgZnJhbWVzTGFzdFNlY29uZCA9IDA7XG5sZXQgbGFzdEZyYW1lVGltZSA9IDA7XG5cblxuLy8ga2V5Q29kZSA6IGJvb2xlYW4gdG8gdGVsbCB1cyB3aGljaCBvbmUgYXJlIHByZXNzZWRcbmxldCBoZWxkS2V5cyA9IHtcbiAgICAvLyAzNzogbGVmdFxuICAgIDM3IDogZmFsc2UsXG4gICAgLy8gMzg6IHVwXG4gICAgMzggOiBmYWxzZSxcbiAgICAvLyAzOTogcmlnaHRcbiAgICAzOSA6IGZhbHNlLFxuICAgIC8vIDQwOiBkb3duXG4gICAgNDAgOiBmYWxzZVxuICAgIC8vIDMyOiBzcGFjZVxufTtcblxubGV0IGRpcmVjdGlvbnMgPSB7XG5cdHVwXHQ6IDAsXG5cdHJpZ2h0OiAxLFxuXHRkb3duOiAyLFxuXHRsZWZ0OiAzXG59O1xuXG5cbi8vIOWcsOadv+enjeexu1xubGV0IGZsb29yVHlwZXMgPSB7XG4gICAgc29saWQ6IDAsXG4gICAgcGF0aDogMSxcbiAgICBvY2VhbjogMlxufTtcblxuLy8g5pWw5a2X77yIZ2FtZU1hcO+8ieWvueW6lOS4iuminOiJsuWSjOWcsOadv+enjeexu1xuLy8gMDrlopnlo4EgMTrojYnlnLAgMjrpmYblnLAgIDQ6IOawtCAgXG4vLyA1Oum7hOiJsuWGhemDqOWimeWjgSA2OiDpu4ToibLlhoXpg6jlopnlo4Hlt6bop5IgNzrpu4ToibLlhoXpg6jlopnlo4Hlj7Pop5Jcbi8vIDIwOum7hOiJsuWGhemDqOWcsOadvyAyMTrpu4ToibLlhoXpg6jlopnlt6YgMjI66buE6Imy5YaF6YOo5aKZ5Y+zXG4vLyAyNTrmo5XoibLlhoXpg6jlopnlo4EgMjY65qOV6Imy5YaF6YOo5aKZ5aOB5bem6KeSIDI3OiDmo5XoibLlhoXpg6jlopnlo4Hlj7Pop5Jcbi8vIDI4OiDmo5XoibLlhoXpg6jlnLDmnb8gMjk6IOajleiJsuWGhemDqOWimeW3piAzMDrmo5XoibLlhoXpg6jlopnlj7Ncbi8vIDEwLTE5IOaIv+WtkOWkluinglxubGV0IHRpbGVUeXBlcyA9IHtcblx0MCA6IHsgY29sb3I6IFwiIzc5M2Q0Y1wiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDowLHk6MCx3OjQwLGg6NDB9XSB9LFxuXHQxIDogeyBjb2xvcjogXCIjNmRmN2IxXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6NDAseTowLHc6NDAsaDo0MH1dIH0sXG5cdDIgOiB7IGNvbG9yOiBcIiNjOTc0NjFcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo4MCx5OjAsdzo0MCxoOjQwfV1cdH0sXG4gICAgNCA6IHsgY29sb3I6IFwiIzAwOGRmMFwiLCBmbG9vcjogZmxvb3JUeXBlcy5vY2Vhbiwgc3ByaXRlOlt7eDoxNjAseTowLHc6NDAsaDo0MH1dIH0sXG4gICAgNSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoxMjAseTowLHc6NDAsaDo0MH1dIH0sXG4gICAgNiA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoxMjAseTo0MCx3OjQwLGg6NDB9XSB9LFxuICAgIDcgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6ODAseTo0MCx3OjQwLGg6NDB9XSB9LFxuICAgIFxuICAgIDEwIDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyNDAseTo0MCx3OjQwLGg6NDB9XX0sXG4gICAgMTEgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjQwLHc6NDAsaDo0MH1dfSxcbiAgICAxMiA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDEzIDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyNDAseTo4MCx3OjQwLGg6NDB9XX0sXG4gICAgMTQgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjgwLHc6NDAsaDo0MH1dfSxcbiAgICAxNSA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE2IDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyNDAseToxMjAsdzo0MCxoOjQwfV19LFxuICAgIDE3IDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyODAseToxMjAsdzo0MCxoOjQwfV19LFxuICAgIDE4IDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseToxMjAsdzo0MCxoOjQwfV19LFxuICAgIDE5IDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozNjAseToxMjAsdzo0MCxoOjQwfV19LFxuICAgIFxuICAgIDIwIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6NDAseTo0MCx3OjQwLGg6NDB9XX0sXG4gICAgMjEgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6ODAseTo4MCx3OjQwLGg6NDB9XX0sXG4gICAgMjIgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MTIwLHk6ODAsdzo0MCxoOjQwfV19LFxuXG4gICAgMjUgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6MTYwLHc6NDAsaDo0MH1dfSxcbiAgICAyNiA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyNDAseToxNjAsdzo0MCxoOjQwfV19LFxuICAgIDI3IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjE2MCx3OjQwLGg6NDB9XX0sXG4gICAgMjggOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDoyODAseToyMDAsdzo0MCxoOjQwfV19LFxuICAgIDI5IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjM2MCx5OjE2MCx3OjQwLGg6NDB9XX0sXG4gICAgMzAgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6MjAwLHc6NDAsaDo0MH1dfSxcbn07XG5cbmxldCBjb2xsaXNpb25zID0ge1xuXHRub25lXHRcdDogMCxcblx0c29saWRcdFx0OiAxXG59O1xuXG5sZXQgb2JqZWN0VHlwZXMgPSB7XG5cdDEgOiB7XG5cdFx0bmFtZSA6IFwiRmxvd2VyXCIsXG5cdFx0c3ByaXRlIDogW3t4OjQwLHk6MTgwLHc6NDAsaDoyMH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMubm9uZSxcblx0XHR6SW5kZXggOiAxXG5cdH0sXG5cdDIgOiB7XG5cdFx0bmFtZSA6IFwiZmVuY2VcIixcblx0XHRzcHJpdGUgOiBbe3g6NDAseToyMDAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG5cdH0sXG5cdDMgOiB7XG5cdFx0bmFtZSA6IFwiVHJlZVwiLFxuXHRcdHNwcml0ZSA6IFt7eDo4MCx5OjE2MCx3OjgwLGg6ODB9XSxcblx0XHRvZmZzZXQgOiBbLTIwLC0yMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAzXG4gICAgfSxcbiAgICA0IDoge1xuXHRcdG5hbWUgOiBcIm1hc2hyb29tc1wiLFxuXHRcdHNwcml0ZSA6IFt7eDo0MCx5OjE2MCx3OjQwLGg6MjB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLm5vbmUsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgNSA6IHtcblx0XHRuYW1lIDogXCJQaWcgU2hvcFwiLFxuXHRcdHNwcml0ZSA6IFt7eDoxNjAseToxNjAsdzo4MCxoOjgwfV0sXG5cdFx0b2Zmc2V0IDogWy0yMCwtMjBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogM1xuICAgIH0sXG4gICAgNiA6IHtcblx0XHRuYW1lIDogXCJkb251dHNcIixcblx0XHRzcHJpdGUgOiBbe3g6MzYwLHk6MCx3OjgwLGg6MTE1fV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5ub25lLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDcgOiB7XG5cdFx0bmFtZSA6IFwiY29va2luZ1wiLFxuXHRcdHNwcml0ZSA6IFt7eDoxNjAseTo4MCx3OjgwLGg6ODB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLm5vbmUsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgOCA6IHtcblx0XHRuYW1lIDogXCJjYXJwZXRcIixcblx0XHRzcHJpdGUgOiBbe3g6MCx5OjgwLHc6ODAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMubm9uZSxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICA5IDoge1xuXHRcdG5hbWUgOiBcImRlc2tcIixcblx0XHRzcHJpdGUgOiBbe3g6MCx5OjQwLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTAgOiB7XG5cdFx0bmFtZSA6IFwiY2hhaXJcIixcblx0XHRzcHJpdGUgOiBbe3g6MzIwLHk6MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDExIDoge1xuXHRcdG5hbWUgOiBcIlRyZWUgUGxhbnRcIixcblx0XHRzcHJpdGUgOiBbe3g6NDAseToxMjAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxMiA6IHtcblx0XHRuYW1lIDogXCJkcnVtXCIsXG5cdFx0c3ByaXRlIDogW3t4OjAseToyNDAsdzo4MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxMyA6IHtcblx0XHRuYW1lIDogXCJpbnN0cnVtZW50c1wiLFxuXHRcdHNwcml0ZSA6IFt7eDo4MCx5OjI0MCx3OjEyMCxoOjgwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxNCA6IHtcblx0XHRuYW1lIDogXCJCb29rU2hlbGZcIixcblx0XHRzcHJpdGUgOiBbe3g6MjAwLHk6MjQwLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTUgOiB7XG5cdFx0bmFtZSA6IFwic2F4b3Bob25lXCIsXG5cdFx0c3ByaXRlIDogW3t4OjI0MCx5OjI0MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDE2IDoge1xuXHRcdG5hbWUgOiBcIlJpZ2h0IEZhY2luZyBDaGFpclwiLFxuXHRcdHNwcml0ZSA6IFt7eDoyMDAseToyODAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbn07XG5cblxuLy8g54mp5ZOBXG5sZXQgaXRlbVR5cGVzID0ge1xuICAgIDEgOiB7XG5cdFx0bmFtZSA6IFwiY29jb251dFwiLFxuXHRcdG1heFN0YWNrIDogNSxcblx0XHRzcHJpdGUgOiBbe3g6MjQwLHk6MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXVxuICAgIH0sXG4gICAgMiA6IHtcblx0XHRuYW1lIDogXCJzdHJhd2JlcnJ5XCIsXG5cdFx0bWF4U3RhY2sgOiA1LFxuXHRcdHNwcml0ZSA6IFt7eDoyODAseTowLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdXG5cdH1cbn07XG5cblxuXG5sZXQgZ2FtZXRpbGUgPSBudWxsLCBnYW1ldGlsZVVSTCA9IFwic3JjL2ltYWdlcy90aWxlc2V0ZXN0dC5wbmdcIiwgYXJ0TG9hZGVkID0gZmFsc2U7XG5cblxuXG4vLyDliJvlu7rkuIDkuKrop5LoibIgKG1pdW1pdSlcbmxldCBtaXVtaXUgPSBuZXcgTWl1TWl1KCk7XG4vLyDliqDmm7TlpJrop5LoibLirIdcbmZ1bmN0aW9uIE1pdU1pdSgpIHtcbiAgICB0aGlzLnRpbGVGcm9tXHQ9IFsxLDFdO1xuICAgIC8vIG1pdW1pdeeahOS9jee9rlxuICAgIHRoaXMudGlsZVRvXHRcdD0gWzEyLDNdO1xuICAgIC8vIHRpbWUgaW4gbWlsbHNlY29uZHNcbiAgICB0aGlzLnRpbWVNb3ZlZFx0PSAwO1xuICAgIHRoaXMuZGVsYXlNb3ZlXHQ9IDcwMDtcblx0dGhpcy5kaW1lbnNpb25zXHQ9IFs0MCw0MF07XG4gICAgdGhpcy5wb3NpdGlvblx0PSBbNDUsNDVdO1xuICAgIFxuICAgIHRoaXMuZGlyZWN0aW9uXHQ9IGRpcmVjdGlvbnMudXA7XG5cdHRoaXMuc3ByaXRlcyA9IHt9O1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy51cF1cdFx0PSBbe3g6MCx5OjEyMCx3OjMwLGg6MzB9XTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMucmlnaHRdXHQ9IFt7eDowLHk6MTUwLHc6MzAsaDozMH1dO1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy5kb3duXVx0PSBbe3g6MCx5OjE4MCx3OjMwLGg6MzB9XTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMubGVmdF1cdD0gW3t4OjAseToyMTAsdzozMCxoOjMwfV07XG59XG5cblxuLy8g5oqK6KeS6Imy5pS+5Zyo5Zyw56CW5LiKXG5NaXVNaXUucHJvdG90eXBlLmxvY2F0aW9uID0gZnVuY3Rpb24oeCwgeSkge1xuXHR0aGlzLnRpbGVGcm9tXHQ9IFt4LHldO1xuICAgIHRoaXMudGlsZVRvXHRcdD0gW3gseV07XG4gICAgLy8geCBhbmQgeSBwb3NpdGlvbiBvZiB0aGUgdGlsZS4gdXBkYXRlIHRoZSB0aWxlRnJvbSBhbmQgdGlsZVRvIHByb3BlcnRpZXMgdG8gdGhlIG5ldyB0aWxlIGNvb3JkaW5hdGVzXG4gICAgLy8gY2FsY3VsYXRlcyB0aGUgcGl4ZWwgcG9zaXRpb24gb2YgdGhlIGNoYXJhY3llciB1c2UgYmVsb3dcblx0dGhpcy5wb3NpdGlvblx0PSBbKCggdGlsZVdpZHRoICogeCApKyggKHRpbGVXaWR0aCAtIHRoaXMuZGltZW5zaW9uc1swXSkgLyAyICkpLFxuXHRcdCgoIHRpbGVIZWlnaHQgKiB5ICkrKCAodGlsZUhlaWdodCAtIHRoaXMuZGltZW5zaW9uc1sxXSkgLyAyICkpXTtcbn07XG5cbi8vIOagueaNruavj+S4quW4p+aVsOaJvuWIsOinkuiJsuS9jee9rlxuTWl1TWl1LnByb3RvdHlwZS5wcm9jZXNzTW92ZW1lbnQgPSBmdW5jdGlvbih0KSB7XG4gICAgLy8gaWYgY2hhciB0aWxlVG8gPT0gdGlsZUZyb20gY2hhciBpcyBub3QgbW92aW5nLCBzbyByZXR1cm4gZmFsc2Vcblx0aWYoIHRoaXMudGlsZUZyb21bMF0gPT0gdGhpcy50aWxlVG9bMF0gJiYgdGhpcy50aWxlRnJvbVsxXSA9PSB0aGlzLnRpbGVUb1sxXSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAvLyBpZiB0aGUgYW1vdW50IG9mIHRpbWUgcGFzc2VkIHNpbmNlIGNoYXIgYmVnYW4gaXRzIGN1cnJlbnQgbW92ZSA+PSB0aGUgdGltZSBmb3IgY2hhciB0byBtb3ZlIDEgdGlsZS4gd2Ugc2V0IHBvc2l0aW9uIHVzaW5nIGxvY2F0aW9uIGZ1bmN0aW9uXG4gICAgLy8gYWthOiBpZiBjaGFyIHN0aWxsIG1vdmluZ1xuXHRpZigodCAtIHRoaXMudGltZU1vdmVkKSA+PSB0aGlzLmRlbGF5TW92ZSkge1xuICAgICAgICB0aGlzLmxvY2F0aW9uKHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSk7XG4gICAgICAgIGlmKG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSldLmV2ZW50RW50ZXIgIT0gbnVsbCkge1xuXHRcdFx0bWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy50aWxlVG9bMF0sIHRoaXMudGlsZVRvWzFdKV0uZXZlbnRFbnRlcih0aGlzKTtcbiAgICAgICAgfVxuXHR9IGVsc2Uge1xuICAgICAgICAvLyBjdXJyZW50IHBvc2l0aW9uIG9uIGNhbnZhc1xuXHRcdHRoaXMucG9zaXRpb25bMF0gPSAodGhpcy50aWxlRnJvbVswXSAqIHRpbGVXaWR0aCkgKyAoKHRpbGVXaWR0aCAtIHRoaXMuZGltZW5zaW9uc1swXSkgLyAyKTtcblx0XHR0aGlzLnBvc2l0aW9uWzFdID0gKHRoaXMudGlsZUZyb21bMV0gKiB0aWxlSGVpZ2h0KSArICgodGlsZUhlaWdodCAtIHRoaXMuZGltZW5zaW9uc1sxXSkgLyAyKTtcblxuICAgICAgICAvLyBpZiBjaGFyIGlzIG1vdmluZyBvbiB4IGNvb3JkaW5hdGUsIGNhbGN1bGF0ZSBwaXhlbHNcblx0XHRpZih0aGlzLnRpbGVUb1swXSAhPSB0aGlzLnRpbGVGcm9tWzBdKSB7XG4gICAgICAgICAgICAvLyBkaWZmZXJlbmNlID0gZGlzdGFuY2UgbW92ZWRcbiAgICAgICAgICAgIC8vIOWKoOWHj+enu+WKqOeahOWcsOegluWIsOinkuiJsueahOS9jeWtkFxuXHRcdFx0bGV0IGRpZmZlcmVuY2UgPSAodGlsZVdpZHRoIC8gdGhpcy5kZWxheU1vdmUpICogKHQgLSB0aGlzLnRpbWVNb3ZlZCk7XG5cdFx0XHR0aGlzLnBvc2l0aW9uWzBdKz0gKHRoaXMudGlsZVRvWzBdIDwgdGhpcy50aWxlRnJvbVswXSA/IDAgLSBkaWZmZXJlbmNlIDogZGlmZmVyZW5jZSk7XG5cdFx0fVxuXHQgICAgaWYodGhpcy50aWxlVG9bMV0gIT0gdGhpcy50aWxlRnJvbVsxXSkge1xuXHRcdFx0bGV0IGRpZmZlcmVuY2UgPSAodGlsZUhlaWdodCAvIHRoaXMuZGVsYXlNb3ZlKSAqICh0LXRoaXMudGltZU1vdmVkKTtcblx0XHRcdHRoaXMucG9zaXRpb25bMV0rPSAodGhpcy50aWxlVG9bMV08dGhpcy50aWxlRnJvbVsxXSA/IDAgLSBkaWZmZXJlbmNlIDogZGlmZmVyZW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcm91bmQgeCAmIHkgdG8gd2hvbGUgbnVtYmVyIOmcgOimgeaVtOaVsFxuXHRcdHRoaXMucG9zaXRpb25bMF0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMF0pO1xuXHRcdHRoaXMucG9zaXRpb25bMV0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMV0pO1xuICAgIH1cbiAgICAvLyB0cnVlID0gY2hhciBpcyBjdXJyZW50bHkgbW92aW5nXG5cdHJldHVybiB0cnVlO1xufVxuXG5cbi8vIGlmIGNoYXIgY2FuIG1vdmUgaW4gYSBzcGVjaWZpYyBkaXJlY1xuTWl1TWl1LnByb3RvdHlwZS5wbGFjZXNDYW5HbyA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAvLyBpZiB4IGFuZCB5IGlzIGluIG1hcCBib3VuZFxuICAgIGlmKHggPCAwIHx8IHggPj0gbWFwV2lkdGggfHwgeSA8IDAgfHwgeSA+PSBtYXBIZWlnaHQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgLy8gaWYgdGhlIHRpbGUgaXMgcGF0aCB0aWxlIChvbmx5IG1vdmUgaWYgaXRzIGEgcGF0aClcbiAgICAgICAgaWYodGlsZVR5cGVzW2dhbWVNYXBbdG9JbmRleCh4LHkpXV0uZmxvb3IgIT0gZmxvb3JUeXBlcy5wYXRoKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICBpZihtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5vYmplY3QgIT0gbnVsbCkge1xuXHRcdGxldCBvYmplY3QgPSBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5vYmplY3Q7XG5cdFx0aWYob2JqZWN0VHlwZXNbb2JqZWN0LnR5cGVdLmNvbGxpc2lvbiA9PSBjb2xsaXNpb25zLnNvbGlkKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcbk1pdU1pdS5wcm90b3R5cGUuY2FuR29VcCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5wbGFjZXNDYW5Hbyh0aGlzLnRpbGVGcm9tWzBdLCB0aGlzLnRpbGVGcm9tWzFdIC0gMSk7IH07XG5NaXVNaXUucHJvdG90eXBlLmNhbkdvRG93biA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5wbGFjZXNDYW5Hbyh0aGlzLnRpbGVGcm9tWzBdLCB0aGlzLnRpbGVGcm9tWzFdICsgMSk7IH07XG5NaXVNaXUucHJvdG90eXBlLmNhbkdvTGVmdCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5wbGFjZXNDYW5Hbyh0aGlzLnRpbGVGcm9tWzBdLTEsIHRoaXMudGlsZUZyb21bMV0pOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5jYW5Hb1JpZ2h0ID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLnBsYWNlc0NhbkdvKHRoaXMudGlsZUZyb21bMF0rMSwgdGhpcy50aWxlRnJvbVsxXSk7IH07XG5cbk1pdU1pdS5wcm90b3R5cGUuZ29MZWZ0ID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1swXS09IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLmxlZnQ7IH07XG5NaXVNaXUucHJvdG90eXBlLmdvUmlnaHQgPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzBdKz0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMucmlnaHQ7IH07XG5NaXVNaXUucHJvdG90eXBlLmdvVXAgPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzFdLT0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMudXA7IH07XG5NaXVNaXUucHJvdG90eXBlLmdvRG93biA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMV0rPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5kb3duOyB9O1xuXG5cblxuLy8gY3JlYXRlIGEgY2FtZXJhIG9iamVjdFxubGV0IGNhbWVyYSA9IHtcbiAgICBzY3JlZW46IFswLDBdLFxuICAgIC8vIOeUu+mdouW3puS4iuinklxuICAgIHN0YXJ0aW5nUG9pbnQ6IFswLDBdLFxuICAgIC8vIOeUu+mdouWPs+S4i+inklxuICAgIGVuZGluZ1BvaW50OiBbMCwwXSxcbiAgICAvLyDor6/lt65cbiAgICBvZmZzZXQ6IFswLDBdLFxuICAgIC8vIHVwZGF0ZSBmdW5jdGlvbiwgeCB5IGlzIG91ciBjZW50ZXIgYXJlYVxuICAgIHVwZGF0ZTogZnVuY3Rpb24ob2Zmc2V0WCwgb2Zmc2V0WSkge1xuICAgICAgICAvLyBvZmZzZXQ6IGhhbGYgdGhlIGNhbnZhcyB3aWR0aCB8fCBoZWlnaHQgKHJvdW5kIGRvd24gdG8gd2hvbGUgbnVtKVxuXHRcdHRoaXMub2Zmc2V0WzBdID0gTWF0aC5mbG9vcigodGhpcy5zY3JlZW5bMF0vMikgLSBvZmZzZXRYKTtcbiAgICAgICAgdGhpcy5vZmZzZXRbMV0gPSBNYXRoLmZsb29yKCh0aGlzLnNjcmVlblsxXS8yKSAtIG9mZnNldFkpO1xuXG4gICAgICAgIC8vIOWcsOegluWcqOWcsOWbvuS4iueahOS9jee9rlxuICAgICAgICBsZXQgdGlsZSA9IFsgTWF0aC5mbG9vcihvZmZzZXRYIC8gdGlsZVdpZHRoKSwgTWF0aC5mbG9vcihvZmZzZXRZIC8gdGlsZUhlaWdodCkgXTtcbiAgICAgICAgLy8gIOiuoeeul+esrOS4gOS4quWcsOegluS9jee9ruWcqHjnur/kuIrvvJog5pyA5aSn5Zyw56CW5pWw6YePIC0g5bGP5bmV55qE5LiA5Y2KXG4gICAgICAgIC8vICDlpJrlh4/ljrsx6L+Z5qC35Zyw56CW5Y+v5Lulc2hvd+S4gOWNiuWcqOWxj+W5leS4ilxuICAgICAgICB0aGlzLnN0YXJ0aW5nUG9pbnRbMF0gPSB0aWxlWzBdIC0gTWF0aC5jZWlsKCh0aGlzLnNjcmVlblswXS8yKSAvIHRpbGVXaWR0aCkgIC0gMTtcblx0XHR0aGlzLnN0YXJ0aW5nUG9pbnRbMV0gPSB0aWxlWzFdIC0gTWF0aC5jZWlsKCh0aGlzLnNjcmVlblsxXS8yKSAvIHRpbGVIZWlnaHQpICAtIDE7XG5cbiAgICAgICAgLy8g56Gu5L+deOWSjHnpg73lpKfkuo4w6KaB5LmI5Lya5Zyo5Zyw5Zu+5aSWXG4gICAgICAgIGlmKHRoaXMuc3RhcnRpbmdQb2ludFswXSA8PSAtMSkgeyB0aGlzLnN0YXJ0aW5nUG9pbnRbMF0gPSAwOyB9XG5cdFx0aWYodGhpcy5zdGFydGluZ1BvaW50WzFdIDw9IC0xKSB7IHRoaXMuc3RhcnRpbmdQb2ludFsxXSA9IDA7IH1cblxuICAgICAgICB0aGlzLmVuZGluZ1BvaW50WzBdID0gdGlsZVswXSArIDEgKyBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzBdLzIpIC8gdGlsZVdpZHRoKTtcblx0XHR0aGlzLmVuZGluZ1BvaW50WzFdID0gdGlsZVsxXSArIDEgKyBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzFdLzIpIC8gdGlsZUhlaWdodCk7XG5cblx0XHRpZih0aGlzLmVuZGluZ1BvaW50WzBdID49IG1hcFdpZHRoKSB7IHRoaXMuZW5kaW5nUG9pbnRbMF0gPSBtYXBXaWR0aCAtMTsgfVxuXHRcdGlmKHRoaXMuZW5kaW5nUG9pbnRbMV0gPj0gbWFwSGVpZ2h0KSB7IHRoaXMuZW5kaW5nUG9pbnRbMV0gPSBtYXBIZWlnaHQgLSAxOyB9XG4gICAgICAgIH1cbn07XG5cblxuLy8gYnVpbGRpbmdzXG5cbmxldCBtYXBUaWxlRGF0YSA9IG5ldyBUaWxlTWFwKCk7XG5cbmxldCBidWlsZGluZ3NMb2NhdGlvbiA9IFtcblx0eyB4OjUsIHk6MCwgdzo0LCBoOjUsIGRhdGE6IFtcblx0XHQxMCwgMTEsIDExLCAxMixcbiAgICAgICAgMTMsIDE0LCAxNCwgMTUsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCxcbiAgICAgICAgMTYsIDE3LCAxNiwgMThcblx0XX0sXG5cdHsgeDoxMCwgeTowLCB3OjcsIGg6NSwgZGF0YTogW1xuXHRcdDEwLCAxMSwgMTEsIDExLCAxMSwgMTIsIDEyLFxuICAgICAgICAxMywgMTUsIDEzLCAxNCwgMTQsIDE1LCAxNSxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTksIDE5LCAxOCwgMTgsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE5LCAxOSwgMTgsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOSwgMTcsIDE4LCAxOFxuXHRdfSxcblx0eyB4OjgsIHk6OCwgdzo0LCBoOjQsIGRhdGE6IFtcbiAgICAgICAgMTAsIDExLCAxMSwgMTIsXG4gICAgICAgIDEzLCAxNCwgMTQsIDE1LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCxcbiAgICAgICAgMTYsIDE3LCAxNiwgMThcblx0XX1cbl07XG5cbi8vIHN0b3JlcyBpbmZvcm1hdGlvbiBmb3IgZWFjaCBtYXAgdGlsZVxuZnVuY3Rpb24gVGlsZSh0aWxlWCwgdGlsZVksIHRpbGVUeXBlKVxue1xuICAgIC8vIHRpbGVZLCB0aWxlWCA9IHRoZSBwb3NpdGlvbiBvZiB0aGUgdGlsZSBvbiB0aGUgbWFwXG5cdHRoaXMueFx0XHRcdD0gdGlsZVg7XG5cdHRoaXMueVx0XHRcdD0gdGlsZVk7XG5cdHRoaXMudHlwZVx0XHQ9IHRpbGVUeXBlO1xuXHR0aGlzLmJ1aWxkaW5nXHRcdD0gbnVsbDtcbiAgICB0aGlzLmJ1aWxkaW5nVHlwZVx0PSAwO1xuICAgIC8vICBwb2ludGVyIHRvIGEgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIGEgTWl1TWl1IGhhcyBjb21wbGV0ZWQgbW92aW5nIG9uIHRvIHRoaXMgdGlsZVxuICAgIHRoaXMuZXZlbnRFbnRlclx0PSBudWxsO1xuICAgIHRoaXMub2JqZWN0XHRcdD0gbnVsbDtcblxufVxuXG4vLyDlgqjlrZjnrqHnkIblnLDlm77mlbDmja5cbmZ1bmN0aW9uIFRpbGVNYXAoKSB7XG5cdHRoaXMubWFwXHQ9IFtdO1xuXHR0aGlzLndcdFx0PSAwO1xuICAgIHRoaXMuaFx0XHQ9IDA7XG5cdHRoaXMubGV2ZWxzXHQ9IDQ7XG59XG5cblRpbGVNYXAucHJvdG90eXBlLmJ1aWxkTWFwRnJvbURhdGEgPSBmdW5jdGlvbih0aWxlSWQsIHcsIGgpIHtcblx0dGhpcy53XHRcdD0gdztcbiAgICB0aGlzLmhcdFx0PSBoO1xuXG4gICAgaWYodGlsZUlkLmxlbmd0aCE9KHcgKiBoKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XG4gICAgdGhpcy5tYXAubGVuZ3RoXHQ9IDA7XG4gICAgXHRmb3IobGV0IHkgPSAwOyB5IDwgaDsgeSsrKSB7XG5cdFx0ICAgIGZvcihsZXQgeCA9IDA7IHggPCB3OyB4KyspIHtcblx0XHRcdHRoaXMubWFwLnB1c2goIG5ldyBUaWxlKHgsIHksIHRpbGVJZFsgKHggKyAodyAqIHkpKV0pICk7XG5cdFx0fVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuVGlsZU1hcC5wcm90b3R5cGUuYWRkQnVpbGRpbmdzID0gZnVuY3Rpb24oYnVpbGRpbmdzKSB7XG5cdGZvcihsZXQgaSBpbiBidWlsZGluZ3MpIHtcbiAgICAgICAgbGV0IGJ1aWxkaW5nID0gYnVpbGRpbmdzW2ldO1xuICAgICAgICBpZihidWlsZGluZy54IDwgMCB8fCBidWlsZGluZy55IDwgMCB8fCBidWlsZGluZy54ID49IHRoaXMudyB8fCBidWlsZGluZy55ID49IHRoaXMuaCB8fFx0KGJ1aWxkaW5nLngrYnVpbGRpbmcudyk+dGhpcy53IHx8IChidWlsZGluZy55K2J1aWxkaW5nLmgpPnRoaXMuaCB8fCBidWlsZGluZy5kYXRhLmxlbmd0aCE9KGJ1aWxkaW5nLncqYnVpbGRpbmcuaCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgeSA9IDA7IHkgPCBidWlsZGluZy5oOyB5KyspIHtcblx0XHRcdGZvcihsZXQgeCA9IDA7IHggPCBidWlsZGluZy53OyB4KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZUlkeCA9ICgoKGJ1aWxkaW5nLnkgKyB5KSAqIHRoaXMudykgKyBidWlsZGluZy54ICsgeCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbdGlsZUlkeF0uYnVpbGRpbmcgPSBidWlsZGluZztcblx0XHRcdFx0dGhpcy5tYXBbdGlsZUlkeF0uYnVpbGRpbmdUeXBlID0gYnVpbGRpbmcuZGF0YVsoICh5ICogYnVpbGRpbmcudykgKyB4KV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vLyDnianlk4HmkYbmlL5cbmZ1bmN0aW9uIEdhbWVPYmplY3RzKG50KSB7XG5cdHRoaXMueFx0XHQ9IDA7XG5cdHRoaXMueVx0XHQ9IDA7XG5cdHRoaXMudHlwZVx0PSBudDtcbn1cblxuR2FtZU9iamVjdHMucHJvdG90eXBlLnBsYWNlQXQgPSBmdW5jdGlvbihueCwgbnkpIHtcblx0aWYobWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy54LCB0aGlzLnkpXS5vYmplY3QgPT0gdGhpcykge1xuXHRcdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMueCwgdGhpcy55KV0ub2JqZWN0ID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy54ID0gbng7XG5cdHRoaXMueSA9IG55O1xuXHRcblx0bWFwVGlsZURhdGEubWFwW3RvSW5kZXgobngsIG55KV0ub2JqZWN0ID0gdGhpcztcbn07XG5cblxuXG4vLyBjb252ZXJ0IHgsIHkgaW50byBpbmRleCBpbiBnYW1lTWFwIGFyclxuZnVuY3Rpb24gdG9JbmRleCh4LCB5KSB7XG5cdHJldHVybih4ICsgKG1hcFdpZHRoICogeSkpO1xufVxuXG5mdW5jdGlvbiBnZXRGcmFtZShzcHJpdGUsIHRpbWVMYXN0LCB0aW1lLCBhbmltYXRpb24pIHtcblx0aWYoIWFuaW1hdGlvbikgeyByZXR1cm4gc3ByaXRlWzBdOyB9XG5cdHRpbWUgPSB0aW1lICUgdGltZUxhc3Q7XG5cblx0Zm9yKHggaW4gc3ByaXRlKSB7XG5cdFx0aWYoc3ByaXRlW3hdLmVuZD49dGltZSkgeyByZXR1cm4gc3ByaXRlW3hdOyB9XG5cdH1cbn1cblxuLy8g55WM6Z2ibG9hZOWujO+8jOW8gOWni2xvb3BcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0Y3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXVtaXVUYWxlXCIpLmdldENvbnRleHQoXCIyZFwiKTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbiAgICBcbiAgICAvLyBhZGQgZXZlbnRMaXN0ZW5lcnMgZm9yIHRoZSBrZXlkb3duYSBhbmQga2V5dXBcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZihlLmtleUNvZGUgPj0gMzcgJiYgZS5rZXlDb2RlIDw9NDAgKSB7IGhlbGRLZXlzW2Uua2V5Q29kZV0gPSB0cnVlOyB9XG5cdH0pO1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZihlLmtleUNvZGUgPj0gMzcgJiYgZS5rZXlDb2RlIDw9IDQwKSB7IGhlbGRLZXlzW2Uua2V5Q29kZV0gPSBmYWxzZTsgfVxuICAgIH0pO1xuXG4gICAgLy8gY2FudmFz5bC65a+4IOS/neWtmOWIsCDnm7jmnLpcbiAgICBjYW1lcmEuc2NyZWVuID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWl1bWl1VGFsZVwiKS53aWR0aCxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXVtaXVUYWxlXCIpLmhlaWdodF07XG4gICAgICAgIFxuICAgIGdhbWV0aWxlID0gbmV3IEltYWdlKCk7XG5cdGdhbWV0aWxlLm9uZXJyb3IgPSBmdW5jdGlvbigpIHtcblx0XHRjdHggPSBudWxsO1xuXHRcdGFsZXJ0KFwiRmFpbGVkIGxvYWRpbmcgZ2FtZXRpbGUuXCIpO1xuXHR9O1xuXHRnYW1ldGlsZS5vbmxvYWQgPSBmdW5jdGlvbigpIHsgYXJ0TG9hZGVkID0gdHJ1ZTsgfTtcbiAgICBnYW1ldGlsZS5zcmMgPSBnYW1ldGlsZVVSTDtcbiAgICBcbiAgICBtYXBUaWxlRGF0YS5idWlsZE1hcEZyb21EYXRhKGdhbWVNYXAsIG1hcFdpZHRoLCBtYXBIZWlnaHQpO1xuXHRtYXBUaWxlRGF0YS5hZGRCdWlsZGluZ3MoYnVpbGRpbmdzTG9jYXRpb24pO1xuXHRtYXBUaWxlRGF0YS5tYXBbKCgyICogbWFwV2lkdGgpICsgMildLmV2ZW50RW50ZXIgPSBmdW5jdGlvbigpIHsgY29uc29sZS5sb2coXCJFbnRlcmVkIHRpbGUgMiwyXCIpOyB9O1xuICAgIFxuXHRsZXQgZmVuY2UxID0gbmV3IEdhbWVPYmplY3RzKDIpOyBmZW5jZTEucGxhY2VBdCg5LCAxKTtcbiAgICBcbiAgICBsZXQgZmxvd2VyMSA9IG5ldyBHYW1lT2JqZWN0cygxKTsgZmxvd2VyMS5wbGFjZUF0KDUsIDUpO1xuICAgIGxldCBmbG93ZXIyID0gbmV3IEdhbWVPYmplY3RzKDEpOyBmbG93ZXIyLnBsYWNlQXQoNywgNSk7XG4gICAgbGV0IGZsb3dlcjMgPSBuZXcgR2FtZU9iamVjdHMoMSk7IGZsb3dlcjMucGxhY2VBdCg4LCA1KTtcbiAgICBcblx0bGV0IHRyZWUxID0gbmV3IEdhbWVPYmplY3RzKDMpOyB0cmVlMS5wbGFjZUF0KDQsIDYpO1xuXHRsZXQgdHJlZTIgPSBuZXcgR2FtZU9iamVjdHMoMyk7IHRyZWUyLnBsYWNlQXQoOSwgNik7XG5cdGxldCB0cmVlMyA9IG5ldyBHYW1lT2JqZWN0cygzKTsgdHJlZTMucGxhY2VBdCg3LCA2KTtcdFxuICAgIGxldCB0cmVlNCA9IG5ldyBHYW1lT2JqZWN0cygzKTsgdHJlZTQucGxhY2VBdCgxMiwgNik7XG4gICAgXG4gICAgbGV0IG1hc2hyb29tMSA9IG5ldyBHYW1lT2JqZWN0cyg0KTsgbWFzaHJvb20xLnBsYWNlQXQoMiw0KTtcbiAgICBsZXQgbWFzaHJvb20yID0gbmV3IEdhbWVPYmplY3RzKDQpOyBtYXNocm9vbTIucGxhY2VBdCg5LDIpO1xuICAgIFxuXG4gICAgbGV0IHBpZ1Nob3AxID0gbmV3IEdhbWVPYmplY3RzKDUpOyBwaWdTaG9wMS5wbGFjZUF0KDMsIDQpO1xuXG4gICAgbGV0IGRvbnV0cyA9IG5ldyBHYW1lT2JqZWN0cyg2KTsgZG9udXRzLnBsYWNlQXQoNSwgMCk7XG5cbiAgICBsZXQgY29va2luZyA9IG5ldyBHYW1lT2JqZWN0cyg3KTsgY29va2luZy5wbGFjZUF0KDcsIDApO1xuXG4gICAgbGV0IGNhcnBldCA9IG5ldyBHYW1lT2JqZWN0cyg4KTsgY2FycGV0LnBsYWNlQXQoNywyKTtcblxuICAgIGxldCBkZXNrID0gbmV3IEdhbWVPYmplY3RzKDkpOyBkZXNrLnBsYWNlQXQoOCwzKTtcblxuICAgIGxldCBjaGFpciA9IG5ldyBHYW1lT2JqZWN0cygxMCk7IGNoYWlyLnBsYWNlQXQoOCwyKTtcbiAgICBsZXQgY2hhaXIyID0gbmV3IEdhbWVPYmplY3RzKDE2KTsgY2hhaXIyLnBsYWNlQXQoMTIsMik7XG5cbiAgICBsZXQgdHJlZVBsYW50ID0gbmV3IEdhbWVPYmplY3RzKDExKTsgdHJlZVBsYW50LnBsYWNlQXQoNSwzKTtcblxuICAgIGxldCBkcnVtID0gbmV3IEdhbWVPYmplY3RzKDEyKTsgZHJ1bS5wbGFjZUF0KDE1LDEpO1xuXG4gICAgbGV0IGluc3RydW1lbnRzID0gbmV3IEdhbWVPYmplY3RzKDEzKTsgaW5zdHJ1bWVudHMucGxhY2VBdCgxMiwwKTtcblxuICAgIGxldCBib29rU2hlbGYxID0gbmV3IEdhbWVPYmplY3RzKDE0KTsgYm9va1NoZWxmMS5wbGFjZUF0KDEwLDEpO1xuICAgIGxldCBib29rU2hlbGYyID0gbmV3IEdhbWVPYmplY3RzKDE0KTsgYm9va1NoZWxmMi5wbGFjZUF0KDEwLDIpO1xuXG4gICAgbGV0IHNheG9waG9uZSA9IG5ldyBHYW1lT2JqZWN0cygxNSk7IHNheG9waG9uZS5wbGFjZUF0KDEzLDIpO1xuXG59O1xuXG5cblxuLy8gbWFpbiBmdW5jdGlvblxuZnVuY3Rpb24gZHJhd0dhbWUoKSB7XG4gICAgaWYgKGN0eCA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgIGlmICghYXJ0TG9hZGVkKSB7IHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7IHJldHVybjsgfVxuXG5cdGxldCBjdXJyZW50RnJhbWVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAvLyBmcmFtZWNvdW50IFxuXHRsZXQgc2VjID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5cdGlmKHNlYyAhPSBjdXJyZW50U2Vjb25kKXtcblx0XHRjdXJyZW50U2Vjb25kID0gc2VjO1xuXHRcdGZyYW1lc0xhc3RTZWNvbmQgPSBmcmFtZUNvdW50O1xuXHRcdGZyYW1lQ291bnQgPSAxO1xuXHR9IGVsc2UgeyBcbiAgICAgICAgZnJhbWVDb3VudCsrOyBcbiAgICB9XG5cbiAgICAvLyBtaXVtaXUgbW92ZW1lbnRcblx0aWYoIW1pdW1pdS5wcm9jZXNzTW92ZW1lbnQoY3VycmVudEZyYW1lVGltZSkpIHtcblx0XHRpZihoZWxkS2V5c1szOF0gJiYgbWl1bWl1LmNhbkdvVXAoKSl7IFxuICAgICAgICAgICAgbWl1bWl1LmdvVXAoY3VycmVudEZyYW1lVGltZSk7IFxuICAgICAgICB9IGVsc2UgaWYgKGhlbGRLZXlzWzQwXSAmJiBtaXVtaXUuY2FuR29Eb3duKCkpIHsgXG4gICAgICAgICAgICBtaXVtaXUuZ29Eb3duKGN1cnJlbnRGcmFtZVRpbWUpOyBcbiAgICAgICAgfSBlbHNlIGlmKGhlbGRLZXlzWzM3XSAmJiBtaXVtaXUuY2FuR29MZWZ0KCkpIHsgXG4gICAgICAgICAgICBtaXVtaXUuZ29MZWZ0KGN1cnJlbnRGcmFtZVRpbWUpOyBcbiAgICAgICAgfSBlbHNlIGlmKGhlbGRLZXlzWzM5XSAmJiBtaXVtaXUuY2FuR29SaWdodCgpKSB7IFxuICAgICAgICAgICAgbWl1bWl1LmdvUmlnaHQoY3VycmVudEZyYW1lVGltZSk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2FtZXJh6Lef552AbWl1bWl16LWwXG4gICAgICAgIGNhbWVyYS51cGRhdGUobWl1bWl1LnBvc2l0aW9uWzBdICsgKG1pdW1pdS5kaW1lbnNpb25zWzBdIC8gMiksXG4gICAgICAgICAgICBtaXVtaXUucG9zaXRpb25bMV0gKyAobWl1bWl1LmRpbWVuc2lvbnNbMV0gLyAyKSk7XG5cblx0ICAgIGxldCBtaXVtaXVCdWlsZGluZzEgPSBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleChcblx0XHRtaXVtaXUudGlsZUZyb21bMF0sIG1pdW1pdS50aWxlRnJvbVsxXSldLmJ1aWxkaW5nO1xuXHQgICAgbGV0IG1pdW1pdUJ1aWxkaW5nMiA9IG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KFxuXHRcdG1pdW1pdS50aWxlVG9bMF0sIG1pdW1pdS50aWxlVG9bMV0pXS5idWlsZGluZztcblxuICAgICAgICAvLyDmuIXpmaRsYXN0IGZyYW1lXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbWVyYS5zY3JlZW5bMF0sIGNhbWVyYS5zY3JlZW5bMV0pO1xuICAgIFxuXG4gICAgZm9yKGxldCB6ID0gMDsgeiA8IG1hcFRpbGVEYXRhLmxldmVsczsgeisrKSB7XG5cdFx0Zm9yKGxldCB5ID0gY2FtZXJhLnN0YXJ0aW5nUG9pbnRbMV07IHkgPD0gY2FtZXJhLmVuZGluZ1BvaW50WzFdOyArK3kpIHtcblx0XHQgICAgZm9yKGxldCB4ID0gY2FtZXJhLnN0YXJ0aW5nUG9pbnRbMF07IHggPD0gY2FtZXJhLmVuZGluZ1BvaW50WzBdOyArK3gpIHtcbiAgICAgICAgICAgICAgICBpZih6PT0wKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSB0aWxlVHlwZXNbbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0udHlwZV07XG5cblx0XHRcdCAgICBjdHguZHJhd0ltYWdlKGdhbWV0aWxlLFxuXHRcdFx0XHR0aWxlLnNwcml0ZVswXS54LCB0aWxlLnNwcml0ZVswXS55LCB0aWxlLnNwcml0ZVswXS53LCB0aWxlLnNwcml0ZVswXS5oLFxuXHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgKHggKiB0aWxlV2lkdGgpLCBjYW1lcmEub2Zmc2V0WzFdICsgKHkgKiB0aWxlSGVpZ2h0KSxcbiAgICAgICAgICAgICAgICB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBvYmplY3QgPSBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5vYmplY3Q7XG5cdFx0XHRpZihvYmplY3QgIT0gbnVsbCAmJiBvYmplY3RUeXBlc1tvYmplY3QudHlwZV0uekluZGV4ID09IHopIHtcblx0XHRcdFx0bGV0IG9iamVjdFR5cGUgPSBvYmplY3RUeXBlc1tvYmplY3QudHlwZV07XG5cdFx0XHRcdCBcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZShnYW1ldGlsZSxcblx0XHRcdFx0XHRvYmplY3RUeXBlLnNwcml0ZVswXS54LCBvYmplY3RUeXBlLnNwcml0ZVswXS55LFxuXHRcdFx0XHRcdG9iamVjdFR5cGUuc3ByaXRlWzBdLncsIG9iamVjdFR5cGUuc3ByaXRlWzBdLmgsXG5cdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFswXSArICh4ICogdGlsZVdpZHRoKSArIG9iamVjdFR5cGUub2Zmc2V0WzBdLFxuXHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMV0gKyAoeSAqIHRpbGVIZWlnaHQpICsgb2JqZWN0VHlwZS5vZmZzZXRbMV0sXG5cdFx0XHRcdFx0b2JqZWN0VHlwZS5zcHJpdGVbMF0udywgb2JqZWN0VHlwZS5zcHJpdGVbMF0uaCk7XG5cdFx0XHR9XG5cbiAgICAgICAgICAgICAgIGlmKHogPT0gMiAmJiBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5idWlsZGluZ1R5cGUhPTAgJiYgbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmchPW1pdW1pdUJ1aWxkaW5nMSAmJiBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5idWlsZGluZyE9bWl1bWl1QnVpbGRpbmcyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbGUgPSB0aWxlVHlwZXNbbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmdUeXBlXTtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlID0gZ2V0RnJhbWUodGlsZS5zcHJpdGUsIHRpbGUuc3ByaXRldGltZUxhc3QsIHRpbGUuYW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShnYW1ldGlsZSwgc3ByaXRlLngsIHNwcml0ZS55LCBzcHJpdGUudywgc3ByaXRlLmgsIGNhbWVyYS5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCksIGNhbWVyYS5vZmZzZXRbMV0gKyAoeSAqIHRpbGVIZWlnaHQpLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpO1xuXHRcdFx0fVxuXHRcdH1cbiAgICB9XG5cbiAgICBpZiAoeiA9PSAxKSB7XG5cdFx0XHRsZXQgc3ByaXRlID0gbWl1bWl1LnNwcml0ZXNbbWl1bWl1LmRpcmVjdGlvbl07XG5cdFx0XHRjdHguZHJhd0ltYWdlKGdhbWV0aWxlLFxuXHRcdFx0XHRzcHJpdGVbMF0ueCwgc3ByaXRlWzBdLnksXG5cdFx0XHRcdHNwcml0ZVswXS53LCBzcHJpdGVbMF0uaCxcblx0XHRcdFx0Y2FtZXJhLm9mZnNldFswXSArIG1pdW1pdS5wb3NpdGlvblswXSxcblx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArIG1pdW1pdS5wb3NpdGlvblsxXSxcblx0XHRcdFx0bWl1bWl1LmRpbWVuc2lvbnNbMF0sIG1pdW1pdS5kaW1lbnNpb25zWzFdKTtcblx0XHR9XG5cdH1cbiAgICBcbiAgICAvLyBkcmF3IHRoZSBtaXVtaXVcbiAgICBsZXQgc3ByaXRlID0gbWl1bWl1LnNwcml0ZXNbbWl1bWl1LmRpcmVjdGlvbl07XG5cdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsIHNwcml0ZVswXS54LCBzcHJpdGVbMF0ueSwgc3ByaXRlWzBdLncsIHNwcml0ZVswXS5oLCBjYW1lcmEub2Zmc2V0WzBdICsgbWl1bWl1LnBvc2l0aW9uWzBdLCBjYW1lcmEub2Zmc2V0WzFdICsgbWl1bWl1LnBvc2l0aW9uWzFdLCBtaXVtaXUuZGltZW5zaW9uc1swXSwgbWl1bWl1LmRpbWVuc2lvbnNbMV0pO1xuXG5cdGxhc3RGcmFtZVRpbWUgPSBjdXJyZW50RnJhbWVUaW1lO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==