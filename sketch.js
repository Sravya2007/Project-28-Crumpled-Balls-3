var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var paper1;
var dustbin1;
var ground1;
var img, launcher;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);

	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(width/2, 680, width, 20);
	dustbin1 = new Dustbin();
	paper1 = new Paper(150, 50, 70);


	var render = Render.create({
		element: document.body,
		Engine: engine, 
		options:{
			width: 1200,
			height: 700,
			wireframes: false
		}
	});

	launcher = new Launcher(paper1.body,{x: 760, y: 110});

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");

  ground1.display();
  paper1.display();
  dustbin1.display();
  launcher.display();

  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x: 283, y:-302});
	}
  
}

function mouseDragged() {
    Matter.Body.setPosition(paper1.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
    launcher.fly();
}