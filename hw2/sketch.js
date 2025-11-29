function setup() {
  createCanvas(600, 400);
  background(240);

  noStroke();
  fill(200, 220, 255, 120);
  ellipse(300, 200, 400, 400);
  fill(180, 200, 250, 80);
  ellipse(300, 200, 500, 500);

  stroke(255, 215, 0);
  strokeWeight(2);

  function star(x, y, size) {
    line(x - size, y, x + size, y);
    line(x, y - size, x, y + size);
    line(x - size * 0.7, y - size * 0.7, x + size * 0.7, y + size * 0.7);
    line(x - size * 0.7, y + size * 0.7, x + size * 0.7, y - size * 0.7);
  }
  star(500, 100, 8);
  star(100, 80, 6);
  star(550, 200, 10);
  star(450, 300, 7);
  star(150, 250, 9);

  fill(250, 220, 190);
  stroke(220, 180, 150);
  strokeWeight(2);
  ellipse(300, 210, 180, 220);

  fill(40, 40, 40);
  noStroke();
  arc(300, 160, 210, 190, PI, TWO_PI);
  arc(260, 150, 80, 80, PI + QUARTER_PI, TWO_PI);
  fill(255);
  stroke(0);
  strokeWeight(2);
  ellipse(260, 200, 38, 24);
  fill(0);
  ellipse(260, 200, 10, 10);
  stroke(0);
  strokeWeight(3);
  line(330, 190, 350, 195);
  line(332, 195, 348, 200);
  stroke(120, 80, 60);
  strokeWeight(2);
  line(298, 210, 293, 240);
  line(293, 240, 305, 238);
  noFill();
  stroke(180, 50, 50);
  strokeWeight(3);
  arc(300, 260, 70, 30, 0, PI);
  stroke(120, 80, 60);
  strokeWeight(1.5);
  line(280, 250, 270, 255);

  fill(250, 220, 190);
  noStroke();
  rect(370, 240, 40, 80, 15);
  ellipse(370, 260, 45, 45);
  fill(20);
  stroke(0);
  strokeWeight(1.5);
  rect(220, 310, 170, 120, 30);
}
