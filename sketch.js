var car,wall;
var speed,weigth;



function setup() 
{
  createCanvas(1250,400);
 
   car = createSprite(50, 200, 50, 20);
   wall = createSprite(1200,200,20,400);
  
speed = random(50,90);

weigth = random(400,1200);

}

function draw() {
  background(0,0,0);  
  car.velocityX = speed;


if(wall.x - car.x <wall.width/2 + car.width/2 )
{
  car.velocityX=0;
  var deformation = 0.5*weigth*speed*speed/22500;
  
  if(deformation > 180)
  {
    car.shapeColor = color(255,0,0);

  }
 if(deformation<180 && deformation>100)
 {

car.shapeColor = color(230,230,0);

 }
if(deformation<100)
{
  car.shapeColor=color(0,255,0);
  
  

}


}


  drawSprites();
 

}