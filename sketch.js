//var - store info, value can be changed/ altered
var box;
var paddle;
var boundary1,boundary2,boundary3,boundary4;
var a=10;
var b=15;
var c=20;
var score=0;


//java script - basic game
function setup(){
  createCanvas(400,400);

  box=createSprite(200,200,25,25);
  paddle=createSprite(200,350,100,10);
  boundary1=createSprite(200,397,400,10);
  boundary2=createSprite(200,0,400,10);
  boundary3=createSprite(397,200,10,400);
  boundary4=createSprite(0,200,10,400);


   //velocity for the box
   box.velocityX=3;
   box.velocityY=4;

  
  
}

function draw(){
  background("lightblue");

  fill("purple");
  textSize(30);
  text("No.of Hits:"+score,300,50);

  if(box.isTouching(paddle)){
    score=score+1;
  }

   //if condition
   if (a==5) {
    fill("red");
    textSize(20);
    text("I am happy",50,50);
  }else if(a==10){
    fill("red");
    textSize(20);
    text("I am excited",50,50);
  }

  
 
  box.bounceOff(boundary1);
  box.bounceOff(boundary2);
  box.bounceOff(boundary3);
  box.bounceOff(boundary4);
  box.bounceOff(paddle);
  

  paddle.x=World.mouseX;



  drawSprites();
}
