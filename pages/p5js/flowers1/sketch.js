// NOTE: built flower using code from  https://editor.p5js.org/rhymeandreason/sketches/NI74eacDH

function setup() {
  createCanvas(1100, 1100);
  colorMode(HSB, 100);
  noLoop();   // Only draw it once
}

function draw() {
  background(220);

  var goals = [
    { name: 'Communicate', score: 3},
    { name: 'Support', score: 1},
    { name: 'Sustain', score: 3},
    { name: 'Grow', score: 3},
    { name: 'Transform', score: 2}
  ];

  fill(51);
  textSize(36);
  text("Progress Report", 50, 60);

  var xOffset = 150;
  
  for (goal = 0; goal <= goals.length; goal++) {
    var score = goals[goal].score;
    console.log(goal, score, goals[goal].name);
    
    flower(xOffset + (goal * 200), 200, score, 100);

    fill(51);
    textAlign(CENTER);
    textSize(32);
    text(goals[goal].name, xOffset + goal * 200, 400);

    textSize(12);
    text(score, xOffset + goal * 200, 330);


  };
  
};

function flower(x, y, petals,  stemHeight){
  
  console.log(x, y, petals,  stemHeight);


  var size = 20;
  // var stemHeight = 100;
  
  //draw the stem
  stroke(45,90,90);
  fill(45,90,90);
  strokeWeight(3);
  line(x,y, x, y+stemHeight);
  
  var leafSize = 30;
  var leafWidth = leafSize/2
  //draw leaves
  noStroke();
  ellipse(x+leafWidth,y+stemHeight/2, leafSize, leafWidth);
  ellipse(x-leafWidth,y+stemHeight/2, leafSize, leafWidth);
  
  //draw the petals
  fill(10,100,100);
  var petalSize = 25;
  // for (var theta=0; theta<TWO_PI; theta+=PI/3){
  var numPetals = TWO_PI /3 * petals;
  for (var theta=0; theta<numPetals; theta+=PI/3){
    var petalx = size*cos(theta) + x;
    var petaly = size*sin(theta) + y;
    ellipse(petalx, petaly, petalSize, petalSize);
  }
  //draw the flower center
  fill(17,100,100);
  ellipse(x, y, petalSize, petalSize);
  
  
  
}