function setup() {
  createCanvas(600, 600);
  fill(9, 26, 51);
}

function draw() {
  background(200, 220, 255);

  let noiseScale = 0.01;
  let baseHeight = height;
  let maxMountainHeight = height * 0.7;

  for (let x = 0; x < width; x++) {
    let noiseVal = noise(x * noiseScale);
    let mountainHeight = noiseVal * maxMountainHeight;
    rect(x, baseHeight - mountainHeight, 1, mountainHeight);
  }
}


