let ctx = null;

// create a map with 10*10 tile
let gameMap = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 0, 0, 0, 1, 1, 0, 0, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 0, 1, 1, 1, 0, 1, 1, 0,
	0, 1, 0, 1, 1, 1, 0, 0, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 0, 0, 0, 1, 0, 0,
	0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];
// 每个地砖多少pixel
let tileWidth = 40
let tileHeight = 40;
// 地图大小就是10*10
let mapW = 10
let mapH = 10;
// framerate
let currentSecond = 0
let frameCount = 0
let framesLastSecond = 0
let lastFrameTime = 0;


// keyCode : boolean to tell us which one are pressed
let keysDown = {
	37 : false,
	38 : false,
	39 : false,
	40 : false
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


// place it in a specitic tile 
Character.prototype.placeAt = function(x, y) {
	this.tileFrom	= [x,y];
    this.tileTo		= [x,y];
    // x and y position of the tile. update the tileFrom and tileTo properties to the new tile coordinates
    // calculates the pixel position of the characyer use below
	this.position	= [(( tileWidth * x )+( (tileWidth - this.dimensions[0]) / 2 )),
		(( tileHeight * y )+( (tileHeight - this.dimensions[1]) / 2 ))];
};


Character.prototype.processMovement = function(t) {
	if(this.tileFrom[0]==this.tileTo[0] && this.tileFrom[1]==this.tileTo[1]) { return false; }

	if((t-this.timeMoved)>=this.delayMove) {
		this.placeAt(this.tileTo[0], this.tileTo[1]);
	} else {
		this.position[0] = (this.tileFrom[0] * tileWidth) + ((tileWidth-this.dimensions[0])/2);
		this.position[1] = (this.tileFrom[1] * tileHeight) + ((tileHeight-this.dimensions[1])/2);

		if(this.tileTo[0] != this.tileFrom[0]) {
			let diff = (tileWidth / this.delayMove) * (t-this.timeMoved);
			this.position[0]+= (this.tileTo[0]<this.tileFrom[0] ? 0 - diff : diff);
		}
	    if(this.tileTo[1] != this.tileFrom[1]) {
			let diff = (tileHeight / this.delayMove) * (t-this.timeMoved);
			this.position[1]+= (this.tileTo[1]<this.tileFrom[1] ? 0 - diff : diff);
		}
		this.position[0] = Math.round(this.position[0]);
		this.position[1] = Math.round(this.position[1]);
	}
	return true;
}

function toIndex(x, y) {
	return((y * mapW) + x);
}


// loop starts when page done loading
window.onload = function() {
	ctx = document.getElementById('game').getContext("2d");
	requestAnimationFrame(drawGame);
	ctx.font = "bold 10pt sans-serif";

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

	if(!player.processMovement(currentFrameTime)) {
		if(keysDown[38] && player.tileFrom[1]>0 && gameMap[toIndex(player.tileFrom[0], player.tileFrom[1]-1)]==1) { player.tileTo[1]-= 1; }
		else if(keysDown[40] && player.tileFrom[1]<(mapH-1) && gameMap[toIndex(player.tileFrom[0], player.tileFrom[1]+1)]==1) { player.tileTo[1]+= 1; }
		else if(keysDown[37] && player.tileFrom[0]>0 && gameMap[toIndex(player.tileFrom[0]-1, player.tileFrom[1])]==1) { player.tileTo[0]-= 1; }
		else if(keysDown[39] && player.tileFrom[0]<(mapW-1) && gameMap[toIndex(player.tileFrom[0]+1, player.tileFrom[1])]==1) { player.tileTo[0]+= 1; }

		if(player.tileFrom[0]!=player.tileTo[0] || player.tileFrom[1]!=player.tileTo[1])
		{ player.timeMoved = currentFrameTime; }
    }
    
    // nested loops: y and x
	for(let y = 0; y < mapH; ++y) {
        for(let x = 0; x < mapW; ++x) {
            // to find the index of the current tile in gamemap arr
			switch(gameMap[( (y * mapW) + x )]) {
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

	ctx.fillStyle = "#0000ff";
	ctx.fillRect(player.position[0], player.position[1],
		player.dimensions[0], player.dimensions[1]);


	lastFrameTime = currentFrameTime;
	requestAnimationFrame(drawGame);
}
