function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  noStroke();
  
}

function draw() {
  background(0);

 if (mouseX < width / 15) {
  background(10, 10, 10);
 }
 else if (mouseX < (width / 15) * 2) {
  background(25, 25, 25);
 }
 else if (mouseX < (width / 15) * 3) {
  background(40, 40, 40);
 }
 else if (mouseX < (width / 15) * 4) {
  background(65, 65, 65);
 }
 else if (mouseX < (width / 15) * 5) {
  background(85, 85, 85);
 }
 else if (mouseX < (width / 15) * 6) {
  background(105, 105, 105);
 }
 else if (mouseX < (width / 15) * 7) {
  background(120, 120, 120);
 }
 else if (mouseX < (width / 15) * 8) {
  background( 140, 140, 140);
 }
 else if (mouseX < (width / 15) * 9) {
  background(160, 160, 160);
 }
 else if (mouseX < (width / 15) * 10) {
  background(180, 180, 180);
 }
 else if (mouseX < (width / 15) * 11) {
  background(195, 195, 195);
 }
 else if (mouseX < (width / 15) * 12) {
  background( 211, 211, 211);
 }
 else if (mouseX < (width / 15) * 13) {
  background(230, 230, 230);
 }
 else if (mouseX < (width / 15) * 14) {
  background( 245, 245, 245);
 }
 else{
  background(255, 255, 255);
 }


}