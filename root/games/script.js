var c; //canvas
var car; //car object
var ctx; //context (to draw)
var FPS; //FPS value
var delta; //delta time between frames
var current; //ms elapsed of current frame
var previous; //ms elapsed of last frame
var left; //left key boolean
var right; //right key boolean
var battery; //test battery instance
var fuel; //test fuel instance
var itemSize; //size of pick-up items
var trigger; //boolean for road animation

Car = function() { //Car object
    this.x = 240; //xpos
    this.y = 600; //ypos
    this.width = 60; //width
    this.height = 100; //height
    this.xspeed = 250; //xspeed
    this.yspeed = 3; //yspeed
    img = new Image; //car image
    img.src = "car.png"; //car source
};

BatteryItem = function (x,y) { //Battery pick-up item object
    this.x = x; //x-position
    this.y = y; //y-position
    this.color = 'orange'; //color of item
}

FuelItem = function (x,y) { //Fuel pick-up item object
    this.x = x; //x-position
    this.y = y; //y-position
    this.color = 'blue'; //color of item
}


function moveCar () { //update car position
    if(car.x >= 0) {
        if(left) car.x-=car.xspeed*delta; //move left
    }
    if(car.x <= 500-car.width) {
        if (right) car.x+=car.xspeed*delta; //move right
    }
    if (car.y > 500) {
        car.y-=car.yspeed; //update car's vertical
    }
    else {
        trigger = true; //car is in static position
    }
}

function updateBattery () {
    spawnInstances();
    battery.y+=car.yspeed;
    if (battery.y > c.height) battery = null;
    spawnInstances();
    if (battery.y+itemSize>=car.y && battery.y<car.y+car.height && battery.x+itemSize>=car.x && battery.x<=car.x+car.width) 
        battery = null;
    spawnInstances();
}

function updateFuel () {
    spawnInstances();
    fuel.y+=car.yspeed;
    if (fuel.y > c.height) fuel = null;
    spawnInstances();
    if (fuel.y+itemSize>=car.y && fuel.y<car.y+car.height && fuel.x+itemSize>=car.x && fuel.x<=car.x+car.width) 
        fuel = null;
    spawnInstances();
}

function spawnBattery () {
    if (battery == null) {
        battery = new BatteryItem (Math.random()*(c.width-itemSize),Math.random()*(350));
    }
}

function spawnFuel () {
    if (fuel == null) {
        fuel = new FuelItem (Math.random()*(c.width-itemSize),Math.random()*(350));
    }
}

function setDelta () {
    current = Date.now(); //ms at current time
    delta = (current-previous)/1000; //seconds since last frame
    previous = Date.now(); //ms at current time
}

function keyInput () { //keyboard input function
    document.addEventListener('keydown', function(event) {//add listener (KEYDOWN)
        if(event.keyCode == 37) { // left
            left = true;
        }
        else if(event.keyCode == 39) { // right
            right = true;
        }
    });
    document.addEventListener('keyup', function(event) {//add listener (KEYUP)
        if(event.keyCode == 37) { // left
            left = false;
        }
        else if(event.keyCode == 39) { // right
            right = false;
        }
    });
}

function spawnInstances () {
    spawnBattery(); //spawn battery pick-up items
    spawnFuel(); //spawn fuel pick-up items
}

function updateInstances () {
    moveCar(); //update car position
    if (trigger) { // if car is in static position
        updateBattery(); //update battery item position
        updateFuel(); //update fuel item position
    }
}

function update() { //update method
    keyInput(); //check for keyboard input
    setDelta(); //evaluate time (ms) from last frame
    updateInstances(); //update entities positions (car, items)
}

function draw() { //draw method
    ctx.fillStyle = "#222"; //background color
    ctx.fillRect(0,0,500,700); //redraw background
    ctx.drawImage(img,car.x,car.y); //draw car image
    ctx.fillStyle = battery.color; // set battery item color
    ctx.fillRect(battery.x,battery.y,itemSize,itemSize); // draw battery
    ctx.fillStyle = fuel.color; // set fuel color
    ctx.fillRect(fuel.x,fuel.y,itemSize,itemSize); // draw fuel
}

$(document).ready(function() { //document loaded
	FPS=60; //set to 60fr/sec
    left = false; //left boolean to false
    right = false; //right boolean to true
    previous = 0; //initially set "time since last frame" to 0
    itemSize = 10; //pick-up item size
    trigger = false; //for road animation

    c = document.getElementById("canvas"); //init canvas var
    car = new Car(); //create car
    c.width=500; //set canvas size
    c.height=700; //set canvas height
    ctx=c.getContext("2d"); //init context (to draw)

    spawnInstances();
    setInterval(function() { //game loop
        update(); //update 
        draw(); //draw
    }, 1000/FPS); //set FPS to 60fps
});