import React from 'react'
import styled from 'styled-components'
import setaVirar from '../assets/img/seta_virar.png'
import cards from './cards.js'
import { useState } from 'react'

const OpenQuestions = props => {
  const {
    clickedItens,
    setClickedItens,
    turnCardController,
    setTurnCardController,
    cardArray,
    setCardArray,
    setCounterConcludes,
    counterConcludes
  } = props

  const handleClick = e => {
    let newTurnCardController = [...turnCardController, e]
    setTurnCardController(newTurnCardController)
  }

  const handleButtonClick = (indice, t) => {
    const newArray = [...clickedItens].splice()
    setClickedItens(newArray)
    let type = t
    const newCardArray = [...cardArray]
    newCardArray.forEach((elm, i) => {
      if (i === indice) {
        newCardArray[i] = type
        if (counterConcludes <= 8) {
          setCounterConcludes(counterConcludes + 1)
        }
      }
    })
    setCardArray(newCardArray)
  }

  return (
    <>
      {cards.map((elm, i) => (
        <PerguntaAberta
          key={i}
          display={clickedItens.includes(i)}
          turnCardController={turnCardController.includes(elm)}
        >
          <p>{turnCardController.includes(elm) ? elm.answer : elm.question}</p>
          <img src={setaVirar} onClick={() => handleClick(elm)}></img>
          <ContainerButtons
            turnCardController={turnCardController.includes(elm)}
          >
            <button onClick={() => handleButtonClick(i, 1)}>Não Lembrei</button>
            <button onClick={() => handleButtonClick(i, 2)}>
              Quase não lembrei
            </button>
            <button onClick={() => handleButtonClick(i, 3)}>Zap!</button>
          </ContainerButtons>
        </PerguntaAberta>
      ))}
    </>
  )
}

export default OpenQuestions

const PerguntaAberta = styled.div`
  display: ${props => (props.display ? 'flex' : 'none')};
  width: 300px;
  margin: 23px auto;
  padding: 15px;
  min-height: 100px;
  background: #ffffd5;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  font-family: 'Recursive';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  color: #333333;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  img {
    display: ${props => (props.turnCardController ? 'none' : 'flex')};
    position: absolute;
    bottom: 10px;
    right: 10px;
    cursor: pointer;
  }
`

const ContainerButtons = styled.div`
  display: ${props => (props.turnCardController ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  gap: 8px;
  button {
    width: 90px;
    height: 37px;
    font-family: 'Recursive';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;

    text-align: center;
    color: #ffffff;
    background: red;
    border-radius: 5px;
    border: none;
    padding: 5px;
    cursor: pointer;

    &:nth-child(1) {
      background-color: #ff3030;
    }
    &:nth-child(2) {
      background-color: #ff922e;
    }
    &:nth-child(3) {
      background-color: #2fbe34;
    }
  }
`

// switch (t) {
//   case 1:
//     setColor('#FF3030')
//     setLine('line-through')
//     setIcon('iconeErro')
//     break

//   case 2:
//     setColor('#FF922E')
//     setLine('line-through')
//     setIcon('iconeQuase')
//     break

//   case 'zap':
//     setColor('#2FBE34')
//     setLine('line-through')
//     setIcon('iconeCerto')
//     break
// }
