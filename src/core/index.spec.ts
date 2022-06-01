import { split } from 'ramda'
import { hidePhrase, getIncorrectGuesses } from '.'

const phrase = 'hello my name is'

it('returns the hidden representation of a given phrase', () => {
  const expected = ['_','_','_','_','_',' ','_','_',' ','_','_','_','_',' ','_','_']
  const actual = hidePhrase(phrase)

  expect(actual).toEqual(expected)
})

it('returns a list of correct guesses', () => {
  const guesses = new Set<string>(['h', 'b', 'l', 'i'])

  const expected = ['h','_','l','l','_',' ','_','_',' ','_','_','_','_',' ','i','_']
  const actual = hidePhrase(phrase, guesses)

  expect(actual).toEqual(expected)
})

it('returns a list of incorrect guesses', () => {
  const guesses = new Set<string>(['h', 'b', 'x', 'i'])

  const expected = ['b', 'x']
  const actual = getIncorrectGuesses(split('', phrase), guesses)

  expect(actual).toEqual(expected)
})
