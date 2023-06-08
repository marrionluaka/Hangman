import React from 'react'
import styled from 'styled-components'

const ListContainer = styled.ul<{ guesses: string[] }>`
  list-style: none;
  display: flex;
  padding: 1rem 0;
  justify-content: center;
  font-size: ${({ guesses }) => !guesses.includes('_') ? '2rem' : '1.25rem'};
  letter-spacing: ${({ guesses }) => !guesses.includes('_') ? 'initial' : '.75rem'};
`

const Guesses = ({ guesses }: { guesses: string[] }): JSX.Element => (
  <ListContainer guesses={guesses}>
    {
      guesses.map((guess: string, i: number) => (
        <li key={`${guess}-${i}`} data-testid={`guess-${i}`}>{guess}</li>
      ))
    }
  </ListContainer>
)

export default Guesses
