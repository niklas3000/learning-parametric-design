let yoff = 99; // 2nd dimension of perlin noise
fr = 2

function setup() {
  createCanvas(1000, 400);
  frameRate(fr)

}

function draw() {
  background(51);

  fill(255);
  beginShape();

  let xoff = yoff;

  for (let x = 50; x <= width; x += 100) {
  
    let y = map(noise(xoff), 0, 1.1, 50, 450);

    vertex(x, y);
    xoff += 100.0;
  }
  yoff += 0.2;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
   
}