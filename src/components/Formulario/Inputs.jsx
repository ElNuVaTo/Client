import React from "react";
import styled, { css } from "styled-components";

const Inputs = ({
  Usuario,
  Email,
  Contraseña,
  Confirmar,
  SetUsuario,
  SetEmail,
  SetContraseña,
  SetConfirmar,
  ExpresionUser,
  ExpresionEmail,
  ExpresionContraseña,
}) => {
  //Capturar tecla y pasarlo al value
  const OnUsuario = (e) => {
    SetUsuario({ ...Usuario, Texto: e.target.value });
  };
  const OnEmail = (e) => {
    SetEmail({ ...Email, Texto: e.target.value });
  };
  const OnContraseña = (e) => {
    SetContraseña({ ...Contraseña, Texto: e.target.value });
  };
  const OnConfirmar = (e) => {
    SetConfirmar({ ...Confirmar, Texto: e.target.value });
  };

  const ValidoUsuario = (e) => {
    if (ExpresionUser) {
      if (ExpresionUser.test(Usuario.Texto)) {
        SetUsuario({ ...Usuario, Validacion: true });
      } else {
        SetUsuario({ ...Usuario, Validacion: false });
      }
    }
  };

  const ValidoEmail = (e) => {
    if (ExpresionEmail) {
      if (ExpresionEmail.test(Email.Texto)) {
        SetEmail({ ...Email, Validacion: true });
      } else {
        SetEmail({ ...Email, Validacion: false });
      }
    }
  };

  const ValidoContraseña = (e) => {
    if (ExpresionContraseña) {
      if (ExpresionContraseña.test(Contraseña.Texto)) {
        SetContraseña({ ...Contraseña, Validacion: true });
        ValidoConfirmar();
      } else {
        SetContraseña({ ...Contraseña, Validacion: false });
        ValidoConfirmar();
      }
    }
  };

  // Contraseña Igual

  const ValidoConfirmar = (e) => {
    if (
      Contraseña.Texto === Confirmar.Texto &&
      ExpresionContraseña.test(Confirmar.Texto)
    ) {
      SetConfirmar({ ...Confirmar, Validacion: true });
    } else {
      SetConfirmar({ ...Confirmar, Validacion: false });
    }
  };

  return (
    <>
      <PosicionUsuario>
        <Div>
          <Label htmlFor="Usuario">
            <Icons className="bi bi-person"></Icons>
          </Label>
          <Input
            id="Usuario"
            name="Usuario"
            type="text"
            onChange={OnUsuario}
            onKeyUp={ValidoUsuario}
            value={Usuario.Texto}
            StyledValidacion={Usuario.Validacion}
            required
          />
        </Div>
      </PosicionUsuario>

      <PosicionEmail>
        <Div>
          <Label htmlFor="Email">
            <Icons className="bi bi-envelope"></Icons>
          </Label>
          <Input
            id="Email"
            name="Email"
            type="text"
            onChange={OnEmail}
            onKeyUp={ValidoEmail}
            value={Email.Texto}
            StyledValidacion={Email.Validacion}
            required
          />
        </Div>
      </PosicionEmail>

      <PosicionConstraseña>
        <Div>
          <Label htmlFor="Contraseña">
            <Icons className="bi bi-shield-lock"></Icons>
          </Label>
          <Input
            id="Contraseña"
            name="Contraseña"
            type="text"
            onChange={OnContraseña}
            onKeyUp={ValidoContraseña}
            value={Contraseña.Texto}
            StyledValidacion={Contraseña.Validacion}
            required
          />
        </Div>
      </PosicionConstraseña>

      <PosicionConfirmar>
        <Div>
          <Label htmlFor="ConfirmarContraseña">
            <Icons className="bi bi-shield-lock"></Icons>
          </Label>
          <Input
            id="ConfirmarContraseña"
            name="ConfirmarContraseña"
            type="text"
            onChange={OnConfirmar}
            onKeyUp={ValidoConfirmar}
            value={Confirmar.Texto}
            StyledValidacion={Confirmar.Validacion}
            required
          />
        </Div>
      </PosicionConfirmar>
    </>
  );
};

export default Inputs;

const Border = "#57587a";
const FondoClaro = "#474973";
// #4C468F
// #554789

// Posicionar inputs

const PosicionUsuario = styled.div`
  grid-area: 1 / 1 / 2 / 2;
`;

const PosicionEmail = styled.div`
  grid-area: 3 / 1 / 4 / 2;
`;

const PosicionConstraseña = styled.div`
  grid-area: 5 / 1 / 6 / 2;
`;

const PosicionConfirmar = styled.div`
  grid-area: 7 / 1 / 8 / 2;
`;

// Styled a los inputs + Iconos

const Div = styled.div`
  display: flex;
  max-width: 260px;
  width: 70%;
  height: 35px;
  margin: auto;
  position: relative;
  border-radius: 3px;
`;
const Icons = styled.i`
  display: flex;
  height: 100%;
  width: 100%;
  font-size: 22px;
  align-items: center;
  z-index: 3;
`;
const Label = styled.label`
  height: 100%;
  position: absolute;
  right: 8px;
  user-select: none;
`;

const Input = styled.input`
  width: 100%;
  height: 100%;
  border-radius: 3px;
  outline: none;
  border: none;
  padding: 0 35px 0 10px;
  background-color: ${FondoClaro};
  border: 2px solid ${Border} ;
  &:focus {
  }

  ${(props) =>
    props.StyledValidacion === true &&
    css`
      background: #0edb4323;
      border: 2px solid #0edb4b !important;
    `}

  ${(props) =>
    props.StyledValidacion === false &&
    css`
      background: #f53d434b;
      border: 2px solid #f5253a !important;
    `}
`;
