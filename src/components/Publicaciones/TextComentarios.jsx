import React from "react";
import styled from "styled-components";

const TextComentarios = ({ Comentario }) => {
  return (
    <>
      <DivText>
        <Text>{Comentario}</Text>
      </DivText>
    </>
  );
};

export default TextComentarios;

//! Text Comentarios

const DivText = styled.div`
  display: flex;
  flex: 3;
  width: 80%;
  height: 100%;
  margin: auto;
  border: 1px solid white;
`;
const Text = styled.p`
  text-align: left;
`;
