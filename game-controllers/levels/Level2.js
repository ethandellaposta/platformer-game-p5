function Level2(lives){
  this.orgx = 85;
  this.orgy = 630;
  ball = new Ball(this.orgx,this.orgy,25,lives);
  lavas=[]
  lavas.push(new Lava(550,690, 820,20,0,0));
  lavas.push(new Lava(665,148, 20,215,150,0));
  lavas.push(new Lava(445,148, 20,215,150,0));
  lavas.push(new Lava(225,148, 20,215,150,0));
  if(walls){
    for(var z=0;z<walls.length;z++){
      World.remove(world,walls[z].box);
    }
  }
  walls=[]
  //top bar
  walls.push(new Wall(500,20, 1000,40));
  //other
  walls.push(new Wall(20,400, 40,1000));
  walls.push(new Wall(980,400, 40,1000));
  walls.push(new Wall(90,680, 100,40));
  //Verticles
  walls.push(new Wall(225,515, 60,200));
  walls.push(new Wall(445,515, 60,200));
  walls.push(new Wall(665,515, 60,200));
  //
  walls.push(new Wall(875,520, 60,60));
  walls.push(new Wall(400,275, 800,40));
  walls.push(new Wall(500,-10, 1000,20));
  squares=[]
  squares.push(new Square(225,370))
  squares.push(new Square(445,370))
  squares.push(new Square(665,370))
  squares.push(new Square(875,450))
  squares.push(new Square(225,100))
  squares.push(new Square(445,100))
  squares.push(new Square(665,100))
  diamond = new Diamond(100,220)
}
