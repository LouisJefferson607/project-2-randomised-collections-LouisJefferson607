/*
 * This program draws your arrangement of faces on the canvas.
 */

const canvasWidth = 960;
const canvasHeight = 500;
let curRandomSeed = 0;

let lastSwapTime = 0;
const millisPerSwap = 3000;

// global variables for colors
const bg_color1 = [203, 179, 134];
function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  curRandomSeed = int(random(0, 1000));

  // rotation in degrees
  angleMode(DEGREES);
}

function changeRandomSeed() {
  curRandomSeed = curRandomSeed + 1;
  lastSwapTime = millis();
}



function mouseClicked() {
  changeRandomSeed();
}

function draw () {
  if(millis() > lastSwapTime + millisPerSwap) {
    changeRandomSeed();
  }

  // reset the random number generator each time draw is called
  randomSeed(curRandomSeed);

  // clear screen
  background(bg_color1);
  
  // Set stroke color to black
  stroke(0);

  // draw a 7x4 grid of cookies
  //let w = canvasWidth / 7;
 // let h = canvasHeight / 4;
  //for(let i=0; i<4; i++) {
  //  for(let j=0; j<7; j++) {
   //   let y = h/2 + h*i;
   //   let x = w/2 + w*j;

      // center cookie
      for (let i =0; i<20; i++) {

      let eye_value = int(random(3,6));
      let mouth_value = random(0.5, 100);
      let chocolate_value = int(random(3, 8));
      let height_cook = int(random(0,500));
      let width_cook = int(random(0,960));

      push();
      translate(width_cook, height_cook);
      scale(8);

      strokeWeight(0.2);
      cookieFace(eye_value, mouth_value, chocolate_value,1);

      pop();
    }
  }
 // }
//}




function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
