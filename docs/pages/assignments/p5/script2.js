let angle = 0;
let animationStarted = false;

function setup() {
  let canvas = createCanvas(400, 400);
  canvas.parent('sketch-holder');
  b = createButton("Start animation");
  b.parent('sketch-holder');
  b.mousePressed(animationStarted);
}

function draw() {
  background(240);

  if (animationStarted) {
    angle += 0.02;
  }

  yellowTriangle();
  redTriangle();
  blackTriangle();
  darkTriangle();
  lightTriangle();
}

function mouseClicked() {
  animationStarted = true;
}

function yellowTriangle() {
  const y = color(255, 204, 0);
  fill(y);
  let x1 = 100 + 50 * cos(angle);
  let y1 = 300 + 50 * sin(angle);
  let x2 = -50 + 50 * cos(angle);
  let y2 = 200 + 50 * sin(angle);
  let x3 = -50 + 50 * cos(angle);
  let y3 = 400 + 50 * sin(angle);
  triangle(x1, y1, x2, y2, x3, y3);

  noStroke();
}

function redTriangle() {
  const r = color(245, 66, 66);
  fill(r);
  let x1 = 150 + 50 * cos(angle);
  let y1 = 250 + 50 * sin(angle);
  let x2 = 450 + 50 * cos(angle);
  let y2 = -50 + 50 * sin(angle);
  let x3 = 450 + 50 * cos(angle);
  let y3 = 550 + 50 * sin(angle);
  triangle(x1, y1, x2, y2, x3, y3);
  noStroke();
}

function blackTriangle() {
  const b = color(46);
  fill(b);
  let x1 = -50 + 50 * cos(angle);
  let y1 = 200 + 50 * sin(angle);
  let x2 = 150 + 50 * cos(angle);
  let y2 = -10 + 50 * sin(angle);
  let x3 = 150 + 50 * cos(angle);
  let y3 = 400 + 50 * sin(angle);
  triangle(x1, y1, x2, y2, x3, y3);
  noStroke();
}

function darkTriangle() {
  const d = color(180);
  fill(d);
  let x1 = 450 + 50 * cos(angle);
  let y1 = -50 + 50 * sin(angle);
  let x2 = 300 + 50 * cos(angle);
  let y2 = 100 + 50 * sin(angle);
  let x3 = 150 + 50 * cos(angle);
  let y3 = -50 + 50 * sin(angle);
  triangle(x1, y1, x2, y2, x3, y3);
  noStroke();
}

function lightTriangle() {
  const d = color(210);
  fill(d);
  let x1 = 150 + 50 * cos(angle);
  let y1 = 450 + 50 * sin(angle);
  let x2 = 150 + 50 * cos(angle);
  let y2 = 250 + 50 * sin(angle);
  let x3 = 350 + 50 * cos(angle);
  let y3 = 450 + 50 * sin(angle);
  triangle(x1, y1, x2, y2, x3, y3);
  noStroke();
}
