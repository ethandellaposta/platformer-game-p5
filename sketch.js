// module aliases
var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies;

var x = 50;
var y = 550;
var dx = 0;
var dy = 0;
var w = 50;
var walls;
var engine;
var ball;
var world;
var lavas;
var squares;
var diamond;
var done;
var game;
var level;
var paused;
var start = false;
function preload() {
  img = loadImage("img/home.jpg");
}

function setup() {
  textFont("optima");
  var c = createCanvas(1000, 700);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  done = false;
  paused = false;
  colorMode(RGB, 255, 255, 255, 1);
}

function mouseClicked() {
  ybound = mouseY > 300 && mouseY < 430;
  xbound = mouseX > 650 && mouseX < 910;
  if (ybound && xbound) {
    game = new Game(1, 10);
    start = true;
    //borders
    new Border(-10, 350, 20, 700);
    new Border(1010, 350, 20, 700);
    new Border(500, 710, 1000, 20);
    new Border(500, -10, 1000, 20);
    img = loadImage("img/heart.png");
  }
}

function draw() {
  if (start) {
    if (ball.lives != 0) {
      //Global
      background(178, 190, 195);
      if (!paused) {
        //Ball
        ball.show(0);
        lavaCollision(lavas);
        if (keyIsDown(RIGHT_ARROW)) {
          Matter.Body.setVelocity(ball.circle, {
            x: 4,
            y: ball.circle.velocity.y,
          });
        }
        if (keyIsDown(LEFT_ARROW)) {
          Matter.Body.setVelocity(ball.circle, {
            x: -4,
            y: ball.circle.velocity.y,
          });
        }
        if (collision(walls)) {
          if (keyIsDown(DOWN_ARROW)) {
            Matter.Body.setVelocity(ball.circle, {
              x: ball.circle.velocity.x / 2,
              y: ball.circle.velocity.y / 2,
            });
          }
        }
      }

      //Walls
      for (var i = 0; i < walls.length; i++) {
        walls[i].show(frameCount);
      }
      //Lava
      for (var i = 0; i < lavas.length; i++) {
        lavas[i].show(frameCount);
      }
      //Sqaure
      for (var i = 0; i < squares.length; i++) {
        squares[i].show();
      }
      squareCollision(squares);
      //Diamond
      if (squares.length == 0) {
        collisionDiamond(diamond);
        diamond.show();
      }
      fill(255);
      textSize(20);
      level = text("Level " + game.level, 100, 25);
      if (!paused) {
        lives = text(ball.lives, 850, 25);
        imageMode(CENTER);
        image(img, 890, 19, 20, 20);
      } else {
        fill(255, 0, 0);
        textSize(25);
        lives = text(ball.lives, 850, 27);
        imageMode(CENTER);
        image(img, 880, 19, 25, 25);
      }
    } else {
      World.remove(world, ball.circle);
      background(0);
      fill(255, 0, 0);
      textSize(60);
      gameover = text("GAME OVER", 300, 350);
      fill(150);
      textSize(30);
      start = text("Press enter to start over.", 315, 500);
    }
  } else {
    hs = new HomeScreen();
  }
}

function keyPressed() {
  if (collision(walls)) {
    if (keyCode === UP_ARROW) {
      Matter.Body.setVelocity(ball.circle, {
        x: ball.circle.velocity.x,
        y: -10,
      });
    }
  }
  if (ball.lives == 0) {
    if (keyCode === ENTER) {
      game = new Game(1, 5);
    }
  }
}

