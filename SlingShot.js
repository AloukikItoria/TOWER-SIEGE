class SlingShot{

    constructor(bodyA , pointB){

        var slingoptions={

            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:10

        }


        this.SlingShot = Constraint.create(slingoptions)
        World.add(world,this.SlingShot)
    
        this.pointB= pointB;


    }

    display(){
     
        if(this.SlingShot.bodyA){
            var posA= this.SlingShot.bodyA.position;
            var posB= this.pointB
       line(posA.x,posA.y,posB.x,posB.y)
     

        } 
    } 


    fly(){

        this.SlingShot.bodyA = null

    }

    attach(body){
        this.SlingShot.bodyA=body

    }

}
