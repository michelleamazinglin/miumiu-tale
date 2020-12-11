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
var tileset = null,
    tilesetURL = "src/images/tilesetestt.png",
    tilesetLoaded = false; // 创建一个角色 (miumiu)

var player = new Character(); // 加更多角色⬇

function Character() {
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


Character.prototype.location = function (x, y) {
  this.tileFrom = [x, y];
  this.tileTo = [x, y]; // x and y position of the tile. update the tileFrom and tileTo properties to the new tile coordinates
  // calculates the pixel position of the characyer use below

  this.position = [tileWidth * x + (tileWidth - this.dimensions[0]) / 2, tileHeight * y + (tileHeight - this.dimensions[1]) / 2];
}; // calculations each frame to find position, pass in a time


Character.prototype.processMovement = function (t) {
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
      // depending on whether the destination tile (tileTo) is left (or above), or right (or below) the tile we are moving from (tileFrom), we subtract or add this amount to the Characters position. 
      var difference = tileWidth / this.delayMove * (t - this.timeMoved);
      this.position[0] += this.tileTo[0] < this.tileFrom[0] ? 0 - difference : difference;
    }

    if (this.tileTo[1] != this.tileFrom[1]) {
      var _difference = tileHeight / this.delayMove * (t - this.timeMoved);

      this.position[1] += this.tileTo[1] < this.tileFrom[1] ? 0 - _difference : _difference;
    } // round x & y to whole number


    this.position[0] = Math.round(this.position[0]);
    this.position[1] = Math.round(this.position[1]);
  } // true = char is currently moving


  return true;
}; // if char can move in a specific direc


Character.prototype.canMoveTo = function (x, y) {
  // if x and y is in map bound
  if (x < 0 || x >= mapWidth || y < 0 || y >= mapHeight) {
    return false;
  } // if the tile is path tile (only move if its a path)


  if (tileTypes[gameMap[toIndex(x, y)]].floor != floorTypes.path) {
    return false;
  }

  return true;
};

Character.prototype.canMoveUp = function () {
  return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] - 1);
};

Character.prototype.canMoveDown = function () {
  return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] + 1);
};

Character.prototype.canMoveLeft = function () {
  return this.canMoveTo(this.tileFrom[0] - 1, this.tileFrom[1]);
};

Character.prototype.canMoveRight = function () {
  return this.canMoveTo(this.tileFrom[0] + 1, this.tileFrom[1]);
};

Character.prototype.moveLeft = function (t) {
  this.tileTo[0] -= 1;
  this.timeMoved = t;
  this.direction = directions.left;
};

Character.prototype.moveRight = function (t) {
  this.tileTo[0] += 1;
  this.timeMoved = t;
  this.direction = directions.right;
};

Character.prototype.moveUp = function (t) {
  this.tileTo[1] -= 1;
  this.timeMoved = t;
  this.direction = directions.up;
};

Character.prototype.moveDown = function (t) {
  this.tileTo[1] += 1;
  this.timeMoved = t;
  this.direction = directions.down;
}; // create a camera object


var viewport = {
  // canvas width and height
  screen: [0, 0],
  // tile coordinates of the top-left area of the map
  startTile: [0, 0],
  // tile coordinates of the bottom-right area of the map
  endTile: [0, 0],
  // offset in pixels
  offset: [0, 0],
  // update function, x y is our center area
  update: function update(offsetX, offsetY) {
    // offset: half the canvas width || height (round down to whole num)
    this.offset[0] = Math.floor(this.screen[0] / 2 - offsetX);
    this.offset[1] = Math.floor(this.screen[1] / 2 - offsetY); // we find the coordinates of the tile

    var tile = [Math.floor(offsetX / tileWidth), Math.floor(offsetY / tileHeight)]; //  calculate the position of the first tile on the x axis by calculting the maximum number of tiles that can fit in half of the screen width, and taking that number away from the centre tile.
    //  remove an additional 1 to allow for tiles that are not completely on the screen, but only partially.

    this.startTile[0] = tile[0] - 1 - Math.ceil(this.screen[0] / 2 / tileWidth);
    this.startTile[1] = tile[1] - 1 - Math.ceil(this.screen[1] / 2 / tileHeight); // check to make sure x or y is not less then 0 (ourside the bounds)

    if (this.startTile[0] < 0) {
      this.startTile[0] = 0;
    }

    if (this.startTile[1] < 0) {
      this.startTile[1] = 0;
    }

    this.endTile[0] = tile[0] + 1 + Math.ceil(this.screen[0] / 2 / tileWidth);
    this.endTile[1] = tile[1] + 1 + Math.ceil(this.screen[1] / 2 / tileHeight);

    if (this.endTile[0] >= mapWidth) {
      this.endTile[0] = mapWidth - 1;
    }

    if (this.endTile[1] >= mapHeight) {
      this.endTile[1] = mapHeight - 1;
    }
  }
}; // rooftop

var mapTileData = new TileMap();
var roofList = [{
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

function Tile(tx, ty, tt) {
  // ty, tx = the position of the tile on the map
  this.x = tx;
  this.y = ty;
  this.type = tt;
  this.roof = null;
  this.roofType = 0; //  pointer to a function to execute when a character has completed moving on to this tile

  this.eventEnter = null;
} // stores and manages our loaded map data


function TileMap() {
  this.map = [];
  this.w = 0;
  this.h = 0;
}

TileMap.prototype.buildMapFromData = function (tileMapId, w, h) {
  this.w = w;
  this.h = h;

  if (tileMapId.length != w * h) {
    return false;
  }

  this.map.length = 0;

  for (var y = 0; y < h; y++) {
    for (var _x = 0; _x < w; _x++) {
      this.map.push(new Tile(_x, y, tileMapId[y * w + _x]));
    }
  }

  return true;
};

TileMap.prototype.addRoofs = function (roofs) {
  for (var i in roofs) {
    var r = roofs[i];

    if (r.x < 0 || r.y < 0 || r.x >= this.w || r.y >= this.h || r.x + r.w > this.w || r.y + r.h > this.h || r.data.length != r.w * r.h) {
      continue;
    }

    for (var y = 0; y < r.h; y++) {
      for (var _x2 = 0; _x2 < r.w; _x2++) {
        var tileIdx = (r.y + y) * this.w + r.x + _x2;
        this.map[tileIdx].roof = r;
        this.map[tileIdx].roofType = r.data[y * r.w + _x2];
      }
    }
  }
}; // convert x, y into index in gameMap arr


function toIndex(x, y) {
  return y * mapWidth + x;
}

function getFrame(sprite, duration, time, animated) {
  if (!animated) {
    return sprite[0];
  }

  time = time % duration;

  for (x in sprite) {
    if (sprite[x].end >= time) {
      return sprite[x];
    }
  }
} // loop starts when page done loading


window.onload = function () {
  ctx = document.getElementById('game').getContext("2d");
  requestAnimationFrame(drawGame);
  ctx.font = "bold 10pt sans-serif"; // add eventListeners for the keydowna and keyup

  window.addEventListener("keydown", function (e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      heldKeys[e.keyCode] = true;
    }
  });
  window.addEventListener("keyup", function (e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      heldKeys[e.keyCode] = false;
    }
  }); // checks the Canvas dimensions and stores it in the viewport objects

  viewport.screen = [document.getElementById('game').width, document.getElementById('game').height];
  tileset = new Image();

  tileset.onerror = function () {
    ctx = null;
    alert("Failed loading tileset.");
  };

  tileset.onload = function () {
    tilesetLoaded = true;
  };

  tileset.src = tilesetURL;
  mapTileData.buildMapFromData(gameMap, mapWidth, mapHeight);
  mapTileData.addRoofs(roofList);

  mapTileData.map[2 * mapWidth + 2].eventEnter = function () {
    console.log("Entered tile 2,2");
  };
}; // main function


