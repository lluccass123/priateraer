class PirateShip{
    constructor(x,y,w,h,shipPosition){
        var options = {
            restitution = 0.8,
            friction = 1.0,
            density = 1.0    
        }
        this.body = Bodies.rectangle(x,y,w,h,options);
        this.w = w;
        this.h = h;
        this.image = loadImage("./assets/boat.png");
        this.shipPos = shipPosition;
        World.add(world,this.body);
    }
    show(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotation(angle)
        imageMode(CENTER);
        image(this.image,0,this.shipPos,this.w,this.h);
        pop();
    }
}