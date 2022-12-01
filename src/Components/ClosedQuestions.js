import React, { useState } from 'react'
import styled from 'styled-components'
import setaPlay from '../assets/img/seta_play.png'
import cards from './cards'

const ClosedQuestions = props => {
  const { clickedItens, setClickedItens } = props

  const turnCard = e => {
    const newArray = [...clickedItens, e]
    setClickedItens(newArray)
  }

  return (
    <>
      {cards.map((elm, i) => (
        <PerguntaFechada key={i} display={clickedItens.includes(i)}>
          <p>Pergunta {i + 1}</p>
          <img src={setaPlay} onClick={() => turnCard(i)}></img>
        </PerguntaFechada>
      ))}
    </>
  )
}

export default ClosedQuestions

const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 23px auto;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: ${props => (props.display ? 'none' : 'flex')};
  align-items: center;
  justify-content: space-between;
  p {
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 19px;
    color: #333333;
  }
  img {
    cursor: pointer;
  }
`
