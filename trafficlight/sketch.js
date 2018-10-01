// Traffic Light Starter Code
// Dan Schellenberg
// Sept 25, 2018

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/
let redlight;
let yellowlight;
let greenlight;
let timer;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  drawOutlineOfLights();
}

function drawOutlineOfLights() {
  //box
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);


  //lights
  fill(255);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  ellipse(width/2, height/2, 50, 50); //middle
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
  timer = millis();


  if (timer < 3000){
    fill(255, 0, 0);
    ellipse(width/2, height/2 - 65, 50, 50);

  }
  else if (timer < 6000){
    fill(0, 255, 0);
    ellipse(width/2, height/2 + 65, 50, 50);
  }
  else if (timer < 9000){
    fill(255, 255, 0);
    ellipse(width/2, height/2, 50, 50);

  }
  else if (timer > 1500){
    timer = 0;
  }
}
