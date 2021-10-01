var path;
var  boy;
var pathImg;
var boyImg;
function preload(){
  //pre-load images
pathImg = loadImage("path.png");
boyImg = loadAnimation("Runner-1.png");

}

function setup(){
  createCanvas(400,400);
  //create sprites here

  path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 1.2;

boy = createSprite();
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.08;


path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;



}

function draw() {
  background(0);

  if(path.y > height ){
    path.y = height/2;
  }


}
