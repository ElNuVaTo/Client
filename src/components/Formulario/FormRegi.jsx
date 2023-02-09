import React, { useState } from "react";
import Inputs from "./Inputs";
import styled from "styled-components";
import ButtonStyled from "./ButtonStyled";

const FormRegi = (props) => {
  const [Usuario, SetUsuario] = useState({ Texto: "", Validacion: null });
  const [Apodo, SetApodo] = useState({ Texto: "", Validacion: null });
  const [Email, SetEmail] = useState({ Texto: "", Validacion: null });
  const [Contraseña, SetContraseña] = useState({ Texto: "", Validacion: null });
  const [Confirmar, SetConfirmar] = useState({ Texto: "", Validacion: null });

  const ExpresionesRegulares = {
    Usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    Apodo: /^[a-zA-ZÀ-ÿ\S]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    Email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    Contraseña: /^.{4,12}$/, // 4 a 12 digitos.
  };

  const OnSubmit = (Event) => {
    Event.preventDefault();
    console.log("Nice");
  };

  return (
    <>
      <Form onSubmit={OnSubmit}>
        <Inputs
          SetEstadoUsuario={SetUsuario}
          EstadoUsuario={Usuario}
          ExpresionUser={ExpresionesRegulares.Usuario}
          SetEstadoApodo={SetApodo}
          EstadoApodo={Apodo}
          ExpresionApodo={ExpresionesRegulares.Apodo}
          SetEstadoEmail={SetEmail}
          EstadoEmail={Email}
          ExpresionEmail={ExpresionesRegulares.Email}
          SetEstadoContraseña={SetContraseña}
          EstadoContraseña={Contraseña}
          ExpresionContraseña={ExpresionesRegulares.Contraseña}
          SetEstadoConfirmar={SetConfirmar}
          EstadoConfirmar={Confirmar}
        />
        <ButtonStyled Text="Registrarse" />
      </Form>
    </>
  );
};

export default FormRegi;

const Form = styled.form`
  display: grid;
  align-items: center;
  gap: 10px 0;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(11, 1fr);
  max-width: 400px;
  height: 75vh;
  width: 95%;
  margin: 70px auto;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    width: 1%;
    height: 110%;
    border: 1px solid #252525;
    border-color: transparent  transparent transparent #252525;
  }
  &::after {
    content: "";
    position: absolute;
    width: 1%;
    height: 110%;
    right: 0;
    border: 1px solid #252525;
    border-color: transparent #252525 transparent transparent;
    }
`;
