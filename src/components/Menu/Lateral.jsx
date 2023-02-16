import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../../MediaQuery";

const Lateral = ({ Texto, ClassIcon }) => {
  return (
    <>
      <Main>
        <Button>
          <Icono className={ClassIcon}></Icono>
          <Text>{Texto}</Text>
        </Button>
      </Main>
    </>
  );
};

export default Lateral;

const FondoOscuro = "#1c2039";
const FondoClaro = "#252c47";

const Main = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: auto;
  width: 65%;
  border-radius: 15px;
  height: 50px;
  ${mediaQueries.Table} {
    width: 75%;
  }
  ${mediaQueries.Desktop} {
    width: 85%;
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  gap: 0 20px;
  margin: auto;
  background: transparent;
  border: none;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  &:hover,
  :active {
    background-color: ${FondoClaro};
  }
  ${mediaQueries.Table} {
  }
  ${mediaQueries.Desktop} {
    justify-content: left;
    padding: 0 20px;
  }
`;

const Icono = styled.i`
  display: flex;
  color: white;
  align-items: center;
  pointer-events: none;
  font-size: 30px;
  height: 100%;
  left: 15px;
  ${mediaQueries.Table} {
    width: 100%;
    left: 0;
    justify-content: center;
  }
  ${mediaQueries.Desktop} {
    justify-content: center;
    width: 25%;
  }
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  text-align: left;
  height: 100%;
  width: 35%;

  ${mediaQueries.Table} {
    display: none;
  }
  ${mediaQueries.Desktop} {
    font-size: 20px;
  }
`;
