function setup() {
  let canvas = createCanvas(400, 400);
  background(220);
  let container = document.getElementById('container');
  container.insertBefore(canvas.elt, container.firstChild);

  for( let y = 0; y < 8; y++ ){
    
    for( let x = 0; x < 8; x++){
      noStroke();
      print(x,y);
      fill( x*32, 0, y*32);
      square(x*50, y*50, 50);
    }
    
  }
}

function draw() {
  background(220);

  let cols = 8;
  let rows = 8;
  let cellSize = 50;
  
  let speed = 0.1; 
  let offset = 0.5; 

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      
      let wave = sin(frameCount * speed + (x + y) * offset); 
      let brightness = map(wave, -1, 1, 50, 255); 
      
      fill(x * 32, brightness, y * 32); 
      square(x * cellSize, y * cellSize, cellSize);
    }
  }
}
