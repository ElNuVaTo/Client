import React from "react";
import styled from "styled-components";
import Lateral from "./Lateral";
import { mediaQueries } from "../../MediaQuery";

const MenuLateral = () => {
  return (
    <>
      <Main>
        <Lateral Texto={"Inicio"} ClassIcon={"bi bi-house"} />
        <Lateral Texto={"Explorar"} ClassIcon={"bi bi-compass"} />
        <Lateral Texto={"Guardado"} ClassIcon={"bi bi-bookmark"} />
        <Lateral Texto={"Mensajes"} ClassIcon={"bi bi-chat-left"} />
        <Lateral Texto={"Perfil"} ClassIcon={"bi bi-person"} />
        <Lateral Texto={"Ajustes"} ClassIcon={"bi bi-gear"} />
      </Main>
    </>
  );
};

export default MenuLateral;

// Colores

const Main = styled.div`
  display: grid;
  width: 100%;
  height: 100%;
  grid-template-columns: 1fr;
  padding: 50px;
  overflow-y: scroll;
  overscroll-behavior-y: contain;
  ::-webkit-scrollbar {
    display: none;
  }
  ${mediaQueries.Table} {
    padding: 0;
  }
  ${mediaQueries.Desktop} {
    padding: 0;
  }
`;
