const sketchWidth = 400;
const sketchHeight = 400;
const squareSize = 54;
const padding = 26;
const spacing = squareSize + 2 * padding;

const columns = Math.floor(sketchWidth / spacing);
const rows = Math.floor(sketchHeight / spacing);

function setup () {
  createCanvas(sketchWidth, sketchHeight);
}

function draw () {
  strokeWeight(0)
  stroke(0)
  fill('red')
  for(let x = 0; x <= columns; x += 1) {
    for(let y = 0; y <= rows; y += 1) {
      square(x * spacing, y * spacing, squareSize);
    }
  }

  stroke(255)
  fill('white')
  rect(300, 0, 100, 400)

    stroke(254, 219, 32)
    strokeWeight(5)
    fill(255)
    circle(340, 340, 80)

    stroke(255, 84, 0)
    strokeWeight(5)
    fill(255)
    circle(340, 220, 80)

    stroke(239, 165, 194)
    strokeWeight(5)
    fill(255)
    circle(340, 220, 40)


      fill(255);
      stroke(112, 207, 194)
      strokeWeight(20)


      
      strokeWeight(0)
      fill(0)
      for(let y = 1; y < 17; y += 2) {
        rect(266, 10 * y, 130, 10);
      }
      
    



}

