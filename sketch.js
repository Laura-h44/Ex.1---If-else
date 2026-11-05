function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
}

function draw() {
  background(0);

 if (mouseX < width / 3) {
  background(255, 0, 0);
 }
 else if (mouseX < (width / 3) * 2) {
  background(0, 255, 0);
 }
 else{
  background(0, 0, 255);
 }

}