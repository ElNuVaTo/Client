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
const FondoClaro = "#474973";

const Main = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  margin: 20px auto;
  width: 65%;
  max-width: 200px;
  min-width: 200px;
  border-radius: 15px;
  height: 50px;
  ${mediaQueries.Table} {
    min-width: 50px;
    max-width: 75px;
  }
  ${mediaQueries.Desktop} {
  }
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  gap: 0 20px;
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
`;

const Icono = styled.i`
  display: flex;
  color: white;
  align-items: center;
  pointer-events: none;
  font-size: 30px;
  height: 100%;
  left: 15px;
`;

const Text = styled.p`
  display: flex;
  align-items: center;
  text-align: left;
  height: 100%;
 width: 5%;
  min-width:50px;
  ${mediaQueries.Table} {
    display: none;
  }
`;
