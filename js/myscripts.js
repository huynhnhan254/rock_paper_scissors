let humanScore = 0;
let computerScore = 0;
const max = 3;
let gamePlayStatus = false;
const rockBtn = document.querySelector(".rockBtn");
const paperBtn = document.querySelector(".paperBtn");
const scissorsBtn = document.querySelector(".scissorsBtn");


function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * max);
    
    return compChoice;
}

function getHumanChoice(humanChoice) {
    if (humanChoice === 'r' || humanChoice === "rock") {
        humanChoice = 0;
    } else if (humanChoice === 'p' || humanChoice === "paper") {
        humanChoice = 1;
    } else if (humanChoice === 's' || humanChoice === "scissors") {
        humanChoice = 2;
    }

    playRound(humanChoice, getComputerChoice());
}  


function playRound(humanChoice, compChoice) {
    if (!gamePlayStatus) {
        return;
    }

    let res = humanChoice - compChoice;

    if (res === 0) {
        console.log("Tie");
    } else if (res === 1) {
       humanScore++;
    } else if (res === -1) {
        computerScore++;
    } else if (res === 2) {
        computerScore++;
    } else if (res === -2) {
        humanScore++;
    }

    if (humanScore === 5) {
        alert("Congratulation!!! You Win!!!");
        exitGame();
    } else if (computerScore === 5) {
        alert("GAME OVER");
        exitGame();
    }

    console.log("Human:", humanScore);
    console.log("Computer:", computerScore);
}

function startGame() {
    gamePlayStatus = true;
    let startBtn = document.getElementById("startBtn");
    let inGameBtn = document.getElementById("inGameBtn");
    humanScore = 0;
    computerScore = 0;

    startBtn.classList.add("hidden");
    inGameBtn.classList.remove("hidden");
}

function exitGame() {
    let startBtn = document.getElementById("startBtn");
    let inGameBtn = document.getElementById("inGameBtn");

    startBtn.classList.remove("hidden");
    inGameBtn.classList.add("hidden");

    gamePlayStatus = false;
}


rockBtn.addEventListener("click", ()=>getHumanChoice("r"));
paperBtn.addEventListener("click", ()=>getHumanChoice("p"));
scissorsBtn.addEventListener("click", ()=>getHumanChoice("s"));
