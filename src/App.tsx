import { head } from 'ramda'
import styled from 'styled-components'
import React, { useState } from 'react'

import Guesses from './ui/Guesses'
import Hangman from './ui/Hangman'
import LetterPad from './ui/LetterPad'
import CorrectAnswer from './ui/CorrectAnswer'
import WinningMessage from './ui/WinningMessage'
import { FlexWrapper, ContentCenter, DefaultBtn, LargeParagraph } from './ui/styles'
import useFetch from './hooks/useFetch'
import { hidePhrase, getIncorrectGuesses, MAX_ALLOWED_GUESSES } from './core'

const RANDOM_WORD_ENDPOINT = 'https://random-word-api.herokuapp.com/word'

const MainWrapper = styled(FlexWrapper)`
  height: 100%;
  max-width: 960px;
  margin: 0 auto;
`

const RestartBtn = styled(DefaultBtn)`
  padding: 1em 2.5em;
  margin-top: 1em;
`

const RequestStatus = ({ children }: { children: React.ReactNode }) => (
  <MainWrapper>
    <LargeParagraph>{children}</LargeParagraph>
  </MainWrapper>
)

function App() {
  const [guesses, setGuesses] = useState<Set<string>>(new Set())
  const { request: req, fetchData } = useFetch<string[]>(RANDOM_WORD_ENDPOINT)

  if (req.state === 'pending') return <RequestStatus>Loading...</RequestStatus>

  if (req.state === 'error') return <RequestStatus>Error!</RequestStatus>

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
      <ContentCenter>
        <Hangman incorrectGuesses={incorrectGuesses.length} />
        { hasRunOutOfGuesses && <CorrectAnswer correctAnswer={word} /> }
        { hasGuessedTheWord && <WinningMessage>You've won!</WinningMessage> }
        <Guesses guesses={hiddenGuesses} />
        <LetterPad onClick={handleGuesses} guesses={Array.from(guesses)} disable={disableLetterPad} />
        <RestartBtn data-testid="restart" onClick={handleRestart}>Restart</RestartBtn>
      </ContentCenter>
    </MainWrapper>
  )
}

export default App
