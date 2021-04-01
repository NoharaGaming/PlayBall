class Ball {
    constructor(x, y) {
      var options = {
        isStaric:false,  
        'restitution':0.3,
        friction:5.0,
        density:1.2

      }
      this.body = Bodies.circle(x, y, 18, options);
      this.radius = 18;
      
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      
    
      fill("green");
      circle(0, 0, this.radius);
      pop();
    }
  };
 