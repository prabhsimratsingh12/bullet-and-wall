var bullet,wall;
var invisibleline;
var speed,weight,thickness;




function setup() {
  createCanvas(800,300);

  bullet=createSprite(500,200,15,15);

  wall=createSprite(1200,200,thickness,height/2);
 
  speed=random(223,321);
  weight=random(30,52);
  thickness=random(22,83);
  
  invisibleline=createSprite(710,200,10,height/7)
  invisibleline.visible=false;

  def=(0.5*weight*speed*speed)/22500

}

function draw() {
  background("black");
 
  if(hasCollided(bullet, wall))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness);

    if(damage>10){
      wall.shapeColor=color(255,0,0);
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }
  }
 
  drawSprites();

}
function hasCollided(bullet, wall){
  bulletRightEdge=bullet.x +bullet.width;
  wallLeftEdge=wall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
}