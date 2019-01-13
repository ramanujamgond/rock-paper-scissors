/* js script for index.html */

// function to choose random array value
function computerPlay() {
	let randomValue;
	let gameValue = ['rock', 'paper', 'scissor'];
	for (let i = 1; i <= gameValue.length; i++) {
		
		// generate random array value 
		randomValue = Math.floor(Math.random() * i);
	}
	// return array value
	return gameValue[randomValue];
}

// rock function to match value with scissor and paper
function rock() {
	switch (computerSelection) {
		case 'scissor':
		console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
		playerScore++;
		break;

		case 'paper':
		console.log(`You loose ${computerSelection} beats ${playerSelection}`);
		computerScore++;
		break;

		case 'rock':
		console.log('Game tied both got rock');
		break;
	}
}

// paper function to match value with rock and scissor
function paper() {
	switch (computerSelection) {
		case 'rock':
		console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
		playerScore++;
		break;

		case 'scissor':
		console.log(`You loose ${computerSelection} beats ${playerSelection}`);
		computerScore++;
		break;

		case 'paper':
		console.log('Game tied both got paper');
		break;
	}
}

// scissor function to match value with paper and scissor
function scissor() {
	switch (computerSelection) {
		case 'paper':
		console.log(`You Won! ${playerSelection} beats ${computerSelection}`);
		playerScore++;
		break;

		case 'rock':
		console.log(`You loose ${computerSelection} beats ${playerSelection}`);
		computerScore++;
		break;

		case 'scissor':
		console.log('Game tied both got scissor');
		break;
	}
}

// Set input values for user and set values for computer
function setValue() {
	playerSelection = prompt(`Round:${round} - Type rock, paper or scissor`);
	playerSelection = playerSelection.toLowerCase();
	computerSelection = computerPlay(); //call to computerPlay()
}

// function to play the each round for the game
function playRound(playerSelection, computerSelection) {
	if (playerSelection === 'rock') {
		
		// function call to rock()
		rock();
	} else if (playerSelection === 'paper') {
		
		// function call to paper()
		paper();
	} else if (playerSelection === 'scissor') {
		
		// function call to scissor()
		scissor();
	} else {

		// Throws an error for invalid input
		console.log(`Invalid input, match not found for ${playerSelection}`);
	}

	// Shows points of player and computer after each round
	console.log(`Your score is ${playerScore} and Computer score is ${computerScore}`);
	console.log('\n');
}

// game 
function game() {

	// run the game for 5 rounds
	while(round < 5) {
		
		// function call to set values for player and computer
		setValue();
		
		// function call for game round
		playRound(playerSelection, computerSelection);
		round++;
	}

	// show some fancy text in red color
	console.log('%c Final Score!', 'color: #f44242');
	console.log('%c *****************************', 'color: #f44242');

	// cecides the winner of game based on their highest points
	if (playerScore > computerScore) {
		console.log(`You Won with a score of ${playerScore}`);
	} else if (playerScore < computerScore) {
		console.log(`Computer Won with a score of ${computerScore}`);
	} else {
		console.log('Match Drawn!');
	}
	return 0;
}

// initial variable setup
let playerSelection, computerSelection;

let playerScore = 0;
let computerScore = 0;
let round = 0;

// call to game function
// game();