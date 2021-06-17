var mario, mario_running, coin, coinImg, pipe, pipeImg;
var ground, groundImg, cloudImg, pipeImg;
var pipeGroup, cloudGroup;

score =0;

function preload() {
  mario_running = loadAnimation("mario_running1.png", "mario_running3.png","mario_running4.png");
  groundImg = loadImage("background.png");
  cloudImg = loadImage("cloud.png");
  pipeImg = loadImage("pipe.png");
}

function setup() {
  createCanvas(800,500);

 ground = createSprite(300,300);
 ground.addImage("ground", groundImg);
 ground.scale = 1.5;
 ground.x = ground.width/2;

mario = createSprite(50,400,20,20);
mario.addAnimation("running",mario_running);
mario.scale = 0.3;

pipeGroup = new Group();
cloudGroup = new Group();

edges = createEdgeSprites();

}

function draw() {
  background("white");  


 ground.velocityX = -4;
  if(ground.x < 0) {
    ground.x = ground.width/2;
  }

  if (keyDown("space") && mario.y >= 400) {
    mario.velocityY = -10;
  }

mario.velocityY = mario.velocityY + 0.5;

mario.collide(edges[3]);

spawnClouds();
spawnPipe();

  drawSprites();

  text("Score: "+ score,700,50);
}

function spawnClouds() {
  if(frameCount%60===0){
    var cloud = createSprite(800,120,40,10);
    cloud.addImage(cloudImg);
    cloud.y = Math.round(random(280,50));
    cloud.scale = 0.4;
    cloud.velocityX = -3;
    cloud.lifetime = 300;
    cloudGroup.add(cloud);

    cloud.depth = mario.depth;
    mario.depth = mario.depth + 1;

  }
}

function spawnPipe() {
  if(frameCount%60===0) {
    var pipe = createSprite(400,500,20,20);
    pipe.addImage(pipeImg);
    pipe.x = Math.round(random(100,500));
    pipe.velocityX = -6;
    pipe.scale = 0.3;
    pipe.lifetime = 300;
    pipeGroup.add(pipe);
  }

}
