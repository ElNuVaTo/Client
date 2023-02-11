import React from "react";
import InputStyled from "./Menu2";
import styled from "styled-components";
import OpcionesButton from "./OpcionesButton";
import Lista from "./Lista";

const Menu = (props) => {
  return (
    <>
      <DivInput>
        <InputStyled NameLabel={""} Name={"Buscador"} Type={"text"} />
      </DivInput>

      <DivLista>
        <Lista />
      </DivLista>
      <DivMenu>
        <OpcionesButton
          Texto1={"Inicio"}
          Icono1={"bi bi-house"}
          Texto2={"Explorar"}
          Icono2={"bi bi-compass"}
          Texto3={"Guardado"}
          Icono3={"bi bi-bookmark"}
          Texto4={"Mensajes"}
          Icono4={"bi bi-chat-left"}
          Texto5={"Ajustes"}
          Icono5={"bi bi-gear"}
        />
      </DivMenu>
    </>
  );
};

export default Menu;

const DivLista = styled.div`
  display: none;
  @media (max-width: 550px) {
    display: block;
    width: 20%;
    height: 12vh;
    position: fixed;
  }
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    right: 0;
    background: linear-gradient(100deg, #252525 0%, #adadad 50%, #252525 70%);
    opacity: 50%;
    background-repeat: repeat;
    padding: 1px;
  }
  &::after {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    background: linear-gradient(100deg, #252525 0%, #adadad 50%, #252525 70%);
    opacity: 50%;
    background-repeat: repeat;
    padding: 1px;
  }
`;

const DivMenu = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  width: 16%;
  position: fixed;
  height: 88vh;
  top: 12vh;
  @media (max-width: 1150px) {
    width: 12%;
  }
  @media (max-width: 550px) {
    width: 100%;
    &::before {
      background: #252525 !important;
    }
  }
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    right: 0;
    background: linear-gradient(100deg, #252525 0%, #adadad 50%, #252525 95%);
    opacity: 50%;
    background-repeat: repeat;
    padding: 1px;
  }
`;

const DivInput = styled.div`
  grid-area: 1 / 2 / 2 / 5;
  display: flex;
  align-items: center;
  width: 84%;
  height: 12vh;
  right: 0;

  position: fixed;
  @media (max-width: 1150px) {
    width: 89%;
  }
  @media (max-width: 550px) {
    width: 80%;
  }
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    bottom: 0;
    background: linear-gradient(100deg, #252525 0%, #adadad 50%, #252525 100%);
    opacity: 50%;
    background-repeat: repeat;
    padding: 1px;
  }
`;
