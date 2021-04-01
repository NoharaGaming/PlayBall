
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 200);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	box1 = new Box(700,100,8,60);
	ground = new Ground(400,180,800,20);
	box2 = new Box(550,100,8,60);
	box3 = new Box(625,100,150,8);
	ball = new Ball(150,130,18)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  box1.display();

box3.display()
  box2.display();
  ground.display();
  ball.display();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball.body, ball.body.position, {x:45,y:-45})
	}
}


