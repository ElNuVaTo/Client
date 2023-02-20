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
  grid-area: 2 / 1 / 3 / 3;
  display: grid;
  grid-auto-flow: column;
  grid-template-rows: 100%;
  grid-template-columns: repeat(auto-fit, 75px);
  overflow-x: auto;
  gap: 20px;
  align-items: center;
  position: relative;
  width: 95%;
  margin: auto;
  height: 100%;
  ::-webkit-scrollbar {
    display: none;
  }
`;
