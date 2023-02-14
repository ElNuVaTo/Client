import React, { useEffect } from "react";
import { useState} from "react";
import FormRegi from "./components/Formulario/FormRegi";
import Menu from "./components/Menu/Menu";
import Carga from "./components/Carga/Carga";
import Api from "./components/Publicaciones/Api";

const App = (props) => {
  const [Load, SetLoad] = useState(false)

  useEffect(() => {
    SetLoad(true)
    setTimeout(() => {
      SetLoad(false)
    }, 1500)
  }, [])

  return (
    <>
      {Load ? <Carga /> : <Api/>}
    </>
  );
};

export default App;
