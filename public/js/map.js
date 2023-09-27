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

let map2= [
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0, 19], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0, 59], [0, 77], [0, 15], [0, 17], [0, 20], [0], [0, 18], [0, 15], [0, 77], [0, 59], [0, 59], [0], [0], [0], [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0, 62], [0, 79], [0], [0], [0], [0], [0], [0], [0, 79], [0, 28, 7], [0, 63], [0], [0], [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0, 62], [0, 80], [0], [0, 28], [0, 34], [0, 28], [0, 34], [0], [0, 80], [0, 28], [0, 63], [0], [0], [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0, 54], [0, 29], [0, 29], [0, 30], [0, 29], [0, 29], [0, 30], [0, 30], [0, 34], [0, 34], [0, 57], [0], [0], [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0, 54], [0, 29], [0, 29], [0, 29], [0, 29], [0, 30], [0, 29], [0, 30], [0, 28], [0, 34], [0, 57], [0], [0], [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0, 54], [0, 32], [0, 32, 28], [0, 32], [0, 32, 33], [0, 32, 41], [0, 32, 28], [0, 32], [0, 32, 28], [0, 32, 41], [0, 57], [0], [0], [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0, 54], [0, 32, 33], [0, 32], [0, 32, 39], [0, 32], [0, 32], [0, 32], [0, 32, 39], [0, 32], [0, 32], [0, 57], [0], [0], [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0, 54, 52], [0, 28, 90], [0, 32], [0, 32, 33], [0, 32], [0, 32, 39], [0, 32, 32, 34], [0, 32, 41], [0, 32], [0, 32, 89], [0, 57, 53], [0], [0], [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0, 83, 60], [0, 32, 59], [0, 32, 59], [0, 32, 59], [0, 32, 59], [0, 32, 59], [0, 32, 59], [0, 32, 59], [0, 83, 61], [0], [0], [0], [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0]
    ]
];

let map3= [
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
        [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
        [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
        [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
        [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
        [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
        [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
        [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
        [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
        [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
        [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0,59], [0, 59], [0, 59], [0], [0], [0], [0],
        [0], [0], [0], [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0, 32, 55], [0, 28], [0, 32, 56], [0], [0], [0],
        [0], [0], [0], [0], [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0, 28, 32, 55], [0, 28], [0, 32, 56], [0], [0],
        [0], [0], [0], [0], [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0, 32, 55], [0, 32], [0, 32, 56], [0], [0], [0],
        [0], [0], [0], [0], [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0, 32, 52], [0, 32], [0, 32, 61], [0], [0], [0],
        [0], [0], [0], [0], [0], [0], [0], [0], [0]
    ],
    [
        [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0], [0],
        [0], [0], [0], [0], [0]
    ]
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
            }
        }
    }
}

function createImg(src){
    let img=new Image();
    img.src=src;
    img.width=img.naturalWidth*ScaleFactor;
    img.height=img.naturalHeight*ScaleFactor;
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


readMap(map2);

drawMap(collidableMap);



let rouge=new Image();
rouge.src="../../rouge.png";

let bleu=new Image();
bleu.src="../../bleu.png";


let p = new Player(rouge,50,50);

let p2=new Player(bleu,300,300);
p.move(collidableMap);

function animate(){
    CONTEXT.clearRect(0,0,CANVAS.width,CANVAS.height);
    drawMap(collidableMap);
    
    p.setPos(p.x,p.y);
    
    CONTEXT.drawImage(p.img,p.x,p.y);
    //CONTEXT.drawImage(p2.img,p2.x,p2.y);
    //p.collide(p2.x,p2.y,p2.width,p2.height);

    requestAnimationFrame(animate);
    
};
animate();


