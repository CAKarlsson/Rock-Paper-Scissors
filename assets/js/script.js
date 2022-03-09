var userChoice;
var computerChoice;
let playerScore = 0;
let computerScore = 0;
const playerScoreSpan = document.getElementById('player-score');
const computerScoreSpan = document.getElementById('computer-score');
var rulesRef = document.getElementById('rules');

rulesRef.addEventListener('click', toggleImage);

function compare(comChoice) {
	if (userChoice === comChoice) {
		return "The computer also chose " + computerChoice + ":" + "<br>" + "Its A Tie!";
	} else if (userChoice === "rock") {
		if (comChoice === "paper") {
			lose();
			return "paper beats rock <br> You Lose";
		} else if (comChoice === "scissors") {
			win();
			return "rock beats scissors <br> You Win!";
		} else if (comChoice === "lizard") {
			win();
			return "rock beats lizard <br> You Win!";
		} else {
			lose();
			return "spock beats rock <br> You Lose";
		}
	} else if (userChoice === "paper") {
		if (comChoice === "rock") {
			win();
			return "paper beats rock <br> You Win!";
		} else if (comChoice === "scissors") {
			return "scissors beats paper <br> You Lose";
		} else if (comChoice === "lizard") {
			lose();
			return "lizard beats paper <br> You Lose";
		} else {
			win();
			return "paper beats spock <br> You Win!";
		}
	} else if (userChoice === "scissors") {
		if (comChoice === "rock") {
			lose();
			return "rock beats scissors <br> You Lose";
		} else if (comChoice === "paper") {
			win();
			return "scissors beats paper <br> You Win!";
		} else if (comChoice === "lizard") {
			win();
			return "scissors beats lizard <br> You Win!";
		} else {
			lose();
			return "spock beats scissors <br> You Lose";
		}
	} else if (userChoice === "lizard") {
		if (comChoice === "rock") {
			lose();
			return "rock beats lizard <br> You Lose";
		} else if (comChoice === "paper") {
			win();
			return "lizard beats paper <br> You Win!";
		} else if (comChoice === "scissors") {
			lose();
			return "scissors beats lizard <br> You Lose";
		} else {
			win();
			return "lizard beats spock <br> You Win!";
		}
	} else if (userChoice === "spock") {
		if (comChoice === "rock") {
			win();
			return "spock beats rock <br> You Win!";
		} else if (comChoice === "paper") {
			lose();
			return "paper beats spock <br> You Lose";
		} else if (comChoice === "scissors") {
			win();
			return "spock beats scissors <br> You Win!";
		} else {
			lose();
			return "lizard beats spock <br> You Lose";
		}
	}
}

$(document).ready(function () {
	$("button").click(function () {
		userChoice = this.id;
		computerChoice = Math.floor(Math.random() * 5);
		switch (computerChoice) {
			case 0:
				computerChoice = "rock";
				break;
			case 1:
				computerChoice = "paper";
				break;
			case 2:
				computerChoice = "scissors";
				break;
			case 3:
				computerChoice = "lizard";
				break;
			case 4:
				computerChoice = "spock";
				break;
		}


		var result = compare(computerChoice).toUpperCase();

		$(".result").html("<h1>Result:</h1><p>You picked: " + userChoice.toUpperCase() + "<br>" +
			"Computer picked: " + computerChoice.toUpperCase() + "</p>" + "<p>" + result + "</p>");
	});
});

function win() {
	playerScore++;
	playerScoreSpan.innerHTML = playerScore;
	computerScoreSpan.innerHTML = computerScore;

}

function lose() {
	computerScore++;
	computerScoreSpan.innerHTML = computerScore;
	playerScoreSpan.innerHTML = playerScore;

}

function toggleImage() {
	var hiddenImage = document.getElementById('rules-text');
	hiddenImage.classList.toggle('hidden');
}