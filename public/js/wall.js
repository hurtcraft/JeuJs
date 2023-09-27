import { Collidable } from "./collidable.js";

class Wall extends Collidable{
    constructor(img,x,y){
        super(img,x,y);
    }
    actionIfCollide(){
        return 0;
    }
}