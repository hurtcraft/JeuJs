import { usableImg } from "../img/img.js";

const CANVAS=document.getElementById("grid");
const CONTEXT=CANVAS.getContext("2d");
CONTEXT.imageSmoothingEnabled = false;
CANVAS.width=1600;
CANVAS.height=960;

const SpriteWidth=64;
const SpriteHeight=64;
const ScaleFactor=4;
let dataGrid=[];
let currentImg;
let currentImgSrc;
CONTEXT.imageSmoothingEnabled=false;
function drawBoard(){

    let cols=CANVAS.width/SpriteWidth;
    let rows=CANVAS.height/SpriteHeight;
    let tmp;
    let tmp2;
    for(let i = 0;i<rows;i++){
        tmp=[];
        for(let j = 0;j <cols;j++){
            
            CONTEXT.rect(j*SpriteWidth,i*SpriteHeight,SpriteWidth,SpriteHeight);
            tmp2=[0];
            tmp.push(tmp2);
        }  
        
        dataGrid.push(tmp);

    }
    CONTEXT.stroke();
}
CANVAS.addEventListener("click", (e)=>{
    let col=Math.floor(e.clientX/SpriteWidth);
    let row=Math.floor(e.clientY/SpriteHeight);
    console.log(dataGrid[row][col])
    
    currentImgSrc=currentImg.src.match(/\/([^\/]+)$/)[1];
    let img=new Image();
    img.src="../img/sprites/"+currentImgSrc;
    CONTEXT.drawImage(img,col*SpriteWidth,row*SpriteHeight,currentImg.naturalWidth*ScaleFactor,currentImg.naturalHeight*ScaleFactor);
    dataGrid[row][col].push(parseInt(currentImgSrc.split(".")[0]));
});


CANVAS.addEventListener("dblclick", (e)=>{
    let col=Math.floor(e.clientX/SpriteWidth);
    let row=Math.floor(e.clientY/SpriteHeight);
    dataGrid[row][col]=[0];
    CONTEXT.fillStyle = "white"; 
    CONTEXT.fillRect(col * SpriteWidth, row * SpriteHeight, SpriteWidth, SpriteHeight);
    CONTEXT.stroke();
    
});

drawBoard();


//tools box

const BtnEsc=document.getElementById("escape");
const toolsBox=document.getElementById("tools");
const BtnShowTools=document.getElementById("showTools");
const BtnExport=document.getElementById("exportMap");
BtnEsc.addEventListener("click", (e)=>{
    toolsBox.style.visibility="hidden";
    BtnShowTools.style.visibility="visible";
})
BtnShowTools.addEventListener("click", (e)=>{
    toolsBox.style.visibility="visible";
    BtnShowTools.style.visibility="hidden";
})
BtnExport.addEventListener("click",(e)=>{
    console.log(dataGrid);
})
function initToolsBox(){
    let keys=Object.keys(usableImg);
    let img;
    let imgs=[]
    for(let i=0;i<keys.length;i++){
        img=new Image();
        img.src="../img/sprites/"+keys[i]+".png";
        if(keys[i]!=="95"){
            img.width=img.naturalWidth*ScaleFactor;
            img.height=img.naturalHeight*ScaleFactor;
        }
        else{
            img.width=50;
            img.height=50;
        }

        imgs.push(img);
        
    }


    imgs.sort(sortImg);
    currentImg=imgs[0];
    currentImg.classList.add("currentImg");
    for(let i=0;i<imgs.length;i++){
        imgs[i].addEventListener("click",()=>{
            currentImg.classList.remove("currentImg");
            currentImg=imgs[i];
            currentImg.classList.add("currentImg");
        })
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

