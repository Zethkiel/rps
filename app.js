const rps = ["rock", "paper", "scissors"];

function getComputerChoice() {
    return rps[Math.floor(Math.random() * rps.length)];
}

function getHumanChoice() {
    return prompt("Rock, paper, or scissors?");
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        if (!humanChoice) return "There was no input.";
        if (!rps.includes(humanChoice)) return "Invalid input!";
        if (humanChoice === computerChoice) return "It's a tie!";

        const result = {
            rock: "scissors",
            paper: "rock",
            scissors: "paper"
        };

        if (result[humanChoice] === computerChoice) {
            humanScore++;
            return `You win! ${humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1)} beats ${computerChoice}.`;
        } else {
            computerScore++;
            return `You lose! ${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)} beats ${humanChoice}.`;
        }
    }

    let i = 0;
    while (i < 5) {
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);

        if (result !== "Invalid input!" && result !== "There was no input.") {
            i++;
        }
        console.log(result);
    }

    console.log(`Human: ${humanScore}, Computer: ${computerScore}`);

    console.log(
        humanScore > computerScore ? "Congrats! You won the game." :
        humanScore < computerScore ? "You lost the game. Better luck next time!" :
        "It's an overall tie!"
    );
}

playGame();