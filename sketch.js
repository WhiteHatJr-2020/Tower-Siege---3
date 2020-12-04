const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
score=0;
var backgroundImg="darkgrey"
function preload(){
  getBackgroundImage()
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  stroke(255)
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
 g=new Ground(450,390,900,20);
  s=new Ground(390,300,250,10);
  b1 = new Box(300,275,30,40);
  b2 = new Box(330,275,30,40);
  b3 = new Box(360,275,30,40);
  b4 = new Box(390,275,30,40);
  b5 = new Box(420,275,30,40);
  b6 = new Box(450,275,30,40);
  b7 = new Box(480,275,30,40);

  b8 = new Box(330,235,30,40);
  b9 = new Box(360,235,30,40);
  b10 = new Box(390,235,30,40);
  b11 = new Box(420,235,30,40);
  b12 = new Box(450,235,30,40);
  b13 = new Box(360,195,30,40);
  b14 = new Box(390,195,30,40);
  b15 = new Box(420,195,30,40);

  b16 = new Box(390,155,30,40);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

  slingShot = new Slingshot(this.ball,{x:100,y:200});
  
}

function draw() {
 //background("lightblue"); 
 if(backgroundImg)
 background(backgroundImg); 
  textSize(20);
  fill("red");
  text("Score: "+score,750,70);
  textSize(20);
  fill("red");
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",100,30);

 g.display();
 s.display();
 strokeWeight(2);
  stroke(15);
 fill("blue");
 b1.display();
 b2.display();
 b3.display();
 b4.display();
 b5.display();
 b6.display();
 b7.display();
 b8.display();
 b9.display();

 fill("pink");
 b10.display();
 b11.display();
 b12.display();
 b13.display();
 b14.display();
 b15.display();
 b16.display();
 
 b1.score();
 b2.score();
 b3.score();
 b4.score();
 b5.score();
 b6.score();
 b7.score();
 b8.score();

 b9.score();
 b10.score();
 b11.score();
 b12.score();
 b13.score();
 b14.score();
 b15.score();
 b16.score();

 fill("gold");
 imageMode(CENTER)
 image(polygon_img ,ball.position.x,ball.position.y,40,40);

 slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  slingShot.fly();
}
function keyPressed()
{
  if(keyCode===32)
  {
    slingShot.attach(this.ball);
  }
}

async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11, 13);
  console.log(hour);

  if (hour >= 06 && hour <= 18) {
    bg = "lightorange";
  } else {
    bg = "grey";
  }

  backgroundImg=bg;
  console.log(backgroundImg);
}