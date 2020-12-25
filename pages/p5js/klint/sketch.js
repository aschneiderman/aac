// https://editor.p5js.org/niccab/sketches/Fci2SMXje

/*

Your example question we could submit for homework involved the arc function and its parameters. I thought that this would be a good function to explore.

For this week's assignment, I wanted to replicate a painting from one of my favorite painters, Hilma Af Klint. The title of the painting is Svanen. Here is a reference: https://commons.wikimedia.org/wiki/File:Hilma_af_Klint_Svanen.jpg

I thought that using the arc function would be much simpler to use. I wanted to use only arcs, but I chose to use circles as the base layers and arcs to overlap the circles.

*/

function setup() {
  createCanvas(600, 600); // size of painting
  background(171, 56, 39); // faded red background

  fill(66, 124, 182); // blue base layer
  noStroke();
  circle(300, 300, 300);

  fill(222, 180, 82); // yellow base layer
  noStroke();
  circle(300, 300, 200);

  fill(208, 107, 81); // red base layer
  noStroke();
  circle(300, 300, 100);

  fill(222, 214, 202); // white arc
  arc(300, 300, 300, 300, 1.57, 4.71, CHORD);

  fill(30, 30, 30); // black arc
  arc(300, 300, 200, 200, 1.57, 4.71, CHORD);

  fill(145, 63, 63); // red left triangle
  triangle(300, 295, 300, 310, 290, 310);

  fill(76, 36, 28); // dark brown right triangle
  triangle(300, 295, 300, 310, 310, 310);

}

function draw() {


}