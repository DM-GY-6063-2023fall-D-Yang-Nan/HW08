let sound, amplitude;
let circles = [];

function preload(){
  sound = loadSound('winterMusic.mp3'); 
}

function setup() {
 createCanvas(windowWidth,windowHeight);
  amplitude = new p5.Amplitude();

  // 初始化圆的数组
  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let multiplier = random(10, 50);  // 不同的圆有不同的大小变化系数
    circles.push(new Circle(x, y, multiplier));
  }
}

function draw() {
  background(135,206,250);   //背景色
  let level = amplitude.getLevel();

  // 更新并显示每个圆
  for (let i = 0; i < circles.length; i++) {
    circles[i].update(level);
    circles[i].display();
  }
}

function mouseClicked() {
  if (sound.isPlaying() ){
    sound.pause();
  } else {
    sound.loop();
    amplitude = new p5.Amplitude();
    amplitude.setInput(sound);
  }
}

class Circle {
  constructor(x, y, multiplier) {
    this.x = x;
    this.y = y;
    this.multiplier = multiplier;
    this.size = 0;
    this.alpha = random(255);  // 随机不透明度
  }
  
  update(level) {
    this.size = map(level, 0, 2, 0, 150) * this.multiplier;  // 通过multiplier变量使得每个圆的大小变化不同
  }
  
  display() {
    stroke(240, 235, 222, this.alpha);  // 设置描边颜色和不透明度
    strokeWeight(10);   //粗細
    noFill();
    circle(this.x, this.y, this.size);
  }
}