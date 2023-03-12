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

Variables

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

1. Visit [Deployed Application](https://mmoghal.github.io/fast-crime/) for Password Generator

2. Application Image

![alt Image of the application](https://github.com/mmoghal/fast-crime/blob/main/pw.png)