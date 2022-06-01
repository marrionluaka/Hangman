import { split, map, pipe, curry, filter } from 'ramda'

const getGuess = curry((guesses: Set<string>, character: string) => {
  if (character === ' ') return ' '
  if (guesses.has(character)) return character
  return '_'
})

const hidePhrase = curry((phrase: string, guesses: Set<string> = new Set()): string[] => {
  return pipe<string[], string[], string[]>(
    split(''),
    map(getGuess(guesses))
  )(phrase)
})

const getIncorrectGuesses = curry((phrase: string[], guesses: Set<String>): string[] => {
  return filter((char: string) => !phrase.includes(char), Array.from(guesses) as string[])
})

const alphabet = Array
  .from(Array(26))
  .map((_, i) => i + 65)
  .map((x) => String.fromCharCode(x))

export { alphabet, hidePhrase, getIncorrectGuesses }
