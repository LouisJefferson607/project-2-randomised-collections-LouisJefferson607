/*
 * This file should contain code that draws your faces.
 *
 * Each function takes parameters and draws a face that is within
 * the bounding box (-10, -10) to (10, 10).
 *
 * These functions are used by your final arrangement of faces as well as the face editor.
 */


/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
/*
 * tilt_value is in degrees
 * eye_value is an integer number of eyes: either 0, 1, 2, or 3
 * mouth_value is how open the mouth is and should generally range from 0.5 to 10
 */
function cookieFace(eye_value, mouth_value, chocolate_value) {
  fill(255, 200, 100); // cookie color
  ellipse(0, 0, 10, 10); // cookie outline
  //  beginShape();
  // let noiseMax = 0.5; // set maximum noise value to 0.5
  // for (let angle = 0; angle <= 360; angle += 10) {
  //   let xOff = map(cos(radians(angle)), -1, 1, 0, noiseMax);
  //   let yOff = map(sin(radians(angle)), -1, 1, 0, noiseMax);
  //   let noiseVal = noise(xOff*2, yOff*2); // multiply xOff and yOff by 2 for a smaller noise size
  //   let radius = 5 + (noiseVal * 5); // set radius range to 5-10 for a smaller cookie size
  //   let x = radius * cos(radians(angle));
  //   let y = radius * sin(radians(angle));
  //   vertex(x, y);
  // }
  // endShape(CLOSE);
  
  
  // draw chocolate chips at random positions
  fill(170, 85, 0); // chocolate color
  for (let i = 0; i < chocolate_value; i++) {
    let x = random(-3, 3);
    let y = random(-3, 3);
    ellipse(x, y, 1, 1);
  }
  
  // draw eyes
  fill(255);
  ellipse(-3, -2, eye_value, eye_value);
  ellipse(3, -2, eye_value, eye_value);
  
  // draw black pupils in the eyes
  fill(0);
  let pupil_size = eye_value * 0.5; // size of the pupil
  let pupil_offset = eye_value * 0.2; // offset of the pupil from the center of the eye
  ellipse(-3, -2, pupil_size, pupil_size);
  ellipse(3, -2, pupil_size, pupil_size);
  
  // draw two small white circles inside each pupil
  fill(255);
  let small_circle1_size = pupil_size * 0.5;
  let small_circle2_size = pupil_size * 0.3;
  let small_circle1_offset = pupil_size * 0.2;
  let small_circle2_offset = pupil_size * 0.1;
  ellipse(-3 - pupil_offset + small_circle1_offset, -2 - small_circle1_offset, small_circle1_size, small_circle1_size);
  ellipse(-3 - pupil_offset + small_circle2_offset, -2 + small_circle2_offset, small_circle2_size, small_circle2_size);
  ellipse(3 + pupil_offset - small_circle1_offset, -2 - small_circle1_offset, small_circle1_size, small_circle1_size);
  ellipse(3 + pupil_offset - small_circle2_offset, -2 + small_circle2_offset, small_circle2_size, small_circle2_size);
  
  // draw mouth
  fill(255, 100, 100);
  let mouth_height = map(mouth_value, 0, 100, 0, 2); // map the mouth value to a range of 0-2
  rect(-1, 2, 2, mouth_height, 1); // draw a rectangle for the mouth
}














function simplePurpleFace() {
  fill(234, 122, 244);
  noStroke();
  // head
  ellipse(0, 0, 20);
  // eyes
  fill(255, 217, 114);
  ellipse(-3, -3, 3);
  ellipse( 3, -3, 3);
}

/*
 * thinness_value ranges from 0-100 and indicates how thin the face is
 */
function blockyFace(thinness_value) {
  // head
  noStroke();
  fill(134, 19, 136);
  let head_width = map(thinness_value, 0, 100, 8, 20);
  rect(-head_width/2, -9, head_width, 18);
 

  // eyes
  fill(234, 122, 244);
  ellipse(-2, -4, 1);
  ellipse( 2, -4, 1);
}
