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
let grid;

let redPlayer = [];
let blackPlayer = [];


function preload() {
  picture = loadImage("assets/checkerboard.png");
}


function setup() {
  createCanvas(800, 800);
  state = 1;
  cellSize = width/8;
  isFilledWithBlack = false;
}

function draw() {
  checkState();
}
function checkState(){
  if (state === 1){
    mainMenu();
  }
  if (state === 2){
    displayGrid();
    redPeices();
    blackPeices();
  }
}



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

function redPeices(){
  if (state === 2){
    for (let i = 0; i < 4; i ++){
      fill(255, 0, 0);
      redPlayer.push(ellipse(width/4 * i + 150, 50, 100, 100));
    }
    for (let j = 0; j < 4; j ++){
      fill(255, 0, 0);
      redPlayer.push(ellipse(width/4*j + 50, 150, 100, 100));
    }
  }
}


function blackPeices(){
  if (state === 2){
    for (let i = 0; i < 4; i ++){
      fill(75, 75, 75);
      blackPlayer.push(ellipse(width/4*i + 150, 650, 100, 100));
    }
    for (let j = 0; j < 4; j ++){
      fill(75, 75, 75);
      blackPlayer.push(ellipse(width/4*j + 50, 750, 100, 100));
    }
  }
}



function mousePressed(){
  if (state === 1){
    if (mouseX >= 300 && mouseX <= 500 && mouseY >= 350 && mouseY <= 450){    // if you click the button, the state changes
      state = 2;
    }
  }
  // if (state === 2){
  //   // if (){
  //
  //   }
  // }
}
