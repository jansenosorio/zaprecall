import React from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import ClosedQuestions from './ClosedQuestions'
import OpenQuestions from './OpenQuestions'

const Questions = props => {
  const [clickedItens, setClickedItens] = useState([])
  console.log(clickedItens)

  return (
    <ContainerPergunta>
      <OpenQuestions
        clickedItens={clickedItens}
        setClickedItens={setClickedItens}
      />
      <ClosedQuestions
        clickedItens={clickedItens}
        setClickedItens={setClickedItens}
      />
    </ContainerPergunta>
  )
}

export default Questions

const ContainerPergunta = styled.section`
  width: 100%;
`
