// i want a camera following the char around the map


let ctx = null;

// create a map with 10*10 tile
let gameMap = [
	4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 0, 0, 0, 0, 0, 6, 5, 5, 7, 0, 26, 25, 25, 25, 25, 25, 27, 0, 0, 0, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 29, 28, 28, 28, 28, 28, 30, 2, 2, 0, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 29, 28, 28, 28, 28, 28, 30, 2, 2, 0, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 21, 20, 20, 22, 1, 29, 28, 28, 28, 28, 28, 30, 2, 2, 0, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 16, 20, 16, 18, 1, 16, 18, 16, 19, 28, 18, 18, 2, 2, 0, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 2, 2, 0, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 31, 32, 33, 34, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 35, 36, 37, 38, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4,
    4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 39, 40, 41, 42, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 16, 36, 16, 18, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 0, 8, 8, 8, 8, 8, 9, 8, 8, 8, 8, 8, 8, 8, 9, 8, 8, 8, 8, 0, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 0, 8, 8, 8, 8, 8, 8, 8, 8, 9, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 0, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 8, 0, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
];

// 每个地砖多少pixel
let tileWidth = 40;
let tileHeight = 40;
// 地图大小就是20*20
let mapWidth = 30;
let mapHeight = 30;
// framerate
let currentSecond = 0;
let frameCount = 0;
let framesLastSecond = 0;
let lastFrameTime = 0;


// keyCode : boolean to tell us which one are pressed
let heldKeys = {
    // 37: left
    65 : false,
    // 38: up
    87 : false,
    // 39: right
    68 : false,
    // 40: down
    83 : false,
	// 32: space
	80 : false
};

let directions = {
	up	: 0,
	right: 1,
	down: 2,
	left: 3
};


// 地板种类
let floorTypes = {
    solid: 0,
    path: 1,
    ocean: 2
};

