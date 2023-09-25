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



    collide(Cx,Cy,Cwidth,Cheight){
        //passe un collidable en param et dx dy
           //droite                    //gauche              //bas                 //haut
        if(this.x+this.width<=Cx || this.x>Cx+Cwidth || this.y>Cy+Cheight || this.y+this.width <Cy){
            //console.log("safe");
            return false;
        }
        else{
            //console.log("collide");
            
            return true;
        }
    }
    actionIfCollide(){
        console.log("collision");
    }
}

export{Collidable};