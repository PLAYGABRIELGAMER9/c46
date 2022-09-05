let ground;
let lander;
var lander_img;
var bg_img;
var marte;
var marteimg;
var mercurio;
var mercurioimg;
var netuno;
var netunoimg;
var plutao;
var plutaoimg;
var terra;
var terraimg;
var venus;
var venusimg;
var jupiter;
var jupiterimg;


var vy = 0;
var g = 0.05;

function preload()
{
  lander_img = loadImage("normal.png");
  bg_img = loadImage("bg.png");
  marteimg = loadImage("marte.png");
  mercurioimg = loadImage("mercurio.png");
  netunoimg = loadImage("netuno.png");
  plutaoimg = loadImage("plutao.png");
  terraimg = loadImage("terra.png");
  venusimg =loadImage("venus.png");
  jupiterimg = loadImage("jupiter.png");
}

function setup() {
  createCanvas(1000,700);
  frameRate(80);

  lander = createSprite(100,50,30,30);
  lander.addImage(lander_img);
  lander.scale = 0.1;
  lander.setCollider("rectangle",0,0,200,200)
  marte = createSprite(100,50,30,30)
  marte.addImage(marteimg);
  
  
  rectMode(CENTER);
  textSize(15);
}

function draw() 
{
  background(51);
  image(bg_img,0,0);
  push()
  fill(255);
  text("Vertical Velocity: "+round(vy),800,75);
  pop();

  //descida
  vy +=g;
  lander.position.y+=vy;

  drawSprites();
}

function keyPressed()
{
  if(keyCode==UP_ARROW)
  {
    upward_thrust();
    lander.changeAnimation('thrusting');
    thrust.nextFrame();
    
  }
}

function upward_thrust()
{
  vy = -1;
}

