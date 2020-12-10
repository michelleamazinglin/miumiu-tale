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

var gameMap = [0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 0, 0, 2, 3, 4, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 2, 0, 0, 2, 3, 1, 4, 4, 1, 1, 2, 2, 2, 2, 1, 1, 2, 2, 2, 2, 2, 0, 0, 2, 3, 1, 1, 4, 4, 1, 2, 3, 3, 2, 1, 1, 2, 1, 0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 2, 4, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 2, 4, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 2, 4, 4, 4, 4, 4, 1, 1, 1, 2, 2, 2, 2, 1, 0, 0, 1, 1, 1, 1, 2, 3, 2, 1, 1, 4, 1, 1, 1, 1, 3, 3, 2, 1, 0, 0, 1, 2, 2, 2, 2, 1, 2, 1, 1, 4, 1, 1, 1, 1, 1, 3, 2, 1, 0, 0, 1, 2, 3, 3, 2, 1, 2, 1, 1, 4, 4, 4, 4, 4, 4, 4, 2, 4, 4, 0, 1, 2, 3, 3, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 0, 0, 1, 2, 3, 4, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 0, 0, 3, 2, 3, 4, 4, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 2, 1, 0, 0, 3, 2, 3, 4, 4, 3, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 3, 0, 0, 3, 2, 3, 4, 1, 3, 2, 1, 3, 1, 1, 1, 2, 1, 1, 1, 2, 3, 0, 0, 1, 2, 2, 2, 2, 2, 2, 3, 3, 3, 1, 1, 2, 2, 2, 2, 2, 3, 0, 0, 1, 1, 1, 1, 1, 1, 3, 3, 3, 3, 3, 1, 1, 1, 1, 1, 1, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 每个地砖多少pixel

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJrZXlzRG93biIsImZsb29yVHlwZXMiLCJzb2xpZCIsInBhdGgiLCJ3YXRlciIsInRpbGVUeXBlcyIsImNvbG91ciIsImZsb29yIiwic3ByaXRlIiwieCIsInkiLCJ3IiwiaCIsImRpcmVjdGlvbnMiLCJ1cCIsInJpZ2h0IiwiZG93biIsImxlZnQiLCJ0aWxlc2V0IiwidGlsZXNldFVSTCIsInRpbGVzZXRMb2FkZWQiLCJwbGF5ZXIiLCJDaGFyYWN0ZXIiLCJ0aWxlRnJvbSIsInRpbGVUbyIsInRpbWVNb3ZlZCIsImRlbGF5TW92ZSIsImRpbWVuc2lvbnMiLCJwb3NpdGlvbiIsImRpcmVjdGlvbiIsInNwcml0ZXMiLCJwcm90b3R5cGUiLCJwbGFjZUF0IiwicHJvY2Vzc01vdmVtZW50IiwidCIsImRpZmZlcmVuY2UiLCJNYXRoIiwicm91bmQiLCJ2aWV3cG9ydCIsInNjcmVlbiIsInN0YXJ0VGlsZSIsImVuZFRpbGUiLCJvZmZzZXQiLCJ1cGRhdGUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsInRpbGUiLCJjZWlsIiwiY2FuTW92ZVRvIiwidG9JbmRleCIsImNhbk1vdmVVcCIsImNhbk1vdmVEb3duIiwiY2FuTW92ZUxlZnQiLCJjYW5Nb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsIm1vdmVSaWdodCIsIm1vdmVVcCIsIm1vdmVEb3duIiwid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3R2FtZSIsImZvbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJ3aWR0aCIsImhlaWdodCIsIkltYWdlIiwib25lcnJvciIsImFsZXJ0Iiwic3JjIiwiY3VycmVudEZyYW1lVGltZSIsIkRhdGUiLCJub3ciLCJ0aW1lRWxhcHNlZCIsInNlYyIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiZHJhd0ltYWdlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFHQSxJQUFJQSxHQUFHLEdBQUcsSUFBVixDLENBRUE7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHLENBQ2IsQ0FEYSxFQUNWLENBRFUsRUFDUCxDQURPLEVBQ0osQ0FESSxFQUNELENBREMsRUFDRSxD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LENBQWxCLENBSEQsRUFHdUJOLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixDQUFsQixDQUh2QjtBQU1BNUIsZUFBYSxHQUFHNEUsZ0JBQWhCO0FBQ0FaLHVCQUFxQixDQUFDQyxRQUFELENBQXJCO0FBQ0EsQzs7Ozs7Ozs7Ozs7QUNyU0QsdUMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Rpc3QvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiaW1wb3J0IFwiLi9zdHlsZXMvaW5kZXguc2Nzc1wiO1xuaW1wb3J0IFwiLi9zY3JpcHRzL21hcFwiO1xuXG5cblxuIiwiLy8gaSB3YW50IGEgY2FtZXJhIGZvbGxvd2luZyB0aGUgY2hhciBhcm91bmQgdGhlIG1hcFxuXG5cbmxldCBjdHggPSBudWxsO1xuXG4vLyBjcmVhdGUgYSBtYXAgd2l0aCAxMCoxMCB0aWxlXG5sZXQgZ2FtZU1hcCA9IFtcblx0MCwgMCwgNCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMiwgNCwgNCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMiwgMiwgMCxcblx0MCwgMiwgMywgNCwgNCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMiwgMiwgMCxcblx0MCwgMiwgMywgMSwgNCwgNCwgMSwgMSwgMiwgMiwgMiwgMiwgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMCxcblx0MCwgMiwgMywgMSwgMSwgNCwgNCwgMSwgMiwgMywgMywgMiwgMSwgMSwgMiwgMSwgMCwgMCwgMCwgMCxcblx0MCwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMywgMywgMiwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMiwgNCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMiwgNCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMiwgNCwgNCwgNCwgNCwgNCwgMSwgMSwgMSwgMiwgMiwgMiwgMiwgMSwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMiwgMywgMiwgMSwgMSwgNCwgMSwgMSwgMSwgMSwgMywgMywgMiwgMSwgMCxcblx0MCwgMSwgMiwgMiwgMiwgMiwgMSwgMiwgMSwgMSwgNCwgMSwgMSwgMSwgMSwgMSwgMywgMiwgMSwgMCxcblx0MCwgMSwgMiwgMywgMywgMiwgMSwgMiwgMSwgMSwgNCwgNCwgNCwgNCwgNCwgNCwgNCwgMiwgNCwgNCxcblx0MCwgMSwgMiwgMywgMywgMiwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMCxcblx0MCwgMSwgMiwgMywgNCwgMiwgMiwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCwgMSwgMiwgMSwgMCxcblx0MCwgMywgMiwgMywgNCwgNCwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMiwgMSwgMCwgMSwgMiwgMSwgMCxcblx0MCwgMywgMiwgMywgNCwgNCwgMywgMiwgMSwgMSwgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMiwgMywgMCxcblx0MCwgMywgMiwgMywgNCwgMSwgMywgMiwgMSwgMywgMSwgMSwgMSwgMiwgMSwgMSwgMSwgMiwgMywgMCxcblx0MCwgMSwgMiwgMiwgMiwgMiwgMiwgMiwgMywgMywgMywgMSwgMSwgMiwgMiwgMiwgMiwgMiwgMywgMCxcblx0MCwgMSwgMSwgMSwgMSwgMSwgMSwgMywgMywgMywgMywgMywgMSwgMSwgMSwgMSwgMSwgMSwgNCwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMFxuXTtcbi8vIOavj+S4quWcsOegluWkmuWwkXBpeGVsXG5sZXQgdGlsZVdpZHRoID0gNDA7XG5sZXQgdGlsZUhlaWdodCA9IDQwO1xuLy8g5Zyw5Zu+5aSn5bCP5bCx5pivMTAqMTBcbmxldCBtYXBXaWR0aCA9IDIwO1xubGV0IG1hcEhlaWdodCA9IDIwO1xuLy8gZnJhbWVyYXRlXG5sZXQgY3VycmVudFNlY29uZCA9IDA7XG5sZXQgZnJhbWVDb3VudCA9IDA7XG5sZXQgZnJhbWVzTGFzdFNlY29uZCA9IDA7XG5sZXQgbGFzdEZyYW1lVGltZSA9IDA7XG5cblxuLy8ga2V5Q29kZSA6IGJvb2xlYW4gdG8gdGVsbCB1cyB3aGljaCBvbmUgYXJlIHByZXNzZWRcbmxldCBrZXlzRG93biA9IHtcbiAgICAvLyAzNzogbGVmdFxuICAgIDM3IDogZmFsc2UsXG4gICAgLy8gMzg6IHVwXG4gICAgMzggOiBmYWxzZSxcbiAgICAvLyAzOTogcmlnaHRcbiAgICAzOSA6IGZhbHNlLFxuICAgIC8vIDQwOiBkb3duXG4gICAgNDAgOiBmYWxzZVxuICAgIC8vIDMyOiBzcGFjZVxufTtcblxuXG4vLyDlnLDmnb/np43nsbtcbmxldCBmbG9vclR5cGVzID0ge1xuICAgIHNvbGlkOiAwLFxuICAgIHBhdGg6IDEsXG4gICAgd2F0ZXI6IDJcbn07XG5cbi8vIOaVsOWtl++8iGdhbWVNYXDvvInlr7nlupTkuIrpopzoibLlkozlnLDmnb/np43nsbtcbi8vIDA65aKZ5aOBIDE66I2J5ZywIDI66ZmG5ZywIDM65oi/5a2QIDQ6IOawtFxubGV0IHRpbGVUeXBlcyA9IHtcblx0MCA6IHsgY29sb3VyOiBcIiM3OTNkNGNcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQsIHNwcml0ZTpbe3g6MCx5OjAsdzo0MCxoOjQwfV0gfSxcblx0MSA6IHsgY29sb3VyOiBcIiM2ZGY3YjFcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo0MCx5OjAsdzo0MCxoOjQwfV0gfSxcblx0MiA6IHsgY29sb3VyOiBcIiNjOTc0NjFcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aCwgc3ByaXRlOlt7eDo4MCx5OjAsdzo0MCxoOjQwfV1cdH0sXG5cdDMgOiB7IGNvbG91cjogXCIjZDc3YzRiXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLCBzcHJpdGU6W3t4OjEyMCx5OjAsdzo0MCxoOjQwfV0gfSxcblx0NCA6IHsgY29sb3VyOiBcIiMwMDhkZjBcIiwgZmxvb3I6IGZsb29yVHlwZXMud2F0ZXIsIHNwcml0ZTpbe3g6MTYwLHk6MCx3OjQwLGg6NDB9XSB9XG59O1xuXG5sZXQgZGlyZWN0aW9ucyA9IHtcblx0dXBcdDogMCxcblx0cmlnaHQ6IDEsXG5cdGRvd246IDIsXG5cdGxlZnQ6IDNcbn07XG5cbmxldCB0aWxlc2V0ID0gbnVsbCwgdGlsZXNldFVSTCA9IFwic3JjL2ltYWdlcy90aWxlc2V0ZXN0dC5wbmdcIiwgdGlsZXNldExvYWRlZCA9IGZhbHNlO1xuXG5cbi8vIOWIm+W7uuS4gOS4quinkuiJsiAobWl1bWl1KVxubGV0IHBsYXllciA9IG5ldyBDaGFyYWN0ZXIoKTtcbi8vIGluIGNsYXNzIHNvIHdlIGNhbiBhZGQgbW9yZSBjaGFyIGluIGZ1dHVyZVxuZnVuY3Rpb24gQ2hhcmFjdGVyKCkge1xuXHR0aGlzLnRpbGVGcm9tXHQ9IFsxLDFdO1xuICAgIHRoaXMudGlsZVRvXHRcdD0gWzEsMV07XG4gICAgLy8gdGltZSBpbiBtaWxsc2Vjb25kc1xuICAgIHRoaXMudGltZU1vdmVkXHQ9IDA7XG4gICAgdGhpcy5kZWxheU1vdmVcdD0gNzAwO1xuXHR0aGlzLmRpbWVuc2lvbnNcdD0gWzMwLDMwXTtcbiAgICB0aGlzLnBvc2l0aW9uXHQ9IFs0NSw0NV07XG4gICAgXG4gICAgdGhpcy5kaXJlY3Rpb25cdD0gZGlyZWN0aW9ucy51cDtcblx0dGhpcy5zcHJpdGVzID0ge307XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLnVwXVx0XHQ9IFt7eDowLHk6MTIwLHc6MzAsaDozMH1dO1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy5yaWdodF1cdD0gW3t4OjAseToxNTAsdzozMCxoOjMwfV07XG5cdHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLmRvd25dXHQ9IFt7eDowLHk6MTgwLHc6MzAsaDozMH1dO1xuXHR0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy5sZWZ0XVx0PSBbe3g6MCx5OjIxMCx3OjMwLGg6MzB9XTtcbn1cblxuXG4vLyBwbGFjZSBjaGFyIGluIGEgc3BlY2l0aWMgdGlsZSBcbkNoYXJhY3Rlci5wcm90b3R5cGUucGxhY2VBdCA9IGZ1bmN0aW9uKHgsIHkpIHtcblx0dGhpcy50aWxlRnJvbVx0PSBbeCx5XTtcbiAgICB0aGlzLnRpbGVUb1x0XHQ9IFt4LHldO1xuICAgIC8vIHggYW5kIHkgcG9zaXRpb24gb2YgdGhlIHRpbGUuIHVwZGF0ZSB0aGUgdGlsZUZyb20gYW5kIHRpbGVUbyBwcm9wZXJ0aWVzIHRvIHRoZSBuZXcgdGlsZSBjb29yZGluYXRlc1xuICAgIC8vIGNhbGN1bGF0ZXMgdGhlIHBpeGVsIHBvc2l0aW9uIG9mIHRoZSBjaGFyYWN5ZXIgdXNlIGJlbG93XG5cdHRoaXMucG9zaXRpb25cdD0gWygoIHRpbGVXaWR0aCAqIHggKSsoICh0aWxlV2lkdGggLSB0aGlzLmRpbWVuc2lvbnNbMF0pIC8gMiApKSxcblx0XHQoKCB0aWxlSGVpZ2h0ICogeSApKyggKHRpbGVIZWlnaHQgLSB0aGlzLmRpbWVuc2lvbnNbMV0pIC8gMiApKV07XG59O1xuXG4vLyBjYWxjdWxhdGlvbnMgZWFjaCBmcmFtZSB0byBmaW5kIHBvc2l0aW9uLCBwYXNzIGluIGEgdGltZVxuQ2hhcmFjdGVyLnByb3RvdHlwZS5wcm9jZXNzTW92ZW1lbnQgPSBmdW5jdGlvbih0KSB7XG4gICAgLy8gaWYgY2hhciB0aWxlVG8gPT0gdGlsZUZyb20gY2hhciBpcyBub3QgbW92aW5nLCBzbyByZXR1cm4gZmFsc2Vcblx0aWYoIHRoaXMudGlsZUZyb21bMF0gPT0gdGhpcy50aWxlVG9bMF0gJiYgdGhpcy50aWxlRnJvbVsxXSA9PSB0aGlzLnRpbGVUb1sxXSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAvLyBpZiB0aGUgYW1vdW50IG9mIHRpbWUgcGFzc2VkIHNpbmNlIGNoYXIgYmVnYW4gaXRzIGN1cnJlbnQgbW92ZSA+PSB0aGUgdGltZSBmb3IgY2hhciB0byBtb3ZlIDEgdGlsZS4gd2Ugc2V0IHBvc2l0aW9uIHVzaW5nIHBsYWNlQXQgZnVuY3Rpb25cbiAgICAvLyBha2E6IGlmIGNoYXIgc3RpbGwgbW92aW5nXG5cdGlmKCh0IC0gdGhpcy50aW1lTW92ZWQpID49IHRoaXMuZGVsYXlNb3ZlKSB7XG5cdFx0dGhpcy5wbGFjZUF0KHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSk7XG5cdH0gZWxzZSB7XG4gICAgICAgIC8vIGN1cnJlbnQgcG9zaXRpb24gb24gY2FudmFzXG5cdFx0dGhpcy5wb3NpdGlvblswXSA9ICh0aGlzLnRpbGVGcm9tWzBdICogdGlsZVdpZHRoKSArICgodGlsZVdpZHRoLXRoaXMuZGltZW5zaW9uc1swXSkvMik7XG5cdFx0dGhpcy5wb3NpdGlvblsxXSA9ICh0aGlzLnRpbGVGcm9tWzFdICogdGlsZUhlaWdodCkgKyAoKHRpbGVIZWlnaHQtdGhpcy5kaW1lbnNpb25zWzFdKS8yKTtcblxuICAgICAgICAvLyBpZiBjaGFyIGlzIG1vdmluZyBvbiB4IGNvb3JkaW5hdGUsIGNhbGN1bGF0ZSBwaXhlbHNcblx0XHRpZih0aGlzLnRpbGVUb1swXSAhPSB0aGlzLnRpbGVGcm9tWzBdKSB7XG4gICAgICAgICAgICAvLyBkaWZmZXJlbmNlID0gZGlzdGFuY2UgbW92ZWRcbiAgICAgICAgICAgIC8vIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBkZXN0aW5hdGlvbiB0aWxlICh0aWxlVG8pIGlzIGxlZnQgKG9yIGFib3ZlKSwgb3IgcmlnaHQgKG9yIGJlbG93KSB0aGUgdGlsZSB3ZSBhcmUgbW92aW5nIGZyb20gKHRpbGVGcm9tKSwgd2Ugc3VidHJhY3Qgb3IgYWRkIHRoaXMgYW1vdW50IHRvIHRoZSBDaGFyYWN0ZXJzIHBvc2l0aW9uLiBcblx0XHRcdGxldCBkaWZmZXJlbmNlID0gKHRpbGVXaWR0aCAvIHRoaXMuZGVsYXlNb3ZlKSAqICh0IC0gdGhpcy50aW1lTW92ZWQpO1xuXHRcdFx0dGhpcy5wb3NpdGlvblswXSs9ICh0aGlzLnRpbGVUb1swXSA8IHRoaXMudGlsZUZyb21bMF0gPyAwIC0gZGlmZmVyZW5jZSA6IGRpZmZlcmVuY2UpO1xuXHRcdH1cblx0ICAgIGlmKHRoaXMudGlsZVRvWzFdICE9IHRoaXMudGlsZUZyb21bMV0pIHtcblx0XHRcdGxldCBkaWZmZXJlbmNlID0gKHRpbGVIZWlnaHQgLyB0aGlzLmRlbGF5TW92ZSkgKiAodC10aGlzLnRpbWVNb3ZlZCk7XG5cdFx0XHR0aGlzLnBvc2l0aW9uWzFdKz0gKHRoaXMudGlsZVRvWzFdPHRoaXMudGlsZUZyb21bMV0gPyAwIC0gZGlmZmVyZW5jZSA6IGRpZmZlcmVuY2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJvdW5kIHggJiB5IHRvIHdob2xlIG51bWJlclxuXHRcdHRoaXMucG9zaXRpb25bMF0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMF0pO1xuXHRcdHRoaXMucG9zaXRpb25bMV0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMV0pO1xuICAgIH1cbiAgICAvLyB0cnVlID0gY2hhciBpcyBjdXJyZW50bHkgbW92aW5nXG5cdHJldHVybiB0cnVlO1xufVxuXG5cbi8vIGNyZWF0ZSBhIGNhbWVyYSBvYmplY3RcbmxldCB2aWV3cG9ydCA9IHtcbiAgICAvLyBjYW52YXMgd2lkdGggYW5kIGhlaWdodFxuICAgIHNjcmVlbjogWzAsMF0sXG4gICAgLy8gdGlsZSBjb29yZGluYXRlcyBvZiB0aGUgdG9wLWxlZnQgYXJlYSBvZiB0aGUgbWFwXG4gICAgc3RhcnRUaWxlOiBbMCwwXSxcbiAgICAvLyB0aWxlIGNvb3JkaW5hdGVzIG9mIHRoZSBib3R0b20tcmlnaHQgYXJlYSBvZiB0aGUgbWFwXG4gICAgZW5kVGlsZTogWzAsMF0sXG4gICAgLy8gb2Zmc2V0IGluIHBpeGVsc1xuICAgIG9mZnNldDogWzAsMF0sXG4gICAgLy8gdXBkYXRlIGZ1bmN0aW9uLCB4IHkgaXMgb3VyIGNlbnRlciBhcmVhXG4gICAgdXBkYXRlOiBmdW5jdGlvbihvZmZzZXRYLCBvZmZzZXRZKSB7XG4gICAgICAgIC8vIG9mZnNldDogaGFsZiB0aGUgY2FudmFzIHdpZHRoIHx8IGhlaWdodCAocm91bmQgZG93biB0byB3aG9sZSBudW0pXG5cdFx0dGhpcy5vZmZzZXRbMF0gPSBNYXRoLmZsb29yKCh0aGlzLnNjcmVlblswXS8yKSAtIG9mZnNldFgpO1xuICAgICAgICB0aGlzLm9mZnNldFsxXSA9IE1hdGguZmxvb3IoKHRoaXMuc2NyZWVuWzFdLzIpIC0gb2Zmc2V0WSk7XG5cbiAgICAgICAgLy8gd2UgZmluZCB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIHRpbGVcbiAgICAgICAgbGV0IHRpbGUgPSBbIE1hdGguZmxvb3Iob2Zmc2V0WCAvIHRpbGVXaWR0aCksIE1hdGguZmxvb3Iob2Zmc2V0WSAvIHRpbGVIZWlnaHQpIF07XG4gICAgICAgIC8vICBjYWxjdWxhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCB0aWxlIG9uIHRoZSB4IGF4aXMgYnkgY2FsY3VsdGluZyB0aGUgbWF4aW11bSBudW1iZXIgb2YgdGlsZXMgdGhhdCBjYW4gZml0IGluIGhhbGYgb2YgdGhlIHNjcmVlbiB3aWR0aCwgYW5kIHRha2luZyB0aGF0IG51bWJlciBhd2F5IGZyb20gdGhlIGNlbnRyZSB0aWxlLlxuICAgICAgICAvLyAgcmVtb3ZlIGFuIGFkZGl0aW9uYWwgMSB0byBhbGxvdyBmb3IgdGlsZXMgdGhhdCBhcmUgbm90IGNvbXBsZXRlbHkgb24gdGhlIHNjcmVlbiwgYnV0IG9ubHkgcGFydGlhbGx5LlxuICAgICAgICB0aGlzLnN0YXJ0VGlsZVswXSA9IHRpbGVbMF0gLSAxIC0gTWF0aC5jZWlsKCh0aGlzLnNjcmVlblswXS8yKSAvIHRpbGVXaWR0aCk7XG5cdFx0dGhpcy5zdGFydFRpbGVbMV0gPSB0aWxlWzFdIC0gMSAtIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMV0vMikgLyB0aWxlSGVpZ2h0KTtcblxuICAgICAgICAvLyBjaGVjayB0byBtYWtlIHN1cmUgeCBvciB5IGlzIG5vdCBsZXNzIHRoZW4gMCAob3Vyc2lkZSB0aGUgYm91bmRzKVxuICAgICAgICBpZih0aGlzLnN0YXJ0VGlsZVswXSA8IDApIHsgdGhpcy5zdGFydFRpbGVbMF0gPSAwOyB9XG5cdFx0aWYodGhpcy5zdGFydFRpbGVbMV0gPCAwKSB7IHRoaXMuc3RhcnRUaWxlWzFdID0gMDsgfVxuXG4gICAgICAgIHRoaXMuZW5kVGlsZVswXSA9IHRpbGVbMF0gKyAxICsgTWF0aC5jZWlsKCh0aGlzLnNjcmVlblswXS8yKSAvIHRpbGVXaWR0aCk7XG5cdFx0dGhpcy5lbmRUaWxlWzFdID0gdGlsZVsxXSArIDEgKyBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzFdLzIpIC8gdGlsZUhlaWdodCk7XG5cblx0XHRpZih0aGlzLmVuZFRpbGVbMF0gPj0gbWFwV2lkdGgpIHsgdGhpcy5lbmRUaWxlWzBdID0gbWFwV2lkdGggLTE7IH1cblx0XHRpZih0aGlzLmVuZFRpbGVbMV0gPj0gbWFwSGVpZ2h0KSB7IHRoaXMuZW5kVGlsZVsxXSA9IG1hcEhlaWdodCAtIDE7IH1cbiAgICAgICAgfVxufTtcblxuXG4vLyBpZiBjaGFyIGNhbiBtb3ZlIGluIGEgc3BlY2lmaWMgZGlyZWNcbkNoYXJhY3Rlci5wcm90b3R5cGUuY2FuTW92ZVRvID0gZnVuY3Rpb24oeCwgeSlcbntcbiAgICAvLyBpZiB4IGFuZCB5IGlzIGluIG1hcCBib3VuZFxuICAgIGlmKHggPCAwIHx8IHggPj0gbWFwV2lkdGggfHwgeSA8IDAgfHwgeSA+PSBtYXBIZWlnaHQpIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgLy8gaWYgdGhlIHRpbGUgaXMgcGF0aCB0aWxlIChvbmx5IG1vdmUgaWYgaXRzIGEgcGF0aClcblx0aWYodGlsZVR5cGVzW2dhbWVNYXBbdG9JbmRleCh4LHkpXV0uZmxvb3IhPWZsb29yVHlwZXMucGF0aCkgeyByZXR1cm4gZmFsc2U7IH1cblx0cmV0dXJuIHRydWU7XG59O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5jYW5Nb3ZlVXAgPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY2FuTW92ZVRvKHRoaXMudGlsZUZyb21bMF0sIHRoaXMudGlsZUZyb21bMV0tMSk7IH07XG5DaGFyYWN0ZXIucHJvdG90eXBlLmNhbk1vdmVEb3duID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNhbk1vdmVUbyh0aGlzLnRpbGVGcm9tWzBdLCB0aGlzLnRpbGVGcm9tWzFdKzEpOyB9O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5jYW5Nb3ZlTGVmdCA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jYW5Nb3ZlVG8odGhpcy50aWxlRnJvbVswXS0xLCB0aGlzLnRpbGVGcm9tWzFdKTsgfTtcbkNoYXJhY3Rlci5wcm90b3R5cGUuY2FuTW92ZVJpZ2h0ID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNhbk1vdmVUbyh0aGlzLnRpbGVGcm9tWzBdKzEsIHRoaXMudGlsZUZyb21bMV0pOyB9O1xuXG5DaGFyYWN0ZXIucHJvdG90eXBlLm1vdmVMZWZ0ID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1swXS09IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLmxlZnQ7IH07XG5DaGFyYWN0ZXIucHJvdG90eXBlLm1vdmVSaWdodCA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMF0rPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5yaWdodDsgfTtcbkNoYXJhY3Rlci5wcm90b3R5cGUubW92ZVVwID0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1sxXS09IDE7IHRoaXMudGltZU1vdmVkID0gdDsgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLnVwOyB9O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5tb3ZlRG93biA9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMV0rPSAxOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5kb3duOyB9O1xuXG5cblxuLy8gY29udmVydCB4LCB5IGludG8gaW5kZXggaW4gZ2FtZU1hcCBhcnJcbmZ1bmN0aW9uIHRvSW5kZXgoeCwgeSkge1xuXHRyZXR1cm4oKHkgKiBtYXBXaWR0aCkgKyB4KTtcbn1cblxuLy8gbG9vcCBzdGFydHMgd2hlbiBwYWdlIGRvbmUgbG9hZGluZ1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpLmdldENvbnRleHQoXCIyZFwiKTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAxMHB0IHNhbnMtc2VyaWZcIjtcbiAgICBcbiAgICAvLyBhZGQgZXZlbnRMaXN0ZW5lcnMgZm9yIHRoZSBrZXlkb3duYSBhbmQga2V5dXBcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZihlLmtleUNvZGU+PTM3ICYmIGUua2V5Q29kZTw9NDApIHsga2V5c0Rvd25bZS5rZXlDb2RlXSA9IHRydWU7IH1cblx0fSk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuXHRcdGlmKGUua2V5Q29kZT49MzcgJiYgZS5rZXlDb2RlPD00MCkgeyBrZXlzRG93bltlLmtleUNvZGVdID0gZmFsc2U7IH1cbiAgICB9KTtcblxuICAgIC8vIGNoZWNrcyB0aGUgQ2FudmFzIGRpbWVuc2lvbnMgYW5kIHN0b3JlcyBpdCBpbiB0aGUgdmlld3BvcnQgb2JqZWN0c1xuICAgIHZpZXdwb3J0LnNjcmVlbiA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpLndpZHRoLFxuICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpLmhlaWdodF07XG4gICAgICAgIFxuICAgIHRpbGVzZXQgPSBuZXcgSW1hZ2UoKTtcblx0dGlsZXNldC5vbmVycm9yID0gZnVuY3Rpb24oKVxuXHR7XG5cdFx0Y3R4ID0gbnVsbDtcblx0XHRhbGVydChcIkZhaWxlZCBsb2FkaW5nIHRpbGVzZXQuXCIpO1xuXHR9O1xuXHR0aWxlc2V0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkgeyB0aWxlc2V0TG9hZGVkID0gdHJ1ZTsgfTtcblx0dGlsZXNldC5zcmMgPSB0aWxlc2V0VVJMO1xufTtcblxuXG4vLyBtYWluIGZ1bmN0aW9uXG5mdW5jdGlvbiBkcmF3R2FtZSgpXG57XG4gICAgaWYoY3R4PT1udWxsKSB7IHJldHVybjsgfVxuICAgIGlmKCF0aWxlc2V0TG9hZGVkKSB7IHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7IHJldHVybjsgfVxuXG5cdGxldCBjdXJyZW50RnJhbWVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBsZXQgdGltZUVsYXBzZWQgPSBjdXJyZW50RnJhbWVUaW1lIC0gbGFzdEZyYW1lVGltZTtcbiAgICBcbiAgICAvLyBmcmFtZWNvdW50IFxuXHRsZXQgc2VjID0gTWF0aC5mbG9vcihEYXRlLm5vdygpLzEwMDApO1xuXHRpZihzZWMhPWN1cnJlbnRTZWNvbmQpe1xuXHRcdGN1cnJlbnRTZWNvbmQgPSBzZWM7XG5cdFx0ZnJhbWVzTGFzdFNlY29uZCA9IGZyYW1lQ291bnQ7XG5cdFx0ZnJhbWVDb3VudCA9IDE7XG5cdH1cblx0ZWxzZSB7IGZyYW1lQ291bnQrKzsgfVxuXG4gICAgLy8gcGxheWVyIG1vdmVtZW50XG5cdGlmKCFwbGF5ZXIucHJvY2Vzc01vdmVtZW50KGN1cnJlbnRGcmFtZVRpbWUpKSB7XG5cdFx0aWYoa2V5c0Rvd25bMzhdICYmIHBsYXllci5jYW5Nb3ZlVXAoKSlcdFx0eyBwbGF5ZXIubW92ZVVwKGN1cnJlbnRGcmFtZVRpbWUpOyB9XG5cdFx0ZWxzZSBpZihrZXlzRG93bls0MF0gJiYgcGxheWVyLmNhbk1vdmVEb3duKCkpXHR7IHBsYXllci5tb3ZlRG93bihjdXJyZW50RnJhbWVUaW1lKTsgfVxuXHRcdGVsc2UgaWYoa2V5c0Rvd25bMzddICYmIHBsYXllci5jYW5Nb3ZlTGVmdCgpKVx0eyBwbGF5ZXIubW92ZUxlZnQoY3VycmVudEZyYW1lVGltZSk7IH1cblx0XHRlbHNlIGlmKGtleXNEb3duWzM5XSAmJiBwbGF5ZXIuY2FuTW92ZVJpZ2h0KCkpXHR7IHBsYXllci5tb3ZlUmlnaHQoY3VycmVudEZyYW1lVGltZSk7IH1cbiAgICB9XG5cbiAgICAvLyBzZXQgdGhlIHZpZXdwb3J0IGNlbnRyZSB0byB0aGUgcGxheWVyIHRvcC9sZWZ0IHBvc2l0aW9uIHBsdXMgaGFsZiB0aGUgcGxheWVycyB3aWR0aC9oZWlnaHQuXG4gICAgICAgIHZpZXdwb3J0LnVwZGF0ZShwbGF5ZXIucG9zaXRpb25bMF0gKyAocGxheWVyLmRpbWVuc2lvbnNbMF0vMiksXG4gICAgICAgICAgICBwbGF5ZXIucG9zaXRpb25bMV0gKyAocGxheWVyLmRpbWVuc2lvbnNbMV0vMikpO1xuICAgICAgICAvLyBlcmFzZSBhbnl0aGluZyBvbiB0aGUgQ2FudmFzIGZyb20gdGhlIGxhc3QgZnJhbWVcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdmlld3BvcnQuc2NyZWVuWzBdLCB2aWV3cG9ydC5zY3JlZW5bMV0pO1xuICAgIFxuICAgIC8vIG5lc3RlZCBsb29wczogeSBhbmQgeFxuXHRcdGZvcihsZXQgeSA9IHZpZXdwb3J0LnN0YXJ0VGlsZVsxXTsgeSA8PSB2aWV3cG9ydC5lbmRUaWxlWzFdOyArK3kpIHtcblx0XHQgICAgZm9yKGxldCB4ID0gdmlld3BvcnQuc3RhcnRUaWxlWzBdOyB4IDw9IHZpZXdwb3J0LmVuZFRpbGVbMF07ICsreCkge1xuICAgICAgICAgICAgICAgIGxldCB0aWxlID0gdGlsZVR5cGVzW2dhbWVNYXBbdG9JbmRleCh4LHkpXV07XG5cdFx0XHQgICAgY3R4LmRyYXdJbWFnZSh0aWxlc2V0LFxuXHRcdFx0XHR0aWxlLnNwcml0ZVswXS54LCB0aWxlLnNwcml0ZVswXS55LCB0aWxlLnNwcml0ZVswXS53LCB0aWxlLnNwcml0ZVswXS5oLFxuXHRcdFx0XHR2aWV3cG9ydC5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCksIHZpZXdwb3J0Lm9mZnNldFsxXSArICh5ICogdGlsZUhlaWdodCksXG5cdFx0XHRcdHRpbGVXaWR0aCwgdGlsZUhlaWdodCk7XG5cdFx0fVxuICAgIH1cblxuXG4gICAgXG4gICAgLy8gZHJhdyB0aGUgcGxheWVyXG4gICAgbGV0IHNwcml0ZSA9IHBsYXllci5zcHJpdGVzW3BsYXllci5kaXJlY3Rpb25dO1xuXHRjdHguZHJhd0ltYWdlKHRpbGVzZXQsXG5cdFx0c3ByaXRlWzBdLngsIHNwcml0ZVswXS55LCBzcHJpdGVbMF0udywgc3ByaXRlWzBdLmgsXG5cdFx0dmlld3BvcnQub2Zmc2V0WzBdICsgcGxheWVyLnBvc2l0aW9uWzBdLCB2aWV3cG9ydC5vZmZzZXRbMV0gKyBwbGF5ZXIucG9zaXRpb25bMV0sXG5cdFx0cGxheWVyLmRpbWVuc2lvbnNbMF0sIHBsYXllci5kaW1lbnNpb25zWzFdKTtcblxuXG5cdGxhc3RGcmFtZVRpbWUgPSBjdXJyZW50RnJhbWVUaW1lO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==