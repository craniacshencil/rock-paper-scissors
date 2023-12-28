function getComputerChoice(){
    const choices = ['Rock', 'Paper', 'Scissors'];
    const choiceIndex = Math.floor(Math.random() * 3);
    return choices[choiceIndex];
}