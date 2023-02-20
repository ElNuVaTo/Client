import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";

const Buttons = () => {
  const [Like, SetLike] = useState(false);
  const [Comentarios, SetComentarios] = useState(false);
  const navigate = useNavigate();

  const CommentsSubmit = () => {
    SetComentarios(!Comentarios);
    console.log('Comentarios',Comentarios);
  };
  const HandleSubmit = () => {
    SetLike(!Like);
    navigate("/Comentarios");
    console.log('Like',Like);
  };

  return (
    <>
      <DivSection1>
        <ButtonLike onClick={HandleSubmit}>
          <HeartIcon className="bi bi-heart" Like={Like}></HeartIcon>
        </ButtonLike>

        <ButtonComments onClick={CommentsSubmit}>
          <CommentsIcon className="bi bi-chat" Comentarios={Comentarios}></CommentsIcon>
        </ButtonComments>

        <ButtonShare>
          <ShareIcon className="bi bi-share"></ShareIcon>
        </ButtonShare>
      </DivSection1>

      <DivSection2>
        <ButtonBookmark>
          <BookmarkIcon className="bi bi-bookmark"></BookmarkIcon>
        </ButtonBookmark>
      </DivSection2>
    </>
  );
};

export default Buttons;

//! Seccion de abajo de la imagen
const DivSection1 = styled.div`
  display: flex;
  width: 35%;
  justify-content: space-between;
  align-items: center;
`;

const DivSection2 = styled.div`
  display: flex;
  width: 30%;
  justify-content: right;
`;

const ButtonLike = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;
const ButtonComments = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;
const ButtonShare = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;
const ButtonBookmark = styled.button`
  position: relative;
  background-color: transparent;
  border: none;
  cursor: pointer;
  outline: none;
`;

//? Animacion de dar Like
//? Animacion de comments
//? Animacion de compartir
//? Animacion de Guardar

const HeartIcon = styled.span`
  display: flex;
  font-size: 25px;
  color: ${(props) => (props.Like ? "red" : "white")};
  transition: color 0.3s ease-in-out; /* Agregar transición */
  outline: none;
`;

const CommentsIcon = styled.span`
  display: flex;
  font-size: 25px;
`;
const ShareIcon = styled.span`
  display: flex;
  font-size: 25px;
`;
const BookmarkIcon = styled.span`
  display: flex;
  font-size: 25px;
`;
