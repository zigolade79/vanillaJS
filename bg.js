const body =document.querySelector("body");
const IMG_NUMBER = 3;

function handleLoad(){
    
}

function paintImage(imgNumber){
    const img = new Image();
    img.src = `images/${imgNumber +1}.jpg`;
    img.classList.add("bgImage");
    body.prepend(img);
    
    img.addEventListener("loadend", handleLoad); 

}
function genRandom(){
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init(){
    const randomNumber = genRandom();
    paintImage(randomNumber);
}

init();