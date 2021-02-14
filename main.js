canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var roverWidth = 100;
var roverHeight = 90;
var roverX = 15;
var roverY = 15;
var roverImage = "rover.png";

var nasa_images = ["nasa1.jpg", "nasa2.jpg", "nasa3.jpg", "nasa4.jpg"];
var random_no = Math.floor(Math.random()*4);
var backgroundImage = nasa_images[random_no];
console.log("backgroundImage" + backgroundImage);

function add(){
    console.log("add()");
    background_imgTag = new Image();
    background_imgTag.onload = upload_background;
    background_imgTag.src = backgroundImage;

    rover_imgTag = new Image();
    rover_imgTag.onload = upload_rover;
    rover_imgTag.src = roverImage;
}

function upload_rover(){
    ctx.drawImage(rover_imgTag, roverX, roverY, roverWidth, roverHeight);
    console.log("uploadRover()");
}

function upload_background(){
    ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.height);
    console.log("upload_Background()");
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e){
    var keyPressed = e.keyCode;
    console.log(keyPressed);

    if(keyPressed == '37'){
        left();
        console.log("left");
    }

    if(keyPressed == '38'){
        up();
        console.log("up");
    }

    if(keyPressed == '39'){
        right();
        console.log("right");
    }

    if(keyPressed == '40'){
        down();
        console.log("down");
    }
}

function up(){
    if(roverY >= 0){
        roverY = roverY - 10;
        console.log("Rover x =" + roverX + " Rover y =" + roverY);
        upload_background();
        upload_rover();
    }
}

function down(){
    if(roverY <= 500){
        roverY = roverY + 10;
        console.log("Rover x =" + roverX + " Rover y =" + roverY);
        upload_background();
        upload_rover();
    }
}

function left(){
    if(roverX >= 0){
        roverX = roverX - 10;
        console.log("Rover x =" + roverX + " Rover y =" + roverY);
        upload_background();
        upload_rover();
    }
}

function right(){
    if(roverX <= 700 ){
        roverX = roverX + 10;
        console.log("Rover x =" + roverX + " Rover y =" + roverY);
        upload_background();
        upload_rover();
    }
}