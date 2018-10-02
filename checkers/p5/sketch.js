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
let rx;
let rx2;
let h;
let w;
let isFilledWithBlack;

function setup() {
  createCanvas(800, 800);
  h = height/8;
  w = width/8;
  isFilledWithBlack = false;

}

function draw() {
  background(235);
  mainMenu();
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

function mainMenu(){
  
}



function gameBoard(){
  for (let i = 0; i < height; i++){
    for (let j = 0; j < width; j++){

      if (isFilledWithBlack){
        fill(0);
      }

      else{
        fill(255);

      }
      rect(i*w, j*h, w, h);
      isFilledWithBlack = !isFilledWithBlack;


    }
    isFilledWithBlack = !isFilledWithBlack;
  }
}

function redPeices(){
  rx = width/4;
  rx2 = width/4;
  y = 50;
  y2 = 150;
  for(let i = 0; i < 4; i ++){
    fill(255, 0, 0);
    noStroke();
    ellipse(rx*i + y, 50, 100, 100);
    ellipse(rx2*i + y2, 150, 100, 100);
  }
}

function blackPeices(){
  x = width/4;
  x2 = width/4;
  y = 50;
  y2 = 150;
  for(let i = 0; i < 4; i ++){
    fill(100, 100, 100);
    noStroke();
    ellipse(x*i + y, 750, 100, 100);
    ellipse(x2*i + y2, 650, 100, 100);

  }
}
