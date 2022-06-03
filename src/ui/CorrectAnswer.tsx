import React from 'react'

const CorrectAnswer = ({ correctAnswer }: { correctAnswer: string }): JSX.Element => (
  <p>The correct word was: {correctAnswer}</p>
)

export default CorrectAnswer
