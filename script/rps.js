const choice = [
    "rock",
    "paper",
    "scissors"
];

let playerScore = 0;
let computerScore = 0;

// Selects the choice randonmly for the computer
function computerPlay() {
    let random = Math.floor(Math.random()*choice.length);
    let computerSelection = choice[random];
    return computerSelection;
};

const buttons = document.querySelectorAll('#pick');
buttons.forEach((pick) => {pick.addEventListener('click', () => {
    // const sel = pick.querySelector('title');
    playerSelection = pick.title;
    console.log(playerSelection);
    playRound(playerSelection);
    })})

// Plays a single round of Rock, Paper, Scissors
function playRound(playerSelection) {
    console.log('Function starting');
     
    const computerSelection = computerPlay();
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
        return "Draw!"
    }
    
    if (playerSelection === "rock"){
        if (computerSelection === "paper") {
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
        else (computerSelection === "paper"); {
                playerScore++
                return "You win! Scissors beats Paper.";
        }
    }
};

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
