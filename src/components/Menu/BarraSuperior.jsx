import React from "react";
import styled from "styled-components";
import Superior from "./Superior";

function BarraSuperior() {
  return (
    <Main>
      <Superior />
    </Main>
  );
}

export default BarraSuperior;

const FondoOscuro = "#1c2039";
const FondoClaro = "#252c47";
const Blanco = '#adadad';

const Main = styled.div`
  display: flex;
  align-items: center;
  position: fixed;
  width: 85%;
  height: 12%;
  right: 0;
  z-index: 2;
  background-color: ${FondoOscuro};
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    background: linear-gradient(100deg, ${FondoOscuro} 0%, ${Blanco} 50%, ${FondoOscuro} 100%);
    opacity: 50%;
    padding: 0.8px;
  }
`;
