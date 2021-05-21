
 
var bg
var play;
function preload(){
  bg1=loadImage("Treasure Hunt/treasure hunt .png");
  play=loadImage("Treasure Hunt/play.png");
}

function setup() {
  createCanvas(displayWidth-30, displayHeight-130);
 bg=createSprite(displayWidth/2,displayHeight/2-50,50,50);
 bg.addImage(bg1);
 bg.visible=true;
 playImg=createSprite(displayWidth/2,displayHeight/2+100,50,50);
 playImg.addImage(play);
 playImg.scale=0.3
  form = new Form();
  character1=createSprite(displayWidth/2-100,displayHeight/2,50,50);
  character2=createSprite(displayWidth/2,displayHeight/2,50,50);
  character1.visible=false;
  character2.visible=false;
}
 


function draw() {
  background("black");
   /*play = createButton('play');
   play.position(displayWidth/2,displayHeight/2+100);
   play.style.width = '200px'; // setting the width to 200px
    play.style.height = '200px'; // setting the height to 200px 
    play.style.background = 'teal'; // setting the background color to teal
     play.style.color = 'white'; // setting the color to white
      play.style.fontSize = '20px';
  // play.id='mainButton';
  //play.x=playImg.x;
  //play.y=playImg.y;
  //play.visiable=false;*/

  //
  
  if(mousePressedOver(playImg)) {
    playImg.visible = false;
    bg.visible = false;
    form.start();
  }
  
 
  textSize(20);
  fill("white");
  text(mouseX+","+mouseY,mouseX,mouseY); 
  drawSprites();
}