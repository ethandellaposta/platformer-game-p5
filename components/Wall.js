function Wall(x, y, w, h, x2, y2, cycles, offset) {
  this.w = w;
  this.h = h;
  options = {
    isStatic: true,
    friction: 1,
  };
  this.box = Bodies.rectangle(x, y, w, h, options);
  this.offset = offset;
  this.cycles = cycles;
  this.x2 = x2;
  this.y2 = y2;
  this.x = this.box.position.x;
  this.y = this.box.position.y;

  this.show = function (fc) {
    this.ytemp = this.y;
    this.xtemp = this.x;
    if (this.x2 && this.y2) {
      this.move(fc);
    }
    fill(45, 52, 54);
    rectMode(CENTER);
    rect(this.xtemp, this.ytemp, this.w, this.h);
    noStroke();
  };

  this.move = function (fc) {
    var offset = this.offset;
    var cycles = this.cycles;
    var x2 = this.x2;
    var y2 = this.y2;
    fc = fc + offset;
    var moded = fc % cycles;
    if (moded < cycles / 2) {
      this.xtemp = map(moded, 0, cycles / 2, x, this.x2);
      this.ytemp = map(moded, 0, cycles / 2, y, this.y2);
    } else {
      this.xtemp = map(moded, cycles / 2, cycles, this.x2, x);
      this.ytemp = map(moded, cycles / 2, cycles, this.y2, y);
    }
    Matter.Body.setPosition(this.box, { x: this.xtemp, y: this.ytemp });
  };

  World.add(world, this.box);
}
