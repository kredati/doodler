'use strict'

// This is an array: it can hold multiple doodles.
// In principle, we can have multiple doodlers at once.
// Where would we change the number of doodlers?
let doodles = []

// setup() is called once at the beginning of the sketch
var setup = () => {
  createCanvas(800, 600)
  background(230, 230, 230)
  1..times(() => doodles.push(new Doodler()))
}

// draw() composes each frame of the animation
// It is called approx. 60 times per second
var draw = () => {
  doodles.forEach(doodler => doodler.doodle())
}
