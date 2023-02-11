import React from "react";
import styled, { css } from "styled-components";

const InputStyled = (props) => {
  const { Name, Type, Icono, OnChange, Value, OnKeyUp, onBlur, Valido } = props;

  return (
    <Div>
      <Label htmlFor={Name}>
        <Icons className={Icono}></Icons>
      </Label>
      <Input
        id={Name}
        type={Type}
        name={Name}
        onChange={OnChange}
        required
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
  height: 35px;
  margin: auto;
  position: relative;
  border-radius: 3px;
`;
const Icons = styled.i`
  display: flex;
  height: 100%;
  width: 100%;
  font-size: 22px;
  align-items: center;
`;
const Label = styled.label`
  height: 100%;
  position: absolute;
  right: 8px;
  user-select: none;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  outline: none;
  border: none;
  padding: 0 35px 0 10px;
  background-color: #252c47;
  &:focus {
    border: 2px solid #4a86ffc7;
  }

  ${(props) =>
    props.Valido === true &&
    css`
      background: #0edb4323;
      border: 2px solid #0edb75 !important;
    `}

  ${(props) =>
    props.Valido === false &&
    css`
      background: #f53d4323;
      border: 2px solid #f2384b !important;
    `}
`;
