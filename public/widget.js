class Widget {
  constructor() {
    this.reset();
  }
  draw() {
    let currentTime = millis() - this.startTime;
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
        0
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
    this.xPos = Math.round(Math.random() * width);
    this.yPos = Math.round(Math.random() * height);
    this.scale = Math.random() * 100 + 500;
    this.fadeInDuration = 2000; // 2 seconds to fade in
    this.holdDuration = Math.round(Math.random() * 5000) + 5000; // 10 seconds to hold
    this.fadeOutDuration = 2000; // 2 seconds to fade out
    this.randomColor = color(random(255), random(255), random(255));
    this.startTime = millis();
  }
  drawRadialGradient(x, y, radius) {
    let ctx = drawingContext;
    let gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);

    // Get color components
    let r = red(this.randomColor);
    let g = green(this.randomColor);
    let b = blue(this.randomColor);

    // Create gradient from full color to transparent
    gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${this.opacity})`);
    gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

    ctx.fillStyle = gradient;
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, TWO_PI);
    ctx.fill();
  }
}
