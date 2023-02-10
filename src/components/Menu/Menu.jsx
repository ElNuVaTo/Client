import React from "react";
import InputStyled from "./InputMenu";
import styled from "styled-components";
import OpcionesButton from "./OpcionesButton";

const Menu = () => {
  return (
    <>
      <Div>
        <InputStyled NameLabel={"Buscar"} Name={"Buscador"} Type={"text"} />
        <i class="bi bi-search"></i>
      </Div>

      <div>
        <OpcionesButton Text={"Inicio"}/>
        <i class="bi bi-house"></i>
      </div>
        <div>
          <OpcionesButton Text={"Explorar"} />
          <i class="bi bi-compass"></i>
        </div>
        <div>
          <OpcionesButton Text={"Reels"} />
        </div>
        <div>
          <OpcionesButton Text={"Mensajes"} />
          <i class="bi bi-chat-left"></i>
        </div>
        <div>
          <OpcionesButton Text={"Notificaciones"} />
          <i class="bi bi-heart"></i>
        </div>
    </>
  );
};

export default Menu;

const Div = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 75px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1%;
    background: linear-gradient(
      90deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(37, 37, 37, 1) 45%,
      rgba(37, 37, 37, 1) 55%,
      rgba(255, 255, 255, 1) 100%
    );
    bottom: 0;
    left: 0;
    filter: opacity(45%);
  }
`;
