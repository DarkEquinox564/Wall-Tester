var bullet,wall;
var speed, weight,thickness;
var deformation;

function setup() {
  createCanvas(1600,400);

  thickness = random(22,83)

  bullet = createSprite(50, 200, 50, 20);
  wall = createSprite(1200,200,thickness,height/2);
  
  

  speed = random(223, 321);
  weight = random(30,52);

  bullet.velocityX = speed;
  bullet.depth = 15;
  
}

function draw() {
  background(0,0,0);  
  
  
  /*if(car.x - wall.x < car.width/2 + wall.width/2 && wall.x - car.x < car.width/2 + wall.width/2){
    deformation = (0.5 * weight * speed * speed) / 22500
    car.velocityX = 0;
  }
  */

  if(hasCollided(bullet, wall)){
    deformation = (0.5 * weight * speed * speed) / (thickness ** 3)
    bullet.velocityX = 0;

    if(deformation > 10){
      wall.shapeColor = color(255,0,0)
      
    }
    if(deformation < 10){
      wall.shapeColor = color(0,255,0)
    }
  }


  drawSprites();
}
function hasCollided(ullet, walls){
  bulletRightEdge = ullet.x + ullet.width;
  wallLeftEdge = walls.x;
  if(bulletRightEdge >= wallLeftEdge){
    return true
  }
  else{
    return false
  }
}