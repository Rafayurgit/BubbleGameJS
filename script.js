var time=30;
var score=0;
var hitrn=0;
function incScore(){
    score +=10;
    document.querySelector(".scoreval").textContent =score;

}

function getNewHit(){
    hitrn =Math.floor(Math.random()*10)
    document.querySelector(".hitval").textContent=hitrn;
}

function makeBubble(){
    var clutter ="";
    for(var i=1; i<=55 ;i++){
        var rn=Math.floor(Math.random()*10)
        clutter += `<div id="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML=clutter;
}


function runTimer(){
    timerint =setInterval(function(){
        if(time>0){
            time--;
            document.querySelector(".Timer").textContent=time;
        }else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML= `<h1>Game Over</h1>`;
            addRetryButton();
            
        }
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function(detail){
    var clickedNum=Number(detail.target.textContent);
    if(clickedNum===hitrn){
        incScore();
        makeBubble();
        getNewHit();
    }
});

function addRetryButton() {
    var retryButton = document.createElement("button");
    retryButton.textContent = "Retry";
    retryButton.onclick = function () {
        // Reload the page when the Retry button is clicked
        location.reload();
    };

    document.querySelector("#pbtm").appendChild(retryButton);
}



runTimer();
makeBubble();
getNewHit();

