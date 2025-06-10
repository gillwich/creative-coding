let buildings = [];
let stars = [];

function setup() {
  let canvas = createCanvas(600, 400);
  let container = document.getElementById('container');
  container.insertBefore(canvas.elt, container.firstChild);
  
  let x = 0;
  while (x < width) {
    let bWidth = random(40, 80);
    let bHeight = random(100, 300);
    buildings.push(new Building(x, height - bHeight, bWidth, bHeight));
    x += bWidth + random(5, 15);
  }

  for (let i = 0; i < 100; i++) {
    stars.push({
      x: random(width),
      y: random(height / 2),
      size: random(1, 3),
      brightness: random(150, 255),
      twinkleSpeed: random(0.01, 0.05),
      phase: random(TWO_PI),
    });
  }
}

function draw() {
  background(10, 10, 30);

  noStroke();
  for (let star of stars) {
    let b = star.brightness + 50 * sin(frameCount * star.twinkleSpeed + star.phase);
    fill(255, 255, 200, constrain(b, 150, 255));
    circle(star.x, star.y, star.size);
  }

  for (let b of buildings) {
    b.display();
  }
}

class Building {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.windowCols = floor(this.w / 15);
    this.windowRows = floor(this.h / 20);
    this.windows = [];

    for (let i = 0; i < this.windowCols; i++) {
      this.windows[i] = [];
      for (let j = 0; j < this.windowRows; j++) {
        this.windows[i][j] = random() < 0.5; 
      }
    }
  }

  display() {
    noStroke();
    fill(40, 40, 60);
    rect(this.x, this.y, this.w, this.h);

    let windowW = this.w / this.windowCols * 0.6;
    let windowH = this.h / this.windowRows * 0.6;
    let paddingX = (this.w / this.windowCols - windowW) / 2;
    let paddingY = (this.h / this.windowRows - windowH) / 2;

    for (let i = 0; i < this.windowCols; i++) {
      for (let j = 0; j < this.windowRows; j++) {
        if (random() < 0.005) {
          this.windows[i][j] = !this.windows[i][j];
        }

        if (this.windows[i][j]) {
          fill(255, 255, 180, random(150, 255));
        } else {
          fill(20, 20, 30, 150);
        }
        let wx = this.x + i * (this.w / this.windowCols) + paddingX;
        let wy = this.y + j * (this.h / this.windowRows) + paddingY;
        rect(wx, wy, windowW, windowH, 2);
      }
    }
  }
}
