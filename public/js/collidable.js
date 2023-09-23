class Collidable{
    constructor(img,x,y){
        this.img=img;
        this.x=x;
        this.y=y;
        this.width=img.width;
        this.height=img.height;
    }
    setPos(x,y){
        this.x=x;
        this.y=y;
    }
    getX(){
        return this.x;
    }
    getY(){
        return this.y;
    }
    setX(x){
        this.x=x;
    }
    setY(y){
        this.y=y;
    }



    collide(collidable){
        if(this.x+this.width<=collidable.x || this.x>collidable.x+collidable.width || this.y>collidable.y+collidable.height || this.y+this.width <collidable.y){
            console.log("safe");
            return false;
        }
        else{
            console.log("collide");
            
            return true;
        }
    }
    actionIfCollide(){
        console.log("collision");
    }
}

export{Collidable};