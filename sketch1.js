function setup() {
  let canvas = createCanvas(600, 400);
  background(255, 200, 90);
  let container = document.getElementById('container');
  container.insertBefore(canvas.elt, container.firstChild);
}

let taille = 1;
let epaisseur = 0.3;

function draw() {
  noFill()
  stroke(255, 90, 90)
  strokeWeight(epaisseur)
  circle(300, 400, taille);
  taille = taille *1.3;
  epaisseur = epaisseur *1.22;
}