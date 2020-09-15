//function to get computerChoice in a game.
function computerPlay(){

  let randomNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  //Get computer choice based of randomNumber value
  switch(randomNumber){
    case 0:
      computerChoice = "Rock";
      break;
    case 1:
      computerChoice = "Paper";
      break;
    case 2:
      computerChoice = "Scissors";
      break;
    }

    return computerChoice
}




//function that plays a game
function playGame(playerSelection, computerSelection){
  let playerChoice = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
  let resultPara = document.querySelector("#result");
  let winner ;
  let computerScore = +document.querySelectorAll(".score-text")[1].textContent
  let playerScore = +document.querySelectorAll(".score-text")[0].textContent



  if(computerScore == 5 || playerScore == 5){
    resultPara.textContent = "Game is already over. Click 'Restart Score' to start another game";
    resultPara.style.color = "black";
    return;
  }


  if (playerChoice == computerSelection){
    resultPara.textContent = `${playerChoice} is equal to ${computerSelection}. It's a Tie!`;
    winner = "tie"
  }

  else {

    if (playerChoice == "Rock"){
        switch(computerSelection){
          case "Paper":
            resultPara.textContent = "Rock loses to Paper. Computer wins!";
            winner = "computer"
            break;
          case "Scissors":
            resultPara.textContent = "Rock beats Scissors. Player wins!";
            winner = "player"
            break;
        }
    }
    else if (playerChoice == "Paper"){
      switch(computerSelection){
        case "Rock":
          resultPara.textContent = "Paper beats Rock. Player wins!";
          winner = "player";
          break;
        case "Scissors":
          resultPara.textContent = "Paper loses to Scissors. Computer wins!";
          winner = "computer";
          break;
      }
    }

    else if (playerChoice == "Scissors"){
      switch(computerSelection){
        case "Rock":
          resultPara.textContent = "Scissors loses to Rock. Computer wins!";
          winner = "computer";
          break;
        case "Paper":
          resultPara.textContent = "Scissors beats Paper. Player wins!";
          winner = "player";
          break;
      }
    }
    else {
      resultPara.textContent = "Wrong input! No change in a score!";

    }
  }
  changeParagraphColor(winner);
  changeScore(winner);
}


function changeParagraphColor(winner) {
  let resultPara = document.querySelector("#result");

  if(winner == "computer") resultPara.style.color = "red";

  else if(winner == "player") resultPara.style.color = "green";

  else {
    resultPara.style.color = "blue";
  }
}


function changeScore(winner) {

  let computerScore = +document.querySelectorAll(".score-text")[1].textContent
  let playerScore = +document.querySelectorAll(".score-text")[0].textContent
  let resultPara = document.querySelector("#result")

  if(winner == "computer"){
    computerScore++;
    document.querySelectorAll(".score-text")[1].textContent = computerScore;
  }

  else if (winner == "player"){
    playerScore++
    document.querySelectorAll(".score-text")[0].textContent = playerScore;
  }

  if(computerScore == 5 || playerScore == 5){

    if(computerScore == 5){
      document.querySelectorAll(".score-text")[1].parentNode.style.backgroundColor = "lightgreen";
      document.querySelectorAll(".score-text")[0].parentNode.style.backgroundColor = "red";
      resultPara.textContent = "You lost a match! Try again"
    }

    else {
      document.querySelectorAll(".score-text")[1].parentNode.style.backgroundColor = "red";
      document.querySelectorAll(".score-text")[0].parentNode.style.backgroundColor = "lightgreen";
      resultPara.textContent = "You won a match! Congratulations!"
    }

  }

}

function restartScore(){
  document.querySelectorAll(".score-text")[1].textContent = 0;
  document.querySelectorAll(".score-text")[0].textContent = 0;
  let resultPara = document.querySelector("#result");
  resultPara.textContent = "New game started. Good luck!"
  resultPara.style.color = "black";
  document.querySelectorAll(".score-text")[1].parentNode.style.backgroundColor = "transparent";
  document.querySelectorAll(".score-text")[0].parentNode.style.backgroundColor = "transparent";
}

//Get every image object
let choices = Array.from(document.querySelectorAll(".choice-img"));
//Add event listener click for that object
choices.forEach(choice => choice.addEventListener("click", e => {
  playGame(e.target.id, computerPlay());
}))

let button = document.querySelector("button");

button.addEventListener("click", restartScore)

// //function that plays 5 games
// function game(){
// let playerScore = 0;
// let computerScore = 0;
// let roundCounter = 1
// for (let i = 0; i < 5; i++){
//   console.log(`Round ${roundCounter}`);
//   roundCounter++;
//   let result = playGame(prompt("What you choose? Rock/Paper/Scissors."), computerPlay());
//
//   if(result == "Player Win"){
//     playerScore++;
//   }
//   else if (result == "Player Lose"){
//     computerScore++;
//   }
//
//   console.log(`Computer Score ${computerScore} : ${playerScore} Player Score`);
// }
// if (playerScore > computerScore){
//   console.log("Player wins the game")
// }
// else if (playerScore < computerScore){
//   console.log("Computer wins the game")
// }
// else{
//   console.log("It's a tie after 5 rounds!")
// }
// }
