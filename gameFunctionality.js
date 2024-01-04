function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const choiceIndex = Math.floor(Math.random() * 3);
    return choices[choiceIndex];
}

function gameLogic(playerChoice, computerChoice){
    if(playerChoice == computerChoice)
        return "tie";
    
    else if((playerChoice == "rock" && computerChoice == "scissors") 
    || (playerChoice == "scissors" && computerChoice == "paper")
    || (playerChoice == "paper" && computerChoice == "rock"))
        return "win";
    
    else
        return "lose" 
}

function displayRoundSummary(result, playerChoice, computerChoice){
    const scoreHistory = document.querySelector(".scoreHistory");
    const roundSummary = document.createElement("p");
    roundSummary.textContent = `Round ${roundNo}. You played ${playerChoice}. Computer played ${computerChoice}`;
    if(result == "win")
        roundSummary.textContent += " You Win!";
    else if(result == "lose")         
        roundSummary.textContent += " You Lose!";
    else
        roundSummary.textContent += " It is a Tie.";
    scoreHistory.appendChild(roundSummary);
}

function displayScores(playerScore, computerScore){
    const playerScoreLabel = document.querySelector(".playerScore");
    const computerScoreLabel = document.querySelector(".computerScore");

    playerScoreLabel.textContent = playerScore;
    playerScoreLabel.style.fontSize = "24px";

    computerScoreLabel.textContent = computerScore;
    computerScoreLabel.style.fontSize = "24px";
}

function displayGameEnd(winner){
    const container = document.querySelector(".scorecardCenter");
    const playAgainButton = document.createElement("button");
    const gameOutcome = document.createElement("span");
    
    gameOutcome.textContent = `${winner} won`;
    playAgainButton.textContent = "Play Again";
    container.appendChild(playAgainButton);
    container.appendChild(gameOutcome);
    
    playAgainButton.addEventListener("click", () => {
        playAgainButton.remove();
        gameOutcome.remove();
        const playerScoreLabel = document.querySelector(".playerScore");
        const computerScoreLabel = document.querySelector(".computerScore");
        playerScoreLabel.textContent = "-";
        computerScoreLabel.textContent = "-";

        const scoreHistory = document.querySelector(".scoreHistory");
        scoreHistory.replaceChildren();
        playerScore = computerScore = 0;
        roundNo = 1;
        choices.forEach(choice => choice.addEventListener("click", takeInput));
    });
}

function playRound(playerChoice){
    const computerChoice = getComputerChoice();
    const result = gameLogic(playerChoice, computerChoice);

    if(result == "win")
        playerScore++;
    if(result == "lose")
        computerScore++;
        
    displayRoundSummary(result, playerChoice, computerChoice);
    displayScores(playerScore, computerScore);
    roundNo++;
    
    if(playerScore == 5)
        displayGameEnd("You");
    else if(computerScore == 5)
        displayGameEnd("Computer");
    
}

//Event listeners for taking players input
let playerScore = computerScore = 0;
let roundNo = 1;
const choices = document.querySelectorAll(".choice");
choices.forEach(choice => choice.addEventListener("click", takeInput));

function takeInput(){
   const playerChoice = this.getAttribute("class").split(" ")[1];
   if(playerScore == 5 || computerScore == 5){
      choices.forEach(choice => choice.removeEventListener("click", takeInput)); 
      return ;
   }
   playRound(playerChoice);
}
