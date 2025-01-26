let userScore = 0;
let compScore = 0;

const choices=document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreUpdate=document.querySelector("#user-score");
const compScoreUpdate=document.querySelector("#comp-score");

const showWinner = (userWin,userChoice,compChoice) =>{
     if(userWin){
        userScore++
        userScoreUpdate.innerText=userScore;
        console.log(`you won ${userChoice} Beats ${compChoice}`);
        msg.innerText = "You Won !";
        msg.style.backgroundColor="green";
     }else{
        compScore++
        compScoreUpdate.innerText = compScore;
        console.log(`you lost ${compChoice} Beats ${userChoice}`);
        msg.innerText = "You Lost !";
        msg.style.backgroundColor = "red";
     }
}

const drawGame = () =>{
    console.log("game is draw");
    msg.innerText = "Its a Draw !"
    msg.style.backgroundColor="#319cb5";
}

const genCompChoice = ()=>{
    const options =["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random()*3);//to generate random choices
    return options [randomIdx];
}

const playGame=(userChoice)=>{
    console.log("user choice =",userChoice);
        //to generate computer choice
    const compChoice = genCompChoice();
    console.log("comp choice =",compChoice);
    if(userChoice === compChoice){
        //draw game
        drawGame ();
    }else{
        let userWin = true;
        if (userChoice === "rock"){
           userWin = compChoice === "paper" ? false : true;
        }else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        }else{
            userWin = compChoice === "rock"? false : true ;
        }
        showWinner (userWin,userChoice,compChoice);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
    const userChoice  = choice.getAttribute("id");
    playGame(userChoice);
    })
})