import React from "react";
import HistoriaIcon from "./HistoriaIcon";
import styled from "styled-components";
import { mediaQueries } from "../../MediaQuery";

const Historia = () => {
  return (
    <Main>
      <HistoriaIcon />
      <HistoriaIcon />
      <HistoriaIcon />
      <HistoriaIcon />
      <HistoriaIcon />
      <HistoriaIcon />
      <HistoriaIcon />
      <HistoriaIcon />
      <HistoriaIcon />
      <HistoriaIcon />
    </Main>
  );
};

export default Historia;

const Main = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 100%;
  grid-template-columns: repeat(auto-fit, 75px);
  overflow-x: auto;
  gap: 20px;
  align-items: center;
  position: relative;
  width: 95%;
  height: 75px;
  margin: auto;
  top: 12vh;
  ${mediaQueries.Table} {
  }
  ${mediaQueries.Desktop} {
    left: 20%;
    width: 55%;
    ::-webkit-scrollbar {
      display: none;
    }
  }
`;
