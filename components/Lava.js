function Lava(x,y,w,h,cycles,offset){
  this.w=w;
  this.h=h;
  this.x = x;
  this.y = y;
  this.cycles = cycles;
  this.offset = offset;

  this.show = function(fc){
    fill(255,0,0)
    if(this.cycles!=0){
      this.move(fc);
    }else{
      this.touchable = true;
    }
    rectMode(CENTER)
    rect(this.x,this.y,this.w,this.h);
  }

  this.move = function(fc){
    var cycles = this.cycles;
    var offset = this.offset
    fc = fc+offset;
    var x = fc%cycles;
    var ctemp;
    if(x<cycles/2){
      ctemp = map(x,0,cycles/2,1,0)
    }else{
      ctemp = map(x,cycles/2,cycles,0,1)
    }
    fill(255,0,0,ctemp);
    if(ctemp>.5){
      this.touchable = true;
    }else{
      this.touchable = false;
    }
  }

}
