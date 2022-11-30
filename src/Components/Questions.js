import React from 'react'
import styled from 'styled-components'
import setaPlay from '../assets/img/seta_play.png'
import setaVirar from '../assets/img/seta_virar.png'

const Questions = () => {
  return (
    <ContainerPergunta>
      <PerguntaFechada>
        <p>Pergunta 1</p>
        <img src={setaPlay}></img>
      </PerguntaFechada>
      <PerguntaAberta>
        <p>JSX é uma sintaxe para escrever HTML dentro do JS</p>
        <img src={setaVirar}></img>
        <ContainerButtons>
          <button>Não Lembrei</button>
          <button>Quase não lembrei</button>
          <button>Zap!</button>
        </ContainerButtons>
      </PerguntaAberta>
    </ContainerPergunta>
  )
}

export default Questions

const ContainerPergunta = styled.section`
  width: 100%;
`

const PerguntaFechada = styled.div`
  width: 300px;
  height: 35px;
  background-color: #ffffff;
  margin: 23px auto;
  padding: 15px;
  box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
  border-radius: 5px;
  display: flex;
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
`

const PerguntaAberta = styled.div`
  display: none;
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
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`

const ContainerButtons = styled.div`
  display: none;
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
  }
`