// 数字（gameMap）对应上颜色和地板种类
// 0:墙壁 1:草地 2:陆地  4: 水  
// 5:黄色内部墙壁 6: 黄色内部墙壁左角 7:黄色内部墙壁右角
// 8: 沙滩 9:沙滩2
// 20:黄色内部地板 21:黄色内部墙左 22:黄色内部墙右
// 25:棕色内部墙壁 26:棕色内部墙壁左角 27: 棕色内部墙壁右角
// 28: 棕色内部地板 29: 棕色内部墙左 30:棕色内部墙右
// 10-19 房子外观
// 31-42 miumiu room
let tileTypes = {
	0 : { color: "#793d4c", floor: floorTypes.solid, sprite:[{x:0,y:0,w:40,h:40}] },
	1 : { color: "#6df7b1", floor: floorTypes.path, sprite:[{x:40,y:0,w:40,h:40}] },
	2 : { color: "#c97461", floor: floorTypes.path, sprite:[{x:80,y:0,w:40,h:40}]	},
    4 : { color: "#008df0", floor: floorTypes.ocean, sprite:[{x:160,y:0,w:40,h:40}] },
    5 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:120,y:0,w:40,h:40}] },
    6 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:120,y:40,w:40,h:40}] },
    7 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:80,y:40,w:40,h:40}] },
    8 : { color: "#d77c4b", floor: floorTypes.path, sprite:[{x:200,y:0,w:40,h:40}] },
    9 : { color: "#d77c4b", floor: floorTypes.path, sprite:[{x:200,y:40,w:40,h:40}] },

	
    10 : { color:"#ccaa00", floor:floorTypes.solid, sprite:[{x:240,y:40,w:40,h:40}]},
    11 : { color:"#ccaa00", floor:floorTypes.solid, sprite:[{x:280,y:40,w:40,h:40}]},
    12 : { color:"#ccaa00", floor:floorTypes.solid, sprite:[{x:320,y:40,w:40,h:40}]},
    13 : { color:"#ccaa00", floor:floorTypes.solid, sprite:[{x:240,y:80,w:40,h:40}]},
    14 : { color:"#ccaa00", floor:floorTypes.solid, sprite:[{x:280,y:80,w:40,h:40}]},
    15 : { color:"#ccaa00", floor:floorTypes.solid, sprite:[{x:320,y:80,w:40,h:40}]},
    16 : { color:"#ccaa00", floor:floorTypes.solid, sprite:[{x:240,y:120,w:40,h:40}]},
    17 : { color:"#ccaa00", floor:floorTypes.solid, sprite:[{x:280,y:120,w:40,h:40}]},
    18 : { color:"#ccaa00", floor:floorTypes.solid, sprite:[{x:320,y:120,w:40,h:40}]},
    19 : { color:"#ccaa00", floor:floorTypes.solid, sprite:[{x:360,y:120,w:40,h:40}]},
    
    20 : { color: "#d77c4b", floor: floorTypes.path, sprite:[{x:40,y:40,w:40,h:40}]},
    21 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:80,y:80,w:40,h:40}]},
    22 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:120,y:80,w:40,h:40}]},

    25 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:320,y:160,w:40,h:40}]},
    26 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:240,y:160,w:40,h:40}]},
    27 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:280,y:160,w:40,h:40}]},
    28 : { color: "#d77c4b", floor: floorTypes.path, sprite:[{x:280,y:200,w:40,h:40}]},
    29 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:360,y:160,w:40,h:40}]},
    30 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:240,y:200,w:40,h:40}]},

    31 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:320,y:200,w:40,h:40}]},
    32 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:360,y:200,w:40,h:40}]},
    33 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:400,y:200,w:40,h:40}]},
    34 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:440,y:200,w:40,h:40}]},
    35 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:320,y:240,w:40,h:40}]},
    36 : { color: "#d77c4b", floor: floorTypes.path, sprite:[{x:360,y:240,w:40,h:40}]},
    37 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:400,y:240,w:40,h:40}]},
    38 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:440,y:240,w:40,h:40}]},
    39 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:320,y:280,w:40,h:40}]},
    40 : { color: "#d77c4b", floor: floorTypes.path, sprite:[{x:360,y:280,w:40,h:40}]},
    41 : { color: "#d77c4b", floor: floorTypes.path, sprite:[{x:400,y:280,w:40,h:40}]},
    42 : { color: "#d77c4b", floor: floorTypes.solid, sprite:[{x:440,y:280,w:40,h:40}]},


    
};

let collisions = {
	none		: 0,
	solid		: 1
};

let objectTypes = {
	1 : {
		name : "Flower",
		sprite : [{x:40,y:180,w:40,h:20}],
		offset : [0,0],
		collision : collisions.none,
		zIndex : 1
	},
	2 : {
		name : "fence",
		sprite : [{x:40,y:200,w:40,h:40}],
		offset : [0,0],
		collision : collisions.solid,
		zIndex : 1
	},
	3 : {
		name : "Tree",
		sprite : [{x:80,y:160,w:80,h:80}],
		offset : [-20,-20],
		collision : collisions.solid,
		zIndex : 3
    },
    4 : {
		name : "mashrooms",
		sprite : [{x:40,y:160,w:40,h:20}],
		offset : [0,0],
		collision : collisions.none,
		zIndex : 1
    },
    5 : {
		name : "Pig Shop",
		sprite : [{x:160,y:160,w:80,h:80}],
		offset : [-20,-20],
		collision : collisions.solid,
		zIndex : 3
    },
    6 : {
		name : "donuts",
		sprite : [{x:360,y:0,w:80,h:115}],
		offset : [0,0],
		collision : collisions.none,
		zIndex : 1
    },
    7 : {
		name : "cooking",
		sprite : [{x:160,y:80,w:80,h:80}],
		offset : [0,0],
		collision : collisions.none,
		zIndex : 1
    },
    8 : {
		name : "carpet",
		sprite : [{x:0,y:80,w:80,h:40}],
		offset : [0,0],
		collision : collisions.none,
		zIndex : 1
    },
    9 : {
		name : "desk",
		sprite : [{x:0,y:40,w:40,h:40}],
		offset : [0,0],
		collision : collisions.solid,
		zIndex : 1
    },
    10 : {
		name : "chair",
		sprite : [{x:320,y:0,w:40,h:40}],
		offset : [0,0],
		collision : collisions.solid,
		zIndex : 1
    },
    11 : {
		name : "Tree Plant",
		sprite : [{x:40,y:120,w:40,h:40}],
		offset : [0,0],
		collision : collisions.solid,
		zIndex : 1
    },
    12 : {
		name : "drum",
		sprite : [{x:0,y:240,w:80,h:40}],
		offset : [0,0],
		collision : collisions.solid,
		zIndex : 1
    },
    13 : {
		name : "instruments",
		sprite : [{x:80,y:240,w:120,h:80}],
		offset : [0,0],
		collision : collisions.solid,
		zIndex : 1
    },
    14 : {
		name : "BookShelf",
		sprite : [{x:200,y:240,w:40,h:40}],
		offset : [0,0],
		collision : collisions.solid,
		zIndex : 1
    },
    15 : {
		name : "saxophone",
		sprite : [{x:240,y:240,w:40,h:40}],
		offset : [0,0],
		collision : collisions.solid,
		zIndex : 1
    },
    16 : {
		name : "Right Facing Chair",
		sprite : [{x:200,y:280,w:40,h:40}],
		offset : [0,0],
		collision : collisions.solid,
		zIndex : 1
	},
	17 : {
		name : "coconut tree",
		sprite : [{x:440,y:0,w:80,h:80}],
		offset : [-20,-20],
		collision : collisions.solid,
		zIndex : 1
    },
};


