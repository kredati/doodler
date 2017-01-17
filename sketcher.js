'use strict'

// Defines a Doodler object that doodles on the canvas
class Doodler {

  // The constructor is called when the object is created
  constructor() {
    this.position = vector(0, 0),
      this.noise = vector(random(0, 100000), random(0, 100000)),
      this.noiseResolution = 0.01
  }

  // Doodle does all the delegtaion, to update and display
  doodle() {
    this.update()
    this.display()
  }

  // Display draws the current frame of the doodler
  display() {
    fill(0, 0, 0, 30)
    noStroke()
    ellipse(this.position.x, this.position.y, 4, 4)
  }

  // And update moves its position for the current frame.
  // What's doing the heavy lifting here?
  update() {
    this.position.x = map(noise(this.noise.x), 0, 1, 0, width)
    this.position.y = map(noise(this.noise.y), 0, 1, 0, height)
    this.noise.increment(this.noiseResolution)
  }

}
