// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
//let ball;
let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

}

function draw() {
  background(255);

  for (let i = 0; i < ballArray.length; i ++){


  //Move Ball
    ballArray[i].x += ballArray[i].dx;
    ballArray[i].y += ballArray[i].dy;

    //Bounce if required
    if (ballArray[i].x > width - ballArray[i].radius || ballArray[i].x < 0 + ballArray[i].radius){
      ballArray[i].dx *= -1;
    }
    if (ballArray[i].y > height - ballArray[i].radius || ballArray[i].y < 0 + ballArray[i].radius){
      ballArray[i].dy *= -1;
    }

    //Display Ball
    fill(0);
    ellipse(ballArray[i].x, ballArray[i].y, ballArray[i].radius * 2, ballArray[i].radius * 2);
  }
}

function mousePressed(){
  let ball = {
    x: mouseX,
    y: mouseY,
    radius: 25,
    dx: random(-5, 5),
    dy: random(-5, 5),
  };
  ballArray.push(ball);
}
