import axios from "axios";
import React, { useEffect, useState } from "react";
import Character from "./Character";
import InfiniteScroll from "react-infinite-scroll-component";
import styled from "styled-components";

const CharacterList = () => {
  const [Publicaciones, SetPublicaciones] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const getPublicaciones = async () => {
      try {
        const limit = 5;
        const url = `https://rickandmortyapi.com/api/character/?page=${page}&limit=${limit}`;
        const response = await axios.get(url);
        const newPublicaciones = response.data.results;
        if (newPublicaciones.length > 0) {
          SetPublicaciones((prevPublicaciones) => [
            ...prevPublicaciones,
            ...newPublicaciones,
          ]);
        } else {
          setHasMore(false);
        }
      } catch (error) {
        console.error(error);
      }
    };
    getPublicaciones();
  }, [page]);

  const fetchMoreData = () => {
    if (!hasMore) return;
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <Main>
      <InfiniteScroll
        dataLength={Publicaciones.length}
        next={fetchMoreData}
        hasMore={hasMore}
        loader={<h4>Cargando...</h4>}
      >
        {Publicaciones.map((character) => {
          return <Character character={character} key={character.id} />;
        })}
      </InfiniteScroll>
    </Main>
  );
};

export default CharacterList;

const Main = styled.div`
  width: 100%;
  height: 100%;
`;
