const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engiine;
var world;
var ground;

var ball;

function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var groundoptions={
    isStatic:true
  }
  ground=Bodies.rectangle(200,380,400,20,groundoptions);
  World.add(world,ground);
  var balloption={
    restitution:1.0
  }
 ball=Bodies.circle(200,200,25,balloption);
 World.add(world,ball);
}
  

function draw() {

  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,400,20);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,25,25);
}