function setup() {
    var canvas = createCanvas(400, 400);
    canvas.parent('sketch-holder');
  }
  
  function draw() {
    background(240);
    yellowTriangle();
    redTriangle();
    blackTriangle();
    darkTriangle();
    lightTriangle();
  }
  
  function yellowTriangle() {
    const y = color(255, 204, 0);
    fill(y);
    triangle(100, 300, 0, 400, 0, 200);
  
    noStroke();
  }
  function redTriangle() {
    const r = color(245, 66, 66);
    fill(r);
    triangle(150, 250, 400, 0, 400, 500);
    noStroke();
  }
  function blackTriangle() {
    const b = color(46);
    fill(b);
    triangle(-50, 200, 150, -10, 150, 400);
    noStroke();
  }
  function darkTriangle() {
    const d = color(180);
    fill(d);
    triangle(400, 0, 300, 100, 200, 0);
    noStroke();
  }
  function lightTriangle() {
    const d = color(210);
    fill(d);
    triangle(150, 400, 150, 250, 300, 400);
    noStroke();
  }
  