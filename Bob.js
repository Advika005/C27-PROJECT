class Bob{
    constructor(x,y,radius)   {
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1
        }
        this.body = Matter.Bodies.circle(x,y,radius,options);
        this.radius = radius;
        
        World.add(world, this.body);

       
    }
    display(){
        var pos = this.body.position;
        fill("silver");
        ellipseMode(CENTER);
        ellipse(pos.x,pos.y,60,60);
    }
}