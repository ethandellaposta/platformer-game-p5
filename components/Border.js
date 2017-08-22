function Border(x,y,w,h){
  this.w=w;
  this.h=h;
  options = {
    isStatic: true,
    friction: 0
  }
  this.box = Bodies.rectangle(x,y,w,h,options);
  World.add(world, this.box);

}
