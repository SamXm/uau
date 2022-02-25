
function setup() {
  createCanvas(400,400);
  background(51);
  box = createSprite(200,200,30,30);

}

function draw() 
{

  // escreva o código para alterar a cor de fundo 
  // para vermelho quando a seta para direita (RIGHT_ARROW) for pressionada
  
  

  if (keyIsDown(LEFT_ARROW)) 
  {
    box.x = box.x -2;
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    box.y = box.y -2;
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    box.y = box.y +2; 
    background("green");
  }
  
  if (keyIsDown(RIGHT_ARROW))
   {
    box.x = box.x +2;
    background("purple");
  }


  
  drawSprites();
}

