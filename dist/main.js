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

var gameMap = [0, 0, 0, 0, 0, 3, 3, 3, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 1, 3, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 1, 3, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 1, 3, 2, 2, 3, 2, 2, 2, 2, 3, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 1, 3, 2, 3, 3, 3, 3, 3, 2, 3, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 1, 1, 2, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]; // 每个地砖多少pixel

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
  this.tileTo = [1, 1]; // time in millseconds

  this.timeMoved = 0;
  this.delayMove = 700;
  this.dimensions = [30, 30];
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
}; // convert x, y into index in gameMap arr


function toIndex(x, y) {
  return y * mapWidth + x;
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


  viewport.update(player.position[0] + player.dimensions[0] / 2, player.position[1] + player.dimensions[1] / 2); // erase anything on the Canvas from the last frame

  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]); // nested loops: y and x

  for (var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y) {
    for (var x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x) {
      var tile = tileTypes[gameMap[toIndex(x, y)]];
      ctx.drawImage(tileset, tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h, viewport.offset[0] + x * tileWidth, viewport.offset[1] + y * tileHeight, tileWidth, tileHeight);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJrZXlzRG93biIsImZsb29yVHlwZXMiLCJzb2xpZCIsInBhdGgiLCJ3YXRlciIsInRpbGVUeXBlcyIsImNvbG91ciIsImZsb29yIiwic3ByaXRlIiwieCIsInkiLCJ3IiwiaCIsImRpcmVjdGlvbnMiLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJ0aWxlc2V0IiwidGlsZXNldFVSTCIsInRpbGVzZXRMb2FkZWQiLCJwbGF5ZXIiLCJDaGFyYWN0ZXIiLCJ0aWxlRnJvbSIsInRpbGVUbyIsInRpbWVNb3ZlZCIsImRlbGF5TW92ZSIsImRpbWVuc2lvbnMiLCJwb3NpdGlvbiIsImRpcmVjdGlvbiIsInNwcml0ZXMiLCJwcm90b3R5cGUiLCJwbGFjZUF0IiwicHJvY2Vzc01vdmVtZW50IiwidCIsImRpZmZlcmVuY2UiLCJNYXRoIiwicm91bmQiLCJ2aWV3cG9ydCIsInNjcmVlbiIsInN0YXJ0VGlsZSIsImVuZFRpbGUiLCJvZmZzZXQiLCJ1cGRhdGUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInRpbGUiLCJjZWlsIiwiY2FuTW92ZVRvIiwidG9JbmRleCIsImNhbk1vdmVVcCIsImNhbk1vdmVEb3duIiwiY2FuTW92ZUxlZnQiLCJjYW5Nb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsIm1vdmVVcCIsIm1vdmVEb3duIiwid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3R2FtZSIsImZvbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJ3aWR0aCIsImhlaWdodCIsIkltYWdlIiwib25lcnJvciIsImFsZXJ0Iiwic3JjIiwiY3VycmVudEZyYW1lVGltZSIsIkRhdGUiLCJub3ciLCJ0aW1lRWxhcHNlZCIsInNlYyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd0ltYWdlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFHQSxJQUFJQSxHQUFHLEdBQUcsSUFBVixDLENBRUE7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHLENBQ2IsQ0FEYSxFQUNWLENBRFUsRUFDUCxDQURPLEVBQ0osQ0FESSxFQUNELENBREMsRUFDRSxD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a0IsQ0FBbEIsQ0FIRCxFQUd1Qk4sTUFBTSxDQUFDTSxVQUFQLENBQWtCLENBQWxCLENBSHZCO0FBTUE1QixlQUFhLEdBQUc0RSxnQkFBaEI7QUFDQVosdUJBQXFCLENBQUNDLFFBQUQsQ0FBckI7QUFDQSxDOzs7Ozs7Ozs7OztBQ3JTRCx1QyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvZGlzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgXCIuL3N0eWxlcy9pbmRleC5zY3NzXCI7XG5pbXBvcnQgXCIuL3NjcmlwdHMvbWFwXCI7XG5cblxuXG4iLCIvLyBpIHdhbnQgYSBjYW1lcmEgZm9sbG93aW5nIHRoZSBjaGFyIGFyb3VuZCB0aGUgbWFwXG5cblxubGV0IGN0eCA9IG51bGw7XG5cbi8vIGNyZWF0ZSBhIG1hcCB3aXRoIDEwKjEwIHRpbGVcbmxldCBnYW1lTWFwID0gW1xuXHQwLCAwLCAwLCAwLCAwLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAzLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAyLCAyLCAyLCAxLCAzLCAyLCAyLCAzLCAyLCAyLCAyLCAyLCAzLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAxLCAzLCAyLCAyLCAzLCAyLCAyLCAyLCAyLCAzLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAxLCAzLCAyLCAyLCAzLCAyLCAyLCAyLCAyLCAzLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAxLCAzLCAyLCAzLCAzLCAzLCAzLCAzLCAyLCAzLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAxLCAxLCAyLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAxLCAxLCAyLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHQwLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuICAgIDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsXG5cdDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDRcbl07XG4vLyDmr4/kuKrlnLDnoJblpJrlsJFwaXhlbFxubGV0IHRpbGVXaWR0aCA9IDQwO1xubGV0IHRpbGVIZWlnaHQgPSA0MDtcbi8vIOWcsOWbvuWkp+Wwj+WwseaYrzEwKjEwXG5sZXQgbWFwV2lkdGggPSAyMDtcbmxldCBtYXBIZWlnaHQgPSAyMDtcbi8vIGZyYW1lcmF0ZVxubGV0IGN1cnJlbnRTZWNvbmQgPSAwO1xubGV0IGZyYW1lQ291bnQgPSAwO1xubGV0IGZyYW1lc0xhc3RTZWNvbmQgPSAwO1xubGV0IGxhc3RGcmFtZVRpbWUgPSAwO1xuXG5cbi8vIGtleUNvZGUgOiBib29sZWFuIHRvIHRlbGwgdXMgd2hpY2ggb25lIGFyZSBwcmVzc2VkXG5sZXQga2V5c0Rvd24gPSB7XG4gICAgLy8gMzc6IGxlZnRcbiAgICAzNyA6IGZhbHNlLFxuICAgIC8vIDM4OiB1cFxuICAgIDM4IDogZmFsc2UsXG4gICAgLy8gMzk6IHJpZ2h0XG4gICAgMzkgOiBmYWxzZSxcbiAgICAvLyA0MDogZG93blxuICAgIDQwIDogZmFsc2VcbiAgICAvLyAzMjogc3BhY2Vcbn07XG5cblxuLy8g5Zyw5p2/56eN57G7XG5sZXQgZmxvb3JUeXBlcyA9IHtcbiAgICBzb2xpZDogMCxcbiAgICBwYXRoOiAxLFxuICAgIHdhdGVyOiAyXG59O1xuXG4vLyDmlbDlrZfvvIhnYW1lTWFw77yJ5a+55bqU5LiK6aKc6Imy5ZKM5Zyw5p2/56eN57G7XG4vLyAwOuWimeWjgSAxOuiNieWcsCAyOumZhuWcsCAzOuaIv+WtkCA0OiDmsLRcbmxldCB0aWxlVHlwZXMgPSB7XG5cdDAgOiB7IGNvbG91cjogXCIjNzkzZDRjXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjAseTowLHc6NDAsaDo0MH1dIH0sXG5cdDEgOiB7IGNvbG91cjogXCIjNmRmN2IxXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6NDAseTowLHc6NDAsaDo0MH1dIH0sXG5cdDIgOiB7IGNvbG91cjogXCIjYzk3NDYxXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGgsIHNwcml0ZTpbe3g6ODAseTowLHc6NDAsaDo0MH1dXHR9LFxuXHQzIDogeyBjb2xvdXI6IFwiI2Q3N2M0YlwiLCBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDoxMjAseTowLHc6NDAsaDo0MH1dIH0sXG5cdDQgOiB7IGNvbG91cjogXCIjMDA4ZGYwXCIsIGZsb29yOiBmbG9vclR5cGVzLndhdGVyLCBzcHJpdGU6W3t4OjE2MCx5OjAsdzo0MCxoOjQwfV0gfVxufTtcblxubGV0IGRpcmVjdGlvbnMgPSB7XG5cdHVwXHQ6IDAsXG5cdHJpZ2h0OiAxLFxuXHRkb3duOiAyLFxuXHRsZWZ0OiAzXG59O1xuXG5sZXQgdGlsZXNldCA9IG51bGwsIHRpbGVzZXRVUkwgPSBcInNyYy9pbWFnZXMvdGlsZXNldGVzdHQucG5nXCIsIHRpbGVzZXRMb2FkZWQgPSBmYWxzZTtcblxuXG4vLyDliJvlu7rkuIDkuKrop5LoibIgKG1pdW1pdSlcbmxldCBwbGF5ZXIgPSBuZXcgQ2hhcmFjdGVyKCk7XG4vLyBpbiBjbGFzcyBzbyB3ZSBjYW4gYWRkIG1vcmUgY2hhciBpbiBmdXR1cmVcbmZ1bmN0aW9uIENoYXJhY3RlcigpIHtcblx0dGhpcy50aWxlRnJvbVx0PSBbMSwxXTtcbiAgICB0aGlzLnRpbGVUb1x0XHQ9IFsxLDFdO1xuICAgIC8vIHRpbWUgaW4gbWlsbHNlY29uZHNcbiAgICB0aGlzLnRpbWVNb3ZlZFx0PSAwO1xuICAgIHRoaXMuZGVsYXlNb3ZlXHQ9IDcwMDtcblx0dGhpcy5kaW1lbnNpb25zXHQ9IFszMCwzMF07XG4gICAgdGhpcy5wb3NpdGlvblx0PSBbNDUsNDVdO1xuICAgIFxuICAgIHRoaXMuZGlyZWN0aW9uXHQ9IGRpcmVjdGlvbnMudXA7XG5cdHRoaXMuc3ByaXRlcyA9IHt9O1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy51cF1cdFx0PSBbe3g6MCx5OjEyMCx3OjMwLGg6MzB9XTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMucmlnaHRdXHQ9IFt7eDowLHk6MTUwLHc6MzAsaDozMH1dO1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy5kb3duXVx0PSBbe3g6MCx5OjE4MCx3OjMwLGg6MzB9XTtcblx0dGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMubGVmdF1cdD0gW3t4OjAseToyMTAsdzozMCxoOjMwfV07XG59XG5cblxuLy8gcGxhY2UgY2hhciBpbiBhIHNwZWNpdGljIHRpbGUgXG5DaGFyYWN0ZXIucHJvdG90eXBlLnBsYWNlQXQgPSBmdW5jdGlvbih4LCB5KSB7XG5cdHRoaXMudGlsZUZyb21cdD0gW3gseV07XG4gICAgdGhpcy50aWxlVG9cdFx0PSBbeCx5XTtcbiAgICAvLyB4IGFuZCB5IHBvc2l0aW9uIG9mIHRoZSB0aWxlLiB1cGRhdGUgdGhlIHRpbGVGcm9tIGFuZCB0aWxlVG8gcHJvcGVydGllcyB0byB0aGUgbmV3IHRpbGUgY29vcmRpbmF0ZXNcbiAgICAvLyBjYWxjdWxhdGVzIHRoZSBwaXhlbCBwb3NpdGlvbiBvZiB0aGUgY2hhcmFjeWVyIHVzZSBiZWxvd1xuXHR0aGlzLnBvc2l0aW9uXHQ9IFsoKCB0aWxlV2lkdGggKiB4ICkrKCAodGlsZVdpZHRoIC0gdGhpcy5kaW1lbnNpb25zWzBdKSAvIDIgKSksXG5cdFx0KCggdGlsZUhlaWdodCAqIHkgKSsoICh0aWxlSGVpZ2h0IC0gdGhpcy5kaW1lbnNpb25zWzFdKSAvIDIgKSldO1xufTtcblxuLy8gY2FsY3VsYXRpb25zIGVhY2ggZnJhbWUgdG8gZmluZCBwb3NpdGlvbiwgcGFzcyBpbiBhIHRpbWVcbkNoYXJhY3Rlci5wcm90b3R5cGUucHJvY2Vzc01vdmVtZW50ID0gZnVuY3Rpb24odCkge1xuICAgIC8vIGlmIGNoYXIgdGlsZVRvID09IHRpbGVGcm9tIGNoYXIgaXMgbm90IG1vdmluZywgc28gcmV0dXJuIGZhbHNlXG5cdGlmKCB0aGlzLnRpbGVGcm9tWzBdID09IHRoaXMudGlsZVRvWzBdICYmIHRoaXMudGlsZUZyb21bMV0gPT0gdGhpcy50aWxlVG9bMV0pIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgLy8gaWYgdGhlIGFtb3VudCBvZiB0aW1lIHBhc3NlZCBzaW5jZSBjaGFyIGJlZ2FuIGl0cyBjdXJyZW50IG1vdmUgPj0gdGhlIHRpbWUgZm9yIGNoYXIgdG8gbW92ZSAxIHRpbGUuIHdlIHNldCBwb3NpdGlvbiB1c2luZyBwbGFjZUF0IGZ1bmN0aW9uXG4gICAgLy8gYWthOiBpZiBjaGFyIHN0aWxsIG1vdmluZ1xuXHRpZigodCAtIHRoaXMudGltZU1vdmVkKSA+PSB0aGlzLmRlbGF5TW92ZSkge1xuXHRcdHRoaXMucGxhY2VBdCh0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pO1xuXHR9IGVsc2Uge1xuICAgICAgICAvLyBjdXJyZW50IHBvc2l0aW9uIG9uIGNhbnZhc1xuXHRcdHRoaXMucG9zaXRpb25bMF0gPSAodGhpcy50aWxlRnJvbVswXSAqIHRpbGVXaWR0aCkgKyAoKHRpbGVXaWR0aC10aGlzLmRpbWVuc2lvbnNbMF0pLzIpO1xuXHRcdHRoaXMucG9zaXRpb25bMV0gPSAodGhpcy50aWxlRnJvbVsxXSAqIHRpbGVIZWlnaHQpICsgKCh0aWxlSGVpZ2h0LXRoaXMuZGltZW5zaW9uc1sxXSkvMik7XG5cbiAgICAgICAgLy8gaWYgY2hhciBpcyBtb3Zpbmcgb24geCBjb29yZGluYXRlLCBjYWxjdWxhdGUgcGl4ZWxzXG5cdFx0aWYodGhpcy50aWxlVG9bMF0gIT0gdGhpcy50aWxlRnJvbVswXSkge1xuICAgICAgICAgICAgLy8gZGlmZmVyZW5jZSA9IGRpc3RhbmNlIG1vdmVkXG4gICAgICAgICAgICAvLyBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZGVzdGluYXRpb24gdGlsZSAodGlsZVRvKSBpcyBsZWZ0IChvciBhYm92ZSksIG9yIHJpZ2h0IChvciBiZWxvdykgdGhlIHRpbGUgd2UgYXJlIG1vdmluZyBmcm9tICh0aWxlRnJvbSksIHdlIHN1YnRyYWN0IG9yIGFkZCB0aGlzIGFtb3VudCB0byB0aGUgQ2hhcmFjdGVycyBwb3NpdGlvbi4gXG5cdFx0XHRsZXQgZGlmZmVyZW5jZSA9ICh0aWxlV2lkdGggLyB0aGlzLmRlbGF5TW92ZSkgKiAodCAtIHRoaXMudGltZU1vdmVkKTtcblx0XHRcdHRoaXMucG9zaXRpb25bMF0rPSAodGhpcy50aWxlVG9bMF0gPCB0aGlzLnRpbGVGcm9tWzBdID8gMCAtIGRpZmZlcmVuY2UgOiBkaWZmZXJlbmNlKTtcblx0XHR9XG5cdCAgICBpZih0aGlzLnRpbGVUb1sxXSAhPSB0aGlzLnRpbGVGcm9tWzFdKSB7XG5cdFx0XHRsZXQgZGlmZmVyZW5jZSA9ICh0aWxlSGVpZ2h0IC8gdGhpcy5kZWxheU1vdmUpICogKHQtdGhpcy50aW1lTW92ZWQpO1xuXHRcdFx0dGhpcy5wb3NpdGlvblsxXSs9ICh0aGlzLnRpbGVUb1sxXTx0aGlzLnRpbGVGcm9tWzFdID8gMCAtIGRpZmZlcmVuY2UgOiBkaWZmZXJlbmNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByb3VuZCB4ICYgeSB0byB3aG9sZSBudW1iZXJcblx0XHR0aGlzLnBvc2l0aW9uWzBdID0gTWF0aC5yb3VuZCh0aGlzLnBvc2l0aW9uWzBdKTtcblx0XHR0aGlzLnBvc2l0aW9uWzFdID0gTWF0aC5yb3VuZCh0aGlzLnBvc2l0aW9uWzFdKTtcbiAgICB9XG4gICAgLy8gdHJ1ZSA9IGNoYXIgaXMgY3VycmVudGx5IG1vdmluZ1xuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuXG4vLyBjcmVhdGUgYSBjYW1lcmEgb2JqZWN0XG5sZXQgdmlld3BvcnQgPSB7XG4gICAgLy8gY2FudmFzIHdpZHRoIGFuZCBoZWlnaHRcbiAgICBzY3JlZW46IFswLDBdLFxuICAgIC8vIHRpbGUgY29vcmRpbmF0ZXMgb2YgdGhlIHRvcC1sZWZ0IGFyZWEgb2YgdGhlIG1hcFxuICAgIHN0YXJ0VGlsZTogWzAsMF0sXG4gICAgLy8gdGlsZSBjb29yZGluYXRlcyBvZiB0aGUgYm90dG9tLXJpZ2h0IGFyZWEgb2YgdGhlIG1hcFxuICAgIGVuZFRpbGU6IFswLDBdLFxuICAgIC8vIG9mZnNldCBpbiBwaXhlbHNcbiAgICBvZmZzZXQ6IFswLDBdLFxuICAgIC8vIHVwZGF0ZSBmdW5jdGlvbiwgeCB5IGlzIG91ciBjZW50ZXIgYXJlYVxuICAgIHVwZGF0ZTogZnVuY3Rpb24ob2Zmc2V0WCwgb2Zmc2V0WSkge1xuICAgICAgICAvLyBvZmZzZXQ6IGhhbGYgdGhlIGNhbnZhcyB3aWR0aCB8fCBoZWlnaHQgKHJvdW5kIGRvd24gdG8gd2hvbGUgbnVtKVxuXHRcdHRoaXMub2Zmc2V0WzBdID0gTWF0aC5mbG9vcigodGhpcy5zY3JlZW5bMF0vMikgLSBvZmZzZXRYKTtcbiAgICAgICAgdGhpcy5vZmZzZXRbMV0gPSBNYXRoLmZsb29yKCh0aGlzLnNjcmVlblsxXS8yKSAtIG9mZnNldFkpO1xuXG4gICAgICAgIC8vIHdlIGZpbmQgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSB0aWxlXG4gICAgICAgIGxldCB0aWxlID0gWyBNYXRoLmZsb29yKG9mZnNldFggLyB0aWxlV2lkdGgpLCBNYXRoLmZsb29yKG9mZnNldFkgLyB0aWxlSGVpZ2h0KSBdO1xuICAgICAgICAvLyAgY2FsY3VsYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgZmlyc3QgdGlsZSBvbiB0aGUgeCBheGlzIGJ5IGNhbGN1bHRpbmcgdGhlIG1heGltdW0gbnVtYmVyIG9mIHRpbGVzIHRoYXQgY2FuIGZpdCBpbiBoYWxmIG9mIHRoZSBzY3JlZW4gd2lkdGgsIGFuZCB0YWtpbmcgdGhhdCBudW1iZXIgYXdheSBmcm9tIHRoZSBjZW50cmUgdGlsZS5cbiAgICAgICAgLy8gIHJlbW92ZSBhbiBhZGRpdGlvbmFsIDEgdG8gYWxsb3cgZm9yIHRpbGVzIHRoYXQgYXJlIG5vdCBjb21wbGV0ZWx5IG9uIHRoZSBzY3JlZW4sIGJ1dCBvbmx5IHBhcnRpYWxseS5cbiAgICAgICAgdGhpcy5zdGFydFRpbGVbMF0gPSB0aWxlWzBdIC0gMSAtIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMF0vMikgLyB0aWxlV2lkdGgpO1xuXHRcdHRoaXMuc3RhcnRUaWxlWzFdID0gdGlsZVsxXSAtIDEgLSBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzFdLzIpIC8gdGlsZUhlaWdodCk7XG5cbiAgICAgICAgLy8gY2hlY2sgdG8gbWFrZSBzdXJlIHggb3IgeSBpcyBub3QgbGVzcyB0aGVuIDAgKG91cnNpZGUgdGhlIGJvdW5kcylcbiAgICAgICAgaWYodGhpcy5zdGFydFRpbGVbMF0gPCAwKSB7IHRoaXMuc3RhcnRUaWxlWzBdID0gMDsgfVxuXHRcdGlmKHRoaXMuc3RhcnRUaWxlWzFdIDwgMCkgeyB0aGlzLnN0YXJ0VGlsZVsxXSA9IDA7IH1cblxuICAgICAgICB0aGlzLmVuZFRpbGVbMF0gPSB0aWxlWzBdICsgMSArIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMF0vMikgLyB0aWxlV2lkdGgpO1xuXHRcdHRoaXMuZW5kVGlsZVsxXSA9IHRpbGVbMV0gKyAxICsgTWF0aC5jZWlsKCh0aGlzLnNjcmVlblsxXS8yKSAvIHRpbGVIZWlnaHQpO1xuXG5cdFx0aWYodGhpcy5lbmRUaWxlWzBdID49IG1hcFdpZHRoKSB7IHRoaXMuZW5kVGlsZVswXSA9IG1hcFdpZHRoIC0xOyB9XG5cdFx0aWYodGhpcy5lbmRUaWxlWzFdID49IG1hcEhlaWdodCkgeyB0aGlzLmVuZFRpbGVbMV0gPSBtYXBIZWlnaHQgLSAxOyB9XG4gICAgICAgIH1cbn07XG5cblxuLy8gaWYgY2hhciBjYW4gbW92ZSBpbiBhIHNwZWNpZmljIGRpcmVjXG5DaGFyYWN0ZXIucHJvdG90eXBlLmNhbk1vdmVUbyA9IGZ1bmN0aW9uKHgsIHkpXG57XG4gICAgLy8gaWYgeCBhbmQgeSBpcyBpbiBtYXAgYm91bmRcbiAgICBpZih4IDwgMCB8fCB4ID49IG1hcFdpZHRoIHx8IHkgPCAwIHx8IHkgPj0gbWFwSGVpZ2h0KSB7IHJldHVybiBmYWxzZTsgfVxuICAgIC8vIGlmIHRoZSB0aWxlIGlzIHBhdGggdGlsZSAob25seSBtb3ZlIGlmIGl0cyBhIHBhdGgpXG5cdGlmKHRpbGVUeXBlc1tnYW1lTWFwW3RvSW5kZXgoeCx5KV1dLmZsb29yIT1mbG9vclR5cGVzLnBhdGgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHJldHVybiB0cnVlO1xufTtcbkNoYXJhY3Rlci5wcm90b3R5cGUuY2FuTW92ZVVwID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNhbk1vdmVUbyh0aGlzLnRpbGVGcm9tWzBdLCB0aGlzLnRpbGVGcm9tWzFdLTEpOyB9O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5jYW5Nb3ZlRG93biA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jYW5Nb3ZlVG8odGhpcy50aWxlRnJvbVswXSwgdGhpcy50aWxlRnJvbVsxXSsxKTsgfTtcbkNoYXJhY3Rlci5wcm90b3R5cGUuY2FuTW92ZUxlZnQgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY2FuTW92ZVRvKHRoaXMudGlsZUZyb21bMF0tMSwgdGhpcy50aWxlRnJvbVsxXSk7IH07XG5DaGFyYWN0ZXIucHJvdG90eXBlLmNhbk1vdmVSaWdodCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jYW5Nb3ZlVG8odGhpcy50aWxlRnJvbVswXSsxLCB0aGlzLnRpbGVGcm9tWzFdKTsgfTtcblxuQ2hhcmFjdGVyLnByb3RvdHlwZS5tb3ZlTGVmdCA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMF0tPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5sZWZ0OyB9O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5tb3ZlUmlnaHQgPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzBdKz0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMucmlnaHQ7IH07XG5DaGFyYWN0ZXIucHJvdG90eXBlLm1vdmVVcCA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMV0tPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy51cDsgfTtcbkNoYXJhY3Rlci5wcm90b3R5cGUubW92ZURvd24gPSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzFdKz0gMTsgdGhpcy50aW1lTW92ZWQgPSB0OyB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMuZG93bjsgfTtcblxuXG5cbi8vIGNvbnZlcnQgeCwgeSBpbnRvIGluZGV4IGluIGdhbWVNYXAgYXJyXG5mdW5jdGlvbiB0b0luZGV4KHgsIHkpIHtcblx0cmV0dXJuKCh5ICogbWFwV2lkdGgpICsgeCk7XG59XG5cbi8vIGxvb3Agc3RhcnRzIHdoZW4gcGFnZSBkb25lIGxvYWRpbmdcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0Y3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKS5nZXRDb250ZXh0KFwiMmRcIik7XG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7XG4gICAgY3R4LmZvbnQgPSBcImJvbGQgMTBwdCBzYW5zLXNlcmlmXCI7XG4gICAgXG4gICAgLy8gYWRkIGV2ZW50TGlzdGVuZXJzIGZvciB0aGUga2V5ZG93bmEgYW5kIGtleXVwXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoZS5rZXlDb2RlPj0zNyAmJiBlLmtleUNvZGU8PTQwKSB7IGtleXNEb3duW2Uua2V5Q29kZV0gPSB0cnVlOyB9XG5cdH0pO1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZihlLmtleUNvZGU+PTM3ICYmIGUua2V5Q29kZTw9NDApIHsga2V5c0Rvd25bZS5rZXlDb2RlXSA9IGZhbHNlOyB9XG4gICAgfSk7XG5cbiAgICAvLyBjaGVja3MgdGhlIENhbnZhcyBkaW1lbnNpb25zIGFuZCBzdG9yZXMgaXQgaW4gdGhlIHZpZXdwb3J0IG9iamVjdHNcbiAgICB2aWV3cG9ydC5zY3JlZW4gPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKS53aWR0aCxcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKS5oZWlnaHRdO1xuICAgICAgICBcbiAgICB0aWxlc2V0ID0gbmV3IEltYWdlKCk7XG5cdHRpbGVzZXQub25lcnJvciA9IGZ1bmN0aW9uKClcblx0e1xuXHRcdGN0eCA9IG51bGw7XG5cdFx0YWxlcnQoXCJGYWlsZWQgbG9hZGluZyB0aWxlc2V0LlwiKTtcblx0fTtcblx0dGlsZXNldC5vbmxvYWQgPSBmdW5jdGlvbigpIHsgdGlsZXNldExvYWRlZCA9IHRydWU7IH07XG5cdHRpbGVzZXQuc3JjID0gdGlsZXNldFVSTDtcbn07XG5cblxuLy8gbWFpbiBmdW5jdGlvblxuZnVuY3Rpb24gZHJhd0dhbWUoKVxue1xuICAgIGlmKGN0eD09bnVsbCkgeyByZXR1cm47IH1cbiAgICBpZighdGlsZXNldExvYWRlZCkgeyByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpOyByZXR1cm47IH1cblxuXHRsZXQgY3VycmVudEZyYW1lVGltZSA9IERhdGUubm93KCk7XG4gICAgbGV0IHRpbWVFbGFwc2VkID0gY3VycmVudEZyYW1lVGltZSAtIGxhc3RGcmFtZVRpbWU7XG4gICAgXG4gICAgLy8gZnJhbWVjb3VudCBcblx0bGV0IHNlYyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKS8xMDAwKTtcblx0aWYoc2VjIT1jdXJyZW50U2Vjb25kKXtcblx0XHRjdXJyZW50U2Vjb25kID0gc2VjO1xuXHRcdGZyYW1lc0xhc3RTZWNvbmQgPSBmcmFtZUNvdW50O1xuXHRcdGZyYW1lQ291bnQgPSAxO1xuXHR9XG5cdGVsc2UgeyBmcmFtZUNvdW50Kys7IH1cblxuICAgIC8vIHBsYXllciBtb3ZlbWVudFxuXHRpZighcGxheWVyLnByb2Nlc3NNb3ZlbWVudChjdXJyZW50RnJhbWVUaW1lKSkge1xuXHRcdGlmKGtleXNEb3duWzM4XSAmJiBwbGF5ZXIuY2FuTW92ZVVwKCkpXHRcdHsgcGxheWVyLm1vdmVVcChjdXJyZW50RnJhbWVUaW1lKTsgfVxuXHRcdGVsc2UgaWYoa2V5c0Rvd25bNDBdICYmIHBsYXllci5jYW5Nb3ZlRG93bigpKVx0eyBwbGF5ZXIubW92ZURvd24oY3VycmVudEZyYW1lVGltZSk7IH1cblx0XHRlbHNlIGlmKGtleXNEb3duWzM3XSAmJiBwbGF5ZXIuY2FuTW92ZUxlZnQoKSlcdHsgcGxheWVyLm1vdmVMZWZ0KGN1cnJlbnRGcmFtZVRpbWUpOyB9XG5cdFx0ZWxzZSBpZihrZXlzRG93blszOV0gJiYgcGxheWVyLmNhbk1vdmVSaWdodCgpKVx0eyBwbGF5ZXIubW92ZVJpZ2h0KGN1cnJlbnRGcmFtZVRpbWUpOyB9XG4gICAgfVxuXG4gICAgLy8gc2V0IHRoZSB2aWV3cG9ydCBjZW50cmUgdG8gdGhlIHBsYXllciB0b3AvbGVmdCBwb3NpdGlvbiBwbHVzIGhhbGYgdGhlIHBsYXllcnMgd2lkdGgvaGVpZ2h0LlxuICAgICAgICB2aWV3cG9ydC51cGRhdGUocGxheWVyLnBvc2l0aW9uWzBdICsgKHBsYXllci5kaW1lbnNpb25zWzBdLzIpLFxuICAgICAgICAgICAgcGxheWVyLnBvc2l0aW9uWzFdICsgKHBsYXllci5kaW1lbnNpb25zWzFdLzIpKTtcbiAgICAgICAgLy8gZXJhc2UgYW55dGhpbmcgb24gdGhlIENhbnZhcyBmcm9tIHRoZSBsYXN0IGZyYW1lXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIHZpZXdwb3J0LnNjcmVlblswXSwgdmlld3BvcnQuc2NyZWVuWzFdKTtcbiAgICBcbiAgICAvLyBuZXN0ZWQgbG9vcHM6IHkgYW5kIHhcblx0XHRmb3IobGV0IHkgPSB2aWV3cG9ydC5zdGFydFRpbGVbMV07IHkgPD0gdmlld3BvcnQuZW5kVGlsZVsxXTsgKyt5KSB7XG5cdFx0ICAgIGZvcihsZXQgeCA9IHZpZXdwb3J0LnN0YXJ0VGlsZVswXTsgeCA8PSB2aWV3cG9ydC5lbmRUaWxlWzBdOyArK3gpIHtcbiAgICAgICAgICAgICAgICBsZXQgdGlsZSA9IHRpbGVUeXBlc1tnYW1lTWFwW3RvSW5kZXgoeCx5KV1dO1xuXHRcdFx0ICAgIGN0eC5kcmF3SW1hZ2UodGlsZXNldCxcblx0XHRcdFx0dGlsZS5zcHJpdGVbMF0ueCwgdGlsZS5zcHJpdGVbMF0ueSwgdGlsZS5zcHJpdGVbMF0udywgdGlsZS5zcHJpdGVbMF0uaCxcblx0XHRcdFx0dmlld3BvcnQub2Zmc2V0WzBdICsgKHggKiB0aWxlV2lkdGgpLCB2aWV3cG9ydC5vZmZzZXRbMV0gKyAoeSAqIHRpbGVIZWlnaHQpLFxuXHRcdFx0XHR0aWxlV2lkdGgsIHRpbGVIZWlnaHQpO1xuXHRcdH1cbiAgICB9XG5cblxuICAgIFxuICAgIC8vIGRyYXcgdGhlIHBsYXllclxuICAgIGxldCBzcHJpdGUgPSBwbGF5ZXIuc3ByaXRlc1twbGF5ZXIuZGlyZWN0aW9uXTtcblx0Y3R4LmRyYXdJbWFnZSh0aWxlc2V0LFxuXHRcdHNwcml0ZVswXS54LCBzcHJpdGVbMF0ueSwgc3ByaXRlWzBdLncsIHNwcml0ZVswXS5oLFxuXHRcdHZpZXdwb3J0Lm9mZnNldFswXSArIHBsYXllci5wb3NpdGlvblswXSwgdmlld3BvcnQub2Zmc2V0WzFdICsgcGxheWVyLnBvc2l0aW9uWzFdLFxuXHRcdHBsYXllci5kaW1lbnNpb25zWzBdLCBwbGF5ZXIuZGltZW5zaW9uc1sxXSk7XG5cblxuXHRsYXN0RnJhbWVUaW1lID0gY3VycmVudEZyYW1lVGltZTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=