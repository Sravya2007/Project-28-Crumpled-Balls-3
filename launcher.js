class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.02,
            length: 30
        }
        this.pointB = pointB;
        this.paper = Constraint.create(options);
        World.add(world, this.paper);
    }

    display(){
        if(this.paper.bodyA) {
        var bodyA = this.paper.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(bodyA.x, bodyA.y, pointB.x, pointB.y);
        }
    }

    fly() {
        this.paper.bodyA = null;
    }
    
}