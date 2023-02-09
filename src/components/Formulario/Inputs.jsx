import React from "react";
import InputStyled from "./InputStyled";
import styled, { css } from "styled-components";

const Inputs = (props) => {
  const {
    EstadoUsuario,
    EstadoApodo,
    EstadoEmail,
    EstadoContraseña,
    EstadoConfirmar,
    SetEstadoUsuario,
    SetEstadoApodo,
    SetEstadoEmail,
    SetEstadoContraseña,
    SetEstadoConfirmar,
    ExpresionUser,
    ExpresionApodo,
    ExpresionEmail,
    ExpresionContraseña,
    Mach,
  } = props;

  const OnChangeUser = (e) => {
    SetEstadoUsuario({ ...EstadoUsuario, Texto: e.target.value });
  };
  const OnChangeApodo = (e) => {
    SetEstadoApodo({ ...EstadoApodo, Texto: e.target.value });
  };
  const OnChangeEmail = (e) => {
    SetEstadoEmail({ ...EstadoEmail, Texto: e.target.value });
  };
  const OnChangePass = (e) => {
    SetEstadoContraseña({ ...EstadoContraseña, Texto: e.target.value });
  };
  const OnChangeConfirm = (e) => {
    SetEstadoConfirmar({ ...EstadoConfirmar, Texto: e.target.value });
  };

  const ValidacionUser = (e) => {
    if (ExpresionUser) {
      if (ExpresionUser.test(EstadoUsuario.Texto)) {
        SetEstadoUsuario({ ...EstadoUsuario, Validacion: true });
      } else {
        SetEstadoUsuario({ ...EstadoUsuario, Validacion: false });
      }
    }
  };

  const ValidacionApodo = (e) => {
    if (ExpresionApodo) {
      if (ExpresionApodo.test(EstadoApodo.Texto)) {
        SetEstadoApodo({ ...EstadoApodo, Validacion: true });
      } else {
        SetEstadoApodo({ ...EstadoApodo, Validacion: false });
      }
    }
  };

  const ValidacionEmail = (e) => {
    if (ExpresionEmail) {
      if (ExpresionEmail.test(EstadoEmail.Texto)) {
        SetEstadoEmail({ ...EstadoEmail, Validacion: true });
      } else {
        SetEstadoEmail({ ...EstadoEmail, Validacion: false });
      }
    }
  };

  const ValidacionContraseña = (e) => {
    if (ExpresionContraseña) {
      if (ExpresionContraseña.test(EstadoContraseña.Texto)) {
        SetEstadoContraseña({ ...EstadoContraseña, Validacion: true });
      } else {
        SetEstadoContraseña({ ...EstadoContraseña, Validacion: false });
        if (EstadoConfirmar.Texto !== EstadoConfirmar.Texto) {
          ValidacionConfirmar();
        }
      }
    }
  };

  const ValidacionConfirmar = (e) => {
    if (EstadoContraseña.Texto === EstadoConfirmar.Texto) {
      SetEstadoConfirmar({ ...EstadoConfirmar, Validacion: true });
    } else {
      SetEstadoConfirmar({ ...EstadoConfirmar, Validacion: false });
    }
  };

  return (
    <>
      <PosiUser>
        <InputStyled
          NameLabel={"Usuario"}
          Name={"Usuario"}
          Type={"text"}
          OnChange={OnChangeUser}
          Value={EstadoUsuario.Texto}
          OnKeyUp={ValidacionUser}
          onBlur={ValidacionUser}
          Valido={EstadoUsuario.Validacion}
        />
      </PosiUser>

      {EstadoUsuario.Validacion !== null && EstadoUsuario.Validacion < true && (
        <DivUser>
          <Text>El nombre de usuario debe tener entre 4 y 16 caracteres.</Text>
        </DivUser>
      )}

      <PosiApodo>
        <InputStyled
          NameLabel={"Apodo"}
          Name={"Apodo"}
          Type={"text"}
          OnChange={OnChangeApodo}
          Value={EstadoApodo.Texto}
          OnKeyUp={ValidacionApodo}
          onBlur={ValidacionApodo}
          Valido={EstadoApodo.Validacion}
        />
      </PosiApodo>

      {EstadoApodo.Validacion !== null && EstadoApodo.Validacion < true && (
        <DivApodo>
          <Text>
            Apodo entre 2 y 15 caracteres con letras, espacios y acentos
          </Text>
        </DivApodo>
      )}

      <PosiEmail>
        <InputStyled
          NameLabel={"Correo"}
          Name={"Email"}
          Type={"email"}
          OnChange={OnChangeEmail}
          Valido={EstadoEmail.Validacion}
          Value={EstadoEmail.Texto}
          OnKeyUp={ValidacionEmail}
          onBlur={ValidacionEmail}
        />
      </PosiEmail>

      {EstadoEmail.Validacion !== null && EstadoEmail.Validacion < true && (
        <DivEmail>
          <Text>
            Ingrese un correo electrónico válido con el formato
            nombre@dominio.com
          </Text>
        </DivEmail>
      )}

      <PosiContraseña>
        <InputStyled
          NameLabel={"Contraseña"}
          Name={"Password"}
          Type={"password"}
          OnChange={OnChangePass}
          Value={EstadoContraseña.Texto}
          Valido={EstadoContraseña.Validacion}
          OnKeyUp={ValidacionContraseña}
          onBlur={ValidacionContraseña}
        />
      </PosiContraseña>

      {EstadoContraseña.Validacion !== null &&
        EstadoContraseña.Validacion < true && (
          <DivContra>
            <Text>La contraseña debe tener entre 4 y 12 dígitos</Text>
          </DivContra>
        )}

      <PosiConfirm>
        <InputStyled
          NameLabel={"Repetir"}
          Name={"ConfirmPassword"}
          Type={"password"}
          OnChange={OnChangeConfirm}
          Value={EstadoConfirmar.Texto}
          Valido={EstadoConfirmar.Validacion}
          OnKeyUp={ValidacionConfirmar}
          onBlur={ValidacionConfirmar}
        />
      </PosiConfirm>

      {EstadoConfirmar.Validacion !== null &&
        EstadoConfirmar.Validacion < true && (
          <DivConfirm>
            <Text>
              Las contraseñas no coinciden. Por favor, vuelve a intentarlo
            </Text>
          </DivConfirm>
        )}
    </>
  );
};

