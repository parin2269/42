

function setup() {
  createCanvas(400,400);
angleMode(DEGREES);


}

function draw() {
background(0,0,0);

translate(200,200)
rotate(-90)

var hr = hour();
var mn = minute();
var sc = second();

hrAngle=map(hr %12,0,24,0,360);
mnAngle=map(mn,0,60,0,360);
scAngle=map(sc,0,60,0,360);

push();
rotate(hrAngle);
stroke(22,14,255);
strokeWeight(7);
line(0,0,100,0);
pop()

push();
rotate(mnAngle);
stroke(255,0,0);
strokeWeight(7);
line(0,0,150,0);
pop()

push();
rotate(scAngle);
stroke(51,255,0);
strokeWeight(7);
line(0,0,200,0);
pop()




  drawSprites();
}