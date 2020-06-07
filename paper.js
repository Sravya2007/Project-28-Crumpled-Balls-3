class Paper {
  constructor(x,y,radius) {
    var options ={
      isStatic: false,
      friction: 0.5,
      density: 1.2,
      restitution: 0.3
    }
    this.body = Bodies.circle(x, y, radius/2, options);
    this.radius = radius;
    World.add(world, this.body);
    this.image = loadImage("sprites/Paper_Pic.png");
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
};