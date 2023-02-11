import React from "react";
import styled from "styled-components";

const Lista = () => {
  return (
    <>
      <List>
        <Menu className="bi bi-list"></Menu>
      </List>
    </>
  );
};

export default Lista;

const List = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
`;
const Menu = styled.i`
  display: flex;
  position: absolute;
  font-size: 45px;
  color: white;
  cursor: pointer;
`;
