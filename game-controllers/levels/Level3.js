function Level3(lives){
  this.orgx = 70;
  this.orgy = 660;
  ball = new Ball(this.orgx,this.orgy,25,lives);
  //Lava(x,y,w,h,cycles,offset)
  lavas=[]
  lavas.push(new Lava(500,690, 720,20,0,0));
  lavas.push(new Lava(960,520, 120,20,150,0));
  lavas.push(new Lava(500,570, 20,240,150,0));
  //Wall(x,y,w,h,x2,y2,cycles,offset)
  clearWalls();
  walls=[]
  //top bar
  walls.push(new Wall(500,20, 1000,40));
  //
  walls.push(new Wall(70,680, 140,40));
  walls.push(new Wall(930,680, 140,40));
  //hor-move
  walls.push(new Wall(220,670, 170,20, 780,670,500,375));
  //
  walls.push(new Wall(450,430, 900,40));
  walls.push(new Wall(880,490, 40,80));


  //Square(x,y)
  squares=[]
  //Diamond(x,y)
  diamond = new Diamond(100,220)
}
