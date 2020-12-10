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
    colour: "#685b48",
    floor: floorTypes.solid,
    sprite: [{
      x: 0,
      y: 0,
      w: 40,
      h: 40
    }]
  },
  1: {
    colour: "#5aa457",
    floor: floorTypes.path,
    sprite: [{
      x: 40,
      y: 0,
      w: 40,
      h: 40
    }]
  },
  2: {
    colour: "#e8bd7a",
    floor: floorTypes.path,
    sprite: [{
      x: 80,
      y: 0,
      w: 40,
      h: 40
    }]
  },
  3: {
    colour: "#286625",
    floor: floorTypes.solid,
    sprite: [{
      x: 120,
      y: 0,
      w: 40,
      h: 40
    }]
  },
  4: {
    colour: "#678fd9",
    floor: floorTypes.water,
    sprite: [{
      x: 160,
      y: 0,
      w: 40,
      h: 40
    }]
  }
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
};

Character.prototype.moveRight = function (t) {
  this.tileTo[0] += 1;
  this.timeMoved = t;
};

Character.prototype.moveUp = function (t) {
  this.tileTo[1] -= 1;
  this.timeMoved = t;
};

Character.prototype.moveDown = function (t) {
  this.tileTo[1] += 1;
  this.timeMoved = t;
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
}; // main function


