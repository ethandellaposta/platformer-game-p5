function Diamond(x,y){
  this.x = x;
  this.y = y;
  this.x2 = x+20;
  this.y2 = y+35;
  this.x3 = x+40;
  this.y3 = y;
  var img = loadImage('img/diamond-icon.png')
  this.show = function(){
    imageMode(CENTER)
    image(img,this.x,this.y,70,70)
  }
}
