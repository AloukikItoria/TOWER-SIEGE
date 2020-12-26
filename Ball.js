class Ball{

    constructor(x,y,radius){

        var balloption = {

        isStatic:false,
        restitution:0.8,
        friction:1,
        density:1.2

         }

        this.body = Bodies.circle(x,y,radius,balloption)
        this.radius = radius
        this.image=loadImage("polygon.png");
        World.add(world,this.body)
    }


    display(){
        push();
        imageMode(CENTER)
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        //ellipse(0,0,this.radius, this.radius)
        image(this.image,0,0,this.radius*2,this.radius*2);
        pop();

    }



}







