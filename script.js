const display = document.querySelector('#display');
const playerScoreDisplay = document.querySelector('#playerScore');
const compScoreDisplay = document.querySelector('#compScore');


let playerScore = 0;
let compScore = 0;

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

function displayScore() {
   if (playerScore === 5) {
    display.textContent += " You won!";
    playerScoreDisplay.textContent = playerScore;
    compScoreDisplay.textContent = compScore;
  } else if (compScore === 5) {
    display.textContent += " You lost!";
    playerScoreDisplay.textContent = playerScore;
    compScoreDisplay.textContent = compScore;
  } else {
    playerScoreDisplay.textContent = playerScore;
    compScoreDisplay.textContent = compScore;
  }
}

//Determine winner of round
//Standardize playerSelection
//Switch statement - all possible combinations
//return text

/*function playRound(e) {

  stdPlayerSelection = e.target.id;
  computerSelection = computerPlay();

  switch(true) {
    case (stdPlayerSelection === 'rock' && computerSelection === 'rock'):
      console.log('You both picked rock! Try again.');
      break;
    case (stdPlayerSelection === 'paper' && computerSelection === 'paper'):
      console.log('You both picked paper! Try again.');
      break;
    case (stdPlayerSelection === 'scissors' && computerSelection === 'scissors'):
      console.log('You both picked scissors! Try again.');
      break;
    case (stdPlayerSelection === 'rock' && computerSelection === 'paper'):
      console.log('You lose this round! Paper beats rock');
      break;
    case (stdPlayerSelection === 'rock' && computerSelection === 'scissors'):
      console.log('You win this round! Rock beats scissors');
      break;
    case (stdPlayerSelection === 'paper' && computerSelection === 'rock'):
      console.log('You win this round! Paper beats rock');
      break;
    case (stdPlayerSelection === 'paper' && computerSelection === 'scissors'):
      console.log('You lose this round! Scissors beat paper');
      break;
    case (stdPlayerSelection === 'scissors' && computerSelection === 'rock'):
      console.log('You lose this round! Rock beats scissors');
      break;
    case (stdPlayerSelection === 'scissors' && computerSelection === 'paper'):
      console.log('You win this round! Scissors beat paper');
      break;
  }
}*/

function playRound(e) {
  stdPlayerSelection = e.target.id;
  computerSelection = computerPlay();

  switch(true) {
    case (stdPlayerSelection === 'rock' && computerSelection === 'rock'):
      display.textContent = 'You both picked rock! Try again.';
      displayScore();
      break;
    case (stdPlayerSelection === 'paper' && computerSelection === 'paper'):
      display.textContent = 'You both picked paper! Try again.';
      displayScore();
      break;
    case (stdPlayerSelection === 'scissors' && computerSelection === 'scissors'):
      display.textContent = 'You both picked scissors! Try again.';
      displayScore();
      break;
    case (stdPlayerSelection === 'rock' && computerSelection === 'paper'):
      display.textContent = 'You lose this round! Paper beats rock';
      compScore ++;
      displayScore();
      break;
    case (stdPlayerSelection === 'rock' && computerSelection === 'scissors'):
      display.textContent = 'You win this round! Rock beats scissors';
      playerScore ++;
      displayScore();
      break;
    case (stdPlayerSelection === 'paper' && computerSelection === 'rock'):
      display.textContent = 'You win this round! Paper beats rock';
      playerScore ++;
      displayScore();
      break;
    case (stdPlayerSelection === 'paper' && computerSelection === 'scissors'):
      display.textContent = 'You lose this round! Scissors beat paper';
      compScore ++;
      displayScore();

      break;
    case (stdPlayerSelection === 'scissors' && computerSelection === 'rock'):
      display.textContent = 'You lose this round! Rock beats scissors';
      compScore ++;
      displayScore();

      break;
    case (stdPlayerSelection === 'scissors' && computerSelection === 'paper'):
      display.textContent = 'You win this round! Scissors beat paper';
      playerScore ++;
      displayScore();

      break;
  }
}


const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', playRound);
});


//Call playRound 5 times
//Get player move
//Calls playRound() to check result
//Logs match result
//Increment value of player and computer scores
//After 5 rounds, checks overall winner
//Logs overall winner

 /*
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
*/