function preload(){
  // preload assets
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(132, 199, 155);
  background(2, 112, 112)


  fill(32, 199, 205)
  stroke(32, 199, 15)
  circle(100, 210, 99)

  fill(132, 199, 155)
  stroke(132, 199, 15)
  circle(200, 210, 99)

  fill(232, 199, 155)
  stroke(232, 165, 15)
  circle(300, 210, 99)




  fill(132, 199, 155)
  line(20, 240, 120, 140)

  stroke(3, 225, 255);
  strokeWeight(3);
  line(220, 240, 320, 140)

  stroke(185, 120, 133);
  strokeWeight(3);
  line(120, 240, 220, 140)



  fill(32, 99, 155)
  stroke(202, 99, 155)
  arc(
    70, 330, 100, 100,
    Math.PI / 180 * 30,
    Math.PI / 180 * 190,
    PIE
  );
  
  fill(202, 99, 155)
  stroke(32, 99, 155)
  arc(
    330, 70, 100, 100,
    Math.PI / 180 * 190,
    Math.PI / 180 * 30,
    PIE
  );


  stroke(185, 120, 133)
  fill(199, 132, 155)
  rect(220, 333, 30, 20)

  stroke(185, 120, 133)
  fill(244, 132, 10)
  square(350, 350, 33)

  stroke(185, 120, 133)
  fill(199, 132, 155)
  rect(140, 33, 30, 20)

  stroke(185, 120, 133)
  fill(244, 132, 10)
  square(50, 50, 33)


}