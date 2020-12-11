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

var keysDown = {
  // 37: left
  37: false,
  // 38: up
  38: false,
  // 39: right
  39: false,
  // 40: down
  40: false // 32: space

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
var directions = {
  up: 0,
  right: 1,
  down: 2,
  left: 3
};
var tileset = null,
    tilesetURL = "src/images/tilesetestt.png",
    tilesetLoaded = false; // 创建一个角色 (miumiu)

var player = new Character(); // in class so we can add more char in future

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
} // place char in a specitic tile 


Character.prototype.placeAt = function (x, y) {
  this.tileFrom = [x, y];
  this.tileTo = [x, y]; // x and y position of the tile. update the tileFrom and tileTo properties to the new tile coordinates
  // calculates the pixel position of the characyer use below

  this.position = [tileWidth * x + (tileWidth - this.dimensions[0]) / 2, tileHeight * y + (tileHeight - this.dimensions[1]) / 2];
}; // calculations each frame to find position, pass in a time


Character.prototype.processMovement = function (t) {
  // if char tileTo == tileFrom char is not moving, so return false
  if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) {
    return false;
  } // if the amount of time passed since char began its current move >= the time for char to move 1 tile. we set position using placeAt function
  // aka: if char still moving


  if (t - this.timeMoved >= this.delayMove) {
    this.placeAt(this.tileTo[0], this.tileTo[1]);

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
      keysDown[e.keyCode] = true;
    }
  });
  window.addEventListener("keyup", function (e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      keysDown[e.keyCode] = false;
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
    if (keysDown[38] && player.canMoveUp()) {
      player.moveUp(currentFrameTime);
    } else if (keysDown[40] && player.canMoveDown()) {
      player.moveDown(currentFrameTime);
    } else if (keysDown[37] && player.canMoveLeft()) {
      player.moveLeft(currentFrameTime);
    } else if (keysDown[39] && player.canMoveRight()) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJrZXlzRG93biIsImZsb29yVHlwZXMiLCJzb2xpZCIsInBhdGgiLCJ3YXRlciIsInRpbGVUeXBlcyIsImNvbG91ciIsImZsb29yIiwic3ByaXRlIiwieCIsInkiLCJ3IiwiaCIsIml0ZW1UeXBlcyIsIm5hbWUiLCJtYXhTdGFjayIsIm9mZnNldCIsImRpcmVjdGlvbnMiLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJ0aWxlc2V0IiwidGlsZXNldFVSTCIsInRpbGVzZXRMb2FkZWQiLCJwbGF5ZXIiLCJDaGFyYWN0ZXIiLCJ0aWxlRnJvbSIsInRpbGVUbyIsInRpbWVNb3ZlZCIsImRlbGF5TW92ZSIsImRpbWVuc2lvbnMiLCJwb3NpdGlvbiIsImRpcmVjdGlvbiIsInNwcml0ZXMiLCJwcm90b3R5cGUiLCJwbGFjZUF0IiwicHJvY2Vzc01vdmVtZW50IiwidCIsIm1hcFRpbGVEYXRhIiwibWFwIiwidG9JbmRleCIsImV2ZW50RW50ZXIiLCJkaWZmZXJlbmNlIiwiTWF0aCIsInJvdW5kIiwiY2FuTW92ZVRvIiwiY2FuTW92ZVVwIiwiY2FuTW92ZURvd24iLCJjYW5Nb3ZlTGVmdCIsImNhbk1vdmVSaWdodCIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwibW92ZVVwIiwibW92ZURvd24iLCJ2aWV3cG9ydCIsInNjcmVlbiIsInN0YXJ0VGlsZSIsImVuZFRpbGUiLCJ1cGRhdGUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInRpbGUiLCJjZWlsIiwiVGlsZU1hcCIsInJvb2ZMaXN0IiwiZGF0YSIsIlRpbGUiLCJ0eCIsInR5IiwidHQiLCJ0eXBlIiwicm9vZiIsInJvb2ZUeXBlIiwiYnVpbGRNYXBGcm9tRGF0YSIsInRpbGVNYXBJZCIsImxlbmd0aCIsInB1c2giLCJhZGRSb29mcyIsInJvb2ZzIiwiaSIsInIiLCJ0aWxlSWR4IiwiZ2V0RnJhbWUiLCJkdXJhdGlvbiIsInRpbWUiLCJhbmltYXRlZCIsImVuZCIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhd0dhbWUiLCJmb250IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIiwid2lkdGgiLCJoZWlnaHQiLCJJbWFnZSIsIm9uZXJyb3IiLCJhbGVydCIsInNyYyIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50RnJhbWVUaW1lIiwiRGF0ZSIsIm5vdyIsInRpbWVFbGFwc2VkIiwic2VjIiwicGxheWVyUm9vZjEiLCJwbGF5ZXJSb29mMiIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd0ltYWdlIiwic3ByaXRlRHVyYXRpb24iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7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TSxDQUFDUSxTQUF0QixDQUFiO0FBQ0gzQyxLQUFHLENBQUM4SCxTQUFKLENBQWM5RixPQUFkLEVBQ0NkLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUMsQ0FEWCxFQUNjRCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVFLENBRHhCLEVBQzJCRixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVHLENBRHJDLEVBQ3dDSCxNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVJLENBRGxELEVBRUMyQyxRQUFRLENBQUN2QyxNQUFULENBQWdCLENBQWhCLElBQXFCUyxNQUFNLENBQUNPLFFBQVAsQ0FBZ0IsQ0FBaEIsQ0FGdEIsRUFFMEN1QixRQUFRLENBQUN2QyxNQUFULENBQWdCLENBQWhCLElBQXFCUyxNQUFNLENBQUNPLFFBQVAsQ0FBZ0IsQ0FBaEIsQ0FGL0QsRUFHQ1AsTUFBTSxDQUFDTSxVQUFQLENBQWtCLENBQWxCLENBSEQsRUFHdUJOLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixDQUFsQixDQUh2QjtBQU1BaEMsZUFBYSxHQUFHNEcsZ0JBQWhCO0FBQ0FkLHVCQUFxQixDQUFDQyxRQUFELENBQXJCO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNsY0QsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL21hcFwiO1xuXG5cblxuIiwiLy8gaSB3YW50IGEgY2FtZXJhIGZvbGxvd2luZyB0aGUgY2hhciBhcm91bmQgdGhlIG1hcFxuXG5cbmxldCBjdHggPSBudWxsO1xuXG4vLyBjcmVhdGUgYSBtYXAgd2l0aCAxMCoxMCB0aWxlXG5sZXQgZ2FtZU1hcCA9IFtcblx0MCwgMCwgMCwgMCwgMCwgMywgMywgMywgMywgMSwgMywgMywgMywgMywgMywgMywgMCwgMCwgMCwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMywgMiwgMiwgMywgMSwgMywgMiwgMiwgMiwgMiwgMywgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMywgMiwgMiwgMywgMSwgMywgMiwgMiwgMiwgMiwgMywgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMywgMiwgMiwgMywgMSwgMywgMiwgMiwgMiwgMiwgMywgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMywgMiwgMywgMywgMSwgMywgMywgMywgMywgMiwgMywgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMywgMywgMywgMywgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMywgMiwgMiwgMywgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcbiAgICAwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAzLCAyLCAyLCAzLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAzLCAyLCAzLCAzLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LFxuXHQ0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0LCA0XG5dO1xuLy8g5q+P5Liq5Zyw56CW5aSa5bCRcGl4ZWxcbmxldCB0aWxlV2lkdGggPSA0MDtcbmxldCB0aWxlSGVpZ2h0ID0gNDA7XG4vLyDlnLDlm77lpKflsI/lsLHmmK8xMCoxMFxubGV0IG1hcFdpZHRoID0gMjA7XG5sZXQgbWFwSGVpZ2h0ID0gMjA7XG4vLyBmcmFtZXJhdGVcbmxldCBjdXJyZW50U2Vjb25kID0gMDtcbmxldCBmcmFtZUNvdW50ID0gMDtcbmxldCBmcmFtZXNMYXN0U2Vjb25kID0gMDtcbmxldCBsYXN0RnJhbWVUaW1lID0gMDtcblxuXG4vLyBrZXlDb2RlIDogYm9vbGVhbiB0byB0ZWxsIHVzIHdoaWNoIG9uZSBhcmUgcHJlc3NlZFxubGV0IGtleXNEb3duID0ge1xuICAgIC8vIDM3OiBsZWZ0XG4gICAgMzcgOiBmYWxzZSxcbiAgICAvLyAzODogdXBcbiAgICAzOCA6IGZhbHNlLFxuICAgIC8vIDM5OiByaWdodFxuICAgIDM5IDogZmFsc2UsXG4gICAgLy8gNDA6IGRvd25cbiAgICA0MCA6IGZhbHNlXG4gICAgLy8gMzI6IHNwYWNlXG59O1xuXG5cbi8vIOWcsOadv+enjeexu1xubGV0IGZsb29yVHlwZXMgPSB7XG4gICAgc29saWQ6IDAsXG4gICAgcGF0aDogMSxcbiAgICB3YXRlcjogMlxufTtcblxuLy8g5pWw5a2X77yIZ2FtZU1hcO+8ieWvueW6lOS4iuminOiJsuWSjOWcsOadv+enjeexu1xuLy8gMDrlopnlo4EgMTrojYnlnLAgMjrpmYblnLAgMzrmiL/lrZAgNDog5rC0XG5sZXQgdGlsZVR5cGVzID0ge1xuXHQwIDogeyBjb2xvdXI6IFwiIzc5M2Q0Y1wiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDowLHk6MCx3OjQwLGg6NDB9XSB9LFxuXHQxIDogeyBjb2xvdXI6IFwiIzZkZjdiMVwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjQwLHk6MCx3OjQwLGg6NDB9XSB9LFxuXHQyIDogeyBjb2xvdXI6IFwiI2M5NzQ2MVwiLCBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLCBzcHJpdGU6W3t4OjgwLHk6MCx3OjQwLGg6NDB9XVx0fSxcblx0MyA6IHsgY29sb3VyOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MTIwLHk6MCx3OjQwLGg6NDB9XSB9LFxuICAgIDQgOiB7IGNvbG91cjogXCIjMDA4ZGYwXCIsIGZsb29yOiBmbG9vclR5cGVzLndhdGVyLCBzcHJpdGU6W3t4OjE2MCx5OjAsdzo0MCxoOjQwfV0gfSxcbiAgICAxMCA6IHsgY29sb3VyOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI0MCx5OjQwLHc6NDAsaDo0MH1dfSxcbiAgICAxMSA6IHsgY29sb3VyOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjQwLHc6NDAsaDo0MH1dfSxcbiAgICAxMiA6IHsgY29sb3VyOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjQwLHc6NDAsaDo0MH1dfSxcbiAgICAxMyA6IHsgY29sb3VyOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI0MCx5OjgwLHc6NDAsaDo0MH1dfSxcbiAgICAxNCA6IHsgY29sb3VyOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI4MCx5OjgwLHc6NDAsaDo0MH1dfSxcbiAgICAxNSA6IHsgY29sb3VyOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjMyMCx5OjgwLHc6NDAsaDo0MH1dfSxcbiAgICAxNiA6IHsgY29sb3VyOlwiI2NjYWEwMFwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjI0MCx5OjEyMCx3OjQwLGg6NDB9XX0sXG4gICAgMTcgOiB7IGNvbG91cjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoyODAseToxMjAsdzo0MCxoOjQwfV19LFxuICAgIDE4IDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MzIwLHk6MTIwLHc6NDAsaDo0MH1dfVxufTtcblxuLy8g54mp5ZOBXG5sZXQgaXRlbVR5cGVzID0ge1xuICAgIDEgOiB7XG5cdFx0bmFtZSA6IFwiY29jb251dFwiLFxuXHRcdG1heFN0YWNrIDogNSxcblx0XHRzcHJpdGUgOiBbe3g6MjQwLHk6MCx3OjQwLGg6NDB9XSxcblx0XHRvZmZzZXQgOiBbMCwwXVxuICAgIH0sXG4gICAgMiA6IHtcblx0XHRuYW1lIDogXCJzdHJhd2JlcnJ5XCIsXG5cdFx0bWF4U3RhY2sgOiA1LFxuXHRcdHNwcml0ZSA6IFt7eDoyODAseTowLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdXG5cdH1cbn07XG5cbmxldCBkaXJlY3Rpb25zID0ge1xuXHR1cFx0OiAwLFxuXHRyaWdodDogMSxcblx0ZG93bjogMixcblx0bGVmdDogM1xufTtcblxubGV0IHRpbGVzZXQgPSBudWxsLCB0aWxlc2V0VVJMID0gXCJzcmMvaW1hZ2VzL3RpbGVzZXRlc3R0LnBuZ1wiLCB0aWxlc2V0TG9hZGVkID0gZmFsc2U7XG5cblxuXG4vLyDliJvlu7rkuIDkuKrop5LoibIgKG1pdW1pdSlcbmxldCBwbGF5ZXIgPSBuZXcgQ2hhcmFjdGVyKCk7XG4vLyBpbiBjbGFzcyBzbyB3ZSBjYW4gYWRkIG1vcmUgY2hhciBpbiBmdXR1cmVcbmZ1bmN0aW9uIENoYXJhY3RlcigpIHtcblx0dGhpcy50aWxlRnJvbVx0PSBbMSwxXTtcbiAgICB0aGlzLnRpbGVUb1x0XHQ9IFsxMCwxMF07XG4gICAgLy8gdGltZSBpbiBtaWxsc2Vjb25kc1xuICAgIHRoaXMudGltZU1vdmVkXHQ9IDA7XG4gICAgdGhpcy5kZWxheU1vdmVcdD0gNzAwO1xuXHR0aGlzLmRpbWVuc2lvbnNcdD0gWzQwLDQwXTtcbiAgICB0aGlzLnBvc2l0aW9uXHQ9IFs0NSw0NV07XG4gICAgXG4gICAgdGhpcy5kaXJlY3Rpb25cdD0gZGlyZWN0aW9ucy51cDtcblx0dGhpcy5zcHJpdGVzID0ge307XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLnVwXVx0XHQ9IFt7eDowLHk6MTIwLHc6MzAsaDozMH1dO1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy5yaWdodF1cdD0gW3t4OjAseToxNTAsdzozMCxoOjMwfV07XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLmRvd25dXHQ9IFt7eDowLHk6MTgwLHc6MzAsaDozMH1dO1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy5sZWZ0XVx0PSBbe3g6MCx5OjIxMCx3OjMwLGg6MzB9XTtcbn1cblxuXG4vLyBwbGFjZSBjaGFyIGluIGEgc3BlY2l0aWMgdGlsZSBcbkNoYXJhY3Rlci5wcm90b3R5cGUucGxhY2VBdCA9IGZ1bmN0aW9uKHgsIHkpIHtcblx0dGhpcy50aWxlRnJvbVx0PSBbeCx5XTtcbiAgICB0aGlzLnRpbGVUb1x0XHQ9IFt4LHldO1xuICAgIC8vIHggYW5kIHkgcG9zaXRpb24gb2YgdGhlIHRpbGUuIHVwZGF0ZSB0aGUgdGlsZUZyb20gYW5kIHRpbGVUbyBwcm9wZXJ0aWVzIHRvIHRoZSBuZXcgdGlsZSBjb29yZGluYXRlc1xuICAgIC8vIGNhbGN1bGF0ZXMgdGhlIHBpeGVsIHBvc2l0aW9uIG9mIHRoZSBjaGFyYWN5ZXIgdXNlIGJlbG93XG5cdHRoaXMucG9zaXRpb25cdD0gWygoIHRpbGVXaWR0aCAqIHggKSsoICh0aWxlV2lkdGggLSB0aGlzLmRpbWVuc2lvbnNbMF0pIC8gMiApKSxcblx0XHQoKCB0aWxlSGVpZ2h0ICogeSApKyggKHRpbGVIZWlnaHQgLSB0aGlzLmRpbWVuc2lvbnNbMV0pIC8gMiApKV07XG59O1xuXG4vLyBjYWxjdWxhdGlvbnMgZWFjaCBmcmFtZSB0byBmaW5kIHBvc2l0aW9uLCBwYXNzIGluIGEgdGltZVxuQ2hhcmFjdGVyLnByb3RvdHlwZS5wcm9jZXNzTW92ZW1lbnQgPSBmdW5jdGlvbih0KSB7XG4gICAgLy8gaWYgY2hhciB0aWxlVG8gPT0gdGlsZUZyb20gY2hhciBpcyBub3QgbW92aW5nLCBzbyByZXR1cm4gZmFsc2Vcblx0aWYoIHRoaXMudGlsZUZyb21bMF0gPT0gdGhpcy50aWxlVG9bMF0gJiYgdGhpcy50aWxlRnJvbVsxXSA9PSB0aGlzLnRpbGVUb1sxXSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAvLyBpZiB0aGUgYW1vdW50IG9mIHRpbWUgcGFzc2VkIHNpbmNlIGNoYXIgYmVnYW4gaXRzIGN1cnJlbnQgbW92ZSA+PSB0aGUgdGltZSBmb3IgY2hhciB0byBtb3ZlIDEgdGlsZS4gd2Ugc2V0IHBvc2l0aW9uIHVzaW5nIHBsYWNlQXQgZnVuY3Rpb25cbiAgICAvLyBha2E6IGlmIGNoYXIgc3RpbGwgbW92aW5nXG5cdGlmKCh0IC0gdGhpcy50aW1lTW92ZWQpID49IHRoaXMuZGVsYXlNb3ZlKSB7XG4gICAgICAgIHRoaXMucGxhY2VBdCh0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pO1xuICAgICAgICBpZihtYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pXS5ldmVudEVudGVyIT1udWxsKVxuXHRcdHtcblx0XHRcdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSldLmV2ZW50RW50ZXIodGhpcyk7XG4gICAgICAgIH1cblx0fSBlbHNlIHtcbiAgICAgICAgLy8gY3VycmVudCBwb3NpdGlvbiBvbiBjYW52YXNcblx0XHR0aGlzLnBvc2l0aW9uWzBdID0gKHRoaXMudGlsZUZyb21bMF0gKiB0aWxlV2lkdGgpICsgKCh0aWxlV2lkdGgtdGhpcy5kaW1lbnNpb25zWzBdKS8yKTtcblx0XHR0aGlzLnBvc2l0aW9uWzFdID0gKHRoaXMudGlsZUZyb21bMV0gKiB0aWxlSGVpZ2h0KSArICgodGlsZUhlaWdodC10aGlzLmRpbWVuc2lvbnNbMV0pLzIpO1xuXG4gICAgICAgIC8vIGlmIGNoYXIgaXMgbW92aW5nIG9uIHggY29vcmRpbmF0ZSwgY2FsY3VsYXRlIHBpeGVsc1xuXHRcdGlmKHRoaXMudGlsZVRvWzBdICE9IHRoaXMudGlsZUZyb21bMF0pIHtcbiAgICAgICAgICAgIC8vIGRpZmZlcmVuY2UgPSBkaXN0YW5jZSBtb3ZlZFxuICAgICAgICAgICAgLy8gZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGRlc3RpbmF0aW9uIHRpbGUgKHRpbGVUbykgaXMgbGVmdCAob3IgYWJvdmUpLCBvciByaWdodCAob3IgYmVsb3cpIHRoZSB0aWxlIHdlIGFyZSBtb3ZpbmcgZnJvbSAodGlsZUZyb20pLCB3ZSBzdWJ0cmFjdCBvciBhZGQgdGhpcyBhbW91bnQgdG8gdGhlIENoYXJhY3RlcnMgcG9zaXRpb24uIFxuXHRcdFx0bGV0IGRpZmZlcmVuY2UgPSAodGlsZVdpZHRoIC8gdGhpcy5kZWxheU1vdmUpICogKHQgLSB0aGlzLnRpbWVNb3ZlZCk7XG5cdFx0XHR0aGlzLnBvc2l0aW9uWzBdKz0gKHRoaXMudGlsZVRvWzBdIDwgdGhpcy50aWxlRnJvbVswXSA/IDAgLSBkaWZmZXJlbmNlIDogZGlmZmVyZW5jZSk7XG5cdFx0fVxuXHQgICAgaWYodGhpcy50aWxlVG9bMV0gIT0gdGhpcy50aWxlRnJvbVsxXSkge1xuXHRcdFx0bGV0IGRpZmZlcmVuY2UgPSAodGlsZUhlaWdodCAvIHRoaXMuZGVsYXlNb3ZlKSAqICh0LXRoaXMudGltZU1vdmVkKTtcblx0XHRcdHRoaXMucG9zaXRpb25bMV0rPSAodGhpcy50aWxlVG9bMV08dGhpcy50aWxlRnJvbVsxXSA/IDAgLSBkaWZmZXJlbmNlIDogZGlmZmVyZW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcm91bmQgeCAmIHkgdG8gd2hvbGUgbnVtYmVyXG5cdFx0dGhpcy5wb3NpdGlvblswXSA9IE1hdGgucm91bmQodGhpcy5wb3NpdGlvblswXSk7XG5cdFx0dGhpcy5wb3NpdGlvblsxXSA9IE1hdGgucm91bmQodGhpcy5wb3NpdGlvblsxXSk7XG4gICAgfVxuICAgIC8vIHRydWUgPSBjaGFyIGlzIGN1cnJlbnRseSBtb3Zpbmdcblx0cmV0dXJuIHRydWU7XG59XG5cblxuLy8gaWYgY2hhciBjYW4gbW92ZSBpbiBhIHNwZWNpZmljIGRpcmVjXG5DaGFyYWN0ZXIucHJvdG90eXBlLmNhbk1vdmVUbyA9IGZ1bmN0aW9uKHgsIHkpXG57XG4gICAgLy8gaWYgeCBhbmQgeSBpcyBpbiBtYXAgYm91bmRcbiAgICBpZih4IDwgMCB8fCB4ID49IG1hcFdpZHRoIHx8IHkgPCAwIHx8IHkgPj0gbWFwSGVpZ2h0KSB7IHJldHVybiBmYWxzZTsgfVxuICAgIC8vIGlmIHRoZSB0aWxlIGlzIHBhdGggdGlsZSAob25seSBtb3ZlIGlmIGl0cyBhIHBhdGgpXG5cdFx0aWYodGlsZVR5cGVzW2dhbWVNYXBbdG9JbmRleCh4LHkpXV0uZmxvb3IhPWZsb29yVHlwZXMucGF0aCkgeyByZXR1cm4gZmFsc2U7IH1cblx0cmV0dXJuIHRydWU7XG59O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5jYW5Nb3ZlVXAgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY2FuTW92ZVRvKHRoaXMudGlsZUZyb21bMF0sIHRoaXMudGlsZUZyb21bMV0tMSk7IH07XG5DaGFyYWN0ZXIucHJvdG90eXBlLmNhbk1vdmVEb3duID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNhbk1vdmVUbyh0aGlzLnRpbGVGcm9tWzBdLCB0aGlzLnRpbGVGcm9tWzFdKzEpOyB9O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5jYW5Nb3ZlTGVmdCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jYW5Nb3ZlVG8odGhpcy50aWxlRnJvbVswXS0xLCB0aGlzLnRpbGVGcm9tWzFdKTsgfTtcbkNoYXJhY3Rlci5wcm90b3R5cGUuY2FuTW92ZVJpZ2h0ID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNhbk1vdmVUbyh0aGlzLnRpbGVGcm9tWzBdKzEsIHRoaXMudGlsZUZyb21bMV0pOyB9O1xuXG5DaGFyYWN0ZXIucHJvdG90eXBlLm1vdmVMZWZ0ID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1swXS09IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLmxlZnQ7IH07XG5DaGFyYWN0ZXIucHJvdG90eXBlLm1vdmVSaWdodCA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMF0rPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5yaWdodDsgfTtcbkNoYXJhY3Rlci5wcm90b3R5cGUubW92ZVVwID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1sxXS09IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLnVwOyB9O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5tb3ZlRG93biA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMV0rPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5kb3duOyB9O1xuXG5cblxuLy8gY3JlYXRlIGEgY2FtZXJhIG9iamVjdFxubGV0IHZpZXdwb3J0ID0ge1xuICAgIC8vIGNhbnZhcyB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgc2NyZWVuOiBbMCwwXSxcbiAgICAvLyB0aWxlIGNvb3JkaW5hdGVzIG9mIHRoZSB0b3AtbGVmdCBhcmVhIG9mIHRoZSBtYXBcbiAgICBzdGFydFRpbGU6IFswLDBdLFxuICAgIC8vIHRpbGUgY29vcmRpbmF0ZXMgb2YgdGhlIGJvdHRvbS1yaWdodCBhcmVhIG9mIHRoZSBtYXBcbiAgICBlbmRUaWxlOiBbMCwwXSxcbiAgICAvLyBvZmZzZXQgaW4gcGl4ZWxzXG4gICAgb2Zmc2V0OiBbMCwwXSxcbiAgICAvLyB1cGRhdGUgZnVuY3Rpb24sIHggeSBpcyBvdXIgY2VudGVyIGFyZWFcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKG9mZnNldFgsIG9mZnNldFkpIHtcbiAgICAgICAgLy8gb2Zmc2V0OiBoYWxmIHRoZSBjYW52YXMgd2lkdGggfHwgaGVpZ2h0IChyb3VuZCBkb3duIHRvIHdob2xlIG51bSlcblx0XHR0aGlzLm9mZnNldFswXSA9IE1hdGguZmxvb3IoKHRoaXMuc2NyZWVuWzBdLzIpIC0gb2Zmc2V0WCk7XG4gICAgICAgIHRoaXMub2Zmc2V0WzFdID0gTWF0aC5mbG9vcigodGhpcy5zY3JlZW5bMV0vMikgLSBvZmZzZXRZKTtcblxuICAgICAgICAvLyB3ZSBmaW5kIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgdGlsZVxuICAgICAgICBsZXQgdGlsZSA9IFsgTWF0aC5mbG9vcihvZmZzZXRYIC8gdGlsZVdpZHRoKSwgTWF0aC5mbG9vcihvZmZzZXRZIC8gdGlsZUhlaWdodCkgXTtcbiAgICAgICAgLy8gIGNhbGN1bGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IHRpbGUgb24gdGhlIHggYXhpcyBieSBjYWxjdWx0aW5nIHRoZSBtYXhpbXVtIG51bWJlciBvZiB0aWxlcyB0aGF0IGNhbiBmaXQgaW4gaGFsZiBvZiB0aGUgc2NyZWVuIHdpZHRoLCBhbmQgdGFraW5nIHRoYXQgbnVtYmVyIGF3YXkgZnJvbSB0aGUgY2VudHJlIHRpbGUuXG4gICAgICAgIC8vICByZW1vdmUgYW4gYWRkaXRpb25hbCAxIHRvIGFsbG93IGZvciB0aWxlcyB0aGF0IGFyZSBub3QgY29tcGxldGVseSBvbiB0aGUgc2NyZWVuLCBidXQgb25seSBwYXJ0aWFsbHkuXG4gICAgICAgIHRoaXMuc3RhcnRUaWxlWzBdID0gdGlsZVswXSAtIDEgLSBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzBdLzIpIC8gdGlsZVdpZHRoKTtcblx0XHR0aGlzLnN0YXJ0VGlsZVsxXSA9IHRpbGVbMV0gLSAxIC0gTWF0aC5jZWlsKCh0aGlzLnNjcmVlblsxXS8yKSAvIHRpbGVIZWlnaHQpO1xuXG4gICAgICAgIC8vIGNoZWNrIHRvIG1ha2Ugc3VyZSB4IG9yIHkgaXMgbm90IGxlc3MgdGhlbiAwIChvdXJzaWRlIHRoZSBib3VuZHMpXG4gICAgICAgIGlmKHRoaXMuc3RhcnRUaWxlWzBdIDwgMCkgeyB0aGlzLnN0YXJ0VGlsZVswXSA9IDA7IH1cblx0XHRpZih0aGlzLnN0YXJ0VGlsZVsxXSA8IDApIHsgdGhpcy5zdGFydFRpbGVbMV0gPSAwOyB9XG5cbiAgICAgICAgdGhpcy5lbmRUaWxlWzBdID0gdGlsZVswXSArIDEgKyBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzBdLzIpIC8gdGlsZVdpZHRoKTtcblx0XHR0aGlzLmVuZFRpbGVbMV0gPSB0aWxlWzFdICsgMSArIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMV0vMikgLyB0aWxlSGVpZ2h0KTtcblxuXHRcdGlmKHRoaXMuZW5kVGlsZVswXSA+PSBtYXBXaWR0aCkgeyB0aGlzLmVuZFRpbGVbMF0gPSBtYXBXaWR0aCAtMTsgfVxuXHRcdGlmKHRoaXMuZW5kVGlsZVsxXSA+PSBtYXBIZWlnaHQpIHsgdGhpcy5lbmRUaWxlWzFdID0gbWFwSGVpZ2h0IC0gMTsgfVxuICAgICAgICB9XG59O1xuXG5cbi8vIHJvb2Z0b3BcblxubGV0IG1hcFRpbGVEYXRhID0gbmV3IFRpbGVNYXAoKTtcbmxldCByb29mTGlzdCA9IFtcblx0eyB4OjUsIHk6MCwgdzo0LCBoOjUsIGRhdGE6IFtcblx0XHQxMCwgMTEsIDExLCAxMixcbiAgICAgICAgMTMsIDE0LCAxNCwgMTUsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LFxuICAgICAgICAxNiwgMTgsIDE2LCAxOCxcbiAgICAgICAgMTYsIDE3LCAxNiwgMThcblx0XX0sXG5cdHsgeDoxMCwgeTowLCB3OjYsIGg6NSwgZGF0YTogW1xuXHRcdDEwLCAxMSwgMTEsIDExLCAxMSwgMTIsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LCAxNywgMTgsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LCAxNywgMTgsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LCAxNywgMTgsXG4gICAgICAgIDE2LCAxOCwgMTYsIDE4LCAxNywgMThcblx0XX0sXG5cdHsgeDo4LCB5OjgsIHc6NCwgaDo0LCBkYXRhOiBbXG4gICAgICAgIDEwLCAxMSwgMTEsIDEyLFxuICAgICAgICAxMywgMTQsIDE0LCAxNSxcbiAgICAgICAgMTYsIDE4LCAxNiwgMTgsXG4gICAgICAgIDE2LCAxNywgMTYsIDE4XG5cdF19XG5dO1xuXG4vLyBzdG9yZXMgaW5mb3JtYXRpb24gZm9yIGVhY2ggbWFwIHRpbGVcbmZ1bmN0aW9uIFRpbGUodHgsIHR5LCB0dClcbntcbiAgICAvLyB0eSwgdHggPSB0aGUgcG9zaXRpb24gb2YgdGhlIHRpbGUgb24gdGhlIG1hcFxuXHR0aGlzLnhcdFx0XHQ9IHR4O1xuXHR0aGlzLnlcdFx0XHQ9IHR5O1xuXHR0aGlzLnR5cGVcdFx0PSB0dDtcblx0dGhpcy5yb29mXHRcdD0gbnVsbDtcbiAgICB0aGlzLnJvb2ZUeXBlXHQ9IDA7XG4gICAgLy8gIHBvaW50ZXIgdG8gYSBmdW5jdGlvbiB0byBleGVjdXRlIHdoZW4gYSBjaGFyYWN0ZXIgaGFzIGNvbXBsZXRlZCBtb3Zpbmcgb24gdG8gdGhpcyB0aWxlXG5cdHRoaXMuZXZlbnRFbnRlclx0PSBudWxsO1xufVxuXG4vLyBzdG9yZXMgYW5kIG1hbmFnZXMgb3VyIGxvYWRlZCBtYXAgZGF0YVxuZnVuY3Rpb24gVGlsZU1hcCgpXG57XG5cdHRoaXMubWFwXHQ9IFtdO1xuXHR0aGlzLndcdFx0PSAwO1xuXHR0aGlzLmhcdFx0PSAwO1xufVxuXG5UaWxlTWFwLnByb3RvdHlwZS5idWlsZE1hcEZyb21EYXRhID0gZnVuY3Rpb24odGlsZU1hcElkLCB3LCBoKVxue1xuXHR0aGlzLndcdFx0PSB3O1xuICAgIHRoaXMuaFx0XHQ9IGg7XG5cbiAgICBpZih0aWxlTWFwSWQubGVuZ3RoIT0odyAqIGgpKSB7IHJldHVybiBmYWxzZTsgfVxuXHRcbiAgICB0aGlzLm1hcC5sZW5ndGhcdD0gMDtcbiAgICBcdGZvcihsZXQgeSA9IDA7IHkgPCBoOyB5KyspXG5cdHtcblx0XHRmb3IobGV0IHggPSAwOyB4IDwgdzsgeCsrKVxuXHRcdHtcblx0XHRcdHRoaXMubWFwLnB1c2goIG5ldyBUaWxlKHgsIHksIHRpbGVNYXBJZFsoKHkqdykreCldKSApO1xuXHRcdH1cbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG59O1xuXG5cblRpbGVNYXAucHJvdG90eXBlLmFkZFJvb2ZzID0gZnVuY3Rpb24ocm9vZnMpXG57XG5cdGZvcihsZXQgaSBpbiByb29mcylcblx0e1xuICAgICAgICBsZXQgciA9IHJvb2ZzW2ldO1xuICAgICAgICBpZihyLnggPCAwIHx8IHIueSA8IDAgfHwgci54ID49IHRoaXMudyB8fCByLnkgPj0gdGhpcy5oIHx8XG5cdFx0XHQoci54K3Iudyk+dGhpcy53IHx8IChyLnkrci5oKT50aGlzLmggfHxcblx0XHRcdHIuZGF0YS5sZW5ndGghPShyLncqci5oKSlcblx0XHR7XG5cdFx0XHRjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBmb3IobGV0IHkgPSAwOyB5IDwgci5oOyB5KyspXG5cdFx0e1xuXHRcdFx0Zm9yKGxldCB4ID0gMDsgeCA8IHIudzsgeCsrKVxuXHRcdFx0e1xuICAgICAgICAgICAgICAgIGxldCB0aWxlSWR4ID0gKCgoci55K3kpKnRoaXMudykrci54K3gpO1xuICAgICAgICAgICAgICAgIHRoaXMubWFwW3RpbGVJZHhdLnJvb2YgPSByO1xuXHRcdFx0XHR0aGlzLm1hcFt0aWxlSWR4XS5yb29mVHlwZSA9IHIuZGF0YVsoKHkqci53KSt4KV07XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG5cbi8vIGNvbnZlcnQgeCwgeSBpbnRvIGluZGV4IGluIGdhbWVNYXAgYXJyXG5mdW5jdGlvbiB0b0luZGV4KHgsIHkpIHtcblx0cmV0dXJuKCh5ICogbWFwV2lkdGgpICsgeCk7XG59XG5cbmZ1bmN0aW9uIGdldEZyYW1lKHNwcml0ZSwgZHVyYXRpb24sIHRpbWUsIGFuaW1hdGVkKVxue1xuXHRpZighYW5pbWF0ZWQpIHsgcmV0dXJuIHNwcml0ZVswXTsgfVxuXHR0aW1lID0gdGltZSAlIGR1cmF0aW9uO1xuXG5cdGZvcih4IGluIHNwcml0ZSlcblx0e1xuXHRcdGlmKHNwcml0ZVt4XS5lbmQ+PXRpbWUpIHsgcmV0dXJuIHNwcml0ZVt4XTsgfVxuXHR9XG59XG5cbi8vIGxvb3Agc3RhcnRzIHdoZW4gcGFnZSBkb25lIGxvYWRpbmdcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0Y3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKS5nZXRDb250ZXh0KFwiMmRcIik7XG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7XG4gICAgY3R4LmZvbnQgPSBcImJvbGQgMTBwdCBzYW5zLXNlcmlmXCI7XG4gICAgXG4gICAgLy8gYWRkIGV2ZW50TGlzdGVuZXJzIGZvciB0aGUga2V5ZG93bmEgYW5kIGtleXVwXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoZS5rZXlDb2RlPj0zNyAmJiBlLmtleUNvZGU8PTQwKSB7IGtleXNEb3duW2Uua2V5Q29kZV0gPSB0cnVlOyB9XG5cdH0pO1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZihlLmtleUNvZGU+PTM3ICYmIGUua2V5Q29kZTw9NDApIHsga2V5c0Rvd25bZS5rZXlDb2RlXSA9IGZhbHNlOyB9XG4gICAgfSk7XG5cbiAgICAvLyBjaGVja3MgdGhlIENhbnZhcyBkaW1lbnNpb25zIGFuZCBzdG9yZXMgaXQgaW4gdGhlIHZpZXdwb3J0IG9iamVjdHNcbiAgICB2aWV3cG9ydC5zY3JlZW4gPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKS53aWR0aCxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKS5oZWlnaHRdO1xuICAgICAgICBcbiAgICB0aWxlc2V0ID0gbmV3IEltYWdlKCk7XG5cdHRpbGVzZXQub25lcnJvciA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGN0eCA9IG51bGw7XG5cdFx0YWxlcnQoXCJGYWlsZWQgbG9hZGluZyB0aWxlc2V0LlwiKTtcblx0fTtcblx0dGlsZXNldC5vbmxvYWQgPSBmdW5jdGlvbigpIHsgdGlsZXNldExvYWRlZCA9IHRydWU7IH07XG4gICAgdGlsZXNldC5zcmMgPSB0aWxlc2V0VVJMO1xuICAgIFxuICAgIG1hcFRpbGVEYXRhLmJ1aWxkTWFwRnJvbURhdGEoZ2FtZU1hcCwgbWFwV2lkdGgsIG1hcEhlaWdodCk7XG5cdG1hcFRpbGVEYXRhLmFkZFJvb2ZzKHJvb2ZMaXN0KTtcblx0bWFwVGlsZURhdGEubWFwWygoMiptYXBXaWR0aCkrMildLmV2ZW50RW50ZXIgPSBmdW5jdGlvbigpXG5cdHsgY29uc29sZS5sb2coXCJFbnRlcmVkIHRpbGUgMiwyXCIpOyB9O1xufTtcblxuXG4vLyBtYWluIGZ1bmN0aW9uXG5mdW5jdGlvbiBkcmF3R2FtZSgpXG57XG4gICAgaWYoY3R4PT1udWxsKSB7IHJldHVybjsgfVxuICAgIGlmKCF0aWxlc2V0TG9hZGVkKSB7IHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7IHJldHVybjsgfVxuXG5cdGxldCBjdXJyZW50RnJhbWVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBsZXQgdGltZUVsYXBzZWQgPSBjdXJyZW50RnJhbWVUaW1lIC0gbGFzdEZyYW1lVGltZTtcbiAgICBcbiAgICAvLyBmcmFtZWNvdW50IFxuXHRsZXQgc2VjID0gTWF0aC5mbG9vcihEYXRlLm5vdygpLzEwMDApO1xuXHRpZihzZWMhPWN1cnJlbnRTZWNvbmQpe1xuXHRcdGN1cnJlbnRTZWNvbmQgPSBzZWM7XG5cdFx0ZnJhbWVzTGFzdFNlY29uZCA9IGZyYW1lQ291bnQ7XG5cdFx0ZnJhbWVDb3VudCA9IDE7XG5cdH1cblx0ZWxzZSB7IGZyYW1lQ291bnQrKzsgfVxuXG4gICAgLy8gcGxheWVyIG1vdmVtZW50XG5cdGlmKCFwbGF5ZXIucHJvY2Vzc01vdmVtZW50KGN1cnJlbnRGcmFtZVRpbWUpKSB7XG5cdFx0aWYoa2V5c0Rvd25bMzhdICYmIHBsYXllci5jYW5Nb3ZlVXAoKSlcdFx0eyBwbGF5ZXIubW92ZVVwKGN1cnJlbnRGcmFtZVRpbWUpOyB9XG5cdFx0ZWxzZSBpZihrZXlzRG93bls0MF0gJiYgcGxheWVyLmNhbk1vdmVEb3duKCkpXHR7IHBsYXllci5tb3ZlRG93bihjdXJyZW50RnJhbWVUaW1lKTsgfVxuXHRcdGVsc2UgaWYoa2V5c0Rvd25bMzddICYmIHBsYXllci5jYW5Nb3ZlTGVmdCgpKVx0eyBwbGF5ZXIubW92ZUxlZnQoY3VycmVudEZyYW1lVGltZSk7IH1cblx0XHRlbHNlIGlmKGtleXNEb3duWzM5XSAmJiBwbGF5ZXIuY2FuTW92ZVJpZ2h0KCkpXHR7IHBsYXllci5tb3ZlUmlnaHQoY3VycmVudEZyYW1lVGltZSk7IH1cbiAgICB9XG5cbiAgICAvLyBzZXQgdGhlIHZpZXdwb3J0IGNlbnRyZSB0byB0aGUgcGxheWVyIHRvcC9sZWZ0IHBvc2l0aW9uIHBsdXMgaGFsZiB0aGUgcGxheWVycyB3aWR0aC9oZWlnaHQuXG4gICAgICAgIHZpZXdwb3J0LnVwZGF0ZShwbGF5ZXIucG9zaXRpb25bMF0gKyAocGxheWVyLmRpbWVuc2lvbnNbMF0vMiksXG4gICAgICAgICAgICBwbGF5ZXIucG9zaXRpb25bMV0gKyAocGxheWVyLmRpbWVuc2lvbnNbMV0vMikpO1xuXG5cdCAgICBsZXQgcGxheWVyUm9vZjEgPSBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleChcblx0XHRwbGF5ZXIudGlsZUZyb21bMF0sIHBsYXllci50aWxlRnJvbVsxXSldLnJvb2Y7XG5cdCAgICBsZXQgcGxheWVyUm9vZjIgPSBtYXBUaWxlRGF0YS5tYXBbdG9JbmRleChcblx0XHRwbGF5ZXIudGlsZVRvWzBdLCBwbGF5ZXIudGlsZVRvWzFdKV0ucm9vZjtcblxuICAgICAgICAvLyBlcmFzZSBhbnl0aGluZyBvbiB0aGUgQ2FudmFzIGZyb20gdGhlIGxhc3QgZnJhbWVcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdmlld3BvcnQuc2NyZWVuWzBdLCB2aWV3cG9ydC5zY3JlZW5bMV0pO1xuICAgIFxuICAgIC8vIG5lc3RlZCBsb29wczogeSBhbmQgeFxuXHRcdGZvcihsZXQgeSA9IHZpZXdwb3J0LnN0YXJ0VGlsZVsxXTsgeSA8PSB2aWV3cG9ydC5lbmRUaWxlWzFdOyArK3kpIHtcblx0XHQgICAgZm9yKGxldCB4ID0gdmlld3BvcnQuc3RhcnRUaWxlWzBdOyB4IDw9IHZpZXdwb3J0LmVuZFRpbGVbMF07ICsreCkge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gdGlsZVR5cGVzW21hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLnR5cGVdO1xuXG5cdFx0XHQgICAgY3R4LmRyYXdJbWFnZSh0aWxlc2V0LFxuXHRcdFx0XHR0aWxlLnNwcml0ZVswXS54LCB0aWxlLnNwcml0ZVswXS55LCB0aWxlLnNwcml0ZVswXS53LCB0aWxlLnNwcml0ZVswXS5oLFxuXHRcdFx0XHR2aWV3cG9ydC5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCksIHZpZXdwb3J0Lm9mZnNldFsxXSArICh5ICogdGlsZUhlaWdodCksXG4gICAgICAgICAgICAgICAgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgaWYobWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0ucm9vZlR5cGUhPTAgJiZcblx0XHRcdFx0bWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0ucm9vZiE9cGxheWVyUm9vZjEgJiZcblx0XHRcdFx0bWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0ucm9vZiE9cGxheWVyUm9vZjIpXG5cdFx0XHR7XG5cdFx0XHRcdHRpbGUgPSB0aWxlVHlwZXNbbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoeCx5KV0ucm9vZlR5cGVdO1xuXHRcdFx0XHRzcHJpdGUgPSBnZXRGcmFtZSh0aWxlLnNwcml0ZSwgdGlsZS5zcHJpdGVEdXJhdGlvbixcblx0XHRcdFx0XHQgdGlsZS5hbmltYXRlZCk7XG5cdFx0XHRcdGN0eC5kcmF3SW1hZ2UodGlsZXNldCxcblx0XHRcdFx0XHRzcHJpdGUueCwgc3ByaXRlLnksIHNwcml0ZS53LCBzcHJpdGUuaCxcblx0XHRcdFx0XHR2aWV3cG9ydC5vZmZzZXRbMF0gKyAoeCp0aWxlV2lkdGgpLFxuXHRcdFx0XHRcdHZpZXdwb3J0Lm9mZnNldFsxXSArICh5KnRpbGVIZWlnaHQpLFxuXHRcdFx0XHRcdHRpbGVXaWR0aCwgdGlsZUhlaWdodCk7XG5cdFx0XHR9XG5cdFx0fVxuICAgIH1cblxuXG4gICAgXG4gICAgLy8gZHJhdyB0aGUgcGxheWVyXG4gICAgbGV0IHNwcml0ZSA9IHBsYXllci5zcHJpdGVzW3BsYXllci5kaXJlY3Rpb25dO1xuXHRjdHguZHJhd0ltYWdlKHRpbGVzZXQsXG5cdFx0c3ByaXRlWzBdLngsIHNwcml0ZVswXS55LCBzcHJpdGVbMF0udywgc3ByaXRlWzBdLmgsXG5cdFx0dmlld3BvcnQub2Zmc2V0WzBdICsgcGxheWVyLnBvc2l0aW9uWzBdLCB2aWV3cG9ydC5vZmZzZXRbMV0gKyBwbGF5ZXIucG9zaXRpb25bMV0sXG5cdFx0cGxheWVyLmRpbWVuc2lvbnNbMF0sIHBsYXllci5kaW1lbnNpb25zWzFdKTtcblxuXG5cdGxhc3RGcmFtZVRpbWUgPSBjdXJyZW50RnJhbWVUaW1lO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==