class chain{
    constructor(bodyA,pointB){
        var option={
            bodyA:bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.01
        }
        this.bodyA = bodyA
        this.pointB = pointB;
        this.chain = Constraint.create(option);
        World.add(world,this.chain);
    }
    fly(){
      this.chain.bodyA = null;
    }
    attach(body){
      this.chain.bodyA = bodyA;
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