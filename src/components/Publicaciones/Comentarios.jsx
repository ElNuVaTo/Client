import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import TextComentarios from "./TextComentarios";
import InputComentario from "./InputComentario";
import Avatar from "./Avatar";

const Comentarios = () => {
  const [Comentarios, SetComentarios] = useState("");
  const [ComentariosList, SetComentariosList] = useState([]);
  const [GetComentarios, SetGetComentarios] = useState([]);
  const [GetFotos, SetGetFotos] = useState([]);

  // Llamar la Api para los comentarios
  useEffect(() => {
    const GetComments = async () => {
      const URL = "https://jsonplaceholder.typicode.com/comments";
      const response = await axios.get(URL);
      SetGetComentarios(response.data);
    };
    GetComments();
  }, []);
  // Llamar la Api para los perfiles
  useEffect(() => {
    const GetPhotos = async () => {
      const URL = "https://jsonplaceholder.typicode.com/photos";
      const response = await axios.get(URL);

      SetGetFotos(response.data);
    };
    GetPhotos();
  }, []);

  // Recorrer array, Buscar el dato Photos 150x150
  const Photos = GetFotos.slice(0, 3);
  const ComentariosPhotos = Photos.map((GetFotos) => GetFotos.thumbnailUrl);
  // Recorrer array, Buscar el dato body
  const comments = GetComentarios.slice(0, 3);
  const ComentariosBody = comments.map((GetComentarios) => GetComentarios.body);

  // Capturar Value del input
  const HandleComentario = (e) => {
    SetComentarios(e.target.value);
  };

  // Enviar comentario a una lista para renderizarlo jsx
  const HandleSubmit = (e) => {
    e.preventDefault();
    SetComentariosList([...ComentariosList, Comentarios]);
    SetComentarios();
    console.log(ComentariosList)
    console.log(Comentarios)
  };
  return (
    <>
      <Main>
        {ComentariosPhotos.map((Photos, ID) => (
          <DivComents>
            <Avatar Photos={Photos} key={ID} />
            <TextComentarios Comentario={ComentariosBody[ID]} key={ID} />
            <p>Corazon</p>
          </DivComents>
        ))}
      </Main>



      <InputComentario
        HandleSubmit={HandleSubmit}
        HandleComentario={HandleComentario}
        Comentarios={Comentarios}
      />
    </>
  );
};

export default Comentarios;

// Padre

const Main = styled.div`
  border: 1px solid white;
  display: grid;
  width: 100%;
  height: 80%;
  margin: auto;
`;

const DivComents = styled.div`
display: flex;
  width: 100%;
  height: 120px;
  border: 1px solid blue;
`;
