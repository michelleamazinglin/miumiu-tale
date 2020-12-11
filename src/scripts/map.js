// i want a camera following the char around the map


let ctx = null;

// create a map with 10*10 tile
let gameMap = [
	0, 0, 0, 0, 0, 3, 3, 3, 3, 1, 3, 3, 3, 3, 3, 3, 0, 0, 0, 0,
	0, 2, 2, 2, 1, 3, 2, 2, 3, 1, 3, 2, 2, 2, 2, 3, 2, 2, 2, 0,
	0, 2, 2, 2, 1, 3, 2, 2, 3, 1, 3, 2, 2, 2, 2, 3, 2, 2, 2, 0,
	0, 2, 2, 2, 1, 3, 2, 2, 3, 1, 3, 2, 2, 2, 2, 3, 2, 2, 2, 0,
	0, 2, 2, 2, 1, 3, 2, 3, 3, 1, 3, 3, 3, 3, 2, 3, 2, 2, 2, 0,
	0, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 2, 2, 2, 1, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 0,
    0, 2, 2, 2, 2, 2, 2, 2, 3, 2, 2, 3, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 2, 2, 2, 2, 2, 2, 2, 3, 2, 3, 3, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,
	0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 0,
	4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4,
	4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4
];
// 每个地砖多少pixel
let tileWidth = 40;
let tileHeight = 40;
// 地图大小就是10*10
let mapWidth = 20;
let mapHeight = 20;
// framerate
let currentSecond = 0;
let frameCount = 0;
let framesLastSecond = 0;
let lastFrameTime = 0;


// keyCode : boolean to tell us which one are pressed
let heldKeys = {
    // 37: left
    37 : false,
    // 38: up
    38 : false,
    // 39: right
    39 : false,
    // 40: down
    40 : false
    // 32: space
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
    water: 2
};

