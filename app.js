const rps = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return rps[Math.floor(Math.random() * rps.length)];
}

function updateResults() {
    results.textContent = `Human: ${humanScore}, Computer: ${computerScore}\r\n`;
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        updateResults();
        results.textContent += "It's a tie!\r\n";  
        return;
    };    

    const result = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (result[humanChoice] === computerChoice) {
        humanScore++;
        updateResults();
        results.textContent += `You win! ${capitalizeFirstLetter(humanChoice)} beats ${computerChoice}.\r\n`;
    } else {
        computerScore++;
        updateResults();
        results.textContent += `You lose! ${capitalizeFirstLetter(computerChoice)} beats ${humanChoice}.\r\n`;
    }
}

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function resetScores() {
    humanScore = 0;
    computerScore = 0;
    results.textContent = "";
}

function playGame() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            if (humanScore === 5 || computerScore === 5) {
                resetScores();
            }
            
            playRound(button.textContent.toLowerCase(), getComputerChoice());

            if (humanScore === 5 || computerScore === 5) {
                if (humanScore > computerScore) {
                    results.textContent += "Congrats! You won the game.";
                } else if (humanScore < computerScore) {
                    results.textContent += "You lost the game. Better luck next time!";
                }
            }
        })
    })
}

playGame();