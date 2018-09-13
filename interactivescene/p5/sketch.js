// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
    mySound.setVolume(0.1);
    mySound.play();
    createCanvas(windowWidth, windowHeight);
    background(255);
}
function preload() {
  soundFormats('mp3', 'ogg');
  song = loadSound('assets/Very High Pitch Sound!.mp3')
}

function draw() {
  if (mouseIsPressed){
    if (keyIsDown(69)){
      ellipse(mouseX, mouseY, 50, 50);

    }
    if (keyIsDown(82)){
      rect(mouseX, mouseY, 50, 80)
    }
  }
  else if (keyIsDown(87)){
    background(255);
  }
  else if (keyIsDown(66)){
    background(0);
  }
}
function keyPressed() {
  if (keyCode === 76){
    fill(0, 255, 0);
  }
  else if (keyCode === 75){
    fill(255, 0, 0);
  }
  else if (keyCode === 74){
    fill(255);
  }
  else if (keyCode === 72){
    fill(0);
  }
  else if (keyCode === 71){
    fill(0, 0, 255);
  }
  else if (keyCode === 32){
    song.play();
  }
}