// 物品
let itemTypes = {
    1 : {
		name : "coconut",
		maxStack : 5,
		sprite : [{x:240,y:0,w:40,h:40}],
		offset : [0,0]
    },
    2 : {
		name : "strawberry",
		maxStack : 5,
		sprite : [{x:280,y:0,w:40,h:40}],
		offset : [0,0]
	}
};

function Stack(id, qty)
{
	this.type = id;
	this.qty = qty;
}

function Inventory(s)
{
	this.spaces		= s;
	this.stacks		= [];
}

Inventory.prototype.addItems = function(id, qty)
{
	for(let i = 0; i < this.spaces; i++)
	{ 
		if(this.stacks.length <= i)
		{
			let maxHere = (qty > itemTypes[id].maxStack ?
				itemTypes[id].maxStack : qty);
				this.stacks.push(new Stack(id, maxHere));
			
			qty-= maxHere;
		}
		else if(this.stacks[i].type == id &&
			this.stacks[i].qty < itemTypes[id].maxStack)
		{
			let maxHere = (itemTypes[id].maxStack - this.stacks[i].qty);
			if(maxHere > qty) { maxHere = qty; }
			
			this.stacks[i].qty+= maxHere;
			qty-= maxHere;
		}
		if(qty==0) { return 0; }
	}
	return qty;
};

function PlacedItemStack(id, qty)
{
	this.type = id;
	this.qty = qty;
	this.x = 0;
	this.y = 0;
}

PlacedItemStack.prototype.placeAt = function(nx, ny)
{
	if(mapTileData.map[toIndex(this.x, this.y)].itemStack==this)
	{
		mapTileData.map[toIndex(this.x, this.y)].itemStack = null;
	}

	this.x = nx;
	this.y = ny;
	
	mapTileData.map[toIndex(nx, ny)].itemStack = this;
};




let gametile = null, gametileURL = "src/images/tilesetestt.png", artLoaded = false;



// 创建一个角色 (miumiu)
let miumiu = new MiuMiu();
// 加更多角色⬇
function MiuMiu() {
    this.tileFrom	= [1,1];
    // miumiu的位置
    this.tileTo		= [15,16];
    // time in millseconds
    this.timeMoved	= 0;
    this.delayMove	= 700;
	this.dimensions	= [40,40];
    this.position	= [45,45];
    
    this.direction	= directions.up;
	this.sprites = {};
	this.sprites[directions.up]	= [{x:0,y:120,w:30,h:30}];
	this.sprites[directions.right] = [{x:0,y:150,w:30,h:30}];
	this.sprites[directions.down] = [{x:0,y:180,w:30,h:30}];
	this.sprites[directions.left] = [{x:0,y:210,w:30,h:30}];
	this.inventory = new Inventory(2);

}


