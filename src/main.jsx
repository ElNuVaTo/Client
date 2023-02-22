import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import GitHub from "./components/GitHub/GitHub";
import App from "./App";
import Comentarios from "./components/Publicaciones/Comentarios";


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GitHub />
    <App/>
    {/* <Comentarios/> */}
  </React.StrictMode>
);

