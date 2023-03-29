function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  angleMode(DEGREES);
}

function draw() {
  translate(width / 2, height / 2);
  rotate(-90);


  let hr = hour();
  let mn = minute();
  let sc = second();

  stroke(255);
  fill(map(mouseX, 0, width, 150, 255), 120, 255);
  let end1 = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, end1);


  fill(map(mouseX, 0, width, 150, 255), 200, 255);
  let end2 = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, end2);


  fill(map(mouseX, 0, width, 255, 150), 60, 255);
  let end3 = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, end3);

}