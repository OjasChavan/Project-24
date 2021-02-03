
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var groundSprite;
var paper;


function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

box1 = new Dustbin(600,height-50,110,20);
box2 = new Dustbin(655,height-80,20,90);
box3 = new Dustbin(545,height-80,20,90);

	ground = new Ground(width/2, height-35, width,10);

    paper = new Paper(100,600,40);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

box1.display();
box2.display();
box3.display();
ground.display();
paper.display();
 
}


function keyPressed() {

if (keyCode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
}

}


