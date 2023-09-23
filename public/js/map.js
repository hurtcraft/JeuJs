import {Player} from "./player.js";
import { Collidable } from "./collidable.js";
const SpriteWidth = 64;
const SpriteHeight = 64;
const ScaleFactor = 4;
const CANVAS = document.getElementById("map");
const CONTEXT = CANVAS.getContext("2d");
CANVAS.width = 1600;
CANVAS.height = 960;
CONTEXT.imageSmoothingEnabled = false;
let map = [
    [[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]],
    [[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]],
    [[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[19],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]],
    [[0],[0],[0],[0],[0],[0],[0],[0],[0],[89],[15],[17],[20,20],[0],[18],[15],[90],[0],[0],[0],[0],[0],[0],[0],[0],[0]],
    [[0],[0],[0],[0],[0],[0],[0],[0],[0],[56],[0],[0],[0],[0],[0],[15,15],[55],[0],[0],[0],[0],[0],[0],[0],[0],[0]],
    [[0],[0],[0],[0],[0],[0],[0],[0],[0],[56],[59],[29],[29],[29],[41],[0],[55],[0],[0],[0],[0],[0],[0],[0],[0],[0]],
    [[0],[0],[0],[0],[0],[0],[0],[0],[0],[56],[29],[29,41],[29],[29],[29],[55],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]],
    [[0],[0],[0],[0],[0],[0],[0],[0],[0],[56],[29],[33],[29],[29],[29],[55],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]],
    [[0],[0],[0],[0],[0],[0],[0],[0],[0],[56],[29,59],[29,59],[29,39,59],[29],[29],[55],[0],[0],[0],[0],[0],[0],[0],[0],[0]],
    [[0],[0],[0],[0],[0],[0],[0],[0],[0],[56],[29,92],[29,92],[55],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0],[0]]
];

  


let collidableMap=[]
//{1:[img,x,y]}

function readMap(map){
    let currentTile;
    const path="../../img/sprites/";
    let img;
    let c;
    for(let i = 0;i<map.length;i++){
        for(let j =0; j <map[i].length;j++){
            for(let k =0;k<map[i][j].length;k++){
                currentTile=map[i][j][k];
                if(currentTile===0){
                    continue;
                }
                currentTile=currentTile.toString().concat(".png");
                img=createImg(path.concat(currentTile));
                c=new Collidable(img,j*SpriteWidth,i*SpriteHeight);
                collidableMap.push(c);
                //drawTile(path.concat(currentTile),j*SpriteWidth,i*SpriteHeight);
            }
        }
    }
}

function createImg(src){
    let img=new Image();
    img.src=src;
    return img;
}
function drawMap(collidableMap){
    let currentCollidable;
    let currentImg
    for(let i = 0;i<collidableMap.length;i++){
        currentCollidable=collidableMap[i];
        currentImg=currentCollidable.img;
        //console.log(currentImg , currentCollidable.x ,currentCollidable.y , currentImg.naturalWidth*ScaleFactor , currentImg.naturalHeight*ScaleFactor);
        CONTEXT.drawImage(currentImg , currentCollidable.x ,currentCollidable.y , currentImg.naturalWidth*ScaleFactor , currentImg.naturalHeight*ScaleFactor);
    }
}

function drawTile(tileSrc,x,y){
    let img=new Image();
    img.src=tileSrc;
    img.onload=()=>{
        CONTEXT.drawImage(img,x,y,img.naturalWidth*ScaleFactor ,img.naturalHeight*ScaleFactor);

    }
    

    //CONTEXT.drawImage("C:\\Users\\Hurtcraft\\Desktop\\JeuJS\\img\\sprites\\0.png",0,0);
}
//drawTile("../../img/sprites/5.png",0,0);
console.log(map);
readMap(map);
console.log(collidableMap);
drawMap(collidableMap);

let mouseX;
let mouseY;
addEventListener("mousemove",(event)=>{
    mouseX=event.clientX;
    mouseY=event.clientY;
})


let rouge=new Image();
rouge.src="../../rouge.png";

let bleu=new Image();
bleu.src="../../bleu.png";


let p = new Player(rouge,200,200);
p.move(map);
let p2=new Player(bleu,300,300);


function animate(){
    //console.log(mouseX,mouseY)
    //console.log(p.x,p.y,p.width,p.height);
    
    CONTEXT.clearRect(0,0,CANVAS.width,CANVAS.height);
    p.setPos(p.x,p.y);
    drawMap(collidableMap);
    CONTEXT.drawImage(p.img,p.x,p.y);
    //CONTEXT.drawImage(p2.img,p2.x,p2.y);
    //console.log(p.x,p.y);
    //p.collide(p2);
    //CONTEXT.drawImage(i,mouseX,mouseY,100,100);
    requestAnimationFrame(animate);
    
};
animate();


/**
const img=new Image();
img.src="../img/playerSprite/Pink_Monster/Pink_Monster_Idle_4.png"
img.classList.add("sprite");


function animate(){
    CONTEXT.clearRect(0,0,CANVAS.width,CANVAS.height);

    CONTEXT.drawImage(img,0,0,SpriteWidth,SpriteHeight,0,0,64,64);
    requestAnimationFrame(animate);
}
animate();
 */