// 把角色放在地砖上
MiuMiu.prototype.location = function(x, y) {
	this.tileFrom	= [x,y];
    this.tileTo		= [x,y];
    // x and y position of the tile. update the tileFrom and tileTo properties to the new tile coordinates
    // calculates the pixel position of the characyer use below
	this.position	= [(( tileWidth * x )+( (tileWidth - this.dimensions[0]) / 2 )),
		(( tileHeight * y )+( (tileHeight - this.dimensions[1]) / 2 ))];
};

// 根据每个帧数找到角色位置
MiuMiu.prototype.processMovement = function(t) {
    // if char tileTo == tileFrom char is not moving, so return false
	if( this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) { return false; }
    // if the amount of time passed since char began its current move >= the time for char to move 1 tile. we set position using location function
    // aka: if char still moving
	if((t - this.timeMoved) >= this.delayMove) {
        this.location(this.tileTo[0], this.tileTo[1]);
        if(mapTileData.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter != null) {
			mapTileData.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter(this);
        }
	} else {
        // current position on canvas
		this.position[0] = (this.tileFrom[0] * tileWidth) + ((tileWidth - this.dimensions[0]) / 2);
		this.position[1] = (this.tileFrom[1] * tileHeight) + ((tileHeight - this.dimensions[1]) / 2);

        // if char is moving on x coordinate, calculate pixels
		if(this.tileTo[0] != this.tileFrom[0]) {
            // difference = distance moved
            // 加减移动的地砖到角色的位子
			let difference = (tileWidth / this.delayMove) * (t - this.timeMoved);
			this.position[0]+= (this.tileTo[0] < this.tileFrom[0] ? 0 - difference : difference);
		}
	    if(this.tileTo[1] != this.tileFrom[1]) {
			let difference = (tileHeight / this.delayMove) * (t-this.timeMoved);
			this.position[1]+= (this.tileTo[1]<this.tileFrom[1] ? 0 - difference : difference);
        }
        // round x & y to whole number 需要整数
		this.position[0] = Math.round(this.position[0]);
		this.position[1] = Math.round(this.position[1]);
    }
    // true = char is currently moving
	return true;
}


// if char can move in a specific direc
MiuMiu.prototype.placesCanGo = function(x, y) {
    // if x and y is in map bound
    if(x < 0 || x >= mapWidth || y < 0 || y >= mapHeight) { 
		return false; 
	}
    // if the tile is path tile (only move if its a path)
        if(tileTypes[gameMap[toIndex(x,y)]].floor != floorTypes.path) { return false; }
        if(mapTileData.map[toIndex(x,y)].object != null) {
			let object = mapTileData.map[toIndex(x,y)].object;
			if(objectTypes[object.type].collision == collisions.solid) {
				return false;
		}
	}
	return true;
};
MiuMiu.prototype.canGoUp = function() { return this.placesCanGo(this.tileFrom[0], this.tileFrom[1] - 1); };
MiuMiu.prototype.canGoDown = function() { return this.placesCanGo(this.tileFrom[0], this.tileFrom[1] + 1); };
MiuMiu.prototype.canGoLeft = function() { return this.placesCanGo(this.tileFrom[0]-1, this.tileFrom[1]); };
MiuMiu.prototype.canGoRight = function() { return this.placesCanGo(this.tileFrom[0]+1, this.tileFrom[1]); };

MiuMiu.prototype.goLeft = function(t) { this.tileTo[0]-= 1; this.timeMoved = t; this.direction = directions.left; };
MiuMiu.prototype.goRight = function(t) { this.tileTo[0]+= 1; this.timeMoved = t; this.direction = directions.right; };
MiuMiu.prototype.goUp = function(t) { this.tileTo[1]-= 1; this.timeMoved = t; this.direction = directions.up; };
MiuMiu.prototype.goDown = function(t) { this.tileTo[1]+= 1; this.timeMoved = t; this.direction = directions.down; };

