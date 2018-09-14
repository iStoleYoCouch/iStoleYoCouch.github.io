// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

function setup() {
    soundFormats("mp3");
    song = loadSound("service-bell_daniel_simion.mp3");
    createCanvas(windowWidth, windowHeight);
    background(255);
}

function draw() {
  if (mouseIsPressed){
    if (keyIsDown(69)){
      ellipse(mouseX, mouseY, 50, 50);
    }
    if (keyIsDown(77)){
      song.play();
    }
    if (keyIsDown(82)){
      rect(mouseX, mouseY, 50, 80);
    }
    if (keyIsDown(81)){
      ellipse(mouseX, mouseY, 10, 10);
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

}
