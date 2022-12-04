import React from 'react'
import styled from 'styled-components'
import GlobalStyle from '../styles/GlobalStyles'
import Logo from './Logo'
import Questions from './Questions'
import Footer from './Footer'
import cards from './cards'
import { useState } from 'react'

const MainScreen = () => {
  const [counter] = useState(() => cards.length)
  const [counterConcludes, setCounterConcludes] = useState(0)

  return (
    <ScreenContainer>
      <GlobalStyle />
      <Logo />
      <Questions
        setCounterConcludes={setCounterConcludes}
        counterConcludes={counterConcludes}
      />
      <Footer counter={counter} counterConcludes={counterConcludes} />
    </ScreenContainer>
  )
}

export default MainScreen

const ScreenContainer = styled.div`
  position: relative;
  background-color: #fb6b6b;
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 0px;
  padding-bottom: 200px;
`
