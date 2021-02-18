var bullet,wall;
var bullet2,wall2;

var speed,weight;

function setup() {
  createCanvas(1600,400);
bullet= createSprite(100,80,50,50);
wall = createSprite(1200,80,60,100);

bullet2= createSprite(200,300,50,50);
wall2 = createSprite(1200,300,60,100);



bullet.velocityX = 14;
bullet2.velocityX = 13;


 speed=random(25,31);
 weight=random(400,1500);

}

function draw() {
  background("black");
  

  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      bullet.shapeColor=color("green");
      wall.shapeColor=color("white");
    }
    if(deformation<180 && deformation>100)
    {
      bullet.shapeColor=color("green");
      wall.shapeColor=color("white");
    }
    if(deformation<100)
    {
      bullet.shapeColor=color("green");
      wall.shapeColor=color("white");
    }
  }
  if(wall.x-bullet2.x < (bullet2.width+wall.width)/2)
  {
    bullet2.velocityX=0;
    var deformation=0.5 * weight * speed* speed/22509;
    if(deformation>180)
    {
      bullet2.shapeColor=color("red");
      wall.shapeColor=color("white");
    }
    if(deformation<180 && deformation>100)
    {
      bullet2.shapeColor=color("red");
      wall.shapeColor=color("white");
    }
    if(deformation<100)
    {
      bullet2.shapeColor=color("red");
      wall.shapeColor=color("white");
    }

  }


  drawSprites();
  
}
