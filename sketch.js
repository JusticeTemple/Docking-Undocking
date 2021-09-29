var hasDocked = false;
var bg,iss,craft1;

function preload(){
bg = loadImage("spacebg.jpg");
Craft1 = loadImage("spacecraft1.png");
Craft2 = loadImage("spacecraft2.png");
Craft3 = loadImage("spacecraft3.png");
Craft4 = loadImage("spacecraft4.png");
Iss = loadImage("iss.png");
}

function setup() {
  createCanvas(800,400);
  iss = createSprite(70, 130);
  iss.addImage(Iss)
  iss.scale = 0.25

  craft1 = createSprite(285, 240);
  craft1.addImage(Craft1)
  craft1.scale = 0.15
}

function draw() {
  background(bg);  
  if (!hasDocked){
    craft1.x = craft1.x + random(-1,1)
  }
  if (keyDown(UP_ARROW)){
    craft1.addImage(Craft2)
    craft1.y -= 2
  }

  if (keyDown(DOWN_ARROW)){
    craft1.addImage(Craft1)
    craft1.y += 2
  }

  if (keyDown(RIGHT_ARROW)){
    craft1.addImage(Craft3)
    craft1.x += 2
   }

  if (keyDown(LEFT_ARROW)){
    craft1.addImage(Craft4)
    craft1.x -= 2
   }

   if (craft1.y <= (iss.y + 70) && craft1.x <= (iss.x - 10)){
     hasDocked = true;
     text("Congratulations! You have docked.", 400, 380);
   }
  drawSprites();
}