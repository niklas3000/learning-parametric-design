function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  fill(255);
  let x = 1;
  while(x < 50) {
    let y = 1;
    while(y < 50) {
      circle(10 * x, 10 * y, 10);
      y += 1;
    }
    x += 1;
  }
}