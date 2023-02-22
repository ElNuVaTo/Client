import React, { useState } from "react";
import Inputs from "./Inputs";
import styled, { css } from "styled-components";
import ButtonStyled from "./ButtonStyled";
import MensajeError from "./MensajeError";
import { useNavigate } from "react-router-dom";

const Formulario = (props) => {
  const [Usuario, SetUsuario] = useState({ Texto: "", Validacion: null });
  const [Email, SetEmail] = useState({ Texto: "", Validacion: null });
  const [Contraseña, SetContraseña] = useState({ Texto: "", Validacion: null });
  const [Confirmar, SetConfirmar] = useState({ Texto: "", Validacion: null });
  const navigate = useNavigate();
  const ExpresionesRegulares = {
    Usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    Email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    Contraseña: /^.{4,12}$/, // 4 a 12 digitos.
    Espacios: /^[^\s].*/,
  };







  const OnSubmit = (Event) => {
    Event.preventDefault();
    navigate("/Home");
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

        <ButtonStyled Text="Registrarse"/>

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

export default Formulario;

const FondoOscuro = "#240539";
const FondoClaro = "#8887B3";



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
    right: 10px;
    top:0;
    background: linear-gradient(100deg, #0D0C1D 0%, #161B33 50%, #0D0C1D 70%);
    opacity: 50%;
    padding: 0.8px;
  }
  &::after {
    content: "";
    position: absolute;
    height: 100%;
    left: 10px;
    transform: rotate(180deg);
    background: linear-gradient(100deg, #0D0C1D 0%, #161B33 50%, #0D0C1D 70%);
    opacity: 50%;
    padding: 0.8px;
  }
`;
