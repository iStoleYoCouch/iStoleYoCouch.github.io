// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let tank1;
let tank2;
let tank3;
let state;

////////////////////////////////////////////////////////////////////////////////

function preload(){
  tank1 = loadImage("assets/tank1.png");
  tank2 = loadImage("assets/tank2.png");
  tank3 = loadImage("assets/tank3.png");

}

////////////////////////////////////////////////////////////////////////////////

function setup() {
  createCanvas(windowWidth, windowHeight);
  state = 1;
  if (state === 3){
    background(70, 50, 20);

  }
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
  if (state === 3){
    controlScreen();
  }
  if (state === 2){
    fortnite();
  }
}

////////////////////////////////////////////////////////////////////////////////

function mainMenu(){
  background(70, 50, 20);

  scale(0.5);
  image(tank1, 900, 700);
  scale(2);

  scale(0.5);
  image(tank2, 450, 675);
  scale(2);
  scale(0.5);
  image(tank2, 150, 700);
  scale(2);
  fill(150, 150, 200);
  rect(0,0,width,height/3);

  fill(0);
  textSize(75);
  textStyle(ITALIC);
  text("Scorched Earth", width/2 - 300, 100);

  fill(100);
  rect(width/2 - 150, 250, 200, 65);

  if (mouseX >= width/2 - 150 && mouseX <= width/2 - 150 + 200){
    if (mouseY >= 250 && mouseY <= 315){
      fill(255, 200, 0);
      rect(width/2 - 150, 250, 200, 65);
    }
  }


  fill(0);
  textSize(50);
  text("Play!", width/2 - 100, 300);


  fill(100);
  rect(width/2 - 150, 350, 200, 65);

  if (mouseX >= width/2 - 150 && mouseX <= width/2 - 150 + 200){
    if (mouseY >= 350 && mouseY <= 415){
      fill(255, 200, 0);
      rect(width/2 - 150, 350, 200, 65);
    }
  }

  fill(0);
  textSize(50);
  text("Controls", width/2 - 145, 400);

}

////////////////////////////////////////////////////////////////////////////////

function controlScreen(){
  fill(0);
  // background(70, 50, 20);
  textSize(50);
  text("Controls", width/2 - 200, 100);

  fill("purple");
  ellipse(mouseX, mouseY, 20, 20);

  fill(255);
  rect(200, 300, 75, 75);




  fill(100);
  rect(0, 0, 200, 65);

  if (mouseX >= 0 && mouseX <= 200){
    if (mouseY >= 0 && mouseY <= 65){
      fill(255, 200, 0);
      rect(0, 0, 200, 65);
    }
  }
  fill(0);
  textSize(50);
  text("Back", 30, 50);


}

////////////////////////////////////////////////////////////////////////////////

function mousePressed(){
  if (mouseX >= width/2 - 150 && mouseX <= width/2 - 150 + 200){
    if (mouseY >= 250 && mouseY <= 315){
      state = 2;
    }
  }
  if (mouseX >= width/2 - 150 && mouseX <= width/2 - 150 + 200){
    if (mouseY >= 350 && mouseY <= 415){
      state = 3;
    }
  }
  if (state === 3){
    if (mouseX >= 0 && mouseX <= 200){
      if (mouseY >= 0 && mouseY <= 65){
        state = 1;
      }
    }
  }
}



function fortnite(){
  background("blue");
  fill("yellow");
  textSize(100);
  text("FORNTITE", width/2, height/2);
}
