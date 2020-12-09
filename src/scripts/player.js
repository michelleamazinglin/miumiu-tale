
//定義方向
let directions = {
  up: 0,
  right: 1,
  down: 2,
  left: 3
};

//定義按鍵
let keysDown = {
  37: false,
  38: false,
  39: false,
  40: false,
  80: false
};

//
let viewport = {
  screen: [0, 0],
  startTile: [0, 0],
  endTile: [0, 0],
  offset: [0, 0],
  update: function(px, py) {
    this.offset[0] = Math.floor(this.screen[0] / 2 - px);
    this.offset[1] = Math.floor(this.screen[1] / 2 - py);

    let tile = [Math.floor(px / tileWidth), Math.floor(py / tileHeight)];

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
};

//創建主角
let player = new Character();

//定義角色函式
function Character() {
  this.tileFrom = [1, 1];
  this.tileTo = [1, 1]; //角色起始位置（ 地圖相對位置 ）
  this.timeMoved = 0;
  this.dimensions = [30, 30]; //角色尺寸
  this.position = [40 * this.tileTo[0] + 5, 40 * this.tileTo[1] + 5];

  //地形移動速率
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
  this.sprites[directions.up] = new Sprite([{ x: 0, y: 120, w: 30, h: 30 }]);
  this.sprites[directions.right] = new Sprite([{ x: 0, y: 150, w: 30, h: 30 }]);
  this.sprites[directions.down] = new Sprite([{ x: 0, y: 180, w: 30, h: 30 }]);
  this.sprites[directions.left] = new Sprite([{ x: 0, y: 210, w: 30, h: 30 }]);

  //存進資料庫
  this.inventory = new Inventory(3);
}

Character.prototype.placeAt = function(x, y) {
  this.tileFrom = [x, y];
  this.tileTo = [x, y];
  this.position = [
    tileWidth * x + (tileWidth - this.dimensions[0]) / 2,
    tileHeight * y + (tileHeight - this.dimensions[1]) / 2
  ];
};

Character.prototype.processMovement = function(t) {
  if (
    this.tileFrom[0] == this.tileTo[0] &&
    this.tileFrom[1] == this.tileTo[1]
  ) {
    return false;
  }
  let moveSpeed = this.delayMove[
    tileTypes[tileMap.map[toIndex(this.tileFrom[0], this.tileFrom[1])].type]
      .floor
  ];
  if (t - this.timeMoved >= moveSpeed) {
    this.placeAt(this.tileTo[0], this.tileTo[1]);

    if (
      tileMap.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter !=
      null
    ) {
      tileMap.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter(this);
    }

    let tileFloor =
      tileTypes[
        tileMap.map[toIndex(this.tileFrom[0], this.tileFrom[1])].type
      ].floor;

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
    this.position[0] =
      this.tileFrom[0] * tileWidth + (tileWidth - this.dimensions[0]) / 2;
    this.position[1] =
      this.tileFrom[1] * tileHeight + (tileHeight - this.dimensions[1]) / 2;

    if (this.tileTo[0] != this.tileFrom[0]) {
      let diff = (tileWidth / moveSpeed) * (t - this.timeMoved);
      this.position[0] += this.tileTo[0] < this.tileFrom[0] ? 0 - diff : diff;
    }
    if (this.tileTo[1] != this.tileFrom[1]) {
      let diff = (tileHeight / moveSpeed) * (t - this.timeMoved);
      this.position[1] += this.tileTo[1] < this.tileFrom[1] ? 0 - diff : diff;
    }

    this.position[0] = Math.round(this.position[0]);
    this.position[1] = Math.round(this.position[1]);
  }

  return true;
};
//角色控制
Character.prototype.canMoveTo = function(x, y) {
  if (x < 0 || x >= mapWidth || y < 0 || y >= mapHeight) {
    return false;
  }
  if (
    typeof this.delayMove[
      tileTypes[tileMap.map[toIndex(x, y)].type].floor
    ] == "undefined"
  ) {
    return false;
  }
  if (tileMap.map[toIndex(x, y)].object != null) {
    let o = tileMap.map[toIndex(x, y)].object;
    if (objectTypes[o.type].collision == objectCollision.solid) {
      return false;
    }
  }
  return true;
};

Character.prototype.canMoveUp = function() {
  return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] - 1);
};
Character.prototype.canMoveDown = function() {
  return this.canMoveTo(this.tileFrom[0], this.tileFrom[1] + 1);
};
Character.prototype.canMoveLeft = function() {
  return this.canMoveTo(this.tileFrom[0] - 1, this.tileFrom[1]);
};
Character.prototype.canMoveRight = function() {
  return this.canMoveTo(this.tileFrom[0] + 1, this.tileFrom[1]);
};
Character.prototype.canMoveDirection = function(d) {
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

Character.prototype.moveLeft = function(t) {
  this.tileTo[0] -= 1;
  this.timeMoved = t;
  this.direction = directions.left;
};
Character.prototype.moveRight = function(t) {
  this.tileTo[0] += 1;
  this.timeMoved = t;
  this.direction = directions.right;
};
Character.prototype.moveUp = function(t) {
  this.tileTo[1] -= 1;
  this.timeMoved = t;
  this.direction = directions.up;
};
Character.prototype.moveDown = function(t) {
  this.tileTo[1] += 1;
  this.timeMoved = t;
  this.direction = directions.down;
};
Character.prototype.moveDirection = function(d, t) {
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
Character.prototype.pickUp = function() {
  if (
    this.tileTo[0] != this.tileFrom[0] ||
    this.tileTo[1] != this.tileFrom[1]
  ) {
    return false;
  }

  let is =
    tileMap.map[toIndex(this.tileFrom[0], this.tileFrom[1])].itemStack;

  if (is != null) {
    let remains = this.inventory.addItems(is.type, is.qty);

    if (remains) {
      is.qty = remains;
    } else {
      tileMap.map[
        toIndex(this.tileFrom[0], this.tileFrom[1])
      ].itemStack = null;
    }
  }

  return true;
};

function toIndex(x, y) {
  return y * mapWidth + x;
}

window.onload = function() {
  ctx = document.getElementById("game").getContext("2d");
  requestAnimationFrame(drawGame);
  ctx.font = "bold 10pt sans-serif";

  window.addEventListener("keydown", function(e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      keysDown[e.keyCode] = true;
    }
    if (e.keyCode == 80) {
      keysDown[e.keyCode] = true;
    }
  });
  window.addEventListener("keyup", function(e) {
    if (e.keyCode >= 37 && e.keyCode <= 40) {
      keysDown[e.keyCode] = false;
    }
    if (e.keyCode == 83) {
      currentSpeed =
        currentSpeed >= gameSpeeds.length - 1 ? 0 : currentSpeed + 1;
    }
    if (e.keyCode == 80) {
      keysDown[e.keyCode] = false;
    }
  });

  viewport.screen = [
    document.getElementById("game").width,
    document.getElementById("game").height
  ];

  tileset = new Image();
  tileset.onerror = function() {
    ctx = null;
    alert("Failed loading tileset.");
  };
  tileset.onload = function() {
    tilesetLoaded = true;
  };
  tileset.src = tilesetURL;

  tileMap.buildMapFromData(gameMap, mapWidth, mapHeight);
  tileMap.addRoofs(roofList);
  tileMap.map[2 * mapWidth + 2].eventEnter = function() {
    console.log("Entered tile 2,2");
  };

  let mo1 = new MapObject(1);
  mo1.placeAt(2, 4);
  let mo2 = new MapObject(2);
  mo2.placeAt(2, 3);

  let mo11 = new MapObject(1);
  mo11.placeAt(6, 4);
  let mo12 = new MapObject(2);
  mo12.placeAt(7, 4);

  let mo4 = new MapObject(3);
  mo4.placeAt(4, 5);
  let mo5 = new MapObject(3);
  mo5.placeAt(4, 8);
  let mo6 = new MapObject(3);
  mo6.placeAt(4, 11);

  let mo7 = new MapObject(3);
  mo7.placeAt(2, 6);
  let mo8 = new MapObject(3);
  mo8.placeAt(2, 9);
  let mo9 = new MapObject(3);
  mo9.placeAt(2, 12);

  for (let i = 3; i < 8; i++) {
    let ps = new PlacedItemStack(1, 1);
    ps.placeAt(i, 1);
  }
  for (let i = 3; i < 8; i++) {
    let ps = new PlacedItemStack(1, 1);
    ps.placeAt(3, i);
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

  let currentFrameTime = Date.now();
  let timeElapsed = currentFrameTime - lastFrameTime;
  gameTime += Math.floor(timeElapsed * gameSpeeds[currentSpeed].mult);

  let sec = Math.floor(Date.now() / 1000);
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

  viewport.update(
    player.position[0] + player.dimensions[0] / 2,
    player.position[1] + player.dimensions[1] / 2
  );

  let playerRoof1 =
    tileMap.map[toIndex(player.tileFrom[0], player.tileFrom[1])].roof;
  let playerRoof2 =
    tileMap.map[toIndex(player.tileTo[0], player.tileTo[1])].roof;

  ctx.fillStyle = "#000000";
  ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);

  for (let z = 0; z < tileMap.levels; z++) {
    for (let y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y) {
      for (let x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x) {
        if (z == 0) {
          tileTypes[tileMap.map[toIndex(x, y)].type].sprite.draw(
            gameTime,
            viewport.offset[0] + x * tileWidth,
            viewport.offset[1] + y * tileHeight
          );
        } else if (z == 1) {
          let is = tileMap.map[toIndex(x, y)].itemStack;
          if (is != null) {
            itemTypes[is.type].sprite.draw(
              gameTime,
              viewport.offset[0] + x * tileWidth + itemTypes[is.type].offset[0],
              viewport.offset[1] + y * tileHeight + itemTypes[is.type].offset[1]
            );
          }
        }

        let o = tileMap.map[toIndex(x, y)].object;
        if (o != null && objectTypes[o.type].zIndex == z) {
          let ot = objectTypes[o.type];

          ot.sprite.draw(
            gameTime,
            viewport.offset[0] + x * tileWidth + ot.offset[0],
            viewport.offset[1] + y * tileHeight + ot.offset[1]
          );
        }

        if (
          z == 2 &&
          tileMap.map[toIndex(x, y)].roofType != 0 &&
          tileMap.map[toIndex(x, y)].roof != playerRoof1 &&
          tileMap.map[toIndex(x, y)].roof != playerRoof2
        ) {
          tileTypes[tileMap.map[toIndex(x, y)].roofType].sprite.draw(
            gameTime,
            viewport.offset[0] + x * tileWidth,
            viewport.offset[1] + y * tileHeight
          );
        }
      }
    }

    if (z == 1) {
      player.sprites[player.direction].draw(
        gameTime,
        viewport.offset[0] + player.position[0],
        viewport.offset[1] + player.position[1]
      );
    }
  }

  ctx.textAlign = "right";

  for (let i = 0; i < player.inventory.spaces; i++) {
    ctx.fillStyle = "#ddccaa";
    ctx.fillRect(10 + i * 50, 350, 40, 40);

    if (typeof player.inventory.stacks[i] != "undefined") {
      let it = itemTypes[player.inventory.stacks[i].type];

      it.sprite.draw(gameTime, 10 + i * 50 + it.offset[0], 350 + it.offset[1]);

      if (player.inventory.stacks[i].qty > 1) {
        ctx.fillStyle = "#000000";
        ctx.fillText(
          "" + player.inventory.stacks[i].qty,
          10 + i * 50 + 38,
          350 + 38
        );
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
