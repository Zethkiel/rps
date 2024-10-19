const rps = ["rock", "paper", "scissors"];
const buttons = document.querySelectorAll("button");
const results = document.querySelector(".results");

function getComputerChoice() {
    return rps[Math.floor(Math.random() * rps.length)];
};

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return results.textContent += "It's a tie!\r\n";  
    };    

    const result = {
        rock: "scissors",
        paper: "rock",
        scissors: "paper"
    };

    if (result[humanChoice] === computerChoice) {
        humanScore++;
        results.textContent += `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.\r\n`;
    } else {
        computerScore++;
        results.textContent += `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.\r\n`;
    }
};

function playGame() {
    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            playRound(button.textContent.toLowerCase(), getComputerChoice());

            if (humanScore == 5 || computerScore == 5) {
                results.textContent = `Human: ${humanScore}, Computer: ${computerScore}\r\n`;

                results.textContent +=
                humanScore > computerScore ? "Congrats! You won the game." :
                humanScore < computerScore ? "You lost the game. Better luck next time!" :
                "It's an overall tie!"

                humanScore = 0;
                computerScore = 0;
            }
        })
    })
};

playGame();