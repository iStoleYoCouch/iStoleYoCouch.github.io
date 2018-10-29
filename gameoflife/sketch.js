// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x = 8;
let y = 8;
let grid;
let cellSize;


function setup() {
  createCanvas(700, 700);
  cellSize = width / x;
  grid = createRandom2dArray(x, y);

}

function draw() {
  background(220);
  displayGrid();
}

function displayGrid(){
  for (let i = 0; i < x; i ++){
    for (let j = 0; j < y; j ++){
      if (grid[i][j] === 0){
        fill(255);
      }
      else{
        fill(0);
      }
      rect(i * cellSize, j * cellSize, cellSize, cellSize);
    }
  }
}




function createRandom2dArray(x, y){
  let randomGrid = [];
  for (let i = 0; i < x; i ++){
    randomGrid.push([]);
    for (let j = 0; j < y; j ++){
      if (random(100) < 50) {
        randomGrid[i].push(0);
      }
      else{
        randomGrid[i].push(1);
      }
    }
  }
  return randomGrid;
}


function mousePressed(){
  // grid = createRandom2dArray(x, y);
  let i = floor(mouseX / cellSize);
  let j = floor(mouseY / cellSize);

  if (grid[i][j] === 1){
    grid[i][j] = 0;
  }
  else if (grid[i][j] === 0){
    grid[i][j] = 1;
  }
}


function keyTyped(){
  if (key === "r"){
    grid = createRandom2dArray();
  }
  else if (key === " "){
    update();
  }
}

function update(){
  let nextTurn = [];
  for (let i = 0; i < y; i ++){
    nextTurn[i] = [];
  }
  for (let i = 0; i < y; i ++){
    for (let j = 0; j < x; j++){
      let neighbour = 0;

      for (let k = -1; k <= 1; k ++){
        for (let l = -1; l <= 1; l ++){
          if (i + l >= 0 && i+1 < y && i+l >= 0 && i+j < x){
            neighbour += grid[i + l][j + k];
          }
        }
      }
      neighbour -= grid[i][j];

      if (grid[i][j] === 1){
        if (neighbour === 2 || neighbour === 3){
          nextTurn[i][j] = 1;
        }
        else{
          nextTurn[i][j] = 0;
        }
      }
      if (grid[i][j] === 0){
        if (neighbour === 3){
          nextTurn[i][j] = 1;
        }
        else{
          nextTurn[i][j] = 0;
        }
      }
    }
  }
  grid = nextTurn;
}
