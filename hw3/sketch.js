let faceColorR = 255;
let faceColorG = 224;
let faceColorB = 189;
let wink = false;
let x1 = 100;
let y1 = 80;
let a = 500;
let b = 120;
let c = 400;
let d = 300;
let s = 8;

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(230);

  stroke(255, 215, 0);
  strokeWeight(2);

  x1 = x1 + (mouseX - x1) * 0.05;
  y1 = y1 + (mouseY - y1) * 0.05;

  line(x1 - s, y1, x1 + s, y1);
  line(x1, y1 - s, x1, y1 + s);
  line(x1 - s * 0.7, y1 - s * 0.7, x1 + s * 0.7, y1 + s * 0.7);
  line(x1 - s * 0.7, y1 + s * 0.7, x1 + s * 0.7, y1 - s * 0.7);

  line(a - 7, b, a + 7, b);
  line(a, b - 7, a, b + 7);
  line(c - 6, d, c + 6, d);
  line(c, d - 6, c, d + 6);

  fill(faceColorR, faceColorG, faceColorB);
  stroke(220, 180, 150);
  strokeWeight(2);
  ellipse(300, 210, 180, 220);

  fill(40);
  noStroke();
  arc(300, 160, 210, 190, PI, TWO_PI);

  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(260, 200, 38, 24);

  if (wink == true) {
    line(330, 195, 350, 195);
  } else {
    ellipse(340, 200, 38, 24);
  }

  stroke(120, 80, 60);
  strokeWeight(2);
  line(298, 210, 293, 240);
  line(293, 240, 305, 238);

  noFill();
  stroke(180, 50, 50);
  strokeWeight(3);
  arc(300, 260, 70, 30, 0, PI);

  fill(20);
  stroke(0);
  strokeWeight(1);
  rect(230, 310, 140, 120, 20);
}

function mousePressed() {
  faceColorR = random(230, 255);
  faceColorG = random(180, 220);
  faceColorB = random(160, 200);
}

function keyPressed() {
  if (wink == false) {
    wink = true;
  } else {
    wink = false;
  }
}
