// E.g. Level 5

// function Level4(lives){
//   this.orgx = 70;
//   this.orgy = 650;
//   ball = new Ball(this.orgx,this.orgy,25,lives);
//   //Lava(x,y,w,h,cycles,offset)
//   lavas=[]
//   //left
//   lavas.push(new Lava(305,690,190,20,0,0))
//   lavas.push(new Lava(102.5,580,205,10,100,80))
//   lavas.push(new Lava(305,480,190,10,100,60))
//   lavas.push(new Lava(102.5,380,205,10,100,40))
//   lavas.push(new Lava(305,280,190,10,100,20))
//   lavas.push(new Lava(102.5,180,205,10,100,0))
//   //right
//   lavas.push(new Lava(897.5,580,205,10,100,80))
//   lavas.push(new Lava(695,480,190,10,100,60))
//   lavas.push(new Lava(897.5,380,205,10,100,40))
//   lavas.push(new Lava(695,280,190,10,100,20))
//   lavas.push(new Lava(897.5,180,205,10,100,0))
//   //Wall(x,y,w,h,x2,y2,cycles,offset)
//   clearWalls();
//   walls=[]
//   topbar();
//   //left
//   walls.push(new Wall(105,680, 210,40));
//   walls.push(new Wall(310,580, 210,40));
//   walls.push(new Wall(105,480, 210,40));
//   walls.push(new Wall(310,380, 210,40));
//   walls.push(new Wall(105,280, 210,40));
//   walls.push(new Wall(310,180, 210,40));
//   //center
//   walls.push(new Wall(500,430, 200,540));
//   //right
//   walls.push(new Wall(895,680, 210,40));
//   walls.push(new Wall(690,580, 210,40));
//   walls.push(new Wall(895,480, 210,40));
//   walls.push(new Wall(690,380, 210,40));
//   walls.push(new Wall(895,280, 210,40));
//   walls.push(new Wall(690,180, 210,40));

//   //Square(x,y)
//   squares=[]
//   //Diamond(x,y)
//   diamond = new Diamond(930,630);

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
