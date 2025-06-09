oldX = 0;
oldY = 0;

function setup() {
  let canvas = createCanvas(400, 400);
  colorMode(HSL, 360, 100, 100); 
  noStroke();
  let container = document.getElementById('container');
  container.insertBefore(canvas.elt, container.firstChild);
}

let hue = 0; 

function draw() {
  background(hue, 60, 50); 
  hue = (hue + 0.1) % 360; 
  
  fill((hue + 30) % 360, 60, 50);
  circle(mouseX, mouseY, 50);
}



function keyPressed(){
  if(key == "s"){
   save("drawing.png"); 
  }
}