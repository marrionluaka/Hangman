import { head } from 'ramda'
import styled from 'styled-components'
import React, { useState } from 'react'

import Guesses from './ui/Guesses'
import Hangman from './ui/Hangman'
import LetterPad from './ui/LetterPad'
import CorrectAnswer from './ui/CorrectAnswer'
import WinningMessage from './ui/WinningMessage'
import useFetch from './hooks/useFetch'
import { hidePhrase, getIncorrectGuesses, MAX_ALLOWED_GUESSES } from './core'

const RANDOM_WORD_ENDPOINT = 'https://random-word-api.herokuapp.com/word'

const MainWrapper = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

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

  return (
    <MainWrapper>
      <section>
        <Hangman incorrectGuesses={incorrectGuesses.length} />
        { hasRunOutOfGuesses && <CorrectAnswer correctAnswer={word} /> }
        { hasGuessedTheWord ? <WinningMessage>You've won!</WinningMessage> : <Guesses guesses={hiddenGuesses} /> }
        <LetterPad onClick={handleGuesses} guesses={Array.from(guesses)} disable={disableLetterPad} />
        <button data-testid="restart" onClick={handleRestart}>Restart</button>
      </section>
    </MainWrapper>
  )
}

export default App
