// module aliases
var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

function Ball(x, y, r, lives) {
  this.lives = lives;
  this.circle = Bodies.circle(x, y, r);
  this.show = function (opt) {
    var pos = this.circle.position;
    fill(108, 92, 231);
    strokeWeight(2);
    ellipseMode(RADIUS);
    ellipse(pos.x, pos.y, this.circle.circleRadius, this.circle.circleRadius);
    noStroke();
  };

  World.add(world, this.circle);
}
