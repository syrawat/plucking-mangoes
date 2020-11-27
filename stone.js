class stone {
    constructor(x,y,r){
        var options = {
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2,
            stiffness:0.01
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        this.image = loadImage("sprites/stone.png");
        World.add(world,this.body);

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(RADIUS);
        fill(rgb(17, 0, 255));
        image(this.image,0,0,this.r*2,this.r*2);
        pop();
    }
}