import React from 'react'

const IncorrectGuesses = ({ incorrectGuesses }: { incorrectGuesses: string[] }): JSX.Element => (
  <ul>
    {
      incorrectGuesses.map(guess => (
        <li key={guess}>{guess}</li>
      ))
    }
  </ul>
)

export default IncorrectGuesses
