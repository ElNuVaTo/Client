import React from "react";
import styled from "styled-components";
import { mediaQueries } from "../../MediaQuery";

const InputComentario = ({HandleComentario, HandleSubmit, Comentarios}) => {
  return (
    <>
      <Form onSubmit={HandleSubmit}>
        <DivPerfil>
          <Perfil src="" alt="Perfil" />
        </DivPerfil>

        <DivInput>
          <Input
            type="text"
            value={Comentarios}
            onChange={HandleComentario}
            placeholder="Agrega un comentario..."
          />
        </DivInput>

        <DivButton>
          <Button type="submit">Publicar</Button>
        </DivButton>
      </Form>
    </>
  );
};

export default InputComentario;
const FondoOscuro = "#1c2039";
const FondoClaro = "#252c47";
const Focus = "#4a86ffc7";

//? Form

const Form = styled.form`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 75px;
  padding: 0 10px;
  gap: 0 10px;
  border-top: solid 2px ${FondoClaro};
  position: fixed;
  bottom: 0;
  z-index: 2;
  background-color: ${FondoOscuro};
`;

//! Imagen Form

const DivPerfil = styled.div`
  display: flex;
  width: 45px;
  height: 45px;
  border-radius: 50%;
`;
const Perfil = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;

//! Input Form
const DivInput = styled.div`
  display: flex;
  width: 65%;
  height: 40px;
`;
const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  outline: none;
  border: none;
  padding: 0 10px;
  border: 2px solid ${FondoClaro};
  background-color: ${FondoClaro};
  &:focus {
    outline: none;
    border: 2px solid ${Focus};
  }
`;
//! Boton Form
const DivButton = styled.div`
  display: flex;
  height: 40px;
`;
const Button = styled.button`
  border: none;
  background-color: transparent;
`;
