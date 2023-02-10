import React from "react";

const OpcionesButton = (props) => {
  const { Text } = props;
  return (
    <>
      <button>{Text}</button>
    </>
  );
};

OpcionesButton.propTypes = {};

export default OpcionesButton;
