
const computerPlay= computerInput => {
    // Computer choice 
    computerInput = Math.floor(Math.random() * 3);
    switch (computerInput) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'scissors';
            break;
        case 2:
            return 'paper';
            break;
    default:
        return 'invalid computer';
        break;
    
    }};

// user choice
let playerSelection= userInput => {
    playerChoice=playerSelection;
    userInput = userInput.toLowerCase();
    
    if (userInput ==='rock' || userInput === 'paper'|| userInput === 'scissors'){
      return userInput;
      
    
    }
  
  
  else{
    
    console.log('Invalid Choice');
  
  }
}
// a round of rock, paper, and scissors

function playRound(playerSelection,computerPlay){
  // if both choose the same
    if (playerSelection === computerPlay){
       return 'tie game!';
   }
    
        
   // if user chooses paper
    if (playerSelection ==='paper') {
        if (computerPlay ==='scissors'){
            return 'You Lose! Scissors beats Paper';
        }
        else {
            return 'You Win! Rock beats Paper';
    }
}
    // if user chooses scissors
        if (playerSelection ==='scissors') {
            if (computerPlay ==='paper'){
            return 'You Win! Scissors beats Paper';
        }
        else {
            return 'You Lose! Rock beats Scissors';
        }
        }
    // if user chooses rock
        if (playerSelection ==='rock')
        {
        if (computerPlay ==='scissors'){
            return 'You Win! Rock beats Scissors';
        }
        else {
            return 'You Lose! Paper beats rock';
        }
}
}

const computerSelection = computerPlay();


function game(){
    playerSelection = prompt('Please type your choice');

    console.log(playRound(playerSelection,computerPlay));
    playerSelection = prompt('Please type your choice');

    console.log(playRound(playerSelection,computerPlay));
    playerSelection = prompt('Please type your choice');

    console.log(playRound(playerSelection,computerPlay));
    playerSelection = prompt('Please type your choice');

    console.log(playRound(playerSelection,computerPlay));
    playerSelection = prompt('Please type your choice');

    console.log(playRound(playerSelection,computerPlay));
    playerSelection = prompt('Please type your choice');

  
}

game();