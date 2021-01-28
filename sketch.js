const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var hero, back;

function preload() {
  backImg = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  hero = new Hero(200, 400, 300, 150);
  rope = new Fly(hero.body, {x: 300, y: 100});
  ground = new Ground(1500, 780, 3000, 40);
}

  function draw() {
    background(backImg);
    Engine.update(engine);

    hero.display();
    rope.display();
    ground.display();
  }

function mouseDragged(){
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY})
}