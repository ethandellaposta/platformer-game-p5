function Level1(lives){
  this.orgx = 85;
  this.orgy = 630;
  ball = new Ball(this.orgx,this.orgy,25,lives);
  //Lava(x,y,w,h,cycles,offset)
  lavas=[]
  lavas.push(new Lava(500,690, 620,30,0));
  //Wall(x,y,w,h,x2,y2,cycles,offset)
  clearWalls();
  walls=[]
  //top bar
  walls.push(new Wall(500,20, 1000,40));
  //other
  walls.push(new Wall(500,170, 170,40));
  walls.push(new Wall(90,680, 200,40));
  walls.push(new Wall(910,680, 200,40));
  walls.push(new Wall(290,580, 200,40));
  walls.push(new Wall(710,580, 200,40));
  walls.push(new Wall(500,400, 200,200));
  //Square(x,y)
  squares=[]
  squares.push(new Square(290,530))
  squares.push(new Square(710,530))
  squares.push(new Square(370,400))
  squares.push(new Square(630,400))
  squares.push(new Square(500,270))
  squares.push(new Square(500,120))
  //Diamond(x,y)
  diamond = new Diamond(900,630)
}