// pick up item
MiuMiu.prototype.pickUp = function()
{
	if(this.tileTo[0]!=this.tileFrom[0] ||
		this.tileTo[1]!=this.tileFrom[1])
	{
		return false;
	}
	
	let is = mapTileData.map[toIndex(this.tileFrom[0],
				this.tileFrom[1])].itemStack;
	
	if(is!=null)
	{
		let remains = this.inventory.addItems(is.type, is.qty);

		if(remains) { is.qty = remains; }
		else
		{
			mapTileData.map[toIndex(this.tileFrom[0],
				this.tileFrom[1])].itemStack = null;
		}
	}
	
	return true;
};

// create a camera object
let camera = {
    screen: [0,0],
    // 画面左上角
    startingPoint: [0,0],
    // 画面右下角
    endingPoint: [0,0],
    // 误差
    offset: [0,0],
    // update function, x y is our center area
    update: function(offsetX, offsetY) {
        // offset: half the canvas width || height (round down to whole num)
		this.offset[0] = Math.floor((this.screen[0]/2) - offsetX);
        this.offset[1] = Math.floor((this.screen[1]/2) - offsetY);

        // 地砖在地图上的位置
        let tile = [ Math.floor(offsetX / tileWidth), Math.floor(offsetY / tileHeight) ];
        //  计算第一个地砖位置在x线上： 最大地砖数量 - 屏幕的一半
        //  多减去1这样地砖可以show一半在屏幕上
        this.startingPoint[0] = tile[0] - Math.ceil((this.screen[0]/2) / tileWidth)  - 1;
		this.startingPoint[1] = tile[1] - Math.ceil((this.screen[1]/2) / tileHeight)  - 1;

        // 确保x和y都大于0要么会在地图外
        if(this.startingPoint[0] <= -1) { this.startingPoint[0] = 0; }
		if(this.startingPoint[1] <= -1) { this.startingPoint[1] = 0; }

        this.endingPoint[0] = tile[0] + 1 + Math.ceil((this.screen[0]/2) / tileWidth);
		this.endingPoint[1] = tile[1] + 1 + Math.ceil((this.screen[1]/2) / tileHeight);

		if(this.endingPoint[0] >= mapWidth) { this.endingPoint[0] = mapWidth -1; }
		if(this.endingPoint[1] >= mapHeight) { this.endingPoint[1] = mapHeight - 1; }
        }
};


// buildings

let mapTileData = new TileMap();

let buildingsLocation = [
	{ x:11, y:5, w:4, h:5, data: [
		10, 11, 11, 12,
        13, 14, 14, 15,
        16, 18, 16, 18,
        16, 18, 16, 18,
        16, 17, 16, 18
	]},
	{ x:16, y:5, w:7, h:5, data: [
		10, 11, 11, 11, 11, 12, 12,
        13, 15, 13, 14, 14, 15, 15,
        16, 18, 16, 19, 19, 18, 18,
        16, 18, 16, 19, 19, 18, 18,
        16, 18, 16, 19, 17, 18, 18
	]},
	{ x:14, y:13, w:4, h:4, data: [
        10, 11, 11, 12,
        13, 14, 14, 15,
        16, 18, 16, 18,
        16, 17, 16, 18
	]}
];

// stores information for each map tile
function Tile(tileX, tileY, tileType)
{
    // tileY, tileX = the position of the tile on the map
	this.x			= tileX;
	this.y			= tileY;
	this.type		= tileType;
	this.building		= null;
    this.buildingType	= 0;
    //  pointer to a function to execute when a MiuMiu has completed moving on to this tile
    this.eventEnter	= null;
	this.object		= null;
	this.itemStack	= null;

}

// 储存管理地图数据
function TileMap() {
	this.map	= [];
	this.w		= 0;
    this.h		= 0;
	this.levels	= 4;
}

