import React from 'react'
import styled from 'styled-components'
import { LargeParagraph } from './styles'

const CorrectAnswer = ({ correctAnswer }: { correctAnswer: string }): JSX.Element => (
  <LargeParagraph>The correct word was: {correctAnswer}</LargeParagraph>
)

export default CorrectAnswer
