let img, ctx, o;
let oscType = 'triangle';

// volume slider
let volumeSlider;
let masterGain = null;

// ADSR-like envelope (seconds)
const A_TIME = 1; // fast attack
const D_TIME = 1; // decay to sustain
const S_LEVEL = 1; // sustain level while alive (50%)
const R_TIME = 0.01; // fast release on death

let pullBack = 1;
let mouseXorig;
let color;
let mouseYorig;
function preload()
{
img = loadImage('assets/interactive.jpg');
}

function setup() {
  createCanvas(660, 655);

  // Volume slider
  volumeSlider = createSlider(0, 1, 0.5, 0.01);
  volumeSlider.position(10, height + 10);
  volumeSlider.style('width', '100px');

  ctx = ctx || new AudioContext();

  if (ctx.state === 'suspended') ctx.resume();

  o = ctx.createOscillator();
  const g = ctx.createGain();

  let freq = map(mouseX, 0, 660, 100, 1000);
  o.type = oscType;
  o.frequency.value = freq;
  o.connect(g);
  g.connect(ctx.destination);

  o.start();
}

function draw() {
  
  image(img, 0, 0);
  updateSound();
  middleSquare();

  // Keep master volume synced to slider value
  if (masterGain && volumeSlider) {
    masterGain.gain.value = volumeSlider.value();
  }

  // display mouse coordinates
  fill(255);
  noStroke();
  rect(0, height - 20, 100, 20);
  fill(0);
  text("X: " + mouseX + " Y: " + mouseY, 10, height - 5);
  fill('black');//black triangle
  triangle(29,323,172,179,168,464);
  
  
  
  
  fill(231,219,119);//yellow triangle
  triangle(294,597,368,598,331,636);

  fill(223,229,225);//white triangle
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
  if (mouseX > 20 && mouseX < 332 && mouseY > 10 && mouseY < 325 && mouseY < (-315 / 312) * (mouseX - 645) + 10) {
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
  if (mouseX > 332 && mouseX < 645 && mouseY > 10 && mouseY < 325 && mouseY < (315 / 313) * (mouseX - 20) + 10) {
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
  if (mouseX > 20 && mouseX < 332 && mouseY > 325 && mouseY < 645 && mouseY > (315 / 312) * (mouseX - 645) + 645) {
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
  if (mouseX > 332 && mouseX < 645 && mouseY > 325 && mouseY < 645 && mouseY > (-315 / 313) * (mouseX - 20) + 645) {
    triangle(645, 645, 645, 332, 332, 645);

    cursor(HAND);

    if (mouseIsPressed){
      fill(255,255,255,150);
      triangle(645, 645, 645, 332, 332, 645);

      oscType = 'triangle';
    }
  }
  // ---------red triangle----------
  fill(162,32,6);
  if(pullBack === 0 && mouseX >= mouseXorig)
    triangle((193-((mouseX-mouseXorig)/5)),160,(332),20,470+((mouseX-mouseXorig)/5),161);
  else
    triangle(193,160,332,20,470,161);
  //---------------------------------
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
function mousePressed(){
    pullBack = 0;
    mouseXorig = mouseX;
  }
function mouseReleased(){
  pullBack = 1;
}

function updateSound() {
  let freq = map(mouseX, 0, 660, 100, 1000);

  o.type = oscType;
  o.frequency.value = freq;
}