import React from "react";
import styled from "styled-components";

const Lateral = ({ Texto, ClassIcon}) => {
  return (
    <>
      <Main>
        <Button>
          <Icono className={ClassIcon}></Icono>
          {Texto}
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
  width: 60%;
  border-radius: 15px;
  height: 50px;
`;

const Button = styled.button`
  display: flex;
  background: transparent;
  border: none;
  align-items: center;
  cursor: pointer;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  padding: 0 55px;
  font-size: 24px;
  &:hover, :active {
    background-color: ${FondoClaro};
  }
`;

const Icono = styled.i`
  position: absolute;
  color: white;
  display: flex;
  align-items: center;
  pointer-events: none;
  font-size: 30px;
  height: 100%;
  left: 15px;
`;
