document.getElementById("rock").addEventListener("click", () => playRound("rock", getComputerChoice())) //single roudn írd át play raoundra
document.getElementById("paper").addEventListener("click", () => playRound("paper", getComputerChoice()))
document.getElementById("scissors").addEventListener("click", () => playRound("scissors", getComputerChoice()))

let playerScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3);
    if (choice === 0) {
        return "rock"
    }
    if (choice === 1) {
        return "paper"
    }
    return "scissors"
}

function playRound(playerSelection, computerSelection) {
    if (playerScore < 5 && computerScore < 5) {

        document.getElementById("selections").innerHTML = "You selected: " + playerSelection + ". Computer selected: " + computerSelection
        if (
            (playerSelection === "rock" && computerSelection === "scissors") ||
            (playerSelection === "scissors" && computerSelection === "paper") ||
            (playerSelection === "paper" && computerSelection === "rock")
        ) {
            document.getElementById("results").innerHTML = "This round result: The winnner is You!";
            playerScore++;
            document.getElementById("scores").innerHTML = "Your score: " + playerScore + ". Computer score: " + computerScore;

            if (playerScore === 5) {
                document.getElementById("gameover").innerHTML = "You won the game!";
            }
        }
        else if (
            (computerSelection === "rock" && playerSelection === "scissors") ||
            (computerSelection === "scissors" && playerSelection === "paper") ||
            (computerSelection === "paper" && playerSelection === "rock")
        ) {
            document.getElementById("results").innerHTML = "This round result: The winnner is the computer...";
            computerScore++;
            document.getElementById("scores").innerHTML = "Your score: " + playerScore + ". Computer score: " + computerScore;

            if (computerScore === 5) {
                document.getElementById("gameover").innerHTML = "Computer won the game...";
            }
        }
        else {
            document.getElementById("results").innerHTML = "This round result: It's a draw.";
        }
    }
}
