import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import cards from './cards'
import ClosedQuestions from './ClosedQuestions'
import OpenQuestions from './OpenQuestions'
import initialArray from './initialArray'

const Questions = props => {
  const { setCounterConcludes, counterConcludes } = props
  const [clickedItens, setClickedItens] = useState([])
  const [turnCardController, setTurnCardController] = useState([])
  const [cardArray, setCardArray] = useState(initialArray)

  return (
    <ContainerPergunta>
      <OpenQuestions
        clickedItens={clickedItens}
        setClickedItens={setClickedItens}
        turnCardController={turnCardController}
        setTurnCardController={setTurnCardController}
        setCardArray={setCardArray}
        cardArray={cardArray}
        setCounterConcludes={setCounterConcludes}
        counterConcludes={counterConcludes}
      />
      <ClosedQuestions
        clickedItens={clickedItens}
        setClickedItens={setClickedItens}
        cardArray={cardArray}
      />
    </ContainerPergunta>
  )
}

export default Questions

const ContainerPergunta = styled.section`
  width: 100%;
`
