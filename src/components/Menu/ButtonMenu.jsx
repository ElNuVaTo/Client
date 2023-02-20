import React from "react";
import styled from "styled-components";

const ButtonMenu = ({ onClick }) => {
  return (
    <>
        <Button type="submit" onClick={onClick}>
          <Menu className="bi bi-list"></Menu>
        </Button>
    </>
  );
};

export default ButtonMenu;

const FondoOscuro = "#1c2039";

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
