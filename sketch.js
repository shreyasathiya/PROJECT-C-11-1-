var ship;
var ship_moving;
var sea;
var sea_image;
function preload(){
ship_moving=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
sea_image=loadImage("sea.png");
}

function setup(){
  createCanvas(1700,1000);
  sea=createSprite(600,400,400,400);
  sea.addImage("sea",sea_image);
  sea.scale=0.5;
  sea.x=600;
  ship=createSprite(2000,400,20,20);
  ship.addAnimation("moving",ship_moving); 
  ship.scale=0.5;
  ship.x=1000;
  ship.y=310;
  sea.velocityX=-7;
}


function draw() {
  background("white");
 if(sea.x<550){
   sea.x=800;
 }

  drawSprites();
}