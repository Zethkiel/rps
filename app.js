function getComputerChoice() {
    /*
    Generate a random number with a maximum value of 3
    Assign it to a variable called computerChoice
    If computerChoice is equal to 0, return "rock"
    Else if computerChoice is equal to 1, return "paper"
    Else if computerChoice is equal to 2, return "scissors"
     */
    const rps = ["rock", "paper", "scissors"];
    return rps[Math.floor(Math.random() * rps.length)]
}

function getHumanChoice(input) {
    input = input.toLowerCase();
    if (input === "rock") {
        return "rock";
    } else if (input === "paper") {
        return "paper";
    } else if (input === "scissors") {
        return "scissors";
    } else {
        return "invalid";
    }
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        /*
        If humanChoice is equal to computerChoice, print "It's a tie!"
        Else if humanChoice is equal to rock:
            If computerChoice is equal to paper, print "You lose! Paper beats Rock."
            Else if computerChoice is equal to scissors, print "You win! Rock beats Scissors."
        Else if humanChoice is equal to paper:
            If computerChoice is equal to rock, print "You win! Paper beats Rock."
            Else if computerChoice is equal to scissors, print "You lose! Scissors beats Paper."
        Else if humanChoice is equal to scissors:
            If computerChoice is equal to rock, print "You lose! Rock beats Scissors."
            Else if computerChoice is equal to paper, print "You win! Scissors beats Paper."
         */
        if (humanChoice === computerChoice) {
            console.log("It's a tie!");
            return "tie";
        } else if (humanChoice === "rock") {
            if (computerChoice === "paper") {
                console.log("You lose! Paper beats Rock.");
                computerScore++;
                return "loss";
            } else if (computerChoice === "scissors") {
                console.log("You win! Rock beats Scissors.");
                humanScore++;
                return "win";
            }
        } else if (humanChoice === "paper") {
            if (computerChoice === "rock") {
                console.log("You win! Paper beats Rock.");
                humanScore++;
                return "win";
            } else if (computerChoice === "scissors") {
                console.log("You lose! Scissors beats Paper.");
                computerScore++;
                return "loss";
            }
        } else if (humanChoice === "scissors") {
            if (computerChoice === "rock") {
                console.log("You lose! Rock beats Scissors.");
                computerScore++;
                return "loss";
            } else if (computerChoice === "paper") {
                console.log("You win! Scissors beats Paper.");
                humanScore++;
                return "win";
            }
        }
    }

    /*
    While i is less than 5:
        Assign humanChoice and computerChoice to their respective variables
        Assign playRound() function to result
        If result is either a win or a loss, print the scores and increment i.
        If humanScore reaches 3, break the loop.
     */
    while (humanScore < 3 && computerScore < 3) {
        const humanSelection = getHumanChoice(prompt("Rock, paper, or scissors?"));
        const computerSelection = getComputerChoice();
        const result = playRound(humanSelection, computerSelection);

        if (result === "win" || result === "loss") {
            console.log(
                `Your score: ${humanScore}\n` +
                `AI score: ${computerScore}`
            )
        } else if (humanSelection === "invalid") {
            console.log("Invalid input! Please try again.");
        }
    }

    if (humanScore === computerScore) {
        console.log("The score is tied!");
    } else if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (humanScore < computerScore) {
        console.log("You lost the game!");
    }
}

playGame();
