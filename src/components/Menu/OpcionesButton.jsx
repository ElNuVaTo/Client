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
  height: 50px;
  border: 1px solid red;
  @media (max-width: 1150px) {
    justify-content: center;
  }
`;

const Button = styled.button`
  width: 100%;
  height: 100%;
  text-align: left;
  padding: 0 35px;
  background: transparent;
  border: none;
  border: 1px solid white;
  font-size: 22px;
  cursor: pointer;
  @media (max-width: 1150px) {
    opacity: 0;
  }
`;

const Icono = styled.i`
  font-size: 28px;
  position: absolute;
  color: white;
  display: flex;
  height: 100%;
  align-items: center;
`;
