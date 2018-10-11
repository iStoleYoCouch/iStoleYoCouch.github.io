// Project Title
// Brett Sane
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let state;
let x, y;
let x2, y2;
let rx, rx2;
let h, w;
let isFilledWithBlack;
let picture;

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

  }
  if (state === 3){
    selectRed();
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



function mouseClicked(){
  if (state === 1){
    if (mouseX >= 300 && mouseX <= 500 && mouseY >= 350 && mouseY <= 450){    // if you click the button, the state changes
      state = 2;
    }
  }


  if (state ===2){
    if (mouseX >= 600 && mouseX <= 700 && mouseY >= 100 && mouseY <= 300){
      state = 3;
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
  ellipse(650, 150, 100, 100);
}


/////////////////////////////////////////////////////////


function redPeices(){
  if (state === 2){
    rx = width/4;
    rx2 = width/4;
    y = 50;                         //Draws the red peices
    y2 = 150;
    for(let i = 0; i < 4; i ++){
      fill(255, 0, 0);
      noStroke();
      ellipse(rx*i + y, 150, 100, 100);
      ellipse(rx2*i + y2, 50, 100, 100);
    }
  }
}




///////////////////////////////////////////////



function blackPeices(){
  if (state === 2){
    x = width/4;
    x2 = width/4;                   //draws the black peices
    y = 50;
    y2 = 150;
    for(let i = 0; i < 4; i ++){
      fill(100, 100, 100);
      noStroke();
      ellipse(x*i + y, 750, 100, 100);
      ellipse(x2*i + y2, 650, 100, 100);
    }
  }
}
