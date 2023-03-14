# Word Guessing Game

## Introduction

This is a simple word guessing game where the user tries to guess a randomly selected word. The user has 10 attempts to guess the correct letters in the word. If the user is successful, they win, otherwise they lose.

The game is built using HTML, CSS, and JavaScript. The user interface is simple and easy to use.

## How to Play

1.  Click on the "Start" button to begin the game.

2.  The game will select a random word and display the number of letters in the word as blank spaces.

3.  The user will need to guess letters one at a time by typing them on their keyboard.

4.  If the user correctly guesses a letter, it will be displayed in the blank spaces.

5.  If the user guesses an incorrect letter, the number of remaining attempts will decrease by one.

6.  The game will end when the user has guessed all the letters in the word or runs out of attempts.

7.  If the user guesses all the letters correctly, they win. Otherwise, they lose.

## Technical Details

The first block of code defines variables that reference specific HTML elements on the page.

The second block of code defines variables to be used in the game such as the possible words to be guessed, the current word, the index of the current word, an array of guessed letters, the number of remaining guesses, and the number of wins and losses.

The startGame() function initializes the game by selecting a random word, resetting the game state, and starting the timer.

The updateWord(), updateGuess(), updateWins(), and updateLosses() functions are responsible for updating the corresponding HTML elements with the current state of the game.

The endGame() function is called when the game is won or lost, clears the timer, updates the win or loss count, and displays an alert message.

The document.addEventListener() function listens for a key press from the user and updates the game state accordingly.

The startButtonEl.addEventListener() function listens for a click on the start button and initializes the game.

## Variables

wordEl: reference to the element that displays the word being guessed

guessEl: reference to the element that displays the guessed letters

winsEl: reference to the element that displays the number of wins

lossesEl: reference to the element that displays the number of losses

timerEl: reference to the element that displays the remaining attempts

startButtonEl: reference to the element that starts the game

words: an array of words that can be guessed

currentWord: the word that is currently being guessed

currentWordIndex: the index of the current word in the words array

guessedLetters: an array of letters that have been guessed

remainingGuesses: the number of remaining attempts

wins: the number of times the user has won

losses: the number of times the user has lost

timerInterval: the interval that updates the remaining attempts

## Functions

startGame(): starts the game by selecting a random word and resetting the game state

updateWord(): updates the displayed word with blank spaces and guessed letters

updateGuess(): updates the displayed guessed letters

updateWins(): updates the displayed number of wins

updateLosses(): updates the displayed number of losses

endGame(didWin): ends the game by clearing the timer interval and displaying a message based on whether the user won or lost

document.addEventListener("keydown", function(event)): captures the user's guess by listening to the keydown event and checking whether the guessed letter is in the word being guessed.

## Installation

No installation is necessary. Simply open the index.html file in a web browser to play the game.

1. Visit [Deployed Application](https://mmoghal.github.io/nebulous-ring/) for Word Guessing Game

2. Application Image

![alt Image of the application](https://github.com/mmoghal/nebulous-ring/blob/main/wgg.png)

## Credits

This application was developed by Muhammad Moghal, with special thanks to the largest open source community in the world, GitHub, for providing a space to showcase our deployed application.

## License

MIT License