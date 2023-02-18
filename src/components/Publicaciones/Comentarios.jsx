import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Comentarios = () => {
  const [Comentarios, SetComentarios] = useState("");
  const [GetComentarios, SetGetComentarios] = useState([]);
  const [ComentariosList, SetComentariosList] = useState([]);

  // Llamar la Api
  useEffect(() => {
    const GetComments = async () => {
      const URL = "https://jsonplaceholder.typicode.com/comments";
      const response = await axios.get(URL);
      SetGetComentarios(response.data);
    };
    GetComments();
  }, []);
  const ComentariosBody = GetComentarios.map(
    (GetComentarios) => GetComentarios.body
  );
  console.log(ComentariosBody);

  const HandleComentario = (e) => {
    SetComentarios(e.target.value);
  };

  const HandleSubmit = (e) => {
    e.preventDefault();
    SetComentariosList([...ComentariosList, Comentarios]);
    SetComentarios();
  };
  return (
    <>
      <Main>
        <div>
          <img src="" alt="" />
        </div>

        {ComentariosBody.map((Comentario, ID) => (
          <ul key={ID}>
            <li>{Comentario}</li>
          </ul>
        ))}

        <div>
          <div>
            <h3></h3>
          </div>
          <div>
            <p></p>
          </div>
        </div>

        <form onSubmit={HandleSubmit}>
          <div>
            <input
              type="text"
              value={Comentarios}
              onChange={HandleComentario}
            />
          </div>
          <div>
            <button type="submit">Enviar</button>
          </div>
        </form>
      </Main>
    </>
  );
};

export default Comentarios;

const Main = styled.div``;
