class Rope{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 20
        }
        this.rope = Constraint.create(options);
        World.add(world, this.rope);
        this.pointB = pointB
       
    }
    attach(body){
        this.rope.bodyA = body;
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}