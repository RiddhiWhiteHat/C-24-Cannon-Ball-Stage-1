//This is the cannonball game project 24
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, cannon;
var angle = 0;


function setup() {
  createCanvas(900, 550);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(450, 510, 900, 10); 
  cannon = new Cannon(75,height-125,60,30)
}

function draw() {
  background(255);
  
  Engine.update(engine);

  //Display
  ground.display();
  cannon.display();
}
