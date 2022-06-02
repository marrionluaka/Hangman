import React from 'react'
import { alphabet } from '../core'
import LetterKey from './LetterKey'

const LetterPad = ({ onClick }: { onClick(letter: string): void }): JSX.Element => {
  return (
    <ul>
      {
        alphabet.map((letter: string) => (
          <LetterKey letter={letter} onClick={onClick} />
        ))
      }
    </ul>
  )
}

export default LetterPad
