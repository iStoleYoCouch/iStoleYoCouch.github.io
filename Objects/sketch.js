// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

class Particle {
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
    this.x += this.dx;
    this.y += this.dy;
  }
}

let someParticle;
let fireworks = [];


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  for (let i = 0; i < fireworks.length; i ++){
    fireworks[i].display();
    fireworks[i].update();
  }

}

function mousePressed(){
  for (let i = 0; i < 100; i ++){
    let someParticle = new Particle(mouseX, mouseY);
    fireworks.push(someParticle);
    console.log("pressed");
  }
}
