// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let binary = [0, 1];

let arr =[
  [],
  [],
  [],
  [],
];



function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i < arr.length; i ++){
    for (let j = 0; j < 4; j ++){
      arr[i].push(random(binary));
    }
  }
}

function draw() {
  board();
}

function board(){
  for (let i = 0; i < arr.length; i ++){
    for (let j = 0; j < 4; j ++){
      if (arr[i][j] === 1){
        fill(0);
        rect(width * (j/4), height * (i/4), width/4, height/4);
      }
      else{
        fill(255);
        rect(width * (j/4), height * (i/4), width/4, height/4);
      }
    }
  }
}

function mousePressed(){
  

}
