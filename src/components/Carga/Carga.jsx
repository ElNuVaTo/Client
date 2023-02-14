import React from "react";
import styled, { keyframes, css } from "styled-components";

const Carga = () => {
  return (
    <Main>
      <Div></Div>
    </Main>
  );
};

export default Carga;

const Main = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
`;

const CuboBefore = "#1DE9B6";
const CuboAfter = "#FFC107";

const MovimientoAfter = keyframes`
  20% {
    left: 50px;
    bottom: 50px;
    transform: scale(1.2);
    background-color: ${CuboAfter};
  }
  40% {
    left: 0;
    bottom: 100px;
    transform: scale(1);
    background-color: ${CuboBefore};
  }
  60% {
    left: 100px;
    bottom: 100px;
    background-color: ${CuboBefore};
  }
  80%{
    left: 100px;
    bottom: 0;
    background-color: ${CuboBefore};

  }
  100%{
    left: 0;
    bottom: 0;
    background-color: ${CuboBefore};
  }
`;
const MovimientoBefore = keyframes`
  20% {
    right: 50px;
    top: 50px;
    transform: scale(1.2);
    background-color: ${CuboBefore};
  }
  40% {
    right: 0;
    top: 100px;
    transform: scale(1);
    background-color: ${CuboAfter};
  }
  60% {
    right: 100px;
    top: 100px;
    background-color: ${CuboAfter};
  }
  80%{
    right: 100px;
    top: 0;
    background-color: ${CuboAfter};
  }
  100%{
    right: 0;
    top: 0;
    background-color: ${CuboAfter};
  }
`;

const Div = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  position: relative;
  &::after {
    animation: ${MovimientoAfter} 3s linear infinite;
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 50px;
    background-color: ${CuboAfter};
  }
  &::before {
    animation: ${MovimientoBefore} 3s linear infinite;
    content: "";
    position: absolute;
    right: 0;
    top: 0;
    width: 50px;
    height: 50px;
    background-color: ${CuboBefore};
  }
`;
