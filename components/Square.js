function Square(x,y){
  this.x = x;
  this.y = y;
  this.w=17;
  this.h=17;
  this.show = function(){
    strokeWeight(2);
    stroke(133, 137, 115);
    fill(163, 167, 145);
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h);
    noStroke();
  }
}
