let myImage;
let myImageBis;
function preload(){
  myImage = loadImage("image.jpg");
  myImageBis = loadImage("image_2.jpg")
}


function setup() {
  let canvas = createCanvas(400, 400);
  background(220);
  let container = document.getElementById('container');
  container.insertBefore(canvas.elt, container.firstChild);
  
  image(myImageBis, 0, 0);
  
  myImage.loadPixels();
  myImageBis.loadPixels();
  
  //traitement d'image...
  for(let i = 0; i < myImageBis.pixels.length; i += 4){
    myImageBis.pixels[i] += 90; //rouge
    myImageBis.pixels[i+1] += 38; //vert
    myImageBis.pixels[i+2] += 32; //bleu
  }
  myImageBis.updatePixels();
  
  image(myImageBis, 100, 0);
  
  
  for(let i = 0; i < myImageBis.pixels.length; i += 4){
    myImageBis.pixels[i] += 0; //rouge
    myImageBis.pixels[i+1] += 70; //vert
    myImageBis.pixels[i+2] += 125; //bleu
  }
  myImageBis.updatePixels();
  
  image(myImageBis, 0, 100);
  
  
  for(let i = 0; i < myImageBis.pixels.length; i += 4){
    myImageBis.pixels[i] += 80; //rouge
    myImageBis.pixels[i+1] += 50; //vert
    myImageBis.pixels[i+2] += 0; //bleu
  }
  myImageBis.updatePixels();
  
  image(myImageBis, 100, 100);
  
  
  for(let i = 0; i < myImage.pixels.length; i += 4){
    myImage.pixels[i] += 30; //rouge
    myImage.pixels[i+1] += 20; //vert
    myImage.pixels[i+2] -= 40; //bleu
  }
  myImage.updatePixels();
  
  image(myImage, 200, 0);
  
  
   for(let i = 0; i < myImage.pixels.length; i += 4){
    myImage.pixels[i] += 0; //rouge
    myImage.pixels[i+1] += 48; //vert
    myImage.pixels[i+2] += 90; //bleu
  }
  myImage.updatePixels();
  
  image(myImage, 0, 200);
  
  
  for(let i = 0; i < myImage.pixels.length; i += 4){
    myImage.pixels[i] += 60; //rouge
    myImage.pixels[i+1] += 0; //vert
    myImage.pixels[i+2] += 90; //bleu
  }
  myImage.updatePixels();
  
  image(myImage, 200, 200);
  
}

function draw() {
}