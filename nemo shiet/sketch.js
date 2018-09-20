// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let fish;
let scaler;

function preload(){
  fish = loadImage("assets/nemo.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  scaler = 1.0;
}


function draw() {
  background(255)
  image(fish, mouseX, mouseY, fish.width * scaler, fish.height * scaler);
}

function mouseWheel(event){
  if (event.delta > 0 && scaler < 2.5){
    scaler *= 1.1;
  }
  else if (event.delta < 0 && scaler > 0.2){
    scaler *= 0.9;
  }
}
