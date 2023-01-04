function setup() {
  createCanvas(700, 200);
}

let noiseScale=0.02;

function draw() {
  background(0);
  for (let x=0; x < width; x++) {
    let noiseVal = noise((x)*noiseScale, noiseScale);
    stroke('blue');
    line(x, noiseVal*80, x, height);
  }
  describe(`horizontal wave pattern effected by mouse x-position
    & updating noise values.`);
}