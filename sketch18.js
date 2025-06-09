function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(30);
  stroke(255);
  noFill();

  let amplitude = map(mouseY, 0, height, 50, 200);
  let frequency = map(mouseX, 0, width, 0.01, 0.1);

  beginShape();
  for (let x = 0; x < width; x++) {
    let y = height / 2 + amplitude * sin(TWO_PI * frequency * x + frameCount * 0.05);
    vertex(x, y);
  }
  endShape();
}
