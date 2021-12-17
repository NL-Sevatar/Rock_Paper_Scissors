

// Selects the choice randonmly for the computer
function computerPlay(arr) {
    let random = Math.floor(Math.random()*arr.length);
    let selection = arr[random];
    return selection;
};

// Choices for the game
const choice = [
    'Rock',
    'Paper',
    'Scissors'
];

// Creating the actual choice of the computer.
let computerSelection = computerPlay(choice)

// Test to ensure random selection is working
console.log(computerSelection)

// Player inputs choice for the game
let playerSelection = prompt("Rock, Paper, or Scissors?", " ");

// Plays a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === rock) {
        if (computerSelection === rock) {
            alert("Draw!")
        }
        elseif (computerSelection === paper) {
            alert("You lose! Paper beats Rock.")
        }
        elseif (computerSelection === scissors) {
            alert("You win! Rock beats Scissors.")
        }
        else {
            alert("Oh no something went wrong! Make sure you select a proper option")
        }

    }

    elseif (playerSelection === paper) {
        if (computerSelection === rock) {
            alert("You win! Paper beats Rock.")
        }
        elseif (computerSelection === paper) {
            alert("Draw!")
        }
        elseif (computerSelection === scissors) {
            alert("You lose! Scissors beats Rock.")
        }
        else {
            alert("Oh no something went wrong! Make sure you select a proper option")
        }

    }

    if (playerSelection === scissors) {
        if (computerSelection === rock) {
            alert("You lose! Rock beats Scissors")
        }
        elseif (computerSelection === paper) {
            alert("You win! Scissors beats Paper.")
        }
        elseif (computerSelection === scissors) {
            alert("Draw!")
        }
        else {
            alert("Oh no something went wrong! Make sure you select a proper option")
        }

    }
