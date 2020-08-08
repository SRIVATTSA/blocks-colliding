var r1,r2

function setup() {
  createCanvas(1200,800);
  r1=createSprite(800, 100, 50, 50);
  r2=createSprite(800,500,70,60);
  r1.velocityY=4
  r2.velocityY=-4
}

function draw() {
  background(255,255,255); 
  if(r1.x-r2.x<r1.width/2+r2.width/2 &&r2.x-r1.x<r2.width/2+r1.width/2){
    r1.velocityX=r1.velocityX*-1
    r2.velocityX=r2.velocityX*-1

  } 
  if(r1.y-r2.y<r1.height/2+r2.height/2 &&r2.y-r1.y<r2.height/2+r1.height/2){
    r1.velocityY=r1.velocityY*-1
    r2.velocityY=r2.velocityY*-1
  }
  drawSprites();
}