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

    if (humanChoice === 'r') {
        humanChoice = 0;
    } else if (humanChoice === 'p') {
        humanChoice = 1;
    } else if (humanChoice === 's') {
        humanChoice = 2;
    }
}  


function playRound(humanChoice, compChoice) {
    if (humanChoice === compChoice) {
        console.log("Tie");
    } else if (humanChoice === 1)
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);