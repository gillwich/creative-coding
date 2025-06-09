//my original code was too big and needed to fix the color mixing issue which chat gpt helped in solving that issue and simplified it for me.


//listing palette of colors: This is easier that using 'let' statements
const palettes = [
  ['#f9d1d1', '#ffa4b6', '#f765a3', '#a155b9', '#165baa', '#0b1354'],
  ['#C70039', '#900C3E', '#571845', '#FFC300', '#FF5733'],
  ['#003049', '#d62828', '#f77f00', '#fcbf49', '#eae2b7'],
  ['#022E40', '#277A8C', '#37A6A6', '#F26666', '#F2F2F2'],
];

//using math.floor definetly saved a lot of unnecessary codes but really a big experimentation to see what works and doesn't work
let usePaletteIndex = Math.floor(Math.random() * palettes.length);
let usePalette = palettes[usePaletteIndex];

let x = 30;
let y = 30;

//setting min and max for the shape sizing
let szMin = 10;
let szMax = 30;
let canvasWidth = 500;
let canvasHeight = 500; //fixed the canvas sizing

//canvas setup
function setup() {
  createCanvas(canvasWidth, canvasHeight);
  rectMode(CENTER);
  background(250);
}

function draw() {
  let r = random(1);
  let useMaxSize = random(1) < 0.5;
  let sz = useMaxSize ? szMax : szMin;
  
//canvas border and making sure the draw stays inside
  if (x < canvasWidth - szMax / 2 && y < canvasHeight - szMax / 2) {
    if (r < 0.5) {
      noStroke();
      fill(random(usePalette)); //choosing between the 4 palettes that I have set
      rect(x, y, sz, sz);
    } else {
      noFill();
      stroke(random(usePalette));
      rect(x, y, sz / 2, sz / 2);
    }

    x = x + szMax;

    if (x >= canvasWidth - szMax / 2) {
      x = 30;
      y = y + szMax;
    }

    if (y >= canvasHeight - szMax / 2) {
      x = 30;
      y = 30;
      background(250); //white background to clear everything before starting the next loop
      
      //sending the used palette to the back to use the next palette
      usePaletteIndex = Math.floor(Math.random() * palettes.length);
      usePalette = palettes[usePaletteIndex];
    }
  }
}
