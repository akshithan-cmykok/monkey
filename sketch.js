
var monkey , monkey_running
var banana ,bananaImage, Obstacle, ObstacleImage
var FoodGroup, ObstacleGroup
var score=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  ObstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 400);

  var message = "This message is for you";
 console.log(message)
  
  monkey = createSprite(90,350,10,10);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(950,400,900,20);
 ground.velocityX=-4;
ground.x = ground.width /2;
console.log(ground.x);
  
FoodGroup=new Group();
ObstacleGroup = new Group();
}


function draw() {
  background(225);
  
 if (ground.x >400){
      ground.x = ground.width/2;
    } 
  
  ground.velocityX = -(4 + 3* score/100)
    //scoring
    score = score + Math.round(getFrameRate()/60);
  ground.velocityX = 1;
  
  monkey.collide(ground);
  
  //jump when the space key is pressed
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
    }
  if (FoodGroup.isTouching(monkey)){
   FoodGroup.destroyEach()
   score=score+1
  }
   
  
  //if(ObstacleGroup.isTouching(monkey)){ 
    //ground.velocityX=0
     // monkey.velocityY=0;
    //ObstacleGroup.setvelocityXEach(0);
      //FoodGroup.setvelocityXEach(0);
      //ObstacleGroup.setLifetimeEach(-1);
    //FoodGroup.setLifetimeEach(-1);
    //}
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("survival Time"+score,100,50)
  
    monkey.velocityY = monkey.velocityY + 0.8
  spawnObstacle();
  spawnbanana();
 drawSprites(); 
  
}
function spawnbanana(){
  if (frameCount % 80 === 0) {
  banana= createSprite(600,120,10,10);
    banana.addImage(bananaImage);
   banana.y=Math.round(random(200,300))
    banana.scale=0.1;
   banana.velocityX = -4;
  FoodGroup.add(banana)
}
}
function spawnObstacle(){
  if (frameCount % 300 === 0) {
   Obstacle= createSprite(600,380,10,10);
   Obstacle.addImage(ObstacleImage);
    Obstacle.scale=0.1;
    Obstacle.velocityX = -4;
    ObstacleGroup.add(Obstacle);
    
    
}

}

