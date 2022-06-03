import React from 'react'
import { curry } from 'ramda'

import LetterKey from './LetterKey'

type Props = {
  disable: boolean
  guesses: string[]
  onClick(letter: string): void
}

const alphabet = Array
  .from(Array(26))
  .map((_, i) => i + 65)
  .map((x) => String.fromCharCode(x).toLowerCase())


const shouldDisable = curry((guesses: string[], letter: string): boolean => guesses.includes(letter))

const LetterPad = ({ guesses, disable, onClick }: Props): JSX.Element => {
  const disabledLetterKeys = alphabet.map((letter: string) => (
    <LetterKey shouldDisable={() => true} key={letter} letter={letter} onClick={onClick} />
  ))

  const letterKeys = alphabet.map((letter: string) => (
    <LetterKey shouldDisable={shouldDisable(guesses)} key={letter} letter={letter} onClick={onClick} />
  ))

  return (
    <ul>
      { disable ? disabledLetterKeys : letterKeys }
    </ul>
  )
}

export default LetterPad