function collision(w) {
  for (var i = 0; i < w.length; i++) {
    var pos = w[i].box.position;
    var boundsW = Matter.Bounds.create([
      { x: pos.x - w[i].w / 2, y: pos.y - w[i].h / 2 },
      { x: pos.x + w[i].w / 2, y: pos.y + w[i].h / 2 },
    ]);
    var boundsB = Matter.Bounds.create([
      {
        x: ball.circle.position.x - ball.circle.circleRadius - 3,
        y: ball.circle.position.y - ball.circle.circleRadius,
      },
      {
        x: ball.circle.position.x + ball.circle.circleRadius + 3,
        y: ball.circle.position.y + ball.circle.circleRadius + 3,
      },
    ]);
    if (Matter.Bounds.overlaps(boundsW, boundsB)) {
      return true;
    }
  }
  return false;
}

function squareCollision(s) {
  for (var i = 0; i < squares.length; i++) {
    var sx = s[i].x;
    var sy = s[i].y;
    var sw = s[i].w;
    var sh = s[i].h;
    var boundsS = Matter.Bounds.create([
      { x: sx - sw / 2, y: sy - sh / 2 },
      { x: sx + sw / 2, y: sy + sh / 2 },
    ]);
    var boundsB = Matter.Bounds.create([
      {
        x: ball.circle.position.x - ball.circle.circleRadius - 3,
        y: ball.circle.position.y - ball.circle.circleRadius - 3,
      },
      {
        x: ball.circle.position.x + ball.circle.circleRadius + 3,
        y: ball.circle.position.y + ball.circle.circleRadius + 3,
      },
    ]);
    if (Matter.Bounds.overlaps(boundsS, boundsB)) {
      squares.splice(i, 1);
      return true;
    }
  }
  return false;
}

function lavaCollision(l) {
  for (var i = 0; i < lavas.length; i++) {
    if (l[i].touchable) {
      var sx = l[i].x;
      var sy = l[i].y;
      var sw = l[i].w;
      var sh = l[i].h;
      var boundsL = Matter.Bounds.create([
        { x: sx - sw / 2, y: sy - sh / 2 },
        { x: sx + sw / 2, y: sy + sh / 2 },
      ]);
      var boundsB = Matter.Bounds.create([
        {
          x: ball.circle.position.x - ball.circle.circleRadius - 1,
          y: ball.circle.position.y - ball.circle.circleRadius - 1,
        },
        {
          x: ball.circle.position.x + ball.circle.circleRadius + 1,
          y: ball.circle.position.y + ball.circle.circleRadius + 1,
        },
      ]);

      if (Matter.Bounds.overlaps(boundsL, boundsB)) {
        paused = true;
        Matter.Body.setVelocity(ball.circle, { x: 0, y: 0 });
        if (ball.lives == 1) {
          delay = 0;
        } else {
          delay = 700;
        }
        ball.lives -= 1;
        setTimeout(function () {
          Matter.Body.setPosition(ball.circle, {
            x: game.levelObject.orgx,
            y: game.levelObject.orgy,
          });
          paused = false;
          return true;
        }, delay);
      }
    }
  }
  return false;
}

function collisionDiamond(d) {
  var x = d.x - 10;
  var y = d.y + 10;
  var x2 = d.x + 10;
  var y2 = d.y + 10;
  var boundsD = Matter.Bounds.create([
    { x: x, y: y },
    { x: x2, y: y2 },
  ]);
  var boundsB = Matter.Bounds.create([
    {
      x: ball.circle.position.x - ball.circle.circleRadius - 3,
      y: ball.circle.position.y - ball.circle.circleRadius - 3,
    },
    {
      x: ball.circle.position.x + ball.circle.circleRadius + 3,
      y: ball.circle.position.y + ball.circle.circleRadius + 3,
    },
  ]);
  if (Matter.Bounds.overlaps(boundsD, boundsB)) {
    new_lvl = game.level + 1;
    World.remove(world, ball.circle);
    game = new Game(new_lvl, ball.lives);
  }
}

function clearWalls() {
  if (walls) {
    for (var z = 0; z < walls.length; z++) {
      World.remove(world, walls[z].box);
    }
  }
}

function topbar() {
  walls.push(new Wall(500, 20, 1000, 40));
}
