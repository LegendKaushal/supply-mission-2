class boder 
{

    constructor(x,y,height,angle)
    {
        var log_Options = {

            restitution:0.8,
            friction:1.5,
            density:1
          
        }



     this.body = Bodies.rectangle(x,y,20,height,log_Options)
     this.width = 20
     this.height = height
     Matter.Body.setAngle(this.body,angle)
     World.add(world,this.body)
    }

    display()
    {
       var angle = this.body.angle
       var pos = this.body.position
     
       push()
       translate(pos.x,pos.y)

       angleMode(RADIANS)
       rotate(angle)
       

       rectMode(CENTER)
       strokeWeight(2)
       stroke("black")
       fill("brown")    
       rect(0,0,this.width,this.height)
      
       pop()
       
    }
    
    
    
    
}