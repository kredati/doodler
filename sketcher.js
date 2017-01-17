'use strict'

// Defines a Sketcher object that doodles on the canvas
class Sketcher {

  // The constructor is called when the object is created
  constructor() {
    this.position = vector(0, 0),
      this.noise = vector(random(0, 100000), random(0, 100000)),
      this.noiseResolution = 0.01
  }

  // Sketch does all the delegtaion, to update and display
  sketch() {
    this.update()
    this.display()
  }

  // Display draws a sketcher
  display() {
    fill(0, 0, 0, 30)
    noStroke()
    ellipse(this.position.x, this.position.y, 4, 4)
  }

  // And update moves its position. What's doing the heavy lifting here?
  update() {
    this.position.x = map(noise(this.noise.x), 0, 1, 0, width)
    this.position.y = map(noise(this.noise.y), 0, 1, 0, height)
    this.noise.increment(this.noiseResolution)
  }

}
