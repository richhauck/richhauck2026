const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

function map(value, start1, stop1, start2, stop2) {
  return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1));
}

class Widget {
  constructor() {
    this.reset();
  }
  draw() {
    let currentTime = Date.now() - this.startTime;
    const totalDuration =
      this.fadeInDuration + this.holdDuration + this.fadeOutDuration;
    const maxOpacity = 0.5;

    // Determine opacity based on animation phase
    if (currentTime < this.fadeInDuration) {
      // Fade in phase
      this.opacity = map(currentTime, 0, this.fadeInDuration, 0, maxOpacity);
    } else if (currentTime < this.fadeInDuration + this.holdDuration) {
      // Hold phase
      this.opacity = maxOpacity;
    } else if (currentTime < totalDuration) {
      // Fade out phase
      this.opacity = map(
        currentTime,
        this.fadeInDuration + this.holdDuration,
        totalDuration,
        maxOpacity,
        0,
      );
    } else {
      // Animation complete
      this.reset();
      currentTime = 0;
    }

    // Draw radial gradient
    this.drawRadialGradient(this.xPos, this.yPos, this.scale);
  }
  /**
   * Resets values.
   */
  reset() {
    this.xPos = Math.round(Math.random() * canvas.width);
    this.yPos = Math.round(Math.random() * canvas.height);
    this.scale = Math.random() * 100 + 500;
    this.fadeInDuration = 2000; // 2 seconds to fade in
    this.holdDuration = Math.round(Math.random() * 5000) + 5000; // 5-10 seconds to hold
    this.fadeOutDuration = 2000; // 2 seconds to fade out
    this.randomColor = {
      r: Math.floor(Math.random() * 256),
      g: Math.floor(Math.random() * 256),
      b: Math.floor(Math.random() * 256),
    };
    this.startTime = Date.now();
  }
  drawRadialGradient(x, y, radius) {
    let gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);

    // Get color components
    let r = this.randomColor.r;
    let g = this.randomColor.g;
    let b = this.randomColor.b;

    // Create gradient from full color to transparent
    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${this.opacity})`);
    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fill();
  }
}

let Widgets = [];
function setup() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  for (let i = 0; i < 12; i++) {
    Widgets.push(new Widget());
  }
}
function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 1)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let widget of Widgets) {
    widget.draw();
  }
  requestAnimationFrame(draw);
}
function windowResized() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}

window.addEventListener("resize", windowResized);

setup();
draw();
