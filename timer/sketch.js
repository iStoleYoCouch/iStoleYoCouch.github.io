// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


class Timer {
  constructor(timeToWait){
    this.startTime = millis();
    this.waitTime = timeToWait;
  }

  isDone(){
    if (millis > this.startTime + this.waitTime){
      return true;
    }
    else{
      return false;
    }
  }

  reset(timeToWait){
    this.startTime = millis();
    this.waitTime = timeToWait;
  }
}

let backgroundTimer;

function setup() {
  createCanvas(windowWidth, windowHeight);
  backgroundTimer = new Timer(3000);
}

function draw() {
  if (backgroundTimer.isDone()){
    background("red");
  }
  else{
    background("blue");
  }
}
