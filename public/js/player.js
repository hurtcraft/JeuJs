import {Collidable} from "./collidable.js";

class Player extends Collidable{
    static velocity=5;
    static velocityFactor=1.2
    constructor(img,x,y){
        super(img,x,y);
        
        this.animations=new Map();
        this.action={
            0:()=>console.log("test"),
            1:()=>console.log("test")
        }

    }

    move(lvlMap) {
        //this.checkCollides(lvlMap);
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

                    map.get(direction)(lvlMap);
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
        let dx=-Player.velocity;
        //rapelle toi dla solution c ez
        // c pas lbon truc que tpasse en param
        if(this.checkCollides(lvlMap,dx,0)){
            dx=0
        }
        this.x+=dx*Player.velocityFactor;
    }
    moveRight(lvlMap){
        let dx=Player.velocity;
        if(this.checkCollides(lvlMap,dx,0)){
            dx=0
        }
        this.x+=dx*Player.velocityFactor;
    }
    moveDown(lvlMap){
        let dy=Player.velocity;
        if(this.checkCollides(lvlMap,0,dy)){
            dy=0
        }
        this.y+=dy*Player.velocityFactor;
    }
    moveUp(lvlMap){

        let dy=-Player.velocity;
        if(this.checkCollides(lvlMap,0,dy)){
            dy=0
        }
        console.log(dy)
        this.y+=dy*Player.velocityFactor;    
    }
    checkCollides(lvlMap,x,y){
         
        let c;
        for(let i = 0;i<lvlMap.length;i++){
            c=lvlMap[i];
            if(this.collide(x,y,c)){
                this.action=c.actionIfCollide();
                console.log(this.action);
                return true;
            }
        }
        return false;
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