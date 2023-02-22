import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../../MediaQuery";

const MenuSuperior = ({Name, Type, OnChange, Value}) => {
  return (
    <Main>
      <Div>
        
        <Label htmlFor={Name}>
          <Icon className="bi bi-search"></Icon>
        </Label>

        <Input
          id={Name}
          name={Name}
          type={Type}
          onChange={OnChange}
          value={Value}
        />
      </Div>
      {/* <Button>
        <Icono className="bi bi-heart"></Icono>
      </Button> */}
    </Main>
  );
};

export default MenuSuperior;


// Contenido Padre

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-around;
  ${mediaQueries.Desktop} {
    width: 100%;
    justify-content: center;
  }

`;

// Contenedor del input

const Div = styled.div`
  display: flex;
  width: 72%;
  max-width: 600px;
  height: 35px;
  position: relative;
  border-radius: 15px;
`;

const Label = styled.label`
  position: absolute;
  display: flex;
  height: 100%;
`;


// Colores
const Border = "#57587a";
const FondoClaro = "#474973";

const Input = styled.input`
  width: 100%;
  height: 100%;
  outline: none;
  border: none;
  padding: 0 15px 0 48px;
  border-radius: 15px;
  background-color: ${FondoClaro};
  border: 2px solid ${Border} ;
  &:focus {

  }
`;
const Icon = styled.i`
  position: absolute;
  display: flex;
  align-items: center;
  color: white;
  justify-content: center;
  width: 45px;
  height: 100%;
  font-size: 16px;
  border-radius: 15px 0 0 15px;
`;

// Notificaciones

const Button = styled.button`
  border: none;
  background-color: transparent;
`;
const Icono = styled.i`
  font-size: 28px;
  color: white;
  display: flex;
  height: 100%;
  left: 15px;
  align-items: center;
  cursor: pointer;
  &:hover {
    color: red;
  }
`;
