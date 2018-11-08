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
let previousPosx;
let previousPosy;
let a, b;


let board = [
  [0, 1, 0, 1, 0, 1, 0, 1],
  [1, 0, 1, 0, 1, 0, 1, 0],
  [0, 9, 0, 9, 0, 9, 0, 9],
  [9, 0, 9, 0, 9, 0, 9, 0],
  [0, 9, 0, 9, 0, 9, 0, 9],
  [9, 0, 9, 0, 9, 0, 9, 0],
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
  if (state === 2 || state === 3){
    displayGrid();
    // redPeices();
    // blackPeices();
    showPeices();
  }
  if (state === 4){
    displayGrid();
    showPeices();
    console.log("state 4");
    for (let i = 0; i < 8; i ++){
      for (let j = 0; j < 8; j ++){
        if (board[i][j] === 3){
          board[i][j] = 9;
          state = 5;
        }
      }
    }
  }
  if (state === 5){
    displayGrid();
    showPeices();
    console.log("state 5");
  }
  if (state === 7){
    displayGrid();
    showPeices();
    console.log("state 7");
    for (let i = 0; i < 8; i ++){
      for (let j = 0; j < 8; j ++){
        if (board[i][j] === 4){
          board[i][j] = 9;
          state = 2;
        }
      }
    }
  }
}

////////////////////////////////////////////////////////////////////////////////

function showPeices() {
  for (let x = 0; x < 8; x++) {
    for (let y = 0; y < 8; y++) {

      //red peices

      if (board[y][x] === 1) {
        fill(0);
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
        fill(255, 0, 0);
        ellipse(x*cellSize+50, y*cellSize+50, cellSize, cellSize);
      }
      if (board[y][x] === 3) {
        fill(0, 255, 0);
        ellipse(x*cellSize+50, y*cellSize+50, cellSize - 1, cellSize - 1);
        state = 3;
      }

      //black spaces

      if (board[y][x] === 9){
        fill(0);
        rect(x*cellSize, y*cellSize, cellSize, cellSize);
      }

      //black peices

      if (board[y][x] === 2){
        fill(75);
        ellipse(x*cellSize + 50, y*cellSize + 50, cellSize, cellSize);
      }
      if (board[x][y] === 4){
        fill(0, 0, 255);
        ellipse(x*cellSize+50, y*cellSize+50, cellSize - 1, cellSize - 1);
        state = 6;
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

function mousePressed(){
  if (state === 1){
    console.log("state is 1");
    if (mouseX >= 300 && mouseX <= 500 && mouseY >= 350 && mouseY <= 450){    // if you click the button, the state changes
      state = 2;
    }
  }

  if (state === 2){
    console.log("state is 2");
    a = floor(mouseX / cellSize);
    b = floor(mouseY / cellSize);
    if (board[b][a] === 1 ){//=== "e"){
      board[b][a] = 3;
      previousPosx = board[a];
      previousPosy = board[b];

    }
  }

  else if (state === 3){
    a = floor(mouseX / cellSize);
    b = floor(mouseY / cellSize);
    console.log("state is 3");
    if (board[b][a] === 9){
      console.log("was a 0");
      board[b][a] = 1;
      state = 4;
    }
  }
  else if (state === 5){
    a = floor(mouseX / cellSize);
    b = floor(mouseY / cellSize);
    if (board[b][a] === 2 ){//=== "e"){
      board[b][a] = 4;
    }
  }
  else if (state === 6){
    a = floor(mouseX / cellSize);
    b = floor(mouseY / cellSize);
    console.log("state is 6");
    if (board[b][a] === 9){
      console.log("was a 0");
      board[b][a] = 2;
      state = 7;
    }
  }
}
