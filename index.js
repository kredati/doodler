'use strict'

// This is an array: it can hold multiple things.
// In principle, we can have multiple sketchers at once
let sketchers = []

// setup() is called once at the beginning of the sketch
var setup = () => {
  createCanvas(600, 600)
  background(230, 230, 230)
  1..times(() => sketchers.push(new Sketcher()))
}

// draw() composes each frame of the animation
// It is called approx. 60 times per second
var draw = () => {
  sketchers.forEach(sketcher => sketcher.sketch())
}
