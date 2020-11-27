class tree{
    constructor(x,y,width,height){
            var options={
                isStatic:true,
                
            }
            
            this.body = Bodies.rectangle(1000,440,options);
            this.image = loadImage("sprites/tree.png");
            World.add(world,this.body);
    }
    display(){
        push();
        imageMode(CENTER);
        image(this.image,790,450,500,500);
        pop();

    }
}