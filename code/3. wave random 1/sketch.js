let yoff = 0.0; // 2nd dimension of perlin noise

function setup() {
  createCanvas(1000, 400);
}

function draw() {
  background(51);

  fill(255);
  // We are going to draw a polygon out of the wave points
  beginShape();

  let xoff = 0; // Option #1: 2D Noise
  // let xoff = yoff; // Option #2: 1D Noise

  // Iterate over horizontal pixels
  for (let x = 1; x <= width; x += 25) {
    // Calculate a y value according to noise, map to

    // Option #1: 2D Noise
    //let y = map(noise(xoff, yoff), 0, 1, 200, 300);

    // Option #2: 1D Noise
    let y = map(noise(xoff), 0, 1.1, 50, 400);

    // Set the vertex
    vertex(x, y);
    // Increment x dimension for noise
    xoff += 1.09;
  }
  // increment y dimension for noise
  yoff += 0.01;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  noLoop()

}