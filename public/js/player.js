import {Collidable} from "./collidable.js";

class Player extends Collidable{
    static velocity=10;

    constructor(img,x,y){
        super(img,x,y);
        
        this.animations=new Map();

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

        let c;
        for(let i = 0;i<lvlMap.length;i++){
            c=lvlMap[i];
            if(this.collide(c.x+dx,c.y,c.width,c.height)){
                dx=0;
                console.log("gauche");
            }
        }
        this.x+=dx;
    }
    moveRight(lvlMap){
        let dx=Player.velocity;
        let c;
        for(let i = 0;i<lvlMap.length;i++){
            c=lvlMap[i];
            //console.log(c);
            if(this.collide(c.x-dx,c.y,c.width,c.height)){
                console.log("droite");
                dx=0;
            }
        }
        this.x+=dx;
    }
    moveDown(lvlMap){

        this.y+=Player.velocity;
    }
    moveUp(lvlMap){

        this.y-=Player.velocity;
    }
    checkCollides(lvlMap,x,y){
         
        let c;
        for(let i = 0;i<lvlMap.length;i++){
            c=lvlMap[i];
            if(this.collide(c.x+x,c.y+y,c.width,c.height)){
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