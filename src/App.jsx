import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import Inicio from "./components/Inicio";
import Actualizar from "./components/Actualizar";
import Agregar from "./components/Agregar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
/////////////////////////////////////////////////////////////////////////////////////
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { Provider } from "react-redux";
import contactoReducer from "./redux/reducers/contactoReducer";

const almacen = createStore(contactoReducer, composeWithDevTools());

function App() {
  return (
    <div>
      <Provider store={almacen}>
        <ToastContainer />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/agregar" element={<Agregar />} />
            <Route path="/editar/:id" element={<Actualizar />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
