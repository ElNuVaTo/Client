import React from "react";
import styled from "styled-components";

const InputStyled = (props) => {
  const { Name, Type, NameLabel, OnChange, Value, } =
    props;
  return (
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
  );
};

export default InputStyled;

const Div = styled.div`
  display: flex;
  max-width: 650px;
  width: 60%;
  height: 35px;
  margin: auto;
  position: relative;
  border-radius: 15px;
  align-items: center;
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
  background-color: #e5e5e5;
  font-size: 18px;
  outline: none;
  color: #252525;
  border: none;
  padding: 0 15px 0 48px;
  border-radius: 15px;
  border-bottom: 1px solid #8b8b8b;
  &:focus {
    border-bottom: 1px solid #4a86ffc7;
  }

`;
const Icon = styled.i`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 100%;
  font-size: 16px;
  border-radius: 15px 0 0 15px;
  background-color: #8b8b8b18;
`;

