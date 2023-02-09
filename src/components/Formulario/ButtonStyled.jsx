import React from 'react'
import styled from "styled-components";

const ButtonStyled = (props) => {
  const { Text } = props;
  return (
    <Div>
      <Input type="submit" value={Text}/>
    </Div>
  )
}

export default ButtonStyled

const Div = styled.div`
  display: flex;
  grid-area: 11 / 1 / 12 / 2;
  max-width: 150px;
  width: 90%;
  height: 40px;
  margin: auto;

`;

const Input = styled.input`
width: 100%;
height: 100%;
cursor: pointer;
  background: transparent;
  border-radius: 15px;
  border: 2px solid #252525;
&:hover{
  border: 2px solid #4a86ffc7;
}
`
