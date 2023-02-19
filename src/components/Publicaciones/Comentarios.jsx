import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import TextComentarios from "./TextComentarios";
import InputComentario from "./InputComentario";

const Comentarios = () => {
  const [Comentarios, SetComentarios] = useState("");
  const [GetComentarios, SetGetComentarios] = useState([]);
  const [GetFotos, SetGetFotos] = useState([]);
  const [ComentariosList, SetComentariosList] = useState([]);

  // Llamar la Api para los comentarios
  useEffect(() => {
    const GetComments = async () => {
      const URL = "https://jsonplaceholder.typicode.com/comments";
      const response = await axios.get(URL,);
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
  const ComentariosPhotos = GetFotos.map(
    (GetFotos) => GetFotos.thumbnailUrl
  );


  // Recorrer array, Buscar el dato body
  const comments =  GetComentarios.slice(0, 2)
  const ComentariosBody = comments.map(
    (GetComentarios) => GetComentarios.body
  );

  // Capturar Value del input
  const HandleComentario = (e) => {
    SetComentarios(e.target.value);
  };

  // Enviar comentario a una lista para renderizarlo jsx
  const HandleSubmit = (e) => {
    e.preventDefault();
    SetComentariosList([...ComentariosList, Comentarios]);
    SetComentarios();
  };
  return (
    <>
      <Main>


        {ComentariosBody.map((Comentario, ID) => (
          <Comments>
            <TextComentarios Comentario={Comentario} key={ID}/>
          </Comments>
        ))}

        {/* <InputComentario
        HandleSubmit={HandleSubmit}
        HandleComentario={HandleComentario}
        Comentarios={Comentarios}/> */}
      </Main>
    </>
  );
};

export default Comentarios;

// Padre

const Main = styled.div`
  display: grid;
  overflow: scroll;
  grid: 1fr / auto;
  width: 100vw;
  height: 100vh;
  border: 1px solid white;
  position: relative;
`;

// Coments

const Comments = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid white
`