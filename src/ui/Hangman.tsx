import React from 'react'
import styled from 'styled-components'

import { FlexWrapper } from './styles'

const Content = styled.section`
  width: 300px;
  height: 300px;
  display: block;
  position: relative;
`

const Shared = styled.div`
  border: 3px solid black;
  display: block;
  position: absolute;
`

const Head = styled(Shared)`
  width: 50px;
  height: 60px;
  border: 5px solid black;
  border-radius: 50%;
  top: 21px;
  left: 133px;
  z-index: 1;
  animation: rock 1s alternate infinite ease-in-out;
  transform-origin: center bottom;
`

const Torso = styled(Shared)`
  width: 6px;
  height: 100px;
  top: 80px;
  left: 156px;
`

const LeftArm = styled(Shared)`
  width: 100px;
  height: 6px;
  top: 86px;
  left: 57px;
  transform: rotate(-70deg);
  transform-origin: 100%;
`

const RightArm = styled(Shared)`
  width: 100px;
  height: 6px;
  top: 86px;
  left: 161px;
  transform: rotate(70deg);
  transform-origin: 0%;
`

const LeftLeg = styled(Shared)`
  width: 6px;
  height: 100px;
  top: 175px;
  left: 155px;
  transform: rotate(5deg);
  transform-origin: top;
`

const RightLeg = styled(Shared)`
  width: 6px;
  height: 100px;
  top: 175px;
  left: 157px;
  transform: rotate(-5deg);
  transform-origin: top;
`

const Cord = styled(Shared)`
  right: 47%;
  height: 8%;
`

const Hanger = styled(Shared)`
  top: 0;
  width: 53%;
`

const Pole = styled(Shared)`
  height: 100%;
`

const Platform = styled(Shared)`
  bottom: 0;
  width: 100%;
`

const Hangman = ({ incorrectGuesses }: { incorrectGuesses: number }): JSX.Element => {
  return (
    <FlexWrapper>
      <Content>
        { incorrectGuesses > 0 && <Platform data-testid="platform" /> }
        { incorrectGuesses > 1 && <Pole data-testid="pole" /> }
        { incorrectGuesses > 2 && <Hanger data-testid="hanger" /> }
        { incorrectGuesses > 3 && <Cord data-testid="cord" /> }
        { incorrectGuesses > 4 && <Head data-testid="head" /> }
        { incorrectGuesses > 5 && <Torso data-testid="torso" /> }
        { incorrectGuesses > 6 && <LeftArm data-testid="left-arm" /> }
        { incorrectGuesses > 7 && <RightArm data-testid="right-arm" /> }
        { incorrectGuesses > 8 && <LeftLeg data-testid="left-leg" /> }
        { incorrectGuesses > 9 && <RightLeg data-testid="right-leg" /> }
      </Content>
    </FlexWrapper>
  )
}

export default Hangman
