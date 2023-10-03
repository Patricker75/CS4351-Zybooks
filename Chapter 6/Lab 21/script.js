// Your solution goes here 
function playGuessingGame(numToGuess, totalGuesses = 10) {
  let guess;
  // i = num guesses
  for (let i = 0; i < totalGuesses; i++) {
    let input = '';
    if (i === 0) {
      input = prompt("Enter a number between 1 and 100.");
      while (isNaN(input)) {
        input = prompt('Please enter a number.');
      }
    }
    else {
      if (guess < numToGuess) {
        input = prompt(guess + " is too small. Guess a larger number.")
        while (isNaN(input)) {
          input = prompt('Please enter a number.');
        }
      }
      else if (guess > numToGuess) {
        input = prompt(guess + " is too large. Guess a smaller number.");
        while (isNaN(input)) {
          input = prompt('Please enter a number.');
        }
      }
    }

    guess = parseInt(input)

    if (guess === numToGuess) {
      return i + 1;
    }
  }

  return 0;
}