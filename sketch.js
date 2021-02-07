var tom, jerry, garden;
var tomimg, jerryimg, gardenimg;

function preload() {
    //load the images here
    tomimg = loadAnimation("cat1.png", "cat2.png", "cat3.png", "cat4.png");
    jerryimg = loadAnimation("mouse1.png", "mouse2.png", "mouse3.png", "mouse4.png");

    gardenimg = loadImage("garden.png");
}

function setup(){

}
    createCanvas(1000,800);
    //create tom and jerry sprites here

function draw(){
    background(255);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();



function keyPressed(){
    
}

  //For moving and changing animation write code here


