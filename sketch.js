const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var engine,world;

function preload()
{
	
}

function setup() {
	createCanvas(1200,600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  ball = new Ball(100, 600, 10)
  ground = new Ground(400, 680, 800, 20)
  leftSide = new Dustbin(550, 620, 20, 100)
  bottom = new Dustbin(610, 660, 100, 20)
  rightSide = new Dustbin(670, 620, 20, 100)

	Engine.run(engine); 

}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  ball.display();
  ground.display();
  leftSide.display();
  bottom.display();
  rightSide.display();

  drawSprites();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:15, y:-15})
	}

}


