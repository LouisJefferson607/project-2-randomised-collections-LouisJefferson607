[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/TMOxyln0)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11032197&assignment_repo_type=AssignmentRepo)
## 2023 MDDN342 Assignment 2: Randomised Collections
**This is where you talk about your project!**

This projects code defines a function called cookieFace that takes in four parameters: eye_value(continuous), mouth_value(continuous), chocolate_value(discrete), NS, and chocolate_size(discrete). The function is responsible for drawing a face within the bounding box (-10, -10) to (10, 10). The function starts by selecting a random cookie color from an array of cookie colors. It then uses Perlin noise to draw the shadow and the cookie. If the cookie is brown, it draws white chocolate chips on the cookie with a specified size and value and if it is light brown it draws brown chcoc chips. It then draws two eyes with a random size and location on the cookie face, followed by black pupils that scale relatice to the eye size.


These are the paramaters from the arrangment code where you can see the bounds, min, max:

        let eye_value = int(random(3, 8));
        let mouth_value = random(0, 150);
        let chocolate_value = int(random(0, 14));
        let height_cook = int(random(canvasHeight / 2 - 140, canvasHeight / 2 + 140));
        let width_cook = int(random(canvasWidth /  2 - 250, canvasWidth / 2 + 250));
        let chocolate_size = int(random(1, 2));
