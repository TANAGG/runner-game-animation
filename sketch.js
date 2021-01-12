var count = 0
var ground,runner,gameOver,restart,ground1
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var playerimg,player


function preload(){
playerimg = loadImage("image.jpg")
}



function setup() {
  createCanvas(600,600);
  
   ground = createSprite(580,0,400,1200);
   runner = createSprite(480,590,20,50);
   runner.addImage("player",playerimg)
  runner.scale = 0.1;
  runner.debug
   ObstaclesGroup = createGroup()
   obstacleGroup = createGroup()
  textSize(18);
  textFont("Georgia");
  textStyle(BOLD);
  
  
  
}

function draw() {
  background("white");
  createEdgeSprites()
  text("Score: "+ count, 200, 300);
  if(gameState === PLAY){
  ground.velocityY = -6
  count = count + Math.round(World.frameRate/60);
  if (ground.y < 0){
    ground.y = ground.height/2;
  }

  if(keyDown("RIGHT_ARROW")){
     runner.velocityX = 3;
  }

  if(keyDown("LEFT_ARROW")){
    runner.velocityX = -3;
 }

 if(ObstaclesGroup.isTouching(runner)){
  gameState = END;
}

if(obstacleGroup.isTouching(runner)){
  gameState = END;
}

spawnObstacle()
 spawnObstacles()
}else if(gameState === END) {
  textSize(20);
  text("GameOver",200,450)
    ground.velocityY = 0;
    runner.velocityX = 0;
    ObstaclesGroup.setVelocityYEach(0);
    ObstaclesGroup.setLifetimeEach(-1);
    obstacleGroup.setVelocityYEach(0);
    obstacleGroup.setLifetimeEach(-1);
}

  drawSprites();
  
  
  
}

function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(580,0,10,40);
    obstacle.velocityY =  10;
    obstacle.shapeColor = "blue"
    //generate random obstacles
    var rand = random(400,580);
    obstacle.x = rand
    
    //assign scale and lifetime to the obstacle           
    
    obstacle.lifetime = 120;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
}

function spawnObstacle() {
  if(World.frameCount % 80 === 0) {
    var obstacle1 = createSprite(500,0,10,40);
    obstacle1.velocityY =  8;
    obstacle1.shapeColor = "yellow"
    //generate random obstacles
    var rand = random(400,580);
    obstacle1.x = rand
    
    //assign scale and lifetime to the obstacle           
    
    obstacle1.lifetime = 120;
    //add each obstacle to the group
    obstacleGroup.add(obstacle1);
  }
}