TileMap.prototype.buildMapFromData = function(tileId, w, h) {
	this.w		= w;
    this.h		= h;

    if(tileId.length!=(w * h)) { return false; }
	
    this.map.length	= 0;
    	for(let y = 0; y < h; y++) {
		    for(let x = 0; x < w; x++) {
			this.map.push( new Tile(x, y, tileId[ (x + (w * y))]) );
		}
    }
    return true;
};


TileMap.prototype.addBuildings = function(buildings) {
	for(let i in buildings) {
        let building = buildings[i];
        if(building.x < 0 || building.y < 0 || building.x >= this.w || building.y >= this.h ||	(building.x+building.w)>this.w || (building.y+building.h)>this.h || building.data.length!=(building.w*building.h)) {
			continue;
        }
        for(let y = 0; y < building.h; y++) {
			for(let x = 0; x < building.w; x++) {
                let tileIdx = (((building.y + y) * this.w) + building.x + x);
                this.map[tileIdx].building = building;
				this.map[tileIdx].buildingType = building.data[( (y * building.w) + x)];
			}
		}
	}
};

// 物品摆放
function GameObjects(nt) {
	this.x = 0;
	this.y = 0;
	this.type = nt;
}

GameObjects.prototype.placeAt = function(nx, ny) {
	if(mapTileData.map[toIndex(this.x, this.y)].object == this) {
		mapTileData.map[toIndex(this.x, this.y)].object = null;
    }
    this.x = nx;
	this.y = ny;
	
	mapTileData.map[toIndex(nx, ny)].object = this;
};



// convert x, y into index in gameMap arr
function toIndex(x, y) {
	return(x + (mapWidth * y));
}

function getFrame(sprite, timeLast, time, animation) {
	if(!animation) { return sprite[0]; }
	time = time % timeLast;

	for(x in sprite) {
		if(sprite[x].end>=time) { return sprite[x]; }
	}
}

// 界面load完，开始loop
window.onload = function() {
	ctx = document.getElementById("miumiuTale").getContext("2d");
	requestAnimationFrame(drawGame);
    
    // add eventListeners for the keydowna and keyup
	window.addEventListener("keydown", function(e) {
		if(e.keyCode >= 65 && e.keyCode <= 87 ) { heldKeys[e.keyCode] = true; }
		if(e.keyCode==80) { heldKeys[e.keyCode] = true; }
	});
	window.addEventListener("keyup", function(e) {
		if(e.keyCode >= 65 && e.keyCode <= 87) { heldKeys[e.keyCode] = false; }
		if(e.keyCode==80) { heldKeys[e.keyCode] = false; }
	});

    // canvas尺寸 保存到 相机
    camera.screen = [document.getElementById("miumiuTale").width,
        document.getElementById("miumiuTale").height];
        
    gametile = new Image();
	gametile.onerror = function() {
		ctx = null;
		alert("Failed loading gametile.");
	};
	gametile.onload = function() { 
		artLoaded = true; 
	};
    gametile.src = gametileURL;
    
    mapTileData.buildMapFromData(gameMap, mapWidth, mapHeight);
	mapTileData.addBuildings(buildingsLocation);
	mapTileData.map[((2 * mapWidth) + 2)].eventEnter = function() { 
		console.log("Entered tile 2,2"); 
	};
	
	// 物品摆放位置
	let fence1 = new GameObjects(2); fence1.placeAt(15, 6);
    
    let flower1 = new GameObjects(1); flower1.placeAt(11, 10);
    let flower2 = new GameObjects(1); flower2.placeAt(13, 10);
    let flower3 = new GameObjects(1); flower3.placeAt(14, 10);
    
	let tree1 = new GameObjects(3); tree1.placeAt(10, 11);
	let tree2 = new GameObjects(3); tree2.placeAt(15, 11);
	let tree3 = new GameObjects(3); tree3.placeAt(13, 11);	
    let tree4 = new GameObjects(3); tree4.placeAt(18, 11);
  
    let mashroom1 = new GameObjects(4); mashroom1.placeAt(8,9);
    let mashroom2 = new GameObjects(4); mashroom2.placeAt(15,7);

	let pigShop1 = new GameObjects(5); pigShop1.placeAt(9, 9);


    let donuts = new GameObjects(6); donuts.placeAt(11, 5);

    let cooking = new GameObjects(7); cooking.placeAt(13, 5);

    let carpet = new GameObjects(8); carpet.placeAt(13,7);

    let desk = new GameObjects(9); desk.placeAt(14,8);

    let chair = new GameObjects(10); chair.placeAt(14,7);
    let chair2 = new GameObjects(16); chair2.placeAt(18,7);

    let treePlant = new GameObjects(11); treePlant.placeAt(11,8);

    let drum = new GameObjects(12); drum.placeAt(21,6);

    let instruments = new GameObjects(13); instruments.placeAt(18,5);

    let bookShelf1 = new GameObjects(14); bookShelf1.placeAt(16,6);
    let bookShelf2 = new GameObjects(14); bookShelf2.placeAt(16,7);

	let saxophone = new GameObjects(15); saxophone.placeAt(19,7);
	
	let coconutTree1 = new GameObjects(17); coconutTree1.placeAt(10, 18);
	let coconutTree2 = new GameObjects(17); coconutTree2.placeAt(14, 19);
	let coconutTree3 = new GameObjects(17); coconutTree3.placeAt(18, 18);
	let coconutTree4 = new GameObjects(17); coconutTree4.placeAt(22, 19);


	let coconut1 = new PlacedItemStack(1, 1); coconut1.placeAt(10, 20);
	let coconut2 = new PlacedItemStack(1, 1); coconut2.placeAt(15, 20);
	let coconut3 = new PlacedItemStack(1, 1); coconut3.placeAt(23, 20);
	let coconut4 = new PlacedItemStack(1, 1); coconut4.placeAt(14, 21);

	let strawberry1 = new PlacedItemStack(2, 1); strawberry1.placeAt(18, 22);
	
};




