import React from "react";
import styled from "styled-components";
import Lateral from "./Lateral";


const LateralOpciones = () => {
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

export default LateralOpciones;

// Colores

const Main = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

