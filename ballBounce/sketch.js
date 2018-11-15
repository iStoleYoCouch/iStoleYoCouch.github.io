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
    this.radius = 25;
    this.dx = random(-10, 10);
    this.dy = random(-10, 10);
    this.color = color(random(255), random(255), random(255), this.transparency);
  }

  display(){
    noStroke();
    fill(this.color);
    ellipse(this.x, this.y, this.radius*2, this.radius*2);
  }

  update(){
    if (this.y  <= 0 + this.radius || this.y >= height - this.radius){
      this.dy *= -1;
    }
    if (this.x <= 0 + this.radius || this.x >= width - this.radius){
      this.x *= -1;
    }
    this.x += this.dx;
    this.y += this.dy;
  }
}



let ball = [];



function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  for (let i = ball.length - 1; i >= 0; i --){
    ball[i].display();
    ball[i].update();
  }

}

function mousePressed(){
  let someBall = new Ball(mouseX, mouseY);
  ball.push(someBall);

}
