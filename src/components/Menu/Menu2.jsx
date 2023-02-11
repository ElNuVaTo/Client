import React from "react";
import styled from "styled-components";

const Menu2 = (props) => {
  const { Name, Type, NameLabel, OnChange, Value } = props;
  return (
    <Main>
      <Div>
        <Label htmlFor={Name}>{NameLabel}</Label>
        <Input
          id={Name}
          name={Name}
          type={Type}
          onChange={OnChange}
          value={Value}
        />
        <Icon className="bi bi-search"></Icon>
      </Div>
      <Button>
        <Icono className="bi bi-heart"></Icono>
      </Button>
    </Main>
  );
};

export default Menu2;

const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0 50px;
  @media (max-width: 550px) {
    justify-content: space-around;
    margin: auto 20px;
    gap: 20px;
  }
`;
const Div = styled.div`
  display: flex;
  width: 65%;
  max-width: 600px;
  height: 35px;
  position: relative;
  border-radius: 15px;
`;

const Label = styled.label`
  position: absolute;
  top: -19px;
  left: 5px;
  padding: 0 15px;
  font-size: 15px;
  user-select: none;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  background-color: #262b49;
  outline: none;
  border: none;
  padding: 0 15px 0 48px;
  border-radius: 15px;
  border: 2px solid #262b49;
  &:focus {
    border: 2px solid #4a86ffc7;
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
  background-color: #7182da16;
`;

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
