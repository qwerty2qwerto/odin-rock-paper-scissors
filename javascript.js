//Pseudocode
//
//Create function getComputerChoice() {
//  Generate random number 
//

let computerChoice;

function getComputerChoice() {
    let x = Math.floor((Math.random()) * 3) + 1;
    if (x === 1) {
        computerChoice = 'Rock';
    } else if (x === 2) {
        computerChoice = 'Paper';
    } else {
        computerChoice = 'Scissors';
    }
}


getComputerChoice();
console.log(computerChoice);