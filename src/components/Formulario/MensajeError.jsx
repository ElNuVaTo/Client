import React from "react";
import styled from "styled-components";

const MensajeError = (props) => {
  const { Usuario, Email, Contraseña, Confirmar } = props;
  return (
    <>
      {Usuario.Validacion !== null && Usuario.Validacion < true && (
        <UsuarioError>
          <Text>El nombre de usuario debe tener entre 4 y 16 caracteres.</Text>
        </UsuarioError>
      )}

      {Contraseña.Validacion !== null && Contraseña.Validacion < true && (
        <ContraseñaError>
          <Text>La contraseña debe tener entre 4 y 12 dígitos</Text>
        </ContraseñaError>
      )}

      {Email.Validacion !== null && Email.Validacion < true && (
        <EmailError>
          <Text>
            Ingrese un correo electrónico válido con el formato
            nombre@dominio.com
          </Text>
        </EmailError>
      )}

      {Confirmar.Validacion !== null && Confirmar.Validacion < true && (
        <ConfirmarError>
          <Text>
            Las contraseñas no coinciden. Por favor, vuelve a intentarlo
          </Text>
        </ConfirmarError>
      )}
    </>
  );
};

export default MensajeError;

const UsuarioError = styled.div`
  position: relative;
  bottom: 10px;
  display: flex;
  width: 70%;
  height: 100%;
  max-width: 260px;
  margin: auto;
  grid-area: 2 / 1 / 3 / 2;
`;

const EmailError = styled.div`
  position: relative;
  bottom: 10px;
  display: flex;
  width: 70%;
  height: 100%;
  max-width: 260px;
  margin: auto;
  grid-area: 4 / 1 / 5 / 2;
`;

const ContraseñaError = styled.div`
  position: relative;
  bottom: 10px;
  display: flex;
  width: 70%;
  height: 100%;
  max-width: 260px;
  margin: auto;
  grid-area: 6 / 1 / 7 / 2;
`;

const ConfirmarError = styled.div`
  position: relative;
  bottom: 10px;
  display: flex;
  width: 70%;
  height: 100%;
  max-width: 260px;
  margin: auto;
  grid-area: 8 / 1 / 9 / 2;
`;

const Text = styled.p`
  position: absolute;
  display: flex;
  height: 100%;
  width: 100%;
  margin: auto;
  align-items: left;
  font-size: 14px;
  color: #f2384b;
`;
