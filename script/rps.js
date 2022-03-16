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
    playRound(playerSelection);
    game();
    })})

// Plays a single round of Rock, Paper, Scissors
function playRound(playerSelection) {
    let battle = document.querySelector('#results')
     
    let computerSelection = computerPlay();
    
    if (playerSelection === computerSelection) {
        battle.textContent = "Draw!";
        return;
    }
    
    if (playerSelection === "rock"){
        if (computerSelection === "paper") {
                computerScore++;
                compUpdate();
                battle.textContent = "You lose! Paper beats Rock.";
                return;
        }

        else (computerSelection === "scissors"); {
                playerScore++
                playerUpdate();
                battle.textContent = "You win! Rock beats Scissors.";
                return;
        }
    }
    
    else if (playerSelection === "paper") {
        
        if (computerSelection === "rock") {
                playerScore++
                playerUpdate();
                battle.textContent = "You win! Paper beats Rock.";
                return;
        }
        
        else (computerSelection === "scissors"); {
                computerScore++
                compUpdate();
                battle.textContent = "You lose! Scissors beats Rock.";
                return;
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
                computerScore++;
                compUpdate();
                battle.textContent = "You lose! Rock beats Scissors";
                return;
        }
        else (computerSelection === "paper"); {
                playerScore++
                playerUpdate();
                battle.textContent = "You win! Scissors beats Paper.";
                return;
        }
    
    }
};

function compUpdate() {
    let cScore = document.querySelector('#computer-score');
    cScore.textContent = computerScore;
}
function playerUpdate() {
    const pScore = document.querySelector('#player-score');
    pScore.textContent = playerScore;
}

function game() {
    if (playerScore === 5 || computerScore === 5) {
        alert()
    }
   }