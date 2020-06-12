class Dustbin {
    constructor() {
        var options ={
           isStatic: true
        }
        this.rightBody = Bodies.rectangle(1470, 525, 40, 315, options);
        this.middleBody = Bodies.rectangle(1360, 670, 200, 40, options);
        this.image = loadImage("sprites/Green_Dustbin_Pic.png");
        this.leftBody = Bodies.rectangle(1250, 525, 40, 315, options);
        World.add(world, this.rightBody);
        World.add(world, this.middleBody);
        World.add(world, this.leftBody);
    }

    display() {
        var pos = this.rightBody.position;
        var pos1 = this.middleBody.position;
        var pos2 = this.leftBody.position;
        rect(pos.x, pos.y, 40, 315);
        rect(pos1.x, pos1.y, 200, 40);
        rect(pos2.x, pos2.y, 40, 315);
        imageMode(CENTER);
        image(this.image, 1360, 530, this.width, this.height);
    }
}