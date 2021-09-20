class Goal
{
	constructor(x,y)
	{

		var options={
			isStatic:true
		}

		this.width=120;
		this.height=70;
		this.thickness=20;
	
		
		this.bottomwall=Bodies.rectangle(x,y, this.width, this.thickness,options);
		this.leftWall=Bodies.rectangle(x-this.width/2+10, y-this.height/2, this.thickness, this.height,options)
		this.rightWall=Bodies.rectangle(x+this.width/2-10,y-this.height/2, this.thickness, this.height,options)

		World.add(world, this.bottomwall)
		World.add(world, this.leftWall)
		World.add(world, this.rightWall);

	}
	display()
	{
	  var posBottom=this.bottomwall.position;
	  rectMode(CENTER);
	  fill("gold")
	  rect(posBottom.x-this.width/2+10,posBottom.y-this.height/2,this.thickness,this.height)
	  rect(posBottom.x+this.width/2-10,posBottom.y-this.height/2,this.thickness,this.height)    
	  rect(posBottom.x,posBottom.y,this.width,this.thickness)
	}
    reposition(xx,yy)
	{

		Matter.Body.setPosition(this.leftWall,{x:xx-this.width/2+10,y:yy-this.height/2})
		Matter.Body.setPosition(this.rightWall,{x:xx+this.width/2-10,y:yy-this.height/2})
		Matter.Body.setPosition(this.bottomwall,{x:xx,y:yy})
	}
	remove()
	{
		World.remove(world,this.leftWall)
		World.remove(world,this.rightWall)
		World.remove(world,this.bottomwall)
	}
}