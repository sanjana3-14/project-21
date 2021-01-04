var bullet,wall
var speed,weight,thickness

function setup() {
  createCanvas(1600,400);

  speed = random(223,321);
  weight = random(30,52)
  thickness = random(22,83)

  fill(255,255,255)
  bullet = createSprite(50, 200, 50, 30);
  bullet.depth = 3
  bullet.velocityX = speed

  fill(80,80,80)
  wall = createSprite(1500,200,40,height/2)
  
}

function draw() {
  background(0,0,0);  
  drawSprites();

  bullet.velocityX = speed

  if (hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed) /thickness * thickness * thickness;

    if (deformation>10){
      bullet.shapeColor = color(255,0,0)
    }
    if (deformation<10){
      bullet.shapeColor = color(0,255,0)
    }
  }
}

function hasCollided(b ,w){
  bulletRightEdge = b.x + b.width
  wallLeftEdge = w.x

  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false

}