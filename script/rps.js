// Array of Choices
const choice = [
    "rock",
    "paper",
    "scissors"
];

let playerScore = 0;
let computerScore = 0;

// Selects the choice randonmly for the computer
function computerPlay(arr) {
    let random = Math.floor(Math.random()*arr.length);
    let selection = arr[random];
    return selection;
};

// Plays a single round of Rock, Paper, Scissors
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection === "rock"){
        if (computerSelection === "rock") {
                return "Draw!";
        }
        
        else if (computerSelection === "paper") {
                computerScore++;
                return "You lose! Paper beats Rock.";
        }

        else (computerSelection === "scissors"); {
                playerScore++
                return "You win! Rock beats Scissors.";
        }
    }
    
    else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
                playerScore++
                return "You win! Paper beats Rock.";
        }
        else if (computerSelection === "paper") {
                return "Draw!";
        }
        else (computerSelection === "scissors"); {
                computerScore++
                return "You lose! Scissors beats Rock.";
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
                computerScore++
                return "You lose! Rock beats Scissors";
        }
        else if (computerSelection === "paper") {
                playerScore++
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

function selections() {

    // Player inputs choice for the game
const playerSelection = prompt("Rock, Paper, or Scissors?", " ".toLowerCase);
    console.log(playerSelection);

// Creating the actual choice of the computer.
const computerSelection = computerPlay(choice)

// Test to ensure random selection is working
    console.log(computerSelection);

}

function score() {
    if (playerScore > computerScore){
        console.log("Player wins!")
    }
    else if (computerScore > playerScore) {
        console.log("Computer wins!")
    }
    else {
        console.log("Oops! Something went wrong.")
    }
}

function game() {
let i = 0;
    do {
        let playerSelection = prompt("Rock, Paper, or Scissors?", " ");
        let computerSelection = computerPlay(choice);
        console.log(playRound(playerSelection.toLowerCase(), computerSelection));
        i++;
    }
    while(i <5 )
    
    return score();
};



// Playing a single round
    
  /*  // Player inputs choice for the game
       let playerSelection = prompt("Rock, Paper, or Scissors?", " ");
       console.log(playerSelection);

    // Creating the actual choice of the computer.
       let computerSelection = computerPlay(choice)

    // Test to ensure random selection is working
       console.log(computerSelection);

    // Single Round
       console.log(playRound(playerSelection.toLowerCase(), computerSelection));
*/
// Playing a full 5 rounds
    game();