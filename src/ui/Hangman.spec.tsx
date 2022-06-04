import { render, RenderResult } from '@testing-library/react'
import Hangman from './Hangman'

describe('Hangman', () => {
  let sut: RenderResult

  it.each`
    selector        | initialGuess | nextGuess
    ${'platform'}   | ${0}         | ${1}
    ${'pole'}       | ${1}         | ${2}
    ${'hanger'}     | ${2}         | ${3}
    ${'cord'}       | ${3}         | ${4}
    ${'head'}       | ${4}         | ${5}
    ${'torso'}      | ${4}         | ${6}
    ${'left-arm'}   | ${6}         | ${7}
    ${'right-arm'}  | ${7}         | ${8}
    ${'left-leg'}   | ${8}         | ${9}
    ${'right-leg'}  | ${9}         | ${10}
  `('renders the $selector', ({ selector, initialGuess, nextGuess }) => {
    sut = render(<Hangman incorrectGuesses={initialGuess} />)
    expect(sut.queryByTestId(selector)).toBeFalsy()

    sut = render(<Hangman incorrectGuesses={nextGuess} />)
    expect(sut.queryByTestId(selector)).toBeTruthy()
  })
})
