import React from "react";
import styled, { css } from "styled-components";

const InputStyled = (props) => {
  const { Name, Type, NameLabel, OnChange, Value, OnKeyUp, onBlur, Valido, Mach} =
    props;
  return (
    <Div>
      <Label htmlFor={Name}>{NameLabel}</Label>
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
        Mach={Mach}
      />

      <C Valido={Valido} className="bi bi-check-circle-fill"></C>
      <X Valido={Valido} className="bi bi-x-circle-fill"></X>
    </Div>
  );
};

export default InputStyled;

const Div = styled.div`
  display: flex;
  max-width: 260px;
  width: 70%;
  height: 30px;
  margin: auto;
  position: relative;
  background-color: black;
  border-radius: 3px;
`;

const Label = styled.label`
  position: absolute;
  top: -20px;
  left: 15px;
  padding: 0 15px;
  background-color: white;
  user-select: none;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  border: none;
  padding: 0 22px 0 10px;
  outline: 2px solid #252525c7;
  &:focus {
    outline: 2px solid #4a86ffc7;
  }

  ${(props) =>
    props.Valido === true &&
    css`
      outline: 2px solid #3ba55c !important;
    `}

  ${(props) =>
    props.Valido === false &&
    css`
      outline: 2px solid #ed4245 !important;
    `}
`;

const X = styled.i`
  position: absolute;
  right: 5px;
  bottom: 7px;
  color: #ed4245;
  opacity: 0;

  ${(props) =>
    props.Valido === false &&
    css`
      opacity: 1;
    `}

  ${(props) =>
    props.Valido === true &&
    css`
      opacity: 0;
    `}
`;

const C = styled.i`
  position: absolute;
  right: 5px;
  bottom: 7px;
  color: #3ba55c;
  opacity: 0;

  ${(props) =>
    props.Valido === false &&
    css`
      opacity: 0;
    `}

  ${(props) =>
    props.Valido === true &&
    css`
      opacity: 1;
    `}
`;
