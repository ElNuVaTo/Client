import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import GitHub from "./components/GitHub/GitHub";
import Registrarse from "./components/Registrarse";
import Home from "./components/Home";
import Carga from "../src/components/Carga/Carga"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registrarse/>,
    loader: <Carga/>,
    children: [
      {
        path: "Home",
        element: <Home/>,
        loader: <Carga/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GitHub />
    <RouterProvider router={router} />
  </React.StrictMode>
);


// NO FUNCIONA NUVATO RECUERDA