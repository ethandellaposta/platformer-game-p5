function Wall(x,y,w,h){
  this.w=w;
  this.h=h;
  options = {
    isStatic: true,
    friction: 1
  }
  this.box = Bodies.rectangle(x,y,w,h,options);

  this.show = function(){
    var pos = this.box.position;
    fill(0, 124, 246);
    rectMode(CENTER)
    rect(pos.x,pos.y,this.w,this.h);
    noStroke();
  }
  World.add(world, this.box);

}
