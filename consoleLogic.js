function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const choiceIndex = Math.floor(Math.random() * 3);
    return choices[choiceIndex];
}

function getPlayerChoice(){
    const player_choice = prompt("Enter your choice (Rock/Paper/Scissors): ");
    return player_choice.toLowerCase();
}

function playRound(playerChoice, computerChoice){
    const round_choices = document.querySelector(".round_choices");

    round_choices.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}`
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

function game(){
    let playerScore = computerScore = 0;
    while(playerScore < 5 && computerScore < 5){
        let playerChoice = getPlayerChoice();
        let computerChoice = getComputerChoice();
        let result = playRound(playerChoice, computerChoice);
    
        if(result == "win")
            playerScore++;
        if(result == "lose")
            computerScore++;

        alert(`You chose ${playerChoice}. Computer chose ${computerChoice}\n
        You: ${playerScore} Computer: ${computerScore}`);

        if(playerScore == 5)
            alert("You won!");
        else if(computerScore == 5)
            alert("Computer won!");
    }
}
game();
