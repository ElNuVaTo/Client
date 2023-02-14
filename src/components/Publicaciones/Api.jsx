import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Api = () => {
  const [Publicaciones, SetPublicaciones] = useState([]);

  useEffect(() => {
    const Memes = async () => {
      const url = "https://api.imgflip.com/get_memes";
      const result = await axios.get(url);

      // console.log(result);
      SetPublicaciones(result.data.data.memes);
    };
    Memes();
  }, []);

  return (
    <>
      {Publicaciones.map((Memes, I) => {
        return (
          <li key={I}>
            <Imagenes src={Memes.url} alt="Memes" width='450px'  height='450px'/>
          </li>
        );
      })}
    </>
  );
};

export default Api;

const Imagenes = styled.img`
  object-fit: cover;
`
