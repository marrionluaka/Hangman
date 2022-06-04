import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  width: 300px;
  height: 300px;
  display: block;
  position: relative;
`

const Head = styled.div`
  width: 50px;
  height: 60px;
  border: 5px solid black;
  border-radius: 50%;
  display: block;
  position: absolute;
  top: 21px;
  left: 133px;
  z-index: 1;
  animation: rock 1s alternate infinite ease-in-out;
  transform-origin: center bottom;
`

const Torso = styled.div`
  width: 6px;
  height: 100px;
  border: 3px solid black;
  display: block;
  position: absolute;
  top: 80px;
  left: 156px;
`

const LeftArm = styled.div`
  width: 100px;
  height: 6px;
  border: 3px solid black;
  display: block;
  position: absolute;
  top: 86px;
  left: 57px;
  transform: rotate(-70deg);
  transform-origin: 100%;
`

const RightArm = styled.div`
  width: 100px;
  height: 6px;
  border: 3px solid black;
  display: block;
  position: absolute;
  top: 86px;
  left: 161px;
  transform: rotate(70deg);
  transform-origin: 0%;
`

const LeftLeg = styled.div`
  width: 6px;
  height: 100px;
  border: 3px solid black;
  display: block;
  position: absolute;
  top: 175px;
  left: 155px;
  transform: rotate(5deg);
  transform-origin: top;
`

const RightLeg = styled.div`
  width: 6px;
  height: 100px;
  border: 3px solid black;
  display: block;
  position: absolute;
  top: 175px;
  left: 157px;
  transform: rotate(-5deg);
  transform-origin: top;
`

const Cord = styled.div`
  right: 47%;
  height: 8%;
  border: 3px solid black;
  display: block;
  position: absolute;
`

const Hanger = styled.div`
  top: 0;
  width: 53%;
  border: 3px solid black;
  display: block;
  position: absolute;
`

const Pole = styled.div`
  height: 100%;
  border: 3px solid black;
  display: block;
  position: absolute;
`

const Platform = styled.div`
  bottom: 0;
  width: 100%;
  border: 3px solid black;
  display: block;
  position: absolute;
`

const Hangman = ({ incorrectGuesses }: { incorrectGuesses: number }): JSX.Element => {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

export default Hangman
