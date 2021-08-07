class Ball {
    constructor(x, y, radius){
        var options={
    restitution:0.3,
    friction:0.5,
    densitfy:1.2,
        }
  this.body = Bodies.rectangle(x, y, width, height, options);
  this.radius = radius

  World.add(world,this.body)
    }
display(){
  ellipseMode(RADIUS)

  fill("yellow")

  rect(this.body.position.x,this.body.position.y,this.radius)
}    
};