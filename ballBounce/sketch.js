// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Ball {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 25;
    this.dx = random(-10, 10);
    this.dy = random(-10, 10);
    this.transparency = 255;
    this.color = color(random(255), random(255), random(255), this.transparency);
  }

  display(){
    fill(this.color);
    ellipse(this.x, this.y, this.size);
  }

  update(){
    this.transparency -= 5;
    this.color.setAlpha(this.transparency);
    if (this.x <= 0 || this.x >= windowWidth){
      if (this.y )
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {

}
