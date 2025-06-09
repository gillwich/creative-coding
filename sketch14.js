function setup() {
  createCanvas(600, 600);
  background('#f06555'); // Soft red background
  noFill();
  stroke(50, 0, 80, 80); // Semi-transparent purple
  strokeWeight(1.5);

  let radius = 150;
  let numPoints = 7; // Number of points in the radial pattern

  translate(width / 2, height / 2);

  // Draw transparent circles around the center
  for (let i = 0; i < numPoints; i++) {
    let angle = TWO_PI / numPoints * i;
    let x = radius * cos(angle);
    let y = radius * sin(angle);
    
    fill(50, 0, 80, 50); // Transparent fill
    noStroke();
    circle(x, y, 100);
  }

  // Draw inner web of lines
  stroke(50, 0, 80, 80);
  noFill();
  beginShape();
  for (let i = 0; i < numPoints; i++) {
    let angle = TWO_PI / numPoints * i;
    let x = radius * cos(angle);
    let y = radius * sin(angle);
    vertex(x, y);
  }
  endShape(CLOSE);

  // Draw more inner connections
  for (let i = 0; i < numPoints; i++) {
    let angle1 = TWO_PI / numPoints * i;
    let x1 = radius * cos(angle1);
    let y1 = radius * sin(angle1);
    for (let j = i + 1; j < numPoints; j++) {
      let angle2 = TWO_PI / numPoints * j;
      let x2 = radius * cos(angle2);
      let y2 = radius * sin(angle2);
      line(x1, y1, x2, y2);
    }
  }

  // Draw central overlapping shape
  for (let r = radius * 0.6; r > 10; r *= 0.7) {
    beginShape();
    for (let i = 0; i < numPoints; i++) {
      let angle = TWO_PI / numPoints * i;
      let x = r * cos(angle);
      let y = r * sin(angle);
      vertex(x, y);
    }
    endShape(CLOSE);
  }
}
