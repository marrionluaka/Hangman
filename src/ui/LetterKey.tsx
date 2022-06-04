import React from 'react'
import styled from 'styled-components'
import { DefaultBtn } from './styles'

type Props = {
  letter: string
  onClick(letter: string): void
  shouldDisable: (letter: string) => boolean
}

const Btn = styled(DefaultBtn)`
  margin: 0.25em;
  width: 42px;
  height: 42px;

  :disabled {
    background: #dddddd;
    border: #dddddd;
    color: #fff;
  }
`

const LetterKey = ({ shouldDisable, letter, onClick }: Props): JSX.Element => (
  <Btn data-testid={letter} disabled={shouldDisable?.(letter)} onClick={onClick.bind(null, letter)}>
    {letter}
  </Btn>
)

export default LetterKey
