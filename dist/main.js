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
    floor: floorTypes.solid
  },
  1: {
    colour: "#6df7b1",
    floor: floorTypes.path
  },
  2: {
    colour: "#c97461",
    floor: floorTypes.path
  },
  3: {
    colour: "#d77c4b",
    floor: floorTypes.solid
  },
  4: {
    colour: "#008df0",
    floor: floorTypes.water
  }
}; // 创建一个角色 (miumiu)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJrZXlzRG93biIsImZsb29yVHlwZXMiLCJzb2xpZCIsInBhdGgiLCJ3YXRlciIsInRpbGVUeXBlcyIsImNvbG91ciIsImZsb29yIiwicGxheWVyIiwiQ2hhcmFjdGVyIiwidGlsZUZyb20iLCJ0aWxlVG8iLCJ0aW1lTW92ZWQiLCJkZWxheU1vdmUiLCJkaW1lbnNpb25zIiwicG9zaXRpb24iLCJwcm90b3R5cGUiLCJwbGFjZUF0IiwieCIsInkiLCJwcm9jZXNzTW92ZW1lbnQiLCJ0IiwiZGlmZmVyZW5jZSIsIk1hdGgiLCJyb3VuZCIsInZpZXdwb3J0Iiwic2NyZWVuIiwic3RhcnRUaWxlIiwiZW5kVGlsZSIsIm9mZnNldCIsInVwZGF0ZSIsIm9mZnNldFgiLCJvZmZzZXRZIiwidGlsZSIsImNlaWwiLCJjYW5Nb3ZlVG8iLCJ0b0luZGV4IiwiY2FuTW92ZVVwIiwiY2FuTW92ZURvd24iLCJjYW5Nb3ZlTGVmdCIsImNhbk1vdmVSaWdodCIsIm1vdmVMZWZ0IiwibW92ZVJpZ2h0IiwibW92ZVVwIiwibW92ZURvd24iLCJ3aW5kb3ciLCJvbmxvYWQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0Q29udGV4dCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImRyYXdHYW1lIiwiZm9udCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlIiwia2V5Q29kZSIsIndpZHRoIiwiaGVpZ2h0IiwiY3VycmVudEZyYW1lVGltZSIsIkRhdGUiLCJub3ciLCJ0aW1lRWxhcHNlZCIsInNlYyIsImZpbGxTdHlsZSIsImZpbGxSZWN0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDQUE7QUFHQSxJQUFJQSxHQUFHLEdBQUcsSUFBVixDLENBRUE7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHLENBQ2IsQ0FEYSxFQUNWLENBRFUsRUFDUCxDQURPLEVBQ0osQ0FESSxFQUNELENBREMsRUFDRSxDQURGLEVBQ0ssQ0FETCxFQUNRLENBRFIsRUFDVyxDQURYLEVBQ2MsQ0FEZCxFQUNpQixDQURqQixFQUNvQixDQURwQixFQUN1QixDQUR2QixFQUMwQixDQUQxQixFQUM2QixDQUQ3QixFQUNnQyxDQURoQyxFQUNtQyxDQURuQyxFQUNzQyxDQUR0QyxFQUN5QyxDQUR6QyxFQUM0QyxDQUQ1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LFNBQWhCO0FBQ0F6RSxLQUFHLENBQUMwRSxRQUFKLENBQWF2QyxRQUFRLENBQUNJLE1BQVQsQ0FBZ0IsQ0FBaEIsSUFBcUJyQixNQUFNLENBQUNPLFFBQVAsQ0FBZ0IsQ0FBaEIsQ0FBbEMsRUFBc0RVLFFBQVEsQ0FBQ0ksTUFBVCxDQUFnQixDQUFoQixJQUFxQnJCLE1BQU0sQ0FBQ08sUUFBUCxDQUFnQixDQUFoQixDQUEzRSxFQUNDUCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FERCxFQUN1Qk4sTUFBTSxDQUFDTSxVQUFQLENBQWtCLENBQWxCLENBRHZCO0FBSUFmLGVBQWEsR0FBRzJELGdCQUFoQjtBQUNBUix1QkFBcUIsQ0FBQ0MsUUFBRCxDQUFyQjtBQUNBLEM7Ozs7Ozs7Ozs7O0FDelFELHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9tYXBcIjtcblxuXG5cbiIsIi8vIGkgd2FudCBhIGNhbWVyYSBmb2xsb3dpbmcgdGhlIGNoYXIgYXJvdW5kIHRoZSBtYXBcblxuXG5sZXQgY3R4ID0gbnVsbDtcblxuLy8gY3JlYXRlIGEgbWFwIHdpdGggMTAqMTAgdGlsZVxubGV0IGdhbWVNYXAgPSBbXG5cdDAsIDAsIDQsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDIsIDQsIDQsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDIsIDIsIDAsXG5cdDAsIDIsIDMsIDQsIDQsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDIsIDIsIDAsXG5cdDAsIDIsIDMsIDEsIDQsIDQsIDEsIDEsIDIsIDIsIDIsIDIsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDAsXG5cdDAsIDIsIDMsIDEsIDEsIDQsIDQsIDEsIDIsIDMsIDMsIDIsIDEsIDEsIDIsIDEsIDAsIDAsIDAsIDAsXG5cdDAsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDMsIDMsIDIsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDIsIDQsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDEsIDEsIDEsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDIsIDQsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDEsIDEsIDEsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDIsIDQsIDQsIDQsIDQsIDQsIDEsIDEsIDEsIDIsIDIsIDIsIDIsIDEsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDIsIDMsIDIsIDEsIDEsIDQsIDEsIDEsIDEsIDEsIDMsIDMsIDIsIDEsIDAsXG5cdDAsIDEsIDIsIDIsIDIsIDIsIDEsIDIsIDEsIDEsIDQsIDEsIDEsIDEsIDEsIDEsIDMsIDIsIDEsIDAsXG5cdDAsIDEsIDIsIDMsIDMsIDIsIDEsIDIsIDEsIDEsIDQsIDQsIDQsIDQsIDQsIDQsIDQsIDIsIDQsIDQsXG5cdDAsIDEsIDIsIDMsIDMsIDIsIDEsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDAsXG5cdDAsIDEsIDIsIDMsIDQsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDIsIDEsIDAsXG5cdDAsIDMsIDIsIDMsIDQsIDQsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDAsIDEsIDIsIDEsIDAsXG5cdDAsIDMsIDIsIDMsIDQsIDQsIDMsIDIsIDEsIDEsIDEsIDEsIDEsIDIsIDEsIDEsIDEsIDIsIDMsIDAsXG5cdDAsIDMsIDIsIDMsIDQsIDEsIDMsIDIsIDEsIDMsIDEsIDEsIDEsIDIsIDEsIDEsIDEsIDIsIDMsIDAsXG5cdDAsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDMsIDMsIDMsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDMsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDEsIDEsIDMsIDMsIDMsIDMsIDMsIDEsIDEsIDEsIDEsIDEsIDEsIDQsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBcbl07XG4vLyDmr4/kuKrlnLDnoJblpJrlsJFwaXhlbFxubGV0IHRpbGVXaWR0aCA9IDQwO1xubGV0IHRpbGVIZWlnaHQgPSA0MDtcbi8vIOWcsOWbvuWkp+Wwj+WwseaYrzEwKjEwXG5sZXQgbWFwV2lkdGggPSAyMDtcbmxldCBtYXBIZWlnaHQgPSAyMDtcbi8vIGZyYW1lcmF0ZVxubGV0IGN1cnJlbnRTZWNvbmQgPSAwO1xubGV0IGZyYW1lQ291bnQgPSAwO1xubGV0IGZyYW1lc0xhc3RTZWNvbmQgPSAwO1xubGV0IGxhc3RGcmFtZVRpbWUgPSAwO1xuXG5cbi8vIGtleUNvZGUgOiBib29sZWFuIHRvIHRlbGwgdXMgd2hpY2ggb25lIGFyZSBwcmVzc2VkXG5sZXQga2V5c0Rvd24gPSB7XG4gICAgLy8gMzc6IGxlZnRcbiAgICAzNyA6IGZhbHNlLFxuICAgIC8vIDM4OiB1cFxuICAgIDM4IDogZmFsc2UsXG4gICAgLy8gMzk6IHJpZ2h0XG4gICAgMzkgOiBmYWxzZSxcbiAgICAvLyA0MDogZG93blxuICAgIDQwIDogZmFsc2VcbiAgICAvLyAzMjogc3BhY2Vcbn07XG5cblxuLy8g5Zyw5p2/56eN57G7XG5sZXQgZmxvb3JUeXBlcyA9IHtcbiAgICBzb2xpZDogMCxcbiAgICBwYXRoOiAxLFxuICAgIHdhdGVyOiAyXG59O1xuXG4vLyDmlbDlrZfvvIhnYW1lTWFw77yJ5a+55bqU5LiK6aKc6Imy5ZKM5Zyw5p2/56eN57G7XG4vLyAwOuWimeWjgSAxOuiNieWcsCAyOumZhuWcsCAzOuaIv+WtkCA0OiDmsLRcbnZhciB0aWxlVHlwZXMgPSB7XG5cdDAgOiB7IGNvbG91cjogXCIjNzkzZDRjXCIsIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkIH0sXG5cdDEgOiB7IGNvbG91cjogXCIjNmRmN2IxXCIsIGZsb29yOiBmbG9vclR5cGVzLnBhdGggfSxcblx0MiA6IHsgY29sb3VyOiBcIiNjOTc0NjFcIiwgZmxvb3I6IGZsb29yVHlwZXMucGF0aFx0fSxcblx0MyA6IHsgY29sb3VyOiBcIiNkNzdjNGJcIiwgZmxvb3I6IGZsb29yVHlwZXMuc29saWQgfSxcblx0NCA6IHsgY29sb3VyOiBcIiMwMDhkZjBcIiwgZmxvb3I6IGZsb29yVHlwZXMud2F0ZXIgfVxufTtcblxuXG5cbi8vIOWIm+W7uuS4gOS4quinkuiJsiAobWl1bWl1KVxubGV0IHBsYXllciA9IG5ldyBDaGFyYWN0ZXIoKTtcbi8vIGluIGNsYXNzIHNvIHdlIGNhbiBhZGQgbW9yZSBjaGFyIGluIGZ1dHVyZVxuZnVuY3Rpb24gQ2hhcmFjdGVyKCkge1xuXHR0aGlzLnRpbGVGcm9tXHQ9IFsxLDFdO1xuICAgIHRoaXMudGlsZVRvXHRcdD0gWzEsMV07XG4gICAgLy8gdGltZSBpbiBtaWxsc2Vjb25kc1xuICAgIHRoaXMudGltZU1vdmVkXHQ9IDA7XG4gICAgdGhpcy5kZWxheU1vdmVcdD0gNzAwO1xuXHR0aGlzLmRpbWVuc2lvbnNcdD0gWzMwLDMwXTtcblx0dGhpcy5wb3NpdGlvblx0PSBbNDUsNDVdO1xufVxuXG5cbi8vIHBsYWNlIGNoYXIgaW4gYSBzcGVjaXRpYyB0aWxlIFxuQ2hhcmFjdGVyLnByb3RvdHlwZS5wbGFjZUF0ID0gZnVuY3Rpb24oeCwgeSkge1xuXHR0aGlzLnRpbGVGcm9tXHQ9IFt4LHldO1xuICAgIHRoaXMudGlsZVRvXHRcdD0gW3gseV07XG4gICAgLy8geCBhbmQgeSBwb3NpdGlvbiBvZiB0aGUgdGlsZS4gdXBkYXRlIHRoZSB0aWxlRnJvbSBhbmQgdGlsZVRvIHByb3BlcnRpZXMgdG8gdGhlIG5ldyB0aWxlIGNvb3JkaW5hdGVzXG4gICAgLy8gY2FsY3VsYXRlcyB0aGUgcGl4ZWwgcG9zaXRpb24gb2YgdGhlIGNoYXJhY3llciB1c2UgYmVsb3dcblx0dGhpcy5wb3NpdGlvblx0PSBbKCggdGlsZVdpZHRoICogeCApKyggKHRpbGVXaWR0aCAtIHRoaXMuZGltZW5zaW9uc1swXSkgLyAyICkpLFxuXHRcdCgoIHRpbGVIZWlnaHQgKiB5ICkrKCAodGlsZUhlaWdodCAtIHRoaXMuZGltZW5zaW9uc1sxXSkgLyAyICkpXTtcbn07XG5cbi8vIGNhbGN1bGF0aW9ucyBlYWNoIGZyYW1lIHRvIGZpbmQgcG9zaXRpb24sIHBhc3MgaW4gYSB0aW1lXG5DaGFyYWN0ZXIucHJvdG90eXBlLnByb2Nlc3NNb3ZlbWVudCA9IGZ1bmN0aW9uKHQpIHtcbiAgICAvLyBpZiBjaGFyIHRpbGVUbyA9PSB0aWxlRnJvbSBjaGFyIGlzIG5vdCBtb3ZpbmcsIHNvIHJldHVybiBmYWxzZVxuXHRpZiggdGhpcy50aWxlRnJvbVswXSA9PSB0aGlzLnRpbGVUb1swXSAmJiB0aGlzLnRpbGVGcm9tWzFdID09IHRoaXMudGlsZVRvWzFdKSB7IHJldHVybiBmYWxzZTsgfVxuICAgIC8vIGlmIHRoZSBhbW91bnQgb2YgdGltZSBwYXNzZWQgc2luY2UgY2hhciBiZWdhbiBpdHMgY3VycmVudCBtb3ZlID49IHRoZSB0aW1lIGZvciBjaGFyIHRvIG1vdmUgMSB0aWxlLiB3ZSBzZXQgcG9zaXRpb24gdXNpbmcgcGxhY2VBdCBmdW5jdGlvblxuICAgIC8vIGFrYTogaWYgY2hhciBzdGlsbCBtb3Zpbmdcblx0aWYoKHQgLSB0aGlzLnRpbWVNb3ZlZCkgPj0gdGhpcy5kZWxheU1vdmUpIHtcblx0XHR0aGlzLnBsYWNlQXQodGhpcy50aWxlVG9bMF0sIHRoaXMudGlsZVRvWzFdKTtcblx0fSBlbHNlIHtcbiAgICAgICAgLy8gY3VycmVudCBwb3NpdGlvbiBvbiBjYW52YXNcblx0XHR0aGlzLnBvc2l0aW9uWzBdID0gKHRoaXMudGlsZUZyb21bMF0gKiB0aWxlV2lkdGgpICsgKCh0aWxlV2lkdGgtdGhpcy5kaW1lbnNpb25zWzBdKS8yKTtcblx0XHR0aGlzLnBvc2l0aW9uWzFdID0gKHRoaXMudGlsZUZyb21bMV0gKiB0aWxlSGVpZ2h0KSArICgodGlsZUhlaWdodC10aGlzLmRpbWVuc2lvbnNbMV0pLzIpO1xuXG4gICAgICAgIC8vIGlmIGNoYXIgaXMgbW92aW5nIG9uIHggY29vcmRpbmF0ZSwgY2FsY3VsYXRlIHBpeGVsc1xuXHRcdGlmKHRoaXMudGlsZVRvWzBdICE9IHRoaXMudGlsZUZyb21bMF0pIHtcbiAgICAgICAgICAgIC8vIGRpZmZlcmVuY2UgPSBkaXN0YW5jZSBtb3ZlZFxuICAgICAgICAgICAgLy8gZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGRlc3RpbmF0aW9uIHRpbGUgKHRpbGVUbykgaXMgbGVmdCAob3IgYWJvdmUpLCBvciByaWdodCAob3IgYmVsb3cpIHRoZSB0aWxlIHdlIGFyZSBtb3ZpbmcgZnJvbSAodGlsZUZyb20pLCB3ZSBzdWJ0cmFjdCBvciBhZGQgdGhpcyBhbW91bnQgdG8gdGhlIENoYXJhY3RlcnMgcG9zaXRpb24uIFxuXHRcdFx0bGV0IGRpZmZlcmVuY2UgPSAodGlsZVdpZHRoIC8gdGhpcy5kZWxheU1vdmUpICogKHQgLSB0aGlzLnRpbWVNb3ZlZCk7XG5cdFx0XHR0aGlzLnBvc2l0aW9uWzBdKz0gKHRoaXMudGlsZVRvWzBdIDwgdGhpcy50aWxlRnJvbVswXSA/IDAgLSBkaWZmZXJlbmNlIDogZGlmZmVyZW5jZSk7XG5cdFx0fVxuXHQgICAgaWYodGhpcy50aWxlVG9bMV0gIT0gdGhpcy50aWxlRnJvbVsxXSkge1xuXHRcdFx0bGV0IGRpZmZlcmVuY2UgPSAodGlsZUhlaWdodCAvIHRoaXMuZGVsYXlNb3ZlKSAqICh0LXRoaXMudGltZU1vdmVkKTtcblx0XHRcdHRoaXMucG9zaXRpb25bMV0rPSAodGhpcy50aWxlVG9bMV08dGhpcy50aWxlRnJvbVsxXSA/IDAgLSBkaWZmZXJlbmNlIDogZGlmZmVyZW5jZSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gcm91bmQgeCAmIHkgdG8gd2hvbGUgbnVtYmVyXG5cdFx0dGhpcy5wb3NpdGlvblswXSA9IE1hdGgucm91bmQodGhpcy5wb3NpdGlvblswXSk7XG5cdFx0dGhpcy5wb3NpdGlvblsxXSA9IE1hdGgucm91bmQodGhpcy5wb3NpdGlvblsxXSk7XG4gICAgfVxuICAgIC8vIHRydWUgPSBjaGFyIGlzIGN1cnJlbnRseSBtb3Zpbmdcblx0cmV0dXJuIHRydWU7XG59XG5cblxuLy8gY3JlYXRlIGEgY2FtZXJhIG9iamVjdFxubGV0IHZpZXdwb3J0ID0ge1xuICAgIC8vIGNhbnZhcyB3aWR0aCBhbmQgaGVpZ2h0XG4gICAgc2NyZWVuOiBbMCwwXSxcbiAgICAvLyB0aWxlIGNvb3JkaW5hdGVzIG9mIHRoZSB0b3AtbGVmdCBhcmVhIG9mIHRoZSBtYXBcbiAgICBzdGFydFRpbGU6IFswLDBdLFxuICAgIC8vIHRpbGUgY29vcmRpbmF0ZXMgb2YgdGhlIGJvdHRvbS1yaWdodCBhcmVhIG9mIHRoZSBtYXBcbiAgICBlbmRUaWxlOiBbMCwwXSxcbiAgICAvLyBvZmZzZXQgaW4gcGl4ZWxzXG4gICAgb2Zmc2V0OiBbMCwwXSxcbiAgICAvLyB1cGRhdGUgZnVuY3Rpb24sIHggeSBpcyBvdXIgY2VudGVyIGFyZWFcbiAgICB1cGRhdGU6IGZ1bmN0aW9uKG9mZnNldFgsIG9mZnNldFkpIHtcbiAgICAgICAgLy8gb2Zmc2V0OiBoYWxmIHRoZSBjYW52YXMgd2lkdGggfHwgaGVpZ2h0IChyb3VuZCBkb3duIHRvIHdob2xlIG51bSlcblx0XHR0aGlzLm9mZnNldFswXSA9IE1hdGguZmxvb3IoKHRoaXMuc2NyZWVuWzBdLzIpIC0gb2Zmc2V0WCk7XG4gICAgICAgIHRoaXMub2Zmc2V0WzFdID0gTWF0aC5mbG9vcigodGhpcy5zY3JlZW5bMV0vMikgLSBvZmZzZXRZKTtcblxuICAgICAgICAvLyB3ZSBmaW5kIHRoZSBjb29yZGluYXRlcyBvZiB0aGUgdGlsZVxuICAgICAgICBsZXQgdGlsZSA9IFsgTWF0aC5mbG9vcihvZmZzZXRYIC8gdGlsZVdpZHRoKSwgTWF0aC5mbG9vcihvZmZzZXRZIC8gdGlsZUhlaWdodCkgXTtcbiAgICAgICAgLy8gIGNhbGN1bGF0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGZpcnN0IHRpbGUgb24gdGhlIHggYXhpcyBieSBjYWxjdWx0aW5nIHRoZSBtYXhpbXVtIG51bWJlciBvZiB0aWxlcyB0aGF0IGNhbiBmaXQgaW4gaGFsZiBvZiB0aGUgc2NyZWVuIHdpZHRoLCBhbmQgdGFraW5nIHRoYXQgbnVtYmVyIGF3YXkgZnJvbSB0aGUgY2VudHJlIHRpbGUuXG4gICAgICAgIC8vICByZW1vdmUgYW4gYWRkaXRpb25hbCAxIHRvIGFsbG93IGZvciB0aWxlcyB0aGF0IGFyZSBub3QgY29tcGxldGVseSBvbiB0aGUgc2NyZWVuLCBidXQgb25seSBwYXJ0aWFsbHkuXG4gICAgICAgIHRoaXMuc3RhcnRUaWxlWzBdID0gdGlsZVswXSAtIDEgLSBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzBdLzIpIC8gdGlsZVdpZHRoKTtcblx0XHR0aGlzLnN0YXJ0VGlsZVsxXSA9IHRpbGVbMV0gLSAxIC0gTWF0aC5jZWlsKCh0aGlzLnNjcmVlblsxXS8yKSAvIHRpbGVIZWlnaHQpO1xuXG4gICAgICAgIC8vIGNoZWNrIHRvIG1ha2Ugc3VyZSB4IG9yIHkgaXMgbm90IGxlc3MgdGhlbiAwIChvdXJzaWRlIHRoZSBib3VuZHMpXG4gICAgICAgIGlmKHRoaXMuc3RhcnRUaWxlWzBdIDwgMCkgeyB0aGlzLnN0YXJ0VGlsZVswXSA9IDA7IH1cblx0XHRpZih0aGlzLnN0YXJ0VGlsZVsxXSA8IDApIHsgdGhpcy5zdGFydFRpbGVbMV0gPSAwOyB9XG5cbiAgICAgICAgdGhpcy5lbmRUaWxlWzBdID0gdGlsZVswXSArIDEgKyBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzBdLzIpIC8gdGlsZVdpZHRoKTtcblx0XHR0aGlzLmVuZFRpbGVbMV0gPSB0aWxlWzFdICsgMSArIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMV0vMikgLyB0aWxlSGVpZ2h0KTtcblxuXHRcdGlmKHRoaXMuZW5kVGlsZVswXSA+PSBtYXBXaWR0aCkgeyB0aGlzLmVuZFRpbGVbMF0gPSBtYXBXaWR0aCAtMTsgfVxuXHRcdGlmKHRoaXMuZW5kVGlsZVsxXSA+PSBtYXBIZWlnaHQpIHsgdGhpcy5lbmRUaWxlWzFdID0gbWFwSGVpZ2h0IC0gMTsgfVxuICAgICAgICB9XG59O1xuXG5cbi8vIGlmIGNoYXIgY2FuIG1vdmUgaW4gYSBzcGVjaWZpYyBkaXJlY1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5jYW5Nb3ZlVG8gPSBmdW5jdGlvbih4LCB5KVxue1xuICAgIC8vIGlmIHggYW5kIHkgaXMgaW4gbWFwIGJvdW5kXG4gICAgaWYoeCA8IDAgfHwgeCA+PSBtYXBXaWR0aCB8fCB5IDwgMCB8fCB5ID49IG1hcEhlaWdodCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAvLyBpZiB0aGUgdGlsZSBpcyBwYXRoIHRpbGUgKG9ubHkgbW92ZSBpZiBpdHMgYSBwYXRoKVxuXHRpZih0aWxlVHlwZXNbZ2FtZU1hcFt0b0luZGV4KHgseSldXS5mbG9vciE9Zmxvb3JUeXBlcy5wYXRoKSB7IHJldHVybiBmYWxzZTsgfVxuXHRyZXR1cm4gdHJ1ZTtcbn07XG5DaGFyYWN0ZXIucHJvdG90eXBlLmNhbk1vdmVVcFx0XHQ9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jYW5Nb3ZlVG8odGhpcy50aWxlRnJvbVswXSwgdGhpcy50aWxlRnJvbVsxXS0xKTsgfTtcbkNoYXJhY3Rlci5wcm90b3R5cGUuY2FuTW92ZURvd24gXHQ9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jYW5Nb3ZlVG8odGhpcy50aWxlRnJvbVswXSwgdGhpcy50aWxlRnJvbVsxXSsxKTsgfTtcbkNoYXJhY3Rlci5wcm90b3R5cGUuY2FuTW92ZUxlZnQgXHQ9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpcy5jYW5Nb3ZlVG8odGhpcy50aWxlRnJvbVswXS0xLCB0aGlzLnRpbGVGcm9tWzFdKTsgfTtcbkNoYXJhY3Rlci5wcm90b3R5cGUuY2FuTW92ZVJpZ2h0IFx0PSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXMuY2FuTW92ZVRvKHRoaXMudGlsZUZyb21bMF0rMSwgdGhpcy50aWxlRnJvbVsxXSk7IH07XG5cbkNoYXJhY3Rlci5wcm90b3R5cGUubW92ZUxlZnRcdD0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1swXS09MTsgdGhpcy50aW1lTW92ZWQgPSB0OyB9O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5tb3ZlUmlnaHRcdD0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1swXSs9MTsgdGhpcy50aW1lTW92ZWQgPSB0OyB9O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5tb3ZlVXBcdD0gZnVuY3Rpb24odCkgeyB0aGlzLnRpbGVUb1sxXS09MTsgdGhpcy50aW1lTW92ZWQgPSB0OyB9O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5tb3ZlRG93blx0PSBmdW5jdGlvbih0KSB7IHRoaXMudGlsZVRvWzFdKz0xOyB0aGlzLnRpbWVNb3ZlZCA9IHQ7IH07XG5cblxuXG5cbi8vIGNvbnZlcnQgeCwgeSBpbnRvIGluZGV4IGluIGdhbWVNYXAgYXJyXG5mdW5jdGlvbiB0b0luZGV4KHgsIHkpIHtcblx0cmV0dXJuKCh5ICogbWFwV2lkdGgpICsgeCk7XG59XG5cbi8vIGxvb3Agc3RhcnRzIHdoZW4gcGFnZSBkb25lIGxvYWRpbmdcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0Y3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKS5nZXRDb250ZXh0KFwiMmRcIik7XG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7XG4gICAgY3R4LmZvbnQgPSBcImJvbGQgMTBwdCBzYW5zLXNlcmlmXCI7XG4gICAgXG4gICAgLy8gYWRkIGV2ZW50TGlzdGVuZXJzIGZvciB0aGUga2V5ZG93bmEgYW5kIGtleXVwXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoZS5rZXlDb2RlPj0zNyAmJiBlLmtleUNvZGU8PTQwKSB7IGtleXNEb3duW2Uua2V5Q29kZV0gPSB0cnVlOyB9XG5cdH0pO1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZihlLmtleUNvZGU+PTM3ICYmIGUua2V5Q29kZTw9NDApIHsga2V5c0Rvd25bZS5rZXlDb2RlXSA9IGZhbHNlOyB9XG4gICAgfSk7XG5cbiAgICAvLyBjaGVja3MgdGhlIENhbnZhcyBkaW1lbnNpb25zIGFuZCBzdG9yZXMgaXQgaW4gdGhlIHZpZXdwb3J0IG9iamVjdHNcbiAgICB2aWV3cG9ydC5zY3JlZW4gPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKS53aWR0aCxcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpLmhlaWdodF07XG59O1xuXG5cbi8vIG1haW4gZnVuY3Rpb25cbmZ1bmN0aW9uIGRyYXdHYW1lKClcbntcblx0aWYoY3R4PT1udWxsKSB7IHJldHVybjsgfVxuXG5cdGxldCBjdXJyZW50RnJhbWVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBsZXQgdGltZUVsYXBzZWQgPSBjdXJyZW50RnJhbWVUaW1lIC0gbGFzdEZyYW1lVGltZTtcbiAgICBcbiAgICAvLyBmcmFtZWNvdW50IFxuXHRsZXQgc2VjID0gTWF0aC5mbG9vcihEYXRlLm5vdygpLzEwMDApO1xuXHRpZihzZWMhPWN1cnJlbnRTZWNvbmQpe1xuXHRcdGN1cnJlbnRTZWNvbmQgPSBzZWM7XG5cdFx0ZnJhbWVzTGFzdFNlY29uZCA9IGZyYW1lQ291bnQ7XG5cdFx0ZnJhbWVDb3VudCA9IDE7XG5cdH1cblx0ZWxzZSB7IGZyYW1lQ291bnQrKzsgfVxuXG4gICAgLy8gcGxheWVyIG1vdmVtZW50XG5cdGlmKCFwbGF5ZXIucHJvY2Vzc01vdmVtZW50KGN1cnJlbnRGcmFtZVRpbWUpKSB7XG5cdFx0aWYoa2V5c0Rvd25bMzhdICYmIHBsYXllci5jYW5Nb3ZlVXAoKSlcdFx0eyBwbGF5ZXIubW92ZVVwKGN1cnJlbnRGcmFtZVRpbWUpOyB9XG5cdFx0ZWxzZSBpZihrZXlzRG93bls0MF0gJiYgcGxheWVyLmNhbk1vdmVEb3duKCkpXHR7IHBsYXllci5tb3ZlRG93bihjdXJyZW50RnJhbWVUaW1lKTsgfVxuXHRcdGVsc2UgaWYoa2V5c0Rvd25bMzddICYmIHBsYXllci5jYW5Nb3ZlTGVmdCgpKVx0eyBwbGF5ZXIubW92ZUxlZnQoY3VycmVudEZyYW1lVGltZSk7IH1cblx0XHRlbHNlIGlmKGtleXNEb3duWzM5XSAmJiBwbGF5ZXIuY2FuTW92ZVJpZ2h0KCkpXHR7IHBsYXllci5tb3ZlUmlnaHQoY3VycmVudEZyYW1lVGltZSk7IH1cbiAgICB9XG5cbiAgICAvLyBzZXQgdGhlIHZpZXdwb3J0IGNlbnRyZSB0byB0aGUgcGxheWVyIHRvcC9sZWZ0IHBvc2l0aW9uIHBsdXMgaGFsZiB0aGUgcGxheWVycyB3aWR0aC9oZWlnaHQuXG4gICAgICAgIHZpZXdwb3J0LnVwZGF0ZShwbGF5ZXIucG9zaXRpb25bMF0gKyAocGxheWVyLmRpbWVuc2lvbnNbMF0vMiksXG4gICAgICAgICAgICBwbGF5ZXIucG9zaXRpb25bMV0gKyAocGxheWVyLmRpbWVuc2lvbnNbMV0vMikpO1xuICAgICAgICAvLyBlcmFzZSBhbnl0aGluZyBvbiB0aGUgQ2FudmFzIGZyb20gdGhlIGxhc3QgZnJhbWVcbiAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzAwMDAwMFwiO1xuICAgICAgICBjdHguZmlsbFJlY3QoMCwgMCwgdmlld3BvcnQuc2NyZWVuWzBdLCB2aWV3cG9ydC5zY3JlZW5bMV0pO1xuICAgIFxuICAgIC8vIG5lc3RlZCBsb29wczogeSBhbmQgeFxuXHRcdGZvcihsZXQgeSA9IHZpZXdwb3J0LnN0YXJ0VGlsZVsxXTsgeSA8PSB2aWV3cG9ydC5lbmRUaWxlWzFdOyArK3kpIHtcblx0XHQgICAgZm9yKGxldCB4ID0gdmlld3BvcnQuc3RhcnRUaWxlWzBdOyB4IDw9IHZpZXdwb3J0LmVuZFRpbGVbMF07ICsreCkge1xuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IHRpbGVUeXBlc1tnYW1lTWFwW3RvSW5kZXgoeCx5KV1dLmNvbG91cjtcblxuICAgICAgICAgICAgY3R4LmZpbGxSZWN0KCB2aWV3cG9ydC5vZmZzZXRbMF0gKyAoeCAqIHRpbGVXaWR0aCApLCB2aWV3cG9ydC5vZmZzZXRbMV0gKyAoeSAqIHRpbGVIZWlnaHQpLFxuXHRcdFx0ICAgIHRpbGVXaWR0aCwgdGlsZUhlaWdodCk7XG5cdFx0fVxuICAgIH1cbiAgICBcbiAgICAvLyBkcmF3IHRoZSBwbGF5ZXJcblxuXHRjdHguZmlsbFN0eWxlID0gXCIjZmI5NTg1XCI7XG5cdGN0eC5maWxsUmVjdCh2aWV3cG9ydC5vZmZzZXRbMF0gKyBwbGF5ZXIucG9zaXRpb25bMF0sIHZpZXdwb3J0Lm9mZnNldFsxXSArIHBsYXllci5wb3NpdGlvblsxXSxcblx0XHRwbGF5ZXIuZGltZW5zaW9uc1swXSwgcGxheWVyLmRpbWVuc2lvbnNbMV0pO1xuXG5cblx0bGFzdEZyYW1lVGltZSA9IGN1cnJlbnRGcmFtZVRpbWU7XG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwic291cmNlUm9vdCI6IiJ9