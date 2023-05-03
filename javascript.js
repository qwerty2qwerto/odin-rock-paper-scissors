
let playerSelection;
let computerSelection;
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice() {
    playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    if (playerSelection !== 'rock' &&
        playerSelection !== 'paper' &&
        playerSelection !== 'scissors') {
            alert(`Try again dumbass.`);
            location.reload();
    } else {
        return playerSelection;
    }
}

function getComputerChoice() {
    let numericComputerSelection = Math.floor((Math.random()) * 3) + 1;
    if (numericComputerSelection === 1) {
        computerSelection = 'rock';
        return computerSelection;
    } else if (numericComputerSelection === 2) {
        computerSelection = 'paper';
        return computerSelection;
    } else {
        computerSelection = 'scissors';
        return computerSelection;
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        alert('Tie! You both chose ' + playerSelection + ".");
    } else if ((playerSelection === 'rock' && computerSelection === 'scissors') ||
                (playerSelection === 'paper' && computerSelection === 'rock') ||
                (playerSelection === 'scissors' && computerSelection === 'paper')) {
                    alert('You won! ' + playerSelection + " beats " + computerSelection);
                    ++playerScore;
    } else {
        alert('You lost! ' + computerSelection + " beats " + playerSelection);
        ++computerScore;
    }
}

function game() {
    getPlayerChoice();
    getComputerChoice();
    playRound(playerSelection, computerSelection);
}

game();
game();
game();
game();
game();

alert('You won ' + playerScore + ' rounds. The computer won ' + computerScore + ' rounds.');