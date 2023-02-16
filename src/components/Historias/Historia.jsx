import React from 'react'
import HistoriaIcon from './HistoriaIcon'
import styled from "styled-components";
import { mediaQueries } from "../../MediaQuery";

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
  ${mediaQueries.Table} {


  }
  ${mediaQueries.Desktop} {
    left: 20%;
    width: 55%;
  
  }
  `