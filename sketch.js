var bow,red_balloon,blue_balloon,green_balloon;
var background,arrow;
var bowImage,red_balloonImage,blue_balloonImage,green_balloonImage;
var backgroundImage,arrowImage;

function preload(){
 //load your images here 
 backgroundImage=loadImage("background0.png");
 // backgroundImage=loadImage("background20.png")
  
 bowImage=loadImage("bow0.png");
  red_balloonImage=loadImage("red_balloon0.png");
  blue_balloonImage=loadImage("blue_balloon0.png");
  green_balloonImage=loadImage("green_balloon0.png");
  //arrowImage=loadImage("arrow0.png");
  
}
function setup() {
  createCanvas(600, 600);
  background=createSprite(0,0,600,600);
  background.addImage(backgroundImage);
  background.scale=2.5;
 
  //add code here
  for(var r=40;r<400;r=r+70){
  red_balloon=createSprite(50,r,1,1);
 red_balloon.addImage(red_balloonImage);
  red_balloon.scale=0.1;
  }
 for(var b=80;b<400;b=b+65){
  blue_balloon=createSprite(100,b,20,20);
  blue_balloon.addImage(blue_balloonImage);
  blue_balloon.scale=0.11;
 }
  for(var g=100;g<400;g=g+70){
  green_balloon=createSprite(150,g,20,20);
  green_balloon.addImage(green_balloonImage);
  green_balloon.scale=0.1;
  }
  bow=createSprite(550,mouseY,50,50);
  bow.addImage(bowImage);
   bow.scale=1;
  
  //arrow=createSprite(550,mouseY,50,50);
  //arrow.addImage(arrowImage);
 // arrow.scale=0.3;
}

function draw() {

  
  //add code here
  background.velocityX= -6
  
  if(background.x<0){
    background.x = background.width/2;
  }
  bow.y=mouseY;
  drawSprites();
}

