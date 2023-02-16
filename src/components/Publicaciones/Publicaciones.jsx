import React from "react";
import CharacterList from "./CharacterList";
import styled from "styled-components";

const Publicaciones = () => {
  return (
    <>
      <Main>
        <CharacterList />
      </Main>
    </>
  );
};

export default Publicaciones;

// Publicaciones de Usuarios

const Main = styled.div`
  position: relative;
  top: 12vh;
`;