export default Inputs;

const PosiUser = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;

const PosiApodo = styled.div`
  grid-area: 3 / 1 / 4 / 2;
`;

const PosiEmail = styled.div`
  grid-area: 5 / 1 / 6 / 2;
`;

const PosiContraseña = styled.div`
  grid-area: 7 / 1 / 8 / 2;
`;

const PosiConfirm = styled.div`
  grid-area: 9 / 1 / 10 / 2;
`;

const DivUser = styled.div`
  position: absolute;
  left: 62px;
  display: flex;
  width: 70%;
  margin: auto;
  z-index: 1;
  grid-area: 2 / 1 / 3 / 2;
`;

const DivApodo = styled.div`
  position: absolute;
  left: 62px;
  display: flex;
  width: 70%;
  margin: auto;
  z-index: 1;
  grid-area: 4 / 1 / 5 / 2;
`;

const DivEmail = styled.div`
  position: absolute;
  left: 62px;
  display: flex;
  width: 70%;
  margin: auto;
  z-index: 1;
  grid-area: 6 / 1 / 7 / 2;
`;

const DivContra = styled.div`
  position: absolute;
  left: 62px;
  display: flex;
  width: 70%;
  margin: auto;
  z-index: 1;
  grid-area: 8 / 1 / 9 / 2;
`;

const DivConfirm = styled.div`
  position: absolute;
  left: 62px;
  display: flex;
  width: 70%;
  margin: auto;
  z-index: 1;
  grid-area: 10 / 1 / 11 / 2;
`;

const Text = styled.p`
  align-items: left;
  font-size: 14px;
  color: #ed4245;
`;