// 数字（gameMap）对应上颜色和地板种类
// 0:墙壁 1:草地 2:陆地 3:房子 4: 水
let tileTypes = {
	0 : { colour: "#793d4c", floor: floorTypes.solid, sprite:[{x:0,y:0,w:40,h:40}] },
	1 : { colour: "#6df7b1", floor: floorTypes.path, sprite:[{x:40,y:0,w:40,h:40}] },
	2 : { colour: "#c97461", floor: floorTypes.path, sprite:[{x:80,y:0,w:40,h:40}]	},
	3 : { colour: "#d77c4b", floor: floorTypes.solid, sprite:[{x:120,y:0,w:40,h:40}] },
    4 : { colour: "#008df0", floor: floorTypes.water, sprite:[{x:160,y:0,w:40,h:40}] },
    10 : { colour:"#ccaa00", floor:floorTypes.solid, sprite:[{x:240,y:40,w:40,h:40}]},
    11 : { colour:"#ccaa00", floor:floorTypes.solid, sprite:[{x:280,y:40,w:40,h:40}]},
    12 : { colour:"#ccaa00", floor:floorTypes.solid, sprite:[{x:320,y:40,w:40,h:40}]},
    13 : { colour:"#ccaa00", floor:floorTypes.solid, sprite:[{x:240,y:80,w:40,h:40}]},
    14 : { colour:"#ccaa00", floor:floorTypes.solid, sprite:[{x:280,y:80,w:40,h:40}]},
    15 : { colour:"#ccaa00", floor:floorTypes.solid, sprite:[{x:320,y:80,w:40,h:40}]},
    16 : { colour:"#ccaa00", floor:floorTypes.solid, sprite:[{x:240,y:120,w:40,h:40}]},
    17 : { colour:"#ccaa00", floor:floorTypes.solid, sprite:[{x:280,y:120,w:40,h:40}]},
    18 : { colour:"#ccaa00", floor:floorTypes.solid, sprite:[{x:320,y:120,w:40,h:40}]}
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



let tileset = null, tilesetURL = "src/images/tilesetestt.png", tilesetLoaded = false;



// 创建一个角色 (miumiu)
let player = new Character();
// 加更多角色⬇
function Character() {
	this.tileFrom	= [1,1];
    this.tileTo		= [10,10];
    // time in millseconds
    this.timeMoved	= 0;
    this.delayMove	= 700;
	this.dimensions	= [40,40];
    this.position	= [45,45];
    
    this.direction	= directions.up;
	this.sprites = {};
	this.sprites[directions.up]		= [{x:0,y:120,w:30,h:30}];
	this.sprites[directions.right]	= [{x:0,y:150,w:30,h:30}];
	this.sprites[directions.down]	= [{x:0,y:180,w:30,h:30}];
	this.sprites[directions.left]	= [{x:0,y:210,w:30,h:30}];
}


// 把角色放在地砖上
Character.prototype.location = function(x, y) {
	this.tileFrom	= [x,y];
    this.tileTo		= [x,y];
    // x and y position of the tile. update the tileFrom and tileTo properties to the new tile coordinates
    // calculates the pixel position of the characyer use below
	this.position	= [(( tileWidth * x )+( (tileWidth - this.dimensions[0]) / 2 )),
		(( tileHeight * y )+( (tileHeight - this.dimensions[1]) / 2 ))];
};

// calculations each frame to find position, pass in a time
Character.prototype.processMovement = function(t) {
    // if char tileTo == tileFrom char is not moving, so return false
	if( this.tileFrom[0] == this.tileTo[0] && this.tileFrom[1] == this.tileTo[1]) { return false; }
    // if the amount of time passed since char began its current move >= the time for char to move 1 tile. we set position using location function
    // aka: if char still moving
	if((t - this.timeMoved) >= this.delayMove) {
        this.location(this.tileTo[0], this.tileTo[1]);
        if(mapTileData.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter!=null)
		{
			mapTileData.map[toIndex(this.tileTo[0], this.tileTo[1])].eventEnter(this);
        }
	} else {
        // current position on canvas
		this.position[0] = (this.tileFrom[0] * tileWidth) + ((tileWidth-this.dimensions[0])/2);
		this.position[1] = (this.tileFrom[1] * tileHeight) + ((tileHeight-this.dimensions[1])/2);

        // if char is moving on x coordinate, calculate pixels
		if(this.tileTo[0] != this.tileFrom[0]) {
            // difference = distance moved
            // depending on whether the destination tile (tileTo) is left (or above), or right (or below) the tile we are moving from (tileFrom), we subtract or add this amount to the Characters position. 
			let difference = (tileWidth / this.delayMove) * (t - this.timeMoved);
			this.position[0]+= (this.tileTo[0] < this.tileFrom[0] ? 0 - difference : difference);
		}
	    if(this.tileTo[1] != this.tileFrom[1]) {
			let difference = (tileHeight / this.delayMove) * (t-this.timeMoved);
			this.position[1]+= (this.tileTo[1]<this.tileFrom[1] ? 0 - difference : difference);
        }
        // round x & y to whole number
		this.position[0] = Math.round(this.position[0]);
		this.position[1] = Math.round(this.position[1]);
    }
    // true = char is currently moving
	return true;
}


// if char can move in a specific direc
Character.prototype.canMoveTo = function(x, y)
{
    // if x and y is in map bound
    if(x < 0 || x >= mapWidth || y < 0 || y >= mapHeight) { return false; }
    // if the tile is path tile (only move if its a path)
		if(tileTypes[gameMap[toIndex(x,y)]].floor!=floorTypes.path) { return false; }
	return true;
};
Character.prototype.canMoveUp = function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]-1); };
Character.prototype.canMoveDown = function() { return this.canMoveTo(this.tileFrom[0], this.tileFrom[1]+1); };
Character.prototype.canMoveLeft = function() { return this.canMoveTo(this.tileFrom[0]-1, this.tileFrom[1]); };
Character.prototype.canMoveRight = function() { return this.canMoveTo(this.tileFrom[0]+1, this.tileFrom[1]); };

Character.prototype.moveLeft = function(t) { this.tileTo[0]-= 1; this.timeMoved = t; this.direction = directions.left; };
Character.prototype.moveRight = function(t) { this.tileTo[0]+= 1; this.timeMoved = t; this.direction = directions.right; };
Character.prototype.moveUp = function(t) { this.tileTo[1]-= 1; this.timeMoved = t; this.direction = directions.up; };
Character.prototype.moveDown = function(t) { this.tileTo[1]+= 1; this.timeMoved = t; this.direction = directions.down; };



