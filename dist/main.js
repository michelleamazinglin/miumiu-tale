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

var gameMap = [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 1, 3, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 1, 3, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 1, 3, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 1, 3, 2, 3, 3, 3, 3, 3, 2, 3, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]; // 每个地砖多少pixel

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
      x: 40,
      y: 120,
      w: 40,
      h: 40
    }]
  },
  11: {
    colour: "#ccaa00",
    floor: floorTypes.solid,
    sprite: [{
      x: 80,
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
  data: [10, 10, 11, 11, 10, 10, 11, 11, 10, 10, 11, 11, 10, 10, 11, 11, 10, 10, 11, 11]
}, {
  x: 9,
  y: 0,
  w: 6,
  h: 5,
  data: [10, 10, 10, 11, 11, 11, 10, 10, 10, 11, 11, 11, 10, 10, 10, 11, 11, 11, 10, 10, 10, 11, 11, 11, 10, 10, 10, 11, 11, 11]
}, {
  x: 8,
  y: 8,
  w: 4,
  h: 4,
  data: [10, 10, 11, 11, 10, 10, 11, 11, 10, 10, 11, 11, 10, 10, 11, 11]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJrZXlzRG93biIsImZsb29yVHlwZXMiLCJzb2xpZCIsInBhdGgiLCJ3YXRlciIsInRpbGVUeXBlcyIsImNvbG91ciIsImZsb29yIiwic3ByaXRlIiwieCIsInkiLCJ3IiwiaCIsIml0ZW1UeXBlcyIsIm5hbWUiLCJtYXhTdGFjayIsIm9mZnNldCIsImRpcmVjdGlvbnMiLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJ0aWxlc2V0IiwidGlsZXNldFVSTCIsInRpbGVzZXRMb2FkZWQiLCJwbGF5ZXIiLCJDaGFyYWN0ZXIiLCJ0aWxlRnJvbSIsInRpbGVUbyIsInRpbWVNb3ZlZCIsImRlbGF5TW92ZSIsImRpbWVuc2lvbnMiLCJwb3NpdGlvbiIsImRpcmVjdGlvbiIsInNwcml0ZXMiLCJwcm90b3R5cGUiLCJwbGFjZUF0IiwicHJvY2Vzc01vdmVtZW50IiwidCIsIm1hcFRpbGVEYXRhIiwibWFwIiwidG9JbmRleCIsImV2ZW50RW50ZXIiLCJkaWZmZXJlbmNlIiwiTWF0aCIsInJvdW5kIiwiY2FuTW92ZVRvIiwiY2FuTW92ZVVwIiwiY2FuTW92ZURvd24iLCJjYW5Nb3ZlTGVmdCIsImNhbk1vdmVSaWdodCIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwibW92ZVVwIiwibW92ZURvd24iLCJ2aWV3cG9ydCIsInNjcmVlbiIsInN0YXJ0VGlsZSIsImVuZFRpbGUiLCJ1cGRhdGUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInRpbGUiLCJjZWlsIiwiVGlsZU1hcCIsInJvb2ZMaXN0IiwiZGF0YSIsIlRpbGUiLCJ0eCIsInR5IiwidHQiLCJ0eXBlIiwicm9vZiIsInJvb2ZUeXBlIiwiYnVpbGRNYXBGcm9tRGF0YSIsInRpbGVNYXBJZCIsImxlbmd0aCIsInB1c2giLCJhZGRSb29mcyIsInJvb2ZzIiwiaSIsInIiLCJ0aWxlSWR4IiwiZ2V0RnJhbWUiLCJkdXJhdGlvbiIsInRpbWUiLCJhbmltYXRlZCIsImVuZCIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhd0dhbWUiLCJmb250IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIiwid2lkdGgiLCJoZWlnaHQiLCJJbWFnZSIsIm9uZXJyb3IiLCJhbGVydCIsInNyYyIsImNvbnNvbGUiLCJsb2ciLCJjdXJyZW50RnJhbWVUaW1lIiwiRGF0ZSIsIm5vdyIsInRpbWVFbGFwc2VkIiwic2VjIiwicGxheWVyUm9vZjEiLCJwbGF5ZXJSb29mMiIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd0ltYWdlIiwic3ByaXRlRHVyYXRpb24iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7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Q0FBa0IsQ0FBbEIsQ0FIdkI7QUFNQWhDLGVBQWEsR0FBRzRHLGdCQUFoQjtBQUNBZCx1QkFBcUIsQ0FBQ0MsUUFBRCxDQUFyQjtBQUNBLEM7Ozs7Ozs7Ozs7O0FDM2JELHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9tYXBcIjtcblxuXG5cbiIsIi8vIGkgd2FudCBhIGNhbWVyYSBmb2xsb3dpbmcgdGhlIGNoYXIgYXJvdW5kIHRoZSBtYXBcblxuXG5sZXQgY3R4ID0gbnVsbDtcblxuLy8gY3JlYXRlIGEgbWFwIHdpdGggMTAqMTAgdGlsZVxubGV0IGdhbWVNYXAgPSBbXG5cdDAsIDAsIDAsIDAsIDAsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDMsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDIsIDIsIDIsIDEsIDMsIDIsIDIsIDMsIDIsIDIsIDIsIDIsIDMsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDEsIDMsIDIsIDIsIDMsIDIsIDIsIDIsIDIsIDMsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDEsIDMsIDIsIDIsIDMsIDIsIDIsIDIsIDIsIDMsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDEsIDMsIDIsIDMsIDMsIDMsIDMsIDMsIDIsIDMsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDEsIDEsIDIsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDEsIDEsIDIsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDMsIDIsIDMsIDMsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDMsIDIsIDIsIDMsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG4gICAgMCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMywgMiwgMiwgMywgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMywgMywgMywgMywgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCxcblx0NCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgNFxuXTtcbi8vIOavj+S4quWcsOegluWkmuWwkXBpeGVsXG5sZXQgdGlsZVdpZHRoID0gNDA7XG5sZXQgdGlsZUhlaWdodCA9IDQwO1xuLy8g5Zyw5Zu+5aSn5bCP5bCx5pivMTAqMTBcbmxldCBtYXBXaWR0aCA9IDIwO1xubGV0IG1hcEhlaWdodCA9IDIwO1xuLy8gZnJhbWVyYXRlXG5sZXQgY3VycmVudFNlY29uZCA9IDA7XG5sZXQgZnJhbWVDb3VudCA9IDA7XG5sZXQgZnJhbWVzTGFzdFNlY29uZCA9IDA7XG5sZXQgbGFzdEZyYW1lVGltZSA9IDA7XG5cblxuLy8ga2V5Q29kZSA6IGJvb2xlYW4gdG8gdGVsbCB1cyB3aGljaCBvbmUgYXJlIHByZXNzZWRcbmxldCBrZXlzRG93biA9IHtcbiAgICAvLyAzNzogbGVmdFxuICAgIDM3IDogZmFsc2UsXG4gICAgLy8gMzg6IHVwXG4gICAgMzggOiBmYWxzZSxcbiAgICAvLyAzOTogcmlnaHRcbiAgICAzOSA6IGZhbHNlLFxuICAgIC8vIDQwOiBkb3duXG4gICAgNDAgOiBmYWxzZVxuICAgIC8vIDMyOiBzcGFjZVxufTtcblxuXG4vLyDlnLDmnb/np43nsbtcbmxldCBmbG9vclR5cGVzID0ge1xuICAgIHNvbGlkOiAwLFxuICAgIHBhdGg6IDEsXG4gICAgd2F0ZXI6IDJcbn07XG5cbi8vIOaVsOWtl++8iGdhbWVNYXDvvInlr7nlupTkuIrpopzoibLlkozlnLDmnb/np43nsbtcbi8vIDA65aKZ5aOBIDE66I2J5ZywIDI66ZmG5ZywIDM65oi/5a2QIDQ6IOawtFxubGV0IHRpbGVUeXBlcyA9IHtcblx0MCA6IHsgY29sb3VyOiBcIiM3OTNkNGNcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MCx5OjAsdzo0MCxoOjQwfV0gfSxcblx0MSA6IHsgY29sb3VyOiBcIiM2ZGY3YjFcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo0MCx5OjAsdzo0MCxoOjQwfV0gfSxcblx0MiA6IHsgY29sb3VyOiBcIiNjOTc0NjFcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo4MCx5OjAsdzo0MCxoOjQwfV1cdH0sXG5cdDMgOiB7IGNvbG91cjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjEyMCx5OjAsdzo0MCxoOjQwfV0gfSxcbiAgICA0IDogeyBjb2xvdXI6IFwiIzAwOGRmMFwiLCBmbG9vcjogZmxvb3JUeXBlcy53YXRlciwgc3ByaXRlOlt7eDoxNjAseTowLHc6NDAsaDo0MH1dIH0sXG4gICAgMTAgOiB7IGNvbG91cjpcIiNjY2FhMDBcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDo0MCx5OjEyMCx3OjQwLGg6NDB9XX0sXG5cdDExIDogeyBjb2xvdXI6XCIjY2NhYTAwXCIsIGZsb29yOmZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6ODAseToxMjAsdzo0MCxoOjQwfV19XG59O1xuXG4vLyDnianlk4FcbmxldCBpdGVtVHlwZXMgPSB7XG4gICAgMSA6IHtcblx0XHRuYW1lIDogXCJjb2NvbnV0XCIsXG5cdFx0bWF4U3RhY2sgOiA1LFxuXHRcdHNwcml0ZSA6IFt7eDoyNDAseTowLHc6NDAsaDo0MH1dLFxuXHRcdG9mZnNldCA6IFswLDBdXG4gICAgfSxcbiAgICAyIDoge1xuXHRcdG5hbWUgOiBcInN0cmF3YmVycnlcIixcblx0XHRtYXhTdGFjayA6IDUsXG5cdFx0c3ByaXRlIDogW3t4OjI4MCx5OjAsdzo0MCxoOjQwfV0sXG5cdFx0b2Zmc2V0IDogWzAsMF1cblx0fVxufTtcblxubGV0IGRpcmVjdGlvbnMgPSB7XG5cdHVwXHQ6IDAsXG5cdHJpZ2h0OiAxLFxuXHRkb3duOiAyLFxuXHRsZWZ0OiAzXG59O1xuXG5sZXQgdGlsZXNldCA9IG51bGwsIHRpbGVzZXRVUkwgPSBcInNyYy9pbWFnZXMvdGlsZXNldGVzdHQucG5nXCIsIHRpbGVzZXRMb2FkZWQgPSBmYWxzZTtcblxuXG5cbi8vIOWIm+W7uuS4gOS4quinkuiJsiAobWl1bWl1KVxubGV0IHBsYXllciA9IG5ldyBDaGFyYWN0ZXIoKTtcbi8vIGluIGNsYXNzIHNvIHdlIGNhbiBhZGQgbW9yZSBjaGFyIGluIGZ1dHVyZVxuZnVuY3Rpb24gQ2hhcmFjdGVyKCkge1xuXHR0aGlzLnRpbGVGcm9tXHQ9IFsxLDFdO1xuICAgIHRoaXMudGlsZVRvXHRcdD0gWzEwLDEwXTtcbiAgICAvLyB0aW1lIGluIG1pbGxzZWNvbmRzXG4gICAgdGhpcy50aW1lTW92ZWRcdD0gMDtcbiAgICB0aGlzLmRlbGF5TW92ZVx0PSA3MDA7XG5cdHRoaXMuZGltZW5zaW9uc1x0PSBbNDAsNDBdO1xuICAgIHRoaXMucG9zaXRpb25cdD0gWzQ1LDQ1XTtcbiAgICBcbiAgICB0aGlzLmRpcmVjdGlvblx0PSBkaXJlY3Rpb25zLnVwO1xuXHR0aGlzLnNwcml0ZXMgPSB7fTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMudXBdXHRcdD0gW3t4OjAseToxMjAsdzozMCxoOjMwfV07XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLnJpZ2h0XVx0PSBbe3g6MCx5OjE1MCx3OjMwLGg6MzB9XTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMuZG93bl1cdD0gW3t4OjAseToxODAsdzozMCxoOjMwfV07XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLmxlZnRdXHQ9IFt7eDowLHk6MjEwLHc6MzAsaDozMH1dO1xufVxuXG5cbi8vIHBsYWNlIGNoYXIgaW4gYSBzcGVjaXRpYyB0aWxlIFxuQ2hhcmFjdGVyLnByb3RvdHlwZS5wbGFjZUF0ID0gZnVuY3Rpb24oeCwgeSkge1xuXHR0aGlzLnRpbGVGcm9tXHQ9IFt4LHldO1xuICAgIHRoaXMudGlsZVRvXHRcdD0gW3gseV07XG4gICAgLy8geCBhbmQgeSBwb3NpdGlvbiBvZiB0aGUgdGlsZS4gdXBkYXRlIHRoZSB0aWxlRnJvbSBhbmQgdGlsZVRvIHByb3BlcnRpZXMgdG8gdGhlIG5ldyB0aWxlIGNvb3JkaW5hdGVzXG4gICAgLy8gY2FsY3VsYXRlcyB0aGUgcGl4ZWwgcG9zaXRpb24gb2YgdGhlIGNoYXJhY3llciB1c2UgYmVsb3dcblx0dGhpcy5wb3NpdGlvblx0PSBbKCggdGlsZVdpZHRoICogeCApKyggKHRpbGVXaWR0aCAtIHRoaXMuZGltZW5zaW9uc1swXSkgLyAyICkpLFxuXHRcdCgoIHRpbGVIZWlnaHQgKiB5ICkrKCAodGlsZUhlaWdodCAtIHRoaXMuZGltZW5zaW9uc1sxXSkgLyAyICkpXTtcbn07XG5cbi8vIGNhbGN1bGF0aW9ucyBlYWNoIGZyYW1lIHRvIGZpbmQgcG9zaXRpb24sIHBhc3MgaW4gYSB0aW1lXG5DaGFyYWN0ZXIucHJvdG90eXBlLnByb2Nlc3NNb3ZlbWVudCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAvLyBpZiBjaGFyIHRpbGVUbyA9PSB0aWxlRnJvbSBjaGFyIGlzIG5vdCBtb3ZpbmcsIHNvIHJldHVybiBmYWxzZVxuXHRpZiggdGhpcy50aWxlRnJvbVswXSA9PSB0aGlzLnRpbGVUb1swXSAmJiB0aGlzLnRpbGVGcm9tWzFdID09IHRoaXMudGlsZVRvWzFdKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIC8vIGlmIHRoZSBhbW91bnQgb2YgdGltZSBwYXNzZWQgc2luY2UgY2hhciBiZWdhbiBpdHMgY3VycmVudCBtb3ZlID49IHRoZSB0aW1lIGZvciBjaGFyIHRvIG1vdmUgMSB0aWxlLiB3ZSBzZXQgcG9zaXRpb24gdXNpbmcgcGxhY2VBdCBmdW5jdGlvblxuICAgIC8vIGFrYTogaWYgY2hhciBzdGlsbCBtb3Zpbmdcblx0aWYoKHQgLSB0aGlzLnRpbWVNb3ZlZCkgPj0gdGhpcy5kZWxheU1vdmUpIHtcbiAgICAgICAgdGhpcy5wbGFjZUF0KHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSk7XG4gICAgICAgIGlmKG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSldLmV2ZW50RW50ZXIhPW51bGwpXG5cdFx0e1xuXHRcdFx0bWFwVGlsZURhdGEubWFwW3RvSW5kZXgodGhpcy50aWxlVG9bMF0sIHRoaXMudGlsZVRvWzFdKV0uZXZlbnRFbnRlcih0aGlzKTtcbiAgICAgICAgfVxuXHR9IGVsc2Uge1xuICAgICAgICAvLyBjdXJyZW50IHBvc2l0aW9uIG9uIGNhbnZhc1xuXHRcdHRoaXMucG9zaXRpb25bMF0gPSAodGhpcy50aWxlRnJvbVswXSAqIHRpbGVXaWR0aCkgKyAoKHRpbGVXaWR0aC10aGlzLmRpbWVuc2lvbnNbMF0pLzIpO1xuXHRcdHRoaXMucG9zaXRpb25bMV0gPSAodGhpcy50aWxlRnJvbVsxXSAqIHRpbGVIZWlnaHQpICsgKCh0aWxlSGVpZ2h0LXRoaXMuZGltZW5zaW9uc1sxXSkvMik7XG5cbiAgICAgICAgLy8gaWYgY2hhciBpcyBtb3Zpbmcgb24geCBjb29yZGluYXRlLCBjYWxjdWxhdGUgcGl4ZWxzXG5cdFx0aWYodGhpcy50aWxlVG9bMF0gIT0gdGhpcy50aWxlRnJvbVswXSkge1xuICAgICAgICAgICAgLy8gZGlmZmVyZW5jZSA9IGRpc3RhbmNlIG1vdmVkXG4gICAgICAgICAgICAvLyBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZGVzdGluYXRpb24gdGlsZSAodGlsZVRvKSBpcyBsZWZ0IChvciBhYm92ZSksIG9yIHJpZ2h0IChvciBiZWxvdykgdGhlIHRpbGUgd2UgYXJlIG1vdmluZyBmcm9tICh0aWxlRnJvbSksIHdlIHN1YnRyYWN0IG9yIGFkZCB0aGlzIGFtb3VudCB0byB0aGUgQ2hhcmFjdGVycyBwb3NpdGlvbi4gXG5cdFx0XHRsZXQgZGlmZmVyZW5jZSA9ICh0aWxlV2lkdGggLyB0aGlzLmRlbGF5TW92ZSkgKiAodCAtIHRoaXMudGltZU1vdmVkKTtcblx0XHRcdHRoaXMucG9zaXRpb25bMF0rPSAodGhpcy50aWxlVG9bMF0gPCB0aGlzLnRpbGVGcm9tWzBdID8gMCAtIGRpZmZlcmVuY2UgOiBkaWZmZXJlbmNlKTtcblx0XHR9XG5cdCAgICBpZih0aGlzLnRpbGVUb1sxXSAhPSB0aGlzLnRpbGVGcm9tWzFdKSB7XG5cdFx0XHRsZXQgZGlmZmVyZW5jZSA9ICh0aWxlSGVpZ2h0IC8gdGhpcy5kZWxheU1vdmUpICogKHQtdGhpcy50aW1lTW92ZWQpO1xuXHRcdFx0dGhpcy5wb3NpdGlvblsxXSs9ICh0aGlzLnRpbGVUb1sxXTx0aGlzLnRpbGVGcm9tWzFdID8gMCAtIGRpZmZlcmVuY2UgOiBkaWZmZXJlbmNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByb3VuZCB4ICYgeSB0byB3aG9sZSBudW1iZXJcblx0XHR0aGlzLnBvc2l0aW9uWzBdID0gTWF0aC5yb3VuZCh0aGlzLnBvc2l0aW9uWzBdKTtcblx0XHR0aGlzLnBvc2l0aW9uWzFdID0gTWF0aC5yb3VuZCh0aGlzLnBvc2l0aW9uWzFdKTtcbiAgICB9XG4gICAgLy8gdHJ1ZSA9IGNoYXIgaXMgY3VycmVudGx5IG1vdmluZ1xuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuXG4vLyBpZiBjaGFyIGNhbiBtb3ZlIGluIGEgc3BlY2lmaWMgZGlyZWNcbkNoYXJhY3Rlci5wcm90b3R5cGUuY2FuTW92ZVRvID0gZnVuY3Rpb24oeCwgeSlcbntcbiAgICAvLyBpZiB4IGFuZCB5IGlzIGluIG1hcCBib3VuZFxuICAgIGlmKHggPCAwIHx8IHggPj0gbWFwV2lkdGggfHwgeSA8IDAgfHwgeSA+PSBtYXBIZWlnaHQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgLy8gaWYgdGhlIHRpbGUgaXMgcGF0aCB0aWxlIChvbmx5IG1vdmUgaWYgaXRzIGEgcGF0aClcblx0XHRpZih0aWxlVHlwZXNbZ2FtZU1hcFt0b0luZGV4KHgseSldXS5mbG9vciE9Zmxvb3JUeXBlcy5wYXRoKSB7IHJldHVybiBmYWxzZTsgfVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5DaGFyYWN0ZXIucHJvdG90eXBlLmNhbk1vdmVVcCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jYW5Nb3ZlVG8odGhpcy50aWxlRnJvbVswXSwgdGhpcy50aWxlRnJvbVsxXS0xKTsgfTtcbkNoYXJhY3Rlci5wcm90b3R5cGUuY2FuTW92ZURvd24gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY2FuTW92ZVRvKHRoaXMudGlsZUZyb21bMF0sIHRoaXMudGlsZUZyb21bMV0rMSk7IH07XG5DaGFyYWN0ZXIucHJvdG90eXBlLmNhbk1vdmVMZWZ0ID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNhbk1vdmVUbyh0aGlzLnRpbGVGcm9tWzBdLTEsIHRoaXMudGlsZUZyb21bMV0pOyB9O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5jYW5Nb3ZlUmlnaHQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY2FuTW92ZVRvKHRoaXMudGlsZUZyb21bMF0rMSwgdGhpcy50aWxlRnJvbVsxXSk7IH07XG5cbkNoYXJhY3Rlci5wcm90b3R5cGUubW92ZUxlZnQgPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzBdLT0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMubGVmdDsgfTtcbkNoYXJhY3Rlci5wcm90b3R5cGUubW92ZVJpZ2h0ID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1swXSs9IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLnJpZ2h0OyB9O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5tb3ZlVXAgPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzFdLT0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMudXA7IH07XG5DaGFyYWN0ZXIucHJvdG90eXBlLm1vdmVEb3duID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1sxXSs9IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLmRvd247IH07XG5cblxuXG4vLyBjcmVhdGUgYSBjYW1lcmEgb2JqZWN0XG5sZXQgdmlld3BvcnQgPSB7XG4gICAgLy8gY2FudmFzIHdpZHRoIGFuZCBoZWlnaHRcbiAgICBzY3JlZW46IFswLDBdLFxuICAgIC8vIHRpbGUgY29vcmRpbmF0ZXMgb2YgdGhlIHRvcC1sZWZ0IGFyZWEgb2YgdGhlIG1hcFxuICAgIHN0YXJ0VGlsZTogWzAsMF0sXG4gICAgLy8gdGlsZSBjb29yZGluYXRlcyBvZiB0aGUgYm90dG9tLXJpZ2h0IGFyZWEgb2YgdGhlIG1hcFxuICAgIGVuZFRpbGU6IFswLDBdLFxuICAgIC8vIG9mZnNldCBpbiBwaXhlbHNcbiAgICBvZmZzZXQ6IFswLDBdLFxuICAgIC8vIHVwZGF0ZSBmdW5jdGlvbiwgeCB5IGlzIG91ciBjZW50ZXIgYXJlYVxuICAgIHVwZGF0ZTogZnVuY3Rpb24ob2Zmc2V0WCwgb2Zmc2V0WSkge1xuICAgICAgICAvLyBvZmZzZXQ6IGhhbGYgdGhlIGNhbnZhcyB3aWR0aCB8fCBoZWlnaHQgKHJvdW5kIGRvd24gdG8gd2hvbGUgbnVtKVxuXHRcdHRoaXMub2Zmc2V0WzBdID0gTWF0aC5mbG9vcigodGhpcy5zY3JlZW5bMF0vMikgLSBvZmZzZXRYKTtcbiAgICAgICAgdGhpcy5vZmZzZXRbMV0gPSBNYXRoLmZsb29yKCh0aGlzLnNjcmVlblsxXS8yKSAtIG9mZnNldFkpO1xuXG4gICAgICAgIC8vIHdlIGZpbmQgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSB0aWxlXG4gICAgICAgIGxldCB0aWxlID0gWyBNYXRoLmZsb29yKG9mZnNldFggLyB0aWxlV2lkdGgpLCBNYXRoLmZsb29yKG9mZnNldFkgLyB0aWxlSGVpZ2h0KSBdO1xuICAgICAgICAvLyAgY2FsY3VsYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgZmlyc3QgdGlsZSBvbiB0aGUgeCBheGlzIGJ5IGNhbGN1bHRpbmcgdGhlIG1heGltdW0gbnVtYmVyIG9mIHRpbGVzIHRoYXQgY2FuIGZpdCBpbiBoYWxmIG9mIHRoZSBzY3JlZW4gd2lkdGgsIGFuZCB0YWtpbmcgdGhhdCBudW1iZXIgYXdheSBmcm9tIHRoZSBjZW50cmUgdGlsZS5cbiAgICAgICAgLy8gIHJlbW92ZSBhbiBhZGRpdGlvbmFsIDEgdG8gYWxsb3cgZm9yIHRpbGVzIHRoYXQgYXJlIG5vdCBjb21wbGV0ZWx5IG9uIHRoZSBzY3JlZW4sIGJ1dCBvbmx5IHBhcnRpYWxseS5cbiAgICAgICAgdGhpcy5zdGFydFRpbGVbMF0gPSB0aWxlWzBdIC0gMSAtIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMF0vMikgLyB0aWxlV2lkdGgpO1xuXHRcdHRoaXMuc3RhcnRUaWxlWzFdID0gdGlsZVsxXSAtIDEgLSBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzFdLzIpIC8gdGlsZUhlaWdodCk7XG5cbiAgICAgICAgLy8gY2hlY2sgdG8gbWFrZSBzdXJlIHggb3IgeSBpcyBub3QgbGVzcyB0aGVuIDAgKG91cnNpZGUgdGhlIGJvdW5kcylcbiAgICAgICAgaWYodGhpcy5zdGFydFRpbGVbMF0gPCAwKSB7IHRoaXMuc3RhcnRUaWxlWzBdID0gMDsgfVxuXHRcdGlmKHRoaXMuc3RhcnRUaWxlWzFdIDwgMCkgeyB0aGlzLnN0YXJ0VGlsZVsxXSA9IDA7IH1cblxuICAgICAgICB0aGlzLmVuZFRpbGVbMF0gPSB0aWxlWzBdICsgMSArIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMF0vMikgLyB0aWxlV2lkdGgpO1xuXHRcdHRoaXMuZW5kVGlsZVsxXSA9IHRpbGVbMV0gKyAxICsgTWF0aC5jZWlsKCh0aGlzLnNjcmVlblsxXS8yKSAvIHRpbGVIZWlnaHQpO1xuXG5cdFx0aWYodGhpcy5lbmRUaWxlWzBdID49IG1hcFdpZHRoKSB7IHRoaXMuZW5kVGlsZVswXSA9IG1hcFdpZHRoIC0xOyB9XG5cdFx0aWYodGhpcy5lbmRUaWxlWzFdID49IG1hcEhlaWdodCkgeyB0aGlzLmVuZFRpbGVbMV0gPSBtYXBIZWlnaHQgLSAxOyB9XG4gICAgICAgIH1cbn07XG5cblxuLy8gcm9vZnRvcFxuXG5sZXQgbWFwVGlsZURhdGEgPSBuZXcgVGlsZU1hcCgpO1xubGV0IHJvb2ZMaXN0ID0gW1xuXHR7IHg6NSwgeTowLCB3OjQsIGg6NSwgZGF0YTogW1xuXHRcdDEwLCAxMCwgMTEsIDExLFxuXHRcdDEwLCAxMCwgMTEsIDExLFxuXHRcdDEwLCAxMCwgMTEsIDExLFxuXHRcdDEwLCAxMCwgMTEsIDExLFxuXHRcdDEwLCAxMCwgMTEsIDExXG5cdF19LFxuXHR7IHg6OSwgeTowLCB3OjYsIGg6NSwgZGF0YTogW1xuXHRcdDEwLCAxMCwgMTAsIDExLCAxMSwgMTEsXG4gICAgICAgIDEwLCAxMCwgMTAsIDExLCAxMSwgMTEsXG4gICAgICAgIDEwLCAxMCwgMTAsIDExLCAxMSwgMTEsXG4gICAgICAgIDEwLCAxMCwgMTAsIDExLCAxMSwgMTEsXG4gICAgICAgIDEwLCAxMCwgMTAsIDExLCAxMSwgMTFcblx0XX0sXG5cdHsgeDo4LCB5OjgsIHc6NCwgaDo0LCBkYXRhOiBbXG4gICAgICAgIDEwLCAxMCwgMTEsIDExLFxuICAgICAgICAxMCwgMTAsIDExLCAxMSxcbiAgICAgICAgMTAsIDEwLCAxMSwgMTEsXG4gICAgICAgIDEwLCAxMCwgMTEsIDExLFxuXHRdfVxuXTtcblxuLy8gc3RvcmVzIGluZm9ybWF0aW9uIGZvciBlYWNoIG1hcCB0aWxlXG5mdW5jdGlvbiBUaWxlKHR4LCB0eSwgdHQpXG57XG4gICAgLy8gdHksIHR4ID0gdGhlIHBvc2l0aW9uIG9mIHRoZSB0aWxlIG9uIHRoZSBtYXBcblx0dGhpcy54XHRcdFx0PSB0eDtcblx0dGhpcy55XHRcdFx0PSB0eTtcblx0dGhpcy50eXBlXHRcdD0gdHQ7XG5cdHRoaXMucm9vZlx0XHQ9IG51bGw7XG4gICAgdGhpcy5yb29mVHlwZVx0PSAwO1xuICAgIC8vICBwb2ludGVyIHRvIGEgZnVuY3Rpb24gdG8gZXhlY3V0ZSB3aGVuIGEgY2hhcmFjdGVyIGhhcyBjb21wbGV0ZWQgbW92aW5nIG9uIHRvIHRoaXMgdGlsZVxuXHR0aGlzLmV2ZW50RW50ZXJcdD0gbnVsbDtcbn1cblxuLy8gc3RvcmVzIGFuZCBtYW5hZ2VzIG91ciBsb2FkZWQgbWFwIGRhdGFcbmZ1bmN0aW9uIFRpbGVNYXAoKVxue1xuXHR0aGlzLm1hcFx0PSBbXTtcblx0dGhpcy53XHRcdD0gMDtcblx0dGhpcy5oXHRcdD0gMDtcbn1cblxuVGlsZU1hcC5wcm90b3R5cGUuYnVpbGRNYXBGcm9tRGF0YSA9IGZ1bmN0aW9uKHRpbGVNYXBJZCwgdywgaClcbntcblx0dGhpcy53XHRcdD0gdztcbiAgICB0aGlzLmhcdFx0PSBoO1xuXG4gICAgaWYodGlsZU1hcElkLmxlbmd0aCE9KHcgKiBoKSkgeyByZXR1cm4gZmFsc2U7IH1cblx0XG4gICAgdGhpcy5tYXAubGVuZ3RoXHQ9IDA7XG4gICAgXHRmb3IobGV0IHkgPSAwOyB5IDwgaDsgeSsrKVxuXHR7XG5cdFx0Zm9yKGxldCB4ID0gMDsgeCA8IHc7IHgrKylcblx0XHR7XG5cdFx0XHR0aGlzLm1hcC5wdXNoKCBuZXcgVGlsZSh4LCB5LCB0aWxlTWFwSWRbKCh5KncpK3gpXSkgKTtcblx0XHR9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufTtcblxuXG5UaWxlTWFwLnByb3RvdHlwZS5hZGRSb29mcyA9IGZ1bmN0aW9uKHJvb2ZzKVxue1xuXHRmb3IobGV0IGkgaW4gcm9vZnMpXG5cdHtcbiAgICAgICAgbGV0IHIgPSByb29mc1tpXTtcbiAgICAgICAgaWYoci54IDwgMCB8fCByLnkgPCAwIHx8IHIueCA+PSB0aGlzLncgfHwgci55ID49IHRoaXMuaCB8fFxuXHRcdFx0KHIueCtyLncpPnRoaXMudyB8fCAoci55K3IuaCk+dGhpcy5oIHx8XG5cdFx0XHRyLmRhdGEubGVuZ3RoIT0oci53KnIuaCkpXG5cdFx0e1xuXHRcdFx0Y29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgZm9yKGxldCB5ID0gMDsgeSA8IHIuaDsgeSsrKVxuXHRcdHtcblx0XHRcdGZvcihsZXQgeCA9IDA7IHggPCByLnc7IHgrKylcblx0XHRcdHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZUlkeCA9ICgoKHIueSt5KSp0aGlzLncpK3IueCt4KTtcbiAgICAgICAgICAgICAgICB0aGlzLm1hcFt0aWxlSWR4XS5yb29mID0gcjtcblx0XHRcdFx0dGhpcy5tYXBbdGlsZUlkeF0ucm9vZlR5cGUgPSByLmRhdGFbKCh5KnIudykreCldO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufTtcblxuXG4vLyBjb252ZXJ0IHgsIHkgaW50byBpbmRleCBpbiBnYW1lTWFwIGFyclxuZnVuY3Rpb24gdG9JbmRleCh4LCB5KSB7XG5cdHJldHVybigoeSAqIG1hcFdpZHRoKSArIHgpO1xufVxuXG5mdW5jdGlvbiBnZXRGcmFtZShzcHJpdGUsIGR1cmF0aW9uLCB0aW1lLCBhbmltYXRlZClcbntcblx0aWYoIWFuaW1hdGVkKSB7IHJldHVybiBzcHJpdGVbMF07IH1cblx0dGltZSA9IHRpbWUgJSBkdXJhdGlvbjtcblxuXHRmb3IoeCBpbiBzcHJpdGUpXG5cdHtcblx0XHRpZihzcHJpdGVbeF0uZW5kPj10aW1lKSB7IHJldHVybiBzcHJpdGVbeF07IH1cblx0fVxufVxuXG4vLyBsb29wIHN0YXJ0cyB3aGVuIHBhZ2UgZG9uZSBsb2FkaW5nXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJykuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpO1xuICAgIGN0eC5mb250ID0gXCJib2xkIDEwcHQgc2Fucy1zZXJpZlwiO1xuICAgIFxuICAgIC8vIGFkZCBldmVudExpc3RlbmVycyBmb3IgdGhlIGtleWRvd25hIGFuZCBrZXl1cFxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuXHRcdGlmKGUua2V5Q29kZT49MzcgJiYgZS5rZXlDb2RlPD00MCkgeyBrZXlzRG93bltlLmtleUNvZGVdID0gdHJ1ZTsgfVxuXHR9KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoZS5rZXlDb2RlPj0zNyAmJiBlLmtleUNvZGU8PTQwKSB7IGtleXNEb3duW2Uua2V5Q29kZV0gPSBmYWxzZTsgfVxuICAgIH0pO1xuXG4gICAgLy8gY2hlY2tzIHRoZSBDYW52YXMgZGltZW5zaW9ucyBhbmQgc3RvcmVzIGl0IGluIHRoZSB2aWV3cG9ydCBvYmplY3RzXG4gICAgdmlld3BvcnQuc2NyZWVuID0gW2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJykud2lkdGgsXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJykuaGVpZ2h0XTtcbiAgICAgICAgXG4gICAgdGlsZXNldCA9IG5ldyBJbWFnZSgpO1xuXHR0aWxlc2V0Lm9uZXJyb3IgPSBmdW5jdGlvbigpXG5cdHtcblx0XHRjdHggPSBudWxsO1xuXHRcdGFsZXJ0KFwiRmFpbGVkIGxvYWRpbmcgdGlsZXNldC5cIik7XG5cdH07XG5cdHRpbGVzZXQub25sb2FkID0gZnVuY3Rpb24oKSB7IHRpbGVzZXRMb2FkZWQgPSB0cnVlOyB9O1xuICAgIHRpbGVzZXQuc3JjID0gdGlsZXNldFVSTDtcbiAgICBcbiAgICBtYXBUaWxlRGF0YS5idWlsZE1hcEZyb21EYXRhKGdhbWVNYXAsIG1hcFdpZHRoLCBtYXBIZWlnaHQpO1xuXHRtYXBUaWxlRGF0YS5hZGRSb29mcyhyb29mTGlzdCk7XG5cdG1hcFRpbGVEYXRhLm1hcFsoKDIqbWFwV2lkdGgpKzIpXS5ldmVudEVudGVyID0gZnVuY3Rpb24oKVxuXHR7IGNvbnNvbGUubG9nKFwiRW50ZXJlZCB0aWxlIDIsMlwiKTsgfTtcbn07XG5cblxuLy8gbWFpbiBmdW5jdGlvblxuZnVuY3Rpb24gZHJhd0dhbWUoKVxue1xuICAgIGlmKGN0eD09bnVsbCkgeyByZXR1cm47IH1cbiAgICBpZighdGlsZXNldExvYWRlZCkgeyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpOyByZXR1cm47IH1cblxuXHRsZXQgY3VycmVudEZyYW1lVGltZSA9IERhdGUubm93KCk7XG4gICAgbGV0IHRpbWVFbGFwc2VkID0gY3VycmVudEZyYW1lVGltZSAtIGxhc3RGcmFtZVRpbWU7XG4gICAgXG4gICAgLy8gZnJhbWVjb3VudCBcblx0bGV0IHNlYyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKS8xMDAwKTtcblx0aWYoc2VjIT1jdXJyZW50U2Vjb25kKXtcblx0XHRjdXJyZW50U2Vjb25kID0gc2VjO1xuXHRcdGZyYW1lc0xhc3RTZWNvbmQgPSBmcmFtZUNvdW50O1xuXHRcdGZyYW1lQ291bnQgPSAxO1xuXHR9XG5cdGVsc2UgeyBmcmFtZUNvdW50Kys7IH1cblxuICAgIC8vIHBsYXllciBtb3ZlbWVudFxuXHRpZighcGxheWVyLnByb2Nlc3NNb3ZlbWVudChjdXJyZW50RnJhbWVUaW1lKSkge1xuXHRcdGlmKGtleXNEb3duWzM4XSAmJiBwbGF5ZXIuY2FuTW92ZVVwKCkpXHRcdHsgcGxheWVyLm1vdmVVcChjdXJyZW50RnJhbWVUaW1lKTsgfVxuXHRcdGVsc2UgaWYoa2V5c0Rvd25bNDBdICYmIHBsYXllci5jYW5Nb3ZlRG93bigpKVx0eyBwbGF5ZXIubW92ZURvd24oY3VycmVudEZyYW1lVGltZSk7IH1cblx0XHRlbHNlIGlmKGtleXNEb3duWzM3XSAmJiBwbGF5ZXIuY2FuTW92ZUxlZnQoKSlcdHsgcGxheWVyLm1vdmVMZWZ0KGN1cnJlbnRGcmFtZVRpbWUpOyB9XG5cdFx0ZWxzZSBpZihrZXlzRG93blszOV0gJiYgcGxheWVyLmNhbk1vdmVSaWdodCgpKVx0eyBwbGF5ZXIubW92ZVJpZ2h0KGN1cnJlbnRGcmFtZVRpbWUpOyB9XG4gICAgfVxuXG4gICAgLy8gc2V0IHRoZSB2aWV3cG9ydCBjZW50cmUgdG8gdGhlIHBsYXllciB0b3AvbGVmdCBwb3NpdGlvbiBwbHVzIGhhbGYgdGhlIHBsYXllcnMgd2lkdGgvaGVpZ2h0LlxuICAgICAgICB2aWV3cG9ydC51cGRhdGUocGxheWVyLnBvc2l0aW9uWzBdICsgKHBsYXllci5kaW1lbnNpb25zWzBdLzIpLFxuICAgICAgICAgICAgcGxheWVyLnBvc2l0aW9uWzFdICsgKHBsYXllci5kaW1lbnNpb25zWzFdLzIpKTtcblxuXHQgICAgbGV0IHBsYXllclJvb2YxID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoXG5cdFx0cGxheWVyLnRpbGVGcm9tWzBdLCBwbGF5ZXIudGlsZUZyb21bMV0pXS5yb29mO1xuXHQgICAgbGV0IHBsYXllclJvb2YyID0gbWFwVGlsZURhdGEubWFwW3RvSW5kZXgoXG5cdFx0cGxheWVyLnRpbGVUb1swXSwgcGxheWVyLnRpbGVUb1sxXSldLnJvb2Y7XG5cbiAgICAgICAgLy8gZXJhc2UgYW55dGhpbmcgb24gdGhlIENhbnZhcyBmcm9tIHRoZSBsYXN0IGZyYW1lXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHZpZXdwb3J0LnNjcmVlblswXSwgdmlld3BvcnQuc2NyZWVuWzFdKTtcbiAgICBcbiAgICAvLyBuZXN0ZWQgbG9vcHM6IHkgYW5kIHhcblx0XHRmb3IobGV0IHkgPSB2aWV3cG9ydC5zdGFydFRpbGVbMV07IHkgPD0gdmlld3BvcnQuZW5kVGlsZVsxXTsgKyt5KSB7XG5cdFx0ICAgIGZvcihsZXQgeCA9IHZpZXdwb3J0LnN0YXJ0VGlsZVswXTsgeCA8PSB2aWV3cG9ydC5lbmRUaWxlWzBdOyArK3gpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IHRpbGVUeXBlc1ttYXBUaWxlRGF0YS5tYXBbdG9JbmRleCh4LHkpXS50eXBlXTtcblxuXHRcdFx0ICAgIGN0eC5kcmF3SW1hZ2UodGlsZXNldCxcblx0XHRcdFx0dGlsZS5zcHJpdGVbMF0ueCwgdGlsZS5zcHJpdGVbMF0ueSwgdGlsZS5zcHJpdGVbMF0udywgdGlsZS5zcHJpdGVbMF0uaCxcblx0XHRcdFx0dmlld3BvcnQub2Zmc2V0WzBdICsgKHggKiB0aWxlV2lkdGgpLCB2aWV3cG9ydC5vZmZzZXRbMV0gKyAoeSAqIHRpbGVIZWlnaHQpLFxuICAgICAgICAgICAgICAgIHRpbGVXaWR0aCwgdGlsZUhlaWdodCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgICAgIGlmKG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLnJvb2ZUeXBlIT0wICYmXG5cdFx0XHRcdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLnJvb2YhPXBsYXllclJvb2YxICYmXG5cdFx0XHRcdG1hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLnJvb2YhPXBsYXllclJvb2YyKVxuXHRcdFx0e1xuXHRcdFx0XHR0aWxlID0gdGlsZVR5cGVzW21hcFRpbGVEYXRhLm1hcFt0b0luZGV4KHgseSldLnJvb2ZUeXBlXTtcblx0XHRcdFx0c3ByaXRlID0gZ2V0RnJhbWUodGlsZS5zcHJpdGUsIHRpbGUuc3ByaXRlRHVyYXRpb24sXG5cdFx0XHRcdFx0IHRpbGUuYW5pbWF0ZWQpO1xuXHRcdFx0XHRjdHguZHJhd0ltYWdlKHRpbGVzZXQsXG5cdFx0XHRcdFx0c3ByaXRlLngsIHNwcml0ZS55LCBzcHJpdGUudywgc3ByaXRlLmgsXG5cdFx0XHRcdFx0dmlld3BvcnQub2Zmc2V0WzBdICsgKHgqdGlsZVdpZHRoKSxcblx0XHRcdFx0XHR2aWV3cG9ydC5vZmZzZXRbMV0gKyAoeSp0aWxlSGVpZ2h0KSxcblx0XHRcdFx0XHR0aWxlV2lkdGgsIHRpbGVIZWlnaHQpO1xuXHRcdFx0fVxuXHRcdH1cbiAgICB9XG5cblxuICAgIFxuICAgIC8vIGRyYXcgdGhlIHBsYXllclxuICAgIGxldCBzcHJpdGUgPSBwbGF5ZXIuc3ByaXRlc1twbGF5ZXIuZGlyZWN0aW9uXTtcblx0Y3R4LmRyYXdJbWFnZSh0aWxlc2V0LFxuXHRcdHNwcml0ZVswXS54LCBzcHJpdGVbMF0ueSwgc3ByaXRlWzBdLncsIHNwcml0ZVswXS5oLFxuXHRcdHZpZXdwb3J0Lm9mZnNldFswXSArIHBsYXllci5wb3NpdGlvblswXSwgdmlld3BvcnQub2Zmc2V0WzFdICsgcGxheWVyLnBvc2l0aW9uWzFdLFxuXHRcdHBsYXllci5kaW1lbnNpb25zWzBdLCBwbGF5ZXIuZGltZW5zaW9uc1sxXSk7XG5cblxuXHRsYXN0RnJhbWVUaW1lID0gY3VycmVudEZyYW1lVGltZTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=