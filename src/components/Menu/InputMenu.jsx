import React from "react";
import styled from "styled-components";

const InputStyled = (props) => {
  const { Name, Type, NameLabel, OnChange, Value, OnKeyUp, onBlur, Valido, } =
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
        onKeyUp={OnKeyUp}
        onBlur={onBlur}
        Valido={Valido}
      />

    </Div>
  );
};

export default InputStyled;

const Div = styled.div`
  display: flex;
  max-width: 260px;
  width: 70%;
  height: 25px;
  margin: auto;
  position: relative;
  background-color: black;
  border-radius: 3px;
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
  padding: 0 22px 0 10px;
  border-bottom: 1px solid #252525;
  &:focus {
    border-bottom: 1px solid #4a86ffc7;
  }


`;

