function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  strokeWeight(30);
  stroke('red')
  for(let y= 1; y < 2; y += 0.4)
  for(let Length = 1; Length < 2; Length += 0.4)
  for(let Breite = 1; Breite < 2; Breite += 0.4)
      arc(
        200, 200 * y,
        80 * Breite, 60 * Length,
        Math.PI / 180 * 180,
        Math.PI / 180 * 0,
        OPEN
  );


}