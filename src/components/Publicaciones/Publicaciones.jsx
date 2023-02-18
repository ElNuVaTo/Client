import React from "react";
import { mediaQueries } from "../../MediaQuery";
import CharacterList from "./CharacterList";
import styled from "styled-components";

const Publicaciones = () => {
  return (
    <Main>
      <CharacterList />
    </Main>
  );
};

export default Publicaciones;

// Publicaciones de Usuarios

const Main = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  top: 12vh;
  ${mediaQueries.Table} {
    width: 85%;
    top: 120px;
    margin: auto;
  }
  ${mediaQueries.Desktop} {
    left: 20%;
    width: 55%;
  }
`;