function drawGame() {
  if (ctx == null) {
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
      ctx.fillStyle = tileTypes[gameMap[toIndex(x, y)]].colour;
      ctx.fillRect(viewport.offset[0] + x * tileWidth, viewport.offset[1] + y * tileHeight, tileWidth, tileHeight);
    }
  } // draw the player


  ctx.fillStyle = "#fb9585";
  ctx.fillRect(viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1], player.dimensions[0], player.dimensions[1]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJrZXlzRG93biIsImZsb29yVHlwZXMiLCJzb2xpZCIsInBhdGgiLCJ3YXRlciIsInRpbGVUeXBlcyIsImNvbG91ciIsImZsb29yIiwic3ByaXRlIiwieCIsInkiLCJ3IiwiaCIsInRpbGVzZXQiLCJ0aWxlc2V0VVJMIiwidGlsZXNldExvYWRlZCIsInBsYXllciIsIkNoYXJhY3RlciIsInRpbGVGcm9tIiwidGlsZVRvIiwidGltZU1vdmVkIiwiZGVsYXlNb3ZlIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwicHJvdG90eXBlIiwicGxhY2VBdCIsInByb2Nlc3NNb3ZlbWVudCIsInQiLCJkaWZmZXJlbmNlIiwiTWF0aCIsInJvdW5kIiwidmlld3BvcnQiLCJzY3JlZW4iLCJzdGFydFRpbGUiLCJlbmRUaWxlIiwib2Zmc2V0IiwidXBkYXRlIiwib2Zmc2V0WCIsIm9mZnNldFkiLCJ0aWxlIiwiY2VpbCIsImNhbk1vdmVUbyIsInRvSW5kZXgiLCJjYW5Nb3ZlVXAiLCJjYW5Nb3ZlRG93biIsImNhbk1vdmVMZWZ0IiwiY2FuTW92ZVJpZ2h0IiwibW92ZUxlZnQiLCJtb3ZlUmlnaHQiLCJtb3ZlVXAiLCJtb3ZlRG93biIsIndpbmRvdyIsIm9ubG9hZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJnZXRDb250ZXh0IiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiZHJhd0dhbWUiLCJmb250IiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJrZXlDb2RlIiwid2lkdGgiLCJoZWlnaHQiLCJjdXJyZW50RnJhbWVUaW1lIiwiRGF0ZSIsIm5vdyIsInRpbWVFbGFwc2VkIiwic2VjIiwiZmlsbFN0eWxlIiwiZmlsbFJlY3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNBQTtBQUdBLElBQUlBLEdBQUcsR0FBRyxJQUFWLEMsQ0FFQTs7QUFDQSxJQUFJQyxPQUFPLEdBQUcsQ0FDYixDQURhLEVBQ1YsQ0FEVSxFQUNQLENBRE8sRUFDSixDQURJLEVBQ0QsQ0FEQyxFQUNFLENBREYsRUFDSyxDQURMLEVBQ1EsQ0FEUixFQUNXLENBRFgsRUFDYyxDQURkLEVBQ2lCLENBRGpCLEVBQ29CLENBRHBCLEVBQ3VCLENBRHZCLEVBQzBCLENBRDFCLEVBQzZCLENBRDdCLEVB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TSxDQUFDTyxRQUFQLENBQWdCLENBQWhCLENBQTNFLEVBQ0NQLE1BQU0sQ0FBQ00sVUFBUCxDQUFrQixDQUFsQixDQURELEVBQ3VCTixNQUFNLENBQUNNLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FEdkI7QUFJQXZCLGVBQWEsR0FBR2lFLGdCQUFoQjtBQUNBUix1QkFBcUIsQ0FBQ0MsUUFBRCxDQUFyQjtBQUNBLEM7Ozs7Ozs7Ozs7O0FDM1FELHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9tYXBcIjtcblxuXG5cbiIsIi8vIGkgd2FudCBhIGNhbWVyYSBmb2xsb3dpbmcgdGhlIGNoYXIgYXJvdW5kIHRoZSBtYXBcblxuXG5sZXQgY3R4ID0gbnVsbDtcblxuLy8gY3JlYXRlIGEgbWFwIHdpdGggMTAqMTAgdGlsZVxubGV0IGdhbWVNYXAgPSBbXG5cdDAsIDAsIDQsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDIsIDQsIDQsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDIsIDIsIDAsXG5cdDAsIDIsIDMsIDQsIDQsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDIsIDIsIDAsXG5cdDAsIDIsIDMsIDEsIDQsIDQsIDEsIDEsIDIsIDIsIDIsIDIsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDMsIDEsIDEsIDQsIDQsIDEsIDIsIDMsIDMsIDIsIDEsIDEsIDIsIDEsIDAsIDAsIDAsIDAsXG5cdDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDMsIDMsIDIsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDIsIDQsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDEsIDEsIDEsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDIsIDQsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDEsIDEsIDEsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDIsIDQsIDQsIDQsIDQsIDQsIDEsIDEsIDEsIDIsIDIsIDIsIDIsIDEsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDIsIDMsIDIsIDEsIDEsIDQsIDEsIDEsIDEsIDEsIDMsIDMsIDIsIDEsIDAsXG5cdDAsIDEsIDIsIDIsIDIsIDIsIDEsIDIsIDEsIDEsIDQsIDEsIDEsIDEsIDEsIDEsIDMsIDIsIDEsIDAsXG5cdDAsIDEsIDIsIDMsIDMsIDIsIDEsIDIsIDEsIDEsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDIsIDQsIDQsXG5cdDAsIDEsIDIsIDMsIDMsIDIsIDEsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDAsXG5cdDAsIDEsIDIsIDMsIDQsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDIsIDEsIDAsXG5cdDAsIDMsIDIsIDMsIDQsIDQsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDAsIDEsIDIsIDEsIDAsXG5cdDAsIDMsIDIsIDMsIDQsIDQsIDMsIDIsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDEsIDEsIDIsIDMsIDAsXG5cdDAsIDMsIDIsIDMsIDQsIDEsIDMsIDIsIDEsIDMsIDEsIDEsIDEsIDIsIDEsIDEsIDEsIDIsIDMsIDAsXG5cdDAsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDMsIDMsIDMsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDMsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDEsIDEsIDMsIDMsIDMsIDMsIDMsIDEsIDEsIDEsIDEsIDEsIDEsIDQsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBcbl07XG4vLyDmr4/kuKrlnLDnoJblpJrlsJFwaXhlbFxubGV0IHRpbGVXaWR0aCA9IDQwO1xubGV0IHRpbGVIZWlnaHQgPSA0MDtcbi8vIOWcsOWbvuWkp+Wwj+WwseaYrzEwKjEwXG5sZXQgbWFwV2lkdGggPSAyMDtcbmxldCBtYXBIZWlnaHQgPSAyMDtcbi8vIGZyYW1lcmF0ZVxubGV0IGN1cnJlbnRTZWNvbmQgPSAwO1xubGV0IGZyYW1lQ291bnQgPSAwO1xubGV0IGZyYW1lc0xhc3RTZWNvbmQgPSAwO1xubGV0IGxhc3RGcmFtZVRpbWUgPSAwO1xuXG5cbi8vIGtleUNvZGUgOiBib29sZWFuIHRvIHRlbGwgdXMgd2hpY2ggb25lIGFyZSBwcmVzc2VkXG5sZXQga2V5c0Rvd24gPSB7XG4gICAgLy8gMzc6IGxlZnRcbiAgICAzNyA6IGZhbHNlLFxuICAgIC8vIDM4OiB1cFxuICAgIDM4IDogZmFsc2UsXG4gICAgLy8gMzk6IHJpZ2h0XG4gICAgMzkgOiBmYWxzZSxcbiAgICAvLyA0MDogZG93blxuICAgIDQwIDogZmFsc2VcbiAgICAvLyAzMjogc3BhY2Vcbn07XG5cblxuLy8g5Zyw5p2/56eN57G7XG5sZXQgZmxvb3JUeXBlcyA9IHtcbiAgICBzb2xpZDogMCxcbiAgICBwYXRoOiAxLFxuICAgIHdhdGVyOiAyXG59O1xuXG4vLyDmlbDlrZfvvIhnYW1lTWFw77yJ5a+55bqU5LiK6aKc6Imy5ZKM5Zyw5p2/56eN57G7XG4vLyAwOuWimeWjgSAxOuiNieWcsCAyOumZhuWcsCAzOuaIv+WtkCA0OiDmsLRcbnZhciB0aWxlVHlwZXMgPSB7XG5cdDAgOiB7IGNvbG91cjpcIiM2ODViNDhcIiwgZmxvb3I6Zmxvb3JUeXBlcy5zb2xpZCwgc3ByaXRlOlt7eDowLHk6MCx3OjQwLGg6NDB9XVx0fSxcblx0MSA6IHsgY29sb3VyOlwiIzVhYTQ1N1wiLCBmbG9vcjpmbG9vclR5cGVzLnBhdGgsXHRzcHJpdGU6W3t4OjQwLHk6MCx3OjQwLGg6NDB9XVx0fSxcblx0MiA6IHsgY29sb3VyOlwiI2U4YmQ3YVwiLCBmbG9vcjpmbG9vclR5cGVzLnBhdGgsXHRzcHJpdGU6W3t4OjgwLHk6MCx3OjQwLGg6NDB9XVx0fSxcblx0MyA6IHsgY29sb3VyOlwiIzI4NjYyNVwiLCBmbG9vcjpmbG9vclR5cGVzLnNvbGlkLFx0c3ByaXRlOlt7eDoxMjAseTowLHc6NDAsaDo0MH1dXHR9LFxuXHQ0IDogeyBjb2xvdXI6XCIjNjc4ZmQ5XCIsIGZsb29yOmZsb29yVHlwZXMud2F0ZXIsXHRzcHJpdGU6W3t4OjE2MCx5OjAsdzo0MCxoOjQwfV1cdH1cbn07XG5cblxubGV0IHRpbGVzZXQgPSBudWxsLCB0aWxlc2V0VVJMID0gXCJzcmMvaW1hZ2VzL3RpbGVzZXRlc3R0LnBuZ1wiLCB0aWxlc2V0TG9hZGVkID0gZmFsc2U7XG5cblxuLy8g5Yib5bu65LiA5Liq6KeS6ImyIChtaXVtaXUpXG5sZXQgcGxheWVyID0gbmV3IENoYXJhY3RlcigpO1xuLy8gaW4gY2xhc3Mgc28gd2UgY2FuIGFkZCBtb3JlIGNoYXIgaW4gZnV0dXJlXG5mdW5jdGlvbiBDaGFyYWN0ZXIoKSB7XG5cdHRoaXMudGlsZUZyb21cdD0gWzEsMV07XG4gICAgdGhpcy50aWxlVG9cdFx0PSBbMSwxXTtcbiAgICAvLyB0aW1lIGluIG1pbGxzZWNvbmRzXG4gICAgdGhpcy50aW1lTW92ZWRcdD0gMDtcbiAgICB0aGlzLmRlbGF5TW92ZVx0PSA3MDA7XG5cdHRoaXMuZGltZW5zaW9uc1x0PSBbMzAsMzBdO1xuXHR0aGlzLnBvc2l0aW9uXHQ9IFs0NSw0NV07XG59XG5cblxuLy8gcGxhY2UgY2hhciBpbiBhIHNwZWNpdGljIHRpbGUgXG5DaGFyYWN0ZXIucHJvdG90eXBlLnBsYWNlQXQgPSBmdW5jdGlvbih4LCB5KSB7XG5cdHRoaXMudGlsZUZyb21cdD0gW3gseV07XG4gICAgdGhpcy50aWxlVG9cdFx0PSBbeCx5XTtcbiAgICAvLyB4IGFuZCB5IHBvc2l0aW9uIG9mIHRoZSB0aWxlLiB1cGRhdGUgdGhlIHRpbGVGcm9tIGFuZCB0aWxlVG8gcHJvcGVydGllcyB0byB0aGUgbmV3IHRpbGUgY29vcmRpbmF0ZXNcbiAgICAvLyBjYWxjdWxhdGVzIHRoZSBwaXhlbCBwb3NpdGlvbiBvZiB0aGUgY2hhcmFjeWVyIHVzZSBiZWxvd1xuXHR0aGlzLnBvc2l0aW9uXHQ9IFsoKCB0aWxlV2lkdGggKiB4ICkrKCAodGlsZVdpZHRoIC0gdGhpcy5kaW1lbnNpb25zWzBdKSAvIDIgKSksXG5cdFx0KCggdGlsZUhlaWdodCAqIHkgKSsoICh0aWxlSGVpZ2h0IC0gdGhpcy5kaW1lbnNpb25zWzFdKSAvIDIgKSldO1xufTtcblxuLy8gY2FsY3VsYXRpb25zIGVhY2ggZnJhbWUgdG8gZmluZCBwb3NpdGlvbiwgcGFzcyBpbiBhIHRpbWVcbkNoYXJhY3Rlci5wcm90b3R5cGUucHJvY2Vzc01vdmVtZW50ID0gZnVuY3Rpb24odCkge1xuICAgIC8vIGlmIGNoYXIgdGlsZVRvID09IHRpbGVGcm9tIGNoYXIgaXMgbm90IG1vdmluZywgc28gcmV0dXJuIGZhbHNlXG5cdGlmKCB0aGlzLnRpbGVGcm9tWzBdID09IHRoaXMudGlsZVRvWzBdICYmIHRoaXMudGlsZUZyb21bMV0gPT0gdGhpcy50aWxlVG9bMV0pIHsgcmV0dXJuIGZhbHNlOyB9XG4gICAgLy8gaWYgdGhlIGFtb3VudCBvZiB0aW1lIHBhc3NlZCBzaW5jZSBjaGFyIGJlZ2FuIGl0cyBjdXJyZW50IG1vdmUgPj0gdGhlIHRpbWUgZm9yIGNoYXIgdG8gbW92ZSAxIHRpbGUuIHdlIHNldCBwb3NpdGlvbiB1c2luZyBwbGFjZUF0IGZ1bmN0aW9uXG4gICAgLy8gYWthOiBpZiBjaGFyIHN0aWxsIG1vdmluZ1xuXHRpZigodCAtIHRoaXMudGltZU1vdmVkKSA+PSB0aGlzLmRlbGF5TW92ZSkge1xuXHRcdHRoaXMucGxhY2VBdCh0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pO1xuXHR9IGVsc2Uge1xuICAgICAgICAvLyBjdXJyZW50IHBvc2l0aW9uIG9uIGNhbnZhc1xuXHRcdHRoaXMucG9zaXRpb25bMF0gPSAodGhpcy50aWxlRnJvbVswXSAqIHRpbGVXaWR0aCkgKyAoKHRpbGVXaWR0aC10aGlzLmRpbWVuc2lvbnNbMF0pLzIpO1xuXHRcdHRoaXMucG9zaXRpb25bMV0gPSAodGhpcy50aWxlRnJvbVsxXSAqIHRpbGVIZWlnaHQpICsgKCh0aWxlSGVpZ2h0LXRoaXMuZGltZW5zaW9uc1sxXSkvMik7XG5cbiAgICAgICAgLy8gaWYgY2hhciBpcyBtb3Zpbmcgb24geCBjb29yZGluYXRlLCBjYWxjdWxhdGUgcGl4ZWxzXG5cdFx0aWYodGhpcy50aWxlVG9bMF0gIT0gdGhpcy50aWxlRnJvbVswXSkge1xuICAgICAgICAgICAgLy8gZGlmZmVyZW5jZSA9IGRpc3RhbmNlIG1vdmVkXG4gICAgICAgICAgICAvLyBkZXBlbmRpbmcgb24gd2hldGhlciB0aGUgZGVzdGluYXRpb24gdGlsZSAodGlsZVRvKSBpcyBsZWZ0IChvciBhYm92ZSksIG9yIHJpZ2h0IChvciBiZWxvdykgdGhlIHRpbGUgd2UgYXJlIG1vdmluZyBmcm9tICh0aWxlRnJvbSksIHdlIHN1YnRyYWN0IG9yIGFkZCB0aGlzIGFtb3VudCB0byB0aGUgQ2hhcmFjdGVycyBwb3NpdGlvbi4gXG5cdFx0XHRsZXQgZGlmZmVyZW5jZSA9ICh0aWxlV2lkdGggLyB0aGlzLmRlbGF5TW92ZSkgKiAodCAtIHRoaXMudGltZU1vdmVkKTtcblx0XHRcdHRoaXMucG9zaXRpb25bMF0rPSAodGhpcy50aWxlVG9bMF0gPCB0aGlzLnRpbGVGcm9tWzBdID8gMCAtIGRpZmZlcmVuY2UgOiBkaWZmZXJlbmNlKTtcblx0XHR9XG5cdCAgICBpZih0aGlzLnRpbGVUb1sxXSAhPSB0aGlzLnRpbGVGcm9tWzFdKSB7XG5cdFx0XHRsZXQgZGlmZmVyZW5jZSA9ICh0aWxlSGVpZ2h0IC8gdGhpcy5kZWxheU1vdmUpICogKHQtdGhpcy50aW1lTW92ZWQpO1xuXHRcdFx0dGhpcy5wb3NpdGlvblsxXSs9ICh0aGlzLnRpbGVUb1sxXTx0aGlzLnRpbGVGcm9tWzFdID8gMCAtIGRpZmZlcmVuY2UgOiBkaWZmZXJlbmNlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyByb3VuZCB4ICYgeSB0byB3aG9sZSBudW1iZXJcblx0XHR0aGlzLnBvc2l0aW9uWzBdID0gTWF0aC5yb3VuZCh0aGlzLnBvc2l0aW9uWzBdKTtcblx0XHR0aGlzLnBvc2l0aW9uWzFdID0gTWF0aC5yb3VuZCh0aGlzLnBvc2l0aW9uWzFdKTtcbiAgICB9XG4gICAgLy8gdHJ1ZSA9IGNoYXIgaXMgY3VycmVudGx5IG1vdmluZ1xuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuXG4vLyBjcmVhdGUgYSBjYW1lcmEgb2JqZWN0XG5sZXQgdmlld3BvcnQgPSB7XG4gICAgLy8gY2FudmFzIHdpZHRoIGFuZCBoZWlnaHRcbiAgICBzY3JlZW46IFswLDBdLFxuICAgIC8vIHRpbGUgY29vcmRpbmF0ZXMgb2YgdGhlIHRvcC1sZWZ0IGFyZWEgb2YgdGhlIG1hcFxuICAgIHN0YXJ0VGlsZTogWzAsMF0sXG4gICAgLy8gdGlsZSBjb29yZGluYXRlcyBvZiB0aGUgYm90dG9tLXJpZ2h0IGFyZWEgb2YgdGhlIG1hcFxuICAgIGVuZFRpbGU6IFswLDBdLFxuICAgIC8vIG9mZnNldCBpbiBwaXhlbHNcbiAgICBvZmZzZXQ6IFswLDBdLFxuICAgIC8vIHVwZGF0ZSBmdW5jdGlvbiwgeCB5IGlzIG91ciBjZW50ZXIgYXJlYVxuICAgIHVwZGF0ZTogZnVuY3Rpb24ob2Zmc2V0WCwgb2Zmc2V0WSkge1xuICAgICAgICAvLyBvZmZzZXQ6IGhhbGYgdGhlIGNhbnZhcyB3aWR0aCB8fCBoZWlnaHQgKHJvdW5kIGRvd24gdG8gd2hvbGUgbnVtKVxuXHRcdHRoaXMub2Zmc2V0WzBdID0gTWF0aC5mbG9vcigodGhpcy5zY3JlZW5bMF0vMikgLSBvZmZzZXRYKTtcbiAgICAgICAgdGhpcy5vZmZzZXRbMV0gPSBNYXRoLmZsb29yKCh0aGlzLnNjcmVlblsxXS8yKSAtIG9mZnNldFkpO1xuXG4gICAgICAgIC8vIHdlIGZpbmQgdGhlIGNvb3JkaW5hdGVzIG9mIHRoZSB0aWxlXG4gICAgICAgIGxldCB0aWxlID0gWyBNYXRoLmZsb29yKG9mZnNldFggLyB0aWxlV2lkdGgpLCBNYXRoLmZsb29yKG9mZnNldFkgLyB0aWxlSGVpZ2h0KSBdO1xuICAgICAgICAvLyAgY2FsY3VsYXRlIHRoZSBwb3NpdGlvbiBvZiB0aGUgZmlyc3QgdGlsZSBvbiB0aGUgeCBheGlzIGJ5IGNhbGN1bHRpbmcgdGhlIG1heGltdW0gbnVtYmVyIG9mIHRpbGVzIHRoYXQgY2FuIGZpdCBpbiBoYWxmIG9mIHRoZSBzY3JlZW4gd2lkdGgsIGFuZCB0YWtpbmcgdGhhdCBudW1iZXIgYXdheSBmcm9tIHRoZSBjZW50cmUgdGlsZS5cbiAgICAgICAgLy8gIHJlbW92ZSBhbiBhZGRpdGlvbmFsIDEgdG8gYWxsb3cgZm9yIHRpbGVzIHRoYXQgYXJlIG5vdCBjb21wbGV0ZWx5IG9uIHRoZSBzY3JlZW4sIGJ1dCBvbmx5IHBhcnRpYWxseS5cbiAgICAgICAgdGhpcy5zdGFydFRpbGVbMF0gPSB0aWxlWzBdIC0gMSAtIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMF0vMikgLyB0aWxlV2lkdGgpO1xuXHRcdHRoaXMuc3RhcnRUaWxlWzFdID0gdGlsZVsxXSAtIDEgLSBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzFdLzIpIC8gdGlsZUhlaWdodCk7XG5cbiAgICAgICAgLy8gY2hlY2sgdG8gbWFrZSBzdXJlIHggb3IgeSBpcyBub3QgbGVzcyB0aGVuIDAgKG91cnNpZGUgdGhlIGJvdW5kcylcbiAgICAgICAgaWYodGhpcy5zdGFydFRpbGVbMF0gPCAwKSB7IHRoaXMuc3RhcnRUaWxlWzBdID0gMDsgfVxuXHRcdGlmKHRoaXMuc3RhcnRUaWxlWzFdIDwgMCkgeyB0aGlzLnN0YXJ0VGlsZVsxXSA9IDA7IH1cblxuICAgICAgICB0aGlzLmVuZFRpbGVbMF0gPSB0aWxlWzBdICsgMSArIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMF0vMikgLyB0aWxlV2lkdGgpO1xuXHRcdHRoaXMuZW5kVGlsZVsxXSA9IHRpbGVbMV0gKyAxICsgTWF0aC5jZWlsKCh0aGlzLnNjcmVlblsxXS8yKSAvIHRpbGVIZWlnaHQpO1xuXG5cdFx0aWYodGhpcy5lbmRUaWxlWzBdID49IG1hcFdpZHRoKSB7IHRoaXMuZW5kVGlsZVswXSA9IG1hcFdpZHRoIC0xOyB9XG5cdFx0aWYodGhpcy5lbmRUaWxlWzFdID49IG1hcEhlaWdodCkgeyB0aGlzLmVuZFRpbGVbMV0gPSBtYXBIZWlnaHQgLSAxOyB9XG4gICAgICAgIH1cbn07XG5cblxuLy8gaWYgY2hhciBjYW4gbW92ZSBpbiBhIHNwZWNpZmljIGRpcmVjXG5DaGFyYWN0ZXIucHJvdG90eXBlLmNhbk1vdmVUbyA9IGZ1bmN0aW9uKHgsIHkpXG57XG4gICAgLy8gaWYgeCBhbmQgeSBpcyBpbiBtYXAgYm91bmRcbiAgICBpZih4IDwgMCB8fCB4ID49IG1hcFdpZHRoIHx8IHkgPCAwIHx8IHkgPj0gbWFwSGVpZ2h0KSB7IHJldHVybiBmYWxzZTsgfVxuICAgIC8vIGlmIHRoZSB0aWxlIGlzIHBhdGggdGlsZSAob25seSBtb3ZlIGlmIGl0cyBhIHBhdGgpXG5cdGlmKHRpbGVUeXBlc1tnYW1lTWFwW3RvSW5kZXgoeCx5KV1dLmZsb29yIT1mbG9vclR5cGVzLnBhdGgpIHsgcmV0dXJuIGZhbHNlOyB9XG5cdHJldHVybiB0cnVlO1xufTtcbkNoYXJhY3Rlci5wcm90b3R5cGUuY2FuTW92ZVVwXHRcdD0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNhbk1vdmVUbyh0aGlzLnRpbGVGcm9tWzBdLCB0aGlzLnRpbGVGcm9tWzFdLTEpOyB9O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5jYW5Nb3ZlRG93biBcdD0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNhbk1vdmVUbyh0aGlzLnRpbGVGcm9tWzBdLCB0aGlzLnRpbGVGcm9tWzFdKzEpOyB9O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5jYW5Nb3ZlTGVmdCBcdD0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzLmNhbk1vdmVUbyh0aGlzLnRpbGVGcm9tWzBdLTEsIHRoaXMudGlsZUZyb21bMV0pOyB9O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5jYW5Nb3ZlUmlnaHQgXHQ9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jYW5Nb3ZlVG8odGhpcy50aWxlRnJvbVswXSsxLCB0aGlzLnRpbGVGcm9tWzFdKTsgfTtcblxuQ2hhcmFjdGVyLnByb3RvdHlwZS5tb3ZlTGVmdFx0PSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzBdLT0xOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IH07XG5DaGFyYWN0ZXIucHJvdG90eXBlLm1vdmVSaWdodFx0PSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzBdKz0xOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IH07XG5DaGFyYWN0ZXIucHJvdG90eXBlLm1vdmVVcFx0PSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzFdLT0xOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IH07XG5DaGFyYWN0ZXIucHJvdG90eXBlLm1vdmVEb3duXHQ9IGZ1bmN0aW9uKHQpIHsgdGhpcy50aWxlVG9bMV0rPTE7IHRoaXMudGltZU1vdmVkID0gdDsgfTtcblxuXG5cblxuLy8gY29udmVydCB4LCB5IGludG8gaW5kZXggaW4gZ2FtZU1hcCBhcnJcbmZ1bmN0aW9uIHRvSW5kZXgoeCwgeSkge1xuXHRyZXR1cm4oKHkgKiBtYXBXaWR0aCkgKyB4KTtcbn1cblxuLy8gbG9vcCBzdGFydHMgd2hlbiBwYWdlIGRvbmUgbG9hZGluZ1xud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuXHRjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpLmdldENvbnRleHQoXCIyZFwiKTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbiAgICBjdHguZm9udCA9IFwiYm9sZCAxMHB0IHNhbnMtc2VyaWZcIjtcbiAgICBcbiAgICAvLyBhZGQgZXZlbnRMaXN0ZW5lcnMgZm9yIHRoZSBrZXlkb3duYSBhbmQga2V5dXBcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZihlLmtleUNvZGU+PTM3ICYmIGUua2V5Q29kZTw9NDApIHsga2V5c0Rvd25bZS5rZXlDb2RlXSA9IHRydWU7IH1cblx0fSk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuXHRcdGlmKGUua2V5Q29kZT49MzcgJiYgZS5rZXlDb2RlPD00MCkgeyBrZXlzRG93bltlLmtleUNvZGVdID0gZmFsc2U7IH1cbiAgICB9KTtcblxuICAgIC8vIGNoZWNrcyB0aGUgQ2FudmFzIGRpbWVuc2lvbnMgYW5kIHN0b3JlcyBpdCBpbiB0aGUgdmlld3BvcnQgb2JqZWN0c1xuICAgIHZpZXdwb3J0LnNjcmVlbiA9IFtkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpLndpZHRoLFxuXHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJykuaGVpZ2h0XTtcbn07XG5cblxuLy8gbWFpbiBmdW5jdGlvblxuZnVuY3Rpb24gZHJhd0dhbWUoKVxue1xuXHRpZihjdHg9PW51bGwpIHsgcmV0dXJuOyB9XG5cblx0bGV0IGN1cnJlbnRGcmFtZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGxldCB0aW1lRWxhcHNlZCA9IGN1cnJlbnRGcmFtZVRpbWUgLSBsYXN0RnJhbWVUaW1lO1xuICAgIFxuICAgIC8vIGZyYW1lY291bnQgXG5cdGxldCBzZWMgPSBNYXRoLmZsb29yKERhdGUubm93KCkvMTAwMCk7XG5cdGlmKHNlYyE9Y3VycmVudFNlY29uZCl7XG5cdFx0Y3VycmVudFNlY29uZCA9IHNlYztcblx0XHRmcmFtZXNMYXN0U2Vjb25kID0gZnJhbWVDb3VudDtcblx0XHRmcmFtZUNvdW50ID0gMTtcblx0fVxuXHRlbHNlIHsgZnJhbWVDb3VudCsrOyB9XG5cbiAgICAvLyBwbGF5ZXIgbW92ZW1lbnRcblx0aWYoIXBsYXllci5wcm9jZXNzTW92ZW1lbnQoY3VycmVudEZyYW1lVGltZSkpIHtcblx0XHRpZihrZXlzRG93blszOF0gJiYgcGxheWVyLmNhbk1vdmVVcCgpKVx0XHR7IHBsYXllci5tb3ZlVXAoY3VycmVudEZyYW1lVGltZSk7IH1cblx0XHRlbHNlIGlmKGtleXNEb3duWzQwXSAmJiBwbGF5ZXIuY2FuTW92ZURvd24oKSlcdHsgcGxheWVyLm1vdmVEb3duKGN1cnJlbnRGcmFtZVRpbWUpOyB9XG5cdFx0ZWxzZSBpZihrZXlzRG93blszN10gJiYgcGxheWVyLmNhbk1vdmVMZWZ0KCkpXHR7IHBsYXllci5tb3ZlTGVmdChjdXJyZW50RnJhbWVUaW1lKTsgfVxuXHRcdGVsc2UgaWYoa2V5c0Rvd25bMzldICYmIHBsYXllci5jYW5Nb3ZlUmlnaHQoKSlcdHsgcGxheWVyLm1vdmVSaWdodChjdXJyZW50RnJhbWVUaW1lKTsgfVxuICAgIH1cblxuICAgIC8vIHNldCB0aGUgdmlld3BvcnQgY2VudHJlIHRvIHRoZSBwbGF5ZXIgdG9wL2xlZnQgcG9zaXRpb24gcGx1cyBoYWxmIHRoZSBwbGF5ZXJzIHdpZHRoL2hlaWdodC5cbiAgICAgICAgdmlld3BvcnQudXBkYXRlKHBsYXllci5wb3NpdGlvblswXSArIChwbGF5ZXIuZGltZW5zaW9uc1swXS8yKSxcbiAgICAgICAgICAgIHBsYXllci5wb3NpdGlvblsxXSArIChwbGF5ZXIuZGltZW5zaW9uc1sxXS8yKSk7XG4gICAgICAgIC8vIGVyYXNlIGFueXRoaW5nIG9uIHRoZSBDYW52YXMgZnJvbSB0aGUgbGFzdCBmcmFtZVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB2aWV3cG9ydC5zY3JlZW5bMF0sIHZpZXdwb3J0LnNjcmVlblsxXSk7XG4gICAgXG4gICAgLy8gbmVzdGVkIGxvb3BzOiB5IGFuZCB4XG5cdFx0Zm9yKGxldCB5ID0gdmlld3BvcnQuc3RhcnRUaWxlWzFdOyB5IDw9IHZpZXdwb3J0LmVuZFRpbGVbMV07ICsreSkge1xuXHRcdCAgICBmb3IobGV0IHggPSB2aWV3cG9ydC5zdGFydFRpbGVbMF07IHggPD0gdmlld3BvcnQuZW5kVGlsZVswXTsgKyt4KSB7XG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGlsZVR5cGVzW2dhbWVNYXBbdG9JbmRleCh4LHkpXV0uY29sb3VyO1xuXG4gICAgICAgICAgICBjdHguZmlsbFJlY3QoIHZpZXdwb3J0Lm9mZnNldFswXSArICh4ICogdGlsZVdpZHRoICksIHZpZXdwb3J0Lm9mZnNldFsxXSArICh5ICogdGlsZUhlaWdodCksXG5cdFx0XHQgICAgdGlsZVdpZHRoLCB0aWxlSGVpZ2h0KTtcblx0XHR9XG4gICAgfVxuICAgIFxuICAgIC8vIGRyYXcgdGhlIHBsYXllclxuXG5cdGN0eC5maWxsU3R5bGUgPSBcIiNmYjk1ODVcIjtcblx0Y3R4LmZpbGxSZWN0KHZpZXdwb3J0Lm9mZnNldFswXSArIHBsYXllci5wb3NpdGlvblswXSwgdmlld3BvcnQub2Zmc2V0WzFdICsgcGxheWVyLnBvc2l0aW9uWzFdLFxuXHRcdHBsYXllci5kaW1lbnNpb25zWzBdLCBwbGF5ZXIuZGltZW5zaW9uc1sxXSk7XG5cblxuXHRsYXN0RnJhbWVUaW1lID0gY3VycmVudEZyYW1lVGltZTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=