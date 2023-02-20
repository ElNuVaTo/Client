import React, { useEffect } from "react";
import { useState } from "react";
import Carga from "./components/Carga/Carga";
import Registrarse from "./components/Registrarse";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Comentarios from "./components/Publicaciones/Comentarios";

const App = (props) => {
  const [Load, SetLoad] = useState(false);

  useEffect(() => {
    SetLoad(true);
    setTimeout(() => {
      SetLoad(false);
    }, 5000);
  }, []);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Registrarse />} loader={<Carga />} />
          <Route path="Home" element={<Home />} loader={<Carga />} />
          <Route path="Home" element={<Comentarios />} loader={<Carga />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
