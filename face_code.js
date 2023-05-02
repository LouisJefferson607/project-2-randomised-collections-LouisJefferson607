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
function angryBirdFace(tilt_value, eye_value, mouth_value) {
  const bg_color3 = [255, 255, 255];
  const fg_color3 = [227, 22, 29];

  let headSize = 20
  let eyeSize = 5;
  let centerX = 0;
  let Iy = -4
  let distactBetweenEyes = 5
  let MouthDrop = 7
  
  // rotation in degrees
  angleMode(DEGREES);
  rotate(tilt_value);

 // head
  noStroke();
  fill(fg_color3);
  ellipse(centerX, 0, headSize, headSize);

  // 2 black eyebrows
  fill(0);
  let eyebrowHeight = 3;
  let eyebrowWidth = 6;
  rect(centerX-eyebrowWidth/2, Iy-eyebrowHeight-1, eyebrowWidth, eyebrowHeight);
  rect(centerX-eyebrowWidth/2, Iy-eyebrowHeight-1, eyebrowWidth, eyebrowHeight).rotate(45);

  // beak
  fill(255, 204, 0);
  let beakWidth = 9;
  let beakHeight = 5;
  triangle(centerX-beakWidth/2, Iy+MouthDrop-beakHeight, centerX+beakWidth/2, Iy+MouthDrop-beakHeight, centerX, Iy+MouthDrop);
  rect(centerX-beakWidth/2, Iy+MouthDrop-beakHeight, beakWidth, beakHeight);

  // white eyes
  fill(bg_color3);
  ellipse(centerX - distactBetweenEyes, Iy, eyeSize+3);
  ellipse(centerX + distactBetweenEyes, Iy, eyeSize+3);

  // black pupils
  fill(0);
  let pupilSize = 2;
  ellipse(centerX - distactBetweenEyes, Iy, pupilSize);
  ellipse(centerX + distactBetweenEyes, Iy, pupilSize);

  // mouth
  noFill();
  stroke(0);
  strokeWeight(1);
  arc(centerX, Iy + MouthDrop, distactBetweenEyes, mouth_value, 0, PI);
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