// main function
function drawGame() {
    if (ctx == null) { 
		return; 
	}
    if (!artLoaded) { 
		requestAnimationFrame(drawGame); return; 
	}

	let currentFrameTime = Date.now();
    // framecount 
	let sec = Math.floor(Date.now() / 1000);
	if(sec != currentSecond){
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount = 1;
	} else { 
        frameCount++; 
    }

    // miumiu movement
	if(!miumiu.processMovement(currentFrameTime)) {
		if(heldKeys[87] && miumiu.canGoUp()){ 
            miumiu.goUp(currentFrameTime); 
        } else if (heldKeys[83] && miumiu.canGoDown()) { 
            miumiu.goDown(currentFrameTime); 
        } else if(heldKeys[65] && miumiu.canGoLeft()) { 
            miumiu.goLeft(currentFrameTime); 
        } else if(heldKeys[68] && miumiu.canGoRight()) { 
            miumiu.goRight(currentFrameTime); 
        } else if(heldKeys[80]) {
			miumiu.pickUp();
		}
    }

    // camera跟着miumiu走
        camera.update(miumiu.position[0] + (miumiu.dimensions[0] / 2),
            miumiu.position[1] + (miumiu.dimensions[1] / 2));

	    let miumiuBuilding1 = mapTileData.map[toIndex(
		miumiu.tileFrom[0], miumiu.tileFrom[1])].building;
	    let miumiuBuilding2 = mapTileData.map[toIndex(
		miumiu.tileTo[0], miumiu.tileTo[1])].building;

        // 清除last frame
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, camera.screen[0], camera.screen[1]);
    

    for(let z = 0; z < mapTileData.levels; z++) {
		for(let y = camera.startingPoint[1]; y <= camera.endingPoint[1]; ++y) {
		    for(let x = camera.startingPoint[0]; x <= camera.endingPoint[0]; ++x) {
                if(z==0) {
					let tile = tileTypes[mapTileData.map[toIndex(x,y)].type];

					ctx.drawImage(gametile, 
									tile.sprite[0].x, 
									tile.sprite[0].y, 
									tile.sprite[0].w, 
									tile.sprite[0].h,
									camera.offset[0] + (x * tileWidth), 
									camera.offset[1] + (y * tileHeight), 
									tileWidth, 
									tileHeight
								);
				}
				else if(z==1)
			{
				let is = mapTileData.map[toIndex(x,y)].itemStack;
				if(is!=null)
				{
					let objectSprite = itemTypes[is.type].sprite;
					
					ctx.drawImage(gametile,
						objectSprite[0].x, objectSprite[0].y,
						objectSprite[0].w, objectSprite[0].h,
						camera.offset[0] + (x*tileWidth) + itemTypes[is.type].offset[0],
						camera.offset[1] + (y*tileHeight) + itemTypes[is.type].offset[1],
						objectSprite[0].w, objectSprite[0].h);
				}
			}
				let object = mapTileData.map[toIndex(x,y)].object;
				if(object != null && objectTypes[object.type].zIndex == z) {
					let objectType = objectTypes[object.type];
				 
					ctx.drawImage(gametile,
								objectType.sprite[0].x, 
								objectType.sprite[0].y,
								objectType.sprite[0].w, 
								objectType.sprite[0].h,
								camera.offset[0] + (x * tileWidth) + objectType.offset[0],
								camera.offset[1] + (y * tileHeight) + objectType.offset[1],
								objectType.sprite[0].w, 
								objectType.sprite[0].h
								);
				}

               if(z == 2 && mapTileData.map[toIndex(x,y)].buildingType != 0 && mapTileData.map[toIndex(x,y)].building != miumiuBuilding1 && mapTileData.map[toIndex(x,y)].building != miumiuBuilding2) {
                    tile = tileTypes[mapTileData.map[toIndex(x,y)].buildingType];
                    sprite = getFrame(tile.sprite, tile.spritetimeLast, tile.animation);
					ctx.drawImage(gametile, 
									sprite.x, 
									sprite.y, 
									sprite.w, 
									sprite.h, 
									camera.offset[0] + (x * tileWidth), 
									camera.offset[1] + (y * tileHeight), 
									tileWidth, 
									tileHeight);
				}
			}
    	}

		if (z == 1) {
				let sprite = miumiu.sprites[miumiu.direction];
				ctx.drawImage(gametile,
					sprite[0].x, sprite[0].y,
					sprite[0].w, sprite[0].h,
					camera.offset[0] + miumiu.position[0],
					camera.offset[1] + miumiu.position[1],
					miumiu.dimensions[0], miumiu.dimensions[1]
							);
					}
	}

	ctx.textAlign = "right";
	
	for(let i = 0; i < miumiu.inventory.spaces; i++)
	{
		ctx.fillStyle = "#ffc34a";
		ctx.fillRect(10 + (i * 50), 350,
			40, 40);
		
		if(typeof miumiu.inventory.stacks[i]!='undefined')
		{
			let it = itemTypes[miumiu.inventory.stacks[i].type];
			let sprite = it.sprite;
					
			ctx.drawImage(gametile,
				sprite[0].x, sprite[0].y,
				sprite[0].w, sprite[0].h,
				10 + (i * 50) + it.offset[0],
				350 + it.offset[1],
				sprite[0].w, sprite[0].h);
			
			if(miumiu.inventory.stacks[i].qty>1)
			{
				ctx.fillStyle = "#000000";
				ctx.fillText("" + miumiu.inventory.stacks[i].qty,
					10 + (i*50) + 38,
					350 + 38);
			}
		}
	}
	ctx.textAlign = "left";
    
    // draw the miumiu
    let sprite = miumiu.sprites[miumiu.direction];
	ctx.drawImage(gametile, 
				sprite[0].x, 
				sprite[0].y, 
				sprite[0].w, 
				sprite[0].h, 
				camera.offset[0] + miumiu.position[0], 
				camera.offset[1] + miumiu.position[1], 
				miumiu.dimensions[0], miumiu.dimensions[1]);

	lastFrameTime = currentFrameTime;
	requestAnimationFrame(drawGame);
}
