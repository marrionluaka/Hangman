import { head } from 'ramda'
import React, { useState } from 'react'

import Guesses from './ui/Guesses'
import LetterPad from './ui/LetterPad'
import CorrectAnswer from './ui/CorrectAnswer'
import IncorrectGuesses from './ui/IncorrectGuesses'
import useFetch from './hooks/useFetch'
import { hidePhrase, getIncorrectGuesses, MAX_ALLOWED_GUESSES } from './core'

const RANDOM_WORD_ENDPOINT = 'https://random-word-api.herokuapp.com/word'

function App() {
  const [guesses, setGuesses] = useState<Set<string>>(new Set())
  const [numOfAttemptedGuesses, setNumOfAttemptedGuesses] = useState(0)
  const { request: req, fetchData } = useFetch<string[]>(RANDOM_WORD_ENDPOINT)

  if (req.state === 'pending') return <div>Loading...</div>

  if (req.state === 'error') return <div>Error!</div>

  const phrase = head(req.data) as string
  const hiddenGuesses = hidePhrase(phrase, guesses)
  const incorrectGuesses = getIncorrectGuesses(hiddenGuesses, guesses)
  const hasRunOutOfGuesses = numOfAttemptedGuesses >= MAX_ALLOWED_GUESSES

  const handleGuesses = (letter: string): void => {
    setGuesses(letters => new Set(letters).add(letter.toLowerCase()))
    setNumOfAttemptedGuesses(numOfAttemptedGuesses + 1)
  }

  const handleRestart = async () => {
    setGuesses(new Set())
    setNumOfAttemptedGuesses(0)
    await fetchData()
  }

  return (
    <main>
      {/* <Hangman guesses={hiddenGuesses} /> */}
      { hasRunOutOfGuesses && <CorrectAnswer correctAnswer={phrase} /> }
      <Guesses guesses={hiddenGuesses} />
      <LetterPad onClick={handleGuesses} guesses={Array.from(guesses)} />
      <IncorrectGuesses incorrectGuesses={incorrectGuesses} />
      <button data-testid="restart" onClick={handleRestart}>Restart</button>
    </main>
  )
}

export default App
