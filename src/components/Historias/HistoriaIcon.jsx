import React from 'react'
import styled from "styled-components";
import { mediaQueries } from "../../MediaQuery";
import Panda from "./Panda.jpg"

const HistoriaIcon = () => {
  return (
    <>
      <Main>
        <Click src={Panda} alt="Historia" />
      </Main>
    
    </>
  )
}

export default HistoriaIcon

const New = "#4a86ffc7";

const Main = styled.div`
  display: flex;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid ${New};
`
const Click = styled.img`
width: 100%;
height: 100%;
object-fit: cover;
`