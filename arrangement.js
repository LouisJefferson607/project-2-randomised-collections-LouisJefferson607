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
  for (let i = 0; i < canvasWidth; i += 20) {
    for (let j = 0; j < canvasHeight; j += 20) {
      if ((i + j) % 40 === 0) {
        fill(192, 128, 64);
      } else {
        fill(192, 128, 64, 120);
      }
      rect(i, j, 20, 20);
    }
  }

  
  // Set stroke color to black
  stroke(0);
  fill(255, 255, 255);
  
// Draw drop shadow
noStroke();
fill(0, 0, 0, 200);
ellipse(canvasWidth/2 + 30, canvasHeight/2 + 30, 700, 500);

// Draw plate
noStroke();
fill(230, 230, 230);
ellipse(canvasWidth/2, canvasHeight/2, 700, 500);

// Draw plate's outer ring
noFill();
stroke(200, 200, 200);
strokeWeight(20);
ellipse(canvasWidth/2, canvasHeight/2, 720, 520);

// Draw plate's inner ring
noFill();
stroke(230, 230, 230);
strokeWeight(10);
ellipse(canvasWidth/2, canvasHeight/2, 680, 480);



      for (let i = 0; i < 50; i++) {

        let eye_value = int(random(3, 8));
        let mouth_value = random(0, 150);
        let chocolate_value = int(random(0, 14));
        let height_cook = int(random(canvasHeight / 2 - 140, canvasHeight / 2 + 140));
        let width_cook = int(random(canvasWidth /  2 - 250, canvasWidth / 2 + 250));
        let chocolate_size = int(random(1, 2));
    
        push();
        translate(width_cook, height_cook);
        scale(8);
    
        strokeWeight(0.2);
        cookieFace(eye_value, mouth_value, chocolate_value, curRandomSeed+i, chocolate_size);
    
        pop();
    }
    
  }
 





function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
