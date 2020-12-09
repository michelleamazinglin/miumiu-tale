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

var gameMap = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 每个地砖多少pixel

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
    // check for left right up and down directions
    // 1. The corresponding Arrow Key is pressed
    // 2. The destination tile is in map bounds; greater than or equal to 0, and less than map width (or map height, depending on axis). 
    // 3. The destination tiles value in the gameMap array is 1, as we are treating tile with a value of 1 as traversable.
    // 只有数值为一的时候我们才可以移动过去
    if (keysDown[38] && player.tileFrom[1] > 0 && gameMap[toIndex(player.tileFrom[0], player.tileFrom[1] - 1)] == 1) {
      player.tileTo[1] -= 1;
    } else if (keysDown[40] && player.tileFrom[1] < mapHeight - 1 && gameMap[toIndex(player.tileFrom[0], player.tileFrom[1] + 1)] == 1) {
      player.tileTo[1] += 1;
    } else if (keysDown[37] && player.tileFrom[0] > 0 && gameMap[toIndex(player.tileFrom[0] - 1, player.tileFrom[1])] == 1) {
      player.tileTo[0] -= 1;
    } else if (keysDown[39] && player.tileFrom[0] < mapWidth - 1 && gameMap[toIndex(player.tileFrom[0] + 1, player.tileFrom[1])] == 1) {
      player.tileTo[0] += 1;
    } // if the destination (tileTo) is now different from the current tile (tileFrom). If so, we update the player timeMoved to the currentFrameTime


    if (player.tileFrom[0] != player.tileTo[0] || player.tileFrom[1] != player.tileTo[1]) {
      player.timeMoved = currentFrameTime;
    } // set the viewport centre to the player top/left position plus half the players width/height.


    viewport.update(player.position[0] + player.dimensions[0] / 2, player.position[1] + player.dimensions[1] / 2); // erase anything on the Canvas from the last frame

    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);
  } // nested loops: y and x


  for (var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y) {
    for (var x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x) {
      // to find the index of the current tile in gamemap arr
      switch (gameMap[y * mapWidth + x]) {
        // which color depending on the value in the gameMap arr
        // 这里的0就是地图上的墙壁
        case 0:
          ctx.fillStyle = "#008dF0";
          break;

        default:
          ctx.fillStyle = "#6dF7b1";
      }

      ctx.fillRect(viewport.offset[0] + x * tileWidth, viewport.offset[1] + y * tileHeight, tileWidth, tileHeight);
    }
  } // draw the player


  ctx.fillStyle = "#fb9585";
  ctx.fillRect(player.position[0], player.position[1], player.dimensions[0], player.dimensions[1]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJrZXlzRG93biIsInBsYXllciIsIkNoYXJhY3RlciIsInRpbGVGcm9tIiwidGlsZVRvIiwidGltZU1vdmVkIiwiZGVsYXlNb3ZlIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwicHJvdG90eXBlIiwicGxhY2VBdCIsIngiLCJ5IiwicHJvY2Vzc01vdmVtZW50IiwidCIsImRpZmZlcmVuY2UiLCJNYXRoIiwicm91bmQiLCJ2aWV3cG9ydCIsInNjcmVlbiIsInN0YXJ0VGlsZSIsImVuZFRpbGUiLCJvZmZzZXQiLCJ1cGRhdGUiLCJvZmZzZXRYIiwib2Zmc2V0WSIsImZsb29yIiwidGlsZSIsImNlaWwiLCJ0b0luZGV4Iiwid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3R2FtZSIsImZvbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJ3aWR0aCIsImhlaWdodCIsImN1cnJlbnRGcmFtZVRpbWUiLCJEYXRlIiwibm93IiwidGltZUVsYXBzZWQiLCJzZWMiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFF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QUFDRSxTQUFULENBQW1CLENBQW5CLENBQVosRUFBbUNULENBQUMsSUFBSU8sUUFBUSxDQUFDRyxPQUFULENBQWlCLENBQWpCLENBQXhDLEVBQTZELEVBQUVWLENBQS9ELEVBQWtFO0FBQzVEO0FBQ1QsY0FBT3BCLE9BQU8sQ0FBSXFCLENBQUMsR0FBR2xCLFFBQUwsR0FBaUJpQixDQUFwQixDQUFkO0FBQ2E7QUFDQTtBQUNaLGFBQUssQ0FBTDtBQUNDckIsYUFBRyxDQUFDMEQsU0FBSixHQUFnQixTQUFoQjtBQUNBOztBQUNEO0FBQ0MxRCxhQUFHLENBQUMwRCxTQUFKLEdBQWdCLFNBQWhCO0FBUEY7O0FBU1MxRCxTQUFHLENBQUMyRCxRQUFKLENBQWMvQixRQUFRLENBQUNJLE1BQVQsQ0FBZ0IsQ0FBaEIsSUFBc0JYLENBQUMsR0FBR25CLFNBQXhDLEVBQXFEMEIsUUFBUSxDQUFDSSxNQUFULENBQWdCLENBQWhCLElBQXNCVixDQUFDLEdBQUduQixVQUEvRSxFQUNMRCxTQURLLEVBQ01DLFVBRE47QUFFVDtBQUNFLEdBOURMLENBZ0VJOzs7QUFFSEgsS0FBRyxDQUFDMEQsU0FBSixHQUFnQixTQUFoQjtBQUNBMUQsS0FBRyxDQUFDMkQsUUFBSixDQUFhaEQsTUFBTSxDQUFDTyxRQUFQLENBQWdCLENBQWhCLENBQWIsRUFBaUNQLE1BQU0sQ0FBQ08sUUFBUCxDQUFnQixDQUFoQixDQUFqQyxFQUNDUCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FERCxFQUN1Qk4sTUFBTSxDQUFDTSxVQUFQLENBQWtCLENBQWxCLENBRHZCO0FBSUFSLGVBQWEsR0FBRzRDLGdCQUFoQjtBQUNBUix1QkFBcUIsQ0FBQ0MsUUFBRCxDQUFyQjtBQUNBLEM7Ozs7Ozs7Ozs7O0FDMVBELHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9tYXBcIjtcblxuXG5cbiIsIi8vIGkgd2FudCBhIGNhbWVyYSBmb2xsb3dpbmcgdGhlIGNoYXIgYXJvdW5kIHRoZSBtYXBcblxuXG5sZXQgY3R4ID0gbnVsbDtcblxuLy8gY3JlYXRlIGEgbWFwIHdpdGggMTAqMTAgdGlsZVxubGV0IGdhbWVNYXAgPSBbXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDAsXG5cdDAsIDEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDAsIDEsIDAsIDEsIDAsIDAsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsXG5cdDAsIDEsIDAsIDEsIDAsIDAsIDAsIDEsIDEsIDAsIDEsIDEsIDEsIDAsIDEsIDAsIDEsIDEsIDEsIDAsXG5cdDAsIDEsIDAsIDEsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDAsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDEsIDAsIDEsIDEsIDEsIDAsXG5cdDAsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsXG5cdDAsIDAsIDEsIDAsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDEsIDAsXG5cdDAsIDEsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsXG5cdDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsXG5cdDAsIDEsIDAsIDEsIDAsIDAsIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDAsXG5cdDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDEsIDAsIDAsIDAsIDAsIDEsIDEsIDAsIDAsIDAsIDAsXG5cdDAsIDEsIDAsIDEsIDEsIDEsIDAsIDEsIDAsIDEsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDAsIDEsIDAsXG5cdDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDEsIDAsIDAsIDEsIDAsIDEsIDEsIDEsIDAsIDEsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBcbl07XG4vLyDmr4/kuKrlnLDnoJblpJrlsJFwaXhlbFxubGV0IHRpbGVXaWR0aCA9IDQwO1xubGV0IHRpbGVIZWlnaHQgPSA0MDtcbi8vIOWcsOWbvuWkp+Wwj+WwseaYrzEwKjEwXG5sZXQgbWFwV2lkdGggPSAyMDtcbmxldCBtYXBIZWlnaHQgPSAyMDtcbi8vIGZyYW1lcmF0ZVxubGV0IGN1cnJlbnRTZWNvbmQgPSAwO1xubGV0IGZyYW1lQ291bnQgPSAwO1xubGV0IGZyYW1lc0xhc3RTZWNvbmQgPSAwO1xubGV0IGxhc3RGcmFtZVRpbWUgPSAwO1xuXG5cbi8vIGtleUNvZGUgOiBib29sZWFuIHRvIHRlbGwgdXMgd2hpY2ggb25lIGFyZSBwcmVzc2VkXG5sZXQga2V5c0Rvd24gPSB7XG4gICAgLy8gMzc6IGxlZnRcbiAgICAzNyA6IGZhbHNlLFxuICAgIC8vIDM4OiB1cFxuICAgIDM4IDogZmFsc2UsXG4gICAgLy8gMzk6IHJpZ2h0XG4gICAgMzkgOiBmYWxzZSxcbiAgICAvLyA0MDogZG93blxuICAgIDQwIDogZmFsc2VcbiAgICAvLyAzMjogc3BhY2Vcbn07XG5cblxuXG4vLyDliJvlu7rkuIDkuKrop5LoibIgKG1pdW1pdSlcbmxldCBwbGF5ZXIgPSBuZXcgQ2hhcmFjdGVyKCk7XG4vLyBpbiBjbGFzcyBzbyB3ZSBjYW4gYWRkIG1vcmUgY2hhciBpbiBmdXR1cmVcbmZ1bmN0aW9uIENoYXJhY3RlcigpIHtcblx0dGhpcy50aWxlRnJvbVx0PSBbMSwxXTtcbiAgICB0aGlzLnRpbGVUb1x0XHQ9IFsxLDFdO1xuICAgIC8vIHRpbWUgaW4gbWlsbHNlY29uZHNcbiAgICB0aGlzLnRpbWVNb3ZlZFx0PSAwO1xuICAgIHRoaXMuZGVsYXlNb3ZlXHQ9IDcwMDtcblx0dGhpcy5kaW1lbnNpb25zXHQ9IFszMCwzMF07XG5cdHRoaXMucG9zaXRpb25cdD0gWzQ1LDQ1XTtcbn1cblxuXG4vLyBwbGFjZSBjaGFyIGluIGEgc3BlY2l0aWMgdGlsZSBcbkNoYXJhY3Rlci5wcm90b3R5cGUucGxhY2VBdCA9IGZ1bmN0aW9uKHgsIHkpIHtcblx0dGhpcy50aWxlRnJvbVx0PSBbeCx5XTtcbiAgICB0aGlzLnRpbGVUb1x0XHQ9IFt4LHldO1xuICAgIC8vIHggYW5kIHkgcG9zaXRpb24gb2YgdGhlIHRpbGUuIHVwZGF0ZSB0aGUgdGlsZUZyb20gYW5kIHRpbGVUbyBwcm9wZXJ0aWVzIHRvIHRoZSBuZXcgdGlsZSBjb29yZGluYXRlc1xuICAgIC8vIGNhbGN1bGF0ZXMgdGhlIHBpeGVsIHBvc2l0aW9uIG9mIHRoZSBjaGFyYWN5ZXIgdXNlIGJlbG93XG5cdHRoaXMucG9zaXRpb25cdD0gWygoIHRpbGVXaWR0aCAqIHggKSsoICh0aWxlV2lkdGggLSB0aGlzLmRpbWVuc2lvbnNbMF0pIC8gMiApKSxcblx0XHQoKCB0aWxlSGVpZ2h0ICogeSApKyggKHRpbGVIZWlnaHQgLSB0aGlzLmRpbWVuc2lvbnNbMV0pIC8gMiApKV07XG59O1xuXG4vLyBjYWxjdWxhdGlvbnMgZWFjaCBmcmFtZSB0byBmaW5kIHBvc2l0aW9uLCBwYXNzIGluIGEgdGltZVxuQ2hhcmFjdGVyLnByb3RvdHlwZS5wcm9jZXNzTW92ZW1lbnQgPSBmdW5jdGlvbih0KSB7XG4gICAgLy8gaWYgY2hhciB0aWxlVG8gPT0gdGlsZUZyb20gY2hhciBpcyBub3QgbW92aW5nLCBzbyByZXR1cm4gZmFsc2Vcblx0aWYoIHRoaXMudGlsZUZyb21bMF0gPT0gdGhpcy50aWxlVG9bMF0gJiYgdGhpcy50aWxlRnJvbVsxXSA9PSB0aGlzLnRpbGVUb1sxXSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgICAvLyBpZiB0aGUgYW1vdW50IG9mIHRpbWUgcGFzc2VkIHNpbmNlIGNoYXIgYmVnYW4gaXRzIGN1cnJlbnQgbW92ZSA+PSB0aGUgdGltZSBmb3IgY2hhciB0byBtb3ZlIDEgdGlsZS4gd2Ugc2V0IHBvc2l0aW9uIHVzaW5nIHBsYWNlQXQgZnVuY3Rpb25cbiAgICAvLyBha2E6IGlmIGNoYXIgc3RpbGwgbW92aW5nXG5cdGlmKCh0IC0gdGhpcy50aW1lTW92ZWQpID49IHRoaXMuZGVsYXlNb3ZlKSB7XG5cdFx0dGhpcy5wbGFjZUF0KHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSk7XG5cdH0gZWxzZSB7XG4gICAgICAgIC8vIGN1cnJlbnQgcG9zaXRpb24gb24gY2FudmFzXG5cdFx0dGhpcy5wb3NpdGlvblswXSA9ICh0aGlzLnRpbGVGcm9tWzBdICogdGlsZVdpZHRoKSArICgodGlsZVdpZHRoLXRoaXMuZGltZW5zaW9uc1swXSkvMik7XG5cdFx0dGhpcy5wb3NpdGlvblsxXSA9ICh0aGlzLnRpbGVGcm9tWzFdICogdGlsZUhlaWdodCkgKyAoKHRpbGVIZWlnaHQtdGhpcy5kaW1lbnNpb25zWzFdKS8yKTtcblxuICAgICAgICAvLyBpZiBjaGFyIGlzIG1vdmluZyBvbiB4IGNvb3JkaW5hdGUsIGNhbGN1bGF0ZSBwaXhlbHNcblx0XHRpZih0aGlzLnRpbGVUb1swXSAhPSB0aGlzLnRpbGVGcm9tWzBdKSB7XG4gICAgICAgICAgICAvLyBkaWZmZXJlbmNlID0gZGlzdGFuY2UgbW92ZWRcbiAgICAgICAgICAgIC8vIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBkZXN0aW5hdGlvbiB0aWxlICh0aWxlVG8pIGlzIGxlZnQgKG9yIGFib3ZlKSwgb3IgcmlnaHQgKG9yIGJlbG93KSB0aGUgdGlsZSB3ZSBhcmUgbW92aW5nIGZyb20gKHRpbGVGcm9tKSwgd2Ugc3VidHJhY3Qgb3IgYWRkIHRoaXMgYW1vdW50IHRvIHRoZSBDaGFyYWN0ZXJzIHBvc2l0aW9uLiBcblx0XHRcdGxldCBkaWZmZXJlbmNlID0gKHRpbGVXaWR0aCAvIHRoaXMuZGVsYXlNb3ZlKSAqICh0IC0gdGhpcy50aW1lTW92ZWQpO1xuXHRcdFx0dGhpcy5wb3NpdGlvblswXSs9ICh0aGlzLnRpbGVUb1swXSA8IHRoaXMudGlsZUZyb21bMF0gPyAwIC0gZGlmZmVyZW5jZSA6IGRpZmZlcmVuY2UpO1xuXHRcdH1cblx0ICAgIGlmKHRoaXMudGlsZVRvWzFdICE9IHRoaXMudGlsZUZyb21bMV0pIHtcblx0XHRcdGxldCBkaWZmZXJlbmNlID0gKHRpbGVIZWlnaHQgLyB0aGlzLmRlbGF5TW92ZSkgKiAodC10aGlzLnRpbWVNb3ZlZCk7XG5cdFx0XHR0aGlzLnBvc2l0aW9uWzFdKz0gKHRoaXMudGlsZVRvWzFdPHRoaXMudGlsZUZyb21bMV0gPyAwIC0gZGlmZmVyZW5jZSA6IGRpZmZlcmVuY2UpO1xuICAgICAgICB9XG4gICAgICAgIC8vIHJvdW5kIHggJiB5IHRvIHdob2xlIG51bWJlclxuXHRcdHRoaXMucG9zaXRpb25bMF0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMF0pO1xuXHRcdHRoaXMucG9zaXRpb25bMV0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMV0pO1xuICAgIH1cbiAgICAvLyB0cnVlID0gY2hhciBpcyBjdXJyZW50bHkgbW92aW5nXG5cdHJldHVybiB0cnVlO1xufVxuXG5cbi8vIGNyZWF0ZSBhIGNhbWVyYSBvYmplY3RcbmxldCB2aWV3cG9ydCA9IHtcbiAgICAvLyBjYW52YXMgd2lkdGggYW5kIGhlaWdodFxuICAgIHNjcmVlbjogWzAsMF0sXG4gICAgLy8gdGlsZSBjb29yZGluYXRlcyBvZiB0aGUgdG9wLWxlZnQgYXJlYSBvZiB0aGUgbWFwXG4gICAgc3RhcnRUaWxlOiBbMCwwXSxcbiAgICAvLyB0aWxlIGNvb3JkaW5hdGVzIG9mIHRoZSBib3R0b20tcmlnaHQgYXJlYSBvZiB0aGUgbWFwXG4gICAgZW5kVGlsZTogWzAsMF0sXG4gICAgLy8gb2Zmc2V0IGluIHBpeGVsc1xuICAgIG9mZnNldDogWzAsMF0sXG4gICAgLy8gdXBkYXRlIGZ1bmN0aW9uLCB4IHkgaXMgb3VyIGNlbnRlciBhcmVhXG4gICAgdXBkYXRlOiBmdW5jdGlvbihvZmZzZXRYLCBvZmZzZXRZKSB7XG4gICAgICAgIC8vIG9mZnNldDogaGFsZiB0aGUgY2FudmFzIHdpZHRoIHx8IGhlaWdodCAocm91bmQgZG93biB0byB3aG9sZSBudW0pXG5cdFx0dGhpcy5vZmZzZXRbMF0gPSBNYXRoLmZsb29yKCh0aGlzLnNjcmVlblswXS8yKSAtIG9mZnNldFgpO1xuICAgICAgICB0aGlzLm9mZnNldFsxXSA9IE1hdGguZmxvb3IoKHRoaXMuc2NyZWVuWzFdLzIpIC0gb2Zmc2V0WSk7XG5cbiAgICAgICAgLy8gd2UgZmluZCB0aGUgY29vcmRpbmF0ZXMgb2YgdGhlIHRpbGVcbiAgICAgICAgbGV0IHRpbGUgPSBbIE1hdGguZmxvb3Iob2Zmc2V0WCAvIHRpbGVXaWR0aCksIE1hdGguZmxvb3Iob2Zmc2V0WSAvIHRpbGVIZWlnaHQpIF07XG4gICAgICAgIC8vICBjYWxjdWxhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCB0aWxlIG9uIHRoZSB4IGF4aXMgYnkgY2FsY3VsdGluZyB0aGUgbWF4aW11bSBudW1iZXIgb2YgdGlsZXMgdGhhdCBjYW4gZml0IGluIGhhbGYgb2YgdGhlIHNjcmVlbiB3aWR0aCwgYW5kIHRha2luZyB0aGF0IG51bWJlciBhd2F5IGZyb20gdGhlIGNlbnRyZSB0aWxlLlxuICAgICAgICAvLyAgcmVtb3ZlIGFuIGFkZGl0aW9uYWwgMSB0byBhbGxvdyBmb3IgdGlsZXMgdGhhdCBhcmUgbm90IGNvbXBsZXRlbHkgb24gdGhlIHNjcmVlbiwgYnV0IG9ubHkgcGFydGlhbGx5LlxuICAgICAgICB0aGlzLnN0YXJ0VGlsZVswXSA9IHRpbGVbMF0gLSAxIC0gTWF0aC5jZWlsKCh0aGlzLnNjcmVlblswXS8yKSAvIHRpbGVXaWR0aCk7XG5cdFx0dGhpcy5zdGFydFRpbGVbMV0gPSB0aWxlWzFdIC0gMSAtIE1hdGguY2VpbCgodGhpcy5zY3JlZW5bMV0vMikgLyB0aWxlSGVpZ2h0KTtcblxuICAgICAgICAvLyBjaGVjayB0byBtYWtlIHN1cmUgeCBvciB5IGlzIG5vdCBsZXNzIHRoZW4gMCAob3Vyc2lkZSB0aGUgYm91bmRzKVxuICAgICAgICBpZih0aGlzLnN0YXJ0VGlsZVswXSA8IDApIHsgdGhpcy5zdGFydFRpbGVbMF0gPSAwOyB9XG5cdFx0aWYodGhpcy5zdGFydFRpbGVbMV0gPCAwKSB7IHRoaXMuc3RhcnRUaWxlWzFdID0gMDsgfVxuXG4gICAgICAgIHRoaXMuZW5kVGlsZVswXSA9IHRpbGVbMF0gKyAxICsgTWF0aC5jZWlsKCh0aGlzLnNjcmVlblswXS8yKSAvIHRpbGVXaWR0aCk7XG5cdFx0dGhpcy5lbmRUaWxlWzFdID0gdGlsZVsxXSArIDEgKyBNYXRoLmNlaWwoKHRoaXMuc2NyZWVuWzFdLzIpIC8gdGlsZUhlaWdodCk7XG5cblx0XHRpZih0aGlzLmVuZFRpbGVbMF0gPj0gbWFwV2lkdGgpIHsgdGhpcy5lbmRUaWxlWzBdID0gbWFwV2lkdGggLTE7IH1cblx0XHRpZih0aGlzLmVuZFRpbGVbMV0gPj0gbWFwSGVpZ2h0KSB7IHRoaXMuZW5kVGlsZVsxXSA9IG1hcEhlaWdodCAtIDE7IH1cbiAgICAgICAgfVxufTtcblxuXG5cbi8vIGNvbnZlcnQgeCwgeSBpbnRvIGluZGV4IGluIGdhbWVNYXAgYXJyXG5mdW5jdGlvbiB0b0luZGV4KHgsIHkpIHtcblx0cmV0dXJuKCh5ICogbWFwV2lkdGgpICsgeCk7XG59XG5cbi8vIGxvb3Agc3RhcnRzIHdoZW4gcGFnZSBkb25lIGxvYWRpbmdcbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpIHtcblx0Y3R4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKS5nZXRDb250ZXh0KFwiMmRcIik7XG5cdHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7XG4gICAgY3R4LmZvbnQgPSBcImJvbGQgMTBwdCBzYW5zLXNlcmlmXCI7XG4gICAgXG4gICAgLy8gYWRkIGV2ZW50TGlzdGVuZXJzIGZvciB0aGUga2V5ZG93bmEgYW5kIGtleXVwXG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoZS5rZXlDb2RlPj0zNyAmJiBlLmtleUNvZGU8PTQwKSB7IGtleXNEb3duW2Uua2V5Q29kZV0gPSB0cnVlOyB9XG5cdH0pO1xuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZihlLmtleUNvZGU+PTM3ICYmIGUua2V5Q29kZTw9NDApIHsga2V5c0Rvd25bZS5rZXlDb2RlXSA9IGZhbHNlOyB9XG4gICAgfSk7XG5cbiAgICAvLyBjaGVja3MgdGhlIENhbnZhcyBkaW1lbnNpb25zIGFuZCBzdG9yZXMgaXQgaW4gdGhlIHZpZXdwb3J0IG9iamVjdHNcbiAgICB2aWV3cG9ydC5zY3JlZW4gPSBbZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dhbWUnKS53aWR0aCxcblx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpLmhlaWdodF07XG59O1xuXG5cbi8vIG1haW4gZnVuY3Rpb25cbmZ1bmN0aW9uIGRyYXdHYW1lKClcbntcblx0aWYoY3R4PT1udWxsKSB7IHJldHVybjsgfVxuXG5cdGxldCBjdXJyZW50RnJhbWVUaW1lID0gRGF0ZS5ub3coKTtcbiAgICBsZXQgdGltZUVsYXBzZWQgPSBjdXJyZW50RnJhbWVUaW1lIC0gbGFzdEZyYW1lVGltZTtcbiAgICBcbiAgICAvLyBmcmFtZWNvdW50IFxuXHRsZXQgc2VjID0gTWF0aC5mbG9vcihEYXRlLm5vdygpLzEwMDApO1xuXHRpZihzZWMhPWN1cnJlbnRTZWNvbmQpe1xuXHRcdGN1cnJlbnRTZWNvbmQgPSBzZWM7XG5cdFx0ZnJhbWVzTGFzdFNlY29uZCA9IGZyYW1lQ291bnQ7XG5cdFx0ZnJhbWVDb3VudCA9IDE7XG5cdH1cblx0ZWxzZSB7IGZyYW1lQ291bnQrKzsgfVxuXG4gICAgLy8gcGxheWVyIG1vdmVtZW50XG5cdGlmKCFwbGF5ZXIucHJvY2Vzc01vdmVtZW50KGN1cnJlbnRGcmFtZVRpbWUpKSB7XG4gICAgICAgIC8vIGNoZWNrIGZvciBsZWZ0IHJpZ2h0IHVwIGFuZCBkb3duIGRpcmVjdGlvbnNcbiAgICAgICAgLy8gMS4gVGhlIGNvcnJlc3BvbmRpbmcgQXJyb3cgS2V5IGlzIHByZXNzZWRcbiAgICAgICAgLy8gMi4gVGhlIGRlc3RpbmF0aW9uIHRpbGUgaXMgaW4gbWFwIGJvdW5kczsgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIDAsIGFuZCBsZXNzIHRoYW4gbWFwIHdpZHRoIChvciBtYXAgaGVpZ2h0LCBkZXBlbmRpbmcgb24gYXhpcykuIFxuICAgICAgICAvLyAzLiBUaGUgZGVzdGluYXRpb24gdGlsZXMgdmFsdWUgaW4gdGhlIGdhbWVNYXAgYXJyYXkgaXMgMSwgYXMgd2UgYXJlIHRyZWF0aW5nIHRpbGUgd2l0aCBhIHZhbHVlIG9mIDEgYXMgdHJhdmVyc2FibGUuXG4gICAgICAgIC8vIOWPquacieaVsOWAvOS4uuS4gOeahOaXtuWAmeaIkeS7rOaJjeWPr+S7peenu+WKqOi/h+WOu1xuXHRcdGlmIChrZXlzRG93blszOF0gJiYgcGxheWVyLnRpbGVGcm9tWzFdID4gMCAmJiBnYW1lTWFwWyB0b0luZGV4KHBsYXllci50aWxlRnJvbVswXSwgcGxheWVyLnRpbGVGcm9tWzFdIC0gMSldID09IDEpIHtcbiAgICAgICAgICAgIHBsYXllci50aWxlVG9bMV0tPSAxOyBcbiAgICAgICAgfSBlbHNlIGlmIChrZXlzRG93bls0MF0gJiYgcGxheWVyLnRpbGVGcm9tWzFdIDwgKG1hcEhlaWdodC0xKSAmJiBnYW1lTWFwW3RvSW5kZXgocGxheWVyLnRpbGVGcm9tWzBdLCBwbGF5ZXIudGlsZUZyb21bMV0rMSldPT0xKSB7XG4gICAgICAgICAgICBwbGF5ZXIudGlsZVRvWzFdKz0gMTsgfSBlbHNlIGlmIChrZXlzRG93blszN10gJiYgcGxheWVyLnRpbGVGcm9tWzBdPjAgJiYgZ2FtZU1hcFt0b0luZGV4KHBsYXllci50aWxlRnJvbVswXSAtIDEsIHBsYXllci50aWxlRnJvbVsxXSldID09IDEpIHsgXG4gICAgICAgICAgICAgICAgcGxheWVyLnRpbGVUb1swXS09IDE7IFxuICAgICAgICB9IGVsc2UgaWYgKGtleXNEb3duWzM5XSAmJiBwbGF5ZXIudGlsZUZyb21bMF08KG1hcFdpZHRoLTEpICYmIGdhbWVNYXBbdG9JbmRleChwbGF5ZXIudGlsZUZyb21bMF0rMSwgcGxheWVyLnRpbGVGcm9tWzFdKV09PTEpIHsgXG4gICAgICAgICAgICBwbGF5ZXIudGlsZVRvWzBdKz0gMTsgXG4gICAgICAgIH1cblxuICAgICAgICAvLyBpZiB0aGUgZGVzdGluYXRpb24gKHRpbGVUbykgaXMgbm93IGRpZmZlcmVudCBmcm9tIHRoZSBjdXJyZW50IHRpbGUgKHRpbGVGcm9tKS4gSWYgc28sIHdlIHVwZGF0ZSB0aGUgcGxheWVyIHRpbWVNb3ZlZCB0byB0aGUgY3VycmVudEZyYW1lVGltZVxuXHRcdGlmKHBsYXllci50aWxlRnJvbVswXSE9cGxheWVyLnRpbGVUb1swXSB8fCBwbGF5ZXIudGlsZUZyb21bMV0hPXBsYXllci50aWxlVG9bMV0pIHsgXG4gICAgICAgICAgICBwbGF5ZXIudGltZU1vdmVkID0gY3VycmVudEZyYW1lVGltZTsgXG4gICAgICAgIH1cblxuICAgICAgICAvLyBzZXQgdGhlIHZpZXdwb3J0IGNlbnRyZSB0byB0aGUgcGxheWVyIHRvcC9sZWZ0IHBvc2l0aW9uIHBsdXMgaGFsZiB0aGUgcGxheWVycyB3aWR0aC9oZWlnaHQuXG4gICAgICAgIHZpZXdwb3J0LnVwZGF0ZShwbGF5ZXIucG9zaXRpb25bMF0gKyAocGxheWVyLmRpbWVuc2lvbnNbMF0vMiksXG4gICAgICAgIHBsYXllci5wb3NpdGlvblsxXSArIChwbGF5ZXIuZGltZW5zaW9uc1sxXS8yKSk7XG4gICAgICAgIC8vIGVyYXNlIGFueXRoaW5nIG9uIHRoZSBDYW52YXMgZnJvbSB0aGUgbGFzdCBmcmFtZVxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDAwMDAwXCI7XG4gICAgICAgIGN0eC5maWxsUmVjdCgwLCAwLCB2aWV3cG9ydC5zY3JlZW5bMF0sIHZpZXdwb3J0LnNjcmVlblsxXSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgLy8gbmVzdGVkIGxvb3BzOiB5IGFuZCB4XG5cdFx0Zm9yKGxldCB5ID0gdmlld3BvcnQuc3RhcnRUaWxlWzFdOyB5IDw9IHZpZXdwb3J0LmVuZFRpbGVbMV07ICsreSkge1xuXHRcdCAgICBmb3IobGV0IHggPSB2aWV3cG9ydC5zdGFydFRpbGVbMF07IHggPD0gdmlld3BvcnQuZW5kVGlsZVswXTsgKyt4KSB7XG4gICAgICAgICAgICAvLyB0byBmaW5kIHRoZSBpbmRleCBvZiB0aGUgY3VycmVudCB0aWxlIGluIGdhbWVtYXAgYXJyXG5cdFx0XHRzd2l0Y2goZ2FtZU1hcFsoICh5ICogbWFwV2lkdGgpICsgeCApXSkge1xuICAgICAgICAgICAgICAgIC8vIHdoaWNoIGNvbG9yIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgaW4gdGhlIGdhbWVNYXAgYXJyXG4gICAgICAgICAgICAgICAgLy8g6L+Z6YeM55qEMOWwseaYr+WcsOWbvuS4iueahOWimeWjgVxuXHRcdFx0XHRjYXNlIDA6XG5cdFx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IFwiIzAwOGRGMFwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGN0eC5maWxsU3R5bGUgPSBcIiM2ZEY3YjFcIjtcblx0XHRcdH1cbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCggdmlld3BvcnQub2Zmc2V0WzBdICsgKHggKiB0aWxlV2lkdGggKSwgdmlld3BvcnQub2Zmc2V0WzFdICsgKHkgKiB0aWxlSGVpZ2h0KSxcblx0XHRcdCAgICB0aWxlV2lkdGgsIHRpbGVIZWlnaHQpO1xuXHRcdH1cbiAgICB9XG4gICAgXG4gICAgLy8gZHJhdyB0aGUgcGxheWVyXG5cblx0Y3R4LmZpbGxTdHlsZSA9IFwiI2ZiOTU4NVwiO1xuXHRjdHguZmlsbFJlY3QocGxheWVyLnBvc2l0aW9uWzBdLCBwbGF5ZXIucG9zaXRpb25bMV0sXG5cdFx0cGxheWVyLmRpbWVuc2lvbnNbMF0sIHBsYXllci5kaW1lbnNpb25zWzFdKTtcblxuXG5cdGxhc3RGcmFtZVRpbWUgPSBjdXJyZW50RnJhbWVUaW1lO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==