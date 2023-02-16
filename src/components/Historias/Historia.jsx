import React from 'react'
import HistoriaIcon from './HistoriaIcon'
import styled from "styled-components";

const Historia = () => {
  return (
    <Main>
      <HistoriaIcon/>
    </Main>
  )
}

export default Historia

const Main = styled.div`
  display: flex;
  position: relative;
  cursor: pointer;
  width: 100%;
  height: 75px;
  top: 12vh;
  border: 1px solid white;
  `