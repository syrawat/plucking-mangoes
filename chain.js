class chain{
    constructor(body1,pointB){
        var option={
            bodyA:body1,
            pointB:pointB,
            length:1,
            stiffness:0.00004
        }
        this.bodyA = body1
        this.pointB = pointB;
        this.chain = Constraint.create(option);
        World.add(world,this.chain);
    }
    attach(body){
      this.chain.bodyA = body;
    }
    fly(){
      this.chain.bodyA = null;
    }

    display(){
        if(this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        push();
        line(pointA.x+20,pointA.y+20,pointB.x,pointB.y);
        pop();
    }
  }
}