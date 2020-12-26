class Ground{

//CONSTRUCTORS- PROPERTIES
constructor(x,y,width,height){

    var goptions = {
        //makes the body stationary...not moving
        isStatic:true
        
        }

    this.body = Bodies.rectangle(x,y,width,height,goptions);
    this.width= width;
    this.height=height;
    World.add(world,this.body);

    
}

//METHODS/FUNCTIONS- DISPLAY/DO SOMTHING ON THE OUTPUT SCREEN

display(){
    var pos= this.body.position;

    push();
    rectMode(CENTER);
    fill("purple");
    rect(pos.x,pos.y,this.width, this.height );
    pop();
}


}