
var wordEl = document.getElementById("word-display");
var guessEl = document.getElementById("guesses-left");
var winsEl = document.getElementById("win");
var lossesEl = document.getElementById("lose");
var timerEl = document.getElementById("timer");
var startButtonEl = document.getElementById("startButton");

// Define variables
var words = ["javascript", "html", "css", "bootstrap", "hi"];
var currentWord;
var currentWordIndex;
var guessedLetters = [];
var remainingGuesses = 10;
var wins = 0;
var losses = 0;
var timerInterval;

// Function to start the game
function startGame() {
  // Select a random word
  currentWordIndex = Math.floor(Math.random() * words.length);
  currentWord = words[currentWordIndex];
  
  // Reset game state
  guessedLetters = [];
  remainingGuesses = 10;
  updateGuess();
  updateWord();
  updateWins();
  updateLosses();
  
  // Start the timer
  timerInterval = setInterval(function() {
    remainingGuesses--;
    timerEl.textContent = "Time: " + remainingGuesses;
    if (remainingGuesses <= 0) {
      endGame(false);
    }
  }, 1000);
  
  // Hide the start button
  startButtonEl.style.display = "none";
}

// Function to update the displayed word with blanks and guessed letters
function updateWord() {
  var displayedWord = "";
  for (var i = 0; i < currentWord.length; i++) {
    if (guessedLetters.indexOf(currentWord[i]) !== -1) {
      displayedWord += currentWord[i];
    } else {
      displayedWord += "_";
    }
    displayedWord += " ";
  }
  wordEl.textContent = displayedWord;
}

// Function to update the displayed guessed letters
function updateGuess() {
  guessEl.textContent = "Guessed letters: " + guessedLetters.join(", ");
}

// Function to update the displayed win count
function updateWins() {
  winsEl.textContent = "Wins: " + wins;
}

// Function to update the displayed loss count
function updateLosses() {
  lossesEl.textContent = "Losses: " + losses;
}

// Function to end the game
function endGame(didWin) {
  clearInterval(timerInterval);
  if (didWin) {
    wins++;
    alert("You win!");
  } else {
    losses++;
    alert("You lose!");
  }
  updateWins();
  updateLosses();
  startButtonEl.style.display = "block";
}

// Add event listener to capture user's guess
document.addEventListener("keydown", function(event) {
  var letter = event.key.toLowerCase();
  if (currentWord.indexOf(letter) !== -1) {
    if (guessedLetters.indexOf(letter) === -1) {
      guessedLetters.push(letter);
      updateGuess();
      updateWord();
      if (currentWord === wordEl.textContent.replace(/\s/g, "")) {
        endGame(true);
      }
    }
  } else {
    if (guessedLetters.indexOf(letter) === -1) {
      guessedLetters.push(letter);
      updateGuess();
      remainingGuesses--;
      timerEl.textContent = "Time: " + remainingGuesses;
      if (remainingGuesses <= 0) {
        endGame(false);
      }
    }
  }
});

// Add event listener to start the game
startButtonEl.addEventListener("click", startGame);
console.log(startButtonEl)
console.log(startGame)
