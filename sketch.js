var movingRect,fixedRect;
//movingRect.x-fixedRect.x === fixedRect.width/2+movingRect.width/2
// 455-400===25+30
function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(400, 200, 50, 50);
  fixedRect.shapeColor="blue"
  movingRect=createSprite(300,200,60,60)
  movingRect.shapeColor="blue"
}

function draw() {
  background("grey");  

movingRect.x=World.mouseX
movingRect.y=World.mouseY

if(movingRect.x-fixedRect.x < fixedRect.width/2+movingRect.width/2 &&
  fixedRect.x - movingRect.x< fixedRect.width/2+movingRect.width/2 &&
  movingRect.y-fixedRect.y < fixedRect.height/2+movingRect.height/2 &&
  fixedRect.y - movingRect.y< fixedRect.height/2+movingRect.height/2){
  fixedRect.shapeColor="red"
  movingRect.shapeColor="red"
}
else{
  fixedRect.shapeColor="blue"
  movingRect.shapeColor="blue"
}


  drawSprites();
}