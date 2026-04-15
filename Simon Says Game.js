let Gameseq=[]
let Userseq=[]
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let h2=document.querySelector('h2');

document.addEventListener('keypress',function()
{
 if(started==false)
{
console.log("game is started");
started=true;
    levelup();
}
}) 

function gameflash(btn)
{ 
    btn.classList.add('flash');
    setTimeout(
        function()
        {
            btn.classList.remove('flash')
        },1000)
    }

    function userflash(btn)
{ 
    btn.classList.add('userflash');
    setTimeout(
        function()
        {
            btn.classList.remove('userflash')
        },1000)
    }

function levelup(){
    Userseq=[];
    level ++;
    h2.innerText=`level ${level}`;
    
    randIdx=Math.floor(Math.random()*3);
    randColor=btns[randIdx];
    randBtn=document.querySelector(`.${randColor}`)

    //console.log(randIdx);
    // console.log(randBtn);
    //  console.log(randColor);
    Gameseq.push(randColor);
     console.log(Gameseq);
    gameflash(randBtn);
   
     
    

}

function checkAns(idx){
    //console.log('current level',level);
    
    if(Userseq[idx]===Gameseq[idx])
    {
        if(Userseq.length== Gameseq.length)
        {
            setTimeout(levelup,800);
        }
        
    }
    else
    {
        h2.innerHTML=`Game Over!your Score was <b>${level}</b><br> Press any key to start.`;//we cannot give the tags in innerText so we use innerHtml
        document.querySelector('body').style.backgroundColor='red';
        setTimeout(function()
    {
        document.querySelector('body').style.backgroundColor='white';
    },150)
        reset();
        
    }
    
}
function btnpress()
{
    
    
    let btn=this
    userflash(btn);
    

    usercolor=btn.getAttribute("id");
    Userseq.push(usercolor);  
    checkAns(Userseq.length-1);  
}

let allbtns=document.querySelectorAll('.btn');
for(btn of allbtns)
{



btn.addEventListener('click',btnpress);
}

function reset()
{
    started=false;
    Gameseq=[];
    Userseq=[];
    level=0;

}