function setup() {
  createCanvas(600, 400);
  noStroke();
}

function draw() {
  background(240);

  // Define eye positions and sizes
  drawEye(200, 200, 80);
  drawEye(400, 200, 80);
}

function drawEye(x, y, radius) {
  // Draw eyeball
  fill(255);
  ellipse(x, y, radius * 2, radius * 2);

  // Vector from eye center to mouse
  let dx = mouseX - x;
  let dy = mouseY - y;
  let angle = atan2(dy, dx);

  // Constrain pupil distance
  let maxDist = radius * 0.4; // stays inside eyeball
  let pupilX = x + cos(angle) * maxDist;
  let pupilY = y + sin(angle) * maxDist;

  // Draw pupil
  fill(0);
  ellipse(pupilX, pupilY, radius * 0.5, radius * 0.5);
}
