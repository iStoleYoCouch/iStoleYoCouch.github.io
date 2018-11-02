// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let picture;
let x, y;
let state;
let isFilledWithBlack;
let cellSize;

let a, b;


let board = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 2, 0, 2, 0, 2],
  [2, 0, 2, 0, 2, 0, 2, 0],
];



////////////////////////////////////////////////////////////////////////////////

function preload() {
  picture = loadImage("assets/checkerboard.png");
}


////////////////////////////////////////////////////////////////////////////////


function setup() {
  createCanvas(800, 800);
  state = 1;
  cellSize = width/8;
  isFilledWithBlack = false;

}


////////////////////////////////////////////////////////////////////////////////

function draw() {
  checkState();
}

////////////////////////////////////////////////////////////////////////////////

function checkState(){
  if (state === 1){
    mainMenu();
  }
  if (state === 2){
    displayGrid();
    // redPeices();
    // blackPeices();
    showPeices();
  }

}

////////////////////////////////////////////////////////////////////////////////

function showPeices() {
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {
      if (board[y][x] === 1) {
        fill(255, 0, 0);
        ellipse(x*cellSize+50, y*cellSize+50, cellSize, cellSize);
      }
      if (board[y][x] === 3) {
        fill(0, 255, 0);
        ellipse(x*cellSize+50, y*cellSize+50, cellSize, cellSize);
        state = 3;

      }
    }
  }
}

////////////////////////////////////////////////////////////////////////////////

function mainMenu(){
  x = 800;
  y = 800;
  fill(255, 125, 125);       //background
  rect(0, 0, x, y);

  fill(0);
  textSize(125);              //Title
  text("Checkers", 100, 100);


  image(picture, 350, 500);   //checkers PNG




  fill(0);
  rect(300, 350, 150, 100);   //button

  fill(255);
  textSize(50);                 //play text
  text("Play!", 320, 420);

  if (mouseX >= 300 && mouseX <= 500 && mouseY >= 350 && mouseY <= 450){
    fill(0, 255, 0);
    rect(300, 350, 150, 100);       //changes the color of button


    fill(255);
    textSize(50);
    text("Play!", 320, 420);      //play text


  }

}


////////////////////////////////////////////////////////////////////////////////

function displayGrid(){
  if (state === 2){
    for (let i = 0; i < 800; i++){
      for (let j = 0; j < 800; j++){    //draws the checker board
        if (isFilledWithBlack){
          fill(0);
        }
        else{
          fill(255);
        }
        rect(i*width/8, j*height/8, width/8, height/8);
        isFilledWithBlack = !isFilledWithBlack;
      }
      isFilledWithBlack = !isFilledWithBlack;
    }
  }
}

////////////////////////////////////////////////////////////////////////////////

// function redPeices(){
//
//   for (let i = 0; i < 4; i ++){
//     fill(255, 0, 0);
//     board[0][1] = ellipse(width/4 * i + 150, 50, 100, 100);
//     board[0][3] = ellipse(width/4 * i + 150, 50, 100, 100);
//     board[0][5] = ellipse(width/4 * i + 150, 50, 100, 100);
//     board[0][7] = ellipse(width/4 * i + 150, 50, 100, 100);
//
//
//     board[1][0] = ellipse(width/4 * i + 50, 150, 100, 100);
//     board[1][2] = ellipse(width/4 * i + 50, 150, 100, 100);
//     board[1][4] = ellipse(width/4 * i + 50, 150, 100, 100);
//     board[1][6] = ellipse(width/4 * i + 50, 150, 100, 100);
//   }
// }


////////////////////////////////////////////////////////////////////////////////

// function blackPeices(){
//   if (state === 2){
//     for (let i = 0; i < 4; i ++){
//       fill(75, 75, 75);
//       //board.push(ellipse(width/4*i + 150, 650, 100, 100));
//     }
//     for (let j = 0; j < 4; j ++){
//       fill(75, 75, 75);
//       //board.push(ellipse(width/4*j + 50, 750, 100, 100));
//     }
//   }
// }

////////////////////////////////////////////////////////////////////////////////

function mousePressed(){
  if (state === 1){
    if (mouseX >= 300 && mouseX <= 500 && mouseY >= 350 && mouseY <= 450){    // if you click the button, the state changes
      state = 2;
    }
  }

  if (state === 2){
    a = floor(mouseX / cellSize);
    b = floor(mouseY / cellSize);
    if (board[b][a] === 1 ){//=== "e"){
      board[b][a] = 3;

    }
    else if (board[b][a] === 0){
      board[b][a] = 0;
    }
  }
  if (state === 3){
    if (board[b][a] === 0){
      board[b][a] = 1;
    }
  }
}
