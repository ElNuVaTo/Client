import React, { useEffect } from "react";
import { useState } from "react";
import Carga from "./components/Carga/Carga";
import Registrarse from "./components/Registrarse";

const App = (props) => {
  const [Load, SetLoad] = useState(false);

  useEffect(() => {
    SetLoad(true);
    setTimeout(() => {
      SetLoad(false);
    }, 1500);
  }, []);



  return (
    <>
    {Load ? <Carga/> : <Registrarse />}
    </>
  );
};

export default App;

