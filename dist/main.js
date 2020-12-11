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

var gameMap = [0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 2, 2, 2, 1, 3, 2, 2, 3, 1, 3, 2, 2, 2, 2, 3, 2, 2, 2, 0, 0, 2, 2, 2, 1, 3, 2, 2, 3, 1, 3, 2, 2, 2, 2, 3, 2, 2, 2, 0, 0, 2, 2, 2, 1, 3, 2, 2, 3, 1, 3, 2, 2, 2, 2, 3, 2, 2, 2, 0, 0, 2, 2, 2, 1, 3, 2, 3, 3, 1, 3, 3, 3, 3, 2, 3, 2, 2, 2, 0, 0, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]; // 每个地砖多少pixel

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
  water: 2
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
    floor: floorTypes.water,
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
  this.tileFrom = [1, 1];
  this.tileTo = [10, 10]; // time in millseconds

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
} // 储存管理地图数据


function TileMap() {
  this.map = [];
  this.w = 0;
  this.h = 0;
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

  for (var y = camera.startingPoint[1]; y <= camera.endingPoint[1]; ++y) {
    for (var _x3 = camera.startingPoint[0]; _x3 <= camera.endingPoint[0]; ++_x3) {
      var tile = tileTypes[mapTileData.map[toIndex(_x3, y)].type];
      ctx.drawImage(gametile, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h, camera.offset[0] + _x3 * tileWidth, camera.offset[1] + y * tileHeight, tileWidth, tileHeight);

      if (mapTileData.map[toIndex(_x3, y)].buildingType != 0 && mapTileData.map[toIndex(_x3, y)].building != miumiuBuilding1 && mapTileData.map[toIndex(_x3, y)].building != miumiuBuilding2) {
        tile = tileTypes[mapTileData.map[toIndex(_x3, y)].buildingType];
        sprite = getFrame(tile.sprite, tile.spritetimeLast, tile.animation);
        ctx.drawImage(gametile, sprite.x, sprite.y, sprite.w, sprite.h, camera.offset[0] + _x3 * tileWidth, camera.offset[1] + y * tileHeight, tileWidth, tileHeight);
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJoZWxkS2V5cyIsImRpcmVjdGlvbnMiLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJmbG9vclR5cGVzIiwic29saWQiLCJwYXRoIiwid2F0ZXIiLCJ0aWxlVHlwZXMiLCJjb2xvdXIiLCJmbG9vciIsInNwcml0ZSIsIngiLCJ5IiwidyIsImgiLCJpdGVtVHlwZXMiLCJuYW1lIiwibWF4U3RhY2siLCJvZmZzZXQiLCJnYW1ldGlsZSIsImdhbWV0aWxlVVJMIiwiYXJ0TG9hZGVkIiwibWl1bWl1IiwiTWl1TWl1IiwidGlsZUZyb20iLCJ0aWxlVG8iLCJ0aW1lTW92ZWQiLCJkZWxheU1vdmUiLCJkaW1lbnNpb25zIiwicG9zaXRpb24iLCJkaXJlY3Rpb24iLCJzcHJpdGVzIiwicHJvdG90eXBlIiwibG9jYXRpb24iLCJwcm9jZXNzTW92ZW1lbnQiLCJ0IiwibWFwVGlsZURhdGEiLCJtYXAiLCJ0b0luZGV4IiwiZXZlbnRFbnRlciIsImRpZmZlcmVuY2UiLCJNYXRoIiwicm91bmQiLCJwbGFjZXNDYW5HbyIsImNhbkdvVXAiLCJjYW5Hb0Rvd24iLCJjYW5Hb0xlZnQiLCJjYW5Hb1JpZ2h0IiwiZ29MZWZ0IiwiZ29SaWdodCIsImdvVXAiLCJnb0Rvd24iLCJjYW1lcmEiLCJzY3JlZW4iLCJzdGFydGluZ1BvaW50IiwiZW5kaW5nUG9pbnQiLCJ1cGRhdGUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInRpbGUiLCJjZWlsIiwiVGlsZU1hcCIsImJ1aWxkaW5nc0xvY2F0aW9uIiwiZGF0YSIsIlRpbGUiLCJ0aWxlWCIsInRpbGVZIiwidGlsZVR5cGUiLCJ0eXBlIiwiYnVpbGRpbmciLCJidWlsZGluZ1R5cGUiLCJidWlsZE1hcEZyb21EYXRhIiwidGlsZUlkIiwibGVuZ3RoIiwicHVzaCIsImFkZEJ1aWxkaW5ncyIsImJ1aWxkaW5ncyIsImkiLCJ0aWxlSWR4IiwiZ2V0RnJhbWUiLCJ0aW1lTGFzdCIsInRpbWUiLCJhbmltYXRpb24iLCJlbmQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXdHYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIiwid2lkdGgiLCJoZWlnaHQiLCJJbWFnZSIsIm9uZXJyb3IiLCJhbGVydCIsInNyYyIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50RnJhbWVUaW1lIiwiRGF0ZSIsIm5vdyIsInNlYyIsIm1pdW1pdUJ1aWxkaW5nMSIsIm1pdW1pdUJ1aWxkaW5nMiIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd0ltYWdlIiwic3ByaXRldGltZUxhc3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUdBLElBQUlBLEdBQUcsR0FBRyxJQUFWLEMsQ0FFQTs7QUFDQSxJQUFJQyxPQUFPLEdBQUcsQ0FDYixDQURhLEVBQ1YsQ0FEVSxFQUNQLENBRE8sRUFDSixDQURJLEVBQ0QsQ0FEQyxFQUNFLENBREYsRUFDSyxDQURMLEVBQ1EsQ0FEUixFQUNXLENBRFgsRUFDYyxDQURkLEVBQ2lCLENBRGpCLEVBQ29CLENBRHBCLEVBQ3VCLENBRHZCLEVBQzBCLENBRDFCLEVBQzZCLENBRDdCLEVBQ2dDLENBRGhDLEVBQ21DLENBRG5DLEVBQ3NDLENBRHRDLEVBQ3lDLENBRHpDLEVBQzRDLENBRDVDLEVBRWIsQ0FGYSxFQUVWLENBRlUsRUFFUCxDQUZPLEVBRUosQ0FGSSxFQUVELENBRkMsRUFFRSxDQUZGLEVBRUssQ0FGTCxFQUVRLENBRlIsRUFFVyxDQUZYLEVBRWMsQ0FGZCxFQUVpQixDQUZqQixFQUVvQixDQUZwQixFQUV1QixDQUZ2QixFQUUwQixDQUYxQixFQUU2QixDQUY3QixFQUVnQyxDQUZoQyxFQUVtQyxDQUZuQyxFQUVzQyxDQUZ0QyxFQUV5QyxDQUZ6QyxFQUU0QyxDQUY1QyxFQUdiLENBSGEsRUFHVixDQUhVLEVBR1AsQ0FITyxFQUdKLENBSEksRUFHRCxDQUhDLEVBR0UsQ0FIRixFQUdLLENBSEwsRUFHUSxDQUhSLEVBR1csQ0FIWCxFQUdjLENBSGQsRUFHaUIsQ0FIakIsRUFHb0IsQ0FIcEIsRUFHdUIsQ0FIdkIsRUFHMEIsQ0FIMUIsRUFHNkIsQ0FIN0IsRUFHZ0MsQ0FIaEMsRUFHbUMsQ0FIbkMsRUFHc0MsQ0FIdEMsRUFHeUMsQ0FIekMsRUFHNEMsQ0FINUMsRUFJYixDQUphLEVBSVYsQ0FKVSxFQUlQLENBSk8sRUFJSixDQUpJLEVBSUQsQ0FKQyxFQUlFLENBSkYsRUFJSyxDQUpMLEVBSVEsQ0FKUixFQUlXLENBSlgsRUFJYyxDQUpkLEVBSWlCLENBSmpCLEVBSW9CLENBSnBCLEVBSXVCLENBSnZCLEVBSTBCLENBSjFCLEVBSTZCLENBSjdCLEVBSWdDLENBSmhDLEVBSW1DLENBSm5DLEVBSXNDLENBSnRDLEVBSXlDLENBSnpDLEVBSTRDLENBSjVDLEVBS2IsQ0FMYSxFQUtWLENBTFUsRUFLUCxDQUxPLEVBS0osQ0FMSSxFQUtELENBTEMsRUFLRSxDQUxGLEVBS0ssQ0FMTCxFQUtRLENBTFIsRUFLVyxDQUxYLEVBS2MsQ0FMZCxFQUtpQixDQUxqQixFQUtvQixDQUxwQixFQUt1QixDQUx2QixFQUswQixDQUwxQixFQUs2QixDQUw3QixFQUtnQyxDQUxoQyxFQUttQyxDQUxuQyxFQUtzQyxDQUx0QyxFQUt5QyxDQUx6QyxFQUs0QyxDQUw1QyxFQU1iLENBTmEsRUFNVixDQU5VLEVBTVAsQ0FOTyxFQU1KLENBTkksRUFNRCxDQU5DLEVBTUUsQ0FORixFQU1LLENBTkwsRUFNUSxDQU5SLEVBTVcsQ0FOWCxFQU1jLENBTmQsRUFNaUIsQ0FOakIsRUFNb0IsQ0FOcEIsRUFNdUIsQ0FOdkIsRUFNMEIsQ0FOMUIsRUFNNkIsQ0FON0IsRUFNZ0MsQ0FOaEMsRUFNbUMsQ0FObkMsRUFNc0MsQ0FOdEMsRUFNeUMsQ0FOekMsRUFNNEMsQ0FONUMsRUFPYixDQVBhLEVBT1YsQ0FQVSxFQU9QLENBUE8sRUFPSixDQVBJLEVBT0QsQ0FQQyxFQU9FLENBUEYsRUFPSyxDQVBMLEVBT1EsQ0FQUixFQU9XLENBUFgsRUFPYyxDQVBkLEVBT2lCLENBUGpCLEVBT29CLENBUHBCLEVBT3VCLENBUHZCLEVBTzBCLENBUDFCLEVBTzZCLENBUDdCLEVBT2dDLENBUGhDLEVBT21DLENBUG5DLEVBT3NDLENBUHRDLEVBT3lDLENBUHpDLEVBTzRDLENBUDVDLEVBUWIsQ0FSYSxFQVFWLENBUlUsRUFRUCxDQVJPLEVBUUosQ0FSSSxFQVFELENBUkMsRUFRRSxDQVJGLEVBUUssQ0FSTCxFQVFRLENBUlIsRUFRVyxDQVJYLEVBUWMsQ0FSZCxFQVFpQixDQVJqQixFQVFvQixDQVJwQixFQVF1QixDQVJ2QixFQVEwQixDQVIxQixFQVE2QixDQVI3QixFQVFnQyxDQVJoQyxFQVFtQyxDQVJuQyxFQVFzQyxDQVJ0QyxFQVF5QyxDQVJ6QyxFQVE0QyxDQVI1QyxFQVNiLENBVGEsRUFTVixDQVRVLEVBU1AsQ0FUTyxFQVNKLENBVEksRUFTRCxDQVRDLEVBU0UsQ0FURixFQVNLLENBVEwsRUFTUSxDQVRSLEVBU1csQ0FUWCxFQVNjLENBVGQsRUFTaUIsQ0FUakIsRUFTb0IsQ0FUcEIsRUFTdUIsQ0FUdkIsRUFTMEIsQ0FUMUIsRUFTNkIsQ0FUN0IsRUFTZ0MsQ0FUaEMsRUFTbUMsQ0FUbkMsRUFTc0MsQ0FUdEMsRUFTeUMsQ0FUekMsRUFTNEMsQ0FUNUMsRUFVYixDQVZhLEVBVVYsQ0FWVSxFQVVQLENBVk8sRUFVSixDQVZJLEVBVUQsQ0FWQyxFQVVFLENBVkYsRUFVSyxDQVZMLEVBVVEsQ0FWUixFQVVXLENBVlgsRUFVYyxDQVZkLEVBVWlCLENBVmpCLEVBVW9CLENBVnBCLEVBVXVCLENBVnZCLEVBVTBCLENBVjFCLEVBVTZCLENBVjdCLEVBVWdDLENBVmhDLEVBVW1DLENBVm5DLEVBVXNDLENBVnRDLEVBVXlDLENBVnpDLEVBVTRDLENBVjVDLEVBV1YsQ0FYVSxFQVdQLENBWE8sRUFXSixDQVhJLEVBV0QsQ0FYQyxFQVdFLENBWEYsRUFXSyxDQVhMLEVBV1EsQ0FYUixFQVdXLENBWFgsRUFXYyxDQVhkLEVBV2lCLENBWGpCLEVBV29CLENBWHBCLEVBV3VCLENBWHZCLEVBVzBCLENBWDFCLEVBVzZCLENBWDdCLEVBV2dDLENBWGhDLEVBV21DLENBWG5DLEVBV3NDLENBWHRDLEVBV3lDLENBWHpDLEVBVzRDLENBWDVDLEVBVytDLENBWC9DLEVBWWIsQ0FaYSxFQVlWLENBWlUsRUFZUCxDQVpPLEVBWUosQ0FaSSxFQVlELENBWkMsRUFZRSxDQVpGLEVBWUssQ0FaTCxFQVlRLENBWlIsRUFZVyxDQVpYLEVBWWMsQ0FaZCxFQVlpQixDQVpqQixFQVlvQixDQVpwQixFQVl1QixDQVp2QixFQVkwQixDQVoxQixFQVk2QixDQVo3QixFQVlnQyxDQVpoQyxFQVltQyxDQVpuQyxFQVlzQyxDQVp0QyxFQVl5QyxDQVp6QyxFQVk0QyxDQVo1QyxFQWFiLENBYmEsRUFhVixDQWJVLEVBYVAsQ0FiTyxFQWFKLENBYkksRUFhRCxDQWJDLEVBYUUsQ0FiRixFQWFLLENBYkwsRUFhUSxDQWJSLEVBYVcsQ0FiWCxFQWFjLENBYmQsRUFhaUIsQ0FiakIsRUFhb0IsQ0FicEIsRUFhdUIsQ0FidkIsRUFhMEIsQ0FiMUIsRUFhNkIsQ0FiN0IsRUFhZ0MsQ0FiaEMsRUFhbUMsQ0FibkMsRUFhc0MsQ0FidEMsRUFheUMsQ0FiekMsRUFhNEMsQ0FiNUMsRUFjYixDQWRhLEVBY1YsQ0FkVSxFQWNQLENBZE8sRUFjSixDQWRJLEVBY0QsQ0FkQyxFQWNFLENBZEYsRUFjSyxDQWRMLEVBY1EsQ0FkUixFQWNXLENBZFgsRUFjYyxDQWRkLEVBY2lCLENBZGpCLEVBY29CLENBZHBCLEVBY3VCLENBZHZCLEVBYzBCLENBZDFCLEVBYzZCLENBZDdCLEVBY2dDLENBZGhDLEVBY21DLENBZG5DLEVBY3NDLENBZHRDLEVBY3lDLENBZHpDLEVBYzRDLENBZDVDLEVBZWIsQ0FmYSxFQWVWLENBZlUsRUFlUCxDQWZPLEVBZUosQ0FmSSxFQWVELENBZkMsRUFlRSxDQWZGLEVBZUssQ0FmTCxFQWVRLENBZlIsRUFlVyxDQWZYLEVBZWMsQ0FmZCxFQWVpQixDQWZqQixFQWVvQixDQWZwQixFQWV1QixDQWZ2QixFQWUwQixDQWYxQixFQWU2QixDQWY3QixFQWVnQyxDQWZoQyxFQWVtQyxDQWZuQyxFQWVzQyxDQWZ0QyxFQWV5QyxDQWZ6QyxFQWU0QyxDQWY1QyxFQWdCYixDQWhCYSxFQWdCVixDQWhCVSxFQWdCUCxDQWhCTyxFQWdCSixDQWhCSSxFQWdCRCxDQWhCQyxFQWdCRSxDQWhCRixFQWdCSyxDQWhCTCxFQWdCUSxDQWhCUixFQWdCVyxDQWhCWCxFQWdCYyxDQWhCZCxFQWdCaUIsQ0FoQmpCLEVBZ0JvQixDQWhCcEIsRUFnQnVCLENBaEJ2QixFQWdCMEIsQ0FoQjFCLEVBZ0I2QixDQWhCN0IsRUFnQmdDLENBaEJoQyxFQWdCbUMsQ0FoQm5DLEVBZ0JzQyxDQWhCdEMsRUFnQnlDLENBaEJ6QyxFQWdCNEMsQ0FoQjVDLEVBaUJiLENBakJhLEVBaUJWLENBakJVLEVBaUJQLENBakJPLEVBaUJKLENBakJJLEVBaUJELENBakJDLEVBaUJFLENBakJGLEVBaUJLLENBakJMLEVBaUJRLENBakJSLEVBaUJXLENBakJYLEVBaUJjLENBakJkLEVBaUJpQixDQWpCakIsRUFpQm9CLENBakJwQixFQWlCdUIsQ0FqQnZCLEVBaUIwQixDQWpCMUIsRUFpQjZCLENBakI3QixFQWlCZ0MsQ0FqQmhDLEVBaUJtQyxDQWpCbkMsRUFpQnNDLENBakJ0QyxFQWlCeUMsQ0FqQnpDLEVBaUI0QyxDQWpCNUMsRUFrQmIsQ0FsQmEsRUFrQlYsQ0FsQlUsRUFrQlAsQ0FsQk8sRUFrQkosQ0FsQkksRUFrQkQsQ0FsQkMsRUFrQkUsQ0FsQkYsRUFrQkssQ0FsQkwsRUFrQlEsQ0FsQlIsRUFrQlcsQ0FsQlgsRUFrQmMsQ0FsQmQsRUFrQmlCLENBbEJqQixFQWtCb0IsQ0FsQnBCLEVBa0J1QixDQWxCdkIsRUFrQjBCLENBbEIxQixFQWtCNkIsQ0FsQjdCLEVBa0JnQyxDQWxCaEMsRUFrQm1DLENBbEJuQyxFQWtCc0MsQ0FsQnRDLEVBa0J5QyxDQWxCekMsRUFrQjRDLENBbEI1QyxFQW1CYixDQW5CYSxFQW1CVixDQW5CVSxFQW1CUCxDQW5CTyxFQW1CSixDQW5CSSxFQW1CRCxDQW5CQyxFQW1CRSxDQW5CRixFQW1CSyxDQW5CTCxFQW1CUSxDQW5CUixFQW1CVyxDQW5CWCxFQW1CYyxDQW5CZCxFQW1CaUIsQ0FuQmpCLEVBbUJvQixDQW5CcEIsRUFtQnVCLENBbkJ2QixFQW1CMEIsQ0FuQjFCLEVBbUI2QixDQW5CN0IsRUFtQmdDLENBbkJoQyxFQW1CbUMsQ0FuQm5DLEVBbUJzQyxDQW5CdEMsRUFtQnlDLENBbkJ6QyxFQW1CNEMsQ0FuQjVDLEVBb0JiLENBcEJhLEVBb0JWLENBcEJVLEVBb0JQLENBcEJPLEVBb0JKLENBcEJJLEVBb0JELENBcEJDLEVBb0JFLENBcEJGLEVBb0JLLENBcEJMLEVBb0JRLENBcEJSLEVBb0JXLENBcEJYLEVBb0JjLENBcEJkLEVBb0JpQixDQXBCakIsRUFvQm9CLENBcEJwQixFQW9CdUIsQ0FwQnZCLEVBb0IwQixDQXBCMUIsRUFvQjZCLENBcEI3QixFQW9CZ0MsQ0FwQmhDLEVBb0JtQyxDQXBCbkMsRUFvQnNDLENBcEJ0QyxFQW9CeUMsQ0FwQnpDLEVBb0I0QyxDQXBCNUMsQ0FBZCxDLENBc0JBOztBQUNBLElBQUlDLFNBQVMsR0FBRyxFQUFoQjtBQUNBLElBQUlDLFVBQVUsR0FBRyxFQUFqQixDLENBQ0E7O0FBQ0EsSUFBSUMsUUFBUSxHQUFHLEVBQWY7QUFDQSxJQUFJQyxTQUFTLEdBQUcsRUFBaEIsQyxDQUNBOztBQUNBLElBQUlDLGFBQWEsR0FBRyxDQUFwQjtBQUNBLElBQUlDLFVBQVUsR0FBRyxDQUFqQjtBQUNBLElBQUlDLGdCQUFnQixHQUFHLENBQXZCO0FBQ0EsSUFBSUMsYUFBYSxHQUFHLENBQXBCLEMsQ0FHQTs7QUFDQSxJQUFJQyxRQUFRLEdBQUc7QUFDWDtBQUNBLE1BQUssS0FGTTtBQUdYO0FBQ0EsTUFBSyxLQUpNO0FBS1g7QUFDQSxNQUFLLEtBTk07QUFPWDtBQUNBLE1BQUssS0FSTSxDQVNYOztBQVRXLENBQWY7QUFZQSxJQUFJQyxVQUFVLEdBQUc7QUFDaEJDLElBQUUsRUFBRyxDQURXO0FBRWhCQyxPQUFLLEVBQUUsQ0FGUztBQUdoQkMsTUFBSSxFQUFFLENBSFU7QUFJaEJDLE1BQUksRUFBRTtBQUpVLENBQWpCLEMsQ0FRQTs7QUFDQSxJQUFJQyxVQUFVLEdBQUc7QUFDYkMsT0FBSyxFQUFFLENBRE07QUFFYkMsTUFBSSxFQUFFLENBRk87QUFHYkMsT0FBSyxFQUFFO0FBSE0sQ0FBakIsQyxDQU1BO0FBQ0E7O0FBQ0EsSUFBSUMsU0FBUyxHQUFHO0FBQ2YsS0FBSTtBQUFFQyxVQUFNLEVBQUUsU0FBVjtBQUFxQkMsU0FBSyxFQUFFTixVQUFVLENBQUNDLEtBQXZDO0FBQThDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsQ0FBSDtBQUFLQyxPQUFDLEVBQUMsQ0FBUDtBQUFTQyxPQUFDLEVBQUMsRUFBWDtBQUFjQyxPQUFDLEVBQUM7QUFBaEIsS0FBRDtBQUFyRCxHQURXO0FBRWYsS0FBSTtBQUFFTixVQUFNLEVBQUUsU0FBVjtBQUFxQkMsU0FBSyxFQUFFTixVQUFVLENBQUNFLElBQXZDO0FBQTZDSyxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsRUFBSDtBQUFNQyxPQUFDLEVBQUMsQ0FBUjtBQUFVQyxPQUFDLEVBQUMsRUFBWjtBQUFlQyxPQUFDLEVBQUM7QUFBakIsS0FBRDtBQUFwRCxHQUZXO0FBR2YsS0FBSTtBQUFFTixVQUFNLEVBQUUsU0FBVjtBQUFxQkMsU0FBSyxFQUFFTixVQUFVLENBQUNFLElBQXZDO0FBQTZDSyxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsRUFBSDtBQUFNQyxPQUFDLEVBQUMsQ0FBUjtBQUFVQyxPQUFDLEVBQUMsRUFBWjtBQUFlQyxPQUFDLEVBQUM7QUFBakIsS0FBRDtBQUFwRCxHQUhXO0FBSWYsS0FBSTtBQUFFTixVQUFNLEVBQUUsU0FBVjtBQUFxQkMsU0FBSyxFQUFFTixVQUFVLENBQUNDLEtBQXZDO0FBQThDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsQ0FBVDtBQUFXQyxPQUFDLEVBQUMsRUFBYjtBQUFnQkMsT0FBQyxFQUFDO0FBQWxCLEtBQUQ7QUFBckQsR0FKVztBQUtaLEtBQUk7QUFBRU4sVUFBTSxFQUFFLFNBQVY7QUFBcUJDLFNBQUssRUFBRU4sVUFBVSxDQUFDRyxLQUF2QztBQUE4Q0ksVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLENBQVQ7QUFBV0MsT0FBQyxFQUFDLEVBQWI7QUFBZ0JDLE9BQUMsRUFBQztBQUFsQixLQUFEO0FBQXJELEdBTFE7QUFNWixNQUFLO0FBQUVOLFVBQU0sRUFBQyxTQUFUO0FBQW9CQyxTQUFLLEVBQUNOLFVBQVUsQ0FBQ0MsS0FBckM7QUFBNENNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxFQUFUO0FBQVlDLE9BQUMsRUFBQyxFQUFkO0FBQWlCQyxPQUFDLEVBQUM7QUFBbkIsS0FBRDtBQUFuRCxHQU5PO0FBT1osTUFBSztBQUFFTixVQUFNLEVBQUMsU0FBVDtBQUFvQkMsU0FBSyxFQUFDTixVQUFVLENBQUNDLEtBQXJDO0FBQTRDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsRUFBVDtBQUFZQyxPQUFDLEVBQUMsRUFBZDtBQUFpQkMsT0FBQyxFQUFDO0FBQW5CLEtBQUQ7QUFBbkQsR0FQTztBQVFaLE1BQUs7QUFBRU4sVUFBTSxFQUFDLFNBQVQ7QUFBb0JDLFNBQUssRUFBQ04sVUFBVSxDQUFDQyxLQUFyQztBQUE0Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEVBQVQ7QUFBWUMsT0FBQyxFQUFDLEVBQWQ7QUFBaUJDLE9BQUMsRUFBQztBQUFuQixLQUFEO0FBQW5ELEdBUk87QUFTWixNQUFLO0FBQUVOLFVBQU0sRUFBQyxTQUFUO0FBQW9CQyxTQUFLLEVBQUNOLFVBQVUsQ0FBQ0MsS0FBckM7QUFBNENNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxFQUFUO0FBQVlDLE9BQUMsRUFBQyxFQUFkO0FBQWlCQyxPQUFDLEVBQUM7QUFBbkIsS0FBRDtBQUFuRCxHQVRPO0FBVVosTUFBSztBQUFFTixVQUFNLEVBQUMsU0FBVDtBQUFvQkMsU0FBSyxFQUFDTixVQUFVLENBQUNDLEtBQXJDO0FBQTRDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsRUFBVDtBQUFZQyxPQUFDLEVBQUMsRUFBZDtBQUFpQkMsT0FBQyxFQUFDO0FBQW5CLEtBQUQ7QUFBbkQsR0FWTztBQVdaLE1BQUs7QUFBRU4sVUFBTSxFQUFDLFNBQVQ7QUFBb0JDLFNBQUssRUFBQ04sVUFBVSxDQUFDQyxLQUFyQztBQUE0Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEVBQVQ7QUFBWUMsT0FBQyxFQUFDLEVBQWQ7QUFBaUJDLE9BQUMsRUFBQztBQUFuQixLQUFEO0FBQW5ELEdBWE87QUFZWixNQUFLO0FBQUVOLFVBQU0sRUFBQyxTQUFUO0FBQW9CQyxTQUFLLEVBQUNOLFVBQVUsQ0FBQ0MsS0FBckM7QUFBNENNLFVBQU0sRUFBQyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxHQUFUO0FBQWFDLE9BQUMsRUFBQyxFQUFmO0FBQWtCQyxPQUFDLEVBQUM7QUFBcEIsS0FBRDtBQUFuRCxHQVpPO0FBYVosTUFBSztBQUFFTixVQUFNLEVBQUMsU0FBVDtBQUFvQkMsU0FBSyxFQUFDTixVQUFVLENBQUNDLEtBQXJDO0FBQTRDTSxVQUFNLEVBQUMsQ0FBQztBQUFDQyxPQUFDLEVBQUMsR0FBSDtBQUFPQyxPQUFDLEVBQUMsR0FBVDtBQUFhQyxPQUFDLEVBQUMsRUFBZjtBQUFrQkMsT0FBQyxFQUFDO0FBQXBCLEtBQUQ7QUFBbkQsR0FiTztBQWNaLE1BQUs7QUFBRU4sVUFBTSxFQUFDLFNBQVQ7QUFBb0JDLFNBQUssRUFBQ04sVUFBVSxDQUFDQyxLQUFyQztBQUE0Q00sVUFBTSxFQUFDLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLEdBQVQ7QUFBYUMsT0FBQyxFQUFDLEVBQWY7QUFBa0JDLE9BQUMsRUFBQztBQUFwQixLQUFEO0FBQW5EO0FBZE8sQ0FBaEIsQyxDQWlCQTs7QUFDQSxJQUFJQyxTQUFTLEdBQUc7QUFDWixLQUFJO0FBQ05DLFFBQUksRUFBRyxTQUREO0FBRU5DLFlBQVEsRUFBRyxDQUZMO0FBR05QLFVBQU0sRUFBRyxDQUFDO0FBQUNDLE9BQUMsRUFBQyxHQUFIO0FBQU9DLE9BQUMsRUFBQyxDQUFUO0FBQVdDLE9BQUMsRUFBQyxFQUFiO0FBQWdCQyxPQUFDLEVBQUM7QUFBbEIsS0FBRCxDQUhIO0FBSU5JLFVBQU0sRUFBRyxDQUFDLENBQUQsRUFBRyxDQUFIO0FBSkgsR0FEUTtBQU9aLEtBQUk7QUFDTkYsUUFBSSxFQUFHLFlBREQ7QUFFTkMsWUFBUSxFQUFHLENBRkw7QUFHTlAsVUFBTSxFQUFHLENBQUM7QUFBQ0MsT0FBQyxFQUFDLEdBQUg7QUFBT0MsT0FBQyxFQUFDLENBQVQ7QUFBV0MsT0FBQyxFQUFDLEVBQWI7QUFBZ0JDLE9BQUMsRUFBQztBQUFsQixLQUFELENBSEg7QUFJTkksVUFBTSxFQUFHLENBQUMsQ0FBRCxFQUFHLENBQUg7QUFKSDtBQVBRLENBQWhCO0FBaUJBLElBQUlDLFFBQVEsR0FBRyxJQUFmO0FBQUEsSUFBcUJDLFdBQVcsR0FBRyw0QkFBbkM7QUFBQSxJQUFpRUMsU0FBUyxHQUFHLEtBQTdFLEMsQ0FJQTs7QUFDQSxJQUFJQyxNQUFNLEdBQUcsSUFBSUMsTUFBSixFQUFiLEMsQ0FDQTs7QUFDQSxTQUFTQSxNQUFULEdBQWtCO0FBQ2pCLE9BQUtDLFFBQUwsR0FBZ0IsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFoQjtBQUNHLE9BQUtDLE1BQUwsR0FBZSxDQUFDLEVBQUQsRUFBSSxFQUFKLENBQWYsQ0FGYyxDQUdkOztBQUNBLE9BQUtDLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxPQUFLQyxTQUFMLEdBQWlCLEdBQWpCO0FBQ0gsT0FBS0MsVUFBTCxHQUFrQixDQUFDLEVBQUQsRUFBSSxFQUFKLENBQWxCO0FBQ0csT0FBS0MsUUFBTCxHQUFnQixDQUFDLEVBQUQsRUFBSSxFQUFKLENBQWhCO0FBRUEsT0FBS0MsU0FBTCxHQUFpQmhDLFVBQVUsQ0FBQ0MsRUFBNUI7QUFDSCxPQUFLZ0MsT0FBTCxHQUFlLEVBQWY7QUFDQSxPQUFLQSxPQUFMLENBQWFqQyxVQUFVLENBQUNDLEVBQXhCLElBQStCLENBQUM7QUFBQ1ksS0FBQyxFQUFDLENBQUg7QUFBS0MsS0FBQyxFQUFDLEdBQVA7QUFBV0MsS0FBQyxFQUFDLEVBQWI7QUFBZ0JDLEtBQUMsRUFBQztBQUFsQixHQUFELENBQS9CO0FBQ0EsT0FBS2lCLE9BQUwsQ0FBYWpDLFVBQVUsQ0FBQ0UsS0FBeEIsSUFBaUMsQ0FBQztBQUFDVyxLQUFDLEVBQUMsQ0FBSDtBQUFLQyxLQUFDLEVBQUMsR0FBUDtBQUFXQyxLQUFDLEVBQUMsRUFBYjtBQUFnQkMsS0FBQyxFQUFDO0FBQWxCLEdBQUQsQ0FBakM7QUFDQSxPQUFLaUIsT0FBTCxDQUFhakMsVUFBVSxDQUFDRyxJQUF4QixJQUFnQyxDQUFDO0FBQUNVLEtBQUMsRUFBQyxDQUFIO0FBQUtDLEtBQUMsRUFBQyxHQUFQO0FBQVdDLEtBQUMsRUFBQyxFQUFiO0FBQWdCQyxLQUFDLEVBQUM7QUFBbEIsR0FBRCxDQUFoQztBQUNBLE9BQUtpQixPQUFMLENBQWFqQyxVQUFVLENBQUNJLElBQXhCLElBQWdDLENBQUM7QUFBQ1MsS0FBQyxFQUFDLENBQUg7QUFBS0MsS0FBQyxFQUFDLEdBQVA7QUFBV0MsS0FBQyxFQUFDLEVBQWI7QUFBZ0JDLEtBQUMsRUFBQztBQUFsQixHQUFELENBQWhDO0FBQ0EsQyxDQUdEOzs7QUFDQVMsTUFBTSxDQUFDUyxTQUFQLENBQWlCQyxRQUFqQixHQUE0QixVQUFTdEIsQ0FBVCxFQUFZQyxDQUFaLEVBQWU7QUFDMUMsT0FBS1ksUUFBTCxHQUFnQixDQUFDYixDQUFELEVBQUdDLENBQUgsQ0FBaEI7QUFDRyxPQUFLYSxNQUFMLEdBQWUsQ0FBQ2QsQ0FBRCxFQUFHQyxDQUFILENBQWYsQ0FGdUMsQ0FHdkM7QUFDQTs7QUFDSCxPQUFLaUIsUUFBTCxHQUFnQixDQUFJeEMsU0FBUyxHQUFHc0IsQ0FBZCxHQUFvQixDQUFDdEIsU0FBUyxHQUFHLEtBQUt1QyxVQUFMLENBQWdCLENBQWhCLENBQWIsSUFBbUMsQ0FBekQsRUFDWnRDLFVBQVUsR0FBR3NCLENBQWYsR0FBcUIsQ0FBQ3RCLFVBQVUsR0FBRyxLQUFLc0MsVUFBTCxDQUFnQixDQUFoQixDQUFkLElBQW9DLENBRDNDLENBQWhCO0FBRUEsQ0FQRCxDLENBU0E7OztBQUNBTCxNQUFNLENBQUNTLFNBQVAsQ0FBaUJFLGVBQWpCLEdBQW1DLFVBQVNDLENBQVQsRUFBWTtBQUMzQztBQUNILE1BQUksS0FBS1gsUUFBTCxDQUFjLENBQWQsS0FBb0IsS0FBS0MsTUFBTCxDQUFZLENBQVosQ0FBcEIsSUFBc0MsS0FBS0QsUUFBTCxDQUFjLENBQWQsS0FBb0IsS0FBS0MsTUFBTCxDQUFZLENBQVosQ0FBOUQsRUFBOEU7QUFBRSxXQUFPLEtBQVA7QUFBZSxHQUZqRCxDQUczQztBQUNBOzs7QUFDSCxNQUFJVSxDQUFDLEdBQUcsS0FBS1QsU0FBVixJQUF3QixLQUFLQyxTQUFoQyxFQUEyQztBQUNwQyxTQUFLTSxRQUFMLENBQWMsS0FBS1IsTUFBTCxDQUFZLENBQVosQ0FBZCxFQUE4QixLQUFLQSxNQUFMLENBQVksQ0FBWixDQUE5Qjs7QUFDQSxRQUFHVyxXQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FBQyxLQUFLYixNQUFMLENBQVksQ0FBWixDQUFELEVBQWlCLEtBQUtBLE1BQUwsQ0FBWSxDQUFaLENBQWpCLENBQXZCLEVBQXlEYyxVQUF6RCxJQUFxRSxJQUF4RSxFQUNOO0FBQ0NILGlCQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FBQyxLQUFLYixNQUFMLENBQVksQ0FBWixDQUFELEVBQWlCLEtBQUtBLE1BQUwsQ0FBWSxDQUFaLENBQWpCLENBQXZCLEVBQXlEYyxVQUF6RCxDQUFvRSxJQUFwRTtBQUNNO0FBQ1AsR0FORCxNQU1PO0FBQ0E7QUFDTixTQUFLVixRQUFMLENBQWMsQ0FBZCxJQUFvQixLQUFLTCxRQUFMLENBQWMsQ0FBZCxJQUFtQm5DLFNBQXBCLEdBQWtDLENBQUNBLFNBQVMsR0FBQyxLQUFLdUMsVUFBTCxDQUFnQixDQUFoQixDQUFYLElBQStCLENBQXBGO0FBQ0EsU0FBS0MsUUFBTCxDQUFjLENBQWQsSUFBb0IsS0FBS0wsUUFBTCxDQUFjLENBQWQsSUFBbUJsQyxVQUFwQixHQUFtQyxDQUFDQSxVQUFVLEdBQUMsS0FBS3NDLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBWixJQUFnQyxDQUF0RixDQUhNLENBS0E7O0FBQ04sUUFBRyxLQUFLSCxNQUFMLENBQVksQ0FBWixLQUFrQixLQUFLRCxRQUFMLENBQWMsQ0FBZCxDQUFyQixFQUF1QztBQUM3QjtBQUNBO0FBQ1QsVUFBSWdCLFVBQVUsR0FBSW5ELFNBQVMsR0FBRyxLQUFLc0MsU0FBbEIsSUFBZ0NRLENBQUMsR0FBRyxLQUFLVCxTQUF6QyxDQUFqQjtBQUNBLFdBQUtHLFFBQUwsQ0FBYyxDQUFkLEtBQW9CLEtBQUtKLE1BQUwsQ0FBWSxDQUFaLElBQWlCLEtBQUtELFFBQUwsQ0FBYyxDQUFkLENBQWpCLEdBQW9DLElBQUlnQixVQUF4QyxHQUFxREEsVUFBekU7QUFDQTs7QUFDRSxRQUFHLEtBQUtmLE1BQUwsQ0FBWSxDQUFaLEtBQWtCLEtBQUtELFFBQUwsQ0FBYyxDQUFkLENBQXJCLEVBQXVDO0FBQ3pDLFVBQUlnQixXQUFVLEdBQUlsRCxVQUFVLEdBQUcsS0FBS3FDLFNBQW5CLElBQWlDUSxDQUFDLEdBQUMsS0FBS1QsU0FBeEMsQ0FBakI7O0FBQ0EsV0FBS0csUUFBTCxDQUFjLENBQWQsS0FBb0IsS0FBS0osTUFBTCxDQUFZLENBQVosSUFBZSxLQUFLRCxRQUFMLENBQWMsQ0FBZCxDQUFmLEdBQWtDLElBQUlnQixXQUF0QyxHQUFtREEsV0FBdkU7QUFDTSxLQWZELENBZ0JBOzs7QUFDTixTQUFLWCxRQUFMLENBQWMsQ0FBZCxJQUFtQlksSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS2IsUUFBTCxDQUFjLENBQWQsQ0FBWCxDQUFuQjtBQUNBLFNBQUtBLFFBQUwsQ0FBYyxDQUFkLElBQW1CWSxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLYixRQUFMLENBQWMsQ0FBZCxDQUFYLENBQW5CO0FBQ0csR0E5QjBDLENBK0IzQzs7O0FBQ0gsU0FBTyxJQUFQO0FBQ0EsQ0FqQ0QsQyxDQW9DQTs7O0FBQ0FOLE1BQU0sQ0FBQ1MsU0FBUCxDQUFpQlcsV0FBakIsR0FBK0IsVUFBU2hDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQzFDO0FBQ0EsTUFBR0QsQ0FBQyxHQUFHLENBQUosSUFBU0EsQ0FBQyxJQUFJcEIsUUFBZCxJQUEwQnFCLENBQUMsR0FBRyxDQUE5QixJQUFtQ0EsQ0FBQyxJQUFJcEIsU0FBM0MsRUFBc0Q7QUFBRSxXQUFPLEtBQVA7QUFBZSxHQUY3QixDQUcxQzs7O0FBQ0YsTUFBR2UsU0FBUyxDQUFDbkIsT0FBTyxDQUFDa0QsT0FBTyxDQUFDM0IsQ0FBRCxFQUFHQyxDQUFILENBQVIsQ0FBUixDQUFULENBQWlDSCxLQUFqQyxJQUF3Q04sVUFBVSxDQUFDRSxJQUF0RCxFQUE0RDtBQUFFLFdBQU8sS0FBUDtBQUFlOztBQUM5RSxTQUFPLElBQVA7QUFDQSxDQU5EOztBQU9Ba0IsTUFBTSxDQUFDUyxTQUFQLENBQWlCWSxPQUFqQixHQUEyQixZQUFXO0FBQUUsU0FBTyxLQUFLRCxXQUFMLENBQWlCLEtBQUtuQixRQUFMLENBQWMsQ0FBZCxDQUFqQixFQUFtQyxLQUFLQSxRQUFMLENBQWMsQ0FBZCxJQUFtQixDQUF0RCxDQUFQO0FBQWtFLENBQTFHOztBQUNBRCxNQUFNLENBQUNTLFNBQVAsQ0FBaUJhLFNBQWpCLEdBQTZCLFlBQVc7QUFBRSxTQUFPLEtBQUtGLFdBQUwsQ0FBaUIsS0FBS25CLFFBQUwsQ0FBYyxDQUFkLENBQWpCLEVBQW1DLEtBQUtBLFFBQUwsQ0FBYyxDQUFkLElBQW1CLENBQXRELENBQVA7QUFBa0UsQ0FBNUc7O0FBQ0FELE1BQU0sQ0FBQ1MsU0FBUCxDQUFpQmMsU0FBakIsR0FBNkIsWUFBVztBQUFFLFNBQU8sS0FBS0gsV0FBTCxDQUFpQixLQUFLbkIsUUFBTCxDQUFjLENBQWQsSUFBaUIsQ0FBbEMsRUFBcUMsS0FBS0EsUUFBTCxDQUFjLENBQWQsQ0FBckMsQ0FBUDtBQUFnRSxDQUExRzs7QUFDQUQsTUFBTSxDQUFDUyxTQUFQLENBQWlCZSxVQUFqQixHQUE4QixZQUFXO0FBQUUsU0FBTyxLQUFLSixXQUFMLENBQWlCLEtBQUtuQixRQUFMLENBQWMsQ0FBZCxJQUFpQixDQUFsQyxFQUFxQyxLQUFLQSxRQUFMLENBQWMsQ0FBZCxDQUFyQyxDQUFQO0FBQWdFLENBQTNHOztBQUVBRCxNQUFNLENBQUNTLFNBQVAsQ0FBaUJnQixNQUFqQixHQUEwQixVQUFTYixDQUFULEVBQVk7QUFBRSxPQUFLVixNQUFMLENBQVksQ0FBWixLQUFpQixDQUFqQjtBQUFvQixPQUFLQyxTQUFMLEdBQWlCUyxDQUFqQjtBQUFvQixPQUFLTCxTQUFMLEdBQWlCaEMsVUFBVSxDQUFDSSxJQUE1QjtBQUFtQyxDQUFuSDs7QUFDQXFCLE1BQU0sQ0FBQ1MsU0FBUCxDQUFpQmlCLE9BQWpCLEdBQTJCLFVBQVNkLENBQVQsRUFBWTtBQUFFLE9BQUtWLE1BQUwsQ0FBWSxDQUFaLEtBQWlCLENBQWpCO0FBQW9CLE9BQUtDLFNBQUwsR0FBaUJTLENBQWpCO0FBQW9CLE9BQUtMLFNBQUwsR0FBaUJoQyxVQUFVLENBQUNFLEtBQTVCO0FBQW9DLENBQXJIOztBQUNBdUIsTUFBTSxDQUFDUyxTQUFQLENBQWlCa0IsSUFBakIsR0FBd0IsVUFBU2YsQ0FBVCxFQUFZO0FBQUUsT0FBS1YsTUFBTCxDQUFZLENBQVosS0FBaUIsQ0FBakI7QUFBb0IsT0FBS0MsU0FBTCxHQUFpQlMsQ0FBakI7QUFBb0IsT0FBS0wsU0FBTCxHQUFpQmhDLFVBQVUsQ0FBQ0MsRUFBNUI7QUFBaUMsQ0FBL0c7O0FBQ0F3QixNQUFNLENBQUNTLFNBQVAsQ0FBaUJtQixNQUFqQixHQUEwQixVQUFTaEIsQ0FBVCxFQUFZO0FBQUUsT0FBS1YsTUFBTCxDQUFZLENBQVosS0FBaUIsQ0FBakI7QUFBb0IsT0FBS0MsU0FBTCxHQUFpQlMsQ0FBakI7QUFBb0IsT0FBS0wsU0FBTCxHQUFpQmhDLFVBQVUsQ0FBQ0csSUFBNUI7QUFBbUMsQ0FBbkgsQyxDQUlBOzs7QUFDQSxJQUFJbUQsTUFBTSxHQUFHO0FBQ1RDLFFBQU0sRUFBRSxDQUFDLENBQUQsRUFBRyxDQUFILENBREM7QUFFVDtBQUNBQyxlQUFhLEVBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUhOO0FBSVQ7QUFDQUMsYUFBVyxFQUFFLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FMSjtBQU1UO0FBQ0FyQyxRQUFNLEVBQUUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQVBDO0FBUVQ7QUFDQXNDLFFBQU0sRUFBRSxnQkFBU0MsT0FBVCxFQUFrQkMsT0FBbEIsRUFBMkI7QUFDL0I7QUFDTixTQUFLeEMsTUFBTCxDQUFZLENBQVosSUFBaUJ1QixJQUFJLENBQUNoQyxLQUFMLENBQVksS0FBSzRDLE1BQUwsQ0FBWSxDQUFaLElBQWUsQ0FBaEIsR0FBcUJJLE9BQWhDLENBQWpCO0FBQ00sU0FBS3ZDLE1BQUwsQ0FBWSxDQUFaLElBQWlCdUIsSUFBSSxDQUFDaEMsS0FBTCxDQUFZLEtBQUs0QyxNQUFMLENBQVksQ0FBWixJQUFlLENBQWhCLEdBQXFCSyxPQUFoQyxDQUFqQixDQUgrQixDQUsvQjs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsQ0FBRWxCLElBQUksQ0FBQ2hDLEtBQUwsQ0FBV2dELE9BQU8sR0FBR3BFLFNBQXJCLENBQUYsRUFBbUNvRCxJQUFJLENBQUNoQyxLQUFMLENBQVdpRCxPQUFPLEdBQUdwRSxVQUFyQixDQUFuQyxDQUFYLENBTitCLENBTy9CO0FBQ0E7O0FBQ0EsU0FBS2dFLGFBQUwsQ0FBbUIsQ0FBbkIsSUFBd0JLLElBQUksQ0FBQyxDQUFELENBQUosR0FBVWxCLElBQUksQ0FBQ21CLElBQUwsQ0FBVyxLQUFLUCxNQUFMLENBQVksQ0FBWixJQUFlLENBQWhCLEdBQXFCaEUsU0FBL0IsQ0FBVixHQUF1RCxDQUEvRTtBQUNOLFNBQUtpRSxhQUFMLENBQW1CLENBQW5CLElBQXdCSyxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVsQixJQUFJLENBQUNtQixJQUFMLENBQVcsS0FBS1AsTUFBTCxDQUFZLENBQVosSUFBZSxDQUFoQixHQUFxQi9ELFVBQS9CLENBQVYsR0FBd0QsQ0FBaEYsQ0FWcUMsQ0FZL0I7O0FBQ0EsUUFBRyxLQUFLZ0UsYUFBTCxDQUFtQixDQUFuQixLQUF5QixDQUFDLENBQTdCLEVBQWdDO0FBQUUsV0FBS0EsYUFBTCxDQUFtQixDQUFuQixJQUF3QixDQUF4QjtBQUE0Qjs7QUFDcEUsUUFBRyxLQUFLQSxhQUFMLENBQW1CLENBQW5CLEtBQXlCLENBQUMsQ0FBN0IsRUFBZ0M7QUFBRSxXQUFLQSxhQUFMLENBQW1CLENBQW5CLElBQXdCLENBQXhCO0FBQTRCOztBQUV4RCxTQUFLQyxXQUFMLENBQWlCLENBQWpCLElBQXNCSSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsQ0FBVixHQUFjbEIsSUFBSSxDQUFDbUIsSUFBTCxDQUFXLEtBQUtQLE1BQUwsQ0FBWSxDQUFaLElBQWUsQ0FBaEIsR0FBcUJoRSxTQUEvQixDQUFwQztBQUNOLFNBQUtrRSxXQUFMLENBQWlCLENBQWpCLElBQXNCSSxJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVUsQ0FBVixHQUFjbEIsSUFBSSxDQUFDbUIsSUFBTCxDQUFXLEtBQUtQLE1BQUwsQ0FBWSxDQUFaLElBQWUsQ0FBaEIsR0FBcUIvRCxVQUEvQixDQUFwQzs7QUFFQSxRQUFHLEtBQUtpRSxXQUFMLENBQWlCLENBQWpCLEtBQXVCaEUsUUFBMUIsRUFBb0M7QUFBRSxXQUFLZ0UsV0FBTCxDQUFpQixDQUFqQixJQUFzQmhFLFFBQVEsR0FBRSxDQUFoQztBQUFvQzs7QUFDMUUsUUFBRyxLQUFLZ0UsV0FBTCxDQUFpQixDQUFqQixLQUF1Qi9ELFNBQTFCLEVBQXFDO0FBQUUsV0FBSytELFdBQUwsQ0FBaUIsQ0FBakIsSUFBc0IvRCxTQUFTLEdBQUcsQ0FBbEM7QUFBc0M7QUFDdEU7QUE5QkksQ0FBYixDLENBa0NBOztBQUVBLElBQUk0QyxXQUFXLEdBQUcsSUFBSXlCLE9BQUosRUFBbEI7QUFDQSxJQUFJQyxpQkFBaUIsR0FBRyxDQUN2QjtBQUFFbkQsR0FBQyxFQUFDLENBQUo7QUFBT0MsR0FBQyxFQUFDLENBQVQ7QUFBWUMsR0FBQyxFQUFDLENBQWQ7QUFBaUJDLEdBQUMsRUFBQyxDQUFuQjtBQUFzQmlELE1BQUksRUFBRSxDQUMzQixFQUQyQixFQUN2QixFQUR1QixFQUNuQixFQURtQixFQUNmLEVBRGUsRUFFckIsRUFGcUIsRUFFakIsRUFGaUIsRUFFYixFQUZhLEVBRVQsRUFGUyxFQUdyQixFQUhxQixFQUdqQixFQUhpQixFQUdiLEVBSGEsRUFHVCxFQUhTLEVBSXJCLEVBSnFCLEVBSWpCLEVBSmlCLEVBSWIsRUFKYSxFQUlULEVBSlMsRUFLckIsRUFMcUIsRUFLakIsRUFMaUIsRUFLYixFQUxhLEVBS1QsRUFMUztBQUE1QixDQUR1QixFQVF2QjtBQUFFcEQsR0FBQyxFQUFDLEVBQUo7QUFBUUMsR0FBQyxFQUFDLENBQVY7QUFBYUMsR0FBQyxFQUFDLENBQWY7QUFBa0JDLEdBQUMsRUFBQyxDQUFwQjtBQUF1QmlELE1BQUksRUFBRSxDQUM1QixFQUQ0QixFQUN4QixFQUR3QixFQUNwQixFQURvQixFQUNoQixFQURnQixFQUNaLEVBRFksRUFDUixFQURRLEVBRXRCLEVBRnNCLEVBRWxCLEVBRmtCLEVBRWQsRUFGYyxFQUVWLEVBRlUsRUFFTixFQUZNLEVBRUYsRUFGRSxFQUd0QixFQUhzQixFQUdsQixFQUhrQixFQUdkLEVBSGMsRUFHVixFQUhVLEVBR04sRUFITSxFQUdGLEVBSEUsRUFJdEIsRUFKc0IsRUFJbEIsRUFKa0IsRUFJZCxFQUpjLEVBSVYsRUFKVSxFQUlOLEVBSk0sRUFJRixFQUpFLEVBS3RCLEVBTHNCLEVBS2xCLEVBTGtCLEVBS2QsRUFMYyxFQUtWLEVBTFUsRUFLTixFQUxNLEVBS0YsRUFMRTtBQUE3QixDQVJ1QixFQWV2QjtBQUFFcEQsR0FBQyxFQUFDLENBQUo7QUFBT0MsR0FBQyxFQUFDLENBQVQ7QUFBWUMsR0FBQyxFQUFDLENBQWQ7QUFBaUJDLEdBQUMsRUFBQyxDQUFuQjtBQUFzQmlELE1BQUksRUFBRSxDQUNyQixFQURxQixFQUNqQixFQURpQixFQUNiLEVBRGEsRUFDVCxFQURTLEVBRXJCLEVBRnFCLEVBRWpCLEVBRmlCLEVBRWIsRUFGYSxFQUVULEVBRlMsRUFHckIsRUFIcUIsRUFHakIsRUFIaUIsRUFHYixFQUhhLEVBR1QsRUFIUyxFQUlyQixFQUpxQixFQUlqQixFQUppQixFQUliLEVBSmEsRUFJVCxFQUpTO0FBQTVCLENBZnVCLENBQXhCLEMsQ0F1QkE7O0FBQ0EsU0FBU0MsSUFBVCxDQUFjQyxLQUFkLEVBQXFCQyxLQUFyQixFQUE0QkMsUUFBNUIsRUFDQTtBQUNJO0FBQ0gsT0FBS3hELENBQUwsR0FBV3NELEtBQVg7QUFDQSxPQUFLckQsQ0FBTCxHQUFXc0QsS0FBWDtBQUNBLE9BQUtFLElBQUwsR0FBYUQsUUFBYjtBQUNBLE9BQUtFLFFBQUwsR0FBaUIsSUFBakI7QUFDRyxPQUFLQyxZQUFMLEdBQW9CLENBQXBCLENBTkosQ0FPSTs7QUFDSCxPQUFLL0IsVUFBTCxHQUFrQixJQUFsQjtBQUNBLEMsQ0FFRDs7O0FBQ0EsU0FBU3NCLE9BQVQsR0FBbUI7QUFDbEIsT0FBS3hCLEdBQUwsR0FBVyxFQUFYO0FBQ0EsT0FBS3hCLENBQUwsR0FBVSxDQUFWO0FBQ0EsT0FBS0MsQ0FBTCxHQUFVLENBQVY7QUFDQTs7QUFFRCtDLE9BQU8sQ0FBQzdCLFNBQVIsQ0FBa0J1QyxnQkFBbEIsR0FBcUMsVUFBU0MsTUFBVCxFQUFpQjNELENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjtBQUMzRCxPQUFLRCxDQUFMLEdBQVVBLENBQVY7QUFDRyxPQUFLQyxDQUFMLEdBQVVBLENBQVY7O0FBRUEsTUFBRzBELE1BQU0sQ0FBQ0MsTUFBUCxJQUFnQjVELENBQUMsR0FBR0MsQ0FBdkIsRUFBMkI7QUFBRSxXQUFPLEtBQVA7QUFBZTs7QUFFNUMsT0FBS3VCLEdBQUwsQ0FBU29DLE1BQVQsR0FBa0IsQ0FBbEI7O0FBQ0MsT0FBSSxJQUFJN0QsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHRSxDQUFuQixFQUFzQkYsQ0FBQyxFQUF2QixFQUEyQjtBQUMxQixTQUFJLElBQUlELEVBQUMsR0FBRyxDQUFaLEVBQWVBLEVBQUMsR0FBR0UsQ0FBbkIsRUFBc0JGLEVBQUMsRUFBdkIsRUFBMkI7QUFDOUIsV0FBSzBCLEdBQUwsQ0FBU3FDLElBQVQsQ0FBZSxJQUFJVixJQUFKLENBQVNyRCxFQUFULEVBQVlDLENBQVosRUFBZTRELE1BQU0sQ0FBRzdELEVBQUMsR0FBSUUsQ0FBQyxHQUFHRCxDQUFaLENBQXJCLENBQWY7QUFDQTtBQUNFOztBQUNELFNBQU8sSUFBUDtBQUNILENBYkQ7O0FBZ0JBaUQsT0FBTyxDQUFDN0IsU0FBUixDQUFrQjJDLFlBQWxCLEdBQWlDLFVBQVNDLFNBQVQsRUFDakM7QUFDQyxPQUFJLElBQUlDLENBQVIsSUFBYUQsU0FBYixFQUNBO0FBQ08sUUFBSVAsUUFBUSxHQUFHTyxTQUFTLENBQUNDLENBQUQsQ0FBeEI7O0FBQ0EsUUFBR1IsUUFBUSxDQUFDMUQsQ0FBVCxHQUFhLENBQWIsSUFBa0IwRCxRQUFRLENBQUN6RCxDQUFULEdBQWEsQ0FBL0IsSUFBb0N5RCxRQUFRLENBQUMxRCxDQUFULElBQWMsS0FBS0UsQ0FBdkQsSUFBNER3RCxRQUFRLENBQUN6RCxDQUFULElBQWMsS0FBS0UsQ0FBL0UsSUFBcUZ1RCxRQUFRLENBQUMxRCxDQUFULEdBQVcwRCxRQUFRLENBQUN4RCxDQUFyQixHQUF3QixLQUFLQSxDQUFqSCxJQUF1SHdELFFBQVEsQ0FBQ3pELENBQVQsR0FBV3lELFFBQVEsQ0FBQ3ZELENBQXJCLEdBQXdCLEtBQUtBLENBQW5KLElBQXdKdUQsUUFBUSxDQUFDTixJQUFULENBQWNVLE1BQWQsSUFBdUJKLFFBQVEsQ0FBQ3hELENBQVQsR0FBV3dELFFBQVEsQ0FBQ3ZELENBQXRNLEVBQTBNO0FBQy9NO0FBQ007O0FBQ0QsU0FBSSxJQUFJRixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUd5RCxRQUFRLENBQUN2RCxDQUE1QixFQUErQkYsQ0FBQyxFQUFoQyxFQUFvQztBQUN6QyxXQUFJLElBQUlELEdBQUMsR0FBRyxDQUFaLEVBQWVBLEdBQUMsR0FBRzBELFFBQVEsQ0FBQ3hELENBQTVCLEVBQStCRixHQUFDLEVBQWhDLEVBQW9DO0FBQ3ZCLFlBQUltRSxPQUFPLEdBQUssQ0FBQ1QsUUFBUSxDQUFDekQsQ0FBVCxHQUFhQSxDQUFkLElBQW1CLEtBQUtDLENBQXpCLEdBQTRCd0QsUUFBUSxDQUFDMUQsQ0FBckMsR0FBeUNBLEdBQXhEO0FBQ0EsYUFBSzBCLEdBQUwsQ0FBU3lDLE9BQVQsRUFBa0JULFFBQWxCLEdBQTZCQSxRQUE3QjtBQUNaLGFBQUtoQyxHQUFMLENBQVN5QyxPQUFULEVBQWtCUixZQUFsQixHQUFpQ0QsUUFBUSxDQUFDTixJQUFULENBQWlCbkQsQ0FBQyxHQUFHeUQsUUFBUSxDQUFDeEQsQ0FBZCxHQUFtQkYsR0FBbkMsQ0FBakM7QUFDQTtBQUNEO0FBQ0Q7QUFDRCxDQWhCRCxDLENBbUJBOzs7QUFDQSxTQUFTMkIsT0FBVCxDQUFpQjNCLENBQWpCLEVBQW9CQyxDQUFwQixFQUF1QjtBQUN0QixTQUFPRCxDQUFDLEdBQUlwQixRQUFRLEdBQUdxQixDQUF2QjtBQUNBOztBQUVELFNBQVNtRSxRQUFULENBQWtCckUsTUFBbEIsRUFBMEJzRSxRQUExQixFQUFvQ0MsSUFBcEMsRUFBMENDLFNBQTFDLEVBQ0E7QUFDQyxNQUFHLENBQUNBLFNBQUosRUFBZTtBQUFFLFdBQU94RSxNQUFNLENBQUMsQ0FBRCxDQUFiO0FBQW1COztBQUNwQ3VFLE1BQUksR0FBR0EsSUFBSSxHQUFHRCxRQUFkOztBQUVBLE9BQUlyRSxDQUFKLElBQVNELE1BQVQsRUFBaUI7QUFDaEIsUUFBR0EsTUFBTSxDQUFDQyxDQUFELENBQU4sQ0FBVXdFLEdBQVYsSUFBZUYsSUFBbEIsRUFBd0I7QUFBRSxhQUFPdkUsTUFBTSxDQUFDQyxDQUFELENBQWI7QUFBbUI7QUFDN0M7QUFDRCxDLENBRUQ7OztBQUNBeUUsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLFlBQVc7QUFDMUJsRyxLQUFHLEdBQUdtRyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NDLFVBQXRDLENBQWlELElBQWpELENBQU47QUFDQUMsdUJBQXFCLENBQUNDLFFBQUQsQ0FBckIsQ0FGMEIsQ0FJdkI7O0FBQ0hOLFFBQU0sQ0FBQ08sZ0JBQVAsQ0FBd0IsU0FBeEIsRUFBbUMsVUFBU0MsQ0FBVCxFQUFZO0FBQzlDLFFBQUdBLENBQUMsQ0FBQ0MsT0FBRixJQUFXLEVBQVgsSUFBaUJELENBQUMsQ0FBQ0MsT0FBRixJQUFXLEVBQS9CLEVBQW1DO0FBQUVoRyxjQUFRLENBQUMrRixDQUFDLENBQUNDLE9BQUgsQ0FBUixHQUFzQixJQUF0QjtBQUE2QjtBQUNsRSxHQUZEO0FBR0FULFFBQU0sQ0FBQ08sZ0JBQVAsQ0FBd0IsT0FBeEIsRUFBaUMsVUFBU0MsQ0FBVCxFQUFZO0FBQzVDLFFBQUdBLENBQUMsQ0FBQ0MsT0FBRixJQUFXLEVBQVgsSUFBaUJELENBQUMsQ0FBQ0MsT0FBRixJQUFXLEVBQS9CLEVBQW1DO0FBQUVoRyxjQUFRLENBQUMrRixDQUFDLENBQUNDLE9BQUgsQ0FBUixHQUFzQixLQUF0QjtBQUE4QjtBQUNoRSxHQUZKLEVBUjBCLENBWXZCOztBQUNBekMsUUFBTSxDQUFDQyxNQUFQLEdBQWdCLENBQUNpQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsWUFBeEIsRUFBc0NPLEtBQXZDLEVBQ1pSLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixZQUF4QixFQUFzQ1EsTUFEMUIsQ0FBaEI7QUFHQTVFLFVBQVEsR0FBRyxJQUFJNkUsS0FBSixFQUFYOztBQUNIN0UsVUFBUSxDQUFDOEUsT0FBVCxHQUFtQixZQUNuQjtBQUNDOUcsT0FBRyxHQUFHLElBQU47QUFDQStHLFNBQUssQ0FBQywwQkFBRCxDQUFMO0FBQ0EsR0FKRDs7QUFLQS9FLFVBQVEsQ0FBQ2tFLE1BQVQsR0FBa0IsWUFBVztBQUFFaEUsYUFBUyxHQUFHLElBQVo7QUFBbUIsR0FBbEQ7O0FBQ0dGLFVBQVEsQ0FBQ2dGLEdBQVQsR0FBZS9FLFdBQWY7QUFFQWdCLGFBQVcsQ0FBQ21DLGdCQUFaLENBQTZCbkYsT0FBN0IsRUFBc0NHLFFBQXRDLEVBQWdEQyxTQUFoRDtBQUNINEMsYUFBVyxDQUFDdUMsWUFBWixDQUF5QmIsaUJBQXpCOztBQUNBMUIsYUFBVyxDQUFDQyxHQUFaLENBQWtCLElBQUU5QyxRQUFILEdBQWEsQ0FBOUIsRUFBa0NnRCxVQUFsQyxHQUErQyxZQUMvQztBQUFFNkQsV0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVo7QUFBa0MsR0FEcEM7QUFFQSxDQTdCRCxDLENBZ0NBOzs7QUFDQSxTQUFTWCxRQUFULEdBQ0E7QUFDSSxNQUFJdkcsR0FBRyxJQUFJLElBQVgsRUFBaUI7QUFBRTtBQUFTOztBQUM1QixNQUFJLENBQUNrQyxTQUFMLEVBQWdCO0FBQUVvRSx5QkFBcUIsQ0FBQ0MsUUFBRCxDQUFyQjtBQUFpQztBQUFTOztBQUUvRCxNQUFJWSxnQkFBZ0IsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLEVBQXZCLENBSkQsQ0FLSTs7QUFDSCxNQUFJQyxHQUFHLEdBQUdoRSxJQUFJLENBQUNoQyxLQUFMLENBQVc4RixJQUFJLENBQUNDLEdBQUwsS0FBYSxJQUF4QixDQUFWOztBQUNBLE1BQUdDLEdBQUcsSUFBSWhILGFBQVYsRUFBd0I7QUFDdkJBLGlCQUFhLEdBQUdnSCxHQUFoQjtBQUNBOUcsb0JBQWdCLEdBQUdELFVBQW5CO0FBQ0FBLGNBQVUsR0FBRyxDQUFiO0FBQ0EsR0FKRCxNQUtLO0FBQUVBLGNBQVU7QUFBSyxHQVp2QixDQWNJOzs7QUFDSCxNQUFHLENBQUM0QixNQUFNLENBQUNZLGVBQVAsQ0FBdUJvRSxnQkFBdkIsQ0FBSixFQUE4QztBQUM3QyxRQUFHekcsUUFBUSxDQUFDLEVBQUQsQ0FBUixJQUFnQnlCLE1BQU0sQ0FBQ3NCLE9BQVAsRUFBbkIsRUFBb0M7QUFDMUJ0QixZQUFNLENBQUM0QixJQUFQLENBQVlvRCxnQkFBWjtBQUNILEtBRlAsTUFFYSxJQUFJekcsUUFBUSxDQUFDLEVBQUQsQ0FBUixJQUFnQnlCLE1BQU0sQ0FBQ3VCLFNBQVAsRUFBcEIsRUFBd0M7QUFDM0N2QixZQUFNLENBQUM2QixNQUFQLENBQWNtRCxnQkFBZDtBQUNILEtBRk0sTUFFQSxJQUFHekcsUUFBUSxDQUFDLEVBQUQsQ0FBUixJQUFnQnlCLE1BQU0sQ0FBQ3dCLFNBQVAsRUFBbkIsRUFBdUM7QUFDMUN4QixZQUFNLENBQUMwQixNQUFQLENBQWNzRCxnQkFBZDtBQUNILEtBRk0sTUFFQSxJQUFHekcsUUFBUSxDQUFDLEVBQUQsQ0FBUixJQUFnQnlCLE1BQU0sQ0FBQ3lCLFVBQVAsRUFBbkIsRUFBd0M7QUFDM0N6QixZQUFNLENBQUMyQixPQUFQLENBQWVxRCxnQkFBZjtBQUNIO0FBQ0osR0F6QkwsQ0EyQkk7OztBQUNJbEQsUUFBTSxDQUFDSSxNQUFQLENBQWNsQyxNQUFNLENBQUNPLFFBQVAsQ0FBZ0IsQ0FBaEIsSUFBc0JQLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixDQUFsQixJQUF1QixDQUEzRCxFQUNJTixNQUFNLENBQUNPLFFBQVAsQ0FBZ0IsQ0FBaEIsSUFBc0JQLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixDQUFsQixJQUFxQixDQUQvQztBQUdILE1BQUk4RSxlQUFlLEdBQUd0RSxXQUFXLENBQUNDLEdBQVosQ0FBZ0JDLE9BQU8sQ0FDaERoQixNQUFNLENBQUNFLFFBQVAsQ0FBZ0IsQ0FBaEIsQ0FEZ0QsRUFDNUJGLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQixDQUFoQixDQUQ0QixDQUF2QixFQUNnQjZDLFFBRHRDO0FBRUEsTUFBSXNDLGVBQWUsR0FBR3ZFLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQkMsT0FBTyxDQUNoRGhCLE1BQU0sQ0FBQ0csTUFBUCxDQUFjLENBQWQsQ0FEZ0QsRUFDOUJILE1BQU0sQ0FBQ0csTUFBUCxDQUFjLENBQWQsQ0FEOEIsQ0FBdkIsRUFDWTRDLFFBRGxDLENBakNMLENBb0NROztBQUNBbEYsS0FBRyxDQUFDeUgsU0FBSixHQUFnQixTQUFoQjtBQUNBekgsS0FBRyxDQUFDMEgsUUFBSixDQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUJ6RCxNQUFNLENBQUNDLE1BQVAsQ0FBYyxDQUFkLENBQW5CLEVBQXFDRCxNQUFNLENBQUNDLE1BQVAsQ0FBYyxDQUFkLENBQXJDLEVBdENSLENBd0NJOztBQUNGLE9BQUksSUFBSXpDLENBQUMsR0FBR3dDLE1BQU0sQ0FBQ0UsYUFBUCxDQUFxQixDQUFyQixDQUFaLEVBQXFDMUMsQ0FBQyxJQUFJd0MsTUFBTSxDQUFDRyxXQUFQLENBQW1CLENBQW5CLENBQTFDLEVBQWlFLEVBQUUzQyxDQUFuRSxFQUFzRTtBQUNsRSxTQUFJLElBQUlELEdBQUMsR0FBR3lDLE1BQU0sQ0FBQ0UsYUFBUCxDQUFxQixDQUFyQixDQUFaLEVBQXFDM0MsR0FBQyxJQUFJeUMsTUFBTSxDQUFDRyxXQUFQLENBQW1CLENBQW5CLENBQTFDLEVBQWlFLEVBQUU1QyxHQUFuRSxFQUFzRTtBQUM1RCxVQUFJZ0QsSUFBSSxHQUFHcEQsU0FBUyxDQUFDNkIsV0FBVyxDQUFDQyxHQUFaLENBQWdCQyxPQUFPLENBQUMzQixHQUFELEVBQUdDLENBQUgsQ0FBdkIsRUFBOEJ3RCxJQUEvQixDQUFwQjtBQUVUakYsU0FBRyxDQUFDMkgsU0FBSixDQUFjM0YsUUFBZCxFQUNId0MsSUFBSSxDQUFDakQsTUFBTCxDQUFZLENBQVosRUFBZUMsQ0FEWixFQUNlZ0QsSUFBSSxDQUFDakQsTUFBTCxDQUFZLENBQVosRUFBZUUsQ0FEOUIsRUFDaUMrQyxJQUFJLENBQUNqRCxNQUFMLENBQVksQ0FBWixFQUFlRyxDQURoRCxFQUNtRDhDLElBQUksQ0FBQ2pELE1BQUwsQ0FBWSxDQUFaLEVBQWVJLENBRGxFLEVBRUhzQyxNQUFNLENBQUNsQyxNQUFQLENBQWMsQ0FBZCxJQUFvQlAsR0FBQyxHQUFHdEIsU0FGckIsRUFFaUMrRCxNQUFNLENBQUNsQyxNQUFQLENBQWMsQ0FBZCxJQUFvQk4sQ0FBQyxHQUFHdEIsVUFGekQsRUFHU0QsU0FIVCxFQUdvQkMsVUFIcEI7O0FBS1EsVUFBRzhDLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQkMsT0FBTyxDQUFDM0IsR0FBRCxFQUFHQyxDQUFILENBQXZCLEVBQThCMEQsWUFBOUIsSUFBNEMsQ0FBNUMsSUFDZGxDLFdBQVcsQ0FBQ0MsR0FBWixDQUFnQkMsT0FBTyxDQUFDM0IsR0FBRCxFQUFHQyxDQUFILENBQXZCLEVBQThCeUQsUUFBOUIsSUFBd0NxQyxlQUQxQixJQUVkdEUsV0FBVyxDQUFDQyxHQUFaLENBQWdCQyxPQUFPLENBQUMzQixHQUFELEVBQUdDLENBQUgsQ0FBdkIsRUFBOEJ5RCxRQUE5QixJQUF3Q3NDLGVBRjdCLEVBRThDO0FBQ3pEaEQsWUFBSSxHQUFHcEQsU0FBUyxDQUFDNkIsV0FBVyxDQUFDQyxHQUFaLENBQWdCQyxPQUFPLENBQUMzQixHQUFELEVBQUdDLENBQUgsQ0FBdkIsRUFBOEIwRCxZQUEvQixDQUFoQjtBQUNBNUQsY0FBTSxHQUFHcUUsUUFBUSxDQUFDcEIsSUFBSSxDQUFDakQsTUFBTixFQUFjaUQsSUFBSSxDQUFDb0QsY0FBbkIsRUFDZnBELElBQUksQ0FBQ3VCLFNBRFUsQ0FBakI7QUFFQS9GLFdBQUcsQ0FBQzJILFNBQUosQ0FBYzNGLFFBQWQsRUFDQ1QsTUFBTSxDQUFDQyxDQURSLEVBQ1dELE1BQU0sQ0FBQ0UsQ0FEbEIsRUFDcUJGLE1BQU0sQ0FBQ0csQ0FENUIsRUFDK0JILE1BQU0sQ0FBQ0ksQ0FEdEMsRUFFQ3NDLE1BQU0sQ0FBQ2xDLE1BQVAsQ0FBYyxDQUFkLElBQW9CUCxHQUFDLEdBQUd0QixTQUZ6QixFQUdDK0QsTUFBTSxDQUFDbEMsTUFBUCxDQUFjLENBQWQsSUFBb0JOLENBQUMsR0FBR3RCLFVBSHpCLEVBSUNELFNBSkQsRUFJWUMsVUFKWjtBQUtBO0FBQ0Q7QUFDRSxHQS9ETCxDQW1FSTs7O0FBQ0EsTUFBSW9CLE1BQU0sR0FBR1ksTUFBTSxDQUFDUyxPQUFQLENBQWVULE1BQU0sQ0FBQ1EsU0FBdEIsQ0FBYjtBQUNIM0MsS0FBRyxDQUFDMkgsU0FBSixDQUFjM0YsUUFBZCxFQUNDVCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVDLENBRFgsRUFDY0QsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRSxDQUR4QixFQUMyQkYsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVRyxDQURyQyxFQUN3Q0gsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVSSxDQURsRCxFQUVDc0MsTUFBTSxDQUFDbEMsTUFBUCxDQUFjLENBQWQsSUFBbUJJLE1BQU0sQ0FBQ08sUUFBUCxDQUFnQixDQUFoQixDQUZwQixFQUV3Q3VCLE1BQU0sQ0FBQ2xDLE1BQVAsQ0FBYyxDQUFkLElBQW1CSSxNQUFNLENBQUNPLFFBQVAsQ0FBZ0IsQ0FBaEIsQ0FGM0QsRUFHQ1AsTUFBTSxDQUFDTSxVQUFQLENBQWtCLENBQWxCLENBSEQsRUFHdUJOLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixDQUFsQixDQUh2QjtBQU1BaEMsZUFBYSxHQUFHMEcsZ0JBQWhCO0FBQ0FiLHVCQUFxQixDQUFDQyxRQUFELENBQXJCO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUN6YkQsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL21hcFwiO1xuXG5cblxuIiwiLy8gaSB3YW50IGEgY2FtZXJhIGZvbGxvd2luZyB0aGUgY2hhciBhcm91bmQgdGhlIG1hcFxuXG5cbmxldCBjdHggPSBudWxsO1xuXG4vLyBjcmVhdGUgYSBtYXAgd2l0aCAxMCoxMCB0aWxlXG5sZXQgZ2FtZU1hcCA9IFtcblx0MCwgMCwgMCwgMCwgMCwgMywgMywgMywgMywgMSwgMywgMywgMywgMywgMywgMywgMCwgMCwgMCwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMywgMiwgMiwgMywgMSwgMywgMiwgMiwgMiwgMiwgMywgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMywgMiwgMiwgMywgMSwgMywgMiwgMiwgMiwgMiwgMywgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMywgMiwgMiwgMywgMSwgMywgMiwgMiwgMiwgMiwgMywgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMywgMiwgMywgMywgMSwgMywgMywgMywgMywgMiwgMywgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMywgMywgMywgMywgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMywgMiwgMiwgMywgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcbiAgICAwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAzLCAyLCAyLCAzLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAzLCAyLCAzLCAzLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0XG5dO1xuLy8g5q+P5Liq5Zyw56CW5aSa5bCRcGl4ZWxcbmxldCB0aWxlV2lkdGggPSA0MDtcbmxldCB0aWxlSGVpZ2h0ID0gNDA7XG4vLyDlnLDlm77lpKflsI/lsLHmmK8xMCoxMFxubGV0IG1hcFdpZHRoID0gMjA7XG5sZXQgbWFwSGVpZ2h0ID0gMjA7XG4vLyBmcmFtZXJhdGVcbmxldCBjdXJyZW50U2Vjb25kID0gMDtcbmxldCBmcmFtZUNvdW50ID0gMDtcbmxldCBmcmFtZXNMYXN0U2Vjb25kID0gMDtcbmxldCBsYXN0RnJhbWVUaW1lID0gMDtcblxuXG4vLyBrZXlDb2RlIDogYm9vbGVhbiB0byB0ZWxsIHVzIHdoaWNoIG9uZSBhcmUgcHJlc3NlZFxubGV0IGhlbGRLZXlzID0ge1xuICAgIC8vIDM3OiBsZWZ0XG4gICAgMzcgOiBmYWxzZSxcbiAgICAvLyAzODogdXBcbiAgICAzOCA6IGZhbHNlLFxuICAgIC8vIDM5OiByaWdodFxuICAgIDM5IDogZmFsc2UsXG4gICAgLy8gNDA6IGRvd25cbiAgICA0MCA6IGZhbHNlXG4gICAgLy8gMzI6IHNwYWNlXG59O1xuXG5sZXQgZGlyZWN0aW9ucyA9IHtcblx0dXBcdDogMCxcblx0cmlnaHQ6IDEsXG5cdGRvd246IDIsXG5cdGxlZnQ6IDNcbn07XG5cblxuLy8g5Zyw5p2/56eN57G7XG5sZXQgZmxvb3JUeXBlcyA9IHtcbiAgICBzb2xpZDogMCxcbiAgICBwYXRoOiAxLFxuICAgIHdhdGVyOiAyXG59O1xuXG4vLyDmlbDlrZfvvIhnYW1lTWFw77yJ5a+55bqU5LiK6aKc6Imy5ZKM5Zyw5p2/56eN57G7XG4vLyAwOuWimeWjgSAxOuiNieWcsCAyOumZhuWcsCAzOuaIv+WtkCA0OiDmsLRcbmxldCB0aWxlVHlwZXMgPSB7XG5cdDAgOiB7IGNvbG91cjogXCIjNzkzZDRjXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjAseTowLHc6NDAsaDo0MH1dIH0sXG5cdDEgOiB7IGNvbG91cjogXCIjNmRmN2IxXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6NDAseTowLHc6NDAsaDo0MH1dIH0sXG5cdDIgOiB7IGNvbG91cjogXCIjYzk3NDYxXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6ODAseTowLHc6NDAsaDo0MH1dXHR9LFxuXHQzIDogeyBjb2xvdXI6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoxMjAseTowLHc6NDAsaDo0MH1dIH0sXG4gICAgNCA6IHsgY29sb3VyOiBcIiMwMDhkZjBcIiwgZmxvb3I6IGZsb29yVHlwZXMud2F0ZXIsIHNwcml0ZTpbe3g6MTYwLHk6MCx3OjQwLGg6NDB9XSB9LFxuICAgIDEwIDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDExIDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjgwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDEyIDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDEzIDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE0IDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjgwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE1IDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE2IDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6MTIwLHc6NDAsaDo0MH1dfSxcbiAgICAxNyA6IHsgY29sb3VyOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjEyMCx3OjQwLGg6NDB9XX0sXG4gICAgMTggOiB7IGNvbG91cjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseToxMjAsdzo0MCxoOjQwfV19XG59O1xuXG4vLyDnianlk4FcbmxldCBpdGVtVHlwZXMgPSB7XG4gICAgMSA6IHtcblx0XHRuYW1lIDogXCJjb2NvbnV0XCIsXG5cdFx0bWF4U3RhY2sgOiA1LFxuXHRcdHNwcml0ZSA6IFt7eDoyNDAseTowLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdXG4gICAgfSxcbiAgICAyIDoge1xuXHRcdG5hbWUgOiBcInN0cmF3YmVycnlcIixcblx0XHRtYXhTdGFjayA6IDUsXG5cdFx0c3ByaXRlIDogW3t4OjI4MCx5OjAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF1cblx0fVxufTtcblxuXG5cbmxldCBnYW1ldGlsZSA9IG51bGwsIGdhbWV0aWxlVVJMID0gXCJzcmMvaW1hZ2VzL3RpbGVzZXRlc3R0LnBuZ1wiLCBhcnRMb2FkZWQgPSBmYWxzZTtcblxuXG5cbi8vIOWIm+W7uuS4gOS4quinkuiJsiAobWl1bWl1KVxubGV0IG1pdW1pdSA9IG5ldyBNaXVNaXUoKTtcbi8vIOWKoOabtOWkmuinkuiJsuKsh1xuZnVuY3Rpb24gTWl1TWl1KCkge1xuXHR0aGlzLnRpbGVGcm9tXHQ9IFsxLDFdO1xuICAgIHRoaXMudGlsZVRvXHRcdD0gWzEwLDEwXTtcbiAgICAvLyB0aW1lIGluIG1pbGxzZWNvbmRzXG4gICAgdGhpcy50aW1lTW92ZWRcdD0gMDtcbiAgICB0aGlzLmRlbGF5TW92ZVx0PSA3MDA7XG5cdHRoaXMuZGltZW5zaW9uc1x0PSBbNDAsNDBdO1xuICAgIHRoaXMucG9zaXRpb25cdD0gWzQ1LDQ1XTtcbiAgICBcbiAgICB0aGlzLmRpcmVjdGlvblx0PSBkaXJlY3Rpb25zLnVwO1xuXHR0aGlzLnNwcml0ZXMgPSB7fTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMudXBdXHRcdD0gW3t4OjAseToxMjAsdzozMCxoOjMwfV07XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLnJpZ2h0XVx0PSBbe3g6MCx5OjE1MCx3OjMwLGg6MzB9XTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMuZG93bl1cdD0gW3t4OjAseToxODAsdzozMCxoOjMwfV07XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLmxlZnRdXHQ9IFt7eDowLHk6MjEwLHc6MzAsaDozMH1dO1xufVxuXG5cbi8vIOaKiuinkuiJsuaUvuWcqOWcsOegluS4ilxuTWl1TWl1LnByb3RvdHlwZS5sb2NhdGlvbiA9IGZ1bmN0aW9uKHgsIHkpIHtcblx0dGhpcy50aWxlRnJvbVx0PSBbeCx5XTtcbiAgICB0aGlzLnRpbGVUb1x0XHQ9IFt4LHldO1xuICAgIC8vIHggYW5kIHkgcG9zaXRpb24gb2YgdGhlIHRpbGUuIHVwZGF0ZSB0aGUgdGlsZUZyb20gYW5kIHRpbGVUbyBwcm9wZXJ0aWVzIHRvIHRoZSBuZXcgdGlsZSBjb29yZGluYXRlc1xuICAgIC8vIGNhbGN1bGF0ZXMgdGhlIHBpeGVsIHBvc2l0aW9uIG9mIHRoZSBjaGFyYWN5ZXIgdXNlIGJlbG93XG5cdHRoaXMucG9zaXRpb25cdD0gWygoIHRpbGVXaWR0aCAqIHggKSsoICh0aWxlV2lkdGggLSB0aGlzLmRpbWVuc2lvbnNbMF0pIC8gMiApKSxcblx0XHQoKCB0aWxlSGVpZ2h0ICogeSApKyggKHRpbGVIZWlnaHQgLSB0aGlzLmRpbWVuc2lvbnNbMV0pIC8gMiApKV07XG59O1xuXG4vLyDmoLnmja7mr4/kuKrluKfmlbDmib7liLDop5LoibLkvY3nva5cbk1pdU1pdS5wcm90b3R5cGUucHJvY2Vzc01vdmVtZW50ID0gZnVuY3Rpb24odCkge1xuICAgIC8vIGlmIGNoYXIgdGlsZVRvID09IHRpbGVGcm9tIGNoYXIgaXMgbm90IG1vdmluZywgc28gcmV0dXJuIGZhbHNlXG5cdGlmKCB0aGlzLnRpbGVGcm9tWzBdID09IHRoaXMudGlsZVRvWzBdICYmIHRoaXMudGlsZUZyb21bMV0gPT0gdGhpcy50aWxlVG9bMV0pIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgLy8gaWYgdGhlIGFtb3VudCBvZiB0aW1lIHBhc3NlZCBzaW5jZSBjaGFyIGJlZ2FuIGl0cyBjdXJyZW50IG1vdmUgPj0gdGhlIHRpbWUgZm9yIGNoYXIgdG8gbW92ZSAxIHRpbGUuIHdlIHNldCBwb3NpdGlvbiB1c2luZyBsb2NhdGlvbiBmdW5jdGlvblxuICAgIC8vIGFrYTogaWYgY2hhciBzdGlsbCBtb3Zpbmdcblx0aWYoKHQgLSB0aGlzLnRpbWVNb3ZlZCkgPj0gdGhpcy5kZWxheU1vdmUpIHtcbiAgICAgICAgdGhpcy5sb2NhdGlvbih0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pO1xuICAgICAgICBpZihtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pXS5ldmVudEVudGVyIT1udWxsKVxuXHRcdHtcblx0XHRcdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSldLmV2ZW50RW50ZXIodGhpcyk7XG4gICAgICAgIH1cblx0fSBlbHNlIHtcbiAgICAgICAgLy8gY3VycmVudCBwb3NpdGlvbiBvbiBjYW52YXNcblx0XHR0aGlzLnBvc2l0aW9uWzBdID0gKHRoaXMudGlsZUZyb21bMF0gKiB0aWxlV2lkdGgpICsgKCh0aWxlV2lkdGgtdGhpcy5kaW1lbnNpb25zWzBdKS8yKTtcblx0XHR0aGlzLnBvc2l0aW9uWzFdID0gKHRoaXMudGlsZUZyb21bMV0gKiB0aWxlSGVpZ2h0KSArICgodGlsZUhlaWdodC10aGlzLmRpbWVuc2lvbnNbMV0pLzIpO1xuXG4gICAgICAgIC8vIGlmIGNoYXIgaXMgbW92aW5nIG9uIHggY29vcmRpbmF0ZSwgY2FsY3VsYXRlIHBpeGVsc1xuXHRcdGlmKHRoaXMudGlsZVRvWzBdICE9IHRoaXMudGlsZUZyb21bMF0pIHtcbiAgICAgICAgICAgIC8vIGRpZmZlcmVuY2UgPSBkaXN0YW5jZSBtb3ZlZFxuICAgICAgICAgICAgLy8g5Yqg5YeP56e75Yqo55qE5Zyw56CW5Yiw6KeS6Imy55qE5L2N5a2QXG5cdFx0XHRsZXQgZGlmZmVyZW5jZSA9ICh0aWxlV2lkdGggLyB0aGlzLmRlbGF5TW92ZSkgKiAodCAtIHRoaXMudGltZU1vdmVkKTtcblx0XHRcdHRoaXMucG9zaXRpb25bMF0rPSAodGhpcy50aWxlVG9bMF0gPCB0aGlzLnRpbGVGcm9tWzBdID8gMCAtIGRpZmZlcmVuY2UgOiBkaWZmZXJlbmNlKTtcblx0XHR9XG5cdCAgICBpZih0aGlzLnRpbGVUb1sxXSAhPSB0aGlzLnRpbGVGcm9tWzFdKSB7XG5cdFx0XHRsZXQgZGlmZmVyZW5jZSA9ICh0aWxlSGVpZ2h0IC8gdGhpcy5kZWxheU1vdmUpICogKHQtdGhpcy50aW1lTW92ZWQpO1xuXHRcdFx0dGhpcy5wb3NpdGlvblsxXSs9ICh0aGlzLnRpbGVUb1sxXTx0aGlzLnRpbGVGcm9tWzFdID8gMCAtIGRpZmZlcmVuY2UgOiBkaWZmZXJlbmNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByb3VuZCB4ICYgeSB0byB3aG9sZSBudW1iZXIg6ZyA6KaB5pW05pWwXG5cdFx0dGhpcy5wb3NpdGlvblswXSA9IE1hdGgucm91bmQodGhpcy5wb3NpdGlvblswXSk7XG5cdFx0dGhpcy5wb3NpdGlvblsxXSA9IE1hdGgucm91bmQodGhpcy5wb3NpdGlvblsxXSk7XG4gICAgfVxuICAgIC8vIHRydWUgPSBjaGFyIGlzIGN1cnJlbnRseSBtb3Zpbmdcblx0cmV0dXJuIHRydWU7XG59XG5cblxuLy8gaWYgY2hhciBjYW4gbW92ZSBpbiBhIHNwZWNpZmljIGRpcmVjXG5NaXVNaXUucHJvdG90eXBlLnBsYWNlc0NhbkdvID0gZnVuY3Rpb24oeCwgeSkge1xuICAgIC8vIGlmIHggYW5kIHkgaXMgaW4gbWFwIGJvdW5kXG4gICAgaWYoeCA8IDAgfHwgeCA+PSBtYXBXaWR0aCB8fCB5IDwgMCB8fCB5ID49IG1hcEhlaWdodCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAvLyBpZiB0aGUgdGlsZSBpcyBwYXRoIHRpbGUgKG9ubHkgbW92ZSBpZiBpdHMgYSBwYXRoKVxuXHRcdGlmKHRpbGVUeXBlc1tnYW1lTWFwW3RvSW5kZXgoeCx5KV1dLmZsb29yIT1mbG9vclR5cGVzLnBhdGgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHJldHVybiB0cnVlO1xufTtcbk1pdU1pdS5wcm90b3R5cGUuY2FuR29VcCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5wbGFjZXNDYW5Hbyh0aGlzLnRpbGVGcm9tWzBdLCB0aGlzLnRpbGVGcm9tWzFdIC0gMSk7IH07XG5NaXVNaXUucHJvdG90eXBlLmNhbkdvRG93biA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5wbGFjZXNDYW5Hbyh0aGlzLnRpbGVGcm9tWzBdLCB0aGlzLnRpbGVGcm9tWzFdICsgMSk7IH07XG5NaXVNaXUucHJvdG90eXBlLmNhbkdvTGVmdCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5wbGFjZXNDYW5Hbyh0aGlzLnRpbGVGcm9tWzBdLTEsIHRoaXMudGlsZUZyb21bMV0pOyB9O1xuTWl1TWl1LnByb3RvdHlwZS5jYW5Hb1JpZ2h0ID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLnBsYWNlc0NhbkdvKHRoaXMudGlsZUZyb21bMF0rMSwgdGhpcy50aWxlRnJvbVsxXSk7IH07XG5cbk1pdU1pdS5wcm90b3R5cGUuZ29MZWZ0ID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1swXS09IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLmxlZnQ7IH07XG5NaXVNaXUucHJvdG90eXBlLmdvUmlnaHQgPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzBdKz0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMucmlnaHQ7IH07XG5NaXVNaXUucHJvdG90eXBlLmdvVXAgPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzFdLT0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMudXA7IH07XG5NaXVNaXUucHJvdG90eXBlLmdvRG93biA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMV0rPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5kb3duOyB9O1xuXG5cblxuLy8gY3JlYXRlIGEgY2FtZXJhIG9iamVjdFxubGV0IGNhbWVyYSA9IHtcbiAgICBzY3JlZW46IFswLDBdLFxuICAgIC8vIOeUu+mdouW3puS4iuinklxuICAgIHN0YXJ0aW5nUG9pbnQ6IFswLDBdLFxuICAgIC8vIOeUu+mdouWPs+S4i+inklxuICAgIGVuZGluZ1BvaW50OiBbMCwwXSxcbiAgICAvLyDor6/lt65cbiAgICBvZmZzZXQ6IFswLDBdLFxuICAgIC8vIHVwZGF0ZSBmdW5jdGlvbiwgeCB5IGlzIG91ciBjZW50ZXIgYXJlYVxuICAgIHVwZGF0ZTogZnVuY3Rpb24ob2Zmc2V0WCwgb2Zmc2V0WSkge1xuICAgICAgICAvLyBvZmZzZXQ6IGhhbGYgdGhlIGNhbnZhcyB3aWR0aCB8fCBoZWlnaHQgKHJvdW5kIGRvd24gdG8gd2hvbGUgbnVtKVxuXHRcdHRoaXMub2Zmc2V0WzBdID0gTWF0aC5mbG9vcigodGhpcy5zY3JlZW5bMF0vMikgLSBvZmZzZXRYKTtcbiAgICAgICAgdGhpcy5vZmZzZXRbMV0gPSBNYXRoLmZsb29yKCh0aGlzLnNjcmVlblsxXS8yKSAtIG9mZnNldFkpO1xuXG4gICAgICAgIC8vIOWcsOegluWcqOWcsOWbvuS4iueahOS9jee9rlxuICAgICAgICBsZXQgdGlsZSA9IFsgTWF0aC5mbG9vcihvZmZzZXRYIC8gdGlsZVdpZHRoKSwgTWF0aC5mbG9vcihvZmZzZXRZIC8gdGlsZUhlaWdodCkgXTtcbiAgICAgICAgLy8gIOiuoeeul+esrOS4gOS4quWcsOegluS9jee9ruWcqHjnur/kuIrvvJog5pyA5aSn5Zyw56CW5pWw6YePIC0g5bGP5bmV55qE5LiA5Y2KXG4gICAgICAgIC8vICDlpJrlh4/ljrsx6L+Z5qC35Zyw56CW5Y+v5Lulc2hvd+S4gOWNiuWcqOWxj+W5leS4ilxuICAgICAgICB0aGlzLnN0YXJ0aW5nUG9pbnRbMF0gPSB0aWxlWzBdIC0gTWF0aC5jZWlsKCh0aGlzLnNjcmVlblswXS8yKSAvIHRpbGVXaWR0aCkgIC0gMTtcblx0XHR0aGlzLnN0YXJ0aW5nUG9pbnRbMV0gPSB0aWxlWzFdIC0gTWF0aC5jZWlsKCh0aGlzLnNjcmVlblsxXS8yKSAvIHRpbGVIZWlnaHQpICAtIDE7XG5cbiAgICAgICAgLy8g56Gu5L+deOWSjHnpg73lpKfkuo4w6KaB5LmI5Lya5Zyo5Zyw5Zu+5aSWXG4gICAgICAgIGlmKHRoaXMuc3RhcnRpbmdQb2ludFswXSA8PSAtMSkgeyB0aGlzLnN0YXJ0aW5nUG9pbnRbMF0gPSAwOyB9XG5cdFx0aWYodGhpcy5zdGFydGluZ1BvaW50WzFdIDw9IC0xKSB7IHRoaXMuc3RhcnRpbmdQb2ludFsxXSA9IDA7IH1cblxuICAgICAgICB0aGlzLmVuZGluZ1BvaW50WzBdID0gdGlsZVswXSArIDEgKyBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzBdLzIpIC8gdGlsZVdpZHRoKTtcblx0XHR0aGlzLmVuZGluZ1BvaW50WzFdID0gdGlsZVsxXSArIDEgKyBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzFdLzIpIC8gdGlsZUhlaWdodCk7XG5cblx0XHRpZih0aGlzLmVuZGluZ1BvaW50WzBdID49IG1hcFdpZHRoKSB7IHRoaXMuZW5kaW5nUG9pbnRbMF0gPSBtYXBXaWR0aCAtMTsgfVxuXHRcdGlmKHRoaXMuZW5kaW5nUG9pbnRbMV0gPj0gbWFwSGVpZ2h0KSB7IHRoaXMuZW5kaW5nUG9pbnRbMV0gPSBtYXBIZWlnaHQgLSAxOyB9XG4gICAgICAgIH1cbn07XG5cblxuLy8gYnVpbGRpbmdzXG5cbmxldCBtYXBUaWxlRGF0YSA9IG5ldyBUaWxlTWFwKCk7XG5sZXQgYnVpbGRpbmdzTG9jYXRpb24gPSBbXG5cdHsgeDo1LCB5OjAsIHc6NCwgaDo1LCBkYXRhOiBbXG5cdFx0MTAsIDExLCAxMSwgMTIsXG4gICAgICAgIDEzLCAxNCwgMTQsIDE1LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTgsXG4gICAgICAgIDE2LCAxNywgMTYsIDE4XG5cdF19LFxuXHR7IHg6MTAsIHk6MCwgdzo2LCBoOjUsIGRhdGE6IFtcblx0XHQxMCwgMTEsIDExLCAxMSwgMTEsIDEyLFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCwgMTcsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCwgMTcsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCwgMTcsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCwgMTcsIDE4XG5cdF19LFxuXHR7IHg6OCwgeTo4LCB3OjQsIGg6NCwgZGF0YTogW1xuICAgICAgICAxMCwgMTEsIDExLCAxMixcbiAgICAgICAgMTMsIDE0LCAxNCwgMTUsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LFxuICAgICAgICAxNiwgMTcsIDE2LCAxOFxuXHRdfVxuXTtcblxuLy8gc3RvcmVzIGluZm9ybWF0aW9uIGZvciBlYWNoIG1hcCB0aWxlXG5mdW5jdGlvbiBUaWxlKHRpbGVYLCB0aWxlWSwgdGlsZVR5cGUpXG57XG4gICAgLy8gdGlsZVksIHRpbGVYID0gdGhlIHBvc2l0aW9uIG9mIHRoZSB0aWxlIG9uIHRoZSBtYXBcblx0dGhpcy54XHRcdFx0PSB0aWxlWDtcblx0dGhpcy55XHRcdFx0PSB0aWxlWTtcblx0dGhpcy50eXBlXHRcdD0gdGlsZVR5cGU7XG5cdHRoaXMuYnVpbGRpbmdcdFx0PSBudWxsO1xuICAgIHRoaXMuYnVpbGRpbmdUeXBlXHQ9IDA7XG4gICAgLy8gIHBvaW50ZXIgdG8gYSBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gYSBNaXVNaXUgaGFzIGNvbXBsZXRlZCBtb3Zpbmcgb24gdG8gdGhpcyB0aWxlXG5cdHRoaXMuZXZlbnRFbnRlclx0PSBudWxsO1xufVxuXG4vLyDlgqjlrZjnrqHnkIblnLDlm77mlbDmja5cbmZ1bmN0aW9uIFRpbGVNYXAoKSB7XG5cdHRoaXMubWFwXHQ9IFtdO1xuXHR0aGlzLndcdFx0PSAwO1xuXHR0aGlzLmhcdFx0PSAwO1xufVxuXG5UaWxlTWFwLnByb3RvdHlwZS5idWlsZE1hcEZyb21EYXRhID0gZnVuY3Rpb24odGlsZUlkLCB3LCBoKSB7XG5cdHRoaXMud1x0XHQ9IHc7XG4gICAgdGhpcy5oXHRcdD0gaDtcblxuICAgIGlmKHRpbGVJZC5sZW5ndGghPSh3ICogaCkpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdFxuICAgIHRoaXMubWFwLmxlbmd0aFx0PSAwO1xuICAgIFx0Zm9yKGxldCB5ID0gMDsgeSA8IGg7IHkrKykge1xuXHRcdCAgICBmb3IobGV0IHggPSAwOyB4IDwgdzsgeCsrKSB7XG5cdFx0XHR0aGlzLm1hcC5wdXNoKCBuZXcgVGlsZSh4LCB5LCB0aWxlSWRbICh4ICsgKHcgKiB5KSldKSApO1xuXHRcdH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5cblRpbGVNYXAucHJvdG90eXBlLmFkZEJ1aWxkaW5ncyA9IGZ1bmN0aW9uKGJ1aWxkaW5ncylcbntcblx0Zm9yKGxldCBpIGluIGJ1aWxkaW5ncylcblx0e1xuICAgICAgICBsZXQgYnVpbGRpbmcgPSBidWlsZGluZ3NbaV07XG4gICAgICAgIGlmKGJ1aWxkaW5nLnggPCAwIHx8IGJ1aWxkaW5nLnkgPCAwIHx8IGJ1aWxkaW5nLnggPj0gdGhpcy53IHx8IGJ1aWxkaW5nLnkgPj0gdGhpcy5oIHx8XHQoYnVpbGRpbmcueCtidWlsZGluZy53KT50aGlzLncgfHwgKGJ1aWxkaW5nLnkrYnVpbGRpbmcuaCk+dGhpcy5oIHx8IGJ1aWxkaW5nLmRhdGEubGVuZ3RoIT0oYnVpbGRpbmcudypidWlsZGluZy5oKSkge1xuXHRcdFx0Y29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IGJ1aWxkaW5nLmg7IHkrKykge1xuXHRcdFx0Zm9yKGxldCB4ID0gMDsgeCA8IGJ1aWxkaW5nLnc7IHgrKykge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlSWR4ID0gKCgoYnVpbGRpbmcueSArIHkpICogdGhpcy53KStidWlsZGluZy54ICsgeCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbdGlsZUlkeF0uYnVpbGRpbmcgPSBidWlsZGluZztcblx0XHRcdFx0dGhpcy5tYXBbdGlsZUlkeF0uYnVpbGRpbmdUeXBlID0gYnVpbGRpbmcuZGF0YVsoICh5ICogYnVpbGRpbmcudykgKyB4KV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5cbi8vIGNvbnZlcnQgeCwgeSBpbnRvIGluZGV4IGluIGdhbWVNYXAgYXJyXG5mdW5jdGlvbiB0b0luZGV4KHgsIHkpIHtcblx0cmV0dXJuKHggKyAobWFwV2lkdGggKiB5KSk7XG59XG5cbmZ1bmN0aW9uIGdldEZyYW1lKHNwcml0ZSwgdGltZUxhc3QsIHRpbWUsIGFuaW1hdGlvbilcbntcblx0aWYoIWFuaW1hdGlvbikgeyByZXR1cm4gc3ByaXRlWzBdOyB9XG5cdHRpbWUgPSB0aW1lICUgdGltZUxhc3Q7XG5cblx0Zm9yKHggaW4gc3ByaXRlKSB7XG5cdFx0aWYoc3ByaXRlW3hdLmVuZD49dGltZSkgeyByZXR1cm4gc3ByaXRlW3hdOyB9XG5cdH1cbn1cblxuLy8g55WM6Z2ibG9hZOWujO+8jOW8gOWni2xvb3BcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0Y3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtaXVtaXVUYWxlXCIpLmdldENvbnRleHQoXCIyZFwiKTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbiAgICBcbiAgICAvLyBhZGQgZXZlbnRMaXN0ZW5lcnMgZm9yIHRoZSBrZXlkb3duYSBhbmQga2V5dXBcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZihlLmtleUNvZGU+PTM3ICYmIGUua2V5Q29kZTw9NDApIHsgaGVsZEtleXNbZS5rZXlDb2RlXSA9IHRydWU7IH1cblx0fSk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuXHRcdGlmKGUua2V5Q29kZT49MzcgJiYgZS5rZXlDb2RlPD00MCkgeyBoZWxkS2V5c1tlLmtleUNvZGVdID0gZmFsc2U7IH1cbiAgICB9KTtcblxuICAgIC8vIGNhbnZhc+WwuuWvuCDkv53lrZjliLAg55u45py6XG4gICAgY2FtZXJhLnNjcmVlbiA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1pdW1pdVRhbGVcIikud2lkdGgsXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWl1bWl1VGFsZVwiKS5oZWlnaHRdO1xuICAgICAgICBcbiAgICBnYW1ldGlsZSA9IG5ldyBJbWFnZSgpO1xuXHRnYW1ldGlsZS5vbmVycm9yID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0Y3R4ID0gbnVsbDtcblx0XHRhbGVydChcIkZhaWxlZCBsb2FkaW5nIGdhbWV0aWxlLlwiKTtcblx0fTtcblx0Z2FtZXRpbGUub25sb2FkID0gZnVuY3Rpb24oKSB7IGFydExvYWRlZCA9IHRydWU7IH07XG4gICAgZ2FtZXRpbGUuc3JjID0gZ2FtZXRpbGVVUkw7XG4gICAgXG4gICAgbWFwVGlsZURhdGEuYnVpbGRNYXBGcm9tRGF0YShnYW1lTWFwLCBtYXBXaWR0aCwgbWFwSGVpZ2h0KTtcblx0bWFwVGlsZURhdGEuYWRkQnVpbGRpbmdzKGJ1aWxkaW5nc0xvY2F0aW9uKTtcblx0bWFwVGlsZURhdGEubWFwWygoMiptYXBXaWR0aCkrMildLmV2ZW50RW50ZXIgPSBmdW5jdGlvbigpXG5cdHsgY29uc29sZS5sb2coXCJFbnRlcmVkIHRpbGUgMiwyXCIpOyB9O1xufTtcblxuXG4vLyBtYWluIGZ1bmN0aW9uXG5mdW5jdGlvbiBkcmF3R2FtZSgpXG57XG4gICAgaWYgKGN0eCA9PSBudWxsKSB7IHJldHVybjsgfVxuICAgIGlmICghYXJ0TG9hZGVkKSB7IHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7IHJldHVybjsgfVxuXG5cdGxldCBjdXJyZW50RnJhbWVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICAvLyBmcmFtZWNvdW50IFxuXHRsZXQgc2VjID0gTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XG5cdGlmKHNlYyAhPSBjdXJyZW50U2Vjb25kKXtcblx0XHRjdXJyZW50U2Vjb25kID0gc2VjO1xuXHRcdGZyYW1lc0xhc3RTZWNvbmQgPSBmcmFtZUNvdW50O1xuXHRcdGZyYW1lQ291bnQgPSAxO1xuXHR9XG5cdGVsc2UgeyBmcmFtZUNvdW50Kys7IH1cblxuICAgIC8vIG1pdW1pdSBtb3ZlbWVudFxuXHRpZighbWl1bWl1LnByb2Nlc3NNb3ZlbWVudChjdXJyZW50RnJhbWVUaW1lKSkge1xuXHRcdGlmKGhlbGRLZXlzWzM4XSAmJiBtaXVtaXUuY2FuR29VcCgpKXsgXG4gICAgICAgICAgICBtaXVtaXUuZ29VcChjdXJyZW50RnJhbWVUaW1lKTsgXG4gICAgICAgIH0gZWxzZSBpZiAoaGVsZEtleXNbNDBdICYmIG1pdW1pdS5jYW5Hb0Rvd24oKSkgeyBcbiAgICAgICAgICAgIG1pdW1pdS5nb0Rvd24oY3VycmVudEZyYW1lVGltZSk7IFxuICAgICAgICB9IGVsc2UgaWYoaGVsZEtleXNbMzddICYmIG1pdW1pdS5jYW5Hb0xlZnQoKSkgeyBcbiAgICAgICAgICAgIG1pdW1pdS5nb0xlZnQoY3VycmVudEZyYW1lVGltZSk7IFxuICAgICAgICB9IGVsc2UgaWYoaGVsZEtleXNbMzldICYmIG1pdW1pdS5jYW5Hb1JpZ2h0KCkpIHsgXG4gICAgICAgICAgICBtaXVtaXUuZ29SaWdodChjdXJyZW50RnJhbWVUaW1lKTsgXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBjYW1lcmHot5/nnYBtaXVtaXXotbBcbiAgICAgICAgY2FtZXJhLnVwZGF0ZShtaXVtaXUucG9zaXRpb25bMF0gKyAobWl1bWl1LmRpbWVuc2lvbnNbMF0gLyAyKSxcbiAgICAgICAgICAgIG1pdW1pdS5wb3NpdGlvblsxXSArIChtaXVtaXUuZGltZW5zaW9uc1sxXS8yKSk7XG5cblx0ICAgIGxldCBtaXVtaXVCdWlsZGluZzEgPSBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleChcblx0XHRtaXVtaXUudGlsZUZyb21bMF0sIG1pdW1pdS50aWxlRnJvbVsxXSldLmJ1aWxkaW5nO1xuXHQgICAgbGV0IG1pdW1pdUJ1aWxkaW5nMiA9IG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KFxuXHRcdG1pdW1pdS50aWxlVG9bMF0sIG1pdW1pdS50aWxlVG9bMV0pXS5idWlsZGluZztcblxuICAgICAgICAvLyDmuIXpmaRsYXN0IGZyYW1lXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGNhbWVyYS5zY3JlZW5bMF0sIGNhbWVyYS5zY3JlZW5bMV0pO1xuICAgIFxuICAgIC8vIG5lc3RlZCBsb29wczogeSBhbmQgeFxuXHRcdGZvcihsZXQgeSA9IGNhbWVyYS5zdGFydGluZ1BvaW50WzFdOyB5IDw9IGNhbWVyYS5lbmRpbmdQb2ludFsxXTsgKyt5KSB7XG5cdFx0ICAgIGZvcihsZXQgeCA9IGNhbWVyYS5zdGFydGluZ1BvaW50WzBdOyB4IDw9IGNhbWVyYS5lbmRpbmdQb2ludFswXTsgKyt4KSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSB0aWxlVHlwZXNbbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0udHlwZV07XG5cblx0XHRcdCAgICBjdHguZHJhd0ltYWdlKGdhbWV0aWxlLFxuXHRcdFx0XHR0aWxlLnNwcml0ZVswXS54LCB0aWxlLnNwcml0ZVswXS55LCB0aWxlLnNwcml0ZVswXS53LCB0aWxlLnNwcml0ZVswXS5oLFxuXHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgKHggKiB0aWxlV2lkdGgpLCBjYW1lcmEub2Zmc2V0WzFdICsgKHkgKiB0aWxlSGVpZ2h0KSxcbiAgICAgICAgICAgICAgICB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBpZihtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5idWlsZGluZ1R5cGUhPTAgJiZcblx0XHRcdFx0bWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmchPW1pdW1pdUJ1aWxkaW5nMSAmJlxuXHRcdFx0XHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5idWlsZGluZyE9bWl1bWl1QnVpbGRpbmcyKSB7XG5cdFx0XHRcdHRpbGUgPSB0aWxlVHlwZXNbbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0uYnVpbGRpbmdUeXBlXTtcblx0XHRcdFx0c3ByaXRlID0gZ2V0RnJhbWUodGlsZS5zcHJpdGUsIHRpbGUuc3ByaXRldGltZUxhc3QsXG5cdFx0XHRcdFx0IHRpbGUuYW5pbWF0aW9uKTtcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZShnYW1ldGlsZSxcblx0XHRcdFx0XHRzcHJpdGUueCwgc3ByaXRlLnksIHNwcml0ZS53LCBzcHJpdGUuaCxcblx0XHRcdFx0XHRjYW1lcmEub2Zmc2V0WzBdICsgKHggKiB0aWxlV2lkdGgpLFxuXHRcdFx0XHRcdGNhbWVyYS5vZmZzZXRbMV0gKyAoeSAqIHRpbGVIZWlnaHQpLFxuXHRcdFx0XHRcdHRpbGVXaWR0aCwgdGlsZUhlaWdodCk7XG5cdFx0XHR9XG5cdFx0fVxuICAgIH1cblxuXG4gICAgXG4gICAgLy8gZHJhdyB0aGUgbWl1bWl1XG4gICAgbGV0IHNwcml0ZSA9IG1pdW1pdS5zcHJpdGVzW21pdW1pdS5kaXJlY3Rpb25dO1xuXHRjdHguZHJhd0ltYWdlKGdhbWV0aWxlLFxuXHRcdHNwcml0ZVswXS54LCBzcHJpdGVbMF0ueSwgc3ByaXRlWzBdLncsIHNwcml0ZVswXS5oLFxuXHRcdGNhbWVyYS5vZmZzZXRbMF0gKyBtaXVtaXUucG9zaXRpb25bMF0sIGNhbWVyYS5vZmZzZXRbMV0gKyBtaXVtaXUucG9zaXRpb25bMV0sXG5cdFx0bWl1bWl1LmRpbWVuc2lvbnNbMF0sIG1pdW1pdS5kaW1lbnNpb25zWzFdKTtcblxuXG5cdGxhc3RGcmFtZVRpbWUgPSBjdXJyZW50RnJhbWVUaW1lO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==