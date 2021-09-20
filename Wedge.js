class Wedge{
constructor(x,y) 
{
var options ={
     isStatic: true
   };
 this.body = Bodies.rectangle(x,y,100,20,options);
  World.add(world,this.body);
this.angle=60
}
remove()
{
    World.remove(world,this.body)
    
}

display() 
{
  rectMode(CENTER);
  angleMode(RADIANS)
  Matter.Body.rotate(this.body,this.angle);
  push();
  translate(this.body.position.x,this.body.position.y);
  rotate(this.angle);
  rect(0,0,100,20)
  pop();
  this.angle+=0.2;
 }
}
