var track, boy, leftBoundary, rightBoundary; 
var trackImage, boyImage;
var edges;
function preload(){
  trackImage = loadImage("path.png");
  boyImage = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  track = createSprite(200, 200);
  track.addImage(trackImage);
  track.velocityY = 4;
  track.scale = 1.2;
  
  boy = createSprite(180, 340, 30, 30);
  boy.scale = 0.08;
  boy.addAnimation("jackRunning", boyImage);

  leftBoundary = createSprite(0, 0, 100, 800);
  leftBoundary.visible = false;

  rightBoundary = createSprite(410, 0, 100, 800);
  rightBoundary.visible = false;


}

function draw() {
  background(0);
  track.velocityY = 4;
  boy.x = World.mouseX;
  edges = createEdgeSprites();
  boy.collide(edges[3]);
  boy.collide(leftBoundary);
  boy.collide(rightBoundary);
  
  if(track.y > 400){
    track.y = height/2;
  }
  drawSprites();
}
