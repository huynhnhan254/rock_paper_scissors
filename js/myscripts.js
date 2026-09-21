let humanScore = 0;
let computerScore = 0;
const max = 3;
const startButton = document.querySelector("#startButton")
const log = document.querySelector("#log")

function getComputerChoice() {
    let compChoice = Math.floor(Math.random() * max);
    
    return compChoice;
}

function getHumanChoice() {
    let humanChoice = prompt("Enter your choice: ");   
    humanChoice = humanChoice.toLocaleLowerCase(); 

    if (humanChoice === 'r' || humanChoice === "rock") {
        humanChoice = 0;
    } else if (humanChoice === 'p' || humanChoice === "paper") {
        humanChoice = 1;
    } else if (humanChoice === 's' || humanChoice === "scissors") {
        humanChoice = 2;
    } 

    return humanChoice;
}  


function playRound(humanChoice, compChoice) {
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

    console.log("res: " + res);

    console.log(humanScore, computerScore);
}

startButton.addEventListener("click", ()=>{
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice(i+1);

        playRound(humanSelection, computerSelection);
        console.log(i+1 + " times");
    }
});
