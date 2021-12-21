const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var engine, world, backgroundImg;

var canvas, angle, tower, ground, cannonBase, cannon, cannonball;
var cannonBaseImg, cannonImg;
var cball = [];
var pirateShip;
var boats = [];


function preload() {
  backgroundImg = loadImage("./assets/background.gif");
  towerImage = loadImage("./assets/tower.png");
}

function setup() {

  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  
  var options = {
    isStatic: true
  }
angleMode(DEGREES);
angle = 15;
  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  cannon = new Cannon(180,110,130,100,angle);
}

function draw() {
  image(backgroundImg,0,0,1200,600)
  Engine.update(engine);

  
  rect(ground.position.x, ground.position.y, width * 2, 1);
  

  push();
  imageMode(CENTER);
  image(towerImage,tower.position.x, tower.position.y, 160, 310);
  pop();
  for (var i = 0; i<cball.length;i++){
    showCBalls(cball[i], i);
  }
  showBoats();
  cannon.show();
  //cannonball.show();
  //pirateShip.show();
}
function keyReleased(){
  if (keyCode === RIGHT_ARROW){
    cannonball = new Cannonball(cannon.x,cannon.y);
    cannonball.trejectory = [];
    Matter.Body.setAngle(cannonball.body, cannon.angle);
    cball.push(cannonball);
    //cannonball.shoot();
  }
}
function showCBalls(ball){
  if (ball){
    ball.show();
  }
}
function keyReleased(){
  if (keyCode === RIGHT_ARROW){
    cball[cball.length - 1].shoot();
  }
}

function showBoats(){
  if (boats.length > 0){
    if (boats [boats.length - 1] === undefined ||
      boats[boats.length - 1].body.position.x < width - 300){
        pirateShip = new PirateShip(w, h - 60, 170, 170, - 80);
        var position = [-40,-60,-70,-20]
        var pos = random(positions);
        boats.push();
      }
  }
}