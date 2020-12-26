const  Engine = Matter.Engine;
const World = Matter.World; 
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;



var g1,g2;
var box;
var ball;
var b1,b2,b3,b4,b5,b6,b6,b7,b8,b9;
var engine, world;
var bgImage;
var bg;
var gameState = "start"


function preload(){
   getTime();
}

function setup(){
createCanvas(600,600);

//creating our engine
engine = Engine.create();
//creating our world
world = engine.world;
//creating objects

g1 = new Ground(300,580,800,10)
g2 = new Ground(400,570,300,10)

b1 = new Box(330,550,30,30)

b1 = new Box(360,550,30,30)
b2 = new Box(390,550,30,30)
b3 = new Box(420,550,30,30)
b4 = new Box(450,550,30,30)
b5 = new Box(480,550,30,30)

b6 = new Box(390,520,30,30)
b7 = new Box(420,520,30,30)
b8 = new Box(450,520,30,30)

b9 = new Box(420,490,30,30)

ball = new Ball(100,400,20)
chain = new SlingShot(ball.body, {x:100,y:400});
}


function draw(){
   if(bgImage){
background(bgImage);
    }
else {background("black")}
Engine.update(engine);
g1.display();
g2.display();

b1.display();
b2.display();
b3.display();
b4.display();
b5.display();
b6.display();
b7.display();
b8.display();
b9.display();
ball.display();
chain.display()
}



function mouseDragged(){
    if(gameState==="start"){
        Matter.Body.setPosition(ball.body, {x:mouseX, y:mouseY});
    }
}
function mouseReleased(){
    chain.fly();
    gameState = "launched";
}

function keyPressed(){
if(keyCode===32){
   
chain.attach(ball.body);
}
}



async function getTime(){

var response = await fetch("http://www.worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON = await response.json();
var datetime= responseJSON.datetime;
var hour = datetime.slice(11,13);
console.log(hour);

if(hour>=6 && hour<=12){

    bg = "bg.png"
}
else{
    bg = "bg2.jpg"
}

bgImage = loadImage(bg)
}



