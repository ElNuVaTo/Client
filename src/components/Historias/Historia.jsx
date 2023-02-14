import React from 'react'
import HistoriaIcon from './HistoriaIcon'
import styled from "styled-components";

const Historia = () => {
  return (
    <Div>
      <HistoriaIcon/>
    </Div>
  )
}

export default Historia

const Div = styled.div`
  display: flex;
  width: 55%;
  position: absolute;
  height: 15vh;
  top: 12vh;
  left: 16%;
  cursor: pointer;
  border: 1px solid white;
  @media (max-width: 1150px) {
    left: 12%;
  }
  `