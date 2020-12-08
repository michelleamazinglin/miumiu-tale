window.addEventListener('DOMContentLoaded', (event) => {
    var npc = document.querySelector(".npc");
    var map = document.querySelector(".map");

    var x = 0;
    var y = 100;
    var moving_directions = []; //State of which arrow keys we are holding down
    var speed = 1; //How fast the npc moves in pixels per frame

    const placeNpc = () => {
    
    var pixelSize = parseInt(
        getComputedStyle(document.documentElement).getPropertyValue('--pixel-size')
    );
    // pull from css (the pixel size)


        /* Direction key state */
    const directions = {
        left: "left",
        up: "up",
        right: "right",
        down: "down",   
    }
    const keys = {
        37: directions.left,
        38: directions.up,
        39: directions.right,
        40: directions.down,
    }

        npc.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0 )`;  
    }
});