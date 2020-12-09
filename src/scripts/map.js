window.addEventListener('DOMContentLoaded', (event) => {
    let character = document.querySelector(".character");
    let map = document.querySelector(".map");
    
    //character start in the middle of the map
    let x = 185;
    let y = 55;
    let moving_directions = []; //State of which arrow keys we are holding down
    let speed = 1; //How fast the character moves in pixels per frame

    const placeCharacter = () => {
    
    let pixelSize = parseInt(
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
        let dir = keys[e.which];
        if (dir && moving_directions.indexOf(dir) === -1) {
            moving_directions.unshift(dir)
    }
    })

    document.addEventListener("keyup", (e) => {
        let dir = keys[e.which];
        let index = moving_directions.indexOf(dir);
        if (index > -1) {
            moving_directions.splice(index, 1)
    }
    });
    
    //Limits (gives the illusion of walls)
    let leftLimit = -5;
    let rightLimit = 278;
    let topLimit = 37;
    let bottomLimit = 217;

    
    if (x < leftLimit) { x = leftLimit; }
    if (x > rightLimit) { x = rightLimit; }
    if (y < topLimit) { y = topLimit; }
    if (y > bottomLimit) { y = bottomLimit; }
    
    
    let camera_left = pixelSize * 66;
    let camera_top = pixelSize * 42;
    
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

