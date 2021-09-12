class Bob{

    constructor(x,y,radius){
         var options ={
          inertia: Infinity,
           restitution: 1,
            friction: 0, 
            frictionAir: 0.001, 
            slop: 1
         }
         this.body = Bodies.circle(x,y,radius-100,options);
         this.radius = radius;
         this.x = x;
         this.y = y;
         this.image = loadImage("Ball.png")

         World.add(world,this.body);
      }
      display(){
       
        push();
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,this.radius*2,this.radius*2);
        pop();
      }

}
