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

    {/*onSubmit is event listener, enacts handleSubmit when form is processed */}
    return (   
        <form className="guess-form" onSubmit={handleSubmit}>
            {/* use htmlFor instead of for in jsx as prop */}
            <label htmlFor="letter">Guess a letter:</label>
            {/* these attributes determine what to do with the user input and what it will accept */}
            <input
              id="letter"
              value={letter}
              onChange={(event) => setLetter(event.target.value)}
              maxLength="1"
              disabled={disabled}
              autoFocus
            />
            <button type="submit" disabled={disabled}>
                Guess
            </button>
        </form>
    )
}