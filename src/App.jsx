import React from 'react'
import { useState } from 'react'
import words from './words.json'

//helper functions are best outside of the main App
function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toLowerCase()
} 

function App() {
  const [puzzle] = useState(getRandomWord);
  const [guessedLetters, setGuessedLetters] = useState([]);

  const incorrectLetters = guessedLetters.filter((letter) => !puzzle.includes(letter),)

  // turn puzzle into array then use .every to confirm they're all there
  const puzzleIsSolved = puzzle.split('').every((letter) => guessedLetters.includes(letter))

  const gameIsOver = incorrectLetters.length > 6;

  function handleGuess(letter) {
    if (guessedLetters.includes(letter)) {
      alert(`You already guessed ${letter}.`)
      return
    }
  }

  const updatedGuesses = [...guessedLetters, letter]
  setGuessedLetters(guessedLetters)

  const updatedIncorrectLetters = updatedGuesses.filter(
    (guess) => !puzzle.includes(guess),
  )

  if (updatedIncorrectLetters.length > 6) {
     alert(`Game over! The word was "${puzzle}".`)
  }


  return (
    <main className="game">
      <h1>Hangman</h1>

    </main>
  )
}

export default App