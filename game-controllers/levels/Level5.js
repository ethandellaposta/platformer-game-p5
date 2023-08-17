function Level5(lives) {
  this.orgx = 0;
  this.orgy = 0;
  ball = new Ball(this.orgx, this.orgy, 25, lives);
  //   //Lava(x,y,w,h,cycles,offset)
  lavas = [];
  //   //left
  lavas.push(new Lava(305, 690, 190, 20, 0, 0));
  //   //right
  lavas.push(new Lava(897.5, 580, 205, 10, 100, 80));
  clearWalls();
  walls = [];
  topbar();
  walls.push(new Wall(100, 200, 1000, 500, 0, 200, 80));
  //   //Square(x,y)
  squares = [];
  //   //Diamond(x,y)
  diamond = new Diamond(100, 200);
}
