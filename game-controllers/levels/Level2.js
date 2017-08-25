function Level2(lives){
  this.orgx = 85;
  this.orgy = 630;
  ball = new Ball(this.orgx,this.orgy,25,lives);
  //Lava(x,y,w,h,cycles,offset)
  lavas=[]
  lavas.push(new Lava(550,690, 820,20,0,0));
  lavas.push(new Lava(665,148, 20,215,150,0));
  lavas.push(new Lava(445,148, 20,215,150,0));
  lavas.push(new Lava(225,148, 20,215,150,0));
  //Wall(x,y,w,h,x2,y2,cycles,offset)
  clearWalls();
  walls=[]
  topbar();
  //other
  walls.push(new Wall(20,400, 40,1000));
  walls.push(new Wall(980,400, 40,1000));
  walls.push(new Wall(90,680, 100,40));
  //Verticles
  walls.push(new Wall(225,525, 60,200));
  walls.push(new Wall(445,525, 60,200));
  walls.push(new Wall(665,525, 60,200));
  //
  walls.push(new Wall(875,520, 60,60));
  walls.push(new Wall(400,275, 800,40));
  walls.push(new Wall(500,-10, 1000,20));
  //Square(x,y)
  squares=[]
  squares.push(new Square(225,380))
  squares.push(new Square(445,380))
  squares.push(new Square(665,380))
  squares.push(new Square(875,450))
  squares.push(new Square(225,100))
  squares.push(new Square(445,100))
  squares.push(new Square(665,100))
  //Diamond(x,y)
  diamond = new Diamond(100,220)
}
