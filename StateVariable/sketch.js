// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let state;
let x;
let y;
let x1;
let y1;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(255);
  // checkState();
  gameBoard();


}

// function checkState(){
//   if (state === 1){
//
//   }
// }

function gameBoard(){
  x = 50;
  y = 50;
  x1 = 50;
  y1 = 750;

  while (x <= 750 && x1 >= 50){
    line(x, y, x1, y1);
    x += 20;
    x1 -= 20;

  }
}
