import React from 'react'

type Props = {
  letter: string
  onClick(letter: string): void
}

const LetterKey = ({ letter, onClick }: Props): JSX.Element => (
  <button data-testid={letter} onClick={onClick.bind(null, letter)}>
    {letter}
  </button>
)

export default LetterKey
