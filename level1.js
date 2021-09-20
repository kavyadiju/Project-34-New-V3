class Level1
{
    constructor()
    {
        this.plunger=new Plunger(600,200,30,75)
        this.wedge=new Wedge(200,150,30,75)
  
    }
    display()
    {
      this.plunger.display(true)
    
      this.wedge.display()
    
    }
    remove()
    {
        this.plunger.remove();
        this.wedge.remove();
   
    }
    checkCollision()
    {
        if(Matter.SAT.collides(box1.body, this.plunger.body).collided)
        {
            Matter.Body.applyForce(box1.body,box1.body.position,{x:45,y:-10})
        }
    }
}