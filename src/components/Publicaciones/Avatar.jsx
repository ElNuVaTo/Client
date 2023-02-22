import React from "react";
import styled from "styled-components";

const Avatar = ({ Photos }) => {
  return (
    <>
      <Main>
        <Avatars src={Photos} alt="" />
      </Main>
    </>
  );
};

export default Avatar;

//! Avatar

const Main = styled.div`
  display: flex;
  margin: auto;
  width: 75px;
  height: 75px;
  border-radius: 50%;
  margin: 10px;
  border: 1px solid white;
`;
const Avatars = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
`;
