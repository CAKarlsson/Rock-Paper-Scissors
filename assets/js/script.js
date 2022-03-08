var userChoice;
var computerChoice;

function compare(comChoice) {
	if (userChoice === comChoice) {
    return "The computer also chose " + computerChoice + ":" + "<br>" + "Its A Tie!";
	} else if (userChoice === "rock") {
		if (comChoice === "paper") {
      return "paper beats rock <br> You Lose";
		} else if (comChoice === "scissors") {
      return "rock beats scissors <br> You Win!";
		} else if (comChoice === "lizard") {
			return "rock beats lizard <br> You Win!";
		} else {
			return "spock beats rock <br> You Lose";
		}
	} else if (userChoice === "paper") {
		if (comChoice === "rock") {
			return "paper beats rock <br> You Win!";
		} else if (comChoice === "scissors") {
			return "scissors beats paper <br> You Lose";
		} else if (comChoice === "lizard") {
			return "lizard beats paper <br> You Lose";
		} else {
			return "paper beats spock <br> You Win!";
		}
	} else if (userChoice === "scissors") {
		if (comChoice === "rock") {
			return "rock beats scissors <br> You Lose";
		} else if (comChoice === "paper") {
			return "scissors beats paper <br> You Win!";
		} else if (comChoice === "lizard") {
			return "scissors beats lizard <br> You Win!";
		} else {
			return "spock beats scissors <br> You Lose";
		}
	}