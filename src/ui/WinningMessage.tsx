import React from 'react'
import { LargeParagraph } from './styles'

const WinningMessage = ({ children }: { children: React.ReactNode }): JSX.Element => (
  <LargeParagraph>{children}</LargeParagraph>
)

export default WinningMessage
