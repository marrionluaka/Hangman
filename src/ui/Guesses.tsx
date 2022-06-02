import React from 'react'

const Guesses = ({ guesses }: { guesses: string[] }): JSX.Element => (
  <ul>
    {
      guesses.map((guess: string, i: number) => (
        <li key={`${guess}-${i}`} data-testid={`guess-${i}`}>{guess}</li>
      ))
    }
  </ul>
)

export default Guesses
