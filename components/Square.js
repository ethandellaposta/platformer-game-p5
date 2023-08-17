function Square(x, y) {
  this.x = x;
  this.y = y;
  this.w = 17;
  this.h = 17;
  this.show = function () {
    fill(253, 203, 110);
    rectMode(CENTER);
    rect(this.x, this.y, this.w, this.h);
    noStroke();
  };
}
