let particles = [];
let gravity;

function setup() {
  createCanvas(600, 600);
  gravity = createVector(0, 0.05); // constant downward acceleration
  background(10);
}

function draw() {
  background(10, 10, 30, 25); // semi-transparent for trails

  for (let i = particles.length - 1; i >= 0; i--) {
    let p = particles[i];
    p.update();
    p.show();

    if (p.finished()) {
      particles.splice(i, 1);
    }
  }
}

// Click to launch a firework
function mousePressed() {
  for (let i = 0; i < 100; i++) {
    particles.push(new Particle(mouseX, mouseY));
  }
}

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = p5.Vector.random2D(); // random direction
    this.vel.mult(random(1, 5));     // random speed
    this.acc = gravity.copy();
    this.lifespan = 255;
    this.color = color(random(255), random(255), random(255));
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0); // clear acceleration
    this.lifespan -= 4;
  }

  finished() {
    return this.lifespan < 0;
  }

  show() {
    noStroke();
    fill(red(this.color), green(this.color), blue(this.color), this.lifespan);
    ellipse(this.pos.x, this.pos.y, 6);
  }
}
