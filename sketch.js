let img;
function preload()
{
img = loadImage('assets/interactive.jpg');
}

function setup() {
  createCanvas(660, 655);

  image(img, 0, 0);
}

function draw() {
  
  image(img, 0, 0);

  // display mouse coordinates
  fill(255);
  noStroke();
  rect(0, height - 20, 100, 20);
  fill(0);
  text("X: " + mouseX + " Y: " + mouseY, 10, height - 5);

  // highlight triangles on mouseover
  noStroke();
  fill(255, 0, 0, 100);
  // top left triangle
  if (mouseX > 20 && mouseX < 332 && mouseY > 10 && mouseY < 325 && mouseY < (mouseX - 20) * (315 / 312) + 10) {
    triangle(20, 10, 332, 10, 20, 325);
  }
  // top right triangle
  fill(0, 0, 255, 100);
  if (mouseX > 332 && mouseX < 645 && mouseY > 10 && mouseY < 325 && mouseY < (-315 / 313) * (mouseX - 645) + 10) {
    triangle(645, 10, 645, 325, 332, 10);
  }
  // bottom left triangle
  fill(0, 255, 0, 100);
  if (mouseX > 20 && mouseX < 332 && mouseY > 325 && mouseY < 645 && mouseY > (-315 / 312) * (mouseX - 20) + 645) {
    triangle(20, 645, 332, 645, 20, 325);
  }
  // bottom right triangle
  fill(255, 255, 0, 100);
  if (mouseX > 332 && mouseX < 645 && mouseY > 325 && mouseY < 645 && mouseY > (315 / 313) * (mouseX - 645) + 645) {
    triangle(645, 645, 645, 332, 332, 645);
  }
}

// top left triangle: M(20, 10) R(332, 10) L(20, 325)
// top right triangle M(645, 10) R(645, 325) L(332, 10)
// bottom left triangle M(20, 645) R(332, 645) L(20, 325)
// bottom right triangle M(645, 645) R(645, 332) L(332, 645)