let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScoreDiv = document.querySelector("#user-score");
const compScoreDiv = document.querySelector("#comp-score");

const genCompChoice = () => {
    const options = ["rock","paper","scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};

const drawGame = () => {
    msg.innerHTML = "Game was draw, play again";
    msg.style.backgroundColor = "black";
};

const showWinner = (userWin,userChoice,compChoice) => {
    if(userWin){
        userScore++;
        userScoreDiv.innerHTML = userScore;
        msg.innerHTML = `You win ! your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }
    else{
        compScore++;
        compScoreDiv.innerHTML = compScore;
        msg.innerHTML = `You lose ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    if(userChoice===compChoice){
        //draw condition
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice=="rock"){
            userWin = compChoice === "paper" ? false : true;
        }
        else if(userChoice=="paper"){
            userWin = compChoice === "scissors" ? false : true;
        }
        else{
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
   
};

choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});