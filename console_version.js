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
  if (playerChoice == computerSelection){
    console.log(`${playerChoice} is equal to ${computerSelection}. It's a Tie!`);
    return "Tie";
  }

  else {

    if (playerChoice == "Rock"){
        switch(computerSelection){
          case "Paper":
            console.log("Rock loses to Paper.");
            return "Player Lose";
          case "Scissors":
            console.log("Rock beats Scissors. Player wins!");
            return "Player Win";
        }
    }
    else if (playerChoice == "Paper"){
      switch(computerSelection){
        case "Rock":
          console.log("Paper beats Rock. Player wins!");
          return "Player Win";
        case "Scissors":
          console.log("Paper loses to Scissors. Computer wins!");
          return "Player Lose";
      }
    }

    else if (playerChoice == "Scissors"){
      switch(computerSelection){
        case "Rock":
          console.log("Scissors loses to Rock. Computer wins!");
          return "Player Lose";
        case "Paper":
          console.log("Scissors beats Paper. Player wins!");
          return "Player Win";
      }
    }
    else {
      console.log("Wrong input! No change in a score!");

    }
}
}
//function that plays 5 games
function game(){
let playerScore = 0;
let computerScore = 0;
let roundCounter = 1
for (let i = 0; i < 5; i++){
  console.log(`Round ${roundCounter}`);
  roundCounter++;
  let result = playGame(prompt("What you choose? Rock/Paper/Scissors."), computerPlay());

  if(result == "Player Win"){
    playerScore++;
  }
  else if (result == "Player Lose"){
    computerScore++;
  }

  console.log(`Computer Score ${computerScore} : ${playerScore} Player Score`);
}
if (playerScore > computerScore){
  console.log("Player wins the game")
}
else if (playerScore < computerScore){
  console.log("Computer wins the game")
}
else{
  console.log("It's a tie after 5 rounds!")
}
}
</script>
