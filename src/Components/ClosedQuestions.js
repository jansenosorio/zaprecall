import React, { useState } from 'react'
import styled from 'styled-components'
import setaPlay from '../assets/img/seta_play.png'
import iconeCerto from '../assets/img/icone_certo.png'
import iconeErro from '../assets/img/icone_erro.png'
import iconeQuase from '../assets/img/icone_quase.png'
import cards from './cards'

const ClosedQuestions = props => {
  const { clickedItens, setClickedItens, cardArray } = props
  const [wasClicked, setWasClicked] = useState([])

  const turnCard = (elm, i) => {
    if (!wasClicked.includes(elm)) {
      const newArray = [...clickedItens, i]
      setClickedItens(newArray)
      const clickedArray = [...wasClicked, elm]
      setWasClicked(clickedArray)
    }
  }

  return (
    <>
      {cards.map((elm, i) => (
        <PerguntaFechada
          key={i}
          display={clickedItens.includes(i)}
          line={wasClicked.includes(elm)}
          cardArray={cardArray[i] > 0 && cardArray[i]}
        >
          <p>Pergunta {i + 1}</p>
          <button>
            <img
              src={
                cardArray[i] === 1
                  ? iconeErro
                  : cardArray[i] === 2
                  ? iconeQuase
                  : cardArray[i] === 3
                  ? iconeCerto
                  : setaPlay
              }
              onClick={() => turnCard(elm, i)}
            ></img>
          </button>
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
    color: ${props =>
      props.cardArray === 1
        ? '#FF3030'
        : props.cardArray === 2
        ? '#FF922E'
        : props.cardArray === 3
        ? '#2FBE34'
        : 'black'};
    text-decoration: ${props => (props.line ? 'line-through' : 'none')};
  }
  img {
    cursor: pointer;
  }
  button {
    border: none;
    background-color: white;
  }
`
