import React from "react";
import styled from "styled-components";

const ButtonMenu = ({onClick}) => {
  return (
    <>
      <Main>
        <Button type="submit" onClick={onClick}>
          <Menu className="bi bi-list"></Menu>
        </Button>
      </Main>
    </>
  );
};

export default ButtonMenu;

const FondoOscuro = "#1c2039";
const FondoClaro = "#252c47";
const Blanco = "#adadad";

const Main = styled.div`
  position: fixed;
  width: 15%;
  height: 12%;
  z-index: 2;
`;
const Button = styled.button`
  width: 100%;
  height: 100%;
  background-color: ${FondoOscuro};
  border: none;
`;

const Menu = styled.i`
  width: 100%;
  height: 100%;
  font-size: 40px;
  cursor: pointer;
`;
