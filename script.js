//Moves for computer
//Picks a random number 1-3
//Returns R, P, or S

function computerPlay() {
  let rand = Math.floor(Math.random() * 3);
  switch(rand) {
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    default:
      return 'scissors';
  }
}

//Determine winner of round
//Standardize playerSelection
//Switch statement - all possible combinations
//return text

function playRound(playerSelection, computerSelection) {
  stdPlayerSelection = playerSelection.toLowerCase();
  switch(true) {
    case (stdPlayerSelection === 'rock' && computerSelection === 'rock'):
      return 'You both picked rock! Try again.';
    case (stdPlayerSelection === 'paper' && computerSelection === 'paper'):
      return 'You both picked paper! Try again.';
    case (stdPlayerSelection === 'scissors' && computerSelection === 'scissors'):
      return 'You both picked scissors! Try again.';
    case (stdPlayerSelection === 'rock' && computerSelection === 'paper'):
      return 'You lose this round! Paper beats rock';
    case (stdPlayerSelection === 'rock' && computerSelection === 'scissors'):
      return 'You win this round! Rock beats scissors';
    case (stdPlayerSelection === 'paper' && computerSelection === 'rock'):
      return 'You win this round! Paper beats rock';
    case (stdPlayerSelection === 'paper' && computerSelection === 'scissors'):
      return 'You lose this round! Scissors beat paper';
    case (stdPlayerSelection === 'scissors' && computerSelection === 'rock'):
      return 'You lose this round! Rock beats scissors';
    case (stdPlayerSelection === 'scissors' && computerSelection === 'paper'):
      return 'You win this round! Scissors beat paper';
  }
}

//Call playRound 5 times
//Get player move
//Calls playRound() to check result
//Logs match result
//Increment value of player and computer scores
//After 5 rounds, checks overall winner
//Logs overall winner

function game() {
  let playerScore = 0;
  let compScore = 0;

  let matchResult = '';
  let playerSelection = '';

  for (let i = 0; i < 5; i++) {
    playerSelection = prompt("3...2...1...Shoot!");

    matchResult = playRound(playerSelection, computerPlay());
    console.log(matchResult);

    if (matchResult.includes("win")) {
      playerScore ++;
    } else if (matchResult.includes("lose")) {
      compScore ++;
    }
  }
  if (playerScore > compScore) {
    console.log("You won!");
  } else if (compScore > playerScore) {
    console.log("You lost! Better luck next time.");
  } else {
    console.log("It's a tie! Rematch?");
  }
}


game();