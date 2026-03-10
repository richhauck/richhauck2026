let Widgets = [];

function setup() {
  const cnv = createCanvas(windowWidth, windowHeight);
  // Set the canvas' ID to "p5canvas"
  cnv.id("p5canvas");

  cnv.parent("bg-gradient");

  for (let i = 0; i < 12; i++) {
    Widgets.push(new Widget());
  }
}
function draw() {
  background(0);
  for (let widget of Widgets) {
    widget.draw();
  }
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
