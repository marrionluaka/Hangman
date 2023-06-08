import React from 'react'
import styled from 'styled-components'

const ListContainer = styled.ul`
  list-style: none;
  display: flex;
  padding: 1rem 0;
  font-size: 1.25rem;
  justify-content: center;
  letter-spacing: .75rem;
`

const Guesses = ({ guesses }: { guesses: string[] }): JSX.Element => (
  <ListContainer>
    {
      guesses.map((guess: string, i: number) => (
        <li key={`${guess}-${i}`} data-testid={`guess-${i}`}>{guess}</li>
      ))
    }
  </ListContainer>
)

export default Guesses
