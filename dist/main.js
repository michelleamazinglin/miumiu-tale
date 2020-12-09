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

 // import "./scripts/canvas";

/***/ }),

/***/ "./src/scripts/map.js":
/*!****************************!*\
  !*** ./src/scripts/map.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ctx = null; // create a map with 10*10 tile

var gameMap = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var tileW = 40,
    tileH = 40;
var mapW = 10,
    mapH = 10;
var currentSecond = 0,
    frameCount = 0,
    framesLastSecond = 0,
    lastFrameTime = 0;
var keysDown = {
  37: false,
  38: false,
  39: false,
  40: false
};
var player = new Character();

function Character() {
  this.tileFrom = [1, 1];
  this.tileTo = [1, 1];
  this.timeMoved = 0;
  this.dimensions = [30, 30];
  this.position = [45, 45];
  this.delayMove = 700;
}

Character.prototype.placeAt = function (x, y) {
  this.tileFrom = [x, y];
  this.tileTo = [x, y];
  this.position = [tileW * x + (tileW - this.dimensions[0]) / 2, tileH * y + (tileH - this.dimensions[1]) / 2];
};

Character.prototype.processMovement = function (t) {
  if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) {
    return false;
  }

  if (t - this.timeMoved >= this.delayMove) {
    this.placeAt(this.tileTo[0], this.tileTo[1]);
  } else {
    this.position[0] = this.tileFrom[0] * tileW + (tileW - this.dimensions[0]) / 2;
    this.position[1] = this.tileFrom[1] * tileH + (tileH - this.dimensions[1]) / 2;

    if (this.tileTo[0] != this.tileFrom[0]) {
      var diff = tileW / this.delayMove * (t - this.timeMoved);
      this.position[0] += this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff;
    }

    if (this.tileTo[1] != this.tileFrom[1]) {
      var _diff = tileH / this.delayMove * (t - this.timeMoved);

      this.position[1] += this.tileTo[1] < this.tileFrom[1] ? 0 - _diff : _diff;
    }

    this.position[0] = Math.round(this.position[0]);
    this.position[1] = Math.round(this.position[1]);
  }

  return true;
};

function toIndex(x, y) {
  return y * mapW + x;
}

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
};

function drawGame() {
  if (ctx == null) {
    return;
  }

  var currentFrameTime = Date.now();
  var timeElapsed = currentFrameTime - lastFrameTime;
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
  }

  for (var y = 0; y < mapH; ++y) {
    for (var x = 0; x < mapW; ++x) {
      switch (gameMap[y * mapW + x]) {
        case 0:
          ctx.fillStyle = "#685b48";
          break;

        default:
          ctx.fillStyle = "#5aa457";
      }

      ctx.fillRect(x * tileW, y * tileH, tileW, tileH);
    }
  }

  ctx.fillStyle = "#0000ff";
  ctx.fillRect(player.position[0], player.position[1], player.dimensions[0], player.dimensions[1]);
  ctx.fillStyle = "#ff0000";
  ctx.fillText("FPS: " + framesLastSecond, 10, 20);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXIiwidGlsZUgiLCJtYXBXIiwibWFwSCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJrZXlzRG93biIsInBsYXllciIsIkNoYXJhY3RlciIsInRpbGVGcm9tIiwidGlsZVRvIiwidGltZU1vdmVkIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwiZGVsYXlNb3ZlIiwicHJvdG90eXBlIiwicGxhY2VBdCIsIngiLCJ5IiwicHJvY2Vzc01vdmVtZW50IiwidCIsImRpZmYiLCJNYXRoIiwicm91bmQiLCJ0b0luZGV4Iiwid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3R2FtZSIsImZvbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJjdXJyZW50RnJhbWVUaW1lIiwiRGF0ZSIsIm5vdyIsInRpbWVFbGFwc2VkIiwic2VjIiwiZmxvb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZpbGxUZXh0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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LEVBQWVBLENBQUMsR0FBR2pCLElBQW5CLEVBQXlCLEVBQUVpQixDQUEzQixFQUNBO0FBQ0MsY0FBT3BCLE9BQU8sQ0FBR3FCLENBQUMsR0FBQ2xCLElBQUgsR0FBU2lCLENBQVgsQ0FBZDtBQUVDLGFBQUssQ0FBTDtBQUNDckIsYUFBRyxDQUFDOEMsU0FBSixHQUFnQixTQUFoQjtBQUNBOztBQUNEO0FBQ0M5QyxhQUFHLENBQUM4QyxTQUFKLEdBQWdCLFNBQWhCO0FBTkY7O0FBU0E5QyxTQUFHLENBQUMrQyxRQUFKLENBQWMxQixDQUFDLEdBQUNuQixLQUFoQixFQUF1Qm9CLENBQUMsR0FBQ25CLEtBQXpCLEVBQWdDRCxLQUFoQyxFQUF1Q0MsS0FBdkM7QUFDQTtBQUNEOztBQUVESCxLQUFHLENBQUM4QyxTQUFKLEdBQWdCLFNBQWhCO0FBQ0E5QyxLQUFHLENBQUMrQyxRQUFKLENBQWFwQyxNQUFNLENBQUNNLFFBQVAsQ0FBZ0IsQ0FBaEIsQ0FBYixFQUFpQ04sTUFBTSxDQUFDTSxRQUFQLENBQWdCLENBQWhCLENBQWpDLEVBQ0NOLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQixDQUFsQixDQURELEVBQ3VCTCxNQUFNLENBQUNLLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FEdkI7QUFHQWhCLEtBQUcsQ0FBQzhDLFNBQUosR0FBZ0IsU0FBaEI7QUFDQTlDLEtBQUcsQ0FBQ2dELFFBQUosQ0FBYSxVQUFVeEMsZ0JBQXZCLEVBQXlDLEVBQXpDLEVBQTZDLEVBQTdDO0FBRUFDLGVBQWEsR0FBRytCLGdCQUFoQjtBQUNBTix1QkFBcUIsQ0FBQ0MsUUFBRCxDQUFyQjtBQUNBLEM7Ozs7Ozs7Ozs7O0FDcEpELHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9tYXBcIjtcbi8vIGltcG9ydCBcIi4vc2NyaXB0cy9jYW52YXNcIjtcblxuXG4iLCJsZXQgY3R4ID0gbnVsbDtcblxuLy8gY3JlYXRlIGEgbWFwIHdpdGggMTAqMTAgdGlsZVxubGV0IGdhbWVNYXAgPSBbXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsXG5cdDAsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDAsXG5cdDAsIDEsIDAsIDAsIDAsIDEsIDAsIDAsIDAsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsXG5cdDAsIDEsIDAsIDEsIDAsIDAsIDAsIDEsIDEsIDAsXG5cdDAsIDEsIDAsIDEsIDAsIDEsIDAsIDAsIDEsIDAsXG5cdDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsXG5cdDAsIDEsIDAsIDAsIDAsIDAsIDAsIDEsIDAsIDAsXG5cdDAsIDEsIDEsIDEsIDAsIDEsIDEsIDEsIDEsIDAsXG5cdDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDAsIDBcbl07XG5cbmxldCB0aWxlVyA9IDQwLCB0aWxlSCA9IDQwO1xubGV0IG1hcFcgPSAxMCwgbWFwSCA9IDEwO1xubGV0IGN1cnJlbnRTZWNvbmQgPSAwLCBmcmFtZUNvdW50ID0gMCwgZnJhbWVzTGFzdFNlY29uZCA9IDAsIGxhc3RGcmFtZVRpbWUgPSAwO1xuXG5sZXQga2V5c0Rvd24gPSB7XG5cdDM3IDogZmFsc2UsXG5cdDM4IDogZmFsc2UsXG5cdDM5IDogZmFsc2UsXG5cdDQwIDogZmFsc2Vcbn07XG5cbmxldCBwbGF5ZXIgPSBuZXcgQ2hhcmFjdGVyKCk7XG5cbmZ1bmN0aW9uIENoYXJhY3RlcigpXG57XG5cdHRoaXMudGlsZUZyb21cdD0gWzEsMV07XG5cdHRoaXMudGlsZVRvXHRcdD0gWzEsMV07XG5cdHRoaXMudGltZU1vdmVkXHQ9IDA7XG5cdHRoaXMuZGltZW5zaW9uc1x0PSBbMzAsMzBdO1xuXHR0aGlzLnBvc2l0aW9uXHQ9IFs0NSw0NV07XG5cdHRoaXMuZGVsYXlNb3ZlXHQ9IDcwMDtcbn1cbkNoYXJhY3Rlci5wcm90b3R5cGUucGxhY2VBdCA9IGZ1bmN0aW9uKHgsIHkpXG57XG5cdHRoaXMudGlsZUZyb21cdD0gW3gseV07XG5cdHRoaXMudGlsZVRvXHRcdD0gW3gseV07XG5cdHRoaXMucG9zaXRpb25cdD0gWygodGlsZVcqeCkrKCh0aWxlVy10aGlzLmRpbWVuc2lvbnNbMF0pLzIpKSxcblx0XHQoKHRpbGVIKnkpKygodGlsZUgtdGhpcy5kaW1lbnNpb25zWzFdKS8yKSldO1xufTtcbkNoYXJhY3Rlci5wcm90b3R5cGUucHJvY2Vzc01vdmVtZW50ID0gZnVuY3Rpb24odClcbntcblx0aWYodGhpcy50aWxlRnJvbVswXT09dGhpcy50aWxlVG9bMF0gJiYgdGhpcy50aWxlRnJvbVsxXT09dGhpcy50aWxlVG9bMV0pIHsgcmV0dXJuIGZhbHNlOyB9XG5cblx0aWYoKHQtdGhpcy50aW1lTW92ZWQpPj10aGlzLmRlbGF5TW92ZSlcblx0e1xuXHRcdHRoaXMucGxhY2VBdCh0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pO1xuXHR9XG5cdGVsc2Vcblx0e1xuXHRcdHRoaXMucG9zaXRpb25bMF0gPSAodGhpcy50aWxlRnJvbVswXSAqIHRpbGVXKSArICgodGlsZVctdGhpcy5kaW1lbnNpb25zWzBdKS8yKTtcblx0XHR0aGlzLnBvc2l0aW9uWzFdID0gKHRoaXMudGlsZUZyb21bMV0gKiB0aWxlSCkgKyAoKHRpbGVILXRoaXMuZGltZW5zaW9uc1sxXSkvMik7XG5cblx0XHRpZih0aGlzLnRpbGVUb1swXSAhPSB0aGlzLnRpbGVGcm9tWzBdKVxuXHRcdHtcblx0XHRcdGxldCBkaWZmID0gKHRpbGVXIC8gdGhpcy5kZWxheU1vdmUpICogKHQtdGhpcy50aW1lTW92ZWQpO1xuXHRcdFx0dGhpcy5wb3NpdGlvblswXSs9ICh0aGlzLnRpbGVUb1swXTx0aGlzLnRpbGVGcm9tWzBdID8gMCAtIGRpZmYgOiBkaWZmKTtcblx0XHR9XG5cdFx0aWYodGhpcy50aWxlVG9bMV0gIT0gdGhpcy50aWxlRnJvbVsxXSlcblx0XHR7XG5cdFx0XHRsZXQgZGlmZiA9ICh0aWxlSCAvIHRoaXMuZGVsYXlNb3ZlKSAqICh0LXRoaXMudGltZU1vdmVkKTtcblx0XHRcdHRoaXMucG9zaXRpb25bMV0rPSAodGhpcy50aWxlVG9bMV08dGhpcy50aWxlRnJvbVsxXSA/IDAgLSBkaWZmIDogZGlmZik7XG5cdFx0fVxuXG5cdFx0dGhpcy5wb3NpdGlvblswXSA9IE1hdGgucm91bmQodGhpcy5wb3NpdGlvblswXSk7XG5cdFx0dGhpcy5wb3NpdGlvblsxXSA9IE1hdGgucm91bmQodGhpcy5wb3NpdGlvblsxXSk7XG5cdH1cblxuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gdG9JbmRleCh4LCB5KVxue1xuXHRyZXR1cm4oKHkgKiBtYXBXKSArIHgpO1xufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKVxue1xuXHRjdHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZ2FtZScpLmdldENvbnRleHQoXCIyZFwiKTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcblx0Y3R4LmZvbnQgPSBcImJvbGQgMTBwdCBzYW5zLXNlcmlmXCI7XG5cblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGZ1bmN0aW9uKGUpIHtcblx0XHRpZihlLmtleUNvZGU+PTM3ICYmIGUua2V5Q29kZTw9NDApIHsga2V5c0Rvd25bZS5rZXlDb2RlXSA9IHRydWU7IH1cblx0fSk7XG5cdHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5dXBcIiwgZnVuY3Rpb24oZSkge1xuXHRcdGlmKGUua2V5Q29kZT49MzcgJiYgZS5rZXlDb2RlPD00MCkgeyBrZXlzRG93bltlLmtleUNvZGVdID0gZmFsc2U7IH1cblx0fSk7XG59O1xuXG5mdW5jdGlvbiBkcmF3R2FtZSgpXG57XG5cdGlmKGN0eD09bnVsbCkgeyByZXR1cm47IH1cblxuXHRsZXQgY3VycmVudEZyYW1lVGltZSA9IERhdGUubm93KCk7XG5cdGxldCB0aW1lRWxhcHNlZCA9IGN1cnJlbnRGcmFtZVRpbWUgLSBsYXN0RnJhbWVUaW1lO1xuXG5cdGxldCBzZWMgPSBNYXRoLmZsb29yKERhdGUubm93KCkvMTAwMCk7XG5cdGlmKHNlYyE9Y3VycmVudFNlY29uZClcblx0e1xuXHRcdGN1cnJlbnRTZWNvbmQgPSBzZWM7XG5cdFx0ZnJhbWVzTGFzdFNlY29uZCA9IGZyYW1lQ291bnQ7XG5cdFx0ZnJhbWVDb3VudCA9IDE7XG5cdH1cblx0ZWxzZSB7IGZyYW1lQ291bnQrKzsgfVxuXG5cdGlmKCFwbGF5ZXIucHJvY2Vzc01vdmVtZW50KGN1cnJlbnRGcmFtZVRpbWUpKVxuXHR7XG5cdFx0aWYoa2V5c0Rvd25bMzhdICYmIHBsYXllci50aWxlRnJvbVsxXT4wICYmIGdhbWVNYXBbdG9JbmRleChwbGF5ZXIudGlsZUZyb21bMF0sIHBsYXllci50aWxlRnJvbVsxXS0xKV09PTEpIHsgcGxheWVyLnRpbGVUb1sxXS09IDE7IH1cblx0XHRlbHNlIGlmKGtleXNEb3duWzQwXSAmJiBwbGF5ZXIudGlsZUZyb21bMV08KG1hcEgtMSkgJiYgZ2FtZU1hcFt0b0luZGV4KHBsYXllci50aWxlRnJvbVswXSwgcGxheWVyLnRpbGVGcm9tWzFdKzEpXT09MSkgeyBwbGF5ZXIudGlsZVRvWzFdKz0gMTsgfVxuXHRcdGVsc2UgaWYoa2V5c0Rvd25bMzddICYmIHBsYXllci50aWxlRnJvbVswXT4wICYmIGdhbWVNYXBbdG9JbmRleChwbGF5ZXIudGlsZUZyb21bMF0tMSwgcGxheWVyLnRpbGVGcm9tWzFdKV09PTEpIHsgcGxheWVyLnRpbGVUb1swXS09IDE7IH1cblx0XHRlbHNlIGlmKGtleXNEb3duWzM5XSAmJiBwbGF5ZXIudGlsZUZyb21bMF08KG1hcFctMSkgJiYgZ2FtZU1hcFt0b0luZGV4KHBsYXllci50aWxlRnJvbVswXSsxLCBwbGF5ZXIudGlsZUZyb21bMV0pXT09MSkgeyBwbGF5ZXIudGlsZVRvWzBdKz0gMTsgfVxuXG5cdFx0aWYocGxheWVyLnRpbGVGcm9tWzBdIT1wbGF5ZXIudGlsZVRvWzBdIHx8IHBsYXllci50aWxlRnJvbVsxXSE9cGxheWVyLnRpbGVUb1sxXSlcblx0XHR7IHBsYXllci50aW1lTW92ZWQgPSBjdXJyZW50RnJhbWVUaW1lOyB9XG5cdH1cblxuXHRmb3IobGV0IHkgPSAwOyB5IDwgbWFwSDsgKyt5KVxuXHR7XG5cdFx0Zm9yKGxldCB4ID0gMDsgeCA8IG1hcFc7ICsreClcblx0XHR7XG5cdFx0XHRzd2l0Y2goZ2FtZU1hcFsoKHkqbWFwVykreCldKVxuXHRcdFx0e1xuXHRcdFx0XHRjYXNlIDA6XG5cdFx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IFwiIzY4NWI0OFwiO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdGN0eC5maWxsU3R5bGUgPSBcIiM1YWE0NTdcIjtcblx0XHRcdH1cblxuXHRcdFx0Y3R4LmZpbGxSZWN0KCB4KnRpbGVXLCB5KnRpbGVILCB0aWxlVywgdGlsZUgpO1xuXHRcdH1cblx0fVxuXG5cdGN0eC5maWxsU3R5bGUgPSBcIiMwMDAwZmZcIjtcblx0Y3R4LmZpbGxSZWN0KHBsYXllci5wb3NpdGlvblswXSwgcGxheWVyLnBvc2l0aW9uWzFdLFxuXHRcdHBsYXllci5kaW1lbnNpb25zWzBdLCBwbGF5ZXIuZGltZW5zaW9uc1sxXSk7XG5cblx0Y3R4LmZpbGxTdHlsZSA9IFwiI2ZmMDAwMFwiO1xuXHRjdHguZmlsbFRleHQoXCJGUFM6IFwiICsgZnJhbWVzTGFzdFNlY29uZCwgMTAsIDIwKTtcblxuXHRsYXN0RnJhbWVUaW1lID0gY3VycmVudEZyYW1lVGltZTtcblx0cmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=