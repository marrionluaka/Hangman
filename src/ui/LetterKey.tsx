import React from 'react'

type Props = {
  letter: string
  onClick(letter: string): void
  shouldDisable: (letter: string) => boolean
}

const LetterKey = ({ shouldDisable, letter, onClick }: Props): JSX.Element => (
  <button data-testid={letter} disabled={shouldDisable?.(letter)} onClick={onClick.bind(null, letter)}>
    {letter}
  </button>
)

export default LetterKey
