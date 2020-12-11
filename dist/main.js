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
    floor: floorTypes.path,
    sprite: [{
      x: 80,
      y: 80,
      w: 40,
      h: 40
    }]
  },
  22: {
    colour: "#d77c4b",
    floor: floorTypes.path,
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
  data: [10, 11, 11, 11, 11, 12, 16, 18, 16, 18, 17, 18, 16, 18, 16, 18, 17, 18, 16, 18, 16, 18, 17, 18, 16, 18, 16, 18, 17, 18]
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
  var fence2 = new GameObjects(2);
  fence2.placeAt(9, 2);
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
  ctx.fillRect(0, 0, camera.screen[0], camera.screen[1]); // nested loops: y and x

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJoZWxkS2V5cyIsImRpcmVjdGlvbnMiLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJmbG9vclR5cGVzIiwic29saWQiLCJwYXRoIiwib2NlYW4iLCJ0aWxlVHlwZXMiLCJjb2xvdXIiLCJmbG9vciIsInNwcml0ZSIsIngiLCJ5IiwidyIsImgiLCJjb2xsaXNpb25zIiwibm9uZSIsIm9iamVjdFR5cGVzIiwibmFtZSIsIm9mZnNldCIsImNvbGxpc2lvbiIsInpJbmRleCIsIml0ZW1UeXBlcyIsIm1heFN0YWNrIiwiZ2FtZXRpbGUiLCJnYW1ldGlsZVVSTCIsImFydExvYWRlZCIsIm1pdW1pdSIsIk1pdU1pdSIsInRpbGVGcm9tIiwidGlsZVRvIiwidGltZU1vdmVkIiwiZGVsYXlNb3ZlIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwiZGlyZWN0aW9uIiwic3ByaXRlcyIsInByb3RvdHlwZSIsImxvY2F0aW9uIiwicHJvY2Vzc01vdmVtZW50IiwidCIsIm1hcFRpbGVEYXRhIiwibWFwIiwidG9JbmRleCIsImV2ZW50RW50ZXIiLCJkaWZmZXJlbmNlIiwiTWF0aCIsInJvdW5kIiwicGxhY2VzQ2FuR28iLCJvYmplY3QiLCJvIiwidHlwZSIsImNhbkdvVXAiLCJjYW5Hb0Rvd24iLCJjYW5Hb0xlZnQiLCJjYW5Hb1JpZ2h0IiwiZ29MZWZ0IiwiZ29SaWdodCIsImdvVXAiLCJnb0Rvd24iLCJjYW1lcmEiLCJzY3JlZW4iLCJzdGFydGluZ1BvaW50IiwiZW5kaW5nUG9pbnQiLCJ1cGRhdGUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInRpbGUiLCJjZWlsIiwiVGlsZU1hcCIsImJ1aWxkaW5nc0xvY2F0aW9uIiwiZGF0YSIsIlRpbGUiLCJ0aWxlWCIsInRpbGVZIiwidGlsZVR5cGUiLCJidWlsZGluZyIsImJ1aWxkaW5nVHlwZSIsImxldmVscyIsImJ1aWxkTWFwRnJvbURhdGEiLCJ0aWxlSWQiLCJsZW5ndGgiLCJwdXNoIiwiYWRkQnVpbGRpbmdzIiwiYnVpbGRpbmdzIiwiaSIsInRpbGVJZHgiLCJHYW1lT2JqZWN0cyIsIm50IiwicGxhY2VBdCIsIm54IiwibnkiLCJnZXRGcmFtZSIsInRpbWVMYXN0IiwidGltZSIsImFuaW1hdGlvbiIsImVuZCIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhd0dhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJ3aWR0aCIsImhlaWdodCIsIkltYWdlIiwib25lcnJvciIsImFsZXJ0Iiwic3JjIiwiY29uc29sZSIsImxvZyIsImZlbmNlMSIsImZlbmNlMiIsImZsb3dlcjEiLCJmbG93ZXIyIiwiZmxvd2VyMyIsInRyZWUxIiwidHJlZTIiLCJ0cmVlMyIsInRyZWU0IiwibWFzaHJvb20xIiwiY3VycmVudEZyYW1lVGltZSIsIkRhdGUiLCJub3ciLCJzZWMiLCJtaXVtaXVCdWlsZGluZzEiLCJtaXVtaXVCdWlsZGluZzIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInoiLCJkcmF3SW1hZ2UiLCJvYmplY3RUeXBlIiwic3ByaXRldGltZUxhc3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFF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Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3NjcmlwdHMvbWFwXCI7XG5cblxuXG4iLCIvLyBpIHdhbnQgYSBjYW1lcmEgZm9sbG93aW5nIHRoZSBjaGFyIGFyb3VuZCB0aGUgbWFwXG5cblxubGV0IGN0eCA9IG51bGw7XG5cbi8vIGNyZWF0ZSBhIG1hcCB3aXRoIDEwKjEwIHRpbGVcbmxldCBnYW1lTWFwID0gW1xuXHQwLCAwLCAwLCAwLCAwLCA2LCA1LCA1LCA3LCAwLCA1LCA1LCA1LCA1LCA1LCA1LCAwLCAwLCAwLCAwLFxuXHQwLCAxLCAxLCAxLCAxLCAyMSwgMjAsIDIwLCAyMiwgMSwgNSwgMiwgMiwgMiwgMiwgNSwgMiwgMiwgMiwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMjEsIDIwLCAyMCwgMjIsIDEsIDUsIDIsIDIsIDIsIDIsIDUsIDIsIDIsIDIsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDIxLCAyMCwgMjAsIDIyLCAxLCA1LCAyLCAyLCAyLCAyLCA1LCAyLCAyLCAyLCAwLFxuXHQwLCAxLCAxLCAxLCAxLCAxNiwgMjAsIDE2LCAxOCwgMSwgNSwgNSwgNSwgNSwgMiwgNSwgMiwgMiwgMiwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMiwgMiwgMiwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMiwgMiwgMiwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgNSwgNSwgNSwgNSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgNSwgMiwgMiwgNSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcbiAgICAwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCA1LCAyLCAyLCA1LCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCA1LCAyLCA1LCA1LCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0XG5dO1xuLy8g5q+P5Liq5Zyw56CW5aSa5bCRcGl4ZWxcbmxldCB0aWxlV2lkdGggPSA0MDtcbmxldCB0aWxlSGVpZ2h0ID0gNDA7XG4vLyDlnLDlm77lpKflsI/lsLHmmK8xMCoxMFxubGV0IG1hcFdpZHRoID0gMjA7XG5sZXQgbWFwSGVpZ2h0ID0gMjA7XG4vLyBmcmFtZXJhdGVcbmxldCBjdXJyZW50U2Vjb25kID0gMDtcbmxldCBmcmFtZUNvdW50ID0gMDtcbmxldCBmcmFtZXNMYXN0U2Vjb25kID0gMDtcbmxldCBsYXN0RnJhbWVUaW1lID0gMDtcblxuXG4vLyBrZXlDb2RlIDogYm9vbGVhbiB0byB0ZWxsIHVzIHdoaWNoIG9uZSBhcmUgcHJlc3NlZFxubGV0IGhlbGRLZXlzID0ge1xuICAgIC8vIDM3OiBsZWZ0XG4gICAgMzcgOiBmYWxzZSxcbiAgICAvLyAzODogdXBcbiAgICAzOCA6IGZhbHNlLFxuICAgIC8vIDM5OiByaWdodFxuICAgIDM5IDogZmFsc2UsXG4gICAgLy8gNDA6IGRvd25cbiAgICA0MCA6IGZhbHNlXG4gICAgLy8gMzI6IHNwYWNlXG59O1xuXG5sZXQgZGlyZWN0aW9ucyA9IHtcblx0dXBcdDogMCxcblx0cmlnaHQ6IDEsXG5cdGRvd246IDIsXG5cdGxlZnQ6IDNcbn07XG5cblxuLy8g5Zyw5p2/56eN57G7XG5sZXQgZmxvb3JUeXBlcyA9IHtcbiAgICBzb2xpZDogMCxcbiAgICBwYXRoOiAxLFxuICAgIG9jZWFuOiAyXG59O1xuXG4vLyDmlbDlrZfvvIhnYW1lTWFw77yJ5a+55bqU5LiK6aKc6Imy5ZKM5Zyw5p2/56eN57G7XG4vLyAwOuWimeWjgSAxOuiNieWcsCAyOumZhuWcsCA1OuWGhemDqOWimeWjgSA0OiDmsLQgNjog5YaF6YOo5aKZ5aOB5bem6KeSIDc65YaF6YOo5aKZ5aOB5Y+z6KeSXG4vLyAyMDrlhoXpg6jlnLDmnb8gMjE65YaF6YOo5aKZ5bemIDIyOuWGhemDqOWimeWPs1xubGV0IHRpbGVUeXBlcyA9IHtcblx0MCA6IHsgY29sb3VyOiBcIiM3OTNkNGNcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MCx5OjAsdzo0MCxoOjQwfV0gfSxcblx0MSA6IHsgY29sb3VyOiBcIiM2ZGY3YjFcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo0MCx5OjAsdzo0MCxoOjQwfV0gfSxcblx0MiA6IHsgY29sb3VyOiBcIiNjOTc0NjFcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo4MCx5OjAsdzo0MCxoOjQwfV1cdH0sXG4gICAgNCA6IHsgY29sb3VyOiBcIiMwMDhkZjBcIiwgZmxvb3I6IGZsb29yVHlwZXMub2NlYW4sIHNwcml0ZTpbe3g6MTYwLHk6MCx3OjQwLGg6NDB9XSB9LFxuICAgIDUgOiB7IGNvbG91cjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjEyMCx5OjAsdzo0MCxoOjQwfV0gfSxcbiAgICA2IDogeyBjb2xvdXI6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoxMjAseTo0MCx3OjQwLGg6NDB9XSB9LFxuICAgIDcgOiB7IGNvbG91cjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjgwLHk6NDAsdzo0MCxoOjQwfV0gfSxcbiAgICAxMCA6IHsgY29sb3VyOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI0MCx5OjQwLHc6NDAsaDo0MH1dfSxcbiAgICAxMSA6IHsgY29sb3VyOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjQwLHc6NDAsaDo0MH1dfSxcbiAgICAxMiA6IHsgY29sb3VyOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjQwLHc6NDAsaDo0MH1dfSxcbiAgICAxMyA6IHsgY29sb3VyOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI0MCx5OjgwLHc6NDAsaDo0MH1dfSxcbiAgICAxNCA6IHsgY29sb3VyOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjgwLHc6NDAsaDo0MH1dfSxcbiAgICAxNSA6IHsgY29sb3VyOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjgwLHc6NDAsaDo0MH1dfSxcbiAgICAxNiA6IHsgY29sb3VyOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI0MCx5OjEyMCx3OjQwLGg6NDB9XX0sXG4gICAgMTcgOiB7IGNvbG91cjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyODAseToxMjAsdzo0MCxoOjQwfV19LFxuICAgIDE4IDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6MTIwLHc6NDAsaDo0MH1dfSxcbiAgICAyMCA6IHsgY29sb3VyOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo0MCx5OjQwLHc6NDAsaDo0MH1dfSxcbiAgICAyMSA6IHsgY29sb3VyOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo4MCx5OjgwLHc6NDAsaDo0MH1dfSxcbiAgICAyMiA6IHsgY29sb3VyOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDoxMjAseTo4MCx3OjQwLGg6NDB9XX1cbn07XG5cbmxldCBjb2xsaXNpb25zID0ge1xuXHRub25lXHRcdDogMCxcblx0c29saWRcdFx0OiAxXG59O1xuXG5sZXQgb2JqZWN0VHlwZXMgPSB7XG5cdDEgOiB7XG5cdFx0bmFtZSA6IFwiRmxvd2VyXCIsXG5cdFx0c3ByaXRlIDogW3t4OjQwLHk6MTgwLHc6NDAsaDoyMH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMubm9uZSxcblx0XHR6SW5kZXggOiAxXG5cdH0sXG5cdDIgOiB7XG5cdFx0bmFtZSA6IFwiZmVuY2VcIixcblx0XHRzcHJpdGUgOiBbe3g6NDAseToyMDAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAxXG5cdH0sXG5cdDMgOiB7XG5cdFx0bmFtZSA6IFwiVHJlZVwiLFxuXHRcdHNwcml0ZSA6IFt7eDo4MCx5OjE2MCx3OjgwLGg6ODB9XSxcblx0XHRvZmZzZXQgOiBbLTIwLC0yMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5zb2xpZCxcblx0XHR6SW5kZXggOiAzXG4gICAgfSxcbiAgICA0IDoge1xuXHRcdG5hbWUgOiBcIm1hc2hyb29tc1wiLFxuXHRcdHNwcml0ZSA6IFt7eDo0MCx5OjE2MCx3OjQwLGg6MjB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLm5vbmUsXG5cdFx0ekluZGV4IDogMVxuXHR9LFxufTtcblxuXG4vLyDnianlk4FcbmxldCBpdGVtVHlwZXMgPSB7XG4gICAgMSA6IHtcblx0XHRuYW1lIDogXCJjb2NvbnV0XCIsXG5cdFx0bWF4U3RhY2sgOiA1LFxuXHRcdHNwcml0ZSA6IFt7eDoyNDAseTowLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdXG4gICAgfSxcbiAgICAyIDoge1xuXHRcdG5hbWUgOiBcInN0cmF3YmVycnlcIixcblx0XHRtYXhTdGFjayA6IDUsXG5cdFx0c3ByaXRlIDogW3t4OjI4MCx5OjAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF1cblx0fVxufTtcblxuXG5cbmxldCBnYW1ldGlsZSA9IG51bGwsIGdhbWV0aWxlVVJMID0gXCJzcmMvaW1hZ2VzL3RpbGVzZXRlc3R0LnBuZ1wiLCBhcnRMb2FkZWQgPSBmYWxzZTtcblxuXG5cbi8vIOWIm+W7uuS4gOS4quinkuiJsiAobWl1bWl1KVxubGV0IG1pdW1pdSA9IG5ldyBNaXVNaXUoKTtcbi8vIOWKoOabtOWkmuinkuiJsuKsh1xuZnVuY3Rpb24gTWl1TWl1KCkge1xuICAgIHRoaXMudGlsZUZyb21cdD0gWzEsMV07XG4gICAgLy8gbWl1bWl155qE5L2N572uXG4gICAgdGhpcy50aWxlVG9cdFx0PSBbNiwzXTtcbiAgICAvLyB0aW1lIGluIG1pbGxzZWNvbmRzXG4gICAgdGhpcy50aW1lTW92ZWRcdD0gMDtcbiAgICB0aGlzLmRlbGF5TW92ZVx0PSA3MDA7XG5cdHRoaXMuZGltZW5zaW9uc1x0PSBbNDAsNDBdO1xuICAgIHRoaXMucG9zaXRpb25cdD0gWzQ1LDQ1XTtcbiAgICBcbiAgICB0aGlzLmRpcmVjdGlvblx0PSBkaXJlY3Rpb25zLnVwO1xuXHR0aGlzLnNwcml0ZXMgPSB7fTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMudXBdXHRcdD0gW3t4OjAseToxMjAsdzozMCxoOjMwfV07XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLnJpZ2h0XVx0PSBbe3g6MCx5OjE1MCx3OjMwLGg6MzB9XTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMuZG93bl1cdD0gW3t4OjAseToxODAsdzozMCxoOjMwfV07XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLmxlZnRdXHQ9IFt7eDowLHk6MjEwLHc6MzAsaDozMH1dO1xufVxuXG5cbi8vIOaKiuinkuiJsuaUvuWcqOWcsOegluS4ilxuTWl1TWl1LnByb3RvdHlwZS5sb2NhdGlvbiA9IGZ1bmN0aW9uKHgsIHkpIHtcblx0dGhpcy50aWxlRnJvbVx0PSBbeCx5XTtcbiAgICB0aGlzLnRpbGVUb1x0XHQ9IFt4LHldO1xuICAgIC8vIHggYW5kIHkgcG9zaXRpb24gb2YgdGhlIHRpbGUuIHVwZGF0ZSB0aGUgdGlsZUZyb20gYW5kIHRpbGVUbyBwcm9wZXJ0aWVzIHRvIHRoZSBuZXcgdGlsZSBjb29yZGluYXRlc1xuICAgIC8vIGNhbGN1bGF0ZXMgdGhlIHBpeGVsIHBvc2l0aW9uIG9mIHRoZSBjaGFyYWN5ZXIgdXNlIGJlbG93XG5cdHRoaXMucG9zaXRpb25cdD0gWygoIHRpbGVXaWR0aCAqIHggKSsoICh0aWxlV2lkdGggLSB0aGlzLmRpbWVuc2lvbnNbMF0pIC8gMiApKSxcblx0XHQoKCB0aWxlSGVpZ2h0ICogeSApKyggKHRpbGVIZWlnaHQgLSB0aGlzLmRpbWVuc2lvbnNbMV0pIC8gMiApKV07XG59O1xuXG4vLyDmoLnmja7mr4/kuKrluKfmlbDmib7liLDop5LoibLkvY3nva5cbk1pdU1pdS5wcm90b3R5cGUucHJvY2Vzc01vdmVtZW50ID0gZnVuY3Rpb24odCkge1xuICAgIC8vIGlmIGNoYXIgdGlsZVRvID09IHRpbGVGcm9tIGNoYXIgaXMgbm90IG1vdmluZywgc28gcmV0dXJuIGZhbHNlXG5cdGlmKCB0aGlzLnRpbGVGcm9tWzBdID09IHRoaXMudGlsZVRvWzBdICYmIHRoaXMudGlsZUZyb21bMV0gPT0gdGhpcy50aWxlVG9bMV0pIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgLy8gaWYgdGhlIGFtb3VudCBvZiB0aW1lIHBhc3NlZCBzaW5jZSBjaGFyIGJlZ2FuIGl0cyBjdXJyZW50IG1vdmUgPj0gdGhlIHRpbWUgZm9yIGNoYXIgdG8gbW92ZSAxIHRpbGUuIHdlIHNldCBwb3NpdGlvbiB1c2luZyBsb2NhdGlvbiBmdW5jdGlvblxuICAgIC8vIGFrYTogaWYgY2hhciBzdGlsbCBtb3Zpbmdcblx0aWYoKHQgLSB0aGlzLnRpbWVNb3ZlZCkgPj0gdGhpcy5kZWxheU1vdmUpIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbih0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pO1xuICAgICAgICBpZihtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pXS5ldmVudEVudGVyIT1udWxsKVxuXHRcdHtcblx0XHRcdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSldLmV2ZW50RW50ZXIodGhpcyk7XG4gICAgICAgIH1cblx0fSBlbHNlIHtcbiAgICAgICAgLy8gY3VycmVudCBwb3NpdGlvbiBvbiBjYW52YXNcblx0XHR0aGlzLnBvc2l0aW9uWzBdID0gKHRoaXMudGlsZUZyb21bMF0gKiB0aWxlV2lkdGgpICsgKCh0aWxlV2lkdGgtdGhpcy5kaW1lbnNpb25zWzBdKS8yKTtcblx0XHR0aGlzLnBvc2l0aW9uWzFdID0gKHRoaXMudGlsZUZyb21bMV0gKiB0aWxlSGVpZ2h0KSArICgodGlsZUhlaWdodC10aGlzLmRpbWVuc2lvbnNbMV0pLzIpO1xuXG4gICAgICAgIC8vIGlmIGNoYXIgaXMgbW92aW5nIG9uIHggY29vcmRpbmF0ZSwgY2FsY3VsYXRlIHBpeGVsc1xuXHRcdGlmKHRoaXMudGlsZVRvWzBdICE9IHRoaXMudGlsZUZyb21bMF0pIHtcbiAgICAgICAgICAgIC8vIGRpZmZlcmVuY2UgPSBkaXN0YW5jZSBtb3ZlZFxuICAgICAgICAgICAgLy8g5Yqg5YeP56e75Yqo55qE5Zyw56CW5Yiw6KeS6Imy55qE5L2N5a2QXG5cdFx0XHRsZXQgZGlmZmVyZW5jZSA9ICh0aWxlV2lkdGggLyB0aGlzLmRlbGF5TW92ZSkgKiAodCAtIHRoaXMudGltZU1vdmVkKTtcblx0XHRcdHRoaXMucG9zaXRpb25bMF0rPSAodGhpcy50aWxlVG9bMF0gPCB0aGlzLnRpbGVGcm9tWzBdID8gMCAtIGRpZmZlcmVuY2UgOiBkaWZmZXJlbmNlKTtcblx0XHR9XG5cdCAgICBpZih0aGlzLnRpbGVUb1sxXSAhPSB0aGlzLnRpbGVGcm9tWzFdKSB7XG5cdFx0XHRsZXQgZGlmZmVyZW5jZSA9ICh0aWxlSGVpZ2h0IC8gdGhpcy5kZWxheU1vdmUpICogKHQtdGhpcy50aW1lTW92ZWQpO1xuXHRcdFx0dGhpcy5wb3NpdGlvblsxXSs9ICh0aGlzLnRpbGVUb1sxXTx0aGlzLnRpbGVGcm9tWzFdID8gMCAtIGRpZmZlcmVuY2UgOiBkaWZmZXJlbmNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByb3VuZCB4ICYgeSB0byB3aG9sZSBudW1iZXIg6ZyA6KaB5pW05pWwXG5cdFx0dGhpcy5wb3NpdGlvblswXSA9IE1hdGgucm91bmQodGhpcy5wb3NpdGlvblswXSk7XG5cdFx0dGhpcy5wb3NpdGlvblsxXSA9IE1hdGgucm91bmQodGhpcy5wb3NpdGlvblsxXSk7XG4gICAgfVxuICAgIC8vIHRydWUgPSBjaGFyIGlzIGN1cnJlbnRseSBtb3Zpbmdcblx0cmV0dXJuIHRydWU7XG59XG5cblxuLy8gaWYgY2hhciBjYW4gbW92ZSBpbiBhIHNwZWNpZmljIGRpcmVjXG5NaXVNaXUucHJvdG90eXBlLnBsYWNlc0NhbkdvID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIC8vIGlmIHggYW5kIHkgaXMgaW4gbWFwIGJvdW5kXG4gICAgaWYoeCA8IDAgfHwgeCA+PSBtYXBXaWR0aCB8fCB5IDwgMCB8fCB5ID49IG1hcEhlaWdodCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAvLyBpZiB0aGUgdGlsZSBpcyBwYXRoIHRpbGUgKG9ubHkgbW92ZSBpZiBpdHMgYSBwYXRoKVxuICAgICAgICBpZih0aWxlVHlwZXNbZ2FtZU1hcFt0b0luZGV4KHgseSldXS5mbG9vciE9Zmxvb3JUeXBlcy5wYXRoKSB7IHJldHVybiBmYWxzZTsgfVxuICAgICAgICBpZihtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5vYmplY3QhPW51bGwpXG5cdHtcblx0XHRsZXQgbyA9IG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLm9iamVjdDtcblx0XHRpZihvYmplY3RUeXBlc1tvLnR5cGVdLmNvbGxpc2lvbj09Y29sbGlzaW9ucy5zb2xpZClcblx0XHR7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXHR9XG5cdHJldHVybiB0cnVlO1xufTtcbk1pdU1pdS5wcm90b3R5cGUuY2FuR29VcCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5wbGFjZXNDYW5Hbyh0aGlzLnRpbGVGcm9tWzBdLCB0aGlzLnRpbGVGcm9tWzFdIC0gMSk7IH07XG5NaXVNaXUucHJvdG90eXBlLmNhbkdvRG93biA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5wbGFjZXNDYW5Hbyh0aGlzLnRpbGVGcm9tWzBdLCB0aGlzLnRpbGVGcm9tWzFdICsgMSk7IH07XG5NaXVNaXUucHJvdG90eXBlLmNhbkdvTGVmdCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5wbGFjZXNDYW5Hbyh0aGlzLnRpbGVGcm9tWzBdLTEsIHRoaXMudGlsZUZyb21bMV0pOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5jYW5Hb1JpZ2h0ID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLnBsYWNlc0NhbkdvKHRoaXMudGlsZUZyb21bMF0rMSwgdGhpcy50aWxlRnJvbVsxXSk7IH07XG5cbk1pdU1pdS5wcm90b3R5cGUuZ29MZWZ0ID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1swXS09IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLmxlZnQ7IH07XG5NaXVNaXUucHJvdG90eXBlLmdvUmlnaHQgPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzBdKz0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMucmlnaHQ7IH07XG5NaXVNaXUucHJvdG90eXBlLmdvVXAgPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzFdLT0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMudXA7IH07XG5NaXVNaXUucHJvdG90eXBlLmdvRG93biA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMV0rPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5kb3duOyB9O1xuXG5cblxuLy8gY3JlYXRlIGEgY2FtZXJhIG9iamVjdFxubGV0IGNhbWVyYSA9IHtcbiAgICBzY3JlZW46IFswLDBdLFxuICAgIC8vIOeUu+mdouW3puS4iuinklxuICAgIHN0YXJ0aW5nUG9pbnQ6IFswLDBdLFxuICAgIC8vIOeUu+mdouWPs+S4i+inklxuICAgIGVuZGluZ1BvaW50OiBbMCwwXSxcbiAgICAvLyDor6/lt65cbiAgICBvZmZzZXQ6IFswLDBdLFxuICAgIC8vIHVwZGF0ZSBmdW5jdGlvbiwgeCB5IGlzIG91ciBjZW50ZXIgYXJlYVxuICAgIHVwZGF0ZTogZnVuY3Rpb24ob2Zmc2V0WCwgb2Zmc2V0WSkge1xuICAgICAgICAvLyBvZmZzZXQ6IGhhbGYgdGhlIGNhbnZhcyB3aWR0aCB8fCBoZWlnaHQgKHJvdW5kIGRvd24gdG8gd2hvbGUgbnVtKVxuXHRcdHRoaXMub2Zmc2V0WzBdID0gTWF0aC5mbG9vcigodGhpcy5zY3JlZW5bMF0vMikgLSBvZmZzZXRYKTtcbiAgICAgICAgdGhpcy5vZmZzZXRbMV0gPSBNYXRoLmZsb29yKCh0aGlzLnNjcmVlblsxXS8yKSAtIG9mZnNldFkpO1xuXG4gICAgICAgIC8vIOWcsOegluWcqOWcsOWbvuS4iueahOS9jee9rlxuICAgICAgICBsZXQgdGlsZSA9IFsgTWF0aC5mbG9vcihvZmZzZXRYIC8gdGlsZVdpZHRoKSwgTWF0aC5mbG9vcihvZmZzZXRZIC8gdGlsZUhlaWdodCkgXTtcbiAgICAgICAgLy8gIOiuoeeul+esrOS4gOS4quWcsOegluS9jee9ruWcqHjnur/kuIrvvJog5pyA5aSn5Zyw56CW5pWw6YePIC0g5bGP5bmV55qE5LiA5Y2KXG4gICAgICAgIC8vICDlpJrlh4/ljrsx6L+Z5qC35Zyw56CW5Y+v5Lulc2hvd+S4gOWNiuWcqOWxj+W5leS4ilxuICAgICAgICB0aGlzLnN0YXJ0aW5nUG9pbnRbMF0gPSB0aWxlWzBdIC0gTWF0aC5jZWlsKCh0aGlzLnNjcmVlblswXS8yKSAvIHRpbGVXaWR0aCkgIC0gMTtcblx0XHR0aGlzLnN0YXJ0aW5nUG9pbnRbMV0gPSB0aWxlWzFdIC0gTWF0aC5jZWlsKCh0aGlzLnNjcmVlblsxXS8yKSAvIHRpbGVIZWlnaHQpICAtIDE7XG5cbiAgICAgICAgLy8g56Gu5L+deOWSjHnpg73lpKfkuo4w6KaB5LmI5Lya5Zyo5Zyw5Zu+5aSWXG4gICAgICAgIGlmKHRoaXMuc3RhcnRpbmdQb2ludFswXSA8PSAtMSkgeyB0aGlzLnN0YXJ0aW5nUG9pbnRbMF0gPSAwOyB9XG5cdFx0aWYodGhpcy5zdGFydGluZ1BvaW50WzFdIDw9IC0xKSB7IHRoaXMuc3RhcnRpbmdQb2ludFsxXSA9IDA7IH1cblxuICAgICAgICB0aGlzLmVuZGluZ1BvaW50WzBdID0gdGlsZVswXSArIDEgKyBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzBdLzIpIC8gdGlsZVdpZHRoKTtcblx0XHR0aGlzLmVuZGluZ1BvaW50WzFdID0gdGlsZVsxXSArIDEgKyBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzFdLzIpIC8gdGlsZUhlaWdodCk7XG5cblx0XHRpZih0aGlzLmVuZGluZ1BvaW50WzBdID49IG1hcFdpZHRoKSB7IHRoaXMuZW5kaW5nUG9pbnRbMF0gPSBtYXBXaWR0aCAtMTsgfVxuXHRcdGlmKHRoaXMuZW5kaW5nUG9pbnRbMV0gPj0gbWFwSGVpZ2h0KSB7IHRoaXMuZW5kaW5nUG9pbnRbMV0gPSBtYXBIZWlnaHQgLSAxOyB9XG4gICAgICAgIH1cbn07XG5cblxuLy8gYnVpbGRpbmdzXG5cbmxldCBtYXBUaWxlRGF0YSA9IG5ldyBUaWxlTWFwKCk7XG5sZXQgYnVpbGRpbmdzTG9jYXRpb24gPSBbXG5cdHsgeDo1LCB5OjAsIHc6NCwgaDo1LCBkYXRhOiBbXG5cdFx0MTAsIDExLCAxMSwgMTIsXG4gICAgICAgIDEzLCAxNCwgMTQsIDE1LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTgsXG4gICAgICAgIDE2LCAxNywgMTYsIDE4XG5cdF19LFxuXHR7IHg6MTAsIHk6MCwgdzo2LCBoOjUsIGRhdGE6IFtcblx0XHQxMCwgMTEsIDExLCAxMSwgMTEsIDEyLFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCwgMTcsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCwgMTcsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCwgMTcsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCwgMTcsIDE4XG5cdF19LFxuXHR7IHg6OCwgeTo4LCB3OjQsIGg6NCwgZGF0YTogW1xuICAgICAgICAxMCwgMTEsIDExLCAxMixcbiAgICAgICAgMTMsIDE0LCAxNCwgMTUsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LFxuICAgICAgICAxNiwgMTcsIDE2LCAxOFxuXHRdfVxuXTtcblxuLy8gc3RvcmVzIGluZm9ybWF0aW9uIGZvciBlYWNoIG1hcCB0aWxlXG5mdW5jdGlvbiBUaWxlKHRpbGVYLCB0aWxlWSwgdGlsZVR5cGUpXG57XG4gICAgLy8gdGlsZVksIHRpbGVYID0gdGhlIHBvc2l0aW9uIG9mIHRoZSB0aWxlIG9uIHRoZSBtYXBcblx0dGhpcy54XHRcdFx0PSB0aWxlWDtcblx0dGhpcy55XHRcdFx0PSB0aWxlWTtcblx0dGhpcy50eXBlXHRcdD0gdGlsZVR5cGU7XG5cdHRoaXMuYnVpbGRpbmdcdFx0PSBudWxsO1xuICAgIHRoaXMuYnVpbGRpbmdUeXBlXHQ9IDA7XG4gICAgLy8gIHBvaW50ZXIgdG8gYSBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gYSBNaXVNaXUgaGFzIGNvbXBsZXRlZCBtb3Zpbmcgb24gdG8gdGhpcyB0aWxlXG4gICAgdGhpcy5ldmVudEVudGVyXHQ9IG51bGw7XG4gICAgdGhpcy5vYmplY3RcdFx0PSBudWxsO1xuXG59XG5cbi8vIOWCqOWtmOeuoeeQhuWcsOWbvuaVsOaNrlxuZnVuY3Rpb24gVGlsZU1hcCgpIHtcblx0dGhpcy5tYXBcdD0gW107XG5cdHRoaXMud1x0XHQ9IDA7XG4gICAgdGhpcy5oXHRcdD0gMDtcblx0dGhpcy5sZXZlbHNcdD0gNDtcbn1cblxuVGlsZU1hcC5wcm90b3R5cGUuYnVpbGRNYXBGcm9tRGF0YSA9IGZ1bmN0aW9uKHRpbGVJZCwgdywgaCkge1xuXHR0aGlzLndcdFx0PSB3O1xuICAgIHRoaXMuaFx0XHQ9IGg7XG5cbiAgICBpZih0aWxlSWQubGVuZ3RoIT0odyAqIGgpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcbiAgICB0aGlzLm1hcC5sZW5ndGhcdD0gMDtcbiAgICBcdGZvcihsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcblx0XHQgICAgZm9yKGxldCB4ID0gMDsgeCA8IHc7IHgrKykge1xuXHRcdFx0dGhpcy5tYXAucHVzaCggbmV3IFRpbGUoeCwgeSwgdGlsZUlkWyAoeCArICh3ICogeSkpXSkgKTtcblx0XHR9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcblxuXG5UaWxlTWFwLnByb3RvdHlwZS5hZGRCdWlsZGluZ3MgPSBmdW5jdGlvbihidWlsZGluZ3MpXG57XG5cdGZvcihsZXQgaSBpbiBidWlsZGluZ3MpXG5cdHtcbiAgICAgICAgbGV0IGJ1aWxkaW5nID0gYnVpbGRpbmdzW2ldO1xuICAgICAgICBpZihidWlsZGluZy54IDwgMCB8fCBidWlsZGluZy55IDwgMCB8fCBidWlsZGluZy54ID49IHRoaXMudyB8fCBidWlsZGluZy55ID49IHRoaXMuaCB8fFx0KGJ1aWxkaW5nLngrYnVpbGRpbmcudyk+dGhpcy53IHx8IChidWlsZGluZy55K2J1aWxkaW5nLmgpPnRoaXMuaCB8fCBidWlsZGluZy5kYXRhLmxlbmd0aCE9KGJ1aWxkaW5nLncqYnVpbGRpbmcuaCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGZvcihsZXQgeSA9IDA7IHkgPCBidWlsZGluZy5oOyB5KyspIHtcblx0XHRcdGZvcihsZXQgeCA9IDA7IHggPCBidWlsZGluZy53OyB4KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZUlkeCA9ICgoKGJ1aWxkaW5nLnkgKyB5KSAqIHRoaXMudykrYnVpbGRpbmcueCArIHgpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFwW3RpbGVJZHhdLmJ1aWxkaW5nID0gYnVpbGRpbmc7XG5cdFx0XHRcdHRoaXMubWFwW3RpbGVJZHhdLmJ1aWxkaW5nVHlwZSA9IGJ1aWxkaW5nLmRhdGFbKCAoeSAqIGJ1aWxkaW5nLncpICsgeCldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuLy8g54mp5ZOB5pGG5pS+XG5mdW5jdGlvbiBHYW1lT2JqZWN0cyhudClcbntcblx0dGhpcy54XHRcdD0gMDtcblx0dGhpcy55XHRcdD0gMDtcblx0dGhpcy50eXBlXHQ9IG50O1xufVxuXG5HYW1lT2JqZWN0cy5wcm90b3R5cGUucGxhY2VBdCA9IGZ1bmN0aW9uKG54LCBueSlcbntcblx0aWYobWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy54LCB0aGlzLnkpXS5vYmplY3Q9PXRoaXMpXG5cdHtcblx0XHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLngsIHRoaXMueSldLm9iamVjdCA9IG51bGw7XG4gICAgfVxuICAgIHRoaXMueCA9IG54O1xuXHR0aGlzLnkgPSBueTtcblx0XG5cdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KG54LCBueSldLm9iamVjdCA9IHRoaXM7XG59O1xuXG5cblxuLy8gY29udmVydCB4LCB5IGludG8gaW5kZXggaW4gZ2FtZU1hcCBhcnJcbmZ1bmN0aW9uIHRvSW5kZXgoeCwgeSkge1xuXHRyZXR1cm4oeCArIChtYXBXaWR0aCAqIHkpKTtcbn1cblxuZnVuY3Rpb24gZ2V0RnJhbWUoc3ByaXRlLCB0aW1lTGFzdCwgdGltZSwgYW5pbWF0aW9uKVxue1xuXHRpZighYW5pbWF0aW9uKSB7IHJldHVybiBzcHJpdGVbMF07IH1cblx0dGltZSA9IHRpbWUgJSB0aW1lTGFzdDtcblxuXHRmb3IoeCBpbiBzcHJpdGUpIHtcblx0XHRpZihzcHJpdGVbeF0uZW5kPj10aW1lKSB7IHJldHVybiBzcHJpdGVbeF07IH1cblx0fVxufVxuXG4vLyDnlYzpnaJsb2Fk5a6M77yM5byA5aeLbG9vcFxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pdW1pdVRhbGVcIikuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpO1xuICAgIFxuICAgIC8vIGFkZCBldmVudExpc3RlbmVycyBmb3IgdGhlIGtleWRvd25hIGFuZCBrZXl1cFxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuXHRcdGlmKGUua2V5Q29kZT49MzcgJiYgZS5rZXlDb2RlPD00MCkgeyBoZWxkS2V5c1tlLmtleUNvZGVdID0gdHJ1ZTsgfVxuXHR9KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoZS5rZXlDb2RlPj0zNyAmJiBlLmtleUNvZGU8PTQwKSB7IGhlbGRLZXlzW2Uua2V5Q29kZV0gPSBmYWxzZTsgfVxuICAgIH0pO1xuXG4gICAgLy8gY2FudmFz5bC65a+4IOS/neWtmOWIsCDnm7jmnLpcbiAgICBjYW1lcmEuc2NyZWVuID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWl1bWl1VGFsZVwiKS53aWR0aCxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXVtaXVUYWxlXCIpLmhlaWdodF07XG4gICAgICAgIFxuICAgIGdhbWV0aWxlID0gbmV3IEltYWdlKCk7XG5cdGdhbWV0aWxlLm9uZXJyb3IgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRjdHggPSBudWxsO1xuXHRcdGFsZXJ0KFwiRmFpbGVkIGxvYWRpbmcgZ2FtZXRpbGUuXCIpO1xuXHR9O1xuXHRnYW1ldGlsZS5vbmxvYWQgPSBmdW5jdGlvbigpIHsgYXJ0TG9hZGVkID0gdHJ1ZTsgfTtcbiAgICBnYW1ldGlsZS5zcmMgPSBnYW1ldGlsZVVSTDtcbiAgICBcbiAgICBtYXBUaWxlRGF0YS5idWlsZE1hcEZyb21EYXRhKGdhbWVNYXAsIG1hcFdpZHRoLCBtYXBIZWlnaHQpO1xuXHRtYXBUaWxlRGF0YS5hZGRCdWlsZGluZ3MoYnVpbGRpbmdzTG9jYXRpb24pO1xuXHRtYXBUaWxlRGF0YS5tYXBbKCgyKm1hcFdpZHRoKSsyKV0uZXZlbnRFbnRlciA9IGZ1bmN0aW9uKClcbiAgICB7IGNvbnNvbGUubG9nKFwiRW50ZXJlZCB0aWxlIDIsMlwiKTsgfTtcbiAgICBcbiAgICBcblx0bGV0IGZlbmNlMSA9IG5ldyBHYW1lT2JqZWN0cygyKTsgZmVuY2UxLnBsYWNlQXQoOSwgMSk7XG4gICAgbGV0IGZlbmNlMiA9IG5ldyBHYW1lT2JqZWN0cygyKTsgZmVuY2UyLnBsYWNlQXQoOSwgMik7XG4gICAgXG4gICAgbGV0IGZsb3dlcjEgPSBuZXcgR2FtZU9iamVjdHMoMSk7IGZsb3dlcjEucGxhY2VBdCg1LCA1KTtcbiAgICBsZXQgZmxvd2VyMiA9IG5ldyBHYW1lT2JqZWN0cygxKTsgZmxvd2VyMi5wbGFjZUF0KDcsIDUpO1xuICAgIGxldCBmbG93ZXIzID0gbmV3IEdhbWVPYmplY3RzKDEpOyBmbG93ZXIzLnBsYWNlQXQoOCwgNSk7XG4gICAgXG5cdGxldCB0cmVlMSA9IG5ldyBHYW1lT2JqZWN0cygzKTsgdHJlZTEucGxhY2VBdCg0LCA2KTtcblx0bGV0IHRyZWUyID0gbmV3IEdhbWVPYmplY3RzKDMpOyB0cmVlMi5wbGFjZUF0KDksIDYpO1xuXHRsZXQgdHJlZTMgPSBuZXcgR2FtZU9iamVjdHMoMyk7IHRyZWUzLnBsYWNlQXQoNywgNik7XHRcbiAgICBsZXQgdHJlZTQgPSBuZXcgR2FtZU9iamVjdHMoMyk7IHRyZWU0LnBsYWNlQXQoMTIsIDYpO1xuICAgIFxuICAgIGxldCBtYXNocm9vbTEgPSBuZXcgR2FtZU9iamVjdHMoNCk7IG1hc2hyb29tMS5wbGFjZUF0KDIsMik7XG5cbn07XG5cblxuLy8gbWFpbiBmdW5jdGlvblxuZnVuY3Rpb24gZHJhd0dhbWUoKVxue1xuICAgIGlmIChjdHggPT0gbnVsbCkgeyByZXR1cm47IH1cbiAgICBpZiAoIWFydExvYWRlZCkgeyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpOyByZXR1cm47IH1cblxuXHRsZXQgY3VycmVudEZyYW1lVGltZSA9IERhdGUubm93KCk7XG4gICAgLy8gZnJhbWVjb3VudCBcblx0bGV0IHNlYyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xuXHRpZihzZWMgIT0gY3VycmVudFNlY29uZCl7XG5cdFx0Y3VycmVudFNlY29uZCA9IHNlYztcblx0XHRmcmFtZXNMYXN0U2Vjb25kID0gZnJhbWVDb3VudDtcblx0XHRmcmFtZUNvdW50ID0gMTtcblx0fVxuXHRlbHNlIHsgZnJhbWVDb3VudCsrOyB9XG5cbiAgICAvLyBtaXVtaXUgbW92ZW1lbnRcblx0aWYoIW1pdW1pdS5wcm9jZXNzTW92ZW1lbnQoY3VycmVudEZyYW1lVGltZSkpIHtcblx0XHRpZihoZWxkS2V5c1szOF0gJiYgbWl1bWl1LmNhbkdvVXAoKSl7IFxuICAgICAgICAgICAgbWl1bWl1LmdvVXAoY3VycmVudEZyYW1lVGltZSk7IFxuICAgICAgICB9IGVsc2UgaWYgKGhlbGRLZXlzWzQwXSAmJiBtaXVtaXUuY2FuR29Eb3duKCkpIHsgXG4gICAgICAgICAgICBtaXVtaXUuZ29Eb3duKGN1cnJlbnRGcmFtZVRpbWUpOyBcbiAgICAgICAgfSBlbHNlIGlmKGhlbGRLZXlzWzM3XSAmJiBtaXVtaXUuY2FuR29MZWZ0KCkpIHsgXG4gICAgICAgICAgICBtaXVtaXUuZ29MZWZ0KGN1cnJlbnRGcmFtZVRpbWUpOyBcbiAgICAgICAgfSBlbHNlIGlmKGhlbGRLZXlzWzM5XSAmJiBtaXVtaXUuY2FuR29SaWdodCgpKSB7IFxuICAgICAgICAgICAgbWl1bWl1LmdvUmlnaHQoY3VycmVudEZyYW1lVGltZSk7IFxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gY2FtZXJh6Lef552AbWl1bWl16LWwXG4gICAgICAgIGNhbWVyYS51cGRhdGUobWl1bWl1LnBvc2l0aW9uWzBdICsgKG1pdW1pdS5kaW1lbnNpb25zWzBdIC8gMiksXG4gICAgICAgICAgICBtaXVtaXUucG9zaXRpb25bMV0gKyAobWl1bWl1LmRpbWVuc2lvbnNbMV0vMikpO1xuXG5cdCAgICBsZXQgbWl1bWl1QnVpbGRpbmcxID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoXG5cdFx0bWl1bWl1LnRpbGVGcm9tWzBdLCBtaXVtaXUudGlsZUZyb21bMV0pXS5idWlsZGluZztcblx0ICAgIGxldCBtaXVtaXVCdWlsZGluZzIgPSBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleChcblx0XHRtaXVtaXUudGlsZVRvWzBdLCBtaXVtaXUudGlsZVRvWzFdKV0uYnVpbGRpbmc7XG5cbiAgICAgICAgLy8g5riF6ZmkbGFzdCBmcmFtZVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCBjYW1lcmEuc2NyZWVuWzBdLCBjYW1lcmEuc2NyZWVuWzFdKTtcbiAgICBcbiAgICAvLyBuZXN0ZWQgbG9vcHM6IHkgYW5kIHhcbiAgICBmb3IobGV0IHogPSAwOyB6IDwgbWFwVGlsZURhdGEubGV2ZWxzOyB6KyspIHtcblx0XHRmb3IobGV0IHkgPSBjYW1lcmEuc3RhcnRpbmdQb2ludFsxXTsgeSA8PSBjYW1lcmEuZW5kaW5nUG9pbnRbMV07ICsreSkge1xuXHRcdCAgICBmb3IobGV0IHggPSBjYW1lcmEuc3RhcnRpbmdQb2ludFswXTsgeCA8PSBjYW1lcmEuZW5kaW5nUG9pbnRbMF07ICsreCkge1xuICAgICAgICAgICAgICAgIGlmKHo9PTApIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IHRpbGVUeXBlc1ttYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS50eXBlXTtcblxuXHRcdFx0ICAgIGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsXG5cdFx0XHRcdHRpbGUuc3ByaXRlWzBdLngsIHRpbGUuc3ByaXRlWzBdLnksIHRpbGUuc3ByaXRlWzBdLncsIHRpbGUuc3ByaXRlWzBdLmgsXG5cdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCksIGNhbWVyYS5vZmZzZXRbMV0gKyAoeSAqIHRpbGVIZWlnaHQpLFxuICAgICAgICAgICAgICAgIHRpbGVXaWR0aCwgdGlsZUhlaWdodCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG9iamVjdCA9IG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLm9iamVjdDtcblx0XHRcdGlmKG9iamVjdCE9bnVsbCAmJiBvYmplY3RUeXBlc1tvYmplY3QudHlwZV0uekluZGV4PT16KVxuXHRcdFx0e1xuXHRcdFx0XHRsZXQgb2JqZWN0VHlwZSA9IG9iamVjdFR5cGVzW29iamVjdC50eXBlXTtcblx0XHRcdFx0IFxuXHRcdFx0XHRjdHguZHJhd0ltYWdlKGdhbWV0aWxlLFxuXHRcdFx0XHRcdG9iamVjdFR5cGUuc3ByaXRlWzBdLngsIG9iamVjdFR5cGUuc3ByaXRlWzBdLnksXG5cdFx0XHRcdFx0b2JqZWN0VHlwZS5zcHJpdGVbMF0udywgb2JqZWN0VHlwZS5zcHJpdGVbMF0uaCxcblx0XHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgKHggKiB0aWxlV2lkdGgpICsgb2JqZWN0VHlwZS5vZmZzZXRbMF0sXG5cdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArICh5ICogdGlsZUhlaWdodCkgKyBvYmplY3RUeXBlLm9mZnNldFsxXSxcblx0XHRcdFx0XHRvYmplY3RUeXBlLnNwcml0ZVswXS53LCBvYmplY3RUeXBlLnNwcml0ZVswXS5oKTtcblx0XHRcdH1cblxuICAgICAgICAgICAgICAgaWYoeiA9PSAyICYmIG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLmJ1aWxkaW5nVHlwZSE9MCAmJlxuXHRcdFx0XHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5idWlsZGluZyE9bWl1bWl1QnVpbGRpbmcxICYmXG5cdFx0XHRcdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLmJ1aWxkaW5nIT1taXVtaXVCdWlsZGluZzIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGlsZSA9IHRpbGVUeXBlc1ttYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5idWlsZGluZ1R5cGVdO1xuICAgICAgICAgICAgICAgICAgICBzcHJpdGUgPSBnZXRGcmFtZSh0aWxlLnNwcml0ZSwgdGlsZS5zcHJpdGV0aW1lTGFzdCwgdGlsZS5hbmltYXRpb24pO1xuICAgICAgICAgICAgICAgICAgICBjdHguZHJhd0ltYWdlKGdhbWV0aWxlLCBzcHJpdGUueCwgc3ByaXRlLnksIHNwcml0ZS53LCBzcHJpdGUuaCwgY2FtZXJhLm9mZnNldFswXSArICh4ICogdGlsZVdpZHRoKSwgY2FtZXJhLm9mZnNldFsxXSArICh5ICogdGlsZUhlaWdodCksIHRpbGVXaWR0aCwgdGlsZUhlaWdodCk7XG5cdFx0XHR9XG5cdFx0fVxuICAgIH1cblxuICAgIGlmICh6ID09IDEpIHtcblx0XHRcdGxldCBzcHJpdGUgPSBtaXVtaXUuc3ByaXRlc1ttaXVtaXUuZGlyZWN0aW9uXTtcblx0XHRcdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsXG5cdFx0XHRcdHNwcml0ZVswXS54LCBzcHJpdGVbMF0ueSxcblx0XHRcdFx0c3ByaXRlWzBdLncsIHNwcml0ZVswXS5oLFxuXHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgbWl1bWl1LnBvc2l0aW9uWzBdLFxuXHRcdFx0XHRjYW1lcmEub2Zmc2V0WzFdICsgbWl1bWl1LnBvc2l0aW9uWzFdLFxuXHRcdFx0XHRtaXVtaXUuZGltZW5zaW9uc1swXSwgbWl1bWl1LmRpbWVuc2lvbnNbMV0pO1xuXHRcdH1cblx0XG5cdH1cbiAgICBcbiAgICAvLyBkcmF3IHRoZSBtaXVtaXVcbiAgICBsZXQgc3ByaXRlID0gbWl1bWl1LnNwcml0ZXNbbWl1bWl1LmRpcmVjdGlvbl07XG5cdGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsXG5cdFx0c3ByaXRlWzBdLngsIHNwcml0ZVswXS55LCBzcHJpdGVbMF0udywgc3ByaXRlWzBdLmgsXG5cdFx0Y2FtZXJhLm9mZnNldFswXSArIG1pdW1pdS5wb3NpdGlvblswXSwgY2FtZXJhLm9mZnNldFsxXSArIG1pdW1pdS5wb3NpdGlvblsxXSxcblx0XHRtaXVtaXUuZGltZW5zaW9uc1swXSwgbWl1bWl1LmRpbWVuc2lvbnNbMV0pO1xuXG5cblx0bGFzdEZyYW1lVGltZSA9IGN1cnJlbnRGcmFtZVRpbWU7XG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9