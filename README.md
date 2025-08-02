# GalaxyMaker

This project creates a mesmerizing, universe-like visual effect using p5.js. It generates a dynamic spiral pattern with noisy variables and warped transformations, evolving over time into intricate cosmic visuals.

## Features
- **Dynamic Spiral**: Uses trigonometric functions and noise to create a swirling, galaxy-like pattern.
- **Responsive Canvas**: Adapts to the full window size for an immersive experience.
- **Color Variation**: Employs HSB color mode for vibrant, shifting hues.
- **Evolving Patterns**: Long-running execution produces complex, organic visuals.

## Prerequisites
- A modern web browser (Chrome, Firefox, etc.).
- [p5.js library](https://p5js.org/) (included via CDN in the HTML).

## Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Open `index.html` in a web browser to view the visualization.

## Usage
- Open `index.html` in a browser.
- Let the sketch run to observe the evolving cosmic spiral effect.
- Resize the browser window to adjust the canvas size dynamically.

## Code Overview
- **File**: `index.html`
- **Setup**: Initializes a full-window canvas with a dark background (HSB: 24) and sets HSB color mode.
- **Draw Loop**:
  - Centers the spiral with offset divisors (2.154, 2.1542).
  - Uses `frameCount` for animation, with an angle multiplier (0.71145) for spiral motion.
  - Modulates radius (`frameCount % 400`) and hue (`frameCount % 188`) for variation.
  - Introduces noise via `twistFactor` (sin-based) and `confusingThing` (cos-based) for warped effects.
  - Draws points with a stroke weight of 5 for bold visuals.

## Dependencies
- p5.js (loaded via CDN: `https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.2/p5.min.js`).

## Contributing
Feel free to fork the repository, tweak parameters (e.g., angle, radius, or noise factors), and submit pull requests to enhance the effect.

## License
MIT License
