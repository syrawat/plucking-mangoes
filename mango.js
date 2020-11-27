class mango {
    constructor(x,y,r){
        var options = {
            isStatic:true,
            restitution:0.3,
            friction:0.5,
            density:1.2,
            width:200,
            height:110,
            
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body = Bodies.circle(this.x,this.y,this.r/2,options);
        this.image = loadImage("sprites/mango.png");
        World.add(world,this.body);

    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        imageMode(RADIUS);
        fill(rgb(17, 0, 255));
        image(this.image,0,0,25,25);
        pop();
    }
}