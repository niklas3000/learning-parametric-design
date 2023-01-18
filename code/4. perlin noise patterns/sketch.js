function setup() {
  createCanvas(2000, 1000);
  t = rez = c = n = 0.03;
  strokeWeight(3);
  cols = [
    "#A4D4B4",
    "#CA054D",
    "#FFCF9C",

  ];
}
function draw() {
  background(0);
  noStroke();
  for (i = 0; i < width; i += 3) {
    for (j = 0; j < height; j += 3) {
      n = noise(i * rez, j * rez + t) * 3;
      n > 3
        ? (c = 4)
        : n > 3
        ? (c = 3)
        : n > 2
        ? (c = 2)
        : n > 1
        ? (c = 1)
        : (c = 0);
      fill(cols[c]);
      rect(i, j, 3);
    }
  }
  t += 9.1;
noLoop()
}