// create a camera object
let viewport = {
    // canvas width and height
    screen: [0,0],
    // tile coordinates of the top-left area of the map
    startTile: [0,0],
    // tile coordinates of the bottom-right area of the map
    endTile: [0,0],
    // offset in pixels
    offset: [0,0],
    // update function, x y is our center area
    update: function(offsetX, offsetY) {
        // offset: half the canvas width || height (round down to whole num)
		this.offset[0] = Math.floor((this.screen[0]/2) - offsetX);
        this.offset[1] = Math.floor((this.screen[1]/2) - offsetY);

        // we find the coordinates of the tile
        let tile = [ Math.floor(offsetX / tileWidth), Math.floor(offsetY / tileHeight) ];
        //  calculate the position of the first tile on the x axis by calculting the maximum number of tiles that can fit in half of the screen width, and taking that number away from the centre tile.
        //  remove an additional 1 to allow for tiles that are not completely on the screen, but only partially.
        this.startTile[0] = tile[0] - 1 - Math.ceil((this.screen[0]/2) / tileWidth);
		this.startTile[1] = tile[1] - 1 - Math.ceil((this.screen[1]/2) / tileHeight);

        // check to make sure x or y is not less then 0 (ourside the bounds)
        if(this.startTile[0] < 0) { this.startTile[0] = 0; }
		if(this.startTile[1] < 0) { this.startTile[1] = 0; }

        this.endTile[0] = tile[0] + 1 + Math.ceil((this.screen[0]/2) / tileWidth);
		this.endTile[1] = tile[1] + 1 + Math.ceil((this.screen[1]/2) / tileHeight);

		if(this.endTile[0] >= mapWidth) { this.endTile[0] = mapWidth -1; }
		if(this.endTile[1] >= mapHeight) { this.endTile[1] = mapHeight - 1; }
        }
};


// rooftop

let mapTileData = new TileMap();
let roofList = [
	{ x:5, y:0, w:4, h:5, data: [
		10, 11, 11, 12,
        13, 14, 14, 15,
        16, 18, 16, 18,
        16, 18, 16, 18,
        16, 17, 16, 18
	]},
	{ x:10, y:0, w:6, h:5, data: [
		10, 11, 11, 11, 11, 12,
        16, 18, 16, 18, 17, 18,
        16, 18, 16, 18, 17, 18,
        16, 18, 16, 18, 17, 18,
        16, 18, 16, 18, 17, 18
	]},
	{ x:8, y:8, w:4, h:4, data: [
        10, 11, 11, 12,
        13, 14, 14, 15,
        16, 18, 16, 18,
        16, 17, 16, 18
	]}
];

// stores information for each map tile
function Tile(tx, ty, tt)
{
    // ty, tx = the position of the tile on the map
	this.x			= tx;
	this.y			= ty;
	this.type		= tt;
	this.roof		= null;
    this.roofType	= 0;
    //  pointer to a function to execute when a character has completed moving on to this tile
	this.eventEnter	= null;
}

// stores and manages our loaded map data
function TileMap()
{
	this.map	= [];
	this.w		= 0;
	this.h		= 0;
}

TileMap.prototype.buildMapFromData = function(tileMapId, w, h)
{
	this.w		= w;
    this.h		= h;

    if(tileMapId.length!=(w * h)) { return false; }
	
    this.map.length	= 0;
    	for(let y = 0; y < h; y++)
	{
		for(let x = 0; x < w; x++)
		{
			this.map.push( new Tile(x, y, tileMapId[((y*w)+x)]) );
		}
    }
    return true;
};


TileMap.prototype.addRoofs = function(roofs)
{
	for(let i in roofs)
	{
        let r = roofs[i];
        if(r.x < 0 || r.y < 0 || r.x >= this.w || r.y >= this.h ||
			(r.x+r.w)>this.w || (r.y+r.h)>this.h ||
			r.data.length!=(r.w*r.h))
		{
			continue;
        }
        for(let y = 0; y < r.h; y++)
		{
			for(let x = 0; x < r.w; x++)
			{
                let tileIdx = (((r.y + y)*this.w)+r.x + x);
                this.map[tileIdx].roof = r;
				this.map[tileIdx].roofType = r.data[((y*r.w)+x)];
			}
		}
	}
};


// convert x, y into index in gameMap arr
function toIndex(x, y) {
	return((y * mapWidth) + x);
}

function getFrame(sprite, duration, time, animated)
{
	if(!animated) { return sprite[0]; }
	time = time % duration;

	for(x in sprite)
	{
		if(sprite[x].end>=time) { return sprite[x]; }
	}
}

