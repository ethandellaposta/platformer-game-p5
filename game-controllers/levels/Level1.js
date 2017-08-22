function Level1(lives){
  background(140,223,252);
  this.orgx = 85;
  this.orgy = 630;
  ball = new Ball(this.orgx,this.orgy,25,lives);
  lavas=[]
  lavas.push(new Lava(500,690, 620,30,0));
  if(walls){
    for(var z=0;z<walls.length;z++){
      World.remove(world,walls[z].box);
    }
  }
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
  squares=[]
  squares.push(new Square(290,530))
  squares.push(new Square(710,530))
  squares.push(new Square(370,400))
  squares.push(new Square(630,400))
  squares.push(new Square(500,270))
  squares.push(new Square(500,120))
  diamond = new Diamond(900,630)
}
