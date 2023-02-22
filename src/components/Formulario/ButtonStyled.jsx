import React from "react";
import styled from "styled-components";

const ButtonStyled = ({ Text }) => {
  return (
    <Div>
      <Input type="submit" value={Text}/>
    </Div>
  );
};

export default ButtonStyled;

const FondoOscuro = "#474973";
const FondoClaro = "#232735";
const White = "#f2f2f2";


const Div = styled.div`
  display: flex;
  grid-area: 9 / 1 / 10 / 2;
  max-width: 180px;
  width: 90%;
  height: 50px;
  margin: auto;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border: none;
  font-size: 20px;
  cursor: pointer;
  background: transparent;
  transition: 0.25s linear;
  border-radius: 10px;
  &:hover {
    background: ${FondoOscuro};
  }
`;
