let computerChoice = "";
let playerChoice = "Scissors";

function getComputerChoice() {
    alert("Running getComputerChoice");
    let computerNum = Math.floor(Math.random() * 3);
    if (computerNum === 0) {
        computerChoice = "Rocks";
    } else if (computerNum === 1) {
        computerChoice = "Paper";   
    } else {
        computerChoice = "Scissors";

    };
    alert(computerChoice); 
}

function battleRoyale() {
    alert("Runninng battleRoyale! ");
    if (computerChoice = "Rocks") {
        if (playerChoice = "Rocks") {
            alert("TIE! Robot: Rocks, You: Rocks");
        } else if (playerChoice = "Paper") {
            alert("YOU WIN! Robot: Rocks, You: Paper")
        } else if (playerChoice = "Scissors") {
            alert("ROBOT WINS! Robot: Rocks, You: Scissors")
        }
    } else if (computerChoice = "Paper") {
        if (playerChoice = "Rocks") {
            alert("ROBOT WINS! Robot: Paper, You: Rocks");
        } else if (playerChoice = "Paper") {
            alert("TIE! Robot: Paper, You: Paper")
        } else if (playerChoice = "Scissors") {
            alert("YOU WIN! Robot: Paper, You: Scissors")
        }
    } else if (computerChoice = "Scissors") {
        if (playerChoice === "Rocks") {
            alert("YOU WIN! Robot: Scissors, You: Rocks");
        } else if (playerChoice = "Paper") {
            alert("ROBOT WINS! Robot: Scissors, You: Paper")
        } else if (playerChoice = "Scissors") {
            alert("TIE! Robot: Scissors, You: Scissors")
        }
    }
}



function commenceBattle() {
    getComputerChoice();
    battleRoyale(playerChoice);       
}


