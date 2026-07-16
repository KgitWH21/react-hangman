import { useState } from 'react'

function GuessForm({ onGuess, disabled }) {
    const [letter, setLetter] = useState('')

    function handleSubmit(event) {
        event.preventDefault()


        const cleanedLetter = letter.trim().toLowerCase()

        if (!/^[a-z]$/.test(cleanedLetter)) {
          alert('Please enter one letter from A to Z.')
          return  
        }
    }
    onGuess(cleanedLetter)
    setLetter('')
}