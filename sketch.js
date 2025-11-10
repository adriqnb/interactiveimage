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
  middleSquare();
}

function middleSquare(){
  let x = map(mouseX, 0, 660, 50, 255);
  let y = map(mouseY, 0, 655, 50, 255);

  noStroke();
  fill(x,0,y,150);
  rect(170,179,272,285);
}

