function Level3(lives){
  this.orgx = 70;
  this.orgy = 300;
  ball = new Ball(this.orgx,this.orgy,25,lives);
  //Lava(x,y,w,h,cycles,offset)
  lavas=[]
  lavas.push(new Lava(305,690, 210,20,0,0));
  lavas.push(new Lava(695,690, 210,20,0,0));
  lavas.push(new Lava(500,195, 20,310,100,50));
  lavas.push(new Lava(100,505, 20,310,100,0));
  lavas.push(new Lava(900,505, 20,310,100,0));
  lavas.push(new Lava(870,175, 20,270,100,50));

  //Wall(x,y,w,h,x2,y2,cycles,offset)
  clearWalls();
  walls=[]
  topbar();
  walls.push(new Wall(100,680, 200,40));
  walls.push(new Wall(80,330, 200,40));
  walls.push(new Wall(900,680, 200,40));
  walls.push(new Wall(920,330, 200,40));

  walls.push(new Wall(500,565, 180,430));


  //Square(x,y)
  squares=[]
  squares.push(new Square(300,140))
  squares.push(new Square(700,170))
  squares.push(new Square(300,500))
  squares.push(new Square(700,500))
  squares.push(new Square(20,630))
  squares.push(new Square(980,630))
  //Diamond(x,y)
  diamond = new Diamond(960,270)
}
