

function setup() {
  // canvas=createCanvas(windowWidth, windowHeight);
  canvas = createCanvas(window.innerWidth, window.innerHeight);
  canvas.position(0,0);
  colorMode(HSB);
  radians(DEGREES);

}

function draw() {
  
  clear();

 
  var valueX;
  var xPlace = map(mouseX, 0, width, ((width / 2) - 150), ((width / 2) + 150));
  var cSize = map (mouseX, 0, width, 0, 500);

  line(((width / 2) - 150), (height - 40), ((width / 2) + 150), (height - 40));
  rect(xPlace, (height - 55), 10, 30);


  for (var i = 0; i < 4; i++) {
    for (var angle = 0; angle < 255; angle += 60) {
      push();
      translate(width / 2, height / 2);
      rotate(-frameCount * 0.05);
      rotate(angle + 20 * i);
      translate(30, 30);
      noFill();
      stroke(angle, 100, 100);
      ellipse(i, i, cSize, cSize);
      pop();

    }
  }
  
}

window.onresize = function() {
  var w = window.innerWidth;
  var h = window.innerHeight;  
  canvas.size(w,h);
  width = w;
  height = h;
};