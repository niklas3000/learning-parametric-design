function preload(){
  // preload assets
}

let textInput


function setup() {
  createCanvas(400, 400);

  textInput = createInput()
  textInput.position(410, 50)
  textInput.size(100)
}


let angle = 0

function draw() {
  background('lightblue');
  fill(0)



  noStroke();
  fill('red');
  circle(mouseX, mouseY, 20);

  fill('darkred')
  circle(200, 200, textInput.value());

  fill('darkblue')

  translate(200, 200);
  rotate(Math.PI / 180 * angle)
  
  circle(-80, -80, 80)
  circle(-113, 0, 80)
  circle(0, 113, 80)
  circle(113, 0, 80)
  circle(0, -113, 80)
  circle(80, 80, 80)
  circle(80, -80, 80)
  if (mouseIsPressed === true)
  scale(1.3)
  if (mouseIsPressed === true)
  fill('black')
  circle(-80, 80, 80)
  




  angle += 0.8
  }


  


  