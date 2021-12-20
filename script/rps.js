// Array of Choices
const choice = [
    "rock",
    "paper",
    "scissors"
];

// Selects the choice randonmly for the computer
function computerPlay(arr) {
    let random = Math.floor(Math.random()*arr.length);
    let selection = arr[random];
    return selection;
};

// Plays a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "rock"){
        if (computerSelection == "Rock") {
                return "Draw!";
        }
        
        else if (computerSelection == "Paper") {
                return "You lose! Paper beats Rock.";
        }

        else (computerSelection == "scissors"); {
                return "You win! Rock beats Scissors.";
        }
    }
    
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
                return "You win! Paper beats Rock.";
        }
        else if (computerSelection === "paper") {
                return "Draw!";
        }
        else (computerSelection === "scissors"); {
                return "You lose! Scissors beats Rock.";
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
                return "You lose! Rock beats Scissors";
        }
        else if (computerSelection === "paper") {
                return "You win! Scissors beats Paper.";
        }

        else (computerSelection === "scissors"); {
                return "Draw";
        }
    }

    else (playerSelection !== "rock || paper || scissors"); {
        return "Oh no something went wrong! Make sure you enter a proper option"
    }
};

// Player inputs choice for the game
const playerSelection = prompt("Rock, Paper, or Scissors?", " ");
    console.log(playerSelection);

// Creating the actual choice of the computer.
const computerSelection = computerPlay(choice)

// Test to ensure random selection is working
    console.log(computerSelection);

// Playing a single round
 console.log(playRound(playerSelection.toLowerCase(), computerSelection));


    