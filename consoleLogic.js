function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const choiceIndex = Math.floor(Math.random() * 3);
    return choices[choiceIndex];
}

function playRound(playerChoice, computerChoice){
    if(playerChoice == computerChoice)
        return "tie";
    
    else if((playerChoice == "rock" && computerChoice == "scissors") 
    || (playerChoice == "scissors" && computerChoice == "paper")
    || (playerChoice == "paper" && computerChoice == "rock"))
        return "win";
    
    else if(playerChoice != "rock" && playerChoice != "scissors" &&
    playerChoice != "paper")
        return "invalid";
    
    else
        return "lose" 
}
function displayScores(playerScore, computerScore){
    let scoreTally = document.querySelector(".scoreTally");
    let scoreTallyTitle = document.createElement("span");
    scoreTallyTitle.style.fontSize = "36px";
    scoreTallyTitle.textContent = "SCORES";
    scoreTallyTitle.style.textAlign = "center";
    scoreTally.appendChild(scoreTallyTitle);

    let playerLabel = document.createElement("span");
    let playerScore = document.createElement("span");
    playerLabel.textContent = "You";
    playerScore.textContent = playerScore;

    let computerLabel = document.createElement("span");
    let computerScore = document.createElement("span");
    computerLabel.textContent = "Computer";
    computerScore.textContent = computerScore;

    let document
}
function game(playerChoice){
    let playerScore = computerScore = 0;
    while(playerScore < 5 && computerScore < 5){
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
    
        if(result == "win")
            playerScore++;
        if(result == "lose")
            computerScore++;
    //Function to show game history
    //Function to show score
        alert(`You chose ${playerChoice}. Computer chose ${computerChoice}\n
        You: ${playerScore} Computer: ${computerScore}`);
    //Function to show win
    //Function to show play again button
        if(playerScore == 5)
            alert("You won!");
        else if(computerScore == 5)
            alert("Computer won!");
    }
}

//Event listeners for taking players input
//const choices = document.querySelectorAll(".choice");
//choices.forEach(choice => choice.addEventListener("click", takeInput));

//function takeInput(){
  //  const playerChoice = this.getAttribute("class").split(" ")[1];
 //   game(playerChoice);
//}
