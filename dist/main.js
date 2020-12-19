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

var gameMap = [0, 0, 0, 0, 0, 6, 5, 5, 7, 0, 26, 25, 25, 25, 25, 25, 27, 0, 0, 0, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 29, 28, 28, 28, 28, 28, 30, 2, 2, 0, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 29, 28, 28, 28, 28, 28, 30, 2, 2, 0, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 29, 28, 28, 28, 28, 28, 30, 2, 2, 0, 0, 1, 1, 1, 1, 16, 20, 16, 18, 1, 16, 18, 16, 19, 28, 18, 18, 2, 2, 0, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 31, 32, 33, 34, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 35, 36, 37, 38, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 39, 40, 41, 42, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 16, 36, 16, 18, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]; // 每个地砖多少pixel

var tileWidth = 40;
var tileHeight = 40; // 地图大小就是20*20

var mapWidth = 20;
var mapHeight = 25; // framerate

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
  }; // 物品摆放位置


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJoZWxkS2V5cyIsImRpcmVjdGlvbnMiLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJmbG9vclR5cGVzIiwic29saWQiLCJwYXRoIiwib2NlYW4iLCJ0aWxlVHlwZXMiLCJjb2xvciIsImZsb29yIiwic3ByaXRlIiwieCIsInkiLCJ3IiwiaCIsImNvbGxpc2lvbnMiLCJub25lIiwib2JqZWN0VHlwZXMiLCJuYW1lIiwib2Zmc2V0IiwiY29sbGlzaW9uIiwiekluZGV4IiwiaXRlbVR5cGVzIiwibWF4U3RhY2siLCJnYW1ldGlsZSIsImdhbWV0aWxlVVJMIiwiYXJ0TG9hZGVkIiwibWl1bWl1IiwiTWl1TWl1IiwidGlsZUZyb20iLCJ0aWxlVG8iLCJ0aW1lTW92ZWQiLCJkZWxheU1vdmUiLCJkaW1lbnNpb25zIiwicG9zaXRpb24iLCJkaXJlY3Rpb24iLCJzcHJpdGVzIiwicHJvdG90eXBlIiwibG9jYXRpb24iLCJwcm9jZXNzTW92ZW1lbnQiLCJ0IiwibWFwVGlsZURhdGEiLCJtYXAiLCJ0b0luZGV4IiwiZXZlbnRFbnRlciIsImRpZmZlcmVuY2UiLCJNYXRoIiwicm91bmQiLCJwbGFjZXNDYW5HbyIsIm9iamVjdCIsInR5cGUiLCJjYW5Hb1VwIiwiY2FuR29Eb3duIiwiY2FuR29MZWZ0IiwiY2FuR29SaWdodCIsImdvTGVmdCIsImdvUmlnaHQiLCJnb1VwIiwiZ29Eb3duIiwiY2FtZXJhIiwic2NyZWVuIiwic3RhcnRpbmdQb2ludCIsImVuZGluZ1BvaW50IiwidXBkYXRlIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0aWxlIiwiY2VpbCIsIlRpbGVNYXAiLCJidWlsZGluZ3NMb2NhdGlvbiIsImRhdGEiLCJUaWxlIiwidGlsZVgiLCJ0aWxlWSIsInRpbGVUeXBlIiwiYnVpbGRpbmciLCJidWlsZGluZ1R5cGUiLCJsZXZlbHMiLCJidWlsZE1hcEZyb21EYXRhIiwidGlsZUlkIiwibGVuZ3RoIiwicHVzaCIsImFkZEJ1aWxkaW5ncyIsImJ1aWxkaW5ncyIsImkiLCJ0aWxlSWR4IiwiR2FtZU9iamVjdHMiLCJudCIsInBsYWNlQXQiLCJueCIsIm55IiwiZ2V0RnJhbWUiLCJ0aW1lTGFzdCIsInRpbWUiLCJhbmltYXRpb24iLCJlbmQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXdHYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIiwid2lkdGgiLCJoZWlnaHQiLCJJbWFnZSIsIm9uZXJyb3IiLCJhbGVydCIsInNyYyIsImNvbnNvbGUiLCJsb2ciLCJmZW5jZTEiLCJmbG93ZXIxIiwiZmxvd2VyMiIsImZsb3dlcjMiLCJ0cmVlMSIsInRyZWUyIiwidHJlZTMiLCJ0cmVlNCIsIm1hc2hyb29tMSIsIm1hc2hyb29tMiIsInBpZ1Nob3AxIiwiZG9udXRzIiwiY29va2luZyIsImNhcnBldCIsImRlc2siLCJjaGFpciIsImNoYWlyMiIsInRyZWVQbGFudCIsImRydW0iLCJpbnN0cnVtZW50cyIsImJvb2tTaGVsZjEiLCJib29rU2hlbGYyIiwic2F4b3Bob25lIiwiY3VycmVudEZyYW1lVGltZSIsIkRhdGUiLCJub3ciLCJzZWMiLCJtaXVtaXVCdWlsZGluZzEiLCJtaXVtaXVCdWlsZGluZzIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInoiLCJkcmF3SW1hZ2Ui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TUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVQyxDQURiLEVBRUdELE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUUsQ0FGYixFQUdHRixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVHLENBSGIsRUFJR0gsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVSSxDQUpiLEVBS0c2QyxNQUFNLENBQUN4QyxNQUFQLENBQWMsQ0FBZCxJQUFtQlEsTUFBTSxDQUFDTyxRQUFQLENBQWdCLENBQWhCLENBTHRCLEVBTUd5QixNQUFNLENBQUN4QyxNQUFQLENBQWMsQ0FBZCxJQUFtQlEsTUFBTSxDQUFDTyxRQUFQLENBQWdCLENBQWhCLENBTnRCLEVBT0dQLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixDQUFsQixDQVBILEVBT3lCTixNQUFNLENBQUNNLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FQekI7QUFTQXJDLGVBQWEsR0FBRzZJLGdCQUFoQjtBQUNBcEMsdUJBQXFCLENBQUNDLFFBQUQsQ0FBckI7QUFDQSxDOzs7Ozs7Ozs7OztBQy9zQkQsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL21hcFwiO1xuXG5cblxuIiwiLy8gaSB3YW50IGEgY2FtZXJhIGZvbGxvd2luZyB0aGUgY2hhciBhcm91bmQgdGhlIG1hcFxuXG5cbmxldCBjdHggPSBudWxsO1xuXG4vLyBjcmVhdGUgYSBtYXAgd2l0aCAxMCoxMCB0aWxlXG5sZXQgZ2FtZU1hcCA9IFtcblx0MCwgMCwgMCwgMCwgMCwgNiwgNSwgNSwgNywgMCwgMjYsIDI1LCAyNSwgMjUsIDI1LCAyNSwgMjcsIDAsIDAsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDIxLCAyMCwgMjAsIDIyLCAxLCAyOSwgMjgsIDI4LCAyOCwgMjgsIDI4LCAzMCwgMiwgMiwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMjEsIDIwLCAyMCwgMjIsIDEsIDI5LCAyOCwgMjgsIDI4LCAyOCwgMjgsIDMwLCAyLCAyLCAwLFxuXHQwLCAxLCAxLCAxLCAxLCAyMSwgMjAsIDIwLCAyMiwgMSwgMjksIDI4LCAyOCwgMjgsIDI4LCAyOCwgMzAsIDIsIDIsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDE2LCAyMCwgMTYsIDE4LCAxLCAxNiwgMTgsIDE2LCAxOSwgMjgsIDE4LCAxOCwgMiwgMiwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMiwgMiwgMiwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMiwgMiwgMiwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMzEsIDMyLCAzMywgMzQsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDM1LCAzNiwgMzcsIDM4LCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuICAgIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDM5LCA0MCwgNDEsIDQyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAxNiwgMzYsIDE2LCAxOCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNFxuXTtcblxuLy8g5q+P5Liq5Zyw56CW5aSa5bCRcGl4ZWxcbmxldCB0aWxlV2lkdGggPSA0MDtcbmxldCB0aWxlSGVpZ2h0ID0gNDA7XG4vLyDlnLDlm77lpKflsI/lsLHmmK8yMCoyMFxubGV0IG1hcFdpZHRoID0gMjA7XG5sZXQgbWFwSGVpZ2h0ID0gMjU7XG4vLyBmcmFtZXJhdGVcbmxldCBjdXJyZW50U2Vjb25kID0gMDtcbmxldCBmcmFtZUNvdW50ID0gMDtcbmxldCBmcmFtZXNMYXN0U2Vjb25kID0gMDtcbmxldCBsYXN0RnJhbWVUaW1lID0gMDtcblxuXG4vLyBrZXlDb2RlIDogYm9vbGVhbiB0byB0ZWxsIHVzIHdoaWNoIG9uZSBhcmUgcHJlc3NlZFxubGV0IGhlbGRLZXlzID0ge1xuICAgIC8vIDM3OiBsZWZ0XG4gICAgMzcgOiBmYWxzZSxcbiAgICAvLyAzODogdXBcbiAgICAzOCA6IGZhbHNlLFxuICAgIC8vIDM5OiByaWdodFxuICAgIDM5IDogZmFsc2UsXG4gICAgLy8gNDA6IGRvd25cbiAgICA0MCA6IGZhbHNlXG4gICAgLy8gMzI6IHNwYWNlXG59O1xuXG5sZXQgZGlyZWN0aW9ucyA9IHtcblx0dXBcdDogMCxcblx0cmlnaHQ6IDEsXG5cdGRvd246IDIsXG5cdGxlZnQ6IDNcbn07XG5cblxuLy8g5Zyw5p2/56eN57G7XG5sZXQgZmxvb3JUeXBlcyA9IHtcbiAgICBzb2xpZDogMCxcbiAgICBwYXRoOiAxLFxuICAgIG9jZWFuOiAyXG59O1xuXG4vLyDmlbDlrZfvvIhnYW1lTWFw77yJ5a+55bqU5LiK6aKc6Imy5ZKM5Zyw5p2/56eN57G7XG4vLyAwOuWimeWjgSAxOuiNieWcsCAyOumZhuWcsCAgNDog5rC0ICBcbi8vIDU66buE6Imy5YaF6YOo5aKZ5aOBIDY6IOm7hOiJsuWGhemDqOWimeWjgeW3puinkiA3Oum7hOiJsuWGhemDqOWimeWjgeWPs+inklxuLy8gMjA66buE6Imy5YaF6YOo5Zyw5p2/IDIxOum7hOiJsuWGhemDqOWimeW3piAyMjrpu4ToibLlhoXpg6jlopnlj7Ncbi8vIDI1OuajleiJsuWGhemDqOWimeWjgSAyNjrmo5XoibLlhoXpg6jlopnlo4Hlt6bop5IgMjc6IOajleiJsuWGhemDqOWimeWjgeWPs+inklxuLy8gMjg6IOajleiJsuWGhemDqOWcsOadvyAyOTog5qOV6Imy5YaF6YOo5aKZ5bemIDMwOuajleiJsuWGhemDqOWimeWPs1xuLy8gMTAtMTkg5oi/5a2Q5aSW6KeCXG4vLyAzMS00MiBtaXVtaXUgcm9vbVxubGV0IHRpbGVUeXBlcyA9IHtcblx0MCA6IHsgY29sb3I6IFwiIzc5M2Q0Y1wiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDowLHk6MCx3OjQwLGg6NDB9XSB9LFxuXHQxIDogeyBjb2xvcjogXCIjNmRmN2IxXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6NDAseTowLHc6NDAsaDo0MH1dIH0sXG5cdDIgOiB7IGNvbG9yOiBcIiNjOTc0NjFcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo4MCx5OjAsdzo0MCxoOjQwfV1cdH0sXG4gICAgNCA6IHsgY29sb3I6IFwiIzAwOGRmMFwiLCBmbG9vcjogZmxvb3JUeXBlcy5vY2Vhbiwgc3ByaXRlOlt7eDoxNjAseTowLHc6NDAsaDo0MH1dIH0sXG4gICAgNSA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoxMjAseTowLHc6NDAsaDo0MH1dIH0sXG4gICAgNiA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoxMjAseTo0MCx3OjQwLGg6NDB9XSB9LFxuICAgIDcgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6ODAseTo0MCx3OjQwLGg6NDB9XSB9LFxuICAgIFxuICAgIDEwIDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyNDAseTo0MCx3OjQwLGg6NDB9XX0sXG4gICAgMTEgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjQwLHc6NDAsaDo0MH1dfSxcbiAgICAxMiA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDEzIDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyNDAseTo4MCx3OjQwLGg6NDB9XX0sXG4gICAgMTQgOiB7IGNvbG9yOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjgwLHc6NDAsaDo0MH1dfSxcbiAgICAxNSA6IHsgY29sb3I6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE2IDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyNDAseToxMjAsdzo0MCxoOjQwfV19LFxuICAgIDE3IDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyODAseToxMjAsdzo0MCxoOjQwfV19LFxuICAgIDE4IDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseToxMjAsdzo0MCxoOjQwfV19LFxuICAgIDE5IDogeyBjb2xvcjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozNjAseToxMjAsdzo0MCxoOjQwfV19LFxuICAgIFxuICAgIDIwIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6NDAseTo0MCx3OjQwLGg6NDB9XX0sXG4gICAgMjEgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6ODAseTo4MCx3OjQwLGg6NDB9XX0sXG4gICAgMjIgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MTIwLHk6ODAsdzo0MCxoOjQwfV19LFxuXG4gICAgMjUgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6MTYwLHc6NDAsaDo0MH1dfSxcbiAgICAyNiA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyNDAseToxNjAsdzo0MCxoOjQwfV19LFxuICAgIDI3IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjE2MCx3OjQwLGg6NDB9XX0sXG4gICAgMjggOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDoyODAseToyMDAsdzo0MCxoOjQwfV19LFxuICAgIDI5IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjM2MCx5OjE2MCx3OjQwLGg6NDB9XX0sXG4gICAgMzAgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6MjAwLHc6NDAsaDo0MH1dfSxcblxuICAgIDMxIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjIwMCx3OjQwLGg6NDB9XX0sXG4gICAgMzIgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzYwLHk6MjAwLHc6NDAsaDo0MH1dfSxcbiAgICAzMyA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDo0MDAseToyMDAsdzo0MCxoOjQwfV19LFxuICAgIDM0IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjQ0MCx5OjIwMCx3OjQwLGg6NDB9XX0sXG4gICAgMzUgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6MjQwLHc6NDAsaDo0MH1dfSxcbiAgICAzNiA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjM2MCx5OjI0MCx3OjQwLGg6NDB9XX0sXG4gICAgMzcgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6NDAwLHk6MjQwLHc6NDAsaDo0MH1dfSxcbiAgICAzOCA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDo0NDAseToyNDAsdzo0MCxoOjQwfV19LFxuICAgIDM5IDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjI4MCx3OjQwLGg6NDB9XX0sXG4gICAgNDAgOiB7IGNvbG9yOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDozNjAseToyODAsdzo0MCxoOjQwfV19LFxuICAgIDQxIDogeyBjb2xvcjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6NDAwLHk6MjgwLHc6NDAsaDo0MH1dfSxcbiAgICA0MiA6IHsgY29sb3I6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDo0NDAseToyODAsdzo0MCxoOjQwfV19LFxuXG5cbiAgICBcbn07XG5cbmxldCBjb2xsaXNpb25zID0ge1xuXHRub25lXHRcdDogMCxcblx0c29saWRcdFx0OiAxXG59O1xuXG5sZXQgb2JqZWN0VHlwZXMgPSB7XG5cdDEgOiB7XG5cdFx0bmFtZSA6IFwiRmxvd2VyXCIsXG5cdFx0c3ByaXRlIDogW3t4OjQwLHk6MTgwLHc6NDAsaDoyMH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMubm9uZSxcblx0XHR6SW5kZXggOiAxXG5cdH0sXG5cdDIgOiB7XG5cdFx0bmFtZSA6IFwiZmVuY2VcIixcblx0XHRzcHJpdGUgOiBbe3g6NDAseToyMDAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG5cdH0sXG5cdDMgOiB7XG5cdFx0bmFtZSA6IFwiVHJlZVwiLFxuXHRcdHNwcml0ZSA6IFt7eDo4MCx5OjE2MCx3OjgwLGg6ODB9XSxcblx0XHRvZmZzZXQgOiBbLTIwLC0yMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAzXG4gICAgfSxcbiAgICA0IDoge1xuXHRcdG5hbWUgOiBcIm1hc2hyb29tc1wiLFxuXHRcdHNwcml0ZSA6IFt7eDo0MCx5OjE2MCx3OjQwLGg6MjB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLm5vbmUsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgNSA6IHtcblx0XHRuYW1lIDogXCJQaWcgU2hvcFwiLFxuXHRcdHNwcml0ZSA6IFt7eDoxNjAseToxNjAsdzo4MCxoOjgwfV0sXG5cdFx0b2Zmc2V0IDogWy0yMCwtMjBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogM1xuICAgIH0sXG4gICAgNiA6IHtcblx0XHRuYW1lIDogXCJkb251dHNcIixcblx0XHRzcHJpdGUgOiBbe3g6MzYwLHk6MCx3OjgwLGg6MTE1fV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5ub25lLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDcgOiB7XG5cdFx0bmFtZSA6IFwiY29va2luZ1wiLFxuXHRcdHNwcml0ZSA6IFt7eDoxNjAseTo4MCx3OjgwLGg6ODB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLm5vbmUsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgOCA6IHtcblx0XHRuYW1lIDogXCJjYXJwZXRcIixcblx0XHRzcHJpdGUgOiBbe3g6MCx5OjgwLHc6ODAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMubm9uZSxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICA5IDoge1xuXHRcdG5hbWUgOiBcImRlc2tcIixcblx0XHRzcHJpdGUgOiBbe3g6MCx5OjQwLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTAgOiB7XG5cdFx0bmFtZSA6IFwiY2hhaXJcIixcblx0XHRzcHJpdGUgOiBbe3g6MzIwLHk6MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDExIDoge1xuXHRcdG5hbWUgOiBcIlRyZWUgUGxhbnRcIixcblx0XHRzcHJpdGUgOiBbe3g6NDAseToxMjAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxMiA6IHtcblx0XHRuYW1lIDogXCJkcnVtXCIsXG5cdFx0c3ByaXRlIDogW3t4OjAseToyNDAsdzo4MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxMyA6IHtcblx0XHRuYW1lIDogXCJpbnN0cnVtZW50c1wiLFxuXHRcdHNwcml0ZSA6IFt7eDo4MCx5OjI0MCx3OjEyMCxoOjgwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICAxNCA6IHtcblx0XHRuYW1lIDogXCJCb29rU2hlbGZcIixcblx0XHRzcHJpdGUgOiBbe3g6MjAwLHk6MjQwLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuICAgIH0sXG4gICAgMTUgOiB7XG5cdFx0bmFtZSA6IFwic2F4b3Bob25lXCIsXG5cdFx0c3ByaXRlIDogW3t4OjI0MCx5OjI0MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcbiAgICB9LFxuICAgIDE2IDoge1xuXHRcdG5hbWUgOiBcIlJpZ2h0IEZhY2luZyBDaGFpclwiLFxuXHRcdHNwcml0ZSA6IFt7eDoyMDAseToyODAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbn07XG5cblxuLy8g54mp5ZOBXG5sZXQgaXRlbVR5cGVzID0ge1xuICAgIDEgOiB7XG5cdFx0bmFtZSA6IFwiY29jb251dFwiLFxuXHRcdG1heFN0YWNrIDogNSxcblx0XHRzcHJpdGUgOiBbe3g6MjQwLHk6MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXVxuICAgIH0sXG4gICAgMiA6IHtcblx0XHRuYW1lIDogXCJzdHJhd2JlcnJ5XCIsXG5cdFx0bWF4U3RhY2sgOiA1LFxuXHRcdHNwcml0ZSA6IFt7eDoyODAseTowLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdXG5cdH1cbn07XG5cblxuXG5sZXQgZ2FtZXRpbGUgPSBudWxsLCBnYW1ldGlsZVVSTCA9IFwic3JjL2ltYWdlcy90aWxlc2V0ZXN0dC5wbmdcIiwgYXJ0TG9hZGVkID0gZmFsc2U7XG5cblxuXG4vLyDliJvlu7rkuIDkuKrop5LoibIgKG1pdW1pdSlcbmxldCBtaXVtaXUgPSBuZXcgTWl1TWl1KCk7XG4vLyDliqDmm7TlpJrop5LoibLirIdcbmZ1bmN0aW9uIE1pdU1pdSgpIHtcbiAgICB0aGlzLnRpbGVGcm9tXHQ9IFsxLDFdO1xuICAgIC8vIG1pdW1pdeeahOS9jee9rlxuICAgIHRoaXMudGlsZVRvXHRcdD0gWzksMTFdO1xuICAgIC8vIHRpbWUgaW4gbWlsbHNlY29uZHNcbiAgICB0aGlzLnRpbWVNb3ZlZFx0PSAwO1xuICAgIHRoaXMuZGVsYXlNb3ZlXHQ9IDcwMDtcblx0dGhpcy5kaW1lbnNpb25zXHQ9IFs0MCw0MF07XG4gICAgdGhpcy5wb3NpdGlvblx0PSBbNDUsNDVdO1xuICAgIFxuICAgIHRoaXMuZGlyZWN0aW9uXHQ9IGRpcmVjdGlvbnMudXA7XG5cdHRoaXMuc3ByaXRlcyA9IHt9O1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy51cF1cdD0gW3t4OjAseToxMjAsdzozMCxoOjMwfV07XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLnJpZ2h0XSA9IFt7eDowLHk6MTUwLHc6MzAsaDozMH1dO1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy5kb3duXSA9IFt7eDowLHk6MTgwLHc6MzAsaDozMH1dO1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy5sZWZ0XSA9IFt7eDowLHk6MjEwLHc6MzAsaDozMH1dO1xufVxuXG5cbi8vIOaKiuinkuiJsuaUvuWcqOWcsOegluS4ilxuTWl1TWl1LnByb3RvdHlwZS5sb2NhdGlvbiA9IGZ1bmN0aW9uKHgsIHkpIHtcblx0dGhpcy50aWxlRnJvbVx0PSBbeCx5XTtcbiAgICB0aGlzLnRpbGVUb1x0XHQ9IFt4LHldO1xuICAgIC8vIHggYW5kIHkgcG9zaXRpb24gb2YgdGhlIHRpbGUuIHVwZGF0ZSB0aGUgdGlsZUZyb20gYW5kIHRpbGVUbyBwcm9wZXJ0aWVzIHRvIHRoZSBuZXcgdGlsZSBjb29yZGluYXRlc1xuICAgIC8vIGNhbGN1bGF0ZXMgdGhlIHBpeGVsIHBvc2l0aW9uIG9mIHRoZSBjaGFyYWN5ZXIgdXNlIGJlbG93XG5cdHRoaXMucG9zaXRpb25cdD0gWygoIHRpbGVXaWR0aCAqIHggKSsoICh0aWxlV2lkdGggLSB0aGlzLmRpbWVuc2lvbnNbMF0pIC8gMiApKSxcblx0XHQoKCB0aWxlSGVpZ2h0ICogeSApKyggKHRpbGVIZWlnaHQgLSB0aGlzLmRpbWVuc2lvbnNbMV0pIC8gMiApKV07XG59O1xuXG4vLyDmoLnmja7mr4/kuKrluKfmlbDmib7liLDop5LoibLkvY3nva5cbk1pdU1pdS5wcm90b3R5cGUucHJvY2Vzc01vdmVtZW50ID0gZnVuY3Rpb24odCkge1xuICAgIC8vIGlmIGNoYXIgdGlsZVRvID09IHRpbGVGcm9tIGNoYXIgaXMgbm90IG1vdmluZywgc28gcmV0dXJuIGZhbHNlXG5cdGlmKCB0aGlzLnRpbGVGcm9tWzBdID09IHRoaXMudGlsZVRvWzBdICYmIHRoaXMudGlsZUZyb21bMV0gPT0gdGhpcy50aWxlVG9bMV0pIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgLy8gaWYgdGhlIGFtb3VudCBvZiB0aW1lIHBhc3NlZCBzaW5jZSBjaGFyIGJlZ2FuIGl0cyBjdXJyZW50IG1vdmUgPj0gdGhlIHRpbWUgZm9yIGNoYXIgdG8gbW92ZSAxIHRpbGUuIHdlIHNldCBwb3NpdGlvbiB1c2luZyBsb2NhdGlvbiBmdW5jdGlvblxuICAgIC8vIGFrYTogaWYgY2hhciBzdGlsbCBtb3Zpbmdcblx0aWYoKHQgLSB0aGlzLnRpbWVNb3ZlZCkgPj0gdGhpcy5kZWxheU1vdmUpIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbih0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pO1xuICAgICAgICBpZihtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pXS5ldmVudEVudGVyICE9IG51bGwpIHtcblx0XHRcdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSldLmV2ZW50RW50ZXIodGhpcyk7XG4gICAgICAgIH1cblx0fSBlbHNlIHtcbiAgICAgICAgLy8gY3VycmVudCBwb3NpdGlvbiBvbiBjYW52YXNcblx0XHR0aGlzLnBvc2l0aW9uWzBdID0gKHRoaXMudGlsZUZyb21bMF0gKiB0aWxlV2lkdGgpICsgKCh0aWxlV2lkdGggLSB0aGlzLmRpbWVuc2lvbnNbMF0pIC8gMik7XG5cdFx0dGhpcy5wb3NpdGlvblsxXSA9ICh0aGlzLnRpbGVGcm9tWzFdICogdGlsZUhlaWdodCkgKyAoKHRpbGVIZWlnaHQgLSB0aGlzLmRpbWVuc2lvbnNbMV0pIC8gMik7XG5cbiAgICAgICAgLy8gaWYgY2hhciBpcyBtb3Zpbmcgb24geCBjb29yZGluYXRlLCBjYWxjdWxhdGUgcGl4ZWxzXG5cdFx0aWYodGhpcy50aWxlVG9bMF0gIT0gdGhpcy50aWxlRnJvbVswXSkge1xuICAgICAgICAgICAgLy8gZGlmZmVyZW5jZSA9IGRpc3RhbmNlIG1vdmVkXG4gICAgICAgICAgICAvLyDliqDlh4/np7vliqjnmoTlnLDnoJbliLDop5LoibLnmoTkvY3lrZBcblx0XHRcdGxldCBkaWZmZXJlbmNlID0gKHRpbGVXaWR0aCAvIHRoaXMuZGVsYXlNb3ZlKSAqICh0IC0gdGhpcy50aW1lTW92ZWQpO1xuXHRcdFx0dGhpcy5wb3NpdGlvblswXSs9ICh0aGlzLnRpbGVUb1swXSA8IHRoaXMudGlsZUZyb21bMF0gPyAwIC0gZGlmZmVyZW5jZSA6IGRpZmZlcmVuY2UpO1xuXHRcdH1cblx0ICAgIGlmKHRoaXMudGlsZVRvWzFdICE9IHRoaXMudGlsZUZyb21bMV0pIHtcblx0XHRcdGxldCBkaWZmZXJlbmNlID0gKHRpbGVIZWlnaHQgLyB0aGlzLmRlbGF5TW92ZSkgKiAodC10aGlzLnRpbWVNb3ZlZCk7XG5cdFx0XHR0aGlzLnBvc2l0aW9uWzFdKz0gKHRoaXMudGlsZVRvWzFdPHRoaXMudGlsZUZyb21bMV0gPyAwIC0gZGlmZmVyZW5jZSA6IGRpZmZlcmVuY2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJvdW5kIHggJiB5IHRvIHdob2xlIG51bWJlciDpnIDopoHmlbTmlbBcblx0XHR0aGlzLnBvc2l0aW9uWzBdID0gTWF0aC5yb3VuZCh0aGlzLnBvc2l0aW9uWzBdKTtcblx0XHR0aGlzLnBvc2l0aW9uWzFdID0gTWF0aC5yb3VuZCh0aGlzLnBvc2l0aW9uWzFdKTtcbiAgICB9XG4gICAgLy8gdHJ1ZSA9IGNoYXIgaXMgY3VycmVudGx5IG1vdmluZ1xuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuXG4vLyBpZiBjaGFyIGNhbiBtb3ZlIGluIGEgc3BlY2lmaWMgZGlyZWNcbk1pdU1pdS5wcm90b3R5cGUucGxhY2VzQ2FuR28gPSBmdW5jdGlvbih4LCB5KSB7XG4gICAgLy8gaWYgeCBhbmQgeSBpcyBpbiBtYXAgYm91bmRcbiAgICBpZih4IDwgMCB8fCB4ID49IG1hcFdpZHRoIHx8IHkgPCAwIHx8IHkgPj0gbWFwSGVpZ2h0KSB7IFxuXHRcdHJldHVybiBmYWxzZTsgXG5cdH1cbiAgICAvLyBpZiB0aGUgdGlsZSBpcyBwYXRoIHRpbGUgKG9ubHkgbW92ZSBpZiBpdHMgYSBwYXRoKVxuICAgICAgICBpZih0aWxlVHlwZXNbZ2FtZU1hcFt0b0luZGV4KHgseSldXS5mbG9vciAhPSBmbG9vclR5cGVzLnBhdGgpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgICAgIGlmKG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLm9iamVjdCAhPSBudWxsKSB7XG5cdFx0XHRsZXQgb2JqZWN0ID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0ub2JqZWN0O1xuXHRcdFx0aWYob2JqZWN0VHlwZXNbb2JqZWN0LnR5cGVdLmNvbGxpc2lvbiA9PSBjb2xsaXNpb25zLnNvbGlkKSB7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHRydWU7XG59O1xuTWl1TWl1LnByb3RvdHlwZS5jYW5Hb1VwID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLnBsYWNlc0NhbkdvKHRoaXMudGlsZUZyb21bMF0sIHRoaXMudGlsZUZyb21bMV0gLSAxKTsgfTtcbk1pdU1pdS5wcm90b3R5cGUuY2FuR29Eb3duID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLnBsYWNlc0NhbkdvKHRoaXMudGlsZUZyb21bMF0sIHRoaXMudGlsZUZyb21bMV0gKyAxKTsgfTtcbk1pdU1pdS5wcm90b3R5cGUuY2FuR29MZWZ0ID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLnBsYWNlc0NhbkdvKHRoaXMudGlsZUZyb21bMF0tMSwgdGhpcy50aWxlRnJvbVsxXSk7IH07XG5NaXVNaXUucHJvdG90eXBlLmNhbkdvUmlnaHQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucGxhY2VzQ2FuR28odGhpcy50aWxlRnJvbVswXSsxLCB0aGlzLnRpbGVGcm9tWzFdKTsgfTtcblxuTWl1TWl1LnByb3RvdHlwZS5nb0xlZnQgPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzBdLT0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMubGVmdDsgfTtcbk1pdU1pdS5wcm90b3R5cGUuZ29SaWdodCA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMF0rPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5yaWdodDsgfTtcbk1pdU1pdS5wcm90b3R5cGUuZ29VcCA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMV0tPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy51cDsgfTtcbk1pdU1pdS5wcm90b3R5cGUuZ29Eb3duID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1sxXSs9IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLmRvd247IH07XG5cblxuXG4vLyBjcmVhdGUgYSBjYW1lcmEgb2JqZWN0XG5sZXQgY2FtZXJhID0ge1xuICAgIHNjcmVlbjogWzAsMF0sXG4gICAgLy8g55S76Z2i5bem5LiK6KeSXG4gICAgc3RhcnRpbmdQb2ludDogWzAsMF0sXG4gICAgLy8g55S76Z2i5Y+z5LiL6KeSXG4gICAgZW5kaW5nUG9pbnQ6IFswLDBdLFxuICAgIC8vIOivr+W3rlxuICAgIG9mZnNldDogWzAsMF0sXG4gICAgLy8gdXBkYXRlIGZ1bmN0aW9uLCB4IHkgaXMgb3VyIGNlbnRlciBhcmVhXG4gICAgdXBkYXRlOiBmdW5jdGlvbihvZmZzZXRYLCBvZmZzZXRZKSB7XG4gICAgICAgIC8vIG9mZnNldDogaGFsZiB0aGUgY2FudmFzIHdpZHRoIHx8IGhlaWdodCAocm91bmQgZG93biB0byB3aG9sZSBudW0pXG5cdFx0dGhpcy5vZmZzZXRbMF0gPSBNYXRoLmZsb29yKCh0aGlzLnNjcmVlblswXS8yKSAtIG9mZnNldFgpO1xuICAgICAgICB0aGlzLm9mZnNldFsxXSA9IE1hdGguZmxvb3IoKHRoaXMuc2NyZWVuWzFdLzIpIC0gb2Zmc2V0WSk7XG5cbiAgICAgICAgLy8g5Zyw56CW5Zyo5Zyw5Zu+5LiK55qE5L2N572uXG4gICAgICAgIGxldCB0aWxlID0gWyBNYXRoLmZsb29yKG9mZnNldFggLyB0aWxlV2lkdGgpLCBNYXRoLmZsb29yKG9mZnNldFkgLyB0aWxlSGVpZ2h0KSBdO1xuICAgICAgICAvLyAg6K6h566X56ys5LiA5Liq5Zyw56CW5L2N572u5ZyoeOe6v+S4iu+8miDmnIDlpKflnLDnoJbmlbDph48gLSDlsY/luZXnmoTkuIDljYpcbiAgICAgICAgLy8gIOWkmuWHj+WOuzHov5nmoLflnLDnoJblj6/ku6VzaG935LiA5Y2K5Zyo5bGP5bmV5LiKXG4gICAgICAgIHRoaXMuc3RhcnRpbmdQb2ludFswXSA9IHRpbGVbMF0gLSBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzBdLzIpIC8gdGlsZVdpZHRoKSAgLSAxO1xuXHRcdHRoaXMuc3RhcnRpbmdQb2ludFsxXSA9IHRpbGVbMV0gLSBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzFdLzIpIC8gdGlsZUhlaWdodCkgIC0gMTtcblxuICAgICAgICAvLyDnoa7kv5145ZKMeemDveWkp+S6jjDopoHkuYjkvJrlnKjlnLDlm77lpJZcbiAgICAgICAgaWYodGhpcy5zdGFydGluZ1BvaW50WzBdIDw9IC0xKSB7IHRoaXMuc3RhcnRpbmdQb2ludFswXSA9IDA7IH1cblx0XHRpZih0aGlzLnN0YXJ0aW5nUG9pbnRbMV0gPD0gLTEpIHsgdGhpcy5zdGFydGluZ1BvaW50WzFdID0gMDsgfVxuXG4gICAgICAgIHRoaXMuZW5kaW5nUG9pbnRbMF0gPSB0aWxlWzBdICsgMSArIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMF0vMikgLyB0aWxlV2lkdGgpO1xuXHRcdHRoaXMuZW5kaW5nUG9pbnRbMV0gPSB0aWxlWzFdICsgMSArIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMV0vMikgLyB0aWxlSGVpZ2h0KTtcblxuXHRcdGlmKHRoaXMuZW5kaW5nUG9pbnRbMF0gPj0gbWFwV2lkdGgpIHsgdGhpcy5lbmRpbmdQb2ludFswXSA9IG1hcFdpZHRoIC0xOyB9XG5cdFx0aWYodGhpcy5lbmRpbmdQb2ludFsxXSA+PSBtYXBIZWlnaHQpIHsgdGhpcy5lbmRpbmdQb2ludFsxXSA9IG1hcEhlaWdodCAtIDE7IH1cbiAgICAgICAgfVxufTtcblxuXG4vLyBidWlsZGluZ3NcblxubGV0IG1hcFRpbGVEYXRhID0gbmV3IFRpbGVNYXAoKTtcblxubGV0IGJ1aWxkaW5nc0xvY2F0aW9uID0gW1xuXHR7IHg6NSwgeTowLCB3OjQsIGg6NSwgZGF0YTogW1xuXHRcdDEwLCAxMSwgMTEsIDEyLFxuICAgICAgICAxMywgMTQsIDE0LCAxNSxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTgsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LFxuICAgICAgICAxNiwgMTcsIDE2LCAxOFxuXHRdfSxcblx0eyB4OjEwLCB5OjAsIHc6NywgaDo1LCBkYXRhOiBbXG5cdFx0MTAsIDExLCAxMSwgMTEsIDExLCAxMiwgMTIsXG4gICAgICAgIDEzLCAxNSwgMTMsIDE0LCAxNCwgMTUsIDE1LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOSwgMTksIDE4LCAxOCxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTksIDE5LCAxOCwgMTgsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE5LCAxNywgMTgsIDE4XG5cdF19LFxuXHR7IHg6OCwgeTo4LCB3OjQsIGg6NCwgZGF0YTogW1xuICAgICAgICAxMCwgMTEsIDExLCAxMixcbiAgICAgICAgMTMsIDE0LCAxNCwgMTUsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LFxuICAgICAgICAxNiwgMTcsIDE2LCAxOFxuXHRdfVxuXTtcblxuLy8gc3RvcmVzIGluZm9ybWF0aW9uIGZvciBlYWNoIG1hcCB0aWxlXG5mdW5jdGlvbiBUaWxlKHRpbGVYLCB0aWxlWSwgdGlsZVR5cGUpXG57XG4gICAgLy8gdGlsZVksIHRpbGVYID0gdGhlIHBvc2l0aW9uIG9mIHRoZSB0aWxlIG9uIHRoZSBtYXBcblx0dGhpcy54XHRcdFx0PSB0aWxlWDtcblx0dGhpcy55XHRcdFx0PSB0aWxlWTtcblx0dGhpcy50eXBlXHRcdD0gdGlsZVR5cGU7XG5cdHRoaXMuYnVpbGRpbmdcdFx0PSBudWxsO1xuICAgIHRoaXMuYnVpbGRpbmdUeXBlXHQ9IDA7XG4gICAgLy8gIHBvaW50ZXIgdG8gYSBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gYSBNaXVNaXUgaGFzIGNvbXBsZXRlZCBtb3Zpbmcgb24gdG8gdGhpcyB0aWxlXG4gICAgdGhpcy5ldmVudEVudGVyXHQ9IG51bGw7XG4gICAgdGhpcy5vYmplY3RcdFx0PSBudWxsO1xuXG59XG5cbi8vIOWCqOWtmOeuoeeQhuWcsOWbvuaVsOaNrlxuZnVuY3Rpb24gVGlsZU1hcCgpIHtcblx0dGhpcy5tYXBcdD0gW107XG5cdHRoaXMud1x0XHQ9IDA7XG4gICAgdGhpcy5oXHRcdD0gMDtcblx0dGhpcy5sZXZlbHNcdD0gNDtcbn1cblxuVGlsZU1hcC5wcm90b3R5cGUuYnVpbGRNYXBGcm9tRGF0YSA9IGZ1bmN0aW9uKHRpbGVJZCwgdywgaCkge1xuXHR0aGlzLndcdFx0PSB3O1xuICAgIHRoaXMuaFx0XHQ9IGg7XG5cbiAgICBpZih0aWxlSWQubGVuZ3RoIT0odyAqIGgpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcbiAgICB0aGlzLm1hcC5sZW5ndGhcdD0gMDtcbiAgICBcdGZvcihsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcblx0XHQgICAgZm9yKGxldCB4ID0gMDsgeCA8IHc7IHgrKykge1xuXHRcdFx0dGhpcy5tYXAucHVzaCggbmV3IFRpbGUoeCwgeSwgdGlsZUlkWyAoeCArICh3ICogeSkpXSkgKTtcblx0XHR9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcblxuXG5UaWxlTWFwLnByb3RvdHlwZS5hZGRCdWlsZGluZ3MgPSBmdW5jdGlvbihidWlsZGluZ3MpIHtcblx0Zm9yKGxldCBpIGluIGJ1aWxkaW5ncykge1xuICAgICAgICBsZXQgYnVpbGRpbmcgPSBidWlsZGluZ3NbaV07XG4gICAgICAgIGlmKGJ1aWxkaW5nLnggPCAwIHx8IGJ1aWxkaW5nLnkgPCAwIHx8IGJ1aWxkaW5nLnggPj0gdGhpcy53IHx8IGJ1aWxkaW5nLnkgPj0gdGhpcy5oIHx8XHQoYnVpbGRpbmcueCtidWlsZGluZy53KT50aGlzLncgfHwgKGJ1aWxkaW5nLnkrYnVpbGRpbmcuaCk+dGhpcy5oIHx8IGJ1aWxkaW5nLmRhdGEubGVuZ3RoIT0oYnVpbGRpbmcudypidWlsZGluZy5oKSkge1xuXHRcdFx0Y29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IGJ1aWxkaW5nLmg7IHkrKykge1xuXHRcdFx0Zm9yKGxldCB4ID0gMDsgeCA8IGJ1aWxkaW5nLnc7IHgrKykge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlSWR4ID0gKCgoYnVpbGRpbmcueSArIHkpICogdGhpcy53KSArIGJ1aWxkaW5nLnggKyB4KTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFt0aWxlSWR4XS5idWlsZGluZyA9IGJ1aWxkaW5nO1xuXHRcdFx0XHR0aGlzLm1hcFt0aWxlSWR4XS5idWlsZGluZ1R5cGUgPSBidWlsZGluZy5kYXRhWyggKHkgKiBidWlsZGluZy53KSArIHgpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbi8vIOeJqeWTgeaRhuaUvlxuZnVuY3Rpb24gR2FtZU9iamVjdHMobnQpIHtcblx0dGhpcy54ID0gMDtcblx0dGhpcy55ID0gMDtcblx0dGhpcy50eXBlID0gbnQ7XG59XG5cbkdhbWVPYmplY3RzLnByb3RvdHlwZS5wbGFjZUF0ID0gZnVuY3Rpb24obngsIG55KSB7XG5cdGlmKG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMueCwgdGhpcy55KV0ub2JqZWN0ID09IHRoaXMpIHtcblx0XHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLngsIHRoaXMueSldLm9iamVjdCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMueCA9IG54O1xuXHR0aGlzLnkgPSBueTtcblx0XG5cdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KG54LCBueSldLm9iamVjdCA9IHRoaXM7XG59O1xuXG5cblxuLy8gY29udmVydCB4LCB5IGludG8gaW5kZXggaW4gZ2FtZU1hcCBhcnJcbmZ1bmN0aW9uIHRvSW5kZXgoeCwgeSkge1xuXHRyZXR1cm4oeCArIChtYXBXaWR0aCAqIHkpKTtcbn1cblxuZnVuY3Rpb24gZ2V0RnJhbWUoc3ByaXRlLCB0aW1lTGFzdCwgdGltZSwgYW5pbWF0aW9uKSB7XG5cdGlmKCFhbmltYXRpb24pIHsgcmV0dXJuIHNwcml0ZVswXTsgfVxuXHR0aW1lID0gdGltZSAlIHRpbWVMYXN0O1xuXG5cdGZvcih4IGluIHNwcml0ZSkge1xuXHRcdGlmKHNwcml0ZVt4XS5lbmQ+PXRpbWUpIHsgcmV0dXJuIHNwcml0ZVt4XTsgfVxuXHR9XG59XG5cbi8vIOeVjOmdomxvYWTlrozvvIzlvIDlp4tsb29wXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWl1bWl1VGFsZVwiKS5nZXRDb250ZXh0KFwiMmRcIik7XG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7XG4gICAgXG4gICAgLy8gYWRkIGV2ZW50TGlzdGVuZXJzIGZvciB0aGUga2V5ZG93bmEgYW5kIGtleXVwXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoZS5rZXlDb2RlID49IDM3ICYmIGUua2V5Q29kZSA8PTQwICkgeyBoZWxkS2V5c1tlLmtleUNvZGVdID0gdHJ1ZTsgfVxuXHR9KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoZS5rZXlDb2RlID49IDM3ICYmIGUua2V5Q29kZSA8PSA0MCkgeyBoZWxkS2V5c1tlLmtleUNvZGVdID0gZmFsc2U7IH1cblx0fSk7XG5cbiAgICAvLyBjYW52YXPlsLrlr7gg5L+d5a2Y5YiwIOebuOaculxuICAgIGNhbWVyYS5zY3JlZW4gPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXVtaXVUYWxlXCIpLndpZHRoLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pdW1pdVRhbGVcIikuaGVpZ2h0XTtcbiAgICAgICAgXG4gICAgZ2FtZXRpbGUgPSBuZXcgSW1hZ2UoKTtcblx0Z2FtZXRpbGUub25lcnJvciA9IGZ1bmN0aW9uKCkge1xuXHRcdGN0eCA9IG51bGw7XG5cdFx0YWxlcnQoXCJGYWlsZWQgbG9hZGluZyBnYW1ldGlsZS5cIik7XG5cdH07XG5cdGdhbWV0aWxlLm9ubG9hZCA9IGZ1bmN0aW9uKCkgeyBcblx0XHRhcnRMb2FkZWQgPSB0cnVlOyBcblx0fTtcbiAgICBnYW1ldGlsZS5zcmMgPSBnYW1ldGlsZVVSTDtcbiAgICBcbiAgICBtYXBUaWxlRGF0YS5idWlsZE1hcEZyb21EYXRhKGdhbWVNYXAsIG1hcFdpZHRoLCBtYXBIZWlnaHQpO1xuXHRtYXBUaWxlRGF0YS5hZGRCdWlsZGluZ3MoYnVpbGRpbmdzTG9jYXRpb24pO1xuXHRtYXBUaWxlRGF0YS5tYXBbKCgyICogbWFwV2lkdGgpICsgMildLmV2ZW50RW50ZXIgPSBmdW5jdGlvbigpIHsgXG5cdFx0Y29uc29sZS5sb2coXCJFbnRlcmVkIHRpbGUgMiwyXCIpOyBcblx0fTtcblx0XG5cdC8vIOeJqeWTgeaRhuaUvuS9jee9rlxuXHRsZXQgZmVuY2UxID0gbmV3IEdhbWVPYmplY3RzKDIpOyBmZW5jZTEucGxhY2VBdCg5LCAxKTtcbiAgICBcbiAgICBsZXQgZmxvd2VyMSA9IG5ldyBHYW1lT2JqZWN0cygxKTsgZmxvd2VyMS5wbGFjZUF0KDUsIDUpO1xuICAgIGxldCBmbG93ZXIyID0gbmV3IEdhbWVPYmplY3RzKDEpOyBmbG93ZXIyLnBsYWNlQXQoNywgNSk7XG4gICAgbGV0IGZsb3dlcjMgPSBuZXcgR2FtZU9iamVjdHMoMSk7IGZsb3dlcjMucGxhY2VBdCg4LCA1KTtcbiAgICBcblx0bGV0IHRyZWUxID0gbmV3IEdhbWVPYmplY3RzKDMpOyB0cmVlMS5wbGFjZUF0KDQsIDYpO1xuXHRsZXQgdHJlZTIgPSBuZXcgR2FtZU9iamVjdHMoMyk7IHRyZWUyLnBsYWNlQXQoOSwgNik7XG5cdGxldCB0cmVlMyA9IG5ldyBHYW1lT2JqZWN0cygzKTsgdHJlZTMucGxhY2VBdCg3LCA2KTtcdFxuICAgIGxldCB0cmVlNCA9IG5ldyBHYW1lT2JqZWN0cygzKTsgdHJlZTQucGxhY2VBdCgxMiwgNik7XG4gIFxuICAgIGxldCBtYXNocm9vbTEgPSBuZXcgR2FtZU9iamVjdHMoNCk7IG1hc2hyb29tMS5wbGFjZUF0KDIsNCk7XG4gICAgbGV0IG1hc2hyb29tMiA9IG5ldyBHYW1lT2JqZWN0cyg0KTsgbWFzaHJvb20yLnBsYWNlQXQoOSwyKTtcblxuXHRsZXQgcGlnU2hvcDEgPSBuZXcgR2FtZU9iamVjdHMoNSk7IHBpZ1Nob3AxLnBsYWNlQXQoMywgNCk7XG5cblxuICAgIGxldCBkb251dHMgPSBuZXcgR2FtZU9iamVjdHMoNik7IGRvbnV0cy5wbGFjZUF0KDUsIDApO1xuXG4gICAgbGV0IGNvb2tpbmcgPSBuZXcgR2FtZU9iamVjdHMoNyk7IGNvb2tpbmcucGxhY2VBdCg3LCAwKTtcblxuICAgIGxldCBjYXJwZXQgPSBuZXcgR2FtZU9iamVjdHMoOCk7IGNhcnBldC5wbGFjZUF0KDcsMik7XG5cbiAgICBsZXQgZGVzayA9IG5ldyBHYW1lT2JqZWN0cyg5KTsgZGVzay5wbGFjZUF0KDgsMyk7XG5cbiAgICBsZXQgY2hhaXIgPSBuZXcgR2FtZU9iamVjdHMoMTApOyBjaGFpci5wbGFjZUF0KDgsMik7XG4gICAgbGV0IGNoYWlyMiA9IG5ldyBHYW1lT2JqZWN0cygxNik7IGNoYWlyMi5wbGFjZUF0KDEyLDIpO1xuXG4gICAgbGV0IHRyZWVQbGFudCA9IG5ldyBHYW1lT2JqZWN0cygxMSk7IHRyZWVQbGFudC5wbGFjZUF0KDUsMyk7XG5cbiAgICBsZXQgZHJ1bSA9IG5ldyBHYW1lT2JqZWN0cygxMik7IGRydW0ucGxhY2VBdCgxNSwxKTtcblxuICAgIGxldCBpbnN0cnVtZW50cyA9IG5ldyBHYW1lT2JqZWN0cygxMyk7IGluc3RydW1lbnRzLnBsYWNlQXQoMTIsMCk7XG5cbiAgICBsZXQgYm9va1NoZWxmMSA9IG5ldyBHYW1lT2JqZWN0cygxNCk7IGJvb2tTaGVsZjEucGxhY2VBdCgxMCwxKTtcbiAgICBsZXQgYm9va1NoZWxmMiA9IG5ldyBHYW1lT2JqZWN0cygxNCk7IGJvb2tTaGVsZjIucGxhY2VBdCgxMCwyKTtcblxuICAgIGxldCBzYXhvcGhvbmUgPSBuZXcgR2FtZU9iamVjdHMoMTUpOyBzYXhvcGhvbmUucGxhY2VBdCgxMywyKTtcblxufTtcblxuXG5cblxuLy8gbWFpbiBmdW5jdGlvblxuZnVuY3Rpb24gZHJhd0dhbWUoKSB7XG4gICAgaWYgKGN0eCA9PSBudWxsKSB7IFxuXHRcdHJldHVybjsgXG5cdH1cbiAgICBpZiAoIWFydExvYWRlZCkgeyBcblx0XHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpOyByZXR1cm47IFxuXHR9XG5cblx0bGV0IGN1cnJlbnRGcmFtZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIC8vIGZyYW1lY291bnQgXG5cdGxldCBzZWMgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcblx0aWYoc2VjICE9IGN1cnJlbnRTZWNvbmQpe1xuXHRcdGN1cnJlbnRTZWNvbmQgPSBzZWM7XG5cdFx0ZnJhbWVzTGFzdFNlY29uZCA9IGZyYW1lQ291bnQ7XG5cdFx0ZnJhbWVDb3VudCA9IDE7XG5cdH0gZWxzZSB7IFxuICAgICAgICBmcmFtZUNvdW50Kys7IFxuICAgIH1cblxuICAgIC8vIG1pdW1pdSBtb3ZlbWVudFxuXHRpZighbWl1bWl1LnByb2Nlc3NNb3ZlbWVudChjdXJyZW50RnJhbWVUaW1lKSkge1xuXHRcdGlmKGhlbGRLZXlzWzM4XSAmJiBtaXVtaXUuY2FuR29VcCgpKXsgXG4gICAgICAgICAgICBtaXVtaXUuZ29VcChjdXJyZW50RnJhbWVUaW1lKTsgXG4gICAgICAgIH0gZWxzZSBpZiAoaGVsZEtleXNbNDBdICYmIG1pdW1pdS5jYW5Hb0Rvd24oKSkgeyBcbiAgICAgICAgICAgIG1pdW1pdS5nb0Rvd24oY3VycmVudEZyYW1lVGltZSk7IFxuICAgICAgICB9IGVsc2UgaWYoaGVsZEtleXNbMzddICYmIG1pdW1pdS5jYW5Hb0xlZnQoKSkgeyBcbiAgICAgICAgICAgIG1pdW1pdS5nb0xlZnQoY3VycmVudEZyYW1lVGltZSk7IFxuICAgICAgICB9IGVsc2UgaWYoaGVsZEtleXNbMzldICYmIG1pdW1pdS5jYW5Hb1JpZ2h0KCkpIHsgXG4gICAgICAgICAgICBtaXVtaXUuZ29SaWdodChjdXJyZW50RnJhbWVUaW1lKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjYW1lcmHot5/nnYBtaXVtaXXotbBcbiAgICAgICAgY2FtZXJhLnVwZGF0ZShtaXVtaXUucG9zaXRpb25bMF0gKyAobWl1bWl1LmRpbWVuc2lvbnNbMF0gLyAyKSxcbiAgICAgICAgICAgIG1pdW1pdS5wb3NpdGlvblsxXSArIChtaXVtaXUuZGltZW5zaW9uc1sxXSAvIDIpKTtcblxuXHQgICAgbGV0IG1pdW1pdUJ1aWxkaW5nMSA9IG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KFxuXHRcdG1pdW1pdS50aWxlRnJvbVswXSwgbWl1bWl1LnRpbGVGcm9tWzFdKV0uYnVpbGRpbmc7XG5cdCAgICBsZXQgbWl1bWl1QnVpbGRpbmcyID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoXG5cdFx0bWl1bWl1LnRpbGVUb1swXSwgbWl1bWl1LnRpbGVUb1sxXSldLmJ1aWxkaW5nO1xuXG4gICAgICAgIC8vIOa4hemZpGxhc3QgZnJhbWVcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FtZXJhLnNjcmVlblswXSwgY2FtZXJhLnNjcmVlblsxXSk7XG4gICAgXG5cbiAgICBmb3IobGV0IHogPSAwOyB6IDwgbWFwVGlsZURhdGEubGV2ZWxzOyB6KyspIHtcblx0XHRmb3IobGV0IHkgPSBjYW1lcmEuc3RhcnRpbmdQb2ludFsxXTsgeSA8PSBjYW1lcmEuZW5kaW5nUG9pbnRbMV07ICsreSkge1xuXHRcdCAgICBmb3IobGV0IHggPSBjYW1lcmEuc3RhcnRpbmdQb2ludFswXTsgeCA8PSBjYW1lcmEuZW5kaW5nUG9pbnRbMF07ICsreCkge1xuICAgICAgICAgICAgICAgIGlmKHo9PTApIHtcblx0XHRcdFx0XHRsZXQgdGlsZSA9IHRpbGVUeXBlc1ttYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS50eXBlXTtcblxuXHRcdFx0XHRcdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsIFxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZS5zcHJpdGVbMF0ueCwgXG5cdFx0XHRcdFx0XHRcdFx0XHR0aWxlLnNwcml0ZVswXS55LCBcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGUuc3ByaXRlWzBdLncsIFxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZS5zcHJpdGVbMF0uaCxcblx0XHRcdFx0XHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCksIFxuXHRcdFx0XHRcdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArICh5ICogdGlsZUhlaWdodCksIFxuXHRcdFx0XHRcdFx0XHRcdFx0dGlsZVdpZHRoLCBcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGVIZWlnaHRcblx0XHRcdFx0XHRcdFx0XHQpO1xuICAgICAgICAgICAgICAgIH1cblx0XHRcdFx0bGV0IG9iamVjdCA9IG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLm9iamVjdDtcblx0XHRcdFx0aWYob2JqZWN0ICE9IG51bGwgJiYgb2JqZWN0VHlwZXNbb2JqZWN0LnR5cGVdLnpJbmRleCA9PSB6KSB7XG5cdFx0XHRcdFx0bGV0IG9iamVjdFR5cGUgPSBvYmplY3RUeXBlc1tvYmplY3QudHlwZV07XG5cdFx0XHRcdCBcblx0XHRcdFx0XHRjdHguZHJhd0ltYWdlKGdhbWV0aWxlLFxuXHRcdFx0XHRcdFx0XHRcdG9iamVjdFR5cGUuc3ByaXRlWzBdLngsIFxuXHRcdFx0XHRcdFx0XHRcdG9iamVjdFR5cGUuc3ByaXRlWzBdLnksXG5cdFx0XHRcdFx0XHRcdFx0b2JqZWN0VHlwZS5zcHJpdGVbMF0udywgXG5cdFx0XHRcdFx0XHRcdFx0b2JqZWN0VHlwZS5zcHJpdGVbMF0uaCxcblx0XHRcdFx0XHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgKHggKiB0aWxlV2lkdGgpICsgb2JqZWN0VHlwZS5vZmZzZXRbMF0sXG5cdFx0XHRcdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArICh5ICogdGlsZUhlaWdodCkgKyBvYmplY3RUeXBlLm9mZnNldFsxXSxcblx0XHRcdFx0XHRcdFx0XHRvYmplY3RUeXBlLnNwcml0ZVswXS53LCBcblx0XHRcdFx0XHRcdFx0XHRvYmplY3RUeXBlLnNwcml0ZVswXS5oXG5cdFx0XHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG4gICAgICAgICAgICAgICBpZih6ID09IDIgJiYgbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmdUeXBlICE9IDAgJiYgbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmcgIT0gbWl1bWl1QnVpbGRpbmcxICYmIG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLmJ1aWxkaW5nICE9IG1pdW1pdUJ1aWxkaW5nMikge1xuICAgICAgICAgICAgICAgICAgICB0aWxlID0gdGlsZVR5cGVzW21hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLmJ1aWxkaW5nVHlwZV07XG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZSA9IGdldEZyYW1lKHRpbGUuc3ByaXRlLCB0aWxlLnNwcml0ZXRpbWVMYXN0LCB0aWxlLmFuaW1hdGlvbik7XG5cdFx0XHRcdFx0Y3R4LmRyYXdJbWFnZShnYW1ldGlsZSwgXG5cdFx0XHRcdFx0XHRcdFx0XHRzcHJpdGUueCwgXG5cdFx0XHRcdFx0XHRcdFx0XHRzcHJpdGUueSwgXG5cdFx0XHRcdFx0XHRcdFx0XHRzcHJpdGUudywgXG5cdFx0XHRcdFx0XHRcdFx0XHRzcHJpdGUuaCwgXG5cdFx0XHRcdFx0XHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgKHggKiB0aWxlV2lkdGgpLCBcblx0XHRcdFx0XHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMV0gKyAoeSAqIHRpbGVIZWlnaHQpLCBcblx0XHRcdFx0XHRcdFx0XHRcdHRpbGVXaWR0aCwgXG5cdFx0XHRcdFx0XHRcdFx0XHR0aWxlSGVpZ2h0KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuICAgIFx0fVxuXG5cdFx0aWYgKHogPT0gMSkge1xuXHRcdFx0XHRsZXQgc3ByaXRlID0gbWl1bWl1LnNwcml0ZXNbbWl1bWl1LmRpcmVjdGlvbl07XG5cdFx0XHRcdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsXG5cdFx0XHRcdFx0c3ByaXRlWzBdLngsIHNwcml0ZVswXS55LFxuXHRcdFx0XHRcdHNwcml0ZVswXS53LCBzcHJpdGVbMF0uaCxcblx0XHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgbWl1bWl1LnBvc2l0aW9uWzBdLFxuXHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMV0gKyBtaXVtaXUucG9zaXRpb25bMV0sXG5cdFx0XHRcdFx0bWl1bWl1LmRpbWVuc2lvbnNbMF0sIG1pdW1pdS5kaW1lbnNpb25zWzFdXG5cdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHR9XG4gICAgXG4gICAgLy8gZHJhdyB0aGUgbWl1bWl1XG4gICAgbGV0IHNwcml0ZSA9IG1pdW1pdS5zcHJpdGVzW21pdW1pdS5kaXJlY3Rpb25dO1xuXHRjdHguZHJhd0ltYWdlKGdhbWV0aWxlLCBcblx0XHRcdFx0c3ByaXRlWzBdLngsIFxuXHRcdFx0XHRzcHJpdGVbMF0ueSwgXG5cdFx0XHRcdHNwcml0ZVswXS53LCBcblx0XHRcdFx0c3ByaXRlWzBdLmgsIFxuXHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgbWl1bWl1LnBvc2l0aW9uWzBdLCBcblx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArIG1pdW1pdS5wb3NpdGlvblsxXSwgXG5cdFx0XHRcdG1pdW1pdS5kaW1lbnNpb25zWzBdLCBtaXVtaXUuZGltZW5zaW9uc1sxXSk7XG5cblx0bGFzdEZyYW1lVGltZSA9IGN1cnJlbnRGcmFtZVRpbWU7XG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9