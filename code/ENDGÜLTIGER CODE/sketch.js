let yoff = 10; 
fr = 2
let counter = 1

function setup() {
  createCanvas(1000, 400);
  frameRate(fr)

}

function draw() {
  background(251);

  fill(255);
  beginShape();

  let xoff = yoff;

  for (let x = 50; x <= width; x += 100) {
  
    let y = map(noise(xoff), 0, 0.9, 200, 420);

    vertex(x, y);
    xoff += 100.0;
  }
  yoff += 0.1;
  vertex(width, height);
  vertex(0, height);
  endShape(CLOSE);
  //save('export' + counter + '.gif')
  counter++;
  if (counter > 20) {noLoop()}  
}