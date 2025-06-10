function setup() {
  let canvas = createCanvas(600, 400);
  noStroke();
  let container = document.getElementById('container');
  container.insertBefore(canvas.elt, container.firstChild);
}

function draw() {
  background(240);

  drawEye(200, 200, 80);
  drawEye(400, 200, 80);
}

function drawEye(x, y, radius) {
  fill(255);
  ellipse(x, y, radius * 2, radius * 2);

  let dx = mouseX - x;
  let dy = mouseY - y;
  let angle = atan2(dy, dx);

  let maxDist = radius * 0.4;
  let pupilX = x + cos(angle) * maxDist;
  let pupilY = y + sin(angle) * maxDist;

  fill(0);
  ellipse(pupilX, pupilY, radius * 0.5, radius * 0.5);
}
