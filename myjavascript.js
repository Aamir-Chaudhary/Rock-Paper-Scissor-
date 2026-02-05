let compScore = 0;
let playerScore = 0;
let playerChoice = "";

let boxes = document.querySelectorAll(".box");
let msg = document.getElementById("msg");
let player = document.getElementById("player");
let computer = document.getElementById("computer");
let heading = document.getElementById("heading");
boxes.forEach(box => {
    box.addEventListener("click", () => {
        playerChoice = box.id;
        playGame();
    });
});

function playGame() {
    const choices = ["rock", "paper", "scissor"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    msg.textContent=""
    console.log("Player:", playerChoice, " | Computer:", computerChoice);


    if (playerChoice === computerChoice) {
        console.log("DRAW");
        msg.textContent="DRAW";
        player.textContent=playerScore;
        computer.textContent=compScore;

    } 
    else if (
        (playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")
    ) {
        console.log("You Won!");
        msg.textContent="You won";
        playerScore++;
        player.textContent=playerScore;
        
    } 
    else {
        console.log("Computer Won!");
        msg.textContent="Computer won";
        compScore++;
        computer.textContent=compScore;
    }

    console.log(`Score => Player: ${playerScore} - Computer: ${compScore}`);

    checkWinner();
}

function checkWinner() {
  let heading = document.getElementById("heading");

  if (playerScore === 5) {
    msg.textContent = "Congratulations! You Won!";
    msg.style.backgroundColor = "green";
    heading.style.color = "white";

    setTimeout(resetGame, 2000); // 2 sec delay
  } 
  else if (compScore === 5) {
    msg.textContent = "😢 Computer Won!";
    msg.style.backgroundColor = "red";
    heading.style.color = "white";

    setTimeout(resetGame, 2000);
  }
}


function resetGame() {
    playerScore = 0;
    compScore = 0;
}
