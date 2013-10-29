var c; //canvas
var car; //car object
var ctx; //context (to draw)
var FPS; //FPS value
var left; //left key boolean
var right; //right key boolean

Car = function() { //Car object
    this.x = 240; //xpos
    this.y = 600; //ypos
    img = new Image; //car image
    img.src = "car.png"; //car source
};

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

function update() { //update method
    keyInput(); //check for keyboard input
    if(left) car.x-=2;
    else if (right) car.x+=2;
}

function draw() { //draw method
    ctx.fillStyle = "#222"; //background color
    ctx.fillRect(0,0,500,700); //redraw background
    ctx.drawImage(img,car.x,car.y); //draw car image
}

$(document).ready(function() { //document loaded
	FPS=60; //set to 60fr/sec
    left = false; //left boolean to false
    right = false; //right boolean to true

    c = document.getElementById("canvas"); //init canvas var
    car = new Car(); //create car
    c.width=500; //set canvas size
    c.height=700; //set canvas height
    ctx=c.getContext("2d"); //init context (to draw)

    setInterval(function() { //game loop
        update(); //update 
        draw(); //draw
    }, 1000/FPS); //set FPS to 60fps
});