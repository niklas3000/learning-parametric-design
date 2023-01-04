let yoff = 0.0; // 2nd dimension of perlin noise

function setup() {
  createCanvas(1000, 400);
}

function draw() {
  background(51);

  fill(255);
  beginShape();

  let xoff = 0;

  for (let x = 1; x <= width; x += 20) {
  
    let y = map(noise(xoff), 0, 1.1, 100, 400);

    vertex(x, y);
    xoff += 1.09;
  }
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  noLoop()
}