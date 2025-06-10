let ripples = [];

function setup() {
  let canvas = createCanvas(600, 400);
  noFill();
  stroke(2);
  let container = document.getElementById('container');
  container.insertBefore(canvas.elt, container.firstChild);
}

function draw() {
  background(13, 127, 158);

  for (let i = ripples.length - 1; i >= 0; i--) {
    ripples[i].update();
    ripples[i].display();

    if (ripples[i].isFinished()) {
      ripples.splice(i, 1);
    }
  }
}

function mousePressed() {
  ripples.push(new Ripple(mouseX, mouseY));
}


class Ripple {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.radius = 0;
    this.alpha = 255;
    this.growth = 2;     
    this.fadeSpeed = 2;  
  }

  update() {
    this.radius += this.growth;
    this.alpha -= this.fadeSpeed;
  }

  display() {
    stroke(255, this.alpha);
    ellipse(this.x, this.y, this.radius * 2);
  }

  isFinished() {
    return this.alpha <= 0;
  }
}
