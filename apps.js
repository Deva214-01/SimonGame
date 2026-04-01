let gameseq=[];
let userseq=[];

let btn =["yellow","red","purple","green"];

let started = false;
let level =0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started == false){
    console.log("game started");
   started=true;

   levelUp();
}
});

function gameflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}


function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250);
}



function levelUp(){
    userseq=[];
    level++;
    h2.innerText= `level ${level}`;

    let ranIdx=Math.floor(Math.random()*4);
    let randcol =btn[ranIdx];
    let ranBtn =document.querySelector( `.${randcol}`);
    gameseq.push(randcol);
    console.log(gameseq);
    gameflash(ranBtn);
}

function checkAns(idx){
    // console.log("curr level :",level);


    if(userseq[idx] == gameseq[idx]){
       if(userseq.length == gameseq.length){
        levelUp();
       }
    }else{
        h2.innerHTML=`Game Over ! you score is<b>${level}</b><br> prees any key to start`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
             document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();
    }
    }

 function btnpress(){
    // console.log(this);
    let btn=this;
    userflash(btn);

    userColor = btn.getAttribute("id");
    userseq.push(userColor);

    checkAns(userseq.length-1);
 }


let allBtns = document.querySelectorAll(".btn"); 

for (let btns of allBtns) {
    btns.addEventListener("click", btnpress);
}

function reset(){
    started=false;
    gameseq=[];
    userseq=[];
    level=0;

}
 