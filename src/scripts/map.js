let ctx = null;
let gameMap = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 0, 0, 1, 1, 1, 0, 0, 0,
	0, 1, 0, 1, 1, 0, 1, 1, 1, 0,
	0, 1, 0, 1, 1, 0, 0, 1, 1, 0,
	0, 1, 0, 1, 1, 1, 0, 0, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 1, 1, 0, 0, 0, 1, 0, 0,
	0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];
let tileW = 40, tileH = 40;
let mapW = 10, mapH = 10;
let currentSecond = 0, frameCount = 0, framesLastSecond = 0;


window.onload = function()
{
	ctx = document.getElementById('game').getContext("2d");
	requestAnimationFrame(drawGame);
	ctx.font = "bold 10pt sans-serif";
};

function drawGame(){if(ctx==null) { return; }
	let sec = Math.floor(Date.now()/1000);
	if(sec!=currentSecond)
	{
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount = 1;
	}
    else { frameCount++; }
    
	for(let y = 0; y < mapH; ++y)
	{
		for(let x = 0; x < mapW; ++x)
		{

			switch(gameMap[((y*mapW)+x)])
			{
				case 0:
					ctx.fillStyle = "#000000";
					break;
				default:
					ctx.fillStyle = "#ccffcc";
			}

            ctx.fillRect( x*tileW, y*tileH, tileW, tileH);
            
		}
    }
    
    ctx.fillStyle = "#ff0000";

	requestAnimationFrame(drawGame);
}
