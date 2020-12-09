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

var ctx = null;
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
      var diff = tileH / this.delayMove * (t - this.timeMoved);
      this.position[1] += this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVXIiwidGlsZUgiLCJtYXBXIiwibWFwSCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJrZXlzRG93biIsInBsYXllciIsIkNoYXJhY3RlciIsInRpbGVGcm9tIiwidGlsZVRvIiwidGltZU1vdmVkIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwiZGVsYXlNb3ZlIiwicHJvdG90eXBlIiwicGxhY2VBdCIsIngiLCJ5IiwicHJvY2Vzc01vdmVtZW50IiwidCIsImRpZmYiLCJNYXRoIiwicm91bmQiLCJ0b0luZGV4Iiwid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3R2FtZSIsImZvbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJjdXJyZW50RnJhbWVUaW1lIiwiRGF0ZSIsIm5vdyIsInRpbWVFbGFwc2VkIiwic2VjIiwiZmxvb3IiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImZpbGxUZXh0Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUVBLDZCOzs7Ozs7Ozs7OztBQ0ZBLElBQUlBLEdBQUcsR0FBRyxJQUFWO0FBQ0EsSUFBSUMsT0FBTyxHQUFHLENBQ2IsQ0FEYSxFQUNWLENBRFUsRUFDUCxDQURPLEVBQ0osQ0FESSxFQUNELENBREMsRUFDRSxDQURGLEVBQ0ssQ0FETCxFQUNRLENBRFIsRUFDVyxDQURYLEVBQ2MsQ0FEZCxFQUViLENBRmEsRUFFVixDQUZVLEVBRVAsQ0FGTyxFQUVKLENBRkksRUFFRCxDQUZDLEVBRUUsQ0FGRixFQUVLLENBRkwsRUFFUSxDQUZSLEVBRVcsQ0FGWCxFQUVjLENBRmQsRUFHYixDQUhhLEVBR1YsQ0FIVSxFQUdQLENBSE8sRUFHSixDQUhJLEVBR0QsQ0FIQyxFQUdFLENBSEYsRUFHSyxDQUhMLEVBR1EsQ0FIUixFQUdXLENBSFgsRUFHYyxDQUhkLEVBSWIsQ0FKYSxFQUlWLENBSlUsRUFJUCxDQUpPLEVBSUosQ0FKSSxFQUlELENBSkMsRUFJRSxDQUpGLEVBSUssQ0FKTCxFQUlRLENBSlIsRUFJVyxDQUpYLEVBSWMsQ0FKZCxFQUtiLENBTGEsRUFLVixDQUxVLEVBS1AsQ0FMTyxFQUtKLENBTEksRUFLRCxDQUxDLEVBS0UsQ0FMRixFQUtLLENBTEwsRUFLUSxDQUxSLEVBS1csQ0FMWCxFQUtjLENBTGQsRUFNYixDQU5hLEVBTVYsQ0FOVSxFQU1QLENBTk8sRUFNSixDQU5JLEVBTUQsQ0FOQyxFQU1FLENBTkYsRUFNSyxDQU5MLEVBTVEsQ0FOUixFQU1XLENBTlgsRUFNYyxDQU5kLEVBT2IsQ0FQYSxFQU9WLENBUFUsRUFPUCxDQVBPLEVBT0osQ0FQSSxFQU9ELENBUEMsRUFPRSxDQVBGLEVBT0ssQ0FQTCxFQU9RLENBUFIsRUFPVyxDQVBYLEVBT2MsQ0FQZCxFQVFiLENBUmEsRUFRVixDQVJVLEVBUVAsQ0FSTyxFQVFKLENBUkksRUFRRCxDQVJDLEVBUUUsQ0FSRixFQVFLLENBUkwsRUFRUSxDQVJSLEVBUVcsQ0FSWCxFQVFjLENBUmQsRUFTYixDQVRhLEVBU1YsQ0FUVSxFQVNQLENBVE8sRUFTSixDQVRJLEVBU0QsQ0FUQyxFQVNFLENBVEYsRUFTSyxDQVRMLEVBU1EsQ0FUUixFQVNXLENBVFgsRUFTYyxDQVRkLEVBVWIsQ0FWYSxFQVVWLENBVlUsRUFVUCxDQVZPLEVBVUosQ0FWSSxFQVVELENBVkMsRUFVRSxDQVZGLEVBVUssQ0FWTCxFQVVRLENBVlIsRUFVVyxDQVZYLEVBVWMsQ0FWZCxDQUFkO0FBWUEsSUFBSUMsS0FBSyxHQUFHLEVBQVo7QUFBQSxJQUFnQkMsS0FBSyxHQUFHLEVBQXhCO0FBQ0EsSUFBSUMsSUFBSSxHQUFHLEVBQVg7QUFBQSxJQUFlQyxJQUFJLEdBQUcsRUFBdEI7QUFDQSxJQUFJQyxhQUFhLEdBQUcsQ0FBcEI7QUFBQSxJQUF1QkMsVUFBVSxHQUFHLENBQXBDO0FBQUEsSUFBdUNDLGdCQUFnQixHQUFHLENBQTFEO0FBQUEsSUFBNkRDLGFBQWEsR0FBRyxDQUE3RTtBQUVBLElBQUlDLFFBQVEsR0FBRztBQUNkLE1BQUssS0FEUztBQUVkLE1BQUssS0FGUztBQUdkLE1BQUssS0FIUztBQUlkLE1BQUs7QUFKUyxDQUFmO0FBT0EsSUFBSUMsTUFBTSxHQUFHLElBQUlDLFNBQUosRUFBYjs7QUFFQSxTQUFTQSxTQUFULEdBQ0E7QUFDQyxPQUFLQyxRQUFMLEdBQWdCLENBQUMsQ0FBRCxFQUFHLENBQUgsQ0FBaEI7QUFDQSxPQUFLQyxNQUFMLEdBQWUsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQUFmO0FBQ0EsT0FBS0MsU0FBTCxHQUFpQixDQUFqQjtBQUNBLE9BQUtDLFVBQUwsR0FBa0IsQ0FBQyxFQUFELEVBQUksRUFBSixDQUFsQjtBQUNBLE9BQUtDLFFBQUwsR0FBZ0IsQ0FBQyxFQUFELEVBQUksRUFBSixDQUFoQjtBQUNBLE9BQUtDLFNBQUwsR0FBaUIsR0FBakI7QUFDQTs7QUFDRE4sU0FBUyxDQUFDTyxTQUFWLENBQW9CQyxPQUFwQixHQUE4QixVQUFTQyxDQUFULEVBQVlDLENBQVosRUFDOUI7QUFDQyxPQUFLVCxRQUFMLEdBQWdCLENBQUNRLENBQUQsRUFBR0MsQ0FBSCxDQUFoQjtBQUNBLE9BQUtSLE1BQUwsR0FBZSxDQUFDTyxDQUFELEVBQUdDLENBQUgsQ0FBZjtBQUNBLE9BQUtMLFFBQUwsR0FBZ0IsQ0FBR2YsS0FBSyxHQUFDbUIsQ0FBUCxHQUFXLENBQUNuQixLQUFLLEdBQUMsS0FBS2MsVUFBTCxDQUFnQixDQUFoQixDQUFQLElBQTJCLENBQXhDLEVBQ2JiLEtBQUssR0FBQ21CLENBQVAsR0FBVyxDQUFDbkIsS0FBSyxHQUFDLEtBQUthLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBUCxJQUEyQixDQUR4QixDQUFoQjtBQUVBLENBTkQ7O0FBT0FKLFNBQVMsQ0FBQ08sU0FBVixDQUFvQkksZUFBcEIsR0FBc0MsVUFBU0MsQ0FBVCxFQUN0QztBQUNDLE1BQUcsS0FBS1gsUUFBTCxDQUFjLENBQWQsS0FBa0IsS0FBS0MsTUFBTCxDQUFZLENBQVosQ0FBbEIsSUFBb0MsS0FBS0QsUUFBTCxDQUFjLENBQWQsS0FBa0IsS0FBS0MsTUFBTCxDQUFZLENBQVosQ0FBekQsRUFBeUU7QUFBRSxXQUFPLEtBQVA7QUFBZTs7QUFFMUYsTUFBSVUsQ0FBQyxHQUFDLEtBQUtULFNBQVIsSUFBb0IsS0FBS0csU0FBNUIsRUFDQTtBQUNDLFNBQUtFLE9BQUwsQ0FBYSxLQUFLTixNQUFMLENBQVksQ0FBWixDQUFiLEVBQTZCLEtBQUtBLE1BQUwsQ0FBWSxDQUFaLENBQTdCO0FBQ0EsR0FIRCxNQUtBO0FBQ0MsU0FBS0csUUFBTCxDQUFjLENBQWQsSUFBb0IsS0FBS0osUUFBTCxDQUFjLENBQWQsSUFBbUJYLEtBQXBCLEdBQThCLENBQUNBLEtBQUssR0FBQyxLQUFLYyxVQUFMLENBQWdCLENBQWhCLENBQVAsSUFBMkIsQ0FBNUU7QUFDQSxTQUFLQyxRQUFMLENBQWMsQ0FBZCxJQUFvQixLQUFLSixRQUFMLENBQWMsQ0FBZCxJQUFtQlYsS0FBcEIsR0FBOEIsQ0FBQ0EsS0FBSyxHQUFDLEtBQUthLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBUCxJQUEyQixDQUE1RTs7QUFFQSxRQUFHLEtBQUtGLE1BQUwsQ0FBWSxDQUFaLEtBQWtCLEtBQUtELFFBQUwsQ0FBYyxDQUFkLENBQXJCLEVBQ0E7QUFDQyxVQUFJWSxJQUFJLEdBQUl2QixLQUFLLEdBQUcsS0FBS2dCLFNBQWQsSUFBNEJNLENBQUMsR0FBQyxLQUFLVCxTQUFuQyxDQUFYO0FBQ0EsV0FBS0UsUUFBTCxDQUFjLENBQWQsS0FBb0IsS0FBS0gsTUFBTCxDQUFZLENBQVosSUFBZSxLQUFLRCxRQUFMLENBQWMsQ0FBZCxDQUFmLEdBQWtDLElBQUlZLElBQXRDLEdBQTZDQSxJQUFqRTtBQUNBOztBQUNELFFBQUcsS0FBS1gsTUFBTCxDQUFZLENBQVosS0FBa0IsS0FBS0QsUUFBTCxDQUFjLENBQWQsQ0FBckIsRUFDQTtBQUNDLFVBQUlZLElBQUksR0FBSXRCLEtBQUssR0FBRyxLQUFLZSxTQUFkLElBQTRCTSxDQUFDLEdBQUMsS0FBS1QsU0FBbkMsQ0FBWDtBQUNBLFdBQUtFLFFBQUwsQ0FBYyxDQUFkLEtBQW9CLEtBQUtILE1BQUwsQ0FBWSxDQUFaLElBQWUsS0FBS0QsUUFBTCxDQUFjLENBQWQsQ0FBZixHQUFrQyxJQUFJWSxJQUF0QyxHQUE2Q0EsSUFBakU7QUFDQTs7QUFFRCxTQUFLUixRQUFMLENBQWMsQ0FBZCxJQUFtQlMsSUFBSSxDQUFDQyxLQUFMLENBQVcsS0FBS1YsUUFBTCxDQUFjLENBQWQsQ0FBWCxDQUFuQjtBQUNBLFNBQUtBLFFBQUwsQ0FBYyxDQUFkLElBQW1CUyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxLQUFLVixRQUFMLENBQWMsQ0FBZCxDQUFYLENBQW5CO0FBQ0E7O0FBRUQsU0FBTyxJQUFQO0FBQ0EsQ0E3QkQ7O0FBK0JBLFNBQVNXLE9BQVQsQ0FBaUJQLENBQWpCLEVBQW9CQyxDQUFwQixFQUNBO0FBQ0MsU0FBUUEsQ0FBQyxHQUFHbEIsSUFBTCxHQUFhaUIsQ0FBcEI7QUFDQTs7QUFFRFEsTUFBTSxDQUFDQyxNQUFQLEdBQWdCLFlBQ2hCO0FBQ0M5QixLQUFHLEdBQUcrQixRQUFRLENBQUNDLGNBQVQsQ0FBd0IsTUFBeEIsRUFBZ0NDLFVBQWhDLENBQTJDLElBQTNDLENBQU47QUFDQUMsdUJBQXFCLENBQUNDLFFBQUQsQ0FBckI7QUFDQW5DLEtBQUcsQ0FBQ29DLElBQUosR0FBVyxzQkFBWDtBQUVBUCxRQUFNLENBQUNRLGdCQUFQLENBQXdCLFNBQXhCLEVBQW1DLFVBQVNDLENBQVQsRUFBWTtBQUM5QyxRQUFHQSxDQUFDLENBQUNDLE9BQUYsSUFBVyxFQUFYLElBQWlCRCxDQUFDLENBQUNDLE9BQUYsSUFBVyxFQUEvQixFQUFtQztBQUFFN0IsY0FBUSxDQUFDNEIsQ0FBQyxDQUFDQyxPQUFILENBQVIsR0FBc0IsSUFBdEI7QUFBNkI7QUFDbEUsR0FGRDtBQUdBVixRQUFNLENBQUNRLGdCQUFQLENBQXdCLE9BQXhCLEVBQWlDLFVBQVNDLENBQVQsRUFBWTtBQUM1QyxRQUFHQSxDQUFDLENBQUNDLE9BQUYsSUFBVyxFQUFYLElBQWlCRCxDQUFDLENBQUNDLE9BQUYsSUFBVyxFQUEvQixFQUFtQztBQUFFN0IsY0FBUSxDQUFDNEIsQ0FBQyxDQUFDQyxPQUFILENBQVIsR0FBc0IsS0FBdEI7QUFBOEI7QUFDbkUsR0FGRDtBQUdBLENBWkQ7O0FBY0EsU0FBU0osUUFBVCxHQUNBO0FBQ0MsTUFBR25DLEdBQUcsSUFBRSxJQUFSLEVBQWM7QUFBRTtBQUFTOztBQUV6QixNQUFJd0MsZ0JBQWdCLEdBQUdDLElBQUksQ0FBQ0MsR0FBTCxFQUF2QjtBQUNBLE1BQUlDLFdBQVcsR0FBR0gsZ0JBQWdCLEdBQUcvQixhQUFyQztBQUVBLE1BQUltQyxHQUFHLEdBQUdsQixJQUFJLENBQUNtQixLQUFMLENBQVdKLElBQUksQ0FBQ0MsR0FBTCxLQUFXLElBQXRCLENBQVY7O0FBQ0EsTUFBR0UsR0FBRyxJQUFFdEMsYUFBUixFQUNBO0FBQ0NBLGlCQUFhLEdBQUdzQyxHQUFoQjtBQUNBcEMsb0JBQWdCLEdBQUdELFVBQW5CO0FBQ0FBLGNBQVUsR0FBRyxDQUFiO0FBQ0EsR0FMRCxNQU1LO0FBQUVBLGNBQVU7QUFBSzs7QUFFdEIsTUFBRyxDQUFDSSxNQUFNLENBQUNZLGVBQVAsQ0FBdUJpQixnQkFBdkIsQ0FBSixFQUNBO0FBQ0MsUUFBRzlCLFFBQVEsQ0FBQyxFQUFELENBQVIsSUFBZ0JDLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQixDQUFoQixJQUFtQixDQUFuQyxJQUF3Q1osT0FBTyxDQUFDMkIsT0FBTyxDQUFDakIsTUFBTSxDQUFDRSxRQUFQLENBQWdCLENBQWhCLENBQUQsRUFBcUJGLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQixDQUFoQixJQUFtQixDQUF4QyxDQUFSLENBQVAsSUFBNEQsQ0FBdkcsRUFBMEc7QUFBRUYsWUFBTSxDQUFDRyxNQUFQLENBQWMsQ0FBZCxLQUFtQixDQUFuQjtBQUF1QixLQUFuSSxNQUNLLElBQUdKLFFBQVEsQ0FBQyxFQUFELENBQVIsSUFBZ0JDLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQixDQUFoQixJQUFvQlIsSUFBSSxHQUFDLENBQXpDLElBQStDSixPQUFPLENBQUMyQixPQUFPLENBQUNqQixNQUFNLENBQUNFLFFBQVAsQ0FBZ0IsQ0FBaEIsQ0FBRCxFQUFxQkYsTUFBTSxDQUFDRSxRQUFQLENBQWdCLENBQWhCLElBQW1CLENBQXhDLENBQVIsQ0FBUCxJQUE0RCxDQUE5RyxFQUFpSDtBQUFFRixZQUFNLENBQUNHLE1BQVAsQ0FBYyxDQUFkLEtBQW1CLENBQW5CO0FBQXVCLEtBQTFJLE1BQ0EsSUFBR0osUUFBUSxDQUFDLEVBQUQsQ0FBUixJQUFnQkMsTUFBTSxDQUFDRSxRQUFQLENBQWdCLENBQWhCLElBQW1CLENBQW5DLElBQXdDWixPQUFPLENBQUMyQixPQUFPLENBQUNqQixNQUFNLENBQUNFLFFBQVAsQ0FBZ0IsQ0FBaEIsSUFBbUIsQ0FBcEIsRUFBdUJGLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQixDQUFoQixDQUF2QixDQUFSLENBQVAsSUFBNEQsQ0FBdkcsRUFBMEc7QUFBRUYsWUFBTSxDQUFDRyxNQUFQLENBQWMsQ0FBZCxLQUFtQixDQUFuQjtBQUF1QixLQUFuSSxNQUNBLElBQUdKLFFBQVEsQ0FBQyxFQUFELENBQVIsSUFBZ0JDLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQixDQUFoQixJQUFvQlQsSUFBSSxHQUFDLENBQXpDLElBQStDSCxPQUFPLENBQUMyQixPQUFPLENBQUNqQixNQUFNLENBQUNFLFFBQVAsQ0FBZ0IsQ0FBaEIsSUFBbUIsQ0FBcEIsRUFBdUJGLE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQixDQUFoQixDQUF2QixDQUFSLENBQVAsSUFBNEQsQ0FBOUcsRUFBaUg7QUFBRUYsWUFBTSxDQUFDRyxNQUFQLENBQWMsQ0FBZCxLQUFtQixDQUFuQjtBQUF1Qjs7QUFFL0ksUUFBR0gsTUFBTSxDQUFDRSxRQUFQLENBQWdCLENBQWhCLEtBQW9CRixNQUFNLENBQUNHLE1BQVAsQ0FBYyxDQUFkLENBQXBCLElBQXdDSCxNQUFNLENBQUNFLFFBQVAsQ0FBZ0IsQ0FBaEIsS0FBb0JGLE1BQU0sQ0FBQ0csTUFBUCxDQUFjLENBQWQsQ0FBL0QsRUFDQTtBQUFFSCxZQUFNLENBQUNJLFNBQVAsR0FBbUJ5QixnQkFBbkI7QUFBc0M7QUFDeEM7O0FBRUQsT0FBSSxJQUFJbEIsQ0FBQyxHQUFHLENBQVosRUFBZUEsQ0FBQyxHQUFHakIsSUFBbkIsRUFBeUIsRUFBRWlCLENBQTNCLEVBQ0E7QUFDQyxTQUFJLElBQUlELENBQUMsR0FBRyxDQUFaLEVBQWVBLENBQUMsR0FBR2pCLElBQW5CLEVBQXlCLEVBQUVpQixDQUEzQixFQUNBO0FBQ0MsY0FBT3BCLE9BQU8sQ0FBR3FCLENBQUMsR0FBQ2xCLElBQUgsR0FBU2lCLENBQVgsQ0FBZDtBQUVDLGFBQUssQ0FBTDtBQUNDckIsYUFBRyxDQUFDOEMsU0FBSixHQUFnQixTQUFoQjtBQUNBOztBQUNEO0FBQ0M5QyxhQUFHLENBQUM4QyxTQUFKLEdBQWdCLFNBQWhCO0FBTkY7O0FBU0E5QyxTQUFHLENBQUMrQyxRQUFKLENBQWMxQixDQUFDLEdBQUNuQixLQUFoQixFQUF1Qm9CLENBQUMsR0FBQ25CLEtBQXpCLEVBQWdDRCxLQUFoQyxFQUF1Q0MsS0FBdkM7QUFDQTtBQUNEOztBQUVESCxLQUFHLENBQUM4QyxTQUFKLEdBQWdCLFNBQWhCO0FBQ0E5QyxLQUFHLENBQUMrQyxRQUFKLENBQWFwQyxNQUFNLENBQUNNLFFBQVAsQ0FBZ0IsQ0FBaEIsQ0FBYixFQUFpQ04sTUFBTSxDQUFDTSxRQUFQLENBQWdCLENBQWhCLENBQWpDLEVBQ0NOLE1BQU0sQ0FBQ0ssVUFBUCxDQUFrQixDQUFsQixDQURELEVBQ3VCTCxNQUFNLENBQUNLLFVBQVAsQ0FBa0IsQ0FBbEIsQ0FEdkI7QUFHQWhCLEtBQUcsQ0FBQzhDLFNBQUosR0FBZ0IsU0FBaEI7QUFDQTlDLEtBQUcsQ0FBQ2dELFFBQUosQ0FBYSxVQUFVeEMsZ0JBQXZCLEVBQXlDLEVBQXpDLEVBQTZDLEVBQTdDO0FBRUFDLGVBQWEsR0FBRytCLGdCQUFoQjtBQUNBTix1QkFBcUIsQ0FBQ0MsUUFBRCxDQUFyQjtBQUNBLEM7Ozs7Ozs7Ozs7O0FDakpELHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9tYXBcIjtcbi8vIGltcG9ydCBcIi4vc2NyaXB0cy9jYW52YXNcIjtcblxuXG4iLCJ2YXIgY3R4ID0gbnVsbDtcbnZhciBnYW1lTWFwID0gW1xuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHQwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAwLFxuXHQwLCAxLCAwLCAwLCAwLCAxLCAwLCAwLCAwLCAwLFxuXHQwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLFxuXHQwLCAxLCAwLCAxLCAwLCAwLCAwLCAxLCAxLCAwLFxuXHQwLCAxLCAwLCAxLCAwLCAxLCAwLCAwLCAxLCAwLFxuXHQwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLFxuXHQwLCAxLCAwLCAwLCAwLCAwLCAwLCAxLCAwLCAwLFxuXHQwLCAxLCAxLCAxLCAwLCAxLCAxLCAxLCAxLCAwLFxuXHQwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwXG5dO1xudmFyIHRpbGVXID0gNDAsIHRpbGVIID0gNDA7XG52YXIgbWFwVyA9IDEwLCBtYXBIID0gMTA7XG52YXIgY3VycmVudFNlY29uZCA9IDAsIGZyYW1lQ291bnQgPSAwLCBmcmFtZXNMYXN0U2Vjb25kID0gMCwgbGFzdEZyYW1lVGltZSA9IDA7XG5cbnZhciBrZXlzRG93biA9IHtcblx0MzcgOiBmYWxzZSxcblx0MzggOiBmYWxzZSxcblx0MzkgOiBmYWxzZSxcblx0NDAgOiBmYWxzZVxufTtcblxudmFyIHBsYXllciA9IG5ldyBDaGFyYWN0ZXIoKTtcblxuZnVuY3Rpb24gQ2hhcmFjdGVyKClcbntcblx0dGhpcy50aWxlRnJvbVx0PSBbMSwxXTtcblx0dGhpcy50aWxlVG9cdFx0PSBbMSwxXTtcblx0dGhpcy50aW1lTW92ZWRcdD0gMDtcblx0dGhpcy5kaW1lbnNpb25zXHQ9IFszMCwzMF07XG5cdHRoaXMucG9zaXRpb25cdD0gWzQ1LDQ1XTtcblx0dGhpcy5kZWxheU1vdmVcdD0gNzAwO1xufVxuQ2hhcmFjdGVyLnByb3RvdHlwZS5wbGFjZUF0ID0gZnVuY3Rpb24oeCwgeSlcbntcblx0dGhpcy50aWxlRnJvbVx0PSBbeCx5XTtcblx0dGhpcy50aWxlVG9cdFx0PSBbeCx5XTtcblx0dGhpcy5wb3NpdGlvblx0PSBbKCh0aWxlVyp4KSsoKHRpbGVXLXRoaXMuZGltZW5zaW9uc1swXSkvMikpLFxuXHRcdCgodGlsZUgqeSkrKCh0aWxlSC10aGlzLmRpbWVuc2lvbnNbMV0pLzIpKV07XG59O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5wcm9jZXNzTW92ZW1lbnQgPSBmdW5jdGlvbih0KVxue1xuXHRpZih0aGlzLnRpbGVGcm9tWzBdPT10aGlzLnRpbGVUb1swXSAmJiB0aGlzLnRpbGVGcm9tWzFdPT10aGlzLnRpbGVUb1sxXSkgeyByZXR1cm4gZmFsc2U7IH1cblxuXHRpZigodC10aGlzLnRpbWVNb3ZlZCk+PXRoaXMuZGVsYXlNb3ZlKVxuXHR7XG5cdFx0dGhpcy5wbGFjZUF0KHRoaXMudGlsZVRvWzBdLCB0aGlzLnRpbGVUb1sxXSk7XG5cdH1cblx0ZWxzZVxuXHR7XG5cdFx0dGhpcy5wb3NpdGlvblswXSA9ICh0aGlzLnRpbGVGcm9tWzBdICogdGlsZVcpICsgKCh0aWxlVy10aGlzLmRpbWVuc2lvbnNbMF0pLzIpO1xuXHRcdHRoaXMucG9zaXRpb25bMV0gPSAodGhpcy50aWxlRnJvbVsxXSAqIHRpbGVIKSArICgodGlsZUgtdGhpcy5kaW1lbnNpb25zWzFdKS8yKTtcblxuXHRcdGlmKHRoaXMudGlsZVRvWzBdICE9IHRoaXMudGlsZUZyb21bMF0pXG5cdFx0e1xuXHRcdFx0dmFyIGRpZmYgPSAodGlsZVcgLyB0aGlzLmRlbGF5TW92ZSkgKiAodC10aGlzLnRpbWVNb3ZlZCk7XG5cdFx0XHR0aGlzLnBvc2l0aW9uWzBdKz0gKHRoaXMudGlsZVRvWzBdPHRoaXMudGlsZUZyb21bMF0gPyAwIC0gZGlmZiA6IGRpZmYpO1xuXHRcdH1cblx0XHRpZih0aGlzLnRpbGVUb1sxXSAhPSB0aGlzLnRpbGVGcm9tWzFdKVxuXHRcdHtcblx0XHRcdHZhciBkaWZmID0gKHRpbGVIIC8gdGhpcy5kZWxheU1vdmUpICogKHQtdGhpcy50aW1lTW92ZWQpO1xuXHRcdFx0dGhpcy5wb3NpdGlvblsxXSs9ICh0aGlzLnRpbGVUb1sxXTx0aGlzLnRpbGVGcm9tWzFdID8gMCAtIGRpZmYgOiBkaWZmKTtcblx0XHR9XG5cblx0XHR0aGlzLnBvc2l0aW9uWzBdID0gTWF0aC5yb3VuZCh0aGlzLnBvc2l0aW9uWzBdKTtcblx0XHR0aGlzLnBvc2l0aW9uWzFdID0gTWF0aC5yb3VuZCh0aGlzLnBvc2l0aW9uWzFdKTtcblx0fVxuXG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiB0b0luZGV4KHgsIHkpXG57XG5cdHJldHVybigoeSAqIG1hcFcpICsgeCk7XG59XG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpXG57XG5cdGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnYW1lJykuZ2V0Q29udGV4dChcIjJkXCIpO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpO1xuXHRjdHguZm9udCA9IFwiYm9sZCAxMHB0IHNhbnMtc2VyaWZcIjtcblxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZnVuY3Rpb24oZSkge1xuXHRcdGlmKGUua2V5Q29kZT49MzcgJiYgZS5rZXlDb2RlPD00MCkgeyBrZXlzRG93bltlLmtleUNvZGVdID0gdHJ1ZTsgfVxuXHR9KTtcblx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBmdW5jdGlvbihlKSB7XG5cdFx0aWYoZS5rZXlDb2RlPj0zNyAmJiBlLmtleUNvZGU8PTQwKSB7IGtleXNEb3duW2Uua2V5Q29kZV0gPSBmYWxzZTsgfVxuXHR9KTtcbn07XG5cbmZ1bmN0aW9uIGRyYXdHYW1lKClcbntcblx0aWYoY3R4PT1udWxsKSB7IHJldHVybjsgfVxuXG5cdHZhciBjdXJyZW50RnJhbWVUaW1lID0gRGF0ZS5ub3coKTtcblx0dmFyIHRpbWVFbGFwc2VkID0gY3VycmVudEZyYW1lVGltZSAtIGxhc3RGcmFtZVRpbWU7XG5cblx0dmFyIHNlYyA9IE1hdGguZmxvb3IoRGF0ZS5ub3coKS8xMDAwKTtcblx0aWYoc2VjIT1jdXJyZW50U2Vjb25kKVxuXHR7XG5cdFx0Y3VycmVudFNlY29uZCA9IHNlYztcblx0XHRmcmFtZXNMYXN0U2Vjb25kID0gZnJhbWVDb3VudDtcblx0XHRmcmFtZUNvdW50ID0gMTtcblx0fVxuXHRlbHNlIHsgZnJhbWVDb3VudCsrOyB9XG5cblx0aWYoIXBsYXllci5wcm9jZXNzTW92ZW1lbnQoY3VycmVudEZyYW1lVGltZSkpXG5cdHtcblx0XHRpZihrZXlzRG93blszOF0gJiYgcGxheWVyLnRpbGVGcm9tWzFdPjAgJiYgZ2FtZU1hcFt0b0luZGV4KHBsYXllci50aWxlRnJvbVswXSwgcGxheWVyLnRpbGVGcm9tWzFdLTEpXT09MSkgeyBwbGF5ZXIudGlsZVRvWzFdLT0gMTsgfVxuXHRcdGVsc2UgaWYoa2V5c0Rvd25bNDBdICYmIHBsYXllci50aWxlRnJvbVsxXTwobWFwSC0xKSAmJiBnYW1lTWFwW3RvSW5kZXgocGxheWVyLnRpbGVGcm9tWzBdLCBwbGF5ZXIudGlsZUZyb21bMV0rMSldPT0xKSB7IHBsYXllci50aWxlVG9bMV0rPSAxOyB9XG5cdFx0ZWxzZSBpZihrZXlzRG93blszN10gJiYgcGxheWVyLnRpbGVGcm9tWzBdPjAgJiYgZ2FtZU1hcFt0b0luZGV4KHBsYXllci50aWxlRnJvbVswXS0xLCBwbGF5ZXIudGlsZUZyb21bMV0pXT09MSkgeyBwbGF5ZXIudGlsZVRvWzBdLT0gMTsgfVxuXHRcdGVsc2UgaWYoa2V5c0Rvd25bMzldICYmIHBsYXllci50aWxlRnJvbVswXTwobWFwVy0xKSAmJiBnYW1lTWFwW3RvSW5kZXgocGxheWVyLnRpbGVGcm9tWzBdKzEsIHBsYXllci50aWxlRnJvbVsxXSldPT0xKSB7IHBsYXllci50aWxlVG9bMF0rPSAxOyB9XG5cblx0XHRpZihwbGF5ZXIudGlsZUZyb21bMF0hPXBsYXllci50aWxlVG9bMF0gfHwgcGxheWVyLnRpbGVGcm9tWzFdIT1wbGF5ZXIudGlsZVRvWzFdKVxuXHRcdHsgcGxheWVyLnRpbWVNb3ZlZCA9IGN1cnJlbnRGcmFtZVRpbWU7IH1cblx0fVxuXG5cdGZvcih2YXIgeSA9IDA7IHkgPCBtYXBIOyArK3kpXG5cdHtcblx0XHRmb3IodmFyIHggPSAwOyB4IDwgbWFwVzsgKyt4KVxuXHRcdHtcblx0XHRcdHN3aXRjaChnYW1lTWFwWygoeSptYXBXKSt4KV0pXG5cdFx0XHR7XG5cdFx0XHRcdGNhc2UgMDpcblx0XHRcdFx0XHRjdHguZmlsbFN0eWxlID0gXCIjNjg1YjQ4XCI7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdFx0Y3R4LmZpbGxTdHlsZSA9IFwiIzVhYTQ1N1wiO1xuXHRcdFx0fVxuXG5cdFx0XHRjdHguZmlsbFJlY3QoIHgqdGlsZVcsIHkqdGlsZUgsIHRpbGVXLCB0aWxlSCk7XG5cdFx0fVxuXHR9XG5cblx0Y3R4LmZpbGxTdHlsZSA9IFwiIzAwMDBmZlwiO1xuXHRjdHguZmlsbFJlY3QocGxheWVyLnBvc2l0aW9uWzBdLCBwbGF5ZXIucG9zaXRpb25bMV0sXG5cdFx0cGxheWVyLmRpbWVuc2lvbnNbMF0sIHBsYXllci5kaW1lbnNpb25zWzFdKTtcblxuXHRjdHguZmlsbFN0eWxlID0gXCIjZmYwMDAwXCI7XG5cdGN0eC5maWxsVGV4dChcIkZQUzogXCIgKyBmcmFtZXNMYXN0U2Vjb25kLCAxMCwgMjApO1xuXG5cdGxhc3RGcmFtZVRpbWUgPSBjdXJyZW50RnJhbWVUaW1lO1xuXHRyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZHJhd0dhbWUpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sInNvdXJjZVJvb3QiOiIifQ==