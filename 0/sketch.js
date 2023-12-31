let origImg;
let img;
let replacementImg;
let cp;

let xOff;
let yOff;

function preload() {
  origImg = loadImage('picture.jpg'); 
  replacementImg = loadImage('111.jpg'); 
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  origImg.resize(0, height);  
  img = createImage(origImg.width, origImg.height);  
  
  replacementImg.resize(origImg.width, origImg.height); 
  
  cp = createColorPicker("#ff0000"); 
  cp.position(10, 10);  

   if (img.width > width) {
     img.resize(width, 0);
     }
     if (img.height > height) {
     img.resize(0, height);
     }
    
     xOff = (width - img.width) / 2;
     yOff = (height - img.height) / 2;
}

function draw() {
  img.copy(origImg, 0, 0, origImg.width, origImg.height, 0, 0, origImg.width, origImg.height);  
  
  let newColor = cp.color(); 
  
  img.loadPixels();
  replacementImg.loadPixels();  
  
  for (let i = 0; i < img.pixels.length; i += 4) {
    let r = img.pixels[i];
    let g = img.pixels[i+1];
    let b = img.pixels[i+2];
    
    if (r > 80 && g < 100 && b < 100) { 
      img.pixels[i] = red(newColor);  
      img.pixels[i+1] = green(newColor); 
      img.pixels[i+2] = blue(newColor);  
    } else if (r < 100 && g < 100 && b > 90) {  
      img.pixels[i] = replacementImg.pixels[i];  
      img.pixels[i+1] = replacementImg.pixels[i+1]; 
      img.pixels[i+2] = replacementImg.pixels[i+2]; 
    }
  }
  
  img.updatePixels();
  translate(xOff,yOff);
  image(img, 0, 0);  
}