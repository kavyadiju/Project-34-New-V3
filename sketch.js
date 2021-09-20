const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var box1;
var wall1,wall2,wall3,wall4;
var level=1;
var level1,level2;

var engine, world;

var coin,coinsGroup,coinImg;

var goal;
var isVertical=true;

var score=0;
function preload()
{
coinImg=loadImage("coin.png")
}

function setup() {
  //create the canvas
  createCanvas(1200,250);
  
  //setup
  engine = Engine.create();
  world = engine.world;
 
  //create boxes
  wall1 = new Ground(600, 240, 1200,20);
  wall2 = new Ground(600, 10, 1200,20);
  wall3 = new Ground(10, 125, 20,250);
  wall4 = new Ground(1190, 125, 20,250);

  goal=new Goal(1100,220);

  
  box1=new Box(50,50,20,20);
  level1=new Level1();
 
  coinsGroup=new Group();
  spawnCoins(10)
}


function draw() {
  //set the background
  background(50,50,55);  
  drawSprites();
  //update the engine
  Engine.update(engine);
  
  if(level<3)
  {
    textSize(20)
    fill("white")
    text(`Score: ${score}`,1050,50)
    goal.display();
    box1.display()
  }


  //display ground
  wall1.display()
  wall2.display()
  wall3.display()
  wall4.display()

 

  if(level===1)
  {
    
    level1.display()
    level1.checkCollision()
    for(var i=0;i<coinsGroup.length;i++)
    { 
  if(collide(box1.body,coinsGroup.get(i),20) == true)
  {
    score++;
    coinsGroup.get(i).destroy();
  }
}
    if(box1.body.position.x>1050 && box1.body.position.y>180 )
    {
      coinsGroup.destroyEach();
      level2=new Level2();
      level=2
      spawnCoins(30)
      Matter.Body.setPosition(box1.body,{x:30,y:30})
      goal.reposition(1100,150)
       
    level1.remove();
    }
    
  
  }
  if(level===2)
  {

    level2.display();
    level2.checkCollision()
    for(var i=0;i<coinsGroup.length;i++)
    { 
  if(collide(box1.body,coinsGroup.get(i),20) == true)
  {
    score++;
    coinsGroup.get(i).destroy();
  }
  
  if(box1.body.position.x>1100 && box1.body.position.y>100 && box1.body.position.y<150 )
  {
    coinsGroup.destroyEach();
    World.remove(world,box1.body)
    goal.remove();  
    level2.remove();
    level=3
  }
 }

}
  rectMode(CENTER)
  if(level===3)
  {
    background("black")
    textSize(40)
    fill("white")
    text(`You won ${score} coins!!`,450,150)
  }
}


function keyPressed(){
 if(keyCode === 39 ){
  box1.flingForward();
 
 }
 if(keyCode === 38 ){
  box1.flingUp();
 
 }
 if(keyCode === 37 ){
  box1.flingBack();
 
 }
}

function spawnCoins(n)
{
  for(var i=0;i<=n;i++)
  {
    coin=createSprite(random(50,1180),random(50,230))
    coin.addImage(coinImg)
    coin.scale=0.2;
    coinsGroup.add(coin)
  }
}
function collide(body,sprite,x)
{
  if(body!=undefined && body!=null)
        {
         var d = dist(body.position.x,body.position.y,sprite.position.x,sprite.position.y);
          if(d<=x)
            {
              
               return true; 
            }
            else{
              return false;
            }
         }
}
