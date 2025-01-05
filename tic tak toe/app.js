let boxes=document.querySelectorAll(".box");
let restart =document.querySelector("#restart");
let newGame=document.querySelector("#new-btn");
let msg=document.querySelector("#win");
let msgContainer=document.querySelector(".msg ");

//palyers turn
let turnO = true;
let count=0;   //to track the draw
//winning patterns
const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>{
       
        if(turnO){
             box.innerText="O";
             turnO=false;
        }
        else
        {
            box.innerText="X";
            turnO=true;
        }
       box.disabled=true;
       count++;

       let isWinner=checkWinner();

       if(count===9&&!isWinner)
       {
        gameDraw();
       }
    });
});

const disableBox =() =>
{
    for(let box of boxes){
        box.disabled=true;
    }
};

const enableBox =() =>
    {
        for(let box of boxes){
            box.disabled=false;
            box.innerText="";
        }
    };

const showWinner=(winner)=>
{
    msg.innerText=` Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBox();
};


const checkWinner=()=>
    {
        for ( let pattern of winPatterns)
        {
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if (pos1 !="" && pos2 !="" && pos3 !=""){
            if(pos1===pos2 && pos2===pos3){
                console.log("winner",pos1);
                showWinner(pos1);
                return true;

            }

        }


        }
    };


    const restartGame= ()=>
    {
        turnO=true;
        count=0;
        enableBox();
        msgContainer.classList.add("hide");
    };

    
    const gameDraw = () => 
        {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableBox();
    
    };

    newGame.addEventListener("click",restartGame);
    restart.addEventListener("click",restartGame);
