import React, { useState } from "react";
import Historia from "./Historias/Historia";
import CharacterList from "./Publicaciones/CharacterList";
import styled from "styled-components";
import ButtonMenu from "./Menu/ButtonMenu";
import MenuLateral from "./Menu/MenuLateral";
import { mediaQueries } from "../MediaQuery";
import MenuSuperior from "./Menu/MenuSuperior";

const Home = () => {
  const [Activo, SetActivo] = useState(false);

  const HandleSubmit = () => {
    SetActivo(!Activo);
  };
  return (
    <>
      <Main>
        <DivButton>
          <ButtonMenu onClick={HandleSubmit} />
        </DivButton>

        <DivBarraSuperior>
          <MenuSuperior />
        </DivBarraSuperior>

        <DivBarraLateral Activo={Activo}>
          <MenuLateral />
        </DivBarraLateral>

        <DivHistoria>
          <Historia />
        </DivHistoria>

        <DivCharacterList>
          <CharacterList />
        </DivCharacterList>
      </Main>
    </>
  );
};

export default Home;

const FondoOscuro = "#1c2039";
const FondoClaro = "#252c47";
const Blanco = "#adadad";

const Main = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  height: 100vh;
  width: 100%;
  position: relative;
`;

const DivButton = styled.div`
  grid-area: 1 / 1 / 2 / 2; // Posicion
  position: fixed;
  display: flex;
  background-color: ${FondoOscuro};
  z-index: 2;
  width: 20%;
  height: 55px;
  ${mediaQueries.Table} {
    width: 15%;
  }
  ${mediaQueries.Desktop} {
    width: 16%;
  }
`;

const DivBarraSuperior = styled.div`
  grid-area: 1 / 2 / 2 / 4; // Posicion
  position: fixed;
  display: flex;
  background-color: ${FondoOscuro};
  z-index: 2;
  height: 55px;
  width: 80%;
  right: 0;
  ${mediaQueries.Table} {
    width: 85%;
  }
  ${mediaQueries.Desktop} {
    width: 84%;
  }
`;

const DivBarraLateral = styled.div`
  grid-area: 2 / 1 / 4 / 4; // Posicion
  display: flex;
  justify-content: center;
  position: fixed;
  background-color: ${FondoOscuro};
  z-index: 2;
  width: 100%;
  height: 93%;
  opacity: 99%;
  margin-top: 55px;
  left: ${(props) => (props.Activo ? "0" : "-900px")};
  transition: left 0.5s ease-in-out; /* Agregar transición */
  ${mediaQueries.Table} {
    width: 15%;
    min-width: 120px;
  }
  ${mediaQueries.Desktop} {
    width: 16%;
    min-width: 230px;
  }
`;

const DivHistoria = styled.div`
  grid-area: 2 / 1 / 3 / 4; // Posicion
  display: flex;
  width: 90%;
  position: relative;
  margin: auto;
  margin-top: 55px;
  height: 100px;
  ${mediaQueries.Table} {
    width: 80%;

  }
  ${mediaQueries.Desktop} {
    width: 55%;

  }
`;
const DivCharacterList = styled.div`
  grid-area: 3 / 1 / 4 / 4; // Posicion
  position: relative;
  width: 100%;
  ::-webkit-scrollbar {
    display: none;
}
`;
