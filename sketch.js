var hr, min, sec,secAngle,ma,ha;



function setup() {
  createCanvas(800,400);

  angleMode(DEGREES)
}

function draw() {
  background(0);
  
translate(200,200)
rotate(-90)


  hr=hour();
  min=minute();
  sec=second();


secAngle=map(sec,0,60,0,360)
ma=map(min,0,60,0,360)
ha=map(hr,0,60,0,360)

  drawSprites();
}