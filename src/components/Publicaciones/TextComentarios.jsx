import React from "react";
import styled from "styled-components";

const TextComentarios = ({Comentario }) => {
  return (
    <>
      <Section>
        <DivPersona>
          <Persona src="" alt="Perfil" />
        </DivPersona>

        <DivComent>
          <Coment>Nuvato</Coment>
        </DivComent>

        <DivText>
          <Text>{Comentario}</Text>
        </DivText>
      </Section>
    </>
  );
};

export default TextComentarios;
const FondoOscuro = "#1c2039";
const FondoClaro = "#252c47";
const Focus = "#4a86ffc7";

//? Comentarios

const Section = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 2fr;
  width: 100%;
  height: 15%;
  border-bottom: 1px solid white;
`;
//! Coment Coment

const DivComent = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  display: flex;
  height: 100%;
  border: 1px solid white;
`;
const Coment = styled.h4`

`;
//! Text Comentarios

const DivText = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  display: flex;
  width: 80%;
  height: 100%;
  margin: auto;
  border: 1px solid white;
`;
const Text = styled.p`
  text-align: left;
`;
//! Perfil Comentarios

const DivPersona = styled.div`
  grid-area: 1 / 1 / 3 / 2;
  display: flex;
  margin: auto;
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;
const Persona = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
