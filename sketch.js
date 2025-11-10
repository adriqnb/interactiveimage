let img;
function preload()
{
img = loadImage('assets/interactive.jpg');
}

function setup() {
  createCanvas(660, 655);

}

function draw() {
  
  image(img, 0, 0);
  middleSquare();

  // display mouse coordinates
  fill(255);
  noStroke();
  rect(0, height - 20, 100, 20);
  fill(0);
  text("X: " + mouseX + " Y: " + mouseY, 10, height - 5);
  fill('black');
  triangle(29,323,172,179,168,464);
  fill(162,32,6);
  triangle(193,160,332,20,470,161);
  fill(231,219,119);
  triangle(294,597,368,598,331,636);
  fill(223,229,225);
  triangle(571,264,574,387,635,325);
}

// top left triangle: M(20, 10) R(332, 10) L(20, 325)
// top right triangle M(645, 10) R(645, 325) L(332, 10)
// bottom left triangle M(20, 645) R(332, 645) L(20, 325)
// bottom right triangle M(645, 645) R(645, 332) L(332, 645)

function middleSquare(){
  let x = map(mouseX, 0, 660, 50, 255);
  let y = map(mouseY, 0, 655, 50, 255);

  noStroke();
  fill(x,0,y,150);
  rect(170,179,272,285);
}


