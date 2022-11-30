import styled from 'styled-components'
import GlobalStyle from './styles/GlobalStyles'
import Logo from './Components/Logo'
import Questions from './Components/Questions'
import Footer from './Components/Footer'

function App() {
  return (
    <ScreenContainer>
      <GlobalStyle />
      <Logo />
      <Questions />
      <Footer />
    </ScreenContainer>
  )
}

export default App

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
