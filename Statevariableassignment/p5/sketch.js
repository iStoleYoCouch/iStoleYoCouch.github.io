// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state;
let x;
let y;
let dx;
let dy;
let x2;
let y2;

function setup() {
  createCanvas(800, 800);

}

function draw() {
  background(235);
  // checkState();
  gameBoard();
  redPeices();
  blackPeices();


}

// function checkState(){
//   if (state === 1){
//
//   }
// }

function gameBoard(){
  line(0, 0, 800, 0);
  line(0, 800, 800, 800);
  line(0, 0, 0, 800);
  line(800, 0, 800, 800);

  x = width/8;
  y = height/8;


  for (let i =0; i < 8; i ++){
    line(x*i, 0, x*i, 800);
    line(0, x*i, 800, x*i);
  }
}

function redPeices(){
  x = width/4;
  x2 = width/4;
  for(let i = 0; i < 4; i ++){
    fill(255, 0, 0);
    ellipse(x*i + 50, 50, 100, 100);
    ellipse(x2*i + 150, 150, 100, 100);
  }
}

function blackPeices(){
  y = width/4;
  y2 = width/4;
  for(let i = 0; i < 4; i ++){
    fill(0);
    ellipse(y*i + 50, 750, 100, 100);
    ellipse(y2*i + 150, 650, 100, 100);

  }
}

function moveRed(){
  
}
