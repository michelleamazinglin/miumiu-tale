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

var gameMap = [0, 0, 0, 0, 0, 3, 3, 3, 3, 0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 2, 2, 2, 1, 3, 2, 2, 3, 1, 3, 2, 2, 2, 2, 3, 2, 2, 2, 0, 0, 2, 2, 2, 1, 3, 2, 2, 3, 1, 3, 2, 2, 2, 2, 3, 2, 2, 2, 0, 0, 2, 2, 2, 1, 3, 2, 2, 3, 1, 3, 2, 2, 2, 2, 3, 2, 2, 2, 0, 0, 2, 2, 2, 1, 3, 2, 3, 3, 1, 3, 3, 3, 3, 2, 3, 2, 2, 2, 0, 0, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]; // 每个地砖多少pixel

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
// 0:墙壁 1:草地 2:陆地 3:房子 4: 水

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
  3: {
    colour: "#d77c4b",
    floor: floorTypes.solid,
    sprite: [{
      x: 120,
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

  this.tileTo = [6, 6]; // time in millseconds

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

        var o = mapTileData.map[toIndex(_x3, y)].object;

        if (o != null && objectTypes[o.type].zIndex == z) {
          var ot = objectTypes[o.type];
          ctx.drawImage(gametile, ot.sprite[0].x, ot.sprite[0].y, ot.sprite[0].w, ot.sprite[0].h, camera.offset[0] + _x3 * tileWidth + ot.offset[0], camera.offset[1] + y * tileHeight + ot.offset[1], ot.sprite[0].w, ot.sprite[0].h);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJoZWxkS2V5cyIsImRpcmVjdGlvbnMiLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJmbG9vclR5cGVzIiwic29saWQiLCJwYXRoIiwib2NlYW4iLCJ0aWxlVHlwZXMiLCJjb2xvdXIiLCJmbG9vciIsInNwcml0ZSIsIngiLCJ5IiwidyIsImgiLCJjb2xsaXNpb25zIiwibm9uZSIsIm9iamVjdFR5cGVzIiwibmFtZSIsIm9mZnNldCIsImNvbGxpc2lvbiIsInpJbmRleCIsIml0ZW1UeXBlcyIsIm1heFN0YWNrIiwiZ2FtZXRpbGUiLCJnYW1ldGlsZVVSTCIsImFydExvYWRlZCIsIm1pdW1pdSIsIk1pdU1pdSIsInRpbGVGcm9tIiwidGlsZVRvIiwidGltZU1vdmVkIiwiZGVsYXlNb3ZlIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwiZGlyZWN0aW9uIiwic3ByaXRlcyIsInByb3RvdHlwZSIsImxvY2F0aW9uIiwicHJvY2Vzc01vdmVtZW50IiwidCIsIm1hcFRpbGVEYXRhIiwibWFwIiwidG9JbmRleCIsImV2ZW50RW50ZXIiLCJkaWZmZXJlbmNlIiwiTWF0aCIsInJvdW5kIiwicGxhY2VzQ2FuR28iLCJvYmplY3QiLCJvIiwidHlwZSIsImNhbkdvVXAiLCJjYW5Hb0Rvd24iLCJjYW5Hb0xlZnQiLCJjYW5Hb1JpZ2h0IiwiZ29MZWZ0IiwiZ29SaWdodCIsImdvVXAiLCJnb0Rvd24iLCJjYW1lcmEiLCJzY3JlZW4iLCJzdGFydGluZ1BvaW50IiwiZW5kaW5nUG9pbnQiLCJ1cGRhdGUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInRpbGUiLCJjZWlsIiwiVGlsZU1hcCIsImJ1aWxkaW5nc0xvY2F0aW9uIiwiZGF0YSIsIlRpbGUiLCJ0aWxlWCIsInRpbGVZIiwidGlsZVR5cGUiLCJidWlsZGluZyIsImJ1aWxkaW5nVHlwZSIsImxldmVscyIsImJ1aWxkTWFwRnJvbURhdGEiLCJ0aWxlSWQiLCJsZW5ndGgiLCJwdXNoIiwiYWRkQnVpbGRpbmdzIiwiYnVpbGRpbmdzIiwiaSIsInRpbGVJZHgiLCJHYW1lT2JqZWN0cyIsIm50IiwicGxhY2VBdCIsIm54IiwibnkiLCJnZXRGcmFtZSIsInRpbWVMYXN0IiwidGltZSIsImFuaW1hdGlvbiIsImVuZCIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhd0dhbWUiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJ3aWR0aCIsImhlaWdodCIsIkltYWdlIiwib25lcnJvciIsImFsZXJ0Iiwic3JjIiwiY29uc29sZSIsImxvZyIsImZlbmNlMSIsImZlbmNlMiIsImZsb3dlcjEiLCJmbG93ZXIyIiwiZmxvd2VyMyIsInRyZWUxIiwidHJlZTIiLCJ0cmVlMyIsInRyZWU0IiwibWFzaHJvb20xIiwiY3VycmVudEZyYW1lVGltZSIsIkRhdGUiLCJub3ciLCJzZWMiLCJtaXVtaXVCdWlsZGluZzEiLCJtaXVtaXVCdWlsZGluZzIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInoiLCJkcmF3SW1hZ2UiLCJvdCIsInNwcml0ZXRpbWVMYXN0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7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TUFBTSxDQUFDekMsTUFBUCxDQUFjLENBQWQsSUFBbUJRLE1BQU0sQ0FBQ08sUUFBUCxDQUFnQixDQUFoQixDQUpwQixFQUtDUCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FMRCxFQUt1Qk4sTUFBTSxDQUFDTSxVQUFQLENBQWtCLENBQWxCLENBTHZCO0FBTUE7QUFFRCxHQTNGRixDQTZGSTs7O0FBQ0EsTUFBSXZCLE1BQU0sR0FBR2lCLE1BQU0sQ0FBQ1MsT0FBUCxDQUFlVCxNQUFNLENBQUNRLFNBQXRCLENBQWI7QUFDSGhELEtBQUcsQ0FBQ21KLFNBQUosQ0FBYzlHLFFBQWQsRUFDQ2QsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVQyxDQURYLEVBQ2NELE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUUsQ0FEeEIsRUFDMkJGLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUcsQ0FEckMsRUFDd0NILE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUksQ0FEbEQsRUFFQzhDLE1BQU0sQ0FBQ3pDLE1BQVAsQ0FBYyxDQUFkLElBQW1CUSxNQUFNLENBQUNPLFFBQVAsQ0FBZ0IsQ0FBaEIsQ0FGcEIsRUFFd0MwQixNQUFNLENBQUN6QyxNQUFQLENBQWMsQ0FBZCxJQUFtQlEsTUFBTSxDQUFDTyxRQUFQLENBQWdCLENBQWhCLENBRjNELEVBR0NQLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixDQUFsQixDQUhELEVBR3VCTixNQUFNLENBQUNNLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FIdkI7QUFNQXJDLGVBQWEsR0FBR2lJLGdCQUFoQjtBQUNBdkIsdUJBQXFCLENBQUNDLFFBQUQsQ0FBckI7QUFDQSxDOzs7Ozs7Ozs7OztBQ3ppQkQsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL21hcFwiO1xuXG5cblxuIiwiLy8gaSB3YW50IGEgY2FtZXJhIGZvbGxvd2luZyB0aGUgY2hhciBhcm91bmQgdGhlIG1hcFxuXG5cbmxldCBjdHggPSBudWxsO1xuXG4vLyBjcmVhdGUgYSBtYXAgd2l0aCAxMCoxMCB0aWxlXG5sZXQgZ2FtZU1hcCA9IFtcblx0MCwgMCwgMCwgMCwgMCwgMywgMywgMywgMywgMCwgMywgMywgMywgMywgMywgMywgMCwgMCwgMCwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMywgMiwgMiwgMywgMSwgMywgMiwgMiwgMiwgMiwgMywgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMywgMiwgMiwgMywgMSwgMywgMiwgMiwgMiwgMiwgMywgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMywgMiwgMiwgMywgMSwgMywgMiwgMiwgMiwgMiwgMywgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMywgMiwgMywgMywgMSwgMywgMywgMywgMywgMiwgMywgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMywgMywgMywgMywgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMywgMiwgMiwgMywgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcbiAgICAwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAzLCAyLCAyLCAzLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAzLCAyLCAzLCAzLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0XG5dO1xuLy8g5q+P5Liq5Zyw56CW5aSa5bCRcGl4ZWxcbmxldCB0aWxlV2lkdGggPSA0MDtcbmxldCB0aWxlSGVpZ2h0ID0gNDA7XG4vLyDlnLDlm77lpKflsI/lsLHmmK8xMCoxMFxubGV0IG1hcFdpZHRoID0gMjA7XG5sZXQgbWFwSGVpZ2h0ID0gMjA7XG4vLyBmcmFtZXJhdGVcbmxldCBjdXJyZW50U2Vjb25kID0gMDtcbmxldCBmcmFtZUNvdW50ID0gMDtcbmxldCBmcmFtZXNMYXN0U2Vjb25kID0gMDtcbmxldCBsYXN0RnJhbWVUaW1lID0gMDtcblxuXG4vLyBrZXlDb2RlIDogYm9vbGVhbiB0byB0ZWxsIHVzIHdoaWNoIG9uZSBhcmUgcHJlc3NlZFxubGV0IGhlbGRLZXlzID0ge1xuICAgIC8vIDM3OiBsZWZ0XG4gICAgMzcgOiBmYWxzZSxcbiAgICAvLyAzODogdXBcbiAgICAzOCA6IGZhbHNlLFxuICAgIC8vIDM5OiByaWdodFxuICAgIDM5IDogZmFsc2UsXG4gICAgLy8gNDA6IGRvd25cbiAgICA0MCA6IGZhbHNlXG4gICAgLy8gMzI6IHNwYWNlXG59O1xuXG5sZXQgZGlyZWN0aW9ucyA9IHtcblx0dXBcdDogMCxcblx0cmlnaHQ6IDEsXG5cdGRvd246IDIsXG5cdGxlZnQ6IDNcbn07XG5cblxuLy8g5Zyw5p2/56eN57G7XG5sZXQgZmxvb3JUeXBlcyA9IHtcbiAgICBzb2xpZDogMCxcbiAgICBwYXRoOiAxLFxuICAgIG9jZWFuOiAyXG59O1xuXG4vLyDmlbDlrZfvvIhnYW1lTWFw77yJ5a+55bqU5LiK6aKc6Imy5ZKM5Zyw5p2/56eN57G7XG4vLyAwOuWimeWjgSAxOuiNieWcsCAyOumZhuWcsCAzOuaIv+WtkCA0OiDmsLRcbmxldCB0aWxlVHlwZXMgPSB7XG5cdDAgOiB7IGNvbG91cjogXCIjNzkzZDRjXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjAseTowLHc6NDAsaDo0MH1dIH0sXG5cdDEgOiB7IGNvbG91cjogXCIjNmRmN2IxXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6NDAseTowLHc6NDAsaDo0MH1dIH0sXG5cdDIgOiB7IGNvbG91cjogXCIjYzk3NDYxXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6ODAseTowLHc6NDAsaDo0MH1dXHR9LFxuXHQzIDogeyBjb2xvdXI6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoxMjAseTowLHc6NDAsaDo0MH1dIH0sXG4gICAgNCA6IHsgY29sb3VyOiBcIiMwMDhkZjBcIiwgZmxvb3I6IGZsb29yVHlwZXMub2NlYW4sIHNwcml0ZTpbe3g6MTYwLHk6MCx3OjQwLGg6NDB9XSB9LFxuICAgIDEwIDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDExIDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjgwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDEyIDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDEzIDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE0IDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjgwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE1IDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE2IDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6MTIwLHc6NDAsaDo0MH1dfSxcbiAgICAxNyA6IHsgY29sb3VyOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjEyMCx3OjQwLGg6NDB9XX0sXG4gICAgMTggOiB7IGNvbG91cjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseToxMjAsdzo0MCxoOjQwfV19XG59O1xuXG5sZXQgY29sbGlzaW9ucyA9IHtcblx0bm9uZVx0XHQ6IDAsXG5cdHNvbGlkXHRcdDogMVxufTtcblxubGV0IG9iamVjdFR5cGVzID0ge1xuXHQxIDoge1xuXHRcdG5hbWUgOiBcIkZsb3dlclwiLFxuXHRcdHNwcml0ZSA6IFt7eDo0MCx5OjE4MCx3OjQwLGg6MjB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXSxcblx0XHRjb2xsaXNpb24gOiBjb2xsaXNpb25zLm5vbmUsXG5cdFx0ekluZGV4IDogMVxuXHR9LFxuXHQyIDoge1xuXHRcdG5hbWUgOiBcImZlbmNlXCIsXG5cdFx0c3ByaXRlIDogW3t4OjQwLHk6MjAwLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogMVxuXHR9LFxuXHQzIDoge1xuXHRcdG5hbWUgOiBcIlRyZWVcIixcblx0XHRzcHJpdGUgOiBbe3g6ODAseToxNjAsdzo4MCxoOjgwfV0sXG5cdFx0b2Zmc2V0IDogWy0yMCwtMjBdLFxuXHRcdGNvbGxpc2lvbiA6IGNvbGxpc2lvbnMuc29saWQsXG5cdFx0ekluZGV4IDogM1xuICAgIH0sXG4gICAgNCA6IHtcblx0XHRuYW1lIDogXCJtYXNocm9vbXNcIixcblx0XHRzcHJpdGUgOiBbe3g6NDAseToxNjAsdzo0MCxoOjIwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF0sXG5cdFx0Y29sbGlzaW9uIDogY29sbGlzaW9ucy5ub25lLFxuXHRcdHpJbmRleCA6IDFcblx0fSxcbn07XG5cblxuLy8g54mp5ZOBXG5sZXQgaXRlbVR5cGVzID0ge1xuICAgIDEgOiB7XG5cdFx0bmFtZSA6IFwiY29jb251dFwiLFxuXHRcdG1heFN0YWNrIDogNSxcblx0XHRzcHJpdGUgOiBbe3g6MjQwLHk6MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXVxuICAgIH0sXG4gICAgMiA6IHtcblx0XHRuYW1lIDogXCJzdHJhd2JlcnJ5XCIsXG5cdFx0bWF4U3RhY2sgOiA1LFxuXHRcdHNwcml0ZSA6IFt7eDoyODAseTowLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdXG5cdH1cbn07XG5cblxuXG5sZXQgZ2FtZXRpbGUgPSBudWxsLCBnYW1ldGlsZVVSTCA9IFwic3JjL2ltYWdlcy90aWxlc2V0ZXN0dC5wbmdcIiwgYXJ0TG9hZGVkID0gZmFsc2U7XG5cblxuXG4vLyDliJvlu7rkuIDkuKrop5LoibIgKG1pdW1pdSlcbmxldCBtaXVtaXUgPSBuZXcgTWl1TWl1KCk7XG4vLyDliqDmm7TlpJrop5LoibLirIdcbmZ1bmN0aW9uIE1pdU1pdSgpIHtcbiAgICB0aGlzLnRpbGVGcm9tXHQ9IFsxLDFdO1xuICAgIC8vIG1pdW1pdeeahOS9jee9rlxuICAgIHRoaXMudGlsZVRvXHRcdD0gWzYsNl07XG4gICAgLy8gdGltZSBpbiBtaWxsc2Vjb25kc1xuICAgIHRoaXMudGltZU1vdmVkXHQ9IDA7XG4gICAgdGhpcy5kZWxheU1vdmVcdD0gNzAwO1xuXHR0aGlzLmRpbWVuc2lvbnNcdD0gWzQwLDQwXTtcbiAgICB0aGlzLnBvc2l0aW9uXHQ9IFs0NSw0NV07XG4gICAgXG4gICAgdGhpcy5kaXJlY3Rpb25cdD0gZGlyZWN0aW9ucy51cDtcblx0dGhpcy5zcHJpdGVzID0ge307XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLnVwXVx0XHQ9IFt7eDowLHk6MTIwLHc6MzAsaDozMH1dO1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy5yaWdodF1cdD0gW3t4OjAseToxNTAsdzozMCxoOjMwfV07XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLmRvd25dXHQ9IFt7eDowLHk6MTgwLHc6MzAsaDozMH1dO1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy5sZWZ0XVx0PSBbe3g6MCx5OjIxMCx3OjMwLGg6MzB9XTtcbn1cblxuXG4vLyDmiorop5LoibLmlL7lnKjlnLDnoJbkuIpcbk1pdU1pdS5wcm90b3R5cGUubG9jYXRpb24gPSBmdW5jdGlvbih4LCB5KSB7XG5cdHRoaXMudGlsZUZyb21cdD0gW3gseV07XG4gICAgdGhpcy50aWxlVG9cdFx0PSBbeCx5XTtcbiAgICAvLyB4IGFuZCB5IHBvc2l0aW9uIG9mIHRoZSB0aWxlLiB1cGRhdGUgdGhlIHRpbGVGcm9tIGFuZCB0aWxlVG8gcHJvcGVydGllcyB0byB0aGUgbmV3IHRpbGUgY29vcmRpbmF0ZXNcbiAgICAvLyBjYWxjdWxhdGVzIHRoZSBwaXhlbCBwb3NpdGlvbiBvZiB0aGUgY2hhcmFjeWVyIHVzZSBiZWxvd1xuXHR0aGlzLnBvc2l0aW9uXHQ9IFsoKCB0aWxlV2lkdGggKiB4ICkrKCAodGlsZVdpZHRoIC0gdGhpcy5kaW1lbnNpb25zWzBdKSAvIDIgKSksXG5cdFx0KCggdGlsZUhlaWdodCAqIHkgKSsoICh0aWxlSGVpZ2h0IC0gdGhpcy5kaW1lbnNpb25zWzFdKSAvIDIgKSldO1xufTtcblxuLy8g5qC55o2u5q+P5Liq5bin5pWw5om+5Yiw6KeS6Imy5L2N572uXG5NaXVNaXUucHJvdG90eXBlLnByb2Nlc3NNb3ZlbWVudCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAvLyBpZiBjaGFyIHRpbGVUbyA9PSB0aWxlRnJvbSBjaGFyIGlzIG5vdCBtb3ZpbmcsIHNvIHJldHVybiBmYWxzZVxuXHRpZiggdGhpcy50aWxlRnJvbVswXSA9PSB0aGlzLnRpbGVUb1swXSAmJiB0aGlzLnRpbGVGcm9tWzFdID09IHRoaXMudGlsZVRvWzFdKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIC8vIGlmIHRoZSBhbW91bnQgb2YgdGltZSBwYXNzZWQgc2luY2UgY2hhciBiZWdhbiBpdHMgY3VycmVudCBtb3ZlID49IHRoZSB0aW1lIGZvciBjaGFyIHRvIG1vdmUgMSB0aWxlLiB3ZSBzZXQgcG9zaXRpb24gdXNpbmcgbG9jYXRpb24gZnVuY3Rpb25cbiAgICAvLyBha2E6IGlmIGNoYXIgc3RpbGwgbW92aW5nXG5cdGlmKCh0IC0gdGhpcy50aW1lTW92ZWQpID49IHRoaXMuZGVsYXlNb3ZlKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24odGhpcy50aWxlVG9bMF0sIHRoaXMudGlsZVRvWzFdKTtcbiAgICAgICAgaWYobWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy50aWxlVG9bMF0sIHRoaXMudGlsZVRvWzFdKV0uZXZlbnRFbnRlciE9bnVsbClcblx0XHR7XG5cdFx0XHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pXS5ldmVudEVudGVyKHRoaXMpO1xuICAgICAgICB9XG5cdH0gZWxzZSB7XG4gICAgICAgIC8vIGN1cnJlbnQgcG9zaXRpb24gb24gY2FudmFzXG5cdFx0dGhpcy5wb3NpdGlvblswXSA9ICh0aGlzLnRpbGVGcm9tWzBdICogdGlsZVdpZHRoKSArICgodGlsZVdpZHRoLXRoaXMuZGltZW5zaW9uc1swXSkvMik7XG5cdFx0dGhpcy5wb3NpdGlvblsxXSA9ICh0aGlzLnRpbGVGcm9tWzFdICogdGlsZUhlaWdodCkgKyAoKHRpbGVIZWlnaHQtdGhpcy5kaW1lbnNpb25zWzFdKS8yKTtcblxuICAgICAgICAvLyBpZiBjaGFyIGlzIG1vdmluZyBvbiB4IGNvb3JkaW5hdGUsIGNhbGN1bGF0ZSBwaXhlbHNcblx0XHRpZih0aGlzLnRpbGVUb1swXSAhPSB0aGlzLnRpbGVGcm9tWzBdKSB7XG4gICAgICAgICAgICAvLyBkaWZmZXJlbmNlID0gZGlzdGFuY2UgbW92ZWRcbiAgICAgICAgICAgIC8vIOWKoOWHj+enu+WKqOeahOWcsOegluWIsOinkuiJsueahOS9jeWtkFxuXHRcdFx0bGV0IGRpZmZlcmVuY2UgPSAodGlsZVdpZHRoIC8gdGhpcy5kZWxheU1vdmUpICogKHQgLSB0aGlzLnRpbWVNb3ZlZCk7XG5cdFx0XHR0aGlzLnBvc2l0aW9uWzBdKz0gKHRoaXMudGlsZVRvWzBdIDwgdGhpcy50aWxlRnJvbVswXSA/IDAgLSBkaWZmZXJlbmNlIDogZGlmZmVyZW5jZSk7XG5cdFx0fVxuXHQgICAgaWYodGhpcy50aWxlVG9bMV0gIT0gdGhpcy50aWxlRnJvbVsxXSkge1xuXHRcdFx0bGV0IGRpZmZlcmVuY2UgPSAodGlsZUhlaWdodCAvIHRoaXMuZGVsYXlNb3ZlKSAqICh0LXRoaXMudGltZU1vdmVkKTtcblx0XHRcdHRoaXMucG9zaXRpb25bMV0rPSAodGhpcy50aWxlVG9bMV08dGhpcy50aWxlRnJvbVsxXSA/IDAgLSBkaWZmZXJlbmNlIDogZGlmZmVyZW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcm91bmQgeCAmIHkgdG8gd2hvbGUgbnVtYmVyIOmcgOimgeaVtOaVsFxuXHRcdHRoaXMucG9zaXRpb25bMF0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMF0pO1xuXHRcdHRoaXMucG9zaXRpb25bMV0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMV0pO1xuICAgIH1cbiAgICAvLyB0cnVlID0gY2hhciBpcyBjdXJyZW50bHkgbW92aW5nXG5cdHJldHVybiB0cnVlO1xufVxuXG5cbi8vIGlmIGNoYXIgY2FuIG1vdmUgaW4gYSBzcGVjaWZpYyBkaXJlY1xuTWl1TWl1LnByb3RvdHlwZS5wbGFjZXNDYW5HbyA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAvLyBpZiB4IGFuZCB5IGlzIGluIG1hcCBib3VuZFxuICAgIGlmKHggPCAwIHx8IHggPj0gbWFwV2lkdGggfHwgeSA8IDAgfHwgeSA+PSBtYXBIZWlnaHQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgLy8gaWYgdGhlIHRpbGUgaXMgcGF0aCB0aWxlIChvbmx5IG1vdmUgaWYgaXRzIGEgcGF0aClcbiAgICAgICAgaWYodGlsZVR5cGVzW2dhbWVNYXBbdG9JbmRleCh4LHkpXV0uZmxvb3IhPWZsb29yVHlwZXMucGF0aCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAgICAgaWYobWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0ub2JqZWN0IT1udWxsKVxuXHR7XG5cdFx0bGV0IG8gPSBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5vYmplY3Q7XG5cdFx0aWYob2JqZWN0VHlwZXNbby50eXBlXS5jb2xsaXNpb249PWNvbGxpc2lvbnMuc29saWQpXG5cdFx0e1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5NaXVNaXUucHJvdG90eXBlLmNhbkdvVXAgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucGxhY2VzQ2FuR28odGhpcy50aWxlRnJvbVswXSwgdGhpcy50aWxlRnJvbVsxXSAtIDEpOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5jYW5Hb0Rvd24gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucGxhY2VzQ2FuR28odGhpcy50aWxlRnJvbVswXSwgdGhpcy50aWxlRnJvbVsxXSArIDEpOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5jYW5Hb0xlZnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMucGxhY2VzQ2FuR28odGhpcy50aWxlRnJvbVswXS0xLCB0aGlzLnRpbGVGcm9tWzFdKTsgfTtcbk1pdU1pdS5wcm90b3R5cGUuY2FuR29SaWdodCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5wbGFjZXNDYW5Hbyh0aGlzLnRpbGVGcm9tWzBdKzEsIHRoaXMudGlsZUZyb21bMV0pOyB9O1xuXG5NaXVNaXUucHJvdG90eXBlLmdvTGVmdCA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMF0tPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5sZWZ0OyB9O1xuTWl1TWl1LnByb3RvdHlwZS5nb1JpZ2h0ID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1swXSs9IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLnJpZ2h0OyB9O1xuTWl1TWl1LnByb3RvdHlwZS5nb1VwID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1sxXS09IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLnVwOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5nb0Rvd24gPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzFdKz0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMuZG93bjsgfTtcblxuXG5cbi8vIGNyZWF0ZSBhIGNhbWVyYSBvYmplY3RcbmxldCBjYW1lcmEgPSB7XG4gICAgc2NyZWVuOiBbMCwwXSxcbiAgICAvLyDnlLvpnaLlt6bkuIrop5JcbiAgICBzdGFydGluZ1BvaW50OiBbMCwwXSxcbiAgICAvLyDnlLvpnaLlj7PkuIvop5JcbiAgICBlbmRpbmdQb2ludDogWzAsMF0sXG4gICAgLy8g6K+v5beuXG4gICAgb2Zmc2V0OiBbMCwwXSxcbiAgICAvLyB1cGRhdGUgZnVuY3Rpb24sIHggeSBpcyBvdXIgY2VudGVyIGFyZWFcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKG9mZnNldFgsIG9mZnNldFkpIHtcbiAgICAgICAgLy8gb2Zmc2V0OiBoYWxmIHRoZSBjYW52YXMgd2lkdGggfHwgaGVpZ2h0IChyb3VuZCBkb3duIHRvIHdob2xlIG51bSlcblx0XHR0aGlzLm9mZnNldFswXSA9IE1hdGguZmxvb3IoKHRoaXMuc2NyZWVuWzBdLzIpIC0gb2Zmc2V0WCk7XG4gICAgICAgIHRoaXMub2Zmc2V0WzFdID0gTWF0aC5mbG9vcigodGhpcy5zY3JlZW5bMV0vMikgLSBvZmZzZXRZKTtcblxuICAgICAgICAvLyDlnLDnoJblnKjlnLDlm77kuIrnmoTkvY3nva5cbiAgICAgICAgbGV0IHRpbGUgPSBbIE1hdGguZmxvb3Iob2Zmc2V0WCAvIHRpbGVXaWR0aCksIE1hdGguZmxvb3Iob2Zmc2V0WSAvIHRpbGVIZWlnaHQpIF07XG4gICAgICAgIC8vICDorqHnrpfnrKzkuIDkuKrlnLDnoJbkvY3nva7lnKh457q/5LiK77yaIOacgOWkp+WcsOegluaVsOmHjyAtIOWxj+W5leeahOS4gOWNilxuICAgICAgICAvLyAg5aSa5YeP5Y67Mei/meagt+WcsOegluWPr+S7pXNob3fkuIDljYrlnKjlsY/luZXkuIpcbiAgICAgICAgdGhpcy5zdGFydGluZ1BvaW50WzBdID0gdGlsZVswXSAtIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMF0vMikgLyB0aWxlV2lkdGgpICAtIDE7XG5cdFx0dGhpcy5zdGFydGluZ1BvaW50WzFdID0gdGlsZVsxXSAtIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMV0vMikgLyB0aWxlSGVpZ2h0KSAgLSAxO1xuXG4gICAgICAgIC8vIOehruS/nXjlkox56YO95aSn5LqOMOimgeS5iOS8muWcqOWcsOWbvuWkllxuICAgICAgICBpZih0aGlzLnN0YXJ0aW5nUG9pbnRbMF0gPD0gLTEpIHsgdGhpcy5zdGFydGluZ1BvaW50WzBdID0gMDsgfVxuXHRcdGlmKHRoaXMuc3RhcnRpbmdQb2ludFsxXSA8PSAtMSkgeyB0aGlzLnN0YXJ0aW5nUG9pbnRbMV0gPSAwOyB9XG5cbiAgICAgICAgdGhpcy5lbmRpbmdQb2ludFswXSA9IHRpbGVbMF0gKyAxICsgTWF0aC5jZWlsKCh0aGlzLnNjcmVlblswXS8yKSAvIHRpbGVXaWR0aCk7XG5cdFx0dGhpcy5lbmRpbmdQb2ludFsxXSA9IHRpbGVbMV0gKyAxICsgTWF0aC5jZWlsKCh0aGlzLnNjcmVlblsxXS8yKSAvIHRpbGVIZWlnaHQpO1xuXG5cdFx0aWYodGhpcy5lbmRpbmdQb2ludFswXSA+PSBtYXBXaWR0aCkgeyB0aGlzLmVuZGluZ1BvaW50WzBdID0gbWFwV2lkdGggLTE7IH1cblx0XHRpZih0aGlzLmVuZGluZ1BvaW50WzFdID49IG1hcEhlaWdodCkgeyB0aGlzLmVuZGluZ1BvaW50WzFdID0gbWFwSGVpZ2h0IC0gMTsgfVxuICAgICAgICB9XG59O1xuXG5cbi8vIGJ1aWxkaW5nc1xuXG5sZXQgbWFwVGlsZURhdGEgPSBuZXcgVGlsZU1hcCgpO1xubGV0IGJ1aWxkaW5nc0xvY2F0aW9uID0gW1xuXHR7IHg6NSwgeTowLCB3OjQsIGg6NSwgZGF0YTogW1xuXHRcdDEwLCAxMSwgMTEsIDEyLFxuICAgICAgICAxMywgMTQsIDE0LCAxNSxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTgsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LFxuICAgICAgICAxNiwgMTcsIDE2LCAxOFxuXHRdfSxcblx0eyB4OjEwLCB5OjAsIHc6NiwgaDo1LCBkYXRhOiBbXG5cdFx0MTAsIDExLCAxMSwgMTEsIDExLCAxMixcbiAgICAgICAgMTYsIDE4LCAxNiwgMTgsIDE3LCAxOCxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTgsIDE3LCAxOCxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTgsIDE3LCAxOCxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTgsIDE3LCAxOFxuXHRdfSxcblx0eyB4OjgsIHk6OCwgdzo0LCBoOjQsIGRhdGE6IFtcbiAgICAgICAgMTAsIDExLCAxMSwgMTIsXG4gICAgICAgIDEzLCAxNCwgMTQsIDE1LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCxcbiAgICAgICAgMTYsIDE3LCAxNiwgMThcblx0XX1cbl07XG5cbi8vIHN0b3JlcyBpbmZvcm1hdGlvbiBmb3IgZWFjaCBtYXAgdGlsZVxuZnVuY3Rpb24gVGlsZSh0aWxlWCwgdGlsZVksIHRpbGVUeXBlKVxue1xuICAgIC8vIHRpbGVZLCB0aWxlWCA9IHRoZSBwb3NpdGlvbiBvZiB0aGUgdGlsZSBvbiB0aGUgbWFwXG5cdHRoaXMueFx0XHRcdD0gdGlsZVg7XG5cdHRoaXMueVx0XHRcdD0gdGlsZVk7XG5cdHRoaXMudHlwZVx0XHQ9IHRpbGVUeXBlO1xuXHR0aGlzLmJ1aWxkaW5nXHRcdD0gbnVsbDtcbiAgICB0aGlzLmJ1aWxkaW5nVHlwZVx0PSAwO1xuICAgIC8vICBwb2ludGVyIHRvIGEgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIGEgTWl1TWl1IGhhcyBjb21wbGV0ZWQgbW92aW5nIG9uIHRvIHRoaXMgdGlsZVxuICAgIHRoaXMuZXZlbnRFbnRlclx0PSBudWxsO1xuICAgIHRoaXMub2JqZWN0XHRcdD0gbnVsbDtcblxufVxuXG4vLyDlgqjlrZjnrqHnkIblnLDlm77mlbDmja5cbmZ1bmN0aW9uIFRpbGVNYXAoKSB7XG5cdHRoaXMubWFwXHQ9IFtdO1xuXHR0aGlzLndcdFx0PSAwO1xuICAgIHRoaXMuaFx0XHQ9IDA7XG5cdHRoaXMubGV2ZWxzXHQ9IDQ7XG59XG5cblRpbGVNYXAucHJvdG90eXBlLmJ1aWxkTWFwRnJvbURhdGEgPSBmdW5jdGlvbih0aWxlSWQsIHcsIGgpIHtcblx0dGhpcy53XHRcdD0gdztcbiAgICB0aGlzLmhcdFx0PSBoO1xuXG4gICAgaWYodGlsZUlkLmxlbmd0aCE9KHcgKiBoKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XG4gICAgdGhpcy5tYXAubGVuZ3RoXHQ9IDA7XG4gICAgXHRmb3IobGV0IHkgPSAwOyB5IDwgaDsgeSsrKSB7XG5cdFx0ICAgIGZvcihsZXQgeCA9IDA7IHggPCB3OyB4KyspIHtcblx0XHRcdHRoaXMubWFwLnB1c2goIG5ldyBUaWxlKHgsIHksIHRpbGVJZFsgKHggKyAodyAqIHkpKV0pICk7XG5cdFx0fVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn07XG5cblxuVGlsZU1hcC5wcm90b3R5cGUuYWRkQnVpbGRpbmdzID0gZnVuY3Rpb24oYnVpbGRpbmdzKVxue1xuXHRmb3IobGV0IGkgaW4gYnVpbGRpbmdzKVxuXHR7XG4gICAgICAgIGxldCBidWlsZGluZyA9IGJ1aWxkaW5nc1tpXTtcbiAgICAgICAgaWYoYnVpbGRpbmcueCA8IDAgfHwgYnVpbGRpbmcueSA8IDAgfHwgYnVpbGRpbmcueCA+PSB0aGlzLncgfHwgYnVpbGRpbmcueSA+PSB0aGlzLmggfHxcdChidWlsZGluZy54K2J1aWxkaW5nLncpPnRoaXMudyB8fCAoYnVpbGRpbmcueStidWlsZGluZy5oKT50aGlzLmggfHwgYnVpbGRpbmcuZGF0YS5sZW5ndGghPShidWlsZGluZy53KmJ1aWxkaW5nLmgpKSB7XG5cdFx0XHRjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IHkgPSAwOyB5IDwgYnVpbGRpbmcuaDsgeSsrKSB7XG5cdFx0XHRmb3IobGV0IHggPSAwOyB4IDwgYnVpbGRpbmcudzsgeCsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGVJZHggPSAoKChidWlsZGluZy55ICsgeSkgKiB0aGlzLncpK2J1aWxkaW5nLnggKyB4KTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFt0aWxlSWR4XS5idWlsZGluZyA9IGJ1aWxkaW5nO1xuXHRcdFx0XHR0aGlzLm1hcFt0aWxlSWR4XS5idWlsZGluZ1R5cGUgPSBidWlsZGluZy5kYXRhWyggKHkgKiBidWlsZGluZy53KSArIHgpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbi8vIOeJqeWTgeaRhuaUvlxuZnVuY3Rpb24gR2FtZU9iamVjdHMobnQpXG57XG5cdHRoaXMueFx0XHQ9IDA7XG5cdHRoaXMueVx0XHQ9IDA7XG5cdHRoaXMudHlwZVx0PSBudDtcbn1cblxuR2FtZU9iamVjdHMucHJvdG90eXBlLnBsYWNlQXQgPSBmdW5jdGlvbihueCwgbnkpXG57XG5cdGlmKG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMueCwgdGhpcy55KV0ub2JqZWN0PT10aGlzKVxuXHR7XG5cdFx0bWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy54LCB0aGlzLnkpXS5vYmplY3QgPSBudWxsO1xuICAgIH1cbiAgICB0aGlzLnggPSBueDtcblx0dGhpcy55ID0gbnk7XG5cdFxuXHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleChueCwgbnkpXS5vYmplY3QgPSB0aGlzO1xufTtcblxuXG5cbi8vIGNvbnZlcnQgeCwgeSBpbnRvIGluZGV4IGluIGdhbWVNYXAgYXJyXG5mdW5jdGlvbiB0b0luZGV4KHgsIHkpIHtcblx0cmV0dXJuKHggKyAobWFwV2lkdGggKiB5KSk7XG59XG5cbmZ1bmN0aW9uIGdldEZyYW1lKHNwcml0ZSwgdGltZUxhc3QsIHRpbWUsIGFuaW1hdGlvbilcbntcblx0aWYoIWFuaW1hdGlvbikgeyByZXR1cm4gc3ByaXRlWzBdOyB9XG5cdHRpbWUgPSB0aW1lICUgdGltZUxhc3Q7XG5cblx0Zm9yKHggaW4gc3ByaXRlKSB7XG5cdFx0aWYoc3ByaXRlW3hdLmVuZD49dGltZSkgeyByZXR1cm4gc3ByaXRlW3hdOyB9XG5cdH1cbn1cblxuLy8g55WM6Z2ibG9hZOWujO+8jOW8gOWni2xvb3BcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0Y3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXVtaXVUYWxlXCIpLmdldENvbnRleHQoXCIyZFwiKTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbiAgICBcbiAgICAvLyBhZGQgZXZlbnRMaXN0ZW5lcnMgZm9yIHRoZSBrZXlkb3duYSBhbmQga2V5dXBcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZihlLmtleUNvZGU+PTM3ICYmIGUua2V5Q29kZTw9NDApIHsgaGVsZEtleXNbZS5rZXlDb2RlXSA9IHRydWU7IH1cblx0fSk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuXHRcdGlmKGUua2V5Q29kZT49MzcgJiYgZS5rZXlDb2RlPD00MCkgeyBoZWxkS2V5c1tlLmtleUNvZGVdID0gZmFsc2U7IH1cbiAgICB9KTtcblxuICAgIC8vIGNhbnZhc+WwuuWvuCDkv53lrZjliLAg55u45py6XG4gICAgY2FtZXJhLnNjcmVlbiA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pdW1pdVRhbGVcIikud2lkdGgsXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWl1bWl1VGFsZVwiKS5oZWlnaHRdO1xuICAgICAgICBcbiAgICBnYW1ldGlsZSA9IG5ldyBJbWFnZSgpO1xuXHRnYW1ldGlsZS5vbmVycm9yID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0Y3R4ID0gbnVsbDtcblx0XHRhbGVydChcIkZhaWxlZCBsb2FkaW5nIGdhbWV0aWxlLlwiKTtcblx0fTtcblx0Z2FtZXRpbGUub25sb2FkID0gZnVuY3Rpb24oKSB7IGFydExvYWRlZCA9IHRydWU7IH07XG4gICAgZ2FtZXRpbGUuc3JjID0gZ2FtZXRpbGVVUkw7XG4gICAgXG4gICAgbWFwVGlsZURhdGEuYnVpbGRNYXBGcm9tRGF0YShnYW1lTWFwLCBtYXBXaWR0aCwgbWFwSGVpZ2h0KTtcblx0bWFwVGlsZURhdGEuYWRkQnVpbGRpbmdzKGJ1aWxkaW5nc0xvY2F0aW9uKTtcblx0bWFwVGlsZURhdGEubWFwWygoMiptYXBXaWR0aCkrMildLmV2ZW50RW50ZXIgPSBmdW5jdGlvbigpXG4gICAgeyBjb25zb2xlLmxvZyhcIkVudGVyZWQgdGlsZSAyLDJcIik7IH07XG4gICAgXG4gICAgXG5cdGxldCBmZW5jZTEgPSBuZXcgR2FtZU9iamVjdHMoMik7IGZlbmNlMS5wbGFjZUF0KDksIDEpO1xuICAgIGxldCBmZW5jZTIgPSBuZXcgR2FtZU9iamVjdHMoMik7IGZlbmNlMi5wbGFjZUF0KDksIDIpO1xuICAgIFxuICAgIGxldCBmbG93ZXIxID0gbmV3IEdhbWVPYmplY3RzKDEpOyBmbG93ZXIxLnBsYWNlQXQoNSwgNSk7XG4gICAgbGV0IGZsb3dlcjIgPSBuZXcgR2FtZU9iamVjdHMoMSk7IGZsb3dlcjIucGxhY2VBdCg3LCA1KTtcbiAgICBsZXQgZmxvd2VyMyA9IG5ldyBHYW1lT2JqZWN0cygxKTsgZmxvd2VyMy5wbGFjZUF0KDgsIDUpO1xuICAgIFxuXHRsZXQgdHJlZTEgPSBuZXcgR2FtZU9iamVjdHMoMyk7IHRyZWUxLnBsYWNlQXQoNCwgNik7XG5cdGxldCB0cmVlMiA9IG5ldyBHYW1lT2JqZWN0cygzKTsgdHJlZTIucGxhY2VBdCg5LCA2KTtcblx0bGV0IHRyZWUzID0gbmV3IEdhbWVPYmplY3RzKDMpOyB0cmVlMy5wbGFjZUF0KDcsIDYpO1x0XG4gICAgbGV0IHRyZWU0ID0gbmV3IEdhbWVPYmplY3RzKDMpOyB0cmVlNC5wbGFjZUF0KDEyLCA2KTtcbiAgICBcbiAgICBsZXQgbWFzaHJvb20xID0gbmV3IEdhbWVPYmplY3RzKDQpOyBtYXNocm9vbTEucGxhY2VBdCgyLDIpO1xuXG59O1xuXG5cbi8vIG1haW4gZnVuY3Rpb25cbmZ1bmN0aW9uIGRyYXdHYW1lKClcbntcbiAgICBpZiAoY3R4ID09IG51bGwpIHsgcmV0dXJuOyB9XG4gICAgaWYgKCFhcnRMb2FkZWQpIHsgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTsgcmV0dXJuOyB9XG5cblx0bGV0IGN1cnJlbnRGcmFtZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIC8vIGZyYW1lY291bnQgXG5cdGxldCBzZWMgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcblx0aWYoc2VjICE9IGN1cnJlbnRTZWNvbmQpe1xuXHRcdGN1cnJlbnRTZWNvbmQgPSBzZWM7XG5cdFx0ZnJhbWVzTGFzdFNlY29uZCA9IGZyYW1lQ291bnQ7XG5cdFx0ZnJhbWVDb3VudCA9IDE7XG5cdH1cblx0ZWxzZSB7IGZyYW1lQ291bnQrKzsgfVxuXG4gICAgLy8gbWl1bWl1IG1vdmVtZW50XG5cdGlmKCFtaXVtaXUucHJvY2Vzc01vdmVtZW50KGN1cnJlbnRGcmFtZVRpbWUpKSB7XG5cdFx0aWYoaGVsZEtleXNbMzhdICYmIG1pdW1pdS5jYW5Hb1VwKCkpeyBcbiAgICAgICAgICAgIG1pdW1pdS5nb1VwKGN1cnJlbnRGcmFtZVRpbWUpOyBcbiAgICAgICAgfSBlbHNlIGlmIChoZWxkS2V5c1s0MF0gJiYgbWl1bWl1LmNhbkdvRG93bigpKSB7IFxuICAgICAgICAgICAgbWl1bWl1LmdvRG93bihjdXJyZW50RnJhbWVUaW1lKTsgXG4gICAgICAgIH0gZWxzZSBpZihoZWxkS2V5c1szN10gJiYgbWl1bWl1LmNhbkdvTGVmdCgpKSB7IFxuICAgICAgICAgICAgbWl1bWl1LmdvTGVmdChjdXJyZW50RnJhbWVUaW1lKTsgXG4gICAgICAgIH0gZWxzZSBpZihoZWxkS2V5c1szOV0gJiYgbWl1bWl1LmNhbkdvUmlnaHQoKSkgeyBcbiAgICAgICAgICAgIG1pdW1pdS5nb1JpZ2h0KGN1cnJlbnRGcmFtZVRpbWUpOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNhbWVyYei3n+edgG1pdW1pdei1sFxuICAgICAgICBjYW1lcmEudXBkYXRlKG1pdW1pdS5wb3NpdGlvblswXSArIChtaXVtaXUuZGltZW5zaW9uc1swXSAvIDIpLFxuICAgICAgICAgICAgbWl1bWl1LnBvc2l0aW9uWzFdICsgKG1pdW1pdS5kaW1lbnNpb25zWzFdLzIpKTtcblxuXHQgICAgbGV0IG1pdW1pdUJ1aWxkaW5nMSA9IG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KFxuXHRcdG1pdW1pdS50aWxlRnJvbVswXSwgbWl1bWl1LnRpbGVGcm9tWzFdKV0uYnVpbGRpbmc7XG5cdCAgICBsZXQgbWl1bWl1QnVpbGRpbmcyID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoXG5cdFx0bWl1bWl1LnRpbGVUb1swXSwgbWl1bWl1LnRpbGVUb1sxXSldLmJ1aWxkaW5nO1xuXG4gICAgICAgIC8vIOa4hemZpGxhc3QgZnJhbWVcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgY2FtZXJhLnNjcmVlblswXSwgY2FtZXJhLnNjcmVlblsxXSk7XG4gICAgXG4gICAgLy8gbmVzdGVkIGxvb3BzOiB5IGFuZCB4XG4gICAgZm9yKGxldCB6ID0gMDsgeiA8IG1hcFRpbGVEYXRhLmxldmVsczsgeisrKSB7XG5cdFx0Zm9yKGxldCB5ID0gY2FtZXJhLnN0YXJ0aW5nUG9pbnRbMV07IHkgPD0gY2FtZXJhLmVuZGluZ1BvaW50WzFdOyArK3kpIHtcblx0XHQgICAgZm9yKGxldCB4ID0gY2FtZXJhLnN0YXJ0aW5nUG9pbnRbMF07IHggPD0gY2FtZXJhLmVuZGluZ1BvaW50WzBdOyArK3gpIHtcbiAgICAgICAgICAgICAgICBpZih6PT0wKSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSB0aWxlVHlwZXNbbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0udHlwZV07XG5cblx0XHRcdCAgICBjdHguZHJhd0ltYWdlKGdhbWV0aWxlLFxuXHRcdFx0XHR0aWxlLnNwcml0ZVswXS54LCB0aWxlLnNwcml0ZVswXS55LCB0aWxlLnNwcml0ZVswXS53LCB0aWxlLnNwcml0ZVswXS5oLFxuXHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgKHggKiB0aWxlV2lkdGgpLCBjYW1lcmEub2Zmc2V0WzFdICsgKHkgKiB0aWxlSGVpZ2h0KSxcbiAgICAgICAgICAgICAgICB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBvID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0ub2JqZWN0O1xuXHRcdFx0aWYobyE9bnVsbCAmJiBvYmplY3RUeXBlc1tvLnR5cGVdLnpJbmRleD09eilcblx0XHRcdHtcblx0XHRcdFx0bGV0IG90ID0gb2JqZWN0VHlwZXNbby50eXBlXTtcblx0XHRcdFx0IFxuXHRcdFx0XHRjdHguZHJhd0ltYWdlKGdhbWV0aWxlLFxuXHRcdFx0XHRcdG90LnNwcml0ZVswXS54LCBvdC5zcHJpdGVbMF0ueSxcblx0XHRcdFx0XHRvdC5zcHJpdGVbMF0udywgb3Quc3ByaXRlWzBdLmgsXG5cdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFswXSArICh4KnRpbGVXaWR0aCkgKyBvdC5vZmZzZXRbMF0sXG5cdFx0XHRcdFx0Y2FtZXJhLm9mZnNldFsxXSArICh5KnRpbGVIZWlnaHQpICsgb3Qub2Zmc2V0WzFdLFxuXHRcdFx0XHRcdG90LnNwcml0ZVswXS53LCBvdC5zcHJpdGVbMF0uaCk7XG5cdFx0XHR9XG5cbiAgICAgICAgICAgICAgIGlmKHogPT0gMiAmJiBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5idWlsZGluZ1R5cGUhPTAgJiZcblx0XHRcdFx0bWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmchPW1pdW1pdUJ1aWxkaW5nMSAmJlxuXHRcdFx0XHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5idWlsZGluZyE9bWl1bWl1QnVpbGRpbmcyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbGUgPSB0aWxlVHlwZXNbbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmdUeXBlXTtcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlID0gZ2V0RnJhbWUodGlsZS5zcHJpdGUsIHRpbGUuc3ByaXRldGltZUxhc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICB0aWxlLmFuaW1hdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIGN0eC5kcmF3SW1hZ2UoZ2FtZXRpbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUueCwgc3ByaXRlLnksIHNwcml0ZS53LCBzcHJpdGUuaCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbWVyYS5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCksXG4gICAgICAgICAgICAgICAgICAgICAgICBjYW1lcmEub2Zmc2V0WzFdICsgKHkgKiB0aWxlSGVpZ2h0KSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpbGVXaWR0aCwgdGlsZUhlaWdodCk7XG5cdFx0XHR9XG5cdFx0fVxuICAgIH1cblxuICAgIGlmKHo9PTEpXG5cdFx0e1xuXHRcdFx0bGV0IHNwcml0ZSA9IG1pdW1pdS5zcHJpdGVzW21pdW1pdS5kaXJlY3Rpb25dO1xuXHRcdFx0Y3R4LmRyYXdJbWFnZShnYW1ldGlsZSxcblx0XHRcdFx0c3ByaXRlWzBdLngsIHNwcml0ZVswXS55LFxuXHRcdFx0XHRzcHJpdGVbMF0udywgc3ByaXRlWzBdLmgsXG5cdFx0XHRcdGNhbWVyYS5vZmZzZXRbMF0gKyBtaXVtaXUucG9zaXRpb25bMF0sXG5cdFx0XHRcdGNhbWVyYS5vZmZzZXRbMV0gKyBtaXVtaXUucG9zaXRpb25bMV0sXG5cdFx0XHRcdG1pdW1pdS5kaW1lbnNpb25zWzBdLCBtaXVtaXUuZGltZW5zaW9uc1sxXSk7XG5cdFx0fVxuXHRcblx0fVxuICAgIFxuICAgIC8vIGRyYXcgdGhlIG1pdW1pdVxuICAgIGxldCBzcHJpdGUgPSBtaXVtaXUuc3ByaXRlc1ttaXVtaXUuZGlyZWN0aW9uXTtcblx0Y3R4LmRyYXdJbWFnZShnYW1ldGlsZSxcblx0XHRzcHJpdGVbMF0ueCwgc3ByaXRlWzBdLnksIHNwcml0ZVswXS53LCBzcHJpdGVbMF0uaCxcblx0XHRjYW1lcmEub2Zmc2V0WzBdICsgbWl1bWl1LnBvc2l0aW9uWzBdLCBjYW1lcmEub2Zmc2V0WzFdICsgbWl1bWl1LnBvc2l0aW9uWzFdLFxuXHRcdG1pdW1pdS5kaW1lbnNpb25zWzBdLCBtaXVtaXUuZGltZW5zaW9uc1sxXSk7XG5cblxuXHRsYXN0RnJhbWVUaW1lID0gY3VycmVudEZyYW1lVGltZTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=