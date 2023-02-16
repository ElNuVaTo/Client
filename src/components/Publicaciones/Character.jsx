import React from "react";
import styled from "styled-components";

const Character = ({ character }) => {
  return (
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
    </Main>
  );
};

export default Character;

// Colores
const FondoOscuro = "#1c2039";
const FondoClaro = "#252c47";

//  Contenido padre
const Main = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin: 45px 0;
  position: relative;
  &::after {
    content: "";
    display: flex;
    position: absolute;
    bottom: -30px;
    width: 100%;
    background: linear-gradient(100deg, ${FondoOscuro} 20%, white 50%, ${FondoOscuro} 80%);
    opacity: 50%;
    padding: 0.8px;
  }
  
`;
// Publicaciones

const Contenido = styled.div`
  display: flex;
  margin: auto;
  width: 90%;
  height: 90%;
  cursor: pointer;

`;

const Imagenes = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

// Icono de Perfil

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

// Perfil Texto/Nombre

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
