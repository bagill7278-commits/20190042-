let cc1, cc2, cc3, cc4;

function setup() {
  createCanvas(600, 600);
  colorMode(RGB);
  cc1 = color(255, 150, 150);
  cc2 = color(180, 220, 255);
  cc3 = color(255, 200, 0);
  cc4 = color(120, 230, 180);
}

function draw() {
  background(235, 235, 240);

  let t = frameCount * 0.02;

  noStroke();
  fill(255, 150, 150, 180);
  rect(30, 90, 180, 260);

  fill(200, 220, 255, 170);
  rect(160, 50, 140, 340);

  fill(255, 230, 150, 190);
  rect(350, 120, 200, 300);

  fill(150, 200, 240, 120);
  rect(100, 250, 220, 200);

  fill(255, 180, 230, 130);
  rect(320, 40, 150, 180);

  fill(180, 255, 180, 140);
  rect(420, 260, 160, 260);

  fill(255, 255, 255, 150);
  ellipse(200, 180, 220, 220);

  fill(200, 120, 220, 170);
  ellipse(330, 310, 260, 260);

  fill(120, 190, 255, 170);
  ellipse(470, 140, 160, 160);

  fill(255, 200, 120, 130);
  ellipse(150, 360, 180, 180);

  fill(90, 90, 90, 130);
  triangle(80, 520, 260, 410, 140, 300);

  fill(255, 200, 0, 160);
  triangle(380, 90, 540, 60, 480, 240);

  fill(50, 50, 50, 100);
  triangle(260, 450, 390, 520, 180, 560);

  fill(255, 255, 255, 50);
  rect(0, 280, width, 14);
  rect(0, 330, width, 22);
  rect(0, 390, width, 10);
  rect(0, 430, width, 18);

  let mx = 300 + sin(t) * 110;
  let my = 300 + cos(t * 1.3) * 90;
  let sz = 120 + sin(t * 2.1) * 50;
  let ccMix = lerpColor(cc1, cc2, (sin(t) + 1) / 2);
  fill(ccMix);
  ellipse(mx, my, sz, sz);

  let mx2 = 300 + sin(t * 1.4) * 150;
  let my2 = 320 + cos(t * 0.9) * 70;
  let sz2 = 80 + sin(t * 1.7) * 40;
  fill(lerpColor(cc2, cc3, (cos(t * 0.7) + 1) / 2));
  ellipse(mx2, my2, sz2, sz2);

  let mx3 = 260 + sin(t * 1.1) * 100;
  let my3 = 350 + sin(t * 1.5) * 60;
  let sz3 = 60 + cos(t * 2.5) * 30;
  fill(lerpColor(cc3, cc4, (sin(t * 1.3) + 1) / 2));
  rect(mx3 - 20, my3 - 20, sz3, sz3);

  let mx4 = 340 + cos(t * 0.8) * 130;
  let my4 = 260 + sin(t * 0.6) * 90;
  let sz4 = 40 + sin(t * 3) * 20;
  fill(lerpColor(cc4, cc1, (cos(t * 1.6) + 1) / 2));
  ellipse(mx4, my4, sz4 * 1.3, sz4);

  let tx = mx + cos(t * 1.8) * 75;
  let ty = my + sin(t * 1.6) * 95;
  fill(cc3);
  triangle(tx, ty, tx + 35, ty + 70, tx - 35, ty + 70);

  let tx2 = mx2 + sin(t * 2.3) * 50;
  let ty2 = my2 + cos(t * 1.9) * 60;
  fill(lerpColor(cc2, cc4, (sin(t * 0.9) + 1) / 2));
  triangle(tx2, ty2, tx2 + 25, ty2 + 50, tx2 - 25, ty2 + 50);

  let m = millis() * 0.001;
  let mx5 = 300 + sin(m * 2.2) * 180;
  let my5 = 300 + cos(m * 1.4) * 150;
  let sz5 = 50 + sin(m * 3.1) * 25;
  let col5 = lerpColor(cc1, cc4, (sin(m * 1.3) + 1) / 2);
  fill(col5);
  ellipse(mx5, my5, sz5, sz5);

  noFill();
  stroke(40);
  strokeWeight(3.2);
  rect(20, 20, width - 40, height - 40);
}
