function setup() {
  createCanvas(640, 640)
}

function draw() {
  background (200)
  
    //body
  fill (100, 10, 30)
  rect(100, 180, 100, 150)
  line(80, 250, 100, 220)
  line(200, 220, 220, 250)

  //head
  fill (255,0,0, 100)
  ellipse(150, 150, 100)
    //eyes
    fill (0,200, 50)
  ellipse(135, 135, 10)
  ellipse(165, 135, 10)


  
  //legs
    line(130, 330, 130, 500)
        line(160, 330, 160, 500)
//foot
arc(110, 500, 40, 40, 0, PI+QUARTER_PI, CHORD)
arc(140, 500, 40, 40, 0, PI+QUARTER_PI, CHORD)
}