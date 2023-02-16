import React, { useState } from "react";
import styled, { css } from "styled-components";
import ButtonMenu from "./ButtonMenu";
import Lateral from "./LateralOpciones";

const BarraLateral = () => {
  const [Activo, SetActivo] = useState(false);

  const HandleSubmit = () => {
    SetActivo(!Activo);
    console.log("Activo:", Activo);
  };

  return (
    <>
      <ButtonMenu onClick={HandleSubmit} />
      <Main Activo={Activo}>
        <Lateral/>
      </Main>
    </>
  );
};

export default BarraLateral;

// Colores
const FondoOscuro = "#1c2039";
const FondoClaro = "#252c47";
const Blanco = "#adadad";

// Menu de pc

const Main = styled.div`
display: flex;
  position: fixed;
  width: 100%;
  height: 88%;
  top: 12%;
  z-index: 2;
  background-color: ${FondoOscuro};
  /* Activar El Menu */
  left: ${(props) => (props.Activo ? "0" : "-500px")};
  transition: left 0.3s ease-in-out; /* Agregar transición */
`;
