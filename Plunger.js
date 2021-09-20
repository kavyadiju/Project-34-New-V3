class Plunger
{
    constructor(x,y,w,h)
    {
      var options={
      isStatic:true
      }
      this.x=x;
      this.y=y;
      this.w=w;
      this.h=h;
      this.body=Bodies.rectangle(x,y,w,h,options)
      World.add(world,this.body)
    }
    display(isVertical)
    {
        var pos=this.body.position;
        rectMode(CENTER)
        if(isVertical)
        {
            rect(pos.x,pos.y,this.w,this.h-20)
            ellipse(pos.x,pos.y-this.h/2,20,20)  
        }
        else{
            rect(pos.x,pos.y+30,this.w,this.h-20)
            ellipse(pos.x,pos.y+this.h/2+30,20,20)
        }
      
    }
    remove()
    {
        World.remove(world,this.body)
        
    }
}