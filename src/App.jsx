import React from 'react'
import { useState } from 'react'
import words from './words.json'

//helper functions are best outside of the main App
function getRandomWord() {
  const randomIndex = Math.floor(Math.random() * words.length);
  return words[randomIndex].toLowerCase()
} 

function App() {
  const [puzzle, setPuzzle] = useState("");
  const [guessedLetters, setGuess] = useState([]);


  return (
    <div>App</div>
  )
}

export default App