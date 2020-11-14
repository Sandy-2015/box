var fixed, moving
function setup() {
  createCanvas(1200,800);
  fixed=createSprite(200, 200, 50, 80);
  fixed.shapeColor = "green";
  moving=createSprite(400, 200, 80, 30);
  moving.shapeColor ="red";
}

function draw() {
  background(255,255,255);  
  moving.x= World.mouseX;
  moving.y= World.mouseY;

  if (moving.x-fixed.x < moving.width/2 + fixed.width/2){
    fixed.shapeColor ="yellow";
    moving.shapeColor ="blue";
  }

  //console.log(moving.x-fixed.x);
  drawSprites();
}