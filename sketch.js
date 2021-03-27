var helicopterIMG, helicopterSprite, package,packageIMG,package1,packageIMG1,packageIMG2,package2;
var packageBody,ground,package1Body,package2Body;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	packageIMG1=loadImage("package1.png")
	packageIMG2=loadImage("package2.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	package=createSprite(width/2, 80, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2
  
   package1 = createSprite(480, 80, 10,10)
   package1.addImage(packageIMG1)
   package1.scale=0.2

   package2 = createSprite(330, 80, 10,10)
   package2.addImage(packageIMG2)
   package2.scale=0.2



	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	line1=createSprite(width/2,height-50,200,20);
	line1.shapeColor="red";

	line2=createSprite(510,610,20,100);
	line2.shapeColor="red"; 

	line3=createSprite(310,610,20,100);
	line3.shapeColor="red"; 

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});

	World.add(world, packageBody);
	
	packageBody1 = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2, isStatic:true});

	World.add(world, packageBody);
	
	packageBody2 = Bodies.circle(width/2 , 200 , 5 , {restitution:0.2,isStatic:true,});

	World.add(world, packageBody);
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true,} );

 	World.add(world, ground);


	Engine.run(engine);
  



}


function draw() {
  rectMode(CENTER);
  background(0);
  

  package.x= packageBody.position.x 
  package.y= packageBody.position.y 

  package1.x= packageBody1.position.x 
  package1.y= packageBody1.position.y 

  package2.x= packageBody2.position.x 
  package2.y= packageBody2.position.y 

  drawSprites();
}
  function keyPressed() {
	if (keyCode === DOWN_ARROW) {
	
		Matter.Body.setStatic(packageBody,false);
	
	  }
	  if (keyCode === DOWN_ARROW) {
	
		Matter.Body.setStatic(packageBody1,true);
	
	  }
	  if (keyCode === DOWN_ARROW) {
	
		Matter.Body.setStatic(packageBody2,false);
	
	  }
  }






