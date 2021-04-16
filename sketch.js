var starImg,bgImg;
var star, starBody;
var fairy,fairyImage;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	fairyImage=loadImage("images/fairyImage1.png","images/fairyImage2.png");
	//load animation for fairy here
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
fairyImage=createSprite(400,300,20,20);

	//create fairy sprite and add animation for fairy


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

fairyImage.velocityX=0;
fairyImage.velocityY=0;

  edges=createEdgeSprites();
  fairyImage.bounceOff(edges);


 
  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);

if (star.y>470 && starBody.position.y>470){
Matter.Body.setStatic(starBody,true);	
}
if (keyDown("UP_ARROW")) {
	fairyImage.velocityX=0
	fairyImagevelocityY=-4
	}
	  
  if (keyDown("DOWN_ARROW")) {
	fairyImage.velocityX=0
	fairyImage.velocityY=4
	}
	  
  if (keyDown("RIGHT_ARROW")) {
	fairyImage.velocityX=4
	fairyImage.velocityY=0
	}
	  
  if (keyDown("LEFT_ARROW")) {
	fairyImage.velocityX=-4
	fairyImage.velocityY=0
	}

  //write code to stop star in the hand of fairy

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}
	if (keyDown("UP_ARROW")) {
		fairyImage.velocityX=0
		fairyImagevelocityY=-4
		}
		  
	  if (keyDown("DOWN_ARROW")) {
		fairyImage.velocityX=0
		fairyImage.velocityY=4
		}
		  
	  if (keyDown("RIGHT_ARROW")) {
		fairyImage.velocityX=4
		fairyImage.velocityY=0
		}
		  
	  if (keyDown("LEFT_ARROW")) {
		fairyImage.velocityX=-4
		fairyImage.velocityY=0
		}
	//writw code to move fairy left and right
	
}
