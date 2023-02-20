import React, { useState } from "react";
import styled from "styled-components";
import { mediaQueries } from "../../MediaQuery";
import Buttons from "./Buttons";

const Character = ({ character }) => {
  return (
    <>
      <Main>
        <Div>
          <DivPerfil>
            <Perfil src={character.image} alt={character.name} widt />
          </DivPerfil>
          <DivText>
            <Text>{character.name}</Text>
          </DivText>
        </Div>
        <Contenido>
          <Imagenes src={character.image} alt={character.name} />
        </Contenido>
        <Section>
          <Buttons />
        </Section>
      </Main>
    </>
  );
};

export default Character;

// Colores
const FondoOscuro = "#1c2039";
const FondoClaro = "#252c47";

//! Seccion de abajo de la imagen
const Section = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  padding: 0 10px;
`;

//!  Contenido padre
const Main = styled.div`
  width: 100%;
  justify-content: center;
  position: relative;
  margin-bottom: 40px;
  &::after {
    content: "";
    display: flex;
    position: absolute;
    bottom: -20px;
    width: 100%;
    background: linear-gradient(
      100deg,
      ${FondoOscuro} -15%,
      white 50%,
      ${FondoOscuro} 110%
    );
    opacity: 50%;
    padding: 0.8px;
  }
  ${mediaQueries.Table} {
    width: 100%;
  }
`;
//! Publicaciones

const Contenido = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  height: 100%;
  max-width: 500px;
  height: 500px;
  cursor: pointer;
`;

const Imagenes = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

//! Icono de Perfil

const Perfil = styled.img`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  object-fit: cover;
  transition: linear 0.25s;
  &:hover {
    transform: scale(1.15);
    filter: grayscale(50%);
  }
`;

const DivPerfil = styled.div`
  display: flex;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

const Div = styled.div`
  display: flex;
  margin: auto;
  align-items: center;
  width: 90%;
  height: 75px;
  gap: 5px;
`;

//! Perfil Texto/Nombre

const Text = styled.p`
  left: 10px;
  font-size: 20px;
  cursor: pointer;
  text-overflow: ellipsis;
  overflow: hidden;
`;
const DivText = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  overflow: hidden;
  white-space: nowrap;
  width: 80%;
  height: 45px;
`;
