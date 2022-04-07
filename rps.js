
//Define choices and scoring of game.
let choices = ['rock', 'paper', 'scissors'];
let pScore = 0;
let cScore = 0;
let win = "You win";
let lose = "You lose";
let tie = "Tie game";

//Player makes selection.
//let playerSelection = prompt("Rock, paper or scissors?");
//console.log(playerSelection.toLowerCase());

//Computer chooses randomnly.
function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

//Computer random selection.
//let computerSelection = computerPlay();
//console.log(computerSelection.toLowerCase());

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection === 'paper') {
            cScore++;
            return lose;
        } else if (computerSelection === 'rock') {
            return tie;
        } else {
            pScore++;
            return win;
        }
    }

    if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection === 'paper') {
            pScore++;
            return win;
        } else if (computerSelection === 'rock') {
            cScore++;
            return lose;
        } else {
            return tie;
        }
    }

    if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection === 'paper') {
            return tie;
        } else if (computerSelection === 'rock') {
            pScore++;
            return win;
        } else {
            cScore++;
            return lose;
        }
    }
}


let i = 0;
let game = () => {
    let playerSelection = prompt("Rock, paper or scissors?");
    let computerSelection = computerPlay();
    console.log(playRound(playerSelection, computerSelection));
    console.log("Your score = " + pScore);
    console.log("Computer's score = " + cScore);
    i++;
    if (i !== 5) {
        game();
    } else {
        return("Game over. User("+pScore+") vs Computer("+cScore+")");
    }
}

console.log(game());
