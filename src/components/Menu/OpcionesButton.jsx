import React from "react";
import styled from "styled-components";

const OpcionesButton = (props) => {
  const {
    Texto1,
    Texto2,
    Texto3,
    Texto4,
    Texto5,
    Icono1,
    Icono2,
    Icono3,
    Icono4,
    Icono5,
  } = props;
  return (
    <>
      <DivGrid>
        <Div>
          <Button>{Texto1}</Button>
          <Icono className={Icono1}></Icono>
        </Div>
        <Div>
          <Button>{Texto2}</Button>
          <Icono className={Icono2}></Icono>
        </Div>
        <Div>
          <Button>{Texto3}</Button>
          <Icono className={Icono3}></Icono>
        </Div>
        <Div>
          <Button>{Texto4}</Button>
          <Icono className={Icono4}></Icono>
        </Div>
        <Div>
          <Button>{Texto5}</Button>
          <Icono className={Icono5}></Icono>
        </Div>
      </DivGrid>
    </>
  );
};

export default OpcionesButton;

const DivGrid = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Div = styled.div`
  display: flex;
  position: relative;
  margin: auto;
  width: 90%;
  border-radius: 15px;
  height: 50px;
  @media (max-width: 1150px) {
    justify-content: center;
    width: 85%;
  }
  @media (max-width: 550px) {
    width: 50%;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  text-align: left;
  border-radius: 15px;
  padding: 0 55px;
  background: transparent;
  border: none;
  font-size: 22px;
  align-items: center;
  cursor: pointer;
  @media (max-width: 1150px) {
    display: none;
  }
  @media (max-width: 550px) {
    display: flex;
  }

  &:hover {
    background-color: #262b49;
  }
`;

const Icono = styled.i`
  font-size: 28px;
  position: absolute;
  color: white;
  display: flex;
  height: 100%;
  left: 15px;
  align-items: center;
  pointer-events: none;
  @media (max-width: 1150px) {
    justify-content: center;
    position: static;
    width: 100%;
    height: 100%;
    border-radius: 15px;
    pointer-events: auto;
    &:hover {
      background-color: #80808028;
    }
  }

  @media (max-width: 550px) {
    font-size: 28px;
    position: absolute;
    width: auto;
    color: white;
    display: flex;
    height: 100%;
    pointer-events: none;
  }
`;
