import React from "react";
import InputStyled from "./InputMenu";
import styled from "styled-components";
import OpcionesButton from "./OpcionesButton";

const Menu = (props) => {
  return (
    <>
      <DivInput>
        <InputStyled NameLabel={""} Name={"Buscador"} Type={"text"} />
      </DivInput>

      <DivMenu>
        <OpcionesButton
          Texto1={"Inicio"}
          Icono1={"bi bi-house"}
          Texto2={"Explorar"}
          Icono2={"bi bi-compass"}
          Texto3={"Notificaciones"}
          Icono3={"bi bi-heart"}
          Texto4={"Mensajes"}
          Icono4={"bi bi-chat-left"}
          Texto5={"Configuracion"}
          Icono5={"bi bi-gear"}
        />
      </DivMenu>
    </>
  );
};

export default Menu;

const DivMenu = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  width: 18%;
  position: fixed;
  height: 100vh;
  border: 1px solid white;
  @media (max-width: 1150px) {
    width: 8%;
  }
  &::before {
    content: "";
    position: absolute;
  }
`;

const DivInput = styled.div`
  grid-area: 1 / 2 / 2 / 5;
  display: flex;
  align-items: center;
  width: 82%;
  right: 0;
  height: 75px;
  position: fixed;
  border: 1px solid white;
  @media (max-width: 1150px) {
    width: 92%;
  }
  &::after {
    content: "";
    position: absolute;
  }
`;
