//Pseudocode
//
//Create function getComputerChoice() {
//  Generate random number 
//

let playerSelection;
let computerSelection;

function getPlayerChoice() {
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    if (playerSelection !== 'rock' &&
        playerSelection !== 'paper' &&
        playerSelection !== 'scissors') {
            alert(`Try again dumbass.`);
            location.reload();
    }
}

function getComputerChoice() {
    let numericComputerSelection = Math.floor((Math.random()) * 3) + 1;
    if (numericComputerSelection === 1) {
        computerSelection = 'rock';
    } else if (numericComputerSelection === 2) {
        computerSelection = 'paper';
    } else {
        computerSelection = 'scissors';
    }
}

getPlayerChoice();