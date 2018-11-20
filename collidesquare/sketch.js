// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 75;
let y =150;
let w = 200;
let h = 100;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  let hitbox = collidePointCircle(mouseX, mouseY, x, y, w, h);
  if (hitbox){
    fill("blue");
  }
  else {
    fill("red");
  }
  ellipse(x, y, w, w);
}
