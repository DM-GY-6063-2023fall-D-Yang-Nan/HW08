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
  img.copy(origImg, 0, 0, origImg.width, origImg.height, 0, 0, origImg.width, origImg.height);  // 将原始图像复制到新图像对象中
  
  let newColor = cp.color();  // 获取颜色选择器的当前颜色
  
  img.loadPixels();
  replacementImg.loadPixels();  // 加载替换图像的像素数据
  
  for (let i = 0; i < img.pixels.length; i += 4) {
    let r = img.pixels[i];
    let g = img.pixels[i+1];
    let b = img.pixels[i+2];
    
    if (r > 80 && g < 100 && b < 100) {  // 调整后的红色检测逻辑
      img.pixels[i] = red(newColor);   // 替换红色通道
      img.pixels[i+1] = green(newColor);  // 替换绿色通道
      img.pixels[i+2] = blue(newColor);  // 替换蓝色通道
    } else if (r < 100 && g < 100 && b > 90) {  // 蓝色检测逻辑
      img.pixels[i] = replacementImg.pixels[i];   // 替换图像的红色通道
      img.pixels[i+1] = replacementImg.pixels[i+1];  // 替换图像的绿色通道
      img.pixels[i+2] = replacementImg.pixels[i+2];  // 替换图像的蓝色通道
    }
  }
  
  img.updatePixels();
  translate(xOff,yOff);
  image(img, 0, 0);  
}