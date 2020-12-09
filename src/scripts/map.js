// i want a camera following the char around the map


let ctx = null;

// create a map with 10*10 tile
let gameMap = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0,
	0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, 1, 0, 0, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0,
	0, 1, 0, 1, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0,
	0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 1, 0, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 1, 1, 0,
	0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 0,
	0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0,
	0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0,
	0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 0,
	0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0
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
let keysDown = {
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

// 创建一个角色 (miumiu)
let player = new Character();
// in class so we can add more char in future
function Character() {
	this.tileFrom	= [1,1];
    this.tileTo		= [1,1];
    // time in millseconds
    this.timeMoved	= 0;
    this.delayMove	= 700;
	this.dimensions	= [30,30];
	this.position	= [45,45];
}


// place char in a specitic tile 
Character.prototype.placeAt = function(x, y) {
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
    // if the amount of time passed since char began its current move >= the time for char to move 1 tile. we set position using placeAt function
    // aka: if char still moving
	if((t - this.timeMoved) >= this.delayMove) {
		this.placeAt(this.tileTo[0], this.tileTo[1]);
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

// convert x, y into index in gameMap arr
function toIndex(x, y) {
	return((y * mapWidth) + x);
}


// loop starts when page done loading
window.onload = function() {
	ctx = document.getElementById('game').getContext("2d");
	requestAnimationFrame(drawGame);
    ctx.font = "bold 10pt sans-serif";
    
    // add eventListeners for the keydowna and keyup
	window.addEventListener("keydown", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = true; }
	});
	window.addEventListener("keyup", function(e) {
		if(e.keyCode>=37 && e.keyCode<=40) { keysDown[e.keyCode] = false; }
	});
};


// main function
function drawGame()
{
	if(ctx==null) { return; }

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
        // check for left right up and down directions
        // 1. The corresponding Arrow Key is pressed
        // 2. The destination tile is in map bounds; greater than or equal to 0, and less than map width (or map height, depending on axis). 
        // 3. The destination tiles value in the gameMap array is 1, as we are treating tile with a value of 1 as traversable.
        // 只有数值为一的时候我们才可以移动过去
		if (keysDown[38] && player.tileFrom[1] > 0 && gameMap[ toIndex(player.tileFrom[0], player.tileFrom[1] - 1)] == 1) {
            player.tileTo[1]-= 1; 
        } else if (keysDown[40] && player.tileFrom[1] < (mapHeight-1) && gameMap[toIndex(player.tileFrom[0], player.tileFrom[1]+1)]==1) {
            player.tileTo[1]+= 1; } else if (keysDown[37] && player.tileFrom[0]>0 && gameMap[toIndex(player.tileFrom[0] - 1, player.tileFrom[1])] == 1) { 
                player.tileTo[0]-= 1; 
        } else if (keysDown[39] && player.tileFrom[0]<(mapWidth-1) && gameMap[toIndex(player.tileFrom[0]+1, player.tileFrom[1])]==1) { 
            player.tileTo[0]+= 1; 
        }

        // if the destination (tileTo) is now different from the current tile (tileFrom). If so, we update the player timeMoved to the currentFrameTime
		if(player.tileFrom[0]!=player.tileTo[0] || player.tileFrom[1]!=player.tileTo[1]) { 
            player.timeMoved = currentFrameTime; 
        }
    }
    
    // nested loops: y and x
	for(let y = 0; y < mapHeight; ++y) {
        for(let x = 0; x < mapWidth; ++x) {
            // to find the index of the current tile in gamemap arr
			switch(gameMap[( (y * mapWidth) + x )]) {
                // which color depending on the value in the gameMap arr
                // 这里的0就是地图上的墙壁
				case 0:
					ctx.fillStyle = "#008dF0";
					break;
				default:
					ctx.fillStyle = "#6dF7b1";
			}
            ctx.fillRect( x * tileWidth, y * tileHeight, tileWidth, tileHeight);
		}
    }
    
    // draw the player

	ctx.fillStyle = "#fb9585";
	ctx.fillRect(player.position[0], player.position[1],
		player.dimensions[0], player.dimensions[1]);


	lastFrameTime = currentFrameTime;
	requestAnimationFrame(drawGame);
}
