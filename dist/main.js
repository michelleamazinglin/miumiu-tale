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
/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/canvas */ "./src/scripts/canvas.js");
/* harmony import */ var _scripts_canvas__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_scripts_canvas__WEBPACK_IMPORTED_MODULE_1__);
 // import "./scripts/map";



/***/ }),

/***/ "./src/scripts/canvas.js":
/*!*******************************!*\
  !*** ./src/scripts/canvas.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

var ctx = null; // 地图： 0-墙壁 1-草地 2-陆地 4-河流

var gameMap = [0, 0, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 2, 1, 0, 0, 0, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 2, 1, 0, 2, 2, 0, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 2, 1, 0, 2, 2, 0, 4, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2, 2, 2, 0, 4, 4, 4, 1, 1, 1, 0, 2, 2, 2, 0, 0, 1, 1, 2, 1, 0, 2, 2, 0, 1, 1, 4, 1, 1, 1, 0, 2, 2, 2, 0, 0, 1, 1, 2, 1, 0, 2, 2, 0, 1, 1, 4, 1, 1, 1, 0, 2, 2, 2, 0, 0, 1, 1, 2, 1, 0, 0, 0, 0, 1, 1, 4, 1, 1, 0, 0, 0, 2, 0, 0, 0, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 0, 2, 2, 2, 2, 0, 0, 1, 1, 2, 2, 2, 2, 2, 2, 1, 4, 4, 1, 1, 0, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4, 1, 1, 1, 0, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 0, 2, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 4, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var tileMap = new TileMap(); //定義屋頂位置資料

var roofList = [{
  x: 5,
  y: 3,
  w: 4,
  h: 7,
  data: [10, 10, 11, 11, 10, 10, 11, 11, 10, 10, 11, 11, 10, 10, 11, 11, 10, 10, 11, 11, 10, 10, 11, 11, 10, 10, 11, 11]
}, {
  x: 15,
  y: 5,
  w: 5,
  h: 4,
  data: [10, 10, 11, 11, 11, 10, 10, 11, 11, 11, 10, 10, 11, 11, 11, 10, 10, 11, 11, 11]
}, {
  x: 14,
  y: 9,
  w: 6,
  h: 7,
  data: [10, 10, 10, 11, 11, 11, 10, 10, 10, 11, 11, 11, 10, 10, 10, 11, 11, 11, 10, 10, 10, 11, 11, 11, 10, 10, 10, 11, 11, 11, 10, 10, 10, 11, 11, 11, 10, 10, 10, 11, 11, 11]
}];
var tileWidth = 40,
    tileHeight = 40; //定義物件尺寸(40px x 40px)

var mapWidth = 20,
    mapHeight = 20; //定義物地圖總格數

var currentSecond = 0,
    frameCount = 0,
    framesLastSecond = 0,
    lastFrameTime = 0; //宣告圖資雪碧圖

var tileset = null,
    tilesetURL = "https://i.postimg.cc/yNhPZ9NT/tileset.png",
    tilesetLoaded = false;
var gameTime = 0; //宣告移動速度

var gameSpeeds = [{
  name: "Normal",
  mult: 1
}, {
  name: "Slow",
  mult: 0.3
}, {
  name: "Fast",
  mult: 3
}, {
  name: "Paused",
  mult: 0
}];
var currentSpeed = 0; //動態物件宣告------------------------------------------------------------

function Sprite(data) {
  this.animated = data.length > 1; //資料大於1動態呈現

  this.frameCount = data.length; //資料偵數

  this.duration = 0; //持續時間

  this.loop = true;

  if (data.length > 1) {
    for (var i in data) {
      if (typeof data[i].d == "undefined") {
        data[i].d = 100;
      }

      this.duration += data[i].d;

      if (typeof data[i].loop != "undefined") {
        this.loop = data[i].loop ? true : false;
      }
    }
  }

  this.frames = data;
}

Sprite.prototype.draw = function (t, x, y) {
  var frameIdx = 0;

  if (!this.loop && this.animated && t >= this.duration) {
    frameIdx = this.frames.length - 1;
  } else if (this.animated) {
    t = t % this.duration;
    var totalD = 0;

    for (var i in this.frames) {
      totalD += this.frames[i].d;
      frameIdx = i;

      if (t <= totalD) {
        break;
      }
    }
  }

  var offset = typeof this.frames[frameIdx].offset == "undefined" ? [0, 0] : this.frames[frameIdx].offset;
  ctx.drawImage(tileset, this.frames[frameIdx].x, this.frames[frameIdx].y, this.frames[frameIdx].w, this.frames[frameIdx].h, x + offset[0], y + offset[1], this.frames[frameIdx].w, this.frames[frameIdx].h);
};

var itemTypes = {
  1: {
    name: "Star",
    maxStack: 2,
    sprite: new Sprite([{
      x: 240,
      y: 0,
      w: 40,
      h: 40
    }]),
    offset: [0, 0]
  }
};

function Stack(id, qty) {
  this.type = id;
  this.qty = qty;
}

function Inventory(s) {
  this.spaces = s;
  this.stacks = [];
}

Inventory.prototype.addItems = function (id, qty) {
  for (var i = 0; i < this.spaces; i++) {
    if (this.stacks.length <= i) {
      var maxHere = qty > itemTypes[id].maxStack ? itemTypes[id].maxStack : qty;
      this.stacks.push(new Stack(id, maxHere));
      qty -= maxHere;
    } else if (this.stacks[i].type == id && this.stacks[i].qty < itemTypes[id].maxStack) {
      var _maxHere = itemTypes[id].maxStack - this.stacks[i].qty;

      if (_maxHere > qty) {
        _maxHere = qty;
      }

      this.stacks[i].qty += _maxHere;
      qty -= _maxHere;
    }

    if (qty == 0) {
      return 0;
    }
  }

  return qty;
};

function PlacedItemStack(id, qty) {
  this.type = id;
  this.qty = qty;
  this.x = 0;
  this.y = 0;
}

PlacedItemStack.prototype.placeAt = function (nx, ny) {
  if (tileMap.map[toIndex(this.x, this.y)].itemStack == this) {
    tileMap.map[toIndex(this.x, this.y)].itemStack = null;
  }

  this.x = nx;
  this.y = ny;
  tileMap.map[toIndex(nx, ny)].itemStack = this;
};

var objectCollision = {
  none: 0,
  solid: 1
};
var objectTypes = {
  1: {
    name: "Box",
    sprite: new Sprite([{
      x: 40,
      y: 160,
      w: 40,
      h: 40
    }]),
    offset: [0, 0],
    collision: objectCollision.solid,
    zIndex: 1
  },
  2: {
    name: "Broken Box",
    sprite: new Sprite([{
      x: 40,
      y: 200,
      w: 40,
      h: 40
    }]),
    offset: [0, 0],
    collision: objectCollision.none,
    zIndex: 1
  },
  3: {
    name: "Tree top",
    sprite: new Sprite([{
      x: 80,
      y: 160,
      w: 80,
      h: 80
    }]),
    offset: [-20, -20],
    collision: objectCollision.solid,
    zIndex: 3
  }
};

function MapObject(nt) {
  this.x = 0;
  this.y = 0;
  this.type = nt;
}

MapObject.prototype.placeAt = function (nx, ny) {
  if (tileMap.map[toIndex(this.x, this.y)].object == this) {
    tileMap.map[toIndex(this.x, this.y)].object = null;
  }

  this.x = nx;
  this.y = ny;
  tileMap.map[toIndex(nx, ny)].object = this;
};

var floorTypes = {
  solid: 0,
  path: 1,
  water: 2,
  ice: 3,
  conveyorU: 4,
  conveyorD: 5,
  conveyorL: 6,
  conveyorR: 7,
  grass: 8
};
var tileTypes = {
  0: {
    colour: "#685b48",
    floor: floorTypes.solid,
    sprite: new Sprite([{
      x: 0,
      y: 0,
      w: 40,
      h: 40
    }])
  },
  1: {
    colour: "#5aa457",
    floor: floorTypes.grass,
    sprite: new Sprite([{
      x: 40,
      y: 0,
      w: 40,
      h: 40
    }])
  },
  2: {
    colour: "#e8bd7a",
    floor: floorTypes.path,
    sprite: new Sprite([{
      x: 80,
      y: 0,
      w: 40,
      h: 40
    }])
  },
  3: {
    colour: "#286625",
    floor: floorTypes.solid,
    sprite: new Sprite([{
      x: 120,
      y: 0,
      w: 40,
      h: 40
    }])
  },
  4: {
    colour: "#678fd9",
    floor: floorTypes.water,
    sprite: new Sprite([{
      x: 160,
      y: 0,
      w: 40,
      h: 40,
      d: 200
    }, {
      x: 200,
      y: 0,
      w: 40,
      h: 40,
      d: 200
    }, {
      x: 160,
      y: 40,
      w: 40,
      h: 40,
      d: 200
    }, {
      x: 200,
      y: 40,
      w: 40,
      h: 40,
      d: 200
    }, {
      x: 160,
      y: 40,
      w: 40,
      h: 40,
      d: 200
    }, {
      x: 200,
      y: 0,
      w: 40,
      h: 40,
      d: 200
    }])
  },
  5: {
    colour: "#eeeeff",
    floor: floorTypes.ice,
    sprite: new Sprite([{
      x: 120,
      y: 120,
      w: 40,
      h: 40
    }])
  },
  6: {
    colour: "#cccccc",
    floor: floorTypes.conveyorL,
    sprite: new Sprite([{
      x: 0,
      y: 40,
      w: 40,
      h: 40,
      d: 200
    }, {
      x: 40,
      y: 40,
      w: 40,
      h: 40,
      d: 200
    }, {
      x: 80,
      y: 40,
      w: 40,
      h: 40,
      d: 200
    }, {
      x: 120,
      y: 40,
      w: 40,
      h: 40,
      d: 200
    }])
  },
  7: {
    colour: "#cccccc",
    floor: floorTypes.conveyorR,
    sprite: new Sprite([{
      x: 120,
      y: 80,
      w: 40,
      h: 40,
      d: 200
    }, {
      x: 80,
      y: 80,
      w: 40,
      h: 40,
      d: 200
    }, {
      x: 40,
      y: 80,
      w: 40,
      h: 40,
      d: 200
    }, {
      x: 0,
      y: 80,
      w: 40,
      h: 40,
      d: 200
    }])
  },
  8: {
    colour: "#cccccc",
    floor: floorTypes.conveyorD,
    sprite: new Sprite([{
      x: 160,
      y: 200,
      w: 40,
      h: 40,
      d: 200
    }, {
      x: 160,
      y: 160,
      w: 40,
      h: 40,
      d: 200
    }, {
      x: 160,
      y: 120,
      w: 40,
      h: 40,
      d: 200
    }, {
      x: 160,
      y: 80,
      w: 40,
      h: 40,
      d: 200
    }])
  },
  9: {
    colour: "#cccccc",
    floor: floorTypes.conveyorU,
    sprite: new Sprite([{
      x: 200,
      y: 80,
      w: 40,
      h: 40,
      d: 200
    }, {
      x: 200,
      y: 120,
      w: 40,
      h: 40,
      d: 200
    }, {
      x: 200,
      y: 160,
      w: 40,
      h: 40,
      d: 200
    }, {
      x: 200,
      y: 200,
      w: 40,
      h: 40,
      d: 200
    }])
  },
  10: {
    colour: "#ccaa00",
    floor: floorTypes.solid,
    sprite: new Sprite([{
      x: 40,
      y: 120,
      w: 40,
      h: 40
    }])
  },
  11: {
    colour: "#ccaa00",
    floor: floorTypes.solid,
    sprite: new Sprite([{
      x: 80,
      y: 120,
      w: 40,
      h: 40
    }])
  }
};

function Tile(tx, ty, tt) {
  this.x = tx;
  this.y = ty;
  this.type = tt;
  this.roof = null;
  this.roofType = 0;
  this.eventEnter = null;
  this.object = null;
  this.itemStack = null;
}

function TileMap() {
  this.map = [];
  this.w = 0;
  this.h = 0;
  this.levels = 4;
}

TileMap.prototype.buildMapFromData = function (d, w, h) {
  this.w = w;
  this.h = h;

  if (d.length != w * h) {
    return false;
  }

  this.map.length = 0;

  for (var y = 0; y < h; y++) {
    for (var x = 0; x < w; x++) {
      this.map.push(new Tile(x, y, d[y * w + x]));
    }
  }

  return true;
}; //添加屋頂


TileMap.prototype.addRoofs = function (roofs) {
  for (var i in roofs) {
    var r = roofs[i];

    if (r.x < 0 || r.y < 0 || r.x >= this.w || r.y >= this.h || r.x + r.w > this.w || r.y + r.h > this.h || r.data.length != r.w * r.h) {
      continue;
    }

    for (var y = 0; y < r.h; y++) {
      for (var x = 0; x < r.w; x++) {
        var tileIdx = (r.y + y) * this.w + r.x + x;
        this.map[tileIdx].roof = r;
        this.map[tileIdx].roofType = r.data[y * r.w + x];
      }
    }
  }
}; //定義方向


var directions = {
  up: 0,
  right: 1,
  down: 2,
  left: 3
}; //定義按鍵

var keysDown = {
  37: false,
  38: false,
  39: false,
  40: false,
  80: false
}; //

var viewport = {
  screen: [0, 0],
  startTile: [0, 0],
  endTile: [0, 0],
  offset: [0, 0],
  update: function update(px, py) {
    this.offset[0] = Math.floor(this.screen[0] / 2 - px);
    this.offset[1] = Math.floor(this.screen[1] / 2 - py);
    var tile = [Math.floor(px / tileWidth), Math.floor(py / tileHeight)];
    this.startTile[0] = tile[0] - 1 - Math.ceil(this.screen[0] / 2 / tileWidth);
    this.startTile[1] = tile[1] - 1 - Math.ceil(this.screen[1] / 2 / tileHeight);

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
}; //創建主角

var player = new Character(); //定義角色函式

function Character() {
  this.tileFrom = [1, 1];
  this.tileTo = [1, 1]; //角色起始位置（ 地圖相對位置 ）

  this.timeMoved = 0;
  this.dimensions = [30, 30]; //角色尺寸

  this.position = [40 * this.tileTo[0] + 5, 40 * this.tileTo[1] + 5]; //地形移動速率

  this.delayMove = {};
  this.delayMove[floorTypes.path] = 400; //普通道路

  this.delayMove[floorTypes.grass] = 400; //草地

  this.delayMove[floorTypes.ice] = 300; //雪地

  this.delayMove[floorTypes.conveyorU] = 200; //輸送帶上

  this.delayMove[floorTypes.conveyorD] = 200; //輸送帶下

  this.delayMove[floorTypes.conveyorL] = 200; //輸送帶左

  this.delayMove[floorTypes.conveyorR] = 200; //輸送帶右
  //角色方向

  this.direction = directions.down; //預設方向向上

  this.sprites = {};
  this.sprites[directions.up] = new Sprite([{
    x: 0,
    y: 120,
    w: 30,
    h: 30
  }]);
  this.sprites[directions.right] = new Sprite([{
    x: 0,
    y: 150,
    w: 30,
    h: 30
  }]);
  this.sprites[directions.down] = new Sprite([{
    x: 0,
    y: 180,
    w: 30,
    h: 30
  }]);
  this.sprites[directions.left] = new Sprite([{
    x: 0,
    y: 210,
    w: 30,
    h: 30
  }]); //存進資料庫

  this.inventory = new Inventory(3);
}

Character.prototype.placeAt = function (x, y) {
  this.tileFrom = [x, y];
  this.tileTo = [x, y];
  this.position = [tileWidth * x + (tileWidth - this.dimensions[0]) / 2, tileHeight * y + (tileHeight - this.dimensions[1]) / 2];
};

Character.prototype.processMovement = function (t) {
  if (this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) {
    return false;
  }

  var moveSpeed = this.delayMove[tileTypes[tileMap.map[toIndex(this.tileFrom[0], this.tileFrom[1])].type].floor];

  if (t - this.timeMoved >= moveSpeed) {
    this.placeAt(this.tileTo[0], this.tileTo[1]);

    if (tileMap.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter != null) {
      tileMap.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter(this);
    }

    var tileFloor = tileTypes[tileMap.map[toIndex(this.tileFrom[0], this.tileFrom[1])].type].floor;

    if (tileFloor == floorTypes.ice) {
      if (this.canMoveDirection(this.direction)) {
        this.moveDirection(this.direction, t);
      }
    } else if (tileFloor == floorTypes.conveyorL && this.canMoveLeft()) {
      this.moveLeft(t);
    } else if (tileFloor == floorTypes.conveyorR && this.canMoveRight()) {
      this.moveRight(t);
    } else if (tileFloor == floorTypes.conveyorU && this.canMoveUp()) {
      this.moveUp(t);
    } else if (tileFloor == floorTypes.conveyorD && this.canMoveDown()) {
      this.moveDown(t);
    }
  } else {
    this.position[0] = this.tileFrom[0] * tileWidth + (tileWidth - this.dimensions[0]) / 2;
    this.position[1] = this.tileFrom[1] * tileHeight + (tileHeight - this.dimensions[1]) / 2;

    if (this.tileTo[0] != this.tileFrom[0]) {
      var diff = tileWidth / moveSpeed * (t - this.timeMoved);
      this.position[0] += this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff;
    }

    if (this.tileTo[1] != this.tileFrom[1]) {
      var _diff = tileHeight / moveSpeed * (t - this.timeMoved);

      this.position[1] += this.tileTo[1] < this.tileFrom[1] ? 0 - _diff : _diff;
    }

    this.position[0] = Math.round(this.position[0]);
    this.position[1] = Math.round(this.position[1]);
  }

  return true;
}; //角色控制


Character.prototype.canMoveTo = function (x, y) {
  if (x < 0 || x >= mapWidth || y < 0 || y >= mapHeight) {
    return false;
  }

  if (typeof this.delayMove[tileTypes[tileMap.map[toIndex(x, y)].type].floor] == "undefined") {
    return false;
  }

  if (tileMap.map[toIndex(x, y)].object != null) {
    var o = tileMap.map[toIndex(x, y)].object;

    if (objectTypes[o.type].collision == objectCollision.solid) {
      return false;
    }
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

Character.prototype.canMoveDirection = function (d) {
  switch (d) {
    case directions.up:
      return this.canMoveUp();

    case directions.down:
      return this.canMoveDown();

    case directions.left:
      return this.canMoveLeft();

    default:
      return this.canMoveRight();
  }
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
};

Character.prototype.moveDirection = function (d, t) {
  switch (d) {
    case directions.up:
      return this.moveUp(t);

    case directions.down:
      return this.moveDown(t);

    case directions.left:
      return this.moveLeft(t);

    default:
      return this.moveRight(t);
  }
};

Character.prototype.pickUp = function () {
  if (this.tileTo[0] != this.tileFrom[0] || this.tileTo[1] != this.tileFrom[1]) {
    return false;
  }

  var is = tileMap.map[toIndex(this.tileFrom[0], this.tileFrom[1])].itemStack;

  if (is != null) {
    var remains = this.inventory.addItems(is.type, is.qty);

    if (remains) {
      is.qty = remains;
    } else {
      tileMap.map[toIndex(this.tileFrom[0], this.tileFrom[1])].itemStack = null;
    }
  }

  return true;
};

function toIndex(x, y) {
  return y * mapWidth + x;
}

window.onload = function () {
  ctx = document.getElementById("game").getContext("2d");
  requestAnimationFrame(drawGame);
  ctx.font = "bold 10pt sans-serif";
  window.addEventListener("keydown", function (e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      keysDown[e.keyCode] = true;
    }

    if (e.keyCode == 80) {
      keysDown[e.keyCode] = true;
    }
  });
  window.addEventListener("keyup", function (e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      keysDown[e.keyCode] = false;
    }

    if (e.keyCode == 83) {
      currentSpeed = currentSpeed >= gameSpeeds.length - 1 ? 0 : currentSpeed + 1;
    }

    if (e.keyCode == 80) {
      keysDown[e.keyCode] = false;
    }
  });
  viewport.screen = [document.getElementById("game").width, document.getElementById("game").height];
  tileset = new Image();

  tileset.onerror = function () {
    ctx = null;
    alert("Failed loading tileset.");
  };

  tileset.onload = function () {
    tilesetLoaded = true;
  };

  tileset.src = tilesetURL;
  tileMap.buildMapFromData(gameMap, mapWidth, mapHeight);
  tileMap.addRoofs(roofList);

  tileMap.map[2 * mapWidth + 2].eventEnter = function () {
    console.log("Entered tile 2,2");
  };

  var mo1 = new MapObject(1);
  mo1.placeAt(2, 4);
  var mo2 = new MapObject(2);
  mo2.placeAt(2, 3);
  var mo11 = new MapObject(1);
  mo11.placeAt(6, 4);
  var mo12 = new MapObject(2);
  mo12.placeAt(7, 4);
  var mo4 = new MapObject(3);
  mo4.placeAt(4, 5);
  var mo5 = new MapObject(3);
  mo5.placeAt(4, 8);
  var mo6 = new MapObject(3);
  mo6.placeAt(4, 11);
  var mo7 = new MapObject(3);
  mo7.placeAt(2, 6);
  var mo8 = new MapObject(3);
  mo8.placeAt(2, 9);
  var mo9 = new MapObject(3);
  mo9.placeAt(2, 12);

  for (var i = 3; i < 8; i++) {
    var ps = new PlacedItemStack(1, 1);
    ps.placeAt(i, 1);
  }

  for (var _i = 3; _i < 8; _i++) {
    var _ps = new PlacedItemStack(1, 1);

    _ps.placeAt(3, _i);
  }
};

function drawGame() {
  if (ctx == null) {
    return;
  }

  if (!tilesetLoaded) {
    requestAnimationFrame(drawGame);
    return;
  }

  var currentFrameTime = Date.now();
  var timeElapsed = currentFrameTime - lastFrameTime;
  gameTime += Math.floor(timeElapsed * gameSpeeds[currentSpeed].mult);
  var sec = Math.floor(Date.now() / 1000);

  if (sec != currentSecond) {
    currentSecond = sec;
    framesLastSecond = frameCount;
    frameCount = 1;
  } else {
    frameCount++;
  }

  if (!player.processMovement(gameTime) && gameSpeeds[currentSpeed].mult != 0) {
    if (keysDown[38] && player.canMoveUp()) {
      player.moveUp(gameTime);
    } else if (keysDown[40] && player.canMoveDown()) {
      player.moveDown(gameTime);
    } else if (keysDown[37] && player.canMoveLeft()) {
      player.moveLeft(gameTime);
    } else if (keysDown[39] && player.canMoveRight()) {
      player.moveRight(gameTime);
    } else if (keysDown[80]) {
      player.pickUp();
    }
  }

  viewport.update(player.position[0] + player.dimensions[0] / 2, player.position[1] + player.dimensions[1] / 2);
  var playerRoof1 = tileMap.map[toIndex(player.tileFrom[0], player.tileFrom[1])].roof;
  var playerRoof2 = tileMap.map[toIndex(player.tileTo[0], player.tileTo[1])].roof;
  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

  for (var z = 0; z < tileMap.levels; z++) {
    for (var y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y) {
      for (var x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x) {
        if (z == 0) {
          tileTypes[tileMap.map[toIndex(x, y)].type].sprite.draw(gameTime, viewport.offset[0] + x * tileWidth, viewport.offset[1] + y * tileHeight);
        } else if (z == 1) {
          var is = tileMap.map[toIndex(x, y)].itemStack;

          if (is != null) {
            itemTypes[is.type].sprite.draw(gameTime, viewport.offset[0] + x * tileWidth + itemTypes[is.type].offset[0], viewport.offset[1] + y * tileHeight + itemTypes[is.type].offset[1]);
          }
        }

        var o = tileMap.map[toIndex(x, y)].object;

        if (o != null && objectTypes[o.type].zIndex == z) {
          var ot = objectTypes[o.type];
          ot.sprite.draw(gameTime, viewport.offset[0] + x * tileWidth + ot.offset[0], viewport.offset[1] + y * tileHeight + ot.offset[1]);
        }

        if (z == 2 && tileMap.map[toIndex(x, y)].roofType != 0 && tileMap.map[toIndex(x, y)].roof != playerRoof1 && tileMap.map[toIndex(x, y)].roof != playerRoof2) {
          tileTypes[tileMap.map[toIndex(x, y)].roofType].sprite.draw(gameTime, viewport.offset[0] + x * tileWidth, viewport.offset[1] + y * tileHeight);
        }
      }
    }

    if (z == 1) {
      player.sprites[player.direction].draw(gameTime, viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1]);
    }
  }

  ctx.textAlign = "right";

  for (var i = 0; i < player.inventory.spaces; i++) {
    ctx.fillStyle = "#ddccaa";
    ctx.fillRect(10 + i * 50, 350, 40, 40);

    if (typeof player.inventory.stacks[i] != "undefined") {
      var it = itemTypes[player.inventory.stacks[i].type];
      it.sprite.draw(gameTime, 10 + i * 50 + it.offset[0], 350 + it.offset[1]);

      if (player.inventory.stacks[i].qty > 1) {
        ctx.fillStyle = "#000000";
        ctx.fillText("" + player.inventory.stacks[i].qty, 10 + i * 50 + 38, 350 + 38);
      }
    }
  }

  ctx.textAlign = "left";
  ctx.fillStyle = "#ff0000";
  ctx.fillText("FPS: " + framesLastSecond, 10, 20);
  ctx.fillText("Game speed: " + gameSpeeds[currentSpeed].name, 10, 40);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zY3JpcHRzL2NhbnZhcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiXSwibmFtZXMiOlsiY3R4IiwiZ2FtZU1hcCIsInRpbGVNYXAiLCJUaWxlTWFwIiwicm9vZkxpc3QiLCJ4IiwieSIsInciLCJoIiwiZGF0YSIsInRpbGVXaWR0aCIsInRpbGVIZWlnaHQiLCJtYXBXaWR0aCIsIm1hcEhlaWdodCIsImN1cnJlbnRTZWNvbmQiLCJmcmFtZUNvdW50IiwiZnJhbWVzTGFzdFNlY29uZCIsImxhc3RGcmFtZVRpbWUiLCJ0aWxlc2V0IiwidGlsZXNldFVSTCIsInRpbGVzZXRMb2FkZWQiLCJnYW1lVGltZSIsImdhbWVTcGVlZHMiLCJuYW1lIiwibXVsdCIsImN1cnJlbnRTcGVlZCIsIlNwcml0ZSIsImFuaW1hdGVkIiwibGVuZ3RoIiwiZHVyYXRpb24iLCJsb29wIiwiaSIsImQiLCJmcmFtZXMiLCJwcm90b3R5cGUiLCJkcmF3IiwidCIsImZyYW1lSWR4IiwidG90YWxEIiwib2Zmc2V0IiwiZHJhd0ltYWdlIiwiaXRlbVR5cGVzIiwibWF4U3RhY2siLCJzcHJpdGUiLCJTdGFjayIsImlkIiwicXR5IiwidHlwZSIsIkludmVudG9yeSIsInMiLCJzcGFjZXMiLCJzdGFja3MiLCJhZGRJdGVtcyIsIm1heEhlcmUiLCJwdXNoIiwiUGxhY2VkSXRlbVN0YWNrIiwicGxhY2VBdCIsIm54IiwibnkiLCJtYXAiLCJ0b0luZGV4IiwiaXRlbVN0YWNrIiwib2JqZWN0Q29sbGlzaW9uIiwibm9uZSIsInNvbGlkIiwib2JqZWN0VHlwZXMiLCJjb2xsaXNpb24iLCJ6SW5kZXgiLCJNYXBPYmplY3QiLCJudCIsIm9iamVjdCIsImZsb29yVHlwZXMiLCJwYXRoIiwid2F0ZXIiLCJpY2UiLCJjb252ZXlvclUiLCJjb252ZXlvckQiLCJjb252ZXlvckwiLCJjb252ZXlvclIiLCJncmFzcyIsInRpbGVUeXBlcyIsImNvbG91ciIsImZsb29yIiwiVGlsZSIsInR4IiwidHkiLCJ0dCIsInJvb2YiLCJyb29mVHlwZSIsImV2ZW50RW50ZXIiLCJsZXZlbHMiLCJidWlsZE1hcEZyb21EYXRhIiwiYWRkUm9vZnMiLCJyb29mcyIsInIiLCJ0aWxlSWR4IiwiZGlyZWN0aW9ucyIsInVwIiwicmlnaHQiLCJkb3duIiwibGVmdCIsImtleXNEb3duIiwidmlld3BvcnQiLCJzY3JlZW4iLCJzdGFydFRpbGUiLCJlbmRUaWxlIiwidXBkYXRlIiwicHgiLCJweSIsIk1hdGgiLCJ0aWxlIiwiY2VpbCIsInBsYXllciIsIkNoYXJhY3RlciIsInRpbGVGcm9tIiwidGlsZVRvIiwidGltZU1vdmVkIiwiZGltZW5zaW9ucyIsInBvc2l0aW9uIiwiZGVsYXlNb3ZlIiwiZGlyZWN0aW9uIiwic3ByaXRlcyIsImludmVudG9yeSIsInByb2Nlc3NNb3ZlbWVudCIsIm1vdmVTcGVlZCIsInRpbGVGbG9vciIsImNhbk1vdmVEaXJlY3Rpb24iLCJtb3ZlRGlyZWN0aW9uIiwiY2FuTW92ZUxlZnQiLCJtb3ZlTGVmdCIsImNhbk1vdmVSaWdodCIsIm1vdmVSaWdodCIsImNhbk1vdmVVcCIsIm1vdmVVcCIsImNhbk1vdmVEb3duIiwibW92ZURvd24iLCJkaWZmIiwicm91bmQiLCJjYW5Nb3ZlVG8iLCJvIiwicGlja1VwIiwiaXMiLCJyZW1haW5zIiwid2luZG93Iiwib25sb2FkIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRleHQiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJkcmF3R2FtZSIsImZvbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImtleUNvZGUiLCJ3aWR0aCIsImhlaWdodCIsIkltYWdlIiwib25lcnJvciIsImFsZXJ0Iiwic3JjIiwiY29uc29sZSIsImxvZyIsIm1vMSIsIm1vMiIsIm1vMTEiLCJtbzEyIiwibW80IiwibW81IiwibW82IiwibW83IiwibW84IiwibW85IiwicHMiLCJjdXJyZW50RnJhbWVUaW1lIiwiRGF0ZSIsIm5vdyIsInRpbWVFbGFwc2VkIiwic2VjIiwicGxheWVyUm9vZjEiLCJwbGF5ZXJSb29mMiIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwieiIsIm90IiwidGV4dEFsaWduIiwiaXQiLCJmaWxsVGV4dCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBQ0E7Ozs7Ozs7Ozs7Ozs7QUNEQSxJQUFJQSxHQUFHLEdBQUcsSUFBVixDLENBRUE7O0FBQ0EsSUFBSUMsT0FBTyxHQUFHLENBQ0YsQ0FERSxFQUNDLENBREQsRUFDSSxDQURKLEVBQ08sQ0FEUCxFQUNVLENBRFYsRUFDYSxDQURiLEVBQ2dCLENBRGhCLEVBQ21CLENBRG5CLEVBQ3NCLENBRHRCLEVBQ3lCLENBRHpCLEVBQzRCLENBRDVCLEVBQytC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LEVBQXlCLEtBQUtVLENBQUMsR0FBRyxFQUFULEdBQWMwSixFQUFFLENBQUNsSixNQUFILENBQVUsQ0FBVixDQUF2QyxFQUFxRCxNQUFNa0osRUFBRSxDQUFDbEosTUFBSCxDQUFVLENBQVYsQ0FBM0Q7O0FBRUEsVUFBSXlFLE1BQU0sQ0FBQ1UsU0FBUCxDQUFpQnZFLE1BQWpCLENBQXdCcEIsQ0FBeEIsRUFBMkJlLEdBQTNCLEdBQWlDLENBQXJDLEVBQXdDO0FBQ3RDOUMsV0FBRyxDQUFDb0wsU0FBSixHQUFnQixTQUFoQjtBQUNBcEwsV0FBRyxDQUFDMEwsUUFBSixDQUNFLEtBQUsxRSxNQUFNLENBQUNVLFNBQVAsQ0FBaUJ2RSxNQUFqQixDQUF3QnBCLENBQXhCLEVBQTJCZSxHQURsQyxFQUVFLEtBQUtmLENBQUMsR0FBRyxFQUFULEdBQWMsRUFGaEIsRUFHRSxNQUFNLEVBSFI7QUFLRDtBQUNGO0FBQ0Y7O0FBQ0QvQixLQUFHLENBQUN3TCxTQUFKLEdBQWdCLE1BQWhCO0FBRUF4TCxLQUFHLENBQUNvTCxTQUFKLEdBQWdCLFNBQWhCO0FBQ0FwTCxLQUFHLENBQUMwTCxRQUFKLENBQWEsVUFBVTFLLGdCQUF2QixFQUF5QyxFQUF6QyxFQUE2QyxFQUE3QztBQUNBaEIsS0FBRyxDQUFDMEwsUUFBSixDQUFhLGlCQUFpQnBLLFVBQVUsQ0FBQ0csWUFBRCxDQUFWLENBQXlCRixJQUF2RCxFQUE2RCxFQUE3RCxFQUFpRSxFQUFqRTtBQUVBTixlQUFhLEdBQUc0SixnQkFBaEI7QUFDQXpCLHVCQUFxQixDQUFDQyxRQUFELENBQXJCO0FBQ0QsQzs7Ozs7Ozs7Ozs7QUNsM0JELHVDIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9kaXN0L1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImltcG9ydCBcIi4vc3R5bGVzL2luZGV4LnNjc3NcIjtcbi8vIGltcG9ydCBcIi4vc2NyaXB0cy9tYXBcIjtcbmltcG9ydCBcIi4vc2NyaXB0cy9jYW52YXNcIjtcblxuIiwibGV0IGN0eCA9IG51bGw7XG5cbi8vIOWcsOWbvu+8miAwLeWimeWjgSAxLeiNieWcsCAyLemZhuWcsCA0Leays+a1gVxubGV0IGdhbWVNYXAgPSBbXG4gICAgICAgICAgICAwLCAwLCAwLCAwLCA0LCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLCAwLFxuXHRcdFx0MCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgNCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCxcblx0XHRcdDAsIDIsIDIsIDIsIDEsIDEsIDEsIDEsIDEsIDQsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsXG5cdFx0XHQwLCAxLCAxLCAyLCAxLCAwLCAwLCAwLCAwLCA0LCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLFxuXHRcdFx0MCwgMSwgMSwgMiwgMSwgMCwgMiwgMiwgMCwgNCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCxcblx0XHRcdDAsIDEsIDEsIDIsIDEsIDAsIDIsIDIsIDAsIDQsIDEsIDEsIDEsIDEsIDEsIDAsIDAsIDAsIDAsIDAsXG5cdFx0XHQwLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAwLCA0LCA0LCA0LCAxLCAxLCAxLCAwLCAyLCAyLCAyLCAwLFxuXHRcdFx0MCwgMSwgMSwgMiwgMSwgMCwgMiwgMiwgMCwgMSwgMSwgNCwgMSwgMSwgMSwgMCwgMiwgMiwgMiwgMCxcblx0XHRcdDAsIDEsIDEsIDIsIDEsIDAsIDIsIDIsIDAsIDEsIDEsIDQsIDEsIDEsIDEsIDAsIDIsIDIsIDIsIDAsXG5cdFx0XHQwLCAxLCAxLCAyLCAxLCAwLCAwLCAwLCAwLCAxLCAxLCA0LCAxLCAxLCAwLCAwLCAwLCAyLCAwLCAwLFxuXHRcdFx0MCwgMSwgMSwgMiwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgNCwgMSwgMSwgMCwgMiwgMiwgMiwgMiwgMCxcblx0XHRcdDAsIDEsIDEsIDIsIDIsIDIsIDIsIDIsIDIsIDEsIDQsIDQsIDEsIDEsIDAsIDIsIDIsIDIsIDIsIDAsXG5cdFx0XHQwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAyLCAwLFxuXHRcdFx0MCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgNCwgNCwgMSwgMSwgMSwgMCwgMiwgMiwgMiwgMiwgMCxcblx0XHRcdDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDQsIDEsIDEsIDEsIDEsIDAsIDIsIDIsIDIsIDIsIDAsXG5cdFx0XHQwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCA0LCAxLCAxLCAxLCAxLCAwLCAyLCAwLCAwLCAwLCAwLFxuXHRcdFx0MCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgNCwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMSwgMCxcblx0XHRcdDAsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDQsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDEsIDAsXG5cdFx0XHQwLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCA0LCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAxLCAwLFxuXHRcdFx0MCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMCwgMFxuXTtcblxubGV0IHRpbGVNYXAgPSBuZXcgVGlsZU1hcCgpO1xuXG4vL+Wumue+qeWxi+mgguS9jee9ruizh+aWmVxubGV0IHJvb2ZMaXN0ID0gW1xuXHR7IHg6NSwgeTozLCB3OjQsIGg6NywgZGF0YTogW1xuXHRcdDEwLCAxMCwgMTEsIDExLFxuXHRcdDEwLCAxMCwgMTEsIDExLFxuXHRcdDEwLCAxMCwgMTEsIDExLFxuXHRcdDEwLCAxMCwgMTEsIDExLFxuXHRcdDEwLCAxMCwgMTEsIDExLFxuXHRcdDEwLCAxMCwgMTEsIDExLFxuXHRcdDEwLCAxMCwgMTEsIDExXG5cdF19LFxuXHR7IHg6MTUsIHk6NSwgdzo1LCBoOjQsIGRhdGE6IFtcblx0XHQxMCwgMTAsIDExLCAxMSwgMTEsXG5cdFx0MTAsIDEwLCAxMSwgMTEsIDExLFxuXHRcdDEwLCAxMCwgMTEsIDExLCAxMSxcblx0XHQxMCwgMTAsIDExLCAxMSwgMTFcblx0XX0sXG5cdHsgeDoxNCwgeTo5LCB3OjYsIGg6NywgZGF0YTogW1xuXHRcdDEwLCAxMCwgMTAsIDExLCAxMSwgMTEsXG5cdFx0MTAsIDEwLCAxMCwgMTEsIDExLCAxMSxcblx0XHQxMCwgMTAsIDEwLCAxMSwgMTEsIDExLFxuXHRcdDEwLCAxMCwgMTAsIDExLCAxMSwgMTEsXG5cdFx0MTAsIDEwLCAxMCwgMTEsIDExLCAxMSxcblx0XHQxMCwgMTAsIDEwLCAxMSwgMTEsIDExLFxuXHRcdDEwLCAxMCwgMTAsIDExLCAxMSwgMTFcblx0XX1cbl07XG5cbmxldCB0aWxlV2lkdGggPSA0MCx0aWxlSGVpZ2h0ID0gNDA7IC8v5a6a576p54mp5Lu25bC65a+4KDQwcHggeCA0MHB4KVxubGV0IG1hcFdpZHRoID0gMjAsbWFwSGVpZ2h0ID0gMjA7IC8v5a6a576p54mp5Zyw5ZyW57i95qC85pW4XG5sZXQgY3VycmVudFNlY29uZCA9IDAsZnJhbWVDb3VudCA9IDAsZnJhbWVzTGFzdFNlY29uZCA9IDAsbGFzdEZyYW1lVGltZSA9IDA7XG5cbi8v5a6j5ZGK5ZyW6LOH6Zuq56Kn5ZyWXG5sZXQgdGlsZXNldCA9IG51bGwsXG4gIHRpbGVzZXRVUkwgPSBcImh0dHBzOi8vaS5wb3N0aW1nLmNjL3lOaFBaOU5UL3RpbGVzZXQucG5nXCIsXG4gIHRpbGVzZXRMb2FkZWQgPSBmYWxzZTtcblxubGV0IGdhbWVUaW1lID0gMDtcblxuLy/lrqPlkYrnp7vli5XpgJ/luqZcbmxldCBnYW1lU3BlZWRzID0gW1xuICB7IG5hbWU6IFwiTm9ybWFsXCIsIG11bHQ6IDEgfSxcbiAgeyBuYW1lOiBcIlNsb3dcIiwgbXVsdDogMC4zIH0sXG4gIHsgbmFtZTogXCJGYXN0XCIsIG11bHQ6IDMgfSxcbiAgeyBuYW1lOiBcIlBhdXNlZFwiLCBtdWx0OiAwIH1cbl07XG5sZXQgY3VycmVudFNwZWVkID0gMDtcblxuLy/li5XmhYvnianku7blrqPlkYotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIFNwcml0ZShkYXRhKSB7XG4gIHRoaXMuYW5pbWF0ZWQgPSBkYXRhLmxlbmd0aCA+IDE7IC8v6LOH5paZ5aSn5pa8MeWLleaFi+WRiOePvlxuICB0aGlzLmZyYW1lQ291bnQgPSBkYXRhLmxlbmd0aDsgLy/os4fmlpnlgbXmlbhcbiAgdGhpcy5kdXJhdGlvbiA9IDA7IC8v5oyB57qM5pmC6ZaTXG4gIHRoaXMubG9vcCA9IHRydWU7XG5cbiAgaWYgKGRhdGEubGVuZ3RoID4gMSkge1xuICAgIGZvciAobGV0IGkgaW4gZGF0YSkge1xuICAgICAgaWYgKHR5cGVvZiBkYXRhW2ldLmQgPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBkYXRhW2ldLmQgPSAxMDA7XG4gICAgICB9XG4gICAgICB0aGlzLmR1cmF0aW9uICs9IGRhdGFbaV0uZDtcblxuICAgICAgaWYgKHR5cGVvZiBkYXRhW2ldLmxvb3AgIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICB0aGlzLmxvb3AgPSBkYXRhW2ldLmxvb3AgPyB0cnVlIDogZmFsc2U7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdGhpcy5mcmFtZXMgPSBkYXRhO1xufVxuXG5TcHJpdGUucHJvdG90eXBlLmRyYXcgPSBmdW5jdGlvbih0LCB4LCB5KSB7XG4gIGxldCBmcmFtZUlkeCA9IDA7XG5cbiAgaWYgKCF0aGlzLmxvb3AgJiYgdGhpcy5hbmltYXRlZCAmJiB0ID49IHRoaXMuZHVyYXRpb24pIHtcbiAgICBmcmFtZUlkeCA9IHRoaXMuZnJhbWVzLmxlbmd0aCAtIDE7XG4gIH0gZWxzZSBpZiAodGhpcy5hbmltYXRlZCkge1xuICAgIHQgPSB0ICUgdGhpcy5kdXJhdGlvbjtcbiAgICBsZXQgdG90YWxEID0gMDtcblxuICAgIGZvciAobGV0IGkgaW4gdGhpcy5mcmFtZXMpIHtcbiAgICAgIHRvdGFsRCArPSB0aGlzLmZyYW1lc1tpXS5kO1xuICAgICAgZnJhbWVJZHggPSBpO1xuXG4gICAgICBpZiAodCA8PSB0b3RhbEQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgbGV0IG9mZnNldCA9XG4gICAgdHlwZW9mIHRoaXMuZnJhbWVzW2ZyYW1lSWR4XS5vZmZzZXQgPT0gXCJ1bmRlZmluZWRcIlxuICAgICAgPyBbMCwgMF1cbiAgICAgIDogdGhpcy5mcmFtZXNbZnJhbWVJZHhdLm9mZnNldDtcblxuICBjdHguZHJhd0ltYWdlKFxuICAgIHRpbGVzZXQsXG4gICAgdGhpcy5mcmFtZXNbZnJhbWVJZHhdLngsXG4gICAgdGhpcy5mcmFtZXNbZnJhbWVJZHhdLnksXG4gICAgdGhpcy5mcmFtZXNbZnJhbWVJZHhdLncsXG4gICAgdGhpcy5mcmFtZXNbZnJhbWVJZHhdLmgsXG4gICAgeCArIG9mZnNldFswXSxcbiAgICB5ICsgb2Zmc2V0WzFdLFxuICAgIHRoaXMuZnJhbWVzW2ZyYW1lSWR4XS53LFxuICAgIHRoaXMuZnJhbWVzW2ZyYW1lSWR4XS5oXG4gICk7XG59O1xuXG5sZXQgaXRlbVR5cGVzID0ge1xuICAxOiB7XG4gICAgbmFtZTogXCJTdGFyXCIsXG4gICAgbWF4U3RhY2s6IDIsXG4gICAgc3ByaXRlOiBuZXcgU3ByaXRlKFt7IHg6IDI0MCwgeTogMCwgdzogNDAsIGg6IDQwIH1dKSxcbiAgICBvZmZzZXQ6IFswLCAwXVxuICB9XG59O1xuXG5mdW5jdGlvbiBTdGFjayhpZCwgcXR5KSB7XG4gIHRoaXMudHlwZSA9IGlkO1xuICB0aGlzLnF0eSA9IHF0eTtcbn1cbmZ1bmN0aW9uIEludmVudG9yeShzKSB7XG4gIHRoaXMuc3BhY2VzID0gcztcbiAgdGhpcy5zdGFja3MgPSBbXTtcbn1cbkludmVudG9yeS5wcm90b3R5cGUuYWRkSXRlbXMgPSBmdW5jdGlvbihpZCwgcXR5KSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5zcGFjZXM7IGkrKykge1xuICAgIGlmICh0aGlzLnN0YWNrcy5sZW5ndGggPD0gaSkge1xuICAgICAgbGV0IG1heEhlcmUgPSBxdHkgPiBpdGVtVHlwZXNbaWRdLm1heFN0YWNrID8gaXRlbVR5cGVzW2lkXS5tYXhTdGFjayA6IHF0eTtcbiAgICAgIHRoaXMuc3RhY2tzLnB1c2gobmV3IFN0YWNrKGlkLCBtYXhIZXJlKSk7XG5cbiAgICAgIHF0eSAtPSBtYXhIZXJlO1xuICAgIH0gZWxzZSBpZiAoXG4gICAgICB0aGlzLnN0YWNrc1tpXS50eXBlID09IGlkICYmXG4gICAgICB0aGlzLnN0YWNrc1tpXS5xdHkgPCBpdGVtVHlwZXNbaWRdLm1heFN0YWNrXG4gICAgKSB7XG4gICAgICBsZXQgbWF4SGVyZSA9IGl0ZW1UeXBlc1tpZF0ubWF4U3RhY2sgLSB0aGlzLnN0YWNrc1tpXS5xdHk7XG4gICAgICBpZiAobWF4SGVyZSA+IHF0eSkge1xuICAgICAgICBtYXhIZXJlID0gcXR5O1xuICAgICAgfVxuXG4gICAgICB0aGlzLnN0YWNrc1tpXS5xdHkgKz0gbWF4SGVyZTtcbiAgICAgIHF0eSAtPSBtYXhIZXJlO1xuICAgIH1cblxuICAgIGlmIChxdHkgPT0gMCkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHF0eTtcbn07XG5cbmZ1bmN0aW9uIFBsYWNlZEl0ZW1TdGFjayhpZCwgcXR5KSB7XG4gIHRoaXMudHlwZSA9IGlkO1xuICB0aGlzLnF0eSA9IHF0eTtcbiAgdGhpcy54ID0gMDtcbiAgdGhpcy55ID0gMDtcbn1cblBsYWNlZEl0ZW1TdGFjay5wcm90b3R5cGUucGxhY2VBdCA9IGZ1bmN0aW9uKG54LCBueSkge1xuICBpZiAodGlsZU1hcC5tYXBbdG9JbmRleCh0aGlzLngsIHRoaXMueSldLml0ZW1TdGFjayA9PSB0aGlzKSB7XG4gICAgdGlsZU1hcC5tYXBbdG9JbmRleCh0aGlzLngsIHRoaXMueSldLml0ZW1TdGFjayA9IG51bGw7XG4gIH1cblxuICB0aGlzLnggPSBueDtcbiAgdGhpcy55ID0gbnk7XG5cbiAgdGlsZU1hcC5tYXBbdG9JbmRleChueCwgbnkpXS5pdGVtU3RhY2sgPSB0aGlzO1xufTtcblxubGV0IG9iamVjdENvbGxpc2lvbiA9IHtcbiAgbm9uZTogMCxcbiAgc29saWQ6IDFcbn07XG5sZXQgb2JqZWN0VHlwZXMgPSB7XG4gIDE6IHtcbiAgICBuYW1lOiBcIkJveFwiLFxuICAgIHNwcml0ZTogbmV3IFNwcml0ZShbeyB4OiA0MCwgeTogMTYwLCB3OiA0MCwgaDogNDAgfV0pLFxuICAgIG9mZnNldDogWzAsIDBdLFxuICAgIGNvbGxpc2lvbjogb2JqZWN0Q29sbGlzaW9uLnNvbGlkLFxuICAgIHpJbmRleDogMVxuICB9LFxuICAyOiB7XG4gICAgbmFtZTogXCJCcm9rZW4gQm94XCIsXG4gICAgc3ByaXRlOiBuZXcgU3ByaXRlKFt7IHg6IDQwLCB5OiAyMDAsIHc6IDQwLCBoOiA0MCB9XSksXG4gICAgb2Zmc2V0OiBbMCwgMF0sXG4gICAgY29sbGlzaW9uOiBvYmplY3RDb2xsaXNpb24ubm9uZSxcbiAgICB6SW5kZXg6IDFcbiAgfSxcbiAgMzoge1xuICAgIG5hbWU6IFwiVHJlZSB0b3BcIixcbiAgICBzcHJpdGU6IG5ldyBTcHJpdGUoW3sgeDogODAsIHk6IDE2MCwgdzogODAsIGg6IDgwIH1dKSxcbiAgICBvZmZzZXQ6IFstMjAsIC0yMF0sXG4gICAgY29sbGlzaW9uOiBvYmplY3RDb2xsaXNpb24uc29saWQsXG4gICAgekluZGV4OiAzXG4gIH1cbn07XG5mdW5jdGlvbiBNYXBPYmplY3QobnQpIHtcbiAgdGhpcy54ID0gMDtcbiAgdGhpcy55ID0gMDtcbiAgdGhpcy50eXBlID0gbnQ7XG59XG5NYXBPYmplY3QucHJvdG90eXBlLnBsYWNlQXQgPSBmdW5jdGlvbihueCwgbnkpIHtcbiAgaWYgKHRpbGVNYXAubWFwW3RvSW5kZXgodGhpcy54LCB0aGlzLnkpXS5vYmplY3QgPT0gdGhpcykge1xuICAgIHRpbGVNYXAubWFwW3RvSW5kZXgodGhpcy54LCB0aGlzLnkpXS5vYmplY3QgPSBudWxsO1xuICB9XG5cbiAgdGhpcy54ID0gbng7XG4gIHRoaXMueSA9IG55O1xuXG4gIHRpbGVNYXAubWFwW3RvSW5kZXgobngsIG55KV0ub2JqZWN0ID0gdGhpcztcbn07XG5cbmxldCBmbG9vclR5cGVzID0ge1xuICBzb2xpZDogMCxcbiAgcGF0aDogMSxcbiAgd2F0ZXI6IDIsXG4gIGljZTogMyxcbiAgY29udmV5b3JVOiA0LFxuICBjb252ZXlvckQ6IDUsXG4gIGNvbnZleW9yTDogNixcbiAgY29udmV5b3JSOiA3LFxuICBncmFzczogOFxufTtcbmxldCB0aWxlVHlwZXMgPSB7XG4gIDA6IHtcbiAgICBjb2xvdXI6IFwiIzY4NWI0OFwiLFxuICAgIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLFxuICAgIHNwcml0ZTogbmV3IFNwcml0ZShbeyB4OiAwLCB5OiAwLCB3OiA0MCwgaDogNDAgfV0pXG4gIH0sXG4gIDE6IHtcbiAgICBjb2xvdXI6IFwiIzVhYTQ1N1wiLFxuICAgIGZsb29yOiBmbG9vclR5cGVzLmdyYXNzLFxuICAgIHNwcml0ZTogbmV3IFNwcml0ZShbeyB4OiA0MCwgeTogMCwgdzogNDAsIGg6IDQwIH1dKVxuICB9LFxuICAyOiB7XG4gICAgY29sb3VyOiBcIiNlOGJkN2FcIixcbiAgICBmbG9vcjogZmxvb3JUeXBlcy5wYXRoLFxuICAgIHNwcml0ZTogbmV3IFNwcml0ZShbeyB4OiA4MCwgeTogMCwgdzogNDAsIGg6IDQwIH1dKVxuICB9LFxuICAzOiB7XG4gICAgY29sb3VyOiBcIiMyODY2MjVcIixcbiAgICBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCxcbiAgICBzcHJpdGU6IG5ldyBTcHJpdGUoW3sgeDogMTIwLCB5OiAwLCB3OiA0MCwgaDogNDAgfV0pXG4gIH0sXG4gIDQ6IHtcbiAgICBjb2xvdXI6IFwiIzY3OGZkOVwiLFxuICAgIGZsb29yOiBmbG9vclR5cGVzLndhdGVyLFxuICAgIHNwcml0ZTogbmV3IFNwcml0ZShbXG4gICAgICB7IHg6IDE2MCwgeTogMCwgdzogNDAsIGg6IDQwLCBkOiAyMDAgfSxcbiAgICAgIHsgeDogMjAwLCB5OiAwLCB3OiA0MCwgaDogNDAsIGQ6IDIwMCB9LFxuICAgICAgeyB4OiAxNjAsIHk6IDQwLCB3OiA0MCwgaDogNDAsIGQ6IDIwMCB9LFxuICAgICAgeyB4OiAyMDAsIHk6IDQwLCB3OiA0MCwgaDogNDAsIGQ6IDIwMCB9LFxuICAgICAgeyB4OiAxNjAsIHk6IDQwLCB3OiA0MCwgaDogNDAsIGQ6IDIwMCB9LFxuICAgICAgeyB4OiAyMDAsIHk6IDAsIHc6IDQwLCBoOiA0MCwgZDogMjAwIH1cbiAgICBdKVxuICB9LFxuICA1OiB7XG4gICAgY29sb3VyOiBcIiNlZWVlZmZcIixcbiAgICBmbG9vcjogZmxvb3JUeXBlcy5pY2UsXG4gICAgc3ByaXRlOiBuZXcgU3ByaXRlKFt7IHg6IDEyMCwgeTogMTIwLCB3OiA0MCwgaDogNDAgfV0pXG4gIH0sXG4gIDY6IHtcbiAgICBjb2xvdXI6IFwiI2NjY2NjY1wiLFxuICAgIGZsb29yOiBmbG9vclR5cGVzLmNvbnZleW9yTCxcbiAgICBzcHJpdGU6IG5ldyBTcHJpdGUoW1xuICAgICAgeyB4OiAwLCB5OiA0MCwgdzogNDAsIGg6IDQwLCBkOiAyMDAgfSxcbiAgICAgIHsgeDogNDAsIHk6IDQwLCB3OiA0MCwgaDogNDAsIGQ6IDIwMCB9LFxuICAgICAgeyB4OiA4MCwgeTogNDAsIHc6IDQwLCBoOiA0MCwgZDogMjAwIH0sXG4gICAgICB7IHg6IDEyMCwgeTogNDAsIHc6IDQwLCBoOiA0MCwgZDogMjAwIH1cbiAgICBdKVxuICB9LFxuICA3OiB7XG4gICAgY29sb3VyOiBcIiNjY2NjY2NcIixcbiAgICBmbG9vcjogZmxvb3JUeXBlcy5jb252ZXlvclIsXG4gICAgc3ByaXRlOiBuZXcgU3ByaXRlKFtcbiAgICAgIHsgeDogMTIwLCB5OiA4MCwgdzogNDAsIGg6IDQwLCBkOiAyMDAgfSxcbiAgICAgIHsgeDogODAsIHk6IDgwLCB3OiA0MCwgaDogNDAsIGQ6IDIwMCB9LFxuICAgICAgeyB4OiA0MCwgeTogODAsIHc6IDQwLCBoOiA0MCwgZDogMjAwIH0sXG4gICAgICB7IHg6IDAsIHk6IDgwLCB3OiA0MCwgaDogNDAsIGQ6IDIwMCB9XG4gICAgXSlcbiAgfSxcbiAgODoge1xuICAgIGNvbG91cjogXCIjY2NjY2NjXCIsXG4gICAgZmxvb3I6IGZsb29yVHlwZXMuY29udmV5b3JELFxuICAgIHNwcml0ZTogbmV3IFNwcml0ZShbXG4gICAgICB7IHg6IDE2MCwgeTogMjAwLCB3OiA0MCwgaDogNDAsIGQ6IDIwMCB9LFxuICAgICAgeyB4OiAxNjAsIHk6IDE2MCwgdzogNDAsIGg6IDQwLCBkOiAyMDAgfSxcbiAgICAgIHsgeDogMTYwLCB5OiAxMjAsIHc6IDQwLCBoOiA0MCwgZDogMjAwIH0sXG4gICAgICB7IHg6IDE2MCwgeTogODAsIHc6IDQwLCBoOiA0MCwgZDogMjAwIH1cbiAgICBdKVxuICB9LFxuICA5OiB7XG4gICAgY29sb3VyOiBcIiNjY2NjY2NcIixcbiAgICBmbG9vcjogZmxvb3JUeXBlcy5jb252ZXlvclUsXG4gICAgc3ByaXRlOiBuZXcgU3ByaXRlKFtcbiAgICAgIHsgeDogMjAwLCB5OiA4MCwgdzogNDAsIGg6IDQwLCBkOiAyMDAgfSxcbiAgICAgIHsgeDogMjAwLCB5OiAxMjAsIHc6IDQwLCBoOiA0MCwgZDogMjAwIH0sXG4gICAgICB7IHg6IDIwMCwgeTogMTYwLCB3OiA0MCwgaDogNDAsIGQ6IDIwMCB9LFxuICAgICAgeyB4OiAyMDAsIHk6IDIwMCwgdzogNDAsIGg6IDQwLCBkOiAyMDAgfVxuICAgIF0pXG4gIH0sXG5cbiAgMTA6IHtcbiAgICBjb2xvdXI6IFwiI2NjYWEwMFwiLFxuICAgIGZsb29yOiBmbG9vclR5cGVzLnNvbGlkLFxuICAgIHNwcml0ZTogbmV3IFNwcml0ZShbeyB4OiA0MCwgeTogMTIwLCB3OiA0MCwgaDogNDAgfV0pXG4gIH0sXG4gIDExOiB7XG4gICAgY29sb3VyOiBcIiNjY2FhMDBcIixcbiAgICBmbG9vcjogZmxvb3JUeXBlcy5zb2xpZCxcbiAgICBzcHJpdGU6IG5ldyBTcHJpdGUoW3sgeDogODAsIHk6IDEyMCwgdzogNDAsIGg6IDQwIH1dKVxuICB9XG59O1xuXG5mdW5jdGlvbiBUaWxlKHR4LCB0eSwgdHQpIHtcbiAgdGhpcy54ID0gdHg7XG4gIHRoaXMueSA9IHR5O1xuICB0aGlzLnR5cGUgPSB0dDtcbiAgdGhpcy5yb29mID0gbnVsbDtcbiAgdGhpcy5yb29mVHlwZSA9IDA7XG4gIHRoaXMuZXZlbnRFbnRlciA9IG51bGw7XG4gIHRoaXMub2JqZWN0ID0gbnVsbDtcbiAgdGhpcy5pdGVtU3RhY2sgPSBudWxsO1xufVxuXG5mdW5jdGlvbiBUaWxlTWFwKCkge1xuICB0aGlzLm1hcCA9IFtdO1xuICB0aGlzLncgPSAwO1xuICB0aGlzLmggPSAwO1xuICB0aGlzLmxldmVscyA9IDQ7XG59XG5UaWxlTWFwLnByb3RvdHlwZS5idWlsZE1hcEZyb21EYXRhID0gZnVuY3Rpb24oZCwgdywgaCkge1xuICB0aGlzLncgPSB3O1xuICB0aGlzLmggPSBoO1xuXG4gIGlmIChkLmxlbmd0aCAhPSB3ICogaCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHRoaXMubWFwLmxlbmd0aCA9IDA7XG5cbiAgZm9yIChsZXQgeSA9IDA7IHkgPCBoOyB5KyspIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHc7IHgrKykge1xuICAgICAgdGhpcy5tYXAucHVzaChuZXcgVGlsZSh4LCB5LCBkW3kgKiB3ICsgeF0pKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8v5re75Yqg5bGL6aCCXG5UaWxlTWFwLnByb3RvdHlwZS5hZGRSb29mcyA9IGZ1bmN0aW9uKHJvb2ZzKSB7XG4gIGZvciAobGV0IGkgaW4gcm9vZnMpIHtcbiAgICBsZXQgciA9IHJvb2ZzW2ldO1xuXG4gICAgaWYgKFxuICAgICAgci54IDwgMCB8fFxuICAgICAgci55IDwgMCB8fFxuICAgICAgci54ID49IHRoaXMudyB8fFxuICAgICAgci55ID49IHRoaXMuaCB8fFxuICAgICAgci54ICsgci53ID4gdGhpcy53IHx8XG4gICAgICByLnkgKyByLmggPiB0aGlzLmggfHxcbiAgICAgIHIuZGF0YS5sZW5ndGggIT0gci53ICogci5oXG4gICAgKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHIuaDsgeSsrKSB7XG4gICAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHIudzsgeCsrKSB7XG4gICAgICAgIGxldCB0aWxlSWR4ID0gKHIueSArIHkpICogdGhpcy53ICsgci54ICsgeDtcblxuICAgICAgICB0aGlzLm1hcFt0aWxlSWR4XS5yb29mID0gcjtcbiAgICAgICAgdGhpcy5tYXBbdGlsZUlkeF0ucm9vZlR5cGUgPSByLmRhdGFbeSAqIHIudyArIHhdO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuLy/lrprnvqnmlrnlkJFcbmxldCBkaXJlY3Rpb25zID0ge1xuICB1cDogMCxcbiAgcmlnaHQ6IDEsXG4gIGRvd246IDIsXG4gIGxlZnQ6IDNcbn07XG5cbi8v5a6a576p5oyJ6Y21XG5sZXQga2V5c0Rvd24gPSB7XG4gIDM3OiBmYWxzZSxcbiAgMzg6IGZhbHNlLFxuICAzOTogZmFsc2UsXG4gIDQwOiBmYWxzZSxcbiAgODA6IGZhbHNlXG59O1xuXG4vL1xubGV0IHZpZXdwb3J0ID0ge1xuICBzY3JlZW46IFswLCAwXSxcbiAgc3RhcnRUaWxlOiBbMCwgMF0sXG4gIGVuZFRpbGU6IFswLCAwXSxcbiAgb2Zmc2V0OiBbMCwgMF0sXG4gIHVwZGF0ZTogZnVuY3Rpb24ocHgsIHB5KSB7XG4gICAgdGhpcy5vZmZzZXRbMF0gPSBNYXRoLmZsb29yKHRoaXMuc2NyZWVuWzBdIC8gMiAtIHB4KTtcbiAgICB0aGlzLm9mZnNldFsxXSA9IE1hdGguZmxvb3IodGhpcy5zY3JlZW5bMV0gLyAyIC0gcHkpO1xuXG4gICAgbGV0IHRpbGUgPSBbTWF0aC5mbG9vcihweCAvIHRpbGVXaWR0aCksIE1hdGguZmxvb3IocHkgLyB0aWxlSGVpZ2h0KV07XG5cbiAgICB0aGlzLnN0YXJ0VGlsZVswXSA9IHRpbGVbMF0gLSAxIC0gTWF0aC5jZWlsKHRoaXMuc2NyZWVuWzBdIC8gMiAvIHRpbGVXaWR0aCk7XG4gICAgdGhpcy5zdGFydFRpbGVbMV0gPSB0aWxlWzFdIC0gMSAtIE1hdGguY2VpbCh0aGlzLnNjcmVlblsxXSAvIDIgLyB0aWxlSGVpZ2h0KTtcblxuICAgIGlmICh0aGlzLnN0YXJ0VGlsZVswXSA8IDApIHtcbiAgICAgIHRoaXMuc3RhcnRUaWxlWzBdID0gMDtcbiAgICB9XG4gICAgaWYgKHRoaXMuc3RhcnRUaWxlWzFdIDwgMCkge1xuICAgICAgdGhpcy5zdGFydFRpbGVbMV0gPSAwO1xuICAgIH1cblxuICAgIHRoaXMuZW5kVGlsZVswXSA9IHRpbGVbMF0gKyAxICsgTWF0aC5jZWlsKHRoaXMuc2NyZWVuWzBdIC8gMiAvIHRpbGVXaWR0aCk7XG4gICAgdGhpcy5lbmRUaWxlWzFdID0gdGlsZVsxXSArIDEgKyBNYXRoLmNlaWwodGhpcy5zY3JlZW5bMV0gLyAyIC8gdGlsZUhlaWdodCk7XG5cbiAgICBpZiAodGhpcy5lbmRUaWxlWzBdID49IG1hcFdpZHRoKSB7XG4gICAgICB0aGlzLmVuZFRpbGVbMF0gPSBtYXBXaWR0aCAtIDE7XG4gICAgfVxuICAgIGlmICh0aGlzLmVuZFRpbGVbMV0gPj0gbWFwSGVpZ2h0KSB7XG4gICAgICB0aGlzLmVuZFRpbGVbMV0gPSBtYXBIZWlnaHQgLSAxO1xuICAgIH1cbiAgfVxufTtcblxuLy/libXlu7rkuLvop5JcbmxldCBwbGF5ZXIgPSBuZXcgQ2hhcmFjdGVyKCk7XG5cbi8v5a6a576p6KeS6Imy5Ye95byPXG5mdW5jdGlvbiBDaGFyYWN0ZXIoKSB7XG4gIHRoaXMudGlsZUZyb20gPSBbMSwgMV07XG4gIHRoaXMudGlsZVRvID0gWzEsIDFdOyAvL+inkuiJsui1t+Wni+S9jee9ru+8iCDlnLDlnJbnm7jlsI3kvY3nva4g77yJXG4gIHRoaXMudGltZU1vdmVkID0gMDtcbiAgdGhpcy5kaW1lbnNpb25zID0gWzMwLCAzMF07IC8v6KeS6Imy5bC65a+4XG4gIHRoaXMucG9zaXRpb24gPSBbNDAgKiB0aGlzLnRpbGVUb1swXSArIDUsIDQwICogdGhpcy50aWxlVG9bMV0gKyA1XTtcblxuICAvL+WcsOW9ouenu+WLlemAn+eOh1xuICB0aGlzLmRlbGF5TW92ZSA9IHt9O1xuICB0aGlzLmRlbGF5TW92ZVtmbG9vclR5cGVzLnBhdGhdID0gNDAwOyAvL+aZrumAmumBk+i3r1xuICB0aGlzLmRlbGF5TW92ZVtmbG9vclR5cGVzLmdyYXNzXSA9IDQwMDsgLy/ojYnlnLBcbiAgdGhpcy5kZWxheU1vdmVbZmxvb3JUeXBlcy5pY2VdID0gMzAwOyAvL+mbquWcsFxuICB0aGlzLmRlbGF5TW92ZVtmbG9vclR5cGVzLmNvbnZleW9yVV0gPSAyMDA7IC8v6Ly46YCB5bi25LiKXG4gIHRoaXMuZGVsYXlNb3ZlW2Zsb29yVHlwZXMuY29udmV5b3JEXSA9IDIwMDsgLy/ovLjpgIHluLbkuItcbiAgdGhpcy5kZWxheU1vdmVbZmxvb3JUeXBlcy5jb252ZXlvckxdID0gMjAwOyAvL+i8uOmAgeW4tuW3plxuICB0aGlzLmRlbGF5TW92ZVtmbG9vclR5cGVzLmNvbnZleW9yUl0gPSAyMDA7IC8v6Ly46YCB5bi25Y+zXG5cbiAgLy/op5LoibLmlrnlkJFcbiAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb25zLmRvd247IC8v6aCQ6Kit5pa55ZCR5ZCR5LiKXG4gIHRoaXMuc3ByaXRlcyA9IHt9O1xuICB0aGlzLnNwcml0ZXNbZGlyZWN0aW9ucy51cF0gPSBuZXcgU3ByaXRlKFt7IHg6IDAsIHk6IDEyMCwgdzogMzAsIGg6IDMwIH1dKTtcbiAgdGhpcy5zcHJpdGVzW2RpcmVjdGlvbnMucmlnaHRdID0gbmV3IFNwcml0ZShbeyB4OiAwLCB5OiAxNTAsIHc6IDMwLCBoOiAzMCB9XSk7XG4gIHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLmRvd25dID0gbmV3IFNwcml0ZShbeyB4OiAwLCB5OiAxODAsIHc6IDMwLCBoOiAzMCB9XSk7XG4gIHRoaXMuc3ByaXRlc1tkaXJlY3Rpb25zLmxlZnRdID0gbmV3IFNwcml0ZShbeyB4OiAwLCB5OiAyMTAsIHc6IDMwLCBoOiAzMCB9XSk7XG5cbiAgLy/lrZjpgLLos4fmlpnluqtcbiAgdGhpcy5pbnZlbnRvcnkgPSBuZXcgSW52ZW50b3J5KDMpO1xufVxuXG5DaGFyYWN0ZXIucHJvdG90eXBlLnBsYWNlQXQgPSBmdW5jdGlvbih4LCB5KSB7XG4gIHRoaXMudGlsZUZyb20gPSBbeCwgeV07XG4gIHRoaXMudGlsZVRvID0gW3gsIHldO1xuICB0aGlzLnBvc2l0aW9uID0gW1xuICAgIHRpbGVXaWR0aCAqIHggKyAodGlsZVdpZHRoIC0gdGhpcy5kaW1lbnNpb25zWzBdKSAvIDIsXG4gICAgdGlsZUhlaWdodCAqIHkgKyAodGlsZUhlaWdodCAtIHRoaXMuZGltZW5zaW9uc1sxXSkgLyAyXG4gIF07XG59O1xuXG5DaGFyYWN0ZXIucHJvdG90eXBlLnByb2Nlc3NNb3ZlbWVudCA9IGZ1bmN0aW9uKHQpIHtcbiAgaWYgKFxuICAgIHRoaXMudGlsZUZyb21bMF0gPT0gdGhpcy50aWxlVG9bMF0gJiZcbiAgICB0aGlzLnRpbGVGcm9tWzFdID09IHRoaXMudGlsZVRvWzFdXG4gICkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBsZXQgbW92ZVNwZWVkID0gdGhpcy5kZWxheU1vdmVbXG4gICAgdGlsZVR5cGVzW3RpbGVNYXAubWFwW3RvSW5kZXgodGhpcy50aWxlRnJvbVswXSwgdGhpcy50aWxlRnJvbVsxXSldLnR5cGVdXG4gICAgICAuZmxvb3JcbiAgXTtcbiAgaWYgKHQgLSB0aGlzLnRpbWVNb3ZlZCA+PSBtb3ZlU3BlZWQpIHtcbiAgICB0aGlzLnBsYWNlQXQodGhpcy50aWxlVG9bMF0sIHRoaXMudGlsZVRvWzFdKTtcblxuICAgIGlmIChcbiAgICAgIHRpbGVNYXAubWFwW3RvSW5kZXgodGhpcy50aWxlVG9bMF0sIHRoaXMudGlsZVRvWzFdKV0uZXZlbnRFbnRlciAhPVxuICAgICAgbnVsbFxuICAgICkge1xuICAgICAgdGlsZU1hcC5tYXBbdG9JbmRleCh0aGlzLnRpbGVUb1swXSwgdGhpcy50aWxlVG9bMV0pXS5ldmVudEVudGVyKHRoaXMpO1xuICAgIH1cblxuICAgIGxldCB0aWxlRmxvb3IgPVxuICAgICAgdGlsZVR5cGVzW1xuICAgICAgICB0aWxlTWFwLm1hcFt0b0luZGV4KHRoaXMudGlsZUZyb21bMF0sIHRoaXMudGlsZUZyb21bMV0pXS50eXBlXG4gICAgICBdLmZsb29yO1xuXG4gICAgaWYgKHRpbGVGbG9vciA9PSBmbG9vclR5cGVzLmljZSkge1xuICAgICAgaWYgKHRoaXMuY2FuTW92ZURpcmVjdGlvbih0aGlzLmRpcmVjdGlvbikpIHtcbiAgICAgICAgdGhpcy5tb3ZlRGlyZWN0aW9uKHRoaXMuZGlyZWN0aW9uLCB0KTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRpbGVGbG9vciA9PSBmbG9vclR5cGVzLmNvbnZleW9yTCAmJiB0aGlzLmNhbk1vdmVMZWZ0KCkpIHtcbiAgICAgIHRoaXMubW92ZUxlZnQodCk7XG4gICAgfSBlbHNlIGlmICh0aWxlRmxvb3IgPT0gZmxvb3JUeXBlcy5jb252ZXlvclIgJiYgdGhpcy5jYW5Nb3ZlUmlnaHQoKSkge1xuICAgICAgdGhpcy5tb3ZlUmlnaHQodCk7XG4gICAgfSBlbHNlIGlmICh0aWxlRmxvb3IgPT0gZmxvb3JUeXBlcy5jb252ZXlvclUgJiYgdGhpcy5jYW5Nb3ZlVXAoKSkge1xuICAgICAgdGhpcy5tb3ZlVXAodCk7XG4gICAgfSBlbHNlIGlmICh0aWxlRmxvb3IgPT0gZmxvb3JUeXBlcy5jb252ZXlvckQgJiYgdGhpcy5jYW5Nb3ZlRG93bigpKSB7XG4gICAgICB0aGlzLm1vdmVEb3duKHQpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICB0aGlzLnBvc2l0aW9uWzBdID1cbiAgICAgIHRoaXMudGlsZUZyb21bMF0gKiB0aWxlV2lkdGggKyAodGlsZVdpZHRoIC0gdGhpcy5kaW1lbnNpb25zWzBdKSAvIDI7XG4gICAgdGhpcy5wb3NpdGlvblsxXSA9XG4gICAgICB0aGlzLnRpbGVGcm9tWzFdICogdGlsZUhlaWdodCArICh0aWxlSGVpZ2h0IC0gdGhpcy5kaW1lbnNpb25zWzFdKSAvIDI7XG5cbiAgICBpZiAodGhpcy50aWxlVG9bMF0gIT0gdGhpcy50aWxlRnJvbVswXSkge1xuICAgICAgbGV0IGRpZmYgPSAodGlsZVdpZHRoIC8gbW92ZVNwZWVkKSAqICh0IC0gdGhpcy50aW1lTW92ZWQpO1xuICAgICAgdGhpcy5wb3NpdGlvblswXSArPSB0aGlzLnRpbGVUb1swXSA8IHRoaXMudGlsZUZyb21bMF0gPyAwIC0gZGlmZiA6IGRpZmY7XG4gICAgfVxuICAgIGlmICh0aGlzLnRpbGVUb1sxXSAhPSB0aGlzLnRpbGVGcm9tWzFdKSB7XG4gICAgICBsZXQgZGlmZiA9ICh0aWxlSGVpZ2h0IC8gbW92ZVNwZWVkKSAqICh0IC0gdGhpcy50aW1lTW92ZWQpO1xuICAgICAgdGhpcy5wb3NpdGlvblsxXSArPSB0aGlzLnRpbGVUb1sxXSA8IHRoaXMudGlsZUZyb21bMV0gPyAwIC0gZGlmZiA6IGRpZmY7XG4gICAgfVxuXG4gICAgdGhpcy5wb3NpdGlvblswXSA9IE1hdGgucm91bmQodGhpcy5wb3NpdGlvblswXSk7XG4gICAgdGhpcy5wb3NpdGlvblsxXSA9IE1hdGgucm91bmQodGhpcy5wb3NpdGlvblsxXSk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG4vL+inkuiJsuaOp+WItlxuQ2hhcmFjdGVyLnByb3RvdHlwZS5jYW5Nb3ZlVG8gPSBmdW5jdGlvbih4LCB5KSB7XG4gIGlmICh4IDwgMCB8fCB4ID49IG1hcFdpZHRoIHx8IHkgPCAwIHx8IHkgPj0gbWFwSGVpZ2h0KSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChcbiAgICB0eXBlb2YgdGhpcy5kZWxheU1vdmVbXG4gICAgICB0aWxlVHlwZXNbdGlsZU1hcC5tYXBbdG9JbmRleCh4LCB5KV0udHlwZV0uZmxvb3JcbiAgICBdID09IFwidW5kZWZpbmVkXCJcbiAgKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh0aWxlTWFwLm1hcFt0b0luZGV4KHgsIHkpXS5vYmplY3QgIT0gbnVsbCkge1xuICAgIGxldCBvID0gdGlsZU1hcC5tYXBbdG9JbmRleCh4LCB5KV0ub2JqZWN0O1xuICAgIGlmIChvYmplY3RUeXBlc1tvLnR5cGVdLmNvbGxpc2lvbiA9PSBvYmplY3RDb2xsaXNpb24uc29saWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59O1xuXG5DaGFyYWN0ZXIucHJvdG90eXBlLmNhbk1vdmVVcCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5jYW5Nb3ZlVG8odGhpcy50aWxlRnJvbVswXSwgdGhpcy50aWxlRnJvbVsxXSAtIDEpO1xufTtcbkNoYXJhY3Rlci5wcm90b3R5cGUuY2FuTW92ZURvd24gPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuY2FuTW92ZVRvKHRoaXMudGlsZUZyb21bMF0sIHRoaXMudGlsZUZyb21bMV0gKyAxKTtcbn07XG5DaGFyYWN0ZXIucHJvdG90eXBlLmNhbk1vdmVMZWZ0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNhbk1vdmVUbyh0aGlzLnRpbGVGcm9tWzBdIC0gMSwgdGhpcy50aWxlRnJvbVsxXSk7XG59O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5jYW5Nb3ZlUmlnaHQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuY2FuTW92ZVRvKHRoaXMudGlsZUZyb21bMF0gKyAxLCB0aGlzLnRpbGVGcm9tWzFdKTtcbn07XG5DaGFyYWN0ZXIucHJvdG90eXBlLmNhbk1vdmVEaXJlY3Rpb24gPSBmdW5jdGlvbihkKSB7XG4gIHN3aXRjaCAoZCkge1xuICAgIGNhc2UgZGlyZWN0aW9ucy51cDpcbiAgICAgIHJldHVybiB0aGlzLmNhbk1vdmVVcCgpO1xuICAgIGNhc2UgZGlyZWN0aW9ucy5kb3duOlxuICAgICAgcmV0dXJuIHRoaXMuY2FuTW92ZURvd24oKTtcbiAgICBjYXNlIGRpcmVjdGlvbnMubGVmdDpcbiAgICAgIHJldHVybiB0aGlzLmNhbk1vdmVMZWZ0KCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0aGlzLmNhbk1vdmVSaWdodCgpO1xuICB9XG59O1xuXG5DaGFyYWN0ZXIucHJvdG90eXBlLm1vdmVMZWZ0ID0gZnVuY3Rpb24odCkge1xuICB0aGlzLnRpbGVUb1swXSAtPSAxO1xuICB0aGlzLnRpbWVNb3ZlZCA9IHQ7XG4gIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5sZWZ0O1xufTtcbkNoYXJhY3Rlci5wcm90b3R5cGUubW92ZVJpZ2h0ID0gZnVuY3Rpb24odCkge1xuICB0aGlzLnRpbGVUb1swXSArPSAxO1xuICB0aGlzLnRpbWVNb3ZlZCA9IHQ7XG4gIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9ucy5yaWdodDtcbn07XG5DaGFyYWN0ZXIucHJvdG90eXBlLm1vdmVVcCA9IGZ1bmN0aW9uKHQpIHtcbiAgdGhpcy50aWxlVG9bMV0gLT0gMTtcbiAgdGhpcy50aW1lTW92ZWQgPSB0O1xuICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMudXA7XG59O1xuQ2hhcmFjdGVyLnByb3RvdHlwZS5tb3ZlRG93biA9IGZ1bmN0aW9uKHQpIHtcbiAgdGhpcy50aWxlVG9bMV0gKz0gMTtcbiAgdGhpcy50aW1lTW92ZWQgPSB0O1xuICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbnMuZG93bjtcbn07XG5DaGFyYWN0ZXIucHJvdG90eXBlLm1vdmVEaXJlY3Rpb24gPSBmdW5jdGlvbihkLCB0KSB7XG4gIHN3aXRjaCAoZCkge1xuICAgIGNhc2UgZGlyZWN0aW9ucy51cDpcbiAgICAgIHJldHVybiB0aGlzLm1vdmVVcCh0KTtcbiAgICBjYXNlIGRpcmVjdGlvbnMuZG93bjpcbiAgICAgIHJldHVybiB0aGlzLm1vdmVEb3duKHQpO1xuICAgIGNhc2UgZGlyZWN0aW9ucy5sZWZ0OlxuICAgICAgcmV0dXJuIHRoaXMubW92ZUxlZnQodCk7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiB0aGlzLm1vdmVSaWdodCh0KTtcbiAgfVxufTtcbkNoYXJhY3Rlci5wcm90b3R5cGUucGlja1VwID0gZnVuY3Rpb24oKSB7XG4gIGlmIChcbiAgICB0aGlzLnRpbGVUb1swXSAhPSB0aGlzLnRpbGVGcm9tWzBdIHx8XG4gICAgdGhpcy50aWxlVG9bMV0gIT0gdGhpcy50aWxlRnJvbVsxXVxuICApIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBsZXQgaXMgPVxuICAgIHRpbGVNYXAubWFwW3RvSW5kZXgodGhpcy50aWxlRnJvbVswXSwgdGhpcy50aWxlRnJvbVsxXSldLml0ZW1TdGFjaztcblxuICBpZiAoaXMgIT0gbnVsbCkge1xuICAgIGxldCByZW1haW5zID0gdGhpcy5pbnZlbnRvcnkuYWRkSXRlbXMoaXMudHlwZSwgaXMucXR5KTtcblxuICAgIGlmIChyZW1haW5zKSB7XG4gICAgICBpcy5xdHkgPSByZW1haW5zO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aWxlTWFwLm1hcFtcbiAgICAgICAgdG9JbmRleCh0aGlzLnRpbGVGcm9tWzBdLCB0aGlzLnRpbGVGcm9tWzFdKVxuICAgICAgXS5pdGVtU3RhY2sgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gdG9JbmRleCh4LCB5KSB7XG4gIHJldHVybiB5ICogbWFwV2lkdGggKyB4O1xufVxuXG53aW5kb3cub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gIGN0eCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ2FtZVwiKS5nZXRDb250ZXh0KFwiMmRcIik7XG4gIHJlcXVlc3RBbmltYXRpb25GcmFtZShkcmF3R2FtZSk7XG4gIGN0eC5mb250ID0gXCJib2xkIDEwcHQgc2Fucy1zZXJpZlwiO1xuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwia2V5ZG93blwiLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA+PSAzNyAmJiBlLmtleUNvZGUgPD0gNDApIHtcbiAgICAgIGtleXNEb3duW2Uua2V5Q29kZV0gPSB0cnVlO1xuICAgIH1cbiAgICBpZiAoZS5rZXlDb2RlID09IDgwKSB7XG4gICAgICBrZXlzRG93bltlLmtleUNvZGVdID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImtleXVwXCIsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID49IDM3ICYmIGUua2V5Q29kZSA8PSA0MCkge1xuICAgICAga2V5c0Rvd25bZS5rZXlDb2RlXSA9IGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZS5rZXlDb2RlID09IDgzKSB7XG4gICAgICBjdXJyZW50U3BlZWQgPVxuICAgICAgICBjdXJyZW50U3BlZWQgPj0gZ2FtZVNwZWVkcy5sZW5ndGggLSAxID8gMCA6IGN1cnJlbnRTcGVlZCArIDE7XG4gICAgfVxuICAgIGlmIChlLmtleUNvZGUgPT0gODApIHtcbiAgICAgIGtleXNEb3duW2Uua2V5Q29kZV0gPSBmYWxzZTtcbiAgICB9XG4gIH0pO1xuXG4gIHZpZXdwb3J0LnNjcmVlbiA9IFtcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdhbWVcIikud2lkdGgsXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnYW1lXCIpLmhlaWdodFxuICBdO1xuXG4gIHRpbGVzZXQgPSBuZXcgSW1hZ2UoKTtcbiAgdGlsZXNldC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgY3R4ID0gbnVsbDtcbiAgICBhbGVydChcIkZhaWxlZCBsb2FkaW5nIHRpbGVzZXQuXCIpO1xuICB9O1xuICB0aWxlc2V0Lm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xuICAgIHRpbGVzZXRMb2FkZWQgPSB0cnVlO1xuICB9O1xuICB0aWxlc2V0LnNyYyA9IHRpbGVzZXRVUkw7XG5cbiAgdGlsZU1hcC5idWlsZE1hcEZyb21EYXRhKGdhbWVNYXAsIG1hcFdpZHRoLCBtYXBIZWlnaHQpO1xuICB0aWxlTWFwLmFkZFJvb2ZzKHJvb2ZMaXN0KTtcbiAgdGlsZU1hcC5tYXBbMiAqIG1hcFdpZHRoICsgMl0uZXZlbnRFbnRlciA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKFwiRW50ZXJlZCB0aWxlIDIsMlwiKTtcbiAgfTtcblxuICBsZXQgbW8xID0gbmV3IE1hcE9iamVjdCgxKTtcbiAgbW8xLnBsYWNlQXQoMiwgNCk7XG4gIGxldCBtbzIgPSBuZXcgTWFwT2JqZWN0KDIpO1xuICBtbzIucGxhY2VBdCgyLCAzKTtcblxuICBsZXQgbW8xMSA9IG5ldyBNYXBPYmplY3QoMSk7XG4gIG1vMTEucGxhY2VBdCg2LCA0KTtcbiAgbGV0IG1vMTIgPSBuZXcgTWFwT2JqZWN0KDIpO1xuICBtbzEyLnBsYWNlQXQoNywgNCk7XG5cbiAgbGV0IG1vNCA9IG5ldyBNYXBPYmplY3QoMyk7XG4gIG1vNC5wbGFjZUF0KDQsIDUpO1xuICBsZXQgbW81ID0gbmV3IE1hcE9iamVjdCgzKTtcbiAgbW81LnBsYWNlQXQoNCwgOCk7XG4gIGxldCBtbzYgPSBuZXcgTWFwT2JqZWN0KDMpO1xuICBtbzYucGxhY2VBdCg0LCAxMSk7XG5cbiAgbGV0IG1vNyA9IG5ldyBNYXBPYmplY3QoMyk7XG4gIG1vNy5wbGFjZUF0KDIsIDYpO1xuICBsZXQgbW84ID0gbmV3IE1hcE9iamVjdCgzKTtcbiAgbW84LnBsYWNlQXQoMiwgOSk7XG4gIGxldCBtbzkgPSBuZXcgTWFwT2JqZWN0KDMpO1xuICBtbzkucGxhY2VBdCgyLCAxMik7XG5cbiAgZm9yIChsZXQgaSA9IDM7IGkgPCA4OyBpKyspIHtcbiAgICBsZXQgcHMgPSBuZXcgUGxhY2VkSXRlbVN0YWNrKDEsIDEpO1xuICAgIHBzLnBsYWNlQXQoaSwgMSk7XG4gIH1cbiAgZm9yIChsZXQgaSA9IDM7IGkgPCA4OyBpKyspIHtcbiAgICBsZXQgcHMgPSBuZXcgUGxhY2VkSXRlbVN0YWNrKDEsIDEpO1xuICAgIHBzLnBsYWNlQXQoMywgaSk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIGRyYXdHYW1lKCkge1xuICBpZiAoY3R4ID09IG51bGwpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKCF0aWxlc2V0TG9hZGVkKSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBsZXQgY3VycmVudEZyYW1lVGltZSA9IERhdGUubm93KCk7XG4gIGxldCB0aW1lRWxhcHNlZCA9IGN1cnJlbnRGcmFtZVRpbWUgLSBsYXN0RnJhbWVUaW1lO1xuICBnYW1lVGltZSArPSBNYXRoLmZsb29yKHRpbWVFbGFwc2VkICogZ2FtZVNwZWVkc1tjdXJyZW50U3BlZWRdLm11bHQpO1xuXG4gIGxldCBzZWMgPSBNYXRoLmZsb29yKERhdGUubm93KCkgLyAxMDAwKTtcbiAgaWYgKHNlYyAhPSBjdXJyZW50U2Vjb25kKSB7XG4gICAgY3VycmVudFNlY29uZCA9IHNlYztcbiAgICBmcmFtZXNMYXN0U2Vjb25kID0gZnJhbWVDb3VudDtcbiAgICBmcmFtZUNvdW50ID0gMTtcbiAgfSBlbHNlIHtcbiAgICBmcmFtZUNvdW50Kys7XG4gIH1cblxuICBpZiAoIXBsYXllci5wcm9jZXNzTW92ZW1lbnQoZ2FtZVRpbWUpICYmIGdhbWVTcGVlZHNbY3VycmVudFNwZWVkXS5tdWx0ICE9IDApIHtcbiAgICBpZiAoa2V5c0Rvd25bMzhdICYmIHBsYXllci5jYW5Nb3ZlVXAoKSkge1xuICAgICAgcGxheWVyLm1vdmVVcChnYW1lVGltZSk7XG4gICAgfSBlbHNlIGlmIChrZXlzRG93bls0MF0gJiYgcGxheWVyLmNhbk1vdmVEb3duKCkpIHtcbiAgICAgIHBsYXllci5tb3ZlRG93bihnYW1lVGltZSk7XG4gICAgfSBlbHNlIGlmIChrZXlzRG93blszN10gJiYgcGxheWVyLmNhbk1vdmVMZWZ0KCkpIHtcbiAgICAgIHBsYXllci5tb3ZlTGVmdChnYW1lVGltZSk7XG4gICAgfSBlbHNlIGlmIChrZXlzRG93blszOV0gJiYgcGxheWVyLmNhbk1vdmVSaWdodCgpKSB7XG4gICAgICBwbGF5ZXIubW92ZVJpZ2h0KGdhbWVUaW1lKTtcbiAgICB9IGVsc2UgaWYgKGtleXNEb3duWzgwXSkge1xuICAgICAgcGxheWVyLnBpY2tVcCgpO1xuICAgIH1cbiAgfVxuXG4gIHZpZXdwb3J0LnVwZGF0ZShcbiAgICBwbGF5ZXIucG9zaXRpb25bMF0gKyBwbGF5ZXIuZGltZW5zaW9uc1swXSAvIDIsXG4gICAgcGxheWVyLnBvc2l0aW9uWzFdICsgcGxheWVyLmRpbWVuc2lvbnNbMV0gLyAyXG4gICk7XG5cbiAgbGV0IHBsYXllclJvb2YxID1cbiAgICB0aWxlTWFwLm1hcFt0b0luZGV4KHBsYXllci50aWxlRnJvbVswXSwgcGxheWVyLnRpbGVGcm9tWzFdKV0ucm9vZjtcbiAgbGV0IHBsYXllclJvb2YyID1cbiAgICB0aWxlTWFwLm1hcFt0b0luZGV4KHBsYXllci50aWxlVG9bMF0sIHBsYXllci50aWxlVG9bMV0pXS5yb29mO1xuXG4gIGN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgY3R4LmZpbGxSZWN0KDAsIDAsIHZpZXdwb3J0LnNjcmVlblswXSwgdmlld3BvcnQuc2NyZWVuWzFdKTtcblxuICBmb3IgKGxldCB6ID0gMDsgeiA8IHRpbGVNYXAubGV2ZWxzOyB6KyspIHtcbiAgICBmb3IgKGxldCB5ID0gdmlld3BvcnQuc3RhcnRUaWxlWzFdOyB5IDw9IHZpZXdwb3J0LmVuZFRpbGVbMV07ICsreSkge1xuICAgICAgZm9yIChsZXQgeCA9IHZpZXdwb3J0LnN0YXJ0VGlsZVswXTsgeCA8PSB2aWV3cG9ydC5lbmRUaWxlWzBdOyArK3gpIHtcbiAgICAgICAgaWYgKHogPT0gMCkge1xuICAgICAgICAgIHRpbGVUeXBlc1t0aWxlTWFwLm1hcFt0b0luZGV4KHgsIHkpXS50eXBlXS5zcHJpdGUuZHJhdyhcbiAgICAgICAgICAgIGdhbWVUaW1lLFxuICAgICAgICAgICAgdmlld3BvcnQub2Zmc2V0WzBdICsgeCAqIHRpbGVXaWR0aCxcbiAgICAgICAgICAgIHZpZXdwb3J0Lm9mZnNldFsxXSArIHkgKiB0aWxlSGVpZ2h0XG4gICAgICAgICAgKTtcbiAgICAgICAgfSBlbHNlIGlmICh6ID09IDEpIHtcbiAgICAgICAgICBsZXQgaXMgPSB0aWxlTWFwLm1hcFt0b0luZGV4KHgsIHkpXS5pdGVtU3RhY2s7XG4gICAgICAgICAgaWYgKGlzICE9IG51bGwpIHtcbiAgICAgICAgICAgIGl0ZW1UeXBlc1tpcy50eXBlXS5zcHJpdGUuZHJhdyhcbiAgICAgICAgICAgICAgZ2FtZVRpbWUsXG4gICAgICAgICAgICAgIHZpZXdwb3J0Lm9mZnNldFswXSArIHggKiB0aWxlV2lkdGggKyBpdGVtVHlwZXNbaXMudHlwZV0ub2Zmc2V0WzBdLFxuICAgICAgICAgICAgICB2aWV3cG9ydC5vZmZzZXRbMV0gKyB5ICogdGlsZUhlaWdodCArIGl0ZW1UeXBlc1tpcy50eXBlXS5vZmZzZXRbMV1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG8gPSB0aWxlTWFwLm1hcFt0b0luZGV4KHgsIHkpXS5vYmplY3Q7XG4gICAgICAgIGlmIChvICE9IG51bGwgJiYgb2JqZWN0VHlwZXNbby50eXBlXS56SW5kZXggPT0geikge1xuICAgICAgICAgIGxldCBvdCA9IG9iamVjdFR5cGVzW28udHlwZV07XG5cbiAgICAgICAgICBvdC5zcHJpdGUuZHJhdyhcbiAgICAgICAgICAgIGdhbWVUaW1lLFxuICAgICAgICAgICAgdmlld3BvcnQub2Zmc2V0WzBdICsgeCAqIHRpbGVXaWR0aCArIG90Lm9mZnNldFswXSxcbiAgICAgICAgICAgIHZpZXdwb3J0Lm9mZnNldFsxXSArIHkgKiB0aWxlSGVpZ2h0ICsgb3Qub2Zmc2V0WzFdXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB6ID09IDIgJiZcbiAgICAgICAgICB0aWxlTWFwLm1hcFt0b0luZGV4KHgsIHkpXS5yb29mVHlwZSAhPSAwICYmXG4gICAgICAgICAgdGlsZU1hcC5tYXBbdG9JbmRleCh4LCB5KV0ucm9vZiAhPSBwbGF5ZXJSb29mMSAmJlxuICAgICAgICAgIHRpbGVNYXAubWFwW3RvSW5kZXgoeCwgeSldLnJvb2YgIT0gcGxheWVyUm9vZjJcbiAgICAgICAgKSB7XG4gICAgICAgICAgdGlsZVR5cGVzW3RpbGVNYXAubWFwW3RvSW5kZXgoeCwgeSldLnJvb2ZUeXBlXS5zcHJpdGUuZHJhdyhcbiAgICAgICAgICAgIGdhbWVUaW1lLFxuICAgICAgICAgICAgdmlld3BvcnQub2Zmc2V0WzBdICsgeCAqIHRpbGVXaWR0aCxcbiAgICAgICAgICAgIHZpZXdwb3J0Lm9mZnNldFsxXSArIHkgKiB0aWxlSGVpZ2h0XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh6ID09IDEpIHtcbiAgICAgIHBsYXllci5zcHJpdGVzW3BsYXllci5kaXJlY3Rpb25dLmRyYXcoXG4gICAgICAgIGdhbWVUaW1lLFxuICAgICAgICB2aWV3cG9ydC5vZmZzZXRbMF0gKyBwbGF5ZXIucG9zaXRpb25bMF0sXG4gICAgICAgIHZpZXdwb3J0Lm9mZnNldFsxXSArIHBsYXllci5wb3NpdGlvblsxXVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjdHgudGV4dEFsaWduID0gXCJyaWdodFwiO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcGxheWVyLmludmVudG9yeS5zcGFjZXM7IGkrKykge1xuICAgIGN0eC5maWxsU3R5bGUgPSBcIiNkZGNjYWFcIjtcbiAgICBjdHguZmlsbFJlY3QoMTAgKyBpICogNTAsIDM1MCwgNDAsIDQwKTtcblxuICAgIGlmICh0eXBlb2YgcGxheWVyLmludmVudG9yeS5zdGFja3NbaV0gIT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgbGV0IGl0ID0gaXRlbVR5cGVzW3BsYXllci5pbnZlbnRvcnkuc3RhY2tzW2ldLnR5cGVdO1xuXG4gICAgICBpdC5zcHJpdGUuZHJhdyhnYW1lVGltZSwgMTAgKyBpICogNTAgKyBpdC5vZmZzZXRbMF0sIDM1MCArIGl0Lm9mZnNldFsxXSk7XG5cbiAgICAgIGlmIChwbGF5ZXIuaW52ZW50b3J5LnN0YWNrc1tpXS5xdHkgPiAxKSB7XG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMDAwMDBcIjtcbiAgICAgICAgY3R4LmZpbGxUZXh0KFxuICAgICAgICAgIFwiXCIgKyBwbGF5ZXIuaW52ZW50b3J5LnN0YWNrc1tpXS5xdHksXG4gICAgICAgICAgMTAgKyBpICogNTAgKyAzOCxcbiAgICAgICAgICAzNTAgKyAzOFxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjdHgudGV4dEFsaWduID0gXCJsZWZ0XCI7XG5cbiAgY3R4LmZpbGxTdHlsZSA9IFwiI2ZmMDAwMFwiO1xuICBjdHguZmlsbFRleHQoXCJGUFM6IFwiICsgZnJhbWVzTGFzdFNlY29uZCwgMTAsIDIwKTtcbiAgY3R4LmZpbGxUZXh0KFwiR2FtZSBzcGVlZDogXCIgKyBnYW1lU3BlZWRzW2N1cnJlbnRTcGVlZF0ubmFtZSwgMTAsIDQwKTtcblxuICBsYXN0RnJhbWVUaW1lID0gY3VycmVudEZyYW1lVGltZTtcbiAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGRyYXdHYW1lKTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiJdLCJzb3VyY2VSb290IjoiIn0=