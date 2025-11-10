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
}

