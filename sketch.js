const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var slingshot;
var score = 0;
var ball;
var polygonimage;
function preload() {
    polygonimage = loadImage("polygon.png")};

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    platform = new Ground(390,300,250,10);
    //log6 = new Log(230,180,80, PI/2);
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
    ball = Bodies.circle(50,200,20);
    World.add(world,ball);
    slingshot = new SlingShot(this.ball,{x:100, y:200});
}

function draw(){
        background(56,44,44);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)
    
    Engine.update(engine);
    //strokeWeight(4);
    ground.display();
    //log6.display();
    slingshot.display(); 
    platform.display(); 
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display()
    box6.display();
    box7.display();
    imageMode (CENTER);
    image(polygonimage,ball.position.x,ball.position.y,40,40);
}

function mouseDragged(){
    //if (gameState!=="launched"){
        Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
    //}
}


function mouseReleased(){
    slingshot.fly();
}
