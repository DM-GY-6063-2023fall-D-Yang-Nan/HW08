let sound, amplitude;
let circles = [];

function preload(){
  sound = loadSound('winterMusic.mp3'); 
}

function setup() {
 createCanvas(windowWidth,windowHeight);
  amplitude = new p5.Amplitude();


  for (let i = 0; i < 50; i++) {
    let x = random(width);
    let y = random(height);
    let multiplier = random(10, 50); 
    circles.push(new Circle(x, y, multiplier));
  }
}

function draw() {
  background(135,206,250);  
  let level = amplitude.getLevel();

 
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
    this.alpha = random(255); 
  }
  
  update(level) {
    this.size = map(level, 0, 2, 0, 150) * this.multiplier; 
  }
  
  display() {
    stroke(240, 235, 222, this.alpha);
    strokeWeight(10); 
    noFill();
    circle(this.x, this.y, this.size);
  }
}