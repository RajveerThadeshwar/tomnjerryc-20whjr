var bg
var tom,tom1,tom2,tom3
var jerry,jerry1,jerry2,jerry3
function preload() {
    bg=loadImage("images/garden.png")
    tom1=loadAnimation("images/mouse1.png")
    tom2=loadAnimation("images/mouse2.png","images/mouse3.png")
    tom3=loadAnimation("images/mouse4.png")

    jerry1=loadAnimation("images/cat1.png")
    jerry2=loadAnimation("images/cat2.png","images/cat3.png")
    jerry3=loadAnimation("images/cat4.png")


    //load the images here
}

function setup(){
    createCanvas(1000,800);
    tom=createSprite(200,600)
    tom.addAnimation("standing",tom1)
    tom.scale=0.2
    jerry=createSprite(870,600)
    jerry.addAnimation("sleeping",jerry1)
    jerry.scale=0.2
    //create tom and jerry sprites here

}

function draw() {

    background(bg);
    if(jerry.x-tom.x<jerry.width/2-tom.width/2){
        jerry.velocityX=0
        jerry.addAnimation("last",jerry3)
        jerry.x=300
        jerry.changeAnimation("last")
        tom.addAnimation("jlast",tom3)
        
        tom.changeAnimation("jlast")
    }
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(keyCode===LEFT_ARROW){
    jerry.velocityX=-3
    jerry.addAnimation("running",jerry2)
    jerry.changeAnimation("running")
    tom.addAnimation("teasing",tom2)
    tom.changeAnimation("teasing")
}
  //For moving and changing animation write code here


}
