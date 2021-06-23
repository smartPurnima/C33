const Engine= Matter.Engine;
const World= Matter.World;
const Bodies= Matter.Bodies;
const Constraint= Matter.Constrain;

var snow = [];
var bgImg;

function preload(){
 bgImg=loadImage("snow3.jpg");
 
}

function setup() {
 createCanvas(900,600);
 engine= Engine.create();
 world= engine.world;

 //ground = new Ground(600,600,1200,20);
 
}

function draw() {
  background(bgImg);  
  //Engine.update(engine);

  //ground.display();
  
  if(frameCount %90  === 0){
    snow.push(new Snow(random(width/2-10),10,10));
  }

  for (var x = 0; x < snow.length; x++) {
    snow[x].display();
  }
}