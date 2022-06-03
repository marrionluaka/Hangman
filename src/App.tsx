import { head, once } from 'ramda'
import React, { useState } from 'react'

import Guesses from './ui/Guesses'
import LetterPad from './ui/LetterPad'
import CorrectAnswer from './ui/CorrectAnswer'
import WinningMessage from './ui/WinningMessage'
import IncorrectGuesses from './ui/IncorrectGuesses'
import useFetch from './hooks/useFetch'
import { hidePhrase, getIncorrectGuesses, MAX_ALLOWED_GUESSES } from './core'

const concealAnswer = once(console.dir)
const RANDOM_WORD_ENDPOINT = 'https://random-word-api.herokuapp.com/word'

function App() {
  const [guesses, setGuesses] = useState<Set<string>>(new Set())
  const { request: req, fetchData } = useFetch<string[]>(RANDOM_WORD_ENDPOINT)

  if (req.state === 'pending') return <div>Loading...</div>

  if (req.state === 'error') return <div>Error!</div>

  const word = head(req.data) as string
  const hiddenGuesses = hidePhrase(word, guesses)
  const incorrectGuesses = getIncorrectGuesses(hiddenGuesses, guesses)
  const hasGuessedTheWord = word === hiddenGuesses.join('')
  const hasRunOutOfGuesses = incorrectGuesses.length >= MAX_ALLOWED_GUESSES
  const disableLetterPad = hasRunOutOfGuesses || hasGuessedTheWord

  const handleGuesses = (letter: string): void => {
    setGuesses(letters => new Set(letters).add(letter.toLowerCase()))
  }

  const handleRestart = async () => {
    setGuesses(new Set())
    await fetchData()
  }

  concealAnswer({ answer: word })

  return (
    <main>
      {/* <Hangman guesses={hiddenGuesses} /> */}
      { hasRunOutOfGuesses && <CorrectAnswer correctAnswer={word} /> }
      { hasGuessedTheWord ? <WinningMessage>You've won!</WinningMessage> : <Guesses guesses={hiddenGuesses} /> }
      <LetterPad onClick={handleGuesses} guesses={Array.from(guesses)} disable={disableLetterPad} />
      <IncorrectGuesses incorrectGuesses={incorrectGuesses} />
      <button data-testid="restart" onClick={handleRestart}>Restart</button>
    </main>
  )
}

export default App
