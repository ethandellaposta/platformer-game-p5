function Game(level,lives){
  this.level = level;

  if(this.level==1){
    level1 = new Level1(lives);
    this.levelObject = level1;
  }else if(this.level==2){
    level2 = new Level2(lives);
    this.levelObject = level2;
  }

}
