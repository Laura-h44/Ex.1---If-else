function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
}

function draw() {
  background(0);

 if (mouseX < width / 10) {
  background(0, 0, 0);
 }
 else if (mouseX < (width / 10) * 2) {
  background(20, 20, 20);
 }
 else if (mouseX < (width / 10) * 3) {
  background(50, 50, 50);
 }
 else if (mouseX < (width / 10) * 4) {
  background(120, 120, 120);
 }
 else if (mouseX < (width / 10) * 5) {
  background( 150, 150, 150);
 }
 else if (mouseX < (width / 10) * 6) {
  background(180, 180, 180);
 }
 else if (mouseX < (width / 10) * 7) {
  background( 211, 211, 211);
 }
 else if (mouseX < (width / 10) * 8) {
  background(230, 230, 230);
 }
 else if (mouseX < (width / 10) * 9) {
  background( 245, 245, 245);
 }
 else{
  background(255, 255, 255);
 }

}