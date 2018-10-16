// Project Title
// Brett Sane
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state;
let x, y;
let dx, dy;
let x2, y2;
let rx, rx2;
let h, w;
let isFilledWithBlack;
let picture;
let redPeiceArray = [];
let blackPeiceArray = [];


let redrow2x1 = 50;
let redrow2x2 = 250;
let redrow2x3 = 450;
let redrow2x4 = 650;
let redrow2y = 150;

let redrow1x1 = 150;
let redrow1x2 = 350;
let redrow1x3 = 550;
let redrow1x4 = 750;
let redrow1y = 50;

function preload() {
  picture = loadImage("assets/checkerboard.png");
}






///////////////////////////////////////////

function setup() {
  createCanvas(800, 800);
  h = height/8;                 //setup
  w = width/8;
  isFilledWithBlack = false;
  state = 1;

}




//////////////////////////////////////////////////////////

function draw() {
  //background(235);
  //mainMenu();
  checkState();
  //gameBoard();      //draw loop
  // redPeices();
  // blackPeices();

  console.log(state);
}




//////////////////////////////////////////////////

function checkState(){
  if (state === 1){       //checks what state you are in
    mainMenu();

  }
  if (state === 2){
    gameBoard();
    redPeices();
    blackPeices();
    console.log("state 2");

  }
  if (state === 3){
    selectRed();
  }

  if (state === 5){
    fill(0);
    rect(redrow2x4 - 150, redrow2y - 150, 100, 100);
    state = 4;
  }
  if (state === 6){
    fill(0);
    rect(redrow2x4 + 50, redrow2y - 150, 100, 100);
    state = 4;

  }


  if (state === 4){
    console.log("state 4");
    if (mouseX >= redrow2x4 + 50 && mouseX <= redrow2x4 + 150 && mouseY >= redrow2y + 50 && mouseY <= redrow2y + 150){
      redrow2x4 = redrow2x4 + 100;
      redrow2y = redrow2y + 100;
      fill(255, 0, 0);
      ellipse(redrow2x4, redrow2y, 100, 100);
      state = 5;
    }
    if (mouseX >= redrow2x4 - 150 && mouseX <= redrow2x4 - 50 && mouseY >= redrow2y + 50 && mouseY <= redrow2y + 150){
      redrow2x4 = redrow2x4 - 100;
      redrow2y = redrow2y + 100;
      fill(255, 0, 0);
      ellipse(redrow2x4, redrow2y, 100, 100);
      state = 6;
    }
  }
}


//////////////////////////////////////////////////////////


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




///////////////////////////////////////////////////////////////////



function mousePressed(){
  if (state === 1){
    if (mouseX >= 300 && mouseX <= 500 && mouseY >= 350 && mouseY <= 450){    // if you click the button, the state changes
      state = 2;
    }
  }


  if (state === 2){
    if (mouseX >= redrow2x4 - 50 && mouseX <= redrow2x4 + 50 && mouseY >= redrow2y -50 && mouseY <=redrow2y + 50){
      state = 3;
    }
    if (mouseX >= 500 && mouseX <= 600 && mouseY >= 600 && mouseY <= 700){
      state = 5;
    }
  }
  if (state === 3){
    if (mouseX >= redrow2x4 + 50 && mouseX <= redrow2x4 + 150 && mouseY >= redrow2y + 50 && mouseY <= redrow2y + 150){
      state = 4;
    }
    if (mouseX >= redrow2x4 - 150 && mouseX <= redrow2x4 - 50 && mouseY >= redrow2y + 50 && mouseY <= redrow2y + 150){
      state = 4;
    }
  }
}


/////////////////////////////////////////////////////////////


function gameBoard(){
  if (state === 2){
    for (let i = 0; i < 800; i++){
      for (let j = 0; j < 800; j++){    //draws the checker board

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
}



////////////////////////////////////////////////////////

function selectRed(){
  fill(0, 255, 0);
  ellipse(redrow2x4, redrow2y, 100, 100);
}

function selectBlack(){
  dx = 550;
  dy = 650;
  fill(0, 0, 255);
  ellipse(dx, dy, 100, 100);
}


/////////////////////////////////////////////////////////



function redPeices(){
  if (state === 2){

    fill(255, 0, 0);
    noStroke();


    ellipse(redrow2x1, redrow2y, 100, 100);


    ellipse(redrow2x2, redrow2y, 100, 100);


    ellipse(redrow2x3, redrow2y, 100, 100);


    ellipse(redrow2x4, redrow2y, 100, 100);







    ellipse(redrow1x1, redrow1y, 100, 100);


    ellipse(redrow1x2, redrow1y, 100, 100);


    ellipse(redrow1x3, redrow1y, 100, 100);


    ellipse(redrow1x4, redrow1y, 100, 100);
  }
}




///////////////////////////////////////////////



function blackPeices(){
  if (state === 2){
    x = width/4;
    x2 = width/4;                   //draws the black peices
    y = 50;
    y2 = 150;
    for (let i = 0; i < 4; i ++){
      fill(100, 100, 100);
      noStroke();
      ellipse(x*i + y, 750, 100, 100);
      ellipse(x2*i + y2, 650, 100, 100);
    }
  }
}
