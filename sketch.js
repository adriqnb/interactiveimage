let img, ctx, o;
let oscType = 'triangle';

// ADSR-like envelope (seconds)
const A_TIME = 1; // fast attack
const D_TIME = 1; // decay to sustain
const S_LEVEL = 1; // sustain level while alive (50%)
const R_TIME = 0.01; // fast release on death

function preload()
{
img = loadImage('assets/interactive.jpg');
}

function setup() {
  createCanvas(660, 655);

  ctx = ctx || new AudioContext();

  if (ctx.state === 'suspended') ctx.resume();

  const o = ctx.createOscillator();
  const g = ctx.createGain();

  o.type = oscType;
  o.frequency.value = 260;
  o.connect(g);
  g.connect(ctx.destination);
  
  o.start();
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

  // display current oscillator type
  fill(255);
  noStroke();
  rect(width - 150, height - 20, 150, 20);
  fill(0);
  text("Waveform: " + oscType, width - 140, height - 5);

  // highlight triangles on mouseover
  noStroke();
  fill(255, 0, 0, 100);
  // top left triangle
  if (mouseX > 20 && mouseX < 332 && mouseY > 10 && mouseY < 325 && mouseY < (mouseX - 20) * (315 / 312) + 10) {
    triangle(20, 10, 332, 10, 20, 325);

    cursor(HAND);

    if (mouseIsPressed){
      fill(255,255,255,150);
      triangle(20, 10, 332, 10, 20, 325);

      oscType = 'sine';
    }
  }
  // top right triangle
  fill(0, 0, 255, 100);
  if (mouseX > 332 && mouseX < 645 && mouseY > 10 && mouseY < 325 && mouseY < (-315 / 313) * (mouseX - 645) + 10) {
    triangle(645, 10, 645, 325, 332, 10);

    cursor(HAND);

    if (mouseIsPressed){
      fill(255,255,255,150);
      triangle(645, 10, 645, 325, 332, 10);

      oscType = 'square';
    }
  }
  // bottom left triangle
  fill(0, 255, 0, 100);
  if (mouseX > 20 && mouseX < 332 && mouseY > 325 && mouseY < 645 && mouseY > (-315 / 312) * (mouseX - 20) + 645) {
    triangle(20, 645, 332, 645, 20, 325);

    cursor(HAND);

    if (mouseIsPressed){
      fill(255,255,255,150);
      triangle(20, 645, 332, 645, 20, 325);

      oscType = 'sawtooth';
    }
  }
  // bottom right triangle
  fill(255, 255, 0, 100);
  if (mouseX > 332 && mouseX < 645 && mouseY > 325 && mouseY < 645 && mouseY > (315 / 313) * (mouseX - 645) + 645) {
    triangle(645, 645, 645, 332, 332, 645);

    cursor(HAND);

    if (mouseIsPressed){
      fill(255,255,255,150);
      triangle(645, 645, 645, 332, 332, 645);

      oscType = 'triangle';
    }
  }
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


