function getComputerChoice() {
    const choice = [
        "rock",
        "paper",
        "scissors"
    ];
    let random = Math.floor(Math.random() * choice.length);
    let computerSelection = choice[random];
    return computerSelection;
}

let playerScore = 0;
let computerScore = 0;
//const battle = document.querySelector('#results')
//const pScore = document.querySelector('#player-score');    
//const cScore = document.querySelector('#computer-score');

function determineWinner(playerSelection, computerSelection)
   {
    if(playerSelection === computerSelection) {
        return console.log("tie");
    }

    else if (
            (playerSelection === "rock" && computerSelection === "scissors")  ||
            (playerSelection === "paper" && computerSelection ==="rock")      ||
            (playerSelection === "scissors" && computerSelection === "paper") 
    )
     {
        playerScore++;
        return console.log("player");    
    }

    else {
        computerScore++;
        return console.log("computer");
    }
   }

/* function compUpdate() {    
        cScore.textContent = computerScore;
}
function playerUpdate() {
        pScore.textContent = playerScore;
}
*/
function declareWinner() {
    if (playerScore > computerScore && playerScore === 5) {
        window.alert('You are the victor!');
        //location.reload();
    } 
    else if (computerScore === 5) {
        window.alert('Defeat, may they have mercy on your soul.');
        //location.reload();
    }
    else {
        return console.log("Next Round!")
    }
   }

   function playGame(){
    do {
    const playerSelection = prompt("Choose rock, paper, or scissors:").toLowerCase();
    const computerSelection = getComputerChoice();
    determineWinner(playerSelection, computerSelection);
    console.log(`${playerSelection} was your choice and the computer picked ${computerSelection}`);
    declareWinner();
    }
    while(playerScore || computerScore < 5)
   }
playGame();