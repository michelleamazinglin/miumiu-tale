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

var gameMap = [0, 0, 0, 0, 0, 6, 5, 5, 7, 0, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 5, 2, 2, 2, 2, 5, 2, 2, 2, 0, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 5, 2, 2, 2, 2, 5, 2, 2, 2, 0, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 5, 2, 2, 2, 2, 5, 2, 2, 2, 0, 0, 1, 1, 1, 1, 16, 20, 16, 18, 1, 5, 5, 5, 5, 2, 5, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 5, 2, 2, 5, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 5, 2, 2, 5, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 5, 2, 5, 5, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]; // 每个地砖多少pixel

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
// 0:墙壁 1:草地 2:陆地 5:内部墙壁 4: 水 6: 内部墙壁左角 7:内部墙壁右角
// 20:内部地板 21:内部墙左 22:内部墙右
// 10-19 房子外观

var tileTypes = {
  0: {
    colour: "#793d4c",
    floor: floorTypes.solid,
    sprite: [{
      x: 0,
      y: 0,
      w: 40,
      h: 40
    }]
  },
  1: {
    colour: "#6df7b1",
    floor: floorTypes.path,
    sprite: [{
      x: 40,
      y: 0,
      w: 40,
      h: 40
    }]
  },
  2: {
    colour: "#c97461",
    floor: floorTypes.path,
    sprite: [{
      x: 80,
      y: 0,
      w: 40,
      h: 40
    }]
  },
  4: {
    colour: "#008df0",
    floor: floorTypes.ocean,
    sprite: [{
      x: 160,
      y: 0,
      w: 40,
      h: 40
    }]
  },
  5: {
    colour: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 120,
      y: 0,
      w: 40,
      h: 40
    }]
  },
  6: {
    colour: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 120,
      y: 40,
      w: 40,
      h: 40
    }]
  },
  7: {
    colour: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 80,
      y: 40,
      w: 40,
      h: 40
    }]
  },
  10: {
    colour: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 240,
      y: 40,
      w: 40,
      h: 40
    }]
  },
  11: {
    colour: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 280,
      y: 40,
      w: 40,
      h: 40
    }]
  },
  12: {
    colour: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 320,
      y: 40,
      w: 40,
      h: 40
    }]
  },
  13: {
    colour: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 240,
      y: 80,
      w: 40,
      h: 40
    }]
  },
  14: {
    colour: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 280,
      y: 80,
      w: 40,
      h: 40
    }]
  },
  15: {
    colour: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 320,
      y: 80,
      w: 40,
      h: 40
    }]
  },
  16: {
    colour: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 240,
      y: 120,
      w: 40,
      h: 40
    }]
  },
  17: {
    colour: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 280,
      y: 120,
      w: 40,
      h: 40
    }]
  },
  18: {
    colour: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 320,
      y: 120,
      w: 40,
      h: 40
    }]
  },
  19: {
    colour: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 360,
      y: 120,
      w: 40,
      h: 40
    }]
  },
  20: {
    colour: "#d77c4b",
    floor: floorTypes.path,
    sprite: [{
      x: 40,
      y: 40,
      w: 40,
      h: 40
    }]
  },
  21: {
    colour: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 80,
      y: 80,
      w: 40,
      h: 40
    }]
  },
  22: {
    colour: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 120,
      y: 80,
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

  this.tileTo = [6, 3]; // time in millseconds

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
    var o = mapTileData.map[toIndex(x, y)].object;

    if (objectTypes[o.type].collision == collisions.solid) {
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
  w: 6,
  h: 5,
  data: [10, 11, 11, 11, 11, 12, 13, 15, 13, 14, 14, 15, 16, 18, 16, 19, 19, 18, 16, 18, 16, 19, 19, 18, 16, 18, 16, 19, 17, 18]
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
  mashroom1.placeAt(2, 2);
  var mashroom2 = new GameObjects(4);
  mashroom2.placeAt(9, 2);
  var pigShop1 = new GameObjects(5);
  pigShop1.placeAt(3, 4);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJoZWxkS2V5cyIsImRpcmVjdGlvbnMiLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJmbG9vclR5cGVzIiwic29saWQiLCJwYXRoIiwib2NlYW4iLCJ0aWxlVHlwZXMiLCJjb2xvdXIiLCJmbG9vciIsInNwcml0ZSIsIngiLCJ5IiwidyIsImgiLCJjb2xsaXNpb25zIiwibm9uZSIsIm9iamVjdFR5cGVzIiwibmFtZSIsIm9mZnNldCIsImNvbGxpc2lvbiIsInpJbmRleCIsIml0ZW1UeXBlcyIsIm1heFN0YWNrIiwiZ2FtZXRpbGUiLCJnYW1ldGlsZVVSTCIsImFydExvYWRlZCIsIm1pdW1pdSIsIk1pdU1pdSIsInRpbGVGcm9tIiwidGlsZVRvIiwidGltZU1vdmVkIiwiZGVsYXlNb3ZlIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwiZGlyZWN0aW9uIiwic3ByaXRlcyIsInByb3RvdHlwZSIsImxvY2F0aW9uIiwicHJvY2Vzc01vdmVtZW50IiwidCIsIm1hcFRpbGVEYXRhIiwibWFwIiwidG9JbmRleCIsImV2ZW50RW50ZXIiLCJkaWZmZXJlbmNlIiwiTWF0aCIsInJvdW5kIiwicGxhY2VzQ2FuR28iLCJvYmplY3QiLCJvIiwidHlwZSIsImNhbkdvVXAiLCJjYW5Hb0Rvd24iLCJjYW5Hb0xlZnQiLCJjYW5Hb1JpZ2h0IiwiZ29MZWZ0IiwiZ29SaWdodCIsImdvVXAiLCJnb0Rvd24iLCJjYW1lcmEiLCJzY3JlZW4iLCJzdGFydGluZ1BvaW50IiwiZW5kaW5nUG9pbnQiLCJ1cGRhdGUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInRpbGUiLCJjZWlsIiwiVGlsZU1hcCIsImJ1aWxkaW5nc0xvY2F0aW9uIiwiZGF0YSIsIlRpbGUiLCJ0aWxlWCIsInRpbGVZIiwidGlsZVR5cGUiLCJidWlsZGluZyIsImJ1aWxkaW5nVHlwZSIsImxldmVscyIsImJ1aWxkTWFwRnJvbURhdGEiLCJ0aWxlSWQiLCJsZW5ndGgiLCJwdXNoIiwiYWRkQnVpbGRpbmdzIiwiYnVpbGRpbmdzIiwiaSIsInRpbGVJZHgiLCJHYW1lT2JqZWN0cyIsIm50IiwicGxhY2VBdCIsIm54IiwibnkiLCJnZXRGcmFtZSIsInRpbWVMYXN0IiwidGltZSIsImFuaW1hdGlvbiIsImVuZCIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhd0dhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJ3aWR0aCIsImhlaWdodCIsIkltYWdlIiwib25lcnJvciIsImFsZXJ0Iiwic3JjIiwiY29uc29sZSIsImxvZyIsImZlbmNlMSIsImZsb3dlcjEiLCJmbG93ZXIyIiwiZmxvd2VyMyIsInRyZWUxIiwidHJlZTIiLCJ0cmVlMyIsInRyZWU0IiwibWFzaHJvb20xIiwibWFzaHJvb20yIiwicGlnU2hvcDEiLCJjdXJyZW50RnJhbWVUaW1lIiwiRGF0ZSIsIm5vdyIsInNlYyIsIm1pdW1pdUJ1aWxkaW5nMSIsIm1pdW1pdUJ1aWxkaW5nMiIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwieiIsImRyYXdJbWFnZSIsIm9iamVjdFR5cGUiLCJzcHJpdGV0aW1lTGFzdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7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LE1BQU0sQ0FBQ1EsU0FBdEIsQ0FBYjtBQUNIaEQsS0FBRyxDQUFDb0osU0FBSixDQUFjL0csUUFBZCxFQUNDZCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVDLENBRFgsRUFDY0QsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRSxDQUR4QixFQUMyQkYsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRyxDQURyQyxFQUN3Q0gsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVSSxDQURsRCxFQUVDOEMsTUFBTSxDQUFDekMsTUFBUCxDQUFjLENBQWQsSUFBbUJRLE1BQU0sQ0FBQ08sUUFBUCxDQUFnQixDQUFoQixDQUZwQixFQUV3QzBCLE1BQU0sQ0FBQ3pDLE1BQVAsQ0FBYyxDQUFkLElBQW1CUSxNQUFNLENBQUNPLFFBQVAsQ0FBZ0IsQ0FBaEIsQ0FGM0QsRUFHQ1AsTUFBTSxDQUFDTSxVQUFQLENBQWtCLENBQWxCLENBSEQsRUFHdUJOLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixDQUFsQixDQUh2QjtBQU1BckMsZUFBYSxHQUFHa0ksZ0JBQWhCO0FBQ0F4Qix1QkFBcUIsQ0FBQ0MsUUFBRCxDQUFyQjtBQUNBLEM7Ozs7Ozs7Ozs7O0FDdGpCRCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3NjcmlwdHMvbWFwXCI7XG5cblxuXG4iLCIvLyBpIHdhbnQgYSBjYW1lcmEgZm9sbG93aW5nIHRoZSBjaGFyIGFyb3VuZCB0aGUgbWFwXG5cblxubGV0IGN0eCA9IG51bGw7XG5cbi8vIGNyZWF0ZSBhIG1hcCB3aXRoIDEwKjEwIHRpbGVcbmxldCBnYW1lTWFwID0gW1xuXHQwLCAwLCAwLCAwLCAwLCA2LCA1LCA1LCA3LCAwLCA1LCA1LCA1LCA1LCA1LCA1LCAwLCAwLCAwLCAwLFxuXHQwLCAxLCAxLCAxLCAxLCAyMSwgMjAsIDIwLCAyMiwgMSwgNSwgMiwgMiwgMiwgMiwgNSwgMiwgMiwgMiwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMjEsIDIwLCAyMCwgMjIsIDEsIDUsIDIsIDIsIDIsIDIsIDUsIDIsIDIsIDIsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDIxLCAyMCwgMjAsIDIyLCAxLCA1LCAyLCAyLCAyLCAyLCA1LCAyLCAyLCAyLCAwLFxuXHQwLCAxLCAxLCAxLCAxLCAxNiwgMjAsIDE2LCAxOCwgMSwgNSwgNSwgNSwgNSwgMiwgNSwgMiwgMiwgMiwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMiwgMiwgMiwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMiwgMiwgMiwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgNSwgNSwgNSwgNSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgNSwgMiwgMiwgNSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcbiAgICAwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCA1LCAyLCAyLCA1LCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCA1LCAyLCA1LCA1LCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0XG5dO1xuLy8g5q+P5Liq5Zyw56CW5aSa5bCRcGl4ZWxcbmxldCB0aWxlV2lkdGggPSA0MDtcbmxldCB0aWxlSGVpZ2h0ID0gNDA7XG4vLyDlnLDlm77lpKflsI/lsLHmmK8xMCoxMFxubGV0IG1hcFdpZHRoID0gMjA7XG5sZXQgbWFwSGVpZ2h0ID0gMjA7XG4vLyBmcmFtZXJhdGVcbmxldCBjdXJyZW50U2Vjb25kID0gMDtcbmxldCBmcmFtZUNvdW50ID0gMDtcbmxldCBmcmFtZXNMYXN0U2Vjb25kID0gMDtcbmxldCBsYXN0RnJhbWVUaW1lID0gMDtcblxuXG4vLyBrZXlDb2RlIDogYm9vbGVhbiB0byB0ZWxsIHVzIHdoaWNoIG9uZSBhcmUgcHJlc3NlZFxubGV0IGhlbGRLZXlzID0ge1xuICAgIC8vIDM3OiBsZWZ0XG4gICAgMzcgOiBmYWxzZSxcbiAgICAvLyAzODogdXBcbiAgICAzOCA6IGZhbHNlLFxuICAgIC8vIDM5OiByaWdodFxuICAgIDM5IDogZmFsc2UsXG4gICAgLy8gNDA6IGRvd25cbiAgICA0MCA6IGZhbHNlXG4gICAgLy8gMzI6IHNwYWNlXG59O1xuXG5sZXQgZGlyZWN0aW9ucyA9IHtcblx0dXBcdDogMCxcblx0cmlnaHQ6IDEsXG5cdGRvd246IDIsXG5cdGxlZnQ6IDNcbn07XG5cblxuLy8g5Zyw5p2/56eN57G7XG5sZXQgZmxvb3JUeXBlcyA9IHtcbiAgICBzb2xpZDogMCxcbiAgICBwYXRoOiAxLFxuICAgIG9jZWFuOiAyXG59O1xuXG4vLyDmlbDlrZfvvIhnYW1lTWFw77yJ5a+55bqU5LiK6aKc6Imy5ZKM5Zyw5p2/56eN57G7XG4vLyAwOuWimeWjgSAxOuiNieWcsCAyOumZhuWcsCA1OuWGhemDqOWimeWjgSA0OiDmsLQgNjog5YaF6YOo5aKZ5aOB5bem6KeSIDc65YaF6YOo5aKZ5aOB5Y+z6KeSXG4vLyAyMDrlhoXpg6jlnLDmnb8gMjE65YaF6YOo5aKZ5bemIDIyOuWGhemDqOWimeWPs1xuLy8gMTAtMTkg5oi/5a2Q5aSW6KeCXG5sZXQgdGlsZVR5cGVzID0ge1xuXHQwIDogeyBjb2xvdXI6IFwiIzc5M2Q0Y1wiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDowLHk6MCx3OjQwLGg6NDB9XSB9LFxuXHQxIDogeyBjb2xvdXI6IFwiIzZkZjdiMVwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjQwLHk6MCx3OjQwLGg6NDB9XSB9LFxuXHQyIDogeyBjb2xvdXI6IFwiI2M5NzQ2MVwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjgwLHk6MCx3OjQwLGg6NDB9XVx0fSxcbiAgICA0IDogeyBjb2xvdXI6IFwiIzAwOGRmMFwiLCBmbG9vcjogZmxvb3JUeXBlcy5vY2Vhbiwgc3ByaXRlOlt7eDoxNjAseTowLHc6NDAsaDo0MH1dIH0sXG4gICAgNSA6IHsgY29sb3VyOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MTIwLHk6MCx3OjQwLGg6NDB9XSB9LFxuICAgIDYgOiB7IGNvbG91cjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjEyMCx5OjQwLHc6NDAsaDo0MH1dIH0sXG4gICAgNyA6IHsgY29sb3VyOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6ODAseTo0MCx3OjQwLGg6NDB9XSB9LFxuICAgIFxuICAgIDEwIDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDExIDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjgwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDEyIDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDEzIDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE0IDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjgwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE1IDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE2IDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6MTIwLHc6NDAsaDo0MH1dfSxcbiAgICAxNyA6IHsgY29sb3VyOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjEyMCx3OjQwLGg6NDB9XX0sXG4gICAgMTggOiB7IGNvbG91cjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseToxMjAsdzo0MCxoOjQwfV19LFxuICAgIDE5IDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzYwLHk6MTIwLHc6NDAsaDo0MH1dfSxcbiAgICAyMCA6IHsgY29sb3VyOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo0MCx5OjQwLHc6NDAsaDo0MH1dfSxcbiAgICAyMSA6IHsgY29sb3VyOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6ODAseTo4MCx3OjQwLGg6NDB9XX0sXG4gICAgMjIgOiB7IGNvbG91cjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjEyMCx5OjgwLHc6NDAsaDo0MH1dfVxufTtcblxubGV0IGNvbGxpc2lvbnMgPSB7XG5cdG5vbmVcdFx0OiAwLFxuXHRzb2xpZFx0XHQ6IDFcbn07XG5cbmxldCBvYmplY3RUeXBlcyA9IHtcblx0MSA6IHtcblx0XHRuYW1lIDogXCJGbG93ZXJcIixcblx0XHRzcHJpdGUgOiBbe3g6NDAseToxODAsdzo0MCxoOjIwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5ub25lLFxuXHRcdHpJbmRleCA6IDFcblx0fSxcblx0MiA6IHtcblx0XHRuYW1lIDogXCJmZW5jZVwiLFxuXHRcdHNwcml0ZSA6IFt7eDo0MCx5OjIwMCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDFcblx0fSxcblx0MyA6IHtcblx0XHRuYW1lIDogXCJUcmVlXCIsXG5cdFx0c3ByaXRlIDogW3t4OjgwLHk6MTYwLHc6ODAsaDo4MH1dLFxuXHRcdG9mZnNldCA6IFstMjAsLTIwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLnNvbGlkLFxuXHRcdHpJbmRleCA6IDNcbiAgICB9LFxuICAgIDQgOiB7XG5cdFx0bmFtZSA6IFwibWFzaHJvb21zXCIsXG5cdFx0c3ByaXRlIDogW3t4OjQwLHk6MTYwLHc6NDAsaDoyMH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMubm9uZSxcblx0XHR6SW5kZXggOiAxXG4gICAgfSxcbiAgICA1IDoge1xuXHRcdG5hbWUgOiBcIlBpZyBTaG9wXCIsXG5cdFx0c3ByaXRlIDogW3t4OjE2MCx5OjE2MCx3OjgwLGg6ODB9XSxcblx0XHRvZmZzZXQgOiBbLTIwLC0yMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAzXG5cdH1cbn07XG5cblxuLy8g54mp5ZOBXG5sZXQgaXRlbVR5cGVzID0ge1xuICAgIDEgOiB7XG5cdFx0bmFtZSA6IFwiY29jb251dFwiLFxuXHRcdG1heFN0YWNrIDogNSxcblx0XHRzcHJpdGUgOiBbe3g6MjQwLHk6MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXVxuICAgIH0sXG4gICAgMiA6IHtcblx0XHRuYW1lIDogXCJzdHJhd2JlcnJ5XCIsXG5cdFx0bWF4U3RhY2sgOiA1LFxuXHRcdHNwcml0ZSA6IFt7eDoyODAseTowLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdXG5cdH1cbn07XG5cblxuXG5sZXQgZ2FtZXRpbGUgPSBudWxsLCBnYW1ldGlsZVVSTCA9IFwic3JjL2ltYWdlcy90aWxlc2V0ZXN0dC5wbmdcIiwgYXJ0TG9hZGVkID0gZmFsc2U7XG5cblxuXG4vLyDliJvlu7rkuIDkuKrop5LoibIgKG1pdW1pdSlcbmxldCBtaXVtaXUgPSBuZXcgTWl1TWl1KCk7XG4vLyDliqDmm7TlpJrop5LoibLirIdcbmZ1bmN0aW9uIE1pdU1pdSgpIHtcbiAgICB0aGlzLnRpbGVGcm9tXHQ9IFsxLDFdO1xuICAgIC8vIG1pdW1pdeeahOS9jee9rlxuICAgIHRoaXMudGlsZVRvXHRcdD0gWzYsM107XG4gICAgLy8gdGltZSBpbiBtaWxsc2Vjb25kc1xuICAgIHRoaXMudGltZU1vdmVkXHQ9IDA7XG4gICAgdGhpcy5kZWxheU1vdmVcdD0gNzAwO1xuXHR0aGlzLmRpbWVuc2lvbnNcdD0gWzQwLDQwXTtcbiAgICB0aGlzLnBvc2l0aW9uXHQ9IFs0NSw0NV07XG4gICAgXG4gICAgdGhpcy5kaXJlY3Rpb25cdD0gZGlyZWN0aW9ucy51cDtcblx0dGhpcy5zcHJpdGVzID0ge307XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLnVwXVx0XHQ9IFt7eDowLHk6MTIwLHc6MzAsaDozMH1dO1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy5yaWdodF1cdD0gW3t4OjAseToxNTAsdzozMCxoOjMwfV07XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLmRvd25dXHQ9IFt7eDowLHk6MTgwLHc6MzAsaDozMH1dO1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy5sZWZ0XVx0PSBbe3g6MCx5OjIxMCx3OjMwLGg6MzB9XTtcbn1cblxuXG4vLyDmiorop5LoibLmlL7lnKjlnLDnoJbkuIpcbk1pdU1pdS5wcm90b3R5cGUubG9jYXRpb24gPSBmdW5jdGlvbih4LCB5KSB7XG5cdHRoaXMudGlsZUZyb21cdD0gW3gseV07XG4gICAgdGhpcy50aWxlVG9cdFx0PSBbeCx5XTtcbiAgICAvLyB4IGFuZCB5IHBvc2l0aW9uIG9mIHRoZSB0aWxlLiB1cGRhdGUgdGhlIHRpbGVGcm9tIGFuZCB0aWxlVG8gcHJvcGVydGllcyB0byB0aGUgbmV3IHRpbGUgY29vcmRpbmF0ZXNcbiAgICAvLyBjYWxjdWxhdGVzIHRoZSBwaXhlbCBwb3NpdGlvbiBvZiB0aGUgY2hhcmFjeWVyIHVzZSBiZWxvd1xuXHR0aGlzLnBvc2l0aW9uXHQ9IFsoKCB0aWxlV2lkdGggKiB4ICkrKCAodGlsZVdpZHRoIC0gdGhpcy5kaW1lbnNpb25zWzBdKSAvIDIgKSksXG5cdFx0KCggdGlsZUhlaWdodCAqIHkgKSsoICh0aWxlSGVpZ2h0IC0gdGhpcy5kaW1lbnNpb25zWzFdKSAvIDIgKSldO1xufTtcblxuLy8g5qC55o2u5q+P5Liq5bin5pWw5om+5Yiw6KeS6Imy5L2N572uXG5NaXVNaXUucHJvdG90eXBlLnByb2Nlc3NNb3ZlbWVudCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAvLyBpZiBjaGFyIHRpbGVUbyA9PSB0aWxlRnJvbSBjaGFyIGlzIG5vdCBtb3ZpbmcsIHNvIHJldHVybiBmYWxzZVxuXHRpZiggdGhpcy50aWxlRnJvbVswXSA9PSB0aGlzLnRpbGVUb1swXSAmJiB0aGlzLnRpbGVGcm9tWzFdID09IHRoaXMudGlsZVRvWzFdKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIC8vIGlmIHRoZSBhbW91bnQgb2YgdGltZSBwYXNzZWQgc2luY2UgY2hhciBiZWdhbiBpdHMgY3VycmVudCBtb3ZlID49IHRoZSB0aW1lIGZvciBjaGFyIHRvIG1vdmUgMSB0aWxlLiB3ZSBzZXQgcG9zaXRpb24gdXNpbmcgbG9jYXRpb24gZnVuY3Rpb25cbiAgICAvLyBha2E6IGlmIGNoYXIgc3RpbGwgbW92aW5nXG5cdGlmKCh0IC0gdGhpcy50aW1lTW92ZWQpID49IHRoaXMuZGVsYXlNb3ZlKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24odGhpcy50aWxlVG9bMF0sIHRoaXMudGlsZVRvWzFdKTtcbiAgICAgICAgaWYobWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy50aWxlVG9bMF0sIHRoaXMudGlsZVRvWzFdKV0uZXZlbnRFbnRlciE9bnVsbClcblx0XHR7XG5cdFx0XHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pXS5ldmVudEVudGVyKHRoaXMpO1xuICAgICAgICB9XG5cdH0gZWxzZSB7XG4gICAgICAgIC8vIGN1cnJlbnQgcG9zaXRpb24gb24gY2FudmFzXG5cdFx0dGhpcy5wb3NpdGlvblswXSA9ICh0aGlzLnRpbGVGcm9tWzBdICogdGlsZVdpZHRoKSArICgodGlsZVdpZHRoLXRoaXMuZGltZW5zaW9uc1swXSkvMik7XG5cdFx0dGhpcy5wb3NpdGlvblsxXSA9ICh0aGlzLnRpbGVGcm9tWzFdICogdGlsZUhlaWdodCkgKyAoKHRpbGVIZWlnaHQtdGhpcy5kaW1lbnNpb25zWzFdKS8yKTtcblxuICAgICAgICAvLyBpZiBjaGFyIGlzIG1vdmluZyBvbiB4IGNvb3JkaW5hdGUsIGNhbGN1bGF0ZSBwaXhlbHNcblx0XHRpZih0aGlzLnRpbGVUb1swXSAhPSB0aGlzLnRpbGVGcm9tWzBdKSB7XG4gICAgICAgICAgICAvLyBkaWZmZXJlbmNlID0gZGlzdGFuY2UgbW92ZWRcbiAgICAgICAgICAgIC8vIOWKoOWHj+enu+WKqOeahOWcsOegluWIsOinkuiJsueahOS9jeWtkFxuXHRcdFx0bGV0IGRpZmZlcmVuY2UgPSAodGlsZVdpZHRoIC8gdGhpcy5kZWxheU1vdmUpICogKHQgLSB0aGlzLnRpbWVNb3ZlZCk7XG5cdFx0XHR0aGlzLnBvc2l0aW9uWzBdKz0gKHRoaXMudGlsZVRvWzBdIDwgdGhpcy50aWxlRnJvbVswXSA/IDAgLSBkaWZmZXJlbmNlIDogZGlmZmVyZW5jZSk7XG5cdFx0fVxuXHQgICAgaWYodGhpcy50aWxlVG9bMV0gIT0gdGhpcy50aWxlRnJvbVsxXSkge1xuXHRcdFx0bGV0IGRpZmZlcmVuY2UgPSAodGlsZUhlaWdodCAvIHRoaXMuZGVsYXlNb3ZlKSAqICh0LXRoaXMudGltZU1vdmVkKTtcblx0XHRcdHRoaXMucG9zaXRpb25bMV0rPSAodGhpcy50aWxlVG9bMV08dGhpcy50aWxlRnJvbVsxXSA/IDAgLSBkaWZmZXJlbmNlIDogZGlmZmVyZW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcm91bmQgeCAmIHkgdG8gd2hvbGUgbnVtYmVyIOmcgOimgeaVtOaVsFxuXHRcdHRoaXMucG9zaXRpb25bMF0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMF0pO1xuXHRcdHRoaXMucG9zaXRpb25bMV0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMV0pO1xuICAgIH1cbiAgICAvLyB0cnVlID0gY2hhciBpcyBjdXJyZW50bHkgbW92aW5nXG5cdHJldHVybiB0cnVlO1xufVxuXG5cbi8vIGlmIGNoYXIgY2FuIG1vdmUgaW4gYSBzcGVjaWZpYyBkaXJlY1xuTWl1TWl1LnByb3RvdHlwZS5wbGFjZXNDYW5HbyA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAvLyBpZiB4IGFuZCB5IGlzIGluIG1hcCBib3VuZFxuICAgIGlmKHggPCAwIHx8IHggPj0gbWFwV2lkdGggfHwgeSA8IDAgfHwgeSA+PSBtYXBIZWlnaHQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgLy8gaWYgdGhlIHRpbGUgaXMgcGF0aCB0aWxlIChvbmx5IG1vdmUgaWYgaXRzIGEgcGF0aClcbiAgICAgICAgaWYodGlsZVR5cGVzW2dhbWVNYXBbdG9JbmRleCh4LHkpXV0uZmxvb3IhPWZsb29yVHlwZXMucGF0aCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgaWYobWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0ub2JqZWN0IT1udWxsKVxuXHR7XG5cdFx0bGV0IG8gPSBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5vYmplY3Q7XG5cdFx0aWYob2JqZWN0VHlwZXNbby50eXBlXS5jb2xsaXNpb249PWNvbGxpc2lvbnMuc29saWQpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5NaXVNaXUucHJvdG90eXBlLmNhbkdvVXAgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucGxhY2VzQ2FuR28odGhpcy50aWxlRnJvbVswXSwgdGhpcy50aWxlRnJvbVsxXSAtIDEpOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5jYW5Hb0Rvd24gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucGxhY2VzQ2FuR28odGhpcy50aWxlRnJvbVswXSwgdGhpcy50aWxlRnJvbVsxXSArIDEpOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5jYW5Hb0xlZnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucGxhY2VzQ2FuR28odGhpcy50aWxlRnJvbVswXS0xLCB0aGlzLnRpbGVGcm9tWzFdKTsgfTtcbk1pdU1pdS5wcm90b3R5cGUuY2FuR29SaWdodCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5wbGFjZXNDYW5Hbyh0aGlzLnRpbGVGcm9tWzBdKzEsIHRoaXMudGlsZUZyb21bMV0pOyB9O1xuXG5NaXVNaXUucHJvdG90eXBlLmdvTGVmdCA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMF0tPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5sZWZ0OyB9O1xuTWl1TWl1LnByb3RvdHlwZS5nb1JpZ2h0ID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1swXSs9IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLnJpZ2h0OyB9O1xuTWl1TWl1LnByb3RvdHlwZS5nb1VwID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1sxXS09IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLnVwOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5nb0Rvd24gPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzFdKz0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMuZG93bjsgfTtcblxuXG5cbi8vIGNyZWF0ZSBhIGNhbWVyYSBvYmplY3RcbmxldCBjYW1lcmEgPSB7XG4gICAgc2NyZWVuOiBbMCwwXSxcbiAgICAvLyDnlLvpnaLlt6bkuIrop5JcbiAgICBzdGFydGluZ1BvaW50OiBbMCwwXSxcbiAgICAvLyDnlLvpnaLlj7PkuIvop5JcbiAgICBlbmRpbmdQb2ludDogWzAsMF0sXG4gICAgLy8g6K+v5beuXG4gICAgb2Zmc2V0OiBbMCwwXSxcbiAgICAvLyB1cGRhdGUgZnVuY3Rpb24sIHggeSBpcyBvdXIgY2VudGVyIGFyZWFcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKG9mZnNldFgsIG9mZnNldFkpIHtcbiAgICAgICAgLy8gb2Zmc2V0OiBoYWxmIHRoZSBjYW52YXMgd2lkdGggfHwgaGVpZ2h0IChyb3VuZCBkb3duIHRvIHdob2xlIG51bSlcblx0XHR0aGlzLm9mZnNldFswXSA9IE1hdGguZmxvb3IoKHRoaXMuc2NyZWVuWzBdLzIpIC0gb2Zmc2V0WCk7XG4gICAgICAgIHRoaXMub2Zmc2V0WzFdID0gTWF0aC5mbG9vcigodGhpcy5zY3JlZW5bMV0vMikgLSBvZmZzZXRZKTtcblxuICAgICAgICAvLyDlnLDnoJblnKjlnLDlm77kuIrnmoTkvY3nva5cbiAgICAgICAgbGV0IHRpbGUgPSBbIE1hdGguZmxvb3Iob2Zmc2V0WCAvIHRpbGVXaWR0aCksIE1hdGguZmxvb3Iob2Zmc2V0WSAvIHRpbGVIZWlnaHQpIF07XG4gICAgICAgIC8vICDorqHnrpfnrKzkuIDkuKrlnLDnoJbkvY3nva7lnKh457q/5LiK77yaIOacgOWkp+WcsOegluaVsOmHjyAtIOWxj+W5leeahOS4gOWNilxuICAgICAgICAvLyAg5aSa5YeP5Y67Mei/meagt+WcsOegluWPr+S7pXNob3fkuIDljYrlnKjlsY/luZXkuIpcbiAgICAgICAgdGhpcy5zdGFydGluZ1BvaW50WzBdID0gdGlsZVswXSAtIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMF0vMikgLyB0aWxlV2lkdGgpICAtIDE7XG5cdFx0dGhpcy5zdGFydGluZ1BvaW50WzFdID0gdGlsZVsxXSAtIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMV0vMikgLyB0aWxlSGVpZ2h0KSAgLSAxO1xuXG4gICAgICAgIC8vIOehruS/nXjlkox56YO95aSn5LqOMOimgeS5iOS8muWcqOWcsOWbvuWkllxuICAgICAgICBpZih0aGlzLnN0YXJ0aW5nUG9pbnRbMF0gPD0gLTEpIHsgdGhpcy5zdGFydGluZ1BvaW50WzBdID0gMDsgfVxuXHRcdGlmKHRoaXMuc3RhcnRpbmdQb2ludFsxXSA8PSAtMSkgeyB0aGlzLnN0YXJ0aW5nUG9pbnRbMV0gPSAwOyB9XG5cbiAgICAgICAgdGhpcy5lbmRpbmdQb2ludFswXSA9IHRpbGVbMF0gKyAxICsgTWF0aC5jZWlsKCh0aGlzLnNjcmVlblswXS8yKSAvIHRpbGVXaWR0aCk7XG5cdFx0dGhpcy5lbmRpbmdQb2ludFsxXSA9IHRpbGVbMV0gKyAxICsgTWF0aC5jZWlsKCh0aGlzLnNjcmVlblsxXS8yKSAvIHRpbGVIZWlnaHQpO1xuXG5cdFx0aWYodGhpcy5lbmRpbmdQb2ludFswXSA+PSBtYXBXaWR0aCkgeyB0aGlzLmVuZGluZ1BvaW50WzBdID0gbWFwV2lkdGggLTE7IH1cblx0XHRpZih0aGlzLmVuZGluZ1BvaW50WzFdID49IG1hcEhlaWdodCkgeyB0aGlzLmVuZGluZ1BvaW50WzFdID0gbWFwSGVpZ2h0IC0gMTsgfVxuICAgICAgICB9XG59O1xuXG5cbi8vIGJ1aWxkaW5nc1xuXG5sZXQgbWFwVGlsZURhdGEgPSBuZXcgVGlsZU1hcCgpO1xuXG5sZXQgYnVpbGRpbmdzTG9jYXRpb24gPSBbXG5cdHsgeDo1LCB5OjAsIHc6NCwgaDo1LCBkYXRhOiBbXG5cdFx0MTAsIDExLCAxMSwgMTIsXG4gICAgICAgIDEzLCAxNCwgMTQsIDE1LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTgsXG4gICAgICAgIDE2LCAxNywgMTYsIDE4XG5cdF19LFxuXHR7IHg6MTAsIHk6MCwgdzo2LCBoOjUsIGRhdGE6IFtcblx0XHQxMCwgMTEsIDExLCAxMSwgMTEsIDEyLFxuICAgICAgICAxMywgMTUsIDEzLCAxNCwgMTQsIDE1LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOSwgMTksIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOSwgMTksIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOSwgMTcsIDE4XG5cdF19LFxuXHR7IHg6OCwgeTo4LCB3OjQsIGg6NCwgZGF0YTogW1xuICAgICAgICAxMCwgMTEsIDExLCAxMixcbiAgICAgICAgMTMsIDE0LCAxNCwgMTUsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LFxuICAgICAgICAxNiwgMTcsIDE2LCAxOFxuXHRdfVxuXTtcblxuLy8gc3RvcmVzIGluZm9ybWF0aW9uIGZvciBlYWNoIG1hcCB0aWxlXG5mdW5jdGlvbiBUaWxlKHRpbGVYLCB0aWxlWSwgdGlsZVR5cGUpXG57XG4gICAgLy8gdGlsZVksIHRpbGVYID0gdGhlIHBvc2l0aW9uIG9mIHRoZSB0aWxlIG9uIHRoZSBtYXBcblx0dGhpcy54XHRcdFx0PSB0aWxlWDtcblx0dGhpcy55XHRcdFx0PSB0aWxlWTtcblx0dGhpcy50eXBlXHRcdD0gdGlsZVR5cGU7XG5cdHRoaXMuYnVpbGRpbmdcdFx0PSBudWxsO1xuICAgIHRoaXMuYnVpbGRpbmdUeXBlXHQ9IDA7XG4gICAgLy8gIHBvaW50ZXIgdG8gYSBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gYSBNaXVNaXUgaGFzIGNvbXBsZXRlZCBtb3Zpbmcgb24gdG8gdGhpcyB0aWxlXG4gICAgdGhpcy5ldmVudEVudGVyXHQ9IG51bGw7XG4gICAgdGhpcy5vYmplY3RcdFx0PSBudWxsO1xuXG59XG5cbi8vIOWCqOWtmOeuoeeQhuWcsOWbvuaVsOaNrlxuZnVuY3Rpb24gVGlsZU1hcCgpIHtcblx0dGhpcy5tYXBcdD0gW107XG5cdHRoaXMud1x0XHQ9IDA7XG4gICAgdGhpcy5oXHRcdD0gMDtcblx0dGhpcy5sZXZlbHNcdD0gNDtcbn1cblxuVGlsZU1hcC5wcm90b3R5cGUuYnVpbGRNYXBGcm9tRGF0YSA9IGZ1bmN0aW9uKHRpbGVJZCwgdywgaCkge1xuXHR0aGlzLndcdFx0PSB3O1xuICAgIHRoaXMuaFx0XHQ9IGg7XG5cbiAgICBpZih0aWxlSWQubGVuZ3RoIT0odyAqIGgpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcbiAgICB0aGlzLm1hcC5sZW5ndGhcdD0gMDtcbiAgICBcdGZvcihsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcblx0XHQgICAgZm9yKGxldCB4ID0gMDsgeCA8IHc7IHgrKykge1xuXHRcdFx0dGhpcy5tYXAucHVzaCggbmV3IFRpbGUoeCwgeSwgdGlsZUlkWyAoeCArICh3ICogeSkpXSkgKTtcblx0XHR9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcblxuXG5UaWxlTWFwLnByb3RvdHlwZS5hZGRCdWlsZGluZ3MgPSBmdW5jdGlvbihidWlsZGluZ3MpXG57XG5cdGZvcihsZXQgaSBpbiBidWlsZGluZ3MpXG5cdHtcbiAgICAgICAgbGV0IGJ1aWxkaW5nID0gYnVpbGRpbmdzW2ldO1xuICAgICAgICBpZihidWlsZGluZy54IDwgMCB8fCBidWlsZGluZy55IDwgMCB8fCBidWlsZGluZy54ID49IHRoaXMudyB8fCBidWlsZGluZy55ID49IHRoaXMuaCB8fFx0KGJ1aWxkaW5nLngrYnVpbGRpbmcudyk+dGhpcy53IHx8IChidWlsZGluZy55K2J1aWxkaW5nLmgpPnRoaXMuaCB8fCBidWlsZGluZy5kYXRhLmxlbmd0aCE9KGJ1aWxkaW5nLncqYnVpbGRpbmcuaCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgeSA9IDA7IHkgPCBidWlsZGluZy5oOyB5KyspIHtcblx0XHRcdGZvcihsZXQgeCA9IDA7IHggPCBidWlsZGluZy53OyB4KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZUlkeCA9ICgoKGJ1aWxkaW5nLnkgKyB5KSAqIHRoaXMudykrYnVpbGRpbmcueCArIHgpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFwW3RpbGVJZHhdLmJ1aWxkaW5nID0gYnVpbGRpbmc7XG5cdFx0XHRcdHRoaXMubWFwW3RpbGVJZHhdLmJ1aWxkaW5nVHlwZSA9IGJ1aWxkaW5nLmRhdGFbKCAoeSAqIGJ1aWxkaW5nLncpICsgeCldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLy8g54mp5ZOB5pGG5pS+XG5mdW5jdGlvbiBHYW1lT2JqZWN0cyhudClcbntcblx0dGhpcy54XHRcdD0gMDtcblx0dGhpcy55XHRcdD0gMDtcblx0dGhpcy50eXBlXHQ9IG50O1xufVxuXG5HYW1lT2JqZWN0cy5wcm90b3R5cGUucGxhY2VBdCA9IGZ1bmN0aW9uKG54LCBueSlcbntcblx0aWYobWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy54LCB0aGlzLnkpXS5vYmplY3Q9PXRoaXMpXG5cdHtcblx0XHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLngsIHRoaXMueSldLm9iamVjdCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMueCA9IG54O1xuXHR0aGlzLnkgPSBueTtcblx0XG5cdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KG54LCBueSldLm9iamVjdCA9IHRoaXM7XG59O1xuXG5cblxuLy8gY29udmVydCB4LCB5IGludG8gaW5kZXggaW4gZ2FtZU1hcCBhcnJcbmZ1bmN0aW9uIHRvSW5kZXgoeCwgeSkge1xuXHRyZXR1cm4oeCArIChtYXBXaWR0aCAqIHkpKTtcbn1cblxuZnVuY3Rpb24gZ2V0RnJhbWUoc3ByaXRlLCB0aW1lTGFzdCwgdGltZSwgYW5pbWF0aW9uKVxue1xuXHRpZighYW5pbWF0aW9uKSB7IHJldHVybiBzcHJpdGVbMF07IH1cblx0dGltZSA9IHRpbWUgJSB0aW1lTGFzdDtcblxuXHRmb3IoeCBpbiBzcHJpdGUpIHtcblx0XHRpZihzcHJpdGVbeF0uZW5kPj10aW1lKSB7IHJldHVybiBzcHJpdGVbeF07IH1cblx0fVxufVxuXG4vLyDnlYzpnaJsb2Fk5a6M77yM5byA5aeLbG9vcFxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pdW1pdVRhbGVcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpO1xuICAgIFxuICAgIC8vIGFkZCBldmVudExpc3RlbmVycyBmb3IgdGhlIGtleWRvd25hIGFuZCBrZXl1cFxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuXHRcdGlmKGUua2V5Q29kZT49MzcgJiYgZS5rZXlDb2RlPD00MCkgeyBoZWxkS2V5c1tlLmtleUNvZGVdID0gdHJ1ZTsgfVxuXHR9KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoZS5rZXlDb2RlPj0zNyAmJiBlLmtleUNvZGU8PTQwKSB7IGhlbGRLZXlzW2Uua2V5Q29kZV0gPSBmYWxzZTsgfVxuICAgIH0pO1xuXG4gICAgLy8gY2FudmFz5bC65a+4IOS/neWtmOWIsCDnm7jmnLpcbiAgICBjYW1lcmEuc2NyZWVuID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWl1bWl1VGFsZVwiKS53aWR0aCxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXVtaXVUYWxlXCIpLmhlaWdodF07XG4gICAgICAgIFxuICAgIGdhbWV0aWxlID0gbmV3IEltYWdlKCk7XG5cdGdhbWV0aWxlLm9uZXJyb3IgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRjdHggPSBudWxsO1xuXHRcdGFsZXJ0KFwiRmFpbGVkIGxvYWRpbmcgZ2FtZXRpbGUuXCIpO1xuXHR9O1xuXHRnYW1ldGlsZS5vbmxvYWQgPSBmdW5jdGlvbigpIHsgYXJ0TG9hZGVkID0gdHJ1ZTsgfTtcbiAgICBnYW1ldGlsZS5zcmMgPSBnYW1ldGlsZVVSTDtcbiAgICBcbiAgICBtYXBUaWxlRGF0YS5idWlsZE1hcEZyb21EYXRhKGdhbWVNYXAsIG1hcFdpZHRoLCBtYXBIZWlnaHQpO1xuXHRtYXBUaWxlRGF0YS5hZGRCdWlsZGluZ3MoYnVpbGRpbmdzTG9jYXRpb24pO1xuXHRtYXBUaWxlRGF0YS5tYXBbKCgyKm1hcFdpZHRoKSsyKV0uZXZlbnRFbnRlciA9IGZ1bmN0aW9uKClcbiAgICB7IGNvbnNvbGUubG9nKFwiRW50ZXJlZCB0aWxlIDIsMlwiKTsgfTtcbiAgICBcbiAgICBcblx0bGV0IGZlbmNlMSA9IG5ldyBHYW1lT2JqZWN0cygyKTsgZmVuY2UxLnBsYWNlQXQoOSwgMSk7XG4gICAgXG4gICAgbGV0IGZsb3dlcjEgPSBuZXcgR2FtZU9iamVjdHMoMSk7IGZsb3dlcjEucGxhY2VBdCg1LCA1KTtcbiAgICBsZXQgZmxvd2VyMiA9IG5ldyBHYW1lT2JqZWN0cygxKTsgZmxvd2VyMi5wbGFjZUF0KDcsIDUpO1xuICAgIGxldCBmbG93ZXIzID0gbmV3IEdhbWVPYmplY3RzKDEpOyBmbG93ZXIzLnBsYWNlQXQoOCwgNSk7XG4gICAgXG5cdGxldCB0cmVlMSA9IG5ldyBHYW1lT2JqZWN0cygzKTsgdHJlZTEucGxhY2VBdCg0LCA2KTtcblx0bGV0IHRyZWUyID0gbmV3IEdhbWVPYmplY3RzKDMpOyB0cmVlMi5wbGFjZUF0KDksIDYpO1xuXHRsZXQgdHJlZTMgPSBuZXcgR2FtZU9iamVjdHMoMyk7IHRyZWUzLnBsYWNlQXQoNywgNik7XHRcbiAgICBsZXQgdHJlZTQgPSBuZXcgR2FtZU9iamVjdHMoMyk7IHRyZWU0LnBsYWNlQXQoMTIsIDYpO1xuICAgIFxuICAgIGxldCBtYXNocm9vbTEgPSBuZXcgR2FtZU9iamVjdHMoNCk7IG1hc2hyb29tMS5wbGFjZUF0KDIsMik7XG4gICAgbGV0IG1hc2hyb29tMiA9IG5ldyBHYW1lT2JqZWN0cyg0KTsgbWFzaHJvb20yLnBsYWNlQXQoOSwyKTtcblxuICAgIGxldCBwaWdTaG9wMSA9IG5ldyBHYW1lT2JqZWN0cyg1KTsgcGlnU2hvcDEucGxhY2VBdCgzLCA0KTtcblxufTtcblxuXG4vLyBtYWluIGZ1bmN0aW9uXG5mdW5jdGlvbiBkcmF3R2FtZSgpXG57XG4gICAgaWYgKGN0eCA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgIGlmICghYXJ0TG9hZGVkKSB7IHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7IHJldHVybjsgfVxuXG5cdGxldCBjdXJyZW50RnJhbWVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAvLyBmcmFtZWNvdW50IFxuXHRsZXQgc2VjID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5cdGlmKHNlYyAhPSBjdXJyZW50U2Vjb25kKXtcblx0XHRjdXJyZW50U2Vjb25kID0gc2VjO1xuXHRcdGZyYW1lc0xhc3RTZWNvbmQgPSBmcmFtZUNvdW50O1xuXHRcdGZyYW1lQ291bnQgPSAxO1xuXHR9XG5cdGVsc2UgeyBmcmFtZUNvdW50Kys7IH1cblxuICAgIC8vIG1pdW1pdSBtb3ZlbWVudFxuXHRpZighbWl1bWl1LnByb2Nlc3NNb3ZlbWVudChjdXJyZW50RnJhbWVUaW1lKSkge1xuXHRcdGlmKGhlbGRLZXlzWzM4XSAmJiBtaXVtaXUuY2FuR29VcCgpKXsgXG4gICAgICAgICAgICBtaXVtaXUuZ29VcChjdXJyZW50RnJhbWVUaW1lKTsgXG4gICAgICAgIH0gZWxzZSBpZiAoaGVsZEtleXNbNDBdICYmIG1pdW1pdS5jYW5Hb0Rvd24oKSkgeyBcbiAgICAgICAgICAgIG1pdW1pdS5nb0Rvd24oY3VycmVudEZyYW1lVGltZSk7IFxuICAgICAgICB9IGVsc2UgaWYoaGVsZEtleXNbMzddICYmIG1pdW1pdS5jYW5Hb0xlZnQoKSkgeyBcbiAgICAgICAgICAgIG1pdW1pdS5nb0xlZnQoY3VycmVudEZyYW1lVGltZSk7IFxuICAgICAgICB9IGVsc2UgaWYoaGVsZEtleXNbMzldICYmIG1pdW1pdS5jYW5Hb1JpZ2h0KCkpIHsgXG4gICAgICAgICAgICBtaXVtaXUuZ29SaWdodChjdXJyZW50RnJhbWVUaW1lKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjYW1lcmHot5/nnYBtaXVtaXXotbBcbiAgICAgICAgY2FtZXJhLnVwZGF0ZShtaXVtaXUucG9zaXRpb25bMF0gKyAobWl1bWl1LmRpbWVuc2lvbnNbMF0gLyAyKSxcbiAgICAgICAgICAgIG1pdW1pdS5wb3NpdGlvblsxXSArIChtaXVtaXUuZGltZW5zaW9uc1sxXS8yKSk7XG5cblx0ICAgIGxldCBtaXVtaXVCdWlsZGluZzEgPSBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleChcblx0XHRtaXVtaXUudGlsZUZyb21bMF0sIG1pdW1pdS50aWxlRnJvbVsxXSldLmJ1aWxkaW5nO1xuXHQgICAgbGV0IG1pdW1pdUJ1aWxkaW5nMiA9IG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KFxuXHRcdG1pdW1pdS50aWxlVG9bMF0sIG1pdW1pdS50aWxlVG9bMV0pXS5idWlsZGluZztcblxuICAgICAgICAvLyDmuIXpmaRsYXN0IGZyYW1lXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbWVyYS5zY3JlZW5bMF0sIGNhbWVyYS5zY3JlZW5bMV0pO1xuICAgIFxuXG4gICAgZm9yKGxldCB6ID0gMDsgeiA8IG1hcFRpbGVEYXRhLmxldmVsczsgeisrKSB7XG5cdFx0Zm9yKGxldCB5ID0gY2FtZXJhLnN0YXJ0aW5nUG9pbnRbMV07IHkgPD0gY2FtZXJhLmVuZGluZ1BvaW50WzFdOyArK3kpIHtcblx0XHQgICAgZm9yKGxldCB4ID0gY2FtZXJhLnN0YXJ0aW5nUG9pbnRbMF07IHggPD0gY2FtZXJhLmVuZGluZ1BvaW50WzBdOyArK3gpIHtcbiAgICAgICAgICAgICAgICBpZih6PT0wKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSB0aWxlVHlwZXNbbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0udHlwZV07XG5cblx0XHRcdCAgICBjdHguZHJhd0ltYWdlKGdhbWV0aWxlLFxuXHRcdFx0XHR0aWxlLnNwcml0ZVswXS54LCB0aWxlLnNwcml0ZVswXS55LCB0aWxlLnNwcml0ZVswXS53LCB0aWxlLnNwcml0ZVswXS5oLFxuXHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgKHggKiB0aWxlV2lkdGgpLCBjYW1lcmEub2Zmc2V0WzFdICsgKHkgKiB0aWxlSGVpZ2h0KSxcbiAgICAgICAgICAgICAgICB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBvYmplY3QgPSBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5vYmplY3Q7XG5cdFx0XHRpZihvYmplY3QhPW51bGwgJiYgb2JqZWN0VHlwZXNbb2JqZWN0LnR5cGVdLnpJbmRleD09eilcblx0XHRcdHtcblx0XHRcdFx0bGV0IG9iamVjdFR5cGUgPSBvYmplY3RUeXBlc1tvYmplY3QudHlwZV07XG5cdFx0XHRcdCBcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZShnYW1ldGlsZSxcblx0XHRcdFx0XHRvYmplY3RUeXBlLnNwcml0ZVswXS54LCBvYmplY3RUeXBlLnNwcml0ZVswXS55LFxuXHRcdFx0XHRcdG9iamVjdFR5cGUuc3ByaXRlWzBdLncsIG9iamVjdFR5cGUuc3ByaXRlWzBdLmgsXG5cdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFswXSArICh4ICogdGlsZVdpZHRoKSArIG9iamVjdFR5cGUub2Zmc2V0WzBdLFxuXHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMV0gKyAoeSAqIHRpbGVIZWlnaHQpICsgb2JqZWN0VHlwZS5vZmZzZXRbMV0sXG5cdFx0XHRcdFx0b2JqZWN0VHlwZS5zcHJpdGVbMF0udywgb2JqZWN0VHlwZS5zcHJpdGVbMF0uaCk7XG5cdFx0XHR9XG5cbiAgICAgICAgICAgICAgIGlmKHogPT0gMiAmJiBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5idWlsZGluZ1R5cGUhPTAgJiZcblx0XHRcdFx0bWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmchPW1pdW1pdUJ1aWxkaW5nMSAmJlxuXHRcdFx0XHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5idWlsZGluZyE9bWl1bWl1QnVpbGRpbmcyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbGUgPSB0aWxlVHlwZXNbbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmdUeXBlXTtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlID0gZ2V0RnJhbWUodGlsZS5zcHJpdGUsIHRpbGUuc3ByaXRldGltZUxhc3QsIHRpbGUuYW5pbWF0aW9uKTtcbiAgICAgICAgICAgICAgICAgICAgY3R4LmRyYXdJbWFnZShnYW1ldGlsZSwgc3ByaXRlLngsIHNwcml0ZS55LCBzcHJpdGUudywgc3ByaXRlLmgsIGNhbWVyYS5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCksIGNhbWVyYS5vZmZzZXRbMV0gKyAoeSAqIHRpbGVIZWlnaHQpLCB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpO1xuXHRcdFx0fVxuXHRcdH1cbiAgICB9XG5cbiAgICBpZiAoeiA9PSAxKSB7XG5cdFx0XHRsZXQgc3ByaXRlID0gbWl1bWl1LnNwcml0ZXNbbWl1bWl1LmRpcmVjdGlvbl07XG5cdFx0XHRjdHguZHJhd0ltYWdlKGdhbWV0aWxlLFxuXHRcdFx0XHRzcHJpdGVbMF0ueCwgc3ByaXRlWzBdLnksXG5cdFx0XHRcdHNwcml0ZVswXS53LCBzcHJpdGVbMF0uaCxcblx0XHRcdFx0Y2FtZXJhLm9mZnNldFswXSArIG1pdW1pdS5wb3NpdGlvblswXSxcblx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArIG1pdW1pdS5wb3NpdGlvblsxXSxcblx0XHRcdFx0bWl1bWl1LmRpbWVuc2lvbnNbMF0sIG1pdW1pdS5kaW1lbnNpb25zWzFdKTtcblx0XHR9XG5cdFxuXHR9XG4gICAgXG4gICAgLy8gZHJhdyB0aGUgbWl1bWl1XG4gICAgbGV0IHNwcml0ZSA9IG1pdW1pdS5zcHJpdGVzW21pdW1pdS5kaXJlY3Rpb25dO1xuXHRjdHguZHJhd0ltYWdlKGdhbWV0aWxlLFxuXHRcdHNwcml0ZVswXS54LCBzcHJpdGVbMF0ueSwgc3ByaXRlWzBdLncsIHNwcml0ZVswXS5oLFxuXHRcdGNhbWVyYS5vZmZzZXRbMF0gKyBtaXVtaXUucG9zaXRpb25bMF0sIGNhbWVyYS5vZmZzZXRbMV0gKyBtaXVtaXUucG9zaXRpb25bMV0sXG5cdFx0bWl1bWl1LmRpbWVuc2lvbnNbMF0sIG1pdW1pdS5kaW1lbnNpb25zWzFdKTtcblxuXG5cdGxhc3RGcmFtZVRpbWUgPSBjdXJyZW50RnJhbWVUaW1lO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==