function setup() {
  createCanvas(windowWidth, windowHeight);
  background(24);
  colorMode(HSB);
}

function draw() {
  let x = width / 2.154;
  let y = height / 2.1542;
  let angle = frameCount * 0.71145;
  let radius = frameCount % 400;
  let hue = (frameCount % 188);
  let twistFactor = frameCount + sin(radius);
  let confusingThing = -frameCount / cos(frameCount / height);
  stroke(hue, twistFactor, 77);
  
  strokeWeight(5);
  let px = x + cos(confusingThing) * radius;
  let py = y + sin(angle) * twistFactor;
  point(px, py);
}
