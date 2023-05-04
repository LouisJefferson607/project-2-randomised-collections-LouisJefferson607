  /*
  * This file should contain code that draws your faces.
  *
  * Each function takes parameters and draws a face that is within
  * the bounding box (-10, -10) to (10, 10).
  *
  * These functions are used by your final arrangement of faces as well as the face editor.
  */

  /*
  * eye_value is an integer number of eyes: either 0, 1, 2, or 3
  * mouth_value is how open the mouth is and should generally range from 0.5 to 10
  */
  function cookieFace(eye_value, mouth_value, chocolate_value, NS, chocolate_size) {
    let cookie_colors = [
      {color: color(132, 86, 60), weight: 5},
      {color: color(217, 190, 145), weight: 3},
      {color: color(231, 206, 150), weight: 2},
      {color: color(238, 224, 177), weight: 1},
      {color: color(37, 32, 27), weight: 0.1, burnt: true},
      {color: color(255, 255, 255), weight: 0.01, uncooked: true},
    ];

    // Calculate the total weight of all the colors
    let total_weight = 0;
    for (let i = 0; i < cookie_colors.length; i++) {
      total_weight += cookie_colors[i].weight;
    }

    // Randomly select a color based on its weight
    let random_weight = random(0, total_weight);
    let random_cookie_color;
    for (let i = 0; i < cookie_colors.length; i++) {
      random_weight -= cookie_colors[i].weight;
      if (random_weight <= 0) {
        random_cookie_color = cookie_colors[i].color;
        if (cookie_colors[i].uncooked) {
          fill(255); // uncooked color
        } else if (cookie_colors[i].burnt) {
          fill(37, 32, 27); // burnt color
        } else {
          fill(random_cookie_color); // normal color
        }
        break;
      }
    }
  //Gets random noise seed so that all cookies are drawn differently
  //Draws cookies shadow using Perlin noise
  noiseSeed(NS)
    angleMode(RADIANS)
  noStroke()
    let shadow_offset = 1;
    let shadow_color = color(0, 0, 0, 200);
    push();
    translate(shadow_offset, shadow_offset);
    fill(shadow_color);
    beginShape();
    let noiseMax = 0.5; // set maximum noise value to 0.5
    for (let angle = 0; angle <= 360; angle += 10) {
      let xOff = map(cos(radians(angle)), -1, 1, 0, noiseMax);
      let yOff = map(sin(radians(angle)), -1, 1, 0, noiseMax);
      let noiseVal = noise(xOff * 2, yOff * 2); // multiply xOff and yOff by 2 for a smaller noise size
      let radius = 5 + (noiseVal * 5); // set radius range to 5-10 for a smaller cookie size
      let x = radius * cos(radians(angle));
      let y = radius * sin(radians(angle));
      curveVertex(x, y);
    }
    endShape(CLOSE);
    //Draws cookies using Perlin noise
    pop();
    beginShape();
    stroke(1);
    noiseMax = 0.5; // set maximum noise value to 0.5
    for (let angle = 0; angle <= 360; angle += 10) {
      let xOff = map(cos(radians(angle)), -1, 1, 0, noiseMax);
      let yOff = map(sin(radians(angle)), -1, 1, 0, noiseMax);
      let noiseVal = noise(xOff*2, yOff*2); // multiply xOff and yOff by 2 for a smaller noise size
      let radius = 5 + (noiseVal * 5); // set radius range to 5-10 for a smaller cookie size
      let x = radius * cos(radians(angle));
      let y = radius * sin(radians(angle));
      curveVertex(x, y);
    }
    endShape(CLOSE);

    
    // If cookie is brown color , choc chip cookies are white. Otherise they are breown
    noStroke();
    ;
    if (random_cookie_color !== cookie_colors[0].color) {
      fill(37, 32, 27); // chocolate color
    } else {
      fill(237, 230, 214); // white color for chocolate chips if the cookie is the first color in the array
    }
    
    //Draws choc chips
    for (let i = 0; i < chocolate_value; i++) {
      let x = random(-5, 5);
      let y = random(-5, 5);
      ellipse(x, y, chocolate_size, chocolate_size);
    }
    
    
    // draw eyes
    stroke(1);
    fill(255);
    ellipse(-3, -2, eye_value, eye_value);
    ellipse(3, -2, eye_value, eye_value);
    
    // draw black pupils in the eyes
    fill(0);
    let pupil_size = eye_value * 0.5; // size of the pupil
    let pupil_offset = eye_value * 0.2; // offset of the pupil from the center of the eye
    ellipse(-3, -2, pupil_size, pupil_size);
    ellipse(3, -2, pupil_size, pupil_size);
    
    // draw two small white circles inside each pupil relative to eyes
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
