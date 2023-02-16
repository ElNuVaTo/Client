import React from "react";
import styled from "styled-components";

const GitHub = () => {
  return (
    <Main>
      <A href="https://github.com/ElNuVaTo" target="_blank">
        <Git className="bi bi-github"></Git>
      </A>
    </Main>
  );
};

export default GitHub;

const Main = styled.div`
`;

const Git = styled.i`
  width: 70px;
  display: flex;
  background-color: black;
  border: 3px solid black;
  color: #61d565;
  font-size: 70px;
  border-radius: 0 50% 50% 50%;
`;

const A = styled.a`
  position: fixed;
  z-index: 2;
  overflow: hidden;
  width: 70px;
  height: 70px;
  text-decoration: none;
  transform: rotate(-45deg);
  border-radius: 50%;
  left: -50px;
  top: -45px;
  transition: linear 0.65s;
  filter: opacity(50%);
  z-index: 3;
  &:hover,
  :active {
    left: 0px;
    top: 0px;
    transform: rotate(-360deg);
    filter: opacity(100%);
    border-top-left-radius: 0%;
  }
`;
