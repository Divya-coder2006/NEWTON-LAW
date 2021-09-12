
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;


var Plab,rof,ms;

function preload(){
Plab = loadImage("Plab.png");
//ms = loadSound("ms.mp3");	
}

function setup() {
	createCanvas(1600, 750);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
		roof1 = new Roof(800,75,800,30)
	bob1 = new Bob(500,730,50);
	bob2 = new Bob(600,730,50);
	bob3 = new Bob(700,730,50);
	bob4 = new Bob(800,730,50);
	bob5 = new Bob(900,730,50);
	bob6 = new Bob(1000,730,50);
	bob7 = new Bob(1100,730,50);
		
	rope1 = new Rope(roof1.body, bob1.body,-300, -1)
    rope2 = new Rope(roof1.body, bob2.body,-200,0)
    rope3 = new Rope(roof1.body, bob3.body, -100,0)
    rope4 = new Rope(roof1.body, bob4.body,0,0)
    rope5 = new Rope(roof1.body, bob5.body,100,0)
	rope6 = new Rope(roof1.body, bob6.body,200,0)
    rope7 = new Rope(roof1.body, bob7.body,300,0)
    
		
	Engine.run(engine);
  
}


function draw() {
 
  background(Plab);
  
 
 /* if(isTouching(bob1,bob2)){
    ms.play();
  }*/

 rope1.display();
 rope2.display();
 rope3.display();
 rope4.display();
 rope5.display();
 rope6.display();
 rope7.display();
 
	roof1.display();
	bob1.display();
	bob2.display();
	bob3.display();
	bob4.display();
	bob5.display();
	bob6.display();
	bob7.display();
  drawSprites();
  fill("white")
  stroke("black")
  textFont("Copperplate")
  textSize(45)
 text("DRAG THE FIRST BOB TO START THE CRADLE",300,50)
}
function mouseDragged (){

    Matter.Body.setPosition(bob1.body,{x:mouseX , y: mouseY })
}

function mouseReleased (){

	this.rope.fly()
 
 }
