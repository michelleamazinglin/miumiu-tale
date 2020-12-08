window.addEventListener('DOMContentLoaded', (event) => {
    var character = document.querySelector(".character");
    var map = document.querySelector(".map");
    
    //character start in the middle of the map
    var x = 185;
    var y = 55;
    var moving_directions = []; //State of which arrow keys we are holding down
    var speed = 1; //How fast the character moves in pixels per frame

    const placeCharacter = () => {
    
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

    const moving_direction = moving_directions[0];
    if (moving_direction) {
        if (moving_direction === directions.right) {x += speed;}
        if (moving_direction === directions.left) {x -= speed;}
        if (moving_direction === directions.down) {y += speed;}
        if (moving_direction === directions.up) {y -= speed;}
        character.setAttribute("facing", moving_direction);
    }
    character.setAttribute("walking", moving_direction ? "true" : "false");


    document.addEventListener("keydown", (e) => {
        var dir = keys[e.which];
        if (dir && moving_directions.indexOf(dir) === -1) {
            moving_directions.unshift(dir)
    }
    })

    document.addEventListener("keyup", (e) => {
        var dir = keys[e.which];
        var index = moving_directions.indexOf(dir);
        if (index > -1) {
            moving_directions.splice(index, 1)
    }
    });
    
    //Limits (gives the illusion of walls)
    var leftLimit = -5;
    var rightLimit = 278;
    var topLimit = 37;
    var bottomLimit = 217;

    
    if (x < leftLimit) { x = leftLimit; }
    if (x > rightLimit) { x = rightLimit; }
    if (y < topLimit) { y = topLimit; }
    if (y > bottomLimit) { y = bottomLimit; }
    
    
    var camera_left = pixelSize * 66;
    var camera_top = pixelSize * 42;
    
    map.style.transform = `translate3d( ${-x*pixelSize+camera_left}px, ${-y*pixelSize+camera_top}px, 0 )`;
    character.style.transform = `translate3d( ${x*pixelSize}px, ${y*pixelSize}px, 0 )`;  
    }
    // so the character dont reprint all the time


    //Set up the game loop
    const step = () => {
        placeCharacter();
        window.requestAnimationFrame(() => {
            step();
    })
    }
    step(); //kick off the first step!

});

