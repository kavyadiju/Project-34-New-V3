class Level2{
    constructor()
    {
        this.plunger1=new Plunger(400,20,30,75)
        this.plunger2=new Plunger(800,200,30,75)
    }
    display()
    {
        this.plunger1.display(false)
        this.plunger2.display(true)
    }
 remove()
 {
    this.plunger1.remove();  
    this.plunger2.remove(); 
 }
 checkCollision()
 {
     if(Matter.SAT.collides(box1.body, this.plunger1.body).collided)
     {
         Matter.Body.applyForce(box1.body,box1.body.position,{x:45,y:10})
     }
     if(Matter.SAT.collides(box1.body, this.plunger2.body).collided)
     {
         Matter.Body.applyForce(box1.body,box1.body.position,{x:165,y:-50})
     }
 }
}