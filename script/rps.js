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
    let battle = document.querySelector('#results')
     
    let computerSelection = computerPlay();
    console.log(computerSelection);

    if (playerSelection === computerSelection) {
        battle.textContent = "Draw!";
    }
    
    if (playerSelection === "rock"){
        if (computerSelection === "paper") {
                computerScore++;
                compUpdate();
                battle.textContent = "You lose! Paper beats Rock.";
        }

        else (computerSelection === "scissors"); {
                playerScore++
                playerUpdate();
                battle.textContent = "You win! Rock beats Scissors.";
        }
    }
    
    else if (playerSelection === "paper") {
        
        if (computerSelection === "rock") {
                playerScore++
                playerUpdate();
                battle.textContent = "You win! Paper beats Rock.";
        }
        
        else (computerSelection === "scissors"); {
                computerScore++
                compUpdate();
                battle.textContent = "You lose! Scissors beats Rock.";
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
                computerScore++;
                compUpdate();
                battle.textContent = "You lose! Rock beats Scissors";
        }
        else (computerSelection === "paper"); {
                playerScore++
                playerUpdate();
                battle.textContent = "You win! Scissors beats Paper.";
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

function compUpdate() {
    let cScore = document.querySelector('#computer-score');
    cScore.textContent = computerScore;
}
function playerUpdate() {
    const pScore = document.querySelector('#player-score');
    pScore.textContent = playerScore;
}