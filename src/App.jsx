import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Inicio from "./components/Inicio";
import Actualizar from "./components/Actualizar";
import Agregar from "./components/Agregar";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <ToastContainer />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/agregar" element={<Agregar />} />
          <Route path="/editar/:id" element={<Actualizar />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
