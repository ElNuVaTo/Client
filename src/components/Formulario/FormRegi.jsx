import React, { useState } from "react";
import Inputs from "./Inputs";
import styled from "styled-components";
import ButtonStyled from "./ButtonStyled";
import MensajeError from "./MensajeError";

const FormRegi = (props) => {
  const [Usuario, SetUsuario] = useState({ Texto: "", Validacion: null });
  const [Email, SetEmail] = useState({ Texto: "", Validacion: null });
  const [Contraseña, SetContraseña] = useState({ Texto: "", Validacion: null });
  const [Confirmar, SetConfirmar] = useState({ Texto: "", Validacion: null });

  const ExpresionesRegulares = {
    Usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    Email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    Contraseña: /^.{4,12}$/, // 4 a 12 digitos.
    Espacios: /^[^\s].*/,
  };

  const OnSubmit = (Event) => {
    Event.preventDefault();
    console.log("Nice");
  };

  return (
    <>
      <Form onSubmit={OnSubmit}>
        <Inputs
          SetUsuario={SetUsuario}
          Usuario={Usuario}
          ExpresionUser={ExpresionesRegulares.Usuario}
          SetEmail={SetEmail}
          Email={Email}
          ExpresionEmail={ExpresionesRegulares.Email}
          SetContraseña={SetContraseña}
          Contraseña={Contraseña}
          ExpresionContraseña={ExpresionesRegulares.Contraseña}
          SetConfirmar={SetConfirmar}
          Confirmar={Confirmar}
        />
        <ButtonStyled Text="Registrarse" />

        <MensajeError
        Usuario={Usuario}
        Email={Email}
        Contraseña={Contraseña}
        Confirmar={Confirmar}
        />
      </Form>
    </>
  );
};

export default FormRegi;

const Form = styled.form`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(9, 1fr);
  max-width: 400px;
  height: 82vh;
  width: 100%;
  margin: 60px auto;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    height: 100%;
    right: 0;
    top:0;
    background: linear-gradient(100deg, #1c2039 0%, #adadad 50%, #1c2039 70%);
    opacity: 50%;
    padding: 0.8px;
  }
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    left: 0;
    transform: rotate(180deg);
    background: linear-gradient(100deg, #1c2039 0%, #adadad 50%, #1c2039 70%);
    opacity: 50%;
    padding: 0.8px;
  }
`;
