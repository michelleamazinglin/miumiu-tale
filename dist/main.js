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

var ctx = null; // create a map with 10*10 tile

var gameMap = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // 每个地砖多少pixel

var tileWidth = 40;
var tileHeight = 40; // 地图大小就是10*10

var mapW = 10;
var mapH = 10; // framerate

var currentSecond = 0;
var frameCount = 0;
var framesLastSecond = 0;
var lastFrameTime = 0; // keyCode : boolean to tell us which one are pressed

var keysDown = {
  37: false,
  38: false,
  39: false,
  40: false
}; // 创建一个角色 (miumiu)

var player = new Character(); // in class so we can add more char in future

function Character() {
  this.tileFrom = [1, 1];
  this.tileTo = [1, 1]; // time in millseconds

  this.timeMoved = 0;
  this.delayMove = 700;
  this.dimensions = [30, 30];
  this.position = [45, 45];
} // place it in a specitic tile 


Character.prototype.placeAt = function (x, y) {
  this.tileFrom = [x, y];
  this.tileTo = [x, y]; // x and y position of the tile. update the tileFrom and tileTo properties to the new tile coordinates
  // calculates the pixel position of the characyer use below

  this.position = [tileWidth * x + (tileWidth - this.dimensions[0]) / 2, tileHeight * y + (tileHeight - this.dimensions[1]) / 2];
};

Character.prototype.processMovement = function (t) {
  if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) {
    return false;
  }

  if (t - this.timeMoved >= this.delayMove) {
    this.placeAt(this.tileTo[0], this.tileTo[1]);
  } else {
    this.position[0] = this.tileFrom[0] * tileWidth + (tileWidth - this.dimensions[0]) / 2;
    this.position[1] = this.tileFrom[1] * tileHeight + (tileHeight - this.dimensions[1]) / 2;

    if (this.tileTo[0] != this.tileFrom[0]) {
      var diff = tileWidth / this.delayMove * (t - this.timeMoved);
      this.position[0] += this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff;
    }

    if (this.tileTo[1] != this.tileFrom[1]) {
      var _diff = tileHeight / this.delayMove * (t - this.timeMoved);

      this.position[1] += this.tileTo[1] < this.tileFrom[1] ? 0 - _diff : _diff;
    }

    this.position[0] = Math.round(this.position[0]);
    this.position[1] = Math.round(this.position[1]);
  }

  return true;
};

function toIndex(x, y) {
  return y * mapW + x;
} // loop starts when page done loading


