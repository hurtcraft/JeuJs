import {Collidable} from "./collidable.js";

class Player extends Collidable{
    static velocity=5;

    constructor(img,x,y){
        super(img,x,y);
        
        this.animations=new Map();
    }

    move(lvlMap) {
        
        const map = this.mapMoves(lvlMap);
        const keysPressed = new Set();

        document.addEventListener("keydown", (e) => {
            keysPressed.add(e.code);
        });

        document.addEventListener("keyup", (e) => {
            keysPressed.delete(e.code);
        });

        const updatePlayerPosition = () => {
            
            for (const direction of keysPressed) {
                if (map.has(direction)) {
                    
                    map.get(direction)("abc");
                }
            }
            requestAnimationFrame(updatePlayerPosition);
        };

        requestAnimationFrame(updatePlayerPosition);
    }


    mapMoves(lvlMap){
        let map = new Map();

        map.set("KeyD", ()=>{this.moveRight(lvlMap)});
        map.set("KeyS", ()=>{this.moveDown(lvlMap)});
        map.set("KeyA", ()=>{this.moveLeft(lvlMap)});
        map.set("KeyW", ()=>{this.moveUp(lvlMap)});
        return map;
    }
    moveLeft(lvlMap){
        this.x-=Player.velocity;
    }
    moveRight(lvlMap){
        this.x+=Player.velocity;
    }
    moveDown(lvlMap){
        this.y+=Player.velocity;
    }
    moveUp(lvlMap){
        this.y-=Player.velocity;
    }
    checkCollide(lvlMap){
        
    }





    initAnimations(){
        
        const path='../../img/playerSprite/Pink_Monster/'
        const filesName=["Pink_Monster_Run_6"]
        let currentAnimation;
        let nbSprite;
        let tmp;
        let img;
        for(let i = 0;i<filesName.length;i++){
            img=le
            currentAnimation=filesName[i];
            nbSprite=parseInt(currentAnimation.charAt(currentAnimation.length-1));
            for(let j =0;j<nbSprite;j++){
                
            }
        }
        
    }
}

export{Player};