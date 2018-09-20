// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let song;
let scalar;

function preload(){
  soundFormats("mp3");
  song = loadSound("assets/horrible.mp3");

}

function setup() {

    createCanvas(windowWidth, windowHeight);
    background(255);
    scalar = 50;
}



function draw() {
  if (mouseIsPressed === true){
  ellipse(mouseX, mouseY, scalar, scalar);
  song.play();
  }
  else{
    song.stop();
  }
  if (keyIsDown(87)){
    background(255);
  }
  else if (keyIsDown(66)){
    background(0);
  }
}


// change colors
function keyPressed() {
  if (keyCode === 76){     //L = Green
    fill(0, 255, 0);
  }
  else if (keyCode === 75){  // K = red
    fill(255, 0, 0);
  }
  else if (keyCode === 74){  // J = white
    fill(255);
  }
  else if (keyCode === 72){ // H = black
    fill(0);
  }
  else if (keyCode === 71){ // G = Blue
    fill(0, 0, 255);
  }

}

function mouseWheel(event){
  if (event.delta < 0 && scalar < 100){
    scalar *= 1.1;
  }
  else if (event.delta > 0 && scalar > 10){
    scalar *= 0.9;
  }
}
