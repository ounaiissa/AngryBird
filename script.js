var block = document.getElementById("block");
var EscapeHole = document.getElementById("EscapeHole");
var Bird = document.getElementById("Bird");
var jumping = 0;
var counter = 0;

EscapeHole.addEventListener('animationiteration', () => {
    var random = -((Math.random()*300)+150);
    EscapeHole.style.top = random + "px";
    counter++;
});
setInterval(function(){
    var BirdTop = parseInt(window.getComputedStyle(Bird).getPropertyValue("top"));
    if(jumping==0){
        Bird.style.top = (BirdTop+3)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var EscapeHoleTop = parseInt(window.getComputedStyle(EscapeHole).getPropertyValue("top"));
    var bTop = -(500-BirdTop);
    if((BirdTop>480)||((blockLeft<20)&&(blockLeft>-50)&&((bTop<EscapeHoleTop)||(bTop>EscapeHoleTop+130)))){
        alert("Game over. Score: "+(counter-1));
        Bird.style.top = 100 + "px";
        counter=0;
    }
},10);

function jump(){
    jumping = 1;
    let jumpCount = 0;
    var jumpInterval = setInterval(function(){
        var BirdTop = parseInt(window.getComputedStyle(Bird).getPropertyValue("top"));
        if((BirdTop>6)&&(jumpCount<15)){
            Bird.style.top = (BirdTop-5)+"px";
        }
        if(jumpCount>20){
            clearInterval(jumpInterval);
            jumping=0;
            jumpCount=0;
        }
        jumpCount++;
    },10);
}