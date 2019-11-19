class Cannon{
    constructor(x, y, width, height){
        var options = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
    };

    display(){
        var pos = this.body.position;
        if(keyIsDown(UP_ARROW)){
            angle -=2.5
        }
        if(keyIsDown(DOWN_ARROW)){
            angle +=2.5
        }
        push();
        fill("lightgrey");
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(2);
        rect(0, 0, this.width, this.height);
        pop();
        
        fill("lightgrey");
        strokeWeight(2);
        arc(70, 465, 90, 90, 180, 360);
        rect(20, height-85, 100, 20);
        rect(20, height-65, 100, 20);
    }
}
