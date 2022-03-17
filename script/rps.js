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
    playerSelection = pick.title;
    playRound(playerSelection);
    if (playerScore == 5 || computerScore == 5){
        declareWinner();
    }
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

const cScore = document.querySelector('#computer-score');
const pScore = document.querySelector('#player-score');
function compUpdate() {
    
    cScore.textContent = computerScore;
}
function playerUpdate() {
    
    pScore.textContent = playerScore;
}

function declareWinner() {
    if (playerScore > computerScore) {
        window.alert('You are the victor!');
        let playerScore = 0;
        let computerScore = 0;
        cScore.textContent = 0;     
        pScore.textContent = 0;
    } 
    else if (computerScore === 5) {
        window.alert('Defeat, may they have mercy on your soul.');
        let playerScore = 0;
        let computerScore = 0;
        cScore.textContent = 0;     
       pScore.textContent = 0;
    }
   }