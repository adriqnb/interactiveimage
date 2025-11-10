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
}

// top left triangle: M(20, 10) R(332, 10) L(20, 325)
// top right triangle M(645, 10) R(645, 325) L(332, 10)
// bottom left triangle M(20, 645) R(332, 645) L(20, 325)
// bottom right triangle M(645, 645) R(645, 332) L(332, 645)