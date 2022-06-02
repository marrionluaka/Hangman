import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import Guesses from './Guesses'

describe('Guesses', () => {
  let sut: RenderResult

  it('renders a list of guesses', () => {
    const guesses = ['_','_',' ','t','_','e','_','e']

    sut = render(<Guesses guesses={guesses}/>)

    expect(sut.getByTestId('guess-3').textContent).toBe('t')
    expect(sut.getByTestId('guess-5').textContent).toBe('e')
    expect(sut.getByTestId('guess-7').textContent).toBe('e')
  })
})