window.onload = function () {
  ctx = document.getElementById('game').getContext("2d");
  requestAnimationFrame(drawGame);
  ctx.font = "bold 10pt sans-serif";
  window.addEventListener("keydown", function (e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      keysDown[e.keyCode] = true;
    }
  });
  window.addEventListener("keyup", function (e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      keysDown[e.keyCode] = false;
    }
  });
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
  }

  if (!player.processMovement(currentFrameTime)) {
    if (keysDown[38] && player.tileFrom[1] > 0 && gameMap[toIndex(player.tileFrom[0], player.tileFrom[1] - 1)] == 1) {
      player.tileTo[1] -= 1;
    } else if (keysDown[40] && player.tileFrom[1] < mapH - 1 && gameMap[toIndex(player.tileFrom[0], player.tileFrom[1] + 1)] == 1) {
      player.tileTo[1] += 1;
    } else if (keysDown[37] && player.tileFrom[0] > 0 && gameMap[toIndex(player.tileFrom[0] - 1, player.tileFrom[1])] == 1) {
      player.tileTo[0] -= 1;
    } else if (keysDown[39] && player.tileFrom[0] < mapW - 1 && gameMap[toIndex(player.tileFrom[0] + 1, player.tileFrom[1])] == 1) {
      player.tileTo[0] += 1;
    }

    if (player.tileFrom[0] != player.tileTo[0] || player.tileFrom[1] != player.tileTo[1]) {
      player.timeMoved = currentFrameTime;
    }
  } // nested loops: y and x


  for (var y = 0; y < mapH; ++y) {
    for (var x = 0; x < mapW; ++x) {
      // to find the index of the current tile in gamemap arr
      switch (gameMap[y * mapW + x]) {
        // which color depending on the value in the gameMap arr
        // 这里的0就是地图上的墙壁
        case 0:
          ctx.fillStyle = "#008dF0";
          break;

        default:
          ctx.fillStyle = "#6dF7b1";
      }

      ctx.fillRect(x * tileWidth, y * tileHeight, tileWidth, tileHeight);
    }
  }

  ctx.fillStyle = "#0000ff";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXIiwibWFwSCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJrZXlzRG93biIsInBsYXllciIsIkNoYXJhY3RlciIsInRpbGVGcm9tIiwidGlsZVRvIiwidGltZU1vdmVkIiwiZGVsYXlNb3ZlIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwicHJvdG90eXBlIiwicGxhY2VBdCIsIngiLCJ5IiwicHJvY2Vzc01vdmVtZW50IiwidCIsImRpZmYiLCJNYXRoIiwicm91bmQiLCJ0b0luZGV4Iiwid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3R2FtZSIsImZvbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJjdXJyZW50RnJhbWVUaW1lIiwiRGF0ZSIsIm5vdyIsInRpbWVFbGFwc2VkIiwic2VjIiwiZmxvb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdE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O0FBQ3JDLEdBdkJMLENBeUJJOzs7QUFDSCxPQUFJLElBQUlsQixDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdqQixJQUFuQixFQUF5QixFQUFFaUIsQ0FBM0IsRUFBOEI7QUFDdkIsU0FBSSxJQUFJRCxDQUFDLEdBQUcsQ0FBWixFQUFlQSxDQUFDLEdBQUdqQixJQUFuQixFQUF5QixFQUFFaUIsQ0FBM0IsRUFBOEI7QUFDMUI7QUFDVCxjQUFPcEIsT0FBTyxDQUFJcUIsQ0FBQyxHQUFHbEIsSUFBTCxHQUFhaUIsQ0FBaEIsQ0FBZDtBQUNhO0FBQ0E7QUFDWixhQUFLLENBQUw7QUFDQ3JCLGFBQUcsQ0FBQzhDLFNBQUosR0FBZ0IsU0FBaEI7QUFDQTs7QUFDRDtBQUNDOUMsYUFBRyxDQUFDOEMsU0FBSixHQUFnQixTQUFoQjtBQVBGOztBQVNTOUMsU0FBRyxDQUFDK0MsUUFBSixDQUFjMUIsQ0FBQyxHQUFHbkIsU0FBbEIsRUFBNkJvQixDQUFDLEdBQUduQixVQUFqQyxFQUE2Q0QsU0FBN0MsRUFBd0RDLFVBQXhEO0FBQ1Q7QUFDRDs7QUFFREgsS0FBRyxDQUFDOEMsU0FBSixHQUFnQixTQUFoQjtBQUNBOUMsS0FBRyxDQUFDK0MsUUFBSixDQUFhcEMsTUFBTSxDQUFDTyxRQUFQLENBQWdCLENBQWhCLENBQWIsRUFBaUNQLE1BQU0sQ0FBQ08sUUFBUCxDQUFnQixDQUFoQixDQUFqQyxFQUNDUCxNQUFNLENBQUNNLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FERCxFQUN1Qk4sTUFBTSxDQUFDTSxVQUFQLENBQWtCLENBQWxCLENBRHZCO0FBSUFSLGVBQWEsR0FBRytCLGdCQUFoQjtBQUNBTix1QkFBcUIsQ0FBQ0MsUUFBRCxDQUFyQjtBQUNBLEM7Ozs7Ozs7Ozs7O0FDM0pELHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9tYXBcIjtcblxuXG5cbiIsImxldCBjdHggPSBudWxsO1xuXG4vLyBjcmVhdGUgYSBtYXAgd2l0aCAxMCoxMCB0aWxlXG5sZXQgZ2FtZU1hcCA9IFtcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCxcblx0MCwgMSwgMCwgMCwgMCwgMSwgMSwgMCwgMCwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCxcblx0MCwgMSwgMCwgMSwgMSwgMSwgMCwgMSwgMSwgMCxcblx0MCwgMSwgMCwgMSwgMSwgMSwgMCwgMCwgMSwgMCxcblx0MCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCxcblx0MCwgMSwgMSwgMSwgMCwgMCwgMCwgMSwgMCwgMCxcblx0MCwgMSwgMSwgMSwgMCwgMSwgMSwgMSwgMSwgMCxcblx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMFxuXTtcbi8vIOavj+S4quWcsOegluWkmuWwkXBpeGVsXG5sZXQgdGlsZVdpZHRoID0gNDBcbmxldCB0aWxlSGVpZ2h0ID0gNDA7XG4vLyDlnLDlm77lpKflsI/lsLHmmK8xMCoxMFxubGV0IG1hcFcgPSAxMFxubGV0IG1hcEggPSAxMDtcbi8vIGZyYW1lcmF0ZVxubGV0IGN1cnJlbnRTZWNvbmQgPSAwXG5sZXQgZnJhbWVDb3VudCA9IDBcbmxldCBmcmFtZXNMYXN0U2Vjb25kID0gMFxubGV0IGxhc3RGcmFtZVRpbWUgPSAwO1xuXG5cbi8vIGtleUNvZGUgOiBib29sZWFuIHRvIHRlbGwgdXMgd2hpY2ggb25lIGFyZSBwcmVzc2VkXG5sZXQga2V5c0Rvd24gPSB7XG5cdDM3IDogZmFsc2UsXG5cdDM4IDogZmFsc2UsXG5cdDM5IDogZmFsc2UsXG5cdDQwIDogZmFsc2Vcbn07XG5cbi8vIOWIm+W7uuS4gOS4quinkuiJsiAobWl1bWl1KVxubGV0IHBsYXllciA9IG5ldyBDaGFyYWN0ZXIoKTtcbi8vIGluIGNsYXNzIHNvIHdlIGNhbiBhZGQgbW9yZSBjaGFyIGluIGZ1dHVyZVxuZnVuY3Rpb24gQ2hhcmFjdGVyKCkge1xuXHR0aGlzLnRpbGVGcm9tXHQ9IFsxLDFdO1xuICAgIHRoaXMudGlsZVRvXHRcdD0gWzEsMV07XG4gICAgLy8gdGltZSBpbiBtaWxsc2Vjb25kc1xuICAgIHRoaXMudGltZU1vdmVkXHQ9IDA7XG4gICAgdGhpcy5kZWxheU1vdmVcdD0gNzAwO1xuXHR0aGlzLmRpbWVuc2lvbnNcdD0gWzMwLDMwXTtcblx0dGhpcy5wb3NpdGlvblx0PSBbNDUsNDVdO1xufVxuXG5cbi8vIHBsYWNlIGl0IGluIGEgc3BlY2l0aWMgdGlsZSBcbkNoYXJhY3Rlci5wcm90b3R5cGUucGxhY2VBdCA9IGZ1bmN0aW9uKHgsIHkpIHtcblx0dGhpcy50aWxlRnJvbVx0PSBbeCx5XTtcbiAgICB0aGlzLnRpbGVUb1x0XHQ9IFt4LHldO1xuICAgIC8vIHggYW5kIHkgcG9zaXRpb24gb2YgdGhlIHRpbGUuIHVwZGF0ZSB0aGUgdGlsZUZyb20gYW5kIHRpbGVUbyBwcm9wZXJ0aWVzIHRvIHRoZSBuZXcgdGlsZSBjb29yZGluYXRlc1xuICAgIC8vIGNhbGN1bGF0ZXMgdGhlIHBpeGVsIHBvc2l0aW9uIG9mIHRoZSBjaGFyYWN5ZXIgdXNlIGJlbG93XG5cdHRoaXMucG9zaXRpb25cdD0gWygoIHRpbGVXaWR0aCAqIHggKSsoICh0aWxlV2lkdGggLSB0aGlzLmRpbWVuc2lvbnNbMF0pIC8gMiApKSxcblx0XHQoKCB0aWxlSGVpZ2h0ICogeSApKyggKHRpbGVIZWlnaHQgLSB0aGlzLmRpbWVuc2lvbnNbMV0pIC8gMiApKV07XG59O1xuXG5cbkNoYXJhY3Rlci5wcm90b3R5cGUucHJvY2Vzc01vdmVtZW50ID0gZnVuY3Rpb24odCkge1xuXHRpZih0aGlzLnRpbGVGcm9tWzBdPT10aGlzLnRpbGVUb1swXSAmJiB0aGlzLnRpbGVGcm9tWzFdPT10aGlzLnRpbGVUb1sxXSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZigodC10aGlzLnRpbWVNb3ZlZCk+PXRoaXMuZGVsYXlNb3ZlKSB7XG5cdFx0dGhpcy5wbGFjZUF0KHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSk7XG5cdH0gZWxzZSB7XG5cdFx0dGhpcy5wb3NpdGlvblswXSA9ICh0aGlzLnRpbGVGcm9tWzBdICogdGlsZVdpZHRoKSArICgodGlsZVdpZHRoLXRoaXMuZGltZW5zaW9uc1swXSkvMik7XG5cdFx0dGhpcy5wb3NpdGlvblsxXSA9ICh0aGlzLnRpbGVGcm9tWzFdICogdGlsZUhlaWdodCkgKyAoKHRpbGVIZWlnaHQtdGhpcy5kaW1lbnNpb25zWzFdKS8yKTtcblxuXHRcdGlmKHRoaXMudGlsZVRvWzBdICE9IHRoaXMudGlsZUZyb21bMF0pIHtcblx0XHRcdGxldCBkaWZmID0gKHRpbGVXaWR0aCAvIHRoaXMuZGVsYXlNb3ZlKSAqICh0LXRoaXMudGltZU1vdmVkKTtcblx0XHRcdHRoaXMucG9zaXRpb25bMF0rPSAodGhpcy50aWxlVG9bMF08dGhpcy50aWxlRnJvbVswXSA/IDAgLSBkaWZmIDogZGlmZik7XG5cdFx0fVxuXHQgICAgaWYodGhpcy50aWxlVG9bMV0gIT0gdGhpcy50aWxlRnJvbVsxXSkge1xuXHRcdFx0bGV0IGRpZmYgPSAodGlsZUhlaWdodCAvIHRoaXMuZGVsYXlNb3ZlKSAqICh0LXRoaXMudGltZU1vdmVkKTtcblx0XHRcdHRoaXMucG9zaXRpb25bMV0rPSAodGhpcy50aWxlVG9bMV08dGhpcy50aWxlRnJvbVsxXSA/IDAgLSBkaWZmIDogZGlmZik7XG5cdFx0fVxuXHRcdHRoaXMucG9zaXRpb25bMF0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMF0pO1xuXHRcdHRoaXMucG9zaXRpb25bMV0gPSBNYXRoLnJvdW5kKHRoaXMucG9zaXRpb25bMV0pO1xuXHR9XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiB0b0luZGV4KHgsIHkpIHtcblx0cmV0dXJuKCh5ICogbWFwVykgKyB4KTtcbn1cblxuXG4vLyBsb29wIHN0YXJ0cyB3aGVuIHBhZ2UgZG9uZSBsb2FkaW5nXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG5cdGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJykuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpO1xuXHRjdHguZm9udCA9IFwiYm9sZCAxMHB0IHNhbnMtc2VyaWZcIjtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuXHRcdGlmKGUua2V5Q29kZT49MzcgJiYgZS5rZXlDb2RlPD00MCkgeyBrZXlzRG93bltlLmtleUNvZGVdID0gdHJ1ZTsgfVxuXHR9KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoZS5rZXlDb2RlPj0zNyAmJiBlLmtleUNvZGU8PTQwKSB7IGtleXNEb3duW2Uua2V5Q29kZV0gPSBmYWxzZTsgfVxuXHR9KTtcbn07XG5cblxuLy8gbWFpbiBmdW5jdGlvblxuZnVuY3Rpb24gZHJhd0dhbWUoKVxue1xuXHRpZihjdHg9PW51bGwpIHsgcmV0dXJuOyB9XG5cblx0bGV0IGN1cnJlbnRGcmFtZVRpbWUgPSBEYXRlLm5vdygpO1xuICAgIGxldCB0aW1lRWxhcHNlZCA9IGN1cnJlbnRGcmFtZVRpbWUgLSBsYXN0RnJhbWVUaW1lO1xuICAgIFxuICAgIC8vIGZyYW1lY291bnQgXG5cdGxldCBzZWMgPSBNYXRoLmZsb29yKERhdGUubm93KCkvMTAwMCk7XG5cdGlmKHNlYyE9Y3VycmVudFNlY29uZCl7XG5cdFx0Y3VycmVudFNlY29uZCA9IHNlYztcblx0XHRmcmFtZXNMYXN0U2Vjb25kID0gZnJhbWVDb3VudDtcblx0XHRmcmFtZUNvdW50ID0gMTtcblx0fVxuXHRlbHNlIHsgZnJhbWVDb3VudCsrOyB9XG5cblx0aWYoIXBsYXllci5wcm9jZXNzTW92ZW1lbnQoY3VycmVudEZyYW1lVGltZSkpIHtcblx0XHRpZihrZXlzRG93blszOF0gJiYgcGxheWVyLnRpbGVGcm9tWzFdPjAgJiYgZ2FtZU1hcFt0b0luZGV4KHBsYXllci50aWxlRnJvbVswXSwgcGxheWVyLnRpbGVGcm9tWzFdLTEpXT09MSkgeyBwbGF5ZXIudGlsZVRvWzFdLT0gMTsgfVxuXHRcdGVsc2UgaWYoa2V5c0Rvd25bNDBdICYmIHBsYXllci50aWxlRnJvbVsxXTwobWFwSC0xKSAmJiBnYW1lTWFwW3RvSW5kZXgocGxheWVyLnRpbGVGcm9tWzBdLCBwbGF5ZXIudGlsZUZyb21bMV0rMSldPT0xKSB7IHBsYXllci50aWxlVG9bMV0rPSAxOyB9XG5cdFx0ZWxzZSBpZihrZXlzRG93blszN10gJiYgcGxheWVyLnRpbGVGcm9tWzBdPjAgJiYgZ2FtZU1hcFt0b0luZGV4KHBsYXllci50aWxlRnJvbVswXS0xLCBwbGF5ZXIudGlsZUZyb21bMV0pXT09MSkgeyBwbGF5ZXIudGlsZVRvWzBdLT0gMTsgfVxuXHRcdGVsc2UgaWYoa2V5c0Rvd25bMzldICYmIHBsYXllci50aWxlRnJvbVswXTwobWFwVy0xKSAmJiBnYW1lTWFwW3RvSW5kZXgocGxheWVyLnRpbGVGcm9tWzBdKzEsIHBsYXllci50aWxlRnJvbVsxXSldPT0xKSB7IHBsYXllci50aWxlVG9bMF0rPSAxOyB9XG5cblx0XHRpZihwbGF5ZXIudGlsZUZyb21bMF0hPXBsYXllci50aWxlVG9bMF0gfHwgcGxheWVyLnRpbGVGcm9tWzFdIT1wbGF5ZXIudGlsZVRvWzFdKVxuXHRcdHsgcGxheWVyLnRpbWVNb3ZlZCA9IGN1cnJlbnRGcmFtZVRpbWU7IH1cbiAgICB9XG4gICAgXG4gICAgLy8gbmVzdGVkIGxvb3BzOiB5IGFuZCB4XG5cdGZvcihsZXQgeSA9IDA7IHkgPCBtYXBIOyArK3kpIHtcbiAgICAgICAgZm9yKGxldCB4ID0gMDsgeCA8IG1hcFc7ICsreCkge1xuICAgICAgICAgICAgLy8gdG8gZmluZCB0aGUgaW5kZXggb2YgdGhlIGN1cnJlbnQgdGlsZSBpbiBnYW1lbWFwIGFyclxuXHRcdFx0c3dpdGNoKGdhbWVNYXBbKCAoeSAqIG1hcFcpICsgeCApXSkge1xuICAgICAgICAgICAgICAgIC8vIHdoaWNoIGNvbG9yIGRlcGVuZGluZyBvbiB0aGUgdmFsdWUgaW4gdGhlIGdhbWVNYXAgYXJyXG4gICAgICAgICAgICAgICAgLy8g6L+Z6YeM55qEMOWwseaYr+WcsOWbvuS4iueahOWimeWjgVxuXHRcdFx0XHRjYXNlIDA6XG5cdFx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IFwiIzAwOGRGMFwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGN0eC5maWxsU3R5bGUgPSBcIiM2ZEY3YjFcIjtcblx0XHRcdH1cbiAgICAgICAgICAgIGN0eC5maWxsUmVjdCggeCAqIHRpbGVXaWR0aCwgeSAqIHRpbGVIZWlnaHQsIHRpbGVXaWR0aCwgdGlsZUhlaWdodCk7XG5cdFx0fVxuXHR9XG5cblx0Y3R4LmZpbGxTdHlsZSA9IFwiIzAwMDBmZlwiO1xuXHRjdHguZmlsbFJlY3QocGxheWVyLnBvc2l0aW9uWzBdLCBwbGF5ZXIucG9zaXRpb25bMV0sXG5cdFx0cGxheWVyLmRpbWVuc2lvbnNbMF0sIHBsYXllci5kaW1lbnNpb25zWzFdKTtcblxuXG5cdGxhc3RGcmFtZVRpbWUgPSBjdXJyZW50RnJhbWVUaW1lO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==