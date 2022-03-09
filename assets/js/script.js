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
	} else if (userChoice === "lizard") {
		if (comChoice === "rock") {
			return "rock beats lizard <br> You Lose";
		} else if (comChoice === "paper") {
			return "lizard beats paper <br> You Win!";
		} else if (comChoice === "scissors") {
			return "scissors beats lizard <br> You Lose";
		} else {
			return "lizard beats spock <br> You Win!";
		}
	} else if (userChoice === "spock") {
		if (comChoice === "rock") {
			return "spock beats rock <br> You Win!";
		} else if (comChoice === "paper") {
			return "paper beats spock <br> You Lose";
		} else if (comChoice === "scissors") {
			return "spock beats scissors <br> You Win!";
		} else {
			return "lizard beats spock <br> You Lose";
		}
	}
};

$(document).ready(function(){
	$("button").click(function(){
		userChoice = this.id;
		computerChoice = Math.floor(Math.random() * 5);
     switch (computerChoice) { 
       case 0: computerChoice = "rock"; 
         break; 
       case 1: computerChoice = "paper"; 
         break; 
       case 2: computerChoice = "scissors"; 
         break; 
       case 3: computerChoice = "lizard";
         break;
       case 4: computerChoice = "spock"; 
         break; 
     }


		var result = compare(computerChoice).toUpperCase();

		$(".result").html("<h1>Result:</h1><p>User: " + userChoice.toUpperCase() + "<br>" +
											"Computer: " + computerChoice.toUpperCase() + "</p>" + "<p>" + result +  "</p>");
	});
});