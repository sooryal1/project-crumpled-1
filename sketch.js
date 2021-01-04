 const Engine = Matter.Engine; 
 const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
    var dustbin1, trashObject,groundObject;
     var world;
      function setup() {
           createCanvas(1300, 600);
             rectMode(CENTER);
              engine = Engine.create();
            world = engine.world; 
             trashObject=new Paper(400,390,55);
             groundObject=new Ground(width/2,560,width,20);
              dustbin1=new Dustbin(1200,500,20,100);
            dustbin2=new Dustbin(1000,500,20,100);
             dustbin3=new Dustbin(1100,540,200,20);
              Engine.run(engine);
                 }
                  function draw() {
                       rectMode(CENTER); 
                       background(0);
                     trashObject.display();
                     groundObject.display();
                     dustbin1.display();
                     dustbin2.display(); 
                      dustbin3.display();
                         }
                          function keyPressed() 
                          {
                      if (keyCode === UP_ARROW) 
                               {
                       Matter.Body.applyForce(trashObject.body,trashObject.body.position,{x:130,y:-145}); }
                    }