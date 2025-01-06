let userscore=0;
let computerscore=0;

const choices=document.querySelectorAll(".choice");
const message=document.querySelector("#msg");
const userScoreUpdate=document.querySelector("#user");
const comScoreUpdate=document.querySelector("#computer");

//add event listener for all choice
choices.forEach((choice)=>
{  
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});

//game conditions between computer and user 
const playGame=(userChoice) =>
{
    //generate computer choice
    const compChoice=genComChoice();

    //conditions for win and lose
    if(userChoice===compChoice){
        drawGame();  // game draw
    }
    else
    {
       let userWin=true;
       if(userChoice==="rock"){
        //comp has only 2 choice scissors ,paper
        userWin=compChoice==="paper"? false:true;
       }
       else if(userChoice==="paper")
        {// comp has 2 choice scissors ,rock
        userWin=compChoice==="scissors"?false:true;
       }
       else{
                //rock paper
        userWin=compChoice==="rock"?false:true;
    }
     showWinner(userWin,userChoice,compChoice);
    }
};

//function for generating computer choice
const genComChoice=() =>
{
    let options =["rock","paper","scissors"];
    const randIndx=Math.floor(Math.random()*3);//generate random number without decimalNumbers
    return options[randIndx];
};


//function for drawGame
const drawGame=() =>
{
    message.innerText="game was draw , play again";
    message.style.backgroundColor="yellow"
}


//function to show who is the Winner

const showWinner=(userWin,userChoice,compChoice)=>
{
    if(userWin){
        userscore++;
        userScoreUpdate.innerText=userscore;
        message.innerText=`you win! ${userChoice} beats ${compChoice}`; 
        message.style.backgroundColor="green";
        
    }
    else{
        computerscore++;
        comScoreUpdate.innerText=computerscore;
        msg.innerText=`you lose! ${compChoice} beats ${userChoice}`;
        message.style.backgroundColor="red";
        
    }
};