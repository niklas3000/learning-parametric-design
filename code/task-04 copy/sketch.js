function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
}

const radius = 100

let angle = 0

function draw() {
  background(255);
  fill(0)


  translate(200, 200);
  rotate(Math.PI / 180 * angle)
  for (let angle = 0; angle < 360; angle += 45) {
   
      push();
  const x = radius * cos(Math.PI / 180 * angle);
  const y = radius * sin(Math.PI / 180 * angle);
    translate(50, 50)

    translate(x, y);
    circle(0, 0, 60);

   
    pop();
    angle += 1
  }

  noLoop(); 
  
}