function drawGame() {
  if (ctx == null) {
    return;
  }

  if (!tilesetLoaded) {
    requestAnimationFrame(drawGame);
    return;
  }

  var currentFrameTime = Date.now();
  var timeElapsed = currentFrameTime - lastFrameTime; // framecount 

  var sec = Math.floor(Date.now() / 1000);

  if (sec != currentSecond) {
    currentSecond = sec;
    framesLastSecond = frameCount;
    frameCount = 1;
  } else {
    frameCount++;
  } // player movement


  if (!player.processMovement(currentFrameTime)) {
    if (heldKeys[38] && player.canMoveUp()) {
      player.moveUp(currentFrameTime);
    } else if (heldKeys[40] && player.canMoveDown()) {
      player.moveDown(currentFrameTime);
    } else if (heldKeys[37] && player.canMoveLeft()) {
      player.moveLeft(currentFrameTime);
    } else if (heldKeys[39] && player.canMoveRight()) {
      player.moveRight(currentFrameTime);
    }
  } // set the viewport centre to the player top/left position plus half the players width/height.


  viewport.update(player.position[0] + player.dimensions[0] / 2, player.position[1] + player.dimensions[1] / 2);
  var playerRoof1 = mapTileData.map[toIndex(player.tileFrom[0], player.tileFrom[1])].roof;
  var playerRoof2 = mapTileData.map[toIndex(player.tileTo[0], player.tileTo[1])].roof; // erase anything on the Canvas from the last frame

  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]); // nested loops: y and x

  for (var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y) {
    for (var _x3 = viewport.startTile[0]; _x3 <= viewport.endTile[0]; ++_x3) {
      var tile = tileTypes[mapTileData.map[toIndex(_x3, y)].type];
      ctx.drawImage(tileset, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h, viewport.offset[0] + _x3 * tileWidth, viewport.offset[1] + y * tileHeight, tileWidth, tileHeight);

      if (mapTileData.map[toIndex(_x3, y)].roofType != 0 && mapTileData.map[toIndex(_x3, y)].roof != playerRoof1 && mapTileData.map[toIndex(_x3, y)].roof != playerRoof2) {
        tile = tileTypes[mapTileData.map[toIndex(_x3, y)].roofType];
        sprite = getFrame(tile.sprite, tile.spriteDuration, tile.animated);
        ctx.drawImage(tileset, sprite.x, sprite.y, sprite.w, sprite.h, viewport.offset[0] + _x3 * tileWidth, viewport.offset[1] + y * tileHeight, tileWidth, tileHeight);
      }
    }
  } // draw the player


  var sprite = player.sprites[player.direction];
  ctx.drawImage(tileset, sprite[0].x, sprite[0].y, sprite[0].w, sprite[0].h, viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1], player.dimensions[0], player.dimensions[1]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJoZWxkS2V5cyIsImRpcmVjdGlvbnMiLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJmbG9vclR5cGVzIiwic29saWQiLCJwYXRoIiwid2F0ZXIiLCJ0aWxlVHlwZXMiLCJjb2xvdXIiLCJmbG9vciIsInNwcml0ZSIsIngiLCJ5IiwidyIsImgiLCJpdGVtVHlwZXMiLCJuYW1lIiwibWF4U3RhY2siLCJvZmZzZXQiLCJ0aWxlc2V0IiwidGlsZXNldFVSTCIsInRpbGVzZXRMb2FkZWQiLCJwbGF5ZXIiLCJDaGFyYWN0ZXIiLCJ0aWxlRnJvbSIsInRpbGVUbyIsInRpbWVNb3ZlZCIsImRlbGF5TW92ZSIsImRpbWVuc2lvbnMiLCJwb3NpdGlvbiIsImRpcmVjdGlvbiIsInNwcml0ZXMiLCJwcm90b3R5cGUiLCJsb2NhdGlvbiIsInByb2Nlc3NNb3ZlbWVudCIsInQiLCJtYXBUaWxlRGF0YSIsIm1hcCIsInRvSW5kZXgiLCJldmVudEVudGVyIiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJyb3VuZCIsImNhbk1vdmVUbyIsImNhbk1vdmVVcCIsImNhbk1vdmVEb3duIiwiY2FuTW92ZUxlZnQiLCJjYW5Nb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsIm1vdmVVcCIsIm1vdmVEb3duIiwidmlld3BvcnQiLCJzY3JlZW4iLCJzdGFydFRpbGUiLCJlbmRUaWxlIiwidXBkYXRlIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0aWxlIiwiY2VpbCIsIlRpbGVNYXAiLCJyb29mTGlzdCIsImRhdGEiLCJUaWxlIiwidHgiLCJ0eSIsInR0IiwidHlwZSIsInJvb2YiLCJyb29mVHlwZSIsImJ1aWxkTWFwRnJvbURhdGEiLCJ0aWxlTWFwSWQiLCJsZW5ndGgiLCJwdXNoIiwiYWRkUm9vZnMiLCJyb29mcyIsImkiLCJyIiwidGlsZUlkeCIsImdldEZyYW1lIiwiZHVyYXRpb24iLCJ0aW1lIiwiYW5pbWF0ZWQiLCJlbmQiLCJ3aW5kb3ciLCJvbmxvYWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXdHYW1lIiwiZm9udCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsIndpZHRoIiwiaGVpZ2h0IiwiSW1hZ2UiLCJvbmVycm9yIiwiYWxlcnQiLCJzcmMiLCJjb25zb2xlIiwibG9nIiwiY3VycmVudEZyYW1lVGltZSIsIkRhdGUiLCJub3ciLCJ0aW1lRWxhcHNlZCIsInNlYyIsInBsYXllclJvb2YxIiwicGxheWVyUm9vZjIiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImRyYXdJbWFnZSIsInNwcml0ZUR1cmF0aW9uIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlD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ZVQsTUFBTSxDQUFDUSxTQUF0QixDQUFiO0FBQ0gzQyxLQUFHLENBQUM4SCxTQUFKLENBQWM5RixPQUFkLEVBQ0NULE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUMsQ0FEWCxFQUNjRCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVFLENBRHhCLEVBQzJCRixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVHLENBRHJDLEVBQ3dDSCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVJLENBRGxELEVBRUNzQyxRQUFRLENBQUNsQyxNQUFULENBQWdCLENBQWhCLElBQXFCSSxNQUFNLENBQUNPLFFBQVAsQ0FBZ0IsQ0FBaEIsQ0FGdEIsRUFFMEN1QixRQUFRLENBQUNsQyxNQUFULENBQWdCLENBQWhCLElBQXFCSSxNQUFNLENBQUNPLFFBQVAsQ0FBZ0IsQ0FBaEIsQ0FGL0QsRUFHQ1AsTUFBTSxDQUFDTSxVQUFQLENBQWtCLENBQWxCLENBSEQsRUFHdUJOLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixDQUFsQixDQUh2QjtBQU1BaEMsZUFBYSxHQUFHNEcsZ0JBQWhCO0FBQ0FkLHVCQUFxQixDQUFDQyxRQUFELENBQXJCO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNwY0QsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL21hcFwiO1xuXG5cblxuIiwiLy8gaSB3YW50IGEgY2FtZXJhIGZvbGxvd2luZyB0aGUgY2hhciBhcm91bmQgdGhlIG1hcFxuXG5cbmxldCBjdHggPSBudWxsO1xuXG4vLyBjcmVhdGUgYSBtYXAgd2l0aCAxMCoxMCB0aWxlXG5sZXQgZ2FtZU1hcCA9IFtcblx0MCwgMCwgMCwgMCwgMCwgMywgMywgMywgMywgMSwgMywgMywgMywgMywgMywgMywgMCwgMCwgMCwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMywgMiwgMiwgMywgMSwgMywgMiwgMiwgMiwgMiwgMywgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMywgMiwgMiwgMywgMSwgMywgMiwgMiwgMiwgMiwgMywgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMywgMiwgMiwgMywgMSwgMywgMiwgMiwgMiwgMiwgMywgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMywgMiwgMywgMywgMSwgMywgMywgMywgMywgMiwgMywgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMywgMywgMywgMywgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMywgMiwgMiwgMywgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcbiAgICAwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAzLCAyLCAyLCAzLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAzLCAyLCAzLCAzLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0XG5dO1xuLy8g5q+P5Liq5Zyw56CW5aSa5bCRcGl4ZWxcbmxldCB0aWxlV2lkdGggPSA0MDtcbmxldCB0aWxlSGVpZ2h0ID0gNDA7XG4vLyDlnLDlm77lpKflsI/lsLHmmK8xMCoxMFxubGV0IG1hcFdpZHRoID0gMjA7XG5sZXQgbWFwSGVpZ2h0ID0gMjA7XG4vLyBmcmFtZXJhdGVcbmxldCBjdXJyZW50U2Vjb25kID0gMDtcbmxldCBmcmFtZUNvdW50ID0gMDtcbmxldCBmcmFtZXNMYXN0U2Vjb25kID0gMDtcbmxldCBsYXN0RnJhbWVUaW1lID0gMDtcblxuXG4vLyBrZXlDb2RlIDogYm9vbGVhbiB0byB0ZWxsIHVzIHdoaWNoIG9uZSBhcmUgcHJlc3NlZFxubGV0IGhlbGRLZXlzID0ge1xuICAgIC8vIDM3OiBsZWZ0XG4gICAgMzcgOiBmYWxzZSxcbiAgICAvLyAzODogdXBcbiAgICAzOCA6IGZhbHNlLFxuICAgIC8vIDM5OiByaWdodFxuICAgIDM5IDogZmFsc2UsXG4gICAgLy8gNDA6IGRvd25cbiAgICA0MCA6IGZhbHNlXG4gICAgLy8gMzI6IHNwYWNlXG59O1xuXG5sZXQgZGlyZWN0aW9ucyA9IHtcblx0dXBcdDogMCxcblx0cmlnaHQ6IDEsXG5cdGRvd246IDIsXG5cdGxlZnQ6IDNcbn07XG5cblxuLy8g5Zyw5p2/56eN57G7XG5sZXQgZmxvb3JUeXBlcyA9IHtcbiAgICBzb2xpZDogMCxcbiAgICBwYXRoOiAxLFxuICAgIHdhdGVyOiAyXG59O1xuXG4vLyDmlbDlrZfvvIhnYW1lTWFw77yJ5a+55bqU5LiK6aKc6Imy5ZKM5Zyw5p2/56eN57G7XG4vLyAwOuWimeWjgSAxOuiNieWcsCAyOumZhuWcsCAzOuaIv+WtkCA0OiDmsLRcbmxldCB0aWxlVHlwZXMgPSB7XG5cdDAgOiB7IGNvbG91cjogXCIjNzkzZDRjXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjAseTowLHc6NDAsaDo0MH1dIH0sXG5cdDEgOiB7IGNvbG91cjogXCIjNmRmN2IxXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6NDAseTowLHc6NDAsaDo0MH1dIH0sXG5cdDIgOiB7IGNvbG91cjogXCIjYzk3NDYxXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6ODAseTowLHc6NDAsaDo0MH1dXHR9LFxuXHQzIDogeyBjb2xvdXI6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoxMjAseTowLHc6NDAsaDo0MH1dIH0sXG4gICAgNCA6IHsgY29sb3VyOiBcIiMwMDhkZjBcIiwgZmxvb3I6IGZsb29yVHlwZXMud2F0ZXIsIHNwcml0ZTpbe3g6MTYwLHk6MCx3OjQwLGg6NDB9XSB9LFxuICAgIDEwIDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDExIDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjgwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDEyIDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6NDAsdzo0MCxoOjQwfV19LFxuICAgIDEzIDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE0IDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjgwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE1IDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6ODAsdzo0MCxoOjQwfV19LFxuICAgIDE2IDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MjQwLHk6MTIwLHc6NDAsaDo0MH1dfSxcbiAgICAxNyA6IHsgY29sb3VyOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjEyMCx3OjQwLGg6NDB9XX0sXG4gICAgMTggOiB7IGNvbG91cjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDozMjAseToxMjAsdzo0MCxoOjQwfV19XG59O1xuXG4vLyDnianlk4FcbmxldCBpdGVtVHlwZXMgPSB7XG4gICAgMSA6IHtcblx0XHRuYW1lIDogXCJjb2NvbnV0XCIsXG5cdFx0bWF4U3RhY2sgOiA1LFxuXHRcdHNwcml0ZSA6IFt7eDoyNDAseTowLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdXG4gICAgfSxcbiAgICAyIDoge1xuXHRcdG5hbWUgOiBcInN0cmF3YmVycnlcIixcblx0XHRtYXhTdGFjayA6IDUsXG5cdFx0c3ByaXRlIDogW3t4OjI4MCx5OjAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF1cblx0fVxufTtcblxuXG5cbmxldCB0aWxlc2V0ID0gbnVsbCwgdGlsZXNldFVSTCA9IFwic3JjL2ltYWdlcy90aWxlc2V0ZXN0dC5wbmdcIiwgdGlsZXNldExvYWRlZCA9IGZhbHNlO1xuXG5cblxuLy8g5Yib5bu65LiA5Liq6KeS6ImyIChtaXVtaXUpXG5sZXQgcGxheWVyID0gbmV3IENoYXJhY3RlcigpO1xuLy8g5Yqg5pu05aSa6KeS6Imy4qyHXG5mdW5jdGlvbiBDaGFyYWN0ZXIoKSB7XG5cdHRoaXMudGlsZUZyb21cdD0gWzEsMV07XG4gICAgdGhpcy50aWxlVG9cdFx0PSBbMTAsMTBdO1xuICAgIC8vIHRpbWUgaW4gbWlsbHNlY29uZHNcbiAgICB0aGlzLnRpbWVNb3ZlZFx0PSAwO1xuICAgIHRoaXMuZGVsYXlNb3ZlXHQ9IDcwMDtcblx0dGhpcy5kaW1lbnNpb25zXHQ9IFs0MCw0MF07XG4gICAgdGhpcy5wb3NpdGlvblx0PSBbNDUsNDVdO1xuICAgIFxuICAgIHRoaXMuZGlyZWN0aW9uXHQ9IGRpcmVjdGlvbnMudXA7XG5cdHRoaXMuc3ByaXRlcyA9IHt9O1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy51cF1cdFx0PSBbe3g6MCx5OjEyMCx3OjMwLGg6MzB9XTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMucmlnaHRdXHQ9IFt7eDowLHk6MTUwLHc6MzAsaDozMH1dO1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy5kb3duXVx0PSBbe3g6MCx5OjE4MCx3OjMwLGg6MzB9XTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMubGVmdF1cdD0gW3t4OjAseToyMTAsdzozMCxoOjMwfV07XG59XG5cblxuLy8g5oqK6KeS6Imy5pS+5Zyo5Zyw56CW5LiKXG5DaGFyYWN0ZXIucHJvdG90eXBlLmxvY2F0aW9uID0gZnVuY3Rpb24oeCwgeSkge1xuXHR0aGlzLnRpbGVGcm9tXHQ9IFt4LHldO1xuICAgIHRoaXMudGlsZVRvXHRcdD0gW3gseV07XG4gICAgLy8geCBhbmQgeSBwb3NpdGlvbiBvZiB0aGUgdGlsZS4gdXBkYXRlIHRoZSB0aWxlRnJvbSBhbmQgdGlsZVRvIHByb3BlcnRpZXMgdG8gdGhlIG5ldyB0aWxlIGNvb3JkaW5hdGVzXG4gICAgLy8gY2FsY3VsYXRlcyB0aGUgcGl4ZWwgcG9zaXRpb24gb2YgdGhlIGNoYXJhY3llciB1c2UgYmVsb3dcblx0dGhpcy5wb3NpdGlvblx0PSBbKCggdGlsZVdpZHRoICogeCApKyggKHRpbGVXaWR0aCAtIHRoaXMuZGltZW5zaW9uc1swXSkgLyAyICkpLFxuXHRcdCgoIHRpbGVIZWlnaHQgKiB5ICkrKCAodGlsZUhlaWdodCAtIHRoaXMuZGltZW5zaW9uc1sxXSkgLyAyICkpXTtcbn07XG5cbi8vIGNhbGN1bGF0aW9ucyBlYWNoIGZyYW1lIHRvIGZpbmQgcG9zaXRpb24sIHBhc3MgaW4gYSB0aW1lXG5DaGFyYWN0ZXIucHJvdG90eXBlLnByb2Nlc3NNb3ZlbWVudCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAvLyBpZiBjaGFyIHRpbGVUbyA9PSB0aWxlRnJvbSBjaGFyIGlzIG5vdCBtb3ZpbmcsIHNvIHJldHVybiBmYWxzZVxuXHRpZiggdGhpcy50aWxlRnJvbVswXSA9PSB0aGlzLnRpbGVUb1swXSAmJiB0aGlzLnRpbGVGcm9tWzFdID09IHRoaXMudGlsZVRvWzFdKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIC8vIGlmIHRoZSBhbW91bnQgb2YgdGltZSBwYXNzZWQgc2luY2UgY2hhciBiZWdhbiBpdHMgY3VycmVudCBtb3ZlID49IHRoZSB0aW1lIGZvciBjaGFyIHRvIG1vdmUgMSB0aWxlLiB3ZSBzZXQgcG9zaXRpb24gdXNpbmcgbG9jYXRpb24gZnVuY3Rpb25cbiAgICAvLyBha2E6IGlmIGNoYXIgc3RpbGwgbW92aW5nXG5cdGlmKCh0IC0gdGhpcy50aW1lTW92ZWQpID49IHRoaXMuZGVsYXlNb3ZlKSB7XG4gICAgICAgIHRoaXMubG9jYXRpb24odGhpcy50aWxlVG9bMF0sIHRoaXMudGlsZVRvWzFdKTtcbiAgICAgICAgaWYobWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy50aWxlVG9bMF0sIHRoaXMudGlsZVRvWzFdKV0uZXZlbnRFbnRlciE9bnVsbClcblx0XHR7XG5cdFx0XHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pXS5ldmVudEVudGVyKHRoaXMpO1xuICAgICAgICB9XG5cdH0gZWxzZSB7XG4gICAgICAgIC8vIGN1cnJlbnQgcG9zaXRpb24gb24gY2FudmFzXG5cdFx0dGhpcy5wb3NpdGlvblswXSA9ICh0aGlzLnRpbGVGcm9tWzBdICogdGlsZVdpZHRoKSArICgodGlsZVdpZHRoLXRoaXMuZGltZW5zaW9uc1swXSkvMik7XG5cdFx0dGhpcy5wb3NpdGlvblsxXSA9ICh0aGlzLnRpbGVGcm9tWzFdICogdGlsZUhlaWdodCkgKyAoKHRpbGVIZWlnaHQtdGhpcy5kaW1lbnNpb25zWzFdKS8yKTtcblxuICAgICAgICAvLyBpZiBjaGFyIGlzIG1vdmluZyBvbiB4IGNvb3JkaW5hdGUsIGNhbGN1bGF0ZSBwaXhlbHNcblx0XHRpZih0aGlzLnRpbGVUb1swXSAhPSB0aGlzLnRpbGVGcm9tWzBdKSB7XG4gICAgICAgICAgICAvLyBkaWZmZXJlbmNlID0gZGlzdGFuY2UgbW92ZWRcbiAgICAgICAgICAgIC8vIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBkZXN0aW5hdGlvbiB0aWxlICh0aWxlVG8pIGlzIGxlZnQgKG9yIGFib3ZlKSwgb3IgcmlnaHQgKG9yIGJlbG93KSB0aGUgdGlsZSB3ZSBhcmUgbW92aW5nIGZyb20gKHRpbGVGcm9tKSwgd2Ugc3VidHJhY3Qgb3IgYWRkIHRoaXMgYW1vdW50IHRvIHRoZSBDaGFyYWN0ZXJzIHBvc2l0aW9uLiBcblx0XHRcdGxldCBkaWZmZXJlbmNlID0gKHRpbGVXaWR0aCAvIHRoaXMuZGVsYXlNb3ZlKSAqICh0IC0gdGhpcy50aW1lTW92ZWQpO1xuXHRcdFx0dGhpcy5wb3NpdGlvblswXSs9ICh0aGlzLnRpbGVUb1swXSA8IHRoaXMudGlsZUZyb21bMF0gPyAwIC0gZGlmZmVyZW5jZSA6IGRpZmZlcmVuY2UpO1xuXHRcdH1cblx0ICAgIGlmKHRoaXMudGlsZVRvWzFdICE9IHRoaXMudGlsZUZyb21bMV0pIHtcblx0XHRcdGxldCBkaWZmZXJlbmNlID0gKHRpbGVIZWlnaHQgLyB0aGlzLmRlbGF5TW92ZSkgKiAodC10aGlzLnRpbWVNb3ZlZCk7XG5cdFx0XHR0aGlzLnBvc2l0aW9uWzFdKz0gKHRoaXMudGlsZVRvWzFdPHRoaXMudGlsZUZyb21bMV0gPyAwIC0gZGlmZmVyZW5jZSA6IGRpZmZlcmVuY2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJvdW5kIHggJiB5IHRvIHdob2xlIG51bWJlclxuXHRcdHRoaXMucG9zaXRpb25bMF0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMF0pO1xuXHRcdHRoaXMucG9zaXRpb25bMV0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMV0pO1xuICAgIH1cbiAgICAvLyB0cnVlID0gY2hhciBpcyBjdXJyZW50bHkgbW92aW5nXG5cdHJldHVybiB0cnVlO1xufVxuXG5cbi8vIGlmIGNoYXIgY2FuIG1vdmUgaW4gYSBzcGVjaWZpYyBkaXJlY1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5jYW5Nb3ZlVG8gPSBmdW5jdGlvbih4LCB5KVxue1xuICAgIC8vIGlmIHggYW5kIHkgaXMgaW4gbWFwIGJvdW5kXG4gICAgaWYoeCA8IDAgfHwgeCA+PSBtYXBXaWR0aCB8fCB5IDwgMCB8fCB5ID49IG1hcEhlaWdodCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAvLyBpZiB0aGUgdGlsZSBpcyBwYXRoIHRpbGUgKG9ubHkgbW92ZSBpZiBpdHMgYSBwYXRoKVxuXHRcdGlmKHRpbGVUeXBlc1tnYW1lTWFwW3RvSW5kZXgoeCx5KV1dLmZsb29yIT1mbG9vclR5cGVzLnBhdGgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHJldHVybiB0cnVlO1xufTtcbkNoYXJhY3Rlci5wcm90b3R5cGUuY2FuTW92ZVVwID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNhbk1vdmVUbyh0aGlzLnRpbGVGcm9tWzBdLCB0aGlzLnRpbGVGcm9tWzFdLTEpOyB9O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5jYW5Nb3ZlRG93biA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jYW5Nb3ZlVG8odGhpcy50aWxlRnJvbVswXSwgdGhpcy50aWxlRnJvbVsxXSsxKTsgfTtcbkNoYXJhY3Rlci5wcm90b3R5cGUuY2FuTW92ZUxlZnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY2FuTW92ZVRvKHRoaXMudGlsZUZyb21bMF0tMSwgdGhpcy50aWxlRnJvbVsxXSk7IH07XG5DaGFyYWN0ZXIucHJvdG90eXBlLmNhbk1vdmVSaWdodCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jYW5Nb3ZlVG8odGhpcy50aWxlRnJvbVswXSsxLCB0aGlzLnRpbGVGcm9tWzFdKTsgfTtcblxuQ2hhcmFjdGVyLnByb3RvdHlwZS5tb3ZlTGVmdCA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMF0tPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5sZWZ0OyB9O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5tb3ZlUmlnaHQgPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzBdKz0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMucmlnaHQ7IH07XG5DaGFyYWN0ZXIucHJvdG90eXBlLm1vdmVVcCA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMV0tPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy51cDsgfTtcbkNoYXJhY3Rlci5wcm90b3R5cGUubW92ZURvd24gPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzFdKz0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMuZG93bjsgfTtcblxuXG5cbi8vIGNyZWF0ZSBhIGNhbWVyYSBvYmplY3RcbmxldCB2aWV3cG9ydCA9IHtcbiAgICAvLyBjYW52YXMgd2lkdGggYW5kIGhlaWdodFxuICAgIHNjcmVlbjogWzAsMF0sXG4gICAgLy8gdGlsZSBjb29yZGluYXRlcyBvZiB0aGUgdG9wLWxlZnQgYXJlYSBvZiB0aGUgbWFwXG4gICAgc3RhcnRUaWxlOiBbMCwwXSxcbiAgICAvLyB0aWxlIGNvb3JkaW5hdGVzIG9mIHRoZSBib3R0b20tcmlnaHQgYXJlYSBvZiB0aGUgbWFwXG4gICAgZW5kVGlsZTogWzAsMF0sXG4gICAgLy8gb2Zmc2V0IGluIHBpeGVsc1xuICAgIG9mZnNldDogWzAsMF0sXG4gICAgLy8gdXBkYXRlIGZ1bmN0aW9uLCB4IHkgaXMgb3VyIGNlbnRlciBhcmVhXG4gICAgdXBkYXRlOiBmdW5jdGlvbihvZmZzZXRYLCBvZmZzZXRZKSB7XG4gICAgICAgIC8vIG9mZnNldDogaGFsZiB0aGUgY2FudmFzIHdpZHRoIHx8IGhlaWdodCAocm91bmQgZG93biB0byB3aG9sZSBudW0pXG5cdFx0dGhpcy5vZmZzZXRbMF0gPSBNYXRoLmZsb29yKCh0aGlzLnNjcmVlblswXS8yKSAtIG9mZnNldFgpO1xuICAgICAgICB0aGlzLm9mZnNldFsxXSA9IE1hdGguZmxvb3IoKHRoaXMuc2NyZWVuWzFdLzIpIC0gb2Zmc2V0WSk7XG5cbiAgICAgICAgLy8gd2UgZmluZCB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIHRpbGVcbiAgICAgICAgbGV0IHRpbGUgPSBbIE1hdGguZmxvb3Iob2Zmc2V0WCAvIHRpbGVXaWR0aCksIE1hdGguZmxvb3Iob2Zmc2V0WSAvIHRpbGVIZWlnaHQpIF07XG4gICAgICAgIC8vICBjYWxjdWxhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCB0aWxlIG9uIHRoZSB4IGF4aXMgYnkgY2FsY3VsdGluZyB0aGUgbWF4aW11bSBudW1iZXIgb2YgdGlsZXMgdGhhdCBjYW4gZml0IGluIGhhbGYgb2YgdGhlIHNjcmVlbiB3aWR0aCwgYW5kIHRha2luZyB0aGF0IG51bWJlciBhd2F5IGZyb20gdGhlIGNlbnRyZSB0aWxlLlxuICAgICAgICAvLyAgcmVtb3ZlIGFuIGFkZGl0aW9uYWwgMSB0byBhbGxvdyBmb3IgdGlsZXMgdGhhdCBhcmUgbm90IGNvbXBsZXRlbHkgb24gdGhlIHNjcmVlbiwgYnV0IG9ubHkgcGFydGlhbGx5LlxuICAgICAgICB0aGlzLnN0YXJ0VGlsZVswXSA9IHRpbGVbMF0gLSAxIC0gTWF0aC5jZWlsKCh0aGlzLnNjcmVlblswXS8yKSAvIHRpbGVXaWR0aCk7XG5cdFx0dGhpcy5zdGFydFRpbGVbMV0gPSB0aWxlWzFdIC0gMSAtIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMV0vMikgLyB0aWxlSGVpZ2h0KTtcblxuICAgICAgICAvLyBjaGVjayB0byBtYWtlIHN1cmUgeCBvciB5IGlzIG5vdCBsZXNzIHRoZW4gMCAob3Vyc2lkZSB0aGUgYm91bmRzKVxuICAgICAgICBpZih0aGlzLnN0YXJ0VGlsZVswXSA8IDApIHsgdGhpcy5zdGFydFRpbGVbMF0gPSAwOyB9XG5cdFx0aWYodGhpcy5zdGFydFRpbGVbMV0gPCAwKSB7IHRoaXMuc3RhcnRUaWxlWzFdID0gMDsgfVxuXG4gICAgICAgIHRoaXMuZW5kVGlsZVswXSA9IHRpbGVbMF0gKyAxICsgTWF0aC5jZWlsKCh0aGlzLnNjcmVlblswXS8yKSAvIHRpbGVXaWR0aCk7XG5cdFx0dGhpcy5lbmRUaWxlWzFdID0gdGlsZVsxXSArIDEgKyBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzFdLzIpIC8gdGlsZUhlaWdodCk7XG5cblx0XHRpZih0aGlzLmVuZFRpbGVbMF0gPj0gbWFwV2lkdGgpIHsgdGhpcy5lbmRUaWxlWzBdID0gbWFwV2lkdGggLTE7IH1cblx0XHRpZih0aGlzLmVuZFRpbGVbMV0gPj0gbWFwSGVpZ2h0KSB7IHRoaXMuZW5kVGlsZVsxXSA9IG1hcEhlaWdodCAtIDE7IH1cbiAgICAgICAgfVxufTtcblxuXG4vLyByb29mdG9wXG5cbmxldCBtYXBUaWxlRGF0YSA9IG5ldyBUaWxlTWFwKCk7XG5sZXQgcm9vZkxpc3QgPSBbXG5cdHsgeDo1LCB5OjAsIHc6NCwgaDo1LCBkYXRhOiBbXG5cdFx0MTAsIDExLCAxMSwgMTIsXG4gICAgICAgIDEzLCAxNCwgMTQsIDE1LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTgsXG4gICAgICAgIDE2LCAxNywgMTYsIDE4XG5cdF19LFxuXHR7IHg6MTAsIHk6MCwgdzo2LCBoOjUsIGRhdGE6IFtcblx0XHQxMCwgMTEsIDExLCAxMSwgMTEsIDEyLFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCwgMTcsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCwgMTcsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCwgMTcsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCwgMTcsIDE4XG5cdF19LFxuXHR7IHg6OCwgeTo4LCB3OjQsIGg6NCwgZGF0YTogW1xuICAgICAgICAxMCwgMTEsIDExLCAxMixcbiAgICAgICAgMTMsIDE0LCAxNCwgMTUsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LFxuICAgICAgICAxNiwgMTcsIDE2LCAxOFxuXHRdfVxuXTtcblxuLy8gc3RvcmVzIGluZm9ybWF0aW9uIGZvciBlYWNoIG1hcCB0aWxlXG5mdW5jdGlvbiBUaWxlKHR4LCB0eSwgdHQpXG57XG4gICAgLy8gdHksIHR4ID0gdGhlIHBvc2l0aW9uIG9mIHRoZSB0aWxlIG9uIHRoZSBtYXBcblx0dGhpcy54XHRcdFx0PSB0eDtcblx0dGhpcy55XHRcdFx0PSB0eTtcblx0dGhpcy50eXBlXHRcdD0gdHQ7XG5cdHRoaXMucm9vZlx0XHQ9IG51bGw7XG4gICAgdGhpcy5yb29mVHlwZVx0PSAwO1xuICAgIC8vICBwb2ludGVyIHRvIGEgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIGEgY2hhcmFjdGVyIGhhcyBjb21wbGV0ZWQgbW92aW5nIG9uIHRvIHRoaXMgdGlsZVxuXHR0aGlzLmV2ZW50RW50ZXJcdD0gbnVsbDtcbn1cblxuLy8gc3RvcmVzIGFuZCBtYW5hZ2VzIG91ciBsb2FkZWQgbWFwIGRhdGFcbmZ1bmN0aW9uIFRpbGVNYXAoKVxue1xuXHR0aGlzLm1hcFx0PSBbXTtcblx0dGhpcy53XHRcdD0gMDtcblx0dGhpcy5oXHRcdD0gMDtcbn1cblxuVGlsZU1hcC5wcm90b3R5cGUuYnVpbGRNYXBGcm9tRGF0YSA9IGZ1bmN0aW9uKHRpbGVNYXBJZCwgdywgaClcbntcblx0dGhpcy53XHRcdD0gdztcbiAgICB0aGlzLmhcdFx0PSBoO1xuXG4gICAgaWYodGlsZU1hcElkLmxlbmd0aCE9KHcgKiBoKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XG4gICAgdGhpcy5tYXAubGVuZ3RoXHQ9IDA7XG4gICAgXHRmb3IobGV0IHkgPSAwOyB5IDwgaDsgeSsrKVxuXHR7XG5cdFx0Zm9yKGxldCB4ID0gMDsgeCA8IHc7IHgrKylcblx0XHR7XG5cdFx0XHR0aGlzLm1hcC5wdXNoKCBuZXcgVGlsZSh4LCB5LCB0aWxlTWFwSWRbKCh5KncpK3gpXSkgKTtcblx0XHR9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcblxuXG5UaWxlTWFwLnByb3RvdHlwZS5hZGRSb29mcyA9IGZ1bmN0aW9uKHJvb2ZzKVxue1xuXHRmb3IobGV0IGkgaW4gcm9vZnMpXG5cdHtcbiAgICAgICAgbGV0IHIgPSByb29mc1tpXTtcbiAgICAgICAgaWYoci54IDwgMCB8fCByLnkgPCAwIHx8IHIueCA+PSB0aGlzLncgfHwgci55ID49IHRoaXMuaCB8fFxuXHRcdFx0KHIueCtyLncpPnRoaXMudyB8fCAoci55K3IuaCk+dGhpcy5oIHx8XG5cdFx0XHRyLmRhdGEubGVuZ3RoIT0oci53KnIuaCkpXG5cdFx0e1xuXHRcdFx0Y29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IHIuaDsgeSsrKVxuXHRcdHtcblx0XHRcdGZvcihsZXQgeCA9IDA7IHggPCByLnc7IHgrKylcblx0XHRcdHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZUlkeCA9ICgoKHIueSArIHkpKnRoaXMudykrci54ICsgeCk7XG4gICAgICAgICAgICAgICAgdGhpcy5tYXBbdGlsZUlkeF0ucm9vZiA9IHI7XG5cdFx0XHRcdHRoaXMubWFwW3RpbGVJZHhdLnJvb2ZUeXBlID0gci5kYXRhWygoeSpyLncpK3gpXTtcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cblxuLy8gY29udmVydCB4LCB5IGludG8gaW5kZXggaW4gZ2FtZU1hcCBhcnJcbmZ1bmN0aW9uIHRvSW5kZXgoeCwgeSkge1xuXHRyZXR1cm4oKHkgKiBtYXBXaWR0aCkgKyB4KTtcbn1cblxuZnVuY3Rpb24gZ2V0RnJhbWUoc3ByaXRlLCBkdXJhdGlvbiwgdGltZSwgYW5pbWF0ZWQpXG57XG5cdGlmKCFhbmltYXRlZCkgeyByZXR1cm4gc3ByaXRlWzBdOyB9XG5cdHRpbWUgPSB0aW1lICUgZHVyYXRpb247XG5cblx0Zm9yKHggaW4gc3ByaXRlKVxuXHR7XG5cdFx0aWYoc3ByaXRlW3hdLmVuZD49dGltZSkgeyByZXR1cm4gc3ByaXRlW3hdOyB9XG5cdH1cbn1cblxuLy8gbG9vcCBzdGFydHMgd2hlbiBwYWdlIGRvbmUgbG9hZGluZ1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpLmdldENvbnRleHQoXCIyZFwiKTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAxMHB0IHNhbnMtc2VyaWZcIjtcbiAgICBcbiAgICAvLyBhZGQgZXZlbnRMaXN0ZW5lcnMgZm9yIHRoZSBrZXlkb3duYSBhbmQga2V5dXBcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZihlLmtleUNvZGU+PTM3ICYmIGUua2V5Q29kZTw9NDApIHsgaGVsZEtleXNbZS5rZXlDb2RlXSA9IHRydWU7IH1cblx0fSk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuXHRcdGlmKGUua2V5Q29kZT49MzcgJiYgZS5rZXlDb2RlPD00MCkgeyBoZWxkS2V5c1tlLmtleUNvZGVdID0gZmFsc2U7IH1cbiAgICB9KTtcblxuICAgIC8vIGNoZWNrcyB0aGUgQ2FudmFzIGRpbWVuc2lvbnMgYW5kIHN0b3JlcyBpdCBpbiB0aGUgdmlld3BvcnQgb2JqZWN0c1xuICAgIHZpZXdwb3J0LnNjcmVlbiA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpLndpZHRoLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpLmhlaWdodF07XG4gICAgICAgIFxuICAgIHRpbGVzZXQgPSBuZXcgSW1hZ2UoKTtcblx0dGlsZXNldC5vbmVycm9yID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0Y3R4ID0gbnVsbDtcblx0XHRhbGVydChcIkZhaWxlZCBsb2FkaW5nIHRpbGVzZXQuXCIpO1xuXHR9O1xuXHR0aWxlc2V0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkgeyB0aWxlc2V0TG9hZGVkID0gdHJ1ZTsgfTtcbiAgICB0aWxlc2V0LnNyYyA9IHRpbGVzZXRVUkw7XG4gICAgXG4gICAgbWFwVGlsZURhdGEuYnVpbGRNYXBGcm9tRGF0YShnYW1lTWFwLCBtYXBXaWR0aCwgbWFwSGVpZ2h0KTtcblx0bWFwVGlsZURhdGEuYWRkUm9vZnMocm9vZkxpc3QpO1xuXHRtYXBUaWxlRGF0YS5tYXBbKCgyKm1hcFdpZHRoKSsyKV0uZXZlbnRFbnRlciA9IGZ1bmN0aW9uKClcblx0eyBjb25zb2xlLmxvZyhcIkVudGVyZWQgdGlsZSAyLDJcIik7IH07XG59O1xuXG5cbi8vIG1haW4gZnVuY3Rpb25cbmZ1bmN0aW9uIGRyYXdHYW1lKClcbntcbiAgICBpZihjdHg9PW51bGwpIHsgcmV0dXJuOyB9XG4gICAgaWYoIXRpbGVzZXRMb2FkZWQpIHsgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTsgcmV0dXJuOyB9XG5cblx0bGV0IGN1cnJlbnRGcmFtZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGxldCB0aW1lRWxhcHNlZCA9IGN1cnJlbnRGcmFtZVRpbWUgLSBsYXN0RnJhbWVUaW1lO1xuICAgIFxuICAgIC8vIGZyYW1lY291bnQgXG5cdGxldCBzZWMgPSBNYXRoLmZsb29yKERhdGUubm93KCkvMTAwMCk7XG5cdGlmKHNlYyE9Y3VycmVudFNlY29uZCl7XG5cdFx0Y3VycmVudFNlY29uZCA9IHNlYztcblx0XHRmcmFtZXNMYXN0U2Vjb25kID0gZnJhbWVDb3VudDtcblx0XHRmcmFtZUNvdW50ID0gMTtcblx0fVxuXHRlbHNlIHsgZnJhbWVDb3VudCsrOyB9XG5cbiAgICAvLyBwbGF5ZXIgbW92ZW1lbnRcblx0aWYoIXBsYXllci5wcm9jZXNzTW92ZW1lbnQoY3VycmVudEZyYW1lVGltZSkpIHtcblx0XHRpZihoZWxkS2V5c1szOF0gJiYgcGxheWVyLmNhbk1vdmVVcCgpKVx0XHR7IHBsYXllci5tb3ZlVXAoY3VycmVudEZyYW1lVGltZSk7IH1cblx0XHRlbHNlIGlmKGhlbGRLZXlzWzQwXSAmJiBwbGF5ZXIuY2FuTW92ZURvd24oKSlcdHsgcGxheWVyLm1vdmVEb3duKGN1cnJlbnRGcmFtZVRpbWUpOyB9XG5cdFx0ZWxzZSBpZihoZWxkS2V5c1szN10gJiYgcGxheWVyLmNhbk1vdmVMZWZ0KCkpXHR7IHBsYXllci5tb3ZlTGVmdChjdXJyZW50RnJhbWVUaW1lKTsgfVxuXHRcdGVsc2UgaWYoaGVsZEtleXNbMzldICYmIHBsYXllci5jYW5Nb3ZlUmlnaHQoKSlcdHsgcGxheWVyLm1vdmVSaWdodChjdXJyZW50RnJhbWVUaW1lKTsgfVxuICAgIH1cblxuICAgIC8vIHNldCB0aGUgdmlld3BvcnQgY2VudHJlIHRvIHRoZSBwbGF5ZXIgdG9wL2xlZnQgcG9zaXRpb24gcGx1cyBoYWxmIHRoZSBwbGF5ZXJzIHdpZHRoL2hlaWdodC5cbiAgICAgICAgdmlld3BvcnQudXBkYXRlKHBsYXllci5wb3NpdGlvblswXSArIChwbGF5ZXIuZGltZW5zaW9uc1swXS8yKSxcbiAgICAgICAgICAgIHBsYXllci5wb3NpdGlvblsxXSArIChwbGF5ZXIuZGltZW5zaW9uc1sxXS8yKSk7XG5cblx0ICAgIGxldCBwbGF5ZXJSb29mMSA9IG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KFxuXHRcdHBsYXllci50aWxlRnJvbVswXSwgcGxheWVyLnRpbGVGcm9tWzFdKV0ucm9vZjtcblx0ICAgIGxldCBwbGF5ZXJSb29mMiA9IG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KFxuXHRcdHBsYXllci50aWxlVG9bMF0sIHBsYXllci50aWxlVG9bMV0pXS5yb29mO1xuXG4gICAgICAgIC8vIGVyYXNlIGFueXRoaW5nIG9uIHRoZSBDYW52YXMgZnJvbSB0aGUgbGFzdCBmcmFtZVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB2aWV3cG9ydC5zY3JlZW5bMF0sIHZpZXdwb3J0LnNjcmVlblsxXSk7XG4gICAgXG4gICAgLy8gbmVzdGVkIGxvb3BzOiB5IGFuZCB4XG5cdFx0Zm9yKGxldCB5ID0gdmlld3BvcnQuc3RhcnRUaWxlWzFdOyB5IDw9IHZpZXdwb3J0LmVuZFRpbGVbMV07ICsreSkge1xuXHRcdCAgICBmb3IobGV0IHggPSB2aWV3cG9ydC5zdGFydFRpbGVbMF07IHggPD0gdmlld3BvcnQuZW5kVGlsZVswXTsgKyt4KSB7XG4gICAgICAgICAgICAgICAgbGV0IHRpbGUgPSB0aWxlVHlwZXNbbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0udHlwZV07XG5cblx0XHRcdCAgICBjdHguZHJhd0ltYWdlKHRpbGVzZXQsXG5cdFx0XHRcdHRpbGUuc3ByaXRlWzBdLngsIHRpbGUuc3ByaXRlWzBdLnksIHRpbGUuc3ByaXRlWzBdLncsIHRpbGUuc3ByaXRlWzBdLmgsXG5cdFx0XHRcdHZpZXdwb3J0Lm9mZnNldFswXSArICh4ICogdGlsZVdpZHRoKSwgdmlld3BvcnQub2Zmc2V0WzFdICsgKHkgKiB0aWxlSGVpZ2h0KSxcbiAgICAgICAgICAgICAgICB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICBpZihtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5yb29mVHlwZSE9MCAmJlxuXHRcdFx0XHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5yb29mIT1wbGF5ZXJSb29mMSAmJlxuXHRcdFx0XHRtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5yb29mIT1wbGF5ZXJSb29mMilcblx0XHRcdHtcblx0XHRcdFx0dGlsZSA9IHRpbGVUeXBlc1ttYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS5yb29mVHlwZV07XG5cdFx0XHRcdHNwcml0ZSA9IGdldEZyYW1lKHRpbGUuc3ByaXRlLCB0aWxlLnNwcml0ZUR1cmF0aW9uLFxuXHRcdFx0XHRcdCB0aWxlLmFuaW1hdGVkKTtcblx0XHRcdFx0Y3R4LmRyYXdJbWFnZSh0aWxlc2V0LFxuXHRcdFx0XHRcdHNwcml0ZS54LCBzcHJpdGUueSwgc3ByaXRlLncsIHNwcml0ZS5oLFxuXHRcdFx0XHRcdHZpZXdwb3J0Lm9mZnNldFswXSArICh4KnRpbGVXaWR0aCksXG5cdFx0XHRcdFx0dmlld3BvcnQub2Zmc2V0WzFdICsgKHkqdGlsZUhlaWdodCksXG5cdFx0XHRcdFx0dGlsZVdpZHRoLCB0aWxlSGVpZ2h0KTtcblx0XHRcdH1cblx0XHR9XG4gICAgfVxuXG5cbiAgICBcbiAgICAvLyBkcmF3IHRoZSBwbGF5ZXJcbiAgICBsZXQgc3ByaXRlID0gcGxheWVyLnNwcml0ZXNbcGxheWVyLmRpcmVjdGlvbl07XG5cdGN0eC5kcmF3SW1hZ2UodGlsZXNldCxcblx0XHRzcHJpdGVbMF0ueCwgc3ByaXRlWzBdLnksIHNwcml0ZVswXS53LCBzcHJpdGVbMF0uaCxcblx0XHR2aWV3cG9ydC5vZmZzZXRbMF0gKyBwbGF5ZXIucG9zaXRpb25bMF0sIHZpZXdwb3J0Lm9mZnNldFsxXSArIHBsYXllci5wb3NpdGlvblsxXSxcblx0XHRwbGF5ZXIuZGltZW5zaW9uc1swXSwgcGxheWVyLmRpbWVuc2lvbnNbMV0pO1xuXG5cblx0bGFzdEZyYW1lVGltZSA9IGN1cnJlbnRGcmFtZVRpbWU7XG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9