// loop starts when page done loading
window.onload = function() {
	ctx = document.getElementById('game').getContext("2d");
	requestAnimationFrame(drawGame);
    ctx.font = "bold 10pt sans-serif";
    
    // add eventListeners for the keydowna and keyup
	window.addEventListener("keydown", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { heldKeys[e.keyCode] = true; }
	});
	window.addEventListener("keyup", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { heldKeys[e.keyCode] = false; }
    });

    // checks the Canvas dimensions and stores it in the viewport objects
    viewport.screen = [document.getElementById('game').width,
        document.getElementById('game').height];
        
    tileset = new Image();
	tileset.onerror = function()
	{
		ctx = null;
		alert("Failed loading tileset.");
	};
	tileset.onload = function() { tilesetLoaded = true; };
    tileset.src = tilesetURL;
    
    mapTileData.buildMapFromData(gameMap, mapWidth, mapHeight);
	mapTileData.addRoofs(roofList);
	mapTileData.map[((2*mapWidth)+2)].eventEnter = function()
	{ console.log("Entered tile 2,2"); };
};


// main function
function drawGame()
{
    if(ctx==null) { return; }
    if(!tilesetLoaded) { requestAnimationFrame(drawGame); return; }

	let currentFrameTime = Date.now();
    let timeElapsed = currentFrameTime - lastFrameTime;
    
    // framecount 
	let sec = Math.floor(Date.now()/1000);
	if(sec!=currentSecond){
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount = 1;
	}
	else { frameCount++; }

    // player movement
	if(!player.processMovement(currentFrameTime)) {
		if(heldKeys[38] && player.canMoveUp())		{ player.moveUp(currentFrameTime); }
		else if(heldKeys[40] && player.canMoveDown())	{ player.moveDown(currentFrameTime); }
		else if(heldKeys[37] && player.canMoveLeft())	{ player.moveLeft(currentFrameTime); }
		else if(heldKeys[39] && player.canMoveRight())	{ player.moveRight(currentFrameTime); }
    }

    // set the viewport centre to the player top/left position plus half the players width/height.
        viewport.update(player.position[0] + (player.dimensions[0]/2),
            player.position[1] + (player.dimensions[1]/2));

	    let playerRoof1 = mapTileData.map[toIndex(
		player.tileFrom[0], player.tileFrom[1])].roof;
	    let playerRoof2 = mapTileData.map[toIndex(
		player.tileTo[0], player.tileTo[1])].roof;

        // erase anything on the Canvas from the last frame
        ctx.fillStyle = "#000000";
        ctx.fillRect(0, 0, viewport.screen[0], viewport.screen[1]);
    
    // nested loops: y and x
		for(let y = viewport.startTile[1]; y <= viewport.endTile[1]; ++y) {
		    for(let x = viewport.startTile[0]; x <= viewport.endTile[0]; ++x) {
                let tile = tileTypes[mapTileData.map[toIndex(x,y)].type];

			    ctx.drawImage(tileset,
				tile.sprite[0].x, tile.sprite[0].y, tile.sprite[0].w, tile.sprite[0].h,
				viewport.offset[0] + (x * tileWidth), viewport.offset[1] + (y * tileHeight),
                tileWidth, tileHeight);
            
               if(mapTileData.map[toIndex(x,y)].roofType!=0 &&
				mapTileData.map[toIndex(x,y)].roof!=playerRoof1 &&
				mapTileData.map[toIndex(x,y)].roof!=playerRoof2)
			{
				tile = tileTypes[mapTileData.map[toIndex(x,y)].roofType];
				sprite = getFrame(tile.sprite, tile.spriteDuration,
					 tile.animated);
				ctx.drawImage(tileset,
					sprite.x, sprite.y, sprite.w, sprite.h,
					viewport.offset[0] + (x*tileWidth),
					viewport.offset[1] + (y*tileHeight),
					tileWidth, tileHeight);
			}
		}
    }


    
    // draw the player
    let sprite = player.sprites[player.direction];
	ctx.drawImage(tileset,
		sprite[0].x, sprite[0].y, sprite[0].w, sprite[0].h,
		viewport.offset[0] + player.position[0], viewport.offset[1] + player.position[1],
		player.dimensions[0], player.dimensions[1]);


	lastFrameTime = currentFrameTime;
	requestAnimationFrame(drawGame);
}
