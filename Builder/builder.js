import { usableImg } from "../img/img.js";
const CANVAS=document.getElementById("grid");
const CONTEXT=CANVAS.getContext("2d");
CONTEXT.imageSmoothingEnabled = false;
CANVAS.width=1600;
CANVAS.height=960;

const SpriteWidth=64;
const SpriteHeight=64;

let dataGrid=[];


function drawBoard(){

    let cols=CANVAS.width/SpriteWidth;
    let rows=CANVAS.height/SpriteHeight;
    let tmp;
    for(let i = 0;i<rows;i++){

        for(let j = 0;j <cols;j++){
            CONTEXT.rect(j*SpriteWidth,i*SpriteHeight,SpriteWidth,SpriteHeight);
        }  
        tmp=new Array(rows);
        tmp.fill(0);
        dataGrid.push(tmp);
        
        
    }

    CONTEXT.stroke();
}
CANVAS.addEventListener("click", (e)=>{
    let col=Math.floor(e.clientX/SpriteWidth);
    let row=Math.floor(e.clientY/SpriteHeight);
    dataGrid[row][col]=1;
    console.log(dataGrid);
});
drawBoard();


//tools box

const BtnEsc=document.getElementById("escape");
const toolsBox=document.getElementById("tools");
const BtnShowTools=document.getElementById("showTools");

BtnEsc.addEventListener("click", (e)=>{
    toolsBox.style.visibility="hidden";
    BtnShowTools.style.visibility="visible";
})
BtnShowTools.addEventListener("click", (e)=>{
    toolsBox.style.visibility="visible";
    BtnShowTools.style.visibility="hidden";
})
function initToolsBox(){
    let keys=Object.keys(usableImg);
    let img;
    let imgs=[]
    for(let i=0;i<keys.length;i++){
        img=new Image();
        img.src="../img/sprites/"+keys[i]+".png";
        console.log(img.naturalWidth*3)
        img.width=img.naturalWidth*4;
        img.height=img.naturalHeight*4;
        imgs.push(img);
        
    }
    imgs.sort(sortImg);
    for(let i=0;i<imgs.length;i++){
        toolsBox.appendChild(imgs[i]); 
    }    
    
}
function sortImg(img1,img2){
    return (img1.naturalWidth*img1.naturalHeight)-(img2.naturalWidth*img2.naturalHeight);
}

initToolsBox();
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

