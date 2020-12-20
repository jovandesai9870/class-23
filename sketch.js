const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var box1,box2,ground;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,200,20,20);
    ground = new Ground(200,390,400,20);
    box2 = new Box(200,100,50,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
}