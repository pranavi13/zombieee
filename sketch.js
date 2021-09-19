var canavas, backgroundImage;

function preload(){
    shooter1=loadImage("shooter_1.png")
    shooter2=loadImage("shooter_2.png")
    shooter3=loadImage("shooter_3.png")
    backgroundImage=loadImage("bg.jpeg")
    zombie=loadImage("zombie.png")

}
function setup(){
    canavas= createCanvas(displayWidth,displayHeight);
    bg=createSprite(displayWidth/2-35,displayHeight/2-45,20,20)
     bg.addImage(backgroundImage)   
     player=createSprite(displayWidth-800,displayHeight-450,20,20)
        player.addImage(shooter1)
        bg.scale=1
        player.scale=0.6
}
function draw(){
    background("black")
    if(keyDown("space")){
        player.addImage(shooter3)    
    }
drawSprites()
}
