import React from "react";
import InputStyled from "./InputMenu";
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
        <Lista/>
      </DivLista>
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

const DivLista = styled.div`
  display: none;
@media (max-width: 480px) {
  display: block;
  width: 20%;
  height: 12vh;
  position: fixed;
  }
`

const DivMenu = styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  width: 18%;
  position: fixed;
  height: 88vh;
  top: 12vh;
  border: 1px solid white;
  @media (max-width: 1150px) {
    width: 11%;
  }
  @media (max-width: 480px) {
    width: 100%;
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
  height: 12vh;
  right: 0;
  border: 1px solid white;

  position: fixed;
  @media (max-width: 1150px) {
    width: 89%;
  }
  &::after {
    content: "";
    position: absolute;
  }
  @media (max-width: 480px) {
    width: 80%;
  }
`;
