function setup() {
  createCanvas(600, 600);
  noLoop();
}

function draw() {
  background(235, 235, 240);

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

  noStroke();
  fill(255, 255, 255, 50);
  rect(0, 280, width, 14);
  rect(0, 330, width, 22);
  rect(0, 390, width, 10);
  rect(0, 430, width, 18);

  noFill();
  stroke(40);
  strokeWeight(3.2);
  rect(20, 20, width - 40, height - 40);
}
