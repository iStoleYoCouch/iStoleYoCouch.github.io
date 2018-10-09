// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"
let fish;
let grayFish;

function preload(){
  fish = loadImage("assets/fish.jpeg");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  image(fish, 0, 0);
  grayFish = makeGrayScale(fish);
}

function draw() {

}

function makeGrayScale(sourceImage){
  let img = createImage(sourceImage.width, sourceImage.height);

  sourceImage.loadPixels();
  img.loadPixels();

  for (let x = 0; x < sourceImage.width; x++){
    for (let y = 0; y < sourceImage.height; y++){
      let p = sourceImage.get(x, y);

      let r = red(p);
      let g = green(p);
      let b = blue(p);

      let average = (r + g + b) / 3;

      let newPixel = color(average, average, average);

      img.set(x, y, newPixel);
    }
  }
  img.updatePixels();
  return img;
}
