console.log("hello world");

//COMPUTER CHOICE FUNCTION
function getComputerChoice(){
    choice = Math.floor(Math.random() * 3 + 1);
    return (
        choice == 1 ? "rock" :
        choice == 2 ? "paper" : 
        "scissors"
    )
}

// comp choice function stored in a const
const computerSelection = getComputerChoice();

// plays a round with player choice and comp choice as parameters + checks spelling
function playRound(player, computer){
    if (player.toLowerCase() != "rock" && player.toLowerCase() != "paper" && player.toLowerCase() != "scissors"){
        return "spelling mistake";
    }

    player = player.toLowerCase();
    console.log(`you chose ${player}`);
    console.log(`the computer chose ${computer}`);
    return (
               player == "rock" && computer == "paper" ? result = "You lose ! Paper beats Rock !" :
               player == "rock" && computer == "scissors" ? result = "You win ! Rock beats Scissors" :
               player == "paper" && computer == "rock" ? result = "You win ! Paper beats Rock" :
               player == "paper" && computer == "scissors" ? result = "You lose ! Scissors cut paper" :
               player == "scissors" && computer == "paper" ? result = "You win ! Scissors cut paper" :
               player == "scissors" && computer == "rock" ? result = "You lose ! Rock beats scissors" :  result = "it's a Tie"
        );
    
}
// plays a set/game of 5 rounds + counters to keep track of score
function game(){   
    let count1 = 0;
    let count2 = 0;
    for (let i = 0;  i < 5; i++){
        const playerSelection = prompt("Take your pick: [Rock / Paper / Scissors]");
        let result = playRound(playerSelection, getComputerChoice());
        if(result.includes("win")){
            count1 = count1 + 1
        } else if (result.includes("lose")){
            count2 = count2 + 1
        } else if (result == "spelling mistake"){
            return "spelling mistake";
        }

    }
    return (count1 > count2 ? `you win the set with ${count1} wins to ${count2} wins` :
    count1 < count2 ? `you lose the set with ${count1} wins to ${count2} wins` :
    `the set is a tie ! you: ${count1} wins.  the computer  ${count2} wins.`)
}

console.log(game());