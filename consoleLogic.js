function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const choiceIndex = Math.floor(Math.random() * 3);
    return choices[choiceIndex];
}

function getPlayerChoice(){
    const playerinput = document.getElementById("playerchoice_input");
    // const playround = document.querySelector(".playround");
    return playerinput.value.toLowerCase();
    // let playerchoice;
    // playround.addEventListener("click", () => playerchoice = playerinput.value.toLowerCase());
    // return playerchoice;
}

function playRound(playerChoice, computerChoice){
    const round_choices = document.querySelector(".round_choices");
    const round_result = document.querySelector(".round_result");

    round_choices.textContent = `You chose ${playerChoice}. Computer chose ${computerChoice}`
    if(playerChoice == computerChoice)
        round_result.textContent = "Tie. Both of you chose " + playerChoice + " play Again"; 

    else if((playerChoice == "rock" && computerChoice == "scissors") 
    || (playerChoice == "scissors" && computerChoice == "paper")
    || (playerChoice == "paper" && computerChoice == "rock"))
        round_result.textContent = "Win!";

    else
        round_result.textContent = "Lose";
}

//Playing round on button click
const play_button = document.getElementById("play_button");
play_button.addEventListener("click", () => {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();
    playRound(playerChoice, computerChoice);
}, false);
