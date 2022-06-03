import React from 'react'
import { curry } from 'ramda'

import LetterKey from './LetterKey'
import { MAX_ALLOWED_GUESSES } from '../core'

type Props = {
  guesses: string[]
  onClick(letter: string): void
}

const alphabet = Array
  .from(Array(26))
  .map((_, i) => i + 65)
  .map((x) => String.fromCharCode(x).toLowerCase())


const shouldDisable = curry((guesses: string[], letter: string): boolean => guesses.includes(letter))

const LetterPad = ({ guesses, onClick }: Props): JSX.Element => {
  const hasRunOutOfGuesses = guesses.length >= MAX_ALLOWED_GUESSES

  const disabledLetterKeys = alphabet.map((letter: string) => (
    <LetterKey shouldDisable={() => true} key={letter} letter={letter} onClick={onClick} />
  ))

  const letterKeys = alphabet.map((letter: string) => (
    <LetterKey shouldDisable={shouldDisable(guesses)} key={letter} letter={letter} onClick={onClick} />
  ))

  return (
    <ul>
      { hasRunOutOfGuesses ? disabledLetterKeys : letterKeys }
    </ul>
  )
}

export default LetterPad
