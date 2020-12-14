var x = 300;
var y = 300;
var b;
var c;
var d;
function setup() {
  createCanvas(600, 600);
  noStroke();
  angleMode(DEGREES);
}
function draw() {
  if (keyIsPressed) {
    if (keyCode == LEFT_ARROW) {
      x--;
      fill(0,255,0,20);
    }
    else if (keyCode == RIGHT_ARROW) {
      x++;
      fill(0,0,255,20);
    }
  }
  if (keyIsPressed) {
    if (keyCode == UP_ARROW) {
      y--;
      fill(255,0,0,20);
    }
    else if (keyCode == DOWN_ARROW) {
      b = Math.floor((Math.random() * 255) + 1);
      c = Math.floor((Math.random() * 255) + 1);
      d = Math.floor((Math.random() * 255) + 1);
      y++;
      fill(b,c,d,20);
    }
  }
  arc(x,y,40,40,0,360);
  // rect(x, y, 50, 50);
  if (mouseIsPressed) {
    fill(0);
  }
  else {
    fill(255);
  }
  ellipse(mouseX,mouseY, 40, 40);
}