import React from 'react'
import styled from 'styled-components'

const Footer = props => {
  const { counter, counterConcludes } = props

  return (
    <FooterConcluded data-test="footer">
      <p>
        <span>
          {counterConcludes}/{counter}
        </span>{' '}
        CONCLUÍDOS
      </p>
    </FooterConcluded>
  )
}

export default Footer

const FooterConcluded = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  min-height: 50px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: 'Recursive';
  font-weight: 400;
  font-size: 18px;
  color: #333333;
  padding: 10px;
`
