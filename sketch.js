
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var boy,boyimage;
function preload()
{
	boyimage = loadImage("sprites/boy.png");
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stone1 = new stone(100,520,20);
boy = createSprite(180,610,30,30);
boy.addImage(boyimage);
boy.scale = 0.1;



  mango1=new mango(700,250,30);
  mango2=new mango(800,280,30);
  mango3=new mango(600,330,30);
  mango4=new mango(750,300,30);
  mango5=new mango(650,370,30);
  mango6=new mango(770,400,30);
  mango7=new mango(890,280,40);
  mango8=new mango(680,340,40);
  mango9=new mango(850,380,40);
  mango10=new mango(710,420,40);
  mango11=new mango(650,340,40);
  mango12=new mango(750,399,40);

  ground1 = new ground(450,700,1000,10);

tree1 = new tree();


	Engine.run(engine);
  
}



function draw() {
  rectMode(CENTER);
  background("white");
  
chain1 = new chain(stone1.body,{x:130,y:550});
  tree1.display();
  stone1.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();
  mango11.display();
  mango12.display();
  chain1.display();
  ground1.display();
  drawSprites();
  detectollision(stone1,mango1);
  detectollision(stone1,mango2);
  detectollision(stone1,mango3);
  detectollision(stone1,mango4);
  detectollision(stone1,mango5);
  detectollision(stone1,mango6);
  detectollision(stone1,mango7);
  detectollision(stone1,mango8);
  detectollision(stone1,mango9);
  detectollision(stone1,mango10);
  detectollision(stone1,mango11);
  detectollision(stone1,mango12);
 
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone1.body, {x:mouseX,y:mouseY});
}
function mouseReleased(){
  chain1.fly();
}
function keyPressed(){
  if(keyDown === 32){
    Matter.Body.setPosition(stone1.body, {x:130, y:550}) 
     chain1.attach(stone1.body);
  }
}
function detectollision(stone1,mangou){
  mangoBodyPosition=mangou.body.position
  stoneBodyPosition=stone1.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
  	if(distance<=mangou.r+stone1.r){
  	  Matter.Body.setStatic(mangou.body,false);
    }

  }


